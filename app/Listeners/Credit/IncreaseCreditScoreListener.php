<?php


namespace App\Listeners\Credit;


use App\Events\Credit\IncreaseCreditScore;
use App\Models\CreditScoreRule;
use App\Models\UserCreditScoreLog;
use App\Models\UserCreditScoreStatistics;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\ConnectionInterface;
use Psr\Log\LoggerInterface;

class IncreaseCreditScoreListener
{
    protected $bus;

    protected $db;

    protected $logger;

    public function __construct(Dispatcher $bus, ConnectionInterface $db, LoggerInterface $logger)
    {
        $this->bus = $bus;
        $this->db = $db;
        $this->logger = $logger;
    }

    /**
     * @param ConnectionInterface $db
     */
    public function handle(IncreaseCreditScore $event)
    {
        try {
            $uid = $event->actor->id;
            //查询积分规则
            $rule = CreditScoreRule::where('action', $event->action)->first();
            if($rule == null) {
                throw new \Exception('action is not found');
            }
            $rid = $rule->id;
            $type = 1;
            //不为true 则需要减积分
            if(!$event->isIncrease) {
                $type = 2;
            }

            //是否可以加积分
            $isCan = $this->isCanIncreaseCreditScore($uid, $rule);
            if(!$isCan) {
                return;
            }
            $data['uid'] = $uid;
            $data['rid'] = $rid;
            $data['cycle_type'] = $rule->cycle_type;
            $data['interval_time'] = $rule->interval_time;
            $data['reward_num'] = $rule->reward_num;
            $data['score'] = $rule->score;
            $data['type'] = $type;

            //记录当前用户规则积分日志
            UserCreditScoreLog::create($data);
            /** 积分统计表增加积分, 计算积分，并写入 */
            $static = UserCreditScoreStatistics::where('uid', $uid)->first();
            if($static == null) {
                //统计表中无数据，此时删除发帖统计积分等于0
                $score = $type == 2 ? 0 : $rule->score;
                UserCreditScoreStatistics::create(['uid' => $uid, 'sum_score' => $score]);
            } else {
                $score = $static->sum_score + $rule->score;
                if($type == 2) {
                    //积分逻辑，不能为负数
                    $score = $static->sum_score - $rule->score;
                    if($score < 0) {
                        $score = 0;
                    }
                }

                $static->sum_score = $score;
                $static->save();
            }

        } catch (\Exception $e) {
            $this->logger->error("increase error:", ['msg'=>$e->getMessage()]);
        }
        return;
    }


    protected function isCanIncreaseCreditScore($uid, CreditScoreRule $rule)
    {
        $isCan = false;
        $last = UserCreditScoreLog::where('uid', $uid)->latest()->first();
        switch ($rule->cycle_type) {
            //不限，随便加,直到达到奖励次数上限(如果有设置限制次数)
            case 0:
                if($last->cycle_type != $rule->cycle_type) {
                    $isCan = true;
                    break;
                }
                if($rule->reward_num == 0 || UserCreditScoreLog::where('uid', $uid)->count() <= $rule->reward_num) {
                    $isCan = true;
                }
                break;
            //一次，不限制奖励次数，一直加
            case  1:
                $isCan = true;
                break;
            //每天
            case 2:

                break;
            //周期，小时时间间隔
            case 3:
                break;
            //周期，分钟时间间隔
            case 4:
                break;
        }
        return $isCan;
    }




}
