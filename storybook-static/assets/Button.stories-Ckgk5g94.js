import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Button-l3GDSzqG.js";import{S as B}from"./save-DiTIZ5UD.js";import{D as S}from"./download-CVoWMHBj.js";import{P as x}from"./plus-DyNbvuvn.js";import"./loader-circle-6oQ-4-QJ.js";import"./createLucideIcon-BHecmdze.js";import"./iframe-B3mi8TDU.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},iconOnly:{control:"boolean"}}},e={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"ghost",children:"Ghost Button"}},t={args:{variant:"danger",children:"Danger Button"}},o={args:{variant:"outline",children:"Outline Button"}},i={args:{variant:"primary",icon:r.jsx(B,{className:"h-4 w-4"}),iconPosition:"left",children:"Save Changes"}},c={args:{variant:"primary",icon:r.jsx(S,{className:"h-4 w-4"}),iconPosition:"right",children:"Download"}},l={args:{variant:"primary",iconOnly:!0,children:r.jsx(x,{className:"h-4 w-4"})}},d={args:{variant:"primary",loading:!0,children:"Loading..."}},m={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},p={args:{variant:"primary",badge:5,badgeVariant:"error",children:"Messages"}},u={args:{variant:"primary",size:"sm",children:"Small Button"}},g={args:{variant:"primary",size:"lg",children:"Large Button"}},h={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",minWidth:"300px"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"outline",children:"Outline"})]})},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    iconOnly: true,
    children: <Plus className="h-4 w-4" />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading...'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const I=["Primary","Secondary","Ghost","Danger","Outline","WithIcon","IconRight","IconOnly","Loading","Disabled","WithBadge","Small","Large","FullWidth","AllVariants","AllSizes"];export{v as AllSizes,y as AllVariants,t as Danger,m as Disabled,h as FullWidth,s as Ghost,l as IconOnly,c as IconRight,g as Large,d as Loading,o as Outline,e as Primary,n as Secondary,u as Small,p as WithBadge,i as WithIcon,I as __namedExportsOrder,L as default};
