import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-C8OopBmF.js";import{L as W}from"./loader-circle-BUSlDFqH.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D9MvcA__.js";const s=a.forwardRef(({checked:n,onChange:t,label:i,description:r,disabled:o=!1,size:d="md",loading:c=!1},j)=>{const h=a.useId(),N=i?`${h}-label`:void 0,z=r?`${h}-desc`:void 0,u={sm:{switch:"w-9 h-5",slider:"h-4 w-4",translate:"translate-x-4",spinner:"h-3 w-3"},md:{switch:"w-11 h-6",slider:"h-5 w-5",translate:"translate-x-5",spinner:"h-4 w-4"},lg:{switch:"w-14 h-7",slider:"h-6 w-6",translate:"translate-x-7",spinner:"h-5 w-5"}}[d],l=o||c,D=()=>{l||t(!n)};return e.jsxs("label",{htmlFor:h,className:`flex items-center gap-3 ${l?"opacity-40 cursor-not-allowed":"cursor-pointer"}`,children:[e.jsxs("div",{className:"relative inline-block flex-shrink-0",children:[e.jsx("input",{ref:j,id:h,type:"checkbox",role:"switch",checked:n,onChange:D,disabled:l,"aria-checked":n,"aria-labelledby":N,"aria-describedby":z,"aria-disabled":l,"aria-busy":c,className:"sr-only"}),e.jsx("div",{className:`
            ${u.switch}
            rounded-full transition-all duration-200
            ${n?"bg-accent-500":"bg-paper-300"}
            ${!l&&"hover:shadow-sm"}
          `,children:e.jsx("div",{className:`
              ${u.slider}
              absolute left-0.5 top-0.5 bg-white rounded-full shadow-sm transition-transform duration-200 flex items-center justify-center
              ${n?u.translate:""}
            `,children:c&&e.jsx(W,{className:`${u.spinner} animate-spin text-accent-600`})})})]}),(i||r)&&e.jsxs("div",{className:"flex-1",children:[i&&e.jsx("p",{id:N,className:"text-sm font-medium text-ink-900",children:i}),r&&e.jsx("p",{id:z,className:"text-xs text-ink-600 mt-0.5",children:r})]})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},loading:{defaultValue:{value:"false"},description:"Show loading spinner (disables interaction)",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Forms/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(n,{})})],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},m={render:()=>{const[n,t]=a.useState(!1);return e.jsx(s,{checked:n,onChange:t})}},p={render:()=>{const[n,t]=a.useState(!1);return e.jsx(s,{checked:n,onChange:t,label:"Enable notifications"})}},g={render:()=>{const[n,t]=a.useState(!0);return e.jsx(s,{checked:n,onChange:t,label:"Enabled feature"})}},f={render:()=>e.jsx(s,{checked:!1,onChange:()=>{},disabled:!0,label:"Disabled switch"})},y={render:()=>e.jsx(s,{checked:!0,onChange:()=>{},disabled:!0,label:"Disabled (checked)"})},v={render:()=>{const[n,t]=a.useState(!1);return e.jsx(s,{checked:n,onChange:t,loading:!0,label:"Saving..."})}},k={render:()=>{const[n,t]=a.useState(!0);return e.jsx(s,{checked:n,onChange:t,loading:!0,label:"Updating..."})}},x={render:()=>{const[n,t]=a.useState(!1);return e.jsx(s,{checked:n,onChange:t,size:"sm",label:"Small switch"})}},S={render:()=>{const[n,t]=a.useState(!1);return e.jsx(s,{checked:n,onChange:t,size:"lg",label:"Large switch"})}},b={render:()=>{const[n,t]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"0.75rem"},children:[e.jsx(s,{checked:n,onChange:t}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500,marginBottom:"0.25rem"},children:"Email Notifications"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Receive email notifications for important updates"})]})]})}},C={render:()=>{const[n,t]=a.useState(!1),[i,r]=a.useState(!1),o=async d=>{r(!0),await new Promise(c=>setTimeout(c,1500)),t(d),r(!1)};return e.jsx(s,{checked:n,onChange:o,loading:i,label:"Async toggle (1.5s delay)"})}},w={render:()=>{const[n,t]=a.useState(!0),[i,r]=a.useState(!1),[o,d]=a.useState(!1),[c,j]=a.useState(!0);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600,marginBottom:"1rem"},children:"Notification Settings"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:"Push Notifications"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Receive push notifications on your device"})]}),e.jsx(s,{checked:n,onChange:t})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:"Email Notifications"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Get notified via email for important updates"})]}),e.jsx(s,{checked:i,onChange:r})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:"Marketing Emails"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Receive updates about new features and promotions"})]}),e.jsx(s,{checked:o,onChange:d})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:"Analytics"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Help us improve by sharing anonymous usage data"})]}),e.jsx(s,{checked:c,onChange:j})]})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} label="Enable notifications" />;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} label="Enabled feature" />;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Switch checked={false} onChange={() => {}} disabled label="Disabled switch" />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Switch checked={true} onChange={() => {}} disabled label="Disabled (checked)" />;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} loading label="Saving..." />;
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} loading label="Updating..." />;
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} size="sm" label="Small switch" />;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} size="lg" label="Large switch" />;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'start',
      gap: '0.75rem'
    }}>\r
        <Switch checked={checked} onChange={setChecked} />\r
        <div>\r
          <div style={{
          fontWeight: 500,
          marginBottom: '0.25rem'
        }}>Email Notifications</div>\r
          <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Receive email notifications for important updates\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = async (newValue: boolean) => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setChecked(newValue);
      setLoading(false);
    };
    return <Switch checked={checked} onChange={handleChange} loading={loading} label="Async toggle (1.5s delay)" />;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [emails, setEmails] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <div>\r
          <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>\r
            Notification Settings\r
          </h3>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>\r
              <div>\r
                <div style={{
                fontWeight: 500
              }}>Push Notifications</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>\r
                  Receive push notifications on your device\r
                </div>\r
              </div>\r
              <Switch checked={notifications} onChange={setNotifications} />\r
            </div>\r
\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>\r
              <div>\r
                <div style={{
                fontWeight: 500
              }}>Email Notifications</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>\r
                  Get notified via email for important updates\r
                </div>\r
              </div>\r
              <Switch checked={emails} onChange={setEmails} />\r
            </div>\r
\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>\r
              <div>\r
                <div style={{
                fontWeight: 500
              }}>Marketing Emails</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>\r
                  Receive updates about new features and promotions\r
                </div>\r
              </div>\r
              <Switch checked={marketing} onChange={setMarketing} />\r
            </div>\r
\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>\r
              <div>\r
                <div style={{
                fontWeight: 500
              }}>Analytics</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>\r
                  Help us improve by sharing anonymous usage data\r
                </div>\r
              </div>\r
              <Switch checked={analytics} onChange={setAnalytics} />\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...w.parameters?.docs?.source}}};const R=["Default","WithLabel","Checked","Disabled","DisabledChecked","Loading","LoadingChecked","Small","Large","WithDescription","AsyncToggle","SettingsGroup"];export{C as AsyncToggle,g as Checked,m as Default,f as Disabled,y as DisabledChecked,S as Large,v as Loading,k as LoadingChecked,w as SettingsGroup,x as Small,b as WithDescription,p as WithLabel,R as __namedExportsOrder,$ as default};
