(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"80+N":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("van-popup",{staticClass:"sidebarWrap",style:{height:"100%",right:e.isPhone||e.isWeixin?"0":(e.viewportWidth-640)/2+"px"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[o("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?o("div",{staticClass:"headerBox"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?o("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):o("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?o("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):o("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")]),e._v(" "),e.followShow?o("div",{staticClass:"followBox"},[o("span",[e._v("关注："+e._s(e.followDet._data.followCount))]),e._v(" "),o("span",[e._v("被关注："+e._s(e.followDet._data.fansCount))]),e._v(" "),e.userId!=e.personUserId?o("a",{staticClass:"followOne",attrs:{href:"javascript:;",id:"followCli"},on:{click:function(t){return e.followCli(e.intiFollowVal)}}},[e._v(e._s(e.followFlag))]):e._e()]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():o("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?o("div",{staticClass:"headOpe"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?o("img",{staticClass:"logo",attrs:{src:e.logo}}):o("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?o("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[o("span",[e._v("主题："+e._s(e.siteInfo._data.other.count_threads))]),e._v(" "),o("span",[e._v("成员："+e._s(e.siteInfo._data.other.count_users))]),e._v(" "),e.siteInfo._data.set_site.site_author?o("span",[e._v("站长："+e._s(e.siteInfo._data.set_site.site_author.username))]):o("span",[e._v("站长：无")])]):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[o("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},[o("van-tab",[o("span",{attrs:{slot:"title"},on:{click:function(t){return e.categoriesCho(0)}},slot:"title"},[e._v("\n              全部\n          ")])]),e._v(" "),e._l(e.categories,(function(t,a){return o("van-tab",{key:a},[o("span",{attrs:{slot:"title"},on:{click:function(o){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])}))],2)],1)]):e._e()],1)},i=[];o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return i}))},Jgvg:function(e,t,o){"use strict";o.r(t);var a=o("pvnC"),i=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);t.default=i.a},QiNT:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=r(o("YEIV")),s=(o("ULRk"),r(o("VVfg"))),n=r(o("6NK7"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:""},(0,i.default)(e,"isfixNav",!1),(0,i.default)(e,"popupShow",!1),(0,i.default)(e,"current",0),(0,i.default)(e,"userDet",[]),(0,i.default)(e,"categories",[]),(0,i.default)(e,"siteInfo",!1),(0,i.default)(e,"username",""),(0,i.default)(e,"isPayVal",""),(0,i.default)(e,"isWeixin",!1),(0,i.default)(e,"isPhone",!1),(0,i.default)(e,"firstCategoriesId",""),(0,i.default)(e,"logo",!1),(0,i.default)(e,"viewportWidth",""),(0,i.default)(e,"userId",""),(0,i.default)(e,"followDet",""),(0,i.default)(e,"followFlag",""),(0,i.default)(e,"intiFollowVal","0"),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1},followShow:{logoShow:!1}},computed:{personUserId:function(){return this.$route.params.userId}},created:function(){this.userId=s.default.getLItem("tokenId"),console.log(this.userId,"登录用户id"),console.log(this.personUserId,"用户主页获取到的参数id"),this.viewportWidth=window.innerWidth,this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories(),this.followShow&&this.loadUserInfo()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(a={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){console.log(t.readdata._data.other),console.log("-------------------"),e.siteInfo=t.readdata,t.readdata._data.set_site.site_logo&&(e.logo=t.readdata._data.set_site.site_logo),e.isPayVal=t.readdata._data.set_site.site_mode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},loadUserInfo:function(){var e=this;this.appFetch({url:"users",method:"get",splice:"/"+this.personUserId,data:{}}).then((function(t){console.log("00000000000"),console.log(t.readdata),e.followDet=t.readdata,"1"==t.readdata._data.follow?e.followFlag="已关注":"0"==t.readdata._data.follow&&(e.followFlag="关注TA")}))},followCli:function(e){console.log("参数",e);var t=new Object,o="";"0"==e?(console.log("未关注"),t.to_user_id=this.personUserId,o="post",this.intiFollowVal="1",console.log(this.intiFollowVal,"修改")):(console.log("已关注"),t.from_user_id=this.userId,t.to_user_id=this.personUserId,o="delete",this.intiFollowVal="0"),console.log(t,"33333333-----"),this.followRequest(o,t)},followRequest:function(e,t){var o=this;this.appFetch({url:"follow",method:e,data:{data:{type:"user_follow",attributes:t}}}).then((function(t){if(console.log(t,"987654"),t.errors)throw o.$toast.fail(t.errors[0].code),new Error(t.error);o.followFlag="delete"==e?"关注TA":"已关注"}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,i.default)(a,"backUrl",(function(){window.history.go(-1)})),(0,i.default)(a,"LogOut",(function(){console.log("测试")})),(0,i.default)(a,"bindEvent",(function(e){1==e&&this.LogOut()})),a),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,o){window.removeEventListener("scroll",this.handleTabFix,!0),o()}}},omtG:function(e,t,o){"use strict";o.r(t);var a=o("80+N"),i=o("Jgvg");for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);var n=o("KHd+"),r=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(o("QbLZ")),i=n(o("QiNT")),s=n(o("IsPG"));function n(e){return e&&e.__esModule?e:{default:e}}o("iUmJ"),t.default=(0,a.default)({name:"headerView",components:{Sidebar:s.default}},i.default)}}]);