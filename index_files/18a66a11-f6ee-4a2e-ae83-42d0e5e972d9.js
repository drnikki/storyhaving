;(function(window,document,undefined){mti={};mti.u=function(a,b){var c=arguments.length>2?Array.prototype.slice.call(arguments,2):[];return function(){c.push.apply(c,arguments);return b.apply(a,c)}};mti.g=function(a,b){this.k=a;this.b=b};mti.g.prototype.createElement=function(a,b,c){a=this.k.createElement(a);if(b)for(var e in b)if(b.hasOwnProperty(e))if(e=="style"&&this.b.getName()=="MSIE")a.style.cssText=b[e];else a.setAttribute(e,b[e]);c&&a.appendChild(this.k.createTextNode(c));return a};function t(a,b,c){a=a.k.getElementsByTagName(b)[0];if(!a)a=document.documentElement;if(a&&a.lastChild){a.insertBefore(c,a.lastChild);return true}return false}
function aa(a,b){function c(){document.body?b():setTimeout(c,0)}c()}mti.g.z=false;
function ba(a,b){if(mti.g.z===true)b();else if(a.b.getName()=="MSIE"){var c=a.k,e=false,d=function(){if(!e){e=true;b();mti.g.z=true}};(function(){try{c.documentElement.doScroll("left");if(c.readyState!="complete"){setTimeout(arguments.callee,50);return}}catch(f){setTimeout(arguments.callee,50);return}d()})();c.onreadystatechange=function(){if(c.readyState=="complete"){c.onreadystatechange=null;d()}}}else if(a.b.ya=="AppleWebKit"&&a.b.xa<525)(function(){if(["loaded","complete"].indexOf(this.k.readyState)>
-1){b();mti.g.z=true}else setTimeout(arguments.callee,50)})();else if(a.k.addEventListener)if(a.k.readyState=="loading")a.k.addEventListener("DOMContentLoaded",function(){b();mti.g.z=true},false);else window.onload=function(){b();mti.g.z=true};else window.onload=function(){b();mti.g.z=true}}function w(a,b){if(b.parentNode){b.parentNode.removeChild(b);return true}return false}
function A(a,b,c){a=b.className.split(/\s+/);for(var e=0,d=a.length;e<d;e++)if(a[e]==c)return;a.push(c);b.className=a.join(" ").replace(/^\s+/,"")}function B(a,b,c){a=b.className.split(/\s+/);for(var e=[],d=0,f=a.length;d<f;d++)a[d]!=c&&e.push(a[d]);b.className=e.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}
function C(a,b){if(typeof b!="undefined")if(b!=null)if(typeof b.currentStyle!="undefined")return b.currentStyle.fontFamily;else return(a=a.k.defaultView.getComputedStyle(b,null))?a.getPropertyValue("font-family"):"";return""}
function D(a,b){var c="";if(b.tagName=="INPUT")c+=b.value;b=b.childNodes||b;for(var e="img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(","),d=0;d<b.length;d++)if(b[d].nodeType!=8)if(a.indexOf(e,b[d].tagName?b[d].tagName.toLowerCase():"")<0){var f;var i=b[d].parentNode;if(i)if(typeof i.currentStyle!="undefined")f=i.currentStyle.textTransform;else f=(f=a.k.defaultView.getComputedStyle(i,null))?f.getPropertyValue("text-transform"):"";if(f!="none"){i=b[d].nodeType!=
1?b[d].nodeValue:D(a,b[d].childNodes);c+=i.toLowerCase()+i.toUpperCase()}else c+=b[d].nodeType!=1?b[d].nodeValue:D(a,b[d].childNodes)}return c}mti.g.prototype.getElementById=function(a){return this.k.getElementById(a)};mti.g.prototype.O=function(a,b,c){b=[];for(var e=C(this,a).split(","),d=0;d<c.length;d++)c[d]!=""&&b.push(c[d]);for(c=0;c<e.length;c++)e[c]!=""&&b.push(e[c]);a.style.fontFamily=""+b;return a.style.fontFamily};
function ea(a,b,c){for(a=c.parentNode;a!=null;){if(a==b)return true;a=a.parentNode}return false}function F(a,b,c){c(b);for(b=b.firstChild;b;){F(a,b,c);b=b.nextSibling}}mti.g.prototype.getElementsByClassName=function(a){if(document.getElementsByClassName)return document.getElementsByClassName(a);else{var b=[];F(this,document.body,function(c){var e;e=c.className;var d;if(e){e=e.split(" ");for(d=0;d<e.length;d++)if(e[d]===a){b.push(c);break}}});return b}};
mti.g.prototype.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);else{for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1}};mti.s=function(a,b,c,e,d,f){this.Ga=a;this.P=b;this.ya=c;this.xa=e;this.la=d;this.V=f};mti.s.prototype.getName=function(){return this.Ga};mti.e=function(a){this.b=a};mti.e.f="Unknown";mti.e.ua=new mti.s(mti.e.f,mti.e.f,mti.e.f,false);mti.e.prototype.parse=function(){return this.b.indexOf("MSIE")!=-1?fa(this):this.b.indexOf("Opera")!=-1?ga(this):this.b.indexOf("AppleWebKit")!=-1?ha(this):this.b.indexOf("Gecko")!=-1?ia(this):mti.e.ua};function G(a){var b=J(a,a.b,/(iPod|iPad|iPhone|Android)/);if(b!="")return b;a=J(a,a.b,/(Linux|Mac_PowerPC|Macintosh|Windows)/);if(a!=""){if(a=="Mac_PowerPC")a="Macintosh";return a}return mti.e.f}
function fa(a){var b=J(a,a.b,/(MSIE [\d\w\.]+)/);if(b!=""){var c=b.split(" ");b=c[0];c=c[1];return new mti.s(b,c,b,c,G(a),K(a,c)>=6)}return new mti.s("MSIE",mti.e.f,"MSIE",mti.e.f,G(a),false)}
function ga(a){var b=mti.e.f,c=mti.e.f,e=J(a,a.b,/(Presto\/[\d\w\.]+)/);if(e!=""){c=e.split("/");b=c[0];c=c[1]}else{if(a.b.indexOf("Gecko")!=-1)b="Gecko";e=J(a,a.b,/rv:([^\)]+)/);if(e!="")c=e}if(a.b.indexOf("Version/")!=-1){e=J(a,a.b,/Version\/([\d\.]+)/);if(e!="")return new mti.s("Opera",e,b,c,G(a),K(a,e)>=10)}e=J(a,a.b,/Opera[\/ ]([\d\.]+)/);if(e!="")return new mti.s("Opera",e,b,c,G(a),K(a,e)>=10);return new mti.s("Opera",mti.e.f,b,c,G(a),false)}
function ha(a){var b=G(a),c=J(a,a.b,/AppleWebKit\/([\d\.\+]+)/);if(c=="")c=mti.e.f;var e=mti.e.f;if(a.b.indexOf("Chrome")!=-1)e="Chrome";else if(a.b.indexOf("Safari")!=-1)e="Safari";var d=mti.e.f;if(a.b.indexOf("Version/")!=-1)d=J(a,a.b,/Version\/([\d\.\w]+)/);else if(e=="Chrome")d=J(a,a.b,/Chrome\/([\d\.]+)/);var f=J(a,c,/\d+\.(\d+)/);return new mti.s(e,d,"AppleWebKit",c,b,K(a,c)>=526||K(a,c)>=525&&parseInt(f)>=13)}
function ia(a){var b=mti.e.f,c=mti.e.f,e=false;if(a.b.indexOf("Firefox")!=-1){b="Firefox";var d=J(a,a.b,/Firefox\/([\d\w\.]+)/);if(d!=""){e=J(a,d,/\d+\.(\d+)/);c=d;e=d!=""&&K(a,d)>=3&&parseInt(e)>=5}}else if(a.b.indexOf("Mozilla")!=-1)b="Mozilla";d=J(a,a.b,/rv:([^\)]+)/);if(d=="")d=mti.e.f;else if(!e){e=K(a,d);var f=parseInt(J(a,d,/\d+\.(\d+)/)),i=parseInt(J(a,d,/\d+\.\d+\.(\d+)/));e=e>1||e==1&&f>9||e==1&&f==9&&i>=2||d.match(/1\.9\.1b[123]/)!=null||d.match(/1\.9\.1\.[\d\.]+/)!=null}return new mti.s(b,
c,"Gecko",d,G(a),e)}function K(a,b){a=J(a,b,/(\d+)/);if(a!="")return parseInt(a);return-1}function J(a,b,c){if((a=b.match(c))&&a[1])return a[1];return""};mti.d=function(a,b,c,e){this.a=a;this.l=b;this.ca=c;this.p=e||mti.d.K;this.n=new mti.D("-")};mti.d.K="mti";mti.d.r="loading";mti.d.J="active";mti.d.L="inactive";mti.d.Q="font";function L(a){A(a.a,a.l,a.n.j(a.p,mti.d.r));M(a,mti.d.r)}function N(a,b,c){A(a.a,a.l,a.n.j(a.p,b,c,mti.d.J));M(a,mti.d.Q+mti.d.J,b,c);setTimeout(function(){B(a.a,a.l,a.n.j(a.p,b,c,mti.d.r))},500)}
function ja(a,b,c){A(a.a,a.l,a.n.j(a.p,b,c,mti.d.L));M(a,mti.d.Q+mti.d.L,b,c);setTimeout(function(){B(a.a,a.l,a.n.j(a.p,b,c,mti.d.r))},2E3)}function O(a){A(a.a,a.l,a.n.j(a.p,mti.d.L));B(a.a,a.l,a.n.j(a.p,mti.d.r));setTimeout(function(){document.documentElement.className=document.documentElement.className.replace(/mti\-(.*?)loading/ig,"").replace(/^\s+|\s+$/g,"").replace(/\s+/g," ")+" mti-repaint"},100);M(a,mti.d.L)}
function ka(a){A(a.a,a.l,a.n.j(a.p,mti.d.J));B(a.a,document.documentElement,a.n.j(a.p,mti.d.r));M(a,mti.d.J);setTimeout(function(){document.documentElement.className=document.documentElement.className.replace(/mti\-(.*?)loading/ig,"").replace(/^\s+|\s+$/g,"").replace(/\s+/g," ")+" mti-repaint"},100)}function M(a,b,c,e){a.ca[b]&&a.ca[b](c,e)};mti.pa=function(){this.ia={}};function la(a,b){var c=[];for(var e in b)if(b.hasOwnProperty(e)){var d=a.ia[e];d&&c.push(d(b[e]))}return c};mti.m=function(a,b,c,e,d){this.a=a;this.A=b;this.R=c;this.M=e;this.fa=d;this.da=0;this.U=this.ha=false;this.Fa=new mti.X;this.Aa=new mti.q};mti.m.Y="_,arial,helvetica";mti.m.Z="n4";
mti.m.prototype.watch=function(a,b,c){for(var e=a.length,d=0;d<e;d++){var f=a[d];b[f]||(b[f]=[mti.m.Z]);this.da+=b[f].length}if(c)this.ha=c;for(d=0;d<e;d++){f=a[d];c=b[f];for(var i=0,l=c.length;i<l;i++){var j=c[i],g=Q(this,mti.m.Y,j),h=this.R.N(g);w(this.a,g);g=f;var k=this.A;A(k.a,k.l,k.n.j(k.p,g,j,mti.d.r));M(k,mti.d.Q+mti.d.r,g,j);k=Q(this,this.Fa.quote(g),j);if(h!=this.R.N(k)){w(this.a,k);N(this.A,g,j);this.U=true;R(this)}else S(this,this.fa(),h,k,g,j)}}};
function R(a){if(--a.da==0&&a.ha)a.U?ka(a.A):O(a.A)}mti.m.prototype.wa=function(a,b,c,e,d){if(b!=this.R.N(c)){w(this.a,c);N(this.A,e,d);this.U=true;R(this)}else if(this.fa()-a<mti.$)S(this,a,b,c,e,d);else{w(this.a,c);ja(this.A,e,d);R(this)}};function S(a,b,c,e,d,f){a.M(function(i,l){return function(){l.call(i,b,c,e,d,f)}}(a,a.wa),50)}
function Q(a,b,c){c=a.Aa.expand(c);b=a.a.createElement("span",{style:"position:absolute;top:-999px;font-size:300px;font-family:"+b+","+mti.m.Y+";"+c},"Mm");t(a.a,"body",b);return b};mti.F=function(a,b,c,e,d){this.a=a;this.ea=b;this.l=c;this.M=e;this.b=d;this.S=this.T=0};mti.F.prototype.ba=function(a,b){this.ea.ia[a]=b};mti.F.prototype.load=function(a){var b=new mti.d(this.a,this.l,a);this.b.V?ma(this,b,a):O(b)};mti.F.prototype.Ca=function(a,b,c,e){if(e)a.load(mti.u(this,this.Ha,b,c));else{a=--this.T==0;this.S--;if(a)this.S==0?O(b):L(b);c.watch([],{},a)}};
mti.F.prototype.Ha=function(a,b,c,e){var d=--this.T==0;d&&L(a);this.M(mti.u(this,function(f,i,l,j){setTimeout(function(){f.watch(i,l||{},j)},100)},b,c,e,d))};function ma(a,b,c){c=la(a.ea,c);a.S=a.T=c.length;for(var e=new mti.m(a.a,b,{N:function(l){return l.offsetWidth}},a.M,function(){return(new Date).getTime()}),d=0,f=c.length;d<f;d++){var i=c[d];na(i,a.b,mti.u(a,a.Ca,i,b,e))}};mti.D=function(a){this.Da=a||mti.D.oa};mti.D.oa="-";mti.D.prototype.j=function(){for(var a=[],b=0;b<arguments.length;b++)a.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return a.join(this.Da)};mti.X=function(){this.na='"'};mti.X.prototype.quote=function(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var e=a[c].replace(/['"]/g,"");e.indexOf(" ")==-1?b.push(e):b.push(this.na+e+this.na)}return b.join(",")};mti.q=function(){this.ma=mti.q.sa;this.I=mti.q.va};mti.q.sa=["font-style","font-weight"];mti.q.va={"font-style":[["n","normal"]],"font-weight":[["4","normal"]]};mti.q.aa=function(a,b,c){this.Ba=a;this.Ja=b;this.I=c};mti.q.aa.prototype.expand=function(a,b){for(var c=0;c<this.I.length;c++)if(b==this.I[c][0]){a[this.Ba]=this.Ja+":"+this.I[c][1];return}};
mti.q.prototype.expand=function(a){if(a.length!=2)return null;for(var b=[null,null],c=0,e=this.ma.length;c<e;c++){var d=this.ma[c],f=a.substr(c,1);(new mti.q.aa(c,d,this.I[d])).expand(b,f)}return b[0]&&b[1]?b.join(";")+";":null};window.MonoTypeWebFonts=function(){var a=(new mti.e(navigator.userAgent)).parse();return new mti.F(new mti.g(document,a),new mti.pa,document.documentElement,function(b,c){setTimeout(b,c)},a)}();window.MonoTypeWebFonts.load=window.MonoTypeWebFonts.load;window.MonoTypeWebFonts.addModule=window.MonoTypeWebFonts.ba;var U=window.MTIConfig||{isAsync:false,EnableCustomFOUTHandler:false,RemoveMTIClass:false};mti.t=function(a,b,c){this.C=a;this.a=b;this.Ia=c;this.v={};this.o=[];this.i=[]};mti.t.prototype.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);else{for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1}};
function V(a,b,c){var e=a.Ia,d=C(a.a,b),f=0,i=0;d=(d||"").replace(/^\s|\s$/g,"").replace(/'|"/g,"").replace(/,\s*/g,"|");if(d!=""){d=d.split("|");for(f=0;f<d.length;f++){var l=new RegExp("^("+d[f]+")$","ig");for(i=0;i<e.length;i++){var j=e[i],g=j.fontfamily;if(l.test(g.replace(/^\s|\s$/g,""))){a.i.push(g.replace(/^\s|\s$/g,""));if(U.EnableCustomFOUTHandler==true)A(a.a,b,c?"mti_font_element"+c:"mti_font_element");a.o.push(b);if(j.enableSubsetting)if(a.v[g.replace(/^\s|\s$/g,"")])a.v[g.replace(/^\s|\s$/g,
"")]+=D(a.a,b);else a.v[g.replace(/^\s|\s$/g,"")]=D(a.a,b)}}}}}
function W(a,b,c){b="img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(",");var e=a.C,d=null;do{d=e.firstChild;if(d==null){if(e.nodeType==1)if(a.indexOf(b,e.tagName.toLowerCase())<0)c?V(a,e,c):V(a,e);d=e.nextSibling}if(d==null){e=e;do{d=e.parentNode;if(d==a.C){if(d.tagName.toLowerCase()!="body")if(a.indexOf(b,d.tagName.toLowerCase())<0)c?V(a,d,c):V(a,d);break}if(d!=null){if(d.nodeType==1)if(a.indexOf(b,d.tagName.toLowerCase())<0)c?V(a,d,c):V(a,d);e=d;d=d.nextSibling}}while(d==
null)}e=d}while(e!=a.C);c=false;for(var f in a.v){c=true;break}if(c)return a.v;return null}mti.t.prototype.ga=function(){return this.i};
mti.t.prototype.O=function(a,b){var c="img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(","),e=this.C,d=null;do{d=e.firstChild;if(d==null){e.nodeType==1&&this.indexOf(c,e.tagName.toLowerCase())<0&&V(this,e);d=e.nextSibling}if(d==null){e=e;do{d=e.parentNode;if(d==this.C)break;d.nodeType==1&&this.indexOf(c,d.tagName.toLowerCase())<0&&C(this.a,d).indexOf(a)>-1&&this.a.O(d,a,b);e=d;d=d.nextSibling}while(d==null)}e=d}while(e!=this.C);a=false;for(var f in this.v){a=
true;break}if(a)return this.v;return null};mti.$=4E4;mti.w=function(a,b,c,e,d){this.B=a;this.b=b;this.a=c;this.c=e;this.za={};this.h=d;this.i=[]};mti.w.ra="monotype";
function na(a,b,c){var e=a.c.projectId,d;if(e){a.B.mti_element_cache=[];X(a);var f=a.b.getName();f=f.toLowerCase();var i=f=="opera"?true:false;f=function(){function j(){h=new mti.t(document.body,a.a,a.c.pfL);k=W(h);i&&Y(a);for(var n in k)k[n]=Z(a,k[n]);a.B.mti_element_cache=h.o;$(a,h.i,k);d=h.i;if(i)d=a.c.pfL;n=h.o;a.h!=null&&mti.u(a.h,a.h.load,n)();for(var q=0;q<n.length;q++)for(var o in a.H)C(a.a,n[q]).indexOf(o)>-1&&a.a.O(n[q],o,a.H[o])}var g=a.c.reqSub,h=null,k=null;if(i&&g){oa(a);pa(a,function(){j()})}else if(!i&&
g)j();else{h=new mti.t(document.body,a.a,a.c.pfL);k=W(h);$(a,h.ga);d=h.i;if(i)d=a.c.pfL;a.B.mti_element_cache=h.o;a.h!=null&&mti.u(a.h,a.h.load,h.o)()}c(b.V)};setTimeout(function(){if(U.UseTextIndent==true){document.documentElement.style.textIndent="";document.documentElement.style.textAlign=""}else document.documentElement.style.visibility=""},750);if(U.isAsync===true)U.onReady=f;else if(a.c.reqSub){ba(a.a,f);f=new mti.t(document.body,a.a,a.c.pfL);W(f);d=f.i}else aa(a.a,function(){var j=new mti.t(document.body,
a.a,a.c.pfL);W(j);$(a,j.i);d=j.i;if(i)d=a.c.pfL;a.B.mti_element_cache=j.o;a.h!=null&&mti.u(a.h,a.h.load,j.o)();c(b.V)});if(U.EnableCustomFOUTHandler==true)if(U.UseTextIndent==true){document.documentElement.style.textIndent="-9999px";document.documentElement.style.textAlign="left"}else document.documentElement.style.visibility="hidden";var l=[];if(d)l=d;a.B["__mti_fntLst"+e]=function(){for(var j=[],g={},h=[],k=0;k<l.length;k++)if(!g.hasOwnProperty(l[k])){j.push({fontfamily:l[k]});h.push(l[k]);g[l[k]]=
1}return j}}else c(true)}
function oa(a,b){var c=document.createElement("STYLE");c.setAttribute("type","text/css");c.id="monotype_fake_fontface_"+a.c.projectId;var e="";a=a.c.pfL;if(a!=null){e+="@font-face{font-family:opera_testfont;src:url(data:font/opentype;base64,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)}";for(var d=
0;d<a.length;d++)e+="@font-face{font-family:'"+a[d].fontfamily+(b?b:"")+"';src:url(data:font/opentype;base64,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);}"}c.textContent=
e;b=document.getElementsByTagName("HEAD");b.length>0&&b[0].appendChild(c)}function Y(a){(a=document.getElementById("monotype_fake_fontface_"+a.c.projectId))&&a.parentNode.removeChild(a)}
function pa(a,b){var c=document.createElement("SPAN");c.innerHTML="MMMWWW";c.style.position="absolute";c.style.left="-32768px";c.style.fontFamily="opera_testfont";document.documentElement.appendChild(c);var e=0,d=(new Date).getTime();e=window.setInterval(function(){if(C(a.a,c)==="opera_testfont"||(new Date).getTime()-d>200){try{document.documentElement.removeChild(c)}catch(f){}b();window.clearInterval(e)}},60)}mti.w.prototype.H={};
function $(a,b,c,e){var d="TTF",f=a.c.projectId,i=a.c.ec,l=a.c.fcURL,j=a.c.dfcURL,g=a.a.createElement("style",{type:"text/css",id:"mti_fontface_"+(e?"Aj_":"")+a.c.projectId}),h="",k=false,n={},q={TTF:"truetype",WOFF:"woff",SVG:"svg",MTX:"truetype",OTF:"opentype"},o=a.b.getName();o=o.toLowerCase();var H=a.b.P;H=o=="msie"&&H<8?true:false;o=o=="opera"?true:false;b||(b=[]);for(var E=0;E<a.c.pfL.length;E++){var x=a.c.pfL[E],s=x.fontfamily,y=x.contentIds,ca=x.enableOtf,z=x.enableSubsetting,m=a.c.ffArray,
p=a.b.getName();p=p.toLowerCase();if(p=="firefox")p="mozilla";if(/ipad|ipod|iphone/.test(a.b.la.toLowerCase()))p="msafari";d=a.b.P;m=m[p];p="";for(var T in m)if(parseFloat(d)>=parseFloat(T))if(y[m[T].toUpperCase()])p=m[T];d=p;m=true;if(b.length>0||o||!z){m=o||!z?true:false;for(z=0;z<b.length;z++)if(b[z]==s){a.i.push(s);m=true;break}o&&a.i.push(s);if(m){z=d!=null&&d.toUpperCase()=="EOT"||d.toUpperCase()=="MTX";x=x.enableSubsetting;m=j;p=a.c.ck;var r=d,u=y[r.toUpperCase()];m=(window.location.protocol==
"https:"?"https://":"http://")+m.replace("http://","").replace("https://","");m=m+"?";if(i)m+=p+"&";m+="fctypeId="+a.c.fctypeArray[r]+"&fcId="+y.TTF+"&origId="+u;m+="&projectId="+f;m+="&content=";p="";r=a.b.getName();r=r.toLowerCase();r=r=="msie"?true:false;if(c){u=null;if(r){if(c[s])u=c[s].replace("\\","").replace("#","").replace("&","").replace(">","").replace("%","").replace("<","").replace('"',"").replace("'","").replace("+","").replace("/","%2f")}else u=escape((c[s]||"").replace("\\","").replace("/",
"%2f"));p+=(u||"")+"Mm"}p=m+p;u=a.c.bsmcArray;var v=a.b.getName();v=v.toLowerCase();if(v=="firefox")v="mozilla";if(/ipad|ipod|iphone/.test(a.b.la.toLowerCase()))v="msafari";r=a.b.P;u=u[v];v="";for(var da in u)if(parseFloat(r)>=parseFloat(da))v=u[da];r=v;if(p.length>r){m=r-m.length;m={ka:Math.ceil(p.length/m),ja:m}}else m={ka:1};p=m.ka;u=false;if(H&&p>1){p=1;u=true;x=false}r="";if(p>1||e){if(c!==null){k=true;n[s]||(n[s]=[]);if(u=c[s]){v=[];for(var I="",P=1;P<=p;P++){I=(e?s.length>25?s.substring(0,
20):s:s)+(e?e:"")+(p>1?P:"");n[s].push(I);c[I]=u.substr((P-1)*m.ja,m.ja);r=qa(a,y,f,x,i,l,j,a.c.ck,I,c,d,ca);if(r!=""){h+='@font-face{\nfont-family:"'+I+'";\nsrc:url("'+r+'")';z||(h+=' format("'+q[d.toUpperCase()]+'")');h+=";}\n";v.push("'"+I+"'")}}a.H[s]=v}}}else{r=qa(a,y,f,x,i,l,j,a.c.ck,s+(e?e:""),u?null:c,d,ca);if(r!=""){h+='@font-face{\nfont-family:"'+s+(e?e:"")+'";\nsrc:url("'+r+'")';if(!z){s=y[d.toUpperCase()];y=q[d.toUpperCase()];s||(y=q.TTF);h+=" format('"+y+"')"}h+=";}\n"}}}}}if(k===true||
e){w(a.a,a.a.getElementById("mti_stylesheet_"+(e?"Aj_":"")+a.c.projectId)||{});e?X(a,n,e):X(a,n)}h!=""&&t(a.a,"head",g);if(g.styleSheet)g.styleSheet.cssText=h;else{a=document.createTextNode(h);g.appendChild(a)}}
function X(a,b,c){var e=new mti.D("-"),d=a.a.createElement("style",{type:"text/css",id:"mti_stylesheet_"+(c?"Aj_":"")+a.c.projectId}),f="",i="";i=U.UseTextIndent==true?"text-align:left;text-indent:-9999px;":"visibility:hidden;";if(U.EnableCustomFOUTHandler==true){var l=a.c.pfL;f+="."+mti.d.K+"-loading .mti_font_element"+(c?"_Aj":"")+"{"+i+"}\n";for(var j=0;j<l.length;j++){var g=l[j].fontfamily;if(c)g+=c;f+="."+e.j(mti.d.K,g,mti.m.Z,mti.d.r)+" .mti_font_element"+(c?c:"")+"{"+i+"}\n"}}for(j in a.c.selectorFontMap){e=
a.c.selectorFontMap[j];g=g=e.familyName;if(b&&b[g]&&b[g].length>0)g=b[g].join("','");if(!c){f+=j+"{font-family:'"+g+"';";if(a.h!=null)if((g=e.otf)&&g!=null&&g!="")f+=a.h.La(g);f+="}\n"}if(U.EnableCustomFOUTHandler==true){f+="/*fout specific code:*/\n";g=j.split(",");for(var h in g)f+="."+mti.d.K+"-loading "+g[h]+"{"+i+"}\n"}}f!=""&&t(a.a,"head",d);if(d.styleSheet)d.styleSheet.cssText=f;else{a=document.createTextNode(f);d.appendChild(a)}}
function Z(a,b){if(b&&typeof b=="string"){b=b.replace(/\s/g,"").replace(/\n/g,"").replace(/\r/g,"");a="";for(var c=b.length,e=null,d=0;d<c;d++){e=b.charAt(d);if(a.indexOf(e)==-1)a+=e}return a}return""}
function qa(a,b,c,e,d,f,i,l,j,g,h,k){var n=b[h.toUpperCase()],q="http://",o="",H=a.c.fontdataversion,E=a.c.env;if(window.location.protocol=="https:")q="https://";f=f.replace("http://","").replace("https://","");i=i.replace("http://","").replace("https://","");f=q+f+(k?"ot/":"");i=q+i;if(e){o=i+"?";if(d)o+=l+"&";o+="fctypeId="+a.c.fctypeArray[h]+"&fcId="+b.TTF+"&origId="+n;if(H=="v2"){o+="&fontdataversion=v2";if(E!="undefined"&&E!="")o+="&env="+E}}else if(d)if(n){if(H=="v2")if(h.toUpperCase()=="TTF")f+=
"1/";else if(h.toUpperCase()=="EOT")f+="2/";else if(h.toUpperCase()=="WOFF")f+="3/";else if(h.toUpperCase()=="SVG")f+="11/";o=f+n+"."+h.toLowerCase()+"?"+l}else o=f+b.TTF+".ttf?"+l;else o=f+"?fctypeId="+a.c.fctypeArray[h]+"&fcId="+n;o+="&projectId="+c;a=a.b.getName();a=a.toLowerCase();a=a=="msie"?true:false;b=null;if(g)if(e){if(a){if(g[j])b=g[j].replace("\\","").replace("#","").replace("&","").replace(">","").replace("%","").replace("<","").replace('"',"").replace("'","").replace("+","")}else b=escape(g[j]||
"");if(b.length>0)o+="&content="+(b||"")+"Mm";else o=""}if(h!=null&&h.toUpperCase()=="SVG")o+="#"+n;return o}
function ra(a,b){var c=false,e=document.getElementById(b);c=e===null?false:true;if(!c)return false;var d=sa(a),f=null,i=null;function l(){f=new mti.t(e,a.a,a.c.pfL);i=W(f,{},d);var j=a.b.getName();j=j.toLowerCase();(j=="opera"?true:false)&&Y(a);j=[];for(var g in i){if(i[g])i[g]=Z(a,i[g]);g+=d;j.push(g)}g=a.B.mti_element_cache=f.o;$(a,f.i,i,d);g=f.o;a.h!=null&&mti.u(a.h,a.h.Ma,g)();for(var h=0;h<g.length;h++)for(var k in a.H)if(C(a.a,g[h]).indexOf(k)>-1)if(g[h].getAttribute("id")==b||ea(a.a,a.a.getElementById(b),
g[h]))a.a.O(g[h],k,a.H[k]);(new mti.m(a.a,new mti.d(a.a,document.documentElement,a.c),{N:function(n){return n.offsetWidth}},function(n,q){setTimeout(n,q)},function(){return(new Date).getTime()})).watch(j,{},true)}c=a.b.getName();c=c.toLowerCase();if(c=="opera"?true:false){oa(a,d);pa(a,function(){l()})}else l();U.RemoveMTIClass==true&&setTimeout(function(){var j=a.a,g="mti_font_element"+d,h=j.getElementsByClassName(g),k=j.b.getName();k=k.toLowerCase();var n=j.b.P;k=k=="msie"&&n<8?true:false;for(n=
new RegExp(g,"ig");h.length>0;){for(var q=0;q<h.length;q++)if(h[q].className.split(" ").length==1&&!k)h[q].removeAttribute("class");else h[q].className=h[q].className.replace(n," ").replace(/^\s+|\s+$/g,"");h=j.getElementsByClassName(g)}},mti.$)}mti.w.prototype.load=function(a){a(this.i,this.za)};mti.qa=function(a){this.G=a};
mti.qa.prototype.protocol=function(){var a=["http:","https:"],b=a[0];if(this.G&&this.G.location&&this.G.location.protocol){var c=0;for(c=0;c<a.length;c++)if(this.G.location.protocol==a[c])return this.G.location.protocol}return b};mti.W=function(a,b){this.a=a;this.c=b};
mti.W.prototype.appendBannerScript=function(){var a;a=new RegExp(escape("WFS_MTI_SS")+"=([^;]+)");if(a.test(document.cookie+";")){a.exec(document.cookie+";");a=unescape(RegExp.$1)}else a=false;var b=this.c.bannerHandlerURL;if(b){b+="?projectId="+this.c.projectId;if(a!==false)b+="&WFS_MTI_SS="+a;b+="&"+escape((new Date).getTime());t(this.a,"head",this.a.createElement("Script",{type:"text/javascript",src:b}))}};mti.ta=function(a){this.Ea=a};
MonoTypeWebFonts.ba(mti.w.ra,function(a){var b=(new mti.e(navigator.userAgent)).parse(),c=new mti.g(document,b),e=null;if(a.enableOtf)e=new mti.Ka(c,b,a);window.MonoTypeWebFonts.BannerHandler=new mti.W(c,a);a=new mti.w(window,b,c,a,e);var d=new mti.ta(a);window.MonoTypeWebFonts.renderPartial=function(f){ra(d.Ea,f)};return a});function sa(){for(var a="",b=0;b<5;b++)a+="abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*26));return a}mti.w.prototype.ga=function(){return this.i};})(this,document);
if(window.addEventListener){  window.addEventListener('load', function(){MonoTypeWebFonts.cleanup(); MonoTypeWebFonts.loadColo();}, false);}else if(window.attachEvent){  window.attachEvent('onload', function(){MonoTypeWebFonts.cleanup(); MonoTypeWebFonts.loadColo();});}MonoTypeWebFonts.cleanupExecuted = false;MonoTypeWebFonts.cleanup = function(){if(MonoTypeWebFonts.cleanupExecuted === true){ return; }MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);var className = document.documentElement.className;var MTIConfig = window['MTIConfig'] || { 'RemoveMTIClass': false };if(MTIConfig['RemoveMTIClass']==true){function walkTheDOM (node, func) {func(node);node = node.firstChild;while (node) {walkTheDOM(node, func);node = node.nextSibling;}}function getElementsByClassName (className) {if (document.getElementsByClassName){return document.getElementsByClassName(className);}else {var results = [];walkTheDOM(document.body, function (node) {var a, c = node.className, i;if (c) {a = c.split(' ');for (i=0; i<a.length; i++) {if (a[i] === className) {results.push(node);break;}}}});return results;}}var mti_elements = getElementsByClassName('mti_font_element');var u=navigator.userAgent;var ua = u.toLowerCase(), is = function (t) { return ua.indexOf(t) > -1 },b = (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)), c=false;if((RegExp.$1==6)||(RegExp.$1==7)){	c=true;	}while(mti_elements.length > 0){for(i=0; i< mti_elements.length; i++){var classList=mti_elements[i].className.split(' ');if(classList.length==1 && !c){mti_elements[i].removeAttribute('class');}else{mti_elements[i].className=mti_elements[i].className.replace(/mti_font_element/ig, ' ').replace(/^\s+|\s+$/g,'');}}mti_elements = getElementsByClassName('mti_font_element');}}className = className;if(!document.getElementById('MonoTypeFontApiFontTracker')){  var fontTrackingUrl = "http://fast.fonts.com/t/1.css";  if(window.location.protocol == 'https:'){    fontTrackingUrl = fontTrackingUrl.replace(/http:/,'https:');  }  var head = document.getElementsByTagName('HEAD')[0];  var cssEle = document.createElement('LINK');  if(cssEle){      cssEle.setAttribute('id','MonoTypeFontApiFontTracker');      cssEle.setAttribute('type','text/css');      cssEle.setAttribute('rel','stylesheet');      cssEle.setAttribute('href',fontTrackingUrl + "?apiType=js&projectid=18a66a11-f6ee-4a2e-ae83-42d0e5e972d9");      head.appendChild(cssEle);  }}window['mti_element_cache'] = [];};MonoTypeWebFonts._fontActiveEventList = [];MonoTypeWebFonts._fontLoadingEventList = [];MonoTypeWebFonts._activeEventList = [];MonoTypeWebFonts._inActiveEventList = [];MonoTypeWebFonts.addEvent = function(eventName, callbackFunction){   if(eventName.toLowerCase() == 'fontactive'){      MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'fontloading'){      MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'inactive'){      MonoTypeWebFonts._inActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'active'){      MonoTypeWebFonts._activeEventList.push(callbackFunction);  }};MonoTypeWebFonts.loadFonts = function(){MonoTypeWebFonts.load({monotype:{ reqSub:false, enableOtf: false, otfJsParentUrl: 'http://fast.fonts.com/jsapi/otjs/',pfL:[{'fontfamily' : "GeorgiaProW02-Bold" ,contentIds :{EOT: '8c625176-05b2-4583-bd21-c80e0bdd395d',WOFF: 'a516b63c-55dd-4c49-9e60-64c5f0ab0d11',TTF: '514bb436-e41b-45b9-9656-c186d62dde1f',SVG: 'd2822045-5c27-429d-a313-e66fa2b3463f'}, enableSubsetting : false, enableOtf: false },{'fontfamily' : "GeorgiaProW02-BoldItali" ,contentIds :{EOT: '73531281-65da-4859-bebf-7e7ad560a816',WOFF: 'c1d0fc20-1ce8-4d69-8958-f0c1271e399d',TTF: '3a4c83f0-983b-45ff-88aa-30e8a1ba228e',SVG: '9a63d142-df5c-4944-8cb3-7dbad085c5bc'}, enableSubsetting : false, enableOtf: false },{'fontfamily' : "GeorgiaProW02-Italic" ,contentIds :{EOT: '324bc2e0-9fbe-42ec-9dfe-30acaa4387d4',WOFF: '3ec94cb3-3546-45b3-bacc-6f873eeae7be',TTF: '20ba53fb-f9e7-43a7-81a5-6eb147ac7a7f',SVG: '07208e7b-e1be-4b16-8408-a4dd7f1b8e5c'}, enableSubsetting : false, enableOtf: false },{'fontfamily' : "GeorgiaProW02-Regular" ,contentIds :{EOT: '6ff19380-2061-418b-af12-430bf8444e33',WOFF: '978beb04-def5-4bb9-82da-026d4d197759',TTF: '50981f5e-9a51-4094-a17c-687c7388e6b0',SVG: '24682079-5fad-48af-8798-9cfa5fa6318c'}, enableSubsetting : false, enableOtf: false }],selectorFontMap:{},ck:'d44f19a684109620e484147daf90e818082784eafd613082f04a2901e2fc90e07abf26e09077eeb422c4d34d256883d0',ec:'true',fcURL:'http://fast.fonts.com/dv2/',dfcURL:'http://api2.fonts.com/FontSubsetter.ashx',fontdataversion:'v2',sO:'True',ffArray:{safari: {'3.1': 'ttf','5.1':'woff'}, msafari: {'1' : 'svg', '4.2' : 'ttf'}, chrome: {'3' :'svg', '4' : 'ttf','5':'woff'}, opera: {'10' : 'ttf', '11.10' : 'woff'}, msie: {'4' : 'eot', '9' : 'woff', '10':'otf'}, mozilla: {'3.5' : 'ttf', '3.6' : 'woff'}},bsmcArray:{safari: {'3.1': '2000','5.0':'1650','5.1':'8190'}, msafari: {'1' : '8190'}, chrome: {'3' :'8190'}, opera: {'10' : '8190'}, msie: {'4' : '2064'}, mozilla: {'3.5' : '8190'}},fctypeArray:{'ttf':'1','eot':'2','woff':'3','svg': '11','otf':'13'},projectId:'18a66a11-f6ee-4a2e-ae83-42d0e5e972d9',EOD:null},fontloading:function(fontFamily, fontDescription){  for(var i=0; i<MonoTypeWebFonts._fontLoadingEventList.length; i++){      MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},fontactive:function(fontFamily, fontDescription) {  for(var i=0; i<MonoTypeWebFonts._fontActiveEventList.length; i++){      MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},inactive:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._inActiveEventList.length; i++){      MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);  }},active:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._activeEventList.length; i++){      MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);  }}});};MonoTypeWebFonts.loadFonts();MonoTypeWebFonts.RefreshFonts=function(){MonoTypeWebFonts.cleanupExecuted = false;if(document.getElementById('mti_stylesheet_18a66a11-f6ee-4a2e-ae83-42d0e5e972d9')!=null){var nodeToRemove1 = document.getElementById('mti_stylesheet_18a66a11-f6ee-4a2e-ae83-42d0e5e972d9');var parentNode1 = nodeToRemove1.parentNode;parentNode1.removeChild(nodeToRemove1);}if(document.getElementById('mti_fontface_18a66a11-f6ee-4a2e-ae83-42d0e5e972d9')!=null){var nodeToRemove2 = document.getElementById('mti_fontface_18a66a11-f6ee-4a2e-ae83-42d0e5e972d9');var parentNode2 = nodeToRemove2.parentNode;parentNode2.removeChild(nodeToRemove2);}MonoTypeWebFonts.loadFonts();};MonoTypeWebFonts.loadColo = function(){};setTimeout(function(){ MonoTypeWebFonts.cleanup(); }, 20000);