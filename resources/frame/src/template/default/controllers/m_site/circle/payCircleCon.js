/**
 * pc 端首页控制器
 */
export default {
  data: function() {
    return {
      isfixNav: false,
      current:0,
      todos: [
        { text: '选项一111' },
        { text: '选项二' },
        { text: '选项三' },
        { text: '选项四' },
        { text: '选项五' },
        { text: '选项六' },
        { text: '选项七' },
        { text: '选项八' }
      ],
      siteInfo: false,
      siteUsername:'',  //站长
      joinedAt:'',    //加入时间
      sitePrice:'',   //加入价格
      username:'' , //当前用户名
      loading: false,  //是否处于加载状态
      finished: false, //是否已加载完所有数据
      isLoading: false, //是否处于下拉刷新状态
      pageIndex: 1,//页码
      pageLimit: 20,
      allowRegister: '',
    }
  },
  created(){
    this.getInfo();
  },
  methods: {
    getInfo(initStatus = false){
      //请求站点信息，用于判断站点是否是付费站点
      return this.appFetch({
        url: 'forum',
        method: 'get',
        data: {
          include: ['users'],
        }
      }).then((res) => {
        if (res.errors){
          this.$toast.fail(res.errors[0].code);
          throw new Error(res.error)
        }else{
        if(initStatus){
          this.siteInfo = []
        }
        console.log(res);
        this.siteInfo = res.readdata;
        console.log(res.readdata._data.allowRegister+'请求');
        this.allowRegister = res.readdata._data.allowRegister;
        if(res.readdata._data.siteAuthor){
          this.siteUsername = res.readdata._data.siteAuthor.username;
        } else {
          this.siteUsername = '暂无站长信息';
        }
        this.sitePrice = res.readdata._data.sitePrice
        //把站点是否收费的值存储起来，以便于传到父页面
        // this.isPayVal = res.readdata._data.siteMode;
        // if(this.isPayVal != null && this.isPayVal != ''){
        //   this.isPayVal = res.readdata._data.siteMode;
        //   //判断站点信息是否付费，用户是否登录，用户是否已支付
        //   this.detailIf(this.isPayVal,false);
        // }
       }
      });
    },
    //跳转到登录页
    loginJump:function(){
      this.$router.push({ path:'/login-user'})
    },
    //跳转到注册页
      registerJump:function(){
      this.$router.push({ path:'/sign-up'})
    },
    onRefresh(){    //下拉刷新
      this.pageIndex = 1;
      this.getInfo(true).then(()=>{
        this.$toast('刷新成功');
        this.finished = false;
        this.isLoading = false;
      }).catch((err)=>{
        this.$toast('刷新失败');
        this.isLoading = false;
      })
    }
  },

  mounted: function() {

  },
  beforeRouteLeave (to, from, next) {
    next()
  },
}
