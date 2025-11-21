import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-DvQbZzpK.js";import{M as q}from"./minus-DUiWEM_-.js";import{C as F}from"./check-BjU13H6V.js";import{F as v}from"./file-text-CqM4uY6G.js";import{I as P}from"./image-CgGShWxb.js";import{M as _,V as B}from"./video-C9fTxasW.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-3pObC86R.js";const t=n.forwardRef(({checked:e,onChange:c,label:a,description:o,disabled:r=!1,indeterminate:b=!1,className:I="",id:N,name:w,icon:y},D)=>{const V=n.useId(),C=N||V,j=o?`${C}-desc`:void 0,A=()=>{r||c(!e)},W=S=>{S.key===" "&&!r&&(S.preventDefault(),c(!e))};return s.jsxs("label",{htmlFor:C,className:`flex items-start gap-3 ${r?"opacity-40 cursor-not-allowed":"cursor-pointer"} ${I}`,children:[s.jsxs("div",{className:"relative inline-block flex-shrink-0 mt-0.5",children:[s.jsx("input",{ref:D,type:"checkbox",id:C,name:w,checked:e,onChange:A,onKeyDown:W,disabled:r,className:"sr-only","aria-checked":b?"mixed":e,"aria-describedby":j,"aria-disabled":r}),s.jsx("div",{className:`
            w-4 h-4 rounded border transition-all duration-200
            flex items-center justify-center
            ${e||b?"bg-accent-600 border-accent-600":"bg-white border-paper-300 hover:border-paper-400"}
            ${!r&&"focus-within:ring-2 focus-within:ring-accent-400 focus-within:ring-offset-2"}
          `,children:b?s.jsx(q,{className:"h-3 w-3 text-white"}):e?s.jsx(F,{className:"h-3 w-3 text-white"}):null})]}),(a||o)&&s.jsxs("div",{className:"flex-1",children:[a&&s.jsxs("div",{className:"flex items-center gap-2",children:[y&&s.jsx("span",{className:"text-ink-700",children:y}),s.jsx("p",{className:"text-sm font-medium text-ink-900",children:a})]}),o&&s.jsx("p",{id:j,className:"text-xs text-ink-600 mt-0.5",children:o})]})]})});t.displayName="Checkbox";try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Optional icon to display next to label",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Forms/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>s.jsx("div",{style:{minWidth:"400px"},children:s.jsx(e,{})})],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},l={render:()=>{const[e,c]=n.useState(!1);return s.jsx(t,{checked:e,onChange:c})}},i={render:()=>{const[e,c]=n.useState(!1);return s.jsx(t,{checked:e,onChange:c,label:"I agree to the terms and conditions"})}},d={render:()=>{const[e,c]=n.useState(!0);return s.jsx(t,{checked:e,onChange:c,label:"Subscribed to newsletter"})}},m={render:()=>s.jsx(t,{checked:!1,onChange:()=>{},disabled:!0,label:"Disabled checkbox"})},h={render:()=>s.jsx(t,{checked:!0,onChange:()=>{},disabled:!0,label:"Disabled (checked)"})},u={render:()=>{const[e,c]=n.useState(!1);return s.jsx(t,{checked:e,onChange:c,label:"Accept terms and conditions",icon:s.jsx(v,{className:"h-4 w-4"})})}},k={render:()=>{const[e,c]=n.useState(!1);return s.jsx(t,{checked:e,onChange:c,size:"sm",label:"Small checkbox"})}},p={render:()=>{const[e,c]=n.useState(!1);return s.jsx(t,{checked:e,onChange:c,size:"lg",label:"Large checkbox"})}},f={render:()=>{const[e,c]=n.useState({notifications:!0,emails:!1,updates:!0,marketing:!1});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsx("h4",{style:{marginBottom:"0.5rem",fontWeight:600},children:"Email Preferences"}),s.jsx(t,{checked:e.notifications,onChange:a=>c({...e,notifications:a}),label:"Notification emails"}),s.jsx(t,{checked:e.emails,onChange:a=>c({...e,emails:a}),label:"Account emails"}),s.jsx(t,{checked:e.updates,onChange:a=>c({...e,updates:a}),label:"Product updates"}),s.jsx(t,{checked:e.marketing,onChange:a=>c({...e,marketing:a}),label:"Marketing emails"})]})}},g={render:()=>{const[e,c]=n.useState({documents:!1,images:!1,audio:!1,video:!1});return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsx("h4",{style:{marginBottom:"0.5rem",fontWeight:600},children:"Select File Types"}),s.jsx(t,{checked:e.documents,onChange:a=>c({...e,documents:a}),label:"Documents (.pdf, .doc, .txt)",icon:s.jsx(v,{className:"h-4 w-4"})}),s.jsx(t,{checked:e.images,onChange:a=>c({...e,images:a}),label:"Images (.jpg, .png, .gif)",icon:s.jsx(P,{className:"h-4 w-4"})}),s.jsx(t,{checked:e.audio,onChange:a=>c({...e,audio:a}),label:"Audio (.mp3, .wav, .flac)",icon:s.jsx(_,{className:"h-4 w-4"})}),s.jsx(t,{checked:e.video,onChange:a=>c({...e,video:a}),label:"Video (.mp4, .avi, .mov)",icon:s.jsx(B,{className:"h-4 w-4"})})]})}},x={render:()=>{const[e,c]=n.useState({item1:!1,item2:!1,item3:!1,item4:!1}),a=Object.values(e).every(Boolean);Object.values(e).some(Boolean);const o=r=>{c({item1:r,item2:r,item3:r,item4:r})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsx(t,{checked:a,onChange:o,label:"Select All",style:{fontWeight:600}}),s.jsxs("div",{style:{marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[s.jsx(t,{checked:e.item1,onChange:r=>c({...e,item1:r}),label:"Item 1"}),s.jsx(t,{checked:e.item2,onChange:r=>c({...e,item2:r}),label:"Item 2"}),s.jsx(t,{checked:e.item3,onChange:r=>c({...e,item3:r}),label:"Item 3"}),s.jsx(t,{checked:e.item4,onChange:r=>c({...e,item4:r}),label:"Item 4"})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="I agree to the terms and conditions" />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label="Subscribed to newsletter" />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked={false} onChange={() => {}} disabled label="Disabled checkbox" />;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked={true} onChange={() => {}} disabled label="Disabled (checked)" />;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="Accept terms and conditions" icon={<FileText className="h-4 w-4" />} />;
  }
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} size="sm" label="Small checkbox" />;
  }
}`,...k.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} size="lg" label="Large checkbox" />;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [preferences, setPreferences] = useState({
      notifications: true,
      emails: false,
      updates: true,
      marketing: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>\r
        <h4 style={{
        marginBottom: '0.5rem',
        fontWeight: 600
      }}>Email Preferences</h4>\r
        <Checkbox checked={preferences.notifications} onChange={checked => setPreferences({
        ...preferences,
        notifications: checked
      })} label="Notification emails" />\r
        <Checkbox checked={preferences.emails} onChange={checked => setPreferences({
        ...preferences,
        emails: checked
      })} label="Account emails" />\r
        <Checkbox checked={preferences.updates} onChange={checked => setPreferences({
        ...preferences,
        updates: checked
      })} label="Product updates" />\r
        <Checkbox checked={preferences.marketing} onChange={checked => setPreferences({
        ...preferences,
        marketing: checked
      })} label="Marketing emails" />\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState({
      documents: false,
      images: false,
      audio: false,
      video: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>\r
        <h4 style={{
        marginBottom: '0.5rem',
        fontWeight: 600
      }}>Select File Types</h4>\r
        <Checkbox checked={selected.documents} onChange={checked => setSelected({
        ...selected,
        documents: checked
      })} label="Documents (.pdf, .doc, .txt)" icon={<FileText className="h-4 w-4" />} />\r
        <Checkbox checked={selected.images} onChange={checked => setSelected({
        ...selected,
        images: checked
      })} label="Images (.jpg, .png, .gif)" icon={<Image className="h-4 w-4" />} />\r
        <Checkbox checked={selected.audio} onChange={checked => setSelected({
        ...selected,
        audio: checked
      })} label="Audio (.mp3, .wav, .flac)" icon={<Music className="h-4 w-4" />} />\r
        <Checkbox checked={selected.video} onChange={checked => setSelected({
        ...selected,
        video: checked
      })} label="Video (.mp4, .avi, .mov)" icon={<Video className="h-4 w-4" />} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
      item4: false
    });
    const allChecked = Object.values(items).every(Boolean);
    const someChecked = Object.values(items).some(Boolean) && !allChecked;
    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked,
        item4: checked
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>\r
        <Checkbox checked={allChecked} onChange={handleSelectAll} label="Select All" style={{
        fontWeight: 600
      }} />\r
        <div style={{
        marginLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
          <Checkbox checked={items.item1} onChange={checked => setItems({
          ...items,
          item1: checked
        })} label="Item 1" />\r
          <Checkbox checked={items.item2} onChange={checked => setItems({
          ...items,
          item2: checked
        })} label="Item 2" />\r
          <Checkbox checked={items.item3} onChange={checked => setItems({
          ...items,
          item3: checked
        })} label="Item 3" />\r
          <Checkbox checked={items.item4} onChange={checked => setItems({
          ...items,
          item4: checked
        })} label="Item 4" />\r
        </div>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const H=["Default","WithLabel","Checked","Disabled","DisabledChecked","WithIcon","Small","Large","CheckboxGroup","FileTypes","SelectAll"];export{f as CheckboxGroup,d as Checked,l as Default,m as Disabled,h as DisabledChecked,g as FileTypes,p as Large,x as SelectAll,k as Small,u as WithIcon,i as WithLabel,H as __namedExportsOrder,K as default};
