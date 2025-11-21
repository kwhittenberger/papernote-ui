import{c as u,j as e}from"./createLucideIcon-BtHUyTm0.js";import{r as i}from"./iframe-CMJ4PPJ_.js";import{X as re,E as se}from"./x-lFfCKOH-.js";import"./preload-helper-PPVm8Dsz.js";const te=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],le=u("circle-alert",te);const ne=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],oe=u("circle-check-big",ne);const ce=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ie=u("eye-off",ce);const ue=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],O=u("lock",ue);const de=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],F=u("mail",de);const pe=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],me=u("search",pe);const he=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ge=u("triangle-alert",he),n=i.forwardRef(({label:r,helperText:s,validationState:a,validationMessage:d,icon:t,iconPosition:h="left",showCount:A=!1,prefix:o,suffix:l,prefixIcon:p,suffixIcon:c,showPasswordToggle:g=!1,clearable:H=!1,onClear:M,className:B="",id:U,type:x="text",value:m,maxLength:y,...f},X)=>{const T=U||`input-${Math.random().toString(36).substring(2,9)}`,[b,G]=i.useState(!1),J=()=>{if(M)M();else if(f.onChange){const ae={target:{value:""},currentTarget:{value:""}};f.onChange(ae)}},R=H&&m&&String(m).length>0,K=x==="password"&&b?"text":x,D=m?String(m).length:0,Q=A&&y,Y=()=>{switch(a){case"error":return e.jsx(le,{className:"h-5 w-5 text-error-500"});case"success":return e.jsx(oe,{className:"h-5 w-5 text-success-500"});case"warning":return e.jsx(ge,{className:"h-5 w-5 text-warning-500"});default:return null}},Z=()=>{switch(a){case"error":return"border-error-400 focus:border-error-400 focus:ring-error-400";case"success":return"border-success-400 focus:border-success-400 focus:ring-success-400";case"warning":return"border-warning-400 focus:border-warning-400 focus:ring-warning-400";default:return"border-paper-300 focus:border-accent-400 focus:ring-accent-400 hover:border-paper-400"}},ee=()=>{switch(a){case"error":return"text-error-600";case"success":return"text-success-600";case"warning":return"text-warning-600";default:return"text-ink-600"}};return e.jsxs("div",{className:"w-full",children:[r&&e.jsxs("label",{htmlFor:T,className:"label",children:[r,f.required&&e.jsx("span",{className:"text-error-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[o&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-500 text-sm",children:o}),p&&!o&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400",children:p}),t&&h==="left"&&!o&&!p&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400",children:t}),e.jsx("input",{ref:X,id:T,type:K,value:m,maxLength:y,className:`
              input
              ${Z()}
              ${o?"pl-"+(o.length*8+12):""}
              ${p&&!o?"pl-10":""}
              ${t&&h==="left"&&!o&&!p?"pl-10":""}
              ${l?"pr-"+(l.length*8+12):""}
              ${c&&!l?"pr-10":""}
              ${t&&h==="right"&&!l&&!c?"pr-10":""}
              ${a&&!l&&!c&&!g?"pr-10":""}
              ${g&&x==="password"||a||l||c?"pr-20":""}
              ${B}
            `,...f}),l&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-ink-500 text-sm",children:l}),e.jsxs("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center gap-2",children:[c&&!l&&!a&&!g&&!R&&e.jsx("div",{className:"pointer-events-none text-ink-400",children:c}),R&&e.jsx("button",{type:"button",onClick:J,className:"text-ink-400 hover:text-ink-600 focus:outline-none cursor-pointer pointer-events-auto","aria-label":"Clear input",children:e.jsx(re,{className:"h-4 w-4"})}),x==="password"&&g&&e.jsx("button",{type:"button",onClick:()=>G(!b),className:"text-ink-400 hover:text-ink-600 focus:outline-none cursor-pointer pointer-events-auto","aria-label":b?"Hide password":"Show password",children:b?e.jsx(ie,{className:"h-5 w-5"}):e.jsx(se,{className:"h-5 w-5"})}),a&&e.jsx("div",{className:"pointer-events-none",children:Y()}),t&&h==="right"&&!l&&!c&&!a&&e.jsx("div",{className:"pointer-events-none text-ink-400",children:t})]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-2",children:[(s||d)&&e.jsx("p",{className:`text-xs ${d?ee():"text-ink-600"}`,children:d||s}),Q&&e.jsxs("p",{className:`text-xs ml-auto ${D>y?"text-error-600":"text-ink-500"}`,children:[D," / ",y]})]})]})});n.displayName="Input";try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:"ValidationState"}},validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},showCount:{defaultValue:{value:"false"},description:"Show character counter (requires maxLength prop)",name:"showCount",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"Text prefix (displayed inside input, before value)",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Text suffix (displayed inside input, after value)",name:"suffix",required:!1,type:{name:"string"}},prefixIcon:{defaultValue:null,description:"Icon prefix (displayed inside input, before value)",name:"prefixIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"Icon suffix (displayed inside input, after value)",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},showPasswordToggle:{defaultValue:{value:"false"},description:'Show password visibility toggle (only for type="password")',name:"showPasswordToggle",required:!1,type:{name:"boolean"}},clearable:{defaultValue:{value:"false"},description:"Show clearable button to clear input value",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Callback when clear button is clicked",name:"onClear",required:!1,type:{name:"(() => void)"}}}}}catch{}const we={title:"Components/Input",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","number","tel","url"]}},decorators:[r=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(r,{})})]},w={args:{label:"Email",placeholder:"Enter your email"}},v={render:()=>{const[r,s]=i.useState("john@example.com");return e.jsx(n,{label:"Email",value:r,onChange:a=>s(a.target.value)})}},N={args:{label:"Search",prefixIcon:e.jsx(me,{className:"h-5 w-5"}),placeholder:"Search..."}},S={args:{label:"Email",type:"email",suffixIcon:e.jsx(F,{className:"h-5 w-5"}),placeholder:"you@example.com"}},j={args:{label:"Email",value:"invalid-email",error:"Please enter a valid email address"}},k={args:{label:"Username",helperText:"Choose a unique username (3-20 characters)",placeholder:"Enter username"}},C={args:{label:"Full Name",required:!0,placeholder:"Enter your full name"}},E={args:{label:"Disabled Input",value:"Cannot edit this",disabled:!0}},I={args:{label:"Read Only",value:"This is read-only",readOnly:!0}},q={render:()=>{const[r,s]=i.useState("Clear me!");return e.jsx(n,{label:"Clearable Input",value:r,onChange:a=>s(a.target.value),clearable:!0,onClear:()=>s("")})}},V={args:{label:"Checking availability...",value:"myusername",loading:!0}},_={render:()=>{const[r,s]=i.useState("");return e.jsx(n,{label:"Password",type:"password",value:r,onChange:a=>s(a.target.value),prefixIcon:e.jsx(O,{className:"h-5 w-5"}),placeholder:"Enter password"})}},$={args:{label:"Website",prefix:"https://",placeholder:"example.com"}},P={args:{label:"Domain",suffix:".com",placeholder:"example"}},W={args:{label:"Small Input",size:"sm",placeholder:"Small size"}},L={args:{label:"Large Input",size:"lg",placeholder:"Large size"}},z={render:()=>{const[r,s]=i.useState(""),[a,d]=i.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{label:"Email",type:"email",value:r,onChange:t=>s(t.target.value),prefixIcon:e.jsx(F,{className:"h-5 w-5"}),placeholder:"you@example.com",required:!0}),e.jsx(n,{label:"Password",type:"password",value:a,onChange:t=>d(t.target.value),prefixIcon:e.jsx(O,{className:"h-5 w-5"}),placeholder:"Enter password",required:!0})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('john@example.com');
    return <Input label="Email" value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    prefixIcon: <Search className="h-5 w-5" />,
    placeholder: 'Search...'
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    suffixIcon: <Mail className="h-5 w-5" />,
    placeholder: 'you@example.com'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address'
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    helperText: 'Choose a unique username (3-20 characters)',
    placeholder: 'Enter username'
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name'
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    value: 'This is read-only',
    readOnly: true
  }
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Clear me!');
    return <Input label="Clearable Input" value={value} onChange={e => setValue(e.target.value)} clearable onClear={() => setValue('')} />;
  }
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checking availability...',
    value: 'myusername',
    loading: true
  }
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    return <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} prefixIcon={<Lock className="h-5 w-5" />} placeholder="Enter password" />;
  }
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Website',
    prefix: 'https://',
    placeholder: 'example.com'
  }
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Domain',
    suffix: '.com',
    placeholder: 'example'
  }
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size'
  }
}`,...W.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size'
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} prefixIcon={<Mail className="h-5 w-5" />} placeholder="you@example.com" required />\r
        <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} prefixIcon={<Lock className="h-5 w-5" />} placeholder="Enter password" required />\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const ve=["Default","WithValue","WithPrefixIcon","WithSuffixIcon","WithError","WithHelperText","Required","Disabled","ReadOnly","Clearable","Loading","Password","WithPrefix","WithSuffix","Small","Large","LoginForm"];export{q as Clearable,w as Default,E as Disabled,L as Large,V as Loading,z as LoginForm,_ as Password,I as ReadOnly,C as Required,W as Small,j as WithError,k as WithHelperText,$ as WithPrefix,N as WithPrefixIcon,P as WithSuffix,S as WithSuffixIcon,v as WithValue,ve as __namedExportsOrder,we as default};
