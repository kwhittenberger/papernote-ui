import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-BXYHkhYr.js";import{B as o}from"./Button-K5QGL-4f.js";import{C as T}from"./circle-question-mark-BYY_fRTB.js";import{I as j}from"./info-9TKRM18A.js";import{S as N}from"./settings-gzCitmau.js";import{T as L}from"./trash-Cx-IS7SP.js";import"./preload-helper-PPVm8Dsz.js";import"./loader-circle-DxQXtzgz.js";import"./createLucideIcon-D6fSB1ZX.js";function t({children:x,content:v,position:f="top",delay:B=200}){const[w,g]=y.useState(!1),b=y.useRef(void 0),S=()=>{b.current=setTimeout(()=>{g(!0)},B)},k=()=>{b.current&&clearTimeout(b.current),g(!1)},I={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},R={top:"top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-ink-800",bottom:"bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-ink-800",left:"left-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-ink-800",right:"right-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-ink-800"};return e.jsxs("div",{className:"relative inline-block",onMouseEnter:S,onMouseLeave:k,children:[x,w&&e.jsx("div",{className:`absolute z-50 whitespace-nowrap ${I[f]}`,role:"tooltip",children:e.jsxs("div",{className:"bg-ink-800 text-white text-xs px-3 py-1.5 rounded-md shadow-lg animate-fade-in",children:[v,e.jsx("div",{className:`absolute ${R[f]}`})]})})]})}try{t.displayName="Tooltip",t.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},delay:{defaultValue:{value:"200"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}const A={title:"Feedback/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]}}},r={render:()=>e.jsx(t,{content:"This is a tooltip",children:e.jsx(o,{children:"Hover over me"})})},n={render:()=>e.jsx(t,{content:"Tooltip on top",position:"top",children:e.jsx(o,{children:"Top"})})},s={render:()=>e.jsx(t,{content:"Tooltip on bottom",position:"bottom",children:e.jsx(o,{children:"Bottom"})})},i={render:()=>e.jsx(t,{content:"Tooltip on left",position:"left",children:e.jsx(o,{children:"Left"})})},l={render:()=>e.jsx(t,{content:"Tooltip on right",position:"right",children:e.jsx(o,{children:"Right"})})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("span",{children:"Need help?"}),e.jsx(t,{content:"Click for more information",children:e.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"#64748b",padding:"0.25rem"},children:e.jsx(T,{className:"h-5 w-5"})})})]})},d={render:()=>e.jsx(t,{content:"This is a longer tooltip message that demonstrates how tooltips handle multiple lines of text",children:e.jsx(o,{children:"Long tooltip"})})},p={render:()=>e.jsx(t,{content:"This tooltip has a 500ms delay",delay:500,children:e.jsx(o,{children:"Slower tooltip (500ms)"})})},c={render:()=>e.jsx(t,{content:"This tooltip appears instantly",delay:0,children:e.jsx(o,{children:"Instant tooltip"})})},m={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3rem",padding:"3rem"},children:[e.jsx("div",{}),e.jsx(t,{content:"Top tooltip",position:"top",children:e.jsx(o,{fullWidth:!0,children:"Top"})}),e.jsx("div",{}),e.jsx(t,{content:"Left tooltip",position:"left",children:e.jsx(o,{fullWidth:!0,children:"Left"})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"Hover over buttons"})}),e.jsx(t,{content:"Right tooltip",position:"right",children:e.jsx(o,{fullWidth:!0,children:"Right"})}),e.jsx("div",{}),e.jsx(t,{content:"Bottom tooltip",position:"bottom",children:e.jsx(o,{fullWidth:!0,children:"Bottom"})}),e.jsx("div",{})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(t,{content:"Information",children:e.jsx("button",{style:{padding:"0.5rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer"},children:e.jsx(j,{className:"h-5 w-5"})})}),e.jsx(t,{content:"Settings",children:e.jsx("button",{style:{padding:"0.5rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer"},children:e.jsx(N,{className:"h-5 w-5"})})}),e.jsx(t,{content:"Delete",position:"bottom",children:e.jsx("button",{style:{padding:"0.5rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer",color:"#ef4444"},children:e.jsx(L,{className:"h-5 w-5"})})}),e.jsx(t,{content:"Help",children:e.jsx("button",{style:{padding:"0.5rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer"},children:e.jsx(T,{className:"h-5 w-5"})})})]})},h={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:500},children:["Email Address",e.jsx(t,{content:"We'll never share your email with anyone else",children:e.jsx(j,{className:"h-4 w-4 text-ink-500",style:{cursor:"help"}})})]}),e.jsx("input",{type:"email",placeholder:"you@example.com",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a tooltip">\r
      <Button>Hover over me</Button>\r
    </Tooltip>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip on top" position="top">\r
      <Button>Top</Button>\r
    </Tooltip>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip on bottom" position="bottom">\r
      <Button>Bottom</Button>\r
    </Tooltip>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip on left" position="left">\r
      <Button>Left</Button>\r
    </Tooltip>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Tooltip on right" position="right">\r
      <Button>Right</Button>\r
    </Tooltip>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <span>Need help?</span>\r
      <Tooltip content="Click for more information">\r
        <button style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#64748b',
        padding: '0.25rem'
      }}>\r
          <HelpCircle className="h-5 w-5" />\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a longer tooltip message that demonstrates how tooltips handle multiple lines of text">\r
      <Button>Long tooltip</Button>\r
    </Tooltip>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This tooltip has a 500ms delay" delay={500}>\r
      <Button>Slower tooltip (500ms)</Button>\r
    </Tooltip>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This tooltip appears instantly" delay={0}>\r
      <Button>Instant tooltip</Button>\r
    </Tooltip>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
    padding: '3rem'
  }}>\r
      <div></div>\r
      <Tooltip content="Top tooltip" position="top">\r
        <Button fullWidth>Top</Button>\r
      </Tooltip>\r
      <div></div>\r
\r
      <Tooltip content="Left tooltip" position="left">\r
        <Button fullWidth>Left</Button>\r
      </Tooltip>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>\r
        <span style={{
        color: '#64748b',
        fontSize: '0.875rem'
      }}>Hover over buttons</span>\r
      </div>\r
      <Tooltip content="Right tooltip" position="right">\r
        <Button fullWidth>Right</Button>\r
      </Tooltip>\r
\r
      <div></div>\r
      <Tooltip content="Bottom tooltip" position="bottom">\r
        <Button fullWidth>Bottom</Button>\r
      </Tooltip>\r
      <div></div>\r
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>\r
      <Tooltip content="Information">\r
        <button style={{
        padding: '0.5rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem',
        background: 'white',
        cursor: 'pointer'
      }}>\r
          <Info className="h-5 w-5" />\r
        </button>\r
      </Tooltip>\r
\r
      <Tooltip content="Settings">\r
        <button style={{
        padding: '0.5rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem',
        background: 'white',
        cursor: 'pointer'
      }}>\r
          <Settings className="h-5 w-5" />\r
        </button>\r
      </Tooltip>\r
\r
      <Tooltip content="Delete" position="bottom">\r
        <button style={{
        padding: '0.5rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem',
        background: 'white',
        cursor: 'pointer',
        color: '#ef4444'
      }}>\r
          <Trash className="h-5 w-5" />\r
        </button>\r
      </Tooltip>\r
\r
      <Tooltip content="Help">\r
        <button style={{
        padding: '0.5rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem',
        background: 'white',
        cursor: 'pointer'
      }}>\r
          <HelpCircle className="h-5 w-5" />\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500
    }}>\r
        Email Address\r
        <Tooltip content="We'll never share your email with anyone else">\r
          <Info className="h-4 w-4 text-ink-500" style={{
          cursor: 'help'
        }} />\r
        </Tooltip>\r
      </label>\r
      <input type="email" placeholder="you@example.com" style={{
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #e5e5e5',
      borderRadius: '0.375rem',
      fontSize: '0.875rem'
    }} />\r
    </div>
}`,...h.parameters?.docs?.source}}};const q=["Default","Top","Bottom","Left","Right","WithIcon","LongText","CustomDelay","InstantTooltip","AllPositions","IconButtons","FormFieldHelp"];export{m as AllPositions,s as Bottom,p as CustomDelay,r as Default,h as FormFieldHelp,u as IconButtons,c as InstantTooltip,i as Left,d as LongText,l as Right,n as Top,a as WithIcon,q as __namedExportsOrder,A as default};
