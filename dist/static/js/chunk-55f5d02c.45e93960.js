(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f5d02c"],{"0c94":function(e,t,a){"use strict";a("42fd")},"2f18":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleForm",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"单位名称",prop:"companyDesc"}},[a("el-select",{attrs:{placeholder:"请选择单位名称",clearable:""},model:{value:e.formInline.companyId,callback:function(t){e.$set(e.formInline,"companyId",t)},expression:"formInline.companyId"}},e._l(e.deplist,(function(e){return a("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1),a("el-form-item",{attrs:{label:"年份",prop:"companyDesc"}},[a("el-date-picker",{attrs:{type:"year","value-format":"yyyy",placeholder:"请选择","picker-options":e.yearPickerOptions},on:{change:e.yearChange},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("el-form-item",{attrs:{label:"月份",prop:"companyDesc"}},[a("el-date-picker",{attrs:{type:"month","value-format":"yyyy-MM",placeholder:"请选择","picker-options":e.pickerOptions},on:{change:e.monthChange},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1),a("div",{staticStyle:{width:"100%"}},[a("vxe-grid",{attrs:{"highlight-hover-row":"",border:"",stripe:"","auto-resize":!0,"max-height":"700",loading:e.table.loading,columns:e.columns,data:e.table.datas},scopedSlots:e._u([{key:"option",fn:function(t){var s=t.row;return[a("el-row",[a("el-col",{attrs:{span:8}},[a("span",{staticClass:"click-sapn",on:{click:function(t){return e.handleDetail(s)}}},[e._v("查看")])]),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"click-sapn",on:{click:function(t){return e.toPages(s)}}},[e._v("打印")])]),a("el-col",{attrs:{span:8}},[a("span",{staticClass:"click-sapn",on:{click:function(t){return e.downloadDoc(s)}}},[e._v("导出")])])],1)]}},{key:"statistical",fn:function(t){var s=t.row;return[a("span",{staticClass:"click-sapn",on:{click:function(t){return e.lookUp(s)}}},[e._v("查看")])]}}])})],1)],1)},n=[],c=a("c7eb"),i=a("5530"),r=a("1da1"),o=(a("99af"),a("d81d"),a("14d9"),a("fb6a"),a("d3b7"),a("159b"),a("2934")),l=a("c1df"),d=a.n(l),f={data:function(){var e=this;return{yearPickerOptions:{disabledDate:function(e){var t=new Date;return e.getTime()>t.getTime()}},formInline:{companyId:null,timeType:null,statDateStr:null,isReport:!0},deplist:[],table:{loading:!1,page:{total:0,align:"left",layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},columns:[{type:"seq",width:100,title:"序号",align:"center"},{field:"deptName",title:"单位名称",align:"center",width:250},{field:"date",title:"日期",align:"center",width:250},{field:"title",title:"标题",align:"center"},{title:"月统计表",slots:{default:"statistical"},align:"center",width:250},{title:"操作",slots:{default:"option"},align:"center",width:250}],year:d()((new Date).getTime()-2592e6).format("yyyy"),month:d()((new Date).getTime()-2592e6).format("yyyy-MM"),pickerOptions:{disabledDate:function(t){if(e.year){var a=new Date(e.year).getFullYear(),s=t.getFullYear();return s!==a}}}}},mounted:function(){var e=this;Object(o["j"])().then((function(t){e.deplist=t.data})),this.getData(),this.formInline.timeType="MONTH"},methods:{getData:function(){var e=this;return Object(r["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.table.loading=!0,t.next=3,Object(o["j"])({deptId:e.formInline.companyId}).then((function(t){var a=[];if(e.year&&(e.timeType="year",e.formInline.statDateStr=e.year,a=[e.year,1,2,3,4,5,6,7,8,9,10,11,12]),e.month&&(e.timeType="month",e.formInline.statDateStr=e.month,a=e.month.split("-")),0==e.$store.getters.userInfo.dept.type||99==e.$store.getters.userInfo.dept.deptId){var s=Object(i["a"])(Object(i["a"])({},t.data[0]),{},{deptName:"集团",deptId:0});t.data.unshift(s)}var n=[],c=[{month:"一月",id:"01"},{month:"二月",id:"02"},{month:"三月",id:"03"},{month:"四月",id:"04"},{month:"五月",id:"05"},{month:"六月",id:"06"},{month:"七月",id:"07"},{month:"八月",id:"08"},{month:"九月",id:"09"},{month:"十月",id:"10"},{month:"十一月",id:"11"},{month:"十二月",id:"12"}];t.data.forEach((function(s,r){if(s.date=e.formInline.statDateStr,e.year&&!e.month){var o=t.data.slice(r,r+1);c.map((function(e,t){n.push(Object(i["a"])(Object(i["a"])({},o[0]),{},{title:a[0]+"年"+e.id+"月巡查情况月报表"}))}))}else s.title=a[0]+"年"+a[1]+"月巡查情况月报表"})),e.year&&!e.month?e.table.datas=n:e.table.datas=t.data,e.table.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},handleQuery:function(){this.getData()},handleDetail:function(e){var t=null;if(this.year&&!this.month){var a=e.title.slice(0,4),s=e.title.slice(5,7);t=a+"-"+s}else t=e.date;this.$router.push({path:"/roadSecurity/MonthReport/print?companyId=".concat(e.deptId,"&date=").concat(t,"&status=0&companyName=").concat(e.deptName)})},toPages:function(e){var t=null;if(this.year&&!this.month){var a=e.title.slice(0,4),s=e.title.slice(5,7);t=a+"-"+s}else t=e.date;this.$router.push({path:"/roadSecurity/MonthReport/print?companyId=".concat(e.deptId,"&date=").concat(t,"&status=1&companyName=").concat(e.deptName)})},downloadDoc:function(e){var t=Object(i["a"])(Object(i["a"])({},this.formInline),{},{companyId:e.deptId});if(this.year&&!this.month){var a=e.title.slice(0,4),s=e.title.slice(5,7);t.timeType="MONTH",t.statDateStr=a+"-"+s}this.download("/roadProducts/tReportRoadInfo/export",Object(i["a"])({},t),"巡查信息.xlsx")},lookUp:function(e){var t=null;if(this.year&&!this.month){var a=e.title.slice(0,4),s=e.title.slice(5,7);t=a+"-"+s}else t=e.date;this.$router.push({path:"/roadSecurity/MonthReport/monthStatist?companyId=".concat(e.deptId,"&date=").concat(t,"&companyName=").concat(e.deptName)})},yearChange:function(e){this.month=null,this.formInline.timeType="YEAR",this.formInline.statDateStr=e},monthChange:function(e){this.formInline.timeType="MONTH",this.formInline.statDateStr=e}}},m=f,j=(a("0c94"),a("2877")),b=Object(j["a"])(m,s,n,!1,null,"b9cadb3e",null);t["default"]=b.exports},"42fd":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"25548","./bs.js":"25548","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"}}]);