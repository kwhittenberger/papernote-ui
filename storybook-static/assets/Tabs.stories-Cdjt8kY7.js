import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-DvQbZzpK.js";import{U as S}from"./user-DCrmKZtR.js";import{S as A}from"./settings-ByrlyAD8.js";import{B as N}from"./bell-DqffplRd.js";import{L as U}from"./lock-DKXss4qV.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-3pObC86R.js";function r({tabs:t,defaultTab:n,variant:o="underline",orientation:i="horizontal",size:l="md",onChange:C}){const[d,w]=s.useState(n||t[0]?.id),W=a=>{w(a),C?.(a)},c={sm:{padding:"px-3 py-1.5",text:"text-xs",icon:"h-3.5 w-3.5",gap:i==="vertical"?"gap-1.5":"gap-4",minWidth:i==="vertical"?"min-w-[150px]":"",spacing:"mt-4"},md:{padding:"px-4 py-2.5",text:"text-sm",icon:"h-4 w-4",gap:i==="vertical"?"gap-2":"gap-6",minWidth:i==="vertical"?"min-w-[200px]":"",spacing:"mt-6"},lg:{padding:"px-5 py-3",text:"text-base",icon:"h-5 w-5",gap:i==="vertical"?"gap-3":"gap-8",minWidth:i==="vertical"?"min-w-[250px]":"",spacing:"mt-8"}};return e.jsxs("div",{className:`w-full ${i==="vertical"?`flex ${c[l].gap}`:""}`,children:[e.jsx("div",{className:`
          flex ${i==="vertical"?"flex-col":""}
          ${o==="underline"?i==="vertical"?`border-r border-paper-200 ${c[l].gap} pr-6`:`border-b border-paper-200 ${c[l].gap}`:`${c[l].gap} p-1 bg-paper-50 rounded-lg`}
          ${c[l].minWidth}
        `,role:"tablist",children:t.map(a=>{const T=d===a.id;return e.jsxs("button",{role:"tab","aria-selected":T,"aria-controls":`panel-${a.id}`,disabled:a.disabled,onClick:()=>!a.disabled&&W(a.id),className:`
                flex items-center gap-2 ${c[l].padding} ${c[l].text} font-medium transition-all duration-200
                ${i==="vertical"?"w-full justify-start":""}
                ${o==="underline"?T?i==="vertical"?"text-accent-900 border-r-2 border-accent-500 -mr-[1px]":"text-accent-900 border-b-2 border-accent-500 -mb-[1px]":i==="vertical"?"text-ink-600 hover:text-ink-900 border-r-2 border-transparent":"text-ink-600 hover:text-ink-900 border-b-2 border-transparent":T?"bg-white text-accent-900 rounded-md shadow-xs":"text-ink-600 hover:text-ink-900 hover:bg-white/50 rounded-md"}
                ${a.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer"}
              `,children:[a.icon&&e.jsx("span",{className:`flex-shrink-0 ${c[l].icon}`,children:a.icon}),e.jsx("span",{children:a.label})]},a.id)})}),e.jsx("div",{className:`${i==="vertical"?"flex-1":c[l].spacing}`,children:t.map(a=>e.jsx("div",{id:`panel-${a.id}`,role:"tabpanel","aria-labelledby":a.id,hidden:d!==a.id,className:d===a.id?"animate-fade-in":"",children:d===a.id&&a.content},a.id))})]})}try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"Tab[]"}},defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"underline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"underline"'},{value:'"pill"'}]}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs (default: 'horizontal')",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"md"},description:"Size of tabs (default: 'md')",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(tabId: string) => void"}}}}}catch{}const D={title:"Navigation/Tabs",component:r,parameters:{layout:"padded"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{minWidth:"600px"},children:e.jsx(t,{})})]},y=[{id:"profile",label:"Profile",content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Profile Content"}),e.jsx("p",{children:"Your profile information goes here."})]})},{id:"settings",label:"Settings",content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Settings Content"}),e.jsx("p",{children:"Application settings go here."})]})},{id:"notifications",label:"Notifications",content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Notifications Content"}),e.jsx("p",{children:"Your notifications appear here."})]})}],j=[{id:"profile",label:"Profile",icon:e.jsx(S,{className:"h-4 w-4"}),content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Profile"}),e.jsx("p",{children:"Manage your profile information."})]})},{id:"settings",label:"Settings",icon:e.jsx(A,{className:"h-4 w-4"}),content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Settings"}),e.jsx("p",{children:"Configure your preferences."})]})},{id:"notifications",label:"Notifications",icon:e.jsx(N,{className:"h-4 w-4"}),content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Notifications"}),e.jsx("p",{children:"View your notifications."})]})},{id:"security",label:"Security",icon:e.jsx(U,{className:"h-4 w-4"}),content:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Manage security settings."})]})}],$=[{id:"all",label:"All",badge:24,content:e.jsx("div",{style:{padding:"1rem"},children:"All items (24)"})},{id:"active",label:"Active",badge:18,content:e.jsx("div",{style:{padding:"1rem"},children:"Active items (18)"})},{id:"pending",label:"Pending",badge:6,content:e.jsx("div",{style:{padding:"1rem"},children:"Pending items (6)"})},{id:"archived",label:"Archived",content:e.jsx("div",{style:{padding:"1rem"},children:"Archived items"})}],p={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:y,activeTab:t,onChange:n})}},m={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:y,activeTab:t,onChange:n,variant:"underline"})}},b={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:y,activeTab:t,onChange:n,variant:"pill"})}},v={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:j,activeTab:t,onChange:n})}},g={render:()=>{const[t,n]=s.useState("all");return e.jsx(r,{tabs:$,activeTab:t,onChange:n})}},u={render:()=>{const[t,n]=s.useState("profile"),o=[{id:"profile",label:"Profile",content:e.jsx("div",{style:{padding:"1rem"},children:"Profile content"})},{id:"settings",label:"Settings",content:e.jsx("div",{style:{padding:"1rem"},children:"Settings content"})},{id:"admin",label:"Admin",disabled:!0,content:e.jsx("div",{style:{padding:"1rem"},children:"Admin content (disabled)"})}];return e.jsx(r,{tabs:o,activeTab:t,onChange:n})}},h={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:j,activeTab:t,onChange:n,orientation:"vertical"})}},x={render:()=>{const[t,n]=s.useState("profile");return e.jsx(r,{tabs:j,activeTab:t,onChange:n,orientation:"vertical",variant:"underline"})}},f={render:()=>{const[t,n]=s.useState("all"),o=[{id:"all",label:"All Users",icon:e.jsx(S,{className:"h-4 w-4"}),badge:156,content:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"All Users (156)"}),e.jsx("p",{style:{color:"#64748b"},children:"Complete list of all registered users."})]})},{id:"active",label:"Active",badge:142,content:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"Active Users (142)"}),e.jsx("p",{style:{color:"#64748b"},children:"Users who have logged in recently."})]})},{id:"pending",label:"Pending",badge:14,content:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"Pending Approval (14)"}),e.jsx("p",{style:{color:"#64748b"},children:"Users awaiting account activation."})]})},{id:"settings",label:"Settings",icon:e.jsx(A,{className:"h-4 w-4"}),content:e.jsxs("div",{style:{padding:"1.5rem"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.25rem",fontWeight:600},children:"User Management Settings"}),e.jsx("p",{style:{color:"#64748b"},children:"Configure user management preferences."})]})}];return e.jsx(r,{tabs:o,activeTab:t,onChange:n,variant:"underline"})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={basicTabs} activeTab={activeTab} onChange={setActiveTab} variant="pill" />;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    return <Tabs tabs={tabsWithBadges} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    const tabs = [{
      id: 'profile',
      label: 'Profile',
      content: <div style={{
        padding: '1rem'
      }}>Profile content</div>
    }, {
      id: 'settings',
      label: 'Settings',
      content: <div style={{
        padding: '1rem'
      }}>Settings content</div>
    }, {
      id: 'admin',
      label: 'Admin',
      disabled: true,
      content: <div style={{
        padding: '1rem'
      }}>Admin content (disabled)</div>
    }];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" />;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('profile');
    return <Tabs tabs={tabsWithIcons} activeTab={activeTab} onChange={setActiveTab} orientation="vertical" variant="underline" />;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = [{
      id: 'all',
      label: 'All Users',
      icon: <User className="h-4 w-4" />,
      badge: 156,
      content: <div style={{
        padding: '1.5rem'
      }}>\r
            <h3 style={{
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>All Users (156)</h3>\r
            <p style={{
          color: '#64748b'
        }}>Complete list of all registered users.</p>\r
          </div>
    }, {
      id: 'active',
      label: 'Active',
      badge: 142,
      content: <div style={{
        padding: '1.5rem'
      }}>\r
            <h3 style={{
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>Active Users (142)</h3>\r
            <p style={{
          color: '#64748b'
        }}>Users who have logged in recently.</p>\r
          </div>
    }, {
      id: 'pending',
      label: 'Pending',
      badge: 14,
      content: <div style={{
        padding: '1.5rem'
      }}>\r
            <h3 style={{
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>Pending Approval (14)</h3>\r
            <p style={{
          color: '#64748b'
        }}>Users awaiting account activation.</p>\r
          </div>
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      content: <div style={{
        padding: '1.5rem'
      }}>\r
            <h3 style={{
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>User Management Settings</h3>\r
            <p style={{
          color: '#64748b'
        }}>Configure user management preferences.</p>\r
          </div>
    }];
    return <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />;
  }
}`,...f.parameters?.docs?.source}}};const M=["Default","Underline","Pill","WithIcons","WithBadges","WithDisabledTab","Vertical","VerticalUnderline","Complete"];export{f as Complete,p as Default,b as Pill,m as Underline,h as Vertical,x as VerticalUnderline,g as WithBadges,u as WithDisabledTab,v as WithIcons,M as __namedExportsOrder,D as default};
