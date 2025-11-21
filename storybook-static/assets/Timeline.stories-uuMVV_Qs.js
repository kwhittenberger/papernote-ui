import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as B}from"./createLucideIcon-BYzyF8e7.js";import{C as d}from"./circle-check-big-DdjzQym0.js";import{C as T}from"./clock-BhSPvaTC.js";import{C as V}from"./circle-alert-BpeGvsHD.js";import{S as W}from"./shopping-cart-CymxgMf0.js";import{H as _}from"./house-DYsr-2nT.js";import"./iframe-BKwLVrTx.js";import"./preload-helper-PPVm8Dsz.js";const q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],H=B("circle",q);const M=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],R=B("package",M);const J=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],O=B("truck",J);function o({items:i,orientation:r="vertical",position:z="right",showLine:P=!0,dotSize:s="md",formatTimestamp:L=c=>(typeof c=="string"?new Date(c):c).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),onItemClick:p,className:A=""}){const c={primary:"bg-primary-500 text-white",success:"bg-success-500 text-white",warning:"bg-warning-500 text-white",error:"bg-error-500 text-white",accent:"bg-accent-500 text-white",ink:"bg-ink-500 text-white"},u={primary:"bg-primary-200",success:"bg-success-200",warning:"bg-warning-200",error:"bg-error-200",accent:"bg-accent-200",ink:"bg-ink-200"},n={sm:{dot:"h-6 w-6",icon:"h-3 w-3",line:r==="vertical"?"w-0.5":"h-0.5"},md:{dot:"h-8 w-8",icon:"h-4 w-4",line:r==="vertical"?"w-0.5":"h-0.5"},lg:{dot:"h-10 w-10",icon:"h-5 w-5",line:r==="vertical"?"w-1":"h-1"}};return r==="vertical"?e.jsx("div",{className:`relative ${A}`,children:i.map((t,l)=>{const I=l===i.length-1,m=z==="alternate"?l%2===0?"right":"left":z,$=t.color||"primary";return e.jsxs("div",{className:`relative flex gap-4 ${m==="left"?"flex-row-reverse text-right":""} ${l!==0?"mt-6":""}`,children:[e.jsxs("div",{className:"relative flex flex-col items-center flex-shrink-0",children:[e.jsx("div",{className:`
                    ${n[s].dot}
                    rounded-full ${c[$]}
                    flex items-center justify-center
                    border-4 border-white shadow-sm
                    z-10
                  `,children:t.icon?e.jsx("span",{className:n[s].icon,children:t.icon}):e.jsx(H,{className:`${n[s].icon} fill-current`})}),P&&!I&&e.jsx("div",{className:`
                      ${n[s].line}
                      flex-1 mt-2 ${u[$]}
                      min-h-[40px]
                    `})]}),e.jsx("div",{className:`
                  flex-1 pb-6
                  ${p?"cursor-pointer":""}
                `,onClick:()=>p?.(t),children:e.jsxs("div",{className:"bg-white rounded-lg border border-paper-200 p-4 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("div",{className:"text-xs text-ink-500 font-medium mb-1",children:L(t.timestamp)}),e.jsx("h3",{className:"text-base font-semibold text-ink-900 mb-1",children:t.title}),t.description&&e.jsx("p",{className:"text-sm text-ink-600 mb-2",children:t.description}),t.content&&e.jsx("div",{className:"mt-3",children:t.content})]})})]},t.id)})}):e.jsx("div",{className:`relative ${A}`,children:e.jsx("div",{className:"flex items-start gap-6 overflow-x-auto pb-4",children:i.map((t,l)=>{const I=l===i.length-1,m=t.color||"primary";return e.jsxs("div",{className:"relative flex flex-col items-center flex-shrink-0 min-w-[200px]",children:[e.jsx("div",{className:`
                  w-full mb-4
                  ${p?"cursor-pointer":""}
                `,onClick:()=>p?.(t),children:e.jsxs("div",{className:"bg-white rounded-lg border border-paper-200 p-4 shadow-sm hover:shadow-md transition-shadow",children:[e.jsx("div",{className:"text-xs text-ink-500 font-medium mb-1",children:L(t.timestamp)}),e.jsx("h3",{className:"text-sm font-semibold text-ink-900 mb-1",children:t.title}),t.description&&e.jsx("p",{className:"text-xs text-ink-600 mb-2",children:t.description}),t.content&&e.jsx("div",{className:"mt-2",children:t.content})]})}),e.jsxs("div",{className:"relative flex items-center w-full",children:[P&&l!==0&&e.jsx("div",{className:`
                      flex-1 ${n[s].line}
                      ${u[m]}
                    `}),e.jsx("div",{className:`
                    ${n[s].dot}
                    rounded-full ${c[m]}
                    flex items-center justify-center
                    border-4 border-white shadow-sm
                    flex-shrink-0
                    z-10
                  `,children:t.icon?e.jsx("span",{className:n[s].icon,children:t.icon}):e.jsx(H,{className:`${n[s].icon} fill-current`})}),P&&!I&&e.jsx("div",{className:`
                      flex-1 ${n[s].line}
                      ${u[m]}
                    `})]})]},t.id)})})})}try{o.displayName="Timeline",o.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"Timeline items to display",name:"items",required:!0,type:{name:"TimelineItem[]"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation of timeline",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},position:{defaultValue:{value:"right"},description:"Position of content relative to timeline",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"alternate"'}]}},showLine:{defaultValue:{value:"true"},description:"Show connecting line between items",name:"showLine",required:!1,type:{name:"boolean"}},dotSize:{defaultValue:{value:"md"},description:"Size of timeline dots/icons",name:"dotSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},formatTimestamp:{defaultValue:{value:`(timestamp) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }`},description:"Format timestamp display",name:"formatTimestamp",required:!1,type:{name:"((timestamp: string | Date) => string)"}},onItemClick:{defaultValue:null,description:"Callback when item is clicked",name:"onItemClick",required:!1,type:{name:"((item: TimelineItem) => void)"}},className:{defaultValue:{value:""},description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Display/Timeline",component:o,parameters:{layout:"padded"},tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{padding:"2rem",minHeight:"400px"},children:e.jsx(i,{})})]},a=[{id:"1",title:"Event 1",description:"First event description",timestamp:new Date(2025,10,15,10,30),color:"success"},{id:"2",title:"Event 2",description:"Second event description",timestamp:new Date(2025,10,15,14,15),color:"primary"},{id:"3",title:"Event 3",description:"Third event description",timestamp:new Date(2025,10,15,16,45),color:"warning"}],h={args:{items:a}},g={args:{items:[{id:"1",title:"Completed",description:"Task completed successfully",timestamp:new Date(2025,10,15,10,0),icon:e.jsx(d,{className:"h-4 w-4"}),color:"success"},{id:"2",title:"In Progress",description:"Currently working on this task",timestamp:new Date(2025,10,15,12,0),icon:e.jsx(T,{className:"h-4 w-4"}),color:"primary"},{id:"3",title:"Issue Found",description:"An issue needs attention",timestamp:new Date(2025,10,15,14,0),icon:e.jsx(V,{className:"h-4 w-4"}),color:"error"}]}},w={args:{items:a,position:"left"}},f={args:{items:a,position:"alternate"}},v={args:{items:a.slice(0,3),orientation:"horizontal"}},y={args:{items:a,showLine:!1}},x={args:{items:a,dotSize:"sm"}},D={args:{items:a,dotSize:"lg"}},j={render:()=>{const i=[{id:"1",title:"Order Placed",description:"Your order has been received and is being processed",timestamp:new Date(2025,10,20,9,30),icon:e.jsx(W,{className:"h-4 w-4"}),color:"success"},{id:"2",title:"Processing",description:"Your order is being prepared for shipment",timestamp:new Date(2025,10,20,14,0),icon:e.jsx(R,{className:"h-4 w-4"}),color:"success"},{id:"3",title:"Shipped",description:"Your order has been shipped via FedEx",timestamp:new Date(2025,10,21,8,15),icon:e.jsx(O,{className:"h-4 w-4"}),color:"success"},{id:"4",title:"Out for Delivery",description:"Your package is on the delivery truck",timestamp:new Date(2025,10,22,7,0),icon:e.jsx(T,{className:"h-4 w-4"}),color:"primary"},{id:"5",title:"Delivered",description:"Expected delivery by end of day",timestamp:new Date(2025,10,22,18,0),icon:e.jsx(_,{className:"h-4 w-4"}),color:"ink"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Order #12345"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"2rem"},children:"Track your order status"}),e.jsx(o,{items:i})]})}},b={render:()=>{const i=[{id:"1",title:"Project Kickoff",description:"Initial planning and team alignment meeting",timestamp:new Date(2025,9,1),color:"success",icon:e.jsx(d,{className:"h-4 w-4"})},{id:"2",title:"Design Phase Complete",description:"All wireframes and mockups approved",timestamp:new Date(2025,9,15),color:"success",icon:e.jsx(d,{className:"h-4 w-4"})},{id:"3",title:"Development Sprint 1",description:"Core features implementation in progress",timestamp:new Date(2025,10,1),color:"primary",icon:e.jsx(T,{className:"h-4 w-4"})},{id:"4",title:"Beta Testing",description:"User acceptance testing scheduled",timestamp:new Date(2025,10,20),color:"warning",icon:e.jsx(V,{className:"h-4 w-4"})},{id:"5",title:"Production Launch",description:"Go-live date planned",timestamp:new Date(2025,11,1),color:"ink"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"2rem"},children:"Project Roadmap"}),e.jsx(o,{items:i,position:"alternate"})]})}},k={render:()=>{const i=[{id:"1",title:"John Doe commented on your post",description:'"Great work on the new design!"',timestamp:new Date(2025,10,22,15,30),color:"primary"},{id:"2",title:"Sarah Williams liked your photo",timestamp:new Date(2025,10,22,14,20),color:"error"},{id:"3",title:"You uploaded a new file",description:"presentation-final.pdf",timestamp:new Date(2025,10,22,12,45),color:"success"},{id:"4",title:"Meeting reminder",description:"Team sync in 30 minutes",timestamp:new Date(2025,10,22,10,30),color:"warning"},{id:"5",title:"Bob Johnson shared a document",description:"Q4-report.docx",timestamp:new Date(2025,10,22,9,15),color:"accent"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"2rem"},children:"Recent Activity"}),e.jsx(o,{items:i,dotSize:"sm"})]})}},N={render:()=>{const i=[{id:"1",title:"Document created",description:"Created by John Doe",timestamp:new Date(2025,10,1,9,0),color:"success"},{id:"2",title:"Content updated",description:"Updated by Sarah Williams",timestamp:new Date(2025,10,5,14,30),color:"primary"},{id:"3",title:"Review requested",description:"Review requested from Bob Johnson",timestamp:new Date(2025,10,10,11,15),color:"warning"},{id:"4",title:"Approved",description:"Approved by Bob Johnson",timestamp:new Date(2025,10,12,16,45),color:"success"},{id:"5",title:"Published",description:"Published by John Doe",timestamp:new Date(2025,10,15,10,0),color:"success"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"2rem"},children:"Document History"}),e.jsx(o,{items:i,onItemClick:r=>console.log("Clicked:",r)})]})}},S={render:()=>{const i=[{id:"v3",title:"Version 3.0.0",description:"Major release with new features",timestamp:new Date(2025,10,20),color:"success",content:e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:e.jsxs("ul",{style:{margin:"0.5rem 0",paddingLeft:"1.5rem",color:"#64748b"},children:[e.jsx("li",{children:"New dashboard redesign"}),e.jsx("li",{children:"Performance improvements"}),e.jsx("li",{children:"Dark mode support"})]})})},{id:"v2",title:"Version 2.5.1",description:"Bug fixes and improvements",timestamp:new Date(2025,9,15),color:"primary",content:e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:e.jsxs("ul",{style:{margin:"0.5rem 0",paddingLeft:"1.5rem",color:"#64748b"},children:[e.jsx("li",{children:"Fixed login issue"}),e.jsx("li",{children:"Updated dependencies"})]})})},{id:"v1",title:"Version 2.0.0",description:"Complete rewrite",timestamp:new Date(2025,8,1),color:"accent"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"2rem"},children:"Release History"}),e.jsx(o,{items:i})]})}},C={render:()=>{const i=[{id:"1",title:"Q1",description:"Planning",timestamp:new Date(2025,0,1),color:"success",icon:e.jsx(d,{className:"h-4 w-4"})},{id:"2",title:"Q2",description:"Development",timestamp:new Date(2025,3,1),color:"success",icon:e.jsx(d,{className:"h-4 w-4"})},{id:"3",title:"Q3",description:"Testing",timestamp:new Date(2025,6,1),color:"primary",icon:e.jsx(T,{className:"h-4 w-4"})},{id:"4",title:"Q4",description:"Launch",timestamp:new Date(2025,9,1),color:"ink"}];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"2rem"},children:"2025 Roadmap"}),e.jsx(o,{items:i,orientation:"horizontal",formatTimestamp:r=>(typeof r=="string"?new Date(r):r).toLocaleDateString("en-US",{month:"short",year:"numeric"})})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Completed',
      description: 'Task completed successfully',
      timestamp: new Date(2025, 10, 15, 10, 0),
      icon: <CheckCircle className="h-4 w-4" />,
      color: 'success'
    }, {
      id: '2',
      title: 'In Progress',
      description: 'Currently working on this task',
      timestamp: new Date(2025, 10, 15, 12, 0),
      icon: <Clock className="h-4 w-4" />,
      color: 'primary'
    }, {
      id: '3',
      title: 'Issue Found',
      description: 'An issue needs attention',
      timestamp: new Date(2025, 10, 15, 14, 0),
      icon: <AlertCircle className="h-4 w-4" />,
      color: 'error'
    }]
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    position: 'left'
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    position: 'alternate'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems.slice(0, 3),
    orientation: 'horizontal'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    showLine: false
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    dotSize: 'sm'
  }
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    dotSize: 'lg'
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const orderItems: TimelineItem[] = [{
      id: '1',
      title: 'Order Placed',
      description: 'Your order has been received and is being processed',
      timestamp: new Date(2025, 10, 20, 9, 30),
      icon: <ShoppingCart className="h-4 w-4" />,
      color: 'success'
    }, {
      id: '2',
      title: 'Processing',
      description: 'Your order is being prepared for shipment',
      timestamp: new Date(2025, 10, 20, 14, 0),
      icon: <Package className="h-4 w-4" />,
      color: 'success'
    }, {
      id: '3',
      title: 'Shipped',
      description: 'Your order has been shipped via FedEx',
      timestamp: new Date(2025, 10, 21, 8, 15),
      icon: <Truck className="h-4 w-4" />,
      color: 'success'
    }, {
      id: '4',
      title: 'Out for Delivery',
      description: 'Your package is on the delivery truck',
      timestamp: new Date(2025, 10, 22, 7, 0),
      icon: <Clock className="h-4 w-4" />,
      color: 'primary'
    }, {
      id: '5',
      title: 'Delivered',
      description: 'Expected delivery by end of day',
      timestamp: new Date(2025, 10, 22, 18, 0),
      icon: <Home className="h-4 w-4" />,
      color: 'ink'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>\r
          Order #12345\r
        </h3>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          Track your order status\r
        </p>\r
        <Timeline items={orderItems} />\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const milestones: TimelineItem[] = [{
      id: '1',
      title: 'Project Kickoff',
      description: 'Initial planning and team alignment meeting',
      timestamp: new Date(2025, 9, 1),
      color: 'success',
      icon: <CheckCircle className="h-4 w-4" />
    }, {
      id: '2',
      title: 'Design Phase Complete',
      description: 'All wireframes and mockups approved',
      timestamp: new Date(2025, 9, 15),
      color: 'success',
      icon: <CheckCircle className="h-4 w-4" />
    }, {
      id: '3',
      title: 'Development Sprint 1',
      description: 'Core features implementation in progress',
      timestamp: new Date(2025, 10, 1),
      color: 'primary',
      icon: <Clock className="h-4 w-4" />
    }, {
      id: '4',
      title: 'Beta Testing',
      description: 'User acceptance testing scheduled',
      timestamp: new Date(2025, 10, 20),
      color: 'warning',
      icon: <AlertCircle className="h-4 w-4" />
    }, {
      id: '5',
      title: 'Production Launch',
      description: 'Go-live date planned',
      timestamp: new Date(2025, 11, 1),
      color: 'ink'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '2rem'
      }}>\r
          Project Roadmap\r
        </h3>\r
        <Timeline items={milestones} position="alternate" />\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const activities: TimelineItem[] = [{
      id: '1',
      title: 'John Doe commented on your post',
      description: '"Great work on the new design!"',
      timestamp: new Date(2025, 10, 22, 15, 30),
      color: 'primary'
    }, {
      id: '2',
      title: 'Sarah Williams liked your photo',
      timestamp: new Date(2025, 10, 22, 14, 20),
      color: 'error'
    }, {
      id: '3',
      title: 'You uploaded a new file',
      description: 'presentation-final.pdf',
      timestamp: new Date(2025, 10, 22, 12, 45),
      color: 'success'
    }, {
      id: '4',
      title: 'Meeting reminder',
      description: 'Team sync in 30 minutes',
      timestamp: new Date(2025, 10, 22, 10, 30),
      color: 'warning'
    }, {
      id: '5',
      title: 'Bob Johnson shared a document',
      description: 'Q4-report.docx',
      timestamp: new Date(2025, 10, 22, 9, 15),
      color: 'accent'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '2rem'
      }}>\r
          Recent Activity\r
        </h3>\r
        <Timeline items={activities} dotSize="sm" />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const history: TimelineItem[] = [{
      id: '1',
      title: 'Document created',
      description: 'Created by John Doe',
      timestamp: new Date(2025, 10, 1, 9, 0),
      color: 'success'
    }, {
      id: '2',
      title: 'Content updated',
      description: 'Updated by Sarah Williams',
      timestamp: new Date(2025, 10, 5, 14, 30),
      color: 'primary'
    }, {
      id: '3',
      title: 'Review requested',
      description: 'Review requested from Bob Johnson',
      timestamp: new Date(2025, 10, 10, 11, 15),
      color: 'warning'
    }, {
      id: '4',
      title: 'Approved',
      description: 'Approved by Bob Johnson',
      timestamp: new Date(2025, 10, 12, 16, 45),
      color: 'success'
    }, {
      id: '5',
      title: 'Published',
      description: 'Published by John Doe',
      timestamp: new Date(2025, 10, 15, 10, 0),
      color: 'success'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '2rem'
      }}>\r
          Document History\r
        </h3>\r
        <Timeline items={history} onItemClick={item => console.log('Clicked:', item)} />\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const versions: TimelineItem[] = [{
      id: 'v3',
      title: 'Version 3.0.0',
      description: 'Major release with new features',
      timestamp: new Date(2025, 10, 20),
      color: 'success',
      content: <div style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem'
      }}>\r
            <ul style={{
          margin: '0.5rem 0',
          paddingLeft: '1.5rem',
          color: '#64748b'
        }}>\r
              <li>New dashboard redesign</li>\r
              <li>Performance improvements</li>\r
              <li>Dark mode support</li>\r
            </ul>\r
          </div>
    }, {
      id: 'v2',
      title: 'Version 2.5.1',
      description: 'Bug fixes and improvements',
      timestamp: new Date(2025, 9, 15),
      color: 'primary',
      content: <div style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem'
      }}>\r
            <ul style={{
          margin: '0.5rem 0',
          paddingLeft: '1.5rem',
          color: '#64748b'
        }}>\r
              <li>Fixed login issue</li>\r
              <li>Updated dependencies</li>\r
            </ul>\r
          </div>
    }, {
      id: 'v1',
      title: 'Version 2.0.0',
      description: 'Complete rewrite',
      timestamp: new Date(2025, 8, 1),
      color: 'accent'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '2rem'
      }}>\r
          Release History\r
        </h3>\r
        <Timeline items={versions} />\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const milestones: TimelineItem[] = [{
      id: '1',
      title: 'Q1',
      description: 'Planning',
      timestamp: new Date(2025, 0, 1),
      color: 'success',
      icon: <CheckCircle className="h-4 w-4" />
    }, {
      id: '2',
      title: 'Q2',
      description: 'Development',
      timestamp: new Date(2025, 3, 1),
      color: 'success',
      icon: <CheckCircle className="h-4 w-4" />
    }, {
      id: '3',
      title: 'Q3',
      description: 'Testing',
      timestamp: new Date(2025, 6, 1),
      color: 'primary',
      icon: <Clock className="h-4 w-4" />
    }, {
      id: '4',
      title: 'Q4',
      description: 'Launch',
      timestamp: new Date(2025, 9, 1),
      color: 'ink'
    }];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '2rem'
      }}>\r
          2025 Roadmap\r
        </h3>\r
        <Timeline items={milestones} orientation="horizontal" formatTimestamp={date => {
        const d = typeof date === 'string' ? new Date(date) : date;
        return d.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric'
        });
      }} />\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};const te=["Default","WithIcons","LeftPosition","AlternatePosition","HorizontalOrientation","NoLine","SmallDots","LargeDots","OrderTracking","ProjectMilestones","ActivityFeed","HistoryLog","VersionHistory","HorizontalMilestones"];export{k as ActivityFeed,f as AlternatePosition,h as Default,N as HistoryLog,C as HorizontalMilestones,v as HorizontalOrientation,D as LargeDots,w as LeftPosition,y as NoLine,j as OrderTracking,b as ProjectMilestones,x as SmallDots,S as VersionHistory,g as WithIcons,te as __namedExportsOrder,ee as default};
