(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={grid:"Workspace_grid__1m4EP","grid-col":"Workspace_grid-col__bR0Dt","grid-row":"Workspace_grid-row__1u63W","gutter-col":"Workspace_gutter-col__1I51l",editor:"Workspace_editor__2BKNi","gutter-row":"Workspace_gutter-row__2Cw2J",gutter:"Workspace_gutter__2EXl6",panel:"Workspace_panel__1OiOu",windowLabelCont:"Workspace_windowLabelCont__3qqfw",windowLabel:"Workspace_windowLabel__3EbGZ",CodeMirror:"Workspace_CodeMirror__2o2g8"}},20:function(e,t,n){e.exports={header:"Header_header__2xfuR",title:"Header_title__cW3ln",actions:"Header_actions__1uxXH",actionCont:"Header_actionCont__1_Yji",actionItem:"Header_actionItem__3wfN5"}},30:function(e,t,n){e.exports={logo:"Logo_logo__QzK70"}},37:function(e,t,n){e.exports=n(60)},45:function(e,t,n){},47:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(28),i=n.n(o),c=(n(45),n(29)),l=n(11),u=(n(47),n(20)),s=n.n(u),f=n(30),h=n.n(f),d=function(e){var t=e.size,n=e.size/10;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:3*t+2*n,height:2*t+n,className:h.a.logo},a.a.createElement("rect",{x:t+n,y:"0",width:t,height:t}),a.a.createElement("rect",{x:2*t+2*n,y:"0",width:t,height:t}),a.a.createElement("rect",{x:"0",y:t+n,width:t,height:t}),a.a.createElement("rect",{x:t+n,y:t+n,width:t,height:t}))},m=function(e){return a.a.createElement("div",{className:s.a.header},a.a.createElement("h1",null,a.a.createElement("span",{className:s.a.logo},a.a.createElement(d,{size:15})),a.a.createElement("span",{className:s.a.title},"ReadyPy")),a.a.createElement("div",{className:s.a.actions},a.a.createElement("nav",{className:s.a.actionCont},a.a.createElement("div",{className:s.a.actionItem},a.a.createElement("button",{onClick:e.handleLayoutChange},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M0,2.3C0,1,0.9,0,2,0h12c1.1,0,2,1,2,2.3v11.4c0,1.3-0.9,2.3-2,2.3H2c-1.1,0-2-1-2-2.3V2.3z M8.5,1.1v13.7H14 c0.6,0,1-0.5,1-1.1V2.3c0-0.6-0.4-1.1-1-1.1H8.5z M7.5,1.1H2c-0.6,0-1,0.5-1,1.1v11.4c0,0.6,0.4,1.1,1,1.1h5.5V1.1z"})),"Layout")),a.a.createElement("div",{className:s.a.actionItem},a.a.createElement("button",{onClick:e.handleThemeChange},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"})),"Theme")),a.a.createElement("div",{className:s.a.actionItem},a.a.createElement("button",{onClick:e.runCode},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},a.a.createElement("path",{d:"M13,8L2.7,2v12L13,8z M14.4,6.8c0.7,0.4,0.9,1.3,0.5,1.9c-0.1,0.2-0.3,0.4-0.5,0.5L3.1,15.8c-0.9,0.5-2.2-0.1-2.2-1.2V1.4 c0-1.2,1.3-1.8,2.2-1.2L14.4,6.8z"})),"Run")))))},p=n(35),v=n(12),g=n(24),y=n(4),w=n(36),b=n(17),E=y.c.baseTheme({"&.cm-editor.cm-focused":{outline:"0px"}}),_=function(e){var t=Object(r.useCallback)(function(t,n){e.setValue(t)},[]);return a.a.createElement(g.a,{value:e.value,height:"100%",placeholder:"Welcome to ReadyPy. Write your Python code here...",basicSetup:{defaultKeymap:!1},extensions:[Object(w.a)(),y.c.lineWrapping,E,y.q.of([{key:"Shift-Enter",preventDefault:!0,run:function(){e.runCode()}}].concat(Object(v.a)(b.a)))],onChange:t,theme:e.theme})},x=n(2),L=n(3),C=n(0),O=function(e){var t=y.e.fromClass(function(){function e(){Object(x.a)(this,e)}return Object(L.a)(e,[{key:"update",value:function(e){e.docChanged&&(e.view.scrollDOM.scrollTop=e.view.scrollDOM.scrollHeight)}}]),e}());return a.a.createElement(g.a,{value:e.value,height:"100%",basicSetup:{lineNumbers:!1,highlightActiveLine:!1,highlightActiveLineGutter:!1},extensions:[y.c.lineWrapping,y.c.editable.of(!1),C.f.readOnly.of(!0),t],theme:e.theme})},j=n(14),N=n.n(j),k=function(e){return Object(r.useEffect)(function(){!function(){var e=document.getElementById("split");e&&(e.style="")}()},[e.layout]),a.a.createElement(p.a,{render:function(t){var n=t.getGridProps,r=t.getGutterProps;return a.a.createElement("div",Object.assign({id:"split",className:"\n                        ".concat(N.a.grid,"\n                        ").concat("col"===e.layout?N.a["grid-col"]:N.a["grid-row"],"\n                    ")},n()),a.a.createElement("div",{className:N.a.panel,id:"editor"},a.a.createElement("div",{className:N.a.windowLabelCont},a.a.createElement("div",{className:N.a.windowLabel},a.a.createElement("span",null,"Python")),a.a.createElement("div",{className:N.a.windowLabel},a.a.createElement("button",{onClick:e.runCode},"Shift + Enter"))),a.a.createElement("div",{className:N.a.CodeMirror},a.a.createElement(_,{value:e.editorValue,theme:e.theme,setValue:e.setEditorValue,runCode:e.runCode}))),a.a.createElement("div",Object.assign({id:"split-gutter",className:"\n                            ".concat(N.a.gutter," \n                            ").concat("col"===e.layout?N.a["gutter-col"]:N.a["gutter-row"],"\n                        ")},"col"===e.layout?r("column",1):r("row",1))),a.a.createElement("div",{className:N.a.panel,id:"terminal"},a.a.createElement("div",{className:N.a.windowLabelCont},a.a.createElement("div",{className:N.a.windowLabel},a.a.createElement("span",null,"Shell")),a.a.createElement("div",{className:N.a.windowLabel},a.a.createElement("button",{onClick:e.clearTerminal},"Clear"))),a.a.createElement("div",{className:N.a.CodeMirror},a.a.createElement(O,{value:e.terminalValue,theme:e.theme,setValue:e.setTerminalValue}))))}})},M=n(33),S=n(27),P=n(34);function W(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new C(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=m.prototype=h.prototype=Object.create(p);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var I=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),s=u[0],f=u[1],h=Object(r.useState)("dark"),d=Object(l.a)(h,2),p=d[0],v=d[1],g=Object(r.useState)(Object(S.a)({settings:{caret:"#c6c6c6",fontFamily:'"Menlo", "Monaco", "Consolas", "Andale Mono", "Ubuntu Mono", "Courier New", monospace'}})),y=Object(l.a)(g,2),w=y[0],b=y[1],E=Object(r.useState)(window.innerWidth<768?"row":"col"),_=Object(l.a)(E,2),x=_[0],L=_[1],C=Object(r.useState)(null),O=Object(l.a)(C,2),j=O[0],N=O[1],T=function(){var e=Object(c.a)(A().mark(function e(){var t,n;return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=8;break}return e.next=3,Object(M.loadPyodide)({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.23.3/full",stdout:function(e){f(function(t){return t+e+"\n"})},stderr:function(e){f(function(t){return t+e+"\n"})}});case 3:t=e.sent,n={input_fixed:function(e){var t=prompt(e);return f(function(n){return n+e+t+"\n"}),t}},t.registerJsModule("fix",n),t.runPython("\n        from fix import input_fixed\n        input = input_fixed\n        __builtins__.input = input_fixed\n      "),N(t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){console.log(j),j&&(f(""),j.runPythonAsync(n).then(function(){N(null)}).catch(function(e){var t,n=e.message.split("\n"),r=1,a=W(n.entries());try{for(a.s();!(t=a.n()).done;){var o=t.value,i=Object(l.a)(o,2),c=i[0];if(i[1].includes('File "<exec>"')){r=c;break}}}catch(e){a.e(e)}finally{a.f()}n.splice(1,r-1);var u=n.join("\n");f(u),N(null)}))};return Object(r.useEffect)(function(){T()},[j]),a.a.createElement("div",{id:"app",className:p},a.a.createElement(m,{runCode:I,updateCode:o,handleThemeChange:function(){"light"===p?(b(Object(S.a)({settings:{caret:"#c6c6c6",fontFamily:'"Menlo", "Monaco", "Consolas", "Andale Mono", "Ubuntu Mono", "Courier New", monospace'}})),v("dark")):(b(Object(P.a)({settings:{caret:"#c6c6c6",fontFamily:'"Menlo", "Monaco", "Consolas", "Andale Mono", "Ubuntu Mono", "Courier New", monospace'}})),v("light"))},handleLayoutChange:function(){L(function(e){return"col"===e?"row":"col"})}}),a.a.createElement(k,{theme:w,layout:x,editorValue:n,setEditorValue:o,terminalValue:s,setTerminalValue:f,runCode:I,clearTerminal:function(){f("")}}))},V=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,70)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null))),V()}},[[37,12,11]]]);
//# sourceMappingURL=main.599274c7.chunk.js.map