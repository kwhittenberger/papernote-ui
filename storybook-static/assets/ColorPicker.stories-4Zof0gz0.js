import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-CJgaPZSw.js";import{C as D}from"./check-bgZ_5cT5.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CsANJayS.js";const T=["#EF4444","#F59E0B","#10B981","#3B82F6","#8B5CF6","#EC4899","#6B7280","#000000","#FFFFFF","#DC2626","#F97316","#84CC16","#14B8A6","#06B6D4","#6366F1","#A855F7","#D946EF","#F43F5E"];function l({value:r="#3B82F6",onChange:t,presets:o=T,label:s,helperText:n,disabled:c=!1,showAlpha:A=!1}){const[m,j]=a.useState(!1),[P,S]=a.useState(r),k=a.useRef(null);a.useEffect(()=>{S(r)},[r]),a.useEffect(()=>{const i=d=>{k.current&&!k.current.contains(d.target)&&j(!1)};return m&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[m]);const w=i=>{S(i),t?.(i)},E=i=>{const d=i.target.value;S(d),/^#([0-9A-F]{3}){1,2}$/i.test(d)&&t?.(d)};return e.jsxs("div",{className:"w-full",children:[s&&e.jsx("label",{className:"label",children:s}),e.jsxs("div",{ref:k,className:"relative",children:[e.jsx("button",{type:"button",onClick:()=>!c&&j(!m),disabled:c,className:`
            w-full flex items-center justify-between px-4 py-3 border rounded-lg
            transition-all duration-200 bg-white bg-subtle-grain
            ${c?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-paper-400"}
            ${m?"border-accent-400 ring-2 ring-accent-400":"border-paper-300"}
          `,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-6 w-6 rounded border border-paper-300 shadow-sm",style:{backgroundColor:r}}),e.jsx("span",{className:"text-sm text-ink-800 font-mono",children:r.toUpperCase()})]})}),m&&e.jsxs("div",{className:"absolute z-50 w-full mt-2 p-4 bg-white bg-subtle-grain rounded-lg shadow-lg border border-paper-200 animate-fade-in",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-xs font-medium text-ink-700 mb-2",children:"Hex Color"}),e.jsx("input",{type:"text",value:P,onChange:E,className:"input w-full font-mono text-sm",placeholder:"#000000",maxLength:7})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-xs font-medium text-ink-700 mb-2",children:"Preset Colors"}),e.jsx("div",{className:"grid grid-cols-6 gap-2",children:o.map(i=>{const d=i.toLowerCase()===r.toLowerCase();return e.jsx("button",{type:"button",onClick:()=>w(i),className:`
                        relative h-10 w-full rounded border-2 transition-all duration-200
                        ${d?"border-accent-500 scale-105":"border-paper-300 hover:border-accent-300"}
                      `,style:{backgroundColor:i},"aria-label":i,children:d&&e.jsx(D,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white drop-shadow"})},i)})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-ink-700 mb-2",children:"Custom Color"}),e.jsx("input",{type:"color",value:r,onChange:i=>w(i.target.value),className:"w-full h-10 rounded border border-paper-300 cursor-pointer"})]})]})]}),n&&e.jsx("p",{className:"mt-2 text-xs text-ink-600",children:n})]})}try{l.displayName="ColorPicker",l.__docgenInfo={description:"",displayName:"ColorPicker",props:{value:{defaultValue:{value:"#3B82F6"},description:"Current color value (hex format: #RRGGBB)",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when color changes",name:"onChange",required:!1,type:{name:"((color: string) => void)"}},presets:{defaultValue:{value:`[\r
  '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899',\r
  '#6B7280', '#000000', '#FFFFFF', '#DC2626', '#F97316', '#84CC16',\r
  '#14B8A6', '#06B6D4', '#6366F1', '#A855F7', '#D946EF', '#F43F5E',\r
]`},description:"Preset color swatches",name:"presets",required:!1,type:{name:"string[]"}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},showAlpha:{defaultValue:{value:"false"},description:"Show alpha/transparency control",name:"showAlpha",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Forms/ColorPicker",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{minWidth:"400px",padding:"2rem"},children:e.jsx(r,{})})]},u={render:()=>{const[r,t]=a.useState("#3B82F6");return e.jsx(l,{value:r,onChange:t})}},C={render:()=>{const[r,t]=a.useState("#3B82F6");return e.jsx(l,{value:r,onChange:t,label:"Choose Color"})}},h={render:()=>{const[r,t]=a.useState("#3B82F6");return e.jsx(l,{value:r,onChange:t,label:"Brand Color",helperText:"Select your primary brand color"})}},p={render:()=>{const[r,t]=a.useState("#FF6B6B"),o=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#C06C84"];return e.jsx(l,{value:r,onChange:t,label:"Pastel Colors",presets:o})}},g={render:()=>{const[r,t]=a.useState("#0066CC"),o=["#0066CC","#00AA66","#FF9900","#CC0000","#6600CC","#0099CC","#33CC33","#FFCC00","#FF3300","#9933FF"];return e.jsx(l,{value:r,onChange:t,label:"Brand Palette",presets:o,helperText:"Choose from approved brand colors"})}},x={render:()=>{const[r,t]=a.useState("#808080"),o=["#000000","#1A1A1A","#333333","#4D4D4D","#666666","#808080","#999999","#B3B3B3","#CCCCCC","#E6E6E6","#F2F2F2","#FFFFFF"];return e.jsx(l,{value:r,onChange:t,label:"Grayscale",presets:o})}},f={args:{value:"#3B82F6",label:"Disabled Color Picker",disabled:!0}},b={render:()=>{const[r,t]=a.useState({primary:"#3B82F6",secondary:"#8B5CF6",success:"#10B981",warning:"#F59E0B",error:"#EF4444"});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Theme Colors"}),e.jsx(l,{value:r.primary,onChange:o=>t({...r,primary:o}),label:"Primary Color"}),e.jsx(l,{value:r.secondary,onChange:o=>t({...r,secondary:o}),label:"Secondary Color"}),e.jsx(l,{value:r.success,onChange:o=>t({...r,success:o}),label:"Success Color"}),e.jsx(l,{value:r.warning,onChange:o=>t({...r,warning:o}),label:"Warning Color"}),e.jsx(l,{value:r.error,onChange:o=>t({...r,error:o}),label:"Error Color"}),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#f5f5f4",borderRadius:"0.5rem",marginTop:"1rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"1rem"},children:"Theme Preview"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"0.75rem"},children:Object.entries(r).map(([o,s])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"100%",height:"60px",backgroundColor:s,borderRadius:"0.375rem",marginBottom:"0.5rem"}}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",textTransform:"capitalize"},children:o})]},o))})]})]})}},y={render:()=>{const[r,t]=a.useState("#FFFFFF"),[o,s]=a.useState("#000000");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Design Tool"}),e.jsx(l,{value:r,onChange:t,label:"Background Color"}),e.jsx(l,{value:o,onChange:s,label:"Text Color"}),e.jsx("div",{style:{padding:"2rem",backgroundColor:r,color:o,borderRadius:"0.5rem",border:"1px solid #e5e5e5",textAlign:"center",fontSize:"1.125rem",fontWeight:500,transition:"all 0.2s"},children:"Sample Text Preview"})]})}},F={render:()=>{const[r,t]=a.useState(["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6"]),o=(s,n)=>{const c=[...r];c[s]=n,t(c)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Chart Series Colors"}),r.map((s,n)=>e.jsx(l,{value:s,onChange:c=>o(n,c),label:`Series ${n+1}`},n)),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#f5f5f4",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"1rem"},children:"Chart Preview"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",height:"150px",alignItems:"flex-end"},children:r.map((s,n)=>e.jsx("div",{style:{flex:1,height:`${(n+1)*20}%`,backgroundColor:s,borderRadius:"0.25rem 0.25rem 0 0"}},n))})]})]})}},v={render:()=>{const[r,t]=a.useState({active:"#10B981",pending:"#F59E0B",inactive:"#6B7280",error:"#EF4444"}),o=[{key:"active",label:"Active",count:24},{key:"pending",label:"Pending",count:7},{key:"inactive",label:"Inactive",count:12},{key:"error",label:"Error",count:3}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Status Color Configuration"}),Object.entries(r).map(([s,n])=>e.jsx(l,{value:n,onChange:c=>t({...r,[s]:c}),label:`${s.charAt(0).toUpperCase()+s.slice(1)} Status`},s)),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#f5f5f4",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"1rem"},children:"Status Dashboard"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:o.map(({key:s,label:n,count:c})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.75rem",backgroundColor:"white",borderRadius:"0.375rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:r[s]}}),e.jsx("span",{style:{fontSize:"0.875rem",fontWeight:500},children:n})]}),e.jsx("span",{style:{fontSize:"0.875rem",color:"#64748b"},children:c})]},s))})]})]})}},B={render:()=>{const[r,t]=a.useState("#FFEB3B"),[o]=a.useState("This is important text that needs to be highlighted for emphasis.");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Text Highlighter"}),e.jsx(l,{value:r,onChange:t,label:"Highlight Color",presets:["#FFEB3B","#FFC107","#FF9800","#8BC34A","#4CAF50","#00BCD4","#03A9F4","#E91E63","#9C27B0","#F44336"]}),e.jsx("div",{style:{padding:"1.5rem",backgroundColor:"#f5f5f4",borderRadius:"0.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",lineHeight:1.6},children:o.split(" ").map((s,n)=>e.jsxs("span",{style:{backgroundColor:n%3===0?r:"transparent",padding:n%3===0?"0.125rem 0.25rem":"0",borderRadius:"0.125rem"},children:[s," "]},n))})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker value={color} onChange={setColor} />;
  }
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker value={color} onChange={setColor} label="Choose Color" />;
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return <ColorPicker value={color} onChange={setColor} label="Brand Color" helperText="Select your primary brand color" />;
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#FF6B6B');
    const customPresets = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B195', '#C06C84'];
    return <ColorPicker value={color} onChange={setColor} label="Pastel Colors" presets={customPresets} />;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#0066CC');
    const brandPresets = ['#0066CC', '#00AA66', '#FF9900', '#CC0000', '#6600CC', '#0099CC', '#33CC33', '#FFCC00', '#FF3300', '#9933FF'];
    return <ColorPicker value={color} onChange={setColor} label="Brand Palette" presets={brandPresets} helperText="Choose from approved brand colors" />;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#808080');
    const grayscalePresets = ['#000000', '#1A1A1A', '#333333', '#4D4D4D', '#666666', '#808080', '#999999', '#B3B3B3', '#CCCCCC', '#E6E6E6', '#F2F2F2', '#FFFFFF'];
    return <ColorPicker value={color} onChange={setColor} label="Grayscale" presets={grayscalePresets} />;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: '#3B82F6',
    label: 'Disabled Color Picker',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState({
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Theme Colors</h3>\r
        <ColorPicker value={theme.primary} onChange={color => setTheme({
        ...theme,
        primary: color
      })} label="Primary Color" />\r
        <ColorPicker value={theme.secondary} onChange={color => setTheme({
        ...theme,
        secondary: color
      })} label="Secondary Color" />\r
        <ColorPicker value={theme.success} onChange={color => setTheme({
        ...theme,
        success: color
      })} label="Success Color" />\r
        <ColorPicker value={theme.warning} onChange={color => setTheme({
        ...theme,
        warning: color
      })} label="Warning Color" />\r
        <ColorPicker value={theme.error} onChange={color => setTheme({
        ...theme,
        error: color
      })} label="Error Color" />\r
        <div style={{
        padding: '1.5rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.5rem',
        marginTop: '1rem'
      }}>\r
          <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>\r
            Theme Preview\r
          </div>\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.75rem'
        }}>\r
            {Object.entries(theme).map(([name, color]) => <div key={name} style={{
            textAlign: 'center'
          }}>\r
                <div style={{
              width: '100%',
              height: '60px',
              backgroundColor: color,
              borderRadius: '0.375rem',
              marginBottom: '0.5rem'
            }} />\r
                <div style={{
              fontSize: '0.75rem',
              color: '#64748b',
              textTransform: 'capitalize'
            }}>\r
                  {name}\r
                </div>\r
              </div>)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [textColor, setTextColor] = useState('#000000');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Design Tool</h3>\r
        <ColorPicker value={bgColor} onChange={setBgColor} label="Background Color" />\r
        <ColorPicker value={textColor} onChange={setTextColor} label="Text Color" />\r
        <div style={{
        padding: '2rem',
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5',
        textAlign: 'center',
        fontSize: '1.125rem',
        fontWeight: 500,
        transition: 'all 0.2s'
      }}>\r
          Sample Text Preview\r
        </div>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [colors, setColors] = useState(['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']);
    const updateColor = (index: number, color: string) => {
      const newColors = [...colors];
      newColors[index] = color;
      setColors(newColors);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Chart Series Colors</h3>\r
        {colors.map((color, index) => <ColorPicker key={index} value={color} onChange={newColor => updateColor(index, newColor)} label={\`Series \${index + 1}\`} />)}\r
        <div style={{
        padding: '1.5rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.5rem'
      }}>\r
          <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>\r
            Chart Preview\r
          </div>\r
          <div style={{
          display: 'flex',
          gap: '0.5rem',
          height: '150px',
          alignItems: 'flex-end'
        }}>\r
            {colors.map((color, index) => <div key={index} style={{
            flex: 1,
            height: \`\${(index + 1) * 20}%\`,
            backgroundColor: color,
            borderRadius: '0.25rem 0.25rem 0 0'
          }} />)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [statusColors, setStatusColors] = useState({
      active: '#10B981',
      pending: '#F59E0B',
      inactive: '#6B7280',
      error: '#EF4444'
    });
    const statuses = [{
      key: 'active',
      label: 'Active',
      count: 24
    }, {
      key: 'pending',
      label: 'Pending',
      count: 7
    }, {
      key: 'inactive',
      label: 'Inactive',
      count: 12
    }, {
      key: 'error',
      label: 'Error',
      count: 3
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Status Color Configuration</h3>\r
        {Object.entries(statusColors).map(([status, color]) => <ColorPicker key={status} value={color} onChange={newColor => setStatusColors({
        ...statusColors,
        [status]: newColor
      })} label={\`\${status.charAt(0).toUpperCase() + status.slice(1)} Status\`} />)}\r
        <div style={{
        padding: '1.5rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.5rem'
      }}>\r
          <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>\r
            Status Dashboard\r
          </div>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>\r
            {statuses.map(({
            key,
            label,
            count
          }) => <div key={key} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem',
            backgroundColor: 'white',
            borderRadius: '0.375rem'
          }}>\r
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>\r
                  <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: statusColors[key as keyof typeof statusColors]
              }} />\r
                  <span style={{
                fontSize: '0.875rem',
                fontWeight: 500
              }}>{label}</span>\r
                </div>\r
                <span style={{
              fontSize: '0.875rem',
              color: '#64748b'
            }}>{count}</span>\r
              </div>)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [highlightColor, setHighlightColor] = useState('#FFEB3B');
    const [text] = useState('This is important text that needs to be highlighted for emphasis.');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Text Highlighter</h3>\r
        <ColorPicker value={highlightColor} onChange={setHighlightColor} label="Highlight Color" presets={['#FFEB3B', '#FFC107', '#FF9800', '#8BC34A', '#4CAF50', '#00BCD4', '#03A9F4', '#E91E63', '#9C27B0', '#F44336']} />\r
        <div style={{
        padding: '1.5rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.5rem'
      }}>\r
          <p style={{
          fontSize: '0.875rem',
          lineHeight: 1.6
        }}>\r
            {text.split(' ').map((word, i) => <span key={i} style={{
            backgroundColor: i % 3 === 0 ? highlightColor : 'transparent',
            padding: i % 3 === 0 ? '0.125rem 0.25rem' : '0',
            borderRadius: '0.125rem'
          }}>\r
                {word}{' '}\r
              </span>)}\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const _=["Default","WithLabel","WithHelperText","CustomPresets","BrandColors","GrayscalePresets","Disabled","ThemeCustomizer","BackgroundColorPicker","ChartColorPicker","StatusColors","HighlightColorPicker"];export{y as BackgroundColorPicker,g as BrandColors,F as ChartColorPicker,p as CustomPresets,u as Default,f as Disabled,x as GrayscalePresets,B as HighlightColorPicker,v as StatusColors,b as ThemeCustomizer,h as WithHelperText,C as WithLabel,_ as __namedExportsOrder,I as default};
