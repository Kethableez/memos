"use strict";(self.webpackChunkmemos=self.webpackChunkmemos||[]).push([[199],{8199:(b,g,i)=>{i.r(g),i.d(g,{SummaryComponent:()=>O});var s=i(6814),l=i(9397),u=i(2181),t=i(4946),m=i(7382),_=i(8489);function d(o,c){if(1&o&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&o){const e=t.oxw().ngIf;t.xp6(1),t.AsE(" Uczenie uko\u0144czy\u0142e\u015b w ",e.time.min," minut i ",e.time.sec," sekund ")}}function p(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",9),t._uU(4),t.qZA()()),2&o){const e=c.$implicit;t.xp6(2),t.Oqu(e.question),t.xp6(2),t.Oqu(e.num)}}function h(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",1),t.YNc(1,d,2,2,"h2",2),t._UZ(2,"hr"),t.TgZ(3,"div",3)(4,"h4"),t._uU(5,"Bezproblemowe pytania"),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._uU(8),t.qZA()(),t.TgZ(9,"h4"),t._uU(10,"Problemowe pytania"),t.qZA(),t.TgZ(11,"div",4)(12,"div",6),t._uU(13),t.qZA()(),t.TgZ(14,"div",7)(15,"table",8)(16,"thead")(17,"tr")(18,"th"),t._uU(19,"Pytanie"),t.qZA(),t.TgZ(20,"th",9),t._uU(21,"B\u0142\u0119dy"),t.qZA()()(),t.TgZ(22,"tbody",10),t.YNc(23,p,5,2,"tr",11),t.qZA()()()(),t.TgZ(24,"div",12)(25,"button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.redirectToInit())}),t._uU(26," Rozpocznij od nowa "),t.qZA()()()}if(2&o){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",e.time),t.xp6(6),t.Udp("width",n.getWidth(e,"correct"),"%"),t.xp6(1),t.hij(" ",n.getLabel(e,"correct")," "),t.xp6(4),t.Udp("width",n.getWidth(e,"wrong"),"%"),t.xp6(1),t.hij(" ",n.getLabel(e,"wrong")," "),t.xp6(10),t.Q6J("ngForOf",n.getProblematicQuestionsRows(e))}}let O=(()=>{var o;class c{constructor(n,r){this.summaryService=n,this.router=r,this.summary$=this.summaryService.summary$.pipe((0,l.b)(a=>{a||this.router.navigateByUrl("/learning/init")}),(0,u.h)(a=>!!a))}ngOnInit(){}getWidth(n,r){return"wrong"===r?Object.keys(n.problematic).length/n.totalQuestions*100:n.nonProblematic/n.totalQuestions*100}getLabel(n,r){return"wrong"===r?`${Object.keys(n.problematic).length} / ${n.totalQuestions}`:`${n.nonProblematic} / ${n.totalQuestions}`}getProblematicQuestionsRows(n){return Object.entries(n.problematic).map(r=>({question:r[0],num:r[1]}))}redirectToInit(){this.router.navigateByUrl("/learning/init")}}return(o=c).\u0275fac=function(n){return new(n||o)(t.Y36(m.J),t.Y36(_.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ktbz-summary"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[["class","card",4,"ngIf"],[1,"card"],[4,"ngIf"],[1,"cardContainer"],["role","progressbar",1,"progress","mb-2"],[1,"progress-bar","bg-success"],[1,"progress-bar","bg-danger"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[1,"scrollable"],[4,"ngFor","ngForOf"],[1,"buttons"],[1,"btn","btn-secondary",3,"click"]],template:function(n,r){1&n&&(t.YNc(0,h,27,8,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.summary$))},dependencies:[s.ez,s.sg,s.O5,s.Ov],styles:["@media screen and (max-width: 992px){.card[_ngcontent-%COMP%]{width:100vw;height:100dvh}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:1}.buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 993px){.card[_ngcontent-%COMP%]{width:1020px}.buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:40%}}.card[_ngcontent-%COMP%]{padding:32px}.cardContainer[_ngcontent-%COMP%]{flex-grow:1}.text-right[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.scrollable[_ngcontent-%COMP%]{max-height:100px;overflow-x:auto}.table-responsive[_ngcontent-%COMP%]{height:400px;overflow:scroll}.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar{opacity:0}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)   th[_ngcontent-%COMP%]{background:white;position:sticky;top:0;z-index:10}"],changeDetection:0}),c})()}}]);