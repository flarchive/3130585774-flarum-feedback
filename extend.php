<?php

/*
 * This file is part of mcaxe/flarum-feedback.
 *
 * Copyright (c) 2025 Rustry.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Mcaxe\Feedback;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less')
        ->content(function ($controller) {
            // 这里可以注入页面内容（可选）

        }),

    new Extend\Locales(__DIR__.'/locale'),



    (new Extend\Routes('api'))
        ->post('/mcaxe-flarum-feedbacks', 'mcaxe.feedbacks.store', Controller\FeedbackController::class)
        ->get('/mcaxe-flarum-feedbacks-list', 'mcaxe.feedback.index', Controller\ListFeedbacksController::class),
];