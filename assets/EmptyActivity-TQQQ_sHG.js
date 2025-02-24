import{s,u as r,b as l,r as d,c5 as x,j as e,k as u,z as p,c6 as y,c7 as m,B as f,c as h}from"./index-Ikj8v-B_.js";import{a as j}from"./BuyAction-bFVYXOjF.js";const v=s.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,B=s(f)`
    color: ${t=>t.theme.textSecondary};
    margin-bottom: 1.5rem;
`,g=s.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`,o=s(h)`
    display: flex;
    gap: 6px;

    > svg {
        color: ${t=>t.theme.buttonTertiaryForeground};
    }
`,b=()=>{const{t}=r(),i=l(),[a,n]=d.useState(!1),{data:c}=x();return e.jsxs(v,{children:[e.jsx(u,{children:t("activity_empty_transaction_title")}),e.jsx(B,{children:t("activity_empty_transaction_caption")}),e.jsxs(g,{children:[e.jsx(p,{children:e.jsxs(o,{size:"small",onClick:()=>n(!0),children:[e.jsx(y,{}),t("exchange_title")]})}),e.jsxs(o,{size:"small",onClick:()=>i.uiEvents.emit("receive",{method:"receive",params:{}}),children:[e.jsx(m,{}),t("wallet_receive")]})]}),e.jsx(j,{buy:c,open:a,handleClose:()=>n(!1)})]})};export{b as default};
