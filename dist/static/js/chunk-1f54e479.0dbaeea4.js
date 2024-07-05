(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f54e479"],{a4e2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"params"},[n("el-form",{ref:"ruleForm",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"清障车号",prop:"wreckerNumber"}},[n("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.formInline.wreckerNumber,callback:function(t){e.$set(e.formInline,"wreckerNumber",t)},expression:"formInline.wreckerNumber"}})],1),n("el-form-item",{attrs:{label:"所属公司",prop:"companyId"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择运营公司"},model:{value:e.formInline.companyId,callback:function(t){e.$set(e.formInline,"companyId",t)},expression:"formInline.companyId"}},e._l(e.depList,(function(e){return n("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("查询")])],1),n("el-form-item",[n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),n("div",[n("el-row",{directives:[{name:"show",rawName:"v-show",value:e.table.datas.length>0,expression:"table.datas.length > 0"}],staticStyle:{"padding-bottom":"15px"}},[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:e.isDel?"primary":""},on:{click:e.changeTabDelState}},[e._v("编辑")])],1)],1),n("vxe-grid",{ref:"table",attrs:{"highlight-hover-row":"",stripe:"",resizable:"","auto-resize":"","max-height":"600","pager-config":e.table.page,loading:e.table.loading,columns:e.columns,data:e.table.datas},on:{"checkbox-change":e.checkboxChange,"checkbox-all":e.selectAllCheckboxChange,"page-change":e.handlePageChange},scopedSlots:e._u([{key:"rescuedWreckerNumber",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.rescueVehicleList?n.rescueVehicleList.map((function(e){return e.rescuedWreckerNumber})).join(""):"")+" ")]}},{key:"option",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDetail(r,"info")}}},[e._v("详情")]),5==r.status?n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDetail(r,"edit")}}},[e._v("审核")]):e._e()]}}])}),n("el-row",{directives:[{name:"show",rawName:"v-show",value:e.isDel,expression:"isDel"}],staticStyle:{"padding-top":"15px"}},[n("div",{staticClass:"btn-group",staticStyle:{display:"flex","justify-content":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.delTabData}},[e._v("删除")]),n("el-button",{on:{click:e.changeTabDelState}},[e._v("取消")])],1)])],1)])},a=[],c=n("5530"),o=n("c7eb"),u=n("1da1"),i=(n("a15b"),n("d81d"),n("14d9"),n("e984")),s=n("2934"),l={data:function(){return{formInline:{companyId:"",wreckerNumber:""},depList:[],stateList:[],table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"left",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},columns:[{title:"公司名称",field:"company",align:"center"},{title:"清障车号",field:"wreckerNumber",align:"center"},{title:"司机",field:"driver",align:"center"},{title:"清障人员",field:"personnel",align:"center"},{title:"清障路段",field:"section",align:"center"},{title:"被清理车辆",slots:{default:"rescuedWreckerNumber"},align:"center"},{title:"清障出车时间",field:"yksTime",align:"center"},{title:"清障服务费",field:"qzfwf",align:"center"},{title:"状态",field:"statusName",align:"center"},{title:"操作",slots:{default:"option"},align:"center"}],isDel:!1,checkedRows:""}},mounted:function(){this.getDptData(),this.getData(),this.getstateList()},methods:{checkboxChange:function(){this.checkedRows=this.$refs.table.getCheckboxRecords()},selectAllCheckboxChange:function(e){this.checkedRows=e.records},changeTabDelState:function(){this.isDel=!this.isDel,this.$refs.table.clearCheckboxRow(),this.$set(this.columns,0,{type:"checkbox",width:50,visible:this.isDel})},delTabData:function(){var e=this;this.$confirm("是否确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(t){var n=e.checkedRows.map((function(e){return e.id})).join(",");Object(i["h"])(n).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getData(),e.changeTabDelState()}))}))},getstateList:function(){var e=this;return Object(u["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["k"])({dictType:"qzjy_status"});case 2:n=t.sent,e.stateList=n.rows;case 4:case"end":return t.stop()}}),t)})))()},getDptData:function(){var e=this;return Object(u["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["j"])();case 2:n=t.sent,e.depList=n.data;case 4:case"end":return t.stop()}}),t)})))()},handleDetail:function(e,t){this.$router.push({path:"/clearanceRescue/clearanceDetails",query:{id:e.id,type:t}})},resetForm:function(e){this.$refs[e].resetFields()},handlePageChange:function(e){var t=e.currentPage,n=e.pageSize;this.table.page.currentPage=t,this.table.page.pageSize=n,this.getData()},getData:function(){var e=this;return Object(u["a"])(Object(o["a"])().mark((function t(){var n,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.table.loading=!0,n=Object(c["a"])(Object(c["a"])({},e.formInline),{},{pageNum:e.table.page.currentPage,pageSize:e.table.page.pageSize}),t.next=4,Object(i["r"])(n);case 4:r=t.sent,e.table.datas=r.rows,e.table.page.total=r.total,e.table.loading=!1,e.table.datas.map((function(e){e.nodeList.map((function(t){1==t.optNotDrive&1==t.rStatus&&(e.qzfwf=0)}))}));case 9:case"end":return t.stop()}}),t)})))()}}},d=l,f=n("2877"),p=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=p.exports},e984:function(e,t,n){"use strict";n.d(t,"s",(function(){return a})),n.d(t,"D",(function(){return c})),n.d(t,"n",(function(){return o})),n.d(t,"t",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return b})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return j})),n.d(t,"A",(function(){return O})),n.d(t,"w",(function(){return w})),n.d(t,"E",(function(){return k})),n.d(t,"d",(function(){return P})),n.d(t,"b",(function(){return y})),n.d(t,"z",(function(){return x})),n.d(t,"l",(function(){return R})),n.d(t,"y",(function(){return D})),n.d(t,"k",(function(){return C})),n.d(t,"m",(function(){return S})),n.d(t,"B",(function(){return z})),n.d(t,"f",(function(){return N})),n.d(t,"o",(function(){return T})),n.d(t,"x",(function(){return I})),n.d(t,"C",(function(){return L}));var r=n("b775");function a(){return Object(r["a"])({url:"/system/dept/list?type=1&isFilter=false",method:"get"})}function c(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/updateData",method:"PUT",data:e})}function o(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/generateClearanceRecord/".concat(e),method:"get"})}function u(e){return Object(r["a"])({url:"/roadProducts/clearanceRescueCost/getCostCount",method:"POST",data:e})}function i(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue_v1/edit",method:"POST",data:e})}function s(e){return Object(r["a"])({url:"/roadProducts/standardization/edit",method:"PUT",data:e})}function l(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/cancel/".concat(e.id),method:"patch",data:{cancelReason:e.cancelReason}})}function d(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/remove?ids="+e,method:"DELETE"})}function f(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/remove",method:"DELETE",data:e})}function p(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/list",method:"post",data:e})}function h(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/query",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/shList ",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/infoByParentId/".concat(e),method:"get"})}function g(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/info/".concat(e),method:"get"})}function v(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/saveClearanceRecord",data:e,method:"post"})}function j(e,t){return Object(r["a"])({url:"/roadProducts/clearanceRescue/".concat(t),method:"post",data:e})}function O(e){return Object(r["a"])({url:"/clearanceRescue/count/getCount",method:"post",data:e})}function w(e){return Object(r["a"])({url:"/roadProducts/invoice/list",method:"post",data:e})}function k(e){return Object(r["a"])({url:"roadProducts/clearanceRescue/updateStatus",method:"post",data:e})}function P(e,t){return Object(r["a"])({url:"/roadProducts/invoice/".concat(t),method:"post",data:e})}function y(e){return Object(r["a"])({url:"/roadProducts/invoice/add",method:"post",data:e})}function x(e){return Object(r["a"])({url:"/roadProducts/invoice/info/".concat(e),method:"get"})}function R(e){return Object(r["a"])({url:"/roadProducts/invoice/edit",method:"post",data:e})}function D(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/gdList",method:"post",data:e})}function C(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/edit",method:"post",data:e})}function S(e){return Object(r["a"])({url:"/roadProducts/workOrderReturn/list",method:"post",data:e})}function z(e){return Object(r["a"])({url:"/roadProducts/clearanceRescue/statAnalysis",method:"post",data:e})}function N(e){return Object(r["a"])({url:"/statistics/qz/statTotalList",method:"post",data:e})}function T(e){return Object(r["a"])({url:"/statistics/qz/statRateList",method:"post",data:e})}function I(e){return Object(r["a"])({url:"/statistics/qz/companyStat",method:"post",data:e})}function L(e){return Object(r["a"])({url:"/statistics/qz/trendAnalysis",method:"post",data:e})}}}]);