(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5a24754"],{"0f6b":function(t,e,n){},"1a71":function(t,e,n){"use strict";n("0f6b")},"340d":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return i})),n.d(e,"m",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return v})),n.d(e,"a",(function(){return b}));var a=n("b775");function r(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/getClaimTotalInfo",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/compensationStatistics",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/compensationEventHandlingRanking/".concat(t.type),method:"post",data:t})}function i(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/reportClaimList",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/remove",method:"DELETE",data:t})}function d(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/claimQueryList",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/detail/".concat(t),method:"get"})}function l(t){return Object(a["a"])({url:"/onlyOffice/edit/".concat(t),method:"get"})}function m(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/query",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/roadProducts/tReportClaimInfo/queryTotal",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/statistics/lp/monthTotalStat",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/statistics/lp/listCompany",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/statistics/lp/submit",method:"put",data:t})}},"467b":function(t,e,n){},a22b4:function(t,e,n){"use strict";n("467b")},f802:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"compensation_print"},[1==t.status?n("el-button",{directives:[{name:"print",rawName:"v-print",value:t.print,expression:"print"}],attrs:{type:"primary"}},[t._v("打印")]):t._e(),n("el-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),n("div",{attrs:{id:"printWrap"}},[n("div",{staticClass:"title"},[n("h3",{staticStyle:{"text-align":"center"}},[t._v("集团辖区高速公路路产赔偿情况统计表")]),n("span",[t._v("单位名称："+t._s(t.parmas.companyName))])]),n("table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadding,expression:"loadding"}],attrs:{border:"1",cellspacing:"0px",align:"center"}},[t._m(0),t._l(t.tableData,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.title||a+1))]),n("td",[t._v(t._s(e.accidentTime))]),n("td",[t._v(t._s(e.companyDesc))]),n("td",[t._v(t._s(e.accidentRoad))]),n("td",[t._v(t._s(e.accidentLocationKm?"K"+e.accidentLocationKm:"")+" "+t._s(e.accidentLocationM?"+"+e.accidentLocationM:""))]),n("td",[t._v(t._s(e.accidentDesc))]),n("td",[t._v(t._s(e.claimAmount))]),n("td",[t._v(t._s(e.receivedAmount))]),n("td",[t._v(t._s(e.unreceivedAmount))]),n("td",[t._v(t._s(e.notCompleteReason))]),n("td",[t._v(t._s(e.completeStatus))]),n("td",[t._v(t._s(e.remark))])])})),t.tableData.length<1?n("tr",[n("td",{attrs:{colspan:"11"}},[t._v("暂无数据")])]):t._e()],2)])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("序号")]),n("td",[t._v("发生时间")]),n("td",[t._v("公司名字")]),n("td",[t._v("路段")]),n("td",[t._v("桩号")]),n("td",[t._v("事件描述")]),n("td",[t._v("应收金额（元）")]),n("td",[t._v("实收金额（元）")]),n("td",[t._v("未收金额（元）")]),n("td",[t._v("未办结具体原因")]),n("td",[t._v("办结情况")]),n("td",[t._v("备注")])])}],o=n("c7eb"),c=n("1da1"),i=(n("d81d"),n("14d9"),n("a9e3"),n("340d")),u={data:function(){return{print:{id:"printWrap",popTitle:" ",extraHead:" ",preview:"",previewTitle:"",previewPrintBtnLabel:"",zIndex:"",previewBeforeOpenCallback:function(){},previewOpenCallback:function(){},beforeOpenCallback:function(){},openCallback:function(){},closeCallback:function(){},url:"",standard:"",extraCss:""},loadding:!0,parmas:{timeType:"MONTH",isReport:!0,statDateStr:"",companyId:"",companyName:""},tableData:[],status:0}},mounted:function(){var t=this;this.$nextTick((function(){t.$route.query.companyId&&(t.parmas.companyId=t.$route.query.companyId,t.parmas.companyName=t.$route.query.companyFullName||t.$route.query.companyName,t.parmas.statDateStr=t.$route.query.date,t.status=t.$route.query.status),t.getData()}))},methods:{getData:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){var n,a,r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadding=!0,e.next=3,Object(i["h"])(t.parmas);case 3:n=e.sent,a=n.rows,t.tableData=a,r={title:"合计",accidentDesc:t.tableData.length+"件",claimAmount:0,receivedAmount:0,unreceivedAmount:0,accidentTime:"",accidentRoad:"",accidentLocationKm:"",accidentLocationM:"",notCompleteReason:"",completeStatus:"",remark:""},t.tableData.map((function(t){r.claimAmount+=Number(t.claimAmount),r.receivedAmount+=Number(t.receivedAmount),r.unreceivedAmount+=Number(t.unreceivedAmount)})),t.tableData.push(r),t.loadding=!1;case 10:case"end":return e.stop()}}),e)})))()}}},d=u,s=(n("a22b4"),n("1a71"),n("2877")),l=Object(s["a"])(d,a,r,!1,null,"28dbf246",null);e["default"]=l.exports}}]);