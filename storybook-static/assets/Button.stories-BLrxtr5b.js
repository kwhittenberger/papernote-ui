import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Button-BNpllksT.js";import{S as B}from"./save-D9eJPJix.js";import{D as b}from"./download-B0csiEoO.js";import{P as S}from"./plus-PhVXnqtB.js";import"./loader-circle-C6-flV-T.js";import"./createLucideIcon-Cikyxpgj.js";import"./iframe-DLQwTMM_.js";import"./preload-helper-PPVm8Dsz.js";const W={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`
Interactive button component with multiple variants, sizes, icons, loading states, and notification badges.

## Features
- **Variants**: primary, secondary, ghost, danger, outline
- **Sizes**: sm, md, lg
- **Icons**: Support for left/right positioned icons
- **Loading state**: Shows spinner and disables interaction
- **Badge**: Display notification counts in top-right corner
- **Icon-only mode**: Square buttons with just icons
- **Full width**: Stretch to container width

## Usage

\`\`\`tsx
import { Button } from 'notebook-ui';
import { Save } from 'lucide-react';

<Button variant="primary" icon={<Save />}>
  Save Changes
</Button>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","outline"],description:"Visual style variant of the button",table:{type:{summary:"primary | secondary | ghost | danger | outline"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"Button size",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},loading:{control:"boolean",description:"Show loading spinner and disable interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disable the button",table:{type:{summary:"boolean"}}},fullWidth:{control:"boolean",description:"Make button take full width of container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconOnly:{control:"boolean",description:"Icon-only mode - renders square button with just icon (no text padding)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},icon:{description:"Icon to display alongside button text",table:{type:{summary:"React.ReactNode"}}},iconPosition:{control:"select",options:["left","right"],description:"Position of the icon relative to text",table:{type:{summary:"left | right"},defaultValue:{summary:"left"}}},badge:{description:"Badge content (number or text) displayed in top-right corner",table:{type:{summary:"number | string"}}},badgeVariant:{control:"select",options:["primary","success","warning","error"],description:"Badge color variant",table:{type:{summary:"primary | success | warning | error"},defaultValue:{summary:"error"}}}}},e={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"ghost",children:"Ghost Button"}},o={args:{variant:"danger",children:"Danger Button"}},s={args:{variant:"outline",children:"Outline Button"}},i={args:{variant:"primary",icon:r.jsx(B,{className:"h-4 w-4"}),iconPosition:"left",children:"Save Changes"}},c={args:{variant:"primary",icon:r.jsx(b,{className:"h-4 w-4"}),iconPosition:"right",children:"Download"}},l={args:{variant:"primary",iconOnly:!0,children:r.jsx(S,{className:"h-4 w-4"})}},d={args:{variant:"primary",loading:!0,children:"Loading..."}},m={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},u={args:{variant:"primary",badge:5,badgeVariant:"error",children:"Messages"}},p={args:{variant:"primary",size:"sm",children:"Small Button"}},g={args:{variant:"primary",size:"lg",children:"Large Button"}},y={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},h={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",minWidth:"300px"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"outline",children:"Outline"})]})},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    badge: 5,
    badgeVariant: 'error',
    children: 'Messages'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button variant="primary" size="sm">Small</Button>\r
      <Button variant="primary" size="md">Medium</Button>\r
      <Button variant="primary" size="lg">Large</Button>\r
    </div>
}`,...v.parameters?.docs?.source}}};const O=["Primary","Secondary","Ghost","Danger","Outline","WithIcon","IconRight","IconOnly","Loading","Disabled","WithBadge","Small","Large","FullWidth","AllVariants","AllSizes"];export{v as AllSizes,h as AllVariants,o as Danger,m as Disabled,y as FullWidth,n as Ghost,l as IconOnly,c as IconRight,g as Large,d as Loading,s as Outline,e as Primary,t as Secondary,p as Small,u as WithBadge,i as WithIcon,O as __namedExportsOrder,W as default};
