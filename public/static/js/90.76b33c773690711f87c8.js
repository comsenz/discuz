(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"8nXa":function(t,e,a){"use strict";a.r(e);var n=a("zFIK"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e.default=s.a},hlrv:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wx-sign-up-bd-box"},[a("LoginHeader"),t._v(" "),a("main",{staticClass:"wx-sign-up-bd-main"},[t._m(0),t._v(" "),a("form",{staticClass:"wx-sign-up-bd-form",attrs:{action:""}},[a("van-cell-group",[a("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),a("van-field",{attrs:{type:"password",label:"密码",placeholder:"请填写密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("div",{staticClass:"wx-sign-up-bd-btn"},[a("van-button",{attrs:{type:"primary"},on:{click:t.signUpBdClick}},[t._v("注册并绑定")])],1)]),t._v(" "),a("LoginFooter")],1)},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wx-sign-up-bd-title-box"},[e("h2",{staticClass:"wx-sign-up-bd-title-box-h2"},[this._v("微信绑定账号")]),this._v(" "),e("div",{staticClass:"wx-sign-up-main-desc"},[this._v("您的微信号未绑定账号，请注册并绑定您的账号")])])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}))},nWjw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(a("JZuw")),s=r(a("UjaL")),o=r(a("VVfg"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{userName:"",password:"",phoneStatus:"",siteMode:"",openid:""}},components:{LoginHeader:n.default,LoginFooter:s.default},methods:{signUpBdClick:function(){var t=this;this.appFetch({url:"register",method:"post",data:{data:{type:"users",attributes:{username:this.userName,password:this.password,openid:this.openid}}}}).then((function(e){if(console.log(e),e.errors){var a=t.appCommonH.errorHandling(e.errors,!0);t.$toast.fail(a[0].errorDetail)}else{t.$toast.success("注册成功");var n=e.data.attributes.access_token,s=e.data.id;o.default.setLItem("Authorization",n),o.default.setLItem("tokenId",s),t.getForum().then((function(){t.phoneStatus?t.$router.push({path:"bind-phone"}):"pay"===t.siteMode?t.$router.push({path:"pay-the-fee"}):"public"===t.siteMode?t.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}))}})).catch((function(t){console.log(t)}))},getForum:function(){var t=this;return this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){console.log(e),t.phoneStatus=e.readdata._data.qcloud.qcloud_sms,t.siteMode=e.readdata._data.setsite.site_mode})).catch((function(t){console.log(t)}))}},created:function(){this.getForum(),this.openid=o.default.getLItem("openid")}}},oe1W:function(t,e,a){"use strict";a.r(e);var n=a("hlrv"),s=a("8nXa");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var r=a("KHd+"),i=Object(r.a)(s.default,n.a,n.b,!1,null,null,null);e.default=i.exports},zFIK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a("QbLZ"));a("i4TU");var s=o(a("nWjw"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"wx-sign-up-bd"},s.default)}}]);