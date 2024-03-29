(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function cc(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const be={},Ai=[],Yt=()=>{},gv=()=>!1,Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_v=Object.prototype.hasOwnProperty,se=(t,e)=>_v.call(t,e),W=Array.isArray,Pi=t=>fr(t)==="[object Map]",Qi=t=>fr(t)==="[object Set]",Xu=t=>fr(t)==="[object Date]",Y=t=>typeof t=="function",Fe=t=>typeof t=="string",Un=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Of=t=>(Ie(t)||Y(t))&&Y(t.then)&&Y(t.catch),xf=Object.prototype.toString,fr=t=>xf.call(t),mv=t=>fr(t).slice(8,-1),Df=t=>fr(t)==="[object Object]",dc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yr=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vv=/-(\w)/g,Xt=jo(t=>t.replace(vv,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,Ji=jo(t=>t.replace(yv,"-$1").toLowerCase()),Wo=jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=jo(t=>t?`on${Wo(t)}`:""),ui=(t,e)=>!Object.is(t,e),Xr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},to=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qu;const ha=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Fe(i)?Iv(i):zo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Fe(t)||Ie(t))return t}const Ev=/;(?![^(]*\))/g,wv=/:([^]+)/,Cv=/\/\*[^]*?\*\//g;function Iv(t){const e={};return t.replace(Cv,"").split(Ev).forEach(n=>{if(n){const i=n.split(wv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _n(t){let e="";if(Fe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=_n(t[n]);i&&(e+=i+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bv=cc(Tv);function Mf(t){return!!t||t===""}function Sv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=hi(t[i],e[i]);return n}function hi(t,e){if(t===e)return!0;let n=Xu(t),i=Xu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Un(t),i=Un(e),n||i)return t===e;if(n=W(t),i=W(e),n||i)return n&&i?Sv(t,e):!1;if(n=Ie(t),i=Ie(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!hi(t[o],e[o]))return!1}}return String(t)===String(e)}function fc(t,e){return t.findIndex(n=>hi(n,e))}const bt=t=>Fe(t)?t:t==null?"":W(t)||Ie(t)&&(t.toString===xf||!Y(t.toString))?JSON.stringify(t,Lf,2):String(t),Lf=(t,e)=>e&&e.__v_isRef?Lf(t,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Ol(i,r)+" =>"]=s,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:Un(e)?Ol(e):Ie(e)&&!W(e)&&!Df(e)?String(e):e,Ol=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let _t;class Ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uf(t){return new Ff(t)}function Rv(t,e=_t){e&&e.active&&e.effects.push(t)}function pc(){return _t}function $f(t){_t&&_t.cleanups.push(t)}const gc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&$n)>0,Hf=t=>(t.n&$n)>0,Av=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},Pv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Bf(s)&&!Hf(s)?s.delete(t):e[n++]=s,s.w&=~$n,s.n&=~$n}e.length=n}},io=new WeakMap;let ws=0,$n=1;const da=30;let Pt;const oi=Symbol(""),fa=Symbol("");class _c{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rv(this,i)}run(){if(!this.active)return this.fn();let e=Pt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,Nn=!0,$n=1<<++ws,ws<=da?Av(this):Ju(this),this.fn()}finally{ws<=da&&Pv(this),$n=1<<--ws,Pt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const Vf=[];function Zi(){Vf.push(Nn),Nn=!1}function es(){const t=Vf.pop();Nn=t===void 0?!0:t}function ft(t,e,n){if(Nn&&Pt){let i=io.get(t);i||io.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=gc()),jf(s)}}function jf(t,e){let n=!1;ws<=da?Hf(t)||(t.n|=$n,n=!Bf(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function fn(t,e,n,i,s,r){const o=io.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t)){const a=Number(i);o.forEach((c,u)=>{(u==="length"||!Un(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?dc(n)&&l.push(o.get("length")):(l.push(o.get(oi)),Pi(t)&&l.push(o.get(fa)));break;case"delete":W(t)||(l.push(o.get(oi)),Pi(t)&&l.push(o.get(fa)));break;case"set":Pi(t)&&l.push(o.get(oi));break}if(l.length===1)l[0]&&pa(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);pa(gc(a))}}function pa(t,e){const n=W(t)?t:[...t];for(const i of n)i.computed&&Zu(i);for(const i of n)i.computed||Zu(i)}function Zu(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Nv(t,e){var n;return(n=io.get(t))==null?void 0:n.get(e)}const kv=cc("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un)),eh=Ov();function Ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=re(this);for(let r=0,o=this.length;r<o;r++)ft(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zi();const i=re(this)[e].apply(this,n);return es(),i}}),t}function xv(t){const e=re(this);return ft(e,"has",t),e.hasOwnProperty(t)}class zf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?qv:Yf:r?Gf:Kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=W(e);if(!s){if(o&&se(eh,n))return Reflect.get(eh,n,i);if(n==="hasOwnProperty")return xv}const l=Reflect.get(e,n,i);return(Un(n)?Wf.has(n):kv(n))||(s||ft(e,"get",n),r)?l:Ne(l)?o&&dc(n)?l:l.value:Ie(l)?s?Qf(l):pr(l):l}}class qf extends zf{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(Ui(r)&&Ne(r)&&!Ne(i))return!1;if(!this._shallow&&(!so(i)&&!Ui(i)&&(r=re(r),i=re(i)),!W(e)&&Ne(r)&&!Ne(i)))return r.value=i,!0;const o=W(e)&&dc(n)?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,i,s);return e===re(s)&&(o?ui(i,r)&&fn(e,"set",n,i):fn(e,"add",n,i)),l}deleteProperty(e,n){const i=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&fn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Un(n)||!Wf.has(n))&&ft(e,"has",n),i}ownKeys(e){return ft(e,"iterate",W(e)?"length":oi),Reflect.ownKeys(e)}}class Dv extends zf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mv=new qf,Lv=new Dv,Fv=new qf(!0),mc=t=>t,qo=t=>Reflect.getPrototypeOf(t);function Dr(t,e,n=!1,i=!1){t=t.__v_raw;const s=re(t),r=re(e);n||(ui(e,r)&&ft(s,"get",e),ft(s,"get",r));const{has:o}=qo(s),l=i?mc:n?Ec:Hs;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function Mr(t,e=!1){const n=this.__v_raw,i=re(n),s=re(t);return e||(ui(t,s)&&ft(i,"has",t),ft(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Lr(t,e=!1){return t=t.__v_raw,!e&&ft(re(t),"iterate",oi),Reflect.get(t,"size",t)}function th(t){t=re(t);const e=re(this);return qo(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function nh(t,e){e=re(e);const n=re(this),{has:i,get:s}=qo(n);let r=i.call(n,t);r||(t=re(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ui(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function ih(t){const e=re(this),{has:n,get:i}=qo(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&fn(e,"delete",t,void 0),r}function sh(){const t=re(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function Fr(t,e){return function(i,s){const r=this,o=r.__v_raw,l=re(o),a=e?mc:t?Ec:Hs;return!t&&ft(l,"iterate",oi),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function Ur(t,e,n){return function(...i){const s=this.__v_raw,r=re(s),o=Pi(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?mc:e?Ec:Hs;return!e&&ft(r,"iterate",a?fa:oi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uv(){const t={get(r){return Dr(this,r)},get size(){return Lr(this)},has:Mr,add:th,set:nh,delete:ih,clear:sh,forEach:Fr(!1,!1)},e={get(r){return Dr(this,r,!1,!0)},get size(){return Lr(this)},has:Mr,add:th,set:nh,delete:ih,clear:sh,forEach:Fr(!1,!0)},n={get(r){return Dr(this,r,!0)},get size(){return Lr(this,!0)},has(r){return Mr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Fr(!0,!1)},i={get(r){return Dr(this,r,!0,!0)},get size(){return Lr(this,!0)},has(r){return Mr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ur(r,!1,!1),n[r]=Ur(r,!0,!1),e[r]=Ur(r,!1,!0),i[r]=Ur(r,!0,!0)}),[t,n,e,i]}const[$v,Bv,Hv,Vv]=Uv();function vc(t,e){const n=e?t?Vv:Hv:t?Bv:$v;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(se(n,s)&&s in i?n:i,s,r)}const jv={get:vc(!1,!1)},Wv={get:vc(!1,!0)},zv={get:vc(!0,!1)},Kf=new WeakMap,Gf=new WeakMap,Yf=new WeakMap,qv=new WeakMap;function Kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gv(t){return t.__v_skip||!Object.isExtensible(t)?0:Kv(mv(t))}function pr(t){return Ui(t)?t:yc(t,!1,Mv,jv,Kf)}function Xf(t){return yc(t,!1,Fv,Wv,Gf)}function Qf(t){return yc(t,!0,Lv,zv,Yf)}function yc(t,e,n,i,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Gv(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function kn(t){return Ui(t)?kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ui(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Jf(t){return kn(t)||Ui(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Ko(t){return to(t,"__v_skip",!0),t}const Hs=t=>Ie(t)?pr(t):t,Ec=t=>Ie(t)?Qf(t):t;function Zf(t){Nn&&Pt&&(t=re(t),jf(t.dep||(t.dep=gc())))}function ep(t,e){t=re(t);const n=t.dep;n&&pa(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function he(t){return np(t,!1)}function tp(t){return np(t,!0)}function np(t,e){return Ne(t)?t:new Yv(t,e)}class Yv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Hs(e)}get value(){return Zf(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||Ui(e);e=n?e:re(e),ui(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hs(e),ep(this))}}function b(t){return Ne(t)?t.value:t}function Qn(t){return Y(t)?t():b(t)}const Xv={get:(t,e,n)=>b(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ip(t){return kn(t)?t:new Proxy(t,Xv)}function wc(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Jv(t,n);return e}class Qv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nv(re(this._object),this._key)}}function Jv(t,e,n){const i=t[e];return Ne(i)?i:new Qv(t,e,n)}class Zv{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _c(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=re(this);return Zf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ey(t,e,n=!1){let i,s;const r=Y(t);return r?(i=t,s=Yt):(i=t.get,s=t.set),new Zv(i,s,r||!s,n)}function On(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Go(r,e,n)}return s}function Mt(t,e,n,i){if(Y(t)){const r=On(t,e,n,i);return r&&Of(r)&&r.catch(o=>{Go(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Mt(t[r],e,n,i));return s}function Go(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){On(a,null,10,[t,o,l]);return}}ty(t,n,s,i)}function ty(t,e,n,i=!0){console.error(t)}let Vs=!1,ga=!1;const Je=[];let zt=0;const Ni=[];let an=null,Jn=0;const sp=Promise.resolve();let Cc=null;function Ic(t){const e=Cc||sp;return t?e.then(this?t.bind(this):t):e}function ny(t){let e=zt+1,n=Je.length;for(;e<n;){const i=e+n>>>1,s=Je[i],r=js(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Tc(t){(!Je.length||!Je.includes(t,Vs&&t.allowRecurse?zt+1:zt))&&(t.id==null?Je.push(t):Je.splice(ny(t.id),0,t),rp())}function rp(){!Vs&&!ga&&(ga=!0,Cc=sp.then(lp))}function iy(t){const e=Je.indexOf(t);e>zt&&Je.splice(e,1)}function sy(t){W(t)?Ni.push(...t):(!an||!an.includes(t,t.allowRecurse?Jn+1:Jn))&&Ni.push(t),rp()}function rh(t,e,n=Vs?zt+1:0){for(;n<Je.length;n++){const i=Je[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Je.splice(n,1),n--,i()}}}function op(t){if(Ni.length){const e=[...new Set(Ni)];if(Ni.length=0,an){an.push(...e);return}for(an=e,an.sort((n,i)=>js(n)-js(i)),Jn=0;Jn<an.length;Jn++)an[Jn]();an=null,Jn=0}}const js=t=>t.id==null?1/0:t.id,ry=(t,e)=>{const n=js(t)-js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lp(t){ga=!1,Vs=!0,Je.sort(ry);try{for(zt=0;zt<Je.length;zt++){const e=Je[zt];e&&e.active!==!1&&On(e,null,14)}}finally{zt=0,Je.length=0,op(),Vs=!1,Cc=null,(Je.length||Ni.length)&&lp()}}function oy(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||be;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||be;d&&(s=n.map(f=>Fe(f)?f.trim():f)),h&&(s=n.map(no))}let l,a=i[l=kl(e)]||i[l=kl(Xt(e))];!a&&r&&(a=i[l=kl(Ji(e))]),a&&Mt(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Mt(c,t,6,s)}}function ap(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!Y(t)){const a=c=>{const u=ap(c,e,!0);u&&(l=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(Ie(t)&&i.set(t,null),null):(W(r)?r.forEach(a=>o[a]=null):Ge(o,r),Ie(t)&&i.set(t,o),o)}function Yo(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ji(e))||se(t,e))}let Ve=null,cp=null;function ro(t){const e=Ve;return Ve=t,cp=t&&t.type.__scopeId||null,e}function Rs(t,e=Ve,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&_h(-1);const r=ro(e);let o;try{o=t(...s)}finally{ro(r),i._d&&_h(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function xl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let S,P;const D=ro(t);try{if(n.shapeFlag&4){const N=s||i,q=N;S=Wt(u.call(q,N,h,r,f,d,g)),P=a}else{const N=e;S=Wt(N.length>1?N(r,{attrs:a,slots:l,emit:c}):N(r,null)),P=e.props?a:ly(a)}}catch(N){Ns.length=0,Go(N,t,1),S=ge(Bn)}let U=S;if(P&&v!==!1){const N=Object.keys(P),{shapeFlag:q}=U;N.length&&q&7&&(o&&N.some(uc)&&(P=ay(P,o)),U=$i(U,P))}return n.dirs&&(U=$i(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),S=U,ro(D),S}const ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},ay=(t,e)=>{const n={};for(const i in t)(!uc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function cy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?oh(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Yo(c,d))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?oh(i,o,c):!0:!!o;return!1}function oh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Yo(n,r))return!0}return!1}function uy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const up="components";function hy(t,e){return fy(up,t,!0,e)||t}const dy=Symbol.for("v-ndc");function fy(t,e,n=!0,i=!1){const s=Ve||De;if(s){const r=s.type;if(t===up){const l=nE(r,!1);if(l&&(l===e||l===Xt(e)||l===Wo(Xt(e))))return r}const o=lh(s[t]||r[t],e)||lh(s.appContext[t],e);return!o&&i?r:o}}function lh(t,e){return t&&(t[e]||t[Xt(e)]||t[Wo(Xt(e))])}const py=t=>t.__isSuspense;function gy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):sy(t)}const $r={};function pn(t,e,n){return hp(t,e,n)}function hp(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=be){var l;const a=pc()===((l=De)==null?void 0:l.scope)?De:null;let c,u=!1,h=!1;if(Ne(t)?(c=()=>t.value,u=so(t)):kn(t)?(c=()=>t,i=!0):W(t)?(h=!0,u=t.some(N=>kn(N)||so(N)),c=()=>t.map(N=>{if(Ne(N))return N.value;if(kn(N))return ei(N);if(Y(N))return On(N,a,2)})):Y(t)?e?c=()=>On(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Mt(t,a,3,[f])}:c=Yt,e&&i){const N=c;c=()=>ei(N())}let d,f=N=>{d=D.onStop=()=>{On(N,a,4),d=D.onStop=void 0}},g;if(qs)if(f=Yt,e?n&&Mt(e,a,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const N=rE();g=N.__watcherHandles||(N.__watcherHandles=[])}else return Yt;let v=h?new Array(t.length).fill($r):$r;const S=()=>{if(D.active)if(e){const N=D.run();(i||u||(h?N.some((q,ce)=>ui(q,v[ce])):ui(N,v)))&&(d&&d(),Mt(e,a,3,[N,v===$r?void 0:h&&v[0]===$r?[]:v,f]),v=N)}else D.run()};S.allowRecurse=!!e;let P;s==="sync"?P=S:s==="post"?P=()=>at(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),P=()=>Tc(S));const D=new _c(c,P);e?n?S():v=D.run():s==="post"?at(D.run.bind(D),a&&a.suspense):D.run();const U=()=>{D.stop(),a&&a.scope&&hc(a.scope.effects,D)};return g&&g.push(U),U}function _y(t,e,n){const i=this.proxy,s=Fe(t)?t.includes(".")?dp(i,t):()=>i[t]:t.bind(i,i);let r;Y(e)?r=e:(r=e.handler,n=e);const o=De;Bi(this);const l=hp(s,r.bind(i),n);return o?Bi(o):li(),l}function dp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ei(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))ei(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ei(t[n],e);else if(Qi(t)||Pi(t))t.forEach(n=>{ei(n,e)});else if(Df(t))for(const n in t)ei(t[n],e);return t}function Ae(t,e){const n=Ve;if(n===null)return t;const i=Zo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=be]=e[r];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&ei(l),s.push({dir:o,instance:i,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Kn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Zi(),Mt(a,n,8,[t.el,l,t,e]),es())}}/*! #__NO_SIDE_EFFECTS__ */function bc(t,e){return Y(t)?Ge({name:t.name},e,{setup:t}):t}const As=t=>!!t.type.__asyncLoader,fp=t=>t.type.__isKeepAlive;function my(t,e){pp(t,"a",e)}function vy(t,e){pp(t,"da",e)}function pp(t,e,n=De){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xo(e,i,n),n){let s=n.parent;for(;s&&s.parent;)fp(s.parent.vnode)&&yy(i,e,n,s),s=s.parent}}function yy(t,e,n,i){const s=Xo(e,t,i,!0);_p(()=>{hc(i[e],s)},n)}function Xo(t,e,n=De,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zi(),Bi(n);const l=Mt(e,n,t,o);return li(),es(),l});return i?s.unshift(r):s.push(r),r}}const yn=t=>(e,n=De)=>(!qs||t==="sp")&&Xo(t,(...i)=>e(...i),n),Ey=yn("bm"),Sc=yn("m"),wy=yn("bu"),Cy=yn("u"),gp=yn("bum"),_p=yn("um"),mp=yn("sp"),Iy=yn("rtg"),Ty=yn("rtc");function by(t,e=De){Xo("ec",t,e)}function xn(t,e,n,i){let s;const r=n&&n[i];if(W(t)||Fe(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function Dl(t,e,n={},i,s){if(Ve.isCE||Ve.parent&&As(Ve.parent)&&Ve.parent.isCE)return e!=="default"&&(n.name=e),ge("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),F();const o=r&&vp(r(n)),l=Pn(Pe,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function vp(t){return t.some(e=>lo(e)?!(e.type===Bn||e.type===Pe&&!vp(e.children)):!0)?t:null}const _a=t=>t?Np(t)?Zo(t)||t.proxy:_a(t.parent):null,Ps=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_a(t.parent),$root:t=>_a(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>Tc(t.update)),$nextTick:t=>t.n||(t.n=Ic.bind(t.proxy)),$watch:t=>_y.bind(t)}),Ml=(t,e)=>t!==be&&!t.__isScriptSetup&&se(t,e),Sy={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ml(i,e))return o[e]=1,i[e];if(s!==be&&se(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,r[e];if(n!==be&&se(n,e))return o[e]=4,n[e];ma&&(o[e]=0)}}const u=Ps[e];let h,d;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==be&&se(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ml(s,e)?(s[e]=n,!0):i!==be&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==be&&se(t,o)||Ml(e,o)||(l=r[0])&&se(l,o)||se(i,o)||se(Ps,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ah(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ma=!0;function Ry(t){const e=Rc(t),n=t.proxy,i=t.ctx;ma=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:S,beforeDestroy:P,beforeUnmount:D,destroyed:U,unmounted:N,render:q,renderTracked:ce,renderTriggered:Re,errorCaptured:Q,serverPrefetch:J,expose:ye,inheritAttrs:Ue,components:tt,directives:ot,filters:rn}=e;if(c&&Ay(c,i,null),o)for(const oe in o){const ae=o[oe];Y(ae)&&(i[oe]=ae.bind(n))}if(s){const oe=s.call(n,n);Ie(oe)&&(t.data=pr(oe))}if(ma=!0,r)for(const oe in r){const ae=r[oe],on=Y(ae)?ae.bind(n,n):Y(ae.get)?ae.get.bind(n,n):Yt,Cn=!Y(ae)&&Y(ae.set)?ae.set.bind(n):Yt,Ht=qe({get:on,set:Cn});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:lt=>Ht.value=lt})}if(l)for(const oe in l)yp(l[oe],i,n,oe);if(a){const oe=Y(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ae=>{Qr(ae,oe[ae])})}u&&ch(u,t,"c");function X(oe,ae){W(ae)?ae.forEach(on=>oe(on.bind(n))):ae&&oe(ae.bind(n))}if(X(Ey,h),X(Sc,d),X(wy,f),X(Cy,g),X(my,v),X(vy,S),X(by,Q),X(Ty,ce),X(Iy,Re),X(gp,D),X(_p,N),X(mp,J),W(ye))if(ye.length){const oe=t.exposed||(t.exposed={});ye.forEach(ae=>{Object.defineProperty(oe,ae,{get:()=>n[ae],set:on=>n[ae]=on})})}else t.exposed||(t.exposed={});q&&t.render===Yt&&(t.render=q),Ue!=null&&(t.inheritAttrs=Ue),tt&&(t.components=tt),ot&&(t.directives=ot)}function Ay(t,e,n=Yt){W(t)&&(t=va(t));for(const i in t){const s=t[i];let r;Ie(s)?"default"in s?r=ht(s.from||i,s.default,!0):r=ht(s.from||i):r=ht(s),Ne(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ch(t,e,n){Mt(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yp(t,e,n,i){const s=i.includes(".")?dp(n,i):()=>n[i];if(Fe(t)){const r=e[t];Y(r)&&pn(s,r)}else if(Y(t))pn(s,t.bind(n));else if(Ie(t))if(W(t))t.forEach(r=>yp(r,e,n,i));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&pn(s,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>oo(a,c,o,!0)),oo(a,e,o)),Ie(e)&&r.set(e,a),a}function oo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&oo(t,r,n,!0),s&&s.forEach(o=>oo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=Py[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Py={data:uh,props:hh,emits:hh,methods:Cs,computed:Cs,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Cs,directives:Cs,watch:ky,provide:uh,inject:Ny};function uh(t,e){return e?t?function(){return Ge(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Ny(t,e){return Cs(va(t),va(e))}function va(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?Ge(Object.create(null),t,e):e}function hh(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ge(Object.create(null),ah(t),ah(e??{})):e}function ky(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const i in e)n[i]=it(t[i],e[i]);return n}function Ep(){return{app:null,config:{isNativeTag:gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function xy(t,e){return function(i,s=null){Y(i)||(i=Ge({},i)),s!=null&&!Ie(s)&&(s=null);const r=Ep(),o=new WeakSet;let l=!1;const a=r.app={_uid:Oy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:oE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(a,...u)):Y(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=ge(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Zo(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Ws=a;try{return c()}finally{Ws=null}}};return a}}let Ws=null;function Qr(t,e){if(De){let n=De.provides;const i=De.parent&&De.parent.provides;i===n&&(n=De.provides=Object.create(i)),n[t]=e}}function ht(t,e,n=!1){const i=De||Ve;if(i||Ws){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ws._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(i&&i.proxy):e}}function Dy(){return!!(De||Ve||Ws)}function My(t,e,n,i=!1){const s={},r={};to(r,Jo,1),t.propsDefaults=Object.create(null),wp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Xf(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Ly(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=re(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Yo(t.emitsOptions,d))continue;const f=e[d];if(a)if(se(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Xt(d);s[g]=ya(a,l,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{wp(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!se(e,h)&&((u=Ji(h))===h||!se(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ya(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!se(e,h))&&(delete r[h],c=!0)}c&&fn(t,"set","$attrs")}function wp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Yr(a))continue;const c=e[a];let u;s&&se(s,u=Xt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Yo(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=re(n),c=l||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ya(s,a,h,c[h],t,!se(c,h))}}return o}function ya(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=se(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&Y(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Bi(s),i=c[n]=a.call(null,e),li())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Ji(n))&&(i=!0))}return i}function Cp(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!Y(t)){const u=h=>{a=!0;const[d,f]=Cp(h,e,!0);Ge(o,d),f&&l.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return Ie(t)&&i.set(t,Ai),Ai;if(W(r))for(let u=0;u<r.length;u++){const h=Xt(r[u]);dh(h)&&(o[h]=be)}else if(r)for(const u in r){const h=Xt(u);if(dh(h)){const d=r[u],f=o[h]=W(d)||Y(d)?{type:d}:Ge({},d);if(f){const g=gh(Boolean,f.type),v=gh(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||se(f,"default"))&&l.push(h)}}}const c=[o,l];return Ie(t)&&i.set(t,c),c}function dh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ph(t,e){return fh(t)===fh(e)}function gh(t,e){return W(e)?e.findIndex(n=>ph(n,t)):Y(e)&&ph(e,t)?0:-1}const Ip=t=>t[0]==="_"||t==="$stable",Ac=t=>W(t)?t.map(Wt):[Wt(t)],Fy=(t,e,n)=>{if(e._n)return e;const i=Rs((...s)=>Ac(e(...s)),n);return i._c=!1,i},Tp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ip(s))continue;const r=t[s];if(Y(r))e[s]=Fy(s,r,i);else if(r!=null){const o=Ac(r);e[s]=()=>o}}},bp=(t,e)=>{const n=Ac(e);t.slots.default=()=>n},Uy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),to(e,"_",n)):Tp(e,t.slots={})}else t.slots={},e&&bp(t,e);to(t.slots,Jo,1)},$y=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=be;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ge(s,e),!n&&l===1&&delete s._):(r=!e.$stable,Tp(e,s)),o=e}else e&&(bp(t,e),o={default:1});if(r)for(const l in s)!Ip(l)&&o[l]==null&&delete s[l]};function Ea(t,e,n,i,s=!1){if(W(t)){t.forEach((d,f)=>Ea(d,e&&(W(e)?e[f]:e),n,i,s));return}if(As(i)&&!s)return;const r=i.shapeFlag&4?Zo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===be?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Fe(c)?(u[c]=null,se(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),Y(a))On(a,l,12,[o,u]);else{const d=Fe(a),f=Ne(a);if(d||f){const g=()=>{if(t.f){const v=d?se(h,a)?h[a]:u[a]:a.value;s?W(v)&&hc(v,r):W(v)?v.includes(r)||v.push(r):d?(u[a]=[r],se(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,se(h,a)&&(h[a]=o)):f&&(a.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,at(g,n)):g()}}}const at=gy;function By(t){return Hy(t)}function Hy(t,e){const n=ha();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Yt,insertStaticContent:g}=t,v=(p,_,m,E=null,C=null,I=null,M=!1,A=null,k=!!_.dynamicChildren)=>{if(p===_)return;p&&!ds(p,_)&&(E=w(p),lt(p,C,I,!0),p=null),_.patchFlag===-2&&(k=!1,_.dynamicChildren=null);const{type:T,ref:V,shapeFlag:$}=_;switch(T){case Qo:S(p,_,m,E);break;case Bn:P(p,_,m,E);break;case Ll:p==null&&D(_,m,E,M);break;case Pe:tt(p,_,m,E,C,I,M,A,k);break;default:$&1?q(p,_,m,E,C,I,M,A,k):$&6?ot(p,_,m,E,C,I,M,A,k):($&64||$&128)&&T.process(p,_,m,E,C,I,M,A,k,O)}V!=null&&C&&Ea(V,p&&p.ref,I,_||p,!_)},S=(p,_,m,E)=>{if(p==null)i(_.el=l(_.children),m,E);else{const C=_.el=p.el;_.children!==p.children&&c(C,_.children)}},P=(p,_,m,E)=>{p==null?i(_.el=a(_.children||""),m,E):_.el=p.el},D=(p,_,m,E)=>{[p.el,p.anchor]=g(p.children,_,m,E,p.el,p.anchor)},U=({el:p,anchor:_},m,E)=>{let C;for(;p&&p!==_;)C=d(p),i(p,m,E),p=C;i(_,m,E)},N=({el:p,anchor:_})=>{let m;for(;p&&p!==_;)m=d(p),s(p),p=m;s(_)},q=(p,_,m,E,C,I,M,A,k)=>{M=M||_.type==="svg",p==null?ce(_,m,E,C,I,M,A,k):J(p,_,C,I,M,A,k)},ce=(p,_,m,E,C,I,M,A)=>{let k,T;const{type:V,props:$,shapeFlag:j,transition:G,dirs:ne}=p;if(k=p.el=o(p.type,I,$&&$.is,$),j&8?u(k,p.children):j&16&&Q(p.children,k,null,E,C,I&&V!=="foreignObject",M,A),ne&&Kn(p,null,E,"created"),Re(k,p,p.scopeId,M,E),$){for(const me in $)me!=="value"&&!Yr(me)&&r(k,me,null,$[me],I,p.children,E,C,Ye);"value"in $&&r(k,"value",null,$.value),(T=$.onVnodeBeforeMount)&&jt(T,E,p)}ne&&Kn(p,null,E,"beforeMount");const we=Vy(C,G);we&&G.beforeEnter(k),i(k,_,m),((T=$&&$.onVnodeMounted)||we||ne)&&at(()=>{T&&jt(T,E,p),we&&G.enter(k),ne&&Kn(p,null,E,"mounted")},C)},Re=(p,_,m,E,C)=>{if(m&&f(p,m),E)for(let I=0;I<E.length;I++)f(p,E[I]);if(C){let I=C.subTree;if(_===I){const M=C.vnode;Re(p,M,M.scopeId,M.slotScopeIds,C.parent)}}},Q=(p,_,m,E,C,I,M,A,k=0)=>{for(let T=k;T<p.length;T++){const V=p[T]=A?Rn(p[T]):Wt(p[T]);v(null,V,_,m,E,C,I,M,A)}},J=(p,_,m,E,C,I,M)=>{const A=_.el=p.el;let{patchFlag:k,dynamicChildren:T,dirs:V}=_;k|=p.patchFlag&16;const $=p.props||be,j=_.props||be;let G;m&&Gn(m,!1),(G=j.onVnodeBeforeUpdate)&&jt(G,m,_,p),V&&Kn(_,p,m,"beforeUpdate"),m&&Gn(m,!0);const ne=C&&_.type!=="foreignObject";if(T?ye(p.dynamicChildren,T,A,m,E,ne,I):M||ae(p,_,A,null,m,E,ne,I,!1),k>0){if(k&16)Ue(A,_,$,j,m,E,C);else if(k&2&&$.class!==j.class&&r(A,"class",null,j.class,C),k&4&&r(A,"style",$.style,j.style,C),k&8){const we=_.dynamicProps;for(let me=0;me<we.length;me++){const xe=we[me],At=$[xe],yi=j[xe];(yi!==At||xe==="value")&&r(A,xe,At,yi,C,p.children,m,E,Ye)}}k&1&&p.children!==_.children&&u(A,_.children)}else!M&&T==null&&Ue(A,_,$,j,m,E,C);((G=j.onVnodeUpdated)||V)&&at(()=>{G&&jt(G,m,_,p),V&&Kn(_,p,m,"updated")},E)},ye=(p,_,m,E,C,I,M)=>{for(let A=0;A<_.length;A++){const k=p[A],T=_[A],V=k.el&&(k.type===Pe||!ds(k,T)||k.shapeFlag&70)?h(k.el):m;v(k,T,V,null,E,C,I,M,!0)}},Ue=(p,_,m,E,C,I,M)=>{if(m!==E){if(m!==be)for(const A in m)!Yr(A)&&!(A in E)&&r(p,A,m[A],null,M,_.children,C,I,Ye);for(const A in E){if(Yr(A))continue;const k=E[A],T=m[A];k!==T&&A!=="value"&&r(p,A,T,k,M,_.children,C,I,Ye)}"value"in E&&r(p,"value",m.value,E.value)}},tt=(p,_,m,E,C,I,M,A,k)=>{const T=_.el=p?p.el:l(""),V=_.anchor=p?p.anchor:l("");let{patchFlag:$,dynamicChildren:j,slotScopeIds:G}=_;G&&(A=A?A.concat(G):G),p==null?(i(T,m,E),i(V,m,E),Q(_.children,m,V,C,I,M,A,k)):$>0&&$&64&&j&&p.dynamicChildren?(ye(p.dynamicChildren,j,m,C,I,M,A),(_.key!=null||C&&_===C.subTree)&&Sp(p,_,!0)):ae(p,_,m,V,C,I,M,A,k)},ot=(p,_,m,E,C,I,M,A,k)=>{_.slotScopeIds=A,p==null?_.shapeFlag&512?C.ctx.activate(_,m,E,M,k):rn(_,m,E,C,I,M,k):nt(p,_,k)},rn=(p,_,m,E,C,I,M)=>{const A=p.component=Qy(p,E,C);if(fp(p)&&(A.ctx.renderer=O),Jy(A),A.asyncDep){if(C&&C.registerDep(A,X),!p.el){const k=A.subTree=ge(Bn);P(null,k,_,m)}return}X(A,p,_,m,C,I,M)},nt=(p,_,m)=>{const E=_.component=p.component;if(cy(p,_,m))if(E.asyncDep&&!E.asyncResolved){oe(E,_,m);return}else E.next=_,iy(E.update),E.update();else _.el=p.el,E.vnode=_},X=(p,_,m,E,C,I,M)=>{const A=()=>{if(p.isMounted){let{next:V,bu:$,u:j,parent:G,vnode:ne}=p,we=V,me;Gn(p,!1),V?(V.el=ne.el,oe(p,V,M)):V=ne,$&&Xr($),(me=V.props&&V.props.onVnodeBeforeUpdate)&&jt(me,G,V,ne),Gn(p,!0);const xe=xl(p),At=p.subTree;p.subTree=xe,v(At,xe,h(At.el),w(At),p,C,I),V.el=xe.el,we===null&&uy(p,xe.el),j&&at(j,C),(me=V.props&&V.props.onVnodeUpdated)&&at(()=>jt(me,G,V,ne),C)}else{let V;const{el:$,props:j}=_,{bm:G,m:ne,parent:we}=p,me=As(_);if(Gn(p,!1),G&&Xr(G),!me&&(V=j&&j.onVnodeBeforeMount)&&jt(V,we,_),Gn(p,!0),$&&ue){const xe=()=>{p.subTree=xl(p),ue($,p.subTree,p,C,null)};me?_.type.__asyncLoader().then(()=>!p.isUnmounted&&xe()):xe()}else{const xe=p.subTree=xl(p);v(null,xe,m,E,p,C,I),_.el=xe.el}if(ne&&at(ne,C),!me&&(V=j&&j.onVnodeMounted)){const xe=_;at(()=>jt(V,we,xe),C)}(_.shapeFlag&256||we&&As(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&at(p.a,C),p.isMounted=!0,_=m=E=null}},k=p.effect=new _c(A,()=>Tc(T),p.scope),T=p.update=()=>k.run();T.id=p.uid,Gn(p,!0),T()},oe=(p,_,m)=>{_.component=p;const E=p.vnode.props;p.vnode=_,p.next=null,Ly(p,_.props,E,m),$y(p,_.children,m),Zi(),rh(p),es()},ae=(p,_,m,E,C,I,M,A,k=!1)=>{const T=p&&p.children,V=p?p.shapeFlag:0,$=_.children,{patchFlag:j,shapeFlag:G}=_;if(j>0){if(j&128){Cn(T,$,m,E,C,I,M,A,k);return}else if(j&256){on(T,$,m,E,C,I,M,A,k);return}}G&8?(V&16&&Ye(T,C,I),$!==T&&u(m,$)):V&16?G&16?Cn(T,$,m,E,C,I,M,A,k):Ye(T,C,I,!0):(V&8&&u(m,""),G&16&&Q($,m,E,C,I,M,A,k))},on=(p,_,m,E,C,I,M,A,k)=>{p=p||Ai,_=_||Ai;const T=p.length,V=_.length,$=Math.min(T,V);let j;for(j=0;j<$;j++){const G=_[j]=k?Rn(_[j]):Wt(_[j]);v(p[j],G,m,null,C,I,M,A,k)}T>V?Ye(p,C,I,!0,!1,$):Q(_,m,E,C,I,M,A,k,$)},Cn=(p,_,m,E,C,I,M,A,k)=>{let T=0;const V=_.length;let $=p.length-1,j=V-1;for(;T<=$&&T<=j;){const G=p[T],ne=_[T]=k?Rn(_[T]):Wt(_[T]);if(ds(G,ne))v(G,ne,m,null,C,I,M,A,k);else break;T++}for(;T<=$&&T<=j;){const G=p[$],ne=_[j]=k?Rn(_[j]):Wt(_[j]);if(ds(G,ne))v(G,ne,m,null,C,I,M,A,k);else break;$--,j--}if(T>$){if(T<=j){const G=j+1,ne=G<V?_[G].el:E;for(;T<=j;)v(null,_[T]=k?Rn(_[T]):Wt(_[T]),m,ne,C,I,M,A,k),T++}}else if(T>j)for(;T<=$;)lt(p[T],C,I,!0),T++;else{const G=T,ne=T,we=new Map;for(T=ne;T<=j;T++){const gt=_[T]=k?Rn(_[T]):Wt(_[T]);gt.key!=null&&we.set(gt.key,T)}let me,xe=0;const At=j-ne+1;let yi=!1,Ku=0;const hs=new Array(At);for(T=0;T<At;T++)hs[T]=0;for(T=G;T<=$;T++){const gt=p[T];if(xe>=At){lt(gt,C,I,!0);continue}let Vt;if(gt.key!=null)Vt=we.get(gt.key);else for(me=ne;me<=j;me++)if(hs[me-ne]===0&&ds(gt,_[me])){Vt=me;break}Vt===void 0?lt(gt,C,I,!0):(hs[Vt-ne]=T+1,Vt>=Ku?Ku=Vt:yi=!0,v(gt,_[Vt],m,null,C,I,M,A,k),xe++)}const Gu=yi?jy(hs):Ai;for(me=Gu.length-1,T=At-1;T>=0;T--){const gt=ne+T,Vt=_[gt],Yu=gt+1<V?_[gt+1].el:E;hs[T]===0?v(null,Vt,m,Yu,C,I,M,A,k):yi&&(me<0||T!==Gu[me]?Ht(Vt,m,Yu,2):me--)}}},Ht=(p,_,m,E,C=null)=>{const{el:I,type:M,transition:A,children:k,shapeFlag:T}=p;if(T&6){Ht(p.component.subTree,_,m,E);return}if(T&128){p.suspense.move(_,m,E);return}if(T&64){M.move(p,_,m,O);return}if(M===Pe){i(I,_,m);for(let $=0;$<k.length;$++)Ht(k[$],_,m,E);i(p.anchor,_,m);return}if(M===Ll){U(p,_,m);return}if(E!==2&&T&1&&A)if(E===0)A.beforeEnter(I),i(I,_,m),at(()=>A.enter(I),C);else{const{leave:$,delayLeave:j,afterLeave:G}=A,ne=()=>i(I,_,m),we=()=>{$(I,()=>{ne(),G&&G()})};j?j(I,ne,we):we()}else i(I,_,m)},lt=(p,_,m,E=!1,C=!1)=>{const{type:I,props:M,ref:A,children:k,dynamicChildren:T,shapeFlag:V,patchFlag:$,dirs:j}=p;if(A!=null&&Ea(A,null,m,p,!0),V&256){_.ctx.deactivate(p);return}const G=V&1&&j,ne=!As(p);let we;if(ne&&(we=M&&M.onVnodeBeforeUnmount)&&jt(we,_,p),V&6)xr(p.component,m,E);else{if(V&128){p.suspense.unmount(m,E);return}G&&Kn(p,null,_,"beforeUnmount"),V&64?p.type.remove(p,_,m,C,O,E):T&&(I!==Pe||$>0&&$&64)?Ye(T,_,m,!1,!0):(I===Pe&&$&384||!C&&V&16)&&Ye(k,_,m),E&&mi(p)}(ne&&(we=M&&M.onVnodeUnmounted)||G)&&at(()=>{we&&jt(we,_,p),G&&Kn(p,null,_,"unmounted")},m)},mi=p=>{const{type:_,el:m,anchor:E,transition:C}=p;if(_===Pe){vi(m,E);return}if(_===Ll){N(p);return}const I=()=>{s(m),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:M,delayLeave:A}=C,k=()=>M(m,I);A?A(p.el,I,k):k()}else I()},vi=(p,_)=>{let m;for(;p!==_;)m=d(p),s(p),p=m;s(_)},xr=(p,_,m)=>{const{bum:E,scope:C,update:I,subTree:M,um:A}=p;E&&Xr(E),C.stop(),I&&(I.active=!1,lt(M,p,_,m)),A&&at(A,_),at(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Ye=(p,_,m,E=!1,C=!1,I=0)=>{for(let M=I;M<p.length;M++)lt(p[M],_,m,E,C)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),L=(p,_,m)=>{p==null?_._vnode&&lt(_._vnode,null,null,!0):v(_._vnode||null,p,_,null,null,null,m),rh(),op(),_._vnode=p},O={p:v,um:lt,m:Ht,r:mi,mt:rn,mc:Q,pc:ae,pbc:ye,n:w,o:t};let H,ue;return e&&([H,ue]=e(O)),{render:L,hydrate:H,createApp:xy(L,H)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sp(t,e,n=!1){const i=t.children,s=e.children;if(W(i)&&W(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Rn(s[r]),l.el=o.el),n||Sp(o,l)),l.type===Qo&&(l.el=o.el)}}function jy(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Wy=t=>t.__isTeleport,Pe=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),Ll=Symbol.for("v-stc"),Ns=[];let kt=null;function F(t=!1){Ns.push(kt=t?null:[])}function zy(){Ns.pop(),kt=Ns[Ns.length-1]||null}let zs=1;function _h(t){zs+=t}function Rp(t){return t.dynamicChildren=zs>0?kt||Ai:null,zy(),zs>0&&kt&&kt.push(t),t}function B(t,e,n,i,s,r){return Rp(y(t,e,n,i,s,r,!0))}function Pn(t,e,n,i,s){return Rp(ge(t,e,n,i,s,!0))}function lo(t){return t?t.__v_isVNode===!0:!1}function ds(t,e){return t.type===e.type&&t.key===e.key}const Jo="__vInternal",Ap=({key:t})=>t??null,Jr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Ne(t)||Y(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,i=0,s=null,r=t===Pe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ap(e),ref:e&&Jr(e),scopeId:cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return l?(Pc(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Fe(n)?8:16),zs>0&&!o&&kt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&kt.push(a),a}const ge=qy;function qy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===dy)&&(t=Bn),lo(t)){const l=$i(t,e,!0);return n&&Pc(l,n),zs>0&&!r&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag|=-2,l}if(iE(t)&&(t=t.__vccOpts),e){e=Ky(e);let{class:l,style:a}=e;l&&!Fe(l)&&(e.class=_n(l)),Ie(a)&&(Jf(a)&&!W(a)&&(a=Ge({},a)),e.style=zo(a))}const o=Fe(t)?1:py(t)?128:Wy(t)?64:Ie(t)?4:Y(t)?2:0;return y(t,e,n,i,s,o,r,!0)}function Ky(t){return t?Jf(t)||Jo in t?Ge({},t):t:null}function $i(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Gy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ap(l),ref:e&&e.ref?n&&s?W(s)?s.concat(Jr(e)):[s,Jr(e)]:Jr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$i(t.ssContent),ssFallback:t.ssFallback&&$i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xe(t=" ",e=0){return ge(Qo,null,t,e)}function ve(t="",e=!1){return e?(F(),Pn(Bn,null,t)):ge(Bn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?ge(Bn):W(t)?ge(Pe,null,t.slice()):typeof t=="object"?Rn(t):ge(Qo,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$i(t)}function Pc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Jo in e)?e._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),i&64?(n=16,e=[Xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=_n([e.class,i.class]));else if(s==="style")e.style=zo([e.style,i.style]);else if(Vo(s)){const r=e[s],o=i[s];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jt(t,e,n,i=null){Mt(t,e,7,[n,i])}const Yy=Ep();let Xy=0;function Qy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Yy,r={uid:Xy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(i,s),emitsOptions:ap(i,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=oy.bind(null,r),t.ce&&t.ce(r),r}let De=null;const Pp=()=>De||Ve;let Nc,Ei,mh="__VUE_INSTANCE_SETTERS__";(Ei=ha()[mh])||(Ei=ha()[mh]=[]),Ei.push(t=>De=t),Nc=t=>{Ei.length>1?Ei.forEach(e=>e(t)):Ei[0](t)};const Bi=t=>{Nc(t),t.scope.on()},li=()=>{De&&De.scope.off(),Nc(null)};function Np(t){return t.vnode.shapeFlag&4}let qs=!1;function Jy(t,e=!1){qs=e;const{props:n,children:i}=t.vnode,s=Np(t);My(t,n,s,e),Uy(t,i);const r=s?Zy(t,e):void 0;return qs=!1,r}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ko(new Proxy(t.ctx,Sy));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?tE(t):null;Bi(t),Zi();const r=On(i,t,0,[t.props,s]);if(es(),li(),Of(r)){if(r.then(li,li),e)return r.then(o=>{vh(t,o,e)}).catch(o=>{Go(o,t,0)});t.asyncDep=r}else vh(t,r,e)}else kp(t,e)}function vh(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=ip(e)),kp(t,n)}let yh;function kp(t,e,n){const i=t.type;if(!t.render){if(!e&&yh&&!i.render){const s=i.template||Rc(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=Ge(Ge({isCustomElement:r,delimiters:l},o),a);i.render=yh(s,c)}}t.render=i.render||Yt}{Bi(t),Zi();try{Ry(t)}finally{es(),li()}}}function eE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}}))}function tE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return eE(t)},slots:t.slots,emit:t.emit,expose:e}}function Zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(Ko(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ps)return Ps[n](t)},has(e,n){return n in e||n in Ps}}))}function nE(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function iE(t){return Y(t)&&"__vccOpts"in t}const qe=(t,e)=>ey(t,e,qs);function Op(t,e,n){const i=arguments.length;return i===2?Ie(e)&&!W(e)?lo(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&lo(n)&&(n=[n]),ge(t,e,n))}const sE=Symbol.for("v-scx"),rE=()=>ht(sE),oE="3.3.11",lE="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,Eh=Zn&&Zn.createElement("template"),aE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Zn.createElementNS(lE,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Eh.innerHTML=i?`<svg>${t}</svg>`:t;const l=Eh.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cE=Symbol("_vtc");function uE(t,e,n){const i=t[cE];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hE=Symbol("_vod");function dE(t,e,n){const i=t.style,s=Fe(n);if(n&&!s){if(e&&!Fe(e))for(const r in e)n[r]==null&&wa(i,r,"");for(const r in n)wa(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),hE in t&&(i.display=r)}}const wh=/\s*!important$/;function wa(t,e,n){if(W(n))n.forEach(i=>wa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=fE(t,e);wh.test(n)?t.setProperty(Ji(i),n.replace(wh,""),"important"):t[i]=n}}const Ch=["Webkit","Moz","ms"],Fl={};function fE(t,e){const n=Fl[e];if(n)return n;let i=Xt(e);if(i!=="filter"&&i in t)return Fl[e]=i;i=Wo(i);for(let s=0;s<Ch.length;s++){const r=Ch[s]+i;if(r in t)return Fl[e]=r}return e}const Ih="http://www.w3.org/1999/xlink";function pE(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const r=bv(e);n==null||r&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gE(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function un(t,e,n,i){t.addEventListener(e,n,i)}function _E(t,e,n,i){t.removeEventListener(e,n,i)}const Th=Symbol("_vei");function mE(t,e,n,i,s=null){const r=t[Th]||(t[Th]={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=vE(e);if(i){const c=r[e]=wE(i,s);un(t,l,c,a)}else o&&(_E(t,l,o,a),r[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function vE(t){let e;if(bh.test(t)){e={};let i;for(;i=t.match(bh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ji(t.slice(2)),e]}let Ul=0;const yE=Promise.resolve(),EE=()=>Ul||(yE.then(()=>Ul=0),Ul=Date.now());function wE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Mt(CE(i,n.value),e,5,[i])};return n.value=t,n.attached=EE(),n}function CE(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Sh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,IE=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?uE(t,i,s):e==="style"?dE(t,n,i):Vo(e)?uc(e)||mE(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TE(t,e,i,s))?gE(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),pE(t,e,i,s))};function TE(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sh(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sh(e)&&Fe(n)?!1:e in t}const Hn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Xr(e,n):e};function bE(t){t.target.composing=!0}function Rh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const St=Symbol("_assign"),Ct={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[St]=Hn(s);const r=i||s.props&&s.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=no(l)),t[St](l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",bE),un(t,"compositionend",Rh),un(t,"change",Rh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[St]=Hn(r),t.composing)return;const o=s||t.type==="number"?no(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===l)||(t.value=l))}},SE={deep:!0,created(t,e,n){t[St]=Hn(n),un(t,"change",()=>{const i=t._modelValue,s=Hi(t),r=t.checked,o=t[St];if(W(i)){const l=fc(i,s),a=l!==-1;if(r&&!a)o(i.concat(s));else if(!r&&a){const c=[...i];c.splice(l,1),o(c)}}else if(Qi(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(xp(t,r))})},mounted:Ah,beforeUpdate(t,e,n){t[St]=Hn(n),Ah(t,e,n)}};function Ah(t,{value:e,oldValue:n},i){t._modelValue=e,W(e)?t.checked=fc(e,i.props.value)>-1:Qi(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=hi(e,xp(t,!0)))}const cn={created(t,{value:e},n){t.checked=hi(e,n.props.value),t[St]=Hn(n),un(t,"change",()=>{t[St](Hi(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[St]=Hn(i),e!==n&&(t.checked=hi(e,i.props.value))}},RE={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Qi(e);un(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?no(Hi(o)):Hi(o));t[St](t.multiple?s?new Set(r):r:r[0])}),t[St]=Hn(i)},mounted(t,{value:e}){Ph(t,e)},beforeUpdate(t,e,n){t[St]=Hn(n)},updated(t,{value:e}){Ph(t,e)}};function Ph(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Qi(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=Hi(r);if(n)W(e)?r.selected=fc(e,o)>-1:r.selected=e.has(o);else if(hi(Hi(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Hi(t){return"_value"in t?t._value:t.value}function xp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const AE=Ge({patchProp:IE},aE);let Nh;function PE(){return Nh||(Nh=By(AE))}const NE=(...t)=>{const e=PE().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=kE(i);if(!s)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function kE(t){return Fe(t)?document.querySelector(t):t}var OE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Dp;const el=t=>Dp=t,Mp=Symbol();function Ca(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ks||(ks={}));function xE(){const t=Uf(!0),e=t.run(()=>he({}));let n=[],i=[];const s=Ko({install(r){el(s),s._a=r,r.provide(Mp,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!OE?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Lp=()=>{};function kh(t,e,n,i=Lp){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&pc()&&$f(s),s}function wi(t,...e){t.slice().forEach(n=>{n(...e)})}const DE=t=>t();function Ia(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Ca(s)&&Ca(i)&&t.hasOwnProperty(n)&&!Ne(i)&&!kn(i)?t[n]=Ia(s,i):t[n]=i}return t}const ME=Symbol();function LE(t){return!Ca(t)||!t.hasOwnProperty(ME)}const{assign:Sn}=Object;function FE(t){return!!(Ne(t)&&t.effect)}function UE(t,e,n,i){const{state:s,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=s?s():{});const u=wc(n.state.value[t]);return Sn(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ko(qe(()=>{el(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return a=Fp(t,c,e,n,i,!0),a}function Fp(t,e,n={},i,s,r){let o;const l=Sn({actions:{}},n),a={deep:!0};let c,u,h=[],d=[],f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),he({});let v;function S(Q){let J;c=u=!1,typeof Q=="function"?(Q(i.state.value[t]),J={type:ks.patchFunction,storeId:t,events:f}):(Ia(i.state.value[t],Q),J={type:ks.patchObject,payload:Q,storeId:t,events:f});const ye=v=Symbol();Ic().then(()=>{v===ye&&(c=!0)}),u=!0,wi(h,J,i.state.value[t])}const P=r?function(){const{state:J}=n,ye=J?J():{};this.$patch(Ue=>{Sn(Ue,ye)})}:Lp;function D(){o.stop(),h=[],d=[],i._s.delete(t)}function U(Q,J){return function(){el(i);const ye=Array.from(arguments),Ue=[],tt=[];function ot(X){Ue.push(X)}function rn(X){tt.push(X)}wi(d,{args:ye,name:Q,store:q,after:ot,onError:rn});let nt;try{nt=J.apply(this&&this.$id===t?this:q,ye)}catch(X){throw wi(tt,X),X}return nt instanceof Promise?nt.then(X=>(wi(Ue,X),X)).catch(X=>(wi(tt,X),Promise.reject(X))):(wi(Ue,nt),nt)}}const N={_p:i,$id:t,$onAction:kh.bind(null,d),$patch:S,$reset:P,$subscribe(Q,J={}){const ye=kh(h,Q,J.detached,()=>Ue()),Ue=o.run(()=>pn(()=>i.state.value[t],tt=>{(J.flush==="sync"?u:c)&&Q({storeId:t,type:ks.direct,events:f},tt)},Sn({},a,J)));return ye},$dispose:D},q=pr(N);i._s.set(t,q);const Re=(i._a&&i._a.runWithContext||DE)(()=>i._e.run(()=>(o=Uf()).run(e)));for(const Q in Re){const J=Re[Q];if(Ne(J)&&!FE(J)||kn(J))r||(g&&LE(J)&&(Ne(J)?J.value=g[Q]:Ia(J,g[Q])),i.state.value[t][Q]=J);else if(typeof J=="function"){const ye=U(Q,J);Re[Q]=ye,l.actions[Q]=J}}return Sn(q,Re),Sn(re(q),Re),Object.defineProperty(q,"$state",{get:()=>i.state.value[t],set:Q=>{S(J=>{Sn(J,Q)})}}),i._p.forEach(Q=>{Sn(q,o.run(()=>Q({store:q,app:i._a,pinia:i,options:l})))}),g&&r&&n.hydrate&&n.hydrate(q.$state,g),c=!0,u=!0,q}function Up(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(l,a){const c=Dy();return l=l||(c?ht(Mp,null):null),l&&el(l),l=Dp,l._s.has(i)||(r?Fp(i,e,s,l):UE(i,s,l)),l._s.get(i)}return o.$id=i,o}(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.vue3-marquee{display:flex!important;position:relative}.vue3-marquee.horizontal{overflow-x:hidden!important;flex-direction:row!important;width:100%;height:max-content}.vue3-marquee.vertical{overflow-y:hidden!important;flex-direction:column!important;height:100%;width:max-content}.vue3-marquee:hover>.marquee{animation-play-state:var(--pauseOnHover)}.vue3-marquee:active>.marquee{animation-play-state:var(--pauseOnClick)}.vue3-marquee>.marquee{flex:0 0 auto;min-width:var(--min-width);min-height:var(--min-height);z-index:1;animation:var(--orientation) var(--duration) linear var(--delay) var(--loops);animation-play-state:var(--pauseAnimation);animation-direction:var(--direction)}.vue3-marquee.horizontal>.marquee{display:flex;flex-direction:row;align-items:center}.vue3-marquee.vertical>.marquee{display:flex;flex-direction:column;align-items:center}@keyframes scrollX{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes scrollY{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.vue3-marquee>.overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.transparent-overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.overlay:before,.vue3-marquee>.overlay:after{content:"";position:absolute;z-index:2}.vue3-marquee.horizontal>.overlay:before,.vue3-marquee.horizontal>.overlay:after{background:linear-gradient(to right,var(--gradient-color));height:100%;width:var(--gradient-length)}.vue3-marquee.vertical>.overlay:before,.vue3-marquee.vertical>.overlay:after{background:linear-gradient(to bottom,var(--gradient-color));height:var(--gradient-length);width:100%}.vue3-marquee.horizontal>.overlay:after{transform:rotate(180deg)}.vue3-marquee.vertical>.overlay:after{transform:rotate(-180deg)}.vue3-marquee>.overlay:before{left:0;top:0}.vue3-marquee.horizontal>.overlay:after{right:0;top:0}.vue3-marquee.vertical>.overlay:after{left:0;bottom:0}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var $E=Object.defineProperty,Oh=Object.getOwnPropertySymbols,BE=Object.prototype.hasOwnProperty,HE=Object.prototype.propertyIsEnumerable,xh=(t,e,n)=>e in t?$E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dh=(t,e)=>{for(var n in e||(e={}))BE.call(e,n)&&xh(t,n,e[n]);if(Oh)for(var n of Oh(e))HE.call(e,n)&&xh(t,n,e[n]);return t},VE=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const jE=bc({props:{vertical:{type:Boolean,default:!1},direction:{type:String,default:"normal"},duration:{type:Number,default:20},delay:{type:Number,default:0},loop:{type:Number,default:0},clone:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},gradientColor:{type:Array,default:[255,255,255]},gradientWidth:{type:String},gradientLength:{type:String},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},pause:{type:Boolean,default:!1},animateOnOverflowOnly:{type:Boolean,default:!1}},emits:["onComplete","onLoopComplete","onPause","onResume","onOverflowDetected","onOverflowCleared"],setup(t,{emit:e}){const n=he(0),i=he("100%"),s=he("100%"),r=he(0),o=he(!1),l=he(!1),a=he(0),c=he(0),u=he(0),h=he(0),d=he(!1),f=he(!1),g=he(0),v=he(null),S=he("200px"),P=he(!1),D=he(null),U=he(null),N=async()=>{await q(),r.value++},q=async()=>{t.vertical&&(o.value=!0),setInterval(()=>{if(i.value="0%",s.value="0%",D.value!==null&&U.value!==null&&D.value&&U.value)if(t.vertical&&"clientHeight"in D.value&&"clientHeight"in U.value){h.value=D.value.clientHeight,u.value=U.value.clientHeight;const X=Math.ceil(u.value/h.value);return n.value=isFinite(X)?X:0,o.value=!1,n.value}else if(!t.vertical&&"clientWidth"in D.value&&"clientWidth"in U.value){if(c.value=D.value.clientWidth,a.value=U.value.clientWidth,t.animateOnOverflowOnly)return c.value<a.value?(l.value=!0,e("onOverflowDetected")):(l.value=!1,e("onOverflowCleared")),0;const X=Math.ceil(a.value/c.value);return n.value=isFinite(X)?X:0,n.value}else return i.value="100%",s.value="100%",0;else return i.value="100%",s.value="100%",0},100)};pn(c,async()=>{t.clone&&N()}),pn(a,async()=>{(t.clone||t.animateOnOverflowOnly)&&N()}),pn(()=>t.pause,(X,oe)=>{X!==oe&&e(X?"onResume":"onPause")});const ce=()=>{t.pauseOnHover&&(e("onPause"),d.value=!0)},Re=()=>{t.pauseOnHover&&(e("onResume"),d.value=!1)},Q=()=>{t.pauseOnClick&&(e("onPause"),f.value=!0)},J=()=>{t.pauseOnClick&&(e("onResume"),f.value=!1)},ye=qe(()=>t.pause||t.vertical&&o.value||t.animateOnOverflowOnly&&l.value?"paused":"running"),Ue=qe(()=>t.pauseOnHover&&(d.value||f.value)||!t.pauseOnHover&&ye.value==="paused"?"paused":"running"),tt=qe(()=>t.pauseOnHover&&d.value||t.pauseOnClick&&f.value||!t.pauseOnHover&&ye.value==="paused"?"paused":"running"),ot=qe(()=>{const X={"--duration":`${t.duration}s`,"--delay":`${t.delay}s`,"--direction":`${t.direction}`,"--pauseOnHover":`${Ue.value}`,"--pauseOnClick":`${tt.value}`,"--pauseAnimation":`${ye.value}`,"--loops":`${t.loop===0?"infinite":t.loop}`,"--gradient-color":`rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 1), rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 0)`,"--gradient-length":`${S.value}`,"--min-width":`${i.value}`,"--min-height":`${s.value}`},oe={"--orientation":"scrollX",orientation:"horizontal"};return t.vertical&&(oe["--orientation"]="scrollY"),Dh(Dh({},X),oe)}),rn=qe(()=>!!t.gradient),nt=async()=>{t.vertical?(s.value="100%",i.value="auto",t.animateOnOverflowOnly&&console.warn("The `animateOnOverflowOnly` prop is not supported for vertical marquees.")):(s.value="auto",t.animateOnOverflowOnly?i.value="auto":i.value="100%"),t.gradient&&(t.gradientWidth?(console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."),S.value=t.gradientWidth):t.gradientLength&&(S.value=t.gradientLength)),(t.clone||t.animateOnOverflowOnly)&&(await q(),N()),P.value=!0};return Sc(async()=>{nt(),v.value=setInterval(()=>{g.value++,t.loop!==0&&g.value===t.loop&&(e("onComplete"),clearInterval(v.value)),e("onLoopComplete")},t.duration*1e3)}),gp(()=>{clearInterval(v.value)}),{ready:P,contentWidth:c,containerWidth:a,contentHeight:h,containerHeight:u,loopCounter:g,loopInterval:v,mouseOverMarquee:d,mouseDownMarquee:f,minWidth:i,minHeight:s,animateOnOverflowPause:l,marqueeContent:D,marqueeOverlayContainer:U,componentKey:r,showGradient:rn,cloneAmount:n,ForcesUpdate:N,checkForClone:q,setupMarquee:nt,getCurrentStyle:ot,hoverStarted:ce,hoverEnded:Re,mouseDown:Q,mouseUp:J}}}),WE={class:"transparent-overlay",ref:"marqueeOverlayContainer","aria-hidden":!0},zE={class:"marquee",ref:"marqueeContent"},qE={key:1,"aria-hidden":!0,class:"marquee"};function KE(t,e,n,i,s,r){return t.ready?(F(),B("div",{class:_n(["vue3-marquee",{vertical:t.vertical,horizontal:!t.vertical}]),style:zo(t.getCurrentStyle),key:t.componentKey,onMouseenter:e[0]||(e[0]=(...o)=>t.hoverStarted&&t.hoverStarted(...o)),onMouseleave:e[1]||(e[1]=(...o)=>t.hoverEnded&&t.hoverEnded(...o)),onMousedown:e[2]||(e[2]=(...o)=>t.mouseDown&&t.mouseDown(...o)),onMouseup:e[3]||(e[3]=(...o)=>t.mouseUp&&t.mouseUp(...o))},[y("div",WE,null,512),t.showGradient?(F(),B("div",{key:0,"aria-hidden":!0,class:_n(["overlay",{vertical:t.vertical,horizontal:!t.vertical}])},null,2)):ve("",!0),y("div",zE,[Dl(t.$slots,"default")],512),!t.animateOnOverflowOnly||t.animateOnOverflowOnly&&!t.animateOnOverflowPause?(F(),B("div",qE,[Dl(t.$slots,"default")])):ve("",!0),(F(!0),B(Pe,null,xn(t.cloneAmount,o=>(F(),B("div",{"aria-hidden":!0,class:"marquee cloned",key:o},[Dl(t.$slots,"default")]))),128))],38)):ve("",!0)}var GE=VE(jE,[["render",KE]]),YE={install(t,e){var n;const i=(n=e==null?void 0:e.name)!=null?n:"Vue3Marquee";t.component(i,GE)}};function XE(t){return typeof t=="object"&&t!==null}function Mh(t,e){return t=XE(t)?t:Object.create(null),new Proxy(t,{get(n,i,s){return i==="key"?Reflect.get(n,i,s):Reflect.get(n,i,s)||Reflect.get(e,i,s)}})}function QE(t,e){return e.reduce((n,i)=>n==null?void 0:n[i],t)}function JE(t,e,n){return e.slice(0,-1).reduce((i,s)=>/^(__proto__)$/.test(s)?{}:i[s]=i[s]||{},t)[e[e.length-1]]=n,t}function ZE(t,e){return e.reduce((n,i)=>{const s=i.split(".");return JE(n,s,QE(t,s))},{})}function ew(t,e){return n=>{var i;try{const{storage:s=localStorage,beforeRestore:r=void 0,afterRestore:o=void 0,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:a=e.$id,paths:c=null,debug:u=!1}=n;return{storage:s,beforeRestore:r,afterRestore:o,serializer:l,key:((i=t.key)!=null?i:h=>h)(typeof a=="string"?a:a(e.$id)),paths:c,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function Lh(t,{storage:e,serializer:n,key:i,debug:s}){try{const r=e==null?void 0:e.getItem(i);r&&t.$patch(n==null?void 0:n.deserialize(r))}catch(r){s&&console.error("[pinia-plugin-persistedstate]",r)}}function Fh(t,{storage:e,serializer:n,key:i,paths:s,debug:r}){try{const o=Array.isArray(s)?ZE(t,s):t;e.setItem(i,n.serialize(o))}catch(o){r&&console.error("[pinia-plugin-persistedstate]",o)}}function tw(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:i=n},store:s,pinia:r}=e;if(!i)return;if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const o=(Array.isArray(i)?i.map(l=>Mh(l,t)):[Mh(i,t)]).map(ew(t,s)).filter(Boolean);s.$persist=()=>{o.forEach(l=>{Fh(s.$state,l)})},s.$hydrate=({runHooks:l=!0}={})=>{o.forEach(a=>{const{beforeRestore:c,afterRestore:u}=a;l&&(c==null||c(e)),Lh(s,a),l&&(u==null||u(e))})},o.forEach(l=>{const{beforeRestore:a,afterRestore:c}=l;a==null||a(e),Lh(s,l),c==null||c(e),s.$subscribe((u,h)=>{Fh(h,l)},{detached:!0})})}}var nw=tw(),Uh={};/**
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
 */const $p={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+$p.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Bp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iw=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw new sw;const d=r<<2|l>>4;if(i.push(d),c!==64){const f=l<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hp=function(t){const e=Bp(t);return tl.encodeByteArray(e,!0)},ao=function(t){return Hp(t).replace(/\./g,"")},co=function(t){try{return tl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rw(t){return Vp(void 0,t)}function Vp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ow(n)||(t[n]=Vp(t[n],e[n]));return t}function ow(t){return t!=="__proto__"}/**
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
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aw=()=>lw().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof Uh>"u")return;const t=Uh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&co(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return aw()||cw()||uw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hw=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dw=t=>{const e=hw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},jp=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},fw=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ao(JSON.stringify(n)),ao(JSON.stringify(o)),""].join(".")}/**
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
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function gw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zp(){return $p.NODE_ADMIN===!0}function qp(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const mw="FirebaseError";class En extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=mw,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vw(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new En(s,l,i)}}function vw(t,e){return t.replace(yw,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const yw=/\{\$([^}]+)}/g;/**
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
 */function Ks(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
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
 */const Kp=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ks(co(r[0])||""),n=Ks(co(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Ew=function(t){const e=Kp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ww=function(t){const e=Kp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ji(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Bh(r)&&Bh(o)){if(!Ta(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Bh(t){return t!==null&&typeof t=="object"}/**
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
 */function xc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Cw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Iw(t,e){const n=new Tw(t,e);return n.subscribe.bind(n)}class Tw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=$l),s.error===void 0&&(s.error=$l),s.complete===void 0&&(s.complete=$l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $l(){}function Dc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Sw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,R(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nl=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class Rw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pw(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(t){return t===Yn?void 0:t}function Pw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const kw={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Ow=de.INFO,xw={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Dw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=xw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=Ow,this._logHandler=Dw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Mw=(t,e)=>e.some(n=>t instanceof n);let Hh,Vh;function Lw(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fw(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gp=new WeakMap,ba=new WeakMap,Yp=new WeakMap,Bl=new WeakMap,Mc=new WeakMap;function Uw(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Dn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gp.set(n,t)}).catch(()=>{}),Mc.set(e,t),e}function $w(t){if(ba.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ba.set(t,e)}let Sa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bw(t){Sa=t(Sa)}function Hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Hl(this),e,...n);return Yp.set(i,e.sort?e.sort():[e]),Dn(i)}:Fw().includes(t)?function(...e){return t.apply(Hl(this),e),Dn(Gp.get(this))}:function(...e){return Dn(t.apply(Hl(this),e))}}function Vw(t){return typeof t=="function"?Hw(t):(t instanceof IDBTransaction&&$w(t),Mw(t,Lw())?new Proxy(t,Sa):t)}function Dn(t){if(t instanceof IDBRequest)return Uw(t);if(Bl.has(t))return Bl.get(t);const e=Vw(t);return e!==t&&(Bl.set(t,e),Mc.set(e,t)),e}const Hl=t=>Mc.get(t);function jw(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Dn(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Dn(o.result),a.oldVersion,a.newVersion,Dn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ww=["get","getKey","getAll","getAllKeys","count"],zw=["put","add","delete","clear"],Vl=new Map;function jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=zw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ww.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Vl.set(e,r),r}Bw(t=>({...t,get:(e,n,i)=>jh(e,n)||t.get(e,n,i),has:(e,n)=>!!jh(e,n)||t.has(e,n)}));/**
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
 */class qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ra="@firebase/app",Wh="0.9.27";/**
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
 */const di=new gr("@firebase/app"),Gw="@firebase/app-compat",Yw="@firebase/analytics-compat",Xw="@firebase/analytics",Qw="@firebase/app-check-compat",Jw="@firebase/app-check",Zw="@firebase/auth",eC="@firebase/auth-compat",tC="@firebase/database",nC="@firebase/database-compat",iC="@firebase/functions",sC="@firebase/functions-compat",rC="@firebase/installations",oC="@firebase/installations-compat",lC="@firebase/messaging",aC="@firebase/messaging-compat",cC="@firebase/performance",uC="@firebase/performance-compat",hC="@firebase/remote-config",dC="@firebase/remote-config-compat",fC="@firebase/storage",pC="@firebase/storage-compat",gC="@firebase/firestore",_C="@firebase/firestore-compat",mC="firebase",vC="10.8.0";/**
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
 */const Aa="[DEFAULT]",yC={[Ra]:"fire-core",[Gw]:"fire-core-compat",[Xw]:"fire-analytics",[Yw]:"fire-analytics-compat",[Jw]:"fire-app-check",[Qw]:"fire-app-check-compat",[Zw]:"fire-auth",[eC]:"fire-auth-compat",[tC]:"fire-rtdb",[nC]:"fire-rtdb-compat",[iC]:"fire-fn",[sC]:"fire-fn-compat",[rC]:"fire-iid",[oC]:"fire-iid-compat",[lC]:"fire-fcm",[aC]:"fire-fcm-compat",[cC]:"fire-perf",[uC]:"fire-perf-compat",[hC]:"fire-rc",[dC]:"fire-rc-compat",[fC]:"fire-gcs",[pC]:"fire-gcs-compat",[gC]:"fire-fst",[_C]:"fire-fst-compat","fire-js":"fire-js",[mC]:"fire-js-all"};/**
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
 */const ho=new Map,Pa=new Map;function EC(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(Pa.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,t);for(const n of ho.values())EC(n,t);return!0}function wC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new ns("app","Firebase",CC);/**
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
 */class IC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const is=vC;function Xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Aa,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=jp()),!n)throw Mn.create("no-options");const r=ho.get(s);if(r){if(Ta(n,r.options)&&Ta(i,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const o=new Nw(s);for(const a of Pa.values())o.addComponent(a);const l=new IC(n,i,o);return ho.set(s,l),l}function Qp(t=Aa){const e=ho.get(t);if(!e&&t===Aa&&jp())return Xp();if(!e)throw Mn.create("no-app",{appName:t});return e}function wt(t,e,n){var i;let s=(i=yC[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(l.join(" "));return}Jt(new Ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const TC="firebase-heartbeat-database",bC=1,Gs="firebase-heartbeat-store";let jl=null;function Jp(){return jl||(jl=jw(TC,bC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),jl}async function SC(t){try{const n=(await Jp()).transaction(Gs),i=await n.objectStore(Gs).get(Zp(t));return await n.done,i}catch(e){if(e instanceof En)di.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});di.warn(n.message)}}}async function zh(t,e){try{const i=(await Jp()).transaction(Gs,"readwrite");await i.objectStore(Gs).put(e,Zp(t)),await i.done}catch(n){if(n instanceof En)di.warn(n.message);else{const i=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});di.warn(i.message)}}}function Zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RC=1024,AC=30*24*60*60*1e3;class PC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qh(),{heartbeatsToSend:i,unsentEntries:s}=NC(this._heartbeatsCache.heartbeats),r=ao(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qh(){return new Date().toISOString().substring(0,10)}function NC(t,e=RC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Kh(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kh(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class kC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qp()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(t){return ao(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OC(t){Jt(new Ft("platform-logger",e=>new qw(e),"PRIVATE")),Jt(new Ft("heartbeat",e=>new PC(e),"PRIVATE")),wt(Ra,Wh,t),wt(Ra,Wh,"esm2017"),wt("fire-js","")}OC("");function eg(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xC=tg,ng=new ns("auth","Firebase",tg());/**
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
 */const fo=new gr("@firebase/auth");function DC(t,...e){fo.logLevel<=de.WARN&&fo.warn(`Auth (${is}): ${t}`,...e)}function Zr(t,...e){fo.logLevel<=de.ERROR&&fo.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function Gh(t,...e){throw Lc(t,...e)}function ig(t,...e){return Lc(t,...e)}function MC(t,e,n){const i=Object.assign(Object.assign({},xC()),{[e]:n});return new ns("auth","Firebase",i).create(e,{appName:t.name})}function Lc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ng.create(t,...e)}function pe(t,e,...n){if(!t)throw Lc(e,...n)}function Os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zr(e),new Error(e)}function po(t,e){t||Os(e)}function LC(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LC()||gw()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _r{constructor(e,n){this.shortDelay=e,this.longDelay=n,po(n>e,"Short delay should be less than long delay!"),this.isMobile=Oc()||Wp()}get(){return FC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $C(t,e){po(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HC=new _r(3e4,6e4);function rg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function il(t,e,n,i,s={}){return og(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=xc(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),sg.fetch()(lg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function og(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},BC),e);try{const s=new VC(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Br(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Br(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Br(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw MC(t,u,c);Gh(t,u)}}catch(s){if(s instanceof En)throw s;Gh(t,"network-request-failed",{message:String(s)})}}function lg(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?$C(t.config,s):`${t.config.apiScheme}://${s}`}class VC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ig(this.auth,"network-request-failed")),HC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Br(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ig(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function jC(t,e){return il(t,"POST","/v1/accounts:delete",e)}async function WC(t,e){return il(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zC(t,e=!1){const n=Bt(t),i=await n.getIdToken(e),s=ag(i);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:xs(Wl(s.auth_time)),issuedAtTime:xs(Wl(s.iat)),expirationTime:xs(Wl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wl(t){return Number(t)*1e3}function ag(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const s=co(n);return s?JSON.parse(s):(Zr("Failed to decode base64 JWT payload"),null)}catch(s){return Zr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qC(t){const e=ag(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Na(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof En&&KC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function KC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Na(t,WC(n,{idToken:i}));pe(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?QC(r.providerUserInfo):[],l=XC(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new cg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YC(t){const e=Bt(t);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function QC(t){return t.map(e=>{var{providerId:n}=e,i=eg(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function JC(t,e){const n=await og(t,{},async()=>{const i=xc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=lg(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZC(t,e){return il(t,"POST","/v2/accounts:revokeToken",rg(t,e))}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await JC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ys;return i&&(pe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
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
 */function Tn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ki{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=eg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new cg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Na(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ki(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Na(this,jC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:N,isAnonymous:q,providerData:ce,stsTokenManager:Re}=n;pe(U&&Re,e,"internal-error");const Q=Ys.fromJSON(this.name,Re);pe(typeof U=="string",e,"internal-error"),Tn(h,e.name),Tn(d,e.name),pe(typeof N=="boolean",e,"internal-error"),pe(typeof q=="boolean",e,"internal-error"),Tn(f,e.name),Tn(g,e.name),Tn(v,e.name),Tn(S,e.name),Tn(P,e.name),Tn(D,e.name);const J=new ki({uid:U,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:q,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:Q,createdAt:P,lastLoginAt:D});return ce&&Array.isArray(ce)&&(J.providerData=ce.map(ye=>Object.assign({},ye))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ys;s.updateFromServerResponse(n);const r=new ki({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await go(r),r}}/**
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
 */const Xh=new Map;function ti(t){po(t instanceof Function,"Expected a class definition");let e=Xh.get(t);return e?(po(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xh.set(t,e),e)}/**
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
 */class ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ug.type="NONE";const Qh=ug;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zl(this.userKey,s.apiKey,r),this.fullPersistenceKey=zl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ki._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Oi(ti(Qh),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ti(Qh);const o=zl(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ki._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new Oi(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Oi(r,e,i))}}/**
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
 */function Jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r0(e))return"Blackberry";if(o0(e))return"Webos";if(t0(e))return"Safari";if((e.includes("chrome/")||n0(e))&&!e.includes("edge/"))return"Chrome";if(s0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function e0(t=Qt()){return/firefox\//i.test(t)}function t0(t=Qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n0(t=Qt()){return/crios\//i.test(t)}function i0(t=Qt()){return/iemobile/i.test(t)}function s0(t=Qt()){return/android/i.test(t)}function r0(t=Qt()){return/blackberry/i.test(t)}function o0(t=Qt()){return/webos/i.test(t)}/**
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
 */function hg(t,e=[]){let n;switch(t){case"Browser":n=Jh(Qt());break;case"Worker":n=`${Jh(Qt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${i}`}/**
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
 */class l0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function a0(t,e={}){return il(t,"GET","/v2/passwordPolicy",rg(t,e))}/**
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
 */const c0=6;class u0{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:c0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class h0{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zh(this),this.idTokenSubscription=new Zh(this),this.beforeStateQueue=new l0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ti(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Oi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Bt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a0(this),n=new u0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ZC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ti(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[ti(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function d0(t){return Bt(t)}class Zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iw(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function f0(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ti);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new _r(3e4,6e4);/**
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
 */new _r(2e3,1e4);/**
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
 */new _r(3e4,6e4);/**
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
 */new _r(5e3,15e3);var ed="@firebase/auth",td="1.6.0";/**
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
 */class p0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function g0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _0(t){Jt(new Ft("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hg(t)},c=new h0(i,s,r,a);return f0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Jt(new Ft("auth-internal",e=>{const n=d0(e.getProvider("auth").getImmediate());return(i=>new p0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(ed,td,g0(t)),wt(ed,td,"esm2017")}/**
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
 */const m0=5*60;fw("authIdTokenMaxAge");_0("Browser");/**
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
 */const v0=new Map,y0={activated:!1,tokenObservers:[]};function Ut(t){return v0.get(t)||Object.assign({},y0)}const nd={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class E0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Vi,this.pending.promise.catch(n=>{}),await w0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Vi,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function w0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const C0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},_o=new ns("appCheck","AppCheck",C0);function dg(t){if(!Ut(t).activated)throw _o.create("use-before-activation",{appName:t.name})}/**
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
 */const I0="firebase-app-check-database",T0=1,ka="firebase-app-check-store";let Hr=null;function b0(){return Hr||(Hr=new Promise((t,e)=>{try{const n=indexedDB.open(I0,T0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(_o.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(ka,{keyPath:"compositeKey"})}}}catch(n){e(_o.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Hr)}function S0(t,e){return R0(A0(t),e)}async function R0(t,e){const i=(await b0()).transaction(ka,"readwrite"),r=i.objectStore(ka).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},i.onerror=a=>{var c;l(_o.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function A0(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Oa=new gr("@firebase/app-check");function id(t,e){return qp()?S0(t,e).catch(n=>{Oa.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const P0={error:"UNKNOWN_ERROR"};function N0(t){return tl.encodeString(JSON.stringify(t),!1)}async function xa(t,e=!1){const n=t.app;dg(n);const i=Ut(n);let s=i.token,r;if(s&&!Is(s)&&(i.token=void 0,s=void 0),!s){const a=await i.cachedTokenPromise;a&&(Is(a)?s=a:await id(n,void 0))}if(!e&&s&&Is(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Ut(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?Oa.warn(a.message):Oa.error(a),r=a}let l;return s?r?Is(s)?l={token:s.token,internalError:r}:l=rd(r):(l={token:s.token},i.token=s,await id(n,s)):l=rd(r),o&&D0(n,l),l}async function k0(t){const e=t.app;dg(e);const{provider:n}=Ut(e);{const{token:i}=await n.getToken();return{token:i}}}function O0(t,e,n,i){const{app:s}=t,r=Ut(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Is(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),sd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>sd(t))}function fg(t,e){const n=Ut(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function sd(t){const{app:e}=t,n=Ut(e);let i=n.tokenRefresher;i||(i=x0(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function x0(t){const{app:e}=t;return new E0(async()=>{const n=Ut(e);let i;if(n.token?i=await xa(t,!0):i=await xa(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ut(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},nd.RETRIAL_MIN_WAIT,nd.RETRIAL_MAX_WAIT)}function D0(t,e){const n=Ut(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Is(t){return t.expireTimeMillis-Date.now()>0}function rd(t){return{token:N0(P0),error:t}}/**
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
 */class M0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ut(this.app);for(const n of e)fg(this.app,n.next);return Promise.resolve()}}function L0(t,e){return new M0(t,e)}function F0(t){return{getToken:e=>xa(t,e),getLimitedUseToken:()=>k0(t),addTokenListener:e=>O0(t,"INTERNAL",e),removeTokenListener:e=>fg(t.app,e)}}const U0="@firebase/app-check",$0="0.8.2",B0="app-check",od="app-check-internal";function H0(){Jt(new Ft(B0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return L0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(od).initialize()})),Jt(new Ft(od,t=>{const e=t.getProvider("app-check").getImmediate();return F0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wt(U0,$0)}H0();var V0="firebase",j0="10.8.0";/**
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
 */wt(V0,j0,"app");const pg=Symbol("firebaseApp");function gg(t){return Pp()&&ht(pg,null)||Qp(t)}const It=()=>{};function ss(t){return!!t&&typeof t=="object"}function W0(t){return ss(t)&&t.type==="document"}function z0(t){return ss(t)&&t.type==="collection"}function q0(t){return W0(t)||z0(t)}function K0(t){return ss(t)&&t.type==="query"}function G0(t){return ss(t)&&"ref"in t}function Y0(t){return ss(t)&&typeof t.bucket=="string"}const X0=Symbol.for("v-scx");function Q0(){return!!ht(X0,0)}var ld={};const ad="@firebase/database",cd="1.0.3";/**
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
 */let _g="";function J0(t){_g=t}/**
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
 */class Z0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Z0(e)}}catch{}return new eI},ni=mg("localStorage"),Da=mg("sessionStorage");/**
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
 */const xi=new gr("@firebase/database"),tI=function(){let t=1;return function(){return t++}}(),vg=function(t){const e=Sw(t),n=new Cw;n.update(e);const i=n.digest();return tl.encodeByteArray(i)},mr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=mr.apply(null,i):typeof i=="object"?e+=Me(i):e+=i,e+=" "}return e};let ai=null,ud=!0;const nI=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xi.logLevel=de.VERBOSE,ai=xi.log.bind(xi),e&&Da.set("logging_enabled",!0)):typeof t=="function"?ai=t:(ai=null,Da.remove("logging_enabled"))},Qe=function(...t){if(ud===!0&&(ud=!1,ai===null&&Da.get("logging_enabled")===!0&&nI(!0)),ai){const e=mr.apply(null,t);ai(e)}},vr=function(t){return function(...e){Qe(t,...e)}},Ma=function(...t){const e="FIREBASE INTERNAL ERROR: "+mr(...t);xi.error(e)},mn=function(...t){const e=`FIREBASE FATAL ERROR: ${mr(...t)}`;throw xi.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+mr(...t);xi.warn(e)},iI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",fi="[MAX_NAME]",rs=function(t,e){if(t===e)return 0;if(t===Wi||e===fi)return-1;if(e===Wi||t===fi)return 1;{const n=hd(t),i=hd(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},rI=function(t,e){return t===e?0:t<e?-1:1},fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Fc=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Me(e[i]),n+=":",n+=Fc(t[e[i]]);return n+="}",n},Eg=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wg=function(t){R(!yg(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},oI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const cI=new RegExp("^-?(0*)\\d{1,10}$"),uI=-2147483648,hI=2147483647,hd=function(t){if(cI.test(t)){const e=Number(t);if(e>=uI&&e<=hI)return e}return null},os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},dI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pI{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Di{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Di.OWNER="owner";/**
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
 */const Uc="5",Cg="v",Ig="s",Tg="r",bg="f",Sg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rg="ls",Ag="p",La="ac",Pg="websocket",Ng="long_polling";/**
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
 */class kg{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Og(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let i;if(e===Pg)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ng)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gI(t)&&(n.ns=t.namespace);const s=[];return pt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class _I{constructor(){this.counters_={}}incrementCounter(e,n=1){wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rw(this.counters_)}}/**
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
 */const ql={},Kl={};function $c(t){const e=t.toString();return ql[e]||(ql[e]=new _I),ql[e]}function mI(t,e){const n=t.toString();return Kl[n]||(Kl[n]=e()),Kl[n]}/**
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
 */class vI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&os(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const dd="start",yI="close",EI="pLPCommand",wI="pRTLPCB",xg="id",Dg="pw",Mg="ser",CI="cb",II="seg",TI="ts",bI="d",SI="dframe",Lg=1870,Fg=30,RI=Lg-Fg,AI=25e3,PI=3e4;class Si{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vr(e),this.stats_=$c(n),this.urlFn=a=>(this.appCheckToken&&(a[La]=this.appCheckToken),Og(n,Ng,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PI)),sI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bc((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dd)this.id=l,this.password=a;else if(o===yI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[dd]="t",i[Mg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[CI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Cg]=Uc,this.transportSessionId&&(i[Ig]=this.transportSessionId),this.lastSessionId&&(i[Rg]=this.lastSessionId),this.applicationId&&(i[Ag]=this.applicationId),this.appCheckToken&&(i[La]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(i[Tg]=bg);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Si.forceAllow_=!0}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){return Si.forceAllow_?!0:!Si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oI()&&!lI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Hp(n),s=Eg(i,RI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[SI]="t",i[xg]=e,i[Dg]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bc{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tI(),window[EI+this.uniqueCallbackIdentifier]=e,window[wI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Qe("frame writing exception"),l.stack&&Qe(l.stack),Qe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xg]=this.myID,e[Dg]=this.myPW,e[Mg]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fg+i.length<=Lg;){const o=this.pendingSegs.shift();i=i+"&"+II+s+"="+o.seg+"&"+TI+s+"="+o.ts+"&"+bI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(AI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const NI=16384,kI=45e3;let mo=null;typeof MozWebSocket<"u"?mo=MozWebSocket:typeof WebSocket<"u"&&(mo=WebSocket);class Nt{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vr(this.connId),this.stats_=$c(n),this.connURL=Nt.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Cg]=Uc,typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(o[Tg]=bg),n&&(o[Ig]=n),i&&(o[Rg]=i),s&&(o[La]=s),r&&(o[Ag]=r),Og(e,Pg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let i;zp(),this.mySock=new mo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&mo!==null&&!Nt.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ks(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Eg(n,NI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
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
 */class Xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Si,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nt&&Nt.isAvailable();let i=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Nt];else{const s=this.transports_=[];for(const r of Xs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xs.globalTransportInitialized_=!1;/**
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
 */const OI=6e4,xI=5e3,DI=10*1024,MI=100*1024,Gl="t",fd="d",LI="s",pd="r",FI="e",gd="o",_d="a",md="n",vd="p",UI="h";class $I{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vr("c:"+this.id+":"),this.transportManager_=new Xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gl in e){const n=e[Gl];n===_d?this.upgradeIfSecondaryHealthy_():n===pd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fs("t",e),i=fs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_d,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:md,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fs("t",e),i=fs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fs(Gl,e);if(fd in e){const i=e[fd];if(n===UI){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===md){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LI?this.onConnectionShutdown_(i):n===pd?this.onReset_(i):n===FI?Ma("Server Error: "+i):n===gd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ma("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uc!==i&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ug{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $g{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vo extends $g{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vo}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yd=32,Ed=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new Ee("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function Bg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function BI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Le(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ee)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Ee(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function st(t,e){const n=Z(t),i=Z(e);if(n===null)return e;if(n===i)return st(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Hc(t,e){if(Vn(t)!==Vn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Vn(t)>Vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class HI{constructor(e,n){this.errorPrefix_=n,this.parts_=Hg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nl(this.parts_[i]);jg(this)}}function VI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nl(e),jg(t)}function jI(t){const e=t.parts_.pop();t.byteLength_-=nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function jg(t){if(t.byteLength_>Ed)throw new Error(t.errorPrefix_+"has a key path longer than "+Ed+" bytes ("+t.byteLength_+").");if(t.parts_.length>yd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yd+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vc extends $g{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Vc}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ps=1e3,WI=60*5*1e3,wd=30*1e3,zI=1.3,qI=3e4,KI="server_kill",Cd=3;class gn extends Ug{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=gn.nextPersistentConnectionId_++,this.log_=vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=WI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!zp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Me(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Vi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;gn.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wn(e,"w")){const i=ji(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ww(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ew(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ma("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qI&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new $I(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{dt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(KI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&dt(h),a())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$h(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Fc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Ee(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cd&&(this.reconnectDelay_=wd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_g.replace(/\./g,"-")]=1,Oc()?e["framework.cordova"]=1:Wp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vo.getInstance().currentlyOnline();return $h(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ee(Wi,e),s=new ee(Wi,n);return this.compare(i,s)!==0}minPost(){return ee.MIN}}/**
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
 */let Vr;class Wg extends sl{static get __EMPTY_NODE(){return Vr}static set __EMPTY_NODE(e){Vr=e}compare(e,n){return rs(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(fi,Vr)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Vr)}toString(){return".key"}}const Mi=new Wg;/**
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
 */class jr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Be.RED,this.left=s??ut.EMPTY_NODE,this.right=r??ut.EMPTY_NODE}copy(e,n,i,s,r){return new Be(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class GI{copy(e,n,i,s,r){return this}insert(e,n,i){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jr(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new GI;/**
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
 */function YI(t,e){return rs(t.name,e.name)}function jc(t,e){return rs(t,e)}/**
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
 */let Fa;function XI(t){Fa=t}const zg=function(t){return typeof t=="number"?"number:"+wg(t):"string:"+t},qg=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wn(e,".sv"),"Priority must be a string or number.")}else R(t===Fa||t.isEmpty(),"priority of unexpected type.");R(t===Fa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Id;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qg(this.priorityNode_)}static set __childrenNodeConstructor(e){Id=e}static get __childrenNodeConstructor(){return Id}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:Z(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Z(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(R(i!==".priority"||Vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wg(this.value_):e+=this.value_,this.lazyHash_=vg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(i);return R(s>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Kg,Gg;function QI(t){Kg=t}function JI(t){Gg=t}class ZI extends sl{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?rs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(fi,new $e("[PRIORITY-POST]",Gg))}makePost(e,n){const i=Kg(e);return new ee(n,new $e("[PRIORITY-POST]",i))}toString(){return".priority"}}const ke=new ZI;/**
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
 */const eT=Math.log(2);class tT{constructor(e){const n=r=>parseInt(Math.log(r)/eT,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yo=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new Be(d,h.node,Be.BLACK,null,null);{const f=parseInt(u/2,10)+a,g=s(a,f),v=s(f+1,c);return h=t[f],d=n?n(h):h,new Be(d,h.node,Be.BLACK,g,v)}},r=function(a){let c=null,u=null,h=t.length;const d=function(g,v){const S=h-g,P=h;h-=g;const D=s(S+1,P),U=t[S],N=n?n(U):U;f(new Be(N,U.node,v,null,D))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),S=Math.pow(2,a.count-(g+1));v?d(S,Be.BLACK):(d(S,Be.BLACK),d(S,Be.RED))}return u},o=new tT(t.length),l=r(o);return new ut(i||e,l)};/**
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
 */let Yl;const Ci={};class hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Ci&&ke,"ChildrenNode.ts has not been loaded"),Yl=Yl||new hn({".priority":Ci},{".priority":ke}),Yl}get(e){const n=ji(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return wn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=yo(i,e.getCompare()):l=Ci;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new hn(u,c)}addToIndexes(e,n){const i=uo(this.indexes_,(s,r)=>{const o=ji(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),s===Ci)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(ee.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),yo(l,o.getCompare())}else return Ci;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new ee(e.name,l))),a.insert(e,e.node)}});return new hn(i,this.indexSet_)}removeFromIndexes(e,n){const i=uo(this.indexes_,s=>{if(s===Ci)return s;{const r=n.get(e.name);return r?s.remove(new ee(e.name,r)):s}});return new hn(i,this.indexSet_)}}/**
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
 */let gs;class z{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&qg(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gs||(gs=new z(new ut(jc),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gs}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ee(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?gs:this.priorityNode_;return new z(s,o,r)}}updateChild(e,n){const i=Z(e);if(i===null)return n;{R(Z(e)!==".priority"||Vn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ce(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ke,(o,l)=>{n[o]=l.val(e),i++,r&&z.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zg(this.getPriority().val())+":"),this.forEachChild(ke,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vg(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yr?-1:0}withIndex(e){if(e===Mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ke),s=n.getIterator(ke);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mi?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nT extends z{constructor(){super(new ut(jc),z.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const yr=new nT;Object.defineProperties(ee,{MIN:{value:new ee(Wi,z.EMPTY_NODE)},MAX:{value:new ee(fi,yr)}});Wg.__EMPTY_NODE=z.EMPTY_NODE;$e.__childrenNodeConstructor=z;XI(yr);JI(yr);/**
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
 */const iT=!0;function He(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,He(e))}if(!(t instanceof Array)&&iT){const n=[];let i=!1;if(pt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=He(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new ee(o,a)))}}),n.length===0)return z.EMPTY_NODE;const r=yo(n,YI,o=>o.name,jc);if(i){const o=yo(n,ke.getCompare());return new z(r,He(e),new hn({".priority":o},{".priority":ke}))}else return new z(r,He(e),hn.Default)}else{let n=z.EMPTY_NODE;return pt(t,(i,s)=>{if(wn(t,i)&&i.substring(0,1)!=="."){const r=He(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(He(e))}}QI(He);/**
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
 */class sT extends sl{constructor(e){super(),this.indexPath_=e,R(!te(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?rs(e.name,n.name):r}makePost(e,n){const i=He(e),s=z.EMPTY_NODE.updateChild(this.indexPath_,i);return new ee(n,s)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,yr);return new ee(fi,e)}toString(){return Hg(this.indexPath_,0).join("/")}}/**
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
 */class rT extends sl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?rs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const i=He(e);return new ee(n,i)}toString(){return".value"}}const oT=new rT;/**
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
 */function Yg(t){return{type:"value",snapshotNode:t}}function zi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wc{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qs(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zi(n,i)):o.trackChildChange(Js(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ke,(s,r)=>{n.hasChild(s)||i.trackChildChange(Qs(s,r))}),n.isLeafNode()||n.forEachChild(ke,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Js(s,r,o))}else i.trackChildChange(zi(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zs{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zs.getStartPost_(e),this.endPost_=Zs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new ee(n,i))||(i=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=z.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(z.EMPTY_NODE);const r=this;return n.forEachChild(ke,(o,l)=>{r.matches(new ee(o,l))||(s=s.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class aT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Zs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new ee(n,i))||(i=z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(z.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new ee(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Js(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Qs(n,h));const v=l.updateImmediateChild(n,z.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(zi(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Qs(c.name,c.node)),r.trackChildChange(zi(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
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
 */class zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cT(t){return t.loadsAllData()?new Wc(t.getIndex()):t.hasLimit()?new aT(t):new Zs(t)}function Td(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===oT?n="$value":t.index_===Mi?n="$key":(R(t.index_ instanceof sT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Me(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Me(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Me(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
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
 */class Eo extends Ug{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Eo.getListenId_(e,i),l={};this.listens_[o]=l;const a=Td(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),ji(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Eo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Td(e._queryParams),i=e._path.toString(),s=new Vi;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xc(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ks(l.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class uT{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wo(){return{value:null,children:new Map}}function Xg(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Z(e);t.children.has(i)||t.children.set(i,wo());const s=t.children.get(i);e=Ce(e),Xg(s,e,n)}}function Ua(t,e,n){t.value!==null?n(e,t.value):hT(t,(i,s)=>{const r=new Ee(e.toString()+"/"+i);Ua(s,r,n)})}function hT(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class dT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Sd=10*1e3,fT=30*1e3,pT=5*60*1e3;class gT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dT(e);const i=Sd+(fT-Sd)*Math.random();Ds(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;pt(e,(s,r)=>{r>0&&wn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*pT))}}/**
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
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Qg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Co{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=xt.ACK_USER_WRITE,this.source=Qg()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Co(le(),n,this.revert)}}else return R(Z(this.path)===e,"operationForChild called for unrelated child."),new Co(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class er{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new er(this.source,le()):new er(this.source,Ce(this.path))}}/**
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
 */class pi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=xt.OVERWRITE}operationForChild(e){return te(this.path)?new pi(this.source,le(),this.snap.getImmediateChild(e)):new pi(this.source,Ce(this.path),this.snap)}}/**
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
 */class tr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=xt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new pi(this.source,le(),n.value):new tr(this.source,le(),n)}else return R(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _T{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mT(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lT(o.childName,o.snapshotNode))}),_s(t,s,"child_removed",e,i,n),_s(t,s,"child_added",e,i,n),_s(t,s,"child_moved",r,i,n),_s(t,s,"child_changed",e,i,n),_s(t,s,"value",e,i,n),s}function _s(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>yT(t,l,a)),o.forEach(l=>{const a=vT(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function vT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yT(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const i=new ee(e.childName,e.snapshotNode),s=new ee(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function rl(t,e){return{eventCache:t,serverCache:e}}function Ms(t,e,n,i){return rl(new jn(e,n,i),t.serverCache)}function Jg(t,e,n,i){return rl(t.eventCache,new jn(e,n,i))}function Io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xl;const ET=()=>(Xl||(Xl=new ut(rI)),Xl);class Te{constructor(e,n=ET()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return pt(e,(i,s)=>{n=n.set(new Ee(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const i=Z(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ce(e),n);return r!=null?{path:Le(new Ee(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=Z(e),i=this.children.get(n);return i!==null?i.subtree(Ce(e)):new Te(null)}}set(e,n){if(te(e))return new Te(n,this.children);{const i=Z(e),r=(this.children.get(i)||new Te(null)).set(Ce(e),n),o=this.children.insert(i,r);return new Te(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=Z(e),i=this.children.get(n);if(i){const s=i.remove(Ce(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Te(null):new Te(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=Z(e),i=this.children.get(n);return i?i.get(Ce(e)):null}}setTree(e,n){if(te(e))return n;{const i=Z(e),r=(this.children.get(i)||new Te(null)).setTree(Ce(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Te(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Le(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(te(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),Le(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,i){if(te(e))return this;{this.value&&i(n,this.value);const s=Z(e),r=this.children.get(s);return r?r.foreachOnPath_(Ce(e),Le(n,s),i):new Te(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Le(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new Te(null))}}function Ls(t,e,n){if(te(e))return new Lt(new Te(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=st(s,e);return r=r.updateChild(o,n),new Lt(t.writeTree_.set(s,r))}else{const s=new Te(n),r=t.writeTree_.setTree(e,s);return new Lt(r)}}}function Rd(t,e,n){let i=t;return pt(n,(s,r)=>{i=Ls(i,Le(e,s),r)}),i}function Ad(t,e){if(te(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new Lt(n)}}function $a(t,e){return _i(t,e)!=null}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(st(n.path,e)):null}function Pd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(i,s)=>{e.push(new ee(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ee(i,s.value))}),e}function Ln(t,e){if(te(e))return t;{const n=_i(t,e);return n!=null?new Lt(new Te(n)):new Lt(t.writeTree_.subtree(e))}}function Ba(t){return t.writeTree_.isEmpty()}function qi(t,e){return Zg(le(),t.writeTree_,e)}function Zg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Zg(Le(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Le(t,".priority"),i)),n}}/**
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
 */function ol(t,e){return i_(e,t)}function wT(t,e,n,i,s){R(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ls(t.visibleWrites,e,n)),t.lastWriteId=i}function CT(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function IT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TT(l,i.path)?s=!1:Ot(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return bT(t),!0;if(i.snap)t.visibleWrites=Ad(t.visibleWrites,i.path);else{const l=i.children;pt(l,a=>{t.visibleWrites=Ad(t.visibleWrites,Le(i.path,a))})}return!0}else return!1}function TT(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(Le(t.path,n),e))return!0;return!1}function bT(t){t.visibleWrites=e_(t.allWrites,ST,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ST(t){return t.visible}function e_(t,e,n){let i=Lt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)Ot(n,o)?(l=st(n,o),i=Ls(i,l,r.snap)):Ot(o,n)&&(l=st(o,n),i=Ls(i,le(),r.snap.getChild(l)));else if(r.children){if(Ot(n,o))l=st(n,o),i=Rd(i,l,r.children);else if(Ot(o,n))if(l=st(o,n),te(l))i=Rd(i,le(),r.children);else{const a=ji(r.children,Z(l));if(a){const c=a.getChild(Ce(l));i=Ls(i,le(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return i}function t_(t,e,n,i,s){if(!i&&!s){const r=_i(t.visibleWrites,e);if(r!=null)return r;{const o=Ln(t.visibleWrites,e);if(Ba(o))return n;if(n==null&&!$a(o,le()))return null;{const l=n||z.EMPTY_NODE;return qi(o,l)}}}else{const r=Ln(t.visibleWrites,e);if(!s&&Ba(r))return n;if(!s&&n==null&&!$a(r,le()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ot(c.path,e)||Ot(e,c.path))},l=e_(t.allWrites,o,e),a=n||z.EMPTY_NODE;return qi(l,a)}}}function RT(t,e,n){let i=z.EMPTY_NODE;const s=_i(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ke,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ln(t.visibleWrites,e);return n.forEachChild(ke,(o,l)=>{const a=qi(Ln(r,new Ee(o)),l);i=i.updateImmediateChild(o,a)}),Pd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ln(t.visibleWrites,e);return Pd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function AT(t,e,n,i,s){R(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Le(e,n);if($a(t.visibleWrites,r))return null;{const o=Ln(t.visibleWrites,r);return Ba(o)?s.getChild(n):qi(o,s.getChild(n))}}function PT(t,e,n,i){const s=Le(e,n),r=_i(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ln(t.visibleWrites,s);return qi(o,i.getNode().getImmediateChild(n))}else return null}function NT(t,e){return _i(t.visibleWrites,e)}function kT(t,e,n,i,s,r,o){let l;const a=Ln(t.visibleWrites,e),c=_i(a,le());if(c!=null)l=c;else if(n!=null)l=qi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function OT(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function To(t,e,n,i){return t_(t.writeTree,t.treePath,e,n,i)}function Gc(t,e){return RT(t.writeTree,t.treePath,e)}function Nd(t,e,n,i){return AT(t.writeTree,t.treePath,e,n,i)}function bo(t,e){return NT(t.writeTree,Le(t.treePath,e))}function xT(t,e,n,i,s,r){return kT(t.writeTree,t.treePath,e,n,i,s,r)}function Yc(t,e,n){return PT(t.writeTree,t.treePath,e,n)}function n_(t,e){return i_(Le(t.treePath,e),t.writeTree)}function i_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class DT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Js(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Qs(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,zi(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Js(i,e.snapshotNode,s.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class MT{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const s_=new MT;class Xc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gi(this.viewCache_),r=xT(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function LT(t){return{filter:t}}function FT(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UT(t,e,n,i,s){const r=new DT;let o,l;if(n.type===xt.OVERWRITE){const c=n;c.source.fromUser?o=Ha(t,e,c.path,c.snap,i,s,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=So(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===xt.MERGE){const c=n;c.source.fromUser?o=BT(t,e,c.path,c.children,i,s,r):(R(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Va(t,e,c.path,c.children,i,s,l,r))}else if(n.type===xt.ACK_USER_WRITE){const c=n;c.revert?o=jT(t,e,c.path,i,s,r):o=HT(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===xt.LISTEN_COMPLETE)o=VT(t,e,n.path,i,r);else throw ts("Unknown operation type: "+n.type);const a=r.getChanges();return $T(e,o,a),{viewCache:o,changes:a}}function $T(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Io(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Yg(Io(e)))}}function r_(t,e,n,i,s,r){const o=e.eventCache;if(bo(i,n)!=null)return e;{let l,a;if(te(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gi(e),u=c instanceof z?c:z.EMPTY_NODE,h=Gc(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=To(i,gi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){R(Vn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Nd(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Ce(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Nd(i,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Yc(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Ms(e,l,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function So(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),f,null)}else{const f=Z(n);if(!a.isCompleteForPath(n)&&Vn(n)>1)return e;const g=Ce(n),S=a.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(a.getNode(),S):c=u.updateChild(a.getNode(),f,S,g,s_,null)}const h=Jg(e,c,a.isFullyInitialized()||te(n),u.filtersNodes()),d=new Xc(s,h,r);return r_(t,h,n,s,d,l)}function Ha(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new Xc(s,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Ms(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Ms(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Ce(n),f=l.getNode().getImmediateChild(h);let g;if(te(d))g=i;else{const v=u.getCompleteChild(h);v!=null?Bg(d)===".priority"&&v.getChild(Vg(d)).isEmpty()?g=v:g=v.updateChild(d,i):g=z.EMPTY_NODE}if(f.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),h,g,d,u,o);a=Ms(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function kd(t,e){return t.eventCache.isCompleteForChild(e)}function BT(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Le(n,a);kd(e,Z(u))&&(l=Ha(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Le(n,a);kd(e,Z(u))||(l=Ha(t,l,u,c,s,r,o))}),l}function Od(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Va(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;te(n)?c=i:c=new Te(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Od(t,f,d);a=So(t,a,new Ee(h),g,s,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),v=Od(t,g,d);a=So(t,a,new Ee(h),v,s,r,o,l)}}),a}function HT(t,e,n,i,s,r,o){if(bo(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(te(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return So(t,e,n,a.getNode().getChild(n),s,r,l,o);if(te(n)){let c=new Te(null);return a.getNode().forEachChild(Mi,(u,h)=>{c=c.set(new Ee(u),h)}),Va(t,e,n,c,s,r,l,o)}else return e}else{let c=new Te(null);return i.foreach((u,h)=>{const d=Le(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Va(t,e,n,c,s,r,l,o)}}function VT(t,e,n,i,s){const r=e.serverCache,o=Jg(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return r_(t,o,n,i,s_,s)}function jT(t,e,n,i,s,r){let o;if(bo(i,n)!=null)return e;{const l=new Xc(i,e,s),a=e.eventCache.getNode();let c;if(te(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=To(i,gi(e));else{const h=e.serverCache.getNode();R(h instanceof z,"serverChildren would be complete if leaf node"),u=Gc(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=Z(n);let h=Yc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Ce(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,z.EMPTY_NODE,Ce(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=To(i,gi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bo(i,le())!=null,Ms(e,c,o,t.filter.filtersNodes())}}/**
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
 */class WT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Wc(i.getIndex()),r=cT(i);this.processor_=LT(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(z.EMPTY_NODE,l.getNode(),null),u=new jn(a,o.isFullyInitialized(),s.filtersNodes()),h=new jn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=rl(h,u),this.eventGenerator_=new _T(this.query_)}get query(){return this.query_}}function zT(t){return t.viewCache_.serverCache.getNode()}function qT(t){return Io(t.viewCache_)}function KT(t,e){const n=gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function xd(t){return t.eventRegistrations_.length===0}function GT(t,e){t.eventRegistrations_.push(e)}function Dd(t,e,n){const i=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Md(t,e,n,i){e.type===xt.MERGE&&e.source.queryId!==null&&(R(gi(t.viewCache_),"We should always have a full cache before handling merges"),R(Io(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=UT(t.processor_,s,e,n,i);return FT(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,o_(t,r.changes,r.viewCache.eventCache.getNode(),null)}function YT(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(r,o)=>{i.push(zi(r,o))}),n.isFullyInitialized()&&i.push(Yg(n.getNode())),o_(t,i,n.getNode(),e)}function o_(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return mT(t.eventGenerator_,e,n,s)}/**
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
 */let Ro;class l_{constructor(){this.views=new Map}}function XT(t){R(!Ro,"__referenceConstructor has already been defined"),Ro=t}function QT(){return R(Ro,"Reference.ts has not been loaded"),Ro}function JT(t){return t.views.size===0}function Qc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return R(r!=null,"SyncTree gave us an op for an invalid query."),Md(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Md(o,e,n,i));return r}}function a_(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=To(n,s?i:null),a=!1;l?a=!0:i instanceof z?(l=Gc(n,i),a=!1):(l=z.EMPTY_NODE,a=!1);const c=rl(new jn(l,a,!1),new jn(i,s,!1));return new WT(e,c)}return o}function ZT(t,e,n,i,s,r){const o=a_(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),GT(o,n),YT(o,n)}function eb(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Wn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(Dd(c,n,i)),xd(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(Dd(a,n,i)),xd(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Wn(t)&&r.push(new(QT())(e._repo,e._path)),{removed:r,events:o}}function c_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Fn(t,e){let n=null;for(const i of t.views.values())n=n||KT(i,e);return n}function u_(t,e){if(e._queryParams.loadsAllData())return ll(t);{const i=e._queryIdentifier;return t.views.get(i)}}function h_(t,e){return u_(t,e)!=null}function Wn(t){return ll(t)!=null}function ll(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ao;function tb(t){R(!Ao,"__referenceConstructor has already been defined"),Ao=t}function nb(){return R(Ao,"Reference.ts has not been loaded"),Ao}let ib=1;class Ld{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=OT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d_(t,e,n,i,s){return wT(t.pendingWriteTree_,e,n,i,s),s?wr(t,new pi(Qg(),e,n)):[]}function ii(t,e,n=!1){const i=CT(t.pendingWriteTree_,e);if(IT(t.pendingWriteTree_,e)){let r=new Te(null);return i.snap!=null?r=r.set(le(),!0):pt(i.children,o=>{r=r.set(new Ee(o),!0)}),wr(t,new Co(i.path,r,n))}else return[]}function Er(t,e,n){return wr(t,new pi(qc(),e,n))}function sb(t,e,n){const i=Te.fromObject(n);return wr(t,new tr(qc(),e,i))}function rb(t,e){return wr(t,new er(qc(),e))}function ob(t,e,n){const i=Zc(t,n);if(i){const s=eu(i),r=s.path,o=s.queryId,l=st(r,e),a=new er(Kc(o),l);return tu(t,r,a)}else return[]}function Po(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||h_(o,e))){const a=eb(o,e,n,i);JT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>Wn(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=cb(d);for(let g=0;g<f.length;++g){const v=f[g],S=v.query,P=__(t,v);t.listenProvider_.startListening(Fs(S),nr(t,S),P.hashFn,P.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Fs(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(al(d));t.listenProvider_.stopListening(Fs(d),f)}))}ub(t,c)}return l}function f_(t,e,n,i){const s=Zc(t,i);if(s!=null){const r=eu(s),o=r.path,l=r.queryId,a=st(o,e),c=new pi(Kc(l),a,n);return tu(t,o,c)}else return[]}function lb(t,e,n,i){const s=Zc(t,i);if(s){const r=eu(s),o=r.path,l=r.queryId,a=st(o,e),c=Te.fromObject(n),u=new tr(Kc(l),a,c);return tu(t,o,u)}else return[]}function ja(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,f)=>{const g=st(d,s);r=r||Fn(f,g),o=o||Wn(f)});let l=t.syncPointTree_.get(s);l?(o=o||Wn(l),r=r||Fn(l,le())):(l=new l_,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=z.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,g)=>{const v=Fn(g,le());v&&(r=r.updateImmediateChild(f,v))}));const c=h_(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=al(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=hb();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=ol(t.pendingWriteTree_,s);let h=ZT(l,e,n,u,r,a);if(!c&&!o&&!i){const d=u_(l,e);h=h.concat(db(t,e,d))}return h}function Jc(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=st(o,e),c=Fn(l,a);if(c)return c});return t_(s,e,r,n,!0)}function ab(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=st(c,n);i=i||Fn(u,h)});let s=t.syncPointTree_.get(n);s?i=i||Fn(s,le()):(s=new l_,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new jn(i,!0,!1):null,l=ol(t.pendingWriteTree_,e._path),a=a_(s,e,l,r?o.getNode():z.EMPTY_NODE,r);return qT(a)}function wr(t,e){return p_(e,t.syncPointTree_,null,ol(t.pendingWriteTree_,le()))}function p_(t,e,n,i){if(te(t.path))return g_(t,e,n,i);{const s=e.get(le());n==null&&s!=null&&(n=Fn(s,le()));let r=[];const o=Z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=n_(i,o);r=r.concat(p_(l,a,c,u))}return s&&(r=r.concat(Qc(s,t,i,n))),r}}function g_(t,e,n,i){const s=e.get(le());n==null&&s!=null&&(n=Fn(s,le()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=n_(i,o),u=t.operationForChild(o);u&&(r=r.concat(g_(u,l,a,c)))}),s&&(r=r.concat(Qc(s,t,i,n))),r}function __(t,e){const n=e.query,i=nr(t,n);return{hashFn:()=>(zT(e)||z.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ob(t,n._path,i):rb(t,n._path);{const r=aI(s,n);return Po(t,n,null,r)}}}}function nr(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function Zc(t,e){return t.tagToQueryMap.get(e)}function eu(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function tu(t,e,n){const i=t.syncPointTree_.get(e);R(i,"Missing sync point for query tag that we're tracking");const s=ol(t.pendingWriteTree_,e);return Qc(i,n,s,null)}function cb(t){return t.fold((e,n,i)=>{if(n&&Wn(n))return[ll(n)];{let s=[];return n&&(s=c_(n)),pt(i,(r,o)=>{s=s.concat(o)}),s}})}function Fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nb())(t._repo,t._path):t}function ub(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=al(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function hb(){return ib++}function db(t,e,n){const i=e._path,s=nr(t,e),r=__(t,n),o=t.listenProvider_.startListening(Fs(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)R(!Wn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!te(c)&&u&&Wn(u))return[ll(u).query];{let d=[];return u&&(d=d.concat(c_(u).map(f=>f.query))),pt(h,(f,g)=>{d=d.concat(g)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Fs(u),nr(t,u))}}return o}/**
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
 */class nu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nu(n)}node(){return this.node_}}class iu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new iu(this.syncTree_,n)}node(){return Jc(this.syncTree_,this.path_)}}const fb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fd=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gb(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},gb=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&R(!1,"Unexpected increment value: "+i);const s=e.node();if(R(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},_b=function(t,e,n,i){return su(e,new iu(n,t),i)},m_=function(t,e,n){return su(t,new nu(e),n)};function su(t,e,n){const i=t.getPriority().val(),s=Fd(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fd(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new $e(l,He(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new $e(s))),o.forEachChild(ke,(l,a)=>{const c=su(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class ru{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ou(t,e){let n=e instanceof Ee?e:new Ee(e),i=t,s=Z(n);for(;s!==null;){const r=ji(i.node.children,s)||{children:{},childCount:0};i=new ru(s,i,r),n=Ce(n),s=Z(n)}return i}function ls(t){return t.node.value}function v_(t,e){t.node.value=e,Wa(t)}function y_(t){return t.node.childCount>0}function mb(t){return ls(t)===void 0&&!y_(t)}function cl(t,e){pt(t.node.children,(n,i)=>{e(new ru(n,t,i))})}function E_(t,e,n,i){n&&!i&&e(t),cl(t,s=>{E_(s,e,!0,i)}),n&&i&&e(t)}function vb(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Cr(t){return new Ee(t.parent===null?t.name:Cr(t.parent)+"/"+t.name)}function Wa(t){t.parent!==null&&yb(t.parent,t.name,t)}function yb(t,e,n){const i=mb(n),s=wn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Wa(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Wa(t))}/**
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
 */const Eb=/[\[\].#$\/\u0000-\u001F\u007F]/,wb=/[\[\].#$\u0000-\u001F\u007F]/,Ql=10*1024*1024,w_=function(t){return typeof t=="string"&&t.length!==0&&!Eb.test(t)},C_=function(t){return typeof t=="string"&&t.length!==0&&!wb.test(t)},Cb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C_(t)},I_=function(t,e,n,i){i&&e===void 0||lu(Dc(t,"value"),e,n)},lu=function(t,e,n){const i=n instanceof Ee?new HI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(i)+" with contents = "+e.toString());if(yg(e))throw new Error(t+"contains "+e.toString()+" "+Xn(i));if(typeof e=="string"&&e.length>Ql/3&&nl(e)>Ql)throw new Error(t+"contains a string greater than "+Ql+" utf8 bytes "+Xn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(pt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!w_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VI(i,o),lu(t,l,i),jI(i)}),s&&r)throw new Error(t+' contains ".value" child '+Xn(i)+" in addition to actual children.")}},T_=function(t,e,n,i){if(!(i&&n===void 0)&&!C_(n))throw new Error(Dc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ib=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),T_(t,e,n,i)},au=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Tb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!w_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cb(n))throw new Error(Dc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class bb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Hc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function b_(t,e,n){cu(t,n),S_(t,i=>Hc(i,e))}function Zt(t,e,n){cu(t,n),S_(t,i=>Ot(i,e)||Ot(e,i))}function S_(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Sb(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ai&&Qe("event: "+n.toString()),os(i)}}}/**
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
 */const Rb="repo_interrupt",Ab=25;class Pb{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wo(),this.transactionQueueTree_=new ru,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nb(t,e,n){if(t.stats_=$c(t.repoInfo_),t.forceRestClient_||dI())t.server_=new Eo(t.repoInfo_,(i,s,r,o)=>{Ud(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$d(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new gn(t.repoInfo_,e,(i,s,r,o)=>{Ud(t,i,s,r,o)},i=>{$d(t,i)},i=>{kb(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=mI(t.repoInfo_,()=>new gT(t.stats_,t.server_)),t.infoData_=new uT,t.infoSyncTree_=new Ld({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=Er(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),hu(t,"connected",!1),t.serverSyncTree_=new Ld({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Zt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function R_(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uu(t){return fb({timestamp:R_(t)})}function Ud(t,e,n,i,s){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=uo(n,c=>He(c));o=lb(t.serverSyncTree_,r,a,s)}else{const a=He(n);o=f_(t.serverSyncTree_,r,a,s)}else if(i){const a=uo(n,c=>He(c));o=sb(t.serverSyncTree_,r,a)}else{const a=He(n);o=Er(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=hl(t,r)),Zt(t.eventQueue_,l,o)}function $d(t,e){hu(t,"connected",e),e===!1&&Db(t)}function kb(t,e){pt(e,(n,i)=>{hu(t,n,i)})}function hu(t,e,n){const i=new Ee("/.info/"+e),s=He(n);t.infoData_.updateSnapshot(i,s);const r=Er(t.infoSyncTree_,i,s);Zt(t.eventQueue_,i,r)}function A_(t){return t.nextWriteId_++}function Ob(t,e,n){const i=ab(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=He(s).withIndex(e._queryParams.getIndex());ja(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Er(t.serverSyncTree_,e._path,r);else{const l=nr(t.serverSyncTree_,e);o=f_(t.serverSyncTree_,e._path,r,l)}return Zt(t.eventQueue_,e._path,o),Po(t.serverSyncTree_,e,n,null,!0),r},s=>(ul(t,"get for query "+Me(e)+" failed: "+s),Promise.reject(new Error(s))))}function xb(t,e,n,i,s){ul(t,"set",{path:e.toString(),value:n,priority:i});const r=uu(t),o=He(n,i),l=Jc(t.serverSyncTree_,e),a=m_(o,l,r),c=A_(t),u=d_(t.serverSyncTree_,e,a,c,!0);cu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const g=d==="ok";g||dt("set at "+e+" failed: "+d);const v=ii(t.serverSyncTree_,c,!g);Zt(t.eventQueue_,e,v),Fb(t,s,d,f)});const h=x_(t,e);hl(t,h),Zt(t.eventQueue_,h,[])}function Db(t){ul(t,"onDisconnectEvents");const e=uu(t),n=wo();Ua(t.onDisconnect_,le(),(s,r)=>{const o=_b(s,r,t.serverSyncTree_,e);Xg(n,s,o)});let i=[];Ua(n,le(),(s,r)=>{i=i.concat(Er(t.serverSyncTree_,s,r));const o=x_(t,s);hl(t,o)}),t.onDisconnect_=wo(),Zt(t.eventQueue_,le(),i)}function Mb(t,e,n){let i;Z(e._path)===".info"?i=ja(t.infoSyncTree_,e,n):i=ja(t.serverSyncTree_,e,n),b_(t.eventQueue_,e._path,i)}function Bd(t,e,n){let i;Z(e._path)===".info"?i=Po(t.infoSyncTree_,e,n):i=Po(t.serverSyncTree_,e,n),b_(t.eventQueue_,e._path,i)}function Lb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rb)}function ul(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function Fb(t,e,n,i){e&&os(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function P_(t,e,n){return Jc(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function du(t,e=t.transactionQueueTree_){if(e||dl(t,e),ls(e)){const n=k_(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Ub(t,Cr(e),n)}else y_(e)&&cl(e,n=>{du(t,n)})}function Ub(t,e,n){const i=n.map(c=>c.currentWriteId),s=P_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=st(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ul(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ii(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();dl(t,ou(t.transactionQueueTree_,e)),du(t,t.transactionQueueTree_),Zt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)os(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{dt("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}hl(t,e)}},o)}function hl(t,e){const n=N_(t,e),i=Cr(n),s=k_(t,n);return $b(t,s,i),i}function $b(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=st(n,a.path);let u=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(ii(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ab)u=!0,h="maxretry",s=s.concat(ii(t.serverSyncTree_,a.currentWriteId,!0));else{const d=P_(t,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){lu("transaction failed: Data returned ",f,a.path);let g=He(f);typeof f=="object"&&f!=null&&wn(f,".priority")||(g=g.updatePriority(d.getPriority()));const S=a.currentWriteId,P=uu(t),D=m_(g,d,P);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=D,a.currentWriteId=A_(t),o.splice(o.indexOf(S),1),s=s.concat(d_(t.serverSyncTree_,a.path,D,a.currentWriteId,a.applyLocally)),s=s.concat(ii(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",s=s.concat(ii(t.serverSyncTree_,a.currentWriteId,!0))}Zt(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}dl(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)os(i[l]);du(t,t.transactionQueueTree_)}function N_(t,e){let n,i=t.transactionQueueTree_;for(n=Z(e);n!==null&&ls(i)===void 0;)i=ou(i,n),e=Ce(e),n=Z(e);return i}function k_(t,e){const n=[];return O_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function O_(t,e,n){const i=ls(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cl(e,s=>{O_(t,s,n)})}function dl(t,e){const n=ls(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,v_(e,n.length>0?n:void 0)}cl(e,i=>{dl(t,i)})}function x_(t,e){const n=Cr(N_(t,e)),i=ou(t.transactionQueueTree_,e);return vb(i,s=>{Jl(t,s)}),Jl(t,i),E_(i,s=>{Jl(t,s)}),n}function Jl(t,e){const n=ls(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?v_(e,void 0):n.length=r+1,Zt(t.eventQueue_,Cr(e),s);for(let o=0;o<i.length;o++)os(i[o])}}/**
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
 */function Bb(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Hb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hd=function(t,e){const n=Vb(t),i=n.namespace;n.domain==="firebase.com"&&mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iI();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kg(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Ee(n.pathString)}},Vb=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Bb(t.substring(u,h)));const d=Hb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */const Vd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jb=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Vd.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vd.charAt(e[s]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class D_{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class M_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class L_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fu{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return te(this._path)?null:Bg(this._path)}get ref(){return new nn(this._repo,this._path)}get _queryIdentifier(){const e=bd(this._queryParams),n=Fc(e);return n==="{}"?"default":n}get _queryObject(){return bd(this._queryParams)}isEqual(e){if(e=Bt(e),!(e instanceof fu))return!1;const n=this._repo===e._repo,i=Hc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+BI(this._path)}}class nn extends fu{constructor(e,n){super(e,n,new zc,!1)}get parent(){const e=Vg(this._path);return e===null?null:new nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ki{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),i=Gi(this.ref,e);return new Ki(this._node.getChild(n),i,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ki(s,Gi(this.ref,i),ke)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ts(t,e){return t=Bt(t),t._checkNotDeleted("ref"),e!==void 0?Gi(t._root,e):t._root}function Gi(t,e){return t=Bt(t),Z(t._path)===null?Ib("child","path",e,!1):T_("child","path",e,!1),new nn(t._repo,Le(t._path,e))}function Wb(t,e){t=Bt(t),au("push",t._path),I_("push",e,t._path,!0);const n=R_(t._repo),i=jb(n),s=Gi(t,i),r=Gi(t,i);let o;return e!=null?o=No(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function zb(t){return au("remove",t._path),No(t,null)}function No(t,e){t=Bt(t),au("set",t._path),I_("set",e,t._path,!1);const n=new Vi;return xb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function pu(t){t=Bt(t);const e=new L_(()=>{}),n=new fl(e);return Ob(t._repo,t,n).then(i=>new Ki(i,new nn(t._repo,t._path),t._queryParams.getIndex()))}class fl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new D_("value",this,new Ki(e.snapshotNode,new nn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}matches(e){return e instanceof fl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const i=Gi(new nn(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new D_(e.type,this,new Ki(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ir(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(u,h)=>{Bd(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new L_(n,r||void 0),l=e==="value"?new fl(o):new gu(e,o);return Mb(t._repo,t,l),()=>Bd(t._repo,t,l)}function F_(t,e,n,i){return Ir(t,"value",e,n,i)}function qb(t,e,n,i){return Ir(t,"child_added",e,n,i)}function Kb(t,e,n,i){return Ir(t,"child_changed",e,n,i)}function Gb(t,e,n,i){return Ir(t,"child_moved",e,n,i)}function Yb(t,e,n,i){return Ir(t,"child_removed",e,n,i)}XT(nn);tb(nn);/**
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
 */const Xb="FIREBASE_DATABASE_EMULATOR_HOST",za={};let Qb=!1;function Jb(t,e,n,i){t.repoInfo_=new kg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Zb(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hd(r,s),l=o.repoInfo,a,c;typeof process<"u"&&ld&&(c=ld[Xb]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Hd(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new Di(Di.OWNER):new pI(t.name,t.options,e);Tb("Invalid Firebase Database URL",o),te(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tS(l,t,u,new fI(t.name,n));return new nS(h,t)}function eS(t,e){const n=za[e];(!n||n[t.key]!==t)&&mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Lb(t),delete n[t.key]}function tS(t,e,n,i){let s=za[e.name];s||(s={},za[e.name]=s);let r=s[t.toURLString()];return r&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Pb(t,Qb,n,i),s[t.toURLString()]=r,r}class nS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}}function iS(t=Qp(),e){const n=wC(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=dw("database");i&&sS(n,...i)}return n}function sS(t,e,n,i={}){t=Bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Di(Di.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:pw(i.mockUserToken,t.app.options.projectId);r=new Di(o)}Jb(s,e,n,r)}/**
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
 */function rS(t){J0(is),Jt(new Ft("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zb(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(ad,cd,t),wt(ad,cd,"esm2017")}gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rS();var oS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,_u=_u||{},K=oS||self;function pl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lS(t){return Object.prototype.hasOwnProperty.call(t,Zl)&&t[Zl]||(t[Zl]=++aS)}var Zl="closure_uid_"+(1e9*Math.random()>>>0),aS=0;function cS(t,e,n){return t.call.apply(t.bind,arguments)}function uS(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=cS:Ze=uS,Ze.apply(null,arguments)}function Wr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function zn(){this.s=this.s,this.o=this.o}var hS=0;zn.prototype.s=!1;zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hS!=0)&&lS(this)};zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const U_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function jd(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(pl(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var dS=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};K.addEventListener("test",n,e),K.removeEventListener("test",n,e)}catch{}return t}();function ir(t){return/^[\s\xa0]*$/.test(t)}function gl(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return gl().indexOf(t)!=-1}function vu(t){return vu[" "](t),t}vu[" "]=function(){};function fS(t,e){var n=oR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pS=qt("Opera"),sr=qt("Trident")||qt("MSIE"),$_=qt("Edge"),qa=$_||sr,B_=qt("Gecko")&&!(gl().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),gS=gl().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function H_(){var t=K.document;return t?t.documentMode:void 0}e:{var Wd="",ea=function(){var t=gl();if(B_)return/rv:([^\);]+)(\)|;)/.exec(t);if($_)return/Edge\/([\d\.]+)/.exec(t);if(sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gS)return/WebKit\/(\S+)/.exec(t);if(pS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ea&&(Wd=ea?ea[1]:""),sr){var zd=H_();if(zd!=null&&zd>parseFloat(Wd))break e}}K.document&&sr&&H_();function rr(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B_){e:{try{vu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_S[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rr.$.h.call(this)}}We(rr,et);var _S={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var br="closure_listenable_"+(1e6*Math.random()|0),mS=0;function vS(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++mS,this.fa=this.ia=!1}function _l(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function yS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function V_(t){const e={};for(const n in t)e[n]=t[n];return e}const qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j_(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<qd.length;r++)n=qd[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ml(t){this.src=t,this.g={},this.h=0}ml.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ga(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vS(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Ka(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=U_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(_l(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ga(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),ta={};function W_(t,e,n,i,s){if(i&&i.once)return q_(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)W_(t,e[r],n,i,s);return null}return n=Iu(n),t&&t[br]?t.O(e,n,Tr(i)?!!i.capture:!!i,s):z_(t,e,n,!1,i,s)}function z_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Tr(s)?!!s.capture:!!s,l=Cu(t);if(l||(t[Eu]=l=new ml(t)),n=l.add(e,n,i,o,r),n.proxy)return n;if(i=ES(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)dS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(G_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ES(){function t(n){return e.call(t.src,t.listener,n)}const e=wS;return t}function q_(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)q_(t,e[r],n,i,s);return null}return n=Iu(n),t&&t[br]?t.P(e,n,Tr(i)?!!i.capture:!!i,s):z_(t,e,n,!0,i,s)}function K_(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)K_(t,e[r],n,i,s);else i=Tr(i)?!!i.capture:!!i,n=Iu(n),t&&t[br]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ga(r,n,i,s),-1<n&&(_l(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ga(e,n,i,s)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[br])Ka(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(G_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Cu(e))?(Ka(n,t),n.h==0&&(n.src=null,e[Eu]=null)):_l(t)}}}function G_(t){return t in ta?ta[t]:ta[t]="on"+t}function wS(t,e){if(t.fa)t=!0;else{e=new rr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&wu(t),t=n.call(i,e)}return t}function Cu(t){return t=t[Eu],t instanceof ml?t:null}var na="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iu(t){return typeof t=="function"?t:(t[na]||(t[na]=function(e){return t.handleEvent(e)}),t[na])}function je(){zn.call(this),this.i=new ml(this),this.S=this,this.J=null}We(je,zn);je.prototype[br]=!0;je.prototype.removeEventListener=function(t,e,n,i){K_(this,t,e,n,i)};function Ke(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(i,t),j_(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=zr(o,i,!0,e)&&s}if(o=e.g=t,s=zr(o,i,!0,e)&&s,s=zr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=zr(o,i,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)_l(n[i]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};je.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function zr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Ka(t.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Tu=K.JSON.stringify;class CS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function IS(){var t=bu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TS{constructor(){this.h=this.g=null}add(e,n){const i=Y_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Y_=new CS(()=>new bS,t=>t.reset());class bS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RS(t){K.setTimeout(()=>{throw t},0)}let or,lr=!1,bu=new TS,X_=()=>{const t=K.Promise.resolve(void 0);or=()=>{t.then(AS)}};var AS=()=>{for(var t;t=IS();){try{t.h.call(t.g)}catch(n){RS(n)}var e=Y_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lr=!1};function vl(t,e){je.call(this),this.h=t||1,this.g=e||K,this.j=Ze(this.qb,this),this.l=Date.now()}We(vl,je);x=vl.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Su(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Su(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){vl.$.N.call(this),Su(this),delete this.g};function Ru(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Q_(t){t.g=Ru(()=>{t.g=null,t.i&&(t.i=!1,Q_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PS extends zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Q_(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ar(t){zn.call(this),this.h=t,this.g={}}We(ar,zn);var Kd=[];function J_(t,e,n,i){Array.isArray(n)||(n&&(Kd[0]=n.toString()),n=Kd);for(var s=0;s<n.length;s++){var r=W_(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Z_(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}ar.prototype.N=function(){ar.$.N.call(this),Z_(this)};ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Ea=function(){this.g=!1};function NS(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function kS(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ri(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xS(t,n)+(i?" "+i:"")})}function OS(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function xS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Tu(n)}catch{return e}}var as={},Gd=null;function Au(){return Gd=Gd||new je}as.Ta="serverreachability";function em(t){et.call(this,as.Ta,t)}We(em,et);function cr(t){const e=Au();Ke(e,new em(e))}as.STAT_EVENT="statevent";function tm(t,e){et.call(this,as.STAT_EVENT,t),this.stat=e}We(tm,et);function rt(t){const e=Au();Ke(e,new tm(e,t))}as.Ua="timingevent";function nm(t,e){et.call(this,as.Ua,t),this.size=e}We(nm,et);function Sr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Pu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nu(){}Nu.prototype.h=null;function Yd(t){return t.h||(t.h=t.i())}function MS(){}var Rr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ku(){et.call(this,"d")}We(ku,et);function Ou(){et.call(this,"c")}We(Ou,et);var Ya;function El(){}We(El,Nu);El.prototype.g=function(){return new XMLHttpRequest};El.prototype.i=function(){return{}};Ya=new El;function Ar(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new ar(this),this.P=LS,t=qa?125:void 0,this.V=new vl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var LS=45e3,sm={},Xa={};x=Ar.prototype;x.setTimeout=function(t){this.P=t};function Qa(t,e,n){t.L=1,t.A=Cl(vn(e)),t.u=n,t.S=!0,rm(t,null)}function rm(t,e){t.G=Date.now(),Pr(t),t.B=vn(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),fm(n.i,"t",i),t.o=0,n=t.l.J,t.h=new im,t.g=Dm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new PS(Ze(t.Pa,t,t.g),t.O)),J_(t.U,t.g,"readystatechange",t.nb),e=t.I?V_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),cr(),NS(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&Kt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||qa||this.g&&(this.h.h||this.g.ja()||Zd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?cr(3):cr(2)),wl(this);var n=this.g.da();this.ca=n;t:if(om(this)){var i=Zd(this.g);t="";var s=i.length,r=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),Us(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kS(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ir(l)){var c=l;break t}}c=null}if(n=c)Ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,n);else{this.i=!1,this.s=3,rt(12),si(this),Us(this);break e}}this.S?(lm(this,u,o),qa&&this.i&&u==3&&(J_(this.U,this.V,"tick",this.mb),this.V.start())):(Ri(this.j,this.m,o,null),Ja(this,o)),u==4&&si(this),this.i&&!this.J&&(u==4?Nm(this.l,this):(this.i=!1,Pr(this)))}else iR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),si(this),Us(this)}}}catch{}finally{}};function om(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function lm(t,e,n){let i=!0,s;for(;!t.J&&t.o<n.length;)if(s=FS(t,n),s==Xa){e==4&&(t.s=4,rt(14),i=!1),Ri(t.j,t.m,null,"[Incomplete Response]");break}else if(s==sm){t.s=4,rt(15),Ri(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ri(t.j,t.m,s,null),Ja(t,s);om(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,rt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uu(e),e.M=!0,rt(11))):(Ri(t.j,t.m,n,"[Invalid Chunked Response]"),si(t),Us(t))}x.mb=function(){if(this.g){var t=Kt(this.g),e=this.g.ja();this.o<e.length&&(wl(this),lm(this,t,e),this.i&&t!=4&&Pr(this))}};function FS(t,e){var n=t.o,i=e.indexOf(`
`,n);return i==-1?Xa:(n=Number(e.substring(n,i)),isNaN(n)?sm:(i+=1,i+n>e.length?Xa:(e=e.slice(i,i+n),t.o=i+n,e)))}x.cancel=function(){this.J=!0,si(this)};function Pr(t){t.Y=Date.now()+t.P,am(t,t.P)}function am(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Sr(Ze(t.lb,t),e)}function wl(t){t.C&&(K.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(OS(this.j,this.B),this.L!=2&&(cr(),rt(17)),si(this),this.s=2,Us(this)):am(this,this.Y-t)};function Us(t){t.l.H==0||t.J||Nm(t.l,t)}function si(t){wl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Su(t.V),Z_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ja(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Za(n.i,t))){if(!t.K&&Za(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xo(n),Sl(n);else break e;Fu(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Sr(Ze(n.ib,n),6e3));if(1>=_m(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ri(n,11)}else if((t.K||n.g==t)&&xo(n),!ir(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xu(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,Se(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=xm(i,i.J?i.pa:null,i.Y),o.K){mm(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.C&&(wl(l),Pr(l)),i.g=o}else Am(i);0<n.j.length&&Rl(n)}else c[0]!="stop"&&c[0]!="close"||ri(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ri(n,7):Lu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}cr(4)}catch{}}function US(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function $S(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function cm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$S(t),i=US(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var um=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ci(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ci){this.h=t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Oo(this,t.m),this.l=t.l;var e=t.i,n=new ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xd(this,n),this.o=t.o}else t&&(e=String(t).match(um))?(this.h=!1,ko(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),Oo(this,e[4]),this.l=bs(e[5]||"",!0),Xd(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new ur(null,this.h))}ci.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ss(e,Qd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ss(e,Qd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ss(n,n.charAt(0)=="/"?jS:VS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ss(n,zS)),t.join("")};function vn(t){return new ci(t)}function ko(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xd(t,e,n){e instanceof ur?(t.i=e,qS(t.i,t.h)):(n||(e=Ss(e,WS)),t.i=new ur(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Cl(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qd=/[#\/\?@]/g,VS=/[#\?:]/g,jS=/[#\?]/g,WS=/[#\?@]/g,zS=/#/g;function ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&BS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=ur.prototype;x.add=function(t,e){qn(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hm(t,e){qn(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dm(t,e){return qn(t),e=cs(t,e),t.g.has(e)}x.forEach=function(t,e){qn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};x.ta=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};x.Z=function(t){qn(this);let e=[];if(typeof t=="string")dm(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return qn(this),this.i=null,t=cs(this,t),dm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fm(t,e,n){hm(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),mu(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qS(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(hm(this,i),fm(this,s,n))},t)),t.j=e}var KS=class{constructor(t,e){this.g=t,this.map=e}};function pm(t){this.l=t||GS,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GS=10;function gm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _m(t){return t.h?1:t.g?t.g.size:0}function Za(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xu(t,e){t.g?t.g.add(e):t.h=e}function mm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pm.prototype.cancel=function(){if(this.i=vm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return mu(t.i)}var YS=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function XS(){this.g=new YS}function QS(t,e,n){const i=n||"";try{cm(t,function(s,r){let o=s;Tr(s)&&(o=Tu(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function JS(t,e){const n=new yl;if(K.Image){const i=new Image;i.onload=Wr(qr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Wr(qr,n,i,"TestLoadImage: error",!1,e),i.onabort=Wr(qr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Wr(qr,n,i,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function qr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Il(t){this.l=t.ec||null,this.j=t.ob||!1}We(Il,Nu);Il.prototype.g=function(){return new Tl(this.l,this.j)};Il.prototype.i=function(t){return function(){return t}}({});function Tl(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Tl,je);var Du=0;x=Tl.prototype;x.open=function(t,e){if(this.readyState!=Du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=Du};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ym(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ym(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nr(this):hr(this),this.readyState==3&&ym(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Nr(this))};x.Ya=function(t){this.g&&(this.response=t,Nr(this))};x.ka=function(){this.g&&Nr(this)};function Nr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZS=K.JSON.parse;function Oe(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Em,this.L=this.M=!1}We(Oe,je);var Em="",eR=/^https?$/i,tR=["POST","PUT"];x=Oe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ya.g(),this.C=this.u?Yd(this.u):Yd(Ya),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Jd(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=K.FormData&&t instanceof K.FormData,!(0<=U_(tR,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Im(this),0<this.B&&((this.L=nR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=Ru(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Jd(this,r)}};function nR(t){return sr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof _u<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wm(t),bl(t)}function wm(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),bl(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bl(this,!0)),Oe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?Cm(this):this.kb())};x.kb=function(){Cm(this)};function Cm(t){if(t.h&&typeof _u<"u"&&(!t.C[1]||Kt(t)!=4||t.da()!=2)){if(t.v&&Kt(t)==4)Ru(t.La,0,t);else if(Ke(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(um)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),i=!eR.test(s?s.toLowerCase():"")}n=i}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var r=2<Kt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",wm(t)}}finally{bl(t)}}}}function bl(t,e){if(t.g){Im(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=i}catch{}}}function Im(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Kt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZS(e)}};function Zd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Em:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iR(t){const e={};t=(t.g&&2<=Kt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(ir(t[i]))continue;var n=SS(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}yS(e,function(i){return i.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tm(t){let e="";return yu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Mu(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Tm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bm(t){this.Ga=0,this.j=[],this.l=new yl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ms("baseRetryDelayMs",5e3,t),this.hb=ms("retryDelaySeedMs",1e4,t),this.eb=ms("forwardChannelMaxRetries",2,t),this.xa=ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pm(t&&t.concurrentRequestLimit),this.Ja=new XS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=bm.prototype;x.ra=8;x.H=1;function Lu(t){if(Sm(t),t.H==3){var e=t.W++,n=vn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),kr(t,n),e=new Ar(t,t.l,e),e.L=2,e.A=Cl(vn(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.A,n=!0),n||(e.g=Dm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Pr(e)}Om(t)}function Sl(t){t.g&&(Uu(t),t.g.cancel(),t.g=null)}function Sm(t){Sl(t),t.u&&(K.clearTimeout(t.u),t.u=null),xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Rl(t){if(!gm(t.i)&&!t.m){t.m=!0;var e=t.Na;or||X_(),lr||(or(),lr=!0),bu.add(e,t),t.C=0}}function sR(t,e){return _m(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Sr(Ze(t.Na,t,e),km(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ar(this,this.l,t);let r=this.s;if(this.U&&(r?(r=V_(r),j_(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rm(this,s,e),n=vn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),kr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Tm(r)))+"&"+e:this.o&&Mu(n,this.o,r)),xu(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,Qa(s,n,null)):Qa(s,n,e),this.H=2}}else this.H==3&&(t?ef(this,t):this.j.length==0||gm(this.i)||ef(this))};function ef(t,e){var n;e?n=e.m:n=t.W++;const i=vn(t.I);Se(i,"SID",t.K),Se(i,"RID",n),Se(i,"AID",t.V),kr(t,i),t.o&&t.s&&Mu(i,t.o,t.s),n=new Ar(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Rm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xu(t.i,n),Qa(n,i,e)}function kr(t,e){t.na&&yu(t.na,function(n,i){Se(e,i,n)}),t.h&&cm({},function(n,i){Se(e,i,n)})}function Rm(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ze(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=r,0>c)r=Math.max(0,s[a].g-100),l=!1;else try{QS(u,o,"req"+c+"_")}catch{i&&i(u)}}if(l){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Am(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;or||X_(),lr||(or(),lr=!0),bu.add(e,t),t.A=0}}function Fu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Sr(Ze(t.Ma,t),km(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,Pm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Sr(Ze(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Sl(this),Pm(this))};function Uu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Pm(t){t.g=new Ar(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),kr(t,e),t.o&&t.s&&Mu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Cl(vn(e)),n.u=null,n.S=!0,rm(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Sl(this),Fu(this),rt(19))};function xo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Nm(t,e){var n=null;if(t.g==e){xo(t),Uu(t),t.g=null;var i=2}else if(Za(t.i,e))n=e.F,mm(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;i=Au(),Ke(i,new nm(i,n)),Rl(t)}else Am(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(i==1&&sR(t,e)||i==2&&Fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ri(t,5);break;case 4:ri(t,10);break;case 3:ri(t,6);break;default:ri(t,2)}}}function km(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Ze(t.pb,t);n||(n=new ci("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||ko(n,"https"),Cl(n)),JS(n.toString(),i)}else rt(2);t.H=0,t.h&&t.h.za(e),Om(t),Sm(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Om(t){if(t.H=0,t.ma=[],t.h){const e=vm(t.i);(e.length!=0||t.j.length!=0)&&(jd(t.ma,e),jd(t.ma,t.j),t.i.i.length=0,mu(t.j),t.j.length=0),t.h.ya()}}function xm(t,e,n){var i=n instanceof ci?vn(n):new ci(n);if(i.g!="")e&&(i.g=e+"."+i.g),Oo(i,i.m);else{var s=K.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ci(null);i&&ko(r,i),e&&(r.g=e),s&&Oo(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Se(i,n,e),Se(i,"VER",t.ra),kr(t,i),i}function Dm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Oe(new Il({ob:n})):new Oe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mm(){}x=Mm.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Rt(t,e){je.call(this),this.g=new bm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ir(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ir(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}We(Rt,je);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=xm(t,null,t.Y),Rl(t)};Rt.prototype.close=function(){Lu(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tu(t),t=n);e.j.push(new KS(e.fb++,t)),e.H==3&&Rl(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,Lu(this.g),delete this.g,Rt.$.N.call(this)};function Lm(t){ku.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Lm,ku);function Fm(){Ou.call(this),this.status=1}We(Fm,Ou);function us(t){this.g=t}We(us,Mm);us.prototype.Ba=function(){Ke(this.g,"a")};us.prototype.Aa=function(t){Ke(this.g,new Lm(t))};us.prototype.za=function(t){Ke(this.g,new Fm)};us.prototype.ya=function(){Ke(this.g,"b")};function rR(){this.blockSize=-1}function en(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(en,rR);en.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ia(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}en.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)ia(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){ia(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){ia(this,i),s=0;break}}this.h=s,this.i+=e};en.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function _e(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var oR={};function $u(t){return-128<=t&&128>t?fS(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return Li;if(0>t)return ze(Gt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ec;return new _e(e,0)}function Um(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(Um(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),i=Li,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Gt(Math.pow(e,r)),i=i.R(r).add(Gt(o))):(i=i.R(n),i=i.add(Gt(o)))}return i}var ec=4294967296,Li=$u(0),tc=$u(1),tf=$u(16777216);x=_e.prototype;x.ea=function(){if(Tt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ec+i)*e,e*=ec}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(dn(this))return"0";if(Tt(this))return"-"+ze(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,i="";;){var s=Mo(n,e).g;n=Do(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,dn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}x.X=function(t){return t=Do(this,t),Tt(t)?-1:dn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new _e(n,~t.h).add(tc)}x.abs=function(){return Tt(this)?ze(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Do(t,e){return t.add(ze(e))}x.R=function(t){if(dn(this)||dn(t))return Li;if(Tt(this))return Tt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Tt(t))return ze(this.R(ze(t)));if(0>this.X(tf)&&0>t.X(tf))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*i+2*s]+=o*a,Kr(n,2*i+2*s),n[2*i+2*s+1]+=r*a,Kr(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,Kr(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,Kr(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new _e(n,0)};function Kr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vs(t,e){this.g=t,this.h=e}function Mo(t,e){if(dn(e))throw Error("division by zero");if(dn(t))return new vs(Li,Li);if(Tt(t))return e=Mo(ze(t),e),new vs(ze(e.g),ze(e.h));if(Tt(e))return e=Mo(t,ze(e)),new vs(ze(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tc,i=e;0>=i.X(t);)n=nf(n),i=nf(i);var s=Ii(n,1),r=Ii(i,1);for(i=Ii(i,2),n=Ii(n,2);!dn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ii(i,1),n=Ii(n,1)}return e=Do(t,s.R(e)),new vs(s,e)}for(s=Li;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Gt(n),o=r.R(e);Tt(o)||0<o.X(t);)n-=i,r=Gt(n),o=r.R(e);dn(r)&&(r=tc),s=s.add(r),t=Do(t,o)}return new vs(s,t)}x.gb=function(t){return Mo(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new _e(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new _e(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new _e(n,this.h^t.h)};function nf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new _e(n,t.h)}function Ii(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new _e(s,t.h)}Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Pu.NO_ERROR=0;Pu.TIMEOUT=8;Pu.HTTP_ERROR=6;DS.COMPLETE="complete";MS.EventType=Rr;Rr.OPEN="a";Rr.CLOSE="b";Rr.ERROR="c";Rr.MESSAGE="d";je.prototype.listen=je.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;en.prototype.digest=en.prototype.l;en.prototype.reset=en.prototype.reset;en.prototype.update=en.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=Gt;_e.fromString=Um;var lR=_e;const sf="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Al="10.8.0";/**
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
 */const Lo=new gr("@firebase/firestore");function Et(t,...e){if(Lo.logLevel<=de.DEBUG){const n=e.map($m);Lo.debug(`Firestore (${Al}): ${t}`,...n)}}function Bu(t,...e){if(Lo.logLevel<=de.ERROR){const n=e.map($m);Lo.error(`Firestore (${Al}): ${t}`,...n)}}function $m(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Bm(t="Unexpected state"){const e=`FIRESTORE (${Al}) INTERNAL ASSERTION FAILED: `+t;throw Bu(e),new Error(e)}function nc(t,e){t||Bm()}/**
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
 */const mt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vt extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class aR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class uR{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{Et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Et("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(nc(typeof i.accessToken=="string"),new aR(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return nc(e===null||typeof e=="string"),new ct(e)}}class hR{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dR{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new hR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&Et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Et("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nc(typeof n.token=="string"),this.R=n.token,new fR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class _R{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=gR(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Hm(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mR{constructor(e,n,i,s,r,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class Fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var rf,ie;(ie=rf||(rf={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new lR([4294967295,4294967295],0);function sa(){return typeof document<"u"?document:null}/**
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
 */class vR{constructor(e,n,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-i);s>0&&Et("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Hu{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new Hu(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new vt(mt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yR(t,e){if(Bu("AsyncQueue",`${e}: ${t}`),Hm(t))return new vt(mt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ER{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=_R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Et("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Et("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new vt(mt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=yR(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function Vm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const of=new Map;function wR(t,e,n,i){if(e===!0&&i===!0)throw new vt(mt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class lf{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new vt(mt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new vt(mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new vt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new vt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new vt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class CR{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new vt(mt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new vt(mt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lf(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new cR;switch(i.type){case"firstParty":return new dR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new vt(mt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=of.get(n);i&&(Et("ComponentProvider","Removing Datastore"),of.delete(n),i.terminate())}(this),Promise.resolve()}}/**
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
 */class IR{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new vR(this,"async_queue_retry"),this._u=()=>{const n=sa();n&&Et("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=sa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Fi;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Hm(e))throw e;Et("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(i=>{this.ru=i,this.iu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Bu("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.iu=!1,i))));return this.Xa=n,n}enqueueAfterDelay(e,n,i){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Hu.createAndSchedule(this,e,n,i,r=>this.lu(r));return this.nu.push(s),s}au(){this.ru&&Bm()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class TR extends CR{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new IR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bR(this),this._firestoreClient.terminate()}}function bR(t){var e,n,i;const s=t._freezeSettings(),r=function(l,a,c,u){return new mR(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ER(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Al=s})(is),Jt(new Ft("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new TR(new uR(i.getProvider("auth-internal")),new pR(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new vt(mt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),wt(sf,"4.4.2",e),wt(sf,"4.4.2","esm2017")})();/**
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
 */const jm="firebasestorage.googleapis.com",SR="storageBucket",RR=2*60*1e3,AR=10*60*1e3;/**
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
 */class sn extends En{constructor(e,n,i=0){super(ra(e),`Firebase Storage: ${n} (${ra(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tn||(tn={}));function ra(t){return"storage/"+t}function PR(){const t="An unknown error occurred, please check the error payload for server response.";return new sn(tn.UNKNOWN,t)}function NR(){return new sn(tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kR(){return new sn(tn.CANCELED,"User canceled the upload/download.")}function OR(t){return new sn(tn.INVALID_URL,"Invalid URL '"+t+"'.")}function xR(t){return new sn(tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function af(t){return new sn(tn.INVALID_ARGUMENT,t)}function Wm(){return new sn(tn.APP_DELETED,"The Firebase app was deleted.")}function DR(t){return new sn(tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(i.path==="")return i;throw xR(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},v=n===jm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",P=new RegExp(`^https?://${v}/${s}/${S}`,"i"),U=[{regex:l,indices:a,postModify:r},{regex:f,indices:g,postModify:c},{regex:P,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<U.length;N++){const q=U[N],ce=q.regex.exec(e);if(ce){const Re=ce[q.indices.bucket];let Q=ce[q.indices.path];Q||(Q=""),i=new Dt(Re,Q),q.postModify(i);break}}if(i==null)throw OR(e);return i}}class MR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LR(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...S){c||(c=!0,e.apply(null,S))}function h(S){s=setTimeout(()=>{s=null,t(f,a())},S)}function d(){r&&clearTimeout(r)}function f(S,...P){if(c){d();return}if(S){d(),u.call(null,S,...P);return}if(a()||o){d(),u.call(null,S,...P);return}i<64&&(i*=2);let U;l===1?(l=2,U=0):U=(i+Math.random())*1e3,h(U)}let g=!1;function v(S){g||(g=!0,d(),!c&&(s!==null?(S||(l=2),clearTimeout(s),h(0)):S||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function FR(t){t(!1)}/**
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
 */function UR(t){return t!==void 0}function cf(t,e,n,i){if(i<e)throw af(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw af(`Invalid value for '${t}'. Expected ${n} or less.`)}function $R(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Uo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Uo||(Uo={}));/**
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
 */function BR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class HR{constructor(e,n,i,s,r,o,l,a,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Gr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Uo.NO_ERROR,a=r.getStatus();if(!l||BR(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Uo.ABORT;i(!1,new Gr(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new Gr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());UR(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=PR();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Wm():kR();o(a)}else{const a=NR();o(a)}};this.canceled_?n(!1,new Gr(!1,null,!0)):this.backoffId_=LR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function VR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qR(t,e,n,i,s,r,o=!0){const l=$R(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return WR(c,e),VR(c,n),jR(c,r),zR(c,i),new HR(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function KR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class $o{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $o(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GR(this._location.path)}get storage(){return this._service}get parent(){const e=KR(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new $o(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DR(e)}}function uf(t,e){const n=e==null?void 0:e[SR];return n==null?null:Dt.makeFromBucketSpec(n,t)}class YR{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=jm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RR,this._maxUploadRetryTime=AR,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=uf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=uf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $o(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new MR(Wm());{const o=qR(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const hf="@firebase/storage",df="0.12.1";/**
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
 */const XR="storage";function QR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new YR(n,i,s,e,is)}function JR(){Jt(new Ft(XR,QR,"PUBLIC").setMultipleInstances(!0)),wt(hf,df,""),wt(hf,df,"esm2017")}JR();const oa=new WeakMap;function zm(t,e){return oa.has(e)||oa.set(e,t||{f:{},r:{},s:{},u:{}}),oa.get(e)}function ZR(t,e,n,i){if(!t)return n;const[s,r]=qm(t);if(!s)return n;const o=zm(void 0,i)[s]||{},l=e||r;return l&&l in o?o[l]:n}function eA(t,e,n,i){if(!t)return;const[s,r]=qm(t);if(!s)return;const o=zm(void 0,i)[s],l=e||r;if(l)return n.then(a=>{o[l]=a}).catch(It),l}function qm(t){return q0(t)||K0(t)?["f",t.path]:G0(t)?["r",t.toString()]:Y0(t)?["s",t.toString()]:[]}const la=new WeakMap;function tA(t,e,n){const i=gg();la.has(i)||la.set(i,new Map);const s=la.get(i),r=eA(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):It}function nA(t){if(!t.exists())return null;const e=t.val();return ss(e)?Object.defineProperty(e,"id",{value:t.key}):{$value:e,id:t.key}}function ys(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const Vu={reset:!1,serialize:nA,wait:!0};function iA(t,e,n,i,s){const r=Object.assign({},Vu,s);let o=It;function l(a){const c=r.serialize(a);t.value=c,n(c)}return r.once?pu(e).then(l).catch(i):o=F_(e,l,i),a=>{if(o(),a){const c=typeof a=="function"?a():null;t.value=c}}}function sA(t,e,n,i,s){const r=Object.assign({},Vu,s);let o=r.wait?[]:t;r.wait||(t.value=[]);let l=It,a=It,c=It,u=It,h=It;return r.once?pu(e).then(d=>{const f=[];d.forEach(g=>{f.push(r.serialize(g))}),n(t.value=f)}).catch(i):(l=qb(e,(d,f)=>{const g=Qn(o),v=f?ys(g,f)+1:0;g.splice(v,0,r.serialize(d))},i),c=Yb(e,d=>{const f=Qn(o);f.splice(ys(f,d.key),1)},i),a=Kb(e,d=>{const f=Qn(o);f.splice(ys(f,d.key),1,r.serialize(d))},i),u=Gb(e,(d,f)=>{const g=Qn(o),v=ys(g,d.key),S=g.splice(v,1)[0],P=f?ys(g,f)+1:0;g.splice(P,0,S)},i),h=F_(e,()=>{const d=Qn(o);r.wait&&(t.value=d,o=t),n(d),h()},i)),d=>{if(h(),l(),c(),a(),u(),d){const f=typeof d=="function"?d():[];t.value=f}}}function Km(t,e={},n=!1){let i=It;const s=Object.assign({},Vu,e),r=Qn(t),o=s.target||he();Q0()&&(s.once=!0);const a=ZR(r,s.ssrKey,o.value,gg());o.value=a;let u=!(n?(a||[]).length>0:a!==void 0);const h=he(),d=he(!1),f=tp(),g=pc();let v=It;function S(){const U=Qn(t),N=new Promise((q,ce)=>{if(i(s.reset),!U)return i=It,q(null);d.value=u,u=!0,Array.isArray(o.value)?i=sA(o,U,q,ce,s):i=iA(o,U,q,ce,s)}).catch(q=>{throw f.value===N&&(h.value=q),q}).finally(()=>{f.value===N&&(d.value=!1)});f.value=N}let P=It;Ne(t)&&(P=pn(t,S)),S(),r&&(v=tA(f.value,r,s.ssrKey)),g&&($f(D),Pp()&&mp(()=>f.value));function D(U=s.reset){P(),v(),i(U)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>h},pending:{get:()=>d},promise:{get:()=>f},stop:{get:()=>D}})}function Bo(t,e){const n=he([]);return Km(t,{target:n,...e},!0)}function ju(t,e){const n=he();return Km(t,{target:n,...e})}function rA(t,{firebaseApp:e,modules:n=[]}){t.provide(pg,e);for(const i of n)i(e,t)}const oA={apiKey:"AIzaSyC8tne9IlUq_Wt-nTH1ZUhP_rRsnqcPQks",authDomain:"mv-test-531a6.firebaseapp.com",projectId:"mv-test-531a6",storageBucket:"mv-test-531a6.appspot.com",messagingSenderId:"1059321271037",appId:"1:1059321271037:web:3da495575653c13ed5a494",databaseURL:"https://mv-test-531a6-default-rtdb.firebaseio.com"},Gm=Xp(oA),Ti=iS(Gm),yt={db:Ti,ref(t){return Ts(Ti,t)},set(t,e){console.log(t,e),No(Ts(Ti,t),e)},push(t,e){const n=Wb(Ts(Ti,t));No(n,e)},del(t){zb(Ts(Ti,t))}};window.db=Ti;window.dbRef=Ts;window.get=pu;/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bi=typeof window<"u";function lA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function aa(t,e){const n={};for(const i in e){const s=e[i];n[i]=$t(s)?s.map(t):t(s)}return n}const $s=()=>{},$t=Array.isArray,aA=/\/$/,cA=t=>t.replace(aA,"");function ca(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=fA(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function uA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hA(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Yi(e.matched[i],n.matched[s])&&Ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dA(t[n],e[n]))return!1;return!0}function dA(t,e){return $t(t)?pf(t,e):$t(e)?pf(e,t):t===e}function pf(t,e){return $t(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function fA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function pA(t){if(!t)if(bi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cA(t)}const gA=/^[^#]+#/;function _A(t,e){return t.replace(gA,"#")+e}function mA(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Pl=()=>({left:window.pageXOffset,top:window.pageYOffset});function vA(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gf(t,e){return(history.state?history.state.position-e:-1)+t}const ic=new Map;function yA(t,e){ic.set(t,e)}function EA(t){const e=ic.get(t);return ic.delete(t),e}let wA=()=>location.protocol+"//"+location.host;function Xm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),ff(a,"")}return ff(n,t)+i+s}function CA(t,e,n,i){let s=[],r=[],o=null;const l=({state:d})=>{const f=Xm(t,location),g=n.value,v=e.value;let S=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}S=v?d.position-v.position:0}else i(f);s.forEach(P=>{P(n.value,g,{delta:S,type:dr.pop,direction:S?S>0?Bs.forward:Bs.back:Bs.unknown})})};function a(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:Pl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function _f(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Pl():null}}function IA(t){const{history:e,location:n}=window,i={value:Xm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:wA()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(a,c){const u=fe({},e.state,_f(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,u,!0),i.value=a}function l(a,c){const u=fe({},s.value,e.state,{forward:a,scroll:Pl()});r(u.current,u,!0);const h=fe({},_f(i.value,a,null),{position:u.position+1},c);r(a,h,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function TA(t){t=pA(t);const e=IA(t),n=CA(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=fe({location:"",base:t,go:i,createHref:_A.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),TA(t)}function SA(t){return typeof t=="string"||t&&typeof t=="object"}function Qm(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jm=Symbol("");var mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mf||(mf={}));function Xi(t,e){return fe(new Error,{type:t,[Jm]:!0},e)}function ln(t,e){return t instanceof Error&&Jm in t&&(e==null||!!(t.type&e))}const vf="[^/]+?",RA={sensitive:!1,strict:!1,start:!0,end:!0},AA=/[.+*?^${}()[\]/\\]/g;function PA(t,e){const n=fe({},RA,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(AA,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:S,regexp:P}=d;r.push({name:g,repeatable:v,optional:S});const D=P||vf;if(D!==vf){f+=10;try{new RegExp(`(${D})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+N.message)}}let U=v?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(U=S&&c.length<2?`(?:/${U})`:"/"+U),S&&(U+="?"),s+=U,f+=20,S&&(f+=-8),v&&(f+=-20),D===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:S}=f,P=g in c?c[g]:"";if($t(P)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=$t(P)?P.join("/"):P;if(!D)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=D}}return u||"/"}return{re:o,score:i,keys:r,parse:l,stringify:a}}function NA(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kA(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=NA(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(yf(i))return 1;if(yf(s))return-1}return s.length-i.length}function yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OA={type:0,value:""},xA=/[a-zA-Z0-9_]/;function DA(t){if(!t)return[[]];if(t==="/")return[[OA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:a==="("?n=2:xA.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function MA(t,e,n){const i=PA(DA(t.path),n),s=fe(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LA(t,e){const n=[],i=new Map;e=Cf({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const f=!d,g=FA(u);g.aliasOf=d&&d.record;const v=Cf(e,u),S=[g];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of U)S.push(fe({},g,{components:d?d.record.components:g.components,path:N,aliasOf:d?d.record:g}))}let P,D;for(const U of S){const{path:N}=U;if(h&&N[0]!=="/"){const q=h.record.path,ce=q[q.length-1]==="/"?"":"/";U.path=h.record.path+(N&&ce+N)}if(P=MA(U,h,v),d?d.alias.push(P):(D=D||P,D!==P&&D.alias.push(P),f&&u.name&&!wf(P)&&o(u.name)),g.children){const q=g.children;for(let ce=0;ce<q.length;ce++)r(q[ce],P,d&&d.children[ce])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return D?()=>{o(D)}:$s}function o(u){if(Qm(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&kA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Zm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wf(u)&&i.set(u.record.name,u)}function c(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw Xi(1,{location:u});v=d.record.name,f=fe(Ef(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Ef(u.params,d.keys.map(D=>D.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(D=>D.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?i.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw Xi(1,{location:u,currentLocation:h});v=d.record.name,f=fe({},h.params,u.params),g=d.stringify(f)}const S=[];let P=d;for(;P;)S.unshift(P.record),P=P.parent;return{name:v,path:g,params:f,matched:S,meta:$A(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Ef(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function FA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:UA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function UA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $A(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Cf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Zm(t,e){return e.children.some(n=>n===t||Zm(t,n))}const ev=/#/g,BA=/&/g,HA=/\//g,VA=/=/g,jA=/\?/g,tv=/\+/g,WA=/%5B/g,zA=/%5D/g,nv=/%5E/g,qA=/%60/g,iv=/%7B/g,KA=/%7C/g,sv=/%7D/g,GA=/%20/g;function Wu(t){return encodeURI(""+t).replace(KA,"|").replace(WA,"[").replace(zA,"]")}function YA(t){return Wu(t).replace(iv,"{").replace(sv,"}").replace(nv,"^")}function sc(t){return Wu(t).replace(tv,"%2B").replace(GA,"+").replace(ev,"%23").replace(BA,"%26").replace(qA,"`").replace(iv,"{").replace(sv,"}").replace(nv,"^")}function XA(t){return sc(t).replace(VA,"%3D")}function QA(t){return Wu(t).replace(ev,"%23").replace(jA,"%3F")}function JA(t){return t==null?"":QA(t).replace(HA,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ZA(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(tv," "),o=r.indexOf("="),l=Ho(o<0?r:r.slice(0,o)),a=o<0?null:Ho(r.slice(o+1));if(l in e){let c=e[l];$t(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function If(t){let e="";for(let n in t){const i=t[n];if(n=XA(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(i)?i.map(r=>r&&sc(r)):[i&&sc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function e1(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=$t(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const t1=Symbol(""),Tf=Symbol(""),Nl=Symbol(""),zu=Symbol(""),rc=Symbol("");function Es(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function An(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Xi(4,{from:n,to:e})):h instanceof Error?l(h):SA(h)?l(Xi(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function ua(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(n1(l)){const c=(l.__vccOpts||l)[e];c&&s.push(An(c,n,i,r,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=lA(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&An(d,n,i,r,o)()}))}}return s}function n1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bf(t){const e=ht(Nl),n=ht(zu),i=qe(()=>e.resolve(b(t.to))),s=qe(()=>{const{matched:a}=i.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Yi.bind(null,u));if(d>-1)return d;const f=Sf(a[c-2]);return c>1&&Sf(u)===f&&h[h.length-1].path!==f?h.findIndex(Yi.bind(null,a[c-2])):d}),r=qe(()=>s.value>-1&&r1(n.params,i.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&Ym(n.params,i.value.params));function l(a={}){return s1(a)?e[b(t.replace)?"replace":"push"](b(t.to)).catch($s):Promise.resolve()}return{route:i,href:qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const i1=bc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bf,setup(t,{slots:e}){const n=pr(bf(t)),{options:i}=ht(Nl),s=qe(()=>({[Rf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Rf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Op("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),eo=i1;function s1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function r1(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!$t(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rf=(t,e,n)=>t??e??n,o1=bc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ht(rc),s=qe(()=>t.route||i.value),r=ht(Tf,0),o=qe(()=>{let c=b(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=qe(()=>s.value.matched[o.value]);Qr(Tf,qe(()=>o.value+1)),Qr(t1,l),Qr(rc,s);const a=he();return pn(()=>[a.value,l.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Yi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Af(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,S=Op(d,fe({},g,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Af(n.default,{Component:S,route:c})||S}}});function Af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rv=o1;function l1(t){const e=LA(t.routes,t),n=t.parseQuery||ZA,i=t.stringifyQuery||If,s=t.history,r=Es(),o=Es(),l=Es(),a=tp(bn);let c=bn;bi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=aa.bind(null,w=>""+w),h=aa.bind(null,JA),d=aa.bind(null,Ho);function f(w,L){let O,H;return Qm(w)?(O=e.getRecordMatcher(w),H=L):H=w,e.addRoute(H,O)}function g(w){const L=e.getRecordMatcher(w);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(w=>w.record)}function S(w){return!!e.getRecordMatcher(w)}function P(w,L){if(L=fe({},L||a.value),typeof w=="string"){const m=ca(n,w,L.path),E=e.resolve({path:m.path},L),C=s.createHref(m.fullPath);return fe(m,E,{params:d(E.params),hash:Ho(m.hash),redirectedFrom:void 0,href:C})}let O;if("path"in w)O=fe({},w,{path:ca(n,w.path,L.path).path});else{const m=fe({},w.params);for(const E in m)m[E]==null&&delete m[E];O=fe({},w,{params:h(m)}),L.params=h(L.params)}const H=e.resolve(O,L),ue=w.hash||"";H.params=u(d(H.params));const p=uA(i,fe({},w,{hash:YA(ue),path:H.path})),_=s.createHref(p);return fe({fullPath:p,hash:ue,query:i===If?e1(w.query):w.query||{}},H,{redirectedFrom:void 0,href:_})}function D(w){return typeof w=="string"?ca(n,w,a.value.path):fe({},w)}function U(w,L){if(c!==w)return Xi(8,{from:L,to:w})}function N(w){return Re(w)}function q(w){return N(fe(D(w),{replace:!0}))}function ce(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let H=typeof O=="function"?O(w):O;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=D(H):{path:H},H.params={}),fe({query:w.query,hash:w.hash,params:"path"in H?{}:w.params},H)}}function Re(w,L){const O=c=P(w),H=a.value,ue=w.state,p=w.force,_=w.replace===!0,m=ce(O);if(m)return Re(fe(D(m),{state:typeof m=="object"?fe({},ue,m.state):ue,force:p,replace:_}),L||O);const E=O;E.redirectedFrom=L;let C;return!p&&hA(i,H,O)&&(C=Xi(16,{to:E,from:H}),Ht(H,H,!0,!1)),(C?Promise.resolve(C):ye(E,H)).catch(I=>ln(I)?ln(I,2)?I:Cn(I):ae(I,E,H)).then(I=>{if(I){if(ln(I,2))return Re(fe({replace:_},D(I.to),{state:typeof I.to=="object"?fe({},ue,I.to.state):ue,force:p}),L||E)}else I=tt(E,H,!0,_,ue);return Ue(E,H,I),I})}function Q(w,L){const O=U(w,L);return O?Promise.reject(O):Promise.resolve()}function J(w){const L=vi.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(w):w()}function ye(w,L){let O;const[H,ue,p]=a1(w,L);O=ua(H.reverse(),"beforeRouteLeave",w,L);for(const m of H)m.leaveGuards.forEach(E=>{O.push(An(E,w,L))});const _=Q.bind(null,w,L);return O.push(_),Ye(O).then(()=>{O=[];for(const m of r.list())O.push(An(m,w,L));return O.push(_),Ye(O)}).then(()=>{O=ua(ue,"beforeRouteUpdate",w,L);for(const m of ue)m.updateGuards.forEach(E=>{O.push(An(E,w,L))});return O.push(_),Ye(O)}).then(()=>{O=[];for(const m of p)if(m.beforeEnter)if($t(m.beforeEnter))for(const E of m.beforeEnter)O.push(An(E,w,L));else O.push(An(m.beforeEnter,w,L));return O.push(_),Ye(O)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),O=ua(p,"beforeRouteEnter",w,L),O.push(_),Ye(O))).then(()=>{O=[];for(const m of o.list())O.push(An(m,w,L));return O.push(_),Ye(O)}).catch(m=>ln(m,8)?m:Promise.reject(m))}function Ue(w,L,O){l.list().forEach(H=>J(()=>H(w,L,O)))}function tt(w,L,O,H,ue){const p=U(w,L);if(p)return p;const _=L===bn,m=bi?history.state:{};O&&(H||_?s.replace(w.fullPath,fe({scroll:_&&m&&m.scroll},ue)):s.push(w.fullPath,ue)),a.value=w,Ht(w,L,O,_),Cn()}let ot;function rn(){ot||(ot=s.listen((w,L,O)=>{if(!xr.listening)return;const H=P(w),ue=ce(H);if(ue){Re(fe(ue,{replace:!0}),H).catch($s);return}c=H;const p=a.value;bi&&yA(gf(p.fullPath,O.delta),Pl()),ye(H,p).catch(_=>ln(_,12)?_:ln(_,2)?(Re(_.to,H).then(m=>{ln(m,20)&&!O.delta&&O.type===dr.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ae(_,H,p))).then(_=>{_=_||tt(H,p,!1),_&&(O.delta&&!ln(_,8)?s.go(-O.delta,!1):O.type===dr.pop&&ln(_,20)&&s.go(-1,!1)),Ue(H,p,_)}).catch($s)}))}let nt=Es(),X=Es(),oe;function ae(w,L,O){Cn(w);const H=X.list();return H.length?H.forEach(ue=>ue(w,L,O)):console.error(w),Promise.reject(w)}function on(){return oe&&a.value!==bn?Promise.resolve():new Promise((w,L)=>{nt.add([w,L])})}function Cn(w){return oe||(oe=!w,rn(),nt.list().forEach(([L,O])=>w?O(w):L()),nt.reset()),w}function Ht(w,L,O,H){const{scrollBehavior:ue}=t;if(!bi||!ue)return Promise.resolve();const p=!O&&EA(gf(w.fullPath,0))||(H||!O)&&history.state&&history.state.scroll||null;return Ic().then(()=>ue(w,L,p)).then(_=>_&&vA(_)).catch(_=>ae(_,w,L))}const lt=w=>s.go(w);let mi;const vi=new Set,xr={currentRoute:a,listening:!0,addRoute:f,removeRoute:g,hasRoute:S,getRoutes:v,resolve:P,options:t,push:N,replace:q,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:X.add,isReady:on,install(w){const L=this;w.component("RouterLink",eo),w.component("RouterView",rv),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>b(a)}),bi&&!mi&&a.value===bn&&(mi=!0,N(s.location).catch(ue=>{}));const O={};for(const ue in bn)Object.defineProperty(O,ue,{get:()=>a.value[ue],enumerable:!0});w.provide(Nl,L),w.provide(zu,Xf(O)),w.provide(rc,a);const H=w.unmount;vi.add(w),w.unmount=function(){vi.delete(w),vi.size<1&&(c=bn,ot&&ot(),ot=null,a.value=bn,mi=!1,oe=!1),H()}}};function Ye(w){return w.reduce((L,O)=>L.then(()=>J(O)),Promise.resolve())}return xr}function a1(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Yi(c,l))?i.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Yi(c,a))||s.push(a))}return[n,i,s]}function ov(){return ht(Nl)}function lv(){return ht(zu)}const c1={class:"navbar is-primary is-fixed-top",role:"navigation","aria-label":"main navigation"},u1={class:"navbar-menu"},h1={class:"navbar-start"},d1=y("div",{class:"pb-5"},null,-1),f1={__name:"App",setup(t){return(e,n)=>(F(),B(Pe,null,[y("nav",c1,[y("div",u1,[y("div",h1,[ge(b(eo),{class:"navbar-item",to:"/browse"},{default:Rs(()=>[Xe(" Browse ")]),_:1}),ge(b(eo),{class:"navbar-item",to:"/cards"},{default:Rs(()=>[Xe(" Create Cards ")]),_:1}),ge(b(eo),{class:"navbar-item",to:"/banners"},{default:Rs(()=>[Xe(" Create Banners ")]),_:1})])])]),d1,ge(b(rv))],64))}},p1="https://shashwat986.github.io/MV-SH-Test/assets/logo-vbv2nKyN.png",qu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},g1={},_1={style:{"font-size":"12px","font-weight":"600"}};function m1(t,e){return F(),B("span",_1," ₹ ")}const v1=qu(g1,[["render",m1]]),y1={class:"obj-2-wrapper c1"},E1={class:"second-heading"},w1={key:0,class:"third-field"},C1={class:"second-field"},I1={key:0,class:"third-field"},T1={__name:"SecondProductC1",props:{config:{type:Object,default:{}}},setup(t){return wc(t),(n,i)=>(F(),B("div",y1,[y("div",E1,[Xe(bt(t.config.heading_2)+" ",1),t.config.third_field_type=="Top"?(F(),B("span",w1,bt(t.config.field_3),1)):ve("",!0)]),y("div",C1,[Xe(bt(t.config.field_2)+" ",1),t.config.third_field_type=="Bottom"?(F(),B("span",I1,bt(t.config.field_3),1)):ve("",!0)])]))}},b1=["innerHTML"],S1={key:1},R1=["innerHTML"],av={__name:"Marquee",props:{text:{type:String},textClass:{type:String},badge:{type:Boolean,default:!1}},setup(t){const e=t,{text:n,badge:i}=wc(e);function s(l){return i.value?l.split(`
`).slice(0,2).map(a=>a.replace("#","<strong>").replace("#","</strong>")):l.split(`
`).slice(0,2)}const r=he(null),o=he(!1);return Sc(()=>{r.value=setInterval(()=>{o.value=!0,setTimeout(()=>o.value=!1,300)},2300)}),(l,a)=>{const c=hy("Vue3Marquee");return s(b(n)).length>1?(F(),Pn(c,{key:0,vertical:!0,duration:4,pause:o.value},{default:Rs(()=>[(F(!0),B(Pe,null,xn(s(b(n)),u=>(F(),B("div",{class:_n(["mb-3",t.textClass])},[y("span",{innerHTML:u},null,8,b1)],2))),256))]),_:1},8,["pause"])):(F(),B("div",S1,[y("span",{innerHTML:s(b(n))[0]},null,8,R1)]))}}},A1={class:"second-heading"},P1={class:"second-field cta"},N1={__name:"SecondProductC2",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(F(),B("div",{class:_n("obj-2-wrapper c2 "+t.config.c2_color)},[y("div",A1,[ge(av,{text:t.config.message_2,"text-class":"second-heading",badge:!0},null,8,["text"])]),y("div",P1,bt(t.config.field_cta),1)],2))}},k1={class:"obj-2-wrapper c1"},O1={class:"message-field"},x1={__name:"SecondProductC3",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(F(),B("div",k1,[y("div",O1,[ge(av,{text:t.config.message,"text-class":"message-field"},null,8,["text"])])]))}},D1={class:"product-base"},M1={key:0,class:"notif-dot"},L1=y("img",{class:"img",src:p1},null,-1),F1={class:"obj-1"},U1={class:"prod-heading"},$1={class:"main-field"},B1={class:"main-field-content"},H1={class:"obj-2"},oc={__name:"ProductBase",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(F(),B("div",D1,[t.config.notif_dot&&!(t.config.type=="Data + CTA"&&(t.config.c2_color=="orange"||t.config.c2_color=="red"))?(F(),B("div",M1)):ve("",!0),L1,y("span",F1,[y("div",U1,bt(t.config.product_name),1),y("div",$1,[t.config.rupee?(F(),Pn(v1,{key:0})):ve("",!0),y("span",B1,bt(t.config.primary_field),1)])]),y("span",H1,[t.config.type=="Data Points"?(F(),Pn(T1,{key:0,config:t.config},null,8,["config"])):t.config.type=="Data + CTA"?(F(),Pn(N1,{key:1,config:t.config},null,8,["config"])):t.config.type=="Message"?(F(),Pn(x1,{key:2,config:t.config},null,8,["config"])):(F(),B(Pe,{key:3},[],64))])]))}},cv={type:"Data Points",product_name:"Example",rupee:!0,primary_field:"1,00,000",notif_dot:!1,heading_2:"Rewards Earned",c2_color:"green",field_2:"₹1,000",message_2:"Next EMI #7 Days#",field_cta:"Pay Now",third_field_type:"Bottom",field_3:"₹37/day",message:`Large message that goes to 2 lines
This is the second paragraph`},uv=Up("config",{persist:!0,state:()=>JSON.parse(JSON.stringify(cv))}),hv={product_name:"Example",title:"It’s time for the change",subtitle:"Last date to complete NACH is 5th Dec, 2022",color:"yellow",cta:null},V1=Up("bannerconfig",{persist:!0,state:()=>JSON.parse(JSON.stringify(hv))}),j1={class:"container"},W1={class:"columns"},z1={class:"column is-6"},q1={class:"tabs is-centered"},K1=["onClick"],G1=y("h1",{class:"title is-5"}," SuperHome My Products Card Builder ",-1),Y1=y("h2",{class:"subtitle is-6"},' Here, you can play around with text lengths and copy for creating "My Products" cards. The first card on the right-hand side will change instanteously to show the current scenario. Additionally, you can choose from the 3 configurations using the tabs above. When you click on "Save" at the bottom of the screen, the card is saved. You can see all saved card for that specific product on this page, but the entire list of saved cards is visible in the "Browse" section. ',-1),X1={class:"field"},Q1=y("label",{class:"label"},"Product Name",-1),J1={class:"control is-expanded"},Z1={class:"field"},eP=y("label",{class:"label"},"Primary Field",-1),tP={class:"field has-addons"},nP={class:"control"},iP={class:"select"},sP=y("option",{value:!1},null,-1),rP=y("option",{value:!0},"₹",-1),oP=[sP,rP],lP={class:"control is-expanded"},aP={class:"field"},cP=["disabled"],uP=["disabled"],hP=y("hr",null,null,-1),dP={key:0,class:"field is-horizontal"},fP={class:"field-body"},pP={class:"field"},gP=y("label",{class:"label"},"Secondary Field Title",-1),_P={class:"control"},mP={class:"field"},vP=y("label",{class:"label"},"Secondary Field Value",-1),yP={class:"control"},EP={class:"field"},wP=y("label",{class:"label"},"Status",-1),CP={class:"control"},IP={class:"radio"},TP={class:"radio"},bP={class:"radio"},SP={class:"field is-horizontal"},RP={class:"field-body"},AP={class:"field"},PP=y("label",{class:"label"},"Message",-1),NP={class:"control"},kP={class:"field"},OP=y("label",{class:"label"},"CTA Text",-1),xP={class:"control"},DP={key:2,class:"field is-horizontal"},MP={class:"field-body"},LP={class:"field"},FP=y("label",{class:"label"},"Third Field?",-1),UP={class:"control"},$P={class:"radio"},BP={class:"radio"},HP={class:"radio"},VP={class:"field"},jP=y("label",{class:"label"},"Third Field Value",-1),WP={class:"control"},zP=["disabled"],qP={key:3,class:"field"},KP=y("label",{class:"label"},"Message",-1),GP={class:"control"},YP={class:"buttons"},XP={class:"column is-6"},QP={class:"main"},JP=y("div",{class:"header"}," My Products ",-1),ZP={key:0,class:"header mt-5"},eN={key:1,class:"button is-loading is-fullwidth"},tN=["onClick"],Pf={__name:"HomeView",setup(t){const e=lv(),n=ov(),i=Bo(yt.ref("/cards")),s=ju(yt.ref("/status")),r=uv(),o=he(["Data Points","Data + CTA","Message"]);function l(){r.$patch(cv),n.push("/cards")}function a(){let f=["type","product_name","rupee","primary_field","notif_dot"].concat({"Data Points":["heading_2","field_2","third_field_type","field_3"],"Data + CTA":["message_2","field_cta","c2_color"],Message:["message"]}[r.type]),g={};return f.forEach(v=>{g[v]=r[v]}),g.type=="Data + CTA"&&["orange","red"].includes(g.c2_color)&&(g.notif_dot=!1),g}function c(){a(),console.log(JSON.stringify(a())),e.params.id?yt.set(`/cards/${e.params.id}`,a()):yt.push("/cards",a())}function u(f){return i.value.filter(g=>g.product_name.toLowerCase()==f.toLowerCase())}function h(f){yt.del(`/cards/${f}`),n.push("/cards")}function d(f){r.$patch(f),n.push(`/cards/edit/${f.id}`)}return(f,g)=>(F(),B("div",j1,[y("div",W1,[y("div",z1,[y("div",q1,[y("ul",null,[(F(!0),B(Pe,null,xn(o.value,v=>(F(),B("li",{class:_n({"is-active":b(r).type==v}),onClick:S=>{b(r).type=v,b(r).type=v}},[y("a",null,bt(v),1)],10,K1))),256))])]),G1,Y1,y("div",X1,[Q1,y("div",J1,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[0]||(g[0]=v=>b(r).product_name=v)},null,512),[[Ct,b(r).product_name]])])]),y("div",Z1,[eP,y("div",tP,[y("p",nP,[y("span",iP,[Ae(y("select",{"onUpdate:modelValue":g[1]||(g[1]=v=>b(r).rupee=v)},oP,512),[[RE,b(r).rupee]])])]),y("div",lP,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[2]||(g[2]=v=>b(r).primary_field=v)},null,512),[[Ct,b(r).primary_field]])])])]),y("div",aP,[y("label",{class:"checkbox label",disabled:b(r).type=="Data + CTA"&&(b(r).c2_color=="orange"||b(r).c2_color=="red")},[Ae(y("input",{type:"checkbox","onUpdate:modelValue":g[3]||(g[3]=v=>b(r).notif_dot=v),disabled:b(r).type=="Data + CTA"&&(b(r).c2_color=="orange"||b(r).c2_color=="red")},null,8,uP),[[SE,b(r).notif_dot]]),Xe(" Notification Dot? ")],8,cP)]),hP,b(r).type=="Data Points"?(F(),B("div",dP,[y("div",fP,[y("div",pP,[gP,y("div",_P,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[4]||(g[4]=v=>b(r).heading_2=v)},null,512),[[Ct,b(r).heading_2]])])]),y("div",mP,[vP,y("div",yP,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[5]||(g[5]=v=>b(r).field_2=v)},null,512),[[Ct,b(r).field_2]])])])])])):ve("",!0),b(r).type=="Data + CTA"?(F(),B(Pe,{key:1},[y("div",EP,[wP,y("div",CP,[y("label",IP,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[6]||(g[6]=v=>b(r).c2_color=v),value:"green"},null,512),[[cn,b(r).c2_color]]),Xe(" Green ")]),y("label",TP,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[7]||(g[7]=v=>b(r).c2_color=v),value:"orange"},null,512),[[cn,b(r).c2_color]]),Xe(" Orange ")]),y("label",bP,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[8]||(g[8]=v=>b(r).c2_color=v),value:"red"},null,512),[[cn,b(r).c2_color]]),Xe(" Red ")])])]),y("div",SP,[y("div",RP,[y("div",AP,[PP,y("div",NP,[Ae(y("textarea",{class:"textarea","onUpdate:modelValue":g[9]||(g[9]=v=>b(r).message_2=v),rows:"2"},null,512),[[Ct,b(r).message_2]])])]),y("div",kP,[OP,y("div",xP,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[10]||(g[10]=v=>b(r).field_cta=v)},null,512),[[Ct,b(r).field_cta]])])])])])],64)):ve("",!0),b(r).type=="Data Points"?(F(),B("div",DP,[y("div",MP,[y("div",LP,[FP,y("div",UP,[y("label",$P,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[11]||(g[11]=v=>b(r).third_field_type=v),value:null},null,512),[[cn,b(r).third_field_type]]),Xe(" No ")]),y("label",BP,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[12]||(g[12]=v=>b(r).third_field_type=v),value:"Top"},null,512),[[cn,b(r).third_field_type]]),Xe(" On Top ")]),y("label",HP,[Ae(y("input",{type:"radio","onUpdate:modelValue":g[13]||(g[13]=v=>b(r).third_field_type=v),value:"Bottom"},null,512),[[cn,b(r).third_field_type]]),Xe(" On Bottom ")])])]),y("div",VP,[jP,y("div",WP,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":g[14]||(g[14]=v=>b(r).field_3=v),disabled:!b(r).third_field_type},null,8,zP),[[Ct,b(r).field_3]])])])])])):ve("",!0),b(r).type=="Message"?(F(),B("div",qP,[KP,y("div",GP,[Ae(y("textarea",{class:"textarea","onUpdate:modelValue":g[15]||(g[15]=v=>b(r).message=v),placeholder:"e.g. Hello world",rows:"2"},null,512),[[Ct,b(r).message]])])])):ve("",!0),y("div",YP,[b(e).params.id?ve("",!0):(F(),B("button",{key:0,class:"button is-primary is-fullwidth",onClick:c},"Save")),b(e).params.id?(F(),B("button",{key:1,class:"button is-warning is-fullwidth",onClick:c},"Update")):ve("",!0),b(e).params.id?(F(),B("button",{key:2,class:"button is-outlined is-danger is-fullwidth",onClick:g[16]||(g[16]=v=>h(b(e).params.id))},"Delete")):ve("",!0),y("button",{class:"button is-default text-right",onClick:g[17]||(g[17]=v=>l())},"Reset")])]),y("div",XP,[y("main",QP,[JP,y("div",{onClick:g[18]||(g[18]=v=>b(n).push("/cards"))},[ge(oc,{config:b(r)},null,8,["config"])]),u(b(r).product_name).length>0?(F(),B("div",ZP," Saved Cards ")):ve("",!0),b(s)?ve("",!0):(F(),B("button",eN,"Loading")),(F(!0),B(Pe,null,xn(u(b(r).product_name),v=>(F(),B("div",{onClick:S=>d(v)},[ge(oc,{config:v},null,8,["config"])],8,tN))),256))])])])]))}},nN="https://shashwat986.github.io/MV-SH-Test/assets/banner-red-7LRQaFaK.png",iN="https://shashwat986.github.io/MV-SH-Test/assets/banner-yellow-DUI96SZ4.png",sN="https://shashwat986.github.io/MV-SH-Test/assets/banner-blue--CP4546X.png",rN={key:0,class:"banner-img",src:nN},oN={key:1,class:"banner-img",src:iN},lN={key:2,class:"banner-img",src:sN},aN={class:"banner-content-parent"},cN={class:"banner-content"},uN={class:"banner-title"},hN={class:"banner-subtitle"},dN={key:0,class:"banner-cta"},lc={__name:"BannerBase",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(F(),B("div",{class:_n("banner-base "+t.config.color)},[t.config.color=="red"?(F(),B("img",rN)):ve("",!0),t.config.color=="yellow"?(F(),B("img",oN)):ve("",!0),t.config.color=="blue"?(F(),B("img",lN)):ve("",!0),y("div",aN,[y("div",cN,[y("div",uN,bt(t.config.title),1),y("div",hN,bt(t.config.subtitle),1),t.config.cta?(F(),B("div",dN,bt(t.config.cta)+"    → ",1)):ve("",!0)])])],2))}},fN={},pN={class:"has-text-centered"},gN=y("svg",{width:"26",height:"6",viewBox:"0 0 26 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("circle",{cx:"13",cy:"3",r:"3",fill:"#274973"}),y("circle",{cx:"2",cy:"3",r:"2",fill:"#BFBFBF"}),y("circle",{cx:"24",cy:"3",r:"2",fill:"#BFBFBF"})],-1),_N=[gN];function mN(t,e){return F(),B("div",pN,_N)}const dv=qu(fN,[["render",mN]]),vN="https://shashwat986.github.io/MV-SH-Test/assets/mvlogo-IvcuWHSo.png",yN={},EN={src:vN,class:"mv-logo"};function wN(t,e){return F(),B("img",EN)}const fv=qu(yN,[["render",wN]]),CN={class:"container"},IN={class:"columns"},TN={class:"column is-6"},bN=y("h1",{class:"title is-5"}," SuperHome Product Banner Builder ",-1),SN=y("h2",{class:"subtitle is-6"},' Here, you can play around with text lengths and copy for creating Status banners. The first banner on the right-hand side will change instanteously to show the current scenario. When you click on "Save" at the bottom of the screen, the banner is saved. You can see all saved banners for that specific product on this page, but the entire list of saved cards and banners is visible in the "Browse" section. ',-1),RN={class:"field"},AN=y("label",{class:"label"},"Product Name",-1),PN={class:"control is-expanded"},NN=y("hr",null,null,-1),kN={class:"field"},ON=y("label",{class:"label"},"Title",-1),xN={class:"control"},DN={class:"field"},MN=y("label",{class:"label"},"Message",-1),LN={class:"control"},FN={class:"field"},UN=y("label",{class:"label"},"Status",-1),$N={class:"control"},BN={class:"radio"},HN={class:"radio"},VN={class:"radio"},jN={class:"field"},WN=y("label",{class:"label"},"CTA",-1),zN={class:"control"},qN={class:"buttons"},KN={class:"column is-6"},GN={class:"main"},YN={key:0,class:"button is-loading is-fullwidth"},XN=["onClick"],Nf={__name:"BannerCreateView",setup(t){const e=lv(),n=ov(),i=Bo(yt.ref("/banners")),s=ju(yt.ref("/status")),r=V1();he(["Data Points","Data + CTA","Message"]);function o(){r.$patch(hv),n.push("/banner")}function l(){let d=["product_name","title","subtitle","color","cta"],f={};return d.forEach(g=>{f[g]=r[g]}),(f.cta==""||!f.cta)&&(f.cta=null),f}function a(){l(),console.log(JSON.stringify(l())),e.params.id?yt.set(`/banners/${e.params.id}`,l()):yt.push("/banners",l())}function c(d){return i.value.filter(f=>f.product_name.toLowerCase()==d.toLowerCase())}function u(d){yt.del(`/banners/${d}`),n.push("/banners")}function h(d){r.$patch(d),n.push(`/banners/edit/${d.id}`)}return(d,f)=>(F(),B("div",CN,[y("div",IN,[y("div",TN,[bN,SN,y("div",RN,[AN,y("div",PN,[Ae(y("input",{class:"input",type:"text","onUpdate:modelValue":f[0]||(f[0]=g=>b(r).product_name=g)},null,512),[[Ct,b(r).product_name]])])]),NN,y("div",kN,[ON,y("div",xN,[Ae(y("textarea",{class:"textarea","onUpdate:modelValue":f[1]||(f[1]=g=>b(r).title=g),placeholder:"e.g. Hello world",rows:"2"},null,512),[[Ct,b(r).title]])])]),y("div",DN,[MN,y("div",LN,[Ae(y("textarea",{class:"textarea","onUpdate:modelValue":f[2]||(f[2]=g=>b(r).subtitle=g),placeholder:"e.g. Hello world",rows:"2"},null,512),[[Ct,b(r).subtitle]])])]),y("div",FN,[UN,y("div",$N,[y("label",BN,[Ae(y("input",{type:"radio","onUpdate:modelValue":f[3]||(f[3]=g=>b(r).color=g),value:"blue"},null,512),[[cn,b(r).color]]),Xe(" Blue ")]),y("label",HN,[Ae(y("input",{type:"radio","onUpdate:modelValue":f[4]||(f[4]=g=>b(r).color=g),value:"yellow"},null,512),[[cn,b(r).color]]),Xe(" Yellow ")]),y("label",VN,[Ae(y("input",{type:"radio","onUpdate:modelValue":f[5]||(f[5]=g=>b(r).color=g),value:"red"},null,512),[[cn,b(r).color]]),Xe(" Red ")])])]),y("div",jN,[WN,y("div",zN,[Ae(y("input",{type:"text",class:"input","onUpdate:modelValue":f[6]||(f[6]=g=>b(r).cta=g)},null,512),[[Ct,b(r).cta]])])]),y("div",qN,[b(e).params.id?ve("",!0):(F(),B("button",{key:0,class:"button is-primary is-fullwidth",onClick:a},"Save")),b(e).params.id?(F(),B("button",{key:1,class:"button is-warning is-fullwidth",onClick:a},"Update")):ve("",!0),b(e).params.id?(F(),B("button",{key:2,class:"button is-outlined is-danger is-fullwidth",onClick:f[7]||(f[7]=g=>u(b(e).params.id))},"Delete")):ve("",!0),y("button",{class:"button is-default text-right",onClick:f[8]||(f[8]=g=>o())},"Reset")])]),y("div",KN,[y("main",GN,[ge(fv),y("div",{onClick:f[9]||(f[9]=g=>b(n).push("/banners"))},[ge(lc,{config:b(r)},null,8,["config"])]),ge(dv),b(s)?ve("",!0):(F(),B("button",YN,"Loading")),(F(!0),B(Pe,null,xn(c(b(r).product_name),g=>(F(),B("div",{onClick:v=>h(g)},[ge(lc,{config:g},null,8,["config"])],8,XN))),256))])])])]))}},QN={class:"container"},JN={key:0,class:"columns is-multiline"},ZN={class:"column is-4"},ek={class:"main browse"},tk=["onClick"],nk={class:"header mt-5"},ik={key:1,class:"button is-loading is-fullwidth"},sk=["onClick"],rk={key:1,class:"button is-loading is-fullwidth"},kf={__name:"BrowseView",setup(t){const e=uv(),n=Bo(yt.ref("/cards")),i=Bo(yt.ref("/banners")),s=ju(yt.ref("/status"));function r(u){return n.value.filter(h=>h.product_name.toLowerCase()==u.toLowerCase())}function o(u){return i.value.filter(h=>h.product_name.toLowerCase()==u.toLowerCase())}function l(){let u=["example"];return n.value.forEach(h=>{u.includes(h.product_name.toLowerCase())||u.push(h.product_name.toLowerCase())}),i.value.forEach(h=>{u.includes(h.product_name.toLowerCase())||u.push(h.product_name.toLowerCase())}),u}function a(u){e.$patch(u),ac.push(`/cards/edit/${u.id}`)}function c(u){e.$patch(u),ac.push(`/banners/edit/${u.id}`)}return(u,h)=>(F(),B("div",QN,[b(s)?(F(),B("div",JN,[(F(!0),B(Pe,null,xn(l(),d=>(F(),B("div",ZN,[y("main",ek,[ge(fv),(F(!0),B(Pe,null,xn(o(d),f=>(F(),B("div",{onClick:g=>c(f),style:{position:"relative"}},[ge(lc,{config:f},null,8,["config"])],8,tk))),256)),o(d).length>0?(F(),Pn(dv,{key:0})):ve("",!0),y("div",nk," My Products ("+bt(d)+") ",1),b(s)?ve("",!0):(F(),B("button",ik,"Loading")),(F(!0),B(Pe,null,xn(r(d),f=>(F(),B("div",{onClick:g=>a(f),style:{position:"relative"}},[ge(oc,{config:f},null,8,["config"])],8,sk))),256))])]))),256))])):ve("",!0),b(s)?ve("",!0):(F(),B("button",rk,"Loading"))]))}},ac=l1({history:bA("https://shashwat986.github.io/MV-SH-Test/"),routes:[{path:"/",name:"home",component:kf},{path:"/edit/:id",redirect:"/"},{path:"/browse",name:"browse",component:kf},{path:"/cards",name:"cardhome",component:Pf},{path:"/cards/edit/:id",name:"cardedit",component:Pf},{path:"/banners",name:"bannerhome",component:Nf},{path:"/banners/edit/:id",name:"banneredit",component:Nf}]}),Or=NE(f1),pv=xE();pv.use(nw);Or.use(pv);Or.use(YE);Or.use(ac);Or.use(rA,{firebaseApp:Gm});Or.mount("#app");
