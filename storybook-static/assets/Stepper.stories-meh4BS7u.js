import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CSg7ci3J.js";import{C as N}from"./check-G6hdnQzy.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-cNZIheGE.js";function p({steps:t,activeStep:o,completedSteps:r=[],orientation:c="horizontal",clickable:n=!1,onStepClick:i}){const m=t.findIndex(s=>s.id===o),A=(s,a)=>{const u=s.id===o,S=r.includes(s.id),l=n&&i,R=a===t.length-1;return e.jsxs("div",{className:`
          flex ${c==="vertical"?"flex-col":"items-center"}
          ${R?"":"flex-1"}
        `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{type:"button",onClick:()=>l&&i(s.id),disabled:!l,className:`
              flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 font-medium text-sm
              transition-all duration-200
              ${S?"bg-success-500 border-success-500 text-white":u?"bg-accent-500 border-accent-500 text-white":"bg-white border-paper-300 text-ink-500"}
              ${l?"cursor-pointer hover:scale-105":"cursor-default"}
            `,"aria-current":u?"step":void 0,children:S?e.jsx(N,{className:"h-5 w-5"}):s.icon?e.jsx("span",{className:"h-5 w-5",children:s.icon}):a+1}),e.jsxs("div",{className:`${c==="vertical"?"flex-1":"hidden md:block"}`,children:[e.jsx("div",{className:`text-sm font-medium ${u?"text-ink-900":"text-ink-600"}`,children:s.label}),s.description&&e.jsx("div",{className:"text-xs text-ink-500 mt-0.5",children:s.description})]})]}),!R&&e.jsx("div",{className:`
              ${c==="vertical"?"ml-5 my-2 w-0.5 h-12 border-l-2":"flex-1 mx-4 h-0.5 border-t-2"}
              ${a<m||S?"border-success-500":"border-paper-300"}
            `})]},s.id)};return e.jsx("div",{className:`
        flex ${c==="vertical"?"flex-col":"items-start"}
        ${c==="horizontal"?"w-full":""}
      `,children:t.map((s,a)=>A(s,a))})}try{p.displayName="Stepper",p.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"Step configurations",name:"steps",required:!0,type:{name:"StepConfig[]"}},activeStep:{defaultValue:null,description:"Current active step ID",name:"activeStep",required:!0,type:{name:"string"}},completedSteps:{defaultValue:{value:"[]"},description:"Completed step IDs",name:"completedSteps",required:!1,type:{name:"string[]"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},clickable:{defaultValue:{value:"false"},description:"Allow clicking on steps to navigate",name:"clickable",required:!1,type:{name:"boolean"}},onStepClick:{defaultValue:null,description:"Callback when step is clicked",name:"onStepClick",required:!1,type:{name:"((stepId: string) => void)"}}}}}catch{}const _={title:"Navigation/Stepper",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}},decorators:[t=>e.jsx("div",{style:{minWidth:"600px",padding:"2rem"},children:e.jsx(t,{})})]},P=[{id:"1",label:"Account"},{id:"2",label:"Profile"},{id:"3",label:"Complete"}],w=[{id:"1",label:"Account",description:"Create your account"},{id:"2",label:"Profile",description:"Complete your profile"},{id:"3",label:"Verify",description:"Verify your email"},{id:"4",label:"Complete",description:"All done!"}],v={args:{steps:P,activeStep:"1"}},b={args:{steps:P,activeStep:"2",completedSteps:["1"]}},x={args:{steps:w,activeStep:"2",completedSteps:["1"]}},g={render:()=>{const[t,o]=d.useState("1"),[r,c]=d.useState([]);return e.jsx(p,{steps:P,activeStep:t,completedSteps:r,clickable:!0,onStepClick:o})}},h={args:{steps:w,activeStep:"2",completedSteps:["1"],orientation:"vertical"}},f={render:()=>{const[t,o]=d.useState("2"),[r,c]=d.useState(["1"]);return e.jsx(p,{steps:w,activeStep:t,completedSteps:r,orientation:"vertical",clickable:!0,onStepClick:o})}},y={args:{steps:P,activeStep:"3",completedSteps:["1","2","3"]}},C={render:()=>{const[t,o]=d.useState("1"),[r,c]=d.useState([]),n=w,i=n.findIndex(a=>a.id===t),m=i===n.length-1,A=()=>{r.includes(t)||c([...r,t]),i<n.length-1&&o(n[i+1].id)},s=()=>{i>0&&o(n[i-1].id)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(p,{steps:n,activeStep:t,completedSteps:r,clickable:!0,onStepClick:a=>{const u=n.findIndex(l=>l.id===a),S=n.findIndex(l=>l.id===t);(u<=S||r.includes(a))&&o(a)}}),e.jsxs("div",{style:{padding:"2rem",border:"1px solid #e5e5e5",borderRadius:"0.5rem",minHeight:"200px"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:n[i].label}),e.jsx("p",{style:{color:"#64748b",marginBottom:"1.5rem"},children:n[i].description}),e.jsxs("div",{style:{padding:"2rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem",textAlign:"center"},children:["Content for step ",i+1," goes here"]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"space-between"},children:[e.jsx("button",{onClick:s,disabled:i===0,style:{padding:"0.5rem 1rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:i===0?"not-allowed":"pointer",opacity:i===0?.5:1},children:"Previous"}),e.jsx("button",{onClick:A,disabled:m&&r.includes(t),style:{padding:"0.5rem 1rem",border:"none",borderRadius:"0.375rem",background:m&&r.includes(t)?"#10b981":"#3b82f6",color:"white",cursor:"pointer"},children:m?"Complete":"Next"})]})]})}},k={render:()=>{const[t,o]=d.useState("1"),[r,c]=d.useState([]),n=[{id:"1",label:"Cart",description:"Review your items"},{id:"2",label:"Shipping",description:"Enter shipping address"},{id:"3",label:"Payment",description:"Payment information"},{id:"4",label:"Review",description:"Review and confirm"},{id:"5",label:"Complete",description:"Order confirmation"}];return e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx("h2",{style:{marginBottom:"2rem"},children:"Checkout"}),e.jsx(p,{steps:n,activeStep:t,completedSteps:r})]})}},j={render:()=>{const t=[{id:"1",label:"Personal Info",description:"Name and email"},{id:"2",label:"Company Details",description:"Business information"},{id:"3",label:"Preferences",description:"Settings and options"},{id:"4",label:"Review",description:"Confirm details"}];return e.jsxs("div",{children:[e.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Company Registration"}),e.jsx(p,{steps:t,activeStep:"3",completedSteps:["1","2"],orientation:"vertical"})]})}},I={render:()=>{const t=[{id:"1",label:"Order Placed",description:"Jan 15, 2:30 PM"},{id:"2",label:"Processing",description:"Jan 15, 3:00 PM"},{id:"3",label:"Shipped",description:"Jan 16, 9:00 AM"},{id:"4",label:"Out for Delivery",description:"Expected today"},{id:"5",label:"Delivered",description:"Pending"}];return e.jsxs("div",{children:[e.jsx("h2",{style:{marginBottom:"1rem"},children:"Order #12345"}),e.jsx("p",{style:{color:"#64748b",marginBottom:"2rem"},children:"Track your order status"}),e.jsx(p,{steps:t,activeStep:"4",completedSteps:["1","2","3"],orientation:"vertical"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: '1'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: '2',
    completedSteps: ['1']
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    steps: stepsWithDescription,
    activeStep: '2',
    completedSteps: ['1']
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    return <Stepper steps={basicSteps} activeStep={activeStep} completedSteps={completedSteps} clickable onStepClick={setActiveStep} />;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    steps: stepsWithDescription,
    activeStep: '2',
    completedSteps: ['1'],
    orientation: 'vertical'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState('2');
    const [completedSteps, setCompletedSteps] = useState<string[]>(['1']);
    return <Stepper steps={stepsWithDescription} activeStep={activeStep} completedSteps={completedSteps} orientation="vertical" clickable onStepClick={setActiveStep} />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: '3',
    completedSteps: ['1', '2', '3']
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    const steps = stepsWithDescription;
    const currentStepIndex = steps.findIndex(s => s.id === activeStep);
    const isLastStep = currentStepIndex === steps.length - 1;
    const handleNext = () => {
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps([...completedSteps, activeStep]);
      }
      if (currentStepIndex < steps.length - 1) {
        setActiveStep(steps[currentStepIndex + 1].id);
      }
    };
    const handlePrevious = () => {
      if (currentStepIndex > 0) {
        setActiveStep(steps[currentStepIndex - 1].id);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>\r
        <Stepper steps={steps} activeStep={activeStep} completedSteps={completedSteps} clickable onStepClick={stepId => {
        const stepIndex = steps.findIndex(s => s.id === stepId);
        const activeIndex = steps.findIndex(s => s.id === activeStep);
        if (stepIndex <= activeIndex || completedSteps.includes(stepId)) {
          setActiveStep(stepId);
        }
      }} />\r
\r
        <div style={{
        padding: '2rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.5rem',
        minHeight: '200px'
      }}>\r
          <h3 style={{
          marginBottom: '1rem'
        }}>{steps[currentStepIndex].label}</h3>\r
          <p style={{
          color: '#64748b',
          marginBottom: '1.5rem'
        }}>\r
            {steps[currentStepIndex].description}\r
          </p>\r
          <div style={{
          padding: '2rem',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem',
          textAlign: 'center'
        }}>\r
            Content for step {currentStepIndex + 1} goes here\r
          </div>\r
        </div>\r
\r
        <div style={{
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'space-between'
      }}>\r
          <button onClick={handlePrevious} disabled={currentStepIndex === 0} style={{
          padding: '0.5rem 1rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
          opacity: currentStepIndex === 0 ? 0.5 : 1
        }}>\r
            Previous\r
          </button>\r
          <button onClick={handleNext} disabled={isLastStep && completedSteps.includes(activeStep)} style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: isLastStep && completedSteps.includes(activeStep) ? '#10b981' : '#3b82f6',
          color: 'white',
          cursor: 'pointer'
        }}>\r
            {isLastStep ? 'Complete' : 'Next'}\r
          </button>\r
        </div>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState('1');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    const steps = [{
      id: '1',
      label: 'Cart',
      description: 'Review your items'
    }, {
      id: '2',
      label: 'Shipping',
      description: 'Enter shipping address'
    }, {
      id: '3',
      label: 'Payment',
      description: 'Payment information'
    }, {
      id: '4',
      label: 'Review',
      description: 'Review and confirm'
    }, {
      id: '5',
      label: 'Complete',
      description: 'Order confirmation'
    }];
    return <div style={{
      maxWidth: '800px'
    }}>\r
        <h2 style={{
        marginBottom: '2rem'
      }}>Checkout</h2>\r
        <Stepper steps={steps} activeStep={activeStep} completedSteps={completedSteps} />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      id: '1',
      label: 'Personal Info',
      description: 'Name and email'
    }, {
      id: '2',
      label: 'Company Details',
      description: 'Business information'
    }, {
      id: '3',
      label: 'Preferences',
      description: 'Settings and options'
    }, {
      id: '4',
      label: 'Review',
      description: 'Confirm details'
    }];
    return <div>\r
        <h2 style={{
        marginBottom: '1.5rem'
      }}>Company Registration</h2>\r
        <Stepper steps={steps} activeStep='3' completedSteps={['1', '2']} orientation="vertical" />\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      id: '1',
      label: 'Order Placed',
      description: 'Jan 15, 2:30 PM'
    }, {
      id: '2',
      label: 'Processing',
      description: 'Jan 15, 3:00 PM'
    }, {
      id: '3',
      label: 'Shipped',
      description: 'Jan 16, 9:00 AM'
    }, {
      id: '4',
      label: 'Out for Delivery',
      description: 'Expected today'
    }, {
      id: '5',
      label: 'Delivered',
      description: 'Pending'
    }];
    return <div>\r
        <h2 style={{
        marginBottom: '1rem'
      }}>Order #12345</h2>\r
        <p style={{
        color: '#64748b',
        marginBottom: '2rem'
      }}>\r
          Track your order status\r
        </p>\r
        <Stepper steps={steps} activeStep='4' completedSteps={['1', '2', '3']} orientation="vertical" />\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const $=["Default","WithProgress","WithDescriptions","Clickable","Vertical","VerticalClickable","Complete","InteractiveWizard","CheckoutProcess","RegistrationSteps","ProgressTracking"];export{k as CheckoutProcess,g as Clickable,y as Complete,v as Default,C as InteractiveWizard,I as ProgressTracking,j as RegistrationSteps,h as Vertical,f as VerticalClickable,x as WithDescriptions,b as WithProgress,$ as __namedExportsOrder,_ as default};
