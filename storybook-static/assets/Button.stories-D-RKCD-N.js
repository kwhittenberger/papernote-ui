import{c as w,j as e}from"./createLucideIcon-BtHUyTm0.js";import"./iframe-CMJ4PPJ_.js";import"./preload-helper-PPVm8Dsz.js";const G=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],A=w("download",G);const F=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],R=w("loader-circle",F);const E=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],H=w("plus",E);const T=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],J=w("save",T);function r({variant:V="primary",size:n="md",loading:s=!1,icon:o,iconPosition:_="left",fullWidth:W=!1,iconOnly:a=!1,badge:t,badgeVariant:P="error",children:j,disabled:L,className:M="",...z}){const $="inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 disabled:opacity-40 disabled:cursor-not-allowed",I={primary:"bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:shadow-sm active:scale-[0.98]",secondary:"bg-white text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-paper-400 shadow-xs hover:shadow-sm",ghost:"bg-transparent text-ink-600 border-transparent hover:text-ink-800 hover:bg-paper-100 active:bg-paper-200",danger:"bg-error-500 text-white border-error-500 hover:bg-error-600 hover:shadow-sm active:scale-[0.98]",outline:"bg-transparent text-ink-700 border-paper-300 hover:bg-paper-50 hover:border-ink-400"},q={sm:a?"p-1.5":"px-3 py-1.5 text-xs gap-1.5",md:a?"p-2.5":"px-4 py-2.5 text-sm gap-2",lg:a?"p-3":"px-6 py-3 text-base gap-2.5"},N={sm:"h-3.5 w-3.5",md:"h-4 w-4",lg:"h-5 w-5"},O={primary:"bg-accent-500",success:"bg-success-500",warning:"bg-warning-500",error:"bg-error-500"},C={sm:"min-w-[16px] h-4 text-[10px] px-1",md:"min-w-[18px] h-[18px] text-[11px] px-1.5",lg:"min-w-[20px] h-5 text-xs px-1.5"},D=e.jsxs("button",{className:`
        ${$}
        ${I[V]}
        ${q[n]}
        ${W&&!a?"w-full":""}
        ${M}
      `,disabled:L||s,"aria-label":a&&typeof j=="string"?j:z["aria-label"],...z,children:[s&&e.jsx(R,{className:`${N[n]} animate-spin`}),!s&&o&&_==="left"&&e.jsx("span",{className:N[n],children:o}),!a&&j,!s&&o&&_==="right"&&!a&&e.jsx("span",{className:N[n],children:o})]});if(!t&&t!==0)return D;const k=typeof t=="number"&&t>99?"99+":String(t);return e.jsxs("div",{className:"relative inline-block",children:[D,e.jsx("span",{className:`
          absolute -top-1 -right-1
          flex items-center justify-center
          rounded-full text-white font-semibold
          ${O[P]}
          ${C[n]}
          shadow-sm
          pointer-events-none
        `,"aria-label":`${k} notifications`,children:k})]})}try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'},{value:'"danger"'},{value:'"outline"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:{value:"false"},description:"Icon-only mode - renders square button with just icon (no text padding)",name:"iconOnly",required:!1,type:{name:"boolean"}},badge:{defaultValue:null,description:"Badge content (number or text) displayed in top-right corner",name:"badge",required:!1,type:{name:"string | number"}},badgeVariant:{defaultValue:{value:"error"},description:"Badge color variant",name:"badgeVariant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'}]}}}}}catch{}const X={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},iconOnly:{control:"boolean"}}},i={args:{variant:"primary",children:"Primary Button"}},l={args:{variant:"secondary",children:"Secondary Button"}},c={args:{variant:"ghost",children:"Ghost Button"}},d={args:{variant:"danger",children:"Danger Button"}},u={args:{variant:"outline",children:"Outline Button"}},m={args:{variant:"primary",icon:e.jsx(J,{className:"h-4 w-4"}),iconPosition:"left",children:"Save Changes"}},p={args:{variant:"primary",icon:e.jsx(A,{className:"h-4 w-4"}),iconPosition:"right",children:"Download"}},g={args:{variant:"primary",iconOnly:!0,children:e.jsx(H,{className:"h-4 w-4"})}},h={args:{variant:"primary",loading:!0,children:"Loading..."}},v={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},y={args:{variant:"primary",badge:5,badgeVariant:"error",children:"Messages"}},x={args:{variant:"primary",size:"sm",children:"Small Button"}},f={args:{variant:"primary",size:"lg",children:"Large Button"}},b={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",minWidth:"300px"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"}),e.jsx(r,{variant:"outline",children:"Outline"})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"sm",children:"Small"}),e.jsx(r,{variant:"primary",size:"md",children:"Medium"}),e.jsx(r,{variant:"primary",size:"lg",children:"Large"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Save className="h-4 w-4" />,
    iconPosition: 'left',
    children: 'Save Changes'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Download className="h-4 w-4" />,
    iconPosition: 'right',
    children: 'Download'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    iconOnly: true,
    children: <Plus className="h-4 w-4" />
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading...'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    badge: 5,
    badgeVariant: 'error',
    children: 'Messages'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '300px'
  }}>\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="danger">Danger</Button>\r
      <Button variant="outline">Outline</Button>\r
    </div>
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button variant="primary" size="sm">Small</Button>\r
      <Button variant="primary" size="md">Medium</Button>\r
      <Button variant="primary" size="lg">Large</Button>\r
    </div>
}`,...S.parameters?.docs?.source}}};const Y=["Primary","Secondary","Ghost","Danger","Outline","WithIcon","IconRight","IconOnly","Loading","Disabled","WithBadge","Small","Large","FullWidth","AllVariants","AllSizes"];export{S as AllSizes,B as AllVariants,d as Danger,v as Disabled,b as FullWidth,c as Ghost,g as IconOnly,p as IconRight,f as Large,h as Loading,u as Outline,i as Primary,l as Secondary,x as Small,y as WithBadge,m as WithIcon,Y as __namedExportsOrder,X as default};
