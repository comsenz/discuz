(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"+xxM":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(o("QbLZ"));o("i4TU");var s=n(o("wdQE"));function n(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"wx-login-bd"},s.default)},GcKf:function(t,e,o){"use strict";o.r(e);var a=o("+xxM"),s=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e.default=s.a},lLh5:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wx-login-bd-box"},[o("LoginHeader"),t._v(" "),o("main",{staticClass:"wx-login-bd-main"},[t._m(0),t._v(" "),o("form",{staticClass:"wx-login-bd-form"},[o("van-cell-group",[o("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),o("van-field",{attrs:{type:"password",label:"密码",placeholder:"请填写密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("div",{staticClass:"wx-login-bd-btn"},[o("van-button",{attrs:{type:"primary"},on:{click:t.loginBdClick}},[t._v("登录并绑定")])],1)]),t._v(" "),o("LoginFooter")],1)},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wx-login-bd-title-box"},[e("h2",{staticClass:"wx-login-bd-title-h2"},[this._v("微信绑定账号")]),this._v(" "),e("div",{staticClass:"wx-login-main-desc"},[this._v("您的微信号未绑定账号，请登录绑定您的账号")])])}];o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return s}))},sgy6:function(t,e,o){"use strict";o.r(e);var a=o("lLh5"),s=o("GcKf");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);var r=o("KHd+"),i=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);e.default=i.exports},wdQE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(o("JZuw")),s=r(o("UjaL")),n=r(o("VVfg"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{userName:"",password:"",siteMode:"",openid:"",wxurl:""}},components:{LoginHeader:a.default,LoginFooter:s.default},methods:{loginBdClick:function(){var t=this;this.appFetch({url:"login",method:"post",data:{data:{attributes:{username:this.userName,password:this.password,openid:this.openid}}}}).then((function(e){if(console.log(e),e.errors)t.$toast.fail(e.errors[0].code);else{t.$toast.success("登录成功");var o=e.data.attributes.access_token,a=e.data.id;n.default.setLItem("Authorization",o),n.default.setLItem("tokenId",a),t.$router.push({path:n.default.getSItem("beforeVisiting")}),t.getUsers(a).then((function(e){e.readdata._data.paid?t.$router.push({path:"/"}):"pay"===t.siteMode?t.$router.push({path:"pay-circle-login"}):"public"===t.siteMode?t.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}))}})).catch((function(t){console.log(t)}))},getWatchHref:function(t,e){var o=this;this.appFetch({url:"wechat",method:"get",data:{code:t,state:e}}).then((function(t){if(console.log(t),t.errors){console.log(t.errors[0].status),console.log(t.errors[0].user.openid);var e=t.errors[0].status,a=t.errors[0].user.openid;400==e&&(console.log("微信跳转"),o.openid=a,n.default.setLItem("openid",a),o.$router.push({path:"/wx-login-bd"}))}else if(t.data.attributes.location)console.log(t.data.attributes.loscation),console.log("获取地址"),o.wxurl=t.data.attributes.location,window.location.href=t.data.attributes.location;else if(t.data.attributes.access_token){o.$toast.success("登录成功");var s=t.data.attributes.access_token,r=t.data.id;n.default.setLItem("Authorization",s),n.default.setLItem("tokenId",r),o.$router.push({path:"/"})}else console.log("任何情况都不符合"),console.log(t.data.attributes.location)})).catch((function(t){console.log(t)}))},getForum:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){console.log(e),t.siteMode=e.readdata._data.setsite.site_mode,n.default.setLItem("siteInfo",e.readdata)})).catch((function(t){console.log(t)}))},getUsers:function(t){return this.appFetch({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+n.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){return console.log(t),t})).catch((function(t){console.log(t)}))}},created:function(){var t=this.$router.history.current.query.code,e=this.$router.history.current.query.state;console.log(t),console.log(e),n.default.setLItem("code",t),n.default.setLItem("state",e),t||e?this.getWatchHref(t,e):this.getWatchHref(),this.getForum()}}}}]);