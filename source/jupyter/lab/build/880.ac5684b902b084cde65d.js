"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,o)=>{o.r(t);var r=o(50715),s=o(88470),l=o(1468);const a=Promise.all([o.e(4640),o.e(2494)]).then(o.bind(o,72494)),n=[o.e(1390).then(o.t.bind(o,91390,23)),o.e(6694).then(o.t.bind(o,56694,23)),o.e(7315).then(o.t.bind(o,57315,23))],i=["@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/help-extension:about"];async function c(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}!async function(){await a;const e=[],t=[],f=[],h=[],u=[],p=[],y=JSON.parse(l.PageConfig.getOption("federated_extensions")),b=new Set;function*x(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)l.PageConfig.Extension.isDisabled(e.id)||i.includes(e.id)||i.includes(e.id.split(":")[0])||(yield e)}y.forEach((e=>{e.liteExtension?p.push(c(e.name,e.extension)):(e.extension&&(b.add(e.name),t.push(c(e.name,e.extension))),e.mimeExtension&&(b.add(e.name),f.push(c(e.name,e.mimeExtension))),e.style&&h.push(c(e.name,e.style)))}));const d=[];if(!b.has("@jupyterlab/json-extension"))try{let e=o(23661);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/vega5-extension"))try{let e=o(3546);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlite/iframe-extension"))try{let e=o(98932);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))d.push(t);else console.error(e.reason)})),!b.has("@jupyterlab/application-extension"))try{let t=o(495);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/apputils-extension"))try{let t=o(2488);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/celltags-extension"))try{let t=o(8924);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/codemirror-extension"))try{let t=o(54015);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/completer-extension"))try{let t=o(9543);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/console-extension"))try{let t=o(52828);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/csvviewer-extension"))try{let t=o(66301);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/docmanager-extension"))try{let t=o(31461);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/filebrowser-extension"))try{let t=o(18314);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/fileeditor-extension"))try{let t=o(30091);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/help-extension"))try{let t=o(69470);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/imageviewer-extension"))try{let t=o(21787);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/inspector-extension"))try{let t=o(46438);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/launcher-extension"))try{let t=o(62412);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/logconsole-extension"))try{let t=o(85333);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mainmenu-extension"))try{let t=o(31824);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/markdownviewer-extension"))try{let t=o(9171);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mathjax2-extension"))try{let t=o(38183);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/notebook-extension"))try{let t=o(92033);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/rendermime-extension"))try{let t=o(87603);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/running-extension"))try{let t=o(64256);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/settingeditor-extension"))try{let t=o(83012);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/shortcuts-extension"))try{let t=o(45651);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/statusbar-extension"))try{let t=o(50551);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-dark-extension"))try{let t=o(72180);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-light-extension"))try{let t=o(21443);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/toc-extension"))try{let t=o(94735);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/tooltip-extension"))try{let t=o(63080);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/translation-extension"))try{let t=o(14092);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/ui-components-extension"))try{let t=o(92571);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlite/application-extension"))try{let t=o(79184);for(let o of x(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of x(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(n)).forEach((e=>{for(let t of x(e))u.push(t)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))u.push(t);else console.error(e.reason)})),(await Promise.allSettled(h)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const j=new s.JupyterLiteServer({});j.registerPluginModules(u),await j.start();const{serviceManager:m}=j,w=new r.JupyterLab({mimeExtensions:d,serviceManager:m,disabled:i});w.name="JupyterLite",w.registerPluginModules(e),console.log("Starting app"),await w.start(),console.log(`${w.name} started, waiting for restore`),await w.restored,console.log(`${w.name} restored`)}()}}]);
//# sourceMappingURL=880.ac5684b902b084cde65d.js.map