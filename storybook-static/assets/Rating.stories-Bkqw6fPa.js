import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-C8OopBmF.js";import{c as X}from"./createLucideIcon-D9MvcA__.js";import"./preload-helper-PPVm8Dsz.js";const J=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],M=X("star",J);function t({value:r,onChange:a,max:s=5,size:m="md",readOnly:i=!1,allowHalf:L=!1,color:k="warning",showLabel:N=!1,label:B,disabled:d=!1,className:H=""}){const[D,W]=n.useState(null),A={sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"},I={primary:"text-accent-500",warning:"text-warning-500",error:"text-error-500"},E={primary:"text-accent-200",warning:"text-warning-200",error:"text-error-200"},T=l=>{!i&&!d&&a&&a(l)},O=l=>{!i&&!d&&W(l)},P=()=>{W(null)},u=D!==null?D:r,F=l=>{const o=l+1,$=l+.5;let c=0;u>=o?c=100:L&&u>=$?c=50:u>l&&u<o&&(c=(u-l)*100);const G=c>0;return e.jsxs("div",{className:"relative inline-block cursor-pointer",onClick:()=>T(o),onMouseEnter:()=>O(o),onMouseMove:q=>{if(L&&!i&&!d){const _=q.currentTarget.getBoundingClientRect(),Y=q.clientX-_.left<_.width/2;O(Y?$:o)}},children:[e.jsx(M,{className:`
            ${A[m]}
            ${E[k]}
            ${!i&&!d?"hover:scale-110 transition-transform":""}
          `}),G&&e.jsx("div",{className:"absolute top-0 left-0 overflow-hidden",style:{width:`${c}%`},children:e.jsx(M,{className:`
                ${A[m]}
                ${I[k]}
                fill-current
              `})})]},l)};return e.jsxs("div",{className:`inline-flex items-center gap-2 ${H}`,children:[e.jsx("div",{className:`inline-flex gap-0.5 ${d?"opacity-50 cursor-not-allowed":""}`,onMouseLeave:P,role:"radiogroup","aria-label":`Rating: ${r} out of ${s}`,children:Array.from({length:s},(l,o)=>F(o))}),(N||B)&&e.jsx("span",{className:"text-sm text-ink-700 ml-1",children:B||`${r.toFixed(L?1:0)} / ${s}`})]})}try{t.displayName="Rating",t.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:null,description:"Current rating value",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when rating changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},max:{defaultValue:{value:"5"},description:"Maximum rating (number of stars)",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}},readOnly:{defaultValue:{value:"false"},description:"Read-only mode",name:"readOnly",required:!1,type:{name:"boolean"}},allowHalf:{defaultValue:{value:"false"},description:"Allow half-star ratings",name:"allowHalf",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"warning"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"warning"'},{value:'"error"'}]}},showLabel:{defaultValue:{value:"false"},description:"Show label with rating value",name:"showLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Custom label text",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Class name for container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Components/Rating",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","warning","error"]}}},p={render:()=>{const[r,a]=n.useState(0);return e.jsx(t,{value:r,onChange:a})}},v={render:()=>{const[r,a]=n.useState(3.5);return e.jsx(t,{value:r,onChange:a})}},g={args:{value:4,readOnly:!0}},h={render:()=>{const[r,a]=n.useState(4);return e.jsx(t,{value:r,onChange:a,showLabel:!0})}},f={render:()=>{const[r,a]=n.useState(3.5);return e.jsx(t,{value:r,onChange:a,allowHalf:!0,showLabel:!0})}},y={render:()=>{const[r,a]=n.useState(7);return e.jsx(t,{value:r,onChange:a,max:10,showLabel:!0})}},x={render:()=>{const[r,a]=n.useState(4);return e.jsx(t,{value:r,onChange:a,size:"sm"})}},b={render:()=>{const[r,a]=n.useState(4);return e.jsx(t,{value:r,onChange:a,size:"lg",showLabel:!0})}},w={render:()=>{const[r,a]=n.useState(4);return e.jsx(t,{value:r,onChange:a,color:"primary",showLabel:!0})}},S={render:()=>{const[r,a]=n.useState(2);return e.jsx(t,{value:r,onChange:a,color:"error",showLabel:!0})}},j={args:{value:3,disabled:!0}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Small"}),e.jsx(t,{value:4,readOnly:!0,size:"sm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Medium"}),e.jsx(t,{value:4,readOnly:!0,size:"md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"1rem",color:"#64748b"},children:"Large"}),e.jsx(t,{value:4,readOnly:!0,size:"lg"})]})]})},C={render:()=>{const[r,a]=n.useState(0),[s,m]=n.useState("");return e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"Write a Review"}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Your Rating"}),e.jsx(t,{value:r,onChange:a,allowHalf:!0,showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:500,marginBottom:"0.5rem"},children:"Your Review"}),e.jsx("textarea",{value:s,onChange:i=>m(i.target.value),placeholder:"Share your thoughts about this product...",rows:4,style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #e5e5e5",borderRadius:"0.375rem",fontSize:"0.875rem",fontFamily:"inherit"}})]}),e.jsx("button",{disabled:r===0||!s.trim(),style:{marginTop:"1rem",padding:"0.5rem 1rem",border:"none",borderRadius:"0.375rem",background:r===0||!s.trim()?"#e5e5e5":"#3b82f6",color:r===0||!s.trim()?"#64748b":"white",cursor:r===0||!s.trim()?"not-allowed":"pointer"},children:"Submit Review"})]})})}},z={render:()=>e.jsxs("div",{style:{width:"400px",padding:"1.5rem",border:"1px solid #e5e5e5",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"2rem",marginBottom:"1.5rem"},children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:1},children:"4.5"}),e.jsx(t,{value:4.5,readOnly:!0,showLabel:!0,size:"sm"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",marginTop:"0.25rem"},children:"Based on 1,234 reviews"})]})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[{stars:5,count:823,percent:67},{stars:4,count:301,percent:24},{stars:3,count:74,percent:6},{stars:2,count:25,percent:2},{stars:1,count:11,percent:1}].map(({stars:r,count:a,percent:s})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsxs("div",{style:{fontSize:"0.875rem",width:"3rem"},children:[r," stars"]}),e.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#f5f5f4",borderRadius:"4px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${s}%`,height:"100%",backgroundColor:"#f59e0b"}})}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b",width:"3rem",textAlign:"right"},children:a})]},r))})]})},V={render:()=>e.jsx("div",{style:{width:"600px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[{name:"Alice Brown",rating:5,date:"2 days ago",review:"Absolutely love this product! Exceeded all my expectations."},{name:"Bob Smith",rating:4,date:"1 week ago",review:"Great quality, but delivery took a bit longer than expected."},{name:"Carol White",rating:3.5,date:"2 weeks ago",review:"Good product overall, but could be improved in some areas."}].map((r,a)=>e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e5e5e5",borderRadius:"0.5rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:r.name}),e.jsx(t,{value:r.rating,readOnly:!0,size:"sm"})]}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:r.date})]}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#57534e",margin:0},children:r.review})]},a))})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rating value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} showLabel />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rating value={value} onChange={setValue} allowHalf showLabel />;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(7);
    return <Rating value={value} onChange={setValue} max={10} showLabel />;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} size="sm" />;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} size="lg" showLabel />;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(4);
    return <Rating value={value} onChange={setValue} color="primary" showLabel />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(2);
    return <Rating value={value} onChange={setValue} color="error" showLabel />;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'flex-start'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>\r
        <div style={{
        fontSize: '0.75rem',
        color: '#64748b'
      }}>Small</div>\r
        <Rating value={4} readOnly size="sm" />\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Medium</div>\r
        <Rating value={4} readOnly size="md" />\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>\r
        <div style={{
        fontSize: '1rem',
        color: '#64748b'
      }}>Large</div>\r
        <Rating value={4} readOnly size="lg" />\r
      </div>\r
    </div>
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    return <div style={{
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>\r
        <div>\r
          <h3 style={{
          marginBottom: '1rem'
        }}>Write a Review</h3>\r
          <div style={{
          marginBottom: '1rem'
        }}>\r
            <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginBottom: '0.5rem'
          }}>\r
              Your Rating\r
            </label>\r
            <Rating value={rating} onChange={setRating} allowHalf showLabel />\r
          </div>\r
          <div>\r
            <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginBottom: '0.5rem'
          }}>\r
              Your Review\r
            </label>\r
            <textarea value={review} onChange={e => setReview(e.target.value)} placeholder="Share your thoughts about this product..." rows={4} style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            border: '1px solid #e5e5e5',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontFamily: 'inherit'
          }} />\r
          </div>\r
          <button disabled={rating === 0 || !review.trim()} style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: rating === 0 || !review.trim() ? '#e5e5e5' : '#3b82f6',
          color: rating === 0 || !review.trim() ? '#64748b' : 'white',
          cursor: rating === 0 || !review.trim() ? 'not-allowed' : 'pointer'
        }}>\r
            Submit Review\r
          </button>\r
        </div>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    padding: '1.5rem',
    border: '1px solid #e5e5e5',
    borderRadius: '0.5rem'
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '1.5rem'
    }}>\r
        <div style={{
        textAlign: 'center'
      }}>\r
          <div style={{
          fontSize: '3rem',
          fontWeight: 700,
          lineHeight: 1
        }}>4.5</div>\r
          <Rating value={4.5} readOnly showLabel size="sm" />\r
          <div style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginTop: '0.25rem'
        }}>Based on 1,234 reviews</div>\r
        </div>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }}>\r
        {[{
        stars: 5,
        count: 823,
        percent: 67
      }, {
        stars: 4,
        count: 301,
        percent: 24
      }, {
        stars: 3,
        count: 74,
        percent: 6
      }, {
        stars: 2,
        count: 25,
        percent: 2
      }, {
        stars: 1,
        count: 11,
        percent: 1
      }].map(({
        stars,
        count,
        percent
      }) => <div key={stars} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>\r
            <div style={{
          fontSize: '0.875rem',
          width: '3rem'
        }}>{stars} stars</div>\r
            <div style={{
          flex: 1,
          height: '8px',
          backgroundColor: '#f5f5f4',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>\r
              <div style={{
            width: \`\${percent}%\`,
            height: '100%',
            backgroundColor: '#f59e0b'
          }} />\r
            </div>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b',
          width: '3rem',
          textAlign: 'right'
        }}>{count}</div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      {[{
      name: 'Alice Brown',
      rating: 5,
      date: '2 days ago',
      review: 'Absolutely love this product! Exceeded all my expectations.'
    }, {
      name: 'Bob Smith',
      rating: 4,
      date: '1 week ago',
      review: 'Great quality, but delivery took a bit longer than expected.'
    }, {
      name: 'Carol White',
      rating: 3.5,
      date: '2 weeks ago',
      review: 'Good product overall, but could be improved in some areas.'
    }].map((review, i) => <div key={i} style={{
      padding: '1rem',
      border: '1px solid #e5e5e5',
      borderRadius: '0.5rem'
    }}>\r
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '0.75rem'
      }}>\r
            <div>\r
              <div style={{
            fontWeight: 500
          }}>{review.name}</div>\r
              <Rating value={review.rating} readOnly size="sm" />\r
            </div>\r
            <div style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>{review.date}</div>\r
          </div>\r
          <p style={{
        fontSize: '0.875rem',
        color: '#57534e',
        margin: 0
      }}>{review.review}</p>\r
        </div>)}\r
    </div>
}`,...V.parameters?.docs?.source}}};const ae=["Default","WithValue","ReadOnly","WithLabel","HalfStars","MaxTen","Small","Large","PrimaryColor","ErrorColor","Disabled","AllSizes","ProductReview","AverageRating","ReviewsList"];export{R as AllSizes,z as AverageRating,p as Default,j as Disabled,S as ErrorColor,f as HalfStars,b as Large,y as MaxTen,w as PrimaryColor,C as ProductReview,g as ReadOnly,V as ReviewsList,x as Small,h as WithLabel,v as WithValue,ae as __namedExportsOrder,re as default};
