import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-B3mi8TDU.js";import{S}from"./settings-CtLpOA8O.js";import{C as A}from"./chevron-down-LubKkaQ-.js";import{C as W}from"./chevron-up-eQWjd1wv.js";import{S as H}from"./StatusBar-Cj40kkJ0.js";import{C as a,a as y,b as C,c as l}from"./Card-V4ULwnz8.js";import{B as I}from"./Button-l3GDSzqG.js";import{S as L}from"./save-DiTIZ5UD.js";import{D as T}from"./download-CVoWMHBj.js";import{c as d}from"./createLucideIcon-BHecmdze.js";import{F}from"./file-text-Cc9WN1ty.js";import{I as U}from"./image-Cxp__uIM.js";import"./preload-helper-PPVm8Dsz.js";import"./x-Cnr4OZhu.js";import"./info-QZIFEd9F.js";import"./triangle-alert-FS4IY-Fg.js";import"./circle-alert-B6UEkZ9R.js";import"./circle-check-big-BJiZfPxt.js";import"./Loading-CTK03LK2.js";import"./loader-circle-6oQ-4-QJ.js";const $=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],z=d("arrow-up-narrow-wide",$);const P=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],_=d("copy",P);const R=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],D=d("funnel",R);const Y=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],E=d("trash-2",Y);const O=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],q=d("upload",O),N=({sections:r,className:n="",defaultCollapsed:f=!1,onCollapseChange:j})=>{const[i,v]=w.useState(f),[c,M]=w.useState(new Set(r.filter(o=>o.defaultExpanded).map(o=>o.id))),B=()=>{const o=!i;v(o),j?.(o)},V=o=>{const s=new Set(c);s.has(o)?s.delete(o):s.add(o),M(s)};return i?e.jsx("div",{className:`bg-white border-b border-gray-200 shadow-sm ${n}`,children:e.jsxs("div",{className:"px-4 py-2 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[e.jsx(S,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"Controls"})]}),e.jsxs("button",{onClick:B,className:"flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors",children:[e.jsx("span",{className:"text-xs",children:"Expand"}),e.jsx(A,{className:"h-4 w-4"})]})]})}):e.jsxs("div",{className:`bg-white border-b border-gray-200 shadow-sm ${n}`,children:[e.jsxs("div",{className:"px-4 py-3 flex items-center justify-between border-b border-gray-100",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-gray-700",children:[e.jsx(S,{className:"h-5 w-5"}),e.jsx("span",{className:"text-sm font-semibold",children:"Page Controls"})]}),e.jsxs("button",{onClick:B,className:"flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors",children:[e.jsx("span",{className:"text-xs",children:"Collapse"}),e.jsx(W,{className:"h-4 w-4"})]})]}),e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{className:"space-y-3",children:r.map(o=>{const s=c.has(o.id);return e.jsxs("div",{className:"border border-gray-200 rounded-lg",children:[e.jsxs("button",{onClick:()=>V(o.id),className:"w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-t-lg",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[o.icon,e.jsx("span",{className:"text-sm font-medium text-gray-700",children:o.title})]}),s?e.jsx(W,{className:"h-4 w-4 text-gray-500"}):e.jsx(A,{className:"h-4 w-4 text-gray-500"})]}),s&&e.jsx("div",{className:"px-3 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg",children:o.content})]},o.id)})})})]})};try{N.displayName="ExpandableToolbar",N.__docgenInfo={description:"",displayName:"ExpandableToolbar",props:{sections:{defaultValue:null,description:"",name:"sections",required:!0,type:{name:"ToolbarSection[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onCollapseChange:{defaultValue:null,description:"",name:"onCollapseChange",required:!1,type:{name:"((collapsed: boolean) => void)"}}}}}catch{}const t=({children:r,toolbarSections:n=[],className:f="",showToolbar:j=!0,showStatusBar:i=!0,toolbarCollapsed:v=!1,onToolbarCollapseChange:c})=>e.jsxs("div",{className:`min-h-screen bg-paper-50 ${f}`,children:[j&&n.length>0&&e.jsx(N,{sections:n,defaultCollapsed:v,onCollapseChange:c}),e.jsx("main",{className:`${i?"pb-20":""}`,children:r}),i&&e.jsx(H,{})]});try{t.displayName="AppLayout",t.__docgenInfo={description:"",displayName:"AppLayout",props:{toolbarSections:{defaultValue:{value:"[]"},description:"",name:"toolbarSections",required:!1,type:{name:"ToolbarSection[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},showToolbar:{defaultValue:{value:"true"},description:"",name:"showToolbar",required:!1,type:{name:"boolean"}},showStatusBar:{defaultValue:{value:"true"},description:"",name:"showStatusBar",required:!1,type:{name:"boolean"}},toolbarCollapsed:{defaultValue:{value:"false"},description:"",name:"toolbarCollapsed",required:!1,type:{name:"boolean"}},onToolbarCollapseChange:{defaultValue:null,description:"",name:"onToolbarCollapseChange",required:!1,type:{name:"((collapsed: boolean) => void)"}}}}}catch{}const xe={title:"Layout/AppLayout",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},k=[{id:"file",label:"File",items:[{id:"save",label:"Save",icon:e.jsx(L,{className:"h-4 w-4"}),onClick:()=>console.log("Save")},{id:"download",label:"Download",icon:e.jsx(T,{className:"h-4 w-4"}),onClick:()=>console.log("Download")},{id:"upload",label:"Upload",icon:e.jsx(q,{className:"h-4 w-4"}),onClick:()=>console.log("Upload")}]},{id:"edit",label:"Edit",items:[{id:"copy",label:"Copy",icon:e.jsx(_,{className:"h-4 w-4"}),onClick:()=>console.log("Copy")},{id:"delete",label:"Delete",icon:e.jsx(E,{className:"h-4 w-4"}),onClick:()=>console.log("Delete")}]},{id:"view",label:"View",items:[{id:"filter",label:"Filter",icon:e.jsx(D,{className:"h-4 w-4"}),onClick:()=>console.log("Filter")},{id:"sort",label:"Sort",icon:e.jsx(z,{className:"h-4 w-4"}),onClick:()=>console.log("Sort")}]}],m={render:()=>e.jsx(t,{toolbarSections:k,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Application Layout"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"This layout includes an expandable toolbar and status bar"}),e.jsxs(a,{children:[e.jsx(y,{children:e.jsx(C,{children:"Content Area"})}),e.jsx(l,{children:e.jsx("p",{children:"Your application content goes here"})})]})]})})},p={render:()=>e.jsx(t,{showToolbar:!1,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"No Toolbar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Layout without the toolbar, only status bar"}),e.jsx(a,{children:e.jsx(l,{children:e.jsx("p",{children:"Content without toolbar above"})})})]})})},h={render:()=>e.jsx(t,{toolbarSections:k,showStatusBar:!1,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"No Status Bar"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Layout with toolbar but without status bar at bottom"}),e.jsx(a,{children:e.jsx(l,{children:e.jsx("p",{children:"Content without status bar below"})})})]})})},u={render:()=>e.jsx(t,{showToolbar:!1,showStatusBar:!1,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Minimal Layout"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"No toolbar or status bar - just the content"}),e.jsx(a,{children:e.jsx(l,{children:e.jsx("p",{children:"Clean, minimal layout for focused content"})})})]})})},x={render:()=>{const[r,n]=w.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{style:{padding:"1rem",backgroundColor:"#eff6ff",borderBottom:"1px solid #e5e5e5"},children:e.jsxs(I,{onClick:()=>n(!r),size:"sm",children:[r?"Expand":"Collapse"," Toolbar"]})}),e.jsx(t,{toolbarSections:k,toolbarCollapsed:r,onToolbarCollapseChange:n,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"},children:"Controlled Toolbar State"}),e.jsxs("p",{style:{color:"#64748b",marginBottom:"2rem"},children:["Toolbar collapse state: ",r?"collapsed":"expanded"]}),e.jsx(a,{children:e.jsx(l,{children:e.jsx("p",{children:"The toolbar state is controlled externally"})})})]})})]})}},g={render:()=>{const r=[{id:"file",label:"File",items:[{id:"new",label:"New",icon:e.jsx(F,{className:"h-4 w-4"}),onClick:()=>console.log("New")},{id:"save",label:"Save",icon:e.jsx(L,{className:"h-4 w-4"}),onClick:()=>console.log("Save"),shortcut:"Ctrl+S"},{id:"export",label:"Export",icon:e.jsx(T,{className:"h-4 w-4"}),onClick:()=>console.log("Export")}]},{id:"edit",label:"Edit",items:[{id:"copy",label:"Copy",icon:e.jsx(_,{className:"h-4 w-4"}),onClick:()=>console.log("Copy"),shortcut:"Ctrl+C"},{id:"delete",label:"Delete",icon:e.jsx(E,{className:"h-4 w-4"}),onClick:()=>console.log("Delete")}]},{id:"insert",label:"Insert",items:[{id:"image",label:"Image",icon:e.jsx(U,{className:"h-4 w-4"}),onClick:()=>console.log("Insert image")}]}];return e.jsx(t,{toolbarSections:r,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"900px",margin:"0 auto"},children:[e.jsx("div",{style:{marginBottom:"2rem"},children:e.jsx("input",{type:"text",placeholder:"Document Title",style:{width:"100%",fontSize:"2rem",fontWeight:700,border:"none",outline:"none",backgroundColor:"transparent",marginBottom:"1rem"},defaultValue:"Untitled Document"})}),e.jsx(a,{children:e.jsx(l,{children:e.jsxs("div",{style:{minHeight:"400px",fontSize:"1rem",lineHeight:1.7},children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})})})]})})}},b={render:()=>{const r=[{id:"actions",label:"Actions",items:[{id:"import",label:"Import",icon:e.jsx(q,{className:"h-4 w-4"}),onClick:()=>console.log("Import")},{id:"export",label:"Export",icon:e.jsx(T,{className:"h-4 w-4"}),onClick:()=>console.log("Export")}]},{id:"view",label:"View",items:[{id:"filter",label:"Filter",icon:e.jsx(D,{className:"h-4 w-4"}),onClick:()=>console.log("Filter")},{id:"sort",label:"Sort",icon:e.jsx(z,{className:"h-4 w-4"}),onClick:()=>console.log("Sort")}]},{id:"settings",label:"Settings",items:[{id:"preferences",label:"Preferences",icon:e.jsx(S,{className:"h-4 w-4"}),onClick:()=>console.log("Preferences")}]}];return e.jsx(t,{toolbarSections:r,children:e.jsxs("div",{style:{padding:"2rem",maxWidth:"1400px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"},children:"Data Management"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"View and manage your data"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},children:[e.jsxs(a,{children:[e.jsx(y,{children:e.jsx(C,{children:"Records"})}),e.jsxs(l,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#3b82f6"},children:"1,234"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Total records"})]})]}),e.jsxs(a,{children:[e.jsx(y,{children:e.jsx(C,{children:"Active"})}),e.jsxs(l,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#10b981"},children:"987"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Active items"})]})]}),e.jsxs(a,{children:[e.jsx(y,{children:e.jsx(C,{children:"Archived"})}),e.jsxs(l,{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:700,color:"#64748b"},children:"247"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Archived items"})]})]})]})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <AppLayout toolbarSections={sampleToolbarSections}>\r
      <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>\r
        <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1rem'
      }}>\r
          Application Layout\r
        </h1>\r
        <p style={{
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          This layout includes an expandable toolbar and status bar\r
        </p>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Content Area</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            <p>Your application content goes here</p>\r
          </CardContent>\r
        </Card>\r
      </div>\r
    </AppLayout>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AppLayout showToolbar={false}>\r
      <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>\r
        <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1rem'
      }}>\r
          No Toolbar\r
        </h1>\r
        <p style={{
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          Layout without the toolbar, only status bar\r
        </p>\r
        <Card>\r
          <CardContent>\r
            <p>Content without toolbar above</p>\r
          </CardContent>\r
        </Card>\r
      </div>\r
    </AppLayout>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AppLayout toolbarSections={sampleToolbarSections} showStatusBar={false}>\r
      <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>\r
        <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1rem'
      }}>\r
          No Status Bar\r
        </h1>\r
        <p style={{
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          Layout with toolbar but without status bar at bottom\r
        </p>\r
        <Card>\r
          <CardContent>\r
            <p>Content without status bar below</p>\r
          </CardContent>\r
        </Card>\r
      </div>\r
    </AppLayout>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AppLayout showToolbar={false} showStatusBar={false}>\r
      <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>\r
        <h1 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '1rem'
      }}>\r
          Minimal Layout\r
        </h1>\r
        <p style={{
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          No toolbar or status bar - just the content\r
        </p>\r
        <Card>\r
          <CardContent>\r
            <p>Clean, minimal layout for focused content</p>\r
          </CardContent>\r
        </Card>\r
      </div>\r
    </AppLayout>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <div>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderBottom: '1px solid #e5e5e5'
      }}>\r
          <Button onClick={() => setCollapsed(!collapsed)} size="sm">\r
            {collapsed ? 'Expand' : 'Collapse'} Toolbar\r
          </Button>\r
        </div>\r
        <AppLayout toolbarSections={sampleToolbarSections} toolbarCollapsed={collapsed} onToolbarCollapseChange={setCollapsed}>\r
          <div style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>\r
            <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>\r
              Controlled Toolbar State\r
            </h1>\r
            <p style={{
            color: '#64748b',
            marginBottom: '2rem'
          }}>\r
              Toolbar collapse state: {collapsed ? 'collapsed' : 'expanded'}\r
            </p>\r
            <Card>\r
              <CardContent>\r
                <p>The toolbar state is controlled externally</p>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </AppLayout>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const editorToolbar: ToolbarSection[] = [{
      id: 'file',
      label: 'File',
      items: [{
        id: 'new',
        label: 'New',
        icon: <FileText className="h-4 w-4" />,
        onClick: () => console.log('New')
      }, {
        id: 'save',
        label: 'Save',
        icon: <Save className="h-4 w-4" />,
        onClick: () => console.log('Save'),
        shortcut: 'Ctrl+S'
      }, {
        id: 'export',
        label: 'Export',
        icon: <Download className="h-4 w-4" />,
        onClick: () => console.log('Export')
      }]
    }, {
      id: 'edit',
      label: 'Edit',
      items: [{
        id: 'copy',
        label: 'Copy',
        icon: <Copy className="h-4 w-4" />,
        onClick: () => console.log('Copy'),
        shortcut: 'Ctrl+C'
      }, {
        id: 'delete',
        label: 'Delete',
        icon: <Trash2 className="h-4 w-4" />,
        onClick: () => console.log('Delete')
      }]
    }, {
      id: 'insert',
      label: 'Insert',
      items: [{
        id: 'image',
        label: 'Image',
        icon: <Image className="h-4 w-4" />,
        onClick: () => console.log('Insert image')
      }]
    }];
    return <AppLayout toolbarSections={editorToolbar}>\r
        <div style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>\r
          <div style={{
          marginBottom: '2rem'
        }}>\r
            <input type="text" placeholder="Document Title" style={{
            width: '100%',
            fontSize: '2rem',
            fontWeight: 700,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            marginBottom: '1rem'
          }} defaultValue="Untitled Document" />\r
          </div>\r
          <Card>\r
            <CardContent>\r
              <div style={{
              minHeight: '400px',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>\r
                <p style={{
                marginBottom: '1rem'
              }}>\r
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r
                </p>\r
                <p style={{
                marginBottom: '1rem'
              }}>\r
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
                </p>\r
                <p>\r
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r
                </p>\r
              </div>\r
            </CardContent>\r
          </Card>\r
        </div>\r
      </AppLayout>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const dataToolbar: ToolbarSection[] = [{
      id: 'actions',
      label: 'Actions',
      items: [{
        id: 'import',
        label: 'Import',
        icon: <Upload className="h-4 w-4" />,
        onClick: () => console.log('Import')
      }, {
        id: 'export',
        label: 'Export',
        icon: <Download className="h-4 w-4" />,
        onClick: () => console.log('Export')
      }]
    }, {
      id: 'view',
      label: 'View',
      items: [{
        id: 'filter',
        label: 'Filter',
        icon: <Filter className="h-4 w-4" />,
        onClick: () => console.log('Filter')
      }, {
        id: 'sort',
        label: 'Sort',
        icon: <SortAsc className="h-4 w-4" />,
        onClick: () => console.log('Sort')
      }]
    }, {
      id: 'settings',
      label: 'Settings',
      items: [{
        id: 'preferences',
        label: 'Preferences',
        icon: <Settings className="h-4 w-4" />,
        onClick: () => console.log('Preferences')
      }]
    }];
    return <AppLayout toolbarSections={dataToolbar}>\r
        <div style={{
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>\r
          <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>\r
            Data Management\r
          </h1>\r
          <p style={{
          color: '#64748b',
          marginBottom: '2rem'
        }}>\r
            View and manage your data\r
          </p>\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>Records</CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#3b82f6'
              }}>1,234</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>Total records</div>\r
              </CardContent>\r
            </Card>\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>Active</CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#10b981'
              }}>987</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>Active items</div>\r
              </CardContent>\r
            </Card>\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>Archived</CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#64748b'
              }}>247</div>\r
                <div style={{
                fontSize: '0.875rem',
                color: '#64748b'
              }}>Archived items</div>\r
              </CardContent>\r
            </Card>\r
          </div>\r
        </div>\r
      </AppLayout>;
  }
}`,...b.parameters?.docs?.source}}};const ge=["Default","WithoutToolbar","WithoutStatusBar","MinimalLayout","ControlledToolbar","DocumentEditor","DataManagementApp"];export{x as ControlledToolbar,b as DataManagementApp,m as Default,g as DocumentEditor,u as MinimalLayout,h as WithoutStatusBar,p as WithoutToolbar,ge as __namedExportsOrder,xe as default};
