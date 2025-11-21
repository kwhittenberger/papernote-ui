import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CJgaPZSw.js";import"./preload-helper-PPVm8Dsz.js";function s({value:e=0,onChange:a,min:t=0,max:u=100,step:d=1,disabled:i=!1,showValue:c=!1,label:k,helperText:_,color:A="primary",size:v="md",formatValue:p,showMinMax:F=!1}){const[K,P]=n.useState(e),q=n.useRef(null),[N,R]=n.useState(!1),m=e!==void 0?e:K,H=(m-t)/(u-t)*100,X={primary:"bg-accent-500",success:"bg-success-500",warning:"bg-warning-500",error:"bg-error-500"},Q={sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"},O={sm:"h-1",md:"h-2",lg:"h-3"},B=l=>{if(!q.current||i)return;const o=q.current.getBoundingClientRect(),T=Math.max(0,Math.min(l-o.left,o.width))/o.width*(u-t)+t,Z=Math.round(T/d)*d,I=Math.max(t,Math.min(u,Z));a?a(I):P(I)},U=l=>{i||(R(!0),B(l.clientX))},G=l=>{i||(R(!0),B(l.touches[0].clientX))};n.useEffect(()=>{if(!N)return;const l=h=>{h.preventDefault();const T=h instanceof MouseEvent?h.clientX:h.touches[0].clientX;B(T)},o=()=>{R(!1)};return document.addEventListener("mousemove",l),document.addEventListener("touchmove",l),document.addEventListener("mouseup",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("touchmove",l),document.removeEventListener("mouseup",o),document.removeEventListener("touchend",o)}},[N]);const J=l=>{if(i)return;let o=m;switch(l.key){case"ArrowRight":case"ArrowUp":l.preventDefault(),o=Math.min(u,m+d);break;case"ArrowLeft":case"ArrowDown":l.preventDefault(),o=Math.max(t,m-d);break;case"Home":l.preventDefault(),o=t;break;case"End":l.preventDefault(),o=u;break;default:return}a?a(o):P(o)},Y=p?p(m):m.toString();return r.jsxs("div",{className:"w-full",children:[k&&r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("label",{className:"label",children:k}),c&&r.jsx("span",{className:"text-sm font-medium text-ink-700",children:Y})]}),r.jsxs("div",{ref:q,className:`
          relative w-full ${O[v]} bg-paper-200 rounded-full cursor-pointer
          ${i?"opacity-40 cursor-not-allowed":""}
        `,onMouseDown:U,onTouchStart:G,role:"slider","aria-valuemin":t,"aria-valuemax":u,"aria-valuenow":m,"aria-disabled":i,tabIndex:i?-1:0,onKeyDown:J,children:[r.jsx("div",{className:`absolute top-0 left-0 h-full rounded-full transition-all duration-100 ${X[A]}`,style:{width:`${H}%`}}),r.jsx("div",{className:`
            absolute top-1/2 -translate-y-1/2 ${Q[v]} rounded-full
            ${X[A]} shadow-md border-2 border-white
            transition-transform duration-100
            ${N?"scale-110":"scale-100"}
            ${i?"":"hover:scale-110"}
          `,style:{left:`calc(${H}% - ${v==="sm"?"8px":v==="md"?"10px":"12px"})`}})]}),F&&r.jsxs("div",{className:"flex items-center justify-between mt-1",children:[r.jsx("span",{className:"text-xs text-ink-500",children:p?p(t):t}),r.jsx("span",{className:"text-xs text-ink-500",children:p?p(u):u})]}),_&&r.jsx("p",{className:"mt-2 text-xs text-ink-600",children:_})]})}try{s.displayName="Slider",s.__docgenInfo={description:"",displayName:"Slider",props:{value:{defaultValue:{value:"0"},description:"Current value",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},min:{defaultValue:{value:"0"},description:"Minimum value (default: 0)",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value (default: 100)",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment (default: 1)",name:"step",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},showValue:{defaultValue:{value:"false"},description:"Show value label",name:"showValue",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"primary"'}]}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},formatValue:{defaultValue:null,description:"Custom value formatter",name:"formatValue",required:!1,type:{name:"((value: number) => string)"}},showMinMax:{defaultValue:{value:"false"},description:"Show min/max labels",name:"showMinMax",required:!1,type:{name:"boolean"}}}}}catch{}const te={title:"Forms/Slider",component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{minWidth:"400px",padding:"2rem"},children:r.jsx(e,{})})],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","success","warning","error"]}}},g={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a})}},S={render:()=>{const[e,a]=n.useState(75);return r.jsx(s,{value:e,onChange:a,label:"Volume"})}},x={render:()=>{const[e,a]=n.useState(60);return r.jsx(s,{value:e,onChange:a,label:"Brightness",showValue:!0})}},V={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a,label:"Temperature",showMinMax:!0})}},f={render:()=>{const[e,a]=n.useState(20);return r.jsx(s,{value:e,onChange:a,min:0,max:100,label:"Price Range",showValue:!0,showMinMax:!0})}},w={render:()=>{const[e,a]=n.useState(25);return r.jsx(s,{value:e,onChange:a,min:0,max:100,step:25,label:"Quality",showValue:!0,showMinMax:!0})}},b={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a,size:"sm",label:"Small Slider"})}},C={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a,size:"lg",label:"Large Slider"})}},M={render:()=>{const[e,a]=n.useState(80);return r.jsx(s,{value:e,onChange:a,color:"success",label:"Success",showValue:!0})}},y={render:()=>{const[e,a]=n.useState(60);return r.jsx(s,{value:e,onChange:a,color:"warning",label:"Warning",showValue:!0})}},j={render:()=>{const[e,a]=n.useState(30);return r.jsx(s,{value:e,onChange:a,color:"error",label:"Error",showValue:!0})}},$={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a,label:"Volume",helperText:"Adjust the volume level",showValue:!0})}},D={args:{value:50,disabled:!0,label:"Disabled Slider"}},E={render:()=>{const[e,a]=n.useState(50);return r.jsx(s,{value:e,onChange:a,label:"Volume",showValue:!0,formatValue:t=>`${t}%`})}},L={render:()=>{const[e,a]=n.useState(500);return r.jsx(s,{value:e,onChange:a,min:0,max:1e3,step:50,label:"Maximum Price",showValue:!0,showMinMax:!0,formatValue:t=>`$${t}`})}},W={render:()=>{const[e,a]=n.useState(70),[t,u]=n.useState(80),[d,i]=n.useState(50);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"100%"},children:[r.jsx(s,{value:e,onChange:a,label:"Volume",showValue:!0,formatValue:c=>`${c}%`,color:"primary"}),r.jsx(s,{value:t,onChange:u,label:"Brightness",showValue:!0,formatValue:c=>`${c}%`,color:"warning"}),r.jsx(s,{value:d,onChange:i,label:"Contrast",showValue:!0,formatValue:c=>`${c}%`,color:"success"})]})}},z={render:()=>{const[e,a]=n.useState({volume:75,brightness:80,textSize:16,animationSpeed:500});return r.jsxs("div",{style:{width:"500px",padding:"1.5rem",border:"1px solid #e5e5e5",borderRadius:"0.5rem"},children:[r.jsx("h3",{style:{marginBottom:"1.5rem"},children:"Display Settings"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsx(s,{value:e.volume,onChange:t=>a({...e,volume:t}),label:"System Volume",min:0,max:100,showValue:!0,showMinMax:!0,formatValue:t=>`${t}%`}),r.jsx(s,{value:e.brightness,onChange:t=>a({...e,brightness:t}),label:"Screen Brightness",min:0,max:100,showValue:!0,showMinMax:!0,formatValue:t=>`${t}%`,color:"warning"}),r.jsx(s,{value:e.textSize,onChange:t=>a({...e,textSize:t}),label:"Text Size",min:12,max:24,step:2,showValue:!0,showMinMax:!0,formatValue:t=>`${t}px`}),r.jsx(s,{value:e.animationSpeed,onChange:t=>a({...e,animationSpeed:t}),label:"Animation Speed",min:100,max:1e3,step:100,showValue:!0,showMinMax:!0,formatValue:t=>`${t}ms`,color:"success"})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(75);
    return <Slider value={value} onChange={setValue} label="Volume" />;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(60);
    return <Slider value={value} onChange={setValue} label="Brightness" showValue />;
  }
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} label="Temperature" showMinMax />;
  }
}`,...V.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(20);
    return <Slider value={value} onChange={setValue} min={0} max={100} label="Price Range" showValue showMinMax />;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(25);
    return <Slider value={value} onChange={setValue} min={0} max={100} step={25} label="Quality" showValue showMinMax />;
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} size="sm" label="Small Slider" />;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} size="lg" label="Large Slider" />;
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(80);
    return <Slider value={value} onChange={setValue} color="success" label="Success" showValue />;
  }
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(60);
    return <Slider value={value} onChange={setValue} color="warning" label="Warning" showValue />;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(30);
    return <Slider value={value} onChange={setValue} color="error" label="Error" showValue />;
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} label="Volume" helperText="Adjust the volume level" showValue />;
  }
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    disabled: true,
    label: 'Disabled Slider'
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider value={value} onChange={setValue} label="Volume" showValue formatValue={val => \`\${val}%\`} />;
  }
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(500);
    return <Slider value={value} onChange={setValue} min={0} max={1000} step={50} label="Maximum Price" showValue showMinMax formatValue={val => \`$\${val}\`} />;
  }
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(80);
    const [contrast, setContrast] = useState(50);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '100%'
    }}>\r
        <Slider value={volume} onChange={setVolume} label="Volume" showValue formatValue={val => \`\${val}%\`} color="primary" />\r
        <Slider value={brightness} onChange={setBrightness} label="Brightness" showValue formatValue={val => \`\${val}%\`} color="warning" />\r
        <Slider value={contrast} onChange={setContrast} label="Contrast" showValue formatValue={val => \`\${val}%\`} color="success" />\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      volume: 75,
      brightness: 80,
      textSize: 16,
      animationSpeed: 500
    });
    return <div style={{
      width: '500px',
      padding: '1.5rem',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem'
    }}>\r
        <h3 style={{
        marginBottom: '1.5rem'
      }}>Display Settings</h3>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>\r
          <Slider value={settings.volume} onChange={val => setSettings({
          ...settings,
          volume: val
        })} label="System Volume" min={0} max={100} showValue showMinMax formatValue={val => \`\${val}%\`} />\r
          <Slider value={settings.brightness} onChange={val => setSettings({
          ...settings,
          brightness: val
        })} label="Screen Brightness" min={0} max={100} showValue showMinMax formatValue={val => \`\${val}%\`} color="warning" />\r
          <Slider value={settings.textSize} onChange={val => setSettings({
          ...settings,
          textSize: val
        })} label="Text Size" min={12} max={24} step={2} showValue showMinMax formatValue={val => \`\${val}px\`} />\r
          <Slider value={settings.animationSpeed} onChange={val => setSettings({
          ...settings,
          animationSpeed: val
        })} label="Animation Speed" min={100} max={1000} step={100} showValue showMinMax formatValue={val => \`\${val}ms\`} color="success" />\r
        </div>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const se=["Default","WithLabel","WithValue","WithMinMax","CustomRange","WithStep","Small","Large","SuccessColor","WarningColor","ErrorColor","WithHelperText","Disabled","CustomFormatter","PriceRange","MultipleSliders","SettingsPanel"];export{E as CustomFormatter,f as CustomRange,g as Default,D as Disabled,j as ErrorColor,C as Large,W as MultipleSliders,L as PriceRange,z as SettingsPanel,b as Small,M as SuccessColor,y as WarningColor,$ as WithHelperText,S as WithLabel,V as WithMinMax,w as WithStep,x as WithValue,se as __namedExportsOrder,te as default};
