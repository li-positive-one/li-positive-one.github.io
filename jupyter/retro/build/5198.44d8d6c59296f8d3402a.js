(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5198],{53772:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var r=t(94015),o=t.n(r),a=t(23645),c=t.n(a)()(o());c.push([e.id,".cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }\n.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-variable { color: black; }\n.cm-s-elegant span.cm-variable-2 { color: #b11; }\n.cm-s-elegant span.cm-qualifier { color: #555; }\n.cm-s-elegant span.cm-keyword { color: #730; }\n.cm-s-elegant span.cm-builtin { color: #30a; }\n.cm-s-elegant span.cm-link { color: #762; }\n.cm-s-elegant span.cm-error { background-color: #fdd; }\n\n.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/elegant.css"],names:[],mappings:"AAAA,yFAAyF,WAAW,EAAE;AACtG,gCAAgC,WAAW,EAAE,kBAAkB,EAAE,gBAAgB,EAAE;AACnF,6BAA6B,WAAW,EAAE,kBAAkB,EAAE,gBAAgB,EAAE;AAChF,iCAAiC,YAAY,EAAE;AAC/C,mCAAmC,WAAW,EAAE;AAChD,kCAAkC,WAAW,EAAE;AAC/C,gCAAgC,WAAW,EAAE;AAC7C,gCAAgC,WAAW,EAAE;AAC7C,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,sBAAsB,EAAE;;AAEtD,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:[".cm-s-elegant span.cm-number, .cm-s-elegant span.cm-string, .cm-s-elegant span.cm-atom { color: #762; }\n.cm-s-elegant span.cm-comment { color: #262; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-meta { color: #555; font-style: italic; line-height: 1em; }\n.cm-s-elegant span.cm-variable { color: black; }\n.cm-s-elegant span.cm-variable-2 { color: #b11; }\n.cm-s-elegant span.cm-qualifier { color: #555; }\n.cm-s-elegant span.cm-keyword { color: #730; }\n.cm-s-elegant span.cm-builtin { color: #30a; }\n.cm-s-elegant span.cm-link { color: #762; }\n.cm-s-elegant span.cm-error { background-color: #fdd; }\n\n.cm-s-elegant .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-elegant .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n"],sourceRoot:""}]);const s=c},23645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var i=[].concat(e[s]);r&&o[i[0]]||(t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),n.push(i))}},n}},94015:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],c=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(i," */"),u=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([l]).join("\n")}return[a].join("\n")}},55198:(e,n,t)=>{var r=t(53772);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);t(93379)(r,{insert:"head",singleton:!1}),r.locals&&(e.exports=r.locals)},93379:(e,n,t)=>{"use strict";var r,o={},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[c]?r[c].parts.push(s):t.push(r[c]={id:c,parts:[s]})}return t}function s(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id],c=0;if(a){for(a.refs++;c<a.parts.length;c++)a.parts[c](r.parts[c]);for(;c<r.parts.length;c++)a.parts.push(d(r.parts[c],n))}else{for(var s=[];c<r.parts.length;c++)s.push(d(r.parts[c],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function A(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(a,c[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function d(e,n){var t,r,o;if(n.singleton){var a=p++;t=f||(f=i(n)),r=A.bind(null,t,a,!1),o=A.bind(null,t,a,!0)}else t=i(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e,n);return s(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var i=t[a],l=o[i.id];l&&(l.refs--,r.push(l))}e&&s(c(e,n),n);for(var u=0;u<r.length;u++){var A=r[u];if(0===A.refs){for(var m=0;m<A.parts.length;m++)A.parts[m]();delete o[A.id]}}}}}}]);
//# sourceMappingURL=5198.44d8d6c59296f8d3402a.js.map