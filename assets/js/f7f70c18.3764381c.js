"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4461],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1413:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Ever OS",description:"An operating system (OS) is system software that manages computer hardware..."},c="What is Ever OS",l={unversionedId:"arch/ever-os",id:"arch/ever-os",title:"Ever OS",description:"An operating system (OS) is system software that manages computer hardware...",source:"@site/../../src/arch/06-ever-os.md",sourceDirName:"arch",slug:"/arch/ever-os",permalink:"/arch/ever-os",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/06-ever-os.md",tags:[],version:"current",lastUpdatedAt:1652200514,formattedLastUpdatedAt:"5/10/2022",sidebarPosition:6,frontMatter:{title:"Ever OS",description:"An operating system (OS) is system software that manages computer hardware..."},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/arch/accounts"},next:{title:"Contract composition",permalink:"/arch/contract-composition"}},u={},d=[{value:"Why we call it Ever OS?",id:"why-we-call-it-ever-os",level:2},{value:"Memory Management",id:"memory-management",level:3},{value:"Processor Managing",id:"processor-managing",level:3},{value:"Device Managing",id:"device-managing",level:3},{value:"File handling",id:"file-handling",level:3},{value:"Security Handling",id:"security-handling",level:3},{value:"System performance control",id:"system-performance-control",level:3},{value:"Job accounting and handling",id:"job-accounting-and-handling",level:3},{value:"Error detecting and handling",id:"error-detecting-and-handling",level:3},{value:"Synchronization with other software and users",id:"synchronization-with-other-software-and-users",level:3}],m={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-ever-os"},"What is Ever OS"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.\n\u2014 from Wikipedia")),(0,i.kt)("p",null,"TON Operating System is an intermediary between a user and a blockchain \u2014 a distributed verifiable computing platform."),(0,i.kt)("h2",{id:"why-we-call-it-ever-os"},"Why we call it Ever OS?"),(0,i.kt)("p",null,"A modern blockchain like Everscale is not just an immutable ledger. Bitcoin and other earlier blockchains were mostly ledgers, yet even Bitcoin supports a non-Turing complete script that provides some transaction execution instructions. In fact, the Bitcoin script is a Forth-like instruction set, which makes it somewhat similar in origin to TON Virtual Machine assembly language, but more on that later."),(0,i.kt)("p",null,'Most blockchains after Ethereum are, in large part, distributed computing engines that execute and verify Turing-complete programs called smart contracts. In simpler words they are a special breed of network processors working in orchestration (called "consensus") to perform common operations and in that way verify correctness of their execution.'),(0,i.kt)("p",null,"In Everscale this paradigm is taken to the extreme. The immutable ledger is quite a small part of Everscale. Of course it is an immutable ledger and a chain of blocks \u2014 that is how the data is written and transmitted from one network processor to another \u2014 yet there are at least two aspects which make Everscale uniquely more so a computing engine than a simple ledger."),(0,i.kt)("p",null,"Almost everything in Everscale is smart contracts. Every account in Everscale must be associated with a smart contract code (or ",(0,i.kt)("strong",{parentName:"p"},"initialized"),") in order for a user to be able to perform any operation with it. Smart contracts are Everscale Assembly programs executed in the Everscale Virtual machine much like any assembly code is executed by hardware or by a virtual processor in a regular computer."),(0,i.kt)("p",null,"Between a regular computer and a user (which may be a developer who would like to write programs for that computer or a regular user who would like to execute and interact with these programs) there is something called an operating system."),(0,i.kt)("p",null,"That is how GNU defines operating system:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linux is an operating system: a series of programs that let you interact with your computer and run other programs."),(0,i.kt)("p",{parentName:"blockquote"},"An operating system consists of various fundamental programs which are needed by your computer so that it can communicate and receive instructions from users; read and write data to hard disks, tapes, and printers; control the use of memory; and run other software.")),(0,i.kt)("p",null,"It is quite obvious why computers need an operating system. Before operating systems existed, interaction with computers looked something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zeroheight-user-uploads.s3-eu-west-1.amazonaws.com/images/nDfRMdLKjDCljSuXmMBsNA.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJXTVUC4XZENV3LPQ%2F20220503%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220503T212805Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=90fdb12a9a08d62bf6c19f56004d38f5b5f59f38317375839a7a66818abf547e",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'I still think the "world computer" is a good analogy. The idea that you have a shared computing environment that anybody can build and run stuff on is still a totally legitimate and valuable thing to emphasize.'),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Vitalik Buterin")),(0,i.kt)("p",null,"Any way you look at it, blockchain is quite a good candidate to be called a decentralized computer. At least some of the blockchains are. Everscale most definitely is."),(0,i.kt)("p",null,"And just as with any computer, a blockchain needs an intermediate layer (or layers) that manages its resources and provides services to the programs the user runs or interacts with. Of course blockchain, in terms of architecture, cannot perhaps be compared directly 1:1 with a regular PC. But in logical terms, whenever we think about a software stack needed to enable interaction with a user \u2014 to call it an operating system is quite compelling."),(0,i.kt)("p",null,"Let's run some arguments. For reasons of practicality we will not talk only about Free Everscale blockchain, but most of the arguments could be applied to some other modern blockchains as well."),(0,i.kt)("p",null,"A classical operating system is expected to provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Memory Management")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Processor Managing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Device Managing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"File handling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Security Handling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System performance control")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Job accounting and handling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error detecting and handling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synchronization with other software and users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let's compare with Ever OS and the services it provides:"))),(0,i.kt)("h3",{id:"memory-management"},"Memory Management"),(0,i.kt)("p",null,"Individual blocks containing data are created, validated and finalized under governance by the consensus blockchain software. Nodes participating in processing blocks are chosen dynamically without requiring interference from the blockchain user."),(0,i.kt)("h3",{id:"processor-managing"},"Processor Managing"),(0,i.kt)("p",null,"Smart contracts are blockchain programs that are executed by the Everscale Virtual Machine across many network devices and locally (if we consider how a user is accessing the blockchain). A user does not think about how a smart contract is executed. Following some deployment instructions, a developer can deploy and run smart contracts without thinking about which virtual machine it is executed on or how this execution has been synchronized across the network and verified. In this respect it is safe to say that Ever OS provides processor management capabilities."),(0,i.kt)("h3",{id:"device-managing"},"Device Managing"),(0,i.kt)("p",null,"Blockchain software, including full node implementation, allows users to control, handle, configure and diagnose individual blockchain nodes."),(0,i.kt)("h3",{id:"file-handling"},"File handling"),(0,i.kt)("p",null,"Via a smart contract users can store and access persistent data on the blockchain."),(0,i.kt)("h3",{id:"security-handling"},"Security Handling"),(0,i.kt)("p",null,"Access to restricted areas of the system is authorized through extensive use of specialized smart contracts. Cases of unauthorized access attempts are recorded and monitored using security smart contracts."),(0,i.kt)("h3",{id:"system-performance-control"},"System performance control"),(0,i.kt)("p",null,"System-wide smart contracts deployed to the blockchain are in charge of monitoring system performance and receiving events which pinpoint various cases of system malfunction."),(0,i.kt)("h3",{id:"job-accounting-and-handling"},"Job accounting and handling"),(0,i.kt)("p",null,"Smart contracts execution inside the blockchain is governed by specialized software modules. Details of the execution are available for view and analysis through the blockchain explorer."),(0,i.kt)("h3",{id:"error-detecting-and-handling"},"Error detecting and handling"),(0,i.kt)("p",null,"Cases of misbehavior and inconsistency of smart contracts and blockchain software are monitored, collected and stored for subsequent analysis by specialized smart contracts."),(0,i.kt)("h3",{id:"synchronization-with-other-software-and-users"},"Synchronization with other software and users"),(0,i.kt)("p",null,"System smart contracts form an interconnected decentralized network by exchanging addresses, interfaces and specifications with each other to provide users and other smart contracts with the information required to properly utilize their functionality."))}p.isMDXComponent=!0}}]);