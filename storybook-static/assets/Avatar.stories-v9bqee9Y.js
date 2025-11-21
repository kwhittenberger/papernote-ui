import{j as e}from"./jsx-runtime-u17CrQMm.js";const r=({firstName:a,lastName:s,fallbackText:b="U",imageUrl:v,size:u="md",className:f=""})=>{const w=()=>a&&s?`${a.charAt(0)}${s.charAt(0)}`.toUpperCase():a?a.charAt(0).toUpperCase():s?s.charAt(0).toUpperCase():b.charAt(0).toUpperCase(),y={xs:"h-6 w-6",sm:"h-8 w-8",md:"h-12 w-12",lg:"h-16 w-16",xl:"h-24 w-24"},j={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-2xl"};return v?e.jsx("div",{className:`${y[u]} rounded-full overflow-hidden shadow-lg ${f}`,children:e.jsx("img",{src:v,alt:"User avatar",className:"h-full w-full object-cover"})}):e.jsx("div",{className:`
        ${y[u]}
        rounded-full
        flex items-center justify-center
        shadow-lg
        bg-primary-500
        ${f}
      `,children:e.jsx("span",{className:`
          ${j[u]}
          font-bold
          text-white
          select-none
        `,style:{textShadow:"0 1px 2px rgba(0,0,0,0.3)"},children:w()})})};try{r.displayName="Avatar",r.__docgenInfo={description:`Avatar component that displays:
- User initials in a colored circle (default)
- Custom image if imageUrl is provided

Size variants:
- xs: 24px (h-6 w-6, text-xs)
- sm: 32px (h-8 w-8, text-sm)
- md: 48px (h-12 w-12, text-base)
- lg: 64px (h-16 w-16, text-lg)
- xl: 96px (h-24 w-24, text-2xl)`,displayName:"Avatar",props:{firstName:{defaultValue:null,description:"User's first name (for initials)",name:"firstName",required:!1,type:{name:"string"}},lastName:{defaultValue:null,description:"User's last name (for initials)",name:"lastName",required:!1,type:{name:"string"}},fallbackText:{defaultValue:{value:"U"},description:"Fallback text (used if firstName/lastName not provided)",name:"fallbackText",required:!1,type:{name:"string"}},imageUrl:{defaultValue:null,description:"Avatar image URL (if provided, shows image instead of initials)",name:"imageUrl",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},className:{defaultValue:{value:""},description:"Custom className for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Components/Avatar",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},i={args:{name:"John Doe"}},t={args:{src:"https://i.pravatar.cc/150?img=1",name:"John Doe"}},n={args:{src:"invalid-url.jpg",name:"John Doe"}},o={args:{name:"John Doe",size:"xs"}},l={args:{name:"John Doe",size:"sm"}},m={args:{name:"John Doe",size:"md"}},d={args:{name:"John Doe",size:"lg"}},c={args:{name:"John Doe",size:"xl"}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{name:"John Doe",size:"xs"}),e.jsx(r,{name:"John Doe",size:"sm"}),e.jsx(r,{name:"John Doe",size:"md"}),e.jsx(r,{name:"John Doe",size:"lg"}),e.jsx(r,{name:"John Doe",size:"xl"})]})},x={render:()=>e.jsx("div",{style:{display:"flex",marginLeft:"0.5rem"},children:["Alice Brown","Bob Smith","Carol White","Dave Jones"].map((a,s)=>e.jsx("div",{style:{marginLeft:"-0.5rem"},children:e.jsx(r,{name:a,src:`https://i.pravatar.cc/150?img=${s+1}`,size:"md",style:{border:"2px solid white"}})},s))})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx(r,{name:"Online User",src:"https://i.pravatar.cc/150?img=2"}),e.jsx("div",{style:{position:"absolute",bottom:"2px",right:"2px",width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#10b981",border:"2px solid white"}})]}),e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx(r,{name:"Away User",src:"https://i.pravatar.cc/150?img=3"}),e.jsx("div",{style:{position:"absolute",bottom:"2px",right:"2px",width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#f59e0b",border:"2px solid white"}})]}),e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx(r,{name:"Busy User",src:"https://i.pravatar.cc/150?img=4"}),e.jsx("div",{style:{position:"absolute",bottom:"2px",right:"2px",width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#ef4444",border:"2px solid white"}})]})]})},g={render:()=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[{name:"Alice Brown",email:"alice@example.com",img:1},{name:"Bob Smith",email:"bob@example.com",img:2},{name:"Carol White",email:"carol@example.com",img:3}].map((a,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem",borderRadius:"0.375rem",cursor:"pointer"},children:[e.jsx(r,{name:a.name,src:`https://i.pravatar.cc/150?img=${a.img}`}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:a.name}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.email})]})]},s))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    name: 'John Doe'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    name: 'John Doe'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'xs'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'xl'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Avatar name="John Doe" size="xs" />\r
      <Avatar name="John Doe" size="sm" />\r
      <Avatar name="John Doe" size="md" />\r
      <Avatar name="John Doe" size="lg" />\r
      <Avatar name="John Doe" size="xl" />\r
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    marginLeft: '0.5rem'
  }}>\r
      {['Alice Brown', 'Bob Smith', 'Carol White', 'Dave Jones'].map((name, i) => <div key={i} style={{
      marginLeft: '-0.5rem'
    }}>\r
          <Avatar name={name} src={\`https://i.pravatar.cc/150?img=\${i + 1}\`} size="md" style={{
        border: '2px solid white'
      }} />\r
        </div>)}\r
    </div>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>\r
        <Avatar name="Online User" src="https://i.pravatar.cc/150?img=2" />\r
        <div style={{
        position: 'absolute',
        bottom: '2px',
        right: '2px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#10b981',
        border: '2px solid white'
      }} />\r
      </div>\r
\r
      <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>\r
        <Avatar name="Away User" src="https://i.pravatar.cc/150?img=3" />\r
        <div style={{
        position: 'absolute',
        bottom: '2px',
        right: '2px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#f59e0b',
        border: '2px solid white'
      }} />\r
      </div>\r
\r
      <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>\r
        <Avatar name="Busy User" src="https://i.pravatar.cc/150?img=4" />\r
        <div style={{
        position: 'absolute',
        bottom: '2px',
        right: '2px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#ef4444',
        border: '2px solid white'
      }} />\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }}>\r
      {[{
      name: 'Alice Brown',
      email: 'alice@example.com',
      img: 1
    }, {
      name: 'Bob Smith',
      email: 'bob@example.com',
      img: 2
    }, {
      name: 'Carol White',
      email: 'carol@example.com',
      img: 3
    }].map((user, i) => <div key={i} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }}>\r
          <Avatar name={user.name} src={\`https://i.pravatar.cc/150?img=\${user.img}\`} />\r
          <div style={{
        flex: 1,
        minWidth: 0
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500
        }}>{user.name}</div>\r
            <div style={{
          fontSize: '0.75rem',
          color: '#64748b',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{user.email}</div>\r
          </div>\r
        </div>)}\r
    </div>
}`,...g.parameters?.docs?.source}}};const A=["WithInitials","WithImage","Fallback","ExtraSmall","Small","Medium","Large","ExtraLarge","AllSizes","AvatarGroup","WithStatus","UserList"];export{p as AllSizes,x as AvatarGroup,c as ExtraLarge,o as ExtraSmall,n as Fallback,d as Large,m as Medium,l as Small,g as UserList,t as WithImage,i as WithInitials,h as WithStatus,A as __namedExportsOrder,z as default};
