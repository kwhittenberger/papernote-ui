import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CSg7ci3J.js";import{T as G,C as J}from"./triangle-alert-D-hCUnFb.js";import{C as K}from"./circle-alert-B0oKM4NA.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-cNZIheGE.js";const s=n.forwardRef(({label:e,helperText:a,validationState:t,validationMessage:o,maxLength:l,showCharCount:k=!1,autoExpand:u=!1,minRows:j=2,maxRows:q=10,resize:A="vertical",className:D="",id:H,value:i,rows:$=4,...R},_)=>{const c=H||`textarea-${Math.random().toString(36).substring(2,9)}`,N=typeof i=="string"?i.length:0,B=n.useRef(null),d=_||B;n.useEffect(()=>{if(u&&d.current){const m=d.current;m.style.height="auto";const M=window.getComputedStyle(m),E=parseInt(M.lineHeight),I=E*j,P=E*q,Y=Math.min(Math.max(m.scrollHeight,I),P);m.style.height=`${Y}px`}},[i,u,j,q,d]);const O=()=>{if(u)return"resize-none overflow-hidden";switch(A){case"none":return"resize-none";case"vertical":return"resize-y";case"horizontal":return"resize-x";case"both":return"resize";default:return"resize-y"}},W=()=>{switch(t){case"error":return"border-error-400 focus:border-error-400 focus:ring-error-400";case"success":return"border-success-400 focus:border-success-400 focus:ring-success-400";case"warning":return"border-warning-400 focus:border-warning-400 focus:ring-warning-400";default:return"border-paper-300 focus:border-accent-400 focus:ring-accent-400 hover:border-paper-400"}},F=()=>{switch(t){case"error":return r.jsx(K,{className:"h-5 w-5 text-error-500"});case"success":return r.jsx(J,{className:"h-5 w-5 text-success-500"});case"warning":return r.jsx(G,{className:"h-5 w-5 text-warning-500"});default:return null}},L=()=>{switch(t){case"error":return"text-error-600";case"success":return"text-success-600";case"warning":return"text-warning-600";default:return"text-ink-600"}};return r.jsxs("div",{className:"w-full",children:[e&&r.jsxs("label",{htmlFor:c,className:"label",children:[e,R.required&&r.jsx("span",{className:"text-error-500 ml-1",children:"*"})]}),r.jsx("textarea",{ref:d,id:c,value:i,maxLength:l,rows:u?j:$,className:`
            block w-full px-4 py-3 border rounded-lg text-sm text-ink-800 placeholder-ink-400
            bg-white bg-subtle-grain transition-all duration-200
            focus:outline-none focus:ring-2 ${O()}
            disabled:bg-paper-100 disabled:text-ink-400 disabled:cursor-not-allowed disabled:opacity-60
            ${W()}
            ${D}
          `,"aria-invalid":t==="error","aria-describedby":o||a?`${c}-help`:void 0,"aria-required":R.required,...R}),(a||o||k&&l)&&r.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[t&&F(),(a||o)&&r.jsx("p",{id:`${c}-help`,className:`text-xs ${o?L():"text-ink-600"}`,children:o||a})]}),k&&l&&r.jsxs("p",{className:`text-xs ${N>=l?"text-error-600":"text-ink-500"}`,children:[N," / ",l]})]})]})});s.displayName="Textarea";try{s.displayName="Textarea",s.__docgenInfo={description:"",displayName:"Textarea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:null,description:"",name:"validationState",required:!1,type:{name:"ValidationState"}},validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCharCount:{defaultValue:{value:"false"},description:"",name:"showCharCount",required:!1,type:{name:"boolean"}},autoExpand:{defaultValue:{value:"false"},description:"Auto-expand textarea height based on content",name:"autoExpand",required:!1,type:{name:"boolean"}},minRows:{defaultValue:{value:"2"},description:"Minimum rows when auto-expanding (default: 2)",name:"minRows",required:!1,type:{name:"number"}},maxRows:{defaultValue:{value:"10"},description:"Maximum rows when auto-expanding (default: 10)",name:"maxRows",required:!1,type:{name:"number"}},resize:{defaultValue:{value:"vertical"},description:"Resize behavior (default: 'vertical') - overridden to 'none' when autoExpand is true",name:"resize",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"none"'},{value:'"both"'}]}}}}}catch{}const ae={title:"Forms/Textarea",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{minWidth:"500px"},children:r.jsx(e,{})})],argTypes:{resize:{control:"select",options:["none","vertical","horizontal","both"]}}},p={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Description",value:e,onChange:t=>a(t.target.value),placeholder:"Enter description..."})}},h={render:()=>{const[e,a]=n.useState("This is some initial text content that demonstrates how the textarea displays pre-filled content.");return r.jsx(s,{label:"Bio",value:e,onChange:t=>a(t.target.value)})}},g={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Message",value:e,onChange:t=>a(t.target.value),required:!0,placeholder:"Enter your message..."})}},x={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Comments",value:e,onChange:t=>a(t.target.value),error:"This field is required"})}},b={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Feedback",value:e,onChange:t=>a(t.target.value),helperText:"Please provide detailed feedback (min 50 characters)",placeholder:"Your feedback..."})}},v={render:()=>r.jsx(s,{label:"Disabled Textarea",value:"This textarea is disabled",onChange:()=>{},disabled:!0})},f={render:()=>r.jsx(s,{label:"Read Only",value:"This content is read-only and cannot be edited.",onChange:()=>{},readOnly:!0})},y={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Large Text Area",value:e,onChange:t=>a(t.target.value),rows:8,placeholder:"This textarea has 8 rows..."})}},C={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Auto-expanding",value:e,onChange:t=>a(t.target.value),autoExpand:!0,placeholder:"Type multiple lines and watch this textarea grow automatically..."})}},w={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"No Resize",value:e,onChange:t=>a(t.target.value),resize:"none",placeholder:"This textarea cannot be resized"})}},S={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Horizontal Resize",value:e,onChange:t=>a(t.target.value),resize:"horizontal",placeholder:"This textarea can only be resized horizontally"})}},T={render:()=>{const[e,a]=n.useState("");return r.jsx(s,{label:"Resize Both Directions",value:e,onChange:t=>a(t.target.value),resize:"both",placeholder:"This textarea can be resized in both directions"})}},V={render:()=>{const[e,a]=n.useState(""),t=200;return r.jsxs("div",{children:[r.jsx(s,{label:"Comment",value:e,onChange:o=>a(o.target.value),placeholder:"Enter your comment (max 200 characters)...",maxLength:t}),r.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"#64748b",textAlign:"right"},children:[e.length," / ",t]})]})}},z={render:()=>{const[e,a]=n.useState(""),t=()=>{alert(`Submitted: ${e}`),a("")};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(s,{label:"Add a Comment",value:e,onChange:o=>a(o.target.value),rows:4,placeholder:"Share your thoughts...",helperText:"Be respectful and constructive"}),r.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>a(""),style:{padding:"0.5rem 1rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer"},children:"Cancel"}),r.jsx("button",{onClick:t,disabled:!e.trim(),style:{padding:"0.5rem 1rem",border:"none",borderRadius:"0.375rem",background:e.trim()?"#3b82f6":"#e5e5e5",color:"white",cursor:e.trim()?"pointer":"not-allowed"},children:"Submit"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Description" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter description..." />;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('This is some initial text content that demonstrates how the textarea displays pre-filled content.');
    return <Textarea label="Bio" value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Message" value={value} onChange={e => setValue(e.target.value)} required placeholder="Enter your message..." />;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Comments" value={value} onChange={e => setValue(e.target.value)} error="This field is required" />;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Feedback" value={value} onChange={e => setValue(e.target.value)} helperText="Please provide detailed feedback (min 50 characters)" placeholder="Your feedback..." />;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Textarea label="Disabled Textarea" value="This textarea is disabled" onChange={() => {}} disabled />;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Textarea label="Read Only" value="This content is read-only and cannot be edited." onChange={() => {}} readOnly />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Large Text Area" value={value} onChange={e => setValue(e.target.value)} rows={8} placeholder="This textarea has 8 rows..." />;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Auto-expanding" value={value} onChange={e => setValue(e.target.value)} autoExpand placeholder="Type multiple lines and watch this textarea grow automatically..." />;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="No Resize" value={value} onChange={e => setValue(e.target.value)} resize="none" placeholder="This textarea cannot be resized" />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Horizontal Resize" value={value} onChange={e => setValue(e.target.value)} resize="horizontal" placeholder="This textarea can only be resized horizontally" />;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea label="Resize Both Directions" value={value} onChange={e => setValue(e.target.value)} resize="both" placeholder="This textarea can be resized in both directions" />;
  }
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    return <div>\r
        <Textarea label="Comment" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter your comment (max 200 characters)..." maxLength={maxLength} />\r
        <div style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b',
        textAlign: 'right'
      }}>\r
          {value.length} / {maxLength}\r
        </div>\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = useState('');
    const handleSubmit = () => {
      alert(\`Submitted: \${comment}\`);
      setComment('');
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <Textarea label="Add a Comment" value={comment} onChange={e => setComment(e.target.value)} rows={4} placeholder="Share your thoughts..." helperText="Be respectful and constructive" />\r
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>\r
          <button onClick={() => setComment('')} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer'
        }}>\r
            Cancel\r
          </button>\r
          <button onClick={handleSubmit} disabled={!comment.trim()} style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: comment.trim() ? '#3b82f6' : '#e5e5e5',
          color: 'white',
          cursor: comment.trim() ? 'pointer' : 'not-allowed'
        }}>\r
            Submit\r
          </button>\r
        </div>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const te=["Default","WithValue","Required","WithError","WithHelperText","Disabled","ReadOnly","CustomRows","AutoExpand","ResizeNone","ResizeHorizontal","ResizeBoth","CharacterCount","CommentForm"];export{C as AutoExpand,V as CharacterCount,z as CommentForm,y as CustomRows,p as Default,v as Disabled,f as ReadOnly,g as Required,T as ResizeBoth,S as ResizeHorizontal,w as ResizeNone,x as WithError,b as WithHelperText,h as WithValue,te as __namedExportsOrder,ae as default};
