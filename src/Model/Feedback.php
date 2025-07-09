<?php
namespace Mcaxe\Feedback\Model;

use Flarum\Database\AbstractModel;

class Feedback extends AbstractModel
{
    protected $table = 'mcaxe_feedbacks';

    protected $fillable = ['user_id', 'feedback', 'created_at'];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(\Flarum\User\User::class);
    }
}