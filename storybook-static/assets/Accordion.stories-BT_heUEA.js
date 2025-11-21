import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-DvQbZzpK.js";import{C as v}from"./chevron-down-7ZmIJCPf.js";import{M as W}from"./minus-DUiWEM_-.js";import{P as k}from"./plus-gHVaozHf.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-3pObC86R.js";function i({items:r,allowMultiple:o=!1,defaultOpen:S=[],onChange:I,expandIcon:y,collapseIcon:f,showStepNumbers:b=!1}){const[j,C]=w.useState(new Set(S)),E=t=>{const n=new Set(j);n.has(t)?n.delete(t):(o||n.clear(),n.add(t)),C(n),I?.(Array.from(n))};return e.jsx("div",{className:"space-y-2",children:r.map((t,n)=>{const s=j.has(t.id),D=n+1;return e.jsxs("div",{className:"bg-white bg-subtle-grain border border-paper-200 rounded-lg overflow-hidden transition-all duration-200",children:[e.jsxs("button",{onClick:()=>!t.disabled&&E(t.id),disabled:t.disabled,className:`
                w-full flex items-center justify-between px-6 py-4 text-left transition-colors
                ${t.disabled?"opacity-40 cursor-not-allowed":"hover:bg-paper-50 cursor-pointer"}
              `,"aria-expanded":s,"aria-controls":`accordion-content-${t.id}`,children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[b?e.jsx("div",{className:`
                    flex items-center justify-center h-7 w-7 rounded-full text-sm font-semibold flex-shrink-0
                    ${s?"bg-accent-600 text-white":"bg-paper-200 text-ink-600"}
                    transition-colors duration-200
                  `,children:D}):t.icon?e.jsx("span",{className:"flex-shrink-0 text-ink-600",children:t.icon}):null,e.jsx("span",{className:"text-sm font-medium text-ink-900",children:t.title})]}),!b&&e.jsx(e.Fragment,{children:s&&f?e.jsx("span",{className:"h-5 w-5 text-ink-500",children:f}):s&&!f?e.jsx(v,{className:"h-5 w-5 text-ink-500 transition-transform duration-200 rotate-180"}):!s&&y?e.jsx("span",{className:"h-5 w-5 text-ink-500",children:y}):e.jsx(v,{className:"h-5 w-5 text-ink-500 transition-transform duration-200"})})]}),s&&e.jsx("div",{id:`accordion-content-${t.id}`,className:"px-6 py-4 border-t border-paper-200 bg-paper-50 animate-fade-in",role:"region","aria-labelledby":`accordion-header-${t.id}`,children:t.content})]},t.id)})})}try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}},allowMultiple:{defaultValue:{value:"false"},description:"",name:"allowMultiple",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"[]"},description:"",name:"defaultOpen",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(openItems: string[]) => void"}},expandIcon:{defaultValue:null,description:"Custom icon for collapsed state (default: ChevronDown)",name:"expandIcon",required:!1,type:{name:"ReactNode"}},collapseIcon:{defaultValue:null,description:"Custom icon for expanded state (default: rotated ChevronDown)",name:"collapseIcon",required:!1,type:{name:"ReactNode"}},showStepNumbers:{defaultValue:{value:"false"},description:"Show step numbers (1, 2, 3...) instead of icons",name:"showStepNumbers",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Accordion",component:i,parameters:{layout:"padded"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(r,{})})]},a=[{id:"1",title:"What is your return policy?",content:"We offer a 30-day return policy on all items. Items must be in original condition with tags attached."},{id:"2",title:"How long does shipping take?",content:"Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days."},{id:"3",title:"Do you ship internationally?",content:"Yes, we ship to over 50 countries worldwide. International shipping times vary by destination."}],A=[{id:"1",title:"Getting Started",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx("p",{children:"Follow these steps to get started:"}),e.jsxs("ol",{style:{marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("li",{children:"Create an account"}),e.jsx("li",{children:"Complete your profile"}),e.jsx("li",{children:"Verify your email address"}),e.jsx("li",{children:"Start using the platform"})]})]})},{id:"2",title:"Account Settings",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx("p",{children:"Manage your account settings:"}),e.jsxs("ul",{style:{marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("li",{children:"Update profile information"}),e.jsx("li",{children:"Change password"}),e.jsx("li",{children:"Manage notifications"}),e.jsx("li",{children:"Privacy settings"})]})]})},{id:"3",title:"Billing Information",content:"Update your payment methods, view invoices, and manage your subscription plan."}],d={args:{items:a}},l={args:{items:a,defaultExpanded:["1"]}},c={args:{items:a,defaultExpanded:["1","2"],allowMultiple:!0}},p={args:{items:a,allowMultiple:!1}},m={args:{items:a,expandIcon:e.jsx(k,{className:"h-5 w-5"}),collapseIcon:e.jsx(W,{className:"h-5 w-5"})}},u={args:{items:A}},h={render:()=>{const r=[{id:"1",title:"How do I create an account?",content:'Click the "Sign Up" button in the top right corner and follow the prompts to create your account.'},{id:"2",title:"Is my data secure?",content:"Yes, we use industry-standard encryption and security measures to protect your data."},{id:"3",title:"Can I cancel my subscription?",content:"Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."},{id:"4",title:"Do you offer customer support?",content:"Yes, we offer 24/7 customer support via email and live chat. Premium users also have access to phone support."},{id:"5",title:"What payment methods do you accept?",content:"We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and bank transfers."}];return e.jsxs("div",{children:[e.jsx("h2",{style:{marginBottom:"1.5rem",fontSize:"1.5rem",fontWeight:600},children:"Frequently Asked Questions"}),e.jsx(i,{items:r})]})}},x={render:()=>{const r=[{id:"1",title:"Description",content:e.jsxs("div",{children:[e.jsx("p",{children:"This premium product features high-quality materials and expert craftsmanship. Perfect for everyday use, it combines style and functionality."}),e.jsxs("ul",{style:{marginTop:"0.75rem",marginLeft:"1.5rem",display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx("li",{children:"Premium materials"}),e.jsx("li",{children:"Durable construction"}),e.jsx("li",{children:"Modern design"}),e.jsx("li",{children:"Available in multiple colors"})]})]})},{id:"2",title:"Specifications",content:e.jsx("table",{style:{width:"100%",fontSize:"0.875rem"},children:e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.5rem 0",fontWeight:500},children:"Dimensions"}),e.jsx("td",{style:{padding:"0.5rem 0",color:"#64748b"},children:'10" x 8" x 2"'})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.5rem 0",fontWeight:500},children:"Weight"}),e.jsx("td",{style:{padding:"0.5rem 0",color:"#64748b"},children:"1.5 lbs"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e5e5e5"},children:[e.jsx("td",{style:{padding:"0.5rem 0",fontWeight:500},children:"Material"}),e.jsx("td",{style:{padding:"0.5rem 0",color:"#64748b"},children:"Premium leather"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem 0",fontWeight:500},children:"Origin"}),e.jsx("td",{style:{padding:"0.5rem 0",color:"#64748b"},children:"Made in USA"})]})]})})},{id:"3",title:"Shipping & Returns",content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Shipping:"})," Free standard shipping on orders over $50. Express shipping available."]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Returns:"})," 30-day return policy. Items must be in original condition."]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Warranty:"})," 1-year manufacturer warranty included."]})]})}];return e.jsx(i,{items:r,defaultExpanded:["1"]})}},g={render:()=>{const[r,o]=w.useState(["1"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:["Expanded sections: ",r.length>0?r.join(", "):"None"]}),e.jsx("button",{onClick:()=>o(r.length===3?[]:["1","2","3"]),style:{padding:"0.25rem 0.75rem",fontSize:"0.875rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",background:"white",cursor:"pointer"},children:r.length===3?"Collapse All":"Expand All"})]}),e.jsx(i,{items:a,expanded:r,onExpandedChange:o,allowMultiple:!0})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    defaultExpanded: ['1']
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    defaultExpanded: ['1', '2'],
    allowMultiple: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    allowMultiple: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    expandIcon: <Plus className="h-5 w-5" />,
    collapseIcon: <Minus className="h-5 w-5" />
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: detailedItems
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const faqItems = [{
      id: '1',
      title: 'How do I create an account?',
      content: 'Click the "Sign Up" button in the top right corner and follow the prompts to create your account.'
    }, {
      id: '2',
      title: 'Is my data secure?',
      content: 'Yes, we use industry-standard encryption and security measures to protect your data.'
    }, {
      id: '3',
      title: 'Can I cancel my subscription?',
      content: 'Yes, you can cancel your subscription at any time from your account settings. You\\'ll continue to have access until the end of your billing period.'
    }, {
      id: '4',
      title: 'Do you offer customer support?',
      content: 'Yes, we offer 24/7 customer support via email and live chat. Premium users also have access to phone support.'
    }, {
      id: '5',
      title: 'What payment methods do you accept?',
      content: 'We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and bank transfers.'
    }];
    return <div>\r
        <h2 style={{
        marginBottom: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: 600
      }}>\r
          Frequently Asked Questions\r
        </h2>\r
        <Accordion items={faqItems} />\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const productSections = [{
      id: '1',
      title: 'Description',
      content: <div>\r
            <p>This premium product features high-quality materials and expert craftsmanship. Perfect for everyday use, it combines style and functionality.</p>\r
            <ul style={{
          marginTop: '0.75rem',
          marginLeft: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem'
        }}>\r
              <li>Premium materials</li>\r
              <li>Durable construction</li>\r
              <li>Modern design</li>\r
              <li>Available in multiple colors</li>\r
            </ul>\r
          </div>
    }, {
      id: '2',
      title: 'Specifications',
      content: <table style={{
        width: '100%',
        fontSize: '0.875rem'
      }}>\r
            <tbody>\r
              <tr style={{
            borderBottom: '1px solid #e5e5e5'
          }}>\r
                <td style={{
              padding: '0.5rem 0',
              fontWeight: 500
            }}>Dimensions</td>\r
                <td style={{
              padding: '0.5rem 0',
              color: '#64748b'
            }}>10" x 8" x 2"</td>\r
              </tr>\r
              <tr style={{
            borderBottom: '1px solid #e5e5e5'
          }}>\r
                <td style={{
              padding: '0.5rem 0',
              fontWeight: 500
            }}>Weight</td>\r
                <td style={{
              padding: '0.5rem 0',
              color: '#64748b'
            }}>1.5 lbs</td>\r
              </tr>\r
              <tr style={{
            borderBottom: '1px solid #e5e5e5'
          }}>\r
                <td style={{
              padding: '0.5rem 0',
              fontWeight: 500
            }}>Material</td>\r
                <td style={{
              padding: '0.5rem 0',
              color: '#64748b'
            }}>Premium leather</td>\r
              </tr>\r
              <tr>\r
                <td style={{
              padding: '0.5rem 0',
              fontWeight: 500
            }}>Origin</td>\r
                <td style={{
              padding: '0.5rem 0',
              color: '#64748b'
            }}>Made in USA</td>\r
              </tr>\r
            </tbody>\r
          </table>
    }, {
      id: '3',
      title: 'Shipping & Returns',
      content: <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>\r
            <div>\r
              <strong>Shipping:</strong> Free standard shipping on orders over $50. Express shipping available.\r
            </div>\r
            <div>\r
              <strong>Returns:</strong> 30-day return policy. Items must be in original condition.\r
            </div>\r
            <div>\r
              <strong>Warranty:</strong> 1-year manufacturer warranty included.\r
            </div>\r
          </div>
    }];
    return <Accordion items={productSections} defaultExpanded={['1']} />;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = useState<string[]>(['1']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <div style={{
        padding: '1rem',
        backgroundColor: '#f5f5f4',
        borderRadius: '0.375rem'
      }}>\r
          <div style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>\r
            Expanded sections: {expanded.length > 0 ? expanded.join(', ') : 'None'}\r
          </div>\r
          <button onClick={() => setExpanded(expanded.length === 3 ? [] : ['1', '2', '3'])} style={{
          padding: '0.25rem 0.75rem',
          fontSize: '0.875rem',
          border: '1px solid #e5e5e5',
          borderRadius: '0.375rem',
          background: 'white',
          cursor: 'pointer'
        }}>\r
            {expanded.length === 3 ? 'Collapse All' : 'Expand All'}\r
          </button>\r
        </div>\r
        <Accordion items={basicItems} expanded={expanded} onExpandedChange={setExpanded} allowMultiple />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const _=["Default","DefaultExpanded","MultipleExpanded","SingleExpandOnly","CustomIcons","WithRichContent","FAQ","ProductDetails","Controlled"];export{g as Controlled,m as CustomIcons,d as Default,l as DefaultExpanded,h as FAQ,c as MultipleExpanded,x as ProductDetails,p as SingleExpandOnly,u as WithRichContent,_ as __namedExportsOrder,V as default};
