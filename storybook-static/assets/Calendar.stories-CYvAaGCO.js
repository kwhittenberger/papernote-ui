import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c,R as me}from"./iframe-BGnfALfv.js";import{C as P}from"./chevron-left-CHh6LlNW.js";import{C as q}from"./chevron-right-DUZ-anT2.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CUwsy_KF.js";function m({value:n,onChange:r,events:o=[],onEventClick:s,rangeMode:i=!1,rangeValue:l,onRangeChange:y,minDate:p,maxDate:v,disabledDates:O=[],showWeekNumbers:$=!1,firstDayOfWeek:S=0,className:H=""}){const[g,b]=c.useState(n||new Date),[E,V]=c.useState(null),U=c.useMemo(()=>{const t=g.getFullYear(),a=g.getMonth(),d=new Date(t,a,1),D=new Date(t,a+1,0),w=(d.getDay()-S+7)%7,Y=new Date(t,a,0).getDate(),x=42,h=[];for(let u=w-1;u>=0;u--)h.push(new Date(t,a-1,Y-u));for(let u=1;u<=D.getDate();u++)h.push(new Date(t,a,u));const L=x-h.length;for(let u=1;u<=L;u++)h.push(new Date(t,a+1,u));return h},[g,S]),G=t=>{const a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),d=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-d);const D=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a.getTime()-D.getTime())/864e5+1)/7)},J=t=>n?t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear():!1,K=t=>{if(!i||!l?.start)return!1;const a=l.end||(E&&E>l.start?E:null);if(!a)return!1;const d=t.getTime(),D=l.start.getTime(),f=a.getTime();return d>=D&&d<=f},Q=t=>{if(!i||!l?.start)return null;const a=t.getTime();return a===l.start.getTime()?"start":l.end&&a===l.end.getTime()?"end":null},_=t=>p&&t<p||v&&t>v?!0:O.some(a=>a.getDate()===t.getDate()&&a.getMonth()===t.getMonth()&&a.getFullYear()===t.getFullYear()),X=t=>t.getMonth()===g.getMonth(),Z=t=>{const a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},ee=t=>o.filter(a=>a.date.getDate()===t.getDate()&&a.date.getMonth()===t.getMonth()&&a.date.getFullYear()===t.getFullYear()),ne=t=>{_(t)||(i?!l?.start||l.start&&l.end?y?.({start:t,end:null}):t>=l.start?y?.({start:l.start,end:t}):y?.({start:t,end:l.start}):r?.(t))},te=()=>{b(new Date(g.getFullYear(),g.getMonth()-1,1))},ae=()=>{b(new Date(g.getFullYear(),g.getMonth()+1,1))},re=()=>{b(new Date(g.getFullYear()-1,g.getMonth(),1))},oe=()=>{b(new Date(g.getFullYear()+1,g.getMonth(),1))},se=()=>{b(new Date)},I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],le=[...I.slice(S),...I.slice(0,S)],ie={primary:"bg-primary-500",success:"bg-success-500",warning:"bg-warning-500",error:"bg-error-500",accent:"bg-accent-500"};return e.jsxs("div",{className:`bg-white rounded-lg border border-paper-200 shadow-sm ${H}`,children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-paper-200",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:re,className:"p-1.5 hover:bg-paper-100 rounded transition-colors","aria-label":"Previous year",children:[e.jsx(P,{className:"h-4 w-4 text-ink-600"}),e.jsx(P,{className:"h-4 w-4 text-ink-600 -ml-3"})]}),e.jsx("button",{onClick:te,className:"p-1.5 hover:bg-paper-100 rounded transition-colors","aria-label":"Previous month",children:e.jsx(P,{className:"h-4 w-4 text-ink-600"})})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h2",{className:"text-lg font-semibold text-ink-900",children:g.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),e.jsx("button",{onClick:se,className:"px-3 py-1 text-sm font-medium text-accent-700 hover:bg-accent-50 rounded transition-colors",children:"Today"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:ae,className:"p-1.5 hover:bg-paper-100 rounded transition-colors","aria-label":"Next month",children:e.jsx(q,{className:"h-4 w-4 text-ink-600"})}),e.jsxs("button",{onClick:oe,className:"p-1.5 hover:bg-paper-100 rounded transition-colors","aria-label":"Next year",children:[e.jsx(q,{className:"h-4 w-4 text-ink-600"}),e.jsx(q,{className:"h-4 w-4 text-ink-600 -ml-3"})]})]})]}),e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[$&&e.jsx("div",{className:"h-8"}),le.map(t=>e.jsx("div",{className:"h-8 flex items-center justify-center text-xs font-semibold text-ink-600",children:t},t)),Array.from({length:6}).map((t,a)=>e.jsxs(me.Fragment,{children:[$&&e.jsx("div",{className:"flex items-center justify-center text-xs text-ink-500 font-medium",children:G(U[a*7])}),U.slice(a*7,a*7+7).map((d,D)=>{const f=ee(d),w=J(d),Y=K(d),x=Q(d),h=_(d),L=X(d),u=Z(d);return e.jsxs("button",{onClick:()=>ne(d),onMouseEnter:()=>i&&V(d),onMouseLeave:()=>i&&V(null),disabled:h,className:`
                      relative h-16 p-1 rounded-lg border transition-all
                      ${L?"text-ink-900":"text-ink-400"}
                      ${u?"border-accent-400 font-semibold":"border-transparent"}
                      ${w||x?"bg-accent-500 text-white font-semibold":""}
                      ${Y&&!w&&!x?"bg-accent-50":""}
                      ${!h&&!w&&!x?"hover:bg-paper-100":""}
                      ${h?"opacity-40 cursor-not-allowed":"cursor-pointer"}
                    `,children:[e.jsx("div",{className:"text-sm",children:d.getDate()}),f.length>0&&e.jsxs("div",{className:"absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1",children:[f.slice(0,3).map((A,de)=>e.jsx("button",{onClick:ce=>{ce.stopPropagation(),s?.(A)},className:`h-1.5 w-1.5 rounded-full ${ie[A.color||"primary"]}`,title:A.title},de)),f.length>3&&e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-ink-400",title:`+${f.length-3} more`})]})]},D)})]},a))]})})]})}try{m.displayName="Calendar",m.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"Selected date",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Callback when date is selected",name:"onChange",required:!1,type:{name:"((date: Date) => void)"}},events:{defaultValue:{value:"[]"},description:"Events to display on calendar",name:"events",required:!1,type:{name:"CalendarEvent[]"}},onEventClick:{defaultValue:null,description:"Callback when event marker is clicked",name:"onEventClick",required:!1,type:{name:"((event: CalendarEvent) => void)"}},rangeMode:{defaultValue:{value:"false"},description:"Enable date range selection",name:"rangeMode",required:!1,type:{name:"boolean"}},rangeValue:{defaultValue:null,description:"Selected date range (start and end)",name:"rangeValue",required:!1,type:{name:"{ start: Date | null; end: Date | null; }"}},onRangeChange:{defaultValue:null,description:"Callback when range is selected",name:"onRangeChange",required:!1,type:{name:"((range: { start: Date | null; end: Date | null; }) => void)"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:{value:"[]"},description:"Dates that cannot be selected",name:"disabledDates",required:!1,type:{name:"Date[]"}},showWeekNumbers:{defaultValue:{value:"false"},description:"Show week numbers",name:"showWeekNumbers",required:!1,type:{name:"boolean"}},firstDayOfWeek:{defaultValue:{value:"0"},description:"First day of week (0 = Sunday, 1 = Monday)",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},className:{defaultValue:{value:""},description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ye={title:"Forms/Calendar",component:m,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>e.jsx("div",{style:{minWidth:"600px",padding:"2rem"},children:e.jsx(n,{})})]},C={render:()=>{const[n,r]=c.useState(new Date);return e.jsx(m,{value:n,onChange:r})}},j={render:()=>{const[n,r]=c.useState(new Date),o=[{date:new Date(2025,10,15),title:"Team Meeting",color:"primary"},{date:new Date(2025,10,20),title:"Project Deadline",color:"error"},{date:new Date(2025,10,22),title:"Review Session",color:"warning"},{date:new Date(2025,10,25),title:"Product Launch",color:"success"}];return e.jsx(m,{value:n,onChange:r,events:o,onEventClick:s=>alert(s.title)})}},k={render:()=>{const[n,r]=c.useState({start:null,end:null});return e.jsxs("div",{children:[e.jsx(m,{rangeMode:!0,rangeValue:n,onRangeChange:r}),n.start&&n.end&&e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.375rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:500},children:"Selected Range:"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.25rem"},children:[n.start.toLocaleDateString()," - ",n.end.toLocaleDateString()]})]})]})}},M={render:()=>{const[n,r]=c.useState(new Date),o=new Date,s=new Date(o.getFullYear(),o.getMonth()+2,0);return e.jsx(m,{value:n,onChange:r,minDate:o,maxDate:s})}},T={render:()=>{const[n,r]=c.useState(new Date);return e.jsx(m,{value:n,onChange:r,showWeekNumbers:!0})}},R={render:()=>{const[n,r]=c.useState(new Date);return e.jsx(m,{value:n,onChange:r,firstDayOfWeek:1})}},N={render:()=>{const[n,r]=c.useState(new Date),o=[new Date(2025,10,16),new Date(2025,10,17),new Date(2025,10,23),new Date(2025,10,24)];return e.jsx(m,{value:n,onChange:r,disabledDates:o})}},W={render:()=>{const[n,r]=c.useState(new Date),o=[{date:new Date(2025,10,14),title:"Sprint Planning",color:"primary"},{date:new Date(2025,10,15),title:"Client Meeting",color:"accent"},{date:new Date(2025,10,18),title:"Code Review",color:"primary"},{date:new Date(2025,10,20),title:"Project Deadline",color:"error"},{date:new Date(2025,10,21),title:"Team Building",color:"success"},{date:new Date(2025,10,25),title:"Release Day",color:"success"},{date:new Date(2025,10,27),title:"Retrospective",color:"warning"},{date:new Date(2025,10,28),title:"All Hands Meeting",color:"primary"}],s=o.find(i=>n&&i.date.getDate()===n.getDate()&&i.date.getMonth()===n.getMonth()&&i.date.getFullYear()===n.getFullYear());return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"1.5rem"},children:"Team Calendar"}),e.jsx(m,{value:n,onChange:r,events:o,onEventClick:i=>r(i.date)}),s&&e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#eff6ff",borderRadius:"0.375rem",border:"1px solid #3b82f6"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,color:"#1e40af",marginBottom:"0.25rem"},children:s.title}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:n?.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]})}},z={render:()=>{const[n,r]=c.useState({start:null,end:null}),o=[new Date(2025,10,28),new Date(2025,10,29),new Date(2025,11,24),new Date(2025,11,25)],s=()=>{if(!n.start||!n.end)return 0;const i=n.end.getTime()-n.start.getTime();return Math.ceil(i/(1e3*60*60*24))+1};return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Request Vacation"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1.5rem"},children:"Select your vacation dates (excluding company holidays)"}),e.jsx(m,{rangeMode:!0,rangeValue:n,onRangeChange:r,disabledDates:o,minDate:new Date}),n.start&&n.end&&e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f0fdf4",borderRadius:"0.375rem",border:"1px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,color:"#166534",marginBottom:"0.5rem"},children:"Vacation Request Summary"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:[e.jsxs("div",{children:["From: ",n.start.toLocaleDateString()]}),e.jsxs("div",{children:["To: ",n.end.toLocaleDateString()]}),e.jsxs("div",{style:{marginTop:"0.5rem",fontWeight:500,color:"#166534"},children:["Total Days: ",s()]})]})]}),e.jsx("div",{style:{marginTop:"1rem",fontSize:"0.75rem",color:"#64748b"},children:"Note: Grayed out dates are company holidays and cannot be selected"})]})}},F={render:()=>{const[n,r]=c.useState({start:null,end:null}),o=[new Date(2025,10,15),new Date(2025,10,16),new Date(2025,10,22),new Date(2025,10,23),new Date(2025,10,24)],s=new Date,i=new Date(s.getFullYear(),s.getMonth()+3,s.getDate()),l=()=>!n.start||!n.end?0:(Math.ceil((n.end.getTime()-n.start.getTime())/(1e3*60*60*24))+1)*150;return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Book Your Stay"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1.5rem"},children:"$150 per night"}),e.jsx(m,{rangeMode:!0,rangeValue:n,onRangeChange:r,disabledDates:o,minDate:s,maxDate:i}),n.start&&n.end?e.jsxs("div",{style:{marginTop:"1rem",padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"0.75rem"},children:"Booking Details"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.875rem",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Check-in:"}),e.jsx("span",{style:{fontWeight:500},children:n.start.toLocaleDateString()})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.875rem",marginBottom:"0.75rem",paddingBottom:"0.75rem",borderBottom:"1px solid #e5e5e5"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Check-out:"}),e.jsx("span",{style:{fontWeight:500},children:n.end.toLocaleDateString()})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"1.125rem",fontWeight:700},children:[e.jsx("span",{children:"Total:"}),e.jsxs("span",{style:{color:"#3b82f6"},children:["$",l()]})]}),e.jsx("button",{style:{width:"100%",marginTop:"1rem",padding:"0.75rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontSize:"0.875rem",fontWeight:600},children:"Reserve Now"})]}):e.jsx("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem",textAlign:"center",fontSize:"0.875rem",color:"#64748b"},children:"Select check-in and check-out dates"})]})}},B={render:()=>{const[n,r]=c.useState(void 0),o=[{date:new Date(2025,10,14),title:"Fully booked",color:"error"},{date:new Date(2025,10,21),title:"Fully booked",color:"error"},{date:new Date(2025,10,16),title:"Few slots left",color:"warning"},{date:new Date(2025,10,23),title:"Few slots left",color:"warning"},{date:new Date(2025,10,18),title:"Available",color:"success"},{date:new Date(2025,10,25),title:"Available",color:"success"},{date:new Date(2025,10,27),title:"Available",color:"success"}],s=[],i=2025,l=10;for(let p=1;p<=30;p++){const v=new Date(i,l,p);(v.getDay()===0||v.getDay()===6)&&s.push(v)}const y=n?["9:00 AM","10:00 AM","2:00 PM","3:00 PM"]:[];return e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"0.5rem"},children:"Schedule Appointment"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1.5rem"},children:"Select a date to view available time slots"}),e.jsx(m,{value:n,onChange:r,events:o,disabledDates:s,minDate:new Date}),n&&e.jsxs("div",{style:{marginTop:"1rem",padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:600,marginBottom:"1rem"},children:["Available Times for ",n.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.5rem"},children:y.map(p=>e.jsx("button",{style:{padding:"0.75rem",backgroundColor:"white",border:"1px solid #e5e5e5",borderRadius:"0.375rem",cursor:"pointer",fontSize:"0.875rem",fontWeight:500},onClick:()=>alert(`Booking appointment at ${p}`),children:p},p))})]}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"1rem",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#10b981"}}),e.jsx("span",{style:{color:"#64748b"},children:"Available"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#f59e0b"}}),e.jsx("span",{style:{color:"#64748b"},children:"Limited"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#ef4444"}}),e.jsx("span",{style:{color:"#64748b"},children:"Fully Booked"})]})]})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} />;
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const events: CalendarEvent[] = [{
      date: new Date(2025, 10, 15),
      title: 'Team Meeting',
      color: 'primary'
    }, {
      date: new Date(2025, 10, 20),
      title: 'Project Deadline',
      color: 'error'
    }, {
      date: new Date(2025, 10, 22),
      title: 'Review Session',
      color: 'warning'
    }, {
      date: new Date(2025, 10, 25),
      title: 'Product Launch',
      color: 'success'
    }];
    return <Calendar value={date} onChange={setDate} events={events} onEventClick={event => alert(event.title)} />;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({
      start: null,
      end: null
    });
    return <div>\r
        <Calendar rangeMode rangeValue={range} onRangeChange={setRange} />\r
        {range.start && range.end && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.375rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 500
        }}>\r
              Selected Range:\r
            </div>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginTop: '0.25rem'
        }}>\r
              {range.start.toLocaleDateString()} - {range.end.toLocaleDateString()}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    return <Calendar value={date} onChange={setDate} minDate={today} maxDate={maxDate} />;
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} showWeekNumbers />;
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar value={date} onChange={setDate} firstDayOfWeek={1} />;
  }
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const disabledDates = [new Date(2025, 10, 16), new Date(2025, 10, 17), new Date(2025, 10, 23), new Date(2025, 10, 24)];
    return <Calendar value={date} onChange={setDate} disabledDates={disabledDates} />;
  }
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const events: CalendarEvent[] = [{
      date: new Date(2025, 10, 14),
      title: 'Sprint Planning',
      color: 'primary'
    }, {
      date: new Date(2025, 10, 15),
      title: 'Client Meeting',
      color: 'accent'
    }, {
      date: new Date(2025, 10, 18),
      title: 'Code Review',
      color: 'primary'
    }, {
      date: new Date(2025, 10, 20),
      title: 'Project Deadline',
      color: 'error'
    }, {
      date: new Date(2025, 10, 21),
      title: 'Team Building',
      color: 'success'
    }, {
      date: new Date(2025, 10, 25),
      title: 'Release Day',
      color: 'success'
    }, {
      date: new Date(2025, 10, 27),
      title: 'Retrospective',
      color: 'warning'
    }, {
      date: new Date(2025, 10, 28),
      title: 'All Hands Meeting',
      color: 'primary'
    }];
    const selectedEvent = events.find(event => date && event.date.getDate() === date.getDate() && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '1.5rem'
      }}>\r
          Team Calendar\r
        </h3>\r
        <Calendar value={date} onChange={setDate} events={events} onEventClick={event => setDate(event.date)} />\r
        {selectedEvent && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.375rem',
        border: '1px solid #3b82f6'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#1e40af',
          marginBottom: '0.25rem'
        }}>\r
              {selectedEvent.title}\r
            </div>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
              {date?.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({
      start: null,
      end: null
    });
    const blockedDates = [new Date(2025, 10, 28), new Date(2025, 10, 29), new Date(2025, 11, 24), new Date(2025, 11, 25)];
    const calculateDays = () => {
      if (!range.start || !range.end) return 0;
      const diff = range.end.getTime() - range.start.getTime();
      return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
    };
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>\r
          Request Vacation\r
        </h3>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '1.5rem'
      }}>\r
          Select your vacation dates (excluding company holidays)\r
        </p>\r
        <Calendar rangeMode rangeValue={range} onRangeChange={setRange} disabledDates={blockedDates} minDate={new Date()} />\r
        {range.start && range.end && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f0fdf4',
        borderRadius: '0.375rem',
        border: '1px solid #10b981'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#166534',
          marginBottom: '0.5rem'
        }}>\r
              Vacation Request Summary\r
            </div>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>\r
              <div>From: {range.start.toLocaleDateString()}</div>\r
              <div>To: {range.end.toLocaleDateString()}</div>\r
              <div style={{
            marginTop: '0.5rem',
            fontWeight: 500,
            color: '#166534'
          }}>\r
                Total Days: {calculateDays()}\r
              </div>\r
            </div>\r
          </div>}\r
        <div style={{
        marginTop: '1rem',
        fontSize: '0.75rem',
        color: '#64748b'
      }}>\r
          Note: Grayed out dates are company holidays and cannot be selected\r
        </div>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({
      start: null,
      end: null
    });
    const bookedDates = [new Date(2025, 10, 15), new Date(2025, 10, 16), new Date(2025, 10, 22), new Date(2025, 10, 23), new Date(2025, 10, 24)];
    const today = new Date();
    const threeMonthsFromNow = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
    const calculateCost = () => {
      if (!range.start || !range.end) return 0;
      const days = Math.ceil((range.end.getTime() - range.start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return days * 150; // $150 per night
    };
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>\r
          Book Your Stay\r
        </h3>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '1.5rem'
      }}>\r
          $150 per night\r
        </p>\r
        <Calendar rangeMode rangeValue={range} onRangeChange={setRange} disabledDates={bookedDates} minDate={today} maxDate={threeMonthsFromNow} />\r
        {range.start && range.end ? <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '0.75rem'
        }}>\r
              Booking Details\r
            </div>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          marginBottom: '0.5rem'
        }}>\r
              <span style={{
            color: '#64748b'
          }}>Check-in:</span>\r
              <span style={{
            fontWeight: 500
          }}>{range.start.toLocaleDateString()}</span>\r
            </div>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          marginBottom: '0.75rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #e5e5e5'
        }}>\r
              <span style={{
            color: '#64748b'
          }}>Check-out:</span>\r
              <span style={{
            fontWeight: 500
          }}>{range.end.toLocaleDateString()}</span>\r
            </div>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '1.125rem',
          fontWeight: 700
        }}>\r
              <span>Total:</span>\r
              <span style={{
            color: '#3b82f6'
          }}>\${calculateCost()}</span>\r
            </div>\r
            <button style={{
          width: '100%',
          marginTop: '1rem',
          padding: '0.75rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>\r
              Reserve Now\r
            </button>\r
          </div> : <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.375rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
            Select check-in and check-out dates\r
          </div>}\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const events: CalendarEvent[] = [{
      date: new Date(2025, 10, 14),
      title: 'Fully booked',
      color: 'error'
    }, {
      date: new Date(2025, 10, 21),
      title: 'Fully booked',
      color: 'error'
    }, {
      date: new Date(2025, 10, 16),
      title: 'Few slots left',
      color: 'warning'
    }, {
      date: new Date(2025, 10, 23),
      title: 'Few slots left',
      color: 'warning'
    }, {
      date: new Date(2025, 10, 18),
      title: 'Available',
      color: 'success'
    }, {
      date: new Date(2025, 10, 25),
      title: 'Available',
      color: 'success'
    }, {
      date: new Date(2025, 10, 27),
      title: 'Available',
      color: 'success'
    }];
    const weekends = [];
    const year = 2025;
    const month = 10;
    for (let day = 1; day <= 30; day++) {
      const d = new Date(year, month, day);
      if (d.getDay() === 0 || d.getDay() === 6) {
        weekends.push(d);
      }
    }
    const availableSlots = date ? ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'] : [];
    return <div>\r
        <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }}>\r
          Schedule Appointment\r
        </h3>\r
        <p style={{
        fontSize: '0.875rem',
        color: '#64748b',
        marginBottom: '1.5rem'
      }}>\r
          Select a date to view available time slots\r
        </p>\r
        <Calendar value={date} onChange={setDate} events={events} disabledDates={weekends} minDate={new Date()} />\r
        {date && <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>\r
              Available Times for {date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}\r
            </div>\r
            <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem'
        }}>\r
              {availableSlots.map(slot => <button key={slot} style={{
            padding: '0.75rem',
            backgroundColor: 'white',
            border: '1px solid #e5e5e5',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500
          }} onClick={() => alert(\`Booking appointment at \${slot}\`)}>\r
                  {slot}\r
                </button>)}\r
            </div>\r
          </div>}\r
        <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '1rem',
        fontSize: '0.75rem'
      }}>\r
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>\r
            <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#10b981'
          }} />\r
            <span style={{
            color: '#64748b'
          }}>Available</span>\r
          </div>\r
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>\r
            <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b'
          }} />\r
            <span style={{
            color: '#64748b'
          }}>Limited</span>\r
          </div>\r
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>\r
            <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ef4444'
          }} />\r
            <span style={{
            color: '#64748b'
          }}>Fully Booked</span>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const ve=["Default","WithEvents","RangeMode","WithMinMaxDate","WithWeekNumbers","MondayFirstDay","WithDisabledDates","EventCalendar","VacationPlanner","BookingCalendar","AppointmentScheduler"];export{B as AppointmentScheduler,F as BookingCalendar,C as Default,W as EventCalendar,R as MondayFirstDay,k as RangeMode,z as VacationPlanner,N as WithDisabledDates,j as WithEvents,M as WithMinMaxDate,T as WithWeekNumbers,ve as __namedExportsOrder,ye as default};
