(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"09d0":function(e,t,r){},1554:function(e,t,r){e.exports=r.p+"img/flash.61eb868c.png"},1565:function(e,t,r){},"1f44":function(e,t,r){},"2c65":function(e,t,r){},"2ee6":function(e,t,r){"use strict";var n=r("d247"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a=(r("5c0b"),r("2877")),i={},c=Object(a["a"])(i,s,o,!1,null,null,null),l=c.exports,u=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrappage"}},[r("div",{staticClass:"container",style:{marginTop:e.containerMarginTop}},[r("top-block"),r("center-block"),r("bottom-block")],1)])},f=[],d=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-block-wrapper"},[n("div",{staticClass:"top-block"},[n("a",{staticClass:"logo",attrs:{href:"/"}},[e._v("# "+e._s(e.person.fullName.toLowerCase()))]),n("transition",{attrs:{name:"button-block",appear:""}},[e.isOpenedCenterBlock?e._e():n("div",[n("div",{staticClass:"bg-button"}),n("div",{staticClass:"bg-e-button"}),n("div",{staticClass:"open",on:{click:function(t){return e.onOpen()}}},[n("img",{attrs:{src:r("1554")}})])])])],1),n("transition",{attrs:{name:"energy",appear:""}},[e.isOpenedCenterBlock?e._e():n("div",{staticClass:"energy"})])],1)},b=[],v=r("2f62");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={name:"TopBlock",computed:h({},Object(v["c"])({person:function(e){return e.person},isOpenedCenterBlock:function(e){return e.isOpenedCenterBlock}})),methods:h({},Object(v["b"])(["setOpenCenterBlock","setEndScan","setShowMain"]),{onOpen:function(){var e=this;this.setOpenCenterBlock(),setTimeout((function(){e.setEndScan()}),4e3),setTimeout((function(){e.setShowMain()}),7e3)}})},y=O,j=(r("8c1f"),Object(a["a"])(y,m,b,!1,null,null,null)),S=j.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isOpenedCenterBlock?r("div",{staticClass:"center-block-wrapper"},[r("scanner-block"),r("main-block")],1):e._e()},P=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isShowMain?e._e():r("div",{staticClass:"scanner clearfix"},[r("div",{staticClass:"scanner-block"},[r("div",{staticClass:"scanner-box left"},[r("transition",{attrs:{name:"search-line",appear:""}},[r("div",{staticClass:"scanner-line"})])],1),r("ul",{staticClass:"data left"},[e.isEndScan?e._e():r("li",{staticClass:"search"},[r("vue-typer",{attrs:{text:["# wait... identity..."],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"blink"}})],1),r("li",{staticClass:"search-d",class:{show:e.isEndScan}},[e._v("# / > "+e._s(e.person.profession.toLowerCase()))]),r("li",{staticClass:"search-d",class:{show:e.isEndScan}},[e._v("# / > "+e._s(e.person.fullName.toLowerCase()))]),r("li",{staticClass:"search-d",class:{show:e.isEndScan}},[e._v("# / > access received...")])])])])},k=[],_=r("e956");function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={name:"ScannerBlock",components:{VueTyper:_["VueTyper"]},computed:E({},Object(v["c"])({person:function(e){return e.person},isEndScan:function(e){return e.isEndScan},isShowMain:function(e){return e.isShowMain}}))},D=M,B=(r("8b1e"),Object(a["a"])(D,C,k,!1,null,null,null)),J=B.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMain,expression:"isShowMain"}],staticClass:"main"},[r("div",{ref:"load",staticClass:"load"}),r("div",{ref:"shut-left",staticClass:"shut-left"}),r("div",{ref:"shut-right",staticClass:"shut-right"}),r("div",{ref:"page",staticClass:"page"},[r("div",{staticClass:"box-left left"},[r("div",{staticClass:"info"},[r("div",{staticClass:"photo"}),r("ul",{staticClass:"left who"},[r("li",[e._v("# "+e._s(e.person.fullNameRu))]),r("li",[e._v("# "+e._s(e.person.professionRu))])])]),r("ul",{staticClass:"right",attrs:{id:"menu"}},[r("li",[r("router-link",{attrs:{to:"/about"}},[e._v(e._s(e.person.about.title))])],1),r("li",[r("router-link",{attrs:{to:"/resume"}},[e._v(e._s(e.person.resume.title))])],1),r("li",[r("router-link",{attrs:{to:"/portfolio"}},[e._v(e._s(e.person.portfolio.title))])],1),r("li",[r("router-link",{attrs:{to:"/contacts"}},[e._v(e._s(e.person.contacts.title))])],1)])]),r("div",{staticClass:"cont left"},[r("transition",{attrs:{name:"slide",mode:"out-in"}},[r("router-view")],1)],1)])])},N=[],T=(r("7f7f"),r("589d")),V=r.n(T);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={name:"MainBlock",computed:A({},Object(v["c"])({person:function(e){return e.person},isShowMain:function(e){return e.isShowMain},currentPage:function(e){return e.currentPage}})),methods:A({},Object(v["b"])(["setCurrentPage"])),watch:{isShowMain:function(e){var t=this;e&&(V()(this.$refs["load"],"fadeIn",{duration:2500}),V()(this.$refs["load"],"fadeOut",{duration:1e3,delay:500}),V()(this.$refs["shut-left"],{width:"0px"},{duration:3e3,delay:500}),V()(this.$refs["shut-right"],{width:"0px"},{duration:3e3,delay:500}),V()(this.$refs["page"],"fadeIn",{duration:500,delay:500}),setTimeout((function(){t.setCurrentPage(t.$route.name)}),1e3))}}},H=I,F=(r("a8bc"),Object(a["a"])(H,L,N,!1,null,null,null)),R=F.exports;function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={name:"CenterBlock",components:{ScannerBlock:J,MainBlock:R},computed:U({},Object(v["c"])({isOpenedCenterBlock:function(e){return e.isOpenedCenterBlock}}))},W=X,q=(r("7e99"),Object(a["a"])(W,w,P,!1,null,null,null)),K=q.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bottom-block-wrapper"},[r("div",{staticClass:"bottom-block"},[r("div",{staticClass:"personal-vcard left"},[e._v("Personal vCard")]),r("div",{ref:"created",staticClass:"created right"},[e._v("Created on VueJS")])])])},G=[];function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee={name:"BottomBlock",computed:Z({},Object(v["c"])({isShowMain:function(e){return e.isShowMain}})),watch:{isShowMain:function(e){e&&V()(this.$refs["created"],"fadeIn",{duration:1500,delay:2e3})}}},te=ee,re=(r("b18c"),Object(a["a"])(te,Q,G,!1,null,null,null)),ne=re.exports;function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={name:"Resume",components:{TopBlock:S,CenterBlock:K,BottomBlock:ne},computed:oe({},Object(v["c"])({person:function(e){return e.person},isOpenedCenterBlock:function(e){return e.isOpenedCenterBlock},isShowMain:function(e){return e.isShowMain}}),{containerMarginTop:function(){var e=0;return e=this.isOpenedCenterBlock?this.isShowMain?"-355px":"-220px":"-100px",e}})},ie=ae,ce=(r("ed53"),Object(a["a"])(ie,p,f,!1,null,null,null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box left",attrs:{id:"about"}},[r("vue-custom-scrollbar",{ref:"scroll-area",staticClass:"box-content",attrs:{settings:e.scrollSettings}},[r("h3",[e._v("# "+e._s(e.person.about.title))]),r("p",{staticClass:"sub"}),e._l(e.person.about.paragraphs,(function(t,n){return r("div",{key:n},[r("p",{domProps:{innerHTML:e._s(t)}})])})),r("br"),r("h3",[e._v("# "+e._s(e.person.about.experience.title))]),r("p",{staticClass:"sub"}),e._l(e.person.about.experience.paragraphs,(function(t,n){return r("div",{key:"a"+n},[r("p",[e._v(e._s(t))])])})),r("br"),r("h3",[e._v("# "+e._s(e.person.about.new_projects.title))]),r("p",{staticClass:"sub"}),r("div",{staticClass:"gallery-block"},e._l(e.projects,(function(t,n){return r("div",{key:"p"+n,staticClass:"gallery",class:{last:(n+1)%2==0}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.imageUrl(t),title:t.description,width:"216",height:"105"}})]),r("div",{staticClass:"des"},[e._v(e._s(t.name))]),r("div",{staticClass:"block-zoom"},[r("div",{staticClass:"zoom",on:{click:function(t){return e.showModal(n)}}}),r("a",{staticClass:"link",attrs:{href:t.link,title:t.description,target:"_blank"}})])])})),0)],2),r("modal",{attrs:{name:"project-detail",width:800,height:600}},[null!==e.selectedProject?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.imageUrl(e.selectedProject)}})]),r("div",{staticClass:"desc"},[e._l(e.selectedProject.description.split(", "),(function(t,n){return r("span",{key:"m"+n,staticClass:"tech"},[e._v("\r\n                    "+e._s(t)+"\r\n                ")])})),r("br"),e._v("\r\n                Link: "),r("a",{attrs:{href:e.selectedProject.link,_target:"blank"}},[e._v(e._s(e.selectedProject.link))])],2)]):e._e()])],1)},pe=[],fe=r("4b70"),de=r.n(fe);function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve={name:"PageAbout",components:{vueCustomScrollbar:de.a},data:function(){return{imagePath:"/img/projects/",scrollSettings:{tagname:"div",wheelSpeed:.4,minScrollbarLength:103,maxScrollbarLength:103,suppressScrollX:!0,swipeEasing:!1},selectedProject:null}},computed:be({},Object(v["c"])({person:function(e){return e.person}}),{projects:function(){for(var e=[],t=0;t<this.person.portfolio.projects.length;t++)this.person.portfolio.projects[t].isNew&&e.push(this.person.portfolio.projects[t]);return e}}),methods:{imageUrl:function(e){return null===e?"":this.imagePath+e.imageFilename},showModal:function(e){this.selectedProject=this.projects[e],this.$modal.show("project-detail")}}},ge=ve,he=Object(a["a"])(ge,ue,pe,!1,null,null,null),Oe=he.exports,ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box left",attrs:{id:"resume"}},[r("vue-custom-scrollbar",{ref:"scroll-area",staticClass:"box-content",attrs:{settings:e.scrollSettings}},[r("h3",[e._v("# "+e._s(e.person.resume.title))]),r("p",{staticClass:"sub"}),e._l(e.person.resume.paragraphs,(function(t,n){return r("div",{key:n},[r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:"br"!=t,expression:"item != 'br'"}]},[e._v(e._s(t))])])])})),r("div",{staticClass:"skills"},e._l(e.person.resume.skills,(function(t,n){return r("div",{key:"s"+n,staticClass:"bar"},[r("div",{staticClass:"block-pr",style:{backgroundSize:e.min(e.percent,t.level)+"% 100%"}},[r("div",{staticClass:"text"},[r("span",[e._v(e._s(e.min(e.percent,t.level)))]),e._v("%")])]),r("div",{staticClass:"last"},[e._v(e._s(t.name))])])})),0),r("br"),r("h3",[e._v("# "+e._s(e.person.resume.education.title))]),r("p",{staticClass:"sub"}),e._l(e.person.resume.education.paragraphs,(function(t,n){return r("div",{key:"e"+n},[r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:"br"!=t,expression:"item != 'br'"}]},[e._v(e._s(t))])])])})),r("br")],2)],1)},je=[];function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe={name:"PageResume",components:{vueCustomScrollbar:de.a},data:function(){return{scrollSettings:{tagname:"div",wheelSpeed:.4,minScrollbarLength:103,maxScrollbarLength:103,suppressScrollX:!0,swipeEasing:!1},progressInterval:null,percent:0}},computed:we({},Object(v["c"])({person:function(e){return e.person},currentPage:function(e){return e.currentPage}})),methods:{min:function(e,t){return e<t?e:t},runProgress:function(){var e=this;null!==this.progressInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.progressInterval=setInterval((function(){if(e.percent>100)return clearInterval(e.progressInterval),void(e.progressInterval=null);e.percent++}),20)}},mounted:function(){this.runProgress()},beforeDestroy:function(){null!==this.progressInterval&&clearInterval(this.progressInterval)},watch:{currentPage:function(e){"PageResume"==e&&(this.percent=0,this.runProgress())}}},Ce=Pe,ke=(r("2ee6"),Object(a["a"])(Ce,ye,je,!1,null,null,null)),_e=ke.exports,xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box left",attrs:{id:"portfolio"}},[r("vue-custom-scrollbar",{ref:"scroll-area",staticClass:"box-content",attrs:{settings:e.scrollSettings}},[r("h3",[e._v("# "+e._s(e.person.portfolio.title))]),r("p",{staticClass:"sub"}),r("div",{staticClass:"gallery-block"},e._l(e.projects,(function(t,n){return r("div",{key:"p"+n,staticClass:"gallery",class:{last:(n+1)%2==0}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.imageUrl(t),title:t.description,width:"216",height:"105"}})]),r("div",{staticClass:"des"},[e._v(e._s(t.name))]),r("div",{staticClass:"block-zoom"},[r("div",{staticClass:"zoom",on:{click:function(t){return e.showModal(n)}}}),r("a",{staticClass:"link",attrs:{href:t.link,title:t.description,target:"_blank"}})])])})),0)]),r("modal",{attrs:{name:"project-detail",width:800,height:600}},[null!==e.selectedProject?r("div",{staticClass:"modal-content"},[r("img",{attrs:{src:e.imageUrl(e.selectedProject)}}),r("div",{staticClass:"desc"},[e._l(e.selectedProject.description.split(", "),(function(t,n){return r("span",{key:"m"+n,staticClass:"tech"},[e._v("\r\n                    "+e._s(t)+"\r\n                ")])})),r("br"),e._v("\r\n                Web: "),r("a",{attrs:{href:e.selectedProject.link,_target:"blank"}},[e._v(e._s(e.selectedProject.link))])],2)]):e._e()])],1)},Ee=[];function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Be={name:"PageAbout",components:{vueCustomScrollbar:de.a},data:function(){return{imagePath:"/img/projects/",scrollSettings:{tagname:"div",wheelSpeed:.4,minScrollbarLength:103,maxScrollbarLength:103,suppressScrollX:!0,swipeEasing:!1},selectedProject:null}},computed:De({},Object(v["c"])({person:function(e){return e.person}}),{projects:function(){return this.person.portfolio.projects}}),methods:{imageUrl:function(e){return null===e?"":this.imagePath+e.imageFilename},showModal:function(e){this.selectedProject=this.projects[e],this.$modal.show("project-detail")}}},Je=Be,Le=Object(a["a"])(Je,xe,Ee,!1,null,null,null),Ne=Le.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box left",attrs:{id:"contacts"}},[r("vue-custom-scrollbar",{ref:"scroll-area",staticClass:"box-content",attrs:{settings:e.scrollSettings}},[r("h3",[e._v("# "+e._s(e.person.contacts.title))]),r("p",{staticClass:"sub"}),r("div",{staticClass:"content-block left"},[r("div",{staticClass:"top-block"},e._l(e.person.contacts.paragraphs,(function(t,n){return r("div",{key:n},[r("p",{domProps:{innerHTML:e._s(t)}})])})),0),r("div",{staticClass:"bottom-block"},e._l(e.person.contacts.info,(function(t,n){return r("div",{key:"c"+n},[r("p",[r("span",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" \r\n                        "),r("span",{staticClass:"value",domProps:{innerHTML:e._s(t.value)}})])])})),0)]),r("div",{staticClass:"content-block right"},[r("div",{staticClass:"contactusb"},[r("form",{attrs:{action:"#",id:"contactus",method:"post"}},[r("div",[r("label",{attrs:{for:"name"}},[e._v("Имя")]),r("input",{staticClass:"textfield",attrs:{type:"text",name:"name",id:"name",value:"",required:""}}),r("label",{attrs:{for:"email"}},[e._v("E-mail")]),r("input",{staticClass:"textfield",attrs:{type:"email",name:"email",id:"email",value:"",required:""}}),r("label",{attrs:{for:"message"}},[e._v("Сообщение")]),r("textarea",{staticClass:"textarea",attrs:{name:"message",id:"message",cols:"8",rows:"12",required:""}}),r("button",{attrs:{id:"send",type:"text"},on:{click:function(t){return e.onSubmit()}}},[e._v("отправить")])])])])])])],1)},Ve=[];function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ie={name:"PageContacts",components:{vueCustomScrollbar:de.a},data:function(){return{scrollSettings:{tagname:"div",wheelSpeed:.4,minScrollbarLength:103,maxScrollbarLength:103,suppressScrollX:!0,swipeEasing:!1}}},computed:Ae({},Object(v["c"])({person:function(e){return e.person}})),methods:{onSubmit:function(){alert("Отправка сообщения временно недоступна\nВоспользуйтесь иными почтовыми сервисами или месенджерами.")}}},He=Ie,Fe=(r("6d42"),Object(a["a"])(He,Te,Ve,!1,null,null,null)),Re=Fe.exports;n["a"].use(u["a"]);var ze=new u["a"]({mode:"history",base:"/",routes:[{path:"/",component:le,children:[{path:"about",name:"AboutPage",component:Oe},{path:"resume",name:"ResumePage",component:_e},{path:"portfolio",name:"PortfolioPage",component:Ne},{path:"contacts",name:"ContactsPage",component:Re},{path:"*",redirect:"/about"}]},{path:"*",redirect:"/resume"}]}),Ue={fullName:"Andrey Kozik",fullNameRu:"Андрей Козик",profession:"Web-developer",professionRu:"Веб-разработчик",about:{title:"Инфо",paragraphs:["В данный момент ищу удалённую работу в сфере Веб-разработки на позицию Junior/Middle VueJS.<br />Интересующее направление - разработка SPA/PWA на VueJS.","Имеющиеся сопутствующе навыки:<br />Vue, Vuex, Vue-router, Vue-socket.io, CSS3 (animation/transition), SCSS, Bootstrap, Webpack, ES6, Velocity, NodeJS, express, Mongoose.","Так же рассматриваю вакансии Angular 4+ на позицию Junior (мало практического опыта)<br/>","Есть опыт практического применения/использования:<br />PHP, Symphony, Drupal, MODx, Python/Django, C++, Java.<br />БД: MySQL, PostgreSQL, MongoDB.","Так же есть опыт разработки смарт-контрактов Ethereum на Solidity."],experience:{title:"Опыт",paragraphs:["Разработкой ПО на разных технологиях занимаюсь более 10лет","2008-2013 / BTC / Инженер-программист","2013-2014 / CINIMEX / Ведущий разработчик ПО","2014-2019 / Веб-разработка, фриланс, соло-проекты"]},new_projects:{title:"Новые проекты"}},resume:{title:"Навыки",paragraphs:[],skills:[{name:"Javascript/ES6",level:80},{name:"NodeJS",level:75},{name:"ExpressJS",level:70},{name:"VueJS/Vuex/Vue-Router",level:70},{name:"AngularJS",level:80},{name:"Angular 4+",level:20},{name:"AJAX/JSON",level:80},{name:"HTML/CSS3",level:85},{name:"SCSS",level:70},{name:"Bootstrap",level:60},{name:"Python/Django",level:40},{name:"PHP",level:30},{name:"MODx",level:35},{name:"Solidity",level:70}],education:{title:"Образование",paragraphs:["1996-2001 / БГУ / Инженер-физэлектроник"]}},portfolio:{title:"Портфолио",projects:[{name:"WorldFlashmob",description:"HTML5, CSS3/SCSS, JS, Vue, Vuex, Vue-router",imageFilename:"worldflashmob-vue.png",link:"https://flashmobworld.com/",isNew:!0},{name:"Dice",description:"HTML5, CSS3/SCSS, JS, Vue, Nuxt.js",imageFilename:"dice-vue.png",link:"https://dice2.herokuapp.com/",isNew:!0},{name:"SmartLotto",description:"HTML5, CSS3/SCSS, JS, Vue, Vuex, Vue-router, Vue-socket.io, Mongoose, NodeJS, Express, web3js, Solidity (ethereum smart-contract)",imageFilename:"smartlotto-vue.png",link:"https://smart-lotto.org/",isNew:!0},{name:"Snake",description:"HTML5, CSS3, JS, VueJS",imageFilename:"snake-vue.png",link:"/snake",isNew:!0},{name:"Maxigames",description:"HTML5, CSS3, JS, AngularJS, Express, Mongoose, NodeJS, Socket.io",imageFilename:"maxigames-angularjs.png",link:"#",isNew:!0},{name:"Maxidrop",description:"HTML5, CSS3, JS, jQuery, Python, Django",imageFilename:"maxidrop-django.png",link:"#",isNew:!0},{name:"KK Service",description:"HTML5, CSS3, JS, AngularJS, Python, Django",imageFilename:"kks-angularjs.png",link:"#",isNew:!1},{name:"Multirezonans",description:"HTML5, CSS3, JS, Bootstrap",imageFilename:"multirezonans.png",link:"#",isNew:!1},{name:"Autohub",description:"HTML5, CSS3, JS, Bootstrap",imageFilename:"autohub-html.png",link:"#",isNew:!1},{name:"Ab",description:"HTML5, CSS3, JS, Bootstrap",imageFilename:"ab-html.png",link:"#",isNew:!1}]},contacts:{title:"Контакты",paragraphs:["Если вас заинтересовала моя кандидатура просьба связаться со мной по E-mail."],info:[{name:"ФИО:",value:"Козик Андрей Михайлович"},{name:"Адрес:",value:"Республика Беларусь, г. Минск"},{name:"Телефон:",value:"нет"},{name:"Сайт:",value:'<a href="https://akresume.herokuapp.com" title="Резюме Козик А.М." target="_blank">https://akresume.herokuapp.com</a>'},{name:"Email:",value:'<a href="mailto:etextriton@gmail.com" title="Написать письмо">etextriton@gmail.com</a>'},{name:"Скачать",value:'<a href="/files/резюме_козика_а_м.doc" title="Скачать резюме" download>резюме</a>'}]}};n["a"].use(v["a"]);var Xe=new v["a"].Store({state:{person:Ue,isOpenedCenterBlock:!1,isEndScan:!1,isShowMain:!1,currentPage:null},mutations:{setOpenCenterBlock:function(e){e.isOpenedCenterBlock=!0},setEndScan:function(e){e.isEndScan=!0},setShowMain:function(e){e.isShowMain=!0},setCurrentPage:function(e,t){e.currentPage=t}}}),We=r("9483");Object(We["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var qe=r("1881"),Ke=r.n(qe);n["a"].config.productionTip=!1,n["a"].use(Ke.a),new n["a"]({router:ze,store:Xe,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),s=r.n(n);s.a},"646a":function(e,t,r){},"6d42":function(e,t,r){"use strict";var n=r("1f44"),s=r.n(n);s.a},"7e99":function(e,t,r){"use strict";var n=r("09d0"),s=r.n(n);s.a},"8b1e":function(e,t,r){"use strict";var n=r("1565"),s=r.n(n);s.a},"8c1f":function(e,t,r){"use strict";var n=r("af51"),s=r.n(n);s.a},a8bc:function(e,t,r){"use strict";var n=r("2c65"),s=r.n(n);s.a},af51:function(e,t,r){},b18c:function(e,t,r){"use strict";var n=r("bc01"),s=r.n(n);s.a},bc01:function(e,t,r){},d247:function(e,t,r){},e332:function(e,t,r){},ed53:function(e,t,r){"use strict";var n=r("646a"),s=r.n(n);s.a}});
//# sourceMappingURL=app.a26f9578.js.map