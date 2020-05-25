<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Traits;

use App\Exceptions\ThreadException;
use App\Models\UserActionLogs;
use App\Models\Thread;

trait ThreadTrait
{
    /**
     * @param $message
     * @throws ThreadException
     */
    public function ThreadException($message = 'fail')
    {
        throw new ThreadException($message);
    }

    /**
     * 判断是否可以操作
     *
     * @param Thread $thread
     * @param mixed $behavior
     * @param string $action
     * @throws ThreadException
     */
    public function action(Thread $thread, $behavior, &$action = '')
    {
        if (!$thread->offsetExists('user')) {
            $this->ThreadException('count_fail');
        }

        if (is_numeric($behavior)) {
            $action = $this->behavior($thread);
        } else {
            // 操作行为
            $this->actionThread($thread, $behavior);
            $action = $behavior;
        }
    }

    /**
     * 帖子状态的改变
     *
     * @param Thread $thread
     * @return mixed
     * @throws ThreadException
     */
    public function behavior(Thread $thread)
    {
        if (!array_key_exists($thread->is_approved, UserActionLogs::behavior())) {
            $this->ThreadException('behavior_fail');
        }

        if (is_null($thread->deleted_at)) {
            if ($thread->is_approved == 1) {
                $this->increments($thread);
            }

            if ($thread->is_approved != 2) {
                $this->decrement($thread);
            }
        }

        return $this->transLogAction($thread->is_approved);
    }

    /**
     * 操作帖子的行为
     *
     * @param Thread $thread
     * @param string $behavior
     * @throws ThreadException
     */
    public function actionThread(Thread $thread, $behavior)
    {
        if (!in_array($behavior, UserActionLogs::getAction('thread'))) {
            $this->ThreadException('action_fail');
        }

        switch ($behavior) {
            case 'create':
                $this->increments($thread);
                break;
            case 'hide':
                if ($thread->is_approved == 1) {
                    $this->decrement($thread);
                }
                break;
            case 'restore':
                if ($thread->is_approved == 1) {
                    $this->increments($thread);
                }
                break;
        }
    }

    /**
     * @param Thread $thread
     */
    public function increments(Thread $thread)
    {
        $thread->category->increment('thread_count');
        $thread->user->increment('thread_count');
    }

    /**
     * @param Thread $thread
     */
    public function decrement(Thread $thread)
    {
        $thread->category->decrement('thread_count');
        $thread->user->decrement('thread_count');
    }

    /**
     * 转义 action 操作
     *
     * @param $isApproved
     * @return mixed
     */
    public function transLogAction($isApproved)
    {
        return UserActionLogs::behavior()[$isApproved];
    }

    /**
     * 刷新相关数据
     *
     * @param Thread $thread
     */
    public function refreshData(Thread $thread)
    {
        if ($thread && $thread->exists) {
            $thread->refreshPostCount();
            $thread->refreshLastPost();
            $thread->save();
        }
    }
}
