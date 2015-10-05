require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"angular-resource":[function(require,module,exports){
!function(r,e,t){"use strict";function n(r){return null!=r&&""!==r&&"hasOwnProperty"!==r&&s.test("."+r)}function a(r,e){if(!n(e))throw i("badmember",'Dotted member path "@{0}" is invalid.',e);for(var a=e.split("."),o=0,s=a.length;s>o&&r!==t;o++){var c=a[o];r=null!==r?r[c]:t}return r}function o(r,t){t=t||{},e.forEach(t,function(r,e){delete t[e]});for(var n in r)!r.hasOwnProperty(n)||"$"===n.charAt(0)&&"$"===n.charAt(1)||(t[n]=r[n]);return t}var i=e.$$minErr("$resource"),s=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;e.module("ngResource",["ng"]).provider("$resource",function(){var r=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$q",function(n,s){function c(r){return u(r,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function u(r,e){return encodeURIComponent(r).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function p(e,t){this.template=e,this.defaults=d({},r.defaults,t),this.urlParams={}}function l(c,u,$,v){function w(r,e){var t={};return e=d({},u,e),h(e,function(e,n){g(e)&&(e=e()),t[n]=e&&e.charAt&&"@"==e.charAt(0)?a(r,e.substr(1)):e}),t}function y(r){return r.resource}function E(r){o(r||{},this)}var A=new p(c,v);return $=d({},r.defaults.actions,$),E.prototype.toJSON=function(){var r=d({},this);return delete r.$promise,delete r.$resolved,r},h($,function(r,a){var c=/^(POST|PUT|PATCH)$/i.test(r.method);E[a]=function(u,p,l,$){var v,b,P,T={};switch(arguments.length){case 4:P=$,b=l;case 3:case 2:if(!g(p)){T=u,v=p,b=l;break}if(g(u)){b=u,P=p;break}b=p,P=l;case 1:g(u)?b=u:c?v=u:T=u;break;case 0:break;default:throw i("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var O=this instanceof E,x=O?v:r.isArray?[]:new E(v),R={},D=r.interceptor&&r.interceptor.response||y,S=r.interceptor&&r.interceptor.responseError||t;h(r,function(r,e){"params"!=e&&"isArray"!=e&&"interceptor"!=e&&(R[e]=m(r))}),c&&(R.data=v),A.setUrlParams(R,d({},w(v,r.params||{}),T),r.url);var j=n(R).then(function(t){var n=t.data,s=x.$promise;if(n){if(e.isArray(n)!==!!r.isArray)throw i("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}",a,r.isArray?"array":"object",e.isArray(n)?"array":"object");r.isArray?(x.length=0,h(n,function(r){"object"==typeof r?x.push(new E(r)):x.push(r)})):(o(n,x),x.$promise=s)}return x.$resolved=!0,t.resource=x,t},function(r){return x.$resolved=!0,(P||f)(r),s.reject(r)});return j=j.then(function(r){var e=D(r);return(b||f)(e,r.headers),e},S),O?j:(x.$promise=j,x.$resolved=!1,x)},E.prototype["$"+a]=function(r,e,t){g(r)&&(t=e,e=r,r={});var n=E[a].call(this,r,this,e,t);return n.$promise||n}}),E.bind=function(r){return l(c,d({},u,r),$)},E}var f=e.noop,h=e.forEach,d=e.extend,m=e.copy,g=e.isFunction;return p.prototype={setUrlParams:function(r,t,n){var a,o,s=this,u=n||s.template,p=s.urlParams={};h(u.split(/\W/),function(r){if("hasOwnProperty"===r)throw i("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(r)&&r&&new RegExp("(^|[^\\\\]):"+r+"(\\W|$)").test(u)&&(p[r]=!0)}),u=u.replace(/\\:/g,":"),t=t||{},h(s.urlParams,function(r,n){a=t.hasOwnProperty(n)?t[n]:s.defaults[n],e.isDefined(a)&&null!==a?(o=c(a),u=u.replace(new RegExp(":"+n+"(\\W|$)","g"),function(r,e){return o+e})):u=u.replace(new RegExp("(/?):"+n+"(\\W|$)","g"),function(r,e,t){return"/"==t.charAt(0)?t:e+t})}),s.defaults.stripTrailingSlashes&&(u=u.replace(/\/+$/,"")||"/"),u=u.replace(/\/\.(?=\w+($|\?))/,"."),r.url=u.replace(/\/\\\./,"/."),h(t,function(e,t){s.urlParams[t]||(r.params=r.params||{},r.params[t]=e)})}},l}]})}(window,window.angular);


},{}],"angular":[function(require,module,exports){
!function(t,e,n){"use strict";function r(t,e){return e=e||Error,function(){var n,r,i=arguments[0],o="["+(t?t+":":"")+i+"] ",a=arguments[1],s=arguments;for(n=o+a.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1);return e+2<s.length?ht(s[e+2]):t}),n=n+"\nhttp://errors.angularjs.org/1.3.20/"+(t?t+"/":"")+i,r=2;r<arguments.length;r++)n=n+(2==r?"?":"&")+"p"+(r-2)+"="+encodeURIComponent(ht(arguments[r]));return new e(n)}}function i(t){if(null==t||A(t))return!1;var e="length"in Object(t)&&t.length;return t.nodeType===wr&&e?!0:w(t)||$r(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,n){var r,a;if(t)if(S(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r,t);else if($r(t)||i(t)){var s="object"!=typeof t;for(r=0,a=t.length;a>r;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t);else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t);return t}function a(t){return Object.keys(t).sort()}function s(t,e,n){for(var r=a(t),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function u(t){return function(e,n){t(n,e)}}function c(){return++fr}function l(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function f(t){for(var e=t.$$hashKey,n=1,r=arguments.length;r>n;n++){var i=arguments[n];if(i)for(var o=Object.keys(i),a=0,s=o.length;s>a;a++){var u=o[a];t[u]=i[u]}}return l(t,e),t}function h(t){return parseInt(t,10)}function $(t,e){return f(Object.create(t),e)}function p(){}function d(t){return t}function v(t){return function(){return t}}function m(t){return"undefined"==typeof t}function g(t){return"undefined"!=typeof t}function y(t){return null!==t&&"object"==typeof t}function w(t){return"string"==typeof t}function b(t){return"number"==typeof t}function x(t){return"[object Date]"===ur.call(t)}function S(t){return"function"==typeof t}function C(t){return"[object RegExp]"===ur.call(t)}function A(t){return t&&t.window===t}function E(t){return t&&t.$evalAsync&&t.$watch}function k(t){return"[object File]"===ur.call(t)}function O(t){return"[object FormData]"===ur.call(t)}function T(t){return"[object Blob]"===ur.call(t)}function M(t){return"boolean"==typeof t}function N(t){return t&&S(t.then)}function V(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function D(t){var e,n={},r=t.split(",");for(e=0;e<r.length;e++)n[r[e]]=!0;return n}function j(t){return Zn(t.nodeName||t[0]&&t[0].nodeName)}function R(t,e){var n=t.indexOf(e);return n>=0&&t.splice(n,1),e}function P(t,e,n,r){if(A(t)||E(t))throw cr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(e){if(t===e)throw cr("cpi","Can't copy! Source and destination are identical.");if(n=n||[],r=r||[],y(t)){var i=n.indexOf(t);if(-1!==i)return r[i];n.push(t),r.push(e)}var a;if($r(t)){e.length=0;for(var s=0;s<t.length;s++)a=P(t[s],null,n,r),y(t[s])&&(n.push(t[s]),r.push(a)),e.push(a)}else{var u=e.$$hashKey;$r(e)?e.length=0:o(e,function(t,n){delete e[n]});for(var c in t)t.hasOwnProperty(c)&&(a=P(t[c],null,n,r),y(t[c])&&(n.push(t[c]),r.push(a)),e[c]=a);l(e,u)}}else if(e=t,t)if($r(t))e=P(t,[],n,r);else if(x(t))e=new Date(t.getTime());else if(C(t))e=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]),e.lastIndex=t.lastIndex;else if(y(t)){var f=Object.create(Object.getPrototypeOf(t));e=P(t,f,n,r)}return e}function _(t,e){if($r(t)){e=e||[];for(var n=0,r=t.length;r>n;n++)e[n]=t[n]}else if(y(t)){e=e||{};for(var i in t)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(e[i]=t[i])}return e||t}function I(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r,i,o,a=typeof t,s=typeof e;if(a==s&&"object"==a){if(!$r(t)){if(x(t))return x(e)?I(t.getTime(),e.getTime()):!1;if(C(t))return C(e)?t.toString()==e.toString():!1;if(E(t)||E(e)||A(t)||A(e)||$r(e)||x(e)||C(e))return!1;o={};for(i in t)if("$"!==i.charAt(0)&&!S(t[i])){if(!I(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&e[i]!==n&&!S(e[i]))return!1;return!0}if(!$r(e))return!1;if((r=t.length)==e.length){for(i=0;r>i;i++)if(!I(t[i],e[i]))return!1;return!0}}return!1}function q(t,e,n){return t.concat(or.call(e,n))}function U(t,e){return or.call(t,e||0)}function F(t,e){var n=arguments.length>2?U(arguments,2):[];return!S(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,q(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function H(t,r){var i=r;return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?i=n:A(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":E(r)&&(i="$SCOPE"),i}function L(t,e){return"undefined"==typeof t?n:(b(e)||(e=e?2:null),JSON.stringify(t,H,e))}function B(t){return w(t)?JSON.parse(t):t}function z(t){t=nr(t).clone();try{t.empty()}catch(e){}var n=nr("<div>").append(t).html();try{return t[0].nodeType===xr?Zn(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+Zn(e)})}catch(e){return Zn(n)}}function G(t){try{return decodeURIComponent(t)}catch(e){}}function W(t){var e,n,r={};return o((t||"").split("&"),function(t){if(t&&(e=t.replace(/\+/g,"%20").split("="),n=G(e[0]),g(n))){var i=g(e[1])?G(e[1]):!0;Kn.call(r,n)?$r(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function Y(t){var e=[];return o(t,function(t,n){$r(t)?o(t,function(t){e.push(Z(n,!0)+(t===!0?"":"="+Z(t,!0)))}):e.push(Z(n,!0)+(t===!0?"":"="+Z(t,!0)))}),e.length?e.join("&"):""}function J(t){return Z(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Z(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function K(t,e){var n,r,i=mr.length;for(t=nr(t),r=0;i>r;++r)if(n=mr[r]+e,w(n=t.attr(n)))return n;return null}function X(t,e){var n,r,i={};o(mr,function(e){var i=e+"app";!n&&t.hasAttribute&&t.hasAttribute(i)&&(n=t,r=t.getAttribute(i))}),o(mr,function(e){var i,o=e+"app";!n&&(i=t.querySelector("["+o.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(o))}),n&&(i.strictDi=null!==K(n,"strict-di"),e(n,r?[r]:[],i))}function Q(n,r,i){y(i)||(i={});var a={strictDi:!1};i=f(a,i);var s=function(){if(n=nr(n),n.injector()){var t=n[0]===e?"document":z(n);throw cr("btstrpd","App Already Bootstrapped with this Element '{0}'",t.replace(/</,"&lt;").replace(/>/,"&gt;"))}r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),i.debugInfoEnabled&&r.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),r.unshift("ng");var o=Bt(r,i.strictDi);return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},u=/^NG_ENABLE_DEBUG_INFO!/,c=/^NG_DEFER_BOOTSTRAP!/;return t&&u.test(t.name)&&(i.debugInfoEnabled=!0,t.name=t.name.replace(u,"")),t&&!c.test(t.name)?s():(t.name=t.name.replace(c,""),lr.resumeBootstrap=function(t){return o(t,function(t){r.push(t)}),s()},void(S(lr.resumeDeferredBootstrap)&&lr.resumeDeferredBootstrap()))}function tt(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function et(t){var e=lr.element(t).injector();if(!e)throw cr("test","no injector found for element argument to getTestability");return e.get("$$testability")}function nt(t,e){return e=e||"_",t.replace(gr,function(t,n){return(n?e:"")+t.toLowerCase()})}function rt(){var e;yr||(rr=t.jQuery,rr&&rr.fn.on?(nr=rr,f(rr.fn,{scope:Ur.scope,isolateScope:Ur.isolateScope,controller:Ur.controller,injector:Ur.injector,inheritedData:Ur.inheritedData}),e=rr.cleanData,rr.cleanData=function(t){var n;if(hr)hr=!1;else for(var r,i=0;null!=(r=t[i]);i++)n=rr._data(r,"events"),n&&n.$destroy&&rr(r).triggerHandler("$destroy");e(t)}):nr=wt,lr.element=nr,yr=!0)}function it(t,e,n){if(!t)throw cr("areq","Argument '{0}' is {1}",e||"?",n||"required");return t}function ot(t,e,n){return n&&$r(t)&&(t=t[t.length-1]),it(S(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function at(t,e){if("hasOwnProperty"===t)throw cr("badname","hasOwnProperty is not a valid {0} name",e)}function st(t,e,n){if(!e)return t;for(var r,i=e.split("."),o=t,a=i.length,s=0;a>s;s++)r=i[s],t&&(t=(o=t)[r]);return!n&&S(t)?F(o,t):t}function ut(t){var e=t[0],n=t[t.length-1],r=[e];do{if(e=e.nextSibling,!e)break;r.push(e)}while(e!==n);return nr(r)}function ct(){return Object.create(null)}function lt(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object);return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={};return function(r,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)};return s(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,n,r,i){return i||(i=e),function(){return i[r||"push"]([t,n,arguments]),c}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r);var e=[],i=[],s=[],u=t("$injector","invoke","push",i),c={_invokeQueue:e,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:t("$provide","provider"),factory:t("$provide","factory"),service:t("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),animation:t("$animateProvider","register"),filter:t("$filterProvider","register"),controller:t("$controllerProvider","register"),directive:t("$compileProvider","directive"),config:u,run:function(t){return s.push(t),this}};return a&&u(a),c})}})}function ft(t){var e=[];return JSON.stringify(t,function(t,n){if(n=H(t,n),y(n)){if(e.indexOf(n)>=0)return"<<already seen>>";e.push(n)}return n})}function ht(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof t?"undefined":"string"!=typeof t?ft(t):t}function $t(e){f(e,{bootstrap:Q,copy:P,extend:f,equals:I,element:nr,forEach:o,injector:Bt,noop:p,bind:F,toJson:L,fromJson:B,identity:d,isUndefined:m,isDefined:g,isString:w,isFunction:S,isObject:y,isNumber:b,isElement:V,isArray:$r,version:Er,isDate:x,lowercase:Zn,uppercase:Xn,callbacks:{counter:0},getTestability:et,$$minErr:r,$$csp:vr,reloadWithDebugInfo:tt}),ir=lt(t);try{ir("ngLocale")}catch(n){ir("ngLocale",[]).provider("$locale",ve)}ir("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Je}),t.provider("$compile",Kt).directive({a:Vi,input:Ji,textarea:Ji,form:_i,script:qo,select:Ho,style:Bo,option:Lo,ngBind:Xi,ngBindHtml:to,ngBindTemplate:Qi,ngClass:no,ngClassEven:io,ngClassOdd:ro,ngCloak:oo,ngController:ao,ngForm:Ii,ngHide:Do,ngIf:co,ngInclude:lo,ngInit:ho,ngNonBindable:ko,ngPluralize:Oo,ngRepeat:To,ngShow:Vo,ngStyle:jo,ngSwitch:Ro,ngSwitchWhen:Po,ngSwitchDefault:_o,ngOptions:Fo,ngTransclude:Io,ngModel:Co,ngList:$o,ngChange:eo,pattern:Go,ngPattern:Go,required:zo,ngRequired:zo,minlength:Yo,ngMinlength:Yo,maxlength:Wo,ngMaxlength:Wo,ngValue:Ki,ngModelOptions:Eo}).directive({ngInclude:fo}).directive(Di).directive(so),t.provider({$anchorScroll:zt,$animate:Zr,$browser:Yt,$cacheFactory:Jt,$controller:ee,$document:ne,$exceptionHandler:re,$filter:un,$interpolate:pe,$interval:de,$http:le,$httpBackend:he,$location:Me,$log:Ne,$parse:Le,$rootScope:Ye,$q:Be,$$q:ze,$sce:Qe,$sceDelegate:Xe,$sniffer:tn,$templateCache:Zt,$templateRequest:en,$$testability:nn,$timeout:rn,$window:sn,$$rAF:We,$$asyncCallback:Gt,$$jqLite:qt})}])}function pt(){return++Or}function dt(t){return t.replace(Nr,function(t,e,n,r){return r?n.toUpperCase():n}).replace(Vr,"Moz$1")}function vt(t){return!Pr.test(t)}function mt(t){var e=t.nodeType;return e===wr||!e||e===Cr}function gt(t,e){var n,r,i,a,s=e.createDocumentFragment(),u=[];if(vt(t))u.push(e.createTextNode(t));else{for(n=n||s.appendChild(e.createElement("div")),r=(_r.exec(t)||["",""])[1].toLowerCase(),i=qr[r]||qr._default,n.innerHTML=i[1]+t.replace(Ir,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild;u=q(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(t){s.appendChild(t)}),s}function yt(t,n){n=n||e;var r;return(r=Rr.exec(t))?[n.createElement(r[1])]:(r=gt(t,n))?r.childNodes:[]}function wt(t){if(t instanceof wt)return t;var e;if(w(t)&&(t=pr(t),e=!0),!(this instanceof wt)){if(e&&"<"!=t.charAt(0))throw jr("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new wt(t)}e?Mt(this,yt(t)):Mt(this,t)}function bt(t){return t.cloneNode(!0)}function xt(t,e){if(e||Ct(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),r=0,i=n.length;i>r;r++)Ct(n[r])}function St(t,e,n,r){if(g(r))throw jr("offargs","jqLite#off() does not support the `selector` argument");var i=At(t),a=i&&i.events,s=i&&i.handle;if(s)if(e)o(e.split(" "),function(e){if(g(n)){var r=a[e];if(R(r||[],n),r&&r.length>0)return}Mr(t,e,s),delete a[e]});else for(e in a)"$destroy"!==e&&Mr(t,e,s),delete a[e]}function Ct(t,e){var r=t.ng339,i=r&&kr[r];if(i){if(e)return void delete i.data[e];i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),St(t)),delete kr[r],t.ng339=n}}function At(t,e){var r=t.ng339,i=r&&kr[r];return e&&!i&&(t.ng339=r=pt(),i=kr[r]={events:{},data:{},handle:n}),i}function Et(t,e,n){if(mt(t)){var r=g(n),i=!r&&e&&!y(e),o=!e,a=At(t,!i),s=a&&a.data;if(r)s[e]=n;else{if(o)return s;if(i)return s&&s[e];f(s,e)}}}function kt(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function Ot(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",pr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+pr(e)+" "," ")))})}function Tt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");o(e.split(" "),function(t){t=pr(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",pr(n))}}function Mt(t,e){if(e)if(e.nodeType)t[t.length++]=e;else{var n=e.length;if("number"==typeof n&&e.window!==e){if(n)for(var r=0;n>r;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function Nt(t,e){return Vt(t,"$"+(e||"ngController")+"Controller")}function Vt(t,e,r){t.nodeType==Cr&&(t=t.documentElement);for(var i=$r(e)?e:[e];t;){for(var o=0,a=i.length;a>o;o++)if((r=nr.data(t,i[o]))!==n)return r;t=t.parentNode||t.nodeType===Ar&&t.host}}function Dt(t){for(xt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function jt(t,e){e||xt(t);var n=t.parentNode;n&&n.removeChild(t)}function Rt(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):nr(n).on("load",e)}function Pt(t,e){var n=Fr[e.toLowerCase()];return n&&Hr[j(t)]&&n}function _t(t,e){var n=t.nodeName;return("INPUT"===n||"TEXTAREA"===n)&&Lr[e]}function It(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=e[r||n.type],o=i?i.length:0;if(o){if(m(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0},o>1&&(i=_(i));for(var s=0;o>s;s++)n.isImmediatePropagationStopped()||i[s].call(t,n)}};return n.elem=t,n}function qt(){this.$get=function(){return f(wt,{hasClass:function(t,e){return t.attr&&(t=t[0]),kt(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Tt(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),Ot(t,e)}})}}function Ut(t,e){var n=t&&t.$$hashKey;if(n)return"function"==typeof n&&(n=t.$$hashKey()),n;var r=typeof t;return n="function"==r||"object"==r&&null!==t?t.$$hashKey=r+":"+(e||c)():r+":"+t}function Ft(t,e){if(e){var n=0;this.nextUid=function(){return++n}}o(t,this.put,this)}function Ht(t){var e=t.toString().replace(Wr,""),n=e.match(Br);return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Lt(t,e,n){var r,i,a,s;if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw w(n)&&n||(n=t.name||Ht(t)),Yr("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);i=t.toString().replace(Wr,""),a=i.match(Br),o(a[1].split(zr),function(t){t.replace(Gr,function(t,e,n){r.push(n)})})}t.$inject=r}}else $r(t)?(s=t.length-1,ot(t[s],"fn"),r=t.slice(0,s)):ot(t,"fn",!0);return r}function Bt(t,e){function r(t){return function(e,n){return y(e)?void o(e,u(t)):t(e,n)}}function i(t,e){if(at(t,"service"),(S(e)||$r(e))&&(e=E.instantiate(e)),!e.$get)throw Yr("pget","Provider '{0}' must define $get factory method.",t);return A[t+b]=e}function a(t,e){return function(){var n=O.invoke(e,this);if(m(n))throw Yr("undef","Provider '{0}' must return a value from $get factory method.",t);return n}}function s(t,e,n){return i(t,{$get:n!==!1?a(t,e):e})}function c(t,e){return s(t,["$injector",function(t){return t.instantiate(e)}])}function l(t,e){return s(t,v(e),!1)}function f(t,e){at(t,"constant"),A[t]=e,k[t]=e}function h(t,e){var n=E.get(t+b),r=n.$get;n.$get=function(){var t=O.invoke(r,n);return O.invoke(e,null,{$delegate:t})}}function $(t){var e,n=[];return o(t,function(t){function r(t){var e,n;for(e=0,n=t.length;n>e;e++){var r=t[e],i=E.get(r[0]);i[r[1]].apply(i,r[2])}}if(!C.get(t)){C.put(t,!0);try{w(t)?(e=ir(t),n=n.concat($(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):S(t)?n.push(E.invoke(t)):$r(t)?n.push(E.invoke(t)):ot(t,"module")}catch(i){throw $r(t)&&(t=t[t.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),Yr("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function d(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===g)throw Yr("cdep","Circular dependency found: {0}",e+" <- "+x.join(" <- "));return t[e]}try{return x.unshift(e),t[e]=g,t[e]=n(e,r)}catch(i){throw t[e]===g&&delete t[e],i}finally{x.shift()}}function i(t,n,i,o){"string"==typeof i&&(o=i,i=null);var a,s,u,c=[],l=Bt.$$annotate(t,e,o);for(s=0,a=l.length;a>s;s++){if(u=l[s],"string"!=typeof u)throw Yr("itkn","Incorrect injection token! Expected service name as string, got {0}",u);c.push(i&&i.hasOwnProperty(u)?i[u]:r(u,o))}return $r(t)&&(t=t[a]),t.apply(n,c)}function o(t,e,n){var r=Object.create(($r(t)?t[t.length-1]:t).prototype||null),o=i(t,r,e,n);return y(o)||S(o)?o:r}return{invoke:i,instantiate:o,get:r,annotate:Bt.$$annotate,has:function(e){return A.hasOwnProperty(e+b)||t.hasOwnProperty(e)}}}e=e===!0;var g={},b="Provider",x=[],C=new Ft([],!0),A={$provide:{provider:r(i),factory:r(s),service:r(c),value:r(l),constant:r(f),decorator:h}},E=A.$injector=d(A,function(t,e){throw lr.isString(e)&&x.push(e),Yr("unpr","Unknown provider: {0}",x.join(" <- "))}),k={},O=k.$injector=d(k,function(t,e){var r=E.get(t+b,e);return O.invoke(r.$get,r,n,t)});return o($(t),function(t){O.invoke(t||p)}),O}function zt(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return Array.prototype.some.call(t,function(t){return"a"===j(t)?(e=t,!0):void 0}),e}function o(){var t=s.yOffset;if(S(t))t=t();else if(V(t)){var n=t[0],r=e.getComputedStyle(n);t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else b(t)||(t=0);return t}function a(t){if(t){t.scrollIntoView();var n=o();if(n){var r=t.getBoundingClientRect().top;e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function s(){var t,e=n.hash();e?(t=u.getElementById(e))?a(t):(t=i(u.getElementsByName(e)))?a(t):"top"===e&&a(null):a(null)}var u=e.document;return t&&r.$watch(function(){return n.hash()},function(t,e){(t!==e||""!==t)&&Rt(function(){r.$evalAsync(s)})}),s}]}function Gt(){this.$get=["$$rAF","$timeout",function(t,e){return t.supported?function(e){return t(e)}:function(t){return e(t,0,!1)}}]}function Wt(t,e,r,i){function a(t){try{t.apply(null,U(arguments,1))}finally{if(C--,0===C)for(;A.length;)try{A.pop()()}catch(e){r.error(e)}}}function s(t){var e=t.indexOf("#");return-1===e?"":t.substr(e)}function u(t,e){!function n(){o(k,function(t){t()}),E=e(n,t)}()}function c(){f(),h()}function l(){try{return y.state}catch(t){}}function f(){O=l(),O=m(O)?null:O,I(O,R)&&(O=R),R=O}function h(){(M!==d.url()||T!==O)&&(M=d.url(),T=O,o(D,function(t){t(d.url(),O)}))}function $(t){try{return decodeURIComponent(t)}catch(e){return t}}var d=this,v=e[0],g=t.location,y=t.history,b=t.setTimeout,x=t.clearTimeout,S={};d.isMock=!1;var C=0,A=[];d.$$completeOutstandingRequest=a,d.$$incOutstandingRequestCount=function(){C++},d.notifyWhenNoOutstandingRequests=function(t){o(k,function(t){t()}),0===C?t():A.push(t)};var E,k=[];d.addPollFn=function(t){return m(E)&&u(100,b),k.push(t),t};var O,T,M=g.href,N=e.find("base"),V=null;f(),T=O,d.url=function(e,n,r){if(m(r)&&(r=null),g!==t.location&&(g=t.location),y!==t.history&&(y=t.history),e){var o=T===r;if(M===e&&(!i.history||o))return d;var a=M&&be(M)===be(e);return M=e,T=r,!i.history||a&&o?((!a||V)&&(V=e),n?g.replace(e):a?g.hash=s(e):g.href=e):(y[n?"replaceState":"pushState"](r,"",e),f(),T=O),d}return V||g.href.replace(/%27/g,"'")},d.state=function(){return O};var D=[],j=!1,R=null;d.onUrlChange=function(e){return j||(i.history&&nr(t).on("popstate",c),nr(t).on("hashchange",c),j=!0),D.push(e),e},d.$$checkUrlChange=h,d.baseHref=function(){var t=N.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var P={},_="",q=d.baseHref();d.cookies=function(t,e){var i,o,a,s,u;if(!t){if(v.cookie!==_)for(_=v.cookie,o=_.split("; "),P={},s=0;s<o.length;s++)a=o[s],u=a.indexOf("="),u>0&&(t=$(a.substring(0,u)),P[t]===n&&(P[t]=$(a.substring(u+1))));return P}e===n?v.cookie=encodeURIComponent(t)+"=;path="+q+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(e)&&(i=(v.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path="+q).length+1,i>4096&&r.warn("Cookie '"+t+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},d.defer=function(t,e){var n;return C++,n=b(function(){delete S[n],a(t)},e||0),S[n]=!0,n},d.defer.cancel=function(t){return S[t]?(delete S[t],x(t),a(p),!0):!1}}function Yt(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new Wt(t,r,e,n)}]}function Jt(){this.$get=function(){function t(t,n){function i(t){t!=h&&($?$==t&&($=t.n):$=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t);var a=0,s=f({},n,{id:t}),u={},c=n&&n.capacity||Number.MAX_VALUE,l={},h=null,$=null;return e[t]={put:function(t,e){if(c<Number.MAX_VALUE){var n=l[t]||(l[t]={key:t});i(n)}if(!m(e))return t in u||a++,u[t]=e,a>c&&this.remove($.key),e},get:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=l[t];if(!e)return;e==h&&(h=e.p),e==$&&($=e.n),o(e.n,e.p),delete l[t]}delete u[t],a--},removeAll:function(){u={},a=0,l={},h=$=null},destroy:function(){u=null,s=null,l=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function Zt(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function Kt(t,r){function i(t,e){var n=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={};return o(t,function(t,i){var o=t.match(n);if(!o)throw Kr("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,i,t);r[i]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||i}}),r}var a={},s="Directive",c=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,l=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=D("ngSrc,ngSrcset,src,srcset"),m=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,b=/^(on[a-z]+|formaction)$/;this.directive=function C(e,n){return at(e,"directive"),w(e)?(it(n,"directiveFactory"),a.hasOwnProperty(e)||(a[e]=[],t.factory(e+s,["$injector","$exceptionHandler",function(t,n){var r=[];return o(a[e],function(o,a){try{var s=t.invoke(o);S(s)?s={compile:v(s)}:!s.compile&&s.link&&(s.compile=v(s.link)),s.priority=s.priority||0,s.index=a,s.name=s.name||e,s.require=s.require||s.controller&&s.name,s.restrict=s.restrict||"EA",y(s.scope)&&(s.$$isolateBindings=i(s.scope,s.name)),r.push(s)}catch(u){n(u)}}),r}])),a[e].push(n)):o(e,u(C)),this},this.aHrefSanitizationWhitelist=function(t){return g(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()};var x=!0;this.debugInfoEnabled=function(t){return g(t)?(x=t,this):x},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,r,i,u,v,g,C,A,k,O,T){function M(t,e){try{t.addClass(e)}catch(n){}}function N(t,e,n,r,i){t instanceof nr||(t=nr(t)),o(t,function(e,n){e.nodeType==xr&&e.nodeValue.match(/\S+/)&&(t[n]=nr(e).wrap("<span></span>").parent()[0])});var a=D(t,e,t,n,r,i);N.$$addScopeClass(t);var s=null;return function(e,n,r){it(e,"scope"),r=r||{};var i=r.parentBoundTranscludeFn,o=r.transcludeControllers,u=r.futureParentElement;i&&i.$$boundTransclude&&(i=i.$$boundTransclude),s||(s=V(u));var c;if(c="html"!==s?nr(X(s,nr("<div>").append(t).html())):n?Ur.clone.call(t):t,o)for(var l in o)c.data("$"+l+"Controller",o[l].instance);return N.$$addScopeInfo(c,e),n&&n(c,e),a&&a(e,c,c,i),c}}function V(t){var e=t&&t[0];return e&&"foreignobject"!==j(e)&&e.toString().match(/SVG/)?"svg":"html"}function D(t,e,r,i,o,a){function s(t,r,i,o){var a,s,u,c,l,f,h,$,v;if(p){var m=r.length;for(v=new Array(m),l=0;l<d.length;l+=3)h=d[l],v[h]=r[h]}else v=r;for(l=0,f=d.length;f>l;)u=v[d[l++]],a=d[l++],s=d[l++],a?(a.scope?(c=t.$new(),N.$$addScopeInfo(nr(u),c)):c=t,$=a.transcludeOnThisElement?P(t,a.transclude,o,a.elementTranscludeOnThisElement):!a.templateOnThisElement&&o?o:!o&&e?P(t,e):null,a(s,c,u,i,$)):s&&s(t,u.childNodes,n,o)}for(var u,c,l,f,h,$,p,d=[],v=0;v<t.length;v++)u=new at,c=_(t[v],[],u,0===v?i:n,o),l=c.length?H(c,t[v],u,e,r,null,[],[],a):null,l&&l.scope&&N.$$addScopeClass(u.$$element),h=l&&l.terminal||!(f=t[v].childNodes)||!f.length?null:D(f,l?(l.transcludeOnThisElement||!l.templateOnThisElement)&&l.transclude:e),(l||h)&&(d.push(v,l,h),$=!0,p=p||l),a=null;return $?s:null}function P(t,e,n,r){var i=function(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})};return i}function _(t,e,n,r,i){var o,a,s=t.nodeType,u=n.$attr;switch(s){case wr:B(e,Xt(j(t)),"E",r,i);for(var f,h,$,p,d,v,m=t.attributes,g=0,b=m&&m.length;b>g;g++){var x=!1,S=!1;f=m[g],h=f.name,d=pr(f.value),p=Xt(h),(v=ft.test(p))&&(h=h.replace(Xr,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}));var C=p.replace(/(Start|End)$/,"");G(C)&&p===C+"Start"&&(x=h,S=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6)),$=Xt(h.toLowerCase()),u[$]=h,(v||!n.hasOwnProperty($))&&(n[$]=d,Pt(t,$)&&(n[$]=!0)),tt(t,e,d,$,v),B(e,$,"A",r,i,x,S)}if(a=t.className,y(a)&&(a=a.animVal),w(a)&&""!==a)for(;o=l.exec(a);)$=Xt(o[2]),B(e,$,"C",r,i)&&(n[$]=pr(o[3])),a=a.substr(o.index+o[0].length);break;case xr:K(e,t.nodeValue);break;case Sr:try{o=c.exec(t.nodeValue),o&&($=Xt(o[1]),B(e,$,"M",r,i)&&(n[$]=pr(o[2])))}catch(A){}}return e.sort(J),e}function q(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Kr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n);t.nodeType==wr&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return nr(r)}function F(t,e,n){return function(r,i,o,a,s){return i=q(i[0],e,n),t(r,i,o,a,s)}}function H(t,a,s,u,c,l,f,h,$){function p(t,e,n,r){t&&(n&&(t=F(t,n,r)),t.require=A.require,t.directiveName=k,(j===A||A.$$isolateScope)&&(t=rt(t,{isolateScope:!0})),f.push(t)),e&&(n&&(e=F(e,n,r)),e.require=A.require,e.directiveName=k,(j===A||A.$$isolateScope)&&(e=rt(e,{isolateScope:!0})),h.push(e))}function d(t,e,n,r){var i,a,s="data",u=!1,c=n;if(w(e)){if(a=e.match(m),e=e.substring(a[0].length),a[3]&&(a[1]?a[3]=null:a[1]=a[3]),"^"===a[1]?s="inheritedData":"^^"===a[1]&&(s="inheritedData",c=n.parent()),"?"===a[2]&&(u=!0),i=null,r&&"data"===s&&(i=r[e])&&(i=i.instance),i=i||c[s]("$"+e+"Controller"),!i&&!u)throw Kr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",e,t);return i||null}return $r(e)&&(i=[],o(e,function(e){i.push(d(t,e,n,r))})),i}function b(t,e,i,u,c){function l(t,e,r){var i;return E(t)||(r=e,e=t,t=n),G&&(i=b),r||(r=G?S.parent():S),c(t,e,i,r,T)}var $,p,m,y,w,b,x,S,A;if(a===i?(A=s,S=s.$$element):(S=nr(i),A=new at(S,s)),j&&(w=e.$new(!0)),c&&(x=l,x.$$boundTransclude=c),D&&(C={},b={},o(D,function(t){var n,r={$scope:t===j||t.$$isolateScope?w:e,$element:S,$attrs:A,$transclude:x};y=t.controller,"@"==y&&(y=A[t.name]),n=g(y,r,!0,t.controllerAs),b[t.name]=n,G||S.data("$"+t.name+"Controller",n.instance),C[t.name]=n})),j){N.$$addScopeInfo(S,w,!0,!(R&&(R===j||R===j.$$originalDirective))),N.$$addScopeClass(S,!0);var k=C&&C[j.name],O=w;k&&k.identifier&&j.bindToController===!0&&(O=k.instance),o(w.$$isolateBindings=j.$$isolateBindings,function(t,n){var i,o,a,s,u=t.attrName,c=t.optional,l=t.mode;switch(l){case"@":A.$observe(u,function(t){O[n]=t}),A.$$observers[u].$$scope=e,A[u]&&(O[n]=r(A[u])(e));break;case"=":if(c&&!A[u])return;o=v(A[u]),s=o.literal?I:function(t,e){return t===e||t!==t&&e!==e},a=o.assign||function(){throw i=O[n]=o(e),Kr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",A[u],j.name)},i=O[n]=o(e);var f=function(t){return s(t,O[n])||(s(t,i)?a(e,t=O[n]):O[n]=t),i=t};f.$stateful=!0;var h;h=t.collection?e.$watchCollection(A[u],f):e.$watch(v(A[u],f),null,o.literal),w.$on("$destroy",h);break;case"&":o=v(A[u]),O[n]=function(t){return o(e,t)}}})}for(C&&(o(C,function(t){t()}),C=null),$=0,p=f.length;p>$;$++)m=f[$],ot(m,m.isolateScope?w:e,S,A,m.require&&d(m.directiveName,m.require,S,b),x);var T=e;for(j&&(j.template||null===j.templateUrl)&&(T=w),t&&t(T,i.childNodes,n,c),$=h.length-1;$>=0;$--)m=h[$],ot(m,m.isolateScope?w:e,S,A,m.require&&d(m.directiveName,m.require,S,b),x)}$=$||{};for(var x,C,A,k,O,T,M,V=-Number.MAX_VALUE,D=$.controllerDirectives,j=$.newIsolateScopeDirective,R=$.templateDirective,P=$.nonTlbTranscludeDirective,H=!1,B=!1,G=$.hasElementTranscludeDirective,J=s.$$element=nr(a),K=l,Q=u,tt=0,nt=t.length;nt>tt;tt++){A=t[tt];var it=A.$$start,st=A.$$end;if(it&&(J=q(a,it,st)),O=n,V>A.priority)break;if((M=A.scope)&&(A.templateUrl||(y(M)?(Z("new/isolated scope",j||x,A,J),j=A):Z("new/isolated scope",j,A,J)),x=x||A),k=A.name,!A.templateUrl&&A.controller&&(M=A.controller,D=D||{},Z("'"+k+"' controller",D[k],A,J),D[k]=A),(M=A.transclude)&&(H=!0,A.$$tlb||(Z("transclusion",P,A,J),P=A),"element"==M?(G=!0,V=A.priority,O=J,J=s.$$element=nr(e.createComment(" "+k+": "+s[k]+" ")),a=J[0],et(c,U(O),a),Q=N(O,u,V,K&&K.name,{nonTlbTranscludeDirective:P})):(O=nr(bt(a)).contents(),J.empty(),Q=N(O,u))),A.template)if(B=!0,Z("template",R,A,J),R=A,M=S(A.template)?A.template(J,s):A.template,M=lt(M),A.replace){if(K=A,O=vt(M)?[]:te(X(A.templateNamespace,pr(M))),a=O[0],1!=O.length||a.nodeType!==wr)throw Kr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",k,"");et(c,J,a);var ut={$attr:{}},ct=_(a,[],ut),ft=t.splice(tt+1,t.length-(tt+1));j&&L(ct),t=t.concat(ct).concat(ft),W(s,ut),nt=t.length}else J.html(M);if(A.templateUrl)B=!0,Z("template",R,A,J),R=A,A.replace&&(K=A),b=Y(t.splice(tt,t.length-tt),J,s,c,H&&Q,f,h,{controllerDirectives:D,newIsolateScopeDirective:j,templateDirective:R,nonTlbTranscludeDirective:P}),nt=t.length;else if(A.compile)try{T=A.compile(J,s,Q),S(T)?p(null,T,it,st):T&&p(T.pre,T.post,it,st)}catch(ht){i(ht,z(J))}A.terminal&&(b.terminal=!0,V=Math.max(V,A.priority))}return b.scope=x&&x.scope===!0,b.transcludeOnThisElement=H,b.elementTranscludeOnThisElement=G,b.templateOnThisElement=B,b.transclude=Q,$.hasElementTranscludeDirective=G,b}function L(t){for(var e=0,n=t.length;n>e;e++)t[e]=$(t[e],{$$isolateScope:!0})}function B(e,r,o,u,c,l,f){if(r===c)return null;var h=null;if(a.hasOwnProperty(r))for(var p,d=t.get(r+s),v=0,m=d.length;m>v;v++)try{p=d[v],(u===n||u>p.priority)&&-1!=p.restrict.indexOf(o)&&(l&&(p=$(p,{
$$start:l,$$end:f})),e.push(p),h=p)}catch(g){i(g)}return h}function G(e){if(a.hasOwnProperty(e))for(var n,r=t.get(e+s),i=0,o=r.length;o>i;i++)if(n=r[i],n.multiElement)return!0;return!1}function W(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(M(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function Y(t,e,n,r,i,a,s,c){var l,f,h=[],p=e[0],d=t.shift(),v=$(d,{templateUrl:null,transclude:null,replace:null,$$originalDirective:d}),m=S(d.templateUrl)?d.templateUrl(e,n):d.templateUrl,g=d.templateNamespace;return e.empty(),u(m).then(function(u){var $,w,b,x;if(u=lt(u),d.replace){if(b=vt(u)?[]:te(X(g,pr(u))),$=b[0],1!=b.length||$.nodeType!==wr)throw Kr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",d.name,m);w={$attr:{}},et(r,e,$);var S=_($,[],w);y(d.scope)&&L(S),t=S.concat(t),W(n,w)}else $=p,e.html(u);for(t.unshift(v),l=H(t,$,n,i,e,d,a,s,c),o(r,function(t,n){t==$&&(r[n]=e[0])}),f=D(e[0].childNodes,i);h.length;){var C=h.shift(),A=h.shift(),E=h.shift(),k=h.shift(),O=e[0];if(!C.$$destroyed){if(A!==p){var T=A.className;c.hasElementTranscludeDirective&&d.replace||(O=bt($)),et(E,nr(A),O),M(nr(O),T)}x=l.transcludeOnThisElement?P(C,l.transclude,k):k,l(f,C,O,r,x)}}h=null}),function(t,e,n,r,i){var o=i;e.$$destroyed||(h?h.push(e,n,r,o):(l.transcludeOnThisElement&&(o=P(e,l.transclude,i)),l(f,e,n,r,o)))}}function J(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function Z(t,e,n,r){if(e)throw Kr("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",e.name,n.name,t,z(r))}function K(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:function(t){var e=t.parent(),r=!!e.length;return r&&N.$$addBindingClass(e),function(t,e){var i=e.parent();r||N.$$addBindingClass(i),N.$$addBindingInfo(i,n.expressions),t.$watch(n,function(t){e[0].nodeValue=t})}}})}function X(t,n){switch(t=Zn(t||"html")){case"svg":case"math":var r=e.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function Q(t,e){if("srcdoc"==e)return k.HTML;var n=j(t);return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?k.RESOURCE_URL:void 0}function tt(t,e,n,i,o){var a=Q(t,i);o=h[i]||o;var s=r(n,!0,a,o);if(s){if("multiple"===i&&"select"===j(t))throw Kr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",z(t));e.push({priority:100,compile:function(){return{pre:function(t,e,u){var c=u.$$observers||(u.$$observers={});if(b.test(i))throw Kr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");var l=u[i];l!==n&&(s=l&&r(l,!0,a,o),n=l),s&&(u[i]=s(t),(c[i]||(c[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||t).$watch(s,function(t,e){"class"===i&&t!=e?u.$updateClass(t,e):u.$set(i,t)}))}}}})}}function et(t,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode;if(t)for(i=0,o=t.length;o>i;i++)if(t[i]==a){t[i++]=r;for(var c=i,l=c+s-1,f=t.length;f>c;c++,l++)f>l?t[c]=t[l]:delete t[c];t.length-=s-1,t.context===a&&(t.context=r);break}u&&u.replaceChild(r,a);var h=e.createDocumentFragment();h.appendChild(a),nr(r).data(nr(a).data()),rr?(hr=!0,rr.cleanData([a])):delete nr.cache[a[nr.expando]];for(var $=1,p=n.length;p>$;$++){var d=n[$];nr(d).remove(),h.appendChild(d),delete n[$]}n[0]=r,n.length=1}function rt(t,e){return f(function(){return t.apply(null,arguments)},t,e)}function ot(t,e,n,r,o,a){try{t(e,n,r,o,a)}catch(s){i(s,z(n))}}var at=function(t,e){if(e){var n,r,i,o=Object.keys(e);for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=e[i]}else this.$attr={};this.$$element=t};at.prototype={$normalize:Xt,$addClass:function(t){t&&t.length>0&&O.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&O.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=Qt(t,e);n&&n.length&&O.addClass(this.$$element,n);var r=Qt(e,t);r&&r.length&&O.removeClass(this.$$element,r)},$set:function(t,e,r,a){var s,u=this.$$element[0],c=Pt(u,t),l=_t(u,t),f=t;if(c?(this.$$element.prop(t,e),a=c):l&&(this[l]=e,f=l),this[t]=e,a?this.$attr[t]=a:(a=this.$attr[t],a||(this.$attr[t]=a=nt(t,"-"))),s=j(this.$$element),"a"===s&&"href"===t||"img"===s&&"src"===t)this[t]=e=T(e,"src"===t);else if("img"===s&&"srcset"===t){for(var h="",$=pr(e),p=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,d=/\s/.test($)?p:/(,)/,v=$.split(d),m=Math.floor(v.length/2),g=0;m>g;g++){var y=2*g;h+=T(pr(v[y]),!0),h+=" "+pr(v[y+1])}var w=pr(v[2*g]).split(/\s/);h+=T(pr(w[0]),!0),2===w.length&&(h+=" "+pr(w[1])),this[t]=e=h}r!==!1&&(null===e||e===n?this.$$element.removeAttr(a):this.$$element.attr(a,e));var b=this.$$observers;b&&o(b[f],function(t){try{t(e)}catch(n){i(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=ct()),i=r[t]||(r[t]=[]);return i.push(e),C.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(t)&&e(n[t])}),function(){R(i,e)}}};var st=r.startSymbol(),ut=r.endSymbol(),lt="{{"==st||"}}"==ut?d:function(t){return t.replace(/\{\{/g,st).replace(/}}/g,ut)},ft=/^ngAttr[A-Z]/;return N.$$addBindingInfo=x?function(t,e){var n=t.data("$binding")||[];$r(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:p,N.$$addBindingClass=x?function(t){M(t,"ng-binding")}:p,N.$$addScopeInfo=x?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";t.data(i,e)}:p,N.$$addScopeClass=x?function(t,e){M(t,e?"ng-isolate-scope":"ng-scope")}:p,N}]}function Xt(t){return dt(t.replace(Xr,""))}function Qt(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/);t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(n.length>0?" ":"")+a}return n}function te(t){t=nr(t);var e=t.length;if(1>=e)return t;for(;e--;){var n=t[e];n.nodeType===Sr&&ar.call(t,e,1)}return t}function ee(){var t={},e=!1,i=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(e,n){at(e,"controller"),y(e)?f(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(o,a){function s(t,e,n,i){if(!t||!y(t.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,e);t.$scope[e]=n}return function(r,u,c,l){var h,$,p,d;if(c=c===!0,l&&w(l)&&(d=l),w(r)){if($=r.match(i),!$)throw Qr("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r);p=$[1],d=d||$[3],r=t.hasOwnProperty(p)?t[p]:st(u.$scope,p,!0)||(e?st(a,p,!0):n),ot(r,p,!0)}if(c){var v=($r(r)?r[r.length-1]:r).prototype;return h=Object.create(v||null),d&&s(u,d,h,p||r.name),f(function(){return o.invoke(r,h,u,p),h},{instance:h,identifier:d})}return h=o.instantiate(r,u,p),d&&s(u,d,h,p||r.name),h}}]}function ne(){this.$get=["$window",function(t){return nr(t.document)}]}function re(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function ie(t,e){if(w(t)){var n=t.replace(ii,"").trim();if(n){var r=e("Content-Type");(r&&0===r.indexOf(ti)||oe(n))&&(t=B(n))}}return t}function oe(t){var e=t.match(ni);return e&&ri[e[0]].test(t)}function ae(t){var e,n,r,i=ct();return t?(o(t.split("\n"),function(t){r=t.indexOf(":"),e=Zn(pr(t.substr(0,r))),n=pr(t.substr(r+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}function se(t){var e=y(t)?t:n;return function(n){if(e||(e=ae(t)),n){var r=e[Zn(n)];return void 0===r&&(r=null),r}return e}}function ue(t,e,n,r){return S(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function ce(t){return t>=200&&300>t}function le(){var t=this.defaults={transformResponse:[ie],transformRequest:[function(t){return!y(t)||k(t)||T(t)||O(t)?t:L(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:_(ei),put:_(ei),patch:_(ei)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},e=!1;this.useApplyAsync=function(t){return g(t)?(e=!!t,this):e};var i=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,u,c,l,h,$){function p(e){function i(t){var e=f({},t);return t.data?e.data=ue(t.data,t.headers,t.status,u.transformResponse):e.data=t.data,ce(t.status)?e:h.reject(e)}function a(t){var e,n={};return o(t,function(t,r){S(t)?(e=t(),null!=e&&(n[r]=e)):n[r]=t}),n}function s(e){var n,r,i,o=t.headers,s=f({},e.headers);o=f({},o.common,o[Zn(e.method)]);t:for(n in o){r=Zn(n);for(i in s)if(Zn(i)===r)continue t;s[n]=o[n]}return a(s)}if(!lr.isObject(e))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",e);var u=f({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse},e);u.headers=s(e),u.method=Xn(u.method);var c=function(e){var r=e.headers,a=ue(e.data,se(r),n,e.transformRequest);return m(a)&&o(r,function(t,e){"content-type"===Zn(e)&&delete r[e]}),m(e.withCredentials)&&!m(t.withCredentials)&&(e.withCredentials=t.withCredentials),b(e,a).then(i,i)},l=[c,n],$=h.when(u);for(o(E,function(t){(t.request||t.requestError)&&l.unshift(t.request,t.requestError),(t.response||t.responseError)&&l.push(t.response,t.responseError)});l.length;){var p=l.shift(),d=l.shift();$=$.then(p,d)}return $.success=function(t){return ot(t,"fn"),$.then(function(e){t(e.data,e.status,e.headers,u)}),$},$.error=function(t){return ot(t,"fn"),$.then(null,function(e){t(e.data,e.status,e.headers,u)}),$},$}function d(t){o(arguments,function(t){p[t]=function(e,n){return p(f(n||{},{method:t,url:e}))}})}function v(t){o(arguments,function(t){p[t]=function(e,n,r){return p(f(r||{},{method:t,url:e,data:n}))}})}function b(r,i){function o(t,n,r,i){function o(){s(n,t,r,i)}$&&(ce(t)?$.put(x,[t,n,ae(r),i]):$.remove(x)),e?l.$applyAsync(o):(o(),l.$$phase||l.$apply())}function s(t,e,n,i){e=e>=-1?e:0,(ce(e)?v.resolve:v.reject)({data:t,status:e,headers:se(n),config:r,statusText:i})}function c(t){s(t.data,t.status,_(t.headers()),t.statusText)}function f(){var t=p.pendingRequests.indexOf(r);-1!==t&&p.pendingRequests.splice(t,1)}var $,d,v=h.defer(),w=v.promise,b=r.headers,x=C(r.url,r.params);if(p.pendingRequests.push(r),w.then(f,f),!r.cache&&!t.cache||r.cache===!1||"GET"!==r.method&&"JSONP"!==r.method||($=y(r.cache)?r.cache:y(t.cache)?t.cache:A),$&&(d=$.get(x),g(d)?N(d)?d.then(c,c):$r(d)?s(d[1],d[0],_(d[2]),d[3]):s(d,200,{},"OK"):$.put(x,w)),m(d)){var S=an(r.url)?u.cookies()[r.xsrfCookieName||t.xsrfCookieName]:n;S&&(b[r.xsrfHeaderName||t.xsrfHeaderName]=S),a(r.method,x,i,o,b,r.timeout,r.withCredentials,r.responseType)}return w}function C(t,e){if(!e)return t;var n=[];return s(e,function(t,e){null===t||m(t)||($r(t)||(t=[t]),o(t,function(t){y(t)&&(t=x(t)?t.toISOString():L(t)),n.push(Z(e)+"="+Z(t))}))}),n.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+n.join("&")),t}var A=c("$http"),E=[];return o(i,function(t){E.unshift(w(t)?$.get(t):$.invoke(t))}),p.pendingRequests=[],d("get","delete","head","jsonp"),v("post","put","patch"),p.defaults=t,p}]}function fe(){return new t.XMLHttpRequest}function he(){this.$get=["$browser","$window","$document",function(t,e,n){return $e(t,fe,t.defer,e.angular.callbacks,n[0])}]}function $e(t,e,r,i,a){function s(t,e,n){var r=a.createElement("script"),o=null;return r.type="text/javascript",r.src=t,r.async=!0,o=function(t){Mr(r,"load",o),Mr(r,"error",o),a.body.removeChild(r),r=null;var s=-1,u="unknown";t&&("load"!==t.type||i[e].called||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},Tr(r,"load",o),Tr(r,"error",o),a.body.appendChild(r),o}return function(a,u,c,l,f,h,$,d){function v(){w&&w(),b&&b.abort()}function m(e,i,o,a,s){C!==n&&r.cancel(C),w=b=null,e(i,o,a,s),t.$$completeOutstandingRequest(p)}if(t.$$incOutstandingRequestCount(),u=u||t.url(),"jsonp"==Zn(a)){var y="_"+(i.counter++).toString(36);i[y]=function(t){i[y].data=t,i[y].called=!0};var w=s(u.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(t,e){m(l,t,i[y].data,"",e),i[y]=p})}else{var b=e();b.open(a,u,!0),o(f,function(t,e){g(t)&&b.setRequestHeader(e,t)}),b.onload=function(){var t=b.statusText||"",e="response"in b?b.response:b.responseText,n=1223===b.status?204:b.status;0===n&&(n=e?200:"file"==on(u).protocol?404:0),m(l,n,e,b.getAllResponseHeaders(),t)};var x=function(){m(l,-1,null,null,"")};if(b.onerror=x,b.onabort=x,$&&(b.withCredentials=!0),d)try{b.responseType=d}catch(S){if("json"!==d)throw S}b.send(c||null)}if(h>0)var C=r(v,h);else N(h)&&h.then(v)}}function pe(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(o,a,h,$){function p(n){return n.replace(c,t).replace(l,e)}function d(t){try{return t=T(t),$&&!g(t)?t:M(t)}catch(e){var n=oi("interr","Can't interpolate: {0}\n{1}",o,e.toString());r(n)}}$=!!$;for(var v,y,w,b=0,x=[],C=[],A=o.length,E=[],k=[];A>b;){if(-1==(v=o.indexOf(t,b))||-1==(y=o.indexOf(e,v+s))){b!==A&&E.push(p(o.substring(b)));break}b!==v&&E.push(p(o.substring(b,v))),w=o.substring(v+s,y),x.push(w),C.push(n(w,d)),b=y+u,k.push(E.length),E.push("")}if(h&&E.length>1)throw oi("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",o);if(!a||x.length){var O=function(t){for(var e=0,n=x.length;n>e;e++){if($&&m(t[e]))return;E[k[e]]=t[e]}return E.join("")},T=function(t){return h?i.getTrusted(h,t):i.valueOf(t)},M=function(t){if(null==t)return"";switch(typeof t){case"string":break;case"number":t=""+t;break;default:t=L(t)}return t};return f(function(t){var e=0,n=x.length,i=new Array(n);try{for(;n>e;e++)i[e]=C[e](t);return O(i)}catch(a){var s=oi("interr","Can't interpolate: {0}\n{1}",o,a.toString());r(s)}},{exp:o,expressions:x,$$watchDelegate:function(t,e,n){var r;return t.$watchGroup(C,function(n,i){var o=O(n);S(e)&&e.call(this,o,n!==i?r:o,t),r=o},n)}})}}var s=t.length,u=e.length,c=new RegExp(t.replace(/./g,o),"g"),l=new RegExp(e.replace(/./g,o),"g");return a.startSymbol=function(){return t},a.endSymbol=function(){return e},a}]}function de(){this.$get=["$rootScope","$window","$q","$$q",function(t,e,n,r){function i(i,a,s,u){var c=e.setInterval,l=e.clearInterval,f=0,h=g(u)&&!u,$=(h?r:n).defer(),p=$.promise;return s=g(s)?s:0,p.then(null,null,i),p.$$intervalId=c(function(){$.notify(f++),s>0&&f>=s&&($.resolve(f),l(p.$$intervalId),delete o[p.$$intervalId]),h||t.$apply()},a),o[p.$$intervalId]=$,p}var o={};return i.cancel=function(t){return t&&t.$$intervalId in o?(o[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete o[t.$$intervalId],!0):!1},i}]}function ve(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(t){return 1===t?"one":"other"}}}}function me(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=J(e[n]);return e.join("/")}function ge(t,e){var n=on(t);e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=h(n.port)||si[n.protocol]||null}function ye(t,e){var n="/"!==t.charAt(0);n&&(t="/"+t);var r=on(t);e.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),e.$$search=W(r.search),e.$$hash=decodeURIComponent(r.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function we(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function be(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function xe(t){return t.replace(/(#.+)|#$/,"$1")}function Se(t){return t.substr(0,be(t).lastIndexOf("/")+1)}function Ce(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function Ae(t,e,r){this.$$html5=!0,r=r||"",ge(t,this),this.$$parse=function(t){var n=we(e,t);if(!w(n))throw ui("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e);ye(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=Y(this.$$search),n=this.$$hash?"#"+J(this.$$hash):"";this.$$url=me(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){if(o&&"#"===o[0])return this.hash(o.slice(1)),!0;var a,s,u;return(a=we(t,i))!==n?(s=a,u=(a=we(r,a))!==n?e+(we("/",a)||a):t+s):(a=we(e,i))!==n?u=e+a:e==i+"/"&&(u=e),u&&this.$$parse(u),!!u}}function Ee(t,e,n){ge(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/;return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o,a=we(t,r)||we(e,r);m(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",m(a)&&(t=r,this.replace())):(o=we(n,a),m(o)&&(o=a)),ye(o,this),this.$$path=i(this.$$path,o,t),this.$$compose()},this.$$compose=function(){var e=Y(this.$$search),r=this.$$hash?"#"+J(this.$$hash):"";this.$$url=me(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e,n){return be(t)==be(e)?(this.$$parse(e),!0):!1}}function ke(t,e,n){this.$$html5=!0,Ee.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var o,a;return t==be(r)?o=r:(a=we(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$compose=function(){var e=Y(this.$$search),r=this.$$hash?"#"+J(this.$$hash):"";this.$$url=me(this.$$path)+(e?"?"+e:"")+r,this.$$absUrl=t+n+this.$$url}}function Oe(t){return function(){return this[t]}}function Te(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function Me(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(e){return g(e)?(t=e,this):t},this.html5Mode=function(t){return M(t)?(e.enabled=t,this):y(t)?(M(t.enabled)&&(e.enabled=t.enabled),M(t.requireBase)&&(e.requireBase=t.requireBase),M(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e,n){var i=c.url(),o=c.$$state;try{r.url(t,e,n),c.$$state=r.state()}catch(a){throw c.url(i),c.$$state=o,a}}function u(t,e){n.$broadcast("$locationChangeSuccess",c.absUrl(),t,c.$$state,e)}var c,l,f,h=r.baseHref(),$=r.url();if(e.enabled){if(!h&&e.requireBase)throw ui("nobase","$location in HTML5 mode requires a <base> tag to be present!");f=Ce($)+(h||"/"),l=i.history?Ae:ke}else f=be($),l=Ee;var p=Se(f);c=new l(f,p,"#"+t),c.$$parseLinkUrl($,$),c.$$state=r.state();var d=/^\s*(javascript|mailto):/i;o.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var i=nr(t.target);"a"!==j(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return;var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href");y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=on(s.animVal).href),d.test(s)||!s||i.attr("target")||t.isDefaultPrevented()||c.$$parseLinkUrl(s,u)&&(t.preventDefault(),c.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),xe(c.absUrl())!=xe($)&&r.url(c.absUrl(),!0);var v=!0;return r.onUrlChange(function(t,e){return m(we(p,t))?void(a.location.href=t):(n.$evalAsync(function(){var r,i=c.absUrl(),o=c.$$state;c.$$parse(t),c.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,c.absUrl()===t&&(r?(c.$$parse(i),c.$$state=o,s(i,!1,o)):(v=!1,u(i,o)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var t=xe(r.url()),e=xe(c.absUrl()),o=r.state(),a=c.$$replace,l=t!==e||c.$$html5&&i.history&&o!==c.$$state;(v||l)&&(v=!1,n.$evalAsync(function(){var e=c.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,c.$$state,o).defaultPrevented;c.absUrl()===e&&(r?(c.$$parse(t),c.$$state=o):(l&&s(e,a,o===c.$$state?null:c.$$state),u(t,o)))})),c.$$replace=!1}),c}]}function Ne(){var t=!0,e=this;this.debugEnabled=function(e){return g(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||p,a=!1;try{a=!!i.apply}catch(s){}return a?function(){var t=[];return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function Ve(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw li("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e);return t}function De(t,e){if(t+="",!w(t))throw li("iseccst","Cannot convert object to primitive value! Expression: {0}",e);return t}function je(t,e){if(t){if(t.constructor===t)throw li("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t.window===t)throw li("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw li("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e);if(t===Object)throw li("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function Re(t,e){if(t){if(t.constructor===t)throw li("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t===fi||t===hi||t===$i)throw li("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function Pe(t){return t.constant}function _e(t,e,n,r,i){je(t,i),je(e,i);for(var o,a=n.split("."),s=0;a.length>1;s++){o=Ve(a.shift(),i);var u=0===s&&e&&e[o]||t[o];u||(u={},t[o]=u),t=je(u,i)}return o=Ve(a.shift(),i),je(t[o],i),t[o]=r,r}function Ie(t){return"constructor"==t}function qe(t,e,r,i,o,a,s){Ve(t,a),Ve(e,a),Ve(r,a),Ve(i,a),Ve(o,a);var u=function(t){return je(t,a)},c=s||Ie(t)?u:d,l=s||Ie(e)?u:d,f=s||Ie(r)?u:d,h=s||Ie(i)?u:d,$=s||Ie(o)?u:d;return function(a,s){var u=s&&s.hasOwnProperty(t)?s:a;return null==u?u:(u=c(u[t]),e?null==u?n:(u=l(u[e]),r?null==u?n:(u=f(u[r]),i?null==u?n:(u=h(u[i]),o?null==u?n:u=$(u[o]):u):u):u):u)}}function Ue(t,e){return function(n,r){return t(n,r,je,e)}}function Fe(t,e,r){var i=e.expensiveChecks,a=i?wi:yi,s=a[t];if(s)return s;var u=t.split("."),c=u.length;if(e.csp)s=6>c?qe(u[0],u[1],u[2],u[3],u[4],r,i):function(t,e){var o,a=0;do o=qe(u[a++],u[a++],u[a++],u[a++],u[a++],r,i)(t,e),e=n,t=o;while(c>a);return o};else{var l="";i&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var f=i;o(u,function(t,e){Ve(t,r);var n=(e?"s":'((l&&l.hasOwnProperty("'+t+'"))?l:s)')+"."+t;(i||Ie(t))&&(n="eso("+n+", fe)",f=!0),l+="if(s == null) return undefined;\ns="+n+";\n"}),l+="return s;";var h=new Function("s","l","eso","fe",l);h.toString=v(l),f&&(h=Ue(h,r)),s=h}return s.sharedGetter=!0,s.assign=function(e,n,r){return _e(e,r,t,n,t)},a[t]=s,s}function He(t){return S(t.valueOf)?t.valueOf():bi.call(t)}function Le(){var t=ct(),e=ct();this.$get=["$filter","$sniffer",function(n,r){function i(t){var e=t;return t.sharedGetter&&(e=function(e,n){return t(e,n)},e.literal=t.literal,e.constant=t.constant,e.assign=t.assign),e}function a(t,e){for(var n=0,r=t.length;r>n;n++){var i=t[n];i.constant||(i.inputs?a(i.inputs,e):-1===e.indexOf(i)&&e.push(i))}return e}function s(t,e){return null==t||null==e?t===e:"object"==typeof t&&(t=He(t),"object"==typeof t)?!1:t===e||t!==t&&e!==e}function u(t,e,n,r){var i,o=r.$$inputs||(r.$$inputs=a(r.inputs,[]));if(1===o.length){var u=s;return o=o[0],t.$watch(function(t){var e=o(t);return s(e,u)||(i=r(t),u=e&&He(e)),i},e,n)}for(var c=[],l=0,f=o.length;f>l;l++)c[l]=s;return t.$watch(function(t){for(var e=!1,n=0,a=o.length;a>n;n++){var u=o[n](t);(e||(e=!s(u,c[n])))&&(c[n]=u&&He(u))}return e&&(i=r(t)),i},e,n)}function c(t,e,n,r){var i,o;return i=t.$watch(function(t){return r(t)},function(t,n,r){o=t,S(e)&&e.apply(this,arguments),g(t)&&r.$$postDigest(function(){g(o)&&i()})},n)}function l(t,e,n,r){function i(t){var e=!0;return o(t,function(t){g(t)||(e=!1)}),e}var a,s;return a=t.$watch(function(t){return r(t)},function(t,n,r){s=t,S(e)&&e.call(this,t,n,r),i(t)&&r.$$postDigest(function(){i(s)&&a()})},n)}function f(t,e,n,r){var i;return i=t.$watch(function(t){return r(t)},function(t,n,r){S(e)&&e.apply(this,arguments),i()},n)}function h(t,e){if(!e)return t;var n=t.$$watchDelegate,r=n!==l&&n!==c,i=r?function(n,r){var i=t(n,r);return e(i,n,r)}:function(n,r){var i=t(n,r),o=e(i,n,r);return g(i)?o:i};return t.$$watchDelegate&&t.$$watchDelegate!==u?i.$$watchDelegate=t.$$watchDelegate:e.$stateful||(i.$$watchDelegate=u,i.inputs=[t]),i}var $={csp:r.csp,expensiveChecks:!1},d={csp:r.csp,expensiveChecks:!0};return function(r,o,a){var s,v,m;switch(typeof r){case"string":m=r=r.trim();var g=a?e:t;if(s=g[m],!s){":"===r.charAt(0)&&":"===r.charAt(1)&&(v=!0,r=r.substring(2));var y=a?d:$,w=new mi(y),b=new gi(w,n,y);s=b.parse(r),s.constant?s.$$watchDelegate=f:v?(s=i(s),s.$$watchDelegate=s.literal?l:c):s.inputs&&(s.$$watchDelegate=u),g[m]=s}return h(s,o);case"function":return h(r,o);default:return h(p,o)}}}]}function Be(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return Ge(function(e){t.$evalAsync(e)},e)}]}function ze(){this.$get=["$browser","$exceptionHandler",function(t,e){return Ge(function(e){t.defer(e)},e)}]}function Ge(t,e){function i(t,e,n){function r(e){return function(n){i||(i=!0,e.call(t,n))}}var i=!1;return[r(e),r(n)]}function a(){this.$$state={status:0}}function s(t,e){return function(n){e.call(t,n)}}function u(t){var r,i,o;o=t.pending,t.processScheduled=!1,t.pending=n;for(var a=0,s=o.length;s>a;++a){i=o[a][0],r=o[a][t.status];try{S(r)?i.resolve(r(t.value)):1===t.status?i.resolve(t.value):i.reject(t.value)}catch(u){i.reject(u),e(u)}}}function c(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){u(e)}))}function l(){this.promise=new a,this.resolve=s(this,this.resolve),this.reject=s(this,this.reject),this.notify=s(this,this.notify)}function f(t){var e=new l,n=0,r=$r(t)?[]:{};return o(t,function(t,i){n++,m(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise}var h=r("$q",TypeError),$=function(){return new l};a.prototype={then:function(t,e,n){var r=new l;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&c(this.$$state),r.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return v(e,!0,t)},function(e){return v(e,!1,t)},e)}},l.prototype={resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(h("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){var n,r;r=i(this,this.$$resolve,this.$$reject);try{(y(t)||S(t))&&(n=t&&t.then),S(n)?(this.promise.$$state.status=-1,n.call(t,r[0],r[1],this.notify)):(this.promise.$$state.value=t,this.promise.$$state.status=1,c(this.promise.$$state))}catch(o){r[1](o),e(o)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,c(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending;this.promise.$$state.status<=0&&r&&r.length&&t(function(){for(var t,i,o=0,a=r.length;a>o;o++){i=r[o][0],t=r[o][3];try{i.notify(S(t)?t(n):n)}catch(s){e(s)}}})}};var p=function(t){var e=new l;return e.reject(t),e.promise},d=function(t,e){var n=new l;return e?n.resolve(t):n.reject(t),n.promise},v=function(t,e,n){var r=null;try{S(n)&&(r=n())}catch(i){return d(i,!1)}return N(r)?r.then(function(){return d(t,e)},function(t){return d(t,!1)}):d(t,e)},m=function(t,e,n,r){var i=new l;return i.resolve(t),i.promise.then(e,n,r)},g=function w(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}if(!S(t))throw h("norslvr","Expected resolverFn, got '{0}'",t);if(!(this instanceof w))return new w(t);var r=new l;return t(e,n),r.promise};return g.defer=$,g.reject=p,g.when=m,g.all=f,g}function We(){this.$get=["$window","$timeout",function(t,e){function n(){for(var t=0;t<l.length;t++){var e=l[t];e&&(l[t]=null,e())}c=l.length=0}function r(t){var e=l.length;return c++,l.push(t),0===e&&(u=s(n)),function(){e>=0&&(l[e]=null,e=null,0===--c&&u&&(u(),u=null,l.length=0))}}var i=t.requestAnimationFrame||t.webkitRequestAnimationFrame,o=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,a=!!i,s=a?function(t){var e=i(t);return function(){o(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};r.supported=a;var u,c=0,l=[];return r}]}function Ye(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$id=c(),this.$$ChildScope=null}return e.prototype=t,e}var e=10,n=r("$rootScope"),a=null,s=null;this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,u,l,f){function h(t){t.currentScope.$$destroyed=!0}function $(){this.$id=c(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function d(t){if(C.$$phase)throw n("inprog","{0} already in progress",C.$$phase);C.$$phase=t}function v(){C.$$phase=null}function g(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function w(){}function b(){for(;k.length;)try{k.shift()()}catch(t){u(t)}s=null}function x(){null===s&&(s=f.defer(function(){C.$apply(b)}))}$.prototype={constructor:$,$new:function(e,n){var r;return n=n||this,e?(r=new $,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!=this)&&r.$on("$destroy",h),r},$watch:function(t,e,n){var r=l(t);if(r.$$watchDelegate)return r.$$watchDelegate(this,e,n,r);var i=this,o=i.$$watchers,s={fn:e,last:w,get:r,exp:t,eq:!!n};return a=null,S(e)||(s.fn=p),o||(o=i.$$watchers=[]),o.unshift(s),function(){R(o,s),a=null}},$watchGroup:function(t,e){function n(){u=!1,c?(c=!1,e(i,i,s)):e(i,r,s)}var r=new Array(t.length),i=new Array(t.length),a=[],s=this,u=!1,c=!0;if(!t.length){var l=!0;return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var o=s.$watch(t,function(t,o){i[e]=t,r[e]=o,u||(u=!0,s.$evalAsync(n))});a.push(o)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){o=t;var e,n,r,s,u;if(!m(o)){if(y(o))if(i(o)){a!==$&&(a=$,v=a.length=0,f++),e=o.length,v!==e&&(f++,a.length=v=e);for(var c=0;e>c;c++)u=a[c],s=o[c],r=u!==u&&s!==s,r||u===s||(f++,a[c]=s)}else{a!==p&&(a=p={},v=0,f++),e=0;for(n in o)o.hasOwnProperty(n)&&(e++,s=o[n],u=a[n],n in a?(r=u!==u&&s!==s,r||u===s||(f++,a[n]=s)):(v++,a[n]=s,f++));if(v>e){f++;for(n in a)o.hasOwnProperty(n)||(v--,delete a[n])}}else a!==o&&(a=o,f++);return f;
}}function r(){if(d?(d=!1,e(o,o,u)):e(o,s,u),c)if(y(o))if(i(o)){s=new Array(o.length);for(var t=0;t<o.length;t++)s[t]=o[t]}else{s={};for(var n in o)Kn.call(o,n)&&(s[n]=o[n])}else s=o}n.$stateful=!0;var o,a,s,u=this,c=e.length>1,f=0,h=l(t,n),$=[],p={},d=!0,v=0;return this.$watch(h,r)},$digest:function(){var t,r,i,o,c,l,h,$,p,m,g=e,y=this,x=[];d("$digest"),f.$$checkUrlChange(),this===C&&null!==s&&(f.defer.cancel(s),b()),a=null;do{for(l=!1,$=y;A.length;){try{m=A.shift(),m.scope.$eval(m.expression,m.locals)}catch(k){u(k)}a=null}t:do{if(o=$.$$watchers)for(c=o.length;c--;)try{if(t=o[c])if((r=t.get($))===(i=t.last)||(t.eq?I(r,i):"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))){if(t===a){l=!1;break t}}else l=!0,a=t,t.last=t.eq?P(r,null):r,t.fn(r,i===w?r:i,$),5>g&&(p=4-g,x[p]||(x[p]=[]),x[p].push({msg:S(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:r,oldVal:i}))}catch(k){u(k)}if(!(h=$.$$childHead||$!==y&&$.$$nextSibling))for(;$!==y&&!(h=$.$$nextSibling);)$=$.$parent}while($=h);if((l||A.length)&&!g--)throw v(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",e,x)}while(l||A.length);for(v();E.length;)try{E.shift()()}catch(k){u(k)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;if(this.$broadcast("$destroy"),this.$$destroyed=!0,this!==C){for(var e in this.$$listenerCount)g(this,this.$$listenerCount[e],e);t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=p,this.$on=this.$watch=this.$watchGroup=function(){return p},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(t,e){return l(t)(this,e)},$evalAsync:function(t,e){C.$$phase||A.length||f.defer(function(){A.length&&C.$digest()}),A.push({scope:this,expression:t,locals:e})},$$postDigest:function(t){E.push(t)},$apply:function(t){try{return d("$apply"),this.$eval(t)}catch(e){u(e)}finally{v();try{C.$digest()}catch(e){throw u(e),e}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this;t&&k.push(e),x()},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){var r=n.indexOf(e);-1!==r&&(n[r]=null,g(i,1,t))}},$emit:function(t,e){var n,r,i,o=[],a=this,s=!1,c={name:t,targetScope:a,stopPropagation:function(){s=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=q([c],arguments,1);do{for(n=a.$$listeners[t]||o,c.currentScope=a,r=0,i=n.length;i>r;r++)if(n[r])try{n[r].apply(null,l)}catch(f){u(f)}else n.splice(r,1),r--,i--;if(s)return c.currentScope=null,c;a=a.$parent}while(a);return c.currentScope=null,c},$broadcast:function(t,e){var n=this,r=n,i=n,o={name:t,targetScope:n,preventDefault:function(){o.defaultPrevented=!0},defaultPrevented:!1};if(!n.$$listenerCount[t])return o;for(var a,s,c,l=q([o],arguments,1);r=i;){for(o.currentScope=r,a=r.$$listeners[t]||[],s=0,c=a.length;c>s;s++)if(a[s])try{a[s].apply(null,l)}catch(f){u(f)}else a.splice(s,1),s--,c--;if(!(i=r.$$listenerCount[t]&&r.$$childHead||r!==n&&r.$$nextSibling))for(;r!==n&&!(i=r.$$nextSibling);)r=r.$parent}return o.currentScope=null,o}};var C=new $,A=C.$$asyncQueue=[],E=C.$$postDigestQueue=[],k=C.$$applyAsyncQueue=[];return C}]}function Je(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(e){return g(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return g(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return i=on(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function Ze(t){if("self"===t)return t;if(w(t)){if(t.indexOf("***")>-1)throw xi("iwcard","Illegal sequence *** in string matcher.  String: {0}",t);return t=dr(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(C(t))return new RegExp("^"+t.source+"$");throw xi("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Ke(t){var e=[];return g(t)&&o(t,function(t){e.push(Ze(t))}),e}function Xe(){this.SCE_CONTEXTS=Si;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=Ke(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=Ke(t)),e},this.$get=["$injector",function(r){function i(t,e){return"self"===t?an(e):!!t.exec(e.href)}function o(n){var r,o,a=on(n.toString()),s=!1;for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!0;break}if(s)for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!1;break}return s}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function s(t,e){var r=h.hasOwnProperty(t)?h[t]:null;if(!r)throw xi("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e);if(null===e||e===n||""===e)return e;if("string"!=typeof e)throw xi("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t);return new r(e)}function u(t){return t instanceof f?t.$$unwrapTrustedValue():t}function c(t,e){if(null===e||e===n||""===e)return e;var r=h.hasOwnProperty(t)?h[t]:null;if(r&&e instanceof r)return e.$$unwrapTrustedValue();if(t===Si.RESOURCE_URL){if(o(e))return e;throw xi("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===Si.HTML)return l(e);throw xi("unsafe","Attempting to use an unsafe value in a safe context.")}var l=function(t){throw xi("unsafe","Attempting to use an unsafe value in a safe context.")};r.has("$sanitize")&&(l=r.get("$sanitize"));var f=a(),h={};return h[Si.HTML]=a(f),h[Si.CSS]=a(f),h[Si.URL]=a(f),h[Si.JS]=a(f),h[Si.RESOURCE_URL]=a(h[Si.URL]),{trustAs:s,getTrusted:c,valueOf:u}}]}function Qe(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>er)throw xi("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var r=_(Si);r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=d),r.parseAs=function(t,n){var i=e(n);return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})};var i=r.parseAs,a=r.getTrusted,s=r.trustAs;return o(Si,function(t,e){var n=Zn(e);r[dt("parse_as_"+n)]=function(e){return i(t,e)},r[dt("get_trusted_"+n)]=function(e){return a(t,e)},r[dt("trust_as_"+n)]=function(e){return s(t,e)}}),r}]}function tn(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=h((/android (\d+)/.exec(Zn((t.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((t.navigator||{}).userAgent),s=e[0]||{},u=/^(Moz|webkit|ms)(?=[A-Z])/,c=s.body&&s.body.style,l=!1,f=!1;if(c){for(var $ in c)if(r=u.exec($)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in c&&"webkit"),l=!!("transition"in c||n+"Transition"in c),f=!!("animation"in c||n+"Animation"in c),!o||l&&f||(l=w(s.body.style.webkitTransition),f=w(s.body.style.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>o||a),hasEvent:function(t){if("input"===t&&11>=er)return!1;if(m(i[t])){var e=s.createElement("div");i[t]="on"+t in e}return i[t]},csp:vr(),vendorPrefix:n,transitions:l,animations:f,android:o}}]}function en(){this.$get=["$templateCache","$http","$q","$sce",function(t,e,n,r){function i(o,a){function s(t){if(!a)throw Kr("tpload","Failed to load template: {0}",o);return n.reject(t)}i.totalPendingRequests++,w(o)&&t.get(o)||(o=r.getTrustedResourceUrl(o));var u=e.defaults&&e.defaults.transformResponse;$r(u)?u=u.filter(function(t){return t!==ie}):u===ie&&(u=null);var c={cache:t,transformResponse:u};return e.get(o,c)["finally"](function(){i.totalPendingRequests--}).then(function(t){return t.data},s)}return i.totalPendingRequests=0,i}]}function nn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var r={};return r.findBindings=function(t,e,n){var r=t.getElementsByClassName("ng-binding"),i=[];return o(r,function(t){var r=lr.element(t).data("$binding");r&&o(r,function(r){if(n){var o=new RegExp("(^|\\s)"+dr(e)+"(\\s|\\||$)");o.test(r)&&i.push(t)}else-1!=r.indexOf(e)&&i.push(t)})}),i},r.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',s=t.querySelectorAll(a);if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},r.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},r}]}function rn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){var c,l=g(u)&&!u,f=(l?r:n).defer(),h=f.promise;return c=e.defer(function(){try{f.resolve(o())}catch(e){f.reject(e),i(e)}finally{delete a[h.$$timeoutId]}l||t.$apply()},s),h.$$timeoutId=c,a[c]=f,h}var a={};return o.cancel=function(t){return t&&t.$$timeoutId in a?(a[t.$$timeoutId].reject("canceled"),delete a[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},o}]}function on(t){var e=t;return er&&(Ci.setAttribute("href",e),e=Ci.href),Ci.setAttribute("href",e),{href:Ci.href,protocol:Ci.protocol?Ci.protocol.replace(/:$/,""):"",host:Ci.host,search:Ci.search?Ci.search.replace(/^\?/,""):"",hash:Ci.hash?Ci.hash.replace(/^#/,""):"",hostname:Ci.hostname,port:Ci.port,pathname:"/"===Ci.pathname.charAt(0)?Ci.pathname:"/"+Ci.pathname}}function an(t){var e=w(t)?on(t):t;return e.protocol===Ai.protocol&&e.host===Ai.host}function sn(){this.$get=v(t)}function un(t){function e(r,i){if(y(r)){var a={};return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter";this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",hn),e("date",An),e("filter",cn),e("json",En),e("limitTo",kn),e("lowercase",Mi),e("number",$n),e("orderBy",On),e("uppercase",Ni)}function cn(){return function(t,e,n){if(!$r(t))return t;var r,i,o=null!==e?typeof e:"null";switch(o){case"function":r=e;break;case"boolean":case"null":case"number":case"string":i=!0;case"object":r=ln(e,n,i);break;default:return t}return t.filter(r)}}function ln(t,e,n){var r,i=y(t)&&"$"in t;return e===!0?e=I:S(e)||(e=function(t,e){return m(t)?!1:null===t||null===e?t===e:y(t)||y(e)?!1:(t=Zn(""+t),e=Zn(""+e),-1!==t.indexOf(e))}),r=function(r){return i&&!y(r)?fn(r,t.$,e,!1):fn(r,t,e,n)}}function fn(t,e,n,r,i){var o=null!==t?typeof t:"null",a=null!==e?typeof e:"null";if("string"===a&&"!"===e.charAt(0))return!fn(t,e.substring(1),n,r);if($r(t))return t.some(function(t){return fn(t,e,n,r)});switch(o){case"object":var s;if(r){for(s in t)if("$"!==s.charAt(0)&&fn(t[s],e,n,!0))return!0;return i?!1:fn(t,e,n,!1)}if("object"===a){for(s in e){var u=e[s];if(!S(u)&&!m(u)){var c="$"===s,l=c?t:t[s];if(!fn(l,u,n,c,c))return!1}}return!0}return n(t,e);case"function":return!1;default:return n(t,e)}}function hn(t){var e=t.NUMBER_FORMATS;return function(t,n,r){return m(n)&&(n=e.CURRENCY_SYM),m(r)&&(r=e.PATTERNS[1].maxFrac),null==t?t:pn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function $n(t){var e=t.NUMBER_FORMATS;return function(t,n){return null==t?t:pn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function pn(t,e,n,r,i){if(!isFinite(t)||y(t))return"";var o=0>t;t=Math.abs(t);var a=t+"",s="",u=[],c=!1;if(-1!==a.indexOf("e")){var l=a.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>i+1?t=0:(s=a,c=!0)}if(c)i>0&&1>t&&(s=t.toFixed(i),t=parseFloat(s));else{var f=(a.split(Ei)[1]||"").length;m(i)&&(i=Math.min(Math.max(e.minFrac,f),e.maxFrac)),t=+(Math.round(+(t.toString()+"e"+i)).toString()+"e"+-i);var h=(""+t).split(Ei),$=h[0];h=h[1]||"";var p,d=0,v=e.lgSize,g=e.gSize;if($.length>=v+g)for(d=$.length-v,p=0;d>p;p++)(d-p)%g===0&&0!==p&&(s+=n),s+=$.charAt(p);for(p=d;p<$.length;p++)($.length-p)%v===0&&0!==p&&(s+=n),s+=$.charAt(p);for(;h.length<i;)h+="0";i&&"0"!==i&&(s+=r+h.substr(0,i))}return 0===t&&(o=!1),u.push(o?e.negPre:e.posPre,s,o?e.negSuf:e.posSuf),u.join("")}function dn(t,e,n){var r="";for(0>t&&(r="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),r+t}function vn(t,e,n,r){return n=n||0,function(i){var o=i["get"+t]();return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),dn(o,e,r)}}function mn(t,e){return function(n,r){var i=n["get"+t](),o=Xn(e?"SHORT"+t:t);return r[o][i]}}function gn(t){var e=-1*t.getTimezoneOffset(),n=e>=0?"+":"";return n+=dn(Math[e>0?"floor":"ceil"](e/60),2)+dn(Math.abs(e%60),2)}function yn(t){var e=new Date(t,0,1).getDay();return new Date(t,0,(4>=e?5:12)-e)}function wn(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function bn(t){return function(e){var n=yn(e.getFullYear()),r=wn(e),i=+r-+n,o=1+Math.round(i/6048e5);return dn(o,t)}}function xn(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function Sn(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function Cn(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function An(t){function e(t){var e;if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours;e[9]&&(i=h(e[9]+e[10]),o=h(e[9]+e[11])),a.call(r,h(e[1]),h(e[2])-1,h(e[3]));var u=h(e[4]||0)-i,c=h(e[5]||0)-o,l=h(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)));return s.call(r,u,c,l,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r,i){var a,s,u="",c=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,w(n)&&(n=Ti.test(n)?h(n):e(n)),b(n)&&(n=new Date(n)),!x(n))return n;for(;r;)s=Oi.exec(r),s?(c=q(c,s,1),r=c.pop()):(c.push(r),r=null);return i&&"UTC"===i&&(n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+n.getTimezoneOffset())),o(c,function(e){a=ki[e],u+=a?a(n,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function En(){return function(t,e){return m(e)&&(e=2),L(t,e)}}function kn(){return function(t,e){return b(t)&&(t=t.toString()),$r(t)||w(t)?(e=Math.abs(Number(e))===1/0?Number(e):h(e),e?e>0?t.slice(0,e):t.slice(e):w(t)?"":[]):t}}function On(t){return function(e,n,r){function o(t,e){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(0!==i)return i}return 0}function a(t,e){return e?function(e,n){return t(n,e)}:t}function s(t){switch(typeof t){case"number":case"boolean":case"string":return!0;default:return!1}}function u(t){return null===t?"null":"function"==typeof t.valueOf&&(t=t.valueOf(),s(t))?t:"function"==typeof t.toString&&(t=t.toString(),s(t))?t:""}function c(t,e){var n=typeof t,r=typeof e;return n===r&&"object"===n&&(t=u(t),e=u(e)),n===r?("string"===n&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e?0:e>t?-1:1):r>n?-1:1}return i(e)?(n=$r(n)?n:[n],0===n.length&&(n=["+"]),n=n.map(function(e){var n=!1,r=e||d;if(w(e)){if(("+"==e.charAt(0)||"-"==e.charAt(0))&&(n="-"==e.charAt(0),e=e.substring(1)),""===e)return a(c,n);if(r=t(e),r.constant){var i=r();return a(function(t,e){return c(t[i],e[i])},n)}}return a(function(t,e){return c(r(t),r(e))},n)}),or.call(e).sort(a(o,r))):e}}function Tn(t){return S(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function Mn(t,e){t.$name=e}function Nn(t,e,r,i,a){var s=this,u=[],c=s.$$parentForm=t.parent().controller("form")||ji;s.$error={},s.$$success={},s.$pending=n,s.$name=a(e.name||e.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,c.$addControl(s),s.$rollbackViewValue=function(){o(u,function(t){t.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(t){t.$commitViewValue()})},s.$addControl=function(t){at(t.$name,"input"),u.push(t),t.$name&&(s[t.$name]=t)},s.$$renameControl=function(t,e){var n=t.$name;s[n]===t&&delete s[n],s[e]=t,t.$name=e},s.$removeControl=function(t){t.$name&&s[t.$name]===t&&delete s[t.$name],o(s.$pending,function(e,n){s.$setValidity(n,null,t)}),o(s.$error,function(e,n){s.$setValidity(n,null,t)}),o(s.$$success,function(e,n){s.$setValidity(n,null,t)}),R(u,t)},Gn({ctrl:this,$element:t,set:function(t,e,n){var r=t[e];if(r){var i=r.indexOf(n);-1===i&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e];r&&(R(r,n),0===r.length&&delete t[e])},parentForm:c,$animate:i}),s.$setDirty=function(){i.removeClass(t,mo),i.addClass(t,go),s.$dirty=!0,s.$pristine=!1,c.$setDirty()},s.$setPristine=function(){i.setClass(t,mo,go+" "+Ri),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(t){t.$setPristine()})},s.$setUntouched=function(){o(u,function(t){t.$setUntouched()})},s.$setSubmitted=function(){i.addClass(t,Ri),s.$submitted=!0,c.$setSubmitted()}}function Vn(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function Dn(t,e,n,r,i,o){jn(t,e,n,r,i,o),Vn(r)}function jn(t,e,n,r,i,o){var a=Zn(e[0].type);if(!i.android){var s=!1;e.on("compositionstart",function(t){s=!0}),e.on("compositionend",function(){s=!1,u()})}var u=function(t){if(c&&(o.defer.cancel(c),c=null),!s){var i=e.val(),u=t&&t.type;"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=pr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,u)}};if(i.hasEvent("input"))e.on("input",u);else{var c,l=function(t,e,n){c||(c=o.defer(function(){c=null,e&&e.value===n||u(t)}))};e.on("keydown",function(t){var e=t.keyCode;91===e||e>15&&19>e||e>=37&&40>=e||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut",l)}e.on("change",u),r.$render=function(){e.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function Rn(t,e){if(x(t))return t;if(w(t)){zi.lastIndex=0;var n=zi.exec(t);if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=yn(r),l=7*(i-1);return e&&(o=e.getHours(),a=e.getMinutes(),s=e.getSeconds(),u=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN}function Pn(t,e){return function(n,r){var i,a;if(x(n))return n;if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),qi.test(n))return new Date(n);if(t.lastIndex=0,i=t.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function _n(t,e,r,i){return function(o,a,s,u,c,l,f){function h(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function $(t){return g(t)?x(t)?t:r(t):n}In(o,a,s,u),jn(o,a,s,u,c,l);var p,d=u&&u.$options&&u.$options.timezone;if(u.$$parserName=t,u.$parsers.push(function(t){if(u.$isEmpty(t))return null;if(e.test(t)){var i=r(t,p);return"UTC"===d&&i.setMinutes(i.getMinutes()-i.getTimezoneOffset()),i}return n}),u.$formatters.push(function(t){if(t&&!x(t))throw xo("datefmt","Expected `{0}` to be a date",t);if(h(t)){if(p=t,p&&"UTC"===d){var e=6e4*p.getTimezoneOffset();p=new Date(p.getTime()+e)}return f("date")(t,i,d)}return p=null,""}),g(s.min)||s.ngMin){var v;u.$validators.min=function(t){return!h(t)||m(v)||r(t)>=v},s.$observe("min",function(t){v=$(t),u.$validate()})}if(g(s.max)||s.ngMax){var y;u.$validators.max=function(t){return!h(t)||m(y)||r(t)<=y},s.$observe("max",function(t){y=$(t),u.$validate()})}}}function In(t,e,r,i){var o=e[0],a=i.$$hasNativeValidators=y(o.validity);a&&i.$parsers.push(function(t){var r=e.prop(Jn)||{};return r.badInput&&!r.typeMismatch?n:t})}function qn(t,e,r,i,o,a){if(In(t,e,r,i),jn(t,e,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(t){return i.$isEmpty(t)?null:Hi.test(t)?parseFloat(t):n}),i.$formatters.push(function(t){if(!i.$isEmpty(t)){if(!b(t))throw xo("numfmt","Expected `{0}` to be a number",t);t=t.toString()}return t}),g(r.min)||r.ngMin){var s;i.$validators.min=function(t){return i.$isEmpty(t)||m(s)||t>=s},r.$observe("min",function(t){g(t)&&!b(t)&&(t=parseFloat(t,10)),s=b(t)&&!isNaN(t)?t:n,i.$validate()})}if(g(r.max)||r.ngMax){var u;i.$validators.max=function(t){return i.$isEmpty(t)||m(u)||u>=t},r.$observe("max",function(t){g(t)&&!b(t)&&(t=parseFloat(t,10)),u=b(t)&&!isNaN(t)?t:n,i.$validate()})}}function Un(t,e,n,r,i,o){jn(t,e,n,r,i,o),Vn(r),r.$$parserName="url",r.$validators.url=function(t,e){var n=t||e;return r.$isEmpty(n)||Ui.test(n)}}function Fn(t,e,n,r,i,o){jn(t,e,n,r,i,o),Vn(r),r.$$parserName="email",r.$validators.email=function(t,e){var n=t||e;return r.$isEmpty(n)||Fi.test(n)}}function Hn(t,e,n,r){m(n.name)&&e.attr("name",c());var i=function(t){e[0].checked&&r.$setViewValue(n.value,t&&t.type)};e.on("click",i),r.$render=function(){var t=n.value;e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function Ln(t,e,n,r,i){var o;if(g(r)){if(o=t(r),!o.constant)throw xo("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r);return o(e)}return i}function Bn(t,e,n,r,i,o,a,s){var u=Ln(s,t,"ngTrueValue",n.ngTrueValue,!0),c=Ln(s,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)};e.on("click",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return I(t,u)}),r.$parsers.push(function(t){return t?u:c})}function zn(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[];t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function i(t){if($r(t))return t;if(w(t))return t.split(" ");if(y(t)){var e=[];return o(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e}return t}return{restrict:"AC",link:function(a,s,u){function c(t){var e=f(t,1);u.$addClass(e)}function l(t){var e=f(t,-1);u.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||{},r=[];return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function h(t,e){var i=r(e,t),o=r(t,e);i=f(i,1),o=f(o,-1),i&&i.length&&n.addClass(s,i),o&&o.length&&n.removeClass(s,o)}function $(t){if(e===!0||a.$index%2===e){var n=i(t||[]);if(p){if(!I(t,p)){var r=i(p);h(r,n)}}else c(n)}p=_(t)}var p;a.$watch(u[t],$,!0),u.$observe("class",function(e){$(a.$eval(u[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n;if(o!==(1&r)){var s=i(a.$eval(u[t]));o===e?c(s):l(s)}})}}}]}function Gn(t){function e(t,e,u){e===n?r("$pending",t,u):i("$pending",t,u),M(e)?e?(f(s.$error,t,u),l(s.$$success,t,u)):(l(s.$error,t,u),f(s.$$success,t,u)):(f(s.$error,t,u),f(s.$$success,t,u)),s.$pending?(o(bo,!0),s.$valid=s.$invalid=n,a("",null)):(o(bo,!1),s.$valid=Wn(s.$error),s.$invalid=!s.$valid,a("",s.$valid));var c;c=s.$pending&&s.$pending[t]?n:s.$error[t]?!1:s.$$success[t]?!0:null,a(t,c),h.$setValidity(t,c,s)}function r(t,e,n){s[t]||(s[t]={}),l(s[t],e,n)}function i(t,e,r){s[t]&&f(s[t],e,r),Wn(s[t])&&(s[t]=n)}function o(t,e){e&&!c[t]?($.addClass(u,t),c[t]=!0):!e&&c[t]&&($.removeClass(u,t),c[t]=!1)}function a(t,e){t=t?"-"+nt(t,"-"):"",o(po+t,e===!0),o(vo+t,e===!1)}var s=t.ctrl,u=t.$element,c={},l=t.set,f=t.unset,h=t.parentForm,$=t.$animate;c[vo]=!(c[po]=u.hasClass(po)),s.$setValidity=e}function Wn(t){if(t)for(var e in t)return!1;return!0}var Yn=/^\/(.+)\/([a-z]*)$/,Jn="validity",Zn=function(t){return w(t)?t.toLowerCase():t},Kn=Object.prototype.hasOwnProperty,Xn=function(t){return w(t)?t.toUpperCase():t},Qn=function(t){return w(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},tr=function(t){return w(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t};"i"!=="I".toLowerCase()&&(Zn=Qn,Xn=tr);var er,nr,rr,ir,or=[].slice,ar=[].splice,sr=[].push,ur=Object.prototype.toString,cr=r("ng"),lr=t.angular||(t.angular={}),fr=0;er=e.documentMode,p.$inject=[],d.$inject=[];var hr,$r=Array.isArray,pr=function(t){return w(t)?t.trim():t},dr=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},vr=function(){if(g(vr.isActive_))return vr.isActive_;var t=!(!e.querySelector("[ng-csp]")&&!e.querySelector("[data-ng-csp]"));if(!t)try{new Function("")}catch(n){t=!0}return vr.isActive_=t},mr=["ng-","data-ng-","ng:","x-ng-"],gr=/[A-Z]/g,yr=!1,wr=1,br=2,xr=3,Sr=8,Cr=9,Ar=11,Er={full:"1.3.20",major:1,minor:3,dot:20,codeName:"shallow-translucence"};wt.expando="ng339";var kr=wt.cache={},Or=1,Tr=function(t,e,n){t.addEventListener(e,n,!1)},Mr=function(t,e,n){t.removeEventListener(e,n,!1)};wt._data=function(t){return this.cache[t[this.expando]]||{}};var Nr=/([\:\-\_]+(.))/g,Vr=/^moz([A-Z])/,Dr={mouseleave:"mouseout",mouseenter:"mouseover"},jr=r("jqLite"),Rr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Pr=/<|&#?\w+;/,_r=/<([\w:]+)/,Ir=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,qr={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qr.optgroup=qr.option,qr.tbody=qr.tfoot=qr.colgroup=qr.caption=qr.thead,qr.th=qr.td;var Ur=wt.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1;"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),wt(t).on("load",r))},toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return nr(t>=0?this[t]:this[this.length+t])},length:0,push:sr,sort:[].sort,splice:[].splice},Fr={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){Fr[Zn(t)]=t});var Hr={};o("input,select,option,textarea,button,form,details".split(","),function(t){Hr[t]=!0});var Lr={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};o({data:Et,removeData:Ct},function(t,e){wt[e]=t}),o({data:Et,inheritedData:Vt,scope:function(t){return nr.data(t,"$scope")||Vt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return nr.data(t,"$isolateScope")||nr.data(t,"$isolateScopeNoTemplate")},controller:Nt,injector:function(t){return Vt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:kt,css:function(t,e,n){return e=dt(e),g(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,r){var i=t.nodeType;if(i!==xr&&i!==br&&i!==Sr){var o=Zn(e);if(Fr[o]){if(!g(r))return t[e]||(t.attributes.getNamedItem(e)||p).specified?o:n;r?(t[e]=!0,t.setAttribute(e,o)):(t[e]=!1,t.removeAttribute(o))}else if(g(r))t.setAttribute(e,r);else if(t.getAttribute){var a=t.getAttribute(e,2);return null===a?n:a}}},prop:function(t,e,n){return g(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(m(e)){var n=t.nodeType;return n===wr||n===xr?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(m(e)){if(t.multiple&&"select"===j(t)){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return m(e)?t.innerHTML:(xt(t,!0),void(t.innerHTML=e))},empty:Dt},function(t,e){wt.prototype[e]=function(e,r){var i,o,a=this.length;if(t!==Dt&&(2==t.length&&t!==kt&&t!==Nt?e:r)===n){if(y(e)){for(i=0;a>i;i++)if(t===Et)t(this[i],e);else for(o in e)t(this[i],o,e[o]);return this}for(var s=t.$dv,u=s===n?Math.min(a,1):a,c=0;u>c;c++){var l=t(this[c],e,r);s=s?s+l:l}return s}for(i=0;a>i;i++)t(this[i],e,r);return this}}),o({removeData:Ct,on:function Jo(t,e,n,r){if(g(r))throw jr("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(mt(t)){var i=At(t,!0),o=i.events,a=i.handle;a||(a=i.handle=It(t,o));for(var s=e.indexOf(" ")>=0?e.split(" "):[e],u=s.length;u--;){e=s[u];var c=o[e];c||(o[e]=[],"mouseenter"===e||"mouseleave"===e?Jo(t,Dr[e],function(t){var n=this,r=t.relatedTarget;(!r||r!==n&&!n.contains(r))&&a(t,e)}):"$destroy"!==e&&Tr(t,e,a),c=o[e]),c.push(n)}}},off:St,one:function(t,e,n){t=nr(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;xt(t),o(new wt(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){t.nodeType===wr&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType;if(n===wr||n===Ar){e=new wt(e);for(var r=0,i=e.length;i>r;r++){var o=e[r];t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===wr){var n=t.firstChild;o(new wt(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=nr(e).eq(0).clone()[0];var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)},remove:jt,detach:function(t){jt(t,!0)},after:function(t,e){var n=t,r=t.parentNode;e=new wt(e);for(var i=0,o=e.length;o>i;i++){var a=e[i];r.insertBefore(a,n.nextSibling),n=a}},addClass:Tt,removeClass:Ot,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;m(r)&&(r=!kt(t,e)),(r?Tt:Ot)(t,e)})},parent:function(t){var e=t.parentNode;return e&&e.nodeType!==Ar?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:bt,triggerHandler:function(t,e,n){var r,i,a,s=e.type||e,u=At(t),c=u&&u.events,l=c&&c[s];l&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:p,type:s,target:t},e.type&&(r=f(r,e)),i=_(l),a=n?[r].concat(n):[r],o(i,function(e){r.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){wt.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;a>o;o++)m(i)?(i=t(this[o],e,n,r),g(i)&&(i=nr(i))):Mt(i,t(this[o],e,n,r));return g(i)?i:this},wt.prototype.bind=wt.prototype.on,wt.prototype.unbind=wt.prototype.off}),Ft.prototype={put:function(t,e){this[Ut(t,this.nextUid)]=e},get:function(t){return this[Ut(t,this.nextUid)]},remove:function(t){var e=this[t=Ut(t,this.nextUid)];return delete this[t],e}};var Br=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,zr=/,/,Gr=/^\s*(_?)(\S+?)\1\s*$/,Wr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Yr=r("$injector");Bt.$$annotate=Lt;var Jr=r("$animate"),Zr=["$provide",function(t){this.$$selectors={},this.register=function(e,n){var r=e+"-animation";if(e&&"."!=e.charAt(0))throw Jr("notcsel","Expecting class selector starting with '.' got '{0}'.",e);this.$$selectors[e.substr(1)]=r,t.factory(r,n)},this.classNameFilter=function(t){return 1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(t,e,n){function r(e){var r,i=t.defer();return i.promise.$$cancelFn=function(){r&&r()},n.$$postDigest(function(){r=e(function(){i.resolve()})}),i.promise}function i(t,e){var n=[],r=[],i=ct();return o((t.attr("class")||"").split(/\s+/),function(t){i[t]=!0}),o(e,function(t,e){var o=i[e];t===!1&&o?r.push(e):t!==!0||o||n.push(e)}),n.length+r.length>0&&[n.length?n:null,r.length?r:null]}function a(t,e,n){for(var r=0,i=e.length;i>r;++r){var o=e[r];t[o]=n}}function s(){return c||(c=t.defer(),e(function(){c.resolve(),c=null})),c.promise}function u(t,e){if(lr.isObject(e)){var n=f(e.from||{},e.to||{});t.css(n)}}var c;return{animate:function(t,e,n){return u(t,{from:e,to:n}),s()},enter:function(t,e,n,r){return u(t,r),n?n.after(t):e.prepend(t),s()},leave:function(t,e){return u(t,e),t.remove(),s()},move:function(t,e,n,r){return this.enter(t,e,n,r)},addClass:function(t,e,n){return this.setClass(t,e,[],n)},$$addClassImmediately:function(t,e,n){return t=nr(t),e=w(e)?e:$r(e)?e.join(" "):"",o(t,function(t){Tt(t,e)}),u(t,n),s()},removeClass:function(t,e,n){return this.setClass(t,[],e,n);
},$$removeClassImmediately:function(t,e,n){return t=nr(t),e=w(e)?e:$r(e)?e.join(" "):"",o(t,function(t){Ot(t,e)}),u(t,n),s()},setClass:function(t,e,n,o){var s=this,u="$$animateClasses",c=!1;t=nr(t);var l=t.data(u);l?o&&l.options&&(l.options=lr.extend(l.options||{},o)):(l={classes:{},options:o},c=!0);var f=l.classes;return e=$r(e)?e:e.split(" "),n=$r(n)?n:n.split(" "),a(f,e,!0),a(f,n,!1),c&&(l.promise=r(function(e){var n=t.data(u);if(t.removeData(u),n){var r=i(t,n.classes);r&&s.$$setClassImmediately(t,r[0],r[1],n.options)}e()}),t.data(u,l)),l.promise},$$setClassImmediately:function(t,e,n,r){return e&&this.$$addClassImmediately(t,e),n&&this.$$removeClassImmediately(t,n),u(t,r),s()},enabled:p,cancel:p}}]}],Kr=r("$compile");Kt.$inject=["$provide","$$sanitizeUriProvider"];var Xr=/^((?:x|data)[\:\-_])/i,Qr=r("$controller"),ti="application/json",ei={"Content-Type":ti+";charset=utf-8"},ni=/^\[|^\{(?!\{)/,ri={"[":/]$/,"{":/}$/},ii=/^\)\]\}',?\n/,oi=r("$interpolate"),ai=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,si={http:80,https:443,ftp:21},ui=r("$location"),ci={$$html5:!1,$$replace:!1,absUrl:Oe("$$absUrl"),url:function(t){if(m(t))return this.$$url;var e=ai.exec(t);return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Oe("$$protocol"),host:Oe("$$host"),port:Oe("$$port"),path:Te("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(w(t)||b(t))t=t.toString(),this.$$search=W(t);else{if(!y(t))throw ui("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");t=P(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Te("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}};o([ke,Ee,Ae],function(t){t.prototype=Object.create(ci),t.prototype.state=function(e){if(!arguments.length)return this.$$state;if(t!==Ae||!this.$$html5)throw ui("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");return this.$$state=m(e)?null:e,this}});var li=r("$parse"),fi=Function.prototype.call,hi=Function.prototype.apply,$i=Function.prototype.bind,pi=ct();o({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(t,e){t.constant=t.literal=t.sharedGetter=!0,pi[e]=t}),pi["this"]=function(t){return t},pi["this"].sharedGetter=!0;var di=f(ct(),{"+":function(t,e,r,i){return r=r(t,e),i=i(t,e),g(r)?g(i)?r+i:r:g(i)?i:n},"-":function(t,e,n,r){return n=n(t,e),r=r(t,e),(g(n)?n:0)-(g(r)?r:0)},"*":function(t,e,n,r){return n(t,e)*r(t,e)},"/":function(t,e,n,r){return n(t,e)/r(t,e)},"%":function(t,e,n,r){return n(t,e)%r(t,e)},"===":function(t,e,n,r){return n(t,e)===r(t,e)},"!==":function(t,e,n,r){return n(t,e)!==r(t,e)},"==":function(t,e,n,r){return n(t,e)==r(t,e)},"!=":function(t,e,n,r){return n(t,e)!=r(t,e)},"<":function(t,e,n,r){return n(t,e)<r(t,e)},">":function(t,e,n,r){return n(t,e)>r(t,e)},"<=":function(t,e,n,r){return n(t,e)<=r(t,e)},">=":function(t,e,n,r){return n(t,e)>=r(t,e)},"&&":function(t,e,n,r){return n(t,e)&&r(t,e)},"||":function(t,e,n,r){return n(t,e)||r(t,e)},"!":function(t,e,n){return!n(t,e)},"=":!0,"|":!0}),vi={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},mi=function(t){this.options=t};mi.prototype={constructor:mi,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index);if('"'===e||"'"===e)this.readString(e);else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(e))this.readIdent();else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++;else if(this.isWhitespace(e))this.index++;else{var n=e+this.peek(),r=n+this.peek(2),i=di[e],o=di[n],a=di[r];if(i||o||a){var s=a?r:o?n:e;this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){var e=t||1;return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||""===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index;var r=g(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n;throw li("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Zn(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index);if(!this.isIdent(e)&&!this.isNumber(e))break;this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=vi[o];n+=s||o}i=!1}else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var gi=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n};gi.ZERO=f(function(){return 0},{sharedGetter:!0,constant:!0}),gi.prototype={constructor:gi,parse:function(t){this.text=t,this.tokens=this.lexer.lex(t);var e=this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e.literal=!!e.literal,e.constant=!!e.constant,e},primary:function(){var t;this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.peek().identifier&&this.peek().text in pi?t=pi[this.consume().text]:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek());for(var e,n;e=this.expect("(","[",".");)"("===e.text?(t=this.functionCall(t,n),n=null):"["===e.text?(n=t,t=this.objectIndex(t)):"."===e.text?(n=t,t=this.fieldAccess(t)):this.throwError("IMPOSSIBLE");return t},throwError:function(t,e){throw li("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},peekToken:function(){if(0===this.tokens.length)throw li("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text;if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r);return i?(this.tokens.shift(),i):!1},consume:function(t){if(0===this.tokens.length)throw li("ueoe","Unexpected end of expression: {0}",this.text);var e=this.expect(t);return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},unaryFn:function(t,e){var n=di[t];return f(function(t,r){return n(t,r,e)},{constant:e.constant,inputs:[e]})},binaryFn:function(t,e,n,r){var i=di[e];return f(function(e,r){return i(e,r,t,n)},{constant:t.constant&&n.constant,inputs:!r&&[t,n]})},identifier:function(){for(var t=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)t+=this.consume().text+this.consume().text;return Fe(t,this.options,this.text)},constant:function(){var t=this.consume().value;return f(function(){return t},{constant:!0,literal:!0})},statements:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.filterChain()),!this.expect(";"))return 1===t.length?t[0]:function(e,n){for(var r,i=0,o=t.length;o>i;i++)r=t[i](e,n);return r}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e);return e},filter:function(t){var e,r,i=this.$filter(this.consume().text);if(this.peek(":"))for(e=[],r=[];this.expect(":");)e.push(this.expression());var o=[t].concat(e||[]);return f(function(o,a){var s=t(o,a);if(r){r[0]=s;for(var u=e.length;u--;)r[u+1]=e[u](o,a);return i.apply(n,r)}return i(s)},{constant:!i.$stateful&&o.every(Pe),inputs:!i.$stateful&&o})},expression:function(){return this.assignment()},assignment:function(){var t,e,n=this.ternary();return(e=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,e.index)+"] can not be assigned to",e),t=this.ternary(),f(function(e,r){return n.assign(e,t(e,r),r)},{inputs:[n,t]})):n},ternary:function(){var t,e,n=this.logicalOR();if((e=this.expect("?"))&&(t=this.assignment(),this.consume(":"))){var r=this.assignment();return f(function(e,i){return n(e,i)?t(e,i):r(e,i)},{constant:n.constant&&t.constant&&r.constant})}return n},logicalOR:function(){for(var t,e=this.logicalAND();t=this.expect("||");)e=this.binaryFn(e,t.text,this.logicalAND(),!0);return e},logicalAND:function(){for(var t,e=this.equality();t=this.expect("&&");)e=this.binaryFn(e,t.text,this.equality(),!0);return e},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e=this.binaryFn(e,t.text,this.relational());return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e=this.binaryFn(e,t.text,this.additive());return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e=this.binaryFn(e,t.text,this.multiplicative());return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e=this.binaryFn(e,t.text,this.unary());return e},unary:function(){var t;return this.expect("+")?this.primary():(t=this.expect("-"))?this.binaryFn(gi.ZERO,t.text,this.unary()):(t=this.expect("!"))?this.unaryFn(t.text,this.unary()):this.primary()},fieldAccess:function(t){var e=this.identifier();return f(function(r,i,o){var a=o||t(r,i);return null==a?n:e(a)},{assign:function(n,r,i){var o=t(n,i);return o||t.assign(n,o={},i),e.assign(o,r)}})},objectIndex:function(t){var e=this.text,r=this.expression();return this.consume("]"),f(function(i,o){var a,s=t(i,o),u=De(r(i,o),e);return Ve(u,e),s?a=je(s[u],e):n},{assign:function(n,i,o){var a=Ve(De(r(n,o),e),e),s=je(t(n,o),e);return s||t.assign(n,s={},o),s[a]=i}})},functionCall:function(t,e){var r=[];if(")"!==this.peekToken().text)do r.push(this.expression());while(this.expect(","));this.consume(")");var i=this.text,o=r.length?[]:null;return function(a,s){var u=e?e(a,s):g(e)?n:a,c=t(a,s,u)||p;if(o)for(var l=r.length;l--;)o[l]=je(r[l](a,s),i);je(u,i),Re(c,i);var f=c.apply?c.apply(u,o):c(o[0],o[1],o[2],o[3],o[4]);return o&&(o.length=0),je(f,i)}},arrayDeclaration:function(){var t=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;t.push(this.expression())}while(this.expect(","));return this.consume("]"),f(function(e,n){for(var r=[],i=0,o=t.length;o>i;i++)r.push(t[i](e,n));return r},{literal:!0,constant:t.every(Pe),inputs:t})},object:function(){var t=[],e=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var n=this.consume();n.constant?t.push(n.value):n.identifier?t.push(n.text):this.throwError("invalid key",n),this.consume(":"),e.push(this.expression())}while(this.expect(","));return this.consume("}"),f(function(n,r){for(var i={},o=0,a=e.length;a>o;o++)i[t[o]]=e[o](n,r);return i},{literal:!0,constant:e.every(Pe),inputs:e})}};var yi=ct(),wi=ct(),bi=Object.prototype.valueOf,xi=r("$sce"),Si={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Kr=r("$compile"),Ci=e.createElement("a"),Ai=on(t.location.href);un.$inject=["$provide"],hn.$inject=["$locale"],$n.$inject=["$locale"];var Ei=".",ki={yyyy:vn("FullYear",4),yy:vn("FullYear",2,0,!0),y:vn("FullYear",1),MMMM:mn("Month"),MMM:mn("Month",!0),MM:vn("Month",2,1),M:vn("Month",1,1),dd:vn("Date",2),d:vn("Date",1),HH:vn("Hours",2),H:vn("Hours",1),hh:vn("Hours",2,-12),h:vn("Hours",1,-12),mm:vn("Minutes",2),m:vn("Minutes",1),ss:vn("Seconds",2),s:vn("Seconds",1),sss:vn("Milliseconds",3),EEEE:mn("Day"),EEE:mn("Day",!0),a:xn,Z:gn,ww:bn(2),w:bn(1),G:Sn,GG:Sn,GGG:Sn,GGGG:Cn},Oi=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Ti=/^\-?\d+$/;An.$inject=["$locale"];var Mi=v(Zn),Ni=v(Xn);On.$inject=["$parse"];var Vi=v({restrict:"E",compile:function(t,e){return e.href||e.xlinkHref||e.name?void 0:function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===ur.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Di={};o(Fr,function(t,e){if("multiple"!=t){var n=Xt("ng-"+e);Di[n]=function(){return{restrict:"A",priority:100,link:function(t,r,i){t.$watch(i[n],function(t){i.$set(e,!!t)})}}}}}),o(Lr,function(t,e){Di[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(Yn);if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=Xt("ng-"+t);Di[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===ur.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(e){return e?(i.$set(a,e),void(er&&o&&r.prop(o,i[a]))):void("href"===t&&i.$set(a,null))})}}}});var ji={$addControl:p,$$renameControl:Mn,$removeControl:p,$setValidity:p,$setDirty:p,$setPristine:p,$setSubmitted:p},Ri="ng-submitted";Nn.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Pi=function(t){return["$timeout",function(e){var r={name:"form",restrict:t?"EAC":"E",controller:Nn,compile:function(r,i){r.addClass(mo).addClass(po);var o=i.name?"name":t&&i.ngForm?"ngForm":!1;return{pre:function(t,r,i,a){if(!("action"in i)){var s=function(e){t.$apply(function(){a.$commitViewValue(),a.$setSubmitted()}),e.preventDefault()};Tr(r[0],"submit",s),r.on("$destroy",function(){e(function(){Mr(r[0],"submit",s)},0,!1)})}var u=a.$$parentForm;o&&(_e(t,null,a.$name,a,a.$name),i.$observe(o,function(e){a.$name!==e&&(_e(t,null,a.$name,n,a.$name),u.$$renameControl(a,e),_e(t,null,a.$name,a,a.$name))})),r.on("$destroy",function(){u.$removeControl(a),o&&_e(t,null,i[o],n,a.$name),f(a,ji)})}}}};return r}]},_i=Pi(),Ii=Pi(!0),qi=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Ui=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Fi=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Hi=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Li=/^(\d{4})-(\d{2})-(\d{2})$/,Bi=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,zi=/^(\d{4})-W(\d\d)$/,Gi=/^(\d{4})-(\d\d)$/,Wi=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yi={text:Dn,date:_n("date",Li,Pn(Li,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":_n("datetimelocal",Bi,Pn(Bi,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:_n("time",Wi,Pn(Wi,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:_n("week",zi,Rn,"yyyy-Www"),month:_n("month",Gi,Pn(Gi,["yyyy","MM"]),"yyyy-MM"),number:qn,url:Un,email:Fn,radio:Hn,checkbox:Bn,hidden:p,button:p,submit:p,reset:p,file:p},Ji=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Yi[Zn(a.type)]||Yi.text)(i,o,a,s[0],e,t,n,r)}}}}],Zi=/^(true|false|\d+)$/,Ki=function(){return{restrict:"A",priority:100,compile:function(t,e){return Zi.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Xi=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,r,i){t.$$addBindingInfo(r,i.ngBind),r=r[0],e.$watch(i.ngBind,function(t){r.textContent=t===n?"":t})}}}}],Qi=["$interpolate","$compile",function(t,e){return{compile:function(r){return e.$$addBindingClass(r),function(r,i,o){var a=t(i.attr(o.$attr.ngBindTemplate));e.$$addBindingInfo(i,a.expressions),i=i[0],o.$observe("ngBindTemplate",function(t){i.textContent=t===n?"":t})}}}}],to=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(t){return(t||"").toString()});return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){r.html(t.getTrustedHtml(o(e))||"")})}}}}],eo=v({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),no=zn("",!0),ro=zn("Odd",0),io=zn("Even",1),oo=Tn({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),ao=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],so={},uo={blur:!0,focus:!0};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Xt("ng-"+t);so[e]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[e],null,!0);return function(e,n){n.on(t,function(n){var i=function(){a(e,{$event:n})};uo[t]&&r.$$phase?e.$evalAsync(i):e.$apply(i)})}}}}]});var co=["$animate",function(t){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c;n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=ut(s.clone),t.leave(c).then(function(){c=null}),s=null))})}}}],lo=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:lr.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll;return function(r,i,u,c,l){var f,h,$,p=0,d=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),$&&(n.leave($).then(function(){h=null}),h=$,$=null)};r.$watch(o,function(o){var u=function(){!g(s)||s&&!r.$eval(s)||e()},h=++p;o?(t(o,!0).then(function(t){if(h===p){var e=r.$new();c.template=t;var s=l(e,function(t){d(),n.enter(t,null,i).then(u)});f=e,$=s,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){h===p&&(d(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):(d(),c.template=null)})}}}}],fo=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return/SVG/.test(r[0].toString())?(r.empty(),void t(gt(o.template,e).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void t(r.contents())(n))}}}],ho=Tn({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),$o=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,r,i){var a=e.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?pr(a):a,c=function(t){if(!m(t)){var e=[];return t&&o(t.split(u),function(t){t&&e.push(s?pr(t):t)}),e}};i.$parsers.push(c),i.$formatters.push(function(t){return $r(t)?t.join(a):n}),i.$isEmpty=function(t){return!t||!t.length}}}},po="ng-valid",vo="ng-invalid",mo="ng-pristine",go="ng-dirty",yo="ng-untouched",wo="ng-touched",bo="ng-pending",xo=r("ngModel"),So=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,r,i,a,s,u,c,l,f){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(t);var h,$=a(r.ngModel),d=$.assign,v=$,y=d,w=null,x=this;this.$$setOptions=function(t){if(x.$options=t,t&&t.getterSetter){var e=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)");v=function(t){var n=$(t);return S(n)&&(n=e(t)),n},y=function(t,e){S($(t))?n(t,{$$$p:x.$modelValue}):d(t,x.$modelValue)}}else if(!$.assign)throw xo("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,z(i))},this.$render=p,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t};var C=i.inheritedData("$formController")||ji,A=0;Gn({ctrl:this,$element:i,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},parentForm:C,$animate:s}),this.$setPristine=function(){x.$dirty=!1,x.$pristine=!0,s.removeClass(i,go),s.addClass(i,mo)},this.$setDirty=function(){x.$dirty=!0,x.$pristine=!1,s.removeClass(i,mo),s.addClass(i,go),C.$setDirty()},this.$setUntouched=function(){x.$touched=!1,x.$untouched=!0,s.setClass(i,yo,wo)},this.$setTouched=function(){x.$touched=!0,x.$untouched=!1,s.setClass(i,wo,yo)},this.$rollbackViewValue=function(){u.cancel(w),x.$viewValue=x.$$lastCommittedViewValue,x.$render()},this.$validate=function(){if(!b(x.$modelValue)||!isNaN(x.$modelValue)){var t=x.$$lastCommittedViewValue,e=x.$$rawModelValue,r=x.$valid,i=x.$modelValue,o=x.$options&&x.$options.allowInvalid;x.$$runValidators(e,t,function(t){o||r===t||(x.$modelValue=t?e:n,x.$modelValue!==i&&x.$$writeModelToScope())})}},this.$$runValidators=function(t,e,r){function i(){var t=x.$$parserName||"parse";return h!==n?(h||(o(x.$validators,function(t,e){u(e,null)}),o(x.$asyncValidators,function(t,e){u(e,null)})),u(t,h),h):(u(t,null),!0)}function a(){var n=!0;return o(x.$validators,function(r,i){var o=r(t,e);n=n&&o,u(i,o)}),n?!0:(o(x.$asyncValidators,function(t,e){u(e,null)}),!1)}function s(){var r=[],i=!0;o(x.$asyncValidators,function(o,a){var s=o(t,e);if(!N(s))throw xo("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",s);u(a,n),r.push(s.then(function(){u(a,!0)},function(t){i=!1,u(a,!1)}))}),r.length?l.all(r).then(function(){c(i)},p):c(!0)}function u(t,e){f===A&&x.$setValidity(t,e)}function c(t){f===A&&r(t)}A++;var f=A;return i()&&a()?void s():void c(!1)},this.$commitViewValue=function(){var t=x.$viewValue;u.cancel(w),(x.$$lastCommittedViewValue!==t||""===t&&x.$$hasNativeValidators)&&(x.$$lastCommittedViewValue=t,x.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){x.$modelValue!==a&&x.$$writeModelToScope()}var r=x.$$lastCommittedViewValue,i=r;if(h=m(i)?n:!0)for(var o=0;o<x.$parsers.length;o++)if(i=x.$parsers[o](i),m(i)){h=!1;break}b(x.$modelValue)&&isNaN(x.$modelValue)&&(x.$modelValue=v(t));var a=x.$modelValue,s=x.$options&&x.$options.allowInvalid;x.$$rawModelValue=i,s&&(x.$modelValue=i,e()),x.$$runValidators(i,x.$$lastCommittedViewValue,function(t){s||(x.$modelValue=t?i:n,e())})},this.$$writeModelToScope=function(){y(t,x.$modelValue),o(x.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){x.$viewValue=t,(!x.$options||x.$options.updateOnDefault)&&x.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,r=0,i=x.$options;i&&g(i.debounce)&&(n=i.debounce,b(n)?r=n:b(n[e])?r=n[e]:b(n["default"])&&(r=n["default"])),u.cancel(w),r?w=u(function(){x.$commitViewValue()},r):c.$$phase?x.$commitViewValue():t.$apply(function(){x.$commitViewValue()})},t.$watch(function(){var e=v(t);if(e!==x.$modelValue&&(x.$modelValue===x.$modelValue||e===e)){x.$modelValue=x.$$rawModelValue=e,h=n;for(var r=x.$formatters,i=r.length,o=e;i--;)o=r[i](o);x.$viewValue!==o&&(x.$viewValue=x.$$lastCommittedViewValue=o,x.$render(),x.$$runValidators(e,o,p))}return e})}],Co=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:So,priority:1,compile:function(e){return e.addClass(mo).addClass(yo).addClass(po),{pre:function(t,e,n,r){var i=r[0],o=r[1]||ji;i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&o.$$renameControl(i,t)}),t.$on("$destroy",function(){o.$removeControl(i)})},post:function(e,n,r,i){var o=i[0];o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(t){o.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(n){o.$touched||(t.$$phase?e.$evalAsync(o.$setTouched):e.$apply(o.$setTouched))})}}}}}],Ao=/(\s+|^)default(\s+|$)/,Eo=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var r=this;this.$options=t.$eval(e.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=pr(this.$options.updateOn.replace(Ao,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},ko=Tn({terminal:!0,priority:1e3}),Oo=["$locale","$interpolate",function(t,e){var n=/{}/g,r=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(i,a,s){function u(t){a.text(t||"")}var c,l=s.count,f=s.$attr.when&&a.attr(s.$attr.when),h=s.offset||0,$=i.$eval(f)||{},p={},d=e.startSymbol(),v=e.endSymbol(),m=d+l+"-"+h+v,g=lr.noop;o(s,function(t,e){var n=r.exec(e);if(n){var i=(n[1]?"-":"")+Zn(n[2]);$[i]=a.attr(s.$attr[e])}}),o($,function(t,r){p[r]=e(t.replace(n,m))}),i.$watch(l,function(e){var n=parseFloat(e),r=isNaN(n);r||n in $||(n=t.pluralCat(n-h)),n===c||r&&isNaN(c)||(g(),g=i.$watch(p[n],u),c=n)})}}}],To=["$parse","$animate",function(t,a){var s="$$NG_REMOVED",u=r("ngRepeat"),c=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},l=function(t){return t.clone[0]},f=function(t){return t.clone[t.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,h){var $=h.ngRepeat,p=e.createComment(" end ngRepeat: "+$+" "),d=$.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!d)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",$);var v=d[1],m=d[2],g=d[3],y=d[4];if(d=v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!d)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",v);var w=d[3]||d[1],b=d[2];if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g);var x,S,C,A,E={$id:Ut};return y?x=t(y):(C=function(t,e){return Ut(e)},A=function(t){return t}),function(t,e,r,h,d){x&&(S=function(e,n,r){return b&&(E[b]=e),E[w]=n,E.$index=r,x(t,E)});var v=ct();t.$watchCollection(m,function(r){var h,m,y,x,E,k,O,T,M,N,V,D,j=e[0],R=ct();if(g&&(t[g]=r),i(r))M=r,T=S||C;else{T=S||A,M=[];for(var P in r)r.hasOwnProperty(P)&&"$"!=P.charAt(0)&&M.push(P);M.sort()}for(x=M.length,V=new Array(x),h=0;x>h;h++)if(E=r===M?h:M[h],k=r[E],O=T(E,k,h),v[O])N=v[O],delete v[O],R[O]=N,V[h]=N;else{if(R[O])throw o(V,function(t){t&&t.scope&&(v[t.id]=t)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",$,O,k);V[h]={id:O,scope:n,clone:n},R[O]=!0}for(var _ in v){if(N=v[_],D=ut(N.clone),a.leave(D),D[0].parentNode)for(h=0,m=D.length;m>h;h++)D[h][s]=!0;N.scope.$destroy()}for(h=0;x>h;h++)if(E=r===M?h:M[h],k=r[E],N=V[h],N.scope){y=j;do y=y.nextSibling;while(y&&y[s]);l(N)!=y&&a.move(ut(N.clone),null,nr(j)),j=f(N),c(N.scope,h,w,k,b,E,x)}else d(function(t,e){N.scope=e;var n=p.cloneNode(!1);t[t.length++]=n,a.enter(t,null,nr(j)),j=n,N.clone=t,R[N.id]=N,c(N.scope,h,w,k,b,E,x)});v=R})}}}}],Mo="ng-hide",No="ng-hide-animate",Vo=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,Mo,{tempClasses:No})})}}}],Do=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,Mo,{tempClasses:No})})}}}],jo=Tn(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),Ro=["$animate",function(t){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],c=[],l=[],f=[],h=function(t,e){return function(){t.splice(e,1)}};n.$watch(s,function(n){var r,i;for(r=0,i=l.length;i>r;++r)t.cancel(l[r]);for(l.length=0,r=0,i=f.length;i>r;++r){var s=ut(c[r].clone);f[r].$destroy();var $=l[r]=t.leave(s);$.then(h(l,r))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){f.push(i);var o=n.element;r[r.length++]=e.createComment(" end ngSwitchWhen: ");var a={clone:r};c.push(a),t.enter(r,o.parent(),o)})})})}}}],Po=Tn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),_o=Tn({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Io=Tn({restrict:"EAC",link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",z(e));o(function(t){e.empty(),e.append(t)})}}),qo=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text;t.put(r,i)}}}}],Uo=r("ngOptions"),Fo=v({restrict:"A",terminal:!0}),Ho=["$compile","$parse",function(t,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:p};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(t,e,n){var r,i,o=this,a={},u=s;o.databound=n.ngModel,o.init=function(t,e,n){u=t,r=e,i=n},o.addOption=function(e,n){at(e,'"option value"'),a[e]=!0,u.$viewValue==e&&(t.val(e),i.parent()&&i.remove()),n&&n[0].hasAttribute("selected")&&(n[0].selected=!0)},o.removeOption=function(t){this.hasOption(t)&&(delete a[t],u.$viewValue===t&&this.renderUnknownOption(t))},o.renderUnknownOption=function(e){var n="? "+Ut(e)+" ?";i.val(n),t.prepend(i),t.val(n),i.prop("selected",!0)},o.hasOption=function(t){return a.hasOwnProperty(t)},e.$on("$destroy",function(){o.renderUnknownOption=p})}],link:function(s,u,c,l){function f(t,e,n,r){n.$render=function(){var t=n.$viewValue;r.hasOption(t)?(C.parent()&&C.remove(),e.val(t),""===t&&p.prop("selected",!0)):null==t&&p?e.val(""):r.renderUnknownOption(t)},e.on("change",function(){t.$apply(function(){C.parent()&&C.remove(),n.$setViewValue(e.val())})})}function h(t,e,n){var r;n.$render=function(){var t=new Ft(n.$viewValue);o(e.find("option"),function(e){e.selected=g(t.get(e.value))})},t.$watch(function(){I(r,n.$viewValue)||(r=_(n.$viewValue),n.$render())}),e.on("change",function(){t.$apply(function(){var t=[];o(e.find("option"),function(e){
e.selected&&t.push(e.value)}),n.$setViewValue(t)})})}function $(e,s,u){function c(t,n,r){return I[k]=r,M&&(I[M]=n),t(e,I)}function l(){e.$apply(function(){var t,n=D(e)||[];if(m)t=[],o(s.val(),function(e){e=R?P[e]:e,t.push(f(e,n[e]))});else{var r=R?P[s.val()]:s.val();t=f(r,n[r])}u.$setViewValue(t),C()})}function f(t,e){if("?"===t)return n;if(""===t)return null;var r=T?T:V;return c(r,t,e)}function h(){var t,n=D(e);if(n&&$r(n)){t=new Array(n.length);for(var r=0,i=n.length;i>r;r++)t[r]=c(E,r,n[r]);return t}if(n){t={};for(var o in n)n.hasOwnProperty(o)&&(t[o]=c(E,o,n[o]))}return t}function $(t){var e;if(m)if(R&&$r(t)){e=new Ft([]);for(var n=0;n<t.length;n++)e.put(c(R,null,t[n]),!0)}else e=new Ft(t);else R&&(t=c(R,null,t));return function(n,r){var i;return i=R?R:T?T:V,m?g(e.remove(c(i,n,r))):t===c(i,n,r)}}function p(){b||(e.$$postDigest(C),b=!0)}function v(t,e,n){t[e]=t[e]||0,t[e]+=n?1:-1}function C(){b=!1;var t,n,r,i,l,f,h,p,y,C,A,k,O,T,V,j,q,U={"":[]},F=[""],H=u.$viewValue,L=D(e)||[],B=M?a(L):L,z={},G=$(H),W=!1;for(P={},k=0;C=B.length,C>k;k++)h=k,M&&(h=B[k],"$"===h.charAt(0))||(p=L[h],t=c(N,h,p)||"",(n=U[t])||(n=U[t]=[],F.push(t)),O=G(h,p),W=W||O,j=c(E,h,p),j=g(j)?j:"",q=R?R(e,I):M?B[k]:k,R&&(P[q]=h),n.push({id:q,label:j,selected:O}));for(m||(w||null===H?U[""].unshift({id:"",label:"",selected:!W}):W||U[""].unshift({id:"?",label:"",selected:!0})),A=0,y=F.length;y>A;A++){for(t=F[A],n=U[t],_.length<=A?(i={element:S.clone().attr("label",t),label:n.label},l=[i],_.push(l),s.append(i.element)):(l=_[A],i=l[0],i.label!=t&&i.element.attr("label",i.label=t)),T=null,k=0,C=n.length;C>k;k++)r=n[k],(f=l[k+1])?(T=f.element,f.label!==r.label&&(v(z,f.label,!1),v(z,r.label,!0),T.text(f.label=r.label),T.prop("label",f.label)),f.id!==r.id&&T.val(f.id=r.id),T[0].selected!==r.selected&&(T.prop("selected",f.selected=r.selected),er&&T.prop("selected",f.selected))):(""===r.id&&w?V=w:(V=x.clone()).val(r.id).prop("selected",r.selected).attr("selected",r.selected).prop("label",r.label).text(r.label),l.push(f={element:V,label:r.label,id:r.id,selected:r.selected}),v(z,r.label,!0),T?T.after(V):i.element.append(V),T=V);for(k++;l.length>k;)r=l.pop(),v(z,r.label,!1),r.element.remove()}for(;_.length>A;){for(n=_.pop(),k=1;k<n.length;++k)v(z,n[k].label,!1);n[0].element.remove()}o(z,function(t,e){t>0?d.addOption(e):0>t&&d.removeOption(e)})}var A;if(!(A=y.match(i)))throw Uo("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",y,z(s));var E=r(A[2]||A[1]),k=A[4]||A[6],O=/ as /.test(A[0])&&A[1],T=O?r(O):null,M=A[5],N=r(A[3]||""),V=r(A[2]?A[1]:k),D=r(A[7]),j=A[8],R=j?r(A[8]):null,P={},_=[[{element:s,label:""}]],I={};w&&(t(w)(e),w.removeClass("ng-scope"),w.remove()),s.empty(),s.on("change",l),u.$render=C,e.$watchCollection(D,p),e.$watchCollection(h,p),m&&e.$watchCollection(function(){return u.$modelValue},p)}if(l[1]){for(var p,d=l[0],v=l[1],m=c.multiple,y=c.ngOptions,w=!1,b=!1,x=nr(e.createElement("option")),S=nr(e.createElement("optgroup")),C=x.clone(),A=0,E=u.children(),k=E.length;k>A;A++)if(""===E[A].value){p=w=E.eq(A);break}d.init(v,w,C),m&&(v.$isEmpty=function(t){return!t||0===t.length}),y?$(s,u,v):m?h(s,u,v):f(s,u,v,d)}}}}],Lo=["$interpolate",function(t){var e={addOption:p,removeOption:p};return{restrict:"E",priority:100,compile:function(n,r){if(m(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o);s&&s.databound||(s=e),i?t.$watch(i,function(t,e){r.$set("value",t),e!==t&&s.removeOption(e),s.addOption(t,n)}):s.addOption(r.value,n),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],Bo=v({restrict:"E",terminal:!1}),zo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){r&&(n.required=!0,r.$validators.required=function(t,e){return!n.required||!r.$isEmpty(e)},n.$observe("required",function(){r.$validate()}))}}},Go=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,i,o){if(o){var a,s=i.ngPattern||i.pattern;i.$observe("pattern",function(t){if(w(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,t,z(e));a=t||n,o.$validate()}),o.$validators.pattern=function(t,e){return o.$isEmpty(e)||m(a)||a.test(e)}}}}},Wo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=-1;n.$observe("maxlength",function(t){var e=h(t);i=isNaN(e)?-1:e,r.$validate()}),r.$validators.maxlength=function(t,e){return 0>i||r.$isEmpty(e)||e.length<=i}}}}},Yo=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,r){if(r){var i=0;n.$observe("minlength",function(t){i=h(t)||0,r.$validate()}),r.$validators.minlength=function(t,e){return r.$isEmpty(e)||e.length>=i}}}}};return t.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(rt(),$t(lr),void nr(e).ready(function(){X(e,Q)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
},{}],"css-plugin":[function(require,module,exports){
(function (global){
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var r,i,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},p=a.prototype=new t("css");p.constructor=a,a.version="1.16.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",p="px",a.suffixMap={top:p,right:p,bottom:p,left:p,width:p,height:p,fontSize:p,padding:p,margin:p,perspective:p,lineHeight:""};var f,c,h,u,d,x,g=/(?:\d|\-\d|\.\d|\-\.\d)+/g,y=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,m=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,_=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,v=/(?:\d|\-|\+|=|#|\.)*/g,b=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,O=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,T=/([A-Z])/g,M=/-([a-z])/gi,X=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},S=/(?:Left|Right|Width)/i,R=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,F=/,(?=[^\)]*(?:\(|$))/gi,Y=Math.PI/180,z=180/Math.PI,C={},N=document,V=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},j=V("div"),L=V("img"),D=a._internals={_specialProps:l},I=navigator.userAgent,W=function(){var t=I.indexOf("Android"),e=V("a");return h=-1!==I.indexOf("Safari")&&-1===I.indexOf("Chrome")&&(-1===t||Number(I.substr(t+8,1))>3),d=h&&Number(I.substr(I.indexOf("Version/")+8,1))<6,u=-1!==I.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(I))&&(x=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),B=function(t){return b.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},Z=function(t){window.console&&console.log(t)},E="",$="",q=function(t,e){e=e||j;var r,i,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),r=["O","Moz","ms","Ms","Webkit"],i=5;--i>-1&&void 0===s[r[i]+t];);return i>=0?($=3===i?"ms":r[i],E="-"+$.toLowerCase()+"-",$+t):null},H=N.defaultView?N.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,r,i,s){var n;return W||"opacity"!==e?(!i&&t.style[e]?n=t.style[e]:(r=r||H(t))?n=r[e]||r.getPropertyValue(e)||r.getPropertyValue(e.replace(T,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):B(t)},U=D.convertToPixels=function(t,r,i,s,n){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var o,l,p,f=S.test(r),c=t,h=j.style,u=0>i;if(u&&(i=-i),"%"===s&&-1!==r.indexOf("border"))o=i/100*(f?t.clientWidth:t.clientHeight);else{if(h.cssText="border:0 solid red;position:"+G(t,"position")+";line-height:0;","%"!==s&&c.appendChild)h[f?"borderLeftWidth":"borderTopWidth"]=i+s;else{if(c=t.parentNode||N.body,l=c._gsCache,p=e.ticker.frame,l&&f&&l.time===p)return l.width*i/100;h[f?"width":"height"]=i+s}c.appendChild(j),o=parseFloat(j[f?"offsetWidth":"offsetHeight"]),c.removeChild(j),f&&"%"===s&&a.cacheWidths!==!1&&(l=c._gsCache=c._gsCache||{},l.time=p,l.width=o/i*100),0!==o||n||(o=U(t,r,i,s,!0))}return u?-o:o},Q=D.calculateOffset=function(t,e,r){if("absolute"!==G(t,"position",r))return 0;var i="left"===e?"Left":"Top",s=G(t,"margin"+i,r);return t["offset"+i]-(U(t,e,parseFloat(s),s.replace(v,""))||0)},J=function(t,e){var r,i,s,n={};if(e=e||H(t,null))if(r=e.length)for(;--r>-1;)s=e[r],(-1===s.indexOf("-transform")||Ot===s)&&(n[s.replace(M,k)]=e.getPropertyValue(s));else for(r in e)(-1===r.indexOf("Transform")||wt===r)&&(n[r]=e[r]);else if(e=t.currentStyle||t.style)for(r in e)"string"==typeof r&&void 0===n[r]&&(n[r.replace(M,k)]=e[r]);return W||(n.opacity=B(t)),i=Ft(t,e,!1),n.rotation=i.rotation,n.skewX=i.skewX,n.scaleX=i.scaleX,n.scaleY=i.scaleY,n.x=i.x,n.y=i.y,Tt&&(n.z=i.z,n.rotationX=i.rotationX,n.rotationY=i.rotationY,n.scaleZ=i.scaleZ),n.filters&&delete n.filters,n},K=function(t,e,r,i,s){var n,a,o,l={},p=t.style;for(a in r)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=r[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(_,"")?n:0:Q(t,a),void 0!==p[a]&&(o=new ut(p,a,p[a],o)));if(i)for(a in i)"className"!==a&&(l[a]=i[a]);return{difs:l,firstMPT:o}},tt={width:["Left","Right"],height:["Top","Bottom"]},et=["marginLeft","marginRight","marginTop","marginBottom"],rt=function(t,e,r){var i=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=tt[e],n=s.length;for(r=r||H(t,null);--n>-1;)i-=parseFloat(G(t,"padding"+s[n],r,!0))||0,i-=parseFloat(G(t,"border"+s[n]+"Width",r,!0))||0;return i},it=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var r=t.split(" "),i=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];return null==s?s="center"===i?"50%":"0":"center"===s&&(s="50%"),("center"===i||isNaN(parseFloat(i))&&-1===(i+"").indexOf("="))&&(i="50%"),t=i+" "+s+(r.length>2?" "+r[2]:""),e&&(e.oxp=-1!==i.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===i.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(i.replace(_,"")),e.oy=parseFloat(s.replace(_,"")),e.v=t),e||t},st=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},nt=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},at=function(t,e,r,i){var s,n,a,o,l,p=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:z)-(l?0:e),n.length&&(i&&(i[r]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(a/s|0)*s)),o=e+a),p>o&&o>-p&&(o=0),o},ot={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},lt=function(t,e,r){return t=0>t?t+1:t>1?t-1:t,255*(1>6*t?e+(r-e)*t*6:.5>t?r:2>3*t?e+(r-e)*(2/3-t)*6:e)+.5|0},pt=a.parseColor=function(t){var e,r,i,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,t>>8&255,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ot[t]?ot[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),r=t.charAt(2),i=t.charAt(3),t="#"+e+e+r+r+i+i),t=parseInt(t.substr(1),16),[t>>16,t>>8&255,255&t]):"hsl"===t.substr(0,3)?(t=t.match(g),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,r=.5>=a?a*(n+1):a+n-a*n,e=2*a-r,t.length>3&&(t[3]=Number(t[3])),t[0]=lt(s+1/3,e,r),t[1]=lt(s,e,r),t[2]=lt(s-1/3,e,r),t):(t=t.match(g)||ot.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ot.black},ft="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(p in ot)ft+="|"+p+"\\b";ft=new RegExp(ft+")","gi");var ct=function(t,e,r,i){if(null==t)return function(t){return t};var s,n=e?(t.match(ft)||[""])[0]:"",a=t.split(n).join("").match(m)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",f=a.length,c=f>0?a[0].replace(g,""):"";return f?s=e?function(t){var e,h,u,d;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(d=t.replace(F,"|").split("|"),u=0;u<d.length;u++)d[u]=s(d[u]);return d.join(",")}if(e=(t.match(ft)||[n])[0],h=t.split(e).join("").match(m)||[],u=h.length,f>u--)for(;++u<f;)h[u]=r?h[(u-1)/2|0]:a[u];return o+h.join(p)+p+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,h;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(n=t.replace(F,"|").split("|"),h=0;h<n.length;h++)n[h]=s(n[h]);return n.join(",")}if(e=t.match(m)||[],h=e.length,f>h--)for(;++h<f;)e[h]=r?e[(h-1)/2|0]:a[h];return o+e.join(p)+l}:function(t){return t}},ht=function(t){return t=t.split(","),function(e,r,i,s,n,a,o){var l,p=(r+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=p[l]=p[l]||p[(l-1)/2>>0];return s.parse(e,o,n,a)}},ut=(D._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,r,i,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(r=o.t,r.type){if(1===r.type){for(s=r.xs0+r.s+r.xs1,i=1;i<r.l;i++)s+=r["xn"+i]+r["xs"+(i+1)];r.e=s}}else r.e=r.s+r.xs0;o=o._next}},function(t,e,r,i,s){this.t=t,this.p=e,this.v=r,this.r=s,i&&(i._prev=this,this._next=i)}),dt=(D._parseToProxy=function(t,e,r,i,s,n){var a,o,l,p,f,c=i,h={},u={},d=r._transform,x=C;for(r._transform=null,C=e,i=f=r.parse(t,e,i,s),C=x,n&&(r._transform=d,c&&(c._prev=null,c._prev&&(c._prev._next=null)));i&&i!==c;){if(i.type<=1&&(o=i.p,u[o]=i.s+i.c,h[o]=i.s,n||(p=new ut(i,"s",o,p,i.r),i.c=0),1===i.type))for(a=i.l;--a>0;)l="xn"+a,o=i.p+"_"+l,u[o]=i.data[l],h[o]=i[l],n||(p=new ut(i,l,o,p,i.rxp[l]));i=i._next}return{proxy:h,end:u,firstMPT:p,pt:f}},D.CSSPropTween=function(t,e,i,s,a,o,l,p,f,c,h){this.t=t,this.p=e,this.s=i,this.c=s,this.n=l||e,t instanceof dt||n.push(this.n),this.r=p,this.type=o||0,f&&(this.pr=f,r=!0),this.b=void 0===c?i:c,this.e=void 0===h?i+s:h,a&&(this._next=a,a._prev=this)}),xt=a.parseComplex=function(t,e,r,i,s,n,a,o,l,p){r=r||n||"",a=new dt(t,e,0,0,a,p?2:1,null,!1,o,r,i),i+="";var c,h,u,d,x,m,_,v,b,w,O,T,M=r.split(", ").join(",").split(" "),X=i.split(", ").join(",").split(" "),k=M.length,S=f!==!1;for((-1!==i.indexOf(",")||-1!==r.indexOf(","))&&(M=M.join(" ").replace(F,", ").split(" "),X=X.join(" ").replace(F,", ").split(" "),k=M.length),k!==X.length&&(M=(n||"").split(" "),k=M.length),a.plugin=l,a.setRatio=p,c=0;k>c;c++)if(d=M[c],x=X[c],v=parseFloat(d),v||0===v)a.appendXtra("",v,st(x,v),x.replace(y,""),S&&-1!==x.indexOf("px"),!0);else if(s&&("#"===d.charAt(0)||ot[d]||P.test(d)))T=","===x.charAt(x.length-1)?"),":")",d=pt(d),x=pt(x),b=d.length+x.length>6,b&&!W&&0===x[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(X[c]).join("transparent")):(W||(b=!1),a.appendXtra(b?"rgba(":"rgb(",d[0],x[0]-d[0],",",!0,!0).appendXtra("",d[1],x[1]-d[1],",",!0).appendXtra("",d[2],x[2]-d[2],b?",":T,!0),b&&(d=d.length<4?1:d[3],a.appendXtra("",d,(x.length<4?1:x[3])-d,T,!1)));else if(m=d.match(g)){if(_=x.match(y),!_||_.length!==m.length)return a;for(u=0,h=0;h<m.length;h++)O=m[h],w=d.indexOf(O,u),a.appendXtra(d.substr(u,w-u),Number(O),st(_[h],O),"",S&&"px"===d.substr(w+O.length,2),0===h),u=w+O.length;a["xs"+a.l]+=d.substr(u)}else a["xs"+a.l]+=a.l?" "+d:d;if(-1!==i.indexOf("=")&&a.data){for(T=a.xs0+a.data.s,c=1;c<a.l;c++)T+=a["xs"+c]+a.data["xn"+c];a.e=T+a["xs"+c]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},gt=9;for(p=dt.prototype,p.l=p.pr=0;--gt>0;)p["xn"+gt]=0,p["xs"+gt]="";p.xs0="",p._next=p._prev=p.xfirst=p.data=p.plugin=p.setRatio=p.rxp=null,p.appendXtra=function(t,e,r,i,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",r||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=i||"",o>0?(a.data["xn"+o]=e+r,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new dt(a,"xn"+o,e,r,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+r},a.rxp={},a.s=e,a.c=r,a.r=s,a)):(a["xs"+o]+=e+(i||""),a)};var yt=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ct(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},mt=D._registerComplexSpecialProp=function(t,e,r){"object"!=typeof e&&(e={parser:r});var i,s,n=t.split(","),a=e.defaultValue;for(r=r||[a],i=0;i<n.length;i++)e.prefix=0===i&&e.prefix,e.defaultValue=r[i]||a,s=new yt(n[i],e)},_t=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";mt(t,{parser:function(t,r,i,s,n,a,p){var f=o.com.greensock.plugins[e];return f?(f._cssRegister(),l[i].parse(t,r,i,s,n,a,p)):(Z("Error: "+e+" js file not loaded."),n)}})}};p=yt.prototype,p.parseComplex=function(t,e,r,i,s,n){var a,o,l,p,f,c,h=this.keyword;if(this.multi&&(F.test(r)||F.test(e)?(o=e.replace(F,"|").split("|"),l=r.replace(F,"|").split("|")):h&&(o=[e],l=[r])),l){for(p=l.length>o.length?l.length:o.length,a=0;p>a;a++)e=o[a]=o[a]||this.dflt,r=l[a]=l[a]||this.dflt,h&&(f=e.indexOf(h),c=r.indexOf(h),f!==c&&(-1===c?o[a]=o[a].split(h).join(""):-1===f&&(o[a]+=" "+h)));e=o.join(", "),r=l.join(", ")}return xt(t,this.p,e,r,this.clrs,this.dflt,i,this.pr,s,n)},p.parse=function(t,e,r,i,n,a,o){return this.parseComplex(t.style,this.format(G(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,r){mt(t,{parser:function(t,i,s,n,a,o,l){var p=new dt(t,s,0,0,a,2,s,!1,r);return p.plugin=o,p.setRatio=e(t,i,n._tween,s),p},priority:r})},a.useSVGTransformAttr=h;var vt,bt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),wt=q("transform"),Ot=E+"transform",Pt=q("transformOrigin"),Tt=null!==q("perspective"),Mt=D.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Tt?a.defaultForce3D||"auto":!1},Xt=window.SVGElement,kt=function(t,e,r){var i,s=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(i in r)s.setAttributeNS(null,i.replace(n,"$1-$2").toLowerCase(),r[i]);return e.appendChild(s),s},St=N.documentElement,Rt=function(){var t,e,r,i=x||/Android/i.test(I)&&!window.chrome;return N.createElementNS&&!i&&(t=kt("svg",St),e=kt("rect",t,{width:100,height:50,x:100}),r=e.getBoundingClientRect().width,e.style[Pt]="50% 50%",e.style[wt]="scaleX(0.5)",i=r===e.getBoundingClientRect().width&&!(u&&Tt),St.removeChild(t)),i}(),At=function(t,e,r,i){var s,n;i&&(n=i.split(" ")).length||(s=t.getBBox(),e=it(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y]),r.xOrigin=parseFloat(n[0]),r.yOrigin=parseFloat(n[1]),t.setAttribute("data-svg-origin",n.join(" "))},Ft=D.getTransform=function(t,e,r,i){if(t._gsTransform&&r&&!i)return t._gsTransform;var n,o,l,p,f,c,h,u,d,x,g=r?t._gsTransform||new Mt:new Mt,y=g.scaleX<0,m=2e-5,_=1e5,v=Tt?parseFloat(G(t,Pt,e,!1,"0 0 0").split(" ")[2])||g.zOrigin||0:0,b=parseFloat(a.defaultTransformPerspective)||0;if(wt?o=G(t,Ot,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(R),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),g.x||0,g.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,g.svg=!!(Xt&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),g.svg&&(n&&-1!==(t.style[wt]+"").indexOf("matrix")&&(o=t.style[wt],n=!1),At(t,G(t,Pt,s,!1,"50% 50%")+"",g,t.getAttribute("data-svg-origin")),vt=a.useSVGTransformAttr||Rt,l=t.getAttribute("transform"),n&&l&&-1!==l.indexOf("matrix")&&(o=l,n=0)),!n){for(l=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],p=l.length;--p>-1;)f=Number(l[p]),l[p]=(c=f-(f|=0))?(c*_+(0>c?-.5:.5)|0)/_+f:f;if(16===l.length){var w,O,P,T,M,X=l[0],k=l[1],S=l[2],A=l[3],F=l[4],Y=l[5],C=l[6],N=l[7],V=l[8],j=l[9],L=l[10],D=l[12],I=l[13],W=l[14],B=l[11],Z=Math.atan2(C,L);g.zOrigin&&(W=-g.zOrigin,D=V*W-l[12],I=j*W-l[13],W=L*W+g.zOrigin-l[14]),g.rotationX=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),w=F*T+V*M,O=Y*T+j*M,P=C*T+L*M,V=F*-M+V*T,j=Y*-M+j*T,L=C*-M+L*T,B=N*-M+B*T,F=w,Y=O,C=P),Z=Math.atan2(V,L),g.rotationY=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),w=X*T-V*M,O=k*T-j*M,P=S*T-L*M,j=k*M+j*T,L=S*M+L*T,B=A*M+B*T,X=w,k=O,S=P),Z=Math.atan2(k,X),g.rotation=Z*z,Z&&(T=Math.cos(-Z),M=Math.sin(-Z),X=X*T+F*M,O=k*T+Y*M,Y=k*-M+Y*T,C=S*-M+C*T,k=O),g.rotationX&&Math.abs(g.rotationX)+Math.abs(g.rotation)>359.9&&(g.rotationX=g.rotation=0,g.rotationY+=180),g.scaleX=(Math.sqrt(X*X+k*k)*_+.5|0)/_,g.scaleY=(Math.sqrt(Y*Y+j*j)*_+.5|0)/_,g.scaleZ=(Math.sqrt(C*C+L*L)*_+.5|0)/_,g.skewX=0,g.perspective=B?1/(0>B?-B:B):0,g.x=D,g.y=I,g.z=W,g.svg&&(g.x-=g.xOrigin-(g.xOrigin*X-g.yOrigin*F),g.y-=g.yOrigin-(g.yOrigin*k-g.xOrigin*Y))}else if(!(Tt&&!i&&l.length&&g.x===l[4]&&g.y===l[5]&&(g.rotationX||g.rotationY)||void 0!==g.x&&"none"===G(t,"display",e))){var E=l.length>=6,$=E?l[0]:1,q=l[1]||0,H=l[2]||0,U=E?l[3]:1;g.x=l[4]||0,g.y=l[5]||0,h=Math.sqrt($*$+q*q),u=Math.sqrt(U*U+H*H),d=$||q?Math.atan2(q,$)*z:g.rotation||0,x=H||U?Math.atan2(H,U)*z+d:g.skewX||0,Math.abs(x)>90&&Math.abs(x)<270&&(y?(h*=-1,x+=0>=d?180:-180,d+=0>=d?180:-180):(u*=-1,x+=0>=x?180:-180)),g.scaleX=h,g.scaleY=u,g.rotation=d,g.skewX=x,Tt&&(g.rotationX=g.rotationY=g.z=0,g.perspective=b,g.scaleZ=1),g.svg&&(g.x-=g.xOrigin-(g.xOrigin*$-g.yOrigin*q),g.y-=g.yOrigin-(g.yOrigin*U-g.xOrigin*H))}g.zOrigin=v;for(p in g)g[p]<m&&g[p]>-m&&(g[p]=0)}return r&&(t._gsTransform=g,g.svg&&(vt&&t.style[wt]?Nt(t.style,wt):!vt&&t.getAttribute("transform")&&t.removeAttribute("transform"))),g},Yt=function(t){var e,r,i=this.data,s=-i.rotation*Y,n=s+i.skewX*Y,a=1e5,o=(Math.cos(s)*i.scaleX*a|0)/a,l=(Math.sin(s)*i.scaleX*a|0)/a,p=(Math.sin(n)*-i.scaleY*a|0)/a,f=(Math.cos(n)*i.scaleY*a|0)/a,c=this.t.style,h=this.t.currentStyle;if(h){r=l,l=-p,p=-r,e=h.filter,c.filter="";var u,d,g=this.t.offsetWidth,y=this.t.offsetHeight,m="absolute"!==h.position,_="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+p+", M22="+f,w=i.x+g*i.xPercent/100,O=i.y+y*i.yPercent/100;if(null!=i.ox&&(u=(i.oxp?g*i.ox*.01:i.ox)-g/2,d=(i.oyp?y*i.oy*.01:i.oy)-y/2,w+=u-(u*o+d*l),O+=d-(u*p+d*f)),m?(u=g/2,d=y/2,_+=", Dx="+(u-(u*o+d*l)+w)+", Dy="+(d-(u*p+d*f)+O)+")"):_+=", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?c.filter=e.replace(A,_):c.filter=_+" "+e,(0===t||1===t)&&1===o&&0===l&&0===p&&1===f&&(m&&-1===_.indexOf("Dx=0, Dy=0")||b.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&c.removeAttribute("filter")),!m){var P,T,M,X=8>x?1:-1;for(u=i.ieOffsetX||0,d=i.ieOffsetY||0,i.ieOffsetX=Math.round((g-((0>o?-o:o)*g+(0>l?-l:l)*y))/2+w),i.ieOffsetY=Math.round((y-((0>f?-f:f)*y+(0>p?-p:p)*g))/2+O),gt=0;4>gt;gt++)T=et[gt],P=h[T],r=-1!==P.indexOf("px")?parseFloat(P):U(this.t,T,parseFloat(P),P.replace(v,""))||0,M=r!==i[T]?2>gt?-i.ieOffsetX:-i.ieOffsetY:2>gt?u-i.ieOffsetX:d-i.ieOffsetY,c[T]=(i[T]=Math.round(r-M*(0===gt||2===gt?1:X)))+"px"}}},zt=D.set3DTransformRatio=D.setTransformRatio=function(t){var e,r,i,s,n,a,o,l,p,f,c,h,d,x,g,y,m,_,v,b,w,O,P,T=this.data,M=this.t.style,X=T.rotation,k=T.rotationX,S=T.rotationY,R=T.scaleX,A=T.scaleY,F=T.scaleZ,z=T.x,C=T.y,N=T.z,V=T.svg,j=T.perspective,L=T.force3D;if(!(((1!==t&&0!==t||"auto"!==L||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&L||N||j||S||k)&&(!vt||!V)&&Tt))return void(X||T.skewX||V?(X*=Y,O=T.skewX*Y,P=1e5,e=Math.cos(X)*R,s=Math.sin(X)*R,r=Math.sin(X-O)*-A,n=Math.cos(X-O)*A,O&&"simple"===T.skewType&&(m=Math.tan(O),m=Math.sqrt(1+m*m),r*=m,n*=m,T.skewY&&(e*=m,s*=m)),V&&(z+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r),C+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n),x=1e-6,x>z&&z>-x&&(z=0),x>C&&C>-x&&(C=0)),v=(e*P|0)/P+","+(s*P|0)/P+","+(r*P|0)/P+","+(n*P|0)/P+","+z+","+C+")",V&&vt?this.t.setAttribute("transform","matrix("+v):M[wt]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+v):M[wt]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+R+",0,0,"+A+","+z+","+C+")");if(u&&(x=1e-4,x>R&&R>-x&&(R=F=2e-5),x>A&&A>-x&&(A=F=2e-5),!j||T.z||T.rotationX||T.rotationY||(j=0)),X||T.skewX)X*=Y,g=e=Math.cos(X),y=s=Math.sin(X),T.skewX&&(X-=T.skewX*Y,g=Math.cos(X),y=Math.sin(X),"simple"===T.skewType&&(m=Math.tan(T.skewX*Y),m=Math.sqrt(1+m*m),g*=m,y*=m,T.skewY&&(e*=m,s*=m))),r=-y,n=g;else{if(!(S||k||1!==F||j||V))return void(M[wt]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) translate3d(":"translate3d(")+z+"px,"+C+"px,"+N+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""));e=n=1,r=s=0}p=1,i=a=o=l=f=c=0,h=j?-1/j:0,d=T.zOrigin,x=1e-6,b=",",w="0",X=S*Y,X&&(g=Math.cos(X),y=Math.sin(X),o=-y,f=h*-y,i=e*y,a=s*y,p=g,h*=g,e*=g,s*=g),X=k*Y,X&&(g=Math.cos(X),y=Math.sin(X),m=r*g+i*y,_=n*g+a*y,l=p*y,c=h*y,i=r*-y+i*g,a=n*-y+a*g,p*=g,h*=g,r=m,n=_),1!==F&&(i*=F,a*=F,p*=F,h*=F),1!==A&&(r*=A,n*=A,l*=A,c*=A),1!==R&&(e*=R,s*=R,o*=R,f*=R),(d||V)&&(d&&(z+=i*-d,C+=a*-d,N+=p*-d+d),V&&(z+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r),C+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n)),x>z&&z>-x&&(z=w),x>C&&C>-x&&(C=w),x>N&&N>-x&&(N=0)),v=T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix3d(":"matrix3d(",v+=(x>e&&e>-x?w:e)+b+(x>s&&s>-x?w:s)+b+(x>o&&o>-x?w:o),v+=b+(x>f&&f>-x?w:f)+b+(x>r&&r>-x?w:r)+b+(x>n&&n>-x?w:n),k||S?(v+=b+(x>l&&l>-x?w:l)+b+(x>c&&c>-x?w:c)+b+(x>i&&i>-x?w:i),v+=b+(x>a&&a>-x?w:a)+b+(x>p&&p>-x?w:p)+b+(x>h&&h>-x?w:h)+b):v+=",0,0,0,0,1,0,",v+=z+b+C+b+N+b+(j?1+-N/j:1)+")",M[wt]=v};p=Mt.prototype,p.x=p.y=p.z=p.skewX=p.skewY=p.rotation=p.rotationX=p.rotationY=p.zOrigin=p.xPercent=p.yPercent=0,p.scaleX=p.scaleY=p.scaleZ=1,mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,r,i,n,o,l){if(i._lastParsedTransform===l)return n;i._lastParsedTransform=l;var p,f,c,h,u,d,x,g=i._transform=Ft(t,s,!0,l.parseTransform),y=t.style,m=1e-6,_=bt.length,v=l,b={};if("string"==typeof v.transform&&wt)c=j.style,c[wt]=v.transform,c.display="block",c.position="absolute",N.body.appendChild(j),p=Ft(j,null,!1),N.body.removeChild(j);else if("object"==typeof v){if(p={scaleX:nt(null!=v.scaleX?v.scaleX:v.scale,g.scaleX),scaleY:nt(null!=v.scaleY?v.scaleY:v.scale,g.scaleY),scaleZ:nt(v.scaleZ,g.scaleZ),x:nt(v.x,g.x),y:nt(v.y,g.y),z:nt(v.z,g.z),xPercent:nt(v.xPercent,g.xPercent),yPercent:nt(v.yPercent,g.yPercent),perspective:nt(v.transformPerspective,g.perspective)},x=v.directionalRotation,null!=x)if("object"==typeof x)for(c in x)v[c]=x[c];else v.rotation=x;"string"==typeof v.x&&-1!==v.x.indexOf("%")&&(p.x=0,p.xPercent=nt(v.x,g.xPercent)),"string"==typeof v.y&&-1!==v.y.indexOf("%")&&(p.y=0,p.yPercent=nt(v.y,g.yPercent)),p.rotation=at("rotation"in v?v.rotation:"shortRotation"in v?v.shortRotation+"_short":"rotationZ"in v?v.rotationZ:g.rotation,g.rotation,"rotation",b),Tt&&(p.rotationX=at("rotationX"in v?v.rotationX:"shortRotationX"in v?v.shortRotationX+"_short":g.rotationX||0,g.rotationX,"rotationX",b),p.rotationY=at("rotationY"in v?v.rotationY:"shortRotationY"in v?v.shortRotationY+"_short":g.rotationY||0,g.rotationY,"rotationY",b)),p.skewX=null==v.skewX?g.skewX:at(v.skewX,g.skewX),p.skewY=null==v.skewY?g.skewY:at(v.skewY,g.skewY),(f=p.skewY-g.skewY)&&(p.skewX+=f,p.rotation+=f)}for(Tt&&null!=v.force3D&&(g.force3D=v.force3D,d=!0),g.skewType=v.skewType||g.skewType||a.defaultSkewType,u=g.force3D||g.z||g.rotationX||g.rotationY||p.z||p.rotationX||p.rotationY||p.perspective,u||null==v.scale||(p.scaleZ=1);--_>-1;)r=bt[_],h=p[r]-g[r],(h>m||-m>h||null!=v[r]||null!=C[r])&&(d=!0,n=new dt(g,r,g[r],h,n),r in b&&(n.e=b[r]),n.xs0=0,n.plugin=o,i._overwriteProps.push(n.n));return h=v.transformOrigin,g.svg&&(h||v.svgOrigin)&&(At(t,it(h),p,v.svgOrigin),n=new dt(g,"xOrigin",g.xOrigin,p.xOrigin-g.xOrigin,n,-1,"transformOrigin"),n.b=g.xOrigin,n.e=n.xs0=p.xOrigin,n=new dt(g,"yOrigin",g.yOrigin,p.yOrigin-g.yOrigin,n,-1,"transformOrigin"),n.b=g.yOrigin,n.e=n.xs0=p.yOrigin,h=vt?null:"0px 0px"),(h||Tt&&u&&g.zOrigin)&&(wt?(d=!0,r=Pt,h=(h||G(t,r,s,!1,"50% 50%"))+"",n=new dt(y,r,0,0,n,-1,"transformOrigin"),n.b=y[r],n.plugin=o,Tt?(c=g.zOrigin,h=h.split(" "),g.zOrigin=(h.length>2&&(0===c||"0px"!==h[2])?parseFloat(h[2]):c)||0,n.xs0=n.e=h[0]+" "+(h[1]||"50%")+" 0px",n=new dt(g,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=g.zOrigin):n.xs0=n.e=h):it(h+"",g)),d&&(i._transformType=g.svg&&vt||!u&&3!==this._transformType?2:3),n},prefix:!0}),mt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),mt("borderRadius",{defaultValue:"0px",parser:function(t,e,r,n,a,o){e=this.format(e);var l,p,f,c,h,u,d,x,g,y,m,_,v,b,w,O,P=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],T=t.style;for(g=parseFloat(t.offsetWidth),y=parseFloat(t.offsetHeight),l=e.split(" "),p=0;p<P.length;p++)this.p.indexOf("border")&&(P[p]=q(P[p])),h=c=G(t,P[p],s,!1,"0px"),-1!==h.indexOf(" ")&&(c=h.split(" "),h=c[0],c=c[1]),u=f=l[p],d=parseFloat(h),_=h.substr((d+"").length),v="="===u.charAt(1),v?(x=parseInt(u.charAt(0)+"1",10),u=u.substr(2),x*=parseFloat(u),m=u.substr((x+"").length-(0>x?1:0))||""):(x=parseFloat(u),m=u.substr((x+"").length)),""===m&&(m=i[r]||_),m!==_&&(b=U(t,"borderLeft",d,_),w=U(t,"borderTop",d,_),"%"===m?(h=b/g*100+"%",c=w/y*100+"%"):"em"===m?(O=U(t,"borderLeft",1,"em"),h=b/O+"em",c=w/O+"em"):(h=b+"px",c=w+"px"),v&&(u=parseFloat(h)+x+m,f=parseFloat(c)+x+m)),a=xt(T,P[p],h+" "+c,u+" "+f,!1,"0px",a);return a},prefix:!0,formatter:ct("0px 0px 0px 0px",!1,!0)}),mt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,r,i,n,a){var o,l,p,f,c,h,u="background-position",d=s||H(t,null),g=this.format((d?x?d.getPropertyValue(u+"-x")+" "+d.getPropertyValue(u+"-y"):d.getPropertyValue(u):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),y=this.format(e);if(-1!==g.indexOf("%")!=(-1!==y.indexOf("%"))&&(h=G(t,"backgroundImage").replace(X,""),h&&"none"!==h)){for(o=g.split(" "),l=y.split(" "),L.setAttribute("src",h),p=2;--p>-1;)g=o[p],f=-1!==g.indexOf("%"),f!==(-1!==l[p].indexOf("%"))&&(c=0===p?t.offsetWidth-L.width:t.offsetHeight-L.height,o[p]=f?parseFloat(g)/100*c+"px":parseFloat(g)/c*100+"%");g=o.join(" ")}return this.parseComplex(t.style,g,y,n,a)},formatter:it}),mt("backgroundSize",{defaultValue:"0 0",formatter:it}),mt("perspective",{defaultValue:"0px",prefix:!0}),mt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),mt("transformStyle",{prefix:!0}),mt("backfaceVisibility",{prefix:!0}),mt("userSelect",{prefix:!0}),mt("margin",{parser:ht("marginTop,marginRight,marginBottom,marginLeft")}),mt("padding",{parser:ht("paddingTop,paddingRight,paddingBottom,paddingLeft")}),mt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,r,i,n,a){var o,l,p;return 9>x?(l=t.currentStyle,p=8>x?" ":",",o="rect("+l.clipTop+p+l.clipRight+p+l.clipBottom+p+l.clipLeft+")",e=this.format(e).split(",").join(p)):(o=this.format(G(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),mt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),mt("autoRound,strictUnits",{parser:function(t,e,r,i,s){return s}}),mt("border",{defaultValue:"0px solid #000",parser:function(t,e,r,i,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",s,!1,"0px")+" "+G(t,"borderTopStyle",s,!1,"solid")+" "+G(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ft)||["#000"])[0]}}),mt("borderWidth",{parser:ht("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),mt("float,cssFloat,styleFloat",{parser:function(t,e,r,i,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new dt(a,o,0,0,s,-1,r,!1,0,a[o],e)}});var Ct=function(t){var e,r=this.t,i=r.filter||G(this.data,"filter")||"",s=this.s+this.c*t|0;100===s&&(-1===i.indexOf("atrix(")&&-1===i.indexOf("radient(")&&-1===i.indexOf("oader(")?(r.removeAttribute("filter"),e=!G(this.data,"filter")):(r.filter=i.replace(O,""),e=!0)),e||(this.xn1&&(r.filter=i=i||"alpha(opacity="+s+")"),-1===i.indexOf("pacity")?0===s&&this.xn1||(r.filter=i+" alpha(opacity="+s+")"):r.filter=i.replace(b,"opacity="+s))};mt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,r,i,n,a){var o=parseFloat(G(t,"opacity",s,!1,"1")),l=t.style,p="autoAlpha"===r;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),p&&1===o&&"hidden"===G(t,"visibility",s)&&0!==e&&(o=0),W?n=new dt(l,"opacity",o,e-o,n):(n=new dt(l,"opacity",100*o,100*(e-o),n),n.xn1=p?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ct),p&&(n=new dt(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",i._overwriteProps.push(n.n),i._overwriteProps.push(r)),n}});var Nt=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(T,"-$1").toLowerCase())):t.removeAttribute(e))},Vt=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,r=this.t.style;e;)e.v?r[e.p]=e.v:Nt(r,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};mt("className",{parser:function(t,e,i,n,a,o,l){var p,f,c,h,u,d=t.getAttribute("class")||"",x=t.style.cssText;if(a=n._classNamePT=new dt(t,i,0,0,a,2),a.setRatio=Vt,a.pr=-11,r=!0,a.b=d,f=J(t,s),c=t._gsClassPT){for(h={},u=c.data;u;)h[u.p]=1,u=u._next;c.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:d.replace(new RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),p=K(t,f,J(t),l,h),t.setAttribute("class",d),a.data=p.firstMPT,t.style.cssText=x,a=a.xfirst=n.parse(t,p.difs,a,o)}});var jt=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,r,i,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),i=e.length;--i>-1;)r=e[i],l[r]&&(l[r].parse===o?s=!0:r="transformOrigin"===r?Pt:l[r].p),Nt(a,r);s&&(Nt(a,wt),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(mt("clearProps",{parser:function(t,e,i,s,n){return n=new dt(t,i,0,0,n,2),n.setRatio=jt,n.e=e,n.pr=-10,n.data=s._tween,r=!0,n}}),p="bezier,throwProps,physicsProps,physics2D".split(","),gt=p.length;gt--;)_t(p[gt]);p=a.prototype,p._firstPT=p._lastParsedTransform=p._transform=null,p._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,f=e.autoRound,r=!1,i=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;var p,u,x,g,y,m,_,v,b,O=t.style;if(c&&""===O.zIndex&&(p=G(t,"zIndex",s),("auto"===p||""===p)&&this._addLazySet(O,"zIndex",0)),"string"==typeof e&&(g=O.cssText,p=J(t,s),O.cssText=g+";"+e,p=K(t,p,J(t)).difs,!W&&w.test(e)&&(p.opacity=parseFloat(RegExp.$1)),e=p,O.cssText=g),e.className?this._firstPT=u=l.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=u=this.parse(t,e,null),this._transformType){for(b=3===this._transformType,wt?h&&(c=!0,""===O.zIndex&&(_=G(t,"zIndex",s),("auto"===_||""===_)&&this._addLazySet(O,"zIndex",0)),d&&this._addLazySet(O,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(b?"visible":"hidden"))):O.zoom=1,x=u;x&&x._next;)x=x._next;v=new dt(t,"transform",0,0,null,2),this._linkCSSP(v,null,x),v.setRatio=wt?zt:Yt,v.data=this._transform||Ft(t,s,!0),v.tween=o,v.pr=-1,n.pop()}if(r){for(;u;){for(m=u._next,x=g;x&&x.pr>u.pr;)x=x._next;(u._prev=x?x._prev:y)?u._prev._next=u:g=u,(u._next=x)?x._prev=u:y=u,u=m}this._firstPT=g}return!0},p.parse=function(t,e,r,n){var a,o,p,c,h,u,d,x,g,y,m=t.style;for(a in e)u=e[a],o=l[a],o?r=o.parse(t,u,a,this,r,n,e):(h=G(t,a,s)+"",g="string"==typeof u,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||g&&P.test(u)?(g||(u=pt(u),
u=(u.length>3?"rgba(":"rgb(")+u.join(",")+")"),r=xt(m,a,h,u,!0,"transparent",r,0,n)):!g||-1===u.indexOf(" ")&&-1===u.indexOf(",")?(p=parseFloat(h),d=p||0===p?h.substr((p+"").length):"",(""===h||"auto"===h)&&("width"===a||"height"===a?(p=rt(t,a,s),d="px"):"left"===a||"top"===a?(p=Q(t,a,s),d="px"):(p="opacity"!==a?0:1,d="")),y=g&&"="===u.charAt(1),y?(c=parseInt(u.charAt(0)+"1",10),u=u.substr(2),c*=parseFloat(u),x=u.replace(v,"")):(c=parseFloat(u),x=g?u.replace(v,""):""),""===x&&(x=a in i?i[a]:d),u=c||0===c?(y?c+p:c)+x:e[a],d!==x&&""!==x&&(c||0===c)&&p&&(p=U(t,a,p,d),"%"===x?(p/=U(t,a,100,"%")/100,e.strictUnits!==!0&&(h=p+"%")):"em"===x?p/=U(t,a,1,"em"):"px"!==x&&(c=U(t,a,c,x),x="px"),y&&(c||0===c)&&(u=c+p+x)),y&&(c+=p),!p&&0!==p||!c&&0!==c?void 0!==m[a]&&(u||u+""!="NaN"&&null!=u)?(r=new dt(m,a,c||p||0,0,r,-1,a,!1,0,h,u),r.xs0="none"!==u||"display"!==a&&-1===a.indexOf("Style")?u:h):Z("invalid "+a+" tween value: "+e[a]):(r=new dt(m,a,p,c-p,r,0,a,f!==!1&&("px"===x||"zIndex"===a),0,h,u),r.xs0=x)):r=xt(m,a,h,u,!0,null,r,0,n)),n&&r&&!r.plugin&&(r.plugin=n);return r},p.setRatio=function(t){var e,r,i,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(i=s.l,2===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(r=s.xs0+e+s.xs1,i=1;i<s.l;i++)r+=s["xn"+i]+s["xs"+(i+1)];s.t[s.p]=r}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},p._enableTransforms=function(t){this._transform=this._transform||Ft(this._target,s,!0),this._transformType=this._transform.svg&&vt||!t&&3!==this._transformType?2:3};var Lt=function(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};p._addLazySet=function(t,e,r){var i=this._firstPT=new dt(t,e,0,0,this._firstPT,2);i.e=r,i.setRatio=Lt,i.data=this},p._linkCSSP=function(t,e,r,i){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,i=!0),r?r._next=t:i||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=r),t},p._kill=function(e){var r,i,s,n=e;if(e.autoAlpha||e.alpha){n={};for(i in e)n[i]=e[i];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(r=this._classNamePT)&&(s=r.xfirst,s&&s._prev?this._linkCSSP(s._prev,r._next,s._prev._prev):s===this._firstPT&&(this._firstPT=r._next),r._next&&this._linkCSSP(r._next,r._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Dt=function(t,e,r){var i,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Dt(t[s],e,r);else for(i=t.childNodes,s=i.length;--s>-1;)n=i[s],a=n.type,n.style&&(e.push(J(n)),r&&r.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Dt(n,e,r)};return a.cascadeTo=function(t,r,i){var s,n,a,o,l=e.to(t,r,i),p=[l],f=[],c=[],h=[],u=e._internals.reservedProps;for(t=l._targets||l.target,Dt(t,f,h),l.render(r,!0,!0),Dt(t,c),l.render(0,!0,!0),l._enabled(!0),s=h.length;--s>-1;)if(n=K(h[s],f[s],c[s]),n.firstMPT){n=n.difs;for(a in i)u[a]&&(n[a]=i[a]);o={};for(a in n)o[a]=f[s][a];p.push(e.fromTo(h[s],r,o,n))}return p},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../TweenLite.js":"tween-lite"}],"lodash":[function(require,module,exports){
(function (global){
/**
 * @license
 * lodash 3.9.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern -d -o ./index.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '3.9.3';

  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128,
      REARG_FLAG = 256;

  /** Used as default options for `_.trunc`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect when a function becomes hot. */
  var HOT_COUNT = 150,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_DROP_WHILE_FLAG = 0,
      LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
      reUnescapedHtml = /[&<>"'`]/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

  /**
   * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
   * In addition to special characters the forward slash is escaped to allow for
   * easier `eval` use and `Function` compilation.
   */
  var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);

  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /** Used to match [ES template delimiters](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literal-lexical-components). */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect hexadecimal string values. */
  var reHasHexPrefix = /^0[xX]/;

  /** Used to detect host constructors (Safari > 5). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^\d+$/;

  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to match words to create compound words. */
  var reWords = (function() {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  }());

  /** Used to detect and test for whitespace. */
  var whitespace = (
    // Basic whitespace characters.
    ' \t\x0b\f\xa0\ufeff' +

    // Line terminators.
    '\n\r\u2028\u2029' +

    // Unicode category "Zs" space separators.
    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
  );

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'document',
    'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', 'window'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
  cloneableTags[dateTag] = cloneableTags[float32Tag] =
  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[stringTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[mapTag] = cloneableTags[setTag] =
  cloneableTags[weakMapTag] = false;

  /** Used as an internal `_.debounce` options object by `_.throttle`. */
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };

  /** Used to map latin-1 supplementary letters to basic latin letters. */
  var deburredLetters = {
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`'
  };

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `compareAscending` which compares values and
   * sorts them in ascending order without guaranteeing a stable sort.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function baseCompareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;

      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;

      if ((value > other && !othIsNull) || !valIsReflexive ||
          (valIsNull && !othIsUndef && othIsReflexive) ||
          (valIsUndef && othIsReflexive)) {
        return 1;
      }
      if ((value < other && !valIsNull) || !othIsReflexive ||
          (othIsNull && !valIsUndef && valIsReflexive) ||
          (othIsUndef && valIsReflexive)) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without support for binary searches.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isFunction` without support for environments
   * with incorrect `typeof` results.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   */
  function baseIsFunction(value) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
    return typeof value == 'function' || false;
  }

  /**
   * Converts `value` to a string if it's not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : (value + '');
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the first character not found in `chars`.
   */
  function charsLeftIndex(string, chars) {
    var index = -1,
        length = string.length;

    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the last character not found in `chars`.
   */
  function charsRightIndex(string, chars) {
    var index = string.length;

    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.sortBy` to compare transformed elements of a collection and stable
   * sort them in ascending order.
   *
   * @private
   * @param {Object} object The object to compare to `other`.
   * @param {Object} other The object to compare to `object`.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareAscending(object, other) {
    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
  }

  /**
   * Used by `_.sortByOrder` to compare multiple properties of each element
   * in a collection and stable sort them in the following order:
   *
   * If `orders` is unspecified, sort in ascending order for all properties.
   * Otherwise, for each property, sort in ascending order if its corresponding value in
   * orders is true, and descending order if false.
   *
   * @private
   * @param {Object} object The object to compare to `other`.
   * @param {Object} other The object to compare to `object`.
   * @param {boolean[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;

    while (++index < length) {
      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        return result * (orders[index] ? 1 : -1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  /**
   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeHtmlChar(chr) {
    return htmlEscapes[chr];
  }

  /**
   * Used by `_.template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
   * character code is whitespace.
   *
   * @private
   * @param {number} charCode The character code to inspect.
   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
   */
  function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }

  /**
   * An implementation of `_.uniq` optimized for sorted arrays without support
   * for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The function invoked per iteration.
   * @returns {Array} Returns the new duplicate-value-free array.
   */
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;

      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the first non-whitespace character.
   */
  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;

    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedRightIndex(string) {
    var index = string.length;

    while (index-- && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  function unescapeHtmlChar(chr) {
    return htmlUnescapes[chr];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the given `context` object.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // using `context` to mock `Date#getTime` use in `_.now`
   * var mock = _.runInContext({
   *   'Date': function() {
   *     return { 'getTime': getTimeMock };
   *   }
   * });
   *
   * // or creating a suped-up `defer` in Node.js
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See https://es5.github.io/#x11.1.5 for more details.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for native method references. */
    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        stringProto = String.prototype;

    /** Used to detect DOM support. */
    var document = (document = context.window) ? document.document : null;

    /** Used to resolve the decompiled source of functions. */
    var fnToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /**
     * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
     * of values.
     */
    var objToString = objectProto.toString;

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = context._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      escapeRegExp(fnToString.call(hasOwnProperty))
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Native method references. */
    var ArrayBuffer = getNative(context, 'ArrayBuffer'),
        bufferSlice = getNative(ArrayBuffer && new ArrayBuffer(0), 'slice'),
        ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        getPrototypeOf = getNative(Object, 'getPrototypeOf'),
        parseFloat = context.parseFloat,
        push = arrayProto.push,
        Set = getNative(context, 'Set'),
        setTimeout = context.setTimeout,
        splice = arrayProto.splice,
        Uint8Array = getNative(context, 'Uint8Array'),
        WeakMap = getNative(context, 'WeakMap');

    /** Used to clone array buffers. */
    var Float64Array = (function() {
      // Safari 5 errors when using an array buffer to initialize a typed array
      // where the array buffer's `byteLength` is not a multiple of the typed
      // array's `BYTES_PER_ELEMENT`.
      try {
        var func = getNative(context, 'Float64Array'),
            result = new func(new ArrayBuffer(10), 0, 1) && func;
      } catch(e) {}
      return result || null;
    }());

    /* Native method references for those with the same name as other `lodash` methods. */
    var nativeCreate = getNative(Object, 'create'),
        nativeIsArray = getNative(Array, 'isArray'),
        nativeIsFinite = context.isFinite,
        nativeKeys = getNative(Object, 'keys'),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = getNative(Date, 'now'),
        nativeNumIsFinite = getNative(Number, 'isFinite'),
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used as references for `-Infinity` and `Infinity`. */
    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

    /** Used as references for the maximum length and index of an array. */
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

    /** Used as the size, in bytes, of each `Float64Array` element. */
    var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;

    /**
     * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
     * of an array-like value.
     */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
     * Methods that operate on and return arrays, collections, and functions can
     * be chained together. Methods that return a boolean or single value will
     * automatically end the chain returning the unwrapped value. Explicit chaining
     * may be enabled using `_.chain`. The execution of chained methods is lazy,
     * that is, execution is deferred until `_#value` is implicitly or explicitly
     * called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
     * fusion is an optimization that merges iteratees to avoid creating intermediate
     * arrays and reduce the number of iteratee executions.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
     * `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
     * and `where`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defer`, `delay`,
     * `difference`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `fill`,
     * `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`, `forEach`,
     * `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`,
     * `groupBy`, `indexBy`, `initial`, `intersection`, `invert`, `invoke`, `keys`,
     * `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `method`, `methodOf`, `mixin`, `negate`, `omit`, `once`,
     * `pairs`, `partial`, `partialRight`, `partition`, `pick`, `plant`, `pluck`,
     * `property`, `propertyOf`, `pull`, `pullAt`, `push`, `range`, `rearg`,
     * `reject`, `remove`, `rest`, `restParam`, `reverse`, `set`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `sortByAll`, `sortByOrder`, `splice`, `spread`,
     * `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`,
     * `thru`, `times`, `toArray`, `toPlainObject`, `transform`, `union`, `uniq`,
     * `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`, `where`, `without`,
     * `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `deburr`,
     * `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
     * `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `get`,
     * `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`, `inRange`, `isArguments`,
     * `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isError`,
     * `isFinite` `isFunction`, `isMatch`, `isNative`, `isNaN`, `isNull`, `isNumber`,
     * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`,
     * `isTypedArray`, `join`, `kebabCase`, `last`, `lastIndexOf`, `lt`, `lte`,
     * `max`, `min`, `noConflict`, `noop`, `now`, `pad`, `padLeft`, `padRight`,
     * `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`,
     * `runInContext`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
     * `sortedLastIndex`, `startCase`, `startsWith`, `sum`, `template`, `trim`,
     * `trimLeft`, `trimRight`, `trunc`, `unescape`, `uniqueId`, `value`, and `words`
     *
     * The wrapper method `sample` will return a wrapped value when `n` is provided,
     * otherwise an unwrapped value is returned.
     *
     * @name _
     * @constructor
     * @category Chain
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(total, n) {
     *   return total + n;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(n) {
     *   return n * n;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The function whose prototype all chaining wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
     */
    function LodashWrapper(value, chainAll, actions) {
      this.__wrapped__ = value;
      this.__actions__ = actions || [];
      this.__chain__ = !!chainAll;
    }

    /**
     * An object environment feature flags.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    (function(x) {
      var Ctor = function() { this.x = x; },
          object = { '0': x, 'length': x },
          props = [];

      Ctor.prototype = { 'valueOf': x, 'y': x };
      for (var key in new Ctor) { props.push(key); }

      /**
       * Detect if the DOM is supported.
       *
       * @memberOf _.support
       * @type boolean
       */
      try {
        support.dom = document.createDocumentFragment().nodeType === 11;
      } catch(e) {
        support.dom = false;
      }
    }(1, 0));

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB). Change the following template settings to use
     * alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = null;
      this.__dir__ = 1;
      this.__dropCount__ = 0;
      this.__filtered__ = false;
      this.__iteratees__ = null;
      this.__takeCount__ = POSITIVE_INFINITY;
      this.__views__ = null;
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var actions = this.__actions__,
          iteratees = this.__iteratees__,
          views = this.__views__,
          result = new LazyWrapper(this.__wrapped__);

      result.__actions__ = actions ? arrayCopy(actions) : null;
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = iteratees ? arrayCopy(iteratees) : null;
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = views ? arrayCopy(views) : null;
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value();
      if (!isArray(array)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var dir = this.__dir__,
          isRight = dir < 0,
          view = getView(0, array.length, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          takeCount = nativeMin(length, this.__takeCount__),
          iteratees = this.__iteratees__,
          iterLength = iteratees ? iteratees.length : 0,
          resIndex = 0,
          result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type;

          if (type == LAZY_DROP_WHILE_FLAG) {
            if (data.done && (isRight ? (index > data.index) : (index < data.index))) {
              data.count = 0;
              data.done = false;
            }
            data.index = index;
            if (!data.done) {
              var limit = data.limit;
              if (!(data.done = limit > -1 ? (data.count++ >= limit) : !iteratee(value))) {
                continue outer;
              }
            }
          } else {
            var computed = iteratee(value);
            if (type == LAZY_MAP_FLAG) {
              value = computed;
            } else if (!computed) {
              if (type == LAZY_FILTER_FLAG) {
                continue outer;
              } else {
                break outer;
              }
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a cache object to store key/value pairs.
     *
     * @private
     * @static
     * @name Cache
     * @memberOf _.memoize
     */
    function MapCache() {
      this.__data__ = {};
    }

    /**
     * Removes `key` and its value from the cache.
     *
     * @private
     * @name delete
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
     */
    function mapDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    /**
     * Gets the cached value for `key`.
     *
     * @private
     * @name get
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the cached value.
     */
    function mapGet(key) {
      return key == '__proto__' ? undefined : this.__data__[key];
    }

    /**
     * Checks if a cached value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapHas(key) {
      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
    }

    /**
     * Sets `value` to `key` of the cache.
     *
     * @private
     * @name set
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to cache.
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache object.
     */
    function mapSet(key, value) {
      if (key != '__proto__') {
        this.__data__[key] = value;
      }
      return this;
    }

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates a cache object to store unique values.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var length = values ? values.length : 0;

      this.data = { 'hash': nativeCreate(null), 'set': new Set };
      while (length--) {
        this.push(values[length]);
      }
    }

    /**
     * Checks if `value` is in `cache` mimicking the return signature of
     * `_.indexOf` by returning `0` if the value is found, else `-1`.
     *
     * @private
     * @param {Object} cache The cache to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns `0` if `value` is found, else `-1`.
     */
    function cacheIndexOf(cache, value) {
      var data = cache.data,
          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

      return result ? 0 : -1;
    }

    /**
     * Adds `value` to the cache.
     *
     * @private
     * @name push
     * @memberOf SetCache
     * @param {*} value The value to cache.
     */
    function cachePush(value) {
      var data = this.data;
      if (typeof value == 'string' || isObject(value)) {
        data.set.add(value);
      } else {
        data.hash[value] = true;
      }
    }

    /*------------------------------------------------------------------------*/

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function arrayCopy(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.forEachRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEachRight(array, iteratee) {
      var length = array.length;

      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.every` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     */
    function arrayEvery(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
     * with one argument: (value).
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function arrayExtremum(array, iteratee, comparator, exValue) {
      var index = -1,
          length = array.length,
          computed = exValue,
          result = computed;

      while (++index < length) {
        var value = array[index],
            current = +iteratee(value);

        if (comparator(current, computed)) {
          computed = current;
          result = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.filter` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.map` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the first element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initFromArray) {
      var index = -1,
          length = array.length;

      if (initFromArray && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.reduceRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the last element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
      var length = array.length;
      if (initFromArray && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.some` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    /**
     * A specialized version of `_.sum` for arrays without support for iteratees.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     */
    function arraySum(array) {
      var length = array.length,
          result = 0;

      while (length--) {
        result += +array[length] || 0;
      }
      return result;
    }

    /**
     * Used by `_.defaults` to customize its `_.assign` use.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : objectValue;
    }

    /**
     * Used by `_.template` to customize its `_.assign` use.
     *
     * **Note:** This function is like `assignDefaults` except that it ignores
     * inherited property values when checking if a property is `undefined`.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @param {string} key The key associated with the object and source values.
     * @param {Object} object The destination object.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignOwnDefaults(objectValue, sourceValue, key, object) {
      return (objectValue === undefined || !hasOwnProperty.call(object, key))
        ? sourceValue
        : objectValue;
    }

    /**
     * A specialized version of `_.assign` for customizing assigned values without
     * support for argument juggling, multiple sources, and `this` binding `customizer`
     * functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     */
    function assignWith(object, source, customizer) {
      var index = -1,
          props = keys(source),
          length = props.length;

      while (++index < length) {
        var key = props[index],
            value = object[key],
            result = customizer(value, source[key], key, object, source);

        if ((result === result ? (result !== value) : (value === value)) ||
            (value === undefined && !(key in object))) {
          object[key] = result;
        }
      }
      return object;
    }

    /**
     * The base implementation of `_.assign` without support for argument juggling,
     * multiple sources, and `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return source == null
        ? object
        : baseCopy(source, keys(source), object);
    }

    /**
     * The base implementation of `_.at` without support for string collections
     * and individual key arguments.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {number[]|string[]} props The property names or indexes of elements to pick.
     * @returns {Array} Returns the new array of picked elements.
     */
    function baseAt(collection, props) {
      var index = -1,
          isNil = collection == null,
          isArr = !isNil && isArrayLike(collection),
          length = isArr ? collection.length : 0,
          propsLength = props.length,
          result = Array(propsLength);

      while(++index < propsLength) {
        var key = props[index];
        if (isArr) {
          result[index] = isIndex(key, length) ? collection[key] : undefined;
        } else {
          result[index] = isNil ? undefined : collection[key];
        }
      }
      return result;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property names to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @returns {Object} Returns `object`.
     */
    function baseCopy(source, props, object) {
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        object[key] = source[key];
      }
      return object;
    }

    /**
     * The base implementation of `_.callback` which supports specifying the
     * number of arguments to provide to `func`.
     *
     * @private
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function baseCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (type == 'function') {
        return thisArg === undefined
          ? func
          : bindCallback(func, thisArg, argCount);
      }
      if (func == null) {
        return identity;
      }
      if (type == 'object') {
        return baseMatches(func);
      }
      return thisArg === undefined
        ? property(func)
        : baseMatchesProperty(func, thisArg);
    }

    /**
     * The base implementation of `_.clone` without support for argument juggling
     * and `this` binding `customizer` functions.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The object `value` belongs to.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return arrayCopy(value, result);
        }
      } else {
        var tag = objToString.call(value),
            isFunc = tag == funcTag;

        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return baseAssign(result, value);
          }
        } else {
          return cloneableTags[tag]
            ? initCloneByTag(value, tag, isDeep)
            : (object ? value : {});
        }
      }
      // Check for circular references and return corresponding clone.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      // Add the source value to the stack of traversed objects and associate it with its clone.
      stackA.push(value);
      stackB.push(result);

      // Recursively populate clone (susceptible to call stack limits).
      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
      });
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          object.prototype = prototype;
          var result = new object;
          object.prototype = null;
        }
        return result || {};
      };
    }());

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts an index
     * of where to slice the arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Object} args The arguments provide to `func`.
     * @returns {number} Returns the timer id.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of `_.difference` which accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values) {
      var length = array ? array.length : 0,
          result = [];

      if (!length) {
        return result;
      }
      var index = -1,
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          cache = (isCommon && values.length >= 200) ? createCache(values) : null,
          valuesLength = values.length;

      if (cache) {
        indexOf = cacheIndexOf;
        isCommon = false;
        values = cache;
      }
      outer:
      while (++index < length) {
        var value = array[index];

        if (isCommon && value === value) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === value) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (indexOf(values, value, 0) < 0) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * Gets the extremum value of `collection` invoking `iteratee` for each value
     * in `collection` to generate the criterion by which the value is ranked.
     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(collection, iteratee, comparator, exValue) {
      var computed = exValue,
          result = computed;

      baseEach(collection, function(value, index, collection) {
        var current = +iteratee(value, index, collection);
        if (comparator(current, computed) || (current === exValue && current === result)) {
          computed = current;
          result = value;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : (end >>> 0);
      start >>>= 0;

      while (start < length) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
     * without support for callback shorthands and `this` binding, which iterates
     * over `collection` using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @param {boolean} [retKey] Specify returning the key of the found element
     *  instead of the element itself.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFind(collection, predicate, eachFunc, retKey) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = retKey ? key : value;
          return false;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with added support for restricting
     * flattening and specifying the start index.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, isDeep, isStrict) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) &&
            (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            // Recursively flatten arrays (susceptible to call stack limits).
            value = baseFlatten(value, isDeep, isStrict);
          }
          var valIndex = -1,
              valLength = value.length;

          while (++valIndex < valLength) {
            result[++resIndex] = value[valIndex];
          }
        } else if (!isStrict) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForIn` and `baseForOwn` which iterates
     * over `object` properties returned by `keysFunc` invoking `iteratee` for
     * each property. Iteratee functions may exit iteration early by explicitly
     * returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forIn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForIn(object, iteratee) {
      return baseFor(object, iteratee, keysIn);
    }

    /**
     * The base implementation of `_.forOwn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from those provided.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the new array of filtered property names.
     */
    function baseFunctions(object, props) {
      var index = -1,
          length = props.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var key = props[index];
        if (isFunction(object[key])) {
          result[++resIndex] = key;
        }
      }
      return result;
    }

    /**
     * The base implementation of `get` without support for string paths
     * and default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path of the property to get.
     * @param {string} [pathKey] The key representation of path.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path, pathKey) {
      if (object == null) {
        return;
      }
      if (pathKey !== undefined && pathKey in toObject(object)) {
        path = [pathKey];
      }
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `_.isEqual` without support for `this` binding
     * `customizer` functions.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = objToString.call(object);
        if (objTag == argsTag) {
          objTag = objectTag;
        } else if (objTag != objectTag) {
          objIsArr = isTypedArray(object);
        }
      }
      if (!othIsArr) {
        othTag = objToString.call(other);
        if (othTag == argsTag) {
          othTag = objectTag;
        } else if (othTag != objectTag) {
          othIsArr = isTypedArray(other);
        }
      }
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
      }
      if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
      }
      if (!isSameTag) {
        return false;
      }
      // Assume cyclic values are equal.
      // For more information on detecting circular references see https://es5.github.io/#JO.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == object) {
          return stackB[length] == other;
        }
      }
      // Add `object` and `other` to the stack of traversed objects.
      stackA.push(object);
      stackB.push(other);

      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

      stackA.pop();
      stackB.pop();

      return result;
    }

    /**
     * The base implementation of `_.isMatch` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} matchData The propery names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = toObject(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.map` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which does not clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        var key = matchData[0][0],
            value = matchData[0][1];

        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === value && (value !== undefined || (key in toObject(object)));
        };
      }
      return function(object) {
        return baseIsMatch(object, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to compare.
     * @returns {Function} Returns the new function.
     */
    function baseMatchesProperty(path, srcValue) {
      var isArr = isArray(path),
          isCommon = isKey(path) && isStrictComparable(srcValue),
          pathKey = (path + '');

      path = toPath(path);
      return function(object) {
        if (object == null) {
          return false;
        }
        var key = pathKey;
        object = toObject(object);
        if ((isArr || !isCommon) && !(key in object)) {
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          if (object == null) {
            return false;
          }
          key = last(path);
          object = toObject(object);
        }
        return object[key] === srcValue
          ? (srcValue !== undefined || (key in object))
          : baseIsEqual(srcValue, object[key], undefined, true);
      };
    }

    /**
     * The base implementation of `_.merge` without support for argument juggling,
     * multiple sources, and `this` binding `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [customizer] The function to customize merging properties.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {Object} Returns `object`.
     */
    function baseMerge(object, source, customizer, stackA, stackB) {
      if (!isObject(object)) {
        return object;
      }
      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
          props = isSrcArr ? null : keys(source);

      arrayEach(props || source, function(srcValue, key) {
        if (props) {
          key = srcValue;
          srcValue = source[key];
        }
        if (isObjectLike(srcValue)) {
          stackA || (stackA = []);
          stackB || (stackB = []);
          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
        }
        else {
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = result === undefined;

          if (isCommon) {
            result = srcValue;
          }
          if ((result !== undefined || (isSrcArr && !(key in object))) &&
              (isCommon || (result === result ? (result !== value) : (value === value)))) {
            object[key] = result;
          }
        }
      });
      return object;
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize merging properties.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
      var length = stackA.length,
          srcValue = source[key];

      while (length--) {
        if (stackA[length] == srcValue) {
          object[key] = stackB[length];
          return;
        }
      }
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;

      if (isCommon) {
        result = srcValue;
        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
          result = isArray(value)
            ? value
            : (isArrayLike(value) ? arrayCopy(value) : []);
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          result = isArguments(value)
            ? toPlainObject(value)
            : (isPlainObject(value) ? value : {});
        }
        else {
          isCommon = false;
        }
      }
      // Add the source value to the stack of traversed objects and associate
      // it with its merged value.
      stackA.push(srcValue);
      stackB.push(result);

      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
      } else if (result === result ? (result !== value) : (value === value)) {
        object[key] = result;
      }
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new function.
     */
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     */
    function basePropertyDeep(path) {
      var pathKey = (path + '');
      path = toPath(path);
      return function(object) {
        return baseGet(object, path, pathKey);
      };
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * index arguments and capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0;
      while (length--) {
        var index = indexes[length];
        if (index != previous && isIndex(index)) {
          var previous = index;
          splice.call(array, index, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for argument juggling
     * and returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns the random number.
     */
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.reduce` and `_.reduceRight` without support
     * for callback shorthands and `this` binding, which iterates over `collection`
     * using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initFromCollection Specify using the first or last element
     *  of `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
      eachFunc(collection, function(value, index, collection) {
        accumulator = initFromCollection
          ? (initFromCollection = false, value)
          : iteratee(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `setData` without support for hot loop detection.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortBy` which uses `comparer` to define
     * the sort order of `array` and replaces criteria objects with their
     * corresponding values.
     *
     * @private
     * @param {Array} array The array to sort.
     * @param {Function} comparer The function to define sort order.
     * @returns {Array} Returns `array`.
     */
    function baseSortBy(array, comparer) {
      var length = array.length;

      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }

    /**
     * The base implementation of `_.sortByOrder` without param guards.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseSortByOrder(collection, iteratees, orders) {
      var callback = getCallback(),
          index = -1;

      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

      var result = baseMap(collection, function(value) {
        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.sum` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function baseSum(collection, iteratee) {
      var result = 0;
      baseEach(collection, function(value, index, collection) {
        result += +iteratee(value, index, collection) || 0;
      });
      return result;
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The function invoked per iteration.
     * @returns {Array} Returns the new duplicate-value-free array.
     */
    function baseUniq(array, iteratee) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array.length,
          isCommon = indexOf == baseIndexOf,
          isLarge = isCommon && length >= 200,
          seen = isLarge ? createCache() : null,
          result = [];

      if (seen) {
        indexOf = cacheIndexOf;
        isCommon = false;
      } else {
        isLarge = false;
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;

        if (isCommon && value === value) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (indexOf(seen, computed, 0) < 0) {
          if (iteratee || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
      var index = -1,
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /**
     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
     * and `_.takeWhile` without support for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to peform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      var index = -1,
          length = actions.length;

      while (++index < length) {
        var args = [result],
            action = actions[index];

        push.apply(args, action.args);
        result = action.func.apply(action.thisArg, args);
      }
      return result;
    }

    /**
     * Performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndex(array, value, retHighest) {
      var low = 0,
          high = array ? array.length : low;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return binaryIndexBy(array, value, identity, retHighest);
    }

    /**
     * This function is like `binaryIndex` except that it invokes `iteratee` for
     * `value` and each element of `array` to compute their sort ranking. The
     * iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array ? array.length : 0,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsUndef = value === undefined;

      while (low < high) {
        var mid = floor((low + high) / 2),
            computed = iteratee(array[mid]),
            isDef = computed !== undefined,
            isReflexive = computed === computed;

        if (valIsNaN) {
          var setLow = isReflexive || retHighest;
        } else if (valIsNull) {
          setLow = isReflexive && isDef && (retHighest || computed != null);
        } else if (valIsUndef) {
          setLow = isReflexive && (retHighest || isDef);
        } else if (computed == null) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * A specialized version of `baseCallback` which only supports `this` binding
     * and specifying the number of arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function bindCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      if (thisArg === undefined) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
        case 5: return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
      }
      return function() {
        return func.apply(thisArg, arguments);
      };
    }

    /**
     * Creates a clone of the given array buffer.
     *
     * @private
     * @param {ArrayBuffer} buffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function bufferClone(buffer) {
      return bufferSlice.call(buffer, 0);
    }
    if (!bufferSlice) {
      // PhantomJS has `ArrayBuffer` and `Uint8Array` but not `Float64Array`.
      bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function(buffer) {
        var byteLength = buffer.byteLength,
            floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0,
            offset = floatLength * FLOAT64_BYTES_PER_ELEMENT,
            result = new ArrayBuffer(byteLength);

        if (floatLength) {
          var view = new Float64Array(result, 0, floatLength);
          view.set(new Float64Array(buffer, 0, floatLength));
        }
        if (byteLength != offset) {
          view = new Uint8Array(result, offset);
          view.set(new Uint8Array(buffer, offset));
        }
        return result;
      };
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders) {
      var holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          leftIndex = -1,
          leftLength = partials.length,
          result = Array(argsLength + leftLength);

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
      while (argsLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders) {
      var holdersIndex = -1,
          holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          rightIndex = -1,
          rightLength = partials.length,
          result = Array(argsLength + rightLength);

      while (++argsIndex < argsLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
      return result;
    }

    /**
     * Creates a function that aggregates a collection, creating an accumulator
     * object composed from the results of running each element in the collection
     * through an iteratee.
     *
     * **Note:** This function is used to create `_.countBy`, `_.groupBy`, `_.indexBy`,
     * and `_.partition`.
     *
     * @private
     * @param {Function} setter The function to set keys and values of the accumulator object.
     * @param {Function} [initializer] The function to initialize the accumulator object.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee, thisArg) {
        var result = initializer ? initializer() : {};
        iteratee = getCallback(iteratee, thisArg, 3);

        if (isArray(collection)) {
          var index = -1,
              length = collection.length;

          while (++index < length) {
            var value = collection[index];
            setter(result, value, iteratee(value, index, collection), collection);
          }
        } else {
          baseEach(collection, function(value, key, collection) {
            setter(result, value, iteratee(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a function that assigns properties of source object(s) to a given
     * destination object.
     *
     * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return restParam(function(object, sources) {
        var index = -1,
            length = object == null ? 0 : sources.length,
            customizer = length > 2 ? sources[length - 2] : undefined,
            guard = length > 2 ? sources[2] : undefined,
            thisArg = length > 1 ? sources[length - 1] : undefined;

        if (typeof customizer == 'function') {
          customizer = bindCallback(customizer, thisArg, 5);
          length -= 2;
        } else {
          customizer = typeof thisArg == 'function' ? thisArg : undefined;
          length -= (customizer ? 1 : 0);
        }
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        var length = collection ? getLength(collection) : 0;
        if (!isLength(length)) {
          return eachFunc(collection, iteratee);
        }
        var index = fromRight ? length : -1,
            iterable = toObject(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var iterable = toObject(object),
            props = keysFunc(object),
            length = props.length,
            index = fromRight ? length : -1;

        while ((fromRight ? index-- : ++index < length)) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with the `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new bound function.
     */
    function createBindWrapper(func, thisArg) {
      var Ctor = createCtorWrapper(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(thisArg, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a `Set` cache object to optimize linear searches of large arrays.
     *
     * @private
     * @param {Array} [values] The values to cache.
     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
     */
    var createCache = !(nativeCreate && Set) ? constant(null) : function(values) {
      return new SetCache(values);
    };

    /**
     * Creates a function that produces compound words out of the words in a
     * given string.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        var index = -1,
            array = words(deburr(string)),
            length = array.length,
            result = '';

        while (++index < length) {
          result = callback(result, array[index], index);
        }
        return result;
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtorWrapper(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors.
        // See https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a `_.curry` or `_.curryRight` function.
     *
     * @private
     * @param {boolean} flag The curry bit flag.
     * @returns {Function} Returns the new curry function.
     */
    function createCurry(flag) {
      function curryFunc(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = null;
        }
        var result = createWrapper(func, flag, null, null, null, null, null, arity);
        result.placeholder = curryFunc.placeholder;
        return result;
      }
      return curryFunc;
    }

    /**
     * Creates a `_.max` or `_.min` function.
     *
     * @private
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {Function} Returns the new extremum function.
     */
    function createExtremum(comparator, exValue) {
      return function(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = null;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        if (iteratee.length == 1) {
          collection = toIterable(collection);
          var result = arrayExtremum(collection, iteratee, comparator, exValue);
          if (!(collection.length && result === exValue)) {
            return result;
          }
        }
        return baseExtremum(collection, iteratee, comparator, exValue);
      };
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFind(eachFunc, fromRight) {
      return function(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        if (isArray(collection)) {
          var index = baseFindIndex(collection, predicate, fromRight);
          return index > -1 ? collection[index] : undefined;
        }
        return baseFind(collection, predicate, eachFunc);
      };
    }

    /**
     * Creates a `_.findIndex` or `_.findLastIndex` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFindIndex(fromRight) {
      return function(array, predicate, thisArg) {
        if (!(array && array.length)) {
          return -1;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFindIndex(array, predicate, fromRight);
      };
    }

    /**
     * Creates a `_.findKey` or `_.findLastKey` function.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new find function.
     */
    function createFindKey(objectFunc) {
      return function(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, objectFunc, true);
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return function() {
        var wrapper,
            length = arguments.length,
            index = fromRight ? length : -1,
            leftIndex = 0,
            funcs = Array(length);

        while ((fromRight ? index-- : ++index < length)) {
          var func = funcs[leftIndex++] = arguments[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
            wrapper = new LodashWrapper([]);
          }
        }
        index = wrapper ? -1 : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : null;

          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments;
          if (wrapper && args.length == 1 && isArray(args[0])) {
            return wrapper.plant(args[0]).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : args[0];

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      };
    }

    /**
     * Creates a function for `_.forEach` or `_.forEachRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createForEach(arrayFunc, eachFunc) {
      return function(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee)
          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
      };
    }

    /**
     * Creates a function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForIn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee, keysIn);
      };
    }

    /**
     * Creates a function for `_.forOwn` or `_.forOwnRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForOwn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee);
      };
    }

    /**
     * Creates a function for `_.mapKeys` or `_.mapValues`.
     *
     * @private
     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
     * @returns {Function} Returns the new map function.
     */
    function createObjectMapper(isMapKeys) {
      return function(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);

        baseForOwn(object, function(value, key, object) {
          var mapped = iteratee(value, key, object);
          key = isMapKeys ? mapped : key;
          value = isMapKeys ? value : mapped;
          result[key] = value;
        });
        return result;
      };
    }

    /**
     * Creates a function for `_.padLeft` or `_.padRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify padding from the right.
     * @returns {Function} Returns the new pad function.
     */
    function createPadDir(fromRight) {
      return function(string, length, chars) {
        string = baseToString(string);
        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
      };
    }

    /**
     * Creates a `_.partial` or `_.partialRight` function.
     *
     * @private
     * @param {boolean} flag The partial bit flag.
     * @returns {Function} Returns the new partial function.
     */
    function createPartial(flag) {
      var partialFunc = restParam(function(func, partials) {
        var holders = replaceHolders(partials, partialFunc.placeholder);
        return createWrapper(func, flag, null, partials, holders);
      });
      return partialFunc;
    }

    /**
     * Creates a function for `_.reduce` or `_.reduceRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createReduce(arrayFunc, eachFunc) {
      return function(collection, iteratee, accumulator, thisArg) {
        var initFromArray = arguments.length < 3;
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with optional `this`
     * binding of, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG,
          isBind = bitmask & BIND_FLAG,
          isBindKey = bitmask & BIND_KEY_FLAG,
          isCurry = bitmask & CURRY_FLAG,
          isCurryBound = bitmask & CURRY_BOUND_FLAG,
          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
          Ctor = isBindKey ? null : createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it to other functions.
        var length = arguments.length,
            index = length,
            args = Array(length);

        while (index--) {
          args[index] = arguments[index];
        }
        if (partials) {
          args = composeArgs(args, partials, holders);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight);
        }
        if (isCurry || isCurryRight) {
          var placeholder = wrapper.placeholder,
              argsHolders = replaceHolders(args, placeholder);

          length -= argsHolders.length;
          if (length < arity) {
            var newArgPos = argPos ? arrayCopy(argPos) : null,
                newArity = nativeMax(arity - length, 0),
                newsHolders = isCurry ? argsHolders : null,
                newHoldersRight = isCurry ? null : argsHolders,
                newPartials = isCurry ? args : null,
                newPartialsRight = isCurry ? null : args;

            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

            if (!isCurryBound) {
              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
            }
            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                result = createHybridWrapper.apply(undefined, newData);

            if (isLaziable(func)) {
              setData(result, newData);
            }
            result.placeholder = placeholder;
            return result;
          }
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        if (argPos) {
          args = reorder(args, argPos);
        }
        if (isAry && ary < args.length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtorWrapper(func);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates the padding required for `string` based on the given `length`.
     * The `chars` string is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {string} string The string to create padding for.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the pad for `string`.
     */
    function createPadding(string, length, chars) {
      var strLength = string.length;
      length = +length;

      if (strLength >= length || !nativeIsFinite(length)) {
        return '';
      }
      var padLength = length - strLength;
      chars = chars == null ? ' ' : (chars + '');
      return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
    }

    /**
     * Creates a function that wraps `func` and invokes it with the optional `this`
     * binding of `thisArg` and the `partials` prepended to those provided to
     * the wrapper.
     *
     * @private
     * @param {Function} func The function to partially apply arguments to.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to the new function.
     * @returns {Function} Returns the new bound function.
     */
    function createPartialWrapper(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it `func`.
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(argsLength + leftLength);

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
     *
     * @private
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {Function} Returns the new index function.
     */
    function createSortedIndex(retHighest) {
      return function(array, value, iteratee, thisArg) {
        var callback = getCallback(iteratee);
        return (iteratee == null && callback === baseCallback)
          ? binaryIndex(array, value, retHighest)
          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags.
     *  The bitmask may be composed of the following flags:
     *     1 - `_.bind`
     *     2 - `_.bindKey`
     *     4 - `_.curry` or `_.curryRight` of a bound function
     *     8 - `_.curry`
     *    16 - `_.curryRight`
     *    32 - `_.partial`
     *    64 - `_.partialRight`
     *   128 - `_.rearg`
     *   256 - `_.ary`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = null;
      }
      length -= (holders ? holders.length : 0);
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = null;
      }
      var data = isBindKey ? null : getData(func),
          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

      if (data) {
        mergeData(newData, data);
        bitmask = newData[1];
        arity = newData[9];
      }
      newData[9] = arity == null
        ? (isBindKey ? 0 : func.length)
        : (nativeMax(arity - length, 0) || 0);

      if (bitmask == BIND_FLAG) {
        var result = createBindWrapper(newData[0], newData[2]);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
        result = createPartialWrapper.apply(undefined, newData);
      } else {
        result = createHybridWrapper.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setter(result, newData);
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing arrays.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var index = -1,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
        return false;
      }
      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index],
            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

        if (result !== undefined) {
          if (result) {
            continue;
          }
          return false;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isLoose) {
          if (!arraySome(other, function(othValue) {
                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
              })) {
            return false;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} value The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag) {
      switch (tag) {
        case boolTag:
        case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
          return +object == +other;

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return (object != +object)
            ? other != +other
            : object == +other;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings primitives and string
          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
          return object == (other + '');
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isLoose) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var skipCtor = isLoose;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key],
            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

        // Recursively compare objects (susceptible to call stack limits).
        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
          return false;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (!skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Gets the appropriate "callback" function. If the `_.callback` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseCallback` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function} Returns the chosen function or its result.
     */
    function getCallback(func, thisArg, argCount) {
      var result = lodash.callback || callback;
      result = result === callback ? baseCallback : result;
      return argCount ? result(func, thisArg, argCount) : result;
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = func.name,
          array = realNames[result],
          length = array ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseIndexOf` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function|number} Returns the chosen function or its result.
     */
    function getIndexOf(collection, target, fromIndex) {
      var result = lodash.indexOf || indexOf;
      result = result === indexOf ? baseIndexOf : result;
      return collection ? result(collection, target, fromIndex) : result;
    }

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
     * that affects Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    /**
     * Gets the propery names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = pairs(object),
          length = result.length;

      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object == null ? undefined : object[key];
      return isNative(value) ? value : undefined;
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} [transforms] The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms ? transforms.length : 0;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add array properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      var Ctor = object.constructor;
      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
        Ctor = Object;
      }
      return new Ctor;
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return bufferClone(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          var buffer = object.buffer;
          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          var result = new Ctor(object.source, reFlags.exec(object));
          result.lastIndex = object.lastIndex;
      }
      return result;
    }

    /**
     * Invokes the method at `path` on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function invokePath(object, path, args) {
      if (object != null && !isKey(path, object)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        path = last(path);
      }
      var func = object == null ? object : object[path];
      return func == null ? undefined : func.apply(object, args);
    }

    /**
     * Checks if `value` is array-like.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     */
    function isArrayLike(value) {
      return value != null && isLength(getLength(value));
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }

    /**
     * Checks if the provided arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)) {
        var other = object[index];
        return value === value ? (value === other) : (other !== other);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      var type = typeof value;
      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
        return true;
      }
      if (isArray(value)) {
        return false;
      }
      var result = !reIsDeepProp.test(value);
      return result || (object != null && value in toObject(object));
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func);
      if (!(funcName in LazyWrapper.prototype)) {
        return false;
      }
      var other = lodash[funcName];
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     */
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers required to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
     * augment function arguments, making the order in which they are executed important,
     * preventing the merging of metadata. However, we make an exception for a safe
     * common case where curried functions have `_.ary` and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < ARY_FLAG;

      var isCombo =
        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = arrayCopy(value);
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties specified
     * by `props`.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property names to pick.
     * @returns {Object} Returns the new object.
     */
    function pickByArray(object, props) {
      object = toObject(object);

      var index = -1,
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties `predicate`
     * returns truthy for.
     *
     * @private
     * @param {Object} object The source object.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Object} Returns the new object.
     */
    function pickByCallback(object, predicate) {
      var result = {};
      baseForIn(object, function(value, key, object) {
        if (predicate(value, key, object)) {
          result[key] = value;
        }
      });
      return result;
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = arrayCopy(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity function
     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = (function() {
      var count = 0,
          lastCalled = 0;

      return function(key, value) {
        var stamp = now(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return key;
          }
        } else {
          count = 0;
        }
        return baseSetData(key, value);
      };
    }());

    /**
     * A fallback implementation of `_.isPlainObject` which checks if `value`
     * is an object created by the `Object` constructor or has a `[[Prototype]]`
     * of `null`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     */
    function shimIsPlainObject(value) {
      var Ctor,
          support = lodash.support;

      // Exit early for non `Object` objects.
      if (!(isObjectLike(value) && objToString.call(value) == objectTag) ||
          (!hasOwnProperty.call(value, 'constructor') &&
            (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
        return false;
      }
      // IE < 9 iterates inherited properties before own properties. If the first
      // iterated property is an object's own property then there are no inherited
      // enumerable properties.
      var result;
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      baseForIn(value, function(subValue, key) {
        result = key;
      });
      return result === undefined || hasOwnProperty.call(value, result);
    }

    /**
     * A fallback implementation of `Object.keys` which creates an array of the
     * own enumerable property names of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function shimKeys(object) {
      var props = keysIn(object),
          propsLength = props.length,
          length = propsLength && object.length;

      var allowIndexes = !!length && isLength(length) &&
        (isArray(object) || isArguments(object));

      var index = -1,
          result = [];

      while (++index < propsLength) {
        var key = props[index];
        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to an array-like object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array|Object} Returns the array-like object.
     */
    function toIterable(value) {
      if (value == null) {
        return [];
      }
      if (!isArrayLike(value)) {
        return values(value);
      }
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to an object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Object} Returns the object.
     */
    function toObject(value) {
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to property path array if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array} Returns the property path array.
     */
    function toPath(value) {
      if (isArray(value)) {
        return value;
      }
      var result = [];
      baseToString(value).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      return wrapper instanceof LazyWrapper
        ? wrapper.clone()
        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `collection` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new array containing chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
      } else {
        size = nativeMax(+size || 1, 1);
      }
      var index = 0,
          length = array ? array.length : 0,
          resIndex = -1,
          result = Array(ceil(length / size));

      while (index < length) {
        result[++resIndex] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * Creates an array of unique `array` values not included in the other
     * provided arrays using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3], [4, 2]);
     * // => [1, 3]
     */
    var difference = restParam(function(array, values) {
      return isArrayLike(array)
        ? baseDifference(array, baseFlatten(values, false, true))
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that match the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [1]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
     * // => ['barney']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropWhile(users, 'active', false), 'user');
     * // => ['pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8], '*', 1, 2);
     * // => [4, '*', 8]
     */
    function fill(array, value, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(chr) {
     *   return chr.user == 'barney';
     * });
     * // => 0
     *
     * // using the `_.matches` callback shorthand
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findIndex(users, 'active', false);
     * // => 0
     *
     * // using the `_.property` callback shorthand
     * _.findIndex(users, 'active');
     * // => 2
     */
    var findIndex = createFindIndex();

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(chr) {
     *   return chr.user == 'pebbles';
     * });
     * // => 2
     *
     * // using the `_.matches` callback shorthand
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastIndex(users, 'active', false);
     * // => 2
     *
     * // using the `_.property` callback shorthand
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    var findLastIndex = createFindIndex(true);

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias head
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([]);
     * // => undefined
     */
    function first(array) {
      return array ? array[0] : undefined;
    }

    /**
     * Flattens a nested array. If `isDeep` is `true` the array is recursively
     * flattened, otherwise it is only flattened a single level.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, 3, [4]]]);
     * // => [1, 2, 3, [4]]
     *
     * // using `isDeep`
     * _.flatten([1, [2, 3, [4]]], true);
     * // => [1, 2, 3, 4]
     */
    function flatten(array, isDeep, guard) {
      var length = array ? array.length : 0;
      if (guard && isIterateeCall(array, isDeep, guard)) {
        isDeep = false;
      }
      return length ? baseFlatten(array, isDeep) : [];
    }

    /**
     * Recursively flattens a nested array.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to recursively flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, 3, [4]]]);
     * // => [1, 2, 3, 4]
     */
    function flattenDeep(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, true) : [];
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
     * performs a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // using `fromIndex`
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     *
     * // performing a binary search
     * _.indexOf([1, 1, 2, 2], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      if (typeof fromIndex == 'number') {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
      } else if (fromIndex) {
        var index = binaryIndex(array, value),
            other = array[index];

        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      return baseIndexOf(array, value, fromIndex || 0);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      return dropRight(array, 1);
    }

    /**
     * Creates an array of unique values that are included in all of the provided
     * arrays using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of shared values.
     * @example
     * _.intersection([1, 2], [4, 2], [2, 1]);
     * // => [2]
     */
    var intersection = restParam(function(arrays) {
      var othLength = arrays.length,
          othIndex = othLength,
          caches = Array(length),
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          result = [];

      while (othIndex--) {
        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
      }
      var array = arrays[0],
          index = -1,
          length = array ? array.length : 0,
          seen = caches[0];

      outer:
      while (++index < length) {
        value = array[index];
        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
          var othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(value);
          }
          result.push(value);
        }
      }
      return result;
    });

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
     *  or `true` to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // using `fromIndex`
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     *
     * // performing a binary search
     * _.lastIndexOf([1, 1, 2, 2], 2, true);
     * // => 3
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
      } else if (fromIndex) {
        index = binaryIndex(array, value, true) - 1;
        var other = array[index];
        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      if (value !== value) {
        return indexOfNaN(array, index, true);
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from `array` using
     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     *
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull() {
      var args = arguments,
          array = args[0];

      if (!(array && array.length)) {
        return array;
      }
      var index = 0,
          indexOf = getIndexOf(),
          length = args.length;

      while (++index < length) {
        var fromIndex = 0,
            value = args[index];

        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * Removes elements from `array` corresponding to the given indexes and returns
     * an array of the removed elements. Indexes may be specified as an array of
     * indexes or as individual arguments.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [5, 10, 15, 20];
     * var evens = _.pullAt(array, 1, 3);
     *
     * console.log(array);
     * // => [5, 15]
     *
     * console.log(evens);
     * // => [10, 20]
     */
    var pullAt = restParam(function(array, indexes) {
      indexes = baseFlatten(indexes);

      var result = baseAt(array, indexes);
      basePullAt(array, indexes.sort(baseCompareAscending));
      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate, thisArg) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getCallback(predicate, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias tail
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     */
    function rest(array) {
      return drop(array, 1);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of `Array#slice` to support node
     * lists in IE < 9 and to ensure dense arrays are returned.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order. If an iteratee
     * function is provided it is invoked for `value` and each element of `array`
     * to compute their sort ranking. The iteratee is bound to `thisArg` and
     * invoked with one argument; (value).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 4, 5, 5], 5);
     * // => 2
     *
     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
     *
     * // using an iteratee function
     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
     *   return this.data[word];
     * }, dict);
     * // => 1
     *
     * // using the `_.property` callback shorthand
     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 1
     */
    var sortedIndex = createSortedIndex();

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 4, 5, 5], 5);
     * // => 4
     */
    var sortedLastIndex = createSortedIndex(true);

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
     * and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [2, 3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
     * // => []
     */
    function takeRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [1, 2]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false},
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeWhile(users, 'active', false), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeWhile(users, 'active'), 'user');
     * // => []
     */
    function takeWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all of the provided arrays
     * using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([1, 2], [4, 2], [2, 1]);
     * // => [1, 2, 4]
     */
    var union = restParam(function(arrays) {
      return baseUniq(baseFlatten(arrays, false, true));
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons, in which only the first occurence of each element
     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
     * for sorted arrays. If an iteratee function is provided it is invoked for
     * each element in the array to generate the criterion by which uniqueness
     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, array).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {boolean} [isSorted] Specify the array is sorted.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new duplicate-value-free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     *
     * // using `isSorted`
     * _.uniq([1, 1, 2], true);
     * // => [1, 2]
     *
     * // using an iteratee function
     * _.uniq([1, 2.5, 1.5, 2], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => [1, 2.5]
     *
     * // using the `_.property` callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (isSorted != null && typeof isSorted != 'boolean') {
        thisArg = iteratee;
        iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
        isSorted = false;
      }
      var callback = getCallback();
      if (!(iteratee == null && callback === baseCallback)) {
        iteratee = callback(iteratee, thisArg, 3);
      }
      return (isSorted && getIndexOf() == baseIndexOf)
        ? sortedUniq(array, iteratee)
        : baseUniq(array, iteratee);
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     *
     * _.unzip(zipped);
     * // => [['fred', 'barney'], [30, 40], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var index = -1,
          length = 0;

      array = arrayFilter(array, function(group) {
        if (isArrayLike(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      var result = Array(length);
      while (++index < length) {
        result[index] = arrayMap(array, baseProperty(index));
      }
      return result;
    }

    /**
     * This method is like `_.unzip` except that it accepts an iteratee to specify
     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee] The function to combine regrouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      iteratee = bindCallback(iteratee, thisArg, 4);
      return arrayMap(result, function(group) {
        return arrayReduce(group, iteratee, undefined, true);
      });
    }

    /**
     * Creates an array excluding all provided values using
     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to filter.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 3], 1, 2);
     * // => [3]
     */
    var without = restParam(function(array, values) {
      return isArrayLike(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the provided arrays.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * _.xor([1, 2], [4, 2]);
     * // => [1, 4]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArrayLike(array)) {
          var result = result
            ? baseDifference(result, array).concat(baseDifference(array, result))
            : array;
        }
      }
      return result ? baseUniq(result) : [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second elements
     * of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    var zip = restParam(unzip);

    /**
     * The inverse of `_.pairs`; this method returns an object composed from arrays
     * of property names and values. Provide either a single two dimensional array,
     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
     * and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Array
     * @param {Array} props The property names.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject([['fred', 30], ['barney', 40]]);
     * // => { 'fred': 30, 'barney': 40 }
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(props, values) {
      var index = -1,
          length = props ? props.length : 0,
          result = {};

      if (length && !values && !isArray(props[0])) {
        values = [];
      }
      while (++index < length) {
        var key = props[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /**
     * This method is like `_.zip` except that it accepts an iteratee to specify
     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee] The function to combine grouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
     * // => [111, 222]
     */
    var zipWith = restParam(function(arrays) {
      var length = arrays.length,
          iteratee = length > 2 ? arrays[length - 2] : undefined,
          thisArg = length > 1 ? arrays[length - 1] : undefined;

      if (length > 2 && typeof iteratee == 'function') {
        length -= 2;
      } else {
        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
        thisArg = undefined;
      }
      arrays.length = length;
      return unzipWith(arrays, iteratee, thisArg);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps `value` with explicit method
     * chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(users)
     *   .sortBy('age')
     *   .map(function(chr) {
     *     return chr.user + ' is ' + chr.age;
     *   })
     *   .first()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor is
     * bound to `thisArg` and invoked with one argument; (value). The purpose of
     * this method is to "tap into" a method chain in order to perform operations
     * on intermediate results within the chain.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor, thisArg) {
      interceptor.call(thisArg, value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor, thisArg) {
      return interceptor.call(thisArg, value);
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(users).first();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(users).chain()
     *   .first()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chained sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapper = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapper = wrapper.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapper.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Creates a clone of the chained sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapper = _(array).map(function(value) {
     *   return Math.pow(value, 2);
     * });
     *
     * var other = [3, 4];
     * var otherWrapper = wrapper.plant(other);
     *
     * otherWrapper.value();
     * // => [9, 16]
     *
     * wrapper.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * Reverses the wrapped array so the first element becomes the last, the
     * second element becomes the second to last, and so on.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        if (this.__actions__.length) {
          value = new LazyWrapper(this);
        }
        return new LodashWrapper(value.reverse(), this.__chain__);
      }
      return this.thru(function(value) {
        return value.reverse();
      });
    }

    /**
     * Produces the result of coercing the unwrapped value to a string.
     *
     * @name toString
     * @memberOf _
     * @category Chain
     * @returns {string} Returns the coerced string value.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return (this.value() + '');
    }

    /**
     * Executes the chained sequence to extract the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @alias run, toJSON, valueOf
     * @category Chain
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements corresponding to the given keys, or indexes,
     * of `collection`. Keys may be specified as individual arguments or as arrays
     * of keys.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [props] The property names
     *  or indexes of elements to pick, specified individually or in arrays.
     * @returns {Array} Returns the new array of picked elements.
     * @example
     *
     * _.at(['a', 'b', 'c'], [0, 2]);
     * // => ['a', 'c']
     *
     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
     * // => ['barney', 'pebbles']
     */
    var at = restParam(function(collection, props) {
      return baseAt(collection, baseFlatten(props));
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the number of times the key was returned by `iteratee`.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * The predicate is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'active': false },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.every(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = null;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.filter([4, 5, 6], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [4, 6]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.filter(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.filter(users, 'active'), 'user');
     * // => ['barney']
     */
    function filter(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.result(_.find(users, function(chr) {
     *   return chr.age < 40;
     * }), 'user');
     * // => 'barney'
     *
     * // using the `_.matches` callback shorthand
     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.result(_.find(users, 'active', false), 'user');
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.result(_.find(users, 'active'), 'user');
     * // => 'barney'
     */
    var find = createFind(baseEach);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(baseEachRight, true);

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning the first element that has equivalent property
     * values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
     * // => 'barney'
     *
     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
     * // => 'fred'
     */
    function findWhere(collection, source) {
      return find(collection, baseMatches(source));
    }

    /**
     * Iterates over elements of `collection` invoking `iteratee` for each element.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early
     * by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length" property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEach(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from left to right and returns the array
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
     *   console.log(n, key);
     * });
     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
     */
    var forEach = createForEach(arrayEach, baseEach);

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEachRight(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from right to left and returns the array
     */
    var forEachRight = createForEach(arrayEachRight, baseEachRight);

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using the `_.property` callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });

    /**
     * Checks if `value` is in `collection` using
     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @alias contains, include
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {*} target The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.includes('pebbles', 'eb');
     * // => true
     */
    function includes(collection, target, fromIndex, guard) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        collection = values(collection);
        length = collection.length;
      }
      if (!length) {
        return false;
      }
      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
        fromIndex = 0;
      } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
      }
      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
        ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1)
        : (getIndexOf(collection, target, fromIndex) > -1);
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the last element responsible for generating the key. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keyData = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keyData, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return String.fromCharCode(object.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return this.fromCharCode(object.code);
     * }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `methodName` is a function it is
     * invoked for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invoke = restParam(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          isProp = isKey(path),
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : null);
        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
      });
      return result;
    });

    /**
     * Creates an array of values by running each element in `collection` through
     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
     * `sum`, `uniq`, and `words`
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function timesThree(n) {
     *   return n * 3;
     * }
     *
     * _.map([1, 2], timesThree);
     * // => [3, 6]
     *
     * _.map({ 'a': 1, 'b': 2 }, timesThree);
     * // => [3, 6] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee, thisArg) {
      var func = isArray(collection) ? arrayMap : baseMap;
      iteratee = getCallback(iteratee, thisArg, 3);
      return func(collection, iteratee);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, while the second of which
     * contains elements `predicate` returns falsey for. The predicate is bound
     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * _.partition([1, 2, 3], function(n) {
     *   return n % 2;
     * });
     * // => [[1, 3], [2]]
     *
     * _.partition([1.2, 2.3, 3.4], function(n) {
     *   return this.floor(n) % 2;
     * }, Math);
     * // => [[1.2, 3.4], [2.3]]
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * var mapper = function(array) {
     *   return _.pluck(array, 'user');
     * };
     *
     * // using the `_.matches` callback shorthand
     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
     * // => [['pebbles'], ['barney', 'fred']]
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.map(_.partition(users, 'active', false), mapper);
     * // => [['barney', 'pebbles'], ['fred']]
     *
     * // using the `_.property` callback shorthand
     * _.map(_.partition(users, 'active'), mapper);
     * // => [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Gets the property value of `path` from all elements in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|string} path The path of the property to pluck.
     * @returns {Array} Returns the property values.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(users, 'user');
     * // => ['barney', 'fred']
     *
     * var userIndex = _.indexBy(users, 'user');
     * _.pluck(userIndex, 'age');
     * // => [36, 40] (iteration order is not guaranteed)
     */
    function pluck(collection, path) {
      return map(collection, property(path));
    }

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` through `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not provided the first element of `collection` is used as the initial
     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `includes`, `merge`, `sortByAll`, and `sortByOrder`
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.reduce([1, 2], function(total, n) {
     *   return total + n;
     * });
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
     */
    var reduce = createReduce(arrayReduce, baseEach);

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.reject([1, 2, 3, 4], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [1, 3]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.reject(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.reject(users, 'active'), 'user');
     * // => ['barney']
     */
    function reject(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, function(value, index, collection) {
        return !predicate(value, index, collection);
      });
    }

    /**
     * Gets a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {*} Returns the random sample(s).
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
        collection = toIterable(collection);
        var length = collection.length;
        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
      }
      var index = -1,
          result = toArray(collection),
          length = result.length,
          lastIndex = length - 1;

      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
      while (++index < n) {
        var rand = baseRandom(index, lastIndex),
            value = result[rand];

        result[rand] = result[index];
        result[index] = value;
      }
      result.length = n;
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      return sample(collection, POSITIVE_INFINITY);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the size of `collection`.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? getLength(collection) : 0;
      return isLength(length) ? length : keys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * The function returns as soon as it finds a passing value and does not iterate
     * over the entire collection. The predicate is bound to `thisArg` and invoked
     * with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.some(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, thisArg) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = null;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through `iteratee`. This method performs
     * a stable sort, that is, it preserves the original sort order of equal elements.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return Math.sin(n);
     * });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return this.sin(n);
     * }, Math);
     * // => [3, 1, 2]
     *
     * var users = [
     *   { 'user': 'fred' },
     *   { 'user': 'pebbles' },
     *   { 'user': 'barney' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.sortBy(users, 'user'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function sortBy(collection, iteratee, thisArg) {
      if (collection == null) {
        return [];
      }
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = null;
      }
      var index = -1;
      iteratee = getCallback(iteratee, thisArg, 3);

      var result = baseMap(collection, function(value, key, collection) {
        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
      });
      return baseSortBy(result, compareAscending);
    }

    /**
     * This method is like `_.sortBy` except that it can sort by multiple iteratees
     * or property names.
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
     *  The iteratees to sort by, specified as individual values or arrays of values.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.map(_.sortByAll(users, 'user', function(chr) {
     *   return Math.floor(chr.age / 10);
     * }), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    var sortByAll = restParam(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var guard = iteratees[2];
      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
        iteratees.length = 1;
      }
      return baseSortByOrder(collection, baseFlatten(iteratees), []);
    });

    /**
     * This method is like `_.sortByAll` except that it allows specifying the
     * sort orders of the iteratees to sort by. A truthy value in `orders` will
     * sort the corresponding property name in ascending order while a falsey
     * value will sort it in descending order.
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} orders The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // sort by `user` in ascending order and by `age` in descending order
     * _.map(_.sortByOrder(users, ['user', 'age'], [true, false]), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    function sortByOrder(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (guard && isIterateeCall(iteratees, orders, guard)) {
        orders = null;
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseSortByOrder(collection, iteratees, orders);
    }

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning an array of all elements that have equivalent
     * property values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
     * // => ['barney']
     *
     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
     * // => ['fred']
     */
    function where(collection, source) {
      return filter(collection, baseMatches(source));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Date
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => logs the number of milliseconds it took for the deferred function to be invoked
     */
    var now = nativeNow || function() {
      return new Date().getTime();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it is called `n` or more times.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'done saving!' after the two async saves have completed
     */
    function after(n, func) {
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      n = nativeIsFinite(n = +n) ? n : 0;
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that accepts up to `n` arguments ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      if (guard && isIterateeCall(func, n, guard)) {
        n = null;
      }
      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
      return createWrapper(func, ARY_FLAG, null, null, null, null, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it is called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery('#add').on('click', _.before(5, addContactToList));
     * // => allows adding up to 4 contacts to the list
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = null;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and prepends any additional `_.bind` arguments to those provided to the
     * bound function.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind` this method does not set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var greet = function(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * };
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // using placeholders
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = restParam(function(func, thisArg, partials) {
      var bitmask = BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bind.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all enumerable function
     * properties, own and inherited, of `object` are bound.
     *
     * **Note:** This method does not set the "length" property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} [methodNames] The object method names to bind,
     *  specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs' when the element is clicked
     */
    var bindAll = restParam(function(object, methodNames) {
      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

      var index = -1,
          length = methodNames.length;

      while (++index < length) {
        var key = methodNames[index];
        object[key] = createWrapper(object[key], BIND_FLAG, object);
      }
      return object;
    });

    /**
     * Creates a function that invokes the method at `object[key]` and prepends
     * any additional `_.bindKey` arguments to those provided to the bound function.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist.
     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // using placeholders
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = restParam(function(object, key, partials) {
      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bindKey.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts one or more arguments of `func` that when
     * called either invokes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` may be specified
     * if `func.length` is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    var curry = createCurry(CURRY_FLAG);

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    var curryRight = createCurry(CURRY_RIGHT_FLAG);

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed invocations. Provide an options object to indicate that `func`
     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
     * Subsequent calls to the debounced function return the result of the last
     * `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify invoking on the leading
     *  edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
     *  delayed before it is invoked.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // ensure `batchLog` is invoked once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }));
     *
     * // cancel a debounced call
     * var todoChanges = _.debounce(batchLog, 1000);
     * Object.observe(models.todo, todoChanges);
     *
     * Object.observe(models, function(changes) {
     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
     *     todoChanges.cancel();
     *   }
     * }, ['delete']);
     *
     * // ...at some point `models.todo` is changed
     * models.todo.completed = true;
     *
     * // ...before 1 second has passed `models.todo` is deleted
     * // which cancels the debounced `todoChanges` call
     * delete models.todo;
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = wait < 0 ? 0 : (+wait || 0);
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }

      function cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
      }

      function delayed() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0 || remaining > wait) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      }

      function maxDelayed() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      }

      function debounced() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0 || remaining > maxWait;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      }
      debounced.cancel = cancel;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    var defer = restParam(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => logs 'later' after one second
     */
    var delay = restParam(function(func, wait, args) {
      return baseDelay(func, wait, args);
    });

    /**
     * Creates a function that returns the result of invoking the provided
     * functions with the `this` binding of the created function, where each
     * successive invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow(_.add, square);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the provided functions from right to left.
     *
     * @static
     * @memberOf _
     * @alias backflow, compose
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight(square, _.add);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is coerced to a string and used as the
     * cache key. The `func` is invoked with the `this` binding of the memoized
     * function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the [`Map`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
     * method interface of `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var upperCase = _.memoize(function(string) {
     *   return string.toUpperCase();
     * });
     *
     * upperCase('fred');
     * // => 'FRED'
     *
     * // modifying the result cache
     * upperCase.cache.set('fred', 'BARNEY');
     * upperCase('fred');
     * // => 'BARNEY'
     *
     * // replacing `_.memoize.Cache`
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'barney' };
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'fred' }
     *
     * _.memoize.Cache = WeakMap;
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'barney' }
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new memoize.Cache;
      return memoized;
    }

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        return !predicate.apply(this, arguments);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first call. The `func` is invoked
     * with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` invokes `createApplication` once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with `partial` arguments prepended
     * to those provided to the new function. This method is like `_.bind` except
     * it does **not** alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // using placeholders
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = createPartial(PARTIAL_FLAG);

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to those provided to the new function.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // using placeholders
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified indexes where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, 2, 0, 1);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     *
     * var map = _.rearg(_.map, [1, 0]);
     * map(function(n) {
     *   return n * 3;
     * }, [1, 2, 3]);
     * // => [3, 6, 9]
     */
    var rearg = restParam(function(func, indexes) {
      return createWrapper(func, REARG_FLAG, null, null, null, baseFlatten(indexes));
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as an array.
     *
     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.restParam(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function restParam(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            rest = Array(length);

        while (++index < length) {
          rest[index] = args[start + index];
        }
        switch (start) {
          case 0: return func.call(this, rest);
          case 1: return func.call(this, args[0], rest);
          case 2: return func.call(this, args[0], args[1], rest);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = rest;
        return func.apply(this, otherArgs);
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the created
     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
     *
     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * // with a Promise
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function(array) {
        return func.apply(this, array);
      };
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed invocations. Provide an options object to indicate
     * that `func` should be invoked on the leading and/or trailing edge of the
     * `wait` timeout. Subsequent calls to the throttled function return the
     * result of the last `func` call.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify invoking on the leading
     *  edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     *
     * // cancel a trailing throttled call
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = +wait;
      debounceOptions.trailing = trailing;
      return debounce(func, wait, debounceOptions);
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Any additional arguments provided to the function are
     * appended to those provided to the wrapper function. The wrapper is invoked
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return createWrapper(wrapper, PARTIAL_FLAG, null, [value], []);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
     * otherwise they are assigned by reference. If `customizer` is provided it is
     * invoked to produce the cloned values. If `customizer` returns `undefined`
     * cloning is handled by the method instead. The `customizer` is bound to
     * `thisArg` and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var shallow = _.clone(users);
     * shallow[0] === users[0];
     * // => true
     *
     * var deep = _.clone(users, true);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.clone(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, customizer, thisArg) {
      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
        isDeep = false;
      }
      else if (typeof isDeep == 'function') {
        thisArg = customizer;
        customizer = isDeep;
        isDeep = false;
      }
      return typeof customizer == 'function'
        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
        : baseClone(value, isDeep);
    }

    /**
     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
     * to produce the cloned values. If `customizer` returns `undefined` cloning
     * is handled by the method instead. The `customizer` is bound to `thisArg`
     * and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var deep = _.cloneDeep(users);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.cloneDeep(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 20
     */
    function cloneDeep(value, customizer, thisArg) {
      return typeof customizer == 'function'
        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
        : baseClone(value, true);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    function gt(value, other) {
      return value > other;
    }

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    function gte(value, other) {
      return value >= other;
    }

    /**
     * Checks if `value` is classified as an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(function() { return arguments; }());
     * // => false
     */
    var isArray = nativeIsArray || function(value) {
      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
    };

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
    }

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    function isDate(value) {
      return isObjectLike(value) && objToString.call(value) == dateTag;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return !!value && value.nodeType === 1 && isObjectLike(value) &&
        (objToString.call(value).indexOf('Element') > -1);
    }
    // Fallback for environments without DOM support.
    if (!support.dom) {
      isElement = function(value) {
        return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
      };
    }

    /**
     * Checks if `value` is empty. A value is considered empty unless it is an
     * `arguments` object, array, string, or jQuery-like collection with a length
     * greater than `0` or an object with own enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
          (isObjectLike(value) && isFunction(value.splice)))) {
        return !value.length;
      }
      return !keys(value).length;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent. If `customizer` is provided it is invoked to compare values.
     * If `customizer` returns `undefined` comparisons are handled by the method
     * instead. The `customizer` is bound to `thisArg` and invoked with three
     * arguments: (value, other [, index|key]).
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. Functions and DOM nodes
     * are **not** supported. Provide a customizer function to extend support
     * for comparing other values.
     *
     * @static
     * @memberOf _
     * @alias eq
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * object == other;
     * // => false
     *
     * _.isEqual(object, other);
     * // => true
     *
     * // using a customizer callback
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqual(array, other, function(value, other) {
     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
     *     return true;
     *   }
     * });
     * // => true
     */
    function isEqual(value, other, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on [`Number.isFinite`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(10);
     * // => true
     *
     * _.isFinite('10');
     * // => false
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite(Object(10));
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    var isFinite = nativeNumIsFinite || function(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    };

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    var isFunction = !(baseIsFunction(/x/) || (Uint8Array && !baseIsFunction(Uint8Array))) ? baseIsFunction : function(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in older versions of Chrome and Safari which return 'function' for regexes
      // and Safari 8 equivalents which return 'object' for typed array constructors.
      return objToString.call(value) == funcTag;
    };

    /**
     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // Avoid a V8 JIT bug in Chrome 19-20.
      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Performs a deep comparison between `object` and `source` to determine if
     * `object` contains equivalent property values. If `customizer` is provided
     * it is invoked to compare values. If `customizer` returns `undefined`
     * comparisons are handled by the method instead. The `customizer` is bound
     * to `thisArg` and invoked with three arguments: (value, other, index|key).
     *
     * **Note:** This method supports comparing properties of arrays, booleans,
     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
     * and DOM nodes are **not** supported. Provide a customizer function to extend
     * support for comparing other values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.isMatch(object, { 'age': 40 });
     * // => true
     *
     * _.isMatch(object, { 'age': 36 });
     * // => false
     *
     * // using a customizer callback
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatch(object, source, function(value, other) {
     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
     * });
     * // => true
     */
    function isMatch(object, source, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      return baseIsMatch(object, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
     * which returns `true` for `undefined` and other non-numeric values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (objToString.call(value) == funcTag) {
        return reIsNative.test(fnToString.call(value));
      }
      return isObjectLike(value) && reIsHostCtor.test(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
     * as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isNumber(8.4);
     * // => true
     *
     * _.isNumber(NaN);
     * // => true
     *
     * _.isNumber('8.4');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * **Note:** This method assumes objects created by the `Object` constructor
     * have no inherited enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && objToString.call(value) == objectTag)) {
        return false;
      }
      var valueOf = getNative(value, 'valueOf'),
          objProto = valueOf && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

      return objProto
        ? (value == objProto || getPrototypeOf(value) == objProto)
        : shimIsPlainObject(value);
    };

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    function isRegExp(value) {
      return isObjectLike(value) && objToString.call(value) == regexpTag;
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    function isTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    function lt(value, other) {
      return value < other;
    }

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    function lte(value, other) {
      return value <= other;
    }

    /**
     * Converts `value` to an array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * (function() {
     *   return _.toArray(arguments).slice(1);
     * }(1, 2, 3));
     * // => [2, 3]
     */
    function toArray(value) {
      var length = value ? getLength(value) : 0;
      if (!isLength(length)) {
        return values(value);
      }
      if (!length) {
        return [];
      }
      return arrayCopy(value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable
     * properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return baseCopy(value, keysIn(value));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources overwrite property assignments of previous sources.
     * If `customizer` is provided it is invoked to produce the assigned values.
     * The `customizer` is bound to `thisArg` and invoked with five arguments:
     * (objectValue, sourceValue, key, object, source).
     *
     * **Note:** This method mutates `object` and is based on
     * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
     *
     * @static
     * @memberOf _
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using a customizer callback
     * var defaults = _.partialRight(_.assign, function(value, other) {
     *   return _.isUndefined(value) ? other : value;
     * });
     *
     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var assign = createAssigner(function(object, source, customizer) {
      return customizer
        ? assignWith(object, source, customizer)
        : baseAssign(object, source);
    });

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties, guard) {
      var result = baseCreate(prototype);
      if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = null;
      }
      return properties ? baseAssign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var defaults = restParam(function(args) {
      var object = args[0];
      if (object == null) {
        return object;
      }
      args.push(assignDefaults);
      return assign.apply(undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // using the `_.matches` callback shorthand
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    var findKey = createFindKey(baseForOwn);

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles` assuming `_.findKey` returns `barney`
     *
     * // using the `_.matches` callback shorthand
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    var findLastKey = createFindKey(baseForOwnRight);

    /**
     * Iterates over own and inherited enumerable properties of an object invoking
     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
     */
    var forIn = createForIn(baseFor);

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
     */
    var forInRight = createForIn(baseForRight);

    /**
     * Iterates over own enumerable properties of an object invoking `iteratee`
     * for each property. The `iteratee` is bound to `thisArg` and invoked with
     * three arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a' and 'b' (iteration order is not guaranteed)
     */
    var forOwn = createForOwn(baseForOwn);

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
     */
    var forOwnRight = createForOwn(baseForOwnRight);

    /**
     * Creates an array of function property names from all enumerable properties,
     * own and inherited, of `object`.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the new array of property names.
     * @example
     *
     * _.functions(_);
     * // => ['after', 'ary', 'assign', ...]
     */
    function functions(object) {
      return baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the property value at `path` of `object`. If the resolved value is
     * `undefined` the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': { 'c': 3 } } };
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b.c');
     * // => true
     *
     * _.has(object, ['a', 'b', 'c']);
     * // => true
     */
    function has(object, path) {
      if (object == null) {
        return false;
      }
      var result = hasOwnProperty.call(object, path);
      if (!result && !isKey(path)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        path = last(path);
        result = hasOwnProperty.call(object, path);
      }
      return result || (isLength(object.length) && isIndex(path, object.length) &&
        (isArray(object) || isArguments(object)));
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite property
     * assignments of previous values unless `multiValue` is `true`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to invert.
     * @param {boolean} [multiValue] Allow multiple values per key.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     *
     * // with `multiValue`
     * _.invert(object, true);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function invert(object, multiValue, guard) {
      if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = null;
      }
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index],
            value = object[key];

        if (multiValue) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }
        else {
          result[value] = key;
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
     * for more details.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      var Ctor = object == null ? null : object.constructor;
      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
          (typeof object != 'function' && isArrayLike(object))) {
        return shimKeys(object);
      }
      return isObject(object) ? nativeKeys(object) : [];
    };

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      if (object == null) {
        return [];
      }
      if (!isObject(object)) {
        object = Object(object);
      }
      var length = object.length;
      length = (length && isLength(length) &&
        (isArray(object) || isArguments(object)) && length) || 0;

      var Ctor = object.constructor,
          index = -1,
          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
          result = Array(length),
          skipIndexes = length > 0;

      while (++index < length) {
        result[index] = (index + '');
      }
      for (var key in object) {
        if (!(skipIndexes && isIndex(key, length)) &&
            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * property of `object` through `iteratee`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    var mapKeys = createObjectMapper(true);

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through `iteratee`. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, key, object).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
     *   return n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * // using the `_.property` callback shorthand
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    var mapValues = createObjectMapper();

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * overwrite property assignments of previous sources. If `customizer` is
     * provided it is invoked to produce the merged values of the destination and
     * source properties. If `customizer` returns `undefined` merging is handled
     * by the method instead. The `customizer` is bound to `thisArg` and invoked
     * with five arguments: (objectValue, sourceValue, key, object, source).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var users = {
     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
     * };
     *
     * var ages = {
     *   'data': [{ 'age': 36 }, { 'age': 40 }]
     * };
     *
     * _.merge(users, ages);
     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
     *
     * // using a customizer callback
     * var object = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var other = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(object, other, function(a, b) {
     *   if (_.isArray(a)) {
     *     return a.concat(b);
     *   }
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
     */
    var merge = createAssigner(baseMerge);

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable properties of `object` that are not omitted.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to omit, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.omit(object, 'age');
     * // => { 'user': 'fred' }
     *
     * _.omit(object, _.isNumber);
     * // => { 'user': 'fred' }
     */
    var omit = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      if (typeof props[0] != 'function') {
        var props = arrayMap(baseFlatten(props), String);
        return pickByArray(object, baseDifference(keysIn(object), props));
      }
      var predicate = bindCallback(props[0], props[1], 3);
      return pickByCallback(object, function(value, key, object) {
        return !predicate(value, key, object);
      });
    });

    /**
     * Creates a two dimensional array of the key-value pairs for `object`,
     * e.g. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
     */
    function pairs(object) {
      object = toObject(object);

      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates an object composed of the picked `object` properties. Property
     * names may be specified as individual arguments or as arrays of property
     * names. If `predicate` is provided it is invoked for each property of `object`
     * picking the properties `predicate` returns truthy for. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.pick(object, 'user');
     * // => { 'user': 'fred' }
     *
     * _.pick(object, _.isString);
     * // => { 'user': 'fred' }
     */
    var pick = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      return typeof props[0] == 'function'
        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
        : pickByArray(object, baseFlatten(props));
    });

    /**
     * This method is like `_.get` except that if the resolved value is a function
     * it is invoked with the `this` binding of its parent object and its result
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a.b.c', 'default');
     * // => 'default'
     *
     * _.result(object, 'a.b.c', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      var result = object == null ? undefined : object[path];
      if (result === undefined) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          result = object == null ? undefined : object[last(path)];
        }
        result = result === undefined ? defaultValue : result;
      }
      return isFunction(result) ? result.call(object) : result;
    }

    /**
     * Sets the property value of `path` on `object`. If a portion of `path`
     * does not exist it is created.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to augment.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, 'x[0].y.z', 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      if (object == null) {
        return object;
      }
      var pathKey = (path + '');
      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = path[index];
        if (isObject(nested)) {
          if (index == lastIndex) {
            nested[key] = value;
          } else if (nested[key] == null) {
            nested[key] = isIndex(path[index + 1]) ? [] : {};
          }
        }
        nested = nested[key];
      }
      return object;
    }

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own enumerable
     * properties through `iteratee`, with each invocation potentially mutating
     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
     * with four arguments: (accumulator, value, key, object). Iteratee functions
     * may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * });
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     */
    function transform(object, iteratee, accumulator, thisArg) {
      var isArr = isArray(object) || isTypedArray(object);
      iteratee = getCallback(iteratee, thisArg, 4);

      if (accumulator == null) {
        if (isArr || isObject(object)) {
          var Ctor = object.constructor;
          if (isArr) {
            accumulator = isArray(object) ? new Ctor : [];
          } else {
            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : null);
          }
        } else {
          accumulator = {};
        }
      }
      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Creates an array of the own enumerable property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable property values
     * of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Checks if `n` is between `start` and up to but not including, `end`. If
     * `end` is not specified it is set to `start` with `start` then set to `0`.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} n The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     */
    function inRange(value, start, end) {
      start = +start || 0;
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      return value >= nativeMin(start, end) && value < nativeMax(start, end);
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number is returned.
     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      if (floating && isIterateeCall(min, max, floating)) {
        max = floating = null;
      }
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (noMax && typeof min == 'boolean') {
          floating = min;
          min = 1;
        }
        else if (typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
        noMax = false;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar');
     * // => 'fooBar'
     *
     * _.camelCase('__foo_bar__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
    });

    /**
     * Capitalizes the first character of `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('fred');
     * // => 'Fred'
     */
    function capitalize(string) {
      string = baseToString(string);
      return string && (string.charAt(0).toUpperCase() + string.slice(1));
    }

    /**
     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = baseToString(string);
      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search from.
     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = baseToString(string);
      target = (target + '');

      var length = string.length;
      position = position === undefined
        ? length
        : nativeMin(position < 0 ? 0 : (+position || 0), length);

      position -= target.length;
      return position >= 0 && string.indexOf(target, position) == position;
    }

    /**
     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
     * their corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional characters
     * use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value.
     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * Backticks are escaped because in Internet Explorer < 9, they can break out
     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
     * for more details.
     *
     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
     * to reduce XSS vectors.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
      string = baseToString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
     */
    function escapeRegExp(string) {
      string = baseToString(string);
      return (string && reHasRegExpChars.test(string))
        ? string.replace(reRegExpChars, '\\$&')
        : string;
    }

    /**
     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__foo_bar__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = baseToString(string);
      length = +length;

      var strLength = string.length;
      if (strLength >= length || !nativeIsFinite(length)) {
        return string;
      }
      var mid = (length - strLength) / 2,
          leftLength = floor(mid),
          rightLength = ceil(mid);

      chars = createPadding('', rightLength, chars);
      return chars.slice(0, leftLength) + string + chars;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padLeft('abc', 6);
     * // => '   abc'
     *
     * _.padLeft('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padLeft('abc', 3);
     * // => 'abc'
     */
    var padLeft = createPadDir();

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padRight('abc', 6);
     * // => 'abc   '
     *
     * _.padRight('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padRight('abc', 3);
     * // => 'abc'
     */
    var padRight = createPadDir(true);

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
     * in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
     * of `parseInt`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard && isIterateeCall(string, radix, guard)) {
        radix = 0;
      }
      return nativeParseInt(string, radix);
    }
    // Fallback for environments with pre-ES5 implementations.
    if (nativeParseInt(whitespace + '08') != 8) {
      parseInt = function(string, radix, guard) {
        // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
        // Chrome fails to trim leading <BOM> whitespace characters.
        // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
        if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        string = trim(string);
        return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
      };
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=0] The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n) {
      var result = '';
      string = baseToString(string);
      n = +n;
      if (n < 1 || !string || !nativeIsFinite(n)) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = floor(n / 2);
        string += string;
      } while (n);

      return result;
    }

    /**
     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--foo-bar');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__foo_bar__');
     * // => 'Foo Bar'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = baseToString(string);
      position = position == null
        ? 0
        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

      return string.lastIndexOf(target, position) == position;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is provided it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [options.variable] The data object variable name.
     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // using the HTML "escape" delimiter to escape data property values
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // using custom template delimiters
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using backslashes to treat delimiters as plain text
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // using the `imports` option to import `jQuery` as `jq`
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, otherOptions) {
      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
        options = otherOptions = null;
      }
      string = baseToString(string);
      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
      }
      chars = (chars + '');
      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimLeft('  abc  ');
     * // => 'abc  '
     *
     * _.trimLeft('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimLeft(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string));
      }
      return string.slice(charsLeftIndex(string, (chars + '')));
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimRight('  abc  ');
     * // => '  abc'
     *
     * _.trimRight('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimRight(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(0, trimmedRightIndex(string) + 1);
      }
      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object|number} [options] The options object or maximum string length.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.trunc('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', 24);
     * // => 'hi-diddly-ho there, n...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function trunc(string, options, guard) {
      if (guard && isIterateeCall(string, options, guard)) {
        options = null;
      }
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (options != null) {
        if (isObject(options)) {
          var separator = 'separator' in options ? options.separator : separator;
          length = 'length' in options ? (+options.length || 0) : length;
          omission = 'omission' in options ? baseToString(options.omission) : omission;
        } else {
          length = +options || 0;
        }
      }
      string = baseToString(string);
      if (length >= string.length) {
        return string;
      }
      var end = length - omission.length;
      if (end < 1) {
        return omission;
      }
      var result = string.slice(0, end);
      if (separator == null) {
        return result + omission;
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              newEnd,
              substring = string.slice(0, end);

          if (!separator.global) {
            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            newEnd = match.index;
          }
          result = result.slice(0, newEnd == null ? end : newEnd);
        }
      } else if (string.indexOf(separator, end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
     * corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
     * entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = baseToString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      if (guard && isIterateeCall(string, pattern, guard)) {
        pattern = null;
      }
      string = baseToString(string);
      return string.match(pattern || reWords) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function} func The function to attempt.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // avoid throwing errors for invalid selectors
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = restParam(function(func, args) {
      try {
        return func.apply(undefined, args);
      } catch(e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and arguments of the created function. If `func` is a property name the
     * created callback returns the property value for a given element. If `func`
     * is an object the created callback returns `true` for elements that contain
     * the equivalent object properties, otherwise it returns `false`.
     *
     * @static
     * @memberOf _
     * @alias iteratee
     * @category Utility
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
     *   if (!match) {
     *     return callback(func, thisArg);
     *   }
     *   return function(object) {
     *     return match[2] == 'gt'
     *       ? object[match[1]] > match[3]
     *       : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(users, 'age__gt36');
     * // => [{ 'user': 'fred', 'age': 40 }]
     */
    function callback(func, thisArg, guard) {
      if (guard && isIterateeCall(func, thisArg, guard)) {
        thisArg = null;
      }
      return isObjectLike(func)
        ? matches(func)
        : baseCallback(func, thisArg);
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var getter = _.constant(object);
     *
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that performs a deep comparison between a given object
     * and `source`, returning `true` if the given object has equivalent property
     * values, else `false`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, true));
    }

    /**
     * Creates a function that compares the property value of `path` on a given
     * object to `value`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * _.find(users, _.matchesProperty('user', 'fred'));
     * // => { 'user': 'fred' }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, true));
    }

    /**
     * Creates a function that invokes the method at `path` on a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': _.constant(2) } } },
     *   { 'a': { 'b': { 'c': _.constant(1) } } }
     * ];
     *
     * _.map(objects, _.method('a.b.c'));
     * // => [2, 1]
     *
     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    var method = restParam(function(path, args) {
      return function(object) {
        return invokePath(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path on `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = restParam(function(object, args) {
      return function(path) {
        return invokePath(object, path, args);
      };
    });

    /**
     * Adds all own enumerable function properties of a source object to the
     * destination object. If `object` is a function then methods are added to
     * its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added
     *  are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      if (options == null) {
        var isObj = isObject(source),
            props = isObj ? keys(source) : null,
            methodNames = (props && props.length) ? baseFunctions(source, props) : null;

        if (!(methodNames ? methodNames.length : isObj)) {
          methodNames = false;
          options = source;
          source = object;
          object = this;
        }
      }
      if (!methodNames) {
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = true,
          index = -1,
          isFunc = isFunction(object),
          length = methodNames.length;

      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      while (++index < length) {
        var methodName = methodNames[index],
            func = source[methodName];

        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = (function(func) {
            return function() {
              var chainAll = this.__chain__;
              if (chain || chainAll) {
                var result = object(this.__wrapped__),
                    actions = result.__actions__ = arrayCopy(this.__actions__);

                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                result.__chain__ = chainAll;
                return result;
              }
              var args = [this.value()];
              push.apply(args, arguments);
              return func.apply(object, args);
            };
          }(func));
        }
      }
      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      context._ = oldDash;
      return this;
    }

    /**
     * A no-operation function that returns `undefined` regardless of the
     * arguments it receives.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that returns the property value at `path` on a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': 2 } } },
     *   { 'a': { 'b': { 'c': 1 } } }
     * ];
     *
     * _.map(objects, _.property('a.b.c'));
     * // => [2, 1]
     *
     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the property value at a given path on `object`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return baseGet(object, toPath(path), path + '');
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. If `end` is not specified it is
     * set to `start` with `start` then set to `0`. If `end` is less than `start`
     * a zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the new array of numbers.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      if (step && isIterateeCall(start, end, step)) {
        end = step = null;
      }
      start = +start || 0;
      step = step == null ? 1 : (+step || 0);

      if (end == null) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
      var index = -1,
          length = nativeMax(ceil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Invokes the iteratee function `n` times, returning an array of the results
     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
     * one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) {
     *   mage.castSpell(n);
     * });
     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
     *
     * _.times(3, function(n) {
     *   this.cast(n);
     * }, mage);
     * // => also invokes `mage.castSpell(n)` three times
     */
    function times(n, iteratee, thisArg) {
      n = floor(n);

      // Exit early to avoid a JSC JIT bug in Safari 8
      // where `Array(0)` is treated as `Array(1)`.
      if (n < 1 || !nativeIsFinite(n)) {
        return [];
      }
      var index = -1,
          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

      iteratee = bindCallback(iteratee, thisArg, 1);
      while (++index < n) {
        if (index < MAX_ARRAY_LENGTH) {
          result[index] = iteratee(index);
        } else {
          iteratee(index);
        }
      }
      return result;
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return baseToString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} augend The first number to add.
     * @param {number} addend The second number to add.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    function add(augend, addend) {
      return (+augend || 0) + (+addend || 0);
    }

    /**
     * Gets the maximum value of `collection`. If `collection` is empty or falsey
     * `-Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => -Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.max(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using the `_.property` callback shorthand
     * _.max(users, 'age');
     * // => { 'user': 'fred', 'age': 40 }
     */
    var max = createExtremum(gt, NEGATIVE_INFINITY);

    /**
     * Gets the minimum value of `collection`. If `collection` is empty or falsey
     * `Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.min(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // using the `_.property` callback shorthand
     * _.min(users, 'age');
     * // => { 'user': 'barney', 'age': 36 }
     */
    var min = createExtremum(lt, POSITIVE_INFINITY);

    /**
     * Gets the sum of the values in `collection`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 6]);
     * // => 10
     *
     * _.sum({ 'a': 4, 'b': 6 });
     * // => 10
     *
     * var objects = [
     *   { 'n': 4 },
     *   { 'n': 6 }
     * ];
     *
     * _.sum(objects, function(object) {
     *   return object.n;
     * });
     * // => 10
     *
     * // using the `_.property` callback shorthand
     * _.sum(objects, 'n');
     * // => 10
     */
    function sum(collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = null;
      }
      var callback = getCallback(),
          noIteratee = iteratee == null;

      if (!(noIteratee && callback === baseCallback)) {
        noIteratee = false;
        iteratee = callback(iteratee, thisArg, 3);
      }
      return noIteratee
        ? arraySum(isArray(collection) ? collection : toIterable(collection))
        : baseSum(collection, iteratee);
    }

    /*------------------------------------------------------------------------*/

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    // Add functions to the `Map` cache.
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;

    // Add functions to the `Set` cache.
    SetCache.prototype.push = cachePush;

    // Assign cache to `_.memoize`.
    memoize.Cache = MapCache;

    // Add functions that return wrapped values when chaining.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.callback = callback;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.restParam = restParam;
    lodash.set = set;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortByAll = sortByAll;
    lodash.sortByOrder = sortByOrder;
    lodash.spread = spread;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.backflow = flowRight;
    lodash.collect = map;
    lodash.compose = flowRight;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.iteratee = callback;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;

    // Add functions to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add functions that return unwrapped values when chaining.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.deburr = deburr;
    lodash.endsWith = endsWith;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.findWhere = findWhere;
    lodash.first = first;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isMatch = isMatch;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.min = min;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padLeft = padLeft;
    lodash.padRight = padRight;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.sum = sum;
    lodash.template = template;
    lodash.trim = trim;
    lodash.trimLeft = trimLeft;
    lodash.trimRight = trimRight;
    lodash.trunc = trunc;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.words = words;

    // Add aliases.
    lodash.all = every;
    lodash.any = some;
    lodash.contains = includes;
    lodash.eq = isEqual;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.head = first;
    lodash.include = includes;
    lodash.inject = reduce;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }()), false);

    /*------------------------------------------------------------------------*/

    // Add functions capable of returning wrapped and unwrapped values when chaining.
    lodash.sample = sample;

    lodash.prototype.sample = function(n) {
      if (!this.__chain__ && n == null) {
        return sample(this.value());
      }
      return this.thru(function(value) {
        return sample(value, n);
      });
    };

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['dropWhile', 'filter', 'map', 'takeWhile'], function(methodName, type) {
      var isFilter = type != LAZY_MAP_FLAG,
          isDropWhile = type == LAZY_DROP_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
        var filtered = this.__filtered__,
            result = (filtered && isDropWhile) ? new LazyWrapper(this) : this.clone(),
            iteratees = result.__iteratees__ || (result.__iteratees__ = []);

        iteratees.push({
          'done': false,
          'count': 0,
          'index': 0,
          'iteratee': getCallback(iteratee, thisArg, 1),
          'limit': -1,
          'type': type
        });

        result.__filtered__ = filtered || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      var whileName = methodName + 'While';

      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__,
            result = (filtered && !index) ? this.dropWhile() : this.clone();

        n = n == null ? 1 : nativeMax(floor(n) || 0, 0);
        if (filtered) {
          if (index) {
            result.__takeCount__ = nativeMin(result.__takeCount__, n);
          } else {
            last(result.__iteratees__).limit = n;
          }
        } else {
          var views = result.__views__ || (result.__views__ = []);
          views.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };

      LazyWrapper.prototype[methodName + 'RightWhile'] = function(predicate, thisArg) {
        return this.reverse()[whileName](predicate, thisArg).reverse();
      };
    });

    // Add `LazyWrapper` methods for `_.first` and `_.last`.
    arrayEach(['first', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
    arrayEach(['initial', 'rest'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this[dropName](1);
      };
    });

    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
    arrayEach(['pluck', 'where'], function(methodName, index) {
      var operationName = index ? 'filter' : 'map',
          createCallback = index ? baseMatches : property;

      LazyWrapper.prototype[methodName] = function(value) {
        return this[operationName](createCallback(value));
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.reject = function(predicate, thisArg) {
      predicate = getCallback(predicate, thisArg, 1);
      return this.filter(function(value) {
        return !predicate(value);
      });
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = start == null ? 0 : (+start || 0);

      var result = this;
      if (start < 0) {
        result = this.takeRight(-start);
      } else if (start) {
        result = this.drop(start);
      }
      if (end !== undefined) {
        end = (+end || 0);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.toArray = function() {
      return this.drop(0);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (!lodashFunc) {
        return;
      }
      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
          retUnwrapped = /^(?:first|last)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments,
            chainAll = this.__chain__,
            value = this.__wrapped__,
            isHybrid = !!this.__actions__.length,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // avoid lazy use if the iteratee has a "length" value other than `1`
          isLazy = useLazy = false;
        }
        var onlyLazy = isLazy && !isHybrid;
        if (retUnwrapped && !chainAll) {
          return onlyLazy
            ? func.call(value)
            : lodashFunc.call(lodash, this.value());
        }
        var interceptor = function(value) {
          var otherArgs = [value];
          push.apply(otherArgs, args);
          return lodashFunc.apply(lodash, otherArgs);
        };
        if (useLazy) {
          var wrapper = onlyLazy ? value : new LazyWrapper(this),
              result = func.apply(wrapper, args);

          if (!retUnwrapped && (isHybrid || result.__actions__)) {
            var actions = result.__actions__ || (result.__actions__ = []);
            actions.push({ 'func': thru, 'args': [interceptor], 'thisArg': lodash });
          }
          return new LodashWrapper(result, chainAll);
        }
        return this.thru(interceptor);
      };
    });

    // Add `Array` and `String` methods to `lodash.prototype`.
    arrayEach(['concat', 'join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          return func.apply(this.value(), args);
        }
        return this[chainName](function(value) {
          return func.apply(value, args);
        });
      };
    });

    // Map minified function names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name,
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybridWrapper(null, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': null }];

    // Add functions to the lazy wrapper.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chaining functions to the `lodash` wrapper.
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add function aliases to the `lodash` wrapper.
    lodash.prototype.collect = lodash.prototype.map;
    lodash.prototype.head = lodash.prototype.first;
    lodash.prototype.select = lodash.prototype.filter;
    lodash.prototype.tail = lodash.prototype.rest;

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports._ = _;
    }
  }
  else {
    // Export for a browser or Rhino.
    root._ = _;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"tween-lite":[function(require,module,exports){
(function (global){
!function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;e<s.length;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,m,f,d=r.length,v=d;--d>-1;)(_=c[r[d]]||new p(r[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=n.apply(n,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;d<this.sc.length;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&n.pr<r&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return void s.splice(i,1)},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,S=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},x=A();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=A(),f=e!==!1&&k,c=500,p=33,d="tick",v=function(t){var e,a,o=A()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(v)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){v(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=r&&(f&&S?S(r):clearTimeout(r),s=m,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=A()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===a&&(o=!0),v(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,void h.wake()):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,void h.fps(i)):f},h.fps(t),setTimeout(function(){f&&h.frame<5&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&A()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(t,e,i){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(t,e){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&$())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e,i,s){var r,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),r=this._last,this._sortChildren)for(n=t._startTime;r&&r._startTime>n;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=r,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;r<a.length;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=K(n,this,!1),1===l&&this._siblings[r].length>1&&J(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=K(e,this,!1),1===l&&this._siblings.length>1&&J(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.16.1",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=120,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],L={},N=I._internals={isArray:f,isSelector:E,lazyTweens:z},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=30,$=N.lazyRender=function(){var t,e=z.length;for(L={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout($,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&$(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&$(),a.frame>=M){M=a.frame+(parseInt(I.autoSleep,10)||120);for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var K=function(t,e,i){var s,r,n=t._gsTweenID;if(F[n||(t._gsTweenID=n="t"+j++)]||(F[n]={target:t,tweens:[]}),e&&(s=F[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return F[n].tweens},H=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},J=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||H(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||V(e,0,c),0===V(o,h,c)&&(m[f++]=o)):o._startTime<=u&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&u-o._startTime<=2e-10||(m[f++]=o)));for(n=f;--n>-1;)if(o=m[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!H(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},V=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)G[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&$(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],G[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(U[n]&&(l=new U[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&J(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),1===m?this.ratio=1-u:2===m?this.ratio=u:.5>t/l?this.ratio=u/2:this.ratio=1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if(!H(this,i,e,u))return!1}for(n in h)(a=o[n])&&(a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=K(s[i],this,!0);else this._siblings=K(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=K(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var W=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=W.prototype},!0);if(n=W.prototype,W.version="1.10.1",W.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},W.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===W.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){W.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new W(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,W.activate([a]),a},s=t._gsQueue){for(r=0;r<s.length;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"viewport-detection":[function(require,module,exports){
'use strict';
var _, viewportDetection;

require('angular');

_ = require('lodash');

viewportDetection = angular.module('$viewportDetection', []).service('resizer', [
  "$rootScope", "$window", function($rootScope, $window) {
    var addCallback, callbacks, current_width, getDevice, isSmartDevice, touchSupport, windowSize;
    current_width = 0;
    callbacks = [];
    addCallback = function(c) {
      if (!_.isFunction(c)) {
        throw new Error("Not a function");
      }
      if (!_.contains(callbacks, c)) {
        callbacks.push(c);
      }
      return null;
    };
    touchSupport = function() {
      return $window.touch;
    };
    isSmartDevice = function() {
      var ua;
      ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
      return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(ua);
    };
    windowSize = function() {
      return {
        height: $window.innerHeight,
        width: $window.innerWidth
      };
    };
    getDevice = function() {
      var winWidth;
      winWidth = windowSize().width;
      switch (false) {
        case !(winWidth <= 480):
          return "mobile";
        case !(winWidth > 480 && winWidth < 769):
          return "tablet";
        default:
          return "desktop";
      }
    };
    return {
      addCallback: addCallback,
      isSmartDevice: isSmartDevice,
      getWidth: function(w) {
        if (w == null) {
          w = null;
        }
        if (!_.isNull(w)) {
          current_width = w;
        }
        return current_width;
      },
      getDevice: getDevice,
      getCallbacks: function() {
        return callbacks;
      },
      sizeChange: function(w) {
        if (current_width === w) {
          return false;
        }
        current_width = w;
        return true;
      },
      resizeFn: function() {
        var size_obj;
        size_obj = this.windowSize();
        if (this.sizeChange(size_obj.width)) {
          return this.runCallBacks(size_obj);
        }
      },
      runCallBacks: function(size) {
        var device;
        device = this.getDevice(size.width);
        return _.forEach(callbacks, function(cb, i) {
          cb(device, size);
          return null;
        });
      },
      trackerCalled: false,
      trackSize: function(callback) {
        var that;
        this.addCallback(callback);
        if (!this.trackerCalled) {
          this.trackerCalled = true;
          that = this;
          return angular.element($window).bind('resize', function() {
            var size_obj;
            size_obj = that.windowSize();
            return that.resizeFn.call(that);
          });
        }
      },
      windowSize: windowSize
    };
  }
]);

module.exports = viewportDetection;

},{"angular":"angular","lodash":"lodash"}]},{},[]);
