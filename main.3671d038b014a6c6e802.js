!function(n){function e(e){for(var i,r,l=e[0],c=e[1],d=e[2],s=0,u=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);for(p&&p(e);u.length;)u.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},o={0:0},a=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=c;a.push([162,1]),t()}({113:function(n,e,t){"use strict";var i=t(155),o=t.n(i)()((function(n){return n[1]}));o.push([n.i,"*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-family: roboto, sans-serif;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  html {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  margin: 0;\n  background-color: #fff;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  text-decoration-skip: objects;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n}\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n::-moz-input-placeholder {\n  color: inherit;\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: none;\n  font: inherit;\n}\n\n::-ms-clear {\n  display: none;\n}\n\n:disabled,\n.disabled {\n  cursor: not-allowed;\n}\n\n:-webkit-autofill {\n  box-shadow: 0 0 100px #fff inset;\n  -webkit-text-fill-color: currentColor;\n}\n\n:focus {\n  outline: none;\n}\n\np,\ndd,\ndl,\nfigure,\nblockquote {\n  margin: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nul,\nol {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nth {\n  font-weight: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n  font-weight: inherit;\n}\n\naudio,\nvideo {\n  display: block;\n}\n\nimg {\n  display: block;\n  border: none;\n}\n\niframe {\n  border: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n  font-size: inherit;\n}\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\nabbr {\n  border: none;\n  text-decoration: none;\n}\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\ni,\nem {\n  font-style: inherit;\n}\n\ndfn {\n  font-style: inherit;\n}\n\nmark {\n  background-color: transparent;\n  color: inherit;\n}\n\nsmall {\n  font-size: inherit;\n}\n\nsub,\nsup {\n  position: relative;\n  vertical-align: baseline;\n  font-size: inherit;\n  line-height: 0;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  background-color: transparent;\n  font: inherit;\n  color: inherit;\n  letter-spacing: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-align: left;\n  text-transform: none;\n}\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n\ntextarea {\n  resize: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: none;\n}\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'] {\n  outline: none;\n}\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\nlegend {\n  display: block;\n  padding: 0;\n  white-space: normal;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n:-moz-placeholder {\n  color: inherit;\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n:-ms-input-placeholder {\n  color: inherit;\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n\n:focus::-webkit-input-placeholder {\n  opacity: 0;\n}\n\n:focus::-moz-input-placeholder {\n  opacity: 0;\n}\n\n:focus:-moz-placeholder {\n  opacity: 0;\n}\n\n:focus:-ms-input-placeholder {\n  opacity: 0;\n}\n\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\ninput[type='number']::-webkit-outer-spin-button,\ninput[type='number']::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nsvg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}\n\n[hidden] {\n  display: none;\n}\n\n::selection {\n  color: #fff;\n  background-color: #004fe4;\n}\n\ndiv {\n  font-family: roboto, sans-serif;\n}\n",""]),e.a=o},159:function(n,e){},162:function(n,e,t){t(163),n.exports=t(360)},360:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),a=t(79),r=t(65),l=t(21),c=t(66),d=t(154),p=t.n(d),s=t(113),u={insert:"head",singleton:!1},m=(p()(s.a,u),s.a.locals,t(11)),f=t.n(m),h=t(12),g=t(4),b=g.a.div.withConfig({displayName:"Layoutstyled__Root",componentId:"sc-1r7gxzi-0"})([""]),y=t(43),w=g.a.div.withConfig({displayName:"Headerstyled__Root",componentId:"elan-0"})(["width:100%;height:88px;box-shadow:rgb(0 0 0 / 15%) 0 2px 10px 0;background:rgb(255,254,251);z-index:999;padding:0 50px;justify-content:space-between;display:flex;margin-bottom:10px;align-items:center;"]),x=g.a.div.withConfig({displayName:"Headerstyled__LogoWrapper",componentId:"elan-1"})(["max-width:177px;width:100%;height:63px;margin-right:50px;"]),v=g.a.img.withConfig({displayName:"Headerstyled__Logo",componentId:"elan-2"})(["width:100%;height:100%;"]),_=g.a.ul.withConfig({displayName:"Headerstyled__Ul",componentId:"elan-3"})(["display:flex;"]),E=g.a.li.withConfig({displayName:"Headerstyled__Li",componentId:"elan-4"})(["margin-right:25px;font-size:20px;font-family:roboto,sans-serif;color:#404040;font-weight:500;cursor:pointer;"]),j=t.p+"717d4369aa26fcc53d568021b1fe12c3.png",k="/",C="/gallery",I="/contact",z=function(){return o.a.createElement(w,null,o.a.createElement(x,null,o.a.createElement(y.a,{to:k},o.a.createElement(v,{src:j}))),o.a.createElement(_,null,o.a.createElement(E,null,o.a.createElement(y.a,{to:k},"Главная страница")),o.a.createElement(E,null,o.a.createElement(y.a,{to:C},"Галлерея")),o.a.createElement(E,null,o.a.createElement(y.a,{to:I},"Контакты"))))},N=function(n){var e=n.children;return o.a.createElement(b,null,o.a.createElement(z,null),e)};N.propTypes={children:m.any};var S=N,D=function(n){var e=n.routes;return o.a.createElement(S,null,o.a.createElement(h.d,null,e.map((function(n){var e=n.path,t=n.exact,i=n.component;return o.a.createElement(h.b,{key:e,exact:t,path:e,render:function(n){return o.a.createElement(i,n)}})})),o.a.createElement(h.a,{to:"/"})))};D.propTypes={routes:f.a.array.isRequired};var M,O,P,B=D,T=g.a.div.withConfig({displayName:"Mainstyled__Root",componentId:"sc-2ij9tb-0"})([""]),H=g.a.div.withConfig({displayName:"Mainstyled__BlockOne",componentId:"sc-2ij9tb-1"})(["display:grid;grid-template-columns:40% 60%;height:650px;"]),L=g.a.div.withConfig({displayName:"Mainstyled__Videos",componentId:"sc-2ij9tb-2"})(["height:650px;"]),R=(g.a.div.withConfig({displayName:"Mainstyled__Slide",componentId:"sc-2ij9tb-3"})(["height:650px;"]),g.a.div.withConfig({displayName:"Mainstyled__WrapperImage",componentId:"sc-2ij9tb-4"})(["height:100%;width:100%;"]),g.a.img.withConfig({displayName:"Mainstyled__Image",componentId:"sc-2ij9tb-5"})(["width:100%;height:100%;object-fit:fill;"]),g.a.div.withConfig({displayName:"Mainstyled__BlockTwo",componentId:"sc-2ij9tb-6"})(["height:700px;position:relative;display:flex;min-height:700px;justify-content:space-around;padding:0 10%;"])),q=g.a.div.withConfig({displayName:"Mainstyled__EucaliptusPng",componentId:"sc-2ij9tb-7"})(["position:absolute;top:140px;left:0;width:100px;"]),V=g.a.div.withConfig({displayName:"Mainstyled__CedarWood",componentId:"sc-2ij9tb-8"})(["position:absolute;right:0;bottom:100px;width:100px;"]),A=g.a.img.withConfig({displayName:"Mainstyled__Png",componentId:"sc-2ij9tb-9"})(["width:100%;"]),W=g.a.div.withConfig({displayName:"Mainstyled__ContentBlock",componentId:"sc-2ij9tb-10"})(["width:100%;justify-content:space-around;display:flex;"]),U=g.a.div.withConfig({displayName:"Mainstyled__MobileImage",componentId:"sc-2ij9tb-11"})(["max-width:650px;width:100%;display:flex;justify-content:center;align-items:center;"]),G=g.a.img.withConfig({displayName:"Mainstyled__MobileImagePng",componentId:"sc-2ij9tb-12"})(["width:100%;"]),J=g.a.div.withConfig({displayName:"Mainstyled__PreviewBot",componentId:"sc-2ij9tb-13"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]),F=g.a.div.withConfig({displayName:"Mainstyled__TextBot",componentId:"sc-2ij9tb-14"})(["line-height:1.17;text-align:left;margin-top:-100px;color:rgb(64,64,64);font-weight:bold;font-size:31px;max-width:400px;"]),K=t.p+"64b3ca02b74742669b3da2d5219a518d.png",Q=t.p+"98942c051bcc609e5b3e3df254a15e8c.png",X=t.p+"df1b05b3781a960f34b04deb6101223e.png",Y=g.a.div.withConfig({displayName:"Videosstyled__VideoWrapper",componentId:"c248b4-0"})(["width:100%;height:100%;"]),Z=g.a.video.withConfig({displayName:"Videosstyled__Video",componentId:"c248b4-1"})(["object-fit:cover;"]),$=function(n){var e=n.videoURL;return o.a.createElement(Y,null,o.a.createElement(Z,{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:e,type:"video/mp4"})))},nn=g.a.button.withConfig({displayName:"Buttonstyled__Button",componentId:"sc-89cow8-0"})(["border-radius:30px;border:none;color:white;display:flex;align-items:center;justify-content:center;margin:",";text-transform:uppercase;font-size:",";text-align:center;background:rgb(185,171,239);font-weight:bold;padding:",";min-width:145px;"],(function(n){return n.margin}),(function(n){var e=n.fontSize;return"".concat(e,"px")}),(function(n){return n.padding})),en=function(n){var e=n.children,t=n.fontSize,i=void 0===t?13:t,a=n.margin,r=void 0===a?"20px auto 0 0":a,l=n.padding,c=void 0===l?"6px 25px":l;return o.a.createElement(nn,{padding:c,margin:r,fontSize:i},e)},tn=g.a.div.withConfig({displayName:"Storiesstyled__StoriesSection",componentId:"vcd8bh-0"})(["min-height:600px;padding:50px 9%;background:rgb(237,248,245);position:relative;"]),on=g.a.div.withConfig({displayName:"Storiesstyled__StoriesSectionContent",componentId:"vcd8bh-1"})(["width:100%;height:100%;margin-top:50px;margin-bottom:50px;grid-gap:0 15px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:repeat(1,400px);"]),an=(g.a.div.withConfig({displayName:"Storiesstyled__ButtonBlock",componentId:"vcd8bh-2"})(["display:flex;justify-content:center;align-items:center;"]),g.a.div.withConfig({displayName:"Storiesstyled__TitleStories",componentId:"vcd8bh-3"})(["font-weight:bold;line-height:1.17;font-size:46px;text-align:center;"])),rn=g.a.div.withConfig({displayName:"Storiesstyled__Card",componentId:"vcd8bh-4"})([""]),ln=g.a.img.withConfig({displayName:"Storiesstyled__CardImage",componentId:"vcd8bh-5"})(["width:100%;height:100%;object-fit:cover;"]),cn=t.p+"4734ba70a00564327e8cb87c829b9272.jpg",dn=t.p+"7e2c2a46ef85fc92de2aadba44d53b25.jpg",pn=t.p+"61de1cccdb0cae3bedded4fc14a5b73b.jpg",sn=function(){return o.a.createElement(tn,null,o.a.createElement(an,null,"Наши Товары"),o.a.createElement(on,null,o.a.createElement(rn,null,o.a.createElement(ln,{src:cn})),o.a.createElement(rn,null,o.a.createElement(ln,{src:dn})),o.a.createElement(rn,null,o.a.createElement(ln,{src:pn}))),o.a.createElement(en,{padding:"17px 40px",fontSize:28,margin:"0 auto"},o.a.createElement(y.a,{to:C},"Смотреть всё")))},un=[{path:k,exact:!0,cache:!1,component:function(){return o.a.createElement(T,null,o.a.createElement(H,null,o.a.createElement(L,null,o.a.createElement($,{videoURL:"https://aroma-production.s3.eu-west-1.amazonaws.com/uploads/app_settings/a4f8e8f3_8184_415e_aebd_6fc89c85075c_%D7%95%D7%99%D7%93%D7%99%D7%90%D7%95%20%D7%9C%D7%99%D7%95%D7%98%D7%99%D7%95%D7%91%20%D7%A4%D7%90%D7%A8%D7%A7%20%D7%9E%D7%A9%D7%95%D7%9C%D7%91.mp4"}))),o.a.createElement(R,null,o.a.createElement(W,null,o.a.createElement(U,null,o.a.createElement(G,{src:X})),o.a.createElement(J,null,o.a.createElement(F,null,"Наш телеграм бот поможет вам на всем пути"),o.a.createElement(en,null,"Перейти"))),o.a.createElement(q,null,o.a.createElement(A,{src:K})),o.a.createElement(V,null,o.a.createElement(A,{src:Q}))),o.a.createElement(sn,null))},title:"Home",layout:"default"},{path:C,exact:!0,cache:!1,component:function(){return o.a.createElement("div",null,"Gallery")},title:"Gallery",layout:"default"},{path:I,exact:!0,cache:!1,component:function(){return o.a.createElement("div",null,"Contact")},title:"Home",layout:"default"}],mn=function(){return o.a.createElement(B,{routes:un})},fn=t(152),hn=t(116),gn=t(81),bn=(t(161),Object(gn.b)({name:"users",initialState:{collection:{},fetching:!0,collectionFetched:!1},reducers:{}}).reducer),yn=(t(159),function(n){return{router:Object(r.b)(n),users:bn}}),wn=Object(l.a)(),xn=(M=wn,O=Object(hn.b)(),(P=Object(gn.a)({reducer:yn(M),middleware:[O,Object(fn.a)(M)],devTools:!1})).runSaga=O.run,P.close=function(){return P.dispatch(hn.a)},P);Object(a.render)(o.a.createElement(c.a,{store:xn},o.a.createElement(r.a,{history:wn},o.a.createElement(mn,null))),document.getElementById("root"))}});