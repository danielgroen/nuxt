(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{648:function(t,e,n){var content=n(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("2d8b2818",content,!0,{sourceMap:!1})},658:function(t,e){t.exports='<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"/></svg>'},659:function(t,e,n){"use strict";n(648)},660:function(t,e,n){var o=n(75)(!1);o.push([t.i,'#contact[data-v-bd5b7e5c]{background-color:#2d2d2d;position:relative}#contact .inner[data-v-bd5b7e5c]{display:flex;pointer-events:none}#contact .inner .card[data-v-bd5b7e5c]{z-index:2;pointer-events:all;background-color:#fff;color:#2d2d2d;margin:20px 0;border-radius:20px 20px 0 20px;padding-bottom:80px;padding-left:6.25vw;padding-right:6.25vw}#contact .inner .card .block-title[data-v-bd5b7e5c]{font-family:"Nexa",sans-serif;font-weight:400;font-size:25px;line-height:1.5;color:#2d2d2d;margin:15px 0;padding-top:3px}#contact .inner .card .address[data-v-bd5b7e5c]{line-height:1.5;margin-bottom:30px}#contact .inner .card .day[data-v-bd5b7e5c]{line-height:1.8;font-size:17px;display:flex}#contact .inner .card .day .current[data-v-bd5b7e5c]{opacity:1!important;color:#3fcc33}#contact .inner .card .day .day-text[data-v-bd5b7e5c]{width:130px}#contact .inner .card .day .seperator[data-v-bd5b7e5c]{margin:0 5px}#contact .inner .card .day .times[data-v-bd5b7e5c]{justify-content:flex-start;display:flex}#contact .close[data-v-bd5b7e5c]{position:absolute;left:20px;top:20px;width:25px;fill:#fff;opacity:0;z-index:3;transition:opacity .6s cubic-bezier(.7,0,.3,1);pointer-events:none}#contact .close.visible[data-v-bd5b7e5c]{opacity:.7;pointer-events:all}#contact #map-overlay[data-v-bd5b7e5c]{position:absolute;z-index:1;width:100%;height:100%;left:0;top:0;text-align:center;padding:100px 20vw;font-family:"Nexa",sans-serif;font-weight:400;font-size:18px;line-height:1.5;color:#fff;transition:opacity .3s cubic-bezier(.7,0,.3,1);background-color:#000;opacity:0}#contact #map-overlay.hover[data-v-bd5b7e5c]{opacity:.7}#contact #map-overlay.visible[data-v-bd5b7e5c]{display:none}@media only screen and (min-width:max-width 720px){#contact[data-v-bd5b7e5c]{background-color:#2d2d2d;min-height:100vh}#contact .inner[data-v-bd5b7e5c]{height:100vh;justify-content:flex-end;flex-direction:column}#contact .inner .card[data-v-bd5b7e5c]{background-color:#fff;transition:max-height .6s cubic-bezier(.7,0,.3,1);max-height:100%;color:#2d2d2d;margin-bottom:4.16667vw;margin-right:10.41667vw;padding-right:4.16667vw;border-radius:20px 20px 0 20px}#contact .inner .card .day .day-text[data-v-bd5b7e5c]{flex:0 0 130px}#contact .inner .card .day .times[data-v-bd5b7e5c]{font-size:.9rem;line-height:1.9rem}#contact .inner .card.collapsed[data-v-bd5b7e5c]{max-height:185px}}@media only screen and (min-width:720px){#contact[data-v-bd5b7e5c]{height:700px}#contact .inner .card[data-v-bd5b7e5c]{margin:50px 0 0;padding-left:25px;padding-top:10px;padding-right:50px}#map-overlay[data-v-bd5b7e5c]{padding-left:50vw;padding-left:50%!important;padding-top:30%!important}}@media only screen and (min-width:1066px){#map-overlay[data-v-bd5b7e5c]{display:none!important}}',""]),t.exports=o},679:function(t,e,n){"use strict";n.r(e);var o=n(658),c=n.n(o),d={name:"Contact",data:function(){return{close:c.a,navigation:"Contact",openingHours:this.$store.state.contact.openingHours,mobile:{collapsed:!1,focus:!1,hover:!1}}},methods:{toggleMap:function(t){"enable"===t?(this.mobile.focus=!0,this.mobile.collapsed=!0,this.mobile.hover=!1,this.$el.scrollIntoView({behavior:"smooth",block:"start"})):"disable"===t&&(this.mobile.focus=!1,this.mobile.collapsed=!1,this.mobile.hover=!1)},currentDay:function(){var t=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"][(new Date).getDay()];this.openingHours[t].currentDay=!0}},mounted:function(){var t=this,e=document.getElementById("map-overlay");this.currentDay(),e.addEventListener("touchstart",(function(){t.mobile.hover=!0}),!0),e.addEventListener("touchend",(function(){t.mobile.hover=!1}),!0)}},r=(n(659),n(77)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("div",{staticClass:"inner"},[n("article",{staticClass:"card",class:{collapsed:t.mobile.collapsed},on:{click:function(e){return t.toggleMap("disable")}}},[n("h2",{staticClass:"block-title"},[t._v("Contact informatie")]),t._v(" "),n("address",{staticClass:"address"},[t._v("\n        Kapsalon Ans"),n("br"),t._v("\n        Koninginnelaan 28, 3762 DE"),n("br"),t._v("\n        Soest, Nederland"),n("br"),t._v(" "),n("a",{staticClass:"link normal",attrs:{href:this.$store.getters["contact/phoneFormatted"]}},[t._v(t._s(this.$store.state.contact.phone))]),n("br")]),t._v(" "),t._l(t.openingHours,(function(data,e,o){return n("div",{key:o,staticClass:"day"},[n("p",{staticClass:"day-text",class:{current:data.currentDay}},[t._v("\n          "+t._s(e)+"\n        ")]),t._v(" "),n("div",{staticClass:"times",class:{current:data.currentDay}},[n("p",{staticClass:"open"},[t._v(t._s(data.open))]),t._v(" "),!0!==data.gesloten?n("span",{staticClass:"seperator"},[t._v("-")]):t._e(),t._v(" "),n("p",{staticClass:"closed"},[t._v(t._s(data.sluit))])])])}))],2)]),t._v(" "),n("span",{staticClass:"close",class:{visible:t.mobile.focus},domProps:{innerHTML:t._s(t.close)},on:{click:function(e){return t.toggleMap("disable")}}}),t._v(" "),n("span",{class:{visible:t.mobile.focus,hover:t.mobile.hover},attrs:{id:"map-overlay"},on:{click:function(e){return t.toggleMap("enable")},mousedown:function(e){t.mobile.hover=!t.mobile.hover}}},[t._v("'Tap' op de kaart om de kaart te bewegen...")]),t._v(" "),n("LazyContactLeafletmap"),t._v(" "),n("nav",{staticClass:"navigation"},[t._v(t._s(t.navigation))])],1)}),[],!1,null,"bd5b7e5c",null);e.default=component.exports}}]);