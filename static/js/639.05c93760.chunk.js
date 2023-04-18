/*! For license information please see 639.05c93760.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[639],{545:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,i,o=e(168),s=e(6444),c=s.ZP.div(r||(r=(0,o.Z)(["\n  margin: 10px auto 20px;\n  width: 160px;\n  height: 60px;\n  position: relative;\n  /* left: 50%; */\n  /* top: 50%; */\n  /* transform: translate(-50%, -50%); */\n"]))),u=s.ZP.div(a||(a=(0,o.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #3f51b5;\n  left: 15%;\n  transform-origin: 50%;\n  animation: circle 300ms alternate infinite ease;\n\n  @keyframes circle {\n    0% {\n      top: 60%;\n      height: 5px;\n      border-radius: 50px 50px 25px 25px;\n    }\n    40% {\n      height: 20px;\n      border-radius: 50%;\n      transform: scaleX(1);\n    }\n    100% {\n      top: 0%;\n    }\n  }\n  :nth-child(2) {\n    left: 45%;\n    animation-delay: 100ms;\n  }\n  :nth-child(3) {\n    left: auto;\n    right: 15%;\n    animation-delay: 200ms;\n  }\n"]))),p=s.ZP.div(i||(i=(0,o.Z)(["\n  width: 20px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 220, 0.5);\n  position: absolute;\n  top: 62px;\n  transform-origin: 50%;\n  z-index: -1;\n  left: 15%;\n  filter: blur(1px);\n  animation: shadow 300ms alternate infinite ease;\n  @keyframes shadow {\n    0% {\n      transform: scaleX(1.5);\n    }\n    40% {\n      transform: scaleX(1);\n      opacity: 0.7;\n    }\n    100% {\n      transform: scaleX(0.2);\n      opacity: 0.4;\n    }\n  }\n  :nth-child(4) {\n    left: 45%;\n    animation-delay: 100ms;\n  }\n  :nth-child(5) {\n    left: auto;\n    right: 15%;\n    animation-delay: 200ms;\n  }\n"]))),f=e(184),l=function(){return(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{}),(0,f.jsx)(u,{}),(0,f.jsx)(u,{}),(0,f.jsx)(p,{}),(0,f.jsx)(p,{}),(0,f.jsx)(p,{})]})}},5545:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(1087),i=e(168),o=e(6444).ZP.li(r||(r=(0,i.Z)(["\n  line-height: 1.5;\n  /* list-style-type: none; */\n  & a {\n    text-decoration-line: none;\n  }\n"]))),s=e(184),c=function(n){var t=n.movies,e=n.location;return(0,s.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;return(0,s.jsx)(o,{children:(0,s.jsx)(a.Link,{state:{from:e},to:"/movies/".concat(t),children:r})},t)}))})}},8415:function(n,t,e){e.d(t,{x:function(){return i}});var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 10px;\n  text-align: center;\n"])))},5639:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,i,o=e(5861),s=e(9439),c=e(7757),u=e.n(c),p=e(545),f=e(8415),l=e(2791),h=e(299),x=e(5545),d=e(3853),m=e(168),v=e(6444),g=v.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  width: 420px;\n"]))),y=v.ZP.input(a||(a=(0,m.Z)(["\n  font-size: 26px;\n  width: calc(100% - 120px);\n"]))),w=v.ZP.button(i||(i=(0,m.Z)(["\n  font-size: 24px;\n  width: 120px;\n"]))),Z=e(184),b=function(n){var t=n.onSubmit,e=n.query,r=(0,l.useState)(e),a=(0,s.Z)(r,2),i=a[0],o=a[1];(0,l.useEffect)((function(){var n;o(null!==(n=JSON.parse(localStorage.getItem("queryMovies")))&&void 0!==n?n:"")}),[]);return(0,Z.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value;t(e)},children:[(0,Z.jsx)(y,{onChange:function(n){var t=n.target.value;o(t),localStorage.setItem("queryMovies",JSON.stringify(t))},name:"search",value:i,type:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,Z.jsxs)(w,{type:"submit",children:["Search",(0,Z.jsx)(d.jRj,{})]})]})},k=e(1087),j=k.useSearchParams,_=k.useLocation,S=function(){var n,t=_(),e=j(),r=(0,s.Z)(e,2),a=r[0],i=r[1],c=null!==(n=a.get("query"))&&void 0!==n?n:"",d=(0,l.useState)([]),m=(0,s.Z)(d,2),v=m[0],g=m[1],y=(0,l.useState)(!1),w=(0,s.Z)(y,2),k=w[0],S=w[1],T=(0,l.useState)(""),P=(0,s.Z)(T,2),E=P[0],q=P[1];function C(){return C=(0,o.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),n.prev=1,n.next=4,(0,h.on)(t);case 4:if(e=n.sent,r=e.results,e.total_results){n.next=10;break}throw new Error("No data");case 10:g(r);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),q(n.t0.message);case 16:return n.prev=16,S(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,13,16,19]])}))),C.apply(this,arguments)}(0,l.useEffect)((function(){c&&function(n){C.apply(this,arguments)}(c)}),[c]);return(0,Z.jsxs)(Z.Fragment,{children:[E&&(0,Z.jsxs)(f.x,{children:[E," There are not movies"]}),(0,Z.jsx)(b,{onSubmit:function(n){n?i({query:n}):(i({}),g([]))},query:c}),k&&(0,Z.jsx)(p.Z,{}),(0,Z.jsx)(x.Z,{movies:v,location:t})]})}},299:function(n,t,e){e.d(t,{Ny:function(){return m},_k:function(){return l},oO:function(){return g},on:function(){return x},y:function(){return w}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243),s="3c96097624a2fa9e4b8164ba6b94edc9",c="https://api.themoviedb.org/3",u="movie",p="week",f="en-US";function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/trending/").concat(u,"/").concat(p,"?api_key=").concat(s));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/search/movie?api_key=").concat(s,"&language=").concat(f,"&query=").concat(t,"&page=1&include_adult=false"));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(s,"&language=").concat(f));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=").concat(f,"&page=1"));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=").concat(f));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=639.05c93760.chunk.js.map