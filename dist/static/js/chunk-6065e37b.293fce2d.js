(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6065e37b","chunk-34814c66"],{"070c":function(t,e,n){"use strict";n("bd62")},"070cc":function(t,e,n){"use strict";n("a983")},4651:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information",staticStyle:{padding:"25px"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"公司名称：",prop:"companyId","label-width":"140px"}},[n("el-select",{attrs:{disabled:t.isChoice,clearable:"",placeholder:"请选择"},on:{change:t.changeCompany},model:{value:t.formInline.companyId,callback:function(e){t.$set(t.formInline,"companyId",e)},expression:"formInline.companyId"}},t._l(t.depList,(function(t){return n("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})),1)],1)],1),t.depList.length>0?n("personnenfo",{attrs:{isChoice:t.isChoice,currentData:t.currentData},on:{changeCompanyName:t.changeCompany}}):t._e()],1)},a=[],o=n("c7eb"),c=n("1da1"),u=(n("4de4"),n("d81d"),n("a9e3"),n("d3b7"),n("2934")),i=n("beea"),s={components:{personnenfo:i["default"]},data:function(){return{formInline:{companyId:""},depList:[],currentData:{},curretnCompanyId:"",isChoice:!1}},mounted:function(){},created:function(){this.curretnCompanyId=this.$store.getters.userInfo.companyId,this.initData()},methods:{initData:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){var n,r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["j"])();case 2:if(n=e.sent,t.depList=n.data,!t.$route.query.companyId){e.next=9;break}return r=Number(t.$route.query.companyId),t.changeCompany(r),t.formInline.companyId=r,e.abrupt("return");case 9:t.depList.map((function(e){e.deptId==t.curretnCompanyId&&(t.changeCompany(e.deptId),t.formInline.companyId=e.deptId,t.isChoice=!0)}));case 10:case"end":return e.stop()}}),e)})))()},changeCompany:function(t){if(t){var e=this.depList.filter((function(e){return e.deptId==t}));this.currentData=e[0]}else this.formInline.companyId=""}}},d=s,l=n("2877"),f=Object(l["a"])(d,r,a,!1,null,null,null);e["default"]=f.exports},a983:function(t,e,n){},bd62:function(t,e,n){},beea:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"r_pages"},[n("el-form",{ref:"ruleForm",attrs:{"label-width":"120px",inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"所属部门：",prop:"deptId"}},[n("el-cascader",{key:t.cascaderKey,ref:"cascader",attrs:{clearable:"","popper-class":"cascader",options:t.DWList,props:{value:"id",checkStrictly:!0,emitPath:!1},"expand-trigger":"hover"},on:{change:t.handleChange},model:{value:t.formInline.deptId,callback:function(e){t.$set(t.formInline,"deptId",e)},expression:"formInline.deptId"}})],1),n("el-form-item",{attrs:{label:"姓名",prop:"nickName"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入"},model:{value:t.formInline.nickName,callback:function(e){t.$set(t.formInline,"nickName",e)},expression:"formInline.nickName"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("搜索")]),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")]),t.$route.query.orgId?n("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]):t._e()],1)],1),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:t.setAdd}},[t._v("新增")]),n("div",{staticStyle:{"margin-top":"40px"}},[n("vxe-grid",{staticClass:"mytable-scrollbar",attrs:{"highlight-hover-row":"",stripe:"",resizable:"","auto-resize":"","max-height":"600","pager-config":t.table.page,loading:t.table.loading,columns:t.columns,data:t.table.datas},on:{"page-change":t.handlePageChange},scopedSlots:t._u([{key:"sex",fn:function(e){var n=e.row;return[t._v(" "+t._s(0==n.sex?"男":1==n.sex?"女":"-")+" ")]}},{key:"jobStatus",fn:function(e){var n=e.row;return[t._v(" "+t._s(1==n.jobStatus?"在职":2==n.jobStatus?"离职":"-")+" ")]}},{key:"option",fn:function(e){var r=e.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleEdit(r)}}},[t._v("修改")]),n("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:"text"},on:{click:function(e){return t.handleDel(r)}}},[t._v("删除")])]}}])})],1),n("details-dialog",{ref:"details",attrs:{search:t.crow,show:t.isShowAdd},on:{notice:t._notice,"update:show":function(e){t.isShowAdd=e}}}),n("user-dialog",{attrs:{search:t.crow,show:t.isShowUser},on:{notice:t._notice,"update:show":function(e){t.isShowUser=e}}})],1)},a=[],o=n("5530"),c=n("c7eb"),u=n("1da1"),i=(n("d81d"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("2934")),s=n("c5da"),d=n("c0c7"),l=(n("fcb7"),n("7ded")),f=n("24e5"),m=n.n(f),p=function(){return Promise.all([n.e("chunk-commons"),n.e("chunk-0f0d557e")]).then(n.bind(null,"2bf2"))},h=function(){return n.e("chunk-71204f6f").then(n.bind(null,"006b"))},g={components:{detailsDialog:p,userDialog:h},props:{currentData:{type:Object,default:function(){return{}}},changeCompanyName:{type:Function},isChoice:{}},watch:{currentData:{handler:function(t,e){this.crow=t,this.formInline.companyId=t.deptId,this.isChoice?(this.formInline.deptId=this.$store.getters.userInfo.dept.deptId,this.formInline.companyId=this.$store.getters.userInfo.companyId):this.formInline.companyId=t.deptId,this.$route.query.orgId&&(this.formInline.deptId=Number(this.$route.query.orgId)),this.isFilter=!1,this.cascaderKey=0,this.getData(),this.initData()},immediate:!0}},data:function(){return{isSwitch:!1,statusList:[{label:"是",status:0},{label:"否",status:1}],cascaderKey:0,isShowAdd:!1,isShowUser:!1,formInline:{companyId:"",deptId:"",nickName:"",isFilter:!1},form:{deptId:""},crow:{},DWList:[],postList:[],table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"left",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},columns:[{title:"序号",type:"seq",align:"center"},{title:"公司名称",field:"companyName",align:"center"},{title:"部门名称",field:"dept.deptName",align:"center"},{title:"用户姓名",field:"nickName",align:"center"},{title:"手机号码",field:"phonenumber",align:"center"},{title:"任职状态",field:"jobStatus",slots:{default:"jobStatus"},align:"center"},{title:"合同性质",field:"personContractDesc",align:"center"},{title:"性别",field:"sex",slots:{default:"sex"},align:"center"},{title:"备注",field:"remark",align:"center"},{title:"操作",slots:{default:"option"},align:"center"}]}},created:function(){var t=this;this.$store.getters.userInfo.admin?this.isSwitch=!0:this.$store.getters.permissions.map((function(e){"system:user:edit"==e&&(t.isSwitch=!0)}))},methods:{handleStatusChange:function(t){var e=this,n="0"===t.status?"启用":"停用";this.$modal.confirm('确认要"'+n+'""'+t.userName+'"用户吗？').then((function(){return Object(d["b"])(t.userId,t.status)})).then((function(){e.$modal.msgSuccess(n+"成功")})).catch((function(){t.status="0"===t.status?"1":"0"}))},handleCommand:function(t,e){switch(t){case"handleResetPwd":this.handleResetPwd(e);break;case"handleAuthRole":this.handleAuthRole(e);break;default:break}},handleResetPwd:function(t){var e=this;this.$prompt('请输入"'+t.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{8,20}$/,inputErrorMessage:"用户密码长度必须介于 8 和 20 之间"}).then((function(n){var r=n.value;Object(l["c"])().then((function(n){var a=new m.a;a.setPublicKey(n.data);var o=a.encrypt(r);Object(d["k"])(t.userId,o).then((function(t){e.$modal.msgSuccess("修改成功，新密码是："+r)}))}))})).catch((function(){}))},_notice:function(){this.getData()},handleChange:function(t){t?(this.formInline.isFilter=!0,this.$refs.cascader&&(this.$refs.cascader.dropDownVisible=!1)):this.formInline.deptId=""},handleDel:function(t){var e=this;this.$confirm("确定删除该用户吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["b"])(t.id).then((function(t){200==t.code&&(e.$message({message:"成功!",type:"success"}),e.getData())})).catch((function(t){}))})).catch((function(){}))},setAdd:function(){var t=this;this.$refs.details.getUser(),this.$refs.details.setUrl("add"),this.isShowAdd=!0,setTimeout((function(){t.$refs.details.resetForm("ruleForm")}),500)},handleEdit:function(t){this.$refs.details.getInfo(t.id),this.$refs.details.setUrl("edit")},submitForm:function(){this.getData()},initData:function(){var t=this;return Object(u["a"])(Object(c["a"])().mark((function e(){var n;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["g"])({ancestors:t.crow.deptId,isFilter:!0});case 2:n=e.sent,t.cascaderKey++,t.DWList=n.data;case 5:case"end":return e.stop()}}),e)})))()},resetForm:function(t){this.formInline.deptId=void 0,this.isChoice||(this.formInline.companyId=void 0,this.$emit("changeCompanyName")),this.$refs.cascader.checkedValue="",this.$refs[t].resetFields()},handlePageChange:function(t){var e=t.currentPage,n=t.pageSize;this.table.page.currentPage=e,this.table.page.pageSize=n,this.getData()},getData:function(){var t=this;return Object(u["a"])(Object(c["a"])().mark((function e(){var n,r;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.table.loading=!0,n=Object(o["a"])(Object(o["a"])({},t.formInline),{},{pageNum:t.table.page.currentPage,pageSize:t.table.page.pageSize}),e.next=4,Object(s["i"])(n);case 4:r=e.sent,t.table.datas=r.rows,t.table.page.total=r.total,t.table.loading=!1,t.formInline.isFilter=!1;case 9:case"end":return e.stop()}}),e)})))()}}},b=g,y=(n("070c"),n("070cc"),n("2877")),I=Object(y["a"])(b,r,a,!1,null,"22cc8aca",null);e["default"]=I.exports},c0c7:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"m",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"k",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"i",(function(){return m})),n.d(e,"n",(function(){return p})),n.d(e,"c",(function(){return h})),n.d(e,"o",(function(){return g})),n.d(e,"p",(function(){return b})),n.d(e,"f",(function(){return y})),n.d(e,"l",(function(){return I})),n.d(e,"e",(function(){return j}));var r=n("b775"),a=n("c38a");function o(t){return Object(r["a"])({url:"/system/user/list",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/system/user/"+Object(a["e"])(t),method:"get"})}function u(t){return Object(r["a"])({url:"/system/user",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/system/user",method:"put",data:t})}function s(t){return Object(r["a"])({url:"/system/user/"+t,method:"delete"})}function d(t){var e=t.pageSize,n=void 0===e?10:e;return Object(r["a"])({url:"system/post/list?pageNum=1&pageSize=".concat(n),method:"get"})}function l(t,e){var n={userId:t,password:e};return Object(r["a"])({url:"/system/user/resetPwd",method:"put",data:n})}function f(t,e){var n={userId:t,status:e};return Object(r["a"])({url:"/system/user/changeStatus",method:"put",data:n})}function m(){return Object(r["a"])({url:"/system/user/profile",method:"get"})}function p(t){return Object(r["a"])({url:"/system/user/profile",method:"put",data:t})}function h(){return Object(r["a"])({url:"/system/user/profile/checkUserPassword",method:"get"})}function g(t,e){var n={oldPassword:t,newPassword:e};return Object(r["a"])({url:"/system/user/profile/updatePwd",method:"put",params:n})}function b(t){return Object(r["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/system/user/authRole/"+t,method:"get"})}function I(t){return Object(r["a"])({url:"/system/user/authRole",method:"put",params:t})}function j(t){return Object(r["a"])({url:"/system/user/deptTree",method:"get",params:t})}},c5da:function(t,e,n){"use strict";n.d(e,"p",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"t",(function(){return d})),n.d(e,"s",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"r",(function(){return m})),n.d(e,"j",(function(){return p})),n.d(e,"m",(function(){return h})),n.d(e,"o",(function(){return g})),n.d(e,"d",(function(){return b})),n.d(e,"g",(function(){return y})),n.d(e,"k",(function(){return I})),n.d(e,"l",(function(){return j})),n.d(e,"u",(function(){return v})),n.d(e,"n",(function(){return O})),n.d(e,"e",(function(){return w})),n.d(e,"v",(function(){return k})),n.d(e,"f",(function(){return S}));n("99af");var r=n("b775");function a(t){return Object(r["a"])({url:"/roadProducts/roadType/roadTypeTree",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/system/dept/getInfoByCompanyId/".concat(t),method:"get"})}function c(t){var e=t.pageNum,n=void 0===e?1:e,a=t.pageSize,o=void 0===a?10:a;return delete t.pageNum,delete t.pageSize,Object(r["a"])({url:"/roadProducts/employee/page?pageSize=".concat(o,"&pageNum=").concat(n),method:"post",data:t})}function u(t){return Object(r["a"])({url:"/roadProducts/employee/".concat(t.id),method:"get",params:t})}function i(t,e){return Object(r["a"])({url:"/roadProducts/employee",method:e,data:t})}function s(t){return Object(r["a"])({url:"/roadProducts/employee/".concat(t),method:"DELETE"})}function d(t){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/list",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/info/"+t,method:"get"})}function f(t,e,n){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/"+e,method:n,data:t})}function m(t){return Object(r["a"])({url:"/roadProducts/tVehicleInfo/remove/"+t,method:"delete"})}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(r["a"])({url:"/system/user/"+t,method:"get"})}function h(t){return Object(r["a"])({url:"/orgManager/count/companyOperationsCount",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/orgManager/count/roadSituationCount",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/roadProducts/mainRoadInfo/getRoadList",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/orgManager/count/updList",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/orgManager/count/getAllRoadInfo",method:"get",params:t})}function j(t){var e=t?t.companyType:"";return Object(r["a"])({url:"/orgManager/count/getAllRoadSourceInfos?companyType=".concat(e),method:"get"})}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/orgManager/count/getVehicleTotalInfos",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/roadProducts/tReportRoadInfo/getPatrolTimesNameList",method:"get",params:t})}function w(t){return Object(r["a"])({url:"/orgManager/count/statDept",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/orgManager/count/updateDept",method:"post",data:t})}function S(t){var e=t?t.companyType:"";return Object(r["a"])({url:"/orgManager/count/statPerson?companyType=".concat(e),method:"get",data:t})}},fcb7:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n("b775");function a(t){return Object(r["a"])({url:"/system/dept/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/roadProducts/dept/deptList",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/system/dept/"+t,method:"get"})}function u(t){return Object(r["a"])({url:"/system/dept",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/system/dept",method:"put",data:t})}function s(t){return Object(r["a"])({url:"/system/dept/"+t,method:"delete"})}function d(t){return Object(r["a"])({url:"/system/user/deptTree?ancestors=".concat(t),method:"get"})}function l(t){return Object(r["a"])({url:"/system/user/deptTree?deptIdAndBelow=".concat(t||""),method:"get"})}}}]);