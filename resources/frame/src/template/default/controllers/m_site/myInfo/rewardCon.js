/**
 * 打赏我的
 */

//问题：打赏我的字体，应该跟发布的主题内容一致吧。直接打赏的是主题，并不是引用回复这种。

// import RewardHeader from '../../../view/m_site/common/loginSignUpHeader/loginSignUpHeader'
// import ContHeader from '../../../view/m_site/common/cont/contHeaderView'
// import ContMain from '../../../view/m_site/common/cont/contMainView'
// import ContFooter from '../../../view/m_site/common/cont/contFooterView'


export default {
  data:function () {
    return {
      rewardList:[],
      imgUrl:'',
    }
  },
  created(){
    this.imgUrl = '../../../../../../../static/images/mytx.png';
    this.myReward()
    console.log('33333333333')
  },
  methods:{
    myReward(){
      console.log('2222222222')
      this.apiStore.find('notice', {type:3}).then(res=>{
        this.rewardList = res
        console.log(res)
      })
    }
  },
 
}
