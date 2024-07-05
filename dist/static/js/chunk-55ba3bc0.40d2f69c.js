(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55ba3bc0","chunk-9bc040f8"],{25875:function(t,e,a){"use strict";a("a0a2")},"3f63":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"statistical-analysis"},[a("div",{staticClass:"params"},[a("el-form",{ref:"ruleForm",attrs:{model:t.formInline}},[a("el-row",[a("el-col",{attrs:{span:4}},[t.isPower?a("el-form-item",{attrs:{"label-width":"100px",label:"公司类型",prop:"orgType"}},[a("el-select",{attrs:{clearable:"",placeholder:"选择公司"},on:{change:t.selectOrgType},model:{value:t.orgType,callback:function(e){t.orgType=e},expression:"orgType"}},t._l(t.companyTypeList,(function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})),1)],1):t._e()],1),a("el-col",{attrs:{span:4}},[t.isPower?a("el-form-item",{attrs:{"label-width":"100px",label:"公司名称",prop:"companyId"}},[a("el-select",{attrs:{disabled:!t.companyTypeList,clearable:"",placeholder:"选择公司"},on:{change:t.selectCompany},model:{value:t.formInline.companyId,callback:function(e){t.$set(t.formInline,"companyId",e)},expression:"formInline.companyId"}},t._l(t.depList,(function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})),1)],1):t._e()],1),a("el-col",{attrs:{span:4}},[t.isPower?t._e():a("el-form-item",{attrs:{"label-width":"100px",label:"公司名称",prop:"companyId"}},[a("el-select",{attrs:{clearable:"",placeholder:"选择公司"},on:{change:t.selectCompany},model:{value:t.formInline.companyId,callback:function(e){t.$set(t.formInline,"companyId",e)},expression:"formInline.companyId"}},t._l(t.depList,(function(t){return a("el-option",{key:t.deptId,attrs:{label:t.deptName,value:t.deptId}})})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"100px",label:"所属部门：",prop:"orgId"}},[a("el-cascader",{key:t.cascaderKey,ref:"cascader",attrs:{disabled:!t.departmentalList,options:t.departmentalList,props:{value:"id"}},on:{change:t.handleChange}})],1)],1),a("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:6}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchFn(t.formInline)}}},[t._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.resetFrom}},[t._v("重置")])],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.personnelAgeVO&&(1==t.type||!t.type),expression:"personnelAgeVO && (type == 1 || !type)"}],staticClass:"card-list"},[a("ChartCard",{attrs:{title:"人员年龄统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"rynltjEcharts"}})]),a("ChartCard",{attrs:{title:"人员性别统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"ryxbtjEcharts"}})]),a("ChartCard",{attrs:{title:"人员角色统计"}},[a("div",{ref:"rygwtjEcharts",staticStyle:{height:"300px",width:"100%"},attrs:{id:"rygwtjEcharts"}})])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.personnelAgeVO&&(2==t.type||!t.type),expression:"personnelAgeVO && (type == 2 || !type)"}],staticClass:"card-list"},[a("ChartCard",{attrs:{title:"车辆工作分类统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"clgzflEcharts"}})]),a("ChartCard",{attrs:{title:"车辆年限统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"clnxtjEcharts"}})]),a("ChartCard",{attrs:{title:"车辆使用状态统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"clsyztEcharts"}})]),a("ChartCard",{attrs:{title:"过去7日车辆行驶里程情况(km)"}},[a("div",{staticStyle:{"padding-right":"10px",height:"240px",width:"100%"},attrs:{id:"clxslcEcharts"}})]),a("ChartCard",{attrs:{title:"车辆总里程统计"}},[a("div",{staticStyle:{height:"240px",width:"100%"},attrs:{id:"clzlcEcharts"}})]),a("div",{staticClass:"card"})],1)])},r=[],l=a("c7eb"),i=a("1da1"),c=(a("d81d"),a("14d9"),a("b0c0"),a("2934")),o=a("68be"),s=a("b775");function u(t){return Object(s["a"])({url:"/orgManager/count/statistic",method:"POST",data:t})}var d=a("313e"),p={props:["type"],data:function(){return{isPower:!1,personnelAgeVO:"",rynltjEcharts:"",sexRatioVO:"",ryxbtjEcharts:"",vehicleRatioVOList:"",clgzflEcharts:"",vehicleStatusVOList:"",clsyztEcharts:"",vehicleMileageRangeVOList:"",clzlcEcharts:"",personRoleList:[],rygwtjEcharts:"",vehicleDateRangeVOList:"",clnxtjEcharts:"",vehicleSevenDayVOList:"",clxslcEcharts:"",department:"",depList:[],departmentalList:null,companyTypeList:null,cascaderKey:0,formInline:{orgId:"",companyId:""},orgType:""}},components:{ChartCard:o["a"]},created:function(){var t=this;this.getData().then((function(){t.initFn()})),this.getDptData()},mounted:function(){var t=this;this.$store.getters.userInfo.roles.map((function(e){("jtld"==e.roleKey||e.admin)&&(t.isPower=!0)})),this.isPower||Object(c["j"])().then((function(e){t.depList=e.data}))},methods:{resetFrom:function(){this.formInline={orgId:"",companyId:""},this.orgType="",this.departmentalList=[],this.cascaderKey=0},handleChange:function(t){this.formInline.orgId=t[t.length-1]},selectCompany:function(t){var e=this;this.cascaderKey++,this.departmentalList=[],this.formInline.orgId=null,Object(c["e"])(t).then((function(t){var a=t.data;e.departmentalList=a}))},searchFn:function(t){var e=this;this.getData(t).then((function(){e.initFn()}))},selectOrgType:function(t){var e=this;return Object(i["a"])(Object(l["a"])().mark((function a(){var n,r;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.formInline.companyId=null,e.formInline.orgId=null,e.$refs.cascader.checkedValue=[],a.next=5,Object(c["h"])({parentId:t,status:0});case 5:n=a.sent,r=n.data,e.depList=r;case 8:case"end":return a.stop()}}),a)})))()},getData:function(){var t=arguments,e=this;return Object(i["a"])(Object(l["a"])().mark((function a(){var n,r;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},a.next=3,u(n);case 3:r=a.sent,e.personnelAgeVO=r.data.personnelAgeVO,e.sexRatioVO=r.data.sexRatioVO,e.vehicleRatioVOList=r.data.vehicleRatioVOList,e.vehicleStatusVOList=r.data.vehicleStatusVOList,e.personRoleList=r.data.personRoleList,e.vehicleDateRangeVOList=r.data.vehicleDateRangeVOList,e.vehicleSevenDayVOList=r.data.vehicleSevenDayVOList,e.vehicleMileageRangeVOList=r.data.vehicleMileageRangeVOList;case 12:case"end":return a.stop()}}),a)})))()},initEchartFn:function(t,e,a,n,r,l){var i=this;if(this.$data[t]=d["init"](document.getElementById(t)),"bar"==a){var c=r?[{show:!0,type:"slider",start:0,end:30,height:3}]:"",o=l?{interval:0,rotate:30}:{interval:0};this.$nextTick((function(){return i.$data[t].setOption({tooltip:{trigger:"item"},grid:{left:"3%",right:"6%",bottom:"1%",containLabel:!0},xAxis:{data:n,axisLabel:o},dataZoom:c,yAxis:{},series:[{type:"bar",data:e,barWidth:"25%"}]}),!1}))}else"line"==a?this.$data[t].setOption({title:{},tooltip:{trigger:"axis"},legend:{data:["清障救援车辆","路网巡查车辆"]},grid:{left:"3%",right:"6%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:n,axisLabel:{interval:0,show:!0}},yAxis:{type:"value"},series:[{name:"清障救援车辆",type:"line",stack:"Total",data:e[0],lineStyle:{normal:{color:"#fbca45",width:4}}},{name:"路网巡查车辆",type:"line",stack:"Total",data:e[1],lineStyle:{normal:{color:"#e596e9",width:4}}}]}):a||this.$data[t].setOption({tooltip:{trigger:"item"},legend:{right:"100px",top:"70px",orient:"vertical",icon:"circle"},color:["#00A2FF","#FFDB5C","#FF9F7F","#fba5ff","#5470c6","pink"],series:[{type:"pie",radius:["40%","55%"],avoidLabelOverlap:!1,left:"-55%",label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:16,fontWeight:"bold"}},labelLine:{show:!1},data:e}]})},initFn:function(){var t=this,e=this.personnelAgeVO.map((function(t){return{value:t.data,name:t.name}}));this.initEchartFn("rynltjEcharts",e),this.initEchartFn("ryxbtjEcharts",[{value:this.sexRatioVO.maleCount,name:this.sexRatioVO.maleStr+" "+this.sexRatioVO.malePercentage+"%"},{value:this.sexRatioVO.femaleCount,name:this.sexRatioVO.femaleStr+" "+this.sexRatioVO.femalePercentage+"%"}]);var a=this.vehicleRatioVOList.map((function(t){return{value:t.vehicleCount,name:t.vehicleClass+" "+t.vehiclePercentage+"%"}}));this.initEchartFn("clgzflEcharts",a);var n=this.vehicleStatusVOList.map((function(t){return{value:t.count,name:t.status+" "+t.percentage+"%"}}));this.initEchartFn("clsyztEcharts",n);var r=[{value:0,name:"10万km以内"},{value:0,name:"10-20万km之间"},{value:0,name:"20-30万km之间"},{value:0,name:"30万km以上"}];r.map((function(e){t.vehicleMileageRangeVOList.map((function(t){e.name==t.mileageRange&&(e.value=t.vehicleCount,e.name=t.mileageRange+" "+t.percentage+"%")}))})),this.initEchartFn("clzlcEcharts",r);var l=[[],[]],i=this.vehicleSevenDayVOList.map((function(t){return l[0].push(t.vehicleQzCount),l[1].push(t.vehicleLwCount),t.dateStr}));this.initEchartFn("clxslcEcharts",l,"line",i);var c=[],o=this.personRoleList.map((function(t){return c.push(t.name),1*t.data}));this.initEchartFn("rygwtjEcharts",o,"bar",c,!1,!0);var s=[],u=this.vehicleDateRangeVOList.map((function(t){return s.push(t.dateRange),1*t.vehicleCount}));this.initEchartFn("clnxtjEcharts",u,"bar",s)},getDptData:function(){var t=this;return Object(i["a"])(Object(l["a"])().mark((function e(){var a,n;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])({parentId:100,status:0});case 2:a=e.sent,n=a.data,t.companyTypeList=n;case 5:case"end":return e.stop()}}),e)})))()}}},h=p,m=(a("97dc"),a("2877")),b=Object(m["a"])(h,n,r,!1,null,"3e12748a",null);e["default"]=b.exports},"49a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vehicle-overview"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"车辆设备数量",name:"numbers"}},[a("div",{staticClass:"card-cont"},[a("div",{staticClass:"table-card"},[a("el-table",{staticClass:"mytable-scrollbar",attrs:{data:t.table.datas,border:"",loading:t.table.loading,"row-key":"companyId","header-cell-style":{background:"#eef6fa",color:"#000"}}},[a("el-table-column",{attrs:{prop:"companyType",label:"公司类型",align:"center"}}),a("el-table-column",{attrs:{label:"巡查车辆情况",align:"center"}},[a("el-table-column",{attrs:{prop:"onLinePatrolVehiclesCnt",label:"在用数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"offLinePatrolVehiclesCnt",label:"维修维保数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"xcDeactivateCount",label:"停用数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"patrolVehiclesCnt",label:"巡查车辆总计(辆)",align:"center"}})],1),a("el-table-column",{attrs:{label:"清障车辆情况",align:"center"}},[a("el-table-column",{attrs:{prop:"onLineWreckerVehiclesCnt",label:"在用数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"offLineWreckerVehiclesCnt",label:"维修维保数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"qzDeactivateCount",label:"停用数量(辆)",align:"center"}}),a("el-table-column",{attrs:{prop:"wreckerVehiclesCnt",label:"清障车辆总计(辆)",align:"center"}})],1)],1)],1),a("div",{staticClass:"table-card",staticStyle:{padding:"20px"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择公司类型"},model:{value:t.companyType,callback:function(e){t.companyType=e},expression:"companyType"}},t._l(t.companyTypeList,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1),a("el-button",{staticStyle:{margin:"15px"},attrs:{type:"primary"},on:{click:function(e){return t.onSubmit()}}},[t._v("查询")]),a("el-table",{staticClass:"mytable-scrollbar",attrs:{data:t.tableData,border:"",loading:t.loading,"row-key":"companyId","header-cell-style":{background:"#eef6fa",color:"#000"}}},[a("el-table-column",{attrs:{prop:"companyDesc",label:"公司名称"}}),a("el-table-column",{attrs:{label:"巡查车辆情况",align:"center"}},[a("el-table-column",{attrs:{prop:"onLinePatrolVehiclesCnt",label:"在用数量(辆)"}}),a("el-table-column",{attrs:{prop:"offLinePatrolVehiclesCnt",label:"维修维保数量(辆)"}}),a("el-table-column",{attrs:{prop:"xcDeactivateCount",label:"停用数量(辆)"}}),a("el-table-column",{attrs:{prop:"patrolVehiclesCnt",label:"巡查车辆总计(辆)"}})],1),a("el-table-column",{attrs:{label:"清障车辆情况",align:"center"}},[a("el-table-column",{attrs:{prop:"onLineWreckerVehiclesCnt",label:"在用数量(辆)"}}),a("el-table-column",{attrs:{prop:"offLineWreckerVehiclesCnt",label:"维修维保数量(辆)"}}),a("el-table-column",{attrs:{prop:"qzDeactivateCount",label:"停用数量(辆)"}}),a("el-table-column",{attrs:{prop:"wreckerVehiclesCnt",label:"清障车辆总计(辆)"}})],1)],1)],1)])]),a("el-tab-pane",{attrs:{lazy:"",label:"统计分析",name:"statistics"}},[a("statiscalAnalysis",{attrs:{type:2}})],1)],1)],1)},r=[],l=a("c7eb"),i=a("1da1"),c=(a("4de4"),a("d81d"),a("14d9"),a("d3b7"),a("2934")),o=a("c5da"),s=a("3f63"),u={components:{statiscalAnalysis:s["default"]},data:function(){return{activeName:"numbers",tableData:[],loading:!1,table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"left",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},companyType:"",companyTypeList:""}},created:function(){this.getData()},methods:{getData:function(){var t=this;return Object(i["a"])(Object(l["a"])().mark((function e(){var a,n,r;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.table.loading=!0,t.loading=!0,e.next=4,Object(o["u"])();case 4:return a=e.sent,t.tableData=a.data||[],t.tableData.map((function(e){e.companyDesc||t.table.datas.push(e)})),t.tableData=t.tableData.filter((function(t){return t.companyDesc})),t.table.loading=!1,t.loading=!1,e.next=12,Object(c["k"])({dictType:"company_type"});case 12:n=e.sent,r=n.rows,t.companyTypeList=r;case 15:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return Object(i["a"])(Object(l["a"])().mark((function e(){var a;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(o["u"])({companyType:t.companyType});case 3:a=e.sent,t.tableData=a.data||[],t.tableData=t.tableData.filter((function(t){return t.companyDesc})),t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},d=u,p=(a("25875"),a("2877")),h=Object(p["a"])(d,n,r,!1,null,"b45e5b5e",null);e["default"]=h.exports},"97dc":function(t,e,a){"use strict";a("f1da")},a0a2:function(t,e,a){},c5da:function(t,e,a){"use strict";a.d(e,"p",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"i",(function(){return i})),a.d(e,"h",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"t",(function(){return u})),a.d(e,"s",(function(){return d})),a.d(e,"q",(function(){return p})),a.d(e,"r",(function(){return h})),a.d(e,"j",(function(){return m})),a.d(e,"m",(function(){return b})),a.d(e,"o",(function(){return f})),a.d(e,"d",(function(){return g})),a.d(e,"g",(function(){return y})),a.d(e,"k",(function(){return v})),a.d(e,"l",(function(){return O})),a.d(e,"u",(function(){return x})),a.d(e,"n",(function(){return w})),a.d(e,"e",(function(){return j})),a.d(e,"v",(function(){return C})),a.d(e,"f",(function(){return L}));a("99af");var n=a("b775");function r(t){return Object(n["a"])({url:"/roadProducts/roadType/roadTypeTree",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/system/dept/getInfoByCompanyId/".concat(t),method:"get"})}function i(t){var e=t.pageNum,a=void 0===e?1:e,r=t.pageSize,l=void 0===r?10:r;return delete t.pageNum,delete t.pageSize,Object(n["a"])({url:"/roadProducts/employee/page?pageSize=".concat(l,"&pageNum=").concat(a),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/roadProducts/employee/".concat(t.id),method:"get",params:t})}function o(t,e){return Object(n["a"])({url:"/roadProducts/employee",method:e,data:t})}function s(t){return Object(n["a"])({url:"/roadProducts/employee/".concat(t),method:"DELETE"})}function u(t){return Object(n["a"])({url:"/roadProducts/tVehicleInfo/list",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/roadProducts/tVehicleInfo/info/"+t,method:"get"})}function p(t,e,a){return Object(n["a"])({url:"/roadProducts/tVehicleInfo/"+e,method:a,data:t})}function h(t){return Object(n["a"])({url:"/roadProducts/tVehicleInfo/remove/"+t,method:"delete"})}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(n["a"])({url:"/system/user/"+t,method:"get"})}function b(t){return Object(n["a"])({url:"/orgManager/count/companyOperationsCount",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/orgManager/count/roadSituationCount",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/roadProducts/mainRoadInfo/getRoadList",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/orgManager/count/updList",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/orgManager/count/getAllRoadInfo",method:"get",params:t})}function O(t){var e=t?t.companyType:"";return Object(n["a"])({url:"/orgManager/count/getAllRoadSourceInfos?companyType=".concat(e),method:"get"})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/orgManager/count/getVehicleTotalInfos",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/roadProducts/tReportRoadInfo/getPatrolTimesNameList",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/orgManager/count/statDept",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/orgManager/count/updateDept",method:"post",data:t})}function L(t){var e=t?t.companyType:"";return Object(n["a"])({url:"/orgManager/count/statPerson?companyType=".concat(e),method:"get",data:t})}},f1da:function(t,e,a){}}]);