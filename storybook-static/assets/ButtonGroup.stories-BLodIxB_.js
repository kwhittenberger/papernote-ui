import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CJgaPZSw.js";import{B as t}from"./Button-Cnor-_7t.js";import{c as d}from"./createLucideIcon-CsANJayS.js";import"./preload-helper-PPVm8Dsz.js";import"./loader-circle-DihWDC1d.js";const $=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],q=d("bold",$);const H=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],L=d("italic",H);const W=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 19H5",key:"vjpgq2"}]],E=d("text-align-center",W);const O=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 19H7",key:"4cu937"}]],R=d("text-align-end",O);const U=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],J=d("text-align-start",U);const K=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],Q=d("underline",K);function i({options:n,value:r,values:o=[],onChange:a,onChangeMultiple:s,multiple:c=!1,label:C,size:N="md",fullWidth:z=!1,disabled:w=!1,className:V=""}){const F=l=>{w||a?.(l)},D=l=>{if(w)return;const p=o.includes(l)?o.filter(m=>m!==l):[...o,l];s?.(p)},M=l=>c?o.includes(l):r===l,P={sm:"text-xs px-3 py-1.5",md:"text-sm px-4 py-2",lg:"text-base px-5 py-2.5"},A={sm:"h-3.5 w-3.5",md:"h-4 w-4",lg:"h-5 w-5"};return e.jsxs("div",{className:`${V}`,children:[C&&e.jsx("label",{className:"block text-sm font-medium text-ink-700 mb-2",children:C}),e.jsx("div",{className:`inline-flex ${z?"w-full":""}`,role:c?"group":"radiogroup","aria-label":C,children:n.map((l,p)=>{const m=l.icon,_=M(l.value),G=w||l.disabled,I=p===0,T=p===n.length-1;return e.jsxs("button",{type:"button",onClick:()=>c?D(l.value):F(l.value),disabled:G,title:l.tooltip,role:c?"checkbox":"radio","aria-checked":_,"aria-disabled":G,className:`
                ${P[N]}
                ${z?"flex-1":""}
                font-medium transition-colors
                border border-paper-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10
                ${I?"rounded-l-md":"-ml-px"}
                ${T?"rounded-r-md":""}
                ${_?"bg-primary-500 text-white border-primary-500 z-10":"bg-white text-ink-700 hover:bg-paper-50"}
                ${G?"opacity-50 cursor-not-allowed":"cursor-pointer"}
                ${m&&l.label?"inline-flex items-center gap-2":"inline-flex items-center justify-center"}
              `,children:[m&&e.jsx(m,{className:A[N]}),l.label]},l.value)})})]})}try{i.displayName="ButtonGroup",i.__docgenInfo={description:`ButtonGroup component - Toggle button group for single or multiple selection.

Features:
- Single or multiple selection modes
- Icon support
- Full width option
- Disabled states
- Accessible keyboard navigation`,displayName:"ButtonGroup",props:{options:{defaultValue:null,description:"Available options",name:"options",required:!0,type:{name:"ButtonGroupOption[]"}},value:{defaultValue:null,description:"Selected value (single select)",name:"value",required:!1,type:{name:"string"}},values:{defaultValue:{value:"[]"},description:"Selected values (multi select)",name:"values",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Change handler (single select)",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onChangeMultiple:{defaultValue:null,description:"Change handler (multi select)",name:"onChangeMultiple",required:!1,type:{name:"((values: string[]) => void)"}},multiple:{defaultValue:{value:"false"},description:"Allow multiple selection",name:"multiple",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width buttons",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state for entire group",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Components/ButtonGroup",component:i,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.jsxs(i,{children:[e.jsx(t,{children:"First"}),e.jsx(t,{children:"Second"}),e.jsx(t,{children:"Third"})]})},h={render:()=>{const[n,r]=u.useState("left");return e.jsxs(i,{children:[e.jsx(t,{variant:n==="left"?"primary":"outline",onClick:()=>r("left"),children:e.jsx(J,{className:"h-4 w-4"})}),e.jsx(t,{variant:n==="center"?"primary":"outline",onClick:()=>r("center"),children:e.jsx(E,{className:"h-4 w-4"})}),e.jsx(t,{variant:n==="right"?"primary":"outline",onClick:()=>r("right"),children:e.jsx(R,{className:"h-4 w-4"})})]})}},f={render:()=>{const[n,r]=u.useState([]),o=a=>{n.includes(a)?r(n.filter(s=>s!==a)):r([...n,a])};return e.jsxs(i,{children:[e.jsx(t,{variant:n.includes("bold")?"primary":"outline",onClick:()=>o("bold"),children:e.jsx(q,{className:"h-4 w-4"})}),e.jsx(t,{variant:n.includes("italic")?"primary":"outline",onClick:()=>o("italic"),children:e.jsx(L,{className:"h-4 w-4"})}),e.jsx(t,{variant:n.includes("underline")?"primary":"outline",onClick:()=>o("underline"),children:e.jsx(Q,{className:"h-4 w-4"})})]})}},y={render:()=>{const[n,r]=u.useState("grid");return e.jsxs(i,{children:[e.jsx(t,{variant:n==="list"?"primary":"outline",onClick:()=>r("list"),children:"List"}),e.jsx(t,{variant:n==="grid"?"primary":"outline",onClick:()=>r("grid"),children:"Grid"}),e.jsx(t,{variant:n==="compact"?"primary":"outline",onClick:()=>r("compact"),children:"Compact"})]})}},x={render:()=>e.jsxs(i,{children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",children:"Buttons"}),e.jsx(t,{size:"sm",children:"Group"})]})},b={render:()=>e.jsxs(i,{children:[e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",children:"Buttons"}),e.jsx(t,{size:"lg",children:"Group"})]})},B={render:()=>e.jsxs(i,{orientation:"vertical",children:[e.jsx(t,{children:"Top"}),e.jsx(t,{children:"Middle"}),e.jsx(t,{children:"Bottom"})]})},v={render:()=>e.jsxs(i,{children:[e.jsx(t,{children:"Enabled"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{children:"Enabled"})]})},j={render:()=>{const[n,r]=u.useState(["mon","wed","fri"]),o=[{id:"mon",label:"M"},{id:"tue",label:"T"},{id:"wed",label:"W"},{id:"thu",label:"T"},{id:"fri",label:"F"},{id:"sat",label:"S"},{id:"sun",label:"S"}],a=s=>{n.includes(s)?r(n.filter(c=>c!==s)):r([...n,s])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsx(i,{children:o.map(s=>e.jsx(t,{variant:n.includes(s.id)?"primary":"outline",onClick:()=>a(s.id),children:s.label},s.id))}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Selected: ",n.length===0?"None":n.map(s=>o.find(c=>c.id===s)?.label).join(", ")]})]})}},k={render:()=>{const[n,r]=u.useState(3),o=5;return e.jsxs(i,{children:[e.jsx(t,{disabled:n===1,onClick:()=>r(n-1),children:"Previous"}),Array.from({length:o},(a,s)=>s+1).map(a=>e.jsx(t,{variant:n===a?"primary":"outline",onClick:()=>r(a),children:a},a)),e.jsx(t,{disabled:n===o,onClick:()=>r(n+1),children:"Next"})]})}},S={render:()=>{const[n,r]=u.useState("#3b82f6"),o=[{value:"#ef4444",label:"Red"},{value:"#f59e0b",label:"Orange"},{value:"#10b981",label:"Green"},{value:"#3b82f6",label:"Blue"},{value:"#8b5cf6",label:"Purple"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[e.jsx(i,{children:o.map(a=>e.jsx(t,{variant:n===a.value?"primary":"outline",onClick:()=>r(a.value),children:e.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:a.value}})},a.value))}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Selected: ",o.find(a=>a.value===n)?.label]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>\r
      <Button>First</Button>\r
      <Button>Second</Button>\r
      <Button>Third</Button>\r
    </ButtonGroup>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState('left');
    return <ButtonGroup>\r
        <Button variant={alignment === 'left' ? 'primary' : 'outline'} onClick={() => setAlignment('left')}>\r
          <AlignLeft className="h-4 w-4" />\r
        </Button>\r
        <Button variant={alignment === 'center' ? 'primary' : 'outline'} onClick={() => setAlignment('center')}>\r
          <AlignCenter className="h-4 w-4" />\r
        </Button>\r
        <Button variant={alignment === 'right' ? 'primary' : 'outline'} onClick={() => setAlignment('right')}>\r
          <AlignRight className="h-4 w-4" />\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formats, setFormats] = useState<string[]>([]);
    const toggleFormat = (format: string) => {
      if (formats.includes(format)) {
        setFormats(formats.filter(f => f !== format));
      } else {
        setFormats([...formats, format]);
      }
    };
    return <ButtonGroup>\r
        <Button variant={formats.includes('bold') ? 'primary' : 'outline'} onClick={() => toggleFormat('bold')}>\r
          <Bold className="h-4 w-4" />\r
        </Button>\r
        <Button variant={formats.includes('italic') ? 'primary' : 'outline'} onClick={() => toggleFormat('italic')}>\r
          <Italic className="h-4 w-4" />\r
        </Button>\r
        <Button variant={formats.includes('underline') ? 'primary' : 'outline'} onClick={() => toggleFormat('underline')}>\r
          <Underline className="h-4 w-4" />\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState('grid');
    return <ButtonGroup>\r
        <Button variant={view === 'list' ? 'primary' : 'outline'} onClick={() => setView('list')}>\r
          List\r
        </Button>\r
        <Button variant={view === 'grid' ? 'primary' : 'outline'} onClick={() => setView('grid')}>\r
          Grid\r
        </Button>\r
        <Button variant={view === 'compact' ? 'primary' : 'outline'} onClick={() => setView('compact')}>\r
          Compact\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>\r
      <Button size="sm">Small</Button>\r
      <Button size="sm">Buttons</Button>\r
      <Button size="sm">Group</Button>\r
    </ButtonGroup>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>\r
      <Button size="lg">Large</Button>\r
      <Button size="lg">Buttons</Button>\r
      <Button size="lg">Group</Button>\r
    </ButtonGroup>
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">\r
      <Button>Top</Button>\r
      <Button>Middle</Button>\r
      <Button>Bottom</Button>\r
    </ButtonGroup>
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>\r
      <Button>Enabled</Button>\r
      <Button disabled>Disabled</Button>\r
      <Button>Enabled</Button>\r
    </ButtonGroup>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri']);
    const days = [{
      id: 'mon',
      label: 'M'
    }, {
      id: 'tue',
      label: 'T'
    }, {
      id: 'wed',
      label: 'W'
    }, {
      id: 'thu',
      label: 'T'
    }, {
      id: 'fri',
      label: 'F'
    }, {
      id: 'sat',
      label: 'S'
    }, {
      id: 'sun',
      label: 'S'
    }];
    const toggleDay = (dayId: string) => {
      if (selected.includes(dayId)) {
        setSelected(selected.filter(d => d !== dayId));
      } else {
        setSelected([...selected, dayId]);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <ButtonGroup>\r
          {days.map(day => <Button key={day.id} variant={selected.includes(day.id) ? 'primary' : 'outline'} onClick={() => toggleDay(day.id)}>\r
              {day.label}\r
            </Button>)}\r
        </ButtonGroup>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Selected: {selected.length === 0 ? 'None' : selected.map(d => days.find(day => day.id === d)?.label).join(', ')}\r
        </div>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(3);
    const totalPages = 5;
    return <ButtonGroup>\r
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>\r
          Previous\r
        </Button>\r
        {Array.from({
        length: totalPages
      }, (_, i) => i + 1).map(p => <Button key={p} variant={page === p ? 'primary' : 'outline'} onClick={() => setPage(p)}>\r
            {p}\r
          </Button>)}\r
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>\r
          Next\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    const colors = [{
      value: '#ef4444',
      label: 'Red'
    }, {
      value: '#f59e0b',
      label: 'Orange'
    }, {
      value: '#10b981',
      label: 'Green'
    }, {
      value: '#3b82f6',
      label: 'Blue'
    }, {
      value: '#8b5cf6',
      label: 'Purple'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <ButtonGroup>\r
          {colors.map(c => <Button key={c.value} variant={color === c.value ? 'primary' : 'outline'} onClick={() => setColor(c.value)}>\r
              <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: c.value
          }} />\r
            </Button>)}\r
        </ButtonGroup>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Selected: {colors.find(c => c.value === color)?.label}\r
        </div>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const ae=["Default","WithIcons","TextFormatting","ViewSwitcher","SmallSize","LargeSize","Vertical","WithDisabled","DayOfWeek","Pagination","ColorPicker"];export{S as ColorPicker,j as DayOfWeek,g as Default,b as LargeSize,k as Pagination,x as SmallSize,f as TextFormatting,B as Vertical,y as ViewSwitcher,v as WithDisabled,h as WithIcons,ae as __namedExportsOrder,re as default};
