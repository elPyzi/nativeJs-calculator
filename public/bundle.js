(()=>{var t={331:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"html{\n    font-family: 'Courier New', Courier, monospace;\n}",""]);const c=i},206:(t,n,e)=>{"use strict";e.d(n,{A:()=>u});var r=e(601),o=e.n(r),a=e(314),i=e.n(a),c=e(719),s=e(331),l=i()(o());l.i(c.A),l.i(s.A),l.push([t.id,"/* обнулирование стилей */\n\n:root[data-theme='light']{\n    --background-color-primary:#80c8c9;\n    --background-color-greeting:#E0EAD6;\n    --main-black-color:#333333;\n    --second-black-color:#4D4D4D;\n}\n:root[data-theme='night']{\n    --background-color-primary:#0E1433;\n    --background-color-greeting:#072946;\n    --main-black-color:#E0EAD6;\n    --second-black-color:#B0B0A0;\n}\n:root[data-theme='dark']{\n    --background-color-primary:#151515;\n    --background-color-greeting:#000000;\n    --main-black-color:#FCFCEE;\n    --second-black-color:#f2f3f4;\n}\n/* #1E1E1E для ночной темы */\nbody{\n    background-color: var(--background-color-primary);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 70px;\n\n    min-height: 100vh;\n}\n\n\n.greeting {\n\n    background-color: var(--background-color-greeting);\n    max-width: 35%;\n    min-width: 30%;\n    padding: 20px 20px 30px 20px;\n    color: var(--main-black-color);\n\n    border: 5px solid var(--main-black-color);\n    border-radius: 15px;\n    box-shadow: 7px 7px var(--second-black-color);\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    \n}\n.greeting__title {\n    color: inherit;\n    margin-bottom: 40px;\n}\n.greeting__title-label {\n    color: inherit;\n    margin-bottom: 40px;\n\n    font-weight: 700;\n    font-size: 18px;\n}\n\n/* .greeting__title-label:last-of-type{\n    margin-bottom: 30px;\n} */\n\n.greeting__links-container {\n    color: inherit;\n}\n.greeting__link {\n    color: inherit;\n    font-weight: 600;\n    font-size: 18px;\n\n    padding: 10px 10px;\n    border: 3px solid var(--main-black-color);\n    border-radius: 5px;\n\n    transition: all 0.4s;\n}\n\n\n.greeting__link:hover{\n    background-color: var(--main-black-color);\n    color: var(--background-color-greeting);\n}\n\n\n\n.theme-lang {\n    background-color: var(--background-color-greeting);\n    max-width: 35%;\n    min-width: 30%;\n    padding: 20px 40px;\n    color: var(--main-black-color);\n\n    border: 5px solid var(--main-black-color);\n    border-radius: 15px;\n    box-shadow: 7px 7px var(--second-black-color);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.theme-lang__theme {\n    display: flex;\n    gap: 10px;\n}\n.theme-lang__btn-change-theme {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.light {\n    background-color: #Fdfff5;\n    \n}\n.dark {\n    background-color: #333333;\n}\n.night {\n    background-color: #0A3D62;\n\n}\n.theme-lang__lang {\n    color: inherit;\n    font-weight: 700;\n}\n/* .theme-lang__change-lang {\n} */\n\n.separator{\n    color: inherit;\n}\n\n.theme-lang__change-lang.active {\n    text-decoration: underline;\n}\n",""]);const u=l},719:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"*,\n*::after,\n*::before {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    color: black;\n    box-sizing: border-box;\n    border: 0;\n    list-style-type: none;\n    line-height: 1;\n}\n\nbutton {\n    padding: 0;\n    border: none;\n    font: inherit;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n    -webkit-user-select:none;\n    user-select: none;\n}\nimg, svg {\n\tmax-width: 100%;\n\theight: auto;\n}\ninput:focus, input:active,\nbutton:focus, button:active {\n    outline: none;\n}\na, a:link, a:visited  {\n    text-decoration: none;\n    cursor: pointer;\n}",""]);const c=i},314:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var g=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)n[g].references++,n[g].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=r(t,o),l=0;l<a.length;l++){var u=e(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},61:()=>{const t=document.documentElement;!function(){const n=localStorage.getItem("currentTheme");if(n)switch(n){case"light":default:t.setAttribute("data-theme","light");break;case"dark":t.setAttribute("data-theme","dark");break;case"night":t.setAttribute("data-theme","night")}else t.setAttribute("data-theme","light")}();const n=document.querySelector(".light"),e=document.querySelector(".dark"),r=document.querySelector(".night");n.addEventListener("click",(n=>{"true"===n.target.getAttribute("light-mode")||(t.setAttribute("data-theme","light"),n.target.setAttribute("light-mode","true"),e.setAttribute("dark-mode","false"),r.setAttribute("night-mode","false"),localStorage.setItem("currentTheme","light"))})),e.addEventListener("click",(e=>{"true"===e.target.getAttribute("dark-mode")||(t.setAttribute("data-theme","dark"),e.target.setAttribute("dark-mode","true"),n.setAttribute("light-mode","false"),r.setAttribute("night-mode","false"),localStorage.setItem("currentTheme","dark"))})),r.addEventListener("click",(r=>{"true"===r.target.getAttribute("night-mode")||(t.setAttribute("data-theme","night"),r.target.setAttribute("night-mode","true"),e.setAttribute("dark-mode","false"),n.setAttribute("light-mode","false"),localStorage.setItem("currentTheme","night"))}))}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{"use strict";e(61);var t=e(72),n=e.n(t),r=e(825),o=e.n(r),a=e(659),i=e.n(a),c=e(56),s=e.n(c),l=e(540),u=e.n(l),d=e(113),g=e.n(d),p=e(331),h={};h.styleTagTransform=g(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(p.A,h),p.A&&p.A.locals&&p.A.locals;var m=e(719),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;var b=e(206),v={};v.styleTagTransform=g(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(b.A,v),b.A&&b.A.locals&&b.A.locals,e.p})()})();