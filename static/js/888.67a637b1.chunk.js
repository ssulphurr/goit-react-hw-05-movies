"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(861),i=r(439),s=r(757),c=r.n(s),a=r(791),o=r(689),l=r(87),u="MovieDetails_movie_wrapper__5GpNI",d="MovieDetails_movie_img__LJ51e",h="MovieDetails_movie_info__kgd1I",v=r(184);function p(){var e,n,r,s=(0,o.UO)().movieId,p=(0,a.useState)([]),f=(0,i.Z)(p,2),x=f[0],j=f[1],m=(0,o.TH)(),_=(0,a.useRef)(null!==(e=null===(n=m.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,a.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(s,"?api_key=453b881a671dd013b145c543ca73b9df"));case 2:return n=e.sent,e.prev=3,e.next=6,n.json();case 6:r=e.sent,j(r),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var w=x.poster_path,g=x.title,k=x.vote_average,b=x.overview,U=(null===(r=x.genres)||void 0===r?void 0:r.length)>0?x.genres.map((function(e){return e.name})).join(", "):[];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.rU,{to:_.current,children:"Go Back"}),(0,v.jsx)("br",{}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("img",{className:d,src:"https://image.tmdb.org/t/p/w300".concat(w),alt:g}),(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("h2",{children:g}),(0,v.jsxs)("p",{children:["User score: ",parseInt(10*k),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:b}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:U})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)("p",{children:"Adittional inforemation"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)("hr",{}),(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(o.j3,{})})]})}},861:function(e,n,r){function t(e,n,r,t,i,s,c){try{var a=e[s](c),o=a.value}catch(l){return void r(l)}a.done?n(o):Promise.resolve(o).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(i,s){var c=e.apply(n,r);function a(e){t(c,i,s,a,o,"next",e)}function o(e){t(c,i,s,a,o,"throw",e)}a(void 0)}))}}r.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=888.67a637b1.chunk.js.map