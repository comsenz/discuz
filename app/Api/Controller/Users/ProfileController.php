<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Api\Controller\Users;

use App\Api\Serializer\UserProfileSerializer;
use App\Api\Serializer\UserSerializer;
use App\Models\Group;
use App\Repositories\UserRepository;
use Discuz\Api\Controller\AbstractResourceController;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Contracts\Setting\SettingsRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Tobscure\JsonApi\Exception\InvalidParameterException;

class ProfileController extends AbstractResourceController
{
    use AssertPermissionTrait;

    public $serializer = UserSerializer::class;

    public $optionalInclude = ['wechat', 'groups'];

    protected $users;

    protected $settings;

    public function __construct(UserRepository $users, SettingsRepository $settings)
    {
        $this->users = $users;
        $this->settings = $settings;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return mixed
     * @throws InvalidParameterException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $id = Arr::get($request->getQueryParams(), 'id');

        $user = $this->users->findOrFail($id, $actor);

        if ($actor->id === $user->id) {
            $this->serializer = UserProfileSerializer::class;
        }

        // 付费模式是否过期
        $user->paid = ! in_array(Group::UNPAID, $actor->groups->pluck('id')->toArray());

        $include = $this->extractInclude($request);

        $user->load($include);

        return $user;
    }
}
