import{c as z,j as e}from"./createLucideIcon-BkbhIg0o.js";import{L as W}from"./loader-circle-C3vHcxdF.js";import{B as m}from"./Button-Bq4WdJWB.js";import{B as S}from"./Badge-CV8C1IKP.js";import{S as A}from"./settings-CtAsTxtQ.js";import{U as q}from"./users-DXM38kid.js";import"./iframe-BpZJeWHf.js";import"./preload-helper-PPVm8Dsz.js";import"./x-Dx36hi2J.js";const H=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],V=z("trending-up",H);function _({variant:r="spinner",size:t="md",text:a}){const c={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"};if(r==="spinner")return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[e.jsx(W,{className:`${c[t]} text-accent-500 animate-spin`}),a&&e.jsx("p",{className:"text-sm text-ink-600",children:a})]});if(r==="dots"){const i=t==="sm"?"h-2 w-2":t==="md"?"h-3 w-3":"h-4 w-4";return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`${i} bg-accent-500 rounded-full animate-bounce`,style:{animationDelay:"0ms"}}),e.jsx("div",{className:`${i} bg-accent-500 rounded-full animate-bounce`,style:{animationDelay:"150ms"}}),e.jsx("div",{className:`${i} bg-accent-500 rounded-full animate-bounce`,style:{animationDelay:"300ms"}})]}),a&&e.jsx("p",{className:"text-sm text-ink-600",children:a})]})}return r==="bar"?e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 w-full",children:[e.jsx("div",{className:"w-full h-1 bg-paper-200 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-accent-500 animate-shimmer",style:{width:"30%"}})}),a&&e.jsx("p",{className:"text-sm text-ink-600",children:a})]}):null}function l({className:r="",...t}){return e.jsx("div",{className:`animate-pulse bg-paper-200 rounded ${r}`,...t})}function N({rows:r=5,columns:t=4}){return e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex gap-4",children:Array.from({length:t}).map((a,c)=>e.jsx(l,{className:"h-4 flex-1"},c))}),Array.from({length:r}).map((a,c)=>e.jsx("div",{className:"flex gap-4",children:Array.from({length:t}).map((i,j)=>e.jsx(l,{className:"h-8 flex-1"},j))},c))]})}try{_.displayName="Loading",_.__docgenInfo={description:"",displayName:"Loading",props:{variant:{defaultValue:{value:"spinner"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"spinner"'},{value:'"dots"'},{value:'"bar"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="Skeleton",l.__docgenInfo={description:"",displayName:"Skeleton",props:{}}}catch{}try{N.displayName="SkeletonTable",N.__docgenInfo={description:"",displayName:"SkeletonTable",props:{rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:{value:"4"},description:"",name:"columns",required:!1,type:{name:"number"}}}}}catch{}function s({children:r,variant:t="default",width:a="auto",className:c="",onClick:i,hoverable:j=!1,loading:b=!1}){const I="bg-white bg-subtle-grain border-2 border-paper-300 transition-shadow duration-200",B={default:"rounded-xl shadow-lg p-8",compact:"rounded-lg shadow-md p-5",flat:"rounded-lg p-5"},T={sm:"w-64 max-w-full",md:"w-80 max-w-full",lg:"w-96 max-w-full",xl:"w-[32rem] max-w-full",auto:"w-auto",full:"w-full"},k=i||j?"cursor-pointer hover:shadow-md":"";return e.jsx("div",{className:`${I} ${B[t]} ${T[a]} ${k} ${c}`,onClick:b?void 0:i,role:i?"button":void 0,tabIndex:i?0:void 0,children:b?e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{className:"h-6 w-3/4"}),e.jsx(l,{className:"h-4 w-full"}),e.jsx(l,{className:"h-4 w-5/6"}),e.jsx(l,{className:"h-4 w-4/6"})]}):r})}function d({children:r,className:t="",action:a}){return e.jsxs("div",{className:`mb-6 ${a?"flex items-start justify-between gap-4":""} ${t}`,children:[e.jsx("div",{className:"flex-1",children:r}),a&&e.jsx("div",{className:"flex-shrink-0",children:a})]})}function o({children:r,className:t=""}){return e.jsx("h3",{className:`text-lg font-medium text-ink-900 ${t}`,children:r})}function w({children:r,className:t=""}){return e.jsx("p",{className:`text-sm text-ink-600 mt-1 ${t}`,children:r})}function n({children:r,className:t=""}){return e.jsx("div",{className:t,children:r})}function v({children:r,className:t=""}){return e.jsx("div",{className:`mt-6 pt-6 border-t border-paper-200 flex items-center justify-end gap-3 ${t}`,children:r})}try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"flat"'}]}},width:{defaultValue:{value:"auto"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},hoverable:{defaultValue:{value:"false"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Show loading skeleton instead of content",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="CardHeader",d.__docgenInfo={description:"",displayName:"CardHeader",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"Action element (button, menu, etc.) to display in header",name:"action",required:!1,type:{name:"ReactNode"}}}}}catch{}try{o.displayName="CardTitle",o.__docgenInfo={description:"",displayName:"CardTitle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{w.displayName="CardDescription",w.__docgenInfo={description:"",displayName:"CardDescription",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="CardContent",n.__docgenInfo={description:"",displayName:"CardContent",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="CardFooter",v.__docgenInfo={description:"",displayName:"CardFooter",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Components/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{minWidth:"400px"},children:e.jsx(r,{})})]},p={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(o,{children:"Card Title"})}),e.jsx(n,{children:e.jsx("p",{children:"This is the card content. It can contain any components or text."})})]})},u={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(o,{children:"Confirm Action"})}),e.jsx(n,{children:e.jsx("p",{children:"Are you sure you want to proceed with this action?"})}),e.jsxs(v,{children:[e.jsx(m,{variant:"ghost",children:"Cancel"}),e.jsx(m,{variant:"primary",children:"Confirm"})]})]})},f={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx(A,{className:"h-5 w-5 text-ink-600"}),e.jsx(o,{children:"Settings"})]})}),e.jsx(n,{children:e.jsx("p",{children:"Manage your application settings and preferences."})})]})},h={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(o,{children:"User Account"}),e.jsx(S,{variant:"success",children:"Active"})]})}),e.jsxs(n,{children:[e.jsx("p",{children:"Account status: Active"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Last login: 2 hours ago"})]})]})},x={render:()=>e.jsx(s,{children:e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"0.5rem"},children:"Total Users"}),e.jsx("h3",{style:{fontSize:"2rem",fontWeight:700},children:"1,284"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",marginTop:"0.5rem"},children:[e.jsx(V,{className:"h-4 w-4 text-success-600"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#10b981"},children:"+12.5%"}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:"from last month"})]})]}),e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"0.5rem",backgroundColor:"#eff6ff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(q,{className:"h-6 w-6 text-primary-600"})})]})})})},y={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(o,{children:"Quick Actions"})}),e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(m,{variant:"outline",fullWidth:!0,children:"Create New User"}),e.jsx(m,{variant:"outline",fullWidth:!0,children:"Generate Report"}),e.jsx(m,{variant:"outline",fullWidth:!0,children:"Export Data"})]})})]})},g={render:()=>e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(o,{children:"Login"})}),e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Email"}),e.jsx("input",{type:"email",placeholder:"you@example.com",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Password"}),e.jsx("input",{type:"password",placeholder:"••••••••",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"}})]})]})}),e.jsx(v,{children:e.jsx(m,{variant:"primary",fullWidth:!0,children:"Sign In"})})]})},C={render:()=>e.jsxs(s,{children:[e.jsx("div",{style:{height:"200px",backgroundColor:"#f5f5f4",display:"flex",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem"},children:e.jsx("span",{style:{fontSize:"3rem"},children:"📦"})}),e.jsxs(n,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"0.75rem"},children:[e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600},children:"Product Name"}),e.jsx(S,{variant:"success",children:"In Stock"})]}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1rem"},children:"High-quality product with excellent features and great value."}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"1.5rem",fontWeight:700},children:"$99.99"}),e.jsx(m,{variant:"primary",children:"Add to Cart"})]})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Card Title</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <p>This is the card content. It can contain any components or text.</p>\r
      </CardContent>\r
    </Card>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Confirm Action</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Are you sure you want to proceed with this action?</p>\r
      </CardContent>\r
      <CardFooter>\r
        <Button variant="ghost">Cancel</Button>\r
        <Button variant="primary">Confirm</Button>\r
      </CardFooter>\r
    </Card>
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>\r
          <Settings className="h-5 w-5 text-ink-600" />\r
          <CardTitle>Settings</CardTitle>\r
        </div>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Manage your application settings and preferences.</p>\r
      </CardContent>\r
    </Card>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>\r
          <CardTitle>User Account</CardTitle>\r
          <Badge variant="success">Active</Badge>\r
        </div>\r
      </CardHeader>\r
      <CardContent>\r
        <p>Account status: Active</p>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Last login: 2 hours ago</p>\r
      </CardContent>\r
    </Card>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardContent>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start'
      }}>\r
          <div>\r
            <p style={{
            fontSize: '0.875rem',
            color: '#64748b',
            marginBottom: '0.5rem'
          }}>Total Users</p>\r
            <h3 style={{
            fontSize: '2rem',
            fontWeight: 700
          }}>1,284</h3>\r
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginTop: '0.5rem'
          }}>\r
              <TrendingUp className="h-4 w-4 text-success-600" />\r
              <span style={{
              fontSize: '0.875rem',
              color: '#10b981'
            }}>+12.5%</span>\r
              <span style={{
              fontSize: '0.875rem',
              color: '#64748b'
            }}>from last month</span>\r
            </div>\r
          </div>\r
          <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '0.5rem',
          backgroundColor: '#eff6ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>\r
            <Users className="h-6 w-6 text-primary-600" />\r
          </div>\r
        </div>\r
      </CardContent>\r
    </Card>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Quick Actions</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>\r
          <Button variant="outline" fullWidth>\r
            Create New User\r
          </Button>\r
          <Button variant="outline" fullWidth>\r
            Generate Report\r
          </Button>\r
          <Button variant="outline" fullWidth>\r
            Export Data\r
          </Button>\r
        </div>\r
      </CardContent>\r
    </Card>
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Login</CardTitle>\r
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
              Email\r
            </label>\r
            <input type="email" placeholder="you@example.com" style={{
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
              Password\r
            </label>\r
            <input type="password" placeholder="••••••••" style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            border: '1px solid #e5e5e5',
            borderRadius: '0.375rem',
            fontSize: '0.875rem'
          }} />\r
          </div>\r
        </div>\r
      </CardContent>\r
      <CardFooter>\r
        <Button variant="primary" fullWidth>\r
          Sign In\r
        </Button>\r
      </CardFooter>\r
    </Card>
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <div style={{
      height: '200px',
      backgroundColor: '#f5f5f4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: '0.5rem',
      borderTopRightRadius: '0.5rem'
    }}>\r
        <span style={{
        fontSize: '3rem'
      }}>📦</span>\r
      </div>\r
      <CardContent>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '0.75rem'
      }}>\r
          <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 600
        }}>Product Name</h3>\r
          <Badge variant="success">In Stock</Badge>\r
        </div>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '1rem'
      }}>\r
          High-quality product with excellent features and great value.\r
        </p>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>\r
          <span style={{
          fontSize: '1.5rem',
          fontWeight: 700
        }}>$99.99</span>\r
          <Button variant="primary">Add to Cart</Button>\r
        </div>\r
      </CardContent>\r
    </Card>
}`,...C.parameters?.docs?.source}}};const Q=["Default","WithFooter","WithIcon","WithBadge","StatCard","InteractiveCard","FormCard","ProductCard"];export{p as Default,g as FormCard,y as InteractiveCard,C as ProductCard,x as StatCard,h as WithBadge,u as WithFooter,f as WithIcon,Q as __namedExportsOrder,G as default};
