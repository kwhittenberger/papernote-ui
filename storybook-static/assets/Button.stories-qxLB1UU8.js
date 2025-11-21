import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Button-K5QGL-4f.js";import{c as B}from"./createLucideIcon-D6fSB1ZX.js";import{P as S}from"./plus-H0uDQyTH.js";import"./loader-circle-DxQXtzgz.js";import"./iframe-BXYHkhYr.js";import"./preload-helper-PPVm8Dsz.js";const x=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],b=B("download",x);const f=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],D=B("save",f),I={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},iconOnly:{control:"boolean"}}},e={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},t={args:{variant:"ghost",children:"Ghost Button"}},s={args:{variant:"danger",children:"Danger Button"}},o={args:{variant:"outline",children:"Outline Button"}},i={args:{variant:"primary",icon:r.jsx(D,{className:"h-4 w-4"}),iconPosition:"left",children:"Save Changes"}},c={args:{variant:"primary",icon:r.jsx(b,{className:"h-4 w-4"}),iconPosition:"right",children:"Download"}},d={args:{variant:"primary",iconOnly:!0,children:r.jsx(S,{className:"h-4 w-4"})}},l={args:{variant:"primary",loading:!0,children:"Loading..."}},m={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},p={args:{variant:"primary",badge:5,badgeVariant:"error",children:"Messages"}},u={args:{variant:"primary",size:"sm",children:"Small Button"}},g={args:{variant:"primary",size:"lg",children:"Large Button"}},h={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",minWidth:"300px"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"outline",children:"Outline"})]})},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Save className="h-4 w-4" />,
    iconPosition: 'left',
    children: 'Save Changes'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Download className="h-4 w-4" />,
    iconPosition: 'right',
    children: 'Download'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    iconOnly: true,
    children: <Plus className="h-4 w-4" />
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading...'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    badge: 5,
    badgeVariant: 'error',
    children: 'Messages'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button variant="primary" size="sm">Small</Button>\r
      <Button variant="primary" size="md">Medium</Button>\r
      <Button variant="primary" size="lg">Large</Button>\r
    </div>
}`,...v.parameters?.docs?.source}}};const M=["Primary","Secondary","Ghost","Danger","Outline","WithIcon","IconRight","IconOnly","Loading","Disabled","WithBadge","Small","Large","FullWidth","AllVariants","AllSizes"];export{v as AllSizes,y as AllVariants,s as Danger,m as Disabled,h as FullWidth,t as Ghost,d as IconOnly,c as IconRight,g as Large,l as Loading,o as Outline,e as Primary,n as Secondary,u as Small,p as WithBadge,i as WithIcon,M as __namedExportsOrder,I as default};
