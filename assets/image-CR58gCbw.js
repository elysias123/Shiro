import{r as d,j as x}from"./index-Sggqy_9J.js";var I=new Map,h=new WeakMap,y=0,C=void 0;function D(e){return e?(h.has(e)||(y+=1,h.set(e,y.toString())),h.get(e)):"0"}function L(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?D(e.root):e[t]}`).toString()}function O(e){const t=L(e);let n=I.get(t);if(!n){const s=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(r=>{var c;const v=r.isIntersecting&&a.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(c=s.get(r.target))==null||c.forEach(f=>{f(v,r)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:s},I.set(t,n)}return n}function T(e,t,n={},s=C){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const c=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:a,observer:i,elements:o}=O(n),r=o.get(e)||[];return o.has(e)||o.set(e,r),r.push(t),i.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),I.delete(a))}}function _({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:a,triggerOnce:i,skip:o,initialInView:r,fallbackInView:c,onChange:v}={}){var f;const[l,M]=d.useState(null),m=d.useRef(v),[b,p]=d.useState({inView:!!r,entry:void 0});m.current=v,d.useEffect(()=>{if(o||!l)return;let g;return g=T(l,(S,w)=>{p({inView:S,entry:w}),m.current&&m.current(S,w),w.isIntersecting&&i&&g&&(g(),g=void 0)},{root:a,rootMargin:s,threshold:e,trackVisibility:n,delay:t},c),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,l,a,s,i,o,n,c,t]);const R=(f=b.entry)==null?void 0:f.target,E=d.useRef(void 0);!l&&R&&!i&&!o&&E.current!==R&&(E.current=R,p({inView:!!r,entry:void 0}));const u=[M,b.inView,b.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const A=e=>{const{placeholder:t=null,offset:n=0,...s}=e,{ref:a,inView:i}=_({triggerOnce:!0,rootMargin:`${n||0}px`,...s}),[o,r]=d.useState(!1);return d.useEffect(()=>{i&&r(!0)},[i]),x.jsxs(x.Fragment,{children:[!o&&x.jsx("span",{"data-hide-print":!0,"data-testid":"lazyload-indicator",ref:a}),i?e.children:t]})},$="cdn.innei.ren",j=$,N=({width:e,height:t,max:n})=>{if(e===0||t===0)throw new Error("Invalid image size");const{width:s,height:a}=n,i=s/e||1,o=a/t||1,r=Math.min(i,o,1);return{width:e*r,height:t*r}};function V(e){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=1,t.height=1,n.drawImage(e,0,0,1,1);const s=n.getImageData(0,0,1,1).data;return`#${((1<<24)+(s[0]<<16)+(s[1]<<8)+s[2]).toString(16).slice(1)}`}const U=(e,t)=>new URL(e).host===j?`${e}?imageMogr2/thumbnail/${t}x/strip`:e;export{A as L,U as a,N as c,V as g,_ as u};
