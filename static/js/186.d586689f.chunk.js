"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(439),s=n(757),a=n.n(s),i=n(791),u=n(689),o=n(184);function h(){var e=(0,u.UO)().movieId,t=(0,i.useState)([]),n=(0,c.Z)(t,2),s=n[0],h=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=453b881a671dd013b145c543ca73b9df"));case 2:return n=t.sent,t.prev=3,t.next=6,n.json();case 6:r=t.sent,h(r.results),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:s.length>0?s.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{children:["Author: ",n]}),(0,o.jsx)("p",{children:r})]})},t)})):"We couldn't find reviews for this film"})})}}}]);
//# sourceMappingURL=186.d586689f.chunk.js.map