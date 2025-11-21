import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-BKwLVrTx.js";import{c as N}from"./createLucideIcon-BYzyF8e7.js";import"./preload-helper-PPVm8Dsz.js";const M=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],P=N("building-2",M);const W=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],$=N("credit-card",W);const B=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],z=N("smartphone",B);const E=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],G=N("wallet",E),l=r.forwardRef(({name:a,value:t,onChange:m,options:i,orientation:u="vertical",label:R,helperText:w,disabled:k=!1,className:_=""},A)=>{const O=r.useId(),q=`${O}-help`,I=(o,d)=>{if(k)return;const n=i.findIndex(c=>c.value===d);let s=n;if(u==="vertical"&&o.key==="ArrowDown"||u==="horizontal"&&o.key==="ArrowRight"?(o.preventDefault(),s=(n+1)%i.length):(u==="vertical"&&o.key==="ArrowUp"||u==="horizontal"&&o.key==="ArrowLeft")&&(o.preventDefault(),s=(n-1+i.length)%i.length),s!==n){const c=i[s];c.disabled||m(c.value)}};return e.jsxs("div",{className:`w-full ${_}`,children:[R&&e.jsx("label",{className:"label",id:O,children:R}),e.jsx("div",{ref:A,role:"radiogroup","aria-labelledby":R?O:void 0,"aria-describedby":w?q:void 0,"aria-disabled":k,className:u==="vertical"?"space-y-3":"flex gap-4 flex-wrap",children:i.map(o=>{const d=t===o.value,n=k||o.disabled,s=`${a}-${o.value}`;return e.jsxs("label",{htmlFor:s,className:`flex items-start gap-3 ${n?"opacity-40 cursor-not-allowed":"cursor-pointer"}`,children:[e.jsxs("div",{className:"relative inline-block flex-shrink-0 mt-0.5",children:[e.jsx("input",{type:"radio",id:s,name:a,value:o.value,checked:d,onChange:()=>!n&&m(o.value),onKeyDown:c=>I(c,o.value),disabled:n,className:"sr-only",role:"radio","aria-checked":d,"aria-disabled":n,"aria-describedby":o.description?`${s}-desc`:void 0}),e.jsx("div",{className:`
                    w-4 h-4 rounded-full border transition-all duration-200
                    flex items-center justify-center
                    ${d?"border-accent-600":"border-paper-300 hover:border-paper-400"}
                    ${!n&&"focus-within:ring-2 focus-within:ring-accent-400 focus-within:ring-offset-2"}
                  `,children:d&&e.jsx("div",{className:"w-2 h-2 bg-accent-600 rounded-full"})})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[o.icon&&e.jsx("span",{className:"text-ink-700",children:o.icon}),e.jsx("p",{className:"text-sm font-medium text-ink-900",children:o.label})]}),o.description&&e.jsx("p",{id:`${s}-desc`,className:"text-xs text-ink-600 mt-0.5",children:o.description})]})]},o.value)})}),w&&e.jsx("p",{id:q,className:"mt-2 text-xs text-ink-600",children:w})]})});l.displayName="RadioGroup";try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Forms/Radio",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(a,{})})]},p=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],D=[{value:"free",label:"Free",description:"Basic features for individual use"},{value:"pro",label:"Pro - $9/month",description:"Advanced features for professionals"},{value:"team",label:"Team - $29/month",description:"Collaboration tools for teams"},{value:"enterprise",label:"Enterprise",description:"Custom solutions for large organizations"}],H=[{value:"card",label:"Credit Card",icon:e.jsx($,{className:"h-4 w-4"})},{value:"bank",label:"Bank Transfer",icon:e.jsx(P,{className:"h-4 w-4"})},{value:"wallet",label:"Digital Wallet",icon:e.jsx(G,{className:"h-4 w-4"})},{value:"mobile",label:"Mobile Payment",icon:e.jsx(z,{className:"h-4 w-4"})}],v={render:()=>{const[a,t]=r.useState("");return e.jsx(l,{label:"Select an option",options:p,value:a,onChange:t})}},h={render:()=>{const[a,t]=r.useState("option2");return e.jsx(l,{label:"Choose one",options:p,value:a,onChange:t})}},b={render:()=>{const[a,t]=r.useState("option1");return e.jsx(l,{label:"Layout direction",options:p,value:a,onChange:t,orientation:"horizontal"})}},g={render:()=>{const[a,t]=r.useState("free");return e.jsx(l,{label:"Select a plan",options:D,value:a,onChange:t})}},f={render:()=>{const[a,t]=r.useState("card");return e.jsx(l,{label:"Payment Method",options:H,value:a,onChange:t})}},y={render:()=>{const[a,t]=r.useState("");return e.jsx(l,{label:"Required selection",options:p,value:a,onChange:t,error:"Please select an option"})}},x={render:()=>{const[a,t]=r.useState("");return e.jsx(l,{label:"Notification Preference",options:[{value:"all",label:"All notifications"},{value:"important",label:"Important only"},{value:"none",label:"None"}],value:a,onChange:t,helperText:"Choose how you want to receive notifications"})}},S={render:()=>e.jsx(l,{label:"Disabled Radio Group",options:p,value:"option1",onChange:()=>{},disabled:!0})},C={render:()=>{const[a,t]=r.useState("option1");return e.jsx(l,{label:"Some options disabled",options:[{value:"option1",label:"Available Option 1"},{value:"option2",label:"Unavailable Option",disabled:!0},{value:"option3",label:"Available Option 2"},{value:"option4",label:"Coming Soon",disabled:!0}],value:a,onChange:t})}},V={render:()=>{const[a,t]=r.useState("");return e.jsx(l,{label:"Required field",options:p,value:a,onChange:t,required:!0})}},j={render:()=>{const[a,t]=r.useState("pro"),[m,i]=r.useState("monthly");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(l,{label:"Choose your plan",options:D,value:a,onChange:t}),e.jsx(l,{label:"Billing cycle",options:[{value:"monthly",label:"Monthly",description:"Pay month-to-month"},{value:"annual",label:"Annual",description:"Save 20% with annual billing"}],value:m,onChange:i}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"Summary"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Plan: ",D.find(u=>u.value===a)?.label,e.jsx("br",{}),"Billing: ",m==="monthly"?"Monthly":"Annual (20% savings)"]})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radio label="Select an option" options={basicOptions} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    return <Radio label="Choose one" options={basicOptions} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <Radio label="Layout direction" options={basicOptions} value={value} onChange={setValue} orientation="horizontal" />;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('free');
    return <Radio label="Select a plan" options={subscriptionOptions} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('card');
    return <Radio label="Payment Method" options={paymentOptions} value={value} onChange={setValue} />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radio label="Required selection" options={basicOptions} value={value} onChange={setValue} error="Please select an option" />;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radio label="Notification Preference" options={[{
      value: 'all',
      label: 'All notifications'
    }, {
      value: 'important',
      label: 'Important only'
    }, {
      value: 'none',
      label: 'None'
    }]} value={value} onChange={setValue} helperText="Choose how you want to receive notifications" />;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Radio label="Disabled Radio Group" options={basicOptions} value="option1" onChange={() => {}} disabled />;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <Radio label="Some options disabled" options={[{
      value: 'option1',
      label: 'Available Option 1'
    }, {
      value: 'option2',
      label: 'Unavailable Option',
      disabled: true
    }, {
      value: 'option3',
      label: 'Available Option 2'
    }, {
      value: 'option4',
      label: 'Coming Soon',
      disabled: true
    }]} value={value} onChange={setValue} />;
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radio label="Required field" options={basicOptions} value={value} onChange={setValue} required />;
  }
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState('pro');
    const [billing, setBilling] = useState('monthly');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>\r
        <Radio label="Choose your plan" options={subscriptionOptions} value={plan} onChange={setPlan} />\r
        <Radio label="Billing cycle" options={[{
        value: 'monthly',
        label: 'Monthly',
        description: 'Pay month-to-month'
      }, {
        value: 'annual',
        label: 'Annual',
        description: 'Save 20% with annual billing'
      }]} value={billing} onChange={setBilling} />\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.375rem'
      }}>\r
          <div style={{
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>Summary</div>\r
          <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Plan: {subscriptionOptions.find(o => o.value === plan)?.label}<br />\r
            Billing: {billing === 'monthly' ? 'Monthly' : 'Annual (20% savings)'}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const Q=["Default","WithValue","Horizontal","WithDescriptions","WithIcons","WithError","WithHelperText","Disabled","DisabledOption","Required","SubscriptionForm"];export{v as Default,S as Disabled,C as DisabledOption,b as Horizontal,V as Required,j as SubscriptionForm,g as WithDescriptions,y as WithError,x as WithHelperText,f as WithIcons,h as WithValue,Q as __namedExportsOrder,J as default};
