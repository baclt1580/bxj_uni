!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=964)}({0:function(e,t,o){"use strict";function r(e,t,o,r,i,n,a,l,u,d){var s,c="function"==typeof e?e.options:e;if(u){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(c.components,p)&&(c.components[p]=u[p])}if(d&&((d.beforeCreate||(d.beforeCreate=[])).unshift((function(){this[d.__module]=this})),(c.mixins||(c.mixins=[])).push(d)),t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var g=c.render;c.render=function(e,t){return s.call(t),g(e,t)}}else{var b=c.beforeCreate;c.beforeCreate=b?[].concat(b,s):[s]}return{exports:e,options:c}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden"},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden"},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden"},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden"},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden"},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},17:function(e,t,o){"use strict";o.r(t);var r=o(18),i=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},18:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=o(83))&&r.__esModule?r:{default:r};var n=weex.requireModule("animation"),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var e=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show:function(e){var t=this;e&&!this.loading&&setTimeout((function(){t.startAnimate()}),30)}},mounted:function(){this.init()},methods:{init:function(){var e=this;setTimeout((function(){e.show&&e.nvueAnimate(),e.show&&e.addEventListenerToWebview()}),20)},addEventListenerToWebview:function(){var e=this,t=getCurrentPages(),o=t[t.length-1].$getAppWebview();o.addEventListener("hide",(function(){e.webviewHide=!0})),o.addEventListener("show",(function(){e.webviewHide=!1}))},nvueAnimate:function(){"spinner"!==this.mode&&this.startAnimate()},startAnimate:function(){var e=this;this.loading=!0;var t=this.$refs.ani;t&&n.transition(t,{styles:{transform:"rotate(".concat(this.aniAngel,"deg)"),transformOrigin:"center center"},duration:this.duration,timingFunction:this.timingFunction},(function(){e.aniAngel+=360,e.show&&!e.webviewHide?e.startAnimate():e.loading=!1}))}}};t.default=a},19:function(e,t){e.exports={"u-loading-icon":{flexDirection:"row",alignItems:"center",justifyContent:"center",color:"#c8c9cc"},"u-loading-icon__text":{marginLeft:"4",color:"#606266",fontSize:"14",lineHeight:"20"},"u-loading-icon__spinner":{width:"30",height:"30",position:"relative"},"u-loading-icon__spinner--semicircle":{borderWidth:"2",borderColor:"rgba(0,0,0,0)",borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderStyle:"solid"},"u-loading-icon__spinner--circle":{borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderWidth:"2",borderTopColor:"#e5e5e5",borderRightColor:"#e5e5e5",borderBottomColor:"#e5e5e5",borderLeftColor:"#e5e5e5",borderStyle:"solid"},"u-loading-icon--vertical":{flexDirection:"column"},"@VERSION":2}},21:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("view",{staticClass:["u-loading-icon"],class:[e.vertical&&"u-loading-icon--vertical"],style:[e.$u.addStyle(e.customStyle)]},[e.webviewHide?e._e():o("view",{ref:"ani",staticClass:["u-loading-icon__spinner"],class:["u-loading-icon__spinner--"+e.mode],style:{color:e.color,width:e.$u.addUnit(e.size),height:e.$u.addUnit(e.size),borderTopColor:e.color,borderBottomColor:e.otherBorderColor,borderLeftColor:e.otherBorderColor,borderRightColor:e.otherBorderColor,"animation-duration":e.duration+"ms","animation-timing-function":"semicircle"===e.mode||"circle"===e.mode?e.timingFunction:""}},["spinner"===e.mode?o("block",[e.webviewHide?e._e():o("loading-indicator",{staticClass:["u-loading-indicator"],style:{color:e.color,width:e.$u.addUnit(e.size),height:e.$u.addUnit(e.size)},attrs:{animating:!0}})]):e._e()],1),e.text?o("u-text",{staticClass:["u-loading-icon__text"],style:{fontSize:e.$u.addUnit(e.textSize),color:e.textColor},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.text))]):e._e()]):e._e()},i=[]},295:function(e,t,o){"use strict";var r=o(695),i=o(403),n=o(0);var a=Object(n.a)(i.default,r.b,r.c,!1,null,null,"d2ae7dd4",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(849).default,this.options.style):Object.assign(this.options.style,o(849).default)}).call(a),t.default=a.exports},36:function(e,t,o){"use strict";o.r(t);var r=o(19),i=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},403:function(e,t,o){"use strict";var r=o(404),i=o.n(r);t.default=i.a},404:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{}}}},405:function(e,t){e.exports={"u-page__loading-item":{marginTop:"5"},"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},67:function(e,t,o){"use strict";o.r(t);var r=o(21),i=o(17);for(var n in i)"default"!==n&&function(e){o.d(t,e,(function(){return i[e]}))}(n);var a=o(0);var l=Object(a.a)(i.default,r.b,r.c,!1,null,"770e8abd","059849e8",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(36).default,this.options.style):Object.assign(this.options.style,o(36).default)}).call(l),t.default=l.exports},695:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r}));var r={uLoadingIcon:o(67).default},i=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["u-page"]},[t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u5217")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon")],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u534a\u5706loading")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon",{attrs:{mode:"semicircle"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u5706\u5f62loading")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon",{attrs:{mode:"circle"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u52a8\u753b")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon",{attrs:{mode:"circle",timingFunction:"linear"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon",{attrs:{color:"#19be6b"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u6587\u5b57")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__loading-item"]},[t("u-loading-icon",{attrs:{vertical:!0,text:"\u52a0\u8f7d\u4e2d"}})],1)])])])])},n=[]},8:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(9).default,Vue.prototype.__$appStyle__)},83:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};t.default=r},849:function(e,t,o){"use strict";o.r(t);var r=o(405),i=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},9:function(e,t,o){"use strict";o.r(t);var r=o(1),i=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=i.a},964:function(e,t,o){"use strict";o.r(t);o(8);var r=o(295);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),r.default.mpType="page",r.default.route="pages/componentsA/loading-icon/loading-icon",r.default.el="#root",new Vue(r.default)}});