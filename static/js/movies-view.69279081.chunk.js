"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{183:function(n,t,r){var e,o=r(168),i=r(31),c=r(184),u=i.ZP.button(e||(e=(0,o.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  font-family: ",", sans-serif;\n  transition: background-color ",",\n    color ",";\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.altBG}),(function(n){return n.theme.mainColor}),(function(n){return n.theme.mainFF}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.mainColor}),(function(n){return n.theme.accentColor}));t.Z=function(n){var t=n.icon,r=n.title,e=n.onClick,o=n.type;return(0,c.jsxs)(u,{type:o,onClick:e,children:[r," ",t]})}},955:function(n,t,r){var e,o=r(168),i=r(31),c=r(333),u=r(184),a=i.ZP.section(e||(e=(0,o.Z)(["\n  width: 100%;\n  padding: 32px 0 40px;\n  @media "," {\n    padding: 32px 0 60px;\n  }\n"])),c.A.tablet);t.Z=function(n){var t=n.children;return(0,u.jsx)(a,{children:t})}},87:function(n,t,r){r.d(t,{Z:function(){return S}});var e,o,i,c,u,a,s,l=r(168),f=r(413),p=r(501),d=r(871),h=r(31),m=r(333),g=r(577),x=r(184),b=h.ZP.div(e||(e=(0,l.Z)(["\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  width: 260px;\n  transform: scale(1);\n  transition: transform ",";\n  @media "," {\n    width: 300px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 8px 6px ",";\n    transform: scale(1.04);\n  }\n"])),(function(n){return n.theme.transition}),m.A.tablet,(function(n){return n.theme.accentColor})),v=h.ZP.div(o||(o=(0,l.Z)(["\n  margin-bottom: 5px;\n\n  background-color: ",";\n"])),(function(n){return n.theme.skeletonFrom})),Z=h.ZP.img(i||(i=(0,l.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 400px;\n  border-radius: 5px;\n"]))),j=h.ZP.h3(c||(c=(0,l.Z)(["\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 12px / 14px;\n  color: ",";\n"])),(function(n){return n.theme.accentBG})),y=h.ZP.p(u||(u=(0,l.Z)(["\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 12px / 14px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=function(n){var t=n.title,r=n.posterPath,e=n.genres;return(0,x.jsxs)(b,{children:[(0,x.jsx)(v,{children:null!==r?(0,x.jsx)(Z,{alt:t,loading:"lazy",src:"https://themoviedb.org/t/p/w342".concat(r)}):(0,x.jsx)(Z,{alt:t,loading:"lazy",src:g})}),(0,x.jsx)(j,{children:t}),(0,x.jsx)(y,{children:e})]})},w=h.ZP.ul(a||(a=(0,l.Z)(["\n  display: grid;\n  gap: 25px;\n  grid-template-columns: 1fr;\n  @media "," {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media "," {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"])),m.A.tablet,m.A.laptop),O=h.ZP.li(s||(s=(0,l.Z)(["\n  width: 100px;\n"]))),S=function(n){var t=n.list,r=(0,d.TH)();return(0,x.jsx)(w,{children:t.length?t.map((function(n){return(0,x.jsx)(O,{children:(0,x.jsx)(p.rU,{to:"/movies/".concat(n.id),state:{from:r},children:(0,x.jsx)(P,(0,f.Z)({},n))})},n.id)})):null})}},41:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,o,i=r(942),c=r(885),u=r(791),a=r(83),s=r(87),l=r(236),f=r(955),p=r(168),d=r(31),h=r(264),m=r(183),g=r(184),x=d.ZP.form(e||(e=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),b=d.ZP.input(o||(o=(0,p.Z)(["\n  width: 340px;\n  margin-right: 10px;\n\n  background-color: transparent;\n  padding-left: 20px;\n  font-size: 20px;\n  border: none;\n  border-bottom: 2px solid ",";\n  color: ",";\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.accentBG})),v=function(n){var t=n.onSearch,r=(0,u.useState)(""),e=(0,c.Z)(r,2),o=e[0],i=e[1];return(0,g.jsxs)(x,{onSubmit:function(n){n.preventDefault();var r=o.trim();""===r&&h.Notify.failure("Please enter something",{fontSize:"18px",cssAnimationStyle:"from-right"}),r&&(t(r),i(""))},children:[(0,g.jsx)(b,{value:o,placeholder:"Search for movies",onChange:function(n){return i(n.target.value)}}),(0,g.jsx)(m.Z,{title:"Find",type:"submit"})]})},Z=r(742),j=r(291),y=r(501),P="query",w=function(n){var t=n.genresList,r=(0,u.useState)([]),e=(0,c.Z)(r,2),o=e[0],p=e[1],d=(0,y.lr)({}),m=(0,c.Z)(d,2),x=m[0],b=m[1];(0,u.useEffect)((function(){var n=x.get(P);n&&w(n)}),[]);var w=function(n){b((0,i.Z)({},P,n)),Z.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgSize:"100px",svgColor:"#F66B0E",messageFontSize:"18px",messageColor:"#F66B0E"}),(0,a.on)(n).then((function(n){0===n.results.length&&h.Notify.failure("Sorry nothing found on your query",{fontSize:"18px",cssAnimationStyle:"from-right"}),p((0,j.c)(t,n.results))})).catch((function(n){console.error(n)})),Z.Loading.remove()};return(0,g.jsxs)(f.Z,{children:[(0,g.jsx)(l.Z,{children:(0,g.jsx)(v,{onSearch:w})}),(0,g.jsx)(l.Z,{children:(0,g.jsx)(s.Z,{list:o})})]})}},291:function(n,t,r){r.d(t,{c:function(){return o}});var e=function(n,t){if(n.length&&t){var r=t.map((function(t){return n.find((function(n){return n.id===t}))})).map((function(n){return null===n||void 0===n?void 0:n.name})).join(", ");if(r)return r}return""},o=function(n,t){return t.map((function(t){return{id:t.id,title:t.title,posterPath:t.poster_path,genres:e(n,t.genre_ids)}}))}},577:function(n,t,r){n.exports=r.p+"static/media/movie-poster-coming-soon.7c02dcee67d3c6af8ac5.jpg"},942:function(n,t,r){function e(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}r.d(t,{Z:function(){return e}})},413:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(942);function o(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function i(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}}}]);
//# sourceMappingURL=movies-view.69279081.chunk.js.map