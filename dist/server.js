var FakeJsonApiServer=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){function n(t){return t instanceof Array}function r(t,e,r){if(n(t))for(var i=0;i<t.length;i++)e.call(r,t[i],i);else for(var s in t)t.hasOwnProperty(s)&&e.call(r,t[s],s)}function i(t,e,n){return n.forEach(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function s(t){for(var e=1;e<arguments.length;e++)r(arguments[e],function(e,n){void 0!==e&&(t[n]=e)});return t}function o(t,e){return t.filter(function(t){var n=!0;for(var r in e)if(e.hasOwnProperty(r)&&!(n=e[r]===t[r]))break;return n})}function a(t,e){var n=o(t,e);return n.length?n[0]:void 0}t.exports={assign:s,each:r,isArray:n,pick:i,where:o,findWhere:a}},function(t,e,n){var r,i,s;!function(n,o){i=[],r=o,void 0!==(s="function"==typeof r?r.apply(e,i):r)&&(t.exports=s)}(0,function(){function t(t,n){if(e(t))for(var r=0;r<t.length&&!1!==n(t[r],r);r++);else for(var i in t)t.hasOwnProperty(i)&&n(t[i],i)}function e(t){return t&&t.constructor===Array}function n(t){return"[object Object]"===Object.prototype.toString.call(t)}function r(t,e){return"function"==typeof t?t.call(e):t}function i(e){for(var n=1;n<arguments.length;n++)t(arguments[n],function(t,n){void 0!==t&&(e[n]=t)});return e}function s(n,r,i){var o;if(e(r))return o=!1,t(r,function(t){if(s(n,t))return o=!0,!1}),o;o=!0;var h=a.indexOf(r),c=h<0,p=h>=0&&u[h];return c?n instanceof r||(o=!1):"array"===p?!e(n)&&(o=!1):typeof n!==p&&(o=!1),o}function o(t,e,n){e=e||{};var r=e.hasOwnProperty("constructor")?e.constructor:function(){t?t.apply(this,arguments):(this.assignOptions&&(this.writeOptions.apply(this,arguments),this.optionRules&&this.validateOptions(this.options,this.optionRules)),this.initialize&&this.initialize.apply(this,arguments))};if(t){var s=function(){this.constructor=r};s.prototype=t.prototype,r.prototype=new s,i(r,t)}else i(e,h);return n&&i(r,n),i(r.prototype,e),r}var a=[String,Number,Boolean,Function,Object,Array],u=["string","number","boolean","function","object","array"],h={writeOptions:function(e){var s=r(this.defaults,this),o={},a=this;this.optionRules&&t(this.optionRules,function(t,e){o[e]=t.default}),this.optionRules&&t(this.optionRules,function(t,e){n(t)&&void 0!==t.default&&(o[e]=r(t.default,a))}),this.options=i({},s,o,e)},validateOptions:function(e,r){var i=[];return t(r,function(t,r){var o=e[r],a=typeof o;if(!1!==t.required||"undefined"!==a){var u=n(t)?t.type:t;u&&!s(o,u)&&i.push('Invalid type for option "'+r+'" ("'+a+'").'),t.validator&&!t.validator(o)&&i.push('Validation of option "'+r+'" failed.')}}),this.handleValidateOptionsErrors(i)},handleValidateOptionsErrors:function(t){if(t.length)throw new Error(t.join(" "))}};return function(t,e){var n=o(null,t,e);return n.extend=function(t,e){return o(this,t,e)},n}})},function(t,e,n){function r(t,e){var n=h(t)?t:[t],i=[];return e=e||n.map(function(t){return t.id+"@"+t.type}),u(n,function(t){u(t.relationships||{},function(t){u(h(t.data)?t.data:[t.data],function(t){if(t){var n=t.id+"@"+t.type;if(e.indexOf(n)<0){var o=s.find(t.type,t.id);i.push(o),e.push(n),o.relationships&&(i=i.concat(r(o,e)))}}})})}),i}var i=n(1),s=n(3),o=n(0),a=o.assign,u=o.each,h=o.isArray,c=i({initialize:function(t){this.type=t,this.data=s.getCollection(t).slice(),this.setSize(this.data.length)},setSize:function(t){return this.size=t,this},paginate:function(t,e){return t=void 0===t?0:parseInt(t,10),e=void 0===e?this.data.length:parseInt(e,10),this.data=this.data.slice(t,t+e),this},filter:function(t,e){return this.data=this.data.filter(function(n){var r=void 0!==n.attributes[t]?n.attributes[t]:n.relationships&&n.relationships[t]&&n.relationships[t].data;return e(r,n)}),this.size=this.data.length,this},renderForApi:function(){var t=r(this.data);return a({jsonapi:{version:"1.0"},meta:{total:String(this.size)},data:this.data},t.length?{included:t}:void 0)}}),p=i({initialize:function(t){this.type=t,this.data={}},getAttributes:function(){return this.data.attributes},getRelationships:function(){return this.data.relationships},getType:function(){return this.type},getId:function(){return this.data.id},isNew:function(){return!this.getId()},find:function(t){return this.data=s.find(this.getType(),t)||{},this},create:function(t){return a(this.data,{attributes:t.attributes,relationships:t.relationships}),this},edit:function(t){return a(this.data.attributes,t.attributes),a(this.data.relationships,t.relationships),this},save:function(){var t=this.isNew()?s.add(this):s.update(this);return this.find(t)},remove:function(){return s.remove(this),this},isEmpty:function(){return 0===Object.keys(this.data).length&&this.data.constructor===Object},setValidationRules:function(t){return this.validationRules=t,this},validate:function(t){var e=t.attributes||{},n=t.relationships;return this.validationErrors=[],u(this.validationRules||{},function(t,r){var i=n&&n[r],s=void 0!==e[r]?e[r]:i&&n[r].data,o=t.rule;void 0===s||o(s)||this.validationErrors.push({title:t.message,source:{pointer:"/data/"+(i?"relationships":"attributes")+"/"+r}})},this),this},hasValidationErrors:function(){return this.validationErrors&&this.validationErrors.length>0},getValidationErrors:function(){return this.validationErrors},renderForApi:function(){var t=r(this.data);return a({jsonapi:{version:"1.0"},data:this.data},t.length?{included:t}:void 0)}});t.exports={Collection:c,Model:p}},function(t,e,n){function r(t){c&&localStorage.setItem(c,JSON.stringify(t))}var i,s,o=n(0),a=o.assign,u=o.findWhere,h=o.each,c=void 0;t.exports={getCollection:function(t){return s[t]},find:function(t,e){return u(this.getCollection(t),{id:e})},update:function(t){var e=this.find(t.getType(),t.getId()),n=t.getRelationships();return a(e.attributes,t.getAttributes()),n&&(e.relationships=a({},e.relationships,n)),r(s),e.id},add:function(t){var e=this.getCollection(t.getType()),n=String(parseInt(e[e.length-1].id)+1),i=t.getRelationships(),o={id:n,type:t.getType(),attributes:t.getAttributes()};return i&&(o.relationships=i),e.push(o),r(s),n},remove:function(t){var e=this.getCollection(t.getType()),n=this.find(t.getType(),t.getId());return e.splice(e.indexOf(n),1),r(s),t},reset:function(){return r(i),s=JSON.parse(JSON.stringify(i)),this},import:function(t){var e={};return h(t,function(t,n){e[n]="function"==typeof t.data?t.data(this.random):t.data},this),i=e,c?(localStorage.getItem(c)||r(e),s=JSON.parse(localStorage.getItem(c))):s=JSON.parse(JSON.stringify(e)),this},setStorageKey:function(t){c=t},clear:function(){i=null,s=null,c&&localStorage.removeItem(c)},random:{boolean:function(){return Math.random()>=.5},int:function(t,e){return parseInt(Math.random()*(e-t)+t,10)},id:function(t,e){return String(this.int(t,e))}}}},function(t,e,n){var r=n(5),i=n(1),s=n(9),o=n(3),a=n(10),u=n(0),h=u.assign,c=u.each,p=u.pick,d=i({defaults:{baseApiUrl:"/",storageKey:void 0,resources:{},delay:void 0},constructor:function(t){this.options=h({},this.defaults,t),t.storageKey&&o.setStorageKey(t.storageKey),o.import(this.options.resources),this.start()},start:function(){var t=this,e=this.options,n=this.pretender=new r,i=function(e,n){t.trigger("request",e);var r;try{r=n(e)}catch(t){r=[500,{"Content-Type":"application/json"},t.toString()]}return t.trigger("response",r),r};return c(e.resources,function(t,r){var o=s.extend({resourceType:r}),a=new o(p({},t,["filters","validationRules"]));n.get(e.baseApiUrl+"/"+r,function(t){return i(t,function(){return a.list(t)})},e.delay),n.get(e.baseApiUrl+"/"+r+"/:id",function(t){return i(t,function(){return a.show(t.params.id,t)})},e.delay),["put","post"].forEach(function(t){n[t](e.baseApiUrl+"/"+r+"/:id",function(t){return i(t,function(){return a.edit(t.params.id,t)})},e.delay)}),n.post(e.baseApiUrl+"/"+r,function(t){return i(t,function(){return a.create(t)})},e.delay),n.delete(e.baseApiUrl+"/"+r+"/:id",function(t){return i(t,function(){return a.delete(t.params.id,t)})},e.delay)}),this},stop:function(){return o.clear(),this.pretender.shutdown(),this},resetData:function(){return o.reset(),this}},{resetData:function(){return o.reset(),this}});a(d.prototype),t.exports=d},function(t,e,n){(function(e){!function(r){"use strict";function i(t){var e=document.createElement("a");e.href=t,e.host||(e.href=e.href);var n=e.pathname;"/"!==n.charAt(0)&&(n="/"+n);var r=e.host;return"80"!==e.port&&"443"!==e.port||(r=e.hostname),{host:r,protocol:e.protocol,search:e.search,hash:e.hash,href:e.href,pathname:n,fullpath:n+(e.search||"")+(e.hash||"")}}function s(){this.verbs={GET:new l,PUT:new l,POST:new l,DELETE:new l,PATCH:new l,HEAD:new l,OPTIONS:new l}}function o(){this._registries={}}function a(){this.hosts=new o,this.handlers=[],this.handledRequests=[],this.passthroughRequests=[],this.unhandledRequests=[],this.requestReferences=[],this._nativeXMLHttpRequest=r.XMLHttpRequest,r.XMLHttpRequest=u(this,this._nativeXMLHttpRequest),this.running=!0;for(var t=0;t<arguments.length;t++)this.map(arguments[t])}function u(t,e){function n(){f.call(this)}function r(e){function n(t,e,n){for(var r=0;r<t.length;r++){var i=t[r];e[i]&&(n[i]=e[i])}}function r(t,e,n){t.dispatchEvent(n),t["on"+e]&&t["on"+e](n)}var i=["error","timeout","abort","readystatechange"],s=[],o=["readyState","responseText","responseXML","status","statusText"],a=e._passthroughRequest=new t._nativeXMLHttpRequest;"arraybuffer"===e.responseType&&(o=["readyState","response","status","statusText"],a.responseType=e.responseType),"onload"in a&&i.push("load"),e.async&&"arraybuffer"!==e.responseType&&(i.push("progress"),s.push("progress")),a.open(e.method,e.url,e.async,e.username,e.password);var u;for(u=0;u<i.length;u++)!function(t){a["on"+t]=function(i){n(o,a,e),r(e,t,i)}}(i[u]);for(u=0;u<s.length;u++)!function(t){a.upload&&(a.upload["on"+t]=function(n){r(e.upload,t,n)})}(s[u]);e.async&&(a.timeout=e.timeout,a.withCredentials=e.withCredentials);for(var h in e.requestHeaders)a.setRequestHeader(h,e.requestHeaders[h]);return a}var i=new f;return i.send=function(){if(!t.running)throw new Error("You shut down a Pretender instance while there was a pending request. That request just tried to complete. Check to see if you accidentally shut down a pretender earlier than you intended to");if(f.prototype.send.apply(this,arguments),t.checkPassthrough(this)){var e=r(this);e.send.apply(e,arguments)}else t.handleRequest(this)},i._passthroughCheck=function(t,e){return this._passthroughRequest?this._passthroughRequest[t].apply(this._passthroughRequest,e):f.prototype[t].apply(this,e)},i.abort=function(){return this._passthroughCheck("abort",arguments)},i.getResponseHeader=function(){return this._passthroughCheck("getResponseHeader",arguments)},i.getAllResponseHeaders=function(){return this._passthroughCheck("getAllResponseHeaders",arguments)},n.prototype=i,e.prototype._passthroughCheck&&console.warn("You created a second Pretender instance while there was already one running. Running two Pretender servers at once will lead to unexpected results and will be removed entirely in a future major version.Please call .shutdown() on your instances when you no longer need them to respond."),n}function h(t){return function(e,n,r){return this.register(t,e,n,r)}}function c(t,e,n){setTimeout(function(){if(!t.aborted&&!t.status){var r=(new Date).getTime()-e.getTime();t.upload._progress(!0,r,n),t._progress(!0,r,n),c(t,e,n)}},50)}function p(t){return"[object Array]"===Object.prototype.toString.call(t)}var d=void 0!==r&&void 0!==e&&"[object Object]"===Object.prototype.toString.call(e),l=d?n(7):r.RouteRecognizer,f=d?n(8):r.FakeXMLHttpRequest;o.prototype.forURL=function(t){var e=i(t).host,n=this._registries[e];return void 0===n&&(n=this._registries[e]=new s(e)),n.verbs};var y={};a.prototype={get:h("GET"),post:h("POST"),put:h("PUT"),delete:h("DELETE"),patch:h("PATCH"),head:h("HEAD"),options:h("OPTIONS"),map:function(t){t.call(this)},register:function(t,e,n,r){if(!n)throw new Error("The function you tried passing to Pretender to handle "+t+" "+e+" is undefined or missing.");return n.numberOfCalls=0,n.async=r,this.handlers.push(n),this.hosts.forURL(e)[t].add([{path:i(e).fullpath,handler:n}]),n},passthrough:y,checkPassthrough:function(t){var e=t.method.toUpperCase(),n=i(t.url).fullpath;e=e.toUpperCase();var r=this.hosts.forURL(t.url)[e].recognize(n),s=r&&r[0];return!(!s||s.handler!==y)&&(this.passthroughRequests.push(t),this.passthroughRequest(e,n,t),!0)},handleRequest:function(t){var e=t.method.toUpperCase(),n=t.url,r=this._handlerFor(e,n,t);if(r){r.handler.numberOfCalls++;var i=r.handler.async;this.handledRequests.push(t);var s=this,o=function(r){if(!p(r)){throw new Error("Nothing returned by handler for "+n+". Remember to `return [status, headers, body];` in your route handler.")}var o=r[0],a=s.prepareHeaders(r[1]),u=s.prepareBody(r[2],a);s.handleResponse(t,i,function(){t.respond(o,a,u),s.handledRequest(e,n,t)})};try{var a=r.handler(t);a&&"function"==typeof a.then?a.then(function(t){o(t)}):o(a)}catch(r){this.erroredRequest(e,n,t,r),this.resolve(t)}}else this.unhandledRequests.push(t),this.unhandledRequest(e,n,t)},handleResponse:function(t,e,n){var r="function"==typeof e?e():e;if(!1===(r="boolean"==typeof r||"number"==typeof r?r:0))n();else{var i=this;i.requestReferences.push({request:t,callback:n}),!0!==r&&(c(t,new Date,r),setTimeout(function(){i.resolve(t)},r))}},resolve:function(t){for(var e=0,n=this.requestReferences.length;e<n;e++){var r=this.requestReferences[e];if(r.request===t){r.callback(),this.requestReferences.splice(e,1);break}}},requiresManualResolution:function(t,e){var n=this._handlerFor(t.toUpperCase(),e,{});if(!n)return!1;var r=n.handler.async;return"function"==typeof r?!0===r():!0===r},prepareBody:function(t){return t},prepareHeaders:function(t){return t},handledRequest:function(){},passthroughRequest:function(){},unhandledRequest:function(t,e){throw new Error("Pretender intercepted "+t+" "+e+" but no handler was defined for this type of request")},erroredRequest:function(t,e,n,r){throw r.message="Pretender intercepted "+t+" "+e+" but encountered an error: "+r.message,r},_handlerFor:function(t,e,n){var r=this.hosts.forURL(e)[t],s=r.recognize(i(e).fullpath),o=s?s[0]:null;return o&&(n.params=o.params,n.queryParams=s.queryParams),o},shutdown:function(){r.XMLHttpRequest=this._nativeXMLHttpRequest,this.running=!1}},a.parseURL=i,a.Hosts=o,a.Registry=s,t.exports=a,r.Pretender=a}(self)}).call(e,n(6))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function o(){y&&l&&(y=!1,l.length?f=l.concat(f):g=-1,f.length&&a())}function a(){if(!y){var t=i(o);y=!0;for(var e=f.length;e;){for(l=f,f=[];++g<e;)l&&l[g].run();g=-1,e=f.length}l=null,y=!1,s(t)}}function u(t,e){this.fun=t,this.array=e}function h(){}var c,p,d=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var l,f=[],y=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new u(t,e)),1!==f.length||y||i(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=h,d.addListener=h,d.once=h,d.off=h,d.removeListener=h,d.removeAllListeners=h,d.emit=h,d.prependListener=h,d.prependOnceListener=h,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t,e,n){this.path=t,this.matcher=e,this.delegate=n}function e(t){this.routes={},this.children={},this.target=t}function n(e,r,i){return function(s,o){var a=e+s;if(!o)return new t(e+s,r,i);o(n(a,r,i))}}function r(t,e,n){for(var r=0,i=0;i<t.length;i++)r+=t[i].path.length;e=e.substr(r);var s={path:e,handler:n};t.push(s)}function i(t,e,n,s){var o=e.routes;for(var a in o)if(o.hasOwnProperty(a)){var u=t.slice();r(u,a,o[a]),e.children[a]?i(u,e.children[a],n,s):n.call(s,u)}}function s(t,r){var s=new e;t(n("",s,this.delegate)),i([],s,function(t){r?r(this,t):this.add(t)},this)}function o(t){return t.split("/").map(a).join("/")}function a(t){return decodeURIComponent(t).replace(C,encodeURIComponent)}function u(t){return encodeURIComponent(t).replace(S,decodeURIComponent)}function h(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){if("object"!=typeof t||null===t)throw new Error("You must pass an object as the second argument to `generate`.");if(!t.hasOwnProperty(e))throw new Error("You must provide param `"+e+"` to `generate`.");if(0===(""+t[e]).length)throw new Error("You must provide a param `"+e+"`.");return t[e]}function p(t){this.string=a(t)}function d(t){this.name=a(t)}function l(t){this.name=t}function f(){}function y(t,e,n,r){"/"===t.charAt(0)&&(t=t.substr(1));for(var i=t.split("/"),s=new Array(i.length),o=0;o<i.length;o++){var a,u=i[o];(a=u.match(/^:([^\/]+)$/))?(s[o]=new d(a[1]),e.push(a[1]),r.push(!0),n.dynamics++):(a=u.match(/^\*([^\/]+)$/))?(s[o]=new l(a[1]),e.push(a[1]),r.push(!1),n.stars++):""===u?s[o]=new f:(s[o]=new p(u),n.statics++)}return s}function g(t,e){return t.validChars===e.validChars&&t.invalidChars===e.invalidChars}function v(t){this.charSpec=t,this.nextStates=[],this.regex=void 0,this.handlers=void 0,this.specificity=void 0}function m(t){return t.sort(function(t,e){if(t.types.stars!==e.types.stars)return t.types.stars-e.types.stars;if(t.types.stars){if(t.types.statics!==e.types.statics)return e.types.statics-t.types.statics;if(t.types.dynamics!==e.types.dynamics)return e.types.dynamics-t.types.dynamics}return t.types.dynamics!==e.types.dynamics?t.types.dynamics-e.types.dynamics:t.types.statics!==e.types.statics?e.types.statics-t.types.statics:0})}function E(t,e){for(var n=[],r=0,i=t.length;r<i;r++){var s=t[r];n=n.concat(s.match(e))}return n}function w(t){this.queryParams=t||{}}function R(t,e,n){var r=t.handlers,i=t.regex,s=e.match(i),o=1,a=new w(n);a.length=r.length;for(var u=0;u<r.length;u++){for(var h,c,p,d=r[u],l=d.names,f=d.shouldDecodes,y={},g=0;g<l.length;g++)h=l[g],c=f[g],p=s[o++],A.ENCODE_AND_DECODE_PATH_SEGMENTS?y[h]=c?decodeURIComponent(p):p:y[h]=p;a[u]={handler:d.handler,params:y,isDynamic:!!l.length}}return a}function T(t){t=t.replace(/\+/gm,"%20");var e;try{e=decodeURIComponent(t)}catch(t){e=""}return e}t.prototype={to:function(t,e){var n=this.delegate;if(n&&n.willAddRoute&&(t=n.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,t,e,this.delegate)}return this}},e.prototype={add:function(t,e){this.routes[t]=e},addChild:function(t,r,i,s){var o=new e(r);this.children[t]=o;var a=n(t,o,s);s&&s.contextEntered&&s.contextEntered(r,a),i(a)}};var C=/%|\//g,S=/%(?:24|26|2B|2C|3B|3D|3A|40)/g,O=["/",".","*","+","?","|","(",")","[","]","{","}","\\"],b=new RegExp("(\\"+O.join("|\\")+")","g");p.prototype={eachChar:function(t){for(var e,n=this.string,r=0;r<n.length;r++)e=n.charAt(r),t=t.put({invalidChars:void 0,repeat:!1,validChars:e});return t},regex:function(){return this.string.replace(b,"\\$1")},generate:function(){return this.string}},d.prototype={eachChar:function(t){return t.put({invalidChars:"/",repeat:!0,validChars:void 0})},regex:function(){return"([^/]+)"},generate:function(t){var e=c(t,this.name);return A.ENCODE_AND_DECODE_PATH_SEGMENTS?u(e):e}},l.prototype={eachChar:function(t){return t.put({invalidChars:"",repeat:!0,validChars:void 0})},regex:function(){return"(.+)"},generate:function(t){return c(t,this.name)}},f.prototype={eachChar:function(t){return t},regex:function(){return""},generate:function(){return""}},v.prototype={get:function(t){for(var e=this.nextStates,n=0;n<e.length;n++){var r=e[n];if(g(r.charSpec,t))return r}},put:function(t){var e;return(e=this.get(t))?e:(e=new v(t),this.nextStates.push(e),t.repeat&&e.nextStates.push(e),e)},match:function(t){for(var e,n,r,i=this.nextStates,s=[],o=0;o<i.length;o++)e=i[o],n=e.charSpec,void 0!==(r=n.validChars)?-1!==r.indexOf(t)&&s.push(e):void 0!==(r=n.invalidChars)&&-1===r.indexOf(t)&&s.push(e);return s}};var _=Object.create||function(t){function e(){}return e.prototype=t,new e};w.prototype=_({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var A=function(){this.rootState=new v,this.names={}};return A.prototype={add:function(t,e){for(var n,r=this.rootState,i="^",s={statics:0,dynamics:0,stars:0},o=new Array(t.length),a=[],u=!0,h=0;h<t.length;h++){var c=t[h],p=[],d=[],l=y(c.path,p,s,d);a=a.concat(l);for(var g=0;g<l.length;g++){var v=l[g];v instanceof f||(u=!1,r=r.put({invalidChars:void 0,repeat:!1,validChars:"/"}),i+="/",r=v.eachChar(r),i+=v.regex())}var m={handler:c.handler,names:p,shouldDecodes:d};o[h]=m}if(u&&(r=r.put({invalidChars:void 0,repeat:!1,validChars:"/"}),i+="/"),r.handlers=o,r.regex=new RegExp(i+"$"),r.types=s,"object"==typeof e&&null!==e&&e.hasOwnProperty("as")&&(n=e.as),this.names.hasOwnProperty(n))throw new Error("You may not add a duplicate route named `"+n+"`.");(n=e&&e.as)&&(this.names[n]={segments:a,handlers:o})},handlersFor:function(t){var e=this.names[t];if(!e)throw new Error("There is no route named "+t);for(var n=new Array(e.handlers.length),r=0;r<e.handlers.length;r++)n[r]=e.handlers[r];return n},hasRoute:function(t){return!!this.names[t]},generate:function(t,e){var n=this.names[t],r="";if(!n)throw new Error("There is no route named "+t);for(var i=n.segments,s=0;s<i.length;s++){var o=i[s];o instanceof f||(r+="/",r+=o.generate(e))}return"/"!==r.charAt(0)&&(r="/"+r),e&&e.queryParams&&(r+=this.generateQueryString(e.queryParams,n.handlers)),r},generateQueryString:function(t){var e=[],n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(r);n.sort();for(var i=0;i<n.length;i++){r=n[i];var s=t[r];if(null!=s){var o=encodeURIComponent(r);if(h(s))for(var a=0;a<s.length;a++){var u=r+"[]="+encodeURIComponent(s[a]);e.push(u)}else o+="="+encodeURIComponent(s),e.push(o)}}return 0===e.length?"":"?"+e.join("&")},parseQueryString:function(t){for(var e=t.split("&"),n={},r=0;r<e.length;r++){var i,s=e[r].split("="),o=T(s[0]),a=o.length,u=!1;1===s.length?i="true":(a>2&&"[]"===o.slice(a-2)&&(u=!0,o=o.slice(0,a-2),n[o]||(n[o]=[])),i=s[1]?T(s[1]):""),u?n[o].push(i):n[o]=i}return n},recognize:function(t){var e,n,r,i,s=[this.rootState],a={},u=!1;if(i=t.indexOf("#"),-1!==i&&(t=t.substr(0,i)),-1!==(r=t.indexOf("?"))){var h=t.substr(r+1,t.length);t=t.substr(0,r),a=this.parseQueryString(h)}"/"!==t.charAt(0)&&(t="/"+t);var c=t;for(A.ENCODE_AND_DECODE_PATH_SEGMENTS?t=o(t):(t=decodeURI(t),c=decodeURI(c)),e=t.length,e>1&&"/"===t.charAt(e-1)&&(t=t.substr(0,e-1),c=c.substr(0,c.length-1),u=!0),n=0;n<t.length&&(s=E(s,t.charAt(n)),s.length);n++);var p=[];for(n=0;n<s.length;n++)s[n].handlers&&p.push(s[n]);s=m(p);var d=p[0];if(d&&d.handlers)return u&&"(.+)$"===d.regex.source.slice(-5)&&(c+="/"),R(d,c,a)}},A.prototype.map=s,A.VERSION="0.2.8",A.ENCODE_AND_DECODE_PATH_SEGMENTS=!0,A.Normalizer={normalizeSegment:a,normalizePath:o,encodePathSegment:u},A})},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){var e;if("undefined"!=typeof DOMParser){e=(new DOMParser).parseFromString(t,"text/xml")}else e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);return e}function e(t,e){e.addEventListener(t,function(n){var r=e["on"+t];r&&"function"==typeof r&&r(n)})}function n(){this._eventListeners={};for(var t=["loadstart","progress","load","abort","loadend"],n=t.length-1;n>=0;n--)e(t[n],this)}function r(){n.call(this),this.readyState=r.UNSENT,this.requestHeaders={},this.requestBody=null,this.status=0,this.statusText="",this.upload=new n}function i(t){if(t.readyState!==r.OPENED)throw new Error("INVALID_STATE_ERR");if(t.sendFlag)throw new Error("INVALID_STATE_ERR")}function s(t){if(t.readyState==r.DONE)throw new Error("Request done")}function o(t){if(t.async&&t.readyState!=r.HEADERS_RECEIVED)throw new Error("No headers received")}function a(t){if("string"!=typeof t){var e=new Error("Attempted to respond to fake XMLHttpRequest with "+t+", which is not a string.");throw e.name="InvalidBodyException",e}}/**
   * Minimal Event interface implementation
   *
   * Original implementation by Sven Fuchs: https://gist.github.com/995028
   * Modifications and tests by Christian Johansen.
   *
   * @author Sven Fuchs (svenfuchs@artweb-design.de)
   * @author Christian Johansen (christian@cjohansen.no)
   * @license BSD
   *
   * Copyright (c) 2011 Sven Fuchs, Christian Johansen
   */
var u=function(t,e,n,r){this.type=t,this.bubbles=e,this.cancelable=n,this.target=r};u.prototype={stopPropagation:function(){},preventDefault:function(){this.defaultPrevented=!0}};var h={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"},c={"Accept-Charset":!0,"Accept-Encoding":!0,Connection:!0,"Content-Length":!0,Cookie:!0,Cookie2:!0,"Content-Transfer-Encoding":!0,Date:!0,Expect:!0,Host:!0,"Keep-Alive":!0,Referer:!0,TE:!0,Trailer:!0,"Transfer-Encoding":!0,Upgrade:!0,"User-Agent":!0,Via:!0};n.prototype={addEventListener:function(t,e){this._eventListeners[t]=this._eventListeners[t]||[],this._eventListeners[t].push(e)},removeEventListener:function(t,e){for(var n=this._eventListeners[t]||[],r=0,i=n.length;r<i;++r)if(n[r]==e)return n.splice(r,1)},dispatchEvent:function(t){for(var e=t.type,n=this._eventListeners[e]||[],r=0;r<n.length;r++)"function"==typeof n[r]?n[r].call(this,t):n[r].handleEvent(t);return!!t.defaultPrevented},_progress:function(t,e,n){var r=new u("progress");r.target=this,r.lengthComputable=t,r.loaded=e,r.total=n,this.dispatchEvent(r)}},r.prototype=new n,r.UNSENT=0,r.OPENED=1,r.HEADERS_RECEIVED=2,r.LOADING=3,r.DONE=4;var p={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4,async:!0,withCredentials:!1,open:function(t,e,n,i,s){this.method=t,this.url=e,this.async="boolean"!=typeof n||n,this.username=i,this.password=s,this.responseText=null,this.responseXML=null,this.requestHeaders={},this.sendFlag=!1,this._readyStateChange(r.OPENED)},setRequestHeader:function(t,e){if(i(this),c[t]||/^(Sec-|Proxy-)/.test(t))throw new Error('Refused to set unsafe header "'+t+'"');this.requestHeaders[t]?this.requestHeaders[t]+=","+e:this.requestHeaders[t]=e},send:function(t){i(this),/^(get|head)$/i.test(this.method)||(this.requestHeaders["Content-Type"]||(t||"").toString().match("FormData")||(this.requestHeaders["Content-Type"]="text/plain;charset=UTF-8"),this.requestBody=t),this.errorFlag=!1,this.sendFlag=this.async,this._readyStateChange(r.OPENED),"function"==typeof this.onSend&&this.onSend(this),this.dispatchEvent(new u("loadstart",!1,!1,this))},abort:function(){this.aborted=!0,this.responseText=null,this.errorFlag=!0,this.requestHeaders={},this.readyState>r.UNSENT&&this.sendFlag&&(this._readyStateChange(r.DONE),this.sendFlag=!1),this.readyState=r.UNSENT,this.dispatchEvent(new u("abort",!1,!1,this)),"function"==typeof this.onerror&&this.onerror()},getResponseHeader:function(t){if(this.readyState<r.HEADERS_RECEIVED)return null;if(/^Set-Cookie2?$/i.test(t))return null;t=t.toLowerCase();for(var e in this.responseHeaders)if(e.toLowerCase()==t)return this.responseHeaders[e];return null},getAllResponseHeaders:function(){if(this.readyState<r.HEADERS_RECEIVED)return"";var t="";for(var e in this.responseHeaders)this.responseHeaders.hasOwnProperty(e)&&!/^Set-Cookie2?$/i.test(e)&&(t+=e+": "+this.responseHeaders[e]+"\r\n");return t},overrideMimeType:function(t){"string"==typeof t&&(this.forceMimeType=t.toLowerCase())},_readyStateChange:function(t){this.readyState=t,"function"==typeof this.onreadystatechange&&this.onreadystatechange(new u("readystatechange")),this.dispatchEvent(new u("readystatechange")),this.readyState==r.DONE&&(this.dispatchEvent(new u("load",!1,!1,this)),this.dispatchEvent(new u("loadend",!1,!1,this)))},_setResponseHeaders:function(t){this.responseHeaders={};for(var e in t)t.hasOwnProperty(e)&&(this.responseHeaders[e]=t[e]);this.forceMimeType&&(this.responseHeaders["Content-Type"]=this.forceMimeType),this.async?this._readyStateChange(r.HEADERS_RECEIVED):this.readyState=r.HEADERS_RECEIVED},_setResponseBody:function(e){s(this),o(this),a(e);var n=this.chunkSize||10,i=0;this.responseText="";do{this.async&&this._readyStateChange(r.LOADING),this.responseText+=e.substring(i,i+n),i+=n}while(i<e.length);var u=this.getResponseHeader("Content-Type");if(this.responseText&&(!u||/(text\/xml)|(application\/xml)|(\+xml)/.test(u)))try{this.responseXML=t(this.responseText)}catch(t){}this.async?this._readyStateChange(r.DONE):this.readyState=r.DONE},respond:function(t,e,n){this._setResponseHeaders(e||{}),this.status="number"==typeof t?t:200,this.statusText=h[this.status],this._setResponseBody(n||"")}};for(var d in p)r.prototype[d]=p[d];return r})},function(t,e,n){var r=n(1),i=n(2).Collection,s=n(2).Model,o=n(0),a=o.assign,u=o.each;t.exports=r({resourceType:null,assignOptions:!0,defaults:{filters:{},validationRules:{}},getRequestBodyData:function(t){var e=t.requestBody;return"undefined"!=typeof window&&e instanceof window.FormData?JSON.parse(e.get("data")):"string"==typeof e?JSON.parse(e).data:e.data},list:function(t){var e=new i(this.resourceType),n=t.queryParams;u(this.options.filters,function(t,r){var i=n.filter&&n.filter[r]?n.filter[r]:n["filter["+r+"]"];i&&e.filter(r,function(e,n){return t(e,i,n)})});var r=n.page?n.page.offset:n["page[offset]"],s=n.page?n.page.limit:n["page[limit]"];return e.paginate(r,s),this.response(t,e.renderForApi())},show:function(t,e){var n=new s(this.resourceType).find(t);return n.isEmpty()?this.response(e,"",{statusCode:404}):this.response(e,n.renderForApi())},edit:function(t,e){var n=this.getRequestBodyData(e),r=new s(this.resourceType).find(t);return r.setValidationRules(this.options.validationRules).validate(n),r.hasValidationErrors()?this.response(e,{errors:r.getValidationErrors()},{statusCode:409}):(r.edit(n).save(),this.response(e,r.renderForApi()))},create:function(t){var e=this.getRequestBodyData(t),n=new s(this.resourceType).create(e);return n.setValidationRules(this.options.validationRules).validate(e),n.hasValidationErrors()?this.response(t,{errors:n.getValidationErrors()},{statusCode:409}):(n.save(),this.response(t,n.renderForApi()))},delete:function(t,e){return new s(this.resourceType).find(t).remove(),this.response(e,"",{statusCode:204})},response:function(t,e,n){return n=a({statusCode:200,headers:{"Content-Type":"application/json"}},n),[n.statusCode,n.headers,JSON.stringify(e)]}})},function(t,e,n){var r,i,s;!function(n,o){i=[],r=o,void 0!==(s="function"==typeof r?r.apply(e,i):r)&&(t.exports=s)}(0,function(){function t(t,e){if(t instanceof Array)for(var n=0;n<t.length;n++)e(t[n],n);else for(var r in t)t.hasOwnProperty(r)&&e(r,t[r])}function e(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}function n(t,e,n,r){t._mittyOn=t._mittyOn||[],t._mittyOn.push({listener:e,eventName:n,callback:r})}function r(e,n,r,i){if(e._mittyOn&&e._mittyOn.length){var s={},o=[];n&&(s.listener=n),i&&(s.callback=i),r&&(s.eventName=r),t(e._mittyOn,function(e){var n=!0;t(s,function(t,r){e[t]!==r&&(n=!1)}),!n&&o.push(e)}),e._mittyOn=o}}function i(t,e){if(t._mittyOn)for(var n=0;n<t._mittyOn.length;n++)if(t._mittyOn[n].listener===e)return!0;return!1}function s(n,s,o,a){var u=n._mittyListenTo&&n._mittyListenTo.length>0;s&&u?(r(s,n,o,a),i(s,n)||n._mittyListenTo.splice(e(n._mittyListenTo,s),1)):u&&(t(n._mittyListenTo,function(t){r(t,n)}),n._mittyListenTo=[])}var o={on:function(t,e){return n(this,this,t,e),this},listenTo:function(t,r,i){return n(t,this,r,i),this._mittyListenTo=this._mittyListenTo||[],e(this._mittyListenTo,t)<0&&this._mittyListenTo.push(t),this},off:function(t,e){return r(this,null,t,e),this},stopListening:function(t,e,n){return s(this,t,e,n),this},trigger:function(e,n){return this._mittyOn&&t(this._mittyOn,function(t){t.eventName===e&&t.callback.call(t.listener,n)}),this}};return function(e){return t(o,function(t,n){e[t]=n}),e}})}]);