(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{649:function(t,n,e){var content=e(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("5c49e42c",content,!0,{sourceMap:!1})},661:function(t,n,e){"use strict";e(649)},662:function(t,n,e){var r=e(75)(!1);r.push([t.i,'#instagram .navigation{color:#2d2d2d}#instagram .inner{padding-bottom:140px}#instagram .inner .text-wrapper{padding:40px 0 30px}#instagram .inner .text-wrapper .title{font-family:"Nexa",sans-serif;font-weight:400;font-size:25px;line-height:1.5;color:#2d2d2d}#instagram .inner #instafeed{width:100%;margin:auto;display:flex;flex-wrap:wrap}#instagram .inner #instafeed a{display:block;align-items:center;position:relative;background-size:cover;background-position:50%;width:37.5vw;height:37.5vw;margin:2px}#instagram .inner #instafeed a:after{content:"";background-color:#fff;opacity:0;position:absolute;left:0;top:0;bottom:0;right:0;transition:opacity .2s ease-in-out}#instagram .inner #instafeed a:hover:after{opacity:.1}@media only screen and (min-width:max-width 720px){#instagram .inner{flex-direction:column-reverse;align-items:flex-start}#instagram .inner .text-wrapper{max-width:300px;margin-left:6.25vw}#instagram .inner .text-wrapper .title{padding:40px 0;font-family:"Nexa",sans-serif;font-weight:400;font-size:25px;line-height:1.5;color:#2d2d2d}}@media only screen and (min-width:720px){#instagram .inner .text-wrapper{margin-left:80px;max-width:380px;padding:60px 0 50px}#instagram .inner .text-wrapper .title{font-family:"Nexa",sans-serif;font-weight:400;font-size:35px;line-height:1.5;color:#2d2d2d}#instagram .inner #instafeed a{width:25vw;height:25vw}}@media only screen and (min-width:1066px){#instagram .inner #instafeed a{width:200px;height:200px}}',""]),t.exports=r},680:function(t,n,e){"use strict";e.r(n);var r={name:"Instagram",data:function(){return{navigation:"Instagram",title:'Laat je inspireren en volg ons op <a class="link" target="blank"href="https://www.instagram.com/kapsalon_ans">Instagram</a>'}},methods:{loadFeed:function(){new Instafeed({get:"user",userId:"",clientId:"249315366177273",accessToken:InstagramToken,resolution:"thumbnail",template:'<a href="{{link}}" style="background-image:url({{image}});" target="_blank" id="{{id}}"></a>',sortBy:"most-recent",limit:20,links:!1}).run()}},mounted:function(){}},o=(e(661),e(77)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"instagram"}},[e("div",{staticClass:"inner"},[e("div",{staticClass:"text-wrapper"},[e("h3",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),e("div",{attrs:{id:"instafeed"}})]),t._v(" "),e("nav",{staticClass:"navigation"},[t._v(t._s(t.navigation))])])}),[],!1,null,null,null);n.default=component.exports}}]);