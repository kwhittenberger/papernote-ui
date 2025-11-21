import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as j}from"./Page-B8tQoYsh.js";import{C as r,a as n,b as d,c as t}from"./Card-CQQ-FvQc.js";import{B as i}from"./Button-21ZwGxhY.js";import{S as C}from"./settings-CfFQNDHY.js";import{D as b}from"./download-C06Njqgy.js";import{P as v}from"./plus-fyjuMsjz.js";import"./Loading-DlA0mX86.js";import"./loader-circle-BUSlDFqH.js";import"./createLucideIcon-D9MvcA__.js";import"./iframe-C8OopBmF.js";import"./preload-helper-PPVm8Dsz.js";function a({title:g,description:x,children:y,className:u="",headerContent:f}){return e.jsxs(j,{children:[f,e.jsxs("div",{className:`p-6 max-w-7xl mx-auto pb-20 ${u}`,children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-ink-900 mb-2",children:g}),x&&e.jsx("p",{className:"text-ink-600",children:x})]}),y]})]})}try{a.displayName="PageLayout",a.__docgenInfo={description:`Standard page layout component providing consistent structure
across all application pages.

Wraps content in the Page component for notebook styling
(gray background, red margin line, ruled lines).`,displayName:"PageLayout",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},headerContent:{defaultValue:null,description:"Optional content to render before the title (e.g., ControlBar)",name:"headerContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const R={title:"Layout/PageLayout",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},o={args:{title:"Page Title",description:"This is a standard page layout with notebook styling",children:e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Content Section"})}),e.jsx(t,{children:e.jsx("p",{children:"Your page content goes here with consistent structure across the application."})})]})}},s={args:{title:"Simple Page",children:e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Page without a description, just the title."})})})}},l={args:{title:"Page with Header Actions",description:"This page has custom header content above the title",headerContent:e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.5rem",marginBottom:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Control Bar / Breadcrumbs can go here"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(i,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(i,{variant:"primary",size:"sm",children:"Save"})]})]}),children:e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Page content with header controls above."})})})}},c={render:()=>e.jsxs(a,{title:"Dashboard",description:"Overview of your application metrics and data",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Total Users"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#3b82f6"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 12% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Revenue"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#10b981"},children:"$45,678"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 8% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Active Orders"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#f59e0b"},children:"89"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.5rem"},children:"Pending fulfillment"})]})]})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Recent Activity"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"New user registration"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"2 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"Order #1234 completed"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"15 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Payment received"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"1 hour ago"})]})]})})]})]})},m={render:()=>e.jsx(a,{title:"Settings",description:"Manage your account preferences and application settings",headerContent:e.jsx("div",{style:{padding:"0.75rem 1rem",backgroundColor:"#fef3c7",border:"1px solid #fbbf24",borderRadius:"0.375rem",fontSize:"0.875rem",color:"#92400e",marginBottom:"1.5rem"},children:"Changes will be saved automatically"}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Profile Information"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Full Name"}),e.jsx("input",{type:"text",defaultValue:"John Doe",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Email Address"}),e.jsx("input",{type:"email",defaultValue:"john@example.com",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]})]})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Preferences"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Enable email notifications"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Enable dark mode"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Show usage statistics"})]})]})})]}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Security"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(i,{variant:"primary",size:"sm",icon:e.jsx(C,{}),children:"Change Password"}),e.jsx(i,{variant:"ghost",size:"sm",children:"Enable Two-Factor Authentication"})]})})]})]})})},p={render:()=>e.jsx(a,{title:"Products",description:"Manage your product catalog",headerContent:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginBottom:"1.5rem"},children:[e.jsx(i,{variant:"ghost",icon:e.jsx(b,{}),children:"Export"}),e.jsx(i,{variant:"primary",icon:e.jsx(v,{}),children:"Add Product"})]}),children:e.jsx(r,{children:e.jsx(t,{children:e.jsxs("table",{style:{width:"100%",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e5e5e5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Product"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Category"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Price"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Stock"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Actions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"Wireless Mouse"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Electronics"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$29.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"145"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(i,{variant:"ghost",size:"sm",children:"Edit"})})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"Mechanical Keyboard"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Electronics"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$89.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"67"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(i,{variant:"ghost",size:"sm",children:"Edit"})})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"USB Cable"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Accessories"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$12.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"234"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(i,{variant:"ghost",size:"sm",children:"Edit"})})]})]})]})})})})},h={render:()=>e.jsx(a,{title:"Create New Project",description:"Fill in the details below to create a new project",children:e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{children:"Project Information"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Project Name"}),e.jsx("input",{type:"text",placeholder:"Enter project name",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Description"}),e.jsx("textarea",{placeholder:"Enter project description",rows:4,style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem",fontFamily:"inherit"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Category"}),e.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"},children:[e.jsx("option",{children:"Development"}),e.jsx("option",{children:"Design"}),e.jsx("option",{children:"Marketing"}),e.jsx("option",{children:"Research"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end",marginTop:"1rem"},children:[e.jsx(i,{variant:"ghost",children:"Cancel"}),e.jsx(i,{variant:"primary",children:"Create Project"})]})]})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    description: 'This is a standard page layout with notebook styling',
    children: <Card>\r
        <CardHeader>\r
          <CardTitle>Content Section</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <p>Your page content goes here with consistent structure across the application.</p>\r
        </CardContent>\r
      </Card>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page',
    children: <Card>\r
        <CardContent>\r
          <p>Page without a description, just the title.</p>\r
        </CardContent>\r
      </Card>
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page with Header Actions',
    description: 'This page has custom header content above the title',
    headerContent: <div style={{
      padding: '1rem',
      backgroundColor: '#eff6ff',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Control Bar / Breadcrumbs can go here\r
        </div>\r
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>\r
          <Button variant="ghost" size="sm">Cancel</Button>\r
          <Button variant="primary" size="sm">Save</Button>\r
        </div>\r
      </div>,
    children: <Card>\r
        <CardContent>\r
          <p>Page content with header controls above.</p>\r
        </CardContent>\r
      </Card>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <PageLayout title="Dashboard" description="Overview of your application metrics and data">\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    }}>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Total Users</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#3b82f6'
          }}>1,234</div>\r
            <div style={{
            fontSize: '0.875rem',
            color: '#10b981',
            marginTop: '0.5rem'
          }}>↑ 12% from last month</div>\r
          </CardContent>\r
        </Card>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Revenue</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#10b981'
          }}>$45,678</div>\r
            <div style={{
            fontSize: '0.875rem',
            color: '#10b981',
            marginTop: '0.5rem'
          }}>↑ 8% from last month</div>\r
          </CardContent>\r
        </Card>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Active Orders</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#f59e0b'
          }}>89</div>\r
            <div style={{
            fontSize: '0.875rem',
            color: '#64748b',
            marginTop: '0.5rem'
          }}>Pending fulfillment</div>\r
          </CardContent>\r
        </Card>\r
      </div>\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Recent Activity</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #e5e5e5'
          }}>\r
              <span>New user registration</span>\r
              <span style={{
              color: '#64748b',
              fontSize: '0.875rem'
            }}>2 minutes ago</span>\r
            </div>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #e5e5e5'
          }}>\r
              <span>Order #1234 completed</span>\r
              <span style={{
              color: '#64748b',
              fontSize: '0.875rem'
            }}>15 minutes ago</span>\r
            </div>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>\r
              <span>Payment received</span>\r
              <span style={{
              color: '#64748b',
              fontSize: '0.875rem'
            }}>1 hour ago</span>\r
            </div>\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </PageLayout>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PageLayout title="Settings" description="Manage your account preferences and application settings" headerContent={<div style={{
    padding: '0.75rem 1rem',
    backgroundColor: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    color: '#92400e',
    marginBottom: '1.5rem'
  }}>\r
          Changes will be saved automatically\r
        </div>}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Profile Information</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>\r
              <div>\r
                <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                marginBottom: '0.5rem'
              }}>\r
                  Full Name\r
                </label>\r
                <input type="text" defaultValue="John Doe" style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e5e5e5',
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }} />\r
              </div>\r
              <div>\r
                <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                marginBottom: '0.5rem'
              }}>\r
                  Email Address\r
                </label>\r
                <input type="email" defaultValue="john@example.com" style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e5e5e5',
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }} />\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Preferences</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>\r
              <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>\r
                <input type="checkbox" defaultChecked />\r
                <span style={{
                fontSize: '0.875rem'
              }}>Enable email notifications</span>\r
              </label>\r
              <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>\r
                <input type="checkbox" />\r
                <span style={{
                fontSize: '0.875rem'
              }}>Enable dark mode</span>\r
              </label>\r
              <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>\r
                <input type="checkbox" defaultChecked />\r
                <span style={{
                fontSize: '0.875rem'
              }}>Show usage statistics</span>\r
              </label>\r
            </div>\r
          </CardContent>\r
        </Card>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Security</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>\r
              <Button variant="primary" size="sm" icon={<Settings />}>\r
                Change Password\r
              </Button>\r
              <Button variant="ghost" size="sm">\r
                Enable Two-Factor Authentication\r
              </Button>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>\r
    </PageLayout>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PageLayout title="Products" description="Manage your product catalog" headerContent={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    marginBottom: '1.5rem'
  }}>\r
          <Button variant="ghost" icon={<Download />}>Export</Button>\r
          <Button variant="primary" icon={<Plus />}>Add Product</Button>\r
        </div>}>\r
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
              }}>Product</th>\r
                <th style={{
                textAlign: 'left',
                padding: '0.75rem',
                fontWeight: 600
              }}>Category</th>\r
                <th style={{
                textAlign: 'right',
                padding: '0.75rem',
                fontWeight: 600
              }}>Price</th>\r
                <th style={{
                textAlign: 'right',
                padding: '0.75rem',
                fontWeight: 600
              }}>Stock</th>\r
                <th style={{
                textAlign: 'right',
                padding: '0.75rem',
                fontWeight: 600
              }}>Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr style={{
              borderBottom: '1px solid #e5e5e5'
            }}>\r
                <td style={{
                padding: '0.75rem'
              }}>Wireless Mouse</td>\r
                <td style={{
                padding: '0.75rem',
                color: '#64748b'
              }}>Electronics</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>$29.99</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>145</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>\r
                  <Button variant="ghost" size="sm">Edit</Button>\r
                </td>\r
              </tr>\r
              <tr style={{
              borderBottom: '1px solid #e5e5e5'
            }}>\r
                <td style={{
                padding: '0.75rem'
              }}>Mechanical Keyboard</td>\r
                <td style={{
                padding: '0.75rem',
                color: '#64748b'
              }}>Electronics</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>$89.99</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>67</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>\r
                  <Button variant="ghost" size="sm">Edit</Button>\r
                </td>\r
              </tr>\r
              <tr style={{
              borderBottom: '1px solid #e5e5e5'
            }}>\r
                <td style={{
                padding: '0.75rem'
              }}>USB Cable</td>\r
                <td style={{
                padding: '0.75rem',
                color: '#64748b'
              }}>Accessories</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>$12.99</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>234</td>\r
                <td style={{
                padding: '0.75rem',
                textAlign: 'right'
              }}>\r
                  <Button variant="ghost" size="sm">Edit</Button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </CardContent>\r
      </Card>\r
    </PageLayout>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PageLayout title="Create New Project" description="Fill in the details below to create a new project">\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Project Information</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>\r
            <div>\r
              <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>\r
                Project Name\r
              </label>\r
              <input type="text" placeholder="Enter project name" style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }} />\r
            </div>\r
            <div>\r
              <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>\r
                Description\r
              </label>\r
              <textarea placeholder="Enter project description" rows={4} style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'inherit'
            }} />\r
            </div>\r
            <div>\r
              <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>\r
                Category\r
              </label>\r
              <select style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}>\r
                <option>Development</option>\r
                <option>Design</option>\r
                <option>Marketing</option>\r
                <option>Research</option>\r
              </select>\r
            </div>\r
            <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'flex-end',
            marginTop: '1rem'
          }}>\r
              <Button variant="ghost">Cancel</Button>\r
              <Button variant="primary">Create Project</Button>\r
            </div>\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </PageLayout>
}`,...h.parameters?.docs?.source}}};const N=["Default","WithoutDescription","WithHeaderContent","DashboardPage","SettingsPage","DataTablePage","FormPage"];export{c as DashboardPage,p as DataTablePage,o as Default,h as FormPage,m as SettingsPage,l as WithHeaderContent,s as WithoutDescription,N as __namedExportsOrder,R as default};
