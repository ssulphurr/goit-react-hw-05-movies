"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(439),o=e(757),i=e.n(o),u=e(214),a=e(791),s=e(689),f=e(847),h=e(184);function v(){var n=(0,s.UO)().movieId,t=(0,a.useState)([]),e=(0,c.Z)(t,2),o=e[0],v=e[1],l=(0,a.useState)(!1),d=(0,c.Z)(l,2),p=d[0],m=d[1],k=(0,a.useState)(null),w=(0,c.Z)(k,2),x=w[0],j=w[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,(0,f.Bt)(n);case 3:return e=t.sent,t.prev=4,t.next=7,e.json();case 7:r=t.sent,v(r.results),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),j(t.t0);case 14:return t.prev=14,m(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,h.jsxs)(h.Fragment,{children:[p&&(0,h.jsx)(u.Z,{}),(0,h.jsx)("ul",{children:!p&&o.length>0&&o.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,h.jsx)("li",{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("h3",{children:["Author: ",e]}),(0,h.jsx)("p",{children:r})]})},t)}))}),!p&&0===o.length&&(0,h.jsx)("h3",{children:"We couldn't find reviews for this film"}),x&&(0,h.jsxs)("h3",{children:["Oops, something went wrong: ",x.message]})]})}},847:function(n,t,e){e.d(t,{Bt:function(){return s},Tg:function(){return o},Y5:function(){return u},vw:function(){return i},y:function(){return a}});var r="453b881a671dd013b145c543ca73b9df",c="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(c,"trending/movie/week?api_key=").concat(r))},i=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r))},s=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r))}},861:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=186.5d844b05.chunk.js.map