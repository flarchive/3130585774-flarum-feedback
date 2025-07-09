<?php
namespace Mcaxe\Feedback\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Mcaxe\Feedback\Model\Feedback;

class FeedbackSerializer extends AbstractSerializer
{
    protected $type = 'feedbacks';

    protected function getDefaultAttributes($model)
    {
        return [
            'feedback' => $model->feedback,
            'createdAt' => $this->formatDate($model->created_at),
        ];
    }

    public function user($model)
    {
        return $this->hasOne($model, \Flarum\Api\Serializer\BasicUserSerializer::class);
    }
}
