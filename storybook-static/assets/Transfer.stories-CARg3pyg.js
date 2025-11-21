import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-C8OopBmF.js";import{c as L}from"./createLucideIcon-D9MvcA__.js";import{C as ne}from"./chevron-right-BqdpH8-a.js";import{C as ae}from"./chevron-left--ufFHcrN.js";import{S as oe}from"./search-dPy0YymV.js";import"./preload-helper-PPVm8Dsz.js";const ie=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],le=L("chevrons-left",ie);const ce=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],de=L("chevrons-right",ce);function u({sourceItems:t,targetItems:s,onChange:n,titles:l={source:"Available",target:"Selected"},showSearch:i=!0,filterFunction:c,height:E="400px",showCounts:F=!0,renderItem:W,className:_=""}){const[g,b]=o.useState([]),[h,S]=o.useState([]),[f,J]=o.useState(""),[I,U]=o.useState(""),T=c||((r,a)=>{const m=a.toLowerCase();return r.label.toLowerCase().includes(m)||(r.description?.toLowerCase().includes(m)??!1)}),M=o.useMemo(()=>f?t.filter(r=>T(r,f)):t,[t,f,T]),P=o.useMemo(()=>I?s.filter(r=>T(r,I)):s,[s,I,T]),H=r=>{b(a=>a.includes(r)?a.filter(m=>m!==r):[...a,r])},G=r=>{S(a=>a.includes(r)?a.filter(m=>m!==r):[...a,r])},Q=()=>{const r=M.filter(a=>!a.disabled).map(a=>a.id);b(r)},$=()=>{const r=P.filter(a=>!a.disabled).map(a=>a.id);S(r)},K=()=>{const r=t.filter(d=>g.includes(d.id)),a=t.filter(d=>!g.includes(d.id)),m=[...s,...r];n(a,m),b([])},Y=()=>{const r=s.filter(d=>h.includes(d.id)),a=s.filter(d=>!h.includes(d.id)),m=[...t,...r];n(m,a),S([])},O=()=>{const r=t.filter(d=>!d.disabled),a=t.filter(d=>d.disabled),m=[...s,...r];n(a,m),b([])},X=()=>{const r=s.filter(d=>!d.disabled),a=s.filter(d=>d.disabled),m=[...t,...r];n(m,a),S([])},V=(r,a,m,d,Z,ee,te)=>{const re=a.length,q=r.length;return e.jsxs("div",{className:"flex-1 bg-white rounded-lg border border-paper-200 flex flex-col",children:[e.jsxs("div",{className:"p-4 border-b border-paper-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-ink-900",children:[te,F&&e.jsxs("span",{className:"ml-2 text-ink-500 font-normal",children:["(",re,"/",q,")"]})]}),q>0&&e.jsx("button",{onClick:d,className:"text-xs text-accent-600 hover:text-accent-700 font-medium",children:"Select all"})]}),i&&e.jsxs("div",{className:"relative",children:[e.jsx(oe,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400"}),e.jsx("input",{type:"text",value:Z,onChange:p=>ee(p.target.value),placeholder:"Search...",className:"w-full pl-9 pr-3 py-2 text-sm border border-paper-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400"})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2",style:{height:E},children:r.length===0?e.jsx("div",{className:"flex items-center justify-center h-full text-sm text-ink-500",children:"No items"}):e.jsx("div",{className:"space-y-1",children:r.map(p=>{const se=a.includes(p.id),z=p.disabled;return e.jsx("button",{onClick:()=>!z&&m(p.id),disabled:z,className:`
                      w-full text-left px-3 py-2 rounded-lg transition-colors
                      ${se?"bg-accent-50 border-2 border-accent-500":"border-2 border-transparent hover:bg-paper-50"}
                      ${z?"opacity-40 cursor-not-allowed":"cursor-pointer"}
                    `,children:W?W(p):e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-ink-900",children:p.label}),p.description&&e.jsx("div",{className:"text-xs text-ink-600 mt-0.5",children:p.description})]})},p.id)})})})]})};return e.jsxs("div",{className:`flex items-center gap-4 ${_}`,children:[V(M,g,H,Q,f,J,l.source),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:O,disabled:t.filter(r=>!r.disabled).length===0,className:"p-2 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",title:"Move all to target",children:e.jsx(de,{className:"h-4 w-4 text-ink-600"})}),e.jsx("button",{onClick:K,disabled:g.length===0,className:"p-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",title:"Move selected to target",children:e.jsx(ne,{className:"h-4 w-4"})}),e.jsx("button",{onClick:Y,disabled:h.length===0,className:"p-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",title:"Move selected to source",children:e.jsx(ae,{className:"h-4 w-4"})}),e.jsx("button",{onClick:X,disabled:s.filter(r=>!r.disabled).length===0,className:"p-2 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",title:"Move all to source",children:e.jsx(le,{className:"h-4 w-4 text-ink-600"})})]}),V(P,h,G,$,I,U,l.target)]})}try{u.displayName="Transfer",u.__docgenInfo={description:"",displayName:"Transfer",props:{sourceItems:{defaultValue:null,description:"Available items in source list",name:"sourceItems",required:!0,type:{name:"TransferItem[]"}},targetItems:{defaultValue:null,description:"Items in target list",name:"targetItems",required:!0,type:{name:"TransferItem[]"}},onChange:{defaultValue:null,description:"Callback when items are transferred",name:"onChange",required:!0,type:{name:"(sourceItems: TransferItem[], targetItems: TransferItem[]) => void"}},titles:{defaultValue:{value:"{ source: 'Available', target: 'Selected' }"},description:"Labels for source and target lists",name:"titles",required:!1,type:{name:"{ source: string; target: string; }"}},showSearch:{defaultValue:{value:"true"},description:"Show search/filter inputs",name:"showSearch",required:!1,type:{name:"boolean"}},filterFunction:{defaultValue:null,description:"Custom search filter function",name:"filterFunction",required:!1,type:{name:"((item: TransferItem, searchTerm: string) => boolean)"}},height:{defaultValue:{value:"400px"},description:"Height of lists",name:"height",required:!1,type:{name:"string"}},showCounts:{defaultValue:{value:"true"},description:"Show item counts in headers",name:"showCounts",required:!1,type:{name:"boolean"}},renderItem:{defaultValue:null,description:"Render custom item content",name:"renderItem",required:!1,type:{name:"((item: TransferItem) => ReactNode)"}},className:{defaultValue:{value:""},description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ie={title:"Forms/Transfer",component:u,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{minWidth:"800px",padding:"2rem"},children:e.jsx(t,{})})]},D=()=>[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"},{id:"4",label:"Item 4"},{id:"5",label:"Item 5"}],v={render:()=>{const[t,s]=o.useState(D()),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)}})}},w={render:()=>{const[t,s]=o.useState([{id:"1",label:"React",description:"JavaScript library for building UIs"},{id:"2",label:"Vue",description:"Progressive framework for web interfaces"},{id:"3",label:"Angular",description:"Platform for building web applications"},{id:"4",label:"Svelte",description:"Compiler-based UI framework"}]),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Frameworks",target:"Selected Frameworks"}})}},x={render:()=>{const[t,s]=o.useState([{id:"1",label:"Admin",description:"Full system access"},{id:"2",label:"Editor",description:"Can edit content"},{id:"3",label:"Viewer",description:"Read-only access",disabled:!0},{id:"4",label:"Guest",description:"Limited access"}]),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Roles",target:"Assigned Roles"}})}},y={render:()=>{const[t,s]=o.useState(D()),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},showSearch:!1})}},j={render:()=>{const[t,s]=o.useState(D()),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},showCounts:!1})}},C={render:()=>{const[t,s]=o.useState(D()),[n,l]=o.useState([]);return e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},height:"600px"})}},A={render:()=>{const[t,s]=o.useState([{id:"1",label:"John Doe",description:"john.doe@example.com"},{id:"2",label:"Jane Smith",description:"jane.smith@example.com"},{id:"3",label:"Bob Johnson",description:"bob.johnson@example.com"},{id:"4",label:"Alice Williams",description:"alice.williams@example.com"},{id:"5",label:"Charlie Brown",description:"charlie.brown@example.com"}]),[n,l]=o.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Assign Team Members"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Select users to add to the project team"})]}),e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Users",target:"Project Team"},height:"500px"})]})}},k={render:()=>{const[t,s]=o.useState([{id:"1",label:"Read Documents",description:"View documents and files"},{id:"2",label:"Write Documents",description:"Create and edit documents"},{id:"3",label:"Delete Documents",description:"Remove documents and files"},{id:"4",label:"Manage Users",description:"Add, edit, and remove users"},{id:"5",label:"Manage Settings",description:"Configure system settings"},{id:"6",label:"View Reports",description:"Access analytics and reports"},{id:"7",label:"Export Data",description:"Download and export data"}]),[n,l]=o.useState([{id:"8",label:"System Admin",description:"Full system access",disabled:!0}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Role Permissions"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Configure permissions for Editor role"})]}),e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Permissions",target:"Granted Permissions"}})]})}},N={render:()=>{const[t,s]=o.useState([{id:"1",label:"Technology",description:"Tech news and articles"},{id:"2",label:"Business",description:"Business and finance"},{id:"3",label:"Science",description:"Scientific discoveries"},{id:"4",label:"Sports",description:"Sports news and scores"},{id:"5",label:"Entertainment",description:"Movies, TV, and music"},{id:"6",label:"Health",description:"Health and wellness"},{id:"7",label:"Travel",description:"Travel guides and tips"},{id:"8",label:"Food",description:"Recipes and restaurants"}]),[n,l]=o.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Newsletter Preferences"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Choose topics you want to receive updates about"})]}),e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"All Topics",target:"My Topics"},showSearch:!0}),n.length>0&&e.jsx("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.375rem"},children:e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:500,color:"#1e40af"},children:["You will receive updates about: ",n.map(i=>i.label).join(", ")]})})]})}},R={render:()=>{const[t,s]=o.useState([{id:"1",label:"JavaScript",description:"Core programming language"},{id:"2",label:"TypeScript",description:"Typed JavaScript"},{id:"3",label:"React",description:"UI library"},{id:"4",label:"Node.js",description:"Backend runtime"},{id:"5",label:"Python",description:"General-purpose language"},{id:"6",label:"SQL",description:"Database queries"},{id:"7",label:"GraphQL",description:"Query language for APIs"},{id:"8",label:"Docker",description:"Containerization"},{id:"9",label:"Kubernetes",description:"Container orchestration"},{id:"10",label:"AWS",description:"Cloud platform"}]),[n,l]=o.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Required Skills"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Select the skills required for this position"})]}),e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Skills",target:"Required Skills"}})]})}},B={render:()=>{const[t,s]=o.useState([{id:"1",label:"marketing@company.com",description:"Marketing team"},{id:"2",label:"sales@company.com",description:"Sales team"},{id:"3",label:"support@company.com",description:"Customer support"},{id:"4",label:"dev@company.com",description:"Development team"},{id:"5",label:"hr@company.com",description:"Human resources"}]),[n,l]=o.useState([{id:"6",label:"admin@company.com",description:"Administrators",disabled:!0}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Email Distribution List"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Add or remove email addresses from the announcement list"})]}),e.jsx(u,{sourceItems:t,targetItems:n,onChange:(i,c)=>{s(i),l(c)},titles:{source:"Available Recipients",target:"Announcement Recipients"}}),e.jsx("div",{style:{marginTop:"1rem",fontSize:"0.75rem",color:"#64748b"},children:"Note: admin@company.com is always included and cannot be removed"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} />;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'React',
      description: 'JavaScript library for building UIs'
    }, {
      id: '2',
      label: 'Vue',
      description: 'Progressive framework for web interfaces'
    }, {
      id: '3',
      label: 'Angular',
      description: 'Platform for building web applications'
    }, {
      id: '4',
      label: 'Svelte',
      description: 'Compiler-based UI framework'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} titles={{
      source: 'Available Frameworks',
      target: 'Selected Frameworks'
    }} />;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'Admin',
      description: 'Full system access'
    }, {
      id: '2',
      label: 'Editor',
      description: 'Can edit content'
    }, {
      id: '3',
      label: 'Viewer',
      description: 'Read-only access',
      disabled: true
    }, {
      id: '4',
      label: 'Guest',
      description: 'Limited access'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} titles={{
      source: 'Available Roles',
      target: 'Assigned Roles'
    }} />;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} showSearch={false} />;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} showCounts={false} />;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>(createSimpleItems());
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
      setSourceItems(newSource);
      setTargetItems(newTarget);
    }} height="600px" />;
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'John Doe',
      description: 'john.doe@example.com'
    }, {
      id: '2',
      label: 'Jane Smith',
      description: 'jane.smith@example.com'
    }, {
      id: '3',
      label: 'Bob Johnson',
      description: 'bob.johnson@example.com'
    }, {
      id: '4',
      label: 'Alice Williams',
      description: 'alice.williams@example.com'
    }, {
      id: '5',
      label: 'Charlie Brown',
      description: 'charlie.brown@example.com'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>\r
            Assign Team Members\r
          </h3>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Select users to add to the project team\r
          </p>\r
        </div>\r
        <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
        setSourceItems(newSource);
        setTargetItems(newTarget);
      }} titles={{
        source: 'Available Users',
        target: 'Project Team'
      }} height="500px" />\r
      </div>;
  }
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'Read Documents',
      description: 'View documents and files'
    }, {
      id: '2',
      label: 'Write Documents',
      description: 'Create and edit documents'
    }, {
      id: '3',
      label: 'Delete Documents',
      description: 'Remove documents and files'
    }, {
      id: '4',
      label: 'Manage Users',
      description: 'Add, edit, and remove users'
    }, {
      id: '5',
      label: 'Manage Settings',
      description: 'Configure system settings'
    }, {
      id: '6',
      label: 'View Reports',
      description: 'Access analytics and reports'
    }, {
      id: '7',
      label: 'Export Data',
      description: 'Download and export data'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([{
      id: '8',
      label: 'System Admin',
      description: 'Full system access',
      disabled: true
    }]);
    return <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>\r
            Role Permissions\r
          </h3>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Configure permissions for Editor role\r
          </p>\r
        </div>\r
        <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
        setSourceItems(newSource);
        setTargetItems(newTarget);
      }} titles={{
        source: 'Available Permissions',
        target: 'Granted Permissions'
      }} />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'Technology',
      description: 'Tech news and articles'
    }, {
      id: '2',
      label: 'Business',
      description: 'Business and finance'
    }, {
      id: '3',
      label: 'Science',
      description: 'Scientific discoveries'
    }, {
      id: '4',
      label: 'Sports',
      description: 'Sports news and scores'
    }, {
      id: '5',
      label: 'Entertainment',
      description: 'Movies, TV, and music'
    }, {
      id: '6',
      label: 'Health',
      description: 'Health and wellness'
    }, {
      id: '7',
      label: 'Travel',
      description: 'Travel guides and tips'
    }, {
      id: '8',
      label: 'Food',
      description: 'Recipes and restaurants'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>\r
            Newsletter Preferences\r
          </h3>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Choose topics you want to receive updates about\r
          </p>\r
        </div>\r
        <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
        setSourceItems(newSource);
        setTargetItems(newTarget);
      }} titles={{
        source: 'All Topics',
        target: 'My Topics'
      }} showSearch />\r
        {targetItems.length > 0 && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#1e40af'
        }}>\r
              You will receive updates about: {targetItems.map(item => item.label).join(', ')}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'JavaScript',
      description: 'Core programming language'
    }, {
      id: '2',
      label: 'TypeScript',
      description: 'Typed JavaScript'
    }, {
      id: '3',
      label: 'React',
      description: 'UI library'
    }, {
      id: '4',
      label: 'Node.js',
      description: 'Backend runtime'
    }, {
      id: '5',
      label: 'Python',
      description: 'General-purpose language'
    }, {
      id: '6',
      label: 'SQL',
      description: 'Database queries'
    }, {
      id: '7',
      label: 'GraphQL',
      description: 'Query language for APIs'
    }, {
      id: '8',
      label: 'Docker',
      description: 'Containerization'
    }, {
      id: '9',
      label: 'Kubernetes',
      description: 'Container orchestration'
    }, {
      id: '10',
      label: 'AWS',
      description: 'Cloud platform'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([]);
    return <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>\r
            Required Skills\r
          </h3>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Select the skills required for this position\r
          </p>\r
        </div>\r
        <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
        setSourceItems(newSource);
        setTargetItems(newTarget);
      }} titles={{
        source: 'Available Skills',
        target: 'Required Skills'
      }} />\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sourceItems, setSourceItems] = useState<TransferItem[]>([{
      id: '1',
      label: 'marketing@company.com',
      description: 'Marketing team'
    }, {
      id: '2',
      label: 'sales@company.com',
      description: 'Sales team'
    }, {
      id: '3',
      label: 'support@company.com',
      description: 'Customer support'
    }, {
      id: '4',
      label: 'dev@company.com',
      description: 'Development team'
    }, {
      id: '5',
      label: 'hr@company.com',
      description: 'Human resources'
    }]);
    const [targetItems, setTargetItems] = useState<TransferItem[]>([{
      id: '6',
      label: 'admin@company.com',
      description: 'Administrators',
      disabled: true
    }]);
    return <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>\r
            Email Distribution List\r
          </h3>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
            Add or remove email addresses from the announcement list\r
          </p>\r
        </div>\r
        <Transfer sourceItems={sourceItems} targetItems={targetItems} onChange={(newSource, newTarget) => {
        setSourceItems(newSource);
        setTargetItems(newTarget);
      }} titles={{
        source: 'Available Recipients',
        target: 'Announcement Recipients'
      }} />\r
        <div style={{
        marginTop: '1rem',
        fontSize: '0.75rem',
        color: '#64748b'
      }}>\r
          Note: admin@company.com is always included and cannot be removed\r
        </div>\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const Te=["Default","WithDescriptions","WithDisabledItems","NoSearch","NoCounts","CustomHeight","UserAssignment","PermissionSelector","CategorySelector","SkillSelector","EmailListManager"];export{N as CategorySelector,C as CustomHeight,v as Default,B as EmailListManager,j as NoCounts,y as NoSearch,k as PermissionSelector,R as SkillSelector,A as UserAssignment,w as WithDescriptions,x as WithDisabledItems,Te as __namedExportsOrder,Ie as default};
