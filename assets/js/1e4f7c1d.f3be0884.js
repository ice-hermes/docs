"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8470],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},s="Run Testnet Node",d={unversionedId:"validate/run-validator/run-testnet-node",id:"validate/run-validator/run-testnet-node",title:"Run Testnet Node",description:"EverX Testnet node repository https://github.com/tonlabs/net.ton.dev",source:"@site/../../src/validate/run-validator/run-testnet-node.md",sourceDirName:"validate/run-validator",slug:"/validate/run-validator/run-testnet-node",permalink:"/validate/run-validator/run-testnet-node",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/run-validator/run-testnet-node.md",tags:[],version:"current",lastUpdatedAt:1665502265,formattedLastUpdatedAt:"Oct 11, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Run Mainnet Node",permalink:"/validate/run-validator/run-mainnet-node"},next:{title:"Validator Elections",permalink:"/validate/run-validator/validator-elections"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"1. System Requirements",id:"1-system-requirements",level:4},{value:"2. Prerequisites",id:"2-prerequisites",level:4},{value:"2.1 Set the Environment",id:"21-set-the-environment",level:6},{value:"3. Deploy RUST Validator Node",id:"3-deploy-rust-validator-node",level:4},{value:"4. Check Node synchronization",id:"4-check-node-synchronization",level:4},{value:"5. Configure validator multisignature wallet",id:"5-configure-validator-multisignature-wallet",level:4},{value:"6. Configure DePool",id:"6-configure-depool",level:4},{value:"7. Upgrade RUST Validator Node",id:"7-upgrade-rust-validator-node",level:4},{value:"Stopping, restarting the RUST Node",id:"stopping-restarting-the-rust-node",level:2},{value:"Logging",id:"logging",level:2},{value:"During deployment",id:"during-deployment",level:4},{value:"During operation",id:"during-operation",level:4},{value:"Migrating from C++ node",id:"migrating-from-c-node",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"1. Couldn\u2019t connect to Docker daemon at http+docker://localhost",id:"1-couldnt-connect-to-docker-daemon-at-httpdockerlocalhost",level:4},{value:"2. thread &#39;main&#39; panicked error when checking node synchronization",id:"2-thread-main-panicked-error-when-checking-node-synchronization",level:4},{value:"3. Error executing command when checking node synchronization",id:"3-error-executing-command-when-checking-node-synchronization",level:4},{value:"4. Cannot stop/restart/remove node container",id:"4-cannot-stoprestartremove-node-container",level:4},{value:"5. DePool state not updating",id:"5-depool-state-not-updating",level:4}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-testnet-node"},"Run Testnet Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"EverX Testnet node repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/net.ton.dev"},"https://github.com/tonlabs/net.ton.dev"))),(0,r.kt)("p",null,"This HOWTO contains instructions on how to build and configure a RUST validator node in TON blockchain. The instructions and scripts below were verified on Ubuntu 20.04."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"SSD/NVMe disks are obligatory."),(0,r.kt)("h4",{id:"1-system-requirements"},(0,r.kt)("a",{parentName:"h4",href:"/validate/run-validator/system-requirements/##everx-testnet-node"},"1. System Requirements")),(0,r.kt)("h4",{id:"2-prerequisites"},"2. Prerequisites"),(0,r.kt)("h6",{id:"21-set-the-environment"},"2.1 Set the Environment"),(0,r.kt)("p",null,"Adjust (if needed) ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/scripts/env.sh"),":"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"export DEPOOL_ENABLE=yes")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sh")," for a depool validator (an elector request is sent to a depool from a validator multisignature wallet)."),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"export DEPOOL_ENABLE=no")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"env.sh")," for a direct staking validator (an elector request is sent from a multisignature wallet directly to the elector)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd net.ton.dev/scripts/\n. ./env.sh \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Make sure to run the script as ",(0,r.kt)("inlineCode",{parentName:"p"},". ./env.sh"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"./env.sh")),(0,r.kt)("h6",{parentName:"blockquote",id:"22-install-dependencies"},"2.2 Install Dependencies"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"install_deps.sh")," script supports Ubuntu OS only.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./install_deps.sh \n")),(0,r.kt)("p",null,"Install and configure Docker according to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"official documentation"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Make sure to add your user to the docker group, or run subsequent command as superuser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -a -G docker $USER\n")),(0,r.kt)("h4",{id:"3-deploy-rust-validator-node"},"3. Deploy RUST Validator Node"),(0,r.kt)("p",null,"Do this step when the network is launched.\nDeploy the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./deploy.sh 2>&1 | tee ./deploy.log\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": the log generated by this command will be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/scripts/")," folder and can be useful for troubleshooting."),(0,r.kt)("p",null,"Wait until the node is synced. Depending on network throughput this step may take significant time (up to several hours)."),(0,r.kt)("h4",{id:"4-check-node-synchronization"},"4. Check Node synchronization"),(0,r.kt)("p",null,"Use the following command to check if the node is synced:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -it rnode /ton-node/tools/console -C /ton-node/configs/console.json --cmd getstats\n")),(0,r.kt)("p",null,"Script output example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'tonlabs console 0.1.254\nCOMMIT_ID: \nBUILD_DATE: 2021-12-24 10:53:20 +0300\nCOMMIT_DATE: \nGIT_BRANCH: \n{\n    "sync_status":    "synchronization finished",\n    "masterchainblocktime":    1640343840,\n    "masterchainblocknumber":    13393489,\n    "timediff":    4,\n    "in_current_vset_p34":    true,\n    "in_next_vset_p36":    false,\n    "last_applied_masterchain_block_id":    {"shard":"-1:8000000000000000","seq_no":13393489,"rh":"e74d505222bbe64617bbd42939cf01334b035990ae4b4e285e67ecbb1b537dd3","fh":"fc0be7c22310389400a7bdbd000b3737b317ce44d92e9a5ed72086c4fa404afa"},\n    "processed_workchain":    0,\n    "validation_stats":    {\n  "-1:8000000000000000": "1 sec ago",\n  "0:e800000000000000": "1 sec ago"\n},\n    "collation_stats":    {\n  "-1:8000000000000000": "never",\n  "0:e800000000000000": "6 sec ago"\n},\n    "tps_10":    2,\n    "tps_300":    1\n}\n')),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"timediff")," parameter is less than 10 seconds, synchronization with masterchain is complete.\n",(0,r.kt)("inlineCode",{parentName:"p"},'"sync_status": "synchronization finished"')," means synchronization with workchains is complete"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The sync process may not start for up to one hour after node deployment, during which this command may result in error messages. If errors persist for more than an hour after deployment, review deployment log for errors and check the network status."),(0,r.kt)("h4",{id:"5-configure-validator-multisignature-wallet"},"5. Configure validator multisignature wallet"),(0,r.kt)("p",null,"There is a small difference between direct staking and DePool validators on this step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For direct staking validator it is necessary to create and deploy a validator ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig"},"SafeMultisig")," wallet in ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," chain."),(0,r.kt)("li",{parentName:"ul"},"For a DePool validator it is necessary to create and deploy a validator ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig"},"SafeMultisig")," wallet in ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," chain.")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},"TONOS-CLI")," for this purpose. It should be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},"configured")," to connect to the net.ton.dev network."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##3-create-wallet"},"this document")," for the detailed wallet creation procedure, or follow the links in the short guide below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All wallet custodians should ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##31-create-seed-phrases-and-public-keys-for-all-custodians"},"create seed phrases and public keys")," for themselves. At least three custodians are recommended for validator wallet, one of which will be used by the validator node. All seed phrases should be kept secret by their owners and securely backed up."),(0,r.kt)("li",{parentName:"ol"},"The wallet deployer (who may or may not be one of the custodians) should gather the ",(0,r.kt)("strong",{parentName:"li"},"public")," keys from all custodians."),(0,r.kt)("li",{parentName:"ol"},"The wallet deployer should obtain ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##22-download-contract-files"},"SafeMultisig contract code")," from the repository."),(0,r.kt)("li",{parentName:"ol"},"The wallet deployer should ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##32-generate-deployment-key-pair-file"},"generate deployment keys"),"."),(0,r.kt)("li",{parentName:"ol"},"The wallet deployer should ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##33-generate-wallet-address"},"generate validator wallet")," address: ",(0,r.kt)("strong",{parentName:"li"},"in -1 chain for direct staking validator or in 0 chain for a DePool validator"),"."),(0,r.kt)("li",{parentName:"ol"},"Any user should ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##34-send-tokens-to-the-new-address-from-another-wallet"},"send at least 1 token")," to the generated wallet address to create it in the blockchain."),(0,r.kt)("li",{parentName:"ol"},"The wallet deployer should ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##35-deploy-wallet-set-custodians"},"deploy the wallet")," contact to the blockchain and set all gathered public keys as its custodians. At this step the number of custodian signatures required to make transactions from the wallet is also set (>=2 recommended for validator wallets). Deploy to  -1 chain for direct staking validator or to 0 chain for a DePool validator."),(0,r.kt)("li",{parentName:"ol"},"In case of direct staking, the funds for staking should be ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##46-create-transaction-online"},"transferred")," to the newly created validator wallet.")),(0,r.kt)("p",null,"Once the wallet is deployed, place 2 files on the validator node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/${VALIDATOR_NAME}.addr")," should contain validator multisignature wallet address in form ",(0,r.kt)("inlineCode",{parentName:"li"},"X:XXX...XXX")," (the folder on the host is ",(0,r.kt)("inlineCode",{parentName:"li"},"net.ton.dev/docker-compose/ton-node/configs"),") "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/keys/msig.keys.json")," should contain validator multisignature custodian's keypair (the folder on the host is ",(0,r.kt)("inlineCode",{parentName:"li"},"net.ton.dev/docker-compose/ton-node/configs/keys/"),")")),(0,r.kt)("p",null,"The node will use the wallet address and the keys provided to it to generate election requests each validation cycle."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If the validator wallet requires more than 1 custodian signature to make transactions, make sure each transaction sent by the validator node is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig##47-create-transaction-confirmation-online"},"confirmed")," by the required amount of custodians.")),(0,r.kt)("h4",{id:"6-configure-depool"},"6. Configure DePool"),(0,r.kt)("p",null,"For a DePool validator it is necessary to deploy a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool"},"DePool")," contract to workchain ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},"TONOS-CLI")," for this purpose. It should be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli"},"configured")," to connect to the net.ton.dev network."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##depool"},"this document")," for the detailed DePool creation procedure, or follow the links in the short guide below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##2-prepare-depool-and-supporting-smart-contracts"},"Obtain contract code")," from the repository."),(0,r.kt)("li",{parentName:"ol"},"Generate ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##3-generate-deployment-keys"},"deployment keys"),"."),(0,r.kt)("li",{parentName:"ol"},"Calculate ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##4-calculate-contract-addresses"},"contract addresses"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##5-send-coins-to-the-calculated-addresses"},"Send tokens")," to the calculated addresses."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##6-deploy-contracts"},"Deploy contracts"),". Make sure to specify your validator wallet in the DePool contract at this step."),(0,r.kt)("li",{parentName:"ol"},"Configure DePool ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##7-configure-depool-state-update-method"},"state update method"),".")),(0,r.kt)("p",null,"Once DePool is successfully deployed and configured to be regularly called to update its state, you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##8-make-stakes"},"make stakes")," in it. Note that validator stakes must always exceed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##61-deploy-depool-contract-to-the-basechain"},"validator assurance"),", otherwise DePool will not participate in elections."),(0,r.kt)("p",null,"Also note, that DePool and supporting contracts balance should be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##11-maintain-positive-balance-on-depool-and-supplementary-contracts"},"monitored and kept positive at all times"),"."),(0,r.kt)("p",null,"Once the validator wallet and the DePool are deployed, place 3 files on the validator node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/${VALIDATOR_NAME}.addr")," should contain validator multisignature wallet address in form ",(0,r.kt)("inlineCode",{parentName:"li"},"0:XXX...XXX")," (the folder on the host is ",(0,r.kt)("inlineCode",{parentName:"li"},"net.ton.dev/docker-compose/ton-node/configs"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/keys/msig.keys.json")," should contain validator multisignature custodian's keypair (the folder on the host is ",(0,r.kt)("inlineCode",{parentName:"li"},"net.ton.dev/docker-compose/ton-node/configs/keys/"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/depool.addr")," should contain DePool address in form ",(0,r.kt)("inlineCode",{parentName:"li"},"0:XXX...XXX"),"  (the folder on the host is ",(0,r.kt)("inlineCode",{parentName:"li"},"net.ton.dev/docker-compose/ton-node/configs"),")")),(0,r.kt)("p",null,"The script generating validator election requests (directly through multisig wallet, or through DePool, depending on the setting selected on step 2.1) will run regularly, once the necessary addresses and keys are provided."),(0,r.kt)("h4",{id:"7-upgrade-rust-validator-node"},"7. Upgrade RUST Validator Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You may need to renew your copy of net.ton.dev scripts but do not remove any working files from the previous deployment (for example, configs folder)."),(0,r.kt)("p",null,"Adjust (specify new commit ID) ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/scripts/env.sh"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export TON_NODE_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node.git"\nexport TON_NODE_GITHUB_COMMIT_ID="master"\nexport TON_NODE_TOOLS_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node-tools.git"\nexport TON_NODE_TOOLS_GITHUB_COMMIT_ID="master"\nexport TONOS_CLI_GITHUB_REPO="https://github.com/tonlabs/tonos-cli.git"\nexport TONOS_CLI_GITHUB_COMMIT_ID="master"\n')),(0,r.kt)("p",null,"Upgrade the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./upgrade.sh 2>&1 | tee ./upgrade.log\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": the log generated by this command will be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/scripts/")," folder and can be useful for troubleshooting."),(0,r.kt)("p",null,"Wait until the node is synced."),(0,r.kt)("h2",{id:"stopping-restarting-the-rust-node"},"Stopping, restarting the RUST Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": call docker-compose commands from the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/docker-compose/ton-node"),"  folder.\nTo stop the node use the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose stop\n")),(0,r.kt)("p",null,"To restart a stopped node use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose restart\n")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("h4",{id:"during-deployment"},"During deployment"),(0,r.kt)("p",null,"It is highly recommended to record the full log during node deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./deploy.sh 2>&1 | tee ./deploy.log\n")),(0,r.kt)("p",null,"The log is saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/scripts/")," folder next to the deployment script and can be useful for troubleshooting."),(0,r.kt)("h4",{id:"during-operation"},"During operation"),(0,r.kt)("p",null,"When operational, the node keeps a number of logs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/docker-compose/ton-node/logs")," folder."),(0,r.kt)("p",null,"Logs are generated with ",(0,r.kt)("strong",{parentName:"p"},"log4rs")," framework. For detailed documentation on it refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/log4rs/1.0.0/log4rs/"},"https://docs.rs/log4rs/1.0.0/log4rs/"),"."),(0,r.kt)("p",null,"Logging configuration is determined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/docker-compose/ton-node/configs/log_cfg.yml")," file. By default is contains the recommended configuration for the Rust node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'refresh_rate: 30 seconds\nappenders:\n  stdout:\n    kind: console\n    encoder:\n      pattern: "{d(%s.%f)} {l} [{h({t})}] {I}: {m}{n}"\n  stdout_ref:\n    kind: console\n    encoder:\n      pattern: "{f}:{L} {l} [{h({t})}] {I}: {m}{n}"\n  logfile:\n    kind: file\n    path: "/ton-node/logs/output.log"\n    encoder:\n      pattern: "{d(%s.%f)} {l} [{h({t})}] {I}: {m}{n}"\n  rolling_logfile:\n    kind: rolling_file\n    encoder:\n      pattern: "{d(%Y-%m-%d %H:%M:%S.%f)} {l} [{h({t})}] {I}: {m}{n}"\n    path: /ton-node/logs/output.log\n    policy:\n      kind: compound\n      trigger:\n        kind: size\n        limit: 50 gb\n      roller:\n        kind: fixed_window\n        pattern: \'/ton-node/logs/output_{}.log\'\n        base: 1\n        count: 1\n  tvm_logfile:\n    kind: file\n    path: "target/log/tvm.log"\n    encoder:\n      pattern: "{m}{n}"\nroot:\n  level: info\n  appenders:\n    - rolling_logfile\nloggers:\n  ## node messages\n  ton_node:\n    level: trace\n  boot:\n    level: trace\n  sync:\n    level: trace\n  ## adnl messages\n  adnl:\n    level: info\n  overlay:\n    level: info\n  rldp:\n    level: info\n  dht:\n    level: info\n  ## block messages\n  ton_block:\n    level: debug\n  ## block messages\n  executor:\n    level: debug\n  ## tvm messages\n  tvm:\n    level: info\n  librdkafka:\n    level: info\n  validator:\n    level: debug\n  catchain:\n    level: debug\n  validator_session:\n    level: debug\n')),(0,r.kt)("p",null,"The currently configured targets are the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ton_node"),": node-related messages, except initial boot and sync, block exchange with other nodes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boot"),": initial boot messages, creation of trusted key block chain, loading blockchain state"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sync"),": node synchronization  - loading a certain number of most recent blocks"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"adnl"),": messages of the ADNL protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"overlay"),": messages of the overlay protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rldp"),": messages of the RLDP protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dht"),": messages of the DHT protocol"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ton_block"),": messages of the block structures library, logs are turned on in debug"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"executor"),": messages of the smart contract execution library, logs are turned on in debug "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tvm"),": ton virtual machine messages, logs are turned on in debug"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"librdkafka"),": kafka client library messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"validator"),": top level consensus protocol messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"catchain"),": low level consensus protocol messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"validator_session"),": mid level consensus protocol messages"),(0,r.kt)("h2",{id:"migrating-from-c-node"},"Migrating from C++ node"),(0,r.kt)("p",null,"To migrate your validator from legacy C++ node to Rust node, complete the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set up a new host for the Rust node, according to steps ",(0,r.kt)("a",{parentName:"li",href:"##1-system-requirements"},"1"),"-",(0,r.kt)("a",{parentName:"li",href:"##3-deploy-rust-validator-node"},"3")," of this document."),(0,r.kt)("li",{parentName:"ol"},"Wait for node to sync. Check sync according to step ",(0,r.kt)("a",{parentName:"li",href:"##4-check-node-synchronization"},"4")," of this document."),(0,r.kt)("li",{parentName:"ol"},"Stop the C++ node sending election requests (by default - disable ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/net.ton.dev##32-run-validator-script"},"scheduling of the validator script"),"). ",(0,r.kt)("strong",{parentName:"li"},"Do not shut down the C++ validator itself"),", let it finish the current round."),(0,r.kt)("li",{parentName:"ol"},"Configure validator wallet and corresponding keys, optionally - DePool (copy them from C++ node files to Rust Node files). By default:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Copy validator wallet address from ",(0,r.kt)("inlineCode",{parentName:"li"},"~/ton-keys/$(hostname -s).addr")," file on the C++ node to ",(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/${VALIDATOR_NAME}.addr")," on the Rust Node."),(0,r.kt)("li",{parentName:"ol"},"Copy validator wallet keys from ",(0,r.kt)("inlineCode",{parentName:"li"},"/ton-keys/msig.keys.json")," on the C++ node to ",(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/keys/msig.keys.json")," on the Rust Node."),(0,r.kt)("li",{parentName:"ol"},"If you have a DePool set up, copy DePool address from ",(0,r.kt)("inlineCode",{parentName:"li"},"~/ton-keys/depool.addr")," on the C++ node to ",(0,r.kt)("inlineCode",{parentName:"li"},"/ton-node/configs/depool.addr")," on the Rust Node.\nOnce this is done, the Rust node validator script will start automatically with the next round."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DO NOT")," shut down the C++ host. Wait for the C++ node to complete the current round until the validator set is changed."),(0,r.kt)("li",{parentName:"ol"},"Check ",(0,r.kt)("inlineCode",{parentName:"li"},"logs/validator.log")," on the Rust node, and make sure the first election request was successfully sent. There should be no errors in the log."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Only once the validator set changes"),", the C++ node is no longer a validator and the Rust node starts validating (",(0,r.kt)("inlineCode",{parentName:"li"},"validation_stats")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"collation_stats")," in the console output should not be empty), shut down the C++ node.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Here are some solutions to frequently encountered problems."),(0,r.kt)("h4",{id:"1-couldnt-connect-to-docker-daemon-at-httpdockerlocalhost"},"1. Couldn\u2019t connect to Docker daemon at http+docker://localhost"),(0,r.kt)("p",null,"This error occurs in two cases. Either the docker daemon isn't running, or current user doesn't have rights to access docker."),(0,r.kt)("p",null,"You can fix the rights issue either by running relevant commands as the superuser or adding the user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," group: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -a -G docker $USER\n")),(0,r.kt)("p",null,"Make sure to restart the system or log out and back in, for the new group settings to take effect."),(0,r.kt)("h4",{id:"2-thread-main-panicked-error-when-checking-node-synchronization"},"2. thread 'main' panicked error when checking node synchronization"),(0,r.kt)("p",null,"The following error may occur for a short time immediately after node deployment when attempting to ",(0,r.kt)("a",{parentName:"p",href:"##4-check-node-synchronization"},"check synchronization"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"thread 'main' panicked at 'Can't create client: Os { code: 111, kind: ConnectionRefused, message: \"Connection refused\" }', bin/console.rs:454:59\n")),(0,r.kt)("p",null,"Currently this is expected behavior, unless it persists ",(0,r.kt)("strong",{parentName:"p"},"for more than a few minutes"),". If it does persist, check network status at ",(0,r.kt)("a",{parentName:"p",href:"https://net.ton.live/"},"https://net.ton.live/"),", and, if the network is up and running, review ",(0,r.kt)("a",{parentName:"p",href:"##during-deployment"},"deployment logs")," for errors."),(0,r.kt)("h4",{id:"3-error-executing-command-when-checking-node-synchronization"},"3. Error executing command when checking node synchronization"),(0,r.kt)("p",null,"The following error may occur for up to an hour after node deployment when attempting to ",(0,r.kt)("a",{parentName:"p",href:"##4-check-node-synchronization"},"check synchronization"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error executing command: Error receiving answer: early eof bin/console.rs:296\n")),(0,r.kt)("p",null,"Currently this is expected behavior, unless it persists ",(0,r.kt)("strong",{parentName:"p"},"for more than one hour"),". If it does persist, check network status at ",(0,r.kt)("a",{parentName:"p",href:"https://net.ton.live/"},"https://net.ton.live/"),", and, if the network is up and running, review ",(0,r.kt)("a",{parentName:"p",href:"##during-deployment"},"deployment logs")," for errors."),(0,r.kt)("h4",{id:"4-cannot-stoprestartremove-node-container"},"4. Cannot stop/restart/remove node container"),(0,r.kt)("p",null,"Make sure you are running all docker-compose commands from the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ton.dev/docker-compose/ton-node")," folder."),(0,r.kt)("h4",{id:"5-depool-state-not-updating"},"5. DePool state not updating"),(0,r.kt)("p",null,"It's recommended to send at least two ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/depool##7-configure-depool-state-update-method"},"ticktocks")," while the elections are open.\nFor rust node you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/net.ton.dev/blob/master/docker-compose/ton-node/scripts/send_depool_tick_tock.sh"},"provided")," ticktock script, which sends 5 ticktocks after the elections open."))}h.isMDXComponent=!0}}]);