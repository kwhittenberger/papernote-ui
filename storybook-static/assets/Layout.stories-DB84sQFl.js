import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DvQbZzpK.js";import{L as a}from"./Layout-FpYHqBd0.js";import{S as l}from"./Sidebar-BU4wOFSE.js";import{S as g}from"./StatusBar-yobMxkVk.js";import{P as m}from"./Page-CERVxTsj.js";import{C as r,c as t,a as s,b as o}from"./Card-CGMN0C8f.js";import{H as j}from"./house-CC-YVKvU.js";import{U as C}from"./users-MZKDZj6m.js";import{S}from"./shopping-cart-BH-wGvZz.js";import{C as z}from"./chart-no-axes-column-increasing-DHmjfGf1.js";import{M as B}from"./mail-DEJ8bWdJ.js";import{C as w}from"./calendar-DtU6BCrx.js";import{F as W}from"./file-text-CqM4uY6G.js";import{S as A}from"./settings-ByrlyAD8.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-7ZmIJCPf.js";import"./createLucideIcon-3pObC86R.js";import"./chevron-right-BK-OvBUp.js";import"./x-BiwQ2MVM.js";import"./info-GvptUnvn.js";import"./triangle-alert-DGhJUaw7.js";import"./circle-alert-B4-cbJhD.js";import"./circle-check-big-Cfkz3KRK.js";import"./Loading-BkmG9eFC.js";import"./loader-circle-SD7GARUd.js";const re={title:"Layout/Layout",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},c=[{id:"dashboard",label:"Dashboard",icon:e.jsx(j,{className:"h-5 w-5"}),href:"#dashboard"},{id:"users",label:"Users",icon:e.jsx(C,{className:"h-5 w-5"}),href:"#users"},{id:"products",label:"Products",icon:e.jsx(S,{className:"h-5 w-5"}),href:"#products"},{id:"reports",label:"Reports",icon:e.jsx(z,{className:"h-5 w-5"}),href:"#reports"},{id:"messages",label:"Messages",icon:e.jsx(B,{className:"h-5 w-5"}),href:"#messages",badge:5},{id:"calendar",label:"Calendar",icon:e.jsx(w,{className:"h-5 w-5"}),href:"#calendar"},{id:"documents",label:"Documents",icon:e.jsx(W,{className:"h-5 w-5"}),href:"#documents"},{id:"settings",label:"Settings",icon:e.jsx(A,{className:"h-5 w-5"}),href:"#settings"}],p={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"📐 Complete Layout Structure"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"1.5rem"},children:"The Layout component provides the complete application shell with all major regions."}),e.jsx(r,{style:{marginBottom:"1.5rem",backgroundColor:"#fffbeb",border:"2px solid #fbbf24"},children:e.jsxs(t,{children:[e.jsx("h3",{style:{fontWeight:600,marginBottom:"0.75rem",fontSize:"0.875rem"},children:"🎯 Layout Anatomy:"}),e.jsxs("ul",{style:{marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem",fontSize:"0.875rem"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sidebar"})," - 256px fixed width, notebook binding effect, navigation menu"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gutter"})," - 32px (w-8) space between sidebar and content with navigation dots"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Content area"})," - Flexible width, independently scrollable main region"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status bar"})," - Optional fixed bar at bottom for status information"]})]})]})}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Content Area"})}),e.jsxs(t,{children:[e.jsx("p",{style:{marginBottom:"0.75rem"},children:"This is the main content region that scrolls independently."}),e.jsx("p",{style:{color:"#64748b",fontSize:"0.875rem"},children:"Try resizing the browser to see how the layout adapts - the sidebar stays fixed while content area flexes."})]})]})]})})})}},x={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Layout Without Status Bar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Clean layout without the bottom status bar"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Content extends to the bottom without status bar spacing"})})})]})})})}},f={render:()=>{const[i,h]=d.useState("dashboard"),n=[{id:"overview",label:"Overview"},{id:"stats",label:"Statistics"},{id:"activity",label:"Recent Activity"},{id:"settings",label:"Settings"}];return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),sections:n,children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("section",{id:"overview",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Overview"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"1.5rem"},children:"Page navigation dots appear in the gutter area between sidebar and content."}),e.jsx(r,{style:{marginBottom:"1.5rem",backgroundColor:"#eff6ff",border:"2px solid #3b82f6"},children:e.jsxs(t,{children:[e.jsx("h3",{style:{fontWeight:600,marginBottom:"0.75rem",fontSize:"0.875rem"},children:"🔵 Navigation Dots:"}),e.jsxs("ul",{style:{marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem",fontSize:"0.875rem"},children:[e.jsxs("li",{children:["Look in the ",e.jsx("strong",{children:"narrow gutter space"})," between sidebar and content"]}),e.jsx("li",{children:"Each dot represents a section on this page"}),e.jsxs("li",{children:["The ",e.jsx("strong",{children:"active dot is highlighted"})," as you scroll"]}),e.jsx("li",{children:"Click any dot to jump to that section"})]})]})}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Scroll down to see the active dot change as different sections come into view."})})})]}),e.jsxs("section",{id:"stats",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Statistics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Total Users"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"1,234"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Revenue"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"$45,678"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Orders"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"567"})})]})]})]}),e.jsxs("section",{id:"activity",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Recent Activity"}),e.jsx(r,{children:e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{children:"New user registration - 2 minutes ago"}),e.jsx("div",{children:"Order #1234 completed - 15 minutes ago"}),e.jsx("div",{children:"Payment received - 1 hour ago"})]})})})]}),e.jsxs("section",{id:"settings",style:{minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Settings"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Configuration options"})})})]})]})})})}},u={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Dashboard"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Welcome back! Here's what's happening today."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Total Revenue"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#10b981"},children:"$45,231"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 20.1% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Subscriptions"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#3b82f6"},children:"+2,350"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 180.1% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Sales"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#8b5cf6"},children:"+12,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 19% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Active Now"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#f59e0b"},children:"+573"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 201 since last hour"})]})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Recent Sales"})}),e.jsx(t,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[1,2,3,4,5].map(n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:500},children:["Order #",1e3+n]}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Customer ",n]})]}),e.jsxs("div",{style:{fontWeight:600},children:["+$",(Math.random()*1e3).toFixed(2)]})]},n))})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(o,{children:"Top Products"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product A"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"234 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product B"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"189 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product C"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"156 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product D"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"142 sales"})]})]})})]})]})]})})})}},y={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Collapsed Sidebar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"The sidebar starts in collapsed state showing only icons"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"More horizontal space for content when sidebar is collapsed"})})})]})})})}},b={render:()=>{const[i,h]=d.useState("users");return e.jsx(a,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Users"}),e.jsx("p",{style:{color:"#64748b"},children:"Manage user accounts and permissions"})]}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontSize:"0.875rem",fontWeight:500},children:"Add User"})]}),e.jsx(r,{children:e.jsx(t,{children:e.jsxs("table",{style:{width:"100%",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e5e5e5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Name"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Email"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Role"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Status"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Actions"})]})}),e.jsx("tbody",{children:[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"Inactive"}].map((n,v)=>e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:n.name}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:n.email}),e.jsx("td",{style:{padding:"0.75rem"},children:n.role}),e.jsx("td",{style:{padding:"0.75rem"},children:e.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",backgroundColor:n.status==="Active"?"#d1fae5":"#fee2e2",color:n.status==="Active"?"#065f46":"#991b1b"},children:n.status})}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx("button",{style:{padding:"0.25rem 0.75rem",backgroundColor:"transparent",border:"1px solid #e5e5e5",borderRadius:"0.25rem",cursor:"pointer",fontSize:"0.75rem"},children:"Edit"})})]},v))})]})})})]})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />} statusBar={<StatusBar />}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>\r
              📐 Complete Layout Structure\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '1.5rem'
          }}>\r
              The Layout component provides the complete application shell with all major regions.\r
            </p>\r
            <Card style={{
            marginBottom: '1.5rem',
            backgroundColor: '#fffbeb',
            border: '2px solid #fbbf24'
          }}>\r
              <CardContent>\r
                <h3 style={{
                fontWeight: 600,
                marginBottom: '0.75rem',
                fontSize: '0.875rem'
              }}>🎯 Layout Anatomy:</h3>\r
                <ul style={{
                marginLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>\r
                  <li><strong>Sidebar</strong> - 256px fixed width, notebook binding effect, navigation menu</li>\r
                  <li><strong>Gutter</strong> - 32px (w-8) space between sidebar and content with navigation dots</li>\r
                  <li><strong>Content area</strong> - Flexible width, independently scrollable main region</li>\r
                  <li><strong>Status bar</strong> - Optional fixed bar at bottom for status information</li>\r
                </ul>\r
              </CardContent>\r
            </Card>\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>Content Area</CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <p style={{
                marginBottom: '0.75rem'
              }}>This is the main content region that scrolls independently.</p>\r
                <p style={{
                color: '#64748b',
                fontSize: '0.875rem'
              }}>Try resizing the browser to see how the layout adapts - the sidebar stays fixed while content area flexes.</p>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>\r
              Layout Without Status Bar\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '2rem'
          }}>\r
              Clean layout without the bottom status bar\r
            </p>\r
            <Card>\r
              <CardContent>\r
                <p>Content extends to the bottom without status bar spacing</p>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    const sections = [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'stats',
      label: 'Statistics'
    }, {
      id: 'activity',
      label: 'Recent Activity'
    }, {
      id: 'settings',
      label: 'Settings'
    }];
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />} statusBar={<StatusBar />} sections={sections}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <section id="overview" style={{
            marginBottom: '4rem',
            minHeight: '600px'
          }}>\r
              <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>\r
                Overview\r
              </h1>\r
              <p style={{
              color: '#64748b',
              marginBottom: '1.5rem'
            }}>\r
                Page navigation dots appear in the gutter area between sidebar and content.\r
              </p>\r
              <Card style={{
              marginBottom: '1.5rem',
              backgroundColor: '#eff6ff',
              border: '2px solid #3b82f6'
            }}>\r
                <CardContent>\r
                  <h3 style={{
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  fontSize: '0.875rem'
                }}>🔵 Navigation Dots:</h3>\r
                  <ul style={{
                  marginLeft: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}>\r
                    <li>Look in the <strong>narrow gutter space</strong> between sidebar and content</li>\r
                    <li>Each dot represents a section on this page</li>\r
                    <li>The <strong>active dot is highlighted</strong> as you scroll</li>\r
                    <li>Click any dot to jump to that section</li>\r
                  </ul>\r
                </CardContent>\r
              </Card>\r
              <Card>\r
                <CardContent>\r
                  <p>Scroll down to see the active dot change as different sections come into view.</p>\r
                </CardContent>\r
              </Card>\r
            </section>\r
\r
            <section id="stats" style={{
            marginBottom: '4rem',
            minHeight: '600px'
          }}>\r
              <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>\r
                Statistics\r
              </h2>\r
              <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}>\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle>Total Users</CardTitle>\r
                  </CardHeader>\r
                  <CardContent>\r
                    <div style={{
                    fontSize: '2rem',
                    fontWeight: 700
                  }}>1,234</div>\r
                  </CardContent>\r
                </Card>\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle>Revenue</CardTitle>\r
                  </CardHeader>\r
                  <CardContent>\r
                    <div style={{
                    fontSize: '2rem',
                    fontWeight: 700
                  }}>$45,678</div>\r
                  </CardContent>\r
                </Card>\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle>Orders</CardTitle>\r
                  </CardHeader>\r
                  <CardContent>\r
                    <div style={{
                    fontSize: '2rem',
                    fontWeight: 700
                  }}>567</div>\r
                  </CardContent>\r
                </Card>\r
              </div>\r
            </section>\r
\r
            <section id="activity" style={{
            marginBottom: '4rem',
            minHeight: '600px'
          }}>\r
              <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>\r
                Recent Activity\r
              </h2>\r
              <Card>\r
                <CardContent>\r
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>\r
                    <div>New user registration - 2 minutes ago</div>\r
                    <div>Order #1234 completed - 15 minutes ago</div>\r
                    <div>Payment received - 1 hour ago</div>\r
                  </div>\r
                </CardContent>\r
              </Card>\r
            </section>\r
\r
            <section id="settings" style={{
            minHeight: '600px'
          }}>\r
              <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>\r
                Settings\r
              </h2>\r
              <Card>\r
                <CardContent>\r
                  <p>Configuration options</p>\r
                </CardContent>\r
              </Card>\r
            </section>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />} statusBar={<StatusBar />}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>\r
              Dashboard\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '2rem'
          }}>\r
              Welcome back! Here's what's happening today.\r
            </p>\r
\r
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Total Revenue</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#10b981'
                }}>$45,231</div>\r
                  <div style={{
                  fontSize: '0.875rem',
                  color: '#10b981',
                  marginTop: '0.5rem'
                }}>↑ 20.1% from last month</div>\r
                </CardContent>\r
              </Card>\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Subscriptions</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#3b82f6'
                }}>+2,350</div>\r
                  <div style={{
                  fontSize: '0.875rem',
                  color: '#10b981',
                  marginTop: '0.5rem'
                }}>↑ 180.1% from last month</div>\r
                </CardContent>\r
              </Card>\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Sales</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#8b5cf6'
                }}>+12,234</div>\r
                  <div style={{
                  fontSize: '0.875rem',
                  color: '#10b981',
                  marginTop: '0.5rem'
                }}>↑ 19% from last month</div>\r
                </CardContent>\r
              </Card>\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Active Now</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#f59e0b'
                }}>+573</div>\r
                  <div style={{
                  fontSize: '0.875rem',
                  color: '#10b981',
                  marginTop: '0.5rem'
                }}>↑ 201 since last hour</div>\r
                </CardContent>\r
              </Card>\r
            </div>\r
\r
            <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '1.5rem'
          }}>\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Recent Sales</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>\r
                    {[1, 2, 3, 4, 5].map(i => <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid #e5e5e5'
                  }}>\r
                        <div>\r
                          <div style={{
                        fontWeight: 500
                      }}>Order #{1000 + i}</div>\r
                          <div style={{
                        fontSize: '0.875rem',
                        color: '#64748b'
                      }}>Customer {i}</div>\r
                        </div>\r
                        <div style={{
                      fontWeight: 600
                    }}>+\${(Math.random() * 1000).toFixed(2)}</div>\r
                      </div>)}\r
                  </div>\r
                </CardContent>\r
              </Card>\r
\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle>Top Products</CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>\r
                    <div>\r
                      <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>Product A</div>\r
                      <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>234 sales</div>\r
                    </div>\r
                    <div>\r
                      <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>Product B</div>\r
                      <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>189 sales</div>\r
                    </div>\r
                    <div>\r
                      <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>Product C</div>\r
                      <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>156 sales</div>\r
                    </div>\r
                    <div>\r
                      <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}>Product D</div>\r
                      <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>142 sales</div>\r
                    </div>\r
                  </div>\r
                </CardContent>\r
              </Card>\r
            </div>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />} statusBar={<StatusBar />}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>\r
              Collapsed Sidebar\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '2rem'
          }}>\r
              The sidebar starts in collapsed state showing only icons\r
            </p>\r
            <Card>\r
              <CardContent>\r
                <p>More horizontal space for content when sidebar is collapsed</p>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('users');
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath={\`#\${activeItem}\`} />} statusBar={<StatusBar />}>\r
        <Page>\r
          <div style={{
          padding: '2rem'
        }}>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '2rem'
          }}>\r
              <div>\r
                <h1 style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}>\r
                  Users\r
                </h1>\r
                <p style={{
                color: '#64748b'
              }}>\r
                  Manage user accounts and permissions\r
                </p>\r
              </div>\r
              <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500
            }}>\r
                Add User\r
              </button>\r
            </div>\r
\r
            <Card>\r
              <CardContent>\r
                <table style={{
                width: '100%',
                fontSize: '0.875rem'
              }}>\r
                  <thead>\r
                    <tr style={{
                    borderBottom: '2px solid #e5e5e5'
                  }}>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.75rem',
                      fontWeight: 600
                    }}>Name</th>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.75rem',
                      fontWeight: 600
                    }}>Email</th>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.75rem',
                      fontWeight: 600
                    }}>Role</th>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.75rem',
                      fontWeight: 600
                    }}>Status</th>\r
                      <th style={{
                      textAlign: 'right',
                      padding: '0.75rem',
                      fontWeight: 600
                    }}>Actions</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    {[{
                    name: 'John Doe',
                    email: 'john@example.com',
                    role: 'Admin',
                    status: 'Active'
                  }, {
                    name: 'Jane Smith',
                    email: 'jane@example.com',
                    role: 'Editor',
                    status: 'Active'
                  }, {
                    name: 'Bob Johnson',
                    email: 'bob@example.com',
                    role: 'Viewer',
                    status: 'Inactive'
                  }].map((user, i) => <tr key={i} style={{
                    borderBottom: '1px solid #e5e5e5'
                  }}>\r
                        <td style={{
                      padding: '0.75rem'
                    }}>{user.name}</td>\r
                        <td style={{
                      padding: '0.75rem',
                      color: '#64748b'
                    }}>{user.email}</td>\r
                        <td style={{
                      padding: '0.75rem'
                    }}>{user.role}</td>\r
                        <td style={{
                      padding: '0.75rem'
                    }}>\r
                          <span style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        backgroundColor: user.status === 'Active' ? '#d1fae5' : '#fee2e2',
                        color: user.status === 'Active' ? '#065f46' : '#991b1b'
                      }}>\r
                            {user.status}\r
                          </span>\r
                        </td>\r
                        <td style={{
                      padding: '0.75rem',
                      textAlign: 'right'
                    }}>\r
                          <button style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'transparent',
                        border: '1px solid #e5e5e5',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '0.75rem'
                      }}>\r
                            Edit\r
                          </button>\r
                        </td>\r
                      </tr>)}\r
                  </tbody>\r
                </table>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </Page>\r
      </Layout>;
  }
}`,...b.parameters?.docs?.source}}};const te=["Default","WithoutStatusBar","WithPageSections","DashboardLayout","CollapsedSidebar","UserManagementApp"];export{y as CollapsedSidebar,u as DashboardLayout,p as Default,b as UserManagementApp,f as WithPageSections,x as WithoutStatusBar,te as __namedExportsOrder,re as default};
