(function(){var i=!0,o=null,p=!1,q=this,aa=function(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},s=function(a,b,c){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return s.apply(o,arguments)},ea=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var t=document,u=window;var v=function(a,b){this.width=a;this.height=b};v.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function w(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var fa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,p):a.attachEvent&&a.attachEvent("on"+b,c)},ga=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)},A=function(){var a=z;try{return!!a.document}catch(b){return p}};aa("google_protectAndRun",function(a,b,c){a=s(b,q,a);b=window.onerror;window.onerror=a;try{c()}catch(d){var c=d.toString(),e="";d.fileName&&(e=d.fileName);var f=-1;d.lineNumber&&(f=d.lineNumber);if(!a(c,e,f))throw d;}window.onerror=b});
aa("google_handleError",function(a,b,c,d){0.01>Math.random()&&(a=["http://","pagead2.googlesyndication.com","/pagead/gen_204","?id=jserror","&jscb=",0,"&jscd=",0,"&context=",w(a),"&msg=",w(b),"&file=",w(c),"&line=",w(d.toString()),"&url=",w(t.URL.substring(0,512)),"&ref=",w(t.referrer.substring(0,512))],a.push(["&client=",w(u.google_ad_client),"&format=",w(u.google_ad_format),"&slotname=",w(u.google_ad_slot),"&output=",w(u.google_ad_output),"&ad_type=",w(u.google_ad_type)].join("")),ga(u,a.join("")));
return i});var ha=!!window.google_async_iframe_id,z=ha&&window.parent||window,B=function(){if(ha&&!A()){for(var a="."+t.domain;2<a.split(".").length&&!A();)t.domain=a=a.substr(a.indexOf(".")+1),z=window.parent;A()||(z=window)}return z};var D=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};var E,F,G,H,I,ia=function(){return q.navigator?q.navigator.userAgent:o};I=H=G=F=E=p;var J;if(J=ia()){var ja=q.navigator;E=0==J.indexOf("Opera");F=!E&&-1!=J.indexOf("MSIE");H=(G=!E&&-1!=J.indexOf("WebKit"))&&-1!=J.indexOf("Mobile");I=!E&&!G&&"Gecko"==ja.product}var K=E,L=F,M=I,N=G,ka=H,la;
a:{var O="",P;if(K&&q.opera)var ma=q.opera.version,O="function"==typeof ma?ma():ma;else if(M?P=/rv\:([^\);]+)(\)|;)/:L?P=/MSIE\s+([^\);]+)(\)|;)/:N&&(P=/WebKit\/(\S+)/),P)var na=P.exec(ia()),O=na?na[1]:"";if(L){var oa,pa=q.document;oa=pa?pa.documentMode:void 0;if(oa>parseFloat(O)){la=""+oa;break a}}la=O}
var qa=la,ra={},sa=function(a){var b;if(!(b=ra[a])){b=0;for(var c=(""+qa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var k=n.exec(g)||["","",""],h=j.exec(l)||["","",""];if(0==k[0].length&&0==h[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==k[1].length?
0:parseInt(k[1],10))>(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==k[2].length)<(0==h[2].length)?-1:(0==k[2].length)>(0==h[2].length)?1:0)||(k[2]<h[2]?-1:k[2]>h[2]?1:0)}while(0==b)}b=ra[a]=0<=b}return b},ta={},Q=function(a){return ta[a]||(ta[a]=L&&document.documentMode&&document.documentMode>=a)};var ua;!L||Q(9);!M&&!L||L&&Q(9)||M&&sa("1.9.1");L&&sa("9");var S=function(a){return a?new va(R(a)):ua||(ua=new va)},R=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},va=function(a){this.d=a||q.document||document};va.prototype.createElement=function(a){return this.d.createElement(a)};var wa=function(a){var b=a.d,a=!N&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new D(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var T=function(a){var b;a:{b=R(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,o))){b=b.position||b.getPropertyValue("position");break a}b=""}return b||(a.currentStyle?a.currentStyle.position:o)||a.style&&a.style.position},xa=function(a){var b=a.getBoundingClientRect();L&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},ya=function(a){if(L&&!Q(8))return a.offsetParent;for(var b=
R(a),c=T(a),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=T(a),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return o},za=function(a){var b,c=R(a),d=T(a),e=M&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new D(0,0),g;b=c?9==c.nodeType?c:R(c):document;if(g=L)if(g=!Q(9))g="CSS1Compat"!=S(b).d.compatMode;
g=g?b.body:b.documentElement;if(a==g)return f;if(a.getBoundingClientRect)b=xa(a),a=wa(S(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{e=a;do{f.x+=e.offsetLeft;f.y+=e.offsetTop;e!=a&&(f.x+=e.clientLeft||0,f.y+=e.clientTop||0);if(N&&"fixed"==T(e)){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}e=e.offsetParent}while(e&&e!=a);if(K||N&&"absolute"==d)f.y-=c.body.offsetTop;for(e=a;(e=
ya(e))&&e!=c.body&&e!=g;)if(f.x-=e.scrollLeft,!K||"TR"!=e.tagName)f.y-=e.scrollTop}return f};var Aa=function(a){var b=u;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new v(-1,-1);else{var a=b||window,d=a.document;if(N&&!sa("500")&&!ka){"undefined"==typeof a.innerHeight&&(a=window);var e=a.innerHeight,f=a.document.documentElement.scrollHeight;a==a.top&&f<e&&(e-=15);c=new v(a.innerWidth,e)}else{var g="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new v(g.clientWidth,g.clientHeight)}}return c}catch(l){return new v(-12245933,-12245933)}};var V,Ba=function(a,b){var c=B();fa(c,a,b)},Ga=function(a){var b=W;var c=B();c.removeEventListener?c.removeEventListener(a,b,p):c.detachEvent&&c.detachEvent("on"+a,b)},Ha=function(){for(var a=X,b=0;b<a.length;b++)if(a[b].b)return i;return p},Pa=function(){try{B();var a=Y();Ia=a;if(Ja())if("function"!=typeof V.getBlocks)Z("d");else{Ka=V.numBlocks();var b=[];La=0;V.getBlocks(function(c,d,e){La++;var n=c.getBoundingClientRect(),j={x:0,y:0};try{var k=window.top,h=new D(0,0),y=R(c)?R(c).parentWindow||
R(c).defaultView:window,r=c;do{var C;if(y==k)C=za(r);else{var m=r,x=new D;if(1==m.nodeType)if(m.getBoundingClientRect){var Ca=xa(m);x.x=Ca.left;x.y=Ca.top}else{var Da=wa(S(m)),Ea=za(m);x.x=Ea.x-Da.x;x.y=Ea.y-Da.y}else{var Va="function"==ba(m.j),U=m;m.targetTouches?U=m.targetTouches[0]:Va&&m.j().targetTouches&&(U=m.j().targetTouches[0]);x.x=U.clientX;x.y=U.clientY}C=x}m=C;h.x+=m.x;h.y+=m.y}while(y&&y!=k&&(r=y.frameElement)&&(y=y.parent));var j=h,Wa=new $(Math.round(j.y),Math.round(j.x),Math.round(n.bottom-
n.top+j.y),Math.round(n.right-n.left+j.x)),Fa=new Ma(Wa,d,a,e);Fa.b=c;b.push(Fa)}catch(cb){b.push(new Ma(Na,d,a,e))}});X=b;var c=V.getOsdMode();if(1==c)Z("p");else{var d=0==c||3==c&&Ha();d&&W();Ba("unload",function(){Z("u")});d&&(Ba("scroll",W),Ba("resize",W));window.setTimeout(function(){Z("t")},36E5)}Oa=Y()-a}else Z("c")}catch(e){X=[],Z("x")}},W=function(){if(!Qa){var a=Aa(i);if(!(-1==a.width||-1==a.height||-12245933==a.width||-12245933==a.height)){var b=o;try{b=wa(S((window.top||q||window).document))}catch(c){return}for(var a=
new $(b.y,b.x,b.y+a.height,b.x+a.width),b=X,d=Y(),e=0;e<b.length;e++)b[e].update(d,a);Ra+=Y()-d;Sa++}}},Z=function(a){var b=B(),c=b.document;if(!Qa){if(3!=V.getOsdMode()){var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];try{var e=0<Ia?Y()-Ia:-1,f=X;if(0<f.length){W();for(c=0;c<f.length;c++)if(0<f[c].g){var g=f[c],l=g.e,n=["p:",l.top,l.left,l.bottom,l.right];n.push("tos:",g.a.join(","));n.push("rs:",g.l);n.push("zoom:",g.zoom.join(","));0<=g.c&&n.push("tfs:",
g.c,"tls:",g.f);n.push("fp:",g.k);d.push("adk"+f[c].g+"="+w(n.join(",")))}var g=i,j=Aa(g);d.push("bs="+j.width+","+j.height);var k;j=u;g&&j.top!=j&&(j=j.top);try{var h=j.document;k=!j.scrollY&&"CSS1Compat"!=h.compatMode?new $(0,0,h.body.scrollHeight,h.body.scrollWidth):new $(0,0,h.body.offsetHeight,h.body.offsetWidth)}catch(y){k=new $(0,0,-12245933,-12245933)}d.push("ps="+k.right+","+k.bottom);var r=Ta(Ua,f[0].url);if(r&&("&"==r.charAt(0)||"?"==r.charAt(0)))r=r.slice(1);d.push("fp="+w(r))}else d.push("url="+
w(b.location.href)),c.referrer&&d.push("referrer="+w(c.referrer)),V&&(d.push("correlator="+V.getCorrelator()),d.push("eid="+V.getEid()),d.push("oid="+V.getOseId()));d.push("tt="+e);d.push("deb="+w([1,Ka,La,Ra,Sa,Oa].join("-")));d.push("r="+a);if(b.top!=b){d.push("iframe_loc="+w(b.location.href));var C=Aa(p);d.push("is="+C.width+","+C.height)}}catch(m){d.push("error")}try{ga(b,d.join("&"))}catch(x){}}Qa=i}},Xa=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,Ua=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,
Ta=function(a,b){var c=b.match(a);return c?c.join(""):""},X=[],Qa=p,Ya=(new Date).getTime(),Ia=-1,Y=function(){return(new Date).getTime()-Ya},Ka=0,La=0,Ra=0,Sa=0,Oa=0,Ja=function(){var a=B().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return p;V=Goog_AdSense_getAdAdapterInstance();return i},Ma=function(a,b,c,d){this.e=a;this.h=(a.bottom-a.top)*(a.right-a.left);this.f=this.c=-1;this.a=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.k=Ta(Xa,b);this.b=
o;this.i=c;this.url=b;this.g=(a=b.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0;this.l=d},Za=function(a,b){if(b){a(b);var c=b.frames;if(c){var d=c.length,e;for(e=0;e<d;++e)Za(a,c[e])}}},$a=function(a,b){try{b.postMessage(a,"*")}catch(c){}};
Ma.prototype.update=function(a,b){B();var c=this.e,d=a-this.i||1;this.i=a;var e=Math.max(c.top,b.top),f=Math.min(c.bottom,b.bottom);if(e<=f){var g=Math.max(c.left,b.left),c=Math.min(c.right,b.right);if(g<=c){var l=(f-e)*(c-g)/this.h;3==V.getOsdMode()&&0.8<=l?this.b&&(Za(ea($a,"{osi:1,c:"+l+",l:"+g+",r:"+c+",t:"+e+",b:"+f+"}"),this.b.contentWindow),this.b=o,Ha()||(Ga("scroll"),Ga("resize"))):(1<=l?this.a[0]+=d:0.75<=l?this.a[1]+=d:0.5<=l?this.a[2]+=d:0.25<=l?this.a[3]+=d:this.a[4]+=d,0>this.c&&(this.c=
a),this.f=a,0.5<=l&&(e=100*this.h/((b.bottom-b.top)*(b.right-b.left)),20<=e?this.zoom[0]+=d:10<=e?this.zoom[1]+=d:5<=e?this.zoom[2]+=d:2.5<=e?this.zoom[3]+=d:this.zoom[4]+=d))}}};var $=function(a,b,c,d){this.top=a;this.bottom=c;this.left=b;this.right=d},Na=new $(0,0,0,0);var ab=B();if("complete"==ab.document.readyState||ab.google_onload_fired)Pa();else{var bb=B();fa(bb,"load",function(){window.setTimeout(Pa,100)})};})();