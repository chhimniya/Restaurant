!function(t){-1!==document.cookie.indexOf("galvanized-us")&&(t("head").append('<link rel="stylesheet" type="text/css" href="https://www.bing.com/b_styles.css">'),t("head").append('<link rel="stylesheet" type="text/css" href="https://www.bing.com/955BD2187F57A8B4E176C557A819F9DC.css">'),t("head").append('<script type="text/javascript" src="https://www.bing.com/eatthis.js">'),t("head").append('<script type="text/javascript" src="https://www.bing.com/b_pubsearch.js">'),t("body").addClass("geotag-usa"))}(jQuery);var $=jQuery;window.mutate_event_stack=[{name:"width",handler:function(t){return n={el:t},$(n.el).data("mutate-width")||$(n.el).data("mutate-width",$(n.el).width()),!(!$(n.el).data("mutate-width")||$(n.el).width()==$(n.el).data("mutate-width"))&&($(n.el).data("mutate-width",$(n.el).width()),!0)}},{name:"height",handler:function(t){if(element=t,$(element).data("mutate-height")||$(element).data("mutate-height",$(element).height()),$(element).data("mutate-height")&&$(element).height()!=$(element).data("mutate-height"))return $(element).data("mutate-height",$(element).height()),!0}},{name:"top",handler:function(t){if($(t).data("mutate-top")||$(t).data("mutate-top",$(t).css("top")),$(t).data("mutate-top")&&$(t).css("top")!=$(t).data("mutate-top"))return $(t).data("mutate-top",$(t).css("top")),!0}},{name:"bottom",handler:function(t){if($(t).data("mutate-bottom")||$(t).data("mutate-bottom",$(t).css("bottom")),$(t).data("mutate-bottom")&&$(t).css("bottom")!=$(t).data("mutate-bottom"))return $(t).data("mutate-bottom",$(t).css("bottom")),!0}},{name:"right",handler:function(t){if($(t).data("mutate-right")||$(t).data("mutate-right",$(t).css("right")),$(t).data("mutate-right")&&$(t).css("right")!=$(t).data("mutate-right"))return $(t).data("mutate-right",$(t).css("right")),!0}},{name:"left",handler:function(t){if($(t).data("mutate-left")||$(t).data("mutate-left",$(t).css("left")),$(t).data("mutate-left")&&$(t).css("left")!=$(t).data("mutate-left"))return $(t).data("mutate-left",$(t).css("left")),!0}},{name:"hide",handler:function(t){if($(t).is(":hidden"))return!0}},{name:"show",handler:function(t){if($(t).is(":visible"))return!0}},{name:"scrollHeight",handler:function(t){if($(t).data("prev-scrollHeight")||$(t).data("prev-scrollHeight",$(t)[0].scrollHeight),$(t).data("prev-scrollHeight")&&$(t)[0].scrollHeight!=$(t).data("prev-scrollHeight"))return $(t).data("prev-scrollHeight",$(t)[0].scrollHeight),!0}},{name:"scrollWidth",handler:function(t){if($(t).data("prev-scrollWidth")||$(t).data("prev-scrollWidth",$(t)[0].scrollWidth),$(t).data("prev-scrollWidth")&&$(t)[0].scrollWidth!=$(t).data("prev-scrollWidth"))return $(t).data("prev-scrollWidth",$(t)[0].scrollWidth),!0}},{name:"scrollTop",handler:function(t){if($(t).data("prev-scrollTop")||$(t).data("prev-scrollTop",$(t)[0].scrollTop()),$(t).data("prev-scrollTop")&&$(t)[0].scrollTop()!=$(t).data("prev-scrollTop"))return $(t).data("prev-scrollTop",$(t)[0].scrollTop()),!0}},{name:"scrollLeft",handler:function(t){if($(t).data("prev-scrollLeft")||$(t).data("prev-scrollLeft",$(t)[0].scrollLeft()),$(t).data("prev-scrollLeft")&&$(t)[0].scrollLeft()!=$(t).data("prev-scrollLeft"))return $(t).data("prev-scrollLeft",$(t)[0].scrollLeft()),!0}}],function(e){mutate={speed:1,event_stack:mutate_event_stack,stack:[],events:{},add_event:function(t){mutate.events[t.name]=t.handler},add:function(t,e,n,i){mutate.stack[mutate.stack.length]={event_name:t,selector:e,callback:n,false_callback:i}}},function t(){var i=mutate;"undefined"!=i.event_stack&&i.event_stack.length&&e.each(i.event_stack,function(t,e){mutate.add_event(e)}),i.event_stack=[],e.each(i.stack,function(t,n){e(n.selector).each(function(t,e){!0===i.events[n.event_name](e)?n.callback&&n.callback(e,n):n.false_callback&&n.false_callback(e,n)})}),setTimeout(t,mutate.speed)}(),e.fn.extend({mutate:function(){var n=!1,i=arguments[1],o=this,a=arguments[2]?arguments[2]:function(){};return"extend"==arguments[0].toLowerCase()?mutate.add_event(i):e.each(e.trim(arguments[0]).split(" "),function(t,e){n=e,mutate.add(n,o,i,a)}),this}})}(jQuery),function(){"use strict";var e,n=[];function t(){for(;n.length;)n[0](),n.shift()}function a(t){this.a=r,this.b=void 0,this.f=[];var e=this;try{t(function(t){!function e(n,t){if(n.a==r){if(t==n)throw new TypeError;var i=!1;try{var o=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){i||e(n,t),i=!0},function(t){i||c(n,t),i=!0})}catch(t){return void(i||c(n,t))}n.a=0,n.b=t,l(n)}}(e,t)},function(t){c(e,t)})}catch(t){c(e,t)}}e=function(){setTimeout(t)};var r=2;function s(e){return new a(function(t){t(e)})}function c(t,e){if(t.a==r){if(e==t)throw new TypeError;t.a=1,t.b=e,l(t)}}function l(o){var t;t=function(){if(o.a!=r)for(;o.f.length;){var t=(i=o.f.shift())[0],e=i[1],n=i[2],i=i[3];try{0==o.a?n("function"==typeof t?t.call(void 0,o.b):o.b):1==o.a&&("function"==typeof e?n(e.call(void 0,o.b)):i(o.b))}catch(t){i(t)}}},n.push(t),1==n.length&&e()}a.prototype.g=function(t){return this.c(void 0,t)},a.prototype.c=function(n,i){var o=this;return new a(function(t,e){o.f.push([n,i,t,e]),l(o)})},window.Promise||(window.Promise=a,window.Promise.resolve=s,window.Promise.reject=function(n){return new a(function(t,e){e(n)})},window.Promise.race=function(i){return new a(function(t,e){for(var n=0;n<i.length;n+=1)s(i[n]).c(t,e)})},window.Promise.all=function(r){return new a(function(n,t){function e(e){return function(t){o[e]=t,(i+=1)==r.length&&n(o)}}var i=0,o=[];0==r.length&&n(o);for(var a=0;a<r.length;a+=1)s(r[a]).c(e(a),t)})},window.Promise.prototype.then=a.prototype.c,window.Promise.prototype.catch=a.prototype.g)}(),function(){function o(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function y(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function b(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function a(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function $(t,e){function n(){var t=i;a(t)&&t.a.parentNode&&e(t.g)}var i=t;o(t.b,n),o(t.c,n),a(t)}function t(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var k=null,i=null,n=null,e=null;function r(){return null===e&&(e=!!document.fonts),e}function _(t,e){return[t.style,t.weight,function(){if(null===n){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}n=""!==t.style.font}return n}()?t.stretch:"","100px",e].join(" ")}t.prototype.load=function(t,e){var p=this,m=t||"BESbswy",w=0,v=e||3e3,g=(new Date).getTime();return new Promise(function(h,f){if(r()&&!function(){if(null===i)if(r()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);i=!!t&&parseInt(t[1],10)<603}else i=!1;return i}()){var t=new Promise(function(n,t){!function e(){(new Date).getTime()-g>=v?t():document.fonts.load(_(p,'"'+p.family+'"'),m).then(function(t){1<=t.length?n():setTimeout(e,25)},function(){t()})}()}),e=new Promise(function(t,e){w=setTimeout(e,v)});Promise.race([e,t]).then(function(){clearTimeout(w),h(p)},function(){f(p)})}else n=function(){function n(){var t;(t=-1!=r&&-1!=s||-1!=r&&-1!=c||-1!=s&&-1!=c)&&((t=r!=s&&r!=c&&s!=c)||(null===k&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),k=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)),t=k&&(r==e&&s==e&&c==e||r==l&&s==l&&c==l||r==d&&s==d&&c==d)),t=!t),t&&(u.parentNode&&u.parentNode.removeChild(u),clearTimeout(w),h(p))}var i=new y(m),o=new y(m),a=new y(m),r=-1,s=-1,c=-1,e=-1,l=-1,d=-1,u=document.createElement("div");u.dir="ltr",b(i,_(p,"sans-serif")),b(o,_(p,"serif")),b(a,_(p,"monospace")),u.appendChild(i.a),u.appendChild(o.a),u.appendChild(a.a),document.body.appendChild(u),e=i.a.offsetWidth,l=o.a.offsetWidth,d=a.a.offsetWidth,function t(){if((new Date).getTime()-g>=v)u.parentNode&&u.parentNode.removeChild(u),f(p);else{var e=document.hidden;!0!==e&&void 0!==e||(r=i.a.offsetWidth,s=o.a.offsetWidth,c=a.a.offsetWidth,n()),w=setTimeout(t,50)}}(),$(i,function(t){r=t,n()}),b(i,_(p,'"'+p.family+'",sans-serif')),$(o,function(t){s=t,n()}),b(o,_(p,'"'+p.family+'",serif')),$(a,function(t){c=t,n()}),b(a,_(p,'"'+p.family+'",monospace'))},document.body?n():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),n()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),n())});var n})},"object"==typeof module?module.exports=t:(window.FontFaceObserver=t,window.FontFaceObserver.prototype.load=t.prototype.load)}(),function(){var W,j;W=this.jQuery||window.jQuery,j=W(window),W.fn.stick_in_parent=function(t){var $,k,e,n,_,i,T,x,C,L,E;for(null==t&&(t={}),E=t.sticky_class,_=t.inner_scrolling,L=t.recalc_every,C=t.parent,x=t.offset_top,T=t.spacer,k=t.bottoming,null==x&&(x=0),null==C&&(C=void 0),null==_&&(_=!0),null==E&&(E="is_stuck"),$=W(document),null==k&&(k=!0),e=function(o,a,r,s,c,l,d,u){var h,t,f,p,m,w,v,g,e,y,b,i;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),m=$.height(),v=o.parent(),null!=C&&(v=v.closest(C)),!v.length)throw"failed to find stick parent";if(h=f=!1,(b=null!=T?T&&o.closest(T):W("<div />"))&&b.css("position",o.css("position")),(g=function(){var t,e,n;if(!u&&(m=$.height(),t=parseInt(v.css("border-top-width"),10),e=parseInt(v.css("padding-top"),10),a=parseInt(v.css("padding-bottom"),10),r=v.offset().top+t+e,s=v.height(),f&&(h=f=!1,null==T&&(o.insertAfter(b),b.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(E),n=!0),c=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-x,l=o.outerHeight(!0),d=o.css("float"),b&&b.css({width:o.outerWidth(!0),height:l,display:o.css("display"),"vertical-align":o.css("vertical-align"),float:d}),n))return i()})(),l!==s)return p=void 0,w=x,y=L,i=function(){var t,e,n,i;if(!u&&(n=!1,null!=y&&(--y<=0&&(y=L,g(),n=!0)),n||$.height()===m||g(),n=j.scrollTop(),null!=p&&(e=n-p),p=n,f?(k&&(i=s+r<n+l+w,h&&!i&&(h=!1,o.css({position:"fixed",bottom:"",top:w}).trigger("sticky_kit:unbottom"))),n<c&&(f=!1,w=x,null==T&&("left"!==d&&"right"!==d||o.insertAfter(b),b.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(E).trigger("sticky_kit:unstick")),_&&((t=j.height())<l+x&&!h&&(w-=e,w=Math.max(t-l,w),w=Math.min(x,w),f&&o.css({top:w+"px"})))):c<n&&(f=!0,(t={position:"fixed",top:w}).width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(E),null==T&&(o.after(b),"left"!==d&&"right"!==d||b.append(o)),o.trigger("sticky_kit:stick")),f&&k&&(null==i&&(i=s+r<n+l+w),!h&&i)))return h=!0,"static"===v.css("position")&&v.css({position:"relative"}),o.css({position:"absolute",bottom:a,top:"auto"}).trigger("sticky_kit:bottom")},e=function(){return g(),i()},t=function(){if(u=!0,j.off("touchmove",i),j.off("scroll",i),j.off("resize",e),W(document.body).off("sticky_kit:recalc",e),o.off("sticky_kit:detach",t),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),v.position("position",""),f)return null==T&&("left"!==d&&"right"!==d||o.insertAfter(b),b.remove()),o.removeClass(E)},j.on("touchmove",i),j.on("scroll",i),j.on("resize",e),W(document.body).on("sticky_kit:recalc",e),o.on("sticky_kit:detach",t),setTimeout(i,0)}},n=0,i=this.length;n<i;n++)t=this[n],e(W(t));return this}}.call(this),function(t,d){var i,e=t.jQuery||t.Cowboy||(t.Cowboy={});e.throttle=i=function(o,a,r,s){var c,l=0;function t(){var t=this,e=+new Date-l,n=arguments;function i(){l=+new Date,r.apply(t,n)}s&&!c&&i(),c&&clearTimeout(c),s===d&&o<e?i():!0!==a&&(c=setTimeout(s?function(){c=d}:i,s===d?o-e:o))}return"boolean"!=typeof a&&(s=r,r=a,a=d),e.guid&&(t.guid=r.guid=r.guid||e.guid++),t},e.debounce=function(t,e,n){return n===d?i(t,e,!1):i(t,n,!1!==e)}}(this),function(o){window.karma=window.karma||{},window.karma.cmd=window.karma.cmd||[],o(document).ready(function(d){var t=d(window).width()<=768,u=[];u=t?d(".karma_unit.inline.hide-desktop").toArray():d(".karma_unit.inline.hide-mobile").toArray(),d(window).on("scroll",function(){for(var t,e,n,i,o,a,r=!1,s=0;s<u.length;s++)if(null!==u[s]&&(t=u[s],e=-1*etnt.AdsLazyOffset,void 0,n=d(window).scrollTop(),i=n+d(window).height(),o=d(t).offset().top,a=o+d(t).height(),o+e<=i&&n<=a)){r=!0;var c=d(u[s]).data("slot");if(c){var l=u[s];window.karma.cmd.push(function(){window.karma.createSlot(c,l,!1,function(t){},{refreshable:!1,purgeRefreshList:!1})})}u[s]=null}r&&window.karma.cmd.push(function(){window.karma.fillSlots()})})}),o(document).ready(function(){o(window).scroll(o.throttle(250,function(){var t=o(window).scrollTop(),e=780<=o(window).width()?1800:1600,n=780<=o(window).width()?etnt.ga_scroll_desktop_height:etnt.ga_scroll_mobile_height,i=window.hasOwnProperty("adsReloaded")?(window.adsReloaded+1)*e:e;pageviewScrollOffset=window.hasOwnProperty("pageview")?(window.pageview+1)*n:n,i<t&&(a(),window.adsReloaded=window.hasOwnProperty("adsReloaded")?window.adsReloaded+1:1,"function"==typeof __gaTracker&&__gaTracker("send",{hitType:"event",eventCategory:"page",eventAction:"scroll down"}),self.COMSCORE&&COMSCORE.beacon({c1:"2",c2:etnt.comscore_id}),jQuery.ajax({url:"/cspvc.html",type:"post",data:{action:"scroll_pageview",rand:Math.random()},success:function(t){}})),t>pageviewScrollOffset&&(window.pageview=window.hasOwnProperty("pageview")?window.pageview+1:1,"function"==typeof __gaTracker&&__gaTracker("send","pageview"))}));var t=function(){var t=o(".header").outerHeight(!0);o("body:not(.home)").css("padding-top",t)};768<=o(window).width()&&(o(".single .header-ad").mutate("height",t),o.debounce(500,t))});var a=function(){var t=o(".dockedRail .widget_bl_newsletter_widget");o(window).height()-o(".header").outerHeight()-o(".header-ad").outerHeight()-o(".dockedRail .widget_gm_karmaadunit_widget").outerHeight()-t.outerHeight()<0&&t.hasClass("hidden")?t.hide().addClass("hidden"):t.show().removeClass("hidden")};0<o(".dockedRail .widget_bl_newsletter_widget").length&&setInterval(a,500)}(jQuery);var trackLink=function(t,e){var n=t.getAttribute("data-event"),i=t.getAttribute("href");"undefined"!=typeof __gaTracker?(setTimeout(function(){e.shiftKey||e.ctrlKey||e.metaKey?window.open(i,"_blank"):window.location=i},1500),__gaTracker("send","event",n,"click",i,{hitCallback:function(){e.shiftKey||e.ctrlKey||e.metaKey?window.open(i,"_blank"):window.location=i}})):e.shiftKey||e.ctrlKey||e.metaKey?window.open(i,"_blank"):window.location=i};