(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"+xxM":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(o("QbLZ"));o("i4TU");var s=r(o("wdQE"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"wx-login-bd"},s.default)},GcKf:function(t,e,o){"use strict";o.r(e);var a=o("+xxM"),s=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e.default=s.a},lLh5:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wx-login-bd-box"},[o("LoginHeader"),t._v(" "),o("main",{staticClass:"wx-login-bd-main"},[t._m(0),t._v(" "),o("form",{staticClass:"wx-login-bd-form"},[o("van-cell-group",[o("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),o("van-field",{attrs:{type:"password",label:"密码",placeholder:"请填写密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("div",{staticClass:"wx-login-bd-btn"},[o("van-button",{attrs:{type:"primary"},on:{click:t.loginBdClick}},[t._v("登录并绑定")])],1)]),t._v(" "),o("LoginFooter")],1)},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wx-login-bd-title-box"},[e("h2",{staticClass:"wx-login-bd-title-h2"},[this._v("微信绑定账号")]),this._v(" "),e("div",{staticClass:"wx-login-main-desc"},[this._v("您的微信号未绑定账号，请登录绑定您的账号")])])}];o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return s}))},sgy6:function(t,e,o){"use strict";o.r(e);var a=o("lLh5"),s=o("GcKf");for(var r in s)"default"!==r&&function(t){o.d(e,t,(function(){return s[t]}))}(r);var n=o("KHd+"),i=Object(n.a)(s.default,a.a,a.b,!1,null,null,null);e.default=i.exports},wdQE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(o("JZuw")),s=n(o("UjaL")),r=n(o("VVfg"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{userName:"",password:"",siteMode:"",openid:"",wxurl:""}},components:{LoginHeader:a.default,LoginFooter:s.default},methods:{loginBdClick:function(){var t=this;this.appFetch({url:"login",method:"post",data:{data:{attributes:{username:this.userName,password:this.password,openid:this.openid}}}}).then((function(e){if(console.log(e),e.errors)e.errors[0].detail?t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$toast.fail(e.errors[0].code);else{t.$toast.success("登录成功");var o=e.data.attributes.access_token,a=e.data.id;r.default.setLItem("Authorization",o),r.default.setLItem("tokenId",a),t.$router.push({path:r.default.getSItem("beforeVisiting")}),t.getUsers(a).then((function(e){e.readdata._data.paid?t.$router.push({path:"/"}):"pay"===t.siteMode?t.$router.push({path:"pay-circle-login"}):"public"===t.siteMode?t.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}))}})).catch((function(t){console.log(t)}))},getWatchHref:function(t,e,o){var a=this;this.appFetch({url:"wechat",method:"get",data:{code:t,state:e,sessionId:o}}).then((function(t){if(console.log(t),t.errors){console.log(t.errors[0].status),console.log(t.errors[0].user.openid);var e=t.errors[0].status,o=t.errors[0].user.openid;400==e&&(console.log("微信跳转"),a.openid=o,r.default.setLItem("openid",o),a.$router.push({path:"/wx-login-bd"}))}else if(t.data.attributes.location)console.log(t.data.attributes.loscation),console.log("获取地址"),a.wxurl=t.data.attributes.location,window.location.href=t.data.attributes.location;else if(t.data.attributes.access_token){a.$toast.success("登录成功");var s=t.data.attributes.access_token,n=t.data.id;r.default.setLItem("Authorization",s),r.default.setLItem("tokenId",n),a.$router.push({path:"/"})}else console.log("任何情况都不符合"),console.log(t.data.attributes.location)})).catch((function(t){console.log(t)}))},getForum:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){console.log(e),t.siteMode=e.readdata._data.setsite.site_mode,r.default.setLItem("siteInfo",e.readdata)})).catch((function(t){console.log(t)}))},getUsers:function(t){var e=this;return this.appFetch({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+r.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){if(console.log(t),!t.errors)return t;e.$toast.fail(t.errors[0].code)})).catch((function(t){console.log(t)}))}},created:function(){var t=this.$router.history.current.query.code,e=this.$router.history.current.query.state,o=this.$router.history.current.query.sessionId;console.log(t),console.log(e),r.default.setLItem("code",t),r.default.setLItem("state",e),t||e?this.getWatchHref(t,e,o):this.getWatchHref(),this.getForum()}}}}]);