<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Flarum\Database\Migration;

return Migration::createTable('mcaxe_feedbacks', function (Blueprint $table) {
    $table->increments('id');
    $table->unsignedInteger('user_id')->index();
    $table->text('feedback');
    $table->timestamp('created_at')->nullable();

    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
});