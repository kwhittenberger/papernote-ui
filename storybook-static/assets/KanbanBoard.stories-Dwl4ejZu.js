import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DvQbZzpK.js";import{E}from"./ellipsis-vertical-Bx57YI0e.js";import{P as O}from"./plus-gHVaozHf.js";import{U as V}from"./user-DCrmKZtR.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-3pObC86R.js";function s({columns:r,onChange:i,onCardClick:t,onAddCard:k,onColumnMenu:B,renderCard:D,showAddButton:N=!0,className:A=""}){const[S,j]=a.useState(null),[I,w]=a.useState(null),P=(n,d)=>{j({card:n,columnId:d})},T=(n,d)=>{n.preventDefault(),w(d)},W=()=>{w(null)},z=(n,d)=>{if(n.preventDefault(),w(null),!S)return;const{card:c,columnId:o}=S;if(o===d){j(null);return}const L=r.map(l=>l.id===o?{...l,cards:l.cards.filter(M=>M.id!==c.id)}:l.id===d?{...l,cards:[...l.cards,c]}:l);i(L),j(null)},R={low:"bg-success-100 text-success-700",medium:"bg-warning-100 text-warning-700",high:"bg-error-100 text-error-700"},K=n=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("h4",{className:"text-sm font-semibold text-ink-900 flex-1",children:n.title}),n.priority&&e.jsx("span",{className:`
              px-2 py-0.5 text-xs font-medium rounded
              ${R[n.priority]}
            `,children:n.priority})]}),n.description&&e.jsx("p",{className:"text-xs text-ink-600 line-clamp-2",children:n.description}),n.tags&&n.tags.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1",children:n.tags.map((d,c)=>e.jsx("span",{className:"px-2 py-0.5 text-xs bg-paper-100 text-ink-700 rounded",children:d},c))}),n.assignee&&e.jsxs("div",{className:"flex items-center gap-2 pt-2 border-t border-paper-200",children:[e.jsx("div",{className:"h-6 w-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-xs font-semibold",children:n.assignee.charAt(0).toUpperCase()}),e.jsx("span",{className:"text-xs text-ink-600",children:n.assignee})]})]});return e.jsx("div",{className:`flex gap-4 overflow-x-auto pb-4 ${A}`,children:r.map(n=>{const d=n.limit&&n.cards.length>=n.limit,c=I===n.id;return e.jsxs("div",{className:"flex-shrink-0 w-80 bg-paper-50 rounded-lg",onDragOver:o=>T(o,n.id),onDragLeave:W,onDrop:o=>z(o,n.id),children:[e.jsxs("div",{className:"p-4 border-b border-paper-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[n.color&&e.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:n.color}}),e.jsx("h3",{className:"text-sm font-semibold text-ink-900",children:n.title}),e.jsxs("span",{className:"text-xs text-ink-500 font-medium",children:[n.cards.length,n.limit&&` / ${n.limit}`]})]}),B&&e.jsx("button",{onClick:()=>B(n.id),className:"p-1 hover:bg-paper-200 rounded transition-colors","aria-label":"Column menu",children:e.jsx(E,{className:"h-4 w-4 text-ink-600"})})]}),d&&e.jsx("p",{className:"text-xs text-warning-600 mt-1",children:"Card limit reached"})]}),e.jsxs("div",{className:`
                p-3 space-y-3 min-h-[200px] max-h-[600px] overflow-y-auto
                transition-colors
                ${c?"bg-accent-50/50":""}
              `,children:[n.cards.map(o=>e.jsx("div",{draggable:!0,onDragStart:()=>P(o,n.id),onClick:()=>t?.(o,n.id),className:`
                    p-3 bg-white rounded-lg border border-paper-200 shadow-sm
                    cursor-move hover:shadow-md transition-all
                    ${S?.card.id===o.id?"opacity-50":""}
                  `,children:D?D(o,n.id):K(o)},o.id)),n.cards.length===0&&e.jsx("div",{className:"flex items-center justify-center h-32 text-sm text-ink-500",children:"No cards"})]}),N&&k&&e.jsx("div",{className:"p-3 border-t border-paper-200",children:e.jsxs("button",{onClick:()=>k(n.id),disabled:!!d,className:`
                    w-full flex items-center justify-center gap-2 px-3 py-2
                    text-sm font-medium text-ink-600
                    bg-white border-2 border-dashed border-paper-300 rounded-lg
                    hover:bg-paper-50 hover:border-accent-400 hover:text-accent-600
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-all
                  `,children:[e.jsx(O,{className:"h-4 w-4"}),"Add card"]})})]},n.id)})})}try{s.displayName="KanbanBoard",s.__docgenInfo={description:"",displayName:"KanbanBoard",props:{columns:{defaultValue:null,description:"Columns to display",name:"columns",required:!0,type:{name:"KanbanColumn[]"}},onChange:{defaultValue:null,description:"Callback when columns change",name:"onChange",required:!0,type:{name:"(columns: KanbanColumn[]) => void"}},onCardClick:{defaultValue:null,description:"Callback when card is clicked",name:"onCardClick",required:!1,type:{name:"(card: KanbanCard, columnId: string) => void"}},onAddCard:{defaultValue:null,description:"Callback when add button is clicked",name:"onAddCard",required:!1,type:{name:"(columnId: string) => void"}},onColumnMenu:{defaultValue:null,description:"Callback when column menu is clicked",name:"onColumnMenu",required:!1,type:{name:"(columnId: string) => void"}},renderCard:{defaultValue:null,description:"Custom card renderer",name:"renderCard",required:!1,type:{name:"(card: KanbanCard, columnId: string) => ReactNode"}},showAddButton:{defaultValue:{value:"true"},description:"Show add card button",name:"showAddButton",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Display/KanbanBoard",component:s,parameters:{layout:"padded"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{minHeight:"600px",padding:"2rem"},children:e.jsx(r,{})})]},m=[{id:"todo",title:"To Do",color:"#94a3b8",cards:[{id:"1",title:"Design new homepage",description:"Create mockups and wireframes for the new homepage design",tags:["design","ui"],assignee:"John Doe",priority:"high"},{id:"2",title:"Update documentation",description:"Review and update API documentation",tags:["docs"],assignee:"Jane Smith",priority:"low"}]},{id:"in-progress",title:"In Progress",color:"#3b82f6",limit:3,cards:[{id:"3",title:"Implement authentication",description:"Add OAuth 2.0 authentication flow",tags:["backend","security"],assignee:"Bob Johnson",priority:"high"}]},{id:"review",title:"Review",color:"#f59e0b",cards:[{id:"4",title:"Code review for PR #123",tags:["review"],assignee:"Alice Williams",priority:"medium"}]},{id:"done",title:"Done",color:"#10b981",cards:[{id:"5",title:"Setup CI/CD pipeline",description:"Configure GitHub Actions for automated testing",tags:["devops","ci/cd"],assignee:"Charlie Brown"}]}],u={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i})}},p={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i,onCardClick:t=>alert(`Clicked: ${t.title}`)})}},g={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i,onAddCard:t=>alert(`Add card to column: ${t}`),showAddButton:!0})}},h={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i,onColumnMenu:t=>alert(`Column menu: ${t}`)})}},b={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i,showAddButton:!1})}},f={render:()=>{const[r,i]=a.useState(m);return e.jsx(s,{columns:r,onChange:i,renderCard:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx("h4",{style:{fontWeight:600,fontSize:"0.875rem"},children:t.title}),t.description&&e.jsx("p",{style:{fontSize:"0.75rem",color:"#64748b"},children:t.description}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",fontSize:"0.75rem",color:"#64748b"},children:[t.assignee&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[e.jsx(V,{className:"h-3 w-3"}),t.assignee]}),t.priority&&e.jsx("div",{style:{padding:"0.125rem 0.5rem",backgroundColor:t.priority==="high"?"#fef2f2":t.priority==="medium"?"#fefce8":"#f0fdf4",color:t.priority==="high"?"#dc2626":t.priority==="medium"?"#ca8a04":"#16a34a",borderRadius:"0.25rem",fontSize:"0.625rem",fontWeight:600,textTransform:"uppercase"},children:t.priority})]})]})})}},C={render:()=>{const[r,i]=a.useState([{id:"backlog",title:"Backlog",color:"#6b7280",cards:[{id:"1",title:"Mobile app design",description:"Design mobile-first responsive layout",tags:["mobile","design"],assignee:"Sarah Lee",priority:"low"},{id:"2",title:"Performance optimization",description:"Optimize database queries and caching",tags:["backend","performance"],priority:"medium"}]},{id:"todo",title:"To Do",color:"#94a3b8",cards:[{id:"3",title:"User profile page",description:"Implement user profile with edit functionality",tags:["frontend","feature"],assignee:"Mike Davis",priority:"high"}]},{id:"in-progress",title:"In Progress",color:"#3b82f6",limit:2,cards:[{id:"4",title:"Payment integration",description:"Integrate Stripe payment gateway",tags:["backend","payments"],assignee:"Emily Clark",priority:"high"}]},{id:"testing",title:"Testing",color:"#8b5cf6",cards:[]},{id:"done",title:"Done",color:"#10b981",cards:[{id:"5",title:"Login system",description:"Email and social login implemented",tags:["auth","frontend"],assignee:"David Wilson"}]}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem"},children:"Project Dashboard"}),e.jsx("p",{style:{color:"#64748b"},children:"Drag cards between columns to update status"})]}),e.jsx(s,{columns:r,onChange:i,onCardClick:t=>console.log("Open card details:",t),onAddCard:t=>console.log("Add card to:",t)})]})}},y={render:()=>{const[r,i]=a.useState([{id:"reported",title:"Reported",color:"#ef4444",cards:[{id:"1",title:"Button not clickable on iOS",description:"Submit button does not work on Safari iOS",tags:["bug","mobile","ios"],priority:"high"},{id:"2",title:"Typo in error message",tags:["bug","text"],priority:"low"}]},{id:"investigating",title:"Investigating",color:"#f59e0b",cards:[{id:"3",title:"Slow page load",description:"Dashboard takes 5+ seconds to load",tags:["bug","performance"],assignee:"Tech Lead",priority:"medium"}]},{id:"fixing",title:"Fixing",color:"#3b82f6",limit:3,cards:[{id:"4",title:"Memory leak in carousel",description:"Carousel component causes memory leak",tags:["bug","frontend"],assignee:"Frontend Dev",priority:"high"}]},{id:"resolved",title:"Resolved",color:"#10b981",cards:[{id:"5",title:"Login redirect broken",tags:["bug","auth"],assignee:"Backend Dev"}]}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem"},children:"Bug Tracking Board"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",color:"#64748b",fontSize:"0.875rem"},children:[e.jsx("span",{children:"🔴 High Priority: 2"}),e.jsx("span",{children:"🟡 Medium Priority: 1"}),e.jsx("span",{children:"🟢 Low Priority: 1"})]})]}),e.jsx(s,{columns:r,onChange:i,onCardClick:t=>console.log("View bug details:",t),onAddCard:t=>console.log("Report new bug in:",t)})]})}},x={render:()=>{const[r,i]=a.useState([{id:"ideas",title:"Ideas",color:"#8b5cf6",cards:[{id:"1",title:"Blog: React 19 Features",tags:["blog","tutorial"]},{id:"2",title:"Video: TypeScript Tips",tags:["video","tutorial"]}]},{id:"writing",title:"Writing",color:"#3b82f6",cards:[{id:"3",title:"Blog: Component Libraries",description:"Comparing popular React component libraries",tags:["blog","comparison"],assignee:"Content Writer"}]},{id:"review",title:"Review",color:"#f59e0b",cards:[{id:"4",title:"Blog: State Management",description:"Guide to state management in React",tags:["blog","tutorial"],assignee:"Editor"}]},{id:"scheduled",title:"Scheduled",color:"#06b6d4",cards:[]},{id:"published",title:"Published",color:"#10b981",cards:[{id:"5",title:"Blog: Getting Started",tags:["blog","beginner"]}]}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem"},children:"Content Calendar"}),e.jsx("p",{style:{color:"#64748b"},children:"Track your content from idea to publication"})]}),e.jsx(s,{columns:r,onChange:i,onCardClick:t=>console.log("Edit content:",t),onAddCard:t=>console.log("New content in:",t)})]})}},v={render:()=>{const[r,i]=a.useState([{id:"leads",title:"New Leads",color:"#94a3b8",cards:[{id:"1",title:"Acme Corp",description:"Enterprise plan - 500 users",tags:["enterprise"],priority:"high"},{id:"2",title:"TechStart Inc",description:"Pro plan - 50 users",tags:["startup"],priority:"medium"}]},{id:"contacted",title:"Contacted",color:"#3b82f6",cards:[{id:"3",title:"Global Solutions",description:"Business plan - 100 users",tags:["business"],assignee:"Sales Rep 1",priority:"medium"}]},{id:"demo",title:"Demo Scheduled",color:"#8b5cf6",cards:[{id:"4",title:"Innovation Labs",description:"Enterprise plan - demo on Friday",tags:["enterprise","demo"],assignee:"Sales Rep 2",priority:"high"}]},{id:"proposal",title:"Proposal Sent",color:"#f59e0b",cards:[]},{id:"closed",title:"Closed Won",color:"#10b981",cards:[{id:"5",title:"DataTech Co",description:"Pro plan - $5,000/month",tags:["business"],assignee:"Sales Rep 1"}]}]);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem"},children:"Sales Pipeline"}),e.jsxs("div",{style:{display:"flex",gap:"2rem",marginTop:"1rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",textTransform:"uppercase"},children:"Active Deals"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700},children:"8"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",textTransform:"uppercase"},children:"Closed This Month"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"#10b981"},children:"$15,000"})]})]})]}),e.jsx(s,{columns:r,onChange:i,onCardClick:t=>console.log("View deal:",t),onAddCard:t=>console.log("Add lead to:",t)})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} />;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} onCardClick={card => alert(\`Clicked: \${card.title}\`)} />;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} onAddCard={columnId => alert(\`Add card to column: \${columnId}\`)} showAddButton />;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} onColumnMenu={columnId => alert(\`Column menu: \${columnId}\`)} />;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} showAddButton={false} />;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
    return <KanbanBoard columns={columns} onChange={setColumns} renderCard={card => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>\r
            <h4 style={{
        fontWeight: 600,
        fontSize: '0.875rem'
      }}>{card.title}</h4>\r
            {card.description && <p style={{
        fontSize: '0.75rem',
        color: '#64748b'
      }}>{card.description}</p>}\r
            <div style={{
        display: 'flex',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: '#64748b'
      }}>\r
              {card.assignee && <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>\r
                  <User className="h-3 w-3" />\r
                  {card.assignee}\r
                </div>}\r
              {card.priority && <div style={{
          padding: '0.125rem 0.5rem',
          backgroundColor: card.priority === 'high' ? '#fef2f2' : card.priority === 'medium' ? '#fefce8' : '#f0fdf4',
          color: card.priority === 'high' ? '#dc2626' : card.priority === 'medium' ? '#ca8a04' : '#16a34a',
          borderRadius: '0.25rem',
          fontSize: '0.625rem',
          fontWeight: 600,
          textTransform: 'uppercase'
        }}>\r
                  {card.priority}\r
                </div>}\r
            </div>\r
          </div>} />;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([{
      id: 'backlog',
      title: 'Backlog',
      color: '#6b7280',
      cards: [{
        id: '1',
        title: 'Mobile app design',
        description: 'Design mobile-first responsive layout',
        tags: ['mobile', 'design'],
        assignee: 'Sarah Lee',
        priority: 'low'
      }, {
        id: '2',
        title: 'Performance optimization',
        description: 'Optimize database queries and caching',
        tags: ['backend', 'performance'],
        priority: 'medium'
      }]
    }, {
      id: 'todo',
      title: 'To Do',
      color: '#94a3b8',
      cards: [{
        id: '3',
        title: 'User profile page',
        description: 'Implement user profile with edit functionality',
        tags: ['frontend', 'feature'],
        assignee: 'Mike Davis',
        priority: 'high'
      }]
    }, {
      id: 'in-progress',
      title: 'In Progress',
      color: '#3b82f6',
      limit: 2,
      cards: [{
        id: '4',
        title: 'Payment integration',
        description: 'Integrate Stripe payment gateway',
        tags: ['backend', 'payments'],
        assignee: 'Emily Clark',
        priority: 'high'
      }]
    }, {
      id: 'testing',
      title: 'Testing',
      color: '#8b5cf6',
      cards: []
    }, {
      id: 'done',
      title: 'Done',
      color: '#10b981',
      cards: [{
        id: '5',
        title: 'Login system',
        description: 'Email and social login implemented',
        tags: ['auth', 'frontend'],
        assignee: 'David Wilson'
      }]
    }]);
    return <div>\r
        <div style={{
        marginBottom: '2rem'
      }}>\r
          <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>\r
            Project Dashboard\r
          </h2>\r
          <p style={{
          color: '#64748b'
        }}>Drag cards between columns to update status</p>\r
        </div>\r
        <KanbanBoard columns={columns} onChange={setColumns} onCardClick={card => console.log('Open card details:', card)} onAddCard={columnId => console.log('Add card to:', columnId)} />\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([{
      id: 'reported',
      title: 'Reported',
      color: '#ef4444',
      cards: [{
        id: '1',
        title: 'Button not clickable on iOS',
        description: 'Submit button does not work on Safari iOS',
        tags: ['bug', 'mobile', 'ios'],
        priority: 'high'
      }, {
        id: '2',
        title: 'Typo in error message',
        tags: ['bug', 'text'],
        priority: 'low'
      }]
    }, {
      id: 'investigating',
      title: 'Investigating',
      color: '#f59e0b',
      cards: [{
        id: '3',
        title: 'Slow page load',
        description: 'Dashboard takes 5+ seconds to load',
        tags: ['bug', 'performance'],
        assignee: 'Tech Lead',
        priority: 'medium'
      }]
    }, {
      id: 'fixing',
      title: 'Fixing',
      color: '#3b82f6',
      limit: 3,
      cards: [{
        id: '4',
        title: 'Memory leak in carousel',
        description: 'Carousel component causes memory leak',
        tags: ['bug', 'frontend'],
        assignee: 'Frontend Dev',
        priority: 'high'
      }]
    }, {
      id: 'resolved',
      title: 'Resolved',
      color: '#10b981',
      cards: [{
        id: '5',
        title: 'Login redirect broken',
        tags: ['bug', 'auth'],
        assignee: 'Backend Dev'
      }]
    }]);
    return <div>\r
        <div style={{
        marginBottom: '2rem'
      }}>\r
          <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>\r
            Bug Tracking Board\r
          </h2>\r
          <div style={{
          display: 'flex',
          gap: '1rem',
          color: '#64748b',
          fontSize: '0.875rem'
        }}>\r
            <span>🔴 High Priority: 2</span>\r
            <span>🟡 Medium Priority: 1</span>\r
            <span>🟢 Low Priority: 1</span>\r
          </div>\r
        </div>\r
        <KanbanBoard columns={columns} onChange={setColumns} onCardClick={card => console.log('View bug details:', card)} onAddCard={columnId => console.log('Report new bug in:', columnId)} />\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([{
      id: 'ideas',
      title: 'Ideas',
      color: '#8b5cf6',
      cards: [{
        id: '1',
        title: 'Blog: React 19 Features',
        tags: ['blog', 'tutorial']
      }, {
        id: '2',
        title: 'Video: TypeScript Tips',
        tags: ['video', 'tutorial']
      }]
    }, {
      id: 'writing',
      title: 'Writing',
      color: '#3b82f6',
      cards: [{
        id: '3',
        title: 'Blog: Component Libraries',
        description: 'Comparing popular React component libraries',
        tags: ['blog', 'comparison'],
        assignee: 'Content Writer'
      }]
    }, {
      id: 'review',
      title: 'Review',
      color: '#f59e0b',
      cards: [{
        id: '4',
        title: 'Blog: State Management',
        description: 'Guide to state management in React',
        tags: ['blog', 'tutorial'],
        assignee: 'Editor'
      }]
    }, {
      id: 'scheduled',
      title: 'Scheduled',
      color: '#06b6d4',
      cards: []
    }, {
      id: 'published',
      title: 'Published',
      color: '#10b981',
      cards: [{
        id: '5',
        title: 'Blog: Getting Started',
        tags: ['blog', 'beginner']
      }]
    }]);
    return <div>\r
        <div style={{
        marginBottom: '2rem'
      }}>\r
          <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>\r
            Content Calendar\r
          </h2>\r
          <p style={{
          color: '#64748b'
        }}>Track your content from idea to publication</p>\r
        </div>\r
        <KanbanBoard columns={columns} onChange={setColumns} onCardClick={card => console.log('Edit content:', card)} onAddCard={columnId => console.log('New content in:', columnId)} />\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columns, setColumns] = useState<KanbanColumn[]>([{
      id: 'leads',
      title: 'New Leads',
      color: '#94a3b8',
      cards: [{
        id: '1',
        title: 'Acme Corp',
        description: 'Enterprise plan - 500 users',
        tags: ['enterprise'],
        priority: 'high'
      }, {
        id: '2',
        title: 'TechStart Inc',
        description: 'Pro plan - 50 users',
        tags: ['startup'],
        priority: 'medium'
      }]
    }, {
      id: 'contacted',
      title: 'Contacted',
      color: '#3b82f6',
      cards: [{
        id: '3',
        title: 'Global Solutions',
        description: 'Business plan - 100 users',
        tags: ['business'],
        assignee: 'Sales Rep 1',
        priority: 'medium'
      }]
    }, {
      id: 'demo',
      title: 'Demo Scheduled',
      color: '#8b5cf6',
      cards: [{
        id: '4',
        title: 'Innovation Labs',
        description: 'Enterprise plan - demo on Friday',
        tags: ['enterprise', 'demo'],
        assignee: 'Sales Rep 2',
        priority: 'high'
      }]
    }, {
      id: 'proposal',
      title: 'Proposal Sent',
      color: '#f59e0b',
      cards: []
    }, {
      id: 'closed',
      title: 'Closed Won',
      color: '#10b981',
      cards: [{
        id: '5',
        title: 'DataTech Co',
        description: 'Pro plan - $5,000/month',
        tags: ['business'],
        assignee: 'Sales Rep 1'
      }]
    }]);
    return <div>\r
        <div style={{
        marginBottom: '2rem'
      }}>\r
          <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem'
        }}>\r
            Sales Pipeline\r
          </h2>\r
          <div style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '1rem'
        }}>\r
            <div>\r
              <div style={{
              fontSize: '0.75rem',
              color: '#64748b',
              textTransform: 'uppercase'
            }}>\r
                Active Deals\r
              </div>\r
              <div style={{
              fontSize: '1.5rem',
              fontWeight: 700
            }}>8</div>\r
            </div>\r
            <div>\r
              <div style={{
              fontSize: '0.75rem',
              color: '#64748b',
              textTransform: 'uppercase'
            }}>\r
                Closed This Month\r
              </div>\r
              <div style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#10b981'
            }}>$15,000</div>\r
            </div>\r
          </div>\r
        </div>\r
        <KanbanBoard columns={columns} onChange={setColumns} onCardClick={card => console.log('View deal:', card)} onAddCard={columnId => console.log('Add lead to:', columnId)} />\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const Q=["Default","WithCardClick","WithAddCard","WithColumnMenu","NoAddButton","CustomCardRenderer","ProjectManagement","BugTracker","ContentCalendar","SalesPipeline"];export{y as BugTracker,x as ContentCalendar,f as CustomCardRenderer,u as Default,b as NoAddButton,C as ProjectManagement,v as SalesPipeline,g as WithAddCard,p as WithCardClick,h as WithColumnMenu,Q as __namedExportsOrder,J as default};
