(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{174:function(e,t,n){"use strict";var o=n(3),r=n(246),l=n.n(r);o.a.component("carousel",l.a)},207:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("4e8213bc",content,!0,{sourceMap:!1})},245:function(e,t){e.exports='<svg class="svg" version="1.1" viewBox="0 0 348.077 348.077" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m340.27 275.08l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518 0.744l-27.082 27.076c-1.711-0.943-3.482-1.928-5.344-2.973-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826 0.721-39.521l-53.755-53.767c-10.682-10.68-28.421-10.356-39.518 0.744l-15.15 15.237 0.414 0.411c-5.08 6.482-9.325 13.958-12.484 22.02-2.912 7.674-4.725 14.997-5.554 22.335-7.098 58.844 19.792 112.62 92.768 185.6 100.88 100.87 182.17 93.248 185.67 92.876 7.638-0.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l0.331 0.294 15.348-15.029c11.074-11.098 11.393-28.83 0.716-39.542z"></path></svg>'},249:function(e,t,n){"use strict";var o=n(245),r=n.n(o),l={name:"layout",data:function(){return{phone:r.a,expanded:!1}},methods:{gridVisualizer:function(){document.body.setAttribute("grid","invisible")},heightCalculator:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}},created:function(){var e=this;this.$on("phoneToggle",(function(t){e.expanded=t}))},mounted:function(){this.heightCalculator(),window.addEventListener("resize",this.heightCalculator())},destroyed:function(){window.removeEventListener("resize",this.heightCalculator())}},d=(n(270),n(69)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:function(t){return t.ctrlKey?e.gridVisualizer():null}}},[n("div",{staticClass:"phone-wrapper",class:{expanded:e.expanded}},[n("a",{staticClass:"phone",attrs:{href:this.$store.getters["contact/phoneFormatted"]},domProps:{innerHTML:e._s(e.phone)}}),e._v(" "),n("p",{staticClass:"text"},[e._v(e._s(this.$store.state.contact.phone))])]),e._v(" "),n("LazyHero"),e._v(" "),n("Nuxt"),e._v(" "),n("LazyCredentials"),e._v(" "),n("LazyNotice"),e._v(" "),n("div",{staticClass:"overlay"})],1)}),[],!1,null,null,null);t.a=component.exports},251:function(e,t,n){n(252),e.exports=n(253)},268:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("5d6138d6",content,!0,{sourceMap:!1})},269:function(e,t,n){var o=n(84)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300&display=swap);"]),o.push([e.i,'@font-face{font-family:"Nexa";src:url(/fonts/Nexa_Light.otf)}*{-webkit-tap-highlight-color:rgba(0,0,0,0)}* ::selection{color:#fff;text-decoration:underline;background-color:#2d2d2d}* ::-moz-selection{color:#fff;text-decoration:underline;background-color:#2d2d2d}::-moz-focus-inner{padding:0;border:0}:focus{outline:0}body,html{overflow-x:hidden}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body,html{margin:0;padding:0}body{font-family:"Muli",sans-serif}h1,h2,h3,h4,h5,h6{margin:0;font-size:1rem;font-weight:400}main,picture{display:block}address{font-style:normal}a{text-decoration:none}img{display:block;max-width:100%}input,select,textarea{max-width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none}blockquote,p{margin:0}*{box-sizing:border-box}ul{padding:0;list-style-type:none}strong{font-weight:700}svg{width:100%}body.development:after{content:"";display:none;width:100%;height:100%;position:fixed;left:50%;top:0;transform:translateX(-50%);pointer-events:none;max-width:1200px;opacity:.4;z-index:40}body.development:before{z-index:10001;content:"24 Mobile, 0px ~ 719px";display:block;position:fixed;display:none;pointer-events:none;bottom:0;right:0;background-color:#f1f1f1;padding:10px;border-radius:5px 0 0 0;color:#1e1e1e}@media only screen and (min-width:720px){body.development:before{content:"24 Tablet, 720px ~ 1065px"}}@media only screen and (min-width:1066px){body.development:before{content:"24 Desktop, 1066px ~ 1200px"}}body.development[grid=visible]:after,body.development[grid=visible]:before{display:block}.link{color:inherit;border-bottom:1px solid;transition:color .2s cubic-bezier(.7,0,.3,1)}.link.normal{border-bottom:none}.link:hover{color:#e44}',""]),e.exports=o},270:function(e,t,n){"use strict";n(207)},271:function(e,t,n){var o=n(84)(!1);o.push([e.i,'.overlay{display:none;position:fixed;left:0;top:0;right:0;bottom:0}.phone-wrapper{position:fixed;top:20px;right:30px;z-index:5;fill:#fff;transform:translateX(50%);align-items:center}.phone-wrapper:after{content:"";position:absolute;width:500px;height:100%;left:-10px;padding:10px;top:-10px;z-index:-1}.phone-wrapper svg{stroke:#2d2d2d;overflow:visible;stroke-width:2px;width:25px;height:25px}.phone-wrapper p{display:none;width:100%;flex:1 0 300px}.inner{max-width:1200px;margin:0 auto;padding:0 4.16667%}@media only screen and (min-width:1066px){.inner{padding:0 50px}}#footer,#header,section{overflow:hidden}@supports((-webkit-clip-path:circle(0%)) or (clip-path:circle(0%))){#footer,#header,section{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}.navigation{position:fixed;right:20px;bottom:30px;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;text-align:right;font-family:"Nexa",sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff}@supports not ((-webkit-clip-path:circle(0%)) or (clip-path:circle(0%))){.navigation{display:none}}@media only screen and (min-width:720px){.phone-wrapper{position:fixed;top:20px;right:0;display:flex;transform:translateX(-100%);transition:transform .3s cubic-bezier(.7,0,.3,1);z-index:5;align-items:center}.phone-wrapper.expanded,.phone-wrapper:hover{transform:translateX(-200px)}.phone-wrapper p{margin-left:50px;color:#d0d0d0;display:block;position:absolute;width:300px}.navigation{font-size:22px;bottom:40px}}',""]),e.exports=o},272:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"getters",(function(){return r}));n(44),n(81),n(208);var o=function(){return{phone:"+31 35 60 20 54 6",openingHours:{maandag:{open:"Telefonisch bereikbaar",currentDay:!1,gesloten:!0},dinsdag:{open:"09:00",sluit:"17:30",currentDay:!1},woensdag:{open:"09:00",sluit:"17:30",currentDay:!1},donderdag:{open:"09:00",sluit:"17:30",currentDay:!1},vrijdag:{open:"08:30",sluit:"20:30",currentDay:!1},zaterdag:{open:"08:30",sluit:"16:00",currentDay:!1},zondag:{open:"Gesloten",currentDay:!1,gesloten:!0}}}},r={getPhone:function(e){return"test"},phoneFormatted:function(e,t){return"tel:"+e.phone.replace(/\s/g,"")}}},629:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return r}));n(208);var o=function(){return{uiState:"init"}},r=function(){return{loadApp:function(e){e.uiState="loaded"}}}}},[[251,13,2,14]]]);