(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{Cpqr:function(t,e,n){},LkjF:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify-phone-box"},[n("ModifyHeader",{attrs:{title:"修改手机号"}}),t._v(" "),n("main",{staticClass:"modify-phone-main content"},[n("div",{staticClass:"modify-phone-form my-info-form"},[n("van-cell-group",[t.modifyState?n("van-field",{attrs:{clearable:"",label:"验证旧手机",placeholder:"请输入旧手机号"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}}):n("van-field",{attrs:{clearable:"",label:"设置新手机",placeholder:"请输入新手机号"},model:{value:t.newphone,callback:function(e){t.newphone=e},expression:"newphone"}}),t._v(" "),n("van-field",{attrs:{clearable:"",label:"验证码",placeholder:"请输入验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"default"},on:{click:t.sendSmsCodePhone},slot:"button"},[t._v(t._s(t.btnContent))])],1)],1)],1),t._v(" "),n("div",{staticClass:"modify-phone-operating"},[t.modifyState?n("van-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")]):n("van-button",{attrs:{type:"primary"},on:{click:t.bindNewPhone}},[t._v("提交")])],1)])],1)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},"M+Jb":function(t,e,n){},kzQ7:function(t,e,n){"use strict";n.r(e);var i=n("LkjF"),o=n("ta5n");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s=n("KHd+"),r=Object(s.a)(o.default,i.a,i.b,!1,null,null,null);e.default=r.exports},nE7E:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("JZuw")),o=a(n("VVfg"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{phoneNum:"",password:"",sms:"",newphone:"",modifyState:!0,bind:"bind",time:1,insterVal:"",isGray:!1,btnContent:"发送验证码",mobileConfirmed:""}},components:{ModifyHeader:i.default},mounted:function(){this.userInformation()},methods:{userInformation:function(){var t=this,e=o.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+e,data:{}}).then((function(e){t.phoneNum=e.data.attributes.mobile}))},sendSmsCodePhone:function(){var t=this;console.log("11111111111111"),this.modifyState?this.appFetch({url:"sendSms",method:"post",data:{data:{attributes:{type:"verify"}}}}).then((function(e){console.log(e),t.insterVal=e.data.attributes.interval,t.time=t.insterVal,t.timer()})):this.appFetch({url:"sendSms",method:"post",data:{data:{attributes:{mobile:this.newphone,type:this.bind,code:this.sms}}}}).then((function(e){console.log(e),t.insterVal=e.data.attributes.interval,t.time=t.insterVal,t.timerNext()}))},nextStep:function(){var t=this;""!==this.phoneNum?""!==this.sms?this.appFetch({url:"smsVerify",method:"post",data:{data:{attributes:{mobile:this.phoneNum,code:this.sms,type:"verify"}}}}).then((function(e){t.sms="",t.modifyState=!t.modifyState,t.mobileConfirmed=e.readdata._data.mobileConfirmed,1==t.mobileConfirmed&&(t.$toast("手机号验证成功"),t.$router.push({path:"/bind-new-phone"}))})).catch((function(e){t.$toast("手机号验证失败，请重试")})):this.$toast("验证码不能为空"):this.$toast("手机号码不能为空，请重新输入")},timer:function(){if(this.time>1){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3);this.isGray=!0}else 1==this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1,this.isGray=!1)},bindNewPhone:function(){var t=this;""!==this.phoneNum?""!==this.sms?this.appFetch({url:"smsVerify",method:"post",data:{data:{attributes:{mobile:this.newphone,code:this.sms,type:this.bind}}}}).then((function(e){t.$toast("手机号修改成功")})).catch((function(e){t.$toast("手机号修改失败，请重试")})):this.$toast("验证码不能为空"):this.$toast("手机号码不能为空，请重新输入")}}}},ta5n:function(t,e,n){"use strict";n.r(e);var i=n("zsAt"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},zsAt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("QbLZ"));n("M+Jb"),n("Cpqr");var o=a(n("nE7E"));function a(t){return t&&t.__esModule?t:{default:t}}n("E2jd"),e.default=(0,i.default)({name:"modify-phone-view"},o.default)}}]);