import{W as F,b as c,d as u,e as f,f as d,r as g}from"./chunk-STZFE3XO.js";import{h as S,i as I,j as s,k as L,m as R}from"./chunk-KFKORNQW.js";import{$ as l,Hb as o,Ib as e,Jb as r,Lc as P,Ob as E,_a as M,_b as n,jb as m,kb as p}from"./chunk-ZGQDZTWT.js";var C=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-layout-pages"]],standalone:!1,decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(t,h){t&1&&(o(0,"div",0)(1,"div",1),r(2,"router-outlet"),e()())},dependencies:[S],encapsulation:2})};var y=class i{constructor(a,t){this.authService=a;this.router=t}onLogin(){this.authService.login("fabriciodandrea@gmail.com","12345").subscribe(a=>{this.router.navigate(["/"])})}static \u0275fac=function(t){return new(t||i)(M(R),M(I))};static \u0275cmp=m({type:i,selectors:[["app-login-page"]],standalone:!1,decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(t,h){t&1&&(o(0,"div",0)(1,"span",1),n(2,"Login"),e(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Usuario"),e(),r(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),n(9,"Contrase\xF1a"),e(),r(10,"input",3),e(),o(11,"button",4),E("click",function(){return h.onLogin()}),o(12,"mat-icon"),n(13,"save"),e(),n(14," Ingresar "),e(),o(15,"div",5)(16,"a",6),n(17,"\xBFYa tienes cuenta?"),e()()())},dependencies:[s,c,f,u,d,g],encapsulation:2})};var b=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-register-page"]],standalone:!1,decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(t,h){t&1&&(o(0,"div",0)(1,"span",1),n(2,"Registro"),e(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Usuario"),e(),r(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),n(9,"Nombre"),e(),r(10,"input",2),e(),o(11,"mat-form-field")(12,"mat-label"),n(13,"Contrase\xF1a"),e(),r(14,"input",3),e(),o(15,"button",4)(16,"mat-icon"),n(17,"save"),e(),n(18," Crear cuenta "),e(),o(19,"div",5)(20,"a",6),n(21,"\xBFNo tienes cuenta?"),e()()())},dependencies:[s,c,f,u,d,g],encapsulation:2})};var B=[{path:"",component:C,children:[{path:"login",component:y},{path:"new-account",component:b},{path:"**",redirectTo:"login"}]}],v=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=p({type:i});static \u0275inj=l({imports:[L.forChild(B),L]})};var D=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=p({type:i});static \u0275inj=l({imports:[P,v,F]})};export{D as AuthModule};