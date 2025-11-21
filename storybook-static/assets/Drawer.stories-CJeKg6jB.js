import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-C8OopBmF.js";import{X as _}from"./x-BpfzuGHz.js";import{B as s}from"./Button-21ZwGxhY.js";import{I as d}from"./Input-fL41YcDg.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D9MvcA__.js";import"./loader-circle-BUSlDFqH.js";import"./eye-CAD9SY01.js";import"./triangle-alert-4L-VccSa.js";import"./circle-check-big-Dv_DmTAz.js";import"./circle-alert-DreB7MGI.js";const E={left:{sm:"w-64",md:"w-96",lg:"w-[32rem]",full:"w-full"},right:{sm:"w-64",md:"w-96",lg:"w-[32rem]",full:"w-full"},top:{sm:"h-64",md:"h-96",lg:"h-[32rem]",full:"h-full"},bottom:{sm:"h-64",md:"h-96",lg:"h-[32rem]",full:"h-full"}},q={left:"left-0 top-0 bottom-0",right:"right-0 top-0 bottom-0",top:"top-0 left-0 right-0",bottom:"bottom-0 left-0 right-0"},V={left:{enter:"animate-slide-in-left",exit:"animate-slide-out-left"},right:{enter:"animate-slide-in-right",exit:"animate-slide-out-right"},top:{enter:"animate-slide-in-top",exit:"animate-slide-out-top"},bottom:{enter:"animate-slide-in-bottom",exit:"animate-slide-out-bottom"}};function n({isOpen:t,onClose:r,title:l,children:i,placement:o="right",size:B="md",showCloseButton:F=!0,showOverlay:z=!0,closeOnOverlayClick:N=!0,closeOnEscape:j=!0,header:b,footer:C,className:T=""}){const D=a.useId();a.useEffect(()=>{const k=R=>{R.key==="Escape"&&t&&j&&r()};return t&&(document.addEventListener("keydown",k),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",k),document.body.style.overflow="unset"}},[t,r,j]);const W=()=>{N&&r()};if(!t)return null;const S=o==="left"||o==="right";return e.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[z&&e.jsx("div",{className:"fixed inset-0 bg-ink-900 bg-opacity-50 backdrop-blur-sm animate-fade-in",onClick:W,"aria-hidden":"true"}),e.jsxs("div",{className:`
          fixed ${q[o]}
          ${E[o][B]}
          bg-white border-paper-200 shadow-2xl
          ${S?"border-r":"border-b"}
          ${V[o].enter}
          flex flex-col
          ${T}
        `,role:"dialog","aria-modal":"true","aria-labelledby":l?D:void 0,children:[(l||b)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-paper-200 flex-shrink-0",children:[b||e.jsx("h3",{id:D,className:"text-lg font-medium text-ink-900",children:l}),F&&e.jsx("button",{onClick:r,className:"text-ink-400 hover:text-ink-600 transition-colors ml-4","aria-label":"Close drawer",children:e.jsx(_,{className:"h-5 w-5"})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:i}),C&&e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50 flex-shrink-0",children:C})]})]})}function I({children:t}){return e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50",children:t})}try{n.displayName="Drawer",n.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"right"},description:"Placement of drawer",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"md"},description:"Size of drawer",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"Show close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},showOverlay:{defaultValue:{value:"true"},description:"Show overlay backdrop",name:"showOverlay",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"Close on overlay click",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"Close on escape key",name:"closeOnEscape",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"Custom header content (replaces title)",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Class name for drawer container",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{I.displayName="DrawerFooter",I.__docgenInfo={description:"",displayName:"DrawerFooter",props:{}}}catch{}const Q={title:"Feedback/Drawer",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"]},size:{control:"select",options:["sm","md","lg","full"]}}},p={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Drawer Title",children:e.jsx("p",{children:"This is the drawer content from the right side."})})]})}},c={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Left Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Left Drawer",placement:"left",children:e.jsx("p",{children:"This drawer slides in from the left."})})]})}},m={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Top Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Top Drawer",placement:"top",children:e.jsx("p",{children:"This drawer slides down from the top."})})]})}},u={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Bottom Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Bottom Drawer",placement:"bottom",children:e.jsx("p",{children:"This drawer slides up from the bottom."})})]})}},f={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Small Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Small Drawer",size:"sm",children:e.jsx("p",{children:"This is a small-sized drawer."})})]})}},h={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Large Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Large Drawer",size:"lg",children:e.jsx("p",{children:"This is a large-sized drawer with more space for content."})})]})}},g={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Full Width Drawer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Full Width Drawer",size:"full",children:e.jsx("p",{children:"This drawer takes up the full width/height."})})]})}},x={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Drawer with Footer"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Drawer with Footer",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(s,{variant:"ghost",onClick:()=>r(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>r(!1),children:"Save"})]}),children:e.jsx("p",{children:"This drawer has footer buttons."})})]})}},y={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Drawer (No Overlay)"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"No Overlay",showOverlay:!1,children:e.jsx("p",{children:"This drawer has no backdrop overlay."})})]})}},w={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Create New User"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Create New User",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(s,{variant:"ghost",onClick:()=>r(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>r(!1),children:"Create User"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(d,{label:"Full Name",placeholder:"Enter full name",required:!0}),e.jsx(d,{label:"Email",type:"email",placeholder:"user@example.com",required:!0}),e.jsx(d,{label:"Role",placeholder:"Enter role"}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Bio"}),e.jsx("textarea",{rows:4,placeholder:"Tell us about yourself...",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem",fontFamily:"inherit"}})]})]})})]})}},O={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Filters"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Filter Products",placement:"left",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(s,{variant:"ghost",fullWidth:!0,onClick:()=>r(!1),children:"Clear All"}),e.jsx(s,{variant:"primary",fullWidth:!0,onClick:()=>r(!1),children:"Apply Filters"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"0.75rem"},children:"Category"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:["Electronics","Clothing","Home & Garden","Sports"].map(l=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem"},children:[e.jsx("input",{type:"checkbox"}),l]},l))})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"0.75rem"},children:"Price Range"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(d,{placeholder:"Min",size:"sm"}),e.jsx(d,{placeholder:"Max",size:"sm"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"0.75rem"},children:"Rating"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:["4+ Stars","3+ Stars","2+ Stars","1+ Stars"].map(l=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem"},children:[e.jsx("input",{type:"radio",name:"rating"}),l]},l))})]})]})})]})}},v={render:()=>{const[t,r]=a.useState(!1),l=[{id:1,title:"New message",message:"You have a new message from John",time:"5 min ago",unread:!0},{id:2,title:"Update available",message:"Version 2.0 is now available",time:"1 hour ago",unread:!0},{id:3,title:"Welcome!",message:"Thanks for signing up",time:"2 days ago",unread:!1}];return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),badge:2,badgeVariant:"error",children:"Notifications"}),e.jsx(n,{isOpen:t,onClose:()=>r(!1),title:"Notifications",footer:e.jsx(s,{variant:"ghost",fullWidth:!0,onClick:()=>r(!1),children:"Mark all as read"}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:l.map(i=>e.jsxs("div",{style:{padding:"0.75rem",borderRadius:"0.375rem",backgroundColor:i.unread?"#eff6ff":"transparent",border:"1px solid #e5e5e5"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.25rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:i.title}),i.unread&&e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#3b82f6"}})]}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",margin:"0 0 0.5rem 0"},children:i.message}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:i.time})]},i.id))})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Right Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Drawer Title">\r
          <p>This is the drawer content from the right side.</p>\r
        </Drawer>\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Left Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Left Drawer" placement="left">\r
          <p>This drawer slides in from the left.</p>\r
        </Drawer>\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Top Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Top Drawer" placement="top">\r
          <p>This drawer slides down from the top.</p>\r
        </Drawer>\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Bottom Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Bottom Drawer" placement="bottom">\r
          <p>This drawer slides up from the bottom.</p>\r
        </Drawer>\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Small Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Drawer" size="sm">\r
          <p>This is a small-sized drawer.</p>\r
        </Drawer>\r
      </>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Large Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Drawer" size="lg">\r
          <p>This is a large-sized drawer with more space for content.</p>\r
        </Drawer>\r
      </>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Full Width Drawer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Full Width Drawer" size="full">\r
          <p>This drawer takes up the full width/height.</p>\r
        </Drawer>\r
      </>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Drawer with Footer</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Drawer with Footer" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>\r
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>\r
              <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>\r
            </div>}>\r
          <p>This drawer has footer buttons.</p>\r
        </Drawer>\r
      </>;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Drawer (No Overlay)</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="No Overlay" showOverlay={false}>\r
          <p>This drawer has no backdrop overlay.</p>\r
        </Drawer>\r
      </>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Create New User</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create New User" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>\r
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>\r
              <Button variant="primary" onClick={() => setIsOpen(false)}>Create User</Button>\r
            </div>}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>\r
            <Input label="Full Name" placeholder="Enter full name" required />\r
            <Input label="Email" type="email" placeholder="user@example.com" required />\r
            <Input label="Role" placeholder="Enter role" />\r
            <div>\r
              <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>\r
                Bio\r
              </label>\r
              <textarea rows={4} placeholder="Tell us about yourself..." style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontFamily: 'inherit'
            }} />\r
            </div>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Filters</Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Filter Products" placement="left" footer={<div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>\r
              <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>Clear All</Button>\r
              <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Apply Filters</Button>\r
            </div>}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>\r
            <div>\r
              <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}>Category</h4>\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>\r
                {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map(cat => <label key={cat} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>\r
                    <input type="checkbox" />\r
                    {cat}\r
                  </label>)}\r
              </div>\r
            </div>\r
\r
            <div>\r
              <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}>Price Range</h4>\r
              <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>\r
                <Input placeholder="Min" size="sm" />\r
                <Input placeholder="Max" size="sm" />\r
              </div>\r
            </div>\r
\r
            <div>\r
              <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}>Rating</h4>\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>\r
                {['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars'].map(rating => <label key={rating} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>\r
                    <input type="radio" name="rating" />\r
                    {rating}\r
                  </label>)}\r
              </div>\r
            </div>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...O.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const notifications = [{
      id: 1,
      title: 'New message',
      message: 'You have a new message from John',
      time: '5 min ago',
      unread: true
    }, {
      id: 2,
      title: 'Update available',
      message: 'Version 2.0 is now available',
      time: '1 hour ago',
      unread: true
    }, {
      id: 3,
      title: 'Welcome!',
      message: 'Thanks for signing up',
      time: '2 days ago',
      unread: false
    }];
    return <>\r
        <Button onClick={() => setIsOpen(true)} badge={2} badgeVariant="error">\r
          Notifications\r
        </Button>\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Notifications" footer={<Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>\r
              Mark all as read\r
            </Button>}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>\r
            {notifications.map(notif => <div key={notif.id} style={{
            padding: '0.75rem',
            borderRadius: '0.375rem',
            backgroundColor: notif.unread ? '#eff6ff' : 'transparent',
            border: '1px solid #e5e5e5'
          }}>\r
                <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.25rem'
            }}>\r
                  <div style={{
                fontSize: '0.875rem',
                fontWeight: 500
              }}>{notif.title}</div>\r
                  {notif.unread && <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6'
              }} />}\r
                </div>\r
                <p style={{
              fontSize: '0.875rem',
              color: '#64748b',
              margin: '0 0 0.5rem 0'
            }}>{notif.message}</p>\r
                <div style={{
              fontSize: '0.75rem',
              color: '#94a3b8'
            }}>{notif.time}</div>\r
              </div>)}\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...v.parameters?.docs?.source}}};const Z=["Right","Left","Top","Bottom","Small","Large","FullWidth","WithFooter","NoOverlay","FormDrawer","FilterPanel","NotificationPanel"];export{u as Bottom,O as FilterPanel,w as FormDrawer,g as FullWidth,h as Large,c as Left,y as NoOverlay,v as NotificationPanel,p as Right,f as Small,m as Top,x as WithFooter,Z as __namedExportsOrder,Q as default};
