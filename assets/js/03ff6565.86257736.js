"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1644],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(o),f=n,u=h["".concat(l,".").concat(f)]||h[f]||d[f]||a;return o?r.createElement(u,s(s({ref:t},p),{},{components:o})):r.createElement(u,s({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},7816:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"1.1 COPYLEFT",sidebar_position:1,slug:"/standard/TIP-1.1",description:"Developer business models and license information"},s="COPYLEFT (TIP-1.1)",i={unversionedId:"standard/TIP-1/1",id:"standard/TIP-1/1",title:"1.1 COPYLEFT",description:"Developer business models and license information",source:"@site/../../src/standard/TIP-1/1.md",sourceDirName:"standard/TIP-1",slug:"/standard/TIP-1.1",permalink:"/standard/TIP-1.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-1/1.md",tags:[],version:"current",lastUpdatedAt:1680835023,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:1,frontMatter:{title:"1.1 COPYLEFT",sidebar_position:1,slug:"/standard/TIP-1.1",description:"Developer business models and license information"},sidebar:"tutorialSidebar",previous:{title:"TIP-1 TVM Opcode",permalink:"/standard/TIP-1"},next:{title:"1.2 MYCODE",permalink:"/standard/TIP-1.2"}},l={},c=[{value:"<strong>Introduction</strong>",id:"introduction",level:3},{value:"<strong>Aligning the incentives</strong>",id:"aligning-the-incentives",level:3},{value:"<strong>On-chain licensing fees</strong>",id:"on-chain-licensing-fees",level:3},{value:"<strong>Some technical details</strong>",id:"some-technical-details",level:3},{value:"<strong>Copyright discussion</strong>",id:"copyright-discussion",level:3},{value:"<strong>References</strong>",id:"references",level:3}],p={toc:c},h="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"copyleft-tip-11"},"COPYLEFT (TIP-1.1)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://forum.everscale.network/t/tip-4-free-software-license-ton-vm-opcode-fb0a/2952"},"https://forum.everscale.network/t/tip-4-free-software-license-ton-vm-opcode-fb0a/2952")),(0,n.kt)("p",null,"by Mitja Goroshevsky"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"with special thanks to Sergey Yaroslavtsev")),(0,n.kt)("h3",{id:"introduction"},(0,n.kt)("strong",{parentName:"h3"},"Introduction")),(0,n.kt)("p",null,"Many members of our community have asked questions about Everscale code philosophy. Why we call it Free Software? What is a relationship between Everscale and Free Software? What is the difference between Free Software and Open Source? I have decided to combine this with an idea I have regarding gas payment redistribution in TON. You will see below why it is related."),(0,n.kt)("p",null,"The concept of Free Software predates open source. Richard Stallman has started the free-software movement in 1983 with a launch of GNU Project while open-source movement has been derived from Free Software only in 1998."),(0,n.kt)("p",null,"To clarify, the Free Software is not in conflict with Open Source. As explained below it follows all the same principles and the differences seems more ideological. Yet TON project did not have any problem with open-source nature of it software. It is all open sourced. The problem was exactly about the Freedom of people to use it. That is why Everscale is heavily influenced by Free Software movement. Declaration of Decentralisation is, in many ways, inspired by Stallman\u2019s \xabThe GNU Manifesto\xbb",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,n.kt)("p",null,"In \xabWhy Open Source misses the point of Free Software\xbb Stallman writes among other things: \xabThe terms \xabfree software\xbb and \xabopen source\xbb stand for almost the same range of programs. However, they say different things about those programs, based on different values. The free software movement campaigns for freedom for the users of computing; it is a movement for freedom and justice. By contrast, the open source idea values mainly practical advantage and does not campaign for principles. This is why we do not agree with open source, and do not use that term\xbb",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,n.kt)("p",null,"It seems Everscale is in agreement with this line of thought. While all our software is open source it is the Freedom to run the software what has launched this network."),(0,n.kt)("p",null,"Now let\u2019s talk about Copyright and Licensing as they relate to the Free Software in general and Blockchain in particular. Before we start I need to say that blockchain may potentially provide a solution to some of the free software inherited business model problems."),(0,n.kt)("p",null,"We all remember that free in the free software stands for freedom and not for zero price. The ability to get paid for a software should not be based on restrictions imposed by its license. But what it should be based upon then? There are several business models for free software non of which really works. What works is a business model that is not exactly related to the software itself and therefore can not be attributed to it. Such as charging for support or for portions of the software which are closed source. It all seems quite unnatural. It also prevents one of the major points of free software \u2014 an open collaboration of the community around software projects."),(0,n.kt)("p",null,"Donald Fischer article title \xabOpen source creators: Red Hat got $34 billion and you got $0. Here\u2019s why\xbb",(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," is self explanatory. IBM has bought a commercial company that was built on top of many developers\u2019 contribution to its code. Those developers never got any part out of the value they have created."),(0,n.kt)("h3",{id:"aligning-the-incentives"},(0,n.kt)("strong",{parentName:"h3"},"Aligning the incentives")),(0,n.kt)("p",null,"Many free and open source software projects struggle to introduce a sustainable business model. This is one of the reasons why most of the open source software contributors work for large corporations. When a venture capital provides funding to a software project it expects multiple return on its capital. With commercial software it is quite straight forward \u2014 a company is charging money for its software use and if successful passes profits to its stakeholders. With free software its quite difficult. That is why there are very few (or should we say: not enough) commercially successful open source software companies."),(0,n.kt)("p",null,"Blockchain introduces a unique opportunity for Free Software developers to align their commercial interests with those of users for the benefit of the whole ecosystem. As an Internet of Value protocol, Blockchain has built-in network incentive mechanism \u2014 network fees (or gas)."),(0,n.kt)("p",null,"To remind:"),(0,n.kt)("p",null,"Miners in Proof-Of-Work collect miner rewards and network fees to compensate them for resources spent to secure the network and process transactions. Both security computations and transaction processing are separate resources, thus requiring separate fees."),(0,n.kt)("p",null,"In Proof-Of-Stake Validators commit funds and processing power to secure the network and process transactions (in a form of smart contract execution in TON). For this they also get separate rewards: block rewards in a form of token emission and transaction reward in a form of a fee. Please note, rewards are separated in both cases."),(0,n.kt)("p",null,"We propose to extend the reward model to transaction facilitators. It would be logical to pay part of the fees to the smart contract developer who is initiating the transaction which pays the fee. This will attract both Developers and Users which will increase network usage and total transaction fees for all network participants."),(0,n.kt)("h3",{id:"on-chain-licensing-fees"},(0,n.kt)("strong",{parentName:"h3"},"On-chain licensing fees")),(0,n.kt)("p",null,"Somewhat naive mechanism but with the same underlying idea is proposed by Near blockchain."),(0,n.kt)("p",null,"\xabThe developerReward are allocated by per block per account, as they can be efficiently done every time the transaction or receipts is being processed by the contract\xbb",(0,n.kt)("sup",{parentName:"p",id:"fnref-4"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,n.kt)("p",null,"The problem with this approach lays in the fact that network fees not only pays for resources but also provide an important anti spam mechanism. One can use the developer kick-back to simply lower an attack costs. To mitigate that risk we propose a use of a special\xa0",(0,n.kt)("strong",{parentName:"p"},"Payout Contract"),". This contract is going to pay the collected Copyleft fees to developers only after certain threshold in both amount of fees and time frame are surpassed."),(0,n.kt)("p",null,"In this respect the Developer motivation is again aligned with the Network security model \u2014 it is not practical to break the network where one receives a long term rent."),(0,n.kt)("h3",{id:"some-technical-details"},(0,n.kt)("strong",{parentName:"h3"},"Some technical details")),(0,n.kt)("p",null,"Technically we introduce a TVM Opcode FB0A. Contract may include that code together with a License information and address of its developer."),(0,n.kt)("p",null,"Collator will include a reward related to gas fees from these transactions into the block for the address indicated in the TVM instruction in the amount corresponding to the indicated License. The percentage of gas fees depends on the license type such as that the most free software compatible license provides more gas."),(0,n.kt)("p",null,"FB0A - COPYLEFT (n x y - ), looks up for the license rule for \u2018n\u2019 in ConfigParam (for example 42) and creates output action to send part of the tokens it collected from gas fees to Payout contract indicated in ConfigParam for address x:y, where x - is 32 bit signed integer for workchain and y is 256 bit unsigned integer for contract address in this workchain. It will not throw any exceptions if n or the address are incorrect."),(0,n.kt)("p",null,"Generally allowed licenses are those supported by Free Software Foundation as described here:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/license-list.html#SoftwareLicenses"},"https://www.gnu.org/licenses/license-list.html#SoftwareLicenses\xa02")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"License types payout")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/license-list.html#SoftwareLicenses"},"GPL-Compatible Free Software Licenses\xa02"),"\xa0\u2192 30% fees"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/license-list.html#GPLIncompatibleLicenses"},"GPL-Incompatible Free Software Licenses"),"\xa0\u2192 20% fees"),(0,n.kt)("p",null,"To implement we add network config parameter: license fees threshold value"),(0,n.kt)("p",null,"Collator check threshold each time the instruction is executed. After threshold is reached collator sends value to Developer Account defined in contract instruction FB0A"),(0,n.kt)("p",null,"TVM creates special out action with Developer Account (last call of FB0A matters)"),(0,n.kt)("p",null,"If account is been deleted, the executor sends value to Developer Account or to ValueFlow if it is not enough (this case must be checked in Validator)"),(0,n.kt)("p",null,"Executor analyzes special out action and counts value then sends message to developer account (payment for transaction gets from value)"),(0,n.kt)("p",null,"We add fields to json objects and QServer for SDK"),(0,n.kt)("p",null,"Collator and Validator must check fees from ValueFlow with Developer correction"),(0,n.kt)("h3",{id:"copyright-discussion"},(0,n.kt)("strong",{parentName:"h3"},"Copyright discussion")),(0,n.kt)("p",null,"\xabWhat is the proper way to decide copyright policy? If copyright is a bargain made on behalf of the public, it should serve the public interest above all. The government\u2019s duty when selling the public\u2019s freedom is to sell only what it must, and sell it as dearly as possible. At the very least, we should pare back the extent of copyright as much as possible while maintaining a comparable level of publication\xbb",(0,n.kt)("sup",{parentName:"p",id:"fnref-5"},(0,n.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One important dimension of copyright is its duration"),(0,n.kt)("li",{parentName:"ul"},"Another dimension of copyright policy is the extent of fair use: some ways of reproducing all or part of a published work that are legally permitted even though it is copyrighted.")),(0,n.kt)("p",null,"(c) Richard Stallman"),(0,n.kt)("p",null,"Both duration and fair use of copyright is balanced in this proposal by virtue of compensating copyright holder by Payout Contract creating an ongoing reward from the network while at the same time not preventing a forking possibility by other developers who then need to improve the software in a way that will bring new users and create new intensive for the new contributor. So both improvements as well as long term rent (subscription) is provided for developers."),(0,n.kt)("p",null,"The Copyleft spirit is fully supported here as the Fee is collected for developers who facilitates the fees creation in the first place. The freedom to fork is fully executed as well as anyone can fork the code of a smart contract. In the end it is the community of users who chooses which contract to use and the decision is usually based upon the reputation of the code represented by the hash of the code where is no single byte has been changed. Therefore the system is merit-based. Both long term developer\u2019s incentives for original developers and forking is provided."),(0,n.kt)("p",null,"To recap the proposed system is compatible with all four essential freedoms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The freedom to run the program as you wish, for any purpose (freedom 0)."),(0,n.kt)("li",{parentName:"ul"},"The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this."),(0,n.kt)("li",{parentName:"ul"},"The freedom to redistribute copies so you can help others (freedom 2)."),(0,n.kt)("li",{parentName:"ul"},"The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.")),(0,n.kt)("h3",{id:"references"},(0,n.kt)("strong",{parentName:"h3"},"References")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},(0,n.kt)("a",{parentName:"li",href:"https://www.gnu.org/gnu/manifesto.html"},"The GNU Manifesto"),(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},(0,n.kt)("a",{parentName:"li",href:"https://www.gnu.org/philosophy/open-source-misses-the-point.html"},"Why Open Source Misses the Point of Free Software"),(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},(0,n.kt)("a",{parentName:"li",href:"https://blog.tidelift.com/open-source-creators-red-hat-got-34-billion-and-you-got-0.-heres-why"},"Open source creators: Red Hat got $34 billion and you got $0. Here's why"),(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4"},(0,n.kt)("a",{parentName:"li",href:"https://near.org/papers/economics-in-sharded-blockchain/#developer-business-models"},"Economics in a Sharded Blockchain \u2014 Section 06 \u2014 Developer Business Models"),(0,n.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-5"},(0,n.kt)("a",{parentName:"li",href:"https://www.gnu.org/philosophy/misinterpreting-copyright.en.html"},"Misinterpreting Copyright \u2014 A Series of Errors"),(0,n.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);