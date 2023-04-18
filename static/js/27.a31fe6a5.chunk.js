"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[27],{545:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,i,o=e(168),s=e(6444),c=s.ZP.div(r||(r=(0,o.Z)(["\n  margin: 10px auto 20px;\n  width: 160px;\n  height: 60px;\n  position: relative;\n  /* left: 50%; */\n  /* top: 50%; */\n  /* transform: translate(-50%, -50%); */\n"]))),u=s.ZP.div(a||(a=(0,o.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #3f51b5;\n  left: 15%;\n  transform-origin: 50%;\n  animation: circle 300ms alternate infinite ease;\n\n  @keyframes circle {\n    0% {\n      top: 60%;\n      height: 5px;\n      border-radius: 50px 50px 25px 25px;\n    }\n    40% {\n      height: 20px;\n      border-radius: 50%;\n      transform: scaleX(1);\n    }\n    100% {\n      top: 0%;\n    }\n  }\n  :nth-child(2) {\n    left: 45%;\n    animation-delay: 100ms;\n  }\n  :nth-child(3) {\n    left: auto;\n    right: 15%;\n    animation-delay: 200ms;\n  }\n"]))),l=s.ZP.div(i||(i=(0,o.Z)(["\n  width: 20px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 220, 0.5);\n  position: absolute;\n  top: 62px;\n  transform-origin: 50%;\n  z-index: -1;\n  left: 15%;\n  filter: blur(1px);\n  animation: shadow 300ms alternate infinite ease;\n  @keyframes shadow {\n    0% {\n      transform: scaleX(1.5);\n    }\n    40% {\n      transform: scaleX(1);\n      opacity: 0.7;\n    }\n    100% {\n      transform: scaleX(0.2);\n      opacity: 0.4;\n    }\n  }\n  :nth-child(4) {\n    left: 45%;\n    animation-delay: 100ms;\n  }\n  :nth-child(5) {\n    left: auto;\n    right: 15%;\n    animation-delay: 200ms;\n  }\n"]))),f=e(184),h=function(){return(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{}),(0,f.jsx)(u,{}),(0,f.jsx)(u,{}),(0,f.jsx)(l,{}),(0,f.jsx)(l,{}),(0,f.jsx)(l,{})]})}},5545:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(1087),i=e(168),o=e(6444).ZP.li(r||(r=(0,i.Z)(["\n  line-height: 1.5;\n  /* list-style-type: none; */\n  & a {\n    text-decoration-line: none;\n  }\n"]))),s=e(184),c=function(n){var t=n.movies,e=n.location;return(0,s.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;return(0,s.jsx)(o,{children:(0,s.jsx)(a.Link,{state:{from:e},to:"/movies/".concat(t),children:r})},t)}))})}},8415:function(n,t,e){e.d(t,{x:function(){return i}});var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 10px;\n  text-align: center;\n"])))},2027:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r=e(5861),a=e(9439),i=e(7757),o=e.n(i),s=e(545),c=e(8415),u=e(2791),l=e(7689),f=e(1243),h=e(2771),p="movie",d="week";function x(){return(x=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.get("".concat(h.v,"/trending/").concat(p,"/").concat(d,"?api_key=").concat(h.$));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var m=function(){return x.apply(this,arguments)},v=e(5545),g=e(184),b=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],f=(0,u.useState)(!1),h=(0,a.Z)(f,2),p=h[0],d=h[1],x=(0,u.useState)(""),b=(0,a.Z)(x,2),Z=b[0],w=b[1],k=(0,l.TH)();return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,m();case 4:if((t=n.sent).total_results){n.next=9;break}throw new Error("No data");case 9:i(t.results);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),w(n.t0.message);case 15:return n.prev=15,d(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{children:"Trending today"}),p&&(0,g.jsx)(s.Z,{}),Z&&(0,g.jsxs)(c.x,{children:[Z," There are not movies"]}),(0,g.jsx)(v.Z,{movies:e,location:k})]})}},2771:function(n,t,e){e.d(t,{$:function(){return r},v:function(){return a}});var r="3c96097624a2fa9e4b8164ba6b94edc9",a="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=27.a31fe6a5.chunk.js.map