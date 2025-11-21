import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-BXYHkhYr.js";import{C as W}from"./chevron-down-Ce72zGDU.js";import{C as _}from"./chevron-right-BgvYn-IZ.js";import{H as b}from"./house-BrE4mG9x.js";import{U as N}from"./users-wVAxbtKC.js";import{c as z}from"./createLucideIcon-D6fSB1ZX.js";import{F as w}from"./file-text-B7_dLeyh.js";import{S as v}from"./settings-gzCitmau.js";import{B as V}from"./bell-mXRvDIZR.js";import{C as q}from"./circle-question-mark-BYY_fRTB.js";import"./preload-helper-PPVm8Dsz.js";const E=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],S=z("chart-no-axes-column-increasing",E);const H=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],M=z("log-out",H);function g({item:r,onNavigate:i,level:t=0,currentPath:s}){const a=r.children&&r.children.length>0,o=s&&r.href?s===r.href:r.active,n=a&&s?r.children?.some(d=>s===d.href||s?.startsWith(d.href||"")):!1,l=n||a&&s?.startsWith(r.href||""),[y,D]=I.useState(l),P=()=>{a?D(!y):r.href?i?.(r.href,r.external):r.onClick&&r.onClick()},B=t===0?"pl-3":t===1?"pl-8":"pl-12",R=o,U=n&&!o;return e.jsxs("div",{children:[e.jsxs("button",{onClick:P,className:`
          w-full flex items-center justify-between py-2 text-sm transition-colors
          ${R?t>0?"bg-accent-100 text-accent-900 font-medium rounded-lg border-l-2 border-accent-500":"bg-accent-50 text-accent-900 font-medium rounded-lg":U?"text-ink-900 rounded-lg":t>0?"text-ink-600 hover:text-ink-900 hover:bg-paper-50 rounded-lg transition-colors":"text-ink-600 hover:text-ink-900 hover:bg-paper-100 rounded-lg transition-colors"}
          ${B} pr-3
        `,children:[e.jsxs("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[r.icon&&e.jsx("span",{className:"flex-shrink-0 w-5 h-5 flex items-center justify-center text-ink-500",children:r.icon}),e.jsx("span",{className:"truncate",children:r.label}),r.badge&&e.jsx("span",{className:"ml-auto flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded-full",children:r.badge})]}),a&&e.jsx("span",{className:"flex-shrink-0 ml-2",children:y?e.jsx(W,{className:"h-4 w-4 text-ink-400"}):e.jsx(_,{className:"h-4 w-4 text-ink-400"})})]}),a&&y&&e.jsx("div",{className:"mt-1 space-y-1",children:r.children?.map(d=>e.jsx(g,{item:d,onNavigate:i,level:t+1,currentPath:s},d.id))})]})}function C({title:r,items:i,onNavigate:t,defaultExpanded:s=!0,currentPath:a}){const[o,n]=I.useState(s);return r?e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>n(!o),className:"w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-ink-500 uppercase tracking-wider hover:text-ink-700 transition-colors",children:[e.jsx("span",{children:r}),o?e.jsx(W,{className:"h-4 w-4"}):e.jsx(_,{className:"h-4 w-4"})]}),o&&e.jsx("div",{className:"mt-1 space-y-1",children:i.map(l=>e.jsx(g,{item:l,onNavigate:t,currentPath:a},l.id))})]}):e.jsx("div",{className:"space-y-1",children:i.map(l=>e.jsx(g,{item:l,onNavigate:t,currentPath:a},l.id))})}function j({items:r,onNavigate:i,className:t="",header:s,footer:a,currentPath:o}){return e.jsxs("div",{className:`flex flex-col h-full bg-white border-r border-paper-300 notebook-binding ${t}`,children:[s&&e.jsx("div",{className:"px-6 pt-6 pb-4",children:s}),e.jsx("nav",{className:"flex-1 px-3 py-2 space-y-1 overflow-y-auto",children:r.map(n=>n.separator?e.jsx("div",{className:"my-4 border-t border-paper-300"},n.id):e.jsx(g,{item:n,onNavigate:i,currentPath:o},n.id))}),a&&e.jsx("div",{className:"border-t border-paper-300 pl-2 pr-6 py-4 overflow-visible",children:a})]})}try{C.displayName="SidebarGroup",C.__docgenInfo={description:"",displayName:"SidebarGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SidebarItem[]"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"((href: string, external?: boolean) => void)"}},defaultExpanded:{defaultValue:{value:"true"},description:"",name:"defaultExpanded",required:!1,type:{name:"boolean"}},currentPath:{defaultValue:null,description:"",name:"currentPath",required:!1,type:{name:"string"}}}}}catch{}try{j.displayName="Sidebar",j.__docgenInfo={description:"",displayName:"Sidebar",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SidebarItem[]"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"((href: string, external?: boolean) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},currentPath:{defaultValue:null,description:"",name:"currentPath",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Layout/Sidebar",component:j,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[r=>e.jsxs("div",{style:{display:"flex",height:"600px",border:"1px solid #e5e5e5"},children:[e.jsx(r,{}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fafaf9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsx("p",{children:"This is where your page content would appear."})]})]})]},k=[{id:"1",label:"Dashboard",icon:e.jsx(b,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Users",icon:e.jsx(N,{className:"h-5 w-5"}),href:"/users"},{id:"3",label:"Reports",icon:e.jsx(S,{className:"h-5 w-5"}),href:"/reports"},{id:"4",label:"Documents",icon:e.jsx(w,{className:"h-5 w-5"}),href:"/documents"},{id:"5",label:"Settings",icon:e.jsx(v,{className:"h-5 w-5"}),href:"/settings"}],O=[{id:"1",label:"Dashboard",icon:e.jsx(b,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Notifications",icon:e.jsx(V,{className:"h-5 w-5"}),href:"/notifications",badge:5},{id:"3",label:"Messages",icon:e.jsx(w,{className:"h-5 w-5"}),href:"/messages",badge:12},{id:"4",label:"Settings",icon:e.jsx(v,{className:"h-5 w-5"}),href:"/settings"}],A=[{id:"1",label:"Dashboard",icon:e.jsx(b,{className:"h-5 w-5"}),href:"/dashboard",active:!0},{id:"2",label:"Users",icon:e.jsx(N,{className:"h-5 w-5"}),children:[{id:"2-1",label:"All Users",href:"/users/all"},{id:"2-2",label:"Active Users",href:"/users/active"},{id:"2-3",label:"Inactive Users",href:"/users/inactive"}]},{id:"3",label:"Reports",icon:e.jsx(S,{className:"h-5 w-5"}),children:[{id:"3-1",label:"Sales",href:"/reports/sales"},{id:"3-2",label:"Analytics",href:"/reports/analytics"},{id:"3-3",label:"Performance",href:"/reports/performance"}]},{id:"4",label:"Settings",icon:e.jsx(v,{className:"h-5 w-5"}),href:"/settings"}],c={args:{items:k,currentPath:"/dashboard"}},h={args:{items:O,currentPath:"/dashboard"}},m={args:{items:A,currentPath:"/dashboard"}},p={args:{items:k,currentPath:"/users",header:e.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:600,color:"#0f172a"},children:"My App"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"v1.0.0"})]}),footer:e.jsxs("div",{style:{padding:"1rem",borderTop:"1px solid #e5e5e5"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"john@example.com"})]})]}),e.jsxs("button",{style:{width:"100%",display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem",fontSize:"0.875rem",color:"#64748b",border:"none",background:"transparent",borderRadius:"0.375rem",cursor:"pointer"},children:[e.jsx(M,{className:"h-4 w-4"}),"Sign Out"]})]})}},f={args:{items:A,currentPath:"/users/active"}},u={args:{items:k,currentPath:"/reports",onNavigate:(r,i)=>{alert(`Navigate to: ${r}${i?" (external)":""}`)}}},x={args:{items:[{id:"1",label:"Dashboard",icon:e.jsx(b,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Users",icon:e.jsx(N,{className:"h-5 w-5"}),badge:24,children:[{id:"2-1",label:"All Users",href:"/users/all"},{id:"2-2",label:"Active Users",href:"/users/active",badge:18},{id:"2-3",label:"Pending",href:"/users/pending",badge:6}]},{id:"3",label:"Reports",icon:e.jsx(S,{className:"h-5 w-5"}),children:[{id:"3-1",label:"Sales",href:"/reports/sales"},{id:"3-2",label:"Analytics",href:"/reports/analytics"}]},{id:"4",label:"Documents",icon:e.jsx(w,{className:"h-5 w-5"}),href:"/documents"},{id:"sep",label:"",separator:!0},{id:"5",label:"Help",icon:e.jsx(q,{className:"h-5 w-5"}),href:"/help"},{id:"6",label:"Settings",icon:e.jsx(v,{className:"h-5 w-5"}),href:"/settings"}],currentPath:"/users/active",header:e.jsx("div",{style:{padding:"1.5rem 1rem",borderBottom:"1px solid #e5e5e5"},children:e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,color:"#0f172a"},children:"PaperNote"})}),footer:e.jsx("div",{style:{padding:"1rem",borderTop:"1px solid #e5e5e5"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",backgroundColor:"#3b82f6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600},children:"JD"}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"john@example.com"})]})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    currentPath: '/dashboard'
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithBadges,
    currentPath: '/dashboard'
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems,
    currentPath: '/dashboard'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    currentPath: '/users',
    header: <div style={{
      padding: '1rem',
      borderBottom: '1px solid #e5e5e5'
    }}>\r
        <h2 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#0f172a'
      }}>My App</h2>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>v1.0.0</p>\r
      </div>,
    footer: <div style={{
      padding: '1rem',
      borderTop: '1px solid #e5e5e5'
    }}>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.5rem'
      }}>\r
          <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>\r
            JD\r
          </div>\r
          <div style={{
          flex: 1
        }}>\r
            <div style={{
            fontSize: '0.875rem',
            fontWeight: 500
          }}>John Doe</div>\r
            <div style={{
            fontSize: '0.75rem',
            color: '#64748b'
          }}>john@example.com</div>\r
          </div>\r
        </div>\r
        <button style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b',
        border: 'none',
        background: 'transparent',
        borderRadius: '0.375rem',
        cursor: 'pointer'
      }}>\r
          <LogOut className="h-4 w-4" />\r
          Sign Out\r
        </button>\r
      </div>
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems,
    currentPath: '/users/active'
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    currentPath: '/reports',
    onNavigate: (href: string, external?: boolean) => {
      alert(\`Navigate to: \${href}\${external ? ' (external)' : ''}\`);
    }
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      href: '/dashboard'
    }, {
      id: '2',
      label: 'Users',
      icon: <Users className="h-5 w-5" />,
      badge: 24,
      children: [{
        id: '2-1',
        label: 'All Users',
        href: '/users/all'
      }, {
        id: '2-2',
        label: 'Active Users',
        href: '/users/active',
        badge: 18
      }, {
        id: '2-3',
        label: 'Pending',
        href: '/users/pending',
        badge: 6
      }]
    }, {
      id: '3',
      label: 'Reports',
      icon: <BarChart className="h-5 w-5" />,
      children: [{
        id: '3-1',
        label: 'Sales',
        href: '/reports/sales'
      }, {
        id: '3-2',
        label: 'Analytics',
        href: '/reports/analytics'
      }]
    }, {
      id: '4',
      label: 'Documents',
      icon: <FileText className="h-5 w-5" />,
      href: '/documents'
    }, {
      id: 'sep',
      label: '',
      separator: true
    }, {
      id: '5',
      label: 'Help',
      icon: <HelpCircle className="h-5 w-5" />,
      href: '/help'
    }, {
      id: '6',
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '/settings'
    }],
    currentPath: '/users/active',
    header: <div style={{
      padding: '1.5rem 1rem',
      borderBottom: '1px solid #e5e5e5'
    }}>\r
        <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#0f172a'
      }}>PaperNote</h2>\r
      </div>,
    footer: <div style={{
      padding: '1rem',
      borderTop: '1px solid #e5e5e5'
    }}>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>\r
          <div style={{
          width: '36px',
          height: '36px',
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
          <div style={{
          flex: 1,
          minWidth: 0
        }}>\r
            <div style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>John Doe</div>\r
            <div style={{
            fontSize: '0.75rem',
            color: '#64748b',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>john@example.com</div>\r
          </div>\r
        </div>\r
      </div>
  }
}`,...x.parameters?.docs?.source}}};const se=["Default","WithBadges","WithNesting","WithHeaderAndFooter","ActiveChildItem","CustomNavigation","Complete"];export{f as ActiveChildItem,x as Complete,u as CustomNavigation,c as Default,h as WithBadges,p as WithHeaderAndFooter,m as WithNesting,se as __namedExportsOrder,re as default};
