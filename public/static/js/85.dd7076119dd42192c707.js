(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"1BLf":function(t,e,n){"use strict";n.r(e);var i=n("S6fc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},PvCI:function(t,e,n){"use strict";n.r(e);var i=n("aWrB"),o=n("1BLf");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s=n("KHd+"),r=Object(s.a)(o.default,i.a,i.b,!1,null,null,null);e.default=r.exports},S6fc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("QbLZ"));n("i4TU"),n("E2jd");var o=a(n("d8De"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"bind-phone-view"},o.default)},aWrB:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bind-phone-box"},[n("BindPhoneHeader"),t._v(" "),n("main",{staticClass:"bind-phone-main"},[t._m(0),t._v(" "),n("div",{staticClass:"login-module-form"},[n("van-cell-group",[n("van-field",{attrs:{label:"手机号",placeholder:"请输入您的手机号"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}}),t._v(" "),n("van-field",{attrs:{center:"",clearable:"",label:"验证码",placeholder:"请输入验证码"},model:{value:t.verifyNum,callback:function(e){t.verifyNum=e},expression:"verifyNum"}},[n("van-button",{class:{grayBg:t.isGray},attrs:{slot:"button",size:"small",type:"default"},on:{click:t.sendSmsCode},slot:"button"},[t._v(t._s(t.btnContent))])],1)],1)],1),t._v(" "),n("div",{staticClass:"bind-phone-btn"},[n("van-button",{attrs:{type:"primary"},on:{click:function(e){return t.bindPhone()}}},[t._v("提交")])],1)]),t._v(" "),n("BindPhoneFooter")],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-module-title-box"},[e("h2",{staticClass:"login-module-title"},[this._v("绑定手机号")])])}];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},d8De:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("JZuw")),o=r(n("UjaL")),a=r(n("VVfg")),s=r(n("YSgG"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{phoneNum:"",verifyNum:"",btnContent:"获取验证码",time:1,disabled:!1,login:"login",insterVal:"",isGray:!1,siteMode:""}},methods:{sendSmsCode:function(){var t=this,e=this.phoneNum;e?(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(e)||this.$toast("您输入的手机号码不合法，请重新输入"),this.appFetch({url:"sendSms",method:"post",data:{data:{attributes:{mobile:this.phoneNum,type:"bind"}}}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):(t.insterVal=e.data.attributes.interval,t.time=t.insterVal,t.timer())}))):this.$toast("请输入手机号码")},timer:function(){if(this.time>1){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3);this.isGray=!0}else 1==this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1,this.isGray=!1)},bindPhone:function(){var t=this;this.appFetch({url:"smsVerify",method:"post",data:{data:{attributes:{mobile:this.phoneNum,code:this.verifyNum,type:"bind"}}}}).then((function(e){t.$router.push({path:"/circle"}),e.errors?t.$toast.fail(e.errors[0].code):e.errors||("pay"===t.siteMode?t.$router.push({path:"pay-the-fee"}):"public"===t.siteMode&&t.$router.push({path:"/"}))})).catch((function(t){console.log(t)}))},getUsers:function(t){var e=this;return(0,s.default)({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+a.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){if(!t.errors)return console.log(t),t.readdata._data.mobile;e.$toast.fail(t.errors[0].code)})).catch((function(t){console.log(t)}))}},created:function(){var t=this;this.siteMode=a.default.getLItem("siteInfo")._data.setsite.site_mode;var e=a.default.getLItem("tokenId");this.getUsers(e).then((function(e){""!==e&&t.$router.push("bind-new-phone")}))},components:{BindPhoneHeader:i.default,BindPhoneFooter:o.default}}}}]);