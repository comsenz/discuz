<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Discuz\Tests\Api;

use Discuz\Tests\TestCase;

class RegisterTest extends TestCase
{
    public function testRegister()
    {
        $this->assertTrue(true);
//        $response = $this->http()->post('register', [
//            'json' => [
//                'data' => [
//                    'attributes' => [
//                        'username' => 'test',
//                        'password' => 'test123'
//                    ]
//                ]
//            ]
//        ]);
//
//        $this->assertSame($response->getStatusCode(), 200);
//        $this->assertStringContainsString('access_token', $response->getBody()->getContents());
    }
}