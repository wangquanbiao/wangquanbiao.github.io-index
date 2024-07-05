(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e53addc"],{"10ae":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"com_details"},[r("div",{staticClass:"title"},[e._v("基础数据填报")]),r("el-divider"),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.projectName,callback:function(t){e.$set(e.ruleForm,"projectName",t)},expression:"ruleForm.projectName"}})],1),r("el-form-item",{attrs:{label:"建设单位",prop:"buildOrgName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.buildOrgName,callback:function(t){e.$set(e.ruleForm,"buildOrgName",t)},expression:"ruleForm.buildOrgName"}})],1),r("el-form-item",{attrs:{label:"施工日期",prop:"constructTime"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.constructTime,callback:function(t){e.$set(e.ruleForm,"constructTime",t)},expression:"ruleForm.constructTime"}})],1),r("el-form-item",{attrs:{label:"施工地点",prop:"place"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.place,callback:function(t){e.$set(e.ruleForm,"place",t)},expression:"ruleForm.place"}})],1),r("el-form-item",{attrs:{label:"所属公司：",prop:"companyId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.companyId,callback:function(t){e.$set(e.ruleForm,"companyId",t)},expression:"ruleForm.companyId"}},e._l(e.depList,(function(e){return r("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1),r("el-form-item",{attrs:{label:"施工单位",prop:"constructOrgName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.constructOrgName,callback:function(t){e.$set(e.ruleForm,"constructOrgName",t)},expression:"ruleForm.constructOrgName"}})],1),r("el-form-item",{attrs:{label:"项目类型",prop:"type"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.roadList,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),r("el-divider"),r("div",{staticClass:"btn"},[r("el-button",{on:{click:function(t){return e.goBack("ruleForm")}}},[e._v("返回")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("保存")])],1)],1)],1)])},a=[],c=r("5530"),n=r("c7eb"),o=r("1da1"),u=(r("a9e3"),r("b64b"),r("c1df")),d=r.n(u),l=r("ba77"),i=r("2934"),b={data:function(){return{depList:[],roadList:[],edit:!1,ruleForm:{},rules:{constructTime:[{required:!0,message:"请选择",trigger:"change"}],companyId:[{required:!0,message:"请选择",trigger:"change"}],projectName:[{required:!0,message:"请填写",trigger:"blur"}],buildOrgName:[{required:!0,message:"请填写",trigger:"blur"}],place:[{required:!0,message:"请填写",trigger:"blur"}],constructOrgName:[{required:!0,message:"请填写",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"change"}]}}},mounted:function(){this.$route.query.businessId&&(this.ruleForm=JSON.parse(localStorage.getItem("project")),this.ruleForm.companyId=Number(this.ruleForm.companyId),this.ruleForm.type=String(this.ruleForm.type)),this.getDptData(),this.getCdList(),this.edit=!!this.$route.query.type},methods:{getDptData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["h"])({parentId:100,status:0});case 2:r=t.sent,e.depList=r.data;case 4:case"end":return t.stop()}}),t)})))()},getCdList:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])({dictType:"road_construct_type"});case 2:r=t.sent,e.roadList=r.rows;case 4:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o["a"])(Object(n["a"])().mark((function e(r){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return t.ruleForm.constructTime=d()(t.ruleForm.constructTime).format("YYYY-MM-DD"),e.next=4,Object(l["k"])(Object(c["a"])({},t.ruleForm));case 4:s=e.sent,s.data&&(t.$message.success("数据填报成功"),t.$router.go(-1)),e.next=9;break;case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goBack:function(e){this.$refs[e].resetFields(),this.$router.go(-1)}}},m=b,j=(r("3526"),r("2877")),f=Object(j["a"])(m,s,a,!1,null,"4e4be238",null);t["default"]=f.exports},3526:function(e,t,r){"use strict";r("b860")},4678:function(e,t,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"25548","./bs.js":"25548","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return r(t)}function c(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=c,e.exports=a,a.id="4678"},b860:function(e,t,r){},ba77:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"h",(function(){return u})),r.d(t,"k",(function(){return d})),r.d(t,"f",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"g",(function(){return b})),r.d(t,"q",(function(){return m})),r.d(t,"j",(function(){return j})),r.d(t,"p",(function(){return f})),r.d(t,"n",(function(){return p})),r.d(t,"o",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"l",(function(){return k})),r.d(t,"i",(function(){return v}));var s=r("b775");function a(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/stat",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/statistics/sl/statTotalList",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/statistics/sl/statCompanyByType",method:"post",data:e})}function o(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/list",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/remove",method:"DELETE",data:e})}function d(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/save",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/listHandle",method:"post",data:e})}function i(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/".concat(e),method:"get"})}function b(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/materialSubmit",method:"post",data:e})}function m(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/updateStatus",method:"post",data:e})}function j(e){return Object(s["a"])({url:"roadProducts/roadConstruct/reviewSubmit",method:"post",data:e})}function f(e){return Object(s["a"])({url:"/statistics/sl/total",method:"post",data:e})}function p(e){return Object(s["a"])({url:"/statistics/sl/companyStat",method:"post",data:e})}function h(e){return Object(s["a"])({url:"/statistics/sl/companyRank",method:"post",data:e})}function g(e){return Object(s["a"])({url:"/statistics/sl/statTypeRatio",method:"post",data:e})}function k(e){return Object(s["a"])({url:"/statistics/sl/statTypeCount",method:"post",data:e})}function v(e){return Object(s["a"])({url:"/roadProducts/roadConstruct/withdraw/".concat(e),method:"patch"})}}}]);