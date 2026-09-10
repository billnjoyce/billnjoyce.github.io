(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Rp={exports:{}},pl={},Pp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),hv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),yv=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),Ev=Symbol.for("react.lazy"),oh=Symbol.iterator;function Sv(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Op=Object.assign,Dp={};function Jr(t,e,n){this.props=t,this.context=e,this.refs=Dp,this.updater=n||Ap}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bp(){}bp.prototype=Jr.prototype;function uc(t,e,n){this.props=t,this.context=e,this.refs=Dp,this.updater=n||Ap}var cc=uc.prototype=new bp;cc.constructor=uc;Op(cc,Jr.prototype);cc.isPureReactComponent=!0;var lh=Array.isArray,Lp=Object.prototype.hasOwnProperty,dc={current:null},Mp={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lp.call(e,r)&&!Mp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vs,type:t,key:s,ref:o,props:i,_owner:dc.current}}function Cv(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hc(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function Iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ah=/\/+/g;function ia(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Iv(""+t.key):e.toString(36)}function ro(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case hv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ia(o,0):r,lh(i)?(n="",t!=null&&(n=t.replace(ah,"$&/")+"/"),ro(i,e,n,"",function(u){return u})):i!=null&&(hc(i)&&(i=Cv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ah,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ia(s,l);o+=ro(s,e,n,a,i)}else if(a=Sv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ia(s,l++),o+=ro(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return ro(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},io={transition:null},Tv={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:io,ReactCurrentOwner:dc};function jp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!hc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Jr;U.Fragment=fv;U.Profiler=mv;U.PureComponent=uc;U.StrictMode=pv;U.Suspense=vv;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;U.act=jp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Op({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Lp.call(e,a)&&!Mp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:vs,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:_v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gv,_context:t},t.Consumer=t};U.createElement=Fp;U.createFactory=function(t){var e=Fp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:yv,render:t}};U.isValidElement=hc;U.lazy=function(t){return{$$typeof:Ev,_payload:{_status:-1,_result:t},_init:kv}};U.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=io.transition;io.transition={};try{t()}finally{io.transition=e}};U.unstable_act=jp;U.useCallback=function(t,e){return Me.current.useCallback(t,e)};U.useContext=function(t){return Me.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};U.useEffect=function(t,e){return Me.current.useEffect(t,e)};U.useId=function(){return Me.current.useId()};U.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Me.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};U.useRef=function(t){return Me.current.useRef(t)};U.useState=function(t){return Me.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Me.current.useTransition()};U.version="18.3.1";Pp.exports=U;var D=Pp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=D,Nv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Av=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function Up(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pv.call(e,r)&&!Ov.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Nv,type:t,key:s,ref:o,props:i,_owner:Av.current}}pl.Fragment=Rv;pl.jsx=Up;pl.jsxs=Up;Rp.exports=pl;var h=Rp.exports,zp={exports:{}},Ye={},$p={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,b){var L=N.length;N.push(b);e:for(;0<L;){var le=L-1>>>1,pe=N[le];if(0<i(pe,b))N[le]=b,N[L]=pe,L=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],L=N.pop();if(L!==b){N[0]=L;e:for(var le=0,pe=N.length,Ls=pe>>>1;le<Ls;){var Mn=2*(le+1)-1,ra=N[Mn],Fn=Mn+1,Ms=N[Fn];if(0>i(ra,L))Fn<pe&&0>i(Ms,ra)?(N[le]=Ms,N[Fn]=L,le=Fn):(N[le]=ra,N[Mn]=L,le=Mn);else if(Fn<pe&&0>i(Ms,L))N[le]=Ms,N[Fn]=L,le=Fn;else break e}}return b}function i(N,b){var L=N.sortIndex-b.sortIndex;return L!==0?L:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,y=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=N)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function w(N){if(_=!1,g(N),!v)if(n(a)!==null)v=!0,ta(k);else{var b=n(u);b!==null&&na(w,b.startTime-N)}}function k(N,b){v=!1,_&&(_=!1,m(P),P=-1),y=!0;var L=f;try{for(g(b),c=n(a);c!==null&&(!(c.expirationTime>b)||N&&!lt());){var le=c.callback;if(typeof le=="function"){c.callback=null,f=c.priorityLevel;var pe=le(c.expirationTime<=b);b=t.unstable_now(),typeof pe=="function"?c.callback=pe:c===n(a)&&r(a),g(b)}else r(a);c=n(a)}if(c!==null)var Ls=!0;else{var Mn=n(u);Mn!==null&&na(w,Mn.startTime-b),Ls=!1}return Ls}finally{c=null,f=L,y=!1}}var T=!1,R=null,P=-1,Y=5,F=-1;function lt(){return!(t.unstable_now()-F<Y)}function ui(){if(R!==null){var N=t.unstable_now();F=N;var b=!0;try{b=R(!0,N)}finally{b?ci():(T=!1,R=null)}}else T=!1}var ci;if(typeof p=="function")ci=function(){p(ui)};else if(typeof MessageChannel<"u"){var sh=new MessageChannel,dv=sh.port2;sh.port1.onmessage=ui,ci=function(){dv.postMessage(null)}}else ci=function(){S(ui,0)};function ta(N){R=N,T||(T=!0,ci())}function na(N,b){P=S(function(){N(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,ta(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var L=f;f=b;try{return N()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=f;f=N;try{return b()}finally{f=L}},t.unstable_scheduleCallback=function(N,b,L){var le=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?le+L:le):L=le,N){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=L+pe,N={id:d++,callback:b,priorityLevel:N,startTime:L,expirationTime:pe,sortIndex:-1},L>le?(N.sortIndex=L,e(u,N),n(a)===null&&N===n(u)&&(_?(m(P),P=-1):_=!0,na(w,L-le))):(N.sortIndex=pe,e(a,N),v||y||(v=!0,ta(k))),N},t.unstable_shouldYield=lt,t.unstable_wrapCallback=function(N){var b=f;return function(){var L=f;f=b;try{return N.apply(this,arguments)}finally{f=L}}}})(Wp);$p.exports=Wp;var Dv=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=D,qe=Dv;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Hi={};function ir(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(Hi[t]=e,t=0;t<e.length;t++)Bp.add(e[t])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},ch={};function Mv(t){return Va.call(ch,t)?!0:Va.call(uh,t)?!1:Lv.test(t)?ch[t]=!0:(uh[t]=!0,!1)}function Fv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,r){if(e===null||typeof e>"u"||Fv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fc,pc);Se[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fc,pc);Se[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fc,pc);Se[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function mc(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,i,r)&&(n=null),r||i===null?Mv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gt=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Gp=Symbol.for("react.offscreen"),dh=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,sa;function Ci(t){if(sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sa=e&&e[1]||""}return`
`+sa+t}var oa=!1;function la(t,e){if(!t||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function Uv(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=la(t.type,!1),t;case 11:return t=la(t.type.render,!1),t;case 1:return t=la(t.type,!0),t;default:return""}}function qa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pr:return"Fragment";case fr:return"Portal";case Ga:return"Profiler";case gc:return"StrictMode";case Ka:return"Suspense";case Qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vp:return(t.displayName||"Context")+".Consumer";case Hp:return(t._context.displayName||"Context")+".Provider";case _c:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yc:return e=t.displayName||null,e!==null?e:qa(t.type)||"Memo";case Xt:e=t._payload,t=t._init;try{return qa(t(e))}catch{}}return null}function zv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(e);case 8:return e===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $v(t){var e=Kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=$v(t))}function Qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ya(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qp(t,e){e=e.checked,e!=null&&mc(t,"checked",e,!1)}function Xa(t,e){qp(t,e);var n=kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ja(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ja(t,e.type,kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ja(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ii=Array.isArray;function xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Za(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ii(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kn(n)}}function Yp(t,e){var n=kn(e.value),r=kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zs,Jp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ri[e]=Ri[t]})});function Zp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+e).trim():e+"px"}function em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bv=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(t,e){if(e){if(Bv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var iu=null,Nr=null,Rr=null;function gh(t){if(t=Ss(t)){if(typeof iu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=vl(e),iu(t.stateNode,t.type,e))}}function tm(t){Nr?Rr?Rr.push(t):Rr=[t]:Nr=t}function nm(){if(Nr){var t=Nr,e=Rr;if(Rr=Nr=null,gh(t),e)for(t=0;t<e.length;t++)gh(e[t])}}function rm(t,e){return t(e)}function im(){}var aa=!1;function sm(t,e,n){if(aa)return t(e,n);aa=!0;try{return rm(t,e,n)}finally{aa=!1,(Nr!==null||Rr!==null)&&(im(),nm())}}function Gi(t,e){var n=t.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var su=!1;if(Ut)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){su=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{su=!1}function Hv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Pi=!1,So=null,Co=!1,ou=null,Vv={onError:function(t){Pi=!0,So=t}};function Gv(t,e,n,r,i,s,o,l,a){Pi=!1,So=null,Hv.apply(Vv,arguments)}function Kv(t,e,n,r,i,s,o,l,a){if(Gv.apply(this,arguments),Pi){if(Pi){var u=So;Pi=!1,So=null}else throw Error(C(198));Co||(Co=!0,ou=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function om(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(sr(t)!==t)throw Error(C(188))}function Qv(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _h(i),t;if(s===r)return _h(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function lm(t){return t=Qv(t),t!==null?am(t):null}function am(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=am(t);if(e!==null)return e;t=t.sibling}return null}var um=qe.unstable_scheduleCallback,yh=qe.unstable_cancelCallback,qv=qe.unstable_shouldYield,Yv=qe.unstable_requestPaint,ae=qe.unstable_now,Xv=qe.unstable_getCurrentPriorityLevel,wc=qe.unstable_ImmediatePriority,cm=qe.unstable_UserBlockingPriority,Io=qe.unstable_NormalPriority,Jv=qe.unstable_LowPriority,dm=qe.unstable_IdlePriority,ml=null,Ct=null;function Zv(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:nw,ew=Math.log,tw=Math.LN2;function nw(t){return t>>>=0,t===0?32:31-(ew(t)/tw|0)|0}var $s=64,Ws=4194304;function ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ki(l):(s&=o,s!==0&&(r=ki(s)))}else o=n&~i,o!==0?r=ki(o):s!==0&&(r=ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function rw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=rw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hm(){var t=$s;return $s<<=1,!($s&4194240)&&($s=64),t}function ua(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ws(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function sw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ec(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pm,Sc,mm,gm,_m,au=!1,Bs=[],cn=null,dn=null,hn=null,Ki=new Map,Qi=new Map,Zt=[],ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(t,e){switch(t){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Ki.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(e.pointerId)}}function fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&Sc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lw(t,e,n,r,i){switch(e){case"focusin":return cn=fi(cn,t,e,n,r,i),!0;case"dragenter":return dn=fi(dn,t,e,n,r,i),!0;case"mouseover":return hn=fi(hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ki.set(s,fi(Ki.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,fi(Qi.get(s)||null,t,e,n,r,i)),!0}return!1}function ym(t){var e=Wn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=om(n),e!==null){t.blockedOn=e,_m(t.priority,function(){mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return e=Ss(n),e!==null&&Sc(e),t.blockedOn=n,!1;e.shift()}return!0}function wh(t,e,n){so(t)&&n.delete(e)}function aw(){au=!1,cn!==null&&so(cn)&&(cn=null),dn!==null&&so(dn)&&(dn=null),hn!==null&&so(hn)&&(hn=null),Ki.forEach(wh),Qi.forEach(wh)}function pi(t,e){t.blockedOn===e&&(t.blockedOn=null,au||(au=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,aw)))}function qi(t){function e(i){return pi(i,t)}if(0<Bs.length){pi(Bs[0],t);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cn!==null&&pi(cn,t),dn!==null&&pi(dn,t),hn!==null&&pi(hn,t),Ki.forEach(e),Qi.forEach(e),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&Zt.shift()}var Pr=Gt.ReactCurrentBatchConfig,To=!0;function uw(t,e,n,r){var i=B,s=Pr.transition;Pr.transition=null;try{B=1,Cc(t,e,n,r)}finally{B=i,Pr.transition=s}}function cw(t,e,n,r){var i=B,s=Pr.transition;Pr.transition=null;try{B=4,Cc(t,e,n,r)}finally{B=i,Pr.transition=s}}function Cc(t,e,n,r){if(To){var i=uu(t,e,n,r);if(i===null)va(t,e,r,xo,n),vh(t,r);else if(lw(i,t,e,n,r))r.stopPropagation();else if(vh(t,r),e&4&&-1<ow.indexOf(t)){for(;i!==null;){var s=Ss(i);if(s!==null&&pm(s),s=uu(t,e,n,r),s===null&&va(t,e,r,xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else va(t,e,r,null,n)}}var xo=null;function uu(t,e,n,r){if(xo=null,t=vc(r),t=Wn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=om(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xo=t,null}function vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xv()){case wc:return 1;case cm:return 4;case Io:case Jv:return 16;case dm:return 536870912;default:return 16}default:return 16}}var on=null,Ic=null,oo=null;function wm(){if(oo)return oo;var t,e=Ic,n=e.length,r,i="value"in on?on.value:on.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hs(){return!0}function Eh(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hs:Eh,this.isPropagationStopped=Eh,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Xe(Zr),Es=re({},Zr,{view:0,detail:0}),dw=Xe(Es),ca,da,mi,gl=re({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(ca=t.screenX-mi.screenX,da=t.screenY-mi.screenY):da=ca=0,mi=t),ca)},movementY:function(t){return"movementY"in t?t.movementY:da}}),Sh=Xe(gl),hw=re({},gl,{dataTransfer:0}),fw=Xe(hw),pw=re({},Es,{relatedTarget:0}),ha=Xe(pw),mw=re({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=Xe(mw),_w=re({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yw=Xe(_w),vw=re({},Zr,{data:0}),Ch=Xe(vw),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sw[t])?!!e[t]:!1}function Tc(){return Cw}var Iw=re({},Es,{key:function(t){if(t.key){var e=ww[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ew[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kw=Xe(Iw),Tw=re({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=Xe(Tw),xw=re({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Nw=Xe(xw),Rw=re({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=Xe(Rw),Aw=re({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ow=Xe(Aw),Dw=[9,13,27,32],xc=Ut&&"CompositionEvent"in window,Ai=null;Ut&&"documentMode"in document&&(Ai=document.documentMode);var bw=Ut&&"TextEvent"in window&&!Ai,Em=Ut&&(!xc||Ai&&8<Ai&&11>=Ai),kh=" ",Th=!1;function Sm(t,e){switch(t){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mr=!1;function Lw(t,e){switch(t){case"compositionend":return Cm(e);case"keypress":return e.which!==32?null:(Th=!0,kh);case"textInput":return t=e.data,t===kh&&Th?null:t;default:return null}}function Mw(t,e){if(mr)return t==="compositionend"||!xc&&Sm(t,e)?(t=wm(),oo=Ic=on=null,mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Em&&e.locale!=="ko"?null:e.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fw[t.type]:e==="textarea"}function Im(t,e,n,r){tm(r),e=No(e,"onChange"),0<e.length&&(n=new kc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oi=null,Yi=null;function jw(t){Lm(t,0)}function _l(t){var e=yr(t);if(Qp(e))return t}function Uw(t,e){if(t==="change")return e}var km=!1;if(Ut){var fa;if(Ut){var pa="oninput"in document;if(!pa){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),pa=typeof Nh.oninput=="function"}fa=pa}else fa=!1;km=fa&&(!document.documentMode||9<document.documentMode)}function Rh(){Oi&&(Oi.detachEvent("onpropertychange",Tm),Yi=Oi=null)}function Tm(t){if(t.propertyName==="value"&&_l(Yi)){var e=[];Im(e,Yi,t,vc(t)),sm(jw,e)}}function zw(t,e,n){t==="focusin"?(Rh(),Oi=e,Yi=n,Oi.attachEvent("onpropertychange",Tm)):t==="focusout"&&Rh()}function $w(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Yi)}function Ww(t,e){if(t==="click")return _l(e)}function Bw(t,e){if(t==="input"||t==="change")return _l(e)}function Hw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:Hw;function Xi(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(e,i)||!yt(t[i],e[i]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,e){var n=Ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nm(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vw(t){var e=Nm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&Nc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ah(n,s);var o=Ah(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gw=Ut&&"documentMode"in document&&11>=document.documentMode,gr=null,cu=null,Di=null,du=!1;function Oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||gr==null||gr!==Eo(r)||(r=gr,"selectionStart"in r&&Nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Xi(Di,r)||(Di=r,r=No(cu,"onSelect"),0<r.length&&(e=new kc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gr)))}function Vs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _r={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},ma={},Rm={};Ut&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function yl(t){if(ma[t])return ma[t];if(!_r[t])return t;var e=_r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rm)return ma[t]=e[n];return t}var Pm=yl("animationend"),Am=yl("animationiteration"),Om=yl("animationstart"),Dm=yl("transitionend"),bm=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,e){bm.set(t,e),ir(e,[t])}for(var ga=0;ga<Dh.length;ga++){var _a=Dh[ga],Kw=_a.toLowerCase(),Qw=_a[0].toUpperCase()+_a.slice(1);An(Kw,"on"+Qw)}An(Pm,"onAnimationEnd");An(Am,"onAnimationIteration");An(Om,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Dm,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function bh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kv(r,e,void 0,t),t.currentTarget=null}function Lm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}}}if(Co)throw t=ou,Co=!1,ou=null,t}function X(t,e){var n=e[gu];n===void 0&&(n=e[gu]=new Set);var r=t+"__bubble";n.has(r)||(Mm(e,t,2,!1),n.add(r))}function ya(t,e,n){var r=0;e&&(r|=4),Mm(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Ji(t){if(!t[Gs]){t[Gs]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(qw.has(n)||ya(n,!1,t),ya(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,ya("selectionchange",!1,e))}}function Mm(t,e,n,r){switch(vm(e)){case 1:var i=uw;break;case 4:i=cw;break;default:i=Cc}n=i.bind(null,e,n,t),i=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function va(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}sm(function(){var u=s,d=vc(n),c=[];e:{var f=bm.get(t);if(f!==void 0){var y=kc,v=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":y=kw;break;case"focusin":v="focus",y=ha;break;case"focusout":v="blur",y=ha;break;case"beforeblur":case"afterblur":y=ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Nw;break;case Pm:case Am:case Om:y=gw;break;case Dm:y=Pw;break;case"scroll":y=dw;break;case"wheel":y=Ow;break;case"copy":case"cut":case"paste":y=yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ih}var _=(e&4)!==0,S=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Gi(p,m),w!=null&&_.push(Zi(p,w,g)))),S)break;p=p.return}0<_.length&&(f=new y(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==ru&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[zt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Wn(v):null,v!==null&&(S=sr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(_=Sh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ih,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=y==null?f:yr(y),g=v==null?f:yr(v),f=new _(w,p+"leave",y,n,d),f.target=S,f.relatedTarget=g,w=null,Wn(d)===u&&(_=new _(m,p+"enter",v,n,d),_.target=g,_.relatedTarget=S,w=_),S=w,y&&v)t:{for(_=y,m=v,p=0,g=_;g;g=dr(g))p++;for(g=0,w=m;w;w=dr(w))g++;for(;0<p-g;)_=dr(_),p--;for(;0<g-p;)m=dr(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=dr(_),m=dr(m)}_=null}else _=null;y!==null&&Lh(c,f,y,_,!1),v!==null&&S!==null&&Lh(c,S,v,_,!0)}}e:{if(f=u?yr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=Uw;else if(xh(f))if(km)k=Bw;else{k=$w;var T=zw}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Ww);if(k&&(k=k(t,u))){Im(c,k,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ja(f,"number",f.value)}switch(T=u?yr(u):window,t){case"focusin":(xh(T)||T.contentEditable==="true")&&(gr=T,cu=u,Di=null);break;case"focusout":Di=cu=gr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Oh(c,n,d);break;case"selectionchange":if(Gw)break;case"keydown":case"keyup":Oh(c,n,d)}var R;if(xc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else mr?Sm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Em&&n.locale!=="ko"&&(mr||P!=="onCompositionStart"?P==="onCompositionEnd"&&mr&&(R=wm()):(on=d,Ic="value"in on?on.value:on.textContent,mr=!0)),T=No(u,P),0<T.length&&(P=new Ch(P,t,null,n,d),c.push({event:P,listeners:T}),R?P.data=R:(R=Cm(n),R!==null&&(P.data=R)))),(R=bw?Lw(t,n):Mw(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(d=new Ch("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}Lm(c,e)})}function Zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gi(t,n),s!=null&&r.unshift(Zi(t,s,i)),s=Gi(t,e),s!=null&&r.push(Zi(t,s,i))),t=t.return}return r}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Gi(n,s),a!=null&&o.unshift(Zi(n,a,l))):i||(a=Gi(n,s),a!=null&&o.push(Zi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Yw=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function Mh(t){return(typeof t=="string"?t:""+t).replace(Yw,`
`).replace(Xw,"")}function Ks(t,e,n){if(e=Mh(e),Mh(t)!==e&&n)throw Error(C(425))}function Ro(){}var hu=null,fu=null;function pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Jw=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(e0)}:mu;function e0(t){setTimeout(function(){throw t})}function wa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),St="__reactFiber$"+ei,es="__reactProps$"+ei,zt="__reactContainer$"+ei,gu="__reactEvents$"+ei,t0="__reactListeners$"+ei,n0="__reactHandles$"+ei;function Wn(t){var e=t[St];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zt]||n[St]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[St])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[St]||t[zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function vl(t){return t[es]||null}var _u=[],vr=-1;function On(t){return{current:t}}function J(t){0>vr||(t.current=_u[vr],_u[vr]=null,vr--)}function q(t,e){vr++,_u[vr]=t.current,t.current=e}var Tn={},Ne=On(Tn),$e=On(!1),Qn=Tn;function jr(t,e){var n=t.type.contextTypes;if(!n)return Tn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function Po(){J($e),J(Ne)}function Uh(t,e,n){if(Ne.current!==Tn)throw Error(C(168));q(Ne,e),q($e,n)}function Fm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,zv(t)||"Unknown",i));return re({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,Qn=Ne.current,q(Ne,t),q($e,$e.current),!0}function zh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Fm(t,e,Qn),r.__reactInternalMemoizedMergedChildContext=t,J($e),J(Ne),q(Ne,t)):J($e),q($e,n)}var Rt=null,wl=!1,Ea=!1;function jm(t){Rt===null?Rt=[t]:Rt.push(t)}function r0(t){wl=!0,jm(t)}function Dn(){if(!Ea&&Rt!==null){Ea=!0;var t=0,e=B;try{var n=Rt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rt=null,wl=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(t+1)),um(wc,Dn),i}finally{B=e,Ea=!1}}return null}var wr=[],Er=0,Oo=null,Do=0,Je=[],Ze=0,qn=null,Pt=1,At="";function jn(t,e){wr[Er++]=Do,wr[Er++]=Oo,Oo=t,Do=e}function Um(t,e,n){Je[Ze++]=Pt,Je[Ze++]=At,Je[Ze++]=qn,qn=t;var r=Pt;t=At;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-mt(e)+i|n<<i|r,At=s+t}else Pt=1<<s|n<<i|r,At=t}function Rc(t){t.return!==null&&(jn(t,1),Um(t,1,0))}function Pc(t){for(;t===Oo;)Oo=wr[--Er],wr[Er]=null,Do=wr[--Er],wr[Er]=null;for(;t===qn;)qn=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null,Pt=Je[--Ze],Je[Ze]=null}var Ke=null,Ve=null,Z=!1,dt=null;function zm(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ve=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qn!==null?{id:Pt,overflow:At}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ve=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(Z){var e=Ve;if(e){var n=e;if(!$h(t,e)){if(yu(t))throw Error(C(418));e=fn(n.nextSibling);var r=Ke;e&&$h(t,e)?zm(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ke=t)}}else{if(yu(t))throw Error(C(418));t.flags=t.flags&-4097|2,Z=!1,Ke=t}}}function Wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Qs(t){if(t!==Ke)return!1;if(!Z)return Wh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pu(t.type,t.memoizedProps)),e&&(e=Ve)){if(yu(t))throw $m(),Error(C(418));for(;e;)zm(t,e),e=fn(e.nextSibling)}if(Wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=Ke?fn(t.stateNode.nextSibling):null;return!0}function $m(){for(var t=Ve;t;)t=fn(t.nextSibling)}function Ur(){Ve=Ke=null,Z=!1}function Ac(t){dt===null?dt=[t]:dt.push(t)}var i0=Gt.ReactCurrentBatchConfig;function gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function qs(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function Wm(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_n(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Na(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var k=g.type;return k===pr?d(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Bh(k)===p.type)?(w=i(p,g.props),w.ref=gi(m,p,g),w.return=m,w):(w=mo(g.type,g.key,g.props,null,m.mode,w),w.ref=gi(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ra(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,w,k){return p===null||p.tag!==7?(p=Kn(g,m.mode,w,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Na(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case js:return g=mo(p.type,p.key,p.props,null,m.mode,g),g.ref=gi(m,null,p),g.return=m,g;case fr:return p=Ra(p,m.mode,g),p.return=m,p;case Xt:var w=p._init;return c(m,w(p._payload),g)}if(Ii(p)||di(p))return p=Kn(p,m.mode,g,null),p.return=m,p;qs(m,p)}return null}function f(m,p,g,w){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case js:return g.key===k?a(m,p,g,w):null;case fr:return g.key===k?u(m,p,g,w):null;case Xt:return k=g._init,f(m,p,k(g._payload),w)}if(Ii(g)||di(g))return k!==null?null:d(m,p,g,w,null);qs(m,g)}return null}function y(m,p,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,k);case fr:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,k);case Xt:var T=w._init;return y(m,p,g,T(w._payload),k)}if(Ii(w)||di(w))return m=m.get(g)||null,d(p,m,w,k,null);qs(p,w)}return null}function v(m,p,g,w){for(var k=null,T=null,R=p,P=p=0,Y=null;R!==null&&P<g.length;P++){R.index>P?(Y=R,R=null):Y=R.sibling;var F=f(m,R,g[P],w);if(F===null){R===null&&(R=Y);break}t&&R&&F.alternate===null&&e(m,R),p=s(F,p,P),T===null?k=F:T.sibling=F,T=F,R=Y}if(P===g.length)return n(m,R),Z&&jn(m,P),k;if(R===null){for(;P<g.length;P++)R=c(m,g[P],w),R!==null&&(p=s(R,p,P),T===null?k=R:T.sibling=R,T=R);return Z&&jn(m,P),k}for(R=r(m,R);P<g.length;P++)Y=y(R,m,P,g[P],w),Y!==null&&(t&&Y.alternate!==null&&R.delete(Y.key===null?P:Y.key),p=s(Y,p,P),T===null?k=Y:T.sibling=Y,T=Y);return t&&R.forEach(function(lt){return e(m,lt)}),Z&&jn(m,P),k}function _(m,p,g,w){var k=di(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var T=k=null,R=p,P=p=0,Y=null,F=g.next();R!==null&&!F.done;P++,F=g.next()){R.index>P?(Y=R,R=null):Y=R.sibling;var lt=f(m,R,F.value,w);if(lt===null){R===null&&(R=Y);break}t&&R&&lt.alternate===null&&e(m,R),p=s(lt,p,P),T===null?k=lt:T.sibling=lt,T=lt,R=Y}if(F.done)return n(m,R),Z&&jn(m,P),k;if(R===null){for(;!F.done;P++,F=g.next())F=c(m,F.value,w),F!==null&&(p=s(F,p,P),T===null?k=F:T.sibling=F,T=F);return Z&&jn(m,P),k}for(R=r(m,R);!F.done;P++,F=g.next())F=y(R,m,P,F.value,w),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?P:F.key),p=s(F,p,P),T===null?k=F:T.sibling=F,T=F);return t&&R.forEach(function(ui){return e(m,ui)}),Z&&jn(m,P),k}function S(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case js:e:{for(var k=g.key,T=p;T!==null;){if(T.key===k){if(k=g.type,k===pr){if(T.tag===7){n(m,T.sibling),p=i(T,g.props.children),p.return=m,m=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Bh(k)===T.type){n(m,T.sibling),p=i(T,g.props),p.ref=gi(m,T,g),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===pr?(p=Kn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=mo(g.type,g.key,g.props,null,m.mode,w),w.ref=gi(m,p,g),w.return=m,m=w)}return o(m);case fr:e:{for(T=g.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ra(g,m.mode,w),p.return=m,m=p}return o(m);case Xt:return T=g._init,S(m,p,T(g._payload),w)}if(Ii(g))return v(m,p,g,w);if(di(g))return _(m,p,g,w);qs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Na(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var zr=Wm(!0),Bm=Wm(!1),bo=On(null),Lo=null,Sr=null,Oc=null;function Dc(){Oc=Sr=Lo=null}function bc(t){var e=bo.current;J(bo),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ar(t,e){Lo=t,Oc=Sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Oc!==t)if(t={context:t,memoizedValue:e,next:null},Sr===null){if(Lo===null)throw Error(C(308));Sr=t,Lo.dependencies={lanes:0,firstContext:t}}else Sr=Sr.next=t;return e}var Bn=null;function Lc(t){Bn===null?Bn=[t]:Bn.push(t)}function Hm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lc(e)):(n.next=i.next,i.next=n),e.interleaved=n,$t(t,r)}function $t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$t(t,n)}return i=r.interleaved,i===null?(e.next=e,Lc(r)):(e.next=i.next,i.next=e),r.interleaved=e,$t(t,n)}function ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}function Hh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mo(t,e,n,r){var i=t.updateQueue;Jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,y=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,_=l;switch(f=e,y=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(y,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(y,c,f):v,f==null)break e;c=re({},c,f);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,a=c):d=d.next=y,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xn|=o,t.lanes=o,t.memoizedState=c}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Cs={},It=On(Cs),ts=On(Cs),ns=On(Cs);function Hn(t){if(t===Cs)throw Error(C(174));return t}function Fc(t,e){switch(q(ns,e),q(ts,t),q(It,Cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eu(e,t)}J(It),q(It,e)}function $r(){J(It),J(ts),J(ns)}function Gm(t){Hn(ns.current);var e=Hn(It.current),n=eu(e,t.type);e!==n&&(q(ts,t),q(It,n))}function jc(t){ts.current===t&&(J(It),J(ts))}var ee=On(0);function Fo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sa=[];function Uc(){for(var t=0;t<Sa.length;t++)Sa[t]._workInProgressVersionPrimary=null;Sa.length=0}var uo=Gt.ReactCurrentDispatcher,Ca=Gt.ReactCurrentBatchConfig,Yn=0,ne=null,ce=null,ge=null,jo=!1,bi=!1,rs=0,s0=0;function ke(){throw Error(C(321))}function zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function $c(t,e,n,r,i,s){if(Yn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uo.current=t===null||t.memoizedState===null?u0:c0,t=n(r,i),bi){s=0;do{if(bi=!1,rs=0,25<=s)throw Error(C(301));s+=1,ge=ce=null,e.updateQueue=null,uo.current=d0,t=n(r,i)}while(bi)}if(uo.current=Uo,e=ce!==null&&ce.next!==null,Yn=0,ge=ce=ne=null,jo=!1,e)throw Error(C(300));return t}function Wc(){var t=rs!==0;return rs=0,t}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ne.memoizedState=ge=t:ge=ge.next=t,ge}function st(){if(ce===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=ge===null?ne.memoizedState:ge.next;if(e!==null)ge=e,ce=t;else{if(t===null)throw Error(C(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},ge===null?ne.memoizedState=ge=t:ge=ge.next=t}return ge}function is(t,e){return typeof e=="function"?e(t):e}function Ia(t){var e=st(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Yn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ne.lanes|=d,Xn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,yt(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,Xn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ka(t){var e=st(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Km(){}function Qm(t,e){var n=ne,r=st(),i=e(),s=!yt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,Bc(Xm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,ss(9,Ym.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(C(349));Yn&30||qm(n,e,i)}return i}function qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ym(t,e,n,r){e.value=n,e.getSnapshot=r,Jm(e)&&Zm(t)}function Xm(t,e,n){return n(function(){Jm(e)&&Zm(t)})}function Jm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function Zm(t){var e=$t(t,1);e!==null&&gt(e,t,1,-1)}function Gh(t){var e=Et();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},e.queue=t,t=t.dispatch=a0.bind(null,ne,t),[e.memoizedState,t]}function ss(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eg(){return st().memoizedState}function co(t,e,n,r){var i=Et();ne.flags|=t,i.memoizedState=ss(1|e,n,void 0,r===void 0?null:r)}function El(t,e,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&zc(r,o.deps)){i.memoizedState=ss(e,n,s,r);return}}ne.flags|=t,i.memoizedState=ss(1|e,n,s,r)}function Kh(t,e){return co(8390656,8,t,e)}function Bc(t,e){return El(2048,8,t,e)}function tg(t,e){return El(4,2,t,e)}function ng(t,e){return El(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ig(t,e,n){return n=n!=null?n.concat([t]):null,El(4,4,rg.bind(null,e,t),n)}function Hc(){}function sg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function og(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return Yn&21?(yt(n,e)||(n=hm(),ne.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function o0(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Ca.transition;Ca.transition={};try{t(!1),e()}finally{B=n,Ca.transition=r}}function ag(){return st().memoizedState}function l0(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))cg(e,n);else if(n=Hm(t,e,n,r),n!==null){var i=De();gt(n,t,r,i),dg(n,e,r)}}function a0(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))cg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,yt(l,o)){var a=e.interleaved;a===null?(i.next=i,Lc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Hm(t,e,i,r),n!==null&&(i=De(),gt(n,t,r,i),dg(n,e,r))}}function ug(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function cg(t,e){bi=jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}var Uo={readContext:it,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},u0={readContext:it,useCallback:function(t,e){return Et().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,co(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return co(4194308,4,t,e)},useInsertionEffect:function(t,e){return co(4,2,t,e)},useMemo:function(t,e){var n=Et();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Et();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=l0.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=Et();return t={current:t},e.memoizedState=t},useState:Gh,useDebugValue:Hc,useDeferredValue:function(t){return Et().memoizedState=t},useTransition:function(){var t=Gh(!1),e=t[0];return t=o0.bind(null,t[1]),Et().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=Et();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ye===null)throw Error(C(349));Yn&30||qm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kh(Xm.bind(null,r,s,t),[t]),r.flags|=2048,ss(9,Ym.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Et(),e=ye.identifierPrefix;if(Z){var n=At,r=Pt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=s0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},c0={readContext:it,useCallback:sg,useContext:it,useEffect:Bc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Ia,useRef:eg,useState:function(){return Ia(is)},useDebugValue:Hc,useDeferredValue:function(t){var e=st();return lg(e,ce.memoizedState,t)},useTransition:function(){var t=Ia(is)[0],e=st().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Qm,useId:ag,unstable_isNewReconciler:!1},d0={readContext:it,useCallback:sg,useContext:it,useEffect:Bc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:ka,useRef:eg,useState:function(){return ka(is)},useDebugValue:Hc,useDeferredValue:function(t){var e=st();return ce===null?e.memoizedState=t:lg(e,ce.memoizedState,t)},useTransition:function(){var t=ka(is)[0],e=st().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:Qm,useId:ag,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=gn(t),s=Ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(gt(e,t,i,r),ao(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=gn(t),s=Ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(gt(e,t,i,r),ao(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=gn(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(gt(e,t,r,n),ao(e,t,r))}};function Qh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,s):!0}function hg(t,e,n){var r=!1,i=Tn,s=e.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=We(e)?Qn:Ne.current,r=e.contextTypes,s=(r=r!=null)?jr(t,i):Tn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Mc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=We(e)?Qn:Ne.current,i.context=jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sl.enqueueReplaceState(i,i.state,null),Mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wr(t,e){try{var n="",r=e;do n+=Uv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ta(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function fg(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$o||($o=!0,Du=r),Cu(t,e)},n}function pg(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new h0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=T0.bind(null,t,e,n),e.then(t,t))}function Xh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t)}var f0=Gt.ReactCurrentOwner,Ue=!1;function Re(t,e,n,r){e.child=t===null?Bm(e,null,n,r):zr(e,t.child,n,r)}function Zh(t,e,n,r,i){n=n.render;var s=e.ref;return Ar(e,i),r=$c(t,e,n,r,s,i),n=Wc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(Z&&n&&Rc(e),e.flags|=1,Re(t,e,r,i),e.child)}function ef(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mg(t,e,s,r,i)):(t=mo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=_n(s,r),t.ref=e.ref,t.return=e,e.child=t}function mg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xi(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return Iu(t,e,n,r,i)}function gg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Ir,He),He|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Ir,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Ir,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Ir,He),He|=r;return Re(t,e,i,n),e.child}function _g(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Iu(t,e,n,r,i){var s=We(n)?Qn:Ne.current;return s=jr(e,s),Ar(e,i),n=$c(t,e,n,r,s,i),r=Wc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(Z&&r&&Rc(e),e.flags|=1,Re(t,e,n,i),e.child)}function tf(t,e,n,r,i){if(We(n)){var s=!0;Ao(e)}else s=!1;if(Ar(e,i),e.stateNode===null)ho(t,e),hg(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=We(n)?Qn:Ne.current,u=jr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&qh(e,o,r,u),Jt=!1;var f=e.memoizedState;o.state=f,Mo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||$e.current||Jt?(typeof d=="function"&&(Eu(e,n,d,r),a=e.memoizedState),(l=Jt||Qh(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ut(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=We(n)?Qn:Ne.current,a=jr(e,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&qh(e,o,r,a),Jt=!1,f=e.memoizedState,o.state=f,Mo(e,r,o,i);var v=e.memoizedState;l!==c||f!==v||$e.current||Jt?(typeof y=="function"&&(Eu(e,n,y,r),v=e.memoizedState),(u=Jt||Qh(e,n,u,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return ku(t,e,n,r,s,i)}function ku(t,e,n,r,i,s){_g(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zh(e,n,!1),Wt(t,e,s);r=e.stateNode,f0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zr(e,t.child,null,s),e.child=zr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&zh(e,n,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?Uh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uh(t,e.context,!1),Fc(t,e.containerInfo)}function nf(t,e,n,r,i){return Ur(),Ac(i),e.flags|=256,Re(t,e,n,r),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ee,i&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,r,0,null),t=Kn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xu(n),e.memoizedState=Tu,t):Vc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return p0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=_n(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_n(l,s):(s=Kn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,r}return s=t.child,t=s.sibling,r=_n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vc(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&Ac(r),zr(e,t.child,null,n),t=Vc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ta(Error(C(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kl({mode:"visible",children:r.children},i,0,null),s=Kn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zr(e,t.child,null,o),e.child.memoizedState=xu(o),e.memoizedState=Tu,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Ta(s,r,void 0),Ys(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$t(t,i),gt(r,t,i,-1))}return Xc(),r=Ta(Error(C(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=x0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=fn(i.nextSibling),Ke=e,Z=!0,dt=null,t!==null&&(Je[Ze++]=Pt,Je[Ze++]=At,Je[Ze++]=qn,Pt=t.id,At=t.overflow,qn=e),e=Vc(e,r.children),e.flags|=4096,e)}function rf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wu(t.return,e,n)}function xa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rf(t,n,e);else if(t.tag===19)rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xa(e,!0,n,null,s);break;case"together":xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function m0(t,e,n){switch(e.tag){case 3:yg(e),Ur();break;case 5:Gm(e);break;case 1:We(e.type)&&Ao(e);break;case 4:Fc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(q(ee,ee.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,gg(t,e,n)}return Wt(t,e,n)}var Eg,Nu,Sg,Cg;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};Sg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hn(It.current);var s=null;switch(n){case"input":i=Ya(t,i),r=Ya(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Za(t,i),r=Za(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ro)}tu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cg=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function g0(t,e,n){var r=e.pendingProps;switch(Pc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return We(e.type)&&Po(),Te(e),null;case 3:return r=e.stateNode,$r(),J($e),J(Ne),Uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(Mu(dt),dt=null))),Nu(t,e),Te(e),null;case 5:jc(e);var i=Hn(ns.current);if(n=e.type,t!==null&&e.stateNode!=null)Sg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Te(e),null}if(t=Hn(It.current),Qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[St]=e,r[es]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Ti.length;i++)X(Ti[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":hh(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":ph(r,s),X("invalid",r)}tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",""+l]):Hi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Us(r),fh(r,s,!0);break;case"textarea":Us(r),mh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ro)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[St]=e,t[es]=r,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(o=nu(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ti.length;i++)X(Ti[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":hh(t,r),i=Ya(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",t);break;case"textarea":ph(t,r),i=Za(t,r),X("invalid",t);break;default:i=r}tu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?em(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Jp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vi(t,a):typeof a=="number"&&Vi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&X("scroll",t):a!=null&&mc(t,s,a,o))}switch(n){case"input":Us(t),fh(t,r,!1);break;case"textarea":Us(t),mh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Cg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Hn(ns.current),Hn(It.current),Qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[St]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=e,e.stateNode=r}return Te(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Ve!==null&&e.mode&1&&!(e.flags&128))$m(),Ur(),e.flags|=98560,s=!1;else if(s=Qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[St]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),s=!1}else dt!==null&&(Mu(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?fe===0&&(fe=3):Xc())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return $r(),Nu(t,e),t===null&&Ji(e.stateNode.containerInfo),Te(e),null;case 10:return bc(e.type._context),Te(e),null;case 17:return We(e.type)&&Po(),Te(e),null;case 19:if(J(ee),s=e.memoizedState,s===null)return Te(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_i(s,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fo(t),o!==null){for(e.flags|=128,_i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>Br&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Te(e),null}else 2*ae()-s.renderingStartTime>Br&&n!==1073741824&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return Yc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function _0(t,e){switch(Pc(e),e.tag){case 1:return We(e.type)&&Po(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $r(),J($e),J(Ne),Uc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jc(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return $r(),null;case 10:return bc(e.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var Xs=!1,xe=!1,y0=typeof WeakSet=="function"?WeakSet:Set,x=null;function Cr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Ru(t,e,n){try{n()}catch(r){ie(t,e,r)}}var sf=!1;function v0(t,e){if(hu=To,t=Nm(),Nc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},To=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:ut(e.type,_),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=sf,sf=!1,v}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ru(e,n,s)}i=i.next}while(i!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[St],delete e[es],delete e[gu],delete e[t0],delete e[n0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ro));else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var ve=null,ct=!1;function Qt(t,e,n){for(n=n.child;n!==null;)Tg(t,e,n),n=n.sibling}function Tg(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:xe||Cr(n,e);case 6:var r=ve,i=ct;ve=null,Qt(t,e,n),ve=r,ct=i,ve!==null&&(ct?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ct?(t=ve,n=n.stateNode,t.nodeType===8?wa(t.parentNode,n):t.nodeType===1&&wa(t,n),qi(t)):wa(ve,n.stateNode));break;case 4:r=ve,i=ct,ve=n.stateNode.containerInfo,ct=!0,Qt(t,e,n),ve=r,ct=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ru(n,e,o),i=i.next}while(i!==r)}Qt(t,e,n);break;case 1:if(!xe&&(Cr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Qt(t,e,n);break;case 21:Qt(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Qt(t,e,n),xe=r):Qt(t,e,n);break;default:Qt(t,e,n)}}function lf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y0),e.forEach(function(r){var i=N0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,ct=!1;break e;case 3:ve=l.stateNode.containerInfo,ct=!0;break e;case 4:ve=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(ve===null)throw Error(C(160));Tg(s,o,i),ve=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xg(e,t),e=e.sibling}function xg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),wt(t),r&4){try{Li(3,t,t.return),Cl(3,t)}catch(_){ie(t,t.return,_)}try{Li(5,t,t.return)}catch(_){ie(t,t.return,_)}}break;case 1:at(e,t),wt(t),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(at(e,t),wt(t),r&512&&n!==null&&Cr(n,n.return),t.flags&32){var i=t.stateNode;try{Vi(i,"")}catch(_){ie(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&qp(i,s),nu(l,o);var u=nu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?em(i,c):d==="dangerouslySetInnerHTML"?Jp(i,c):d==="children"?Vi(i,c):mc(i,d,c,u)}switch(l){case"input":Xa(i,s);break;case"textarea":Yp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?xr(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?xr(i,!!s.multiple,s.defaultValue,!0):xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[es]=s}catch(_){ie(t,t.return,_)}}break;case 6:if(at(e,t),wt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ie(t,t.return,_)}}break;case 3:if(at(e,t),wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(_){ie(t,t.return,_)}break;case 4:at(e,t),wt(t);break;case 13:at(e,t),wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qc=ae())),r&4&&lf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||d,at(e,t),xe=u):at(e,t),wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(c=x=d;x!==null;){switch(f=x,y=f.child,f.tag){case 0:case 11:case 14:case 15:Li(4,f,f.return);break;case 1:Cr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ie(r,n,_)}}break;case 5:Cr(f,f.return);break;case 22:if(f.memoizedState!==null){uf(c);continue}}y!==null?(y.return=f,x=y):uf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Zp("display",o))}catch(_){ie(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){ie(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:at(e,t),wt(t),r&4&&lf(t);break;case 21:break;default:at(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var s=of(t);Ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=of(t);Au(t,l,o);break;default:throw Error(C(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function w0(t,e,n){x=t,Ng(t)}function Ng(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||xe;l=Xs;var u=xe;if(Xs=o,(xe=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?cf(i):a!==null?(a.return=o,x=a):cf(i);for(;s!==null;)x=s,Ng(s),s=s.sibling;x=i,Xs=l,xe=u}af(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):af(t)}}function af(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&qi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||e.flags&512&&Pu(e)}catch(f){ie(e,e.return,f)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function uf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function cf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{Pu(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{Pu(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var E0=Math.ceil,zo=Gt.ReactCurrentDispatcher,Gc=Gt.ReactCurrentOwner,rt=Gt.ReactCurrentBatchConfig,$=0,ye=null,ue=null,Ee=0,He=0,Ir=On(0),fe=0,os=null,Xn=0,Il=0,Kc=0,Mi=null,je=null,Qc=0,Br=1/0,Nt=null,$o=!1,Du=null,mn=null,Js=!1,ln=null,Wo=0,Fi=0,bu=null,fo=-1,po=0;function De(){return $&6?ae():fo!==-1?fo:fo=ae()}function gn(t){return t.mode&1?$&2&&Ee!==0?Ee&-Ee:i0.transition!==null?(po===0&&(po=hm()),po):(t=B,t!==0||(t=window.event,t=t===void 0?16:vm(t.type)),t):1}function gt(t,e,n,r){if(50<Fi)throw Fi=0,bu=null,Error(C(185));ws(t,n,r),(!($&2)||t!==ye)&&(t===ye&&(!($&2)&&(Il|=n),fe===4&&en(t,Ee)),Be(t,r),n===1&&$===0&&!(e.mode&1)&&(Br=ae()+500,wl&&Dn()))}function Be(t,e){var n=t.callbackNode;iw(t,e);var r=ko(t,t===ye?Ee:0);if(r===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?r0(df.bind(null,t)):jm(df.bind(null,t)),Zw(function(){!($&6)&&Dn()}),n=null;else{switch(fm(r)){case 1:n=wc;break;case 4:n=cm;break;case 16:n=Io;break;case 536870912:n=dm;break;default:n=Io}n=Mg(n,Rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rg(t,e){if(fo=-1,po=0,$&6)throw Error(C(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=ko(t,t===ye?Ee:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bo(t,r);else{e=r;var i=$;$|=2;var s=Ag();(ye!==t||Ee!==e)&&(Nt=null,Br=ae()+500,Gn(t,e));do try{I0();break}catch(l){Pg(t,l)}while(!0);Dc(),zo.current=s,$=i,ue!==null?e=0:(ye=null,Ee=0,e=fe)}if(e!==0){if(e===2&&(i=lu(t),i!==0&&(r=i,e=Lu(t,i))),e===1)throw n=os,Gn(t,0),en(t,r),Be(t,ae()),n;if(e===6)en(t,r);else{if(i=t.current.alternate,!(r&30)&&!S0(i)&&(e=Bo(t,r),e===2&&(s=lu(t),s!==0&&(r=s,e=Lu(t,s))),e===1))throw n=os,Gn(t,0),en(t,r),Be(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Un(t,je,Nt);break;case 3:if(en(t,r),(r&130023424)===r&&(e=Qc+500-ae(),10<e)){if(ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mu(Un.bind(null,t,je,Nt),e);break}Un(t,je,Nt);break;case 4:if(en(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E0(r/1960))-r,10<r){t.timeoutHandle=mu(Un.bind(null,t,je,Nt),r);break}Un(t,je,Nt);break;case 5:Un(t,je,Nt);break;default:throw Error(C(329))}}}return Be(t,ae()),t.callbackNode===n?Rg.bind(null,t):null}function Lu(t,e){var n=Mi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=Bo(t,e),t!==2&&(e=je,je=n,e!==null&&Mu(e)),t}function Mu(t){je===null?je=t:je.push.apply(je,t)}function S0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function en(t,e){for(e&=~Kc,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function df(t){if($&6)throw Error(C(327));Or();var e=ko(t,0);if(!(e&1))return Be(t,ae()),null;var n=Bo(t,e);if(t.tag!==0&&n===2){var r=lu(t);r!==0&&(e=r,n=Lu(t,r))}if(n===1)throw n=os,Gn(t,0),en(t,e),Be(t,ae()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Un(t,je,Nt),Be(t,ae()),null}function qc(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Br=ae()+500,wl&&Dn())}}function Jn(t){ln!==null&&ln.tag===0&&!($&6)&&Or();var e=$;$|=1;var n=rt.transition,r=B;try{if(rt.transition=null,B=1,t)return t()}finally{B=r,rt.transition=n,$=e,!($&6)&&Dn()}}function Yc(){He=Ir.current,J(Ir)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jw(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:$r(),J($e),J(Ne),Uc();break;case 5:jc(r);break;case 4:$r();break;case 13:J(ee);break;case 19:J(ee);break;case 10:bc(r.type._context);break;case 22:case 23:Yc()}n=n.return}if(ye=t,ue=t=_n(t.current,null),Ee=He=e,fe=0,os=null,Kc=Il=Xn=0,je=Mi=null,Bn!==null){for(e=0;e<Bn.length;e++)if(n=Bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return t}function Pg(t,e){do{var n=ue;try{if(Dc(),uo.current=Uo,jo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Yn=0,ge=ce=ne=null,bi=!1,rs=0,Gc.current=null,n===null||n.return===null){fe=1,os=e,ue=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ee,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Xh(o);if(y!==null){y.flags&=-257,Jh(y,o,l,s,e),y.mode&1&&Yh(s,u,e),e=y,a=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(a),e.updateQueue=_}else v.add(a);break e}else{if(!(e&1)){Yh(s,u,e),Xc();break e}a=Error(C(426))}}else if(Z&&l.mode&1){var S=Xh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Jh(S,o,l,s,e),Ac(Wr(a,l));break e}}s=a=Wr(a,l),fe!==4&&(fe=2),Mi===null?Mi=[s]:Mi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fg(s,a,e);Hh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=pg(s,l,e);Hh(s,w);break e}}s=s.return}while(s!==null)}Dg(n)}catch(k){e=k,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Ag(){var t=zo.current;return zo.current=Uo,t===null?Uo:t}function Xc(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(Xn&268435455)&&!(Il&268435455)||en(ye,Ee)}function Bo(t,e){var n=$;$|=2;var r=Ag();(ye!==t||Ee!==e)&&(Nt=null,Gn(t,e));do try{C0();break}catch(i){Pg(t,i)}while(!0);if(Dc(),$=n,zo.current=r,ue!==null)throw Error(C(261));return ye=null,Ee=0,fe}function C0(){for(;ue!==null;)Og(ue)}function I0(){for(;ue!==null&&!qv();)Og(ue)}function Og(t){var e=Lg(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?Dg(t):ue=e,Gc.current=null}function Dg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_0(n,e),n!==null){n.flags&=32767,ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ue=null;return}}else if(n=g0(n,e,He),n!==null){ue=n;return}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);fe===0&&(fe=5)}function Un(t,e,n){var r=B,i=rt.transition;try{rt.transition=null,B=1,k0(t,e,n,r)}finally{rt.transition=i,B=r}return null}function k0(t,e,n,r){do Or();while(ln!==null);if($&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sw(t,s),t===ye&&(ue=ye=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Mg(Io,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var o=B;B=1;var l=$;$|=4,Gc.current=null,v0(t,n),xg(n,t),Vw(fu),To=!!hu,fu=hu=null,t.current=n,w0(n),Yv(),$=l,B=o,rt.transition=s}else t.current=n;if(Js&&(Js=!1,ln=t,Wo=i),s=t.pendingLanes,s===0&&(mn=null),Zv(n.stateNode),Be(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,t=Du,Du=null,t;return Wo&1&&t.tag!==0&&Or(),s=t.pendingLanes,s&1?t===bu?Fi++:(Fi=0,bu=t):Fi=0,Dn(),null}function Or(){if(ln!==null){var t=fm(Wo),e=rt.transition,n=B;try{if(rt.transition=null,B=16>t?16:t,ln===null)var r=!1;else{if(t=ln,ln=null,Wo=0,$&6)throw Error(C(331));var i=$;for($|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:Li(8,d,s)}var c=d.child;if(c!==null)c.return=d,x=c;else for(;x!==null;){d=x;var f=d.sibling,y=d.return;if(Ig(d),d===u){x=null;break}if(f!==null){f.return=y,x=f;break}x=y}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=p;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cl(9,l)}}catch(k){ie(l,l.return,k)}if(l===o){x=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,x=w;break e}x=l.return}}if($=i,Dn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ml,t)}catch{}r=!0}return r}finally{B=n,rt.transition=e}}return!1}function hf(t,e,n){e=Wr(n,e),e=fg(t,e,1),t=pn(t,e,1),e=De(),t!==null&&(ws(t,1,e),Be(t,e))}function ie(t,e,n){if(t.tag===3)hf(t,t,n);else for(;e!==null;){if(e.tag===3){hf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=Wr(n,t),t=pg(e,t,1),e=pn(e,t,1),t=De(),e!==null&&(ws(e,1,t),Be(e,t));break}}e=e.return}}function T0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(Ee&n)===n&&(fe===4||fe===3&&(Ee&130023424)===Ee&&500>ae()-Qc?Gn(t,0):Kc|=n),Be(t,e)}function bg(t,e){e===0&&(t.mode&1?(e=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):e=1);var n=De();t=$t(t,e),t!==null&&(ws(t,e,n),Be(t,n))}function x0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bg(t,n)}function N0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),bg(t,n)}var Lg;Lg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,m0(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,Z&&e.flags&1048576&&Um(e,Do,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=jr(e,Ne.current);Ar(e,n),i=$c(null,e,r,t,i,n);var s=Wc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,Ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(e),i.updater=Sl,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=ku(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&Rc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=P0(r),t=ut(r,t),i){case 0:e=Iu(null,e,r,t,n);break e;case 1:e=tf(null,e,r,t,n);break e;case 11:e=Zh(null,e,r,t,n);break e;case 14:e=ef(null,e,r,ut(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Iu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),tf(t,e,r,i,n);case 3:e:{if(yg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vm(t,e),Mo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(C(423)),e),e=nf(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(C(424)),e),e=nf(t,e,r,n,i);break e}else for(Ve=fn(e.stateNode.containerInfo.firstChild),Ke=e,Z=!0,dt=null,n=Bm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=Wt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Gm(e),t===null&&vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pu(r,i)?o=null:s!==null&&pu(r,s)&&(e.flags|=32),_g(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&vu(e),null;case 13:return vg(t,e,n);case 4:return Fc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Zh(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(bo,r._currentValue),r._currentValue=o,s!==null)if(yt(s.value,o)){if(s.children===i.children&&!$e.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ft(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ar(e,n),i=it(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),ef(t,e,r,i,n);case 15:return mg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),ho(t,e),e.tag=1,We(r)?(t=!0,Ao(e)):t=!1,Ar(e,n),hg(e,r,i),Su(e,r,i,n),ku(null,e,r,!0,t,n);case 19:return wg(t,e,n);case 22:return gg(t,e,n)}throw Error(C(156,e.tag))};function Mg(t,e){return um(t,e)}function R0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new R0(t,e,n,r)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P0(t){if(typeof t=="function")return Jc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_c)return 11;if(t===yc)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pr:return Kn(n.children,i,s,e);case gc:o=8,i|=8;break;case Ga:return t=tt(12,n,e,i|2),t.elementType=Ga,t.lanes=s,t;case Ka:return t=tt(13,n,e,i),t.elementType=Ka,t.lanes=s,t;case Qa:return t=tt(19,n,e,i),t.elementType=Qa,t.lanes=s,t;case Gp:return kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hp:o=10;break e;case Vp:o=9;break e;case _c:o=11;break e;case yc:o=14;break e;case Xt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function kl(t,e,n,r){return t=tt(22,t,r,e),t.elementType=Gp,t.lanes=n,t.stateNode={isHidden:!1},t}function Na(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function Ra(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(t,e,n,r,i,s,o,l,a){return t=new A0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(s),t}function O0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fg(t){if(!t)return Tn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(We(n))return Fm(t,n,e)}return e}function jg(t,e,n,r,i,s,o,l,a){return t=Zc(n,r,!0,t,i,s,o,l,a),t.context=Fg(null),n=t.current,r=De(),i=gn(n),s=Ft(r,i),s.callback=e??null,pn(n,s,i),t.current.lanes=i,ws(t,i,r),Be(t,r),t}function Tl(t,e,n,r){var i=e.current,s=De(),o=gn(i);return n=Fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(gt(t,i,o,s),ao(t,i,o)),o}function Ho(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){ff(t,e),(t=t.alternate)&&ff(t,e)}function D0(){return null}var Ug=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}xl.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Tl(t,e,null,null)};xl.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jn(function(){Tl(null,t,null,null)}),e[zt]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zt.length&&e!==0&&e<Zt[n].priority;n++);Zt.splice(n,0,t),n===0&&ym(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pf(){}function b0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ho(o);s.call(u)}}var o=jg(e,r,t,0,null,!1,!1,"",pf);return t._reactRootContainer=o,t[zt]=o.current,Ji(t.nodeType===8?t.parentNode:t),Jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ho(a);l.call(u)}}var a=Zc(t,0,!1,null,null,!1,!1,"",pf);return t._reactRootContainer=a,t[zt]=a.current,Ji(t.nodeType===8?t.parentNode:t),Jn(function(){Tl(e,a,n,r)}),a}function Rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ho(o);l.call(a)}}Tl(e,o,t,i)}else o=b0(n,e,t,i,r);return Ho(o)}pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ki(e.pendingLanes);n!==0&&(Ec(e,n|1),Be(e,ae()),!($&6)&&(Br=ae()+500,Dn()))}break;case 13:Jn(function(){var r=$t(t,1);if(r!==null){var i=De();gt(r,t,1,i)}}),ed(t,1)}};Sc=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var n=De();gt(e,t,134217728,n)}ed(t,134217728)}};mm=function(t){if(t.tag===13){var e=gn(t),n=$t(t,e);if(n!==null){var r=De();gt(n,t,e,r)}ed(t,e)}};gm=function(){return B};_m=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};iu=function(t,e,n){switch(e){case"input":if(Xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vl(r);if(!i)throw Error(C(90));Qp(r),Xa(r,i)}}}break;case"textarea":Yp(t,n);break;case"select":e=n.value,e!=null&&xr(t,!!n.multiple,e,!1)}};rm=qc;im=Jn;var L0={usingClientEntryPoint:!1,Events:[Ss,yr,vl,tm,nm,qc]},yi={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M0={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lm(t),t===null?null:t.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{ml=Zs.inject(M0),Ct=Zs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;Ye.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(C(200));return O0(t,e,null,n)};Ye.createRoot=function(t,e){if(!nd(t))throw Error(C(299));var n=!1,r="",i=Ug;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zc(t,1,!1,null,null,n,!1,r,i),t[zt]=e.current,Ji(t.nodeType===8?t.parentNode:t),new td(e)};Ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=lm(e),t=t===null?null:t.stateNode,t};Ye.flushSync=function(t){return Jn(t)};Ye.hydrate=function(t,e,n){if(!Nl(e))throw Error(C(200));return Rl(null,t,e,!0,n)};Ye.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jg(e,null,t,1,n??null,i,!1,s,o),t[zt]=e.current,Ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xl(e)};Ye.render=function(t,e,n){if(!Nl(e))throw Error(C(200));return Rl(null,t,e,!1,n)};Ye.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(C(40));return t._reactRootContainer?(Jn(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[zt]=null})}),!0):!1};Ye.unstable_batchedUpdates=qc;Ye.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Rl(t,e,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(t){console.error(t)}}zg(),zp.exports=Ye;var F0=zp.exports,$g,mf=F0;$g=mf.createRoot,mf.hydrateRoot;var gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+Wg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},j0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(f=64)),r.push(n[d],n[c],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new U0;const f=s<<2|l>>4;if(r.push(f),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class U0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=Bg(t);return rd.encodeByteArray(e,!0)},Vo=function(t){return Hg(t).replace(/\./g,"")},Go=function(t){try{return rd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return Vg(void 0,t)}function Vg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$0(n)||(t[n]=Vg(t[n],e[n]));return t}function $0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=()=>W0().__FIREBASE_DEFAULTS__,H0=()=>{if(typeof process>"u"||typeof gf>"u")return;const t=gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},V0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Go(t[1]);return e&&JSON.parse(e)},id=()=>{try{return B0()||H0()||V0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},G0=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>{var t;return(t=id())===null||t===void 0?void 0:t.config},Qg=t=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Q0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y0(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function X0(){return Wg.NODE_ADMIN===!0}function J0(){try{return typeof indexedDB=="object"}catch{return!1}}function Z0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eE,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function tE(t,e){return t.replace(nE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ls(Go(s[0])||""),n=ls(Go(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rE=function(t){const e=Yg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iE=function(t){const e=Yg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_f(s)&&_f(o)){if(!Qo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function oE(t,e){const n=new lE(t,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pa),i.error===void 0&&(i.error=Pa),i.complete===void 0&&(i.complete=Pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pa(){}function Pl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hE(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(t){return t===zn?void 0:t}function hE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const pE={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},mE=H.INFO,gE={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},_E=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class od{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const yE=(t,e)=>e.some(n=>t instanceof n);let yf,vf;function vE(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,ju=new WeakMap,Jg=new WeakMap,Aa=new WeakMap,ld=new WeakMap;function EE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),ld.set(e,t),e}function SE(t){if(ju.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ju.set(t,e)}let Uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ju.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CE(t){Uu=t(Uu)}function IE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oa(this),e,...n);return Jg.set(r,e.sort?e.sort():[e]),yn(r)}:wE().includes(t)?function(...e){return t.apply(Oa(this),e),yn(Xg.get(this))}:function(...e){return yn(t.apply(Oa(this),e))}}function kE(t){return typeof t=="function"?IE(t):(t instanceof IDBTransaction&&SE(t),yE(t,vE())?new Proxy(t,Uu):t)}function yn(t){if(t instanceof IDBRequest)return EE(t);if(Aa.has(t))return Aa.get(t);const e=kE(t);return e!==t&&(Aa.set(t,e),ld.set(e,t)),e}const Oa=t=>ld.get(t);function TE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yn(o.result),a.oldVersion,a.newVersion,yn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xE=["get","getKey","getAll","getAllKeys","count"],NE=["put","add","delete","clear"],Da=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Da.set(e,s),s}CE(t=>({...t,get:(e,n,r)=>wf(e,n)||t.get(e,n,r),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",Ef="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new od("@firebase/app"),AE="@firebase/app-compat",OE="@firebase/analytics-compat",DE="@firebase/analytics",bE="@firebase/app-check-compat",LE="@firebase/app-check",ME="@firebase/auth",FE="@firebase/auth-compat",jE="@firebase/database",UE="@firebase/data-connect",zE="@firebase/database-compat",$E="@firebase/functions",WE="@firebase/functions-compat",BE="@firebase/installations",HE="@firebase/installations-compat",VE="@firebase/messaging",GE="@firebase/messaging-compat",KE="@firebase/performance",QE="@firebase/performance-compat",qE="@firebase/remote-config",YE="@firebase/remote-config-compat",XE="@firebase/storage",JE="@firebase/storage-compat",ZE="@firebase/firestore",eS="@firebase/vertexai-preview",tS="@firebase/firestore-compat",nS="firebase",rS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="[DEFAULT]",iS={[zu]:"fire-core",[AE]:"fire-core-compat",[DE]:"fire-analytics",[OE]:"fire-analytics-compat",[LE]:"fire-app-check",[bE]:"fire-app-check-compat",[ME]:"fire-auth",[FE]:"fire-auth-compat",[jE]:"fire-rtdb",[UE]:"fire-data-connect",[zE]:"fire-rtdb-compat",[$E]:"fire-fn",[WE]:"fire-fn-compat",[BE]:"fire-iid",[HE]:"fire-iid-compat",[VE]:"fire-fcm",[GE]:"fire-fcm-compat",[KE]:"fire-perf",[QE]:"fire-perf-compat",[qE]:"fire-rc",[YE]:"fire-rc-compat",[XE]:"fire-gcs",[JE]:"fire-gcs-compat",[ZE]:"fire-fst",[tS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[nS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Map,sS=new Map,Wu=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Wu.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Wu.set(e,t);for(const n of qo.values())Sf(n,t);for(const n of sS.values())Sf(n,t);return!0}function ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new ks("app","Firebase",oS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=rS;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$u,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Kg()),!n)throw vn.create("no-options");const s=qo.get(i);if(s){if(Qo(n,s.options)&&Qo(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new fE(i);for(const a of Wu.values())o.addComponent(a);const l=new lS(n,r,o);return qo.set(i,l),l}function e_(t=$u){const e=qo.get(t);if(!e&&t===$u&&Kg())return Zg();if(!e)throw vn.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=iS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(l.join(" "));return}Vr(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebase-heartbeat-database",uS=1,as="firebase-heartbeat-store";let ba=null;function t_(){return ba||(ba=TE(aS,uS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),ba}async function cS(t){try{const n=(await t_()).transaction(as),r=await n.objectStore(as).get(n_(t));return await n.done,r}catch(e){if(e instanceof bn)Bt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(n.message)}}}async function Cf(t,e){try{const r=(await t_()).transaction(as,"readwrite");await r.objectStore(as).put(e,n_(t)),await r.done}catch(n){if(n instanceof bn)Bt.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function n_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=1024,hS=30*24*60*60*1e3;class fS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=If();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=If(),{heartbeatsToSend:r,unsentEntries:i}=pS(this._heartbeatsCache.heartbeats),s=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bt.warn(n),""}}}function If(){return new Date().toISOString().substring(0,10)}function pS(t,e=dS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J0()?Z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kf(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){Vr(new Zn("platform-logger",e=>new RE(e),"PRIVATE")),Vr(new Zn("heartbeat",e=>new fS(e),"PRIVATE")),wn(zu,Ef,t),wn(zu,Ef,"esm2017"),wn("fire-js","")}gS("");var _S="firebase",yS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(_S,yS,"app");function ud(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function r_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vS=r_,i_=new ks("auth","Firebase",r_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new od("@firebase/auth");function wS(t,...e){Yo.logLevel<=H.WARN&&Yo.warn(`Auth (${ri}): ${t}`,...e)}function go(t,...e){Yo.logLevel<=H.ERROR&&Yo.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw cd(t,...e)}function kt(t,...e){return cd(t,...e)}function s_(t,e,n){const r=Object.assign(Object.assign({},vS()),{[e]:n});return new ks("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return s_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i_.create(t,...e)}function O(t,e,...n){if(!t)throw cd(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function Ht(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ES(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||q0()||"connection"in navigator)?navigator.onLine:!0}function CS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||qg()}get(){return SS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new Ts(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,i={}){return l_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return Q0()||(u.referrerPolicy="no-referrer"),o_.fetch()(a_(t,t.config.apiHost,n,l),u)})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IS),e);try{const i=new xS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw eo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw s_(t,d,u);vt(t,d)}}catch(i){if(i instanceof bn)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function Ol(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function a_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dd(t.config,i):`${t.config.apiScheme}://${i}`}function TS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),kS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}function xf(t){return t!==void 0&&t.enterprise!==void 0}class NS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RS(t,e){return Ln(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function u_(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=hd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ji(La(i.auth_time)),issuedAtTime:ji(La(i.iat)),expirationTime:ji(La(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Go(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nf(t){const e=hd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await us(t,u_(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?c_(s.providerUserInfo):[],l=LS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Hu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function bS(t){const e=Ie(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function c_(t){return t.map(e=>{var{providerId:n}=e,r=ud(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e){const n=await l_(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=a_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",o_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FS(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Dr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await us(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:T,stsTokenManager:R}=n;O(g&&R,e,"internal-error");const P=Dr.fromJSON(this.name,R);O(typeof g=="string",e,"internal-error"),qt(c,e.name),qt(f,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),qt(y,e.name),qt(v,e.name),qt(_,e.name),qt(S,e.name),qt(m,e.name),qt(p,e.name);const Y=new bt({uid:g,auth:e,email:f,emailVerified:w,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:y,tenantId:_,stsTokenManager:P,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(Y.providerData=T.map(F=>Object.assign({},F))),S&&(Y._redirectEventId=S),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Dr;i.updateFromServerResponse(n);const s=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?c_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Dr;l.updateFromIdToken(r);const a=new bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function Lt(t){Ht(t instanceof Function,"Expected a class definition");let e=Rf.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const Pf=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,s),this.fullPersistenceKey=_o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(Lt(Pf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Lt(Pf);const o=_o(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=bt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new br(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new br(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(y_(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function h_(t=Le()){return/firefox\//i.test(t)}function f_(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(t=Le()){return/crios\//i.test(t)}function m_(t=Le()){return/iemobile/i.test(t)}function g_(t=Le()){return/android/i.test(t)}function __(t=Le()){return/blackberry/i.test(t)}function y_(t=Le()){return/webos/i.test(t)}function fd(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=Le()){var e;return fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function US(){return Y0()&&document.documentMode===10}function v_(t=Le()){return fd(t)||g_(t)||y_(t)||__(t)||/windows phone/i.test(t)||m_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e=[]){let n;switch(t){case"Browser":n=Af(Le());break;case"Worker":n=`${Af(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=6;class BS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await u_(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(En(this));const n=e?Ie(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $S(this),n=new BS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ii(t){return Ie(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VS(t){Dl=t}function E_(t){return Dl.loadJS(t)}function GS(){return Dl.recaptchaEnterpriseScript}function KS(){return Dl.gapiScript}function QS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qS="recaptcha-enterprise",YS="NO_RECAPTCHA";class XS{constructor(e){this.type=qS,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{RS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new NS(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;xf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(YS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&xf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=GS();a.length!==0&&(a+=l),E_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Df(t,e,n,r=!1){const i=new XS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Df(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Df(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e){const n=ad(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qo(s,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function ZS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eC(t,e,n){const r=ii(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=S_(e),{host:o,port:l}=tC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nC()}function S_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tC(t){const e=S_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lf(o)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}async function rC(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){return Ol(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function oC(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends pd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,n,"signInWithPassword",iC);case"emailLink":return sC(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,r,"signUpPassword",rC);case"emailLink":return oC(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return Ol(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="http://localhost";class er extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ud(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uC(t){const e=xi(Ni(t)).link,n=e?xi(Ni(e)).deep_link_id:null,r=xi(Ni(t)).deep_link_id;return(r?xi(Ni(r)).link:null)||r||n||e||t}class md{constructor(e){var n,r,i,s,o,l;const a=xi(Ni(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=aC((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=uC(e);try{return new md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return cs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=md.parseLink(n);return O(r,"argument-error"),cs._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends xs{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return er._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends xs{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends xs{constructor(){super("twitter.com")}static credential(e,n){return er._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),o=Mf(r);return new Gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mf(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jo(e,n,r,i)}}function I_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,s,e,r):s})}async function cC(t,e,n=!1){const r=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await us(t,I_(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=hd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t,e,n=!1){if(Ot(t.app))return Promise.reject(En(t));const r="signIn",i=await I_(t,r,e),s=await Gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hC(t,e){return k_(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pC(t,e,n){return Ot(t.app)?Promise.reject(En(t)):hC(Ie(t),si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){return Ie(t).setPersistence(e)}function gC(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function _C(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function yC(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function vC(t){return Ie(t).signOut()}const Zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=1e3,EC=10;class x_ extends T_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);US()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const N_=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends T_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const P_=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await SC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=gd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function IC(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function kC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xC(){return A_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",NC=1,el="firebaseLocalStorage",D_="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([el],e?"readwrite":"readonly").objectStore(el)}function RC(){const t=indexedDB.deleteDatabase(O_);return new Ns(t).toPromise()}function Vu(){const t=indexedDB.open(O_,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(el,{keyPath:D_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(el)?e(r):(r.close(),await RC(),e(await Vu()))})})}async function Ff(t,e,n){const r=Ll(t,!0).put({[D_]:e,value:n});return new Ns(r).toPromise()}async function PC(t,e){const n=Ll(t,!1).get(e),r=await new Ns(n).toPromise();return r===void 0?null:r.value}function jf(t,e){const n=Ll(t,!0).delete(e);return new Ns(n).toPromise()}const AC=800,OC=3;class b_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return A_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(xC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await Ff(e,Zo,"1"),await jf(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ll(i,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b_.type="LOCAL";const DC=b_;new Ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e){return e?Lt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LC(t){return k_(t.auth,new _d(t),t.bypassAuthState)}function MC(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),dC(n,new _d(t),t.bypassAuthState)}async function FC(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),cC(n,new _d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LC;case"linkViaPopup":case"linkViaRedirect":return FC;case"reauthViaPopup":case"reauthViaRedirect":return MC;default:vt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new Ts(2e3,1e4);class kr extends L_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jC.get())};e()}}kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="pendingRedirect",yo=new Map;class zC extends L_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await $C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $C(t,e){const n=HC(e),r=BC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WC(t,e){yo.set(t._key(),e)}function BC(t){return Lt(t._redirectPersistence)}function HC(t){return _o(UC,t.config.apiKey,t.name)}async function VC(t,e,n=!1){if(Ot(t.app))return Promise.reject(En(t));const r=ii(t),i=bC(r,e),o=await new zC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=10*60*1e3;class KC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!M_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function M_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qC(t);for(const n of e)try{if(ZC(n))return}catch{}vt(t,"unauthorized-domain")}function ZC(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XC.test(n))return!1;if(YC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new Ts(3e4,6e4);function zf(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tI(t){return new Promise((e,n)=>{var r,i,s;function o(){zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zf(),n(kt(t,"network-request-failed"))},timeout:eI.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const l=QS("iframefcb");return Tt()[l]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},E_(`${KS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw vo=null,e})}let vo=null;function nI(t){return vo=vo||tI(t),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Ts(5e3,15e3),iI="__/auth/iframe",sI="emulator/auth/iframe",oI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aI(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,sI):`https://${t.config.authDomain}/${iI}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=lI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function uI(t){const e=await nI(t),n=Tt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:aI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),l=Tt().setTimeout(()=>{s(o)},rI.get());function a(){Tt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dI=500,hI=600,fI="_blank",pI="http://localhost";class $f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mI(t,e,n,r=dI,i=hI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},cI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(l=p_(u)?fI:n),h_(u)&&(e=e||pI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[y,v])=>`${f}${y}=${v},`,"");if(jS(u)&&l!=="_self")return gI(e||"",l),new $f(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new $f(c)}function gI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",yI="emulator/auth/handler",vI=encodeURIComponent("fac");async function Wf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof C_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof xs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${vI}=${encodeURIComponent(a)}`:"";return`${wI(t)}?${ni(l).slice(1)}${u}`}function wI({config:t}){return t.emulator?dd(t,yI):`https://${t.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="webStorageSupport";class EI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=VC,this._overrideRedirectResult=WC}async _openPopup(e,n,r,i){var s;Ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wf(e,n,r,Bu(),i);return mI(e,o,gd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wf(e,n,r,Bu(),i);return IC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uI(e),r=new KC(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ma,{type:Ma},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ma];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v_()||f_()||fd()}}const SI=EI;var Bf="@firebase/auth",Hf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kI(t){Vr(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(t)},u=new HS(r,i,s,a);return ZS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Zn("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new CI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Bf,Hf,II(t)),wn(Bf,Hf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=5*60,xI=Qg("authIdTokenMaxAge")||TI;let Vf=null;const NI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xI)return;const i=n==null?void 0:n.token;Vf!==i&&(Vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RI(t=e_()){const e=ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JS(t,{popupRedirectResolver:SI,persistence:[DC,N_,P_]}),r=Qg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=NI(s.toString());_C(n,o,()=>o(n.currentUser)),gC(n,l=>o(l))}}const i=Gg("auth");return i&&eC(n,`http://${i}`),n}function PI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kI("Browser");const Gu={apiKey:"AIzaSyDvQ-CLAZ11NXLGGJTnT6xMB37UEf6MQkY",authDomain:"carfund-f5102.firebaseapp.com",databaseURL:"https://carfund-f5102.firebaseio.com",projectId:"carfund-f5102",messagingSenderId:"694883881246",appId:"1:694883881246:web:79b4afcf0ec942275f390f"},AI=!Gu.apiKey||Gu.apiKey==="REPLACE_ME",F_=Zg(Gu),Kr=RI(F_),Ml="sbadm_login_at",j_=24*60*60*1e3;async function OI(){await mC(Kr,N_)}async function DI(t,e){await pC(Kr,t,e);try{localStorage.setItem(Ml,String(Date.now()))}catch{}}async function U_(){try{localStorage.removeItem(Ml)}catch{}await vC(Kr)}function bI(){try{const t=Number(localStorage.getItem(Ml)||0);return!!t&&Date.now()-t<j_}catch{return!1}}function LI(){try{const t=Number(localStorage.getItem(Ml)||0);return t?Math.max(0,j_-(Date.now()-t)):0}catch{return 0}}function MI(t){return yC(Kr,e=>{if(e&&!bI()){U_(),t(null);return}t(e)})}const z_="sbadm_env";function Fl(){try{return localStorage.getItem(z_)||"release"}catch{return"release"}}function FI(t){try{localStorage.setItem(z_,t)}catch{}location.reload()}function Ge(t=Fl()){return`jsapps/sb/${t}`}function jl(t=Fl()){return`jsapps/sb/${t}/ops`}const Fa={dev:"#5DE0E6",release:"#FF6B4E"},jI={dev:"개발",release:"실서비스"},E={panel:"#150B28",panelHi:"#1E1136",line:"rgba(255,255,255,0.10)",lineHi:"rgba(255,255,255,0.20)",text:"#FFFFFF",textDim:"rgba(255,255,255,0.62)",textFaint:"rgba(255,255,255,0.38)",gold:"#FFD86A",cyan:"#5DE0E6",green:"#8EFF6D",orange:"#FF8A3D",red:"#FF6B4E",purple:"#A16BFF",pink:"#FF66CC",radius:12,radiusLg:16},Ul={background:`linear-gradient(180deg, ${E.panelHi}, ${E.panel})`,border:`1px solid ${E.line}`,borderRadius:E.radiusLg,padding:16},UI=(t=E.gold,e=!1)=>({padding:"9px 14px",borderRadius:E.radius,border:e?`1.5px solid ${E.lineHi}`:"none",background:e?"transparent":t,color:e?E.text:"#1A0F00",fontSize:12.5,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap"}),$_={padding:"9px 12px",borderRadius:E.radius,background:"rgba(0,0,0,0.35)",border:`1.5px solid ${E.line}`,color:E.text,fontSize:13,outline:"none",minWidth:0};function oe({title:t,right:e,children:n,pad:r=16}){return h.jsxs("div",{style:{...Ul,padding:r},children:[(t||e)&&h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:12},children:[h.jsx("div",{style:{fontSize:13,fontWeight:900,color:E.text},children:t}),e]}),n]})}function an({label:t,value:e,sub:n,color:r=E.gold}){return h.jsxs("div",{style:{...Ul,padding:14},children:[h.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:E.textDim},children:t}),h.jsx("div",{style:{fontSize:24,fontWeight:900,color:r,marginTop:4,lineHeight:1.1},children:typeof e=="number"?e.toLocaleString():e}),n&&h.jsx("div",{style:{fontSize:10,color:E.textFaint,marginTop:3},children:n})]})}function V({children:t,onClick:e,color:n,ghost:r,disabled:i,danger:s}){const o=s?E.red:n??E.gold;return h.jsx("button",{onClick:e,disabled:i,style:{...UI(o,r),opacity:i?.45:1,cursor:i?"default":"pointer",color:r?E.text:s?"#fff":"#1A0F00"},children:t})}function et(t){return h.jsx("input",{...t,style:{...$_,...t.style||{}}})}function zl(t){return h.jsx("select",{...t,style:{...$_,...t.style||{}}})}function Qe({children:t,color:e=E.cyan}){return h.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:8,background:`${e}22`,border:`1px solid ${e}66`,color:e,fontSize:10.5,fontWeight:900,whiteSpace:"nowrap"},children:t})}function $l({children:t}){return h.jsx("div",{style:{padding:"32px 16px",textAlign:"center",color:E.textFaint,fontSize:12,fontWeight:700},children:t})}function Pe({cols:t,rows:e,empty:n}){return e.length===0?h.jsx($l,{children:n??"데이터가 없습니다"}):h.jsx("div",{style:{overflowX:"auto"},children:h.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[h.jsx("thead",{children:h.jsx("tr",{children:t.map(r=>h.jsx("th",{style:{textAlign:"left",padding:"8px 10px",borderBottom:`1px solid ${E.lineHi}`,color:E.textDim,fontSize:10.5,fontWeight:800,whiteSpace:"nowrap",width:r.width},children:r.label},r.key))})}),h.jsx("tbody",{children:e.map((r,i)=>h.jsx("tr",{style:{borderBottom:`1px solid ${E.line}`},children:t.map(s=>h.jsx("td",{style:{padding:"9px 10px",color:E.text,verticalAlign:"middle"},children:s.render?s.render(r):String(r[s.key]??"")},s.key))},i))})]})})}const ft=t=>{if(!t)return"-";const e=new Date(t),n=r=>String(r).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())} ${n(e.getHours())}:${n(e.getMinutes())}`},zI=t=>t?ft(t).slice(0,10):"-";var Gf={};const Kf="@firebase/database",Qf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W_="";function $I(t){W_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new WI(e)}}catch{}return new BI},Vn=B_("localStorage"),HI=B_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new od("@firebase/database"),VI=function(){let t=1;return function(){return t++}}(),H_=function(t){const e=uE(t),n=new sE;n.update(e);const r=n.digest();return rd.encodeByteArray(r)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rs.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let Ui=null,qf=!0;const GI=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Mr.logLevel=H.VERBOSE,Ui=Mr.log.bind(Mr)},we=function(...t){if(qf===!0&&(qf=!1,Ui===null&&HI.get("logging_enabled")===!0&&GI()),Ui){const e=Rs.apply(null,t);Ui(e)}},Ps=function(t){return function(...e){we(t,...e)}},Ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);Mr.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw Mr.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Rs(...t);Mr.warn(e)},KI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},tr="[MIN_NAME]",xn="[MAX_NAME]",lr=function(t,e){if(t===e)return 0;if(t===tr||e===xn)return-1;if(e===tr||t===xn)return 1;{const n=Yf(t),r=Yf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qI=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},vd=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=vd(t[e[r]]);return n+="}",n},V_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const G_=function(t){I(!yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},YI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function JI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ZI=new RegExp("^-?(0*)\\d{1,10}$"),ek=-2147483648,tk=2147483647,Yf=function(t){if(ZI.test(t)){const e=Number(t);if(e>=ek&&e<=tk)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},nk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="5",K_="v",Q_="s",q_="r",Y_="f",X_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,J_="ls",Z_="p",Qu="ac",ey="websocket",ty="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ry(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===ey)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ty)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sk(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return z0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={},Ua={};function Ed(t){const e=t.toString();return ja[e]||(ja[e]=new ok),ja[e]}function lk(t,e){const n=t.toString();return Ua[n]||(Ua[n]=e()),Ua[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="start",uk="close",ck="pLPCommand",dk="pRTLPCB",iy="id",sy="pw",oy="ser",hk="cb",fk="seg",pk="ts",mk="d",gk="dframe",ly=1870,ay=30,_k=ly-ay,yk=25e3,vk=3e4;class Tr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=Ed(n),this.urlFn=a=>(this.appCheckToken&&(a[Qu]=this.appCheckToken),ry(n,ty,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ak(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vk)),QI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xf)this.id=l,this.password=a;else if(o===uk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xf]="t",r[oy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[K_]=wd,this.transportSessionId&&(r[Q_]=this.transportSessionId),this.lastSessionId&&(r[J_]=this.lastSessionId),this.applicationId&&(r[Z_]=this.applicationId),this.appCheckToken&&(r[Qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&X_.test(location.hostname)&&(r[q_]=Y_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return Tr.forceAllow_?!0:!Tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YI()&&!XI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hg(n),i=V_(r,_k);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gk]="t",r[iy]=e,r[sy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VI(),window[ck+this.uniqueCallbackIdentifier]=e,window[dk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iy]=this.myID,e[sy]=this.myPW,e[oy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ay+r.length<=ly;){const o=this.pendingSegs.shift();r=r+"&"+fk+i+"="+o.seg+"&"+pk+i+"="+o.ts+"&"+mk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=16384,Ek=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=Ed(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[K_]=wd,typeof location<"u"&&location.hostname&&X_.test(location.hostname)&&(o[q_]=Y_),n&&(o[Q_]=n),r&&(o[J_]=r),i&&(o[Qu]=i),s&&(o[Z_]=s),ry(e,ey,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let r;X0(),this.mySock=new tl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tl!==null&&!ht.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ls(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=V_(n,wk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ek))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of ds.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=6e4,Ck=5e3,Ik=10*1024,kk=100*1024,za="t",Jf="d",Tk="s",Zf="r",xk="e",ep="o",tp="a",np="n",rp="p",Nk="h";class Rk{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ik?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(za in e){const n=e[za];n===tp?this.upgradeIfSecondaryHealthy_():n===Zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ep&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:np,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(za,e);if(Jf in e){const r=e[Jf];if(n===Nk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===np){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Tk?this.onConnectionShutdown_(r):n===Zf?this.onReset_(r):n===xk?Ku("Server Error: "+r):n===ep?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wd!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ck))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends cy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=32,sp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new G("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Cd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Ae(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ak(t,e){const n=hs(t,0),r=hs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=lr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function hy(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ok{constructor(e,n){this.errorPrefix_=n,this.parts_=hs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Al(this.parts_[r]);fy(this)}}function Dk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Al(e),fy(t)}function bk(t){const e=t.parts_.pop();t.byteLength_-=Al(e),t.parts_.length>0&&(t.byteLength_-=1)}function fy(t){if(t.byteLength_>sp)throw new Error(t.errorPrefix_+"has a key path longer than "+sp+" bytes ("+t.byteLength_+").");if(t.parts_.length>ip)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ip+") or object contains a cycle "+$n(t))}function $n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends cy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Id}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=1e3,Lk=60*5*1e3,op=30*1e3,Mk=1.3,Fk=3e4,jk="server_kill",lp=3;class jt extends uy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wi,this.maxReconnectDelay_=Lk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;jt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const r=Hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=op)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fk&&(this.reconnectDelay_=wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new Rk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{be(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(jk)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&be(c),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fu(this.interruptReasons_)&&(this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lp&&(this.reconnectDelay_=op,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+W_.replace(/\./g,"-")]=1,sd()?e["framework.cordova"]=1:qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return Fu(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(tr,e),i=new M(tr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class py extends Wl{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(e){to=e}compare(e,n){return lr(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(xn,to)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,to)}toString(){return".key"}}const Sn=new py;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class Uk{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new no(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new no(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new no(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new Uk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t,e){return lr(t.name,e.name)}function kd(t,e){return lr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;function $k(t){qu=t}const my=function(t){return typeof t=="number"?"number:"+G_(t):"string:"+t},gy=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else I(t===qu||t.isEmpty(),"priority of unexpected type.");I(t===qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gy(this.priorityNode_)}static set __childrenNodeConstructor(e){ap=e}static get __childrenNodeConstructor(){return ap}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:z(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+my(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=G_(this.value_):e+=this.value_,this.lazyHash_=H_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _y,yy;function Wk(t){_y=t}function Bk(t){yy=t}class Hk extends Wl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?lr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(xn,new me("[PRIORITY-POST]",yy))}makePost(e,n){const r=_y(e);return new M(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new Hk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=Math.log(2);class Gk{constructor(e){const n=s=>parseInt(Math.log(s)/Vk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new _e(f,c.node,_e.BLACK,null,null);{const y=parseInt(d/2,10)+a,v=i(a,y),_=i(y+1,u);return c=t[y],f=n?n(c):c,new _e(f,c.node,_e.BLACK,v,_)}},s=function(a){let u=null,d=null,c=t.length;const f=function(v,_){const S=c-v,m=c;c-=v;const p=i(S+1,m),g=t[S],w=n?n(g):g;y(new _e(w,g.node,_,null,p))},y=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const _=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));_?f(S,_e.BLACK):(f(S,_e.BLACK),f(S,_e.RED))}return d},o=new Gk(t.length),l=s(o);return new ze(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const hr={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(hr&&te,"ChildrenNode.ts has not been loaded"),$a=$a||new Mt({".priority":hr},{".priority":te}),$a}get(e){const n=Hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=rl(r,e.getCompare()):l=hr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Mt(d,u)}addToIndexes(e,n){const r=Ko(this.indexes_,(i,s)=>{const o=Hr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===hr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),rl(l,o.getCompare())}else return hr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ko(this.indexes_,i=>{if(i===hr)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&gy(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new A(new ze(kd),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{I(z(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+my(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":H_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===Sn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Sn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kk extends A{constructor(){super(new ze(kd),A.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const As=new Kk;Object.defineProperties(M,{MIN:{value:new M(tr,A.EMPTY_NODE)},MAX:{value:new M(xn,As)}});py.__EMPTY_NODE=A.EMPTY_NODE;me.__childrenNodeConstructor=A;$k(As);Bk(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=!0;function de(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,de(e))}if(!(t instanceof Array)&&Qk){const n=[];let r=!1;if(Ce(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=de(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=rl(n,zk,o=>o.name,kd);if(r){const o=rl(n,te.getCompare());return new A(s,de(e),new Mt({".priority":o},{".priority":te}))}else return new A(s,de(e),Mt.Default)}else{let n=A.EMPTY_NODE;return Ce(t,(r,i)=>{if(xt(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}Wk(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends Wl{constructor(e){super(),this.indexPath_=e,I(!j(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?lr(e.name,n.name):s}makePost(e,n){const r=de(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,As);return new M(xn,e)}toString(){return hs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk extends Wl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?lr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=de(e);return new M(n,r)}toString(){return".value"}}const wy=new qk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){return{type:"value",snapshotNode:t}}function Qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Yk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Qr(n,r)):o.trackChildChange(ps(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(fs(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ps(i,s,o))}else r.trackChildChange(Qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new Td(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,y)=>c(y,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,a);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ps(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(fs(n,c));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Qr(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(fs(u.name,u.node)),s.trackChildChange(Qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jk(t){return t.loadsAllData()?new Td(t.getIndex()):t.hasLimit()?new Xk(t):new ms(t)}function Zk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function eT(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function tT(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function nT(t,e){const n=t.copy();return n.index_=e,n}function up(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===wy?n="$value":t.index_===Sn?n="$key":(I(t.index_ instanceof vy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends uy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=il.getListenId_(e,r),l={};this.listens_[o]=l;const a=up(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Hr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=il.getListenId_(e,n);delete this.listens_[r]}get(e){const n=up(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ls(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return{value:null,children:new Map}}function Sy(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,sl());const i=t.children.get(r);e=Q(e),Sy(i,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):iT(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Yu(i,s,n)})}function iT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=10*1e3,oT=30*1e3,lT=5*60*1e3;class aT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sT(e);const r=dp+(oT-dp)*Math.random();zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ce(e,(i,s)=>{s>0&&xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*lT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Nd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=Nd()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new ol(W(),n,this.revert)}}else return I(z(this.path)===e,"operationForChild called for unrelated child."),new ol(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new gs(this.source,W()):new gs(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return j(this.path)?new nr(this.source,W(),this.snap.getImmediateChild(e)):new nr(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new nr(this.source,W(),n.value):new qr(this.source,W(),n)}else return I(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qr(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Yk(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>hT(t,l,a)),o.forEach(l=>{const a=dT(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function dT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hT(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return{eventCache:t,serverCache:e}}function $i(t,e,n,r){return Bl(new Rn(e,n,r),t.serverCache)}function Cy(t,e,n,r){return Bl(t.eventCache,new Rn(e,n,r))}function ll(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;const fT=()=>(Wa||(Wa=new ze(qI)),Wa);class K{constructor(e,n=fT()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return Ce(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(j(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:se(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(j(e))return new K(n,this.children);{const r=z(e),s=(this.children.get(r)||new K(null)).set(Q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(j(e))return n;{const r=z(e),s=(this.children.get(r)||new K(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),se(n,i),r):new K(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new K(null))}}function Wi(t,e,n){if(j(e))return new _t(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new _t(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new _t(s)}}}function Xu(t,e,n){let r=t;return Ce(n,(i,s)=>{r=Wi(r,se(e,i),s)}),r}function hp(t,e){if(j(e))return _t.empty();{const n=t.writeTree_.setTree(e,new K(null));return new _t(n)}}function Ju(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function fp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function Cn(t,e){if(j(e))return t;{const n=ar(t,e);return n!=null?new _t(new K(n)):new _t(t.writeTree_.subtree(e))}}function Zu(t){return t.writeTree_.isEmpty()}function Yr(t,e){return Iy(W(),t.writeTree_,e)}function Iy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Iy(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return Ny(e,t)}function pT(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wi(t.visibleWrites,e,n)),t.lastWriteId=r}function mT(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Xu(t.visibleWrites,e,n),t.lastWriteId=r}function gT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _T(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&yT(l,r.path)?i=!1:nt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return vT(t),!0;if(r.snap)t.visibleWrites=hp(t.visibleWrites,r.path);else{const l=r.children;Ce(l,a=>{t.visibleWrites=hp(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function yT(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(se(t.path,n),e))return!0;return!1}function vT(t){t.visibleWrites=ky(t.allWrites,wT,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wT(t){return t.visible}function ky(t,e,n){let r=_t.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)nt(n,o)?(l=Ae(n,o),r=Wi(r,l,s.snap)):nt(o,n)&&(l=Ae(o,n),r=Wi(r,W(),s.snap.getChild(l)));else if(s.children){if(nt(n,o))l=Ae(n,o),r=Xu(r,l,s.children);else if(nt(o,n))if(l=Ae(o,n),j(l))r=Xu(r,W(),s.children);else{const a=Hr(s.children,z(l));if(a){const u=a.getChild(Q(l));r=Wi(r,W(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function Ty(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=Cn(t.visibleWrites,e);if(Zu(o))return n;if(n==null&&!Ju(o,W()))return null;{const l=n||A.EMPTY_NODE;return Yr(o,l)}}}else{const s=Cn(t.visibleWrites,e);if(!i&&Zu(s))return n;if(!i&&n==null&&!Ju(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(nt(u.path,e)||nt(e,u.path))},l=ky(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Yr(l,a)}}}function ET(t,e,n){let r=A.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cn(t.visibleWrites,e);return n.forEachChild(te,(o,l)=>{const a=Yr(Cn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),fp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cn(t.visibleWrites,e);return fp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ST(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(Ju(t.visibleWrites,s))return null;{const o=Cn(t.visibleWrites,s);return Zu(o)?i.getChild(n):Yr(o,i.getChild(n))}}function CT(t,e,n,r){const i=se(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cn(t.visibleWrites,i);return Yr(o,r.getNode().getImmediateChild(n))}else return null}function IT(t,e){return ar(t.visibleWrites,e)}function kT(t,e,n,r,i,s,o){let l;const a=Cn(t.visibleWrites,e),u=ar(a,W());if(u!=null)l=u;else if(n!=null)l=Yr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=f.getNext();for(;y&&d.length<i;)c(y,r)!==0&&d.push(y),y=f.getNext();return d}else return[]}function TT(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function al(t,e,n,r){return Ty(t.writeTree,t.treePath,e,n,r)}function Ad(t,e){return ET(t.writeTree,t.treePath,e)}function pp(t,e,n,r){return ST(t.writeTree,t.treePath,e,n,r)}function ul(t,e){return IT(t.writeTree,se(t.treePath,e))}function xT(t,e,n,r,i,s){return kT(t.writeTree,t.treePath,e,n,r,i,s)}function Od(t,e,n){return CT(t.writeTree,t.treePath,e,n)}function xy(t,e){return Ny(se(t.treePath,e),t.writeTree)}function Ny(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ps(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ps(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ry=new RT;class Dd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Od(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),s=xT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){return{filter:t}}function AT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OT(t,e,n,r,i){const s=new NT;let o,l;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=ec(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=cl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=bT(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=tc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=FT(t,e,u.path,r,i,s):o=LT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=MT(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const a=s.getChanges();return DT(e,o,a),{viewCache:o,changes:a}}function DT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ll(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ey(ll(e)))}}function Py(t,e,n,r,i,s){const o=e.eventCache;if(ul(r,n)!=null)return e;{let l,a;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rr(e),d=u instanceof A?u:A.EMPTY_NODE,c=Ad(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=al(r,rr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){I(Nn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=pp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=pp(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Od(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return $i(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function cl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),y,null)}else{const y=z(n);if(!a.isCompleteForPath(n)&&Nn(n)>1)return e;const v=Q(n),S=a.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=d.updatePriority(a.getNode(),S):u=d.updateChild(a.getNode(),y,S,v,Ry,null)}const c=Cy(e,u,a.isFullyInitialized()||j(n),d.filtersNodes()),f=new Dd(i,c,s);return Py(t,c,n,i,f,l)}function ec(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Dd(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=$i(e,u,!0,t.filter.filtersNodes());else{const c=z(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=$i(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Q(n),y=l.getNode().getImmediateChild(c);let v;if(j(f))v=r;else{const _=d.getCompleteChild(c);_!=null?Cd(f)===".priority"&&_.getChild(dy(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=A.EMPTY_NODE}if(y.equals(v))a=e;else{const _=t.filter.updateChild(l.getNode(),c,v,f,d,o);a=$i(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function mp(t,e){return t.eventCache.isCompleteForChild(e)}function bT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=se(n,a);mp(e,z(d))&&(l=ec(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=se(n,a);mp(e,z(d))||(l=ec(t,l,d,u,i,s,o))}),l}function gp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new K(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),v=gp(t,y,f);a=cl(t,a,new G(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const y=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!y){const v=e.serverCache.getNode().getImmediateChild(c),_=gp(t,v,f);a=cl(t,a,new G(c),_,i,s,o,l)}}),a}function LT(t,e,n,r,i,s,o){if(ul(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return cl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new K(null);return a.getNode().forEachChild(Sn,(d,c)=>{u=u.set(new G(d),c)}),tc(t,e,n,u,i,s,l,o)}else return e}else{let u=new K(null);return r.foreach((d,c)=>{const f=se(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),tc(t,e,n,u,i,s,l,o)}}function MT(t,e,n,r,i){const s=e.serverCache,o=Cy(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return Py(t,o,n,r,Ry,i)}function FT(t,e,n,r,i,s){let o;if(ul(r,n)!=null)return e;{const l=new Dd(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=al(r,rr(e));else{const c=e.serverCache.getNode();I(c instanceof A,"serverChildren would be complete if leaf node"),d=Ad(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=z(n);let c=Od(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=al(r,rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ul(r,W())!=null,$i(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Td(r.getIndex()),s=Jk(r);this.processor_=PT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Rn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Rn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bl(c,d),this.eventGenerator_=new uT(this.query_)}get query(){return this.query_}}function UT(t){return t.viewCache_.serverCache.getNode()}function zT(t){return ll(t.viewCache_)}function $T(t,e){const n=rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function _p(t){return t.eventRegistrations_.length===0}function WT(t,e){t.eventRegistrations_.push(e)}function yp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function vp(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(I(rr(t.viewCache_),"We should always have a full cache before handling merges"),I(ll(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=OT(t.processor_,i,e,n,r);return AT(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ay(t,s.changes,s.viewCache.eventCache.getNode(),null)}function BT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(Qr(s,o))}),n.isFullyInitialized()&&r.push(Ey(n.getNode())),Ay(t,r,n.getNode(),e)}function Ay(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return cT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class Oy{constructor(){this.views=new Map}}function HT(t){I(!dl,"__referenceConstructor has already been defined"),dl=t}function VT(){return I(dl,"Reference.ts has not been loaded"),dl}function GT(t){return t.views.size===0}function bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),vp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vp(o,e,n,r));return s}}function Dy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=al(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Ad(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Bl(new Rn(l,a,!1),new Rn(r,i,!1));return new jT(e,u)}return o}function KT(t,e,n,r,i,s){const o=Dy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WT(o,n),BT(o,n)}function QT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Pn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(yp(u,n,r)),_p(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(yp(a,n,r)),_p(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Pn(t)&&s.push(new(VT())(e._repo,e._path)),{removed:s,events:o}}function by(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const r of t.views.values())n=n||$T(r,e);return n}function Ly(t,e){if(e._queryParams.loadsAllData())return Vl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function My(t,e){return Ly(t,e)!=null}function Pn(t){return Vl(t)!=null}function Vl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;function qT(t){I(!hl,"__referenceConstructor has already been defined"),hl=t}function YT(){return I(hl,"Reference.ts has not been loaded"),hl}let XT=1;class wp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=TT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fy(t,e,n,r,i){return pT(t.pendingWriteTree_,e,n,r,i),i?li(t,new nr(Nd(),e,n)):[]}function JT(t,e,n,r){mT(t.pendingWriteTree_,e,n,r);const i=K.fromObject(n);return li(t,new qr(Nd(),e,i))}function un(t,e,n=!1){const r=gT(t.pendingWriteTree_,e);if(_T(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(W(),!0):Ce(r.children,o=>{s=s.set(new G(o),!0)}),li(t,new ol(r.path,s,n))}else return[]}function Os(t,e,n){return li(t,new nr(Rd(),e,n))}function ZT(t,e,n){const r=K.fromObject(n);return li(t,new qr(Rd(),e,r))}function e1(t,e){return li(t,new gs(Rd(),e))}function t1(t,e,n){const r=Md(t,n);if(r){const i=Fd(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new gs(Pd(o),l);return jd(t,s,a)}else return[]}function jy(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||My(o,e))){const a=QT(o,e,n,r);GT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,y)=>Pn(y));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const y=s1(f);for(let v=0;v<y.length;++v){const _=y[v],S=_.query,m=Wy(t,_);t.listenProvider_.startListening(Bi(S),_s(t,S),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Bi(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(Gl(f));t.listenProvider_.stopListening(Bi(f),y)}))}o1(t,u)}return l}function Uy(t,e,n,r){const i=Md(t,r);if(i!=null){const s=Fd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new nr(Pd(l),a,n);return jd(t,o,u)}else return[]}function n1(t,e,n,r){const i=Md(t,r);if(i){const s=Fd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=K.fromObject(n),d=new qr(Pd(l),a,u);return jd(t,o,d)}else return[]}function r1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,y)=>{const v=Ae(f,i);s=s||In(y,v),o=o||Pn(y)});let l=t.syncPointTree_.get(i);l?(o=o||Pn(l),s=s||In(l,W())):(l=new Oy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const _=In(v,W());_&&(s=s.updateImmediateChild(y,_))}));const u=My(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Gl(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=l1();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const d=Hl(t.pendingWriteTree_,i);let c=KT(l,e,n,d,s,a);if(!u&&!o&&!r){const f=Ly(l,e);c=c.concat(a1(t,e,f))}return c}function Ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=In(l,a);if(u)return u});return Ty(i,e,s,n,!0)}function i1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Ae(u,n);r=r||In(d,c)});let i=t.syncPointTree_.get(n);i?r=r||In(i,W()):(i=new Oy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Rn(r,!0,!1):null,l=Hl(t.pendingWriteTree_,e._path),a=Dy(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return zT(a)}function li(t,e){return zy(e,t.syncPointTree_,null,Hl(t.pendingWriteTree_,W()))}function zy(t,e,n,r){if(j(t.path))return $y(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=In(i,W()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=xy(r,o);s=s.concat(zy(l,a,u,d))}return i&&(s=s.concat(bd(i,t,r,n))),s}}function $y(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=In(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=xy(r,o),d=t.operationForChild(o);d&&(s=s.concat($y(d,l,a,u)))}),i&&(s=s.concat(bd(i,t,r,n))),s}function Wy(t,e){const n=e.query,r=_s(t,n);return{hashFn:()=>(UT(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?t1(t,n._path,r):e1(t,n._path);{const s=JI(i,n);return jy(t,n,null,s)}}}}function _s(t,e){const n=Gl(e);return t.queryToTagMap.get(n)}function Gl(t){return t._path.toString()+"$"+t._queryIdentifier}function Md(t,e){return t.tagToQueryMap.get(e)}function Fd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function jd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Hl(t.pendingWriteTree_,e);return bd(r,n,i,null)}function s1(t){return t.fold((e,n,r)=>{if(n&&Pn(n))return[Vl(n)];{let i=[];return n&&(i=by(n)),Ce(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YT())(t._repo,t._path):t}function o1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function l1(){return XT++}function a1(t,e,n){const r=e._path,i=_s(t,e),s=Wy(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!j(u)&&d&&Pn(d))return[Vl(d).query];{let f=[];return d&&(f=f.concat(by(d).map(y=>y.query))),Ce(c,(y,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Bi(d),_s(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ud(n)}node(){return this.node_}}class zd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new zd(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const u1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ep=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return d1(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},d1=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},By=function(t,e,n,r){return $d(e,new zd(n,t),r)},Hy=function(t,e,n){return $d(t,new Ud(e),n)};function $d(t,e,n){const r=t.getPriority().val(),i=Ep(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Ep(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(te,(l,a)=>{const u=$d(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Bd(t,e){let n=e instanceof G?e:new G(e),r=t,i=z(n);for(;i!==null;){const s=Hr(r.node.children,i)||{children:{},childCount:0};r=new Wd(i,r,s),n=Q(n),i=z(n)}return r}function ai(t){return t.node.value}function Vy(t,e){t.node.value=e,nc(t)}function Gy(t){return t.node.childCount>0}function h1(t){return ai(t)===void 0&&!Gy(t)}function Kl(t,e){Ce(t.node.children,(n,r)=>{e(new Wd(n,t,r))})}function Ky(t,e,n,r){n&&e(t),Kl(t,i=>{Ky(i,e,!0)})}function f1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ds(t){return new G(t.parent===null?t.name:Ds(t.parent)+"/"+t.name)}function nc(t){t.parent!==null&&p1(t.parent,t.name,t)}function p1(t,e,n){const r=h1(n),i=xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,nc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/[\[\].#$\/\u0000-\u001F\u007F]/,g1=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,Hd=function(t){return typeof t=="string"&&t.length!==0&&!m1.test(t)},Qy=function(t){return typeof t=="string"&&t.length!==0&&!g1.test(t)},_1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qy(t)},rc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yd(t)||t&&typeof t=="object"&&xt(t,".sv")},Vd=function(t,e,n,r){r&&e===void 0||Ql(Pl(t,"value"),e,n)},Ql=function(t,e,n){const r=n instanceof G?new Ok(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$n(r));if(typeof e=="function")throw new Error(t+"contains a function "+$n(r)+" with contents = "+e.toString());if(yd(e))throw new Error(t+"contains "+e.toString()+" "+$n(r));if(typeof e=="string"&&e.length>Ba/3&&Al(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+$n(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hd(o)))throw new Error(t+" contains an invalid key ("+o+") "+$n(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Dk(r,o),Ql(t,l,r),bk(r)}),i&&s)throw new Error(t+' contains ".value" child '+$n(r)+" in addition to actual children.")}},y1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=hs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Hd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ak);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},v1=function(t,e,n,r){const i=Pl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ce(e,(o,l)=>{const a=new G(o);if(Ql(i,l,se(n,a)),Cd(a)===".priority"&&!rc(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),y1(i,s)},qy=function(t,e,n,r){if(!Qy(n))throw new Error(Pl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},w1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qy(t,e,n)},Yy=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},E1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_1(n))throw new Error(Pl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ot(t,e,n){Gd(t,n),C1(t,r=>nt(r,e)||nt(e,r))}function C1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(I1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function I1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ui&&we("event: "+n.toString()),oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="repo_interrupt",T1=25;class x1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sl(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N1(t,e,n){if(t.stats_=Ed(t.repoInfo_),t.forceRestClient_||nk())t.server_=new il(t.repoInfo_,(r,i,s,o)=>{Sp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jt(t.repoInfo_,e,(r,i,s,o)=>{Sp(t,r,i,s,o)},r=>{Cp(t,r)},r=>{P1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lk(t.repoInfo_,()=>new aT(t.stats_,t.server_)),t.infoData_=new rT,t.infoSyncTree_=new wp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Os(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Kd(t,"connected",!1),t.serverSyncTree_=new wp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ot(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function R1(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ql(t){return u1({timestamp:R1(t)})}function Sp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ko(n,u=>de(u));o=n1(t.serverSyncTree_,s,a,i)}else{const a=de(n);o=Uy(t.serverSyncTree_,s,a,i)}else if(r){const a=Ko(n,u=>de(u));o=ZT(t.serverSyncTree_,s,a)}else{const a=de(n);o=Os(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Xr(t,s)),ot(t.eventQueue_,l,o)}function Cp(t,e){Kd(t,"connected",e),e===!1&&b1(t)}function P1(t,e){Ce(e,(n,r)=>{Kd(t,n,r)})}function Kd(t,e,n){const r=new G("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=Os(t.infoSyncTree_,r,i);ot(t.eventQueue_,r,s)}function Qd(t){return t.nextWriteId_++}function A1(t,e,n){const r=i1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());r1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Os(t.serverSyncTree_,e._path,s);else{const l=_s(t.serverSyncTree_,e);o=Uy(t.serverSyncTree_,e._path,s,l)}return ot(t.eventQueue_,e._path,o),jy(t.serverSyncTree_,e,n,null,!0),s},i=>(bs(t,"get for query "+he(e)+" failed: "+i),Promise.reject(new Error(i))))}function O1(t,e,n,r,i){bs(t,"set",{path:e.toString(),value:n,priority:r});const s=ql(t),o=de(n,r),l=Ld(t.serverSyncTree_,e),a=Hy(o,l,s),u=Qd(t),d=Fy(t.serverSyncTree_,e,a,u,!0);Gd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const v=f==="ok";v||be("set at "+e+" failed: "+f);const _=un(t.serverSyncTree_,u,!v);ot(t.eventQueue_,e,_),ic(t,i,f,y)});const c=Yd(t,e);Xr(t,c),ot(t.eventQueue_,c,[])}function D1(t,e,n,r){bs(t,"update",{path:e.toString(),value:n});let i=!0;const s=ql(t),o={};if(Ce(n,(l,a)=>{i=!1,o[l]=By(se(e,l),de(a),t.serverSyncTree_,s)}),i)we("update() called with empty data.  Don't do anything."),ic(t,r,"ok",void 0);else{const l=Qd(t),a=JT(t.serverSyncTree_,e,o,l);Gd(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||be("update at "+e+" failed: "+u);const f=un(t.serverSyncTree_,l,!c),y=f.length>0?Xr(t,e):e;ot(t.eventQueue_,y,f),ic(t,r,u,d)}),Ce(n,u=>{const d=Yd(t,se(e,u));Xr(t,d)}),ot(t.eventQueue_,e,[])}}function b1(t){bs(t,"onDisconnectEvents");const e=ql(t),n=sl();Yu(t.onDisconnect_,W(),(i,s)=>{const o=By(i,s,t.serverSyncTree_,e);Sy(n,i,o)});let r=[];Yu(n,W(),(i,s)=>{r=r.concat(Os(t.serverSyncTree_,i,s));const o=Yd(t,i);Xr(t,o)}),t.onDisconnect_=sl(),ot(t.eventQueue_,W(),r)}function L1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k1)}function bs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function ic(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Xy(t,e,n){return Ld(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function qd(t,e=t.transactionQueueTree_){if(e||Yl(t,e),ai(e)){const n=Zy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&M1(t,Ds(e),n)}else Gy(e)&&Kl(e,n=>{qd(t,n)})}function M1(t,e,n){const r=n.map(u=>u.currentWriteId),i=Xy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ae(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{bs(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(un(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Yl(t,Bd(t.transactionQueueTree_,e)),qd(t,t.transactionQueueTree_),ot(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)oi(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xr(t,e)}},o)}function Xr(t,e){const n=Jy(t,e),r=Ds(n),i=Zy(t,n);return F1(t,i,r),r}function F1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(un(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=T1)d=!0,c="maxretry",i=i.concat(un(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Xy(t,a.path,o);a.currentInputSnapshot=f;const y=e[l].update(f.val());if(y!==void 0){Ql("transaction failed: Data returned ",y,a.path);let v=de(y);typeof y=="object"&&y!=null&&xt(y,".priority")||(v=v.updatePriority(f.getPriority()));const S=a.currentWriteId,m=ql(t),p=Hy(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Qd(t),o.splice(o.indexOf(S),1),i=i.concat(Fy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(un(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(un(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oi(r[l]);qd(t,t.transactionQueueTree_)}function Jy(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&ai(r)===void 0;)r=Bd(r,n),e=Q(e),n=z(e);return r}function Zy(t,e){const n=[];return ev(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ev(t,e,n){const r=ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kl(e,i=>{ev(t,i,n)})}function Yl(t,e){const n=ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Vy(e,n.length>0?n:void 0)}Kl(e,r=>{Yl(t,r)})}function Yd(t,e){const n=Ds(Jy(t,e)),r=Bd(t.transactionQueueTree_,e);return f1(r,i=>{Ha(t,i)}),Ha(t,r),Ky(r,i=>{Ha(t,i)}),n}function Ha(t,e){const n=ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Vy(e,void 0):n.length=s+1,ot(t.eventQueue_,Ds(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ip=function(t,e){const n=z1(t),r=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ny(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},z1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=j1(t.substring(d,c)));const f=U1(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class W1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Cd(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=cp(this._queryParams),n=vd(e);return n==="{}"?"default":n}get _queryObject(){return cp(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof ur))return!1;const n=this._repo===e._repo,r=hy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pk(this._path)}}function H1(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Xd(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Sn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==tr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==xn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===te){if(e!=null&&!rc(e)||n!=null&&!rc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof vy||t.getIndex()===wy,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function tv(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Kt extends ur{constructor(e,n){super(e,n,new xd,!1)}get parent(){const e=dy(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=sc(this.ref,e);return new ys(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ys(i,sc(this.ref,r),te)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function V1(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?sc(t._root,e):t._root}function sc(t,e){return t=Ie(t),z(t._path)===null?w1("child","path",e):qy("child","path",e),new Kt(t._repo,se(t._path,e))}function G1(t){return Yy("remove",t._path),Jd(t,null)}function Jd(t,e){t=Ie(t),Yy("set",t._path),Vd("set",e,t._path,!1);const n=new Is;return O1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function K1(t,e){v1("update",e,t._path);const n=new Is;return D1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Zd(t){t=Ie(t);const e=new B1(()=>{}),n=new eh(e);return A1(t._repo,t,n).then(r=>new ys(r,new Kt(t._repo,t._path),t._queryParams.getIndex()))}class eh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $1("value",this,new ys(e.snapshotNode,new Kt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new W1(this,e,n):null}matches(e){return e instanceof eh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Xl{}class Q1 extends Xl{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Vd("endAt",this._value,e._path,!0);const n=tT(e._queryParams,this._value,this._key);if(tv(n),Xd(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ur(e._repo,e._path,n,e._orderByCalled)}}function q1(t,e){return new Q1(t,e)}class Y1 extends Xl{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Vd("startAt",this._value,e._path,!0);const n=eT(e._queryParams,this._value,this._key);if(tv(n),Xd(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ur(e._repo,e._path,n,e._orderByCalled)}}function X1(t=null,e){return new Y1(t,e)}class J1 extends Xl{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ur(e._repo,e._path,Zk(e._queryParams,this._limit),e._orderByCalled)}}function Z1(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new J1(t)}class ex extends Xl{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){H1(e,"orderByKey");const n=nT(e._queryParams,Sn);return Xd(n),new ur(e._repo,e._path,n,!0)}}function nv(){return new ex}function rv(t,...e){let n=Ie(t);for(const r of e)n=r._apply(n);return n}HT(Kt);qT(Kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="FIREBASE_DATABASE_EMULATOR_HOST",oc={};let nx=!1;function rx(t,e,n,r){t.repoInfo_=new ny(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ix(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ip(s,i),l=o.repoInfo,a;typeof process<"u"&&Gf&&(a=Gf[tx]),a?(s=`http://${a}?ns=${l.namespace}`,o=Ip(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new ik(t.name,t.options,e);E1("Invalid Firebase Database URL",o),j(o.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ox(l,t,u,new rk(t.name,n));return new lx(d,t)}function sx(t,e){const n=oc[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),L1(t),delete n[t.key]}function ox(t,e,n,r){let i=oc[e.name];i||(i={},oc[e.name]=i);let s=i[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new x1(t,nx,n,r),i[t.toURLString()]=s,s}class lx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function ax(t=e_(),e){const n=ad(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=G0("database");r&&ux(n,...r)}return n}function ux(t,e,n,r={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new wo(wo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:K0(r.mockUserToken,t.app.options.projectId);s=new wo(o)}rx(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){$I(ri),Vr(new Zn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ix(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wn(Kf,Qf,t),wn(Kf,Qf,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cx();const dx=ax(F_),cr=t=>V1(dx,t);async function Oe(t){const e=await Zd(cr(t));return e.exists()?e.val():null}async function iv(t,e,n){const r=await Zd(rv(cr(t),nv(),X1(e),q1(n)));return r.exists()?r.val():{}}async function hx(t,e=50,n){const r=rv(cr(t),nv(),Z1(e)),i=await Zd(r);return i.exists()?i.val():{}}async function Jl(t,e,n){var s,o;const r=((s=Kr.currentUser)==null?void 0:s.email)||((o=Kr.currentUser)==null?void 0:o.uid)||"unknown",i=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`;try{return await Jd(cr(`${jl()}/audit/${i}`),{at:Date.now(),by:r,action:t,target:e,before:(n==null?void 0:n.before)??null,after:(n==null?void 0:n.after)??null,memo:(n==null?void 0:n.memo)??""}),!0}catch{return!1}}async function th(t,e,n,r,i){const s=await Oe(t);await Jd(cr(t),e),await Jl(n,r,{before:s,after:e,memo:i})}async function fl(t,e,n,r,i){const s=await Oe(t);await K1(cr(t),e),await Jl(n,r,{before:s,after:e,memo:i})}async function Zl(t,e,n,r){const i=await Oe(t);await G1(cr(t)),await Jl(e,n,{before:i,after:null,memo:r})}function kp(t){const e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}function fx(t){const e={funnel:{},count:{},stage:{}},n=(r,i)=>{if(!(!r||typeof r!="object")){if(i>=2){for(const[s,o]of Object.entries(r))if(s==="funnel"||s==="count")for(const[l,a]of Object.entries(o))e[s][l]=(e[s][l]||0)+Number(a||0);else if(s==="stage")for(const[l,a]of Object.entries(o)){const u=e.stage[l]||{a:0,c:0};u.a=(u.a||0)+Number(a.a||0),u.c=(u.c||0)+Number(a.c||0),e.stage[l]=u}return}for(const s of Object.values(r))n(s,i+1)}};return n(t,0),e}function px(){var _;const[t,e]=D.useState(14),[n,r]=D.useState({}),[i,s]=D.useState(!0);D.useEffect(()=>{let S=!0;s(!0);const m=kp(new Date),p=kp(new Date(Date.now()-t*864e5));return iv(`${Ge()}/stats`,p,m).then(g=>{if(!S)return;const w={};for(const[k,T]of Object.entries(g))w[k]=fx(T);r(w),s(!1)}).catch(()=>{S&&s(!1)}),()=>{S=!1}},[t]);const o=Object.entries(n).sort(([S],[m])=>S.localeCompare(m)),l=(_=o[o.length-1])==null?void 0:_[1],a=S=>{var m;return((m=l==null?void 0:l.funnel)==null?void 0:m[S])??0},u=a("app_open"),d=o.reduce((S,[,m])=>{var p;return S+(((p=m.funnel)==null?void 0:p.app_open)??0)},0),c=a("purchase_done"),f=a("purchase_start"),y=a("heart_empty"),v=a("gem_shop_open");return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[h.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[[7,14,30].map(S=>h.jsxs(V,{ghost:t!==S,onClick:()=>e(S),children:[S,"일"]},S)),i&&h.jsx("span",{style:{color:E.textFaint,fontSize:11},children:"불러오는 중..."})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10},children:[h.jsx(an,{label:"DAU (오늘)",value:u,color:E.cyan}),h.jsx(an,{label:`누적 접속 (${t}일)`,value:d,sub:"일별 합계",color:E.purple}),h.jsx(an,{label:"결제 완료 (오늘)",value:c,color:E.gold}),h.jsx(an,{label:"결제 시도 (오늘)",value:f,sub:f?`완료율 ${Math.round(c/f*100)}%`:void 0,color:E.orange})]}),h.jsx(oe,{title:"결제 퍼널 (오늘)",children:h.jsx(Pe,{cols:[{key:"step",label:"단계"},{key:"n",label:"인원",width:90},{key:"rate",label:"직전 대비",width:110,render:S=>h.jsx("span",{style:{color:S.rate>=.5?E.green:S.rate>=.2?E.gold:E.red},children:S.prev?`${Math.round(S.rate*100)}%`:"-"})}],rows:[{step:"❤️ 하트 소진",n:y,prev:0,rate:0},{step:"💎 다이아 상점 진입",n:v,prev:y,rate:y?v/y:0},{step:"💳 결제 시도",n:f,prev:v,rate:v?f/v:0},{step:"✅ 결제 완료",n:c,prev:f,rate:f?c/f:0}]})}),h.jsx(oe,{title:"일별 접속",children:o.length===0?h.jsxs($l,{children:["아직 집계 데이터가 없습니다.",h.jsx("br",{}),h.jsx("span",{style:{fontSize:10.5},children:"게임에서 로그가 쌓이면 여기에 표시됩니다 (백그라운드 전환 시 전송)"})]}):h.jsx(Pe,{cols:[{key:"day",label:"날짜",width:120},{key:"dau",label:"접속",width:90},{key:"pay",label:"결제 완료",width:100},{key:"ad",label:"광고 시청",width:100}],rows:o.slice().reverse().map(([S,m])=>{var p,g,w;return{day:S,dau:(((p=m.funnel)==null?void 0:p.app_open)??0).toLocaleString(),pay:(((g=m.funnel)==null?void 0:g.purchase_done)??0).toLocaleString(),ad:(((w=m.funnel)==null?void 0:w.ad_reward_done)??0).toLocaleString()}})})}),h.jsx(mx,{data:n})]})}function mx({data:t}){const e={};for(const r of Object.values(t))for(const[i,s]of Object.entries(r.stage??{})){const o=e[i]||{a:0,c:0};o.a+=s.a??0,o.c+=s.c??0,e[i]=o}const n=Object.entries(e).map(([r,i])=>({n:Number(r),a:i.a,c:i.c,rate:i.a?i.c/i.a:0})).filter(r=>r.a>=5).sort((r,i)=>r.rate-i.rate).slice(0,15);return h.jsx(oe,{title:"클리어율이 낮은 판 (난이도 점검)",children:h.jsx(Pe,{cols:[{key:"n",label:"스테이지",width:90,render:r=>`${r.n}판`},{key:"a",label:"시도",width:80},{key:"c",label:"클리어",width:80},{key:"rate",label:"클리어율",width:100,render:r=>h.jsxs("span",{style:{color:r.rate<.2?E.red:r.rate<.35?E.orange:E.green,fontWeight:900},children:[Math.round(r.rate*100),"%"]})}],rows:n,empty:"스테이지 데이터가 아직 없습니다"})})}function nh(t){return`${Ge()}/payments/${t}`}async function Tp(t){const e=await Oe(nh(t));return e?Object.entries(e).map(([n,r])=>({...r,orderId:n})).sort((n,r)=>(r.at||0)-(n.at||0)):[]}const lc={pending:"결제 시도",paid:"결제됨 · 미지급",granted:"지급 완료",failed:"실패 · 취소",refunded:"환불됨"},sv={pending:"#8E8E93",paid:"#FF8A3D",granted:"#8EFF6D",failed:"#FF6B4E",refunded:"#A16BFF"};function ov(t){return t.status==="paid"}function lv(t){return t.status==="paid"||t.status==="granted"}async function gx(t,e,n){if(!ov(e))throw new Error("지급 가능한 상태가 아닙니다");await fl(`${Ge()}/grantQueue/${t}/${e.orderId}`,{orderId:e.orderId,productId:e.productId,productName:e.productName,grant:e.grant??null,at:Date.now(),by:"admin",memo:n},"payment.regrant",`${t}/${e.orderId}`,n),await fl(`${nh(t)}/${e.orderId}`,{status:"granted",grantedAt:Date.now(),manual:!0},"payment.regrant",`${t}/${e.orderId}`,n)}async function _x(t,e,n){if(!lv(e))throw new Error("환불 가능한 상태가 아닙니다");await fl(`${nh(t)}/${e.orderId}`,{status:"refunded",refundedAt:Date.now(),refundReason:n,manual:!0},"payment.refund",`${t}/${e.orderId}`,n),await Jl("payment.refund",t,{memo:`${e.productName} ${e.priceKrw}원 환불 - 누적 결제액 조정 필요 여부 확인`})}const rh=()=>`${jl()}/notices`;async function yx(){const t=await Oe(rh());return t?Object.entries(t).map(([e,n])=>({...n,id:e})).sort((e,n)=>(n.pinned?1:0)-(e.pinned?1:0)||(n.at||0)-(e.at||0)):[]}async function vx(t){const e=t.id||`n${Date.now().toString(36)}`;await th(`${rh()}/${e}`,{...t,id:e,at:t.at||Date.now()},t.id?"notice.update":"notice.create",e,t.title)}async function wx(t,e){await Zl(`${rh()}/${t}`,"notice.delete",t,e)}const ih=()=>`${jl()}/banners`;async function Ex(){const t=await Oe(ih());return t?Object.entries(t).map(([e,n])=>({...n,id:e})).sort((e,n)=>(e.order??0)-(n.order??0)):[]}async function Sx(t){const e=t.id||`b${Date.now().toString(36)}`;await th(`${ih()}/${e}`,{...t,id:e},t.id?"banner.update":"banner.create",e,t.title)}async function Cx(t,e){await Zl(`${ih()}/${t}`,"banner.delete",t,e)}const ea=()=>`${Ge()}/blocks`;async function Ix(){const t=await Oe(ea());return t?Object.entries(t).map(([e,n])=>({...n,uid:e})).sort((e,n)=>(n.at||0)-(e.at||0)):[]}async function xp(t){return Oe(`${ea()}/${t}`)}async function kx(t,e,n,r){const i=e<=0,s={uid:t,permanent:i,until:i?0:Date.now()+e*864e5,reason:n,by:"admin",at:Date.now(),nickname:r};await th(`${ea()}/${t}`,s,i?"user.blacklist":"user.block",t,`${i?"영구":e+"일"} · ${n}`)}async function av(t,e){await Zl(`${ea()}/${t}`,"user.unblock",t,e)}const uv=()=>`${Ge()}/config/maintenance`;async function Tx(){return Oe(uv())}async function xx(t){await fl(uv(),t,"config.update","maintenance",t.on?`점검 시작 - ${t.message}`:"점검 해제")}function Nx(){const[t,e]=D.useState(""),[n,r]=D.useState(!1),[i,s]=D.useState(""),[o,l]=D.useState(null),a=async()=>{const d=t.trim();if(!(!d||n)){r(!0),s(""),l(null);try{let c=d;if(!/^[A-Za-z0-9_-]{20,}$/.test(d)){const S=await Oe(`${Ge()}/nicknames/${d.toLowerCase()}`),m=S?null:await Oe(`${Ge()}/codes/${d.toUpperCase()}`);if(c=S||m||"",!c){s("찾을 수 없습니다 (닉네임 · 친구코드 · uid 로 검색)");return}}const[f,y,v,_]=await Promise.all([Oe(`${Ge()}/users/${c}/profile`),Oe(`${Ge()}/users/${c}/save`),Tp(c),xp(c)]);if(!f&&!y){s("데이터가 없는 uid 입니다");return}l({uid:c,profile:f,save:y,payments:v,block:_})}catch(c){s(`조회 실패: ${(c==null?void 0:c.message)??c}`)}finally{r(!1)}}},u=async()=>{if(!o)return;const[d,c]=await Promise.all([Tp(o.uid),xp(o.uid)]);l({...o,payments:d,block:c})};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[h.jsxs(oe,{title:"유저 검색",children:[h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx(et,{value:t,onChange:d=>e(d.target.value),onKeyDown:d=>{d.key==="Enter"&&a()},placeholder:"닉네임 · 친구코드 · uid",style:{flex:1}}),h.jsx(V,{onClick:a,disabled:n,children:n?"조회 중":"검색"})]}),i&&h.jsx("div",{style:{marginTop:10,color:E.red,fontSize:12,fontWeight:700},children:i})]}),o&&h.jsxs(h.Fragment,{children:[h.jsx(Rx,{f:o,onChanged:u}),h.jsx(Px,{f:o,onChanged:u})]})]})}function Rx({f:t,onChanged:e}){const n=t.save??{},[r,i]=D.useState("3"),[s,o]=D.useState(""),[l,a]=D.useState(!1),u=async()=>{if(!s.trim()){alert("사유를 입력하세요. 문의 응대에 반드시 필요합니다.");return}if(confirm(`${t.uid}
${r==="0"?"영구 차단":r+"일 차단"}
사유: ${s}

진행할까요?`)){a(!0);try{await kx(t.uid,Number(r),s.trim(),n.nickname),e()}catch(c){alert(`실패: ${(c==null?void 0:c.message)??c}`)}finally{a(!1)}}},d=async()=>{const c=prompt("해제 사유를 입력하세요")||"";if(c.trim()){a(!0);try{await av(t.uid,c.trim()),e()}catch(f){alert(`실패: ${(f==null?void 0:f.message)??f}`)}finally{a(!1)}}};return h.jsxs(oe,{title:"유저 정보",right:t.block?h.jsx(Qe,{color:E.red,children:t.block.permanent?"영구 차단":`차단 ~${ft(t.block.until)}`}):h.jsx(Qe,{color:E.green,children:"정상"}),children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10},children:[h.jsx(Yt,{label:"닉네임",value:n.nickname||"-"}),h.jsx(Yt,{label:"uid",value:t.uid,mono:!0}),h.jsx(Yt,{label:"진행",value:`${n.totalCleared??0}판 · ⭐${n.totalStars??0}`}),h.jsx(Yt,{label:"보유",value:`💎${(n.crystal??0).toLocaleString()} 💰${(n.coin??0).toLocaleString()}`}),h.jsx(Yt,{label:"하트",value:String(n.hearts??0)}),h.jsx(Yt,{label:"누적 결제",value:`₩${(n.totalPaid??0).toLocaleString()}`}),h.jsx(Yt,{label:"마지막 저장",value:ft(n.at)}),h.jsx(Yt,{label:"가입",value:ft(n.installedAt)})]}),t.block&&h.jsxs("div",{style:{marginTop:12,padding:"10px 12px",borderRadius:10,background:`${E.red}18`,border:`1px solid ${E.red}55`,fontSize:11.5,lineHeight:1.7},children:[h.jsx("b",{style:{color:E.red},children:"제재 사유"})," · ",t.block.reason,h.jsx("br",{}),h.jsxs("span",{style:{color:E.textDim},children:[ft(t.block.at)," · ",t.block.by]})]}),h.jsx("div",{style:{marginTop:14,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:t.block?h.jsx(V,{onClick:d,disabled:l,color:E.green,children:"차단 해제"}):h.jsxs(h.Fragment,{children:[h.jsxs(zl,{value:r,onChange:c=>i(c.target.value),style:{width:110},children:[h.jsx("option",{value:"1",children:"1일"}),h.jsx("option",{value:"3",children:"3일"}),h.jsx("option",{value:"7",children:"7일"}),h.jsx("option",{value:"30",children:"30일"}),h.jsx("option",{value:"0",children:"영구(블랙리스트)"})]}),h.jsx(et,{value:s,onChange:c=>o(c.target.value),placeholder:"사유 (필수 · 문의 응대에 쓰입니다)",style:{flex:1,minWidth:200}}),h.jsx(V,{onClick:u,disabled:l,danger:!0,children:"접속 차단"})]})})]})}function Yt({label:t,value:e,mono:n}){return h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:10,color:E.textDim,fontWeight:800},children:t}),h.jsx("div",{style:{fontSize:n?10.5:13,fontWeight:800,color:E.text,marginTop:2,fontFamily:n?"ui-monospace, monospace":void 0,wordBreak:"break-all"},children:e})]})}function Px({f:t,onChanged:e}){const[n,r]=D.useState(""),i=async o=>{var a;const l=prompt(`수동 지급

${o.productName} (₩${(a=o.priceKrw)==null?void 0:a.toLocaleString()})
주문번호 ${o.orderId}

사유를 입력하세요 (감사 로그에 남습니다)`)||"";if(l.trim()){r(o.orderId);try{await gx(t.uid,o,l.trim()),alert(`지급 예약 완료

유저가 다음 접속할 때 지급됩니다.`),e()}catch(u){alert(`실패: ${(u==null?void 0:u.message)??u}`)}finally{r("")}}},s=async o=>{var a;const l=prompt(`환불 기록

${o.productName} (₩${(a=o.priceKrw)==null?void 0:a.toLocaleString()})

⚠️ 실제 환불은 스토어 콘솔에서 따로 해야 합니다.
여기서는 그 결과를 기록만 합니다.

사유를 입력하세요`)||"";if(l.trim()){r(o.orderId);try{await _x(t.uid,o,l.trim()),e()}catch(u){alert(`실패: ${(u==null?void 0:u.message)??u}`)}finally{r("")}}};return t.payments.length===0?h.jsx(oe,{title:"결제 내역",children:h.jsx($l,{children:"결제 기록이 없습니다"})}):h.jsxs(oe,{title:`결제 내역 (${t.payments.length}건)`,children:[h.jsx(Pe,{cols:[{key:"at",label:"일시",width:130,render:o=>ft(o.at)},{key:"productName",label:"상품"},{key:"priceKrw",label:"금액",width:90,render:o=>`₩${(o.priceKrw??0).toLocaleString()}`},{key:"status",label:"상태",width:120,render:o=>h.jsx(Qe,{color:sv[o.status]??E.textDim,children:lc[o.status]??o.status})},{key:"orderId",label:"주문번호 · 영수증",width:190,render:o=>h.jsxs("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,color:E.textDim,wordBreak:"break-all"},children:[o.orderId,o.receipt&&h.jsxs(h.Fragment,{children:[h.jsx("br",{}),String(o.receipt).slice(0,28),"…"]})]})},{key:"act",label:"조치",width:170,render:o=>h.jsxs("div",{style:{display:"flex",gap:6},children:[ov(o)&&h.jsx(V,{color:E.orange,disabled:n===o.orderId,onClick:()=>i(o),children:"수동 지급"}),lv(o)&&h.jsx(V,{ghost:!0,disabled:n===o.orderId,onClick:()=>s(o),children:"환불 기록"}),o.manual&&h.jsx(Qe,{color:E.purple,children:"수동"})]})}],rows:t.payments}),h.jsxs("div",{style:{marginTop:10,fontSize:10.5,color:E.textFaint,lineHeight:1.7},children:["⚠️ ",h.jsx("b",{style:{color:E.orange},children:"결제됨 · 미지급"})," 상태에만 수동 지급이 열립니다. 이미 지급된 건에 다시 주면 그대로 손실이라 버튼을 만들지 않았습니다.",h.jsx("br",{}),"⚠️ 환불은 ",h.jsx("b",{children:"스토어 콘솔에서 실제 처리"}),"한 뒤 여기에 기록하세요. 여기 기록만으로는 유저가 돈을 돌려받지 못합니다."]})]})}function Ax(){const[t,e]=D.useState("notice"),n=[["notice","📢 공지사항"],["banner","🎪 이벤트 배너"],["block","🚫 차단 목록"],["maint","🔧 점검 모드"],["audit","📜 감사 로그"]];return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[h.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:n.map(([r,i])=>h.jsx(V,{ghost:t!==r,onClick:()=>e(r),children:i},r))}),t==="notice"&&h.jsx(Dx,{}),t==="banner"&&h.jsx(Lx,{}),t==="block"&&h.jsx(Mx,{}),t==="maint"&&h.jsx(Fx,{}),t==="audit"&&h.jsx(jx,{})]})}const Ox=()=>({id:"",title:"",body:"",kind:"info",from:0,to:0,popup:!1,pinned:!1,at:Date.now()});function Dx(){const[t,e]=D.useState([]),[n,r]=D.useState(null),i=()=>{yx().then(e).catch(()=>{})};D.useEffect(i,[]);const s=async()=>{if(n){if(!n.title.trim()||!n.body.trim()){alert("제목과 내용을 입력하세요");return}await vx(n),r(null),i()}};return h.jsxs(h.Fragment,{children:[h.jsx(oe,{title:"공지사항",right:h.jsx(V,{onClick:()=>r(Ox()),children:"+ 새 공지"}),children:h.jsx(Pe,{cols:[{key:"kind",label:"종류",width:80,render:o=>h.jsx(Qe,{color:o.kind==="maintenance"?E.red:o.kind==="event"?E.pink:E.cyan,children:o.kind==="maintenance"?"점검":o.kind==="event"?"이벤트":"안내"})},{key:"title",label:"제목"},{key:"flag",label:"노출",width:110,render:o=>h.jsxs("span",{style:{fontSize:10.5},children:[o.pinned&&h.jsx(Qe,{color:E.gold,children:"고정"})," ",o.popup&&h.jsx(Qe,{color:E.orange,children:"팝업"})]})},{key:"at",label:"작성",width:130,render:o=>ft(o.at)},{key:"act",label:"",width:120,render:o=>h.jsxs("div",{style:{display:"flex",gap:6},children:[h.jsx(V,{ghost:!0,onClick:()=>r(o),children:"수정"}),h.jsx(V,{danger:!0,onClick:async()=>{confirm(`"${o.title}" 삭제할까요?`)&&(await wx(o.id,o.title),i())},children:"삭제"})]})}],rows:t,empty:"등록된 공지가 없습니다"})}),n&&h.jsx(oe,{title:n.id?"공지 수정":"새 공지",children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[h.jsx(et,{value:n.title,placeholder:"제목",onChange:o=>r({...n,title:o.target.value})}),h.jsx("textarea",{value:n.body,placeholder:"내용",onChange:o=>r({...n,body:o.target.value}),style:{minHeight:120,padding:"10px 12px",borderRadius:12,background:"rgba(0,0,0,0.35)",border:`1.5px solid ${E.line}`,color:E.text,fontSize:13,outline:"none",resize:"vertical",fontFamily:"inherit",lineHeight:1.7}}),h.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[h.jsxs(zl,{value:n.kind,onChange:o=>r({...n,kind:o.target.value}),children:[h.jsx("option",{value:"info",children:"안내"}),h.jsx("option",{value:"event",children:"이벤트"}),h.jsx("option",{value:"maintenance",children:"점검"})]}),h.jsxs("label",{style:ac,children:[h.jsx("input",{type:"checkbox",checked:n.pinned,onChange:o=>r({...n,pinned:o.target.checked})})," 상단 고정"]}),h.jsxs("label",{style:ac,children:[h.jsx("input",{type:"checkbox",checked:n.popup,onChange:o=>r({...n,popup:o.target.checked})})," 실행 시 팝업"]})]}),n.popup&&h.jsx("div",{style:{fontSize:10.5,color:E.orange,lineHeight:1.6},children:"⚠️ 팝업은 앱 실행을 가로막습니다. 꼭 필요한 공지에만 쓰세요. 유저는 하루 한 번만 보게 되며, 닫으면 다시 뜨지 않습니다."}),h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx(V,{onClick:s,children:"저장"}),h.jsx(V,{ghost:!0,onClick:()=>r(null),children:"취소"})]})]})})]})}const ac={display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:700,color:E.textDim,cursor:"pointer"},bx=()=>({id:"",title:"",desc:"",emoji:"🎉",action:"shop",colors:["#FF66CC","#A16BFF"],from:0,to:0,active:!0,order:0});function Lx(){const[t,e]=D.useState([]),[n,r]=D.useState(null),i=()=>{Ex().then(e).catch(()=>{})};return D.useEffect(i,[]),h.jsxs(h.Fragment,{children:[h.jsx(oe,{title:"이벤트 배너",right:h.jsx(V,{onClick:()=>r(bx()),children:"+ 새 배너"}),children:h.jsx(Pe,{cols:[{key:"emoji",label:"",width:40},{key:"title",label:"제목"},{key:"action",label:"이동",width:80},{key:"active",label:"상태",width:80,render:s=>h.jsx(Qe,{color:s.active?E.green:E.textFaint,children:s.active?"노출":"숨김"})},{key:"act",label:"",width:120,render:s=>h.jsxs("div",{style:{display:"flex",gap:6},children:[h.jsx(V,{ghost:!0,onClick:()=>r(s),children:"수정"}),h.jsx(V,{danger:!0,onClick:async()=>{confirm(`"${s.title}" 삭제할까요?`)&&(await Cx(s.id,s.title),i())},children:"삭제"})]})}],rows:t,empty:"등록된 배너가 없습니다"})}),n&&h.jsx(oe,{title:n.id?"배너 수정":"새 배너",children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx(et,{value:n.emoji,onChange:s=>r({...n,emoji:s.target.value}),style:{width:70,textAlign:"center"},placeholder:"🎉"}),h.jsx(et,{value:n.title,placeholder:"제목",style:{flex:1},onChange:s=>r({...n,title:s.target.value})})]}),h.jsx(et,{value:n.desc,placeholder:"설명 한 줄",onChange:s=>r({...n,desc:s.target.value})}),h.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[h.jsxs(zl,{value:n.action,onChange:s=>r({...n,action:s.target.value}),children:[h.jsx("option",{value:"shop",children:"상점으로"}),h.jsx("option",{value:"pass",children:"패스로"}),h.jsx("option",{value:"battle",children:"대전으로"}),h.jsx("option",{value:"none",children:"이동 없음"})]}),h.jsx(et,{type:"color",value:n.colors[0],style:{width:54,padding:3},onChange:s=>r({...n,colors:[s.target.value,n.colors[1]]})}),h.jsx(et,{type:"color",value:n.colors[1],style:{width:54,padding:3},onChange:s=>r({...n,colors:[n.colors[0],s.target.value]})}),h.jsxs("label",{style:ac,children:[h.jsx("input",{type:"checkbox",checked:n.active,onChange:s=>r({...n,active:s.target.checked})})," 노출"]})]}),h.jsx("div",{style:{padding:2,borderRadius:14,background:`linear-gradient(135deg, ${n.colors[0]}, ${n.colors[1]})`},children:h.jsxs("div",{style:{borderRadius:12,padding:"12px 14px",background:"linear-gradient(180deg, rgba(12,6,26,0.9), rgba(8,4,18,0.94))",display:"flex",alignItems:"center",gap:10},children:[h.jsx("div",{style:{fontSize:28},children:n.emoji}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:13,fontWeight:900},children:n.title||"제목"}),h.jsx("div",{style:{fontSize:10.5,color:E.textDim,marginTop:2},children:n.desc||"설명"})]})]})}),h.jsxs("div",{style:{display:"flex",gap:8},children:[h.jsx(V,{onClick:async()=>{if(!n.title.trim()){alert("제목을 입력하세요");return}await Sx(n),r(null),i()},children:"저장"}),h.jsx(V,{ghost:!0,onClick:()=>r(null),children:"취소"})]})]})})]})}function Mx(){const[t,e]=D.useState([]),n=()=>{Ix().then(e).catch(()=>{})};return D.useEffect(n,[]),h.jsx(oe,{title:`차단 목록 (${t.length}명)`,children:h.jsx(Pe,{cols:[{key:"nickname",label:"닉네임",width:130,render:r=>r.nickname||"-"},{key:"uid",label:"uid",render:r=>h.jsx("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,color:E.textDim,wordBreak:"break-all"},children:r.uid})},{key:"until",label:"기간",width:150,render:r=>h.jsx(Qe,{color:r.permanent?E.red:E.orange,children:r.permanent?"영구":`~${ft(r.until)}`})},{key:"reason",label:"사유"},{key:"act",label:"",width:90,render:r=>h.jsx(V,{ghost:!0,onClick:async()=>{const i=prompt("해제 사유")||"";i.trim()&&(await av(r.uid,i.trim()),n())},children:"해제"})}],rows:t,empty:"차단된 유저가 없습니다"})})}function Fx(){const[t,e]=D.useState({on:!1,message:"",until:0});D.useEffect(()=>{Tx().then(r=>r&&e(r)).catch(()=>{})},[]);const n=async r=>{if(r&&!t.message.trim()){alert("안내 문구를 입력하세요");return}r&&!confirm(`⚠️ 점검 모드를 켜면 모든 유저가 게임에 들어올 수 없습니다.

정말 켤까요?`)||(await xx({...t,on:r}),e({...t,on:r}))};return h.jsx(oe,{title:"점검 모드",right:h.jsx(Qe,{color:t.on?E.red:E.green,children:t.on?"점검 중":"정상 운영"}),children:h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[h.jsx(et,{value:t.message,placeholder:"유저에게 보여줄 안내 문구",onChange:r=>e({...t,message:r.target.value})}),h.jsx(et,{type:"datetime-local",value:t.until?new Date(t.until-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16):"",onChange:r=>e({...t,until:r.target.value?new Date(r.target.value).getTime():0})}),h.jsx("div",{style:{fontSize:10.5,color:E.orange,lineHeight:1.7},children:'⚠️ 예상 종료 시각을 반드시 넣으세요. "언제 끝나는지 모르는 점검" 은 그대로 이탈로 이어집니다.'}),h.jsx("div",{style:{display:"flex",gap:8},children:t.on?h.jsx(V,{color:E.green,onClick:()=>n(!1),children:"점검 해제"}):h.jsx(V,{danger:!0,onClick:()=>n(!0),children:"점검 시작"})})]})})}function jx(){const[t,e]=D.useState([]);return D.useEffect(()=>{hx(`${jl()}/audit`,100).then(n=>e(Object.values(n).sort((r,i)=>i.at-r.at))).catch(()=>{})},[]),h.jsx(oe,{title:"감사 로그 (최근 100건)",children:h.jsx(Pe,{cols:[{key:"at",label:"일시",width:130,render:n=>ft(n.at)},{key:"by",label:"운영자",width:160},{key:"action",label:"작업",width:140,render:n=>h.jsx(Qe,{color:E.purple,children:n.action})},{key:"target",label:"대상",render:n=>h.jsx("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,wordBreak:"break-all"},children:n.target})},{key:"memo",label:"메모"}],rows:t,empty:"기록이 없습니다"})})}function Ux(){const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(30),[o,l]=D.useState("all");D.useEffect(()=>{let _=!0;return r(!0),Oe(`${Ge()}/payments`).then(S=>{if(!_)return;const m=[],p=Date.now()-i*864e5;for(const[g,w]of Object.entries(S??{}))for(const[k,T]of Object.entries(w??{}))(T.at??0)<p||m.push({...T,uid:g,orderId:k});m.sort((g,w)=>(w.at??0)-(g.at??0)),e(m),r(!1)}).catch(()=>{_&&r(!1)}),()=>{_=!1}},[i]);const a=t.filter(_=>_.status==="granted"),u=a.reduce((_,S)=>_+(S.priceKrw??0),0),d=t.filter(_=>_.status==="paid"),c=new Set(a.map(_=>_.uid)).size,f={};for(const _ of a){const S=zI(_.at),m=f[S]||{n:0,sum:0};m.n++,m.sum+=_.priceKrw??0,f[S]=m}const y={};for(const _ of a){const S=_.productName||_.productId||"(이름 없음)",m=y[S]||{n:0,sum:0};m.n++,m.sum+=_.priceKrw??0,y[S]=m}const v=o==="all"?t:t.filter(_=>_.status===o);return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[h.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[[7,30,90].map(_=>h.jsxs(V,{ghost:i!==_,onClick:()=>s(_),children:[_,"일"]},_)),n&&h.jsx("span",{style:{color:E.textFaint,fontSize:11},children:"불러오는 중..."})]}),d.length>0&&h.jsxs(oe,{title:"⚠️ 미지급 건 — 즉시 확인 필요",children:[h.jsxs("div",{style:{fontSize:11.5,color:E.orange,marginBottom:10,lineHeight:1.7},children:["결제는 완료됐는데 지급이 끝나지 않은 건입니다.",h.jsx("br",{}),"유저가 문의하기 전에 [유저 관리] 에서 해당 uid 를 찾아 수동 지급하세요."]}),h.jsx(Pe,{cols:[{key:"at",label:"일시",width:130,render:_=>ft(_.at)},{key:"uid",label:"uid",render:_=>h.jsx("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,wordBreak:"break-all"},children:_.uid})},{key:"productName",label:"상품",width:160},{key:"priceKrw",label:"금액",width:90,render:_=>`₩${(_.priceKrw??0).toLocaleString()}`}],rows:d})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10},children:[h.jsx(an,{label:`매출 (${i}일)`,value:`₩${u.toLocaleString()}`,color:E.gold}),h.jsx(an,{label:"결제 건수",value:a.length,color:E.green}),h.jsx(an,{label:"결제 유저",value:c,sub:c?`1인당 ₩${Math.round(u/c).toLocaleString()}`:void 0,color:E.cyan}),h.jsx(an,{label:"미지급",value:d.length,color:d.length>0?E.orange:E.textFaint})]}),h.jsx(oe,{title:"상품별 판매",children:h.jsx(Pe,{cols:[{key:"name",label:"상품"},{key:"n",label:"판매",width:80},{key:"sum",label:"매출",width:120,render:_=>`₩${_.sum.toLocaleString()}`},{key:"share",label:"비중",width:90,render:_=>`${u?Math.round(_.sum/u*100):0}%`}],rows:Object.entries(y).map(([_,S])=>({name:_,...S})).sort((_,S)=>S.sum-_.sum),empty:"판매 기록이 없습니다"})}),h.jsx(oe,{title:"일별 매출",children:h.jsx(Pe,{cols:[{key:"day",label:"날짜",width:120},{key:"n",label:"건수",width:80},{key:"sum",label:"매출",render:_=>`₩${_.sum.toLocaleString()}`}],rows:Object.entries(f).map(([_,S])=>({day:_,...S})).sort((_,S)=>S.day.localeCompare(_.day)),empty:"매출이 없습니다"})}),h.jsxs(oe,{title:`전체 결제 (${v.length}건)`,right:h.jsx("div",{style:{display:"flex",gap:5},children:["all","paid","granted","refunded","failed"].map(_=>h.jsx(V,{ghost:o!==_,onClick:()=>l(_),children:_==="all"?"전체":lc[_]},_))}),children:[h.jsx(Pe,{cols:[{key:"at",label:"일시",width:130,render:_=>ft(_.at)},{key:"uid",label:"uid",width:150,render:_=>h.jsx("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,color:E.textDim,wordBreak:"break-all"},children:_.uid})},{key:"productName",label:"상품"},{key:"priceKrw",label:"금액",width:90,render:_=>`₩${(_.priceKrw??0).toLocaleString()}`},{key:"status",label:"상태",width:120,render:_=>h.jsx(Qe,{color:sv[_.status]??E.textDim,children:lc[_.status]??_.status})}],rows:v.slice(0,300),empty:"결제 기록이 없습니다"}),v.length>300&&h.jsx("div",{style:{marginTop:8,fontSize:10.5,color:E.textFaint},children:"최근 300건만 표시합니다. 특정 유저는 [유저 관리] 에서 조회하세요."})]})]})}function zx(){const[t,e]=D.useState("ranking");return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[h.jsxs("div",{style:{display:"flex",gap:6},children:[h.jsx(V,{ghost:t!=="ranking",onClick:()=>e("ranking"),children:"🏆 랭킹"}),h.jsx(V,{ghost:t!=="stage",onClick:()=>e("stage"),children:"🎯 스테이지 밸런스"})]}),t==="ranking"&&h.jsx($x,{}),t==="stage"&&h.jsx(Wx,{})]})}const Np=[{k:"bottles",label:"병"},{k:"maxstage",label:"스테이지"},{k:"coin",label:"코인"},{k:"battle",label:"대전"}];function $x(){const[t,e]=D.useState("bottles"),[n,r]=D.useState([]),[i,s]=D.useState(!1),o=()=>{s(!0),Oe(`${Ge()}/rankings/${t}`).then(l=>{r(Object.entries(l??{}).map(([a,u])=>({uid:a,v:Number(u)||0})).sort((a,u)=>u.v-a.v).slice(0,100))}).finally(()=>s(!1))};return D.useEffect(o,[t]),h.jsxs(oe,{title:"랭킹 (상위 100)",right:h.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[h.jsx(zl,{value:t,onChange:l=>e(l.target.value),children:Np.map(l=>h.jsx("option",{value:l.k,children:l.label},l.k))}),h.jsx(V,{ghost:!0,onClick:o,disabled:i,children:"새로고침"})]}),children:[h.jsx("div",{style:{marginBottom:10},children:h.jsx(V,{danger:!0,onClick:async()=>{var a;const l=prompt(`⚠️ "${(a=Np.find(u=>u.k===t))==null?void 0:a.label}" 랭킹을 통째로 지웁니다.
되돌릴 수 없습니다.

사유를 입력하세요`)||"";l.trim()&&confirm("정말 초기화할까요?")&&(await Zl(`${Ge()}/rankings/${t}`,"config.update",`ranking/${t}`,l.trim()),o())},children:"이 랭킹 초기화"})}),h.jsx(Pe,{cols:[{key:"rank",label:"#",width:50,render:l=>""},{key:"uid",label:"uid",render:l=>h.jsx("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:10,wordBreak:"break-all"},children:l.uid})},{key:"v",label:"값",width:120,render:l=>l.v.toLocaleString()}],rows:n.map((l,a)=>({...l,rank:a+1})),empty:"랭킹 데이터가 없습니다"})]})}function Wx(){const[t,e]=D.useState({}),[n,r]=D.useState(!0);D.useEffect(()=>{const s=u=>String(u).padStart(2,"0"),o=u=>`${u.getFullYear()}-${s(u.getMonth()+1)}-${s(u.getDate())}`,l=o(new Date),a=o(new Date(Date.now()-30*864e5));iv(`${Ge()}/stats`,a,l).then(u=>{const d={},c=(f,y)=>{if(!(!f||typeof f!="object")){if(y>=2){for(const[v,_]of Object.entries(f.stage??{})){const S=d[v]||{a:0,c:0,ad:0,gem:0};S.a+=Number(_.a||0),S.c+=Number(_.c||0),S.ad+=Number(_.r_ad||0),S.gem+=Number(_.r_gem||0),d[v]=S}return}for(const v of Object.values(f))c(v,y+1)}};for(const f of Object.values(u))c(f,0);e(d),r(!1)}).catch(()=>r(!1))},[]);const i=Object.entries(t).map(([s,o])=>({n:Number(s),...o,rate:o.a?o.c/o.a:0,tries:o.c?o.a/o.c:0,revive:o.ad+o.gem})).filter(s=>s.a>=5).sort((s,o)=>s.n-o.n);return n?h.jsx(oe,{title:"스테이지 밸런스",children:h.jsx($l,{children:"불러오는 중..."})}):h.jsxs(h.Fragment,{children:[h.jsxs(oe,{title:"스테이지 밸런스 (최근 30일)",children:[h.jsxs("div",{style:{fontSize:11,color:E.textDim,lineHeight:1.8,marginBottom:10},children:["클리어율이 낮으면서 부활이 많은 판이 ",h.jsx("b",{style:{color:E.gold},children:"매출이 나는 지점"}),"입니다.",h.jsx("br",{}),"시도가 급감하는 판은 ",h.jsx("b",{style:{color:E.red},children:"이탈 지점"}),"이니 난이도를 낮추세요."]}),h.jsx(Pe,{cols:[{key:"n",label:"판",width:70,render:s=>`${s.n}`},{key:"a",label:"시도",width:80},{key:"c",label:"클리어",width:80},{key:"rate",label:"클리어율",width:90,render:s=>h.jsxs("span",{style:{fontWeight:900,color:s.rate<.2?E.red:s.rate<.35?E.orange:E.green},children:[Math.round(s.rate*100),"%"]})},{key:"tries",label:"평균 시도",width:90,render:s=>s.tries?s.tries.toFixed(1):"-"},{key:"revive",label:"부활",width:110,render:s=>s.revive?h.jsxs(Qe,{color:E.gold,children:["📺",s.ad," 💎",s.gem]}):"-"}],rows:i,empty:"스테이지 데이터가 아직 없습니다"})]}),h.jsx(oe,{title:"조정이 필요한 판",children:h.jsx(Pe,{cols:[{key:"n",label:"판",width:70},{key:"rate",label:"클리어율",width:90,render:s=>`${Math.round(s.rate*100)}%`},{key:"why",label:"판단"}],rows:i.filter(s=>s.rate<.15||s.rate>.85).map(s=>({...s,why:s.rate<.15?"너무 어렵습니다 — 이탈 위험":"너무 쉽습니다 — 부활·부스터를 쓸 일이 없어 매출이 안 납니다"})),empty:"극단적인 판이 없습니다"})})]})}const cv=[["dash","📊","대시보드"],["users","👤","유저 관리"],["pay","💳","결제 관리"],["game","🎮","게임 관리"],["ops","📢","운영"]];function Bx(){const[t,e]=D.useState(null),[n,r]=D.useState(!1),[i,s]=D.useState("dash");return D.useEffect(()=>{let o;return OI().then(()=>{o=MI(l=>{e(l),r(!0)})}).catch(()=>r(!0)),()=>o==null?void 0:o()},[]),AI?h.jsx(Qx,{}):n?t?h.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[h.jsx(Gx,{tab:i,setTab:s,email:t.email??""}),h.jsxs("main",{style:{flex:1,minWidth:0,padding:"18px 20px 40px"},children:[h.jsx(Kx,{tab:i}),i==="dash"&&h.jsx(px,{}),i==="users"&&h.jsx(Nx,{}),i==="pay"&&h.jsx(Ux,{}),i==="game"&&h.jsx(zx,{}),i==="ops"&&h.jsx(Ax,{})]})]}):h.jsx(Vx,{}):h.jsx(Hx,{children:"불러오는 중..."})}function Hx({children:t}){return h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:E.textDim,fontSize:13},children:t})}function Vx(){const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,l]=D.useState(!1),a=async()=>{if(!o){l(!0),s("");try{await DI(t.trim(),n)}catch{s("이메일 또는 비밀번호가 올바르지 않습니다")}finally{l(!1)}}};return h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:h.jsxs("div",{style:{...Ul,width:360,maxWidth:"100%",padding:24},children:[h.jsx("div",{style:{fontSize:30,textAlign:"center"},children:"🍾"}),h.jsx("div",{style:{fontSize:17,fontWeight:900,textAlign:"center",marginTop:6},children:"병팔이 운영툴"}),h.jsx("div",{style:{fontSize:11,color:E.textDim,textAlign:"center",marginTop:4,marginBottom:18},children:"운영자 계정으로 로그인하세요"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[h.jsx(et,{value:t,onChange:u=>e(u.target.value),placeholder:"이메일",type:"email",autoComplete:"username"}),h.jsx(et,{value:n,onChange:u=>r(u.target.value),onKeyDown:u=>{u.key==="Enter"&&a()},placeholder:"비밀번호",type:"password",autoComplete:"current-password"}),i&&h.jsx("div",{style:{color:E.red,fontSize:11.5,fontWeight:700},children:i}),h.jsx(V,{onClick:a,disabled:o,children:o?"확인 중...":"로그인"})]}),h.jsxs("div",{style:{marginTop:14,fontSize:10,color:E.textFaint,lineHeight:1.7,textAlign:"center"},children:["로그인은 24시간 유지됩니다.",h.jsx("br",{}),"권한은 서버 규칙이 판정하므로, 계정이 있어도 관리자가 아니면 수정할 수 없습니다."]})]})})}function Gx({tab:t,setTab:e,email:n}){const r=Fl();return h.jsxs("aside",{style:{width:190,flexShrink:0,background:E.panel,borderRight:`1px solid ${E.line}`,padding:"16px 12px",display:"flex",flexDirection:"column",gap:4},children:[h.jsxs("div",{style:{fontSize:15,fontWeight:900,padding:"0 6px 12px"},children:["🍾 병팔이 ",h.jsx("span",{style:{color:E.textDim,fontWeight:700},children:"운영툴"})]}),h.jsxs("button",{onClick:()=>FI(r==="release"?"dev":"release"),style:{margin:"0 0 12px",padding:"8px 10px",borderRadius:10,background:`${Fa[r]}22`,border:`1.5px solid ${Fa[r]}`,color:Fa[r],fontSize:11.5,fontWeight:900,cursor:"pointer",textAlign:"left"},children:[jI[r]," 환경",h.jsx("span",{style:{display:"block",fontSize:9.5,opacity:.8,fontWeight:700},children:"눌러서 전환"})]}),cv.map(([i,s,o])=>h.jsxs("button",{onClick:()=>e(i),style:{display:"flex",alignItems:"center",gap:8,padding:"10px 10px",borderRadius:10,border:"none",background:t===i?"rgba(255,216,106,0.14)":"transparent",color:t===i?E.gold:E.textDim,fontSize:12.5,fontWeight:800,cursor:"pointer",textAlign:"left"},children:[h.jsx("span",{children:s}),o]},i)),h.jsx("div",{style:{flex:1}}),h.jsxs("div",{style:{fontSize:10,color:E.textFaint,padding:"0 6px",lineHeight:1.6,wordBreak:"break-all"},children:[n,h.jsx("br",{}),h.jsxs("span",{children:["자동 로그인 ",Math.floor(LI()/36e5),"시간 남음"]})]}),h.jsx(V,{ghost:!0,onClick:()=>void U_(),children:"로그아웃"})]})}function Kx({tab:t}){var r;const e=((r=cv.find(([i])=>i===t))==null?void 0:r[2])??"",n=Fl();return h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:10},children:[h.jsx("h1",{style:{fontSize:19,fontWeight:900,margin:0},children:e}),n==="release"&&h.jsx("span",{style:{padding:"5px 10px",borderRadius:8,background:`${E.red}22`,border:`1px solid ${E.red}66`,color:E.red,fontSize:10.5,fontWeight:900},children:"⚠️ 실서비스 데이터입니다"})]})}function Qx(){return h.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:h.jsxs("div",{style:{...Ul,maxWidth:460,padding:24},children:[h.jsx("div",{style:{fontSize:30,textAlign:"center"},children:"⚙️"}),h.jsx("div",{style:{fontSize:16,fontWeight:900,textAlign:"center",marginTop:8},children:"Firebase 설정이 필요합니다"}),h.jsx("div",{style:{marginTop:16,padding:"12px 14px",borderRadius:12,background:"rgba(0,0,0,0.35)",border:`1px solid ${E.line}`,fontSize:11.5,lineHeight:1.9,color:E.textDim,fontFamily:"ui-monospace, monospace",whiteSpace:"pre-line"},children:`cd admin
cp .env.example .env
# .env 를 열어 값을 채우고
npm run dev`}),h.jsxs("div",{style:{marginTop:14,fontSize:11,color:E.textDim,lineHeight:1.9},children:["값은 ",h.jsx("b",{style:{color:E.gold},children:"Firebase 콘솔 → 프로젝트 설정 → 일반 → 내 앱 → 웹 앱 → SDK 설정"})," 에서 복사합니다.",h.jsx("br",{}),h.jsx("br",{}),"GitHub Pages 로 배포할 때는 저장소의",h.jsx("b",{style:{color:E.gold},children:" Settings → Secrets and variables → Actions"})," 에 같은 이름으로 넣으세요."]})]})})}$g(document.getElementById("root")).render(h.jsx(Bx,{}));
