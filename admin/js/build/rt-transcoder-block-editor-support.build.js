!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";var n=r(8),o=r(9),i=r(4);e.exports={formats:i,parse:o,stringify:n}},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],c=Object.keys(a),u=0;u<c.length;++u){var s=c[u],l=a[s];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:s}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var c=n.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=n.charAt(a):c<128?o+=i[c]:c<2048?o+=i[192|c>>6]+i[128|63&c]:c<55296||c>=57344?o+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(a)),o+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var c=t;return o(t)&&!o(r)&&(c=a(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),c)}}},function(e,t,r){var n;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,t){var r,n,a,c,u,s,l,f,p,d=1,h=e.length,y="";for(n=0;n<h;n++)if("string"==typeof e[n])y+=e[n];else if("object"==typeof e[n]){if((c=e[n]).keys)for(r=t[d],a=0;a<c.keys.length;a++){if(null==r)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[a],c.keys[a-1]));r=r[c.keys[a]]}else r=c.param_no?t[c.param_no]:t[d++];if(o.not_type.test(c.type)&&o.not_primitive.test(c.type)&&r instanceof Function&&(r=r()),o.numeric_arg.test(c.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(i("[sprintf] expecting number but found %T",r));switch(o.number.test(c.type)&&(f=r>=0),c.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,c.width?parseInt(c.width):0);break;case"e":r=c.precision?parseFloat(r).toExponential(c.precision):parseFloat(r).toExponential();break;case"f":r=c.precision?parseFloat(r).toFixed(c.precision):parseFloat(r);break;case"g":r=c.precision?String(Number(r.toPrecision(c.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=c.precision?r.substring(0,c.precision):r;break;case"t":r=String(!!r),r=c.precision?r.substring(0,c.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=c.precision?r.substring(0,c.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=c.precision?r.substring(0,c.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}o.json.test(c.type)?y+=r:(!o.number.test(c.type)||f&&!c.sign?p="":(p=f?"+":"-",r=r.toString().replace(o.sign,"")),s=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",l=c.width-(p+r).length,u=c.width&&l>0?s.repeat(l):"",y+=c.align?p+r+u:"0"===s?p+u+r:u+p+r)}return y}(function(e){if(c[e])return c[e];for(var t,r=e,n=[],i=0;r;){if(null!==(t=o.text.exec(r)))n.push(t[0]);else if(null!==(t=o.modulo.exec(r)))n.push("%");else{if(null===(t=o.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var a=[],u=t[2],s=[];if(null===(s=o.key.exec(u)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(s[1]);""!==(u=u.substring(s[0].length));)if(null!==(s=o.key_access.exec(u)))a.push(s[1]);else{if(null===(s=o.index_access.exec(u)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(s[1])}t[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return c[e]=n}(e),arguments)}function a(e,t){return i.apply(null,[e].concat(t||[]))}var c=Object.create(null);t.sprintf=i,t.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(n=function(){return{sprintf:i,vsprintf:a}}.call(t,r,t,e))||(e.exports=n))}()},function(e,t,r){e.exports=r(7)},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r(1),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},function(e,t,r){e.exports=function(e,t){var r,n,o,i=0;function a(){var t,a,c=n,u=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(a=0;a<u;a++)if(c.args[a]!==arguments[a]){c=c.next;continue e}return c!==n&&(c===o&&(o=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=n,c.prev=null,n.prev=c,n=c),c.val}c=c.next}for(t=new Array(u),a=0;a<u;a++)t[a]=arguments[a];return c={args:t,val:e.apply(null,t)},n?(n.prev=c,c.next=n):o=c,i===r?(o=o.prev).next=null:i++,n=c,c.val}return t&&t.maxSize&&(r=t.maxSize),a.clear=function(){n=null,o=null,i=0},a}},function(e,t,r){e.exports=r(10)},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",h={};function y(){}function v(){}function m(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=m.prototype=y.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function j(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:L}}function L(){return{value:t,done:!0}}return v.prototype=x.constructor=m,m.constructor=v,m[c]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},O(j.prototype),j.prototype[a]=function(){return this},e.AsyncIterator=j,e.async=function(t,r,n,o){var i=new j(u(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";var n=r(1),o=r(4),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,u=Array.prototype.push,s=function(e,t){u.apply(e,c(t)?t:[t])},l=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,o,i,a,u,l,f,d,h,y,v,m){var g,b=t;if("function"==typeof l?b=l(r,b):b instanceof Date?b=h(b):"comma"===o&&c(b)&&(b=b.join(",")),null===b){if(i)return u&&!v?u(r,p.encoder,m):r;b=""}if("string"==typeof(g=b)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(b))return u?[y(v?r:u(r,p.encoder,m))+"="+y(u(b,p.encoder,m))]:[y(r)+"="+y(String(b))];var w,x=[];if(void 0===b)return x;if(c(l))w=l;else{var O=Object.keys(b);w=f?O.sort(f):O}for(var j=0;j<w.length;++j){var k=w[j];a&&null===b[k]||(c(b)?s(x,e(b[k],"function"==typeof o?o(r,k):r,o,i,a,u,l,f,d,h,y,v,m)):s(x,e(b[k],r+(d?"."+k:"["+k+"]"),o,i,a,u,l,f,d,h,y,v,m)))}return x};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=p.filter;return("function"==typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):c(u.filter)&&(r=u.filter);var l,f=[];if("object"!=typeof n||null===n)return"";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=a[l];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var y=0;y<r.length;++y){var v=r[y];u.skipNulls&&null===n[v]||s(f,d(n[v],v,h,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var m=f.join(u.delimiter),g=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),m.length>0?g+m:""}},function(e,t,r){"use strict";var n=r(1),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(n),c=a?n.slice(0,a.index):n,u=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var s=0;r.depth>0&&null!==(a=i.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(a[1])}return a&&u.push("["+n.slice(a.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&a!==c&&String(u)===c&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[c]=n:i={0:n}}n=i}return n}(u,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var r,c={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,l=u.split(t.delimiter,s),f=-1,p=t.charset;if(t.charsetSentinel)for(r=0;r<l.length;++r)0===l[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===l[r]?p="utf-8":"utf8=%26%2310003%3B"===l[r]&&(p="iso-8859-1"),f=r,r=l.length);for(r=0;r<l.length;++r)if(r!==f){var d,h,y=l[r],v=y.indexOf("]="),m=-1===v?y.indexOf("="):v+1;-1===m?(d=t.decoder(y,i.decoder,p),h=t.strictNullHandling?null:""):(d=t.decoder(y.slice(0,m),i.decoder,p),h=t.decoder(y.slice(m+1),i.decoder,p)),h&&t.interpretNumericEntities&&"iso-8859-1"===p&&(h=a(h)),h&&t.comma&&h.indexOf(",")>-1&&(h=h.split(",")),o.call(c,d)?c[d]=n.combine(c[d],h):c[d]=h}return c}(e,r):e,s=r.plainObjects?Object.create(null):{},l=Object.keys(u),f=0;f<l.length;++f){var p=l[f],d=c(p,u[p],r);s=n.merge(s,d,r)}return n.compact(s)}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a,c,u,s;r.r(t),a={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},c=["(","?"],u={")":["("],":":["?","?:"]},s=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var l={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,r){if(e)throw t;return r}};function f(e){var t=function(e){for(var t,r,n,o,i=[],l=[];t=e.match(s);){for(r=t[0],(n=e.substr(0,t.index).trim())&&i.push(n);o=l.pop();){if(u[r]){if(u[r][0]===o){r=u[r][1]||r;break}}else if(c.indexOf(o)>=0||a[o]<a[r]){l.push(o);break}i.push(o)}u[r]||l.push(r),e=e.substr(t.index+r.length)}return(e=e.trim())&&i.push(e),i.concat(l.reverse())}(e);return function(e){return function(e,t){var r,n,o,i,a,c,u=[];for(r=0;r<e.length;r++){if(a=e[r],i=l[a]){for(n=i.length,o=Array(n);n--;)o[n]=u.pop();try{c=i.apply(null,o)}catch(e){return e}}else c=t.hasOwnProperty(a)?t[a]:+a;u.push(c)}return u[0]}(t,e)}}var p={contextDelimiter:"",onMissingKey:null};function d(e,t){var r;for(r in this.data=e,this.pluralForms={},t=t||{},this.options={},p)this.options[r]=t[r]||p[r]}d.prototype.getPluralForm=function(e,t){var r,n,o,i,a=this.pluralForms[e];return a||("function"!=typeof(o=(r=this.data[e][""])["Plural-Forms"]||r["plural-forms"]||r.plural_forms)&&(n=function(e){var t,r,n;for(t=e.split(";"),r=0;r<t.length;r++)if(0===(n=t[r].trim()).indexOf("plural="))return n.substr(7)}(r["Plural-Forms"]||r["plural-forms"]||r.plural_forms),i=f(n),o=function(e){return+i({n:e})}),a=this.pluralForms[e]=o),a(t)},d.prototype.dcnpgettext=function(e,t,r,n,o){var i,a,c;return i=void 0===o?0:this.getPluralForm(e,o),a=r,t&&(a=t+this.options.contextDelimiter+r),(c=this.data[e][a])&&c[i]?c[i]:(this.options.onMissingKey&&this.options.onMissingKey(r,e),0===i?r:n)};var h=r(5),y=r.n(h),v=(r(2),{"":{plural_forms:function(e){return 1===e?0:1}}}),m=(y()(console.error),new d({}));function g(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return m.data[e]||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";m.data[t]=o({},v,m.data[t],e),m.data[t][""]=o({},v[""],m.data[t][""])}(void 0,e),m.dcnpgettext(e,t,r,n,i)}(t,void 0,e)}var b=function(e,t){var r,n,i=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),i=(n=e.endpoint.replace(/^\//,""))?r+"/"+n:r),delete e.namespace,delete e.endpoint,t(o({},e,{path:i}))},w=r(3),x=r.n(w);function O(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}var j=r(0);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var r=e,n=e.indexOf("?");return-1!==n&&(t=Object.assign(Object(j.parse)(e.substr(n+1)),t),r=r.substr(0,n)),r+"?"+Object(j.stringify)(t)}function _(e,t){return void 0!==function(e,t){var r=e.indexOf("?");return(-1!==r?Object(j.parse)(e.substr(r+1)):{})[t]}(e,t)}var S=function(e){return e.json?e.json():Promise.reject(e)},E=function(e){return function(e){if(!e)return{};var t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}}(e.headers.get("link")).next},P=function(e){var t=e.path&&-1!==e.path.indexOf("per_page=-1"),r=e.url&&-1!==e.url.indexOf("per_page=-1");return t||r},L=function(){var e,t=(e=x.a.mark((function e(t,r){var n,a,c,u,s,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.parse){e.next=2;break}return e.abrupt("return",r(t));case 2:if(P(t)){e.next=4;break}return e.abrupt("return",r(t));case 4:return e.next=6,r(o({},(p={per_page:100},d=(f=t).path,h=f.url,o({},i(f,["path","url"]),{url:h&&k(h,p),path:d&&k(d,p)})),{parse:!1}));case 6:return n=e.sent,e.next=9,S(n);case 9:if(a=e.sent,Array.isArray(a)){e.next=12;break}return e.abrupt("return",a);case 12:if(c=E(n)){e.next=15;break}return e.abrupt("return",a);case 15:u=[].concat(a);case 16:if(!c){e.next=27;break}return e.next=19,r(o({},t,{path:void 0,url:c,parse:!1}));case 19:return s=e.sent,e.next=22,S(s);case 22:l=e.sent,u=u.concat(l),c=E(s),e.next=16;break;case 27:return e.abrupt("return",u);case 28:case"end":return e.stop()}var f,p,d,h}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){O(i,n,o,a,c,"next",e)}function c(e){O(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),N=new Set(["PATCH","PUT","DELETE"]),T={Accept:"application/json, */*;q=0.1"},A={credentials:"include"},F=[function(e,t){return"string"!=typeof e.url||_(e.url,"_locale")||(e.url=k(e.url,{_locale:"user"})),"string"!=typeof e.path||_(e.path,"_locale")||(e.path=k(e.path,{_locale:"user"})),t(e,t)},b,function(e,t){var r=e.method,n=void 0===r?"GET":r;return N.has(n.toUpperCase())&&(e=o({},e,{headers:o({},e.headers,{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),t(e,t)},L],C=function(e){if(e.status>=200&&e.status<300)return e;throw e},D=function(e){var t=e.url,r=e.path,n=e.data,a=e.parse,c=void 0===a||a,u=i(e,["url","path","data","parse"]),s=e.body,l=e.headers;return l=o({},T,l),n&&(s=JSON.stringify(n),l["Content-Type"]="application/json"),window.fetch(t||r,o({},A,u,{body:s,headers:l})).then(C).then((function(e){return c?204===e.status?null:e.json?e.json():Promise.reject(e):e})).catch((function(e){if(!c)throw e;var t={code:"invalid_json",message:g("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((function(){throw t})).then((function(e){var t={code:"unknown_error",message:g("An unknown error occurred.")};throw e||t}))}))};function I(e){var t=[].concat(F,[D]);return new Promise((function(r,n){(function e(r){return function(n){var o=t[r];return r===t.length-1?o(n):o(n,e(r+1))}})(0)(e).then(r).catch((function(t){if("rest_cookie_invalid_nonce"!==t.code)return n(t);window.fetch(I.nonceEndpoint).then(C).then((function(e){return e.text()})).then((function(t){I.nonceMiddleware.nonce=t,I(e).then(r).catch(n)})).catch(n)}))}))}I.use=function(e){F.unshift(e)},I.setFetchHandler=function(e){D=e},I.createNonceMiddleware=function(e){function t(e,r){var n=e.headers,i=void 0===n?{}:n;for(var a in i)if("x-wp-nonce"===a.toLowerCase())return r(e);return r(o({},e,{headers:o({},i,{"X-WP-Nonce":t.nonce})}))}return t.nonce=e,t},I.createPreloadingMiddleware=function(e){return function(t,r){var n=t.parse,o=void 0===n||n;if("string"==typeof t.path){var i=t.method||"GET",a=function(e){var t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map((function(e){return e.split("=")})).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){return e.join("=")})).join("&"):n}(t.path);if(o&&"GET"===i&&e[a])return Promise.resolve(e[a].body);if("OPTIONS"===i&&e[i]&&e[i][a])return Promise.resolve(e[i][a])}return r(t)}},I.createRootURLMiddleware=function(e){return function(t,r){return b(t,(function(t){var n,i=t.url,a=t.path;return"string"==typeof a&&(n=e,-1!==e.indexOf("?")&&(a=a.replace("?","&")),a=a.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(a=a.replace("?","&")),i=n+a),r(o({},t,{url:i}))}))}},I.fetchAllMiddleware=L;var M=I,H=window.rtTranscoderBlockEditorSupport;wp.hooks.addFilter("editor.BlockEdit","rt-transcoder-amp/set-media-attributes",(function(e){return function(t){var r=t.attributes,n="amp/amp-story-page"===t.name,o="core/video"===t.name,i=n?r.mediaId:r.id;return void 0!==i&&(void 0===r.poster?n&&void 0!==r.mediaType&&"video"===r.mediaType&&!r.mediaUrl.endsWith("mp4")?t.setAttributes({poster:H.amp_story_fallback_poster}):o&&void 0!==r.src&&0!==r.src.indexOf("blob:")&&!r.src.endsWith("mp4")&&t.setAttributes({poster:H.amp_video_fallback_poster}):r.poster.endsWith("-fallback-poster.png")&&M({path:"/wp-json/transcoder/v1/amp-media / "+i}).then((function(e){!1!==e&&null!==e&&e.poster.length&&e.transcodedMedia.length&&(n&&void 0!==r.mediaType&&"video"===r.mediaType?t.setAttributes({poster:e.poster,mediaUrl:e.transcodedMedia}):o&&t.setAttributes({poster:e.poster,src:e.transcodedMedia}))}))),wp.element.createElement(e,t)}}))}]);