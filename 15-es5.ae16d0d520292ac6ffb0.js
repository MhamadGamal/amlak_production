function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XEKE:function(e,t,r){"use strict";r.r(t),r.d(t,"SettingsModule",(function(){return E}));var s,i=r("ofXK"),a=r("3Pt+"),n=r("fXoL"),o=r("vkgz"),u=r("nm5K"),d=((s=function(){function e(t){_classCallCheck(this,e),this.apiService=t}return _createClass(e,[{key:"getStaffUsers",value:function(){var e=this;return this.apiService.getReq("staff-users/").pipe(Object(o.a)((function(t){t.status&&(e.users=t.data)})))}},{key:"getUserDetails",value:function(e){return this.users.find((function(t){return t.id==e}))}},{key:"users",get:function(){return this._users},set:function(e){this._users=e}}]),e}()).\u0275fac=function(e){return new(e||s)(n.Zb(u.a))},s.\u0275prov=n.Ib({token:s,factory:s.\u0275fac,providedIn:"root"}),s),l=r("mAmA"),c=r("tyNb"),b=r("IYfF"),f=r("Pd9Q");function m(e,t){if(1&e&&(n.Rb(0,"div",26),n.Rb(1,"label",27),n.Nb(2,"input",28),n.Nb(3,"span",29),n.Hc(4),n.Qb(),n.Qb()),2&e){var r=t.$implicit,s=t.index,i=n.hc();n.zb(2),n.oc("value",r.value)("formControlName",r.value)("checked",0===s),n.Ab("disabled",null==i.authService||null==i.authService.userData||!i.authService.userData.add_edit||null),n.zb(2),n.Jc(" ",r.key," ")}}var h,v,p,_,g=((h=function(){function e(t,r,s,i,a,n){_classCallCheck(this,e),this.formBuilder=t,this.usersService=r,this.toaster=s,this.router=i,this.apiService=a,this.authService=n,this.formSubmitted=!1,this.loading=!1,this.roles=[{key:"\u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0641\u0642\u0637",value:"view_only"},{key:"\u0627\u0645\u0643\u0627\u0646\u064a\u0629 \u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631",value:"reports_download"},{key:"\u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0648\u0627\u0644\u062a\u0639\u062f\u064a\u0644",value:"add_edit"},{key:"\u0627\u0644\u062d\u0630\u0641",value:"delete_permission"}],this.pageType="add"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.createForm(),this.router.params.subscribe((function(t){t.id&&(e.id=t.id)})),this.usersService.users?(this.users=this.usersService.users,this.fillUserData()):this.getUsers()}},{key:"createForm",value:function(){this.addUserForm=this.formBuilder.group({full_name:[null,[a.q.required]],phone_number:[null,[a.q.required]],email:[null,[a.q.required,a.q.email]],username:[null,[a.q.required]],new_password1:[null,[a.q.required]],view_only:[!0,[a.q.required]],reports_download:[!1,[a.q.required]],add_edit:[!1,[a.q.required]],delete_permission:[!1,[a.q.required]]})}},{key:"getUsers",value:function(){var e=this;this.usersService.getStaffUsers().subscribe((function(t){t.status?(e.users=t.data,e.id&&e.fillUserData()):e.toaster.showError(t.message)}),(function(t){e.toaster.showError()}))}},{key:"fillUserData",value:function(){if(this.id){var e=this.usersService.getUserDetails(this.id);this.addUserForm.patchValue({full_name:e.full_name,phone_number:e.phone_number,email:e.email,username:e.username,new_password1:"",view_only:e.view_only,reports_download:e.reports_download,add_edit:e.add_edit,delete_permission:e.delete_permission})}}},{key:"addUser",value:function(e){var t=this;this.formSubmitted=!0,this.addUserForm.valid&&(this.loading=!0,this.id?this.apiService.patchReq("staff-users/".concat(this.id,"/"),{view_only:e.view_only,reports_download:e.reports_download,add_edit:e.add_edit,delete_permission:e.delete_permission}).subscribe((function(e){e.status?(t.formSubmitted=!1,t.usersService.users=null,t.toaster.showSuccess("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d")):(t.toaster.showError(e.message),t.formSubmitted=!1),t.loading=!1}),(function(e){t.loading=!1,t.toaster.showError(),t.formSubmitted=!1})):(e.new_password2=e.new_password1,this.apiService.postReq("staff-users/",e).subscribe((function(e){e.status?(t.toaster.showSuccess("\u062a\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d"),t.usersService.users=null,t.formSubmitted=!1):(t.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),t.formSubmitted=!1),t.loading=!1}),(function(e){t.loading=!1,t.formSubmitted=!1,t.toaster.showError()}))))}},{key:"rolesFilds",get:function(){return this.addUserForm.get("roles")}}]),e}()).\u0275fac=function(e){return new(e||h)(n.Mb(a.c),n.Mb(d),n.Mb(l.a),n.Mb(c.a),n.Mb(u.a),n.Mb(b.a))},h.\u0275cmp=n.Gb({type:h,selectors:[["add-user"]],decls:64,vars:20,consts:[[1,"card"],[1,"card-title","add"],[1,"fas","fa-user-plus"],[1,"card-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"form-group"],[1,"control-label"],[1,"annotation-required"],["type","text","formControlName","full_name",1,"form-control"],[1,"fas","fa-user"],["type","text","numbersOnly","","formControlName","phone_number",1,"form-control"],[1,"fas","fa-mobile-alt"],["type","email","formControlName","email",1,"form-control"],[1,"fas","fa-envelope"],["type","text","formControlName","username",1,"form-control"],["type","password","formControlName","new_password1",1,"form-control"],[1,"fas","fa-lock"],[1,"col-12"],["class","my-3 col-lg-2 col-md-3 col-sm-6",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-green",3,"disabled"],[1,"fas","fa-save"],["routerLink","/landing/settings",1,"btn","btn-red","mr-2"],[1,"fas","fa-times-circle"],[1,"my-3","col-lg-2","col-md-3","col-sm-6"],[1,"checkbox-container"],["type","checkbox",3,"value","formControlName","checked"],[1,"checkmark"]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"h3"),n.Nb(3,"i",2),n.Hc(4," \u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645 "),n.Qb(),n.Qb(),n.Rb(5,"div",3),n.Rb(6,"form",4),n.dc("ngSubmit",(function(){return t.addUser(t.addUserForm.value)})),n.Rb(7,"div",5),n.Rb(8,"div",6),n.Rb(9,"div",7),n.Rb(10,"label",8),n.Hc(11," \u0627\u0644\u0627\u0633\u0645 "),n.Rb(12,"span",9),n.Hc(13,"*"),n.Qb(),n.Qb(),n.Nb(14,"input",10),n.Nb(15,"i",11),n.Qb(),n.Qb(),n.Rb(16,"div",6),n.Rb(17,"div",7),n.Rb(18,"label",8),n.Hc(19," \u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 "),n.Rb(20,"span",9),n.Hc(21,"*"),n.Qb(),n.Qb(),n.Nb(22,"input",12),n.Nb(23,"i",13),n.Qb(),n.Qb(),n.Rb(24,"div",6),n.Rb(25,"div",7),n.Rb(26,"label",8),n.Hc(27," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0643\u062a\u0631\u0648\u0646\u064a "),n.Rb(28,"span",9),n.Hc(29,"*"),n.Qb(),n.Qb(),n.Nb(30,"input",14),n.Nb(31,"i",15),n.Qb(),n.Qb(),n.Rb(32,"div",6),n.Rb(33,"div",7),n.Rb(34,"label",8),n.Hc(35," \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "),n.Rb(36,"span",9),n.Hc(37,"*"),n.Qb(),n.Qb(),n.Nb(38,"input",16),n.Nb(39,"i",11),n.Qb(),n.Qb(),n.Rb(40,"div",6),n.Rb(41,"div",7),n.Rb(42,"label",8),n.Hc(43," \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064a "),n.Rb(44,"span",9),n.Hc(45,"*"),n.Qb(),n.Qb(),n.Nb(46,"input",17),n.Nb(47,"i",18),n.Qb(),n.Qb(),n.Qb(),n.Rb(48,"div",5),n.Rb(49,"div",19),n.Rb(50,"div",7),n.Rb(51,"label",8),n.Hc(52," \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "),n.Rb(53,"span",9),n.Hc(54,"*"),n.Qb(),n.Qb(),n.Rb(55,"div",5),n.Fc(56,m,5,5,"div",20),n.Qb(),n.Qb(),n.Rb(57,"div",21),n.Rb(58,"button",22),n.Nb(59,"i",23),n.Hc(60," \u062d\u0641\u0638 "),n.Qb(),n.Rb(61,"a",24),n.Nb(62,"i",25),n.Hc(63," \u0627\u0644\u063a\u0627\u0621"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.zb(6),n.oc("formGroup",t.addUserForm),n.zb(8),n.Eb("err",t.formSubmitted&&t.addUserForm.get("full_name").invalid),n.Ab("disabled",t.id&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(8),n.Eb("err",t.formSubmitted&&t.addUserForm.get("phone_number").invalid),n.Ab("disabled",t.id&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(8),n.Eb("err",t.formSubmitted&&t.addUserForm.get("email").invalid),n.Ab("disabled",t.id&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(8),n.Eb("err",t.formSubmitted&&t.addUserForm.get("username").invalid),n.Ab("disabled",t.id&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(8),n.Eb("err",t.formSubmitted&&t.addUserForm.get("new_password1").invalid),n.Ab("disabled",t.id&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(10),n.oc("ngForOf",t.roles),n.zb(2),n.Eb("actionBtn",t.loading),n.oc("disabled",t.loading&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)))},directives:[a.s,a.k,a.e,a.b,a.j,a.d,f.a,i.k,c.e,a.a],styles:[""]}),h),S=r("PdH4"),y=r.n(S),w=r("yByJ"),R=r("lkLn"),k=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",nameKey:"username",icon:"fas fa-user"}},Q=function(){return{name:"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644",nameKey:"phone_number",icon:"fas fa-mobile-alt"}},U=function(){return{name:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",nameKey:"email",icon:"fas fa-envelope"}},C=function(e,t,r){return[e,t,r]},q=[{path:"",component:(v=function(){function e(t,r,s,i,a){_classCallCheck(this,e),this.usersService=t,this.router=r,this.toaster=s,this.apiService=i,this.headerData=a,a.showSideBar=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;this.usersService.getStaffUsers().subscribe((function(t){t.status?e.users=t.data:e.toaster.showError(t.message)}),(function(t){e.toaster.showError()}))}},{key:"addUser",value:function(){this.router.navigate(["/landing/settings/add-user"])}},{key:"editUser",value:function(e){this.router.navigate(["/landing/settings/edit-user/"+e.id])}},{key:"deleteUser",value:function(e){var t=this;y.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then((function(r){r.value&&t.apiService.deleteReq("staff-users/".concat(e,"/")).subscribe((function(e){e.status?(t.getUsers(),y.a.fire("\u062a\u0645")):t.toaster.showError(e.message)}),(function(e){t.toaster.showError()}))}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(n.Mb(d),n.Mb(c.b),n.Mb(l.a),n.Mb(u.a),n.Mb(w.a))},v.\u0275cmp=n.Gb({type:v,selectors:[["settings"]],decls:3,vars:10,consts:[[1,"row"],[1,"col-md-12"],[3,"data","addLabel","tableHeads","add","edit","delete"]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"data-table",2),n.dc("add",(function(){return t.addUser()}))("edit",(function(e){return t.editUser(e)}))("delete",(function(e){return t.deleteUser(e)})),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.zb(2),n.oc("data",t.users)("addLabel"," \u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645")("tableHeads",n.uc(6,C,n.rc(3,k),n.rc(4,Q),n.rc(5,U))))},directives:[R.a],styles:[""]}),v)},{path:"add-user",component:g},{path:"edit-user/:id",component:g}],N=((p=function e(){_classCallCheck(this,e)}).\u0275mod=n.Kb({type:p}),p.\u0275inj=n.Jb({factory:function(e){return new(e||p)},imports:[[c.f.forChild(q)],c.f]}),p),D=r("PCNd"),E=((_=function e(){_classCallCheck(this,e)}).\u0275mod=n.Kb({type:_}),_.\u0275inj=n.Jb({factory:function(e){return new(e||_)},imports:[[i.b,N,D.a,a.f,a.o,D.a]]}),_)}}]);