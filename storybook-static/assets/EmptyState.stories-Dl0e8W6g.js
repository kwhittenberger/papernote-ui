import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as t}from"./Button-BJE2IaNp.js";import{c as f}from"./createLucideIcon-3pObC86R.js";import{U as j}from"./users-MZKDZj6m.js";import{F as v}from"./file-text-CqM4uY6G.js";import{S}from"./search--i2Z1f9O.js";import{S as C}from"./shopping-cart-BH-wGvZz.js";import"./loader-circle-SD7GARUd.js";import"./iframe-DvQbZzpK.js";import"./preload-helper-PPVm8Dsz.js";const k=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],B=f("database",k);const I=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],N=f("inbox",I);function r({icon:a,title:w,description:b,action:s,secondaryAction:o}){return e.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-6 text-center",children:[a&&e.jsx("div",{className:"mb-6 text-ink-400",children:a}),e.jsx("h3",{className:"text-lg font-medium text-ink-900 mb-2",children:w}),e.jsx("p",{className:"text-sm text-ink-600 max-w-md mb-8",children:b}),(s||o)&&e.jsxs("div",{className:"flex items-center gap-3",children:[s&&e.jsx(t,{variant:"primary",onClick:s.onClick,children:s.label}),o&&e.jsx(t,{variant:"secondary",onClick:o.onClick,children:o.label})]})]})}try{r.displayName="EmptyState",r.__docgenInfo={description:"",displayName:"EmptyState",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"{ label: string; onClick: () => void; }"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}}}catch{}const z={title:"Feedback/EmptyState",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{minWidth:"500px",minHeight:"400px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{})})]},i={args:{title:"No items found",message:"There are no items to display at this time."}},n={args:{icon:e.jsx(N,{className:"h-12 w-12"}),title:"Your inbox is empty",message:"No new messages at this time."}},c={args:{icon:e.jsx(j,{className:"h-12 w-12"}),title:"No users yet",message:"Get started by adding your first user.",action:e.jsx(t,{variant:"primary",children:"Add User"})}},l={render:()=>e.jsx(r,{icon:e.jsx(v,{className:"h-12 w-12"}),title:"No documents",message:"You haven't created any documents yet. Create a new one or upload existing files.",action:e.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[e.jsx(t,{variant:"primary",children:"Create New"}),e.jsx(t,{variant:"outline",children:"Upload Files"})]})})},m={args:{icon:e.jsx(S,{className:"h-12 w-12"}),title:"No results found",message:"Try adjusting your search or filter to find what you're looking for."}},d={args:{icon:e.jsx(B,{className:"h-12 w-12"}),title:"No data available",message:"There is no data to display for the selected time period."}},p={render:()=>e.jsx(r,{icon:e.jsx(C,{className:"h-12 w-12"}),title:"Your cart is empty",message:"Looks like you haven't added anything to your cart yet.",action:e.jsx(t,{variant:"primary",children:"Continue Shopping"})})},u={render:()=>e.jsx(r,{icon:e.jsx(v,{className:"h-12 w-12"}),title:"No projects yet",message:"Projects help you organize your work and collaborate with team members.",action:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Create Your First Project"}),e.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#3b82f6",textDecoration:"none"},children:"Learn more about projects →"})]})})},y={render:()=>e.jsx(r,{icon:e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",backgroundColor:"#fef2f2",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:"2rem"},children:"⚠️"})}),title:"Something went wrong",message:"We encountered an error while loading your data. Please try again.",action:e.jsx(t,{variant:"primary",children:"Retry"})})},h={args:{title:"No notifications",message:"You're all caught up!"}},g={render:()=>e.jsxs("div",{style:{width:"600px",border:"1px solid #e5e5e5",borderRadius:"0.5rem",padding:"2rem"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem",paddingBottom:"1rem",borderBottom:"1px solid #e5e5e5"},children:"Recent Activity"}),e.jsx(r,{icon:e.jsx(N,{className:"h-10 w-10"}),title:"No recent activity",message:"Your recent activity will appear here."})]})},x={render:()=>e.jsx("div",{style:{width:"100vw",height:"500px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fafaf9"},children:e.jsx(r,{icon:e.jsx(j,{className:"h-16 w-16"}),title:"Welcome to Your Dashboard",message:"Get started by inviting team members or creating your first project.",action:e.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[e.jsx(t,{variant:"primary",children:"Invite Team"}),e.jsx(t,{variant:"outline",children:"Create Project"})]})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    message: 'There are no items to display at this time.'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox className="h-12 w-12" />,
    title: 'Your inbox is empty',
    message: 'No new messages at this time.'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Users className="h-12 w-12" />,
    title: 'No users yet',
    message: 'Get started by adding your first user.',
    action: <Button variant="primary">Add User</Button>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<FileText className="h-12 w-12" />} title="No documents" message="You haven't created any documents yet. Create a new one or upload existing files." action={<div style={{
    display: 'flex',
    gap: '0.75rem'
  }}>\r
          <Button variant="primary">Create New</Button>\r
          <Button variant="outline">Upload Files</Button>\r
        </div>} />
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search className="h-12 w-12" />,
    title: 'No results found',
    message: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Database className="h-12 w-12" />,
    title: 'No data available',
    message: 'There is no data to display for the selected time period.'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<ShoppingCart className="h-12 w-12" />} title="Your cart is empty" message="Looks like you haven't added anything to your cart yet." action={<Button variant="primary">Continue Shopping</Button>} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<FileText className="h-12 w-12" />} title="No projects yet" message="Projects help you organize your work and collaborate with team members." action={<div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
          <Button variant="primary">Create Your First Project</Button>\r
          <a href="#" style={{
      fontSize: '0.875rem',
      color: '#3b82f6',
      textDecoration: 'none'
    }}>\r
            Learn more about projects →\r
          </a>\r
        </div>} />
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<div style={{
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#fef2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>\r
          <span style={{
      fontSize: '2rem'
    }}>⚠️</span>\r
        </div>} title="Something went wrong" message="We encountered an error while loading your data. Please try again." action={<Button variant="primary">Retry</Button>} />
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No notifications',
    message: 'You\\'re all caught up!'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px',
    border: '1px solid #e5e5e5',
    borderRadius: '0.5rem',
    padding: '2rem'
  }}>\r
      <h2 style={{
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #e5e5e5'
    }}>\r
        Recent Activity\r
      </h2>\r
      <EmptyState icon={<Inbox className="h-10 w-10" />} title="No recent activity" message="Your recent activity will appear here." />\r
    </div>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100vw',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafaf9'
  }}>\r
      <EmptyState icon={<Users className="h-16 w-16" />} title="Welcome to Your Dashboard" message="Get started by inviting team members or creating your first project." action={<div style={{
      display: 'flex',
      gap: '0.75rem'
    }}>\r
            <Button variant="primary">Invite Team</Button>\r
            <Button variant="outline">Create Project</Button>\r
          </div>} />\r
    </div>
}`,...x.parameters?.docs?.source}}};const U=["Default","WithIcon","WithAction","WithMultipleActions","SearchResults","NoData","EmptyCart","WithDescription","ErrorState","MinimalStyle","InCard","FullPage"];export{i as Default,p as EmptyCart,y as ErrorState,x as FullPage,g as InCard,h as MinimalStyle,d as NoData,m as SearchResults,c as WithAction,u as WithDescription,n as WithIcon,l as WithMultipleActions,U as __namedExportsOrder,z as default};
