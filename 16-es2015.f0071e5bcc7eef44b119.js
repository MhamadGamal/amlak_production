(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{urco:function(e,t,r){"use strict";r.r(t),r.d(t,"ReportsModule",(function(){return T}));var a=r("3Pt+"),i=r("ofXK"),s=r("fXoL"),o=r("0rIZ"),n=r("5aeq"),c=r("nm5K"),d=r("mAmA"),l=r("tyNb");function b(e,t){1&e&&(s.Rb(0,"label",16),s.Hc(1,"\u0627\u0644\u0645\u0648\u0627\u062f"),s.Qb())}function u(e,t){1&e&&(s.Rb(0,"label",16),s.Hc(1,"\u0627\u0644\u0645\u0648\u0631\u062f"),s.Qb())}function m(e,t){1&e&&(s.Rb(0,"label",16),s.Hc(1,"\u0645\u0644\u062d\u0648\u0638\u0629"),s.Qb())}function h(e,t){if(1&e){const e=s.Sb();s.Rb(0,"button",17),s.dc("click",(function(){s.yc(e);const t=s.hc();return t.addMaterials.emit(t.index+1)})),s.Nb(1,"i",18),s.Qb()}}function p(e,t){1&e&&s.Nb(0,"i",19)}function f(e,t){1&e&&s.Nb(0,"i",20)}let g=(()=>{class e{constructor(e,t,r){this.formBuilder=e,this.apiService=t,this.toaster=r,this.lastChild=!1,this.addMaterials=new s.n,this.deleteMaterials=new s.n,this.pageType="add",this.showLoader=!1,this.formSubmitted=!1}ngOnInit(){this.createForm(),this.data&&(this.pageType="edit",this.usedMaterialsForm.patchValue({material:this.data.material,supplier:this.data.supplier,note:this.data.note}))}createForm(){this.usedMaterialsForm=this.formBuilder.group({material:["",[a.q.required]],supplier:["",[a.q.required]],note:["",[a.q.required]]})}addUsedMaterials(e){this.formSubmitted=!0,this.usedMaterialsForm.valid&&(this.showLoader=!0,e.project=this.projectId,"add"===this.pageType?this.apiService.postReq("used-materials-staff/",e).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0648\u0627\u062f \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()}):this.apiService.patchReq(`used-materials-staff/${this.data.id}/`,e).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0648\u0627\u062f \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()}))}deleteMAterials(){this.apiService.deleteReq(`used-materials-staff/${this.data.id}/`).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()})}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(a.c),s.Mb(c.a),s.Mb(d.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["used-materials"]],inputs:{data:"data",index:"index",projectId:"projectId",lastChild:"lastChild"},outputs:{addMaterials:"addMaterials",deleteMaterials:"deleteMaterials"},decls:23,vars:14,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-11"],[1,"col-md-4","col-sm-6"],["class","control-label",4,"ngIf"],[1,"form-group"],["type","text","formControlName","material",1,"form-control"],["type","text","formControlName","supplier",1,"form-control"],["type","text","formControlName","note",1,"form-control"],[1,"col-md-1","d-flex","align-items-end","mb-3","justify-content-end"],["type","button","class","txt-green mr-1",3,"click",4,"ngIf"],["type","submit",1,"txt-green","mr-1",3,"disabled"],["class","fas fa-check",4,"ngIf"],["class","fas fa-spinner",4,"ngIf"],["type","button",1,"txt-red","mr-1",3,"click"],[1,"fas","fa-trash-alt"],[1,"control-label"],["type","button",1,"txt-green","mr-1",3,"click"],[1,"fas","fa-plus"],[1,"fas","fa-check"],[1,"fas","fa-spinner"]],template:function(e,t){1&e&&(s.Rb(0,"form",0),s.dc("ngSubmit",(function(){return t.addUsedMaterials(t.usedMaterialsForm.value)})),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",1),s.Rb(4,"div",3),s.Fc(5,b,2,0,"label",4),s.Rb(6,"div",5),s.Nb(7,"input",6),s.Qb(),s.Qb(),s.Rb(8,"div",3),s.Fc(9,u,2,0,"label",4),s.Rb(10,"div",5),s.Nb(11,"input",7),s.Qb(),s.Qb(),s.Rb(12,"div",3),s.Fc(13,m,2,0,"label",4),s.Rb(14,"div",5),s.Nb(15,"input",8),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(16,"div",9),s.Fc(17,h,2,0,"button",10),s.Rb(18,"button",11),s.Fc(19,p,1,0,"i",12),s.Fc(20,f,1,0,"i",13),s.Qb(),s.Rb(21,"button",14),s.dc("click",(function(){return t.deleteMaterials.emit(t.index),t.deleteMAterials()})),s.Nb(22,"i",15),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.oc("formGroup",t.usedMaterialsForm),s.zb(5),s.oc("ngIf",0===t.index),s.zb(2),s.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("material").invalid),s.zb(2),s.oc("ngIf",0===t.index),s.zb(2),s.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("supplier").invalid),s.zb(2),s.oc("ngIf",0===t.index),s.zb(2),s.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("note").invalid),s.zb(2),s.oc("ngIf",t.lastChild),s.zb(1),s.oc("disabled",t.showLoader),s.zb(1),s.oc("ngIf",!t.showLoader),s.zb(1),s.oc("ngIf",t.showLoader))},directives:[a.s,a.k,a.e,i.l,a.b,a.j,a.d],styles:["button[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;padding:5px}"]}),e})();var v=r("PTt/"),y=r("xJkR");function R(e,t){if(1&e&&(s.Rb(0,"option",27),s.Hc(1),s.Qb()),2&e){const e=t.$implicit;s.oc("value",e.id),s.zb(1),s.Jc(" ",e.name," ")}}function Q(e,t){if(1&e){const e=s.Sb();s.Rb(0,"div"),s.Rb(1,"used-materials",30),s.dc("deleteMaterials",(function(t){return s.yc(e),s.hc(3).usedMaterials.splice(t,1)}))("addMaterials",(function(t){return s.yc(e),s.hc(3).usedMaterials.push(t+1)})),s.Qb(),s.Qb()}if(2&e){const e=t.$implicit,r=t.index,a=s.hc(3);s.zb(1),s.oc("projectId",a.editProject.id)("data",e.id?e:null)("index",r)("lastChild",r===a.usedMaterials.length-1)}}function _(e,t){if(1&e&&(s.Rb(0,"div",28),s.Fc(1,Q,2,4,"div",29),s.Qb()),2&e){const e=s.hc(2);s.zb(1),s.oc("ngForOf",e.usedMaterials)}}function j(e,t){if(1&e){const e=s.Sb();s.Rb(0,"div",31),s.Rb(1,"div",32),s.Rb(2,"div",33),s.Rb(3,"div",34),s.Rb(4,"h4"),s.Nb(5,"i",35),s.Hc(6," \u0627\u0644\u0623\u0633\u0627\u0633\u0627\u062a "),s.Qb(),s.Qb(),s.Rb(7,"div",36),s.Rb(8,"div",37),s.Rb(9,"general-summary",38),s.dc("deleteGeneralSummary",(function(t){return s.yc(e),s.hc(2).deleteGeneralSummary(t)})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(10,"div",33),s.Rb(11,"div",34),s.Rb(12,"h4"),s.Nb(13,"i",39),s.Hc(14," \u0627\u0644\u0645\u0628\u0627\u0646\u064a "),s.Qb(),s.Qb(),s.Rb(15,"div",36),s.Rb(16,"div",37),s.Rb(17,"general-summary",38),s.dc("deleteGeneralSummary",(function(t){return s.yc(e),s.hc(2).deleteGeneralSummary(t)})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(18,"div",33),s.Rb(19,"div",34),s.Rb(20,"h4"),s.Nb(21,"i",40),s.Hc(22," \u0627\u0644\u062a\u0634\u0637\u064a\u0628 "),s.Qb(),s.Qb(),s.Rb(23,"div",36),s.Rb(24,"div",37),s.Rb(25,"general-summary",38),s.dc("deleteGeneralSummary",(function(t){return s.yc(e),s.hc(2).deleteGeneralSummary(t)})),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.hc(2);s.zb(9),s.oc("projectId",e.editProject.id)("stageType",1)("reportPage",!0)("data",e.foundationGeneralSummaryData)("mainStageId",e.foundationId)("type","foundation"),s.zb(8),s.oc("projectId",e.editProject.id)("stageType",2)("reportPage",!0)("data",e.buildingGeneralSummaryData)("mainStageId",e.buildingId)("type","building"),s.zb(8),s.oc("projectId",e.editProject.id)("stageType",3)("reportPage",!0)("data",e.finishingGeneralSummaryData)("mainStageId",e.finishingId)("type","finishing")}}function w(e,t){1&e&&(s.Rb(0,"div",58),s.Hc(1," pdf file "),s.Qb())}function S(e,t){1&e&&(s.Rb(0,"div",58),s.Hc(1," pdf file "),s.Qb())}function F(e,t){if(1&e){const e=s.Sb();s.Rb(0,"div",41),s.Rb(1,"div",42),s.Rb(2,"h4"),s.Hc(3," \u062e\u0627\u062a\u0645\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),s.Qb(),s.Qb(),s.Rb(4,"div",43),s.Rb(5,"form",44),s.dc("ngSubmit",(function(){s.yc(e);const t=s.hc(2);return t.addConclusion(t.conclusionForm.value)})),s.Rb(6,"div",2),s.Rb(7,"div",45),s.Rb(8,"div",14),s.Rb(9,"label",46),s.Hc(10," \u0634\u0631\u062d \u0627\u0644\u062e\u0637\u0648\u0627\u062a "),s.Rb(11,"span",13),s.Hc(12,"*"),s.Qb(),s.Qb(),s.Nb(13,"textarea",47),s.Qb(),s.Qb(),s.Rb(14,"div",45),s.Rb(15,"div",14),s.Rb(16,"label",46),s.Hc(17," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0634\u0631\u0643\u0629 "),s.Qb(),s.Rb(18,"div",48),s.Rb(19,"input",49),s.dc("change",(function(t){return s.yc(e),s.hc(2).uploadReport(t,"company_general_summary")})),s.Qb(),s.Fc(20,w,2,0,"div",50),s.Qb(),s.Nb(21,"i",51),s.Qb(),s.Rb(22,"div",14),s.Rb(23,"label",52),s.Nb(24,"input",53),s.Nb(25,"span",54),s.Hc(26," \u0627\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0644\u0644\u0632\u0627\u0626\u0631 "),s.Qb(),s.Qb(),s.Qb(),s.Rb(27,"div",45),s.Rb(28,"div",14),s.Rb(29,"label",46),s.Hc(30," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a "),s.Qb(),s.Rb(31,"div",48),s.Rb(32,"input",49),s.dc("change",(function(t){return s.yc(e),s.hc(2).uploadReport(t,"consultant_general_summary")})),s.Qb(),s.Fc(33,S,2,0,"div",50),s.Qb(),s.Nb(34,"i",51),s.Qb(),s.Qb(),s.Qb(),s.Rb(35,"div",55),s.Rb(36,"button",56),s.Nb(37,"i",57),s.Hc(38," \u062d\u0641\u0638 "),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.hc(2);s.zb(5),s.oc("formGroup",e.conclusionForm),s.zb(15),s.oc("ngIf",e.conclusionForm.get("company_general_summary").value),s.zb(13),s.oc("ngIf",e.conclusionForm.get("consultant_general_summary").value)}}function I(e,t){if(1&e){const e=s.Sb();s.Rb(0,"div",2),s.Rb(1,"div",3),s.Rb(2,"div",4),s.Rb(3,"div",5),s.Rb(4,"h3"),s.Nb(5,"i",6),s.Hc(6," \u0627\u0636\u0627\u0641\u0629 \u062a\u0642\u0631\u064a\u0631 "),s.Qb(),s.Rb(7,"a",7),s.Nb(8,"i",8),s.Qb(),s.Qb(),s.Rb(9,"div",9),s.Rb(10,"form",10),s.Rb(11,"div",2),s.Rb(12,"div",11),s.Rb(13,"label",12),s.Nb(14,"i",6),s.Hc(15," \u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),s.Rb(16,"span",13),s.Hc(17,"*"),s.Qb(),s.Qb(),s.Rb(18,"div",14),s.Rb(19,"select",15),s.dc("change",(function(t){return s.yc(e),s.hc().projectChange(t.target.value)})),s.Rb(20,"option",16),s.Hc(21," \u0627\u062e\u062a\u0631 "),s.Qb(),s.Fc(22,R,2,2,"option",17),s.Qb(),s.Qb(),s.Qb(),s.Rb(23,"div",11),s.Rb(24,"label",12),s.Nb(25,"i",18),s.Hc(26," \u0627\u0644\u0639\u0645\u064a\u0644 "),s.Rb(27,"span",13),s.Hc(28,"*"),s.Qb(),s.Qb(),s.Rb(29,"div",14),s.Nb(30,"input",19),s.Qb(),s.Qb(),s.Rb(31,"div",11),s.Rb(32,"label",12),s.Nb(33,"i",20),s.Hc(34," \u0643\u0648\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),s.Rb(35,"span",13),s.Hc(36,"*"),s.Qb(),s.Qb(),s.Rb(37,"div",14),s.Nb(38,"input",21),s.Qb(),s.Qb(),s.Rb(39,"div",11),s.Rb(40,"label",12),s.Nb(41,"i",22),s.Hc(42," \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),s.Rb(43,"span",13),s.Hc(44,"*"),s.Qb(),s.Qb(),s.Rb(45,"div",14),s.Nb(46,"input",23),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Fc(47,_,2,1,"div",24),s.Fc(48,j,26,18,"div",25),s.Fc(49,F,39,3,"div",26),s.Qb(),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=s.hc();s.zb(10),s.oc("formGroup",e.projectForm),s.zb(12),s.oc("ngForOf",e.projects),s.zb(25),s.oc("ngIf",e.showBody),s.zb(1),s.oc("ngIf",e.showBody),s.zb(1),s.oc("ngIf",e.showBody)}}function x(e,t){1&e&&s.Nb(0,"ngx-skeleton-loader",59)}let M=(()=>{class e{constructor(e,t,r,a,i,s){this.formBuilder=e,this.clientsService=t,this.projectsService=r,this.apiService=a,this.toaster=i,this.router=s,this.pageType="add",this.pageLoading=!0,this.foundationGeneralSummary=!1,this.buildingGeneralSummary=!1,this.finishingGeneralSummary=!1,this.usedMaterials=[1],this.showBody=!1,this.formData=new FormData}ngOnInit(){this.router.params.subscribe(e=>{e.id&&(this.getProjectDetails(e.id,!0),this.pageType="edit")}),this.projectsService.projects?(this.projects=this.projectsService.projects,this.pageLoading=!1):this.getProjects(),this.createForm()}getClients(){this.clientsService.getClients().subscribe(e=>{e.status&&(this.clients=e.data)})}projectChange(e){e&&(this.editProject=this.projectsService.findProject(e),this.setFormData(this.editProject))}getProjects(){this.projectsService.getProjects().subscribe(e=>{e.status?(this.projects=e.data,this.projectsService.projects=this.projects,this.pageLoading=!1):this.toaster.showError(e.message)},e=>{this.toaster.showError(e.statusText)})}createForm(){this.projectForm=this.formBuilder.group({name:["",[a.q.required]],client:["",[a.q.required]],code:[null,[a.q.required]],address:[null,[a.q.required]]}),this.addProjectForm=this.formBuilder.group({bases:this.formBuilder.array([]),buildings:this.formBuilder.array([]),finishing:this.formBuilder.array([])}),this.conclusionForm=this.formBuilder.group({steps_explain:[null,[a.q.required]],company_general_summary:[null],consultant_general_summary:[null],show_used_materials_to_visitor:[!1]})}getProjectDetails(e,t=!1){e&&this.apiService.getReq(`projects/${e}/`).subscribe(e=>{e.status?(this.editProject=e.data,this.foundationId=e.data.foundation[0].id,this.buildingId=e.data.building[0].id,this.finishingId=e.data.finishing[0].id,t&&(this.conclusionForm.patchValue({steps_explain:this.editProject.steps_explain||"",company_general_summary:this.editProject.company_general_summary||"",consultant_general_summary:this.editProject.consultant_general_summary||"",show_used_materials_to_visitor:this.editProject.show_used_materials_to_visitor||!1}),this.pageLoading=!1,this.setFormData(this.editProject),e.data.used_materials.length&&(this.usedMaterials=e.data.used_materials),e.data.foundation.forEach(e=>{e.is_report&&(e.steps_explain&&(this.foundationGeneralSummaryData=e),this.foundationId=e.id)}),e.data.building.forEach(e=>{e.is_report&&(e.steps_explain&&(this.buildingGeneralSummaryData=e),this.buildingId=e.id)}),e.data.finishing.forEach(e=>{e.is_report&&(this.finishingId=e.id,e.steps_explain&&(this.finishingGeneralSummaryData=e))}))):this.toaster.showError(e.message)},e=>{this.toaster.showError()})}setFormData(e){this.showBody=!0,this.projectForm.patchValue({name:e.id,client:e.client.username,code:e.code,address:e.address})}deleteGeneralSummary(e){switch(e.type){case"foundation":this.foundationGeneralSummary=!1;break;case"building":this.buildingGeneralSummary=!1;break;case"finishing":this.finishingGeneralSummary=!1}}uploadReport(e,t){const r=e.target.files[0];switch(t){case"company_general_summary":this.formData.append("company_general_summary",r,r.name),this.conclusionForm.get("company_general_summary").setValue(r);break;case"consultant_general_summary":this.formData.append("consultant_general_summary",r,r.name),this.conclusionForm.get("consultant_general_summary").setValue(r)}}addConclusion(e){this.conclusionForm.valid&&(this.formData.append("steps_explain",e.steps_explain),this.formData.append("show_used_materials_to_visitor",e.show_used_materials_to_visitor),this.apiService.patchReq(`projects/${this.editProject.id}/`,this.formData).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0629 \u062e\u0627\u062a\u0645\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message)},e=>{this.toaster.showError()}))}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(a.c),s.Mb(o.a),s.Mb(n.a),s.Mb(c.a),s.Mb(d.a),s.Mb(l.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["add-report"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["count","10","animation","pulse",4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-title","add","d-flex","justify-content-between"],[1,"fas","fa-home"],["routerLink","/landing/reports",1,"back-icon"],[1,"fas","fa-chevron-left"],[1,"card-body"],[1,"form",3,"formGroup"],[1,"col-md-3","col-sm-6"],["for","",1,"control-label"],[1,"annotation-required"],[1,"form-group"],["formControlName","name",1,"form-control","select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"fas","fa-user"],["disabled","","type","text","formControlName","client",1,"form-control"],[1,"fas","fa-calendar"],["disabled","","type","text","formControlName","code",1,"form-control"],[1,"fas","fa-map-marker-alt"],["disabled","","type","text","formControlName","address",1,"form-control"],["class","used-materials",4,"ngIf"],["class","steps",4,"ngIf"],["class","project-conclusion",4,"ngIf"],[3,"value"],[1,"used-materials"],[4,"ngFor","ngForOf"],[3,"projectId","data","index","lastChild","deleteMaterials","addMaterials"],[1,"steps"],[1,"row","no-gutters"],[1,"step","col-md-4"],[1,"step-title"],[1,"fas","fa-tools"],[1,"step-body"],[1,"sub-stage"],[3,"projectId","stageType","reportPage","data","mainStageId","type","deleteGeneralSummary"],[1,"fas","fa-building"],[1,"fas","fa-paint-roller"],[1,"project-conclusion"],[1,"title"],[1,"body"],[1,"form",3,"formGroup","ngSubmit"],[1,"col-md-4","col-sm-6"],[1,"control-label"],["rows","4","formControlName","steps_explain",1,"form-control"],[1,"file"],["type","file","accept","application/pdf",1,"form-control",3,"change"],["class","report-name",4,"ngIf"],[1,"fas","fa-paperclip"],[1,"checkbox-container"],["type","checkbox","formControlName","show_used_materials_to_visitor"],[1,"checkmark"],[1,"d-flex","justify-content-end","action-btns"],["type","submit",1,"btn","btn-green"],[1,"fas","fa-save"],[1,"report-name"],["count","10","animation","pulse"]],template:function(e,t){1&e&&(s.Fc(0,I,50,5,"div",0),s.Fc(1,x,1,0,"ngx-skeleton-loader",1)),2&e&&(s.oc("ngIf",!t.pageLoading),s.zb(1),s.oc("ngIf",t.pageLoading))},directives:[i.l,l.e,a.s,a.k,a.e,a.p,a.j,a.d,a.m,a.r,i.k,a.b,g,v.a,a.a,y.a],styles:[".project-conclusion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:20px -20px 10px;padding:8px;text-align:center;background-color:#186076;color:#fff}"]}),e})();var N=r("PdH4"),P=r.n(N),G=r("yByJ"),H=r("lkLn");const k=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",nameKey:"name",icon:"fas fa-home"}},C=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644",nameKey:"client",icon:"fas fa-user"}},z=function(){return{name:"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",nameKey:"status",icon:"far fa-lightbulb"}},q=function(){return{name:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u062c\u0627\u0632",nameKey:"total_completion_rate",icon:"fas fa-circle-notch"}},E=function(e,t,r,a){return[e,t,r,a]},L=[{path:"",component:(()=>{class e{constructor(e,t,r,a,i){this.projectsService=e,this.router=t,this.toaster=r,this.apiService=a,this.headerData=i,i.showSideBar=!1}ngOnInit(){this.getProjects()}getProjects(){this.projectsService.getProjects().subscribe(e=>{e.status?this.projects=e.data:this.toaster.showError(e.message)},e=>{this.toaster.showError(e.statusText)})}addRrport(){this.router.navigate(["/landing/reports/add"])}editRrport(e){this.router.navigate(["/landing/reports/edit/"+e.id])}deleteRrport(e){P.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then(t=>{t.value&&this.apiService.deleteReq(`projects/${e}/delete_report/`).subscribe(e=>{e.status?(this.getProjects(),P.a.fire("\u062a\u0645")):this.toaster.showError(e.message)},e=>{this.toaster.showError()})})}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(n.a),s.Mb(l.b),s.Mb(d.a),s.Mb(c.a),s.Mb(G.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["report"]],decls:3,vars:12,consts:[[1,"row"],[1,"col-md-12"],[3,"addLabel","data","tableHeads","add","edit","delete"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"data-table",2),s.dc("add",(function(){return t.addRrport()}))("edit",(function(e){return t.editRrport(e)}))("delete",(function(e){return t.deleteRrport(e)})),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.zb(2),s.oc("addLabel","\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0639\u0627\u0645")("data",t.projects)("tableHeads",s.vc(7,E,s.rc(3,k),s.rc(4,C),s.rc(5,z),s.rc(6,q))))},directives:[H.a],styles:[""]}),e})()},{path:"add",component:M},{path:"edit/:id",component:M}];let B=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[l.f.forChild(L)],l.f]}),e})();var D=r("PCNd");let T=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[i.b,B,D.a,a.f,a.o]]}),e})()}}]);