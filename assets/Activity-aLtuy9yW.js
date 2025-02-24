import{K as g,_ as u,g as y,r as a,V as d,W as v,j as t,X as c,Y as f,I as A,Z as j}from"./index-Ikj8v-B_.js";import{u as m,M as p}from"./MobileActivityList-16WkHC3a.js";const P=g.lazy(()=>u(()=>import("./EmptyActivity-TQQQ_sHG.js"),__vite__mapDeps([0,1,2,3]))),_=()=>{const{standalone:r}=y(),e=a.useRef(null),{refetch:n,isFetched:o,fetchNextPage:x,hasNextPage:l,isFetchingNextPage:h,data:s}=d();v(e,5e3,n);const i=h;return m(l,i,x,r,e),!o||!s?t.jsx(c,{}):s.length===0?t.jsx(a.Suspense,{fallback:t.jsx(c,{}),children:t.jsx(P,{})}):t.jsxs(t.Fragment,{children:[t.jsx(f,{}),t.jsxs(A,{ref:e,children:[t.jsx(p,{items:s}),i&&t.jsx(j,{size:3})]})]})};export{_ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmptyActivity-TQQQ_sHG.js","assets/index-Ikj8v-B_.js","assets/index-eqTA7-MZ.css","assets/BuyAction-bFVYXOjF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
