<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Commands\Vote;

use App\Censor\Censor;
use App\Models\User;
use App\Models\Vote;
use App\Models\VoteOption;
use App\Repositories\UserRepository;
use App\Validators\VoteValidator;
use Carbon\Carbon;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Foundation\EventsDispatchTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Bus\Dispatcher as DispatcherBus;
use Illuminate\Support\Arr;

class CreateVoteOptions
{
    use AssertPermissionTrait;
    use EventsDispatchTrait;

    public $vote_id;

    public $content;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * @param User $actor
     * @param $vote_id
     * @param $content
     */
    public function __construct(User $actor, $vote_id, $content)
    {
        $this->actor = $actor;
        $this->vote_id = $vote_id;
        $this->content = $content;
    }

    public function handle(Dispatcher $events)
    {
        $this->events = $events;

        return VoteOption::build(['vote_id' => $this->vote_id, 'content' => $this->content])->save();

    }
}
