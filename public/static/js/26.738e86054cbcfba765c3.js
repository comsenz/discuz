(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1GR3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(a("4gYi")),n=u(a("pNQN"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{secretId:"",secretKey:"",appId:"",type:""}},created:function(){this.tencentCloudList();var t=this.$route.query.type;this.type=t},methods:{configClick:function(t){},tencentCloudList:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){console.log(e),t.appId=e.readdata._data.qcloud.qcloud_app_id,t.secretId=e.readdata._data.qcloud.qcloud_secret_id,t.secretKey=e.readdata._data.qcloud.qcloud_secret_key}))},Submission:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"qcloud_app_id",value:this.appId,tag:"qcloud"}},{attributes:{key:"qcloud_secret_id",value:this.secretId,tag:"qcloud"}},{attributes:{key:"qcloud_secret_key",value:this.secretKey,tag:"qcloud"}}]}}).then((function(e){t.$message("提交成功")}))}},components:{Card:r.default,CardRow:n.default}}},"3vYn":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-row-box"},[e("div",{staticClass:"card-row-lf"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"card-row-rf"},[e("span",[this._v(this._s(this.$attrs.description))]),this._v(" "),this._t("tail")],2)])},n=[];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}))},"4gYi":function(t,e,a){"use strict";a.r(e);var r=a("D0zz"),n=a("gxDo");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);var c=a("KHd+"),i=Object(c.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports},"6Akm":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a("CmEe"),e.default={name:"card"}},ARSS:function(t,e,a){},C8go:function(t,e,a){"use strict";a.r(e);var r=a("Y8LI"),n=a("NrPb");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);var c=a("KHd+"),i=Object(c.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports},CmEe:function(t,e,a){},D0zz:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-box"},[t.$attrs.header?a("div",{staticClass:"card-box__header",class:t.$slots.default?"":"not-main"},[a("header",{staticClass:"card-title",class:t.$attrs.intercept?"card-intercept-title":""},[t._v(t._s(t.$attrs.header))]),t._v(" "),t._t("header")],2):t._e(),t._v(" "),a("main",{staticClass:"card-box__main"},[t._t("default")],2)])},n=[];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}))},Nn0y:function(t,e,a){"use strict";a.r(e);var r=a("XMfV"),n=a.n(r);for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);e.default=n.a},NrPb:function(t,e,a){"use strict";a.r(e);var r=a("xoPs"),n=a.n(r);for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);e.default=n.a},XMfV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a("ARSS"),e.default={name:"form-row"}},Y8LI:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{header:"云api配置"}}),t._v(" "),a("Card",{attrs:{header:"APPID："}},[a("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的appid。若使用子账号，权限需覆盖所使用\n的服务"}},[a("el-input",{attrs:{clearable:""},model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"Secretid："}},[a("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的SecretId"}},[a("el-input",{attrs:{clearable:""},model:{value:t.secretId,callback:function(e){t.secretId=e},expression:"secretId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"SecretKey："}},[a("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的SecretKey"}},[a("el-input",{attrs:{clearable:""},model:{value:t.secretKey,callback:function(e){t.secretKey=e},expression:"secretKey"}})],1)],1),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.Submission}},[t._v("提交")])],1)],1)},n=[];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}))},gxDo:function(t,e,a){"use strict";a.r(e);var r=a("6Akm"),n=a.n(r);for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);e.default=n.a},pNQN:function(t,e,a){"use strict";a.r(e);var r=a("3vYn"),n=a("Nn0y");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);var c=a("KHd+"),i=Object(c.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports},xoPs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(a("QbLZ"));a("zt69");var n=u(a("1GR3"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"tencent-cloud-config-cloud-view"},n.default)},zt69:function(t,e,a){}}]);