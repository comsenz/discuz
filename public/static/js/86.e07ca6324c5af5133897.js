(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{J4oq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("QbLZ"));r("i4TU");var o=n(r("wwLr"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"sign-up-view"},o.default)},WTCk:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-up-box"},[r("SignUpHeader"),e._v(" "),r("main",{staticClass:"sign-up-main"},[e._m(0),e._v(" "),r("form",{staticClass:"login-module-form"},[r("van-cell-group",[r("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("van-field",{attrs:{clearable:"",type:"password",label:"密码",placeholder:"请填写密码",error:e.error,"error-message":e.errorMessage},on:{clear:function(t){return e.clearError("clear")},focus:function(t){return e.clearError("focus")},input:function(t){return e.clearError("input")},blur:function(t){return e.clearError("blur")}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),r("div",{staticClass:"sign-up-btn"},[r("van-button",{attrs:{loading:e.btnLoading,type:"primary"},on:{click:e.signUpClick}},[e._v("注册")])],1)]),e._v(" "),r("SignUpFooter")],1)},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-module-title-box"},[t("p",{staticClass:"login-module-title"},[this._v("注册")])])}];r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}))},fb1Y:function(e,t,r){"use strict";r.r(t);var a=r("WTCk"),o=r("vMx2");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);var s=r("KHd+"),u=Object(s.a)(o.default,a.a,a.b,!1,null,null,null);t.default=u.exports},vMx2:function(e,t,r){"use strict";r.r(t);var a=r("J4oq"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t.default=o.a},wwLr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r("JZuw")),o=s(r("UjaL"));r("E2jd");var n=s(r("VVfg"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{username:"",password:"",btnLoading:!1,error:!1,errorMessage:"",phoneStatus:"",siteMode:""}},components:{SignUpHeader:a.default,SignUpFooter:o.default},methods:{signUpClick:function(){var e=this;this.appFetch({url:"register",method:"post",data:{data:{type:"users",attributes:{username:this.username,password:this.password}}}}).then((function(t){console.log(t),e.getForum().then((function(){if(t.errors)e.$toast.fail(t.errors[0].code);else{e.$toast.success("注册成功");var r=t.data.attributes.access_token,a=t.data.id;n.default.setLItem("Authorization",r),n.default.setLItem("tokenId",a),console.log(e.phoneStatus),e.phoneStatus?e.$router.push({path:"bind-phone"}):"pay"===e.siteMode?e.$router.push({path:"pay-the-fee"}):"public"===e.siteMode?e.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}}))})).catch((function(e){console.log(e)}))},clearError:function(e){switch(e){case"clear":this.error=!1,this.errorMessage="";break;case"blur":""!==this.password&&(this.error=!0);break;default:this.error=!1}},getForum:function(){var e=this;return this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),e.phoneStatus=t.readdata._data.qcloud.qcloud_sms,e.siteMode=t.readdata._data.setsite.site_mode,n.default.setLItem("siteInfo",t.readdata)})).catch((function(e){console.log(e)}))}},created:function(){this.getForum()}}}}]);