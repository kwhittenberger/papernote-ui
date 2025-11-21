import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-B3mi8TDU.js";import{C as K}from"./chevron-left-DxxEVO_J.js";import{C as Q}from"./chevron-right-DKoQFceh.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BHecmdze.js";function s({items:r,autoPlay:a=0,showArrows:o=!0,showDots:W=!0,loop:l=!0,onSlideChange:A,itemsPerView:u=1,gap:P=16,className:_=""}){const[d,F]=i.useState(0),[N,D]=i.useState(!1),[T,L]=i.useState(null),[E,V]=i.useState(null),m=i.useRef(null),H=i.useRef(null),B=Math.ceil(r.length/u),g=B-1,h=i.useCallback(n=>{if(N)return;let t=n;l?(n>g&&(t=0),n<0&&(t=g)):t=Math.max(0,Math.min(n,g)),D(!0),F(t),A?.(t),setTimeout(()=>D(!1),300)},[N,l,g,A]),c=i.useCallback(()=>{h(d+1)},[d,h]),p=i.useCallback(()=>{h(d-1)},[d,h]);i.useEffect(()=>{if(a>0)return m.current=setInterval(()=>{c()},a),()=>{m.current&&clearInterval(m.current)}},[a,c]);const J=()=>{m.current&&clearInterval(m.current)},M=()=>{a>0&&(m.current=setInterval(()=>{c()},a))},$=50,q=n=>{V(null),L(n.targetTouches[0].clientX)},O=n=>{V(n.targetTouches[0].clientX)},G=()=>{if(!T||!E)return;const n=T-E,t=n>$,Z=n<-$;t?c():Z&&p()};i.useEffect(()=>{const n=t=>{t.key==="ArrowLeft"?p():t.key==="ArrowRight"&&c()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[c,p]);const X=l||d>0,Y=l||d<g,U=-(d*100);return e.jsxs("div",{className:`relative ${_}`,onMouseEnter:J,onMouseLeave:M,children:[e.jsx("div",{ref:H,className:"overflow-hidden rounded-lg",onTouchStart:q,onTouchMove:O,onTouchEnd:G,children:e.jsx("div",{className:"flex transition-transform duration-300 ease-in-out",style:{transform:`translateX(${U}%)`,gap:`${P}px`},children:r.map(n=>e.jsx("div",{className:"flex-shrink-0",style:{width:`calc(${100/u}% - ${P*(u-1)/u}px)`},children:n.content},n.id))})}),o&&r.length>u&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:p,disabled:!X,className:`
              absolute left-2 top-1/2 -translate-y-1/2 z-10
              p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg
              hover:bg-white transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
            `,"aria-label":"Previous slide",children:e.jsx(K,{className:"h-5 w-5 text-ink-900"})}),e.jsx("button",{onClick:c,disabled:!Y,className:`
              absolute right-2 top-1/2 -translate-y-1/2 z-10
              p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg
              hover:bg-white transition-all
              disabled:opacity-40 disabled:cursor-not-allowed
            `,"aria-label":"Next slide",children:e.jsx(Q,{className:"h-5 w-5 text-ink-900"})})]}),W&&B>1&&e.jsx("div",{className:"flex items-center justify-center gap-2 mt-4",children:Array.from({length:B}).map((n,t)=>e.jsx("button",{onClick:()=>h(t),className:`
                h-2 rounded-full transition-all
                ${d===t?"w-8 bg-accent-600":"w-2 bg-ink-300 hover:bg-ink-400"}
              `,"aria-label":`Go to slide ${t+1}`},t))})]})}try{s.displayName="Carousel",s.__docgenInfo={description:"",displayName:"Carousel",props:{items:{defaultValue:null,description:"Items to display in carousel",name:"items",required:!0,type:{name:"CarouselItem[]"}},autoPlay:{defaultValue:{value:"0"},description:"Auto-play interval in milliseconds (0 to disable)",name:"autoPlay",required:!1,type:{name:"number"}},showArrows:{defaultValue:{value:"true"},description:"Show navigation arrows",name:"showArrows",required:!1,type:{name:"boolean"}},showDots:{defaultValue:{value:"true"},description:"Show dot indicators",name:"showDots",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"true"},description:"Enable infinite loop",name:"loop",required:!1,type:{name:"boolean"}},onSlideChange:{defaultValue:null,description:"Callback when slide changes",name:"onSlideChange",required:!1,type:{name:"((index: number) => void)"}},itemsPerView:{defaultValue:{value:"1"},description:"Number of items to show at once",name:"itemsPerView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"16"},description:"Gap between items in pixels",name:"gap",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Display/Carousel",component:s,parameters:{layout:"padded"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"2rem"},children:e.jsx(r,{})})]},f=()=>[{id:"1",content:e.jsx("div",{style:{height:"400px",backgroundColor:"#3B82F6",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.5rem"},children:e.jsx("span",{style:{fontSize:"3rem",color:"white",fontWeight:600},children:"Slide 1"})})},{id:"2",content:e.jsx("div",{style:{height:"400px",backgroundColor:"#10B981",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.5rem"},children:e.jsx("span",{style:{fontSize:"3rem",color:"white",fontWeight:600},children:"Slide 2"})})},{id:"3",content:e.jsx("div",{style:{height:"400px",backgroundColor:"#F59E0B",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.5rem"},children:e.jsx("span",{style:{fontSize:"3rem",color:"white",fontWeight:600},children:"Slide 3"})})},{id:"4",content:e.jsx("div",{style:{height:"400px",backgroundColor:"#EF4444",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.5rem"},children:e.jsx("span",{style:{fontSize:"3rem",color:"white",fontWeight:600},children:"Slide 4"})})}],y={args:{items:f()}},b={args:{items:f(),autoPlay:3e3}},x={args:{items:f(),loop:!1}},v={args:{items:f(),showArrows:!1}},C={args:{items:f(),showDots:!1}},w={render:()=>{const r=Array.from({length:9},(a,o)=>({id:String(o+1),content:e.jsx("div",{style:{height:"200px",backgroundColor:`hsl(${o*40}, 70%, 60%)`,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.5rem",fontSize:"2rem",color:"white",fontWeight:600},children:o+1})}));return e.jsx(s,{items:r,itemsPerView:3,gap:24})}},S={render:()=>{const r=[{id:"1",content:e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{height:"200px",backgroundColor:"#f5f5f4",borderRadius:"0.375rem",marginBottom:"1rem"}}),e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600,marginBottom:"0.5rem"},children:"Product Name"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1rem"},children:"Product description goes here"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"1.5rem",fontWeight:700,color:"#3b82f6"},children:"$99.99"}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer"},children:"Add to Cart"})]})]})},{id:"2",content:e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{height:"200px",backgroundColor:"#f5f5f4",borderRadius:"0.375rem",marginBottom:"1rem"}}),e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600,marginBottom:"0.5rem"},children:"Another Product"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1rem"},children:"Different product description"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"1.5rem",fontWeight:700,color:"#3b82f6"},children:"$149.99"}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer"},children:"Add to Cart"})]})]})},{id:"3",content:e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{height:"200px",backgroundColor:"#f5f5f4",borderRadius:"0.375rem",marginBottom:"1rem"}}),e.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:600,marginBottom:"0.5rem"},children:"Premium Product"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",marginBottom:"1rem"},children:"High-quality product details"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"1.5rem",fontWeight:700,color:"#3b82f6"},children:"$199.99"}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer"},children:"Add to Cart"})]})]})}];return e.jsx(s,{items:r,autoPlay:5e3})}},j={render:()=>{const r=[{id:"1",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"#eff6ff",borderRadius:"0.5rem",textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"1.125rem",fontStyle:"italic",marginBottom:"1.5rem",color:"#1e40af"},children:'"This product has completely transformed how we work. Highly recommended!"'}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600},children:"JD"}),e.jsxs("div",{style:{textAlign:"left"},children:[e.jsx("div",{style:{fontWeight:600},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"CEO, Company Inc."})]})]})]})},{id:"2",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"#f0fdf4",borderRadius:"0.5rem",textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"1.125rem",fontStyle:"italic",marginBottom:"1.5rem",color:"#166534"},children:'"Excellent service and outstanding support. Five stars!"'}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600},children:"JS"}),e.jsxs("div",{style:{textAlign:"left"},children:[e.jsx("div",{style:{fontWeight:600},children:"Jane Smith"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"CTO, Tech Corp"})]})]})]})},{id:"3",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"#fefce8",borderRadius:"0.5rem",textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"1.125rem",fontStyle:"italic",marginBottom:"1.5rem",color:"#854d0e"},children:`"Best investment we've made this year. Results speak for themselves."`}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600},children:"BJ"}),e.jsxs("div",{style:{textAlign:"left"},children:[e.jsx("div",{style:{fontWeight:600},children:"Bob Johnson"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Founder, Startup XYZ"})]})]})]})}];return e.jsx(s,{items:r,autoPlay:4e3})}},k={render:()=>{const r=[{id:"1",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"0.5rem",backgroundColor:"#3b82f6",marginBottom:"1.5rem"}}),e.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Fast Performance"}),e.jsx("p",{style:{color:"#64748b",lineHeight:1.6},children:"Lightning-fast load times and seamless user experience across all devices and platforms."})]})},{id:"2",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"0.5rem",backgroundColor:"#10b981",marginBottom:"1.5rem"}}),e.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"Secure & Reliable"}),e.jsx("p",{style:{color:"#64748b",lineHeight:1.6},children:"Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected."})]})},{id:"3",content:e.jsxs("div",{style:{padding:"3rem 2rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e5e5"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"0.5rem",backgroundColor:"#f59e0b",marginBottom:"1.5rem"}}),e.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"24/7 Support"}),e.jsx("p",{style:{color:"#64748b",lineHeight:1.6},children:"Round-the-clock customer support to help you whenever you need assistance."})]})}];return e.jsx(s,{items:r,autoPlay:6e3})}},R={render:()=>{const r=Array.from({length:8},(a,o)=>({id:String(o+1),content:e.jsxs("div",{style:{height:"300px",backgroundImage:`linear-gradient(135deg, hsl(${o*45}, 70%, 50%), hsl(${o*45+60}, 70%, 60%))`,borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"white",fontWeight:600},children:["Photo ",o+1]})}));return e.jsx(s,{items:r,itemsPerView:2,gap:16,autoPlay:3e3})}},I={render:()=>{const[r,a]=i.useState(0),o=Array.from({length:6},(W,l)=>({id:String(l+1),content:e.jsxs("div",{style:{padding:"2rem",backgroundColor:"white",borderRadius:"0.5rem",border:"2px solid #e5e5e5",minHeight:"250px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{style:{width:"100%",height:"120px",backgroundColor:"#f5f5f4",borderRadius:"0.375rem"}}),e.jsxs("h4",{style:{fontSize:"1.125rem",fontWeight:600},children:["Card ",l+1]}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b",flex:1},children:"This is card content with some descriptive text."}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",borderRadius:"0.375rem",border:"none",cursor:"pointer",fontWeight:500},children:"View Details"})]})}));return e.jsxs("div",{children:[e.jsx(s,{items:o,itemsPerView:3,gap:24,onSlideChange:a}),e.jsxs("div",{style:{textAlign:"center",marginTop:"1rem",fontSize:"0.875rem",color:"#64748b"},children:["Viewing slide ",r+1," of ",Math.ceil(o.length/3)]})]})}},z={render:()=>{const r=[{id:"1",content:e.jsxs("div",{style:{height:"300px",backgroundImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"0.5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",padding:"2rem",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:700,marginBottom:"1rem"},children:"Summer Sale"}),e.jsx("p",{style:{fontSize:"1.25rem",marginBottom:"2rem"},children:"Up to 50% off selected items"}),e.jsx("button",{style:{padding:"0.75rem 2rem",backgroundColor:"white",color:"#667eea",borderRadius:"0.5rem",border:"none",cursor:"pointer",fontSize:"1rem",fontWeight:600},children:"Shop Now"})]})},{id:"2",content:e.jsxs("div",{style:{height:"300px",backgroundImage:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",borderRadius:"0.5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",padding:"2rem",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:700,marginBottom:"1rem"},children:"New Arrivals"}),e.jsx("p",{style:{fontSize:"1.25rem",marginBottom:"2rem"},children:"Check out our latest collection"}),e.jsx("button",{style:{padding:"0.75rem 2rem",backgroundColor:"white",color:"#f5576c",borderRadius:"0.5rem",border:"none",cursor:"pointer",fontSize:"1rem",fontWeight:600},children:"View Collection"})]})},{id:"3",content:e.jsxs("div",{style:{height:"300px",backgroundImage:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",borderRadius:"0.5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",padding:"2rem",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:700,marginBottom:"1rem"},children:"Free Shipping"}),e.jsx("p",{style:{fontSize:"1.25rem",marginBottom:"2rem"},children:"On orders over $50"}),e.jsx("button",{style:{padding:"0.75rem 2rem",backgroundColor:"white",color:"#4facfe",borderRadius:"0.5rem",border:"none",cursor:"pointer",fontSize:"1rem",fontWeight:600},children:"Learn More"})]})}];return e.jsx(s,{items:r,autoPlay:5e3})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: createImageSlides()
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: createImageSlides(),
    autoPlay: 3000
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: createImageSlides(),
    loop: false
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: createImageSlides(),
    showArrows: false
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: createImageSlides(),
    showDots: false
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: CarouselItem[] = Array.from({
      length: 9
    }, (_, i) => ({
      id: String(i + 1),
      content: <div style={{
        height: '200px',
        backgroundColor: \`hsl(\${i * 40}, 70%, 60%)\`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.5rem',
        fontSize: '2rem',
        color: 'white',
        fontWeight: 600
      }}>\r
          {i + 1}\r
        </div>
    }));
    return <Carousel items={items} itemsPerView={3} gap={24} />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const products: CarouselItem[] = [{
      id: '1',
      content: <div style={{
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          height: '200px',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem',
          marginBottom: '1rem'
        }} />\r
            <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>Product Name</h3>\r
            <p style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginBottom: '1rem'
        }}>Product description goes here</p>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
              <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#3b82f6'
          }}>$99.99</span>\r
              <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }}>\r
                Add to Cart\r
              </button>\r
            </div>\r
          </div>
    }, {
      id: '2',
      content: <div style={{
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          height: '200px',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem',
          marginBottom: '1rem'
        }} />\r
            <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>Another Product</h3>\r
            <p style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginBottom: '1rem'
        }}>Different product description</p>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
              <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#3b82f6'
          }}>$149.99</span>\r
              <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }}>\r
                Add to Cart\r
              </button>\r
            </div>\r
          </div>
    }, {
      id: '3',
      content: <div style={{
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          height: '200px',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem',
          marginBottom: '1rem'
        }} />\r
            <h3 style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>Premium Product</h3>\r
            <p style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginBottom: '1rem'
        }}>High-quality product details</p>\r
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
              <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#3b82f6'
          }}>$199.99</span>\r
              <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }}>\r
                Add to Cart\r
              </button>\r
            </div>\r
          </div>
    }];
    return <Carousel items={products} autoPlay={5000} />;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const testimonials: CarouselItem[] = [{
      id: '1',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: '#eff6ff',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>\r
            <p style={{
          fontSize: '1.125rem',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
          color: '#1e40af'
        }}>\r
              "This product has completely transformed how we work. Highly recommended!"\r
            </p>\r
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>\r
              <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600
          }}>\r
                JD\r
              </div>\r
              <div style={{
            textAlign: 'left'
          }}>\r
                <div style={{
              fontWeight: 600
            }}>John Doe</div>\r
                <div style={{
              fontSize: '0.875rem',
              color: '#64748b'
            }}>CEO, Company Inc.</div>\r
              </div>\r
            </div>\r
          </div>
    }, {
      id: '2',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: '#f0fdf4',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>\r
            <p style={{
          fontSize: '1.125rem',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
          color: '#166534'
        }}>\r
              "Excellent service and outstanding support. Five stars!"\r
            </p>\r
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>\r
              <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600
          }}>\r
                JS\r
              </div>\r
              <div style={{
            textAlign: 'left'
          }}>\r
                <div style={{
              fontWeight: 600
            }}>Jane Smith</div>\r
                <div style={{
              fontSize: '0.875rem',
              color: '#64748b'
            }}>CTO, Tech Corp</div>\r
              </div>\r
            </div>\r
          </div>
    }, {
      id: '3',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: '#fefce8',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>\r
            <p style={{
          fontSize: '1.125rem',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
          color: '#854d0e'
        }}>\r
              "Best investment we've made this year. Results speak for themselves."\r
            </p>\r
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>\r
              <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600
          }}>\r
                BJ\r
              </div>\r
              <div style={{
            textAlign: 'left'
          }}>\r
                <div style={{
              fontWeight: 600
            }}>Bob Johnson</div>\r
                <div style={{
              fontSize: '0.875rem',
              color: '#64748b'
            }}>Founder, Startup XYZ</div>\r
              </div>\r
            </div>\r
          </div>
    }];
    return <Carousel items={testimonials} autoPlay={4000} />;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const features: CarouselItem[] = [{
      id: '1',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '0.5rem',
          backgroundColor: '#3b82f6',
          marginBottom: '1.5rem'
        }} />\r
            <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>Fast Performance</h3>\r
            <p style={{
          color: '#64748b',
          lineHeight: 1.6
        }}>\r
              Lightning-fast load times and seamless user experience across all devices and platforms.\r
            </p>\r
          </div>
    }, {
      id: '2',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '0.5rem',
          backgroundColor: '#10b981',
          marginBottom: '1.5rem'
        }} />\r
            <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>Secure & Reliable</h3>\r
            <p style={{
          color: '#64748b',
          lineHeight: 1.6
        }}>\r
              Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.\r
            </p>\r
          </div>
    }, {
      id: '3',
      content: <div style={{
        padding: '3rem 2rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e5e5'
      }}>\r
            <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '0.5rem',
          backgroundColor: '#f59e0b',
          marginBottom: '1.5rem'
        }} />\r
            <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>24/7 Support</h3>\r
            <p style={{
          color: '#64748b',
          lineHeight: 1.6
        }}>\r
              Round-the-clock customer support to help you whenever you need assistance.\r
            </p>\r
          </div>
    }];
    return <Carousel items={features} autoPlay={6000} />;
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const images: CarouselItem[] = Array.from({
      length: 8
    }, (_, i) => ({
      id: String(i + 1),
      content: <div style={{
        height: '300px',
        backgroundImage: \`linear-gradient(135deg, hsl(\${i * 45}, 70%, 50%), hsl(\${i * 45 + 60}, 70%, 60%))\`,
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'white',
        fontWeight: 600
      }}>\r
          Photo {i + 1}\r
        </div>
    }));
    return <Carousel items={images} itemsPerView={2} gap={16} autoPlay={3000} />;
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cards: CarouselItem[] = Array.from({
      length: 6
    }, (_, i) => ({
      id: String(i + 1),
      content: <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '2px solid #e5e5e5',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <div style={{
          width: '100%',
          height: '120px',
          backgroundColor: '#f5f5f4',
          borderRadius: '0.375rem'
        }} />\r
          <h4 style={{
          fontSize: '1.125rem',
          fontWeight: 600
        }}>Card {i + 1}</h4>\r
          <p style={{
          fontSize: '0.875rem',
          color: '#64748b',
          flex: 1
        }}>\r
            This is card content with some descriptive text.\r
          </p>\r
          <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 500
        }}>\r
            View Details\r
          </button>\r
        </div>
    }));
    return <div>\r
        <Carousel items={cards} itemsPerView={3} gap={24} onSlideChange={setCurrentSlide} />\r
        <div style={{
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>\r
          Viewing slide {currentSlide + 1} of {Math.ceil(cards.length / 3)}\r
        </div>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const banners: CarouselItem[] = [{
      id: '1',
      content: <div style={{
        height: '300px',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>\r
            <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>Summer Sale</h2>\r
            <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem'
        }}>Up to 50% off selected items</p>\r
            <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#667eea',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 600
        }}>\r
              Shop Now\r
            </button>\r
          </div>
    }, {
      id: '2',
      content: <div style={{
        height: '300px',
        backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>\r
            <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>New Arrivals</h2>\r
            <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem'
        }}>Check out our latest collection</p>\r
            <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#f5576c',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 600
        }}>\r
              View Collection\r
            </button>\r
          </div>
    }, {
      id: '3',
      content: <div style={{
        height: '300px',
        backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>\r
            <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>Free Shipping</h2>\r
            <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem'
        }}>On orders over $50</p>\r
            <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'white',
          color: '#4facfe',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 600
        }}>\r
              Learn More\r
            </button>\r
          </div>
    }];
    return <Carousel items={banners} autoPlay={5000} />;
  }
}`,...z.parameters?.docs?.source}}};const ae=["Default","AutoPlay","NoLoop","NoArrows","NoDots","ThreeItemsPerView","ProductCarousel","TestimonialCarousel","FeatureShowcase","ImageGallery","CardCarousel","BannerCarousel"];export{b as AutoPlay,z as BannerCarousel,I as CardCarousel,y as Default,k as FeatureShowcase,R as ImageGallery,v as NoArrows,C as NoDots,x as NoLoop,S as ProductCarousel,j as TestimonialCarousel,w as ThreeItemsPerView,ae as __namedExportsOrder,se as default};
