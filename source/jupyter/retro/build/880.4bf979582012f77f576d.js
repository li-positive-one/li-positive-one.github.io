(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,n)=>{"use strict";n.r(t);var o=n(88470),s=n(1468);n(39227);const i=[n.e(1390).then(n.t.bind(n,91390,23)),n.e(6694).then(n.t.bind(n,56694,23)),n.e(7315).then(n.t.bind(n,57315,23))],r=[n.e(8932).then(n.t.bind(n,98932,23)),Promise.all([n.e(4462),n.e(3315),n.e(8151),n.e(8367),n.e(8627),n.e(9938),n.e(6927),n.e(4819)]).then(n.bind(n,4462)),n.e(8868).then(n.t.bind(n,78868,23))];async function a(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),n}}!async function(){const e=await Promise.all(r);let t=[n(79184),n(52313),n(87734).default.filter((({id:e})=>!["@retrolab/application-extension:logo","@retrolab/application-extension:opener"].includes(e))),n(10183),n(72321),n(495).default.filter((({id:e})=>["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy"].includes(e))),n(2488).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu"].includes(e))),n(54015).default.filter((({id:e})=>["@jupyterlab/codemirror-extension:services","@jupyterlab/codemirror-extension:codemirror"].includes(e))),n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:manager"].includes(e))),n(52828),n(31461).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin"].includes(e))),n(31824),n(38183),n(92033).default.filter((({id:e})=>["@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"].includes(e))),n(87603),n(45651),n(21443),n(72180),n(14092)];switch(s.PageConfig.getOption("retroPage")){case"tree":t=t.concat([n(18314).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file"].includes(e))),n(71135).default.filter((({id:e})=>"@retrolab/tree-extension:new-terminal"!==e))]);break;case"notebooks":t=t.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:notebooks"].includes(e))),n(63080).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"].includes(e)))]);break;case"consoles":t=t.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:consoles"].includes(e))),n(63080).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"].includes(e)))]);break;case"edit":t=t.concat([n(9543).default.filter((({id:e})=>["@jupyterlab/completer-extension:files"].includes(e))),n(30091).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:plugin"].includes(e))),n(18314).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory"].includes(e)))])}const l=[],u=[],d=[],p=[],c=[],f=JSON.parse(s.PageConfig.getOption("federated_extensions")),m=new Set;function*b(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(t)?t:[t];for(let e of n)s.PageConfig.Extension.isDisabled(e.id)||(yield e)}f.forEach((e=>{e.liteExtension?c.push(a(e.name,e.extension)):(e.extension&&(m.add(e.name),l.push(a(e.name,e.extension))),e.mimeExtension&&(m.add(e.name),u.push(a(e.name,e.mimeExtension))),e.style&&d.push(a(e.name,e.style)))})),(await Promise.allSettled(u)).forEach((t=>{if("fulfilled"===t.status)for(let n of b(t.value))e.push(n);else console.error(t.reason)})),(await Promise.allSettled(l)).forEach((e=>{if("fulfilled"===e.status)for(let n of b(e.value))t.push(n);else console.error(e.reason)})),(await Promise.all(i)).forEach((e=>{for(let t of b(e))p.push(t)})),(await Promise.allSettled(c)).forEach((e=>{if("fulfilled"===e.status)for(let t of b(e.value))p.push(t);else console.error(e.reason)}));const y=new o.JupyterLiteServer({});y.registerPluginModules(p),await y.start();const{serviceManager:h}=y,{RetroApp:g}=n(74158),x=new g({serviceManager:h,mimeExtensions:e});x.name="RetroLite",x.registerPluginModules(t),console.log("Starting app"),await x.start(),console.log(`${x.name} started, waiting for restore`),await x.restored,console.log(`${x.name} restored`)}()},39227:(e,t,n)=>{"use strict";n.r(t),n(30756),n(81088),n(60734),n(69213),n(41044),n(42413),n(82053),n(10139),n(7537),n(19697),n(63815),n(27784),n(56656),n(41901),n(15619),n(58739),n(98143),n(21499),n(45074),n(43131),n(13914),n(85426),n(74727),n(20598),n(58489),n(34232),n(38527)},3472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},88742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const a=r},49027:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/javascript-kernel-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},10196:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/retro-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},23443:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=n(94015),s=n.n(o),i=n(23645),r=n.n(i)()(s());r.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=r},98143:(e,t,n)=>{var o=n(3472);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},45074:(e,t,n)=>{var o=n(88742);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},43131:(e,t,n)=>{var o=n(49027);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},13914:(e,t,n)=>{var o=n(10196);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)},85426:(e,t,n)=>{var o=n(23443);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(93379)(o,{insert:"head",singleton:!1}),o.locals&&(e.exports=o.locals)}}]);
//# sourceMappingURL=880.4bf979582012f77f576d.js.map