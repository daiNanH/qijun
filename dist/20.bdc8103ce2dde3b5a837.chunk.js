webpackJsonp([20],{245:function(e,t,s){s(774);var n=s(1)(s(465),s(832),null,null);n.options.__file="C:\\Users\\kk\\Desktop\\iView-admin\\self_control\\src\\views\\message\\message.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},465:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"message_index",data:function(){var e=this,t=function(t,s){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.currentMesList.splice(s.index,1)[0]),e.$store.commit("setMessageCount",e.unreadMesList.length)}}},"标为已读")},s=function(t,s){return t("Button",{props:{size:"small",type:"error"},on:{click:function(){e.recyclebinList.unshift(e.hasreadMesList.splice(s.index,1)[0])}}},"删除")},n=function(t,s){return t("Button",{props:{size:"small"},on:{click:function(){e.hasreadMesList.unshift(e.recyclebinList.splice(s.index,1)[0])}}},"还原")};return{currentMesList:[],unreadMesList:[],hasreadMesList:[],recyclebinList:[],currentMessageType:"unread",showMesTitleList:!0,unreadCount:0,hasreadCount:0,recyclebinCount:0,noDataText:"暂无未读消息",mes:{title:"",time:"",content:""},mesTitleColumns:[{title:" ",key:"title",align:"left",ellipsis:!0,render:function(t,s){return t("a",{on:{click:function(){e.showMesTitleList=!1,e.mes.title=s.row.title,e.mes.time=e.formatDate(s.row.time),e.getContent(s.index)}}},s.row.title)}},{title:" ",key:"time",align:"center",width:180,render:function(t,s){return t("span",[t("Icon",{props:{type:"android-time",size:12},style:{margin:"0 5px"}}),t("span",{props:{type:"android-time",size:12}},e.formatDate(s.row.time))])}},{title:" ",key:"asread",align:"center",width:100,render:function(i,a){return"unread"===e.currentMessageType?i("div",[t(i,a)]):"hasread"===e.currentMessageType?i("div",[s(i,a)]):i("div",[n(i,a)])}}]}},methods:{formatDate:function(e){var t=new Date(e);return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+"  "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},backMesTitleList:function(){this.showMesTitleList=!0},setCurrentMesType:function(e){this.currentMessageType!==e&&(this.showMesTitleList=!0),this.currentMessageType=e,"unread"===e?(this.noDataText="暂无未读消息",this.currentMesList=this.unreadMesList):"hasread"===e?(this.noDataText="暂无已读消息",this.currentMesList=this.hasreadMesList):(this.noDataText="回收站无消息",this.currentMesList=this.recyclebinList)},getContent:function(e){var t="";switch(this.currentMessageType+e){case"unread0":t="这是您点击的《欢迎登录iView-admin后台管理系统，来了解他的用途吧》的相关内容。";break;case"unread1":t="这是您点击的《使用iView-admin和iView-ui组件库快速搭建你的后台系统吧》的相关内容。";break;case"unread2":t="这是您点击的《喜欢iView-admin的话，欢迎到github主页给个star吧》的相关内容。";break;case"hasread0":t="这是您点击的《这是一条您已经读过的消息》的相关内容。";break;default:t="这是您点击的《这是一条被删除的消息》的相关内容。"}this.mes.content=t}},mounted:function(){this.currentMesList=this.unreadMesList=[{title:"欢迎登录iView-admin后台管理系统，来了解他的用途吧",time:1507390106e3},{title:"使用iView-admin和iView-ui组件库快速搭建你的后台系统吧",time:1507390106e3},{title:"喜欢iView-admin的话，欢迎到github主页给个star吧",time:1507390106e3}],this.hasreadMesList=[{title:"这是一条您已经读过的消息",time:1507330106e3}],this.recyclebinList=[{title:"这是一条被删除的消息",time:1506390106e3}],this.unreadCount=this.unreadMesList.length,this.hasreadCount=this.hasreadMesList.length,this.recyclebinCount=this.recyclebinList.length},watch:{unreadMesList:function(e){this.unreadCount=e.length},hasreadMesList:function(e){this.hasreadCount=e.length},recyclebinList:function(e){this.recyclebinCount=e.length}}}},774:function(e,t){},832:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-main-con"},[s("div",{staticClass:"message-mainlist-con"},[s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("unread")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"unread"===e.currentMessageType,expression:"currentMessageType === 'unread'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("未读消息")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.unreadCount}})],1)],1),e._v(" "),s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("hasread")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"hasread"===e.currentMessageType,expression:"currentMessageType === 'hasread'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("已读消息")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.hasreadCount}})],1)],1),e._v(" "),s("div",[s("Button",{attrs:{size:"large",long:"",type:"text"},on:{click:function(t){e.setCurrentMesType("recyclebin")}}},[s("transition",{attrs:{name:"mes-current-type-btn"}},[s("Icon",{directives:[{name:"show",rawName:"v-show",value:"recyclebin"===e.currentMessageType,expression:"currentMessageType === 'recyclebin'"}],attrs:{type:"checkmark"}})],1),s("span",{staticClass:"mes-type-btn-text"},[e._v("回收站")]),s("Badge",{staticClass:"message-count-badge-outer",attrs:{"class-name":"message-count-badge",count:e.recyclebinCount}})],1)],1)]),e._v(" "),s("div",{staticClass:"message-content-con"},[s("transition",{attrs:{name:"view-message"}},[e.showMesTitleList?s("div",{staticClass:"message-title-list-con"},[s("Table",{ref:"messageList",attrs:{columns:e.mesTitleColumns,data:e.currentMesList,"no-data-text":e.noDataText}})],1):e._e()]),e._v(" "),s("transition",{attrs:{name:"back-message-list"}},[e.showMesTitleList?e._e():s("div",{staticClass:"message-view-content-con"},[s("div",{staticClass:"message-content-top-bar"},[s("span",{staticClass:"mes-back-btn-con"},[s("Button",{attrs:{type:"text"},on:{click:e.backMesTitleList}},[s("Icon",{attrs:{type:"chevron-left"}}),e._v("  返回")],1)],1),e._v(" "),s("h3",{staticClass:"mes-title"},[e._v(e._s(e.mes.title))])]),e._v(" "),s("p",{staticClass:"mes-time-con"},[s("Icon",{attrs:{type:"android-time"}}),e._v("  "+e._s(e.mes.time))],1),e._v(" "),s("div",{staticClass:"message-content-body"},[s("p",{staticClass:"message-content"},[e._v(e._s(e.mes.content))])])])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});