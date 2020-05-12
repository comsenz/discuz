<?php

use Discuz\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

class ChangeThreadVideoColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema()->table('thread_video', function (Blueprint $table) {
            $table->unsignedInteger('post_id')->after('thread_id')->index()->comment('帖子 id');
            $table->unsignedTinyInteger('type')->default(0)->after('user_id')->comment('类型：0 视频 1 音频');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema()->table('thread_video', function (Blueprint $table) {
            $table->dropColumn('post_id');
            $table->dropColumn('type');
        });
    }
}
