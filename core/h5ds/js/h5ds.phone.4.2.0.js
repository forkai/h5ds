!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=246)}({13:function(e,t,i){"use strict";function n(e){"phone"===e?(r.appType="phone",r.appHeight=514,r.appWidth=320):(r.appType="pc",r.appHeight=600,r.appWidth=1e3)}Object.defineProperty(t,"__esModule",{value:!0}),t.setConfig=n;var s=i(62),o=function(e){return e&&e.__esModule?e:{default:e}}(s),r={appType:"phone",blankImg:"",version:o.default.version,appHeight:514,appWidth:320},d=r;t.default=d;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"config","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/core/conf/global.js"),__REACT_HOT_LOADER__.register(n,"setConfig","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/core/conf/global.js"),__REACT_HOT_LOADER__.register(d,"default","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/core/conf/global.js"))}()},16:function(e,t,i){"use strict";function n(e,t){e&&e[0]&&$(document).trigger("h5ds.swiperAfter",{$in:e,$out:t}),$(".layer-val").each(function(){$(this).closest(".layer").off("mousedown touchstart")})}Object.defineProperty(t,"__esModule",{value:!0}),t.swiperAfter=n;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"swiperAfter","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.swiper.after.js")}()},246:function(e,t,i){e.exports=i(247)},247:function(e,t,i){"use strict";i(248),i(42);var n=i(41),s=i(249),o=i(13),r=function(e){return e&&e.__esModule?e:{default:e}}(o),d=i(16),a=i(28);$(function(){(0,n.langPage)(),(0,n.isBuild)()&&((0,n.ispc)()&&(0,s.initPcHtml)(),(0,n.lazyLoad)(),$(document).on("h5ds.loadingEnd",function(){var e=$("#h5dsSwiper");if((0,n.ispc)())e.css({width:r.default.appWidth,height:r.default.appHeight});else{var t=function(){var e=(0,n.getScale)();$("#h5dsPopups, #h5dsSwiper").find(".h5ds-swiper-pageinner").children().each(function(){(0,n.setSize)($(this),e)}),$("#h5dsFixedsUp, #h5dsFixedsDown").find(".h5ds-swiper-pageinner").children().each(function(){(0,n.setSize)($(this),e,!0)})};t(),$(window).resize(function(){t(),(0,n.setAdsorbent)()})}(0,n.setAdsorbent)();var i=null;i=window.sliderAnimate?window.sliderAnimate:{name:"上下隐藏",inNext:"pt-page-moveFromBottomFade",outNext:"pt-page-moveToTopFade",inPrev:"pt-page-moveFromTopFade",outPrev:"pt-page-moveToBottomFade"};var o=$.extend(i),c=e.h5dsSwiper(o);(0,a.swiperBefore)($("#h5dsFixedsUp").find(".h5ds-swiper-page")),(0,a.swiperBefore)($("#h5dsFixedsDown").find(".h5ds-swiper-page")),(0,d.swiperAfter)($("#h5dsFixedsUp").find(".h5ds-swiper-page")),(0,d.swiperAfter)($("#h5dsFixedsDown").find(".h5ds-swiper-page")),(0,n.ispc)()&&(0,s.initPcEvent)(c)}))})},248:function(e,t){},249:function(e,t,i){"use strict";function n(){var e=$("body").html();$("body").html('\n        <div class="pc-body">\n            <div class="pc-phone"></div>\n            <div class="pc-infos">\n                <h1 class="pc-title"></h1>\n                <h2 class="pc-desc"></h2>\n                <div class="pc-btns">\n                    <a class="pc-prev">上一页</a>\n                    <a class="pc-next">下一页</a>\n                </div>\n                <div class="pc-pages">\n                    <ul class="pc-dots">\n                        <li class="pc-dots-active"></li>\n                    </ul>\n                </div>\n                <div class="pc-qrcode"></div>\n            </div>\n        </div>\n        <div class="pc-wave">\n            <canvas id="wave"></canvas>\n        </div>\n        <div class="pc-powerby">\n            power by <a target="_blank" href="http://www.h5ds.com">h5ds.com</a>\n        </div>\n    '),$(".pc-phone").html(e),r(),(0,a.drawWave)(c)}function s(e){for(var t="",i=0;i<e;i++)t+="<li></li>";$(".pc-dots").html(t),o(0)}function o(e){$(".pc-dots").find("li").eq(e).addClass("pc-dots-active").siblings(".pc-dots-active").removeClass("pc-dots-active");var t=$("#h5dsSwiper").find(".h5ds-swiper-page").eq(e),i=unescape(t.attr("data-title")),n=unescape(t.attr("data-desc"));"undefined"===n&&(n=""),$(".pc-title").html(i),$(".pc-desc").html(n)}function r(){new window.QRCode($(".pc-qrcode")[0],{text:window.location.href,width:120,height:120,colorLight:"#ffffff",colorDark:"#000000"})}function d(e){var t=$("#h5dsSwiper"),i=t.find(".h5ds-swiper-page").length,n=0;t.on("h5ds_up h5ds_right",function(e,t){n=t.outIndex+1,n>i-1&&(n=0),o(n)}).on("h5ds_down h5ds_left",function(e,t){n=t.outIndex-1,n<0&&(n=i-1),o(n)}),s(i),$(document).on("click",".pc-next",function(){n++,n>i-1&&(n=0),e.toPage(n)&&o(n)}).on("click",".pc-prev",function(){n--,n<0&&(n=i-1),e.toPage(n)&&o(n)}).on("click",".pc-dots li",function(t){n=$(this).index(),e.toPage(n)&&o(n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.initPcHtml=n,t.initPcEvent=d;var a=i(250),c={color1:"rgba(0,120,255,.3)",color2:"rgba(0,120,255,.6)"};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"obj","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"),__REACT_HOT_LOADER__.register(n,"initPcHtml","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"),__REACT_HOT_LOADER__.register(s,"addDots","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"),__REACT_HOT_LOADER__.register(o,"setDots","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"),__REACT_HOT_LOADER__.register(r,"iniQrcode","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"),__REACT_HOT_LOADER__.register(d,"initPcEvent","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/inpc.js"))}()},250:function(e,t,i){"use strict";function n(e){var t=document.getElementById("wave"),i=t.getContext("2d"),n=t.width=window.innerWidth,s=t.height=window.innerHeight,o=function(e,t){var o=e.points||[];e.xOffset+=e.speed,i.beginPath();for(var r=.7*s,d=0;d<n;d+=50){var a=-Math.sin(d*e.waveWidth+e.xOffset);o.push([d,r+a*e.waveHeight]),i.lineTo(d,r+a*e.waveHeight)}i.lineTo(d,r+-Math.sin(d*e.waveWidth+e.xOffset)*e.waveHeight),i.lineTo(n,s),i.lineTo(0,s),i.lineTo(o[0][0],o[0][1]),i.fillStyle=t,i.fill()},r=[{waveWidth:.006,waveHeight:40,speed:.02,xOffset:100,points:null},{waveWidth:.006,waveHeight:26,speed:.04,xOffset:0,points:null}];window.addEventListener("resize",function(){n=t.width=window.innerWidth,s=t.height=window.innerHeight}),function t(){i.clearRect(0,0,n,s),o(r[0],e.color1),o(r[1],e.color2),requestAnimationFrame(t)}()}Object.defineProperty(t,"__esModule",{value:!0}),t.drawWave=n;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"drawWave","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/phone/wave.js")}()},28:function(e,t,i){"use strict";function n(e,t){e&&e[0]&&$(document).trigger("h5ds.swiperBefore",{$in:e,$out:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.swiperBefore=n;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"swiperBefore","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.swiper.before.js")}()},41:function(e,t,i){"use strict";function n(e){for(var t={},i=[],n=0;n<e.length;n++){var s=e[n];t[s]||(t[s]=!0,i.push(s))}return i}function s(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){i=!1;break}return i}function o(){var e=!1;return window.IMG_SOURCE&&(e=!0),e}function r(){var e=null,t=$("#h5dsLoading"),i=$("#h5dsProgress");t.show(),$(document).on("loadbar",function(e,n){i.text(100*n.toFixed(2)+"%"),1===n&&setTimeout(function(){t.hide(),d(),$(document).trigger("h5ds.loadingEnd","#h5dsSwiper")},200)});var s=[];if(s=$.isArray(window.IMG_SOURCE)?window.IMG_SOURCE:JSON.parse(window.IMG_SOURCE),s=n(s),0===s.length)$(document).trigger("loadbar",1);else{var o=0,r=function(){o/s.length==1&&e&&clearTimeout(e),$(document).trigger("loadbar",o/s.length)};s.forEach(function(e,t){if(!(t>20)){var i=new Image;i.onload=function(){o++,r()},i.onerror=function(){o++,r()},i.src=e}})}e=setTimeout(function(){$(document).trigger("loadbar",1)},5e3)}function d(){var e=$("#h5dsBgMusic"),t=$(".h5ds-video-icon"),i=e.attr("src");if(e[0]&&""!==i)try{e[0].src=i,e[0].play(),$(document).one("WeixinJSBridgeReady",function(){e[0].play()}),t.addClass("h5ds-video-iconing")}catch(e){}t.swipe({tap:function(t){$(this).hasClass("h5ds-video-iconing")?(e[0].pause(),$(this).removeClass("h5ds-video-iconing")):(e[0].play(),$(this).addClass("h5ds-video-iconing"))}})}function a(e,t,i){var n=i?_.default.appWidth:e.width(),s=i?_.default.appHeight:e.height(),o=window,r=o.innerWidth,d=o.innerHeight,a=(d-s*t)/2;a<0&&(a=0),e.css({left:(r-n*t)/2,top:a,transform:"scale("+t+")"})}function c(){var e=_.default.appWidth,t=_.default.appHeight,i=window,n=i.innerWidth,s=i.innerHeight,o=n/e,r=s/t;return o>r?r:o}function p(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}function l(){var e=c(),t=function(t){var i=$(this),n=JSON.parse(i.attr("data-adsorbent")),s={};void 0!==n.abottom&&(s.bottom=-t/e>0?0:-t/e),void 0!==n.atop&&(s.top=0),void 0!==n.aleft&&(s.left=0),void 0!==n.aright&&(s.right=0),i.css(s)},i=function(i){var n=$(i);if(n[0]){var s=n.children().children().children(),o=s.height()*e,r=(window.innerHeight-o)/2;n.find("[data-adsorbent]").each(function(){t.bind(this)(r)})}};i("#h5dsSwiper"),i("#h5dsFixedsUp"),i("#h5dsFixedsDown"),i("#h5dsPopups")}function h(){$("#h5dsSwiper").find('[data-langpage="true"]').each(function(){var e=$(this).parent(".h5ds-swiper-page"),t=$(this).children();e.prev()[0]&&t.append('<div class="h5ds-pageprev">上</div>'),e.next()[0]&&t.append('<div class="h5ds-pagenext">下</div>')})}Object.defineProperty(t,"__esModule",{value:!0}),t.ispc=s,t.isBuild=o,t.lazyLoad=r,t.autoPlayMusic=d,t.setSize=a,t.getScale=c,t.isWeiXin=p,t.setAdsorbent=l,t.langPage=h;var u=i(13),_=function(e){return e&&e.__esModule?e:{default:e}}(u);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"uniqueArr","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(s,"ispc","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(o,"isBuild","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(r,"lazyLoad","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(d,"autoPlayMusic","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(a,"setSize","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(c,"getScale","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(p,"isWeiXin","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(l,"setAdsorbent","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"),__REACT_HOT_LOADER__.register(h,"langPage","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.utils.js"))}()},42:function(e,t,i){"use strict";i(43),i(44),i(45),i(46),i(47);var n=i(48),s=i(50),o=i(16),r=i(28);$.fn.h5dsSwiper=function(e){var t=this;(0,s.mountWill)(this);var i=$(this),d={inNext:"pt-page-moveFromBottom",outNext:"pt-page-moveToTop",inPrev:"pt-page-moveFromTop",outPrev:"pt-page-moveToBottom",direction:"up",loop:!0,animated:!1,pageTime:800,len:i.find(".h5ds-swiper-page").length},a=null;this.pageIndex=0;var c=$.extend(d,e),p=function(e,n,s){if(c.animated=!0,t.pageIndex=e.index(),(0,r.swiperBefore)(e,n),c.len<=1)return void(0,o.swiperAfter)(e,n);i.trigger("h5ds.animateStart",e.index()),e.addClass(c["in"+s]+" h5ds-swiper-current"),n.addClass(c["out"+s]+" h5ds-swiper-current");var d=e.find('[data-noSwiper="noSwiper"]');d[0]&&d.addClass("noSwiper"),a&&clearTimeout(a),a=setTimeout(function(){e.find(".h5ds-swiper-layers").css("display","block"),n.find(".h5ds-swiper-layers").css("display","none"),e.removeClass(c["in"+s]),n.removeClass(c["out"+s]),n.removeClass("h5ds-swiper-current"),c.animated=!1,i.trigger("h5ds.animateEnd",{direc:s,outIndex:e.index()}),l(),(0,o.swiperAfter)(e,n)},c.pageTime)},l=function(){var e=i.find(".h5ds-swiper-current"),t=e.attr("data-autoplay");return"false"!==t&&(c.animated=!0,i.trigger("h5ds.animateStart",e.index()),setTimeout(function(){i.trigger("h5ds_"+c.direction,{$out:e,outIndex:e.index()})},1e3*t)),t};return l(),i.swipe({excludedElements:"button, input, select, textarea, a, .noSwiper",swipe:function(e,t,n,s,o,r){var d=$(e.target),a=d.closest(".h5ds-swiper-page"),p=a.index(),l=a.attr("data-lock"),h=a.attr("data-autoplay");c.animated||"true"!==l&&"false"===h&&i.trigger("h5ds_"+t,{$out:a,outIndex:p})}}).off("h5ds_up h5ds_down h5ds_right h5ds_left").on("h5ds_up h5ds_right",function(e,t){var n=t.$out,s=t.outIndex,o=0;if(s===c.len-1){if(!c.loop)return}else o=s+1;var r=i.find(".h5ds-swiper-page").eq(o);p(r,n,"Next")}).on("h5ds_down h5ds_left",function(e,t){var n=t.$out,s=t.outIndex,o=0;if(0===s){if(!c.loop)return;o=c.len-1}else o=s-1;var r=i.find(".h5ds-swiper-page").eq(o);p(r,n,"Prev")}),this.toPage=function(e){if(c.animated)return!1;var t=$(".h5ds-swiper-current"),n=t.index(),s=i.find(".h5ds-swiper-page").eq(e);return!!s[0]&&(n!==e&&(p(s,t,n<e?"Next":"Prev"),!0))},(0,n.mountDid)(this),this}},43:function(e,t){},44:function(e,t){},45:function(e,t){},46:function(e,t){},47:function(e,t){},48:function(e,t,i){"use strict";function n(e){var t=$(e).find(".h5ds-swiper-page");1===t.length&&(t.eq(0).addClass("h5ds-swiper-current"),t.eq(0).find(".h5ds-swiper-layers").css("display","block")),(0,s.initH5dsSwiperUeFun)(e),$(document).on("click",".h5ds-pagenext",function(){e.toPage(e.pageIndex+1)}).on("click",".h5ds-pageprev",function(){e.toPage(e.pageIndex-1)}),$(document).trigger("h5ds.mountDid",{self:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.mountDid=n;var s=i(49);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"mountDid","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.mount.did.js")}()},49:function(e,t,i){"use strict";function n(e){$(document).find("[data-uefun]").each(function(){var t=$(this),i=t.attr("data-uefun");if(i){try{i=JSON.parse(unescape(i))}catch(e){i=null}i&&t.swipe({tap:function(n){if(0!=$(n.target).css("opacity"))for(var c in i)switch(c){case"link":s(i[c],t,e);break;case"toPage":d(i[c],t,e);break;case"tel":r(i[c],t,e);break;case"msg":o(i[c],t,e);break;case"hideShow":a(i[c],t,e)}}})}})}function s(e,t,i){location.href=e}function o(e,t,i){location.href="sms:"+e}function r(e,t,i){location.href="tel:"+e}function d(e,t,i){i&&i.toPage(e)}function a(e,t,i){var n=[];try{n=e.ids.split(",")}catch(e){}"hide"===e.type?n.forEach(function(e,t){$(e).hide(),(0,c.swiperAfter)(window.toHideShowCache,$(e))}):"show"===e.type?n.forEach(function(e,i){$(e).show(),window.toHideShowCache=t.closest(".h5ds-swiper-page"),(0,c.swiperAfter)($(e),window.toHideShowCache)}):"hideshow"===e.type&&n.forEach(function(e,i){var n=$(e);n.is(":hidden")?(n.show(),window.toHideShowCache=t.closest(".h5ds-swiper-page"),(0,c.swiperAfter)($(e),window.toHideShowCache)):(n.hide(),(0,c.swiperAfter)(window.toHideShowCache,$(e)))})}Object.defineProperty(t,"__esModule",{value:!0}),t.initH5dsSwiperUeFun=n;var c=i(16);window;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"initH5dsSwiperUeFun","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"),__REACT_HOT_LOADER__.register(s,"toLink","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"),__REACT_HOT_LOADER__.register(o,"toMsg","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"),__REACT_HOT_LOADER__.register(r,"toTel","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"),__REACT_HOT_LOADER__.register(d,"toPage","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"),__REACT_HOT_LOADER__.register(a,"toHideShow","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.ue.js"))}()},50:function(e,t,i){"use strict";function n(e){$(document).trigger("h5ds.mountWill",{self:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.mountWill=n;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"mountWill","C:/DT/h5ds/H5DS_All/h5ds-edit-hm/src/app/common/h5ds.mount.will.js")}()},62:function(e,t){e.exports={name:"h5ds",version:"4.2.0",description:"Mantou",keywords:["ui","html5"],homepage:"http://www.h5ds.com",author:"mantou",license:"other",devDependencies:{autoprefixer:"^7.1.2","babel-cli":"^6.26.0","babel-eslint":"^7.2.3","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-import":"^1.6.3","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","case-sensitive-paths-webpack-plugin":"^2.1.2","clean-webpack-plugin":"^0.1.17","copy-webpack-plugin":"^4.2.0","css-loader":"^0.26.1",cssnano:"^3.10.0",eslint:"^3.19.0","eslint-plugin-react":"^7.7.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^0.10.0",gulp:"^3.9.1","gulp-bump":"^2.7.0","gulp-sftp":"^0.1.5","html-inject-webpack-plugin":"^1.0.0","html-loader":"^0.5.1","html-webpack-plugin":"^2.30.1",less:"^3.0.1","less-loader":"^4.0.6",mddir:"^1.1.1","postcss-loader":"^2.0.6",precss:"^2.0.0","react-hot-loader":"^1.3.1","style-loader":"^0.13.1","uglifyjs-webpack-plugin":"^0.2.1","url-loader":"^0.5.7",webpack:"^3.5.4","webpack-dev-server":"^2.7.1","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-node-externals":"^1.7.2"},scripts:{start:"npm run dev",dev:"webpack-dev-server --config build/webpack.config.dev.babel.js --open",build:"webpack --config build/webpack.config.prod.babel.js --colors --display-error-details --progress",lib:"webpack --config build/webpack.config.lib.babel.js --colors --display-error-details --progress",app:"webpack --config build/webpack.config.app.babel.js --colors --display-error-details --progress",bump:"gulp bump"},dependencies:{antd:"^3.0.3","copy-to-clipboard":"^3.0.8",dayjs:"^1.7.4",echarts:"^4.1.0",html2canvas:"^1.0.0-alpha.12",localforage:"^1.7.2",lodash:"^4.17.5",mobx:"^5.0.3","mobx-react":"^5.2.3",moment:"^2.20.1",pretty:"^2.0.0",rasterizehtml:"^1.3.0",react:"^16.4.1","react-color":"^2.13.8","react-contenteditable":"^2.0.7","react-dom":"^16.4.1","react-hot-loader":"^3.1.3","react-router":"^3.0.2","react-router-redux":"^4.0.0","react-syntax-highlighter":"^8.0.1",tinycolor2:"^1.4.1","url-parse":"^1.4.1"},browserslist:["defaults","not ie < 11","last 2 versions","> 1%","iOS 7","last 3 iOS versions"]}}})});