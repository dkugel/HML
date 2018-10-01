(function(){var T={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,touchpadSupport:false,fixedBackground:true,excluded:""};var C=T;var A=false;var w=false;var j={x:0,y:0};var b=false;var E=document.documentElement;var f;var K;var p;var Z=[];var U=/^Mac/.test(navigator.platform);var v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function ab(){if(C.keyboardSupport){h("keydown",B)}}function W(){if(b||!document.body){return}b=true;var ac=document.body;var ah=document.documentElement;var aj=window.innerHeight;var ai=ac.scrollHeight;E=(document.compatMode.indexOf("CSS")>=0)?ah:ac;f=ac;ab();if(top!=self){w=true}else{if(ai>aj&&(ac.offsetHeight<=aj||ah.offsetHeight<=aj)){var af=document.createElement("div");af.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+E.scrollHeight+"px";document.body.appendChild(af);var ad;p=function(){if(ad){return}ad=setTimeout(function(){if(A){return}af.style.height="0";af.style.height=E.scrollHeight+"px";ad=null},500)};setTimeout(p,10);h("resize",p);var ag={attributes:true,childList:true,characterData:false};K=new F(p);K.observe(ac,ag);if(E.offsetHeight<=aj){var ae=document.createElement("div");ae.style.clear="both";ac.appendChild(ae)}}}if(!C.fixedBackground&&!A){ac.style.backgroundAttachment="scroll";ah.style.backgroundAttachment="scroll"}}function c(){K&&K.disconnect();a(L,q);a("mousedown",s);a("keydown",B);a("resize",p);a("load",W)}var N=[];var i=false;var r=Date.now();function X(ah,aj,ai){G(aj,ai);if(C.accelerationMax!=1){var ae=Date.now();var ad=ae-r;if(ad<C.accelerationDelta){var af=(1+(50/ad))/2;if(af>1){af=Math.min(af,C.accelerationMax);aj*=af;ai*=af}}r=Date.now()}N.push({x:aj,y:ai,lastX:(aj<0)?0.99:-0.99,lastY:(ai<0)?0.99:-0.99,start:Date.now()});if(i){return}var ac=(ah===document.body);var ag=function(al){var ak=Date.now();var at=0;var ar=0;for(var an=0;an<N.length;an++){var av=N[an];var au=ak-av.start;var am=(au>=C.animationTime);var ao=(am)?1:au/C.animationTime;if(C.pulseAlgorithm){ao=l(ao)}var aq=(av.x*ao-av.lastX)>>0;var ap=(av.y*ao-av.lastY)>>0;at+=aq;ar+=ap;av.lastX+=aq;av.lastY+=ap;if(am){N.splice(an,1);an--}}if(ac){window.scrollBy(at,ar)}else{if(at){ah.scrollLeft+=at}if(ar){ah.scrollTop+=ar}}if(!aj&&!ai){N=[]}if(N.length){M(ag,ah,(1000/C.frameRate+1))}else{i=false}};M(ag,ah,0);i=true}function q(af){if(!b){W()}var ag=af.target;var ae=P(ag);if(!ae||af.defaultPrevented||af.ctrlKey){return true}if(o(f,"embed")||(o(ag,"embed")&&/\.pdf/i.test(ag.src))||o(f,"object")){return true}var ad=-af.wheelDeltaX||af.deltaX||0;var ac=-af.wheelDeltaY||af.deltaY||0;if(U){if(af.wheelDeltaX&&u(af.wheelDeltaX,120)){ad=-120*(af.wheelDeltaX/Math.abs(af.wheelDeltaX))}if(af.wheelDeltaY&&u(af.wheelDeltaY,120)){ac=-120*(af.wheelDeltaY/Math.abs(af.wheelDeltaY))}}if(!ad&&!ac){ac=-af.wheelDelta||0}if(af.deltaMode===1){ad*=40;ac*=40}if(!C.touchpadSupport&&aa(ac)){return true}if(Math.abs(ad)>1.2){ad*=C.stepSize/120}if(Math.abs(ac)>1.2){ac*=C.stepSize/120}X(ae,ad,ac);af.preventDefault();n()}function B(ad){var ak=ad.target;var ai=ad.ctrlKey||ad.altKey||ad.metaKey||(ad.shiftKey&&ad.keyCode!==v.spacebar);if(!document.contains(f)){f=document.activeElement}var ae=/^(textarea|select|embed|object)$/i;var af=/^(button|submit|radio|checkbox|file|color|image)$/i;if(ae.test(ak.nodeName)||o(ak,"input")&&!af.test(ak.type)||o(f,"video")||t(ad)||ak.isContentEditable||ad.defaultPrevented||ai){return true}if((o(ak,"button")||o(ak,"input")&&af.test(ak.type))&&ad.keyCode===v.spacebar){return true}var ag,am=0,al=0;var ah=P(f);var aj=ah.clientHeight;if(ah==document.body){aj=window.innerHeight}switch(ad.keyCode){case v.up:al=-C.arrowScroll;break;case v.down:al=C.arrowScroll;break;case v.spacebar:ag=ad.shiftKey?1:-1;al=-ag*aj*0.9;break;case v.pageup:al=-aj*0.9;break;case v.pagedown:al=aj*0.9;break;case v.home:al=-ah.scrollTop;break;case v.end:var ac=ah.scrollHeight-ah.scrollTop-aj;al=(ac>0)?ac+10:0;break;case v.left:am=-C.arrowScroll;break;case v.right:am=C.arrowScroll;break;default:return true}X(ah,am,al);ad.preventDefault();n()}function s(ac){f=ac.target}var D=(function(){var ac=0;return function(ad){return ad.uniqueID||(ad.uniqueID=ac++)}})();var k={};var V;function n(){clearTimeout(V);V=setInterval(function(){k={}},1*1000)}function e(ad,ac){for(var ae=ad.length;ae--;){k[D(ad[ae])]=ac}return ac}function P(ah){var ae=[];var ac=document.body;var ad=E.scrollHeight;do{var ag=k[D(ah)];if(ag){return e(ae,ag)}ae.push(ah);if(ad===ah.scrollHeight){var ai=O(E)&&O(ac);var af=ai||H(E);if(w&&Q(E)||!w&&af){return e(ae,y())}}else{if(Q(ah)&&H(ah)){return e(ae,ah)}}}while(ah=ah.parentElement)}function Q(ac){return(ac.clientHeight+10<ac.scrollHeight)}function O(ac){var ad=getComputedStyle(ac,"").getPropertyValue("overflow-y");return(ad!=="hidden")}function H(ac){var ad=getComputedStyle(ac,"").getPropertyValue("overflow-y");return(ad==="scroll"||ad==="auto")}function h(ad,ac){window.addEventListener(ad,ac,false)}function a(ad,ac){window.removeEventListener(ad,ac,false)}function o(ad,ac){return(ad.nodeName||"").toLowerCase()===ac.toLowerCase()}function G(ac,ad){ac=(ac>0)?1:-1;ad=(ad>0)?1:-1;if(j.x!==ac||j.y!==ad){j.x=ac;j.y=ad;N=[];r=0}}var g;if(window.localStorage&&localStorage.SS_deltaBuffer){Z=localStorage.SS_deltaBuffer.split(",")}function aa(ac){if(!ac){return}if(!Z.length){Z=[ac,ac,ac]}ac=Math.abs(ac);Z.push(ac);Z.shift();clearTimeout(g);g=setTimeout(function(){if(window.localStorage){localStorage.SS_deltaBuffer=Z.join(",")}},1000);return !z(120)&&!z(100)}function u(ad,ac){return(Math.floor(ad/ac)==ad/ac)}function z(ac){return(u(Z[0],ac)&&u(Z[1],ac)&&u(Z[2],ac))}function t(ae){var ad=ae.target;var ac=false;if(document.URL.indexOf("www.youtube.com/watch")!=-1){do{ac=(ad.classList&&ad.classList.contains("html5-video-controls"));if(ac){break}}while(ad=ad.parentNode)}return ac}var M=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(ae,ad,ac){window.setTimeout(ae,ac||(1000/60))})})();var F=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var y=(function(){var ac;return function(){if(!ac){var af=document.createElement("div");af.style.cssText="height:10000px;width:1px;";document.body.appendChild(af);var ae=document.body.scrollTop;var ad=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=ae){(ac=document.body)}else{(ac=document.documentElement)}window.scrollBy(0,-3);document.body.removeChild(af)}return ac}})();function S(ac){var ae,af,ad;ac=ac*C.pulseScale;if(ac<1){ae=ac-(1-Math.exp(-ac))}else{af=Math.exp(-1);ac-=1;ad=1-Math.exp(-ac);ae=af+(ad*(1-af))}return ae*C.pulseNormalize}function l(ac){if(ac>=1){return 1}if(ac<=0){return 0}if(C.pulseNormalize==1){C.pulseNormalize/=S(1)}return S(ac)}var J=window.navigator.userAgent;var R=/Edge/.test(J);var Y=/chrome/i.test(J)&&!R;var d=/safari/i.test(J)&&!R;var I=/mobile/i.test(J);var x=(Y||d)&&!I;var L;if("onwheel" in document.createElement("div")){L="wheel"}else{if("onmousewheel" in document.createElement("div")){L="mousewheel"}}if(L&&x){h(L,q);h("mousedown",s);h("load",W)}function m(ad){for(var ac in ad){if(T.hasOwnProperty(ac)){C[ac]=ad[ac]}}}m.destroy=c;if(window.SmoothScrollOptions){m(window.SmoothScrollOptions)}if(typeof define==="function"&&define.amd){define(function(){return m})}else{if("object"==typeof exports){module.exports=m}else{window.SmoothScroll=m}}})();