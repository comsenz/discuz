(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"5GN5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a("QbLZ"));a("zt69");var n=i(a("s9FF"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"worth-mentioning-config-view"},n.default)},"6Y42":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"worth-mentioning-config-h5-box"},[a("Card",{attrs:{header:"公众号接口配置"}}),t._v(" "),a("Card",{attrs:{header:"APPID："}},[a("CardRow",{attrs:{description:"填写申请公众号后，你获得的APPID"},scopedSlots:t._u([{key:"tail",fn:function(){return[a("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://mp.weixin.qq.com/",target:"_blank"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[a("el-input",{model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"App secret："}},[a("CardRow",{attrs:{description:"填写申请公众号后，你获得的App secret"}},[a("el-input",{model:{value:t.appSecret,callback:function(e){t.appSecret=e},expression:"appSecret"}})],1)],1),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.submitConfiguration}},[t._v("提交")])],1)],1)},n=[];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}))},SnC3:function(t,e,a){"use strict";a.r(e);var r=a("5GN5"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},dY5s:function(t,e,a){"use strict";a.r(e);var r=a("6Y42"),n=a("SnC3");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var s=a("KHd+"),o=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);e.default=o.exports},s9FF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a("4gYi")),n=i(a("pNQN"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loginStatus:"default",appId:"",appSecret:"",type:""}},created:function(){var t=this.$route.query.type;this.type=t,console.log(this.type),this.loadStatus()},methods:{loadStatus:function(){var t=this;console.log(this.type),this.appFetch({url:"tags",method:"get",splice:"/"+this.type,data:{}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):(t.appId=e.readdata[0]._data.app_id,t.appSecret=e.readdata[0]._data.app_secret)})).catch((function(t){}))},submitConfiguration:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"app_id",value:this.appId,tag:this.type}},{attributes:{key:"app_secret",value:this.appSecret,tag:this.type}}]}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):(t.$router.push({path:"/admin/worth-mentioning-set"}),t.$message({message:"提交成功",type:"success"}))}))}},components:{Card:r.default,CardRow:n.default}}}}]);