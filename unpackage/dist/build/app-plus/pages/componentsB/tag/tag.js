!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=999)}({0:function(t,e,i){"use strict";function o(t,e,i,o,n,r,a,l,c,u){var s,d="function"==typeof t?t.options:t;if(c){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in c)f.call(c,p)&&!f.call(d.components,p)&&(d.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(d.mixins||(d.mixins=[])).push(u)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=s):n&&(s=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var g=d.render;d.render=function(t,e){return s.call(e),g(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,s):[s]}return{exports:t,options:d}}i.d(e,"a",(function(){return o}))},1:function(t,e){t.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden"},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden"},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden"},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden"},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden"},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},14:function(t,e,i){"use strict";i.r(e);var o=i(15),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},15:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i(80)),n=r(i(81));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return l(l({},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default,o.default],watch:{show:{handler:function(t){t?this.nvueEnter():this.nvueLeave()},immediate:!0}}};e.default=u},16:function(t,e){t.exports={"@VERSION":2}},174:function(t,e,i){"use strict";i.r(e);var o=i(175),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},175:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=i(807))&&o.__esModule?o:{default:o};var r={name:"u-tag",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{}},computed:{style:function(){var t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor:function(){var t={};return this.color&&(t.color=this.color),t},imgStyle:function(){var t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize:function(){return"large"===this.size?15:"medium"===this.size?13:12},iconSize:function(){return"large"===this.size?21:"medium"===this.size?19:16},elIconColor:function(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler:function(){this.$emit("close",this.name)},clickHandler:function(){this.$emit("click",this.name)}}};e.default=r},176:function(t,e){t.exports={"u-tag-wrapper":{position:"relative"},"u-tag":{flexDirection:"row",alignItems:"center",borderStyle:"solid"},"u-tag--circle":{borderRadius:"100"},"u-tag--square":{borderRadius:"3"},"u-tag__icon":{marginRight:"4"},"u-tag__text--mini":{fontSize:"12",lineHeight:"12"},"u-tag__text--medium":{fontSize:"13",lineHeight:"13"},"u-tag__text--large":{fontSize:"15",lineHeight:"15"},"u-tag--mini":{height:"22",lineHeight:"22",paddingTop:0,paddingRight:"5",paddingBottom:0,paddingLeft:"5"},"u-tag--medium":{height:"26",lineHeight:"22",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10"},"u-tag--large":{height:"32",lineHeight:"32",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"u-tag--primary":{backgroundColor:"#3c9cff",borderWidth:"1",borderColor:"#3c9cff"},"u-tag--primary--plain":{borderWidth:"1",borderColor:"#3c9cff"},"u-tag--primary--plain--fill":{backgroundColor:"#ecf5ff"},"u-tag__text--primary":{color:"#FFFFFF"},"u-tag__text--primary--plain":{color:"#3c9cff"},"u-tag--error":{backgroundColor:"#f56c6c",borderWidth:"1",borderColor:"#f56c6c"},"u-tag--error--plain":{borderWidth:"1",borderColor:"#f56c6c"},"u-tag--error--plain--fill":{backgroundColor:"#fef0f0"},"u-tag__text--error":{color:"#FFFFFF"},"u-tag__text--error--plain":{color:"#f56c6c"},"u-tag--warning":{backgroundColor:"#f9ae3d",borderWidth:"1",borderColor:"#f9ae3d"},"u-tag--warning--plain":{borderWidth:"1",borderColor:"#f9ae3d"},"u-tag--warning--plain--fill":{backgroundColor:"#fdf6ec"},"u-tag__text--warning":{color:"#FFFFFF"},"u-tag__text--warning--plain":{color:"#f9ae3d"},"u-tag--success":{backgroundColor:"#5ac725",borderWidth:"1",borderColor:"#5ac725"},"u-tag--success--plain":{borderWidth:"1",borderColor:"#5ac725"},"u-tag--success--plain--fill":{backgroundColor:"#f5fff0"},"u-tag__text--success":{color:"#FFFFFF"},"u-tag__text--success--plain":{color:"#5ac725"},"u-tag--info":{backgroundColor:"#909399",borderWidth:"1",borderColor:"#909399"},"u-tag--info--plain":{borderWidth:"1",borderColor:"#909399"},"u-tag--info--plain--fill":{backgroundColor:"#f4f4f5"},"u-tag__text--info":{color:"#FFFFFF"},"u-tag__text--info--plain":{color:"#909399"},"u-tag__close":{position:"absolute",zIndex:999,top:"10",right:"10",borderRadius:"100",backgroundColor:"#C6C7CB",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"scale(0.6) translate(50%, -50%)"},"u-tag__close--mini":{width:"18",height:"18"},"u-tag__close--medium":{width:"22",height:"22"},"u-tag__close--large":{width:"25",height:"25"},"@VERSION":2}},2:function(t,e,i){"use strict";i.r(e);var o=i(3),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},20:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return this.inited?e("view",{ref:"u-transition",staticClass:["u-transition"],class:this.classes,style:[this.mergeStyle],on:{touchmove:this.noop,click:this.clickHandler}},[this._t("default")],2):this._e()},n=[]},220:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uTransition:i(55).default,uIcon:i(6).default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("u-transition",{attrs:{mode:"fade",show:t.show}},[i("view",{staticClass:["u-tag-wrapper"]},[i("view",{staticClass:["u-tag"],class:["u-tag--"+t.shape,!t.plain&&"u-tag--"+t.type,t.plain&&"u-tag--"+t.type+"--plain","u-tag--"+t.size,t.plain&&t.plainFill&&"u-tag--"+t.type+"--plain--fill"],style:[{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},t.style],on:{click:t.clickHandler}},[t._t("icon",[t.icon?i("view",{staticClass:["u-tag__icon"]},[t.$u.test.image(t.icon)?i("u-image",{style:[t.imgStyle],attrs:{src:t.icon}}):i("u-icon",{attrs:{color:t.elIconColor,name:t.icon,size:t.iconSize}})],1):t._e()]),i("u-text",{staticClass:["u-tag__text"],class:["u-tag__text--"+t.type,t.plain&&"u-tag__text--"+t.type+"--plain","u-tag__text--"+t.size],style:[t.textColor],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))])],2),t.closable?i("view",{staticClass:["u-tag__close"],class:["u-tag__close--"+t.size],style:{backgroundColor:t.closeColor},on:{click:t.closeHandler}},[i("u-icon",{attrs:{name:"close",size:t.closeSize,color:"#ffffff"}})],1):t._e()])])},r=[]},259:function(t,e,i){"use strict";i.r(e);var o=i(176),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},26:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={"uicon-level":"\ue693","uicon-column-line":"\ue68e","uicon-checkbox-mark":"\ue807","uicon-folder":"\ue7f5","uicon-movie":"\ue7f6","uicon-star-fill":"\ue669","uicon-star":"\ue65f","uicon-phone-fill":"\ue64f","uicon-phone":"\ue622","uicon-apple-fill":"\ue881","uicon-chrome-circle-fill":"\ue885","uicon-backspace":"\ue67b","uicon-attach":"\ue632","uicon-cut":"\ue948","uicon-empty-car":"\ue602","uicon-empty-coupon":"\ue682","uicon-empty-address":"\ue646","uicon-empty-favor":"\ue67c","uicon-empty-permission":"\ue686","uicon-empty-news":"\ue687","uicon-empty-search":"\ue664","uicon-github-circle-fill":"\ue887","uicon-rmb":"\ue608","uicon-person-delete-fill":"\ue66a","uicon-reload":"\ue788","uicon-order":"\ue68f","uicon-server-man":"\ue6bc","uicon-search":"\ue62a","uicon-fingerprint":"\ue955","uicon-more-dot-fill":"\ue630","uicon-scan":"\ue662","uicon-share-square":"\ue60b","uicon-map":"\ue61d","uicon-map-fill":"\ue64e","uicon-tags":"\ue629","uicon-tags-fill":"\ue651","uicon-bookmark-fill":"\ue63b","uicon-bookmark":"\ue60a","uicon-eye":"\ue613","uicon-eye-fill":"\ue641","uicon-mic":"\ue64a","uicon-mic-off":"\ue649","uicon-calendar":"\ue66e","uicon-calendar-fill":"\ue634","uicon-trash":"\ue623","uicon-trash-fill":"\ue658","uicon-play-left":"\ue66d","uicon-play-right":"\ue610","uicon-minus":"\ue618","uicon-plus":"\ue62d","uicon-info":"\ue653","uicon-info-circle":"\ue7d2","uicon-info-circle-fill":"\ue64b","uicon-question":"\ue715","uicon-error":"\ue6d3","uicon-close":"\ue685","uicon-checkmark":"\ue6a8","uicon-android-circle-fill":"\ue67e","uicon-android-fill":"\ue67d","uicon-ie":"\ue87b","uicon-IE-circle-fill":"\ue889","uicon-google":"\ue87a","uicon-google-circle-fill":"\ue88a","uicon-setting-fill":"\ue872","uicon-setting":"\ue61f","uicon-minus-square-fill":"\ue855","uicon-plus-square-fill":"\ue856","uicon-heart":"\ue7df","uicon-heart-fill":"\ue851","uicon-camera":"\ue7d7","uicon-camera-fill":"\ue870","uicon-more-circle":"\ue63e","uicon-more-circle-fill":"\ue645","uicon-chat":"\ue620","uicon-chat-fill":"\ue61e","uicon-bag-fill":"\ue617","uicon-bag":"\ue619","uicon-error-circle-fill":"\ue62c","uicon-error-circle":"\ue624","uicon-close-circle":"\ue63f","uicon-close-circle-fill":"\ue637","uicon-checkmark-circle":"\ue63d","uicon-checkmark-circle-fill":"\ue635","uicon-question-circle-fill":"\ue666","uicon-question-circle":"\ue625","uicon-share":"\ue631","uicon-share-fill":"\ue65e","uicon-shopping-cart":"\ue621","uicon-shopping-cart-fill":"\ue65d","uicon-bell":"\ue609","uicon-bell-fill":"\ue640","uicon-list":"\ue650","uicon-list-dot":"\ue616","uicon-zhihu":"\ue6ba","uicon-zhihu-circle-fill":"\ue709","uicon-zhifubao":"\ue6b9","uicon-zhifubao-circle-fill":"\ue6b8","uicon-weixin-circle-fill":"\ue6b1","uicon-weixin-fill":"\ue6b2","uicon-twitter-circle-fill":"\ue6ab","uicon-twitter":"\ue6aa","uicon-taobao-circle-fill":"\ue6a7","uicon-taobao":"\ue6a6","uicon-weibo-circle-fill":"\ue6a5","uicon-weibo":"\ue6a4","uicon-qq-fill":"\ue6a1","uicon-qq-circle-fill":"\ue6a0","uicon-moments-circel-fill":"\ue69a","uicon-moments":"\ue69b","uicon-qzone":"\ue695","uicon-qzone-circle-fill":"\ue696","uicon-baidu-circle-fill":"\ue680","uicon-baidu":"\ue681","uicon-facebook-circle-fill":"\ue68a","uicon-facebook":"\ue689","uicon-car":"\ue60c","uicon-car-fill":"\ue636","uicon-warning-fill":"\ue64d","uicon-warning":"\ue694","uicon-clock-fill":"\ue638","uicon-clock":"\ue60f","uicon-edit-pen":"\ue612","uicon-edit-pen-fill":"\ue66b","uicon-email":"\ue611","uicon-email-fill":"\ue642","uicon-minus-circle":"\ue61b","uicon-minus-circle-fill":"\ue652","uicon-plus-circle":"\ue62e","uicon-plus-circle-fill":"\ue661","uicon-file-text":"\ue663","uicon-file-text-fill":"\ue665","uicon-pushpin":"\ue7e3","uicon-pushpin-fill":"\ue86e","uicon-grid":"\ue673","uicon-grid-fill":"\ue678","uicon-play-circle":"\ue647","uicon-play-circle-fill":"\ue655","uicon-pause-circle-fill":"\ue654","uicon-pause":"\ue8fa","uicon-pause-circle":"\ue643","uicon-eye-off":"\ue648","uicon-eye-off-outline":"\ue62b","uicon-gift-fill":"\ue65c","uicon-gift":"\ue65b","uicon-rmb-circle-fill":"\ue657","uicon-rmb-circle":"\ue677","uicon-kefu-ermai":"\ue656","uicon-server-fill":"\ue751","uicon-coupon-fill":"\ue8c4","uicon-coupon":"\ue8ae","uicon-integral":"\ue704","uicon-integral-fill":"\ue703","uicon-home-fill":"\ue964","uicon-home":"\ue965","uicon-hourglass-half-fill":"\ue966","uicon-hourglass":"\ue967","uicon-account":"\ue628","uicon-plus-people-fill":"\ue626","uicon-minus-people-fill":"\ue615","uicon-account-fill":"\ue614","uicon-thumb-down-fill":"\ue726","uicon-thumb-down":"\ue727","uicon-thumb-up":"\ue733","uicon-thumb-up-fill":"\ue72f","uicon-lock-fill":"\ue979","uicon-lock-open":"\ue973","uicon-lock-opened-fill":"\ue974","uicon-lock":"\ue97a","uicon-red-packet-fill":"\ue690","uicon-photo-fill":"\ue98b","uicon-photo":"\ue98d","uicon-volume-off-fill":"\ue659","uicon-volume-off":"\ue644","uicon-volume-fill":"\ue670","uicon-volume":"\ue633","uicon-red-packet":"\ue691","uicon-download":"\ue63c","uicon-arrow-up-fill":"\ue6b0","uicon-arrow-down-fill":"\ue600","uicon-play-left-fill":"\ue675","uicon-play-right-fill":"\ue676","uicon-rewind-left-fill":"\ue679","uicon-rewind-right-fill":"\ue67a","uicon-arrow-downward":"\ue604","uicon-arrow-leftward":"\ue601","uicon-arrow-rightward":"\ue603","uicon-arrow-upward":"\ue607","uicon-arrow-down":"\ue60d","uicon-arrow-right":"\ue605","uicon-arrow-left":"\ue60e","uicon-arrow-up":"\ue606","uicon-skip-back-left":"\ue674","uicon-skip-forward-right":"\ue672","uicon-rewind-right":"\ue66f","uicon-rewind-left":"\ue671","uicon-arrow-right-double":"\ue68d","uicon-arrow-left-double":"\ue68c","uicon-wifi-off":"\ue668","uicon-wifi":"\ue667","uicon-empty-data":"\ue62f","uicon-empty-history":"\ue684","uicon-empty-list":"\ue68b","uicon-empty-page":"\ue627","uicon-empty-order":"\ue639","uicon-man":"\ue697","uicon-woman":"\ue69c","uicon-man-add":"\ue61c","uicon-man-add-fill":"\ue64c","uicon-man-delete":"\ue61a","uicon-man-delete-fill":"\ue66a","uicon-zh":"\ue70a","uicon-en":"\ue692"}},27:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};e.default=o},3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i(26)),n=r(i(27));function r(t){return t&&t.__esModule?t:{default:t}}weex.requireModule("dom").addRule("fontFace",{fontFamily:"uicon-iconfont",src:"url('".concat("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf","')")});var a={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{uClasses:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var t={};return t.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),t.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),t},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(t){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(t)}}};e.default=a},310:function(t,e,i){"use strict";var o=i(710),n=i(479),r=i(0);var a=Object(r.a)(n.default,o.b,o.c,!1,null,null,"99dffe0e",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(874).default,this.options.style):Object.assign(this.options.style,i(874).default)}).call(a),e.default=a.exports},32:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},35:function(t,e,i){"use strict";i.r(e);var o=i(16),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},4:function(t,e){t.exports={"u-icon":{alignItems:"center"},"u-icon--left":{flexDirection:"row-reverse",alignItems:"center"},"u-icon--right":{flexDirection:"row",alignItems:"center"},"u-icon--top":{flexDirection:"column-reverse",justifyContent:"center"},"u-icon--bottom":{flexDirection:"column",justifyContent:"center"},"u-icon__icon":{fontFamily:"uicon-iconfont",position:"relative",flexDirection:"row",alignItems:"center"},"u-icon__icon--primary":{color:"#3c9cff"},"u-icon__icon--success":{color:"#5ac725"},"u-icon__icon--error":{color:"#f56c6c"},"u-icon__icon--warning":{color:"#f9ae3d"},"u-icon__icon--info":{color:"#909399"},"@VERSION":2}},479:function(t,e,i){"use strict";var o=i(480),n=i.n(o);e.default=n.a},480:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{close1:!0,close2:!0,close3:!0,radios:[{checked:!0},{checked:!1},{checked:!1}],checkboxs:[{checked:!0},{checked:!1},{checked:!1}]}},methods:{radioClick:function(t){this.radios.map((function(e,i){e.checked=i===t}))},checkboxClick:function(t){this.checkboxs[t].checked=!this.checkboxs[t].checked}}}},481:function(t,e){t.exports={"u-page__tag-item":{marginRight:"20"},"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},5:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["u-icon"],class:["u-icon--"+t.labelPos],on:{click:t.clickHandler}},[t.isImg?i("u-image",{staticClass:["u-icon__img"],style:[t.imgStyle,t.$u.addStyle(t.customStyle)],attrs:{src:t.name,mode:t.imgMode}}):i("u-text",{staticClass:["u-icon__icon"],class:t.uClasses,style:[t.iconStyle,t.$u.addStyle(t.customStyle)],appendAsTree:!0,attrs:{hoverClass:t.hoverClass,append:"tree"}},[t._v(t._s(t.icon))]),""!==t.label?i("u-text",{staticClass:["u-icon__label"],style:{color:t.labelColor,fontSize:t.$u.addUnit(t.labelSize),marginLeft:"right"==t.labelPos?t.$u.addUnit(t.space):0,marginTop:"bottom"==t.labelPos?t.$u.addUnit(t.space):0,marginRight:"left"==t.labelPos?t.$u.addUnit(t.space):0,marginBottom:"top"==t.labelPos?t.$u.addUnit(t.space):0},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.label))]):t._e()],1)},n=[]},55:function(t,e,i){"use strict";i.r(e);var o=i(20),n=i(14);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var a=i(0);var l=Object(a.a)(n.default,o.b,o.c,!1,null,"06ef4c74","6ae80928",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(35).default,this.options.style):Object.assign(this.options.style,i(35).default)}).call(l),e.default=l.exports},6:function(t,e,i){"use strict";i.r(e);var o=i(5),n=i(2);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var a=i(0);var l=Object(a.a)(n.default,o.b,o.c,!1,null,"63fb8f8b","7b59562c",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(7).default,this.options.style):Object.assign(this.options.style,i(7).default)}).call(l),e.default=l.exports},7:function(t,e,i){"use strict";i.r(e);var o=i(4),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},710:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uTag:i(806).default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["u-page"]},[i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u57fa\u7840\u529f\u80fd")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",plain:!0,size:"mini",type:"warning"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49\u4e3b\u9898")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"error"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5706\u5f62\u6807\u7b7e")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",plain:!0,shape:"circle"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning",shape:"circle"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u9542\u7a7a\u6807\u7b7e")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",plain:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning",plain:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success",plain:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"error",plain:!0}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u9542\u7a7a\u5e26\u80cc\u666f\u8272")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",plain:!0,plainFill:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning",plain:!0,plainFill:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success",plain:!0,plainFill:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"error",plain:!0,plainFill:!0}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49\u5c3a\u5bf8")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",plain:!0,size:"mini"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success",plain:!0,size:"large"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u53ef\u5173\u95ed\u6807\u7b7e")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",size:"mini",closable:!0,show:t.close1},on:{close:function(e){t.close1=!1}}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning",closable:!0,show:t.close2},on:{close:function(e){t.close2=!1}}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success",plain:!0,size:"large",closable:!0,show:t.close3},on:{close:function(e){t.close3=!1}}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5e26\u56fe\u7247\u548c\u56fe\u6807")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",size:"mini",icon:"map",plain:!0}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"warning",icon:"tags-fill"}})],1),i("view",{staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u6807\u7b7e",type:"success",plain:!0,size:"large",icon:"https://cdn.uviewui.com/uview/example/tag.png"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5355\u9009\u6807\u7b7e")]),i("view",{staticClass:["u-demo-block__content"]},t._l(t.radios,(function(e,o){return i("view",{key:o,staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u9009\u9879"+(o+1),plain:!e.checked,type:"warning",name:o},on:{click:t.radioClick}})],1)})),0)]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u591a\u9009\u6807\u7b7e")]),i("view",{staticClass:["u-demo-block__content"]},t._l(t.checkboxs,(function(e,o){return i("view",{key:o,staticClass:["u-page__tag-item"]},[i("u-tag",{attrs:{text:"\u9009\u9879"+(o+1),plain:!e.checked,type:"warning",name:o},on:{click:t.checkboxClick}})],1)})),0)])])])},r=[]},8:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(9).default,Vue.prototype.__$appStyle__)},80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=o},806:function(t,e,i){"use strict";i.r(e);var o=i(220),n=i(174);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var a=i(0);var l=Object(a.a)(n.default,o.b,o.c,!1,null,"28856ff5","02d467d0",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(259).default,this.options.style):Object.assign(this.options.style,i(259).default)}).call(l),e.default=l.exports},807:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:{type:String,default:uni.$u.props.tag.type},disabled:{type:[Boolean,String],default:uni.$u.props.tag.disabled},size:{type:String,default:uni.$u.props.tag.size},shape:{type:String,default:uni.$u.props.tag.shape},text:{type:[String,Number],default:uni.$u.props.tag.text},bgColor:{type:String,default:uni.$u.props.tag.bgColor},color:{type:String,default:uni.$u.props.tag.color},borderColor:{type:String,default:uni.$u.props.tag.borderColor},closeColor:{type:String,default:uni.$u.props.tag.closeColor},name:{type:[String,Number],default:uni.$u.props.tag.name},plainFill:{type:Boolean,default:uni.$u.props.tag.plainFill},plain:{type:Boolean,default:uni.$u.props.tag.plain},closable:{type:Boolean,default:uni.$u.props.tag.closable},show:{type:Boolean,default:uni.$u.props.tag.show},icon:{type:String,default:uni.$u.props.tag.icon}}};e.default=o},81:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=i(82))&&o.__esModule?o:{default:o};var r=function(){return new Promise((function(t){return setTimeout(t,20)}))},a=t("animation"),l=function(t){return n.default[t]},c={methods:{clickHandler:function(){this.$emit("click")},nvueEnter:function(){var t=this,e=l(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.viewStyle={opacity:0},this.$nextTick((function(){t.viewStyle=e.enter,Promise.resolve().then(r).then((function(){t.$emit("enter"),a.transition(t.$refs["u-transition"].ref,{styles:e["enter-to"],duration:t.duration,timingFunction:t.timingFunction,needLayout:!1,delay:0},(function(){t.$emit("afterEnter")}))})).catch((function(){}))}))},nvueLeave:function(){var t=this;if(this.display){var e=l(this.mode);this.status="leave",this.$emit("beforeLeave"),this.viewStyle=e.leave,Promise.resolve().then(r).then((function(){t.transitionEnded=!1,t.$emit("leave"),a.transition(t.$refs["u-transition"].ref,{styles:e["leave-to"],duration:t.duration,timingFunction:t.timingFunction,needLayout:!1,delay:0},(function(){t.onTransitionEnd()}))})).catch((function(){}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=c}).call(this,i(32).default)},82:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}}},874:function(t,e,i){"use strict";i.r(e);var o=i(481),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},9:function(t,e,i){"use strict";i.r(e);var o=i(1),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},999:function(t,e,i){"use strict";i.r(e);i(8);var o=i(310);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),o.default.mpType="page",o.default.route="pages/componentsB/tag/tag",o.default.el="#root",new Vue(o.default)}});