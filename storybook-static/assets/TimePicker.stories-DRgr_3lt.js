import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-BKwLVrTx.js";import{X as ge}from"./x-B1I68jKP.js";import{C as Te}from"./clock-BhSPvaTC.js";import{C as xe}from"./chevron-up-Di8uXLIi.js";import{C as be}from"./chevron-down-CpEQ32Ko.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BYzyF8e7.js";const n=a.forwardRef(({value:t=null,onChange:r,label:m,placeholder:c="Select time",use12Hour:s=!1,showSeconds:u=!1,minuteStep:d=1,minTime:p,maxTime:h,validationState:l,validationMessage:f,helperText:v,required:K=!1,disabled:T=!1,className:se="",size:X="md"},oe)=>{const[k,S]=a.useState(!1),[x,Z]=a.useState(()=>ie(t,s)),G=a.useRef(null),w=a.useRef(null),ee=a.useId(),te=a.useId(),re=a.useId();a.useImperativeHandle(oe,()=>({focus:()=>w.current?.focus(),blur:()=>w.current?.blur(),open:()=>S(!0),close:()=>S(!1)}));function ie(i,o){if(!i){const J=new Date;return{hours:o?J.getHours()%12||12:J.getHours(),minutes:0,seconds:0,period:o?J.getHours()>=12?"PM":"AM":void 0}}const[y,M]=i.split(" "),b=y.split(":"),g=parseInt(b[0],10),j=parseInt(b[1]||"0",10),C=parseInt(b[2]||"0",10);return o?{hours:g%12||12,minutes:j,seconds:C,period:M||(g>=12?"PM":"AM")}:{hours:g,minutes:j,seconds:C}}function le(i,o,y){let M=i.hours;return o?`${M.toString().padStart(2,"0")}:${i.minutes.toString().padStart(2,"0")}${y?":"+i.seconds.toString().padStart(2,"0"):""} ${i.period}`:`${M.toString().padStart(2,"0")}:${i.minutes.toString().padStart(2,"0")}${y?":"+i.seconds.toString().padStart(2,"0"):""}`}function ae(i){let o=i.hours;return i.period==="PM"&&o!==12?o+=12:i.period==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${i.minutes.toString().padStart(2,"0")}${u?":"+i.seconds.toString().padStart(2,"0"):""}`}function me(i){const o=ae(i),[y,M]=o.split(":").map(Number),b=y*60+M;if(p){const[g,j]=p.split(":").map(Number),C=g*60+j;if(b<C)return!1}if(h){const[g,j]=h.split(":").map(Number),C=g*60+j;if(b>C)return!1}return!0}const P=i=>{const o={...x,...i};Z(o),me(o)&&r?.(ae(o))},ue=()=>{r?.(null),S(!1),w.current?.focus()};a.useEffect(()=>{const i=o=>{G.current&&!G.current.contains(o.target)&&S(!1)};return k&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[k]),a.useEffect(()=>{Z(ie(t,s))},[t,s]);const de={sm:"text-sm py-1.5 px-3",md:"text-sm py-2 px-3",lg:"text-base py-2.5 px-4"},ne={sm:"h-4 w-4",md:"h-4 w-4",lg:"h-5 w-5"},ce={error:"border-error-500 focus:ring-error-500 focus:border-error-500",success:"border-success-500 focus:ring-success-500 focus:border-success-500",warning:"border-warning-500 focus:ring-warning-500 focus:border-warning-500"},pe={error:"text-error-600",success:"text-success-600",warning:"text-warning-600"},fe=t?le(x,s,u):"",he=Array.from({length:60/d},(i,o)=>o*d);return e.jsxs("div",{className:`relative ${se}`,ref:G,children:[m&&e.jsxs("label",{id:ee,className:"block text-sm font-medium text-ink-700 mb-1",children:[m,K&&e.jsx("span",{className:"text-error-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:w,type:"text",value:fe,onClick:()=>!T&&S(!0),onFocus:()=>!T&&S(!0),placeholder:c,disabled:T,readOnly:!0,className:`
            w-full rounded-md border bg-white cursor-pointer
            ${de[X]}
            ${l?ce[l]:"border-paper-300 focus:ring-primary-500 focus:border-primary-500"}
            ${T?"bg-paper-100 text-ink-400 cursor-not-allowed":""}
            focus:outline-none focus:ring-2
            pr-20
          `,"aria-labelledby":m?ee:void 0,"aria-label":m?void 0:"Time picker","aria-expanded":k,"aria-haspopup":"dialog","aria-controls":te,"aria-invalid":l==="error"?"true":void 0,"aria-describedby":f?re:void 0,role:"combobox"}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 gap-1",children:[t&&!T&&e.jsx("button",{type:"button",onClick:i=>{i.stopPropagation(),ue()},className:"p-0.5 text-ink-400 hover:text-ink-600 focus:outline-none","aria-label":"Clear",tabIndex:-1,children:e.jsx(ge,{className:ne[X]})}),e.jsx(Te,{className:`${ne[X]} text-ink-400`})]})]}),f&&e.jsx("p",{id:re,className:`mt-1 text-xs ${l?pe[l]:"text-ink-500"}`,role:"alert","aria-live":"polite",children:f}),v&&!f&&e.jsx("p",{className:"mt-1 text-xs text-ink-500",children:v}),k&&e.jsx("div",{id:te,className:"absolute z-50 mt-1 bg-white rounded-md shadow-lg border border-paper-200",role:"dialog","aria-modal":"true","aria-label":"Time selection",children:e.jsxs("div",{className:"p-4 flex items-center gap-4",children:[e.jsx(Q,{value:x.hours,min:s?1:0,max:s?12:23,onChange:i=>P({hours:i}),label:"Hour"}),e.jsx("span",{className:"text-2xl font-bold text-ink-600",children:":"}),e.jsx(Q,{value:x.minutes,min:0,max:59,step:d,options:he,onChange:i=>P({minutes:i}),label:"Min"}),u&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-2xl font-bold text-ink-600",children:":"}),e.jsx(Q,{value:x.seconds,min:0,max:59,onChange:i=>P({seconds:i}),label:"Sec"})]}),s&&e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("button",{type:"button",onClick:()=>P({period:"AM"}),className:`
                    px-3 py-1 text-sm font-medium rounded
                    ${x.period==="AM"?"bg-primary-500 text-white":"bg-paper-100 text-ink-600 hover:bg-paper-200"}
                  `,children:"AM"}),e.jsx("button",{type:"button",onClick:()=>P({period:"PM"}),className:`
                    px-3 py-1 text-sm font-medium rounded
                    ${x.period==="PM"?"bg-primary-500 text-white":"bg-paper-100 text-ink-600 hover:bg-paper-200"}
                  `,children:"PM"})]})]})})]})});n.displayName="TimePicker";function Q({value:t,min:r,max:m,step:c=1,options:s,onChange:u,label:d}){const p=()=>{if(s){const f=(s.indexOf(t)+1)%s.length;u(s[f])}else{const l=t+c;u(l>m?r:l)}},h=()=>{if(s){const l=s.indexOf(t),f=l-1<0?s.length-1:l-1;u(s[f])}else{const l=t-c;u(l<r?m:l)}};return e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("button",{type:"button",onClick:p,className:"p-1 text-ink-600 hover:bg-paper-100 rounded","aria-label":`Increase ${d}`,children:e.jsx(xe,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-12 text-center",children:e.jsx("input",{type:"text",value:t.toString().padStart(2,"0"),readOnly:!0,className:"w-full text-center text-2xl font-bold text-ink-900 bg-transparent border-none focus:outline-none","aria-label":d})}),e.jsx("button",{type:"button",onClick:h,className:"p-1 text-ink-600 hover:bg-paper-100 rounded","aria-label":`Decrease ${d}`,children:e.jsx(be,{className:"h-4 w-4"})})]})}try{n.displayName="TimePicker",n.__docgenInfo={description:`TimePicker component - Time selection with dropdown spinners.

Features:
- 12-hour or 24-hour format
- Optional seconds
- Minute step intervals
- Min/max time constraints
- Keyboard navigation
- Validation states
- Spinner controls`,displayName:"TimePicker",props:{value:{defaultValue:{value:"null"},description:'Selected time value (24-hour format: "HH:mm" or "HH:mm:ss")',name:"value",required:!1,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((time: string | null) => void)"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Select time"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},use12Hour:{defaultValue:{value:"false"},description:"Use 12-hour format",name:"use12Hour",required:!1,type:{name:"boolean"}},showSeconds:{defaultValue:{value:"false"},description:"Show seconds picker",name:"showSeconds",required:!1,type:{name:"boolean"}},minuteStep:{defaultValue:{value:"1"},description:"Minute step interval (1, 5, 10, 15, 30)",name:"minuteStep",required:!1,type:{name:"enum",value:[{value:"10"},{value:"1"},{value:"5"},{value:"15"},{value:"30"}]}},minTime:{defaultValue:null,description:'Minimum time (24-hour format: "HH:mm")',name:"minTime",required:!1,type:{name:"string"}},maxTime:{defaultValue:null,description:'Maximum time (24-hour format: "HH:mm")',name:"maxTime",required:!1,type:{name:"string"}},validationState:{defaultValue:null,description:"Validation state",name:"validationState",required:!1,type:{name:'"success" | "warning" | "error" | null'}},validationMessage:{defaultValue:null,description:"Validation message",name:"validationMessage",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Required field",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const we={title:"Forms/TimePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{minWidth:"400px",padding:"2rem"},children:e.jsx(t,{})})]},N={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r})}},z={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Select Time"})}},q={render:()=>{const[t,r]=a.useState("14:30");return e.jsx(n,{value:t,onChange:r,label:"Meeting Time"})}},A={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Appointment Time",format:"12"})}},R={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Military Time",format:"24"})}},W={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Start Time",placeholder:"Select a time"})}},D={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Required Time",required:!0})}},$={args:{value:"09:00",label:"Disabled Time",disabled:!0}},H={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"After 9 AM",minTime:"09:00",helperText:"Business hours start at 9 AM"})}},V={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Before 5 PM",maxTime:"17:00",helperText:"Business hours end at 5 PM"})}},I={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Business Hours",minTime:"09:00",maxTime:"17:00",helperText:"Select a time between 9 AM and 5 PM"})}},E={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Appointment Slot",interval:15,helperText:"Available in 15-minute intervals"})}},B={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Time",error:"Please select a valid time"})}},F={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Compact Time",size:"sm"})}},_={render:()=>{const[t,r]=a.useState("");return e.jsx(n,{value:t,onChange:r,label:"Large Time",size:"lg"})}},O={render:()=>{const[t,r]=a.useState(""),[m,c]=a.useState(""),s=()=>{if(!t||!m)return null;const[u,d]=t.split(":").map(Number),[p,h]=m.split(":").map(Number),l=u*60+d,v=p*60+h-l;if(v<=0)return null;const K=Math.floor(v/60),T=v%60;return`${K}h ${T}m`};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Schedule Appointment"}),e.jsx(n,{value:t,onChange:r,label:"Start Time",minTime:"09:00",maxTime:"17:00",interval:15,required:!0}),e.jsx(n,{value:m,onChange:c,label:"End Time",minTime:t||"09:00",maxTime:"17:00",interval:15,disabled:!t,required:!0}),s()&&e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Duration: ",s()]})})]})}},L={render:()=>{const[t,r]=a.useState(""),m=[{value:"06:00",label:"Morning Shift (6 AM - 2 PM)"},{value:"14:00",label:"Afternoon Shift (2 PM - 10 PM)"},{value:"22:00",label:"Night Shift (10 PM - 6 AM)"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Select Your Shift"}),e.jsx(n,{value:t,onChange:r,label:"Shift Start Time",interval:480,helperText:"Choose from available shift times"}),t&&e.jsx("div",{style:{padding:"1rem",backgroundColor:"#eff6ff",border:"1px solid #3b82f6",borderRadius:"0.375rem"},children:e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:m.find(c=>c.value===t)?.label||"Custom shift time"})})]})}},Y={render:()=>{const[t,r]=a.useState("09:00");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600},children:"Daily Reminder"}),e.jsx(n,{value:t,onChange:r,label:"Reminder Time",format:"12",interval:30}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["You'll receive a daily reminder at ",t]})]})}},U={render:()=>{const[t,r]=a.useState(""),[m,c]=a.useState(30),s=()=>{if(!t)return null;const[u,d]=t.split(":").map(Number),p=u*60+d-m,h=Math.floor(p/60),l=p%60;return`${String(h).padStart(2,"0")}:${String(l).padStart(2,"0")}`};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Plan Your Meeting"}),e.jsx(n,{value:t,onChange:r,label:"Meeting Time",minTime:"09:00",maxTime:"17:00",interval:15,required:!0}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Preparation Time (minutes)"}),e.jsxs("select",{value:m,onChange:u=>c(Number(u.target.value)),style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem"},children:[e.jsx("option",{value:15,children:"15 minutes"}),e.jsx("option",{value:30,children:"30 minutes"}),e.jsx("option",{value:45,children:"45 minutes"}),e.jsx("option",{value:60,children:"1 hour"})]})]}),t&&s()&&e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f0fdf4",border:"1px solid #10b981",borderRadius:"0.375rem"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:500,marginBottom:"0.25rem"},children:["Start preparing at: ",s()]}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:["Meeting starts at: ",t]})]})]})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} />;
  }
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Select Time" />;
  }
}`,...z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('14:30');
    return <TimePicker value={time} onChange={setTime} label="Meeting Time" />;
  }
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Appointment Time" format="12" />;
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Military Time" format="24" />;
  }
}`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Start Time" placeholder="Select a time" />;
  }
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Required Time" required />;
  }
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    value: '09:00',
    label: 'Disabled Time',
    disabled: true
  }
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="After 9 AM" minTime="09:00" helperText="Business hours start at 9 AM" />;
  }
}`,...H.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Before 5 PM" maxTime="17:00" helperText="Business hours end at 5 PM" />;
  }
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Business Hours" minTime="09:00" maxTime="17:00" helperText="Select a time between 9 AM and 5 PM" />;
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Appointment Slot" interval={15} helperText="Available in 15-minute intervals" />;
  }
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Time" error="Please select a valid time" />;
  }
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Compact Time" size="sm" />;
  }
}`,...F.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} label="Large Time" size="lg" />;
  }
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const calculateDuration = () => {
      if (!startTime || !endTime) return null;
      const [startHour, startMin] = startTime.split(':').map(Number);
      const [endHour, endMin] = endTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;
      const diff = endMinutes - startMinutes;
      if (diff <= 0) return null;
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      return \`\${hours}h \${minutes}m\`;
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
      }}>Schedule Appointment</h3>\r
        <TimePicker value={startTime} onChange={setStartTime} label="Start Time" minTime="09:00" maxTime="17:00" interval={15} required />\r
        <TimePicker value={endTime} onChange={setEndTime} label="End Time" minTime={startTime || "09:00"} maxTime="17:00" interval={15} disabled={!startTime} required />\r
        {calculateDuration() && <div style={{
        padding: '1rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
              Duration: {calculateDuration()}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [shift, setShift] = useState<string>('');
    const shifts = [{
      value: '06:00',
      label: 'Morning Shift (6 AM - 2 PM)'
    }, {
      value: '14:00',
      label: 'Afternoon Shift (2 PM - 10 PM)'
    }, {
      value: '22:00',
      label: 'Night Shift (10 PM - 6 AM)'
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
      }}>Select Your Shift</h3>\r
        <TimePicker value={shift} onChange={setShift} label="Shift Start Time" interval={480} helperText="Choose from available shift times" />\r
        {shift && <div style={{
        padding: '1rem',
        backgroundColor: '#eff6ff',
        border: '1px solid #3b82f6',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500
        }}>\r
              {shifts.find(s => s.value === shift)?.label || 'Custom shift time'}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [reminderTime, setReminderTime] = useState<string>('09:00');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.125rem',
        fontWeight: 600
      }}>Daily Reminder</h3>\r
        <TimePicker value={reminderTime} onChange={setReminderTime} label="Reminder Time" format="12" interval={30} />\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          You'll receive a daily reminder at {reminderTime}\r
        </div>\r
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [meetingTime, setMeetingTime] = useState<string>('');
    const [preparationTime, setPreparationTime] = useState<number>(30);
    const calculateStartTime = () => {
      if (!meetingTime) return null;
      const [hour, minute] = meetingTime.split(':').map(Number);
      const totalMinutes = hour * 60 + minute - preparationTime;
      const startHour = Math.floor(totalMinutes / 60);
      const startMinute = totalMinutes % 60;
      return \`\${String(startHour).padStart(2, '0')}:\${String(startMinute).padStart(2, '0')}\`;
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
      }}>Plan Your Meeting</h3>\r
        <TimePicker value={meetingTime} onChange={setMeetingTime} label="Meeting Time" minTime="09:00" maxTime="17:00" interval={15} required />\r
        <div>\r
          <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>\r
            Preparation Time (minutes)\r
          </label>\r
          <select value={preparationTime} onChange={e => setPreparationTime(Number(e.target.value))} style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          fontSize: '0.875rem'
        }}>\r
            <option value={15}>15 minutes</option>\r
            <option value={30}>30 minutes</option>\r
            <option value={45}>45 minutes</option>\r
            <option value={60}>1 hour</option>\r
          </select>\r
        </div>\r
        {meetingTime && calculateStartTime() && <div style={{
        padding: '1rem',
        backgroundColor: '#f0fdf4',
        border: '1px solid #10b981',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.25rem'
        }}>\r
              Start preparing at: {calculateStartTime()}\r
            </div>\r
            <div style={{
          fontSize: '0.75rem',
          color: '#64748b'
        }}>\r
              Meeting starts at: {meetingTime}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...U.parameters?.docs?.source}}};const Ne=["Default","WithLabel","WithDefaultValue","TwelveHourFormat","TwentyFourHourFormat","WithPlaceholder","Required","Disabled","WithMinTime","WithMaxTime","TimeRange","WithInterval","WithError","SmallSize","LargeSize","AppointmentScheduler","ShiftScheduler","ReminderTime","MeetingPlanner"];export{O as AppointmentScheduler,N as Default,$ as Disabled,_ as LargeSize,U as MeetingPlanner,Y as ReminderTime,D as Required,L as ShiftScheduler,F as SmallSize,I as TimeRange,A as TwelveHourFormat,R as TwentyFourHourFormat,q as WithDefaultValue,B as WithError,E as WithInterval,z as WithLabel,V as WithMaxTime,H as WithMinTime,W as WithPlaceholder,Ne as __namedExportsOrder,we as default};
