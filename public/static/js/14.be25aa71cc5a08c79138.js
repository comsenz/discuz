(window.webpackJsonp=window.webpackJsonp||[]).push([[14,78],{"14Xm":function(t,e,n){t.exports=n("u938")},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("4d7F"),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default((function(t,n){return function r(o,i){try{var s=e[o](i),c=s.value}catch(t){return void n(t)}if(!s.done)return a.default.resolve(c).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(c)}("next")}))}}},DrXK:function(t,e,n){"use strict";n.r(e);var r=n("Yoo9"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=o.a},Ey7k:function(t,e,n){"use strict";n.r(e);var r=n("xt30"),o=n("DrXK");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("HiHo");var i=n("KHd+"),s=Object(i.a)(o.default,r.a,r.b,!1,null,"115a1fa2",null);e.default=s.exports},FYko:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=c(n("FyfS")),a=c(n("14Xm")),i=c(n("D3Ub")),s=c(n("JZuw"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{inviteList:[],choiceShow:!1,checkOperaStatus:!1,choList:[],getGroupNameById:{},choiceRes:{attributes:{name:"选择操作"}},loading:!1,finished:!1,isLoading:!1,pageIndex:1,offset:100,query:{},pageLimit:15}},components:{myInviteJoinHeader:s.default},created:(r=(0,i.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getOperaType();case 2:this.query=this.$route.query;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{toggle:function(t){this.$refs.checkboxes[t].toggle()},showChoice:function(){this.choiceShow=!this.choiceShow},setSelectVal:function(t){this.choiceShow=!1,this.checkOperaStatus=!0,this.choiceRes=t},getOperaType:function(){var t=this;return(0,i.default)(a.default.mark((function e(){var n,r,i,s,c,u,l;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.appFetch({url:"groups",method:"get"});case 3:for(n=e.sent,t.choList=n.data,r=!0,i=!1,s=void 0,e.prev=8,c=(0,o.default)(t.choList);!(r=(u=c.next()).done);r=!0)l=u.value,t.getGroupNameById[l.id]=l.attributes.name;e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),i=!0,s=e.t0;case 16:e.prev=16,e.prev=17,!r&&c.return&&c.return();case 19:if(e.prev=19,!i){e.next=22;break}throw s;case 22:return e.finish(19);case 23:return e.finish(16);case 24:e.next=30;break;case 26:e.prev=26,e.t1=e.catch(0),console.error(e.t1,"membersManagementCon.js getOperaType"),t.$toast("邀请码类型获取失败，请刷新重试");case 30:case"end":return e.stop()}}),e,t,[[0,26],[8,12,16,24],[17,,19,23]])})))()},getInviteList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,i.default)(a.default.mark((function n(){return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.appFetch({url:"invite",method:"get",data:{data:{type:"invite",attributes:{group_id:parseInt(t.choiceRes.id)}},"page[number]":t.pageIndex,"page[limit]":t.pageLimit}}).then((function(n){e&&(t.inviteList=[]),t.loading=!1,t.inviteList=t.inviteList.concat(n.readdata),t.finished=n.readdata.length<t.pageLimit}));case 3:n.next=10;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0,"邀请码列表获取失败"),t.$toast("邀请列表获取失败"),t.loading&&1!==t.pageIndex&&t.pageIndex--;case 10:case"end":return n.stop()}}),n,t,[[0,5]])})))()},checkSubmit:function(){var t=this;return(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.checkOperaStatus){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,t.appFetch({url:"invite",method:"post",data:{data:{type:"invite",attributes:{group_id:parseInt(t.choiceRes.id)}}}});case 5:t.pageIndex=1,t.finished=!1,t.getInviteList(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0,"checkSubmit");case 13:case"end":return e.stop()}}),e,t,[[2,10]])})))()},copyToClipBoard:function(t){if(0!==t._data.status){var e=document.createElement("textarea");e.style.position="absolute",e.style.opacity="0",e.style.height="0",e.textContent=window.location.href+"?code="+t._data.code+"&group_id="+t._data.group_id,document.body.appendChild(e),e.select(e,"链接链接");try{return document.execCommand("copy")}finally{document.body.removeChild(e)}}},resetDelete:function(t){var e=this;return(0,i.default)(a.default.mark((function n(){var r;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t._data.status){n.next=2;break}return n.abrupt("return");case 2:return r=t._data.id,n.prev=3,n.next=6,e.appFetch({url:"invite",method:"delete",splice:"/"+r});case 6:e.checkSubmit(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),e.$toast("邀请码操作失败！");case 12:case"end":return n.stop()}}),n,e,[[3,9]])})))()},onLoad:function(){this.loading=!0,this.pageIndex++,this.getInviteList()},onRefresh:function(){var t=this;setTimeout((function(){t.pageIndex=1,t.getInviteList(!0),t.$toast("刷新成功"),t.isLoading=!1,t.finished=!1}),200)}},mounted:function(){},beforeRouteLeave:function(t,e,n){n()}}},FyfS:function(t,e,n){t.exports={default:n("Rp86"),__esModule:!0}},HiHo:function(t,e,n){"use strict";var r=n("fUT9");n.n(r).a},Jgvg:function(t,e,n){"use strict";n.r(e);var r=n("pvnC"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=o.a},"Q6+U":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[n("sidebar",{attrs:{isPayVal:t.isPayVal}})],1),t._v(" "),t.$route.meta.oneHeader?n("div",{staticClass:"headerBox"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet"},[t.personInfo?n("div",{},[t.userInfoAvatarUrl?n("img",{staticClass:"inviteHead",attrs:{src:t.userInfoAvatarUrl,alt:""},model:{value:t.userInfoAvataUrl,callback:function(e){t.userInfoAvataUrl=e},expression:"userInfoAvataUrl"}}):n("img",{staticClass:"inviteHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),t._v(" "),t.invitePerDet&&t.userInfoName?n("div",{staticClass:"inviteName",model:{value:t.userInfoName,callback:function(e){t.userInfoName=e},expression:"userInfoName"}},[t._v(t._s(t.userInfoName))]):n("div",{staticClass:"inviteName"},[t._v("该用户已被删除")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[t._v("邀请您加入")])]):t._e()]),t._v(" "),n("div",{staticClass:"headeGap"}),t._v(" "),t.searchIconShow||t.menuIconShow?n("div",{staticClass:"headOpe"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:t.searchJump}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:t.showPopup}})]):t._e(),t._v(" "),t.siteInfo._data.logo?n("img",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:t.siteInfo._data.logo}}):n("img",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:t.appConfig.staticBaseUrl+"/images/logo.png"}}),t._v(" "),t.siteInfo?n("div",{directives:[{name:"show",rawName:"v-show",value:t.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[n("span",[t._v("主题："+t._s(t.siteInfo._data.threads))]),t._v(" "),n("span",[t._v("成员："+t._s(t.siteInfo._data.members))]),t._v(" "),t.siteInfo._data.siteAuthor?n("span",[t._v("站长："+t._s(t.siteInfo._data.siteAuthor.username))]):n("span",[t._v("站长：无")])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:t.isfixNav},attrs:{id:"testNavBar"}},[n("van-tabs",{model:{value:t.navActi,callback:function(e){t.navActi=e},expression:"navActi"}},t._l(t.categories,(function(e,r){return n("van-tab",{key:r},[n("span",{attrs:{slot:"title"},on:{click:function(n){return t.categoriesCho(e._data.id)}},slot:"title"},[t._v("\n              "+t._s(e._data.name)+"\n          ")])])})),1)],1)]):t._e()],1)},o=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},QiNT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=i(n("YEIV")),a=(n("ULRk"),i(n("+KBz")),i(n("VVfg")),i(n("6NK7")));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){var t;return t={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,o.default)(t,"isfixNav",!1),(0,o.default)(t,"popupShow",!1),(0,o.default)(t,"current",0),(0,o.default)(t,"userDet",[]),(0,o.default)(t,"categories",[]),(0,o.default)(t,"siteInfo",!1),(0,o.default)(t,"username",""),(0,o.default)(t,"isPayVal",""),(0,o.default)(t,"isWeixin",!1),(0,o.default)(t,"isPhone",!1),(0,o.default)(t,"firstCategoriesId",""),t},props:{personInfo:{type:!1},userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=a.default.isWeixin().isWeixin,this.isPhone=a.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(t,e){this.isfixNav=t}},methods:(r={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var t=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(t-640)/2+"px"},loadCategories:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){t.siteInfo=e.readdata,t.isPayVal=e.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(e){console.log("2222"),console.log(e),t.categories=e.readdata,t.firstCategoriesId=e.readdata[0]._data.id,console.log(t.firstCategoriesId),t.$emit("update",t.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(t){this.$emit("categoriesChoice",t)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,o.default)(r,"backUrl",(function(){window.history.go(-1)})),(0,o.default)(r,"LogOut",(function(){console.log("测试")})),(0,o.default)(r,"bindEvent",(function(t){1==t&&this.LogOut()})),r),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(t,e,n){window.removeEventListener("scroll",this.handleTabFix,!0),n()}}},Rp86:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("fXsU")},Yoo9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n("QbLZ")),o=s(n("omtG")),a=s(n("QiNT")),i=s(n("FYko"));function s(t){return t&&t.__esModule?t:{default:t}}n("E2jd"),e.default=(0,r.default)({name:"managementCirclesView",components:{Header:o.default}},a.default,i.default)},fUT9:function(t,e,n){},fXsU:function(t,e,n){var r=n("5K7Z"),o=n("fNZA");t.exports=n("WEpk").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},ls82:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=_;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",p={},m={};m[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==r&&o.call(w,i)&&(m=w);var y=L.prototype=b.prototype=Object.create(m);I.prototype=y.constructor=L,L.constructor=I,L[c]=I.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[s]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var o=new k(_(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function _(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return F()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=C(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?v:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function I(){}function L(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(n,r){function a(){return new Promise((function(e,a){!function e(n,r,a,i){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),i)}i(s.arg)}(n,r,e,a)}))}return e=e?e.then(a,a):a()}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},omtG:function(t,e,n){"use strict";n.r(e);var r=n("Q6+U"),o=n("Jgvg");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var i=n("KHd+"),s=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);e.default=s.exports},pvnC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("QbLZ")),o=i(n("QiNT")),a=i(n("IsPG"));function i(t){return t&&t.__esModule?t:{default:t}}n("E2jd"),e.default=(0,r.default)({name:"headerView",components:{Sidebar:a.default}},o.default)},u938:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("ls82"),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},xt30:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("myInviteJoinHeader",{attrs:{title:"邀请加入"}}),t._v(" "),n("div",{staticClass:"content"},[n("van-list",{attrs:{finished:t.finished,offset:t.offset,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("div",{staticClass:"inviteBox"},[n("table",{staticClass:"inviteTable"},[n("tr",[n("th",[t._v("编号")]),t._v(" "),n("th",[t._v("邀请为")]),t._v(" "),n("th",[t._v("链接状态")]),t._v(" "),n("th",[t._v("链接操作")])]),t._v(" "),t._l(t.inviteList,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e._data.id))]),t._v(" "),n("td",[t._v(t._s(t.getGroupNameById[e._data.group_id]))]),t._v(" "),n("td",[t._v(t._s(0===e._data.status?"已失效":"使用中"))]),t._v(" "),n("td",[n("a",{class:["copyA",0===e._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(n){return t.copyToClipBoard(e)}}},[t._v("复制")]),t._v(" "),n("a",{class:["invalidA",0===e._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(n){return t.resetDelete(e)}}},[t._v("置为无效")])])])}))],2)])])],1)],1),t._v(" "),n("div",{staticClass:"manageFootFixed"},[n("div",{staticClass:"operaCho"},[n("div",{staticClass:"operaWo",on:{click:t.showChoice}},[n("span",[t._v(t._s(t.checkOperaStatus?t.choiceRes.attributes.name+" 邀请链接":t.choiceRes.attributes.name))]),t._v(" "),n("i",{staticClass:"icon iconfont icon-choice-item"})]),t._v(" "),t.choiceShow?n("ul",{staticClass:"operaChoList"},t._l(t.choList,(function(e,r){return n("li",{key:r,staticClass:"operaChoLi",on:{click:function(n){return n.stopPropagation(),t.setSelectVal(e)}}},[t._v(t._s(e.attributes.name)+" 邀请链接")])})),0):t._e()]),t._v(" "),n("button",{staticClass:"checkSubmit",on:{click:t.checkSubmit}},[t._v("生成")])])],1)},o=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))}}]);