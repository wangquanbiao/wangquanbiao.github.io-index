(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65853ce2"],{"0ddc":function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var i=a("b775");function r(e){return Object(i["a"])({url:"/roadProducts/attchManager/list",method:"post",data:e})}function n(e){return Object(i["a"])({url:"/roadProducts/attchManager/remove/".concat(e),method:"DELETE",data:e})}function l(e){return Object(i["a"])({url:"/roadProducts/attchManager/add",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/roadProducts/attchManager/edit",method:"put",data:e})}},a31b:function(e,t,a){},b2ee:function(e,t,a){"use strict";a("a31b")},ff8d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"params"},[a("el-form",{ref:"ruleForm",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"模板标题",prop:"fileName"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.formInline.fileName,callback:function(t){e.$set(e.formInline,"fileName",t)},expression:"formInline.fileName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("查询")])],1),a("el-form-item",[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["documentManage:add"],expression:"['documentManage:add']"}],attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增")])],1)],1)],1),a("div",[a("vxe-grid",{attrs:{"highlight-hover-row":"",stripe:"",resizable:"","auto-resize":"","max-height":"760",loading:e.table.loading,columns:e.columns,data:e.table.datas,"pager-config":e.table.page},on:{"page-change":e.handlePageChange},scopedSlots:e._u([{key:"option",fn:function(t){var i=t.row;return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["documentManage:del"],expression:"['documentManage:del']"}],attrs:{type:"primary"},on:{click:function(t){return e.handleDel(i.id)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleDownLoad(i)}}},[e._v(" 下载 ")]),["docx","doc","pdf","xlsx"].includes(i.fileUrl&&i.fileUrl.split(".")[1])?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handlePreview(i)}}},[e._v(" 查看 ")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"分类",prop:"model"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeMode},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",{attrs:{label:"文件",prop:"files"}},[a("upload-file",{attrs:{keyId:"files",filesList:e.form.files},on:{returnRes:e._returnRes,returnResDel:e._returnResDel}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"预览文件",visible:e.perviewFile,width:"80vw"},on:{"update:visible":function(t){e.perviewFile=t}}},[a("div",[["docx","doc"].includes(e.fileUrl.split(".")[1])?a("vue-office-docx",{staticStyle:{height:"80vh"},attrs:{src:e.fileUrl}}):e._e(),"xlsx"==e.fileUrl.split(".")[1]?a("vue-office-excel",{staticStyle:{height:"80vh"},attrs:{src:e.fileUrl}}):e._e(),"pdf"==e.fileUrl.split(".")[1]?a("vue-office-pdf",{staticStyle:{height:"80vh"},attrs:{src:e.fileUrl}}):e._e()],1)])],1)},r=[],n=a("5530"),l=a("c7eb"),o=a("1da1"),s=(a("4de4"),a("d81d"),a("14d9"),a("a434"),a("d3b7"),a("0ddc")),c=a("2934"),u=a("4a77"),d=a("2d46"),f=a.n(d),m=(a("d457"),a("b690")),p=a.n(m),h=(a("2c3a"),a("a147")),g=a.n(h),b={components:{uploadFile:u["default"],VueOfficeDocx:f.a,VueOfficeExcel:p.a,VueOfficePdf:g.a},data:function(){return{perviewFile:!1,fileUrl:"",form:{attchType:"",modelName:"",files:[],model:""},rules:{attchType:[{required:!0,message:"请选择",trigger:"change"}],model:[{required:!0,message:"请选择",trigger:"change"}],files:[{type:"array",required:!0,message:"请选择",trigger:"change"}]},dialogVisible:!1,formInline:{modelName:"bzwd",fileName:""},modelList:[{label:"路网巡查",value:"lwxc"},{label:"清障救援",value:"qzjy"}],typeList:[],attchModelNameList:[],table:{loading:!1,page:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},datas:[]},columns:[{title:"模板标题",field:"fileName",align:"center"},{title:"分类",field:"modelName",align:"center"},{title:"创建时间",field:"createTime",align:"center"},{title:"操作",slots:{default:"option"},align:"center"}],modelNameList:["lwxc","qzjy","lcpbc","slsg"]}},watch:{"form.files":{handler:function(e){e.length>0&&this.$refs.form.validateField("files")},deep:!0}},mounted:function(){this.getData(),this.getTypeList()},methods:{handlePreview:function(e){this.fileUrl="/prod-api"+e.fileUrl,this.perviewFile=!0},changeMode:function(e){var t=this;this.typeList.map((function(a){a.dictValue==e&&(t.form.modelName=a.dictLabel)}))},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var a=Object(o["a"])(Object(l["a"])().mark((function a(i){var r;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!i){a.next=10;break}return r={relationId:t.form.files[0].id,fileName:t.form.files[0].fileName,fileUrl:t.form.files[0].fileUrl,attchType:3,model:t.form.model,modelName:t.form.modelName},a.next=4,Object(s["a"])(r);case 4:t.$message.success("上传成功"),t.dialogVisible=!1,t.$refs[e].resetFields(),t.getData(),a.next=11;break;case 10:return a.abrupt("return",!1);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},resetForm:function(e){this.dialogVisible=!1,this.$refs[e].resetFields()},_returnRes:function(e){var t={fileName:e.fileName,fileUrl:e.fileUrl,id:e.id,name:e.fileName,status:"success",uid:e.uid,url:"/prod-api"+e.fileUrl,response:{data:{fileUrl:e.fileUrl,id:e.id,name:e.fileName,status:"success",uid:e.uid,url:"/prod-api"+e.fileUrl}}};this.form.files.push(t)},_returnResDel:function(e){for(var t=this.form.files,a=0;a<t.length;a++)if(t[a].id==e.id){this.form.files.splice(a,1);break}},handleDel:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["d"])(e);case 2:t.$message({type:"success",message:"删除成功!"}),t.getData();case 4:case"end":return a.stop()}}),a)})))).catch((function(){}))},handleDownLoad:function(e){var t=this;this.$confirm("是否下载文件?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.downloadGet("/roadProducts/attach/download/".concat(e.relationId),e.fileName);case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))},getTypeList:function(){var e=this;return Object(o["a"])(Object(l["a"])().mark((function t(){var a;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["k"])({dictType:"attch_model_name"});case 2:a=t.sent,e.typeList=a.rows.filter((function(t){return-1!=e.modelNameList.indexOf(t.dictValue)}));case 4:case"end":return t.stop()}}),t)})))()},handlePageChange:function(e){var t=e.currentPage,a=e.pageSize;this.table.page.currentPage=t,this.table.page.pageSize=a,this.getData()},getData:function(){var e=this;return Object(o["a"])(Object(l["a"])().mark((function t(){var a,i;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.table.loading=!0,a=Object(n["a"])(Object(n["a"])({},e.formInline),{},{pageSize:100,attchType:3}),t.next=4,Object(s["c"])(a);case 4:i=t.sent,e.table.datas=i.rows,e.table.page.total=e.table.datas.length,e.table.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},v=b,w=(a("b2ee"),a("2877")),x=Object(w["a"])(v,i,r,!1,null,"528ba9aa",null);t["default"]=x.exports}}]);