"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),p=r,f=c["".concat(d,".").concat(p)]||c[p]||h[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},d="Validator FAQ",s={unversionedId:"validate/faq",id:"validate/faq",title:"Validator FAQ",description:"Getting started",source:"@site/../../src/validate/faq.md",sourceDirName:"validate",slug:"/validate/faq",permalink:"/validate/faq",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/faq.md",tags:[],version:"current",lastUpdatedAt:1652200514,formattedLastUpdatedAt:"5/10/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economics",permalink:"/validate/economics"},next:{title:"Monitoring",permalink:"/validate/monitoring"}},u={},h=[{value:"Getting started",id:"getting-started",level:2},{value:"How can I become a Everscale validator?",id:"how-can-i-become-a-everscale-validator",level:3},{value:"Can I test out the node?",id:"can-i-test-out-the-node",level:3},{value:"Requirements",id:"requirements",level:2},{value:"What kind of hardware do I need to run a node?",id:"what-kind-of-hardware-do-i-need-to-run-a-node",level:3},{value:"Does the validator node require a public IP?",id:"does-the-validator-node-require-a-public-ip",level:3},{value:"What ports are needed for a node to work?",id:"what-ports-are-needed-for-a-node-to-work",level:3},{value:"What volumes of outgoing traffic do you need for the validator at the moment? How about in the future?",id:"what-volumes-of-outgoing-traffic-do-you-need-for-the-validator-at-the-moment-how-about-in-the-future",level:3},{value:"Node Setup",id:"node-setup",level:2},{value:"What network does the node work with by default?",id:"what-network-does-the-node-work-with-by-default",level:3},{value:"Why are there different initial DiffTime values? Why do some start at 40k and others at 190k?",id:"why-are-there-different-initial-difftime-values-why-do-some-start-at-40k-and-others-at-190k",level:3},{value:"How can I make sure synchronization is proceeding as it should?",id:"how-can-i-make-sure-synchronization-is-proceeding-as-it-should",level:3},{value:"How can I correctly stop the node?",id:"how-can-i-correctly-stop-the-node",level:3}],c={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-faq"},"Validator FAQ"),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"how-can-i-become-a-everscale-validator"},"How can I become a Everscale validator?"),(0,o.kt)("p",null,"To set up a validator node you should follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"run-validator"},"Run validator")," section."),(0,o.kt)("h3",{id:"can-i-test-out-the-node"},"Can I test out the node?"),(0,o.kt)("p",null,"You may setup a node on the ",(0,o.kt)("inlineCode",{parentName:"p"},"net.ton.dev")," test network. The procedure is ",(0,o.kt)("a",{parentName:"p",href:"/validate/run-validator/run-testnet-node"},"similar"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"what-kind-of-hardware-do-i-need-to-run-a-node"},"What kind of hardware do I need to run a node?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,o.kt)("th",{parentName:"tr",align:null},"CPU (cores)"),(0,o.kt)("th",{parentName:"tr",align:null},"RAM (GiBs)"),(0,o.kt)("th",{parentName:"tr",align:null},"Storage (GiBs)"),(0,o.kt)("th",{parentName:"tr",align:null},"Network (Bbits/s)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Minimal"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"16"),(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Recommended"),(0,o.kt)("td",{parentName:"tr",align:null},"16"),(0,o.kt)("td",{parentName:"tr",align:null},"32"),(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("p",null,"SSD disks are recommended for ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/ton-work/db")," storage"),(0,o.kt)("h3",{id:"does-the-validator-node-require-a-public-ip"},"Does the validator node require a public IP?"),(0,o.kt)("p",null,"Yes, the validator requires a public IP, otherwise other nodes will not be able to communicate with it."),(0,o.kt)("h3",{id:"what-ports-are-needed-for-a-node-to-work"},"What ports are needed for a node to work?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The UDP port set ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/main.ton.dev/blob/6e4c842aceb2c52229730cab0fd394a4ae944e84/scripts/env.sh#L38"},"here")," (",(0,o.kt)("inlineCode",{parentName:"li"},"ADNL_PORT")," parameter) for the node itself."),(0,o.kt)("li",{parentName:"ul"},"HTTPS port 443 for the ",(0,o.kt)("a",{parentName:"li",href:"/develop/sdk-tools/tonos-cli"},"TONOS-CLI")," utility.")),(0,o.kt)("h3",{id:"what-volumes-of-outgoing-traffic-do-you-need-for-the-validator-at-the-moment-how-about-in-the-future"},"What volumes of outgoing traffic do you need for the validator at the moment? How about in the future?"),(0,o.kt)("p",null,"In general, the traffic requirements are high (up to tens of TB per month), so it\u2019s best to find a server without traffic limitations. Currently the network has 16 shards by default, and a block is issued every 2-4 seconds in each shard, even if there are no transactions and it is empty \u2013 such is the Ever architecture. On the other hand, as the number of transactions increases, traffic will not grow too fast. Furthermore, as the number of validators grows, they will be divided into groups, each to validate their own shards. This means that the number of constantly communicating neighboring validator nodes will be approximately the same."),(0,o.kt)("h2",{id:"node-setup"},"Node Setup"),(0,o.kt)("h3",{id:"what-network-does-the-node-work-with-by-default"},"What network does the node work with by default?"),(0,o.kt)("p",null,"The node is compatible with all Everscale networks, but connects to just one at a time. It is specified in the configs during node setup."),(0,o.kt)("h3",{id:"why-are-there-different-initial-difftime-values-why-do-some-start-at-40k-and-others-at-190k"},"Why are there different initial DiffTime values? Why do some start at 40k and others at 190k?"),(0,o.kt)("p",null,"Nodes begin synchronization from the latest key block, which is generally issued whenever validator elections end or the validator set is changed. Thus initial DiffTime depends on when in the election cycle the node began synchronization."),(0,o.kt)("p",null,"Synchronization speed is also very dependent on the hardware and the network throughput."),(0,o.kt)("h3",{id:"how-can-i-make-sure-synchronization-is-proceeding-as-it-should"},"How can I make sure synchronization is proceeding as it should?"),(0,o.kt)("p",null,"It\u2019s normal for synchronization to take multiple hours. However, if you have noticed that ",(0,o.kt)("inlineCode",{parentName:"p"},"DiffTime")," has not been decreasing for an hour, or even started increasing, then something is wrong. Make sure you have followed the instructions exactly and that you are using an SSD, check your network status, review the logs. If no obvious reason for the lag presents itself, contact support to get help."),(0,o.kt)("h3",{id:"how-can-i-correctly-stop-the-node"},"How can I correctly stop the node?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pkill -f validator-engine\n")))}p.isMDXComponent=!0}}]);