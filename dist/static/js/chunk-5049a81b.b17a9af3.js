(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5049a81b"],{1075:function(e,t,r){},"599a":function(e,t,r){"use strict";r("1075")},"9ef9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-dialog",{attrs:{title:"非主线路段",visible:e.isShow,isShow:e.show,"append-to-body":"","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.isShow=t},close:function(t){e.$emit("update:show",!1)}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px",disabled:!e.isBtn}},[r("div",{staticClass:"card"},[r("div",{staticClass:"title"},[e._v(" 基本信息 ")]),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"路线名称：",prop:"roadId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.setInitPage},model:{value:e.ruleForm.roadId,callback:function(t){e.$set(e.ruleForm,"roadId",t)},expression:"ruleForm.roadId"}},e._l(e.roadList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.roadDesc,value:e.id}})})),1)],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"路线编码："}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.roadCode,callback:function(t){e.$set(e.ruleForm,"roadCode",t)},expression:"ruleForm.roadCode"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"单位名称：",prop:"companyId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.setZDID},model:{value:e.ruleForm.companyId,callback:function(t){e.$set(e.ruleForm,"companyId",t)},expression:"ruleForm.companyId"}},e._l(e.depList,(function(e){return r("el-option",{key:e.deptId,attrs:{label:e.deptName,value:e.deptId}})})),1)],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"路产保护中队：",prop:"orgId"}},[r("el-cascader",{key:e.cascaderKey,ref:"myCascader",attrs:{"popper-class":"cascader",options:e.DWList,props:{value:"id",checkStrictly:!0,emitPath:!1},"expand-trigger":"hover"},on:{change:e.handleChange},model:{value:e.ruleForm.orgId,callback:function(t){e.$set(e.ruleForm,"orgId",t)},expression:"ruleForm.orgId"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"路段分类：",prop:"roadSectionClassId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.roadSectionClassId,callback:function(t){e.$set(e.ruleForm,"roadSectionClassId",t)},expression:"ruleForm.roadSectionClassId"}},e._l(e.typeList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"互通桩号：",prop:"startLineKmLevel"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9]/g,'')"},model:{value:e.ruleForm.startLineKmLevel,callback:function(t){e.$set(e.ruleForm,"startLineKmLevel",t)},expression:"ruleForm.startLineKmLevel"}},[r("template",{slot:"prepend"},[e._v("k")])],2)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"",prop:"endLineMLevel"}},[r("el-input",{attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9]/g,'')"},model:{value:e.ruleForm.endLineMLevel,callback:function(t){e.$set(e.ruleForm,"endLineMLevel",t)},expression:"ruleForm.endLineMLevel"}},[r("template",{slot:"prepend"},[e._v("+")])],2)],1)],1)],1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"互通名称：",prop:"interFlowDesc"}},[r("el-input",{model:{value:e.ruleForm.interFlowDesc,callback:function(t){e.$set(e.ruleForm,"interFlowDesc",t)},expression:"ruleForm.interFlowDesc"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"互通类型：",prop:"interFlowTypeId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.interFlowTypeId,callback:function(t){e.$set(e.ruleForm,"interFlowTypeId",t)},expression:"ruleForm.interFlowTypeId"}},e._l(e.interFlowTypeList,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"互通形式：",prop:"interFlowFormId"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.interFlowFormId,callback:function(t){e.$set(e.ruleForm,"interFlowFormId",t)},expression:"ruleForm.interFlowFormId"}},e._l(e.interFlowXSList,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"匝道数量：",prop:"rampCount"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.rampCount,callback:function(t){e.$set(e.ruleForm,"rampCount",t)},expression:"ruleForm.rampCount"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:"匝道总长：",prop:"rampDistance"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.rampDistance,callback:function(t){e.$set(e.ruleForm,"rampDistance",t)},expression:"ruleForm.rampDistance"}},[r("template",{slot:"append"},[e._v("m")])],2)],1)],1)],1)],1),r("div",{staticClass:"card"},[r("div",{staticClass:"title"},[e._v(" 匝道信息 ")]),r("el-row",{staticStyle:{padding:"15px"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.ruleForm.rampList,border:""}},[r("el-table-column",{attrs:{fixed:"",prop:"date",label:"匝道编号",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.rampCode,callback:function(r){e.$set(t.row,"rampCode",r)},expression:"scope.row.rampCode"}})]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"date",label:"匝道名称(方向)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.rampDesc,callback:function(r){e.$set(t.row,"rampDesc",r)},expression:"scope.row.rampDesc"}})]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"date",label:"起点桩号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-input",{staticClass:"x_w_l",attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9]/g,'')"},model:{value:t.row.startLineKmLevel,callback:function(r){e.$set(t.row,"startLineKmLevel",r)},expression:"scope.row.startLineKmLevel"}},[r("template",{slot:"prepend"},[e._v(e._s(t.row.rampCode)+"k")])],2)],1),r("el-col",{attrs:{span:12}},[r("el-input",{staticClass:"x_w_l",attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9\\.]/g,'')"},model:{value:t.row.startLineMLevel,callback:function(r){e.$set(t.row,"startLineMLevel",r)},expression:"scope.row.startLineMLevel"}},[r("template",{slot:"prepend"},[e._v("+")])],2)],1)],1)]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"date",label:"终点桩号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-input",{staticClass:"x_w_l",attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9]/g,'')"},model:{value:t.row.endLineKmLevel,callback:function(r){e.$set(t.row,"endLineKmLevel",r)},expression:"scope.row.endLineKmLevel"}},[r("template",{slot:"prepend"},[e._v(e._s(t.row.rampCode)+"k")])],2)],1),r("el-col",{attrs:{span:12}},[r("el-input",{staticClass:"x_w_l",attrs:{placeholder:"请输入",oninput:"value=value.replace(/[^0-9\\.]/g,'')"},model:{value:t.row.endLineMLevel,callback:function(r){e.$set(t.row,"endLineMLevel",r)},expression:"scope.row.endLineMLevel"}},[r("template",{slot:"prepend"},[e._v("+")])],2)],1)],1)]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"date",label:"路面长度(m)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{oninput:"value=value.replace(/[^0-9]\\./g,'')"},on:{blur:function(t){return e.setNums()}},model:{value:t.row.highWayLength,callback:function(r){e.$set(t.row,"highWayLength",r)},expression:"scope.row.highWayLength"}})]}}])}),r("el-table-column",{attrs:{fixed:"",prop:"date",label:"路面宽度(m)",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{oninput:"value=value.replace(/[^0-9]\\./g,'')"},model:{value:t.row.highWayWidth,callback:function(r){e.$set(t.row,"highWayWidth",r)},expression:"scope.row.highWayWidth"}})]}}])}),e.isBtn?r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleAdd(t.row)}}},[e._v("添加")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleDel(t.row)}}},[e._v("删除")])]}}],null,!1,1358965031)}):e._e()],1)],1),r("el-row",{staticStyle:{padding:"15px"}},[r("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)],1),e.isBtn?r("div",{staticClass:"btn-group",staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1):e._e()])],1)],1)},l=[],o=r("c7eb"),s=r("1da1"),n=r("ade3"),i=(r("4de4"),r("d81d"),r("14d9"),r("a434"),r("a9e3"),r("d3b7"),r("2934")),c=r("a700"),d={props:{show:{type:Boolean,default:!1},search:{type:Object,default:function(){return{}}}},watch:{show:function(){this.isShow=this.show},search:{handler:function(e,t){this.ruleForm.relationId=e.relationId,this.ruleForm.rampList[0].relationId=e.relationId},immediate:!0}},components:{},data:function(){return{isShowInformation:!0,cascaderKey:0,isBtn:!0,isShowLoading:!1,isShow:this.show,reqUrl:"add",stateList:[],depList:[],DWList:[],roadList:[],interFlowTypeList:[],interFlowXSList:[],activeNames:["1"],typeList:[{label:"互通",value:"111"},{label:"连接线",value:"112"}],ruleForm:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({relationId:"",roadSectionClassId:"111",interFlowDesc:"",rampCount:"1",interFlowTypeId:"",interFlowTypeName:"",interFlowFormId:"",interFlowFormName:"",orgId:"",orgDesc:"",companyId:"",companyDesc:"",roadId:"",roadCode:"",roadDesc:"",rampDistance:"",technicalLevel:"",startLineKmLevel:"",endLineMLevel:"",endLineKmLevel:"",startLineMLevel:""},"startLineKmLevel",""),"endDirection",""),"startDirection",""),"startLocationDesc",""),"mainRoadDistance",""),"remark",""),"rampList",[{relationId:"",rampCode:"",rampDesc:"",startLineKmLevel:"",startLineMLevel:"",endLineMLevel:"",endLineKmLevel:"",highWayLength:"",highWayWidth:"",orgId:"",orgDesc:"",companyId:"",companyDesc:""}]),rules:Object(n["a"])(Object(n["a"])({roadId:[{required:!0,message:"请选择",trigger:"change"}],companyId:[{required:!0,message:"请选择",trigger:"change"}],orgId:[{required:!0,message:"请选择",trigger:"change"}],technicalLevel:[{required:!0,message:"请选择",trigger:"change"}],interFlowDesc:[{required:!0,message:"请填写",trigger:"blur"}],startLocationDesc:[{required:!0,message:"请填写",trigger:"blur"}],endDirection:[{required:!0,message:"请填写",trigger:"blur"}],startDirection:[{required:!0,message:"请填写",trigger:"blur"}],endLineKmLevel:[{required:!0,message:"请填写",trigger:"blur"}],startLineKmLevel:[{required:!0,message:"请填写",trigger:"blur"}],endLineMLevel:[{required:!0,message:"请填写",trigger:"blur"}],roadCode:[{required:!0,message:"请选择",trigger:"change"}],roadDesc:[{required:!0,message:"请选择",trigger:"change"}],endLocationDesc:[{required:!0,message:"请填写",trigger:"blur"}]},"startDirection",[{required:!0,message:"请填写",trigger:"blur"}]),"mainRoadDistance",[{required:!0,message:"请填写",trigger:"blur"}])}},created:function(){this.INITDATA(),this.getData(),this.getstateList()},methods:{handleChange:function(e){var t;this.$refs.myCascader&&(this.ruleForm.orgDesc=null===(t=this.$refs.myCascader.getCheckedNodes()[0])||void 0===t?void 0:t.data.label,this.$refs.myCascader.dropDownVisible=!1)},handleAdd:function(e){var t={relationId:this.ruleForm.relationId,rampCode:"",rampDesc:"",startLineKmLevel:"",startLineMLevel:"",endLineMLevel:"",endLineKmLevel:"",highWayLength:"",highWayWidth:"",orgId:"",orgDesc:"",companyId:"",companyDesc:""};this.ruleForm.rampList.push(t),this.ruleForm.rampCount=this.ruleForm.rampList.length},handleDel:function(e){if(1!=this.ruleForm.rampList.length){var t=this.ruleForm.rampList.indexOf(e);-1!==t&&this.ruleForm.rampList.splice(t,1),this.ruleForm.rampCount=this.ruleForm.rampList.length,this.setNums()}},getstateList:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])({dictType:"un_main_line_htlx"});case 2:return r=t.sent,e.interFlowTypeList=r.rows,t.next=6,Object(i["k"])({dictType:"un_main_line_htxs"});case 6:a=t.sent,e.interFlowXSList=a.rows;case 8:case"end":return t.stop()}}),t)})))()},setInitPage:function(e){for(var t=0;t<this.roadList.length;t++)if(this.roadList[t].id==e){this.ruleForm.roadCode=this.roadList[t].roadCode,this.ruleForm.technicalLevel=this.roadList[t].technicalLevel;break}},getData:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,a,l,s,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.getters.userInfo,"","",r.admin||(r.gly?r.companyId:r.orgId),{},a={pageNum:1,pageSize:99},t.next=7,Object(c["J"])(a);case 7:return l=t.sent,e.roadList=l.rows,t.next=11,Object(i["j"])();case 11:return s=t.sent,e.depList=s.data,t.next=15,Object(i["g"])({ancestors:e.ruleForm.companyId,isFilter:!0});case 15:if(n=t.sent,e.DWList=n.data,r.roles.map((function(t){("jtld"==t.roleKey||t.admin)&&(e.isShowInformation=!1)})),e.isShowInformation){t.next=20;break}return t.abrupt("return");case 20:e.ruleForm.companyDesc=r.companyName,e.ruleForm.companyId=r.companyId,e.ruleForm.orgId=r.dept.deptId,e.ruleForm.orgDesc=r.dept.deptName;case 24:case"end":return t.stop()}}),t)})))()},setNums:function(){for(var e=this.ruleForm.rampList,t=0,r=0;r<e.length;r++)t+=Number(e[r].highWayLength);this.ruleForm.rampDistance=t},submitForm:function(e){for(var t=this,r="add"==this.reqUrl?"post":"put",a=0;a<this.roadList.length;a++)if(this.ruleForm.roadCode==this.roadList[a].roadCode){this.ruleForm.roadDesc=this.roadList[a].roadDesc;break}this.ruleForm.rampList.map((function(e){if(e.startLineKmLevel||e.startLineMLevel){var r=!1;if(e.startLineKmLevel&&e.startLineMLevel&&(r=!0),!r)return void t.$message({message:"请填写完整的起点桩号",type:"warning"})}if(e.endLineKmLevel||e.endLineMLevel){var a=!1;if(e.endLineKmLevel&&e.endLineMLevel&&(a=!0),!a)return void t.$message({message:"请填写完整的终点桩号",type:"warning"})}})),this.$refs[e].validate((function(e){if(!e)return!1;t.isShowLoading||(t.isShowLoading=!0,Object(c["P"])(t.ruleForm,t.reqUrl,r).then((function(e){200==e.code&&(t.$message({message:"成功!",type:"success"}),t.$emit("notice"),t.isShowLoading=!1,t.resetForm("ruleForm"),t.isShow=!1)})).catch((function(e){t.isShowLoading=!1})))}))},resetForm:function(e){var t={relationId:this.ruleForm.relationId,rampCode:"",rampDesc:"",startLineKmLevel:"",startLineMLevel:"",endLineMLevel:"",endLineKmLevel:"",highWayLength:"",highWayWidth:"",orgId:"",orgDesc:"",companyId:"",companyDesc:""};this.ruleForm.rampList=[],this.ruleForm.rampList.push(t),this.ruleForm.technicalLevel=void 0,this.ruleForm.startLineMLevel=void 0,this.ruleForm.endLineMLevel=void 0,this.ruleForm.endDirection=void 0,this.$refs[e].resetFields()},setIsShowBtn:function(e){this.isBtn=e},setUrl:function(e){this.reqUrl=e},getInfo:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function r(){var a,l,s;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.isShow=!0,r.next=3,Object(c["Q"])(e);case 3:return a=r.sent,0==a.data.rampList.length&&a.data.rampList.push({relationId:a.data.relationId,rampCode:"",rampDesc:"",startLineKmLevel:"",startLineMLevel:"",endLineMLevel:"",endLineKmLevel:"",highWayLength:"",highWayWidth:"",orgId:"",orgDesc:"",companyId:"",companyDesc:""}),t.ruleForm=a.data,l={pageNum:1,pageSize:99},r.next=9,Object(c["J"])(l);case 9:s=r.sent,t.roadList=s.rows,t.roadList.map((function(e){e.roadDesc==t.ruleForm.roadDesc&&(t.ruleForm.roadCode=e.roadCode)}));case 12:case"end":return r.stop()}}),r)})))()},setZDID:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function r(){var a,l,s;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.DWList=[],t.ruleForm.orgId=void 0,t.ruleForm.orgDesc=void 0,t.ruleForm.companyDesc=t.depList.filter((function(t){return t.deptId==e}))[0].deptName,t.cascaderKey=0,r.next=7,Object(i["g"])({ancestors:e,isFilter:!0});case 7:return a=r.sent,t.DWList=a.data,l={pageNum:1,pageSize:99,companyId:e},r.next=12,Object(c["J"])(l);case 12:s=r.sent,t.roadList=s.rows;case 14:case"end":return r.stop()}}),r)})))()},INITDATA:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])({dictType:"road_main_line_level"});case 2:r=t.sent,e.stateList=r.rows;case 4:case"end":return t.stop()}}),t)})))()}}},u=d,m=(r("599a"),r("2877")),p=Object(m["a"])(u,a,l,!1,null,"14715418",null);t["default"]=p.exports}}]);