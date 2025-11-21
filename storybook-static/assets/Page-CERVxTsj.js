import{j as a}from"./jsx-runtime-u17CrQMm.js";const n=({children:e,maxWidth:l="7xl",className:t="",padding:o="normal"})=>a.jsx("div",{className:"min-h-screen bg-paper-100",children:a.jsx("div",{className:`notebook-page notebook-margin notebook-ruled ${t}`,children:e})});try{n.displayName="Page",n.__docgenInfo={description:`Page - Notebook-style page container with paper aesthetic

The foundational layout component that provides authentic notebook styling including:
- **Paper texture** - Subtle grain background (bg-subtle-grain)
- **Ruled lines** - Horizontal lines every 2rem (notebook-ruled class)
- **Red margin line** - Subtle red vertical line on the left at 3rem (notebook-margin class)
- **Shadow & depth** - Elevated paper appearance with shadow-lg
- **Left border** - 4px binding edge effect
- **Constrained width** - Max-width of 1400px for readability

This is the lowest-level layout component. Most applications should use PageLayout or
Layout components which wrap Page and add additional structure.`,displayName:"Page",props:{children:{defaultValue:null,description:"Page content",name:"children",required:!0,type:{name:"ReactNode"}},maxWidth:{defaultValue:{value:"7xl"},description:"Maximum width constraint for the page content (default: '7xl' = 1400px)",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the page wrapper",name:"className",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"normal"},description:"Padding size around the content (default: 'normal')",name:"padding",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"none"'},{value:'"normal"'}]}}}}}catch{}export{n as P};
