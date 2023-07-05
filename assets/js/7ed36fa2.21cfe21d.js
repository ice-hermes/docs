"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,u=p["".concat(s,".").concat(g)]||p[g]||m[g]||r;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={title:"4.4. On-chain storage",sidebar_position:4,slug:"/standard/TIP-4.4"},l="Non-Fungible Token On-chain storage (TIP-4.4)",o={unversionedId:"standard/TIP-4/4",id:"standard/TIP-4/4",title:"4.4. On-chain storage",description:"Requires: TIP-4.1",source:"@site/../../src/standard/TIP-4/4.md",sourceDirName:"standard/TIP-4",slug:"/standard/TIP-4.4",permalink:"/standard/TIP-4.4",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-4/4.md",tags:[],version:"current",lastUpdatedAt:1688555554,formattedLastUpdatedAt:"Jul 5, 2023",sidebarPosition:4,frontMatter:{title:"4.4. On-chain storage",sidebar_position:4,slug:"/standard/TIP-4.4"},sidebar:"tutorialSidebar",previous:{title:"4.3. On-chain indexes",permalink:"/standard/TIP-4.3"},next:{title:"4.5. NFT Licensing",permalink:"/standard/TIP-4.5"}},s={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Contracts",id:"contracts",level:2},{value:"Collection",id:"collection",level:2},{value:"TIP4_4Collection.storageCode()",id:"tip4_4collectionstoragecode",level:3},{value:"TIP4_4Collection.storageCode()",id:"tip4_4collectionstoragecode-1",level:3},{value:"TIP4_4Collection.resolveStorage()",id:"tip4_4collectionresolvestorage",level:3},{value:"NFT",id:"nft",level:2},{value:"TIP4_4NFT.onStorageFillComplete()",id:"tip4_4nftonstoragefillcomplete",level:3},{value:"TIP4_4NFT.getStorage()",id:"tip4_4nftgetstorage",level:3},{value:"Storage",id:"storage",level:2},{value:"TIP4_4Storage.fill()",id:"tip4_4storagefill",level:3},{value:"TIP4_4Storage.getInfo()",id:"tip4_4storagegetinfo",level:3},{value:"Visualization",id:"visualization",level:2},{value:"Legend",id:"legend",level:3},{value:"<code>NFT</code> minting with <code>Storage</code>",id:"nft-minting-with-storage",level:3},{value:"<code>Storage</code> filling",id:"storage-filling",level:3},{value:"<code>Storage</code> with <code>Index</code>",id:"storage-with-index",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-fungible-token-on-chain-storage-tip-44"},"Non-Fungible Token On-chain storage (TIP-4.4)"),(0,i.kt)("p",null,"Requires: ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-4.1"},"TIP-4.1"),"\nRequires: ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Using the Storage contract, you can store NFT-related bytes in blockchain"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Fault tolerance. If off-chain services are unavailable, the user will view NFT-related bytes, because it is stored on-chain."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119")),(0,i.kt)("h2",{id:"contracts"},"Contracts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," - ",(0,i.kt)("a",{parentName:"li",href:"/standard/TIP-4.1"},"TIP4.1")," contract that minted token and store ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage")," contract code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," - ",(0,i.kt)("a",{parentName:"li",href:"/standard/TIP-4.1"},"TIP4.1")," contract that store token information and ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage")," contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Storage")," - contract that store token byte content. Storage is independent. Storage doesn\u2019t store ",(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," address because ",(0,i.kt)("inlineCode",{parentName:"li"},"NFT")," contract address can be changed by burning and redeployment from another collection.")),(0,i.kt)("h2",{id:"collection"},"Collection"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-4.1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," contract must implement ",(0,i.kt)("inlineCode",{parentName:"p"},"TIP4_4Collection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_4Collection {\n    function storageCode() external view responsible returns (TvmCell code);\n    function storageCodeHash() external view responsible returns (uint256 codeHash);\n    function resolveStorage(address nft) external view responsible returns (address addr);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x6302A6F8")),(0,i.kt)("h3",{id:"tip4_4collectionstoragecode"},"TIP4_4Collection.storageCode()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function storageCode() external view responsible returns (TvmCell code);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TvmCell"),") - storage contract code")),(0,i.kt)("h3",{id:"tip4_4collectionstoragecode-1"},"TIP4_4Collection.storageCode()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function storageCodeHash() external view responsible returns (uint256 hash);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint256"),") - storage contract code hash")),(0,i.kt)("h3",{id:"tip4_4collectionresolvestorage"},"TIP4_4Collection.resolveStorage()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function resolveStorage(address nft) external view responsible returns (address addr);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addr")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - storage contract address")),(0,i.kt)("h2",{id:"nft"},"NFT"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-4.1"},"TIP-4.1")," ",(0,i.kt)("inlineCode",{parentName:"p"},"NFT")," contract must implement ",(0,i.kt)("inlineCode",{parentName:"p"},"TIP4_4NFT")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_4NFT {\n    function onStorageFillComplete(address gasReceiver) external;\n    function getStorage() external view responsible returns (address addr);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x009DC09A")),(0,i.kt)("h3",{id:"tip4_4nftonstoragefillcomplete"},"TIP4_4NFT.onStorageFillComplete()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function onStorageFillComplete(address gasReceiver) external;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasReceiver")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - address of contract that receive all remaining contract balance then last chunk filled\nCalling the ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage.fill()")," on storage contract that fills the last chunk should call ",(0,i.kt)("inlineCode",{parentName:"li"},"TIP4_4NFT.onStorageFillComplete()")," on token contract")),(0,i.kt)("h3",{id:"tip4_4nftgetstorage"},"TIP4_4NFT.getStorage()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getStorage() external view responsible returns (address addr);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addr")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - storage contract address")),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," contract must implement ",(0,i.kt)("inlineCode",{parentName:"p"},"TIP4_4Storage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_4Storage {\n    function fill(uint32 id, bytes chunk, address gasReceiver) external;\n    function getInfo() external view responsible returns (\n        address nft,\n        address collection,\n        string mimeType,\n        mapping(uint32 => bytes) content,\n        string contentEncoding\n    );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x204D6296")),(0,i.kt)("h3",{id:"tip4_4storagefill"},"TIP4_4Storage.fill()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function fill(uint32 id, bytes chunk, address gasReceiver) external;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint32"),") - chunk number. From ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"4 294 967 295")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes")," (",(0,i.kt)("inlineCode",{parentName:"li"},"chunk"),") - data. Max size of data is limited by external message payload size. Maximum size external message payload size is ",(0,i.kt)("inlineCode",{parentName:"li"},"16KB")," at 2022-03-18."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasReceiver")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - address of contract that receive all remaining contract balance then last chunk filled.")),(0,i.kt)("h3",{id:"tip4_4storagegetinfo"},"TIP4_4Storage.getInfo()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getInfo() external view responsible returns (\n    address nft,\n    address collection,\n    string mimeType,\n    mapping(uint32 => bytes) chunks,\n    string contentEncoding\n);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nft")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection")," (",(0,i.kt)("inlineCode",{parentName:"li"},"address"),") - collection token contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mimeType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"MIME types")," are defined and standardized in IETF's ",(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6838"},"RFC 6838")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," (",(0,i.kt)("inlineCode",{parentName:"li"},"mapping(uint32 => bytes)"),") - byte content. Maximum content size is ",(0,i.kt)("inlineCode",{parentName:"li"},"4 294 967 295 chunks * chunk size"),". Max size of data is limited by external message payload size. Maximum size external message payload size is ",(0,i.kt)("inlineCode",{parentName:"li"},"16KB")," at 2022-03-18 Maximum content size is ",(0,i.kt)("inlineCode",{parentName:"li"},"4 294 967 295 * 16KB \u2248 69TB")," at 2022-03-18."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contentEncoding")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Was it compressed by any algorithm. If it was compressed with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_utils.md#compress_zstd"},"zstd")," contentEncoding need to be ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd"),", all other need to be like ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"},"http content encoding"))),(0,i.kt)("h2",{id:"visualization"},"Visualization"),(0,i.kt)("h3",{id:"legend"},"Legend"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Legend",src:n(841).Z,width:"356",height:"524"}),"\n",(0,i.kt)("img",{alt:"Legend",src:n(7303).Z,width:"841",height:"332"})),(0,i.kt)("h3",{id:"nft-minting-with-storage"},(0,i.kt)("inlineCode",{parentName:"h3"},"NFT")," minting with ",(0,i.kt)("inlineCode",{parentName:"h3"},"Storage")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storage",src:n(5718).Z,width:"841",height:"597"})),(0,i.kt)("h3",{id:"storage-filling"},(0,i.kt)("inlineCode",{parentName:"h3"},"Storage")," filling"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storage",src:n(8333).Z,width:"524",height:"524"})),(0,i.kt)("h3",{id:"storage-with-index"},(0,i.kt)("inlineCode",{parentName:"h3"},"Storage")," with ",(0,i.kt)("inlineCode",{parentName:"h3"},"Index")),(0,i.kt)("p",null,"How to interaction ",(0,i.kt)("a",{parentName:"p",href:"/standard/TIP-4.3"},"on-chain indexes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," contracts\n",(0,i.kt)("img",{alt:"Storage",src:n(5304).Z,width:"336",height:"524"})))}m.isMDXComponent=!0},841:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/legend1-3de5d1dd03117f26abf5cb7f454c8d39.svg"},7303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/legend2-1090ee4d00fd23ee031838f2a0d13e27.svg"},5718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage1-67699c783a04e3a9e9f911d5d0d740a4.svg"},8333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage2-2f5590f7ffadd333a99755e88394050b.svg"},5304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storage3-21b8be56afaa0e0bc30b6b75d8acf242.svg"}}]);