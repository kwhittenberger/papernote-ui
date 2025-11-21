import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as E}from"./iframe-DvQbZzpK.js";import{r as L}from"./index-IF-Eaj1p.js";import{C as l}from"./chevron-down-7ZmIJCPf.js";import{B as o}from"./Button-BJE2IaNp.js";import{U as y}from"./user-DCrmKZtR.js";import{S as O}from"./settings-ByrlyAD8.js";import{C}from"./circle-question-mark-DWqWVGQG.js";import{L as A}from"./log-out-iIA4tlSH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4c9DrD0.js";import"./createLucideIcon-3pObC86R.js";import"./loader-circle-SD7GARUd.js";function s({trigger:r,items:n,align:c="right",placement:g="bottom"}){const[i,N]=a.useState(!1),[P,$]=a.useState({top:0,left:0}),m=a.useRef(null),u=a.useRef(null);a.useEffect(()=>{if(i&&m.current&&u.current){const t=m.current.getBoundingClientRect(),d=224,I=u.current.offsetHeight||200;let D=g==="top"?t.top-I-8:t.bottom+8,p=c==="right"?t.right-d:t.left;p+d>window.innerWidth&&(p=window.innerWidth-d-8),p<8&&(p=8),D<8&&(D=8),$({top:D,left:p})}},[i,c,g]),a.useEffect(()=>{const t=d=>{m.current&&!m.current.contains(d.target)&&u.current&&!u.current.contains(d.target)&&N(!1)};return i&&document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[i]);const k=t=>{!t.disabled&&t.onClick&&(t.onClick(),N(!1))},B=i?e.jsx("div",{ref:u,style:{position:"fixed",top:`${P.top}px`,left:`${P.left}px`,zIndex:9999},className:"w-56 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 py-1 animate-fade-in",children:n.map(t=>e.jsx(E.Fragment,{children:t.divider?e.jsx("div",{className:"my-1 border-t border-paper-200"}):e.jsxs("button",{onClick:()=>k(t),disabled:t.disabled,className:`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${t.disabled?"text-ink-400 cursor-not-allowed":t.variant==="danger"?"text-error-600 hover:bg-error-50 hover:text-error-700":"text-ink-700 hover:bg-paper-50 hover:text-ink-900"}`,children:[t.icon&&e.jsx("span",{className:"flex-shrink-0",children:t.icon}),e.jsx("span",{className:"flex-1 text-left",children:t.label})]})},t.id))}):null;return e.jsxs("div",{className:"relative inline-block",ref:m,children:[e.jsx("div",{onClick:t=>{t.preventDefault(),t.stopPropagation(),N(!i)},className:"cursor-pointer",children:r}),B&&L.createPortal(B,document.body)]})}function _({children:r,isOpen:n}){return e.jsxs("button",{className:"inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 transition-all shadow-xs hover:shadow-sm",children:[r,e.jsx(l,{className:`h-4 w-4 transition-transform ${n?"rotate-180":""}`})]})}try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropdownItem[]"}},align:{defaultValue:{value:"right"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}try{_.displayName="DropdownTrigger",_.__docgenInfo={description:"",displayName:"DropdownTrigger",props:{children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Components/Dropdown",component:s,parameters:{layout:"centered"},tags:["autodocs"]},b={render:()=>{const r=[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}];return e.jsx(s,{trigger:e.jsxs(o,{children:["Open Menu ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:r,onSelect:n=>alert(`Selected: ${n.label}`)})}},h={render:()=>{const r=[{id:"1",label:"Profile",icon:e.jsx(y,{className:"h-4 w-4"})},{id:"2",label:"Settings",icon:e.jsx(O,{className:"h-4 w-4"})},{id:"3",label:"Help",icon:e.jsx(C,{className:"h-4 w-4"})},{id:"4",label:"Sign Out",icon:e.jsx(A,{className:"h-4 w-4"})}];return e.jsx(s,{trigger:e.jsxs(o,{children:["Account ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:r,onSelect:n=>alert(`Selected: ${n.label}`)})}},f={render:()=>{const r=[{id:"1",label:"Profile",icon:e.jsx(y,{className:"h-4 w-4"})},{id:"2",label:"Settings",icon:e.jsx(O,{className:"h-4 w-4"})},{id:"divider-1",divider:!0},{id:"3",label:"Help",icon:e.jsx(C,{className:"h-4 w-4"})},{id:"divider-2",divider:!0},{id:"4",label:"Sign Out",icon:e.jsx(A,{className:"h-4 w-4"}),danger:!0}];return e.jsx(s,{trigger:e.jsxs(o,{children:["Menu ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:r,onSelect:n=>alert(`Selected: ${n.label}`)})}},x={render:()=>{const r=[{id:"1",label:"Available Option"},{id:"2",label:"Disabled Option",disabled:!0},{id:"3",label:"Another Available"},{id:"4",label:"Also Disabled",disabled:!0}];return e.jsx(s,{trigger:e.jsxs(o,{children:["Options ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:r,onSelect:n=>alert(`Selected: ${n.label}`)})}},w={render:()=>{const r=[{id:"profile",label:"View Profile",icon:e.jsx(y,{className:"h-4 w-4"})},{id:"settings",label:"Account Settings",icon:e.jsx(O,{className:"h-4 w-4"})},{id:"divider-1",divider:!0},{id:"help",label:"Help & Support",icon:e.jsx(C,{className:"h-4 w-4"})},{id:"divider-2",divider:!0},{id:"logout",label:"Sign Out",icon:e.jsx(A,{className:"h-4 w-4"}),danger:!0}];return e.jsx(s,{trigger:e.jsxs("button",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem",border:"none",background:"transparent",cursor:"pointer"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#3b82f6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600},children:"JD"}),e.jsx(l,{className:"h-4 w-4"})]}),items:r,onSelect:n=>{n.id==="logout"?alert("Signing out..."):alert(`Selected: ${n.label}`)}})}},v={render:()=>{const r=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"archive",label:"Archive"},{id:"divider",divider:!0},{id:"delete",label:"Delete",danger:!0}];return e.jsx(s,{trigger:e.jsx(o,{variant:"ghost",iconOnly:!0,children:e.jsx("span",{style:{fontSize:"1.25rem"},children:"⋮"})}),items:r,onSelect:n=>alert(`Action: ${n.label}`)})}},S={render:()=>{const[r,n]=a.useState("en"),c=[{id:"en",label:"English"},{id:"es",label:"Español"},{id:"fr",label:"Français"},{id:"de",label:"Deutsch"},{id:"ja",label:"日本語"}],g=c.find(i=>i.id===r)?.label||"Select";return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Language:"}),e.jsx(s,{trigger:e.jsxs(o,{variant:"outline",children:[g," ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:c.map(i=>({...i,selected:i.id===r})),onSelect:i=>n(i.id)})]})}},j={render:()=>{const r=[{id:"free",label:"Free Plan",description:"Basic features for individuals"},{id:"pro",label:"Pro Plan",description:"Advanced features for professionals"},{id:"team",label:"Team Plan",description:"Collaboration tools for teams"}];return e.jsx(s,{trigger:e.jsxs(o,{children:["Choose Plan ",e.jsx(l,{className:"h-4 w-4 ml-2"})]}),items:r,onSelect:n=>alert(`Selected: ${n.label}`)})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      label: 'Option 1'
    }, {
      id: '2',
      label: 'Option 2'
    }, {
      id: '3',
      label: 'Option 3'
    }];
    return <Dropdown trigger={<Button>Open Menu <ChevronDown className="h-4 w-4 ml-2" /></Button>} items={items} onSelect={item => alert(\`Selected: \${item.label}\`)} />;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      label: 'Profile',
      icon: <User className="h-4 w-4" />
    }, {
      id: '2',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />
    }, {
      id: '3',
      label: 'Help',
      icon: <HelpCircle className="h-4 w-4" />
    }, {
      id: '4',
      label: 'Sign Out',
      icon: <LogOut className="h-4 w-4" />
    }];
    return <Dropdown trigger={<Button>Account <ChevronDown className="h-4 w-4 ml-2" /></Button>} items={items} onSelect={item => alert(\`Selected: \${item.label}\`)} />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      label: 'Profile',
      icon: <User className="h-4 w-4" />
    }, {
      id: '2',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />
    }, {
      id: 'divider-1',
      divider: true
    }, {
      id: '3',
      label: 'Help',
      icon: <HelpCircle className="h-4 w-4" />
    }, {
      id: 'divider-2',
      divider: true
    }, {
      id: '4',
      label: 'Sign Out',
      icon: <LogOut className="h-4 w-4" />,
      danger: true
    }];
    return <Dropdown trigger={<Button>Menu <ChevronDown className="h-4 w-4 ml-2" /></Button>} items={items} onSelect={item => alert(\`Selected: \${item.label}\`)} />;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: '1',
      label: 'Available Option'
    }, {
      id: '2',
      label: 'Disabled Option',
      disabled: true
    }, {
      id: '3',
      label: 'Another Available'
    }, {
      id: '4',
      label: 'Also Disabled',
      disabled: true
    }];
    return <Dropdown trigger={<Button>Options <ChevronDown className="h-4 w-4 ml-2" /></Button>} items={items} onSelect={item => alert(\`Selected: \${item.label}\`)} />;
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: 'profile',
      label: 'View Profile',
      icon: <User className="h-4 w-4" />
    }, {
      id: 'settings',
      label: 'Account Settings',
      icon: <Settings className="h-4 w-4" />
    }, {
      id: 'divider-1',
      divider: true
    }, {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle className="h-4 w-4" />
    }, {
      id: 'divider-2',
      divider: true
    }, {
      id: 'logout',
      label: 'Sign Out',
      icon: <LogOut className="h-4 w-4" />,
      danger: true
    }];
    return <Dropdown trigger={<button style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer'
    }}>\r
            <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        fontWeight: 600
      }}>\r
              JD\r
            </div>\r
            <ChevronDown className="h-4 w-4" />\r
          </button>} items={items} onSelect={item => {
      if (item.id === 'logout') {
        alert('Signing out...');
      } else {
        alert(\`Selected: \${item.label}\`);
      }
    }} />;
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'duplicate',
      label: 'Duplicate'
    }, {
      id: 'archive',
      label: 'Archive'
    }, {
      id: 'divider',
      divider: true
    }, {
      id: 'delete',
      label: 'Delete',
      danger: true
    }];
    return <Dropdown trigger={<Button variant="ghost" iconOnly><span style={{
        fontSize: '1.25rem'
      }}>⋮</span></Button>} items={items} onSelect={item => alert(\`Action: \${item.label}\`)} />;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('en');
    const items = [{
      id: 'en',
      label: 'English'
    }, {
      id: 'es',
      label: 'Español'
    }, {
      id: 'fr',
      label: 'Français'
    }, {
      id: 'de',
      label: 'Deutsch'
    }, {
      id: 'ja',
      label: '日本語'
    }];
    const selectedLabel = items.find(i => i.id === selected)?.label || 'Select';
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <span style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Language:</span>\r
        <Dropdown trigger={<Button variant="outline">\r
              {selectedLabel} <ChevronDown className="h-4 w-4 ml-2" />\r
            </Button>} items={items.map(item => ({
        ...item,
        selected: item.id === selected
      }))} onSelect={item => setSelected(item.id)} />\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      id: 'free',
      label: 'Free Plan',
      description: 'Basic features for individuals'
    }, {
      id: 'pro',
      label: 'Pro Plan',
      description: 'Advanced features for professionals'
    }, {
      id: 'team',
      label: 'Team Plan',
      description: 'Collaboration tools for teams'
    }];
    return <Dropdown trigger={<Button>Choose Plan <ChevronDown className="h-4 w-4 ml-2" /></Button>} items={items} onSelect={item => alert(\`Selected: \${item.label}\`)} />;
  }
}`,...j.parameters?.docs?.source}}};const X=["Default","WithIcons","WithDividers","WithDisabledItems","UserMenu","ActionsMenu","SelectLanguage","WithDescriptions"];export{v as ActionsMenu,b as Default,S as SelectLanguage,w as UserMenu,j as WithDescriptions,x as WithDisabledItems,f as WithDividers,h as WithIcons,X as __namedExportsOrder,K as default};
