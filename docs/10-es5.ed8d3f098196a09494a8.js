function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ESPs:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),r=o("3Pt+"),c=o("+0xr"),i=o("tyNb"),a=o("fXoL"),b=o("yTNM");function l(t,e){if(1&t&&(a.Tb(0,"div",2),a.Tb(1,"h3",29),a.wc(2," Moedas "),a.Sb(),a.Tb(3,"div",30),a.Tb(4,"p",3),a.wc(5),a.Sb(),a.Sb(),a.Sb()),2&t){var o=a.fc();a.Cb(5),a.yc(" ",o.lootShow.money," ")}}function u(t,e){if(1&t&&(a.Tb(0,"div",2),a.Tb(1,"h3",29),a.wc(2," Tesouro "),a.Sb(),a.Tb(3,"div",30),a.Tb(4,"p",3),a.wc(5),a.Sb(),a.Sb(),a.Sb()),2&t){var o=a.fc();a.Cb(5),a.yc(" ",o.lootShow.gemArts," ")}}function s(t,e){if(1&t&&(a.Tb(0,"p",3),a.wc(1),a.Sb()),2&t){var o=e.$implicit;a.Cb(1),a.yc(" ",o," ")}}function v(t,e){if(1&t&&(a.Tb(0,"div",2),a.Tb(1,"h3",29),a.wc(2," Itens M\xe1gicos "),a.Sb(),a.Tb(3,"div",30),a.vc(4,s,2,1,"p",31),a.Sb(),a.Sb()),2&t){var o=a.fc();a.Cb(4),a.kc("ngForOf",o.lootShow.magItems)}}function f(t,e){1&t&&(a.Tb(0,"div",2),a.Tb(1,"div",32),a.Tb(2,"p",3),a.wc(3," Sem Loot "),a.Sb(),a.Sb(),a.Sb())}function h(t,e){if(1&t&&(a.Tb(0,"option",33),a.wc(1),a.Sb()),2&t){var o=e.$implicit;a.kc("value",o),a.Cb(1),a.yc(" ",o," ")}}function d(t,e){1&t&&(a.Tb(0,"th",34),a.Tb(1,"p"),a.wc(2,"Cobre"),a.Sb(),a.Sb())}function m(t,e){if(1&t&&(a.Tb(0,"td",35),a.Tb(1,"p"),a.wc(2),a.gc(3,"number"),a.Sb(),a.Sb()),2&t){var o=e.$implicit;a.Cb(2),a.yc(" ",a.hc(3,1,o.cobre),"")}}function p(t,e){1&t&&(a.Tb(0,"th",34),a.Tb(1,"p"),a.wc(2,"Prata"),a.Sb(),a.Sb())}function S(t,e){if(1&t&&(a.Tb(0,"td",35),a.Tb(1,"p"),a.wc(2),a.gc(3,"number"),a.Sb(),a.Sb()),2&t){var o=e.$implicit;a.Cb(2),a.xc(a.hc(3,1,o.prata))}}function T(t,e){1&t&&(a.Tb(0,"th",34),a.Tb(1,"p"),a.wc(2,"Electrum"),a.Sb(),a.Sb())}function g(t,e){if(1&t&&(a.Tb(0,"td",35),a.Tb(1,"p"),a.wc(2),a.gc(3,"number"),a.Sb(),a.Sb()),2&t){var o=e.$implicit;a.Cb(2),a.yc("",a.hc(3,1,o.electrum)," ")}}function w(t,e){1&t&&(a.Tb(0,"th",34),a.Tb(1,"p"),a.wc(2,"Ouro"),a.Sb(),a.Sb())}function C(t,e){if(1&t&&(a.Tb(0,"td",35),a.Tb(1,"p"),a.wc(2),a.gc(3,"number"),a.Sb(),a.Sb()),2&t){var o=e.$implicit;a.Cb(2),a.xc(a.hc(3,1,o.ouro))}}function k(t,e){1&t&&(a.Tb(0,"th",34),a.Tb(1,"p"),a.wc(2,"Platina"),a.Sb(),a.Sb())}function y(t,e){if(1&t&&(a.Tb(0,"td",35),a.Tb(1,"p"),a.wc(2),a.gc(3,"number"),a.Sb(),a.Sb()),2&t){var o=e.$implicit;a.Cb(2),a.xc(a.hc(3,1,o.platina))}}function L(t,e){1&t&&a.Ob(0,"tr",36)}function I(t,e){1&t&&a.Ob(0,"tr",37)}var D,M,x=[{cobre:0,prata:0,electrum:0,ouro:0,platina:0}],O=[{path:"",component:(D=function(){function t(e){_classCallCheck(this,t),this.apiService=e,this.lootShow={money:"",gemArts:"",magItems:[]},this.lootNone=!1,this.selectOptions=["Cobre","Prata","Electrum","Ouro","Platina"],this.selectedOption="Escolha uma Moeda",this.displayedColumnsConvert=["cobre","prata","electrum","ouro","platina"],this.dataSourceConvert=new c.k(x)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"genLoot",value:function(t){var e=this;this.reset();var o=this.rollDice(100);this.switch(t),setTimeout((function(){var t=e.lootSelected.filter((function(t){return t.roll>=o}))[0];Object.keys(t).forEach((function(o){if(t[o].quant){var n,r,c=new Array(parseInt(t[o].quant)).fill(null),i=(c=c.map((function(){return e.rollDice(t[o].sides,1)}))).reduce((function(t,e){return t+e}),0);"piece1"==o&&(e.lootShow.money+=i*t[o].multiply,e.lootShow.money+=" ".concat(t[o].type)),"piece2"==o&&(e.lootShow.money+=", "+i*t[o].multiply,e.lootShow.money+=" ".concat(t[o].type)),"gemArt"==o&&("Gemas"==t[o].type?e.apiService.gems().subscribe((function(e){return n=e[t[o].table]})):e.apiService.art().subscribe((function(e){return n=e[t[o].table]})),setTimeout((function(){var r=new Array(parseInt(i)).fill(null);r=r.map((function(){return" "+n[e.rollDice(n.length-1)]})),e.lootShow.gemArts+=r,e.lootShow.gemArts+=" (".concat(r.length*parseInt(t[o].table)," GP Total)")}),300)),"magItemA"!=o&&"magItemB"!=o||(e.apiService.magItem().subscribe((function(e){r=e[t[o].table]})),setTimeout((function(){for(var n=e.rollDice(t[o].sides),c=new Array(n).fill(""),i=function(t){var o=e.rollDice(100),n=r.filter((function(t){return t.roll>=o}));c[t]+="\u2022 ".concat(n[0].name,", LDJ pg.").concat(n[0].page)},a=0;a<n;a++)i(a);e.lootShow.magItems=c}),300))}}))}),300),setTimeout((function(){e.lootNone=0==e.lootShow.magItems.length&&""==e.lootShow.gemArts&&""==e.lootShow.money}),650)}},{key:"switch",value:function(t){var e=this;switch(t){case 1:this.apiService.getLootIndividual0to4().subscribe((function(t){return e.lootSelected=t}));break;case 2:this.apiService.getLootIndividual5to10().subscribe((function(t){return e.lootSelected=t}));break;case 3:this.apiService.getLootIndividual11to16().subscribe((function(t){return e.lootSelected=t}));break;case 4:this.apiService.getLootIndividual17plus().subscribe((function(t){return e.lootSelected=t}));break;case 5:this.apiService.getLootHoard0to4().subscribe((function(t){return e.lootSelected=t}));break;case 6:this.apiService.getLootHoard5to10().subscribe((function(t){return e.lootSelected=t}));break;case 7:this.apiService.getLootHoard11to16().subscribe((function(t){return e.lootSelected=t}));break;case 8:this.apiService.getLootHoard17plus().subscribe((function(t){return e.lootSelected=t}))}}},{key:"reset",value:function(){this.lootShow={money:"",gemArts:"",magItems:[]}}},{key:"convertPiece",value:function(){switch(this.selectedOption){case"Cobre":x[0].cobre=this.valorToConvert,x[0].prata=this.valorToConvert/10,x[0].electrum=this.valorToConvert/50,x[0].ouro=this.valorToConvert/100,x[0].platina=this.valorToConvert/1e3;break;case"Prata":x[0].cobre=10*this.valorToConvert,x[0].prata=this.valorToConvert,x[0].electrum=this.valorToConvert/5,x[0].ouro=this.valorToConvert/10,x[0].platina=this.valorToConvert/100;break;case"Electrum":x[0].cobre=50*this.valorToConvert,x[0].prata=5*this.valorToConvert,x[0].electrum=this.valorToConvert,x[0].ouro=this.valorToConvert/2,x[0].platina=this.valorToConvert/20;break;case"Ouro":x[0].cobre=100*this.valorToConvert,x[0].prata=10*this.valorToConvert,x[0].electrum=2*this.valorToConvert,x[0].ouro=this.valorToConvert,x[0].platina=this.valorToConvert/10;break;case"Platina":x[0].cobre=1e3*this.valorToConvert,x[0].prata=100*this.valorToConvert,x[0].electrum=20*this.valorToConvert,x[0].ouro=10*this.valorToConvert,x[0].platina=this.valorToConvert}}},{key:"rollDice",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}]),t}(),D.\u0275fac=function(t){return new(t||D)(a.Nb(b.a))},D.\u0275cmp=a.Hb({type:D,selectors:[["app-loot-generator"]],decls:77,vars:10,consts:[[1,"container"],[1,"row","bg-header","mt-3","pl-2","pt-2"],[1,"row"],[1,"text-white"],[1,"row","bg-grunge-black","mt-3","pb-2"],[1,"col-12","pt-2","pb-2"],[1,"col"],[1,"btn","btn-danger","w-100",3,"click"],["class","row",4,"ngIf"],[1,"bg-table"],[1,"row","p-3","bg-grunge-black","justify-content-center"],[1,"col-6","col-sm-4"],["min","0","type","number","value","Valor","required","",1,"form-control","flex-fill",3,"ngModel","ngModelChange"],["required","","id","piece","name","piece",1,"custom-select","flex-fill",3,"ngModel","ngModelChange"],["selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","col-sm-4"],[1,"btn","bg-danger","w-100","text-white",3,"click"],[1,"col-12"],["mat-table","",1,"bg-convert","w-100",3,"dataSource"],["matColumnDef","cobre"],["mat-header-cell","","class","text-light text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-light text-center",4,"matCellDef"],["matColumnDef","prata"],["matColumnDef","electrum"],["matColumnDef","ouro"],["matColumnDef","platina"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"text-white","w-100","p-2"],[1,"col-12","bg-grunge-black","p-3"],["class","text-white",4,"ngFor","ngForOf"],[1,"col-12","mt-3","bg-danger","p-3"],[3,"value"],["mat-header-cell","",1,"text-light","text-center"],["mat-cell","",1,"text-light","text-center"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"h2"),a.wc(3,"Loot Generator"),a.Sb(),a.Sb(),a.Tb(4,"div",2),a.Tb(5,"h3",3),a.wc(6,"Determine o tipo e n\xedvel do encontro"),a.Sb(),a.Sb(),a.Tb(7,"div",4),a.Tb(8,"div",5),a.Tb(9,"p",3),a.wc(10,"Tesouro individual"),a.Sb(),a.Sb(),a.Tb(11,"div",6),a.Tb(12,"button",7),a.bc("click",(function(t){return e.genLoot(1)})),a.wc(13,"0-4"),a.Sb(),a.Sb(),a.Tb(14,"div",6),a.Tb(15,"button",7),a.bc("click",(function(t){return e.genLoot(2)})),a.wc(16,"5-10"),a.Sb(),a.Sb(),a.Tb(17,"div",6),a.Tb(18,"button",7),a.bc("click",(function(t){return e.genLoot(3)})),a.wc(19,"11-16"),a.Sb(),a.Sb(),a.Tb(20,"div",6),a.Tb(21,"button",7),a.bc("click",(function(t){return e.genLoot(4)})),a.wc(22,"17+"),a.Sb(),a.Sb(),a.Sb(),a.Tb(23,"div",4),a.Tb(24,"div",5),a.Tb(25,"p",3),a.wc(26,"Reservas de tesouro"),a.Sb(),a.Sb(),a.Tb(27,"div",6),a.Tb(28,"button",7),a.bc("click",(function(t){return e.genLoot(5)})),a.wc(29,"0-4"),a.Sb(),a.Sb(),a.Tb(30,"div",6),a.Tb(31,"button",7),a.bc("click",(function(t){return e.genLoot(6)})),a.wc(32,"5-10"),a.Sb(),a.Sb(),a.Tb(33,"div",6),a.Tb(34,"button",7),a.bc("click",(function(t){return e.genLoot(7)})),a.wc(35,"11-16"),a.Sb(),a.Sb(),a.Tb(36,"div",6),a.Tb(37,"button",7),a.bc("click",(function(t){return e.genLoot(8)})),a.wc(38,"17+"),a.Sb(),a.Sb(),a.Sb(),a.vc(39,l,6,1,"div",8),a.vc(40,u,6,1,"div",8),a.vc(41,v,5,1,"div",8),a.vc(42,f,4,0,"div",8),a.Tb(43,"div",1),a.Tb(44,"h2"),a.wc(45,"Conversor de Moedas"),a.Sb(),a.Sb(),a.Tb(46,"div",9),a.Tb(47,"div",10),a.Tb(48,"div",11),a.Tb(49,"input",12),a.bc("ngModelChange",(function(t){return e.valorToConvert=t})),a.Sb(),a.Sb(),a.Tb(50,"div",11),a.Tb(51,"select",13),a.bc("ngModelChange",(function(t){return e.selectedOption=t})),a.Tb(52,"option",14),a.wc(53,"Escolha uma Moeda"),a.Sb(),a.vc(54,h,2,2,"option",15),a.Sb(),a.Sb(),a.Tb(55,"div",16),a.Tb(56,"button",17),a.bc("click",(function(t){return e.convertPiece()})),a.wc(57,"Converter"),a.Sb(),a.Sb(),a.Tb(58,"div",18),a.Tb(59,"table",19),a.Rb(60,20),a.vc(61,d,3,0,"th",21),a.vc(62,m,4,3,"td",22),a.Qb(),a.Rb(63,23),a.vc(64,p,3,0,"th",21),a.vc(65,S,4,3,"td",22),a.Qb(),a.Rb(66,24),a.vc(67,T,3,0,"th",21),a.vc(68,g,4,3,"td",22),a.Qb(),a.Rb(69,25),a.vc(70,w,3,0,"th",21),a.vc(71,C,4,3,"td",22),a.Qb(),a.Rb(72,26),a.vc(73,k,3,0,"th",21),a.vc(74,y,4,3,"td",22),a.Qb(),a.vc(75,L,1,0,"tr",27),a.vc(76,I,1,0,"tr",28),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(39),a.kc("ngIf",e.lootShow.money),a.Cb(1),a.kc("ngIf",e.lootShow.gemArts),a.Cb(1),a.kc("ngIf",0!=e.lootShow.magItems.length),a.Cb(1),a.kc("ngIf",e.lootNone),a.Cb(7),a.kc("ngModel",e.valorToConvert),a.Cb(2),a.kc("ngModel",e.selectedOption),a.Cb(3),a.kc("ngForOf",e.selectOptions),a.Cb(5),a.kc("dataSource",e.dataSourceConvert),a.Cb(16),a.kc("matHeaderRowDef",e.displayedColumnsConvert),a.Cb(1),a.kc("matRowDefColumns",e.displayedColumnsConvert))},directives:[n.l,r.o,r.a,r.q,r.j,r.m,r.r,r.n,r.s,n.k,c.j,c.c,c.e,c.b,c.g,c.i,c.d,c.a,c.f,c.h],pipes:[n.e],styles:[""]}),D)}],P=((M=function t(){_classCallCheck(this,t)}).\u0275mod=a.Lb({type:M}),M.\u0275inj=a.Kb({factory:function(t){return new(t||M)},imports:[[i.c.forChild(O)],i.c]}),M);o.d(e,"LootGeneratorModule",(function(){return R}));var A,R=((A=function t(){_classCallCheck(this,t)}).\u0275mod=a.Lb({type:A}),A.\u0275inj=a.Kb({factory:function(t){return new(t||A)},imports:[[n.c,P,r.h,c.l]]}),A)}}]);