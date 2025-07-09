<?php

namespace Mcaxe\Feedback\Controller;

use Flarum\Http\RequestUtil;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;


use Mcaxe\Feedback\Model\Feedback;

class FeedbackController implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);


        if (!$actor || !$actor->exists) {
            return new JsonResponse([
                'error' => 'You must be logged in to submit feedback.',
            ], 401);
        }

        $input = $request->getParsedBody()['feedback'] ?? '';
        $input = strip_tags($input); // Remove HTML tags
        $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8'); // Encode special chars

        $sensitiveWords = ['select', 'insert', 'update', 'delete', 'drop', 'union', '--', '#', '/*', '*/'];
        // XSS filtering: reject if input contains suspicious script tags or event handlers
        if (preg_match('/<\s*script\b|on\w+\s*=/i', $input)) {
            return new JsonResponse([
            'error' => 'Your feedback contains potentially unsafe content.',
            ], 400);
        }
        foreach ($sensitiveWords as $word) {
            if (stripos($input, $word) !== false) {
                return new JsonResponse([
                    'error' => 'Your feedback contains forbidden or sensitive words.',
                ], 400);
            }
        }

        if ( strlen($input) > 500) {
            return new JsonResponse([
                'error' => 'Feedback must be between 10 and 500 characters.',
            ], 400);
        }

        $feedback = new Feedback();

        $feedback->user_id = $actor->id;
        $feedback->feedback = $request->getParsedBody()['feedback'] . '';
        $feedback->created_at = date('Y-m-d H:i:s');

        $feedback->save();

        return new JsonResponse([
            'id'       => $actor->id,
            'feedback' => $request->getParsedBody()['feedback'],
        ]);
    }
}