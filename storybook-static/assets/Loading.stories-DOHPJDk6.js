import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r}from"./Loading-DlA0mX86.js";import"./loader-circle-BUSlDFqH.js";import"./createLucideIcon-D9MvcA__.js";import"./iframe-C8OopBmF.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"Feedback/Loading",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["spinner","dots","pulse"]},size:{control:"select",options:["sm","md","lg"]}}},s={args:{variant:"spinner"}},n={args:{variant:"dots"}},a={args:{variant:"pulse"}},i={args:{variant:"spinner",size:"sm"}},t={args:{variant:"spinner",size:"md"}},o={args:{variant:"spinner",size:"lg"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[e.jsx(r,{variant:"spinner"}),e.jsx("span",{style:{color:"#64748b"},children:"Loading..."})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"spinner",size:"sm"}),e.jsx("span",{children:"Saving changes..."})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"3rem",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"spinner"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Spinner"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"dots"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"pulse"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Pulse"})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"spinner",size:"sm"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"spinner",size:"md"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Medium"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{variant:"spinner",size:"lg"}),e.jsx("span",{style:{fontSize:"1rem",color:"#64748b"},children:"Large"})]})]})},m={render:()=>e.jsxs("div",{style:{width:"400px",padding:"3rem 2rem",border:"1px solid #e5e5e5",borderRadius:"0.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[e.jsx(r,{variant:"spinner",size:"lg"}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Loading your data"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Please wait while we fetch your information..."})]})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("button",{disabled:!0,style:{padding:"0.5rem 1rem",border:"none",borderRadius:"0.375rem",background:"#e5e5e5",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem",cursor:"not-allowed"},children:[e.jsx(r,{variant:"spinner",size:"sm"}),"Saving..."]}),e.jsxs("button",{disabled:!0,style:{padding:"0.5rem 1rem",border:"none",borderRadius:"0.375rem",background:"#3b82f6",color:"white",display:"flex",alignItems:"center",gap:"0.5rem",cursor:"not-allowed",opacity:.7},children:[e.jsx(r,{variant:"spinner",size:"sm"}),"Processing..."]})]})},u={render:()=>e.jsxs("div",{style:{width:"100vw",height:"400px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",backgroundColor:"#fafaf9"},children:[e.jsx(r,{variant:"spinner",size:"lg"}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{style:{marginBottom:"0.5rem",fontSize:"1.5rem"},children:"Loading Application"}),e.jsx("p",{style:{color:"#64748b"},children:"Setting up your workspace..."})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pulse'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner',
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner',
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  }}>\r
      <Loading variant="spinner" />\r
      <span style={{
      color: '#64748b'
    }}>Loading...</span>\r
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}>\r
      <Loading variant="spinner" size="sm" />\r
      <span>Saving changes...</span>\r
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '3rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="spinner" />\r
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Spinner</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="dots" />\r
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Dots</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="pulse" />\r
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Pulse</span>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="spinner" size="sm" />\r
        <span style={{
        fontSize: '0.75rem',
        color: '#64748b'
      }}>Small</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="spinner" size="md" />\r
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Medium</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <Loading variant="spinner" size="lg" />\r
        <span style={{
        fontSize: '1rem',
        color: '#64748b'
      }}>Large</span>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    padding: '3rem 2rem',
    border: '1px solid #e5e5e5',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  }}>\r
      <Loading variant="spinner" size="lg" />\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <h3 style={{
        marginBottom: '0.5rem'
      }}>Loading your data</h3>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Please wait while we fetch your information...</p>\r
      </div>\r
    </div>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <button disabled style={{
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.375rem',
      background: '#e5e5e5',
      color: '#64748b',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'not-allowed'
    }}>\r
        <Loading variant="spinner" size="sm" />\r
        Saving...\r
      </button>\r
\r
      <button disabled style={{
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.375rem',
      background: '#3b82f6',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'not-allowed',
      opacity: 0.7
    }}>\r
        <Loading variant="spinner" size="sm" />\r
        Processing...\r
      </button>\r
    </div>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100vw',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    backgroundColor: '#fafaf9'
  }}>\r
      <Loading variant="spinner" size="lg" />\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <h2 style={{
        marginBottom: '0.5rem',
        fontSize: '1.5rem'
      }}>Loading Application</h2>\r
        <p style={{
        color: '#64748b'
      }}>Setting up your workspace...</p>\r
      </div>\r
    </div>
}`,...u.parameters?.docs?.source}}};const S=["Spinner","Dots","Pulse","Small","Medium","Large","WithText","InlineWithText","AllVariants","AllSizes","InCard","ButtonLoading","FullPage"];export{p as AllSizes,c as AllVariants,g as ButtonLoading,n as Dots,u as FullPage,m as InCard,d as InlineWithText,o as Large,t as Medium,a as Pulse,i as Small,s as Spinner,l as WithText,S as __namedExportsOrder,j as default};
