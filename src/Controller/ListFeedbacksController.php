<?php
namespace Mcaxe\Feedback\Controller;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Mcaxe\Feedback\Model\Feedback;


class ListFeedbacksController implements RequestHandlerInterface
{
     public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        // if (!$actor || !$actor->isAdmin()) {
        //     return new JsonResponse(['error' => 'Permission denied'], 403);
        // }

        $offset = (int) ($request->getQueryParams()['page']['offset'] ?? 0);
        $limit = (int) ($request->getQueryParams()['page']['limit'] ?? 20);

        $feedbacks = Feedback::query()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->offset($offset)
            ->limit($limit)
            ->get();

        // 收集所有涉及的用户
        $includedUsers = [];
        $data = [];

        foreach ($feedbacks as $feedback) {
            $user = $feedback->user;

            $data[] = [
                'type' => 'feedbacks',
                'id' => (string) $feedback->id,
                'attributes' => [
                    'feedback' => $feedback->feedback,
                    'createdAt' => $feedback->created_at,
                ],
                'relationships' => [
                    'user' => [
                        'data' => [
                            'type' => 'users',
                            'id' => (string) $user->id,
                        ]
                    ]
                ]
            ];

            // 避免重复用户
            if (!isset($includedUsers[$user->id])) {
                $includedUsers[$user->id] = [
                    'type' => 'users',
                    'id' => (string) $user->id,
                    'attributes' => [
                        'username'   => $user->username,
                        'avatarUrl'  => $user->avatar_url,
                        'displayName'=> $user->display_name ?? $user->username,
                    ]
                ];
            }
        }

        return new JsonResponse([
            'data' => $data,
            'included' => array_values($includedUsers),
        ]);
    }
}