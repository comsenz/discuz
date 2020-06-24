<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Traits;

use App\MessageTemplate\PostDeleteMessage;
use App\MessageTemplate\PostModMessage;
use App\MessageTemplate\PostOrderMessage;
use App\MessageTemplate\PostStickMessage;
use App\MessageTemplate\PostThroughMessage;
use App\MessageTemplate\Wechat\WechatPostDeleteMessage;
use App\MessageTemplate\Wechat\WechatPostModMessage;
use App\MessageTemplate\Wechat\WechatPostOrderMessage;
use App\MessageTemplate\Wechat\WechatPostStickMessage;
use App\MessageTemplate\Wechat\WechatPostThroughMessage;
use App\Models\Thread;
use App\Notifications\System;
use Illuminate\Support\Arr;

/**
 * Thread 发送通知
 *
 * Trait ThreadNoticesTrait
 * @package App\Traits
 */
trait ThreadNoticesTrait
{
    /**
     * 内容置顶通知
     *
     * @param $thread
     */
    private function sendIsSticky($thread)
    {
        $build = [
            'message' => $thread->getContentByType(),
            'raw' => [
                'thread_id' => $thread->id,
            ],
        ];

        // 系统通知
        $thread->user->notify(new System(PostOrderMessage::class, $build));

        // 微信通知
        $thread->user->notify(new System(WechatPostOrderMessage::class, $build));
    }

    /**
     * 内容精华通知
     *
     * @param $thread
     */
    private function sendIsEssence($thread)
    {
        $build = [
            'message' => $thread->getContentByType(),
            'raw' => [
                'thread_id' => $thread->id,
            ],
        ];

        // 系统通知
        $thread->user->notify(new System(PostStickMessage::class, $build));

        // 微信通知
        $thread->user->notify(new System(WechatPostStickMessage::class, $build));
    }

    /**
     * 内容删除通知
     *
     * @param Thread $thread
     * @param array $attach 原因
     */
    private function sendIsDeleted($thread, $attach)
    {
        $data = [
            'message' => $thread->getContentByType(),
            'refuse' => $attach['refuse'],
        ];

        // 系统通知
        $thread->user->notify(new System(PostDeleteMessage::class, Arr::set($data, 'raw', ['thread_id' => $thread->id])));

        // 微信通知 (跳转到首页)
        $thread->user->notify(new System(WechatPostDeleteMessage::class, Arr::set($data, 'raw', ['thread_id' => 0])));
    }

    /**
     * 内容审核通知
     *
     * @param $thread
     * @param array $attach 原因
     */
    private function sendIsApproved($thread, $attach)
    {
        $data = [
            'message' => $thread->getContentByType(),
            'refuse' => $attach['refuse'],
            'raw' => [
                'thread_id' => $thread->id,
            ],
        ];

        if ($thread->is_approved == 1) {
            // 发送通过通知
            $thread->user->notify(new System(PostThroughMessage::class, $data));
            // 微信通知
            $thread->user->notify(new System(WechatPostThroughMessage::class, $data));
        } elseif ($thread->is_approved == 2) {
            // 忽略就发送不通过通知
            $thread->user->notify(new System(PostModMessage::class, $data));
            // 微信通知
            $thread->user->notify(new System(WechatPostModMessage::class, $data));
        }
    }

    /**
     * 过滤原因值
     *
     * @param $attach
     * @return mixed|string
     */
    public function reasonValue($attach)
    {
        if (Arr::has($attach, 'message')) {
            if (!empty($attach['message'])) {
                return $attach['message'];
            }
        }

        return '无';
    }

    /**
     * 检查值 是否修改
     *
     * @param $thread
     * @param $field
     * @return bool
     */
    public function checkOriginal($thread, $field)
    {
        if ($thread->{$field} != $thread->getRawOriginal($field)) {
            return true;
        }

        return false;
    }
}
