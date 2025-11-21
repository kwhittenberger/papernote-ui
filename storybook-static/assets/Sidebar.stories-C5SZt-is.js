import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as u}from"./Sidebar-BU4wOFSE.js";import{H as n}from"./house-CC-YVKvU.js";import{U as h}from"./users-MZKDZj6m.js";import{C as m}from"./chart-no-axes-column-increasing-DHmjfGf1.js";import{F as p}from"./file-text-CqM4uY6G.js";import{S as d}from"./settings-ByrlyAD8.js";import{B as x}from"./bell-DqffplRd.js";import{L as v}from"./log-out-iIA4tlSH.js";import{C as y}from"./circle-question-mark-DWqWVGQG.js";import"./iframe-DvQbZzpK.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-7ZmIJCPf.js";import"./createLucideIcon-3pObC86R.js";import"./chevron-right-BK-OvBUp.js";const H={title:"Layout/Sidebar",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[c=>e.jsxs("div",{style:{display:"flex",height:"600px",border:"1px solid #e5e5e5"},children:[e.jsx(c,{}),e.jsxs("div",{style:{flex:1,padding:"2rem",backgroundColor:"#fafaf9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsx("p",{children:"This is where your page content would appear."})]})]})]},f=[{id:"1",label:"Dashboard",icon:e.jsx(n,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Users",icon:e.jsx(h,{className:"h-5 w-5"}),href:"/users"},{id:"3",label:"Reports",icon:e.jsx(m,{className:"h-5 w-5"}),href:"/reports"},{id:"4",label:"Documents",icon:e.jsx(p,{className:"h-5 w-5"}),href:"/documents"},{id:"5",label:"Settings",icon:e.jsx(d,{className:"h-5 w-5"}),href:"/settings"}],j=[{id:"1",label:"Dashboard",icon:e.jsx(n,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Notifications",icon:e.jsx(x,{className:"h-5 w-5"}),href:"/notifications",badge:5},{id:"3",label:"Messages",icon:e.jsx(p,{className:"h-5 w-5"}),href:"/messages",badge:12},{id:"4",label:"Settings",icon:e.jsx(d,{className:"h-5 w-5"}),href:"/settings"}],g=[{id:"1",label:"Dashboard",icon:e.jsx(n,{className:"h-5 w-5"}),href:"/dashboard",active:!0},{id:"2",label:"Users",icon:e.jsx(h,{className:"h-5 w-5"}),children:[{id:"2-1",label:"All Users",href:"/users/all"},{id:"2-2",label:"Active Users",href:"/users/active"},{id:"2-3",label:"Inactive Users",href:"/users/inactive"}]},{id:"3",label:"Reports",icon:e.jsx(m,{className:"h-5 w-5"}),children:[{id:"3-1",label:"Sales",href:"/reports/sales"},{id:"3-2",label:"Analytics",href:"/reports/analytics"},{id:"3-3",label:"Performance",href:"/reports/performance"}]},{id:"4",label:"Settings",icon:e.jsx(d,{className:"h-5 w-5"}),href:"/settings"}],r={args:{items:f,currentPath:"/dashboard"}},s={args:{items:j,currentPath:"/dashboard"}},t={args:{items:g,currentPath:"/dashboard"}},a={args:{items:f,currentPath:"/users",header:e.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:600,color:"#0f172a"},children:"My App"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"v1.0.0"})]}),footer:e.jsxs("div",{style:{padding:"1rem",borderTop:"1px solid #e5e5e5"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"john@example.com"})]})]}),e.jsxs("button",{style:{width:"100%",display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem",fontSize:"0.875rem",color:"#64748b",border:"none",background:"transparent",borderRadius:"0.375rem",cursor:"pointer"},children:[e.jsx(v,{className:"h-4 w-4"}),"Sign Out"]})]})}},i={args:{items:g,currentPath:"/users/active"}},o={args:{items:f,currentPath:"/reports",onNavigate:(c,b)=>{alert(`Navigate to: ${c}${b?" (external)":""}`)}}},l={args:{items:[{id:"1",label:"Dashboard",icon:e.jsx(n,{className:"h-5 w-5"}),href:"/dashboard"},{id:"2",label:"Users",icon:e.jsx(h,{className:"h-5 w-5"}),badge:24,children:[{id:"2-1",label:"All Users",href:"/users/all"},{id:"2-2",label:"Active Users",href:"/users/active",badge:18},{id:"2-3",label:"Pending",href:"/users/pending",badge:6}]},{id:"3",label:"Reports",icon:e.jsx(m,{className:"h-5 w-5"}),children:[{id:"3-1",label:"Sales",href:"/reports/sales"},{id:"3-2",label:"Analytics",href:"/reports/analytics"}]},{id:"4",label:"Documents",icon:e.jsx(p,{className:"h-5 w-5"}),href:"/documents"},{id:"sep",label:"",separator:!0},{id:"5",label:"Help",icon:e.jsx(y,{className:"h-5 w-5"}),href:"/help"},{id:"6",label:"Settings",icon:e.jsx(d,{className:"h-5 w-5"}),href:"/settings"}],currentPath:"/users/active",header:e.jsx("div",{style:{padding:"1.5rem 1rem",borderBottom:"1px solid #e5e5e5"},children:e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,color:"#0f172a"},children:"PaperNote"})}),footer:e.jsx("div",{style:{padding:"1rem",borderTop:"1px solid #e5e5e5"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",backgroundColor:"#3b82f6",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600},children:"JD"}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"john@example.com"})]})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    currentPath: '/dashboard'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithBadges,
    currentPath: '/dashboard'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems,
    currentPath: '/dashboard'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: nestedItems,
    currentPath: '/users/active'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    currentPath: '/reports',
    onNavigate: (href: string, external?: boolean) => {
      alert(\`Navigate to: \${href}\${external ? ' (external)' : ''}\`);
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const J=["Default","WithBadges","WithNesting","WithHeaderAndFooter","ActiveChildItem","CustomNavigation","Complete"];export{i as ActiveChildItem,l as Complete,o as CustomNavigation,r as Default,s as WithBadges,a as WithHeaderAndFooter,t as WithNesting,J as __namedExportsOrder,H as default};
