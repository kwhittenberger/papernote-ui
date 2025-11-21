import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-CSg7ci3J.js";import{I as l}from"./Input-D3Dg57sX.js";import{S as j}from"./search-CU5WxkwQ.js";import{c as W}from"./createLucideIcon-cNZIheGE.js";import{L as E}from"./lock-Bzti5QZ9.js";import"./preload-helper-PPVm8Dsz.js";import"./x-D3HEt2XM.js";import"./eye-BgU747mg.js";import"./triangle-alert-D-hCUnFb.js";import"./circle-alert-B0oKM4NA.js";const L=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],C=W("mail",L),M={title:"Components/Input",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","number","tel","url"]}},decorators:[a=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(a,{})})]},t={args:{label:"Email",placeholder:"Enter your email"}},n={render:()=>{const[a,r]=o.useState("john@example.com");return e.jsx(l,{label:"Email",value:a,onChange:s=>r(s.target.value)})}},c={args:{label:"Search",prefixIcon:e.jsx(j,{className:"h-5 w-5"}),placeholder:"Search..."}},i={args:{label:"Email",type:"email",suffixIcon:e.jsx(C,{className:"h-5 w-5"}),placeholder:"you@example.com"}},m={args:{label:"Email",value:"invalid-email",error:"Please enter a valid email address"}},u={args:{label:"Username",helperText:"Choose a unique username (3-20 characters)",placeholder:"Enter username"}},p={args:{label:"Full Name",required:!0,placeholder:"Enter your full name"}},d={args:{label:"Disabled Input",value:"Cannot edit this",disabled:!0}},h={args:{label:"Read Only",value:"This is read-only",readOnly:!0}},g={render:()=>{const[a,r]=o.useState("Clear me!");return e.jsx(l,{label:"Clearable Input",value:a,onChange:s=>r(s.target.value),clearable:!0,onClear:()=>r("")})}},x={args:{label:"Checking availability...",value:"myusername",loading:!0}},b={render:()=>{const[a,r]=o.useState("");return e.jsx(l,{label:"Password",type:"password",value:a,onChange:s=>r(s.target.value),prefixIcon:e.jsx(E,{className:"h-5 w-5"}),placeholder:"Enter password"})}},f={args:{label:"Website",prefix:"https://",placeholder:"example.com"}},S={args:{label:"Domain",suffix:".com",placeholder:"example"}},v={args:{label:"Small Input",size:"sm",placeholder:"Small size"}},y={args:{label:"Large Input",size:"lg",placeholder:"Large size"}},w={render:()=>{const[a,r]=o.useState(""),[s,P]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(l,{label:"Email",type:"email",value:a,onChange:I=>r(I.target.value),prefixIcon:e.jsx(C,{className:"h-5 w-5"}),placeholder:"you@example.com",required:!0}),e.jsx(l,{label:"Password",type:"password",value:s,onChange:I=>P(I.target.value),prefixIcon:e.jsx(E,{className:"h-5 w-5"}),placeholder:"Enter password",required:!0})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('john@example.com');
    return <Input label="Email" value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    prefixIcon: <Search className="h-5 w-5" />,
    placeholder: 'Search...'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    suffixIcon: <Mail className="h-5 w-5" />,
    placeholder: 'you@example.com'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    helperText: 'Choose a unique username (3-20 characters)',
    placeholder: 'Enter username'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    value: 'This is read-only',
    readOnly: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Clear me!');
    return <Input label="Clearable Input" value={value} onChange={e => setValue(e.target.value)} clearable onClear={() => setValue('')} />;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checking availability...',
    value: 'myusername',
    loading: true
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    return <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} prefixIcon={<Lock className="h-5 w-5" />} placeholder="Enter password" />;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Website',
    prefix: 'https://',
    placeholder: 'example.com'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Domain',
    suffix: '.com',
    placeholder: 'example'
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const H=["Default","WithValue","WithPrefixIcon","WithSuffixIcon","WithError","WithHelperText","Required","Disabled","ReadOnly","Clearable","Loading","Password","WithPrefix","WithSuffix","Small","Large","LoginForm"];export{g as Clearable,t as Default,d as Disabled,y as Large,x as Loading,w as LoginForm,b as Password,h as ReadOnly,p as Required,v as Small,m as WithError,u as WithHelperText,f as WithPrefix,c as WithPrefixIcon,S as WithSuffix,i as WithSuffixIcon,n as WithValue,H as __namedExportsOrder,M as default};
