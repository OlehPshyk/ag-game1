!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){"undefined"!=typeof self&&self,e.exports=(()=>{var e={75:function(e){(function(){var n,r,o,i,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],l=o["cancel"+a]||o["cancelRequest"+a],c=0;!s&&c<i.length;c++)s=o[i[c]+"Request"+a],l=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!s||!l){var u=0,d=0,p=[];s=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";r.d(o,{default:()=>k});var e=r(4087),t=r.n(e);const n=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",l="REMOVE_CHARACTER",c="REMOVE_ALL",u="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",p="CALL_FUNCTION",h="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",v="CHANGE_CURSOR",y="PASTE_STRING",g="HTML_TAG";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const k=function(){function r(o,b){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),_(this,"setupWrapperElement",(function(){w.state.elements.container&&(w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor))})),_(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),_(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),_(this,"stop",(function(){return w.state.eventLoop&&((0,e.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),_(this,"pauseFor",(function(e){return w.addEventToQueue(d,{ms:e}),w})),_(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(w.options.pauseFor),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)})),w)})),_(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n(e))return w.typeOutHTMLString(e,t);if(e){var r=w.options||{},o=r.stringSplitter,i="function"==typeof o?o(e):e.split("");w.typeCharacters(i,t)}return w})),_(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(y,{character:e,node:t}),w)})),_(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",w.addEventToQueue(h,{node:a,parentNode:t}),n?w.pasteString(s,a):w.typeString(s,a)):a.textContent&&(n?w.pasteString(a.textContent,t):w.typeString(a.textContent,t))}return w})),_(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(c,{speed:e}),w})),_(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(f,{speed:e}),w})),_(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(m,{delay:e}),w})),_(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(v,{cursor:e}),w})),_(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(l);return w})),_(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return w.addEventToQueue(p,{cb:e,thisArg:t}),w})),_(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(s,{character:e,node:t})})),w})),_(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(l)})),w})),_(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w.options.loop;return r?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),_(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return w.state[r]=n?[o].concat(E(w.state[r])):[].concat(E(w.state[r]),[o]),w})),_(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),n=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=E(w.state.calledEvents),w.state.calledEvents=[],w.options=T({},w.state.initialOptions)}if(w.state.eventLoop=t()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var r,o=E(w.state.eventQueue),i=o.shift();if(!(n<=(r=i.eventName===u||i.eventName===l?"natural"===w.options.deleteSpeed?a(40,80):w.options.deleteSpeed:"natural"===w.options.delay?a(120,160):w.options.delay))){var b=i.eventName,_=i.eventArgs;switch(w.logInDevMode({currentEvent:i,state:w.state,delay:r}),b){case y:case s:var k=_.character,A=_.node,C=document.createTextNode(k),S=C;w.options.onCreateTextNode&&"function"==typeof w.options.onCreateTextNode&&(S=w.options.onCreateTextNode(k,C)),S&&(A?A.appendChild(S):w.state.elements.wrapper.appendChild(S)),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:"TEXT_NODE",character:k,node:S}]);break;case l:o.unshift({eventName:u,eventArgs:{removingCharacterNode:!0}});break;case d:var O=i.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(O);break;case p:var L=i.eventArgs,N=L.cb,D=L.thisArg;N.call(D,{elements:w.state.elements});break;case h:var M=i.eventArgs,x=M.node,F=M.parentNode;F?F.appendChild(x):w.state.elements.wrapper.appendChild(x),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:g,node:x,parentNode:F||w.state.elements.wrapper}]);break;case c:var q=w.state.visibleNodes,R=_.speed,I=[];R&&I.push({eventName:f,eventArgs:{speed:R,temp:!0}});for(var j=0,P=q.length;j<P;j++)I.push({eventName:u,eventArgs:{removingCharacterNode:!1}});R&&I.push({eventName:f,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,I);break;case u:var H=i.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var Q=w.state.visibleNodes.pop(),B=Q.type,G=Q.node,V=Q.character;w.options.onRemoveNode&&"function"==typeof w.options.onRemoveNode&&w.options.onRemoveNode({node:G,character:V}),G&&G.parentNode.removeChild(G),B===g&&H&&o.unshift({eventName:u,eventArgs:{}})}break;case f:w.options.deleteSpeed=i.eventArgs.speed;break;case m:w.options.delay=i.eventArgs.delay;break;case v:w.options.cursor=i.eventArgs.cursor,w.state.elements.cursor.innerHTML=i.eventArgs.cursor}w.options.loop&&(i.eventName===u||i.eventArgs&&i.eventArgs.temp||(w.state.calledEvents=[].concat(E(w.state.calledEvents),[i]))),w.state.eventQueue=o,w.state.lastFrameTime=e}}})),o)if("string"==typeof o){var k=document.querySelector(o);if(!k)throw new Error("Could not find container element");this.state.elements.container=k}else this.state.elements.container=o;b&&(this.options=T(T({},this.options),b)),this.state.initialOptions=T({},this.options),this.init()}var o;return(o=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(c,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,o),r}()})(),o.default})()}).call(this,n(4))},function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null};function o(e){console.error("VanillaModal: "+e)}function i(e,t){var n=(t||document).querySelector(e);return n||o(e+" not found in document."),n}function a(e,t){e instanceof HTMLElement||o("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter((function(e){return e!==t})).concat(t).join(" "))}function s(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),r=0;r<n.length;r+=1)for(var o=e.target;o&&o!==document.body;){if(o===n[r])return o;o=o.parentNode}return null}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=function(e){return n({},r,e,{transitionEnd:(i=document.createElement("div"),(t=[{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],o=function(e){var t=e.key;return void 0!==i.style[t]},function(e){var n=t.filter(o);return n[0]?n[0][e]:void 0})("value"))});var t,o,i}(t),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return t(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,r=e.modalInner,o=e.modalContent;return{modal:i(t),page:i(n),modalInner:i(r,i(t)),modalContent:i(o,i(t))}}},{key:"addLoadedCssClass",value:function(){a(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var n=this.dom.page,r=this.settings,i=r.onBeforeOpen,s=r.onOpen;this.closeModal(t),this.current instanceof HTMLElement==0?(this.releaseNode(this.current),this.current=function(e){return e&&"string"==typeof e.hash?document.querySelector(e.hash):"string"==typeof e?document.querySelector(e):(o("No selector supplied to open()"),null)}(e),"function"==typeof i&&i.call(this,t),this.captureNode(this.current),a(n,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof s&&s.call(this,t)):o("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter((function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0})).length)}},{key:"close",value:function(e){var t,n,r=this.settings,i=r.transitions,a=r.transitionEnd,s=r.onBeforeClose,l=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof s&&s.call(this,e),t=this.dom.page,n=this.settings.class,t instanceof HTMLElement||o("Not a valid HTML element."),t.setAttribute("class",t.className.split(" ").filter((function(e){return e!==n})).join(" ")),i&&a&&l?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,r=this.settings.transitionEnd;n.addEventListener(r,(function o(){n.removeEventListener(r,o),t.closeModal(e)}))}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t,n=this.settings.closeKeys;t=n,"[object Array]"===Object.prototype.toString.call(t)&&t.length&&n.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var r=e.target;r&&r!==document.body;){if(r===n)return;r=r.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=s(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){s(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?o("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):o("Event listeners already removed.")}}]),e}();e.default=l})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){n(6),e.exports=n(5)},function(e,t){function n(e){this.context=e,this._createMasterGain(),this._createStereoDelay(),this._ampAttackTime=0,this._ampReleaseTime=2.2,this._filterAttackTime=.01,this._filterReleaseTime=1,this._filterEnvMod=0,this._filterCutoff=5e3,this._filterRes=0,this.setOscWave("sawtooth")}n.prototype.playNote=function(e,t,n,r){(t*=.5)<=0?t=.01:t>.5&&(t=.5),void 0!==r&&0!==r||(r=this.context.currentTime);var o=r,i=this.context.createGain(),a=this._createLowPassFilter();i.connect(a);var s=this.context.createOscillator();s.type=this.wave,s.connect(i);var l=this._MIDIToFrequency(e);s.frequency.value=l,s.start(0),s.stop(o+this._ampAttackTime+this._ampReleaseTime),i.gain.cancelScheduledValues(o),i.gain.setValueAtTime(0,o),i.gain.linearRampToValueAtTime(t,o+this._ampAttackTime),i.gain.exponentialRampToValueAtTime(.01,o+this._ampAttackTime+this._ampReleaseTime),a.frequency.cancelScheduledValues(o),a.frequency.value=this._filterCutoff*n,a.Q.value=this._filterRes,a.frequency.setValueAtTime(this._filterCutoff*n,o),a.frequency.linearRampToValueAtTime(this._filterCutoff*n+1e4*this._filterEnvMod,o+this._filterAttackTime),a.frequency.linearRampToValueAtTime(this._filterCutoff*n,o+this._filterAttackTime+this._filterReleaseTime)},n.prototype.setOscWave=function(e){var t;switch(e){case 0:t="sine";break;case 1:t="square";break;case 2:t="sawtooth";break;case 3:t="triangle";break;default:t="sawtooth"}this.wave=t},n.prototype.setMasterGain=function(e){this._gainNode.gain.value=.8*e},n.prototype.setAmpAttackTime=function(e){this._ampAttackTime=5*e},n.prototype.setAmpReleaseTime=function(e){this._ampReleaseTime=5*e},n.prototype.setFilterAttackTime=function(e){this._filterAttackTime=5*e},n.prototype.setFilterReleaseTime=function(e){this._filterReleaseTime=5*e},n.prototype.setFilterCutoff=function(e){this._filterCutoff=1e4*e},n.prototype.setFilterResonance=function(e){this._filterRes=2*e},n.prototype.setFilterEnvMod=function(e){this._filterEnvMod=10*e},n.prototype.setDelayTimeTempo=function(e,t){this.setDelayTime(60/e*t)},n.prototype.setDelayTime=function(e){this._leftDelay.delayTime.value=e,this._rightDelay.delayTime.value=2*e},n.prototype.setDelayFeedback=function(e){this._leftFeedback.gain.value=e,this._rightFeedback.gain.value=e},n.prototype._createMasterGain=function(){this._gainNode=this.context.createGain(),this._gainNode.connect(this.context.destination),this.setMasterGain(.5)},n.prototype._createLowPassFilter=function(){var e=this.context.createBiquadFilter();return e.type="lowpass",e.frequency.value=this._filterCutoff,e.Q.value=.99,e.connect(this._leftDelay),e.connect(this._rightDelay),e.connect(this._gainNode),e},n.prototype._createStereoDelay=function(){this._merger=this.context.createChannelMerger(2),this._merger.connect(this.context.destination),this._leftDelay=this.context.createDelay(),this._rightDelay=this.context.createDelay(),this._leftFeedback=this.context.createGain(),this._rightFeedback=this.context.createGain(),this._leftDelay.connect(this._leftFeedback),this._leftFeedback.connect(this._rightDelay),this._rightDelay.connect(this._rightFeedback),this._rightFeedback.connect(this._leftDelay),this._leftFeedback.connect(this._merger,0,0),this._rightFeedback.connect(this._merger,0,1),this.setDelayTime(.25),this.setDelayFeedback(0)},n.prototype.noteToMIDI=function(e,t){"DB"===(e=e.toUpperCase())?e="C#":"EB"===e?e="D#":"GB"===e?e="F#":"AB"===e?e="G#":"BB"===e&&(e="A#");return noteNumber=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"].indexOf(e)+12*t+21},n.prototype._MIDIToFrequency=function(e){return 440*Math.pow(2,(e-69)/12)},e.exports=n},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=()=>{let e=document.querySelector(".js-game-top");e&&e.addEventListener("click",e=>{const t=e.target.closest('[data-id="tg1-btn"]');t&&t.classList.toggle("active")});const t=document.querySelector("[data-attention-lamp]");setInterval(()=>{t&&t.classList.toggle("active")},1e3);const r=document.querySelectorAll("[data-hover-link]"),o=e=>{document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.add("active")},i=e=>{document.querySelector(`[data-link-lamp="${e.target.dataset.hoverLink}"]`).classList.remove("active")};[...r].map(e=>e.addEventListener("mouseover",o)),[...r].map(e=>e.addEventListener("focus",o)),[...r].map(e=>e.addEventListener("mouseleave",i)),[...r].map(e=>e.addEventListener("blur",i));const a=document.querySelector(".js-g2-btn");if(a){const e=()=>{a.classList.toggle("hover")};setTimeout(e,1e3),setInterval(e,5e3)}var s=new(n(3))(new(window.AudioContext||window.webkitAudioContext));s.setOscWave(3);let l=document.querySelector(".js-game-medium");l&&l.addEventListener("mousedown",e=>{const t=e.target.closest('[data-id="g3-btn"]');t&&(s.setDelayFeedback(.2),s.setDelayTimeTempo(110,.25),s.setFilterCutoff(.2),s.setAmpReleaseTime(.9),s.setFilterEnvMod(.8),s.setFilterAttackTime(.9),s.playNote(s.noteToMIDI(t.dataset.note||"C",3),1,1,0))})},o=n(1),i=n.n(o),a=n(0),s=n.n(a);var l=()=>{const e=document.querySelectorAll("[data-q-ch]"),t=document.querySelector("[data-q]");let n,r,o=null;const a=e=>(.052*e).toFixed(3),l=i=>{let s=parseInt(t.value);t.value=s+parseInt(i.target.dataset.qCh),n=parseInt(t.value),r=a(n),o&&(o.innerText=r),0===n?e[0].setAttribute("disabled",!0):e[0].removeAttribute("disabled"),30===n?e[1].setAttribute("disabled",!0):e[1].removeAttribute("disabled")};n=parseInt(t.value),r=a(parseInt(t.value)),0===n?e[0].setAttribute("disabled",!0):e[0].removeAttribute("disabled"),30===n?e[1].setAttribute("disabled",!0):e[1].removeAttribute("disabled");const c={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",loadClass:"vanilla-modal",class:"modal-visible",clickOutside:!0,closeKeys:[27],transitions:!0,onBeforeOpen:null,onBeforeClose:null,onOpen:()=>{let e,t;const n=()=>{let e=document.querySelector("#m-t2").querySelector(".Typewriter__cursor");e&&e.remove(),o=document.querySelector("[data-total]")};e=new s.a(document.getElementById("m-t1"),{loop:!1,delay:10}),t=new s.a(document.getElementById("m-t2"),{loop:!1,delay:10});let i=document.querySelector("#m-t2").querySelector(".Typewriter__cursor");i&&i.remove(),e.pauseFor(100).typeString("> Launch sequence initiated...<br><br>").pauseFor(300).typeString("> System demands 0.052 Ξ<br><br>").pauseFor(300).typeString("> Please enter quantity").start().callFunction(()=>{let e=document.querySelector("#m-t1").querySelector(".Typewriter__cursor");e&&e.remove(),t.pauseFor(100).typeString(`Total: <span data-total="total">${r}</span> Ξ`).start().callFunction(n)})},onClose:()=>{document.querySelector("#m-t1").innerHTML="",document.querySelector("#m-t2").innerHTML="",r=a(0),t.value=0,e[0].setAttribute("disabled",!0)}};new i.a(c);[...e].map(e=>e.addEventListener("click",l)),document.getElementById("mint-submit-form").addEventListener("submit",e=>{e.preventDefault();let t=e.target.querySelector("[data-q]").value;console.log("quantity Mint:",t),console.log("total Mint:",r),document.location.href=document.location.origin+"/second.html"})};document.addEventListener("DOMContentLoaded",()=>{r(),document.getElementById("popup-1")&&l()})}]);
//# sourceMappingURL=app.js.map