import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DLQwTMM_.js";import{X as ye}from"./x-Cv5plvkG.js";import{C as ve}from"./calendar-9gieZ6qJ.js";import{C as xe}from"./chevron-left-CSKPvvq5.js";import{C as be}from"./chevron-right-C5ULoa76.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Cikyxpgj.js";const Se=["Su","Mo","Tu","We","Th","Fr","Sa"],ke=["January","February","March","April","May","June","July","August","September","October","November","December"],i=o.forwardRef(({value:t,onChange:r,label:s,placeholder:d="Select date",minDate:h,maxDate:D,disabledDates:v,locale:_="en-US",format:te="medium",validationState:f,validationMessage:x,helperText:A,required:ae=!1,disabled:b=!1,showTodayButton:H=!0,showClearButton:R=!0,className:re="",size:Y="md"},ne)=>{const[p,c]=o.useState(!1),[u,S]=o.useState(t||new Date),L=o.useRef(null),k=o.useRef(null),J=o.useId(),K=o.useId(),X=o.useId();o.useImperativeHandle(ne,()=>({focus:()=>k.current?.focus(),blur:()=>k.current?.blur(),open:()=>c(!0),close:()=>c(!1)})),o.useEffect(()=>{const a=n=>{L.current&&!L.current.contains(n.target)&&c(!1)};return p&&document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[p]),o.useEffect(()=>{t&&S(t)},[t]);const se=a=>{if(!a)return"";let n;switch(te){case"short":n={month:"numeric",day:"numeric",year:"numeric"};break;case"medium":n={month:"short",day:"numeric",year:"numeric"};break;case"long":n={month:"long",day:"numeric",year:"numeric"};break;default:n={month:"short",day:"numeric",year:"numeric"}}return new Intl.DateTimeFormat(_,n).format(a)},U=a=>h&&a<new Date(h.setHours(0,0,0,0))||D&&a>new Date(D.setHours(23,59,59,999))?!0:v?Array.isArray(v)?v.some(n=>n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate()):v(a):!1,G=(a,n)=>a?a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate():!1,oe=a=>G(new Date,a),Q=(a,n)=>new Date(a,n+1,0).getDate(),ie=(a,n)=>new Date(a,n,1).getDay(),de=()=>{const a=u.getFullYear(),n=u.getMonth(),$=Q(a,n),g=ie(a,n),y=Q(a,n-1),m=[];for(let l=g-1;l>=0;l--)m.push({date:new Date(a,n-1,y-l),isCurrentMonth:!1});for(let l=1;l<=$;l++)m.push({date:new Date(a,n,l),isCurrentMonth:!0});const ge=42-m.length;for(let l=1;l<=ge;l++)m.push({date:new Date(a,n+1,l),isCurrentMonth:!1});return m},le=()=>{S(new Date(u.getFullYear(),u.getMonth()-1,1))},ce=()=>{S(new Date(u.getFullYear(),u.getMonth()+1,1))},ue=a=>{U(a)||(r?.(a),c(!1))},me=()=>{const a=new Date;U(a)||(r?.(a),S(a),c(!1))},Z=()=>{r?.(null)},De=a=>{a.key==="Escape"?(c(!1),k.current?.focus()):a.key==="Enter"&&!p&&c(!0)},pe={sm:"text-sm py-1.5 px-3",md:"text-sm py-2 px-3",lg:"text-base py-2.5 px-4"},ee={sm:"h-4 w-4",md:"h-4 w-4",lg:"h-5 w-5"},he={error:"border-error-500 focus:ring-error-500 focus:border-error-500",success:"border-success-500 focus:ring-success-500 focus:border-success-500",warning:"border-warning-500 focus:ring-warning-500 focus:border-warning-500"},fe={error:"text-error-600",success:"text-success-600",warning:"text-warning-600"};return e.jsxs("div",{className:`relative ${re}`,ref:L,children:[s&&e.jsxs("label",{id:J,className:"block text-sm font-medium text-ink-700 mb-1",children:[s,ae&&e.jsx("span",{className:"text-error-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:k,type:"text",readOnly:!0,value:se(t||null),placeholder:d,onClick:()=>!b&&c(!p),onKeyDown:De,disabled:b,className:`
            w-full rounded-md border bg-white
            ${pe[Y]}
            ${f?he[f]:"border-paper-300 focus:ring-primary-500 focus:border-primary-500"}
            ${b?"bg-paper-100 text-ink-400 cursor-not-allowed":"cursor-pointer"}
            focus:outline-none focus:ring-2
            pr-10
          `,"aria-labelledby":s?J:void 0,"aria-label":s?void 0:"Date picker","aria-expanded":p,"aria-haspopup":"dialog","aria-controls":K,"aria-invalid":f==="error"?"true":void 0,"aria-describedby":x?X:void 0,role:"combobox"}),e.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 gap-1",children:[R&&t&&!b&&e.jsx("button",{type:"button",onClick:a=>{a.stopPropagation(),Z()},className:"text-ink-400 hover:text-ink-600 focus:outline-none","aria-label":"Clear date",children:e.jsx(ye,{className:ee[Y]})}),e.jsx(ve,{className:`${ee[Y]} text-ink-400`})]})]}),x&&e.jsx("p",{id:X,className:`mt-1 text-xs ${f?fe[f]:"text-ink-500"}`,role:"alert","aria-live":"polite",children:x}),A&&!x&&e.jsx("p",{className:"mt-1 text-xs text-ink-500",children:A}),p&&e.jsxs("div",{id:K,className:"absolute z-50 mt-1 bg-white rounded-lg shadow-lg border border-paper-200 p-3 w-72",role:"dialog","aria-modal":"true","aria-label":"Date picker calendar",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("button",{type:"button",onClick:le,className:"p-1 rounded hover:bg-paper-100 text-ink-600 hover:text-ink-900","aria-label":"Previous month",children:e.jsx(xe,{className:"h-5 w-5"})}),e.jsxs("span",{className:"text-sm font-semibold text-ink-900",children:[ke[u.getMonth()]," ",u.getFullYear()]}),e.jsx("button",{type:"button",onClick:ce,className:"p-1 rounded hover:bg-paper-100 text-ink-600 hover:text-ink-900","aria-label":"Next month",children:e.jsx(be,{className:"h-5 w-5"})})]}),e.jsx("div",{className:"grid grid-cols-7 mb-1",children:Se.map(a=>e.jsx("div",{className:"text-center text-xs font-medium text-ink-500 py-1",children:a},a))}),e.jsx("div",{className:"grid grid-cols-7",children:de().map(({date:a,isCurrentMonth:n},$)=>{const g=U(a),y=G(t||null,a),m=oe(a);return e.jsx("button",{type:"button",onClick:()=>ue(a),disabled:g,className:`
                    p-2 text-sm rounded-md transition-colors
                    ${n?"text-ink-700":"text-ink-300"}
                    ${g?"cursor-not-allowed opacity-50":"hover:bg-paper-100"}
                    ${y?"bg-primary-500 text-white hover:bg-primary-600":""}
                    ${m&&!y?"border border-primary-500 font-semibold":""}
                  `,"aria-label":a.toLocaleDateString(_,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),"aria-selected":y,"aria-disabled":g,"aria-current":m?"date":void 0,role:"gridcell",children:a.getDate()},$)})}),(H||R)&&e.jsxs("div",{className:"mt-3 pt-3 border-t border-paper-200 flex justify-between",children:[H&&e.jsx("button",{type:"button",onClick:me,className:"text-sm text-primary-600 hover:text-primary-700 font-medium",children:"Today"}),R&&t&&e.jsx("button",{type:"button",onClick:()=>{Z(),c(!1)},className:"text-sm text-ink-500 hover:text-ink-700",children:"Clear"})]})]})]})});i.displayName="DatePicker";try{i.displayName="DatePicker",i.__docgenInfo={description:`DatePicker component for selecting dates with a calendar dropdown.

Features:
- Calendar popup with month/year navigation
- Min/max date constraints
- Disabled dates support
- Locale-aware formatting
- Keyboard navigation
- Today and clear buttons
- Validation states`,displayName:"DatePicker",props:{value:{defaultValue:null,description:"Selected date value",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"(date: Date) => void"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Select date"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:null,description:"Disabled dates - array or function",name:"disabledDates",required:!1,type:{name:"Date[] | ((date: Date) => boolean)"}},locale:{defaultValue:{value:"en-US"},description:"Locale for date formatting (default: 'en-US')",name:"locale",required:!1,type:{name:"string"}},format:{defaultValue:{value:"medium"},description:"Date display format",name:"format",required:!1,type:{name:"enum",value:[{value:'"short"'},{value:'"medium"'},{value:'"long"'}]}},validationState:{defaultValue:null,description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},validationMessage:{defaultValue:null,description:"Validation message",name:"validationMessage",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Required field indicator",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},showTodayButton:{defaultValue:{value:"true"},description:"Show today button",name:"showTodayButton",required:!1,type:{name:"boolean"}},showClearButton:{defaultValue:{value:"true"},description:"Show clear button",name:"showClearButton",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const ze={title:"Forms/DatePicker",component:i,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{minWidth:"400px",padding:"2rem"},children:e.jsx(t,{})})]},w={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r})}},C={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Select Date"})}},j={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Appointment Date",placeholder:"Choose a date"})}},T={render:()=>{const[t,r]=o.useState(new Date);return e.jsx(i,{value:t,onChange:r,label:"Meeting Date"})}},P={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Birth Date",required:!0})}},M={args:{value:new Date,label:"Disabled Date",disabled:!0}},N={render:()=>{const[t,r]=o.useState(void 0),s=new Date;return e.jsx(i,{value:t,onChange:r,label:"Future Date Only",minDate:s,helperText:"Select a date from today onwards"})}},q={render:()=>{const[t,r]=o.useState(void 0),s=new Date;return e.jsx(i,{value:t,onChange:r,label:"Past Date Only",maxDate:s,helperText:"Select a date up to today"})}},z={render:()=>{const[t,r]=o.useState(void 0),s=new Date(2024,0,1),d=new Date(2024,11,31);return e.jsx(i,{value:t,onChange:r,label:"Date in 2024",minDate:s,maxDate:d,helperText:"Select any date within 2024"})}},E={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Event Date",error:"Please select a valid date"})}},I={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Compact Date",size:"sm"})}},V={render:()=>{const[t,r]=o.useState(void 0);return e.jsx(i,{value:t,onChange:r,label:"Large Date",size:"lg"})}},F={render:()=>{const[t,r]=o.useState(void 0),[s,d]=o.useState(void 0),h=new Date;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Hotel Booking"}),e.jsx(i,{value:t,onChange:D=>{r(D),s&&D&&D>=s&&d(void 0)},label:"Check-in Date",minDate:h,required:!0}),e.jsx(i,{value:s,onChange:d,label:"Check-out Date",minDate:t||h,disabled:!t,required:!0,helperText:"Select check-in date first"}),t&&s&&e.jsx("div",{style:{padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Duration: ",Math.ceil((s.getTime()-t.getTime())/(1e3*60*60*24))," nights"]})})]})}},O={render:()=>{const[t,r]=o.useState(void 0),s=new Date,d=new Date(1900,0,1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(i,{value:t,onChange:r,label:"Date of Birth",maxDate:s,minDate:d,required:!0,helperText:"You must be 18 years or older"}),t&&e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:["Age: ",Math.floor((s.getTime()-t.getTime())/(1e3*60*60*24*365.25))," years"]})]})}},W={render:()=>{const[t,r]=o.useState(void 0),s=new Date,d=new Date(s.getFullYear()+1,s.getMonth(),s.getDate());return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"100%"},children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600},children:"Schedule Event"}),e.jsx(i,{value:t,onChange:r,label:"Event Date",minDate:s,maxDate:d,required:!0,helperText:"Events can be scheduled up to one year in advance"}),t&&e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#eff6ff",border:"1px solid #3b82f6",borderRadius:"0.375rem"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:500,marginBottom:"0.25rem"},children:["Selected: ",t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:[Math.ceil((t.getTime()-s.getTime())/(1e3*60*60*24))," days from now"]})]})]})}},B={render:()=>{const[t,r]=o.useState(void 0),s=new Date,d=t&&(t.getTime()-s.getTime())/(1e3*60*60*24)<=7;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(i,{value:t,onChange:r,label:"Project Deadline",minDate:s,required:!0}),t&&e.jsx("div",{style:{padding:"0.75rem",backgroundColor:d?"#fef2f2":"#f0fdf4",border:`1px solid ${d?"#ef4444":"#10b981"}`,borderRadius:"0.375rem",fontSize:"0.875rem"},children:d?"⚠️ Urgent deadline within 7 days":"✓ Deadline set"})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} />;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Select Date" />;
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Appointment Date" placeholder="Choose a date" />;
  }
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} label="Meeting Date" />;
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Birth Date" required />;
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date(),
    label: 'Disabled Date',
    disabled: true
  }
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    return <DatePicker value={date} onChange={setDate} label="Future Date Only" minDate={today} helperText="Select a date from today onwards" />;
  }
}`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    return <DatePicker value={date} onChange={setDate} label="Past Date Only" maxDate={today} helperText="Select a date up to today" />;
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const minDate = new Date(2024, 0, 1);
    const maxDate = new Date(2024, 11, 31);
    return <DatePicker value={date} onChange={setDate} label="Date in 2024" minDate={minDate} maxDate={maxDate} helperText="Select any date within 2024" />;
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Event Date" error="Please select a valid date" />;
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Compact Date" size="sm" />;
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} label="Large Date" size="lg" />;
  }
}`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
    const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
    const today = new Date();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>\r
          Hotel Booking\r
        </h3>\r
        <DatePicker value={checkIn} onChange={date => {
        setCheckIn(date);
        if (checkOut && date && date >= checkOut) {
          setCheckOut(undefined);
        }
      }} label="Check-in Date" minDate={today} required />\r
        <DatePicker value={checkOut} onChange={setCheckOut} label="Check-out Date" minDate={checkIn || today} disabled={!checkIn} required helperText="Select check-in date first" />\r
        {checkIn && checkOut && <div style={{
        padding: '1rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
              Duration: {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const maxDate = new Date();
    const minDate = new Date(1900, 0, 1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <DatePicker value={birthDate} onChange={setBirthDate} label="Date of Birth" maxDate={maxDate} minDate={minDate} required helperText="You must be 18 years or older" />\r
        {birthDate && <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
            Age: {Math.floor((maxDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years\r
          </div>}\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    const oneYearFromNow = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      width: '100%'
    }}>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600
      }}>Schedule Event</h3>\r
        <DatePicker value={eventDate} onChange={setEventDate} label="Event Date" minDate={today} maxDate={oneYearFromNow} required helperText="Events can be scheduled up to one year in advance" />\r
        {eventDate && <div style={{
        padding: '1rem',
        backgroundColor: '#eff6ff',
        border: '1px solid #3b82f6',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.25rem'
        }}>\r
              Selected: {eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}\r
            </div>\r
            <div style={{
          fontSize: '0.75rem',
          color: '#64748b'
        }}>\r
              {Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))} days from now\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [deadline, setDeadline] = useState<Date | undefined>(undefined);
    const today = new Date();
    const isUrgent = deadline && (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 7;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <DatePicker value={deadline} onChange={setDeadline} label="Project Deadline" minDate={today} required />\r
        {deadline && <div style={{
        padding: '0.75rem',
        backgroundColor: isUrgent ? '#fef2f2' : '#f0fdf4',
        border: \`1px solid \${isUrgent ? '#ef4444' : '#10b981'}\`,
        borderRadius: '0.375rem',
        fontSize: '0.875rem'
      }}>\r
            {isUrgent ? '⚠️ Urgent deadline within 7 days' : '✓ Deadline set'}\r
          </div>}\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const Ee=["Default","WithLabel","WithPlaceholder","WithDefaultValue","Required","Disabled","WithMinDate","WithMaxDate","DateRange","WithError","SmallSize","LargeSize","BookingForm","BirthdayPicker","EventScheduler","DeadlinePicker"];export{O as BirthdayPicker,F as BookingForm,z as DateRange,B as DeadlinePicker,w as Default,M as Disabled,W as EventScheduler,V as LargeSize,P as Required,I as SmallSize,T as WithDefaultValue,E as WithError,C as WithLabel,q as WithMaxDate,N as WithMinDate,j as WithPlaceholder,Ee as __namedExportsOrder,ze as default};
