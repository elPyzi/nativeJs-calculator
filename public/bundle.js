(()=>{var n={331:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"html{\n    font-family: 'Courier New', Courier, monospace;\n}",""]);const c=i},206:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(719),l=t(331),s=i()(o());s.i(c.A),s.i(l.A),s.push([n.id,"/* обнулирование стилей */\n\n:root[data-theme='light']{\n    --background-color-primary:#80c8c9;\n    --background-color-greeting:#E0EAD6;\n    --main-black-color:#333333;\n    --second-black-color:#4D4D4D;\n}\n:root[data-theme='night']{\n    --background-color-primary:#0E1433;\n    --background-color-greeting:#072946;\n    --main-black-color:#E0EAD6;\n    --second-black-color:#B0B0A0;\n}\n:root[data-theme='dark']{\n    --background-color-primary:#151515;\n    --background-color-greeting:#000000;\n    --main-black-color:#FCFCEE;\n    --second-black-color:#f2f3f4;\n}\n/* #1E1E1E для ночной темы */\nbody{\n    background-color: var(--background-color-primary);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 70px;\n\n    min-height: 100vh;\n}\n\n\n.greeting {\n\n    background-color: var(--background-color-greeting);\n    max-width: 35%;\n    min-width: 30%;\n    padding: 20px 20px 30px 20px;\n    color: var(--main-black-color);\n\n    border: 5px solid var(--main-black-color);\n    border-radius: 15px;\n    box-shadow: 7px 7px var(--second-black-color);\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    \n}\n.greeting__title {\n    color: inherit;\n    margin-bottom: 40px;\n}\n.greeting__title-label {\n    color: inherit;\n    margin-bottom: 40px;\n\n    font-weight: 700;\n    font-size: 18px;\n}\n\n/* .greeting__title-label:last-of-type{\n    margin-bottom: 30px;\n} */\n\n.greeting__links-container {\n    color: inherit;\n}\n.greeting__link {\n    color: inherit;\n    font-weight: 600;\n    font-size: 18px;\n\n    padding: 10px 10px;\n    border: 3px solid var(--main-black-color);\n    border-radius: 5px;\n\n    transition: all 0.4s;\n}\n\n\n.greeting__link:hover{\n    background-color: var(--main-black-color);\n    color: var(--background-color-greeting);\n}\n\n\n\n.theme-lang {\n    background-color: var(--background-color-greeting);\n    max-width: 35%;\n    min-width: 30%;\n    padding: 20px 40px;\n    color: var(--main-black-color);\n\n    border: 5px solid var(--main-black-color);\n    border-radius: 15px;\n    box-shadow: 7px 7px var(--second-black-color);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.theme-lang__theme {\n    display: flex;\n    gap: 10px;\n}\n.theme-lang__btn-change-theme {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.light {\n    background-color: #Fdfff5;\n    \n}\n.dark {\n    background-color: #333333;\n}\n.night {\n    background-color: #0A3D62;\n\n}\n.theme-lang__lang {\n    color: inherit;\n    font-weight: 700;\n}\n/* .theme-lang__change-lang {\n} */\n\n.separator{\n    color: inherit;\n}\n\n.theme-lang__change-lang.active {\n    text-decoration: underline;\n}\n",""]);const d=s},719:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    color: black;\n    box-sizing: border-box;\n    border: 0;\n    list-style-type: none;\n    line-height: 1;\n}\n\nbutton {\n    padding: 0;\n    border: none;\n    font: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n    -webkit-user-select:none;\n    user-select: none;\n}\nimg, svg {\n\tmax-width: 100%;\n\theight: auto;\n}\ninput:focus, input:active,\nbutton:focus, button:active {\n    outline: none;\n}\na, a:link, a:visited  {\n    text-decoration: none;\n    cursor: pointer;\n}",""]);const c=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var m=o(g,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},61:()=>{document.documentElement.setAttribute("data-theme","light");const n=document.documentElement,e=document.querySelector(".light"),t=document.querySelector(".dark"),r=document.querySelector(".night");e.addEventListener("click",(e=>{"true"===e.target.getAttribute("light-mode")||(n.setAttribute("data-theme","light"),e.target.setAttribute("light-mode","true"),t.setAttribute("dark-mode","false"),r.setAttribute("night-mode","false"))})),t.addEventListener("click",(t=>{"true"===t.target.getAttribute("dark-mode")||(n.setAttribute("data-theme","dark"),t.target.setAttribute("dark-mode","true"),e.setAttribute("light-mode","false"),r.setAttribute("night-mode","false"))})),r.addEventListener("click",(r=>{"true"===r.target.getAttribute("night-mode")||(n.setAttribute("data-theme","night"),r.target.setAttribute("night-mode","true"),t.setAttribute("dark-mode","false"),e.setAttribute("light-mode","false"))}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";t(61);var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),l=t.n(c),s=t(540),d=t.n(s),u=t(113),p=t.n(u),g=t(331),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(g.A,m),g.A&&g.A.locals&&g.A.locals;var f=t(719),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;var b=t(206),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(b.A,v),b.A&&b.A.locals&&b.A.locals})()})();