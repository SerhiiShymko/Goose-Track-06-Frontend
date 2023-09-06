"use strict";(self.webpackChunkGoose_Track_06_Frontend=self.webpackChunkGoose_Track_06_Frontend||[]).push([[679],{7679:function(n,t,e){e.r(t),e.d(t,{default:function(){return W}});var r,i,o,a=e(9439),d=e(9980),s=e(2791),c=e(6487),l=e(601),u=e(6123),f=e(2839),p=e(3672),h=e(466),x=e(2891),y=e(5667),g=e(4400),m=e(7762),v=function(n){var t,e=0,r=0,i=0,o=(0,m.Z)(n);try{for(o.s();!(t=o.n()).done;){var a=t.value;"to-do"===a.category&&e++,"in-progress"===a.category&&r++,"done"===a.category&&i++}}catch(d){o.e(d)}finally{o.f()}return{toDo:e,inProgress:r,done:i}},w=function(n){for(var t=0,e=0,r=Object.values(n);e<r.length;e++){t+=r[e]}return t},k=function(n,t){return Math.round(n/t*100)},Z=function(){var n=(0,s.useState)(0),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){var n=function(){return r(window.innerWidth)};return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),e},j=e(2553),D=e(184),M=function(n){var t=n.color,e=n.id;return(0,D.jsx)("defs",{children:(0,D.jsxs)("linearGradient",{id:e,x1:"0",y1:"0",x2:"0",y2:"100%",children:[(0,D.jsx)("stop",{offset:"0%",stopColor:"#fff",stopOpacity:0}),(0,D.jsx)("stop",{offset:"100%",stopColor:t,stopOpacity:.8})]})})},b=function(n){var t=n.x,e=n.y,r=n.value,i=n.fill;return(0,D.jsx)("g",{children:(0,D.jsx)("text",{x:t,y:e,fill:i,children:r})})},T=e(168),z=c.ZP.div(r||(r=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 44px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 307px;\n  height: 413px;\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 20px;\n  border: 2px solid #e3f3ff;\n\n  @media screen and (min-width: 768px) {\n    width: 640px;\n    height: 424px;\n    padding: 10px 18px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n    padding: 10px 26px;\n  }\n"]))),B=c.ZP.div(i||(i=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 28px 14px;\n  margin-top: 64px;\n  width: 335px;\n  height: 684px;\n  border-radius: 16px;\n  background-color: #fff;\n  background-color: ",";\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media screen and (min-width: 768px) {\n    align-items: center;\n    width: 704px;\n    height: 854px;\n    padding: 132px 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n    padding: 134px 113px;\n  }\n"])),(function(n){return n.theme.colors.backgroundAccent})),S=c.ZP.div(o||(o=(0,T.Z)(["\n  display: block;\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    margin-left: 100px;\n  }\n"]))),P=e(9434),C=function(n){var t=n.currentDate,e=(0,P.v9)(j.Uq),r=(0,c.Fg)(),i=Z(),o=v(function(n,t){return n.filter((function(n){return n.date===t}))}(e,t)),a=function(n,t){var e=w(n),r=w(t);return[{name:"To Do",day:k(n.toDo,e)||0,month:k(t.toDo,r)||0},{name:"In Progress",day:k(n.inProgress,e)||0,month:k(t.inProgress,r)||0},{name:"Done",day:k(n.done,e)||0,month:k(t.done,r)||0}]}(o,v(e));return(0,D.jsx)(z,{children:(0,D.jsx)(l.h,{width:"100%",height:"97%",children:(0,D.jsxs)(u.v,{margin:{top:70,right:14,left:14,bottom:0},data:a,barGap:i<768?8:14,barSize:i<768?22:27,barBorderRadius:5,children:[(0,D.jsx)(f.q,{vertical:!1}),(0,D.jsx)(p.D,{formatter:function(n){return"By "+n.charAt(0).toUpperCase()+n.slice(1)},width:179,height:18,align:i<768?"left":"right",iconType:"circle",wrapperStyle:{fontSize:i<768?14:16,top:i<768?-40:-90,color:r.colors.colorBody}}),(0,D.jsx)(h.K,{dataKey:"name",tick:{fill:r.colors.colorBody},tickMargin:18,tickLine:!1,axisLine:!1}),(0,D.jsx)(x.B,{tickLine:!1,type:"number",domain:[0,100],tickCount:7,tick:{fontWeight:400,fill:r.colors.colorBody},axisLine:!1,tickMargin:25}),(0,D.jsx)(y.u,{}),b({x:22,y:35,value:"Tasks",offset:50,fontWeight:600,fill:r.colors.colorBody}),M({color:"#FFD2DD",id:"linearDay"}),M({color:"#3E85F3",id:"linearMonth"}),(0,D.jsx)(g.$,{dataKey:"day",fill:"url(#linearDay)",radius:8,label:{formatter:function(n){return n+"%"},fill:r.colors.colorBody,fontSize:i<768?12:16,position:"top",weight:500}}),(0,D.jsx)(g.$,{dataKey:"month",fill:"url(#linearMonth)",radius:8,label:{formatter:function(n){return n+"%"},fill:r.colors.colorBody,fontSize:i<768?12:16,position:"top",weight:500}})]})})})},F=e(9098),L=e(1941),_=e(9105),E=e(9365),O=e(3629),G=e(4565),K=e(4888),q=e(8427),I=e(7689),U=e(3541),W=function(){var n=(0,I.TH)(),t=(0,P.I0)(),e=(0,F.Z)(new Date,"yyyy-MM-dd"),r=(0,s.useState)(e),i=(0,a.Z)(r,2),o=i[0],c=i[1],l=o.slice(0,7);(0,s.useEffect)((function(){t((0,q.Jv)(l))}),[t,l]);var u=(0,P.v9)((function(n){return n.auth.currentDate})),f=(0,F.Z)(u,"MMMM yyyy"),p=(0,F.Z)(u,"yyyy-MM-dd"),h=(0,L.Z)(f,"MMMM yyyy",new Date),x=(0,L.Z)(p,"yyyy-MM-dd",new Date),y=(0,E.Z)({start:(0,O.Z)(h,{weekStartsOn:1}),end:(0,G.Z)((0,K.Z)(h),{weekStartsOn:1})});return(0,D.jsxs)(B,{children:[(0,D.jsx)(S,{children:(0,D.jsx)(d.d,{dayInterval:y,onNext:function(){if("day"===n.pathname.slice(10,13)||"/statistics"===n.pathname){var e=(0,_.Z)(x,{days:1}).getTime();t((0,U.vz)(e))}else{var r=(0,_.Z)(h,{months:1}).getTime();t((0,U.vz)(r))}},onPrev:function(){if("day"===n.pathname.slice(10,13)||"/statistics"===n.pathname){var e=(0,_.Z)(x,{days:-1}).getTime();t((0,U.vz)(e))}else{var r=(0,_.Z)(h,{months:-1}).getTime();t((0,U.vz)(r))}},dateToday:f,onClickDate:function(n){var e=n.currentTarget.dataset.day;c(e);var r=e.split("-"),i=new Date(r[0],r[1]-1,r[2]).getTime();t((0,U.vz)(i))}})}),(0,D.jsx)(C,{currentDate:o})]})}},2553:function(n,t,e){e.d(t,{Uq:function(){return r}});var r=function(n){return n.tasks.items}}}]);
//# sourceMappingURL=679.21577e83.chunk.js.map