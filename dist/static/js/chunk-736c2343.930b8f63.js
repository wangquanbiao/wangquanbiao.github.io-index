(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-736c2343","chunk-2fe9e9b4"],{a295:function(e,t,n){"use strict";n("cc0c")},b967:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"r_pages"},[n("el-form",{ref:"ruleForm",attrs:{"label-width":"120px",inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"所属部门：",prop:"orgId"}},[n("el-cascader",{key:e.cascaderKey,ref:"orgCascader",attrs:{"popper-class":"cascader",options:e.DWList,props:{value:"id",checkStrictly:!0,emitPath:!1},clearable:"","expand-trigger":"hover"},on:{change:e.handleChange},model:{value:e.formInline.orgId,callback:function(t){e.$set(e.formInline,"orgId",t)},expression:"formInline.orgId"}})],1),n("el-form-item",{attrs:{label:"车辆分类：",prop:"vehicleClass"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.vehicleClass,callback:function(t){e.$set(e.formInline,"vehicleClass",t)},expression:"formInline.vehicleClass"}},e._l(e.CLFLList,(function(e){return n("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),n("el-form-item",{attrs:{label:"使用状态：",prop:"useType"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.useType,callback:function(t){e.$set(e.formInline,"useType",t)},expression:"formInline.useType"}},e._l(e.SYZTList,(function(e){return n("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),n("el-form-item",{attrs:{label:"车牌号码：",prop:"vehicleNo"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入"},model:{value:e.formInline.vehicleNo,callback:function(t){e.$set(e.formInline,"vehicleNo",t)},expression:"formInline.vehicleNo"}})],1),n("el-form-item",{attrs:{label:"车牌编号：",prop:"vehicleNumber"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入"},model:{value:e.formInline.vehicleNumber,callback:function(t){e.$set(e.formInline,"vehicleNumber",t)},expression:"formInline.vehicleNumber"}})],1),n("el-form-item",{attrs:{label:"购置/调拨时间：",prop:"purchaseDate"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择","value-format":"yyyy-MM-dd HH:mm"},model:{value:e.formInline.purchaseDate,callback:function(t){e.$set(e.formInline,"purchaseDate",t)},expression:"formInline.purchaseDate"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("搜索")]),n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),e.$route.query.orgId||e.$route.query.companyId?n("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")]):e._e()],1)],1),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:e.setAdd}},[e._v("新增")]),n("div",{staticStyle:{"margin-top":"40px"}},[n("vxe-grid",{staticClass:"mytable-scrollbar",attrs:{"highlight-hover-row":"",stripe:"",resizable:"","auto-resize":"","max-height":"600","pager-config":e.table.page,loading:e.table.loading,columns:e.columns,data:e.table.datas},on:{"page-change":e.handlePageChange},scopedSlots:e._u([{key:"optionImg",fn:function(t){var r=t.row;return[r.vehiclePic?n("img",{staticClass:"img_w",attrs:{src:e.setImgUrl(r),alt:""},on:{click:function(t){return e.setFD(r)}}}):e._e()]}},{key:"isInstallDevice",fn:function(t){var r=t.row;return[n("div",[e._v(e._s("1"==r.isInstallDevice?"是":"否"))])]}},{key:"isInstallCamera",fn:function(t){var r=t.row;return[n("div",[e._v(e._s("1"==r.isInstallCamera?"是":"否"))])]}},{key:"option",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(r)}}},[e._v("修改")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDel(r)}}},[e._v("删除")])]}}])})],1),n("details-dialog",{ref:"details",attrs:{search:e.crow,show:e.isShowAdd},on:{notice:e._notice,"update:show":function(t){e.isShowAdd=t}}}),n("el-dialog",{attrs:{title:"车辆信息",visible:e.isShowLane,"append-to-body":"","close-on-click-modal":!1,"close-on-press-escape":!1,width:"500px"},on:{"update:visible":function(t){e.isShowLane=t}}},[n("el-form",{ref:"laneForm",attrs:{model:e.laneForm,rules:e.rulesLane,"label-width":"120px"}},[n("el-row",[n("el-form-item",{attrs:{label:"车牌号码：",prop:"vehicleNo"}},[n("el-input",{attrs:{disabled:""},model:{value:e.laneForm.vehicleNo,callback:function(t){e.$set(e.laneForm,"vehicleNo",t)},expression:"laneForm.vehicleNo"}})],1)],1),n("el-row",[n("el-form-item",{attrs:{label:"使用状态：",prop:"useType"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.laneForm.useType,callback:function(t){e.$set(e.laneForm,"useType",t)},expression:"laneForm.useType"}},e._l(e.DWList,(function(e){return n("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1)],1),n("el-form-item",{staticStyle:{"margin-top":"40px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitLaneForm("laneForm")}}},[e._v("确定")]),n("el-button",{on:{click:function(t){return e.resetLaneForm("laneForm")}}},[e._v("重置")])],1)],1)],1),n("el-dialog",{attrs:{visible:e.imgDialogVisible,size:"full",modal:!1,title:"查看大图片"},on:{"update:visible":function(t){e.imgDialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.imgUrl,alt:""}})])],1)},a=[],i=n("ade3"),o=n("5530"),c=n("c7eb"),l=n("1da1"),s=(n("d81d"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("2934")),u=n("c5da"),d=n("fcb7"),m=function(){return Promise.all([n.e("chunk-commons"),n.e("chunk-686d33e5")]).then(n.bind(null,"4481"))},p={components:{detailsDialog:m},props:{currentData:{type:Object,default:function(){return{}}},changeCompanyName:{type:Function}},watch:{currentData:{handler:function(e,t){if(!e.deptId)return this.formInline={companyId:"",orgId:"",vehicleClass:"",useType:"",vehicleNo:"",vehicleNumber:"",purchaseDate:"",isFilter:!0},void this.getData();this.crow=e,this.formInline.companyId=e.deptId,this.cascaderKey=0,this.$route.query.orgId&&(this.formInline.orgId=Number(this.$route.query.orgId),this.formInline.vehicleClass=this.$route.query.vehicleClass,this.isFilter=!1),this.initData(),this.getData()},immediate:!0}},data:function(){return{cascaderKey:0,isShowAdd:!1,imgDialogVisible:!1,isShowLane:!1,imgUrl:"",laneForm:{vehicleNo:"",useType:""},formInline:{companyId:"",orgId:"",vehicleClass:"",useType:"",vehicleNo:"",vehicleNumber:"",purchaseDate:"",isFilter:!0},crow:{},DWList:[],CLFLList:[],SYZTList:[],table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"left",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},columns:[{title:"序号",type:"seq",align:"center"},{title:"所属公司",field:"companyDesc",align:"center"},{title:"部门名称",field:"orgDesc",align:"center"},{title:"车牌号码",field:"vehicleNo",align:"center"},{title:"车辆分类",field:"vehicleClassName",align:"center"},{title:"车辆类型",field:"vehicleTypeName",align:"center"},{title:"购置/调拨  日期",field:"purchaseDate",align:"purchaseTime"},{title:"使用状态",field:"useTypeName",align:"center"},{title:"车辆照片",field:"vehiclePic",slots:{default:"optionImg"},align:"center"},{title:"安装定位设备",slots:{default:"isInstallDevice"},align:"center"},{title:"安装云台",slots:{default:"isInstallCamera"},align:"center"},{title:"备注",field:"remark",align:"center"},{title:"操作",slots:{default:"option"},align:"center"}],rulesLane:{useType:[{required:!0,message:"请选择",trigger:"change"}]}}},created:function(){},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({setImgUrl:function(e){return e.vehiclePic?"/prod-api"+e.vehiclePic:""},handleDel:function(e){var t=this;this.$confirm("确定删除该条数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["r"])(e.id).then((function(e){200==e.code&&(t.$message({message:"成功!",type:"success"}),t.getData())})).catch((function(e){}))})).catch((function(){}))},handleEdit:function(e){this.$refs.details.getInfo(e.id),this.$refs.details.setUrl("edit")},submitLaneForm:function(e){this.$refs[e].validate((function(e){if(!e)return!1;alert("submit!")}))},resetLaneForm:function(e){this.$refs[e].resetFields()},_notice:function(){this.getData()},setAdd:function(){this.$refs.details.setUrl("add"),this.isShowAdd=!0,this.$refs.details.resetForm("ruleForm")}},"handleEdit",(function(e){this.$refs.details.getInfo(e.id),this.$refs.details.setUrl("edit")})),"submitForm",(function(){this.getData()})),"initData",(function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){var n,r,a;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["a"])(e.crow.deptId);case 2:return n=t.sent,e.cascaderKey++,n.data=n.data.map((function(e){var t,n;(e.value=e.id,0==(null===(t=e.children)||void 0===t?void 0:t.length))?e.children=null:null===(n=e.children)||void 0===n||n.map((function(e){e.value=e.id}));return e})),e.DWList=n.data,t.next=8,Object(s["k"])({dictType:"vehicle_class"});case 8:return r=t.sent,e.CLFLList=r.rows,t.next=12,Object(s["k"])({dictType:"vehicle_use_type"});case 12:a=t.sent,e.SYZTList=a.rows;case 14:case"end":return t.stop()}}),t)})))()})),"resetForm",(function(e){this.$refs[e].resetFields(),this.$refs.orgCascader.$refs.panel.clearCheckedNodes(),this.isFilter=!0,this.$emit("changeCompanyName")})),"handlePageChange",(function(e){var t=e.currentPage,n=e.pageSize;this.table.page.currentPage=t,this.table.page.pageSize=n,this.getData()})),"handleChange",(function(e){this.formInline.isFilter=!0,this.$refs.orgCascader&&(this.$refs.orgCascader.dropDownVisible=!1)})),"setFD",(function(e){this.imgUrl="/prod-api"+e.vehiclePic,this.imgDialogVisible=!0})),"getData",(function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){var n,r;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.table.loading=!0,n=Object(o["a"])(Object(o["a"])({},e.formInline),{},{pageNum:e.table.page.currentPage,pageSize:e.table.page.pageSize}),n.isFilter||(n.deptIdAndBelow=n.orgId,delete n.orgId),delete n.isFilter,t.next=6,Object(u["t"])(n);case 6:r=t.sent,e.table.datas=r.rows,e.table.page.total=r.total,e.table.loading=!1,e.formInline.isFilter=!1;case 11:case"end":return t.stop()}}),t)})))()}))},f=p,h=(n("a295"),n("d53a"),n("2877")),g=Object(h["a"])(f,r,a,!1,null,"0fe96d7c",null);t["default"]=g.exports},be90:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"information",staticStyle:{padding:"25px 0"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"公司名称：",prop:"companyId","label-width":"140px"}},[n("el-select",{attrs:{disabled:e.isChoice,clearable:"",placeholder:"请选择"},on:{change:e.changeCompany},model:{value:e.formInline.companyId,callback:function(t){e.$set(e.formInline,"companyId",t)},expression:"formInline.companyId"}},e._l(e.depList,(function(e){return n("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1)],1),n("vehicleInfo",{attrs:{currentData:e.currentData},on:{changeCompanyName:e.changeCompany}})],1)},a=[],i=n("c7eb"),o=n("1da1"),c=(n("4de4"),n("d81d"),n("a9e3"),n("d3b7"),n("2934")),l=n("b967"),s={components:{vehicleInfo:l["default"]},data:function(){return{formInline:{companyId:""},depList:[],currentData:{},curretnCompanyId:"",isChoice:!1}},created:function(){this.curretnCompanyId=this.$store.getters.userInfo.companyId,this.initData()},methods:{initData:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var n,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])();case 2:if(n=t.sent,e.depList=n.data,!e.$route.query.companyId){t.next=9;break}return r=Number(e.$route.query.companyId),e.changeCompany(r),e.formInline.companyId=r,t.abrupt("return");case 9:e.depList.map((function(t){t.deptId==e.curretnCompanyId&&(e.changeCompany(t.deptId),e.formInline.companyId=t.deptId,e.isChoice=!0)}));case 10:case"end":return t.stop()}}),t)})))()},changeCompany:function(e){if(!e)return this.formInline.companyId="",void(this.currentData={});var t=this.depList.filter((function(t){return t.deptId==e}));this.currentData=t[0]}}},u=s,d=n("2877"),m=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=m.exports},c5da:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"t",(function(){return u})),n.d(t,"s",(function(){return d})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"m",(function(){return h})),n.d(t,"o",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return I})),n.d(t,"u",(function(){return j})),n.d(t,"n",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"v",(function(){return D})),n.d(t,"f",(function(){return C}));n("99af");var r=n("b775");function a(e){return Object(r["a"])({url:"/roadProducts/roadType/roadTypeTree",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/system/dept/getInfoByCompanyId/".concat(e),method:"get"})}function o(e){var t=e.pageNum,n=void 0===t?1:t,a=e.pageSize,i=void 0===a?10:a;return delete e.pageNum,delete e.pageSize,Object(r["a"])({url:"/roadProducts/employee/page?pageSize=".concat(i,"&pageNum=").concat(n),method:"post",data:e})}function c(e){return Object(r["a"])({url:"/roadProducts/employee/".concat(e.id),method:"get",params:e})}function l(e,t){return Object(r["a"])({url:"/roadProducts/employee",method:t,data:e})}function s(e){return Object(r["a"])({url:"/roadProducts/employee/".concat(e),method:"DELETE"})}function u(e){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/list",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/info/"+e,method:"get"})}function m(e,t,n){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/"+t,method:n,data:e})}function p(e){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/remove/"+e,method:"delete"})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(r["a"])({url:"/system/user/"+e,method:"get"})}function h(e){return Object(r["a"])({url:"/orgManager/count/companyOperationsCount",method:"post",data:e})}function g(e){return Object(r["a"])({url:"/orgManager/count/roadSituationCount",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/roadProducts/mainRoadInfo/getRoadList",method:"post",data:e})}function v(e){return Object(r["a"])({url:"/orgManager/count/updList",method:"post",data:e})}function y(e){return Object(r["a"])({url:"/orgManager/count/getAllRoadInfo",method:"get",params:e})}function I(e){var t=e?e.companyType:"";return Object(r["a"])({url:"/orgManager/count/getAllRoadSourceInfos?companyType=".concat(t),method:"get"})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/orgManager/count/getVehicleTotalInfos",method:"post",data:e})}function O(e){return Object(r["a"])({url:"/roadProducts/tReportRoadInfo/getPatrolTimesNameList",method:"get",params:e})}function w(e){return Object(r["a"])({url:"/orgManager/count/statDept",method:"post",data:e})}function D(e){return Object(r["a"])({url:"/orgManager/count/updateDept",method:"post",data:e})}function C(e){var t=e?e.companyType:"";return Object(r["a"])({url:"/orgManager/count/statPerson?companyType=".concat(t),method:"get",data:e})}},cc0c:function(e,t,n){},cca7:function(e,t,n){},d53a:function(e,t,n){"use strict";n("cca7")},fcb7:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n("b775");function a(e){return Object(r["a"])({url:"/system/dept/list",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/roadProducts/dept/deptList",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/system/dept/"+e,method:"get"})}function c(e){return Object(r["a"])({url:"/system/dept",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/system/dept",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/system/dept/"+e,method:"delete"})}function u(e){return Object(r["a"])({url:"/system/user/deptTree?ancestors=".concat(e),method:"get"})}function d(e){return Object(r["a"])({url:"/system/user/deptTree?deptIdAndBelow=".concat(e||""),method:"get"})}}}]);