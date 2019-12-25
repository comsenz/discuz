/**
 * 修改页面里的绑定新手机号
 */


import ModifyHeader from '../../../view/m_site/common/loginSignUpHeader/loginSignUpHeader';
import browserDb from '../../../../../helpers/webDbHelper';


export default {
  data: function () {
    return {
      sms: '',
      newphone: '',
    //   modifyState: true,
      bind: 'bind',
      time: 1, //发送验证码间隔时间
      insterVal: '',
      isGray: false,
      btnContent:'发送验证码'
    }
  },

  components: {
    ModifyHeader
  },

  mounted() {

  },
  methods: {
    //获取验证码
    sendSmsCodePhone(){
        var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;//手机号正则验证
        var newphone = this.newphone;
        console.log(newphone,'999999999999')
        if(!newphone){//未输入手机号
         this.$toast("请输入手机号码");
         return;
        }
        if(!reg.test(newphone)){//手机号不合法
         this.$toast("您输入的手机号码不合法，请重新输入");
        }
  
        // 获取验证码请求
        this.appFetch({
          url:"sendSms",
          method:"post",
          data:{
            "data": {
              "attributes": {
                mobile:this.newphone,
                type:'bind'
              }
            }
          }
        }).then(res => {
            console.log(res);
            this.insterVal = res.data.attributes.interval;
            // console.log(this.insterVal+'555555');
            this.time = this.insterVal;
            this.timer();
         });
      },
      timer(){
        // alert('执行');
        if(this.time>1){
          // alert('2222');
         this.time--;
         this.btnContent = this.time+"s后重新获取";
         this.disabled = true;
         var timer = setTimeout(this.timer,1000);
         this.isGray = true;
        }else if(this.time == 1){
         this.btnContent = "获取验证码";
         clearTimeout(timer);
         this.disabled = false;
         this.isGray = false;
        }
      },

      bindNewPhone() { //修改新的手机号后提交验证码

        if (this.newphone === '') {
          this.$toast("手机号码不能为空，请重新输入");
          return;
        }
  
        if (this.sms === '') {
          this.$toast("验证码不能为空");
          return;
        }
  
        this.appFetch({
          url: "smsVerify",
          method: "post",
          data: {
            "data": {
              "attributes": {
                "mobile": this.newphone,
                "code": this.sms,
                'type': this.bind
              }
            }
          }
        }).then(res => {
          this.$toast("手机号绑定成功");
        }).catch((err)=>{
          this.$toast("手机号绑定失败，请重试");
        });
      }

    },

    timer() {
      // alert('执行');
      if (this.time > 1) {
        // alert('2222');
        this.time--;
        this.btnContent = this.time + "s后重新获取";
        this.disabled = true;
        var timer = setTimeout(this.timer, 1000);
        this.isGray = true;
      } else if (this.time == 1) {
        this.btnContent = "获取验证码";
        clearTimeout(timer);
        this.disabled = false;
        this.isGray = false;
      }
    },

  }