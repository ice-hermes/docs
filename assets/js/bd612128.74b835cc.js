"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"v2.2",slug:"/arch/abi/2.2"},l="Smart Contracts ABI v2.2 Specification",o={unversionedId:"arch/abi/2.2",id:"arch/abi/2.2",title:"v2.2",description:"ABI 2.2 introduces the new fixed message body layout while sections and types stay the same as in ABI v2.1. Read below.",source:"@site/../../src/arch/abi/2.2.md",sourceDirName:"arch/abi",slug:"/arch/abi/2.2",permalink:"/arch/abi/2.2",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/abi/2.2.md",tags:[],version:"current",lastUpdatedAt:1680835023,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"v2.2",slug:"/arch/abi/2.2"},sidebar:"tutorialSidebar",previous:{title:"v2.1",permalink:"/arch/abi/2.1"},next:{title:"v2.3",permalink:"/arch/abi/2.3"}},s={},c=[{value:"Fixed layout concepts",id:"fixed-layout-concepts",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Encoding the message",id:"encoding-the-message",level:2},{value:"Encoding the body of the message",id:"encoding-the-body-of-the-message",level:2},{value:"Encoding header for external messages",id:"encoding-header-for-external-messages",level:3},{value:"Encoding of function ID and its arguments",id:"encoding-of-function-id-and-its-arguments",level:3},{value:"Reference",id:"reference",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contracts-abi-v22-specification"},"Smart Contracts ABI v2.2 Specification"),(0,i.kt)("p",null,"ABI 2.2 introduces the new fixed message body layout while sections and types stay the same as in ",(0,i.kt)("a",{parentName:"p",href:"/arch/abi/2.1"},"ABI v2.1"),". Read below."),(0,i.kt)("h2",{id:"fixed-layout-concepts"},"Fixed layout concepts"),(0,i.kt)("p",null,"Since ABI v2.2 fixed message body layout is used in order to reduce gas consumption while parsing parameters. This document describes fixed layout concepts."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Each type has max bit and max ref size:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intN/uintN")," - N bits, 0 refs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"varint16/varuint16")," - 124 bits, 0 refs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"varint32/varuint32")," - 253 bits, 0 refs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," - 591 bits, 0 refs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool")," - 1 bit, 0 refs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes/cell/string")," - 0 bit, 1 ref"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"array")," - 33 bit, 1 ref"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mapping")," - 1 bit, 1 ref"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optional(T)")," - (1 bit, 1 ref) if ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," is ",(0,i.kt)("a",{parentName:"li",href:"/arch/abi/2.1#optionalinnertype"},"large"),". Otherwise, (1 bit + maxBitQty(",(0,i.kt)("inlineCode",{parentName:"li"},"T"),"), maxRefQty(",(0,i.kt)("inlineCode",{parentName:"li"},"T"),"))")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"structure (aka tuple)")," type is considered as a sequence of its types when we encode the function parameters. That's why ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple")," type doesn't have max bit or max ref size. Nested ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple"),"'s also are considered as a sequence of its types. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct A {\n    uint8 a;\n    uint16 b;\n}\n\nstruct B {\n    uint24 d;\n    A a;\n    uint32 d;\n}\n")),(0,i.kt)("p",null,"structure ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," is considered as a sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"uint24"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uint8"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uint16"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uint32")," types."),(0,i.kt)("h2",{id:"encoding-the-message"},"Encoding the message"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Message X")," contains the field ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),". If encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," fits in the cell, then the body is inserted in the cell (",(0,i.kt)("inlineCode",{parentName:"p"},"Either X"),"). Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," is located in the reference (",(0,i.kt)("inlineCode",{parentName:"p"},"Either ^X"),")."),(0,i.kt)("h2",{id:"encoding-the-body-of-the-message"},"Encoding the body of the message"),(0,i.kt)("p",null,"The body of the message is a tree of cells that contains the function ID and encoded function arguments. External messages body is prefixed with function header parameters."),(0,i.kt)("h3",{id:"encoding-header-for-external-messages"},"Encoding header for external messages"),(0,i.kt)("p",null,"Function header has up to 3 optional parameters and mandatory signature. Function ID and function parameters are put after header parameters."),(0,i.kt)("p",null,"Maximum header size is calculated as follows (no references used)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"maxHeader = 1 + 512 + // signature\n    (hasPubkey? 1 + 256 : 0) +\n    (hasTime? 64 : 0) +\n    (hasExpire? 32 : 0);\n")),(0,i.kt)("h3",{id:"encoding-of-function-id-and-its-arguments"},"Encoding of function ID and its arguments"),(0,i.kt)("p",null,"Function ID and the function arguments are located in the chain of cells. The last reference of each cell (except for the last cell in the chain) refers to the next cell. After adding the current parameter in the current cell we must presume an invariant (rule that stays true for the object) for our cell: number of unassigned references in the cell must be not less than 1 because the last cell is used for storing the reference on the next cell. When we add a specific value of some function argument to the cell we assume that it takes the max bit and max ref size. Only if the current parameter (by max bit or max ref size) does not fit into the current cell then we create new cell and insert the parameter in the new cell."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"But"))," If current argument and all the following arguments fit into the current cell by max size then we push the parameters in the cell."),(0,i.kt)("p",null,"In the end we connect the created cells in the chain of cells."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function f(address a, address b) public;\n")),(0,i.kt)("p",null,"Here we create 2 cells. In the first there is function id and  ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". There may be not more than 32+591=623 bits. It's not more than 1023. The next parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," can't fit into the first cell. In the second cell there is only ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function f(mapping(uint=>uint) a, mapping(uint=>uint) b, mapping(uint=>uint) c, mapping(uint=>uint) d)\n")),(0,i.kt)("p",null,"The first cell: function ID, ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function f(string a, string b, string c, string d, uint32 e) public\n")),(0,i.kt)("p",null,"Function ID, ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," are located in the first cell. ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," fit in the first cell by max size. That's why we push all parameter in the fist cell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct A {\n    string a;\n    string b;\n    string c;\n    string d;\n}\n\nfunction f(A a, uint32 e) public;\n")),(0,i.kt)("p",null,"Same as previous example, only one cell."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function f(string a, string b, string c, string d, uint e, uint f, uint g, uint h) public\n")),(0,i.kt)("p",null,"We use 3 cells. In the first cell there are function Id, ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b,")," ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),". In the second - ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"g"),". In the third - ",(0,i.kt)("inlineCode",{parentName:"p"},"h"),"."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-abi/blob/master/docs/ABI_2.2_spec.md"},"Everscale Smart Contracts ABI 2.2 Specification"))))}u.isMDXComponent=!0}}]);