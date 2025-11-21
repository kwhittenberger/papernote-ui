import{j as e}from"./jsx-runtime-u17CrQMm.js";import{X as S}from"./x-BTRpgtn4.js";import{I as j}from"./info-CNRKzxWM.js";import{T as A}from"./triangle-alert-CvYJlHrJ.js";import{C as N}from"./circle-alert-DStZESGe.js";import{C as x}from"./circle-check-big-DgCkYXgi.js";import"./createLucideIcon-CsANJayS.js";import"./iframe-CJgaPZSw.js";import"./preload-helper-PPVm8Dsz.js";function r({variant:s="info",title:h,children:w,onClose:v,className:y="",actions:f=[]}){const b={success:{container:"bg-success-50 border-success-200 text-success-900",icon:e.jsx(x,{className:"h-5 w-5 text-success-600"})},error:{container:"bg-error-50 border-error-200 text-error-900",icon:e.jsx(N,{className:"h-5 w-5 text-error-600"})},warning:{container:"bg-warning-50 border-warning-200 text-warning-900",icon:e.jsx(A,{className:"h-5 w-5 text-warning-600"})},info:{container:"bg-primary-50 border-primary-200 text-primary-900",icon:e.jsx(j,{className:"h-5 w-5 text-primary-600"})}}[s],C=(a="primary")=>{const t="px-3 py-1.5 rounded text-sm font-medium transition-colors";return a==="primary"?`${t} ${{success:"bg-success-600 text-white hover:bg-success-700",error:"bg-error-600 text-white hover:bg-error-700",warning:"bg-warning-600 text-white hover:bg-warning-700",info:"bg-primary-600 text-white hover:bg-primary-700"}[s]}`:`${t} ${{success:"bg-white border border-success-300 text-success-700 hover:bg-success-50",error:"bg-white border border-error-300 text-error-700 hover:bg-error-50",warning:"bg-white border border-warning-300 text-warning-700 hover:bg-warning-50",info:"bg-white border border-primary-300 text-primary-700 hover:bg-primary-50"}[s]}`};return e.jsx("div",{className:`rounded-lg border p-4 ${b.container} ${y}`,role:"alert",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:b.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[h&&e.jsx("h4",{className:"text-sm font-medium mb-1",children:h}),e.jsx("div",{className:"text-sm",children:w}),f.length>0&&e.jsx("div",{className:"flex gap-2 mt-3",children:f.map((a,t)=>e.jsx("button",{onClick:a.onClick,className:C(a.variant),children:a.label},t))})]}),v&&e.jsx("button",{onClick:v,className:"flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity","aria-label":"Close alert",children:e.jsx(S,{className:"h-4 w-4"})})]})})}try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"Action buttons to display at the bottom of the alert",name:"actions",required:!1,type:{name:"AlertAction[]"}}}}}catch{}const X={title:"Feedback/Alert",component:r,parameters:{layout:"padded"},tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{minWidth:"600px"},children:e.jsx(s,{})})],argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},n={args:{variant:"info",title:"Information",message:"This is an informational alert message."}},i={args:{variant:"success",title:"Success",message:"Your changes have been saved successfully."}},o={args:{variant:"warning",title:"Warning",message:"You have unsaved changes that will be lost."}},c={args:{variant:"error",title:"Error",message:"An error occurred while processing your request."}},l={args:{variant:"info",message:"This is an alert without a title."}},m={args:{variant:"warning",title:"Unsaved Changes",message:"You have unsaved changes that will be lost if you leave this page.",actions:[{label:"Save Changes",onClick:()=>alert("Saving..."),variant:"primary"},{label:"Discard",onClick:()=>alert("Discarding..."),variant:"secondary"}]}},g={args:{variant:"info",title:"Dismissible Alert",message:"Click the X button to dismiss this alert.",onClose:()=>alert("Alert dismissed")}},d={args:{variant:"success",title:"Custom Icon",message:"This alert uses a custom icon.",icon:e.jsx(x,{className:"h-5 w-5"})}},u={args:{variant:"warning",title:"Important Notice",message:"This is a longer alert message that demonstrates how the component handles multiple lines of text. The alert will expand vertically to accommodate all the content while maintaining proper spacing and readability."}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{variant:"info",title:"Information",message:"This is an informational message."}),e.jsx(r,{variant:"success",title:"Success",message:"Operation completed successfully."}),e.jsx(r,{variant:"warning",title:"Warning",message:"Please review before proceeding."}),e.jsx(r,{variant:"error",title:"Error",message:"Something went wrong."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message.'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'You have unsaved changes that will be lost.'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'This is an alert without a title.'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Unsaved Changes',
    message: 'You have unsaved changes that will be lost if you leave this page.',
    actions: [{
      label: 'Save Changes',
      onClick: () => alert('Saving...'),
      variant: 'primary'
    }, {
      label: 'Discard',
      onClick: () => alert('Discarding...'),
      variant: 'secondary'
    }]
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    message: 'Click the X button to dismiss this alert.',
    onClose: () => alert('Alert dismissed')
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Custom Icon',
    message: 'This alert uses a custom icon.',
    icon: <CheckCircle className="h-5 w-5" />
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Important Notice',
    message: 'This is a longer alert message that demonstrates how the component handles multiple lines of text. The alert will expand vertically to accommodate all the content while maintaining proper spacing and readability.'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Alert variant="info" title="Information" message="This is an informational message." />\r
      <Alert variant="success" title="Success" message="Operation completed successfully." />\r
      <Alert variant="warning" title="Warning" message="Please review before proceeding." />\r
      <Alert variant="error" title="Error" message="Something went wrong." />\r
    </div>
}`,...p.parameters?.docs?.source}}};const B=["Info","Success","Warning","Error","WithoutTitle","WithActions","Dismissible","CustomIcon","LongMessage","AllVariants"];export{p as AllVariants,d as CustomIcon,g as Dismissible,c as Error,n as Info,u as LongMessage,i as Success,o as Warning,m as WithActions,l as WithoutTitle,B as __namedExportsOrder,X as default};
