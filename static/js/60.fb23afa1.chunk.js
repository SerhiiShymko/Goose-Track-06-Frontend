"use strict";(self.webpackChunkGoose_Track_06_Frontend=self.webpackChunkGoose_Track_06_Frontend||[]).push([[60],{5060:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o=t(1852),d=t(2791),c=t(7689),s=t(9439),y=t(8205),p=t(9098),u=t(168),f=t(6487),x=t(1087),l=f.zo.div(r||(r=(0,u.Z)(["\n  display: flex;\n  margin-top: 18px;\n  color: #3e85f3;\n  text-align: center;\n  /* font-family: Inter; */\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"]))),v=(0,f.zo)(x.OL)(a||(a=(0,u.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px 0px 0px 8px;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n  background: ",";\n  cursor: pointer;\n"])),(function(n){return!0===n.$active?"#cae8ff":"#e3f3ff"})),h=(0,f.zo)(x.OL)(i||(i=(0,u.Z)(["\n  padding: 8px 25px;\n  border-radius: 0px 8px 8px 0px;\n  background: ",";\n  cursor: pointer;\n"])),(function(n){return!0===n.$active?"#cae8ff":"#e3f3ff"})),m=t(9434),g=t(4217),Z=t(184),M=function(n){var e=n.periodType,t=(0,d.useState)(),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,m.v9)(g.VI),c=(0,p.Z)(o,"yyyy-MM-dd"),y=(0,p.Z)(o,"yyyy-MM");return(0,Z.jsxs)(l,{children:[(0,Z.jsx)(v,{to:"month/".concat(y),$active:a,onClick:function(){i(!0),e("month")},children:"Month"}),(0,Z.jsx)(h,{to:"day/".concat(c),$active:!a,onClick:function(){i(!1),e("day")},children:"Day"})]})},k=t(9980),T=function(n){var e=n.dayInterval,t=n.onNext,r=n.onPrev,a=n.dateToday,i=n.onClickDate,o=n.activePeriod,d=n.periodType;return(0,Z.jsxs)(y.im,{children:[(0,Z.jsx)(k.d,{dayInterval:e,onNext:t,onPrev:r,dateToday:a,onClickDate:i,activePeriod:o}),(0,Z.jsx)(M,{periodType:d})]})},j=t(1941),z=t(9105),b=t(9365),w=t(3629),C=t(4565),D=t(4888),I=t(3541),P=function(){var n=(0,m.I0)(),e=(0,c.TH)(),t=(0,d.useState)("month"),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,m.v9)((function(n){return n.auth.currentDate})),y=(0,p.Z)(o,"MMMM yyyy"),u=(0,p.Z)(o,"yyyy-MM-dd"),f=(0,j.Z)(y,"MMMM yyyy",o),x=(0,j.Z)(u,"yyyy-MM-dd",o),l=(0,b.Z)({start:(0,w.Z)(f,{weekStartsOn:1}),end:(0,C.Z)((0,D.Z)(f),{weekStartsOn:1})});return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(T,{dayInterval:l,onNext:function(){if("day"===a||"/statistics"===e.pathname){var t=(0,z.Z)(x,{days:1}).getTime();n((0,I.vz)(t))}else{var r=(0,z.Z)(x,{months:1}).getTime();n((0,I.vz)(r))}},onPrev:function(){if("day"===a||"/statistics"===e.pathname){var t=(0,z.Z)(x,{days:-1}).getTime();n((0,I.vz)(t))}else{var r=(0,z.Z)(x,{months:-1}).getTime();n((0,I.vz)(r))}},dateToday:y,onClickDate:function(e){var t=e.currentTarget.dataset.day.split("-"),r=new Date(t[0],t[1]-1,t[2]).getTime();n((0,I.vz)(r))},periodType:i,activePeriod:a})})},_=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(d.Suspense,{fallback:(0,Z.jsx)(o.Z,{}),children:(0,Z.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=60.fb23afa1.chunk.js.map