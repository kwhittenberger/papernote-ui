import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-C8OopBmF.js";import{C as z}from"./chevron-left--ufFHcrN.js";import{C as M}from"./chevron-right-BqdpH8-a.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-D9MvcA__.js";function s({currentPage:t,totalPages:r,onPageChange:n,showPageNumbers:c=!0,maxPageNumbers:g=5,showPageJump:m=!1}){const[i,I]=o.useState(""),N=c?(()=>{const a=[],l=Math.floor(g/2);let d=Math.max(1,t-l),u=Math.min(r,t+l);t<=l&&(u=Math.min(g,r)),t>r-l&&(d=Math.max(1,r-g+1)),d>1&&(a.push(1),d>2&&a.push("..."));for(let j=d;j<=u;j++)a.push(j);return u<r&&(u<r-1&&a.push("..."),a.push(r)),a})():[],w=a=>{a.preventDefault();const l=parseInt(i,10);!isNaN(l)&&l>=1&&l<=r&&(n(l),I(""))};return e.jsxs("nav",{className:"flex items-center justify-center gap-2","aria-label":"Pagination",children:[e.jsxs("button",{onClick:()=>n(t-1),disabled:t===1,className:"inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs hover:shadow-sm","aria-label":"Previous page",children:[e.jsx(z,{className:"h-4 w-4"}),e.jsx("span",{className:"hidden sm:inline",children:"Previous"})]}),c&&e.jsx("div",{className:"flex items-center gap-1",children:N.map((a,l)=>{if(a==="...")return e.jsx("span",{className:"px-3 py-2 text-ink-500",children:"..."},`ellipsis-${l}`);const d=a,u=d===t;return e.jsx("button",{onClick:()=>n(d),className:`px-3 py-2 text-sm font-medium rounded-lg transition-all ${u?"bg-accent-500 text-white shadow-sm":"text-ink-700 bg-white border border-paper-300 hover:bg-paper-50 hover:border-paper-400"}`,"aria-label":`Page ${d}`,"aria-current":u?"page":void 0,children:d},d)})}),e.jsxs("button",{onClick:()=>n(t+1),disabled:t===r,className:"inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-700 bg-white border border-paper-300 rounded-lg hover:bg-paper-50 hover:border-paper-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs hover:shadow-sm","aria-label":"Next page",children:[e.jsx("span",{className:"hidden sm:inline",children:"Next"}),e.jsx(M,{className:"h-4 w-4"})]}),m&&e.jsxs("form",{onSubmit:w,className:"flex items-center gap-2 ml-2",children:[e.jsx("span",{className:"text-sm text-ink-600 hidden sm:inline",children:"Go to:"}),e.jsx("input",{type:"number",min:"1",max:r,value:i,onChange:a=>I(a.target.value),placeholder:"#",className:"w-16 px-2 py-1.5 text-sm text-center border border-paper-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400","aria-label":"Jump to page"}),e.jsx("button",{type:"submit",disabled:!i,className:"px-3 py-1.5 text-sm font-medium text-white bg-accent-500 rounded-lg hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all",children:"Go"})]})]})}try{s.displayName="Pagination",s.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},showPageNumbers:{defaultValue:{value:"true"},description:"",name:"showPageNumbers",required:!1,type:{name:"boolean"}},maxPageNumbers:{defaultValue:{value:"5"},description:"",name:"maxPageNumbers",required:!1,type:{name:"number"}},showPageJump:{defaultValue:{value:"false"},description:"Show page jump input field",name:"showPageJump",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"Navigation/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","simple"]}}},p={render:()=>{const[t,r]=o.useState(1);return e.jsx(s,{currentPage:t,totalPages:10,onPageChange:r})}},P={render:()=>{const[t,r]=o.useState(1);return e.jsx(s,{currentPage:t,totalPages:100,onPageChange:r})}},h={render:()=>{const[t,r]=o.useState(5);return e.jsx(s,{currentPage:t,totalPages:10,onPageChange:r})}},x={render:()=>{const[t,r]=o.useState(10);return e.jsx(s,{currentPage:t,totalPages:10,onPageChange:r})}},f={render:()=>{const[t,r]=o.useState(1);return e.jsx(s,{currentPage:t,totalPages:3,onPageChange:r})}},b={render:()=>{const[t,r]=o.useState(1);return e.jsx(s,{currentPage:t,totalPages:1,onPageChange:r})}},y={render:()=>{const[t,r]=o.useState(5);return e.jsx(s,{currentPage:t,totalPages:10,onPageChange:r,variant:"simple"})}},C={render:()=>{const[t,r]=o.useState(1),n=20,c=187,g=Math.ceil(c/n),m=(t-1)*n+1,i=Math.min(t*n,c);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Showing ",m,"-",i," of ",c," results"]}),e.jsx(s,{currentPage:t,totalPages:g,onPageChange:r})]})}},S={render:()=>{const[t,r]=o.useState(1),[n,c]=o.useState(20),m=Math.ceil(187/n);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("label",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Items per page:"}),e.jsxs("select",{value:n,onChange:i=>{c(Number(i.target.value)),r(1)},style:{padding:"0.25rem 0.5rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"},children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:50,children:"50"}),e.jsx("option",{value:100,children:"100"})]})]}),e.jsx(s,{currentPage:t,totalPages:m,onPageChange:r})]})}},v={render:()=>{const[t,r]=o.useState(1),n=5,g=Math.ceil(47/n);return e.jsxs("div",{style:{width:"600px",border:"1px solid #e5e5e5",borderRadius:"0.5rem",overflow:"hidden"},children:[e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f5f5f4",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontSize:"0.875rem",fontWeight:600},children:"Name"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontSize:"0.875rem",fontWeight:600},children:"Email"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontSize:"0.875rem",fontWeight:600},children:"Status"})]})}),e.jsx("tbody",{children:Array.from({length:n}).map((m,i)=>e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsxs("td",{style:{padding:"0.75rem",fontSize:"0.875rem"},children:["User ",(t-1)*n+i+1]}),e.jsxs("td",{style:{padding:"0.75rem",fontSize:"0.875rem",color:"#64748b"},children:["user",i+1,"@example.com"]}),e.jsx("td",{style:{padding:"0.75rem",fontSize:"0.875rem"},children:e.jsx("span",{style:{padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",backgroundColor:"#dcfce7",color:"#166534"},children:"Active"})})]},i))})]}),e.jsx("div",{style:{padding:"1rem",borderTop:"1px solid #e5e5e5",display:"flex",justifyContent:"center"},children:e.jsx(s,{currentPage:t,totalPages:g,onPageChange:r})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
  }
}`,...p.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination currentPage={currentPage} totalPages={100} onPageChange={setCurrentPage} />;
  }
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);
    return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination currentPage={currentPage} totalPages={3} onPageChange={setCurrentPage} />;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination currentPage={currentPage} totalPages={1} onPageChange={setCurrentPage} />;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} variant="simple" />;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalItems = 187;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Showing {startItem}-{endItem} of {totalItems} results\r
        </div>\r
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const totalItems = 187;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>\r
          <label style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>Items per page:</label>\r
          <select value={itemsPerPage} onChange={e => {
          setItemsPerPage(Number(e.target.value));
          setCurrentPage(1);
        }} style={{
          padding: '0.25rem 0.5rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          fontSize: '0.875rem'
        }}>\r
            <option value={10}>10</option>\r
            <option value={20}>20</option>\r
            <option value={50}>50</option>\r
            <option value={100}>100</option>\r
          </select>\r
        </div>\r
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return <div style={{
      width: '600px',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }}>\r
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>\r
          <thead>\r
            <tr style={{
            backgroundColor: '#f5f5f4',
            borderBottom: '1px solid #e5e5e5'
          }}>\r
              <th style={{
              padding: '0.75rem',
              textAlign: 'left',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>Name</th>\r
              <th style={{
              padding: '0.75rem',
              textAlign: 'left',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>Email</th>\r
              <th style={{
              padding: '0.75rem',
              textAlign: 'left',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>Status</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {Array.from({
            length: itemsPerPage
          }).map((_, i) => <tr key={i} style={{
            borderBottom: '1px solid #e5e5e5'
          }}>\r
                <td style={{
              padding: '0.75rem',
              fontSize: '0.875rem'
            }}>User {(currentPage - 1) * itemsPerPage + i + 1}</td>\r
                <td style={{
              padding: '0.75rem',
              fontSize: '0.875rem',
              color: '#64748b'
            }}>user{i + 1}@example.com</td>\r
                <td style={{
              padding: '0.75rem',
              fontSize: '0.875rem'
            }}>\r
                  <span style={{
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                backgroundColor: '#dcfce7',
                color: '#166534'
              }}>\r
                    Active\r
                  </span>\r
                </td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
        <div style={{
        padding: '1rem',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        justifyContent: 'center'
      }}>\r
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />\r
        </div>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const E=["Default","ManyPages","MiddlePage","LastPage","FewPages","SinglePage","SimpleVariant","WithPageInfo","WithItemsPerPage","InTable"];export{p as Default,f as FewPages,v as InTable,x as LastPage,P as ManyPages,h as MiddlePage,y as SimpleVariant,b as SinglePage,S as WithItemsPerPage,C as WithPageInfo,E as __namedExportsOrder,q as default};
