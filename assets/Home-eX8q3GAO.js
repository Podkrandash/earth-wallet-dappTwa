import{s as c,n as p,u as h,j as s,L as x,$ as W,B as K,r as l,a0 as C,a1 as F,a2 as A,f as g,a3 as S,a4 as j,K as D,g as O,a5 as M,a6 as H,a7 as q,c as z,a8 as J,a9 as V,aa as G,ab as Q,ac as w,ad as X,ae as Y,af as E,ag as Z,ah as ee,e as N,ai as $,aj as se,ak as te,al as ne,am as ae,an as oe,ao as re,ap as ie,aq as ce}from"./index-Ikj8v-B_.js";import{H as le}from"./TonActions-xNSqyWIJ.js";import"./BuyAction-bFVYXOjF.js";const L=c.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;
`,y=c.img`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;
`,de=c.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,me=c.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,ue=c(x)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,fe=c(W)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.backgroundContentTint};
    color: ${e=>e.theme.textSecondary};
`,xe=c.div`
    display: flex;
    justify-content: space-between;
`,R=c(K)`
    color: ${e=>e.theme.textSecondary};
`,he=c(x)`
    color: ${e=>e.theme.textSecondary};
`,je=c.span`
    color: ${e=>e.theme.accentOrange};
`,T=({name:e,symbol:t,balance:i,secondary:n,fiatAmount:r,label:a,rate:o,verification:m})=>{const{t:b}=h();return s.jsxs(de,{children:[s.jsxs(me,{children:[s.jsxs(ue,{children:[t??e,a?s.jsx(fe,{children:a}):null]}),s.jsx(he,{}),s.jsx(x,{children:i})]}),s.jsxs(xe,{children:[s.jsx(R,{children:m==="none"?s.jsx(je,{children:b("approval_unverified_token")}):s.jsxs(s.Fragment,{children:[n," ",s.jsx(ge,{data:o})]})}),s.jsx(R,{children:r})]})]})},pe=c.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?p`
                color: ${e.theme.accentGreen};
            `:p`
                color: ${e.theme.accentRed};
            `}}
`,ge=({data:e})=>{if(!e||!e.diff24h||e.diff24h=="0.00%")return null;const t=e.diff24h.startsWith("+");return s.jsx(pe,{positive:t,children:e.diff24h})},I=c(y)`
    border-radius: unset;
`,B=l.forwardRef(({assetAmount:e,className:t},i)=>{const n=C(),{data:r}=F(),{fiatPrice:a,fiatAmount:o}=A(r,e.relativeAmount);return s.jsx(g,{onClick:()=>n(S.coins+"/"+e.asset.id),className:t,ref:i,children:s.jsxs(L,{children:[e.asset.id===j.id?s.jsx(I,{src:e.image}):s.jsx(y,{src:e.image}),s.jsx(T,{name:e.asset.name,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:a,fiatAmount:o,label:"TRC20",rate:r})]})})}),Le=({className:e})=>{const{t}=h(),{fiat:i}=O(),{mutate:n,isLoading:r}=M(),a=H(),{data:o}=F();return s.jsx(g,{className:e,children:s.jsxs(L,{children:[s.jsx(I,{src:j.image}),s.jsx(T,{name:j.name,symbol:j.symbol,balance:"",secondary:o!=null&&o.prices?q(i,o==null?void 0:o.prices):void 0,fiatAmount:"",label:"TRC20",rate:o}),s.jsx(z,{...a?{secondary:!0}:{primary:!0},size:"small",loading:r,onClick:()=>n(),children:t("activate")})]})})},ye=D.memo(({usdt:e,className:t})=>e?s.jsx(B,{assetAmount:e,className:t}):s.jsx(Le,{className:t})),Te=l.forwardRef(({balance:e,className:t},i)=>{const{t:n}=h(),r=C(),{data:a}=J(V.TON),{fiatPrice:o,fiatAmount:m}=A(a,e.relativeAmount);return s.jsx(g,{onClick:()=>r(S.coins+"/ton"),className:t,ref:i,children:s.jsxs(L,{children:[s.jsx(y,{src:"https://wallet.tonkeeper.com/img/toncoin.svg"}),s.jsx(T,{name:n("Toncoin"),symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:o,fiatAmount:m,rate:a})]})})}),be=l.forwardRef(({balance:e,className:t},i)=>G(e.asset)?s.jsx(B,{ref:i,assetAmount:e,className:t}):s.jsx(ve,{ref:i,balance:e,className:t})),ve=l.forwardRef(({balance:e,className:t},i)=>{const{t:n}=h(),r=C(),{fiat:a}=O(),{data:o}=Q(),m=l.useMemo(()=>{const u=o==null?void 0:o.balances.find(v=>w(v.jetton.address,e.asset.address));return u!=null&&u.price?X(u.price,a):void 0},[o,a]),{fiatPrice:b,fiatAmount:U}=A(m,e.relativeAmount),P=l.useMemo(()=>{var u;return(u=o==null?void 0:o.balances.find(v=>w(v.jetton.address,e.asset.address)))==null?void 0:u.jetton.verification},[o,a]);return s.jsx(g,{onClick:()=>r(S.coins+`/${encodeURIComponent(Y(e.asset.address))}`),className:t,ref:i,children:s.jsxs(L,{children:[s.jsx(y,{src:e.asset.image}),s.jsx(T,{name:e.asset.name??n("Unknown_COIN"),verification:P,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:b,fiatAmount:U,rate:m})]})})}),_=({assets:e})=>{const[t,i]=l.useMemo(()=>[e.find(a=>a.asset.id===E.id),e.filter(a=>a.asset.id!==E.id)],[e]),n=Z(),r=ee();return s.jsxs(s.Fragment,{children:[s.jsxs(N,{noUserSelect:!0,children:[s.jsx(Te,{balance:t}),!r&&n&&s.jsx(ye,{usdt:null})]}),s.jsx(N,{noUserSelect:!0,children:i.map(a=>s.jsx(be,{balance:a},a.asset.id))})]})},Ce=({assets:e,nfts:t})=>s.jsxs(s.Fragment,{children:[s.jsx(_,{assets:e}),s.jsx($,{nfts:t})]}),Ae=c.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,k=c.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?p`
                  color: ${e.theme.textPrimary};
              `:p`
                  color: ${e.theme.textSecondary};
              `}
`,Se=c.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var d;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(d||(d={}));const we=({tab:e,onTab:t})=>{const{t:i}=h(),n=l.useRef(null),r=l.useRef(null);return l.useEffect(()=>{if(n.current&&r.current){const a=n.current.childNodes[e],o=40;r.current.style.width=o+"px",r.current.style.left=a.offsetLeft+(a.clientWidth-o)/2+"px",window.requestAnimationFrame(()=>{r.current&&(r.current.style.transition="all 0.3s ease-in-out")})}},[n,r,e]),s.jsxs(Ae,{ref:n,children:[s.jsx(k,{active:e===d.TOKENS,onClick:()=>t(d.TOKENS),children:s.jsx(x,{children:i("jettons_list_title")})}),s.jsx(k,{active:e===d.COLLECTIBLES,onClick:()=>t(d.COLLECTIBLES),children:s.jsx(x,{children:i("wallet_collectibles_tab_lable")})}),s.jsx(Se,{ref:r})]})},f="collectibles",Ee=({assets:e,nfts:t})=>{const i=se(),[n,r]=te(),a=l.useMemo(()=>new URLSearchParams(n).get(f)==="open"?d.COLLECTIBLES:d.TOKENS,[n,i]),o=l.useCallback(m=>{m===d.COLLECTIBLES?n.has(f)||n.append(f,"open"):n.has(f)&&n.delete(f),r(n,{replace:!0})},[n,r]);return s.jsxs(s.Fragment,{children:[s.jsx(we,{tab:a,onTab:o}),a===d.COLLECTIBLES?s.jsx($,{nfts:t}):s.jsx(_,{assets:e})]})},Ne=({assets:e,nfts:t})=>e.length+t.length<11||e.length<4?s.jsx(Ce,{assets:e,nfts:t}):s.jsx(Ee,{assets:e,nfts:t}),Oe=()=>{const{isFetched:e}=ne(),{assets:t,error:i}=ae(),{data:n,isFetching:r}=oe(),a=!t||r;return!n||!t||!e?s.jsx(re,{}):s.jsxs(s.Fragment,{children:[s.jsx(ie,{error:i,isFetching:a}),s.jsx(le,{chain:ce.TON}),s.jsx(Ne,{assets:t,nfts:n})]})};export{Oe as default};
