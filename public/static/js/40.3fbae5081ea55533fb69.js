(window.webpackJsonp=window.webpackJsonp||[]).push([[40,76],{"7xHi":function(e,t,i){"use strict";i.r(t);var a=i("HhFM"),s=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t.default=s.a},GeHg:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.siteInfo?i("div",{staticClass:"circleCon"},[i("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[i("Header",{attrs:{searchIconShow:!1,perDetShow:!0,logoShow:!0,menuIconShow:!1,navShow:!1,invitePerDet:!0}}),e._v(" "),i("div",{staticClass:"gap"}),e._v(" "),i("div",{staticClass:"circleInfo padB0 lastBorNone"},[i("h1",{staticClass:"cirInfoTit"},[e._v("站点简介")]),e._v(" "),i("p",{staticClass:"cirInfoWord"},[e._v(e._s(e.siteInfo._data.siteIntroduction))])]),e._v(" "),i("div",{staticClass:"gap"}),e._v(" "),i("div",{staticClass:"powerListBox"},[i("div",{staticClass:"powerTit"},[e._v("作为"+e._s(e.roleResult)+"，您将获得以下权限")]),e._v(" "),i("div",{staticClass:"powerList"},[i("div",{staticClass:"powerClassify"},[e._v("帖子操作")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("查看主题")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("发图文帖")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("付费阅读帖")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("附件查看")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("回帖")])]),e._v(" "),i("div",{staticClass:"powerList"},[i("div",{staticClass:"powerClassify"},[e._v("站点前台管理")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("编辑站点")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("邀请加入")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("标签管理")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("用户管理")])]),e._v(" "),i("div",{staticClass:"powerList"},[i("div",{staticClass:"powerClassify"},[e._v("前台内容管理")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("置顶")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("加精")]),e._v(" "),i("p",{staticClass:"powerChi"},[e._v("删帖")])])]),e._v(" "),i("div",{staticClass:"gap"}),e._v(" "),i("div",{staticClass:"loginOpera"},[i("a",{staticClass:"mustLogin",attrs:{href:"javascript:;"},on:{click:e.loginJump}},[e._v("已注册，登录")]),e._v(" "),i("a",{staticClass:"regiJoin",attrs:{href:"javascript:;"},on:{click:e.registerJump}},[e._v("接受邀请，注册")]),e._v(" "),i("p",{staticClass:"payMoney"},[e._v("￥"+e._s(e.siteInfo._data.sitePrice)+" / 永久有效")])])],1)],1):e._e()},s=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}))},HhFM:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(i("QbLZ")),s=r(i("omtG")),o=r(i("QiNT")),n=r(i("LqVO"));function r(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,a.default)({name:"circleInviteView",components:{Header:s.default}},o.default,n.default)},Jgvg:function(e,t,i){"use strict";i.r(t);var a=i("pvnC"),s=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t.default=s.a},LqVO:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isfixNav:!1,loginBtnFix:!0,siteInfo:!1,roleId:"",roleResult:"",finished:!1,isLoading:!1,pageIndex:1,pageLimit:20}},created:function(){this.roleId="10",console.log("10"),this.loadSite()},methods:{loadSite:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(i){t&&(e.siteInfo=[]),e.siteInfo=i.readdata})),this.appFetch({url:"groups",method:"get",splice:"/"+this.roleId,data:{}}).then((function(t){e.roleResult=t.readdata._data.name}))},logBtnFix:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.loginBtnFix=!(e>10)},loginJump:function(){this.$router.push({path:"login-user"})},registerJump:function(){this.$router.push({path:"sign-up"})},addClass:function(e,t){this.current=e;t.currentTarget},onRefresh:function(){var e=this;this.pageIndex=1,this.loadSite(!0).then((function(){e.$toast("刷新成功"),e.finished=!1,e.isLoading=!1})).catch((function(t){e.$toast("刷新失败"),e.isLoading=!1}))}},mounted:function(){window.addEventListener("scroll",this.logBtnFix,!0)},beforeRouteLeave:function(e,t,i){window.removeEventListener("scroll",this.logBtnFix,!0),i()}}},QiNT:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(i("YEIV")),o=(i("ULRk"),n(i("+KBz")),n(i("VVfg")),n(i("6NK7")));function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,s.default)(e,"isfixNav",!1),(0,s.default)(e,"popupShow",!1),(0,s.default)(e,"current",0),(0,s.default)(e,"userDet",[]),(0,s.default)(e,"categories",[]),(0,s.default)(e,"siteInfo",!1),(0,s.default)(e,"username",""),(0,s.default)(e,"isPayVal",""),(0,s.default)(e,"isWeixin",!1),(0,s.default)(e,"isPhone",!1),(0,s.default)(e,"firstCategoriesId",""),e},props:{personInfo:{type:!1},userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=o.default.isWeixin().isWeixin,this.isPhone=o.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(a={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,s.default)(a,"backUrl",(function(){window.history.go(-1)})),(0,s.default)(a,"LogOut",(function(){console.log("测试")})),(0,s.default)(a,"bindEvent",(function(e){1==e&&this.LogOut()})),a),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,i){window.removeEventListener("scroll",this.handleTabFix,!0),i()}}},chKZ:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[i("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?i("div",{staticClass:"headerBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet"},[e.personInfo?i("div",{},[e.userInfoAvatarUrl?i("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""},model:{value:e.userInfoAvataUrl,callback:function(t){e.userInfoAvataUrl=t},expression:"userInfoAvataUrl"}}):i("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?i("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):i("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?i("div",{staticClass:"headOpe"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),e.siteInfo._data.logo?i("img",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:e.siteInfo._data.logo}}):i("img",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}}),e._v(" "),e.siteInfo?i("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[i("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),i("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?i("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):i("span",[e._v("站长：无")])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[i("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,a){return i("van-tab",{key:a},[i("span",{attrs:{slot:"title"},on:{click:function(i){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},s=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}))},omtG:function(e,t,i){"use strict";i.r(t);var a=i("chKZ"),s=i("Jgvg");for(var o in s)"default"!==o&&function(e){i.d(t,e,(function(){return s[e]}))}(o);var n=i("KHd+"),r=Object(n.a)(s.default,a.a,a.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(i("QbLZ")),s=n(i("QiNT")),o=n(i("IsPG"));function n(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,a.default)({name:"headerView",components:{Sidebar:o.default}},s.default)},vcW9:function(e,t,i){"use strict";i.r(t);var a=i("GeHg"),s=i("7xHi");for(var o in s)"default"!==o&&function(e){i.d(t,e,(function(){return s[e]}))}(o);var n=i("KHd+"),r=Object(n.a)(s.default,a.a,a.b,!1,null,null,null);t.default=r.exports}}]);