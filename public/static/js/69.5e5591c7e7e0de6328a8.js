(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{Aa10:function(e,t,s){"use strict";s.r(t);var i=s("ggnj"),o=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t.default=o.a},YPse:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cont-class-box"},[s("div",{staticClass:"cont-class-table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.categoriesList,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),s("el-table-column",{attrs:{label:"分类名称","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{clearable:""},model:{value:t.row.name,callback:function(s){e.$set(t.row,"name",s)},expression:"scope.row.name"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"排序",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{clearable:""},model:{value:t.row.sort,callback:function(s){e.$set(t.row,"sort",s)},expression:"scope.row.sort"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"分类介绍","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{attrs:{clearable:""},model:{value:t.row.description,callback:function(s){e.$set(t.row,"description",s)},expression:"scope.row.description"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-popover",{ref:"popover-"+t.$index,attrs:{width:"100",placement:"top"}},[s("p",[e._v("确定删除该项吗？")]),e._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t._self.$refs["popover-"+t.$index].doClose()}}},[e._v("\n                取消\n              ")]),e._v(" "),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(s){e.deleteClick(t.row.id,t.$index),t._self.$refs["popover-"+t.$index].doClose()}}},[e._v("确定")])],1),e._v(" "),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),s("TableContAdd",{attrs:{cont:"添加内容分类"},on:{tableContAddClick:e.tableContAdd}}),e._v(" "),s("Card",{staticClass:"footer-btn"},[s("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.submitClick}},[e._v("提交")]),e._v(" "),s("el-popover",{attrs:{width:"100",placement:"top"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("p",[e._v("确定删除该项吗？")]),e._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.deleteAllClick}},[e._v("确定")])],1),e._v(" "),s("el-button",{staticStyle:{"margin-left":"10PX"},attrs:{slot:"reference",size:"medium",disabled:e.deleteStatus},slot:"reference"},[e._v("删除")])],1)],1)],1)])},o=[];s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return o}))},c53j:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(s("4gYi")),o=n(s("kAKY"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{categoriesList:[],categoriesListLength:"",createCategoriesStatus:!1,deleteStatus:!0,multipleSelection:[],visible:!1}},methods:{handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},tableContAdd:function(){this.createCategoriesStatus=!0,this.categoriesList.push({name:"",id:"",description:"",sort:""})},submitClick:function(){var e=this;if(this.createCategoriesStatus)console.log(this.categoriesList.slice(this.categoriesListLength,this.categoriesList.length)),this.createCategories(this.categoriesList.slice(this.categoriesListLength,this.categoriesList.length)).then((function(){e.getCategories(),e.createCategoriesStatus=!1}));else{var t=[];this.categoriesList.forEach((function(e){t.push({type:"categories",id:e.id,attributes:{name:e.name,description:e.description,sort:e.sort}})})),this.batchUpdateCategories(t).then((function(){e.getCategories()}))}},deleteClick:function(e,t){var s=this;console.log(t),console.log(this.categoriesListLength),this.createCategoriesStatus&&t>this.categoriesListLength-1?(this.categoriesList.splice(t,1),console.log(this.categoriesList)):this.deleteCategories(e).then((function(){s.getCategories()}))},deleteAllClick:function(){var e=this,t=[];this.multipleSelection.forEach((function(s,i){i<e.multipleSelection.length&&t.push(s.id)})),this.batchDeleteCategories(t.join(",")).then((function(){e.getCategories()})),this.visible=!1},getCategories:function(){var e=this;this.appFetch({url:"categories",method:"get",data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.categoriesListLength=t.data.length,e.categoriesList=[],t.data.forEach((function(t,s){e.categoriesList.push({name:t.attributes.name,id:t.id,description:t.attributes.description,sort:t.attributes.sort})})))})).catch((function(e){console.log(e)}))},deleteCategories:function(e){var t=this;return this.appFetch({url:"categoriesDelete",method:"delete",splice:"/"+e}).then((function(e){e.errors?t.$message.error(e.errors[0].code):e.meta?t.$message.error("操作失败！"):t.$message({message:"操作成功",type:"success"})})).catch((function(e){console.log(e)}))},batchDeleteCategories:function(e){var t=this;return this.appFetch({url:"categoriesBatchDelete",method:"delete",splice:"/"+e}).then((function(e){e.meta?(console.log(e.meta),e.meta.forEach((function(e,s){setTimeout((function(){t.$message.error(e.code)}),500*(s+1))}))):t.$message({message:"操作成功",type:"success"})})).catch((function(e){console.log(e)}))},createCategories:function(e){var t=this,s=[];return e.forEach((function(e){s.push({type:"categories",attributes:{name:e.name,description:e.description,sort:e.sort}})})),this.appFetch({url:"createBatchCategories",method:"post",data:{data:s}}).then((function(e){e.meta?(console.log(e.meta),e.meta.forEach((function(e,s){setTimeout((function(){t.$message.error(e.message.name[0])}),500*(s+1))}))):t.$message({message:"操作成功",type:"success"})})).catch((function(e){console.log(e)}))},batchUpdateCategories:function(e){var t=this;return this.appFetch({url:"categoriesBatchUpdate",method:"patch",data:{data:e}}).then((function(e){e.meta?(console.log(e.meta),e.meta.forEach((function(e,s){setTimeout((function(){t.$message.error(e.message.name[0])}),500*(s+1))}))):t.$message({message:"操作成功",type:"success"})})).catch((function(e){console.log(e)}))}},created:function(){this.getCategories()},components:{Card:i.default,TableContAdd:o.default}}},"f+jx":function(e,t,s){"use strict";s.r(t);var i=s("YPse"),o=s("Aa10");for(var n in o)"default"!==n&&function(e){s.d(t,e,(function(){return o[e]}))}(n);var a=s("KHd+"),r=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);t.default=r.exports},ggnj:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(s("QbLZ"));s("lL+3");var o=n(s("c53j"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"cont-class"},o.default)}}]);