(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{A6Zd:function(t,e,i){"use strict";i.r(e),i.d(e,"ProjectsModule",(function(){return D}));var a=i("ofXK"),s=i("tyNb"),n=i("PdH4"),r=i.n(n),o=i("3Pt+"),c=i("fXoL"),b=i("0rIZ"),d=i("nm5K"),u=i("mAmA"),l=i("5aeq"),m=i("Pd9Q"),p=i("4M/A");function g(t,e){1&t&&c.Nb(0,"i",45)}function h(t,e){1&t&&c.Nb(0,"i",46)}function f(t,e){1&t&&(c.Rb(0,"div",47),c.Hc(1," pdf file "),c.Qb())}function S(t,e){1&t&&(c.Rb(0,"div",47),c.Hc(1," pdf file "),c.Qb())}function v(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",48),c.Rb(1,"span",49),c.dc("click",(function(){c.yc(t);const i=e.$implicit,a=e.index;return c.hc().delteImg(i.id,a)})),c.Nb(2,"i",50),c.Qb(),c.Nb(3,"img",51),c.Qb()}if(2&t){const t=e.$implicit;c.zb(3),c.oc("src",t.image,c.Ac)}}let y=(()=>{class t{constructor(t,e,i){this.formBuilder=t,this.apiService=e,this.toaster=i,this.deleteSubStage=new c.n,this.projectImgs=[],this.submittedProjectImgs=[],this.subStageFormSubmitted=!1,this.showLoader=!1,this.pageType="add",this.imgCounter=1}ngOnInit(){this.createForm(),this.data?(this.pageType="edit",this.id=this.data.id,this.data.images&&(this.projectImgs=this.data.images,this.imgCounter=this.projectImgs.length+1),this.subStageForm.patchValue({name:this.data.name,steps_explain:this.data.steps_explain,status:this.data.status.key,stop_reason:this.data.stop_reason,completion_rate:this.data.completion_rate,company_report:this.data.company_report,consultant_report:this.data.consultant_report,camera_link:this.data.camera_link})):this.id=null}createForm(){this.subStageForm=this.formBuilder.group({name:[null,[o.q.required]],steps_explain:[null,[o.q.required]],status:[null,[o.q.required]],stop_reason:[""],completion_rate:[null,[o.q.required]],company_report:[null],consultant_report:[null],camera_link:[null]})}onuploadImage(t){const e=t.target.files[0];this.submittedProjectImgs.push({img:"image_"+this.imgCounter,file:e,fileName:e.name}),this.imgCounter++;const i=new FileReader;i.onload=t=>{this.projectImgs.push({image:t.target.result})},i.readAsDataURL(t.target.files[0])}delteImg(t,e){t?this.apiService.deleteReq(`sub-stage-images/${t}/`).subscribe(t=>{t.status?(this.toaster.showSuccess("\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0647"),this.projectImgs.splice(e,1),this.submittedProjectImgs.splice(e,1)):this.toaster.showError(t.errors.length?t.errors[0].split(":")[1]:t.message)},t=>{this.toaster.showError()}):(this.projectImgs.splice(e,1),this.submittedProjectImgs.splice(e,1))}addSubStage(t){if(t.main_stage=this.mainStageId,this.subStageFormSubmitted=!0,this.subStageForm.valid){const e=new FormData;this.showLoader=!0,e.append("main_stage",t.main_stage),e.append("name",t.name),e.append("steps_explain",t.steps_explain),e.append("status",t.status),e.append("stop_reason",t.stop_reason),e.append("completion_rate",t.completion_rate),this.subStageForm.get("company_report").value&&this.subStageForm.get("company_report").value.name&&e.append("company_report",this.subStageForm.get("company_report").value,this.subStageForm.get("company_report").value.name),this.subStageForm.get("consultant_report").value&&this.subStageForm.get("consultant_report").value.name&&e.append("consultant_report",this.subStageForm.get("consultant_report").value,this.subStageForm.get("consultant_report").value.name),this.submittedProjectImgs.length&&this.submittedProjectImgs.forEach(t=>{e.append(t.img,t.file,t.fileName)}),e.append("camera_link",t.camera_link),"add"===this.pageType?this.apiService.postReq("sub-stages/",e).subscribe(t=>{t.status?this.toaster.showSuccess("\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(t.errors.length?t.errors[0].split(":")[1]:t.message),this.showLoader=!1},t=>{this.showLoader=!1,this.toaster.showError()}):"edit"===this.pageType&&this.apiService.patchReq(`sub-stages/${this.data.id}/`,e).subscribe(t=>{t.status?this.toaster.showSuccess("\u062a\u0645\u062a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0631\u062d\u0644\u0647 \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(t.errors.length?t.errors[0].split(":")[1]:t.message),this.showLoader=!1},t=>{this.showLoader=!1,this.toaster.showError()})}}uploadReport(t,e){const i=t.target.files[0];switch(e){case"company_report":this.subStageForm.get("company_report").setValue(i);break;case"consultant_report":this.subStageForm.get("consultant_report").setValue(i)}}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(o.c),c.Mb(d.a),c.Mb(u.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["sub-stage"]],inputs:{type:"type",index:"index",mainStageId:"mainStageId",data:"data"},outputs:{deleteSubStage:"deleteSubStage"},decls:93,vars:31,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"d-flex","justify-content-end","btns"],["type","submit",1,"save",3,"disabled"],["class","fas fa-check",4,"ngIf"],["class","fas fa-spinner",4,"ngIf"],["type","button",1,"delete",3,"click"],[1,"fas","fa-trash-alt"],[1,"row"],[1,"col-12"],[1,"control-label"],[1,"annotation-required"],[1,"form-group"],["maxlength","200","type","text","formControlName","name",1,"form-control"],["rows","4","formControlName","steps_explain",1,"form-control"],[1,"row","no-gutters","justify-content-between"],[1,"col-md-2","col-sm-4"],[1,"radio"],[1,"radio__input"],["type","radio","formControlName","status","value","1"],[1,"radio__control"],[1,"radio__label"],[1,"col-md-3","col-sm-4"],["type","radio","formControlName","status","value","2"],["type","radio","formControlName","status","value","3"],[1,"col-md-4"],["type","text","placeholder","\u0633\u0628\u0628 \u0627\u0644\u062a\u0648\u0642\u0641","formControlName","stop_reason",1,"form-control","p-1","mt-1"],[1,"col-lg-5"],[1,"row","no-gutters","justify-content-between","mt-1"],[1,"col-8"],["maxlength","3","type","text","numbersOnly","","formControlName","completion_rate",1,"form-control","mt-1"],[1,"col-4","mt-2"],[3,"containerHeight","scale","strokeWidth","radius","outerStrokeColor","percent"],[1,"col-lg-7"],["type","text","formControlName","camera_link",1,"form-control"],[1,"col-lg-6"],[1,"file"],["type","file","accept","application/pdf",1,"form-control",3,"change"],["class","report-name",4,"ngIf"],[1,"fas","fa-paperclip"],[1,"imgs"],[1,"d-flex"],[1,"img-upload","my-1"],[1,"fas","fa-plus-circle"],["type","file",3,"change"],["class","m-1 img-holder",4,"ngFor","ngForOf"],[1,"fas","fa-check"],[1,"fas","fa-spinner"],[1,"report-name"],[1,"m-1","img-holder"],[3,"click"],[1,"fas","fa-times"],["width","100","height","100",1,"",3,"src"]],template:function(t,e){1&t&&(c.Rb(0,"form",0),c.dc("ngSubmit",(function(){return e.addSubStage(e.subStageForm.value)})),c.Rb(1,"div",1),c.Rb(2,"button",2),c.Fc(3,g,1,0,"i",3),c.Fc(4,h,1,0,"i",4),c.Qb(),c.Rb(5,"button",5),c.dc("click",(function(){return e.deleteSubStage.emit({index:e.index,type:e.type,id:e.id})})),c.Nb(6,"i",6),c.Qb(),c.Qb(),c.Rb(7,"div",7),c.Rb(8,"div",8),c.Rb(9,"label",9),c.Hc(10," \u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 "),c.Rb(11,"span",10),c.Hc(12,"*"),c.Qb(),c.Qb(),c.Rb(13,"div",11),c.Nb(14,"input",12),c.Qb(),c.Qb(),c.Rb(15,"div",8),c.Rb(16,"label",9),c.Hc(17," \u0634\u0631\u062d \u0627\u0644\u062e\u0637\u0648\u0627\u062a "),c.Rb(18,"span",10),c.Hc(19,"*"),c.Qb(),c.Qb(),c.Rb(20,"div",11),c.Nb(21,"textarea",13),c.Qb(),c.Qb(),c.Qb(),c.Rb(22,"label",9),c.Hc(23," \u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 "),c.Rb(24,"span",10),c.Hc(25,"*"),c.Qb(),c.Qb(),c.Rb(26,"div",14),c.Rb(27,"div",15),c.Rb(28,"label",16),c.Rb(29,"span",17),c.Nb(30,"input",18),c.Nb(31,"span",19),c.Qb(),c.Rb(32,"span",20),c.Hc(33,"\u0645\u0643\u062a\u0645\u0644"),c.Qb(),c.Qb(),c.Qb(),c.Rb(34,"div",21),c.Rb(35,"label",16),c.Rb(36,"span",17),c.Nb(37,"input",22),c.Nb(38,"span",19),c.Qb(),c.Rb(39,"span",20),c.Hc(40,"\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630"),c.Qb(),c.Qb(),c.Qb(),c.Rb(41,"div",15),c.Rb(42,"label",16),c.Rb(43,"span",17),c.Nb(44,"input",23),c.Nb(45,"span",19),c.Qb(),c.Rb(46,"span",20),c.Hc(47,"\u0645\u062a\u0648\u0642\u0641"),c.Qb(),c.Qb(),c.Qb(),c.Rb(48,"div",24),c.Rb(49,"div",11),c.Nb(50,"input",25),c.Qb(),c.Qb(),c.Qb(),c.Rb(51,"div",7),c.Rb(52,"div",26),c.Rb(53,"label",9),c.Hc(54," \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u062c\u0627\u0632 "),c.Rb(55,"span",10),c.Hc(56,"*"),c.Qb(),c.Qb(),c.Rb(57,"div",27),c.Rb(58,"div",28),c.Rb(59,"div",11),c.Nb(60,"input",29),c.Qb(),c.Qb(),c.Rb(61,"div",30),c.Nb(62,"circle-progressbar",31),c.Qb(),c.Qb(),c.Qb(),c.Rb(63,"div",32),c.Rb(64,"label",9),c.Hc(65," \u0631\u0627\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627 "),c.Qb(),c.Rb(66,"div",11),c.Nb(67,"input",33),c.Qb(),c.Qb(),c.Qb(),c.Rb(68,"div",7),c.Rb(69,"div",34),c.Rb(70,"label",9),c.Hc(71," \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0634\u0631\u0643\u0629 \u0639\u0646 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 "),c.Qb(),c.Rb(72,"div",11),c.Rb(73,"div",35),c.Rb(74,"input",36),c.dc("change",(function(t){return e.uploadReport(t,"company_report")})),c.Qb(),c.Fc(75,f,2,0,"div",37),c.Qb(),c.Nb(76,"i",38),c.Qb(),c.Qb(),c.Rb(77,"div",34),c.Rb(78,"label",9),c.Hc(79," \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a \u0639\u0646 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 "),c.Qb(),c.Rb(80,"div",11),c.Rb(81,"div",35),c.Rb(82,"input",36),c.dc("change",(function(t){return e.uploadReport(t,"consultant_report")})),c.Qb(),c.Fc(83,S,2,0,"div",37),c.Qb(),c.Nb(84,"i",38),c.Qb(),c.Qb(),c.Qb(),c.Rb(85,"div",39),c.Rb(86,"label",9),c.Hc(87," \u0635\u0648\u0631 \u0645\u0646 \u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u062a\u0646\u0641\u064a\u0630 "),c.Qb(),c.Rb(88,"div",40),c.Rb(89,"a",41),c.Nb(90,"i",42),c.Rb(91,"input",43),c.dc("change",(function(t){return e.onuploadImage(t)})),c.Qb(),c.Qb(),c.Fc(92,v,4,1,"div",44),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.oc("formGroup",e.subStageForm),c.zb(2),c.oc("disabled",e.showLoader),c.zb(1),c.oc("ngIf",!e.showLoader),c.zb(1),c.oc("ngIf",e.showLoader),c.zb(10),c.Eb("err",e.subStageFormSubmitted&&e.subStageForm.get("name").invalid),c.zb(7),c.Eb("err",e.subStageFormSubmitted&&e.subStageForm.get("steps_explain").invalid),c.zb(9),c.Eb("checked",1==(null==e.data||null==e.data.status?null:e.data.status.key)&&1==e.subStageForm.get("status").value)("err",e.subStageFormSubmitted&&e.subStageForm.get("status").invalid),c.zb(7),c.Eb("checked",2==(null==e.data||null==e.data.status?null:e.data.status.key)&&2==e.subStageForm.get("status").value)("err",e.subStageFormSubmitted&&e.subStageForm.get("status").invalid),c.zb(7),c.Eb("checked",3==(null==e.data||null==e.data.status?null:e.data.status.key)&&3==e.subStageForm.get("status").value)("err",e.subStageFormSubmitted&&e.subStageForm.get("status").invalid),c.zb(16),c.Eb("err",e.subStageFormSubmitted&&e.subStageForm.get("completion_rate").invalid),c.zb(2),c.oc("containerHeight",30)("scale",!0)("strokeWidth",50)("radius",100)("outerStrokeColor","#F7A719")("percent",e.subStageForm.get("completion_rate").value?e.subStageForm.get("completion_rate").value:0),c.zb(13),c.oc("ngIf",e.subStageForm.get("company_report").value),c.zb(8),c.oc("ngIf",e.subStageForm.get("consultant_report").value),c.zb(9),c.oc("ngForOf",e.projectImgs))},directives:[o.s,o.k,o.e,a.l,o.b,o.g,o.j,o.d,o.n,m.a,p.a,a.k],styles:[".btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;display:inline-block;margin-right:3px;border:none;cursor:pointer;color:#186076}.btns[_ngcontent-%COMP%]   button.delete[_ngcontent-%COMP%]{color:#bc4747}.imgs[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{flex-wrap:wrap}.imgs[_ngcontent-%COMP%]   .img-holder[_ngcontent-%COMP%]{position:relative;width:100px;height:100px}.imgs[_ngcontent-%COMP%]   .img-holder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;left:0;top:0;background-color:#186076;width:20px;height:20px;line-height:20px;text-align:center;color:#fff}.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{top:10px}"]}),t})();var R=i("PTt/"),_=i("xJkR");function Q(t,e){if(1&t&&(c.Rb(0,"option",28),c.Hc(1),c.Qb()),2&t){const t=e.$implicit;c.oc("value",t.id),c.zb(1),c.Jc(" ",t.username," ")}}function F(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"sub-stage",46),c.dc("deleteSubStage",(function(e){return c.yc(t),c.hc(3).deleteSubStage(e)})),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit,i=e.index,a=c.hc(3);c.zb(1),c.oc("data",t.id?t:null)("type","foundation")("index",i)("mainStageId",a.foundationId)}}function j(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"general-summary",47),c.dc("deleteGeneralSummary",(function(e){return c.yc(t),c.hc(3).deleteGeneralSummary(e)})),c.Qb(),c.Qb()}if(2&t){const t=c.hc(3);c.zb(1),c.oc("data",t.foundationGeneralSummaryData)("mainStageId",t.foundationId)("type","foundation")("id",t.foundationId)}}function w(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"sub-stage",46),c.dc("deleteSubStage",(function(e){return c.yc(t),c.hc(3).deleteSubStage(e)})),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit,i=e.index,a=c.hc(3);c.zb(1),c.oc("data",t.id?t:null)("type","building")("index",i)("mainStageId",a.buildingId)}}function x(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"general-summary",47),c.dc("deleteGeneralSummary",(function(e){return c.yc(t),c.hc(3).deleteGeneralSummary(e)})),c.Qb(),c.Qb()}if(2&t){const t=c.hc(3);c.zb(1),c.oc("data",t.buildingGeneralSummaryData)("mainStageId",t.buildingId)("type","building")("id",t.buildingId)}}function I(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"sub-stage",46),c.dc("deleteSubStage",(function(e){return c.yc(t),c.hc(3).deleteSubStage(e)})),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit,i=e.index,a=c.hc(3);c.zb(1),c.oc("data",t.id?t:null)("type","finishing")("index",i)("mainStageId",a.finishingId)}}function P(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",45),c.Rb(1,"general-summary",47),c.dc("deleteGeneralSummary",(function(e){return c.yc(t),c.hc(3).deleteGeneralSummary(e)})),c.Qb(),c.Qb()}if(2&t){const t=c.hc(3);c.zb(1),c.oc("data",t.finishingGeneralSummaryData)("mainStageId",t.finishingId)("type","finishing")("id",t.finishingId)}}function N(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",29),c.Rb(1,"div",30),c.Rb(2,"div",31),c.Rb(3,"div",32),c.Rb(4,"h4",33),c.Nb(5,"i",34),c.Hc(6," \u0627\u0644\u0623\u0633\u0627\u0633\u0627\u062a "),c.Qb(),c.Rb(7,"div",35),c.Rb(8,"button",36),c.dc("click",(function(){return c.yc(t),c.hc(2).addSubStage("foundation")})),c.Nb(9,"i",37),c.Hc(10," \u0627\u0636\u0627\u0641\u0629 \u0645\u0631\u062d\u0644\u0629 "),c.Qb(),c.Rb(11,"button",38),c.dc("click",(function(){return c.yc(t),c.hc(2).foundationGeneralSummary=!0})),c.Nb(12,"i",39),c.Hc(13," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 "),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",40),c.Fc(15,F,2,4,"div",41),c.Fc(16,j,2,4,"div",42),c.Qb(),c.Qb(),c.Rb(17,"div",31),c.Rb(18,"div",32),c.Rb(19,"h4",33),c.Nb(20,"i",43),c.Hc(21," \u0627\u0644\u0645\u0628\u0627\u0646\u064a "),c.Qb(),c.Rb(22,"div",35),c.Rb(23,"button",36),c.dc("click",(function(){return c.yc(t),c.hc(2).addSubStage("building")})),c.Nb(24,"i",37),c.Hc(25," \u0627\u0636\u0627\u0641\u0629 \u0645\u0631\u062d\u0644\u0629 "),c.Qb(),c.Rb(26,"button",38),c.dc("click",(function(){return c.yc(t),c.hc(2).buildingGeneralSummary=!0})),c.Nb(27,"i",39),c.Hc(28," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 "),c.Qb(),c.Qb(),c.Qb(),c.Rb(29,"div",40),c.Fc(30,w,2,4,"div",41),c.Fc(31,x,2,4,"div",42),c.Qb(),c.Qb(),c.Rb(32,"div",31),c.Rb(33,"div",32),c.Rb(34,"h4",33),c.Nb(35,"i",44),c.Hc(36," \u0627\u0644\u062a\u0634\u0637\u064a\u0628 "),c.Qb(),c.Rb(37,"div",35),c.Rb(38,"button",36),c.dc("click",(function(){return c.yc(t),c.hc(2).addSubStage("finishing")})),c.Nb(39,"i",37),c.Hc(40," \u0627\u0636\u0627\u0641\u0629 \u0645\u0631\u062d\u0644\u0629 "),c.Qb(),c.Rb(41,"button",38),c.dc("click",(function(){return c.yc(t),c.hc(2).finishingGeneralSummary=!0})),c.Nb(42,"i",39),c.Hc(43," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 "),c.Qb(),c.Qb(),c.Qb(),c.Rb(44,"div",40),c.Fc(45,I,2,4,"div",41),c.Fc(46,P,2,4,"div",42),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.hc(2);c.zb(15),c.oc("ngForOf",t.foundationSteps),c.zb(1),c.oc("ngIf",t.foundationGeneralSummary),c.zb(14),c.oc("ngForOf",t.buildingSteps),c.zb(1),c.oc("ngIf",t.buildingGeneralSummary),c.zb(14),c.oc("ngForOf",t.finishingSteps),c.zb(1),c.oc("ngIf",t.finishingGeneralSummary)}}function k(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"div",3),c.Rb(2,"div",4),c.Rb(3,"div",5),c.Rb(4,"h3"),c.Nb(5,"i",6),c.Hc(6," \u0627\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 "),c.Qb(),c.Rb(7,"a",7),c.Nb(8,"i",8),c.Qb(),c.Qb(),c.Rb(9,"div",9),c.Rb(10,"form",10),c.dc("ngSubmit",(function(){c.yc(t);const e=c.hc();return e.addProject(e.projectForm.value)})),c.Rb(11,"div",2),c.Rb(12,"div",11),c.Rb(13,"label",12),c.Nb(14,"i",6),c.Hc(15," \u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),c.Rb(16,"span",13),c.Hc(17,"*"),c.Qb(),c.Qb(),c.Rb(18,"div",14),c.Nb(19,"input",15),c.Qb(),c.Qb(),c.Rb(20,"div",11),c.Rb(21,"label",12),c.Nb(22,"i",16),c.Hc(23," \u0627\u0644\u0639\u0645\u064a\u0644 "),c.Rb(24,"span",13),c.Hc(25,"*"),c.Qb(),c.Qb(),c.Rb(26,"div",14),c.Rb(27,"select",17),c.Rb(28,"option",18),c.Hc(29," \u0627\u062e\u062a\u0631 "),c.Qb(),c.Fc(30,Q,2,2,"option",19),c.Qb(),c.Qb(),c.Qb(),c.Rb(31,"div",11),c.Rb(32,"label",12),c.Nb(33,"i",20),c.Hc(34," \u0643\u0648\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),c.Rb(35,"span",13),c.Hc(36,"*"),c.Qb(),c.Qb(),c.Rb(37,"div",14),c.Nb(38,"input",21),c.Qb(),c.Qb(),c.Rb(39,"div",11),c.Rb(40,"label",12),c.Nb(41,"i",22),c.Hc(42," \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),c.Rb(43,"span",13),c.Hc(44,"*"),c.Qb(),c.Qb(),c.Rb(45,"div",14),c.Nb(46,"input",23),c.Qb(),c.Qb(),c.Qb(),c.Rb(47,"div",24),c.Rb(48,"button",25),c.Nb(49,"i",26),c.Hc(50," \u062d\u0641\u0638 "),c.Qb(),c.Qb(),c.Qb(),c.Fc(51,N,47,6,"div",27),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.hc();c.zb(10),c.oc("formGroup",t.projectForm),c.zb(9),c.Eb("err",t.projectFormSubmitted&&t.projectForm.get("name").invalid),c.zb(8),c.Eb("err",t.projectFormSubmitted&&t.projectForm.get("client").invalid),c.zb(3),c.oc("ngForOf",t.clients),c.zb(8),c.Eb("err",t.projectFormSubmitted&&t.projectForm.get("code").invalid),c.zb(8),c.Eb("err",t.projectFormSubmitted&&t.projectForm.get("address").invalid),c.zb(5),c.oc("ngIf",t.isProjectAdded)}}function C(t,e){1&t&&c.Nb(0,"ngx-skeleton-loader",48)}let H=(()=>{class t{constructor(t,e,i,a,s,n){this.formBuilder=t,this.clientsService=e,this.apiService=i,this.toaster=a,this.router=s,this.projectsService=n,this.isProjectAdded=!1,this.projectFormSubmitted=!1,this.foundationSteps=[],this.foundationGeneralSummary=!1,this.buildingGeneralSummary=!1,this.finishingGeneralSummary=!1,this.foundationCount=0,this.buildingCount=0,this.finishingCount=0,this.buildingSteps=[],this.finishingSteps=[],this.pageType="add",this.editpageLoading=!0}ngOnInit(){this.createForm(),this.router.params.subscribe(t=>{t.id?(this.getProjectDetails(t.id,!0),this.pageType="edit",this.projectForm.get("client").disable()):this.editpageLoading=!1}),this.getClients()}getClients(){this.clientsService.getClients().subscribe(t=>{t.status&&(this.clients=t.data)})}createForm(){this.projectForm=this.formBuilder.group({name:[null,[o.q.required]],client:["",[o.q.required]],code:[null,[o.q.required]],address:[null,[o.q.required]]}),this.addProjectForm=this.formBuilder.group({bases:this.formBuilder.array([]),buildings:this.formBuilder.array([]),finishing:this.formBuilder.array([])})}addProject(t){this.projectFormSubmitted=!0,t.name&&("add"===this.pageType?this.apiService.postReq("projects/",t).subscribe(t=>{t.status?(this.toaster.showSuccess("\u062a\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u062c\u0627\u062d"),this.projectsService.projects=null,this.getProjectDetails(t.data.id),this.isProjectAdded=!0):this.toaster.showError(t.message)},t=>{this.toaster.showError()}):"edit"===this.pageType&&this.apiService.patchReq(`projects/${this.editProject.id}/`,t).subscribe(t=>{t.status?this.toaster.showSuccess("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u062c\u0627\u062d"):this.toaster.showError(t.message)},t=>{this.toaster.showError()}))}getProjectDetails(t,e=!1){t&&this.apiService.getReq(`projects/${t}/`).subscribe(t=>{t.status?(this.editProject=t.data,e&&(this.editpageLoading=!1,this.isProjectAdded=!0,this.projectForm.patchValue({name:this.editProject.name,client:this.editProject.client.id,code:this.editProject.code,address:this.editProject.address}),t.data.foundation.forEach(t=>{t.sub_stages.length&&(this.foundationSteps=t.sub_stages,t.steps_explain&&(this.foundationGeneralSummary=!0,this.foundationGeneralSummaryData={steps_explain:t.steps_explain,consultant_general_summary:t.consultant_general_summary,company_general_summary:t.company_general_summary})),t.is_report||(this.foundationId=t.id)}),t.data.building.forEach(t=>{t.sub_stages.length&&(this.buildingSteps=t.sub_stages,t.steps_explain&&(this.buildingGeneralSummary=!0,this.buildingGeneralSummaryData={steps_explain:t.steps_explain,consultant_general_summary:t.consultant_general_summary,company_general_summary:t.company_general_summary})),t.is_report||(this.buildingId=t.id)}),t.data.finishing.forEach(t=>{t.sub_stages.length&&(this.finishingSteps=t.sub_stages,t.steps_explain&&(this.finishingGeneralSummary=!0,this.finishingGeneralSummaryData={steps_explain:t.steps_explain,consultant_general_summary:t.consultant_general_summary,company_general_summary:t.company_general_summary})),t.is_report||(this.finishingId=t.id)}))):this.toaster.showError(t.message)},t=>{this.toaster.showError()})}addSubStage(t){switch(t){case"foundation":this.foundationSteps.push({type:t,index:this.foundationCount++});break;case"building":this.buildingSteps.push({type:t,index:this.buildingCount++});break;case"finishing":this.finishingSteps.push({type:t,index:this.finishingCount++})}}deleteSubStage(t){t.id&&r.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then(e=>{e.value&&this.apiService.deleteReq(`sub-stages/${t.id}/`).subscribe(e=>{if(e.status){switch(t.type){case"foundation":this.foundationSteps.splice(t.index,1);break;case"building":this.buildingSteps.splice(t.index,1);break;case"finishing":this.finishingSteps.splice(t.index,1)}r.a.fire("\u062a\u0645")}else this.toaster.showError(e.message)},t=>{this.toaster.showError()})})}deleteGeneralSummary(t){switch(t.type){case"foundation":this.foundationGeneralSummary=!1;break;case"building":this.buildingGeneralSummary=!1;break;case"finishing":this.finishingGeneralSummary=!1}}addReport(t){}get bases(){return this.addProjectForm.get("bases")}get buildings(){return this.addProjectForm.get("buildings")}get finishing(){return this.addProjectForm.get("finishing")}newBase(){return this.formBuilder.group({})}newBuilding(){return this.formBuilder.group({})}newFinish(){return this.formBuilder.group({})}addNewBase(t){this.bases.push(t)}addNewBuilding(t){this.bases.push(t)}addNewFinish(t){this.bases.push(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(o.c),c.Mb(b.a),c.Mb(d.a),c.Mb(u.a),c.Mb(s.a),c.Mb(l.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["add-projects"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["count","10","animation","pulse",4,"ngIf"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-title","add","d-flex","justify-content-between"],[1,"fas","fa-home"],["routerLink","/landing/projects",1,"back-icon"],[1,"fas","fa-chevron-left"],[1,"card-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"col-md-3","col-sm-6"],["for","",1,"control-label"],[1,"annotation-required"],[1,"form-group"],["type","text","formControlName","name",1,"form-control"],[1,"fas","fa-user"],["formControlName","client",1,"form-control","select"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"fas","fa-calendar"],["numbersOnly","","type","text","formControlName","code",1,"form-control"],[1,"fas","fa-map-marker-alt"],["type","text","formControlName","address",1,"form-control"],[1,"d-flex","justify-content-end","action-btns"],["type","submit",1,"btn","btn-green"],[1,"fas","fa-save"],["class","steps",4,"ngIf"],[3,"value"],[1,"steps"],[1,"row","no-gutters"],[1,"step","col-lg-4"],[1,"step-title","row","no-gutters"],[1,"col-sm-4"],[1,"fas","fa-tools"],[1,"col-sm-8"],["type","button",1,"btn","btn-orange","ml-1",3,"click"],[1,"fas","fa-plus-circle"],["type","button",1,"btn","btn-orange",3,"click"],[1,"fas","fa-file-alt"],[1,"step-body"],["class","sub-stage",4,"ngFor","ngForOf"],["class","sub-stage",4,"ngIf"],[1,"fas","fa-building"],[1,"fas","fa-paint-roller"],[1,"sub-stage"],[3,"data","type","index","mainStageId","deleteSubStage"],[3,"data","mainStageId","type","id","deleteGeneralSummary"],["count","10","animation","pulse"]],template:function(t,e){1&t&&(c.Fc(0,k,52,11,"div",0),c.Fc(1,C,1,0,"ngx-skeleton-loader",1)),2&t&&(c.oc("ngIf",!e.editpageLoading),c.zb(1),c.oc("ngIf","edit"===e.pageType&&e.editpageLoading))},directives:[a.l,s.e,o.s,o.k,o.e,o.b,o.j,o.d,o.p,o.m,o.r,a.k,m.a,y,R.a,_.a],styles:[".form-control[_ngcontent-%COMP%]{padding-right:10px}"]}),t})();var z=i("yByJ"),G=i("lkLn");const M=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",nameKey:"name",icon:"fas fa-home"}},E=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644",nameKey:"client",icon:"fas fa-user"}},O=function(){return{name:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u062c\u0627\u0632",nameKey:"total_completion_rate",icon:"fas fa-circle-notch"}},q=function(t,e,i){return[t,e,i]},B=[{path:"",component:(()=>{class t{constructor(t,e,i,a,s){this.projectsService=t,this.router=e,this.toaster=i,this.apiService=a,this.headerData=s,s.showSideBar=!1}ngOnInit(){this.getProjects()}getProjects(){this.projectsService.getProjects().subscribe(t=>{t.status?this.projects=t.data:this.toaster.showError(t.message)},t=>{this.toaster.showError(t.statusText)})}addProject(){this.router.navigate(["/landing/projects/add"])}editProject(t){this.router.navigate(["/landing/projects/edit/"+t.id]),this.projectsService.editableProject=t}deleteProject(t){r.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then(e=>{e.value&&this.apiService.deleteReq(`projects/${t}/`).subscribe(t=>{t.status?(this.getProjects(),setTimeout(()=>{r.a.fire("\u062a\u0645")},2e3)):this.toaster.showError(t.message)},t=>{this.toaster.showError()})})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l.a),c.Mb(s.b),c.Mb(u.a),c.Mb(d.a),c.Mb(z.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["projects"]],decls:3,vars:10,consts:[[1,"row"],[1,"col-md-12"],[3,"addLabel","data","tableHeads","add","edit","delete"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"data-table",2),c.dc("add",(function(){return e.addProject()}))("edit",(function(t){return e.editProject(t)}))("delete",(function(t){return e.deleteProject(t)})),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.zb(2),c.oc("addLabel","\u0627\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639")("data",e.projects)("tableHeads",c.uc(6,q,c.rc(3,M),c.rc(4,E),c.rc(5,O))))},directives:[G.a],styles:[".progress__svg[_ngcontent-%COMP%]{transform:rotate(-90deg)}.progress__meter[_ngcontent-%COMP%], .progress__value[_ngcontent-%COMP%]{fill:none}.progress__meter[_ngcontent-%COMP%]{stroke:#ccc}.progress__value[_ngcontent-%COMP%]{stroke:#4caf50;transition:all}"]}),t})()},{path:"add",component:H},{path:"edit/:id",component:H}];let L=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(B)],s.f]}),t})();var T=i("PCNd");let D=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[a.b,L,T.a,o.f,o.o]]}),t})()}}]);