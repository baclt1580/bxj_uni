!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1096)}({0:function(e,t,i){"use strict";function o(e,t,i,o,n,u,r,l,c,a){var s,f="function"==typeof e?e.options:e;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(f.components,p)&&(f.components[p]=c[p])}if(a&&((a.beforeCreate||(a.beforeCreate=[])).unshift((function(){this[a.__module]=this})),(f.mixins||(f.mixins=[])).push(a)),t&&(f.render=t,f.staticRenderFns=i,f._compiled=!0),o&&(f.functional=!0),u&&(f._scopeId="data-v-"+u),r?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=s):n&&(s=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(f.functional){f._injectStyles=s;var m=f.render;f.render=function(e,t){return s.call(t),m(e,t)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,s):[s]}return{exports:e,options:f}}i.d(t,"a",(function(){return o}))},1:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden"},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden"},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden"},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden"},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden"},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},100:function(e,t,i){"use strict";i.r(t);var o=i(63),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},101:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{type:{type:String,default:uni.$u.props.text.type},show:{type:Boolean,default:uni.$u.props.text.show},text:{type:[String,Number],default:uni.$u.props.text.text},prefixIcon:{type:String,default:uni.$u.props.text.prefixIcon},suffixIcon:{type:String,default:uni.$u.props.text.suffixIcon},mode:{type:String,default:uni.$u.props.text.mode},href:{type:String,default:uni.$u.props.text.href},format:{type:[String,Function],default:uni.$u.props.text.format},call:{type:Boolean,default:uni.$u.props.text.call},openType:{type:String,default:uni.$u.props.text.openType},bold:{type:Boolean,default:uni.$u.props.text.bold},block:{type:Boolean,default:uni.$u.props.text.block},lines:{type:[String,Number],default:uni.$u.props.text.lines},color:{type:String,default:uni.$u.props.text.color},size:{type:[String,Number],default:uni.$u.props.text.size},iconStyle:{type:[Object,String],default:uni.$u.props.text.iconStyle},decoration:{tepe:String,default:uni.$u.props.text.decoration},margin:{type:[Object,String,Number],default:uni.$u.props.text.margin},lineHeight:{type:[String,Number],default:uni.$u.props.text.lineHeight},align:{type:String,default:uni.$u.props.text.align},wordWrap:{type:String,default:uni.$u.props.text.wordWrap}}};t.default=o},102:function(e,t,i){"use strict";i.r(t);var o=i(72),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},1096:function(e,t,i){"use strict";i.r(t);i(8);var o=i(342);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(i){return t.resolve(e()).then((function(){return i}))}),(function(i){return t.resolve(e()).then((function(){throw i}))}))}),o.default.mpType="page",o.default.route="pages/componentsC/text/text",o.default.el="#root",new Vue(o.default)},114:function(e,t,i){"use strict";i.r(t);var o=i(76),n=i(68);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);var r=i(0),l=Object(r.a)(n.default,o.b,o.c,!1,null,null,"0b47f918",!1,o.a,void 0);t.default=l.exports},115:function(e,t,i){"use strict";i.r(t);var o=i(65),n=i(61);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);var r=i(0);var l=Object(r.a)(n.default,o.b,o.c,!1,null,"0f0cb6d2","41b0230c",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(100).default,this.options.style):Object.assign(this.options.style,i(100).default)}).call(l),t.default=l.exports},116:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};t.default=o},117:function(e,t,i){"use strict";i.r(t);var o=i(77),n=i(70);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);var r=i(0);var l=Object(r.a)(n.default,o.b,o.c,!1,null,"2f1fcf04","c71db8a8",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(102).default,this.options.style):Object.assign(this.options.style,i(102).default)}).call(l),t.default=l.exports},118:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={computed:{value:function(){var e=this.text,t=this.mode,i=this.format,o=this.href;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||uni.$u.error("\u91d1\u989d\u6a21\u5f0f\u4e0b\uff0ctext\u53c2\u6570\u9700\u8981\u4e3a\u91d1\u989d\u683c\u5f0f"),uni.$u.test.func(i)?i(e):uni.$u.priceFormat(e,2)):"date"===t?(!uni.$u.test.date(e)&&uni.$u.error("\u65e5\u671f\u6a21\u5f0f\u4e0b\uff0ctext\u53c2\u6570\u9700\u8981\u4e3a\u65e5\u671f\u6216\u65f6\u95f4\u6233\u683c\u5f0f"),uni.$u.test.func(i)?i(e):this.formart?uni.$u.timeFormat(e,i):uni.$u.timeFormat(e,"yyyy-mm-dd")):"phone"===t?(!uni.$u.test.mobile(e)&&uni.$u.error("\u624b\u673a\u53f7\u6a21\u5f0f\u4e0b\uff0ctext\u53c2\u6570\u9700\u8981\u4e3a\u624b\u673a\u53f7\u7801\u683c\u5f0f"),uni.$u.test.func(i)?i(e):"encrypt"===i?"".concat(e.substr(0,3),"****").concat(e.substr(7)):e):"name"===t?("string"!=typeof e&&uni.$u.error("\u59d3\u540d\u6a21\u5f0f\u4e0b\uff0ctext\u53c2\u6570\u9700\u8981\u4e3a\u5b57\u7b26\u4e32\u683c\u5f0f"),uni.$u.test.func(i)?i(e):"encrypt"===i?this.formatName(e):e):"link"===t?(!uni.$u.test.url(o)&&uni.$u.error("\u8d85\u94fe\u63a5\u6a21\u5f0f\u4e0b\uff0chref\u53c2\u6570\u9700\u8981\u4e3aURL\u683c\u5f0f"),e):e}},methods:{formatName:function(e){var t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){for(var i="",o=0,n=e.length-2;o<n;o++)i+="*";t=e.substr(0,1)+i+e.substr(-1,1)}else t=e;return t}}};t.default=o},2:function(e,t,i){"use strict";i.r(t);var o=i(3),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},26:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"\ue693","uicon-column-line":"\ue68e","uicon-checkbox-mark":"\ue807","uicon-folder":"\ue7f5","uicon-movie":"\ue7f6","uicon-star-fill":"\ue669","uicon-star":"\ue65f","uicon-phone-fill":"\ue64f","uicon-phone":"\ue622","uicon-apple-fill":"\ue881","uicon-chrome-circle-fill":"\ue885","uicon-backspace":"\ue67b","uicon-attach":"\ue632","uicon-cut":"\ue948","uicon-empty-car":"\ue602","uicon-empty-coupon":"\ue682","uicon-empty-address":"\ue646","uicon-empty-favor":"\ue67c","uicon-empty-permission":"\ue686","uicon-empty-news":"\ue687","uicon-empty-search":"\ue664","uicon-github-circle-fill":"\ue887","uicon-rmb":"\ue608","uicon-person-delete-fill":"\ue66a","uicon-reload":"\ue788","uicon-order":"\ue68f","uicon-server-man":"\ue6bc","uicon-search":"\ue62a","uicon-fingerprint":"\ue955","uicon-more-dot-fill":"\ue630","uicon-scan":"\ue662","uicon-share-square":"\ue60b","uicon-map":"\ue61d","uicon-map-fill":"\ue64e","uicon-tags":"\ue629","uicon-tags-fill":"\ue651","uicon-bookmark-fill":"\ue63b","uicon-bookmark":"\ue60a","uicon-eye":"\ue613","uicon-eye-fill":"\ue641","uicon-mic":"\ue64a","uicon-mic-off":"\ue649","uicon-calendar":"\ue66e","uicon-calendar-fill":"\ue634","uicon-trash":"\ue623","uicon-trash-fill":"\ue658","uicon-play-left":"\ue66d","uicon-play-right":"\ue610","uicon-minus":"\ue618","uicon-plus":"\ue62d","uicon-info":"\ue653","uicon-info-circle":"\ue7d2","uicon-info-circle-fill":"\ue64b","uicon-question":"\ue715","uicon-error":"\ue6d3","uicon-close":"\ue685","uicon-checkmark":"\ue6a8","uicon-android-circle-fill":"\ue67e","uicon-android-fill":"\ue67d","uicon-ie":"\ue87b","uicon-IE-circle-fill":"\ue889","uicon-google":"\ue87a","uicon-google-circle-fill":"\ue88a","uicon-setting-fill":"\ue872","uicon-setting":"\ue61f","uicon-minus-square-fill":"\ue855","uicon-plus-square-fill":"\ue856","uicon-heart":"\ue7df","uicon-heart-fill":"\ue851","uicon-camera":"\ue7d7","uicon-camera-fill":"\ue870","uicon-more-circle":"\ue63e","uicon-more-circle-fill":"\ue645","uicon-chat":"\ue620","uicon-chat-fill":"\ue61e","uicon-bag-fill":"\ue617","uicon-bag":"\ue619","uicon-error-circle-fill":"\ue62c","uicon-error-circle":"\ue624","uicon-close-circle":"\ue63f","uicon-close-circle-fill":"\ue637","uicon-checkmark-circle":"\ue63d","uicon-checkmark-circle-fill":"\ue635","uicon-question-circle-fill":"\ue666","uicon-question-circle":"\ue625","uicon-share":"\ue631","uicon-share-fill":"\ue65e","uicon-shopping-cart":"\ue621","uicon-shopping-cart-fill":"\ue65d","uicon-bell":"\ue609","uicon-bell-fill":"\ue640","uicon-list":"\ue650","uicon-list-dot":"\ue616","uicon-zhihu":"\ue6ba","uicon-zhihu-circle-fill":"\ue709","uicon-zhifubao":"\ue6b9","uicon-zhifubao-circle-fill":"\ue6b8","uicon-weixin-circle-fill":"\ue6b1","uicon-weixin-fill":"\ue6b2","uicon-twitter-circle-fill":"\ue6ab","uicon-twitter":"\ue6aa","uicon-taobao-circle-fill":"\ue6a7","uicon-taobao":"\ue6a6","uicon-weibo-circle-fill":"\ue6a5","uicon-weibo":"\ue6a4","uicon-qq-fill":"\ue6a1","uicon-qq-circle-fill":"\ue6a0","uicon-moments-circel-fill":"\ue69a","uicon-moments":"\ue69b","uicon-qzone":"\ue695","uicon-qzone-circle-fill":"\ue696","uicon-baidu-circle-fill":"\ue680","uicon-baidu":"\ue681","uicon-facebook-circle-fill":"\ue68a","uicon-facebook":"\ue689","uicon-car":"\ue60c","uicon-car-fill":"\ue636","uicon-warning-fill":"\ue64d","uicon-warning":"\ue694","uicon-clock-fill":"\ue638","uicon-clock":"\ue60f","uicon-edit-pen":"\ue612","uicon-edit-pen-fill":"\ue66b","uicon-email":"\ue611","uicon-email-fill":"\ue642","uicon-minus-circle":"\ue61b","uicon-minus-circle-fill":"\ue652","uicon-plus-circle":"\ue62e","uicon-plus-circle-fill":"\ue661","uicon-file-text":"\ue663","uicon-file-text-fill":"\ue665","uicon-pushpin":"\ue7e3","uicon-pushpin-fill":"\ue86e","uicon-grid":"\ue673","uicon-grid-fill":"\ue678","uicon-play-circle":"\ue647","uicon-play-circle-fill":"\ue655","uicon-pause-circle-fill":"\ue654","uicon-pause":"\ue8fa","uicon-pause-circle":"\ue643","uicon-eye-off":"\ue648","uicon-eye-off-outline":"\ue62b","uicon-gift-fill":"\ue65c","uicon-gift":"\ue65b","uicon-rmb-circle-fill":"\ue657","uicon-rmb-circle":"\ue677","uicon-kefu-ermai":"\ue656","uicon-server-fill":"\ue751","uicon-coupon-fill":"\ue8c4","uicon-coupon":"\ue8ae","uicon-integral":"\ue704","uicon-integral-fill":"\ue703","uicon-home-fill":"\ue964","uicon-home":"\ue965","uicon-hourglass-half-fill":"\ue966","uicon-hourglass":"\ue967","uicon-account":"\ue628","uicon-plus-people-fill":"\ue626","uicon-minus-people-fill":"\ue615","uicon-account-fill":"\ue614","uicon-thumb-down-fill":"\ue726","uicon-thumb-down":"\ue727","uicon-thumb-up":"\ue733","uicon-thumb-up-fill":"\ue72f","uicon-lock-fill":"\ue979","uicon-lock-open":"\ue973","uicon-lock-opened-fill":"\ue974","uicon-lock":"\ue97a","uicon-red-packet-fill":"\ue690","uicon-photo-fill":"\ue98b","uicon-photo":"\ue98d","uicon-volume-off-fill":"\ue659","uicon-volume-off":"\ue644","uicon-volume-fill":"\ue670","uicon-volume":"\ue633","uicon-red-packet":"\ue691","uicon-download":"\ue63c","uicon-arrow-up-fill":"\ue6b0","uicon-arrow-down-fill":"\ue600","uicon-play-left-fill":"\ue675","uicon-play-right-fill":"\ue676","uicon-rewind-left-fill":"\ue679","uicon-rewind-right-fill":"\ue67a","uicon-arrow-downward":"\ue604","uicon-arrow-leftward":"\ue601","uicon-arrow-rightward":"\ue603","uicon-arrow-upward":"\ue607","uicon-arrow-down":"\ue60d","uicon-arrow-right":"\ue605","uicon-arrow-left":"\ue60e","uicon-arrow-up":"\ue606","uicon-skip-back-left":"\ue674","uicon-skip-forward-right":"\ue672","uicon-rewind-right":"\ue66f","uicon-rewind-left":"\ue671","uicon-arrow-right-double":"\ue68d","uicon-arrow-left-double":"\ue68c","uicon-wifi-off":"\ue668","uicon-wifi":"\ue667","uicon-empty-data":"\ue62f","uicon-empty-history":"\ue684","uicon-empty-list":"\ue68b","uicon-empty-page":"\ue627","uicon-empty-order":"\ue639","uicon-man":"\ue697","uicon-woman":"\ue69c","uicon-man-add":"\ue61c","uicon-man-add-fill":"\ue64c","uicon-man-delete":"\ue61a","uicon-man-delete-fill":"\ue66a","uicon-zh":"\ue70a","uicon-en":"\ue692"}},27:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=o},3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(i(26)),n=u(i(27));function u(e){return e&&e.__esModule?e:{default:e}}weex.requireModule("dom").addRule("fontFace",{fontFamily:"uicon-iconfont",src:"url('".concat("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf","')")});var r={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{uClasses:function(){var e=[];return e.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&e.push("u-icon__icon--"+this.color),e},iconStyle:function(){var e={};return e={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(e.color=this.color),e},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var e={};return e.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),e.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),e},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(e){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(e)}}};t.default=r},342:function(e,t,i){"use strict";var o=i(742),n=i(662),u=i(0);var r=Object(u.a)(n.default,o.b,o.c,!1,null,null,"d1caa018",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(933).default,this.options.style):Object.assign(this.options.style,i(933).default)}).call(r),t.default=r.exports},4:function(e,t){e.exports={"u-icon":{alignItems:"center"},"u-icon--left":{flexDirection:"row-reverse",alignItems:"center"},"u-icon--right":{flexDirection:"row",alignItems:"center"},"u-icon--top":{flexDirection:"column-reverse",justifyContent:"center"},"u-icon--bottom":{flexDirection:"column",justifyContent:"center"},"u-icon__icon":{fontFamily:"uicon-iconfont",position:"relative",flexDirection:"row",alignItems:"center"},"u-icon__icon--primary":{color:"#3c9cff"},"u-icon__icon--success":{color:"#5ac725"},"u-icon__icon--error":{color:"#f56c6c"},"u-icon__icon--warning":{color:"#f9ae3d"},"u-icon__icon--info":{color:"#909399"},"@VERSION":2}},5:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:["u-icon"],class:["u-icon--"+e.labelPos],on:{click:e.clickHandler}},[e.isImg?i("u-image",{staticClass:["u-icon__img"],style:[e.imgStyle,e.$u.addStyle(e.customStyle)],attrs:{src:e.name,mode:e.imgMode}}):i("u-text",{staticClass:["u-icon__icon"],class:e.uClasses,style:[e.iconStyle,e.$u.addStyle(e.customStyle)],appendAsTree:!0,attrs:{hoverClass:e.hoverClass,append:"tree"}},[e._v(e._s(e.icon))]),""!==e.label?i("u-text",{staticClass:["u-icon__label"],style:{color:e.labelColor,fontSize:e.$u.addUnit(e.labelSize),marginLeft:"right"==e.labelPos?e.$u.addUnit(e.space):0,marginTop:"bottom"==e.labelPos?e.$u.addUnit(e.space):0,marginRight:"left"==e.labelPos?e.$u.addUnit(e.space):0,marginBottom:"top"==e.labelPos?e.$u.addUnit(e.space):0},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.label))]):e._e()],1)},n=[]},6:function(e,t,i){"use strict";i.r(t);var o=i(5),n=i(2);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);var r=i(0);var l=Object(r.a)(n.default,o.b,o.c,!1,null,"63fb8f8b","7b59562c",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(7).default,this.options.style):Object.assign(this.options.style,i(7).default)}).call(l),t.default=l.exports},61:function(e,t,i){"use strict";i.r(t);var o=i(62),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},62:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=(o=i(116))&&o.__esModule?o:{default:o};var u={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{linkStyle:function(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink:function(){plus.runtime.openURL(this.href),this.$emit("click")}}};t.default=u},63:function(e,t){e.exports={"u-link":{flexDirection:"row",flexWrap:"wrap",flex:1},"@VERSION":2}},65:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;return(this._self._c||e)("u-text",{staticClass:["u-link"],style:[this.linkStyle,this.$u.addStyle(this.customStyle)],appendAsTree:!0,attrs:{append:"tree"},on:{click:this.openLink}},[this._v(this._s(this.text))])},n=[]},662:function(e,t,i){"use strict";var o=i(663),n=i.n(o);t.default=n.a},663:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLoad:function(){},methods:{clickHandler:function(){uni.$u.toast("\u8bf7\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5185\u67e5\u770b\u6548\u679c")}}};t.default=o},664:function(e,t){e.exports={"u-page__text-item":{marginRight:"10",flex:1},"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},68:function(e,t,i){"use strict";i.r(t);var o=i(69),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},69:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(i(117)),n=u(i(101));function u(e){return e&&e.__esModule?e:{default:e}}var r={name:"u--text",mixins:[uni.$u.mpMixin,n.default,uni.$u.mixin],components:{uvText:o.default}};t.default=r},7:function(e,t,i){"use strict";i.r(t);var o=i(4),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},70:function(e,t,i){"use strict";i.r(t);var o=i(71),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},71:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(i(118)),n=(u(i(91)),u(i(92)),u(i(101)));function u(e){return e&&e.__esModule?e:{default:e}}var r={name:"u--text",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,n.default],computed:{valueStyle:function(){var e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:uni.$u.addUnit(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=uni.$u.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},isNvue:function(){return!0,!0},isMp:function(){return!1}},data:function(){return{}},methods:{clickHandler:function(){"phone"===this.mode&&uni.$u.test.mobile(this.text)&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};t.default=r},72:function(e,t){e.exports={"u-text":{flexDirection:"row",alignItems:"center",flexWrap:"nowrap",flex:1},"u-text__price":{fontSize:"14",color:"#606266"},"u-text__value":{fontSize:"14",flexDirection:"row",color:"#606266",flexWrap:"wrap",textOverflow:"ellipsis",alignItems:"center"},"u-text__value--primary":{color:"#3c9cff"},"u-text__value--warning":{color:"#f9ae3d"},"u-text__value--success":{color:"#5ac725"},"u-text__value--info":{color:"#909399"},"u-text__value--error":{color:"#f56c6c"},"u-text__value--main":{color:"#303133"},"u-text__value--content":{color:"#606266"},"u-text__value--tips":{color:"#909193"},"u-text__value--light":{color:"#c0c4cc"},"@VERSION":2}},742:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return o}));var o={"u-Text":i(114).default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["u-page"]},[i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u7840\u529f\u80fd")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{text:"\u6211\u7528\u5341\u5e74\u9752\u6625,\u8d74\u4f60\u6700\u540e\u4e4b\u7ea6"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bbe\u7f6e\u4e3b\u9898")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{text:"\u4e3b\u8272",type:"primary"}})],1),i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{type:"error",text:"\u9519\u8bef"}})],1),i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{type:"success",text:"\u6210\u529f"}})],1),i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{type:"warning",text:"\u8b66\u544a"}})],1),i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{type:"info",text:"\u4fe1\u606f"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u62e8\u6253\u7535\u8bdd")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{mode:"phone",text:"15019479320"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u65e5\u671f\u683c\u5f0f\u5316")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{mode:"date",text:"1612959739"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u59d3\u540d\u8131\u654f")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{mode:"name",text:"\u5f20\u4e09\u4e09",format:"encrypt"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8d85\u94fe\u63a5")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{mode:"link",text:"Go to uView docs",href:"https://www.uviewui.com"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u663e\u793a\u91d1\u989d")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{mode:"price",text:"728732.32"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u524d\u540e\u56fe\u6807")]),i("view",{staticClass:["u-demo-block__content"]},[i("view",{staticClass:["u-page__text-item"],staticStyle:{marginRight:"50px"}},[i("u--text",{attrs:{prefixIcon:"baidu",iconStyle:"font-size: 19px",text:"\u767e\u5ea6\u4e00\u4e0b"}})],1),i("view",{staticClass:["u-page__text-item"]},[i("u--text",{attrs:{suffixIcon:"arrow-rightward",iconStyle:"font-size: 18px",text:"\u67e5\u770b\u66f4\u591a"}})],1)])]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8d85\u51fa\u9690\u85cf")]),i("view",{staticClass:["u-demo-block__content"]},[i("u--text",{attrs:{lines:2,text:"\u5173\u4e8euView\u7684\u53d6\u540d\u6765\u7531\uff0c\u9996\u5b57\u6bcdu\u6765\u81ea\u4e8euni-app\u9996\u5b57\u6bcd\uff0cuni-app\u662f\u57fa\u4e8eVue.js\uff0cVue\u548cView(\u5ef6\u4f38\u4e3aUI\u3001\u89c6\u56fe\u4e4b\u610f)\u540c\u97f3\uff0c\u540c\u65f6view\u7ec4\u4ef6uni-app\u4e2d \u6700\u57fa\u7840\uff0c\u6700\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u6545\u53d6\u540duView\uff0c\u8868\u8fbe\u6e90\u4e8euni-app\u548cVue\u4e4b\u610f\uff0c\u540c\u65f6\u5728\u6b64\u4e5f\u5bf9\u5b83\u4eec\u8868\u793a\u611f\u8c22\u3002"}})],1)]),i("view",{staticClass:["u-demo-block"]},[i("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5c0f\u7a0b\u5e8f\u5f00\u653e\u80fd\u529b")]),i("view",{staticClass:["u-demo-block__content"]},[i("u--text",{attrs:{text:"\u5206\u4eab\u5230\u5fae\u4fe1",openType:"share",type:"success"},on:{click:e.clickHandler}})],1)])])])},u=[]},76:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("uvText",{attrs:{type:e.type,show:e.show,text:e.text,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,mode:e.mode,href:e.href,format:e.format,call:e.call,openType:e.openType,bold:e.bold,block:e.block,lines:e.lines,color:e.color,size:e.size,iconStyle:e.iconStyle,margin:e.margin,lineHeight:e.lineHeight,align:e.align,wordWrap:e.wordWrap,customStyle:e.customStyle},on:{click:function(t){e.$emit("click")}}})},n=[]},77:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return o}));var o={uIcon:i(6).default,uLink:i(115).default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("view",{staticClass:["u-text"],class:[],style:{margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"},on:{click:e.clickHandler}},["price"===e.mode?i("u-text",{class:["u-text__price",e.type&&"u-text__value--"+e.type],style:[e.valueStyle],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\uffe5")]):e._e(),e.prefixIcon?i("view",{staticClass:["u-text__prefix-icon"]},[i("u-icon",{attrs:{name:e.prefixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e(),"link"===e.mode?i("u-link",{attrs:{text:e.value,href:e.href,underLine:!0}}):e.openType&&e.isMp?[i("button",{staticClass:["u-reset-button","u-text__value"],style:[e.valueStyle],attrs:{dataIndex:e.index,openType:e.openType,lang:e.lang,sessionFrom:e.sessionFrom,sendMessageTitle:e.sendMessageTitle,sendMessagePath:e.sendMessagePath,sendMessageImg:e.sendMessageImg,showMessageCard:e.showMessageCard,appParameter:e.appParameter},on:{getuserinfo:e.onGetUserInfo,contact:e.onContact,getphonenumber:e.onGetPhoneNumber,error:e.onError,launchapp:e.onLaunchApp,opensetting:e.onOpenSetting}},[e._v("\n                "+e._s(e.value)+"\n            ")])]:i("u-text",{staticClass:["u-text__value"],class:[e.type&&"u-text__value--"+e.type,e.lines&&"u-line-"+e.lines],style:[e.valueStyle],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.value))]),e.suffixIcon?i("view",{staticClass:["u-text__suffix-icon"]},[i("u-icon",{attrs:{name:e.suffixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e()],2):e._e()},u=[]},8:function(e,t,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(9).default,Vue.prototype.__$appStyle__)},9:function(e,t,i){"use strict";i.r(t);var o=i(1),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a},91:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};t.default=o},92:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{openType:String},methods:{onGetUserInfo:function(e){this.$emit("getuserinfo",e.detail)},onContact:function(e){this.$emit("contact",e.detail)},onGetPhoneNumber:function(e){this.$emit("getphonenumber",e.detail)},onError:function(e){this.$emit("error",e.detail)},onLaunchApp:function(e){this.$emit("launchapp",e.detail)},onOpenSetting:function(e){this.$emit("opensetting",e.detail)}}};t.default=o},933:function(e,t,i){"use strict";i.r(t);var o=i(664),n=i.n(o);for(var u in o)"default"!==u&&function(e){i.d(t,e,(function(){return o[e]}))}(u);t.default=n.a}});