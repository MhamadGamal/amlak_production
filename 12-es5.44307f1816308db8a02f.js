function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1k6y":function(e,n,a){"use strict";a.r(n),a.d(n,"LandingModule",(function(){return k}));var t,i,r,c,o,s=a("ofXK"),l=a("fXoL"),d=a("yByJ"),u=a("tyNb"),b=((t=function(){function e(n){_classCallCheck(this,e),this.headerData=n}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||t)(l.Mb(d.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["side-menu"]],decls:30,vars:0,consts:[[1,"side-menu"],[1,"logo","py-4","d-flex","justify-content-center"],[1,"col-8"],["src","assets/images/logo/logo.png","alt",""],[1,"py-4"],[1,"navigation"],[1,"nav-item"],["routerLink","/landing/dashboard","routerLinkActive","active",1,"nav-link",3,"click"],[1,"fas","fa-th-large"],["routerLink","/landing/clients","routerLinkActive","active",1,"nav-link",3,"click"],[1,"fas","fa-user-friends"],["routerLink","/landing/projects","routerLinkActive","active",1,"nav-link",3,"click"],[1,"fas","fa-home"],["routerLink","/landing/reports","routerLinkActive","active",1,"nav-link",3,"click"],[1,"far","fa-chart-bar"],["routerLink","/landing/comments","routerLinkActive","active",1,"nav-link",3,"click"],[1,"fas","fa-comment-alt"],["routerLink","/landing/settings","routerLinkActive","active",1,"nav-link",3,"click"],[1,"fas","fa-cog"]],template:function(e,n){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Nb(3,"img",3),l.Qb(),l.Qb(),l.Rb(4,"nav",4),l.Rb(5,"ul",5),l.Rb(6,"li",6),l.Rb(7,"a",7),l.dc("click",(function(){return n.headerData.headerData={name:"\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645",iconClasses:"fas fa-th-large"}})),l.Nb(8,"i",8),l.Hc(9," \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 "),l.Qb(),l.Qb(),l.Rb(10,"li",6),l.Rb(11,"a",9),l.dc("click",(function(){return n.headerData.headerData={name:"\u0627\u0644\u0639\u0645\u0644\u0627\u0621 ",iconClasses:"fas fa-user-friends"}})),l.Nb(12,"i",10),l.Hc(13," \u0627\u0644\u0639\u0645\u0644\u0627\u0621 "),l.Qb(),l.Qb(),l.Rb(14,"li",6),l.Rb(15,"a",11),l.dc("click",(function(){return n.headerData.headerData={name:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",iconClasses:"fas fa-home"}})),l.Nb(16,"i",12),l.Hc(17," \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 "),l.Qb(),l.Qb(),l.Rb(18,"li",6),l.Rb(19,"a",13),l.dc("click",(function(){return n.headerData.headerData={name:" \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631",iconClasses:"far fa-chart-bar"}})),l.Nb(20,"i",14),l.Hc(21," \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 "),l.Qb(),l.Qb(),l.Rb(22,"li",6),l.Rb(23,"a",15),l.dc("click",(function(){return n.headerData.headerData={name:"\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621",iconClasses:"fas fa-comment-alt"}})),l.Nb(24,"i",16),l.Hc(25," \u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 "),l.Qb(),l.Qb(),l.Rb(26,"li",6),l.Rb(27,"a",17),l.dc("click",(function(){return n.headerData.headerData={name:"\u0627\u0644\u0627\u0639\u062f\u0627\u062f\u062a",iconClasses:"fas fa-cog"}})),l.Nb(28,"i",18),l.Hc(29," \u0627\u0644\u0627\u0639\u062f\u0627\u062f\u062a "),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb())},directives:[u.e,u.d],styles:[""]}),t),f=a("IYfF"),h=((i=function(){function e(n,a,t){_classCallCheck(this,e),this.routeed=n,this.headerData=a,this.authService=t,n.firstChild.data.subscribe((function(e){a.headerData=e}))}return _createClass(e,[{key:"ngDoCheck",value:function(){}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)(l.Mb(u.a),l.Mb(d.a),l.Mb(f.a))},i.\u0275cmp=l.Gb({type:i,selectors:[["header"]],decls:17,vars:3,consts:[[1,"header"],[1,"row","no-gutters","justify-content-between"],[1,"col-md-4","d-flex"],[1,"sidebar-toggler","text-white","d-none","p-2","px-4",3,"click"],[1,"fas","fa-bars"],[1,"title","mt-1"],[1,"col-md-4"],[1,"settings","d-flex","w-100","justify-content-end"],["routerLink","/landing/comments",3,"click"],["_ngcontent-kpy-c20","",1,"fas","fa-comment-alt"],[1,"count"],[3,"click"],[1,"fas","fa-sign-out-alt"]],template:function(e,n){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"a",3),l.dc("click",(function(){return n.headerData.showSideBar=!n.headerData.showSideBar})),l.Nb(4,"i",4),l.Qb(),l.Rb(5,"div",5),l.Rb(6,"h3"),l.Nb(7,"i"),l.Hc(8),l.Qb(),l.Qb(),l.Qb(),l.Rb(9,"div",6),l.Rb(10,"div",7),l.Rb(11,"a",8),l.dc("click",(function(){return n.headerData.headerData={name:"\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621",iconClasses:"fas fa-comment-alt"}})),l.Nb(12,"i",9),l.Rb(13,"span",10),l.Hc(14,"12"),l.Qb(),l.Qb(),l.Rb(15,"a",11),l.dc("click",(function(){return n.authService.logout()})),l.Nb(16,"i",12),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(7),l.Bb(n.headerData.headerData.iconClasses),l.zb(1),l.Jc(" ",n.headerData.headerData.name," "))},directives:[u.e],styles:["a[_ngcontent-%COMP%]{cursor:pointer}"]}),i),m=[{path:"",component:(r=function(){function e(n){_classCallCheck(this,e),this.headerData=n}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),r.\u0275fac=function(e){return new(e||r)(l.Mb(d.a))},r.\u0275cmp=l.Gb({type:r,selectors:[["landing-layout"]],decls:14,vars:4,consts:[[1,"landing-layout"],[1,"row","no-gutters"],[1,"col-lg-2","col-md-3","col-4"],[1,"col-lg-10","col-md-9","col-8"],[1,"page-body"],[1,"container-fluid"],[1,"footer"],[1,"d-flex","py-3","justify-content-end"]],template:function(e,n){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Nb(3,"side-menu"),l.Qb(),l.Rb(4,"div",3),l.Nb(5,"header"),l.Rb(6,"div",4),l.Rb(7,"div",5),l.Nb(8,"router-outlet"),l.Qb(),l.Qb(),l.Rb(9,"div",6),l.Rb(10,"div",5),l.Rb(11,"div",7),l.Rb(12,"p"),l.Hc(13," \xa9 2020 Amlak Al Oula . All Rights Reserved "),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.Eb("show",n.headerData.showSideBar),l.zb(2),l.Eb("show",n.headerData.showSideBar))},directives:[b,h,u.g],styles:[""]}),r),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"2qzL")).then((function(e){return e.DashboardModule}))},data:{name:"\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645",iconClasses:"fas fa-th-large"}},{path:"clients",loadChildren:function(){return Promise.all([a.e(2),a.e(0),a.e(14)]).then(a.bind(null,"Hkv4")).then((function(e){return e.ClientsModule}))},data:{name:"\u0627\u0644\u0639\u0645\u0644\u0627\u0621 ",iconClasses:"fas fa-user-friends"}},{path:"projects",loadChildren:function(){return Promise.all([a.e(2),a.e(0),a.e(15)]).then(a.bind(null,"A6Zd")).then((function(e){return e.ProjectsModule}))},data:{name:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",iconClasses:"fas fa-home"}},{path:"reports",loadChildren:function(){return Promise.all([a.e(2),a.e(0),a.e(16)]).then(a.bind(null,"urco")).then((function(e){return e.ReportsModule}))},data:{name:" \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631",iconClasses:"far fa-chart-bar"}},{path:"comments",loadChildren:function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"VuTo")).then((function(e){return e.CommentsModule}))},data:{name:"\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621",iconClasses:"fas fa-comment-alt"}},{path:"settings",loadChildren:function(){return Promise.all([a.e(2),a.e(0),a.e(17)]).then(a.bind(null,"XEKE")).then((function(e){return e.SettingsModule}))},data:{name:"\u0627\u0644\u0627\u0639\u062f\u0627\u062f\u062a",iconClasses:"fas fa-cog"}}]}],v=((o=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:o}),o.\u0275inj=l.Jb({factory:function(e){return new(e||o)},imports:[[u.f.forChild(m)],u.f]}),o),k=((c=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:c}),c.\u0275inj=l.Jb({factory:function(e){return new(e||c)},imports:[[s.b,v]]}),c)},yByJ:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a("fXoL"),i=function(){var e=function e(){_classCallCheck(this,e),this.showSideBar=!1};return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);