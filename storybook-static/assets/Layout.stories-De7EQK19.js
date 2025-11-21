import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-B3mi8TDU.js";import{S as v,C as E}from"./Sidebar-z6NIEbDe.js";import{S as j}from"./StatusBar-Cj40kkJ0.js";import{P as y}from"./Page-B8tQoYsh.js";import{C as o,a as c,b as m,c as n}from"./Card-V4ULwnz8.js";import{H as _}from"./house-UB0XVjnU.js";import{U as O}from"./users-Cf8d8kZw.js";import{S as q}from"./shopping-cart-BVyJoVJJ.js";import{M as U}from"./mail-BzLSQpq_.js";import{C as $}from"./calendar-DHDubL4x.js";import{F as V}from"./file-text-Cc9WN1ty.js";import{S as J}from"./settings-CtLpOA8O.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BHecmdze.js";import"./chevron-down-LubKkaQ-.js";import"./chevron-right-DKoQFceh.js";import"./x-Cnr4OZhu.js";import"./info-QZIFEd9F.js";import"./triangle-alert-FS4IY-Fg.js";import"./circle-alert-B6UEkZ9R.js";import"./circle-check-big-BJiZfPxt.js";import"./Loading-CTK03LK2.js";import"./loader-circle-6oQ-4-QJ.js";const P=({className:s="",sections:t})=>{const[r,C]=h.useState([]),[S,u]=h.useState(""),p=t&&t.length>0?t:r;console.log("🎯 PageNavigation render:",{externalSections:t||"none",externalSectionsLength:t?.length||0,detectedSections:r||"none",detectedSectionsLength:r.length,sections:p||"none",sectionsLength:p.length}),h.useEffect(()=>{if(t!==void 0)return;const i=()=>{const d=document.querySelectorAll('[id^="section-"], [data-section]'),l=[];d.forEach(f=>{const b=f.id||f.getAttribute("data-section")||"",T=f.getAttribute("aria-label")||f.getAttribute("data-label")||b;b&&l.push({id:b,label:T})}),C(l),l.length>0&&u(l[0].id)};i();const a=new MutationObserver(i);return a.observe(document.body,{childList:!0,subtree:!0}),()=>a.disconnect()},[t]),h.useEffect(()=>{if(t&&t.length>0){t.length>0&&u(t[0].id);return}const i=()=>document.querySelector(".flex-1.overflow-auto")||null,a=()=>{const l=i();if(!l)return;const f=l.scrollTop,b=l.scrollHeight,T=l.clientHeight,D=l.getBoundingClientRect().top;if(f+T>=b-100&&p.length>0){u(p[p.length-1].id);return}for(const N of p){const L=document.getElementById(N.id)||document.querySelector(`[data-section="${N.id}"]`);if(L){const k=L.getBoundingClientRect(),R=k.top-D,M=R+k.height;if(R<=200&&M>200){u(N.id);break}}}},d=i();if(d)return d.addEventListener("scroll",a),a(),()=>d.removeEventListener("scroll",a)},[p]);const H=i=>{if(t&&t.length>0){const d=document.querySelector('iframe[title="Conductor Admin"]');d&&d.contentWindow&&d.contentWindow.postMessage({type:"SCROLL_TO_SECTION",sectionId:i},"*"),u(i);return}const a=document.getElementById(i)||document.querySelector(`[data-section="${i}"]`);if(a){const d=document.querySelector(".flex-1.overflow-auto");if(d){const l=a.offsetTop-d.offsetTop;d.scrollTo({top:l-100,behavior:"smooth"})}else a.scrollIntoView({behavior:"smooth",block:"start"});u(i)}};return p.length===0?null:e.jsx("nav",{className:`page-nav ${s}`,"aria-label":"Page sections",children:e.jsx("div",{className:"page-nav-dots",children:p.map(i=>e.jsx("div",{className:`page-nav-dot ${S===i.id?"active":""}`,role:"button",tabIndex:0,"aria-label":i.label,title:i.label,onClick:()=>H(i.id),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),H(i.id))}},i.id))})})};try{P.displayName="PageNavigation",P.__docgenInfo={description:"",displayName:"PageNavigation",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},sections:{defaultValue:null,description:"External sections to display (overrides auto-detection)",name:"sections",required:!1,type:{name:"Section[]"}}}}}catch{}const g=({sidebar:s,children:t,statusBar:r,className:C="",sections:S})=>(console.log("🏗️ Layout render with sections:",S),e.jsxs("div",{className:`h-screen flex flex-col bg-paper-100 ${C}`,children:[e.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[s,e.jsx("div",{className:"w-8 h-full bg-paper-100 flex-shrink-0 relative flex items-center justify-center",children:e.jsx(P,{sections:S})}),e.jsx("div",{className:"flex-1 overflow-auto",children:t})]}),r]}));try{g.displayName="Layout",g.__docgenInfo={description:`Complete app layout component that enforces notebook-style structure:
- Sidebar on the left (256px wide, flex-shrink-0)
- Gutter area between sidebar and content (64px wide) with page navigation dots
- Content area that scrolls independently
- Optional status bar at the bottom

This component handles all layout concerns using flexbox.`,displayName:"Layout",props:{sidebar:{defaultValue:null,description:"Sidebar content (usually the Sidebar component)",name:"sidebar",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Main page content",name:"children",required:!0,type:{name:"ReactNode"}},statusBar:{defaultValue:null,description:"Status bar component (optional)",name:"statusBar",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom className for the layout container",name:"className",required:!1,type:{name:"string"}},sections:{defaultValue:null,description:"External sections for PageNavigation (e.g., from iframe PostMessage)",name:"sections",required:!1,type:{name:"Section[]"}}}}}catch{}const ye={title:"Layout/Layout",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"]},x=[{id:"dashboard",label:"Dashboard",icon:e.jsx(_,{className:"h-5 w-5"}),href:"#dashboard"},{id:"users",label:"Users",icon:e.jsx(O,{className:"h-5 w-5"}),href:"#users"},{id:"products",label:"Products",icon:e.jsx(q,{className:"h-5 w-5"}),href:"#products"},{id:"reports",label:"Reports",icon:e.jsx(E,{className:"h-5 w-5"}),href:"#reports"},{id:"messages",label:"Messages",icon:e.jsx(U,{className:"h-5 w-5"}),href:"#messages",badge:5},{id:"calendar",label:"Calendar",icon:e.jsx($,{className:"h-5 w-5"}),href:"#calendar"},{id:"documents",label:"Documents",icon:e.jsx(V,{className:"h-5 w-5"}),href:"#documents"},{id:"settings",label:"Settings",icon:e.jsx(J,{className:"h-5 w-5"}),href:"#settings"}],I={render:()=>{const[s,t]=h.useState("dashboard");return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"My Application"}),statusBar:e.jsx(j,{}),children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Complete Layout"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"This layout includes sidebar, gutter with page navigation, main content, and status bar"}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Content Area"})}),e.jsx(n,{children:e.jsx("p",{children:"Your page content scrolls independently from the sidebar"})})]})]})})})}},B={render:()=>{const[s,t]=h.useState("dashboard");return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"My Application"}),children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Layout Without Status Bar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Clean layout without the bottom status bar"}),e.jsx(o,{children:e.jsx(n,{children:e.jsx("p",{children:"Content extends to the bottom without status bar spacing"})})})]})})})}},A={render:()=>{const[s,t]=h.useState("dashboard"),r=[{id:"overview",label:"Overview"},{id:"stats",label:"Statistics"},{id:"activity",label:"Recent Activity"},{id:"settings",label:"Settings"}];return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"My Application"}),statusBar:e.jsx(j,{}),sections:r,children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("section",{id:"overview",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Overview"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Page navigation dots appear in the gutter area"}),e.jsx(o,{children:e.jsx(n,{children:e.jsx("p",{children:"Scroll down to see page navigation in action"})})})]}),e.jsxs("section",{id:"stats",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Statistics"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},children:[e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Total Users"})}),e.jsx(n,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"1,234"})})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Revenue"})}),e.jsx(n,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"$45,678"})})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Orders"})}),e.jsx(n,{children:e.jsx("div",{style:{fontSize:"2rem",fontWeight:700},children:"567"})})]})]})]}),e.jsxs("section",{id:"activity",style:{marginBottom:"4rem",minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Recent Activity"}),e.jsx(o,{children:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{children:"New user registration - 2 minutes ago"}),e.jsx("div",{children:"Order #1234 completed - 15 minutes ago"}),e.jsx("div",{children:"Payment received - 1 hour ago"})]})})})]}),e.jsxs("section",{id:"settings",style:{minHeight:"600px"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Settings"}),e.jsx(o,{children:e.jsx(n,{children:e.jsx("p",{children:"Configuration options"})})})]})]})})})}},z={render:()=>{const[s,t]=h.useState("dashboard");return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"Analytics Dashboard"}),statusBar:e.jsx(j,{}),children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Dashboard"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Welcome back! Here's what's happening today."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1.5rem",marginBottom:"2rem"},children:[e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Total Revenue"})}),e.jsxs(n,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#10b981"},children:"$45,231"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 20.1% from last month"})]})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Subscriptions"})}),e.jsxs(n,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#3b82f6"},children:"+2,350"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 180.1% from last month"})]})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Sales"})}),e.jsxs(n,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#8b5cf6"},children:"+12,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 19% from last month"})]})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Active Now"})}),e.jsxs(n,{children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:700,color:"#f59e0b"},children:"+573"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#10b981",marginTop:"0.5rem"},children:"↑ 201 since last hour"})]})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"1.5rem"},children:[e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Recent Sales"})}),e.jsx(n,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[1,2,3,4,5].map(r=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:500},children:["Order #",1e3+r]}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Customer ",r]})]}),e.jsxs("div",{style:{fontWeight:600},children:["+$",(Math.random()*1e3).toFixed(2)]})]},r))})})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(m,{children:"Top Products"})}),e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product A"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"234 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product B"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"189 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product C"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"156 sales"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Product D"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"142 sales"})]})]})})]})]})]})})})}},W={render:()=>{const[s,t]=h.useState("dashboard");return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"My Application",defaultCollapsed:!0}),statusBar:e.jsx(j,{}),children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Collapsed Sidebar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"The sidebar starts in collapsed state showing only icons"}),e.jsx(o,{children:e.jsx(n,{children:e.jsx("p",{children:"More horizontal space for content when sidebar is collapsed"})})})]})})})}},w={render:()=>{const[s,t]=h.useState("users");return e.jsx(g,{sidebar:e.jsx(v,{menuItems:x,activeItem:s,onItemClick:t,title:"Admin Panel"}),statusBar:e.jsx(j,{}),children:e.jsx(y,{children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Users"}),e.jsx("p",{style:{color:"#64748b"},children:"Manage user accounts and permissions"})]}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontSize:"0.875rem",fontWeight:500},children:"Add User"})]}),e.jsx(o,{children:e.jsx(n,{children:e.jsxs("table",{style:{width:"100%",fontSize:"0.875rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #e5e5e5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Name"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Email"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Role"}),e.jsx("th",{style:{textAlign:"left",padding:"0.75rem",fontWeight:600},children:"Status"}),e.jsx("th",{style:{textAlign:"right",padding:"0.75rem",fontWeight:600},children:"Actions"})]})}),e.jsx("tbody",{children:[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"Inactive"}].map((r,C)=>e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:r.name}),e.jsx("td",{style:{padding:"0.75rem",color:"#64748b"},children:r.email}),e.jsx("td",{style:{padding:"0.75rem"},children:r.role}),e.jsx("td",{style:{padding:"0.75rem"},children:e.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",backgroundColor:r.status==="Active"?"#d1fae5":"#fee2e2",color:r.status==="Active"?"#065f46":"#991b1b"},children:r.status})}),e.jsx("td",{style:{padding:"0.75rem",textAlign:"right"},children:e.jsx("button",{style:{padding:"0.25rem 0.75rem",backgroundColor:"transparent",border:"1px solid #e5e5e5",borderRadius:"0.25rem",cursor:"pointer",fontSize:"0.75rem"},children:"Edit"})})]},C))})]})})})]})})})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="My Application" />} statusBar={<StatusBar />}>\r
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="My Application" />}>\r
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
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="My Application" />} statusBar={<StatusBar />} sections={sections}>\r
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
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="Analytics Dashboard" />} statusBar={<StatusBar />}>\r
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
}`,...z.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="My Application" defaultCollapsed />} statusBar={<StatusBar />}>\r
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
}`,...W.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('users');
    return <Layout sidebar={<Sidebar menuItems={menuItems} activeItem={activeItem} onItemClick={setActiveItem} title="Admin Panel" />} statusBar={<StatusBar />}>\r
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
}`,...w.parameters?.docs?.source}}};const xe=["Default","WithoutStatusBar","WithPageSections","DashboardLayout","CollapsedSidebar","UserManagementApp"];export{W as CollapsedSidebar,z as DashboardLayout,I as Default,w as UserManagementApp,A as WithPageSections,B as WithoutStatusBar,xe as __namedExportsOrder,ye as default};
