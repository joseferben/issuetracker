/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(8);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
	r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
	if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)\n * Copyright 2011-2016 The Bootstrap Authors\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\ntemplate,\n[hidden] {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\nimg {\n  border-style: none;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\nbutton,\ninput,\nselect {\n  overflow: visible;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  cursor: pointer;\n}\n\n[disabled] {\n  cursor: default;\n}\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\nbutton:-moz-focusring,\ninput:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\n\ntextarea {\n  overflow: auto;\n}\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n}\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after,\n  *::first-letter,\n  *::first-line {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .tag {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\nhtml {\n  font-size: 16px;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\na {\n  color: #0275d8;\n  text-decoration: none;\n}\n\na:focus, a:hover {\n  color: #014c8c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus {\n  outline: none;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\ntable {\n  border-collapse: collapse;\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: left;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0;\n}\n\ninput[type=\"radio\"]:disabled,\ninput[type=\"checkbox\"]:disabled {\n  cursor: not-allowed;\n}\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\noutput {\n  display: inline-block;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 5px;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #818a91;\n}\n\n.blockquote-footer::before {\n  content: \"\\2014   \\A0\";\n}\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0;\n}\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\";\n}\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\A0   \\2014\";\n}\n\ndl.row > dd + dt {\n  clear: left;\n}\n\n.img-fluid, .carousel-inner > .carousel-item > img,\n.carousel-inner > .carousel-item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 0.3rem;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all .2s ease-in-out;\n  -o-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #373a3c;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (min-width: 544px) {\n  .container {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 940px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-1 {\n  float: left;\n  width: 8.333333%;\n}\n\n.col-xs-2 {\n  float: left;\n  width: 16.666667%;\n}\n\n.col-xs-3 {\n  float: left;\n  width: 25%;\n}\n\n.col-xs-4 {\n  float: left;\n  width: 33.333333%;\n}\n\n.col-xs-5 {\n  float: left;\n  width: 41.666667%;\n}\n\n.col-xs-6 {\n  float: left;\n  width: 50%;\n}\n\n.col-xs-7 {\n  float: left;\n  width: 58.333333%;\n}\n\n.col-xs-8 {\n  float: left;\n  width: 66.666667%;\n}\n\n.col-xs-9 {\n  float: left;\n  width: 75%;\n}\n\n.col-xs-10 {\n  float: left;\n  width: 83.333333%;\n}\n\n.col-xs-11 {\n  float: left;\n  width: 91.666667%;\n}\n\n.col-xs-12 {\n  float: left;\n  width: 100%;\n}\n\n.pull-xs-0 {\n  right: auto;\n}\n\n.pull-xs-1 {\n  right: 8.333333%;\n}\n\n.pull-xs-2 {\n  right: 16.666667%;\n}\n\n.pull-xs-3 {\n  right: 25%;\n}\n\n.pull-xs-4 {\n  right: 33.333333%;\n}\n\n.pull-xs-5 {\n  right: 41.666667%;\n}\n\n.pull-xs-6 {\n  right: 50%;\n}\n\n.pull-xs-7 {\n  right: 58.333333%;\n}\n\n.pull-xs-8 {\n  right: 66.666667%;\n}\n\n.pull-xs-9 {\n  right: 75%;\n}\n\n.pull-xs-10 {\n  right: 83.333333%;\n}\n\n.pull-xs-11 {\n  right: 91.666667%;\n}\n\n.pull-xs-12 {\n  right: 100%;\n}\n\n.push-xs-0 {\n  left: auto;\n}\n\n.push-xs-1 {\n  left: 8.333333%;\n}\n\n.push-xs-2 {\n  left: 16.666667%;\n}\n\n.push-xs-3 {\n  left: 25%;\n}\n\n.push-xs-4 {\n  left: 33.333333%;\n}\n\n.push-xs-5 {\n  left: 41.666667%;\n}\n\n.push-xs-6 {\n  left: 50%;\n}\n\n.push-xs-7 {\n  left: 58.333333%;\n}\n\n.push-xs-8 {\n  left: 66.666667%;\n}\n\n.push-xs-9 {\n  left: 75%;\n}\n\n.push-xs-10 {\n  left: 83.333333%;\n}\n\n.push-xs-11 {\n  left: 91.666667%;\n}\n\n.push-xs-12 {\n  left: 100%;\n}\n\n.offset-xs-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-xs-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-xs-3 {\n  margin-left: 25%;\n}\n\n.offset-xs-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-xs-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-xs-6 {\n  margin-left: 50%;\n}\n\n.offset-xs-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-xs-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-xs-9 {\n  margin-left: 75%;\n}\n\n.offset-xs-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-xs-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 544px) {\n  .col-sm-1 {\n    float: left;\n    width: 8.333333%;\n  }\n  .col-sm-2 {\n    float: left;\n    width: 16.666667%;\n  }\n  .col-sm-3 {\n    float: left;\n    width: 25%;\n  }\n  .col-sm-4 {\n    float: left;\n    width: 33.333333%;\n  }\n  .col-sm-5 {\n    float: left;\n    width: 41.666667%;\n  }\n  .col-sm-6 {\n    float: left;\n    width: 50%;\n  }\n  .col-sm-7 {\n    float: left;\n    width: 58.333333%;\n  }\n  .col-sm-8 {\n    float: left;\n    width: 66.666667%;\n  }\n  .col-sm-9 {\n    float: left;\n    width: 75%;\n  }\n  .col-sm-10 {\n    float: left;\n    width: 83.333333%;\n  }\n  .col-sm-11 {\n    float: left;\n    width: 91.666667%;\n  }\n  .col-sm-12 {\n    float: left;\n    width: 100%;\n  }\n  .pull-sm-0 {\n    right: auto;\n  }\n  .pull-sm-1 {\n    right: 8.333333%;\n  }\n  .pull-sm-2 {\n    right: 16.666667%;\n  }\n  .pull-sm-3 {\n    right: 25%;\n  }\n  .pull-sm-4 {\n    right: 33.333333%;\n  }\n  .pull-sm-5 {\n    right: 41.666667%;\n  }\n  .pull-sm-6 {\n    right: 50%;\n  }\n  .pull-sm-7 {\n    right: 58.333333%;\n  }\n  .pull-sm-8 {\n    right: 66.666667%;\n  }\n  .pull-sm-9 {\n    right: 75%;\n  }\n  .pull-sm-10 {\n    right: 83.333333%;\n  }\n  .pull-sm-11 {\n    right: 91.666667%;\n  }\n  .pull-sm-12 {\n    right: 100%;\n  }\n  .push-sm-0 {\n    left: auto;\n  }\n  .push-sm-1 {\n    left: 8.333333%;\n  }\n  .push-sm-2 {\n    left: 16.666667%;\n  }\n  .push-sm-3 {\n    left: 25%;\n  }\n  .push-sm-4 {\n    left: 33.333333%;\n  }\n  .push-sm-5 {\n    left: 41.666667%;\n  }\n  .push-sm-6 {\n    left: 50%;\n  }\n  .push-sm-7 {\n    left: 58.333333%;\n  }\n  .push-sm-8 {\n    left: 66.666667%;\n  }\n  .push-sm-9 {\n    left: 75%;\n  }\n  .push-sm-10 {\n    left: 83.333333%;\n  }\n  .push-sm-11 {\n    left: 91.666667%;\n  }\n  .push-sm-12 {\n    left: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0%;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-1 {\n    float: left;\n    width: 8.333333%;\n  }\n  .col-md-2 {\n    float: left;\n    width: 16.666667%;\n  }\n  .col-md-3 {\n    float: left;\n    width: 25%;\n  }\n  .col-md-4 {\n    float: left;\n    width: 33.333333%;\n  }\n  .col-md-5 {\n    float: left;\n    width: 41.666667%;\n  }\n  .col-md-6 {\n    float: left;\n    width: 50%;\n  }\n  .col-md-7 {\n    float: left;\n    width: 58.333333%;\n  }\n  .col-md-8 {\n    float: left;\n    width: 66.666667%;\n  }\n  .col-md-9 {\n    float: left;\n    width: 75%;\n  }\n  .col-md-10 {\n    float: left;\n    width: 83.333333%;\n  }\n  .col-md-11 {\n    float: left;\n    width: 91.666667%;\n  }\n  .col-md-12 {\n    float: left;\n    width: 100%;\n  }\n  .pull-md-0 {\n    right: auto;\n  }\n  .pull-md-1 {\n    right: 8.333333%;\n  }\n  .pull-md-2 {\n    right: 16.666667%;\n  }\n  .pull-md-3 {\n    right: 25%;\n  }\n  .pull-md-4 {\n    right: 33.333333%;\n  }\n  .pull-md-5 {\n    right: 41.666667%;\n  }\n  .pull-md-6 {\n    right: 50%;\n  }\n  .pull-md-7 {\n    right: 58.333333%;\n  }\n  .pull-md-8 {\n    right: 66.666667%;\n  }\n  .pull-md-9 {\n    right: 75%;\n  }\n  .pull-md-10 {\n    right: 83.333333%;\n  }\n  .pull-md-11 {\n    right: 91.666667%;\n  }\n  .pull-md-12 {\n    right: 100%;\n  }\n  .push-md-0 {\n    left: auto;\n  }\n  .push-md-1 {\n    left: 8.333333%;\n  }\n  .push-md-2 {\n    left: 16.666667%;\n  }\n  .push-md-3 {\n    left: 25%;\n  }\n  .push-md-4 {\n    left: 33.333333%;\n  }\n  .push-md-5 {\n    left: 41.666667%;\n  }\n  .push-md-6 {\n    left: 50%;\n  }\n  .push-md-7 {\n    left: 58.333333%;\n  }\n  .push-md-8 {\n    left: 66.666667%;\n  }\n  .push-md-9 {\n    left: 75%;\n  }\n  .push-md-10 {\n    left: 83.333333%;\n  }\n  .push-md-11 {\n    left: 91.666667%;\n  }\n  .push-md-12 {\n    left: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0%;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    float: left;\n    width: 8.333333%;\n  }\n  .col-lg-2 {\n    float: left;\n    width: 16.666667%;\n  }\n  .col-lg-3 {\n    float: left;\n    width: 25%;\n  }\n  .col-lg-4 {\n    float: left;\n    width: 33.333333%;\n  }\n  .col-lg-5 {\n    float: left;\n    width: 41.666667%;\n  }\n  .col-lg-6 {\n    float: left;\n    width: 50%;\n  }\n  .col-lg-7 {\n    float: left;\n    width: 58.333333%;\n  }\n  .col-lg-8 {\n    float: left;\n    width: 66.666667%;\n  }\n  .col-lg-9 {\n    float: left;\n    width: 75%;\n  }\n  .col-lg-10 {\n    float: left;\n    width: 83.333333%;\n  }\n  .col-lg-11 {\n    float: left;\n    width: 91.666667%;\n  }\n  .col-lg-12 {\n    float: left;\n    width: 100%;\n  }\n  .pull-lg-0 {\n    right: auto;\n  }\n  .pull-lg-1 {\n    right: 8.333333%;\n  }\n  .pull-lg-2 {\n    right: 16.666667%;\n  }\n  .pull-lg-3 {\n    right: 25%;\n  }\n  .pull-lg-4 {\n    right: 33.333333%;\n  }\n  .pull-lg-5 {\n    right: 41.666667%;\n  }\n  .pull-lg-6 {\n    right: 50%;\n  }\n  .pull-lg-7 {\n    right: 58.333333%;\n  }\n  .pull-lg-8 {\n    right: 66.666667%;\n  }\n  .pull-lg-9 {\n    right: 75%;\n  }\n  .pull-lg-10 {\n    right: 83.333333%;\n  }\n  .pull-lg-11 {\n    right: 91.666667%;\n  }\n  .pull-lg-12 {\n    right: 100%;\n  }\n  .push-lg-0 {\n    left: auto;\n  }\n  .push-lg-1 {\n    left: 8.333333%;\n  }\n  .push-lg-2 {\n    left: 16.666667%;\n  }\n  .push-lg-3 {\n    left: 25%;\n  }\n  .push-lg-4 {\n    left: 33.333333%;\n  }\n  .push-lg-5 {\n    left: 41.666667%;\n  }\n  .push-lg-6 {\n    left: 50%;\n  }\n  .push-lg-7 {\n    left: 58.333333%;\n  }\n  .push-lg-8 {\n    left: 66.666667%;\n  }\n  .push-lg-9 {\n    left: 75%;\n  }\n  .push-lg-10 {\n    left: 83.333333%;\n  }\n  .push-lg-11 {\n    left: 91.666667%;\n  }\n  .push-lg-12 {\n    left: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0%;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    float: left;\n    width: 8.333333%;\n  }\n  .col-xl-2 {\n    float: left;\n    width: 16.666667%;\n  }\n  .col-xl-3 {\n    float: left;\n    width: 25%;\n  }\n  .col-xl-4 {\n    float: left;\n    width: 33.333333%;\n  }\n  .col-xl-5 {\n    float: left;\n    width: 41.666667%;\n  }\n  .col-xl-6 {\n    float: left;\n    width: 50%;\n  }\n  .col-xl-7 {\n    float: left;\n    width: 58.333333%;\n  }\n  .col-xl-8 {\n    float: left;\n    width: 66.666667%;\n  }\n  .col-xl-9 {\n    float: left;\n    width: 75%;\n  }\n  .col-xl-10 {\n    float: left;\n    width: 83.333333%;\n  }\n  .col-xl-11 {\n    float: left;\n    width: 91.666667%;\n  }\n  .col-xl-12 {\n    float: left;\n    width: 100%;\n  }\n  .pull-xl-0 {\n    right: auto;\n  }\n  .pull-xl-1 {\n    right: 8.333333%;\n  }\n  .pull-xl-2 {\n    right: 16.666667%;\n  }\n  .pull-xl-3 {\n    right: 25%;\n  }\n  .pull-xl-4 {\n    right: 33.333333%;\n  }\n  .pull-xl-5 {\n    right: 41.666667%;\n  }\n  .pull-xl-6 {\n    right: 50%;\n  }\n  .pull-xl-7 {\n    right: 58.333333%;\n  }\n  .pull-xl-8 {\n    right: 66.666667%;\n  }\n  .pull-xl-9 {\n    right: 75%;\n  }\n  .pull-xl-10 {\n    right: 83.333333%;\n  }\n  .pull-xl-11 {\n    right: 91.666667%;\n  }\n  .pull-xl-12 {\n    right: 100%;\n  }\n  .push-xl-0 {\n    left: auto;\n  }\n  .push-xl-1 {\n    left: 8.333333%;\n  }\n  .push-xl-2 {\n    left: 16.666667%;\n  }\n  .push-xl-3 {\n    left: 25%;\n  }\n  .push-xl-4 {\n    left: 33.333333%;\n  }\n  .push-xl-5 {\n    left: 41.666667%;\n  }\n  .push-xl-6 {\n    left: 50%;\n  }\n  .push-xl-7 {\n    left: 58.333333%;\n  }\n  .push-xl-8 {\n    left: 66.666667%;\n  }\n  .push-xl-9 {\n    left: 75%;\n  }\n  .push-xl-10 {\n    left: 83.333333%;\n  }\n  .push-xl-11 {\n    left: 91.666667%;\n  }\n  .push-xl-12 {\n    left: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0%;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #eceeef;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #eceeef;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #eceeef;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8;\n}\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7;\n}\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c;\n}\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef;\n}\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c;\n}\n\n.table-inverse th,\n.table-inverse td,\n.table-inverse thead th {\n  border-color: #55595c;\n}\n\n.table-inverse.table-bordered {\n  border: 0;\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: .01%;\n  overflow-x: auto;\n}\n\n.table-reflow thead {\n  float: left;\n}\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap;\n}\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef;\n}\n\n.table-reflow th:last-child,\n.table-reflow td:last-child {\n  border-right: 1px solid #eceeef;\n}\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef;\n}\n\n.table-reflow tr {\n  float: left;\n}\n\n.table-reflow tr th,\n.table-reflow tr td {\n  display: block !important;\n  border: 1px solid #eceeef;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  color: #55595c;\n  background-color: #fff;\n  border-color: #66afe9;\n  outline: none;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #eceeef;\n  opacity: 1;\n}\n\n.form-control:disabled {\n  cursor: not-allowed;\n}\n\nselect.form-control:not([size]):not([multiple]) {\n  height: 2.5rem;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #55595c;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n}\n\n.col-form-label {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n}\n\n.col-form-label-lg {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1.25rem;\n}\n\n.col-form-label-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.875rem;\n}\n\n.col-form-legend {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n}\n\n.form-control-static {\n  min-height: 2.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n}\n\n.form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: 1.8125rem;\n}\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: 3.166667rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.form-check + .form-check {\n  margin-top: -.25rem;\n}\n\n.form-check.disabled .form-check-label {\n  color: #818a91;\n  cursor: not-allowed;\n}\n\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  cursor: pointer;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input:only-child {\n  position: static;\n}\n\n.form-check-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.form-check-inline + .form-check-inline {\n  margin-left: .75rem;\n}\n\n.form-check-inline.disabled {\n  cursor: not-allowed;\n}\n\n.form-control-feedback {\n  margin-top: 0.25rem;\n}\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.625rem;\n  -webkit-background-size: 1.25rem 1.25rem;\n          background-size: 1.25rem 1.25rem;\n}\n\n.has-success .form-control-feedback,\n.has-success .form-control-label,\n.has-success .form-check-label,\n.has-success .form-check-inline,\n.has-success .custom-control {\n  color: #5cb85c;\n}\n\n.has-success .form-control {\n  border-color: #5cb85c;\n}\n\n.has-success .input-group-addon {\n  color: #5cb85c;\n  border-color: #5cb85c;\n  background-color: #eaf6ea;\n}\n\n.has-success .form-control-feedback {\n  color: #5cb85c;\n}\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");\n}\n\n.has-warning .form-control-feedback,\n.has-warning .form-control-label,\n.has-warning .form-check-label,\n.has-warning .form-check-inline,\n.has-warning .custom-control {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control {\n  border-color: #f0ad4e;\n}\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white;\n}\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\");\n}\n\n.has-danger .form-control-feedback,\n.has-danger .form-control-label,\n.has-danger .form-check-label,\n.has-danger .form-check-inline,\n.has-danger .custom-control {\n  color: #d9534f;\n}\n\n.has-danger .form-control {\n  border-color: #d9534f;\n}\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7;\n}\n\n.has-danger .form-control-feedback {\n  color: #d9534f;\n}\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\");\n}\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-check {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-check-label {\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n}\n\n.btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:focus, .btn:hover {\n  text-decoration: none;\n}\n\n.btn.focus {\n  text-decoration: none;\n}\n\n.btn:active, .btn.active {\n  background-image: none;\n  outline: 0;\n}\n\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed;\n  opacity: .65;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:active, .btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n  background-image: none;\n}\n\n.btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #014682;\n  border-color: #01315a;\n}\n\n.btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary.disabled:hover, .btn-primary:disabled:hover {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary:hover {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:active, .btn-secondary.active,\n.open > .btn-secondary.dropdown-toggle {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n  background-image: none;\n}\n\n.btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n.open > .btn-secondary.dropdown-toggle:hover,\n.open > .btn-secondary.dropdown-toggle:focus,\n.open > .btn-secondary.dropdown-toggle.focus {\n  color: #373a3c;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:active, .btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n  background-image: none;\n}\n\n.btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1f7e9a;\n}\n\n.btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info.disabled:hover, .btn-info:disabled:hover {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:active, .btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n  background-image: none;\n}\n\n.btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #2d672d;\n}\n\n.btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success.disabled:hover, .btn-success:disabled:hover {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:active, .btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n  background-image: none;\n}\n\n.btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #b06d0f;\n}\n\n.btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning.disabled:hover, .btn-warning:disabled:hover {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:active, .btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n  background-image: none;\n}\n\n.btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #8b211e;\n}\n\n.btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger.disabled:hover, .btn-danger:disabled:hover {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-primary {\n  color: #0275d8;\n  background-image: none;\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-outline-primary:active, .btn-outline-primary.active,\n.open > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-outline-primary:active:hover, .btn-outline-primary:active:focus, .btn-outline-primary:active.focus, .btn-outline-primary.active:hover, .btn-outline-primary.active:focus, .btn-outline-primary.active.focus,\n.open > .btn-outline-primary.dropdown-toggle:hover,\n.open > .btn-outline-primary.dropdown-toggle:focus,\n.open > .btn-outline-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #014682;\n  border-color: #01315a;\n}\n\n.btn-outline-primary.disabled:focus, .btn-outline-primary.disabled.focus, .btn-outline-primary:disabled:focus, .btn-outline-primary:disabled.focus {\n  border-color: #43a7fd;\n}\n\n.btn-outline-primary.disabled:hover, .btn-outline-primary:disabled:hover {\n  border-color: #43a7fd;\n}\n\n.btn-outline-secondary {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-outline-secondary:active, .btn-outline-secondary.active,\n.open > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-outline-secondary:active:hover, .btn-outline-secondary:active:focus, .btn-outline-secondary:active.focus, .btn-outline-secondary.active:hover, .btn-outline-secondary.active:focus, .btn-outline-secondary.active.focus,\n.open > .btn-outline-secondary.dropdown-toggle:hover,\n.open > .btn-outline-secondary.dropdown-toggle:focus,\n.open > .btn-outline-secondary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: #8c8c8c;\n}\n\n.btn-outline-secondary.disabled:focus, .btn-outline-secondary.disabled.focus, .btn-outline-secondary:disabled:focus, .btn-outline-secondary:disabled.focus {\n  border-color: white;\n}\n\n.btn-outline-secondary.disabled:hover, .btn-outline-secondary:disabled:hover {\n  border-color: white;\n}\n\n.btn-outline-info {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-outline-info:active, .btn-outline-info.active,\n.open > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-outline-info:active:hover, .btn-outline-info:active:focus, .btn-outline-info:active.focus, .btn-outline-info.active:hover, .btn-outline-info.active:focus, .btn-outline-info.active.focus,\n.open > .btn-outline-info.dropdown-toggle:hover,\n.open > .btn-outline-info.dropdown-toggle:focus,\n.open > .btn-outline-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1f7e9a;\n}\n\n.btn-outline-info.disabled:focus, .btn-outline-info.disabled.focus, .btn-outline-info:disabled:focus, .btn-outline-info:disabled.focus {\n  border-color: #b0e1ef;\n}\n\n.btn-outline-info.disabled:hover, .btn-outline-info:disabled:hover {\n  border-color: #b0e1ef;\n}\n\n.btn-outline-success {\n  color: #5cb85c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-outline-success:active, .btn-outline-success.active,\n.open > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-outline-success:active:hover, .btn-outline-success:active:focus, .btn-outline-success:active.focus, .btn-outline-success.active:hover, .btn-outline-success.active:focus, .btn-outline-success.active.focus,\n.open > .btn-outline-success.dropdown-toggle:hover,\n.open > .btn-outline-success.dropdown-toggle:focus,\n.open > .btn-outline-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #2d672d;\n}\n\n.btn-outline-success.disabled:focus, .btn-outline-success.disabled.focus, .btn-outline-success:disabled:focus, .btn-outline-success:disabled.focus {\n  border-color: #a3d7a3;\n}\n\n.btn-outline-success.disabled:hover, .btn-outline-success:disabled:hover {\n  border-color: #a3d7a3;\n}\n\n.btn-outline-warning {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:active, .btn-outline-warning.active,\n.open > .btn-outline-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:active:hover, .btn-outline-warning:active:focus, .btn-outline-warning:active.focus, .btn-outline-warning.active:hover, .btn-outline-warning.active:focus, .btn-outline-warning.active.focus,\n.open > .btn-outline-warning.dropdown-toggle:hover,\n.open > .btn-outline-warning.dropdown-toggle:focus,\n.open > .btn-outline-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #b06d0f;\n}\n\n.btn-outline-warning.disabled:focus, .btn-outline-warning.disabled.focus, .btn-outline-warning:disabled:focus, .btn-outline-warning:disabled.focus {\n  border-color: #f8d9ac;\n}\n\n.btn-outline-warning.disabled:hover, .btn-outline-warning:disabled:hover {\n  border-color: #f8d9ac;\n}\n\n.btn-outline-danger {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:active, .btn-outline-danger.active,\n.open > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:active:hover, .btn-outline-danger:active:focus, .btn-outline-danger:active.focus, .btn-outline-danger.active:hover, .btn-outline-danger.active:focus, .btn-outline-danger.active.focus,\n.open > .btn-outline-danger.dropdown-toggle:hover,\n.open > .btn-outline-danger.dropdown-toggle:focus,\n.open > .btn-outline-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #8b211e;\n}\n\n.btn-outline-danger.disabled:focus, .btn-outline-danger.disabled.focus, .btn-outline-danger:disabled:focus, .btn-outline-danger:disabled.focus {\n  border-color: #eba5a3;\n}\n\n.btn-outline-danger.disabled:hover, .btn-outline-danger:disabled:hover {\n  border-color: #eba5a3;\n}\n\n.btn-link {\n  font-weight: normal;\n  color: #0275d8;\n  border-radius: 0;\n}\n\n.btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n  background-color: transparent;\n}\n\n.btn-link, .btn-link:focus, .btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover {\n  border-color: transparent;\n}\n\n.btn-link:focus, .btn-link:hover {\n  color: #014c8c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link:disabled:focus, .btn-link:disabled:hover {\n  color: #818a91;\n  text-decoration: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  -o-transition: opacity .15s linear;\n  transition: opacity .15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  -o-transition-property: height;\n  transition-property: height;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.3em;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0;\n}\n\n.dropdown-item:focus, .dropdown-item:hover {\n  color: #2b2d2f;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n\n.dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0275d8;\n  outline: 0;\n}\n\n.dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n  color: #818a91;\n}\n\n.dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\";\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 5px 20px;\n  font-size: 0.875rem;\n  color: #818a91;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid;\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -0.5rem;\n}\n\n.btn-toolbar::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 0.5rem;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn + .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 1.125rem;\n  padding-left: 1.125rem;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 0.3em 0.3em 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 0.3em 0.3em;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  width: 100%;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.input-group-addon.form-control-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.input-group-addon.form-control-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:not(:last-child),\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:not(:last-child) {\n  border-right: 0;\n}\n\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n  z-index: 3;\n}\n\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n.input-group-btn:not(:first-child) > .btn-group:focus,\n.input-group-btn:not(:first-child) > .btn-group:active,\n.input-group-btn:not(:first-child) > .btn-group:hover {\n  z-index: 3;\n}\n\n.custom-control {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  cursor: pointer;\n}\n\n.custom-control + .custom-control {\n  margin-left: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #0074d9;\n}\n\n.custom-control-input:focus ~ .custom-control-indicator {\n  -webkit-box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;\n          box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;\n}\n\n.custom-control-input:active ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #84c6ff;\n}\n\n.custom-control-input:disabled ~ .custom-control-indicator {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n\n.custom-control-input:disabled ~ .custom-control-description {\n  color: #767676;\n  cursor: not-allowed;\n}\n\n.custom-control-indicator {\n  position: absolute;\n  top: .0625rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  -webkit-background-size: 50% 50%;\n          background-size: 50% 50%;\n}\n\n.custom-checkbox .custom-control-indicator {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #0074d9;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n\n.custom-radio .custom-control-indicator {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.custom-controls-stacked .custom-control {\n  display: inline;\n}\n\n.custom-controls-stacked .custom-control::after {\n  display: block;\n  margin-bottom: 0.25rem;\n  content: \"\";\n}\n\n.custom-controls-stacked .custom-control + .custom-control {\n  margin-left: 0;\n}\n\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  padding-right: 0.75rem \\9;\n  color: #55595c;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-image: none \\9;\n  -webkit-background-size: 8px 10px;\n          background-size: 8px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.custom-select:focus {\n  border-color: #51a7e8;\n  outline: none;\n}\n\n.custom-select:focus::-ms-value {\n  color: #55595c;\n  background-color: #fff;\n}\n\n.custom-select:disabled {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef;\n}\n\n.custom-select::-ms-expand {\n  opacity: 0;\n}\n\n.custom-select-sm {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: 2.5rem;\n  cursor: pointer;\n}\n\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n}\n\n.custom-file-control:lang(en)::after {\n  content: \"Choose file...\";\n}\n\n.custom-file-control::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-file-control:lang(en)::before {\n  content: \"Browse\";\n}\n\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: inline-block;\n}\n\n.nav-link:focus, .nav-link:hover {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #818a91;\n}\n\n.nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n\n.nav-inline .nav-item {\n  display: inline-block;\n}\n\n.nav-inline .nav-item + .nav-item,\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.nav-tabs .nav-item {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs .nav-item + .nav-item {\n  margin-left: 0.2rem;\n}\n\n.nav-tabs .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border: 1px solid transparent;\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n  border-color: #eceeef #eceeef #ddd;\n}\n\n.nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n  color: #818a91;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n.nav-tabs .nav-item.open .nav-link,\n.nav-tabs .nav-item.open .nav-link:focus,\n.nav-tabs .nav-item.open .nav-link:hover {\n  color: #55595c;\n  background-color: #fff;\n  border-color: #ddd #ddd transparent;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.nav-pills .nav-item {\n  float: left;\n}\n\n.nav-pills .nav-item + .nav-item {\n  margin-left: 0.2rem;\n}\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8;\n}\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none;\n}\n\n.nav-stacked .nav-item + .nav-item {\n  margin-top: 0.2rem;\n  margin-left: 0;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n\n.navbar::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (min-width: 544px) {\n  .navbar {\n    border-radius: 0.25rem;\n  }\n}\n\n.navbar-full {\n  z-index: 1000;\n}\n\n@media (min-width: 544px) {\n  .navbar-full {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 544px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n}\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%;\n}\n\n@media (min-width: 544px) {\n  .navbar-sticky-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-brand {\n  float: left;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n}\n\n.navbar-brand:focus, .navbar-brand:hover {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden;\n}\n\n.navbar-divider::before {\n  content: \"\\A0\";\n}\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.navbar-toggler:focus, .navbar-toggler:hover {\n  text-decoration: none;\n}\n\n.navbar-nav .nav-item {\n  float: left;\n}\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n}\n\n.navbar-nav .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.navbar-dark .navbar-brand {\n  color: white;\n}\n\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n  color: white;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white;\n}\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n.navbar-toggleable-xs::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (max-width: 543px) {\n  .navbar-toggleable-xs .navbar-nav .nav-item {\n    float: none;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important;\n  }\n}\n\n.navbar-toggleable-sm::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (max-width: 767px) {\n  .navbar-toggleable-sm .navbar-nav .nav-item {\n    float: none;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important;\n  }\n}\n\n.navbar-toggleable-md::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (max-width: 991px) {\n  .navbar-toggleable-md .navbar-nav .nav-item {\n    float: none;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important;\n  }\n}\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n  background-color: #fff;\n  border-radius: 0.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-block {\n  padding: 1.25rem;\n}\n\n.card-block::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-header::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.card-header:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-footer::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-primary {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.card-primary .card-header,\n.card-primary .card-footer {\n  background-color: transparent;\n}\n\n.card-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.card-success .card-header,\n.card-success .card-footer {\n  background-color: transparent;\n}\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.card-info .card-header,\n.card-info .card-footer {\n  background-color: transparent;\n}\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.card-warning .card-header,\n.card-warning .card-footer {\n  background-color: transparent;\n}\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.card-danger .card-header,\n.card-danger .card-footer {\n  background-color: transparent;\n}\n\n.card-outline-primary {\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.card-outline-secondary {\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.card-outline-info {\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.card-outline-success {\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.card-outline-warning {\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.card-outline-danger {\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff;\n}\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-subtitle,\n.card-inverse .card-blockquote .blockquote-footer {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.card-inverse .card-link:focus, .card-inverse .card-link:hover {\n  color: #fff;\n}\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0;\n}\n\n.card-img {\n  border-radius: 0.25rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img-top {\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.card-img-bottom {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: table;\n    width: 100%;\n    margin-bottom: 0.75rem;\n    table-layout: fixed;\n    border-spacing: 1.25rem 0;\n  }\n  .card-deck .card {\n    display: table-cell;\n    margin-bottom: 0;\n    vertical-align: top;\n  }\n  .card-deck-wrapper {\n    margin-right: -1.25rem;\n    margin-left: -1.25rem;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-group {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  }\n  .card-group .card {\n    display: table-cell;\n    vertical-align: top;\n  }\n  .card-group .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group .card:first-child {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n  .card-group .card:first-child .card-img-top {\n    border-top-right-radius: 0;\n  }\n  .card-group .card:first-child .card-img-bottom {\n    border-bottom-right-radius: 0;\n  }\n  .card-group .card:last-child {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n  }\n  .card-group .card:last-child .card-img-top {\n    border-top-left-radius: 0;\n  }\n  .card-group .card:last-child .card-img-bottom {\n    border-bottom-left-radius: 0;\n  }\n  .card-group .card:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n  .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n    border-radius: 0;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem;\n  }\n  .card-columns .card {\n    width: 100%;\n  }\n}\n\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #eceeef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.breadcrumb-item {\n  float: left;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #818a91;\n  content: \"/\";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #818a91;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem;\n}\n\n.page-item {\n  display: inline;\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {\n  color: #818a91;\n  pointer-events: none;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.page-link {\n  position: relative;\n  float: left;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  color: #0275d8;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.page-link:focus, .page-link:hover {\n  color: #014c8c;\n  background-color: #eceeef;\n  border-color: #ddd;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.3rem;\n  border-top-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.2rem;\n  border-top-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.2rem;\n  border-top-right-radius: 0.2rem;\n}\n\n.tag {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.tag:empty {\n  display: none;\n}\n\n.btn .tag {\n  position: relative;\n  top: -1px;\n}\n\na.tag:focus, a.tag:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.tag-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.tag-default {\n  background-color: #818a91;\n}\n\n.tag-default[href]:focus, .tag-default[href]:hover {\n  background-color: #687077;\n}\n\n.tag-primary {\n  background-color: #0275d8;\n}\n\n.tag-primary[href]:focus, .tag-primary[href]:hover {\n  background-color: #025aa5;\n}\n\n.tag-success {\n  background-color: #5cb85c;\n}\n\n.tag-success[href]:focus, .tag-success[href]:hover {\n  background-color: #449d44;\n}\n\n.tag-info {\n  background-color: #5bc0de;\n}\n\n.tag-info[href]:focus, .tag-info[href]:hover {\n  background-color: #31b0d5;\n}\n\n.tag-warning {\n  background-color: #f0ad4e;\n}\n\n.tag-warning[href]:focus, .tag-warning[href]:hover {\n  background-color: #ec971f;\n}\n\n.tag-danger {\n  background-color: #d9534f;\n}\n\n.tag-danger[href]:focus, .tag-danger[href]:hover {\n  background-color: #c9302c;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 544px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8;\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: bold;\n}\n\n.alert-dismissible {\n  padding-right: 2rem;\n}\n\n.alert-dismissible .close {\n  position: relative;\n  top: -.125rem;\n  right: -1rem;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c1e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6d5ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7ecb5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9b9;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem;\n}\n\n.progress[value] {\n  background-color: #eee;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n}\n\n.progress[value]::-ms-fill {\n  background-color: #0074d9;\n  border: 0;\n}\n\n.progress[value]::-moz-progress-bar {\n  background-color: #0074d9;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.progress[value=\"100\"]::-moz-progress-bar {\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.progress[value=\"100\"]::-webkit-progress-value {\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem;\n}\n\nbase::-moz-progress-bar,\n.progress[value] {\n  background-color: #eee;\n  border-radius: 0.25rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress {\n    background-color: #eee;\n    border-radius: 0.25rem;\n  }\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-bottom-left-radius: 0.25rem;\n    border-top-left-radius: 0.25rem;\n  }\n  .progress[width=\"100%\"] {\n    border-bottom-right-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n}\n\n.progress-striped[value]::-webkit-progress-value {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 1rem 1rem;\n          background-size: 1rem 1rem;\n}\n\n.progress-striped[value]::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-striped[value]::-ms-fill {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    -webkit-background-size: 1rem 1rem;\n            background-size: 1rem 1rem;\n  }\n}\n\n.progress-animated[value]::-webkit-progress-value {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n         -o-animation: progress-bar-stripes 2s linear infinite;\n            animation: progress-bar-stripes 2s linear infinite;\n  }\n}\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #5cb85c;\n}\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #5cb85c;\n}\n\n.progress-success[value]::-ms-fill {\n  background-color: #5cb85c;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #5cb85c;\n  }\n}\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de;\n}\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de;\n}\n\n.progress-info[value]::-ms-fill {\n  background-color: #5bc0de;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de;\n  }\n}\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e;\n}\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e;\n}\n\n.progress-warning[value]::-ms-fill {\n  background-color: #f0ad4e;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e;\n  }\n}\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f;\n}\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f;\n}\n\n.progress-danger[value]::-ms-fill {\n  background-color: #d9534f;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f;\n  }\n}\n\n.media,\n.media-body {\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right {\n  padding-left: 10px;\n}\n\n.media-left {\n  padding-right: 10px;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef;\n}\n\n.list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n  color: #818a91;\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  text-decoration: none;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n  color: #a8d6fe;\n}\n\n.list-group-flush .list-group-item {\n  border-radius: 0;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #555;\n  text-align: inherit;\n}\n\n.list-group-item-action .list-group-item-heading {\n  color: #333;\n}\n\n.list-group-item-action:focus, .list-group-item-action:hover {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:focus, a.list-group-item-success:hover,\nbutton.list-group-item-success:focus,\nbutton.list-group-item-success:hover {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:hover {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:focus, a.list-group-item-info:hover,\nbutton.list-group-item-info:focus,\nbutton.list-group-item-info:hover {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:hover {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:focus, a.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:hover {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:focus, a.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:hover {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.857143%;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.embed-responsive-1by1 {\n  padding-bottom: 100%;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n}\n\n.close:focus, .close:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  -o-transition: -o-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out, -o-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 544px) {\n  .modal-dialog {\n    max-width: 600px;\n    margin: 30px auto;\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.in {\n  opacity: 0.9;\n}\n\n.tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n\n.tooltip.tooltip-top .tooltip-arrow, .tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n\n.tooltip.tooltip-right .tooltip-arrow, .tooltip.bs-tether-element-attached-left .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n\n.tooltip.tooltip-bottom .tooltip-arrow, .tooltip.bs-tether-element-attached-top .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n\n.tooltip.tooltip-left .tooltip-arrow, .tooltip.bs-tether-element-attached-right .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover.popover-top, .popover.bs-tether-element-attached-bottom {\n  margin-top: -10px;\n}\n\n.popover.popover-top .popover-arrow, .popover.bs-tether-element-attached-bottom .popover-arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  border-bottom-width: 0;\n}\n\n.popover.popover-top .popover-arrow::after, .popover.bs-tether-element-attached-bottom .popover-arrow::after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \"\";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n\n.popover.popover-right, .popover.bs-tether-element-attached-left {\n  margin-left: 10px;\n}\n\n.popover.popover-right .popover-arrow, .popover.bs-tether-element-attached-left .popover-arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: rgba(0, 0, 0, 0.25);\n  border-left-width: 0;\n}\n\n.popover.popover-right .popover-arrow::after, .popover.bs-tether-element-attached-left .popover-arrow::after {\n  bottom: -10px;\n  left: 1px;\n  content: \"\";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n\n.popover.popover-bottom, .popover.bs-tether-element-attached-top {\n  margin-top: 10px;\n}\n\n.popover.popover-bottom .popover-arrow, .popover.bs-tether-element-attached-top .popover-arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.popover-bottom .popover-arrow::after, .popover.bs-tether-element-attached-top .popover-arrow::after {\n  top: 1px;\n  margin-left: -10px;\n  content: \"\";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.popover-left, .popover.bs-tether-element-attached-right {\n  margin-left: -10px;\n}\n\n.popover.popover-left .popover-arrow, .popover.bs-tether-element-attached-right .popover-arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.popover-left .popover-arrow::after, .popover.bs-tether-element-attached-right .popover-arrow::after {\n  right: 1px;\n  bottom: -10px;\n  content: \"\";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 0.2375rem 0.2375rem 0 0;\n}\n\n.popover-title:empty {\n  display: none;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover-arrow, .popover-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover-arrow {\n  border-width: 11px;\n}\n\n.popover-arrow::after {\n  content: \"\";\n  border-width: 10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner > .carousel-item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n  -o-transition: .6s ease-in-out left;\n  transition: .6s ease-in-out left;\n}\n\n.carousel-inner > .carousel-item > img,\n.carousel-inner > .carousel-item > a > img {\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .carousel-item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n    transition: -webkit-transform .6s ease-in-out;\n    -o-transition: -o-transform .6s ease-in-out;\n    transition: transform .6s ease-in-out;\n    transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out, -o-transform .6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .carousel-item.next, .carousel-inner > .carousel-item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .carousel-item.prev, .carousel-inner > .carousel-item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .carousel-item.next.left, .carousel-inner > .carousel-item.prev.right, .carousel-inner > .carousel-item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: 0.5;\n}\n\n.carousel-control.left {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:focus, .carousel-control:hover {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  font-family: serif;\n  line-height: 1;\n}\n\n.carousel-control .icon-prev {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev::before {\n  content: \"\\2039\";\n}\n\n.carousel-control .icon-next::before {\n  content: \"\\203A\";\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: transparent;\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media (min-width: 544px) {\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.bg-faded {\n  background-color: #f7f7f9;\n}\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #0275d8 !important;\n}\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #025aa5 !important;\n}\n\n.bg-success {\n  color: #fff !important;\n  background-color: #5cb85c !important;\n}\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #449d44 !important;\n}\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important;\n}\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5 !important;\n}\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important;\n}\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f !important;\n}\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important;\n}\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c !important;\n}\n\n.bg-inverse {\n  color: #fff !important;\n  background-color: #373a3c !important;\n}\n\na.bg-inverse:focus, a.bg-inverse:hover {\n  background-color: #1f2021 !important;\n}\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.pull-xs-left {\n  float: left !important;\n}\n\n.pull-xs-right {\n  float: right !important;\n}\n\n.pull-xs-none {\n  float: none !important;\n}\n\n@media (min-width: 544px) {\n  .pull-sm-left {\n    float: left !important;\n  }\n  .pull-sm-right {\n    float: right !important;\n  }\n  .pull-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .pull-md-left {\n    float: left !important;\n  }\n  .pull-md-right {\n    float: right !important;\n  }\n  .pull-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .pull-lg-left {\n    float: left !important;\n  }\n  .pull-lg-right {\n    float: right !important;\n  }\n  .pull-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .pull-xl-left {\n    float: left !important;\n  }\n  .pull-xl-right {\n    float: right !important;\n  }\n  .pull-xl-none {\n    float: none !important;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-a-0 {\n  margin: 0 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-a-1 {\n  margin: 1rem 1rem !important;\n}\n\n.m-t-1 {\n  margin-top: 1rem !important;\n}\n\n.m-r-1 {\n  margin-right: 1rem !important;\n}\n\n.m-b-1 {\n  margin-bottom: 1rem !important;\n}\n\n.m-l-1 {\n  margin-left: 1rem !important;\n}\n\n.m-x-1 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.m-y-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-a-2 {\n  margin: 1.5rem 1.5rem !important;\n}\n\n.m-t-2 {\n  margin-top: 1.5rem !important;\n}\n\n.m-r-2 {\n  margin-right: 1.5rem !important;\n}\n\n.m-b-2 {\n  margin-bottom: 1.5rem !important;\n}\n\n.m-l-2 {\n  margin-left: 1.5rem !important;\n}\n\n.m-x-2 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.m-y-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-a-3 {\n  margin: 3rem 3rem !important;\n}\n\n.m-t-3 {\n  margin-top: 3rem !important;\n}\n\n.m-r-3 {\n  margin-right: 3rem !important;\n}\n\n.m-b-3 {\n  margin-bottom: 3rem !important;\n}\n\n.m-l-3 {\n  margin-left: 3rem !important;\n}\n\n.m-x-3 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.m-y-3 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.p-a-0 {\n  padding: 0 0 !important;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0 !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-a-1 {\n  padding: 1rem 1rem !important;\n}\n\n.p-t-1 {\n  padding-top: 1rem !important;\n}\n\n.p-r-1 {\n  padding-right: 1rem !important;\n}\n\n.p-b-1 {\n  padding-bottom: 1rem !important;\n}\n\n.p-l-1 {\n  padding-left: 1rem !important;\n}\n\n.p-x-1 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.p-y-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-a-2 {\n  padding: 1.5rem 1.5rem !important;\n}\n\n.p-t-2 {\n  padding-top: 1.5rem !important;\n}\n\n.p-r-2 {\n  padding-right: 1.5rem !important;\n}\n\n.p-b-2 {\n  padding-bottom: 1.5rem !important;\n}\n\n.p-l-2 {\n  padding-left: 1.5rem !important;\n}\n\n.p-x-2 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.p-y-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-a-3 {\n  padding: 3rem 3rem !important;\n}\n\n.p-t-3 {\n  padding-top: 3rem !important;\n}\n\n.p-r-3 {\n  padding-right: 3rem !important;\n}\n\n.p-b-3 {\n  padding-bottom: 3rem !important;\n}\n\n.p-l-3 {\n  padding-left: 3rem !important;\n}\n\n.p-x-3 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.p-y-3 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-xs-left {\n  text-align: left !important;\n}\n\n.text-xs-right {\n  text-align: right !important;\n}\n\n.text-xs-center {\n  text-align: center !important;\n}\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-normal {\n  font-weight: normal;\n}\n\n.font-weight-bold {\n  font-weight: bold;\n}\n\n.font-italic {\n  font-style: italic;\n}\n\n.text-muted {\n  color: #818a91 !important;\n}\n\na.text-muted:focus, a.text-muted:hover {\n  color: #687077 !important;\n}\n\n.text-primary {\n  color: #0275d8 !important;\n}\n\na.text-primary:focus, a.text-primary:hover {\n  color: #025aa5 !important;\n}\n\n.text-success {\n  color: #5cb85c !important;\n}\n\na.text-success:focus, a.text-success:hover {\n  color: #449d44 !important;\n}\n\n.text-info {\n  color: #5bc0de !important;\n}\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5 !important;\n}\n\n.text-warning {\n  color: #f0ad4e !important;\n}\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f !important;\n}\n\n.text-danger {\n  color: #d9534f !important;\n}\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n.hidden-xs-up {\n  display: none !important;\n}\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important;\n  }\n}\n\n.hidden-xl-down {\n  display: none !important;\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
	 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */

	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery')
	}

	+function ($) {
	  var version = $.fn.jquery.split(' ')[0].split('.')
	  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
	    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
	  }
	}(jQuery);


	+function ($) {

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): util.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	'use strict';

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Util = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Private TransitionEnd Helpers
	   * ------------------------------------------------------------------------
	   */

	  var transition = false;

	  var MAX_UID = 1000000;

	  var TransitionEndEvent = {
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'transitionend',
	    OTransition: 'oTransitionEnd otransitionend',
	    transition: 'transitionend'
	  };

	  // shoutout AngusCroll (https://goo.gl/pxwQGp)
	  function toType(obj) {
	    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	  }

	  function isElement(obj) {
	    return (obj[0] || obj).nodeType;
	  }

	  function getSpecialTransitionEndEvent() {
	    return {
	      bindType: transition.end,
	      delegateType: transition.end,
	      handle: function handle(event) {
	        if ($(event.target).is(this)) {
	          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
	        }
	        return undefined;
	      }
	    };
	  }

	  function transitionEndTest() {
	    if (window.QUnit) {
	      return false;
	    }

	    var el = document.createElement('bootstrap');

	    for (var _name in TransitionEndEvent) {
	      if (el.style[_name] !== undefined) {
	        return { end: TransitionEndEvent[_name] };
	      }
	    }

	    return false;
	  }

	  function transitionEndEmulator(duration) {
	    var _this = this;

	    var called = false;

	    $(this).one(Util.TRANSITION_END, function () {
	      called = true;
	    });

	    setTimeout(function () {
	      if (!called) {
	        Util.triggerTransitionEnd(_this);
	      }
	    }, duration);

	    return this;
	  }

	  function setTransitionEndSupport() {
	    transition = transitionEndTest();

	    $.fn.emulateTransitionEnd = transitionEndEmulator;

	    if (Util.supportsTransitionEnd()) {
	      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	    }
	  }

	  /**
	   * --------------------------------------------------------------------------
	   * Public Util Api
	   * --------------------------------------------------------------------------
	   */

	  var Util = {

	    TRANSITION_END: 'bsTransitionEnd',

	    getUID: function getUID(prefix) {
	      do {
	        /* eslint-disable no-bitwise */
	        prefix += ~ ~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
	        /* eslint-enable no-bitwise */
	      } while (document.getElementById(prefix));
	      return prefix;
	    },

	    getSelectorFromElement: function getSelectorFromElement(element) {
	      var selector = element.getAttribute('data-target');

	      if (!selector) {
	        selector = element.getAttribute('href') || '';
	        selector = /^#[a-z]/i.test(selector) ? selector : null;
	      }

	      return selector;
	    },

	    reflow: function reflow(element) {
	      new Function('bs', 'return bs')(element.offsetHeight);
	    },

	    triggerTransitionEnd: function triggerTransitionEnd(element) {
	      $(element).trigger(transition.end);
	    },

	    supportsTransitionEnd: function supportsTransitionEnd() {
	      return Boolean(transition);
	    },

	    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	      for (var property in configTypes) {
	        if (configTypes.hasOwnProperty(property)) {
	          var expectedTypes = configTypes[property];
	          var value = config[property];
	          var valueType = undefined;

	          if (value && isElement(value)) {
	            valueType = 'element';
	          } else {
	            valueType = toType(value);
	          }

	          if (!new RegExp(expectedTypes).test(valueType)) {
	            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
	          }
	        }
	      }
	    }
	  };

	  setTransitionEndSupport();

	  return Util;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): alert.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Alert = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'alert';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.alert';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;

	  var Selector = {
	    DISMISS: '[data-dismiss="alert"]'
	  };

	  var Event = {
	    CLOSE: 'close' + EVENT_KEY,
	    CLOSED: 'closed' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    ALERT: 'alert',
	    FADE: 'fade',
	    IN: 'in'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Alert = (function () {
	    function Alert(element) {
	      _classCallCheck(this, Alert);

	      this._element = element;
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Alert, [{
	      key: 'close',

	      // public

	      value: function close(element) {
	        element = element || this._element;

	        var rootElement = this._getRootElement(element);
	        var customEvent = this._triggerCloseEvent(rootElement);

	        if (customEvent.isDefaultPrevented()) {
	          return;
	        }

	        this._removeElement(rootElement);
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);
	        this._element = null;
	      }

	      // private

	    }, {
	      key: '_getRootElement',
	      value: function _getRootElement(element) {
	        var selector = Util.getSelectorFromElement(element);
	        var parent = false;

	        if (selector) {
	          parent = $(selector)[0];
	        }

	        if (!parent) {
	          parent = $(element).closest('.' + ClassName.ALERT)[0];
	        }

	        return parent;
	      }
	    }, {
	      key: '_triggerCloseEvent',
	      value: function _triggerCloseEvent(element) {
	        var closeEvent = $.Event(Event.CLOSE);

	        $(element).trigger(closeEvent);
	        return closeEvent;
	      }
	    }, {
	      key: '_removeElement',
	      value: function _removeElement(element) {
	        $(element).removeClass(ClassName.IN);

	        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
	          this._destroyElement(element);
	          return;
	        }

	        $(element).one(Util.TRANSITION_END, $.proxy(this._destroyElement, this, element)).emulateTransitionEnd(TRANSITION_DURATION);
	      }
	    }, {
	      key: '_destroyElement',
	      value: function _destroyElement(element) {
	        $(element).detach().trigger(Event.CLOSED).remove();
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var $element = $(this);
	          var data = $element.data(DATA_KEY);

	          if (!data) {
	            data = new Alert(this);
	            $element.data(DATA_KEY, data);
	          }

	          if (config === 'close') {
	            data[config](this);
	          }
	        });
	      }
	    }, {
	      key: '_handleDismiss',
	      value: function _handleDismiss(alertInstance) {
	        return function (event) {
	          if (event) {
	            event.preventDefault();
	          }

	          alertInstance.close(this);
	        };
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }]);

	    return Alert;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Alert._jQueryInterface;
	  $.fn[NAME].Constructor = Alert;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Alert._jQueryInterface;
	  };

	  return Alert;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): button.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Button = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'button';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.button';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];

	  var ClassName = {
	    ACTIVE: 'active',
	    BUTTON: 'btn',
	    FOCUS: 'focus'
	  };

	  var Selector = {
	    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
	    DATA_TOGGLE: '[data-toggle="buttons"]',
	    INPUT: 'input',
	    ACTIVE: '.active',
	    BUTTON: '.btn'
	  };

	  var Event = {
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
	    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Button = (function () {
	    function Button(element) {
	      _classCallCheck(this, Button);

	      this._element = element;
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Button, [{
	      key: 'toggle',

	      // public

	      value: function toggle() {
	        var triggerChangeEvent = true;
	        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

	        if (rootElement) {
	          var input = $(this._element).find(Selector.INPUT)[0];

	          if (input) {
	            if (input.type === 'radio') {
	              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
	                triggerChangeEvent = false;
	              } else {
	                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

	                if (activeElement) {
	                  $(activeElement).removeClass(ClassName.ACTIVE);
	                }
	              }
	            }

	            if (triggerChangeEvent) {
	              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
	              $(this._element).trigger('change');
	            }

	            input.focus();
	          }
	        } else {
	          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
	        }

	        if (triggerChangeEvent) {
	          $(this._element).toggleClass(ClassName.ACTIVE);
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);
	        this._element = null;
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);

	          if (!data) {
	            data = new Button(this);
	            $(this).data(DATA_KEY, data);
	          }

	          if (config === 'toggle') {
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }]);

	    return Button;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	    event.preventDefault();

	    var button = event.target;

	    if (!$(button).hasClass(ClassName.BUTTON)) {
	      button = $(button).closest(Selector.BUTTON);
	    }

	    Button._jQueryInterface.call($(button), 'toggle');
	  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	    var button = $(event.target).closest(Selector.BUTTON)[0];
	    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Button._jQueryInterface;
	  $.fn[NAME].Constructor = Button;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Button._jQueryInterface;
	  };

	  return Button;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): carousel.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Carousel = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'carousel';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.carousel';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 600;
	  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
	  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

	  var Default = {
	    interval: 5000,
	    keyboard: true,
	    slide: false,
	    pause: 'hover',
	    wrap: true
	  };

	  var DefaultType = {
	    interval: '(number|boolean)',
	    keyboard: 'boolean',
	    slide: '(boolean|string)',
	    pause: '(string|boolean)',
	    wrap: 'boolean'
	  };

	  var Direction = {
	    NEXT: 'next',
	    PREVIOUS: 'prev'
	  };

	  var Event = {
	    SLIDE: 'slide' + EVENT_KEY,
	    SLID: 'slid' + EVENT_KEY,
	    KEYDOWN: 'keydown' + EVENT_KEY,
	    MOUSEENTER: 'mouseenter' + EVENT_KEY,
	    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
	    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    CAROUSEL: 'carousel',
	    ACTIVE: 'active',
	    SLIDE: 'slide',
	    RIGHT: 'right',
	    LEFT: 'left',
	    ITEM: 'carousel-item'
	  };

	  var Selector = {
	    ACTIVE: '.active',
	    ACTIVE_ITEM: '.active.carousel-item',
	    ITEM: '.carousel-item',
	    NEXT_PREV: '.next, .prev',
	    INDICATORS: '.carousel-indicators',
	    DATA_SLIDE: '[data-slide], [data-slide-to]',
	    DATA_RIDE: '[data-ride="carousel"]'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Carousel = (function () {
	    function Carousel(element, config) {
	      _classCallCheck(this, Carousel);

	      this._items = null;
	      this._interval = null;
	      this._activeElement = null;

	      this._isPaused = false;
	      this._isSliding = false;

	      this._config = this._getConfig(config);
	      this._element = $(element)[0];
	      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

	      this._addEventListeners();
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Carousel, [{
	      key: 'next',

	      // public

	      value: function next() {
	        if (!this._isSliding) {
	          this._slide(Direction.NEXT);
	        }
	      }
	    }, {
	      key: 'nextWhenVisible',
	      value: function nextWhenVisible() {
	        // Don't call next when the page isn't visible
	        if (!document.hidden) {
	          this.next();
	        }
	      }
	    }, {
	      key: 'prev',
	      value: function prev() {
	        if (!this._isSliding) {
	          this._slide(Direction.PREVIOUS);
	        }
	      }
	    }, {
	      key: 'pause',
	      value: function pause(event) {
	        if (!event) {
	          this._isPaused = true;
	        }

	        if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
	          Util.triggerTransitionEnd(this._element);
	          this.cycle(true);
	        }

	        clearInterval(this._interval);
	        this._interval = null;
	      }
	    }, {
	      key: 'cycle',
	      value: function cycle(event) {
	        if (!event) {
	          this._isPaused = false;
	        }

	        if (this._interval) {
	          clearInterval(this._interval);
	          this._interval = null;
	        }

	        if (this._config.interval && !this._isPaused) {
	          this._interval = setInterval($.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval);
	        }
	      }
	    }, {
	      key: 'to',
	      value: function to(index) {
	        var _this2 = this;

	        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

	        var activeIndex = this._getItemIndex(this._activeElement);

	        if (index > this._items.length - 1 || index < 0) {
	          return;
	        }

	        if (this._isSliding) {
	          $(this._element).one(Event.SLID, function () {
	            return _this2.to(index);
	          });
	          return;
	        }

	        if (activeIndex === index) {
	          this.pause();
	          this.cycle();
	          return;
	        }

	        var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

	        this._slide(direction, this._items[index]);
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $(this._element).off(EVENT_KEY);
	        $.removeData(this._element, DATA_KEY);

	        this._items = null;
	        this._config = null;
	        this._element = null;
	        this._interval = null;
	        this._isPaused = null;
	        this._isSliding = null;
	        this._activeElement = null;
	        this._indicatorsElement = null;
	      }

	      // private

	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, Default, config);
	        Util.typeCheckConfig(NAME, config, DefaultType);
	        return config;
	      }
	    }, {
	      key: '_addEventListeners',
	      value: function _addEventListeners() {
	        if (this._config.keyboard) {
	          $(this._element).on(Event.KEYDOWN, $.proxy(this._keydown, this));
	        }

	        if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
	          $(this._element).on(Event.MOUSEENTER, $.proxy(this.pause, this)).on(Event.MOUSELEAVE, $.proxy(this.cycle, this));
	        }
	      }
	    }, {
	      key: '_keydown',
	      value: function _keydown(event) {
	        event.preventDefault();

	        if (/input|textarea/i.test(event.target.tagName)) {
	          return;
	        }

	        switch (event.which) {
	          case ARROW_LEFT_KEYCODE:
	            this.prev();
	            break;
	          case ARROW_RIGHT_KEYCODE:
	            this.next();
	            break;
	          default:
	            return;
	        }
	      }
	    }, {
	      key: '_getItemIndex',
	      value: function _getItemIndex(element) {
	        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
	        return this._items.indexOf(element);
	      }
	    }, {
	      key: '_getItemByDirection',
	      value: function _getItemByDirection(direction, activeElement) {
	        var isNextDirection = direction === Direction.NEXT;
	        var isPrevDirection = direction === Direction.PREVIOUS;
	        var activeIndex = this._getItemIndex(activeElement);
	        var lastItemIndex = this._items.length - 1;
	        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

	        if (isGoingToWrap && !this._config.wrap) {
	          return activeElement;
	        }

	        var delta = direction === Direction.PREVIOUS ? -1 : 1;
	        var itemIndex = (activeIndex + delta) % this._items.length;

	        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
	      }
	    }, {
	      key: '_triggerSlideEvent',
	      value: function _triggerSlideEvent(relatedTarget, directionalClassname) {
	        var slideEvent = $.Event(Event.SLIDE, {
	          relatedTarget: relatedTarget,
	          direction: directionalClassname
	        });

	        $(this._element).trigger(slideEvent);

	        return slideEvent;
	      }
	    }, {
	      key: '_setActiveIndicatorElement',
	      value: function _setActiveIndicatorElement(element) {
	        if (this._indicatorsElement) {
	          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

	          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

	          if (nextIndicator) {
	            $(nextIndicator).addClass(ClassName.ACTIVE);
	          }
	        }
	      }
	    }, {
	      key: '_slide',
	      value: function _slide(direction, element) {
	        var _this3 = this;

	        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
	        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

	        var isCycling = Boolean(this._interval);

	        var directionalClassName = direction === Direction.NEXT ? ClassName.LEFT : ClassName.RIGHT;

	        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
	          this._isSliding = false;
	          return;
	        }

	        var slideEvent = this._triggerSlideEvent(nextElement, directionalClassName);
	        if (slideEvent.isDefaultPrevented()) {
	          return;
	        }

	        if (!activeElement || !nextElement) {
	          // some weirdness is happening, so we bail
	          return;
	        }

	        this._isSliding = true;

	        if (isCycling) {
	          this.pause();
	        }

	        this._setActiveIndicatorElement(nextElement);

	        var slidEvent = $.Event(Event.SLID, {
	          relatedTarget: nextElement,
	          direction: directionalClassName
	        });

	        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

	          $(nextElement).addClass(direction);

	          Util.reflow(nextElement);

	          $(activeElement).addClass(directionalClassName);
	          $(nextElement).addClass(directionalClassName);

	          $(activeElement).one(Util.TRANSITION_END, function () {
	            $(nextElement).removeClass(directionalClassName).removeClass(direction);

	            $(nextElement).addClass(ClassName.ACTIVE);

	            $(activeElement).removeClass(ClassName.ACTIVE).removeClass(direction).removeClass(directionalClassName);

	            _this3._isSliding = false;

	            setTimeout(function () {
	              return $(_this3._element).trigger(slidEvent);
	            }, 0);
	          }).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          $(activeElement).removeClass(ClassName.ACTIVE);
	          $(nextElement).addClass(ClassName.ACTIVE);

	          this._isSliding = false;
	          $(this._element).trigger(slidEvent);
	        }

	        if (isCycling) {
	          this.cycle();
	        }
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = $.extend({}, Default, $(this).data());

	          if (typeof config === 'object') {
	            $.extend(_config, config);
	          }

	          var action = typeof config === 'string' ? config : _config.slide;

	          if (!data) {
	            data = new Carousel(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'number') {
	            data.to(config);
	          } else if (typeof action === 'string') {
	            if (data[action] === undefined) {
	              throw new Error('No method named "' + action + '"');
	            }
	            data[action]();
	          } else if (_config.interval) {
	            data.pause();
	            data.cycle();
	          }
	        });
	      }
	    }, {
	      key: '_dataApiClickHandler',
	      value: function _dataApiClickHandler(event) {
	        var selector = Util.getSelectorFromElement(this);

	        if (!selector) {
	          return;
	        }

	        var target = $(selector)[0];

	        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
	          return;
	        }

	        var config = $.extend({}, $(target).data(), $(this).data());
	        var slideIndex = this.getAttribute('data-slide-to');

	        if (slideIndex) {
	          config.interval = false;
	        }

	        Carousel._jQueryInterface.call($(target), config);

	        if (slideIndex) {
	          $(target).data(DATA_KEY).to(slideIndex);
	        }

	        event.preventDefault();
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return Carousel;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

	  $(window).on(Event.LOAD_DATA_API, function () {
	    $(Selector.DATA_RIDE).each(function () {
	      var $carousel = $(this);
	      Carousel._jQueryInterface.call($carousel, $carousel.data());
	    });
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Carousel._jQueryInterface;
	  $.fn[NAME].Constructor = Carousel;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Carousel._jQueryInterface;
	  };

	  return Carousel;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Collapse = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'collapse';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.collapse';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 600;

	  var Default = {
	    toggle: true,
	    parent: ''
	  };

	  var DefaultType = {
	    toggle: 'boolean',
	    parent: 'string'
	  };

	  var Event = {
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    IN: 'in',
	    COLLAPSE: 'collapse',
	    COLLAPSING: 'collapsing',
	    COLLAPSED: 'collapsed'
	  };

	  var Dimension = {
	    WIDTH: 'width',
	    HEIGHT: 'height'
	  };

	  var Selector = {
	    ACTIVES: '.panel > .in, .panel > .collapsing',
	    DATA_TOGGLE: '[data-toggle="collapse"]'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Collapse = (function () {
	    function Collapse(element, config) {
	      _classCallCheck(this, Collapse);

	      this._isTransitioning = false;
	      this._element = element;
	      this._config = this._getConfig(config);
	      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

	      this._parent = this._config.parent ? this._getParent() : null;

	      if (!this._config.parent) {
	        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
	      }

	      if (this._config.toggle) {
	        this.toggle();
	      }
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Collapse, [{
	      key: 'toggle',

	      // public

	      value: function toggle() {
	        if ($(this._element).hasClass(ClassName.IN)) {
	          this.hide();
	        } else {
	          this.show();
	        }
	      }
	    }, {
	      key: 'show',
	      value: function show() {
	        var _this4 = this;

	        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
	          return;
	        }

	        var actives = undefined;
	        var activesData = undefined;

	        if (this._parent) {
	          actives = $.makeArray($(Selector.ACTIVES));
	          if (!actives.length) {
	            actives = null;
	          }
	        }

	        if (actives) {
	          activesData = $(actives).data(DATA_KEY);
	          if (activesData && activesData._isTransitioning) {
	            return;
	          }
	        }

	        var startEvent = $.Event(Event.SHOW);
	        $(this._element).trigger(startEvent);
	        if (startEvent.isDefaultPrevented()) {
	          return;
	        }

	        if (actives) {
	          Collapse._jQueryInterface.call($(actives), 'hide');
	          if (!activesData) {
	            $(actives).data(DATA_KEY, null);
	          }
	        }

	        var dimension = this._getDimension();

	        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

	        this._element.style[dimension] = 0;
	        this._element.setAttribute('aria-expanded', true);

	        if (this._triggerArray.length) {
	          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
	        }

	        this.setTransitioning(true);

	        var complete = function complete() {
	          $(_this4._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

	          _this4._element.style[dimension] = '';

	          _this4.setTransitioning(false);

	          $(_this4._element).trigger(Event.SHOWN);
	        };

	        if (!Util.supportsTransitionEnd()) {
	          complete();
	          return;
	        }

	        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	        var scrollSize = 'scroll' + capitalizedDimension;

	        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

	        this._element.style[dimension] = this._element[scrollSize] + 'px';
	      }
	    }, {
	      key: 'hide',
	      value: function hide() {
	        var _this5 = this;

	        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
	          return;
	        }

	        var startEvent = $.Event(Event.HIDE);
	        $(this._element).trigger(startEvent);
	        if (startEvent.isDefaultPrevented()) {
	          return;
	        }

	        var dimension = this._getDimension();
	        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

	        this._element.style[dimension] = this._element[offsetDimension] + 'px';

	        Util.reflow(this._element);

	        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);

	        this._element.setAttribute('aria-expanded', false);

	        if (this._triggerArray.length) {
	          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
	        }

	        this.setTransitioning(true);

	        var complete = function complete() {
	          _this5.setTransitioning(false);
	          $(_this5._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
	        };

	        this._element.style[dimension] = 0;

	        if (!Util.supportsTransitionEnd()) {
	          complete();
	          return;
	        }

	        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      }
	    }, {
	      key: 'setTransitioning',
	      value: function setTransitioning(isTransitioning) {
	        this._isTransitioning = isTransitioning;
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);

	        this._config = null;
	        this._parent = null;
	        this._element = null;
	        this._triggerArray = null;
	        this._isTransitioning = null;
	      }

	      // private

	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, Default, config);
	        config.toggle = Boolean(config.toggle); // coerce string values
	        Util.typeCheckConfig(NAME, config, DefaultType);
	        return config;
	      }
	    }, {
	      key: '_getDimension',
	      value: function _getDimension() {
	        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
	        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
	      }
	    }, {
	      key: '_getParent',
	      value: function _getParent() {
	        var _this6 = this;

	        var parent = $(this._config.parent)[0];
	        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

	        $(parent).find(selector).each(function (i, element) {
	          _this6._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
	        });

	        return parent;
	      }
	    }, {
	      key: '_addAriaAndCollapsedClass',
	      value: function _addAriaAndCollapsedClass(element, triggerArray) {
	        if (element) {
	          var isOpen = $(element).hasClass(ClassName.IN);
	          element.setAttribute('aria-expanded', isOpen);

	          if (triggerArray.length) {
	            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
	          }
	        }
	      }

	      // static

	    }], [{
	      key: '_getTargetFromElement',
	      value: function _getTargetFromElement(element) {
	        var selector = Util.getSelectorFromElement(element);
	        return selector ? $(selector)[0] : null;
	      }
	    }, {
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var $this = $(this);
	          var data = $this.data(DATA_KEY);
	          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

	          if (!data && _config.toggle && /show|hide/.test(config)) {
	            _config.toggle = false;
	          }

	          if (!data) {
	            data = new Collapse(this, _config);
	            $this.data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return Collapse;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();

	    var target = Collapse._getTargetFromElement(this);
	    var data = $(target).data(DATA_KEY);
	    var config = data ? 'toggle' : $(this).data();

	    Collapse._jQueryInterface.call($(target), config);
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Collapse._jQueryInterface;
	  $.fn[NAME].Constructor = Collapse;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Collapse._jQueryInterface;
	  };

	  return Collapse;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Dropdown = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'dropdown';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.dropdown';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
	  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
	  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
	  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    CLICK: 'click' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
	    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    BACKDROP: 'dropdown-backdrop',
	    DISABLED: 'disabled',
	    OPEN: 'open'
	  };

	  var Selector = {
	    BACKDROP: '.dropdown-backdrop',
	    DATA_TOGGLE: '[data-toggle="dropdown"]',
	    FORM_CHILD: '.dropdown form',
	    ROLE_MENU: '[role="menu"]',
	    ROLE_LISTBOX: '[role="listbox"]',
	    NAVBAR_NAV: '.navbar-nav',
	    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Dropdown = (function () {
	    function Dropdown(element) {
	      _classCallCheck(this, Dropdown);

	      this._element = element;

	      this._addEventListeners();
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Dropdown, [{
	      key: 'toggle',

	      // public

	      value: function toggle() {
	        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	          return false;
	        }

	        var parent = Dropdown._getParentFromElement(this);
	        var isActive = $(parent).hasClass(ClassName.OPEN);

	        Dropdown._clearMenus();

	        if (isActive) {
	          return false;
	        }

	        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

	          // if mobile we use a backdrop because click events don't delegate
	          var dropdown = document.createElement('div');
	          dropdown.className = ClassName.BACKDROP;
	          $(dropdown).insertBefore(this);
	          $(dropdown).on('click', Dropdown._clearMenus);
	        }

	        var relatedTarget = { relatedTarget: this };
	        var showEvent = $.Event(Event.SHOW, relatedTarget);

	        $(parent).trigger(showEvent);

	        if (showEvent.isDefaultPrevented()) {
	          return false;
	        }

	        this.focus();
	        this.setAttribute('aria-expanded', 'true');

	        $(parent).toggleClass(ClassName.OPEN);
	        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

	        return false;
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);
	        $(this._element).off(EVENT_KEY);
	        this._element = null;
	      }

	      // private

	    }, {
	      key: '_addEventListeners',
	      value: function _addEventListeners() {
	        $(this._element).on(Event.CLICK, this.toggle);
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);

	          if (!data) {
	            $(this).data(DATA_KEY, data = new Dropdown(this));
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config].call(this);
	          }
	        });
	      }
	    }, {
	      key: '_clearMenus',
	      value: function _clearMenus(event) {
	        if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
	          return;
	        }

	        var backdrop = $(Selector.BACKDROP)[0];
	        if (backdrop) {
	          backdrop.parentNode.removeChild(backdrop);
	        }

	        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

	        for (var i = 0; i < toggles.length; i++) {
	          var _parent = Dropdown._getParentFromElement(toggles[i]);
	          var relatedTarget = { relatedTarget: toggles[i] };

	          if (!$(_parent).hasClass(ClassName.OPEN)) {
	            continue;
	          }

	          if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
	            continue;
	          }

	          var hideEvent = $.Event(Event.HIDE, relatedTarget);
	          $(_parent).trigger(hideEvent);
	          if (hideEvent.isDefaultPrevented()) {
	            continue;
	          }

	          toggles[i].setAttribute('aria-expanded', 'false');

	          $(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));
	        }
	      }
	    }, {
	      key: '_getParentFromElement',
	      value: function _getParentFromElement(element) {
	        var parent = undefined;
	        var selector = Util.getSelectorFromElement(element);

	        if (selector) {
	          parent = $(selector)[0];
	        }

	        return parent || element.parentNode;
	      }
	    }, {
	      key: '_dataApiKeydownHandler',
	      value: function _dataApiKeydownHandler(event) {
	        if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
	          return;
	        }

	        event.preventDefault();
	        event.stopPropagation();

	        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	          return;
	        }

	        var parent = Dropdown._getParentFromElement(this);
	        var isActive = $(parent).hasClass(ClassName.OPEN);

	        if (!isActive && event.which !== ESCAPE_KEYCODE || isActive && event.which === ESCAPE_KEYCODE) {

	          if (event.which === ESCAPE_KEYCODE) {
	            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
	            $(toggle).trigger('focus');
	          }

	          $(this).trigger('click');
	          return;
	        }

	        var items = $.makeArray($(Selector.VISIBLE_ITEMS));

	        items = items.filter(function (item) {
	          return item.offsetWidth || item.offsetHeight;
	        });

	        if (!items.length) {
	          return;
	        }

	        var index = items.indexOf(event.target);

	        if (event.which === ARROW_UP_KEYCODE && index > 0) {
	          // up
	          index--;
	        }

	        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
	          // down
	          index++;
	        }

	        if (index < 0) {
	          index = 0;
	        }

	        items[index].focus();
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }]);

	    return Dropdown;
	  })();

	  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
	    e.stopPropagation();
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Dropdown._jQueryInterface;
	  $.fn[NAME].Constructor = Dropdown;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Dropdown._jQueryInterface;
	  };

	  return Dropdown;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Modal = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'modal';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.modal';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 300;
	  var BACKDROP_TRANSITION_DURATION = 150;
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var Default = {
	    backdrop: true,
	    keyboard: true,
	    focus: true,
	    show: true
	  };

	  var DefaultType = {
	    backdrop: '(boolean|string)',
	    keyboard: 'boolean',
	    focus: 'boolean',
	    show: 'boolean'
	  };

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    FOCUSIN: 'focusin' + EVENT_KEY,
	    RESIZE: 'resize' + EVENT_KEY,
	    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
	    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
	    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
	    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	    BACKDROP: 'modal-backdrop',
	    OPEN: 'modal-open',
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    DIALOG: '.modal-dialog',
	    DATA_TOGGLE: '[data-toggle="modal"]',
	    DATA_DISMISS: '[data-dismiss="modal"]',
	    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Modal = (function () {
	    function Modal(element, config) {
	      _classCallCheck(this, Modal);

	      this._config = this._getConfig(config);
	      this._element = element;
	      this._dialog = $(element).find(Selector.DIALOG)[0];
	      this._backdrop = null;
	      this._isShown = false;
	      this._isBodyOverflowing = false;
	      this._ignoreBackdropClick = false;
	      this._originalBodyPadding = 0;
	      this._scrollbarWidth = 0;
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Modal, [{
	      key: 'toggle',

	      // public

	      value: function toggle(relatedTarget) {
	        return this._isShown ? this.hide() : this.show(relatedTarget);
	      }
	    }, {
	      key: 'show',
	      value: function show(relatedTarget) {
	        var _this7 = this;

	        var showEvent = $.Event(Event.SHOW, {
	          relatedTarget: relatedTarget
	        });

	        $(this._element).trigger(showEvent);

	        if (this._isShown || showEvent.isDefaultPrevented()) {
	          return;
	        }

	        this._isShown = true;

	        this._checkScrollbar();
	        this._setScrollbar();

	        $(document.body).addClass(ClassName.OPEN);

	        this._setEscapeEvent();
	        this._setResizeEvent();

	        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

	        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
	          $(_this7._element).one(Event.MOUSEUP_DISMISS, function (event) {
	            if ($(event.target).is(_this7._element)) {
	              _this7._ignoreBackdropClick = true;
	            }
	          });
	        });

	        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
	      }
	    }, {
	      key: 'hide',
	      value: function hide(event) {
	        if (event) {
	          event.preventDefault();
	        }

	        var hideEvent = $.Event(Event.HIDE);

	        $(this._element).trigger(hideEvent);

	        if (!this._isShown || hideEvent.isDefaultPrevented()) {
	          return;
	        }

	        this._isShown = false;

	        this._setEscapeEvent();
	        this._setResizeEvent();

	        $(document).off(Event.FOCUSIN);

	        $(this._element).removeClass(ClassName.IN);

	        $(this._element).off(Event.CLICK_DISMISS);
	        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

	        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

	          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          this._hideModal();
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);

	        $(window).off(EVENT_KEY);
	        $(document).off(EVENT_KEY);
	        $(this._element).off(EVENT_KEY);
	        $(this._backdrop).off(EVENT_KEY);

	        this._config = null;
	        this._element = null;
	        this._dialog = null;
	        this._backdrop = null;
	        this._isShown = null;
	        this._isBodyOverflowing = null;
	        this._ignoreBackdropClick = null;
	        this._originalBodyPadding = null;
	        this._scrollbarWidth = null;
	      }

	      // private

	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, Default, config);
	        Util.typeCheckConfig(NAME, config, DefaultType);
	        return config;
	      }
	    }, {
	      key: '_showElement',
	      value: function _showElement(relatedTarget) {
	        var _this8 = this;

	        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

	        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	          // don't move modals dom position
	          document.body.appendChild(this._element);
	        }

	        this._element.style.display = 'block';
	        this._element.removeAttribute('aria-hidden');
	        this._element.scrollTop = 0;

	        if (transition) {
	          Util.reflow(this._element);
	        }

	        $(this._element).addClass(ClassName.IN);

	        if (this._config.focus) {
	          this._enforceFocus();
	        }

	        var shownEvent = $.Event(Event.SHOWN, {
	          relatedTarget: relatedTarget
	        });

	        var transitionComplete = function transitionComplete() {
	          if (_this8._config.focus) {
	            _this8._element.focus();
	          }
	          $(_this8._element).trigger(shownEvent);
	        };

	        if (transition) {
	          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          transitionComplete();
	        }
	      }
	    }, {
	      key: '_enforceFocus',
	      value: function _enforceFocus() {
	        var _this9 = this;

	        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
	        .on(Event.FOCUSIN, function (event) {
	          if (document !== event.target && _this9._element !== event.target && !$(_this9._element).has(event.target).length) {
	            _this9._element.focus();
	          }
	        });
	      }
	    }, {
	      key: '_setEscapeEvent',
	      value: function _setEscapeEvent() {
	        var _this10 = this;

	        if (this._isShown && this._config.keyboard) {
	          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
	            if (event.which === ESCAPE_KEYCODE) {
	              _this10.hide();
	            }
	          });
	        } else if (!this._isShown) {
	          $(this._element).off(Event.KEYDOWN_DISMISS);
	        }
	      }
	    }, {
	      key: '_setResizeEvent',
	      value: function _setResizeEvent() {
	        if (this._isShown) {
	          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
	        } else {
	          $(window).off(Event.RESIZE);
	        }
	      }
	    }, {
	      key: '_hideModal',
	      value: function _hideModal() {
	        var _this11 = this;

	        this._element.style.display = 'none';
	        this._element.setAttribute('aria-hidden', 'true');
	        this._showBackdrop(function () {
	          $(document.body).removeClass(ClassName.OPEN);
	          _this11._resetAdjustments();
	          _this11._resetScrollbar();
	          $(_this11._element).trigger(Event.HIDDEN);
	        });
	      }
	    }, {
	      key: '_removeBackdrop',
	      value: function _removeBackdrop() {
	        if (this._backdrop) {
	          $(this._backdrop).remove();
	          this._backdrop = null;
	        }
	      }
	    }, {
	      key: '_showBackdrop',
	      value: function _showBackdrop(callback) {
	        var _this12 = this;

	        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

	        if (this._isShown && this._config.backdrop) {
	          var doAnimate = Util.supportsTransitionEnd() && animate;

	          this._backdrop = document.createElement('div');
	          this._backdrop.className = ClassName.BACKDROP;

	          if (animate) {
	            $(this._backdrop).addClass(animate);
	          }

	          $(this._backdrop).appendTo(document.body);

	          $(this._element).on(Event.CLICK_DISMISS, function (event) {
	            if (_this12._ignoreBackdropClick) {
	              _this12._ignoreBackdropClick = false;
	              return;
	            }
	            if (event.target !== event.currentTarget) {
	              return;
	            }
	            if (_this12._config.backdrop === 'static') {
	              _this12._element.focus();
	            } else {
	              _this12.hide();
	            }
	          });

	          if (doAnimate) {
	            Util.reflow(this._backdrop);
	          }

	          $(this._backdrop).addClass(ClassName.IN);

	          if (!callback) {
	            return;
	          }

	          if (!doAnimate) {
	            callback();
	            return;
	          }

	          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	        } else if (!this._isShown && this._backdrop) {
	          $(this._backdrop).removeClass(ClassName.IN);

	          var callbackRemove = function callbackRemove() {
	            _this12._removeBackdrop();
	            if (callback) {
	              callback();
	            }
	          };

	          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
	            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
	          } else {
	            callbackRemove();
	          }
	        } else if (callback) {
	          callback();
	        }
	      }

	      // ----------------------------------------------------------------------
	      // the following methods are used to handle overflowing modals
	      // todo (fat): these should probably be refactored out of modal.js
	      // ----------------------------------------------------------------------

	    }, {
	      key: '_handleUpdate',
	      value: function _handleUpdate() {
	        this._adjustDialog();
	      }
	    }, {
	      key: '_adjustDialog',
	      value: function _adjustDialog() {
	        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	        if (!this._isBodyOverflowing && isModalOverflowing) {
	          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
	        }

	        if (this._isBodyOverflowing && !isModalOverflowing) {
	          this._element.style.paddingRight = this._scrollbarWidth + 'px';
	        }
	      }
	    }, {
	      key: '_resetAdjustments',
	      value: function _resetAdjustments() {
	        this._element.style.paddingLeft = '';
	        this._element.style.paddingRight = '';
	      }
	    }, {
	      key: '_checkScrollbar',
	      value: function _checkScrollbar() {
	        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
	        this._scrollbarWidth = this._getScrollbarWidth();
	      }
	    }, {
	      key: '_setScrollbar',
	      value: function _setScrollbar() {
	        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

	        this._originalBodyPadding = document.body.style.paddingRight || '';

	        if (this._isBodyOverflowing) {
	          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
	        }
	      }
	    }, {
	      key: '_resetScrollbar',
	      value: function _resetScrollbar() {
	        document.body.style.paddingRight = this._originalBodyPadding;
	      }
	    }, {
	      key: '_getScrollbarWidth',
	      value: function _getScrollbarWidth() {
	        // thx d.walsh
	        var scrollDiv = document.createElement('div');
	        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
	        document.body.appendChild(scrollDiv);
	        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        document.body.removeChild(scrollDiv);
	        return scrollbarWidth;
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config, relatedTarget) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

	          if (!data) {
	            data = new Modal(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config](relatedTarget);
	          } else if (_config.show) {
	            data.show(relatedTarget);
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return Modal;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    var _this13 = this;

	    var target = undefined;
	    var selector = Util.getSelectorFromElement(this);

	    if (selector) {
	      target = $(selector)[0];
	    }

	    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

	    if (this.tagName === 'A') {
	      event.preventDefault();
	    }

	    var $target = $(target).one(Event.SHOW, function (showEvent) {
	      if (showEvent.isDefaultPrevented()) {
	        // only register focus restorer if modal will actually get shown
	        return;
	      }

	      $target.one(Event.HIDDEN, function () {
	        if ($(_this13).is(':visible')) {
	          _this13.focus();
	        }
	      });
	    });

	    Modal._jQueryInterface.call($(target), config, this);
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Modal._jQueryInterface;
	  $.fn[NAME].Constructor = Modal;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Modal._jQueryInterface;
	  };

	  return Modal;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): scrollspy.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var ScrollSpy = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'scrollspy';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.scrollspy';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];

	  var Default = {
	    offset: 10,
	    method: 'auto',
	    target: ''
	  };

	  var DefaultType = {
	    offset: 'number',
	    method: 'string',
	    target: '(string|element)'
	  };

	  var Event = {
	    ACTIVATE: 'activate' + EVENT_KEY,
	    SCROLL: 'scroll' + EVENT_KEY,
	    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    DROPDOWN_ITEM: 'dropdown-item',
	    DROPDOWN_MENU: 'dropdown-menu',
	    NAV_LINK: 'nav-link',
	    NAV: 'nav',
	    ACTIVE: 'active'
	  };

	  var Selector = {
	    DATA_SPY: '[data-spy="scroll"]',
	    ACTIVE: '.active',
	    LIST_ITEM: '.list-item',
	    LI: 'li',
	    LI_DROPDOWN: 'li.dropdown',
	    NAV_LINKS: '.nav-link',
	    DROPDOWN: '.dropdown',
	    DROPDOWN_ITEMS: '.dropdown-item',
	    DROPDOWN_TOGGLE: '.dropdown-toggle'
	  };

	  var OffsetMethod = {
	    OFFSET: 'offset',
	    POSITION: 'position'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var ScrollSpy = (function () {
	    function ScrollSpy(element, config) {
	      _classCallCheck(this, ScrollSpy);

	      this._element = element;
	      this._scrollElement = element.tagName === 'BODY' ? window : element;
	      this._config = this._getConfig(config);
	      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
	      this._offsets = [];
	      this._targets = [];
	      this._activeTarget = null;
	      this._scrollHeight = 0;

	      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this));

	      this.refresh();
	      this._process();
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(ScrollSpy, [{
	      key: 'refresh',

	      // public

	      value: function refresh() {
	        var _this14 = this;

	        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

	        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

	        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

	        this._offsets = [];
	        this._targets = [];

	        this._scrollHeight = this._getScrollHeight();

	        var targets = $.makeArray($(this._selector));

	        targets.map(function (element) {
	          var target = undefined;
	          var targetSelector = Util.getSelectorFromElement(element);

	          if (targetSelector) {
	            target = $(targetSelector)[0];
	          }

	          if (target && (target.offsetWidth || target.offsetHeight)) {
	            // todo (fat): remove sketch reliance on jQuery position/offset
	            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
	          }
	          return null;
	        }).filter(function (item) {
	          return item;
	        }).sort(function (a, b) {
	          return a[0] - b[0];
	        }).forEach(function (item) {
	          _this14._offsets.push(item[0]);
	          _this14._targets.push(item[1]);
	        });
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeData(this._element, DATA_KEY);
	        $(this._scrollElement).off(EVENT_KEY);

	        this._element = null;
	        this._scrollElement = null;
	        this._config = null;
	        this._selector = null;
	        this._offsets = null;
	        this._targets = null;
	        this._activeTarget = null;
	        this._scrollHeight = null;
	      }

	      // private

	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, Default, config);

	        if (typeof config.target !== 'string') {
	          var id = $(config.target).attr('id');
	          if (!id) {
	            id = Util.getUID(NAME);
	            $(config.target).attr('id', id);
	          }
	          config.target = '#' + id;
	        }

	        Util.typeCheckConfig(NAME, config, DefaultType);

	        return config;
	      }
	    }, {
	      key: '_getScrollTop',
	      value: function _getScrollTop() {
	        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
	      }
	    }, {
	      key: '_getScrollHeight',
	      value: function _getScrollHeight() {
	        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	      }
	    }, {
	      key: '_process',
	      value: function _process() {
	        var scrollTop = this._getScrollTop() + this._config.offset;
	        var scrollHeight = this._getScrollHeight();
	        var maxScroll = this._config.offset + scrollHeight - this._scrollElement.offsetHeight;

	        if (this._scrollHeight !== scrollHeight) {
	          this.refresh();
	        }

	        if (scrollTop >= maxScroll) {
	          var target = this._targets[this._targets.length - 1];

	          if (this._activeTarget !== target) {
	            this._activate(target);
	          }
	        }

	        if (this._activeTarget && scrollTop < this._offsets[0]) {
	          this._activeTarget = null;
	          this._clear();
	          return;
	        }

	        for (var i = this._offsets.length; i--;) {
	          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

	          if (isActiveTarget) {
	            this._activate(this._targets[i]);
	          }
	        }
	      }
	    }, {
	      key: '_activate',
	      value: function _activate(target) {
	        this._activeTarget = target;

	        this._clear();

	        var queries = this._selector.split(',');
	        queries = queries.map(function (selector) {
	          return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
	        });

	        var $link = $(queries.join(','));

	        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
	          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	          $link.addClass(ClassName.ACTIVE);
	        } else {
	          // todo (fat) this is kinda sus...
	          // recursively add actives to tested nav-links
	          $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
	        }

	        $(this._scrollElement).trigger(Event.ACTIVATE, {
	          relatedTarget: target
	        });
	      }
	    }, {
	      key: '_clear',
	      value: function _clear() {
	        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = typeof config === 'object' && config || null;

	          if (!data) {
	            data = new ScrollSpy(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return ScrollSpy;
	  })();

	  $(window).on(Event.LOAD_DATA_API, function () {
	    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

	    for (var i = scrollSpys.length; i--;) {
	      var $spy = $(scrollSpys[i]);
	      ScrollSpy._jQueryInterface.call($spy, $spy.data());
	    }
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = ScrollSpy._jQueryInterface;
	  $.fn[NAME].Constructor = ScrollSpy;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return ScrollSpy._jQueryInterface;
	  };

	  return ScrollSpy;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tab = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'tab';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.tab';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	  };

	  var ClassName = {
	    DROPDOWN_MENU: 'dropdown-menu',
	    ACTIVE: 'active',
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    A: 'a',
	    LI: 'li',
	    DROPDOWN: '.dropdown',
	    UL: 'ul:not(.dropdown-menu)',
	    FADE_CHILD: '> .nav-item .fade, > .fade',
	    ACTIVE: '.active',
	    ACTIVE_CHILD: '> .nav-item > .active, > .active',
	    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
	    DROPDOWN_TOGGLE: '.dropdown-toggle',
	    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Tab = (function () {
	    function Tab(element) {
	      _classCallCheck(this, Tab);

	      this._element = element;
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Data Api implementation
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Tab, [{
	      key: 'show',

	      // public

	      value: function show() {
	        var _this15 = this;

	        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)) {
	          return;
	        }

	        var target = undefined;
	        var previous = undefined;
	        var ulElement = $(this._element).closest(Selector.UL)[0];
	        var selector = Util.getSelectorFromElement(this._element);

	        if (ulElement) {
	          previous = $.makeArray($(ulElement).find(Selector.ACTIVE));
	          previous = previous[previous.length - 1];
	        }

	        var hideEvent = $.Event(Event.HIDE, {
	          relatedTarget: this._element
	        });

	        var showEvent = $.Event(Event.SHOW, {
	          relatedTarget: previous
	        });

	        if (previous) {
	          $(previous).trigger(hideEvent);
	        }

	        $(this._element).trigger(showEvent);

	        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	          return;
	        }

	        if (selector) {
	          target = $(selector)[0];
	        }

	        this._activate(this._element, ulElement);

	        var complete = function complete() {
	          var hiddenEvent = $.Event(Event.HIDDEN, {
	            relatedTarget: _this15._element
	          });

	          var shownEvent = $.Event(Event.SHOWN, {
	            relatedTarget: previous
	          });

	          $(previous).trigger(hiddenEvent);
	          $(_this15._element).trigger(shownEvent);
	        };

	        if (target) {
	          this._activate(target, target.parentNode, complete);
	        } else {
	          complete();
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        $.removeClass(this._element, DATA_KEY);
	        this._element = null;
	      }

	      // private

	    }, {
	      key: '_activate',
	      value: function _activate(element, container, callback) {
	        var active = $(container).find(Selector.ACTIVE_CHILD)[0];
	        var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

	        var complete = $.proxy(this._transitionComplete, this, element, active, isTransitioning, callback);

	        if (active && isTransitioning) {
	          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          complete();
	        }

	        if (active) {
	          $(active).removeClass(ClassName.IN);
	        }
	      }
	    }, {
	      key: '_transitionComplete',
	      value: function _transitionComplete(element, active, isTransitioning, callback) {
	        if (active) {
	          $(active).removeClass(ClassName.ACTIVE);

	          var dropdownChild = $(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

	          if (dropdownChild) {
	            $(dropdownChild).removeClass(ClassName.ACTIVE);
	          }

	          active.setAttribute('aria-expanded', false);
	        }

	        $(element).addClass(ClassName.ACTIVE);
	        element.setAttribute('aria-expanded', true);

	        if (isTransitioning) {
	          Util.reflow(element);
	          $(element).addClass(ClassName.IN);
	        } else {
	          $(element).removeClass(ClassName.FADE);
	        }

	        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

	          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
	          if (dropdownElement) {
	            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	          }

	          element.setAttribute('aria-expanded', true);
	        }

	        if (callback) {
	          callback();
	        }
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var $this = $(this);
	          var data = $this.data(DATA_KEY);

	          if (!data) {
	            data = data = new Tab(this);
	            $this.data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }]);

	    return Tab;
	  })();

	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();
	    Tab._jQueryInterface.call($(this), 'show');
	  });

	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $.fn[NAME] = Tab._jQueryInterface;
	  $.fn[NAME].Constructor = Tab;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tab._jQueryInterface;
	  };

	  return Tab;
	})(jQuery);

	/* global Tether */

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Tooltip = (function ($) {

	  /**
	   * Check for Tether dependency
	   * Tether - http://github.hubspot.com/tether/
	   */
	  if (window.Tether === undefined) {
	    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');
	  }

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'tooltip';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.tooltip';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var CLASS_PREFIX = 'bs-tether';

	  var Default = {
	    animation: true,
	    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    selector: false,
	    placement: 'top',
	    offset: '0 0',
	    constraints: []
	  };

	  var DefaultType = {
	    animation: 'boolean',
	    template: 'string',
	    title: '(string|element|function)',
	    trigger: 'string',
	    delay: '(number|object)',
	    html: 'boolean',
	    selector: '(string|boolean)',
	    placement: '(string|function)',
	    offset: 'string',
	    constraints: 'array'
	  };

	  var AttachmentMap = {
	    TOP: 'bottom center',
	    RIGHT: 'middle left',
	    BOTTOM: 'top center',
	    LEFT: 'middle right'
	  };

	  var HoverState = {
	    IN: 'in',
	    OUT: 'out'
	  };

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    INSERTED: 'inserted' + EVENT_KEY,
	    CLICK: 'click' + EVENT_KEY,
	    FOCUSIN: 'focusin' + EVENT_KEY,
	    FOCUSOUT: 'focusout' + EVENT_KEY,
	    MOUSEENTER: 'mouseenter' + EVENT_KEY,
	    MOUSELEAVE: 'mouseleave' + EVENT_KEY
	  };

	  var ClassName = {
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    TOOLTIP: '.tooltip',
	    TOOLTIP_INNER: '.tooltip-inner'
	  };

	  var TetherClass = {
	    element: false,
	    enabled: false
	  };

	  var Trigger = {
	    HOVER: 'hover',
	    FOCUS: 'focus',
	    CLICK: 'click',
	    MANUAL: 'manual'
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Tooltip = (function () {
	    function Tooltip(element, config) {
	      _classCallCheck(this, Tooltip);

	      // private
	      this._isEnabled = true;
	      this._timeout = 0;
	      this._hoverState = '';
	      this._activeTrigger = {};
	      this._tether = null;

	      // protected
	      this.element = element;
	      this.config = this._getConfig(config);
	      this.tip = null;

	      this._setListeners();
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    // getters

	    _createClass(Tooltip, [{
	      key: 'enable',

	      // public

	      value: function enable() {
	        this._isEnabled = true;
	      }
	    }, {
	      key: 'disable',
	      value: function disable() {
	        this._isEnabled = false;
	      }
	    }, {
	      key: 'toggleEnabled',
	      value: function toggleEnabled() {
	        this._isEnabled = !this._isEnabled;
	      }
	    }, {
	      key: 'toggle',
	      value: function toggle(event) {
	        if (event) {
	          var dataKey = this.constructor.DATA_KEY;
	          var context = $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          context._activeTrigger.click = !context._activeTrigger.click;

	          if (context._isWithActiveTrigger()) {
	            context._enter(null, context);
	          } else {
	            context._leave(null, context);
	          }
	        } else {

	          if ($(this.getTipElement()).hasClass(ClassName.IN)) {
	            this._leave(null, this);
	            return;
	          }

	          this._enter(null, this);
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        clearTimeout(this._timeout);

	        this.cleanupTether();

	        $.removeData(this.element, this.constructor.DATA_KEY);

	        $(this.element).off(this.constructor.EVENT_KEY);

	        if (this.tip) {
	          $(this.tip).remove();
	        }

	        this._isEnabled = null;
	        this._timeout = null;
	        this._hoverState = null;
	        this._activeTrigger = null;
	        this._tether = null;

	        this.element = null;
	        this.config = null;
	        this.tip = null;
	      }
	    }, {
	      key: 'show',
	      value: function show() {
	        var _this16 = this;

	        var showEvent = $.Event(this.constructor.Event.SHOW);

	        if (this.isWithContent() && this._isEnabled) {
	          $(this.element).trigger(showEvent);

	          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

	          if (showEvent.isDefaultPrevented() || !isInTheDom) {
	            return;
	          }

	          var tip = this.getTipElement();
	          var tipId = Util.getUID(this.constructor.NAME);

	          tip.setAttribute('id', tipId);
	          this.element.setAttribute('aria-describedby', tipId);

	          this.setContent();

	          if (this.config.animation) {
	            $(tip).addClass(ClassName.FADE);
	          }

	          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	          var attachment = this._getAttachment(placement);

	          $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

	          $(this.element).trigger(this.constructor.Event.INSERTED);

	          this._tether = new Tether({
	            attachment: attachment,
	            element: tip,
	            target: this.element,
	            classes: TetherClass,
	            classPrefix: CLASS_PREFIX,
	            offset: this.config.offset,
	            constraints: this.config.constraints,
	            addTargetClasses: false
	          });

	          Util.reflow(tip);
	          this._tether.position();

	          $(tip).addClass(ClassName.IN);

	          var complete = function complete() {
	            var prevHoverState = _this16._hoverState;
	            _this16._hoverState = null;

	            $(_this16.element).trigger(_this16.constructor.Event.SHOWN);

	            if (prevHoverState === HoverState.OUT) {
	              _this16._leave(null, _this16);
	            }
	          };

	          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
	            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
	            return;
	          }

	          complete();
	        }
	      }
	    }, {
	      key: 'hide',
	      value: function hide(callback) {
	        var _this17 = this;

	        var tip = this.getTipElement();
	        var hideEvent = $.Event(this.constructor.Event.HIDE);
	        var complete = function complete() {
	          if (_this17._hoverState !== HoverState.IN && tip.parentNode) {
	            tip.parentNode.removeChild(tip);
	          }

	          _this17.element.removeAttribute('aria-describedby');
	          $(_this17.element).trigger(_this17.constructor.Event.HIDDEN);
	          _this17.cleanupTether();

	          if (callback) {
	            callback();
	          }
	        };

	        $(this.element).trigger(hideEvent);

	        if (hideEvent.isDefaultPrevented()) {
	          return;
	        }

	        $(tip).removeClass(ClassName.IN);

	        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

	          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	        } else {
	          complete();
	        }

	        this._hoverState = '';
	      }

	      // protected

	    }, {
	      key: 'isWithContent',
	      value: function isWithContent() {
	        return Boolean(this.getTitle());
	      }
	    }, {
	      key: 'getTipElement',
	      value: function getTipElement() {
	        return this.tip = this.tip || $(this.config.template)[0];
	      }
	    }, {
	      key: 'setContent',
	      value: function setContent() {
	        var $tip = $(this.getTipElement());

	        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

	        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	        this.cleanupTether();
	      }
	    }, {
	      key: 'setElementContent',
	      value: function setElementContent($element, content) {
	        var html = this.config.html;
	        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	          // content is a DOM node or a jQuery
	          if (html) {
	            if (!$(content).parent().is($element)) {
	              $element.empty().append(content);
	            }
	          } else {
	            $element.text($(content).text());
	          }
	        } else {
	          $element[html ? 'html' : 'text'](content);
	        }
	      }
	    }, {
	      key: 'getTitle',
	      value: function getTitle() {
	        var title = this.element.getAttribute('data-original-title');

	        if (!title) {
	          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	        }

	        return title;
	      }
	    }, {
	      key: 'cleanupTether',
	      value: function cleanupTether() {
	        if (this._tether) {
	          this._tether.destroy();
	        }
	      }

	      // private

	    }, {
	      key: '_getAttachment',
	      value: function _getAttachment(placement) {
	        return AttachmentMap[placement.toUpperCase()];
	      }
	    }, {
	      key: '_setListeners',
	      value: function _setListeners() {
	        var _this18 = this;

	        var triggers = this.config.trigger.split(' ');

	        triggers.forEach(function (trigger) {
	          if (trigger === 'click') {
	            $(_this18.element).on(_this18.constructor.Event.CLICK, _this18.config.selector, $.proxy(_this18.toggle, _this18));
	          } else if (trigger !== Trigger.MANUAL) {
	            var eventIn = trigger === Trigger.HOVER ? _this18.constructor.Event.MOUSEENTER : _this18.constructor.Event.FOCUSIN;
	            var eventOut = trigger === Trigger.HOVER ? _this18.constructor.Event.MOUSELEAVE : _this18.constructor.Event.FOCUSOUT;

	            $(_this18.element).on(eventIn, _this18.config.selector, $.proxy(_this18._enter, _this18)).on(eventOut, _this18.config.selector, $.proxy(_this18._leave, _this18));
	          }
	        });

	        if (this.config.selector) {
	          this.config = $.extend({}, this.config, {
	            trigger: 'manual',
	            selector: ''
	          });
	        } else {
	          this._fixTitle();
	        }
	      }
	    }, {
	      key: '_fixTitle',
	      value: function _fixTitle() {
	        var titleType = typeof this.element.getAttribute('data-original-title');
	        if (this.element.getAttribute('title') || titleType !== 'string') {
	          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	          this.element.setAttribute('title', '');
	        }
	      }
	    }, {
	      key: '_enter',
	      value: function _enter(event, context) {
	        var dataKey = this.constructor.DATA_KEY;

	        context = context || $(event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $(event.currentTarget).data(dataKey, context);
	        }

	        if (event) {
	          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
	        }

	        if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
	          context._hoverState = HoverState.IN;
	          return;
	        }

	        clearTimeout(context._timeout);

	        context._hoverState = HoverState.IN;

	        if (!context.config.delay || !context.config.delay.show) {
	          context.show();
	          return;
	        }

	        context._timeout = setTimeout(function () {
	          if (context._hoverState === HoverState.IN) {
	            context.show();
	          }
	        }, context.config.delay.show);
	      }
	    }, {
	      key: '_leave',
	      value: function _leave(event, context) {
	        var dataKey = this.constructor.DATA_KEY;

	        context = context || $(event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $(event.currentTarget).data(dataKey, context);
	        }

	        if (event) {
	          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
	        }

	        if (context._isWithActiveTrigger()) {
	          return;
	        }

	        clearTimeout(context._timeout);

	        context._hoverState = HoverState.OUT;

	        if (!context.config.delay || !context.config.delay.hide) {
	          context.hide();
	          return;
	        }

	        context._timeout = setTimeout(function () {
	          if (context._hoverState === HoverState.OUT) {
	            context.hide();
	          }
	        }, context.config.delay.hide);
	      }
	    }, {
	      key: '_isWithActiveTrigger',
	      value: function _isWithActiveTrigger() {
	        for (var trigger in this._activeTrigger) {
	          if (this._activeTrigger[trigger]) {
	            return true;
	          }
	        }

	        return false;
	      }
	    }, {
	      key: '_getConfig',
	      value: function _getConfig(config) {
	        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

	        if (config.delay && typeof config.delay === 'number') {
	          config.delay = {
	            show: config.delay,
	            hide: config.delay
	          };
	        }

	        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

	        return config;
	      }
	    }, {
	      key: '_getDelegateConfig',
	      value: function _getDelegateConfig() {
	        var config = {};

	        if (this.config) {
	          for (var key in this.config) {
	            if (this.constructor.Default[key] !== this.config[key]) {
	              config[key] = this.config[key];
	            }
	          }
	        }

	        return config;
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = typeof config === 'object' ? config : null;

	          if (!data && /destroy|hide/.test(config)) {
	            return;
	          }

	          if (!data) {
	            data = new Tooltip(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',
	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: 'NAME',
	      get: function get() {
	        return NAME;
	      }
	    }, {
	      key: 'DATA_KEY',
	      get: function get() {
	        return DATA_KEY;
	      }
	    }, {
	      key: 'Event',
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: 'EVENT_KEY',
	      get: function get() {
	        return EVENT_KEY;
	      }
	    }, {
	      key: 'DefaultType',
	      get: function get() {
	        return DefaultType;
	      }
	    }]);

	    return Tooltip;
	  })();

	  $.fn[NAME] = Tooltip._jQueryInterface;
	  $.fn[NAME].Constructor = Tooltip;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tooltip._jQueryInterface;
	  };

	  return Tooltip;
	})(jQuery);

	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0-alpha.4): popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	var Popover = (function ($) {

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'popover';
	  var VERSION = '4.0.0-alpha.4';
	  var DATA_KEY = 'bs.popover';
	  var EVENT_KEY = '.' + DATA_KEY;
	  var JQUERY_NO_CONFLICT = $.fn[NAME];

	  var Default = $.extend({}, Tooltip.Default, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
	  });

	  var DefaultType = $.extend({}, Tooltip.DefaultType, {
	    content: '(string|element|function)'
	  });

	  var ClassName = {
	    FADE: 'fade',
	    IN: 'in'
	  };

	  var Selector = {
	    TITLE: '.popover-title',
	    CONTENT: '.popover-content',
	    ARROW: '.popover-arrow'
	  };

	  var Event = {
	    HIDE: 'hide' + EVENT_KEY,
	    HIDDEN: 'hidden' + EVENT_KEY,
	    SHOW: 'show' + EVENT_KEY,
	    SHOWN: 'shown' + EVENT_KEY,
	    INSERTED: 'inserted' + EVENT_KEY,
	    CLICK: 'click' + EVENT_KEY,
	    FOCUSIN: 'focusin' + EVENT_KEY,
	    FOCUSOUT: 'focusout' + EVENT_KEY,
	    MOUSEENTER: 'mouseenter' + EVENT_KEY,
	    MOUSELEAVE: 'mouseleave' + EVENT_KEY
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Popover = (function (_Tooltip) {
	    _inherits(Popover, _Tooltip);

	    function Popover() {
	      _classCallCheck(this, Popover);

	      _get(Object.getPrototypeOf(Popover.prototype), 'constructor', this).apply(this, arguments);
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    _createClass(Popover, [{
	      key: 'isWithContent',

	      // overrides

	      value: function isWithContent() {
	        return this.getTitle() || this._getContent();
	      }
	    }, {
	      key: 'getTipElement',
	      value: function getTipElement() {
	        return this.tip = this.tip || $(this.config.template)[0];
	      }
	    }, {
	      key: 'setContent',
	      value: function setContent() {
	        var $tip = $(this.getTipElement());

	        // we use append for html objects to maintain js events
	        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
	        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

	        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	        this.cleanupTether();
	      }

	      // private

	    }, {
	      key: '_getContent',
	      value: function _getContent() {
	        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
	      }

	      // static

	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          var data = $(this).data(DATA_KEY);
	          var _config = typeof config === 'object' ? config : null;

	          if (!data && /destroy|hide/.test(config)) {
	            return;
	          }

	          if (!data) {
	            data = new Popover(this, _config);
	            $(this).data(DATA_KEY, data);
	          }

	          if (typeof config === 'string') {
	            if (data[config] === undefined) {
	              throw new Error('No method named "' + config + '"');
	            }
	            data[config]();
	          }
	        });
	      }
	    }, {
	      key: 'VERSION',

	      // getters

	      get: function get() {
	        return VERSION;
	      }
	    }, {
	      key: 'Default',
	      get: function get() {
	        return Default;
	      }
	    }, {
	      key: 'NAME',
	      get: function get() {
	        return NAME;
	      }
	    }, {
	      key: 'DATA_KEY',
	      get: function get() {
	        return DATA_KEY;
	      }
	    }, {
	      key: 'Event',
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: 'EVENT_KEY',
	      get: function get() {
	        return EVENT_KEY;
	      }
	    }, {
	      key: 'DefaultType',
	      get: function get() {
	        return DefaultType;
	      }
	    }]);

	    return Popover;
	  })(Tooltip);

	  $.fn[NAME] = Popover._jQueryInterface;
	  $.fn[NAME].Constructor = Popover;
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Popover._jQueryInterface;
	  };

	  return Popover;
	})(jQuery);

	}(jQuery);


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<html>\n<head>\n    <meta charset=\"utf-8\">\n    <script type=\"text/javascript\" src=\"app/bundle.js\" charset=\"utf-8\"></script>\n</head>\n\n<body>\n    <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-default btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Large button <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        ...\n                    </ul>\n                </div>\n            </div>\n    </div>\n</body>\n</html>"

/***/ }
/******/ ]);