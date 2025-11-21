import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as C}from"./Page-CERVxTsj.js";import{L as v}from"./Layout-FpYHqBd0.js";import{S}from"./Sidebar-BU4wOFSE.js";import{S as w}from"./StatusBar-yobMxkVk.js";import{C as r,c as t,a as i,b as n}from"./Card-CGMN0C8f.js";import{B as o}from"./Button-BJE2IaNp.js";import{S as u}from"./settings-ByrlyAD8.js";import{D as z}from"./download-BjjOYaMt.js";import{P as B}from"./plus-gHVaozHf.js";import{H as P}from"./house-CC-YVKvU.js";import{U as T}from"./users-MZKDZj6m.js";import{F as A}from"./file-text-CqM4uY6G.js";import"./iframe-DvQbZzpK.js";import"./preload-helper-PPVm8Dsz.js";import"./chevron-down-7ZmIJCPf.js";import"./createLucideIcon-3pObC86R.js";import"./chevron-right-BK-OvBUp.js";import"./x-BiwQ2MVM.js";import"./info-GvptUnvn.js";import"./triangle-alert-DGhJUaw7.js";import"./circle-alert-B4-cbJhD.js";import"./circle-check-big-Cfkz3KRK.js";import"./Loading-BkmG9eFC.js";import"./loader-circle-SD7GARUd.js";function s({title:a,description:d,children:f,className:b="",headerContent:j}){return e.jsxs(C,{children:[j,e.jsxs("div",{className:`p-6 max-w-7xl mx-auto pb-20 ${b}`,children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-ink-900 mb-2",children:a}),d&&e.jsx("p",{className:"text-ink-600",children:d})]}),f]})]})}try{s.displayName="PageLayout",s.__docgenInfo={description:`PageLayout - Standard page layout with title, description, and content

A high-level layout component that provides consistent page structure across your application.
Wraps content in the Page component to include notebook styling (paper texture, ruled lines,
red margin line).

**Note**: PageLayout does NOT include the sidebar or gutter. For a complete app layout with
sidebar and gutter navigation, use the Layout component instead and wrap this inside it.

**Component Hierarchy**:
- **Page** - Just paper with notebook styling (lowest level)
- **PageLayout** - Page + title + description (this component)
- **Layout** - Sidebar + gutter + content area (includes PageLayout or Page inside)`,displayName:"PageLayout",props:{title:{defaultValue:null,description:"Page title displayed at the top",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Optional subtitle/description text below the title",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Main page content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the content wrapper",name:"className",required:!1,type:{name:"string"}},headerContent:{defaultValue:null,description:"Optional content to render before the title (e.g., breadcrumbs, alerts, control bars)",name:"headerContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={title:"Layout/PageLayout",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},l={args:{title:"Page Title",description:"This is a standard page layout with notebook styling - notice the red margin line on the left, subtle ruled lines, and paper texture",children:e.jsxs("div",{children:[e.jsx(r,{style:{marginBottom:"1.5rem",backgroundColor:"#eff6ff",border:"1px solid #3b82f6"},children:e.jsxs(t,{children:[e.jsx("h3",{style:{fontWeight:600,marginBottom:"0.75rem",fontSize:"0.875rem",color:"#1e40af"},children:"ℹ️ Note: No Sidebar or Gutter Here"}),e.jsxs("p",{style:{fontSize:"0.875rem",marginBottom:"0.5rem"},children:["PageLayout shows just the paper content with title/description. For the complete app layout with ",e.jsx("strong",{children:"sidebar and gutter navigation"}),', see the "With Sidebar And Gutter" story below or check out the ',e.jsx("strong",{children:"Layout"})," component stories."]})]})}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Content Section"})}),e.jsxs(t,{children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"Your page content goes here with consistent structure across the application. The PageLayout component wraps content in the Page component, which provides:"}),e.jsxs("ul",{style:{marginLeft:"1.5rem",marginBottom:"1rem"},children:[e.jsx("li",{children:"• Subtle paper texture background"}),e.jsx("li",{children:"• Red margin line on the left (look closely!)"}),e.jsx("li",{children:"• Ruled lines for that notebook feel"}),e.jsx("li",{children:"• Proper padding and max-width constraints"}),e.jsx("li",{children:"• Shadow and border for depth"})]}),e.jsx("p",{children:"Scroll down to see more content and experience the full notebook aesthetic."})]})]}),e.jsxs(r,{style:{marginTop:"1.5rem"},children:[e.jsx(i,{children:e.jsx(n,{children:"Another Section"})}),e.jsx(t,{children:e.jsx("p",{children:"Add multiple sections to your page. The ruled lines and paper texture continue throughout."})})]})]})}},c={args:{title:"Simple Page",children:e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Page without a description, just the title."})})})}},m={args:{title:"Page with Header Actions",description:"This page has custom header content above the title",headerContent:e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.5rem",marginBottom:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Control Bar / Breadcrumbs can go here"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(o,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(o,{variant:"primary",size:"sm",children:"Save"})]})]}),children:e.jsx(r,{children:e.jsx(t,{children:e.jsx("p",{children:"Page content with header controls above."})})})}},p={render:()=>e.jsxs(s,{title:"Dashboard",description:"Overview of your application metrics and data",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Total Users"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#3b82f6"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 12% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Revenue"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#10b981"},children:"$45,678"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 8% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Active Orders"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#f59e0b"},children:"89"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.5rem"},children:"Pending fulfillment"})]})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Recent Activity"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"New user registration"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"2 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"Order #1234 completed"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"15 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Payment received"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"1 hour ago"})]})]})})]})]})},h={render:()=>e.jsx(s,{title:"Settings",description:"Manage your account preferences and application settings",headerContent:e.jsx("div",{style:{padding:"0.75rem 1rem",backgroundColor:"#fef3c7",border:"1px solid #fbbf24",borderRadius:"0.375rem",fontSize:"0.875rem",color:"#92400e",marginBottom:"1.5rem"},children:"Changes will be saved automatically"}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Profile Information"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Full Name"}),e.jsx("input",{type:"text",defaultValue:"John Doe",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Email Address"}),e.jsx("input",{type:"email",defaultValue:"john@example.com",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]})]})})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Preferences"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Enable email notifications"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Enable dark mode"})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{style:{fontSize:"0.875rem"},children:"Show usage statistics"})]})]})})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Security"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{variant:"primary",size:"sm",icon:e.jsx(u,{}),children:"Change Password"}),e.jsx(o,{variant:"ghost",size:"sm",children:"Enable Two-Factor Authentication"})]})})]})]})})},g={render:()=>e.jsx(s,{title:"Products",description:"Manage your product catalog",headerContent:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginBottom:"1.5rem"},children:[e.jsx(o,{variant:"ghost",icon:e.jsx(z,{}),children:"Export"}),e.jsx(o,{variant:"primary",icon:e.jsx(B,{}),children:"Add Product"})]}),children:e.jsx(r,{children:e.jsx(t,{children:e.jsxs("table",{style:{width:"100%",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e5e5e5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Product"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Category"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Price"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Stock"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Actions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"Wireless Mouse"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Electronics"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$29.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"145"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(o,{variant:"ghost",size:"sm",children:"Edit"})})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"Mechanical Keyboard"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Electronics"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$89.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"67"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(o,{variant:"ghost",size:"sm",children:"Edit"})})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"USB Cable"}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:"Accessories"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"$12.99"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:"234"}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx(o,{variant:"ghost",size:"sm",children:"Edit"})})]})]})]})})})})},y={render:()=>e.jsx(s,{title:"Create New Project",description:"Fill in the details below to create a new project",children:e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Project Information"})}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Project Name"}),e.jsx("input",{type:"text",placeholder:"Enter project name",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Description"}),e.jsx("textarea",{placeholder:"Enter project description",rows:4,style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem",fontFamily:"inherit"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Category"}),e.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"},children:[e.jsx("option",{children:"Development"}),e.jsx("option",{children:"Design"}),e.jsx("option",{children:"Marketing"}),e.jsx("option",{children:"Research"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end",marginTop:"1rem"},children:[e.jsx(o,{variant:"ghost",children:"Cancel"}),e.jsx(o,{variant:"primary",children:"Create Project"})]})]})})]})})},x={render:()=>{const a=[{id:"dashboard",label:"Dashboard",icon:e.jsx(P,{className:"h-5 w-5"}),href:"#dashboard"},{id:"users",label:"Users",icon:e.jsx(T,{className:"h-5 w-5"}),href:"#users"},{id:"documents",label:"Documents",icon:e.jsx(A,{className:"h-5 w-5"}),href:"#documents"},{id:"settings",label:"Settings",icon:e.jsx(u,{className:"h-5 w-5"}),href:"#settings"}],d=[{id:"overview",label:"Overview"},{id:"metrics",label:"Metrics"},{id:"activity",label:"Activity"}];return e.jsx(v,{sidebar:e.jsx(S,{items:a,currentPath:"#dashboard"}),statusBar:e.jsx(w,{}),sections:d,children:e.jsxs(s,{title:"Dashboard with Complete Layout",description:"This shows PageLayout inside Layout - notice the sidebar on the left and the GUTTER with navigation dots between sidebar and content",children:[e.jsx("section",{id:"overview",children:e.jsx(r,{style:{marginBottom:"1.5rem",backgroundColor:"#d1fae5",border:"1px solid #10b981"},children:e.jsxs(t,{children:[e.jsx("h3",{style:{fontWeight:600,marginBottom:"0.75rem",fontSize:"0.875rem",color:"#065f46"},children:"✅ Complete Layout with Sidebar & Gutter Navigation Dots"}),e.jsxs("p",{style:{fontSize:"0.875rem",marginBottom:"0.5rem"},children:["Now you can see the ",e.jsx("strong",{children:"gutter"})," (the narrow space between the sidebar and content) with",e.jsx("strong",{children:" navigation dots"}),"! The dots track which section is visible as you scroll."]}),e.jsx("p",{style:{fontSize:"0.875rem"},children:"Scroll down to see the dots change as you move between Overview, Metrics, and Activity sections."})]})})}),e.jsxs("section",{id:"metrics",style:{minHeight:"600px",paddingTop:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"Metrics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},children:[e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Total Users"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#3b82f6"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 12% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Revenue"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#10b981"},children:"$45,678"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 8% from last month"})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(n,{children:"Active Orders"})}),e.jsxs(t,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#f59e0b"},children:"89"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.5rem"},children:"Pending fulfillment"})]})]})]})]}),e.jsxs("section",{id:"activity",style:{minHeight:"600px",paddingTop:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"Recent Activity"}),e.jsx(r,{children:e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"New user registration"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"2 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{children:"Order #1234 completed"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"15 minutes ago"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Payment received"}),e.jsx("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"1 hour ago"})]})]})})})]})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    description: 'This is a standard page layout with notebook styling - notice the red margin line on the left, subtle ruled lines, and paper texture',
    children: <div>\r
        <Card style={{
        marginBottom: '1.5rem',
        backgroundColor: '#eff6ff',
        border: '1px solid #3b82f6'
      }}>\r
          <CardContent>\r
            <h3 style={{
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontSize: '0.875rem',
            color: '#1e40af'
          }}>\r
              ℹ️ Note: No Sidebar or Gutter Here\r
            </h3>\r
            <p style={{
            fontSize: '0.875rem',
            marginBottom: '0.5rem'
          }}>\r
              PageLayout shows just the paper content with title/description. For the complete app layout\r
              with <strong>sidebar and gutter navigation</strong>, see the "With Sidebar And Gutter" story below\r
              or check out the <strong>Layout</strong> component stories.\r
            </p>\r
          </CardContent>\r
        </Card>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Content Section</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <p style={{
            marginBottom: '1rem'
          }}>\r
              Your page content goes here with consistent structure across the application.\r
              The PageLayout component wraps content in the Page component, which provides:\r
            </p>\r
            <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1rem'
          }}>\r
              <li>• Subtle paper texture background</li>\r
              <li>• Red margin line on the left (look closely!)</li>\r
              <li>• Ruled lines for that notebook feel</li>\r
              <li>• Proper padding and max-width constraints</li>\r
              <li>• Shadow and border for depth</li>\r
            </ul>\r
            <p>Scroll down to see more content and experience the full notebook aesthetic.</p>\r
          </CardContent>\r
        </Card>\r
\r
        {/* Additional content to show scrolling */}\r
        <Card style={{
        marginTop: '1.5rem'
      }}>\r
          <CardHeader>\r
            <CardTitle>Another Section</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <p>Add multiple sections to your page. The ruled lines and paper texture continue throughout.</p>\r
          </CardContent>\r
        </Card>\r
      </div>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page',
    children: <Card>\r
        <CardContent>\r
          <p>Page without a description, just the title.</p>\r
        </CardContent>\r
      </Card>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebarItems = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      href: '#dashboard'
    }, {
      id: 'users',
      label: 'Users',
      icon: <Users className="h-5 w-5" />,
      href: '#users'
    }, {
      id: 'documents',
      label: 'Documents',
      icon: <FileText className="h-5 w-5" />,
      href: '#documents'
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '#settings'
    }];
    const sections = [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'metrics',
      label: 'Metrics'
    }, {
      id: 'activity',
      label: 'Activity'
    }];
    return <Layout sidebar={<Sidebar items={sidebarItems} currentPath="#dashboard" />} statusBar={<StatusBar />} sections={sections}>\r
        <PageLayout title="Dashboard with Complete Layout" description="This shows PageLayout inside Layout - notice the sidebar on the left and the GUTTER with navigation dots between sidebar and content">\r
          <section id="overview">\r
            <Card style={{
            marginBottom: '1.5rem',
            backgroundColor: '#d1fae5',
            border: '1px solid #10b981'
          }}>\r
              <CardContent>\r
                <h3 style={{
                fontWeight: 600,
                marginBottom: '0.75rem',
                fontSize: '0.875rem',
                color: '#065f46'
              }}>\r
                  ✅ Complete Layout with Sidebar & Gutter Navigation Dots\r
                </h3>\r
                <p style={{
                fontSize: '0.875rem',
                marginBottom: '0.5rem'
              }}>\r
                  Now you can see the <strong>gutter</strong> (the narrow space between the sidebar and content) with\r
                  <strong> navigation dots</strong>! The dots track which section is visible as you scroll.\r
                </p>\r
                <p style={{
                fontSize: '0.875rem'
              }}>\r
                  Scroll down to see the dots change as you move between Overview, Metrics, and Activity sections.\r
                </p>\r
              </CardContent>\r
            </Card>\r
          </section>\r
\r
          <section id="metrics" style={{
          minHeight: '600px',
          paddingTop: '2rem'
        }}>\r
            <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>Metrics</h2>\r
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
                  fontSize: '2rem',
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
                  fontSize: '2rem',
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
          </section>\r
\r
          <section id="activity" style={{
          minHeight: '600px',
          paddingTop: '2rem'
        }}>\r
            <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>Recent Activity</h2>\r
            <Card>\r
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
          </section>\r
        </PageLayout>\r
      </Layout>;
  }
}`,...x.parameters?.docs?.source}}};const te=["Default","WithoutDescription","WithHeaderContent","DashboardPage","SettingsPage","DataTablePage","FormPage","WithSidebarAndGutter"];export{p as DashboardPage,g as DataTablePage,l as Default,y as FormPage,h as SettingsPage,m as WithHeaderContent,x as WithSidebarAndGutter,c as WithoutDescription,te as __namedExportsOrder,re as default};
