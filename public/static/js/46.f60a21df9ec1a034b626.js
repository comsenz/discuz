(window.webpackJsonp=window.webpackJsonp||[]).push([[46,104],{"+1ub":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.autoTextarea=function(t,e,i,n){e=e||0;var o=!!document.getBoxObjectFor||"mozInnerScreenX"in window,a=!!window.opera&&!!window.opera.toString().indexOf("Opera"),s=function(e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)},r=t.currentStyle?function(e){var i=t.currentStyle[e];if("height"===e&&1!==i.search(/px/i)){var n=t.getBoundingClientRect();return n.bottom-n.top-parseFloat(r("paddingTop"))-parseFloat(r("paddingBottom"))+"px"}return i}:function(e){return getComputedStyle(t,null)[e]},c=parseFloat(r("height"));t.style.resize="none";var l=function(){var s,l,u=0,d=t.style;t._length!==t.value.length&&(t._length=t.value.length,o||a||(u=parseInt(r("paddingTop"))+parseInt(r("paddingBottom"))),s=document.body.scrollTop||document.documentElement.scrollTop,t.style.height=c+"px",t.scrollHeight>c&&(i&&t.scrollHeight>i?(l=i-u,d.overflowY="auto"):(l=t.scrollHeight-u,d.overflowY="hidden"),d.height=l+e+"px",s+=parseInt(d.height)-t.currHeight,document.body.scrollTop=s,document.documentElement.scrollTop=s,t.currHeight=parseInt(d.height),n(parseInt(d.height))))};s("propertychange",l),s("input",l),s("focus",l),l()},e.debounce=function(t,e){var i=void 0;return function(){for(var n=this,o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];i&&clearTimeout(i),i=setTimeout((function(){t.apply(n,a)}),e||500)}}},"6GI9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{active:0,faceIndex:0}},props:{faceData:{type:Array}},computed:{faces:function(){for(var t=this.faceData,e=(this.faceIndex,t),i=0,n=[];28*i<e.length;)n.push(e.slice(28*i,28*(i+1))),i+=1;return n},scrollWidth:function(){return this.faces.length*document.body.clientWidth},scrollPosition:function(){return this.active*document.body.clientWidth}},mounted:function(){var t=this,e=this.$refs.faceContent,i=0,n=0;e.ontouchstart=function(t){i=t.targetTouches[0].pageX},e.ontouchend=function(e){(n=e.changedTouches[0].pageX)-i>50?0!==t.active&&t.active--:n-i<-50&&t.active!==t.faces.length-1&&t.active++}},created:function(){},methods:{getUrlCode:function(){var t=this;this.code=this.$utils.getUrlKey("code"),alert(code),this.appFetch({url:"weixin",method:"get",data:{code:this.code}}).then((function(t){alert(65756765)}),(function(e){100004==e.errors[0].status&&t.$router.go(-1)}))},loginWxClick:function(){this.$router.push({path:"/wx-login-bd"})},loginPhoneClick:function(){this.$router.push({path:"/login-phone"})},onFaceClick:function(t){this.$emit("onFaceChoose",t)}}}},Aves:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"face-container"},[i("div",{staticClass:"scroll-wrapper"},[i("div",{ref:"faceContent",staticClass:"face-content",style:{width:t.scrollWidth+"px",marginLeft:-t.scrollPosition+"px"},on:{touchmove:function(t){t.preventDefault()}}},t._l(t.faces,(function(e,n){return i("div",{key:n,staticClass:"face-page"},t._l(e,(function(e,n){return i("a",{key:n},[i("img",{staticClass:"emoji",attrs:{src:e._data.url},on:{click:function(i){return t.onFaceClick(" "+e._data.code+" ")}}})])})),0)})),0),t._v(" "),i("div",{staticClass:"page-dot"},t._l(t.faces.length,(function(e){return i("div",{key:e,staticClass:"dot-item",class:e===t.active+1?"active":"",on:{click:function(i){t.active=e-1}}})})),0)])])},o=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}))},KyiH:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"post-topic-box"},[i("header",{staticClass:"post-topic-header"},[i("span",{staticClass:"icon iconfont icon-back post-topic-header-icon",on:{click:t.backClick}}),t._v(" "),i("h2",{staticClass:"postHeadTit"},[t._v(t._s(t.headerTitle))]),t._v(" "),i("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.publish}},[t._v("发布")])],1),t._v(" "),i("div",{staticClass:"post-topic-form"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.replyText,expression:"replyText"}],ref:"textarea",staticClass:"reply-box",attrs:{id:"post-topic-form-text",name:"post-topic",placeholder:"请输入内容",maxlength:t.keywordsMax},domProps:{value:t.replyText},on:{change:t.searchChange,focus:function(e){t.showFacePanel=!1,t.footMove=!1,t.keyboard=!1},input:function(e){e.target.composing||(t.replyText=e.target.value)}}}),t._v(" "),t.isAndroid&&t.isWeixin?i("div",{staticClass:"uploadBox"},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,"after-read":t.handleFile,multiple:""},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()]):i("div",{},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,accept:t.supportImgExtRes,multiple:"false","after-read":t.handleFile},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()])]),t._v(" "),i("footer",{staticClass:"post-topic-footer",class:{footMove:t.footMove},attrs:{id:"post-topic-footer"}},[i("div",{staticClass:"post-topic-footer-left reply-topic-footer-left"},[i("span",{staticClass:"icon iconfont icon-label post-topic-header-icon",class:{"icon-keyboard":t.keyboard},on:{click:t.addExpression}}),t._v(" "),t.canUploadImages&&t.limitMaxLength?i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon"},[t.isAndroid&&t.isWeixin?i("input",{staticClass:"hiddenInput",attrs:{type:"file"},on:{change:t.handleFileUp}}):i("input",{staticClass:"hiddenInput",attrs:{type:"file",accept:t.supportImgExtRes,multiple:""},on:{change:t.handleFileUp}})]):i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon",on:{click:t.beforeHandleFile}})])]),t._v(" "),t.showFacePanel?i("Expression",{staticClass:"expressionBox",style:{overflow:"hidden",width:t.isPhone||t.isWeixin?"100%":"640px",left:t.isPhone||t.isWeixin?"0":(t.viewportWidth-640)/2+"px"},attrs:{faceData:t.faceData,id:"showFacePanel"},on:{onFaceChoose:t.handleFaceChoose}}):t._e()],1)},o=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}))},"QuT+":function(t,e,i){"use strict";i.r(e);var n=i("KyiH"),o=i("iN0f");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i("KHd+"),r=Object(s.a)(o.default,n.a,n.b,!1,null,null,null);e.default=r.exports},SDcr:function(t,e,i){"use strict";i.r(e);var n=i("Aves"),o=i("uwTP");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i("KHd+"),r=Object(s.a)(o.default,n.a,n.b,!1,null,null,null);e.default=r.exports},cIj4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=l(i("YEIV")),a=i("ULRk"),s=i("+1ub"),r=l(i("6NK7")),c=l(i("VVfg"));function l(t){return t&&t.__esModule?t:{default:t}}var u=parseFloat(document.documentElement.style.fontSize);e.default={data:function(){return{headerTitle:"回复主题",showFacePanel:!1,keyboard:!1,replyText:"",replyQuote:"",replyQuoteCont:"",keywordsMax:1e3,footMove:!1,faceData:[],fileList:[],uploadShow:!1,isWeixin:!1,isPhone:!1,supportImgExt:"",supportImgExtRes:"",limitMaxLength:!0,fileListOne:[],canUploadImages:"",backGo:-3,viewportWidth:""}},computed:{themeId:function(){return this.$route.params.themeId},replyId:function(){return this.$route.params.replyId}},created:function(){this.isWeixin=r.default.isWeixin().isWeixin,this.isPhone=r.default.isWeixin().isPhone,this.viewportWidth=window.innerWidth;var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.isiOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.replyQuoteCont=c.default.getLItem("replyQuote"),this.replyQuote='<blockquote class="quoteCon">'+this.replyQuoteCont+"</blockquote>",this.getInfo()},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.textarea;e.focus();var i=300;e&&(0,s.autoTextarea)(e,5,0,(function(t){if((t+=20)!==i){i=t}}))})),1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth()},watch:{"fileListOne.length":function(t,e){this.fileListOneLen=t,this.fileListOneLen>=12?this.limitMaxLength=!1:this.limitMaxLength=!0}},beforeDestroy:function(){a.Bus.$off("message")},methods:(n={getInfo:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);for(var i=e.readdata._data.set_attach.support_img_ext.split(","),n="",o="",a=0;a<i.length;a++)n="."+i[a]+",",o="image/"+i[a]+",",t.supportImgExt+=n,t.supportImgExtRes+=o;t.canUploadImages=e.readdata._data.other.can_upload_images}))},limitWidth:function(){document.getElementById("post-topic-footer").style.width="640px";var t=window.innerWidth;document.getElementById("post-topic-footer").style.left=(t-640)/2+"px"},beforeHandleFile:function(){this.canUploadImages?this.limitMaxLength||this.$toast.fail("已达上传图片上限"):this.$toast.fail("没有上传图片的权限")},handleFile:function(t){var e=this,i=[];void 0===t.length?i.push(t):i=t,this.limitMaxLength?i.map((function(t,n){e.isAndroid&&e.isWeixin?(e.testingType(t.file,e.supportImgExt),e.testingRes&&e.compressFile(t.file,15e4,!1,i.length-n)):e.compressFile(t.file,15e4,!1,i.length-n)})):this.$toast.fail("已达上传图片上限")},handleFileUp:function(t){for(var e=t.target.files.length+this.fileListOne.length<=12?t.target.files.length:12-this.fileListOne.length,i=0;i<e;i++){var n=t.target.files[i];this.isAndroid&&this.isWeixin?(this.testingType(n,this.supportImgExt),this.testingRes&&this.compressFile(n,15e4,!0)):this.compressFile(n,15e4,!0)}},testingType:function(t,e){var i=t.name.substring(t.name.lastIndexOf(".")).toLowerCase();"-1"==e.indexOf(i+",")?(this.$toast.fail("文件格式不正确!"),this.testingRes=!1):this.testingRes=!0},deleteEnclosure:function(t,e){var i=this;this.fileList.length<=1&&(this.uploadShow=!1),this.appFetch({url:"attachment",method:"delete",splice:"/"+t}).then((function(n){if(n.errors)throw i.$toast.fail(n.errors[0].code),new Error(n.error);new Array;if("img"==e){var o=i.fileList.filter((function(e){return e.id!==t}));i.fileList=o}i.$toast.success("删除成功")}))},uploaderEnclosure:function(t,e,i,n,o){var a=this;this.appFetch({url:"attachment",method:"post",data:t}).then((function(t){if(t.errors)throw a.$toast.fail(t.errors[0].code),new Error(t.error);i&&(a.fileList.push({url:t.readdata._data.url,id:t.readdata._data.id}),a.fileListOne[a.fileListOne.length-o].id=t.data.attributes.id),e&&(a.fileListOne.push({url:t.readdata._data.url,id:t.readdata._data.id}),a.fileListOne.length>0&&(a.uploadShow=!0))}))},compressFile:function(t,e,i,n){var o=t.size||.8*t.length,a=(Math.max(e/o,.8),this);lrz(t,{quality:.8}).then((function(e){var o=new FormData;o.append("file",e.file,t.name),o.append("isGallery",1),a.uploaderEnclosure(o,i,!i,!1,n),a.loading=!1})).catch((function(t){})).always((function(){}))},clearKeywords:function(){this.keywords="",this.list=[];var t=this.$refs.textarea,e=40/u;t.style.height=e+"rem",e=60/u,t.focus()},searchChange:(0,s.debounce)((function(){if(this.keywords&&this.keywords.trim())this.keywords;else this.list=[]})),handleFaceChoose:function(t){var e=this.replyText,i=this.$refs.textarea,n=i.selectionStart,o=i.selectionEnd,a=e.substring(0,n)+t+e.substring(o,e.length);this.replyText=a,i.setSelectionRange&&setTimeout((function(){var e=n+t.length;i.setSelectionRange(e,e)}),0)},addExpression:function(){var t=this;this.keyboard=!this.keyboard,this.appFetch({url:"emojis",method:"get",data:{include:""}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.faceData=e.readdata})),this.showFacePanel=!this.showFacePanel,this.footMove=!this.footMove},backClick:function(){this.$router.go(-1)},dClick:function(){this.showPopup=!0},onConfirm:function(t,e){var i=t.id;this.cateId=i;t.text;this.showPopup=!1,this.selectSort=t.text},publish:function(){var t=this;this.attriAttachment=this.fileListOne;for(var e=0;e<this.attriAttachment.length;e++)this.attriAttachment[e]={type:"attachments",id:this.attriAttachment[e].id};this.replyId&&this.replyQuoteCont?this.appFetch({url:"posts",method:"post",data:{data:{type:"posts",attributes:{replyId:this.replyId,content:this.replyQuote+this.replyText},relationships:{thread:{data:{type:"threads",id:this.themeId}},attachments:{data:this.attriAttachment}}}}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.$router.push({path:"/details/"+t.themeId,query:{backGo:t.backGo}})})):this.appFetch({url:"posts",method:"post",data:{data:{type:"posts",attributes:{content:this.replyText},relationships:{thread:{data:{type:"threads",id:this.themeId}},attachments:{data:this.attriAttachment}}}}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]),new Error(e.error);t.$router.push({path:"/details/"+t.themeId,query:{backGo:t.backGo}})}))}},(0,o.default)(n,"clearKeywords",(function(){this.keywords="",this.list=[];var t=this.$refs.textarea,e=40/u;t.style.height=e+"rem",e=60/u,t.focus()})),(0,o.default)(n,"backClick",(function(){this.$router.go(-1)})),n),destroyed:function(){c.default.removeLItem("replyQuote")}}},iN0f:function(t,e,i){"use strict";i.r(e);var n=i("xS81"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},uwTP:function(t,e,i){"use strict";i.r(e);var n=i("yaIx"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},xS81:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(i("QbLZ")),o=s(i("SDcr")),a=s(i("cIj4"));function s(t){return t&&t.__esModule?t:{default:t}}i("iUmJ"),i("N960"),e.default=(0,n.default)({name:"reply-to-topic-view",components:{Expression:o.default}},a.default)},yaIx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i("QbLZ")),o=a(i("6GI9"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"expressionView"},o.default)}}]);