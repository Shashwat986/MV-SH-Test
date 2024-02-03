(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function oc(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},Ri=[],Kt=()=>{},rv=()=>!1,Bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lc=t=>t.startsWith("onUpdate:"),qe=Object.assign,ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,se=(t,e)=>ov.call(t,e),V=Array.isArray,Ai=t=>fr(t)==="[object Map]",Qi=t=>fr(t)==="[object Set]",Wu=t=>fr(t)==="[object Date]",G=t=>typeof t=="function",Le=t=>typeof t=="string",Dn=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Td=t=>(we(t)||G(t))&&G(t.then)&&G(t.catch),bd=Object.prototype.toString,fr=t=>bd.call(t),lv=t=>fr(t).slice(8,-1),Sd=t=>fr(t)==="[object Object]",cc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gr=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},av=/-(\w)/g,qt=Ho(t=>t.replace(av,(e,n)=>n?n.toUpperCase():"")),cv=/\B([A-Z])/g,Ji=Ho(t=>t.replace(cv,"-$1").toLowerCase()),Vo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pl=Ho(t=>t?`on${Vo(t)}`:""),ai=(t,e)=>!Object.is(t,e),Yr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zu;const ca=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Le(i)?dv(i):jo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Le(t)||we(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function dv(t){const e={};return t.replace(fv,"").split(uv).forEach(n=>{if(n){const i=n.split(hv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mn(t){let e="";if(Le(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const i=Mn(t[n]);i&&(e+=i+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gv=oc(pv);function Rd(t){return!!t||t===""}function _v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ci(t[i],e[i]);return n}function ci(t,e){if(t===e)return!0;let n=Wu(t),i=Wu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Dn(t),i=Dn(e),n||i)return t===e;if(n=V(t),i=V(e),n||i)return n&&i?_v(t,e):!1;if(n=we(t),i=we(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!ci(t[o],e[o]))return!1}}return String(t)===String(e)}function uc(t,e){return t.findIndex(n=>ci(n,e))}const ln=t=>Le(t)?t:t==null?"":V(t)||we(t)&&(t.toString===bd||!G(t.toString))?JSON.stringify(t,Ad,2):String(t),Ad=(t,e)=>e&&e.__v_isRef?Ad(t,e.value):Ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Nl(i,r)+" =>"]=s,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nl(n))}:Dn(e)?Nl(e):we(e)&&!V(e)&&!Sd(e)?String(e):e,Nl=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let gt;class Pd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nd(t){return new Pd(t)}function mv(t,e=gt){e&&e.active&&e.effects.push(t)}function hc(){return gt}function kd(t){gt&&gt.cleanups.push(t)}const fc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Od=t=>(t.w&Ln)>0,xd=t=>(t.n&Ln)>0,vv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ln},yv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Od(s)&&!xd(s)?s.delete(t):e[n++]=s,s.w&=~Ln,s.n&=~Ln}e.length=n}},to=new WeakMap;let ws=0,Ln=1;const ua=30;let St;const si=Symbol(""),ha=Symbol("");class dc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mv(this,i)}run(){if(!this.active)return this.fn();let e=St,n=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,Rn=!0,Ln=1<<++ws,ws<=ua?vv(this):Ku(this),this.fn()}finally{ws<=ua&&yv(this),Ln=1<<--ws,St=this.parent,Rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Ku(this),this.onStop&&this.onStop(),this.active=!1)}}function Ku(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rn=!0;const Dd=[];function Zi(){Dd.push(Rn),Rn=!1}function es(){const t=Dd.pop();Rn=t===void 0?!0:t}function ft(t,e,n){if(Rn&&St){let i=to.get(t);i||to.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=fc()),Md(s)}}function Md(t,e){let n=!1;ws<=ua?xd(t)||(t.n|=Ln,n=!Od(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function un(t,e,n,i,s,r){const o=to.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&V(t)){const a=Number(i);o.forEach((c,u)=>{(u==="length"||!Dn(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":V(t)?cc(n)&&l.push(o.get("length")):(l.push(o.get(si)),Ai(t)&&l.push(o.get(ha)));break;case"delete":V(t)||(l.push(o.get(si)),Ai(t)&&l.push(o.get(ha)));break;case"set":Ai(t)&&l.push(o.get(si));break}if(l.length===1)l[0]&&fa(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);fa(fc(a))}}function fa(t,e){const n=V(t)?t:[...t];for(const i of n)i.computed&&qu(i);for(const i of n)i.computed||qu(i)}function qu(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Ev(t,e){var n;return(n=to.get(t))==null?void 0:n.get(e)}const wv=oc("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn)),Gu=Cv();function Cv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=re(this);for(let r=0,o=this.length;r<o;r++)ft(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zi();const i=re(this)[e].apply(this,n);return es(),i}}),t}function Iv(t){const e=re(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Fd{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Lv:Hd:r?Bd:$d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=V(e);if(!s){if(o&&se(Gu,n))return Reflect.get(Gu,n,i);if(n==="hasOwnProperty")return Iv}const l=Reflect.get(e,n,i);return(Dn(n)?Ld.has(n):wv(n))||(s||ft(e,"get",n),r)?l:Se(l)?o&&cc(n)?l:l.value:we(l)?s?jd(l):dr(l):l}}class Ud extends Fd{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(Fi(r)&&Se(r)&&!Se(i))return!1;if(!this._shallow&&(!no(i)&&!Fi(i)&&(r=re(r),i=re(i)),!V(e)&&Se(r)&&!Se(i)))return r.value=i,!0;const o=V(e)&&cc(n)?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,i,s);return e===re(s)&&(o?ai(i,r)&&un(e,"set",n,i):un(e,"add",n,i)),l}deleteProperty(e,n){const i=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&un(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Dn(n)||!Ld.has(n))&&ft(e,"has",n),i}ownKeys(e){return ft(e,"iterate",V(e)?"length":si),Reflect.ownKeys(e)}}class Tv extends Fd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bv=new Ud,Sv=new Tv,Rv=new Ud(!0),pc=t=>t,Wo=t=>Reflect.getPrototypeOf(t);function xr(t,e,n=!1,i=!1){t=t.__v_raw;const s=re(t),r=re(e);n||(ai(e,r)&&ft(s,"get",e),ft(s,"get",r));const{has:o}=Wo(s),l=i?pc:n?mc:Bs;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function Dr(t,e=!1){const n=this.__v_raw,i=re(n),s=re(t);return e||(ai(t,s)&&ft(i,"has",t),ft(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Mr(t,e=!1){return t=t.__v_raw,!e&&ft(re(t),"iterate",si),Reflect.get(t,"size",t)}function Yu(t){t=re(t);const e=re(this);return Wo(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function Xu(t,e){e=re(e);const n=re(this),{has:i,get:s}=Wo(n);let r=i.call(n,t);r||(t=re(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ai(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function Qu(t){const e=re(this),{has:n,get:i}=Wo(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&un(e,"delete",t,void 0),r}function Ju(){const t=re(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function Lr(t,e){return function(i,s){const r=this,o=r.__v_raw,l=re(o),a=e?pc:t?mc:Bs;return!t&&ft(l,"iterate",si),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function Fr(t,e,n){return function(...i){const s=this.__v_raw,r=re(s),o=Ai(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?pc:e?mc:Bs;return!e&&ft(r,"iterate",a?ha:si),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Av(){const t={get(r){return xr(this,r)},get size(){return Mr(this)},has:Dr,add:Yu,set:Xu,delete:Qu,clear:Ju,forEach:Lr(!1,!1)},e={get(r){return xr(this,r,!1,!0)},get size(){return Mr(this)},has:Dr,add:Yu,set:Xu,delete:Qu,clear:Ju,forEach:Lr(!1,!0)},n={get(r){return xr(this,r,!0)},get size(){return Mr(this,!0)},has(r){return Dr.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Lr(!0,!1)},i={get(r){return xr(this,r,!0,!0)},get size(){return Mr(this,!0)},has(r){return Dr.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fr(r,!1,!1),n[r]=Fr(r,!0,!1),e[r]=Fr(r,!1,!0),i[r]=Fr(r,!0,!0)}),[t,n,e,i]}const[Pv,Nv,kv,Ov]=Av();function gc(t,e){const n=e?t?Ov:kv:t?Nv:Pv;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(se(n,s)&&s in i?n:i,s,r)}const xv={get:gc(!1,!1)},Dv={get:gc(!1,!0)},Mv={get:gc(!0,!1)},$d=new WeakMap,Bd=new WeakMap,Hd=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(lv(t))}function dr(t){return Fi(t)?t:_c(t,!1,bv,xv,$d)}function Vd(t){return _c(t,!1,Rv,Dv,Bd)}function jd(t){return _c(t,!0,Sv,Mv,Hd)}function _c(t,e,n,i,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Uv(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function An(t){return Fi(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Fi(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Wd(t){return An(t)||Fi(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function zo(t){return Zr(t,"__v_skip",!0),t}const Bs=t=>we(t)?dr(t):t,mc=t=>we(t)?jd(t):t;function zd(t){Rn&&St&&(t=re(t),Md(t.dep||(t.dep=fc())))}function Kd(t,e){t=re(t);const n=t.dep;n&&fa(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function me(t){return Gd(t,!1)}function qd(t){return Gd(t,!0)}function Gd(t,e){return Se(t)?t:new $v(t,e)}class $v{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Bs(e)}get value(){return zd(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Fi(e);e=n?e:re(e),ai(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bs(e),Kd(this))}}function D(t){return Se(t)?t.value:t}function Gn(t){return G(t)?t():D(t)}const Bv={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Yd(t){return An(t)?t:new Proxy(t,Bv)}function vc(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=Vv(t,n);return e}class Hv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(re(this._object),this._key)}}function Vv(t,e,n){const i=t[e];return Se(i)?i:new Hv(t,e,n)}class jv{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dc(e,()=>{this._dirty||(this._dirty=!0,Kd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=re(this);return zd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wv(t,e,n=!1){let i,s;const r=G(t);return r?(i=t,s=Kt):(i=t.get,s=t.set),new jv(i,s,r||!s,n)}function Pn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ko(r,e,n)}return s}function Ot(t,e,n,i){if(G(t)){const r=Pn(t,e,n,i);return r&&Td(r)&&r.catch(o=>{Ko(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Ot(t[r],e,n,i));return s}function Ko(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Pn(a,null,10,[t,o,l]);return}}zv(t,n,s,i)}function zv(t,e,n,i=!0){console.error(t)}let Hs=!1,da=!1;const Qe=[];let Vt=0;const Pi=[];let rn=null,Yn=0;const Xd=Promise.resolve();let yc=null;function Ec(t){const e=yc||Xd;return t?e.then(this?t.bind(this):t):e}function Kv(t){let e=Vt+1,n=Qe.length;for(;e<n;){const i=e+n>>>1,s=Qe[i],r=Vs(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function wc(t){(!Qe.length||!Qe.includes(t,Hs&&t.allowRecurse?Vt+1:Vt))&&(t.id==null?Qe.push(t):Qe.splice(Kv(t.id),0,t),Qd())}function Qd(){!Hs&&!da&&(da=!0,yc=Xd.then(Zd))}function qv(t){const e=Qe.indexOf(t);e>Vt&&Qe.splice(e,1)}function Gv(t){V(t)?Pi.push(...t):(!rn||!rn.includes(t,t.allowRecurse?Yn+1:Yn))&&Pi.push(t),Qd()}function Zu(t,e,n=Hs?Vt+1:0){for(;n<Qe.length;n++){const i=Qe[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Qe.splice(n,1),n--,i()}}}function Jd(t){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,i)=>Vs(n)-Vs(i)),Yn=0;Yn<rn.length;Yn++)rn[Yn]();rn=null,Yn=0}}const Vs=t=>t.id==null?1/0:t.id,Yv=(t,e)=>{const n=Vs(t)-Vs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zd(t){da=!1,Hs=!0,Qe.sort(Yv);try{for(Vt=0;Vt<Qe.length;Vt++){const e=Qe[Vt];e&&e.active!==!1&&Pn(e,null,14)}}finally{Vt=0,Qe.length=0,Jd(),Hs=!1,yc=null,(Qe.length||Pi.length)&&Zd()}}function Xv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ie;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ie;f&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(eo))}let l,a=i[l=Pl(e)]||i[l=Pl(qt(e))];!a&&r&&(a=i[l=Pl(Ji(e))]),a&&Ot(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ot(c,t,6,s)}}function ep(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!G(t)){const a=c=>{const u=ep(c,e,!0);u&&(l=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(we(t)&&i.set(t,null),null):(V(r)?r.forEach(a=>o[a]=null):qe(o,r),we(t)&&i.set(t,o),o)}function qo(t,e){return!t||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ji(e))||se(t,e))}let He=null,tp=null;function io(t){const e=He;return He=t,tp=t&&t.type.__scopeId||null,e}function so(t,e=He,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&uh(-1);const r=io(e);let o;try{o=t(...s)}finally{io(r),i._d&&uh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function kl(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:v}=t;let b,A;const x=io(t);try{if(n.shapeFlag&4){const P=s||i,W=P;b=Ht(u.call(W,P,h,r,p,f,_)),A=a}else{const P=e;b=Ht(P.length>1?P(r,{attrs:a,slots:l,emit:c}):P(r,null)),A=e.props?a:Qv(a)}}catch(P){Ps.length=0,Ko(P,t,1),b=Re(Fn)}let F=b;if(A&&v!==!1){const P=Object.keys(A),{shapeFlag:W}=F;P.length&&W&7&&(o&&P.some(lc)&&(A=Jv(A,o)),F=$i(F,A))}return n.dirs&&(F=$i(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),b=F,io(x),b}const Qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bo(n))&&((e||(e={}))[n]=t[n]);return e},Jv=(t,e)=>{const n={};for(const i in t)(!lc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Zv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?eh(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!qo(c,f))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?eh(i,o,c):!0:!!o;return!1}function eh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!qo(n,r))return!0}return!1}function ey({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const np="components";function ty(t,e){return iy(np,t,!0,e)||t}const ny=Symbol.for("v-ndc");function iy(t,e,n=!0,i=!1){const s=He||xe;if(s){const r=s.type;if(t===np){const l=Ky(r,!1);if(l&&(l===e||l===qt(e)||l===Vo(qt(e))))return r}const o=th(s[t]||r[t],e)||th(s.appContext[t],e);return!o&&i?r:o}}function th(t,e){return t&&(t[e]||t[qt(e)]||t[Vo(qt(e))])}const sy=t=>t.__isSuspense;function ry(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Gv(t)}const Ur={};function hn(t,e,n){return ip(t,e,n)}function ip(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ie){var l;const a=hc()===((l=xe)==null?void 0:l.scope)?xe:null;let c,u=!1,h=!1;if(Se(t)?(c=()=>t.value,u=no(t)):An(t)?(c=()=>t,i=!0):V(t)?(h=!0,u=t.some(P=>An(P)||no(P)),c=()=>t.map(P=>{if(Se(P))return P.value;if(An(P))return Qn(P);if(G(P))return Pn(P,a,2)})):G(t)?e?c=()=>Pn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ot(t,a,3,[p])}:c=Kt,e&&i){const P=c;c=()=>Qn(P())}let f,p=P=>{f=x.onStop=()=>{Pn(P,a,4),f=x.onStop=void 0}},_;if(zs)if(p=Kt,e?n&&Ot(e,a,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const P=Yy();_=P.__watcherHandles||(P.__watcherHandles=[])}else return Kt;let v=h?new Array(t.length).fill(Ur):Ur;const b=()=>{if(x.active)if(e){const P=x.run();(i||u||(h?P.some((W,ce)=>ai(W,v[ce])):ai(P,v)))&&(f&&f(),Ot(e,a,3,[P,v===Ur?void 0:h&&v[0]===Ur?[]:v,p]),v=P)}else x.run()};b.allowRecurse=!!e;let A;s==="sync"?A=b:s==="post"?A=()=>lt(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),A=()=>wc(b));const x=new dc(c,A);e?n?b():v=x.run():s==="post"?lt(x.run.bind(x),a&&a.suspense):x.run();const F=()=>{x.stop(),a&&a.scope&&ac(a.scope.effects,x)};return _&&_.push(F),F}function oy(t,e,n){const i=this.proxy,s=Le(t)?t.includes(".")?sp(i,t):()=>i[t]:t.bind(i,i);let r;G(e)?r=e:(r=e.handler,n=e);const o=xe;Bi(this);const l=ip(s,r.bind(i),n);return o?Bi(o):ri(),l}function sp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Qn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Qn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Qn(t[n],e);else if(Qi(t)||Ai(t))t.forEach(n=>{Qn(n,e)});else if(Sd(t))for(const n in t)Qn(t[n],e);return t}function Ye(t,e){const n=He;if(n===null)return t;const i=Qo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=Ie]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&Qn(l),s.push({dir:o,instance:i,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Wn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Zi(),Ot(a,n,8,[t.el,l,t,e]),es())}}/*! #__NO_SIDE_EFFECTS__ */function Cc(t,e){return G(t)?qe({name:t.name},e,{setup:t}):t}const Rs=t=>!!t.type.__asyncLoader,rp=t=>t.type.__isKeepAlive;function ly(t,e){op(t,"a",e)}function ay(t,e){op(t,"da",e)}function op(t,e,n=xe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Go(e,i,n),n){let s=n.parent;for(;s&&s.parent;)rp(s.parent.vnode)&&cy(i,e,n,s),s=s.parent}}function cy(t,e,n,i){const s=Go(e,t,i,!0);cp(()=>{ac(i[e],s)},n)}function Go(t,e,n=xe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zi(),Bi(n);const l=Ot(e,n,t,o);return ri(),es(),l});return i?s.unshift(r):s.push(r),r}}const gn=t=>(e,n=xe)=>(!zs||t==="sp")&&Go(t,(...i)=>e(...i),n),uy=gn("bm"),lp=gn("m"),hy=gn("bu"),fy=gn("u"),ap=gn("bum"),cp=gn("um"),up=gn("sp"),dy=gn("rtg"),py=gn("rtc");function gy(t,e=xe){Go("ec",t,e)}function Ui(t,e,n,i){let s;const r=n&&n[i];if(V(t)||Le(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function Ol(t,e,n={},i,s){if(He.isCE||He.parent&&Rs(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),Re("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),z();const o=r&&hp(r(n)),l=Jn(ke,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function hp(t){return t.some(e=>oo(e)?!(e.type===Fn||e.type===ke&&!hp(e.children)):!0)?t:null}const pa=t=>t?Ip(t)?Qo(t)||t.proxy:pa(t.parent):null,As=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pa(t.parent),$root:t=>pa(t.root),$emit:t=>t.emit,$options:t=>Ic(t),$forceUpdate:t=>t.f||(t.f=()=>wc(t.update)),$nextTick:t=>t.n||(t.n=Ec.bind(t.proxy)),$watch:t=>oy.bind(t)}),xl=(t,e)=>t!==Ie&&!t.__isScriptSetup&&se(t,e),_y={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(xl(i,e))return o[e]=1,i[e];if(s!==Ie&&se(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,r[e];if(n!==Ie&&se(n,e))return o[e]=4,n[e];ga&&(o[e]=0)}}const u=As[e];let h,f;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&se(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return xl(s,e)?(s[e]=n,!0):i!==Ie&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==Ie&&se(t,o)||xl(e,o)||(l=r[0])&&se(l,o)||se(i,o)||se(As,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nh(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ga=!0;function my(t){const e=Ic(t),n=t.proxy,i=t.ctx;ga=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:b,beforeDestroy:A,beforeUnmount:x,destroyed:F,unmounted:P,render:W,renderTracked:ce,renderTriggered:be,errorCaptured:X,serverPrefetch:J,expose:_e,inheritAttrs:Fe,components:et,directives:rt,filters:tn}=e;if(c&&vy(c,i,null),o)for(const oe in o){const ae=o[oe];G(ae)&&(i[oe]=ae.bind(n))}if(s){const oe=s.call(n,n);we(oe)&&(t.data=dr(oe))}if(ga=!0,r)for(const oe in r){const ae=r[oe],nn=G(ae)?ae.bind(n,n):G(ae.get)?ae.get.bind(n,n):Kt,vn=!G(ae)&&G(ae.set)?ae.set.bind(n):Kt,Ut=ze({get:nn,set:vn});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:ot=>Ut.value=ot})}if(l)for(const oe in l)fp(l[oe],i,n,oe);if(a){const oe=G(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ae=>{Xr(ae,oe[ae])})}u&&ih(u,t,"c");function Y(oe,ae){V(ae)?ae.forEach(nn=>oe(nn.bind(n))):ae&&oe(ae.bind(n))}if(Y(uy,h),Y(lp,f),Y(hy,p),Y(fy,_),Y(ly,v),Y(ay,b),Y(gy,X),Y(py,ce),Y(dy,be),Y(ap,x),Y(cp,P),Y(up,J),V(_e))if(_e.length){const oe=t.exposed||(t.exposed={});_e.forEach(ae=>{Object.defineProperty(oe,ae,{get:()=>n[ae],set:nn=>n[ae]=nn})})}else t.exposed||(t.exposed={});W&&t.render===Kt&&(t.render=W),Fe!=null&&(t.inheritAttrs=Fe),et&&(t.components=et),rt&&(t.directives=rt)}function vy(t,e,n=Kt){V(t)&&(t=_a(t));for(const i in t){const s=t[i];let r;we(s)?"default"in s?r=ut(s.from||i,s.default,!0):r=ut(s.from||i):r=ut(s),Se(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ih(t,e,n){Ot(V(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,i){const s=i.includes(".")?sp(n,i):()=>n[i];if(Le(t)){const r=e[t];G(r)&&hn(s,r)}else if(G(t))hn(s,t.bind(n));else if(we(t))if(V(t))t.forEach(r=>fp(r,e,n,i));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&hn(s,r,t)}}function Ic(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>ro(a,c,o,!0)),ro(a,e,o)),we(e)&&r.set(e,a),a}function ro(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ro(t,r,n,!0),s&&s.forEach(o=>ro(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=yy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yy={data:sh,props:rh,emits:rh,methods:Cs,computed:Cs,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Cs,directives:Cs,watch:wy,provide:sh,inject:Ey};function sh(t,e){return e?t?function(){return qe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Ey(t,e){return Cs(_a(t),_a(e))}function _a(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?qe(Object.create(null),t,e):e}function rh(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:qe(Object.create(null),nh(t),nh(e??{})):e}function wy(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const i in e)n[i]=nt(t[i],e[i]);return n}function dp(){return{app:null,config:{isNativeTag:rv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cy=0;function Iy(t,e){return function(i,s=null){G(i)||(i=qe({},i)),s!=null&&!we(s)&&(s=null);const r=dp(),o=new WeakSet;let l=!1;const a=r.app={_uid:Cy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(a,...u)):G(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Re(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Qo(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){js=a;try{return c()}finally{js=null}}};return a}}let js=null;function Xr(t,e){if(xe){let n=xe.provides;const i=xe.parent&&xe.parent.provides;i===n&&(n=xe.provides=Object.create(i)),n[t]=e}}function ut(t,e,n=!1){const i=xe||He;if(i||js){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:js._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&G(e)?e.call(i&&i.proxy):e}}function Ty(){return!!(xe||He||js)}function by(t,e,n,i=!1){const s={},r={};Zr(r,Xo,1),t.propsDefaults=Object.create(null),pp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Vd(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Sy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=re(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qo(t.emitsOptions,f))continue;const p=e[f];if(a)if(se(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=qt(f);s[_]=ma(a,l,_,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{pp(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!se(e,h)&&((u=Ji(h))===h||!se(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ma(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!se(e,h))&&(delete r[h],c=!0)}c&&un(t,"set","$attrs")}function pp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Gr(a))continue;const c=e[a];let u;s&&se(s,u=qt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:qo(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=re(n),c=l||Ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ma(s,a,h,c[h],t,!se(c,h))}}return o}function ma(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=se(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&G(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Bi(s),i=c[n]=a.call(null,e),ri())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Ji(n))&&(i=!0))}return i}function gp(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!G(t)){const u=h=>{a=!0;const[f,p]=gp(h,e,!0);qe(o,f),p&&l.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return we(t)&&i.set(t,Ri),Ri;if(V(r))for(let u=0;u<r.length;u++){const h=qt(r[u]);oh(h)&&(o[h]=Ie)}else if(r)for(const u in r){const h=qt(u);if(oh(h)){const f=r[u],p=o[h]=V(f)||G(f)?{type:f}:qe({},f);if(p){const _=ch(Boolean,p.type),v=ch(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||se(p,"default"))&&l.push(h)}}}const c=[o,l];return we(t)&&i.set(t,c),c}function oh(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ah(t,e){return lh(t)===lh(e)}function ch(t,e){return V(e)?e.findIndex(n=>ah(n,t)):G(e)&&ah(e,t)?0:-1}const _p=t=>t[0]==="_"||t==="$stable",Tc=t=>V(t)?t.map(Ht):[Ht(t)],Ry=(t,e,n)=>{if(e._n)return e;const i=so((...s)=>Tc(e(...s)),n);return i._c=!1,i},mp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(_p(s))continue;const r=t[s];if(G(r))e[s]=Ry(s,r,i);else if(r!=null){const o=Tc(r);e[s]=()=>o}}},vp=(t,e)=>{const n=Tc(e);t.slots.default=()=>n},Ay=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Zr(e,"_",n)):mp(e,t.slots={})}else t.slots={},e&&vp(t,e);Zr(t.slots,Xo,1)},Py=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ie;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(qe(s,e),!n&&l===1&&delete s._):(r=!e.$stable,mp(e,s)),o=e}else e&&(vp(t,e),o={default:1});if(r)for(const l in s)!_p(l)&&o[l]==null&&delete s[l]};function va(t,e,n,i,s=!1){if(V(t)){t.forEach((f,p)=>va(f,e&&(V(e)?e[p]:e),n,i,s));return}if(Rs(i)&&!s)return;const r=i.shapeFlag&4?Qo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Ie?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Le(c)?(u[c]=null,se(h,c)&&(h[c]=null)):Se(c)&&(c.value=null)),G(a))Pn(a,l,12,[o,u]);else{const f=Le(a),p=Se(a);if(f||p){const _=()=>{if(t.f){const v=f?se(h,a)?h[a]:u[a]:a.value;s?V(v)&&ac(v,r):V(v)?v.includes(r)||v.push(r):f?(u[a]=[r],se(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,se(h,a)&&(h[a]=o)):p&&(a.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,lt(_,n)):_()}}}const lt=ry;function Ny(t){return ky(t)}function ky(t,e){const n=ca();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Kt,insertStaticContent:_}=t,v=(d,g,m,y=null,w=null,I=null,M=!1,R=null,N=!!g.dynamicChildren)=>{if(d===g)return;d&&!fs(d,g)&&(y=E(d),ot(d,w,I,!0),d=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:T,ref:B,shapeFlag:U}=g;switch(T){case Yo:b(d,g,m,y);break;case Fn:A(d,g,m,y);break;case Dl:d==null&&x(g,m,y,M);break;case ke:et(d,g,m,y,w,I,M,R,N);break;default:U&1?W(d,g,m,y,w,I,M,R,N):U&6?rt(d,g,m,y,w,I,M,R,N):(U&64||U&128)&&T.process(d,g,m,y,w,I,M,R,N,k)}B!=null&&w&&va(B,d&&d.ref,I,g||d,!g)},b=(d,g,m,y)=>{if(d==null)i(g.el=l(g.children),m,y);else{const w=g.el=d.el;g.children!==d.children&&c(w,g.children)}},A=(d,g,m,y)=>{d==null?i(g.el=a(g.children||""),m,y):g.el=d.el},x=(d,g,m,y)=>{[d.el,d.anchor]=_(d.children,g,m,y,d.el,d.anchor)},F=({el:d,anchor:g},m,y)=>{let w;for(;d&&d!==g;)w=f(d),i(d,m,y),d=w;i(g,m,y)},P=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},W=(d,g,m,y,w,I,M,R,N)=>{M=M||g.type==="svg",d==null?ce(g,m,y,w,I,M,R,N):J(d,g,w,I,M,R,N)},ce=(d,g,m,y,w,I,M,R)=>{let N,T;const{type:B,props:U,shapeFlag:H,transition:q,dirs:ne}=d;if(N=d.el=o(d.type,I,U&&U.is,U),H&8?u(N,d.children):H&16&&X(d.children,N,null,y,w,I&&B!=="foreignObject",M,R),ne&&Wn(d,null,y,"created"),be(N,d,d.scopeId,M,y),U){for(const ge in U)ge!=="value"&&!Gr(ge)&&r(N,ge,null,U[ge],I,d.children,y,w,Ge);"value"in U&&r(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Bt(T,y,d)}ne&&Wn(d,null,y,"beforeMount");const ye=Oy(w,q);ye&&q.beforeEnter(N),i(N,g,m),((T=U&&U.onVnodeMounted)||ye||ne)&&lt(()=>{T&&Bt(T,y,d),ye&&q.enter(N),ne&&Wn(d,null,y,"mounted")},w)},be=(d,g,m,y,w)=>{if(m&&p(d,m),y)for(let I=0;I<y.length;I++)p(d,y[I]);if(w){let I=w.subTree;if(g===I){const M=w.vnode;be(d,M,M.scopeId,M.slotScopeIds,w.parent)}}},X=(d,g,m,y,w,I,M,R,N=0)=>{for(let T=N;T<d.length;T++){const B=d[T]=R?Tn(d[T]):Ht(d[T]);v(null,B,g,m,y,w,I,M,R)}},J=(d,g,m,y,w,I,M)=>{const R=g.el=d.el;let{patchFlag:N,dynamicChildren:T,dirs:B}=g;N|=d.patchFlag&16;const U=d.props||Ie,H=g.props||Ie;let q;m&&zn(m,!1),(q=H.onVnodeBeforeUpdate)&&Bt(q,m,g,d),B&&Wn(g,d,m,"beforeUpdate"),m&&zn(m,!0);const ne=w&&g.type!=="foreignObject";if(T?_e(d.dynamicChildren,T,R,m,y,ne,I):M||ae(d,g,R,null,m,y,ne,I,!1),N>0){if(N&16)Fe(R,g,U,H,m,y,w);else if(N&2&&U.class!==H.class&&r(R,"class",null,H.class,w),N&4&&r(R,"style",U.style,H.style,w),N&8){const ye=g.dynamicProps;for(let ge=0;ge<ye.length;ge++){const Ne=ye[ge],bt=U[Ne],mi=H[Ne];(mi!==bt||Ne==="value")&&r(R,Ne,bt,mi,w,d.children,m,y,Ge)}}N&1&&d.children!==g.children&&u(R,g.children)}else!M&&T==null&&Fe(R,g,U,H,m,y,w);((q=H.onVnodeUpdated)||B)&&lt(()=>{q&&Bt(q,m,g,d),B&&Wn(g,d,m,"updated")},y)},_e=(d,g,m,y,w,I,M)=>{for(let R=0;R<g.length;R++){const N=d[R],T=g[R],B=N.el&&(N.type===ke||!fs(N,T)||N.shapeFlag&70)?h(N.el):m;v(N,T,B,null,y,w,I,M,!0)}},Fe=(d,g,m,y,w,I,M)=>{if(m!==y){if(m!==Ie)for(const R in m)!Gr(R)&&!(R in y)&&r(d,R,m[R],null,M,g.children,w,I,Ge);for(const R in y){if(Gr(R))continue;const N=y[R],T=m[R];N!==T&&R!=="value"&&r(d,R,T,N,M,g.children,w,I,Ge)}"value"in y&&r(d,"value",m.value,y.value)}},et=(d,g,m,y,w,I,M,R,N)=>{const T=g.el=d?d.el:l(""),B=g.anchor=d?d.anchor:l("");let{patchFlag:U,dynamicChildren:H,slotScopeIds:q}=g;q&&(R=R?R.concat(q):q),d==null?(i(T,m,y),i(B,m,y),X(g.children,m,B,w,I,M,R,N)):U>0&&U&64&&H&&d.dynamicChildren?(_e(d.dynamicChildren,H,m,w,I,M,R),(g.key!=null||w&&g===w.subTree)&&yp(d,g,!0)):ae(d,g,m,B,w,I,M,R,N)},rt=(d,g,m,y,w,I,M,R,N)=>{g.slotScopeIds=R,d==null?g.shapeFlag&512?w.ctx.activate(g,m,y,M,N):tn(g,m,y,w,I,M,N):tt(d,g,N)},tn=(d,g,m,y,w,I,M)=>{const R=d.component=Hy(d,y,w);if(rp(d)&&(R.ctx.renderer=k),Vy(R),R.asyncDep){if(w&&w.registerDep(R,Y),!d.el){const N=R.subTree=Re(Fn);A(null,N,g,m)}return}Y(R,d,g,m,w,I,M)},tt=(d,g,m)=>{const y=g.component=d.component;if(Zv(d,g,m))if(y.asyncDep&&!y.asyncResolved){oe(y,g,m);return}else y.next=g,qv(y.update),y.update();else g.el=d.el,y.vnode=g},Y=(d,g,m,y,w,I,M)=>{const R=()=>{if(d.isMounted){let{next:B,bu:U,u:H,parent:q,vnode:ne}=d,ye=B,ge;zn(d,!1),B?(B.el=ne.el,oe(d,B,M)):B=ne,U&&Yr(U),(ge=B.props&&B.props.onVnodeBeforeUpdate)&&Bt(ge,q,B,ne),zn(d,!0);const Ne=kl(d),bt=d.subTree;d.subTree=Ne,v(bt,Ne,h(bt.el),E(bt),d,w,I),B.el=Ne.el,ye===null&&ey(d,Ne.el),H&&lt(H,w),(ge=B.props&&B.props.onVnodeUpdated)&&lt(()=>Bt(ge,q,B,ne),w)}else{let B;const{el:U,props:H}=g,{bm:q,m:ne,parent:ye}=d,ge=Rs(g);if(zn(d,!1),q&&Yr(q),!ge&&(B=H&&H.onVnodeBeforeMount)&&Bt(B,ye,g),zn(d,!0),U&&ue){const Ne=()=>{d.subTree=kl(d),ue(U,d.subTree,d,w,null)};ge?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ne()):Ne()}else{const Ne=d.subTree=kl(d);v(null,Ne,m,y,d,w,I),g.el=Ne.el}if(ne&&lt(ne,w),!ge&&(B=H&&H.onVnodeMounted)){const Ne=g;lt(()=>Bt(B,ye,Ne),w)}(g.shapeFlag&256||ye&&Rs(ye.vnode)&&ye.vnode.shapeFlag&256)&&d.a&&lt(d.a,w),d.isMounted=!0,g=m=y=null}},N=d.effect=new dc(R,()=>wc(T),d.scope),T=d.update=()=>N.run();T.id=d.uid,zn(d,!0),T()},oe=(d,g,m)=>{g.component=d;const y=d.vnode.props;d.vnode=g,d.next=null,Sy(d,g.props,y,m),Py(d,g.children,m),Zi(),Zu(d),es()},ae=(d,g,m,y,w,I,M,R,N=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,U=g.children,{patchFlag:H,shapeFlag:q}=g;if(H>0){if(H&128){vn(T,U,m,y,w,I,M,R,N);return}else if(H&256){nn(T,U,m,y,w,I,M,R,N);return}}q&8?(B&16&&Ge(T,w,I),U!==T&&u(m,U)):B&16?q&16?vn(T,U,m,y,w,I,M,R,N):Ge(T,w,I,!0):(B&8&&u(m,""),q&16&&X(U,m,y,w,I,M,R,N))},nn=(d,g,m,y,w,I,M,R,N)=>{d=d||Ri,g=g||Ri;const T=d.length,B=g.length,U=Math.min(T,B);let H;for(H=0;H<U;H++){const q=g[H]=N?Tn(g[H]):Ht(g[H]);v(d[H],q,m,null,w,I,M,R,N)}T>B?Ge(d,w,I,!0,!1,U):X(g,m,y,w,I,M,R,N,U)},vn=(d,g,m,y,w,I,M,R,N)=>{let T=0;const B=g.length;let U=d.length-1,H=B-1;for(;T<=U&&T<=H;){const q=d[T],ne=g[T]=N?Tn(g[T]):Ht(g[T]);if(fs(q,ne))v(q,ne,m,null,w,I,M,R,N);else break;T++}for(;T<=U&&T<=H;){const q=d[U],ne=g[H]=N?Tn(g[H]):Ht(g[H]);if(fs(q,ne))v(q,ne,m,null,w,I,M,R,N);else break;U--,H--}if(T>U){if(T<=H){const q=H+1,ne=q<B?g[q].el:y;for(;T<=H;)v(null,g[T]=N?Tn(g[T]):Ht(g[T]),m,ne,w,I,M,R,N),T++}}else if(T>H)for(;T<=U;)ot(d[T],w,I,!0),T++;else{const q=T,ne=T,ye=new Map;for(T=ne;T<=H;T++){const pt=g[T]=N?Tn(g[T]):Ht(g[T]);pt.key!=null&&ye.set(pt.key,T)}let ge,Ne=0;const bt=H-ne+1;let mi=!1,Hu=0;const hs=new Array(bt);for(T=0;T<bt;T++)hs[T]=0;for(T=q;T<=U;T++){const pt=d[T];if(Ne>=bt){ot(pt,w,I,!0);continue}let $t;if(pt.key!=null)$t=ye.get(pt.key);else for(ge=ne;ge<=H;ge++)if(hs[ge-ne]===0&&fs(pt,g[ge])){$t=ge;break}$t===void 0?ot(pt,w,I,!0):(hs[$t-ne]=T+1,$t>=Hu?Hu=$t:mi=!0,v(pt,g[$t],m,null,w,I,M,R,N),Ne++)}const Vu=mi?xy(hs):Ri;for(ge=Vu.length-1,T=bt-1;T>=0;T--){const pt=ne+T,$t=g[pt],ju=pt+1<B?g[pt+1].el:y;hs[T]===0?v(null,$t,m,ju,w,I,M,R,N):mi&&(ge<0||T!==Vu[ge]?Ut($t,m,ju,2):ge--)}}},Ut=(d,g,m,y,w=null)=>{const{el:I,type:M,transition:R,children:N,shapeFlag:T}=d;if(T&6){Ut(d.component.subTree,g,m,y);return}if(T&128){d.suspense.move(g,m,y);return}if(T&64){M.move(d,g,m,k);return}if(M===ke){i(I,g,m);for(let U=0;U<N.length;U++)Ut(N[U],g,m,y);i(d.anchor,g,m);return}if(M===Dl){F(d,g,m);return}if(y!==2&&T&1&&R)if(y===0)R.beforeEnter(I),i(I,g,m),lt(()=>R.enter(I),w);else{const{leave:U,delayLeave:H,afterLeave:q}=R,ne=()=>i(I,g,m),ye=()=>{U(I,()=>{ne(),q&&q()})};H?H(I,ne,ye):ye()}else i(I,g,m)},ot=(d,g,m,y=!1,w=!1)=>{const{type:I,props:M,ref:R,children:N,dynamicChildren:T,shapeFlag:B,patchFlag:U,dirs:H}=d;if(R!=null&&va(R,null,m,d,!0),B&256){g.ctx.deactivate(d);return}const q=B&1&&H,ne=!Rs(d);let ye;if(ne&&(ye=M&&M.onVnodeBeforeUnmount)&&Bt(ye,g,d),B&6)Or(d.component,m,y);else{if(B&128){d.suspense.unmount(m,y);return}q&&Wn(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,m,w,k,y):T&&(I!==ke||U>0&&U&64)?Ge(T,g,m,!1,!0):(I===ke&&U&384||!w&&B&16)&&Ge(N,g,m),y&&gi(d)}(ne&&(ye=M&&M.onVnodeUnmounted)||q)&&lt(()=>{ye&&Bt(ye,g,d),q&&Wn(d,null,g,"unmounted")},m)},gi=d=>{const{type:g,el:m,anchor:y,transition:w}=d;if(g===ke){_i(m,y);return}if(g===Dl){P(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:R}=w,N=()=>M(m,I);R?R(d.el,I,N):N()}else I()},_i=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},Or=(d,g,m)=>{const{bum:y,scope:w,update:I,subTree:M,um:R}=d;y&&Yr(y),w.stop(),I&&(I.active=!1,ot(M,d,g,m)),R&&lt(R,g),lt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ge=(d,g,m,y=!1,w=!1,I=0)=>{for(let M=I;M<d.length;M++)ot(d[M],g,m,y,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,g,m)=>{d==null?g._vnode&&ot(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),Zu(),Jd(),g._vnode=d},k={p:v,um:ot,m:Ut,r:gi,mt:tn,mc:X,pc:ae,pbc:_e,n:E,o:t};let $,ue;return e&&([$,ue]=e(k)),{render:L,hydrate:$,createApp:Iy(L,$)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,n=!1){const i=t.children,s=e.children;if(V(i)&&V(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Tn(s[r]),l.el=o.el),n||yp(o,l)),l.type===Yo&&(l.el=o.el)}}function xy(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Dy=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),Ps=[];let At=null;function z(t=!1){Ps.push(At=t?null:[])}function My(){Ps.pop(),At=Ps[Ps.length-1]||null}let Ws=1;function uh(t){Ws+=t}function Ep(t){return t.dynamicChildren=Ws>0?At||Ri:null,My(),Ws>0&&At&&At.push(t),t}function Q(t,e,n,i,s,r){return Ep(C(t,e,n,i,s,r,!0))}function Jn(t,e,n,i,s){return Ep(Re(t,e,n,i,s,!0))}function oo(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Xo="__vInternal",wp=({key:t})=>t??null,Qr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Se(t)||G(t)?{i:He,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,i=0,s=null,r=t===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wp(e),ref:e&&Qr(e),scopeId:tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return l?(bc(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Le(n)?8:16),Ws>0&&!o&&At&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&At.push(a),a}const Re=Ly;function Ly(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ny)&&(t=Fn),oo(t)){const l=$i(t,e,!0);return n&&bc(l,n),Ws>0&&!r&&At&&(l.shapeFlag&6?At[At.indexOf(t)]=l:At.push(l)),l.patchFlag|=-2,l}if(qy(t)&&(t=t.__vccOpts),e){e=Fy(e);let{class:l,style:a}=e;l&&!Le(l)&&(e.class=Mn(l)),we(a)&&(Wd(a)&&!V(a)&&(a=qe({},a)),e.style=jo(a))}const o=Le(t)?1:sy(t)?128:Dy(t)?64:we(t)?4:G(t)?2:0;return C(t,e,n,i,s,o,r,!0)}function Fy(t){return t?Wd(t)||Xo in t?qe({},t):t:null}function $i(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Uy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&wp(l),ref:e&&e.ref?n&&s?V(s)?s.concat(Qr(e)):[s,Qr(e)]:Qr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$i(t.ssContent),ssFallback:t.ssFallback&&$i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Et(t=" ",e=0){return Re(Yo,null,t,e)}function Oe(t="",e=!1){return e?(z(),Jn(Fn,null,t)):Re(Fn,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Re(Fn):V(t)?Re(ke,null,t.slice()):typeof t=="object"?Tn(t):Re(Yo,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$i(t)}function bc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),bc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xo in e)?e._ctx=He:s===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:He},n=32):(e=String(e),i&64?(n=16,e=[Et(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Mn([e.class,i.class]));else if(s==="style")e.style=jo([e.style,i.style]);else if(Bo(s)){const r=e[s],o=i[s];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Bt(t,e,n,i=null){Ot(t,e,7,[n,i])}const $y=dp();let By=0;function Hy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||$y,r={uid:By++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(i,s),emitsOptions:ep(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xv.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const Cp=()=>xe||He;let Sc,vi,hh="__VUE_INSTANCE_SETTERS__";(vi=ca()[hh])||(vi=ca()[hh]=[]),vi.push(t=>xe=t),Sc=t=>{vi.length>1?vi.forEach(e=>e(t)):vi[0](t)};const Bi=t=>{Sc(t),t.scope.on()},ri=()=>{xe&&xe.scope.off(),Sc(null)};function Ip(t){return t.vnode.shapeFlag&4}let zs=!1;function Vy(t,e=!1){zs=e;const{props:n,children:i}=t.vnode,s=Ip(t);by(t,n,s,e),Ay(t,i);const r=s?jy(t,e):void 0;return zs=!1,r}function jy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zo(new Proxy(t.ctx,_y));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?zy(t):null;Bi(t),Zi();const r=Pn(i,t,0,[t.props,s]);if(es(),ri(),Td(r)){if(r.then(ri,ri),e)return r.then(o=>{fh(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=r}else fh(t,r,e)}else Tp(t,e)}function fh(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Yd(e)),Tp(t,n)}let dh;function Tp(t,e,n){const i=t.type;if(!t.render){if(!e&&dh&&!i.render){const s=i.template||Ic(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=qe(qe({isCustomElement:r,delimiters:l},o),a);i.render=dh(s,c)}}t.render=i.render||Kt}{Bi(t),Zi();try{my(t)}finally{es(),ri()}}}function Wy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}}))}function zy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Wy(t)},slots:t.slots,emit:t.emit,expose:e}}function Qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yd(zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in As)return As[n](t)},has(e,n){return n in e||n in As}}))}function Ky(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function qy(t){return G(t)&&"__vccOpts"in t}const ze=(t,e)=>Wv(t,e,zs);function bp(t,e,n){const i=arguments.length;return i===2?we(e)&&!V(e)?oo(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&oo(n)&&(n=[n]),Re(t,e,n))}const Gy=Symbol.for("v-scx"),Yy=()=>ut(Gy),Xy="3.3.11",Qy="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,ph=Xn&&Xn.createElement("template"),Jy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Xn.createElementNS(Qy,t):Xn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ph.innerHTML=i?`<svg>${t}</svg>`:t;const l=ph.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zy=Symbol("_vtc");function eE(t,e,n){const i=t[Zy];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tE=Symbol("_vod");function nE(t,e,n){const i=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const r in e)n[r]==null&&ya(i,r,"");for(const r in n)ya(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),tE in t&&(i.display=r)}}const gh=/\s*!important$/;function ya(t,e,n){if(V(n))n.forEach(i=>ya(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=iE(t,e);gh.test(n)?t.setProperty(Ji(i),n.replace(gh,""),"important"):t[i]=n}}const _h=["Webkit","Moz","ms"],Ml={};function iE(t,e){const n=Ml[e];if(n)return n;let i=qt(e);if(i!=="filter"&&i in t)return Ml[e]=i;i=Vo(i);for(let s=0;s<_h.length;s++){const r=_h[s]+i;if(r in t)return Ml[e]=r}return e}const mh="http://www.w3.org/1999/xlink";function sE(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mh,e.slice(6,e.length)):t.setAttributeNS(mh,e,n);else{const r=gv(e);n==null||r&&!Rd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function rE(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function on(t,e,n,i){t.addEventListener(e,n,i)}function oE(t,e,n,i){t.removeEventListener(e,n,i)}const vh=Symbol("_vei");function lE(t,e,n,i,s=null){const r=t[vh]||(t[vh]={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=aE(e);if(i){const c=r[e]=hE(i,s);on(t,l,c,a)}else o&&(oE(t,l,o,a),r[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function aE(t){let e;if(yh.test(t)){e={};let i;for(;i=t.match(yh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ji(t.slice(2)),e]}let Ll=0;const cE=Promise.resolve(),uE=()=>Ll||(cE.then(()=>Ll=0),Ll=Date.now());function hE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ot(fE(i,n.value),e,5,[i])};return n.value=t,n.attached=uE(),n}function fE(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Eh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dE=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?eE(t,i,s):e==="style"?nE(t,n,i):Bo(e)?lc(e)||lE(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pE(t,e,i,s))?rE(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),sE(t,e,i,s))};function pE(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eh(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eh(e)&&Le(n)?!1:e in t}const Un=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Yr(e,n):e};function gE(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const It=Symbol("_assign"),En={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[It]=Un(s);const r=i||s.props&&s.props.type==="number";on(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=eo(l)),t[It](l)}),n&&on(t,"change",()=>{t.value=t.value.trim()}),e||(on(t,"compositionstart",gE),on(t,"compositionend",wh),on(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[It]=Un(r),t.composing)return;const o=s||t.type==="number"?eo(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===l)||(t.value=l))}},_E={deep:!0,created(t,e,n){t[It]=Un(n),on(t,"change",()=>{const i=t._modelValue,s=Hi(t),r=t.checked,o=t[It];if(V(i)){const l=uc(i,s),a=l!==-1;if(r&&!a)o(i.concat(s));else if(!r&&a){const c=[...i];c.splice(l,1),o(c)}}else if(Qi(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(Sp(t,r))})},mounted:Ch,beforeUpdate(t,e,n){t[It]=Un(n),Ch(t,e,n)}};function Ch(t,{value:e,oldValue:n},i){t._modelValue=e,V(e)?t.checked=uc(e,i.props.value)>-1:Qi(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=ci(e,Sp(t,!0)))}const yi={created(t,{value:e},n){t.checked=ci(e,n.props.value),t[It]=Un(n),on(t,"change",()=>{t[It](Hi(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[It]=Un(i),e!==n&&(t.checked=ci(e,i.props.value))}},mE={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Qi(e);on(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?eo(Hi(o)):Hi(o));t[It](t.multiple?s?new Set(r):r:r[0])}),t[It]=Un(i)},mounted(t,{value:e}){Ih(t,e)},beforeUpdate(t,e,n){t[It]=Un(n)},updated(t,{value:e}){Ih(t,e)}};function Ih(t,e){const n=t.multiple;if(!(n&&!V(e)&&!Qi(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=Hi(r);if(n)V(e)?r.selected=uc(e,o)>-1:r.selected=e.has(o);else if(ci(Hi(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Hi(t){return"_value"in t?t._value:t.value}function Sp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vE=["ctrl","shift","alt","meta"],yE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vE.some(n=>t[`${n}Key`]&&!e.includes(n))},EE=(t,e)=>t._withMods||(t._withMods=(n,...i)=>{for(let s=0;s<e.length;s++){const r=yE[e[s]];if(r&&r(n,e))return}return t(n,...i)}),wE=qe({patchProp:dE},Jy);let Th;function CE(){return Th||(Th=Ny(wE))}const IE=(...t)=>{const e=CE().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=TE(i);if(!s)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function TE(t){return Le(t)?document.querySelector(t):t}var bE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rp;const Jo=t=>Rp=t,Ap=Symbol();function Ea(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ns;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ns||(Ns={}));function SE(){const t=Nd(!0),e=t.run(()=>me({}));let n=[],i=[];const s=zo({install(r){Jo(s),s._a=r,r.provide(Ap,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!bE?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Pp=()=>{};function bh(t,e,n,i=Pp){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&hc()&&kd(s),s}function Ei(t,...e){t.slice().forEach(n=>{n(...e)})}const RE=t=>t();function wa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Ea(s)&&Ea(i)&&t.hasOwnProperty(n)&&!Se(i)&&!An(i)?t[n]=wa(s,i):t[n]=i}return t}const AE=Symbol();function PE(t){return!Ea(t)||!t.hasOwnProperty(AE)}const{assign:In}=Object;function NE(t){return!!(Se(t)&&t.effect)}function kE(t,e,n,i){const{state:s,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=s?s():{});const u=vc(n.state.value[t]);return In(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=zo(ze(()=>{Jo(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return a=Np(t,c,e,n,i,!0),a}function Np(t,e,n={},i,s,r){let o;const l=In({actions:{}},n),a={deep:!0};let c,u,h=[],f=[],p;const _=i.state.value[t];!r&&!_&&(i.state.value[t]={}),me({});let v;function b(X){let J;c=u=!1,typeof X=="function"?(X(i.state.value[t]),J={type:Ns.patchFunction,storeId:t,events:p}):(wa(i.state.value[t],X),J={type:Ns.patchObject,payload:X,storeId:t,events:p});const _e=v=Symbol();Ec().then(()=>{v===_e&&(c=!0)}),u=!0,Ei(h,J,i.state.value[t])}const A=r?function(){const{state:J}=n,_e=J?J():{};this.$patch(Fe=>{In(Fe,_e)})}:Pp;function x(){o.stop(),h=[],f=[],i._s.delete(t)}function F(X,J){return function(){Jo(i);const _e=Array.from(arguments),Fe=[],et=[];function rt(Y){Fe.push(Y)}function tn(Y){et.push(Y)}Ei(f,{args:_e,name:X,store:W,after:rt,onError:tn});let tt;try{tt=J.apply(this&&this.$id===t?this:W,_e)}catch(Y){throw Ei(et,Y),Y}return tt instanceof Promise?tt.then(Y=>(Ei(Fe,Y),Y)).catch(Y=>(Ei(et,Y),Promise.reject(Y))):(Ei(Fe,tt),tt)}}const P={_p:i,$id:t,$onAction:bh.bind(null,f),$patch:b,$reset:A,$subscribe(X,J={}){const _e=bh(h,X,J.detached,()=>Fe()),Fe=o.run(()=>hn(()=>i.state.value[t],et=>{(J.flush==="sync"?u:c)&&X({storeId:t,type:Ns.direct,events:p},et)},In({},a,J)));return _e},$dispose:x},W=dr(P);i._s.set(t,W);const be=(i._a&&i._a.runWithContext||RE)(()=>i._e.run(()=>(o=Nd()).run(e)));for(const X in be){const J=be[X];if(Se(J)&&!NE(J)||An(J))r||(_&&PE(J)&&(Se(J)?J.value=_[X]:wa(J,_[X])),i.state.value[t][X]=J);else if(typeof J=="function"){const _e=F(X,J);be[X]=_e,l.actions[X]=J}}return In(W,be),In(re(W),be),Object.defineProperty(W,"$state",{get:()=>i.state.value[t],set:X=>{b(J=>{In(J,X)})}}),i._p.forEach(X=>{In(W,o.run(()=>X({store:W,app:i._a,pinia:i,options:l})))}),_&&r&&n.hydrate&&n.hydrate(W.$state,_),c=!0,u=!0,W}function OE(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(l,a){const c=Ty();return l=l||(c?ut(Ap,null):null),l&&Jo(l),l=Rp,l._s.has(i)||(r?Np(i,e,s,l):kE(i,s,l)),l._s.get(i)}return o.$id=i,o}(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.vue3-marquee{display:flex!important;position:relative}.vue3-marquee.horizontal{overflow-x:hidden!important;flex-direction:row!important;width:100%;height:max-content}.vue3-marquee.vertical{overflow-y:hidden!important;flex-direction:column!important;height:100%;width:max-content}.vue3-marquee:hover>.marquee{animation-play-state:var(--pauseOnHover)}.vue3-marquee:active>.marquee{animation-play-state:var(--pauseOnClick)}.vue3-marquee>.marquee{flex:0 0 auto;min-width:var(--min-width);min-height:var(--min-height);z-index:1;animation:var(--orientation) var(--duration) linear var(--delay) var(--loops);animation-play-state:var(--pauseAnimation);animation-direction:var(--direction)}.vue3-marquee.horizontal>.marquee{display:flex;flex-direction:row;align-items:center}.vue3-marquee.vertical>.marquee{display:flex;flex-direction:column;align-items:center}@keyframes scrollX{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes scrollY{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.vue3-marquee>.overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.transparent-overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.overlay:before,.vue3-marquee>.overlay:after{content:"";position:absolute;z-index:2}.vue3-marquee.horizontal>.overlay:before,.vue3-marquee.horizontal>.overlay:after{background:linear-gradient(to right,var(--gradient-color));height:100%;width:var(--gradient-length)}.vue3-marquee.vertical>.overlay:before,.vue3-marquee.vertical>.overlay:after{background:linear-gradient(to bottom,var(--gradient-color));height:var(--gradient-length);width:100%}.vue3-marquee.horizontal>.overlay:after{transform:rotate(180deg)}.vue3-marquee.vertical>.overlay:after{transform:rotate(-180deg)}.vue3-marquee>.overlay:before{left:0;top:0}.vue3-marquee.horizontal>.overlay:after{right:0;top:0}.vue3-marquee.vertical>.overlay:after{left:0;bottom:0}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var xE=Object.defineProperty,Sh=Object.getOwnPropertySymbols,DE=Object.prototype.hasOwnProperty,ME=Object.prototype.propertyIsEnumerable,Rh=(t,e,n)=>e in t?xE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ah=(t,e)=>{for(var n in e||(e={}))DE.call(e,n)&&Rh(t,n,e[n]);if(Sh)for(var n of Sh(e))ME.call(e,n)&&Rh(t,n,e[n]);return t},LE=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const FE=Cc({props:{vertical:{type:Boolean,default:!1},direction:{type:String,default:"normal"},duration:{type:Number,default:20},delay:{type:Number,default:0},loop:{type:Number,default:0},clone:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},gradientColor:{type:Array,default:[255,255,255]},gradientWidth:{type:String},gradientLength:{type:String},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},pause:{type:Boolean,default:!1},animateOnOverflowOnly:{type:Boolean,default:!1}},emits:["onComplete","onLoopComplete","onPause","onResume","onOverflowDetected","onOverflowCleared"],setup(t,{emit:e}){const n=me(0),i=me("100%"),s=me("100%"),r=me(0),o=me(!1),l=me(!1),a=me(0),c=me(0),u=me(0),h=me(0),f=me(!1),p=me(!1),_=me(0),v=me(null),b=me("200px"),A=me(!1),x=me(null),F=me(null),P=async()=>{await W(),r.value++},W=async()=>{t.vertical&&(o.value=!0),setInterval(()=>{if(i.value="0%",s.value="0%",x.value!==null&&F.value!==null&&x.value&&F.value)if(t.vertical&&"clientHeight"in x.value&&"clientHeight"in F.value){h.value=x.value.clientHeight,u.value=F.value.clientHeight;const Y=Math.ceil(u.value/h.value);return n.value=isFinite(Y)?Y:0,o.value=!1,n.value}else if(!t.vertical&&"clientWidth"in x.value&&"clientWidth"in F.value){if(c.value=x.value.clientWidth,a.value=F.value.clientWidth,t.animateOnOverflowOnly)return c.value<a.value?(l.value=!0,e("onOverflowDetected")):(l.value=!1,e("onOverflowCleared")),0;const Y=Math.ceil(a.value/c.value);return n.value=isFinite(Y)?Y:0,n.value}else return i.value="100%",s.value="100%",0;else return i.value="100%",s.value="100%",0},100)};hn(c,async()=>{t.clone&&P()}),hn(a,async()=>{(t.clone||t.animateOnOverflowOnly)&&P()}),hn(()=>t.pause,(Y,oe)=>{Y!==oe&&e(Y?"onResume":"onPause")});const ce=()=>{t.pauseOnHover&&(e("onPause"),f.value=!0)},be=()=>{t.pauseOnHover&&(e("onResume"),f.value=!1)},X=()=>{t.pauseOnClick&&(e("onPause"),p.value=!0)},J=()=>{t.pauseOnClick&&(e("onResume"),p.value=!1)},_e=ze(()=>t.pause||t.vertical&&o.value||t.animateOnOverflowOnly&&l.value?"paused":"running"),Fe=ze(()=>t.pauseOnHover&&(f.value||p.value)||!t.pauseOnHover&&_e.value==="paused"?"paused":"running"),et=ze(()=>t.pauseOnHover&&f.value||t.pauseOnClick&&p.value||!t.pauseOnHover&&_e.value==="paused"?"paused":"running"),rt=ze(()=>{const Y={"--duration":`${t.duration}s`,"--delay":`${t.delay}s`,"--direction":`${t.direction}`,"--pauseOnHover":`${Fe.value}`,"--pauseOnClick":`${et.value}`,"--pauseAnimation":`${_e.value}`,"--loops":`${t.loop===0?"infinite":t.loop}`,"--gradient-color":`rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 1), rgba(${t.gradientColor[0]}, ${t.gradientColor[1]}, ${t.gradientColor[2]}, 0)`,"--gradient-length":`${b.value}`,"--min-width":`${i.value}`,"--min-height":`${s.value}`},oe={"--orientation":"scrollX",orientation:"horizontal"};return t.vertical&&(oe["--orientation"]="scrollY"),Ah(Ah({},Y),oe)}),tn=ze(()=>!!t.gradient),tt=async()=>{t.vertical?(s.value="100%",i.value="auto",t.animateOnOverflowOnly&&console.warn("The `animateOnOverflowOnly` prop is not supported for vertical marquees.")):(s.value="auto",t.animateOnOverflowOnly?i.value="auto":i.value="100%"),t.gradient&&(t.gradientWidth?(console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."),b.value=t.gradientWidth):t.gradientLength&&(b.value=t.gradientLength)),(t.clone||t.animateOnOverflowOnly)&&(await W(),P()),A.value=!0};return lp(async()=>{tt(),v.value=setInterval(()=>{_.value++,t.loop!==0&&_.value===t.loop&&(e("onComplete"),clearInterval(v.value)),e("onLoopComplete")},t.duration*1e3)}),ap(()=>{clearInterval(v.value)}),{ready:A,contentWidth:c,containerWidth:a,contentHeight:h,containerHeight:u,loopCounter:_,loopInterval:v,mouseOverMarquee:f,mouseDownMarquee:p,minWidth:i,minHeight:s,animateOnOverflowPause:l,marqueeContent:x,marqueeOverlayContainer:F,componentKey:r,showGradient:tn,cloneAmount:n,ForcesUpdate:P,checkForClone:W,setupMarquee:tt,getCurrentStyle:rt,hoverStarted:ce,hoverEnded:be,mouseDown:X,mouseUp:J}}}),UE={class:"transparent-overlay",ref:"marqueeOverlayContainer","aria-hidden":!0},$E={class:"marquee",ref:"marqueeContent"},BE={key:1,"aria-hidden":!0,class:"marquee"};function HE(t,e,n,i,s,r){return t.ready?(z(),Q("div",{class:Mn(["vue3-marquee",{vertical:t.vertical,horizontal:!t.vertical}]),style:jo(t.getCurrentStyle),key:t.componentKey,onMouseenter:e[0]||(e[0]=(...o)=>t.hoverStarted&&t.hoverStarted(...o)),onMouseleave:e[1]||(e[1]=(...o)=>t.hoverEnded&&t.hoverEnded(...o)),onMousedown:e[2]||(e[2]=(...o)=>t.mouseDown&&t.mouseDown(...o)),onMouseup:e[3]||(e[3]=(...o)=>t.mouseUp&&t.mouseUp(...o))},[C("div",UE,null,512),t.showGradient?(z(),Q("div",{key:0,"aria-hidden":!0,class:Mn(["overlay",{vertical:t.vertical,horizontal:!t.vertical}])},null,2)):Oe("",!0),C("div",$E,[Ol(t.$slots,"default")],512),!t.animateOnOverflowOnly||t.animateOnOverflowOnly&&!t.animateOnOverflowPause?(z(),Q("div",BE,[Ol(t.$slots,"default")])):Oe("",!0),(z(!0),Q(ke,null,Ui(t.cloneAmount,o=>(z(),Q("div",{"aria-hidden":!0,class:"marquee cloned",key:o},[Ol(t.$slots,"default")]))),128))],38)):Oe("",!0)}var VE=LE(FE,[["render",HE]]),jE={install(t,e){var n;const i=(n=e==null?void 0:e.name)!=null?n:"Vue3Marquee";t.component(i,VE)}};function WE(t){return typeof t=="object"&&t!==null}function Ph(t,e){return t=WE(t)?t:Object.create(null),new Proxy(t,{get(n,i,s){return i==="key"?Reflect.get(n,i,s):Reflect.get(n,i,s)||Reflect.get(e,i,s)}})}function zE(t,e){return e.reduce((n,i)=>n==null?void 0:n[i],t)}function KE(t,e,n){return e.slice(0,-1).reduce((i,s)=>/^(__proto__)$/.test(s)?{}:i[s]=i[s]||{},t)[e[e.length-1]]=n,t}function qE(t,e){return e.reduce((n,i)=>{const s=i.split(".");return KE(n,s,zE(t,s))},{})}function GE(t,e){return n=>{var i;try{const{storage:s=localStorage,beforeRestore:r=void 0,afterRestore:o=void 0,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:a=e.$id,paths:c=null,debug:u=!1}=n;return{storage:s,beforeRestore:r,afterRestore:o,serializer:l,key:((i=t.key)!=null?i:h=>h)(typeof a=="string"?a:a(e.$id)),paths:c,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function Nh(t,{storage:e,serializer:n,key:i,debug:s}){try{const r=e==null?void 0:e.getItem(i);r&&t.$patch(n==null?void 0:n.deserialize(r))}catch(r){s&&console.error("[pinia-plugin-persistedstate]",r)}}function kh(t,{storage:e,serializer:n,key:i,paths:s,debug:r}){try{const o=Array.isArray(s)?qE(t,s):t;e.setItem(i,n.serialize(o))}catch(o){r&&console.error("[pinia-plugin-persistedstate]",o)}}function YE(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:i=n},store:s,pinia:r}=e;if(!i)return;if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const o=(Array.isArray(i)?i.map(l=>Ph(l,t)):[Ph(i,t)]).map(GE(t,s)).filter(Boolean);s.$persist=()=>{o.forEach(l=>{kh(s.$state,l)})},s.$hydrate=({runHooks:l=!0}={})=>{o.forEach(a=>{const{beforeRestore:c,afterRestore:u}=a;l&&(c==null||c(e)),Nh(s,a),l&&(u==null||u(e))})},o.forEach(l=>{const{beforeRestore:a,afterRestore:c}=l;a==null||a(e),Nh(s,l),c==null||c(e),s.$subscribe((u,h)=>{kh(h,l)},{detached:!0})})}}var XE=YE(),Oh={};/**
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
 */const kp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+kp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Op=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QE=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(f=64)),i.push(n[u],n[h],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw new JE;const f=r<<2|l>>4;if(i.push(f),c!==64){const p=l<<4&240|c>>2;if(i.push(p),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xp=function(t){const e=Op(t);return Zo.encodeByteArray(e,!0)},lo=function(t){return xp(t).replace(/\./g,"")},ao=function(t){try{return Zo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZE(t){return Dp(void 0,t)}function Dp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ew(n)||(t[n]=Dp(t[n],e[n]));return t}function ew(t){return t!=="__proto__"}/**
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
 */function tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nw=()=>tw().__FIREBASE_DEFAULTS__,iw=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ao(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return nw()||iw()||sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rw=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ow=t=>{const e=rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Mp=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},lw=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),""].join(".")}/**
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
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fp(){return kp.NODE_ADMIN===!0}function Up(){try{return typeof indexedDB=="object"}catch{return!1}}function uw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const hw="FirebaseError";class _n extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=hw,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?fw(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new _n(s,l,i)}}function fw(t,e){return t.replace(dw,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const dw=/\{\$([^}]+)}/g;/**
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
 */function Ks(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
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
 */const $p=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Ks(ao(r[0])||""),n=Ks(ao(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},pw=function(t){const e=$p(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gw=function(t){const e=$p(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ji(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function co(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ca(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Dh(r)&&Dh(o)){if(!Ca(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
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
 */function Pc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class _w{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function mw(t,e){const n=new vw(t,e);return n.subscribe.bind(n)}class vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}function Nc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ew=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},el=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iw(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cw(t){return t===Kn?void 0:t}function Iw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const bw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Sw=he.INFO,Rw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Aw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Rw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=Sw,this._logHandler=Aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Pw=(t,e)=>e.some(n=>t instanceof n);let Mh,Lh;function Nw(){return Mh||(Mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kw(){return Lh||(Lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Ia=new WeakMap,Hp=new WeakMap,Ul=new WeakMap,kc=new WeakMap;function Ow(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),kc.set(e,t),e}function xw(t){if(Ia.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ia.set(t,e)}let Ta={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dw(t){Ta=t(Ta)}function Mw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($l(this),e,...n);return Hp.set(i,e.sort?e.sort():[e]),Nn(i)}:kw().includes(t)?function(...e){return t.apply($l(this),e),Nn(Bp.get(this))}:function(...e){return Nn(t.apply($l(this),e))}}function Lw(t){return typeof t=="function"?Mw(t):(t instanceof IDBTransaction&&xw(t),Pw(t,Nw())?new Proxy(t,Ta):t)}function Nn(t){if(t instanceof IDBRequest)return Ow(t);if(Ul.has(t))return Ul.get(t);const e=Lw(t);return e!==t&&(Ul.set(t,e),kc.set(e,t)),e}const $l=t=>kc.get(t);function Fw(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Nn(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Uw=["get","getKey","getAll","getAllKeys","count"],$w=["put","add","delete","clear"],Bl=new Map;function Fh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=$w.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Uw.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Bl.set(e,r),r}Dw(t=>({...t,get:(e,n,i)=>Fh(e,n)||t.get(e,n,i),has:(e,n)=>!!Fh(e,n)||t.has(e,n)}));/**
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
 */class Bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Hw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",Uh="0.9.27";/**
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
 */const ui=new pr("@firebase/app"),Vw="@firebase/app-compat",jw="@firebase/analytics-compat",Ww="@firebase/analytics",zw="@firebase/app-check-compat",Kw="@firebase/app-check",qw="@firebase/auth",Gw="@firebase/auth-compat",Yw="@firebase/database",Xw="@firebase/database-compat",Qw="@firebase/functions",Jw="@firebase/functions-compat",Zw="@firebase/installations",eC="@firebase/installations-compat",tC="@firebase/messaging",nC="@firebase/messaging-compat",iC="@firebase/performance",sC="@firebase/performance-compat",rC="@firebase/remote-config",oC="@firebase/remote-config-compat",lC="@firebase/storage",aC="@firebase/storage-compat",cC="@firebase/firestore",uC="@firebase/firestore-compat",hC="firebase",fC="10.8.0";/**
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
 */const Sa="[DEFAULT]",dC={[ba]:"fire-core",[Vw]:"fire-core-compat",[Ww]:"fire-analytics",[jw]:"fire-analytics-compat",[Kw]:"fire-app-check",[zw]:"fire-app-check-compat",[qw]:"fire-auth",[Gw]:"fire-auth-compat",[Yw]:"fire-rtdb",[Xw]:"fire-rtdb-compat",[Qw]:"fire-fn",[Jw]:"fire-fn-compat",[Zw]:"fire-iid",[eC]:"fire-iid-compat",[tC]:"fire-fcm",[nC]:"fire-fcm-compat",[iC]:"fire-perf",[sC]:"fire-perf-compat",[rC]:"fire-rc",[oC]:"fire-rc-compat",[lC]:"fire-gcs",[aC]:"fire-gcs-compat",[cC]:"fire-fst",[uC]:"fire-fst-compat","fire-js":"fire-js",[hC]:"fire-js-all"};/**
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
 */const uo=new Map,Ra=new Map;function pC(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Ra.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,t);for(const n of uo.values())pC(n,t);return!0}function gC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _C={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new ns("app","Firebase",_C);/**
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
 */class mC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const is=fC;function Vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});if(n||(n=Mp()),!n)throw kn.create("no-options");const r=uo.get(s);if(r){if(Ca(n,r.options)&&Ca(i,r.config))return r;throw kn.create("duplicate-app",{appName:s})}const o=new Tw(s);for(const a of Ra.values())o.addComponent(a);const l=new mC(n,i,o);return uo.set(s,l),l}function jp(t=Sa){const e=uo.get(t);if(!e&&t===Sa&&Mp())return Vp();if(!e)throw kn.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=(i=dC[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(l.join(" "));return}Yt(new Dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vC="firebase-heartbeat-database",yC=1,qs="firebase-heartbeat-store";let Hl=null;function Wp(){return Hl||(Hl=Fw(vC,yC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qs)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function EC(t){try{const n=(await Wp()).transaction(qs),i=await n.objectStore(qs).get(zp(t));return await n.done,i}catch(e){if(e instanceof _n)ui.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function $h(t,e){try{const i=(await Wp()).transaction(qs,"readwrite");await i.objectStore(qs).put(e,zp(t)),await i.done}catch(n){if(n instanceof _n)ui.warn(n.message);else{const i=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(i.message)}}}function zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wC=1024,CC=30*24*60*60*1e3;class IC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bh(),{heartbeatsToSend:i,unsentEntries:s}=TC(this._heartbeatsCache.heartbeats),r=lo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Bh(){return new Date().toISOString().substring(0,10)}function TC(t,e=wC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Hh(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hh(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class bC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Up()?uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SC(t){Yt(new Dt("platform-logger",e=>new Bw(e),"PRIVATE")),Yt(new Dt("heartbeat",e=>new IC(e),"PRIVATE")),yt(ba,Uh,t),yt(ba,Uh,"esm2017"),yt("fire-js","")}SC("");function Kp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function qp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RC=qp,Gp=new ns("auth","Firebase",qp());/**
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
 */const ho=new pr("@firebase/auth");function AC(t,...e){ho.logLevel<=he.WARN&&ho.warn(`Auth (${is}): ${t}`,...e)}function Jr(t,...e){ho.logLevel<=he.ERROR&&ho.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function Vh(t,...e){throw Oc(t,...e)}function Yp(t,...e){return Oc(t,...e)}function PC(t,e,n){const i=Object.assign(Object.assign({},RC()),{[e]:n});return new ns("auth","Firebase",i).create(e,{appName:t.name})}function Oc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Gp.create(t,...e)}function de(t,e,...n){if(!t)throw Oc(e,...n)}function ks(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jr(e),new Error(e)}function fo(t,e){t||ks(e)}function NC(){return jh()==="http:"||jh()==="https:"}function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NC()||cw()||"connection"in navigator)?navigator.onLine:!0}function OC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,fo(n>e,"Short delay should be less than long delay!"),this.isMobile=Ac()||Lp()}get(){return kC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xC(t,e){fo(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MC=new gr(3e4,6e4);function Qp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tl(t,e,n,i,s={}){return Jp(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Pc(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Xp.fetch()(Zp(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Jp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},DC),e);try{const s=new LC(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $r(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw $r(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw $r(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw PC(t,u,c);Vh(t,u)}}catch(s){if(s instanceof _n)throw s;Vh(t,"network-request-failed",{message:String(s)})}}function Zp(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?xC(t.config,s):`${t.config.apiScheme}://${s}`}class LC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Yp(this.auth,"network-request-failed")),MC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $r(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Yp(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function FC(t,e){return tl(t,"POST","/v1/accounts:delete",e)}async function UC(t,e){return tl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $C(t,e=!1){const n=Ft(t),i=await n.getIdToken(e),s=eg(i);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Os(Vl(s.auth_time)),issuedAtTime:Os(Vl(s.iat)),expirationTime:Os(Vl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Vl(t){return Number(t)*1e3}function eg(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ao(n);return s?JSON.parse(s):(Jr("Failed to decode base64 JWT payload"),null)}catch(s){return Jr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function BC(t){const e=eg(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof _n&&HC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function HC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Aa(t,UC(n,{idToken:i}));de(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zC(r.providerUserInfo):[],l=WC(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new tg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jC(t){const e=Ft(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zC(t){return t.map(e=>{var{providerId:n}=e,i=Kp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function KC(t,e){const n=await Jp(t,{},async()=>{const i=Pc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Zp(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xp.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qC(t,e){return tl(t,"POST","/v2/accounts:revokeToken",Qp(t,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await KC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Gs;return i&&(de(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(de(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return ks("not implemented")}}/**
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
 */function wn(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ni{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $C(this,e)}reload(){return jC(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Aa(this,FC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:P,isAnonymous:W,providerData:ce,stsTokenManager:be}=n;de(F&&be,e,"internal-error");const X=Gs.fromJSON(this.name,be);de(typeof F=="string",e,"internal-error"),wn(h,e.name),wn(f,e.name),de(typeof P=="boolean",e,"internal-error"),de(typeof W=="boolean",e,"internal-error"),wn(p,e.name),wn(_,e.name),wn(v,e.name),wn(b,e.name),wn(A,e.name),wn(x,e.name);const J=new Ni({uid:F,auth:e,email:f,emailVerified:P,displayName:h,isAnonymous:W,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:X,createdAt:A,lastLoginAt:x});return ce&&Array.isArray(ce)&&(J.providerData=ce.map(_e=>Object.assign({},_e))),b&&(J._redirectEventId=b),J}static async _fromIdTokenResponse(e,n,i=!1){const s=new Gs;s.updateFromServerResponse(n);const r=new Ni({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await po(r),r}}/**
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
 */const Wh=new Map;function Zn(t){fo(t instanceof Function,"Expected a class definition");let e=Wh.get(t);return e?(fo(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wh.set(t,e),e)}/**
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
 */class ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ng.type="NONE";const zh=ng;/**
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
 */function jl(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=jl(this.userKey,s.apiKey,r),this.fullPersistenceKey=jl("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ki(Zn(zh),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Zn(zh);const o=jl(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ni._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new ki(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ki(r,e,i))}}/**
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
 */function Kh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZC(e))return"Blackberry";if(e0(e))return"Webos";if(YC(e))return"Safari";if((e.includes("chrome/")||XC(e))&&!e.includes("edge/"))return"Chrome";if(JC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function GC(t=Gt()){return/firefox\//i.test(t)}function YC(t=Gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XC(t=Gt()){return/crios\//i.test(t)}function QC(t=Gt()){return/iemobile/i.test(t)}function JC(t=Gt()){return/android/i.test(t)}function ZC(t=Gt()){return/blackberry/i.test(t)}function e0(t=Gt()){return/webos/i.test(t)}/**
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
 */function ig(t,e=[]){let n;switch(t){case"Browser":n=Kh(Gt());break;case"Worker":n=`${Kh(Gt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${i}`}/**
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
 */class t0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function n0(t,e={}){return tl(t,"GET","/v2/passwordPolicy",Qp(t,e))}/**
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
 */const i0=6;class s0{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:i0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class r0{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qh(this),this.idTokenSubscription=new qh(this),this.beforeStateQueue=new t0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n0(this),n=new s0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await qC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,i,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function o0(t){return Ft(t)}class qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=mw(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function l0(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new gr(3e4,6e4);/**
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
 */new gr(2e3,1e4);/**
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
 */new gr(3e4,6e4);/**
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
 */new gr(5e3,15e3);var Gh="@firebase/auth",Yh="1.6.0";/**
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
 */class a0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function c0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u0(t){Yt(new Dt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ig(t)},c=new r0(i,s,r,a);return l0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Yt(new Dt("auth-internal",e=>{const n=o0(e.getProvider("auth").getImmediate());return(i=>new a0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Gh,Yh,c0(t)),yt(Gh,Yh,"esm2017")}/**
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
 */const h0=5*60;lw("authIdTokenMaxAge");u0("Browser");/**
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
 */const f0=new Map,d0={activated:!1,tokenObservers:[]};function Mt(t){return f0.get(t)||Object.assign({},d0)}const Xh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class p0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Vi,this.pending.promise.catch(n=>{}),await g0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Vi,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function g0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const _0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},go=new ns("appCheck","AppCheck",_0);function sg(t){if(!Mt(t).activated)throw go.create("use-before-activation",{appName:t.name})}/**
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
 */const m0="firebase-app-check-database",v0=1,Pa="firebase-app-check-store";let Br=null;function y0(){return Br||(Br=new Promise((t,e)=>{try{const n=indexedDB.open(m0,v0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(go.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Pa,{keyPath:"compositeKey"})}}}catch(n){e(go.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Br)}function E0(t,e){return w0(C0(t),e)}async function w0(t,e){const i=(await y0()).transaction(Pa,"readwrite"),r=i.objectStore(Pa).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=a=>{o()},i.onerror=a=>{var c;l(go.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function C0(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Na=new pr("@firebase/app-check");function Qh(t,e){return Up()?E0(t,e).catch(n=>{Na.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const I0={error:"UNKNOWN_ERROR"};function T0(t){return Zo.encodeString(JSON.stringify(t),!1)}async function ka(t,e=!1){const n=t.app;sg(n);const i=Mt(n);let s=i.token,r;if(s&&!Is(s)&&(i.token=void 0,s=void 0),!s){const a=await i.cachedTokenPromise;a&&(Is(a)?s=a:await Qh(n,void 0))}if(!e&&s&&Is(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Mt(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?Na.warn(a.message):Na.error(a),r=a}let l;return s?r?Is(s)?l={token:s.token,internalError:r}:l=Zh(r):(l={token:s.token},i.token=s,await Qh(n,s)):l=Zh(r),o&&A0(n,l),l}async function b0(t){const e=t.app;sg(e);const{provider:n}=Mt(e);{const{token:i}=await n.getToken();return{token:i}}}function S0(t,e,n,i){const{app:s}=t,r=Mt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Is(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Jh(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Jh(t))}function rg(t,e){const n=Mt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Jh(t){const{app:e}=t,n=Mt(e);let i=n.tokenRefresher;i||(i=R0(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function R0(t){const{app:e}=t;return new p0(async()=>{const n=Mt(e);let i;if(n.token?i=await ka(t,!0):i=await ka(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Mt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Xh.RETRIAL_MIN_WAIT,Xh.RETRIAL_MAX_WAIT)}function A0(t,e){const n=Mt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Is(t){return t.expireTimeMillis-Date.now()>0}function Zh(t){return{token:T0(I0),error:t}}/**
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
 */class P0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Mt(this.app);for(const n of e)rg(this.app,n.next);return Promise.resolve()}}function N0(t,e){return new P0(t,e)}function k0(t){return{getToken:e=>ka(t,e),getLimitedUseToken:()=>b0(t),addTokenListener:e=>S0(t,"INTERNAL",e),removeTokenListener:e=>rg(t.app,e)}}const O0="@firebase/app-check",x0="0.8.2",D0="app-check",ef="app-check-internal";function M0(){Yt(new Dt(D0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return N0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ef).initialize()})),Yt(new Dt(ef,t=>{const e=t.getProvider("app-check").getImmediate();return k0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),yt(O0,x0)}M0();var L0="firebase",F0="10.8.0";/**
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
 */yt(L0,F0,"app");const og=Symbol("firebaseApp");function lg(t){return Cp()&&ut(og,null)||jp(t)}const wt=()=>{};function ss(t){return!!t&&typeof t=="object"}function U0(t){return ss(t)&&t.type==="document"}function $0(t){return ss(t)&&t.type==="collection"}function B0(t){return U0(t)||$0(t)}function H0(t){return ss(t)&&t.type==="query"}function V0(t){return ss(t)&&"ref"in t}function j0(t){return ss(t)&&typeof t.bucket=="string"}const W0=Symbol.for("v-scx");function z0(){return!!ut(W0,0)}var tf={};const nf="@firebase/database",sf="1.0.3";/**
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
 */let ag="";function K0(t){ag=t}/**
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
 */class q0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class G0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new q0(e)}}catch{}return new G0},ei=cg("localStorage"),Oa=cg("sessionStorage");/**
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
 */const Oi=new pr("@firebase/database"),Y0=function(){let t=1;return function(){return t++}}(),ug=function(t){const e=Ew(t),n=new _w;n.update(e);const i=n.digest();return Zo.encodeByteArray(i)},_r=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=_r.apply(null,i):typeof i=="object"?e+=De(i):e+=i,e+=" "}return e};let oi=null,rf=!0;const X0=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Oi.logLevel=he.VERBOSE,oi=Oi.log.bind(Oi),e&&Oa.set("logging_enabled",!0)):typeof t=="function"?oi=t:(oi=null,Oa.remove("logging_enabled"))},Xe=function(...t){if(rf===!0&&(rf=!1,oi===null&&Oa.get("logging_enabled")===!0&&X0(!0)),oi){const e=_r.apply(null,t);oi(e)}},mr=function(t){return function(...e){Xe(t,...e)}},xa=function(...t){const e="FIREBASE INTERNAL ERROR: "+_r(...t);Oi.error(e)},dn=function(...t){const e=`FIREBASE FATAL ERROR: ${_r(...t)}`;throw Oi.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+_r(...t);Oi.warn(e)},Q0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},J0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",hi="[MAX_NAME]",rs=function(t,e){if(t===e)return 0;if(t===Wi||e===hi)return-1;if(e===Wi||t===hi)return 1;{const n=of(t),i=of(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Z0=function(t,e){return t===e?0:t<e?-1:1},ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},xc=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=De(e[i]),n+=":",n+=xc(t[e[i]]);return n+="}",n},fg=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function dt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dg=function(t){S(!hg(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},eI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const iI=new RegExp("^-?(0*)\\d{1,10}$"),sI=-2147483648,rI=2147483647,of=function(t){if(iI.test(t)){const e=Number(t);if(e>=sI&&e<=rI)return e}return null},os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},oI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aI{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xi.OWNER="owner";/**
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
 */const Dc="5",pg="v",gg="s",_g="r",mg="f",vg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yg="ls",Eg="p",Da="ac",wg="websocket",Cg="long_polling";/**
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
 */class Ig{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Tg(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===wg)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cg)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cI(t)&&(n.ns=t.namespace);const s=[];return dt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class uI{constructor(){this.counters_={}}incrementCounter(e,n=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZE(this.counters_)}}/**
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
 */const Wl={},zl={};function Mc(t){const e=t.toString();return Wl[e]||(Wl[e]=new uI),Wl[e]}function hI(t,e){const n=t.toString();return zl[n]||(zl[n]=e()),zl[n]}/**
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
 */class fI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&os(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const lf="start",dI="close",pI="pLPCommand",gI="pRTLPCB",bg="id",Sg="pw",Rg="ser",_I="cb",mI="seg",vI="ts",yI="d",EI="dframe",Ag=1870,Pg=30,wI=Ag-Pg,CI=25e3,II=3e4;class bi{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mr(e),this.stats_=Mc(n),this.urlFn=a=>(this.appCheckToken&&(a[Da]=this.appCheckToken),Tg(n,Cg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(II)),J0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lc((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lf)this.id=l,this.password=a;else if(o===dI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[lf]="t",i[Rg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[_I]=this.scriptTagHolder.uniqueCallbackIdentifier),i[pg]=Dc,this.transportSessionId&&(i[gg]=this.transportSessionId),this.lastSessionId&&(i[yg]=this.lastSessionId),this.applicationId&&(i[Eg]=this.applicationId),this.appCheckToken&&(i[Da]=this.appCheckToken),typeof location<"u"&&location.hostname&&vg.test(location.hostname)&&(i[_g]=mg);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bi.forceAllow_=!0}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){return bi.forceAllow_?!0:!bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eI()&&!tI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xp(n),s=fg(i,wI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[EI]="t",i[bg]=e,i[Sg]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lc{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y0(),window[pI+this.uniqueCallbackIdentifier]=e,window[gI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Xe("frame writing exception"),l.stack&&Xe(l.stack),Xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bg]=this.myID,e[Sg]=this.myPW,e[Rg]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pg+i.length<=Ag;){const o=this.pendingSegs.shift();i=i+"&"+mI+s+"="+o.seg+"&"+vI+s+"="+o.ts+"&"+yI+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(CI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const TI=16384,bI=45e3;let _o=null;typeof MozWebSocket<"u"?_o=MozWebSocket:typeof WebSocket<"u"&&(_o=WebSocket);class Rt{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mr(this.connId),this.stats_=Mc(n),this.connURL=Rt.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[pg]=Dc,typeof location<"u"&&location.hostname&&vg.test(location.hostname)&&(o[_g]=mg),n&&(o[gg]=n),i&&(o[yg]=i),s&&(o[Da]=s),r&&(o[Eg]=r),Tg(e,wg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let i;Fp(),this.mySock=new _o(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&_o!==null&&!Rt.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ks(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fg(n,TI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rt.responsesRequiredToBeHealthy=2;Rt.healthyTimeout=3e4;/**
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
 */class Ys{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bi,Rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rt&&Rt.isAvailable();let i=n&&!Rt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Rt];else{const s=this.transports_=[];for(const r of Ys.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ys.globalTransportInitialized_=!1;/**
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
 */const SI=6e4,RI=5e3,AI=10*1024,PI=100*1024,Kl="t",af="d",NI="s",cf="r",kI="e",uf="o",hf="a",ff="n",df="p",OI="h";class xI{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mr("c:"+this.id+":"),this.transportManager_=new Ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kl in e){const n=e[Kl];n===hf?this.upgradeIfSecondaryHealthy_():n===cf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ds("t",e),i=ds("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:df,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ff,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ds("t",e),i=ds("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ds(Kl,e);if(af in e){const i=e[af];if(n===OI){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ff){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NI?this.onConnectionShutdown_(i):n===cf?this.onReset_(i):n===kI?xa("Server Error: "+i):n===uf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dc!==i&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:df,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ng{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kg{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class mo extends kg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mo}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pf=32,gf=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new ve("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $n(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Og(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Me(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ve)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ve(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=Z(t),i=Z(e);if(n===null)return e;if(n===i)return it(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fc(t,e){if($n(t)!==$n(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if($n(t)>$n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class MI{constructor(e,n){this.errorPrefix_=n,this.parts_=xg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=el(this.parts_[i]);Mg(this)}}function LI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=el(e),Mg(t)}function FI(t){const e=t.parts_.pop();t.byteLength_-=el(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mg(t){if(t.byteLength_>gf)throw new Error(t.errorPrefix_+"has a key path longer than "+gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>pf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pf+") or object contains a cycle "+qn(t))}function qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Uc extends kg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Uc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ps=1e3,UI=60*5*1e3,_f=30*1e3,$I=1.3,BI=3e4,HI="server_kill",mf=3;class fn extends Ng{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=fn.nextPersistentConnectionId_++,this.log_=mr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=UI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Fp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(De(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Vi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;fn.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mn(e,"w")){const i=ji(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pw(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xa("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BI&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$I)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+fn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new xI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{ht(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(HI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ht(h),a())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xh(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>xc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ve(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mf&&(this.reconnectDelay_=_f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ag.replace(/\./g,"-")]=1,Ac()?e["framework.cordova"]=1:Lp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mo.getInstance().currentlyOnline();return xh(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
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
 */class nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ee(Wi,e),s=new ee(Wi,n);return this.compare(i,s)!==0}minPost(){return ee.MIN}}/**
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
 */let Hr;class Lg extends nl{static get __EMPTY_NODE(){return Hr}static set __EMPTY_NODE(e){Hr=e}compare(e,n){return rs(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(hi,Hr)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Hr)}toString(){return".key"}}const Di=new Lg;/**
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
 */class Vr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??$e.RED,this.left=s??ct.EMPTY_NODE,this.right=r??ct.EMPTY_NODE}copy(e,n,i,s,r){return new $e(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class VI{copy(e,n,i,s,r){return this}insert(e,n,i){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vr(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new VI;/**
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
 */function jI(t,e){return rs(t.name,e.name)}function $c(t,e){return rs(t,e)}/**
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
 */let Ma;function WI(t){Ma=t}const Fg=function(t){return typeof t=="number"?"number:"+dg(t):"string:"+t},Ug=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else S(t===Ma||t.isEmpty(),"priority of unexpected type.");S(t===Ma||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vf;class Ue{constructor(e,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ug(this.priorityNode_)}static set __childrenNodeConstructor(e){vf=e}static get __childrenNodeConstructor(){return vf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:Z(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Z(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||$n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dg(this.value_):e+=this.value_,this.lazyHash_=ug(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ue.VALUE_TYPE_ORDER.indexOf(n),r=Ue.VALUE_TYPE_ORDER.indexOf(i);return S(s>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $g,Bg;function zI(t){$g=t}function KI(t){Bg=t}class qI extends nl{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?rs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(hi,new Ue("[PRIORITY-POST]",Bg))}makePost(e,n){const i=$g(e);return new ee(n,new Ue("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ae=new qI;/**
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
 */const GI=Math.log(2);class YI{constructor(e){const n=r=>parseInt(Math.log(r)/GI,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vo=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new $e(f,h.node,$e.BLACK,null,null);{const p=parseInt(u/2,10)+a,_=s(a,p),v=s(p+1,c);return h=t[p],f=n?n(h):h,new $e(f,h.node,$e.BLACK,_,v)}},r=function(a){let c=null,u=null,h=t.length;const f=function(_,v){const b=h-_,A=h;h-=_;const x=s(b+1,A),F=t[b],P=n?n(F):F;p(new $e(P,F.node,v,null,x))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),b=Math.pow(2,a.count-(_+1));v?f(b,$e.BLACK):(f(b,$e.BLACK),f(b,$e.RED))}return u},o=new YI(t.length),l=r(o);return new ct(i||e,l)};/**
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
 */let ql;const wi={};class an{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(wi&&Ae,"ChildrenNode.ts has not been loaded"),ql=ql||new an({".priority":wi},{".priority":Ae}),ql}get(e){const n=ji(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=vo(i,e.getCompare()):l=wi;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new an(u,c)}addToIndexes(e,n){const i=co(this.indexes_,(s,r)=>{const o=ji(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),s===wi)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(ee.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),vo(l,o.getCompare())}else return wi;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new ee(e.name,l))),a.insert(e,e.node)}});return new an(i,this.indexSet_)}removeFromIndexes(e,n){const i=co(this.indexes_,s=>{if(s===wi)return s;{const r=n.get(e.name);return r?s.remove(new ee(e.name,r)):s}});return new an(i,this.indexSet_)}}/**
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
 */let gs;class j{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ug(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gs||(gs=new j(new ct($c),null,an.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ee(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?gs:this.priorityNode_;return new j(s,o,r)}}updateChild(e,n){const i=Z(e);if(i===null)return n;{S(Z(e)!==".priority"||$n(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Ee(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ae,(o,l)=>{n[o]=l.val(e),i++,r&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fg(this.getPriority().val())+":"),this.forEachChild(Ae,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ug(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vr?-1:0}withIndex(e){if(e===Di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ae),s=n.getIterator(Ae);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Di?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XI extends j{constructor(){super(new ct($c),j.EMPTY_NODE,an.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const vr=new XI;Object.defineProperties(ee,{MIN:{value:new ee(Wi,j.EMPTY_NODE)},MAX:{value:new ee(hi,vr)}});Lg.__EMPTY_NODE=j.EMPTY_NODE;Ue.__childrenNodeConstructor=j;WI(vr);KI(vr);/**
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
 */const QI=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ue(n,Be(e))}if(!(t instanceof Array)&&QI){const n=[];let i=!1;if(dt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Be(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new ee(o,a)))}}),n.length===0)return j.EMPTY_NODE;const r=vo(n,jI,o=>o.name,$c);if(i){const o=vo(n,Ae.getCompare());return new j(r,Be(e),new an({".priority":o},{".priority":Ae}))}else return new j(r,Be(e),an.Default)}else{let n=j.EMPTY_NODE;return dt(t,(i,s)=>{if(mn(t,i)&&i.substring(0,1)!=="."){const r=Be(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Be(e))}}zI(Be);/**
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
 */class JI extends nl{constructor(e){super(),this.indexPath_=e,S(!te(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?rs(e.name,n.name):r}makePost(e,n){const i=Be(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,i);return new ee(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,vr);return new ee(hi,e)}toString(){return xg(this.indexPath_,0).join("/")}}/**
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
 */class ZI extends nl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?rs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const i=Be(e);return new ee(n,i)}toString(){return".value"}}const eT=new ZI;/**
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
 */function Hg(t){return{type:"value",snapshotNode:t}}function zi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bc{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Xs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zi(n,i)):o.trackChildChange(Qs(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ae,(s,r)=>{n.hasChild(s)||i.trackChildChange(Xs(s,r))}),n.isLeafNode()||n.forEachChild(Ae,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Qs(s,r,o))}else i.trackChildChange(zi(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Js{constructor(e){this.indexedFilter_=new Bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Js.getStartPost_(e),this.endPost_=Js.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new ee(n,i))||(i=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Ae,(o,l)=>{r.matches(new ee(o,l))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class nT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new ee(n,i))||(i=j.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new ee(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Qs(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Xs(n,h));const v=l.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(zi(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Xs(c.name,c.node)),r.trackChildChange(zi(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class Hc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new Hc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iT(t){return t.loadsAllData()?new Bc(t.getIndex()):t.hasLimit()?new nT(t):new Js(t)}function yf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===eT?n="$value":t.index_===Di?n="$key":(S(t.index_ instanceof JI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=De(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+De(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=De(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
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
 */class yo extends Ng{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=mr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=yo.getListenId_(e,i),l={};this.listens_[o]=l;const a=yf(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),ji(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=yo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=yf(e._queryParams),i=e._path.toString(),s=new Vi;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pc(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ks(l.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class sT{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Eo(){return{value:null,children:new Map}}function Vg(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Z(e);t.children.has(i)||t.children.set(i,Eo());const s=t.children.get(i);e=Ee(e),Vg(s,e,n)}}function La(t,e,n){t.value!==null?n(e,t.value):rT(t,(i,s)=>{const r=new ve(e.toString()+"/"+i);La(s,r,n)})}function rT(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class oT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const wf=10*1e3,lT=30*1e3,aT=5*60*1e3;class cT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oT(e);const i=wf+(lT-wf)*Math.random();xs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;dt(e,(s,r)=>{r>0&&mn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*aT))}}/**
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
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function jg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Nt.ACK_USER_WRITE,this.source=jg()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new wo(le(),n,this.revert)}}else return S(Z(this.path)===e,"operationForChild called for unrelated child."),new wo(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zs{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Zs(this.source,le()):new Zs(this.source,Ee(this.path))}}/**
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
 */class fi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Nt.OVERWRITE}operationForChild(e){return te(this.path)?new fi(this.source,le(),this.snap.getImmediateChild(e)):new fi(this.source,Ee(this.path),this.snap)}}/**
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
 */class er{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Nt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new fi(this.source,le(),n.value):new er(this.source,le(),n)}else return S(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class uT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hT(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tT(o.childName,o.snapshotNode))}),_s(t,s,"child_removed",e,i,n),_s(t,s,"child_added",e,i,n),_s(t,s,"child_moved",r,i,n),_s(t,s,"child_changed",e,i,n),_s(t,s,"value",e,i,n),s}function _s(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>dT(t,l,a)),o.forEach(l=>{const a=fT(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function fT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dT(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const i=new ee(e.childName,e.snapshotNode),s=new ee(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function il(t,e){return{eventCache:t,serverCache:e}}function Ds(t,e,n,i){return il(new Bn(e,n,i),t.serverCache)}function Wg(t,e,n,i){return il(t.eventCache,new Bn(e,n,i))}function Co(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Gl;const pT=()=>(Gl||(Gl=new ct(Z0)),Gl);class Ce{constructor(e,n=pT()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return dt(e,(i,s)=>{n=n.set(new ve(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const i=Z(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Me(new ve(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=Z(e),i=this.children.get(n);return i!==null?i.subtree(Ee(e)):new Ce(null)}}set(e,n){if(te(e))return new Ce(n,this.children);{const i=Z(e),r=(this.children.get(i)||new Ce(null)).set(Ee(e),n),o=this.children.insert(i,r);return new Ce(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=Z(e),i=this.children.get(n);if(i){const s=i.remove(Ee(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=Z(e),i=this.children.get(n);return i?i.get(Ee(e)):null}}setTree(e,n){if(te(e))return n;{const i=Z(e),r=(this.children.get(i)||new Ce(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ce(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Me(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(te(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Me(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,i){if(te(e))return this;{this.value&&i(n,this.value);const s=Z(e),r=this.children.get(s);return r?r.foreachOnPath_(Ee(e),Me(n,s),i):new Ce(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Me(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new Ce(null))}}function Ms(t,e,n){if(te(e))return new xt(new Ce(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=it(s,e);return r=r.updateChild(o,n),new xt(t.writeTree_.set(s,r))}else{const s=new Ce(n),r=t.writeTree_.setTree(e,s);return new xt(r)}}}function Cf(t,e,n){let i=t;return dt(n,(s,r)=>{i=Ms(i,Me(e,s),r)}),i}function If(t,e){if(te(e))return xt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new xt(n)}}function Fa(t,e){return pi(t,e)!=null}function pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(i,s)=>{e.push(new ee(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ee(i,s.value))}),e}function On(t,e){if(te(e))return t;{const n=pi(t,e);return n!=null?new xt(new Ce(n)):new xt(t.writeTree_.subtree(e))}}function Ua(t){return t.writeTree_.isEmpty()}function Ki(t,e){return zg(le(),t.writeTree_,e)}function zg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=zg(Me(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Me(t,".priority"),i)),n}}/**
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
 */function sl(t,e){return Yg(e,t)}function gT(t,e,n,i,s){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ms(t.visibleWrites,e,n)),t.lastWriteId=i}function _T(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function mT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vT(l,i.path)?s=!1:Pt(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return yT(t),!0;if(i.snap)t.visibleWrites=If(t.visibleWrites,i.path);else{const l=i.children;dt(l,a=>{t.visibleWrites=If(t.visibleWrites,Me(i.path,a))})}return!0}else return!1}function vT(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(Me(t.path,n),e))return!0;return!1}function yT(t){t.visibleWrites=Kg(t.allWrites,ET,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ET(t){return t.visible}function Kg(t,e,n){let i=xt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)Pt(n,o)?(l=it(n,o),i=Ms(i,l,r.snap)):Pt(o,n)&&(l=it(o,n),i=Ms(i,le(),r.snap.getChild(l)));else if(r.children){if(Pt(n,o))l=it(n,o),i=Cf(i,l,r.children);else if(Pt(o,n))if(l=it(o,n),te(l))i=Cf(i,le(),r.children);else{const a=ji(r.children,Z(l));if(a){const c=a.getChild(Ee(l));i=Ms(i,le(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return i}function qg(t,e,n,i,s){if(!i&&!s){const r=pi(t.visibleWrites,e);if(r!=null)return r;{const o=On(t.visibleWrites,e);if(Ua(o))return n;if(n==null&&!Fa(o,le()))return null;{const l=n||j.EMPTY_NODE;return Ki(o,l)}}}else{const r=On(t.visibleWrites,e);if(!s&&Ua(r))return n;if(!s&&n==null&&!Fa(r,le()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Pt(c.path,e)||Pt(e,c.path))},l=Kg(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Ki(l,a)}}}function wT(t,e,n){let i=j.EMPTY_NODE;const s=pi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ae,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=On(t.visibleWrites,e);return n.forEachChild(Ae,(o,l)=>{const a=Ki(On(r,new ve(o)),l);i=i.updateImmediateChild(o,a)}),Tf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=On(t.visibleWrites,e);return Tf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function CT(t,e,n,i,s){S(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Fa(t.visibleWrites,r))return null;{const o=On(t.visibleWrites,r);return Ua(o)?s.getChild(n):Ki(o,s.getChild(n))}}function IT(t,e,n,i){const s=Me(e,n),r=pi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=On(t.visibleWrites,s);return Ki(o,i.getNode().getImmediateChild(n))}else return null}function TT(t,e){return pi(t.visibleWrites,e)}function bT(t,e,n,i,s,r,o){let l;const a=On(t.visibleWrites,e),c=pi(a,le());if(c!=null)l=c;else if(n!=null)l=Ki(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=f.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=f.getNext();return u}else return[]}function ST(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function Io(t,e,n,i){return qg(t.writeTree,t.treePath,e,n,i)}function Wc(t,e){return wT(t.writeTree,t.treePath,e)}function bf(t,e,n,i){return CT(t.writeTree,t.treePath,e,n,i)}function To(t,e){return TT(t.writeTree,Me(t.treePath,e))}function RT(t,e,n,i,s,r){return bT(t.writeTree,t.treePath,e,n,i,s,r)}function zc(t,e,n){return IT(t.writeTree,t.treePath,e,n)}function Gg(t,e){return Yg(Me(t.treePath,e),t.writeTree)}function Yg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class AT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Qs(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Xs(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,zi(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Qs(i,e.snapshotNode,s.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class PT{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Xg=new PT;class Kc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),r=RT(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function NT(t){return{filter:t}}function kT(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OT(t,e,n,i,s){const r=new AT;let o,l;if(n.type===Nt.OVERWRITE){const c=n;c.source.fromUser?o=$a(t,e,c.path,c.snap,i,s,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=bo(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===Nt.MERGE){const c=n;c.source.fromUser?o=DT(t,e,c.path,c.children,i,s,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ba(t,e,c.path,c.children,i,s,l,r))}else if(n.type===Nt.ACK_USER_WRITE){const c=n;c.revert?o=FT(t,e,c.path,i,s,r):o=MT(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Nt.LISTEN_COMPLETE)o=LT(t,e,n.path,i,r);else throw ts("Unknown operation type: "+n.type);const a=r.getChanges();return xT(e,o,a),{viewCache:o,changes:a}}function xT(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Co(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Hg(Co(e)))}}function Qg(t,e,n,i,s,r){const o=e.eventCache;if(To(i,n)!=null)return e;{let l,a;if(te(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=di(e),u=c instanceof j?c:j.EMPTY_NODE,h=Wc(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Io(i,di(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){S($n(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=bf(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Ee(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=bf(i,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zc(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Ds(e,l,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function bo(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),p,null)}else{const p=Z(n);if(!a.isCompleteForPath(n)&&$n(n)>1)return e;const _=Ee(n),b=a.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),p,b,_,Xg,null)}const h=Wg(e,c,a.isFullyInitialized()||te(n),u.filtersNodes()),f=new Kc(s,h,r);return Qg(t,h,n,s,f,l)}function $a(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new Kc(s,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Ds(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Ds(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=Ee(n),p=l.getNode().getImmediateChild(h);let _;if(te(f))_=i;else{const v=u.getCompleteChild(h);v!=null?Og(f)===".priority"&&v.getChild(Dg(f)).isEmpty()?_=v:_=v.updateChild(f,i):_=j.EMPTY_NODE}if(p.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),h,_,f,u,o);a=Ds(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Sf(t,e){return t.eventCache.isCompleteForChild(e)}function DT(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Me(n,a);Sf(e,Z(u))&&(l=$a(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Me(n,a);Sf(e,Z(u))||(l=$a(t,l,u,c,s,r,o))}),l}function Rf(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ba(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;te(n)?c=i:c=new Ce(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Rf(t,p,f);a=bo(t,a,new ve(h),_,s,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),v=Rf(t,_,f);a=bo(t,a,new ve(h),v,s,r,o,l)}}),a}function MT(t,e,n,i,s,r,o){if(To(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(te(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return bo(t,e,n,a.getNode().getChild(n),s,r,l,o);if(te(n)){let c=new Ce(null);return a.getNode().forEachChild(Di,(u,h)=>{c=c.set(new ve(u),h)}),Ba(t,e,n,c,s,r,l,o)}else return e}else{let c=new Ce(null);return i.foreach((u,h)=>{const f=Me(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Ba(t,e,n,c,s,r,l,o)}}function LT(t,e,n,i,s){const r=e.serverCache,o=Wg(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return Qg(t,o,n,i,Xg,s)}function FT(t,e,n,i,s,r){let o;if(To(i,n)!=null)return e;{const l=new Kc(i,e,s),a=e.eventCache.getNode();let c;if(te(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Io(i,di(e));else{const h=e.serverCache.getNode();S(h instanceof j,"serverChildren would be complete if leaf node"),u=Wc(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=Z(n);let h=zc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Ee(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,j.EMPTY_NODE,Ee(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Io(i,di(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||To(i,le())!=null,Ds(e,c,o,t.filter.filtersNodes())}}/**
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
 */class UT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Bc(i.getIndex()),r=iT(i);this.processor_=NT(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,l.getNode(),null),u=new Bn(a,o.isFullyInitialized(),s.filtersNodes()),h=new Bn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=il(h,u),this.eventGenerator_=new uT(this.query_)}get query(){return this.query_}}function $T(t){return t.viewCache_.serverCache.getNode()}function BT(t){return Co(t.viewCache_)}function HT(t,e){const n=di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Af(t){return t.eventRegistrations_.length===0}function VT(t,e){t.eventRegistrations_.push(e)}function Pf(t,e,n){const i=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Nf(t,e,n,i){e.type===Nt.MERGE&&e.source.queryId!==null&&(S(di(t.viewCache_),"We should always have a full cache before handling merges"),S(Co(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=OT(t.processor_,s,e,n,i);return kT(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Jg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function jT(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(r,o)=>{i.push(zi(r,o))}),n.isFullyInitialized()&&i.push(Hg(n.getNode())),Jg(t,i,n.getNode(),e)}function Jg(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return hT(t.eventGenerator_,e,n,s)}/**
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
 */let So;class Zg{constructor(){this.views=new Map}}function WT(t){S(!So,"__referenceConstructor has already been defined"),So=t}function zT(){return S(So,"Reference.ts has not been loaded"),So}function KT(t){return t.views.size===0}function qc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return S(r!=null,"SyncTree gave us an op for an invalid query."),Nf(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Nf(o,e,n,i));return r}}function e_(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Io(n,s?i:null),a=!1;l?a=!0:i instanceof j?(l=Wc(n,i),a=!1):(l=j.EMPTY_NODE,a=!1);const c=il(new Bn(l,a,!1),new Bn(i,s,!1));return new UT(e,c)}return o}function qT(t,e,n,i,s,r){const o=e_(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),VT(o,n),jT(o,n)}function GT(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Hn(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(Pf(c,n,i)),Af(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(Pf(a,n,i)),Af(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Hn(t)&&r.push(new(zT())(e._repo,e._path)),{removed:r,events:o}}function t_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const i of t.views.values())n=n||HT(i,e);return n}function n_(t,e){if(e._queryParams.loadsAllData())return rl(t);{const i=e._queryIdentifier;return t.views.get(i)}}function i_(t,e){return n_(t,e)!=null}function Hn(t){return rl(t)!=null}function rl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ro;function YT(t){S(!Ro,"__referenceConstructor has already been defined"),Ro=t}function XT(){return S(Ro,"Reference.ts has not been loaded"),Ro}let QT=1;class kf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=ST(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function s_(t,e,n,i,s){return gT(t.pendingWriteTree_,e,n,i,s),s?Er(t,new fi(jg(),e,n)):[]}function ti(t,e,n=!1){const i=_T(t.pendingWriteTree_,e);if(mT(t.pendingWriteTree_,e)){let r=new Ce(null);return i.snap!=null?r=r.set(le(),!0):dt(i.children,o=>{r=r.set(new ve(o),!0)}),Er(t,new wo(i.path,r,n))}else return[]}function yr(t,e,n){return Er(t,new fi(Vc(),e,n))}function JT(t,e,n){const i=Ce.fromObject(n);return Er(t,new er(Vc(),e,i))}function ZT(t,e){return Er(t,new Zs(Vc(),e))}function eb(t,e,n){const i=Yc(t,n);if(i){const s=Xc(i),r=s.path,o=s.queryId,l=it(r,e),a=new Zs(jc(o),l);return Qc(t,r,a)}else return[]}function Ao(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||i_(o,e))){const a=GT(o,e,n,i);KT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,p)=>Hn(p));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=ib(f);for(let _=0;_<p.length;++_){const v=p[_],b=v.query,A=a_(t,v);t.listenProvider_.startListening(Ls(b),tr(t,b),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Ls(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(ol(f));t.listenProvider_.stopListening(Ls(f),p)}))}sb(t,c)}return l}function r_(t,e,n,i){const s=Yc(t,i);if(s!=null){const r=Xc(s),o=r.path,l=r.queryId,a=it(o,e),c=new fi(jc(l),a,n);return Qc(t,o,c)}else return[]}function tb(t,e,n,i){const s=Yc(t,i);if(s){const r=Xc(s),o=r.path,l=r.queryId,a=it(o,e),c=Ce.fromObject(n),u=new er(jc(l),a,c);return Qc(t,o,u)}else return[]}function Ha(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const _=it(f,s);r=r||xn(p,_),o=o||Hn(p)});let l=t.syncPointTree_.get(s);l?(o=o||Hn(l),r=r||xn(l,le())):(l=new Zg,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,_)=>{const v=xn(_,le());v&&(r=r.updateImmediateChild(p,v))}));const c=i_(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ol(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=rb();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=sl(t.pendingWriteTree_,s);let h=qT(l,e,n,u,r,a);if(!c&&!o&&!i){const f=n_(l,e);h=h.concat(ob(t,e,f))}return h}function Gc(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=it(o,e),c=xn(l,a);if(c)return c});return qg(s,e,r,n,!0)}function nb(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=it(c,n);i=i||xn(u,h)});let s=t.syncPointTree_.get(n);s?i=i||xn(s,le()):(s=new Zg,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Bn(i,!0,!1):null,l=sl(t.pendingWriteTree_,e._path),a=e_(s,e,l,r?o.getNode():j.EMPTY_NODE,r);return BT(a)}function Er(t,e){return o_(e,t.syncPointTree_,null,sl(t.pendingWriteTree_,le()))}function o_(t,e,n,i){if(te(t.path))return l_(t,e,n,i);{const s=e.get(le());n==null&&s!=null&&(n=xn(s,le()));let r=[];const o=Z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Gg(i,o);r=r.concat(o_(l,a,c,u))}return s&&(r=r.concat(qc(s,t,i,n))),r}}function l_(t,e,n,i){const s=e.get(le());n==null&&s!=null&&(n=xn(s,le()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Gg(i,o),u=t.operationForChild(o);u&&(r=r.concat(l_(u,l,a,c)))}),s&&(r=r.concat(qc(s,t,i,n))),r}function a_(t,e){const n=e.query,i=tr(t,n);return{hashFn:()=>($T(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?eb(t,n._path,i):ZT(t,n._path);{const r=nI(s,n);return Ao(t,n,null,r)}}}}function tr(t,e){const n=ol(e);return t.queryToTagMap.get(n)}function ol(t){return t._path.toString()+"$"+t._queryIdentifier}function Yc(t,e){return t.tagToQueryMap.get(e)}function Xc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Qc(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const s=sl(t.pendingWriteTree_,e);return qc(i,n,s,null)}function ib(t){return t.fold((e,n,i)=>{if(n&&Hn(n))return[rl(n)];{let s=[];return n&&(s=t_(n)),dt(i,(r,o)=>{s=s.concat(o)}),s}})}function Ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XT())(t._repo,t._path):t}function sb(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ol(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function rb(){return QT++}function ob(t,e,n){const i=e._path,s=tr(t,e),r=a_(t,n),o=t.listenProvider_.startListening(Ls(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)S(!Hn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!te(c)&&u&&Hn(u))return[rl(u).query];{let f=[];return u&&(f=f.concat(t_(u).map(p=>p.query))),dt(h,(p,_)=>{f=f.concat(_)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Ls(u),tr(t,u))}}return o}/**
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
 */class Jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jc(n)}node(){return this.node_}}class Zc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Zc(this.syncTree_,n)}node(){return Gc(this.syncTree_,this.path_)}}const lb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Of=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ab(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cb(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ab=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},cb=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ub=function(t,e,n,i){return eu(e,new Zc(n,t),i)},c_=function(t,e,n){return eu(t,new Jc(e),n)};function eu(t,e,n){const i=t.getPriority().val(),s=Of(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Of(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ue(l,Be(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ue(s))),o.forEachChild(Ae,(l,a)=>{const c=eu(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class tu{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function nu(t,e){let n=e instanceof ve?e:new ve(e),i=t,s=Z(n);for(;s!==null;){const r=ji(i.node.children,s)||{children:{},childCount:0};i=new tu(s,i,r),n=Ee(n),s=Z(n)}return i}function ls(t){return t.node.value}function u_(t,e){t.node.value=e,Va(t)}function h_(t){return t.node.childCount>0}function hb(t){return ls(t)===void 0&&!h_(t)}function ll(t,e){dt(t.node.children,(n,i)=>{e(new tu(n,t,i))})}function f_(t,e,n,i){n&&!i&&e(t),ll(t,s=>{f_(s,e,!0,i)}),n&&i&&e(t)}function fb(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function wr(t){return new ve(t.parent===null?t.name:wr(t.parent)+"/"+t.name)}function Va(t){t.parent!==null&&db(t.parent,t.name,t)}function db(t,e,n){const i=hb(n),s=mn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Va(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Va(t))}/**
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
 */const pb=/[\[\].#$\/\u0000-\u001F\u007F]/,gb=/[\[\].#$\u0000-\u001F\u007F]/,Yl=10*1024*1024,d_=function(t){return typeof t=="string"&&t.length!==0&&!pb.test(t)},p_=function(t){return typeof t=="string"&&t.length!==0&&!gb.test(t)},_b=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),p_(t)},g_=function(t,e,n,i){i&&e===void 0||iu(Nc(t,"value"),e,n)},iu=function(t,e,n){const i=n instanceof ve?new MI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qn(i));if(typeof e=="function")throw new Error(t+"contains a function "+qn(i)+" with contents = "+e.toString());if(hg(e))throw new Error(t+"contains "+e.toString()+" "+qn(i));if(typeof e=="string"&&e.length>Yl/3&&el(e)>Yl)throw new Error(t+"contains a string greater than "+Yl+" utf8 bytes "+qn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(dt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!d_(o)))throw new Error(t+" contains an invalid key ("+o+") "+qn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LI(i,o),iu(t,l,i),FI(i)}),s&&r)throw new Error(t+' contains ".value" child '+qn(i)+" in addition to actual children.")}},__=function(t,e,n,i){if(!(i&&n===void 0)&&!p_(n))throw new Error(Nc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mb=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),__(t,e,n,i)},su=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!d_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_b(n))throw new Error(Nc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ru(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Fc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function m_(t,e,n){ru(t,n),v_(t,i=>Fc(i,e))}function Xt(t,e,n){ru(t,n),v_(t,i=>Pt(i,e)||Pt(e,i))}function v_(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Eb(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Eb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();oi&&Xe("event: "+n.toString()),os(i)}}}/**
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
 */const wb="repo_interrupt",Cb=25;class Ib{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eo(),this.transactionQueueTree_=new tu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Tb(t,e,n){if(t.stats_=Mc(t.repoInfo_),t.forceRestClient_||oI())t.server_=new yo(t.repoInfo_,(i,s,r,o)=>{xf(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Df(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new fn(t.repoInfo_,e,(i,s,r,o)=>{xf(t,i,s,r,o)},i=>{Df(t,i)},i=>{bb(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=hI(t.repoInfo_,()=>new cT(t.stats_,t.server_)),t.infoData_=new sT,t.infoSyncTree_=new kf({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=yr(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lu(t,"connected",!1),t.serverSyncTree_=new kf({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Xt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function y_(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ou(t){return lb({timestamp:y_(t)})}function xf(t,e,n,i,s){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=co(n,c=>Be(c));o=tb(t.serverSyncTree_,r,a,s)}else{const a=Be(n);o=r_(t.serverSyncTree_,r,a,s)}else if(i){const a=co(n,c=>Be(c));o=JT(t.serverSyncTree_,r,a)}else{const a=Be(n);o=yr(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=cl(t,r)),Xt(t.eventQueue_,l,o)}function Df(t,e){lu(t,"connected",e),e===!1&&Ab(t)}function bb(t,e){dt(e,(n,i)=>{lu(t,n,i)})}function lu(t,e,n){const i=new ve("/.info/"+e),s=Be(n);t.infoData_.updateSnapshot(i,s);const r=yr(t.infoSyncTree_,i,s);Xt(t.eventQueue_,i,r)}function E_(t){return t.nextWriteId_++}function Sb(t,e,n){const i=nb(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Be(s).withIndex(e._queryParams.getIndex());Ha(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=yr(t.serverSyncTree_,e._path,r);else{const l=tr(t.serverSyncTree_,e);o=r_(t.serverSyncTree_,e._path,r,l)}return Xt(t.eventQueue_,e._path,o),Ao(t.serverSyncTree_,e,n,null,!0),r},s=>(al(t,"get for query "+De(e)+" failed: "+s),Promise.reject(new Error(s))))}function Rb(t,e,n,i,s){al(t,"set",{path:e.toString(),value:n,priority:i});const r=ou(t),o=Be(n,i),l=Gc(t.serverSyncTree_,e),a=c_(o,l,r),c=E_(t),u=s_(t.serverSyncTree_,e,a,c,!0);ru(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||ht("set at "+e+" failed: "+f);const v=ti(t.serverSyncTree_,c,!_);Xt(t.eventQueue_,e,v),kb(t,s,f,p)});const h=b_(t,e);cl(t,h),Xt(t.eventQueue_,h,[])}function Ab(t){al(t,"onDisconnectEvents");const e=ou(t),n=Eo();La(t.onDisconnect_,le(),(s,r)=>{const o=ub(s,r,t.serverSyncTree_,e);Vg(n,s,o)});let i=[];La(n,le(),(s,r)=>{i=i.concat(yr(t.serverSyncTree_,s,r));const o=b_(t,s);cl(t,o)}),t.onDisconnect_=Eo(),Xt(t.eventQueue_,le(),i)}function Pb(t,e,n){let i;Z(e._path)===".info"?i=Ha(t.infoSyncTree_,e,n):i=Ha(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,i)}function Mf(t,e,n){let i;Z(e._path)===".info"?i=Ao(t.infoSyncTree_,e,n):i=Ao(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,i)}function Nb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wb)}function al(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function kb(t,e,n,i){e&&os(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function w_(t,e,n){return Gc(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function au(t,e=t.transactionQueueTree_){if(e||ul(t,e),ls(e)){const n=I_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Ob(t,wr(e),n)}else h_(e)&&ll(e,n=>{au(t,n)})}function Ob(t,e,n){const i=n.map(c=>c.currentWriteId),s=w_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=it(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{al(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ti(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ul(t,nu(t.transactionQueueTree_,e)),au(t,t.transactionQueueTree_),Xt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)os(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ht("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}cl(t,e)}},o)}function cl(t,e){const n=C_(t,e),i=wr(n),s=I_(t,n);return xb(t,s,i),i}function xb(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=it(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(ti(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Cb)u=!0,h="maxretry",s=s.concat(ti(t.serverSyncTree_,a.currentWriteId,!0));else{const f=w_(t,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){iu("transaction failed: Data returned ",p,a.path);let _=Be(p);typeof p=="object"&&p!=null&&mn(p,".priority")||(_=_.updatePriority(f.getPriority()));const b=a.currentWriteId,A=ou(t),x=c_(_,f,A);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=x,a.currentWriteId=E_(t),o.splice(o.indexOf(b),1),s=s.concat(s_(t.serverSyncTree_,a.path,x,a.currentWriteId,a.applyLocally)),s=s.concat(ti(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",s=s.concat(ti(t.serverSyncTree_,a.currentWriteId,!0))}Xt(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}ul(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)os(i[l]);au(t,t.transactionQueueTree_)}function C_(t,e){let n,i=t.transactionQueueTree_;for(n=Z(e);n!==null&&ls(i)===void 0;)i=nu(i,n),e=Ee(e),n=Z(e);return i}function I_(t,e){const n=[];return T_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function T_(t,e,n){const i=ls(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ll(e,s=>{T_(t,s,n)})}function ul(t,e){const n=ls(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,u_(e,n.length>0?n:void 0)}ll(e,i=>{ul(t,i)})}function b_(t,e){const n=wr(C_(t,e)),i=nu(t.transactionQueueTree_,e);return fb(i,s=>{Xl(t,s)}),Xl(t,i),f_(i,s=>{Xl(t,s)}),n}function Xl(t,e){const n=ls(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ti(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?u_(e,void 0):n.length=r+1,Xt(t.eventQueue_,wr(e),s);for(let o=0;o<i.length;o++)os(i[o])}}/**
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
 */function Db(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Mb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lf=function(t,e){const n=Lb(t),i=n.namespace;n.domain==="firebase.com"&&dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Q0();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ig(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ve(n.pathString)}},Lb=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Db(t.substring(u,h)));const f=Mb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */const Ff="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Fb=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Ff.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ff.charAt(e[s]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class S_{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class R_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class A_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cu{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return te(this._path)?null:Og(this._path)}get ref(){return new Zt(this._repo,this._path)}get _queryIdentifier(){const e=Ef(this._queryParams),n=xc(e);return n==="{}"?"default":n}get _queryObject(){return Ef(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof cu))return!1;const n=this._repo===e._repo,i=Fc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DI(this._path)}}class Zt extends cu{constructor(e,n){super(e,n,new Hc,!1)}get parent(){const e=Dg(this._path);return e===null?null:new Zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),i=Gi(this.ref,e);return new qi(this._node.getChild(n),i,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new qi(s,Gi(this.ref,i),Ae)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ts(t,e){return t=Ft(t),t._checkNotDeleted("ref"),e!==void 0?Gi(t._root,e):t._root}function Gi(t,e){return t=Ft(t),Z(t._path)===null?mb("child","path",e,!1):__("child","path",e,!1),new Zt(t._repo,Me(t._path,e))}function Ub(t,e){t=Ft(t),su("push",t._path),g_("push",e,t._path,!0);const n=y_(t._repo),i=Fb(n),s=Gi(t,i),r=Gi(t,i);let o;return e!=null?o=Po(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function $b(t){return su("remove",t._path),Po(t,null)}function Po(t,e){t=Ft(t),su("set",t._path),g_("set",e,t._path,!1);const n=new Vi;return Rb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function uu(t){t=Ft(t);const e=new A_(()=>{}),n=new hl(e);return Sb(t._repo,t,n).then(i=>new qi(i,new Zt(t._repo,t._path),t._queryParams.getIndex()))}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new S_("value",this,new qi(e.snapshotNode,new Zt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new R_(this,e,n):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new R_(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const i=Gi(new Zt(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new S_(e.type,this,new qi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Cr(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(u,h)=>{Mf(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new A_(n,r||void 0),l=e==="value"?new hl(o):new hu(e,o);return Pb(t._repo,t,l),()=>Mf(t._repo,t,l)}function P_(t,e,n,i){return Cr(t,"value",e,n,i)}function Bb(t,e,n,i){return Cr(t,"child_added",e,n,i)}function Hb(t,e,n,i){return Cr(t,"child_changed",e,n,i)}function Vb(t,e,n,i){return Cr(t,"child_moved",e,n,i)}function jb(t,e,n,i){return Cr(t,"child_removed",e,n,i)}WT(Zt);YT(Zt);/**
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
 */const Wb="FIREBASE_DATABASE_EMULATOR_HOST",ja={};let zb=!1;function Kb(t,e,n,i){t.repoInfo_=new Ig(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function qb(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lf(r,s),l=o.repoInfo,a,c;typeof process<"u"&&tf&&(c=tf[Wb]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Lf(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new xi(xi.OWNER):new aI(t.name,t.options,e);vb("Invalid Firebase Database URL",o),te(o.path)||dn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Yb(l,t,u,new lI(t.name,n));return new Xb(h,t)}function Gb(t,e){const n=ja[e];(!n||n[t.key]!==t)&&dn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Nb(t),delete n[t.key]}function Yb(t,e,n,i){let s=ja[e.name];s||(s={},ja[e.name]=s);let r=s[t.toURLString()];return r&&dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ib(t,zb,n,i),s[t.toURLString()]=r,r}class Xb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Tb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zt(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dn("Cannot call "+e+" on a deleted database.")}}function Qb(t=jp(),e){const n=gC(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=ow("database");i&&Jb(n,...i)}return n}function Jb(t,e,n,i={}){t=Ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new xi(xi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:aw(i.mockUserToken,t.app.options.projectId);r=new xi(o)}Kb(s,e,n,r)}/**
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
 */function Zb(t){K0(is),Yt(new Dt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return qb(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),yt(nf,sf,t),yt(nf,sf,"esm2017")}fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zb();var eS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,fu=fu||{},K=eS||self;function fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ir(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tS(t){return Object.prototype.hasOwnProperty.call(t,Ql)&&t[Ql]||(t[Ql]=++nS)}var Ql="closure_uid_"+(1e9*Math.random()>>>0),nS=0;function iS(t,e,n){return t.call.apply(t.bind,arguments)}function sS(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=iS:Je=sS,Je.apply(null,arguments)}function jr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function Vn(){this.s=this.s,this.o=this.o}var rS=0;Vn.prototype.s=!1;Vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rS!=0)&&tS(this)};Vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const N_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function du(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Uf(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(fl(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var oS=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};K.addEventListener("test",n,e),K.removeEventListener("test",n,e)}catch{}return t}();function nr(t){return/^[\s\xa0]*$/.test(t)}function dl(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return dl().indexOf(t)!=-1}function pu(t){return pu[" "](t),t}pu[" "]=function(){};function lS(t,e){var n=eR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var aS=jt("Opera"),ir=jt("Trident")||jt("MSIE"),k_=jt("Edge"),Wa=k_||ir,O_=jt("Gecko")&&!(dl().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),cS=dl().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function x_(){var t=K.document;return t?t.documentMode:void 0}e:{var $f="",Jl=function(){var t=dl();if(O_)return/rv:([^\);]+)(\)|;)/.exec(t);if(k_)return/Edge\/([\d\.]+)/.exec(t);if(ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cS)return/WebKit\/(\S+)/.exec(t);if(aS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jl&&($f=Jl?Jl[1]:""),ir){var Bf=x_();if(Bf!=null&&Bf>parseFloat($f))break e}}K.document&&ir&&x_();function sr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(O_){e:{try{pu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sr.$.h.call(this)}}je(sr,Ze);var uS={2:"touch",3:"pen",4:"mouse"};sr.prototype.h=function(){sr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tr="closure_listenable_"+(1e6*Math.random()|0),hS=0;function fS(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++hS,this.fa=this.ia=!1}function pl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function dS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function D_(t){const e={};for(const n in t)e[n]=t[n];return e}const Hf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M_(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Hf.length;r++)n=Hf[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gl(t){this.src=t,this.g={},this.h=0}gl.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ka(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fS(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function za(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=N_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ka(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var _u="closure_lm_"+(1e6*Math.random()|0),Zl={};function L_(t,e,n,i,s){if(i&&i.once)return U_(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)L_(t,e[r],n,i,s);return null}return n=yu(n),t&&t[Tr]?t.O(e,n,Ir(i)?!!i.capture:!!i,s):F_(t,e,n,!1,i,s)}function F_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ir(s)?!!s.capture:!!s,l=vu(t);if(l||(t[_u]=l=new gl(t)),n=l.add(e,n,i,o,r),n.proxy)return n;if(i=pS(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)oS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(B_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pS(){function t(n){return e.call(t.src,t.listener,n)}const e=gS;return t}function U_(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)U_(t,e[r],n,i,s);return null}return n=yu(n),t&&t[Tr]?t.P(e,n,Ir(i)?!!i.capture:!!i,s):F_(t,e,n,!0,i,s)}function $_(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)$_(t,e[r],n,i,s);else i=Ir(i)?!!i.capture:!!i,n=yu(n),t&&t[Tr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ka(r,n,i,s),-1<n&&(pl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=vu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ka(e,n,i,s)),(n=-1<t?e[t]:null)&&mu(n))}function mu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Tr])za(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(B_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vu(e))?(za(n,t),n.h==0&&(n.src=null,e[_u]=null)):pl(t)}}}function B_(t){return t in Zl?Zl[t]:Zl[t]="on"+t}function gS(t,e){if(t.fa)t=!0;else{e=new sr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&mu(t),t=n.call(i,e)}return t}function vu(t){return t=t[_u],t instanceof gl?t:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function yu(t){return typeof t=="function"?t:(t[ea]||(t[ea]=function(e){return t.handleEvent(e)}),t[ea])}function Ve(){Vn.call(this),this.i=new gl(this),this.S=this,this.J=null}je(Ve,Vn);Ve.prototype[Tr]=!0;Ve.prototype.removeEventListener=function(t,e,n,i){$_(this,t,e,n,i)};function Ke(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var s=e;e=new Ze(i,t),M_(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Wr(o,i,!0,e)&&s}if(o=e.g=t,s=Wr(o,i,!0,e)&&s,s=Wr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Wr(o,i,!1,e)&&s}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pl(n[i]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ve.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Wr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&za(t.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Eu=K.JSON.stringify;class _S{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mS(){var t=wu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vS{constructor(){this.h=this.g=null}add(e,n){const i=H_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var H_=new _S(()=>new yS,t=>t.reset());class yS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ES(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wS(t){K.setTimeout(()=>{throw t},0)}let rr,or=!1,wu=new vS,V_=()=>{const t=K.Promise.resolve(void 0);rr=()=>{t.then(CS)}};var CS=()=>{for(var t;t=mS();){try{t.h.call(t.g)}catch(n){wS(n)}var e=H_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}or=!1};function _l(t,e){Ve.call(this),this.h=t||1,this.g=e||K,this.j=Je(this.qb,this),this.l=Date.now()}je(_l,Ve);O=_l.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Cu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){_l.$.N.call(this),Cu(this),delete this.g};function Iu(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function j_(t){t.g=Iu(()=>{t.g=null,t.i&&(t.i=!1,j_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IS extends Vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:j_(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(t){Vn.call(this),this.h=t,this.g={}}je(lr,Vn);var Vf=[];function W_(t,e,n,i){Array.isArray(n)||(n&&(Vf[0]=n.toString()),n=Vf);for(var s=0;s<n.length;s++){var r=L_(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function z_(t){gu(t.g,function(e,n){this.g.hasOwnProperty(n)&&mu(e)},t),t.g={}}lr.prototype.N=function(){lr.$.N.call(this),z_(this)};lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Ea=function(){this.g=!1};function TS(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function bS(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Si(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RS(t,n)+(i?" "+i:"")})}function SS(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function RS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eu(n)}catch{return e}}var as={},jf=null;function Tu(){return jf=jf||new Ve}as.Ta="serverreachability";function K_(t){Ze.call(this,as.Ta,t)}je(K_,Ze);function ar(t){const e=Tu();Ke(e,new K_(e))}as.STAT_EVENT="statevent";function q_(t,e){Ze.call(this,as.STAT_EVENT,t),this.stat=e}je(q_,Ze);function st(t){const e=Tu();Ke(e,new q_(e,t))}as.Ua="timingevent";function G_(t,e){Ze.call(this,as.Ua,t),this.size=e}je(G_,Ze);function br(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var bu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},AS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Su(){}Su.prototype.h=null;function Wf(t){return t.h||(t.h=t.i())}function PS(){}var Sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ru(){Ze.call(this,"d")}je(Ru,Ze);function Au(){Ze.call(this,"c")}je(Au,Ze);var qa;function vl(){}je(vl,Su);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};qa=new vl;function Rr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new lr(this),this.P=NS,t=Wa?125:void 0,this.V=new _l(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Y_}function Y_(){this.i=null,this.g="",this.h=!1}var NS=45e3,X_={},Ga={};O=Rr.prototype;O.setTimeout=function(t){this.P=t};function Ya(t,e,n){t.L=1,t.A=El(pn(e)),t.u=n,t.S=!0,Q_(t,null)}function Q_(t,e){t.G=Date.now(),Ar(t),t.B=pn(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),rm(n.i,"t",i),t.o=0,n=t.l.J,t.h=new Y_,t.g=Sm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new IS(Je(t.Pa,t,t.g),t.O)),W_(t.U,t.g,"readystatechange",t.nb),e=t.I?D_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ar(),TS(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Wa||this.g&&(this.h.h||this.g.ja()||Gf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ar(3):ar(2)),yl(this);var n=this.g.da();this.ca=n;t:if(J_(this)){var i=Gf(this.g);t="";var s=i.length,r=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),Fs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bS(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nr(l)){var c=l;break t}}c=null}if(n=c)Si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,n);else{this.i=!1,this.s=3,st(12),ni(this),Fs(this);break e}}this.S?(Z_(this,u,o),Wa&&this.i&&u==3&&(W_(this.U,this.V,"tick",this.mb),this.V.start())):(Si(this.j,this.m,o,null),Xa(this,o)),u==4&&ni(this),this.i&&!this.J&&(u==4?Cm(this.l,this):(this.i=!1,Ar(this)))}else QS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),ni(this),Fs(this)}}}catch{}finally{}};function J_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Z_(t,e,n){let i=!0,s;for(;!t.J&&t.o<n.length;)if(s=kS(t,n),s==Ga){e==4&&(t.s=4,st(14),i=!1),Si(t.j,t.m,null,"[Incomplete Response]");break}else if(s==X_){t.s=4,st(15),Si(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Si(t.j,t.m,s,null),Xa(t,s);J_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,st(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Du(e),e.M=!0,st(11))):(Si(t.j,t.m,n,"[Invalid Chunked Response]"),ni(t),Fs(t))}O.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.o<e.length&&(yl(this),Z_(this,t,e),this.i&&t!=4&&Ar(this))}};function kS(t,e){var n=t.o,i=e.indexOf(`
`,n);return i==-1?Ga:(n=Number(e.substring(n,i)),isNaN(n)?X_:(i+=1,i+n>e.length?Ga:(e=e.slice(i,i+n),t.o=i+n,e)))}O.cancel=function(){this.J=!0,ni(this)};function Ar(t){t.Y=Date.now()+t.P,em(t,t.P)}function em(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=br(Je(t.lb,t),e)}function yl(t){t.C&&(K.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(SS(this.j,this.B),this.L!=2&&(ar(),st(17)),ni(this),this.s=2,Fs(this)):em(this,this.Y-t)};function Fs(t){t.l.H==0||t.J||Cm(t.l,t)}function ni(t){yl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cu(t.V),z_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qa(n.i,t))){if(!t.K&&Qa(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Oo(n),Tl(n);else break e;xu(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=br(Je(n.ib,n),6e3));if(1>=am(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ii(n,11)}else if((t.K||n.g==t)&&Oo(n),!nr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Pu(r,r.h),r.h=null))}if(i.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,Te(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=bm(i,i.J?i.pa:null,i.Y),o.K){cm(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.C&&(yl(l),Ar(l)),i.g=o}else Em(i);0<n.j.length&&bl(n)}else c[0]!="stop"&&c[0]!="close"||ii(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ii(n,7):Ou(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ar(4)}catch{}}function OS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function xS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function tm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xS(t),i=OS(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var nm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function li(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof li){this.h=t.h,No(this,t.j),this.s=t.s,this.g=t.g,ko(this,t.m),this.l=t.l;var e=t.i,n=new cr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zf(this,n),this.o=t.o}else t&&(e=String(t).match(nm))?(this.h=!1,No(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),ko(this,e[4]),this.l=bs(e[5]||"",!0),zf(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ss(e,Kf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ss(e,Kf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ss(n,n.charAt(0)=="/"?FS:LS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ss(n,$S)),t.join("")};function pn(t){return new li(t)}function No(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ko(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zf(t,e,n){e instanceof cr?(t.i=e,BS(t.i,t.h)):(n||(e=Ss(e,US)),t.i=new cr(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function El(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ss(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kf=/[#\/\?@]/g,LS=/[#\?:]/g,FS=/[#\?]/g,US=/[#\?@]/g,$S=/#/g;function cr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jn(t){t.g||(t.g=new Map,t.h=0,t.i&&DS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=cr.prototype;O.add=function(t,e){jn(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function im(t,e){jn(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sm(t,e){return jn(t),e=cs(t,e),t.g.has(e)}O.forEach=function(t,e){jn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};O.ta=function(){jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};O.Z=function(t){jn(this);let e=[];if(typeof t=="string")sm(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return jn(this),this.i=null,t=cs(this,t),sm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rm(t,e,n){im(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),du(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BS(t,e){e&&!t.j&&(jn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(im(this,i),rm(this,s,n))},t)),t.j=e}var HS=class{constructor(t,e){this.g=t,this.map=e}};function om(t){this.l=t||VS,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var VS=10;function lm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function am(t){return t.h?1:t.g?t.g.size:0}function Qa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pu(t,e){t.g?t.g.add(e):t.h=e}function cm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}om.prototype.cancel=function(){if(this.i=um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function um(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return du(t.i)}var jS=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function WS(){this.g=new jS}function zS(t,e,n){const i=n||"";try{tm(t,function(s,r){let o=s;Ir(s)&&(o=Eu(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function KS(t,e){const n=new ml;if(K.Image){const i=new Image;i.onload=jr(zr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=jr(zr,n,i,"TestLoadImage: error",!1,e),i.onabort=jr(zr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=jr(zr,n,i,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function zr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function wl(t){this.l=t.ec||null,this.j=t.ob||!1}je(wl,Su);wl.prototype.g=function(){return new Cl(this.l,this.j)};wl.prototype.i=function(t){return function(){return t}}({});function Cl(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Cl,Ve);var Nu=0;O=Cl.prototype;O.open=function(t,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ur(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=Nu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function hm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pr(this):ur(this),this.readyState==3&&hm(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Pr(this))};O.Ya=function(t){this.g&&(this.response=t,Pr(this))};O.ka=function(){this.g&&Pr(this)};function Pr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ur(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ur(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qS=K.JSON.parse;function Pe(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fm,this.L=this.M=!1}je(Pe,Ve);var fm="",GS=/^https?$/i,YS=["POST","PUT"];O=Pe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qa.g(),this.C=this.u?Wf(this.u):Wf(qa),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){qf(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=K.FormData&&t instanceof K.FormData,!(0<=N_(YS,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gm(this),0<this.B&&((this.L=XS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=Iu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){qf(this,r)}};function XS(t){return ir&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof fu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dm(t),Il(t)}function dm(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Il(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Il(this,!0)),Pe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?pm(this):this.kb())};O.kb=function(){pm(this)};function pm(t){if(t.h&&typeof fu<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)Iu(t.La,0,t);else if(Ke(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(nm)[1]||null;!s&&K.self&&K.self.location&&(s=K.self.location.protocol.slice(0,-1)),i=!GS.test(s?s.toLowerCase():"")}n=i}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var r=2<Wt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",dm(t)}}finally{Il(t)}}}}function Il(t,e){if(t.g){gm(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=i}catch{}}}function gm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qS(e)}};function Gf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function QS(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(nr(t[i]))continue;var n=ES(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}dS(e,function(i){return i.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _m(t){let e="";return gu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ku(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=_m(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mm(t){this.Ga=0,this.j=[],this.l=new ml,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ms("baseRetryDelayMs",5e3,t),this.hb=ms("retryDelaySeedMs",1e4,t),this.eb=ms("forwardChannelMaxRetries",2,t),this.xa=ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new om(t&&t.concurrentRequestLimit),this.Ja=new WS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=mm.prototype;O.ra=8;O.H=1;function Ou(t){if(vm(t),t.H==3){var e=t.W++,n=pn(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),Nr(t,n),e=new Rr(t,t.l,e),e.L=2,e.A=El(pn(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.A,n=!0),n||(e.g=Sm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ar(e)}Tm(t)}function Tl(t){t.g&&(Du(t),t.g.cancel(),t.g=null)}function vm(t){Tl(t),t.u&&(K.clearTimeout(t.u),t.u=null),Oo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function bl(t){if(!lm(t.i)&&!t.m){t.m=!0;var e=t.Na;rr||V_(),or||(rr(),or=!0),wu.add(e,t),t.C=0}}function JS(t,e){return am(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=br(Je(t.Na,t,e),Im(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Rr(this,this.l,t);let r=this.s;if(this.U&&(r?(r=D_(r),M_(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ym(this,s,e),n=pn(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Nr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(_m(r)))+"&"+e:this.o&&ku(n,this.o,r)),Pu(this.i,s),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),s.aa=!0,Ya(s,n,null)):Ya(s,n,e),this.H=2}}else this.H==3&&(t?Yf(this,t):this.j.length==0||lm(this.i)||Yf(this))};function Yf(t,e){var n;e?n=e.m:n=t.W++;const i=pn(t.I);Te(i,"SID",t.K),Te(i,"RID",n),Te(i,"AID",t.V),Nr(t,i),t.o&&t.s&&ku(i,t.o,t.s),n=new Rr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ym(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Pu(t.i,n),Ya(n,i,e)}function Nr(t,e){t.na&&gu(t.na,function(n,i){Te(e,i,n)}),t.h&&tm({},function(n,i){Te(e,i,n)})}function ym(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Je(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].g;const u=s[a].map;if(c-=r,0>c)r=Math.max(0,s[a].g-100),l=!1;else try{zS(u,o,"req"+c+"_")}catch{i&&i(u)}}if(l){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Em(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rr||V_(),or||(rr(),or=!0),wu.add(e,t),t.A=0}}function xu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=br(Je(t.Ma,t),Im(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,wm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=br(Je(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Tl(this),wm(this))};function Du(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new Rr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pn(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),Nr(t,e),t.o&&t.s&&ku(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=El(pn(e)),n.u=null,n.S=!0,Q_(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Tl(this),xu(this),st(19))};function Oo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Cm(t,e){var n=null;if(t.g==e){Oo(t),Du(t),t.g=null;var i=2}else if(Qa(t.i,e))n=e.F,cm(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;i=Tu(),Ke(i,new G_(i,n)),bl(t)}else Em(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(i==1&&JS(t,e)||i==2&&xu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ii(t,5);break;case 4:ii(t,10);break;case 3:ii(t,6);break;default:ii(t,2)}}}function Im(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Je(t.pb,t);n||(n=new li("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||No(n,"https"),El(n)),KS(n.toString(),i)}else st(2);t.H=0,t.h&&t.h.za(e),Tm(t),vm(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function Tm(t){if(t.H=0,t.ma=[],t.h){const e=um(t.i);(e.length!=0||t.j.length!=0)&&(Uf(t.ma,e),Uf(t.ma,t.j),t.i.i.length=0,du(t.j),t.j.length=0),t.h.ya()}}function bm(t,e,n){var i=n instanceof li?pn(n):new li(n);if(i.g!="")e&&(i.g=e+"."+i.g),ko(i,i.m);else{var s=K.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new li(null);i&&No(r,i),e&&(r.g=e),s&&ko(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Te(i,n,e),Te(i,"VER",t.ra),Nr(t,i),i}function Sm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new wl({ob:n})):new Pe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Rm(){}O=Rm.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Tt(t,e){Ve.call(this),this.g=new mm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!nr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}je(Tt,Ve);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;st(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bm(t,null,t.Y),bl(t)};Tt.prototype.close=function(){Ou(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eu(t),t=n);e.j.push(new HS(e.fb++,t)),e.H==3&&bl(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Ou(this.g),delete this.g,Tt.$.N.call(this)};function Am(t){Ru.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(Am,Ru);function Pm(){Au.call(this),this.status=1}je(Pm,Au);function us(t){this.g=t}je(us,Rm);us.prototype.Ba=function(){Ke(this.g,"a")};us.prototype.Aa=function(t){Ke(this.g,new Am(t))};us.prototype.za=function(t){Ke(this.g,new Pm)};us.prototype.ya=function(){Ke(this.g,"b")};function ZS(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(Qt,ZS);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ta(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)ta(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){ta(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){ta(this,i),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function pe(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var eR={};function Mu(t){return-128<=t&&128>t?lS(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return Mi;if(0>t)return We(zt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ja;return new pe(e,0)}function Nm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(Nm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),i=Mi,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=zt(Math.pow(e,r)),i=i.R(r).add(zt(o))):(i=i.R(n),i=i.add(zt(o)))}return i}var Ja=4294967296,Mi=Mu(0),Za=Mu(1),Xf=Mu(16777216);O=pe.prototype;O.ea=function(){if(Ct(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ja+i)*e,e*=Ja}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(Ct(this))return"-"+We(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,i="";;){var s=Do(n,e).g;n=xo(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,cn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}O.X=function(t){return t=xo(this,t),Ct(t)?-1:cn(t)?0:1};function We(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new pe(n,~t.h).add(Za)}O.abs=function(){return Ct(this)?We(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function xo(t,e){return t.add(We(e))}O.R=function(t){if(cn(this)||cn(t))return Mi;if(Ct(this))return Ct(t)?We(this).R(We(t)):We(We(this).R(t));if(Ct(t))return We(this.R(We(t)));if(0>this.X(Xf)&&0>t.X(Xf))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=t.D(s)>>>16,a=t.D(s)&65535;n[2*i+2*s]+=o*a,Kr(n,2*i+2*s),n[2*i+2*s+1]+=r*a,Kr(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,Kr(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,Kr(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new pe(n,0)};function Kr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vs(t,e){this.g=t,this.h=e}function Do(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new vs(Mi,Mi);if(Ct(t))return e=Do(We(t),e),new vs(We(e.g),We(e.h));if(Ct(e))return e=Do(t,We(e)),new vs(We(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Za,i=e;0>=i.X(t);)n=Qf(n),i=Qf(i);var s=Ci(n,1),r=Ci(i,1);for(i=Ci(i,2),n=Ci(n,2);!cn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ci(i,1),n=Ci(n,1)}return e=xo(t,s.R(e)),new vs(s,e)}for(s=Mi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=zt(n),o=r.R(e);Ct(o)||0<o.X(t);)n-=i,r=zt(n),o=r.R(e);cn(r)&&(r=Za),s=s.add(r),t=xo(t,o)}return new vs(s,t)}O.gb=function(t){return Do(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new pe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new pe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new pe(n,this.h^t.h)};function Qf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new pe(n,t.h)}function Ci(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new pe(s,t.h)}Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;bu.NO_ERROR=0;bu.TIMEOUT=8;bu.HTTP_ERROR=6;AS.COMPLETE="complete";PS.EventType=Sr;Sr.OPEN="a";Sr.CLOSE="b";Sr.ERROR="c";Sr.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=zt;pe.fromString=Nm;var tR=pe;const Jf="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Sl="10.8.0";/**
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
 */const Mo=new pr("@firebase/firestore");function vt(t,...e){if(Mo.logLevel<=he.DEBUG){const n=e.map(km);Mo.debug(`Firestore (${Sl}): ${t}`,...n)}}function Lu(t,...e){if(Mo.logLevel<=he.ERROR){const n=e.map(km);Mo.error(`Firestore (${Sl}): ${t}`,...n)}}function km(t){if(typeof t=="string")return t;try{/**
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
 */function Om(t="Unexpected state"){const e=`FIRESTORE (${Sl}) INTERNAL ASSERTION FAILED: `+t;throw Lu(e),new Error(e)}function ec(t,e){t||Om()}/**
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
 */const _t={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mt extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class sR{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new Li;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Li,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ec(typeof i.accessToken=="string"),new nR(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ec(e===null||typeof e=="string"),new at(e)}}class rR{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oR{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new rR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,vt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ec(typeof n.token=="string"),this.R=n.token,new lR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class uR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=cR(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function xm(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hR{constructor(e,n,i,s,r,o,l,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Zf,ie;(ie=Zf||(Zf={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new tR([4294967295,4294967295],0);function na(){return typeof document<"u"?document:null}/**
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
 */class fR{constructor(e,n,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-i);s>0&&vt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Fu{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new Fu(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new mt(_t.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dR(t,e){if(Lu("AsyncQueue",`${e}: ${t}`),xm(t))return new mt(_t.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pR{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=uR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{vt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(vt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new mt(_t.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=dR(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function Dm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ed=new Map;function gR(t,e,n,i){if(e===!0&&i===!0)throw new mt(_t.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class td{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new mt(_t.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new mt(_t.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new mt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new mt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new mt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _R{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new mt(_t.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new mt(_t.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new td(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new iR;switch(i.type){case"firstParty":return new oR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new mt(_t.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=ed.get(n);i&&(vt("ComponentProvider","Removing Datastore"),ed.delete(n),i.terminate())}(this),Promise.resolve()}}/**
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
 */class mR{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new fR(this,"async_queue_retry"),this._u=()=>{const n=na();n&&vt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Li;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!xm(e))throw e;vt("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(i=>{this.ru=i,this.iu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Lu("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.iu=!1,i))));return this.Xa=n,n}enqueueAfterDelay(e,n,i){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Fu.createAndSchedule(this,e,n,i,r=>this.lu(r));return this.nu.push(s),s}au(){this.ru&&Om()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class vR extends _R{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new mR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yR(this),this._firestoreClient.terminate()}}function yR(t){var e,n,i;const s=t._freezeSettings(),r=function(l,a,c,u){return new hR(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Dm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new pR(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Sl=s})(is),Yt(new Dt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new vR(new sR(i.getProvider("auth-internal")),new aR(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new mt(_t.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),yt(Jf,"4.4.2",e),yt(Jf,"4.4.2","esm2017")})();/**
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
 */const Mm="firebasestorage.googleapis.com",ER="storageBucket",wR=2*60*1e3,CR=10*60*1e3;/**
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
 */class en extends _n{constructor(e,n,i=0){super(ia(e),`Firebase Storage: ${n} (${ia(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,en.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Jt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Jt||(Jt={}));function ia(t){return"storage/"+t}function IR(){const t="An unknown error occurred, please check the error payload for server response.";return new en(Jt.UNKNOWN,t)}function TR(){return new en(Jt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bR(){return new en(Jt.CANCELED,"User canceled the upload/download.")}function SR(t){return new en(Jt.INVALID_URL,"Invalid URL '"+t+"'.")}function RR(t){return new en(Jt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nd(t){return new en(Jt.INVALID_ARGUMENT,t)}function Lm(){return new en(Jt.APP_DELETED,"The Firebase app was deleted.")}function AR(t){return new en(Jt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(i.path==="")return i;throw RR(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),_={bucket:1,path:3},v=n===Mm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${v}/${s}/${b}`,"i"),F=[{regex:l,indices:a,postModify:r},{regex:p,indices:_,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<F.length;P++){const W=F[P],ce=W.regex.exec(e);if(ce){const be=ce[W.indices.bucket];let X=ce[W.indices.path];X||(X=""),i=new kt(be,X),W.postModify(i);break}}if(i==null)throw SR(e);return i}}class PR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NR(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(p,a())},b)}function f(){r&&clearTimeout(r)}function p(b,...A){if(c){f();return}if(b){f(),u.call(null,b,...A);return}if(a()||o){f(),u.call(null,b,...A);return}i<64&&(i*=2);let F;l===1?(l=2,F=0):F=(i+Math.random())*1e3,h(F)}let _=!1;function v(b){_||(_=!0,f(),!c&&(s!==null?(b||(l=2),clearTimeout(s),h(0)):b||(l=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function kR(t){t(!1)}/**
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
 */function OR(t){return t!==void 0}function id(t,e,n,i){if(i<e)throw nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw nd(`Invalid value for '${t}'. Expected ${n} or less.`)}function xR(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Fo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fo||(Fo={}));/**
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
 */function DR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class MR{constructor(e,n,i,s,r,o,l,a,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new qr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Fo.NO_ERROR,a=r.getStatus();if(!l||DR(a,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Fo.ABORT;i(!1,new qr(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new qr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());OR(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=IR();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Lm():bR();o(a)}else{const a=TR();o(a)}};this.canceled_?n(!1,new qr(!1,null,!0)):this.backoffId_=NR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function LR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $R(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BR(t,e,n,i,s,r,o=!0){const l=xR(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return UR(c,e),LR(c,n),FR(c,r),$R(c,i),new MR(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function HR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Uo{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Uo(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VR(this._location.path)}get storage(){return this._service}get parent(){const e=HR(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new Uo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AR(e)}}function sd(t,e){const n=e==null?void 0:e[ER];return n==null?null:kt.makeFromBucketSpec(n,t)}class jR{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Mm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wR,this._maxUploadRetryTime=CR,this._requests=new Set,s!=null?this._bucket=kt.makeFromBucketSpec(s,this._host):this._bucket=sd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=sd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){id("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){id("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Uo(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new PR(Lm());{const o=BR(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const rd="@firebase/storage",od="0.12.1";/**
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
 */const WR="storage";function zR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jR(n,i,s,e,is)}function KR(){Yt(new Dt(WR,zR,"PUBLIC").setMultipleInstances(!0)),yt(rd,od,""),yt(rd,od,"esm2017")}KR();const sa=new WeakMap;function Fm(t,e){return sa.has(e)||sa.set(e,t||{f:{},r:{},s:{},u:{}}),sa.get(e)}function qR(t,e,n,i){if(!t)return n;const[s,r]=Um(t);if(!s)return n;const o=Fm(void 0,i)[s]||{},l=e||r;return l&&l in o?o[l]:n}function GR(t,e,n,i){if(!t)return;const[s,r]=Um(t);if(!s)return;const o=Fm(void 0,i)[s],l=e||r;if(l)return n.then(a=>{o[l]=a}).catch(wt),l}function Um(t){return B0(t)||H0(t)?["f",t.path]:V0(t)?["r",t.toString()]:j0(t)?["s",t.toString()]:[]}const ra=new WeakMap;function YR(t,e,n){const i=lg();ra.has(i)||ra.set(i,new Map);const s=ra.get(i),r=GR(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):wt}function XR(t){if(!t.exists())return null;const e=t.val();return ss(e)?Object.defineProperty(e,"id",{value:t.key}):{$value:e,id:t.key}}function ys(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const Uu={reset:!1,serialize:XR,wait:!0};function QR(t,e,n,i,s){const r=Object.assign({},Uu,s);let o=wt;function l(a){const c=r.serialize(a);t.value=c,n(c)}return r.once?uu(e).then(l).catch(i):o=P_(e,l,i),a=>{if(o(),a){const c=typeof a=="function"?a():null;t.value=c}}}function JR(t,e,n,i,s){const r=Object.assign({},Uu,s);let o=r.wait?[]:t;r.wait||(t.value=[]);let l=wt,a=wt,c=wt,u=wt,h=wt;return r.once?uu(e).then(f=>{const p=[];f.forEach(_=>{p.push(r.serialize(_))}),n(t.value=p)}).catch(i):(l=Bb(e,(f,p)=>{const _=Gn(o),v=p?ys(_,p)+1:0;_.splice(v,0,r.serialize(f))},i),c=jb(e,f=>{const p=Gn(o);p.splice(ys(p,f.key),1)},i),a=Hb(e,f=>{const p=Gn(o);p.splice(ys(p,f.key),1,r.serialize(f))},i),u=Vb(e,(f,p)=>{const _=Gn(o),v=ys(_,f.key),b=_.splice(v,1)[0],A=p?ys(_,p)+1:0;_.splice(A,0,b)},i),h=P_(e,()=>{const f=Gn(o);r.wait&&(t.value=f,o=t),n(f),h()},i)),f=>{if(h(),l(),c(),a(),u(),f){const p=typeof f=="function"?f():[];t.value=p}}}function $m(t,e={},n=!1){let i=wt;const s=Object.assign({},Uu,e),r=Gn(t),o=s.target||me();z0()&&(s.once=!0);const a=qR(r,s.ssrKey,o.value,lg());o.value=a;let u=!(n?(a||[]).length>0:a!==void 0);const h=me(),f=me(!1),p=qd(),_=hc();let v=wt;function b(){const F=Gn(t),P=new Promise((W,ce)=>{if(i(s.reset),!F)return i=wt,W(null);f.value=u,u=!0,Array.isArray(o.value)?i=JR(o,F,W,ce,s):i=QR(o,F,W,ce,s)}).catch(W=>{throw p.value===P&&(h.value=W),W}).finally(()=>{p.value===P&&(f.value=!1)});p.value=P}let A=wt;Se(t)&&(A=hn(t,b)),b(),r&&(v=YR(p.value,r,s.ssrKey)),_&&(kd(x),Cp()&&up(()=>p.value));function x(F=s.reset){A(),v(),i(F)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>h},pending:{get:()=>f},promise:{get:()=>p},stop:{get:()=>x}})}function Bm(t,e){const n=me([]);return $m(t,{target:n,...e},!0)}function Hm(t,e){const n=me();return $m(t,{target:n,...e})}function ZR(t,{firebaseApp:e,modules:n=[]}){t.provide(og,e);for(const i of n)i(e,t)}const eA={apiKey:"AIzaSyC8tne9IlUq_Wt-nTH1ZUhP_rRsnqcPQks",authDomain:"mv-test-531a6.firebaseapp.com",projectId:"mv-test-531a6",storageBucket:"mv-test-531a6.appspot.com",messagingSenderId:"1059321271037",appId:"1:1059321271037:web:3da495575653c13ed5a494",databaseURL:"https://mv-test-531a6-default-rtdb.firebaseio.com"},Vm=Vp(eA),Ii=Qb(Vm),Sn={db:Ii,ref(t){return Ts(Ii,t)},set(t,e){console.log(t,e),Po(Ts(Ii,t),e)},push(t,e){const n=Ub(Ts(Ii,t));Po(n,e)},del(t){$b(Ts(Ii,t))}};window.db=Ii;window.dbRef=Ts;window.get=uu;/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ti=typeof window<"u";function tA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function oa(t,e){const n={};for(const i in e){const s=e[i];n[i]=Lt(s)?s.map(t):t(s)}return n}const Us=()=>{},Lt=Array.isArray,nA=/\/$/,iA=t=>t.replace(nA,"");function la(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=lA(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function sA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rA(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Yi(e.matched[i],n.matched[s])&&jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oA(t[n],e[n]))return!1;return!0}function oA(t,e){return Lt(t)?ad(t,e):Lt(e)?ad(e,t):t===e}function ad(t,e){return Lt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function lA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var hr;(function(t){t.pop="pop",t.push="push"})(hr||(hr={}));var $s;(function(t){t.back="back",t.forward="forward",t.unknown=""})($s||($s={}));function aA(t){if(!t)if(Ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iA(t)}const cA=/^[^#]+#/;function uA(t,e){return t.replace(cA,"#")+e}function hA(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Rl=()=>({left:window.pageXOffset,top:window.pageYOffset});function fA(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function dA(t,e){tc.set(t,e)}function pA(t){const e=tc.get(t);return tc.delete(t),e}let gA=()=>location.protocol+"//"+location.host;function Wm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),ld(a,"")}return ld(n,t)+i+s}function _A(t,e,n,i){let s=[],r=[],o=null;const l=({state:f})=>{const p=Wm(t,location),_=n.value,v=e.value;let b=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}b=v?f.position-v.position:0}else i(p);s.forEach(A=>{A(n.value,_,{delta:b,type:hr.pop,direction:b?b>0?$s.forward:$s.back:$s.unknown})})};function a(){o=n.value}function c(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Rl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function ud(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Rl():null}}function mA(t){const{history:e,location:n}=window,i={value:Wm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:gA()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(a,c){const u=fe({},e.state,ud(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,u,!0),i.value=a}function l(a,c){const u=fe({},s.value,e.state,{forward:a,scroll:Rl()});r(u.current,u,!0);const h=fe({},ud(i.value,a,null),{position:u.position+1},c);r(a,h,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function vA(t){t=aA(t);const e=mA(t),n=_A(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=fe({location:"",base:t,go:i,createHref:uA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),vA(t)}function EA(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Km=Symbol("");var hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hd||(hd={}));function Xi(t,e){return fe(new Error,{type:t,[Km]:!0},e)}function sn(t,e){return t instanceof Error&&Km in t&&(e==null||!!(t.type&e))}const fd="[^/]+?",wA={sensitive:!1,strict:!1,start:!0,end:!0},CA=/[.+*?^${}()[\]/\\]/g;function IA(t,e){const n=fe({},wA,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(CA,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:v,optional:b,regexp:A}=f;r.push({name:_,repeatable:v,optional:b});const x=A||fd;if(x!==fd){p+=10;try{new RegExp(`(${x})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+P.message)}}let F=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(F=b&&c.length<2?`(?:/${F})`:"/"+F),b&&(F+="?"),s+=F,p+=20,b&&(p+=-8),v&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=r[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:b}=p,A=_ in c?c[_]:"";if(Lt(A)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=Lt(A)?A.join("/"):A;if(!x)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:l,stringify:a}}function TA(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bA(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=TA(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(dd(i))return 1;if(dd(s))return-1}return s.length-i.length}function dd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SA={type:0,value:""},RA=/[a-zA-Z0-9_]/;function AA(t){if(!t)return[[]];if(t==="/")return[[SA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:a==="("?n=2:RA.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function PA(t,e,n){const i=IA(AA(t.path),n),s=fe(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NA(t,e){const n=[],i=new Map;e=_d({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const p=!f,_=kA(u);_.aliasOf=f&&f.record;const v=_d(e,u),b=[_];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of F)b.push(fe({},_,{components:f?f.record.components:_.components,path:P,aliasOf:f?f.record:_}))}let A,x;for(const F of b){const{path:P}=F;if(h&&P[0]!=="/"){const W=h.record.path,ce=W[W.length-1]==="/"?"":"/";F.path=h.record.path+(P&&ce+P)}if(A=PA(F,h,v),f?f.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),p&&u.name&&!gd(A)&&o(u.name)),_.children){const W=_.children;for(let ce=0;ce<W.length;ce++)r(W[ce],A,f&&f.children[ce])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return x?()=>{o(x)}:Us}function o(u){if(zm(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&bA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gd(u)&&i.set(u.record.name,u)}function c(u,h){let f,p={},_,v;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Xi(1,{location:u});v=f.record.name,p=fe(pd(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&pd(u.params,f.keys.map(x=>x.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=n.find(x=>x.re.test(_)),f&&(p=f.parse(_),v=f.record.name);else{if(f=h.name?i.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw Xi(1,{location:u,currentLocation:h});v=f.record.name,p=fe({},h.params,u.params),_=f.stringify(p)}const b=[];let A=f;for(;A;)b.unshift(A.record),A=A.parent;return{name:v,path:_,params:p,matched:b,meta:xA(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function pd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function kA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:OA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function OA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xA(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function _d(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function qm(t,e){return e.children.some(n=>n===t||qm(t,n))}const Gm=/#/g,DA=/&/g,MA=/\//g,LA=/=/g,FA=/\?/g,Ym=/\+/g,UA=/%5B/g,$A=/%5D/g,Xm=/%5E/g,BA=/%60/g,Qm=/%7B/g,HA=/%7C/g,Jm=/%7D/g,VA=/%20/g;function $u(t){return encodeURI(""+t).replace(HA,"|").replace(UA,"[").replace($A,"]")}function jA(t){return $u(t).replace(Qm,"{").replace(Jm,"}").replace(Xm,"^")}function nc(t){return $u(t).replace(Ym,"%2B").replace(VA,"+").replace(Gm,"%23").replace(DA,"%26").replace(BA,"`").replace(Qm,"{").replace(Jm,"}").replace(Xm,"^")}function WA(t){return nc(t).replace(LA,"%3D")}function zA(t){return $u(t).replace(Gm,"%23").replace(FA,"%3F")}function KA(t){return t==null?"":zA(t).replace(MA,"%2F")}function $o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qA(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ym," "),o=r.indexOf("="),l=$o(o<0?r:r.slice(0,o)),a=o<0?null:$o(r.slice(o+1));if(l in e){let c=e[l];Lt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function md(t){let e="";for(let n in t){const i=t[n];if(n=WA(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(i)?i.map(r=>r&&nc(r)):[i&&nc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function GA(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Lt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const YA=Symbol(""),vd=Symbol(""),Al=Symbol(""),Bu=Symbol(""),ic=Symbol("");function Es(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Xi(4,{from:n,to:e})):h instanceof Error?l(h):EA(h)?l(Xi(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function aa(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(XA(l)){const c=(l.__vccOpts||l)[e];c&&s.push(bn(c,n,i,r,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=tA(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&bn(f,n,i,r,o)()}))}}return s}function XA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yd(t){const e=ut(Al),n=ut(Bu),i=ze(()=>e.resolve(D(t.to))),s=ze(()=>{const{matched:a}=i.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Yi.bind(null,u));if(f>-1)return f;const p=Ed(a[c-2]);return c>1&&Ed(u)===p&&h[h.length-1].path!==p?h.findIndex(Yi.bind(null,a[c-2])):f}),r=ze(()=>s.value>-1&&ZA(n.params,i.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&jm(n.params,i.value.params));function l(a={}){return JA(a)?e[D(t.replace)?"replace":"push"](D(t.to)).catch(Us):Promise.resolve()}return{route:i,href:ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const QA=Cc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yd,setup(t,{slots:e}){const n=dr(yd(t)),{options:i}=ut(Al),s=ze(()=>({[wd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),sc=QA;function JA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZA(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Lt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t??e??n,eP=Cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ut(ic),s=ze(()=>t.route||i.value),r=ut(vd,0),o=ze(()=>{let c=D(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=ze(()=>s.value.matched[o.value]);Xr(vd,ze(()=>o.value+1)),Xr(YA,l),Xr(ic,s);const a=me();return hn(()=>[a.value,l.value,t.name],([c,u,h],[f,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Yi(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Cd(n.default,{Component:f,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=bp(f,fe({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Cd(n.default,{Component:b,route:c})||b}}});function Cd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zm=eP;function tP(t){const e=NA(t.routes,t),n=t.parseQuery||qA,i=t.stringifyQuery||md,s=t.history,r=Es(),o=Es(),l=Es(),a=qd(Cn);let c=Cn;Ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oa.bind(null,E=>""+E),h=oa.bind(null,KA),f=oa.bind(null,$o);function p(E,L){let k,$;return zm(E)?(k=e.getRecordMatcher(E),$=L):$=E,e.addRoute($,k)}function _(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function A(E,L){if(L=fe({},L||a.value),typeof E=="string"){const m=la(n,E,L.path),y=e.resolve({path:m.path},L),w=s.createHref(m.fullPath);return fe(m,y,{params:f(y.params),hash:$o(m.hash),redirectedFrom:void 0,href:w})}let k;if("path"in E)k=fe({},E,{path:la(n,E.path,L.path).path});else{const m=fe({},E.params);for(const y in m)m[y]==null&&delete m[y];k=fe({},E,{params:h(m)}),L.params=h(L.params)}const $=e.resolve(k,L),ue=E.hash||"";$.params=u(f($.params));const d=sA(i,fe({},E,{hash:jA(ue),path:$.path})),g=s.createHref(d);return fe({fullPath:d,hash:ue,query:i===md?GA(E.query):E.query||{}},$,{redirectedFrom:void 0,href:g})}function x(E){return typeof E=="string"?la(n,E,a.value.path):fe({},E)}function F(E,L){if(c!==E)return Xi(8,{from:L,to:E})}function P(E){return be(E)}function W(E){return P(fe(x(E),{replace:!0}))}function ce(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:k}=L;let $=typeof k=="function"?k(E):k;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=x($):{path:$},$.params={}),fe({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function be(E,L){const k=c=A(E),$=a.value,ue=E.state,d=E.force,g=E.replace===!0,m=ce(k);if(m)return be(fe(x(m),{state:typeof m=="object"?fe({},ue,m.state):ue,force:d,replace:g}),L||k);const y=k;y.redirectedFrom=L;let w;return!d&&rA(i,$,k)&&(w=Xi(16,{to:y,from:$}),Ut($,$,!0,!1)),(w?Promise.resolve(w):_e(y,$)).catch(I=>sn(I)?sn(I,2)?I:vn(I):ae(I,y,$)).then(I=>{if(I){if(sn(I,2))return be(fe({replace:g},x(I.to),{state:typeof I.to=="object"?fe({},ue,I.to.state):ue,force:d}),L||y)}else I=et(y,$,!0,g,ue);return Fe(y,$,I),I})}function X(E,L){const k=F(E,L);return k?Promise.reject(k):Promise.resolve()}function J(E){const L=_i.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function _e(E,L){let k;const[$,ue,d]=nP(E,L);k=aa($.reverse(),"beforeRouteLeave",E,L);for(const m of $)m.leaveGuards.forEach(y=>{k.push(bn(y,E,L))});const g=X.bind(null,E,L);return k.push(g),Ge(k).then(()=>{k=[];for(const m of r.list())k.push(bn(m,E,L));return k.push(g),Ge(k)}).then(()=>{k=aa(ue,"beforeRouteUpdate",E,L);for(const m of ue)m.updateGuards.forEach(y=>{k.push(bn(y,E,L))});return k.push(g),Ge(k)}).then(()=>{k=[];for(const m of d)if(m.beforeEnter)if(Lt(m.beforeEnter))for(const y of m.beforeEnter)k.push(bn(y,E,L));else k.push(bn(m.beforeEnter,E,L));return k.push(g),Ge(k)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),k=aa(d,"beforeRouteEnter",E,L),k.push(g),Ge(k))).then(()=>{k=[];for(const m of o.list())k.push(bn(m,E,L));return k.push(g),Ge(k)}).catch(m=>sn(m,8)?m:Promise.reject(m))}function Fe(E,L,k){l.list().forEach($=>J(()=>$(E,L,k)))}function et(E,L,k,$,ue){const d=F(E,L);if(d)return d;const g=L===Cn,m=Ti?history.state:{};k&&($||g?s.replace(E.fullPath,fe({scroll:g&&m&&m.scroll},ue)):s.push(E.fullPath,ue)),a.value=E,Ut(E,L,k,g),vn()}let rt;function tn(){rt||(rt=s.listen((E,L,k)=>{if(!Or.listening)return;const $=A(E),ue=ce($);if(ue){be(fe(ue,{replace:!0}),$).catch(Us);return}c=$;const d=a.value;Ti&&dA(cd(d.fullPath,k.delta),Rl()),_e($,d).catch(g=>sn(g,12)?g:sn(g,2)?(be(g.to,$).then(m=>{sn(m,20)&&!k.delta&&k.type===hr.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(k.delta&&s.go(-k.delta,!1),ae(g,$,d))).then(g=>{g=g||et($,d,!1),g&&(k.delta&&!sn(g,8)?s.go(-k.delta,!1):k.type===hr.pop&&sn(g,20)&&s.go(-1,!1)),Fe($,d,g)}).catch(Us)}))}let tt=Es(),Y=Es(),oe;function ae(E,L,k){vn(E);const $=Y.list();return $.length?$.forEach(ue=>ue(E,L,k)):console.error(E),Promise.reject(E)}function nn(){return oe&&a.value!==Cn?Promise.resolve():new Promise((E,L)=>{tt.add([E,L])})}function vn(E){return oe||(oe=!E,tn(),tt.list().forEach(([L,k])=>E?k(E):L()),tt.reset()),E}function Ut(E,L,k,$){const{scrollBehavior:ue}=t;if(!Ti||!ue)return Promise.resolve();const d=!k&&pA(cd(E.fullPath,0))||($||!k)&&history.state&&history.state.scroll||null;return Ec().then(()=>ue(E,L,d)).then(g=>g&&fA(g)).catch(g=>ae(g,E,L))}const ot=E=>s.go(E);let gi;const _i=new Set,Or={currentRoute:a,listening:!0,addRoute:p,removeRoute:_,hasRoute:b,getRoutes:v,resolve:A,options:t,push:P,replace:W,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Y.add,isReady:nn,install(E){const L=this;E.component("RouterLink",sc),E.component("RouterView",Zm),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>D(a)}),Ti&&!gi&&a.value===Cn&&(gi=!0,P(s.location).catch(ue=>{}));const k={};for(const ue in Cn)Object.defineProperty(k,ue,{get:()=>a.value[ue],enumerable:!0});E.provide(Al,L),E.provide(Bu,Vd(k)),E.provide(ic,a);const $=E.unmount;_i.add(E),E.unmount=function(){_i.delete(E),_i.size<1&&(c=Cn,rt&&rt(),rt=null,a.value=Cn,gi=!1,oe=!1),$()}}};function Ge(E){return E.reduce((L,k)=>L.then(()=>J(k)),Promise.resolve())}return Or}function nP(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Yi(c,l))?i.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Yi(c,a))||s.push(a))}return[n,i,s]}function iP(){return ut(Al)}function sP(){return ut(Bu)}const rP={class:"navbar is-primary is-fixed-top",role:"navigation","aria-label":"main navigation"},oP={class:"navbar-menu"},lP={class:"navbar-start"},aP=C("div",{class:"pb-5"},null,-1),cP={__name:"App",setup(t){return(e,n)=>(z(),Q(ke,null,[C("nav",rP,[C("div",oP,[C("div",lP,[Re(D(sc),{class:"navbar-item",to:"/"},{default:so(()=>[Et(" Create ")]),_:1}),Re(D(sc),{class:"navbar-item",to:"/browse"},{default:so(()=>[Et(" Browse ")]),_:1})])])]),aP,Re(D(Zm))],64))}},uP="/assets/logo-vbv2nKyN.png",hP=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fP={},dP={style:{"font-size":"12px","font-weight":"600"}};function pP(t,e){return z(),Q("span",dP," ₹ ")}const gP=hP(fP,[["render",pP]]),_P={class:"obj-2-wrapper c1"},mP={class:"second-heading"},vP={key:0,class:"third-field"},yP={class:"second-field"},EP={key:0,class:"third-field"},wP={__name:"SecondProductC1",props:{config:{type:Object,default:{}}},setup(t){return vc(t),(n,i)=>(z(),Q("div",_P,[C("div",mP,[Et(ln(t.config.heading_2)+" ",1),t.config.third_field_type=="Top"?(z(),Q("span",vP,ln(t.config.field_3),1)):Oe("",!0)]),C("div",yP,[Et(ln(t.config.field_2)+" ",1),t.config.third_field_type=="Bottom"?(z(),Q("span",EP,ln(t.config.field_3),1)):Oe("",!0)])]))}},CP=["innerHTML"],IP={key:1},TP=["innerHTML"],ev={__name:"Marquee",props:{text:{type:String},textClass:{type:String},badge:{type:Boolean,default:!1}},setup(t){const e=t,{text:n,badge:i}=vc(e);function s(r){return console.log(i.value,r),i.value?r.split(`
`).slice(0,2).map(o=>{let l=o.replace("#","<strong>").replace("#","</strong>");return console.log(l),l}):r.split(`
`).slice(0,2)}return console.log(s(n.value)),(r,o)=>{const l=ty("Vue3Marquee");return s(D(n)).length>1?(z(),Jn(l,{key:0,vertical:!0,duration:2},{default:so(()=>[(z(!0),Q(ke,null,Ui(s(D(n)),a=>(z(),Q("div",{class:Mn(["mb-3",t.textClass])},[C("span",{innerHTML:a},null,8,CP)],2))),256))]),_:1})):(z(),Q("div",IP,[C("span",{innerHTML:s(D(n))[0]},null,8,TP)]))}}},bP={class:"second-heading"},SP={class:"second-field cta"},RP={__name:"SecondProductC2",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(z(),Q("div",{class:Mn("obj-2-wrapper c2 "+t.config.c2_color)},[C("div",bP,[Re(ev,{text:t.config.message_2,"text-class":"second-heading",badge:!0},null,8,["text"])]),C("div",SP,ln(t.config.field_cta),1)],2))}},AP={class:"obj-2-wrapper c1"},PP={class:"message-field"},NP={__name:"SecondProductC3",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(z(),Q("div",AP,[C("div",PP,[Re(ev,{text:t.config.message,"text-class":"message-field"},null,8,["text"])])]))}},kP={class:"product-base"},OP={key:0,class:"notif-dot"},xP=C("img",{class:"img",src:uP},null,-1),DP={class:"obj-1"},MP={class:"prod-heading"},LP={class:"main-field"},FP={class:"main-field-content"},UP={class:"obj-2"},rc={__name:"ProductBase",props:{config:{type:Object,default:{}}},setup(t){return(e,n)=>(z(),Q("div",kP,[t.config.notif_dot&&!(t.config.type=="Data + CTA"&&(t.config.c2_color=="orange"||t.config.c2_color=="red"))?(z(),Q("div",OP)):Oe("",!0),xP,C("span",DP,[C("div",MP,ln(t.config.product_name),1),C("div",LP,[t.config.rupee?(z(),Jn(gP,{key:0})):Oe("",!0),C("span",FP,ln(t.config.primary_field),1)])]),C("span",UP,[t.config.type=="Data Points"?(z(),Jn(wP,{key:0,config:t.config},null,8,["config"])):t.config.type=="Data + CTA"?(z(),Jn(RP,{key:1,config:t.config},null,8,["config"])):t.config.type=="Message"?(z(),Jn(NP,{key:2,config:t.config},null,8,["config"])):(z(),Q(ke,{key:3},[],64))])]))}},tv={type:"Data Points",product_name:"Example",rupee:!0,primary_field:"1,00,000",notif_dot:!1,heading_2:"Rewards Earned",c2_color:"orange",field_2:"₹1,000",message_2:"Next EMI #7 Days#",field_cta:"Pay Now",third_field_type:"Bottom",field_3:"₹37/day",message:`Large message that goes to 2 lines
This is the second paragraph`},nv=OE("config",{persist:!0,state:()=>JSON.parse(JSON.stringify(tv))}),$P={class:"container"},BP={class:"columns"},HP={class:"column is-6"},VP={class:"tabs is-centered"},jP=["onClick"],WP={class:"field"},zP=C("label",{class:"label"},"Product Name",-1),KP={class:"field has-addons"},qP={class:"control"},GP={class:"select"},YP=C("option",{value:!1},null,-1),XP=C("option",{value:!0},"₹",-1),QP=[YP,XP],JP={class:"control is-expanded"},ZP={class:"field"},eN=C("label",{class:"label"},"Primary Field",-1),tN={class:"control"},nN={class:"field"},iN=["disabled"],sN=["disabled"],rN=C("hr",null,null,-1),oN={key:0,class:"field is-horizontal"},lN={class:"field-body"},aN={class:"field"},cN=C("label",{class:"label"},"Secondary Field Title",-1),uN={class:"control"},hN={class:"field"},fN=C("label",{class:"label"},"Secondary Field Value",-1),dN={class:"control"},pN={class:"field"},gN=C("label",{class:"label"},"Status",-1),_N={class:"control"},mN={class:"radio"},vN={class:"radio"},yN={class:"radio"},EN={class:"field is-horizontal"},wN={class:"field-body"},CN={class:"field"},IN=C("label",{class:"label"},"Message",-1),TN={class:"control"},bN={class:"field"},SN=C("label",{class:"label"},"CTA Text",-1),RN={class:"control"},AN={key:2,class:"field is-horizontal"},PN={class:"field-body"},NN={class:"field"},kN=C("label",{class:"label"},"Third Field?",-1),ON={class:"control"},xN={class:"radio"},DN={class:"radio"},MN={class:"radio"},LN={class:"field"},FN=C("label",{class:"label"},"Third Field Value",-1),UN={class:"control"},$N=["disabled"],BN={key:3,class:"field"},HN=C("label",{class:"label"},"Message",-1),VN={class:"control"},jN={class:"buttons"},WN={class:"column is-6"},zN={class:"main"},KN=C("div",{class:"header"}," My Products ",-1),qN={key:0,class:"header mt-5"},GN={key:1,class:"button is-loading is-fullwidth"},YN=["onClick"],Id={__name:"HomeView",setup(t){const e=sP(),n=iP(),i=Bm(Sn.ref("/cards")),s=Hm(Sn.ref("/status")),r=nv(),o=me(["Data Points","Data + CTA","Message"]);function l(){r.$patch(tv),n.push("/")}function a(){let p=["type","product_name","rupee","primary_field","notif_dot"].concat({"Data Points":["heading_2","field_2","third_field_type","field_3"],"Data + CTA":["message_2","field_cta","c2_color"],Message:["message"]}[r.type]),_={};return p.forEach(v=>{_[v]=r[v]}),_.type=="Data + CTA"&&["orange","red"].includes(_.c2_color)&&(_.notif_dot=!1),_}function c(){a(),console.log(JSON.stringify(a())),e.params.id?Sn.set(`/cards/${e.params.id}`,a()):Sn.push("/cards",a())}function u(p){return i.value.filter(_=>_.product_name==p)}function h(p){Sn.del(`/cards/${p}`),n.push("/")}function f(p){r.$patch(p),n.push(`/edit/${p.id}`)}return(p,_)=>(z(),Q("div",$P,[C("div",BP,[C("div",HP,[C("div",VP,[C("ul",null,[(z(!0),Q(ke,null,Ui(o.value,v=>(z(),Q("li",{class:Mn({"is-active":D(r).type==v}),onClick:b=>{D(r).type=v,D(r).type=v}},[C("a",null,ln(v),1)],10,jP))),256))])]),C("div",WP,[zP,C("div",KP,[C("p",qP,[C("span",GP,[Ye(C("select",{"onUpdate:modelValue":_[0]||(_[0]=v=>D(r).rupee=v)},QP,512),[[mE,D(r).rupee]])])]),C("div",JP,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[1]||(_[1]=v=>D(r).product_name=v)},null,512),[[En,D(r).product_name]])])])]),C("div",ZP,[eN,C("div",tN,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[2]||(_[2]=v=>D(r).primary_field=v)},null,512),[[En,D(r).primary_field]])])]),C("div",nN,[C("label",{class:"checkbox label",disabled:D(r).type=="Data + CTA"&&(D(r).c2_color=="orange"||D(r).c2_color=="red")},[Ye(C("input",{type:"checkbox","onUpdate:modelValue":_[3]||(_[3]=v=>D(r).notif_dot=v),disabled:D(r).type=="Data + CTA"&&(D(r).c2_color=="orange"||D(r).c2_color=="red")},null,8,sN),[[_E,D(r).notif_dot]]),Et(" Notification Dot? ")],8,iN)]),rN,D(r).type=="Data Points"?(z(),Q("div",oN,[C("div",lN,[C("div",aN,[cN,C("div",uN,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[4]||(_[4]=v=>D(r).heading_2=v)},null,512),[[En,D(r).heading_2]])])]),C("div",hN,[fN,C("div",dN,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[5]||(_[5]=v=>D(r).field_2=v)},null,512),[[En,D(r).field_2]])])])])])):Oe("",!0),D(r).type=="Data + CTA"?(z(),Q(ke,{key:1},[C("div",pN,[gN,C("div",_N,[C("label",mN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[6]||(_[6]=v=>D(r).c2_color=v),value:"green"},null,512),[[yi,D(r).c2_color]]),Et(" Green ")]),C("label",vN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[7]||(_[7]=v=>D(r).c2_color=v),value:"orange"},null,512),[[yi,D(r).c2_color]]),Et(" Orange ")]),C("label",yN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[8]||(_[8]=v=>D(r).c2_color=v),value:"red"},null,512),[[yi,D(r).c2_color]]),Et(" Red ")])])]),C("div",EN,[C("div",wN,[C("div",CN,[IN,C("div",TN,[Ye(C("textarea",{class:"textarea","onUpdate:modelValue":_[9]||(_[9]=v=>D(r).message_2=v),rows:"2"},null,512),[[En,D(r).message_2]])])]),C("div",bN,[SN,C("div",RN,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[10]||(_[10]=v=>D(r).field_cta=v)},null,512),[[En,D(r).field_cta]])])])])])],64)):Oe("",!0),D(r).type=="Data Points"?(z(),Q("div",AN,[C("div",PN,[C("div",NN,[kN,C("div",ON,[C("label",xN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[11]||(_[11]=v=>D(r).third_field_type=v),value:null},null,512),[[yi,D(r).third_field_type]]),Et(" No ")]),C("label",DN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[12]||(_[12]=v=>D(r).third_field_type=v),value:"Top"},null,512),[[yi,D(r).third_field_type]]),Et(" On Top ")]),C("label",MN,[Ye(C("input",{type:"radio","onUpdate:modelValue":_[13]||(_[13]=v=>D(r).third_field_type=v),value:"Bottom"},null,512),[[yi,D(r).third_field_type]]),Et(" On Bottom ")])])]),C("div",LN,[FN,C("div",UN,[Ye(C("input",{class:"input",type:"text","onUpdate:modelValue":_[14]||(_[14]=v=>D(r).field_3=v),disabled:!D(r).third_field_type},null,8,$N),[[En,D(r).field_3]])])])])])):Oe("",!0),D(r).type=="Message"?(z(),Q("div",BN,[HN,C("div",VN,[Ye(C("textarea",{class:"textarea","onUpdate:modelValue":_[15]||(_[15]=v=>D(r).message=v),placeholder:"e.g. Hello world",rows:"2"},null,512),[[En,D(r).message]])])])):Oe("",!0),C("div",jN,[D(e).params.id?Oe("",!0):(z(),Q("button",{key:0,class:"button is-primary is-fullwidth",onClick:c},"Save")),D(e).params.id?(z(),Q("button",{key:1,class:"button is-warning is-fullwidth",onClick:c},"Update")):Oe("",!0),D(e).params.id?(z(),Q("button",{key:2,class:"button is-outlined is-danger is-fullwidth",onClick:_[16]||(_[16]=v=>h(D(e).params.id))},"Delete")):Oe("",!0),C("button",{class:"button is-default text-right",onClick:_[17]||(_[17]=v=>l())},"Reset")])]),C("div",WN,[C("main",zN,[KN,C("div",{onClick:_[18]||(_[18]=v=>D(n).push("/"))},[Re(rc,{config:D(r)},null,8,["config"])]),u(D(r).product_name).length>0?(z(),Q("div",qN," Saved Cards ")):Oe("",!0),D(s)?Oe("",!0):(z(),Q("button",GN,"Loading")),(z(!0),Q(ke,null,Ui(u(D(r).product_name),v=>(z(),Q("div",{onClick:b=>f(v)},[Re(rc,{config:v},null,8,["config"])],8,YN))),256))])])])]))}},XN={class:"container"},QN={key:0,class:"columns"},JN={class:"column is-4"},ZN={class:"main browse"},e1={class:"header mt-5"},t1={key:0,class:"button is-loading is-fullwidth"},n1=["onClick"],i1=["onClick"],s1={key:1,class:"button is-loading is-fullwidth"},r1={__name:"BrowseView",setup(t){const e=nv(),n=Bm(Sn.ref("/cards")),i=Hm(Sn.ref("/status"));function s(a){return n.value.filter(c=>c.product_name==a)}function r(){let a=[];return n.value.forEach(c=>{a.includes(c.product_name)||a.push(c.product_name)}),a}function o(a){Sn.del(`/cards/${a}`)}function l(a){e.$patch(a),iv.push(`/edit/${a.id}`)}return(a,c)=>(z(),Q("div",XN,[D(i)?(z(),Q("div",QN,[(z(!0),Q(ke,null,Ui(r(),u=>(z(),Q("div",JN,[C("main",ZN,[C("div",e1," My Products ("+ln(u)+") ",1),D(i)?Oe("",!0):(z(),Q("button",t1,"Loading")),(z(!0),Q(ke,null,Ui(s(u),h=>(z(),Q("div",{onClick:f=>l(h),style:{position:"relative"}},[C("button",{class:"button is-danger close",onClick:EE(f=>o(h.id),["stop"])}," x ",8,i1),Re(rc,{config:h},null,8,["config"])],8,n1))),256))])]))),256))])):Oe("",!0),D(i)?Oe("",!0):(z(),Q("button",s1,"Loading"))]))}},iv=tP({history:yA("/"),routes:[{path:"/",name:"home",component:Id},{path:"/browse",name:"browse",component:r1},{path:"/edit/:id",name:"edit",component:Id}]}),kr=IE(cP),sv=SE();sv.use(XE);kr.use(sv);kr.use(jE);kr.use(iv);kr.use(ZR,{firebaseApp:Vm});kr.mount("#app");
