!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=989)}({0:function(t,e,o){"use strict";function i(t,e,o,i,n,r,u,l,c,a){var s,d="function"==typeof t?t.options:t;if(c){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in c)f.call(c,p)&&!f.call(d.components,p)&&(d.components[p]=c[p])}if(a&&((a.beforeCreate||(a.beforeCreate=[])).unshift((function(){this[a.__module]=this})),(d.mixins||(d.mixins=[])).push(a)),e&&(d.render=e,d.staticRenderFns=o,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},d._ssrRegister=s):n&&(s=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var h=d.render;d.render=function(t,e){return s.call(e),h(t,e)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,s):[s]}return{exports:t,options:d}}o.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden"},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden"},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden"},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden"},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden"},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},112:function(t,e,o){"use strict";o.r(e);var i=o(64),n=o(58);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var u=o(0);var l=Object(u.a)(n.default,i.b,i.c,!1,null,"0105e4ff","69c168e8",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(99).default,this.options.style):Object.assign(this.options.style,o(99).default)}).call(l),e.default=l.exports},113:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{hairline:{type:Boolean,default:uni.$u.props.button.hairline},type:{type:String,default:uni.$u.props.button.type},size:{type:String,default:uni.$u.props.button.size},shape:{type:String,default:uni.$u.props.button.shape},plain:{type:Boolean,default:uni.$u.props.button.plain},disabled:{type:Boolean,default:uni.$u.props.button.disabled},loading:{type:Boolean,default:uni.$u.props.button.loading},loadingText:{type:[String,Number],default:uni.$u.props.button.loadingText},loadingMode:{type:String,default:uni.$u.props.button.loadingMode},loadingSize:{type:[String,Number],default:uni.$u.props.button.loadingSize},openType:{type:String,default:uni.$u.props.button.openType},formType:{type:String,default:uni.$u.props.button.formType},appParameter:{type:String,default:uni.$u.props.button.appParameter},hoverStopPropagation:{type:Boolean,default:uni.$u.props.button.hoverStopPropagation},lang:{type:String,default:uni.$u.props.button.lang},sessionFrom:{type:String,default:uni.$u.props.button.sessionFrom},sendMessageTitle:{type:String,default:uni.$u.props.button.sendMessageTitle},sendMessagePath:{type:String,default:uni.$u.props.button.sendMessagePath},sendMessageImg:{type:String,default:uni.$u.props.button.sendMessageImg},showMessageCard:{type:Boolean,default:uni.$u.props.button.showMessageCard},dataName:{type:String,default:uni.$u.props.button.dataName},throttleTime:{type:[String,Number],default:uni.$u.props.button.throttleTime},hoverStartTime:{type:[String,Number],default:uni.$u.props.button.hoverStartTime},hoverStayTime:{type:[String,Number],default:uni.$u.props.button.hoverStayTime},text:{type:[String,Number],default:uni.$u.props.button.text},icon:{type:String,default:uni.$u.props.button.icon},iconColor:{type:String,default:uni.$u.props.button.icon},color:{type:String,default:uni.$u.props.button.color}}};e.default=i},138:function(t,e,o){"use strict";o.r(e);var i=o(139),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},139:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=(i=o(263))&&i.__esModule?i:{default:i};var r={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(t){this.secNum=t}}},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.changeText.replace(/x|X/,t.secNum)):(clearInterval(t.timer),t.timer=null,t.changeEvent(t.endText),t.secNum=t.seconds,t.$emit("end"),t.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};e.default=r},140:function(t,e){t.exports={"@VERSION":2}},155:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["u-code"]})},n=[]},17:function(t,e,o){"use strict";o.r(e);var i=o(18),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},18:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=(i=o(83))&&i.__esModule?i:{default:i};var r=weex.requireModule("animation"),u={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){var e=this;t&&!this.loading&&setTimeout((function(){e.startAnimate()}),30)}},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t.show&&t.nvueAnimate(),t.show&&t.addEventListenerToWebview()}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),o=e[e.length-1].$getAppWebview();o.addEventListener("hide",(function(){t.webviewHide=!0})),o.addEventListener("show",(function(){t.webviewHide=!1}))},nvueAnimate:function(){"spinner"!==this.mode&&this.startAnimate()},startAnimate:function(){var t=this;this.loading=!0;var e=this.$refs.ani;e&&r.transition(e,{styles:{transform:"rotate(".concat(this.aniAngel,"deg)"),transformOrigin:"center center"},duration:this.duration,timingFunction:this.timingFunction},(function(){t.aniAngel+=360,t.show&&!t.webviewHide?t.startAnimate():t.loading=!1}))}}};e.default=u},19:function(t,e){t.exports={"u-loading-icon":{flexDirection:"row",alignItems:"center",justifyContent:"center",color:"#c8c9cc"},"u-loading-icon__text":{marginLeft:"4",color:"#606266",fontSize:"14",lineHeight:"20"},"u-loading-icon__spinner":{width:"30",height:"30",position:"relative"},"u-loading-icon__spinner--semicircle":{borderWidth:"2",borderColor:"rgba(0,0,0,0)",borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderStyle:"solid"},"u-loading-icon__spinner--circle":{borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100",borderWidth:"2",borderTopColor:"#e5e5e5",borderRightColor:"#e5e5e5",borderBottomColor:"#e5e5e5",borderLeftColor:"#e5e5e5",borderStyle:"solid"},"u-loading-icon--vertical":{flexDirection:"column"},"@VERSION":2}},2:function(t,e,o){"use strict";o.r(e);var i=o(3),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},21:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("view",{staticClass:["u-loading-icon"],class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():o("view",{ref:"ani",staticClass:["u-loading-icon__spinner"],class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?o("block",[t.webviewHide?t._e():o("loading-indicator",{staticClass:["u-loading-indicator"],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size)},attrs:{animating:!0}})]):t._e()],1),t.text?o("u-text",{staticClass:["u-loading-icon__text"],style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))]):t._e()]):t._e()},n=[]},240:function(t,e,o){"use strict";o.r(e);var i=o(140),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},26:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={"uicon-level":"\ue693","uicon-column-line":"\ue68e","uicon-checkbox-mark":"\ue807","uicon-folder":"\ue7f5","uicon-movie":"\ue7f6","uicon-star-fill":"\ue669","uicon-star":"\ue65f","uicon-phone-fill":"\ue64f","uicon-phone":"\ue622","uicon-apple-fill":"\ue881","uicon-chrome-circle-fill":"\ue885","uicon-backspace":"\ue67b","uicon-attach":"\ue632","uicon-cut":"\ue948","uicon-empty-car":"\ue602","uicon-empty-coupon":"\ue682","uicon-empty-address":"\ue646","uicon-empty-favor":"\ue67c","uicon-empty-permission":"\ue686","uicon-empty-news":"\ue687","uicon-empty-search":"\ue664","uicon-github-circle-fill":"\ue887","uicon-rmb":"\ue608","uicon-person-delete-fill":"\ue66a","uicon-reload":"\ue788","uicon-order":"\ue68f","uicon-server-man":"\ue6bc","uicon-search":"\ue62a","uicon-fingerprint":"\ue955","uicon-more-dot-fill":"\ue630","uicon-scan":"\ue662","uicon-share-square":"\ue60b","uicon-map":"\ue61d","uicon-map-fill":"\ue64e","uicon-tags":"\ue629","uicon-tags-fill":"\ue651","uicon-bookmark-fill":"\ue63b","uicon-bookmark":"\ue60a","uicon-eye":"\ue613","uicon-eye-fill":"\ue641","uicon-mic":"\ue64a","uicon-mic-off":"\ue649","uicon-calendar":"\ue66e","uicon-calendar-fill":"\ue634","uicon-trash":"\ue623","uicon-trash-fill":"\ue658","uicon-play-left":"\ue66d","uicon-play-right":"\ue610","uicon-minus":"\ue618","uicon-plus":"\ue62d","uicon-info":"\ue653","uicon-info-circle":"\ue7d2","uicon-info-circle-fill":"\ue64b","uicon-question":"\ue715","uicon-error":"\ue6d3","uicon-close":"\ue685","uicon-checkmark":"\ue6a8","uicon-android-circle-fill":"\ue67e","uicon-android-fill":"\ue67d","uicon-ie":"\ue87b","uicon-IE-circle-fill":"\ue889","uicon-google":"\ue87a","uicon-google-circle-fill":"\ue88a","uicon-setting-fill":"\ue872","uicon-setting":"\ue61f","uicon-minus-square-fill":"\ue855","uicon-plus-square-fill":"\ue856","uicon-heart":"\ue7df","uicon-heart-fill":"\ue851","uicon-camera":"\ue7d7","uicon-camera-fill":"\ue870","uicon-more-circle":"\ue63e","uicon-more-circle-fill":"\ue645","uicon-chat":"\ue620","uicon-chat-fill":"\ue61e","uicon-bag-fill":"\ue617","uicon-bag":"\ue619","uicon-error-circle-fill":"\ue62c","uicon-error-circle":"\ue624","uicon-close-circle":"\ue63f","uicon-close-circle-fill":"\ue637","uicon-checkmark-circle":"\ue63d","uicon-checkmark-circle-fill":"\ue635","uicon-question-circle-fill":"\ue666","uicon-question-circle":"\ue625","uicon-share":"\ue631","uicon-share-fill":"\ue65e","uicon-shopping-cart":"\ue621","uicon-shopping-cart-fill":"\ue65d","uicon-bell":"\ue609","uicon-bell-fill":"\ue640","uicon-list":"\ue650","uicon-list-dot":"\ue616","uicon-zhihu":"\ue6ba","uicon-zhihu-circle-fill":"\ue709","uicon-zhifubao":"\ue6b9","uicon-zhifubao-circle-fill":"\ue6b8","uicon-weixin-circle-fill":"\ue6b1","uicon-weixin-fill":"\ue6b2","uicon-twitter-circle-fill":"\ue6ab","uicon-twitter":"\ue6aa","uicon-taobao-circle-fill":"\ue6a7","uicon-taobao":"\ue6a6","uicon-weibo-circle-fill":"\ue6a5","uicon-weibo":"\ue6a4","uicon-qq-fill":"\ue6a1","uicon-qq-circle-fill":"\ue6a0","uicon-moments-circel-fill":"\ue69a","uicon-moments":"\ue69b","uicon-qzone":"\ue695","uicon-qzone-circle-fill":"\ue696","uicon-baidu-circle-fill":"\ue680","uicon-baidu":"\ue681","uicon-facebook-circle-fill":"\ue68a","uicon-facebook":"\ue689","uicon-car":"\ue60c","uicon-car-fill":"\ue636","uicon-warning-fill":"\ue64d","uicon-warning":"\ue694","uicon-clock-fill":"\ue638","uicon-clock":"\ue60f","uicon-edit-pen":"\ue612","uicon-edit-pen-fill":"\ue66b","uicon-email":"\ue611","uicon-email-fill":"\ue642","uicon-minus-circle":"\ue61b","uicon-minus-circle-fill":"\ue652","uicon-plus-circle":"\ue62e","uicon-plus-circle-fill":"\ue661","uicon-file-text":"\ue663","uicon-file-text-fill":"\ue665","uicon-pushpin":"\ue7e3","uicon-pushpin-fill":"\ue86e","uicon-grid":"\ue673","uicon-grid-fill":"\ue678","uicon-play-circle":"\ue647","uicon-play-circle-fill":"\ue655","uicon-pause-circle-fill":"\ue654","uicon-pause":"\ue8fa","uicon-pause-circle":"\ue643","uicon-eye-off":"\ue648","uicon-eye-off-outline":"\ue62b","uicon-gift-fill":"\ue65c","uicon-gift":"\ue65b","uicon-rmb-circle-fill":"\ue657","uicon-rmb-circle":"\ue677","uicon-kefu-ermai":"\ue656","uicon-server-fill":"\ue751","uicon-coupon-fill":"\ue8c4","uicon-coupon":"\ue8ae","uicon-integral":"\ue704","uicon-integral-fill":"\ue703","uicon-home-fill":"\ue964","uicon-home":"\ue965","uicon-hourglass-half-fill":"\ue966","uicon-hourglass":"\ue967","uicon-account":"\ue628","uicon-plus-people-fill":"\ue626","uicon-minus-people-fill":"\ue615","uicon-account-fill":"\ue614","uicon-thumb-down-fill":"\ue726","uicon-thumb-down":"\ue727","uicon-thumb-up":"\ue733","uicon-thumb-up-fill":"\ue72f","uicon-lock-fill":"\ue979","uicon-lock-open":"\ue973","uicon-lock-opened-fill":"\ue974","uicon-lock":"\ue97a","uicon-red-packet-fill":"\ue690","uicon-photo-fill":"\ue98b","uicon-photo":"\ue98d","uicon-volume-off-fill":"\ue659","uicon-volume-off":"\ue644","uicon-volume-fill":"\ue670","uicon-volume":"\ue633","uicon-red-packet":"\ue691","uicon-download":"\ue63c","uicon-arrow-up-fill":"\ue6b0","uicon-arrow-down-fill":"\ue600","uicon-play-left-fill":"\ue675","uicon-play-right-fill":"\ue676","uicon-rewind-left-fill":"\ue679","uicon-rewind-right-fill":"\ue67a","uicon-arrow-downward":"\ue604","uicon-arrow-leftward":"\ue601","uicon-arrow-rightward":"\ue603","uicon-arrow-upward":"\ue607","uicon-arrow-down":"\ue60d","uicon-arrow-right":"\ue605","uicon-arrow-left":"\ue60e","uicon-arrow-up":"\ue606","uicon-skip-back-left":"\ue674","uicon-skip-forward-right":"\ue672","uicon-rewind-right":"\ue66f","uicon-rewind-left":"\ue671","uicon-arrow-right-double":"\ue68d","uicon-arrow-left-double":"\ue68c","uicon-wifi-off":"\ue668","uicon-wifi":"\ue667","uicon-empty-data":"\ue62f","uicon-empty-history":"\ue684","uicon-empty-list":"\ue68b","uicon-empty-page":"\ue627","uicon-empty-order":"\ue639","uicon-man":"\ue697","uicon-woman":"\ue69c","uicon-man-add":"\ue61c","uicon-man-add-fill":"\ue64c","uicon-man-delete":"\ue61a","uicon-man-delete-fill":"\ue66a","uicon-zh":"\ue70a","uicon-en":"\ue692"}},262:function(t,e,o){"use strict";o.r(e);var i=o(155),n=o(138);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var u=o(0);var l=Object(u.a)(n.default,i.b,i.c,!1,null,"4b3c3a84","69f9cbac",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(240).default,this.options.style):Object.assign(this.options.style,o(240).default)}).call(l),e.default=l.exports},263:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};e.default=i},27:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};e.default=i},3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(o(26)),n=r(o(27));function r(t){return t&&t.__esModule?t:{default:t}}weex.requireModule("dom").addRule("fontFace",{fontFamily:"uicon-iconfont",src:"url('".concat("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf","')")});var u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{uClasses:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var t={};return t.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),t.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),t},icon:function(){return i.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(t){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(t)}}};e.default=u},306:function(t,e,o){"use strict";var i=o(706),n=o(458),r=o(0);var u=Object(r.a)(n.default,i.b,i.c,!1,null,null,"48053095",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(867).default,this.options.style):Object.assign(this.options.style,o(867).default)}).call(u),e.default=u.exports},36:function(t,e,o){"use strict";o.r(e);var i=o(19),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},4:function(t,e){t.exports={"u-icon":{alignItems:"center"},"u-icon--left":{flexDirection:"row-reverse",alignItems:"center"},"u-icon--right":{flexDirection:"row",alignItems:"center"},"u-icon--top":{flexDirection:"column-reverse",justifyContent:"center"},"u-icon--bottom":{flexDirection:"column",justifyContent:"center"},"u-icon__icon":{fontFamily:"uicon-iconfont",position:"relative",flexDirection:"row",alignItems:"center"},"u-icon__icon--primary":{color:"#3c9cff"},"u-icon__icon--success":{color:"#5ac725"},"u-icon__icon--error":{color:"#f56c6c"},"u-icon__icon--warning":{color:"#f9ae3d"},"u-icon__icon--info":{color:"#909399"},"@VERSION":2}},458:function(t,e,o){"use strict";var i=o(459),n=o.n(i);e.default=n.a},459:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tips:"",tips1:"",tips2:"",disabled1:!1,disabled2:!1,disabled3:!1}},onReady:function(){},methods:{codeChange:function(t){this.tips=t},codeChange1:function(t){this.tips1=t},codeChange2:function(t){this.tips2=t},getCode:function(){var t=this;this.$refs.uCode.canGetCode?(uni.showLoading({title:"\u6b63\u5728\u83b7\u53d6\u9a8c\u8bc1\u7801"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"),t.$refs.uCode.start()}),2e3)):uni.$u.toast("\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u518d\u53d1\u9001")},getCode1:function(){var t=this;this.$refs.uCode1.canGetCode?(uni.showLoading({title:"\u6b63\u5728\u83b7\u53d6\u9a8c\u8bc1\u7801"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"),t.$refs.uCode1.start()}),2e3)):uni.$u.toast("\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u518d\u53d1\u9001")},getCode2:function(){var t=this;this.$refs.uCode2.canGetCode?(uni.showLoading({title:"\u6b63\u5728\u83b7\u53d6\u9a8c\u8bc1\u7801"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"),t.$refs.uCode2.start()}),2e3)):uni.$u.toast("\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u518d\u53d1\u9001")}}};e.default=i},460:function(t,e){t.exports={"u-page__code-text":{color:"#3c9cff",fontSize:"15"},"u-demo-block__content":{flexDirection:"row"},"@VERSION":2}},5:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["u-icon"],class:["u-icon--"+t.labelPos],on:{click:t.clickHandler}},[t.isImg?o("u-image",{staticClass:["u-icon__img"],style:[t.imgStyle,t.$u.addStyle(t.customStyle)],attrs:{src:t.name,mode:t.imgMode}}):o("u-text",{staticClass:["u-icon__icon"],class:t.uClasses,style:[t.iconStyle,t.$u.addStyle(t.customStyle)],appendAsTree:!0,attrs:{hoverClass:t.hoverClass,append:"tree"}},[t._v(t._s(t.icon))]),""!==t.label?o("u-text",{staticClass:["u-icon__label"],style:{color:t.labelColor,fontSize:t.$u.addUnit(t.labelSize),marginLeft:"right"==t.labelPos?t.$u.addUnit(t.space):0,marginTop:"bottom"==t.labelPos?t.$u.addUnit(t.space):0,marginRight:"left"==t.labelPos?t.$u.addUnit(t.space):0,marginBottom:"top"==t.labelPos?t.$u.addUnit(t.space):0},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.label))]):t._e()],1)},n=[]},58:function(t,e,o){"use strict";o.r(e);var i=o(59),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},59:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(o(91)),n(o(92));var i=n(o(113));function n(t){return t&&t.__esModule?t:{default:t}}var r={name:"u-button",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},computed:{bemClass:function(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor:function(){return this.plain?this.color?this.color:this.$u.config.color["u-".concat(this.type)]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom:function(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor:function(){var t={};return this.color&&(t.color=this.plain?this.color:"white",this.plain||(t["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(t.borderTopWidth=0,t.borderRightWidth=0,t.borderBottomWidth=0,t.borderLeftWidth=0,this.plain||(t.backgroundImage=this.color)):(t.borderColor=this.color,t.borderWidth="1px",t.borderStyle="solid")),t},nvueTextStyle:function(){var t={};return"info"===this.type&&(t.color="#323233"),this.color&&(t.color=this.plain?this.color:"white"),t.fontSize=this.textSize+"px",t},textSize:function(){var t=14,e=this.size;return"large"===e&&(t=16),"normal"===e&&(t=14),"small"===e&&(t=12),"mini"===e&&(t=10),t}},methods:{clickHandler:function(){var t=this;this.disabled||this.loading||uni.$u.throttle((function(){t.$emit("click")}),this.throttleTime)},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=r},6:function(t,e,o){"use strict";o.r(e);var i=o(5),n=o(2);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var u=o(0);var l=Object(u.a)(n.default,i.b,i.c,!1,null,"63fb8f8b","7b59562c",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(7).default,this.options.style):Object.assign(this.options.style,o(7).default)}).call(l),e.default=l.exports},60:function(t,e){t.exports={"u-button--active":{opacity:.75},"u-button--active--plain":{backgroundColor:"#d9d9d9"},"u-button__loading-text":{marginLeft:"4",color:"#FFFFFF",fontSize:"15"},"u-button__text":{color:"#FFFFFF",fontSize:"15"},"u-button__text--plain--error":{color:"#f56c6c"},"u-button__text--plain--warning":{color:"#f9ae3d"},"u-button__text--plain--success":{color:"#5ac725"},"u-button__text--plain--info":{color:"#909399"},"u-button__text--plain--primary":{color:"#3c9cff"},"u-button":{height:"40",position:"relative",alignItems:"center",justifyContent:"center",flexDirection:"row"},"u-button--large":{height:"50",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"u-button--normal":{paddingTop:0,paddingRight:"12",paddingBottom:0,paddingLeft:"12",fontSize:"14"},"u-button--small":{height:"30",paddingTop:"0",paddingRight:"8",paddingBottom:"0",paddingLeft:"8",fontSize:"12"},"u-button--mini":{height:"22",fontSize:"10",paddingTop:"0",paddingRight:"8",paddingBottom:"0",paddingLeft:"8"},"u-button--disabled":{opacity:.5},"u-button--info":{color:"#323233",backgroundColor:"#ffffff",borderColor:"#ebedf0",borderWidth:"1",borderStyle:"solid"},"u-button--success":{color:"#ffffff",backgroundColor:"#5ac725",borderColor:"#5ac725",borderWidth:"1",borderStyle:"solid"},"u-button--primary":{color:"#ffffff",backgroundColor:"#3c9cff",borderColor:"#3c9cff",borderWidth:"1",borderStyle:"solid"},"u-button--error":{color:"#ffffff",backgroundColor:"#f56c6c",borderColor:"#f56c6c",borderWidth:"1",borderStyle:"solid"},"u-button--warning":{color:"#ffffff",backgroundColor:"#f9ae3d",borderColor:"#f9ae3d",borderWidth:"1",borderStyle:"solid"},"u-button--block":{flexDirection:"row",width:100},"u-button--circle":{borderTopRightRadius:"100",borderTopLeftRadius:"100",borderBottomLeftRadius:"100",borderBottomRightRadius:"100"},"u-button--square":{borderBottomLeftRadius:"3",borderBottomRightRadius:"3",borderTopLeftRadius:"3",borderTopRightRadius:"3"},"u-button--plain":{backgroundColor:"#ffffff"},"u-button--hairline":{borderWidth:"0.5"},"@VERSION":2}},64:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uLoadingIcon:o(67).default,uIcon:o(6).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:["u-button"],class:t.bemClass,style:[t.baseColor,t.$u.addStyle(t.customStyle)],attrs:{hoverStartTime:Number(t.hoverStartTime),hoverStayTime:Number(t.hoverStayTime),hoverClass:t.disabled||t.loading||t.color||!t.plain&&"info"!==t.type?t.disabled||t.loading||t.plain?"":"u-button--active":"u-button--active--plain"},on:{click:t.clickHandler}},[t.loading?[o("u-loading-icon",{attrs:{mode:t.loadingMode,size:1.15*t.textSize,color:t.loadingColor}}),o("u-text",{staticClass:["u-button__loading-text"],class:[t.plain&&"u-button__text--plain--"+t.type],style:[t.nvueTextStyle],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.loadingText||t.text))])]:[t.icon?o("u-icon",{attrs:{name:t.icon,color:t.iconColorCom,size:1.35*t.textSize}}):t._e(),o("u-text",{staticClass:["u-button__text"],class:[t.plain&&"u-button__text--plain--"+t.type],style:[{marginLeft:t.icon?"2px":0},t.nvueTextStyle],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.text))])]],2)},r=[]},67:function(t,e,o){"use strict";o.r(e);var i=o(21),n=o(17);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var u=o(0);var l=Object(u.a)(n.default,i.b,i.c,!1,null,"770e8abd","059849e8",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(36).default,this.options.style):Object.assign(this.options.style,o(36).default)}).call(l),e.default=l.exports},7:function(t,e,o){"use strict";o.r(e);var i=o(4),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},706:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uCode:o(262).default,uButton:o(112).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u57fa\u7840\u529f\u80fd")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code",{ref:"uCode",attrs:{seconds:"20",changeText:"XS\u83b7\u53d6"},on:{change:t.codeChange,start:function(e){t.disabled1=!0},end:function(e){t.disabled1=!1}}}),o("u-button",{attrs:{text:t.tips,type:"success",size:"small",disabled:t.disabled1},on:{click:t.getCode}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u4fdd\u6301\u5012\u8ba1\u65f6(\u5f00\u59cb\u540e\uff0c\u5de6\u4e0a\u89d2\u8fd4\u9000\u51fa\u6b64\u9875\u9762\u518d\u8fdb\u5165\uff0c\u4f1a\u53d1\u73b0\u5012\u8ba1\u65f6\u8fd8\u5728\u7ee7\u7eed)")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code",{ref:"uCode1",attrs:{keepRunning:!0,changeText:"\u5012\u8ba1\u65f6XS"},on:{change:t.codeChange1,start:function(e){t.disabled2=!0},end:function(e){t.disabled2=!1}}}),o("u-button",{attrs:{type:"primary",text:t.tips1,size:"small",disabled:t.disabled2},on:{click:t.getCode1}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6587\u672c\u6837\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u-code",{ref:"uCode2",attrs:{keepRunning:!0,startText:"\u70b9\u6211\u83b7\u53d6\u9a8c\u8bc1\u7801"},on:{change:t.codeChange2}}),o("u-text",{staticClass:["u-page__code-text"],appendAsTree:!0,attrs:{text:t.tips2,append:"tree"},on:{click:t.getCode2}},[t._v(t._s(t.tips2))])],1)])])])},r=[]},8:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(9).default,Vue.prototype.__$appStyle__)},83:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=i},867:function(t,e,o){"use strict";o.r(e);var i=o(460),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},9:function(t,e,o){"use strict";o.r(e);var i=o(1),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},91:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};e.default=i},92:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{openType:String},methods:{onGetUserInfo:function(t){this.$emit("getuserinfo",t.detail)},onContact:function(t){this.$emit("contact",t.detail)},onGetPhoneNumber:function(t){this.$emit("getphonenumber",t.detail)},onError:function(t){this.$emit("error",t.detail)},onLaunchApp:function(t){this.$emit("launchapp",t.detail)},onOpenSetting:function(t){this.$emit("opensetting",t.detail)}}};e.default=i},989:function(t,e,o){"use strict";o.r(e);o(8);var i=o(306);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),i.default.mpType="page",i.default.route="pages/componentsB/code/code",i.default.el="#root",new Vue(i.default)},99:function(t,e,o){"use strict";o.r(e);var i=o(60),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a}});