import{j as e,s as c,n as h,r as a,z as u,a_ as x,a0 as g,b as p,w as k,u as j,D as m,c8 as w,c9 as y,ca as f,cb as b,a3 as C,cc as v,o as B,cd as L,k as M,c5 as N,aj as _,ak as P,aC as H,e as R,ce as S}from"./index-Ikj8v-B_.js";const A=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V14M14 14V6.5M14 14H21.5M14 14H6.5",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),E=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),z=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),I=({items:t,kind:o})=>e.jsx(R,{margin:!1,children:t.filter(n=>!n.disabled).map(n=>e.jsx(S,{item:n,kind:o},n.title))}),O=c.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,T=({item:t,kind:o,handleClose:n})=>{const s=g(),r=p(),{data:i}=k(),{t:l}=j(),d=m();return e.jsxs(O,{children:[e.jsx(w,{children:e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(b,{country:i,onClick:()=>s(C.settings+v.country)}),e.jsx(B,{children:t.title}),e.jsx(L,{handleClose:n})]})})}),e.jsx(I,{items:t.items,kind:o}),e.jsx(U,{children:e.jsx(V,{onClick:()=>d.exchangePostUrl&&r.openPage(d.exchangePostUrl),children:l(o==="buy"?"exchange_modal_other_ways_to_buy":"exchange_other_ways")})})]})},U=c.div`
    text-align: center;

    ${t=>t.theme.displayType==="full-width"&&h`
            padding-bottom: 1rem;
        `}
`,V=c(M)`
    cursor: pointer;
    padding: 7.5px 1rem 8.5px;
    background-color: ${t=>t.theme.backgroundContent};
    transition: background-color 0.1s ease;
    border-radius: ${t=>t.theme.cornerMedium};
    display: inline-block;

    &:hover {
        background-color: ${t=>t.theme.backgroundHighlighted};
    }
`,$=({buy:t,open:o,handleClose:n})=>{const s=a.useCallback(()=>{if(!(!o||!t))return e.jsx(T,{item:t,kind:"buy",handleClose:n})},[o,t]);return e.jsx(u,{children:e.jsx(x,{isOpen:o&&t!=null,handleClose:n,hideButton:!0,children:s})})},D=()=>{const{data:t}=N(),o=_(),[n,s]=P(),r=a.useMemo(()=>new URLSearchParams(n).get("buy")==="open",[n,o]),i=a.useCallback(()=>{n.has("buy")?n.delete("buy"):n.append("buy","open"),s(n,{replace:!0})},[n,s]);return e.jsxs(u,{children:[e.jsx(H,{icon:e.jsx(A,{}),title:"wallet_buy",action:i}),e.jsx($,{buy:t,open:r,handleClose:i})]})};export{D as B,z as R,E as S,$ as a};
