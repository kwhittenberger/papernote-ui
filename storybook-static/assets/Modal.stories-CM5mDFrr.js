import{j as e}from"./createLucideIcon-BkbhIg0o.js";import{r as t}from"./iframe-BpZJeWHf.js";import{X as F}from"./x-Dx36hi2J.js";import{B as n}from"./Button-Bq4WdJWB.js";import{I as j}from"./Input-C5s4v3n9.js";import"./preload-helper-PPVm8Dsz.js";import"./loader-circle-C3vHcxdF.js";import"./eye-DJ1P7wUb.js";import"./triangle-alert-CNYniKcW.js";import"./circle-alert-BaDBUY7J.js";const T={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-7xl"};function a({isOpen:s,onClose:r,title:o,children:M,size:S="md",showCloseButton:I=!0,animation:v="scale"}){const w=t.useRef(null),y=t.useId();t.useEffect(()=>{const l=B=>{B.key==="Escape"&&s&&r()};return s&&(document.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[s,r]);const k=l=>{l.target===l.currentTarget&&r()},b=()=>{switch(v){case"scale":return"animate-scale-in";case"slide-up":return"animate-slide-in-bottom";case"slide-down":return"animate-slide-in-top";case"fade":return"animate-fade-in";case"none":return"";default:return"animate-scale-in"}};return s?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900 bg-opacity-50 backdrop-blur-sm animate-fade-in",onClick:k,children:e.jsxs("div",{ref:w,className:`${T[S]} w-full bg-white bg-subtle-grain rounded-xl shadow-2xl border border-paper-200 ${b()}`,role:"dialog","aria-modal":"true","aria-labelledby":y,children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-paper-200",children:[e.jsx("h3",{id:y,className:"text-lg font-medium text-ink-900",children:o}),I&&e.jsx("button",{onClick:r,className:"text-ink-400 hover:text-ink-600 transition-colors","aria-label":"Close modal",children:e.jsx(F,{className:"h-5 w-5"})})]}),e.jsx("div",{className:"px-6 py-4",children:M})]})}):null}function i({children:s}){return e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-paper-200 bg-paper-50",children:s})}try{a.displayName="Modal",a.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},animation:{defaultValue:{value:"scale"},description:"Animation variant for modal entrance (default: 'scale')",name:"animation",required:!1,type:{name:"enum",value:[{value:'"scale"'},{value:'"slide-up"'},{value:'"slide-down"'},{value:'"fade"'},{value:'"none"'}]}}}}}catch{}try{i.displayName="ModalFooter",i.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const V={title:"Feedback/Modal",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]},animation:{control:"select",options:["scale","slide-up","slide-down","fade","none"]}}},d={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Modal"}),e.jsx(a,{isOpen:s,onClose:()=>r(!1),title:"Modal Title",children:e.jsx("p",{children:"This is the modal content. You can put any content here."})})]})}},p={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Modal with Footer"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"Confirm Action",children:[e.jsx("p",{children:"Are you sure you want to proceed with this action?"}),e.jsxs(i,{children:[e.jsx(n,{variant:"ghost",onClick:()=>r(!1),children:"Cancel"}),e.jsx(n,{variant:"primary",onClick:()=>r(!1),children:"Confirm"})]})]})]})}},c={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Small Modal"}),e.jsx(a,{isOpen:s,onClose:()=>r(!1),title:"Small Modal",size:"sm",children:e.jsx("p",{children:"This is a small modal."})})]})}},u={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Large Modal"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"Large Modal",size:"lg",children:[e.jsx("p",{children:"This is a large modal with more space for content."}),e.jsx("p",{style:{marginTop:"1rem"},children:"You can add more detailed information here."})]})]})}},m={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open XL Modal"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"Extra Large Modal",size:"xl",children:[e.jsx("p",{children:"This is an extra large modal for complex content."}),e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Example Section"}),e.jsx("p",{children:"With plenty of space for detailed information."})]})]})]})}},f={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open Full Size Modal"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"Full Size Modal",size:"full",children:[e.jsx("p",{children:"This modal uses the maximum available width."}),e.jsx("div",{style:{marginTop:"1rem",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[1,2,3].map(o=>e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:[e.jsxs("h4",{children:["Column ",o]}),e.jsxs("p",{children:["Content for column ",o]})]},o))})]})]})}},h={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Create New User"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"Create New User",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(j,{label:"Full Name",placeholder:"Enter full name",required:!0}),e.jsx(j,{label:"Email",type:"email",placeholder:"user@example.com",required:!0}),e.jsx(j,{label:"Password",type:"password",placeholder:"Create password",required:!0})]}),e.jsxs(i,{children:[e.jsx(n,{variant:"ghost",onClick:()=>r(!1),children:"Cancel"}),e.jsx(n,{variant:"primary",onClick:()=>r(!1),children:"Create User"})]})]})]})}},x={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Slide Up Animation"}),e.jsx(a,{isOpen:s,onClose:()=>r(!1),title:"Slide Up",animation:"slide-up",children:e.jsx("p",{children:"This modal slides up from the bottom."})})]})}},O={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Slide Down Animation"}),e.jsx(a,{isOpen:s,onClose:()=>r(!1),title:"Slide Down",animation:"slide-down",children:e.jsx("p",{children:"This modal slides down from the top."})})]})}},C={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Fade Animation"}),e.jsx(a,{isOpen:s,onClose:()=>r(!1),title:"Fade",animation:"fade",children:e.jsx("p",{children:"This modal fades in."})})]})}},g={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Modal Without Close Button"}),e.jsxs(a,{isOpen:s,onClose:()=>r(!1),title:"No Close Button",showCloseButton:!1,children:[e.jsx("p",{children:"This modal doesn't have a close button in the header."}),e.jsx("p",{style:{marginTop:"0.5rem"},children:"You must use the footer buttons to close it."}),e.jsx(i,{children:e.jsx(n,{variant:"primary",onClick:()=>r(!1),children:"Close"})})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">\r
          <p>This is the modal content. You can put any content here.</p>\r
        </Modal>\r
      </>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">\r
          <p>Are you sure you want to proceed with this action?</p>\r
          <ModalFooter>\r
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>\r
            <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>\r
          </ModalFooter>\r
        </Modal>\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="sm">\r
          <p>This is a small modal.</p>\r
        </Modal>\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="lg">\r
          <p>This is a large modal with more space for content.</p>\r
          <p style={{
          marginTop: '1rem'
        }}>You can add more detailed information here.</p>\r
        </Modal>\r
      </>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open XL Modal</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Extra Large Modal" size="xl">\r
          <p>This is an extra large modal for complex content.</p>\r
          <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem'
        }}>\r
            <h4 style={{
            marginBottom: '0.5rem'
          }}>Example Section</h4>\r
            <p>With plenty of space for detailed information.</p>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Open Full Size Modal</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Full Size Modal" size="full">\r
          <p>This modal uses the maximum available width.</p>\r
          <div style={{
          marginTop: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem'
        }}>\r
            {[1, 2, 3].map(i => <div key={i} style={{
            padding: '1rem',
            backgroundColor: '#f5f5f4',
            borderRadius: '0.375rem'
          }}>\r
                <h4>Column {i}</h4>\r
                <p>Content for column {i}</p>\r
              </div>)}\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Create New User</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create New User">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <Input label="Full Name" placeholder="Enter full name" required />\r
            <Input label="Email" type="email" placeholder="user@example.com" required />\r
            <Input label="Password" type="password" placeholder="Create password" required />\r
          </div>\r
          <ModalFooter>\r
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>\r
            <Button variant="primary" onClick={() => setIsOpen(false)}>Create User</Button>\r
          </ModalFooter>\r
        </Modal>\r
      </>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Slide Up Animation</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Slide Up" animation="slide-up">\r
          <p>This modal slides up from the bottom.</p>\r
        </Modal>\r
      </>;
  }
}`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Slide Down Animation</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Slide Down" animation="slide-down">\r
          <p>This modal slides down from the top.</p>\r
        </Modal>\r
      </>;
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Fade Animation</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Fade" animation="fade">\r
          <p>This modal fades in.</p>\r
        </Modal>\r
      </>;
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button onClick={() => setIsOpen(true)}>Modal Without Close Button</Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="No Close Button" showCloseButton={false}>\r
          <p>This modal doesn't have a close button in the header.</p>\r
          <p style={{
          marginTop: '0.5rem'
        }}>You must use the footer buttons to close it.</p>\r
          <ModalFooter>\r
            <Button variant="primary" onClick={() => setIsOpen(false)}>Close</Button>\r
          </ModalFooter>\r
        </Modal>\r
      </>;
  }
}`,...g.parameters?.docs?.source}}};const W=["Default","WithFooter","Small","Large","ExtraLarge","FullSize","FormModal","SlideUpAnimation","SlideDownAnimation","FadeAnimation","NoCloseButton"];export{d as Default,m as ExtraLarge,C as FadeAnimation,h as FormModal,f as FullSize,u as Large,g as NoCloseButton,O as SlideDownAnimation,x as SlideUpAnimation,c as Small,p as WithFooter,W as __namedExportsOrder,V as default};
