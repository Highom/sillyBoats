var X=Object.defineProperty;var F=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))r(A);new MutationObserver(A=>{for(const u of A)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(A){const u={};return A.integrity&&(u.integrity=A.integrity),A.referrerPolicy&&(u.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?u.credentials="include":A.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(A){if(A.ep)return;A.ep=!0;const u=n(A);fetch(A.href,u)}})();function g(){}function M(t){return t()}function j(){return Object.create(null)}function N(t){t.forEach(M)}function S(t){return typeof t=="function"}function _(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function H(t,e){return t===e?!0:(L||(L=document.createElement("a")),L.href=e,t===L.href)}function U(t){return Object.keys(t).length===0}function W(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function D(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function h(){return k(" ")}function V(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t){return Array.from(t.childNodes)}function te(t,e){e=""+e,t.data!==e&&(t.data=e)}let G;function O(t){G=t}const B=[],Z=[];let C=[];const R=[],ne=Promise.resolve();let z=!1;function re(){z||(z=!0,ne.then(T))}function J(t){C.push(t)}const K=new Set;let Q=0;function T(){if(Q!==0)return;const t=G;do{try{for(;Q<B.length;){const e=B[Q];Q++,O(e),Ae(e.$$)}}catch(e){throw B.length=0,Q=0,e}for(O(null),B.length=0,Q=0;Z.length;)Z.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];K.has(n)||(K.add(n),n())}C.length=0}while(B.length);for(;R.length;)R.pop()();z=!1,K.clear(),O(t)}function Ae(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function ue(t){const e=[],n=[];C.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),C=e}const Y=new Set;let se;function v(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(Y.has(t))return;Y.add(t),se.c.push(()=>{Y.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function E(t){t&&t.c()}function y(t,e,n){const{fragment:r,after_update:A}=t.$$;r&&r.m(e,n),J(()=>{const u=t.$$.on_mount.map(M).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...u):N(u),t.$$.on_mount=[]}),A.forEach(J)}function b(t,e){const n=t.$$;n.fragment!==null&&(ue(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(t,e){t.$$.dirty[0]===-1&&(B.push(t),re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,n,r,A,u,c=null,w=[-1]){const i=G;O(t);const o=t.$$={fragment:null,ctx:[],props:u,update:g,not_equal:A,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:j(),dirty:w,skip_bound:!1,root:e.target||i.$$.root};c&&c(o.root);let p=!1;if(o.ctx=n?n(t,e.props||{},(l,s,...a)=>{const P=a.length?a[0]:s;return o.ctx&&A(o.ctx[l],o.ctx[l]=P)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](P),p&&ce(t,l)),s}):[],o.update(),p=!0,N(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const l=ee(e.target);o.fragment&&o.fragment.l(l),l.forEach(f)}else o.fragment&&o.fragment.c();e.intro&&v(t.$$.fragment),y(t,e.target,e.anchor),T()}O(i)}class q{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){b(this,1),this.$destroy=g}$on(e,n){if(!S(n))return g;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const A=r.indexOf(n);A!==-1&&r.splice(A,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oe);const ie="/assets/matrix-bd3f9bb9.gif";function le(t){let e,n;return{c(){e=D("img"),m(e,"class","background svelte-1w1dx64"),H(e.src,n=ie)||m(e,"src",n),m(e,"alt","matrix")},m(r,A){d(r,e,A)},p:g,i:g,o:g,d(r){r&&f(e)}}}class ae extends q{constructor(e){super(),x(this,e,null,le,_,{})}}const fe="/assets/construction-worker-c7fdce06.gif",de="/assets/under-construction-sign-6f80b2ae.gif";function ge(t){let e,n,r,A,u,c,w,i,o,p,l;return{c(){e=D("h1"),e.textContent="Welcome to Silly Boats",n=h(),r=D("p"),r.textContent="This site is currently under construction",A=h(),u=D("img"),w=h(),i=D("img"),p=h(),l=D("p"),l.textContent="Feel free to click this button!",H(u.src,c=de)||m(u,"src",c),m(u,"alt","Under Construction"),m(u,"width","500px"),m(i,"class","worker svelte-1uwxyr2"),H(i.src,o=fe)||m(i,"src",o),m(i,"alt","Construction worker")},m(s,a){d(s,e,a),d(s,n,a),d(s,r,a),d(s,A,a),d(s,u,a),d(s,w,a),d(s,i,a),d(s,p,a),d(s,l,a)},p:g,i:g,o:g,d(s){s&&(f(e),f(n),f(r),f(A),f(u),f(w),f(i),f(p),f(l))}}}class me extends q{constructor(e){super(),x(this,e,null,ge,_,{})}}function pe(t){let e,n=t[0]>0?`you clicked me ${t[0]} times`:"I just count",r,A,u;return{c(){e=D("button"),r=k(n),m(e,"class","svelte-1qs4sfl")},m(c,w){d(c,e,w),W(e,r),A||(u=V(e,"click",t[1]),A=!0)},p(c,[w]){w&1&&n!==(n=c[0]>0?`you clicked me ${c[0]} times`:"I just count")&&te(r,n)},i:g,o:g,d(c){c&&f(e),A=!1,u()}}}function we(t,e,n){let r=0;return[r,()=>{n(0,r+=1)}]}class De extends q{constructor(e){super(),x(this,e,we,pe,_,{})}}const he="data:image/gif;base64,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";function Qe(t){let e,n;return{c(){e=D("img"),H(e.src,n=he)||m(e,"src",n),m(e,"alt","Under Construction"),m(e,"class","svelte-yhmke5")},m(r,A){d(r,e,A)},p:g,i:g,o:g,d(r){r&&f(e)}}}class Be extends q{constructor(e){super(),x(this,e,null,Qe,_,{})}}function Ce(t){let e,n,r,A,u,c,w,i,o,p,l;return n=new Be({}),c=new ae({}),i=new me({}),p=new De({}),{c(){e=D("header"),E(n.$$.fragment),r=h(),A=D("main"),u=D("div"),E(c.$$.fragment),w=h(),E(i.$$.fragment),o=h(),E(p.$$.fragment),m(u,"class","background")},m(s,a){d(s,e,a),y(n,e,null),d(s,r,a),d(s,A,a),W(A,u),y(c,u,null),W(u,w),y(i,u,null),W(u,o),y(p,u,null),l=!0},p:g,i(s){l||(v(n.$$.fragment,s),v(c.$$.fragment,s),v(i.$$.fragment,s),v(p.$$.fragment,s),l=!0)},o(s){I(n.$$.fragment,s),I(c.$$.fragment,s),I(i.$$.fragment,s),I(p.$$.fragment,s),l=!1},d(s){s&&(f(e),f(r),f(A)),b(n),b(c),b(i),b(p)}}}class ve extends q{constructor(e){super(),x(this,e,null,Ce,_,{})}}new ve({target:document.getElementById("app")});
