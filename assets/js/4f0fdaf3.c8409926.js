"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Testnet EverX Node Troubleshooting",s={unversionedId:"validate/troubleshooting/testnet-node-troubleshooting",id:"validate/troubleshooting/testnet-node-troubleshooting",title:"Testnet EverX Node Troubleshooting",description:"Here are some solutions to frequently encountered problems.",source:"@site/../../src/validate/troubleshooting/testnet-node-troubleshooting.md",sourceDirName:"validate/troubleshooting",slug:"/validate/troubleshooting/testnet-node-troubleshooting",permalink:"/validate/troubleshooting/testnet-node-troubleshooting",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/troubleshooting/testnet-node-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1680835023,formattedLastUpdatedAt:"Apr 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mainnet EverX Node Troubleshooting",permalink:"/validate/troubleshooting/mainnet-node-troubleshooting"},next:{title:"Node upgrades",permalink:"/validate/troubleshooting/node-upgrades"}},l={},c=[{value:"1. Couldn\u2019t connect to Docker daemon at http+docker://localhost",id:"1-couldnt-connect-to-docker-daemon-at-httpdockerlocalhost",level:2},{value:"2. thread &#39;main&#39; panicked error when checking node synchronization",id:"2-thread-main-panicked-error-when-checking-node-synchronization",level:2},{value:"3. Error executing command when checking node synchronization",id:"3-error-executing-command-when-checking-node-synchronization",level:2},{value:"4. Cannot stop/restart/remove node container",id:"4-cannot-stoprestartremove-node-container",level:2},{value:"5. DePool state not updating",id:"5-depool-state-not-updating",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnet-everx-node-troubleshooting"},"Testnet EverX Node Troubleshooting"),(0,r.kt)("p",null,"Here are some solutions to frequently encountered problems."),(0,r.kt)("h2",{id:"1-couldnt-connect-to-docker-daemon-at-httpdockerlocalhost"},"1. Couldn\u2019t connect to Docker daemon at http+docker://localhost"),(0,r.kt)("p",null,"This error occurs in two cases. Either the docker daemon isn't running, or current user doesn't have rights to access docker."),(0,r.kt)("p",null,"You can fix the rights issue either by running relevant commands as the superuser or adding the user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," group: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -a -G docker $USER\n")),(0,r.kt)("p",null,"Make sure to restart the system or log out and back in, for the new group settings to take effect."),(0,r.kt)("h2",{id:"2-thread-main-panicked-error-when-checking-node-synchronization"},"2. thread 'main' panicked error when checking node synchronization"),(0,r.kt)("p",null,"The following error may occur for a short time immediately after node deployment when attempting to ",(0,r.kt)("a",{parentName:"p",href:"/validate/run-validator/run-testnet-node/#4-check-node-synchronization"},"check synchronization"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"thread 'main' panicked at 'Can't create client: Os { code: 111, kind: ConnectionRefused, message: \"Connection refused\" }', bin/console.rs:454:59\n")),(0,r.kt)("p",null,"Currently this is expected behavior, unless it persists ",(0,r.kt)("strong",{parentName:"p"},"for more than a few minutes"),". If it does persist, check network status at ",(0,r.kt)("a",{parentName:"p",href:"https://net.ton.live/"},"https://net.ton.live/"),", and, if the network is up and running, review ",(0,r.kt)("a",{parentName:"p",href:"/validate/run-validator/run-mainnet-node/#during-deployment"},"deployment logs")," for errors."),(0,r.kt)("h2",{id:"3-error-executing-command-when-checking-node-synchronization"},"3. Error executing command when checking node synchronization"),(0,r.kt)("p",null,"The following error may occur for up to an hour after node deployment when attempting to ",(0,r.kt)("a",{parentName:"p",href:"/validate/run-validator/run-testnet-node/#4-check-node-synchronization"},"check synchronization"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error executing command: Error receiving answer: early eof bin/console.rs:296\n")),(0,r.kt)("p",null,"Currently this is expected behavior, unless it persists ",(0,r.kt)("strong",{parentName:"p"},"for more than one hour"),". If it does persist, check network status at ",(0,r.kt)("a",{parentName:"p",href:"https://net.ton.live/"},"https://net.ton.live/"),", and, if the network is up and running, review ",(0,r.kt)("a",{parentName:"p",href:"/validate/run-validator/run-testnet-node/#during-deployment"},"deployment logs")," for errors."),(0,r.kt)("h2",{id:"4-cannot-stoprestartremove-node-container"},"4. Cannot stop/restart/remove node container"),(0,r.kt)("p",null,"Make sure you are running all docker-compose commands from the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/docker-compose/ton-node")," folder."),(0,r.kt)("h2",{id:"5-depool-state-not-updating"},"5. DePool state not updating"),(0,r.kt)("p",null,"It's recommended to send at least two ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool#7-configure-depool-state-update-method"},"ticktocks")," while the elections are open."),(0,r.kt)("p",null,"Here are some solutions to frequently encountered problems."))}p.isMDXComponent=!0}}]);