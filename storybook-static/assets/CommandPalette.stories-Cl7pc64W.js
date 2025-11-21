import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-CJgaPZSw.js";import{r as z}from"./index-BxZhseHt.js";import{S as N}from"./search-C1sBcrtD.js";import{B as u}from"./Button-Cnor-_7t.js";import{H as x}from"./house-CWVjuk8G.js";import{S as C}from"./settings-CdAvcxaA.js";import{U as O}from"./user-Z43g5oUO.js";import{L as V}from"./log-out-BV3sfhTw.js";import{F as M}from"./file-text-DDF_eTix.js";import{M as H}from"./mail-Dy-tBr-W.js";import{C as Q}from"./calendar-CBa_wlQq.js";import{B as T}from"./bell-n701tIbp.js";import{D as K}from"./download-CkcNjyU-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-8VYGoA.js";import"./createLucideIcon-CsANJayS.js";import"./loader-circle-DihWDC1d.js";function d({commands:n,open:o,onOpenChange:r,placeholder:p="Type a command or search...",trigger:c="Ctrl+K",recentCommands:f=[],onRecentCommandsChange:G}){const[A,U]=a.useState(""),[m,b]=a.useState(0),F=a.useRef(null),L=a.useRef(null),I=a.useCallback(()=>{const t=A.toLowerCase().trim();let i=n;t&&(i=n.filter(l=>l.label.toLowerCase().includes(t)||l.description?.toLowerCase().includes(t)||l.keywords?.some(h=>h.toLowerCase().includes(t))));const s={},w=[];if(!t&&f.length>0){const l=f.map(h=>n.find(q=>q.id===h)).filter(Boolean);l.length>0&&(s.Recent=l)}return i.forEach(l=>{l.group?(s[l.group]||(s[l.group]=[]),s.Recent?.some(h=>h.id===l.id)||s[l.group].push(l)):s.Recent?.some(h=>h.id===l.id)||w.push(l)}),{grouped:s,ungrouped:w}},[n,A,f]),{grouped:B,ungrouped:R}=I(),g=[...Object.values(B).flat(),...R];a.useEffect(()=>{if(!o)return;const t=i=>{i.key==="ArrowDown"?(i.preventDefault(),b(s=>Math.min(s+1,g.length-1))):i.key==="ArrowUp"?(i.preventDefault(),b(s=>Math.max(s-1,0))):i.key==="Enter"&&g[m]?(i.preventDefault(),_(g[m])):i.key==="Escape"&&(i.preventDefault(),r(!1))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o,m,g]),a.useEffect(()=>{o&&(U(""),b(0),setTimeout(()=>F.current?.focus(),50))},[o]),a.useEffect(()=>{if(!L.current)return;L.current.querySelector(`[data-index="${m}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})},[m]);const _=t=>{if(t.onExecute(),r(!1),G){const i=[t.id,...f.filter(s=>s!==t.id)].slice(0,5);G(i)}};return o?z.createPortal(e.jsxs("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-[20vh] animate-fade-in",children:[e.jsx("div",{className:"absolute inset-0 bg-ink-900 bg-opacity-50 backdrop-blur-sm",onClick:()=>r(!1)}),e.jsxs("div",{className:"relative w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl border border-paper-200 overflow-hidden animate-scale-in",children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-paper-200",children:[e.jsx(N,{className:"h-5 w-5 text-ink-400"}),e.jsx("input",{ref:F,type:"text",value:A,onChange:t=>{U(t.target.value),b(0)},placeholder:p,className:"flex-1 text-base text-ink-900 placeholder-ink-400 bg-transparent border-none outline-none"}),c&&e.jsx("kbd",{className:"hidden sm:inline-block px-2 py-1 text-xs font-mono text-ink-500 bg-paper-100 border border-paper-300 rounded",children:c})]}),e.jsx("div",{ref:L,className:"max-h-[400px] overflow-y-auto py-2",children:g.length===0?e.jsx("div",{className:"px-4 py-8 text-center text-sm text-ink-500",children:"No commands found"}):e.jsxs(e.Fragment,{children:[Object.entries(B).map(([t,i])=>e.jsxs("div",{children:[e.jsx("div",{className:"px-4 py-1.5 text-xs font-semibold text-ink-500 uppercase tracking-wider",children:t}),i.map(s=>{const w=g.indexOf(s),l=w===m;return e.jsxs("button",{"data-index":w,onClick:()=>_(s),onMouseEnter:()=>b(w),className:`
                          w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors
                          ${l?"bg-accent-50":"hover:bg-paper-50"}
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[s.icon&&e.jsx("span",{className:"text-ink-600 flex-shrink-0",children:s.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium text-ink-900 truncate",children:s.label}),s.description&&e.jsx("div",{className:"text-xs text-ink-500 truncate mt-0.5",children:s.description})]})]}),s.shortcut&&e.jsx("kbd",{className:"ml-3 px-2 py-1 text-xs font-mono text-ink-500 bg-paper-100 border border-paper-200 rounded flex-shrink-0",children:s.shortcut})]},s.id)})]},t)),R.length>0&&e.jsxs("div",{children:[Object.keys(B).length>0&&e.jsx("div",{className:"px-4 py-1.5 text-xs font-semibold text-ink-500 uppercase tracking-wider",children:"Commands"}),R.map(t=>{const i=g.indexOf(t),s=i===m;return e.jsxs("button",{"data-index":i,onClick:()=>_(t),onMouseEnter:()=>b(i),className:`
                          w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors
                          ${s?"bg-accent-50":"hover:bg-paper-50"}
                        `,children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.icon&&e.jsx("span",{className:"text-ink-600 flex-shrink-0",children:t.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm font-medium text-ink-900 truncate",children:t.label}),t.description&&e.jsx("div",{className:"text-xs text-ink-500 truncate mt-0.5",children:t.description})]})]}),t.shortcut&&e.jsx("kbd",{className:"ml-3 px-2 py-1 text-xs font-mono text-ink-500 bg-paper-100 border border-paper-200 rounded flex-shrink-0",children:t.shortcut})]},t.id)})]})]})}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-xs text-ink-500 bg-paper-50 border-t border-paper-200",children:[e.jsx("span",{children:"Navigate with ↑↓ arrows"}),e.jsx("span",{children:"Press Enter to select • Esc to close"})]})]})]}),document.body):null}function W(n="k"){const[o,r]=a.useState(!1);return a.useEffect(()=>{const p=c=>{(c.ctrlKey||c.metaKey)&&c.key.toLowerCase()===n&&(c.preventDefault(),r(f=>!f))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]),{open:o,setOpen:r}}try{d.displayName="CommandPalette",d.__docgenInfo={description:"",displayName:"CommandPalette",props:{commands:{defaultValue:null,description:"List of available commands",name:"commands",required:!0,type:{name:"Command[]"}},open:{defaultValue:null,description:"Open/close state",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when state changes",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},placeholder:{defaultValue:{value:"Type a command or search..."},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},trigger:{defaultValue:{value:"Ctrl+K"},description:'Show keyboard shortcut to open (e.g., "Ctrl+K")',name:"trigger",required:!1,type:{name:"string"}},recentCommands:{defaultValue:{value:"[]"},description:"Recent commands to show first",name:"recentCommands",required:!1,type:{name:"string[]"}},onRecentCommandsChange:{defaultValue:null,description:"Callback to update recent commands",name:"onRecentCommandsChange",required:!1,type:{name:"((commandIds: string[]) => void)"}}}}}catch{}try{W.displayName="useCommandPalette",W.__docgenInfo={description:"",displayName:"useCommandPalette",props:{}}}catch{}const ge={title:"Navigation/CommandPalette",component:d,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{minWidth:"600px",padding:"2rem"},children:e.jsx(n,{})})]},$=[{id:"home",label:"Go to Home",icon:e.jsx(x,{className:"h-4 w-4"}),onExecute:()=>console.log("Navigate to home")},{id:"settings",label:"Open Settings",icon:e.jsx(C,{className:"h-4 w-4"}),onExecute:()=>console.log("Open settings")},{id:"profile",label:"View Profile",icon:e.jsx(O,{className:"h-4 w-4"}),onExecute:()=>console.log("View profile")},{id:"logout",label:"Log Out",icon:e.jsx(V,{className:"h-4 w-4"}),onExecute:()=>console.log("Log out")}],v={render:()=>{const[n,o]=a.useState(!1);return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:$,open:n,onOpenChange:o})]})}},S={render:()=>{const[n,o]=a.useState(!1),r=[{id:"home",label:"Go to Dashboard",description:"Navigate to the main dashboard",icon:e.jsx(x,{className:"h-4 w-4"}),onExecute:()=>console.log("Navigate to dashboard")},{id:"settings",label:"Open Settings",description:"Configure application settings",icon:e.jsx(C,{className:"h-4 w-4"}),onExecute:()=>console.log("Open settings")},{id:"profile",label:"View Profile",description:"View and edit your profile",icon:e.jsx(O,{className:"h-4 w-4"}),onExecute:()=>console.log("View profile")}];return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:r,open:n,onOpenChange:o})]})}},j={render:()=>{const[n,o]=a.useState(!1),r=[{id:"home",label:"Go to Dashboard",icon:e.jsx(x,{className:"h-4 w-4"}),group:"Navigation",onExecute:()=>console.log("Navigate to dashboard")},{id:"search",label:"Search",icon:e.jsx(N,{className:"h-4 w-4"}),group:"Navigation",onExecute:()=>console.log("Search")},{id:"settings",label:"Settings",icon:e.jsx(C,{className:"h-4 w-4"}),group:"Configuration",onExecute:()=>console.log("Open settings")},{id:"profile",label:"Profile",icon:e.jsx(O,{className:"h-4 w-4"}),group:"Account",onExecute:()=>console.log("View profile")},{id:"logout",label:"Log Out",icon:e.jsx(V,{className:"h-4 w-4"}),group:"Account",onExecute:()=>console.log("Log out")}];return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:r,open:n,onOpenChange:o})]})}},y={render:()=>{const[n,o]=a.useState(!1),r=[{id:"home",label:"Go to Dashboard",icon:e.jsx(x,{className:"h-4 w-4"}),shortcut:"Ctrl+H",onExecute:()=>console.log("Navigate to dashboard")},{id:"search",label:"Search",icon:e.jsx(N,{className:"h-4 w-4"}),shortcut:"Ctrl+F",onExecute:()=>console.log("Search")},{id:"settings",label:"Settings",icon:e.jsx(C,{className:"h-4 w-4"}),shortcut:"Ctrl+,",onExecute:()=>console.log("Open settings")}];return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:r,open:n,onOpenChange:o})]})}},E={render:()=>{const[n,o]=a.useState(!1),[r,p]=a.useState(["profile","settings"]),c=[{id:"home",label:"Go to Dashboard",icon:e.jsx(x,{className:"h-4 w-4"}),group:"Navigation",onExecute:()=>console.log("Navigate to dashboard")},{id:"search",label:"Search",icon:e.jsx(N,{className:"h-4 w-4"}),group:"Navigation",onExecute:()=>console.log("Search")},{id:"settings",label:"Settings",icon:e.jsx(C,{className:"h-4 w-4"}),group:"Configuration",onExecute:()=>console.log("Open settings")},{id:"profile",label:"Profile",icon:e.jsx(O,{className:"h-4 w-4"}),group:"Account",onExecute:()=>console.log("View profile")},{id:"logout",label:"Log Out",icon:e.jsx(V,{className:"h-4 w-4"}),group:"Account",onExecute:()=>console.log("Log out")}];return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:c,open:n,onOpenChange:o,recentCommands:r,onRecentCommandsChange:p})]})}},k={render:()=>{const[n,o]=a.useState(!1),[r,p]=a.useState([]),c=[{id:"dashboard",label:"Go to Dashboard",description:"View your main dashboard",icon:e.jsx(x,{className:"h-4 w-4"}),group:"Navigation",shortcut:"Ctrl+D",keywords:["home","main"],onExecute:()=>{console.log("Navigate to dashboard"),o(!1)}},{id:"documents",label:"View Documents",description:"Browse all documents",icon:e.jsx(M,{className:"h-4 w-4"}),group:"Navigation",keywords:["files","docs"],onExecute:()=>{console.log("View documents"),o(!1)}},{id:"inbox",label:"Open Inbox",description:"Check your messages",icon:e.jsx(H,{className:"h-4 w-4"}),group:"Navigation",shortcut:"Ctrl+M",keywords:["messages","email"],onExecute:()=>{console.log("Open inbox"),o(!1)}},{id:"calendar",label:"Open Calendar",description:"View your schedule",icon:e.jsx(Q,{className:"h-4 w-4"}),group:"Navigation",keywords:["schedule","events"],onExecute:()=>{console.log("Open calendar"),o(!1)}},{id:"search",label:"Global Search",description:"Search across all content",icon:e.jsx(N,{className:"h-4 w-4"}),group:"Actions",shortcut:"Ctrl+F",onExecute:()=>{console.log("Open search"),o(!1)}},{id:"notifications",label:"View Notifications",description:"See all notifications",icon:e.jsx(T,{className:"h-4 w-4"}),group:"Actions",shortcut:"Ctrl+N",onExecute:()=>{console.log("View notifications"),o(!1)}},{id:"export",label:"Export Data",description:"Download your data",icon:e.jsx(K,{className:"h-4 w-4"}),group:"Actions",onExecute:()=>{console.log("Export data"),o(!1)}},{id:"settings",label:"Settings",description:"Configure application",icon:e.jsx(C,{className:"h-4 w-4"}),group:"Configuration",shortcut:"Ctrl+,",onExecute:()=>{console.log("Open settings"),o(!1)}},{id:"profile",label:"My Profile",description:"View and edit profile",icon:e.jsx(O,{className:"h-4 w-4"}),group:"Account",keywords:["account","user"],onExecute:()=>{console.log("View profile"),o(!1)}},{id:"logout",label:"Log Out",description:"Sign out of your account",icon:e.jsx(V,{className:"h-4 w-4"}),group:"Account",keywords:["sign out","exit"],onExecute:()=>{console.log("Log out"),o(!1)}}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.375rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Keyboard Shortcut"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Press ",e.jsx("kbd",{style:{padding:"0.125rem 0.375rem",backgroundColor:"white",border:"1px solid #e5e5e5",borderRadius:"0.25rem",fontSize:"0.75rem"},children:"Ctrl+K"})," to open the command palette"]})]}),e.jsx(u,{onClick:()=>o(!0),children:"Open Command Palette"}),e.jsx(d,{commands:c,open:n,onOpenChange:o,recentCommands:r,onRecentCommandsChange:p,placeholder:"Search commands..."})]})}},P={render:()=>{const[n,o]=a.useState(!1),p=["Dashboard","Analytics","Reports","Users","Settings","Billing","Support","Documentation"].map(c=>({id:c.toLowerCase(),label:c,onExecute:()=>{console.log(`Navigate to ${c}`),o(!1)}}));return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Search Pages"}),e.jsx(d,{commands:p,open:n,onOpenChange:o,placeholder:"Search pages..."})]})}},D={render:()=>{const[n,o]=a.useState(!1),r=[{id:"new-doc",label:"New Document",description:"Create a new document",icon:e.jsx(M,{className:"h-4 w-4"}),group:"Create",shortcut:"Ctrl+N",onExecute:()=>{alert("Creating new document"),o(!1)}},{id:"new-folder",label:"New Folder",description:"Create a new folder",icon:e.jsx(x,{className:"h-4 w-4"}),group:"Create",onExecute:()=>{alert("Creating new folder"),o(!1)}},{id:"upload",label:"Upload File",description:"Upload a file from your device",icon:e.jsx(K,{className:"h-4 w-4"}),group:"Actions",shortcut:"Ctrl+U",onExecute:()=>{alert("Opening file picker"),o(!1)}},{id:"share",label:"Share",description:"Share with others",icon:e.jsx(H,{className:"h-4 w-4"}),group:"Actions",onExecute:()=>{alert("Opening share dialog"),o(!1)}}];return e.jsxs("div",{children:[e.jsx(u,{onClick:()=>o(!0),children:"Quick Actions"}),e.jsx(d,{commands:r,open:n,onOpenChange:o,placeholder:"What do you want to do?"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={basicCommands} open={open} onOpenChange={setOpen} />\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const commands: Command[] = [{
      id: 'home',
      label: 'Go to Dashboard',
      description: 'Navigate to the main dashboard',
      icon: <Home className="h-4 w-4" />,
      onExecute: () => console.log('Navigate to dashboard')
    }, {
      id: 'settings',
      label: 'Open Settings',
      description: 'Configure application settings',
      icon: <Settings className="h-4 w-4" />,
      onExecute: () => console.log('Open settings')
    }, {
      id: 'profile',
      label: 'View Profile',
      description: 'View and edit your profile',
      icon: <User className="h-4 w-4" />,
      onExecute: () => console.log('View profile')
    }];
    return <div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} />\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const commands: Command[] = [{
      id: 'home',
      label: 'Go to Dashboard',
      icon: <Home className="h-4 w-4" />,
      group: 'Navigation',
      onExecute: () => console.log('Navigate to dashboard')
    }, {
      id: 'search',
      label: 'Search',
      icon: <Search className="h-4 w-4" />,
      group: 'Navigation',
      onExecute: () => console.log('Search')
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      group: 'Configuration',
      onExecute: () => console.log('Open settings')
    }, {
      id: 'profile',
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
      group: 'Account',
      onExecute: () => console.log('View profile')
    }, {
      id: 'logout',
      label: 'Log Out',
      icon: <LogOut className="h-4 w-4" />,
      group: 'Account',
      onExecute: () => console.log('Log out')
    }];
    return <div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} />\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const commands: Command[] = [{
      id: 'home',
      label: 'Go to Dashboard',
      icon: <Home className="h-4 w-4" />,
      shortcut: 'Ctrl+H',
      onExecute: () => console.log('Navigate to dashboard')
    }, {
      id: 'search',
      label: 'Search',
      icon: <Search className="h-4 w-4" />,
      shortcut: 'Ctrl+F',
      onExecute: () => console.log('Search')
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      shortcut: 'Ctrl+,',
      onExecute: () => console.log('Open settings')
    }];
    return <div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} />\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [recentCommands, setRecentCommands] = useState<string[]>(['profile', 'settings']);
    const commands: Command[] = [{
      id: 'home',
      label: 'Go to Dashboard',
      icon: <Home className="h-4 w-4" />,
      group: 'Navigation',
      onExecute: () => console.log('Navigate to dashboard')
    }, {
      id: 'search',
      label: 'Search',
      icon: <Search className="h-4 w-4" />,
      group: 'Navigation',
      onExecute: () => console.log('Search')
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      group: 'Configuration',
      onExecute: () => console.log('Open settings')
    }, {
      id: 'profile',
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
      group: 'Account',
      onExecute: () => console.log('View profile')
    }, {
      id: 'logout',
      label: 'Log Out',
      icon: <LogOut className="h-4 w-4" />,
      group: 'Account',
      onExecute: () => console.log('Log out')
    }];
    return <div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} recentCommands={recentCommands} onRecentCommandsChange={setRecentCommands} />\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [recentCommands, setRecentCommands] = useState<string[]>([]);
    const commands: Command[] = [{
      id: 'dashboard',
      label: 'Go to Dashboard',
      description: 'View your main dashboard',
      icon: <Home className="h-4 w-4" />,
      group: 'Navigation',
      shortcut: 'Ctrl+D',
      keywords: ['home', 'main'],
      onExecute: () => {
        console.log('Navigate to dashboard');
        setOpen(false);
      }
    }, {
      id: 'documents',
      label: 'View Documents',
      description: 'Browse all documents',
      icon: <FileText className="h-4 w-4" />,
      group: 'Navigation',
      keywords: ['files', 'docs'],
      onExecute: () => {
        console.log('View documents');
        setOpen(false);
      }
    }, {
      id: 'inbox',
      label: 'Open Inbox',
      description: 'Check your messages',
      icon: <Mail className="h-4 w-4" />,
      group: 'Navigation',
      shortcut: 'Ctrl+M',
      keywords: ['messages', 'email'],
      onExecute: () => {
        console.log('Open inbox');
        setOpen(false);
      }
    }, {
      id: 'calendar',
      label: 'Open Calendar',
      description: 'View your schedule',
      icon: <Calendar className="h-4 w-4" />,
      group: 'Navigation',
      keywords: ['schedule', 'events'],
      onExecute: () => {
        console.log('Open calendar');
        setOpen(false);
      }
    }, {
      id: 'search',
      label: 'Global Search',
      description: 'Search across all content',
      icon: <Search className="h-4 w-4" />,
      group: 'Actions',
      shortcut: 'Ctrl+F',
      onExecute: () => {
        console.log('Open search');
        setOpen(false);
      }
    }, {
      id: 'notifications',
      label: 'View Notifications',
      description: 'See all notifications',
      icon: <Bell className="h-4 w-4" />,
      group: 'Actions',
      shortcut: 'Ctrl+N',
      onExecute: () => {
        console.log('View notifications');
        setOpen(false);
      }
    }, {
      id: 'export',
      label: 'Export Data',
      description: 'Download your data',
      icon: <Download className="h-4 w-4" />,
      group: 'Actions',
      onExecute: () => {
        console.log('Export data');
        setOpen(false);
      }
    }, {
      id: 'settings',
      label: 'Settings',
      description: 'Configure application',
      icon: <Settings className="h-4 w-4" />,
      group: 'Configuration',
      shortcut: 'Ctrl+,',
      onExecute: () => {
        console.log('Open settings');
        setOpen(false);
      }
    }, {
      id: 'profile',
      label: 'My Profile',
      description: 'View and edit profile',
      icon: <User className="h-4 w-4" />,
      group: 'Account',
      keywords: ['account', 'user'],
      onExecute: () => {
        console.log('View profile');
        setOpen(false);
      }
    }, {
      id: 'logout',
      label: 'Log Out',
      description: 'Sign out of your account',
      icon: <LogOut className="h-4 w-4" />,
      group: 'Account',
      keywords: ['sign out', 'exit'],
      onExecute: () => {
        console.log('Log out');
        setOpen(false);
      }
    }];
    return <div>\r
        <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.375rem'
      }}>\r
          <div style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>\r
            Keyboard Shortcut\r
          </div>\r
          <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Press <kbd style={{
            padding: '0.125rem 0.375rem',
            backgroundColor: 'white',
            border: '1px solid #e5e5e5',
            borderRadius: '0.25rem',
            fontSize: '0.75rem'
          }}>Ctrl+K</kbd> to open the command palette\r
          </div>\r
        </div>\r
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} recentCommands={recentCommands} onRecentCommandsChange={setRecentCommands} placeholder="Search commands..." />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const pages = ['Dashboard', 'Analytics', 'Reports', 'Users', 'Settings', 'Billing', 'Support', 'Documentation'];
    const commands: Command[] = pages.map(page => ({
      id: page.toLowerCase(),
      label: page,
      onExecute: () => {
        console.log(\`Navigate to \${page}\`);
        setOpen(false);
      }
    }));
    return <div>\r
        <Button onClick={() => setOpen(true)}>Search Pages</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} placeholder="Search pages..." />\r
      </div>;
  }
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const commands: Command[] = [{
      id: 'new-doc',
      label: 'New Document',
      description: 'Create a new document',
      icon: <FileText className="h-4 w-4" />,
      group: 'Create',
      shortcut: 'Ctrl+N',
      onExecute: () => {
        alert('Creating new document');
        setOpen(false);
      }
    }, {
      id: 'new-folder',
      label: 'New Folder',
      description: 'Create a new folder',
      icon: <Home className="h-4 w-4" />,
      group: 'Create',
      onExecute: () => {
        alert('Creating new folder');
        setOpen(false);
      }
    }, {
      id: 'upload',
      label: 'Upload File',
      description: 'Upload a file from your device',
      icon: <Download className="h-4 w-4" />,
      group: 'Actions',
      shortcut: 'Ctrl+U',
      onExecute: () => {
        alert('Opening file picker');
        setOpen(false);
      }
    }, {
      id: 'share',
      label: 'Share',
      description: 'Share with others',
      icon: <Mail className="h-4 w-4" />,
      group: 'Actions',
      onExecute: () => {
        alert('Opening share dialog');
        setOpen(false);
      }
    }];
    return <div>\r
        <Button onClick={() => setOpen(true)}>Quick Actions</Button>\r
        <CommandPalette commands={commands} open={open} onOpenChange={setOpen} placeholder="What do you want to do?" />\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}};const he=["Default","WithDescriptions","WithGroups","WithShortcuts","WithRecentCommands","ApplicationCommands","SimpleSearch","QuickActions"];export{k as ApplicationCommands,v as Default,D as QuickActions,P as SimpleSearch,S as WithDescriptions,j as WithGroups,E as WithRecentCommands,y as WithShortcuts,he as __namedExportsOrder,ge as default};
