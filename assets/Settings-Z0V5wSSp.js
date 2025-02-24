import{s as a,n as l,K as i,j as s,f as d,M as x,L as r,N as h,e as j,u as p,b as m,O as u,r as y,T as I,m as g,U as S,S as f,I as L}from"./index-Ikj8v-B_.js";const B=a(r)`
    display: flex;
    margin: -3px 0;
    color: ${n=>n.color??n.theme.accentBlue};
`,k=a(h)`
    color: ${n=>n.theme.textSecondary};
`,T=a.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,$=a(j)`
    ${n=>n.isDisabled&&l`
            opacity: 0.6;

            & > * {
                cursor: not-allowed;
            }
        `}
`,b=i.memo(({items:n,className:t,isDisabled:o})=>s.jsx($,{isDisabled:o,className:t,children:n.map(e=>s.jsx(d,{hover:!o,onClick:()=>{o||e.action(e)},children:s.jsxs(x,{children:[s.jsxs(T,{children:[e.preIcon,s.jsx(r,{children:e.name}),e.secondary&&s.jsx(k,{children:e.secondary})]}),s.jsx(B,{color:e.iconColor,children:e.icon})]})},e.name))})),c=a.span`
    display: flex;
    color: ${n=>n.theme.iconTertiary};
`,C=()=>{const{t:n}=p(),t=m(),{data:o}=u(),e=y.useMemo(()=>[{name:"Просмотр приватного ключа",icon:s.jsx(c,{children:s.jsx(I,{})}),action:()=>{}},{name:"Поддержка",icon:s.jsx(c,{children:s.jsx(g,{})}),action:()=>t.openPage("https://t.me/earthwalletsupport")},{name:"Удалить кошелек",icon:s.jsx(c,{children:s.jsx(S,{})}),action:()=>{},color:"error"}],[n,o]);return s.jsxs(s.Fragment,{children:[s.jsx(f,{title:n("Settings")}),s.jsx(L,{children:s.jsx(b,{items:e})})]})};export{C as Settings,C as default};
