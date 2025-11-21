import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as L}from"./Card-V4ULwnz8.js";import{B as a}from"./Button-l3GDSzqG.js";import"./Loading-CTK03LK2.js";import"./loader-circle-6oQ-4-QJ.js";import"./createLucideIcon-BHecmdze.js";import"./iframe-B3mi8TDU.js";import"./preload-helper-PPVm8Dsz.js";const o=({children:t,direction:n="vertical",spacing:w="md",align:C="stretch",justify:I="start",wrap:A=!1,className:E=""})=>{const N={vertical:{none:"",xs:"space-y-2",sm:"space-y-3",md:"space-y-6",lg:"space-y-8",xl:"space-y-12"},horizontal:{none:"",xs:"space-x-2",sm:"space-x-3",md:"space-x-6",lg:"space-x-8",xl:"space-x-12"}},R={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},J={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around"};return r.jsx("div",{className:`
        flex
        ${n==="vertical"?"flex-col":"flex-row"}
        ${A?"flex-wrap":""}
        ${N[n][w]}
        ${R[C]}
        ${J[I]}
        ${E}
      `,children:t})};try{o.displayName="Stack",o.__docgenInfo={description:`Stack component for arranging children vertically or horizontally with consistent spacing.

Spacing scale:
- none: 0
- xs: 0.5rem (2)
- sm: 0.75rem (3)
- md: 1.5rem (6)
- lg: 2rem (8)
- xl: 3rem (12)`,displayName:"Stack",props:{children:{defaultValue:null,description:"Content to stack",name:"children",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"vertical"},description:"Direction of stack",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:{value:"md"},description:"Spacing between items",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"lg"'},{value:'"md"'},{value:'"xl"'},{value:'"xs"'}]}},align:{defaultValue:{value:"stretch"},description:"Alignment of items",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},justify:{defaultValue:{value:"start"},description:"Justify content",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'}]}},wrap:{defaultValue:{value:"false"},description:"Enable wrapping (for horizontal stacks)",name:"wrap",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Layout/Stack",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]},spacing:{control:"select",options:["none","xs","sm","md","lg","xl"]},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around"]}}},e=({children:t,color:n="#3b82f6"})=>r.jsx("div",{style:{padding:"1rem",backgroundColor:n,color:"white",borderRadius:"0.375rem",textAlign:"center",fontWeight:500},children:t}),c={render:()=>r.jsxs(o,{direction:"vertical",spacing:"md",children:[r.jsx(e,{children:"Item 1"}),r.jsx(e,{color:"#8b5cf6",children:"Item 2"}),r.jsx(e,{color:"#10b981",children:"Item 3"})]})},i={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",children:[r.jsx(e,{children:"Item 1"}),r.jsx(e,{color:"#8b5cf6",children:"Item 2"}),r.jsx(e,{color:"#10b981",children:"Item 3"})]})},s={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"none",children:[r.jsx(e,{children:"No"}),r.jsx(e,{color:"#8b5cf6",children:"Spacing"}),r.jsx(e,{color:"#10b981",children:"Here"})]})},l={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"xs",children:[r.jsx(e,{children:"XS"}),r.jsx(e,{color:"#8b5cf6",children:"Spacing"})]})},d={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"sm",children:[r.jsx(e,{children:"SM"}),r.jsx(e,{color:"#8b5cf6",children:"Spacing"})]})},m={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"lg",children:[r.jsx(e,{children:"LG"}),r.jsx(e,{color:"#8b5cf6",children:"Spacing"})]})},p={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"xl",children:[r.jsx(e,{children:"XL"}),r.jsx(e,{color:"#8b5cf6",children:"Spacing"})]})},x={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",align:"start",children:[r.jsx(e,{children:"Small"}),r.jsx("div",{style:{padding:"2rem 1rem",backgroundColor:"#8b5cf6",color:"white",borderRadius:"0.375rem"},children:"Tall"}),r.jsx(e,{color:"#10b981",children:"Small"})]})},u={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",align:"center",children:[r.jsx(e,{children:"Small"}),r.jsx("div",{style:{padding:"2rem 1rem",backgroundColor:"#8b5cf6",color:"white",borderRadius:"0.375rem"},children:"Tall"}),r.jsx(e,{color:"#10b981",children:"Small"})]})},h={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",align:"end",children:[r.jsx(e,{children:"Small"}),r.jsx("div",{style:{padding:"2rem 1rem",backgroundColor:"#8b5cf6",color:"white",borderRadius:"0.375rem"},children:"Tall"}),r.jsx(e,{color:"#10b981",children:"Small"})]})},g={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",align:"stretch",style:{height:"150px"},children:[r.jsx(e,{children:"Stretched"}),r.jsx(e,{color:"#8b5cf6",children:"Items"}),r.jsx(e,{color:"#10b981",children:"Equal Height"})]})},S={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"start",style:{width:"100%"},children:[r.jsx(e,{children:"Start"}),r.jsx(e,{color:"#8b5cf6",children:"Aligned"})]})},y={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"center",style:{width:"100%"},children:[r.jsx(e,{children:"Center"}),r.jsx(e,{color:"#8b5cf6",children:"Aligned"})]})},j={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"end",style:{width:"100%"},children:[r.jsx(e,{children:"End"}),r.jsx(e,{color:"#8b5cf6",children:"Aligned"})]})},f={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"between",style:{width:"100%"},children:[r.jsx(e,{children:"Space"}),r.jsx(e,{color:"#8b5cf6",children:"Between"}),r.jsx(e,{color:"#10b981",children:"Items"})]})},B={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"around",style:{width:"100%"},children:[r.jsx(e,{children:"Space"}),r.jsx(e,{color:"#8b5cf6",children:"Around"}),r.jsx(e,{color:"#10b981",children:"Items"})]})},b={render:()=>r.jsxs(o,{direction:"horizontal",spacing:"sm",children:[r.jsx(a,{variant:"primary",children:"Save"}),r.jsx(a,{variant:"secondary",children:"Cancel"}),r.jsx(a,{variant:"ghost",children:"Reset"})]})},v={render:()=>r.jsxs(o,{direction:"vertical",spacing:"lg",style:{maxWidth:"400px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:500},children:"Name"}),r.jsx("input",{type:"text",placeholder:"Enter your name",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem",fontWeight:500},children:"Email"}),r.jsx("input",{type:"email",placeholder:"you@example.com",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem"}})]}),r.jsxs(o,{direction:"horizontal",spacing:"sm",justify:"end",children:[r.jsx(a,{variant:"ghost",children:"Cancel"}),r.jsx(a,{variant:"primary",children:"Submit"})]})]})},k={render:()=>r.jsx(o,{direction:"horizontal",spacing:"md",style:{flexWrap:"wrap"},children:[1,2,3].map(t=>r.jsx(L,{style:{width:"200px"},children:r.jsxs("div",{style:{padding:"1rem"},children:[r.jsxs("h3",{style:{marginBottom:"0.5rem"},children:["Card ",t]}),r.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Card content"})]})},t))})},z={render:()=>r.jsxs(o,{direction:"vertical",spacing:"lg",children:[r.jsxs(o,{direction:"horizontal",spacing:"md",justify:"between",align:"center",children:[r.jsx("h2",{style:{margin:0},children:"Dashboard"}),r.jsx(a,{variant:"primary",children:"New Item"})]}),r.jsxs(o,{direction:"horizontal",spacing:"md",children:[r.jsx(e,{children:"Stat 1"}),r.jsx(e,{color:"#8b5cf6",children:"Stat 2"}),r.jsx(e,{color:"#10b981",children:"Stat 3"})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical" spacing="md">\r
      <Box>Item 1</Box>\r
      <Box color="#8b5cf6">Item 2</Box>\r
      <Box color="#10b981">Item 3</Box>\r
    </Stack>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md">\r
      <Box>Item 1</Box>\r
      <Box color="#8b5cf6">Item 2</Box>\r
      <Box color="#10b981">Item 3</Box>\r
    </Stack>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="none">\r
      <Box>No</Box>\r
      <Box color="#8b5cf6">Spacing</Box>\r
      <Box color="#10b981">Here</Box>\r
    </Stack>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="xs">\r
      <Box>XS</Box>\r
      <Box color="#8b5cf6">Spacing</Box>\r
    </Stack>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="sm">\r
      <Box>SM</Box>\r
      <Box color="#8b5cf6">Spacing</Box>\r
    </Stack>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="lg">\r
      <Box>LG</Box>\r
      <Box color="#8b5cf6">Spacing</Box>\r
    </Stack>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="xl">\r
      <Box>XL</Box>\r
      <Box color="#8b5cf6">Spacing</Box>\r
    </Stack>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" align="start">\r
      <Box>Small</Box>\r
      <div style={{
      padding: '2rem 1rem',
      backgroundColor: '#8b5cf6',
      color: 'white',
      borderRadius: '0.375rem'
    }}>Tall</div>\r
      <Box color="#10b981">Small</Box>\r
    </Stack>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" align="center">\r
      <Box>Small</Box>\r
      <div style={{
      padding: '2rem 1rem',
      backgroundColor: '#8b5cf6',
      color: 'white',
      borderRadius: '0.375rem'
    }}>Tall</div>\r
      <Box color="#10b981">Small</Box>\r
    </Stack>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" align="end">\r
      <Box>Small</Box>\r
      <div style={{
      padding: '2rem 1rem',
      backgroundColor: '#8b5cf6',
      color: 'white',
      borderRadius: '0.375rem'
    }}>Tall</div>\r
      <Box color="#10b981">Small</Box>\r
    </Stack>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" align="stretch" style={{
    height: '150px'
  }}>\r
      <Box>Stretched</Box>\r
      <Box color="#8b5cf6">Items</Box>\r
      <Box color="#10b981">Equal Height</Box>\r
    </Stack>
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" justify="start" style={{
    width: '100%'
  }}>\r
      <Box>Start</Box>\r
      <Box color="#8b5cf6">Aligned</Box>\r
    </Stack>
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" justify="center" style={{
    width: '100%'
  }}>\r
      <Box>Center</Box>\r
      <Box color="#8b5cf6">Aligned</Box>\r
    </Stack>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" justify="end" style={{
    width: '100%'
  }}>\r
      <Box>End</Box>\r
      <Box color="#8b5cf6">Aligned</Box>\r
    </Stack>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" justify="between" style={{
    width: '100%'
  }}>\r
      <Box>Space</Box>\r
      <Box color="#8b5cf6">Between</Box>\r
      <Box color="#10b981">Items</Box>\r
    </Stack>
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" justify="around" style={{
    width: '100%'
  }}>\r
      <Box>Space</Box>\r
      <Box color="#8b5cf6">Around</Box>\r
      <Box color="#10b981">Items</Box>\r
    </Stack>
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="sm">\r
      <Button variant="primary">Save</Button>\r
      <Button variant="secondary">Cancel</Button>\r
      <Button variant="ghost">Reset</Button>\r
    </Stack>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical" spacing="lg" style={{
    maxWidth: '400px'
  }}>\r
      <div>\r
        <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500
      }}>\r
          Name\r
        </label>\r
        <input type="text" placeholder="Enter your name" style={{
        width: '100%',
        padding: '0.5rem 0.75rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem'
      }} />\r
      </div>\r
      <div>\r
        <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: 500
      }}>\r
          Email\r
        </label>\r
        <input type="email" placeholder="you@example.com" style={{
        width: '100%',
        padding: '0.5rem 0.75rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.375rem'
      }} />\r
      </div>\r
      <Stack direction="horizontal" spacing="sm" justify="end">\r
        <Button variant="ghost">Cancel</Button>\r
        <Button variant="primary">Submit</Button>\r
      </Stack>\r
    </Stack>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="md" style={{
    flexWrap: 'wrap'
  }}>\r
      {[1, 2, 3].map(i => <Card key={i} style={{
      width: '200px'
    }}>\r
          <div style={{
        padding: '1rem'
      }}>\r
            <h3 style={{
          marginBottom: '0.5rem'
        }}>Card {i}</h3>\r
            <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>Card content</p>\r
          </div>\r
        </Card>)}\r
    </Stack>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical" spacing="lg">\r
      <Stack direction="horizontal" spacing="md" justify="between" align="center">\r
        <h2 style={{
        margin: 0
      }}>Dashboard</h2>\r
        <Button variant="primary">New Item</Button>\r
      </Stack>\r
      <Stack direction="horizontal" spacing="md">\r
        <Box>Stat 1</Box>\r
        <Box color="#8b5cf6">Stat 2</Box>\r
        <Box color="#10b981">Stat 3</Box>\r
      </Stack>\r
    </Stack>
}`,...z.parameters?.docs?.source}}};const D=["Vertical","Horizontal","NoSpacing","ExtraSmallSpacing","SmallSpacing","LargeSpacing","ExtraLargeSpacing","AlignStart","AlignCenter","AlignEnd","AlignStretch","JustifyStart","JustifyCenter","JustifyEnd","JustifyBetween","JustifyAround","ButtonGroup","FormLayout","CardGrid","NestedStacks"];export{u as AlignCenter,h as AlignEnd,x as AlignStart,g as AlignStretch,b as ButtonGroup,k as CardGrid,p as ExtraLargeSpacing,l as ExtraSmallSpacing,v as FormLayout,i as Horizontal,B as JustifyAround,f as JustifyBetween,y as JustifyCenter,j as JustifyEnd,S as JustifyStart,m as LargeSpacing,z as NestedStacks,s as NoSpacing,d as SmallSpacing,c as Vertical,D as __namedExportsOrder,X as default};
