(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4921a253"],{"307d":function(t,e,n){},"75f6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"params"},[n("el-form",{ref:"ruleForm",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"项目名称：",prop:"projectName"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:t.formInline.projectName,callback:function(e){t.$set(t.formInline,"projectName",e)},expression:"formInline.projectName"}})],1),n("el-form-item",{attrs:{label:"所属公司：",prop:"companyId"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.formInline.companyId,callback:function(e){t.$set(t.formInline,"companyId",e)},expression:"formInline.companyId"}},t._l(t.depList,(function(t){return n("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.getData}},[t._v("查询")])],1),n("el-form-item",[n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1),n("div",[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.toAdd()}}},[t._v("新增")])],1),n("vxe-grid",{staticClass:"mytable-scrollbar",attrs:{"header-cell-style":t.headClass,"cell-style":t.setStatusColor,"highlight-hover-row":"",stripe:"","auto-resize":"","max-height":"600","pager-config":t.table.page,loading:t.table.loading,columns:t.columns,data:t.table.datas},on:{"page-change":t.handlePageChange},scopedSlots:t._u([{key:"date",fn:function(e){var n=e.row;return[t._v(" "+t._s(n.constructStartTime)+"-"+t._s(n.constructEndTime)+" ")]}},{key:"option",fn:function(e){var a=e.row;return[n("div",{staticClass:"btn-group"},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["roadRelatedConstuction:delete"],expression:"['roadRelatedConstuction:delete']"}],staticStyle:{margin:"8px 0"},attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(e){return t.handleDelete(a)}}},[t._v("删除")]),n("el-button",{staticStyle:{margin:"8px 0"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.handleDetail(a)}}},[t._v("详情")]),["待完善","待改正"].includes(a.statusDesc)?n("el-button",{staticStyle:{margin:"8px 0"},attrs:{size:"mini",icon:"el-icon-edit",type:"success"},on:{click:function(e){return t.toEdit(a)}}},[t._v("修改")]):t._e(),["待完善","待改正"].includes(a.statusDesc)?n("el-button",{staticStyle:{margin:"8px 0"},attrs:{size:"mini",icon:"el-icon-upload2",type:"warning"},on:{click:function(e){return t.toMaterialUploadDetails(a)}}},[t._v("材料上传 ")]):t._e(),"许可上传"==a.statusDesc?n("el-button",{staticStyle:{margin:"8px 0"},attrs:{size:"mini",type:"warning "},on:{click:function(e){return t.toLicenseUploadDetails(a)}}},[t._v("许可证书上传")]):t._e()],1)]}}])})],1)])},r=[],o=n("5530"),i=n("c7eb"),s=n("1da1"),c=(n("14d9"),n("e9c4"),n("ba77")),u=n("2934"),l={name:"ProjectMaterialReportingList",data:function(){return{formInline:{companyId:"",businessType:"",statusList:[0,1,6]},businessTypeList:[],depList:[],table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"left",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[{businessId:"1"}]},columns:[{title:"项目名称",field:"projectName",align:"center"},{title:"建设单位",field:"buildOrgName",align:"center"},{title:"施工单位",field:"constructOrgName",align:"center"},{title:"施工地点",field:"place",align:"center"},{title:"公司名称",field:"companyName",align:"center"},{title:"项目类型",field:"typeValue",align:"center"},{title:"施工日期",slots:{default:"date"},align:"center"},{title:"状态",field:"statusDesc",align:"center"},{title:"操作",slots:{default:"option"},align:"center",width:"280px"}]}},mounted:function(){this.getDptData(),this.getData()},methods:{handleDelete:function(t){var e=this;this.$confirm("此操作将删除".concat(t.businessId,"该工单, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$prompt("请填写删除原因?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(t){if(!t)return"删除原因不能为空"}}).then((function(n){var a=n.value;Object(c["h"])({id:t.businessId,reason:a}).then((function(t){e.getData(),e.$message({message:"已删除",type:"success"})}))}))}))},getDptData:function(){var t=this;return Object(s["a"])(Object(i["a"])().mark((function e(){var n;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["h"])({parentId:"",status:0,type:1});case 2:n=e.sent,t.depList=n.data;case 4:case"end":return e.stop()}}),e)})))()},toMaterialUploadDetails:function(t){this.$router.push({path:"materialUploadDetails",query:{id:t.businessId}})},toLicenseUploadDetails:function(t){this.$router.push({path:"licenseUploadDetails",query:{id:t.businessId}})},toAdd:function(){this.$router.push({path:"roadRelatedConstuctionReport",query:{type:!0}})},toEdit:function(t){localStorage.setItem("project",JSON.stringify(t)),this.$router.push({path:"roadRelatedConstuctionReport",query:{businessId:t.businessId,type:!0}})},handleDetail:function(t){this.$router.push({path:"roadConstructionDetails",query:{id:t.businessId}})},resetForm:function(t){this.$refs[t].resetFields()},handlePageChange:function(t){var e=t.currentPage,n=t.pageSize;this.table.page.currentPage=e,this.table.page.pageSize=n,this.getData()},getData:function(){var t=this;return Object(s["a"])(Object(i["a"])().mark((function e(){var n,a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.table.loading=!0,n=Object(o["a"])(Object(o["a"])({},t.formInline),{},{pageNum:t.table.page.currentPage,pageSize:t.table.page.pageSize}),e.next=4,Object(c["b"])(n);case 4:a=e.sent,t.table.datas=a.rows,t.table.page.total=a.total,t.table.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},setStatusColor:function(t){var e=t.columnIndex;if(8==e)return{color:"#0084FF"}},headClass:function(){return"color:#6884B4"}}},d=l,p=(n("ee29c"),n("2877")),f=Object(p["a"])(d,a,r,!1,null,"aec40642",null);e["default"]=f.exports},ba77:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"q",(function(){return f})),n.d(e,"j",(function(){return m})),n.d(e,"p",(function(){return b})),n.d(e,"n",(function(){return h})),n.d(e,"o",(function(){return g})),n.d(e,"m",(function(){return y})),n.d(e,"l",(function(){return v})),n.d(e,"i",(function(){return j}));var a=n("b775");function r(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/stat",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/statistics/sl/statTotalList",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/statistics/sl/statCompanyByType",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/list",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/remove",method:"DELETE",data:t})}function u(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/save",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/listHandle",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/".concat(t),method:"get"})}function p(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/materialSubmit",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/updateStatus",method:"post",data:t})}function m(t){return Object(a["a"])({url:"roadProducts/roadConstruct/reviewSubmit",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/statistics/sl/total",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/statistics/sl/companyStat",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/statistics/sl/companyRank",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/statistics/sl/statTypeRatio",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/statistics/sl/statTypeCount",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/roadProducts/roadConstruct/withdraw/".concat(t),method:"patch"})}},ee29c:function(t,e,n){"use strict";n("307d")}}]);