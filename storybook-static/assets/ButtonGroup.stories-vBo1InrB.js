import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-B3mi8TDU.js";import{c as i}from"./createLucideIcon-BHecmdze.js";import"./preload-helper-PPVm8Dsz.js";const R=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],H=i("bold",R);const E=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],P=i("grid-3x3",E);const U=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],J=i("italic",U);const K=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Q=i("layout-grid",K);const X=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Y=i("list",X);const Z=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 19H5",key:"vjpgq2"}]],A=i("text-align-center",Z);const ee=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 19H7",key:"4cu937"}]],z=i("text-align-end",ee);const te=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],N=i("text-align-start",te);const le=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],ne=i("underline",le);function o({options:e,value:t,values:n=[],onChange:s,onChangeMultiple:$,multiple:d=!1,label:w,size:G="md",fullWidth:B=!1,disabled:M=!1,className:O=""}){const D=a=>{M||s?.(a)},F=a=>{if(M)return;const p=n.includes(a)?n.filter(u=>u!==a):[...n,a];$?.(p)},I=a=>d?n.includes(a):t===a,T={sm:"text-xs px-3 py-1.5",md:"text-sm px-4 py-2",lg:"text-base px-5 py-2.5"},L={sm:"h-3.5 w-3.5",md:"h-4 w-4",lg:"h-5 w-5"};return l.jsxs("div",{className:`${O}`,children:[w&&l.jsx("label",{className:"block text-sm font-medium text-ink-700 mb-2",children:w}),l.jsx("div",{className:`inline-flex ${B?"w-full":""}`,role:d?"group":"radiogroup","aria-label":w,children:e.map((a,p)=>{const u=a.icon,_=I(a.value),V=M||a.disabled,W=p===0,q=p===e.length-1;return l.jsxs("button",{type:"button",onClick:()=>d?F(a.value):D(a.value),disabled:V,title:a.tooltip,role:d?"checkbox":"radio","aria-checked":_,"aria-disabled":V,className:`
                ${T[G]}
                ${B?"flex-1":""}
                font-medium transition-colors
                border border-paper-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10
                ${W?"rounded-l-md":"-ml-px"}
                ${q?"rounded-r-md":""}
                ${_?"bg-primary-500 text-white border-primary-500 z-10":"bg-white text-ink-700 hover:bg-paper-50"}
                ${V?"opacity-50 cursor-not-allowed":"cursor-pointer"}
                ${u&&a.label?"inline-flex items-center gap-2":"inline-flex items-center justify-center"}
              `,children:[u&&l.jsx(u,{className:L[G]}),a.label]},a.value)})})]})}try{o.displayName="ButtonGroup",o.__docgenInfo={description:`ButtonGroup component - Toggle button group for single or multiple selection.

Features:
- Single or multiple selection modes
- Icon support
- Full width option
- Disabled states
- Accessible keyboard navigation`,displayName:"ButtonGroup",props:{options:{defaultValue:null,description:"Available options",name:"options",required:!0,type:{name:"ButtonGroupOption[]"}},value:{defaultValue:null,description:"Selected value (single select)",name:"value",required:!1,type:{name:"string"}},values:{defaultValue:{value:"[]"},description:"Selected values (multi select)",name:"values",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Change handler (single select)",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onChangeMultiple:{defaultValue:null,description:"Change handler (multi select)",name:"onChangeMultiple",required:!1,type:{name:"((values: string[]) => void)"}},multiple:{defaultValue:{value:"false"},description:"Allow multiple selection",name:"multiple",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width buttons",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state for entire group",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ie={title:"Components/ButtonGroup",component:o,parameters:{layout:"centered"},tags:["autodocs"]},c=[{value:"first",label:"First"},{value:"second",label:"Second"},{value:"third",label:"Third"}],m={render:()=>{const[e,t]=r.useState("first");return l.jsx(o,{options:c,value:e,onChange:t})}},v={render:()=>{const[e,t]=r.useState("left"),n=[{value:"left",label:"Left",icon:N},{value:"center",label:"Center",icon:A},{value:"right",label:"Right",icon:z}];return l.jsx(o,{label:"Text Alignment",options:n,value:e,onChange:t})}},g={render:()=>{const[e,t]=r.useState("left"),n=[{value:"left",label:"",icon:N,tooltip:"Align Left"},{value:"center",label:"",icon:A,tooltip:"Align Center"},{value:"right",label:"",icon:z,tooltip:"Align Right"}];return l.jsx(o,{options:n,value:e,onChange:t})}},b={render:()=>{const[e,t]=r.useState(["bold"]),n=[{value:"bold",label:"Bold",icon:H},{value:"italic",label:"Italic",icon:J},{value:"underline",label:"Underline",icon:ne}];return l.jsx(o,{label:"Text Formatting",options:n,values:e,onChangeMultiple:t,multiple:!0})}},h={render:()=>{const[e,t]=r.useState("grid"),n=[{value:"list",label:"List",icon:Y},{value:"grid",label:"Grid",icon:P},{value:"compact",label:"Compact",icon:Q}];return l.jsx(o,{options:n,value:e,onChange:t})}},y={render:()=>{const[e,t]=r.useState("first");return l.jsx(o,{options:c,value:e,onChange:t,size:"sm"})}},f={render:()=>{const[e,t]=r.useState("first");return l.jsx(o,{options:c,value:e,onChange:t,size:"lg"})}},x={render:()=>{const[e,t]=r.useState("first"),n=[{value:"first",label:"Enabled"},{value:"second",label:"Disabled",disabled:!0},{value:"third",label:"Enabled"}];return l.jsx(o,{options:n,value:e,onChange:t})}},S={render:()=>{const[e,t]=r.useState("first");return l.jsx(o,{options:c,value:e,onChange:t,disabled:!0})}},C={render:()=>{const[e,t]=r.useState("first");return l.jsx("div",{style:{width:"400px"},children:l.jsx(o,{options:c,value:e,onChange:t,fullWidth:!0})})}},k={render:()=>{const[e,t]=r.useState(["mon","wed","fri"]),n=[{value:"mon",label:"M",tooltip:"Monday"},{value:"tue",label:"T",tooltip:"Tuesday"},{value:"wed",label:"W",tooltip:"Wednesday"},{value:"thu",label:"T",tooltip:"Thursday"},{value:"fri",label:"F",tooltip:"Friday"},{value:"sat",label:"S",tooltip:"Saturday"},{value:"sun",label:"S",tooltip:"Sunday"}];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[l.jsx(o,{label:"Select Days",options:n,values:e,onChangeMultiple:t,multiple:!0}),l.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Selected: ",e.length===0?"None":e.join(", ")]})]})}},j={render:()=>{const[e,t]=r.useState("#3b82f6"),n=[{value:"#ef4444",label:"",tooltip:"Red"},{value:"#f59e0b",label:"",tooltip:"Orange"},{value:"#10b981",label:"",tooltip:"Green"},{value:"#3b82f6",label:"",tooltip:"Blue"},{value:"#8b5cf6",label:"",tooltip:"Purple"}];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[l.jsx("div",{className:"inline-flex",role:"radiogroup",children:n.map(s=>l.jsx("button",{type:"button",onClick:()=>t(s.value),title:s.tooltip,className:`
                px-4 py-2 border border-paper-300 transition-colors
                ${s.value===n[0].value?"rounded-l-md":"-ml-px"}
                ${s.value===n[n.length-1].value?"rounded-r-md":""}
                ${e===s.value?"bg-primary-500 border-primary-500 z-10":"bg-white hover:bg-paper-50"}
              `,children:l.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:s.value}})},s.value))}),l.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Selected: ",n.find(s=>s.value===e)?.tooltip]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState('left');
    const options: ButtonGroupOption[] = [{
      value: 'left',
      label: 'Left',
      icon: AlignLeft
    }, {
      value: 'center',
      label: 'Center',
      icon: AlignCenter
    }, {
      value: 'right',
      label: 'Right',
      icon: AlignRight
    }];
    return <ButtonGroup label="Text Alignment" options={options} value={alignment} onChange={setAlignment} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState('left');
    const options: ButtonGroupOption[] = [{
      value: 'left',
      label: '',
      icon: AlignLeft,
      tooltip: 'Align Left'
    }, {
      value: 'center',
      label: '',
      icon: AlignCenter,
      tooltip: 'Align Center'
    }, {
      value: 'right',
      label: '',
      icon: AlignRight,
      tooltip: 'Align Right'
    }];
    return <ButtonGroup options={options} value={alignment} onChange={setAlignment} />;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold']);
    const options: ButtonGroupOption[] = [{
      value: 'bold',
      label: 'Bold',
      icon: Bold
    }, {
      value: 'italic',
      label: 'Italic',
      icon: Italic
    }, {
      value: 'underline',
      label: 'Underline',
      icon: Underline
    }];
    return <ButtonGroup label="Text Formatting" options={options} values={formats} onChangeMultiple={setFormats} multiple />;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = useState('grid');
    const options: ButtonGroupOption[] = [{
      value: 'list',
      label: 'List',
      icon: List
    }, {
      value: 'grid',
      label: 'Grid',
      icon: Grid3x3
    }, {
      value: 'compact',
      label: 'Compact',
      icon: LayoutGrid
    }];
    return <ButtonGroup options={options} value={view} onChange={setView} />;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} size="sm" />;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} size="lg" />;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    const options: ButtonGroupOption[] = [{
      value: 'first',
      label: 'Enabled'
    }, {
      value: 'second',
      label: 'Disabled',
      disabled: true
    }, {
      value: 'third',
      label: 'Enabled'
    }];
    return <ButtonGroup options={options} value={value} onChange={setValue} />;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    return <ButtonGroup options={basicOptions} value={value} onChange={setValue} disabled />;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('first');
    return <div style={{
      width: '400px'
    }}>\r
        <ButtonGroup options={basicOptions} value={value} onChange={setValue} fullWidth />\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['mon', 'wed', 'fri']);
    const days: ButtonGroupOption[] = [{
      value: 'mon',
      label: 'M',
      tooltip: 'Monday'
    }, {
      value: 'tue',
      label: 'T',
      tooltip: 'Tuesday'
    }, {
      value: 'wed',
      label: 'W',
      tooltip: 'Wednesday'
    }, {
      value: 'thu',
      label: 'T',
      tooltip: 'Thursday'
    }, {
      value: 'fri',
      label: 'F',
      tooltip: 'Friday'
    }, {
      value: 'sat',
      label: 'S',
      tooltip: 'Saturday'
    }, {
      value: 'sun',
      label: 'S',
      tooltip: 'Sunday'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <ButtonGroup label="Select Days" options={days} values={selected} onChangeMultiple={setSelected} multiple />\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Selected: {selected.length === 0 ? 'None' : selected.join(', ')}\r
        </div>\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    const colors: ButtonGroupOption[] = [{
      value: '#ef4444',
      label: '',
      tooltip: 'Red'
    }, {
      value: '#f59e0b',
      label: '',
      tooltip: 'Orange'
    }, {
      value: '#10b981',
      label: '',
      tooltip: 'Green'
    }, {
      value: '#3b82f6',
      label: '',
      tooltip: 'Blue'
    }, {
      value: '#8b5cf6',
      label: '',
      tooltip: 'Purple'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <div className="inline-flex" role="radiogroup">\r
          {colors.map(c => <button key={c.value} type="button" onClick={() => setColor(c.value)} title={c.tooltip} className={\`
                px-4 py-2 border border-paper-300 transition-colors
                \${c.value === colors[0].value ? 'rounded-l-md' : '-ml-px'}
                \${c.value === colors[colors.length - 1].value ? 'rounded-r-md' : ''}
                \${color === c.value ? 'bg-primary-500 border-primary-500 z-10' : 'bg-white hover:bg-paper-50'}
              \`}>\r
              <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: c.value
          }} />\r
            </button>)}\r
        </div>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Selected: {colors.find(c => c.value === color)?.tooltip}\r
        </div>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const ue=["Default","WithIcons","IconOnly","MultipleSelection","ViewSwitcher","SmallSize","LargeSize","WithDisabled","FullyDisabled","FullWidth","DayOfWeek","ColorPicker"];export{j as ColorPicker,k as DayOfWeek,m as Default,C as FullWidth,S as FullyDisabled,g as IconOnly,f as LargeSize,b as MultipleSelection,y as SmallSize,h as ViewSwitcher,x as WithDisabled,v as WithIcons,ue as __namedExportsOrder,ie as default};
