/*
* @Author: Jiyun
* @Date:   2017-06-17 18:14:11
* @Last Modified by:   Jiyun
* @Last Modified time: 2017-12-23 21:06:35
*/

/* eslint-disable */
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

/*! URI.js v1.18.10 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(g,k){"object"===typeof module&&module.exports?module.exports=k():"function"===typeof define&&define.amd?define(k):g.IPv6=k(g)})(this,function(g){var k=g&&g.IPv6;return{best:function(h){h=h.toLowerCase().split(":");var l=h.length,b=8;""===h[0]&&""===h[1]&&""===h[2]?(h.shift(),h.shift()):""===h[0]&&""===h[1]?h.shift():""===h[l-1]&&""===h[l-2]&&h.pop();l=h.length;-1!==h[l-1].indexOf(".")&&(b=7);var m;for(m=0;m<l&&""!==h[m];m++);if(m<b)for(h.splice(m,1,"0000");h.length<b;)h.splice(m,0,"0000");
for(m=0;m<b;m++){for(var l=h[m].split(""),g=0;3>g;g++)if("0"===l[0]&&1<l.length)l.splice(0,1);else break;h[m]=l.join("")}var l=-1,k=g=0,f=-1,n=!1;for(m=0;m<b;m++)n?"0"===h[m]?k+=1:(n=!1,k>g&&(l=f,g=k)):"0"===h[m]&&(n=!0,f=m,k=1);k>g&&(l=f,g=k);1<g&&h.splice(l,g,"");l=h.length;b="";""===h[0]&&(b=":");for(m=0;m<l;m++){b+=h[m];if(m===l-1)break;b+=":"}""===h[l-1]&&(b+=":");return b},noConflict:function(){g.IPv6===this&&(g.IPv6=k);return this}}});
(function(g){function k(b){throw new RangeError(e[b]);}function h(b,e){for(var f=b.length,h=[];f--;)h[f]=e(b[f]);return h}function l(b,e){var f=b.split("@"),g="";1<f.length&&(g=f[0]+"@",b=f[1]);b=b.replace(v,".");f=b.split(".");f=h(f,e).join(".");return g+f}function b(b){for(var e=[],f=0,h=b.length,g,a;f<h;)g=b.charCodeAt(f++),55296<=g&&56319>=g&&f<h?(a=b.charCodeAt(f++),56320==(a&64512)?e.push(((g&1023)<<10)+(a&1023)+65536):(e.push(g),f--)):e.push(g);return e}function m(b){return h(b,function(b){var e=
"";65535<b&&(b-=65536,e+=r(b>>>10&1023|55296),b=56320|b&1023);return e+=r(b)}).join("")}function A(b,e){return b+22+75*(26>b)-((0!=e)<<5)}function u(b,e,f){var h=0;b=f?q(b/700):b>>1;for(b+=q(b/e);455<b;h+=36)b=q(b/35);return q(h+36*b/(b+38))}function f(b){var e=[],f=b.length,h,g=0,a=128,c=72,d,p,t,w,l;d=b.lastIndexOf("-");0>d&&(d=0);for(p=0;p<d;++p)128<=b.charCodeAt(p)&&k("not-basic"),e.push(b.charCodeAt(p));for(d=0<d?d+1:0;d<f;){p=g;h=1;for(t=36;;t+=36){d>=f&&k("invalid-input");w=b.charCodeAt(d++);
w=10>w-48?w-22:26>w-65?w-65:26>w-97?w-97:36;(36<=w||w>q((2147483647-g)/h))&&k("overflow");g+=w*h;l=t<=c?1:t>=c+26?26:t-c;if(w<l)break;w=36-l;h>q(2147483647/w)&&k("overflow");h*=w}h=e.length+1;c=u(g-p,h,0==p);q(g/h)>2147483647-a&&k("overflow");a+=q(g/h);g%=h;e.splice(g++,0,a)}return m(e)}function n(e){var f,h,g,l,a,c,d,p,t,w=[],n,m,z;e=b(e);n=e.length;f=128;h=0;a=72;for(c=0;c<n;++c)t=e[c],128>t&&w.push(r(t));for((g=l=w.length)&&w.push("-");g<n;){d=2147483647;for(c=0;c<n;++c)t=e[c],t>=f&&t<d&&(d=t);
m=g+1;d-f>q((2147483647-h)/m)&&k("overflow");h+=(d-f)*m;f=d;for(c=0;c<n;++c)if(t=e[c],t<f&&2147483647<++h&&k("overflow"),t==f){p=h;for(d=36;;d+=36){t=d<=a?1:d>=a+26?26:d-a;if(p<t)break;z=p-t;p=36-t;w.push(r(A(t+z%p,0)));p=q(z/p)}w.push(r(A(p,0)));a=u(h,m,g==l);h=0;++g}++h;++f}return w.join("")}var B="object"==typeof exports&&exports&&!exports.nodeType&&exports,z="object"==typeof module&&module&&!module.nodeType&&module,D="object"==typeof global&&global;if(D.global===D||D.window===D||D.self===D)g=
D;var y,E=/^xn--/,x=/[^\x20-\x7E]/,v=/[\x2E\u3002\uFF0E\uFF61]/g,e={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},q=Math.floor,r=String.fromCharCode,C;y={version:"1.3.2",ucs2:{decode:b,encode:m},decode:f,encode:n,toASCII:function(b){return l(b,function(b){return x.test(b)?"xn--"+n(b):b})},toUnicode:function(b){return l(b,function(b){return E.test(b)?f(b.slice(4).toLowerCase()):b})}};if("function"==
typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return y});else if(B&&z)if(module.exports==B)z.exports=y;else for(C in y)y.hasOwnProperty(C)&&(B[C]=y[C]);else g.punycode=y})(this);
(function(g,k){"object"===typeof module&&module.exports?module.exports=k():"function"===typeof define&&define.amd?define(k):g.SecondLevelDomains=k(g)})(this,function(g){var k=g&&g.SecondLevelDomains,h={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",
org:"ae",de:"com "},has:function(g){var b=g.lastIndexOf(".");if(0>=b||b>=g.length-1)return!1;var l=g.lastIndexOf(".",b-1);if(0>=l||l>=b-1)return!1;var k=h.list[g.slice(b+1)];return k?0<=k.indexOf(" "+g.slice(l+1,b)+" "):!1},is:function(g){var b=g.lastIndexOf(".");if(0>=b||b>=g.length-1||0<=g.lastIndexOf(".",b-1))return!1;var l=h.list[g.slice(b+1)];return l?0<=l.indexOf(" "+g.slice(0,b)+" "):!1},get:function(g){var b=g.lastIndexOf(".");if(0>=b||b>=g.length-1)return null;var l=g.lastIndexOf(".",b-1);
if(0>=l||l>=b-1)return null;var k=h.list[g.slice(b+1)];return!k||0>k.indexOf(" "+g.slice(l+1,b)+" ")?null:g.slice(l+1)},noConflict:function(){g.SecondLevelDomains===this&&(g.SecondLevelDomains=k);return this}};return h});
(function(g,k){"object"===typeof module&&module.exports?module.exports=k(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],k):g.URI=k(g.punycode,g.IPv6,g.SecondLevelDomains,g)})(this,function(g,k,h,l){function b(a,c){var d=1<=arguments.length,p=2<=arguments.length;if(!(this instanceof b))return d?p?new b(a,c):new b(a):new b;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&d)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==c?this.absoluteTo(c):this}function m(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function A(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function u(a){return"Array"===A(a)}function f(a,c){var d={},b,t;if("RegExp"===A(c))d=null;else if(u(c))for(b=0,t=c.length;b<t;b++)d[c[b]]=!0;else d[c]=!0;
b=0;for(t=a.length;b<t;b++)if(d&&void 0!==d[a[b]]||!d&&c.test(a[b]))a.splice(b,1),t--,b--;return a}function n(a,c){var d,b;if(u(c)){d=0;for(b=c.length;d<b;d++)if(!n(a,c[d]))return!1;return!0}var t=A(c);d=0;for(b=a.length;d<b;d++)if("RegExp"===t){if("string"===typeof a[d]&&a[d].match(c))return!0}else if(a[d]===c)return!0;return!1}function B(a,c){if(!u(a)||!u(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var d=0,b=a.length;d<b;d++)if(a[d]!==c[d])return!1;return!0}function z(a){return a.replace(/^\/+|\/+$/g,
"")}function D(a){return escape(a)}function y(a){return encodeURIComponent(a).replace(/[!'()*]/g,D).replace(/\*/g,"%2A")}function E(a){return function(c,d){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!d);return this}}function x(a,c){return function(d,b){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===c&&(d=d.substring(1)));this._parts[a]=d;this.build(!b);return this}}var v=l&&l.URI;b.version="1.18.10";var e=b.prototype,q=Object.prototype.hasOwnProperty;
b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\.-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};b.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};b.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();if("input"!==c||"image"===a.type)return b.domAttributes[c]}};b.encode=y;b.decode=decodeURIComponent;b.iso8859=function(){b.encode=escape;b.decode=
unescape};b.unicode=function(){b.encode=y;b.decode=decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'",
"%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?d.replace(/%20/g,"+"):d};b.decodeQuery=function(a,c){a+="";void 0===c&&
(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(d){return a}};var r={encode:"encode",decode:"decode"},C,F=function(a,c){return function(d){try{return b[c](d+"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(p){return d}}};for(C in r)b[C+"PathSegment"]=F("pathname",r[C]),b[C+"UrnPathSegment"]=F("urnpath",r[C]);r=function(a,c,d){return function(p){var t;t=d?function(a){return b[c](b[d](a))}:b[c];p=(p+"").split(a);for(var e=0,
f=p.length;e<f;e++)p[e]=t(p[e]);return p.join(a)}};b.decodePath=r("/","decodePathSegment");b.decodeUrnPath=r(":","decodeUrnPathSegment");b.recodePath=r("/","encodePathSegment","decode");b.recodeUrnPath=r(":","encodeUrnPathSegment","decode");b.encodeReserved=F("reserved","encode");b.parse=function(a,c){var d;c||(c={});d=a.indexOf("#");-1<d&&(c.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(c.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(c.protocol=
null,a=a.substring(2),a=b.parseAuthority(a,c)):(d=a.indexOf(":"),-1<d&&(c.protocol=a.substring(0,d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){a=a.replace(/\\/g,"/");var d=a.indexOf("/"),b;-1===d&&(d=a.length);if("["===a.charAt(0))b=a.indexOf("]"),c.hostname=a.substring(1,b)||null,c.port=a.substring(b+2,d)||null,"/"===
c.port&&(c.port=null);else{var e=a.indexOf(":");b=a.indexOf("/");e=a.indexOf(":",e+1);-1!==e&&(-1===b||e<b)?(c.hostname=a.substring(0,d)||null,c.port=null):(b=a.substring(0,d).split(":"),c.hostname=b[0]||null,c.port=b[1]||null)}c.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);return a.substring(d)||"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var d=a.indexOf("/"),p=a.lastIndexOf("@",-1<d?d:a.length-1);-1<p&&(-1===d||p<d)?
(d=a.substring(0,p).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=d[0]?b.decode(d.join(":")):null,a=a.substring(p+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},p=a.split("&"),e=p.length,f,g,h=0;h<e;h++)if(f=p[h].split("="),g=b.decodeQuery(f.shift(),c),f=f.length?b.decodeQuery(f.join("="),c):null,q.call(d,g)){if("string"===typeof d[g]||null===d[g])d[g]=[d[g]];
d[g].push(f)}else d[g]=f;return d};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+":");a.urn||!c&&!a.hostname||(c+="//");c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;
else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username));a.password&&(c+=":"+b.encode(a.password));c&&(c+="@");return c};b.buildQuery=function(a,c,d){var p="",e,f,g,h;for(f in a)if(q.call(a,f)&&f)if(u(a[f]))for(e={},g=0,h=a[f].length;g<h;g++)void 0!==a[f][g]&&void 0===e[a[f][g]+""]&&(p+="&"+b.buildQueryParameter(f,a[f][g],d),!0!==c&&(e[a[f][g]+""]=!0));else void 0!==
a[f]&&(p+="&"+b.buildQueryParameter(f,a[f],d));return p.substring(1)};b.buildQueryParameter=function(a,c,d){return b.encodeQuery(a,d)+(null!==c?"="+b.encodeQuery(c,d):"")};b.addQuery=function(a,c,d){if("object"===typeof c)for(var p in c)q.call(c,p)&&b.addQuery(a,p,c[p]);else if("string"===typeof c)void 0===a[c]?a[c]=d:("string"===typeof a[c]&&(a[c]=[a[c]]),u(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.removeQuery=
function(a,c,d){var p;if(u(c))for(d=0,p=c.length;d<p;d++)a[c[d]]=void 0;else if("RegExp"===A(c))for(p in a)c.test(p)&&(a[p]=void 0);else if("object"===typeof c)for(p in c)q.call(c,p)&&b.removeQuery(a,p,c[p]);else if("string"===typeof c)void 0!==d?"RegExp"===A(d)?!u(a[c])&&d.test(a[c])?a[c]=void 0:a[c]=f(a[c],d):a[c]!==String(d)||u(d)&&1!==d.length?u(a[c])&&(a[c]=f(a[c],d)):a[c]=void 0:a[c]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
};b.hasQuery=function(a,c,d,p){switch(A(c)){case "String":break;case "RegExp":for(var e in a)if(q.call(a,e)&&c.test(e)&&(void 0===d||b.hasQuery(a,e,d)))return!0;return!1;case "Object":for(var f in c)if(q.call(c,f)&&!b.hasQuery(a,f,c[f]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(A(d)){case "Undefined":return c in a;case "Boolean":return a=!(u(a[c])?!a[c].length:!a[c]),d===a;case "Function":return!!d(a[c],
c,a);case "Array":return u(a[c])?(p?n:B)(a[c],d):!1;case "RegExp":return u(a[c])?p?n(a[c],d):!1:!(!a[c]||!a[c].match(d));case "Number":d=String(d);case "String":return u(a[c])?p?n(a[c],d):!1:a[c]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.joinPaths=function(){for(var a=[],c=[],d=0,p=0;p<arguments.length;p++){var e=new b(arguments[p]);a.push(e);for(var e=e.segment(),f=0;f<e.length;f++)"string"===typeof e[f]&&
c.push(e[f]),e[f]&&d++}if(!c.length||!d)return new b("");c=(new b("")).segment(c);""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||c.path("/"+c.path());return c.normalize()};b.commonPath=function(a,c){var d=Math.min(a.length,c.length),b;for(b=0;b<d;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,d){d||(d={});
var e=d.start||b.findUri.start,f=d.end||b.findUri.end,g=d.trim||b.findUri.trim,h=d.parens||b.findUri.parens,l=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var n=e.exec(a);if(!n)break;var k=n.index;if(d.ignoreHtml){var q=a.slice(Math.max(k-3,0),k);if(q&&l.test(q))continue}for(var m=k+a.slice(k).search(f),q=a.slice(k,m),m=-1;;){var z=h.exec(q);if(!z)break;m=Math.max(m,z.index+z[0].length)}q=-1<m?q.slice(0,m)+q.slice(m).replace(g,""):q.replace(g,"");q.length<=n[0].length||d.ignore&&d.ignore.test(q)||(m=
k+q.length,n=c(q,k,m,a),void 0===n?e.lastIndex=m:(n=String(n),a=a.slice(0,k)+n+a.slice(m),e.lastIndex=k+n.length))}e.lastIndex=0;return a};b.ensureValidHostname=function(a){if(a.match(b.invalid_hostname_characters)){if(!g)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(g.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');}};b.noConflict=function(a){if(a)return a=
{URI:this.noConflict()},l.URITemplate&&"function"===typeof l.URITemplate.noConflict&&(a.URITemplate=l.URITemplate.noConflict()),l.IPv6&&"function"===typeof l.IPv6.noConflict&&(a.IPv6=l.IPv6.noConflict()),l.SecondLevelDomains&&"function"===typeof l.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=l.SecondLevelDomains.noConflict()),a;l.URI===this&&(l.URI=v);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),
this._deferred_build=!1;return this};e.clone=function(){return new b(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=E("protocol");e.username=E("username");e.password=E("password");e.hostname=E("hostname");e.port=E("port");e.query=x("query","?");e.fragment=x("fragment","#");e.search=function(a,c){var d=this.query(a,c);return"string"===typeof d&&d.length?"?"+d:d};e.hash=function(a,c){var d=this.fragment(a,c);return"string"===typeof d&&d.length?"#"+d:d};e.pathname=function(a,
c){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(d):d}this._parts.path=this._parts.urn?a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};e.path=e.pathname;e.href=function(a,c){var d;if(void 0===a)return this.toString();this._string="";this._parts=b._parts();var e=a instanceof b,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=b.getDomAttribute(a),a=a[f]||"",f=!1);!e&&
f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(e||f)for(d in e=e?a._parts:a,e)q.call(this._parts,d)&&(this._parts[d]=e[d]);else throw new TypeError("invalid input");this.build(!c);return this};e.is=function(a){var c=!1,d=!1,e=!1,f=!1,g=!1,n=!1,l=!1,k=!this._parts.urn;this._parts.hostname&&(k=!1,d=b.ip4_expression.test(this._parts.hostname),e=b.ip6_expression.test(this._parts.hostname),c=d||e,g=(f=!c)&&h&&h.has(this._parts.hostname),
n=f&&b.idn_expression.test(this._parts.hostname),l=f&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return k;case "absolute":return!k;case "domain":case "name":return f;case "sld":return g;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;case "idn":return n;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return l}return null};var G=e.protocol,H=e.port,I=e.hostname;
e.protocol=function(a,c){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return G.call(this,a,c)};e.scheme=e.protocol;e.port=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');
return H.call(this,a,c)};e.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};if("/"!==b.parseHost(a,d))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=d.hostname}return I.call(this,a,c)};e.origin=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=this.protocol();return this.authority()?(d?d+"://":"")+this.authority():""}d=b(a);this.protocol(d.protocol()).authority(d.authority()).build(!c);return this};
e.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";if("/"!==b.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.authority=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildAuthority(this._parts):"";if("/"!==b.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=b.buildUserinfo(this._parts);return d?d.substring(0,d.length-1):d}"@"!==a[a.length-1]&&(a+="@");b.parseUserinfo(a,this._parts);this.build(!c);return this};e.resource=function(a,c){var d;if(void 0===a)return this.path()+this.search()+this.hash();d=b.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;
this.build(!c);return this};e.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+m(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&b.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(d,a);
this.build(!c);return this};e.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(c).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");b.ensureValidHostname(a);
!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(m(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!c);return this};e.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.lastIndexOf("."),d=this._parts.hostname.substring(d+1);return!0!==c&&h&&h.list[d.toLowerCase()]?h.get(this._parts.hostname)||d:d}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&
h.is(a))d=new RegExp(m(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");d=new RegExp(m(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(d,a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};e.directory=function(a,c){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+m(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=b.recodePath(a);this._parts.path=
this._parts.path.replace(d,a);this.build(!c);return this};e.filename=function(a,c){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?b.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=new RegExp(m(this.filename())+"$");a=b.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(c):
this.build(!c);return this};e.suffix=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?b.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?new RegExp(m(d)+"$"):new RegExp(m("."+d)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}e&&(a=b.recodePath(a),
this._parts.path=this._parts.path.replace(e,a));this.build(!c);return this};e.segment=function(a,c,d){var b=this._parts.urn?":":"/",e=this.path(),f="/"===e.substring(0,1),e=e.split(b);void 0!==a&&"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');f&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===c)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(u(c)){e=[];a=0;for(var g=c.length;a<g;a++)if(c[a].length||
e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(z(c[a]))}else{if(c||"string"===typeof c)c=z(c),""===e[e.length-1]?e[e.length-1]=c:e.push(c)}else c?e[a]=z(c):e.splice(a,1);f&&e.unshift("");return this.path(e.join(b),d)};e.segmentCoded=function(a,c,d){var e,f;"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,d);if(u(a))for(e=0,f=a.length;e<f;e++)a[e]=b.decode(a[e]);else a=void 0!==a?b.decode(a):void 0;return a}if(u(c))for(e=0,f=c.length;e<f;e++)c[e]=
b.encode(c[e]);else c="string"===typeof c||c instanceof String?b.encode(c):c;return this.segment(a,c,d)};var J=e.query;e.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=
b.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!c),this):J.call(this,a,c)};e.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==c?c:null;else if("object"===typeof a)for(var f in a)q.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.addQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,void 0===c?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.removeQuery(e,a,c);this._parts.query=
b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&g?this._parts.hostname=g.toASCII(this._parts.hostname):this.is("IPv6")&&k&&(this._parts.hostname=k.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var c=b.recodePath(c),d,e="",f,g;"/"!==c.charAt(0)&&(d=!0,c="/"+c);if("/.."===c.slice(-3)||"/."===c.slice(-2))c+="/";c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");d&&(e=c.substring(1).match(/^(\.\.\/)+/)||
"")&&(e=e[0]);for(;;){f=c.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){c=c.substring(3);continue}g=c.substring(0,f).lastIndexOf("/");-1===g&&(g=f);c=c.substring(0,g)+c.substring(f+3)}d&&this.is("relative")&&(c=e+c.substring(1));this._parts.path=c;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};e.unicode=function(){var a=b.encode,c=b.decode;b.encode=y;b.decode=unescape;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};
e.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&g?(c+=g.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var d="",e=0,f=a._parts.query.split("&"),h=f.length;e<h;e++){var n=(f[e]||"").split("="),d=d+("&"+b.decodeQuery(n[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26"));void 0!==n[1]&&(d+="="+b.decodeQuery(n[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+d.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));if(c._parts.protocol)return c;c._parts.protocol=a._parts.protocol;if(this._parts.hostname)return c;for(e=0;f=d[e];e++)c._parts[f]=
a._parts[f];c._parts.path?(".."===c._parts.path.substring(-2)&&(c._parts.path+="/"),"/"!==c.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",c._parts.path=(d?d+"/":"")+c._parts.path,c.normalizePath())):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));c.build();return c};e.relativeTo=function(a){var c=this.clone().normalize(),d,e,f;if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();
d=c._parts;e=a._parts;f=c.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(f===a)return d.path="",c.build();f=b.commonPath(f,a);if(!f)return c.build();
e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(f.length)||"./";return c.build()};e.equals=function(a){var c=this.clone(),d=new b(a),e;a={};var f,g;c.normalize();d.normalize();if(c.toString()===d.toString())return!0;f=c.query();e=d.query();c.query("");d.query("");if(c.toString()!==d.toString()||f.length!==e.length)return!1;c=b.parseQuery(f,this._parts.escapeQuerySpace);e=b.parseQuery(e,this._parts.escapeQuerySpace);for(g in c)if(q.call(c,g)){if(!u(c[g])){if(c[g]!==
e[g])return!1}else if(!B(c[g],e[g]))return!1;a[g]=!0}for(g in e)if(q.call(e,g)&&!a[g])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(g,k){"object"===typeof module&&module.exports?module.exports=k(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],k):g.URITemplate=k(g.URI,g)})(this,function(g,k){function h(b){if(h._cache[b])return h._cache[b];if(!(this instanceof h))return new h(b);this.expression=b;h._cache[b]=this;return this}function l(b){this.data=b;this.cache={}}var b=k&&k.URITemplate,m=Object.prototype.hasOwnProperty,A=h.prototype,u={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;h.LITERAL_PATTERN=/[<>{}"`^| \\]/;h.expand=function(b,g,l){var f=u[b.operator],n=f.named?"Named":"Unnamed";b=b.variables;var k=[],m,x,v;for(v=0;x=b[v];v++){m=g.get(x.name);if(0===m.type&&l&&l.strict)throw Error('Missing expansion value for variable "'+
x.name+'"');if(m.val.length){if(1<m.type&&x.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+x.name+'"');k.push(h["expand"+n](m,f,x.explode,x.explode&&f.separator||",",x.maxlength,x.name))}else m.type&&k.push("")}return k.length?f.prefix+k.join(f.separator):""};h.expandNamed=function(b,h,k,l,m,y){var f="",n=h.encode;h=h.empty_name_separator;var z=!b[n].length,e=2===b.type?"":g[n](y),q,r,B;r=0;for(B=b.val.length;r<B;r++)m?(q=g[n](b.val[r][1].substring(0,m)),
2===b.type&&(e=g[n](b.val[r][0].substring(0,m)))):z?(q=g[n](b.val[r][1]),2===b.type?(e=g[n](b.val[r][0]),b[n].push([e,q])):b[n].push([void 0,q])):(q=b[n][r][1],2===b.type&&(e=b[n][r][0])),f&&(f+=l),k?f+=e+(h||q?"=":"")+q:(r||(f+=g[n](y)+(h||q?"=":"")),2===b.type&&(f+=e+","),f+=q);return f};h.expandUnnamed=function(b,h,k,l,m){var f="",n=h.encode;h=h.empty_name_separator;var z=!b[n].length,B,e,q,r;q=0;for(r=b.val.length;q<r;q++)m?e=g[n](b.val[q][1].substring(0,m)):z?(e=g[n](b.val[q][1]),b[n].push([2===
b.type?g[n](b.val[q][0]):void 0,e])):e=b[n][q][1],f&&(f+=l),2===b.type&&(B=m?g[n](b.val[q][0].substring(0,m)):b[n][q][0],f+=B,f=k?f+(h||e?"=":""):f+","),f+=e;return f};h.noConflict=function(){k.URITemplate===h&&(k.URITemplate=b);return h};A.expand=function(b,g){var f="";this.parts&&this.parts.length||this.parse();b instanceof l||(b=new l(b));for(var n=0,k=this.parts.length;n<k;n++)f+="string"===typeof this.parts[n]?this.parts[n]:h.expand(this.parts[n],b,g);return f};A.parse=function(){var b=this.expression,
g=h.EXPRESSION_PATTERN,k=h.VARIABLE_PATTERN,l=h.VARIABLE_NAME_PATTERN,m=h.LITERAL_PATTERN,y=[],A=0,x,v,e,q=function(b){if(b.match(m))throw Error('Invalid Literal "'+b+'"');return b};for(g.lastIndex=0;;){v=g.exec(b);if(null===v){y.push(q(b.substring(A)));break}else y.push(q(b.substring(A,v.index))),A=v.index+v[0].length;if(!u[v[1]])throw Error('Unknown Operator "'+v[1]+'" in "'+v[0]+'"');if(!v[3])throw Error('Unclosed Expression "'+v[0]+'"');x=v[2].split(",");for(var r=0,C=x.length;r<C;r++){e=x[r].match(k);
if(null===e)throw Error('Invalid Variable "'+x[r]+'" in "'+v[0]+'"');if(e[1].match(l))throw Error('Invalid Variable Name "'+e[1]+'" in "'+v[0]+'"');x[r]={name:e[1],explode:!!e[3],maxlength:e[4]&&parseInt(e[4],10)}}if(!x.length)throw Error('Expression Missing Variable(s) "'+v[0]+'"');y.push({expression:v[0],operator:v[1],variables:x})}y.length||y.push(q(b));this.parts=y;return this};l.prototype.get=function(b){var f=this.data,g={type:0,val:[],encode:[],encodeReserved:[]},h;if(void 0!==this.cache[b])return this.cache[b];
this.cache[b]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(b):"[object Function]"===String(Object.prototype.toString.call(f[b]))?f[b](b):f[b];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){h=0;for(b=f.length;h<b;h++)void 0!==f[h]&&null!==f[h]&&g.val.push([void 0,String(f[h])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(h in f)m.call(f,h)&&void 0!==f[h]&&null!==f[h]&&g.val.push([h,
String(f[h])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};g.expand=function(b,k){var f=(new h(b)).expand(k);return new g(f)};return h});

// =======

$(function() {

/*
TODO：

1 增加转发的图片
2 拆分为 data.js 和 xxx.html，用来做翻页加载，优化数据较多时的性能问题。
3 m 站里获取 userId 的问题
*/

  var userId = null;
  let containerid = ``;
  var pageNum = 1;
  var DATA = {
    'total': 0,
    'list': []
  };
  var weiboList = DATA.list;
  var exporting = false;
  var sinaImgReg = /src="\/\/h5.sinaimg.cn\//g; // 用于替换内容里的表情符号 url 地址

  // 插入导出按钮和 log 容器
  $('body').append(`
    <div id="exporter-btn-wrap">
      <a id="exporter-btn" href="javascript:void(0);">导出微博内容</a>
      <div id="exporter-logger">
        <ul id="exporter-log-list"></ul>
      </div>
    </div>
  `);

  // 点击开始导出
  $('body').on('click', '#exporter-btn', function() {

    console.log($('.user_atten a').first().size())
    // pc 首页
    if ($('.user_atten').size() > 0 || $('.opt_box .btn_bed').size() > 0) {
      userId = $('.user_atten a').first().attr('href').split('/')[1]
    // pc 个人页面
    } else if ($('.opt_box .btn_bed').size() > 0) {

      let actionData = '?' + $('.pf_opt .btn_bed').attr('action-data');
      var uri = new URI(actionData).duplicateQueryParameters(true);
      var content = "";
      $.each(uri.query(true), function(key, value) {
        if (key === 'uid') {
          userId = value
        }
      });
    // m 站
    } else if (window.config) {
      userId = window.config.pageConfig.value
    }

    if (!userId) {
      alert('出错了，没得到 userId');
      return;
    }

    if (exporting) {
      alert('忙着呢');
      return;
    }
    $('#exporter-btn').text('正在导出');
    $('#exporter-logger').show();
    $('#exporter-log-list').html('');
    exporting = true;
    getUserInfo();
  })

  // 获取微博内容
  function getData() {
    var $logger = $('#exporter-log-list');
    $.ajax({
      'url': `https://m.weibo.cn/api/container/getIndex?profile_ftype[]=1&profile_ftype[]=1&is_all[]=1&is_all[]=1&jumpfrom=weibocom&sudaref[]=weibo.com&sudaref[]=login.sina.com.cn&type=uid&value=${userId}&containerid=${containerid}&page=${pageNum}`,
      'success': function(_resp) {
        resp = _resp.data
        if (resp.cards && resp.cards.length && _resp.ok !== 0) {
          DATA.total = resp.cardlistInfo.total;
          resp.cards.map((card, index) => {
            let currentWeibo = {};

            // 如果有微博
            if (card.mblog || card.card_type === 9) {

              currentWeibo.id = `${card.mblog.id}`;
              currentWeibo.text = '';
              currentWeibo.done = false;
              currentWeibo.time = `${card.mblog.created_at}`;

              // 如果是长微博
              if (card.mblog.isLongText) {
                currentWeibo.text = '正在请求长微博的全部内容';
                $.ajax({
                  'url': `https://m.weibo.cn/statuses/extend?id=${card.mblog.idstr}`,
                  'success': function(longTextResp) {
                    weiboList.map((data) => {
                      if (data.id + '' === card.mblog.idstr) {
                        data.text = `长微博：${longTextResp.longTextContent}`;
                        data.done = true;
                      }
                    });
                  }
                });
              } else {
                currentWeibo.text = card.mblog.text;
                currentWeibo.done = true;
              }

              // 如果是转发
              if (card.mblog.retweeted_status) {
                // 如果原微博内容还在
                if (card.mblog.retweeted_status.deleted !== '1') {
                  // 如果能拿到用户，说明微博能
                  if (card.mblog.retweeted_status.user) {
                    currentWeibo.text = `转发了 ${card.mblog.retweeted_status.user.screen_name} (id为 ${card.mblog.retweeted_status.user.id}) 的微博：${card.mblog.retweeted_status.text}，并说道：${card.mblog.text}`;
                    currentWeibo.done = true;
                  } else {
                    currentWeibo.text = `转发了一条微博（原微博已经被作者设置为仅自己可见），并说道：${card.mblog.text}`;
                    currentWeibo.done = true;
                  }
                  
                } else {
                  currentWeibo.text = `转发的原微博内容已被删除。`;
                  currentWeibo.done = true;
                }
              }

              // 如果有图片
              if (card.mblog.pics) {
                currentWeibo.pics = [];
                card.mblog.pics.map((pic) => {
                  currentWeibo.pics.push(pic.large.url);
                });
              }

            } else {
              currentWeibo.time = `未知时间`;
              currentWeibo.text = `没有内容，可能是赞了别人的微博。`;
              currentWeibo.done = true;
            }


            weiboList.push(currentWeibo)
          });


          setTimeout(function() {
            let allRequestDone = weiboList.every((data) => {
              return data.done;
            });

            // 确定全部 done 后，等 3 秒再自动请求下一页，给可能存在的长微博获取留点时间
            if (allRequestDone) {
              $logger.prepend(`<li>当前第 ${pageNum} 页，共获得 ${weiboList.length} 条</li>`);
              pageNum = pageNum + 1;
              getData();
            }
          }, 3000);

        } else {
          $logger.prepend(`<li>导出结束，请保存文件。如果中断或者发现数据不全，可以尝试重新导出。</li>`);

          DATA.list = weiboList;
          let _list = [];

          weiboList.map((weibo) => {
            let picDom = '';
            let pics = [];

            if (weibo.pics) {
              weibo.pics.map((pic) => {
                pics.push(`<img src=${pic} />`);
              })
              picDom = `<div class="pics">${pics}</div>`
            }

            weibo.text = weibo.text.replace(sinaImgReg, 'src="https://h5.sinaimg.cn/');

            let li = `<li>
                      <div class="time">${weibo.time}</div>：
                      <div class="text">${weibo.text}</div>
                      ${picDom}
                    </li>`;

            _list.push(li);
          });

          _list = _list.join('');

          let htmlStr = `<html>
            <head>
              <title>${DATA.user.name}的微博</title>
              <style>
                body {
                  padding: 0;
                  margin: 0;
                  font-size: 13px;
                  font-family: sans-serif;
                  line-height: 1.6;
                  background: #f6f6ef;
                }

                a {
                  color: #37a;
                  text-decoration: none;
                }

                img {
                  max-width: 300px;
                }
                ul {
                  padding: 0;
                  margin: 0;
                  list-style: none;
                }
                li {
                  list-style: none;
                  padding: 15px 0;
                }
                .wrap {
                  width: 640px;
                  margin: 30px auto;
                  word-wrap: break-word;
                  word-break: normal;
                }
                .header {
                  text-align: center;
                  padding: 0 30px;
                  margin-bottom: 30px;
                }
                .avatar {
                  display: inline-block;
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  overflow: hidden;
                  background: center center no-repeat / cover;
                }
                .name {
                  font-size: 22px;
                  padding: 10px 0;
                }

                .description {
                  font-size: 15px;
                  padding-bottom: 10px;
                }
                .total {
                  font-size: 11px;
                  color: #999;
                }

                .all-data {
                  padding: 0 30px;
                  background: #fff;
                }
                .time {
                  color: #999;
                  display: inline-block;
                }

                .text {
                  padding-top: 7px;
                  font-size: 15px;
                }

                .url-icon img {
                  width: 18px;
                  height: 18px;
                }
              </style>
            </head>
            <body>
              <div class="wrap">
                <div class="header">
                  <div class="avatar" style="background-image: url(${DATA.user.avatar})"></div>
                  <div class="name">${DATA.user.name}</div>
                  <div class="description">${DATA.user.description}</div>
                  <div class="total">共 ${DATA.user.total} 条微博</div>
                </div>
                <ul class="all-data">
                  ${_list}
                </ul>
              </div>
            </body>
          <html>`

          // var file = new File([JSON.stringify(weiboList)], "weiboData.txt", {type: "text/plain;charset=utf-8"});
          var file = new File([htmlStr], userId + ".html", {type: "text/plain;charset=utf-8"});
          saveAs(file);


          // reset
          $('#exporter-btn').text('导出微博内容');
          exporting = false;
          pageNum = 1;
          DATA = {
            'total': 0,
            'list': []
          };
          weiboList = DATA.list;
        }
      }
    })
  }

  // 获取用户信息
  function getUserInfo() {
    $.ajax({
      url: `https://m.weibo.cn/api/container/getIndex?profile_ftype[]=1&profile_ftype[]=1&is_all[]=1&is_all[]=1&jumpfrom=weibocom&sudaref[]=weibo.com&sudaref[]=login.sina.com.cn&type=uid&value=${userId}&container`,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: function(resp) {
        let user = resp.data.userInfo
        console.log('user = ', user)
        if (!user) {
          alert('获取用户信息失败');
        } else {
          DATA.user = {
            'name': user.screen_name,
            'avatar': user.profile_image_url,
            'description': user.description,
            'total': user.statuses_count
          }

          containerid = resp.data.tabsInfo.tabs[1].containerid;

          getData();
        }
      },
      error: function(err) {
        console.error(err);
        alert('出错了');
      }
    })
  }
});


