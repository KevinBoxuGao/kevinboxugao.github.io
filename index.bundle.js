!function(e){function t(t){for(var r,o,l=t[0],u=t[1],s=t[2],c=0,f=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,1:1,4:1,5:1,6:1}[e]&&t.push(o[e]=new Promise((function(t,n){for(var r=e+".css",a=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(d=i[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return t()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){var d;if((s=(d=c[u]).getAttribute("data-href"))===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=function(e){return l.p+""+({}[e]||e)+".bundle.js"}(e);var s=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=s;i.push([32,3]),n()}({25:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=n(8),l=(n(38),n(26)),u=n.n(l),s=n(27),c=n(31);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m=u()(),p=a.a.lazy((function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,58)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return d(e,1)[0]}))})),v=a.a.lazy((function(){return Promise.all([Promise.all([n.e(1),n.e(5)]).then(n.bind(null,59)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return d(e,1)[0]}))})),b=a.a.lazy((function(){return Promise.all([Promise.all([n.e(0),n.e(6)]).then(n.bind(null,60)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return d(e,1)[0]}))})),h=a.a.lazy((function(){return Promise.all([n.e(7).then(n.bind(null,61)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return d(e,1)[0]}))}));function g(){return a.a.createElement(o.Suspense,{fallback:a.a.createElement(c.a,null)},a.a.createElement(s.a,null),a.a.createElement(i.d,null,a.a.createElement(i.b,{exact:!0,path:"/",component:p}),a.a.createElement(i.b,{path:"/work",component:b}),a.a.createElement(i.b,{path:"/about",component:v}),a.a.createElement(i.b,{path:"/404",component:h}),a.a.createElement(i.a,{to:"/404"})))}var y,C,G=g;t.a=G,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(m,"history","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(p,"Home","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(v,"About","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(b,"Work","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(h,"PageNotFound","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(g,"App","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js"),y.register(G,"default","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\app\\index.js")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}).call(this,n(17)(e))},27:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=n(11),l=n(28),u=n(12);n(46);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f={open:{x:"0%",transition:{stiffness:20}},closed:{x:"-100%",transition:{stiffness:400}}};function m(){var e=s(Object(o.useState)(!1),2),t=e[0],n=e[1],r=function(){n(!t)};return a.a.createElement(i.b.div,{className:"menu",initial:!1,animate:t?"open":"closed"},a.a.createElement(l.a,{toggle:r}),a.a.createElement(i.b.div,{className:"menu_page",variants:f},a.a.createElement("ul",{className:"menu_links"},a.a.createElement("li",null,a.a.createElement(u.b,{to:"/",className:"menu_link",onClick:r},"Home")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/work",className:"menu_link",onClick:r},"Work")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/about",className:"menu_link",onClick:r},"About")))))}d(m,"useState{[menuOpen, toggleMenu](false)}");var p,v,b=m;t.a=b,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"sidebar","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\index.js"),p.register(m,"Menu","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\index.js"),p.register(b,"default","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\index.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,n(17)(e))},28:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=n(11);n(44);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u={default:{scale:1},hover:{scale:1.2}},s=function(e){return a.a.createElement(i.b.path,l({fill:"transparent",strokeWidth:"2",stroke:"white"},e))};function c(e){return a.a.createElement(i.b.button,{className:"menu_button",variants:u,intial:"default",whileHover:"hover",onClick:e.toggle},a.a.createElement("svg",{width:"3em",viewBox:"0 0 20 20"},a.a.createElement(s,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),a.a.createElement(s,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),a.a.createElement(s,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})))}var d,f,m=c;t.a=m,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"buttonVariants","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\Toggle\\index.js"),d.register(s,"Path","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\Toggle\\index.js"),d.register(c,"Toggle","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\Toggle\\index.js"),d.register(m,"default","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\components\\menu\\Toggle\\index.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,n(17)(e))},31:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=n(11);n(53);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,s=function(){return a.a.createElement(i.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"loading-screen"},a.a.createElement("div",{className:"loading-svg"},a.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 669 669",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M283.267 229.413C275.598 229.519 268.021 231.136 260.97 234.172C253.919 237.207 247.531 241.602 242.17 247.105C236.81 252.608 232.583 259.111 229.73 266.244C226.877 273.376 225.454 280.998 225.543 288.675C225.632 296.351 227.23 303.931 230.247 310.982C233.263 318.034 237.639 324.418 243.125 329.771C248.61 335.124 255.098 339.341 262.217 342.18C269.336 345.02 276.947 346.427 284.616 346.321L284.264 315.757C280.605 315.807 276.973 315.136 273.576 313.781C270.18 312.426 267.084 310.414 264.467 307.86C261.85 305.306 259.762 302.26 258.323 298.896C256.883 295.532 256.121 291.915 256.079 288.252C256.036 284.59 256.715 280.953 258.076 277.55C259.437 274.147 261.454 271.044 264.012 268.419C266.569 265.793 269.617 263.696 272.981 262.248C276.346 260.8 279.961 260.028 283.62 259.978L283.267 229.413Z",fill:"white"}),a.a.createElement("path",{d:"M283.683 315.681C276.014 315.787 268.438 317.404 261.386 320.44C254.335 323.475 247.947 327.87 242.587 333.373C237.226 338.876 232.999 345.379 230.146 352.512C227.293 359.644 225.871 367.266 225.959 374.942C226.048 382.619 227.646 390.199 230.663 397.25C233.679 404.302 238.055 410.686 243.541 416.039C249.026 421.392 255.514 425.608 262.633 428.448C269.752 431.288 277.364 432.695 285.033 432.588L284.68 402.024C281.021 402.075 277.389 401.404 273.992 400.049C270.596 398.694 267.5 396.682 264.883 394.128C262.266 391.574 260.178 388.528 258.739 385.164C257.3 381.799 256.537 378.183 256.495 374.52C256.452 370.858 257.131 367.221 258.492 363.818C259.854 360.415 261.87 357.312 264.428 354.686C266.985 352.061 270.033 349.964 273.398 348.516C276.762 347.067 280.377 346.296 284.036 346.245L283.683 315.681Z",fill:"white"}),a.a.createElement("path",{d:"M292.062 229.138H336.737V431.937H292.062V229.138Z",fill:"white"}),a.a.createElement("path",{d:"M443.913 229.953H394.771L365.733 279.379L336.695 328.805L394.771 432.752H443.913L394.771 328.805L443.913 229.953Z",fill:"white"}),a.a.createElement("path",{d:"M559 331.001C559 383.056 540.951 433.5 507.927 473.739C474.904 513.978 428.95 541.522 377.895 551.678C326.841 561.833 273.844 553.972 227.936 529.433C182.027 504.895 146.048 465.197 126.127 417.105C106.207 369.012 103.578 315.5 118.688 265.687C133.799 215.873 165.715 172.84 208.997 143.92C252.279 115 304.25 101.982 356.054 107.084C407.858 112.187 456.291 135.093 493.099 171.902L459.903 205.098C430.775 175.969 392.448 157.842 351.452 153.804C310.457 149.767 269.33 160.069 235.079 182.955C200.827 205.841 175.571 239.895 163.613 279.315C151.655 318.734 153.736 361.081 169.5 399.139C185.264 437.197 213.737 468.612 250.066 488.03C286.396 507.449 328.334 513.67 368.737 505.633C409.139 497.597 445.504 475.8 471.637 443.957C497.77 412.114 512.054 372.195 512.054 331.001L559 331.001Z",fill:"white"}),a.a.createElement("path",{d:"M448.521 331.001H548.222V376.809H448.521V331.001Z",fill:"white"}),a.a.createElement(i.b.path,{d:"M559 331.001C559 383.056 540.951 433.5 507.927 473.739C474.904 513.978 428.95 541.522 377.895 551.678C326.841 561.833 273.844 553.972 227.936 529.433C182.027 504.895 146.048 465.197 126.127 417.105C106.207 369.012 103.578 315.5 118.688 265.687C133.799 215.873 165.715 172.84 208.997 143.92C252.279 115 304.25 101.982 356.054 107.084C407.858 112.187 456.291 135.093 493.099 171.902L459.903 205.098C430.775 175.969 392.448 157.842 351.452 153.804C310.457 149.767 269.33 160.069 235.079 182.955C200.827 205.841 175.571 239.895 163.613 279.315C151.655 318.734 153.736 361.081 169.5 399.139C185.264 437.197 213.737 468.612 250.066 488.03C286.396 507.449 328.334 513.67 368.737 505.633C409.139 497.597 445.504 475.8 471.637 443.957C497.77 412.114 512.054 372.195 512.054 331.001L559 331.001Z",fill:"white",animate:{scale:[1,2,2,1,1],rotate:[0,0,360,360,360]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],loop:1/0,repeatDelay:1}}))))},c=s;t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"Loading","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\pages\\loading\\index.js"),l.register(c,"default","C:\\Users\\kevin\\Documents\\GitHub\\KevinBoxuGao.github.io\\src\\pages\\loading\\index.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(17)(e))},32:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),o=n(23),a=n.n(o),i=n(25),l=n(12);n(55),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;a.a.render(r.a.createElement(l.a,{basename:e.env.PUBLIC_URL},r.a.createElement(i.a,null)),document.getElementById("root"))}.call(this,n(33))},38:function(e,t,n){var r=n(39);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},39:function(e,t,n){},44:function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},45:function(e,t,n){},46:function(e,t,n){var r=n(47);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},47:function(e,t,n){},53:function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},54:function(e,t,n){},55:function(e,t,n){var r=n(56);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},56:function(e,t,n){}});