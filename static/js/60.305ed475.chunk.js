"use strict";(self.webpackChunkGoose_Track_06_Frontend=self.webpackChunkGoose_Track_06_Frontend||[]).push([[60],{5060:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var a,r,i,o=t(1852),c=t(2791),s=t(7689),d=t(8205),u=t(9439),y=t(9098),f=t(168),l=t(6487),x=t(1087),p=l.zo.div(a||(a=(0,f.Z)(["\n  display: flex;\n  margin-top: 18px;\n  color: #3e85f3;\n  text-align: center;\n  /* font-family: Inter; */\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"]))),v=(0,l.zo)(x.OL)(r||(r=(0,f.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px 0px 0px 8px;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n  background: ",";\n  cursor: pointer;\n"])),(function(n){return!0===n.$active?"#cae8ff":"#e3f3ff"})),h=(0,l.zo)(x.OL)(i||(i=(0,f.Z)(["\n  padding: 8px 25px;\n  border-radius: 0px 8px 8px 0px;\n  background: ",";\n  cursor: pointer;\n"])),(function(n){return!0===n.$active?"#cae8ff":"#e3f3ff"})),m=t(9434),g=t(4217),Z=t(184),M=function(){var n=(0,c.useState)(),e=(0,u.Z)(n,2),t=e[0],a=e[1],r=(0,m.v9)(g.VI),i=(0,y.Z)(r,"yyyy-MM-dd"),o=(0,y.Z)(r,"yyyy-MM");return(0,Z.jsxs)(p,{children:[(0,Z.jsx)(v,{to:"month/".concat(o),$active:t,onClick:function(){return a(!0)},children:"Month"}),(0,Z.jsx)(h,{to:"day/".concat(i),$active:!t,onClick:function(){return a(!1)},children:"Day"})]})},k=t(9980),j=function(n){var e=n.dayInterval,t=n.onNext,a=n.onPrev,r=n.dateToday,i=n.onClickDate;return(0,Z.jsxs)(d.im,{children:[(0,Z.jsx)(k.d,{dayInterval:e,onNext:t,onPrev:a,dateToday:r,onClickDate:i}),(0,Z.jsx)(M,{})]})},T=t(1941),z=t(9105),b=t(9365),w=t(3629),D=t(4565),C=t(4888),I=t(3541),_=function(){var n=(0,m.I0)(),e=(0,s.TH)(),t=(0,m.v9)((function(n){return n.auth.currentDate})),a=(0,y.Z)(t,"MMMM yyyy"),r=(0,y.Z)(t,"yyyy-MM-dd"),i=(0,T.Z)(a,"MMMM yyyy",new Date),o=(0,T.Z)(r,"yyyy-MM-dd",new Date),c=(0,b.Z)({start:(0,w.Z)(i,{weekStartsOn:1}),end:(0,D.Z)((0,C.Z)(i),{weekStartsOn:1})});return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(j,{dayInterval:c,onNext:function(){if("day"===e.pathname.slice(10,13)||"/statistics"===e.pathname){var t=(0,z.Z)(o,{days:1}).getTime();n((0,I.vz)(t))}else{var a=(0,z.Z)(i,{months:1}).getTime();n((0,I.vz)(a))}},onPrev:function(){if("day"===e.pathname.slice(10,13)||"/statistics"===e.pathname){var t=(0,z.Z)(o,{days:-1}).getTime();n((0,I.vz)(t))}else{var a=(0,z.Z)(i,{months:-1}).getTime();n((0,I.vz)(a))}},dateToday:a,onClickDate:function(e){var t=e.currentTarget.dataset.day.split("-"),a=new Date(t[0],t[1]-1,t[2]).getTime();n((0,I.vz)(a))}})})},F=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(_,{}),(0,Z.jsx)(c.Suspense,{fallback:(0,Z.jsx)(o.Z,{}),children:(0,Z.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=60.305ed475.chunk.js.map