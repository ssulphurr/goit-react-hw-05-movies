"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),i=n.n(c),o=n(791),s=n(689),u="Cast_cast_member__XBlwt",f=n(184);function h(){var t=(0,s.UO)().movieId,e=(0,o.useState)([]),n=(0,a.Z)(e,2),c=n[0],h=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=453b881a671dd013b145c543ca73b9df"));case 2:return n=e.sent,e.prev=3,e.next=6,n.json();case 6:r=e.sent,h(r.cast),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.loh(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:c.length>0?c.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,f.jsx)("li",{children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("img",{width:80,src:"https://image.tmdb.org/t/p/w200".concat(a),alt:n}),n,(0,f.jsxs)("p",{children:["Character: ",r]})]})},e)})):"We have no info about cast of this film"})})}},861:function(t,e,n){function r(t,e,n,r,a,c,i){try{var o=t[c](i),s=o.value}catch(u){return void n(u)}o.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var i=t.apply(e,n);function o(t){r(i,a,c,o,s,"next",t)}function s(t){r(i,a,c,o,s,"throw",t)}o(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=76.4aad5045.chunk.js.map