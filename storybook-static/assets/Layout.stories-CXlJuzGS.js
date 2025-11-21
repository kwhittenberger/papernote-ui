import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BKwLVrTx.js";import{L as o}from"./Layout-DtZ_7phY.js";import{S as l}from"./Sidebar-odqopqzE.js";import{S as g}from"./StatusBar-05JmQjnE.js";import{P as m}from"./Page-CERVxTsj.js";import{C as r,a as s,b as a,c as t}from"./Card-B2OVltv-.js";import{H as j}from"./house-DYsr-2nT.js";import{U as b}from"./users-BFOsJMgE.js";import{S}from"./shopping-cart-CymxgMf0.js";import{C as B}from"./chart-no-axes-column-increasing-7qUTwLtv.js";import{M as z}from"./mail-CZoW5box.js";import{C as W}from"./calendar-Dt0mIsAA.js";import{F as A}from"./file-text-Dt9LsvNE.js";import{S as T}from"./settings-D3poWL1i.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-CpEQ32Ko.js";import"./createLucideIcon-BYzyF8e7.js";import"./chevron-right-B2fUNPBD.js";import"./x-B1I68jKP.js";import"./info-Dc_HJpJI.js";import"./triangle-alert-DlmaJyWH.js";import"./circle-alert-BpeGvsHD.js";import"./circle-check-big-DdjzQym0.js";import"./Loading-DuZtFltz.js";import"./loader-circle-Dn0VX4sB.js";const re={title:"Layout/Layout",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},c=[{id:"dashboard",label:"Dashboard",icon:e.jsx(j,{className:"h-5 w-5"}),href:"#dashboard"},{id:"users",label:"Users",icon:e.jsx(b,{className:"h-5 w-5"}),href:"#users"},{id:"products",label:"Products",icon:e.jsx(S,{className:"h-5 w-5"}),href:"#products"},{id:"reports",label:"Reports",icon:e.jsx(B,{className:"h-5 w-5"}),href:"#reports"},{id:"messages",label:"Messages",icon:e.jsx(z,{className:"h-5 w-5"}),href:"#messages",badge:5},{id:"calendar",label:"Calendar",icon:e.jsx(W,{className:"h-5 w-5"}),href:"#calendar"},{id:"documents",label:"Documents",icon:e.jsx(A,{className:"h-5 w-5"}),href:"#documents"},{id:"settings",label:"Settings",icon:e.jsx(T,{className:"h-5 w-5"}),href:"#settings"}],p={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Complete Layout"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"This layout includes sidebar, gutter with page navigation, main content, and status bar"}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Content Area"})}),e.jsx(t,{children:e.jsx("p",{children:"Your page content scrolls independently from the sidebar"})})]})]})})})}},x={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Layout Without Status Bar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Clean layout without the bottom status bar"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Content extends to the bottom without status bar spacing"})})})]})})})}},u={render:()=>{const[i,h]=d.useState("dashboard"),n=[{id:"overview",label:"Overview"},{id:"stats",label:"Statistics"},{id:"activity",label:"Recent Activity"},{id:"settings",label:"Settings"}];return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),sections:n,children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("section",{id:"overview",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Overview"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Page navigation dots appear in the gutter area"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Scroll down to see page navigation in action"})})})]}),e.jsxs("section",{id:"stats",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Statistics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Total Users"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"1,234"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Revenue"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"$45,678"})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Orders"})}),e.jsx(t,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"567"})})]})]})]}),e.jsxs("section",{id:"activity",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Recent Activity"}),e.jsx(r,{children:e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{children:"New user registration - 2 minutes ago"}),e.jsx("div",{children:"Order #1234 completed - 15 minutes ago"}),e.jsx("div",{children:"Payment received - 1 hour ago"})]})})})]}),e.jsxs("section",{id:"settings",style:{minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Settings"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Configuration options"})})})]})]})})})}},v={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Dashboard"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Welcome back! Here's what's happening today."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Total Revenue"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#10b981"},children:"$45,231"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 20.1% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Subscriptions"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#3b82f6"},children:"+2,350"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 180.1% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Sales"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#8b5cf6"},children:"+12,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 19% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Active Now"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#f59e0b"},children:"+573"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 201 since last hour"})]})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Recent Sales"})}),e.jsx(t,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[1,2,3,4,5].map(n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:500},children:["Order #",1e3+n]}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Customer ",n]})]}),e.jsxs("div",{style:{fontWeight:600},children:["+$",(Math.random()*1e3).toFixed(2)]})]},n))})})]}),e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(a,{children:"Top Products"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product A"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"234 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product B"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"189 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product C"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"156 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product D"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"142 sales"})]})]})})]})]})]})})})}},f={render:()=>{const[i,h]=d.useState("dashboard");return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Collapsed Sidebar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"The sidebar starts in collapsed state showing only icons"}),e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"More horizontal space for content when sidebar is collapsed"})})})]})})})}},y={render:()=>{const[i,h]=d.useState("users");return e.jsx(o,{sidebar:e.jsx(l,{items:c,currentPath:`#${i}`}),statusBar:e.jsx(g,{}),children:e.jsx(m,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Users"}),e.jsx("p",{style:{color:"#64748b"},children:"Manage user accounts and permissions"})]}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontSize:"0.875rem",fontWeight:500},children:"Add User"})]}),e.jsx(r,{children:e.jsx(t,{children:e.jsxs("table",{style:{width:"100%",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e5e5e5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Name"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Email"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Role"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Status"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Actions"})]})}),e.jsx("tbody",{children:[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"Inactive"}].map((n,C)=>e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:n.name}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:n.email}),e.jsx("td",{style:{padding:"0.75rem"},children:n.role}),e.jsx("td",{style:{padding:"0.75rem"},children:e.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",backgroundColor:n.status==="Active"?"#d1fae5":"#fee2e2",color:n.status==="Active"?"#065f46":"#991b1b"},children:n.status})}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx("button",{style:{padding:"0.25rem 0.75rem",backgroundColor:"transparent",border:"1px solid #e5e5e5",borderRadius:"0.25rem",cursor:"pointer",fontSize:"0.75rem"},children:"Edit"})})]},C))})]})})})]})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
              Complete Layout\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '2rem'
          }}>\r
              This layout includes sidebar, gutter with page navigation, main content, and status bar\r
            </p>\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>Content Area</CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <p>Your page content scrolls independently from the sidebar</p>\r
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
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
              marginBottom: '2rem'
            }}>\r
                Page navigation dots appear in the gutter area\r
              </p>\r
              <Card>\r
                <CardContent>\r
                  <p>Scroll down to see page navigation in action</p>\r
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const te=["Default","WithoutStatusBar","WithPageSections","DashboardLayout","CollapsedSidebar","UserManagementApp"];export{f as CollapsedSidebar,v as DashboardLayout,p as Default,y as UserManagementApp,u as WithPageSections,x as WithoutStatusBar,te as __namedExportsOrder,re as default};
