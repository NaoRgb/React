(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9411)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,u=void 0!==c&&c,y=e.loading,h=e.lazyRoot,S=void 0===h?null:h,z=e.lazyBoundary,k=void 0===z?"200px":z,_=e.className,L=e.quality,P=e.width,R=e.height,C=e.style,M=e.objectFit,N=e.objectPosition,q=e.onLoadingComplete,D=e.placeholder,U=void 0===D?"empty":D,B=e.blurDataURL,T=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),W=s.useContext(g.ImageConfigContext),H=s.useMemo((function(){var e=v||W||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:n})}),[W]),F=T,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var G=E;if("loader"in F){if(F.loader){var K=F.loader;G=function(e){e.config;var t=b(e,["config"]);return K(t)}}delete F.loader}var $="";if(function(e){return"object"===typeof e&&(O(e)||function(e){return void 0!==e.src}(e))}(t)){var J=O(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,$=J.src,(!V||"fill"!==V)&&(R=R||J.height,P=P||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:$;var X=x(P),Q=x(R),Y=x(L),Z=!u&&("lazy"===y||"undefined"===typeof y);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=i(s.useState(!1),2),ne=te[0],re=te[1],oe=i(p.useIntersection({rootRef:S,rootMargin:k,disabled:!Z}),3),ie=oe[0],ae=oe[1],le=oe[2],ce=!Z||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N};0;0;var pe=Object.assign({},C,"raw"===V?{}:de),ge="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:N||"0% 0%"};if("fill"===V)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var ye=Q/X,he=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===V?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=he):"intrinsic"===V?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===V&&(ue.display="inline-block",ue.position="relative",ue.width=X,ue.height=Q)}else 0;var me={src:j,srcSet:void 0,sizes:void 0};ce&&(me=A({config:H,src:t,unoptimized:l,layout:V,width:X,quality:Y,sizes:n,loader:G}));var be=t;0;var ve,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var Se=(o(ve={},we,me.srcSet),o(ve,je,me.sizes),ve),Oe=s.default.useLayoutEffect,Ae=s.useRef(q),xe=s.useRef(t);s.useEffect((function(){Ae.current=q}),[q]),Oe((function(){xe.current!==t&&(le(),xe.current=t)}),[le,t]);var Ee=m({isLazy:Z,imgAttributes:me,heightInt:Q,widthInt:X,qualityInt:Y,layout:V,className:_,imgStyle:pe,blurStyle:ge,loading:y,config:H,unoptimized:l,placeholder:U,loader:G,srcString:be,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:ie,isVisible:ce},F);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(I,Object.assign({},Ee)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(I,Object.assign({},Ee))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},Se))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),p=n(9246),g=n(8730),y=(n(670),n(2700));function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){h(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(y.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(k(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,i=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,i=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,c),f=s.widths,d=s.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:l,width:f[p]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=S.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,r,o,i){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&i(!0),null===o||void 0===o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,o=e.qualityInt,i=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,y=e.unoptimized,h=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,S=e.onLoad,O=e.onError,x=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},x,t,"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,className:a,style:m({},l,c),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&z(e,p,0,f,v,w)}),[j,p,i,f,v,w]),onLoad:function(e){z(e.currentTarget,p,0,f,v,w),S&&S(e)},onError:function(e){"blur"===f&&w(!0),O&&O(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},x,A({config:g,src:p,unoptimized:y,layout:i,width:r,quality:o,sizes:t.sizes,loader:h}),"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,style:l,className:a,loading:d||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},l=n(1003),c=n(880),u=n(9246);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,i=void 0===r?!0!==Boolean(!1):r,p=e.href,g=e.as,y=e.children,h=e.prefetch,m=e.passHref,b=e.replace,v=e.shallow,w=e.scroll,j=e.locale,S=e.onClick,O=e.onMouseEnter,A=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=y,i&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var x,E=!1!==h,z=c.useRouter(),I=a.default.useMemo((function(){var e=o(l.resolveHref(z,p,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(z,g):n||t}}),[z,p,g]),k=I.href,_=I.as,L=a.default.useRef(k),P=a.default.useRef(_);i&&(x=a.default.Children.only(n));var R=i?x&&"object"===typeof x&&x.ref:t,C=o(u.useIntersection({rootMargin:"200px"}),3),M=C[0],N=C[1],q=C[2],D=a.default.useCallback((function(e){P.current===_&&L.current===k||(q(),P.current=_,L.current=k),M(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[_,R,k,q,M]);a.default.useEffect((function(){var e=N&&E&&l.isLocalURL(k),t="undefined"!==typeof j?j:z&&z.locale,n=f[k+"%"+_+(t?"%"+t:"")];e&&!n&&d(z,k,_,{locale:t})}),[_,k,N,j,E,z]);var U={ref:D,onClick:function(e){i||"function"!==typeof S||S(e),i&&x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}))}(e,z,k,_,b,v,w,j)},onMouseEnter:function(e){i||"function"!==typeof O||O(e),i&&x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l.isLocalURL(k)&&d(z,k,_,{priority:!0})}};if(!i||m||"a"===x.type&&!("href"in x.props)){var B="undefined"!==typeof j?j:z&&z.locale,T=z&&z.isLocaleDomain&&l.getDomainLocale(_,B,z&&z.locales,z&&z.domainLocales);U.href=T||l.addBasePath(l.addLocale(_,B,z&&z.defaultLocale))}return i?a.default.cloneElement(x,U):a.default.createElement("a",Object.assign({},A,U),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],g=o(i.useState(t?t.current:null),2),y=g[0],h=g[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]),b=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[m,d,b]};var i=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3262:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var r=["010_SSR","020_SG","030_SG_fetch","040_api_routes"]},9411:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=(n(7107),n(5675)),i=n.n(o),a=n(1664),l=n.n(a),c=n(3262);function u(){return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(i(),{loader:function(e){return e.src},src:"/vercel.svg",alt:"vercel",width:177,height:40})})}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"nav",children:c.q.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/".concat(e),children:(0,r.jsx)("a",{className:"link",children:e})})},e)}))})})]})}function s(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:"layout",children:t})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var p=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(s,{children:(0,r.jsx)(t,d({},n))})}},7107:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var n=e.O();_N_E=n}]);