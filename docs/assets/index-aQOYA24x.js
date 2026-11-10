(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))L(M);new MutationObserver(M=>{for(const b of M)if(b.type==="childList")for(const x of b.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&L(x)}).observe(document,{childList:!0,subtree:!0});function E(M){const b={};return M.integrity&&(b.integrity=M.integrity),M.referrerPolicy&&(b.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?b.credentials="include":M.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function L(M){if(M.ep)return;M.ep=!0;const b=E(M);fetch(M.href,b)}})();var Pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g0(Q){return Q&&Q.__esModule&&Object.prototype.hasOwnProperty.call(Q,"default")?Q.default:Q}var o0={exports:{}},Fd={},i0={exports:{}},_u={exports:{}};_u.exports;var R_;function AE(){return R_||(R_=1,(function(Q,F){/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function E(g,P){Object.defineProperty(b.prototype,g,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",P[0],P[1])}})}function L(g){return g===null||typeof g!="object"?null:(g=ie&&g[ie]||g["@@iterator"],typeof g=="function"?g:null)}function M(g,P){g=(g=g.constructor)&&(g.displayName||g.name)||"ReactClass";var xe=g+"."+P;le[xe]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",P,g),le[xe]=!0)}function b(g,P,xe){this.props=g,this.context=P,this.refs=X,this.updater=xe||O}function x(){}function f(g,P,xe){this.props=g,this.context=P,this.refs=X,this.updater=xe||O}function y(){}function R(g){return""+g}function I(g){try{R(g);var P=!1}catch{P=!0}if(P){P=console;var xe=P.error,Se=typeof Symbol=="function"&&Symbol.toStringTag&&g[Symbol.toStringTag]||g.constructor.name||"Object";return xe.call(P,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Se),R(g)}}function A(g){if(g==null)return null;if(typeof g=="function")return g.$$typeof===B?null:g.displayName||g.name||null;if(typeof g=="string")return g;switch(g){case pe:return"Fragment";case ge:return"Profiler";case ue:return"StrictMode";case qe:return"Suspense";case yn:return"SuspenseList";case dt:return"Activity";case u:return"ViewTransition"}if(typeof g=="object")switch(typeof g.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),g.$$typeof){case C:return"Portal";case cn:return g.displayName||"Context";case tn:return(g._context.displayName||"Context")+".Consumer";case Ce:var P=g.render;return g=g.displayName,g||(g=P.displayName||P.name||"",g=g!==""?"ForwardRef("+g+")":"ForwardRef"),g;case hn:return P=g.displayName||null,P!==null?P:A(g.type)||"Memo";case Pn:P=g._payload,g=g._init;try{return A(g(P))}catch{}}return null}function S(g){if(g===pe)return"<>";if(typeof g=="object"&&g!==null&&g.$$typeof===Pn)return"<...>";try{var P=A(g);return P?"<"+P+">":"<...>"}catch{return"<...>"}}function d(){var g=se.A;return g===null?null:g.getOwner()}function p(){return Error("react-stack-top-frame")}function m(g){if(Ee.call(g,"key")){var P=Object.getOwnPropertyDescriptor(g,"key").get;if(P&&P.isReactWarning)return!1}return g.key!==void 0}function N(g,P){function xe(){ze||(ze=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",P))}xe.isReactWarning=!0,Object.defineProperty(g,"key",{get:xe,configurable:!0})}function _(){var g=A(this.type);return Pe[g]||(Pe[g]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),g=this.props.ref,g!==void 0?g:null}function w(g,P,xe,Se,Te,un){var Oe=xe.ref;return g={$$typeof:q,type:g,key:P,props:xe,_owner:Se},(Oe!==void 0?Oe:null)!==null?Object.defineProperty(g,"ref",{enumerable:!1,get:_}):Object.defineProperty(g,"ref",{enumerable:!1,value:null}),g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(g,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(g,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Te}),Object.defineProperty(g,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:un}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g}function G(g,P){return P=w(g.type,P,g.props,g._owner,g._debugStack,g._debugTask),g._store&&(P._store.validated=g._store.validated),P}function $(g){Z(g)?g._store&&(g._store.validated=1):typeof g=="object"&&g!==null&&g.$$typeof===Pn&&(g._payload.status==="fulfilled"?Z(g._payload.value)&&g._payload.value._store&&(g._payload.value._store.validated=1):g._store&&(g._store.validated=1))}function Z(g){return typeof g=="object"&&g!==null&&g.$$typeof===q}function re(g){var P={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(xe){return P[xe]})}function te(g,P){return typeof g=="object"&&g!==null&&g.key!=null?(I(g.key),re(""+g.key)):P.toString(36)}function he(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(y,y):(g.status="pending",g.then(function(P){g.status==="pending"&&(g.status="fulfilled",g.value=P)},function(P){g.status==="pending"&&(g.status="rejected",g.reason=P)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function W(g,P,xe,Se,Te){var un=typeof g;(un==="undefined"||un==="boolean")&&(g=null);var Oe=!1;if(g===null)Oe=!0;else switch(un){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(g.$$typeof){case q:case C:Oe=!0;break;case Pn:return Oe=g._init,W(Oe(g._payload),P,xe,Se,Te)}}if(Oe){Oe=g,Te=Te(Oe);var Ge=Se===""?"."+te(Oe,0):Se;return be(Te)?(xe="",Ge!=null&&(xe=Ge.replace(Ua,"$&/")+"/"),W(Te,P,xe,"",function(_a){return _a})):Te!=null&&(Z(Te)&&(Te.key!=null&&(Oe&&Oe.key===Te.key||I(Te.key)),xe=G(Te,xe+(Te.key==null||Oe&&Oe.key===Te.key?"":(""+Te.key).replace(Ua,"$&/")+"/")+Ge),Se!==""&&Oe!=null&&Z(Oe)&&Oe.key==null&&Oe._store&&!Oe._store.validated&&(xe._store.validated=2),Te=xe),P.push(Te)),1}if(Oe=0,Ge=Se===""?".":Se+":",be(g))for(var sn=0;sn<g.length;sn++)Se=g[sn],un=Ge+te(Se,sn),Oe+=W(Se,P,xe,un,Te);else if(sn=L(g),typeof sn=="function")for(sn===g.entries&&(an||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),an=!0),g=sn.call(g),sn=0;!(Se=g.next()).done;)Se=Se.value,un=Ge+te(Se,sn++),Oe+=W(Se,P,xe,un,Te);else if(un==="object"){if(typeof g.then=="function")return W(he(g),P,xe,Se,Te);throw P=String(g),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function ve(g,P,xe){if(g==null)return g;var Se=[],Te=0;return W(g,Se,"","",function(un){return P.call(xe,un,Te++)}),Se}function Ae(g){if(g._status===-1){var P=null,xe=null,Se=g._ioInfo;Se!=null&&(Se.start=Se.end=performance.now(),Se.value=new Promise(function(Oe,Ge){P=Oe,xe=Ge})),Se=g._result;var Te=Se();if(Te.then(function(Oe){if(g._status===0||g._status===-1){g._status=1,g._result=Oe;var Ge=g._ioInfo;if(Ge!=null){Ge.end=performance.now();var sn=Oe==null?void 0:Oe.default;P(sn),Ge.value.status="fulfilled",Ge.value.value=sn}Te.status===void 0&&(Te.status="fulfilled",Te.value=Oe)}},function(Oe){if(g._status===0||g._status===-1){g._status=2,g._result=Oe;var Ge=g._ioInfo;Ge!=null&&(Ge.end=performance.now(),Ge.value.then(y,y),xe(Oe),Ge.value.status="rejected",Ge.value.reason=Oe),Te.status===void 0&&(Te.status="rejected",Te.reason=Oe)}}),Se=g._ioInfo,Se!=null){var un=Te.displayName;typeof un=="string"&&(Se.name=un)}g._status===-1&&(g._status=0,g._result=Te)}if(g._status===1)return Se=g._result,Se===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Se),"default"in Se||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Se),Se.default;throw g._result}function k(){var g=se.H;return g===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),g}function J(){se.asyncTransitions--}function h(g){var P=se.T,xe={};xe.types=P!==null?P.types:null,xe._updatedFibers=new Set,se.T=xe;try{var Se=g(),Te=se.S;Te!==null&&Te(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&(se.asyncTransitions++,Se.then(J,J),Se.then(y,dn))}catch(un){dn(un)}finally{P===null&&xe._updatedFibers&&(g=xe._updatedFibers.size,xe._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),P!==null&&xe.types!==null&&(P.types!==null&&P.types!==xe.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),P.types=xe.types),se.T=P}}function fe(g){var P=se.T;if(P!==null){var xe=P.types;xe===null?P.types=[g]:xe.indexOf(g)===-1&&xe.push(g)}else se.asyncTransitions===0&&console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."),h(fe.bind(null,g))}function de(g){if(At===null)try{var P=("require"+Math.random()).slice(0,7);At=(Q&&Q[P]).call(Q,"timers").setImmediate}catch{At=function(Se){la===!1&&(la=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Te=new MessageChannel;Te.port1.onmessage=Se,Te.port2.postMessage(void 0)}}return At(g)}function ne(g){return 1<g.length&&typeof AggregateError=="function"?new AggregateError(g):g[0]}function Ne(g,P){P!==lt-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),lt=P}function oe(g,P,xe){var Se=se.actQueue;if(Se!==null)if(Se.length!==0)try{De(Se),de(function(){return oe(g,P,xe)});return}catch(Te){se.thrownErrors.push(Te)}else se.actQueue=null;0<se.thrownErrors.length?(Se=ne(se.thrownErrors),se.thrownErrors.length=0,xe(Se)):P(g)}function De(g){if(!gl){gl=!0;var P=0;try{for(;P<g.length;P++){var xe=g[P];do{se.didUsePromise=!1;var Se=xe(!1);if(Se!==null){if(se.didUsePromise){g[P]=xe,g.splice(0,P);return}xe=Se}else break}while(!0)}g.length=0}catch(Te){g.splice(0,P+1),se.thrownErrors.push(Te)}finally{gl=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var q=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),tn=Symbol.for("react.consumer"),cn=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),yn=Symbol.for("react.suspense_list"),hn=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),dt=Symbol.for("react.activity"),u=Symbol.for("react.view_transition"),ie=Symbol.iterator,le={},O={isMounted:function(){return!1},enqueueForceUpdate:function(g){M(g,"forceUpdate")},enqueueReplaceState:function(g){M(g,"replaceState")},enqueueSetState:function(g){M(g,"setState")}},T=Object.assign,X={};Object.freeze(X),b.prototype.isReactComponent={},b.prototype.setState=function(g,P){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,P,"setState")},b.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};var ce={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Gt in ce)ce.hasOwnProperty(Gt)&&E(Gt,ce[Gt]);x.prototype=b.prototype,ce=f.prototype=new x,ce.constructor=f,T(ce,b.prototype),ce.isPureReactComponent=!0;var be=Array.isArray,B=Symbol.for("react.client.reference"),se={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Ee=Object.prototype.hasOwnProperty,we=console.createTask?console.createTask:function(){return null};ce={react_stack_bottom_frame:function(g){return g()}};var ze,ke,Pe={},Fn=ce.react_stack_bottom_frame.bind(ce,p)(),ml=we(S(p)),an=!1,Ua=/\/+/g,dn=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},la=!1,At=null,lt=0,hl=!1,gl=!1,Xl=typeof queueMicrotask=="function"?function(g){queueMicrotask(function(){return queueMicrotask(g)})}:de;ce=Object.freeze({__proto__:null,c:function(g){return k().useMemoCache(g)}});var Gt={map:ve,forEach:function(g,P,xe){ve(g,function(){P.apply(this,arguments)},xe)},count:function(g){var P=0;return ve(g,function(){P++}),P},toArray:function(g){return ve(g,function(P){return P})||[]},only:function(g){if(!Z(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};F.Activity=dt,F.Children=Gt,F.Component=b,F.Fragment=pe,F.Profiler=ge,F.PureComponent=f,F.StrictMode=ue,F.Suspense=qe,F.ViewTransition=u,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,F.__COMPILER_RUNTIME=ce,F.act=function(g){var P=se.actQueue,xe=lt;lt++;var Se=se.actQueue=P!==null?P:[],Te=!1;try{var un=g()}catch(sn){se.thrownErrors.push(sn)}if(0<se.thrownErrors.length)throw Ne(P,xe),g=ne(se.thrownErrors),se.thrownErrors.length=0,g;if(un!==null&&typeof un=="object"&&typeof un.then=="function"){var Oe=un;return Xl(function(){Te||hl||(hl=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(sn,_a){Te=!0,Oe.then(function(Na){if(Ne(P,xe),xe===0){try{De(Se),de(function(){return oe(Na,sn,_a)})}catch(oa){se.thrownErrors.push(oa)}if(0<se.thrownErrors.length){var bl=ne(se.thrownErrors);se.thrownErrors.length=0,_a(bl)}}else sn(Na)},function(Na){Ne(P,xe),0<se.thrownErrors.length&&(Na=ne(se.thrownErrors),se.thrownErrors.length=0),_a(Na)})}}}var Ge=un;if(Ne(P,xe),xe===0&&(De(Se),Se.length!==0&&Xl(function(){Te||hl||(hl=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),se.actQueue=null),0<se.thrownErrors.length)throw g=ne(se.thrownErrors),se.thrownErrors.length=0,g;return{then:function(sn,_a){Te=!0,xe===0?(se.actQueue=Se,de(function(){return oe(Ge,sn,_a)})):sn(Ge)}}},F.addTransitionType=fe,F.cache=function(g){return function(){return g.apply(null,arguments)}},F.cacheSignal=function(){return null},F.captureOwnerStack=function(){var g=se.getCurrentStack;return g===null?null:g()},F.cloneElement=function(g,P,xe){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Se=T({},g.props),Te=g.key,un=g._owner;if(P!=null){var Oe;e:{if(Ee.call(P,"ref")&&(Oe=Object.getOwnPropertyDescriptor(P,"ref").get)&&Oe.isReactWarning){Oe=!1;break e}Oe=P.ref!==void 0}Oe&&(un=d()),m(P)&&(I(P.key),Te=""+P.key);for(Ge in P)!Ee.call(P,Ge)||Ge==="key"||Ge==="__self"||Ge==="__source"||Ge==="ref"&&P.ref===void 0||(Se[Ge]=P[Ge])}var Ge=arguments.length-2;if(Ge===1)Se.children=xe;else if(1<Ge){Oe=Array(Ge);for(var sn=0;sn<Ge;sn++)Oe[sn]=arguments[sn+2];Se.children=Oe}for(Se=w(g.type,Te,Se,un,g._debugStack,g._debugTask),Te=2;Te<arguments.length;Te++)$(arguments[Te]);return Se},F.createContext=function(g){return g={$$typeof:cn,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:tn,_context:g},g._currentRenderer=null,g._currentRenderer2=null,g},F.createElement=function(g,P,xe){for(var Se=2;Se<arguments.length;Se++)$(arguments[Se]);var Te;Se={};var un=null;if(P!=null)for(Te in ke||!("__self"in P)||"key"in P||(ke=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),m(P)&&(I(P.key),un=""+P.key),P)Ee.call(P,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Se[Te]=P[Te]);var Oe=arguments.length-2;if(Oe===1)Se.children=xe;else if(1<Oe){for(var Ge=Array(Oe),sn=0;sn<Oe;sn++)Ge[sn]=arguments[sn+2];Object.freeze&&Object.freeze(Ge),Se.children=Ge}if(g&&g.defaultProps)for(Te in Oe=g.defaultProps,Oe)Se[Te]===void 0&&(Se[Te]=Oe[Te]);return un&&N(Se,typeof g=="function"?g.displayName||g.name||"Unknown":g),(Te=1e4>se.recentlyCreatedOwnerStacks++)?(Ge=Error.stackTraceLimit,Error.stackTraceLimit=10,Oe=Error("react-stack-top-frame"),Error.stackTraceLimit=Ge):Oe=Fn,w(g,un,Se,d(),Oe,Te?we(S(g)):ml)},F.createRef=function(){var g={current:null};return Object.seal(g),g},F.forwardRef=function(g){g!=null&&g.$$typeof===hn?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof g!="function"?console.error("forwardRef requires a render function but was given %s.",g===null?"null":typeof g):g.length!==0&&g.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",g.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),g!=null&&g.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var P={$$typeof:Ce,render:g},xe;return Object.defineProperty(P,"displayName",{enumerable:!1,configurable:!0,get:function(){return xe},set:function(Se){xe=Se,g.name||g.displayName||(Object.defineProperty(g,"name",{value:Se}),g.displayName=Se)}}),P},F.isValidElement=Z,F.lazy=function(g){g={_status:-1,_result:g};var P={$$typeof:Pn,_payload:g,_init:Ae},xe={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return g._ioInfo=xe,P._debugInfo=[{awaited:xe}],P},F.memo=function(g,P){g==null&&console.error("memo: The first argument must be a component. Instead received: %s",g===null?"null":typeof g),P={$$typeof:hn,type:g,compare:P===void 0?null:P};var xe;return Object.defineProperty(P,"displayName",{enumerable:!1,configurable:!0,get:function(){return xe},set:function(Se){xe=Se,g.name||g.displayName||(Object.defineProperty(g,"name",{value:Se}),g.displayName=Se)}}),P},F.startTransition=h,F.unstable_useCacheRefresh=function(){return k().useCacheRefresh()},F.use=function(g){return k().use(g)},F.useActionState=function(g,P,xe){return k().useActionState(g,P,xe)},F.useCallback=function(g,P){return k().useCallback(g,P)},F.useContext=function(g){var P=k();return g.$$typeof===tn&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),P.useContext(g)},F.useDebugValue=function(g,P){return k().useDebugValue(g,P)},F.useDeferredValue=function(g,P){return k().useDeferredValue(g,P)},F.useEffect=function(g,P){return g==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useEffect(g,P)},F.useEffectEvent=function(g){return k().useEffectEvent(g)},F.useId=function(){return k().useId()},F.useImperativeHandle=function(g,P,xe){return k().useImperativeHandle(g,P,xe)},F.useInsertionEffect=function(g,P){return g==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useInsertionEffect(g,P)},F.useLayoutEffect=function(g,P){return g==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useLayoutEffect(g,P)},F.useMemo=function(g,P){return k().useMemo(g,P)},F.useOptimistic=function(g,P){return k().useOptimistic(g,P)},F.useReducer=function(g,P,xe){return k().useReducer(g,P,xe)},F.useRef=function(g){return k().useRef(g)},F.useState=function(g){return k().useState(g)},F.useSyncExternalStore=function(g,P,xe){return k().useSyncExternalStore(g,P,xe)},F.useTransition=function(){return k().useTransition()},F.version="19.3.1",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})(_u,_u.exports)),_u.exports}var j_;function Wd(){return j_||(j_=1,i0.exports=AE()),i0.exports}var z_;function OE(){if(z_)return Fd;z_=1;/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){function Q(C){if(C==null)return null;if(typeof C=="function")return C.$$typeof===k?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case N:return"Fragment";case w:return"Profiler";case _:return"StrictMode";case re:return"Suspense";case te:return"SuspenseList";case ve:return"Activity";case Ae:return"ViewTransition"}if(typeof C=="object")switch(typeof C.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),C.$$typeof){case m:return"Portal";case $:return C.displayName||"Context";case G:return(C._context.displayName||"Context")+".Consumer";case Z:var pe=C.render;return C=C.displayName,C||(C=pe.displayName||pe.name||"",C=C!==""?"ForwardRef("+C+")":"ForwardRef"),C;case he:return pe=C.displayName||null,pe!==null?pe:Q(C.type)||"Memo";case W:pe=C._payload,C=C._init;try{return Q(C(pe))}catch{}}return null}function F(C){return""+C}function E(C){try{F(C);var pe=!1}catch{pe=!0}if(pe){pe=console;var ue=pe.error,ge=typeof Symbol=="function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object";return ue.call(pe,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ge),F(C)}}function L(C){if(C===N)return"<>";if(typeof C=="object"&&C!==null&&C.$$typeof===W)return"<...>";try{var pe=Q(C);return pe?"<"+pe+">":"<...>"}catch{return"<...>"}}function M(){var C=J.A;return C===null?null:C.getOwner()}function b(){return Error("react-stack-top-frame")}function x(C){if(h.call(C,"key")){var pe=Object.getOwnPropertyDescriptor(C,"key").get;if(pe&&pe.isReactWarning)return!1}return C.key!==void 0}function f(C,pe){function ue(){ne||(ne=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",pe))}ue.isReactWarning=!0,Object.defineProperty(C,"key",{get:ue,configurable:!0})}function y(){var C=Q(this.type);return Ne[C]||(Ne[C]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),C=this.props.ref,C!==void 0?C:null}function R(C,pe,ue,ge,tn,cn){var Ce=ue.ref;return C={$$typeof:p,type:C,key:pe,props:ue,_owner:ge},(Ce!==void 0?Ce:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:y}):Object.defineProperty(C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:tn}),Object.defineProperty(C,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:cn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function I(C,pe,ue,ge,tn,cn){var Ce=pe.children;if(Ce!==void 0)if(ge)if(fe(Ce)){for(ge=0;ge<Ce.length;ge++)A(Ce[ge]);Object.freeze&&Object.freeze(Ce)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else A(Ce);if(h.call(pe,"key")){Ce=Q(C);var qe=Object.keys(pe).filter(function(hn){return hn!=="key"});ge=0<qe.length?"{key: someKey, "+qe.join(": ..., ")+": ...}":"{key: someKey}",q[Ce+ge]||(qe=0<qe.length?"{"+qe.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ge,Ce,qe,Ce),q[Ce+ge]=!0)}if(Ce=null,ue!==void 0&&(E(ue),Ce=""+ue),x(pe)&&(E(pe.key),Ce=""+pe.key),"key"in pe){ue={};for(var yn in pe)yn!=="key"&&(ue[yn]=pe[yn])}else ue=pe;return Ce&&f(ue,typeof C=="function"?C.displayName||C.name||"Unknown":C),R(C,Ce,ue,M(),tn,cn)}function A(C){S(C)?C._store&&(C._store.validated=1):typeof C=="object"&&C!==null&&C.$$typeof===W&&(C._payload.status==="fulfilled"?S(C._payload.value)&&C._payload.value._store&&(C._payload.value._store.validated=1):C._store&&(C._store.validated=1))}function S(C){return typeof C=="object"&&C!==null&&C.$$typeof===p}var d=Wd(),p=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),$=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Ae=Symbol.for("react.view_transition"),k=Symbol.for("react.client.reference"),J=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,h=Object.prototype.hasOwnProperty,fe=Array.isArray,de=console.createTask?console.createTask:function(){return null};d={react_stack_bottom_frame:function(C){return C()}};var ne,Ne={},oe=d.react_stack_bottom_frame.bind(d,b)(),De=de(L(b)),q={};Fd.Fragment=N,Fd.jsxDEV=function(C,pe,ue,ge){var tn=1e4>J.recentlyCreatedOwnerStacks++;if(tn){var cn=Error.stackTraceLimit;Error.stackTraceLimit=10;var Ce=Error("react-stack-top-frame");Error.stackTraceLimit=cn}else Ce=oe;return I(C,pe,ue,ge,Ce,tn?de(L(C)):De)}})(),Fd}var k_;function RE(){return k_||(k_=1,o0.exports=OE()),o0.exports}var v=RE(),on=Wd();const jE=g0(on);var s0={exports:{}},yu={},r0={exports:{}},u0={},I_;function zE(){return I_||(I_=1,(function(Q){/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function F(){if(Z=!1,W){var de=Q.unstable_now();k=de;var ne=!0;try{e:{G=!1,$&&($=!1,te(ve),ve=-1),w=!0;var Ne=_;try{n:{for(x(de),N=L(d);N!==null&&!(N.expirationTime>de&&y());){var oe=N.callback;if(typeof oe=="function"){N.callback=null,_=N.priorityLevel;var De=oe(N.expirationTime<=de);if(de=Q.unstable_now(),typeof De=="function"){N.callback=De,x(de),ne=!0;break n}N===L(d)&&M(d),x(de)}else M(d);N=L(d)}if(N!==null)ne=!0;else{var q=L(p);q!==null&&R(f,q.startTime-de),ne=!1}}break e}finally{N=null,_=Ne,w=!1}ne=void 0}}finally{ne?J():W=!1}}}function E(de,ne){var Ne=de.length;de.push(ne);e:for(;0<Ne;){var oe=Ne-1>>>1,De=de[oe];if(0<b(De,ne))de[oe]=ne,de[Ne]=De,Ne=oe;else break e}}function L(de){return de.length===0?null:de[0]}function M(de){if(de.length===0)return null;var ne=de[0],Ne=de.pop();if(Ne!==ne){de[0]=Ne;e:for(var oe=0,De=de.length,q=De>>>1;oe<q;){var C=2*(oe+1)-1,pe=de[C],ue=C+1,ge=de[ue];if(0>b(pe,Ne))ue<De&&0>b(ge,pe)?(de[oe]=ge,de[ue]=Ne,oe=ue):(de[oe]=pe,de[C]=Ne,oe=C);else if(ue<De&&0>b(ge,Ne))de[oe]=ge,de[ue]=Ne,oe=ue;else break e}}return ne}function b(de,ne){var Ne=de.sortIndex-ne.sortIndex;return Ne!==0?Ne:de.id-ne.id}function x(de){for(var ne=L(p);ne!==null;){if(ne.callback===null)M(p);else if(ne.startTime<=de)M(p),ne.sortIndex=ne.expirationTime,E(d,ne);else break;ne=L(p)}}function f(de){if($=!1,x(de),!G)if(L(d)!==null)G=!0,W||(W=!0,J());else{var ne=L(p);ne!==null&&R(f,ne.startTime-de)}}function y(){return Z?!0:!(Q.unstable_now()-k<Ae)}function R(de,ne){ve=re(function(){de(Q.unstable_now())},ne)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),Q.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var I=performance;Q.unstable_now=function(){return I.now()}}else{var A=Date,S=A.now();Q.unstable_now=function(){return A.now()-S}}var d=[],p=[],m=1,N=null,_=3,w=!1,G=!1,$=!1,Z=!1,re=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null,W=!1,ve=-1,Ae=5,k=-1;if(typeof he=="function")var J=function(){he(F)};else if(typeof MessageChannel<"u"){var h=new MessageChannel,fe=h.port2;h.port1.onmessage=F,J=function(){fe.postMessage(null)}}else J=function(){re(F,0)};Q.unstable_IdlePriority=5,Q.unstable_ImmediatePriority=1,Q.unstable_LowPriority=4,Q.unstable_NormalPriority=3,Q.unstable_Profiling=null,Q.unstable_UserBlockingPriority=2,Q.unstable_cancelCallback=function(de){de.callback=null},Q.unstable_forceFrameRate=function(de){0>de||125<de?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<de?Math.floor(1e3/de):5},Q.unstable_getCurrentPriorityLevel=function(){return _},Q.unstable_next=function(de){switch(_){case 1:case 2:case 3:var ne=3;break;default:ne=_}var Ne=_;_=ne;try{return de()}finally{_=Ne}},Q.unstable_requestPaint=function(){Z=!0},Q.unstable_runWithPriority=function(de,ne){switch(de){case 1:case 2:case 3:case 4:case 5:break;default:de=3}var Ne=_;_=de;try{return ne()}finally{_=Ne}},Q.unstable_scheduleCallback=function(de,ne,Ne){var oe=Q.unstable_now();switch(typeof Ne=="object"&&Ne!==null?(Ne=Ne.delay,Ne=typeof Ne=="number"&&0<Ne?oe+Ne:oe):Ne=oe,de){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=Ne+De,de={id:m++,callback:ne,priorityLevel:de,startTime:Ne,expirationTime:De,sortIndex:-1},Ne>oe?(de.sortIndex=Ne,E(p,de),L(d)===null&&de===L(p)&&($?(te(ve),ve=-1):$=!0,R(f,Ne-oe))):(de.sortIndex=De,E(d,de),G||w||(G=!0,W||(W=!0,J()))),de},Q.unstable_shouldYield=y,Q.unstable_wrapCallback=function(de){var ne=_;return function(){var Ne=_;_=ne;try{return de.apply(this,arguments)}finally{_=Ne}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})(u0)),u0}var U_;function kE(){return U_||(U_=1,r0.exports=zE()),r0.exports}var c0={exports:{}},ct={},V_;function IE(){if(V_)return ct;V_=1;/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){function Q(){}function F(d){return""+d}function E(d,p,m){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;if(N==null)N=null;else if(N===A)N=A;else{try{F(N);var _=!1}catch{_=!0}_&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol=="function"&&Symbol.toStringTag&&N[Symbol.toStringTag]||N.constructor.name||"Object"),F(N)),N=""+N}return{$$typeof:R,key:N,children:d,containerInfo:p,implementation:m}}function L(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}function M(d){return d===null?"`null`":d===void 0?"`undefined`":d===""?"an empty string":'something with type "'+typeof d+'"'}function b(d){return d===null?"`null`":d===void 0?"`undefined`":d===""?"an empty string":typeof d=="string"?JSON.stringify(d):typeof d=="number"?"`"+d+"`":'something with type "'+typeof d+'"'}function x(){var d=S.H;return d===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),d}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var f=Wd(),y={d:{f:Q,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:Q,C:Q,L:Q,m:Q,X:Q,S:Q,M:Q},p:0,findDOMNode:null},R=Symbol.for("react.portal"),I=Symbol.for("react.recoverable"),A=Symbol.for("react.optimistic_key"),S=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,ct.browser=function(d){return{$$typeof:I,_reason:d}},ct.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error("Target container is not a DOM element.");return E(d,p,null,m)},ct.flushSync=function(d){var p=S.T,m=y.p;try{if(S.T=null,y.p=2,d)return d()}finally{S.T=p,y.p=m,y.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},ct.preconnect=function(d,p){typeof d=="string"&&d?p!=null&&typeof p!="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",b(p)):p!=null&&typeof p.crossOrigin!="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",M(p.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(d)),typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,y.d.C(d,p))},ct.prefetchDNS=function(d){if(typeof d!="string"||!d)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(d));else if(1<arguments.length){var p=arguments[1];typeof p=="object"&&p.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",b(p)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",b(p))}typeof d=="string"&&y.d.D(d)},ct.preinit=function(d,p){if(typeof d=="string"&&d?p==null||typeof p!="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",b(p)):p.as!=="style"&&p.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',b(p.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(d)),typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,N=L(m,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?y.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:N,integrity:_,fetchPriority:w}):m==="script"&&y.d.X(d,{crossOrigin:N,integrity:_,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ct.preinitModule=function(d,p){var m="";if(typeof d=="string"&&d||(m+=" The `href` argument encountered was "+M(d)+"."),p!==void 0&&typeof p!="object"?m+=" The `options` argument encountered was "+M(p)+".":p&&"as"in p&&p.as!=="script"&&(m+=" The `as` option encountered was "+b(p.as)+"."),m)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",m);else switch(m=p&&typeof p.as=="string"?p.as:"script",m){case"script":break;default:m=b(m),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',m,d)}typeof d=="string"&&(typeof p=="object"&&p!==null?(p.as==null||p.as==="script")&&(m=L(p.as,p.crossOrigin),y.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})):p==null&&y.d.M(d))},ct.preload=function(d,p){var m="";if(typeof d=="string"&&d||(m+=" The `href` argument encountered was "+M(d)+"."),p==null||typeof p!="object"?m+=" The `options` argument encountered was "+M(p)+".":typeof p.as=="string"&&p.as||(m+=" The `as` option encountered was "+M(p.as)+"."),m&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',m),typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){m=p.as;var N=L(m,p.crossOrigin);y.d.L(d,m,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ct.preloadModule=function(d,p){var m="";typeof d=="string"&&d||(m+=" The `href` argument encountered was "+M(d)+"."),p!==void 0&&typeof p!="object"?m+=" The `options` argument encountered was "+M(p)+".":p&&"as"in p&&typeof p.as!="string"&&(m+=" The `as` option encountered was "+M(p.as)+"."),m&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',m),typeof d=="string"&&(p?(m=L(p.as,p.crossOrigin),y.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})):y.d.m(d))},ct.requestFormReset=function(d){y.d.r(d)},ct.unstable_batchedUpdates=function(d,p){return d(p)},ct.useFormState=function(d,p,m){return x().useFormState(d,p,m)},ct.useFormStatus=function(){return x().useHostTransitionStatus()},ct.version="19.3.1",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})(),ct}var B_;function UE(){return B_||(B_=1,c0.exports=IE()),c0.exports}var H_;function VE(){if(H_)return yu;H_=1;/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return(function(){function Q(e,n){for(e=e.memoizedState;e!==null&&0<n;)e=e.next,n--;return e}function F(e,n,t,a){if(t>=n.length)return a;var l=n[t],o=Xn(e)?e.slice():Xe({},e);return o[l]=F(e[l],n,t+1,a),o}function E(e,n,t){if(n.length!==t.length)console.warn("copyWithRename() expects paths of the same length");else{for(var a=0;a<t.length-1;a++)if(n[a]!==t[a]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return L(e,n,t,0)}}function L(e,n,t,a){var l=n[a],o=Xn(e)?e.slice():Xe({},e);return a+1===n.length?(o[t[a]]=o[l],Xn(o)?o.splice(l,1):delete o[l]):o[l]=L(e[l],n,t,a+1),o}function M(e,n,t){var a=n[t],l=Xn(e)?e.slice():Xe({},e);return t+1===n.length?(Xn(l)?l.splice(a,1):delete l[a],l):(l[a]=M(e[a],n,t+1),l)}function b(){return!1}function x(){return null}function f(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function y(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function R(){}function I(){}function A(e){var n=[];return e.forEach(function(t){n.push(t)}),n.sort().join(", ")}function S(e,n,t,a){return new HN(e,n,t,a)}function d(e,n){e.context===go&&(bm(e.current,2,n,e,null,null),qi())}function p(e,n){if(Rl!==null){var t=n.staleFamilies;n=n.updatedFamilies,cr(),pg(e.current,n,t),qi()}}function m(e){Rl=e}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function w(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function G(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $(e){if(_(e)!==e)throw Error("Unable to find node on an unmounted component.")}function Z(e){var n=e.alternate;if(!n){if(n=_(e),n===null)throw Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return $(l),e;if(o===a)return $(l),n;o=o.sibling}throw Error("Unable to find node on an unmounted component.")}if(t.return!==a.return)t=l,a=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,a=o;break}if(s===a){i=!0,a=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,a=l;break}if(s===a){i=!0,a=o,t=l;break}s=s.sibling}if(!i)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(t.alternate!==a)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(t.tag!==3)throw Error("Unable to find node on an unmounted component.");return t.stateNode.current===t?e:n}function re(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=re(e),n!==null)return n;e=e.sibling}return null}function te(e,n,t,a,l){he(e.child,!1,n,t,a,l)}function he(e,n,t,a,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,l,o)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&he(e.child,n,t,a,l,o))return!0;e=e.sibling}return!1}function W(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ve(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function Ae(e){var n=[null,null],t=W(e);return t===null||k(n,e,t.child,{foundSelf:!1}),n}function k(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&k(e,n,t.child,a))return!0;t=t.sibling}return!1}function J(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error("Expected to find a host node. This is a bug in React.")}}function h(e,n,t){return e===t?!0:e===n?(Fi=e,!0):!1}function fe(e,n,t){return e===t?(Sm=e,!1):e===n?(Sm!==null&&(Fi=e),!0):!1}function de(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,n,t){for(var a=0,l=e;l;l=t(l))a++;l=0;for(var o=n;o;o=t(o))l++;for(;0<a-l;)e=t(e),a--;for(;0<l-a;)n=t(n),l--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}function Ne(e){return e===null||typeof e!="object"?null:(e=Y1&&e[Y1]||e["@@iterator"],typeof e=="function"?e:null)}function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===IS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Em:return"Profiler";case Ic:return"StrictMode";case Dm:return"Suspense";case Tm:return"SuspenseList";case Cm:return"Activity";case Am:return"ViewTransition"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case Ji:return"Portal";case Ta:return e.displayName||"Context";case Mm:return(e._context.displayName||"Context")+".Consumer";case Uc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vc:return n=e.displayName||null,n!==null?n:oe(e.type)||"Memo";case Rt:n=e._payload,e=e._init;try{return oe(e(n))}catch{}}return null}function De(e){return typeof e.tag=="number"?q(e):typeof e.name=="string"?e.name:null}function q(e){var n=e.type;switch(e.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(n._context.displayName||"Context")+".Consumer";case 10:return n.displayName||"Context";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(n);case 8:return n===Ic?"StrictMode":"Mode";case 22:if(e.return!==null)return q(e.return);break;case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 30:return"ViewTransition";case 1:case 0:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break;case 29:if(n=e._debugInfo,n!=null){for(var t=n.length-1;0<=t;t--)if(typeof n[t].name=="string")return n[t].name}if(e.return!==null)return q(e.return)}return null}function C(e){return{current:e}}function pe(e,n){0>Dl?console.error("Unexpected pop."):(n!==Rm[Dl]&&console.error("Unexpected Fiber popped."),e.current=Om[Dl],Om[Dl]=null,Rm[Dl]=null,Dl--)}function ue(e,n,t){Dl++,Om[Dl]=e.current,Rm[Dl]=t,e.current=n}function ge(e){return e===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),e}function tn(e,n){ue(uo,n,e),ue(Nr,e,e),ue(ro,null,e);var t=n.nodeType;switch(t){case 9:case 11:t=t===9?"#document":"#fragment",n=(n=n.documentElement)&&(n=n.namespaceURI)?e1(n):Ll;break;default:if(t=n.tagName,n=n.namespaceURI)n=e1(n),n=n1(n,t);else switch(t){case"svg":n=zs;break;case"math":n=Ld;break;default:n=Ll}}t=t.toLowerCase(),t=I0(null,t),t={context:n,ancestorInfo:t},pe(ro,e),ue(ro,t,e)}function cn(e){pe(ro,e),pe(Nr,e),pe(uo,e)}function Ce(){return ge(ro.current)}function qe(e){var n=e.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,ue(Bc,e,e)),n=ge(ro.current);var t=e.type,a=n1(n.context,t);t=I0(n.ancestorInfo,t),a={context:a,ancestorInfo:t},n!==a&&(ue(Nr,e,e),ue(ro,a,e))}function yn(e){Nr.current===e&&(pe(ro,e),pe(Nr,e)),Bc.current===e&&(pe(Bc,e),Is._currentValue=Ni)}function hn(){}function Pn(){if(wr===0){Z1=console.log,X1=console.info,Q1=console.warn,$1=console.error,P1=console.group,F1=console.groupCollapsed,J1=console.groupEnd;var e={configurable:!0,enumerable:!0,value:hn,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}wr++}function dt(){if(wr--,wr===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Xe({},e,{value:Z1}),info:Xe({},e,{value:X1}),warn:Xe({},e,{value:Q1}),error:Xe({},e,{value:$1}),group:Xe({},e,{value:P1}),groupCollapsed:Xe({},e,{value:F1}),groupEnd:Xe({},e,{value:J1})})}0>wr&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function u(e){var n=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=n,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),n=e.indexOf(`
`),n!==-1&&(e=e.slice(n+1)),n=e.indexOf("react_stack_bottom_frame"),n!==-1&&(n=e.lastIndexOf(`
`,n)),n!==-1)e=e.slice(0,n);else return"";return e}function ie(e){if(jm===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);jm=n&&n[1]||"",W1=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jm+e+W1}function le(e,n){if(!e||zm)return"";var t=km.get(e);if(t!==void 0)return t;zm=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var a=null;a=ae.H,ae.H=null,Pn();try{var l={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(Me){var Y=Me}Reflect.construct(e,[],U)}else{try{U.call()}catch(Me){Y=Me}U=!1;try{var me=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),U=!0,new e}finally{U&&(me!==void 0?Object.defineProperty(e.prototype,"props",me):delete e.prototype.props)}}}else{try{throw Error()}catch(Me){Y=Me}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(Me){if(Me&&Y&&typeof Me.stack=="string")return[Me.stack,Y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],r=i[1];if(s&&r){var c=s.split(`
`),D=r.split(`
`);for(i=o=0;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;for(;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;if(o===c.length||i===D.length)for(o=c.length-1,i=D.length-1;1<=o&&0<=i&&c[o]!==D[i];)i--;for(;1<=o&&0<=i;o--,i--)if(c[o]!==D[i]){if(o!==1||i!==1)do if(o--,i--,0>i||c[o]!==D[i]){var V=`
`+c[o].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),typeof e=="function"&&km.set(e,V),V}while(1<=o&&0<=i);break}}}finally{zm=!1,ae.H=a,dt(),Error.prepareStackTrace=t}return c=(c=e?e.displayName||e.name:"")?ie(c):"",typeof e=="function"&&km.set(e,c),c}function O(e,n){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return e.child!==n&&n!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ie("Activity");case 30:return ie("ViewTransition");default:return""}}function T(e){try{var n="",t=null;do{n+=O(e,t);var a=e._debugInfo;if(a)for(var l=a.length-1;0<=l;l--){var o=a[l];if(typeof o.name=="string"){var i=n;e:{var s=o.name,r=o.env,c=o.debugLocation;if(c!=null){var D=u(c),V=D.lastIndexOf(`
`),U=V===-1?D:D.slice(V+1);if(U.indexOf(s)!==-1){var Y=`
`+U;break e}}Y=ie(s+(r?" ["+r+"]":""))}n=i+Y}}t=e,e=e.return}while(e);return n}catch(me){return`
Error generating stack: `+me.message+`
`+me.stack}}function X(e){return(e=e?e.displayName||e.name:"")?ie(e):""}function ce(){if(Jt===null)return null;var e=Jt._debugOwner;return e!=null?De(e):null}function be(){if(Jt===null)return"";var e=Jt;try{var n="";switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:n+=ie(e.type);break;case 13:n+=ie("Suspense");break;case 19:n+=ie("SuspenseList");break;case 31:n+=ie("Activity");break;case 30:n+=ie("ViewTransition");break;case 0:case 15:case 1:e._debugOwner||n!==""||(n+=X(e.type));break;case 11:e._debugOwner||n!==""||(n+=X(e.type.render))}for(;e;)if(typeof e.tag=="number"){var t=e;e=t._debugOwner;var a=t._debugStack;if(e&&a){var l=u(a);l!==""&&(n+=`
`+l)}}else if(e.debugStack!=null){var o=e.debugStack;(e=e.owner)&&o&&(n+=`
`+u(o))}else break;var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return i}function B(e,n,t,a,l,o,i){var s=Jt;se(e);try{return e!==null&&e._debugTask?e._debugTask.run(n.bind(null,t,a,l,o,i)):n(t,a,l,o,i)}finally{se(s)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function se(e){ae.getCurrentStack=e===null?null:be,el=!1,Jt=e}function Ee(e){return typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}function we(e){try{return ze(e),!1}catch{return!0}}function ze(e){return""+e}function ke(e,n){if(we(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",n,Ee(e)),ze(e)}function Pe(e,n){if(we(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",n,Ee(e)),ze(e)}function Fn(e){if(we(e))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Ee(e)),ze(e)}function ml(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(n.isDisabled)return!0;if(!n.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{es=n.inject(e),mt=n}catch(t){console.error("React instrumentation encountered an error: %o.",t)}return!!n.checkDCE}function an(e){if(typeof qS=="function"&&YS(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(es,e)}catch(n){nl||(nl=!0,console.error("React instrumentation encountered an error: %o",n))}}function Ua(e){return e>>>=0,e===0?32:31-(ZS(e)/XS|0)|0}function dn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),e}}function la(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~o,a!==0?l=dn(a):(i&=s,i!==0?l=dn(i):t||(t=s&~e,t!==0&&(l=dn(t))))):(s=a&~o,s!==0?l=dn(s):i!==0?l=dn(i):t||(t=a&~e,t!==0&&(l=dn(t)))),l===0?0:n!==0&&n!==l&&(n&o)===0&&(o=l&-l,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:l}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function lt(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-wt(t),l=1<<a;n|=e[a],t&=~l}return n}function hl(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function gl(){var e=Lc;return Lc<<=1,(Lc&62914560)===0&&(Lc=4194304),e}function Xl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g(e,n,t,a,l,o){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,c=e.hiddenUpdates;for(t=i&~t;0<t;){var D=31-wt(t),V=1<<D;s[D]=0,r[D]=-1;var U=c[D];if(U!==null)for(c[D]=null,D=0;D<U.length;D++){var Y=U[D];Y!==null&&(Y.lane&=-536870913)}t&=~V}a!==0&&P(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(i&~n))}function P(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-wt(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function xe(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-wt(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Se(e,n){var t=n&-n;return t=(t&42)!==0?1:Te(t),(t&(e.suspendedLanes|n))!==0?0:t}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function un(e,n,t){if(tl)for(e=e.pendingUpdatersLaneMap;0<t;){var a=31-wt(t),l=1<<a;e[a].add(n),t&=~l}}function Oe(e,n){if(tl)for(var t=e.pendingUpdatersLaneMap,a=e.memoizedUpdaters;0<n;){var l=31-wt(n);e=1<<l,l=t[l],0<l.size&&(l.forEach(function(o){var i=o.alternate;i!==null&&a.has(i)||a.add(o)}),l.clear()),n&=~e}}function Ge(e){return e&=-e,jt<e?al<e?(e&134217727)!==0?Tl:qc:al:jt}function sn(){var e=mn.p;return e!==0?e:(e=window.event,e===void 0?Tl:U1(e.type))}function _a(e,n){var t=mn.p;try{return mn.p=e,n()}finally{mn.p=t}}function Na(e){delete e[st],delete e[St],delete e[QS],delete e[$S]}function bl(e){var n;if(n=e[st])return n;for(var t=e.parentNode;t;){if(n=t[co]||t[st]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=y1(e);e!==null;){if(t=e[st])return t;e=y1(e)}return n}e=t,t=e.parentNode}return null}function oa(e){if(e=e[st]||e[co]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Bs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function Ei(e){var n=e[ey];return n||(n=e[ey]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Jn(e){e[Sr]=!0}function y0(e){e[Yc]=void 0}function ko(e,n){Mi(e,n),Mi(e+"Capture",n)}function Mi(e,n){Wo[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Wo[e]=n;var t=e.toLowerCase();for(Hm[t]=e,e==="onDoubleClick"&&(Hm.ondblclick=e),e=0;e<n.length;e++)ny.add(n[e])}function Di(e,n){PS[n.type]||n.onChange||n.onInput||n.readOnly||n.disabled||n.value==null||console.error(e==="select"?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),n.onChange||n.readOnly||n.disabled||n.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function Kd(e){return ca.call(ay,e)?!0:ca.call(ty,e)?!1:FS.test(e)?ay[e]=!0:(ty[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function x0(){var e=fn;return fn=!1,e}function _0(e,n,t){if(Kd(n)){if(!e.hasAttribute(n)){switch(typeof t){case"symbol":case"object":return t;case"function":return t;case"boolean":if(t===!1)return t}return t===void 0?void 0:null}return e=n.toLowerCase()==="nonce"?e.nonce:e.getAttribute(n),e===""&&t===!0?!0:(ke(t,n),e===""+t?t:e)}}function wu(e,n,t){if(Kd(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}ke(t,n),e.setAttribute(n,t)}}function Su(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}ke(t,n),e.setAttribute(n,t)}}function vl(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}ke(a,t),e.setAttributeNS(n,t,a)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return Fn(e),e;default:return""}}function N0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yN(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){Fn(i),t=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(i){Fn(i),t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ef(e){if(!e._valueTracker){var n=N0(e)?"checked":"value";e._valueTracker=yN(e,n,""+e[n])}}function w0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=N0(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function ia(e){return e.replace(JS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function S0(e,n){n.checked===void 0||n.defaultChecked===void 0||oy||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",ce()||"A component",n.type),oy=!0),n.value===void 0||n.defaultValue===void 0||ly||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",ce()||"A component",n.type),ly=!0)}function nf(e,n,t,a,l,o,i,s){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?(ke(i,"type"),e.type=i):e.removeAttribute("type"),n!=null?i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Lt(n)):e.value!==""+Lt(n)&&(e.value=""+Lt(n)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),n!=null?i==="number"&&e.value==n?tf(e,Lt(e.value)):tf(e,Lt(n)):t!=null?tf(e,Lt(t)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?(ke(s,"name"),e.name=""+Lt(s)):e.removeAttribute("name")}function E0(e,n,t,a,l,o,i,s){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(ke(o,"type"),e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ef(e);return}t=t!=null?""+Lt(t):"",n=n!=null?""+Lt(n):t,s||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(ke(i,"name"),e.name=i),ef(e)}function tf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function M0(e,n){n.value==null&&(typeof n.children=="object"&&n.children!==null?wm.Children.forEach(n.children,function(t){t==null||typeof t=="string"||typeof t=="number"||typeof t=="bigint"||sy||(sy=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):n.dangerouslySetInnerHTML==null||ry||(ry=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),n.selected==null||iy||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),iy=!0)}function D0(){var e=ce();return e?`

Check the render method of \``+e+"`.":""}function Ti(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Lt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function T0(e,n){for(e=0;e<cy.length;e++){var t=cy[e];if(n[t]!=null){var a=Xn(n[t]);n.multiple&&!a?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",t,D0()):!n.multiple&&a&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",t,D0())}}n.value===void 0||n.defaultValue===void 0||uy||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),uy=!0)}function C0(e,n){n.value===void 0||n.defaultValue===void 0||dy||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",ce()||"A component"),dy=!0),n.children!=null&&n.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function A0(e,n,t){if(n!=null&&(n=""+Lt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Lt(t):""}function O0(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Xn(a)){if(1<a.length)throw Error("<textarea> can only have at most one child.");a=a[0]}t=a}t==null&&(t=""),n=t}t=Lt(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),ef(e)}function R0(e,n){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-n?R0(e.children[0],n):e}function qt(e){return"  "+"  ".repeat(e)}function Ci(e){return"+ "+"  ".repeat(e)}function Io(e){return"- "+"  ".repeat(e)}function j0(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function Hs(e,n){return fy.test(e)?(e=JSON.stringify(e),e.length>n-2?8>n?'{"..."}':"{"+e.slice(0,n-7)+'..."}':"{"+e+"}"):e.length>n?5>n?'{"..."}':e.slice(0,n-3)+"...":e}function Eu(e,n,t){var a=120-2*t;if(n===null)return Ci(t)+Hs(e,a)+`
`;if(typeof n=="string"){for(var l=0;l<n.length&&l<e.length&&n.charCodeAt(l)===e.charCodeAt(l);l++);return l>a-8&&10<l&&(e="..."+e.slice(l-8),n="..."+n.slice(l-8)),Ci(t)+Hs(e,a)+`
`+Io(t)+Hs(n,a)+`
`}return qt(t)+Hs(e,a)+`
`}function af(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(n,t){return t})}function Gs(e,n){switch(typeof e){case"string":return e=JSON.stringify(e),e.length>n?5>n?'"..."':e.slice(0,n-4)+'..."':e;case"object":if(e===null)return"null";if(Xn(e))return"[...]";if(e.$$typeof===Ka)return(n=oe(e.type))?"<"+n+">":"<...>";var t=af(e);if(t==="Object"){t="",n-=2;for(var a in e)if(e.hasOwnProperty(a)){var l=JSON.stringify(a);if(l!=='"'+a+'"'&&(a=l),n-=a.length-2,l=Gs(e[a],15>n?n:15),n-=l.length,0>n){t+=t===""?"...":", ...";break}t+=(t===""?"":",")+a+":"+l}return"{"+t+"}"}return t;case"function":return(n=e.displayName||e.name)?"function "+n:"function";default:return String(e)}}function Ai(e,n){return typeof e!="string"||fy.test(e)?"{"+Gs(e,n-2)+"}":e.length>n-2?5>n?'"..."':'"'+e.slice(0,n-5)+'..."':'"'+e+'"'}function lf(e,n,t){var a=120-t.length-e.length,l=[],o;for(o in n)if(n.hasOwnProperty(o)&&o!=="children"){var i=Ai(n[o],120-t.length-o.length-1);a-=o.length+i.length+2,l.push(o+"="+i)}return l.length===0?t+"<"+e+`>
`:0<a?t+"<"+e+" "+l.join(" ")+`>
`:t+"<"+e+`
`+t+"  "+l.join(`
`+t+"  ")+`
`+t+`>
`}function xN(e,n,t){var a="",l=Xe({},n),o;for(o in e)if(e.hasOwnProperty(o)){delete l[o];var i=120-2*t-o.length-2,s=Gs(e[o],i);n.hasOwnProperty(o)?(i=Gs(n[o],i),a+=Ci(t)+o+": "+s+`
`,a+=Io(t)+o+": "+i+`
`):a+=Ci(t)+o+": "+s+`
`}for(var r in l)l.hasOwnProperty(r)&&(e=Gs(l[r],120-2*t-r.length-2),a+=Io(t)+r+": "+e+`
`);return a}function _N(e,n,t,a){var l="",o=new Map;for(c in t)t.hasOwnProperty(c)&&o.set(c.toLowerCase(),c);if(o.size===1&&o.has("children"))l+=lf(e,n,qt(a));else{for(var i in n)if(n.hasOwnProperty(i)&&i!=="children"){var s=120-2*(a+1)-i.length-1,r=o.get(i.toLowerCase());if(r!==void 0){o.delete(i.toLowerCase());var c=n[i];r=t[r];var D=Ai(c,s);s=Ai(r,s),typeof c=="object"&&c!==null&&typeof r=="object"&&r!==null&&af(c)==="Object"&&af(r)==="Object"&&(2<Object.keys(c).length||2<Object.keys(r).length||-1<D.indexOf("...")||-1<s.indexOf("..."))?l+=qt(a+1)+i+`={{
`+xN(c,r,a+2)+qt(a+1)+`}}
`:(l+=Ci(a+1)+i+"="+D+`
`,l+=Io(a+1)+i+"="+s+`
`)}else l+=qt(a+1)+i+"="+Ai(n[i],s)+`
`}o.forEach(function(V){if(V!=="children"){var U=120-2*(a+1)-V.length-1;l+=Io(a+1)+V+"="+Ai(t[V],U)+`
`}}),l=l===""?qt(a)+"<"+e+`>
`:qt(a)+"<"+e+`
`+l+qt(a)+`>
`}return e=t.children,n=n.children,typeof e=="string"||typeof e=="number"||typeof e=="bigint"?(o="",(typeof n=="string"||typeof n=="number"||typeof n=="bigint")&&(o=""+n),l+=Eu(o,""+e,a+1)):(typeof n=="string"||typeof n=="number"||typeof n=="bigint")&&(l=e==null?l+Eu(""+n,null,a+1):l+Eu(""+n,void 0,a+1)),l}function z0(e,n){var t=j0(e);if(t===null){for(t="",e=e.child;e;)t+=z0(e,n),e=e.sibling;return t}return qt(n)+"<"+t+`>
`}function of(e,n){var t=R0(e,n);if(t!==e&&(e.children.length!==1||e.children[0]!==t))return qt(n)+`...
`+of(t,n+1);t="";var a=e.fiber._debugInfo;if(a)for(var l=0;l<a.length;l++){var o=a[l].name;typeof o=="string"&&(t+=qt(n)+"<"+o+`>
`,n++)}if(a="",l=e.fiber.pendingProps,e.fiber.tag===6)a=Eu(l,e.serverProps,n),n++;else if(o=j0(e.fiber),o!==null)if(e.serverProps===void 0){a=n;var i=120-2*a-o.length-2,s="";for(c in l)if(l.hasOwnProperty(c)&&c!=="children"){var r=Ai(l[c],15);if(i-=c.length+r.length+2,0>i){s+=" ...";break}s+=" "+c+"="+r}a=qt(a)+"<"+o+s+`>
`,n++}else e.serverProps===null?(a=lf(o,l,Ci(n)),n++):typeof e.serverProps=="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(a=_N(o,l,e.serverProps,n),n++);var c="";for(l=e.fiber.child,o=0;l&&o<e.children.length;)i=e.children[o],i.fiber===l?(c+=of(i,n),o++):c+=z0(l,n),l=l.sibling;for(l&&0<e.children.length&&(c+=qt(n)+`...
`),l=e.serverTail,e.serverProps===null&&n--,e=0;e<l.length;e++)o=l[e],c=typeof o=="string"?c+(Io(n)+Hs(o,120-2*n)+`
`):c+lf(o.type,o.props,Io(n));return t+a+c}function sf(e){try{return`

`+of(e,0)}catch{return""}}function k0(e,n,t){for(var a=n,l=null,o=0;a;)a===e&&(o=0),l={fiber:a,children:l!==null?[l]:[],serverProps:a===n?t:a===e?null:void 0,serverTail:[],distanceFromLeaf:o},o++,a=a.return;return l!==null?sf(l).replaceAll(/^[+-]/gm,">"):""}function I0(e,n){var t=Xe({},e||my),a={tag:n};return py.indexOf(n)!==-1&&(t.aTagInScope=null,t.buttonTagInScope=null,t.nobrTagInScope=null),KS.indexOf(n)!==-1&&(t.pTagInButtonScope=null),WS.indexOf(n)!==-1&&n!=="address"&&n!=="div"&&n!=="p"&&(t.listItemTagAutoclosing=null,t.dlItemTagAutoclosing=null),t.current=a,n==="form"&&(t.formTag=a),n==="a"&&(t.aTagInScope=a),n==="button"&&(t.buttonTagInScope=a),n==="nobr"&&(t.nobrTagInScope=a),n==="p"&&(t.pTagInButtonScope=a),n==="li"&&(t.listItemTagAutoclosing=a),(n==="dd"||n==="dt")&&(t.dlItemTagAutoclosing=a),n==="#document"||n==="html"?t.containerTagInScope=null:t.containerTagInScope||(t.containerTagInScope=a),e!==null||n!=="#document"&&n!=="html"&&n!=="body"?t.implicitRootScope===!0&&(t.implicitRootScope=!1):t.implicitRootScope=!0,t}function U0(e,n,t){switch(n){case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":if(t)break;return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":if(!t)return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return n!=="h1"&&n!=="h2"&&n!=="h3"&&n!=="h4"&&n!=="h5"&&n!=="h6";case"rp":case"rt":return e3.indexOf(n)===-1;case"caption":case"col":case"colgroup":case"input":return n!=="select";case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return n==null;case"head":return t||n===null;case"html":return t&&n==="#document"||n===null;case"body":return t&&(n==="#document"||n==="html")||n===null}return!0}function NN(e,n){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return n.pTagInButtonScope;case"form":return n.formTag||n.pTagInButtonScope;case"li":return n.listItemTagAutoclosing;case"dd":case"dt":return n.dlItemTagAutoclosing;case"button":return n.buttonTagInScope;case"a":return n.aTagInScope;case"nobr":return n.nobrTagInScope}return null}function V0(e,n){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===n)return e}e=e.return}return null}function rf(e,n){n=n||my;var t=n.current;if(n=(t=U0(e,t&&t.tag,n.implicitRootScope)?null:t)?null:NN(e,n),n=t||n,!n)return!0;var a=n.tag;if(n=String(!!t)+"|"+e+"|"+a,Zc[n])return!1;Zc[n]=!0;var l=(n=Jt)?V0(n.return,a):null,o=n!==null&&l!==null?k0(l,n,null):"",i="<"+e+">";return t?(t="",a==="table"&&e==="tr"&&(t+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,i,a,t,o)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,i,a,o),n&&(e=n.return,l===null||e===null||l===e&&e._debugOwner===n._debugOwner||B(l,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,a,i)})),!1}function Mu(e,n,t){if(t||U0("#text",n,!1))return!0;if(t="#text|"+n,Zc[t])return!1;Zc[t]=!0;var a=(t=Jt)?V0(t,n):null;return t=t!==null&&a!==null?k0(a,t,t.tag!==6?{children:null}:null):"",/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,n,t):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,n,t),!1}function Ls(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}function wN(e){return e.replace(a3,function(n,t){return t.toUpperCase()})}function B0(e,n,t){var a=n.indexOf("--")===0;a||(-1<n.indexOf("-")?ns.hasOwnProperty(n)&&ns[n]||(ns[n]=!0,console.error("Unsupported style property %s. Did you mean %s?",n,wN(n.replace(t3,"ms-")))):n3.test(n)?ns.hasOwnProperty(n)&&ns[n]||(ns[n]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",n,n.charAt(0).toUpperCase()+n.slice(1))):!by.test(t)||Lm.hasOwnProperty(t)&&Lm[t]||(Lm[t]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,n,t.replace(by,""))),typeof t=="number"&&(isNaN(t)?vy||(vy=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",n)):isFinite(t)||yy||(yy=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",n)))),t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||xy.has(n)?n==="float"?e.cssFloat=t:(Pe(t,n),e[n]=(""+t).trim()):e[n]=t+"px"}function H0(e,n,t){if(n!=null&&typeof n!="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(n&&Object.freeze(n),e=e.style,t!=null){if(n){var a={};if(t){for(var l in t)if(t.hasOwnProperty(l)&&!n.hasOwnProperty(l))for(var o=Gm[l]||[l],i=0;i<o.length;i++)a[o[i]]=l}for(var s in n)if(n.hasOwnProperty(s)&&(!t||t[s]!==n[s]))for(l=Gm[s]||[s],o=0;o<l.length;o++)a[l[o]]=s;s={};for(var r in n)for(l=Gm[r]||[r],o=0;o<l.length;o++)s[l[o]]=r;r={};for(var c in a)if(l=a[c],(o=s[c])&&l!==o&&(i=l+","+o,!r[i])){r[i]=!0,i=console;var D=n[l];i.error.call(i,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",D==null||typeof D=="boolean"||D===""?"Removing":"Updating",l,o)}}for(var V in t)!t.hasOwnProperty(V)||n!=null&&n.hasOwnProperty(V)||(V.indexOf("--")===0?e.setProperty(V,""):V==="float"?e.cssFloat="":e[V]="",fn=!0);for(var U in n)c=n[U],n.hasOwnProperty(U)&&t[U]!==c&&(B0(e,U,c),fn=!0)}else for(a in n)n.hasOwnProperty(a)&&B0(e,a,n[a])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function G0(e){return l3.get(e)||e}function SN(e,n){if(ca.call(as,n)&&as[n])return!0;if(i3.test(n)){if(e="aria-"+n.slice(4).toLowerCase(),e=_y.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",n),as[n]=!0;if(n!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",n,e),as[n]=!0}if(o3.test(n)){if(e=n.toLowerCase(),e=_y.hasOwnProperty(e)?e:null,e==null)return as[n]=!0,!1;n!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",n,e),as[n]=!0)}return!0}function EN(e,n){var t=[],a;for(a in n)SN(e,a)||t.push(a);n=t.map(function(l){return"`"+l+"`"}).join(", "),t.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",n,e):1<t.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",n,e)}function MN(e,n,t,a){if(ca.call(Et,n)&&Et[n])return!0;var l=n.toLowerCase();if(l==="onfocusin"||l==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Et[n]=!0;if(typeof t=="function"&&(e==="form"&&n==="action"||e==="input"&&n==="formAction"||e==="button"&&n==="formAction"))return!0;if(a!=null){if(e=a.possibleRegistrationNames,a.registrationNameDependencies.hasOwnProperty(n))return!0;if(a=e.hasOwnProperty(l)?e[l]:null,a!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",n,a),Et[n]=!0;if(wy.test(n))return console.error("Unknown event handler property `%s`. It will be ignored.",n),Et[n]=!0}else if(wy.test(n))return s3.test(n)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",n),Et[n]=!0;if(r3.test(n)||u3.test(n))return!0;if(l==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Et[n]=!0;if(l==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Et[n]=!0;if(l==="is"&&t!==null&&t!==void 0&&typeof t!="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof t),Et[n]=!0;if(typeof t=="number"&&isNaN(t))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",n),Et[n]=!0;if(Qc.hasOwnProperty(l)){if(l=Qc[l],l!==n)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",n,l),Et[n]=!0}else if(n!==l)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",n,l),Et[n]=!0;switch(n){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof t){case"boolean":switch(n){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:return l=n.toLowerCase().slice(0,5),l==="data-"||l==="aria-"?!0:(t?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',t,n,n,t,n):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',t,n,n,t,n,n,n),Et[n]=!0)}case"function":case"symbol":return Et[n]=!0,!1;case"string":if(t==="false"||t==="true"){switch(n){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",t,n,t==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',n,t),Et[n]=!0}}return!0}function DN(e,n,t){var a=[],l;for(l in n)MN(e,l,n[l],t)||a.push(l);n=a.map(function(o){return"`"+o+"`"}).join(", "),a.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",n,e):1<a.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",n,e)}function Ys(e){return c3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Va(){}function uf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function L0(e){var n=oa(e);if(n&&(e=n.stateNode)){var t=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(nf(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(ke(n,"name"),t=t.querySelectorAll('input[name="'+ia(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[St]||null;if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");nf(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&w0(a)}break e;case"textarea":A0(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ti(e,!!t.multiple,n,!1)}}}function q0(e,n,t){if(qm)return e(n,t);qm=!0;try{var a=e(n);return a}finally{if(qm=!1,(ls!==null||os!==null)&&(qi(),ls&&(n=ls,e=os,os=ls=null,L0(n),e)))for(n=0;n<e.length;n++)L0(e[n])}}function Zs(e,n){var t=e.stateNode;if(t===null)return null;var a=t[St]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error("Expected `"+n+"` listener to be a function, instead got a value of `"+typeof t+"` type.");return t}function Y0(){if($c)return $c;var e,n=Zm,t=n.length,a,l="value"in fo?fo.value:fo.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===l[o-a];a++);return $c=l.slice(e,1<a?1-a:void 0)}function Du(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tu(){return!0}function Z0(){return!1}function vt(e){function n(t,a,l,o,i){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tu:Z0,this.isPropagationStopped=Z0,this}return Xe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tu)},persist:function(){},isPersistent:Tu}),n}function TN(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=w3[e])?!!n[e]:!1}function cf(){return TN}function X0(e,n){switch(e){case"keyup":return U3.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==Dy;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function CN(e,n){switch(e){case"compositionend":return Q0(n);case"keypress":return n.which!==Cy?null:(Oy=!0,Ay);case"textInput":return e=n.data,e===Ay&&Oy?null:e;default:return null}}function AN(e,n){if(is)return e==="compositionend"||!Pm&&X0(e,n)?(e=Y0(),$c=Zm=fo=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ty&&n.locale!=="ko"?null:n.data;default:return null}}function $0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!B3[e.type]:n==="textarea"}function ON(e){if(!ll)return!1;e="on"+e;var n=e in document;return n||(n=document.createElement("div"),n.setAttribute(e,"return;"),n=typeof n[e]=="function"),n}function P0(e,n,t,a){ls?os?os.push(a):os=[a]:ls=a,n=Cc(n,"onChange"),0<n.length&&(t=new Pc("onChange","change",null,t,a),e.push({event:t,listeners:n}))}function RN(e){Gv(e,0)}function Cu(e){var n=Bs(e);if(w0(n))return e}function F0(e,n){if(e==="change")return n}function J0(){Ar&&(Ar.detachEvent("onpropertychange",W0),Or=Ar=null)}function W0(e){if(e.propertyName==="value"&&Cu(Or)){var n=[];P0(n,Or,e,uf(e)),q0(RN,n)}}function jN(e,n,t){e==="focusin"?(J0(),Ar=n,Or=t,Ar.attachEvent("onpropertychange",W0)):e==="focusout"&&J0()}function zN(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(Or)}function kN(e,n){if(e==="click")return Cu(n)}function IN(e,n){if(e==="input"||e==="change")return Cu(n)}function UN(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}function Xs(e,n){if(Mt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!ca.call(n,l)||!Mt(e[l],n[l]))return!1}return!0}function df(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function K0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eg(e,n){var t=K0(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=K0(t)}}function ng(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ng(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=df(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=df(e.document)}return n}function ff(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ag(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Jm||ss==null||ss!==df(a)||(a=ss,"selectionStart"in a&&ff(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rr&&Xs(Rr,a)||(Rr=a,a=Cc(Fm,"onSelect"),0<a.length&&(n=new Pc("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ss)))}function Uo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}function Vo(e){if(Wm[e])return Wm[e];if(!rs[e])return e;var n=rs[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in jy)return Wm[e]=n[t];return e}function wa(e,n){Vy.set(e,n),ko(n,[e])}function yl(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ka.identifierPrefix;var t=Y3++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function lg(e){if(e==null||typeof e=="string")return e;var n=null,t=Cs;if(t!==null)for(var a=0;a<t.length;a++){var l=e[t[a]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function xl(e,n){return e=lg(e),n=lg(n),n==null?e==="auto"?null:e:n==="auto"?null:n}function VN(e){for(var n=Jc,t=0;t<e.length&&t<da;t++){var a=e[t];if(typeof a=="object"&&a!==null)if(Xn(a)&&a.length===2&&typeof a[0]=="string"){if(n!==Jc&&n!==ah)return nh;n=ah}else return nh;else{if(typeof a=="function"||typeof a=="string"&&50<a.length||n!==Jc&&n!==th||typeof a=="bigint")return nh;n=th}}return n}function pf(e,n,t,a){if(!ArrayBuffer.isView(e)){var l=0,o;for(o in e)if(ca.call(e,o)&&o[0]!=="_"&&(l++,Sa(o,e[o],n,t,a),l>=da)){n.push([a+"  ".repeat(t)+"Only "+da+" properties are shown. React will not log more properties of this object.",""]);break}}}function Au(e){return"$$typeof"in e&&ca.call(e,"$$typeof")?e.$$typeof:void 0}function Sa(e,n,t,a,l){switch(typeof n){case"object":if(n===null){n="null";break}else{if(Au(n)===Ka){var o=oe(n.type)||"…",i=n.key;n=n.props;var s=Object.keys(n),r=s.length;if(i==null&&r===0){n="<"+o+" />";break}if(3>a||r===1&&s[0]==="children"&&i==null){n="<"+o+" … />";break}t.push([l+"  ".repeat(a)+e,"<"+o]),i!==null&&Sa("key",i,t,a+1,l),e=!1,i=0;for(var c in n)if(i++,c==="children"?n.children!=null&&(!Xn(n.children)||0<n.children.length)&&(e=!0):ca.call(n,c)&&c[0]!=="_"&&Sa(c,n[c],t,a+1,l),i>=da)break;t.push(["",e?">…</"+o+">":"/>"]);return}if(o=Object.prototype.toString.call(n),o=o.slice(8,o.length-1),ArrayBuffer.isView(n)){n=n.length,n=typeof n=="number"?o+"("+n+")":o;break}if(o==="Array"){if(c=n.length>da,i=VN(n),i===th||i===Jc){n=JSON.stringify(c?n.slice(0,da).concat("…"):n);break}else if(i===ah){for(t.push([l+"  ".repeat(a)+e,""]),e=0;e<n.length&&e<da;e++)o=n[e],Sa(o[0],o[1],t,a+1,l);c&&Sa(da.toString(),"…",t,a+1,l);return}}if(o==="Promise"){if(n.status==="fulfilled"){if(o=t.length,Sa(e,n.value,t,a,l),t.length>o){t=t[o],t[1]="Promise<"+(t[1]||"Object")+">";return}}else if(n.status==="rejected"&&(o=t.length,Sa(e,n.reason,t,a,l),t.length>o)){t=t[o],t[1]="Rejected Promise<"+t[1]+">";return}t.push(["  ".repeat(a)+e,"Promise"]);return}o==="Object"&&(c=Object.getPrototypeOf(n))&&typeof c.constructor=="function"&&(o=c.constructor.name),t.push([l+"  ".repeat(a)+e,o==="Object"?3>a?"":"…":o]),3>a&&pf(n,t,a+1,l);return}case"function":n=n.name,n=n===""||typeof n!="string"?"() => {}":n+"() {}";break;case"string":n=n===Q3?"…":JSON.stringify(1024<=n.length?n.slice(0,1023)+"…":n);break;case"undefined":n="undefined";break;case"boolean":n=n?"true":"false";break;default:n=String(n)}t.push([l+"  ".repeat(a)+e,n])}function og(e,n,t,a){var l=!0,o=0;for(s in e){if(o>da){t.push(["Previous object has more than "+da+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}s in n||(t.push([Wc+"  ".repeat(a)+s,"…"]),l=!1),o++}o=0;for(var i in n){if(o>da){t.push(["Next object has more than "+da+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}if(i in e){var s=e[i],r=n[i];if(s!==r){if(a===0&&i==="children"){l="  ".repeat(a)+i,t.push([Wc+l,"…"],[Kc+l,"…"]),l=!1;continue}if(!(3<=a)){if(typeof s=="object"&&typeof r=="object"&&s!==null&&r!==null&&Au(s)===Au(r))if(Au(r)===Ka){if(s.type===r.type&&s.key===r.key){s=oe(r.type)||"…",l="  ".repeat(a)+i,s="<"+s+" … />",t.push([Wc+l,s],[Kc+l,s]),l=!1;continue}}else{var c=Object.prototype.toString.call(s),D=Object.prototype.toString.call(r);if(c===D&&(D==="[object Object]"||D==="[object Array]")){c=[Gy+"  ".repeat(a)+i,D==="[object Array]"?"Array":""],t.push(c),D=t.length,og(s,r,t,a+1)?D===t.length&&(c[1]="Referentially unequal but deeply equal objects. Consider memoization."):l=!1;continue}}else if(typeof s=="function"&&typeof r=="function"&&s.name===r.name&&s.length===r.length&&(c=Function.prototype.toString.call(s),D=Function.prototype.toString.call(r),c===D)){s=r.name===""?"() => {}":r.name+"() {}",t.push([Gy+"  ".repeat(a)+i,s+" Referentially unequal function closure. Consider memoization."]);continue}}Sa(i,s,t,a,Wc),Sa(i,r,t,a,Kc),l=!1}}else t.push([Kc+"  ".repeat(a)+i,"…"]),l=!1;o++}return l}function ft(e){nn=e&63?"Blocking":e&64?"Gesture":e&4194176?"Transition":e&62914560?"Suspense":e&2080374784?"Idle":"Other"}function Ba(e,n,t,a){Mn&&(ho.start=n,ho.end=t,Al.color="warning",Al.tooltipText=a,Al.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,a,ho)):performance.measure(a,ho),performance.clearMeasures(a))}function Ou(e,n,t){Ba(e,n,t,"Reconnect")}function Ru(e,n,t,a,l){var o=q(e);if(o!==null&&Mn){var i=e.alternate,s=e.actualDuration;if(i===null||i.child!==e.child)for(var r=e.child;r!==null;r=r.sibling)s-=r.actualDuration;s=.5>s?a?"tertiary-light":"primary-light":10>s?a?"tertiary":"primary":100>s?a?"tertiary-dark":"primary-dark":"error";var c=e.memoizedProps;a=e._debugTask,c!==null&&i!==null&&i.memoizedProps!==c?(r=[$3],c=og(i.memoizedProps,c,r,0),1<r.length?(c&&!mo&&(i.lanes&l)===0&&100<e.actualDuration?(mo=!0,r[0]=P3,Al.color="warning",Al.tooltipText=Ly):(Al.color=s,Al.tooltipText=o),Al.properties=r,ho.start=n,ho.end=t,e="​"+o,a!=null?a.run(performance.measure.bind(performance,e,ho)):performance.measure(e,ho),performance.clearMeasures(e)):a!=null?a.run(console.timeStamp.bind(console,o,n,t,zt,void 0,s)):console.timeStamp(o,n,t,zt,void 0,s)):a!=null?a.run(console.timeStamp.bind(console,o,n,t,zt,void 0,s)):console.timeStamp(o,n,t,zt,void 0,s)}}function mf(e,n,t,a){if(Mn){var l=q(e);if(l!==null){for(var o=null,i=[],s=0;s<a.length;s++){var r=a[s];o==null&&r.source!==null&&(o=r.source._debugTask),r=r.value,i.push(["Error",typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r)])}e.key!==null&&Sa("key",e.key,i,0,""),e.memoizedProps!==null&&pf(e.memoizedProps,i,0,""),o==null&&(o=e._debugTask),e={start:n,end:t,detail:{devtools:{color:"error",track:zt,tooltipText:e.tag===13?"Hydration failed":"Error boundary caught an error",properties:i}}},l="​"+l,o?o.run(performance.measure.bind(performance,l,e)):performance.measure(l,e),performance.clearMeasures(l)}}}function Ha(e,n,t,a,l){if(l!==null){if(Mn){var o=q(e);if(o!==null){a=[];for(var i=0;i<l.length;i++){var s=l[i].value;a.push(["Error",typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s)])}e.key!==null&&Sa("key",e.key,a,0,""),e.memoizedProps!==null&&pf(e.memoizedProps,a,0,""),n={start:n,end:t,detail:{devtools:{color:"error",track:zt,tooltipText:"A lifecycle or effect errored",properties:a}}},e=e._debugTask,t="​"+o,e?e.run(performance.measure.bind(performance,t,n)):performance.measure(t,n),performance.clearMeasures(t)}}}else o=q(e),o!==null&&Mn&&(l=1>a?"secondary-light":100>a?"secondary":500>a?"secondary-dark":"error",(e=e._debugTask)?e.run(console.timeStamp.bind(console,o,n,t,zt,void 0,l)):console.timeStamp(o,n,t,zt,void 0,l))}function ig(e,n,t,a){!Mn||n<=e||(t=(t&738197653)===t?"tertiary-dark":"primary-dark",a?a.run(console.timeStamp.bind(console,"Prewarm",e,n,nn,Ke,t)):console.timeStamp("Prewarm",e,n,nn,Ke,t))}function sg(e,n,t,a){!Mn||n<=e||(t=(t&738197653)===t?"tertiary-dark":"primary-dark",a?a.run(console.timeStamp.bind(console,"Suspended",e,n,nn,Ke,t)):console.timeStamp("Suspended",e,n,nn,Ke,t))}function hf(e,n,t,a){!Mn||n<=e||(a?a.run(console.timeStamp.bind(console,"Errored",e,n,nn,Ke,"error")):console.timeStamp("Errored",e,n,nn,Ke,"error"))}function BN(e,n,t,a){!Mn||n<=e||(a?a.run(console.timeStamp.bind(console,t,e,n,nn,Ke,"secondary-light")):console.timeStamp(t,e,n,nn,Ke,"secondary-light"))}function rg(e,n,t,a,l){if(Mn&&!(n<=e)){for(var o=[],i=0;i<t.length;i++){var s=t[i].value;o.push(["Error",typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s)])}e={start:e,end:n,detail:{devtools:{color:"error",track:nn,trackGroup:Ke,tooltipText:a?"Remaining Effects Errored":"Commit Errored",properties:o}}},l?l.run(performance.measure.bind(performance,"Errored",e)):performance.measure("Errored",e),performance.clearMeasures("Errored")}}function ug(e,n,t,a,l){t!==null?rg(e,n,t,!1,l):!Mn||n<=e||(l?l.run(console.timeStamp.bind(console,a?"Commit Interrupted View Transition":"Commit",e,n,nn,Ke,a?"error":"secondary-dark")):console.timeStamp(a?"Commit Interrupted View Transition":"Commit",e,n,nn,Ke,a?"error":"secondary-dark"))}function Ql(e,n,t){!Mn||n<=e||(t?t.run(console.timeStamp.bind(console,"Animating",e,n,nn,Ke,"secondary-dark")):console.timeStamp("Animating",e,n,nn,Ke,"secondary-dark"))}function ju(){for(var e=us,n=lh=us=0;n<e;){var t=fa[n];fa[n++]=null;var a=fa[n];fa[n++]=null;var l=fa[n];fa[n++]=null;var o=fa[n];if(fa[n++]=null,a!==null&&l!==null){var i=a.pending;i===null?l.next=l:(l.next=i.next,i.next=l),a.pending=l}o!==0&&cg(t,l,o)}}function zu(e,n,t,a){fa[us++]=e,fa[us++]=n,fa[us++]=t,fa[us++]=a,lh|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function gf(e,n,t,a){return zu(e,n,t,a),ku(e)}function pt(e,n){return zu(e,null,null,n),ku(e)}function cg(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&jr||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&n!==null&&(l=31-wt(t),e=o.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),o):null}function ku(e){if(cu>cE)throw gi=cu=0,du=Rd=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");gi>dE&&(gi=0,du=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),e.alternate===null&&(e.flags&4098)!==0&&kv(e);for(var n=e,t=n.return;t!==null;)n.alternate===null&&(n.flags&4098)!==0&&kv(e),n=t,t=n.return;return n.tag===3?n.stateNode:null}function Oi(e){if(Rl===null)return e;var n=Rl(e);return n===void 0?e:n.current}function dg(e,n){if(Rl===null)return!1;var t=Rl,a=e.elementType;n=n.type;var l=!1,o=typeof n=="object"&&n!==null?n.$$typeof:null;switch(e.tag){case 1:typeof n=="function"&&(l=!0);break;case 0:(typeof n=="function"||o===Rt)&&(l=!0);break;case 11:(o===Uc||o===Rt)&&(l=!0);break;case 14:case 15:(o===Vc||o===Rt)&&(l=!0);break;default:return!1}return!!(l&&(e=t(a),e!==void 0&&e===t(n)))}function fg(e){Rl!==null&&typeof WeakSet=="function"&&(cs===null&&(cs=new WeakSet),cs.add(e))}function pg(e,n,t){do{var a=e,l=a.alternate,o=a.child,i=a.sibling,s=a.tag,r=a.type,c=a.elementType,D=null;switch(a=null,s){case 0:case 1:D=r;break;case 15:D=r,a=c;break;case 14:a=c;break;case 11:D=r.render,a=c}if(Rl===null)throw Error("Expected resolveFamily to be set during hot reload.");var V=Rl;if(r=c=!1,D!==null&&(D=V(D),D!==void 0&&(t.has(D)?r=!0:n.has(D)&&(s===1?r=!0:c=!0))),r||a===null||(s=V(a),s!==void 0&&t.has(s)?r=!0:typeof a=="object"&&a.$$typeof===Rt&&(s=a._payload,s._status===1&&(s=V(s._result.default),s!==void 0&&t.has(s)&&(r=!0)))),cs!==null&&(cs.has(e)||l!==null&&cs.has(l))&&(r=!0),r&&(e._debugNeedsRemount=!0),(r||c)&&(l=pt(e,2),l!==null&&jn(l,e,2)),o===null||r||pg(o,n,t),i===null)break;e=i}while(!0)}function HN(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Yy||typeof Object.preventExtensions!="function"||Object.preventExtensions(this)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _l(e,n){var t=e.alternate;switch(t===null?(t=S(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t._debugOwner=e._debugOwner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t._debugHookTypes=e._debugHookTypes,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null,t.actualDuration=-0,t.actualStartTime=-1.1),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext,_debugThenableState:n._debugThenableState},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t.selfBaseDuration=e.selfBaseDuration,t.treeBaseDuration=e.treeBaseDuration,t._debugInfo=e._debugInfo,t._debugNeedsRemount=e._debugNeedsRemount,t.tag){case 0:case 15:case 14:case 1:case 11:t.type=Oi(e.type)}return t}function mg(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext,_debugThenableState:n._debugThenableState},e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration),e}function vf(e,n,t,a,l,o){var i=0,s=Oi(e);if(typeof s=="function")bf(s)&&(i=1);else if(typeof s=="string")i=Ce(),i=xS(e,t,i)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case Cm:return n=S(31,t,n,l),n.elementType=Cm,n.lanes=o,n;case Wi:return Bo(t.children,l,o,n);case Ic:i=8,l|=ht,l|=Ca;break;case Em:return e=t,a=l,typeof e.id!="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),n=S(12,e,n,a|Qe),n.elementType=Em,n.lanes=o,n.stateNode={effectDuration:0,passiveEffectDuration:0},n;case Dm:return n=S(13,t,n,l),n.elementType=Dm,n.lanes=o,n;case Tm:return n=S(19,t,n,l),n.elementType=Tm,n.lanes=o,n;case jS:case Am:return e=l|qy,n=S(30,t,n,e),n.elementType=Am,n.lanes=o,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Ta:i=10;break e;case Mm:i=9;break e;case Uc:i=11;break e;case Vc:i=14;break e;case Rt:i=16,s=null;break e}t="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(t+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?s="null":Xn(e)?s="array":e!==void 0&&e.$$typeof===Ka?(s="<"+(oe(e.type)||"Unknown")+" />",t=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,(i=a?De(a):null)&&(t+=`

Check the render method of \``+i+"`."),i=29,t=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(s+"."+t)),s=null}return n=S(i,t,n,l),n.elementType=e,n.type=s,n.lanes=o,n._debugOwner=a,n}function Iu(e,n,t){return n=vf(e.type,e.key,e.props,e._owner,n,t),n._debugOwner=e._owner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n}function Bo(e,n,t,a){return e=S(7,e,a,n),e.lanes=t,e}function yf(e,n,t){return e=S(6,e,null,n),e.lanes=t,e}function hg(e){var n=S(18,null,null,Be);return n.stateNode=e,n}function xf(e,n,t){return n=S(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yt(e,n){if(typeof e=="object"&&e!==null){var t=oh.get(e);return t!==void 0?t:(n={value:e,source:n,stack:T(n)},oh.set(e,n),n)}return{value:e,source:n,stack:T(n)}}function Nl(e,n){$l(),ds[fs++]=zr,ds[fs++]=ed,ed=e,zr=n}function gg(e,n,t){$l(),pa[ma++]=jl,pa[ma++]=zl,pa[ma++]=Ko,Ko=e;var a=jl;e=zl;var l=32-wt(a)-1;a&=~(1<<l),t+=1;var o=32-wt(n)+l;if(30<o){var i=l-l%5;o=(a&(1<<i)-1).toString(32),a>>=i,l-=i,jl=1<<32-wt(n)+l|t<<l|a,zl=o+e}else jl=1<<o|t<<l|a,zl=e}function Uu(e){$l(),e.return!==null&&(Nl(e,1),gg(e,1,0))}function _f(e){for(;e===ed;)ed=ds[--fs],ds[fs]=null,zr=ds[--fs],ds[fs]=null;for(;e===Ko;)Ko=pa[--ma],pa[ma]=null,zl=pa[--ma],pa[ma]=null,jl=pa[--ma],pa[ma]=null}function bg(){return $l(),Ko!==null?{id:jl,overflow:zl}:null}function vg(e,n){$l(),pa[ma++]=jl,pa[ma++]=zl,pa[ma++]=Ko,jl=n.id,zl=n.overflow,Ko=e}function $l(){$e||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Ho(e,n){if(e.return===null){if(Wt===null)Wt={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:n};else{if(Wt.fiber!==e)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Wt.distanceFromLeaf>n&&(Wt.distanceFromLeaf=n)}return Wt}var t=Ho(e.return,n+1).children;return 0<t.length&&t[t.length-1].fiber===e?(t=t[t.length-1],t.distanceFromLeaf>n&&(t.distanceFromLeaf=n),t):(n={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:n},t.push(n),n)}function yg(){$e&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function Vu(e,n){ol||(e=Ho(e,0),e.serverProps=null,n!==null&&(n=b1(n),e.serverTail.push(n)))}function Pl(e){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,t="",a=Wt;throw a!==null&&(Wt=null,t=sf(a)),Qs(Yt(Error("Hydration failed because the server rendered "+(n?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+t),e)),ih}function xg(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[st]=e,n[St]=a,nm(t,a),t){case"dialog":ln("cancel",n),ln("close",n);break;case"iframe":case"object":case"embed":ln("load",n);break;case"video":case"audio":for(t=0;t<fu.length;t++)ln(fu[t],n);break;case"source":ln("error",n);break;case"img":case"image":case"link":ln("error",n),ln("load",n);break;case"details":ln("toggle",n);break;case"input":Di("input",a),ln("invalid",n),S0(n,a),E0(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"option":M0(n,a);break;case"select":Di("select",a),ln("invalid",n),T0(n,a);break;case"textarea":Di("textarea",a),ln("invalid",n),C0(n,a),O0(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Qv(n.textContent,t)?(a.popover!=null&&(ln("beforetoggle",n),ln("toggle",n)),a.onScroll!=null&&ln("scroll",n),a.onScrollEnd!=null&&ln("scrollend",n),a.onClick!=null&&(n.onclick=Va),n=!0):n=!1,n||Pl(e,!0)}function Bu(e){for(Kn=e.return;Kn;)switch(Kn.tag){case 5:case 31:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:Kn=Kn.return}}function Ri(e){if(e!==Kn)return!1;if(!$e)return Bu(e),$e=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||im(e.type,e.memoizedProps)),t=!t),t&&En){for(t=En;t;){var a=Ho(e,0),l=b1(t);a.serverTail.push(l),t=l.type==="Suspense"?fm(t):Ft(t.nextSibling)}Pl(e)}if(Bu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");En=fm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");En=fm(e)}else n===27?(n=En,so(e.type)?(e=t0,t0=null,En=e):En=n):En=Kn?Ft(e.stateNode.nextSibling):null;return!0}function Go(){En=Kn=null,ol=$e=!1}function Nf(){var e=bo;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),bo=null),e}function Qs(e){bo===null?bo=[e]:bo.push(e)}function wf(){var e=Wt;if(e!==null){Wt=null;for(var n=sf(e);0<e.children.length;)e=e.children[0];B(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",n)})}}function Hu(){ps=nd=null,ms=!1}function Fl(e,n,t){ue(sh,n._currentValue,e),n._currentValue=t,ue(rh,n._currentRenderer,e),n._currentRenderer!==void 0&&n._currentRenderer!==null&&n._currentRenderer!==Xy&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer=Xy}function wl(e,n){e._currentValue=sh.current;var t=rh.current;pe(rh,n),e._currentRenderer=t,pe(sh,n)}function Gu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}e!==t&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function Sf(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var i=l.child;o=o.firstContext;e:for(;o!==null;){var s=o;o=l;for(var r=0;r<n.length;r++)if(s.context===n[r]){o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Gu(o.return,t,e),a||(i=null);break e}o=s.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Gu(i,t,e),i=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),Gu(l.return,t,e),i=l.child,i=i!==null?i.sibling:null):i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function Lo(e,n,t,a){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error("Should have a current fiber. This is a bug in React.");if(i=i.memoizedProps,i!==null){var s=l.type;Mt(l.pendingProps.value,i.value)||(e!==null?e.push(s):e=[s])}}else if(l===Bc.current){if(i=l.alternate,i===null)throw Error("Should have a current fiber. This is a bug in React.");i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Is):e=[Is])}l=l.return}return e!==null&&Sf(n,e,t,a),n.flags|=262144,e!==null}function Lu(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qo(e){nd=e,ps=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return ms&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),_g(nd,e)}function qu(e,n){return nd===null&&qo(e),_g(e,n)}function _g(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ps===null){if(e===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");ps=n,e.dependencies={lanes:0,firstContext:n,_debugThenableState:null},e.flags|=524288}else ps=ps.next=n;return t}function Ef(){return{controller:new J3,data:new Map,refCount:0}}function Yo(e){e.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),e.refCount++}function $s(e){e.refCount--,0>e.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),e.refCount===0&&W3(K3,function(){e.controller.abort()})}function Ng(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}function GN(e){var n=e.transitionTypes;return e.transitionTypes=null,n}function Ga(e,n,t){(e&127)!==0?0>il&&(il=Vn(),Ur=td(n),uh=n,t!=null&&(ch=q(t)),(rn&($n|na))!==at&&(zn=!0,yo=Ir),e=gr(),n=hr(),e!==hs||n!==Vr?hs=-1.1:n!==null&&(yo=Ir),ni=e,Vr=n):(e&4194048)!==0&&0>ga&&(ga=Vn(),Br=td(n),Qy=n,t!=null&&($y=q(t)),0>Ul)&&(e=gr(),n=hr(),(e!==_o||n!==ti)&&(_o=-1.1),xo=e,ti=n)}function LN(e){if(0>il){il=Vn(),Ur=e._debugTask!=null?e._debugTask:null,(rn&($n|na))!==at&&(yo=Ir);var n=gr(),t=hr();n!==hs||t!==Vr?hs=-1.1:t!==null&&(yo=Ir),ni=n,Vr=t}0>ga&&(ga=Vn(),Br=e._debugTask!=null?e._debugTask:null,0>Ul)&&(e=gr(),n=hr(),(e!==_o||n!==ti)&&(_o=-1.1),xo=e,ti=n)}function Sl(){var e=ei;return ei=0,e}function Yu(e){var n=ei;return ei=e,n}function Ps(e){var n=ei;return ei+=e,n}function Zu(){Ue=Ie=-1.1}function Zt(){var e=Ie;return Ie=-1.1,e}function Xt(e){0<=e&&(Ie=e)}function La(){var e=Cn;return Cn=-0,e}function qa(e){0<=e&&(Cn=e)}function Ya(){var e=Tn;return Tn=null,e}function Za(){var e=zn;return zn=!1,e}function Mf(e){Dt=Vn(),0>e.actualStartTime&&(e.actualStartTime=Dt)}function Df(e){if(0<=Dt){var n=Vn()-Dt;e.actualDuration+=n,e.selfBaseDuration=n,Dt=-1}}function wg(e){if(0<=Dt){var n=Vn()-Dt;e.actualDuration+=n,Dt=-1}}function Xa(){if(0<=Dt){var e=Vn(),n=e-Dt;Dt=-1,ei+=n,Cn+=n,Ue=e}}function Sg(e){Tn===null&&(Tn=[]),Tn.push(e),Il===null&&(Il=[]),Il.push(e)}function Qa(){Dt=Vn(),0>Ie&&(Ie=Dt)}function Fs(e){for(var n=e.child;n;)e.actualDuration+=n.actualDuration,n=n.sibling}function qN(e,n){if(Gr===null){var t=Gr=[];mh=0,No=Jp(),gs={status:"pending",value:void 0,then:function(a){t.push(a)}}}return mh++,n.then(Eg,Eg),n}function Eg(){if(--mh===0&&(-1<ga||(Ul=-1.1),kr=null,Gr!==null)){gs!==null&&(gs.status="fulfilled");var e=Gr;Gr=null,No=0,gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function YN(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}function Tf(){var e=li.current;return e!==null?e:Sn.pooledCache}function Xu(e,n){n===null?ue(li,li.current,e):ue(li,n.pool,e)}function Mg(){var e=Tf();return e===null?null:{parent:Ln._currentValue,pool:e}}function Dg(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function Tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cg(e,n,t,a){ae.actQueue!==null&&(ae.didUsePromise=!0);var l=e.thenables;if(t=l[t],t===void 0?l.push(n):t!==n&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),n.then(Va,Va),n=t),n._debugInfo===void 0){e=performance.now(),l=n.displayName;var o={name:typeof l=="string"?l:"Promise",start:e,end:e,value:n};n._debugInfo=[{awaited:o}],n.status!=="fulfilled"&&n.status!=="rejected"&&(e=function(){o.end=performance.now()},n.then(e,e))}switch(n.status){case"fulfilled":return n.value;case"rejected":throw a=n.reason,Og(a),a===void 0&&!("reason"in n)?Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`."):a;default:if(typeof n.status=="string")n.then(Va,Va);else{if(e=Sn,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var s=n;s.status="fulfilled",s.value=i}},function(i){if(n.status==="pending"){var s=n;s.status="rejected",s.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw a=n.reason,Og(a),a}throw si=n,$r=!0,vh||a===null||a.alternate!==null||(ii=a,dd=Error("This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use")),bs}}function Jl(e){try{return lE(e)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(si=n,$r=!0,bs):n}}function Ag(){if(si===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var e=si;return si=null,$r=!1,e}function Og(e){if(e===bs||e===ud)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Rg(e,n){return e===n?!0:e.tag!==n.tag||e.type!==n.type||e.key!==n.key||e.index!==n.index||e.tag===3&&e.stateNode!==n.stateNode||e.return===null||n.return===null?!1:Rg(e.return,n.return)}function yt(e){var n=en;return e!=null&&(en=n===null?e:n.concat(e)),n}function Cf(){var e=en;if(e!=null){for(var n=e.length-1;0<=n;n--)if(e[n].name!=null){var t=e[n].debugTask;if(t!=null)return t}}return null}function Qu(e,n,t){for(var a=Object.keys(e.props),l=0;l<a.length;l++){var o=a[l];if(o!=="children"&&o!=="key"&&o!=="ref"){n===null&&(n=Iu(e,t.mode,0),n._debugInfo=en,n.return=t),B(n,function(i){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.",i)},o);break}}}function $u(e){var n=Pr;return Pr+=1,vs===null&&(vs=Dg()),Cg(vs,e,n,null)}function Wl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function jg(e,n){throw n.$$typeof===RS?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead."))}function Pu(e,n){var t=Cf();t!==null?t.run(jg.bind(null,e,n)):jg(e,n)}function zg(e,n){var t=q(e)||"Component";fx[t]||(fx[t]=!0,n=n.displayName||n.name||"Component",e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,n,n,n):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,n,n,t,n,t))}function Fu(e,n){var t=Cf();t!==null?t.run(zg.bind(null,e,n)):zg(e,n)}function kg(e,n){var t=q(e)||"Component";px[t]||(px[t]=!0,n=String(n),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,n):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,t,n,t))}function Ju(e,n){var t=Cf();t!==null?t.run(kg.bind(null,e,n)):kg(e,n)}function Ig(e){function n(j,z){if(e){var H=j.deletions;H===null?(j.deletions=[z],j.flags|=16):H.push(z)}}function t(j,z){if(!e)return null;for(;z!==null;)n(j,z),z=z.sibling;return null}function a(j){for(var z=new Map;j!==null;)j.key===null?z.set(j.index,j):z.set(j.key,j),j=j.sibling;return z}function l(j,z){return j=_l(j,z),j.index=0,j.sibling=null,j}function o(j,z,H){return j.index=H,e?(H=j.alternate,H!==null?(H=H.index,H<z?(j.flags|=2,z):H):(j.flags|=134217730,z)):(j.flags|=1048576,z)}function i(j){return e&&j.alternate===null&&(j.flags|=134217730),j}function s(j,z,H,ee){return z===null||z.tag!==6?(z=yf(H,j.mode,ee),z.return=j,z._debugOwner=j,z._debugTask=j._debugTask,z._debugInfo=en,z):(z=l(z,H),z.return=j,z._debugInfo=en,z)}function r(j,z,H,ee){var _e=H.type;return _e===Wi?(z=D(j,z,H.props.children,ee,H.key),Wl(z,H),Qu(H,z,j),z):z!==null&&(z.elementType===_e||dg(z,H)||typeof _e=="object"&&_e!==null&&_e.$$typeof===Rt&&Jl(_e)===z.type)?(z=l(z,H.props),Wl(z,H),z.return=j,z._debugOwner=H._owner,z._debugInfo=en,z):(z=Iu(H,j.mode,ee),Wl(z,H),z.return=j,z._debugInfo=en,z)}function c(j,z,H,ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==H.containerInfo||z.stateNode.implementation!==H.implementation?(z=xf(H,j.mode,ee),z.return=j,z._debugInfo=en,z):(z=l(z,H.children||[]),z.return=j,z._debugInfo=en,z)}function D(j,z,H,ee,_e){return z===null||z.tag!==7?(z=Bo(H,j.mode,ee,_e),z.return=j,z._debugOwner=j,z._debugTask=j._debugTask,z._debugInfo=en,z):(z=l(z,H),z.return=j,z._debugInfo=en,z)}function V(j,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=yf(""+z,j.mode,H),z.return=j,z._debugOwner=j,z._debugTask=j._debugTask,z._debugInfo=en,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ka:return H=Iu(z,j.mode,H),Wl(H,z),H.return=j,j=yt(z._debugInfo),H._debugInfo=en,en=j,H;case Ji:return z=xf(z,j.mode,H),z.return=j,z._debugInfo=en,z;case Rt:var ee=yt(z._debugInfo);return z=Jl(z),j=V(j,z,H),en=ee,j}if(Xn(z)||Ne(z))return H=Bo(z,j.mode,H,null),H.return=j,H._debugOwner=j,H._debugTask=j._debugTask,j=yt(z._debugInfo),H._debugInfo=en,en=j,H;if(typeof z.then=="function")return ee=yt(z._debugInfo),j=V(j,$u(z),H),en=ee,j;if(z.$$typeof===Ta)return V(j,qu(j,z),H);Pu(j,z)}return typeof z=="function"&&Fu(j,z),typeof z=="symbol"&&Ju(j,z),null}function U(j,z,H,ee){var _e=z!==null?z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return _e!==null?null:s(j,z,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Ka:return H.key===_e?(_e=yt(H._debugInfo),j=r(j,z,H,ee),en=_e,j):null;case Ji:return H.key===_e?c(j,z,H,ee):null;case Rt:return _e=yt(H._debugInfo),H=Jl(H),j=U(j,z,H,ee),en=_e,j}if(Xn(H)||Ne(H))return _e!==null?null:(_e=yt(H._debugInfo),j=D(j,z,H,ee,null),en=_e,j);if(typeof H.then=="function")return _e=yt(H._debugInfo),j=U(j,z,$u(H),ee),en=_e,j;if(H.$$typeof===Ta)return U(j,z,qu(j,H),ee);Pu(j,H)}return typeof H=="function"&&Fu(j,H),typeof H=="symbol"&&Ju(j,H),null}function Y(j,z,H,ee,_e){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return j=j.get(H)||null,s(z,j,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ka:return H=j.get(ee.key===null?H:ee.key)||null,j=yt(ee._debugInfo),z=r(z,H,ee,_e),en=j,z;case Ji:return j=j.get(ee.key===null?H:ee.key)||null,c(z,j,ee,_e);case Rt:var Ve=yt(ee._debugInfo);return ee=Jl(ee),z=Y(j,z,H,ee,_e),en=Ve,z}if(Xn(ee)||Ne(ee))return H=j.get(H)||null,j=yt(ee._debugInfo),z=D(z,H,ee,_e,null),en=j,z;if(typeof ee.then=="function")return Ve=yt(ee._debugInfo),z=Y(j,z,H,$u(ee),_e),en=Ve,z;if(ee.$$typeof===Ta)return Y(j,z,H,qu(z,ee),_e);Pu(z,ee)}return typeof ee=="function"&&Fu(z,ee),typeof ee=="symbol"&&Ju(z,ee),null}function me(j,z,H,ee){if(typeof H!="object"||H===null)return ee;switch(H.$$typeof){case Ka:case Ji:I(j,z,H);var _e=H.key;if(typeof _e!="string")break;if(ee===null){ee=new Set,ee.add(_e);break}if(!ee.has(_e)){ee.add(_e);break}B(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",_e)});break;case Rt:H=Jl(H),me(j,z,H,ee)}return ee}function Me(j,z,H,ee){for(var _e=null,Ve=null,je=null,Ye=z,Je=z=0,Rn=null;Ye!==null&&Je<H.length;Je++){Ye.index>Je?(Rn=Ye,Ye=null):Rn=Ye.sibling;var _n=U(j,Ye,H[Je],ee);if(_n===null){Ye===null&&(Ye=Rn);break}_e=me(j,_n,H[Je],_e),e&&Ye&&_n.alternate===null&&n(j,Ye),z=o(_n,z,Je),je===null?Ve=_n:je.sibling=_n,je=_n,Ye=Rn}if(Je===H.length)return t(j,Ye),$e&&Nl(j,Je),Ve;if(Ye===null){for(;Je<H.length;Je++)Ye=V(j,H[Je],ee),Ye!==null&&(_e=me(j,Ye,H[Je],_e),z=o(Ye,z,Je),je===null?Ve=Ye:je.sibling=Ye,je=Ye);return $e&&Nl(j,Je),Ve}for(Ye=a(Ye);Je<H.length;Je++)Rn=Y(Ye,j,Je,H[Je],ee),Rn!==null&&(_e=me(j,Rn,H[Je],_e),e&&(_n=Rn.alternate,_n!==null&&Ye.delete(_n.key===null?Je:_n.key)),z=o(Rn,z,Je),je===null?Ve=Rn:je.sibling=Rn,je=Rn);return e&&Ye.forEach(function(Yl){return n(j,Yl)}),$e&&Nl(j,Je),Ve}function Re(j,z,H,ee){if(H==null)throw Error("An iterable object provided no iterator.");for(var _e=null,Ve=null,je=z,Ye=z=0,Je=null,Rn=null,_n=H.next();je!==null&&!_n.done;Ye++,_n=H.next()){je.index>Ye?(Je=je,je=null):Je=je.sibling;var Yl=U(j,je,_n.value,ee);if(Yl===null){je===null&&(je=Je);break}Rn=me(j,Yl,_n.value,Rn),e&&je&&Yl.alternate===null&&n(j,je),z=o(Yl,z,Ye),Ve===null?_e=Yl:Ve.sibling=Yl,Ve=Yl,je=Je}if(_n.done)return t(j,je),$e&&Nl(j,Ye),_e;if(je===null){for(;!_n.done;Ye++,_n=H.next())je=V(j,_n.value,ee),je!==null&&(Rn=me(j,je,_n.value,Rn),z=o(je,z,Ye),Ve===null?_e=je:Ve.sibling=je,Ve=je);return $e&&Nl(j,Ye),_e}for(je=a(je);!_n.done;Ye++,_n=H.next())Je=Y(je,j,Ye,_n.value,ee),Je!==null&&(Rn=me(j,Je,_n.value,Rn),e&&(_n=Je.alternate,_n!==null&&je.delete(_n.key===null?Ye:_n.key)),z=o(Je,z,Ye),Ve===null?_e=Je:Ve.sibling=Je,Ve=Je);return e&&je.forEach(function(CE){return n(j,CE)}),$e&&Nl(j,Ye),_e}function Ze(j,z,H,ee){if(typeof H=="object"&&H!==null&&H.type===Wi&&H.key===null&&H.props.ref===void 0&&(Qu(H,null,j),H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case Ka:var _e=yt(H._debugInfo);e:{for(var Ve=H.key;z!==null;){if(z.key===Ve){if(Ve=H.type,Ve===Wi){if(z.tag===7){t(j,z.sibling),ee=l(z,H.props.children),Wl(ee,H),ee.return=j,ee._debugOwner=H._owner,ee._debugInfo=en,Qu(H,ee,j),j=ee;break e}}else if(z.elementType===Ve||dg(z,H)||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Rt&&Jl(Ve)===z.type){t(j,z.sibling),ee=l(z,H.props),Wl(ee,H),ee.return=j,ee._debugOwner=H._owner,ee._debugInfo=en,j=ee;break e}t(j,z);break}else n(j,z);z=z.sibling}H.type===Wi?(ee=Bo(H.props.children,j.mode,ee,H.key),Wl(ee,H),ee.return=j,ee._debugOwner=j,ee._debugTask=j._debugTask,ee._debugInfo=en,Qu(H,ee,j),j=ee):(ee=Iu(H,j.mode,ee),Wl(ee,H),ee.return=j,ee._debugInfo=en,j=ee)}return j=i(j),en=_e,j;case Ji:e:{for(_e=H,H=_e.key;z!==null;){if(z.key===H)if(z.tag===4&&z.stateNode.containerInfo===_e.containerInfo&&z.stateNode.implementation===_e.implementation){t(j,z.sibling),ee=l(z,_e.children||[]),ee.return=j,j=ee;break e}else{t(j,z);break}else n(j,z);z=z.sibling}ee=xf(_e,j.mode,ee),ee.return=j,j=ee}return i(j);case Rt:return _e=yt(H._debugInfo),H=Jl(H),j=Ze(j,z,H,ee),en=_e,j}if(Xn(H))return Me(j,z,H,ee);if(Ne(H)){if(_e=H,H=Ne(_e),typeof H!="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");return Ve=H.call(_e),Ve===_e?(j.tag!==0||Object.prototype.toString.call(j.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Ve)!=="[object Generator]")&&(cx||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),cx=!0):_e.entries!==H||yh||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),yh=!0),Re(j,z,Ve,ee)}if(typeof H.then=="function")return _e=yt(H._debugInfo),j=Ze(j,z,$u(H),ee),en=_e,j;if(H.$$typeof===Ta)return Ze(j,z,qu(j,H),ee);Pu(j,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(_e=""+H,z!==null&&z.tag===6?(t(j,z.sibling),ee=l(z,_e),ee.return=j,j=ee):(t(j,z),ee=yf(_e,j.mode,ee),ee.return=j,ee._debugOwner=j,ee._debugTask=j._debugTask,ee._debugInfo=en,j=ee),i(j)):(typeof H=="function"&&Fu(j,H),typeof H=="symbol"&&Ju(j,H),t(j,z))}return function(j,z,H,ee){var _e=en;en=null;try{Pr=0;var Ve=Ze(j,z,H,ee);return vs=null,Ve}catch(Rn){if(Rn===bs||Rn===ud)throw Rn;var je=S(29,Rn,null,j.mode);je.lanes=ee,je.return=j;var Ye=je._debugInfo=en;if(je._debugOwner=j._debugOwner,je._debugTask=j._debugTask,Ye!=null){for(var Je=Ye.length-1;0<=Je;Je--)if(typeof Ye[Je].stack=="string"){je._debugOwner=Ye[Je],je._debugTask=Ye[Je].debugTask;break}}return je}finally{en=_e}}}function Ug(e,n){var t=Xn(e);return e=!t&&typeof Ne(e)=="function",t||e?(t=t?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",t,n,t),!1):!0}function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kl(e){return{lane:e,tag:hx,payload:null,callback:null,next:null}}function eo(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,_h===a&&!vx){var l=q(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,l),vx=!0}return(rn&$n)!==at?(l=a.pending,l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=ku(e),cg(e,null,t),n):(zu(e,a,n,t),ku(e))}function Js(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xe(e,t)}}function Wu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ws(){if(Nh){var e=gs;if(e!==null)throw e}}function Ks(e,n,t,a){Nh=!1;var l=e.updateQueue;wo=!1,_h=l.shared;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var r=s,c=r.next;r.next=null,i===null?o=c:i.next=c,i=r;var D=e.alternate;D!==null&&(D=D.updateQueue,s=D.lastBaseUpdate,s!==i&&(s===null?D.firstBaseUpdate=c:s.next=c,D.lastBaseUpdate=r))}if(o!==null){var V=l.baseState;i=0,D=c=r=null,s=o;do{var U=s.lane&-536870913,Y=U!==s.lane;if(Y?(Le&U)===U:(a&U)===U){U!==0&&U===No&&(Nh=!0),D!==null&&(D=D.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{U=e;var me=s,Me=n,Re=t;switch(me.tag){case gx:if(me=me.payload,typeof me=="function"){ms=!0;var Ze=me.call(Re,V,Me);if(U.mode&ht){an(!0);try{me.call(Re,V,Me)}finally{an(!1)}}ms=!1,V=Ze;break e}V=me;break e;case xh:U.flags=U.flags&-65537|128;case hx:if(Ze=me.payload,typeof Ze=="function"){if(ms=!0,me=Ze.call(Re,V,Me),U.mode&ht){an(!0);try{Ze.call(Re,V,Me)}finally{an(!1)}}ms=!1}else me=Ze;if(me==null)break e;V=Xe({},V,me);break e;case bx:wo=!0}}U=s.callback,U!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[U]:Y.push(U))}else Y={lane:U,tag:s.tag,payload:s.payload,callback:s.callback,next:null},D===null?(c=D=Y,r=V):D=D.next=Y,i|=U;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;Y=s,s=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);D===null&&(r=V),l.baseState=r,l.firstBaseUpdate=c,l.lastBaseUpdate=D,o===null&&(l.shared.lanes=0),Mo|=i,e.lanes=i,e.memoizedState=V}_h=null}function Vg(e,n){if(typeof e!="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(n)}function ZN(e,n){var t=e.shared.hiddenCallbacks;if(t!==null)for(e.shared.hiddenCallbacks=null,e=0;e<t.length;e++)Vg(t[e],n)}function Bg(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Vg(t[e],n)}function Hg(e,n){var t=fl;ue(fd,t,e),ue(So,n,e),fl=t|n.baseLanes}function Rf(e){ue(fd,fl,e),ue(So,So.current,e)}function jf(e){fl=fd.current,pe(So,e),pe(fd,e)}function no(e){var n=e.alternate;ue(ut,ut.current&ys,e),ue(rt,e,e),gt===null&&(n===null||So.current!==null||n.memoizedState!==null)&&(gt=e)}function zf(e){ue(ut,ut.current,e),ue(rt,e,e),gt===null&&(gt=e)}function Gg(e){e.tag===22?(ue(ut,ut.current,e),ue(rt,e,e),gt===null&&(gt=e)):to(e)}function to(e){ue(ut,ut.current,e),ue(rt,rt.current,e)}function Qt(e){pe(rt,e),gt===e&&(gt=null),pe(ut,e)}function er(e,n){ue(rt,rt.current,e),ue(ut,n,e)}function kf(e){pe(ut,e),pe(rt,e),gt===e&&(gt=null)}function Ku(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||cm(t)||dm(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function We(){var e=K;va===null?va=[e]:va.push(e)}function ye(){var e=K;if(va!==null&&(Bl++,va[Bl]!==e)){var n=q(He);if(!yx.has(n)&&(yx.add(n),va!==null)){for(var t="",a=0;a<=Bl;a++){var l=va[a],o=a===Bl?e:l;for(l=a+1+". "+l;30>l.length;)l+=" ";l+=o+`
`,t+=l}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,n,t)}}}function ji(e){e==null||Xn(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",K,typeof e)}function ec(){var e=q(He);_x.has(e)||(_x.add(e),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",e))}function In(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function If(e,n){if(Kr)return!1;if(n===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",K),!1;e.length!==n.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,K,"["+n.join(", ")+"]","["+e.join(", ")+"]");for(var t=0;t<n.length&&t<e.length;t++)if(!Mt(e[t],n[t]))return!1;return!0}function Uf(e,n,t,a,l,o){Vl=o,He=n,va=e!==null?e._debugHookTypes:null,Bl=-1,Kr=e!==null&&e.type!==n.type,(Object.prototype.toString.call(t)==="[object AsyncFunction]"||Object.prototype.toString.call(t)==="[object AsyncGeneratorFunction]")&&(o=q(He),wh.has(o)||(wh.add(o),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",o===null?"An unknown Component":"<"+o+">"))),n.memoizedState=null,n.updateQueue=null,n.lanes=0,ae.H=e!==null&&e.memoizedState!==null?Eh:va!==null?Nx:Sh,ui=o=(n.mode&ht)!==Be;var i=hh(t,a,l);if(ui=!1,_s&&(i=Vf(n,t,a,l)),o){an(!0);try{i=Vf(n,t,a,l)}finally{an(!1)}}return Lg(e,n),i}function Lg(e,n){n._debugHookTypes=va,n.dependencies===null?sl!==null&&(n.dependencies={lanes:0,firstContext:null,_debugThenableState:sl}):n.dependencies._debugThenableState=sl;var t=sl;if(ii!==null&&Rg(ii,n)&&(t!==null||dd===null||vh||(vh=!0,console.error(dd)),dd=ii=null),ae.H=hd,t=wn!==null&&wn.next!==null,Vl=0,va=K=qn=wn=He=null,Bl=-1,e!==null&&(e.flags&1206910976)!==(n.flags&1206910976)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),pd=!1,Wr=0,sl=null,t)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");e===null||Bn||(e=e.dependencies,e!==null&&Lu(e)&&(Bn=!0)),$r?($r=!1,e=!0):e=!1,e&&(n=q(n)||"Unknown",xx.has(n)||wh.has(n)||(xx.add(n),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function Vf(e,n,t,a){He=e;var l=0;do{if(_s&&(sl=null),Wr=0,_s=!1,l>=iE)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(l+=1,Kr=!1,qn=wn=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Bl=-1,ae.H=wx,o=hh(n,t,a)}while(_s);return o}function XN(){var e=ae.H,n=e.useState()[0];return n=typeof n.then=="function"?nr(n):n,e=e.useState()[0],(wn!==null?wn.memoizedState:null)!==e&&(He.flags|=1024),n}function Bf(){var e=md!==0;return md=0,e}function Hf(e,n,t){n.updateQueue=e.updateQueue,n.flags=(n.mode&Ca)!==Be?n.flags&-805308421:n.flags&-2053,e.lanes&=~t}function Gf(e){if(pd){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pd=!1}Vl=0,va=qn=wn=He=null,Bl=-1,K=null,_s=!1,Wr=md=0,sl=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qn===null?He.memoizedState=qn=e:qn=qn.next=e,qn}function gn(){if(wn===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=wn.next;var n=qn===null?He.memoizedState:qn.next;if(n!==null)qn=n,wn=e;else{if(e===null)throw He.alternate===null?Error("Update hook called on initial render. This is likely a bug in React. Please file an issue."):Error("Rendered more hooks than during the previous render.");wn=e,e={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},qn===null?He.memoizedState=qn=e:qn=qn.next=e}return qn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nr(e){var n=Wr;return Wr+=1,sl===null&&(sl=Dg()),e=Cg(sl,e,n,He),n=He,(qn===null?n.memoizedState:qn.next)===null&&(n=n.alternate,ae.H=n!==null&&n.memoizedState!==null?Eh:Sh),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nr(e);if(e.$$typeof===kS)return;if(e.$$typeof===Ta)return Dn(e)}throw Error("An unsupported type was passed to use(): "+String(e))}function Zo(e){var n=null,t=He.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=He.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=nc(),He.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0||Kr)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=zS;else t.length!==e&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",t.length,e);return n.index++,t}function Ea(e,n){return typeof n=="function"?n(e):n}function Lf(e,n,t){var a=xt();if(t!==void 0){var l=t(n);if(ui){an(!0);try{t(n)}finally{an(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=JN.bind(null,He,e),[a.memoizedState,e]}function zi(e){var n=gn();return qf(n,wn,e)}function qf(e,n,t){var a=e.queue;if(a===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");a.lastRenderedReducer=t;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}n.baseQueue!==l&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),n.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var s=i=null,r=null,c=n,D=!1;do{var V=c.lane&-536870913;if(V!==c.lane?(Le&V)===V:(Vl&V)===V){var U=c.revertLane;if(U===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),V===No&&(D=!0);else if((Vl&U)===U){c=c.next,U===No&&(D=!0);continue}else V={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(s=r=V,i=o):r=r.next=V,He.lanes|=U,Mo|=U;V=c.action,ui&&t(o,V),o=c.hasEagerState?c.eagerState:t(o,V)}else U={lane:V,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},r===null?(s=r=U,i=o):r=r.next=U,He.lanes|=V,Mo|=V;c=c.next}while(c!==null&&c!==n);if(r===null?i=o:r.next=s,!Mt(o,e.memoizedState)&&(Bn=!0,D&&(t=gs,t!==null)))throw t;e.memoizedState=o,e.baseState=i,e.baseQueue=r,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function tr(e){var n=gn(),t=n.queue;if(t===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Mt(o,n.memoizedState)||(Bn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Yf(e,n,t){var a=He,l=xt();if($e){if(t===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var o=t();xs||o===t()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),xs=!0)}else{if(o=n(),xs||(t=n(),Mt(o,t)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),xs=!0)),Sn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Le&127)!==0||qg(a,n,o)}return l.memoizedState=o,t={value:o,getSnapshot:n},l.queue=t,oc(Zg.bind(null,a,t,e),[e]),a.flags|=2048,Ii(ba|bt,{destroy:void 0},Yg.bind(null,a,t,o,n),null),o}function tc(e,n,t){var a=He,l=gn(),o=$e;if(o){if(t===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");t=t()}else if(t=n(),!xs){var i=n();Mt(t,i)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),xs=!0)}(i=!Mt((wn||l).memoizedState,t))&&(l.memoizedState=t,Bn=!0),l=l.queue;var s=Zg.bind(null,a,l,e);if(Ot(2048,bt,s,[e]),e=l.getSnapshot!==n||i||qn!==null&&(qn.memoizedState.tag&ba)!==Jr,Ii(e?ba|bt:bt,{destroy:void 0},Yg.bind(null,a,l,t,n),null),e){if(a.flags|=2048,Sn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");o||(Vl&127)!==0||qg(a,n,t)}return t}function qg(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=He.updateQueue,n===null?(n=nc(),He.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Yg(e,n,t,a){n.value=t,n.getSnapshot=a,Xg(n)&&Qg(e)}function Zg(e,n,t){return t(function(){Xg(n)&&(Ga(2,"updateSyncExternalStore()",e),Qg(e))})}function Xg(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mt(e,t)}catch{return!0}}function Qg(e){var n=pt(e,2);n!==null&&jn(n,e,2)}function Zf(e){var n=xt();if(typeof e=="function"){var t=e;if(e=t(),ui){an(!0);try{t()}finally{an(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n}function Xf(e){e=Zf(e);var n=e.queue,t=fb.bind(null,He,n);return n.dispatch=t,[e.memoizedState,t]}function Qf(e){var n=xt();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=sp.bind(null,He,!0,t),t.dispatch=n,[e,n]}function $g(e,n){var t=gn();return Pg(t,wn,e,n)}function Pg(e,n,t,a){return e.baseState=t,qf(e,wn,typeof a=="function"?a:Ea)}function Fg(e,n){var t=gn();return wn!==null?Pg(t,wn,e,n):(t.baseState=e,[e,t.queue.dispatch])}function QN(e,n,t,a,l){if(dc(e))throw Error("Cannot update action state while rendering.");if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){o.listeners.push(i)}};ae.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,Jg(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Jg(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var o=ae.T,i={};i.types=o!==null?o.types:null,i._updatedFibers=new Set,ae.T=i;try{var s=t(l,a),r=ae.S;r!==null&&r(i,s),Wg(e,n,s)}catch(c){$f(e,n,c)}finally{o!==null&&i.types!==null&&(o.types!==null&&o.types!==i.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),o.types=i.types),ae.T=o,o===null&&i._updatedFibers&&(e=i._updatedFibers.size,i._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{i=t(l,a),Wg(e,n,i)}catch(c){$f(e,n,c)}}function Wg(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?(ae.asyncTransitions++,t.then(cc,cc),t.then(function(a){Kg(e,n,a)},function(a){return $f(e,n,a)}),n.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):Kg(e,n,t)}function Kg(e,n,t){n.status="fulfilled",n.value=t,eb(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Jg(e,t)))}function $f(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,eb(n),n=n.next;while(n!==a)}e.action=null}function eb(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function nb(e,n){return n}function ki(e,n){if($e){var t=Sn.formState;if(t!==null){e:{var a=He;if($e){if(En){n:{for(var l=En,o=ha;l.nodeType!==8;){if(!o){l=null;break n}if(l=Ft(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o===Fh||o===s_?l:null}if(l){En=Ft(l.nextSibling),a=l.data===Fh;break e}}Pl(a)}a=!1}a&&(n=t[0])}}return t=xt(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nb,lastRenderedState:n},t.queue=a,t=fb.bind(null,He,a),a.dispatch=t,a=Zf(!1),o=sp.bind(null,He,!1,a.queue),a=xt(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=QN.bind(null,He,l,o,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function ac(e){var n=gn();return tb(n,wn,e)}function tb(e,n,t){if(n=qf(e,n,nb)[0],e=zi(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=nr(n)}catch(i){throw i===bs?ud:i}else a=n;n=gn();var l=n.queue,o=l.dispatch;return t!==n.memoizedState&&(He.flags|=2048,Ii(ba|bt,{destroy:void 0},$N.bind(null,l,t),null)),[a,o,e]}function $N(e,n){e.action=n}function lc(e){var n=gn(),t=wn;if(t!==null)return tb(n,t,e);gn(),n=n.memoizedState,t=gn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ii(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=He.updateQueue,n===null&&(n=nc(),He.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Pf(e){var n=xt();return e={current:e},n.memoizedState=e}function Xo(e,n,t,a){var l=xt();He.flags|=e,l.memoizedState=Ii(ba|n,{destroy:void 0},t,a===void 0?null:a)}function Ot(e,n,t,a){var l=gn();a=a===void 0?null:a;var o=l.memoizedState.inst;wn!==null&&a!==null&&If(a,wn.memoizedState.deps)?l.memoizedState=Ii(n,o,t,a):(He.flags|=e,l.memoizedState=Ii(ba|n,o,t,a))}function oc(e,n){(He.mode&Ca)!==Be?Xo(545261568,bt,e,n):Xo(8390656,bt,e,n)}function PN(e){He.flags|=4;var n=He.updateQueue;if(n===null)n=nc(),He.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Ff(e){var n=xt(),t={impl:e};return n.memoizedState=t,function(){if((rn&$n)!==at)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return t.impl.apply(void 0,arguments)}}function ic(e){var n=gn().memoizedState;return PN({ref:n,nextImpl:e}),function(){if((rn&$n)!==at)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return n.impl.apply(void 0,arguments)}}function Jf(e,n){var t=4194308;return(He.mode&Ca)!==Be&&(t|=268435456),Xo(t,Kt,e,n)}function ab(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return n.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(n).join(", ")+"}"),e=e(),n.current=e,function(){n.current=null}}function Wf(e,n,t){typeof n!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",n!==null?typeof n:"null"),t=t!=null?t.concat([e]):null;var a=4194308;(He.mode&Ca)!==Be&&(a|=268435456),Xo(a,Kt,ab.bind(null,n,e),t)}function sc(e,n,t){typeof n!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",n!==null?typeof n:"null"),t=t!=null?t.concat([e]):null,Ot(4,Kt,ab.bind(null,n,e),t)}function Kf(e,n){return xt().memoizedState=[e,n===void 0?null:n],e}function rc(e,n){var t=gn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&If(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function ep(e,n){var t=xt();n=n===void 0?null:n;var a=e();if(ui){an(!0);try{e()}finally{an(!1)}}return t.memoizedState=[a,n],a}function uc(e,n){var t=gn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&If(n,a[1]))return a[0];if(a=e(),ui){an(!0);try{e()}finally{an(!1)}}return t.memoizedState=[a,n],a}function np(e,n){var t=xt();return tp(t,e,n)}function lb(e,n){var t=gn();return ib(t,wn.memoizedState,e,n)}function ob(e,n){var t=gn();return wn===null?tp(t,e,n):ib(t,wn.memoizedState,e,n)}function tp(e,n,t){return t===void 0||(Vl&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=vv(),He.lanes|=e,Mo|=e,t)}function ib(e,n,t,a){return Mt(t,n)?t:So.current!==null?(e=tp(e,t,a),Mt(e,n)||(Bn=!0),e):(Vl&106)===0||(Vl&1073741824)!==0&&(Le&261930)===0?(Bn=!0,e.memoizedState=t):(e=vv(),He.lanes|=e,Mo|=e,n)}function cc(){ae.asyncTransitions--}function sb(e,n,t,a,l){var o=mn.p;mn.p=o!==0&&o<al?o:al;var i=ae.T,s={};s.types=i!==null?i.types:null,s._updatedFibers=new Set,ae.T=s,sp(e,!1,n,t);try{var r=l(),c=ae.S;if(c!==null&&c(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){ae.asyncTransitions++,r.then(cc,cc);var D=YN(r,a);ar(e,n,D,$t(e))}else ar(e,n,a,$t(e))}catch(V){ar(e,n,{then:function(){},status:"rejected",reason:V},$t(e))}finally{mn.p=o,i!==null&&s.types!==null&&(i.types!==null&&i.types!==s.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),i.types=s.types),ae.T=i,i===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function ap(e,n,t,a){if(e.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var l=rb(e).queue;LN(e),sb(e,l,n,Ni,t===null?R:function(){return ub(e),t(a)})}function rb(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ni,baseState:Ni,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Ni},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ub(e){ae.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var n=rb(e);n.next===null&&(n=e.alternate.memoizedState),ar(e,n.next.queue,{},$t(e))}function lp(){var e=Zf(!1);return e=sb.bind(null,He,e.queue,!0,!1),xt().memoizedState=e,[!1,e]}function cb(){var e=zi(Ea)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:nr(e),n]}function db(){var e=tr(Ea)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:nr(e),n]}function Qo(){return Dn(Is)}function op(){var e=xt(),n=Sn.identifierPrefix;if($e){var t=zl,a=jl;t=(a&~(1<<32-wt(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=md++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=oE++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n}function ip(){return xt().memoizedState=FN.bind(null,He)}function FN(e,n){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$t(t),l=Kl(a),o=eo(t,l,a);o!==null&&(Ga(a,"refresh()",e),jn(o,t,a),Js(o,t,a)),e=Ef(),n!=null&&o!==null&&console.error("The seed argument is not enabled outside experimental channels."),l.payload={cache:e};return}t=t.return}}function JN(e,n,t){var a=arguments;typeof a[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),a=$t(e);var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};dc(e)?pb(n,l):(l=gf(e,n,l,a),l!==null&&(Ga(a,"dispatch()",e),jn(l,e,a),mb(l,n,a)))}function fb(e,n,t){var a=arguments;typeof a[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),a=$t(e),ar(e,n,t,a)&&Ga(a,"setState()",e)}function ar(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(dc(e))pb(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null)){var i=ae.H;ae.H=ja;try{var s=n.lastRenderedState,r=o(s,t);if(l.hasEagerState=!0,l.eagerState=r,Mt(r,s))return zu(e,n,l,0),Sn===null&&ju(),!1}catch{}finally{ae.H=i}}if(t=gf(e,n,l,a),t!==null)return jn(t,e,a),mb(t,n,a),!0}return!1}function sp(e,n,t,a){if(ae.T===null&&No===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),a={lane:2,revertLane:Jp(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(n)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else n=gf(e,t,a,2),n!==null&&(Ga(2,"setOptimistic()",e),jn(n,e,2))}function dc(e){var n=e.alternate;return e===He||n!==null&&n===He}function pb(e,n){_s=pd=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mb(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xe(e,t)}}function rp(e){if(e!==null&&typeof e!="function"){var n=String(e);zx.has(n)||(zx.add(n),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function up(e,n,t,a){var l=e.memoizedState,o=t(a,l);if(e.mode&ht){an(!0);try{o=t(a,l)}finally{an(!1)}}o===void 0&&(n=oe(n)||"Component",Ax.has(n)||(Ax.add(n),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))),l=o==null?l:Xe({},l,o),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}function hb(e,n,t,a,l,o,i){var s=e.stateNode;if(typeof s.shouldComponentUpdate=="function"){if(t=s.shouldComponentUpdate(a,o,i),e.mode&ht){an(!0);try{t=s.shouldComponentUpdate(a,o,i)}finally{an(!1)}}return t===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",oe(n)||"Component"),t}return n.prototype&&n.prototype.isPureReactComponent?!Xs(t,a)||!Xs(l,o):!0}function gb(e,n,t,a){var l=n.state;typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==l&&(e=q(e)||"Component",Ex.has(e)||(Ex.add(e),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",e)),Mh.enqueueReplaceState(n,n.state,null))}function $o(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=Xe({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function bb(e){eh(e),console.warn(`%s

%s
`,Ns?"An error occurred in the <"+Ns+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function vb(e){var n=Ns?"The above error occurred in the <"+Ns+"> component.":"The above error occurred in one of your React components.",t="React will try to recreate this component tree from scratch using the error boundary you provided, "+((Dh||"Anonymous")+".");if(typeof e=="object"&&e!==null&&typeof e.environmentName=="string"){var a=e.environmentName;e=[`%o

%s

%s
`,e,n,t].slice(0),typeof e[0]=="string"?e.splice(0,1,b_+" "+e[0],v_,Xd+a+Xd,y_):e.splice(0,0,b_,v_,Xd+a+Xd,y_),e.unshift(console),a=DE.apply(console.error,e),a()}else console.error(`%o

%s

%s
`,e,n,t)}function yb(e){eh(e)}function fc(e,n){try{Ns=n.source?q(n.source):null,Dh=null;var t=n.value;if(ae.actQueue!==null)ae.thrownErrors.push(t);else{var a=e.onUncaughtError;a(t,{componentStack:n.stack})}}catch(l){setTimeout(function(){throw l})}}function xb(e,n,t){try{Ns=t.source?q(t.source):null,Dh=q(n);var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function cp(e,n,t){return t=Kl(t),t.tag=xh,t.payload={element:null},t.callback=function(){B(n.source,fc,e,n)},t}function dp(e){return e=Kl(e),e.tag=xh,e}function fp(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){fg(t),B(a.source,xb,n,t,a)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){fg(t),B(a.source,xb,n,t,a),typeof l!="function"&&(To===null?To=new Set([this]):To.add(this)),nE(this,a),typeof l=="function"||(t.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",q(t)||"Unknown")})}function WN(e,n,t,a,l){if(t.flags|=32768,tl&&dr(e,l),a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Lo(n,t,l,!0),$e&&(ol=!0),t=rt.current,t!==null){switch(t.tag){case 31:case 13:case 19:return gt===null?Mc():t.alternate===null&&An===Hl&&(An=_d),t.flags&=-257,t.flags|=65536,t.lanes=l,a===cd?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Qp(e,a,l)),!1;case 22:return t.flags|=65536,a===cd?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Qp(e,a,l)),!1}throw Error("Unexpected Suspense handler tag ("+t.tag+"). This is a bug in React.")}return Qp(e,a,l),Mc(),!1}if($e)return ol=!0,n=rt.current,n!==null?(n.tag===19&&console.error("SuspenseList should never catch while hydrating. This is a bug in React."),(n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==ih&&Qs(Yt(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:a}),t))):(a!==ih&&Qs(Yt(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:a}),t)),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Yt(a,t),l=cp(e.stateNode,a,l),Wu(e,l),An!==Eo&&(An=di)),!1;var o=Yt(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:a}),t);if(su===null?su=[o]:su.push(o),An!==Eo&&(An=di),n===null)return!0;a=Yt(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=cp(t.stateNode,a,e),Wu(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(To===null||!To.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=dp(l),fp(l,e,t,a),Wu(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}function Zn(e,n,t,a){n.child=e===null?mx(n,null,t,a):ri(n,e.child,t,a)}function _b(e,n,t,a,l){t=t.render;var o=Oi(t);if(o!==t&&(t=o,e!==null&&(Bn=!0)),o=n.ref,"ref"in a){var i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}else i=a;return qo(n),a=Uf(e,n,t,i,o,l),s=Bf(),e!==null&&!Bn?(Hf(e,n,l),El(e,n,l)):($e&&s&&Uu(n),n.flags|=1,Zn(e,n,a,l),n.child)}function Nb(e,n,t,a,l){if(e===null){var o=t.type;return typeof o=="function"&&!bf(o)&&o.defaultProps===void 0&&t.compare===null?(t=Oi(o),n.tag=15,n.type=t,mp(n,o),wb(e,n,t,a,l)):(e=vf(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!xp(e,l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Xs,t(i,a)&&e.ref===n.ref)return El(e,n,l)}return n.flags|=1,e=_l(o,a),e.ref=n.ref,e.return=n,n.child=e}function wb(e,n,t,a,l){if(e!==null){var o=e.memoizedProps;if(Xs(o,a)&&e.ref===n.ref&&n.type===e.type)if(Bn=!1,n.pendingProps=a=o,xp(e,l))(e.flags&131072)!==0&&(Bn=!0);else return n.lanes=e.lanes,El(e,n,l)}return pp(e,n,t,a,l)}function Sb(e,n,t,a){var l=a.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:jr,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~o}else a=0,n.child=null;return Eb(e,n,o,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xu(n,o!==null?o.cachePool:null),o!==null?Hg(n,o):Rf(n),Gg(n);else return a=n.lanes=536870912,Eb(e,n,o!==null?o.baseLanes|t:t,t,a)}else o!==null?(Xu(n,o.cachePool),Hg(n,o),to(n),n.memoizedState=null):(e!==null&&Xu(n,null),Rf(n),to(n));return Zn(e,n,l,t),n.child}function lr(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:jr,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eb(e,n,t,a,l){var o=Tf();return o=o===null?null:{parent:Ln._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Xu(n,null),Rf(n),Gg(n),e!==null&&Lo(e,n,a,!0),n.childLanes=l,null}function pc(e,n){var t=n.hidden;return t!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,t===!0?"hidden":t===!1?"hidden={false}":"hidden={...}",t?'mode="hidden"':'mode="visible"'),n=mc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mb(e,n,t){return ri(n,e.child,null,t),e=pc(n,n.pendingProps),e.flags|=2,Qt(n),n.memoizedState=null,e}function KN(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if($e){if(a.mode==="hidden")return e=pc(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},lr(null,e);if(zf(n),(e=En)?(t=g1(e,ha),t=t!==null&&t.data===vi?t:null,t!==null&&(a={dehydrated:t,treeContext:bg(),retryLane:536870912,hydrationErrors:null},n.memoizedState=a,a=hg(t),a.return=n,n.child=a,Kn=n,En=null)):t=null,t===null)throw Vu(n,e),Pl(n);return n.lanes=536870912,null}return pc(n,a)}var o=e.memoizedState;if(o!==null){var i=o.dehydrated;if(zf(n),l)if(n.flags&256)n.flags&=-257,n=Mb(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(yg(),(t&536870912)!==0&&Ec(n),Bn||Lo(e,n,t,!1),l=(t&e.childLanes)!==0,Bn||l){if(So.current===null){if(a=Sn,a!==null&&(i=Se(a,t),i!==0&&i!==o.retryLane))throw o.retryLane=i,pt(e,i),jn(a,e,i),Th;Mc()}n=Mb(e,n,t)}else e=o.treeContext,En=Ft(i.nextSibling),Kn=n,$e=!0,bo=null,ol=!1,Wt=null,ha=!1,e!==null&&vg(n,e),n=pc(n,a),n.flags|=134221824;return n}return o=e.child,a={mode:a.mode,children:a.children},(t&536870912)!==0&&(t&e.lanes)!==0&&Ec(n),e=_l(o,a),e.ref=n.ref,n.child=e,e.return=n,e}function Ui(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");(e===null||e.ref!==t)&&(n.flags|=4194816)}}function pp(e,n,t,a,l){if(t.prototype&&typeof t.prototype.render=="function"){var o=oe(t)||"Unknown";kx[o]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",o,o),kx[o]=!0)}return n.mode&ht&&Ra.recordLegacyContextWarning(n,null),e===null&&(mp(n,n.type),t.contextTypes&&(o=oe(t)||"Unknown",Ux[o]||(Ux[o]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",o)))),qo(n),t=Uf(e,n,t,a,void 0,l),a=Bf(),e!==null&&!Bn?(Hf(e,n,l),El(e,n,l)):($e&&a&&Uu(n),n.flags|=1,Zn(e,n,t,l),n.child)}function Db(e,n,t,a,l,o){return qo(n),Bl=-1,Kr=e!==null&&e.type!==n.type,n.updateQueue=null,t=Vf(n,a,t,l),Lg(e,n),a=Bf(),e!==null&&!Bn?(Hf(e,n,o),El(e,n,o)):($e&&a&&Uu(n),n.flags|=1,Zn(e,n,t,o),n.child)}function Tb(e,n,t,a,l){switch(x(n)){case!1:var o=n.stateNode,i=new n.type(n.memoizedProps,o.context).state;o.updater.enqueueSetState(o,i,null);break;case!0:n.flags|=128,n.flags|=65536,o=Error("Simulated error coming from DevTools");var s=l&-l;if(n.lanes|=s,i=Sn,i===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");s=dp(s),fp(s,i,n,Yt(o,n)),Wu(n,s)}if(qo(n),n.stateNode===null){if(i=go,o=t.contextType,"contextType"in t&&o!==null&&(o===void 0||o.$$typeof!==Ta)&&!jx.has(t)&&(jx.add(t),s=o===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof o!="object"?" However, it is set to a "+typeof o+".":o.$$typeof===Mm?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(o).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",oe(t)||"Component",s)),typeof o=="object"&&o!==null&&(i=Dn(o)),o=new t(a,i),n.mode&ht){an(!0);try{o=new t(a,i)}finally{an(!1)}}if(i=n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mh,n.stateNode=o,o._reactInternals=n,o._reactInternalInstance=Sx,typeof t.getDerivedStateFromProps=="function"&&i===null&&(i=oe(t)||"Component",Mx.has(i)||(Mx.add(i),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",i,o.state===null?"null":"undefined",i))),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"){var r=s=i=null;if(typeof o.componentWillMount=="function"&&o.componentWillMount.__suppressDeprecationWarning!==!0?i="componentWillMount":typeof o.UNSAFE_componentWillMount=="function"&&(i="UNSAFE_componentWillMount"),typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps.__suppressDeprecationWarning!==!0?s="componentWillReceiveProps":typeof o.UNSAFE_componentWillReceiveProps=="function"&&(s="UNSAFE_componentWillReceiveProps"),typeof o.componentWillUpdate=="function"&&o.componentWillUpdate.__suppressDeprecationWarning!==!0?r="componentWillUpdate":typeof o.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),i!==null||s!==null||r!==null){o=oe(t)||"Component";var c=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Tx.has(o)||(Tx.add(o),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,o,c,i!==null?`
  `+i:"",s!==null?`
  `+s:"",r!==null?`
  `+r:""))}}o=n.stateNode,i=oe(t)||"Component",o.render||(t.prototype&&typeof t.prototype.render=="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",i):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",i)),!o.getInitialState||o.getInitialState.isReactClassApproved||o.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",i),o.getDefaultProps&&!o.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",i),o.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",i),t.childContextTypes&&!Rx.has(t)&&(Rx.add(t),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",i)),t.contextTypes&&!Ox.has(t)&&(Ox.add(t),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",i)),typeof o.componentShouldUpdate=="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",i),t.prototype&&t.prototype.isPureReactComponent&&typeof o.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",oe(t)||"A pure component"),typeof o.componentDidUnmount=="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",i),typeof o.componentDidReceiveProps=="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",i),typeof o.componentWillRecieveProps=="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",i),typeof o.UNSAFE_componentWillRecieveProps=="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",i),s=o.props!==a,o.props!==void 0&&s&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",i),o.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",i,i),typeof o.getSnapshotBeforeUpdate!="function"||typeof o.componentDidUpdate=="function"||Dx.has(t)||(Dx.add(t),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",oe(t))),typeof o.getDerivedStateFromProps=="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof o.getDerivedStateFromError=="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof t.getSnapshotBeforeUpdate=="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",i),(s=o.state)&&(typeof s!="object"||Xn(s))&&console.error("%s.state: must be set to an object or null",i),typeof o.getChildContext=="function"&&typeof t.childContextTypes!="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",i),o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},Af(n),i=t.contextType,o.context=typeof i=="object"&&i!==null?Dn(i):go,o.state===a&&(i=oe(t)||"Component",Cx.has(i)||(Cx.add(i),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",i))),n.mode&ht&&Ra.recordLegacyContextWarning(n,o),Ra.recordUnsafeLifecycleWarnings(n,o),o.state=n.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(up(n,t,i,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(i=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),i!==o.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",q(n)||"Component"),Mh.enqueueReplaceState(o,o.state,null)),Ks(n,a,o,l),Ws(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),(n.mode&Ca)!==Be&&(n.flags|=268435456),o=!0}else if(e===null){o=n.stateNode;var D=n.memoizedProps;s=$o(t,D),o.props=s;var V=o.context;r=t.contextType,i=go,typeof r=="object"&&r!==null&&(i=Dn(r)),c=t.getDerivedStateFromProps,r=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,r||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(D||V!==i)&&gb(n,o,a,i),wo=!1;var U=n.memoizedState;o.state=U,Ks(n,a,o,l),Ws(),V=n.memoizedState,D||U!==V||wo?(typeof c=="function"&&(up(n,t,c,a),V=n.memoizedState),(s=wo||hb(n,t,s,a,U,V,i))?(r||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308),(n.mode&Ca)!==Be&&(n.flags|=268435456)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),(n.mode&Ca)!==Be&&(n.flags|=268435456),n.memoizedProps=a,n.memoizedState=V),o.props=a,o.state=V,o.context=i,o=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),(n.mode&Ca)!==Be&&(n.flags|=268435456),o=!1)}else{o=n.stateNode,Of(e,n),i=n.memoizedProps,r=$o(t,i),o.props=r,c=n.pendingProps,U=o.context,V=t.contextType,s=go,typeof V=="object"&&V!==null&&(s=Dn(V)),D=t.getDerivedStateFromProps,(V=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==c||U!==s)&&gb(n,o,a,s),wo=!1,U=n.memoizedState,o.state=U,Ks(n,a,o,l),Ws();var Y=n.memoizedState;i!==c||U!==Y||wo||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof D=="function"&&(up(n,t,D,a),Y=n.memoizedState),(r=wo||hb(n,t,r,a,U,Y,s)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(V||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,Y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,Y,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Y),o.props=a,o.state=Y,o.context=s,o=r):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),o=!1)}if(s=o,Ui(e,n),i=(n.flags&128)!==0,s||i){if(s=n.stateNode,se(n),i&&typeof t.getDerivedStateFromError!="function")t=null,Dt=-1;else if(t=ex(s),n.mode&ht){an(!0);try{ex(s)}finally{an(!1)}}n.flags|=1,e!==null&&i?(n.child=ri(n,e.child,null,l),n.child=ri(n,null,t,l)):Zn(e,n,t,l),n.memoizedState=s.state,e=n.child}else e=El(e,n,l);return l=n.stateNode,o&&l.props!==a&&(ws||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",q(n)||"a component"),ws=!0),e}function Cb(e,n,t,a){return Go(),n.flags|=256,Zn(e,n,t,a),n.child}function mp(e,n){n&&n.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,n.displayName||n.name||"Component"),typeof n.getDerivedStateFromProps=="function"&&(e=oe(n)||"Unknown",Vx[e]||(console.error("%s: Function components do not support getDerivedStateFromProps.",e),Vx[e]=!0)),typeof n.contextType=="object"&&n.contextType!==null&&(n=oe(n)||"Unknown",Ix[n]||(console.error("%s: Function components do not support contextType.",n),Ix[n]=!0))}function hp(e){return{baseLanes:e,cachePool:Mg()}}function gp(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Bt),e}function Ab(e,n,t){var a=n.pendingProps;b(n)&&(n.flags|=128);var l=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(ut.current&Fr)!==0),i&&(l=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,e===null){if($e){if(l?no(n):to(n),(e=En)?(t=g1(e,ha),t=t!==null&&t.data!==vi?t:null,t!==null&&(i={dehydrated:t,treeContext:bg(),retryLane:536870912,hydrationErrors:null},n.memoizedState=i,i=hg(t),i.return=n,n.child=i,Kn=n,En=null)):t=null,t===null)throw Vu(n,e),Pl(n);return dm(t)?n.lanes=32:n.lanes=536870912,null}return o=a.children,a=a.fallback,l?(to(n),l=n.mode,o=mc({mode:"hidden",children:o},l),a=Bo(a,l,t,null),o.return=n,a.return=n,o.sibling=a,n.child=o,a=n.child,a.memoizedState=hp(t),a.childLanes=gp(e,i,t),n.memoizedState=Ah,lr(null,a)):(no(n),bp(n,o))}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(r!==null)return ew(e,n,o,i,a,r,s,t)}return l?(to(n),l=a.fallback,o=n.mode,s=e.child,r=s.sibling,a=_l(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,r!==null?l=_l(r,l):(l=Bo(l,o,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,lr(null,a),a=n.child,l=e.child.memoizedState,l===null?l=hp(t):(o=l.cachePool,o!==null?(s=Ln._currentValue,o=o.parent!==s?{parent:s,pool:s}:o):o=Mg(),l={baseLanes:l.baseLanes|t,cachePool:o}),a.memoizedState=l,a.childLanes=gp(e,i,t),n.memoizedState=Ah,lr(e.child,a)):(s!==null&&(t&62914560)===t&&(t&e.lanes)!==0&&Ec(n),no(n),t=e.child,e=t.sibling,t=_l(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=t,n.memoizedState=null,t)}function bp(e,n){return n=mc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function mc(e,n){return e=S(22,e,null,n),e.lanes=0,e}function hc(e,n,t){return ri(n,e.child,null,t),e=bp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ew(e,n,t,a,l,o,i,s){if(t){if(n.flags&256)return no(n),n.flags&=-257,hc(e,n,s);if(n.memoizedState!==null)return to(n),n.child=e.child,n.flags|=128,null;to(n);var r=l.fallback,c=n.mode,D=mc({mode:"visible",children:l.children},c);return r=Bo(r,c,s,null),r.flags|=2,D.return=n,r.return=n,D.sibling=r,n.child=D,ri(n,e.child,null,s),r=n.child,r.memoizedState=hp(s),r.childLanes=gp(e,a,s),n.memoizedState=Ah,lr(null,r)}if(no(n),yg(),(s&536870912)!==0&&Ec(n),dm(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a){r=a.dgst;var V=a.msg;c=a.stck,D=a.cstck}return o=V,i=r,l=c,a=D,r=i,c=o,D=l,l=a,r!==eE&&(a=Error(c||"The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),a.stack=D||"",a.digest=r,r=l===void 0?null:l,c={value:a,source:null,stack:r},typeof r=="string"&&oh.set(a,c),Qs(c)),hc(e,n,s)}if(Bn||Lo(e,n,s,!1),a=(s&e.childLanes)!==0,Bn||a){if(So.current!==null)return hc(e,n,s);if(a=Sn,a!==null&&(r=Se(a,s),r!==0&&r!==i.retryLane))throw i.retryLane=r,pt(e,r),jn(a,e,r),Th;return cm(o)||Mc(),hc(e,n,s)}return cm(o)?(n.flags|=192,n.child=e.child,null):(e=i.treeContext,En=Ft(o.nextSibling),Kn=n,$e=!0,bo=null,ol=!1,Wt=null,ha=!1,e!==null&&vg(n,e),n=bp(n,l.children),n.flags|=134221824,n)}function Ob(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Gu(e.return,n,t)}function Rb(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&Ku(t)===null&&(n=e),e=e.sibling}return n}function gc(e,n,t,a,l,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=l,i.treeForkCount=o)}function vp(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function yp(e,n,t){var a=n.pendingProps,l=a.revealOrder,o=a.tail,i=a.children,s=ut.current;if(n.flags&128)return er(n,s),null;if((a=(s&Fr)!==0)?(s=s&ys|Fr,n.flags|=128):s&=ys,er(n,s),s=l??"null",l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&l!=="together"&&l!=="independent"&&!Bx[s])if(Bx[s]=!0,typeof l=="string")switch(l.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',l,l.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',l,l.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l);s=o??"null",Ch[s]||o==null||(o!=="visible"&&o!=="collapsed"&&o!=="hidden"?(Ch[s]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',o)):l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&(Ch[s]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" (default) or "backwards". Did you mean to specify revealOrder="forwards"?',o)));e:if((l==null||l==="forwards"||l==="backwards"||l==="unstable_legacy-backwards")&&i!==void 0&&i!==null&&i!==!1)if(Xn(i)){for(s=0;s<i.length;s++)if(!Ug(i[s],s))break e}else if(s=Ne(i),typeof s=="function"){if(s=s.call(i))for(var r=s.next(),c=0;!r.done;r=s.next()){if(!Ug(r.value,c))break e;c++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',l);if(l==="backwards"&&e!==null?(vp(e),Zn(e,n,i,t),vp(e)):Zn(e,n,i,t),$e?($l(),i=zr):i=0,!a&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ob(e,t,n);else if(e.tag===19)Ob(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":t=Rb(n.child),t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null,vp(n)),gc(n,!0,l,null,o,i);break;case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ku(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}gc(n,!0,t,null,o,i);break;case"together":gc(n,!1,null,null,void 0,i);break;case"independent":n.memoizedState=null;break;default:t=Rb(n.child),t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),gc(n,!1,l,t,o,i)}return n.child}function jb(e,n,t){var a=n.type,l=n.pendingProps,o=l.value;return"value"in l||Gx||(Gx=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fl(n,a,o),Zn(e,n,l.children,t),n.child}function El(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dt=-1,Mo|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Lo(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error("Resuming work not yet implemented.");if(n.child!==null){for(e=n.child,t=_l(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_l(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function xp(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function nw(e,n,t){switch(n.tag){case 3:tn(n,n.stateNode.containerInfo),Fl(n,Ln,e.memoizedState.cache),Go();break;case 27:case 5:qe(n);break;case 4:tn(n,n.stateNode.containerInfo);break;case 10:Fl(n,n.type,n.memoizedProps.value);break;case 12:(t&n.childLanes)!==0&&(n.flags|=4),n.flags|=2048;var a=n.stateNode;a.effectDuration=-0,a.passiveEffectDuration=-0;break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:if(a=n.memoizedState,a!==null){if(a.dehydrated!==null)return no(n),n.flags|=128,null;a=Lo(e,n,t,!1);var l=n.child.childLanes;return a||(t&l)!==0?Ab(e,n,t):(no(n),e=El(e,n,t),e!==null?e.sibling:null)}no(n);break;case 19:if(n.flags&128)return yp(e,n,t);if(l=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(Lo(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return yp(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),er(n,ut.current),a)break;return null;case 22:return n.lanes=0,Sb(e,n,t,n.pendingProps);case 24:Fl(n,Ln,e.memoizedState.cache)}return El(e,n,t)}function _p(e,n,t){if(n._debugNeedsRemount&&e!==null){t=vf(Oi(n.elementType),n.key,n.pendingProps,n._debugOwner||null,n.mode,n.lanes),t._debugStack=n._debugStack,t._debugTask=n._debugTask;var a=n.return;if(a===null)throw Error("Cannot swap the root fiber.");if(e.alternate=null,n.alternate=null,t.index=n.index,t.sibling=n.sibling,t.return=n.return,t.ref=n.ref,t._debugInfo=n._debugInfo,n===a.child)a.child=t;else{var l=a.child;if(l===null)throw Error("Expected parent to have a child.");for(;l.sibling!==n;)if(l=l.sibling,l===null)throw Error("Expected to find the previous sibling.");l.sibling=t}return n=a.deletions,n===null?(a.deletions=[e],a.flags|=16):n.push(e),t.flags|=134217730,t}if(e!==null)if(e.memoizedProps!==n.pendingProps||n.type!==e.type)Bn=!0;else{if(!xp(e,t)&&(n.flags&128)===0)return Bn=!1,nw(e,n,t);Bn=(e.flags&131072)!==0}else Bn=!1,(a=$e)&&($l(),a=(n.flags&1048576)!==0),a&&(a=n.index,$l(),gg(n,zr,a));switch(n.lanes=0,n.tag){case 16:e:if(a=n.pendingProps,e=Jl(n.elementType),e=Oi(e),n.type=e,typeof e=="function")bf(e)?(a=$o(e,a),n.tag=1,n=Tb(null,n,e,a,t)):(n.tag=0,mp(n,e),n=pp(null,n,e,a,t));else{if(e!=null){if(l=e.$$typeof,l===Uc){n.tag=11,n=_b(null,n,e,a,t);break e}else if(l===Vc){n.tag=14,n=Nb(null,n,e,a,t);break e}else if(l===Ta){n.tag=10,n.type=e,n=jb(null,n,t);break e}}throw n="",e!==null&&typeof e=="object"&&e.$$typeof===Rt&&(n=" Did you wrap a component in React.lazy() more than once?"),t=oe(e)||e,Error("Element type is invalid. Received a promise that resolves to: "+t+". Lazy element type must resolve to a class or function."+n)}return n;case 0:return pp(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=$o(a,n.pendingProps),Tb(e,n,a,l,t);case 3:e:{if(tn(n,n.stateNode.containerInfo),e===null)throw Error("Should have a current fiber. This is a bug in React.");a=n.pendingProps;var o=n.memoizedState;l=o.element,Of(e,n),Ks(n,a,null,t);var i=n.memoizedState;if(a=i.cache,Fl(n,Ln,a),a!==o.cache&&Sf(n,[Ln],t,!0),Ws(),a=i.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Cb(e,n,a,t);break e}else if(a!==l){l=Yt(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),n),Qs(l),n=Cb(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(En=Ft(e.firstChild),Kn=n,$e=!0,bo=null,ol=!1,Wt=null,ha=!0,t=mx(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Go(),a===l){n=El(e,n,t);break e}Zn(e,n,a,t)}n=n.child}return n;case 26:return Ui(e,n),e===null?(t=w1(n.type,null,n.pendingProps,null))?n.memoizedState=t:$e||(n.stateNode=t1(n.type,n.pendingProps,ge(uo.current),n)):n.memoizedState=w1(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qe(n),e===null&&$e&&(a=ge(uo.current),l=Ce(),a=n.stateNode=x1(n.type,n.pendingProps,a,l,!1),ol||(l=Wv(a,n.type,n.pendingProps,l),l!==null&&(Ho(n,0).serverProps=l)),Kn=n,ha=!0,l=En,so(n.type)?(t0=l,En=Ft(a.firstChild)):En=l),Zn(e,n,n.pendingProps.children,t),Ui(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&$e&&(o=Ce(),a=rf(n.type,o.ancestorInfo),l=En,(i=!l)||(i=cS(l,n.type,n.pendingProps,ha),i!==null?(n.stateNode=i,ol||(o=Wv(i,n.type,n.pendingProps,o),o!==null&&(Ho(n,0).serverProps=o)),Kn=n,En=Ft(i.firstChild),ha=!1,o=!0):o=!1,i=!o),i&&(a&&Vu(n,l),Pl(n))),qe(n),l=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,im(l,o)?a=null:i!==null&&im(l,i)&&(n.flags|=32),n.memoizedState!==null&&(l=Uf(e,n,XN,null,null,t),Is._currentValue=l),Ui(e,n),Zn(e,n,a,t),n.child;case 6:return e===null&&$e&&(t=n.pendingProps,e=Ce(),a=e.ancestorInfo.current,t=a!=null?Mu(t,a.tag,e.ancestorInfo.implicitRootScope):!0,e=En,(a=!e)||(a=dS(e,n.pendingProps,ha),a!==null?(n.stateNode=a,Kn=n,En=null,a=!0):a=!1,a=!a),a&&(t&&Vu(n,e),Pl(n))),null;case 13:return Ab(e,n,t);case 4:return tn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ri(n,null,a,t):Zn(e,n,a,t),n.child;case 11:return _b(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,Ui(e,n),Zn(e,n,a,t),n.child;case 8:return Zn(e,n,n.pendingProps.children,t),n.child;case 12:return n.flags|=4,n.flags|=2048,a=n.stateNode,a.effectDuration=-0,a.passiveEffectDuration=-0,Zn(e,n,n.pendingProps.children,t),n.child;case 10:return jb(e,n,t);case 9:return l=n.type._context,a=n.pendingProps.children,typeof a!="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),qo(n),l=Dn(l),a=hh(a,l,void 0),n.flags|=1,Zn(e,n,a,t),n.child;case 14:return Nb(e,n,n.type,n.pendingProps,t);case 15:return wb(e,n,n.type,n.pendingProps,t);case 19:return yp(e,n,t);case 31:return KN(e,n,t);case 22:return Sb(e,n,t,n.pendingProps);case 24:return qo(n),a=Dn(Ln),e===null?(l=Tf(),l===null&&(l=Sn,o=Ef(),l.pooledCache=o,Yo(o),o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:a,cache:l},Af(n),Fl(n,Ln,l)):((e.lanes&t)!==0&&(Of(e,n),Ks(n,null,null,t),Ws()),l=e.memoizedState,o=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Fl(n,Ln,a)):(a=o.cache,Fl(n,Ln,a),a!==l.cache&&Sf(n,[Ln],t,!0))),Zn(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:$e&&Uu(n),a.className!==void 0&&(l=typeof a.className=="string"?JSON.stringify(a.className):"{...}",Hx[l]||(Hx[l]=!0,console.error(`<ViewTransition> doesn't accept a "className" prop. It has been renamed to "default".
-   <ViewTransition className=%s>
+   <ViewTransition default=%s>`,l,l))),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:Ui(e,n),Zn(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error("Unknown unit of work tag ("+n.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Ml(e){e.flags|=4}function Np(e,n,t,a,l){var o;if((o=(e.mode&qy)!==Be)&&(o=t===null?D1(n,a):D1(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Nv())e.flags|=8192;else throw si=cd,bh}else e.flags&=-16777217}function zb(e,n){if(n.type!=="stylesheet"||(n.state.loading&ya)!==_i)e.flags&=-16777217;else if(e.flags|=16777216,!T1(n))if(Nv())e.flags|=8192;else throw si=cd,bh}function bc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gl():536870912,e.lanes|=n,mi|=n)}function or(e,n){if(!$e)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function Nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)if((e.mode&Qe)!==Be){for(var l=e.selfBaseDuration,o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&1206910976,a|=o.flags&1206910976,l+=o.treeBaseDuration,o=o.sibling;e.treeBaseDuration=l}else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else if((e.mode&Qe)!==Be){l=e.actualDuration,o=e.selfBaseDuration;for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,l+=i.actualDuration,o+=i.treeBaseDuration,i=i.sibling;e.actualDuration=l,e.treeBaseDuration=o}else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function tw(e,n,t){var a=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(n),null;case 1:return Nn(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wl(Ln,n),cn(n),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ri(n)?(wf(),Ml(n)):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nf())),Nn(n),null;case 26:var l=n.type,o=n.memoizedState;return e===null?(Ml(n),o!==null?(Nn(n),zb(n,o)):(Nn(n),Np(n,l,null,a,t))):o?o!==e.memoizedState?(Ml(n),Nn(n),zb(n,o)):(Nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Ml(n),Nn(n),Np(n,l,e,a,t)),null;case 27:if(yn(n),t=ge(uo.current),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ml(n);else{if(!a){if(n.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Nn(n),n.subtreeFlags&=-33554433,null}e=Ce(),Ri(n)?xg(n):(e=x1(l,a,t,e,!0),n.stateNode=e,Ml(n))}return Nn(n),n.subtreeFlags&=-33554433,null;case 5:if(yn(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ml(n);else{if(!a){if(n.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Nn(n),n.subtreeFlags&=-33554433,null}var i=Ce();if(Ri(n))xg(n);else{switch(o=ge(uo.current),rf(l,i.ancestorInfo),i=i.context,o=mr(o),i){case zs:o=o.createElementNS(ts,l);break;case Ld:o=o.createElementNS(Xc,l);break;default:switch(l){case"svg":o=o.createElementNS(ts,l);break;case"math":o=o.createElementNS(Xc,l);break;case"script":o=o.createElement("div"),c_||jw(a)||(console.error("Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)."),c_=!0),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l),l.indexOf("-")===-1&&(l!==l.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",l),Object.prototype.toString.call(o)!=="[object HTMLUnknownElement]"||ca.call(d_,l)||(d_[l]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",l)))}}o[st]=n,o[St]=a;e:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)o.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=o;e:switch(it(o,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Ml(n)}}return Nn(n),n.subtreeFlags&=-33554433,Np(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Ml(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(e=ge(uo.current),t=Ce(),Ri(n)){if(e=n.stateNode,t=n.memoizedProps,l=!ol,a=null,o=Kn,o!==null)switch(o.tag){case 3:l&&(l=v1(e,t,a),l!==null&&(Ho(n,0).serverProps=l));break;case 27:case 5:a=o.memoizedProps,l&&(l=v1(e,t,a),l!==null&&(Ho(n,0).serverProps=l))}e[st]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Qv(e.nodeValue,t)),e||Pl(n,!0)}else l=t.ancestorInfo.current,l!=null&&Mu(a,l.tag,t.ancestorInfo.implicitRootScope),e=mr(e).createTextNode(a),e[st]=n,n.stateNode=e}return Nn(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Ri(n),t!==null){if(e===null){if(!a)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");e[st]=n,Nn(n),(n.mode&Qe)!==Be&&t!==null&&(e=n.child,e!==null&&(n.treeBaseDuration-=e.treeBaseDuration))}else wf(),Go(),(n.flags&128)===0&&(t=n.memoizedState=null),n.flags|=4,Nn(n),(n.mode&Qe)!==Be&&t!==null&&(e=n.child,e!==null&&(n.treeBaseDuration-=e.treeBaseDuration));e=!1}else t=Nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Qt(n),n):(Qt(n),null);if((n.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Nn(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=a,o=Ri(n),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");o[st]=n,Nn(n),(n.mode&Qe)!==Be&&l!==null&&(l=n.child,l!==null&&(n.treeBaseDuration-=l.treeBaseDuration))}else wf(),Go(),(n.flags&128)===0&&(l=n.memoizedState=null),n.flags|=4,Nn(n),(n.mode&Qe)!==Be&&l!==null&&(l=n.child,l!==null&&(n.treeBaseDuration-=l.treeBaseDuration));l=!1}else l=Nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Qt(n),n):(Qt(n),null)}return Qt(n),(n.flags&128)!==0?(n.lanes=t,(n.mode&Qe)!==Be&&Fs(n),n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),bc(n,n.updateQueue),Nn(n),(n.mode&Qe)!==Be&&t&&(e=n.child,e!==null&&(n.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return cn(n),e===null&&Kp(n.stateNode.containerInfo),n.flags|=67108864,Nn(n),null;case 10:return wl(n.type,n),Nn(n),null;case 19:if(kf(n),a=n.memoizedState,a===null)return Nn(n),null;if(l=(n.flags&128)!==0,o=a.rendering,o===null)if(l)or(a,!1);else{if(An!==Hl||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Ku(e),o!==null){for(n.flags|=128,or(a,!1),e=o.updateQueue,n.updateQueue=e,bc(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)mg(t,e),t=t.sibling;return er(n,ut.current&ys|Fr),$e&&Nl(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Un()>Dd&&(n.flags|=128,l=!0,or(a,!1),n.lanes=4194304)}else{if(!l)if(e=Ku(o),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,bc(n,e),or(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!o.alternate&&!$e)return Nn(n),null}else 2*Un()-a.renderingStartTime>Dd&&t!==536870912&&(n.flags|=128,l=!0,or(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(e=a.last,e!==null?e.sibling=o:n.child=o,a.last=o)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Un(),e.sibling=null,o=ut.current,o=l?o&ys|Fr:o&ys,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||$e?er(n,o):(t=o,ue(rt,n,n),ue(ut,t,n),gt===null&&(gt=n)),$e&&Nl(n,a.treeForkCount),e}return Nn(n),null;case 22:case 23:return Qt(n),jf(n),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Nn(n),n.subtreeFlags&6&&(n.flags|=8192)):Nn(n),t=n.updateQueue,t!==null&&bc(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&pe(li,n),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wl(Ln,n),Nn(n),null;case 25:return null;case 30:return n.flags|=33554432,Nn(n),null}throw Error("Unknown unit of work tag ("+n.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function aw(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,(n.mode&Qe)!==Be&&Fs(n),n):null;case 3:return wl(Ln,n),cn(n),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return yn(n),null;case 31:if(n.memoizedState!==null){if(Qt(n),n.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,(n.mode&Qe)!==Be&&Fs(n),n):null;case 13:if(Qt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,(n.mode&Qe)!==Be&&Fs(n),n):null;case 19:return kf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return cn(n),null;case 10:return wl(n.type,n),null;case 22:case 23:return Qt(n),jf(n),e!==null&&pe(li,n),e=n.flags,e&65536?(n.flags=e&-65537|128,(n.mode&Qe)!==Be&&Fs(n),n):null;case 24:return wl(Ln,n),null;case 25:return null;default:return null}}function kb(e,n){switch(_f(n),n.tag){case 3:wl(Ln,n),cn(n);break;case 26:case 27:case 5:yn(n);break;case 4:cn(n);break;case 31:n.memoizedState!==null&&Qt(n);break;case 13:Qt(n);break;case 19:kf(n);break;case 10:wl(n.type,n);break;case 22:case 23:Qt(n),jf(n),e!==null&&pe(li,n);break;case 24:wl(Ln,n)}}function $a(e){return(e.mode&Qe)!==Be}function Ib(e,n){$a(e)?(Qa(),ir(n,e),Xa()):ir(n,e)}function wp(e,n,t){$a(e)?(Qa(),Vi(t,e,n),Xa()):Vi(t,e,n)}function ir(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e&&(a=void 0,(e&Tt)!==Jr&&(As=!0),a=B(n,tE,t),(e&Tt)!==Jr&&(As=!1),a!==void 0&&typeof a!="function")){var o=void 0;o=(t.tag&Kt)!==0?"useLayoutEffect":(t.tag&Tt)!==0?"useInsertionEffect":"useEffect";var i=void 0;i=a===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof a.then=="function"?`

It looks like you wrote `+o+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+o+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+a,B(n,function(s,r){console.error("%s must not return anything besides a function, which is used for clean-up.%s",s,r)},o,i)}t=t.next}while(t!==l)}}catch(s){pn(n,n.return,s)}}function Vi(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var i=a.inst,s=i.destroy;s!==void 0&&(i.destroy=void 0,(e&Tt)!==Jr&&(As=!0),l=n,B(l,aE,l,t,s),(e&Tt)!==Jr&&(As=!1))}a=a.next}while(a!==o)}}catch(r){pn(n,n.return,r)}}function Ub(e,n){$a(e)?(Qa(),ir(n,e),Xa()):ir(n,e)}function Sp(e,n,t){$a(e)?(Qa(),Vi(t,e,n),Xa()):Vi(t,e,n)}function Vb(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;e.type.defaultProps||"ref"in e.memoizedProps||ws||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(e)||"instance"),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(e)||"instance"));try{B(e,Bg,n,t)}catch(a){pn(e,e.return,a)}}}function lw(e,n,t){return e.getSnapshotBeforeUpdate(n,t)}function ow(e,n){var t=n.memoizedProps,a=n.memoizedState;n=e.stateNode,e.type.defaultProps||"ref"in e.memoizedProps||ws||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(e)||"instance"),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(e)||"instance"));try{var l=$o(e.type,t),o=B(e,lw,n,l,a);t=Lx,o!==void 0||t.has(e.type)||(t.add(e.type),B(e,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",q(e))})),n.__reactInternalSnapshotBeforeUpdate=o}catch(i){pn(e,e.return,i)}}function Bb(e,n,t){t.props=$o(e.type,e.memoizedProps),t.state=e.memoizedState,$a(e)?(Qa(),B(e,ix,e,n,t),Xa()):B(e,ix,e,n,t)}function iw(e){var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;var a=yl(e.memoizedProps,t);(t.ref===null||t.ref.name!==a)&&(t.ref=u1(a)),t=t.ref;break;case 7:e.stateNode===null&&(t=new Pt(e),te(e,rS,t),e.stateNode=t),t=e.stateNode;break;default:t=e.stateNode}if(typeof n=="function")if($a(e))try{Qa(),e.refCleanup=n(t)}finally{Xa()}else e.refCleanup=n(t);else typeof n=="string"?console.error("String refs are no longer supported."):n.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",q(e)),n.current=t}}function Pa(e,n){try{B(e,iw,e)}catch(t){pn(e,n,t)}}function ot(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{if($a(e))try{Qa(),B(e,a)}finally{Xa(e)}else B(e,a)}catch(l){pn(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{if($a(e))try{Qa(),B(e,t,null)}finally{Xa(e)}else B(e,t,null)}catch(l){pn(e,n,l)}else t.current=null}function Hb(e,n,t,a){var l=e.memoizedProps,o=l.id,i=l.onCommit;l=l.onRender,n=n===null?"mount":"update",id&&(n="nested-update"),typeof l=="function"&&l(o,n,e.actualDuration,e.treeBaseDuration,e.actualStartTime,t),typeof i=="function"&&i(o,n,a,t)}function sw(e,n,t,a){var l=e.memoizedProps;e=l.id,l=l.onPostCommit,n=n===null?"mount":"update",id&&(n="nested-update"),typeof l=="function"&&l(e,n,a,t)}function vc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)h1(e.stateNode,n[t])}function Gb(e){for(var n=e.return;n!==null&&(Mp(n)&&h1(e.stateNode,n.stateNode),!Ep(n));)n=n.return}function sr(e){for(var n=e.return;n!==null&&(Mp(n)&&uS(e.stateNode,n.stateNode),!Ep(n));)n=n.return}function Ep(e){return e.tag===5||e.tag===3||e.tag===27}function Mp(e){return e&&e.tag===7&&e.stateNode!==null}function Dp(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{B(e,Iw,a,n,t,e)}catch(l){pn(e,e.return,l)}}function Tp(e,n,t){try{B(e,Vw,e.stateNode,e.type,t,n,e)}catch(a){pn(e,e.return,a)}}function Lb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&so(e.type)||e.tag===4}function Cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&so(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ap(e,n,t,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(l1(t),(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,n)):(l1(t),n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(l),l=t._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=Va)),vc(e,a),fn=!0;else if(l!==4&&(l===27&&(vc(e,a),a=null,so(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(Ap(e,n,t,a),e=e.sibling;e!==null;)Ap(e,n,t,a),e=e.sibling}function yc(e,n,t,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?t.insertBefore(l,n):t.appendChild(l),vc(e,a),fn=!0;else if(l!==4&&(l===27&&(vc(e,a),a=null,so(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(yc(e,n,t,a),e=e.sibling;e!==null;)yc(e,n,t,a),e=e.sibling}function rw(e){for(var n,t=e.return;t!==null;){if(Lb(t)){n=t;break}t=t.return}t=null;for(var a=e.return;a!==null;){if(Mp(a)){var l=a.stateNode;t===null?t=[l]:t.push(l)}if(Ep(a))break;a=a.return}if(n==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(n.tag){case 27:n=n.stateNode,a=Cp(e),yc(e,a,n,t);break;case 5:a=n.stateNode,n.flags&32&&(a1(a),n.flags&=-33),n=Cp(e),yc(e,n,a,t);break;case 3:case 4:n=n.stateNode.containerInfo,a=Cp(e),Ap(e,a,n,t);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function qb(e){var n=e.stateNode,t=e.memoizedProps;try{B(e,vS,e.type,t,n,e)}catch(a){pn(e,e.return,a)}}function Yb(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(bd=!0)}function Zb(){var e=ul;return ul=null,e}function Bi(e,n,t,a,l){return It=0,(n=Xb(e.child,n,t,a,l))&&e._debugTask!=null&&kt===null&&(kt=e._debugTask),n}function Xb(e,n,t,a,l){for(var o=!1;e!==null;){if(e.tag===5){var i=e.stateNode;if(a!==null){var s=sm(i);a.push(s),s.view&&(o=!0)}else o||sm(i).view&&(o=!0);bd=!0,s1(i,It===0?n:n+"_"+It,t),It++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Xb(e.child,n,t,a,l)&&(o=!0));e=e.sibling}return o}function Fa(e,n){for(;e!==null;)e.tag===5?r1(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Fa(e.child,n)),e=e.sibling}function xc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(xc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error("Found a pair with an auto name. This is a bug in React.");var t=n.name;n=xl(n.default,n.share),n!=="none"&&(Bi(e,t,n,null,!1)||Fa(e.child,!1))}e=e.sibling}}function Op(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,l=yl(a,t),o=xl(a.default,t.paired?a.share:a.enter);o!=="none"?Bi(e,l,o,null,!1)?(xc(e),t.paired||n||Li(e,a.onEnter)):Fa(e.child,!1):xc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Op(e,n),e=e.sibling;else xc(e)}function Rp(e){if(ea!==null&&ea.size!==0){var n=ea;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var l=n.get(a);if(l!==void 0){var o=xl(t.default,t.share);if(o!=="none"&&(Bi(e,a,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,Li(e,t.onShare)):Fa(e.child,!1)),n.delete(a),n.size===0)break}}}Rp(e)}e=e.sibling}}}function jp(e){if(e.tag===30){var n=e.memoizedProps,t=yl(n,e.stateNode),a=ea!==null?ea.get(t):void 0,l=xl(n.default,a!==void 0?n.share:n.exit);l!=="none"&&(Bi(e,t,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,ea.delete(t),Li(e,n.onShare)):Li(e,n.onExit):Fa(e.child,!1)),ea!==null&&Rp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jp(e),e=e.sibling;else ea!==null&&Rp(e)}function Qb(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=yl(n,e.stateNode);n=xl(n.default,n.update),e.flags&=-5,n!=="none"&&Bi(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Qb(e);e=e.sibling}}function zp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Fa(e.child,!1))}zp(e)}e=e.sibling}}function _c(e){if(e.tag===30)e.stateNode.paired=null,Fa(e.child,!1),zp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_c(e),e=e.sibling;else zp(e)}function $b(e){for(e=e.child;e!==null;)e.tag===30?Fa(e.child,!1):(e.subtreeFlags&33554432)!==0&&$b(e),e=e.sibling}function kp(e,n,t,a,l,o,i){for(var s=!1;n!==null;){if(n.tag===5){var r=n.stateNode;if(o!==null&&It<o.length){var c=o[It],D=sm(r);(c.view||D.view)&&(s=!0);var V;if(V=(e.flags&4)===0)if(D.clip)V=!0;else{V=c.rect;var U=D.rect;V=V.y!==U.y||V.x!==U.x||V.height!==U.height||V.width!==U.width}V&&(e.flags|=4),D.abs?D=!c.abs:(c=c.rect,D=D.rect,D=c.height!==D.height||c.width!==D.width),D&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&s1(r,It===0?t:t+"_"+It,l),s&&(e.flags&4)!==0||(ul===null&&(ul=[]),ul.push(r,It===0?a:a+"_"+It,n.memoizedProps)),It++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i?e.flags|=n.flags&32:kp(e,n.child,t,a,l,o,i)&&(s=!0));n=n.sibling}return s}function Pb(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,l=yl(t,a),o=xl(t.default,t.update),i;i=e.memoizedState,e.memoizedState=null,a=e;var s=e.child,r=l;It=0,o=kp(a,s,r,l,o,i,!1),(e.flags&4)!==0&&o&&Li(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Pb(e);e=e.sibling}}function Fb(e){var n=e.memoizedProps.name;if(n!=null&&n!=="auto"){var t=vd.get(n);if(t!==void 0){if(t!==e&&t!==e.alternate&&!qx[n]){qx[n]=!0;var a=JSON.stringify(n);B(e,function(){console.error("There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.",a)}),B(t,function(){console.error("The existing <ViewTransition name=%s> duplicate has this stack trace.",a)})}}else vd.set(n,e)}}function Jb(e){var n=e.memoizedProps.name;if(n!=null&&n!=="auto"){var t=vd.get(n);t===void 0||t!==e&&t!==e.alternate||vd.delete(n)}}function Wb(e,n){return n.tag===31?(n=n.memoizedState,e.memoizedState!==null&&n===null):n.tag===13?(e=e.memoizedState,n=n.memoizedState,e!==null&&e.dehydrated!==null&&(n===null||n.dehydrated===null)):n.tag===3?e.memoizedState.isDehydrated&&(n.flags&256)===0:!1}function uw(e,n,t){if(e=e.containerInfo,Jh=Us,e=tg(e),ff(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,r=-1,c=-1,D=0,V=0,U=e,Y=null;n:for(;;){for(var me;U!==a||o!==0&&U.nodeType!==3||(r=s+o),U!==i||l!==0&&U.nodeType!==3||(c=s+l),U.nodeType===3&&(s+=U.nodeValue.length),(me=U.firstChild)!==null;)Y=U,U=me;for(;;){if(U===e)break n;if(Y===a&&++D===o&&(r=s),Y===i&&++V===l&&(c=s),(me=U.nextSibling)!==null)break;U=Y,Y=U.parentNode}U=me}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wh={focusedElem:e,selectionRange:a},Us=!1,t=(t&335544064)===t,tt=n,n=t?9270:1024;tt!==null;){if(e=tt,t&&(a=e.deletions,a!==null))for(o=0;o<a.length;o++)t&&jp(a[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&Yb(e),Nc(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&jp(a),Nc(t);continue}else if(a!==null&&a.memoizedState!==null){t&&Yb(e),Nc(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,tt=a):(t&&Qb(e),Nc(t))}}ea=null}function Nc(e){for(;tt!==null;){var n=tt,t=n,a=e,l=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:(o&1024)!==0&&l!==null&&ow(t,l);break;case 3:if((o&1024)!==0){if(a=t.stateNode.containerInfo,t=a.nodeType,t===9)um(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":um(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=l,l=t,t=yl(a.memoizedProps,a.stateNode),l=l.memoizedProps,l=xl(l.default,l.update),l!=="none"&&Bi(a,t,l,a.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(a=n.sibling,a!==null){a.return=n.return,tt=a;break}tt=n.return}}function Kb(e,n,t){var a=Zt(),l=La(),o=Ya(),i=Za(),s=t.flags;switch(t.tag){case 0:case 11:case 15:Da(e,t),s&4&&Ib(t,Kt|ba);break;case 1:if(Da(e,t),s&4)if(e=t.stateNode,n===null)t.type.defaultProps||"ref"in t.memoizedProps||ws||(e.props!==t.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(t)||"instance"),e.state!==t.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(t)||"instance")),$a(t)?(Qa(),B(t,gh,t,e),Xa()):B(t,gh,t,e);else{var r=$o(t.type,n.memoizedProps);n=n.memoizedState,t.type.defaultProps||"ref"in t.memoizedProps||ws||(e.props!==t.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(t)||"instance"),e.state!==t.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(t)||"instance")),$a(t)?(Qa(),B(t,ax,t,e,r,n,e.__reactInternalSnapshotBeforeUpdate),Xa()):B(t,ax,t,e,r,n,e.__reactInternalSnapshotBeforeUpdate)}s&64&&Vb(t),s&512&&Pa(t,t.return);break;case 3:if(n=Sl(),Da(e,t),s&64&&(s=t.updateQueue,s!==null)){if(r=null,t.child!==null)switch(t.child.tag){case 27:case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}try{B(t,Bg,s,r)}catch(D){pn(t,t.return,D)}}e.effectDuration+=Yu(n);break;case 27:n===null&&s&4&&qb(t);case 26:case 5:if(Da(e,t),n===null){if(s&4)Dp(t);else if(s&64){e=t.type,n=t.memoizedProps,r=t.stateNode;try{B(t,Uw,r,e,n,t)}catch(D){pn(t,t.return,D)}}}s&512&&Pa(t,t.return);break;case 12:if(s&4){s=Sl(),Da(e,t),e=t.stateNode,e.effectDuration+=Ps(s);try{B(t,Hb,t,n,kl,e.effectDuration)}catch(D){pn(t,t.return,D)}}else Da(e,t);break;case 31:Da(e,t),s&4&&av(e,t);break;case 13:Da(e,t),s&4&&lv(e,t),s&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Nw.bind(null,t),fS(e,s))));break;case 22:if(s=t.memoizedState!==null||nt,!s){var c=n!==null&&n.memoizedState!==null||bn;n=nt,r=bn,nt=s,(bn=c)&&!r?(s=yd,(t.subtreeFlags&8772)!==0&&(s|=Oh),sa(e,t,s),(t.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ou(t,Ie,Ue)):Da(e,t),nt=n,bn=r}break;case 30:s&18874368&&Fb(t),Da(e,t),s&512&&Pa(t,t.return);break;case 7:s&512&&Pa(t,t.return);default:Da(e,t)}(t.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&((zn||.05<Cn)&&Ha(t,Ie,Ue,Cn,Tn),t.alternate===null&&t.return!==null&&t.return.alternate!==null&&.05<Ue-Ie&&(Wb(t.return.alternate,t.return)||Ba(t,Ie,Ue,"Mount"))),Xt(a),qa(l),Tn=o,zn=i}function Ip(e,n){for(e=e.child;e!==null;)ev(e,n),e=e.sibling}function ev(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;n?B(e,qw,t):B(e,Xw,e.stateNode,e.memoizedProps)}catch(o){pn(e,e.return,o)}Up(e,n);break;case 6:try{var a=e.stateNode;n?B(e,Yw,a):B(e,Qw,a,e.memoizedProps),fn=!0}catch(o){pn(e,e.return,o)}break;case 18:try{var l=e.stateNode;n?B(e,Lw,l):B(e,Zw,e.stateNode)}catch(o){pn(e,e.return,o)}break;case 22:case 23:e.memoizedState===null&&Ip(e,n);break;default:Ip(e,n)}}function Up(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:ev(t,a);break e;case 22:t.memoizedState===null&&Up(t,a);break e;default:Up(t,a)}}e=e.sibling}}function nv(e){var n=e.alternate;n!==null&&(e.alternate=null,nv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Na(n)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ma(e,n,t){for(t=t.child;t!==null;)tv(e,n,t),t=t.sibling}function tv(e,n,t){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(es,t)}catch(c){nl||(nl=!0,console.error("React instrumentation encountered an error: %o",c))}var a=Zt(),l=La(),o=Ya(),i=Za();switch(t.tag){case 26:bn||ot(t,n),Ma(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!bn&&(e=t.stateNode,e.parentNode.removeChild(e));break;case 27:bn||ot(t,n),sr(t);var s=Yn,r=Ut;so(t.type)&&(Yn=t.stateNode,Ut=!1),Ma(e,n,t),B(t,_1,t.stateNode,t.type,t.memoizedProps),Yn=s,Ut=r;break;case 5:bn||ot(t,n),sr(t);case 6:if(t.tag===6&&sr(t),s=Yn,r=Ut,Yn=null,Ma(e,n,t),Yn=s,Ut=r,Yn!==null)if(Ut)try{B(t,Gw,Yn,t.stateNode),fn=!0}catch(c){pn(t,n,c)}else try{B(t,Hw,Yn,t.stateNode),fn=!0}catch(c){pn(t,n,c)}break;case 18:Yn!==null&&(Ut?(e=Yn,o1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Pi(e)):o1(Yn,t.stateNode));break;case 4:s=Yn,r=Ut,Yn=t.stateNode.containerInfo,Ut=!0,Ma(e,n,t),Yn=s,Ut=r;break;case 0:case 11:case 14:case 15:Vi(Tt,t,n),bn||wp(t,n,Kt),Ma(e,n,t);break;case 1:bn||(ot(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"&&Bb(t,n,s)),Ma(e,n,t);break;case 21:Ma(e,n,t);break;case 22:bn=(s=bn)||t.memoizedState!==null,Ma(e,n,t),bn=s;break;case 30:t.flags&18874368&&Jb(t),ot(t,n),Ma(e,n,t);break;case 7:bn||ot(t,n),Ma(e,n,t);break;default:Ma(e,n,t)}(t.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(t,Ie,Ue,Cn,Tn),Xt(a),qa(l),Tn=o,zn=i}function av(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{B(n,mS,e)}catch(t){pn(n,n.return,t)}}}function lv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{B(n,hS,e)}catch(t){pn(n,n.return,t)}}function cw(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Yx),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Yx),n;default:throw Error("Unexpected Suspense handler tag ("+e.tag+"). This is a bug in React.")}}function wc(e,n){var t=cw(e);n.forEach(function(a){if(!t.has(a)){if(t.add(a),tl)if(Ss!==null&&Es!==null)dr(Es,Ss);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var l=ww.bind(null,e,a);a.then(l,l)}})}function _t(e,n,t){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=e,i=n,s=a[l],r=Zt(),c=i;e:for(;c!==null;){switch(c.tag){case 27:if(so(c.type)){Yn=c.stateNode,Ut=!1;break e}break;case 5:Yn=c.stateNode,Ut=!1;break e;case 3:case 4:Yn=c.stateNode.containerInfo,Ut=!0;break e}c=c.return}if(Yn===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");tv(o,i,s),Yn=null,Ut=!1,(s.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ba(s,Ie,Ue,"Unmount"),Xt(r),o=s,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ov(n,e,t),n=n.sibling}function ov(e,n,t){var a=Zt(),l=La(),o=Ya(),i=Za(),s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var D=s[c];D.ref.impl=D.nextImpl}_t(n,e,t),Nt(e),r&4&&(Vi(Tt|ba,e,e.return),ir(Tt|ba,e),wp(e,e.return,Kt|ba));break;case 1:_t(n,e,t),Nt(e),r&512&&(bn||s===null||ot(s,s.return)),r&64&&nt&&(n=e.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?t:r.concat(t))));break;case 26:if(c=za,_t(n,e,t),Nt(e),r&512&&(bn||s===null||ot(s,s.return)),r&4)if(r=s!==null?s.memoizedState:null,t=e.memoizedState,s===null)if(t===null)if(e.stateNode===null)if(nt)e.stateNode=t1(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,r=c.ownerDocument||c;n:switch(n){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Sr]||s[st]||s.namespaceURI===ts||s.hasAttribute("itemprop"))&&(s=r.createElement(n),r.head.insertBefore(s,r.querySelector("head > title"))),it(s,n,t),s[st]=e,Jn(s),n=s;break e;case"link":if(c=M1("link","href",r).get(n+(t.href||""))){for(D=0;D<c.length;D++)if(s=c[D],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(D,1);break n}}s=r.createElement(n),it(s,n,t),r.head.appendChild(s);break;case"meta":if(c=M1("meta","content",r).get(n+(t.content||""))){for(D=0;D<c.length;D++)if(s=c[D],ke(t.content,"content"),s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(D,1);break n}}s=r.createElement(n),it(s,n,t),r.head.appendChild(s);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+n+'". This is a bug in React.')}s[st]=e,Jn(s),n=s}e.stateNode=n}else nt||gm(c,e.type,e.stateNode);else e.stateNode=E1(c,t,e.memoizedProps);else r!==t?(r===null?(n=s.stateNode,n===null||bn||n.parentNode.removeChild(n)):r.count--,t===null?nt||gm(c,e.type,e.stateNode):E1(c,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Tp(e,e.memoizedProps,s.memoizedProps);break;case 27:_t(n,e,t),Nt(e),r&512&&(bn||s===null||ot(s,s.return)),s!==null&&r&4&&Tp(e,e.memoizedProps,s.memoizedProps);break;case 5:if(c=cl,cl=!1,_t(n,e,t),cl=c,Nt(e),r&512&&(bn||s===null||ot(s,s.return)),e.flags&32){n=e.stateNode;try{B(e,a1,n),fn=!0}catch(me){pn(e,e.return,me)}}r&4&&e.stateNode!=null&&(n=e.memoizedProps,Tp(e,n,s!==null?s.memoizedProps:n)),r&1024&&(Rh=!0,e.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(_t(n,e,t),Nt(e),r&4){if(e.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");n=e.memoizedProps,t=s!==null?s.memoizedProps:n,r=e.stateNode;try{B(e,Bw,r,t,n),fn=!0}catch(me){pn(e,e.return,me)}}break;case 3:if(c=Sl(),fn=!1,qd=null,D=za,za=br(n.containerInfo),_t(n,e,t),za=D,Nt(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{B(e,pS,n.containerInfo)}catch(me){pn(e,e.return,me)}Rh&&(Rh=!1,iv(e)),n.effectDuration+=Yu(c),fn=!1;break;case 4:r=cl,cl=nt,s=x0(),c=za,za=br(e.stateNode.containerInfo),_t(n,e,t),Nt(e),za=c,fn&&nu&&(xd=!0),fn=s,cl=r;break;case 12:r=Sl(),_t(n,e,t),Nt(e),e.stateNode.effectDuration+=Ps(r);break;case 31:_t(n,e,t),Nt(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 13:_t(n,e,t),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Md=Un()),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 22:c=e.memoizedState!==null,D=s!==null&&s.memoizedState!==null;var V=nt,U=bn,Y=cl;nt=V||c,cl=Y||c,bn=U||D,_t(n,e,t),bn=U,cl=Y,nt=V,D&&!c&&!V&&!U&&(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ou(e,Ie,Ue),Nt(e),r&8192&&(n=e.stateNode,n._visibility=c?n._visibility&~jr:n._visibility|jr,!c||s===null||D||nt||bn||(n=yd,t=D||bn,s=nt,D=bn,nt=c||nt,bn=t,lo(e,n),(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ba(e,Ie,Ue,"Disconnect"),nt=s,bn=D),!c&&cl||Ip(e,c)),r&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,wc(e,t))));break;case 19:_t(n,e,t),Nt(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 30:r&512&&(bn||s===null||ot(s,s.return)),r=x0(),c=nu,D=(t&335544064)===t,V=e.memoizedProps,nu=D&&xl(V.default,V.update)!=="none",_t(n,e,t),Nt(e),D&&s!==null&&fn&&(e.flags|=4),nu=c,fn=r;break;case 21:break;case 7:r&512&&(bn||s===null||ot(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:_t(n,e,t),Nt(e)}(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&((zn||.05<Cn)&&Ha(e,Ie,Ue,Cn,Tn),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<Ue-Ie&&(Wb(e.return.alternate,e.return)||Ba(e,Ie,Ue,"Mount"))),Xt(a),qa(l),Tn=o,zn=i}function Nt(e){var n=e.flags;if(n&2){try{B(e,rw,e)}catch(t){pn(e,e.return,t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function iv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;iv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Us=!0,n.reset(),Us=!1),e=e.sibling}}function Hi(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)sv(n,e),n=n.sibling;else Pb(n)}function sv(e,n){var t=e.alternate;if(t===null)Op(e,!1);else switch(e.tag){case 3:if(jh=dl=!1,Zb(),Hi(n,e),!dl&&!xd){if(e=ul,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var l=e[a+1];r1(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),jh=!0}ul=null;break;case 5:Hi(n,e);break;case 4:a=dl,dl=!1,Hi(n,e),dl&&(xd=!0),dl=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Op(e,!1):Hi(n,e));break;case 30:a=dl,l=Zb(),dl=!1,Hi(n,e),dl&&(e.flags|=4);var o=e.memoizedProps,i=e.stateNode;n=yl(o,i),i=yl(t.memoizedProps,i);var s=xl(o.default,o.update);s==="none"?n=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,It=0,n=kp(e,t,n,i,s,o,!0),It!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Li(e,e.memoizedProps.onUpdate),ul=l):l!==null&&(l.push.apply(l,ul),ul=l),dl=(e.flags&32)!==0?!0:a;break;default:Hi(n,e)}}function Da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Kb(e,n.alternate,n),n=n.sibling}function rv(e,n){var t=Zt(),a=La(),l=Ya(),o=Za();switch(e.tag){case 0:case 11:case 14:case 15:wp(e,e.return,Kt),lo(e,n);break;case 1:ot(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&Bb(e,e.return,i),lo(e,n);break;case 27:(n&yd)!==eu&&B(e,_1,e.stateNode,e.type,e.memoizedProps);case 5:ot(e,e.return),e.tag!==5&&e.tag!==27||sr(e),lo(e,n);break;case 6:sr(e);break;case 26:ot(e,e.return),i=e.stateNode,e.memoizedState!==null||i===null||bn||i.parentNode.removeChild(i),lo(e,n);break;case 22:e.memoizedState===null&&lo(e,n);break;case 30:e.flags&18874368&&Jb(e),ot(e,e.return),lo(e,n);break;case 7:ot(e,e.return);default:lo(e,n)}(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(e,Ie,Ue,Cn,Tn),Xt(t),qa(a),Tn=l,zn=o}function lo(e,n){for(e=e.child;e!==null;)rv(e,n),e=e.sibling}function uv(e,n,t,a){var l=Zt(),o=La(),i=Ya(),s=Za(),r=t.flags,c=(a&Oh)!==eu;switch(t.tag){case 0:case 11:case 15:sa(e,t,a),Ib(t,Kt);break;case 1:if(sa(e,t,a),n=t.stateNode,typeof n.componentDidMount=="function"&&B(t,gh,t,n),n=t.updateQueue,n!==null){e=t.stateNode;try{B(t,ZN,n,e)}catch(V){pn(t,t.return,V)}}c&&r&64&&Vb(t),Pa(t,t.return);break;case 27:(a&yd)!==eu&&qb(t);case 5:t.tag!==5&&t.tag!==27||Gb(t),sa(e,t,a),c&&n===null&&r&4&&Dp(t),Pa(t,t.return);break;case 6:Gb(t);break;case 26:var D=t.stateNode;t.memoizedState!==null||D===null||nt||gm(br(D.ownerDocument),t.type,D),sa(e,t,a),c&&n===null&&r&4&&Dp(t),Pa(t,t.return);break;case 12:if(c&&r&4){r=Sl(),sa(e,t,a),c=t.stateNode,c.effectDuration+=Ps(r);try{B(t,Hb,t,n,kl,c.effectDuration)}catch(V){pn(t,t.return,V)}}else sa(e,t,a);break;case 31:sa(e,t,a),c&&r&4&&av(e,t);break;case 13:sa(e,t,a),c&&r&4&&lv(e,t);break;case 22:t.memoizedState===null&&sa(e,t,a),Pa(t,t.return);break;case 30:sa(e,t,a),r&18874368&&Fb(t),Pa(t,t.return);break;case 7:Pa(t,t.return);default:sa(e,t,a)}(t.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(t,Ie,Ue,Cn,Tn),Xt(l),qa(o),Tn=i,zn=s}function sa(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&~Oh,n=n.child;n!==null;)uv(e,n.alternate,n,t),n=n.sibling}function Vp(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&Yo(e),t!=null&&$s(t))}function Bp(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(Yo(n),e!=null&&$s(e))}function ra(e,n,t,a,l){var o=(t&335544064)===t;if(n.subtreeFlags&(o?10262:10256)||n.actualDuration!==0&&(n.alternate===null||n.alternate.child!==n.child))for(n=n.child;n!==null;)o=n.sibling,cv(e,n,t,a,o!==null?o.actualStartTime:l),n=o;else o&&$b(n)}function cv(e,n,t,a,l){var o=Zt(),i=La(),s=Ya(),r=Za(),c=mo,D=(t&335544064)===t;D&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_c(n);var V=n.flags;switch(n.tag){case 0:case 11:case 15:(n.mode&Qe)!==Be&&0<n.actualStartTime&&(n.flags&1)!==0&&Ru(n,n.actualStartTime,l,Qn,t),ra(e,n,t,a,l),V&2048&&Ub(n,bt|ba);break;case 1:(n.mode&Qe)!==Be&&0<n.actualStartTime&&((n.flags&128)!==0?mf(n,n.actualStartTime,l,[]):(n.flags&1)!==0&&Ru(n,n.actualStartTime,l,Qn,t)),ra(e,n,t,a,l);break;case 3:var U=Sl(),Y=Qn;Qn=n.alternate!==null&&n.alternate.memoizedState.isDehydrated&&(n.flags&256)===0,ra(e,n,t,a,l),Qn=Y,D&&jh&&(t=e.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),V&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),a=n.memoizedState.cache,a!==t&&(Yo(a),t!=null&&$s(t))),e.passiveEffectDuration+=Yu(U);break;case 12:if(V&2048){V=Sl(),ra(e,n,t,a,l),e=n.stateNode,e.passiveEffectDuration+=Ps(V);try{B(n,sw,n,n.alternate,kl,e.passiveEffectDuration)}catch(me){pn(n,n.return,me)}}else ra(e,n,t,a,l);break;case 31:V=Qn,U=n.alternate!==null?n.alternate.memoizedState:null,D=n.memoizedState,U!==null&&D===null?(D=n.deletions,D!==null&&0<D.length&&D[0].tag===18?(Qn=!1,U=U.hydrationErrors,U!==null&&mf(n,n.actualStartTime,l,U)):Qn=!0):Qn=!1,ra(e,n,t,a,l),Qn=V;break;case 13:V=Qn,U=n.alternate!==null?n.alternate.memoizedState:null,D=n.memoizedState,U===null||U.dehydrated===null||D!==null&&D.dehydrated!==null?Qn=!1:(D=n.deletions,D!==null&&0<D.length&&D[0].tag===18?(Qn=!1,U=U.hydrationErrors,U!==null&&mf(n,n.actualStartTime,l,U)):Qn=!0),ra(e,n,t,a,l),Qn=V;break;case 23:break;case 22:Y=n.stateNode,U=n.alternate,n.memoizedState!==null?(D&&U!==null&&U.memoizedState===null&&_c(U),Y._visibility&Ol?ra(e,n,t,a,l):rr(e,n,t,a,l)):(D&&U!==null&&U.memoizedState!==null&&_c(n),Y._visibility&Ol?ra(e,n,t,a,l):(Y._visibility|=Ol,Gi(e,n,t,a,(n.subtreeFlags&10256)!==0||n.actualDuration!==0&&(n.alternate===null||n.alternate.child!==n.child),l),(n.mode&Qe)===Be||Qn||(e=n.actualStartTime,0<=e&&.05<l-e&&Ou(n,e,l),0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ou(n,Ie,Ue)))),V&2048&&Vp(U,n);break;case 24:ra(e,n,t,a,l),V&2048&&Bp(n.alternate,n);break;case 30:D&&(V=n.alternate,V!==null&&(Fa(V.child,!0),Fa(n.child,!0))),ra(e,n,t,a,l);break;default:ra(e,n,t,a,l)}(n.mode&Qe)!==Be&&((e=!Qn&&n.alternate===null&&n.return!==null&&n.return.alternate!==null)&&(t=n.actualStartTime,0<=t&&.05<l-t&&Ba(n,t,l,"Mount")),0<=Ie&&0<=Ue&&((zn||.05<Cn)&&Ha(n,Ie,Ue,Cn,Tn),e&&.05<Ue-Ie&&Ba(n,Ie,Ue,"Mount"))),Xt(o),qa(i),Tn=s,zn=r,mo=c}function Gi(e,n,t,a,l,o){for(l=l&&((n.subtreeFlags&10256)!==0||n.actualDuration!==0&&(n.alternate===null||n.alternate.child!==n.child)),n=n.child;n!==null;){var i=n.sibling;dv(e,n,t,a,l,i!==null?i.actualStartTime:o),n=i}}function dv(e,n,t,a,l,o){var i=Zt(),s=La(),r=Ya(),c=Za(),D=mo;l&&(n.mode&Qe)!==Be&&0<n.actualStartTime&&(n.flags&1)!==0&&Ru(n,n.actualStartTime,o,Qn,t);var V=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n,t,a,l,o),Ub(n,bt);break;case 23:break;case 22:var U=n.stateNode;n.memoizedState!==null?U._visibility&Ol?Gi(e,n,t,a,l,o):rr(e,n,t,a,o):(U._visibility|=Ol,Gi(e,n,t,a,l,o)),l&&V&2048&&Vp(n.alternate,n);break;case 24:Gi(e,n,t,a,l,o),l&&V&2048&&Bp(n.alternate,n);break;default:Gi(e,n,t,a,l,o)}(n.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(n,Ie,Ue,Cn,Tn),Xt(i),qa(s),Tn=r,zn=c,mo=D}function rr(e,n,t,a,l){if(n.subtreeFlags&10256||n.actualDuration!==0&&(n.alternate===null||n.alternate.child!==n.child))for(var o=n.child;o!==null;){n=o.sibling;var i=e,s=t,r=a,c=n!==null?n.actualStartTime:l,D=mo;(o.mode&Qe)!==Be&&0<o.actualStartTime&&(o.flags&1)!==0&&Ru(o,o.actualStartTime,c,Qn,s);var V=o.flags;switch(o.tag){case 22:rr(i,o,s,r,c),V&2048&&Vp(o.alternate,o);break;case 24:rr(i,o,s,r,c),V&2048&&Bp(o.alternate,o);break;default:rr(i,o,s,r,c)}mo=D,o=n}}function Po(e,n,t){if(e.subtreeFlags&ci)for(e=e.child;e!==null;)fv(e,n,t),e=e.sibling}function fv(e,n,t){switch(e.tag){case 26:Po(e,n,t),e.flags&ci&&(e.memoizedState!==null?_S(t,za,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&A1(t,e)));break;case 5:Po(e,n,t),e.flags&ci&&(e=e.stateNode,(n&335544128)===n&&A1(t,e));break;case 3:case 4:var a=za;za=br(e.stateNode.containerInfo),Po(e,n,t),za=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ci,ci=16777216,Po(e,n,t),ci=a):Po(e,n,t));break;case 30:if((e.flags&ci)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,ea===null&&(ea=new Map),ea.set(a,l)}Po(e,n,t);break;default:Po(e,n,t)}}function pv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ur(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t],l=Zt();tt=a,gv(a,e),(a.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ba(a,Ie,Ue,"Unmount"),Xt(l)}pv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mv(e),e=e.sibling}function mv(e){var n=Zt(),t=La(),a=Ya(),l=Za();switch(e.tag){case 0:case 11:case 15:ur(e),e.flags&2048&&Sp(e,e.return,bt|ba);break;case 3:var o=Sl();ur(e),e.stateNode.passiveEffectDuration+=Yu(o);break;case 12:o=Sl(),ur(e),e.stateNode.passiveEffectDuration+=Ps(o);break;case 22:o=e.stateNode,e.memoizedState!==null&&o._visibility&Ol&&(e.return===null||e.return.tag!==13)?(o._visibility&=~Ol,Sc(e),(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ba(e,Ie,Ue,"Disconnect")):ur(e);break;default:ur(e)}(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(e,Ie,Ue,Cn,Tn),Xt(n),qa(t),zn=l,Tn=a}function Sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t],l=Zt();tt=a,gv(a,e),(a.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&.05<Ue-Ie&&Ba(a,Ie,Ue,"Unmount"),Xt(l)}pv(e)}for(e=e.child;e!==null;)hv(e),e=e.sibling}function hv(e){var n=Zt(),t=La(),a=Ya(),l=Za();switch(e.tag){case 0:case 11:case 15:Sp(e,e.return,bt),Sc(e);break;case 22:var o=e.stateNode;o._visibility&Ol&&(o._visibility&=~Ol,Sc(e));break;default:Sc(e)}(e.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(e,Ie,Ue,Cn,Tn),Xt(n),qa(t),zn=l,Tn=a}function gv(e,n){for(;tt!==null;){var t=tt,a=t,l=n,o=Zt(),i=La(),s=Ya(),r=Za();switch(a.tag){case 0:case 11:case 15:Sp(a,l,bt);break;case 23:case 22:a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool,l!=null&&Yo(l));break;case 24:$s(a.memoizedState.cache)}if((a.mode&Qe)!==Be&&0<=Ie&&0<=Ue&&(zn||.05<Cn)&&Ha(a,Ie,Ue,Cn,Tn),Xt(o),qa(i),zn=r,Tn=s,a=t.child,a!==null)a.return=t,tt=a;else e:for(t=e;tt!==null;){if(a=tt,o=a.sibling,i=a.return,nv(a),a===t){tt=null;break e}if(o!==null){o.return=i,tt=o;break e}tt=i}}}function dw(){rE.forEach(function(e){return e()})}function bv(){var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return e||ae.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),e}function $t(e){if((rn&$n)!==at&&Le!==0)return Le&-Le;var n=ae.T;return n!==null?(n._updatedFibers||(n._updatedFibers=new Set),n._updatedFibers.add(e),ii!==null&&sn()===jt&&(ii=null),Jp()):(e=sn(),e===jt&&(ii=null),e)}function vv(){if(Bt===0)if((Le&536870912)===0||$e){var e=Gc;Gc<<=1,(Gc&3932160)===0&&(Gc=262144),Bt=e}else Bt=536870912;return e=rt.current,e!==null&&(e.flags|=32),Bt}function Li(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=u1(yl(e.memoizedProps,t))),Ts===null&&(Ts=[]),Ts.push(n.bind(null,a))}}function jn(e,n,t){if(As&&console.error("useInsertionEffect must not schedule updates."),qh&&(jd=!0),(e===Sn&&(vn===fi||vn===pi)||e.cancelPendingCommit!==null)&&(Yi(e,0),oo(e,Le,Bt,!1)),Gt(e,t),(rn&$n)!==at&&e===Sn){if(el)switch(n.tag){case 0:case 11:case 15:e=Fe&&q(Fe)||"Unknown",t_.has(e)||(t_.add(e),n=q(n)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",n,e,e));break;case 1:n_||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),n_=!0)}}else tl&&un(e,n,t),Ew(n),e===Sn&&((rn&$n)===at&&(Do|=t),An===Eo&&oo(e,Le,Bt,!1)),Ja(e)}function yv(e,n,t){if((rn&($n|na))!==at)throw Error("Should not already be working.");if(Le!==0&&Fe!==null){var a=Fe,l=Un();switch(Py){case ou:case fi:var o=Hr;Mn&&((a=a._debugTask)?a.run(console.timeStamp.bind(console,"Suspended",o,l,zt,void 0,"primary-light")):console.timeStamp("Suspended",o,l,zt,void 0,"primary-light"));break;case pi:o=Hr,Mn&&((a=a._debugTask)?a.run(console.timeStamp.bind(console,"Action",o,l,zt,void 0,"primary-light")):console.timeStamp("Action",o,l,zt,void 0,"primary-light"));break;default:Mn&&(a=l-Hr,3>a||console.timeStamp("Blocked",Hr,l,zt,void 0,5>a?"primary-light":10>a?"primary":100>a?"primary-dark":"error"))}}o=(t=!t&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n))?pw(e,n):Gp(e,n,!0);var i=t;do{if(o===Hl){Ms&&!t&&oo(e,n,0,!1),n=vn,Hr=Vn(),Py=n;break}else{if(a=Un(),l=e.current.alternate,i&&!fw(l)){ft(n),l=et,o=a,!Mn||o<=l||(kn?kn.run(console.timeStamp.bind(console,"Teared Render",l,o,nn,Ke,"error")):console.timeStamp("Teared Render",l,o,nn,Ke,"error")),Fo(n,a),o=Gp(e,n,!1),i=!1;continue}if(o===di){if(i=n,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){ft(n),hf(et,a,n,kn),Fo(n,a),n=s;e:{a=e,o=i,i=su;var r=a.current.memoizedState.isDehydrated;if(r&&(Yi(a,s).flags|=256),s=Gp(a,s,!1),s!==di&&s!==lu){if(Ih&&!r){a.errorRecoveryDisabledLanes|=o,Do|=o,o=Eo;break e}a=Ct,Ct=i,a!==null&&(Ct===null?Ct=a:Ct.push.apply(Ct,a))}o=s}if(i=!1,o!==di)continue;a=Un()}}if(o===au){ft(n),hf(et,a,n,kn),Fo(n,a),Yi(e,0),oo(e,n,0,!0);break}e:{switch(t=e,o){case Hl:case au:throw Error("Root did not complete. This is a bug in React.");case Eo:if((n&4194048)!==n&&(n&62914560)!==n)break;case lu:ft(n),ig(et,a,n,kn),Fo(n,a),l=n,(l&127)!==0?ld=a:(l&4194048)!==0&&(od=a),oo(t,n,Bt,!Gl);break e;case di:Ct=null;break;case _d:case Zx:break;default:throw Error("Unknown root exit status.")}if(ae.actQueue!==null)Lp(t,l,n,Ct,ru,Ed,Bt,Do,mi,Gl,o,null,null,et,a);else{if((n&62914560)===n&&(i=Md+$x-Un(),10<i)){if(oo(t,n,Bt,!Gl),la(t,0,!0)!==0)break e;Ht=n,t.timeoutHandle=e0(xv.bind(null,t,l,Ct,ru,Ed,n,Bt,Do,mi,Gl,o,"Throttled",et,a),i);break e}xv(t,l,Ct,ru,Ed,n,Bt,Do,mi,Gl,o,null,et,a)}}}break}while(!0);Ja(e)}function xv(e,n,t,a,l,o,i,s,r,c,D,V,U,Y){e.timeoutHandle=xi;var me=n.subtreeFlags,Me=(o&335544064)===o,Re=null;if((Me||me&8192||(me&16785408)===16785408)&&(Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Va},ea=null,fv(n,o,Re),Me&&(me=Re,Me=e.containerInfo,Me=(Me.nodeType===9?Me:Me.ownerDocument).__reactViewTransition,Me!=null&&(me.count++,me.waitingForViewTransition=!0,me=xr.bind(me),Me.finished.then(me,me))),me=(o&62914560)===o?Md-Un():(o&4194048)===o?Qx-Un():0,me=NS(Re,me),me!==null)){Ht=o,e.cancelPendingCommit=me(Lp.bind(null,e,n,o,t,a,l,i,s,r,c,D,Re,Re.waitingForViewTransition?"Waiting for the previous Animation":0<Re.count?0<Re.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Re.imgCount===1?"Suspended on an Image":0<Re.imgCount?"Suspended on Images":null,U,Y)),oo(e,o,i,!c);return}Lp(e,n,o,t,a,l,i,s,r,c,D,Re,V,U,Y)}function fw(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],o=l.getSnapshot;l=l.value;try{if(!Mt(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oo(e,n,t,a){n=lt(e,n),n&=~Sd,n&=~Do,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var o=31-wt(l),i=1<<o;a[o]=-1,l&=~i}t!==0&&P(e,t,n)}function qi(){return(rn&($n|na))===at?(fr(0),!1):!0}function Hp(){if(Fe!==null){if(vn===Vt)var e=Fe.return;else e=Fe,Hu(),Gf(e),vs=null,Pr=0,e=Fe;for(;e!==null;)kb(e.alternate,e),e=e.return;Fe=null}}function Fo(e,n){(e&127)!==0&&(vo=n),(e&4194048)!==0&&(Oa=n),(e&62914560)!==0&&(fh=n),(e&2080374784)!==0&&(ph=n)}function Yi(e,n){Mn&&(console.timeStamp("Blocking Track",.003,.003,"Blocking",Ke,"primary-light"),console.timeStamp("Transition Track",.003,.003,"Transition",Ke,"primary-light"),console.timeStamp("Suspense Track",.003,.003,"Suspense",Ke,"primary-light"),console.timeStamp("Idle Track",.003,.003,"Idle",Ke,"primary-light"));var t=et;if(et=Vn(),Le!==0&&0<t){if(ft(Le),An===_d||An===Eo)ig(t,et,n,kn);else{var a=et,l=kn;if(Mn&&!(a<=t)){var o=(n&738197653)===n?"tertiary-dark":"primary-dark",i=(n&536870912)===n?"Prewarm":(n&201326741)===n?"Interrupted Hydration":"Interrupted Render";l?l.run(console.timeStamp.bind(console,i,t,a,nn,Ke,o)):console.timeStamp(i,t,a,nn,Ke,o)}}Fo(Le,et)}if(t=kn,kn=null,(n&127)!==0){kn=Ur,l=0<=il&&il<vo?vo:il,a=0<=ni&&ni<vo?vo:ni,o=0<=a?a:0<=l?l:et,0<=ld?(ft(2),sg(ld,o,n,t)):(ai&127)!==0&&(ft(2),Ql(vo,o,kt)),t=l;var s=a,r=Vr,c=0<hs,D=yo===Ir,V=yo===ad;if(l=et,a=Ur,o=uh,i=ch,Mn){if(nn="Blocking",0<t?t>l&&(t=l):t=l,0<s?s>t&&(s=t):s=t,r!==null&&t>s){var U=c?"secondary-light":"warning";a?a.run(console.timeStamp.bind(console,c?"Consecutive":"Event: "+r,s,t,nn,Ke,U)):console.timeStamp(c?"Consecutive":"Event: "+r,s,t,nn,Ke,U)}l>t&&(s=D?"error":(n&738197653)===n?"tertiary-light":"primary-light",D=V?"Promise Resolved":D?"Cascading Update":5<l-t?"Update Blocked":"Update",V=[],i!=null&&V.push(["Component name",i]),o!=null&&V.push(["Method name",o]),t={start:t,end:l,detail:{devtools:{properties:V,track:nn,trackGroup:Ke,color:s}}},a?a.run(performance.measure.bind(performance,D,t)):performance.measure(D,t),performance.clearMeasures(D))}il=-1.1,yo=0,ch=uh=null,ld=-1.1,hs=ni,ni=-1.1,vo=Vn()}return(n&4194048)!==0&&(kn=Br,l=0<=Ul&&Ul<Oa?Oa:Ul,t=0<=ga&&ga<Oa?Oa:ga,a=0<=xo&&xo<Oa?Oa:xo,o=0<=a?a:0<=t?t:et,0<=od?(ft(256),sg(od,o,n,kn)):(ai&4194048)!==0&&(ft(256),Ql(Oa,o,kt)),V=a,s=ti,r=0<_o,c=dh===ad,o=et,a=Br,i=Qy,D=$y,Mn&&(nn="Transition",0<t?t>o&&(t=o):t=o,0<l?l>t&&(l=t):l=t,0<V?V>l&&(V=l):V=l,l>V&&s!==null&&(U=r?"secondary-light":"warning",a?a.run(console.timeStamp.bind(console,r?"Consecutive":"Event: "+s,V,l,nn,Ke,U)):console.timeStamp(r?"Consecutive":"Event: "+s,V,l,nn,Ke,U)),t>l&&(a?a.run(console.timeStamp.bind(console,"Action",l,t,nn,Ke,"primary-dark")):console.timeStamp("Action",l,t,nn,Ke,"primary-dark")),o>t&&(l=c?"Promise Resolved":5<o-t?"Update Blocked":"Update",V=[],D!=null&&V.push(["Component name",D]),i!=null&&V.push(["Method name",i]),t={start:t,end:o,detail:{devtools:{properties:V,track:nn,trackGroup:Ke,color:"primary-light"}}},a?a.run(performance.measure.bind(performance,l,t)):performance.measure(l,t),performance.clearMeasures(l))),ga=Ul=-1.1,dh=0,od=-1.1,_o=xo,xo=-1.1,Oa=Vn()),(n&62914560)!==0&&(ai&62914560)!==0&&(ft(4194304),Ql(fh,et,kt)),(n&2080374784)!==0&&(ai&2080374784)!==0&&(ft(268435456),Ql(ph,et,kt)),t=e.timeoutHandle,t!==xi&&(e.timeoutHandle=xi,_E(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Ht=0,Hp(),Sn=e,Fe=t=_l(e.current,null),Le=n,vn=Vt,ta=null,Gl=!1,Ms=At(e,n),Ih=!1,An=Hl,mi=Bt=Sd=Do=Mo=0,Ct=su=null,Ed=!1,fl=lt(e,n),ju(),e=Hy(),1e3<e-By&&(ae.recentlyCreatedOwnerStacks=0,By=e),Ra.discardPendingWarnings(),t}function _v(e,n){He=null,ae.H=hd,ae.getCurrentStack=null,el=!1,Jt=null,n===bs||n===ud?(n=Ag(),vn=ou):n===bh?(n=Ag(),vn=Xx):vn=n===Th?kh:n!==null&&typeof n=="object"&&typeof n.then=="function"?iu:Nd,ta=n;var t=Fe;t===null?(An=au,fc(e,Yt(n,e.current))):t.mode&Qe&&Df(t)}function Nv(){var e=rt.current;return e===null?!0:(Le&4194048)===Le?gt===null:(Le&62914560)===Le||(Le&536870912)!==0?e===gt:!1}function wv(){var e=ae.H;return ae.H=hd,e===null?hd:e}function Sv(){var e=ae.A;return ae.A=sE,e}function Ec(e){kn===null&&(kn=e._debugTask==null?null:e._debugTask)}function Mc(){An=Eo,Gl||(Le&4194048)!==Le&&rt.current!==null||(Ms=!0),(Mo&134217727)===0&&(Do&134217727)===0||Sn===null||oo(Sn,Le,Bt,!1)}function Gp(e,n,t){var a=rn;rn|=$n;var l=wv(),o=Sv();if(Sn!==e||Le!==n){if(tl){var i=e.memoizedUpdaters;0<i.size&&(dr(e,Le),i.clear()),Oe(e,n)}ru=null,Yi(e,n)}n=!1,i=An;e:do try{if(vn!==Vt&&Fe!==null){var s=Fe,r=ta;switch(vn){case kh:Hp(),i=lu;break e;case ou:case fi:case pi:case iu:rt.current===null&&(n=!0);var c=vn;if(vn=Vt,ta=null,Zi(e,s,r,c),t&&Ms){i=Hl;break e}break;default:c=vn,vn=Vt,ta=null,Zi(e,s,r,c)}}Ev(),i=An;break}catch(D){_v(e,D)}while(!0);return n&&e.shellSuspendCounter++,Hu(),rn=a,ae.H=l,ae.A=o,Fe===null&&(Sn=null,Le=0,ju()),i}function Ev(){for(;Fe!==null;)Mv(Fe)}function pw(e,n){var t=rn;rn|=$n;var a=wv(),l=Sv();if(Sn!==e||Le!==n){if(tl){var o=e.memoizedUpdaters;0<o.size&&(dr(e,Le),o.clear()),Oe(e,n)}ru=null,Dd=Un()+Px,Yi(e,n)}else Ms=At(e,n);e:do try{if(vn!==Vt&&Fe!==null)n:switch(n=Fe,o=ta,vn){case Nd:vn=Vt,ta=null,Zi(e,n,o,Nd);break;case fi:case pi:if(Tg(o)){vn=Vt,ta=null,Dv(n);break}n=function(){vn!==fi&&vn!==pi||Sn!==e||(vn=wd),Ja(e)},o.then(n,n);break e;case ou:vn=wd;break e;case Xx:vn=zh;break e;case wd:Tg(o)?(vn=Vt,ta=null,Dv(n)):(vn=Vt,ta=null,Zi(e,n,o,wd));break;case zh:var i=null;switch(Fe.tag){case 26:i=Fe.memoizedState;case 5:case 27:var s=Fe;if(i?T1(i):s.stateNode.complete){vn=Vt,ta=null;var r=s.sibling;if(r!==null)Fe=r;else{var c=s.return;c!==null?(Fe=c,Dc(c)):Fe=null}break n}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}vn=Vt,ta=null,Zi(e,n,o,zh);break;case iu:vn=Vt,ta=null,Zi(e,n,o,iu);break;case kh:Hp(),An=lu;break e;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}ae.actQueue!==null?Ev():mw();break}catch(D){_v(e,D)}while(!0);return Hu(),ae.H=a,ae.A=l,rn=t,Fe!==null?Hl:(Sn=null,Le=0,ju(),An)}function mw(){for(;Fe!==null&&!BS();)Mv(Fe)}function Mv(e){var n=e.alternate;(e.mode&Qe)!==Be?(Mf(e),n=B(e,_p,n,e,fl),Df(e)):n=B(e,_p,n,e,fl),e.memoizedProps=e.pendingProps,n===null?Dc(e):Fe=n}function Dv(e){var n=B(e,hw,e);e.memoizedProps=e.pendingProps,n===null?Dc(e):Fe=n}function hw(e){var n=e.alternate,t=(e.mode&Qe)!==Be;switch(t&&Mf(e),e.tag){case 15:case 0:n=Db(n,e,e.pendingProps,e.type,void 0,Le);break;case 11:n=Db(n,e,e.pendingProps,e.type.render,e.ref,Le);break;case 5:Gf(e);var a=e;a===Kn&&($e?(Bu(a),a.tag===5&&a.stateNode!=null&&(En=a.stateNode)):(Bu(a),$e=!0));default:kb(n,e),e=Fe=mg(e,fl),n=_p(n,e,fl)}return t&&Df(e),n}function Zi(e,n,t,a){Hu(),Gf(n),vs=null,Pr=0;var l=n.return;try{if(WN(e,l,n,t,Le)){An=au,fc(e,Yt(t,e.current)),Fe=null;return}}catch(o){if(l!==null)throw Fe=l,o;An=au,fc(e,Yt(t,e.current)),Fe=null;return}n.flags&32768?($e||a===Nd?e=!0:Ms||(Le&536870912)!==0?e=!1:(Gl=e=!0,(a===fi||a===pi||a===ou||a===iu)&&(a=rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Tv(n,e)):Dc(n)}function Dc(e){var n=e;do{if((n.flags&32768)!==0){Tv(n,Gl);return}var t=n.alternate;if(e=n.return,Mf(n),t=B(n,tw,t,n,fl),(n.mode&Qe)!==Be&&wg(n),t!==null){Fe=t;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=e}while(n!==null);An===Hl&&(An=Zx)}function Tv(e,n){do{var t=aw(e.alternate,e);if(t!==null){t.flags&=32767,Fe=t;return}if((e.mode&Qe)!==Be){wg(e),t=e.actualDuration;for(var a=e.child;a!==null;)t+=a.actualDuration,a=a.sibling;e.actualDuration=t}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Fe=e;return}Fe=e=t}while(e!==null);An=lu,Fe=null}function Lp(e,n,t,a,l,o,i,s,r,c,D,V,U,Y,me){e.cancelPendingCommit=null;do cr();while(On!==pl);if(Ra.flushLegacyContextWarning(),Ra.flushPendingUnsafeLifecycleWarnings(),(rn&($n|na))!==at)throw Error("Should not already be working.");if(ft(t),D===di)hf(Y,me,t,kn);else if(a!==null){if(c=n!==null&&n.alternate!==null&&n.alternate.memoizedState.isDehydrated&&(n.flags&256)!==0,o=kn,Mn&&!(me<=Y)){D=[];for(var Me=0;Me<a.length;Me++){var Re=a[Me].value;D.push(["Recoverable Error",typeof Re=="object"&&Re!==null&&typeof Re.message=="string"?String(Re.message):String(Re)])}Y={start:Y,end:me,detail:{devtools:{color:"primary-dark",track:nn,trackGroup:Ke,tooltipText:c?"Hydration Failed":"Recovered after Error",properties:D}}},o?o.run(performance.measure.bind(performance,"Recovered",Y)):performance.measure("Recovered",Y),performance.clearMeasures("Recovered")}}else o=kn,!Mn||me<=Y||(c=(t&738197653)===t?"tertiary-dark":"primary-dark",D=(t&536870912)===t?"Prepared":(t&201326741)===t?"Hydrated":"Render",o?o.run(console.timeStamp.bind(console,D,Y,me,nn,Ke,c)):console.timeStamp(D,Y,me,nn,Ke,c));if(n!==null){if(t===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),n===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e===Sn&&(Fe=Sn=null,Le=0),hi=n,ka=e,Ht=t,Gh=l,Kx=a,Ad=me,Od=U,aa=Td,Lh=null,gw(e,n,t,i,s,r,V,U,me)}}function gw(e,n,t,a,l,o,i,s,r){var c=n.lanes|n.childLanes;if(Hh=c,c|=lh,g(e,t,c,a,l,o),Ts=null,(t&335544064)===t?(Cs=GN(e),a=10262):(Cs=null,a=10256),n.actualDuration!==0||(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Sw(Ki,function(){return hu=window.event,aa===Td&&(aa=Uh),Xp(),null})):(e.callbackNode=null,e.callbackPriority=0),Il=null,kl=Vn(),s!==null&&BN(r,kl,s,kn),bd=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=ae.T,ae.T=null,r=mn.p,mn.p=jt,a=rn,rn|=na;try{uw(e,n,t)}finally{rn=a,mn.p=r,ae.T=s}}On=Jx,bd?(ai|=t,kt=null,Ds=Kw(i,e.containerInfo,Cs,qp,Yp,xw,Zp,Xp,bw,vw,yw.bind(null,t))):(qp(),Yp(),Zp())}function bw(e){if(On!==pl){var n=ka.onRecoverableError;n(e,Cv(null))}}function vw(e){Aa=Vn(),ug(Od===null?Ad:kl,Aa,Il,aa===uu,kn),Od=Lh=e}function yw(e){if((ai&e)!==0){var n=kt;ai&=~e,kt=null,(e&4194048)!==0&&(Le&4194048)===0&&(Ht&4194048)===0&&(ft(256),Ql(Oa,Un(),n)),(e&62914560)!==0&&(Le&62914560)===0&&(Ht&62914560)===0&&(ft(4194304),Ql(fh,Un(),n)),(e&2080374784)!==0&&(Le&2080374784)===0&&(Ht&2080374784)===0&&(ft(268435456),Ql(ph,Un(),n))}}function xw(){On===Vh&&(On=pl,sv(hi,ka),On=Bh)}function qp(){if(On===Jx){On=pl;var e=ka,n=hi,t=Ht,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=ae.T,ae.T=null;var l=mn.p;mn.p=jt;var o=rn;rn|=na;try{Ss=t,Es=e,nu=xd=!1,Zu(),ov(n,e,t),Es=Ss=null,t=Wh;var i=tg(e.containerInfo),s=t.focusedElem,r=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&ng(s.ownerDocument.documentElement,s)){if(r!==null&&ff(s)){var c=r.start,D=r.end;if(D===void 0&&(D=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(D,s.value.length);else{var V=s.ownerDocument||document,U=V&&V.defaultView||window;if(U.getSelection){var Y=U.getSelection(),me=s.textContent.length,Me=Math.min(r.start,me),Re=r.end===void 0?Me:Math.min(r.end,me);!Y.extend&&Me>Re&&(i=Re,Re=Me,Me=i);var Ze=eg(s,Me),j=eg(s,Re);if(Ze&&j&&(Y.rangeCount!==1||Y.anchorNode!==Ze.node||Y.anchorOffset!==Ze.offset||Y.focusNode!==j.node||Y.focusOffset!==j.offset)){var z=V.createRange();z.setStart(Ze.node,Ze.offset),Y.removeAllRanges(),Me>Re?(Y.addRange(z),Y.extend(j.node,j.offset)):(z.setEnd(j.node,j.offset),Y.addRange(z))}}}}for(V=[],Y=s;Y=Y.parentNode;)Y.nodeType===1&&V.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<V.length;s++){var H=V[s];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Us=!!Jh,Wh=Jh=null}finally{rn=o,mn.p=l,ae.T=a}}e.current=n,On=Wx}}function Yp(){if(On===Wx){On=pl;var e=Lh;if(e!==null){kl=Vn();var n=Aa,t=kl;!Mn||t<=n||(kt?kt.run(console.timeStamp.bind(console,e,n,t,nn,Ke,"secondary-light")):console.timeStamp(e,n,t,nn,Ke,"secondary-light"))}e=ka,n=hi,t=Ht;var a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ae.T,ae.T=null;var l=mn.p;mn.p=jt;var o=rn;rn|=na;try{Ss=t,Es=e,Zu(),Kb(e,n.alternate,n),Es=Ss=null}finally{rn=o,mn.p=l,ae.T=a}}e=Ad,n=Od,Aa=Vn(),ug(n===null?e:kl,Aa,Il,aa===uu,kn),On=Vh}}function Zp(){if(On===Bh||On===Vh){if(On===Bh){var e=Aa;Aa=Vn();var n=Aa,t=aa===uu;!Mn||n<=e||(kt?kt.run(console.timeStamp.bind(console,t?"Interrupted View Transition":"Starting Animation",e,n,nn,Ke,t?"error":"secondary-light")):console.timeStamp(t?"Interrupted View Transition":"Starting Animation",e,n,nn,Ke,t?" error":"secondary-light")),aa!==uu&&(aa=Fx)}On=pl,e=Ds,Ds=null,HS(),n=ka;var a=hi;t=Ht;var l=Kx,o=(t&335544064)===t?10262:10256;(o=a.actualDuration!==0||(a.subtreeFlags&o)!==0||(a.flags&o)!==0)?On=Cd:(On=pl,hi=ka=null,Av(n,n.pendingLanes),gi=0,du=null);var i=n.pendingLanes;if(i===0&&(To=null),o||zv(n),i=Ge(t),a=a.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{var s=(a.current.flags&128)===128;switch(i){case jt:var r=Um;break;case al:r=Vm;break;case Tl:r=Ki;break;case qc:r=Bm;break;default:r=Ki}mt.onCommitFiberRoot(es,a,r,s)}catch(U){nl||(nl=!0,console.error("React instrumentation encountered an error: %o",U))}if(tl&&n.memoizedUpdaters.clear(),dw(),l!==null){s=ae.T,r=mn.p,mn.p=jt,ae.T=null;try{var c=n.onRecoverableError;for(a=0;a<l.length;a++){var D=l[a],V=Cv(D.stack);B(D.source,c,D.value,V)}}finally{ae.T=s,mn.p=r}}if(c=Ts,D=Cs,Cs=null,c!==null&&(Ts=null,D===null&&(D=[]),e!==null))for(V=0;V<c.length;V++)l=(0,c[V])(D),l!==void 0&&e.finished.finally(l);(Ht&3)!==0&&cr(),Ja(n),i=n.pendingLanes,(t&261930)!==0&&(i&42)!==0?(sd=!0,n===Rd?cu++:(cu=0,Rd=n)):(cu=0,Rd=null),o||Fo(t,Aa),fr(0)}}function Cv(e){return e={componentStack:e},Object.defineProperty(e,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),e}function Av(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function cr(){return Ds!==null&&(Ds.skipTransition(),e_||(e_=!0,console.warn("A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.")),Ds=null,aa=uu),qp(),Yp(),Zp(),Xp()}function Xp(){if(On!==Cd)return!1;var e=ka,n=Hh;Hh=0;var t=Ge(Ht),a=Tl>t?Tl:t;t=ae.T;var l=mn.p;try{mn.p=a,ae.T=null;var o=Gh;Gh=null,a=ka;var i=Ht;if(On=pl,hi=ka=null,Ht=0,(rn&($n|na))!==at)throw Error("Cannot flush passive effects while already rendering.");ft(i),qh=!0,jd=!1;var s=0;if(Il=null,s=Un(),aa===Fx)Ql(Aa,s,kt);else{var r=Aa,c=s,D=aa===Uh;!Mn||c<=r||(kn?kn.run(console.timeStamp.bind(console,D?"Waiting for Paint":"Waiting",r,c,nn,Ke,"secondary-light")):console.timeStamp(D?"Waiting for Paint":"Waiting",r,c,nn,Ke,"secondary-light"))}r=rn,rn|=na;var V=a.current;Zu(),mv(V);var U=a.current;V=Ad,Zu(),cv(a,U,i,o,V),zv(a),rn=r;var Y=Un();if(U=s,V=kn,Il!==null?rg(U,Y,Il,!0,V):!Mn||Y<=U||(V?V.run(console.timeStamp.bind(console,"Remaining Effects",U,Y,nn,Ke,"secondary-dark")):console.timeStamp("Remaining Effects",U,Y,nn,Ke,"secondary-dark")),Fo(i,Y),fr(0,!1),jd?a===du?gi++:(gi=0,du=a):gi=0,jd=qh=!1,mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(es,a)}catch(Me){nl||(nl=!0,console.error("React instrumentation encountered an error: %o",Me))}var me=a.current.stateNode;return me.effectDuration=0,me.passiveEffectDuration=0,!0}finally{mn.p=l,ae.T=t,Av(e,n)}}function Ov(e,n,t){n=Yt(t,n),Sg(n),n=cp(e.stateNode,n,2),e=eo(e,n,2),e!==null&&(Gt(e,2),Ja(e))}function pn(e,n,t){if(As=!1,e.tag===3)Ov(e,e,t);else{for(;n!==null;){if(n.tag===3){Ov(n,e,t);return}if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(To===null||!To.has(a))){e=Yt(t,e),Sg(e),t=dp(2),a=eo(n,t,2),a!==null&&(fp(t,a,n,e),Gt(a,2),Ja(a));return}}n=n.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,t)}}function Qp(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new uE;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(Ih=!0,l.add(t),a=_w.bind(null,e,n,t),tl&&dr(e,t),n.then(a,a))}function _w(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,(t&127)!==0?0>il&&(vo=il=Vn(),Ur=td("Promise Resolved"),yo=ad):(t&4194048)!==0&&0>ga&&(Oa=ga=Vn(),Br=td("Promise Resolved"),dh=ad),bv()&&ae.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Sn===e&&(Le&t)===t&&((An===Eo||An===_d&&(Le&62914560)===Le&&Un()-Md<$x)&&(rn&$n)===at?Yi(e,0):Sd|=t,mi===Le&&(mi=0)),Ja(e)}function Rv(e,n){n===0&&(n=gl()),e=pt(e,n),e!==null&&(Gt(e,n),Ja(e))}function Nw(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rv(e,t)}function ww(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}a!==null&&a.delete(n),Rv(e,t)}function $p(e,n,t){if((n.subtreeFlags&134225920)!==0)for(n=n.child;n!==null;){var a=e,l=n,o=l.type===Ic;o=t||o,l.tag!==22?l.flags&134217728?o&&B(l,jv,a,l):$p(a,l,o):l.memoizedState===null&&(o&&l.flags&134225920?B(l,jv,a,l):l.subtreeFlags&134217728&&B(l,$p,a,l,o)),n=n.sibling}}function jv(e,n){an(!0);try{rv(n,eu),hv(n),uv(e,n.alternate,n,eu),dv(e,n,0,null,!1,0)}finally{an(!1)}}function zv(e){var n=!0;e.current.mode&(ht|Ca)||(n=!1),$p(e,e.current,n)}function kv(e){if((rn&$n)===at){var n=e.tag;if(n===3||n===1||n===0||n===11||n===14||n===15){if(n=q(e)||"ReactComponent",zd!==null){if(zd.has(n))return;zd.add(n)}else zd=new Set([n]);B(e,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function dr(e,n){tl&&e.memoizedUpdaters.forEach(function(t){un(e,t,n)})}function Sw(e,n){var t=ae.actQueue;return t!==null?(t.push(n),fE):Im(e,n)}function Ew(e){bv()&&ae.actQueue===null&&B(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,q(e))})}function Ja(e){e!==Rs&&e.next===null&&(Rs===null?Os=Rs=e:Rs=Rs.next=e),kd=!0,ae.actQueue!==null?Zh||(Zh=!0,Bv()):Yh||(Yh=!0,Bv())}function fr(e,n){if(!Xh&&kd){Xh=!0;do for(var t=!1,a=Os;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var i=a.suspendedLanes,s=a.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=l&~(i&~s),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Vv(a,o))}else o=Le,o=la(a,a===Sn?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==xi),(o&3)===0||At(a,o)||(t=!0,Vv(a,o));a=a.next}while(t);Xh=!1}}function Mw(){hu=window.event,Pp()}function Pp(){kd=Zh=Yh=!1;var e=0;Co!==0&&zw()&&(e=Co);for(var n=Un(),t=null,a=Os;a!==null;){var l=a.next,o=Iv(a,n);o===0?(a.next=null,t===null?Os=l:t.next=l,l===null&&(Rs=t)):(t=a,(e!==0||(o&3)!==0)&&(kd=!0)),a=l}On!==pl&&On!==Cd||fr(e),Co!==0&&(Co=0)}function Iv(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var i=31-wt(o),s=1<<i,r=l[i];r===-1?((s&t)===0||(s&a)!==0)&&(l[i]=hl(s,n)):r<=n&&(e.expiredLanes|=s),o&=~s}if(n=Sn,t=Le,t=la(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==xi),a=e.callbackNode,t===0||e===n&&(vn===fi||vn===pi)||e.cancelPendingCommit!==null)return a!==null&&Fp(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||At(e,t)){if(n=t&-t,n!==e.callbackPriority||ae.actQueue!==null&&a!==Qh)Fp(a);else return n;switch(Ge(t)){case jt:case al:t=Vm;break;case Tl:t=Ki;break;case qc:t=Bm;break;default:t=Ki}return a=Uv.bind(null,e),ae.actQueue!==null?(ae.actQueue.push(a),t=Qh):t=Im(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&Fp(a),e.callbackPriority=2,e.callbackNode=null,2}function Uv(e,n){if(sd=id=!1,hu=window.event,On!==pl&&On!==Cd)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(aa===Td&&(aa=Uh),cr()&&e.callbackNode!==t)return null;var a=Le;return a=la(e,e===Sn?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==xi),a===0?null:(yv(e,a,n),Iv(e,Un()),e.callbackNode!=null&&e.callbackNode===t?Uv.bind(null,e):null)}function Vv(e,n){if(cr())return null;id=sd,sd=!1,yv(e,n,!0)}function Fp(e){e!==Qh&&e!==null&&VS(e)}function Bv(){ae.actQueue!==null&&ae.actQueue.push(function(){return Pp(),null}),NE(function(){(rn&($n|na))!==at?Im(Um,Mw):Pp()})}function Jp(){if(Co===0){var e=No;e===0&&(e=Hc,Hc<<=1,(Hc&261888)===0&&(Hc=256)),Co=e}return Co}function Hv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:(ke(e,"action"),Ys(e))}function Dw(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var o=Hv((l[St]||null).action),i=a.submitter;i&&(n=(n=i[St]||null)?Hv(n.formAction):i.getAttribute("formAction"),n!==null&&(o=n,i=null));var s=new Pc("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Co!==0){var r=new FormData(l,i),c={pending:!0,data:r,method:l.method,action:o};Object.freeze(c),ap(t,c,null,r)}}else typeof o=="function"&&(s.preventDefault(),r=new FormData(l,i),c={pending:!0,data:r,method:l.method,action:o},Object.freeze(c),ap(t,c,o,r))},currentTarget:l}]})}}function Tc(e,n,t){e.currentTarget=t;try{n(e)}catch(a){eh(a)}e.currentTarget=null}function Gv(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t];e:{var l=void 0,o=a.event;if(a=a.listeners,n)for(var i=a.length-1;0<=i;i--){var s=a[i],r=s.instance,c=s.currentTarget;if(s=s.listener,r!==l&&o.isPropagationStopped())break e;r!==null?B(r,Tc,o,s,c):Tc(o,s,c),l=r}else for(i=0;i<a.length;i++){if(s=a[i],r=s.instance,c=s.currentTarget,s=s.listener,r!==l&&o.isPropagationStopped())break e;r!==null?B(r,Tc,o,s,c):Tc(o,s,c),l=r}}}}function ln(e,n){$h.has(e)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var t=n[K1];t===void 0&&(t=n[K1]=new Set);var a=e+"__bubble";t.has(a)||(Lv(n,e,2,!1),t.add(a))}function Wp(e,n,t){$h.has(e)&&!n&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var a=0;n&&(a|=4),Lv(t,e,a,n)}function Kp(e){if(!e[Id]){e[Id]=!0,ny.forEach(function(t){t!=="selectionchange"&&($h.has(t)||Wp(t,!1,e),Wp(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Id]||(n[Id]=!0,Wp("selectionchange",!1,n))}}function Lv(e,n,t,a){switch(U1(n)){case jt:var l=DS;break;case al:l=TS;break;default:l=ym}t=l.bind(null,n,t,e),l=void 0,!Ym||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function em(e,n,t,a,l){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===l)break;if(i===4)for(i=a.return;i!==null;){var r=i.tag;if((r===3||r===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;s!==null;){if(i=bl(s),i===null)return;if(r=i.tag,r===5||r===6||r===26||r===27){a=o=i;continue e}s=s.parentNode}}a=a.return}q0(function(){var c=o,D=uf(t),V=[];e:{var U=Vy.get(e);if(U!==void 0){var Y=Pc,me=e;switch(e){case"keypress":if(Du(t)===0)break e;case"keydown":case"keyup":Y=E3;break;case"focusin":me="focus",Y=$m;break;case"focusout":me="blur",Y=$m;break;case"beforeblur":case"afterblur":Y=$m;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=p3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=A3;break;case zy:case ky:case Iy:Y=g3;break;case Uy:Y=R3;break;case"scroll":case"scrollend":Y=d3;break;case"wheel":Y=z3;break;case"copy":case"cut":case"paste":Y=v3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=My;break;case"submit":Y=T3;break;case"toggle":case"beforetoggle":Y=I3}var Me=(n&4)!==0,Re=!Me&&(e==="scroll"||e==="scrollend"),Ze=Me?U!==null?U+"Capture":null:U;Me=[];for(var j=c,z;j!==null;){var H=j;if(z=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||z===null||Ze===null||(H=Zs(j,Ze),H!=null&&Me.push(pr(j,H,z))),Re)break;j=j.return}0<Me.length&&(U=new Y(U,me,null,t,D),V.push({event:U,listeners:Me}))}}if((n&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",Y&&t!==Er&&(me=t.relatedTarget||t.fromElement)&&(bl(me)||me[co]))break e;(U||Y)&&(me=D.window===D?D:(Y=D.ownerDocument)?Y.defaultView||Y.parentWindow:window,U?(Y=t.relatedTarget||t.toElement,U=c,Y=Y?bl(Y):null,Y!==null&&(Re=_(Y),Me=Y.tag,Y!==Re||Me!==5&&Me!==27&&Me!==6)&&(Y=null)):(U=null,Y=c),U!==Y&&(Me=Sy,H="onMouseLeave",Ze="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Me=My,H="onPointerLeave",Ze="onPointerEnter",j="pointer"),Re=U==null?me:Bs(U),z=Y==null?me:Bs(Y),me=new Me(H,j+"leave",U,t,D),me.target=Re,me.relatedTarget=z,H=null,bl(D)===c&&(Me=new Me(Ze,j+"enter",Y,t,D),Me.target=z,Me.relatedTarget=Re,H=Me),Re=H,Me=U&&Y?ne(U,Y,Tw):null,U!==null&&qv(V,me,U,Me,!1),Y!==null&&Re!==null&&qv(V,Re,Y,Me,!0)))}e:{if(U=c?Bs(c):window,Y=U.nodeName&&U.nodeName.toLowerCase(),Y==="select"||Y==="input"&&U.type==="file")var ee=F0;else if($0(U))if(Ry)ee=IN;else{ee=zN;var _e=jN}else Y=U.nodeName,!Y||Y.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?c&&qs(c.elementType)&&(ee=F0):ee=kN;if(ee&&(ee=ee(e,c))){P0(V,ee,t,D);break e}_e&&_e(e,U,c)}switch(_e=c?Bs(c):window,e){case"focusin":($0(_e)||_e.contentEditable==="true")&&(ss=_e,Fm=c,Rr=null);break;case"focusout":Rr=Fm=ss=null;break;case"mousedown":Jm=!0;break;case"contextmenu":case"mouseup":case"dragend":Jm=!1,ag(V,t,D);break;case"selectionchange":if(H3)break;case"keydown":case"keyup":ag(V,t,D)}var Ve;if(Pm)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else is?X0(e,t)&&(je="onCompositionEnd"):e==="keydown"&&t.keyCode===Dy&&(je="onCompositionStart");je&&(Ty&&t.locale!=="ko"&&(is||je!=="onCompositionStart"?je==="onCompositionEnd"&&is&&(Ve=Y0()):(fo=D,Zm="value"in fo?fo.value:fo.textContent,is=!0)),_e=Cc(c,je),0<_e.length&&(je=new Ey(je,e,null,t,D),V.push({event:je,listeners:_e}),Ve?je.data=Ve:(Ve=Q0(t),Ve!==null&&(je.data=Ve)))),(Ve=V3?CN(e,t):AN(e,t))&&(je=Cc(c,"onBeforeInput"),0<je.length&&(_e=new x3("onBeforeInput","beforeinput",null,t,D),V.push({event:_e,listeners:je}),_e.data=Ve)),Dw(V,e,c,t,D)}Gv(V,n)})}function pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Cc(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Zs(e,t),l!=null&&a.unshift(pr(e,l,o)),l=Zs(e,n),l!=null&&a.push(pr(e,l,o))),e.tag===3)return a;e=e.return}return[]}function Tw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qv(e,n,t,a,l){for(var o=n._reactName,i=[];t!==null&&t!==a;){var s=t,r=s.alternate,c=s.stateNode;if(s=s.tag,r!==null&&r===a)break;s!==5&&s!==26&&s!==27||c===null||(r=c,l?(c=Zs(t,o),c!=null&&i.unshift(pr(t,c,r))):l||(c=Zs(t,o),c!=null&&i.push(pr(t,c,r)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}function nm(e,n){EN(e,n),e!=="input"&&e!=="textarea"&&e!=="select"||n==null||n.value!==null||Ny||(Ny=!0,e==="select"&&n.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var t={registrationNameDependencies:Wo,possibleRegistrationNames:Hm};qs(e)||typeof n.is=="string"||DN(e,n,t),n.contentEditable&&!n.suppressContentEditableWarning&&n.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function Wn(e,n,t,a){n!==t&&(t=io(t),io(n)!==t&&(a[e]=n))}function Yv(e){return!!(e.getAttribute("vt-share")||e.getAttribute("vt-exit")||e.getAttribute("vt-enter")||e.getAttribute("vt-update"))}function Zv(e){if(!Yv(e))return!1;var n=e.getAttribute("vt-name");return e=e.style["view-transition-name"],n?n===e:e.startsWith("_T_")}function Cw(e,n,t){n.forEach(function(a){a==="style"?e.getAttribute(a)!==""&&(a=e.style,(a.length===1&&a[0]==="view-transition-name"||a.length===2&&a[0]==="view-transition-class"&&a[1]==="view-transition-name")&&Zv(e)||(t.style=am(e))):t[$v(a)]=e.getAttribute(a)})}function Wa(e,n){n===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof n)}function Xv(e,n){return e=e.namespaceURI===Xc||e.namespaceURI===ts?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=n,e.innerHTML}function io(e){return we(e)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Ee(e)),ze(e)),(typeof e=="string"?e:""+e).replace(pE,`
`).replace(mE,"")}function Qv(e,n){return n=io(n),io(e)===n}function xn(e,n,t,a,l,o){switch(t){case"children":if(typeof a=="string")Mu(a,n,!1),n==="body"||n==="textarea"&&a===""||Ls(e,a);else if(typeof a=="number"||typeof a=="bigint")Mu(""+a,n,!1),n!=="body"&&Ls(e,""+a);else return;break;case"className":Su(e,"class",a);break;case"tabIndex":Su(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Su(e,t,a);break;case"style":H0(e,a,o);return;case"data":if(n!=="object"){Su(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){console.error(t==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',t,t),e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}ke(a,t),a=Ys(a),e.setAttribute(t,a);break;case"action":case"formAction":if(a!=null&&(n==="form"?t==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof a=="function"&&(l.encType==null&&l.method==null||Bd||(Bd=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),l.target==null||Vd||(Vd=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):n==="input"||n==="button"?t==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):n!=="input"||l.type==="submit"||l.type==="image"||Ud?n!=="button"||l.type==null||l.type==="submit"||Ud?typeof a=="function"&&(l.name==null||o_||(o_=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),l.formEncType==null&&l.formMethod==null||Bd||(Bd=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),l.formTarget==null||Vd||(Vd=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Ud=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Ud=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):console.error(t==="action"?"You can only pass the action prop to <form>.":"You can only pass the formAction prop to <input> or <button>.")),typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&xn(e,n,"name",l.name,l,null),xn(e,n,"formEncType",l.formEncType,l,null),xn(e,n,"formMethod",l.formMethod,l,null),xn(e,n,"formTarget",l.formTarget,l,null)):(xn(e,n,"encType",l.encType,l,null),xn(e,n,"method",l.method,l,null),xn(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}ke(a,t),a=Ys(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(typeof a!="function"&&Wa(t,a),e.onclick=Va);return;case"onScroll":a!=null&&(typeof a!="function"&&Wa(t,a),ln("scroll",e));return;case"onScrollEnd":a!=null&&(typeof a!="function"&&Wa(t,a),ln("scrollend",e));return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(t=a.__html,t!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}ke(a,t),t=Ys(a),e.setAttributeNS(bi,"xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?(ke(a,t),e.setAttribute(t,a)):e.removeAttribute(t);break;case"inert":a!==""||Hd[t]||(Hd[t]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",t));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?(ke(a,t),e.setAttribute(t,a)):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?(ke(a,t),e.setAttribute(t,a)):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):(ke(a,t),e.setAttribute(t,a));break;case"popover":ln("beforetoggle",e),ln("toggle",e),wu(e,"popover",a);break;case"xlinkActuate":vl(e,bi,"xlink:actuate",a);break;case"xlinkArcrole":vl(e,bi,"xlink:arcrole",a);break;case"xlinkRole":vl(e,bi,"xlink:role",a);break;case"xlinkShow":vl(e,bi,"xlink:show",a);break;case"xlinkTitle":vl(e,bi,"xlink:title",a);break;case"xlinkType":vl(e,bi,"xlink:type",a);break;case"xmlBase":vl(e,Ph,"xml:base",a);break;case"xmlLang":vl(e,Ph,"xml:lang",a);break;case"xmlSpace":vl(e,Ph,"xml:space",a);break;case"is":o!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),wu(e,"is",a);break;case"innerText":case"textContent":return;case"popoverTarget":i_||a==null||typeof a!="object"||(i_=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",a));default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=G0(t),wu(e,t,a);else{Wo.hasOwnProperty(t)&&a!=null&&typeof a!="function"&&Wa(t,a);return}}fn=!0}function tm(e,n,t,a,l,o){switch(t){case"style":H0(e,a,o);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(t=a.__html,t!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")Ls(e,a);else if(typeof a=="number"||typeof a=="bigint")Ls(e,""+a);else return;break;case"onScroll":a!=null&&(typeof a!="function"&&Wa(t,a),ln("scroll",e));return;case"onScrollEnd":a!=null&&(typeof a!="function"&&Wa(t,a),ln("scrollend",e));return;case"onClick":a!=null&&(typeof a!="function"&&Wa(t,a),e.onclick=Va);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(Wo.hasOwnProperty(t))a!=null&&typeof a!="function"&&Wa(t,a);else e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),o=t.slice(2,l?t.length-7:void 0),n=e[St]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(o,n,l),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,a,l);break e}fn=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):wu(e,t,a)}return}fn=!0}function it(e,n,t){switch(nm(n,t),n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ln("error",e),ln("load",e);var a=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var i=t[o];if(i!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:xn(e,n,o,i,t,null)}}l&&xn(e,n,"srcSet",t.srcSet,t,null),a&&xn(e,n,"src",t.src,t,null);return;case"input":Di("input",t),ln("invalid",e);var s=o=i=l=null,r=null,c=null;for(a in t)if(t.hasOwnProperty(a)){var D=t[a];if(D!=null)switch(a){case"name":l=D;break;case"type":i=D;break;case"checked":r=D;break;case"defaultChecked":c=D;break;case"value":o=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:xn(e,n,a,D,t,null)}}S0(e,t),E0(e,o,s,r,c,i,l,!1);return;case"select":Di("select",t),ln("invalid",e),a=i=o=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:xn(e,n,l,s,t,null)}T0(e,t),n=o,t=i,e.multiple=!!a,n!=null?Ti(e,!!a,n,!1):t!=null&&Ti(e,!!a,t,!0);return;case"textarea":Di("textarea",t),ln("invalid",e),o=l=a=null;for(i in t)if(t.hasOwnProperty(i)&&(s=t[i],s!=null))switch(i){case"value":a=s;break;case"defaultValue":l=s;break;case"children":o=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:xn(e,n,i,s,t,null)}C0(e,t),O0(e,a,l,o);return;case"option":M0(e,t);for(r in t)if(t.hasOwnProperty(r)&&(a=t[r],a!=null))switch(r){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xn(e,n,r,a,t,null)}return;case"dialog":ln("beforetoggle",e),ln("toggle",e),ln("cancel",e),ln("close",e);break;case"iframe":case"object":ln("load",e);break;case"video":case"audio":for(a=0;a<fu.length;a++)ln(fu[a],e);break;case"image":ln("error",e),ln("load",e);break;case"details":ln("toggle",e);break;case"embed":case"source":case"link":ln("error",e),ln("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in t)if(t.hasOwnProperty(c)&&(a=t[c],a!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:xn(e,n,c,a,t,null)}return;default:if(qs(n)){for(D in t)t.hasOwnProperty(D)&&(a=t[D],a!==void 0&&tm(e,n,D,a,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null&&xn(e,n,s,a,t,null))}function Aw(e,n,t,a){switch(nm(n,a),n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,i=null,s=null,r=null,c=null,D=null;for(Y in t){var V=t[Y];if(t.hasOwnProperty(Y)&&V!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":r=V;default:a.hasOwnProperty(Y)||xn(e,n,Y,null,a,V)}}for(var U in a){var Y=a[U];if(V=t[U],a.hasOwnProperty(U)&&(Y!=null||V!=null))switch(U){case"type":Y!==V&&(fn=!0),o=Y;break;case"name":Y!==V&&(fn=!0),l=Y;break;case"checked":Y!==V&&(fn=!0),c=Y;break;case"defaultChecked":Y!==V&&(fn=!0),D=Y;break;case"value":Y!==V&&(fn=!0),i=Y;break;case"defaultValue":Y!==V&&(fn=!0),s=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Y!==V&&xn(e,n,U,Y,a,V)}}n=t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null,a=a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null,n||!a||l_||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),l_=!0),!n||a||a_||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),a_=!0),nf(e,i,s,r,c,D,o,l);return;case"select":Y=i=s=U=null;for(o in t)if(r=t[o],t.hasOwnProperty(o)&&r!=null)switch(o){case"value":break;case"multiple":Y=r;default:a.hasOwnProperty(o)||xn(e,n,o,null,a,r)}for(l in a)if(o=a[l],r=t[l],a.hasOwnProperty(l)&&(o!=null||r!=null))switch(l){case"value":o!==r&&(fn=!0),U=o;break;case"defaultValue":o!==r&&(fn=!0),s=o;break;case"multiple":o!==r&&(fn=!0),i=o;default:o!==r&&xn(e,n,l,o,a,r)}a=s,n=i,t=Y,U!=null?Ti(e,!!n,U,!1):!!t!=!!n&&(a!=null?Ti(e,!!n,a,!0):Ti(e,!!n,n?[]:"",!1));return;case"textarea":Y=U=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:xn(e,n,s,null,a,l)}for(i in a)if(l=a[i],o=t[i],a.hasOwnProperty(i)&&(l!=null||o!=null))switch(i){case"value":l!==o&&(fn=!0),U=l;break;case"defaultValue":l!==o&&(fn=!0),Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:l!==o&&xn(e,n,i,l,a,o)}A0(e,U,Y);return;case"option":for(var me in t)if(U=t[me],t.hasOwnProperty(me)&&U!=null&&!a.hasOwnProperty(me))switch(me){case"selected":e.selected=!1;break;default:xn(e,n,me,null,a,U)}for(r in a)if(U=a[r],Y=t[r],a.hasOwnProperty(r)&&U!==Y&&(U!=null||Y!=null))switch(r){case"selected":U!==Y&&(fn=!0),e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:xn(e,n,r,U,a,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in t)U=t[Me],t.hasOwnProperty(Me)&&U!=null&&!a.hasOwnProperty(Me)&&xn(e,n,Me,null,a,U);for(c in a)if(U=a[c],Y=t[c],a.hasOwnProperty(c)&&U!==Y&&(U!=null||Y!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(n+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:xn(e,n,c,U,a,Y)}return;default:if(qs(n)){for(var Re in t)U=t[Re],t.hasOwnProperty(Re)&&U!==void 0&&!a.hasOwnProperty(Re)&&tm(e,n,Re,void 0,a,U);for(D in a)U=a[D],Y=t[D],!a.hasOwnProperty(D)||U===Y||U===void 0&&Y===void 0||tm(e,n,D,U,a,Y);return}}for(var Ze in t)U=t[Ze],t.hasOwnProperty(Ze)&&U!=null&&!a.hasOwnProperty(Ze)&&xn(e,n,Ze,null,a,U);for(V in a)U=a[V],Y=t[V],!a.hasOwnProperty(V)||U===Y||U==null&&Y==null||xn(e,n,V,U,a,Y)}function $v(e){switch(e){case"class":return"className";case"for":return"htmlFor";default:return e}}function am(e){for(var n={},t=e.style,a=0;a<t.length;a++){var l=t[a];l==="view-transition-name"&&Zv(e)||(n[l]=t.getPropertyValue(l))}return n}function Pv(e,n,t){if(n!=null&&typeof n!="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var a,l=a="",o;for(o in n)if(n.hasOwnProperty(o)){var i=n[o];i!=null&&typeof i!="boolean"&&i!==""&&(o.indexOf("--")===0?(Pe(i,o),a+=l+o+":"+(""+i).trim()):typeof i!="number"||i===0||xy.has(o)?(Pe(i,o),a+=l+o.replace(hy,"-$1").toLowerCase().replace(gy,"-ms-")+":"+(""+i).trim()):a+=l+o.replace(hy,"-$1").toLowerCase().replace(gy,"-ms-")+":"+i+"px",l=";")}a=a||null,n=e.getAttribute("style"),n!==a&&(a=io(a),n=io(n),n===a||n[n.length-1]===";"&&Yv(e)||(t.style=am(e)))}}function ua(e,n,t,a,l,o){if(l.delete(t),e=e.getAttribute(t),e===null)switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return}else if(a!=null)switch(typeof a){case"function":case"symbol":case"boolean":break;default:if(ke(a,n),e===""+a)return}Wn(n,e,a,o)}function Fv(e,n,t,a,l,o){if(l.delete(t),e=e.getAttribute(t),e===null){switch(typeof a){case"function":case"symbol":return}if(!a)return}else switch(typeof a){case"function":case"symbol":break;default:if(a)return}Wn(n,e,a,o)}function lm(e,n,t,a,l,o){if(l.delete(t),e=e.getAttribute(t),e===null)switch(typeof a){case"undefined":case"function":case"symbol":return}else if(a!=null)switch(typeof a){case"function":case"symbol":break;default:if(ke(a,t),e===""+a)return}Wn(n,e,a,o)}function Jv(e,n,t,a,l,o){if(l.delete(t),e=e.getAttribute(t),e===null)switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(a))return}else if(a!=null)switch(typeof a){case"function":case"symbol":case"boolean":break;default:if(!isNaN(a)&&(ke(a,n),e===""+a))return}Wn(n,e,a,o)}function om(e,n,t,a,l,o){if(l.delete(t),e=e.getAttribute(t),e===null)switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return}else if(a!=null)switch(typeof a){case"function":case"symbol":case"boolean":break;default:if(ke(a,n),t=Ys(""+a),e===t)return}Wn(n,e,a,o)}function Wv(e,n,t,a){for(var l={},o=new Set,i=e.attributes,s=0;s<i.length;s++)switch(i[s].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;case"vt-name":case"vt-update":case"vt-enter":case"vt-exit":case"vt-share":case"vt-parent-enter":case"vt-parent-exit":break;default:o.add(i[s].name)}if(qs(n)){for(var r in t)if(t.hasOwnProperty(r)){var c=t[r];if(c!=null){if(Wo.hasOwnProperty(r))typeof c!="function"&&Wa(r,c);else if(t.suppressHydrationWarning!==!0)switch(r){case"children":typeof c!="string"&&typeof c!="number"||Wn("children",e.textContent,c,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=e.innerHTML,c=c?c.__html:void 0,c!=null&&(c=Xv(e,c),Wn(r,i,c,l));continue;case"style":o.delete(r),Pv(e,c,l);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":o.delete(r.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",r);continue;case"className":o.delete("class"),i=_0(e,"class",c),Wn("className",i,c,l);continue;default:a.context===Ll&&n!=="svg"&&n!=="math"?o.delete(r.toLowerCase()):o.delete(r),i=_0(e,r,c),Wn(r,i,c,l)}}}}else for(c in t)if(t.hasOwnProperty(c)&&(r=t[c],r!=null)){if(Wo.hasOwnProperty(c))typeof r!="function"&&Wa(c,r);else if(t.suppressHydrationWarning!==!0)switch(c){case"children":typeof r!="string"&&typeof r!="number"||Wn("children",e.textContent,r,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=e.innerHTML,r=r?r.__html:void 0,r!=null&&(r=Xv(e,r),i!==r&&(l[c]={__html:i}));continue;case"className":ua(e,c,"class",r,o,l);continue;case"tabIndex":ua(e,c,"tabindex",r,o,l);continue;case"style":o.delete(c),Pv(e,r,l);continue;case"multiple":o.delete(c),Wn(c,e.multiple,r,l);continue;case"muted":o.delete(c),Wn(c,e.muted,r,l);continue;case"autoFocus":o.delete("autofocus"),Wn(c,e.autofocus,r,l);continue;case"data":if(n!=="object"){o.delete(c),i=e.getAttribute("data"),Wn(c,i,r,l);continue}case"src":case"href":if(!(r!==""||n==="a"&&c==="href"||n==="object"&&c==="data")){console.error(c==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',c,c);continue}om(e,c,c,r,o,l);continue;case"action":case"formAction":if(i=e.getAttribute(c),typeof r=="function"){o.delete(c.toLowerCase()),c==="formAction"?(o.delete("name"),o.delete("formenctype"),o.delete("formmethod"),o.delete("formtarget")):(o.delete("enctype"),o.delete("method"),o.delete("target"));continue}else if(i===gE){o.delete(c.toLowerCase()),Wn(c,"function",r,l);continue}om(e,c,c.toLowerCase(),r,o,l);continue;case"xlinkHref":om(e,c,"xlink:href",r,o,l);continue;case"contentEditable":lm(e,c,"contenteditable",r,o,l);continue;case"spellCheck":lm(e,c,"spellcheck",r,o,l);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":lm(e,c,c,r,o,l);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":Fv(e,c,c.toLowerCase(),r,o,l);continue;case"capture":case"download":e:{s=e;var D=i=c,V=l;if(o.delete(D),s=s.getAttribute(D),s===null)switch(typeof r){case"undefined":case"function":case"symbol":break e;default:if(r===!1)break e}else if(r!=null)switch(typeof r){case"function":case"symbol":break;case"boolean":if(r===!0&&s==="")break e;break;default:if(ke(r,i),s===""+r)break e}Wn(i,s,r,V)}continue;case"cols":case"rows":case"size":case"span":e:{if(s=e,D=i=c,V=l,o.delete(D),s=s.getAttribute(D),s===null)switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":break e;default:if(isNaN(r)||1>r)break e}else if(r!=null)switch(typeof r){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(r)||1>r)&&(ke(r,i),s===""+r))break e}Wn(i,s,r,V)}continue;case"rowSpan":Jv(e,c,"rowspan",r,o,l);continue;case"start":Jv(e,c,c,r,o,l);continue;case"xHeight":ua(e,c,"x-height",r,o,l);continue;case"xlinkActuate":ua(e,c,"xlink:actuate",r,o,l);continue;case"xlinkArcrole":ua(e,c,"xlink:arcrole",r,o,l);continue;case"xlinkRole":ua(e,c,"xlink:role",r,o,l);continue;case"xlinkShow":ua(e,c,"xlink:show",r,o,l);continue;case"xlinkTitle":ua(e,c,"xlink:title",r,o,l);continue;case"xlinkType":ua(e,c,"xlink:type",r,o,l);continue;case"xmlBase":ua(e,c,"xml:base",r,o,l);continue;case"xmlLang":ua(e,c,"xml:lang",r,o,l);continue;case"xmlSpace":ua(e,c,"xml:space",r,o,l);continue;case"inert":r!==""||Hd[c]||(Hd[c]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",c)),Fv(e,c,c,r,o,l);continue;default:if(!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N"){s=G0(c),i=!1,a.context===Ll&&n!=="svg"&&n!=="math"?o.delete(s.toLowerCase()):(D=c.toLowerCase(),D=Qc.hasOwnProperty(D)&&Qc[D]||null,D!==null&&D!==c&&(i=!0,o.delete(D)),o.delete(s));e:if(D=e,V=s,s=r,Kd(V))if(D.hasAttribute(V))D=V.toLowerCase()==="nonce"?D.nonce:D.getAttribute(V),ke(s,V),s=D===""+s?s:D;else{switch(typeof s){case"function":case"symbol":break e;case"boolean":if(D=V.toLowerCase().slice(0,5),D!=="data-"&&D!=="aria-")break e}s=s===void 0?void 0:null}else s=void 0;i||Wn(c,s,r,l)}}}return 0<o.size&&t.suppressHydrationWarning!==!0&&Cw(e,o,l),Object.keys(l).length===0?null:l}function Ow(e,n){switch(e.length){case 0:return"";case 1:return e[0];case 2:return e[0]+" "+n+" "+e[1];default:return e.slice(0,-1).join(", ")+", "+n+" "+e[e.length-1]}}function Kv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],o=l.transferSize,i=l.initiatorType,s=l.duration;if(o&&s&&Kv(i)){for(i=0,s=l.responseEnd,a+=1;a<t.length;a++){var r=t[a],c=r.startTime;if(c>s)break;var D=r.transferSize,V=r.initiatorType;D&&Kv(V)&&(r=r.responseEnd,i+=D*(r<s?1:(s-c)/(r-c)))}if(--a,n+=8*(o+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}function mr(e){return e.nodeType===9?e:e.ownerDocument}function e1(e){switch(e){case ts:return zs;case Xc:return Ld;default:return Ll}}function n1(e,n){if(e===Ll)switch(n){case"svg":return zs;case"math":return Ld;default:return Ll}return e===zs&&n==="foreignObject"?Ll:e}function t1(e,n,t,a){return t=mr(t).createElement(e),t[st]=a,t[St]=n,it(t,e,n),Jn(t),t}function jw(e){if(e=e.type,typeof e!="string"||e===""||(e=e.toLowerCase(),e==="module"||e==="importmap"||e==="speculationrules"))return!1;switch(e){case"application/ecmascript":case"application/javascript":case"application/x-ecmascript":case"application/x-javascript":case"text/ecmascript":case"text/javascript":case"text/javascript1.0":case"text/javascript1.1":case"text/javascript1.2":case"text/javascript1.3":case"text/javascript1.4":case"text/javascript1.5":case"text/jscript":case"text/livescript":case"text/x-ecmascript":case"text/x-javascript":return!1}return!0}function im(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}function zw(){var e=window.event;return e&&e.type==="popstate"?e===Kh?!1:(Kh=e,!0):(Kh=null,!1)}function hr(){var e=window.event;return e&&e!==hu?e.type:null}function gr(){var e=window.event;return e&&e!==hu?e.timeStamp:-1.1}function kw(e){setTimeout(function(){throw e})}function Iw(e,n,t){switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&e.focus();break;case"img":t.src?e.src=t.src:t.srcSet&&(e.srcset=t.srcSet)}}function Uw(){}function Vw(e,n,t,a){Aw(e,n,t,a),e[St]=a}function a1(e){Ls(e,"")}function Bw(e,n,t){e.nodeValue=t}function l1(e){if(!e.__reactWarnedAboutChildrenConflict){var n=e[St]||null;if(n!==null){var t=oa(e);t!==null&&(typeof n.children=="string"||typeof n.children=="number"?(e.__reactWarnedAboutChildrenConflict=!0,B(t,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):n.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,B(t,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function so(e){return e==="head"}function Hw(e,n){e.removeChild(n)}function Gw(e,n){(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).removeChild(n)}function o1(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t===mu||t===Gd){if(a===0){e.removeChild(l),Pi(n);return}a--}else if(t===pu||t===Ao||t===yi||t===js||t===vi)a++;else if(t===vE)pm(e.ownerDocument.documentElement);else if(t===xE){t=e.ownerDocument.head,pm(t);for(var o=t.firstChild;o;){var i=o.nextSibling,s=o.nodeName;o[Sr]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=i}}else t===yE&&pm(e.ownerDocument.body);t=l}while(t);Pi(n)}function i1(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t===mu){if(e===0)break;e--}else t!==pu&&t!==Ao&&t!==yi&&t!==js||e++;t=a}while(t)}function Lw(e){i1(e,!0)}function qw(e){e=e.style,typeof e.setProperty=="function"?e.setProperty("display","none","important"):e.display="none"}function Yw(e){e.nodeValue=""}function Zw(e){i1(e,!1)}function Xw(e,n){n=n[u_],n=n!=null&&n.hasOwnProperty("display")?n.display:null,e.style.display=n==null||typeof n=="boolean"?"":(""+n).trim()}function Qw(e,n){e.nodeValue=n}function $w(e){for(var n=e.firstChild;n!=null;){if(n.nodeType===1&&getComputedStyle(n).display==="block"){var t=oa(n)||oa(e);B(t,function(a,l){console.error(`You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.
https://bugs.webkit.org/show_bug.cgi?id=290923`,a.toLocaleLowerCase(),l.toLocaleLowerCase())},e.tagName,n.tagName);break}if(n.firstChild!=null)n=n.firstChild;else{if(n===e)break;for(;n.nextSibling==null&&n.parentNode!=null&&n.parentNode!==e;)n=n.parentNode;n=n.nextSibling}}}function s1(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var l=a=0;l<n.length;l++){var o=n[l];0<o.width&&0<o.height&&a++}a===1?(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom):$w(e)}}function r1(e,n){e=e.style,n=n[u_];var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Pw(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function sm(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return Pw(n,t,e)}function Fw(e,n){if(typeof e=="object"&&e!==null)switch(e.name){case"TimeoutError":return Error("A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.",{cause:e});case"AbortError":return n?null:Error("A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.",{cause:e});case"InvalidStateError":if(e.message==="View transition was skipped because document visibility state is hidden."||e.message==="Skipping view transition because document visibility state has become hidden."||e.message==="Skipping view transition because viewport size changed."||e.message==="Transition was aborted because of invalid state")return null}return e}function Jw(e){return e.documentElement.clientHeight}function Ww(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Kw(e,n,t,a,l,o,i,s,r,c,D){var V=n.nodeType===9?n:n.ownerDocument;try{var U=V.startViewTransition({update:function(){var me=V.defaultView,Me=me.navigation&&me.navigation.transition,Re=V.fonts.status;a();var Ze=[];if(Re==="loaded"&&(Jw(V),V.fonts.status==="loading"&&Ze.push(V.fonts.ready)),Re=Ze.length,e!==null)for(var j=e.suspenseyImages,z=0,H=0;H<j.length;H++){var ee=j[H];if(!ee.complete){var _e=ee.getBoundingClientRect();if(0<_e.bottom&&0<_e.right&&_e.top<me.innerHeight&&_e.left<me.innerWidth){if(z+=C1(ee),z>Yd){Ze.length=Re;break}ee=new Promise(Ww.bind(ee)),Ze.push(ee)}}}if(0<Ze.length)return c(0<Re?Ze.length>Re?"Waiting on Fonts and Images":"Waiting on Fonts":"Waiting on Images"),me=Promise.race([Promise.all(Ze),new Promise(function(Ve){return setTimeout(Ve,wE)})]).then(l,l),(Me?Promise.allSettled([Me.finished,me]):me).then(o,o);if(l(),Me)return Me.finished.then(o,o);o()},types:t});V.__reactViewTransition=U;var Y=[];return U.ready.then(function(){for(var me=V.documentElement.getAnimations({subtree:!0}),Me=0;Me<me.length;Me++){var Re=me[Me],Ze=Re.effect,j=Ze.pseudoElement;if(j!=null&&j.startsWith("::view-transition")){Y.push(Re),Re=Ze.getKeyframes();for(var z=j=void 0,H=!0,ee=0;ee<Re.length;ee++){var _e=Re[ee],Ve=_e.width;if(j===void 0)j=Ve;else if(j!==Ve){H=!1;break}if(Ve=_e.height,z===void 0)z=Ve;else if(z!==Ve){H=!1;break}delete _e.width,delete _e.height,_e.transform==="none"&&delete _e.transform}H&&j!==void 0&&z!==void 0&&(Ze.setKeyframes(Re),H=getComputedStyle(Ze.target,Ze.pseudoElement),H.width!==j||H.height!==z)&&(H=Re[0],H.width=j,H.height=z,H=Re[Re.length-1],H.width=j,H.height=z,Ze.setKeyframes(Re))}}i()},function(me){V.__reactViewTransition===U&&(V.__reactViewTransition=null);try{me=Fw(me,!1),me!==null&&r(me)}finally{a(),l(),i(),D()}}),U.finished.finally(function(){for(var me=0;me<Y.length;me++)Y[me].cancel();V.__reactViewTransition===U&&(V.__reactViewTransition=null),D(),s()}),U}catch{return a(),l(),D(),i(),null}}function Jo(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}function u1(e){return{name:e,group:new Jo("group",e),imagePair:new Jo("image-pair",e),old:new Jo("old",e),new:new Jo("new",e)}}function Pt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function eS(e,n,t,a){return J(e).addEventListener(n,t,a),!1}function nS(e,n,t,a){return J(e).removeEventListener(n,t,a),!1}function Xi(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function c1(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function d1(e,n,t,a){if(e.length===0)return-1;a=c1(a);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===n&&o.listener===t&&c1(o.optionsOrUseCapture)===a)return l}return-1}function f1(e,n){return e.tag===6?!1:(e=J(e),gS(e,n))}function rm(e,n){return n.push(e),!1}function tS(e,n){return e.tag===6?!1:(e=J(e),e===n||e.contains(n)?(n.blur(),!0):!1)}function aS(e,n){return e.tag===6||(e=J(e),n.observe(e)),!1}function lS(e,n){return e.tag===6||(e=J(e),n.unobserve(e)),!1}function oS(e,n,t){Ia.push({fragmentInstance:e,observer:n,instance:t}),n0||(n0=!0,bS(function(){n0=!1;var a=Ia;Ia=[];for(var l=0;l<a.length;l++){var o=a[l];o.observer.unobserve(o.instance)}}))}function iS(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=J(e),n.push.apply(n,e.getClientRects());return!1}function sS(e,n,t,a,l){var o=bl(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===n||o.alternate===n)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=n,n=W(n);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==n&&o.alternate!==n)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!o)&&!(n=o===t)&&(n=ne(t,o,de),n===null?n=!1:(he(n,!0,h,o,t),o=Fi,Fi=null,n=o!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!o)&&!(n=o===a)&&(n=ne(a,o,de),n===null?n=!1:(he(n,!0,fe,o,a),o=Fi,Sm=Fi=null,n=o!==null)),n):!1}function p1(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function rS(e,n){return e=J(e),m1(e,n),!1}function m1(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function h1(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];e.addEventListener(l.type,l.attachedListener,Xi(l.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){for(var i=0,s=0;s<Ia.length;s++){var r=Ia[s];(r.fragmentInstance!==n||r.observer!==o||r.instance!==e)&&(Ia[i++]=r)}Ia.length=i,o.observe(e)}),m1(e,n))}function uS(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];e.removeEventListener(l.type,l.attachedListener,Xi(l.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?oS(n,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function um(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":um(t),Na(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function cS(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Sr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){ke(l.name,"name");var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function dS(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function g1(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function cm(e){return e.data===Ao||e.data===yi}function dm(e){return e.data===js||e.data===Ao&&e.ownerDocument.readyState!==r_}function fS(e,n){var t=e.ownerDocument;if(e.data===yi)e._reactRetry=n;else if(e.data!==Ao||t.readyState!==r_)n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n===pu||n===js||n===Ao||n===yi||n===vi||n===Fh||n===s_)break;if(n===mu||n===Gd)return null}}return e}function b1(e){if(e.nodeType===1){for(var n=e.nodeName.toLowerCase(),t={},a=e.attributes,l=0;l<a.length;l++){var o=a[l];t[$v(o.name)]=o.name.toLowerCase()==="style"?am(e):o.value}return{type:n,props:t}}return e.nodeType===8?e.data===vi?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:e.nodeValue}function v1(e,n,t){return t===null||t[bE]!==!0?(e.nodeValue===n?e=null:(n=io(n),e=io(e.nodeValue)===n?null:e.nodeValue),e):null}function fm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t===mu||t===Gd){if(n===0)return Ft(e.nextSibling);n--}else t!==pu&&t!==js&&t!==Ao&&t!==yi&&t!==vi||n++}e=e.nextSibling}return null}function y1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t===pu||t===js||t===Ao||t===yi||t===vi){if(n===0)return e;n--}else t!==mu&&t!==Gd||n++}e=e.previousSibling}return null}function pS(e){Pi(e)}function mS(e){Pi(e)}function hS(e){Pi(e)}function gS(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function bS(e){p_(function(){p_(function(n){return e(n)})})}function x1(e,n,t,a,l){switch(l&&rf(e,a.ancestorInfo),n=mr(t),e){case"html":if(e=n.documentElement,!e)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"head":if(e=n.head,!e)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"body":if(e=n.body,!e)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return e;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function vS(e,n,t,a){if(!t[co]&&oa(t)){var l=t.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",l,l,l)}switch(e){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(l=t.attributes;l.length;)t.removeAttributeNode(l[0]);it(t,e,n),t[st]=a,t[St]=n}function _1(e,n,t){for(var a in t){var l=t[a];t.hasOwnProperty(a)&&l!=null&&xn(e,n,a,null,hE,l)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Va&&(e.onclick=null),Na(e)}function pm(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Na(e)}function br(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}function N1(e,n,t){var a=ks;if(a&&typeof n=="string"&&n){var l=ia(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),g_.has(l)||(g_.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),it(n,"link",e),Jn(n),a.head.appendChild(n)))}}function w1(e,n,t,a){var l=(l=uo.current)?br(l):null;if(!l)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Qi(t.href),n=Ei(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Qi(t.href);var o=Ei(l).hoistableStyles,i=o.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:_i,preload:null}},o.set(e,i),(o=l.querySelector(vr(e)))?o._p||(i.instance=o,i.state.loading=gu|ya):(o=xa.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xa.set(e,o)),yS(l,e,o,i.state))),n&&a===null)throw t=`

  - `+Ac(n)+`
  + `+Ac(t),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+t);return i}if(n&&a!==null)throw t=`

  - `+Ac(n)+`
  + `+Ac(t),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+t);return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=$i(t),n=Ei(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+e+'". this is a bug in React.')}}function Ac(e){var n=0,t="<link";return typeof e.rel=="string"?(n++,t+=' rel="'+e.rel+'"'):ca.call(e,"rel")&&(n++,t+=' rel="'+(e.rel===null?"null":"invalid type "+typeof e.rel)+'"'),typeof e.href=="string"?(n++,t+=' href="'+e.href+'"'):ca.call(e,"href")&&(n++,t+=' href="'+(e.href===null?"null":"invalid type "+typeof e.href)+'"'),typeof e.precedence=="string"?(n++,t+=' precedence="'+e.precedence+'"'):ca.call(e,"precedence")&&(n++,t+=" precedence={"+(e.precedence===null?"null":"invalid type "+typeof e.precedence)+"}"),Object.getOwnPropertyNames(e).length>n&&(t+=" ..."),t+" />"}function Qi(e){return'href="'+ia(e)+'"'}function vr(e){return'link[rel="stylesheet"]['+e+"]"}function S1(e){return Xe({},e,{"data-precedence":e.precedence,precedence:null})}function yS(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yc]!==!0){a.loading=gu;return}}else n=e.createElement("link"),n[Yc]=!0,n.onload=n.onerror=y0.bind(null,n),it(n,"link",t),Jn(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=gu}),n.addEventListener("error",function(){return a.loading|=m_})}function $i(e){return'[src="'+ia(e)+'"]'}function yr(e){return"script[async]"+e}function E1(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+ia(t.href)+'"]');if(a)return n.instance=a,Jn(a),a;var l=Xe({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Jn(a),it(a,"style",l),Oc(a,t.precedence,e),n.instance=a;case"stylesheet":l=Qi(t.href);var o=e.querySelector(vr(l));if(o)return n.state.loading|=ya,n.instance=o,Jn(o),o;a=S1(t),(l=xa.get(l))&&mm(a,l),o=(e.ownerDocument||e).createElement("link"),Jn(o);var i=o;return i._p=new Promise(function(s,r){i.onload=s,i.onerror=r}),it(o,"link",a),n.state.loading|=ya,Oc(o,t.precedence,e),n.instance=o;case"script":return o=$i(t.src),(l=e.querySelector(yr(o)))?(n.instance=l,Jn(l),l):(a=t,(l=xa.get(o))&&(a=Xe({},t),hm(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Jn(l),it(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+n.type+'". this is a bug in React.')}else n.type==="stylesheet"&&(n.state.loading&ya)===_i&&(a=n.instance,n.state.loading|=ya,Oc(a,t.precedence,e));return n.instance}function Oc(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,i=0;i<a.length;i++){var s=a[i];if(s.dataset.precedence===n)o=s;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function mm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}function M1(e,n,t){if(qd===null){var a=new Map,l=qd=new Map;l.set(t,a)}else l=qd,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Sr]||o[st]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!==ts){var i=o.getAttribute(n)||"";i=e+i;var s=a.get(i);s?s.push(o):a.set(i,[o])}}return a}function gm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function xS(e,n,t){var a=!t.ancestorInfo.containerTagInScope;if(t.context===zs||n.itemProp!=null)return!a||n.itemProp==null||e!=="meta"&&e!=="title"&&e!=="style"&&e!=="link"&&e!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href===""){a&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError){if(n.rel==="stylesheet"&&typeof n.precedence=="string"){e=n.href;var l=n.onError,o=n.disabled;t=[],n.onLoad&&t.push("`onLoad`"),l&&t.push("`onError`"),o!=null&&t.push("`disabled`"),l=Ow(t,"and"),l+=t.length===1?" prop":" props",o=t.length===1?"an "+l:"the "+l,t.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,o,l)}a&&(typeof n.rel!="string"||typeof n.href!="string"||n.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(n.onError||n.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(n.rel){case"stylesheet":return e=n.precedence,n=n.disabled,typeof e!="string"&&a&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof e=="string"&&n==null;default:return!0}case"script":if(e=n.async&&typeof n.async!="function"&&typeof n.async!="symbol",!e||n.onLoad||n.onError||!n.src||typeof n.src!="string"){a&&(e?n.onLoad||n.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":a&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",e)}return!1}function D1(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function T1(e){return!(e.type==="stylesheet"&&(e.state.loading&h_)===_i)}function C1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function A1(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=C1(n),e.suspenseyImages.push(n)),e=wS.bind(e),n.decode().then(e,e))}function _S(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&ya)===_i){if(t.instance===null){var l=Qi(a.href),o=n.querySelector(vr(l));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xr.bind(e),n.then(e,e)),t.state.loading|=ya,t.instance=o,Jn(o);return}o=n.ownerDocument||n,a=S1(a),(l=xa.get(l))&&mm(a,l),o=o.createElement("link"),Jn(o);var i=o;i._p=new Promise(function(s,r){i.onload=s,i.onerror=r}),it(o,"link",a),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&h_)===_i&&(e.count++,t=xr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}function NS(e,n){return e.stylesheets&&e.count===0&&Rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},SE+n);0<e.imgBytes&&Yd===0&&(Yd=125*Rw()*ME);var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Yd?50:EE)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function O1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Rc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function xr(){this.count--,O1(this)}function wS(){this.imgCount--,O1(this)}function Rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zd=new Map,n.forEach(SS,e),Zd=null,xr.call(e))}function SS(e,n){if(!(n.state.loading&ya)){var t=Zd.get(e);if(t)var a=t.get(a0);else{t=new Map,Zd.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var i=l[o];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),a=i)}a&&t.set(a0,a)}l=n.instance,i=l.getAttribute("data-precedence"),o=t.get(i)||a,o===a&&t.set(a0,l),t.set(i,l),this.count++,a=xr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=ya}}function ES(e,n,t,a,l,o,i,s,r){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=xi,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.hiddenUpdates=Xl(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.transitionTypes=null,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],n=0;31>n;n++)e.push(new Set);this._debugRootType=t?"hydrateRoot()":"createRoot()"}function R1(e,n,t,a,l,o,i,s,r,c,D,V){return e=new ES(e,n,t,i,r,c,D,V,s),n=F3,o===!0&&(n|=ht|Ca),n|=Qe,o=S(3,null,null,n),e.current=o,o.stateNode=e,n=Ef(),Yo(n),e.pooledCache=n,Yo(n),o.memoizedState={element:a,isDehydrated:t,cache:n},Af(o),e}function j1(e){return e?(e=go,e):go}function bm(e,n,t,a,l,o){if(mt&&typeof mt.onScheduleFiberRoot=="function")try{mt.onScheduleFiberRoot(es,a,t)}catch(i){nl||(nl=!0,console.error("React instrumentation encountered an error: %o",i))}l=j1(l),a.context===null?a.context=l:a.pendingContext=l,el&&Jt!==null&&!x_&&(x_=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,q(Jt)||"Unknown")),a=Kl(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(typeof o!="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",o),a.callback=o),t=eo(e,a,n),t!==null&&(Ga(n,"root.render()",null),jn(t,e,n),Js(t,e,n))}function z1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vm(e,n){z1(e,n),(e=e.alternate)&&z1(e,n)}function k1(e){if(e.tag===13||e.tag===31){var n=pt(e,67108864);n!==null&&jn(n,e,67108864),vm(e,67108864)}}function I1(e){if(e.tag===13||e.tag===31){var n=$t(e);n=Te(n);var t=pt(e,n);t!==null&&jn(t,e,n),vm(e,n)}}function MS(){return Jt}function DS(e,n,t,a){var l=ae.T;ae.T=null;var o=mn.p;try{mn.p=jt,ym(e,n,t,a)}finally{mn.p=o,ae.T=l}}function TS(e,n,t,a){var l=ae.T;ae.T=null;var o=mn.p;try{mn.p=al,ym(e,n,t,a)}finally{mn.p=o,ae.T=l}}function ym(e,n,t,a){if(Us){var l=xm(a);if(l===null)em(e,n,a,Qd,t),V1(e,a);else if(CS(l,e,n,t,a))a.stopPropagation();else if(V1(e,a),n&4&&-1<TE.indexOf(e)){for(;l!==null;){var o=oa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var i=dn(o.pendingLanes);if(i!==0){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var r=1<<31-wt(i);s.entanglements[1]|=r,i&=~r}Ja(o),(rn&($n|na))===at&&(Dd=Un()+Px,fr(0))}}break;case 31:case 13:s=pt(o,2),s!==null&&jn(s,o,2),qi(),vm(o,2)}if(o=xm(a),o===null&&em(e,n,a,Qd,t),o===l)break;l=o}l!==null&&a.stopPropagation()}else em(e,n,a,null,t)}}function xm(e){return e=uf(e),_m(e)}function _m(e){if(Qd=null,e=bl(e),e!==null){var n=_(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=w(n),e!==null)return e;e=null}else if(t===31){if(e=G(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Qd=e,null}function U1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return jt;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return al;case"message":switch(GS()){case Um:return jt;case Vm:return al;case Ki:case LS:return Tl;case Bm:return qc;default:return Tl}default:return Tl}}function V1(e,n){switch(e){case"focusin":case"focusout":Oo=null;break;case"dragenter":case"dragleave":Ro=null;break;case"mouseover":case"mouseout":jo=null;break;case"pointerover":case"pointerout":bu.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(n.pointerId)}}function _r(e,n,t,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},n!==null&&(n=oa(n),n!==null&&k1(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function CS(e,n,t,a,l){switch(n){case"focusin":return Oo=_r(Oo,e,n,t,a,l),!0;case"dragenter":return Ro=_r(Ro,e,n,t,a,l),!0;case"mouseover":return jo=_r(jo,e,n,t,a,l),!0;case"pointerover":var o=l.pointerId;return bu.set(o,_r(bu.get(o)||null,e,n,t,a,l)),!0;case"gotpointercapture":return o=l.pointerId,vu.set(o,_r(vu.get(o)||null,e,n,t,a,l)),!0}return!1}function B1(e){var n=bl(e.target);if(n!==null){var t=_(n);if(t!==null){if(n=t.tag,n===13){if(n=w(t),n!==null){e.blockedOn=n,_a(e.priority,function(){I1(t)});return}}else if(n===31){if(n=G(t),n!==null){e.blockedOn=n,_a(e.priority,function(){I1(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xm(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t),l=a;Er!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Er=l,t.target.dispatchEvent(a),Er===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Er=null}else return n=oa(t),n!==null&&k1(n),e.blockedOn=t,!1;n.shift()}return!0}function H1(e,n,t){jc(e)&&t.delete(n)}function AS(){l0=!1,Oo!==null&&jc(Oo)&&(Oo=null),Ro!==null&&jc(Ro)&&(Ro=null),jo!==null&&jc(jo)&&(jo=null),bu.forEach(H1),vu.forEach(H1)}function zc(e,n){e.blockedOn===n&&(e.blockedOn=null,l0||(l0=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,AS)))}function G1(e){$d!==e&&($d=e,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,function(){$d===e&&($d=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(_m(a||t)===null)continue;break}var o=oa(t);o!==null&&(e.splice(n,3),n-=3,t={pending:!0,data:l,method:t.method,action:a},Object.freeze(t),ap(o,t,a,l))}}))}function Pi(e){function n(r){return zc(r,e)}Oo!==null&&zc(Oo,e),Ro!==null&&zc(Ro,e),jo!==null&&zc(jo,e),bu.forEach(n),vu.forEach(n);for(var t=0;t<zo.length;t++){var a=zo[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<zo.length&&(t=zo[0],t.blockedOn===null);)B1(t),t.blockedOn===null&&zo.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],o=t[a+1],i=l[St]||null;if(typeof o=="function")i||G1(t);else if(i){var s=null;if(o&&o.hasAttribute("formAction")){if(l=o,i=o[St]||null)s=i.formAction;else if(_m(l)!==null)continue}else s=i.action;typeof s=="function"?t[a+1]=s:(t.splice(a,3),a-=3),G1(t)}}}function L1(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Nm(e){this._internalRoot=e}function kc(e){this._internalRoot=e}function q1(e){e[co]&&(e._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var Gn=kE(),wm=Wd(),OS=UE(),Fi=null,Sm=null,Xe=Object.assign,RS=Symbol.for("react.element"),Ka=Symbol.for("react.transitional.element"),Ji=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Ic=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),Mm=Symbol.for("react.consumer"),Ta=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Tm=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Cm=Symbol.for("react.activity"),jS=Symbol.for("react.legacy_hidden"),zS=Symbol.for("react.memo_cache_sentinel"),Am=Symbol.for("react.view_transition"),kS=Symbol.for("react.recoverable"),Y1=Symbol.iterator,IS=Symbol.for("react.client.reference"),Xn=Array.isArray,ae=wm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mn=OS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,US=Object.freeze({pending:!1,data:null,method:null,action:null}),Om=[],Rm=[],Dl=-1,ro=C(null),Nr=C(null),uo=C(null),Bc=C(null),wr=0,Z1,X1,Q1,$1,P1,F1,J1;hn.__reactDisabledLog=!0;var jm,W1,zm=!1,km=new(typeof WeakMap=="function"?WeakMap:Map),Jt=null,el=!1,ca=Object.prototype.hasOwnProperty,Im=Gn.unstable_scheduleCallback,VS=Gn.unstable_cancelCallback,BS=Gn.unstable_shouldYield,HS=Gn.unstable_requestPaint,Un=Gn.unstable_now,GS=Gn.unstable_getCurrentPriorityLevel,Um=Gn.unstable_ImmediatePriority,Vm=Gn.unstable_UserBlockingPriority,Ki=Gn.unstable_NormalPriority,LS=Gn.unstable_LowPriority,Bm=Gn.unstable_IdlePriority,qS=Gn.log,YS=Gn.unstable_setDisableYieldValue,es=null,mt=null,nl=!1,tl=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",wt=Math.clz32?Math.clz32:Ua,ZS=Math.log,XS=Math.LN2,Hc=256,Gc=262144,Lc=4194304,jt=2,al=8,Tl=32,qc=268435456,Cl=Math.random().toString(36).slice(2),st="__reactFiber$"+Cl,St="__reactProps$"+Cl,co="__reactContainer$"+Cl,K1="__reactEvents$"+Cl,QS="__reactListeners$"+Cl,$S="__reactHandles$"+Cl,ey="__reactResources$"+Cl,Sr="__reactMarker$"+Cl,Yc="__reactLoad$"+Cl,ny=new Set,Wo={},Hm={},PS={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},FS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ty={},ay={},fn=!1,JS=/[\n"\\]/g,ly=!1,oy=!1,iy=!1,sy=!1,ry=!1,uy=!1,cy=["value","defaultValue"],dy=!1,fy=/["'&<>\n\t]|^\s|\s$/,WS="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),py="applet caption html table td th marquee object select template foreignObject desc title".split(" "),KS=py.concat(["button"]),e3="dd dt li option optgroup p rp rt".split(" "),my={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},Zc={},Gm={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlock:"borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth".split(" "),borderBlockColor:["borderBlockEndColor","borderBlockStartColor"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBlockStyle:["borderBlockEndStyle","borderBlockStartStyle"],borderBlockWidth:["borderBlockEndWidth","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInline:"borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth".split(" "),borderInlineColor:["borderInlineEndColor","borderInlineStartColor"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderInlineStyle:["borderInlineEndStyle","borderInlineStartStyle"],borderInlineWidth:["borderInlineEndWidth","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],colorAdjust:["printColorAdjust"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],containIntrinsicSize:["containIntrinsicHeight","containIntrinsicWidth"],container:["containerName","containerType"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontSynthesis:["fontSynthesisPosition","fontSynthesisSmallCaps","fontSynthesisStyle","fontSynthesisWeight"],fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],inset:["bottom","left","right","top"],insetBlock:["insetBlockEnd","insetBlockStart"],insetInline:["insetInlineEnd","insetInlineStart"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marginBlock:["marginBlockEnd","marginBlockStart"],marginInline:["marginInlineEnd","marginInlineStart"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],offset:["offsetAnchor","offsetDistance","offsetPath","offsetPosition","offsetRotate"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],paddingBlock:["paddingBlockEnd","paddingBlockStart"],paddingInline:["paddingInlineEnd","paddingInlineStart"],pageBreakAfter:["breakAfter"],pageBreakBefore:["breakBefore"],pageBreakInside:["breakInside"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],scrollMargin:["scrollMarginBottom","scrollMarginLeft","scrollMarginRight","scrollMarginTop"],scrollMarginBlock:["scrollMarginBlockEnd","scrollMarginBlockStart"],scrollMarginInline:["scrollMarginInlineEnd","scrollMarginInlineStart"],scrollPadding:["scrollPaddingBottom","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop"],scrollPaddingBlock:["scrollPaddingBlockEnd","scrollPaddingBlockStart"],scrollPaddingInline:["scrollPaddingInlineEnd","scrollPaddingInlineStart"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle","textDecorationThickness"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],textWrap:["textWrapMode","textWrapStyle"],transition:["transitionBehavior","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],verticalAlign:["alignmentBaseline","baselineShift","baselineSource"],whiteSpace:["textWrapMode","whiteSpaceCollapse"],wordWrap:["overflowWrap"]},hy=/([A-Z])/g,gy=/^ms-/,n3=/^(?:webkit|moz|o)[A-Z]/,t3=/^-ms-/,a3=/-(.)/g,by=/;\s*$/,ns={},Lm={},vy=!1,yy=!1,xy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),Xc="http://www.w3.org/1998/Math/MathML",ts="http://www.w3.org/2000/svg",l3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qc={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",credentialless:"credentialless",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",masktype:"maskType",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},_y={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},as={},o3=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),i3=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ny=!1,Et={},wy=/^on./,s3=/^on[^A-Z]/,r3=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),u3=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),c3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Er=null,ls=null,os=null,qm=!1,ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ym=!1;if(ll)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ym=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ym=!1}var fo=null,Zm=null,$c=null,po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=vt(po),Dr=Xe({},po,{view:0,detail:0}),d3=vt(Dr),Xm,Qm,Tr,Fc=Xe({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Xm=e.screenX-Tr.screenX,Qm=e.screenY-Tr.screenY):Qm=Xm=0,Tr=e),Xm)},movementY:function(e){return"movementY"in e?e.movementY:Qm}}),Sy=vt(Fc),f3=Xe({},Fc,{dataTransfer:0}),p3=vt(f3),m3=Xe({},Dr,{relatedTarget:0}),$m=vt(m3),h3=Xe({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),g3=vt(h3),b3=Xe({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v3=vt(b3),y3=Xe({},po,{data:0}),Ey=vt(y3),x3=Ey,_3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},S3=Xe({},Dr,{key:function(e){if(e.key){var n=_3[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Du(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?Du(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Du(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E3=vt(S3),M3=Xe({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),My=vt(M3),D3=Xe({},po,{submitter:0}),T3=vt(D3),C3=Xe({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),A3=vt(C3),O3=Xe({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),R3=vt(O3),j3=Xe({},Fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z3=vt(j3),k3=Xe({},po,{newState:0,oldState:0,source:0}),I3=vt(k3),U3=[9,13,27,32],Dy=229,Pm=ll&&"CompositionEvent"in window,Cr=null;ll&&"documentMode"in document&&(Cr=document.documentMode);var V3=ll&&"TextEvent"in window&&!Cr,Ty=ll&&(!Pm||Cr&&8<Cr&&11>=Cr),Cy=32,Ay=String.fromCharCode(Cy),Oy=!1,is=!1,B3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ar=null,Or=null,Ry=!1;ll&&(Ry=ON("input")&&(!document.documentMode||9<document.documentMode));var Mt=typeof Object.is=="function"?Object.is:UN,H3=ll&&"documentMode"in document&&11>=document.documentMode,ss=null,Fm=null,Rr=null,Jm=!1,rs={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionrun:Uo("Transition","TransitionRun"),transitionstart:Uo("Transition","TransitionStart"),transitioncancel:Uo("Transition","TransitionCancel"),transitionend:Uo("Transition","TransitionEnd")},Wm={},jy={};ll&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);var zy=Vo("animationend"),ky=Vo("animationiteration"),Iy=Vo("animationstart"),G3=Vo("transitionrun"),L3=Vo("transitionstart"),q3=Vo("transitioncancel"),Uy=Vo("transitionend"),Vy=new Map,Km="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Km.push("scrollEnd");var Y3=0,By=0;if(typeof performance=="object"&&typeof performance.now=="function")var Z3=performance,Hy=function(){return Z3.now()};else{var X3=Date;Hy=function(){return X3.now()}}var eh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Q3="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",Jc=0,nh=1,th=2,ah=3,da=100,Wc="- ",Kc="+ ",Gy="  ",Mn=typeof console<"u"&&typeof console.timeStamp=="function"&&typeof performance<"u"&&typeof performance.measure=="function",zt="Components ⚛",Ke="Scheduler ⚛",nn="Blocking",mo=!1,Al={color:"primary",properties:null,tooltipText:"",track:zt},ho={start:-0,end:-0,detail:{devtools:Al}},$3=["Changed Props",""],Ly="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",P3=["Changed Props",Ly],jr=1,Ol=2,fa=[],us=0,lh=0,go={};Object.freeze(go);var Rl=null,cs=null,Be=0,F3=1,Qe=2,ht=8,Ca=16,qy=32,Yy=!1;try{var Zy=Object.preventExtensions({})}catch{Yy=!0}var oh=new WeakMap,ds=[],fs=0,ed=null,zr=0,pa=[],ma=0,Ko=null,jl=1,zl="",Kn=null,En=null,$e=!1,ol=!1,Wt=null,bo=null,ha=!1,ih=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),sh=C(null),rh=C(null),Xy={},nd=null,ps=null,ms=!1,J3=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},W3=Gn.unstable_scheduleCallback,K3=Gn.unstable_NormalPriority,Ln={$$typeof:Ta,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},kr=null,Vn=Gn.unstable_now,td=console.createTask?console.createTask:function(){return null},Ir=1,ad=2,et=-0,kl=-0,Aa=-0,Il=null,Dt=-1.1,ei=-0,Cn=-0,Ie=-1.1,Ue=-1.1,Tn=null,zn=!1,vo=-0,il=-1.1,Ur=null,yo=0,uh=null,ch=null,ni=-1.1,Vr=null,hs=-1.1,ld=-1.1,Oa=-0,Ul=-1.1,ga=-1.1,dh=0,Br=null,Qy=null,$y=null,xo=-1.1,ti=null,_o=-1.1,od=-1.1,fh=-0,ph=-0,ai=0,kt=null,Py=0,Hr=-1.1,id=!1,sd=!1,Gr=null,mh=0,No=0,gs=null,Fy=ae.S;ae.S=function(e,n){if(Qx=Un(),typeof n=="object"&&n!==null&&typeof n.then=="function"){if(0>Ul&&0>ga){Ul=Vn();var t=gr(),a=hr();(t!==_o||a!==ti)&&(_o=-1.1),xo=t,ti=a}qN(e,n)}if(kr!==null)for(t=Os;t!==null;)Ng(t,kr),t=t.next;if(t=e.types,t!==null){for(a=Os;a!==null;)Ng(a,t),a=a.next;if(No!==0){a=kr,a===null&&(a=kr=[]);for(var l=0;l<t.length;l++){var o=t[l];a.indexOf(o)===-1&&a.push(o)}}}Fy!==null&&Fy(e,n)};var li=C(null),Ra={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},Lr=[],qr=[],Yr=[],Zr=[],Xr=[],Qr=[],oi=new Set;Ra.recordUnsafeLifecycleWarnings=function(e,n){oi.has(e.type)||(typeof n.componentWillMount=="function"&&n.componentWillMount.__suppressDeprecationWarning!==!0&&Lr.push(e),e.mode&ht&&typeof n.UNSAFE_componentWillMount=="function"&&qr.push(e),typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&Yr.push(e),e.mode&ht&&typeof n.UNSAFE_componentWillReceiveProps=="function"&&Zr.push(e),typeof n.componentWillUpdate=="function"&&n.componentWillUpdate.__suppressDeprecationWarning!==!0&&Xr.push(e),e.mode&ht&&typeof n.UNSAFE_componentWillUpdate=="function"&&Qr.push(e))},Ra.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<Lr.length&&(Lr.forEach(function(s){e.add(q(s)||"Component"),oi.add(s.type)}),Lr=[]);var n=new Set;0<qr.length&&(qr.forEach(function(s){n.add(q(s)||"Component"),oi.add(s.type)}),qr=[]);var t=new Set;0<Yr.length&&(Yr.forEach(function(s){t.add(q(s)||"Component"),oi.add(s.type)}),Yr=[]);var a=new Set;0<Zr.length&&(Zr.forEach(function(s){a.add(q(s)||"Component"),oi.add(s.type)}),Zr=[]);var l=new Set;0<Xr.length&&(Xr.forEach(function(s){l.add(q(s)||"Component"),oi.add(s.type)}),Xr=[]);var o=new Set;if(0<Qr.length&&(Qr.forEach(function(s){o.add(q(s)||"Component"),oi.add(s.type)}),Qr=[]),0<n.size){var i=A(n);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,i)}0<a.size&&(i=A(a),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,i)),0<o.size&&(i=A(o),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,i)),0<e.size&&(i=A(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<t.size&&(i=A(t),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<l.size&&(i=A(l),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i))};var rd=new Map,Jy=new Set;Ra.recordLegacyContextWarning=function(e,n){for(var t=null,a=e;a!==null;)a.mode&ht&&(t=a),a=a.return;t===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!Jy.has(e.type)&&(a=rd.get(t),e.type.contextTypes!=null||e.type.childContextTypes!=null||n!==null&&typeof n.getChildContext=="function")&&(a===void 0&&(a=[],rd.set(t,a)),a.push(e))},Ra.flushLegacyContextWarning=function(){rd.forEach(function(e){if(e.length!==0){var n=e[0],t=new Set;e.forEach(function(l){t.add(q(l)||"Component"),Jy.add(l.type)});var a=A(t);B(n,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,a)})}})},Ra.discardPendingWarnings=function(){Lr=[],qr=[],Yr=[],Zr=[],Xr=[],Qr=[],rd=new Map};var eE="",Wy={react_stack_bottom_frame:function(e,n,t){var a=el;el=!0;try{return e(n,t)}finally{el=a}}},hh=Wy.react_stack_bottom_frame.bind(Wy),Ky={react_stack_bottom_frame:function(e){var n=el;el=!0;try{return e.render()}finally{el=n}}},ex=Ky.react_stack_bottom_frame.bind(Ky),nx={react_stack_bottom_frame:function(e,n){try{n.componentDidMount()}catch(t){pn(e,e.return,t)}}},gh=nx.react_stack_bottom_frame.bind(nx),tx={react_stack_bottom_frame:function(e,n,t,a,l){try{n.componentDidUpdate(t,a,l)}catch(o){pn(e,e.return,o)}}},ax=tx.react_stack_bottom_frame.bind(tx),lx={react_stack_bottom_frame:function(e,n){var t=n.stack;e.componentDidCatch(n.value,{componentStack:t!==null?t:""})}},nE=lx.react_stack_bottom_frame.bind(lx),ox={react_stack_bottom_frame:function(e,n,t){try{t.componentWillUnmount()}catch(a){pn(e,n,a)}}},ix=ox.react_stack_bottom_frame.bind(ox),sx={react_stack_bottom_frame:function(e){var n=e.create;return e=e.inst,n=n(),e.destroy=n}},tE=sx.react_stack_bottom_frame.bind(sx),rx={react_stack_bottom_frame:function(e,n,t){try{t()}catch(a){pn(e,n,a)}}},aE=rx.react_stack_bottom_frame.bind(rx),ux={react_stack_bottom_frame:function(e){var n=e._init;return n(e._payload)}},lE=ux.react_stack_bottom_frame.bind(ux),bs=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),bh=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),ud=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),cd={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},ii=null,dd=null,vh=!1,si=null,$r=!1,vs=null,Pr=0,en=null,yh,cx=yh=!1,dx={},fx={},px={};I=function(e,n,t){if(t!==null&&typeof t=="object"&&t._store&&(!t._store.validated&&t.key==null||t._store.validated===2)){if(typeof t._store!="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");t._store.validated=1;var a=q(e),l=a||"null";if(!dx[l]){dx[l]=!0,t=t._owner,e=e._debugOwner;var o="";e&&typeof e.tag=="number"&&(l=q(e))&&(o=`

Check the render method of \``+l+"`."),o||a&&(o=`

Check the top-level render call using <`+a+">.");var i="";t!=null&&e!==t&&(a=null,typeof t.tag=="number"?a=q(t):typeof t.name=="string"&&(a=t.name),a&&(i=" It was passed a child from "+a+".")),B(n,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',o,i)})}}};var ri=Ig(!0),mx=Ig(!1),hx=0,gx=1,bx=2,xh=3,wo=!1,vx=!1,_h=null,Nh=!1,So=C(null),fd=C(0),rt=C(null),gt=null,ys=1,Fr=2,ut=C(0),Jr=0,ba=1,Tt=2,Kt=4,bt=8,xs,yx=new Set,xx=new Set,wh=new Set,_x=new Set,Vl=0,He=null,wn=null,qn=null,pd=!1,_s=!1,ui=!1,md=0,Wr=0,sl=null,oE=0,iE=25,K=null,va=null,Bl=-1,Kr=!1,hd={readContext:Dn,use:ao,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useLayoutEffect:In,useInsertionEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useSyncExternalStore:In,useId:In,useHostTransitionStatus:In,useFormState:In,useActionState:In,useOptimistic:In,useMemoCache:In,useCacheRefresh:In,useEffectEvent:In},Sh=null,Nx=null,Eh=null,wx=null,rl=null,ja=null,gd=null;Sh={readContext:function(e){return Dn(e)},use:ao,useCallback:function(e,n){return K="useCallback",We(),ji(n),Kf(e,n)},useContext:function(e){return K="useContext",We(),Dn(e)},useEffect:function(e,n){return K="useEffect",We(),ji(n),oc(e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",We(),ji(t),Wf(e,n,t)},useInsertionEffect:function(e,n){K="useInsertionEffect",We(),ji(n),Xo(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",We(),ji(n),Jf(e,n)},useMemo:function(e,n){K="useMemo",We(),ji(n);var t=ae.H;ae.H=rl;try{return ep(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",We();var a=ae.H;ae.H=rl;try{return Lf(e,n,t)}finally{ae.H=a}},useRef:function(e){return K="useRef",We(),Pf(e)},useState:function(e){K="useState",We();var n=ae.H;ae.H=rl;try{return Xf(e)}finally{ae.H=n}},useDebugValue:function(){K="useDebugValue",We()},useDeferredValue:function(e,n){return K="useDeferredValue",We(),np(e,n)},useTransition:function(){return K="useTransition",We(),lp()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",We(),Yf(e,n,t)},useId:function(){return K="useId",We(),op()},useFormState:function(e,n){return K="useFormState",We(),ec(),ki(e,n)},useActionState:function(e,n){return K="useActionState",We(),ki(e,n)},useOptimistic:function(e){return K="useOptimistic",We(),Qf(e)},useHostTransitionStatus:Qo,useMemoCache:Zo,useCacheRefresh:function(){return K="useCacheRefresh",We(),ip()},useEffectEvent:function(e){return K="useEffectEvent",We(),Ff(e)}},Nx={readContext:function(e){return Dn(e)},use:ao,useCallback:function(e,n){return K="useCallback",ye(),Kf(e,n)},useContext:function(e){return K="useContext",ye(),Dn(e)},useEffect:function(e,n){return K="useEffect",ye(),oc(e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",ye(),Wf(e,n,t)},useInsertionEffect:function(e,n){K="useInsertionEffect",ye(),Xo(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",ye(),Jf(e,n)},useMemo:function(e,n){K="useMemo",ye();var t=ae.H;ae.H=rl;try{return ep(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",ye();var a=ae.H;ae.H=rl;try{return Lf(e,n,t)}finally{ae.H=a}},useRef:function(e){return K="useRef",ye(),Pf(e)},useState:function(e){K="useState",ye();var n=ae.H;ae.H=rl;try{return Xf(e)}finally{ae.H=n}},useDebugValue:function(){K="useDebugValue",ye()},useDeferredValue:function(e,n){return K="useDeferredValue",ye(),np(e,n)},useTransition:function(){return K="useTransition",ye(),lp()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",ye(),Yf(e,n,t)},useId:function(){return K="useId",ye(),op()},useActionState:function(e,n){return K="useActionState",ye(),ki(e,n)},useFormState:function(e,n){return K="useFormState",ye(),ec(),ki(e,n)},useOptimistic:function(e){return K="useOptimistic",ye(),Qf(e)},useHostTransitionStatus:Qo,useMemoCache:Zo,useCacheRefresh:function(){return K="useCacheRefresh",ye(),ip()},useEffectEvent:function(e){return K="useEffectEvent",ye(),Ff(e)}},Eh={readContext:function(e){return Dn(e)},use:ao,useCallback:function(e,n){return K="useCallback",ye(),rc(e,n)},useContext:function(e){return K="useContext",ye(),Dn(e)},useEffect:function(e,n){K="useEffect",ye(),Ot(2048,bt,e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",ye(),sc(e,n,t)},useInsertionEffect:function(e,n){return K="useInsertionEffect",ye(),Ot(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",ye(),Ot(4,Kt,e,n)},useMemo:function(e,n){K="useMemo",ye();var t=ae.H;ae.H=ja;try{return uc(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",ye();var a=ae.H;ae.H=ja;try{return zi(e,n,t)}finally{ae.H=a}},useRef:function(){return K="useRef",ye(),gn().memoizedState},useState:function(){K="useState",ye();var e=ae.H;ae.H=ja;try{return zi(Ea)}finally{ae.H=e}},useDebugValue:function(){K="useDebugValue",ye()},useDeferredValue:function(e,n){return K="useDeferredValue",ye(),lb(e,n)},useTransition:function(){return K="useTransition",ye(),cb()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",ye(),tc(e,n,t)},useId:function(){return K="useId",ye(),gn().memoizedState},useFormState:function(e){return K="useFormState",ye(),ec(),ac(e)},useActionState:function(e){return K="useActionState",ye(),ac(e)},useOptimistic:function(e,n){return K="useOptimistic",ye(),$g(e,n)},useHostTransitionStatus:Qo,useMemoCache:Zo,useCacheRefresh:function(){return K="useCacheRefresh",ye(),gn().memoizedState},useEffectEvent:function(e){return K="useEffectEvent",ye(),ic(e)}},wx={readContext:function(e){return Dn(e)},use:ao,useCallback:function(e,n){return K="useCallback",ye(),rc(e,n)},useContext:function(e){return K="useContext",ye(),Dn(e)},useEffect:function(e,n){K="useEffect",ye(),Ot(2048,bt,e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",ye(),sc(e,n,t)},useInsertionEffect:function(e,n){return K="useInsertionEffect",ye(),Ot(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",ye(),Ot(4,Kt,e,n)},useMemo:function(e,n){K="useMemo",ye();var t=ae.H;ae.H=gd;try{return uc(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",ye();var a=ae.H;ae.H=gd;try{return tr(e,n,t)}finally{ae.H=a}},useRef:function(){return K="useRef",ye(),gn().memoizedState},useState:function(){K="useState",ye();var e=ae.H;ae.H=gd;try{return tr(Ea)}finally{ae.H=e}},useDebugValue:function(){K="useDebugValue",ye()},useDeferredValue:function(e,n){return K="useDeferredValue",ye(),ob(e,n)},useTransition:function(){return K="useTransition",ye(),db()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",ye(),tc(e,n,t)},useId:function(){return K="useId",ye(),gn().memoizedState},useFormState:function(e){return K="useFormState",ye(),ec(),lc(e)},useActionState:function(e){return K="useActionState",ye(),lc(e)},useOptimistic:function(e,n){return K="useOptimistic",ye(),Fg(e,n)},useHostTransitionStatus:Qo,useMemoCache:Zo,useCacheRefresh:function(){return K="useCacheRefresh",ye(),gn().memoizedState},useEffectEvent:function(e){return K="useEffectEvent",ye(),ic(e)}},rl={readContext:function(e){return y(),Dn(e)},use:function(e){return f(),ao(e)},useCallback:function(e,n){return K="useCallback",f(),We(),Kf(e,n)},useContext:function(e){return K="useContext",f(),We(),Dn(e)},useEffect:function(e,n){return K="useEffect",f(),We(),oc(e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",f(),We(),Wf(e,n,t)},useInsertionEffect:function(e,n){K="useInsertionEffect",f(),We(),Xo(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",f(),We(),Jf(e,n)},useMemo:function(e,n){K="useMemo",f(),We();var t=ae.H;ae.H=rl;try{return ep(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",f(),We();var a=ae.H;ae.H=rl;try{return Lf(e,n,t)}finally{ae.H=a}},useRef:function(e){return K="useRef",f(),We(),Pf(e)},useState:function(e){K="useState",f(),We();var n=ae.H;ae.H=rl;try{return Xf(e)}finally{ae.H=n}},useDebugValue:function(){K="useDebugValue",f(),We()},useDeferredValue:function(e,n){return K="useDeferredValue",f(),We(),np(e,n)},useTransition:function(){return K="useTransition",f(),We(),lp()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",f(),We(),Yf(e,n,t)},useId:function(){return K="useId",f(),We(),op()},useFormState:function(e,n){return K="useFormState",f(),We(),ki(e,n)},useActionState:function(e,n){return K="useActionState",f(),We(),ki(e,n)},useOptimistic:function(e){return K="useOptimistic",f(),We(),Qf(e)},useMemoCache:function(e){return f(),Zo(e)},useHostTransitionStatus:Qo,useCacheRefresh:function(){return K="useCacheRefresh",We(),ip()},useEffectEvent:function(e){return K="useEffectEvent",f(),We(),Ff(e)}},ja={readContext:function(e){return y(),Dn(e)},use:function(e){return f(),ao(e)},useCallback:function(e,n){return K="useCallback",f(),ye(),rc(e,n)},useContext:function(e){return K="useContext",f(),ye(),Dn(e)},useEffect:function(e,n){K="useEffect",f(),ye(),Ot(2048,bt,e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",f(),ye(),sc(e,n,t)},useInsertionEffect:function(e,n){return K="useInsertionEffect",f(),ye(),Ot(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",f(),ye(),Ot(4,Kt,e,n)},useMemo:function(e,n){K="useMemo",f(),ye();var t=ae.H;ae.H=ja;try{return uc(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",f(),ye();var a=ae.H;ae.H=ja;try{return zi(e,n,t)}finally{ae.H=a}},useRef:function(){return K="useRef",f(),ye(),gn().memoizedState},useState:function(){K="useState",f(),ye();var e=ae.H;ae.H=ja;try{return zi(Ea)}finally{ae.H=e}},useDebugValue:function(){K="useDebugValue",f(),ye()},useDeferredValue:function(e,n){return K="useDeferredValue",f(),ye(),lb(e,n)},useTransition:function(){return K="useTransition",f(),ye(),cb()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",f(),ye(),tc(e,n,t)},useId:function(){return K="useId",f(),ye(),gn().memoizedState},useFormState:function(e){return K="useFormState",f(),ye(),ac(e)},useActionState:function(e){return K="useActionState",f(),ye(),ac(e)},useOptimistic:function(e,n){return K="useOptimistic",f(),ye(),$g(e,n)},useMemoCache:function(e){return f(),Zo(e)},useHostTransitionStatus:Qo,useCacheRefresh:function(){return K="useCacheRefresh",ye(),gn().memoizedState},useEffectEvent:function(e){return K="useEffectEvent",f(),ye(),ic(e)}},gd={readContext:function(e){return y(),Dn(e)},use:function(e){return f(),ao(e)},useCallback:function(e,n){return K="useCallback",f(),ye(),rc(e,n)},useContext:function(e){return K="useContext",f(),ye(),Dn(e)},useEffect:function(e,n){K="useEffect",f(),ye(),Ot(2048,bt,e,n)},useImperativeHandle:function(e,n,t){return K="useImperativeHandle",f(),ye(),sc(e,n,t)},useInsertionEffect:function(e,n){return K="useInsertionEffect",f(),ye(),Ot(4,Tt,e,n)},useLayoutEffect:function(e,n){return K="useLayoutEffect",f(),ye(),Ot(4,Kt,e,n)},useMemo:function(e,n){K="useMemo",f(),ye();var t=ae.H;ae.H=ja;try{return uc(e,n)}finally{ae.H=t}},useReducer:function(e,n,t){K="useReducer",f(),ye();var a=ae.H;ae.H=ja;try{return tr(e,n,t)}finally{ae.H=a}},useRef:function(){return K="useRef",f(),ye(),gn().memoizedState},useState:function(){K="useState",f(),ye();var e=ae.H;ae.H=ja;try{return tr(Ea)}finally{ae.H=e}},useDebugValue:function(){K="useDebugValue",f(),ye()},useDeferredValue:function(e,n){return K="useDeferredValue",f(),ye(),ob(e,n)},useTransition:function(){return K="useTransition",f(),ye(),db()},useSyncExternalStore:function(e,n,t){return K="useSyncExternalStore",f(),ye(),tc(e,n,t)},useId:function(){return K="useId",f(),ye(),gn().memoizedState},useFormState:function(e){return K="useFormState",f(),ye(),lc(e)},useActionState:function(e){return K="useActionState",f(),ye(),lc(e)},useOptimistic:function(e,n){return K="useOptimistic",f(),ye(),Fg(e,n)},useMemoCache:function(e){return f(),Zo(e)},useHostTransitionStatus:Qo,useCacheRefresh:function(){return K="useCacheRefresh",ye(),gn().memoizedState},useEffectEvent:function(e){return K="useEffectEvent",f(),ye(),ic(e)}};var Sx={},Ex=new Set,Mx=new Set,Dx=new Set,Tx=new Set,Cx=new Set,Ax=new Set,Ox=new Set,Rx=new Set,jx=new Set,zx=new Set;Object.freeze(Sx);var Mh={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=$t(e),l=Kl(a);l.payload=n,t!=null&&(rp(t),l.callback=t),n=eo(e,l,a),n!==null&&(Ga(a,"this.setState()",e),jn(n,e,a),Js(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=$t(e),l=Kl(a);l.tag=gx,l.payload=n,t!=null&&(rp(t),l.callback=t),n=eo(e,l,a),n!==null&&(Ga(a,"this.replaceState()",e),jn(n,e,a),Js(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=$t(e),a=Kl(t);a.tag=bx,n!=null&&(rp(n),a.callback=n),n=eo(e,a,t),n!==null&&(Ga(t,"this.forceUpdate()",e),jn(n,e,t),Js(n,e,t))}},Ns=null,Dh=null,Th=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),Bn=!1,kx={},Ix={},Ux={},Vx={},ws=!1,Bx={},Ch={},Hx={},Ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Gx=!1,Lx=null;Lx=new Set;var bd=!1,ea=null,ul=null,It=0,vd=new Map,qx={},eu=0,Oh=1,yd=2,nt=!1,bn=!1,cl=!1,Rh=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,tt=null,Ss=null,Es=null,dl=!1,nu=!1,xd=!1,jh=!1,Yn=null,Ut=!1,za=null,Qn=!1,ci=8192,sE={getCacheForType:function(e){var n=Dn(Ln),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Dn(Ln).controller.signal},getOwner:function(){return Jt}};if(typeof Symbol=="function"&&Symbol.for){var tu=Symbol.for;tu("selector.component"),tu("selector.has_pseudo_class"),tu("selector.role"),tu("selector.test_id"),tu("selector.text")}var rE=[],uE=typeof WeakMap=="function"?WeakMap:Map,at=0,$n=2,na=4,Hl=0,au=1,di=2,_d=3,Eo=4,lu=6,Zx=5,rn=at,Sn=null,Fe=null,Le=0,Vt=0,Nd=1,fi=2,ou=3,Xx=4,zh=5,iu=6,wd=7,kh=8,pi=9,vn=Vt,ta=null,Gl=!1,Ms=!1,Ih=!1,fl=0,An=Hl,Mo=0,Do=0,Sd=0,Bt=0,mi=0,su=null,Ct=null,Ed=!1,Md=0,Qx=0,$x=300,Dd=1/0,Px=500,ru=null,kn=null,To=null,Td=0,uu=1,Uh=2,Fx=3,pl=0,Jx=1,Wx=2,Vh=3,Bh=4,Cd=5,On=0,ka=null,hi=null,Ht=0,Hh=0,Ad=-0,Gh=null,Kx=null,Ds=null,Ts=null,Cs=null,Od=null,aa=Td,Lh=null,cE=50,cu=0,Rd=null,qh=!1,jd=!1,dE=50,gi=0,du=null,As=!1,e_=!1,zd=null,n_=!1,t_=new Set,fE={},Os=null,Rs=null,Yh=!1,Zh=!1,kd=!1,Xh=!1,Co=0,Qh={};(function(){for(var e=0;e<Km.length;e++){var n=Km[e],t=n.toLowerCase();n=n[0].toUpperCase()+n.slice(1),wa(t,"on"+n)}wa(zy,"onAnimationEnd"),wa(ky,"onAnimationIteration"),wa(Iy,"onAnimationStart"),wa("dblclick","onDoubleClick"),wa("focusin","onFocus"),wa("focusout","onBlur"),wa(G3,"onTransitionRun"),wa(L3,"onTransitionStart"),wa(q3,"onTransitionCancel"),wa(Uy,"onTransitionEnd")})(),Mi("onMouseEnter",["mouseout","mouseover"]),Mi("onMouseLeave",["mouseout","mouseover"]),Mi("onPointerEnter",["pointerout","pointerover"]),Mi("onPointerLeave",["pointerout","pointerover"]),ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ko("onBeforeInput",["compositionend","keypress","textInput","paste"]),ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu)),Id="_reactListening"+Math.random().toString(36).slice(2),a_=!1,l_=!1,Ud=!1,o_=!1,Vd=!1,Bd=!1,i_=!1,Hd={},pE=/\r\n?/g,mE=/\u0000|\uFFFD/g,bi="http://www.w3.org/1999/xlink",Ph="http://www.w3.org/XML/1998/namespace",hE={},gE="javascript:throw new Error('React form unexpectedly submitted.')",bE="suppressHydrationWarning",vi="&",Gd="/&",pu="$",mu="/$",Ao="$?",yi="$~",js="$!",vE="html",yE="body",xE="head",Fh="F!",s_="F",r_="loading",u_="style",Ll=0,zs=1,Ld=2,Jh=null,Wh=null,c_=!1,d_={dialog:!0,webview:!0},Kh=null,hu=void 0,e0=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,xi=-1,f_=typeof Promise=="function"?Promise:void 0,p_=typeof requestAnimationFrame=="function"?requestAnimationFrame:e0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(kw)}:e0,wE=500;Jo.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:Xe({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Jo.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],l=0;l<t.length;l++){var o=t[l].effect;o!==null&&o.target===e&&o.pseudoElement===n&&a.push(t[l])}return a},Jo.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},Pt.prototype.addEventListener=function(e,n,t){var a=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(d1(o,e,n,t)===-1){var i=this,s=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(s=function(r){i.removeEventListener(e,n,t),typeof n=="function"?n.call(this,r):n.handleEvent(r)}),a!==null&&(l=i.removeEventListener.bind(i,e,n,t),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=Xi(t),o.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:s,cleanup:l}),te(this._fragmentFiber,eS,e,s,a)}this._eventListeners=o}},Pt.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=d1(a,e,n,t),n!==-1)){var l=a[n];t=l.attachedListener;var o=l.cleanup;l=Xi(l.optionsOrUseCapture),te(this._fragmentFiber,nS,e,t,l),a.splice(n,1),o!==null&&o()}},Pt.prototype.dispatchEvent=function(e){var n=W(this._fragmentFiber);if(n===null)return!0;n=J(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var o=t[l];a.addEventListener(o.type,o.attachedListener,Xi(o.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(l=0;l<t.length;l++)o=t[l],a.removeEventListener(o.type,o.attachedListener,Xi(o.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},Pt.prototype.focus=function(e){he(this._fragmentFiber.child,!0,f1,e,void 0,void 0)},Pt.prototype.focusLast=function(e){var n=[];he(this._fragmentFiber.child,!0,rm,n,void 0,void 0);for(var t=n.length-1;0<=t&&!f1(n[t],e);t--);},Pt.prototype.blur=function(){var e=W(this._fragmentFiber);e!==null&&(e=J(e),e=mr(e).activeElement,e!==null&&te(this._fragmentFiber,tS,e))},Pt.prototype.observeUsing=function(e){var n=!1,t=!1;te(this._fragmentFiber,function(a){if(a.tag===6)n=!0;else return t=!0;return!1}),n&&!t&&console.error("observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes."),this._observers===null&&(this._observers=new Set),this._observers.add(e),te(this._fragmentFiber,aS,e)},Pt.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),te(this._fragmentFiber,lS,e);for(var t=n=0;t<Ia.length;t++){var a=Ia[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Ia[n++]=a}Ia.length=n}else console.error("You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()")};var Ia=[],n0=!1;Pt.prototype.getClientRects=function(){var e=[];return te(this._fragmentFiber,iS,e),e},Pt.prototype.getRootNode=function(e){var n=W(this._fragmentFiber);return n===null?this:J(n).getRootNode(e)},Pt.prototype.compareDocumentPosition=function(e){var n=W(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];te(this._fragmentFiber,rm,t);var a=J(n);if(t.length===0){if(n=a,ve(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Ae(t)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=J(t).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=J(t[0]),l=J(t[t.length-1]);var o=ve(this._fragmentFiber)?n.parentElement:a;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=o.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=n.compareDocumentPosition(e),s=l.compareDocumentPosition(e),r=i&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&o&&i&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||o&&l===e||r||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sS(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},Pt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error("FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.");var n=[];te(this._fragmentFiber,rm,n);var t=e!==!1;if(n.length===0){var a=Ae(this._fragmentFiber);if(a=t?a[1]||a[0]||W(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=J(a),p1(e,t);return}if(a=J(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null?t.scrollIntoView(e):console.warn("You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.");return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var l=n[a];l.tag===6?(l=J(l),p1(l,t)):J(l).scrollIntoView(e),a+=t?-1:1}};var t0=null,_i=0,gu=1,m_=2,h_=3,ya=4,xa=new Map,g_=new Set,ql=mn.d;mn.d={f:function(){var e=ql.f(),n=qi();return e||n},r:function(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?ub(n):ql.r(e)},D:function(e){ql.D(e),N1("dns-prefetch",e,null)},C:function(e,n){ql.C(e,n),N1("preconnect",e,n)},L:function(e,n,t){ql.L(e,n,t);var a=ks;if(a&&e&&n){var l='link[rel="preload"][as="'+ia(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+ia(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+ia(t.imageSizes)+'"]')):l+='[href="'+ia(e)+'"]';var o=l;switch(n){case"style":o=Qi(e);break;case"script":o=$i(e)}if(!(xa.has(o)||(e=Xe({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),xa.set(o,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(vr(o))||n==="script"&&a.querySelector(yr(o))))){var i=a.createElement("link");it(i,"link",e),n==="style"&&(i[Yc]=!0,i.onload=i.onerror=function(){y0(i)}),Jn(i),a.head.appendChild(i)}}},m:function(e,n){ql.m(e,n);var t=ks;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+ia(a)+'"][href="'+ia(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=$i(e)}if(!xa.has(o)&&(e=Xe({rel:"modulepreload",href:e},n),xa.set(o,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(yr(o)))return}a=t.createElement("link"),it(a,"link",e),Jn(a),t.head.appendChild(a)}}},X:function(e,n){ql.X(e,n);var t=ks;if(t&&e){var a=Ei(t).hoistableScripts,l=$i(e),o=a.get(l);o||(o=t.querySelector(yr(l)),o||(e=Xe({src:e,async:!0},n),(n=xa.get(l))&&hm(e,n),o=t.createElement("script"),Jn(o),it(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}},S:function(e,n,t){ql.S(e,n,t);var a=ks;if(a&&e){var l=Ei(a).hoistableStyles,o=Qi(e);n=n||"default";var i=l.get(o);if(!i){var s={loading:_i,preload:null};if(i=a.querySelector(vr(o)))s.loading=gu|ya;else{e=Xe({rel:"stylesheet",href:e,"data-precedence":n},t),(t=xa.get(o))&&mm(e,t);var r=i=a.createElement("link");Jn(r),it(r,"link",e),r._p=new Promise(function(c,D){r.onload=c,r.onerror=D}),r.addEventListener("load",function(){s.loading|=gu}),r.addEventListener("error",function(){s.loading|=m_}),s.loading|=ya,Oc(i,n,a)}i={type:"stylesheet",instance:i,count:1,state:s},l.set(o,i)}}},M:function(e,n){ql.M(e,n);var t=ks;if(t&&e){var a=Ei(t).hoistableScripts,l=$i(e),o=a.get(l);o||(o=t.querySelector(yr(l)),o||(e=Xe({src:e,async:!0,type:"module"},n),(n=xa.get(l))&&hm(e,n),o=t.createElement("script"),Jn(o),it(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}};var ks=typeof document>"u"?null:document,qd=null,SE=6e4,EE=800,ME=500,Yd=0,a0=null,Zd=null,Ni=US,Is={$$typeof:Ta,Provider:null,Consumer:null,_currentValue:Ni,_currentValue2:Ni,_threadCount:0},b_="%c%s%c",v_="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",y_="",Xd=" ",DE=Function.prototype.bind,x_=!1,__=null,N_=null,w_=null,S_=null,E_=null,M_=null,D_=null,T_=null,C_=null,A_=null;__=function(e,n,t,a){n=Q(e,n),n!==null&&(t=F(n.memoizedState,t,0,a),n.memoizedState=t,n.baseState=t,e.memoizedProps=Xe({},e.memoizedProps),t=pt(e,2),t!==null&&jn(t,e,2))},N_=function(e,n,t){n=Q(e,n),n!==null&&(t=M(n.memoizedState,t,0),n.memoizedState=t,n.baseState=t,e.memoizedProps=Xe({},e.memoizedProps),t=pt(e,2),t!==null&&jn(t,e,2))},w_=function(e,n,t,a){n=Q(e,n),n!==null&&(t=E(n.memoizedState,t,a),n.memoizedState=t,n.baseState=t,e.memoizedProps=Xe({},e.memoizedProps),t=pt(e,2),t!==null&&jn(t,e,2))},S_=function(e,n,t){e.pendingProps=F(e.memoizedProps,n,0,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps),n=pt(e,2),n!==null&&jn(n,e,2)},E_=function(e,n){e.pendingProps=M(e.memoizedProps,n,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),n=pt(e,2),n!==null&&jn(n,e,2)},M_=function(e,n,t){e.pendingProps=E(e.memoizedProps,n,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps),n=pt(e,2),n!==null&&jn(n,e,2)},D_=function(e){var n=pt(e,2);n!==null&&jn(n,e,2)},T_=function(e){var n=gl(),t=pt(e,n);t!==null&&jn(t,e,n)},C_=function(e){x=e},A_=function(e){b=e};var Us=!0,Qd=null,l0=!1,Oo=null,Ro=null,jo=null,bu=new Map,vu=new Map,zo=[],TE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),$d=null;if(kc.prototype.render=Nm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error("Cannot update an unmounted root.");var t=arguments;typeof t[1]=="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):N(t[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof t[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),t=e;var a=n.current,l=$t(a);bm(a,l,t,n,null,null)},kc.prototype.unmount=Nm.prototype.unmount=function(){var e=arguments;if(typeof e[0]=="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),e=this._internalRoot,e!==null){this._internalRoot=null;var n=e.containerInfo;(rn&($n|na))!==at&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),bm(e.current,2,null,e,null,null),qi(),n[co]=null}},kc.prototype.unstable_scheduleHydration=function(e){if(e){var n=sn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<zo.length&&n!==0&&n<zo[t].priority;t++);zo.splice(t,0,e),t===0&&B1(e)}},(function(){var e=wm.version;if(e!=="19.3.1")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.3.1
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),mn.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error("Unable to find node on an unmounted component."):(e=Object.keys(e).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+e));return e=Z(n),e=e!==null?re(e):null,e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ae,reconcilerVersion:"19.3.1"};return e.overrideHookState=__,e.overrideHookStateDeletePath=N_,e.overrideHookStateRenamePath=w_,e.overrideProps=S_,e.overridePropsDeletePath=E_,e.overridePropsRenamePath=M_,e.scheduleUpdate=D_,e.scheduleRetry=T_,e.setErrorHandler=C_,e.setSuspenseHandler=A_,e.scheduleRefresh=p,e.scheduleRoot=d,e.setRefreshHandler=m,e.getCurrentFiber=MS,ml(e)})()&&ll&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var O_=window.location.protocol;/^(https?|file):$/.test(O_)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(O_==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}yu.createRoot=function(e,n){if(!N(e))throw Error("Target container is not a DOM element.");q1(e);var t=!1,a="",l=bb,o=vb,i=yb;return n!=null&&(n.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof n=="object"&&n!==null&&n.$$typeof===Ka&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=R1(e,1,!1,null,null,t,a,null,l,o,i,L1),e[co]=n.current,Kp(e),new Nm(n)},yu.hydrateRoot=function(e,n,t){if(!N(e))throw Error("Target container is not a DOM element.");q1(e),n===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var a=!1,l="",o=bb,i=vb,s=yb,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(r=t.formState)),n=R1(e,1,!0,n,t??null,a,l,r,o,i,s,L1),n.context=j1(null),t=n.current,a=$t(t),a=Te(a),l=Kl(a),l.callback=null,eo(t,l,a),Ga(a,"hydrateRoot()",null),t=a,n.current.lanes=t,Gt(n,t),Ja(n),e[co]=n.current,Kp(e),new kc(n)},yu.version="19.3.1",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})(),yu}var G_;function BE(){return G_||(G_=1,s0.exports=VE()),s0.exports}var HE=BE();const GE=g0(HE),xu=Q=>{const{weight:F,ampuleConcentrationMg:E,ampuleVolumeMl:L,dose:M,maxTotalDoseMg:b}=Q;if(!F||!E||!L||!M)return{formula:"Preencha todos os campos."};const x=E/L;if(x===0)return{formula:"Concentração inválida."};const f=M*F,y=f/x,R={bolusMl:y.toFixed(2),formula:`(${M} mg/kg * ${F} kg) / (${E} mg / ${L} ml) = ${y.toFixed(2)} ml`};if(b&&f>b){const I=b/x;R.cappedResultMl=I.toFixed(2),R.maxDoseWarning=`Dose (${f.toFixed(1)}mg) excede o máximo de ${b}mg.`}return R},LE=Q=>{const{weight:F,ampuleConcentrationMg:E,ampuleVolumeMl:L,dose:M,maxTotalDoseMg:b}=Q;if(!F||!E||!L||!M)return{formula:"Preencha todos os campos."};const x=E/L;if(x===0)return{formula:"Concentração inválida."};const y=M*F/1e3,R=y/x,I={bolusMl:R.toFixed(2),formula:`((${M} mcg/kg * ${F} kg) / 1000) / (${E} mg / ${L} ml) = ${R.toFixed(2)} ml`};if(b&&y>b){const A=b/x;I.cappedResultMl=A.toFixed(2),I.maxDoseWarning=`Dose (${y.toFixed(1)}mg) excede o máximo de ${b}mg.`}return I},Vs=Q=>{const{weight:F,ampuleConcentrationMg:E,dose:L,solutionVolumeMl:M=250}=Q;if(!F||!E||!L||!M)return{formula:"Preencha todos os campos."};const b=E/M,x=b*1e3;if(x===0)return{formula:"Concentração final inválida."};const R=L*F/x*60;return{infusionMlH:R.toFixed(2),finalConcentrationMgMl:b.toFixed(2),formula:`Dose: ${L} mcg/kg/min. Infusão: ${R.toFixed(2)} ml/h`}},L_=Q=>{const{weight:F,ampuleConcentrationMg:E,dose:L,solutionVolumeMl:M=250}=Q;if(!F||!E||!L||!M)return{formula:"Preencha todos os campos."};const b=E/M;if(b===0)return{formula:"Concentração final inválida."};const f=L*F/b;return{infusionMlH:f.toFixed(2),finalConcentrationMgMl:b.toFixed(2),formula:`Dose: ${L} mg/kg/h. Infusão: ${f.toFixed(2)} ml/h`}},Zl=[{name:"Indução e Intubação",drugs:[{name:"Fentanil",description:"Analgésico opioide potente.",calculationType:"bolus",unit:"mcg/kg",defaultDose:2,doseRange:"1 - 3 mcg/kg",notes:"Administrar lentamente para evitar rigidez torácica.",presentations:[{label:"250mcg/5ml",concentrationMg:.25,volumeMl:5},{label:"500mcg/10ml",concentrationMg:.5,volumeMl:10}],dilutions:[{name:"Diluição Padrão (10 mcg/ml)",description:"1 ampola (500mcg/10ml) + 40ml de SF 0.9%",totalDrugMg:.5,finalVolumeMl:50,finalConcentrationMgMl:.01,useCase:"Para administração em bolus fracionados e seguros."}],calculate:LE},{name:"Midazolam",description:"Benzodiazepínico para sedação.",calculationType:"bolus",unit:"mg/kg",defaultDose:.2,doseRange:"0.1 - 0.3 mg/kg",notes:"Pode causar hipotensão, especialmente em idosos ou instáveis.",presentations:[{label:"15mg/3ml",concentrationMg:15,volumeMl:3},{label:"5mg/5ml",concentrationMg:5,volumeMl:5},{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],dilutions:[{name:"Diluição para Bolus (1mg/ml)",description:"1 ampola (50mg/10ml) + 40ml de SF 0.9%",totalDrugMg:50,finalVolumeMl:50,finalConcentrationMgMl:1,useCase:"Para administração em bolus lento e seguro."},{name:"Diluição para Bolus (1.5mg/ml)",description:"1 ampola (15mg/3ml) + 7ml de SF 0.9%",totalDrugMg:15,finalVolumeMl:10,finalConcentrationMgMl:1.5,useCase:"Alternativa para bolus, usando ampola de 15mg."}],calculate:xu},{name:"Propofol",description:"Agente hipnótico de ação curta.",calculationType:"bolus",unit:"mg/kg",defaultDose:2,doseRange:"1.5 - 2.5 mg/kg",notes:"Causa apneia e hipotensão. Geralmente não é diluído para bolus.",presentations:[{label:"200mg/20ml",concentrationMg:200,volumeMl:20}],calculate:xu},{name:"Cetamina",description:"Anestésico dissociativo.",calculationType:"bolus",unit:"mg/kg",defaultDose:1.5,doseRange:"1 - 2 mg/kg",notes:"Ideal para pacientes instáveis hemodinamicamente. Aumenta a secreção.",presentations:[{label:"500mg/10ml",concentrationMg:500,volumeMl:10}],dilutions:[{name:"Diluição Padrão (10mg/ml)",description:"1 ampola (500mg/10ml) + 40ml de SF 0.9%",totalDrugMg:500,finalVolumeMl:50,finalConcentrationMgMl:10,useCase:"Para administração em bolus e evitar flebite."}],calculate:xu},{name:"Succinilcolina",description:"Bloqueador neuromuscular despolarizante.",calculationType:"bolus",unit:"mg/kg",defaultDose:1.5,doseRange:"1 - 2 mg/kg",notes:"Causa fasciculações. Contraindicada em hipercalemia. Geralmente não é diluída.",maxTotalDoseMg:150,presentations:[{label:"100mg/10ml",concentrationMg:100,volumeMl:10}],calculate:xu},{name:"Rocurônio",description:"Bloqueador neuromuscular não-despolarizante.",calculationType:"bolus",unit:"mg/kg",defaultDose:1,doseRange:"0.6 - 1.2 mg/kg",notes:"Dose de 1.2 mg/kg para sequência rápida. Geralmente não é diluído.",presentations:[{label:"50mg/5ml",concentrationMg:50,volumeMl:5}],calculate:xu}]},{name:"Drogas Vasoativas (DVA)",drugs:[{name:"Noradrenalina",description:"Vasopressor de primeira escolha no choque séptico.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:.1,doseRange:"0.01 - 3 mcg/kg/min",notes:"Diluição: informar o total de mg adicionado na solução.",presentations:[{label:"4mg/4ml",concentrationMg:4,volumeMl:4}],dilutions:[{name:"Padrão UTI (16mg/250ml)",description:"4 ampolas (4mg/4ml) em 234ml de SG 5%",totalDrugMg:16,finalVolumeMl:250,finalConcentrationMgMl:16/250,useCase:"Diluição padrão para infusão contínua em UTI."},{name:"Concentrada (32mg/250ml)",description:"8 ampolas (4mg/4ml) em 218ml de SG 5%",totalDrugMg:32,finalVolumeMl:250,finalConcentrationMgMl:32/250,useCase:"Para pacientes com restrição hídrica."}],calculate:Vs},{name:"Dobutamina",description:"Agente inotrópico para choque cardiogênico.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:5,doseRange:"2 - 20 mcg/kg/min",notes:"Diluição: informar o total de mg adicionado na solução.",presentations:[{label:"250mg/20ml",concentrationMg:250,volumeMl:20}],dilutions:[{name:"Padrão UTI (250mg/250ml)",description:"1 ampola (250mg/20ml) em 230ml de SG 5%",totalDrugMg:250,finalVolumeMl:250,finalConcentrationMgMl:1,useCase:"Diluição comum para infusão contínua (1mg/ml)."}],calculate:Vs},{name:"Dopamina",description:"Precursor da noradrenalina com efeitos dose-dependentes.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:5,doseRange:"2 - 20 mcg/kg/min",notes:"Efeitos variam com a dose. Menos utilizada atualmente.",presentations:[{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],calculate:Vs},{name:"Vasopressina",description:"Hormônio antidiurético com efeito vasopressor.",calculationType:"infusion",unit:"U/min",defaultDose:.03,doseRange:"0.01 - 0.04 U/min",notes:"Dose fixa em U/min. Informar o total de Unidades (U) na solução.",presentations:[{label:"20U/1ml",concentrationMg:20,volumeMl:1}],dilutions:[{name:"Padrão UTI (100U/100ml)",description:"5 ampolas (20U/1ml) em 95ml de SF 0.9%",totalDrugMg:100,finalVolumeMl:100,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1U/ml)."}],calculate:Q=>{const{ampuleConcentrationMg:F,dose:E,solutionVolumeMl:L=100}=Q;if(!F||!E||!L)return{formula:"Preencha todos os campos."};const b=F/L;if(b===0)return{formula:"Concentração inválida."};const x=E/b*60;return{infusionMlH:x.toFixed(2),finalConcentrationMgMl:b.toFixed(2),formula:`Dose fixa: ${E} U/min. Infusão: ${x.toFixed(2)} ml/h`}}}]},{name:"Manutenção",drugs:[{name:"Propofol (Manutenção)",description:"Agente hipnótico para sedação contínua.",calculationType:"infusion",unit:"mg/kg/h",defaultDose:4,doseRange:"2 - 6 mg/kg/h",notes:"Monitorar triglicerídeos e risco de síndrome de infusão de propofol.",presentations:[{label:"200mg/20ml",concentrationMg:200,volumeMl:20}],dilutions:[{name:"Uso Puro (10mg/ml)",description:"Administrar a emulsão pura, sem diluição.",totalDrugMg:200,finalVolumeMl:20,finalConcentrationMgMl:10,useCase:"Prática padrão para infusão contínua de Propofol."}],calculate:L_},{name:"Midazolam (Manutenção)",description:"Benzodiazepínico para sedação contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:1,doseRange:"0.5 - 2 mcg/kg/min",notes:"Risco de acúmulo em pacientes com insuficiência renal ou hepática.",presentations:[{label:"15mg/3ml",concentrationMg:15,volumeMl:3},{label:"50mg/10ml",concentrationMg:50,volumeMl:10}],dilutions:[{name:"Padrão UTI (100mg/100ml)",description:"2 ampolas (50mg/10ml) em 80ml de SF 0.9%",totalDrugMg:100,finalVolumeMl:100,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1mg/ml)."}],calculate:Vs},{name:"Fentanil (Manutenção)",description:"Analgésico opioide para analgesia contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:.02,doseRange:"0.01 - 0.05 mcg/kg/min",notes:"Monitorar depressão respiratória e rigidez torácica.",presentations:[{label:"250mcg/5ml",concentrationMg:.25,volumeMl:5},{label:"500mcg/10ml",concentrationMg:.5,volumeMl:10}],dilutions:[{name:"Padrão UTI (2500mcg/250ml)",description:"5 ampolas (500mcg/10ml) em 200ml de SF 0.9%",totalDrugMg:2.5,finalVolumeMl:250,finalConcentrationMgMl:.01,useCase:"Diluição padrão para infusão (10mcg/ml)."}],calculate:Vs},{name:"Rocurônio (Manutenção)",description:"Bloqueador neuromuscular para paralisia contínua.",calculationType:"infusion",unit:"mcg/kg/min",defaultDose:10,doseRange:"5 - 12 mcg/kg/min",notes:"Requer monitorização da função neuromuscular (ex: TOF).",presentations:[{label:"50mg/5ml",concentrationMg:50,volumeMl:5}],dilutions:[{name:"Padrão UTI (250mg/250ml)",description:"5 ampolas (50mg/5ml) em 225ml de SF 0.9%",totalDrugMg:250,finalVolumeMl:250,finalConcentrationMgMl:1,useCase:"Diluição padrão para infusão contínua (1mg/ml)."}],calculate:Vs},{name:"Cetamina (Manutenção)",description:"Anestésico para analgesia/sedação contínua.",calculationType:"infusion",unit:"mg/kg/h",defaultDose:.5,doseRange:"0.2 - 1 mg/kg/h",notes:"Pode causar agitação ou alucinações. Efeito broncodilatador.",presentations:[{label:"500mg/10ml",concentrationMg:500,volumeMl:10}],dilutions:[{name:"Padrão UTI (500mg/250ml)",description:"1 ampola (500mg/10ml) em 240ml de SF 0.9%",totalDrugMg:500,finalVolumeMl:250,finalConcentrationMgMl:2,useCase:"Diluição padrão para infusão contínua (2mg/ml)."}],calculate:L_}]}],qE=({isOpen:Q,onClose:F,drug:E,onApply:L})=>{var M;return Q?v.jsxDEV("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",onClick:F,children:v.jsxDEV("div",{className:"bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto",onClick:b=>b.stopPropagation(),children:[v.jsxDEV("div",{className:"p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10",children:v.jsxDEV("div",{className:"flex justify-between items-center",children:[v.jsxDEV("h3",{className:"text-lg font-bold text-cyan-400",children:["Diluições Comuns para ",E.name]},void 0,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:25,columnNumber:13},void 0),v.jsxDEV("button",{onClick:F,className:"text-slate-400 hover:text-white",children:v.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v.jsxDEV("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:28,columnNumber:17},void 0)},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:27,columnNumber:15},void 0)},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:26,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:24,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:23,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-4 space-y-4",children:(M=E.dilutions)==null?void 0:M.map((b,x)=>v.jsxDEV("div",{className:"bg-slate-900/50 p-4 rounded-md border border-slate-700",children:[v.jsxDEV("h4",{className:"font-semibold text-slate-100",children:b.name},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:37,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-sm text-slate-300 mt-1",children:[v.jsxDEV("span",{className:"font-semibold text-cyan-300",children:"Preparo:"},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:39,columnNumber:17},void 0)," ",b.description]},void 0,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:38,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-sm text-slate-300 mt-1",children:[v.jsxDEV("span",{className:"font-semibold text-cyan-300",children:"Concentração Final:"},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:42,columnNumber:17},void 0)," ",b.finalConcentrationMgMl.toFixed(3)," ",E.name==="Vasopressina"?"U":"mg","/ml"]},void 0,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:41,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-sm text-slate-400 mt-1 italic",children:b.useCase},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:44,columnNumber:16},void 0),v.jsxDEV("button",{onClick:()=>L(b),className:"mt-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors",children:"Aplicar esta diluição"},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:45,columnNumber:15},void 0)]},x,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:36,columnNumber:13},void 0))},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:34,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:19,columnNumber:7},void 0)},void 0,!1,{fileName:"/app/applet/components/DilutionModal.tsx",lineNumber:15,columnNumber:5},void 0):null},YE=()=>v.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:v.jsxDEV("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:12,columnNumber:9},void 0)},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:11,columnNumber:5},void 0),q_=()=>v.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 flex-shrink-0",viewBox:"0 0 20 20",fill:"currentColor",children:v.jsxDEV("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:18,columnNumber:9},void 0)},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:17,columnNumber:5},void 0),ZE=()=>v.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:v.jsxDEV("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H7zM5 6h10v10H5V6zm2 1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:24,columnNumber:9},void 0)},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:23,columnNumber:5},void 0),XE=({drug:Q,patientWeight:F})=>{const[E,L]=on.useState(Q.presentations&&Q.presentations.length===1?Q.presentations[0].concentrationMg:""),[M,b]=on.useState(Q.presentations&&Q.presentations.length===1?Q.presentations[0].volumeMl:""),[x,f]=on.useState(Q.defaultDose),[y,R]=on.useState(250),[I,A]=on.useState(!1);on.useEffect(()=>{f(Q.defaultDose),Q.presentations&&Q.presentations.length===1?(L(Q.presentations[0].concentrationMg),b(Q.presentations[0].volumeMl)):(L(""),b(""))},[Q]);const S=w=>{L(w.totalDrugMg),b(w.finalVolumeMl),Q.calculationType==="infusion"&&w.finalVolumeMl!==y&&R(w.finalVolumeMl),A(!1)},d=on.useMemo(()=>{const w=Q.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);return w&&w[2]?parseFloat(w[2]):null},[Q.doseRange]),p=on.useMemo(()=>d===null||x===""?!1:x>d,[x,d]),m=on.useMemo(()=>!F||E===""||M===""||x===""?{formula:"Aguardando dados..."}:Q.calculate({weight:F,ampuleConcentrationMg:E,ampuleVolumeMl:M,dose:x,solutionVolumeMl:y,maxTotalDoseMg:Q.maxTotalDoseMg}),[F,E,M,x,y,Q]),N=on.useMemo(()=>{if(!F||E===""||M==="")return null;const w=Q.doseRange.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)/);if(!w||!w[1]||!w[2])return null;const G=parseFloat(w[1]),$=parseFloat(w[2]),Z={weight:F,ampuleConcentrationMg:E,ampuleVolumeMl:M,solutionVolumeMl:y,maxTotalDoseMg:Q.maxTotalDoseMg},re=Q.calculate({...Z,dose:G}),te=Q.calculate({...Z,dose:$}),he=Q.calculationType==="bolus"?"bolusMl":"infusionMlH",W=Q.calculationType==="bolus"?"ml":"ml/h",ve=re[he],Ae=te[he];if(!ve||!Ae)return null;const k=re.cappedResultMl??ve,J=te.cappedResultMl??Ae;return`${k} - ${J} ${W}`},[F,E,M,y,Q]),_=()=>{const w=Q.calculationType==="bolus",G=w?"bolusMl":"infusionMlH",$=m.cappedResultMl??m[G],Z=w?"ml":"ml/h",re=w?"Volume a ser administrado":"Velocidade de Infusão";return v.jsxDEV(v.Fragment,{children:[m.maxDoseWarning&&w&&v.jsxDEV("div",{className:"text-sm text-red-400 flex items-start gap-2 p-2 rounded-md bg-red-500/10 border border-red-500/30",children:[v.jsxDEV(q_,{},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:139,columnNumber:21},void 0),v.jsxDEV("div",{children:[v.jsxDEV("p",{className:"font-semibold",children:"Dose Máxima Excedida"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:141,columnNumber:25},void 0),v.jsxDEV("p",{children:m.maxDoseWarning},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:142,columnNumber:25},void 0),v.jsxDEV("p",{className:"text-xs",children:"O volume foi ajustado para a dose máxima."},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:143,columnNumber:25},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:140,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:138,columnNumber:17},void 0),v.jsxDEV("div",{className:"bg-cyan-900/50 p-4 rounded-md text-center",children:[v.jsxDEV("p",{className:"text-sm text-cyan-200",children:re},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:148,columnNumber:17},void 0),v.jsxDEV("p",{className:"text-3xl font-bold text-white tracking-tight",children:[$??"--"," ",v.jsxDEV("span",{className:"text-xl",children:Z},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:150,columnNumber:43},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:149,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:147,columnNumber:13},void 0),N&&v.jsxDEV("div",{className:"text-center text-xs text-slate-400 pt-1",children:[v.jsxDEV("p",{className:"font-semibold",children:"Faixa de dose recomendada:"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:155,columnNumber:21},void 0),v.jsxDEV("p",{children:N},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:156,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:154,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:136,columnNumber:9},void 0)};return v.jsxDEV("div",{className:"bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-1 hover:ring-slate-700",children:[v.jsxDEV("div",{className:"p-4 border-b border-slate-700",children:[v.jsxDEV("h3",{className:"text-xl font-bold text-slate-100",children:Q.name},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:166,columnNumber:9},void 0),v.jsxDEV("p",{className:"text-sm text-slate-400",children:Q.description},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:167,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:165,columnNumber:7},void 0),v.jsxDEV("div",{className:"p-4 space-y-4 flex-grow",children:[v.jsxDEV("div",{children:[v.jsxDEV("div",{className:"flex justify-between items-center mb-1",children:[v.jsxDEV("label",{className:"text-sm font-medium text-slate-300",children:Q.calculationType==="infusion"?"Concentração da Solução Final":"Concentração da Ampola"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:173,columnNumber:13},void 0),Q.dilutions&&Q.dilutions.length>0&&v.jsxDEV("button",{onClick:()=>A(!0),className:"p-1 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors",title:"Ver diluições comuns",children:v.jsxDEV(ZE,{},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:182,columnNumber:21},void 0)},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:177,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:172,columnNumber:11},void 0),v.jsxDEV("div",{className:"grid grid-cols-2 gap-x-2",children:[v.jsxDEV("div",{className:"relative",children:[v.jsxDEV("input",{type:"number",value:E,onChange:w=>L(w.target.value===""?"":parseFloat(w.target.value)),placeholder:"Valor",className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:188,columnNumber:15},void 0),v.jsxDEV("span",{className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",children:Q.name==="Vasopressina"?"U":"mg"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:195,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:187,columnNumber:13},void 0),v.jsxDEV("div",{className:"relative",children:[v.jsxDEV("input",{type:"number",value:M,onChange:w=>b(w.target.value===""?"":parseFloat(w.target.value)),placeholder:"Valor",className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:200,columnNumber:15},void 0),v.jsxDEV("span",{className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",children:"ml"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:207,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:199,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:186,columnNumber:11},void 0),Q.presentations&&Q.presentations.length>0&&v.jsxDEV("div",{className:"mt-2",children:v.jsxDEV("div",{className:"flex flex-wrap gap-2 items-center",children:[v.jsxDEV("span",{className:"text-xs text-slate-400",children:"Padrões:"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:213,columnNumber:21},void 0),Q.presentations.map(w=>v.jsxDEV("button",{onClick:()=>{L(w.concentrationMg),b(w.volumeMl)},className:"text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors text-slate-300",title:`Definir concentração para ${w.concentrationMg}${Q.name==="Vasopressina"?"U":"mg"} / ${w.volumeMl}ml`,children:w.label},w.label,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:215,columnNumber:25},void 0))]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:212,columnNumber:17},void 0)},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:211,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:171,columnNumber:9},void 0),v.jsxDEV("div",{children:[v.jsxDEV("label",{className:"text-sm font-medium text-slate-300 block mb-1",children:["Dose (",Q.unit,")",v.jsxDEV("span",{className:"text-xs text-slate-400 ml-2",children:["(",Q.doseRange,")"]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:235,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:233,columnNumber:13},void 0),v.jsxDEV("input",{type:"number",step:Q.unit==="mcg/kg/min"||Q.unit==="U/min"?"0.01":"0.1",value:x,onChange:w=>f(w.target.value===""?"":parseFloat(w.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:237,columnNumber:13},void 0),p&&v.jsxDEV("div",{className:"mt-2 text-sm text-yellow-400 flex items-center gap-2 p-2 rounded-md bg-yellow-500/10 border border-yellow-500/30",children:[v.jsxDEV(q_,{},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:246,columnNumber:21},void 0),v.jsxDEV("span",{children:"A dose inserida está acima da faixa recomendada."},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:247,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:245,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:232,columnNumber:9},void 0),Q.calculationType==="infusion"&&v.jsxDEV("div",{children:[v.jsxDEV("label",{className:"text-sm font-medium text-slate-300 block mb-1",children:"Volume da Solução (ml)"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:254,columnNumber:17},void 0),v.jsxDEV("input",{type:"number",value:y,onChange:w=>R(parseFloat(w.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:255,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:253,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:170,columnNumber:7},void 0),v.jsxDEV("div",{className:"p-4 bg-slate-800/50 space-y-3",children:[_(),v.jsxDEV("div",{className:"text-xs text-slate-500 text-center italic h-4",children:m.formula},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:267,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:265,columnNumber:7},void 0),v.jsxDEV("div",{className:"px-4 py-2 bg-slate-900/50 text-slate-400 text-xs flex items-start space-x-2",children:[v.jsxDEV(YE,{},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:272,columnNumber:9},void 0),v.jsxDEV("span",{children:Q.notes},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:273,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:271,columnNumber:7},void 0),Q.dilutions&&v.jsxDEV(qE,{isOpen:I,onClose:()=>A(!1),drug:Q,onApply:S},void 0,!1,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:276,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/DrugCard.tsx",lineNumber:164,columnNumber:5},void 0)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=Q=>Q==null?void 0:Q.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $E(Q,F,E=[]){if(F==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:QE(Q),size:24,node:F,...E.length>0?{aliases:E}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Q=>{let F="",E=!1;for(const L of Q){if(L==="-"||L==="_"||L<=" "){E=F.length>0;continue}F.length===0?F+=L.toLowerCase():F+=E?L.toUpperCase():L,E=!1}return F};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Q=>{const F=PE(Q);return F.charAt(0).toUpperCase()+F.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=(...Q)=>Q.filter((F,E,L)=>!!F&&F.trim()!==""&&L.indexOf(F)===E).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function d0(Q){return Q!=null}function JE(Q,F={}){var S,d;const E=F.attributeNames??{},L=p=>E[p]??p,M=Q.size??Q.width??wi.width,b=Q.size??Q.height??wi.height,x=((S=Q.aliases)==null?void 0:S.filter(p=>typeof p=="string"&&p.trim()!=="").map(p=>`lucide-${p}`))??[],f=[...Q.name?[`lucide-${Q.name}`]:[],...x],y=((d=F.className)==null?void 0:d.split(" ").filter(Boolean))??[],R=F.includeDefaultClasses===!1?m0(...y):m0("lucide",...f,...y),I=F.absoluteStrokeWidth?Number(F.strokeWidth??wi["stroke-width"])*Number(Q.size??Q.width??wi.width)/Number(F.size??F.width??wi.width):F.strokeWidth??wi["stroke-width"];return["svg",{...Object.entries(wi).reduce((p,[m,N])=>(p[L(m)]=N,p),{}),..."color"in F&&F.color&&{[L("stroke")]:F.color},..."size"in F&&d0(F.size)&&{[L("width")]:F.size,[L("height")]:F.size},..."width"in F&&d0(F.width)&&{[L("width")]:F.width},..."height"in F&&d0(F.height)&&{[L("height")]:F.height},[L("stroke-width")]:I,...R&&{[L("class")]:R},[L("viewBox")]:`0 0 ${M} ${b}`,...F.hasA11yProp===!1?{[L("aria-hidden")]:"true"}:{},..."attributes"in F&&F.attributes},Q.node.map(p=>{const[m,N,_]=p,w=F.nonScalingStroke?{[L("vector-effect")]:"non-scaling-stroke",...N}:N;return _?[m,w,_]:[m,w]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function WE(Q,F={}){return JE(Q,{...F,attributeNames:{...F.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Q=>{for(const F in Q)if(F.startsWith("aria-")||F==="role"||F==="title")return!0;return!1},e4=on.createContext({}),n4=()=>on.useContext(e4),t4=on.forwardRef(({color:Q,size:F,width:E,height:L,strokeWidth:M,absoluteStrokeWidth:b,nonScalingStroke:x,className:f="",children:y,iconNode:R=[],icon:I={node:R,aliases:[],size:24},...A},S)=>{const{size:d=24,strokeWidth:p=2,absoluteStrokeWidth:m=!1,nonScalingStroke:N=!1,color:_="currentColor",className:w=""}=n4()??{},G=!!y||KE(A),[$,Z,re=[]]=WE(I,{color:Q??_,width:E??F??d,height:L??F??d,strokeWidth:M??p,absoluteStrokeWidth:b??m,nonScalingStroke:x??N,className:m0(w,f),hasA11yProp:G,attributes:A});return on.createElement($,{ref:S,...Z},[...re.map(([te,he])=>on.createElement(te,he)),...Array.isArray(y)?y:[y]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Hn(Q,F=[],E=[]){const L=typeof Q=="string"?$E(Q,F,E):Q,M=on.forwardRef(({className:b,...x},f)=>on.createElement(t4,{ref:f,icon:L,className:b,...x}));return L.name&&(M.displayName=FE(L.name)),M}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Q_.node;const a4=Hn(Q_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_={name:"archive",size:24,node:[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]};$_.node;const P_=Hn($_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};F_.node;const Nu=Hn(F_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};J_.node;const Y_=Hn(J_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};W_.node;const Si=Hn(W_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};K_.node;const l4=Hn(K_);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"file-spreadsheet",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]};eN.node;const o4=Hn(eN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};nN.node;const i4=Hn(nN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};tN.node;const h0=Hn(tN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};aN.node;const s4=Hn(aN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};lN.node;const oN=Hn(lN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};iN.node;const r4=Hn(iN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};sN.node;const u4=Hn(sN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN={name:"share-2",size:24,node:[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]};rN.node;const c4=Hn(rN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};uN.node;const b0=Hn(uN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};cN.node;const f0=Hn(cN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN={name:"square-plus",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-square"]};dN.node;const d4=Hn(dN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};fN.node;const f4=Hn(fN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};pN.node;const p4=Hn(pN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN={name:"wifi-off",size:24,node:[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};mN.node;const hN=Hn(mN);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};gN.node;const v0=Hn(gN),m4=`name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install


      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`,h4=`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`,g4=`import React, { useState, useMemo } from 'react';
import { DRUG_CATEGORIES } from './constants';
import DrugCard from './components/DrugCard';
import ExportModal from './components/ExportModal';
import GithubGuideModal from './components/GithubGuideModal';
import PWAInstallButton from './components/PWAInstallButton';
import OfflineIndicator from './components/OfflineIndicator';
import { 
  Activity, 
  Download, 
  FolderGit2, 
  Search, 
  RotateCcw, 
  WifiOff, 
  ShieldCheck, 
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  const [weight, setWeight] = useState<number>(70);
  const [activeCategory, setActiveCategory] = useState<string>(DRUG_CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [resetKey, setResetKey] = useState<number>(0);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState<boolean>(false);

  // Filter drugs based on category OR global search query
  const displayedDrugs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return DRUG_CATEGORIES.find(cat => cat.name === activeCategory)?.drugs || [];
    }

    // When searching, look across ALL categories
    const allDrugs = DRUG_CATEGORIES.flatMap(cat => 
      cat.drugs.map(drug => ({ ...drug, categoryName: cat.name }))
    );

    return allDrugs.filter(drug => 
      drug.name.toLowerCase().includes(query) ||
      drug.description.toLowerCase().includes(query) ||
      drug.categoryName.toLowerCase().includes(query) ||
      drug.notes.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setWeight(70);
    setSearchQuery('');
    setActiveCategory(DRUG_CATEGORIES[0].name);
    setResetKey(prevKey => prevKey + 1);
  };

  const presetWeights = [50, 60, 70, 80, 90, 100];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-xl text-cyan-400 flex items-center justify-center">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Calculadora de Doses de Emergência
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-full">
                  <WifiOff className="w-3 h-3" /> 100% Offline (Sem APIs)
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400">
                  Cálculo local direto no navegador
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: PWA Install, Export & GitHub */}
          <div className="flex items-center gap-2">
            <PWAInstallButton />
            <button
              onClick={() => setIsExportOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-sm"
              title="Exportar dados para JSON ou CSV"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Exportar Dados</span>
            </button>
            <button
              onClick={() => setIsGithubGuideOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
              title="Ver comandos para exportar para o GitHub"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Como subir no GitHub</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-6 flex-grow space-y-6">
        {/* Patient Weight & Quick Search Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Weight Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="weight" className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5">
                Peso do Paciente (kg)
              </label>
              <span className="text-xs text-slate-400">Todos os cálculos ajustam-se instantaneamente</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative flex-grow">
                <input
                  id="weight"
                  type="number"
                  min="1"
                  max="300"
                  step="0.5"
                  value={weight || ''}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  placeholder="Ex: 70"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg pointer-events-none">
                  kg
                </span>
              </div>
              <button
                onClick={handleReset}
                className="px-3 py-3 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Redefinir peso e campos"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Resetar</span>
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium">Pesos frequentes:</span>
              {presetWeights.map((pw) => (
                <button
                  key={pw}
                  onClick={() => setWeight(pw)}
                  className={\`px-3 py-1 font-semibold rounded-md transition-all \${
                    weight === pw
                      ? 'bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }\`}
                >
                  {pw} kg
                </button>
              ))}
            </div>
          </div>

          {/* Search Box (4 cols) */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md flex flex-col justify-between">
            <div>
              <label htmlFor="search" className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
                <Search className="w-4 h-4 text-cyan-400" />
                Busca Rápida de Medicamentos
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ex: Noradrenalina, Fentanil..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              {searchQuery ? \`Filtrando pelo termo "\${searchQuery}" em todas as categorias\` : 'Digite para pesquisar em todo o catálogo de emergência'}
            </p>
          </div>
        </div>

        {/* Category Navigation (only visible when not actively searching) */}
        {!searchQuery ? (
          <div className="border-b border-slate-700 overflow-x-auto pb-1 flex gap-2">
            {DRUG_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={\`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap flex items-center gap-2 border-b-2 \${
                    isActive
                      ? 'bg-slate-800 text-cyan-400 border-cyan-400 shadow-sm'
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40'
                  }\`}
                >
                  <span>{category.name}</span>
                  <span className={\`text-[10px] px-1.5 py-0.5 rounded-full \${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700 text-slate-400'
                  }\`}>
                    {category.drugs.length}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 p-3 rounded-lg text-sm">
            <span className="text-slate-300">
              Encontrados: <strong className="text-cyan-400">{displayedDrugs.length}</strong> medicamento(s) para "<strong>{searchQuery}</strong>"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-cyan-400 hover:underline"
            >
              Voltar para visão por categorias
            </button>
          </div>
        )}

        {/* Drug Cards Grid */}
        <div key={resetKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedDrugs.length > 0 ? (
            displayedDrugs.map((drug) => (
              <DrugCard key={drug.name} drug={drug} patientWeight={weight} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 bg-slate-800/40 rounded-xl border border-slate-700/60">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-base font-semibold text-slate-200">Nenhum medicamento encontrado para "{searchQuery}".</p>
              <p className="text-xs text-slate-400 mt-1">Tente outro nome ou limpe a busca para navegar pelas categorias.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-md"
              >
                Limpar Busca
              </button>
            </div>
          )}
        </div>

        {/* Offline & GitHub Banner Callout */}
        <section className="bg-gradient-to-r from-slate-800 via-slate-800 to-indigo-950/40 border border-slate-700 rounded-xl p-5 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm md:text-base font-bold text-white">
                  Pronto para exportar e rodar sem nenhuma dependência de API
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Este projeto foi desenvolvido como aplicação 100% estática (React + Vite + Tailwind CSS). Todos os cálculos de doses, apresentações de ampolas e velocidades de bomba de infusão funcionam offline diretamente na máquina do usuário.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setIsExportOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Exportar JSON / CSV
              </button>
              <button
                onClick={() => setIsGithubGuideOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors shadow-md"
              >
                <FolderGit2 className="w-4 h-4" />
                Comandos Git Passo a Passo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/90 py-6 text-slate-400 text-xs">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <p className="text-slate-300 font-semibold">Calculadora de Doses de Emergência & UTI</p>
            <p className="text-slate-500 mt-0.5">
              Ferramenta auxiliar de cálculo clínico. Não substitui o julgamento profissional e protocolos institucionais.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>• 100% Client-side</span>
            <span>• Zero chamadas de API</span>
            <span>• Compatível com GitHub Pages</span>
          </div>
        </div>
      </footer>

      {/* Modals & PWA Offline Indicator */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
      <GithubGuideModal isOpen={isGithubGuideOpen} onClose={() => setIsGithubGuideOpen(false)} />
      <OfflineIndicator />
    </div>
  );
}`,b4=`# 🚑 Calculadora de Doses de Emergência & UTI

Uma aplicação web clínica, rápida e intuitiva para cálculo de doses, volumes de ampolas e velocidades de infusão (bolus e bombas contínuas) para situações de emergência, intubação e terapia intensiva.

---

## ⚡ 100% PWA (Progressive Web App) & Offline

> **Sim! Esta aplicação é um PWA completo.**
> - **Instalável como Aplicativo Nativo:** Pode ser instalado no Android (via Chrome), no iOS (via Safari "Adicionar à Tela de Início") ou no Windows/Mac/Linux (via Chrome/Edge).
> - **Funciona 100% Offline:** Utiliza Service Worker (\`workbox\`) para salvar todo o código, fontes e imagens em cache local. Funciona mesmo sem nenhuma conexão à internet.
> - **Zero dependências de backend ou APIs externas:** todas as fórmulas matemáticas farmacológicas são calculadas localmente no navegador (client-side) pelo React/TypeScript.
> - **Sem custos de hospedagem:** por ser estática, pode ser hospedada gratuitamente no GitHub Pages, Vercel, Netlify, Cloudflare Pages ou aberta localmente.


---

## 🚀 Como subir para o seu repositório no GitHub

Siga os passos abaixo no seu computador com Git e Node.js instalados:

### 1. Crie um novo repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (ex: \`calculadora-emergencia\`).
3. Deixe o repositório como **Público** (ou Privado, se preferir).
4. **Não** marque "Add a README file" (já temos um completo aqui).
5. Clique em **Create repository**.

### 2. Inicialize e envie os arquivos pelo terminal
No diretório onde estão os arquivos deste projeto, execute:

\`\`\`bash
# 1. Inicialize o repositório git local (se ainda não tiver iniciado)
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: Calculadora de doses de emergência sem dependência de APIs"

# 4. Renomeie a branch principal para main
git branch -M main

# 5. Conecte ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/SEU-USUARIO/calculadora-emergencia.git

# 6. Envie o código
git push -u origin main
\`\`\`

---

## 🌐 Como publicar gratuitamente no GitHub Pages (com 1 clique)

Este repositório já inclui o arquivo \`.github/workflows/deploy.yml\` pré-configurado para publicação automática!

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment > Source**, selecione:
   - **GitHub Actions**
4. Pronto! O GitHub executará o build automaticamente e fornecerá um link público no formato:
   \`https://SEU-USUARIO.github.io/calculadora-emergencia/\`

Qualquer nova alteração enviada com \`git push\` atualizará o site automaticamente!

---

## 💻 Como rodar o projeto localmente no seu computador

Requisitos: [Node.js](https://nodejs.org/) (versão 18+) instalado.

\`\`\`bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev
\`\`\`

Abra no navegador em: \`http://localhost:3000\` ou no link indicado no terminal.

Para gerar os arquivos prontos para produção (pasta \`dist/\`):
\`\`\`bash
npm run build
\`\`\`
A pasta gerada \`dist/\` contém HTML, CSS e JavaScript estáticos puros que rodam em qualquer servidor web ou até diretamente em pendrive.

---

## 💊 Como personalizar ou adicionar novos medicamentos

Todos os medicamentos, doses de referência, ampolas e diluições estão organizados de forma limpa em:
- **\`constants.ts\`**

Para adicionar um medicamento novo, basta incluir um novo objeto na categoria desejada com:
- \`name\`: Nome do fármaco (ex: "Amiodarona")
- \`calculationType\`: \`'bolus'\` ou \`'infusion'\`
- \`unit\`: Unidade da dose (ex: \`'mg/kg'\`, \`'mcg/kg/min'\`, \`'mg/kg/h'\`, \`'U/min'\`)
- \`defaultDose\` e \`doseRange\`: Valores recomendados
- \`presentations\`: Concentrações comerciais das ampolas
- \`dilutions\`: Protocolos de diluição recomendados em UTI/sala de emergência

---

## 🔒 Aviso Médico / Isenção de Responsabilidade

Esta aplicação foi desenvolvida como auxílio e consulta rápida para profissionais de saúde. Não substitui o julgamento clínico individual, diretrizes institucionais hospitalares e protocolos vigentes. Sempre confira o peso do paciente, concentração real da ampola disponível e contraindicações antes da administração.
`,v4=`import React from 'react';
import type { Drug, DilutionInfo } from '../types';

interface DilutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  drug: Drug;
  onApply: (dilution: DilutionInfo) => void;
}

const DilutionModal: React.FC<DilutionModalProps> = ({ isOpen, onClose, drug, onApply }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-cyan-400">Diluições Comuns para {drug.name}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          {drug.dilutions?.map((dilution, index) => (
            <div key={index} className="bg-slate-900/50 p-4 rounded-md border border-slate-700">
              <h4 className="font-semibold text-slate-100">{dilution.name}</h4>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Preparo:</span> {dilution.description}
              </p>
              <p className="text-sm text-slate-300 mt-1">
                <span className="font-semibold text-cyan-300">Concentração Final:</span> {dilution.finalConcentrationMgMl.toFixed(3)} {drug.name === 'Vasopressina' ? 'U' : 'mg'}/ml
              </p>
               <p className="text-sm text-slate-400 mt-1 italic">{dilution.useCase}</p>
              <button 
                onClick={() => onApply(dilution)}
                className="mt-3 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Aplicar esta diluição
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DilutionModal;
`,y4=`import React, { useState, useMemo, useEffect } from 'react';
import type { Drug, CalculationResult, DilutionInfo } from '../types';
import DilutionModal from './DilutionModal';

interface DrugCardProps {
  drug: Drug;
  patientWeight: number;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

const WarningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

const BeakerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H7zM5 6h10v10H5V6zm2 1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);


const DrugCard: React.FC<DrugCardProps> = ({ drug, patientWeight }) => {
  const [ampuleConcentrationMg, setAmpuleConcentrationMg] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].concentrationMg : ''
  );
  const [ampuleVolumeMl, setAmpuleVolumeMl] = useState<number | ''>(
    drug.presentations && drug.presentations.length === 1 ? drug.presentations[0].volumeMl : ''
  );
  const [dose, setDose] = useState<number | ''>(drug.defaultDose);
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(250);
  const [isDilutionModalOpen, setIsDilutionModalOpen] = useState(false);

  useEffect(() => {
    setDose(drug.defaultDose);
    if (drug.presentations && drug.presentations.length === 1) {
        setAmpuleConcentrationMg(drug.presentations[0].concentrationMg);
        setAmpuleVolumeMl(drug.presentations[0].volumeMl);
    } else {
        setAmpuleConcentrationMg('');
        setAmpuleVolumeMl('');
    }
  }, [drug]);

  const handleApplyDilution = (dilution: DilutionInfo) => {
    setAmpuleConcentrationMg(dilution.totalDrugMg);
    setAmpuleVolumeMl(dilution.finalVolumeMl);
    // For infusions, also set the solution volume if it's different from default
    if (drug.calculationType === 'infusion' && dilution.finalVolumeMl !== solutionVolumeMl) {
        setSolutionVolumeMl(dilution.finalVolumeMl);
    }
    setIsDilutionModalOpen(false);
  };

  const maxDose = useMemo(() => {
    const match = drug.doseRange.match(/(\\d+\\.?\\d*)\\s*-\\s*(\\d+\\.?\\d*)/);
    if (match && match[2]) {
      return parseFloat(match[2]);
    }
    return null;
  }, [drug.doseRange]);

  const isDoseHigh = useMemo(() => {
    if (maxDose === null || dose === '') return false;
    return dose > maxDose;
  }, [dose, maxDose]);

  const calculationResult: CalculationResult = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '' || dose === '') {
      return { formula: "Aguardando dados..." };
    }
    return drug.calculate({ 
        weight: patientWeight, 
        ampuleConcentrationMg,
        ampuleVolumeMl, 
        dose,
        solutionVolumeMl,
        maxTotalDoseMg: drug.maxTotalDoseMg
    });
  }, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, dose, solutionVolumeMl, drug]);
  
  const doseRangeCalculation = useMemo(() => {
    if (!patientWeight || ampuleConcentrationMg === '' || ampuleVolumeMl === '') {
      return null;
    }

    const match = drug.doseRange.match(/(\\d+\\.?\\d*)\\s*-\\s*(\\d+\\.?\\d*)/);
    if (!match || !match[1] || !match[2]) {
      return null;
    }

    const minDose = parseFloat(match[1]);
    const maxDose = parseFloat(match[2]);

    const commonParams = {
      weight: patientWeight,
      ampuleConcentrationMg,
      ampuleVolumeMl,
      solutionVolumeMl,
      maxTotalDoseMg: drug.maxTotalDoseMg
    }

    const minResult = drug.calculate({ ...commonParams, dose: minDose });
    const maxResult = drug.calculate({ ...commonParams, dose: maxDose });

    const resultKey = drug.calculationType === 'bolus' ? 'bolusMl' : 'infusionMlH';
    const unit = drug.calculationType === 'bolus' ? 'ml' : 'ml/h';

    const minVal = minResult[resultKey];
    const maxVal = maxResult[resultKey];
    
    if (!minVal || !maxVal) return null;

    const finalMin = minResult.cappedResultMl ?? minVal;
    const finalMax = maxResult.cappedResultMl ?? maxVal;

    return \`\${finalMin} - \${finalMax} \${unit}\`;

}, [patientWeight, ampuleConcentrationMg, ampuleVolumeMl, solutionVolumeMl, drug]);


  const renderResult = () => {
    const isBolus = drug.calculationType === 'bolus';
    const resultKey = isBolus ? 'bolusMl' : 'infusionMlH';
    const resultValue = calculationResult.cappedResultMl ?? calculationResult[resultKey];
    const unit = isBolus ? 'ml' : 'ml/h';
    const label = isBolus ? 'Volume a ser administrado' : 'Velocidade de Infusão';

    return (
        <>
            {calculationResult.maxDoseWarning && isBolus && (
                <div className="text-sm text-red-400 flex items-start gap-2 p-2 rounded-md bg-red-500/10 border border-red-500/30">
                    <WarningIcon />
                    <div>
                        <p className="font-semibold">Dose Máxima Excedida</p>
                        <p>{calculationResult.maxDoseWarning}</p>
                        <p className="text-xs">O volume foi ajustado para a dose máxima.</p>
                    </div>
                </div>
            )}
            <div className="bg-cyan-900/50 p-4 rounded-md text-center">
                <p className="text-sm text-cyan-200">{label}</p>
                <p className="text-3xl font-bold text-white tracking-tight">
                    {resultValue ?? '--'} <span className="text-xl">{unit}</span>
                </p>
            </div>
             {doseRangeCalculation && (
                <div className="text-center text-xs text-slate-400 pt-1">
                    <p className="font-semibold">Faixa de dose recomendada:</p>
                    <p>{doseRangeCalculation}</p>
                </div>
            )}
        </>
    );
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-1 hover:ring-slate-700">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-100">{drug.name}</h3>
        <p className="text-sm text-slate-400">{drug.description}</p>
      </div>

      <div className="p-4 space-y-4 flex-grow">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-slate-300">
              {drug.calculationType === 'infusion' ? 'Concentração da Solução Final' : 'Concentração da Ampola'}
            </label>
            {drug.dilutions && drug.dilutions.length > 0 && (
                <button
                    onClick={() => setIsDilutionModalOpen(true)}
                    className="p-1 rounded-full text-cyan-400 hover:bg-slate-700 transition-colors"
                    title="Ver diluições comuns"
                >
                    <BeakerIcon />
                </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="relative">
              <input
                type="number"
                value={ampuleConcentrationMg}
                onChange={(e) => setAmpuleConcentrationMg(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
                {drug.name === 'Vasopressina' ? 'U' : 'mg'}
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={ampuleVolumeMl}
                onChange={(e) => setAmpuleVolumeMl(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Valor"
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500 pr-8"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">ml</span>
            </div>
          </div>
          {drug.presentations && drug.presentations.length > 0 && (
            <div className="mt-2">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-400">Padrões:</span>
                    {drug.presentations.map((p) => (
                        <button
                            key={p.label}
                            onClick={() => {
                                setAmpuleConcentrationMg(p.concentrationMg);
                                setAmpuleVolumeMl(p.volumeMl);
                            }}
                            className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded-md transition-colors text-slate-300"
                            title={\`Definir concentração para \${p.concentrationMg}\${drug.name === 'Vasopressina' ? 'U' : 'mg'} / \${p.volumeMl}ml\`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
          )}
        </div>

        <div>
            <label className="text-sm font-medium text-slate-300 block mb-1">
                Dose ({drug.unit})
                <span className="text-xs text-slate-400 ml-2">({drug.doseRange})</span>
            </label>
            <input
              type="number"
              step={drug.unit === 'mcg/kg/min' || drug.unit === 'U/min' ? '0.01' : '0.1'}
              value={dose}
              onChange={(e) => setDose(e.target.value === '' ? '' : parseFloat(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
            />
            {isDoseHigh && (
                <div className="mt-2 text-sm text-yellow-400 flex items-center gap-2 p-2 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    <WarningIcon />
                    <span>A dose inserida está acima da faixa recomendada.</span>
                </div>
            )}
        </div>

        {drug.calculationType === 'infusion' && (
            <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">Volume da Solução (ml)</label>
                <input
                    type="number"
                    value={solutionVolumeMl}
                    onChange={(e) => setSolutionVolumeMl(parseFloat(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-md p-2 text-white focus:ring-1 focus:ring-cyan-500"
                />
            </div>
        )}
      </div>

      <div className="p-4 bg-slate-800/50 space-y-3">
        {renderResult()}
        <div className="text-xs text-slate-500 text-center italic h-4">
            {calculationResult.formula}
        </div>
      </div>
      <div className="px-4 py-2 bg-slate-900/50 text-slate-400 text-xs flex items-start space-x-2">
        <InfoIcon />
        <span>{drug.notes}</span>
      </div>
      {drug.dilutions && (
        <DilutionModal
            isOpen={isDilutionModalOpen}
            onClose={() => setIsDilutionModalOpen(false)}
            drug={drug}
            onApply={handleApplyDilution}
        />
      )}
    </div>
  );
};

export default DrugCard;
`,x4=`import React, { useState } from 'react';
import { DRUG_CATEGORIES } from '../constants';
import { Download, FileSpreadsheet, FileCode, Check, X, ShieldCheck, Archive, Loader2 } from 'lucide-react';
import { downloadProjectZip } from '../utils/projectZip';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedJson, setCopiedJson] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const totalDrugs = DRUG_CATEGORIES.reduce((acc, cat) => acc + cat.drugs.length, 0);

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadProjectZip();
    } catch (err) {
      console.error('Falha ao gerar ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  // Generate clean exportable JSON (strip functions)
  const getSerializableData = () => {
    return DRUG_CATEGORIES.map(category => ({
      category: category.name,
      drugs: category.drugs.map(drug => ({
        name: drug.name,
        description: drug.description,
        calculationType: drug.calculationType,
        unit: drug.unit,
        defaultDose: drug.defaultDose,
        doseRange: drug.doseRange,
        notes: drug.notes,
        maxTotalDoseMg: drug.maxTotalDoseMg,
        presentations: drug.presentations,
        dilutions: drug.dilutions,
      }))
    }));
  };

  const handleDownloadJSON = () => {
    const data = getSerializableData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadCSV = () => {
    const headers = [
      'Categoria',
      'Medicamento',
      'Tipo de Cálculo',
      'Unidade',
      'Dose Padrão',
      'Faixa de Dose',
      'Dose Máxima (mg)',
      'Apresentações Comerciais',
      'Diluições Recomendadas',
      'Observações Clínicas'
    ];

    const rows: string[][] = [];

    DRUG_CATEGORIES.forEach(cat => {
      cat.drugs.forEach(d => {
        const presentations = (d.presentations || [])
          .map(p => \`\${p.label} (\${p.concentrationMg}mg/\${p.volumeMl}ml)\`)
          .join(' | ');

        const dilutions = (d.dilutions || [])
          .map(dil => \`\${dil.name}: \${dil.description} [\${dil.useCase}]\`)
          .join(' | ');

        rows.push([
          \`"\${cat.name.replace(/"/g, '""')}"\`,
          \`"\${d.name.replace(/"/g, '""')}"\`,
          \`"\${d.calculationType.replace(/"/g, '""')}"\`,
          \`"\${d.unit.replace(/"/g, '""')}"\`,
          \`"\${d.defaultDose}"\`,
          \`"\${d.doseRange.replace(/"/g, '""')}"\`,
          \`"\${d.maxTotalDoseMg ?? ''}"\`,
          \`"\${presentations.replace(/"/g, '""')}"\`,
          \`"\${dilutions.replace(/"/g, '""')}"\`,
          \`"\${d.notes.replace(/"/g, '""')}"\`
        ]);
      });
    });

    const csvContent = '\\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medicamentos-emergencia.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = () => {
    const data = getSerializableData();
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Exportar Dados Clínicos</h2>
              <p className="text-xs text-slate-400">Total de {totalDrugs} medicamentos em {DRUG_CATEGORIES.length} categorias</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-start gap-3 text-xs text-emerald-200">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold text-emerald-300">100% Livre de Dependências e APIs</strong>
            Todos esses dados residem estaticamente no código. Eles podem ser portados para qualquer sistema, aplicativo mobile, banco de dados ou planilha sem necessidade de conexão com servidores.
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-700/60 rounded-xl space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0">
                <Archive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Baixar Projeto Completo (.ZIP)</h3>
                <p className="text-xs text-slate-300">
                  Baixe todos os arquivos prontos para subir ao GitHub (código React, Tailwind, GitHub Actions, README e fórmulas).
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Empacotando projeto...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Código-Fonte Completo (.zip)</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
                <FileCode className="w-4 h-4" /> Formato JSON
              </div>
              <p className="text-xs text-slate-400">
                Ideal para desenvolvedores, APIs locais, banco de dados NoSQL ou integração com novos softwares.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadJSON}
                className="flex-1 flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold px-3 py-2 rounded-md text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Baixar .json
              </button>
              <button
                onClick={handleCopyJSON}
                className="flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-md text-xs transition-colors"
                title="Copiar JSON"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1">
                <FileSpreadsheet className="w-4 h-4" /> Formato CSV / Excel
              </div>
              <p className="text-xs text-slate-400">
                Abre no Microsoft Excel, Google Planilhas ou LibreOffice com todas as colunas de dosagens e diluições.
              </p>
            </div>
            <button
              onClick={handleDownloadCSV}
              className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-md text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Baixar .csv (Planilha)
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
          <p className="font-semibold text-slate-300 mb-1">Onde esses dados estão no repositório GitHub?</p>
          <p>
            No repositório que você clonar ou subir, o arquivo principal com todos os medicamentos, doses e fórmulas é o <code className="text-cyan-300">constants.ts</code>. Para adicionar uma droga nova, basta adicioná-la nesse arquivo.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
`,_4=`import React, { useState } from 'react';
import { GitBranch, Copy, Check, X, Globe, Terminal, ShieldCheck, Sparkles, FolderGit2, Download, Archive, Loader2, ExternalLink } from 'lucide-react';
import { downloadProjectZip } from '../utils/projectZip';

interface GithubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubGuideModal: React.FC<GithubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadProjectZip();
    } catch (err) {
      console.error('Falha ao gerar ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const gitSteps = [
    {
      title: '1. Iniciar o Git no projeto',
      cmd: 'git init',
      desc: 'Inicializa o controle de versão na pasta do projeto.'
    },
    {
      title: '2. Adicionar todos os arquivos',
      cmd: 'git add .',
      desc: 'Prepara todos os componentes, constantes médicas e configurações.'
    },
    {
      title: '3. Fazer o primeiro commit',
      cmd: 'git commit -m "feat: Calculadora de doses de emergência (100% offline)"',
      desc: 'Salva o histórico da versão inicial.'
    },
    {
      title: '4. Definir a branch principal como main',
      cmd: 'git branch -M main',
      desc: 'Garante o padrão moderno do GitHub.'
    },
    {
      title: '5. Conectar com o seu repositório no GitHub',
      cmd: 'git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git',
      desc: 'Substitua "SEU-USUARIO/SEU-REPOSITORIO" pelo link criado em github.com/new.'
    },
    {
      title: '6. Enviar o código para o GitHub',
      cmd: 'git push -u origin main',
      desc: 'Sobe todos os arquivos para a nuvem.'
    }
  ];

  const allCommands = \`# Passo a passo completo para exportar para o GitHub:
git init
git add .
git commit -m "feat: Calculadora de doses de emergência (100% offline)"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main\`;

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (typeof index === 'number') {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-2xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Como Exportar para o GitHub</h2>
              <p className="text-xs text-slate-400">Guia de publicação autônoma & sem necessidade de API</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resposta direta para a dúvida do usuário */}
        <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Funciona independentemente de API? SIM! 100% autônomo.</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Esta calculadora é uma aplicação <strong>Client-Side pura (React + Vite + Tailwind)</strong>. Todos os cálculos matemáticos clínicos (bolus em mg e mcg, bombas de infusão em mcg/kg/min, mg/kg/h, unidades de vasopressina e limites de segurança) rodam diretamente dentro do JavaScript do navegador do usuário.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-emerald-300">
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Zero chamadas de API</span>
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Zero custos de servidor</span>
            <span className="px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60">✓ Funciona offline no celular ou PC</span>
          </div>
        </div>

        {/* Opção 1: Download direto do ZIP */}
        <div className="bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-700/60 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Archive className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Opção 1: Exportar direto por aqui (Download .ZIP)</h3>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">
              Mais Simples
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Você pode baixar todos os arquivos organizados neste exato momento. Depois, basta criar um repositório vazio no GitHub e arrastar os arquivos na opção <strong>"Upload files"</strong> do site.
          </p>
          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Empacotando projeto...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Projeto Completo para o GitHub (.ZIP)</span>
              </>
            )}
          </button>
        </div>

        {/* Opção 2: Passos do terminal */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Opção 2: Subir via Terminal com Git
            </h3>
            <button
              onClick={() => copyToClipboard(allCommands)}
              className="flex items-center gap-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-cyan-300 px-2.5 py-1 rounded transition-colors"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedAll ? 'Copiado!' : 'Copiar todos'}
            </button>
          </div>

          <div className="space-y-2.5">
            {gitSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">{step.title}</span>
                  <button
                    onClick={() => copyToClipboard(step.cmd, idx)}
                    className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Copiar comando"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="text-xs bg-black/60 p-2 rounded text-cyan-300 font-mono overflow-x-auto selection:bg-cyan-500 selection:text-slate-900">
                  {step.cmd}
                </pre>
                <p className="text-[11px] text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Como ativar GitHub Pages */}
        <div className="p-4 bg-slate-900 border border-slate-700/80 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <Globe className="w-4 h-4" />
            <span>Como colocar online de graça no GitHub Pages:</span>
          </div>
          <ol className="text-xs text-slate-300 list-decimal list-inside space-y-1">
            <li>No GitHub, abra a aba <strong>Settings</strong> do seu repositório.</li>
            <li>No menu lateral, clique em <strong>Pages</strong>.</li>
            <li>Em <em>Build and deployment &gt; Source</em>, selecione <strong>GitHub Actions</strong>.</li>
            <li>O arquivo <code className="text-cyan-300">.github/workflows/deploy.yml</code> (já incluído no projeto) fará o build e criará o seu link web público gratuito em segundos!</li>
          </ol>
        </div>

        {/* Rodar localmente */}
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
          <span>Para rodar no seu computador: <code className="text-cyan-300">npm install</code> e depois <code className="text-cyan-300">npm run dev</code></span>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubGuideModal;
`,N4=`import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-amber-400/40 animate-bounce">
      <WifiOff className="w-4 h-4 text-amber-200" />
      <span>Modo Offline Ativo — Todos os cálculos continuam funcionando localmente.</span>
    </div>
  );
};

export default OfflineIndicator;
`,w4=`import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check, Share2, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return (
      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg">
        <Check className="w-3.5 h-3.5" /> App Instalado
      </span>
    );
  }

  // Chromium / Android / Desktop flow with active deferredPrompt
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Instalar App</span>
      </button>
    );
  }

  // Fallback / iOS or desktop browser where beforeinstallprompt hasn't fired yet or in iframe
  return (
    <>
      <button
        onClick={() => setShowGuide(true)}
        className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md transition-colors"
        title="Instalar este app no seu celular ou computador (PWA)"
      >
        <Smartphone className="w-4 h-4" />
        <span>Instalar App</span>
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instalar como Aplicativo (PWA)</h3>
                  <p className="text-xs text-slate-400">Funciona 100% offline no celular e no computador</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {isIOS ? (
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                  <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                    <Share2 className="w-4 h-4" /> No iPhone ou iPad (Safari):
                  </h4>
                  <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                    <li>Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima) na barra do Safari.</li>
                    <li>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
                    <li>Confirme tocando em <strong>"Adicionar"</strong> no canto superior direito.</li>
                  </ol>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <Smartphone className="w-4 h-4" /> No Android (Chrome / Edge):
                    </h4>
                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1">
                      <li>Toque no menu de <strong>3 pontinhos (⋮)</strong> no canto superior do navegador.</li>
                      <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                      <li>Pronto! Ele abrirá em tela cheia como um app nativo.</li>
                    </ol>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
                    <h4 className="font-semibold text-cyan-300 flex items-center gap-1.5 text-sm">
                      <PlusSquare className="w-4 h-4" /> No Computador (Chrome / Edge / Brave):
                    </h4>
                    <p className="leading-relaxed">
                      Clique no ícone de <strong>instalar</strong> (um monitor com seta para baixo) na barra de endereços do navegador à direita da URL.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg text-emerald-300 flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Vantagem do PWA:</strong> O app é salvo na memória do seu dispositivo e funciona mesmo no subsolo do hospital sem sinal de rede!
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="mt-2 w-full rounded-lg bg-slate-700 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
`,S4=`import { DrugCategory, CalculationParams, CalculationResult, Drug } from './types';

const calculateBolus = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
  if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
    return { formula: "Preencha todos os campos." };
  }
  const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
  if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
  const totalDoseMg = dose * weight;
  const bolusMl = totalDoseMg / drugConcentrationMgMl;

  const result: CalculationResult = {
    bolusMl: bolusMl.toFixed(2),
    formula: \`(\${dose} mg/kg * \${weight} kg) / (\${ampuleConcentrationMg} mg / \${ampuleVolumeMl} ml) = \${bolusMl.toFixed(2)} ml\`,
  };

  if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
    const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
    result.cappedResultMl = cappedMl.toFixed(2);
    result.maxDoseWarning = \`Dose (\${totalDoseMg.toFixed(1)}mg) excede o máximo de \${maxTotalDoseMg}mg.\`;
  }

  return result;
};

const calculateBolusMcg = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, ampuleVolumeMl, dose, maxTotalDoseMg } = params;
    if (!weight || !ampuleConcentrationMg || !ampuleVolumeMl || !dose) {
      return { formula: "Preencha todos os campos." };
    }
    const drugConcentrationMgMl = ampuleConcentrationMg / ampuleVolumeMl;
    if (drugConcentrationMgMl === 0) return { formula: "Concentração inválida."};
    const totalDoseMcg = dose * weight;
    const totalDoseMg = totalDoseMcg / 1000;
    const bolusMl = totalDoseMg / drugConcentrationMgMl;
  
    const result: CalculationResult = {
      bolusMl: bolusMl.toFixed(2),
      formula: \`((\${dose} mcg/kg * \${weight} kg) / 1000) / (\${ampuleConcentrationMg} mg / \${ampuleVolumeMl} ml) = \${bolusMl.toFixed(2)} ml\`,
    };

    if (maxTotalDoseMg && totalDoseMg > maxTotalDoseMg) {
        const cappedMl = maxTotalDoseMg / drugConcentrationMgMl;
        result.cappedResultMl = cappedMl.toFixed(2);
        result.maxDoseWarning = \`Dose (\${totalDoseMg.toFixed(1)}mg) excede o máximo de \${maxTotalDoseMg}mg.\`;
    }

    return result;
  };

const calculateInfusion = (params: CalculationParams): CalculationResult => {
  const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
   if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
    return { formula: "Preencha todos os campos." };
  }
  
  // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
  const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
  const finalConcentrationMcgMl = finalConcentrationMgMl * 1000;
  if (finalConcentrationMcgMl === 0) return { formula: "Concentração final inválida."};


  const infusionMcgMin = dose * weight;
  const infusionMlMin = infusionMcgMin / finalConcentrationMcgMl;
  const infusionMlH = infusionMlMin * 60;
  
  return {
    infusionMlH: infusionMlH.toFixed(2),
    finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
    formula: \`Dose: \${dose} mcg/kg/min. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
  };
};

const calculateInfusionMgKgH = (params: CalculationParams): CalculationResult => {
    const { weight, ampuleConcentrationMg, dose, solutionVolumeMl = 250 } = params;
    if (!weight || !ampuleConcentrationMg || !dose || !solutionVolumeMl) {
      return { formula: "Preencha todos os campos." };
    }
    
    // Corrected logic: ampuleConcentrationMg is the TOTAL drug in the solutionVolumeMl.
    const finalConcentrationMgMl = ampuleConcentrationMg / solutionVolumeMl;
    if (finalConcentrationMgMl === 0) return { formula: "Concentração final inválida."};

    const totalDoseMgH = dose * weight;
    const infusionMlH = totalDoseMgH / finalConcentrationMgMl;
    
    return {
      infusionMlH: infusionMlH.toFixed(2),
      finalConcentrationMgMl: finalConcentrationMgMl.toFixed(2),
      formula: \`Dose: \${dose} mg/kg/h. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
    };
  };

export const DRUG_CATEGORIES: DrugCategory[] = [
  {
    name: 'Indução e Intubação',
    drugs: [
      {
        name: 'Fentanil',
        description: 'Analgésico opioide potente.',
        calculationType: 'bolus',
        unit: 'mcg/kg',
        defaultDose: 2,
        doseRange: '1 - 3 mcg/kg',
        notes: 'Administrar lentamente para evitar rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição Padrão (10 mcg/ml)',
              description: '1 ampola (500mcg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 0.5,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 0.01,
              useCase: 'Para administração em bolus fracionados e seguros.'
            }
        ],
        calculate: calculateBolusMcg,
      },
      {
        name: 'Midazolam',
        description: 'Benzodiazepínico para sedação.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 0.2,
        doseRange: '0.1 - 0.3 mg/kg',
        notes: 'Pode causar hipotensão, especialmente em idosos ou instáveis.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '5mg/5ml', concentrationMg: 5, volumeMl: 5 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
              name: 'Diluição para Bolus (1mg/ml)',
              description: '1 ampola (50mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 50,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 1,
              useCase: 'Para administração em bolus lento e seguro.'
            },
            {
                name: 'Diluição para Bolus (1.5mg/ml)',
                description: '1 ampola (15mg/3ml) + 7ml de SF 0.9%',
                totalDrugMg: 15,
                finalVolumeMl: 10,
                finalConcentrationMgMl: 1.5,
                useCase: 'Alternativa para bolus, usando ampola de 15mg.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Propofol',
        description: 'Agente hipnótico de ação curta.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 2,
        doseRange: '1.5 - 2.5 mg/kg',
        notes: 'Causa apneia e hipotensão. Geralmente não é diluído para bolus.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        calculate: calculateBolus,
      },
      {
        name: 'Cetamina',
        description: 'Anestésico dissociativo.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Ideal para pacientes instáveis hemodinamicamente. Aumenta a secreção.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
              name: 'Diluição Padrão (10mg/ml)',
              description: '1 ampola (500mg/10ml) + 40ml de SF 0.9%',
              totalDrugMg: 500,
              finalVolumeMl: 50,
              finalConcentrationMgMl: 10,
              useCase: 'Para administração em bolus e evitar flebite.'
            }
        ],
        calculate: calculateBolus,
      },
      {
        name: 'Succinilcolina',
        description: 'Bloqueador neuromuscular despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1.5,
        doseRange: '1 - 2 mg/kg',
        notes: 'Causa fasciculações. Contraindicada em hipercalemia. Geralmente não é diluída.',
        maxTotalDoseMg: 150,
        presentations: [{ label: '100mg/10ml', concentrationMg: 100, volumeMl: 10 }],
        calculate: calculateBolus,
      },
      {
        name: 'Rocurônio',
        description: 'Bloqueador neuromuscular não-despolarizante.',
        calculationType: 'bolus',
        unit: 'mg/kg',
        defaultDose: 1,
        doseRange: '0.6 - 1.2 mg/kg',
        notes: 'Dose de 1.2 mg/kg para sequência rápida. Geralmente não é diluído.',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        calculate: calculateBolus,
      },
    ],
  },
  {
    name: 'Drogas Vasoativas (DVA)',
    drugs: [
      {
        name: 'Noradrenalina',
        description: 'Vasopressor de primeira escolha no choque séptico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.1,
        doseRange: '0.01 - 3 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '4mg/4ml', concentrationMg: 4, volumeMl: 4 }],
        dilutions: [
            {
                name: 'Padrão UTI (16mg/250ml)',
                description: '4 ampolas (4mg/4ml) em 234ml de SG 5%',
                totalDrugMg: 16,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 16/250,
                useCase: 'Diluição padrão para infusão contínua em UTI.'
            },
            {
                name: 'Concentrada (32mg/250ml)',
                description: '8 ampolas (4mg/4ml) em 218ml de SG 5%',
                totalDrugMg: 32,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 32/250,
                useCase: 'Para pacientes com restrição hídrica.'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dobutamina',
        description: 'Agente inotrópico para choque cardiogênico.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Diluição: informar o total de mg adicionado na solução.',
        presentations: [{ label: '250mg/20ml', concentrationMg: 250, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '1 ampola (250mg/20ml) em 230ml de SG 5%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição comum para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Dopamina',
        description: 'Precursor da noradrenalina com efeitos dose-dependentes.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 5,
        doseRange: '2 - 20 mcg/kg/min',
        notes: 'Efeitos variam com a dose. Menos utilizada atualmente.',
        presentations: [{ label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 }],
        calculate: calculateInfusion,
      },
      {
        name: 'Vasopressina',
        description: 'Hormônio antidiurético com efeito vasopressor.',
        calculationType: 'infusion',
        unit: 'U/min',
        defaultDose: 0.03,
        doseRange: '0.01 - 0.04 U/min',
        notes: 'Dose fixa em U/min. Informar o total de Unidades (U) na solução.',
        presentations: [{ label: '20U/1ml', concentrationMg: 20, volumeMl: 1 }],
        dilutions: [
            {
                name: 'Padrão UTI (100U/100ml)',
                description: '5 ampolas (20U/1ml) em 95ml de SF 0.9%',
                totalDrugMg: 100, // Representa Unidades aqui
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1, // Representa 1 U/ml
                useCase: 'Diluição padrão para infusão contínua (1U/ml).'
            }
        ],
        calculate: (params) => {
          const { ampuleConcentrationMg, dose, solutionVolumeMl = 100 } = params;
          if (!ampuleConcentrationMg || !dose || !solutionVolumeMl) {
            return { formula: "Preencha todos os campos." };
          }
          // Para Vasopressina, 'ampuleConcentrationMg' representa o TOTAL de Unidades (U) na solução
          const totalUnitsInSolution = ampuleConcentrationMg;
          const finalConcentrationUnitsMl = totalUnitsInSolution / solutionVolumeMl;
          if (finalConcentrationUnitsMl === 0) return { formula: "Concentração inválida."};
          
          const infusionMlH = (dose / finalConcentrationUnitsMl) * 60;

          return {
            infusionMlH: infusionMlH.toFixed(2),
            finalConcentrationMgMl: finalConcentrationUnitsMl.toFixed(2),
            formula: \`Dose fixa: \${dose} U/min. Infusão: \${infusionMlH.toFixed(2)} ml/h\`,
          };
        },
      },
    ],
  },
  {
    name: 'Manutenção',
    drugs: [
      {
        name: 'Propofol (Manutenção)',
        description: 'Agente hipnótico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 4,
        doseRange: '2 - 6 mg/kg/h',
        notes: 'Monitorar triglicerídeos e risco de síndrome de infusão de propofol.',
        presentations: [{ label: '200mg/20ml', concentrationMg: 200, volumeMl: 20 }],
        dilutions: [
            {
                name: 'Uso Puro (10mg/ml)',
                description: 'Administrar a emulsão pura, sem diluição.',
                totalDrugMg: 200,
                finalVolumeMl: 20,
                finalConcentrationMgMl: 10,
                useCase: 'Prática padrão para infusão contínua de Propofol.'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
      {
        name: 'Midazolam (Manutenção)',
        description: 'Benzodiazepínico para sedação contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 1,
        doseRange: '0.5 - 2 mcg/kg/min',
        notes: 'Risco de acúmulo em pacientes com insuficiência renal ou hepática.',
        presentations: [
          { label: '15mg/3ml', concentrationMg: 15, volumeMl: 3 },
          { label: '50mg/10ml', concentrationMg: 50, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (100mg/100ml)',
                description: '2 ampolas (50mg/10ml) em 80ml de SF 0.9%',
                totalDrugMg: 100,
                finalVolumeMl: 100,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Fentanil (Manutenção)',
        description: 'Analgésico opioide para analgesia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 0.02,
        doseRange: '0.01 - 0.05 mcg/kg/min',
        notes: 'Monitorar depressão respiratória e rigidez torácica.',
        presentations: [
          { label: '250mcg/5ml', concentrationMg: 0.25, volumeMl: 5 },
          { label: '500mcg/10ml', concentrationMg: 0.5, volumeMl: 10 },
        ],
        dilutions: [
            {
                name: 'Padrão UTI (2500mcg/250ml)',
                description: '5 ampolas (500mcg/10ml) em 200ml de SF 0.9%',
                totalDrugMg: 2.5,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 0.01,
                useCase: 'Diluição padrão para infusão (10mcg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Rocurônio (Manutenção)',
        description: 'Bloqueador neuromuscular para paralisia contínua.',
        calculationType: 'infusion',
        unit: 'mcg/kg/min',
        defaultDose: 10,
        doseRange: '5 - 12 mcg/kg/min',
        notes: 'Requer monitorização da função neuromuscular (ex: TOF).',
        presentations: [{ label: '50mg/5ml', concentrationMg: 50, volumeMl: 5 }],
        dilutions: [
            {
                name: 'Padrão UTI (250mg/250ml)',
                description: '5 ampolas (50mg/5ml) em 225ml de SF 0.9%',
                totalDrugMg: 250,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 1,
                useCase: 'Diluição padrão para infusão contínua (1mg/ml).'
            }
        ],
        calculate: calculateInfusion,
      },
      {
        name: 'Cetamina (Manutenção)',
        description: 'Anestésico para analgesia/sedação contínua.',
        calculationType: 'infusion',
        unit: 'mg/kg/h',
        defaultDose: 0.5,
        doseRange: '0.2 - 1 mg/kg/h',
        notes: 'Pode causar agitação ou alucinações. Efeito broncodilatador.',
        presentations: [{ label: '500mg/10ml', concentrationMg: 500, volumeMl: 10 }],
        dilutions: [
            {
                name: 'Padrão UTI (500mg/250ml)',
                description: '1 ampola (500mg/10ml) em 240ml de SF 0.9%',
                totalDrugMg: 500,
                finalVolumeMl: 250,
                finalConcentrationMgMl: 2,
                useCase: 'Diluição padrão para infusão contínua (2mg/ml).'
            }
        ],
        calculate: calculateInfusionMgKgH,
      },
    ]
  }
];
`,E4=`import { useEffect, useState } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
`,M4=`import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect standalone mode (already installed)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);

    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
  };
}
`,D4=`@import "tailwindcss";
`,T4=`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora de Doses de Emergência</title>
    <meta name="description" content="Calculadora clínica de doses e diluições de medicamentos de emergência e UTI, 100% autônoma, PWA instalável e offline." />
    
    <!-- PWA & Mobile Web App Meta Tags -->
    <meta name="theme-color" content="#0f172a" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="DosesEmerg" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <link rel="icon" type="image/svg+xml" href="./icon.svg" />
    <link rel="icon" type="image/png" sizes="192x192" href="./pwa-192x192.png" />
    
    <!-- OpenGraph -->
    <meta property="og:title" content="Calculadora de Doses de Emergência" />
    <meta property="og:description" content="Calculadora clínica de doses e diluições de medicamentos de emergência e UTI, 100% autônoma, PWA instalável e offline." />
  </head>
  <body class="bg-slate-900 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-900 min-h-screen">
    <div id="root"></div>
    <script type="module" src="./index.tsx"><\/script>
  </body>
</html>
`,C4=`
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker safely after mount, preventing any SW error from blocking the UI
try {
  if ('serviceWorker' in navigator) {
    registerSW({ 
      immediate: true,
      onRegisterError(error) {
        console.warn('PWA service worker registration warning:', error);
      }
    });
  }
} catch (swErr) {
  console.warn('PWA service worker initialization warning:', swErr);
}

`,A4=`{
  "name": "copy3-of-calculadora-de-doses-de-emergência",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "copy3-of-calculadora-de-doses-de-emergência",
      "version": "0.0.0",
      "dependencies": {
        "@tailwindcss/vite": "^4.3.5",
        "@types/jszip": "^3.4.0",
        "jszip": "^3.10.2",
        "lucide-react": "^1.70.0",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "tailwindcss": "^4.3.5"
      },
      "devDependencies": {
        "@types/node": "^22.14.0",
        "@vitejs/plugin-react": "^5.0.0",
        "typescript": "~5.8.2",
        "vite": "^6.2.0",
        "vite-plugin-pwa": "^2.0.0"
      }
    },
    "node_modules/@apideck/better-ajv-errors": {
      "version": "0.3.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "jsonpointer": "^5.0.1",
        "leven": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "ajv": ">=8"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.13",
        "@babel/helper-compilation-targets": "^7.29.13",
        "@babel/helper-module-transforms": "^7.29.13",
        "@babel/helpers": "^7.29.13",
        "@babel/parser": "^7.29.13",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.13",
        "@babel/types": "^7.29.11",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.13",
        "@babel/types": "^7.29.11",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-member-expression-to-functions": "^7.29.7",
        "@babel/helper-optimise-call-expression": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13",
        "@babel/traverse": "^7.29.13",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.29.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "regexpu-core": "^6.5.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.6.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-plugin-utils": "^7.28.6",
        "debug": "^4.4.3",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.22.11"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-wrap-function": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.29.7",
        "@babel/helper-optimise-call-expression": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.13",
        "@babel/types": "^7.29.11"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-wrap-function": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.11"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.11"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-firefox-class-in-computed-class-key": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-class-field-initializer-scope": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-safari-rest-destructuring-rhs-array": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7",
        "@babel/plugin-transform-optional-chaining": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.13.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-property-in-object": {
      "version": "7.21.0-placeholder-for-preset-env.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-assertions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-import-attributes": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-unicode-sets-regex": {
      "version": "7.18.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.18.6",
        "@babel/helper-plugin-utils": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-generator-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-remap-async-to-generator": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-to-generator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-remap-async-to-generator": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoped-functions": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoping": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-class-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-class-static-block": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.12.0"
      }
    },
    "node_modules/@babel/plugin-transform-classes": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-globals": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7",
        "@babel/traverse": "^7.29.10"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-computed-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/template": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-destructuring": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-dotall-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-keys": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-named-capturing-groups-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-dynamic-import": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-explicit-resource-management": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-exponentiation-operator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-export-namespace-from": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-for-of": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.13"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-function-name": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-json-strings": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-logical-assignment-operators": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-member-expression-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-amd": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-systemjs": {
      "version": "7.29.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.8"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-umd": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-new-target": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-nullish-coalescing-operator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-numeric-separator": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-rest-spread": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7",
        "@babel/plugin-transform-parameters": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-super": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-replace-supers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-optional-catch-binding": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-optional-chaining": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-parameters": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-private-methods": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-private-property-in-object": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.29.7",
        "@babel/helper-create-class-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-property-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regenerator": {
      "version": "7.29.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regexp-modifiers": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-reserved-words": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-shorthand-properties": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-spread": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-sticky-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-template-literals": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typeof-symbol": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-escapes": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-property-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-sets-regex": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/preset-env": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-plugin-utils": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "@babel/plugin-bugfix-firefox-class-in-computed-class-key": "^7.29.7",
        "@babel/plugin-bugfix-safari-class-field-initializer-scope": "^7.29.7",
        "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.29.7",
        "@babel/plugin-bugfix-safari-rest-destructuring-rhs-array": "^7.29.7",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.29.7",
        "@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly": "^7.29.7",
        "@babel/plugin-proposal-private-property-in-object": "7.21.0-placeholder-for-preset-env.2",
        "@babel/plugin-syntax-import-assertions": "^7.29.7",
        "@babel/plugin-syntax-import-attributes": "^7.29.7",
        "@babel/plugin-syntax-unicode-sets-regex": "^7.18.6",
        "@babel/plugin-transform-arrow-functions": "^7.29.7",
        "@babel/plugin-transform-async-generator-functions": "^7.29.7",
        "@babel/plugin-transform-async-to-generator": "^7.29.7",
        "@babel/plugin-transform-block-scoped-functions": "^7.29.7",
        "@babel/plugin-transform-block-scoping": "^7.29.7",
        "@babel/plugin-transform-class-properties": "^7.29.7",
        "@babel/plugin-transform-class-static-block": "^7.29.7",
        "@babel/plugin-transform-classes": "^7.29.7",
        "@babel/plugin-transform-computed-properties": "^7.29.7",
        "@babel/plugin-transform-destructuring": "^7.29.7",
        "@babel/plugin-transform-dotall-regex": "^7.29.7",
        "@babel/plugin-transform-duplicate-keys": "^7.29.7",
        "@babel/plugin-transform-duplicate-named-capturing-groups-regex": "^7.29.7",
        "@babel/plugin-transform-dynamic-import": "^7.29.7",
        "@babel/plugin-transform-explicit-resource-management": "^7.29.7",
        "@babel/plugin-transform-exponentiation-operator": "^7.29.7",
        "@babel/plugin-transform-export-namespace-from": "^7.29.7",
        "@babel/plugin-transform-for-of": "^7.29.7",
        "@babel/plugin-transform-function-name": "^7.29.7",
        "@babel/plugin-transform-json-strings": "^7.29.7",
        "@babel/plugin-transform-literals": "^7.29.7",
        "@babel/plugin-transform-logical-assignment-operators": "^7.29.7",
        "@babel/plugin-transform-member-expression-literals": "^7.29.7",
        "@babel/plugin-transform-modules-amd": "^7.29.7",
        "@babel/plugin-transform-modules-commonjs": "^7.29.7",
        "@babel/plugin-transform-modules-systemjs": "^7.29.7",
        "@babel/plugin-transform-modules-umd": "^7.29.7",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.29.7",
        "@babel/plugin-transform-new-target": "^7.29.7",
        "@babel/plugin-transform-nullish-coalescing-operator": "^7.29.7",
        "@babel/plugin-transform-numeric-separator": "^7.29.7",
        "@babel/plugin-transform-object-rest-spread": "^7.29.7",
        "@babel/plugin-transform-object-super": "^7.29.7",
        "@babel/plugin-transform-optional-catch-binding": "^7.29.7",
        "@babel/plugin-transform-optional-chaining": "^7.29.7",
        "@babel/plugin-transform-parameters": "^7.29.7",
        "@babel/plugin-transform-private-methods": "^7.29.7",
        "@babel/plugin-transform-private-property-in-object": "^7.29.7",
        "@babel/plugin-transform-property-literals": "^7.29.7",
        "@babel/plugin-transform-regenerator": "^7.29.7",
        "@babel/plugin-transform-regexp-modifiers": "^7.29.7",
        "@babel/plugin-transform-reserved-words": "^7.29.7",
        "@babel/plugin-transform-shorthand-properties": "^7.29.7",
        "@babel/plugin-transform-spread": "^7.29.7",
        "@babel/plugin-transform-sticky-regex": "^7.29.7",
        "@babel/plugin-transform-template-literals": "^7.29.7",
        "@babel/plugin-transform-typeof-symbol": "^7.29.7",
        "@babel/plugin-transform-unicode-escapes": "^7.29.7",
        "@babel/plugin-transform-unicode-property-regex": "^7.29.7",
        "@babel/plugin-transform-unicode-regex": "^7.29.7",
        "@babel/plugin-transform-unicode-sets-regex": "^7.29.7",
        "@babel/preset-modules": "0.1.6-no-external-plugins",
        "babel-plugin-polyfill-corejs2": "^0.4.15",
        "babel-plugin-polyfill-corejs3": "^0.14.0",
        "babel-plugin-polyfill-regenerator": "^0.6.6",
        "core-js-compat": "^3.48.0",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-modules": {
      "version": "0.1.6-no-external-plugins",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.13",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.13",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.11",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.11",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.12",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "9.0.0",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.11",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/plugin-babel": {
      "version": "6.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.18.6",
        "@rollup/pluginutils": "^5.0.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0",
        "@types/babel__core": "^7.1.9",
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "@types/babel__core": {
          "optional": true
        },
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-node-resolve": {
      "version": "16.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rollup/pluginutils": "^5.0.1",
        "@types/resolve": "1.20.2",
        "deepmerge": "^4.2.2",
        "is-module": "^1.0.0",
        "resolve": "^1.22.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^2.78.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-replace": {
      "version": "6.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rollup/pluginutils": "^5.0.1",
        "magic-string": "^0.30.3"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/plugin-replace/node_modules/magic-string": {
      "version": "0.30.21",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/@rollup/plugin-terser": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "serialize-javascript": "^7.0.3",
        "smob": "^1.0.0",
        "terser": "^5.49.2"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "rollup": "^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.5.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.68.2",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.5",
        "jiti": "^2.7.0",
        "lightningcss": "1.33.0",
        "magic-string": "^1.1.0",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.5"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.5",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.5",
        "@tailwindcss/oxide-darwin-arm64": "4.3.5",
        "@tailwindcss/oxide-darwin-x64": "4.3.5",
        "@tailwindcss/oxide-freebsd-x64": "4.3.5",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.5",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.5",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.5",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.5",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.5",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.5",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.5",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.5"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.5",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.5",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.3",
        "@emnapi/runtime": "^1.11.3",
        "@emnapi/wasi-threads": "^1.2.3",
        "@napi-rs/wasm-runtime": "^1.2.2",
        "@tybys/wasm-util": "^0.10.3",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/core": {
      "version": "1.11.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/wasi-threads": {
      "version": "1.2.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.2",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.3",
        "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.3"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "inBundle": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/tslib": {
      "version": "2.8.1",
      "inBundle": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.3.5",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.3.5",
        "@tailwindcss/oxide": "4.3.5",
        "tailwindcss": "4.3.5"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@trickfilm400/rollup-plugin-off-main-thread": {
      "version": "3.0.0-pre1",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "ejs": "^3.1.10",
        "json5": "^2.2.3",
        "magic-string": "^0.30.21",
        "string.prototype.matchall": "^4.0.12"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@trickfilm400/rollup-plugin-off-main-thread/node_modules/magic-string": {
      "version": "0.30.21",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.10",
      "license": "MIT"
    },
    "node_modules/@types/jszip": {
      "version": "3.4.0",
      "license": "MIT",
      "dependencies": {
        "jszip": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "22.20.5",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/resolve": {
      "version": "1.20.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/trusted-types": {
      "version": "2.0.7",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.29.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-rc.3",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.19.0",
      "devOptional": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "8.20.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/async": {
      "version": "3.2.6",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs2": {
      "version": "0.4.17",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-define-polyfill-provider": "^0.6.8",
        "semver": "^6.3.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs3": {
      "version": "0.14.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.6.8",
        "core-js-compat": "^3.48.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/babel-plugin-polyfill-regenerator": {
      "version": "0.6.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.6.8"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.35",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.12",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.5",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.33",
        "caniuse-lite": "^1.0.30001819",
        "electron-to-chromium": "^1.5.464",
        "node-releases": "^2.0.60",
        "update-browserslist-db": "^1.3.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001823",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/commander": {
      "version": "2.20.3",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/common-tags": {
      "version": "1.8.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/core-js-compat": {
      "version": "3.51.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.29.3"
      },
      "engines": {
        "node": ">=6.4.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-random-string": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deepmerge": {
      "version": "4.3.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ejs": {
      "version": "3.1.10",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "jake": "^10.8.5"
      },
      "bin": {
        "ejs": "bin/cli.js"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.478",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.26.1",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract-get": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "is-callable": "^1.2.7",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-abstract-get": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "is-callable": "^1.2.7",
        "is-date-object": "^1.1.0",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.12",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.12",
        "@esbuild/android-arm": "0.25.12",
        "@esbuild/android-arm64": "0.25.12",
        "@esbuild/android-x64": "0.25.12",
        "@esbuild/darwin-arm64": "0.25.12",
        "@esbuild/darwin-x64": "0.25.12",
        "@esbuild/freebsd-arm64": "0.25.12",
        "@esbuild/freebsd-x64": "0.25.12",
        "@esbuild/linux-arm": "0.25.12",
        "@esbuild/linux-arm64": "0.25.12",
        "@esbuild/linux-ia32": "0.25.12",
        "@esbuild/linux-loong64": "0.25.12",
        "@esbuild/linux-mips64el": "0.25.12",
        "@esbuild/linux-ppc64": "0.25.12",
        "@esbuild/linux-riscv64": "0.25.12",
        "@esbuild/linux-s390x": "0.25.12",
        "@esbuild/linux-x64": "0.25.12",
        "@esbuild/netbsd-arm64": "0.25.12",
        "@esbuild/netbsd-x64": "0.25.12",
        "@esbuild/openbsd-arm64": "0.25.12",
        "@esbuild/openbsd-x64": "0.25.12",
        "@esbuild/openharmony-arm64": "0.25.12",
        "@esbuild/sunos-x64": "0.25.12",
        "@esbuild/win32-arm64": "0.25.12",
        "@esbuild/win32-ia32": "0.25.12",
        "@esbuild/win32-x64": "0.25.12"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eta": {
      "version": "4.6.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/bgub/eta?sponsor=1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.1.9",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/filelist": {
      "version": "1.0.6",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "minimatch": "^5.0.1"
      }
    },
    "node_modules/filelist/node_modules/minimatch": {
      "version": "5.1.9",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/filelist/node_modules/minimatch/node_modules/brace-expansion": {
      "version": "2.1.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/filelist/node_modules/minimatch/node_modules/brace-expansion/node_modules/balanced-match": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fs-extra": {
      "version": "9.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2",
        "hasown": "^2.0.4",
        "is-callable": "^1.2.7",
        "is-document.all": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-own-enumerable-property-symbols": {
      "version": "3.0.2",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "11.1.0",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "foreground-child": "^3.3.1",
        "jackspeak": "^4.1.1",
        "minimatch": "^10.1.1",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^2.0.0"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "license": "ISC"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/idb": {
      "version": "7.1.1",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "license": "MIT"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.18.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-document.all": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-module": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-obj": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regexp": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "4.2.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^9.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jake": {
      "version": "10.9.4",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "async": "^3.2.6",
        "filelist": "^1.0.4",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "jake": "bin/cli.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonpointer": {
      "version": "5.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.2",
      "license": "(MIT OR GPL-3.0-or-later)",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/leven": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lodash.debounce": {
      "version": "4.0.8",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.70.0",
      "license": "ISC",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/magic-string": {
      "version": "1.4.5",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.6.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.6",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.63",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "dev": true,
      "license": "BlueOak-1.0.0"
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "license": "(MIT AND Zlib)"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "2.0.2",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "11.5.3",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.32",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.20",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/pretty-bytes": {
      "version": "6.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.3.1",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.1",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.1"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regenerate": {
      "version": "1.5.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/regenerate-unicode-properties": {
      "version": "10.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "regenerate": "^1.4.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexpu-core": {
      "version": "6.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "regenerate": "^1.5.0",
        "regenerate-unicode-properties": "^10.3.0",
        "regjsgen": "^0.8.0",
        "regjsparser": "^0.14.0",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.2.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regjsgen": {
      "version": "0.8.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/regjsparser": {
      "version": "0.14.1",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "jsesc": "~3.1.0"
      },
      "bin": {
        "regjsparser": "bin/parser"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.14",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.18.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/rollup": {
      "version": "4.68.2",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.10"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.68.2",
        "@rollup/rollup-android-arm64": "4.68.2",
        "@rollup/rollup-android-x64": "4.68.2",
        "@rollup/rollup-darwin-arm64": "4.68.2",
        "@rollup/rollup-darwin-x64": "4.68.2",
        "@rollup/rollup-freebsd-arm64": "4.68.2",
        "@rollup/rollup-freebsd-x64": "4.68.2",
        "@rollup/rollup-linux-arm-gnueabihf": "4.68.2",
        "@rollup/rollup-linux-arm-musleabihf": "4.68.2",
        "@rollup/rollup-linux-arm64-gnu": "4.68.2",
        "@rollup/rollup-linux-arm64-musl": "4.68.2",
        "@rollup/rollup-linux-loong64-gnu": "4.68.2",
        "@rollup/rollup-linux-loong64-musl": "4.68.2",
        "@rollup/rollup-linux-ppc64-gnu": "4.68.2",
        "@rollup/rollup-linux-ppc64-musl": "4.68.2",
        "@rollup/rollup-linux-riscv64-gnu": "4.68.2",
        "@rollup/rollup-linux-riscv64-musl": "4.68.2",
        "@rollup/rollup-linux-s390x-gnu": "4.68.2",
        "@rollup/rollup-linux-x64-gnu": "4.68.2",
        "@rollup/rollup-linux-x64-musl": "4.68.2",
        "@rollup/rollup-openbsd-x64": "4.68.2",
        "@rollup/rollup-openharmony-arm64": "4.68.2",
        "@rollup/rollup-win32-arm64-msvc": "4.68.2",
        "@rollup/rollup-win32-ia32-msvc": "4.68.2",
        "@rollup/rollup-win32-x64-gnu": "4.68.2",
        "@rollup/rollup-win32-x64-msvc": "4.68.2",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-array-concat/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "license": "MIT"
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.2",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "7.1.4",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/smob": {
      "version": "1.6.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.8.0",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "devOptional": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.4",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.11",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "has-property-descriptors": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.10",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/stringify-object": {
      "version": "3.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "get-own-enumerable-property-symbols": "^3.0.0",
        "is-obj": "^1.0.1",
        "is-regexp": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-comments": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.5",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/temp-dir": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tempy": {
      "version": "0.6.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-stream": "^2.0.0",
        "temp-dir": "^2.0.0",
        "type-fest": "^0.16.0",
        "unique-string": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/terser": {
      "version": "5.51.2",
      "devOptional": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.15.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/type-fest": {
      "version": "0.16.0",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "possible-typed-array-names": "^1.1.0",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/unicode-canonical-property-names-ecmascript": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-value-ecmascript": {
      "version": "2.2.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-property-aliases-ecmascript": {
      "version": "2.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unique-string": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "crypto-random-string": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/upath": {
      "version": "1.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4",
        "yarn": "*"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.4",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "6.4.6",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2",
        "postcss": "^8.5.3",
        "rollup": "^4.34.9",
        "tinyglobby": "^0.2.13"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "jiti": ">=1.21.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite-plugin-pwa": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.6",
        "pretty-bytes": "^6.1.1",
        "tinyglobby": "^0.2.10",
        "workbox-build": "^7.4.1",
        "workbox-window": "^7.4.1"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "@vite-pwa/assets-generator": "^1.0.0 || ^2.0.0",
        "vite": "^3.1.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "workbox-build": "^7.4.1",
        "workbox-window": "^7.4.1"
      },
      "peerDependenciesMeta": {
        "@vite-pwa/assets-generator": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type/node_modules/isarray": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.24",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/workbox-background-sync": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "idb": "^7.0.1",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-broadcast-update": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-build": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@apideck/better-ajv-errors": "^0.3.1",
        "@babel/core": "^7.24.4",
        "@babel/preset-env": "^7.11.0",
        "@babel/runtime": "^7.11.2",
        "@rollup/plugin-babel": "^6.1.0",
        "@rollup/plugin-node-resolve": "^16.0.3",
        "@rollup/plugin-replace": "^6.0.3",
        "@rollup/plugin-terser": "^1.0.0",
        "@trickfilm400/rollup-plugin-off-main-thread": "^3.0.0-pre1",
        "ajv": "^8.6.0",
        "common-tags": "^1.8.0",
        "eta": "^4.5.1",
        "fast-json-stable-stringify": "^2.1.0",
        "fs-extra": "^9.0.1",
        "glob": "^11.0.1",
        "pretty-bytes": "^5.3.0",
        "rollup": "^4.53.3",
        "source-map": "^0.8.0-beta.0",
        "stringify-object": "^3.3.0",
        "strip-comments": "^2.0.1",
        "tempy": "^0.6.0",
        "upath": "^1.2.0",
        "workbox-background-sync": "7.4.1",
        "workbox-broadcast-update": "7.4.1",
        "workbox-cacheable-response": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-expiration": "7.4.1",
        "workbox-google-analytics": "7.4.1",
        "workbox-navigation-preload": "7.4.1",
        "workbox-precaching": "7.4.1",
        "workbox-range-requests": "7.4.1",
        "workbox-recipes": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1",
        "workbox-streams": "7.4.1",
        "workbox-sw": "7.4.1",
        "workbox-window": "7.4.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/workbox-build/node_modules/pretty-bytes": {
      "version": "5.6.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/workbox-cacheable-response": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-core": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/workbox-expiration": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "idb": "^7.0.1",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-google-analytics": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-background-sync": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-navigation-preload": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-precaching": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-range-requests": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-recipes": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-cacheable-response": "7.4.1",
        "workbox-core": "7.4.1",
        "workbox-expiration": "7.4.1",
        "workbox-precaching": "7.4.1",
        "workbox-routing": "7.4.1",
        "workbox-strategies": "7.4.1"
      }
    },
    "node_modules/workbox-routing": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-strategies": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/workbox-streams": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "workbox-core": "7.4.1",
        "workbox-routing": "7.4.1"
      }
    },
    "node_modules/workbox-sw": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/workbox-window": {
      "version": "7.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/trusted-types": "^2.0.2",
        "workbox-core": "7.4.1"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "dev": true,
      "license": "ISC"
    }
  }
}
`,O4=`{
  "name": "copy3-of-calculadora-de-doses-de-emergência",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.5",
    "@types/jszip": "^3.4.0",
    "jszip": "^3.10.2",
    "lucide-react": "^1.70.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.3.5"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0",
    "vite-plugin-pwa": "^2.0.0"
  }
}
`,R4=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="cross" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Outer Rounded Rectangle / App Icon Base -->
  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <rect x="16" y="16" width="480" height="480" rx="96" fill="none" stroke="#334155" stroke-width="4" opacity="0.6" />

  <!-- Soft glow circle -->
  <circle cx="256" cy="256" r="180" fill="#0891b2" opacity="0.15" />

  <!-- Medical Cross with Rounded Edges -->
  <g filter="url(#glow)">
    <!-- Vertical Bar -->
    <rect x="216" y="128" width="80" height="256" rx="28" fill="url(#cross)" />
    <!-- Horizontal Bar -->
    <rect x="128" y="216" width="256" height="80" rx="28" fill="url(#cross)" />
  </g>

  <!-- Central Pulse / Vital ECG Line in Emerald -->
  <path d="M160 256 H210 L230 216 L256 296 L282 226 L302 256 H352" 
        fill="none" 
        stroke="#10b981" 
        stroke-width="12" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>
`,j4=`{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "types": [
      "node",
      "vite/client",
      "vite-plugin-pwa/client"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}`,z4=`export type Unit = 'mg/kg' | 'mcg/kg' | 'mcg/kg/min' | 'mg/kg/h' | 'U/min';
export type CalculationType = 'bolus' | 'infusion';

export interface AmpulePresentation {
  label: string;
  concentrationMg: number;
  volumeMl: number;
}

export interface DilutionInfo {
  name: string;
  description: string;
  totalDrugMg: number;
  finalVolumeMl: number;
  finalConcentrationMgMl: number;
  useCase: string;
}

export interface CalculationParams {
  weight: number;
  ampuleConcentrationMg: number;
  ampuleVolumeMl: number;
  dose: number;
  solutionVolumeMl?: number;
  maxTotalDoseMg?: number;
}

export interface CalculationResult {
  bolusMl?: string;
  infusionMlH?: string;
  infusionMcgKgMin?: string;
  finalConcentrationMgMl?: string;
  formula: string;
  maxDoseWarning?: string;
  cappedResultMl?: string;
}

export interface Drug {
  name: string;
  description: string;
  calculationType: CalculationType;
  unit: Unit;
  defaultDose: number;
  doseRange: string;
  notes: string;
  presentations?: AmpulePresentation[];
  dilutions?: DilutionInfo[];
  maxTotalDoseMg?: number;
  calculate: (params: CalculationParams) => CalculationResult;
}

export interface DrugCategory {
  name: string;
  drugs: Drug[];
}
`,k4=`import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        tailwindcss(),
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
          manifest: {
            id: './',
            name: 'Calculadora de Doses de Emergência',
            short_name: 'DosesEmerg',
            description: 'Calculadora clínica de doses e infusões de emergência, 100% autônoma e offline.',
            theme_color: '#0f172a',
            background_color: '#0f172a',
            display: 'standalone',
            start_url: './',
            scope: './',
            icons: [
              {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'pwa-maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },

          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          },
          devOptions: {
            enabled: true,
            type: 'module',
          },
        }),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});


`;function Jd(Q){throw new Error('Could not dynamically require "'+Q+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var p0={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Z_;function I4(){return Z_||(Z_=1,(function(Q,F){(function(E){Q.exports=E()})(function(){return(function E(L,M,b){function x(R,I){if(!M[R]){if(!L[R]){var A=typeof Jd=="function"&&Jd;if(!I&&A)return A(R,!0);if(f)return f(R,!0);var S=new Error("Cannot find module '"+R+"'");throw S.code="MODULE_NOT_FOUND",S}var d=M[R]={exports:{}};L[R][0].call(d.exports,function(p){var m=L[R][1][p];return x(m||p)},d,d.exports,E,L,M,b)}return M[R].exports}for(var f=typeof Jd=="function"&&Jd,y=0;y<b.length;y++)x(b[y]);return x})({1:[function(E,L,M){var b=E("./utils"),x=E("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";M.encode=function(y){for(var R,I,A,S,d,p,m,N=[],_=0,w=y.length,G=w,$=b.getTypeOf(y)!=="string";_<y.length;)G=w-_,A=$?(R=y[_++],I=_<w?y[_++]:0,_<w?y[_++]:0):(R=y.charCodeAt(_++),I=_<w?y.charCodeAt(_++):0,_<w?y.charCodeAt(_++):0),S=R>>2,d=(3&R)<<4|I>>4,p=1<G?(15&I)<<2|A>>6:64,m=2<G?63&A:64,N.push(f.charAt(S)+f.charAt(d)+f.charAt(p)+f.charAt(m));return N.join("")},M.decode=function(y){var R,I,A,S,d,p,m=0,N=0,_="data:";if(y.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var w,G=3*(y=y.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(y.charAt(y.length-1)===f.charAt(64)&&G--,y.charAt(y.length-2)===f.charAt(64)&&G--,G%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=x.uint8array?new Uint8Array(0|G):new Array(0|G);m<y.length;)R=f.indexOf(y.charAt(m++))<<2|(S=f.indexOf(y.charAt(m++)))>>4,I=(15&S)<<4|(d=f.indexOf(y.charAt(m++)))>>2,A=(3&d)<<6|(p=f.indexOf(y.charAt(m++))),w[N++]=R,d!==64&&(w[N++]=I),p!==64&&(w[N++]=A);return w}},{"./support":30,"./utils":32}],2:[function(E,L,M){var b=E("./external"),x=E("./stream/DataWorker"),f=E("./stream/Crc32Probe"),y=E("./stream/DataLengthProbe");function R(I,A,S,d,p){this.compressedSize=I,this.uncompressedSize=A,this.crc32=S,this.compression=d,this.compressedContent=p}R.prototype={getContentWorker:function(){var I=new x(b.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new y("data_length")),A=this;return I.on("end",function(){if(this.streamInfo.data_length!==A.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),I},getCompressedWorker:function(){return new x(b.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},R.createWorkerFrom=function(I,A,S){return I.pipe(new f).pipe(new y("uncompressedSize")).pipe(A.compressWorker(S)).pipe(new y("compressedSize")).withStreamInfo("compression",A)},L.exports=R},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(E,L,M){var b=E("./stream/GenericWorker");M.STORE={magic:"\0\0",compressWorker:function(){return new b("STORE compression")},uncompressWorker:function(){return new b("STORE decompression")}},M.DEFLATE=E("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(E,L,M){var b=E("./utils"),x=(function(){for(var f,y=[],R=0;R<256;R++){f=R;for(var I=0;I<8;I++)f=1&f?3988292384^f>>>1:f>>>1;y[R]=f}return y})();L.exports=function(f,y){return f!==void 0&&f.length?b.getTypeOf(f)!=="string"?(function(R,I,A,S){var d=x,p=S+A;R^=-1;for(var m=S;m<p;m++)R=R>>>8^d[255&(R^I[m])];return-1^R})(0|y,f,f.length,0):(function(R,I,A,S){var d=x,p=S+A;R^=-1;for(var m=S;m<p;m++)R=R>>>8^d[255&(R^I.charCodeAt(m))];return-1^R})(0|y,f,f.length,0):0}},{"./utils":32}],5:[function(E,L,M){M.base64=!1,M.binary=!1,M.dir=!1,M.createFolders=!0,M.date=null,M.compression=null,M.compressionOptions=null,M.comment=null,M.unixPermissions=null,M.dosPermissions=null},{}],6:[function(E,L,M){var b=null;b=typeof Promise<"u"?Promise:E("lie"),L.exports={Promise:b}},{lie:37}],7:[function(E,L,M){var b=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",x=E("pako"),f=E("./utils"),y=E("./stream/GenericWorker"),R=b?"uint8array":"array";function I(A,S){y.call(this,"FlateWorker/"+A),this._pako=null,this._pakoAction=A,this._pakoOptions=S,this.meta={}}M.magic="\b\0",f.inherits(I,y),I.prototype.processChunk=function(A){this.meta=A.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(R,A.data),!1)},I.prototype.flush=function(){y.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},I.prototype.cleanUp=function(){y.prototype.cleanUp.call(this),this._pako=null},I.prototype._createPako=function(){this._pako=new x[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var A=this;this._pako.onData=function(S){A.push({data:S,meta:A.meta})}},M.compressWorker=function(A){return new I("Deflate",A)},M.uncompressWorker=function(){return new I("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(E,L,M){function b(d,p){var m,N="";for(m=0;m<p;m++)N+=String.fromCharCode(255&d),d>>>=8;return N}function x(d,p,m,N,_,w){var G,$,Z=d.file,re=d.compression,te=w!==R.utf8encode,he=f.transformTo("string",w(Z.name)),W=f.transformTo("string",R.utf8encode(Z.name)),ve=Z.comment,Ae=f.transformTo("string",w(ve)),k=f.transformTo("string",R.utf8encode(ve)),J=W.length!==Z.name.length,h=k.length!==ve.length,fe="",de="",ne="",Ne=Z.dir,oe=Z.date,De={crc32:0,compressedSize:0,uncompressedSize:0};p&&!m||(De.crc32=d.crc32,De.compressedSize=d.compressedSize,De.uncompressedSize=d.uncompressedSize);var q=0;p&&(q|=8),te||!J&&!h||(q|=2048);var C=0,pe=0;Ne&&(C|=16),_==="UNIX"?(pe=798,C|=(function(ge,tn){var cn=ge;return ge||(cn=tn?16893:33204),(65535&cn)<<16})(Z.unixPermissions,Ne)):(pe=20,C|=(function(ge){return 63&(ge||0)})(Z.dosPermissions)),G=oe.getUTCHours(),G<<=6,G|=oe.getUTCMinutes(),G<<=5,G|=oe.getUTCSeconds()/2,$=oe.getUTCFullYear()-1980,$<<=4,$|=oe.getUTCMonth()+1,$<<=5,$|=oe.getUTCDate(),J&&(de=b(1,1)+b(I(he),4)+W,fe+="up"+b(de.length,2)+de),h&&(ne=b(1,1)+b(I(Ae),4)+k,fe+="uc"+b(ne.length,2)+ne);var ue="";return ue+=`
\0`,ue+=b(q,2),ue+=re.magic,ue+=b(G,2),ue+=b($,2),ue+=b(De.crc32,4),ue+=b(De.compressedSize,4),ue+=b(De.uncompressedSize,4),ue+=b(he.length,2),ue+=b(fe.length,2),{fileRecord:A.LOCAL_FILE_HEADER+ue+he+fe,dirRecord:A.CENTRAL_FILE_HEADER+b(pe,2)+ue+b(Ae.length,2)+"\0\0\0\0"+b(C,4)+b(N,4)+he+fe+Ae}}var f=E("../utils"),y=E("../stream/GenericWorker"),R=E("../utf8"),I=E("../crc32"),A=E("../signature");function S(d,p,m,N){y.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=p,this.zipPlatform=m,this.encodeFileName=N,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(S,y),S.prototype.push=function(d){var p=d.meta.percent||0,m=this.entriesCount,N=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,y.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:m?(p+100*(m-N-1))/m:100}}))},S.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var p=this.streamFiles&&!d.file.dir;if(p){var m=x(d,p,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},S.prototype.closedSource=function(d){this.accumulate=!1;var p=this.streamFiles&&!d.file.dir,m=x(d,p,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),p)this.push({data:(function(N){return A.DATA_DESCRIPTOR+b(N.crc32,4)+b(N.compressedSize,4)+b(N.uncompressedSize,4)})(d),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},S.prototype.flush=function(){for(var d=this.bytesWritten,p=0;p<this.dirRecords.length;p++)this.push({data:this.dirRecords[p],meta:{percent:100}});var m=this.bytesWritten-d,N=(function(_,w,G,$,Z){var re=f.transformTo("string",Z($));return A.CENTRAL_DIRECTORY_END+"\0\0\0\0"+b(_,2)+b(_,2)+b(w,4)+b(G,4)+b(re.length,2)+re})(this.dirRecords.length,m,d,this.zipComment,this.encodeFileName);this.push({data:N,meta:{percent:100}})},S.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},S.prototype.registerPrevious=function(d){this._sources.push(d);var p=this;return d.on("data",function(m){p.processChunk(m)}),d.on("end",function(){p.closedSource(p.previous.streamInfo),p._sources.length?p.prepareNextSource():p.end()}),d.on("error",function(m){p.error(m)}),this},S.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},S.prototype.error=function(d){var p=this._sources;if(!y.prototype.error.call(this,d))return!1;for(var m=0;m<p.length;m++)try{p[m].error(d)}catch{}return!0},S.prototype.lock=function(){y.prototype.lock.call(this);for(var d=this._sources,p=0;p<d.length;p++)d[p].lock()},L.exports=S},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(E,L,M){var b=E("../compressions"),x=E("./ZipFileWorker");M.generateWorker=function(f,y,R){var I=new x(y.streamFiles,R,y.platform,y.encodeFileName),A=0;try{f.forEach(function(S,d){A++;var p=(function(w,G){var $=w||G,Z=b[$];if(!Z)throw new Error($+" is not a valid compression method !");return Z})(d.options.compression,y.compression),m=d.options.compressionOptions||y.compressionOptions||{},N=d.dir,_=d.date;d._compressWorker(p,m).withStreamInfo("file",{name:S,dir:N,date:_,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(I)}),I.entriesCount=A}catch(S){I.error(S)}return I}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(E,L,M){function b(){if(!(this instanceof b))return new b;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var x=new b;for(var f in this)typeof this[f]!="function"&&(x[f]=this[f]);return x}}(b.prototype=E("./object")).loadAsync=E("./load"),b.support=E("./support"),b.defaults=E("./defaults"),b.version="3.10.2",b.loadAsync=function(x,f){return new b().loadAsync(x,f)},b.external=E("./external"),L.exports=b},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(E,L,M){var b=E("./utils"),x=E("./external"),f=E("./utf8"),y=E("./zipEntries"),R=E("./stream/Crc32Probe"),I=E("./nodejsUtils");function A(S){return new x.Promise(function(d,p){var m=S.decompressed.getContentWorker().pipe(new R);m.on("error",function(N){p(N)}).on("end",function(){m.streamInfo.crc32!==S.decompressed.crc32?p(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}L.exports=function(S,d){var p=this;return d=b.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),I.isNode&&I.isStream(S)?x.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):b.prepareContent("the loaded zip file",S,!0,d.optimizedBinaryString,d.base64).then(function(m){var N=new y(d);return N.load(m),N}).then(function(m){var N=[x.Promise.resolve(m)],_=m.files;if(d.checkCRC32)for(var w=0;w<_.length;w++)N.push(A(_[w]));return x.Promise.all(N)}).then(function(m){for(var N=m.shift(),_=N.files,w=0;w<_.length;w++){var G=_[w],$=G.fileNameStr,Z=b.resolve(G.fileNameStr);p.file(Z,G.decompressed,{binary:!0,optimizedBinaryString:!0,date:G.date,dir:G.dir,comment:G.fileCommentStr.length?G.fileCommentStr:null,unixPermissions:G.unixPermissions,dosPermissions:G.dosPermissions,createFolders:d.createFolders}),G.dir||(p.file(Z).unsafeOriginalName=$)}return N.zipComment.length&&(p.comment=N.zipComment),p})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(E,L,M){var b=E("../utils"),x=E("../stream/GenericWorker");function f(y,R){x.call(this,"Nodejs stream input adapter for "+y),this._upstreamEnded=!1,this._bindStream(R)}b.inherits(f,x),f.prototype._bindStream=function(y){var R=this;(this._stream=y).pause(),y.on("data",function(I){R.push({data:I,meta:{percent:0}})}).on("error",function(I){R.isPaused?this.generatedError=I:R.error(I)}).on("end",function(){R.isPaused?R._upstreamEnded=!0:R.end()})},f.prototype.pause=function(){return!!x.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!x.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},L.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(E,L,M){var b=E("readable-stream").Readable;function x(f,y,R){b.call(this,y),this._helper=f;var I=this;f.on("data",function(A,S){I.push(A)||I._helper.pause(),R&&R(S)}).on("error",function(A){I.emit("error",A)}).on("end",function(){I.push(null)})}E("../utils").inherits(x,b),x.prototype._read=function(){this._helper.resume()},L.exports=x},{"../utils":32,"readable-stream":16}],14:[function(E,L,M){L.exports={isNode:typeof Buffer<"u",newBufferFrom:function(b,x){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(b,x);if(typeof b=="number")throw new Error('The "data" argument must not be a number');return new Buffer(b,x)},allocBuffer:function(b){if(Buffer.alloc)return Buffer.alloc(b);var x=new Buffer(b);return x.fill(0),x},isBuffer:function(b){return Buffer.isBuffer(b)},isStream:function(b){return b&&typeof b.on=="function"&&typeof b.pause=="function"&&typeof b.resume=="function"}}},{}],15:[function(E,L,M){function b(Z,re,te){var he,W=f.getTypeOf(re),ve=f.extend(te||{},I);ve.date=ve.date||new Date,ve.compression!==null&&(ve.compression=ve.compression.toUpperCase()),typeof ve.unixPermissions=="string"&&(ve.unixPermissions=parseInt(ve.unixPermissions,8)),ve.unixPermissions&&16384&ve.unixPermissions&&(ve.dir=!0),ve.dosPermissions&&16&ve.dosPermissions&&(ve.dir=!0),ve.dir&&(Z=_(Z)),ve.createFolders&&(he=N(Z))&&w.call(this,he,!0);var Ae=W==="string"&&ve.binary===!1&&ve.base64===!1;te&&te.binary!==void 0||(ve.binary=!Ae),(re instanceof A&&re.uncompressedSize===0||ve.dir||!re||re.length===0)&&(ve.base64=!1,ve.binary=!0,re="",ve.compression="STORE",W="string");var k=null;k=re instanceof A||re instanceof y?re:p.isNode&&p.isStream(re)?new m(Z,re):f.prepareContent(Z,re,ve.binary,ve.optimizedBinaryString,ve.base64);var J=new S(Z,k,ve);this.files[Z]=J}var x=E("./utf8"),f=E("./utils"),y=E("./stream/GenericWorker"),R=E("./stream/StreamHelper"),I=E("./defaults"),A=E("./compressedObject"),S=E("./zipObject"),d=E("./generate"),p=E("./nodejsUtils"),m=E("./nodejs/NodejsStreamInputAdapter"),N=function(Z){Z.slice(-1)==="/"&&(Z=Z.substring(0,Z.length-1));var re=Z.lastIndexOf("/");return 0<re?Z.substring(0,re):""},_=function(Z){return Z.slice(-1)!=="/"&&(Z+="/"),Z},w=function(Z,re){return re=re!==void 0?re:I.createFolders,Z=_(Z),this.files[Z]||b.call(this,Z,null,{dir:!0,createFolders:re}),this.files[Z]};function G(Z){return Object.prototype.toString.call(Z)==="[object RegExp]"}var $={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(Z){var re,te,he;for(re in this.files)he=this.files[re],(te=re.slice(this.root.length,re.length))&&re.slice(0,this.root.length)===this.root&&Z(te,he)},filter:function(Z){var re=[];return this.forEach(function(te,he){Z(te,he)&&re.push(he)}),re},file:function(Z,re,te){if(arguments.length!==1)return Z=this.root+Z,b.call(this,Z,re,te),this;if(G(Z)){var he=Z;return this.filter(function(ve,Ae){return!Ae.dir&&he.test(ve)})}var W=this.files[this.root+Z];return W&&!W.dir?W:null},folder:function(Z){if(!Z)return this;if(G(Z))return this.filter(function(W,ve){return ve.dir&&Z.test(W)});var re=this.root+Z,te=w.call(this,re),he=this.clone();return he.root=te.name,he},remove:function(Z){Z=this.root+Z;var re=this.files[Z];if(re||(Z.slice(-1)!=="/"&&(Z+="/"),re=this.files[Z]),re&&!re.dir)delete this.files[Z];else for(var te=this.filter(function(W,ve){return ve.name.slice(0,Z.length)===Z}),he=0;he<te.length;he++)delete this.files[te[he].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(Z){var re,te={};try{if((te=f.extend(Z||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:x.utf8encode})).type=te.type.toLowerCase(),te.compression=te.compression.toUpperCase(),te.type==="binarystring"&&(te.type="string"),!te.type)throw new Error("No output type specified.");f.checkSupport(te.type),te.platform!=="darwin"&&te.platform!=="freebsd"&&te.platform!=="linux"&&te.platform!=="sunos"||(te.platform="UNIX"),te.platform==="win32"&&(te.platform="DOS");var he=te.comment||this.comment||"";re=d.generateWorker(this,te,he)}catch(W){(re=new y("error")).error(W)}return new R(re,te.type||"string",te.mimeType)},generateAsync:function(Z,re){return this.generateInternalStream(Z).accumulate(re)},generateNodeStream:function(Z,re){return(Z=Z||{}).type||(Z.type="nodebuffer"),this.generateInternalStream(Z).toNodejsStream(re)}};L.exports=$},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(E,L,M){L.exports=E("stream")},{stream:void 0}],17:[function(E,L,M){var b=E("./DataReader");function x(f){b.call(this,f);for(var y=0;y<this.data.length;y++)f[y]=255&f[y]}E("../utils").inherits(x,b),x.prototype.byteAt=function(f){return this.data[this.zero+f]},x.prototype.lastIndexOfSignature=function(f){for(var y=f.charCodeAt(0),R=f.charCodeAt(1),I=f.charCodeAt(2),A=f.charCodeAt(3),S=this.length-4;0<=S;--S)if(this.data[S]===y&&this.data[S+1]===R&&this.data[S+2]===I&&this.data[S+3]===A)return S-this.zero;return-1},x.prototype.readAndCheckSignature=function(f){var y=f.charCodeAt(0),R=f.charCodeAt(1),I=f.charCodeAt(2),A=f.charCodeAt(3),S=this.readData(4);return y===S[0]&&R===S[1]&&I===S[2]&&A===S[3]},x.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},L.exports=x},{"../utils":32,"./DataReader":18}],18:[function(E,L,M){var b=E("../utils");function x(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}x.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var y,R=0;for(this.checkOffset(f),y=this.index+f-1;y>=this.index;y--)R=(R<<8)+this.byteAt(y);return this.index+=f,R},readString:function(f){return b.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},L.exports=x},{"../utils":32}],19:[function(E,L,M){var b=E("./Uint8ArrayReader");function x(f){b.call(this,f)}E("../utils").inherits(x,b),x.prototype.readData=function(f){this.checkOffset(f);var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},L.exports=x},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(E,L,M){var b=E("./DataReader");function x(f){b.call(this,f)}E("../utils").inherits(x,b),x.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},x.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},x.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},x.prototype.readData=function(f){this.checkOffset(f);var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},L.exports=x},{"../utils":32,"./DataReader":18}],21:[function(E,L,M){var b=E("./ArrayReader");function x(f){b.call(this,f)}E("../utils").inherits(x,b),x.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var y=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},L.exports=x},{"../utils":32,"./ArrayReader":17}],22:[function(E,L,M){var b=E("../utils"),x=E("../support"),f=E("./ArrayReader"),y=E("./StringReader"),R=E("./NodeBufferReader"),I=E("./Uint8ArrayReader");L.exports=function(A){var S=b.getTypeOf(A);return b.checkSupport(S),S!=="string"||x.uint8array?S==="nodebuffer"?new R(A):x.uint8array?new I(b.transformTo("uint8array",A)):new f(b.transformTo("array",A)):new y(A)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(E,L,M){M.LOCAL_FILE_HEADER="PK",M.CENTRAL_FILE_HEADER="PK",M.CENTRAL_DIRECTORY_END="PK",M.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",M.ZIP64_CENTRAL_DIRECTORY_END="PK",M.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(E,L,M){var b=E("./GenericWorker"),x=E("../utils");function f(y){b.call(this,"ConvertWorker to "+y),this.destType=y}x.inherits(f,b),f.prototype.processChunk=function(y){this.push({data:x.transformTo(this.destType,y.data),meta:y.meta})},L.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(E,L,M){var b=E("./GenericWorker"),x=E("../crc32");function f(){b.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}E("../utils").inherits(f,b),f.prototype.processChunk=function(y){this.streamInfo.crc32=x(y.data,this.streamInfo.crc32||0),this.push(y)},L.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(E,L,M){var b=E("../utils"),x=E("./GenericWorker");function f(y){x.call(this,"DataLengthProbe for "+y),this.propName=y,this.withStreamInfo(y,0)}b.inherits(f,x),f.prototype.processChunk=function(y){if(y){var R=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=R+y.data.length}x.prototype.processChunk.call(this,y)},L.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(E,L,M){var b=E("../utils"),x=E("./GenericWorker");function f(y){x.call(this,"DataWorker");var R=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,y.then(function(I){R.dataIsReady=!0,R.data=I,R.max=I&&I.length||0,R.type=b.getTypeOf(I),R.isPaused||R._tickAndRepeat()},function(I){R.error(I)})}b.inherits(f,x),f.prototype.cleanUp=function(){x.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!x.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,b.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(b.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var y=null,R=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":y=this.data.substring(this.index,R);break;case"uint8array":y=this.data.subarray(this.index,R);break;case"array":case"nodebuffer":y=this.data.slice(this.index,R)}return this.index=R,this.push({data:y,meta:{percent:this.max?this.index/this.max*100:0}})},L.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(E,L,M){function b(x){this.name=x||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}b.prototype={push:function(x){this.emit("data",x)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(x){this.emit("error",x)}return!0},error:function(x){return!this.isFinished&&(this.isPaused?this.generatedError=x:(this.isFinished=!0,this.emit("error",x),this.previous&&this.previous.error(x),this.cleanUp()),!0)},on:function(x,f){return this._listeners[x].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(x,f){if(this._listeners[x])for(var y=0;y<this._listeners[x].length;y++)this._listeners[x][y].call(this,f)},pipe:function(x){return x.registerPrevious(this)},registerPrevious:function(x){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=x.streamInfo,this.mergeStreamInfo(),this.previous=x;var f=this;return x.on("data",function(y){f.processChunk(y)}),x.on("end",function(){f.end()}),x.on("error",function(y){f.error(y)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var x=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),x=!0),this.previous&&this.previous.resume(),!x},flush:function(){},processChunk:function(x){this.push(x)},withStreamInfo:function(x,f){return this.extraStreamInfo[x]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var x in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,x)&&(this.streamInfo[x]=this.extraStreamInfo[x])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var x="Worker "+this.name;return this.previous?this.previous+" -> "+x:x}},L.exports=b},{}],29:[function(E,L,M){var b=E("../utils"),x=E("./ConvertWorker"),f=E("./GenericWorker"),y=E("../base64"),R=E("../support"),I=E("../external"),A=null;if(R.nodestream)try{A=E("../nodejs/NodejsStreamOutputAdapter")}catch{}function S(p,m){return new I.Promise(function(N,_){var w=[],G=p._internalType,$=p._outputType,Z=p._mimeType;p.on("data",function(re,te){w.push(re),m&&m(te)}).on("error",function(re){w=[],_(re)}).on("end",function(){try{var re=(function(te,he,W){switch(te){case"blob":return b.newBlob(b.transformTo("arraybuffer",he),W);case"base64":return y.encode(he);default:return b.transformTo(te,he)}})($,(function(te,he){var W,ve=0,Ae=null,k=0;for(W=0;W<he.length;W++)k+=he[W].length;switch(te){case"string":return he.join("");case"array":return Array.prototype.concat.apply([],he);case"uint8array":for(Ae=new Uint8Array(k),W=0;W<he.length;W++)Ae.set(he[W],ve),ve+=he[W].length;return Ae;case"nodebuffer":return Buffer.concat(he);default:throw new Error("concat : unsupported type '"+te+"'")}})(G,w),Z);N(re)}catch(te){_(te)}w=[]}).resume()})}function d(p,m,N){var _=m;switch(m){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=m,this._mimeType=N,b.checkSupport(_),this._worker=p.pipe(new x(_)),p.lock()}catch(w){this._worker=new f("error"),this._worker.error(w)}}d.prototype={accumulate:function(p){return S(this,p)},on:function(p,m){var N=this;return p==="data"?this._worker.on(p,function(_){m.call(N,_.data,_.meta)}):this._worker.on(p,function(){b.delay(m,arguments,N)}),this},resume:function(){return b.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(p){if(b.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new A(this,{objectMode:this._outputType!=="nodebuffer"},p)}},L.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(E,L,M){if(M.base64=!0,M.array=!0,M.string=!0,M.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",M.nodebuffer=typeof Buffer<"u",M.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")M.blob=!1;else{var b=new ArrayBuffer(0);try{M.blob=new Blob([b],{type:"application/zip"}).size===0}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);x.append(b),M.blob=x.getBlob("application/zip").size===0}catch{M.blob=!1}}}try{M.nodestream=!!E("readable-stream").Readable}catch{M.nodestream=!1}},{"readable-stream":16}],31:[function(E,L,M){for(var b=E("./utils"),x=E("./support"),f=E("./nodejsUtils"),y=E("./stream/GenericWorker"),R=new Array(256),I=0;I<256;I++)R[I]=252<=I?6:248<=I?5:240<=I?4:224<=I?3:192<=I?2:1;R[254]=R[254]=1;function A(){y.call(this,"utf-8 decode"),this.leftOver=null}function S(){y.call(this,"utf-8 encode")}M.utf8encode=function(d){return x.nodebuffer?f.newBufferFrom(d,"utf-8"):(function(p){var m,N,_,w,G,$=p.length,Z=0;for(w=0;w<$;w++)(64512&(N=p.charCodeAt(w)))==55296&&w+1<$&&(64512&(_=p.charCodeAt(w+1)))==56320&&(N=65536+(N-55296<<10)+(_-56320),w++),Z+=N<128?1:N<2048?2:N<65536?3:4;for(m=x.uint8array?new Uint8Array(Z):new Array(Z),w=G=0;G<Z;w++)(64512&(N=p.charCodeAt(w)))==55296&&w+1<$&&(64512&(_=p.charCodeAt(w+1)))==56320&&(N=65536+(N-55296<<10)+(_-56320),w++),N<128?m[G++]=N:(N<2048?m[G++]=192|N>>>6:(N<65536?m[G++]=224|N>>>12:(m[G++]=240|N>>>18,m[G++]=128|N>>>12&63),m[G++]=128|N>>>6&63),m[G++]=128|63&N);return m})(d)},M.utf8decode=function(d){return x.nodebuffer?b.transformTo("nodebuffer",d).toString("utf-8"):(function(p){var m,N,_,w,G=p.length,$=new Array(2*G);for(m=N=0;m<G;)if((_=p[m++])<128)$[N++]=_;else if(4<(w=R[_]))$[N++]=65533,m+=w-1;else{for(_&=w===2?31:w===3?15:7;1<w&&m<G;)_=_<<6|63&p[m++],w--;1<w?$[N++]=65533:_<65536?$[N++]=_:(_-=65536,$[N++]=55296|_>>10&1023,$[N++]=56320|1023&_)}return $.length!==N&&($.subarray?$=$.subarray(0,N):$.length=N),b.applyFromCharCode($)})(d=b.transformTo(x.uint8array?"uint8array":"array",d))},b.inherits(A,y),A.prototype.processChunk=function(d){var p=b.transformTo(x.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(x.uint8array){var m=p;(p=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),p.set(m,this.leftOver.length)}else p=this.leftOver.concat(p);this.leftOver=null}var N=(function(w,G){var $;for((G=G||w.length)>w.length&&(G=w.length),$=G-1;0<=$&&(192&w[$])==128;)$--;return $<0||$===0?G:$+R[w[$]]>G?$:G})(p),_=p;N!==p.length&&(x.uint8array?(_=p.subarray(0,N),this.leftOver=p.subarray(N,p.length)):(_=p.slice(0,N),this.leftOver=p.slice(N,p.length))),this.push({data:M.utf8decode(_),meta:d.meta})},A.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:M.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},M.Utf8DecodeWorker=A,b.inherits(S,y),S.prototype.processChunk=function(d){this.push({data:M.utf8encode(d.data),meta:d.meta})},M.Utf8EncodeWorker=S},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(E,L,M){var b=E("./support"),x=E("./base64"),f=E("./nodejsUtils"),y=E("./external");function R(m){return m}function I(m,N){for(var _=0;_<m.length;++_)N[_]=255&m.charCodeAt(_);return N}E("setimmediate"),M.newBlob=function(m,N){M.checkSupport("blob");try{return new Blob([m],{type:N})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(m),_.getBlob(N)}catch{throw new Error("Bug : can't construct the Blob.")}}};var A={stringifyByChunk:function(m,N,_){var w=[],G=0,$=m.length;if($<=_)return String.fromCharCode.apply(null,m);for(;G<$;)N==="array"||N==="nodebuffer"?w.push(String.fromCharCode.apply(null,m.slice(G,Math.min(G+_,$)))):w.push(String.fromCharCode.apply(null,m.subarray(G,Math.min(G+_,$)))),G+=_;return w.join("")},stringifyByChar:function(m){for(var N="",_=0;_<m.length;_++)N+=String.fromCharCode(m[_]);return N},applyCanBeUsed:{uint8array:(function(){try{return b.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return b.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function S(m){var N=65536,_=M.getTypeOf(m),w=!0;if(_==="uint8array"?w=A.applyCanBeUsed.uint8array:_==="nodebuffer"&&(w=A.applyCanBeUsed.nodebuffer),w)for(;1<N;)try{return A.stringifyByChunk(m,_,N)}catch{N=Math.floor(N/2)}return A.stringifyByChar(m)}function d(m,N){for(var _=0;_<m.length;_++)N[_]=m[_];return N}M.applyFromCharCode=S;var p={};p.string={string:R,array:function(m){return I(m,new Array(m.length))},arraybuffer:function(m){return p.string.uint8array(m).buffer},uint8array:function(m){return I(m,new Uint8Array(m.length))},nodebuffer:function(m){return I(m,f.allocBuffer(m.length))}},p.array={string:S,array:R,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return f.newBufferFrom(m)}},p.arraybuffer={string:function(m){return S(new Uint8Array(m))},array:function(m){return d(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:R,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return f.newBufferFrom(new Uint8Array(m))}},p.uint8array={string:S,array:function(m){return d(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:R,nodebuffer:function(m){return f.newBufferFrom(m)}},p.nodebuffer={string:S,array:function(m){return d(m,new Array(m.length))},arraybuffer:function(m){return p.nodebuffer.uint8array(m).buffer},uint8array:function(m){return d(m,new Uint8Array(m.length))},nodebuffer:R},M.transformTo=function(m,N){if(N=N||"",!m)return N;M.checkSupport(m);var _=M.getTypeOf(N);return p[_][m](N)},M.resolve=function(m){for(var N=m.split("/"),_=[],w=0;w<N.length;w++){var G=N[w];G==="."||G===""&&w!==0&&w!==N.length-1||(G===".."?_.pop():_.push(G))}return _.join("/")},M.getTypeOf=function(m){if(typeof m=="string")return"string";var N=Object.prototype.toString.call(m);return N==="[object Array]"?"array":b.nodebuffer&&f.isBuffer(m)?"nodebuffer":b.uint8array&&N==="[object Uint8Array]"?"uint8array":b.arraybuffer&&N==="[object ArrayBuffer]"?"arraybuffer":void 0},M.checkSupport=function(m){if(!b[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},M.MAX_VALUE_16BITS=65535,M.MAX_VALUE_32BITS=-1,M.pretty=function(m){var N,_,w="";for(_=0;_<(m||"").length;_++)w+="\\x"+((N=m.charCodeAt(_))<16?"0":"")+N.toString(16).toUpperCase();return w},M.delay=function(m,N,_){setImmediate(function(){m.apply(_||null,N||[])})},M.inherits=function(m,N){function _(){}_.prototype=N.prototype,m.prototype=new _},M.extend=function(){var m,N,_={};for(m=0;m<arguments.length;m++)for(N in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],N)&&_[N]===void 0&&(_[N]=arguments[m][N]);return _},M.prepareContent=function(m,N,_,w,G){return y.Promise.resolve(N).then(function($){return b.blob&&($ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call($))!==-1)?Blob.prototype.arrayBuffer!==void 0?$.arrayBuffer():typeof FileReader<"u"?new y.Promise(function(Z,re){var te=new FileReader;te.onload=function(he){Z(he.target.result)},te.onerror=function(he){re(he.target.error)},te.readAsArrayBuffer($)}):y.Promise.reject(new Error(m+" is a Blob, but we have no way of reading it.")):$}).then(function($){var Z=M.getTypeOf($);return Z?(Z==="arraybuffer"?$=M.transformTo("uint8array",$):Z==="string"&&(G?$=x.decode($):_&&w!==!0&&($=(function(re){return I(re,b.uint8array?new Uint8Array(re.length):new Array(re.length))})($))),$):y.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(E,L,M){var b=E("./reader/readerFor"),x=E("./utils"),f=E("./signature"),y=E("./zipEntry"),R=E("./support");function I(A){this.files=[],this.loadOptions=A}I.prototype={checkSignature:function(A){if(!this.reader.readAndCheckSignature(A)){this.reader.index-=4;var S=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+x.pretty(S)+", expected "+x.pretty(A)+")")}},isSignature:function(A,S){var d=this.reader.index;this.reader.setIndex(A);var p=this.reader.readString(4)===S;return this.reader.setIndex(d),p},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var A=this.reader.readData(this.zipCommentLength),S=R.uint8array?"uint8array":"array",d=x.transformTo(S,A);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var A,S,d,p=this.zip64EndOfCentralSize-44;0<p;)A=this.reader.readInt(2),S=this.reader.readInt(4),d=this.reader.readData(S),this.zip64ExtensibleData[A]={id:A,length:S,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var A,S;for(A=0;A<this.files.length;A++)S=this.files[A],this.reader.setIndex(S.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),S.readLocalPart(this.reader),S.handleUTF8(),S.processAttributes()},readCentralDir:function(){var A;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(A=new y({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(A);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var A=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(A<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(A);var S=A;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===x.MAX_VALUE_16BITS||this.diskWithCentralDirStart===x.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===x.MAX_VALUE_16BITS||this.centralDirRecords===x.MAX_VALUE_16BITS||this.centralDirSize===x.MAX_VALUE_32BITS||this.centralDirOffset===x.MAX_VALUE_32BITS){if(this.zip64=!0,(A=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(A),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var p=S-d;if(0<p)this.isSignature(S,f.CENTRAL_FILE_HEADER)||(this.reader.zero=p);else if(p<0)throw new Error("Corrupted zip: missing "+Math.abs(p)+" bytes.")},prepareReader:function(A){this.reader=b(A)},load:function(A){this.prepareReader(A),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},L.exports=I},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(E,L,M){var b=E("./reader/readerFor"),x=E("./utils"),f=E("./compressedObject"),y=E("./crc32"),R=E("./utf8"),I=E("./compressions"),A=E("./support");function S(d,p){this.options=d,this.loadOptions=p}S.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var p,m;if(d.skip(22),this.fileNameLength=d.readInt(2),m=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((p=(function(N){for(var _ in I)if(Object.prototype.hasOwnProperty.call(I,_)&&I[_].magic===N)return I[_];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+x.pretty(this.compressionMethod)+" unknown (inner file : "+x.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,p,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var p=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(p),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=b(this.extraFields[1].value);this.uncompressedSize===x.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===x.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===x.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===x.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var p,m,N,_=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<_;)p=d.readInt(2),m=d.readInt(2),N=d.readData(m),this.extraFields[p]={id:p,length:m,value:N};d.setIndex(_)},handleUTF8:function(){var d=A.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=R.utf8decode(this.fileName),this.fileCommentStr=R.utf8decode(this.fileComment);else{var p=this.findExtraFieldUnicodePath();if(p!==null)this.fileNameStr=p;else{var m=x.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var N=this.findExtraFieldUnicodeComment();if(N!==null)this.fileCommentStr=N;else{var _=x.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var p=b(d.value);return p.readInt(1)!==1||y(this.fileName)!==p.readInt(4)?null:R.utf8decode(p.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var p=b(d.value);return p.readInt(1)!==1||y(this.fileComment)!==p.readInt(4)?null:R.utf8decode(p.readData(d.length-5))}return null}},L.exports=S},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(E,L,M){function b(p,m,N){this.name=p,this.dir=N.dir,this.date=N.date,this.comment=N.comment,this.unixPermissions=N.unixPermissions,this.dosPermissions=N.dosPermissions,this._data=m,this._dataBinary=N.binary,this.options={compression:N.compression,compressionOptions:N.compressionOptions}}var x=E("./stream/StreamHelper"),f=E("./stream/DataWorker"),y=E("./utf8"),R=E("./compressedObject"),I=E("./stream/GenericWorker");b.prototype={internalStream:function(p){var m=null,N="string";try{if(!p)throw new Error("No output type specified.");var _=(N=p.toLowerCase())==="string"||N==="text";N!=="binarystring"&&N!=="text"||(N="string"),m=this._decompressWorker();var w=!this._dataBinary;w&&!_&&(m=m.pipe(new y.Utf8EncodeWorker)),!w&&_&&(m=m.pipe(new y.Utf8DecodeWorker))}catch(G){(m=new I("error")).error(G)}return new x(m,N,"")},async:function(p,m){return this.internalStream(p).accumulate(m)},nodeStream:function(p,m){return this.internalStream(p||"nodebuffer").toNodejsStream(m)},_compressWorker:function(p,m){if(this._data instanceof R&&this._data.compression.magic===p.magic)return this._data.getCompressedWorker();var N=this._decompressWorker();return this._dataBinary||(N=N.pipe(new y.Utf8EncodeWorker)),R.createWorkerFrom(N,p,m)},_decompressWorker:function(){return this._data instanceof R?this._data.getContentWorker():this._data instanceof I?this._data:new f(this._data)}};for(var A=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],S=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<A.length;d++)b.prototype[A[d]]=S;L.exports=b},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(E,L,M){(function(b){var x,f,y=b.MutationObserver||b.WebKitMutationObserver;if(y){var R=0,I=new y(p),A=b.document.createTextNode("");I.observe(A,{characterData:!0}),x=function(){A.data=R=++R%2}}else if(b.setImmediate||b.MessageChannel===void 0)x="document"in b&&"onreadystatechange"in b.document.createElement("script")?function(){var m=b.document.createElement("script");m.onreadystatechange=function(){p(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},b.document.documentElement.appendChild(m)}:function(){setTimeout(p,0)};else{var S=new b.MessageChannel;S.port1.onmessage=p,x=function(){S.port2.postMessage(0)}}var d=[];function p(){var m,N;f=!0;for(var _=d.length;_;){for(N=d,d=[],m=-1;++m<_;)N[m]();_=d.length}f=!1}L.exports=function(m){d.push(m)!==1||f||x()}}).call(this,typeof Pd<"u"?Pd:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(E,L,M){var b=E("immediate");function x(){}var f={},y=["REJECTED"],R=["FULFILLED"],I=["PENDING"];function A(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=I,this.queue=[],this.outcome=void 0,_!==x&&m(this,_)}function S(_,w,G){this.promise=_,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof G=="function"&&(this.onRejected=G,this.callRejected=this.otherCallRejected)}function d(_,w,G){b(function(){var $;try{$=w(G)}catch(Z){return f.reject(_,Z)}$===_?f.reject(_,new TypeError("Cannot resolve promise with itself")):f.resolve(_,$)})}function p(_){var w=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof w=="function")return function(){w.apply(_,arguments)}}function m(_,w){var G=!1;function $(te){G||(G=!0,f.reject(_,te))}function Z(te){G||(G=!0,f.resolve(_,te))}var re=N(function(){w(Z,$)});re.status==="error"&&$(re.value)}function N(_,w){var G={};try{G.value=_(w),G.status="success"}catch($){G.status="error",G.value=$}return G}(L.exports=A).prototype.finally=function(_){if(typeof _!="function")return this;var w=this.constructor;return this.then(function(G){return w.resolve(_()).then(function(){return G})},function(G){return w.resolve(_()).then(function(){throw G})})},A.prototype.catch=function(_){return this.then(null,_)},A.prototype.then=function(_,w){if(typeof _!="function"&&this.state===R||typeof w!="function"&&this.state===y)return this;var G=new this.constructor(x);return this.state!==I?d(G,this.state===R?_:w,this.outcome):this.queue.push(new S(G,_,w)),G},S.prototype.callFulfilled=function(_){f.resolve(this.promise,_)},S.prototype.otherCallFulfilled=function(_){d(this.promise,this.onFulfilled,_)},S.prototype.callRejected=function(_){f.reject(this.promise,_)},S.prototype.otherCallRejected=function(_){d(this.promise,this.onRejected,_)},f.resolve=function(_,w){var G=N(p,w);if(G.status==="error")return f.reject(_,G.value);var $=G.value;if($)m(_,$);else{_.state=R,_.outcome=w;for(var Z=-1,re=_.queue.length;++Z<re;)_.queue[Z].callFulfilled(w)}return _},f.reject=function(_,w){_.state=y,_.outcome=w;for(var G=-1,$=_.queue.length;++G<$;)_.queue[G].callRejected(w);return _},A.resolve=function(_){return _ instanceof this?_:f.resolve(new this(x),_)},A.reject=function(_){var w=new this(x);return f.reject(w,_)},A.all=function(_){var w=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var G=_.length,$=!1;if(!G)return this.resolve([]);for(var Z=new Array(G),re=0,te=-1,he=new this(x);++te<G;)W(_[te],te);return he;function W(ve,Ae){w.resolve(ve).then(function(k){Z[Ae]=k,++re!==G||$||($=!0,f.resolve(he,Z))},function(k){$||($=!0,f.reject(he,k))})}},A.race=function(_){var w=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var G=_.length,$=!1;if(!G)return this.resolve([]);for(var Z=-1,re=new this(x);++Z<G;)te=_[Z],w.resolve(te).then(function(he){$||($=!0,f.resolve(re,he))},function(he){$||($=!0,f.reject(re,he))});var te;return re}},{immediate:36}],38:[function(E,L,M){var b={};(0,E("./lib/utils/common").assign)(b,E("./lib/deflate"),E("./lib/inflate"),E("./lib/zlib/constants")),L.exports=b},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(E,L,M){var b=E("./zlib/deflate"),x=E("./utils/common"),f=E("./utils/strings"),y=E("./zlib/messages"),R=E("./zlib/zstream"),I=Object.prototype.toString,A=0,S=-1,d=0,p=8;function m(_){if(!(this instanceof m))return new m(_);this.options=x.assign({level:S,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},_||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new R,this.strm.avail_out=0;var G=b.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(G!==A)throw new Error(y[G]);if(w.header&&b.deflateSetHeader(this.strm,w.header),w.dictionary){var $;if($=typeof w.dictionary=="string"?f.string2buf(w.dictionary):I.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(G=b.deflateSetDictionary(this.strm,$))!==A)throw new Error(y[G]);this._dict_set=!0}}function N(_,w){var G=new m(w);if(G.push(_,!0),G.err)throw G.msg||y[G.err];return G.result}m.prototype.push=function(_,w){var G,$,Z=this.strm,re=this.options.chunkSize;if(this.ended)return!1;$=w===~~w?w:w===!0?4:0,typeof _=="string"?Z.input=f.string2buf(_):I.call(_)==="[object ArrayBuffer]"?Z.input=new Uint8Array(_):Z.input=_,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new x.Buf8(re),Z.next_out=0,Z.avail_out=re),(G=b.deflate(Z,$))!==1&&G!==A)return this.onEnd(G),!(this.ended=!0);Z.avail_out!==0&&(Z.avail_in!==0||$!==4&&$!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(x.shrinkBuf(Z.output,Z.next_out))):this.onData(x.shrinkBuf(Z.output,Z.next_out)))}while((0<Z.avail_in||Z.avail_out===0)&&G!==1);return $===4?(G=b.deflateEnd(this.strm),this.onEnd(G),this.ended=!0,G===A):$!==2||(this.onEnd(A),!(Z.avail_out=0))},m.prototype.onData=function(_){this.chunks.push(_)},m.prototype.onEnd=function(_){_===A&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=x.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},M.Deflate=m,M.deflate=N,M.deflateRaw=function(_,w){return(w=w||{}).raw=!0,N(_,w)},M.gzip=function(_,w){return(w=w||{}).gzip=!0,N(_,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(E,L,M){var b=E("./zlib/inflate"),x=E("./utils/common"),f=E("./utils/strings"),y=E("./zlib/constants"),R=E("./zlib/messages"),I=E("./zlib/zstream"),A=E("./zlib/gzheader"),S=Object.prototype.toString;function d(m){if(!(this instanceof d))return new d(m);this.options=x.assign({chunkSize:16384,windowBits:0,to:""},m||{});var N=this.options;N.raw&&0<=N.windowBits&&N.windowBits<16&&(N.windowBits=-N.windowBits,N.windowBits===0&&(N.windowBits=-15)),!(0<=N.windowBits&&N.windowBits<16)||m&&m.windowBits||(N.windowBits+=32),15<N.windowBits&&N.windowBits<48&&(15&N.windowBits)==0&&(N.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new I,this.strm.avail_out=0;var _=b.inflateInit2(this.strm,N.windowBits);if(_!==y.Z_OK)throw new Error(R[_]);this.header=new A,b.inflateGetHeader(this.strm,this.header)}function p(m,N){var _=new d(N);if(_.push(m,!0),_.err)throw _.msg||R[_.err];return _.result}d.prototype.push=function(m,N){var _,w,G,$,Z,re,te=this.strm,he=this.options.chunkSize,W=this.options.dictionary,ve=!1;if(this.ended)return!1;w=N===~~N?N:N===!0?y.Z_FINISH:y.Z_NO_FLUSH,typeof m=="string"?te.input=f.binstring2buf(m):S.call(m)==="[object ArrayBuffer]"?te.input=new Uint8Array(m):te.input=m,te.next_in=0,te.avail_in=te.input.length;do{if(te.avail_out===0&&(te.output=new x.Buf8(he),te.next_out=0,te.avail_out=he),(_=b.inflate(te,y.Z_NO_FLUSH))===y.Z_NEED_DICT&&W&&(re=typeof W=="string"?f.string2buf(W):S.call(W)==="[object ArrayBuffer]"?new Uint8Array(W):W,_=b.inflateSetDictionary(this.strm,re)),_===y.Z_BUF_ERROR&&ve===!0&&(_=y.Z_OK,ve=!1),_!==y.Z_STREAM_END&&_!==y.Z_OK)return this.onEnd(_),!(this.ended=!0);te.next_out&&(te.avail_out!==0&&_!==y.Z_STREAM_END&&(te.avail_in!==0||w!==y.Z_FINISH&&w!==y.Z_SYNC_FLUSH)||(this.options.to==="string"?(G=f.utf8border(te.output,te.next_out),$=te.next_out-G,Z=f.buf2string(te.output,G),te.next_out=$,te.avail_out=he-$,$&&x.arraySet(te.output,te.output,G,$,0),this.onData(Z)):this.onData(x.shrinkBuf(te.output,te.next_out)))),te.avail_in===0&&te.avail_out===0&&(ve=!0)}while((0<te.avail_in||te.avail_out===0)&&_!==y.Z_STREAM_END);return _===y.Z_STREAM_END&&(w=y.Z_FINISH),w===y.Z_FINISH?(_=b.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===y.Z_OK):w!==y.Z_SYNC_FLUSH||(this.onEnd(y.Z_OK),!(te.avail_out=0))},d.prototype.onData=function(m){this.chunks.push(m)},d.prototype.onEnd=function(m){m===y.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=x.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},M.Inflate=d,M.inflate=p,M.inflateRaw=function(m,N){return(N=N||{}).raw=!0,p(m,N)},M.ungzip=p},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(E,L,M){var b=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";M.assign=function(y){for(var R=Array.prototype.slice.call(arguments,1);R.length;){var I=R.shift();if(I){if(typeof I!="object")throw new TypeError(I+"must be non-object");for(var A in I)I.hasOwnProperty(A)&&(y[A]=I[A])}}return y},M.shrinkBuf=function(y,R){return y.length===R?y:y.subarray?y.subarray(0,R):(y.length=R,y)};var x={arraySet:function(y,R,I,A,S){if(R.subarray&&y.subarray)y.set(R.subarray(I,I+A),S);else for(var d=0;d<A;d++)y[S+d]=R[I+d]},flattenChunks:function(y){var R,I,A,S,d,p;for(R=A=0,I=y.length;R<I;R++)A+=y[R].length;for(p=new Uint8Array(A),R=S=0,I=y.length;R<I;R++)d=y[R],p.set(d,S),S+=d.length;return p}},f={arraySet:function(y,R,I,A,S){for(var d=0;d<A;d++)y[S+d]=R[I+d]},flattenChunks:function(y){return[].concat.apply([],y)}};M.setTyped=function(y){y?(M.Buf8=Uint8Array,M.Buf16=Uint16Array,M.Buf32=Int32Array,M.assign(M,x)):(M.Buf8=Array,M.Buf16=Array,M.Buf32=Array,M.assign(M,f))},M.setTyped(b)},{}],42:[function(E,L,M){var b=E("./common"),x=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{x=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var y=new b.Buf8(256),R=0;R<256;R++)y[R]=252<=R?6:248<=R?5:240<=R?4:224<=R?3:192<=R?2:1;function I(A,S){if(S<65537&&(A.subarray&&f||!A.subarray&&x))return String.fromCharCode.apply(null,b.shrinkBuf(A,S));for(var d="",p=0;p<S;p++)d+=String.fromCharCode(A[p]);return d}y[254]=y[254]=1,M.string2buf=function(A){var S,d,p,m,N,_=A.length,w=0;for(m=0;m<_;m++)(64512&(d=A.charCodeAt(m)))==55296&&m+1<_&&(64512&(p=A.charCodeAt(m+1)))==56320&&(d=65536+(d-55296<<10)+(p-56320),m++),w+=d<128?1:d<2048?2:d<65536?3:4;for(S=new b.Buf8(w),m=N=0;N<w;m++)(64512&(d=A.charCodeAt(m)))==55296&&m+1<_&&(64512&(p=A.charCodeAt(m+1)))==56320&&(d=65536+(d-55296<<10)+(p-56320),m++),d<128?S[N++]=d:(d<2048?S[N++]=192|d>>>6:(d<65536?S[N++]=224|d>>>12:(S[N++]=240|d>>>18,S[N++]=128|d>>>12&63),S[N++]=128|d>>>6&63),S[N++]=128|63&d);return S},M.buf2binstring=function(A){return I(A,A.length)},M.binstring2buf=function(A){for(var S=new b.Buf8(A.length),d=0,p=S.length;d<p;d++)S[d]=A.charCodeAt(d);return S},M.buf2string=function(A,S){var d,p,m,N,_=S||A.length,w=new Array(2*_);for(d=p=0;d<_;)if((m=A[d++])<128)w[p++]=m;else if(4<(N=y[m]))w[p++]=65533,d+=N-1;else{for(m&=N===2?31:N===3?15:7;1<N&&d<_;)m=m<<6|63&A[d++],N--;1<N?w[p++]=65533:m<65536?w[p++]=m:(m-=65536,w[p++]=55296|m>>10&1023,w[p++]=56320|1023&m)}return I(w,p)},M.utf8border=function(A,S){var d;for((S=S||A.length)>A.length&&(S=A.length),d=S-1;0<=d&&(192&A[d])==128;)d--;return d<0||d===0?S:d+y[A[d]]>S?d:S}},{"./common":41}],43:[function(E,L,M){L.exports=function(b,x,f,y){for(var R=65535&b|0,I=b>>>16&65535|0,A=0;f!==0;){for(f-=A=2e3<f?2e3:f;I=I+(R=R+x[y++]|0)|0,--A;);R%=65521,I%=65521}return R|I<<16|0}},{}],44:[function(E,L,M){L.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(E,L,M){var b=(function(){for(var x,f=[],y=0;y<256;y++){x=y;for(var R=0;R<8;R++)x=1&x?3988292384^x>>>1:x>>>1;f[y]=x}return f})();L.exports=function(x,f,y,R){var I=b,A=R+y;x^=-1;for(var S=R;S<A;S++)x=x>>>8^I[255&(x^f[S])];return-1^x}},{}],46:[function(E,L,M){var b,x=E("../utils/common"),f=E("./trees"),y=E("./adler32"),R=E("./crc32"),I=E("./messages"),A=0,S=4,d=0,p=-2,m=-1,N=4,_=2,w=8,G=9,$=286,Z=30,re=19,te=2*$+1,he=15,W=3,ve=258,Ae=ve+W+1,k=42,J=113,h=1,fe=2,de=3,ne=4;function Ne(u,ie){return u.msg=I[ie],ie}function oe(u){return(u<<1)-(4<u?9:0)}function De(u){for(var ie=u.length;0<=--ie;)u[ie]=0}function q(u){var ie=u.state,le=ie.pending;le>u.avail_out&&(le=u.avail_out),le!==0&&(x.arraySet(u.output,ie.pending_buf,ie.pending_out,le,u.next_out),u.next_out+=le,ie.pending_out+=le,u.total_out+=le,u.avail_out-=le,ie.pending-=le,ie.pending===0&&(ie.pending_out=0))}function C(u,ie){f._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,ie),u.block_start=u.strstart,q(u.strm)}function pe(u,ie){u.pending_buf[u.pending++]=ie}function ue(u,ie){u.pending_buf[u.pending++]=ie>>>8&255,u.pending_buf[u.pending++]=255&ie}function ge(u,ie){var le,O,T=u.max_chain_length,X=u.strstart,ce=u.prev_length,be=u.nice_match,B=u.strstart>u.w_size-Ae?u.strstart-(u.w_size-Ae):0,se=u.window,Ee=u.w_mask,we=u.prev,ze=u.strstart+ve,ke=se[X+ce-1],Pe=se[X+ce];u.prev_length>=u.good_match&&(T>>=2),be>u.lookahead&&(be=u.lookahead);do if(se[(le=ie)+ce]===Pe&&se[le+ce-1]===ke&&se[le]===se[X]&&se[++le]===se[X+1]){X+=2,le++;do;while(se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&se[++X]===se[++le]&&X<ze);if(O=ve-(ze-X),X=ze-ve,ce<O){if(u.match_start=ie,be<=(ce=O))break;ke=se[X+ce-1],Pe=se[X+ce]}}while((ie=we[ie&Ee])>B&&--T!=0);return ce<=u.lookahead?ce:u.lookahead}function tn(u){var ie,le,O,T,X,ce,be,B,se,Ee,we=u.w_size;do{if(T=u.window_size-u.lookahead-u.strstart,u.strstart>=we+(we-Ae)){for(x.arraySet(u.window,u.window,we,we,0),u.match_start-=we,u.strstart-=we,u.block_start-=we,ie=le=u.hash_size;O=u.head[--ie],u.head[ie]=we<=O?O-we:0,--le;);for(ie=le=we;O=u.prev[--ie],u.prev[ie]=we<=O?O-we:0,--le;);T+=we}if(u.strm.avail_in===0)break;if(ce=u.strm,be=u.window,B=u.strstart+u.lookahead,se=T,Ee=void 0,Ee=ce.avail_in,se<Ee&&(Ee=se),le=Ee===0?0:(ce.avail_in-=Ee,x.arraySet(be,ce.input,ce.next_in,Ee,B),ce.state.wrap===1?ce.adler=y(ce.adler,be,Ee,B):ce.state.wrap===2&&(ce.adler=R(ce.adler,be,Ee,B)),ce.next_in+=Ee,ce.total_in+=Ee,Ee),u.lookahead+=le,u.lookahead+u.insert>=W)for(X=u.strstart-u.insert,u.ins_h=u.window[X],u.ins_h=(u.ins_h<<u.hash_shift^u.window[X+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[X+W-1])&u.hash_mask,u.prev[X&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=X,X++,u.insert--,!(u.lookahead+u.insert<W)););}while(u.lookahead<Ae&&u.strm.avail_in!==0)}function cn(u,ie){for(var le,O;;){if(u.lookahead<Ae){if(tn(u),u.lookahead<Ae&&ie===A)return h;if(u.lookahead===0)break}if(le=0,u.lookahead>=W&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+W-1])&u.hash_mask,le=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),le!==0&&u.strstart-le<=u.w_size-Ae&&(u.match_length=ge(u,le)),u.match_length>=W)if(O=f._tr_tally(u,u.strstart-u.match_start,u.match_length-W),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=W){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+W-1])&u.hash_mask,le=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else O=f._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(O&&(C(u,!1),u.strm.avail_out===0))return h}return u.insert=u.strstart<W-1?u.strstart:W-1,ie===S?(C(u,!0),u.strm.avail_out===0?de:ne):u.last_lit&&(C(u,!1),u.strm.avail_out===0)?h:fe}function Ce(u,ie){for(var le,O,T;;){if(u.lookahead<Ae){if(tn(u),u.lookahead<Ae&&ie===A)return h;if(u.lookahead===0)break}if(le=0,u.lookahead>=W&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+W-1])&u.hash_mask,le=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=W-1,le!==0&&u.prev_length<u.max_lazy_match&&u.strstart-le<=u.w_size-Ae&&(u.match_length=ge(u,le),u.match_length<=5&&(u.strategy===1||u.match_length===W&&4096<u.strstart-u.match_start)&&(u.match_length=W-1)),u.prev_length>=W&&u.match_length<=u.prev_length){for(T=u.strstart+u.lookahead-W,O=f._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-W),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=T&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+W-1])&u.hash_mask,le=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=W-1,u.strstart++,O&&(C(u,!1),u.strm.avail_out===0))return h}else if(u.match_available){if((O=f._tr_tally(u,0,u.window[u.strstart-1]))&&C(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return h}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(O=f._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<W-1?u.strstart:W-1,ie===S?(C(u,!0),u.strm.avail_out===0?de:ne):u.last_lit&&(C(u,!1),u.strm.avail_out===0)?h:fe}function qe(u,ie,le,O,T){this.good_length=u,this.max_lazy=ie,this.nice_length=le,this.max_chain=O,this.func=T}function yn(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new x.Buf16(2*te),this.dyn_dtree=new x.Buf16(2*(2*Z+1)),this.bl_tree=new x.Buf16(2*(2*re+1)),De(this.dyn_ltree),De(this.dyn_dtree),De(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new x.Buf16(he+1),this.heap=new x.Buf16(2*$+1),De(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new x.Buf16(2*$+1),De(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function hn(u){var ie;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=_,(ie=u.state).pending=0,ie.pending_out=0,ie.wrap<0&&(ie.wrap=-ie.wrap),ie.status=ie.wrap?k:J,u.adler=ie.wrap===2?0:1,ie.last_flush=A,f._tr_init(ie),d):Ne(u,p)}function Pn(u){var ie=hn(u);return ie===d&&(function(le){le.window_size=2*le.w_size,De(le.head),le.max_lazy_match=b[le.level].max_lazy,le.good_match=b[le.level].good_length,le.nice_match=b[le.level].nice_length,le.max_chain_length=b[le.level].max_chain,le.strstart=0,le.block_start=0,le.lookahead=0,le.insert=0,le.match_length=le.prev_length=W-1,le.match_available=0,le.ins_h=0})(u.state),ie}function dt(u,ie,le,O,T,X){if(!u)return p;var ce=1;if(ie===m&&(ie=6),O<0?(ce=0,O=-O):15<O&&(ce=2,O-=16),T<1||G<T||le!==w||O<8||15<O||ie<0||9<ie||X<0||N<X)return Ne(u,p);O===8&&(O=9);var be=new yn;return(u.state=be).strm=u,be.wrap=ce,be.gzhead=null,be.w_bits=O,be.w_size=1<<be.w_bits,be.w_mask=be.w_size-1,be.hash_bits=T+7,be.hash_size=1<<be.hash_bits,be.hash_mask=be.hash_size-1,be.hash_shift=~~((be.hash_bits+W-1)/W),be.window=new x.Buf8(2*be.w_size),be.head=new x.Buf16(be.hash_size),be.prev=new x.Buf16(be.w_size),be.lit_bufsize=1<<T+6,be.pending_buf_size=4*be.lit_bufsize,be.pending_buf=new x.Buf8(be.pending_buf_size),be.d_buf=1*be.lit_bufsize,be.l_buf=3*be.lit_bufsize,be.level=ie,be.strategy=X,be.method=le,Pn(u)}b=[new qe(0,0,0,0,function(u,ie){var le=65535;for(le>u.pending_buf_size-5&&(le=u.pending_buf_size-5);;){if(u.lookahead<=1){if(tn(u),u.lookahead===0&&ie===A)return h;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var O=u.block_start+le;if((u.strstart===0||u.strstart>=O)&&(u.lookahead=u.strstart-O,u.strstart=O,C(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-Ae&&(C(u,!1),u.strm.avail_out===0))return h}return u.insert=0,ie===S?(C(u,!0),u.strm.avail_out===0?de:ne):(u.strstart>u.block_start&&(C(u,!1),u.strm.avail_out),h)}),new qe(4,4,8,4,cn),new qe(4,5,16,8,cn),new qe(4,6,32,32,cn),new qe(4,4,16,16,Ce),new qe(8,16,32,32,Ce),new qe(8,16,128,128,Ce),new qe(8,32,128,256,Ce),new qe(32,128,258,1024,Ce),new qe(32,258,258,4096,Ce)],M.deflateInit=function(u,ie){return dt(u,ie,w,15,8,0)},M.deflateInit2=dt,M.deflateReset=Pn,M.deflateResetKeep=hn,M.deflateSetHeader=function(u,ie){return u&&u.state?u.state.wrap!==2?p:(u.state.gzhead=ie,d):p},M.deflate=function(u,ie){var le,O,T,X;if(!u||!u.state||5<ie||ie<0)return u?Ne(u,p):p;if(O=u.state,!u.output||!u.input&&u.avail_in!==0||O.status===666&&ie!==S)return Ne(u,u.avail_out===0?-5:p);if(O.strm=u,le=O.last_flush,O.last_flush=ie,O.status===k)if(O.wrap===2)u.adler=0,pe(O,31),pe(O,139),pe(O,8),O.gzhead?(pe(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),pe(O,255&O.gzhead.time),pe(O,O.gzhead.time>>8&255),pe(O,O.gzhead.time>>16&255),pe(O,O.gzhead.time>>24&255),pe(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),pe(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(pe(O,255&O.gzhead.extra.length),pe(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(u.adler=R(u.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(pe(O,0),pe(O,0),pe(O,0),pe(O,0),pe(O,0),pe(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),pe(O,3),O.status=J);else{var ce=w+(O.w_bits-8<<4)<<8;ce|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ce|=32),ce+=31-ce%31,O.status=J,ue(O,ce),O.strstart!==0&&(ue(O,u.adler>>>16),ue(O,65535&u.adler)),u.adler=1}if(O.status===69)if(O.gzhead.extra){for(T=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),q(u),T=O.pending,O.pending!==O.pending_buf_size));)pe(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){T=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),q(u),T=O.pending,O.pending===O.pending_buf_size)){X=1;break}X=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,pe(O,X)}while(X!==0);O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),X===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){T=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),q(u),T=O.pending,O.pending===O.pending_buf_size)){X=1;break}X=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,pe(O,X)}while(X!==0);O.gzhead.hcrc&&O.pending>T&&(u.adler=R(u.adler,O.pending_buf,O.pending-T,T)),X===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&q(u),O.pending+2<=O.pending_buf_size&&(pe(O,255&u.adler),pe(O,u.adler>>8&255),u.adler=0,O.status=J)):O.status=J),O.pending!==0){if(q(u),u.avail_out===0)return O.last_flush=-1,d}else if(u.avail_in===0&&oe(ie)<=oe(le)&&ie!==S)return Ne(u,-5);if(O.status===666&&u.avail_in!==0)return Ne(u,-5);if(u.avail_in!==0||O.lookahead!==0||ie!==A&&O.status!==666){var be=O.strategy===2?(function(B,se){for(var Ee;;){if(B.lookahead===0&&(tn(B),B.lookahead===0)){if(se===A)return h;break}if(B.match_length=0,Ee=f._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++,Ee&&(C(B,!1),B.strm.avail_out===0))return h}return B.insert=0,se===S?(C(B,!0),B.strm.avail_out===0?de:ne):B.last_lit&&(C(B,!1),B.strm.avail_out===0)?h:fe})(O,ie):O.strategy===3?(function(B,se){for(var Ee,we,ze,ke,Pe=B.window;;){if(B.lookahead<=ve){if(tn(B),B.lookahead<=ve&&se===A)return h;if(B.lookahead===0)break}if(B.match_length=0,B.lookahead>=W&&0<B.strstart&&(we=Pe[ze=B.strstart-1])===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]){ke=B.strstart+ve;do;while(we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&we===Pe[++ze]&&ze<ke);B.match_length=ve-(ke-ze),B.match_length>B.lookahead&&(B.match_length=B.lookahead)}if(B.match_length>=W?(Ee=f._tr_tally(B,1,B.match_length-W),B.lookahead-=B.match_length,B.strstart+=B.match_length,B.match_length=0):(Ee=f._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++),Ee&&(C(B,!1),B.strm.avail_out===0))return h}return B.insert=0,se===S?(C(B,!0),B.strm.avail_out===0?de:ne):B.last_lit&&(C(B,!1),B.strm.avail_out===0)?h:fe})(O,ie):b[O.level].func(O,ie);if(be!==de&&be!==ne||(O.status=666),be===h||be===de)return u.avail_out===0&&(O.last_flush=-1),d;if(be===fe&&(ie===1?f._tr_align(O):ie!==5&&(f._tr_stored_block(O,0,0,!1),ie===3&&(De(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),q(u),u.avail_out===0))return O.last_flush=-1,d}return ie!==S?d:O.wrap<=0?1:(O.wrap===2?(pe(O,255&u.adler),pe(O,u.adler>>8&255),pe(O,u.adler>>16&255),pe(O,u.adler>>24&255),pe(O,255&u.total_in),pe(O,u.total_in>>8&255),pe(O,u.total_in>>16&255),pe(O,u.total_in>>24&255)):(ue(O,u.adler>>>16),ue(O,65535&u.adler)),q(u),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?d:1)},M.deflateEnd=function(u){var ie;return u&&u.state?(ie=u.state.status)!==k&&ie!==69&&ie!==73&&ie!==91&&ie!==103&&ie!==J&&ie!==666?Ne(u,p):(u.state=null,ie===J?Ne(u,-3):d):p},M.deflateSetDictionary=function(u,ie){var le,O,T,X,ce,be,B,se,Ee=ie.length;if(!u||!u.state||(X=(le=u.state).wrap)===2||X===1&&le.status!==k||le.lookahead)return p;for(X===1&&(u.adler=y(u.adler,ie,Ee,0)),le.wrap=0,Ee>=le.w_size&&(X===0&&(De(le.head),le.strstart=0,le.block_start=0,le.insert=0),se=new x.Buf8(le.w_size),x.arraySet(se,ie,Ee-le.w_size,le.w_size,0),ie=se,Ee=le.w_size),ce=u.avail_in,be=u.next_in,B=u.input,u.avail_in=Ee,u.next_in=0,u.input=ie,tn(le);le.lookahead>=W;){for(O=le.strstart,T=le.lookahead-(W-1);le.ins_h=(le.ins_h<<le.hash_shift^le.window[O+W-1])&le.hash_mask,le.prev[O&le.w_mask]=le.head[le.ins_h],le.head[le.ins_h]=O,O++,--T;);le.strstart=O,le.lookahead=W-1,tn(le)}return le.strstart+=le.lookahead,le.block_start=le.strstart,le.insert=le.lookahead,le.lookahead=0,le.match_length=le.prev_length=W-1,le.match_available=0,u.next_in=be,u.input=B,u.avail_in=ce,le.wrap=X,d},M.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(E,L,M){L.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(E,L,M){L.exports=function(b,x){var f,y,R,I,A,S,d,p,m,N,_,w,G,$,Z,re,te,he,W,ve,Ae,k,J,h,fe;f=b.state,y=b.next_in,h=b.input,R=y+(b.avail_in-5),I=b.next_out,fe=b.output,A=I-(x-b.avail_out),S=I+(b.avail_out-257),d=f.dmax,p=f.wsize,m=f.whave,N=f.wnext,_=f.window,w=f.hold,G=f.bits,$=f.lencode,Z=f.distcode,re=(1<<f.lenbits)-1,te=(1<<f.distbits)-1;e:do{G<15&&(w+=h[y++]<<G,G+=8,w+=h[y++]<<G,G+=8),he=$[w&re];n:for(;;){if(w>>>=W=he>>>24,G-=W,(W=he>>>16&255)===0)fe[I++]=65535&he;else{if(!(16&W)){if((64&W)==0){he=$[(65535&he)+(w&(1<<W)-1)];continue n}if(32&W){f.mode=12;break e}b.msg="invalid literal/length code",f.mode=30;break e}ve=65535&he,(W&=15)&&(G<W&&(w+=h[y++]<<G,G+=8),ve+=w&(1<<W)-1,w>>>=W,G-=W),G<15&&(w+=h[y++]<<G,G+=8,w+=h[y++]<<G,G+=8),he=Z[w&te];t:for(;;){if(w>>>=W=he>>>24,G-=W,!(16&(W=he>>>16&255))){if((64&W)==0){he=Z[(65535&he)+(w&(1<<W)-1)];continue t}b.msg="invalid distance code",f.mode=30;break e}if(Ae=65535&he,G<(W&=15)&&(w+=h[y++]<<G,(G+=8)<W&&(w+=h[y++]<<G,G+=8)),d<(Ae+=w&(1<<W)-1)){b.msg="invalid distance too far back",f.mode=30;break e}if(w>>>=W,G-=W,(W=I-A)<Ae){if(m<(W=Ae-W)&&f.sane){b.msg="invalid distance too far back",f.mode=30;break e}if(J=_,(k=0)===N){if(k+=p-W,W<ve){for(ve-=W;fe[I++]=_[k++],--W;);k=I-Ae,J=fe}}else if(N<W){if(k+=p+N-W,(W-=N)<ve){for(ve-=W;fe[I++]=_[k++],--W;);if(k=0,N<ve){for(ve-=W=N;fe[I++]=_[k++],--W;);k=I-Ae,J=fe}}}else if(k+=N-W,W<ve){for(ve-=W;fe[I++]=_[k++],--W;);k=I-Ae,J=fe}for(;2<ve;)fe[I++]=J[k++],fe[I++]=J[k++],fe[I++]=J[k++],ve-=3;ve&&(fe[I++]=J[k++],1<ve&&(fe[I++]=J[k++]))}else{for(k=I-Ae;fe[I++]=fe[k++],fe[I++]=fe[k++],fe[I++]=fe[k++],2<(ve-=3););ve&&(fe[I++]=fe[k++],1<ve&&(fe[I++]=fe[k++]))}break}}break}}while(y<R&&I<S);y-=ve=G>>3,w&=(1<<(G-=ve<<3))-1,b.next_in=y,b.next_out=I,b.avail_in=y<R?R-y+5:5-(y-R),b.avail_out=I<S?S-I+257:257-(I-S),f.hold=w,f.bits=G}},{}],49:[function(E,L,M){var b=E("../utils/common"),x=E("./adler32"),f=E("./crc32"),y=E("./inffast"),R=E("./inftrees"),I=1,A=2,S=0,d=-2,p=1,m=852,N=592;function _(k){return(k>>>24&255)+(k>>>8&65280)+((65280&k)<<8)+((255&k)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new b.Buf16(320),this.work=new b.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function G(k){var J;return k&&k.state?(J=k.state,k.total_in=k.total_out=J.total=0,k.msg="",J.wrap&&(k.adler=1&J.wrap),J.mode=p,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new b.Buf32(m),J.distcode=J.distdyn=new b.Buf32(N),J.sane=1,J.back=-1,S):d}function $(k){var J;return k&&k.state?((J=k.state).wsize=0,J.whave=0,J.wnext=0,G(k)):d}function Z(k,J){var h,fe;return k&&k.state?(fe=k.state,J<0?(h=0,J=-J):(h=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?d:(fe.window!==null&&fe.wbits!==J&&(fe.window=null),fe.wrap=h,fe.wbits=J,$(k))):d}function re(k,J){var h,fe;return k?(fe=new w,(k.state=fe).window=null,(h=Z(k,J))!==S&&(k.state=null),h):d}var te,he,W=!0;function ve(k){if(W){var J;for(te=new b.Buf32(512),he=new b.Buf32(32),J=0;J<144;)k.lens[J++]=8;for(;J<256;)k.lens[J++]=9;for(;J<280;)k.lens[J++]=7;for(;J<288;)k.lens[J++]=8;for(R(I,k.lens,0,288,te,0,k.work,{bits:9}),J=0;J<32;)k.lens[J++]=5;R(A,k.lens,0,32,he,0,k.work,{bits:5}),W=!1}k.lencode=te,k.lenbits=9,k.distcode=he,k.distbits=5}function Ae(k,J,h,fe){var de,ne=k.state;return ne.window===null&&(ne.wsize=1<<ne.wbits,ne.wnext=0,ne.whave=0,ne.window=new b.Buf8(ne.wsize)),fe>=ne.wsize?(b.arraySet(ne.window,J,h-ne.wsize,ne.wsize,0),ne.wnext=0,ne.whave=ne.wsize):(fe<(de=ne.wsize-ne.wnext)&&(de=fe),b.arraySet(ne.window,J,h-fe,de,ne.wnext),(fe-=de)?(b.arraySet(ne.window,J,h-fe,fe,0),ne.wnext=fe,ne.whave=ne.wsize):(ne.wnext+=de,ne.wnext===ne.wsize&&(ne.wnext=0),ne.whave<ne.wsize&&(ne.whave+=de))),0}M.inflateReset=$,M.inflateReset2=Z,M.inflateResetKeep=G,M.inflateInit=function(k){return re(k,15)},M.inflateInit2=re,M.inflate=function(k,J){var h,fe,de,ne,Ne,oe,De,q,C,pe,ue,ge,tn,cn,Ce,qe,yn,hn,Pn,dt,u,ie,le,O,T=0,X=new b.Buf8(4),ce=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return d;(h=k.state).mode===12&&(h.mode=13),Ne=k.next_out,de=k.output,De=k.avail_out,ne=k.next_in,fe=k.input,oe=k.avail_in,q=h.hold,C=h.bits,pe=oe,ue=De,ie=S;e:for(;;)switch(h.mode){case p:if(h.wrap===0){h.mode=13;break}for(;C<16;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(2&h.wrap&&q===35615){X[h.check=0]=255&q,X[1]=q>>>8&255,h.check=f(h.check,X,2,0),C=q=0,h.mode=2;break}if(h.flags=0,h.head&&(h.head.done=!1),!(1&h.wrap)||(((255&q)<<8)+(q>>8))%31){k.msg="incorrect header check",h.mode=30;break}if((15&q)!=8){k.msg="unknown compression method",h.mode=30;break}if(C-=4,u=8+(15&(q>>>=4)),h.wbits===0)h.wbits=u;else if(u>h.wbits){k.msg="invalid window size",h.mode=30;break}h.dmax=1<<u,k.adler=h.check=1,h.mode=512&q?10:12,C=q=0;break;case 2:for(;C<16;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(h.flags=q,(255&h.flags)!=8){k.msg="unknown compression method",h.mode=30;break}if(57344&h.flags){k.msg="unknown header flags set",h.mode=30;break}h.head&&(h.head.text=q>>8&1),512&h.flags&&(X[0]=255&q,X[1]=q>>>8&255,h.check=f(h.check,X,2,0)),C=q=0,h.mode=3;case 3:for(;C<32;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.head&&(h.head.time=q),512&h.flags&&(X[0]=255&q,X[1]=q>>>8&255,X[2]=q>>>16&255,X[3]=q>>>24&255,h.check=f(h.check,X,4,0)),C=q=0,h.mode=4;case 4:for(;C<16;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.head&&(h.head.xflags=255&q,h.head.os=q>>8),512&h.flags&&(X[0]=255&q,X[1]=q>>>8&255,h.check=f(h.check,X,2,0)),C=q=0,h.mode=5;case 5:if(1024&h.flags){for(;C<16;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.length=q,h.head&&(h.head.extra_len=q),512&h.flags&&(X[0]=255&q,X[1]=q>>>8&255,h.check=f(h.check,X,2,0)),C=q=0}else h.head&&(h.head.extra=null);h.mode=6;case 6:if(1024&h.flags&&(oe<(ge=h.length)&&(ge=oe),ge&&(h.head&&(u=h.head.extra_len-h.length,h.head.extra||(h.head.extra=new Array(h.head.extra_len)),b.arraySet(h.head.extra,fe,ne,ge,u)),512&h.flags&&(h.check=f(h.check,fe,ge,ne)),oe-=ge,ne+=ge,h.length-=ge),h.length))break e;h.length=0,h.mode=7;case 7:if(2048&h.flags){if(oe===0)break e;for(ge=0;u=fe[ne+ge++],h.head&&u&&h.length<65536&&(h.head.name+=String.fromCharCode(u)),u&&ge<oe;);if(512&h.flags&&(h.check=f(h.check,fe,ge,ne)),oe-=ge,ne+=ge,u)break e}else h.head&&(h.head.name=null);h.length=0,h.mode=8;case 8:if(4096&h.flags){if(oe===0)break e;for(ge=0;u=fe[ne+ge++],h.head&&u&&h.length<65536&&(h.head.comment+=String.fromCharCode(u)),u&&ge<oe;);if(512&h.flags&&(h.check=f(h.check,fe,ge,ne)),oe-=ge,ne+=ge,u)break e}else h.head&&(h.head.comment=null);h.mode=9;case 9:if(512&h.flags){for(;C<16;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(q!==(65535&h.check)){k.msg="header crc mismatch",h.mode=30;break}C=q=0}h.head&&(h.head.hcrc=h.flags>>9&1,h.head.done=!0),k.adler=h.check=0,h.mode=12;break;case 10:for(;C<32;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}k.adler=h.check=_(q),C=q=0,h.mode=11;case 11:if(h.havedict===0)return k.next_out=Ne,k.avail_out=De,k.next_in=ne,k.avail_in=oe,h.hold=q,h.bits=C,2;k.adler=h.check=1,h.mode=12;case 12:if(J===5||J===6)break e;case 13:if(h.last){q>>>=7&C,C-=7&C,h.mode=27;break}for(;C<3;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}switch(h.last=1&q,C-=1,3&(q>>>=1)){case 0:h.mode=14;break;case 1:if(ve(h),h.mode=20,J!==6)break;q>>>=2,C-=2;break e;case 2:h.mode=17;break;case 3:k.msg="invalid block type",h.mode=30}q>>>=2,C-=2;break;case 14:for(q>>>=7&C,C-=7&C;C<32;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if((65535&q)!=(q>>>16^65535)){k.msg="invalid stored block lengths",h.mode=30;break}if(h.length=65535&q,C=q=0,h.mode=15,J===6)break e;case 15:h.mode=16;case 16:if(ge=h.length){if(oe<ge&&(ge=oe),De<ge&&(ge=De),ge===0)break e;b.arraySet(de,fe,ne,ge,Ne),oe-=ge,ne+=ge,De-=ge,Ne+=ge,h.length-=ge;break}h.mode=12;break;case 17:for(;C<14;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(h.nlen=257+(31&q),q>>>=5,C-=5,h.ndist=1+(31&q),q>>>=5,C-=5,h.ncode=4+(15&q),q>>>=4,C-=4,286<h.nlen||30<h.ndist){k.msg="too many length or distance symbols",h.mode=30;break}h.have=0,h.mode=18;case 18:for(;h.have<h.ncode;){for(;C<3;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.lens[ce[h.have++]]=7&q,q>>>=3,C-=3}for(;h.have<19;)h.lens[ce[h.have++]]=0;if(h.lencode=h.lendyn,h.lenbits=7,le={bits:h.lenbits},ie=R(0,h.lens,0,19,h.lencode,0,h.work,le),h.lenbits=le.bits,ie){k.msg="invalid code lengths set",h.mode=30;break}h.have=0,h.mode=19;case 19:for(;h.have<h.nlen+h.ndist;){for(;qe=(T=h.lencode[q&(1<<h.lenbits)-1])>>>16&255,yn=65535&T,!((Ce=T>>>24)<=C);){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(yn<16)q>>>=Ce,C-=Ce,h.lens[h.have++]=yn;else{if(yn===16){for(O=Ce+2;C<O;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(q>>>=Ce,C-=Ce,h.have===0){k.msg="invalid bit length repeat",h.mode=30;break}u=h.lens[h.have-1],ge=3+(3&q),q>>>=2,C-=2}else if(yn===17){for(O=Ce+3;C<O;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}C-=Ce,u=0,ge=3+(7&(q>>>=Ce)),q>>>=3,C-=3}else{for(O=Ce+7;C<O;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}C-=Ce,u=0,ge=11+(127&(q>>>=Ce)),q>>>=7,C-=7}if(h.have+ge>h.nlen+h.ndist){k.msg="invalid bit length repeat",h.mode=30;break}for(;ge--;)h.lens[h.have++]=u}}if(h.mode===30)break;if(h.lens[256]===0){k.msg="invalid code -- missing end-of-block",h.mode=30;break}if(h.lenbits=9,le={bits:h.lenbits},ie=R(I,h.lens,0,h.nlen,h.lencode,0,h.work,le),h.lenbits=le.bits,ie){k.msg="invalid literal/lengths set",h.mode=30;break}if(h.distbits=6,h.distcode=h.distdyn,le={bits:h.distbits},ie=R(A,h.lens,h.nlen,h.ndist,h.distcode,0,h.work,le),h.distbits=le.bits,ie){k.msg="invalid distances set",h.mode=30;break}if(h.mode=20,J===6)break e;case 20:h.mode=21;case 21:if(6<=oe&&258<=De){k.next_out=Ne,k.avail_out=De,k.next_in=ne,k.avail_in=oe,h.hold=q,h.bits=C,y(k,ue),Ne=k.next_out,de=k.output,De=k.avail_out,ne=k.next_in,fe=k.input,oe=k.avail_in,q=h.hold,C=h.bits,h.mode===12&&(h.back=-1);break}for(h.back=0;qe=(T=h.lencode[q&(1<<h.lenbits)-1])>>>16&255,yn=65535&T,!((Ce=T>>>24)<=C);){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(qe&&(240&qe)==0){for(hn=Ce,Pn=qe,dt=yn;qe=(T=h.lencode[dt+((q&(1<<hn+Pn)-1)>>hn)])>>>16&255,yn=65535&T,!(hn+(Ce=T>>>24)<=C);){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}q>>>=hn,C-=hn,h.back+=hn}if(q>>>=Ce,C-=Ce,h.back+=Ce,h.length=yn,qe===0){h.mode=26;break}if(32&qe){h.back=-1,h.mode=12;break}if(64&qe){k.msg="invalid literal/length code",h.mode=30;break}h.extra=15&qe,h.mode=22;case 22:if(h.extra){for(O=h.extra;C<O;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.length+=q&(1<<h.extra)-1,q>>>=h.extra,C-=h.extra,h.back+=h.extra}h.was=h.length,h.mode=23;case 23:for(;qe=(T=h.distcode[q&(1<<h.distbits)-1])>>>16&255,yn=65535&T,!((Ce=T>>>24)<=C);){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if((240&qe)==0){for(hn=Ce,Pn=qe,dt=yn;qe=(T=h.distcode[dt+((q&(1<<hn+Pn)-1)>>hn)])>>>16&255,yn=65535&T,!(hn+(Ce=T>>>24)<=C);){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}q>>>=hn,C-=hn,h.back+=hn}if(q>>>=Ce,C-=Ce,h.back+=Ce,64&qe){k.msg="invalid distance code",h.mode=30;break}h.offset=yn,h.extra=15&qe,h.mode=24;case 24:if(h.extra){for(O=h.extra;C<O;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}h.offset+=q&(1<<h.extra)-1,q>>>=h.extra,C-=h.extra,h.back+=h.extra}if(h.offset>h.dmax){k.msg="invalid distance too far back",h.mode=30;break}h.mode=25;case 25:if(De===0)break e;if(ge=ue-De,h.offset>ge){if((ge=h.offset-ge)>h.whave&&h.sane){k.msg="invalid distance too far back",h.mode=30;break}tn=ge>h.wnext?(ge-=h.wnext,h.wsize-ge):h.wnext-ge,ge>h.length&&(ge=h.length),cn=h.window}else cn=de,tn=Ne-h.offset,ge=h.length;for(De<ge&&(ge=De),De-=ge,h.length-=ge;de[Ne++]=cn[tn++],--ge;);h.length===0&&(h.mode=21);break;case 26:if(De===0)break e;de[Ne++]=h.length,De--,h.mode=21;break;case 27:if(h.wrap){for(;C<32;){if(oe===0)break e;oe--,q|=fe[ne++]<<C,C+=8}if(ue-=De,k.total_out+=ue,h.total+=ue,ue&&(k.adler=h.check=h.flags?f(h.check,de,ue,Ne-ue):x(h.check,de,ue,Ne-ue)),ue=De,(h.flags?q:_(q))!==h.check){k.msg="incorrect data check",h.mode=30;break}C=q=0}h.mode=28;case 28:if(h.wrap&&h.flags){for(;C<32;){if(oe===0)break e;oe--,q+=fe[ne++]<<C,C+=8}if(q!==(4294967295&h.total)){k.msg="incorrect length check",h.mode=30;break}C=q=0}h.mode=29;case 29:ie=1;break e;case 30:ie=-3;break e;case 31:return-4;case 32:default:return d}return k.next_out=Ne,k.avail_out=De,k.next_in=ne,k.avail_in=oe,h.hold=q,h.bits=C,(h.wsize||ue!==k.avail_out&&h.mode<30&&(h.mode<27||J!==4))&&Ae(k,k.output,k.next_out,ue-k.avail_out)?(h.mode=31,-4):(pe-=k.avail_in,ue-=k.avail_out,k.total_in+=pe,k.total_out+=ue,h.total+=ue,h.wrap&&ue&&(k.adler=h.check=h.flags?f(h.check,de,ue,k.next_out-ue):x(h.check,de,ue,k.next_out-ue)),k.data_type=h.bits+(h.last?64:0)+(h.mode===12?128:0)+(h.mode===20||h.mode===15?256:0),(pe==0&&ue===0||J===4)&&ie===S&&(ie=-5),ie)},M.inflateEnd=function(k){if(!k||!k.state)return d;var J=k.state;return J.window&&(J.window=null),k.state=null,S},M.inflateGetHeader=function(k,J){var h;return k&&k.state?(2&(h=k.state).wrap)==0?d:((h.head=J).done=!1,S):d},M.inflateSetDictionary=function(k,J){var h,fe=J.length;return k&&k.state?(h=k.state).wrap!==0&&h.mode!==11?d:h.mode===11&&x(1,J,fe,0)!==h.check?-3:Ae(k,J,fe,fe)?(h.mode=31,-4):(h.havedict=1,S):d},M.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(E,L,M){var b=E("../utils/common"),x=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],y=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],R=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];L.exports=function(I,A,S,d,p,m,N,_){var w,G,$,Z,re,te,he,W,ve,Ae=_.bits,k=0,J=0,h=0,fe=0,de=0,ne=0,Ne=0,oe=0,De=0,q=0,C=null,pe=0,ue=new b.Buf16(16),ge=new b.Buf16(16),tn=null,cn=0;for(k=0;k<=15;k++)ue[k]=0;for(J=0;J<d;J++)ue[A[S+J]]++;for(de=Ae,fe=15;1<=fe&&ue[fe]===0;fe--);if(fe<de&&(de=fe),fe===0)return p[m++]=20971520,p[m++]=20971520,_.bits=1,0;for(h=1;h<fe&&ue[h]===0;h++);for(de<h&&(de=h),k=oe=1;k<=15;k++)if(oe<<=1,(oe-=ue[k])<0)return-1;if(0<oe&&(I===0||fe!==1))return-1;for(ge[1]=0,k=1;k<15;k++)ge[k+1]=ge[k]+ue[k];for(J=0;J<d;J++)A[S+J]!==0&&(N[ge[A[S+J]]++]=J);if(te=I===0?(C=tn=N,19):I===1?(C=x,pe-=257,tn=f,cn-=257,256):(C=y,tn=R,-1),k=h,re=m,Ne=J=q=0,$=-1,Z=(De=1<<(ne=de))-1,I===1&&852<De||I===2&&592<De)return 1;for(;;){for(he=k-Ne,ve=N[J]<te?(W=0,N[J]):N[J]>te?(W=tn[cn+N[J]],C[pe+N[J]]):(W=96,0),w=1<<k-Ne,h=G=1<<ne;p[re+(q>>Ne)+(G-=w)]=he<<24|W<<16|ve|0,G!==0;);for(w=1<<k-1;q&w;)w>>=1;if(w!==0?(q&=w-1,q+=w):q=0,J++,--ue[k]==0){if(k===fe)break;k=A[S+N[J]]}if(de<k&&(q&Z)!==$){for(Ne===0&&(Ne=de),re+=h,oe=1<<(ne=k-Ne);ne+Ne<fe&&!((oe-=ue[ne+Ne])<=0);)ne++,oe<<=1;if(De+=1<<ne,I===1&&852<De||I===2&&592<De)return 1;p[$=q&Z]=de<<24|ne<<16|re-m|0}}return q!==0&&(p[re+q]=k-Ne<<24|64<<16|0),_.bits=de,0}},{"../utils/common":41}],51:[function(E,L,M){L.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(E,L,M){var b=E("../utils/common"),x=0,f=1;function y(T){for(var X=T.length;0<=--X;)T[X]=0}var R=0,I=29,A=256,S=A+1+I,d=30,p=19,m=2*S+1,N=15,_=16,w=7,G=256,$=16,Z=17,re=18,te=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],he=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ve=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ae=new Array(2*(S+2));y(Ae);var k=new Array(2*d);y(k);var J=new Array(512);y(J);var h=new Array(256);y(h);var fe=new Array(I);y(fe);var de,ne,Ne,oe=new Array(d);function De(T,X,ce,be,B){this.static_tree=T,this.extra_bits=X,this.extra_base=ce,this.elems=be,this.max_length=B,this.has_stree=T&&T.length}function q(T,X){this.dyn_tree=T,this.max_code=0,this.stat_desc=X}function C(T){return T<256?J[T]:J[256+(T>>>7)]}function pe(T,X){T.pending_buf[T.pending++]=255&X,T.pending_buf[T.pending++]=X>>>8&255}function ue(T,X,ce){T.bi_valid>_-ce?(T.bi_buf|=X<<T.bi_valid&65535,pe(T,T.bi_buf),T.bi_buf=X>>_-T.bi_valid,T.bi_valid+=ce-_):(T.bi_buf|=X<<T.bi_valid&65535,T.bi_valid+=ce)}function ge(T,X,ce){ue(T,ce[2*X],ce[2*X+1])}function tn(T,X){for(var ce=0;ce|=1&T,T>>>=1,ce<<=1,0<--X;);return ce>>>1}function cn(T,X,ce){var be,B,se=new Array(N+1),Ee=0;for(be=1;be<=N;be++)se[be]=Ee=Ee+ce[be-1]<<1;for(B=0;B<=X;B++){var we=T[2*B+1];we!==0&&(T[2*B]=tn(se[we]++,we))}}function Ce(T){var X;for(X=0;X<S;X++)T.dyn_ltree[2*X]=0;for(X=0;X<d;X++)T.dyn_dtree[2*X]=0;for(X=0;X<p;X++)T.bl_tree[2*X]=0;T.dyn_ltree[2*G]=1,T.opt_len=T.static_len=0,T.last_lit=T.matches=0}function qe(T){8<T.bi_valid?pe(T,T.bi_buf):0<T.bi_valid&&(T.pending_buf[T.pending++]=T.bi_buf),T.bi_buf=0,T.bi_valid=0}function yn(T,X,ce,be){var B=2*X,se=2*ce;return T[B]<T[se]||T[B]===T[se]&&be[X]<=be[ce]}function hn(T,X,ce){for(var be=T.heap[ce],B=ce<<1;B<=T.heap_len&&(B<T.heap_len&&yn(X,T.heap[B+1],T.heap[B],T.depth)&&B++,!yn(X,be,T.heap[B],T.depth));)T.heap[ce]=T.heap[B],ce=B,B<<=1;T.heap[ce]=be}function Pn(T,X,ce){var be,B,se,Ee,we=0;if(T.last_lit!==0)for(;be=T.pending_buf[T.d_buf+2*we]<<8|T.pending_buf[T.d_buf+2*we+1],B=T.pending_buf[T.l_buf+we],we++,be===0?ge(T,B,X):(ge(T,(se=h[B])+A+1,X),(Ee=te[se])!==0&&ue(T,B-=fe[se],Ee),ge(T,se=C(--be),ce),(Ee=he[se])!==0&&ue(T,be-=oe[se],Ee)),we<T.last_lit;);ge(T,G,X)}function dt(T,X){var ce,be,B,se=X.dyn_tree,Ee=X.stat_desc.static_tree,we=X.stat_desc.has_stree,ze=X.stat_desc.elems,ke=-1;for(T.heap_len=0,T.heap_max=m,ce=0;ce<ze;ce++)se[2*ce]!==0?(T.heap[++T.heap_len]=ke=ce,T.depth[ce]=0):se[2*ce+1]=0;for(;T.heap_len<2;)se[2*(B=T.heap[++T.heap_len]=ke<2?++ke:0)]=1,T.depth[B]=0,T.opt_len--,we&&(T.static_len-=Ee[2*B+1]);for(X.max_code=ke,ce=T.heap_len>>1;1<=ce;ce--)hn(T,se,ce);for(B=ze;ce=T.heap[1],T.heap[1]=T.heap[T.heap_len--],hn(T,se,1),be=T.heap[1],T.heap[--T.heap_max]=ce,T.heap[--T.heap_max]=be,se[2*B]=se[2*ce]+se[2*be],T.depth[B]=(T.depth[ce]>=T.depth[be]?T.depth[ce]:T.depth[be])+1,se[2*ce+1]=se[2*be+1]=B,T.heap[1]=B++,hn(T,se,1),2<=T.heap_len;);T.heap[--T.heap_max]=T.heap[1],(function(Pe,Fn){var ml,an,Ua,dn,la,At,lt=Fn.dyn_tree,hl=Fn.max_code,gl=Fn.stat_desc.static_tree,Xl=Fn.stat_desc.has_stree,Gt=Fn.stat_desc.extra_bits,g=Fn.stat_desc.extra_base,P=Fn.stat_desc.max_length,xe=0;for(dn=0;dn<=N;dn++)Pe.bl_count[dn]=0;for(lt[2*Pe.heap[Pe.heap_max]+1]=0,ml=Pe.heap_max+1;ml<m;ml++)P<(dn=lt[2*lt[2*(an=Pe.heap[ml])+1]+1]+1)&&(dn=P,xe++),lt[2*an+1]=dn,hl<an||(Pe.bl_count[dn]++,la=0,g<=an&&(la=Gt[an-g]),At=lt[2*an],Pe.opt_len+=At*(dn+la),Xl&&(Pe.static_len+=At*(gl[2*an+1]+la)));if(xe!==0){do{for(dn=P-1;Pe.bl_count[dn]===0;)dn--;Pe.bl_count[dn]--,Pe.bl_count[dn+1]+=2,Pe.bl_count[P]--,xe-=2}while(0<xe);for(dn=P;dn!==0;dn--)for(an=Pe.bl_count[dn];an!==0;)hl<(Ua=Pe.heap[--ml])||(lt[2*Ua+1]!==dn&&(Pe.opt_len+=(dn-lt[2*Ua+1])*lt[2*Ua],lt[2*Ua+1]=dn),an--)}})(T,X),cn(se,ke,T.bl_count)}function u(T,X,ce){var be,B,se=-1,Ee=X[1],we=0,ze=7,ke=4;for(Ee===0&&(ze=138,ke=3),X[2*(ce+1)+1]=65535,be=0;be<=ce;be++)B=Ee,Ee=X[2*(be+1)+1],++we<ze&&B===Ee||(we<ke?T.bl_tree[2*B]+=we:B!==0?(B!==se&&T.bl_tree[2*B]++,T.bl_tree[2*$]++):we<=10?T.bl_tree[2*Z]++:T.bl_tree[2*re]++,se=B,ke=(we=0)===Ee?(ze=138,3):B===Ee?(ze=6,3):(ze=7,4))}function ie(T,X,ce){var be,B,se=-1,Ee=X[1],we=0,ze=7,ke=4;for(Ee===0&&(ze=138,ke=3),be=0;be<=ce;be++)if(B=Ee,Ee=X[2*(be+1)+1],!(++we<ze&&B===Ee)){if(we<ke)for(;ge(T,B,T.bl_tree),--we!=0;);else B!==0?(B!==se&&(ge(T,B,T.bl_tree),we--),ge(T,$,T.bl_tree),ue(T,we-3,2)):we<=10?(ge(T,Z,T.bl_tree),ue(T,we-3,3)):(ge(T,re,T.bl_tree),ue(T,we-11,7));se=B,ke=(we=0)===Ee?(ze=138,3):B===Ee?(ze=6,3):(ze=7,4)}}y(oe);var le=!1;function O(T,X,ce,be){ue(T,(R<<1)+(be?1:0),3),(function(B,se,Ee,we){qe(B),pe(B,Ee),pe(B,~Ee),b.arraySet(B.pending_buf,B.window,se,Ee,B.pending),B.pending+=Ee})(T,X,ce)}M._tr_init=function(T){le||((function(){var X,ce,be,B,se,Ee=new Array(N+1);for(B=be=0;B<I-1;B++)for(fe[B]=be,X=0;X<1<<te[B];X++)h[be++]=B;for(h[be-1]=B,B=se=0;B<16;B++)for(oe[B]=se,X=0;X<1<<he[B];X++)J[se++]=B;for(se>>=7;B<d;B++)for(oe[B]=se<<7,X=0;X<1<<he[B]-7;X++)J[256+se++]=B;for(ce=0;ce<=N;ce++)Ee[ce]=0;for(X=0;X<=143;)Ae[2*X+1]=8,X++,Ee[8]++;for(;X<=255;)Ae[2*X+1]=9,X++,Ee[9]++;for(;X<=279;)Ae[2*X+1]=7,X++,Ee[7]++;for(;X<=287;)Ae[2*X+1]=8,X++,Ee[8]++;for(cn(Ae,S+1,Ee),X=0;X<d;X++)k[2*X+1]=5,k[2*X]=tn(X,5);de=new De(Ae,te,A+1,S,N),ne=new De(k,he,0,d,N),Ne=new De(new Array(0),W,0,p,w)})(),le=!0),T.l_desc=new q(T.dyn_ltree,de),T.d_desc=new q(T.dyn_dtree,ne),T.bl_desc=new q(T.bl_tree,Ne),T.bi_buf=0,T.bi_valid=0,Ce(T)},M._tr_stored_block=O,M._tr_flush_block=function(T,X,ce,be){var B,se,Ee=0;0<T.level?(T.strm.data_type===2&&(T.strm.data_type=(function(we){var ze,ke=4093624447;for(ze=0;ze<=31;ze++,ke>>>=1)if(1&ke&&we.dyn_ltree[2*ze]!==0)return x;if(we.dyn_ltree[18]!==0||we.dyn_ltree[20]!==0||we.dyn_ltree[26]!==0)return f;for(ze=32;ze<A;ze++)if(we.dyn_ltree[2*ze]!==0)return f;return x})(T)),dt(T,T.l_desc),dt(T,T.d_desc),Ee=(function(we){var ze;for(u(we,we.dyn_ltree,we.l_desc.max_code),u(we,we.dyn_dtree,we.d_desc.max_code),dt(we,we.bl_desc),ze=p-1;3<=ze&&we.bl_tree[2*ve[ze]+1]===0;ze--);return we.opt_len+=3*(ze+1)+5+5+4,ze})(T),B=T.opt_len+3+7>>>3,(se=T.static_len+3+7>>>3)<=B&&(B=se)):B=se=ce+5,ce+4<=B&&X!==-1?O(T,X,ce,be):T.strategy===4||se===B?(ue(T,2+(be?1:0),3),Pn(T,Ae,k)):(ue(T,4+(be?1:0),3),(function(we,ze,ke,Pe){var Fn;for(ue(we,ze-257,5),ue(we,ke-1,5),ue(we,Pe-4,4),Fn=0;Fn<Pe;Fn++)ue(we,we.bl_tree[2*ve[Fn]+1],3);ie(we,we.dyn_ltree,ze-1),ie(we,we.dyn_dtree,ke-1)})(T,T.l_desc.max_code+1,T.d_desc.max_code+1,Ee+1),Pn(T,T.dyn_ltree,T.dyn_dtree)),Ce(T),be&&qe(T)},M._tr_tally=function(T,X,ce){return T.pending_buf[T.d_buf+2*T.last_lit]=X>>>8&255,T.pending_buf[T.d_buf+2*T.last_lit+1]=255&X,T.pending_buf[T.l_buf+T.last_lit]=255&ce,T.last_lit++,X===0?T.dyn_ltree[2*ce]++:(T.matches++,X--,T.dyn_ltree[2*(h[ce]+A+1)]++,T.dyn_dtree[2*C(X)]++),T.last_lit===T.lit_bufsize-1},M._tr_align=function(T){ue(T,2,3),ge(T,G,Ae),(function(X){X.bi_valid===16?(pe(X,X.bi_buf),X.bi_buf=0,X.bi_valid=0):8<=X.bi_valid&&(X.pending_buf[X.pending++]=255&X.bi_buf,X.bi_buf>>=8,X.bi_valid-=8)})(T)}},{"../utils/common":41}],53:[function(E,L,M){L.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(E,L,M){(function(b){(function(x,f){if(!x.setImmediate){var y,R,I,A,S=1,d={},p=!1,m=x.document,N=Object.getPrototypeOf&&Object.getPrototypeOf(x);N=N&&N.setTimeout?N:x,y={}.toString.call(x.process)==="[object process]"?function($){process.nextTick(function(){w($)})}:(function(){if(x.postMessage&&!x.importScripts){var $=!0,Z=x.onmessage;return x.onmessage=function(){$=!1},x.postMessage("","*"),x.onmessage=Z,$}})()?(A="setImmediate$"+Math.random()+"$",x.addEventListener?x.addEventListener("message",G,!1):x.attachEvent("onmessage",G),function($){x.postMessage(A+$,"*")}):x.MessageChannel?((I=new MessageChannel).port1.onmessage=function($){w($.data)},function($){I.port2.postMessage($)}):m&&"onreadystatechange"in m.createElement("script")?(R=m.documentElement,function($){var Z=m.createElement("script");Z.onreadystatechange=function(){w($),Z.onreadystatechange=null,R.removeChild(Z),Z=null},R.appendChild(Z)}):function($){setTimeout(w,0,$)},N.setImmediate=function($){typeof $!="function"&&($=new Function(""+$));for(var Z=new Array(arguments.length-1),re=0;re<Z.length;re++)Z[re]=arguments[re+1];var te={callback:$,args:Z};return d[S]=te,y(S),S++},N.clearImmediate=_}function _($){delete d[$]}function w($){if(p)setTimeout(w,0,$);else{var Z=d[$];if(Z){p=!0;try{(function(re){var te=re.callback,he=re.args;switch(he.length){case 0:te();break;case 1:te(he[0]);break;case 2:te(he[0],he[1]);break;case 3:te(he[0],he[1],he[2]);break;default:te.apply(f,he)}})(Z)}finally{_($),p=!1}}}}function G($){$.source===x&&typeof $.data=="string"&&$.data.indexOf(A)===0&&w(+$.data.slice(A.length))}})(typeof self>"u"?b===void 0?this:b:self)}).call(this,typeof Pd<"u"?Pd:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(p0)),p0.exports}var U4=I4();const V4=g0(U4),B4=Object.assign({"../.github/workflows/deploy.yml":m4,"../.gitignore":h4,"../App.tsx":g4,"../README.md":b4,"../components/DilutionModal.tsx":v4,"../components/DrugCard.tsx":y4,"../components/ExportModal.tsx":x4,"../components/GithubGuideModal.tsx":_4,"../components/OfflineIndicator.tsx":N4,"../components/PWAInstallButton.tsx":w4,"../constants.ts":S4,"../hooks/useOnlineStatus.ts":E4,"../hooks/usePWAInstall.ts":M4,"../index.css":D4,"../index.html":T4,"../index.tsx":C4,"../package-lock.json":A4,"../package.json":O4,"../public/icon.svg":R4,"../tsconfig.json":j4,"../types.ts":z4,"../vite.config.ts":k4});async function bN(){const Q=new V4;for(const[M,b]of Object.entries(B4)){const x=M.replace(/^\.\.\//,"");typeof b=="string"&&Q.file(x,b)}const F=await Q.generateAsync({type:"blob"}),E=URL.createObjectURL(F),L=document.createElement("a");L.href=E,L.download="calculadora-doses-emergencia.zip",document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(E)}const H4=({isOpen:Q,onClose:F})=>{const[E,L]=on.useState(!1),[M,b]=on.useState(!1);if(!Q)return null;const x=Zl.reduce((S,d)=>S+d.drugs.length,0),f=async()=>{try{b(!0),await bN()}catch(S){console.error("Falha ao gerar ZIP:",S)}finally{b(!1)}},y=()=>Zl.map(S=>({category:S.name,drugs:S.drugs.map(d=>({name:d.name,description:d.description,calculationType:d.calculationType,unit:d.unit,defaultDose:d.defaultDose,doseRange:d.doseRange,notes:d.notes,maxTotalDoseMg:d.maxTotalDoseMg,presentations:d.presentations,dilutions:d.dilutions}))})),R=()=>{const S=y(),d=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),p=URL.createObjectURL(d),m=document.createElement("a");m.href=p,m.download="medicamentos-emergencia.json",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(p)},I=()=>{const S=["Categoria","Medicamento","Tipo de Cálculo","Unidade","Dose Padrão","Faixa de Dose","Dose Máxima (mg)","Apresentações Comerciais","Diluições Recomendadas","Observações Clínicas"],d=[];Zl.forEach(w=>{w.drugs.forEach(G=>{const $=(G.presentations||[]).map(re=>`${re.label} (${re.concentrationMg}mg/${re.volumeMl}ml)`).join(" | "),Z=(G.dilutions||[]).map(re=>`${re.name}: ${re.description} [${re.useCase}]`).join(" | ");d.push([`"${w.name.replace(/"/g,'""')}"`,`"${G.name.replace(/"/g,'""')}"`,`"${G.calculationType.replace(/"/g,'""')}"`,`"${G.unit.replace(/"/g,'""')}"`,`"${G.defaultDose}"`,`"${G.doseRange.replace(/"/g,'""')}"`,`"${G.maxTotalDoseMg??""}"`,`"${$.replace(/"/g,'""')}"`,`"${Z.replace(/"/g,'""')}"`,`"${G.notes.replace(/"/g,'""')}"`])})});const p="\uFEFF"+[S.join(","),...d.map(w=>w.join(","))].join(`
`),m=new Blob([p],{type:"text/csv;charset=utf-8;"}),N=URL.createObjectURL(m),_=document.createElement("a");_.href=N,_.download="medicamentos-emergencia.csv",document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(N)},A=()=>{const S=y();navigator.clipboard.writeText(JSON.stringify(S,null,2)),L(!0),setTimeout(()=>L(!1),2e3)};return v.jsxDEV("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:v.jsxDEV("div",{className:"bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto",children:[v.jsxDEV("div",{className:"flex items-center justify-between pb-3 border-b border-slate-700",children:[v.jsxDEV("div",{className:"flex items-center gap-3",children:[v.jsxDEV("div",{className:"p-2 bg-cyan-500/20 text-cyan-400 rounded-lg",children:v.jsxDEV(Si,{className:"w-6 h-6"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:128,columnNumber:15},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:127,columnNumber:13},void 0),v.jsxDEV("div",{children:[v.jsxDEV("h2",{className:"text-xl font-bold text-white",children:"Exportar Dados Clínicos"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:131,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-xs text-slate-400",children:["Total de ",x," medicamentos em ",Zl.length," categorias"]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:132,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:130,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:126,columnNumber:11},void 0),v.jsxDEV("button",{onClick:F,className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors",children:v.jsxDEV(v0,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:139,columnNumber:13},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:135,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:125,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-start gap-3 text-xs text-emerald-200",children:[v.jsxDEV(b0,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:144,columnNumber:11},void 0),v.jsxDEV("div",{children:[v.jsxDEV("strong",{className:"block font-semibold text-emerald-300",children:"100% Livre de Dependências e APIs"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:146,columnNumber:13},void 0),"Todos esses dados residem estaticamente no código. Eles podem ser portados para qualquer sistema, aplicativo mobile, banco de dados ou planilha sem necessidade de conexão com servidores."]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:145,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:143,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-4 bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-700/60 rounded-xl space-y-3",children:[v.jsxDEV("div",{className:"flex items-start justify-between gap-3",children:v.jsxDEV("div",{className:"flex items-center gap-2.5",children:[v.jsxDEV("div",{className:"p-2 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0",children:v.jsxDEV(P_,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:155,columnNumber:17},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:154,columnNumber:15},void 0),v.jsxDEV("div",{children:[v.jsxDEV("h3",{className:"text-sm font-bold text-white",children:"Baixar Projeto Completo (.ZIP)"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:158,columnNumber:17},void 0),v.jsxDEV("p",{className:"text-xs text-slate-300",children:"Baixe todos os arquivos prontos para subir ao GitHub (código React, Tailwind, GitHub Actions, README e fórmulas)."},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:159,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:157,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:153,columnNumber:13},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:152,columnNumber:11},void 0),v.jsxDEV("button",{onClick:f,disabled:M,className:"w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md",children:M?v.jsxDEV(v.Fragment,{children:[v.jsxDEV(oN,{className:"w-4 h-4 animate-spin"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:172,columnNumber:17},void 0),v.jsxDEV("span",{children:"Empacotando projeto..."},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:173,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:171,columnNumber:15},void 0):v.jsxDEV(v.Fragment,{children:[v.jsxDEV(Si,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:177,columnNumber:17},void 0),v.jsxDEV("span",{children:"Baixar Código-Fonte Completo (.zip)"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:178,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:176,columnNumber:15},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:165,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:151,columnNumber:9},void 0),v.jsxDEV("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[v.jsxDEV("div",{className:"bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3",children:[v.jsxDEV("div",{children:[v.jsxDEV("div",{className:"flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1",children:[v.jsxDEV(l4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:188,columnNumber:17},void 0)," Formato JSON"]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:187,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-xs text-slate-400",children:"Ideal para desenvolvedores, APIs locais, banco de dados NoSQL ou integração com novos softwares."},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:190,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:186,columnNumber:13},void 0),v.jsxDEV("div",{className:"flex gap-2",children:[v.jsxDEV("button",{onClick:R,className:"flex-1 flex items-center justify-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold px-3 py-2 rounded-md text-xs transition-colors",children:[v.jsxDEV(Si,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:199,columnNumber:17},void 0)," Baixar .json"]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:195,columnNumber:15},void 0),v.jsxDEV("button",{onClick:A,className:"flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-2 rounded-md text-xs transition-colors",title:"Copiar JSON",children:E?v.jsxDEV(Nu,{className:"w-3.5 h-3.5 text-emerald-400"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:206,columnNumber:31},void 0):"Copiar"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:201,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:194,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:185,columnNumber:11},void 0),v.jsxDEV("div",{className:"bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col justify-between space-y-3",children:[v.jsxDEV("div",{children:[v.jsxDEV("div",{className:"flex items-center gap-2 text-emerald-300 font-semibold text-sm mb-1",children:[v.jsxDEV(o4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:214,columnNumber:17},void 0)," Formato CSV / Excel"]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:213,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-xs text-slate-400",children:"Abre no Microsoft Excel, Google Planilhas ou LibreOffice com todas as colunas de dosagens e diluições."},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:216,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:212,columnNumber:13},void 0),v.jsxDEV("button",{onClick:I,className:"w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-2 rounded-md text-xs transition-colors",children:[v.jsxDEV(Si,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:224,columnNumber:15},void 0)," Baixar .csv (Planilha)"]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:220,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:211,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:184,columnNumber:9},void 0),v.jsxDEV("div",{className:"text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800",children:[v.jsxDEV("p",{className:"font-semibold text-slate-300 mb-1",children:"Onde esses dados estão no repositório GitHub?"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:230,columnNumber:11},void 0),v.jsxDEV("p",{children:["No repositório que você clonar ou subir, o arquivo principal com todos os medicamentos, doses e fórmulas é o ",v.jsxDEV("code",{className:"text-cyan-300",children:"constants.ts"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:232,columnNumber:122},void 0),". Para adicionar uma droga nova, basta adicioná-la nesse arquivo."]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:231,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:229,columnNumber:9},void 0),v.jsxDEV("div",{className:"flex justify-end pt-2",children:v.jsxDEV("button",{onClick:F,className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors",children:"Fechar"},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:237,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:236,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:124,columnNumber:7},void 0)},void 0,!1,{fileName:"/app/applet/components/ExportModal.tsx",lineNumber:123,columnNumber:5},void 0)},G4=({isOpen:Q,onClose:F})=>{const[E,L]=on.useState(null),[M,b]=on.useState(!1),[x,f]=on.useState(!1);if(!Q)return null;const y=async()=>{try{f(!0),await bN()}catch(S){console.error("Falha ao gerar ZIP:",S)}finally{f(!1)}},R=[{title:"1. Iniciar o Git no projeto",cmd:"git init",desc:"Inicializa o controle de versão na pasta do projeto."},{title:"2. Adicionar todos os arquivos",cmd:"git add .",desc:"Prepara todos os componentes, constantes médicas e configurações."},{title:"3. Fazer o primeiro commit",cmd:'git commit -m "feat: Calculadora de doses de emergência (100% offline)"',desc:"Salva o histórico da versão inicial."},{title:"4. Definir a branch principal como main",cmd:"git branch -M main",desc:"Garante o padrão moderno do GitHub."},{title:"5. Conectar com o seu repositório no GitHub",cmd:"git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git",desc:'Substitua "SEU-USUARIO/SEU-REPOSITORIO" pelo link criado em github.com/new.'},{title:"6. Enviar o código para o GitHub",cmd:"git push -u origin main",desc:"Sobe todos os arquivos para a nuvem."}],I=`# Passo a passo completo para exportar para o GitHub:
git init
git add .
git commit -m "feat: Calculadora de doses de emergência (100% offline)"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main`,A=(S,d)=>{navigator.clipboard.writeText(S),typeof d=="number"?(L(d),setTimeout(()=>L(null),2e3)):(b(!0),setTimeout(()=>b(!1),2e3))};return v.jsxDEV("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:v.jsxDEV("div",{className:"bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-2xl w-full p-6 space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto",children:[v.jsxDEV("div",{className:"flex items-center justify-between pb-3 border-b border-slate-700",children:[v.jsxDEV("div",{className:"flex items-center gap-3",children:[v.jsxDEV("div",{className:"p-2 bg-indigo-500/20 text-indigo-400 rounded-lg",children:v.jsxDEV(h0,{className:"w-6 h-6"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:86,columnNumber:15},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:85,columnNumber:13},void 0),v.jsxDEV("div",{children:[v.jsxDEV("h2",{className:"text-xl font-bold text-white",children:"Como Exportar para o GitHub"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:89,columnNumber:15},void 0),v.jsxDEV("p",{className:"text-xs text-slate-400",children:"Guia de publicação autônoma & sem necessidade de API"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:90,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:88,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:84,columnNumber:11},void 0),v.jsxDEV("button",{onClick:F,className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors",children:v.jsxDEV(v0,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:97,columnNumber:13},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:93,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:83,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-2",children:[v.jsxDEV("div",{className:"flex items-center gap-2 text-emerald-300 font-bold text-sm",children:[v.jsxDEV(b0,{className:"w-5 h-5 text-emerald-400"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:104,columnNumber:13},void 0),v.jsxDEV("span",{children:"Funciona independentemente de API? SIM! 100% autônomo."},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:105,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:103,columnNumber:11},void 0),v.jsxDEV("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Esta calculadora é uma aplicação ",v.jsxDEV("strong",{children:"Client-Side pura (React + Vite + Tailwind)"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:108,columnNumber:46},void 0),". Todos os cálculos matemáticos clínicos (bolus em mg e mcg, bombas de infusão em mcg/kg/min, mg/kg/h, unidades de vasopressina e limites de segurança) rodam diretamente dentro do JavaScript do navegador do usuário."]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:107,columnNumber:11},void 0),v.jsxDEV("div",{className:"flex flex-wrap gap-2 pt-1 text-[11px] text-emerald-300",children:[v.jsxDEV("span",{className:"px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60",children:"✓ Zero chamadas de API"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:111,columnNumber:13},void 0),v.jsxDEV("span",{className:"px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60",children:"✓ Zero custos de servidor"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:112,columnNumber:13},void 0),v.jsxDEV("span",{className:"px-2 py-0.5 bg-emerald-900/60 rounded-full border border-emerald-700/60",children:"✓ Funciona offline no celular ou PC"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:113,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:110,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:102,columnNumber:9},void 0),v.jsxDEV("div",{className:"bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-700/60 rounded-xl p-4 space-y-3",children:[v.jsxDEV("div",{className:"flex items-center justify-between",children:[v.jsxDEV("div",{className:"flex items-center gap-2",children:[v.jsxDEV(P_,{className:"w-5 h-5 text-indigo-400"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:121,columnNumber:15},void 0),v.jsxDEV("h3",{className:"text-sm font-bold text-white",children:"Opção 1: Exportar direto por aqui (Download .ZIP)"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:122,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:120,columnNumber:13},void 0),v.jsxDEV("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full",children:"Mais Simples"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:124,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:119,columnNumber:11},void 0),v.jsxDEV("p",{className:"text-xs text-slate-300",children:["Você pode baixar todos os arquivos organizados neste exato momento. Depois, basta criar um repositório vazio no GitHub e arrastar os arquivos na opção ",v.jsxDEV("strong",{children:'"Upload files"'},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:129,columnNumber:164},void 0)," do site."]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:128,columnNumber:11},void 0),v.jsxDEV("button",{onClick:y,disabled:x,className:"w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm",children:x?v.jsxDEV(v.Fragment,{children:[v.jsxDEV(oN,{className:"w-4 h-4 animate-spin"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:138,columnNumber:17},void 0),v.jsxDEV("span",{children:"Empacotando projeto..."},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:139,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:137,columnNumber:15},void 0):v.jsxDEV(v.Fragment,{children:[v.jsxDEV(Si,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:143,columnNumber:17},void 0),v.jsxDEV("span",{children:"Baixar Projeto Completo para o GitHub (.ZIP)"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:144,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:142,columnNumber:15},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:131,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:118,columnNumber:9},void 0),v.jsxDEV("div",{className:"space-y-3",children:[v.jsxDEV("div",{className:"flex items-center justify-between",children:[v.jsxDEV("h3",{className:"text-sm font-semibold text-slate-200 flex items-center gap-2",children:[v.jsxDEV(f4,{className:"w-4 h-4 text-cyan-400"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:154,columnNumber:15},void 0),"Opção 2: Subir via Terminal com Git"]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:153,columnNumber:13},void 0),v.jsxDEV("button",{onClick:()=>A(I),className:"flex items-center gap-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-cyan-300 px-2.5 py-1 rounded transition-colors",children:[M?v.jsxDEV(Nu,{className:"w-3.5 h-3.5 text-emerald-400"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:161,columnNumber:28},void 0):v.jsxDEV(Y_,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:161,columnNumber:81},void 0),M?"Copiado!":"Copiar todos"]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:157,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:152,columnNumber:11},void 0),v.jsxDEV("div",{className:"space-y-2.5",children:R.map((S,d)=>v.jsxDEV("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 space-y-1.5",children:[v.jsxDEV("div",{className:"flex items-center justify-between text-xs",children:[v.jsxDEV("span",{className:"font-semibold text-slate-300",children:S.title},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:170,columnNumber:19},void 0),v.jsxDEV("button",{onClick:()=>A(S.cmd,d),className:"p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-cyan-300 transition-colors",title:"Copiar comando",children:E===d?v.jsxDEV(Nu,{className:"w-3.5 h-3.5 text-emerald-400"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:177,columnNumber:23},void 0):v.jsxDEV(Y_,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:179,columnNumber:23},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:171,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:169,columnNumber:17},void 0),v.jsxDEV("pre",{className:"text-xs bg-black/60 p-2 rounded text-cyan-300 font-mono overflow-x-auto selection:bg-cyan-500 selection:text-slate-900",children:S.cmd},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:183,columnNumber:17},void 0),v.jsxDEV("p",{className:"text-[11px] text-slate-400",children:S.desc},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:186,columnNumber:17},void 0)]},d,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:168,columnNumber:15},void 0))},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:166,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:151,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-4 bg-slate-900 border border-slate-700/80 rounded-xl space-y-2",children:[v.jsxDEV("div",{className:"flex items-center gap-2 text-cyan-300 font-bold text-sm",children:[v.jsxDEV(s4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:195,columnNumber:13},void 0),v.jsxDEV("span",{children:"Como colocar online de graça no GitHub Pages:"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:196,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:194,columnNumber:11},void 0),v.jsxDEV("ol",{className:"text-xs text-slate-300 list-decimal list-inside space-y-1",children:[v.jsxDEV("li",{children:["No GitHub, abra a aba ",v.jsxDEV("strong",{children:"Settings"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:199,columnNumber:39},void 0)," do seu repositório."]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:199,columnNumber:13},void 0),v.jsxDEV("li",{children:["No menu lateral, clique em ",v.jsxDEV("strong",{children:"Pages"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:200,columnNumber:44},void 0),"."]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:200,columnNumber:13},void 0),v.jsxDEV("li",{children:["Em ",v.jsxDEV("em",{children:"Build and deployment > Source"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:201,columnNumber:20},void 0),", selecione ",v.jsxDEV("strong",{children:"GitHub Actions"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:201,columnNumber:73},void 0),"."]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:201,columnNumber:13},void 0),v.jsxDEV("li",{children:["O arquivo ",v.jsxDEV("code",{className:"text-cyan-300",children:".github/workflows/deploy.yml"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:202,columnNumber:27},void 0)," (já incluído no projeto) fará o build e criará o seu link web público gratuito em segundos!"]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:202,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:198,columnNumber:11},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:193,columnNumber:9},void 0),v.jsxDEV("div",{className:"p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between",children:v.jsxDEV("span",{children:["Para rodar no seu computador: ",v.jsxDEV("code",{className:"text-cyan-300",children:"npm install"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:208,columnNumber:47},void 0)," e depois ",v.jsxDEV("code",{className:"text-cyan-300",children:"npm run dev"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:208,columnNumber:107},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:208,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:207,columnNumber:9},void 0),v.jsxDEV("div",{className:"flex justify-end pt-2",children:v.jsxDEV("button",{onClick:F,className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-slate-200 font-medium transition-colors",children:"Entendido, fechar"},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:212,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:211,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:82,columnNumber:7},void 0)},void 0,!1,{fileName:"/app/applet/components/GithubGuideModal.tsx",lineNumber:81,columnNumber:5},void 0)};function L4(){const[Q,F]=on.useState(null),[E,L]=on.useState(!1),[M,b]=on.useState(!1);return on.useEffect(()=>{const f=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;L(f);const y=window.navigator.userAgent.toLowerCase(),R=/iphone|ipad|ipod/.test(y);b(R);const I=S=>{S.preventDefault(),F(S)},A=()=>{L(!0),F(null)};return window.addEventListener("beforeinstallprompt",I),window.addEventListener("appinstalled",A),()=>{window.removeEventListener("beforeinstallprompt",I),window.removeEventListener("appinstalled",A)}},[]),{isInstallable:!!Q,isInstalled:E,isIOS:M,install:async()=>{if(!Q)return!1;await Q.prompt();const{outcome:f}=await Q.userChoice;return f==="accepted"?(L(!0),F(null),!0):!1}}}const q4=()=>{const{isInstallable:Q,isInstalled:F,isIOS:E,install:L}=L4(),[M,b]=on.useState(!1);return F?v.jsxDEV("span",{className:"hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2.5 py-1 rounded-lg",children:[v.jsxDEV(Nu,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:13,columnNumber:9},void 0)," App Instalado"]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:12,columnNumber:7},void 0):Q?v.jsxDEV("button",{onClick:L,className:"flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors",children:[v.jsxDEV(Si,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:25,columnNumber:9},void 0),v.jsxDEV("span",{children:"Instalar App"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:26,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:21,columnNumber:7},void 0):v.jsxDEV(v.Fragment,{children:[v.jsxDEV("button",{onClick:()=>b(!0),className:"flex items-center gap-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white shadow-md transition-colors",title:"Instalar este app no seu celular ou computador (PWA)",children:[v.jsxDEV(f0,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:39,columnNumber:9},void 0),v.jsxDEV("span",{children:"Instalar App"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:40,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:34,columnNumber:7},void 0),M&&v.jsxDEV("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150",children:v.jsxDEV("div",{className:"w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl text-slate-100 space-y-4",children:[v.jsxDEV("div",{className:"flex items-center justify-between pb-2 border-b border-slate-700",children:[v.jsxDEV("div",{className:"flex items-center gap-2.5",children:[v.jsxDEV("div",{className:"p-2 bg-emerald-500/20 text-emerald-400 rounded-lg",children:v.jsxDEV(f0,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:49,columnNumber:19},void 0)},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:48,columnNumber:17},void 0),v.jsxDEV("div",{children:[v.jsxDEV("h3",{className:"text-base font-bold text-white",children:"Instalar como Aplicativo (PWA)"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:52,columnNumber:19},void 0),v.jsxDEV("p",{className:"text-xs text-slate-400",children:"Funciona 100% offline no celular e no computador"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:53,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:51,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:47,columnNumber:15},void 0),v.jsxDEV("button",{onClick:()=>b(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors",children:v.jsxDEV(v0,{className:"w-5 h-5"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:60,columnNumber:17},void 0)},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:56,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:46,columnNumber:13},void 0),v.jsxDEV("div",{className:"space-y-3 text-xs text-slate-300",children:[E?v.jsxDEV("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[v.jsxDEV("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[v.jsxDEV(c4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:68,columnNumber:21},void 0)," No iPhone ou iPad (Safari):"]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:67,columnNumber:19},void 0),v.jsxDEV("ol",{className:"list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1",children:[v.jsxDEV("li",{children:["Toque no botão de ",v.jsxDEV("strong",{children:"Compartilhar"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:71,columnNumber:43},void 0)," (ícone de quadrado com seta para cima) na barra do Safari."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:71,columnNumber:21},void 0),v.jsxDEV("li",{children:["Role para baixo e toque em ",v.jsxDEV("strong",{children:'"Adicionar à Tela de Início"'},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:72,columnNumber:52},void 0),"."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:72,columnNumber:21},void 0),v.jsxDEV("li",{children:["Confirme tocando em ",v.jsxDEV("strong",{children:'"Adicionar"'},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:73,columnNumber:45},void 0)," no canto superior direito."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:73,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:70,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:66,columnNumber:17},void 0):v.jsxDEV("div",{className:"space-y-3",children:[v.jsxDEV("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[v.jsxDEV("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[v.jsxDEV(f0,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:80,columnNumber:23},void 0)," No Android (Chrome / Edge):"]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:79,columnNumber:21},void 0),v.jsxDEV("ol",{className:"list-decimal list-inside space-y-1.5 leading-relaxed text-slate-300 pl-1",children:[v.jsxDEV("li",{children:["Toque no menu de ",v.jsxDEV("strong",{children:"3 pontinhos (⋮)"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:83,columnNumber:44},void 0)," no canto superior do navegador."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:83,columnNumber:23},void 0),v.jsxDEV("li",{children:["Selecione ",v.jsxDEV("strong",{children:'"Instalar aplicativo"'},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:84,columnNumber:37},void 0)," ou ",v.jsxDEV("strong",{children:'"Adicionar à tela inicial"'},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:84,columnNumber:79},void 0),"."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:84,columnNumber:23},void 0),v.jsxDEV("li",{children:"Pronto! Ele abrirá em tela cheia como um app nativo."},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:85,columnNumber:23},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:82,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:78,columnNumber:19},void 0),v.jsxDEV("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-2",children:[v.jsxDEV("h4",{className:"font-semibold text-cyan-300 flex items-center gap-1.5 text-sm",children:[v.jsxDEV(d4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:91,columnNumber:23},void 0)," No Computador (Chrome / Edge / Brave):"]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:90,columnNumber:21},void 0),v.jsxDEV("p",{className:"leading-relaxed",children:["Clique no ícone de ",v.jsxDEV("strong",{children:"instalar"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:94,columnNumber:42},void 0)," (um monitor com seta para baixo) na barra de endereços do navegador à direita da URL."]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:93,columnNumber:21},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:89,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:77,columnNumber:17},void 0),v.jsxDEV("div",{className:"p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-lg text-emerald-300 flex items-start gap-2",children:[v.jsxDEV(Nu,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:101,columnNumber:17},void 0),v.jsxDEV("span",{children:[v.jsxDEV("strong",{children:"Vantagem do PWA:"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:103,columnNumber:19},void 0)," O app é salvo na memória do seu dispositivo e funciona mesmo no subsolo do hospital sem sinal de rede!"]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:102,columnNumber:17},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:100,columnNumber:15},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:64,columnNumber:13},void 0),v.jsxDEV("button",{onClick:()=>b(!1),className:"mt-2 w-full rounded-lg bg-slate-700 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-600 transition-colors",children:"Fechar"},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:45,columnNumber:11},void 0)},void 0,!1,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:44,columnNumber:9},void 0)]},void 0,!0,{fileName:"/app/applet/components/PWAInstallButton.tsx",lineNumber:33,columnNumber:5},void 0)};function Y4(){const[Q,F]=on.useState(typeof navigator<"u"?navigator.onLine:!0);return on.useEffect(()=>{const E=()=>F(!0),L=()=>F(!1);return window.addEventListener("online",E),window.addEventListener("offline",L),()=>{window.removeEventListener("online",E),window.removeEventListener("offline",L)}},[]),Q}const Z4=()=>Y4()?null:v.jsxDEV("div",{className:"fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-amber-400/40 animate-bounce",children:[v.jsxDEV(hN,{className:"w-4 h-4 text-amber-200"},void 0,!1,{fileName:"/app/applet/components/OfflineIndicator.tsx",lineNumber:12,columnNumber:7},void 0),v.jsxDEV("span",{children:"Modo Offline Ativo — Todos os cálculos continuam funcionando localmente."},void 0,!1,{fileName:"/app/applet/components/OfflineIndicator.tsx",lineNumber:13,columnNumber:7},void 0)]},void 0,!0,{fileName:"/app/applet/components/OfflineIndicator.tsx",lineNumber:11,columnNumber:5},void 0);function X4(){const[Q,F]=on.useState(70),[E,L]=on.useState(Zl[0].name),[M,b]=on.useState(""),[x,f]=on.useState(0),[y,R]=on.useState(!1),[I,A]=on.useState(!1),S=on.useMemo(()=>{var _;const m=M.trim().toLowerCase();return m?Zl.flatMap(w=>w.drugs.map(G=>({...G,categoryName:w.name}))).filter(w=>w.name.toLowerCase().includes(m)||w.description.toLowerCase().includes(m)||w.categoryName.toLowerCase().includes(m)||w.notes.toLowerCase().includes(m)):((_=Zl.find(w=>w.name===E))==null?void 0:_.drugs)||[]},[E,M]),d=()=>{F(70),b(""),L(Zl[0].name),f(m=>m+1)},p=[50,60,70,80,90,100];return v.jsxDEV("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans",children:[v.jsxDEV("header",{className:"bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-30 shadow-lg",children:v.jsxDEV("div",{className:"container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3",children:[v.jsxDEV("div",{className:"flex items-center gap-3",children:[v.jsxDEV("div",{className:"bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-xl text-cyan-400 flex items-center justify-center",children:v.jsxDEV(a4,{className:"w-6 h-6 animate-pulse"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:64,columnNumber:15},this)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:63,columnNumber:13},this),v.jsxDEV("div",{children:[v.jsxDEV("h1",{className:"text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2",children:"Calculadora de Doses de Emergência"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:67,columnNumber:15},this),v.jsxDEV("div",{className:"flex items-center gap-2 mt-0.5",children:[v.jsxDEV("span",{className:"inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-full",children:[v.jsxDEV(hN,{className:"w-3 h-3"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:72,columnNumber:19},this)," 100% Offline (Sem APIs)"]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:71,columnNumber:17},this),v.jsxDEV("span",{className:"hidden sm:inline-block text-[11px] text-slate-400",children:"Cálculo local direto no navegador"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:74,columnNumber:17},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:70,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:66,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:62,columnNumber:11},this),v.jsxDEV("div",{className:"flex items-center gap-2",children:[v.jsxDEV(q4,{},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:83,columnNumber:13},this),v.jsxDEV("button",{onClick:()=>R(!0),className:"flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors shadow-sm",title:"Exportar dados para JSON ou CSV",children:[v.jsxDEV(Si,{className:"w-4 h-4 text-cyan-400"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:89,columnNumber:15},this),v.jsxDEV("span",{children:"Exportar Dados"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:90,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:84,columnNumber:13},this),v.jsxDEV("button",{onClick:()=>A(!0),className:"flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm",title:"Ver comandos para exportar para o GitHub",children:[v.jsxDEV(h0,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:97,columnNumber:15},this),v.jsxDEV("span",{children:"Como subir no GitHub"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:98,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:92,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:82,columnNumber:11},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:61,columnNumber:9},this)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:60,columnNumber:7},this),v.jsxDEV("main",{className:"container mx-auto px-4 py-6 flex-grow space-y-6",children:[v.jsxDEV("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[v.jsxDEV("div",{className:"lg:col-span-8 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md",children:[v.jsxDEV("div",{className:"flex items-center justify-between mb-2",children:[v.jsxDEV("label",{htmlFor:"weight",className:"text-sm font-semibold text-cyan-300 flex items-center gap-1.5",children:"Peso do Paciente (kg)"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:111,columnNumber:15},this),v.jsxDEV("span",{className:"text-xs text-slate-400",children:"Todos os cálculos ajustam-se instantaneamente"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:114,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:110,columnNumber:13},this),v.jsxDEV("div",{className:"flex gap-3 items-center",children:[v.jsxDEV("div",{className:"relative flex-grow",children:[v.jsxDEV("input",{id:"weight",type:"number",min:"1",max:"300",step:"0.5",value:Q||"",onChange:m=>F(parseFloat(m.target.value)||0),placeholder:"Ex: 70",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:118,columnNumber:17},this),v.jsxDEV("span",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg pointer-events-none",children:"kg"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:129,columnNumber:17},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:117,columnNumber:15},this),v.jsxDEV("button",{onClick:d,className:"px-3 py-3 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-colors flex items-center gap-1.5 text-xs font-semibold",title:"Redefinir peso e campos",children:[v.jsxDEV(r4,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:138,columnNumber:17},this),v.jsxDEV("span",{className:"hidden sm:inline",children:"Resetar"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:139,columnNumber:17},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:133,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:116,columnNumber:13},this),v.jsxDEV("div",{className:"mt-3 flex items-center gap-2 flex-wrap text-xs",children:[v.jsxDEV("span",{className:"text-slate-400 font-medium",children:"Pesos frequentes:"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:145,columnNumber:15},this),p.map(m=>v.jsxDEV("button",{onClick:()=>F(m),className:`px-3 py-1 font-semibold rounded-md transition-all ${Q===m?"bg-cyan-500 text-slate-900 shadow-md shadow-cyan-500/20":"bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white"}`,children:[m," kg"]},m,!0,{fileName:"/app/applet/App.tsx",lineNumber:147,columnNumber:17},this))]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:144,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:109,columnNumber:11},this),v.jsxDEV("div",{className:"lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 md:p-5 shadow-md flex flex-col justify-between",children:[v.jsxDEV("div",{children:[v.jsxDEV("label",{htmlFor:"search",className:"text-sm font-semibold text-slate-300 flex items-center gap-1.5 mb-2",children:[v.jsxDEV(u4,{className:"w-4 h-4 text-cyan-400"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:166,columnNumber:17},this),"Busca Rápida de Medicamentos"]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:165,columnNumber:15},this),v.jsxDEV("div",{className:"relative",children:[v.jsxDEV("input",{id:"search",type:"text",value:M,onChange:m=>b(m.target.value),placeholder:"Ex: Noradrenalina, Fentanil...",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:170,columnNumber:17},this),M&&v.jsxDEV("button",{onClick:()=>b(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-1.5 py-0.5 rounded",children:"Limpar"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:179,columnNumber:19},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:169,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:164,columnNumber:13},this),v.jsxDEV("p",{className:"text-[11px] text-slate-400 mt-2",children:M?`Filtrando pelo termo "${M}" em todas as categorias`:"Digite para pesquisar em todo o catálogo de emergência"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:188,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:163,columnNumber:11},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:107,columnNumber:9},this),M?v.jsxDEV("div",{className:"flex items-center justify-between bg-slate-800/60 border border-slate-700/60 p-3 rounded-lg text-sm",children:[v.jsxDEV("span",{className:"text-slate-300",children:["Encontrados: ",v.jsxDEV("strong",{className:"text-cyan-400",children:S.length},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:222,columnNumber:28},this),' medicamento(s) para "',v.jsxDEV("strong",{children:M},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:222,columnNumber:116},this),'"']},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:221,columnNumber:13},this),v.jsxDEV("button",{onClick:()=>b(""),className:"text-xs text-cyan-400 hover:underline",children:"Voltar para visão por categorias"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:224,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:220,columnNumber:11},this):v.jsxDEV("div",{className:"border-b border-slate-700 overflow-x-auto pb-1 flex gap-2",children:Zl.map(m=>{const N=E===m.name;return v.jsxDEV("button",{onClick:()=>L(m.name),className:`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${N?"bg-slate-800 text-cyan-400 border-cyan-400 shadow-sm":"text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"}`,children:[v.jsxDEV("span",{children:m.name},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:209,columnNumber:19},this),v.jsxDEV("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${N?"bg-cyan-500/20 text-cyan-300":"bg-slate-700 text-slate-400"}`,children:m.drugs.length},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:210,columnNumber:19},this)]},m.name,!0,{fileName:"/app/applet/App.tsx",lineNumber:200,columnNumber:17},this)})},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:196,columnNumber:11},this),v.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:S.length>0?S.map(m=>v.jsxDEV(XE,{drug:m,patientWeight:Q},m.name,!1,{fileName:"/app/applet/App.tsx",lineNumber:237,columnNumber:15},this)):v.jsxDEV("div",{className:"col-span-full py-12 text-center text-slate-400 bg-slate-800/40 rounded-xl border border-slate-700/60",children:[v.jsxDEV(p4,{className:"w-8 h-8 text-amber-400 mx-auto mb-2"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:241,columnNumber:15},this),v.jsxDEV("p",{className:"text-base font-semibold text-slate-200",children:['Nenhum medicamento encontrado para "',M,'".']},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:242,columnNumber:15},this),v.jsxDEV("p",{className:"text-xs text-slate-400 mt-1",children:"Tente outro nome ou limpe a busca para navegar pelas categorias."},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:243,columnNumber:15},this),v.jsxDEV("button",{onClick:()=>b(""),className:"mt-4 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-md",children:"Limpar Busca"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:244,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:240,columnNumber:13},this)},x,!1,{fileName:"/app/applet/App.tsx",lineNumber:234,columnNumber:9},this),v.jsxDEV("section",{className:"bg-gradient-to-r from-slate-800 via-slate-800 to-indigo-950/40 border border-slate-700 rounded-xl p-5 shadow-lg",children:v.jsxDEV("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[v.jsxDEV("div",{className:"space-y-1",children:[v.jsxDEV("div",{className:"flex items-center gap-2",children:[v.jsxDEV(b0,{className:"w-5 h-5 text-emerald-400"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:259,columnNumber:17},this),v.jsxDEV("h3",{className:"text-sm md:text-base font-bold text-white",children:"Pronto para exportar e rodar sem nenhuma dependência de API"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:260,columnNumber:17},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:258,columnNumber:15},this),v.jsxDEV("p",{className:"text-xs text-slate-300 max-w-2xl leading-relaxed",children:"Este projeto foi desenvolvido como aplicação 100% estática (React + Vite + Tailwind CSS). Todos os cálculos de doses, apresentações de ampolas e velocidades de bomba de infusão funcionam offline diretamente na máquina do usuário."},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:264,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:257,columnNumber:13},this),v.jsxDEV("div",{className:"flex flex-wrap items-center gap-2 shrink-0",children:[v.jsxDEV("button",{onClick:()=>R(!0),className:"px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 flex items-center gap-1.5 transition-colors",children:[v.jsxDEV(i4,{className:"w-4 h-4 text-cyan-400"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:273,columnNumber:17},this),"Exportar JSON / CSV"]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:269,columnNumber:15},this),v.jsxDEV("button",{onClick:()=>A(!0),className:"px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors shadow-md",children:[v.jsxDEV(h0,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:280,columnNumber:17},this),"Comandos Git Passo a Passo"]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:276,columnNumber:15},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:268,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:256,columnNumber:11},this)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:255,columnNumber:9},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:105,columnNumber:7},this),v.jsxDEV("footer",{className:"border-t border-slate-800 bg-slate-900/90 py-6 text-slate-400 text-xs",children:v.jsxDEV("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left",children:[v.jsxDEV("div",{children:[v.jsxDEV("p",{className:"text-slate-300 font-semibold",children:"Calculadora de Doses de Emergência & UTI"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:292,columnNumber:13},this),v.jsxDEV("p",{className:"text-slate-500 mt-0.5",children:"Ferramenta auxiliar de cálculo clínico. Não substitui o julgamento profissional e protocolos institucionais."},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:293,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:291,columnNumber:11},this),v.jsxDEV("div",{className:"flex items-center gap-3 text-[11px] text-slate-500",children:[v.jsxDEV("span",{children:"• 100% Client-side"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:298,columnNumber:13},this),v.jsxDEV("span",{children:"• Zero chamadas de API"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:299,columnNumber:13},this),v.jsxDEV("span",{children:"• Compatível com GitHub Pages"},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:300,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:297,columnNumber:11},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:290,columnNumber:9},this)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:289,columnNumber:7},this),v.jsxDEV(H4,{isOpen:y,onClose:()=>R(!1)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:306,columnNumber:7},this),v.jsxDEV(G4,{isOpen:I,onClose:()=>A(!1)},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:307,columnNumber:7},this),v.jsxDEV(Z4,{},void 0,!1,{fileName:"/app/applet/App.tsx",lineNumber:308,columnNumber:7},this)]},void 0,!0,{fileName:"/app/applet/App.tsx",lineNumber:58,columnNumber:5},this)}const Q4="modulepreload",$4=function(Q,F){return new URL(Q,F).href},X_={},P4=function(F,E,L){let M=Promise.resolve();if(E&&E.length>0){let x=function(I){return Promise.all(I.map(A=>Promise.resolve(A).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const f=document.getElementsByTagName("link"),y=document.querySelector("meta[property=csp-nonce]"),R=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));M=x(E.map(I=>{if(I=$4(I,L),I in X_)return;X_[I]=!0;const A=I.endsWith(".css"),S=A?'[rel="stylesheet"]':"";if(!!L)for(let m=f.length-1;m>=0;m--){const N=f[m];if(N.href===I&&(!A||N.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${I}"]${S}`))return;const p=document.createElement("link");if(p.rel=A?"stylesheet":Q4,A||(p.as="script"),p.crossOrigin="",p.href=I,R&&p.setAttribute("nonce",R),document.head.appendChild(p),A)return new Promise((m,N)=>{p.addEventListener("load",m),p.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${I}`)))})}))}function b(x){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=x,window.dispatchEvent(f),!f.defaultPrevented)throw x}return M.then(x=>{for(const f of x||[])f.status==="rejected"&&b(f.reason);return F().catch(b)})};function F4(Q={}){const{immediate:F=!1,onNeedReload:E,onNeedRefresh:L,onOfflineReady:M,onRegistered:b,onRegisteredSW:x,onRegisterError:f}=Q;let y,R;const I=async(S=!0)=>{await R};async function A(){if("serviceWorker"in navigator){if(y=await P4(async()=>{const{Workbox:S}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:S}},[],import.meta.url).then(({Workbox:S})=>new S("./sw.js",{scope:"./",type:"classic"})).catch(S=>{f==null||f(S)}),!y)return;y.addEventListener("activated",S=>{(S.isUpdate||S.isExternal)&&(E?E():window.location.reload())}),y.addEventListener("installed",S=>{S.isUpdate||M==null||M()}),y.register({immediate:F}).then(S=>{x?x("./sw.js",S):b==null||b(S)}).catch(S=>{f==null||f(S)})}}return R=A(),I}const vN=document.getElementById("root");if(!vN)throw new Error("Could not find root element to mount to");const J4=GE.createRoot(vN);J4.render(v.jsxDEV(jE.StrictMode,{children:v.jsxDEV(X4,{},void 0,!1,{fileName:"/app/applet/index.tsx",lineNumber:16,columnNumber:5},void 0)},void 0,!1,{fileName:"/app/applet/index.tsx",lineNumber:15,columnNumber:3},void 0));try{"serviceWorker"in navigator&&F4({immediate:!0,onRegisterError(Q){console.warn("PWA service worker registration warning:",Q)}})}catch(Q){console.warn("PWA service worker initialization warning:",Q)}
