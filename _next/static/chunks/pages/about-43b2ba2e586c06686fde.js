_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"8y3H":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr");function c(e){return Object(r.jsx)("a",{href:e.href,class:"hover:underline text-blue-900",target:"_blank",rel:"noreferrer noopener",children:e.children})}},ARk6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),c=n("g4pe"),a=n.n(c),s=n("YFqc"),o=n.n(s);function i(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{name:"description",content:e.meta_desc})]}),Object(r.jsx)("header",{class:"bg-gradient-to-r from-purple-500 via-blue-400 to-blue-400",children:Object(r.jsxs)("div",{class:"px-4 py-4 flex flex-col sm:flex-row",children:[Object(r.jsx)(o.a,{href:e.parent.href,children:Object(r.jsxs)("a",{class:"flex-1 text-white hover:underline flex justify-items-start items-center",children:["< ",e.parent.name]})}),Object(r.jsx)("h1",{class:"flex-0 w-max text-4xl font-bold text-red-700 flex justify-items-start items-center",children:e.title}),Object(r.jsx)("div",{class:"flex-1 flex justify-items-start items-center"})]})}),Object(r.jsx)("div",{class:"bg-gray-300 min-h-screen",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsx)("div",{class:"p-4",children:e.children})})}),Object(r.jsx)("footer",{class:"bg-gray-600 text-white",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsxs)("div",{class:"p-4",children:[Object(r.jsx)("a",{href:"https://github.com/22940dev/22940dev.github.com/blob/main"+e.filename,target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Source"})," \xb7"," ",Object(r.jsx)("a",{href:"https://github.com/22940dev/22940dev.github.com/edit/main"+e.filename,target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Edit"})]})})})]})}},TaPz:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("nKUr"),c=n("ARk6"),a=n("YFqc"),s=n.n(a),o=n("8y3H");function i(){return Object(r.jsxs)(c.a,{title:"About",meta_desc:"about me",parent:{name:"pfg's homepage",href:"/"},filename:"/pages/about.tsx",children:[Object(r.jsx)("h2",{class:"font-black text-3xl my-3",children:"hi"}),Object(r.jsxs)("p",{class:"mb-3",children:["I'm pfg. I have a"," ",Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{class:"text-blue-700 hover:underline",children:"homepage"})})," ","and a ",Object(r.jsx)(o.a,{href:"https://github.com/pfgithub",children:"Github"}),"."]})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),d=f.href,h=f.as,p=e.children,b=e.replace,v=e.shallow,j=e.scroll,x=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var m=a.Children.only(p),g=m&&"object"===typeof m&&m.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),y=r(O,2),w=y[0],_=y[1],E=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=_&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,c=l[d+"%"+h+(r?"%"+r:"")];e&&!c&&u(n,d,h,{locale:r})}),[h,d,_,x,t,n]);var k={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,d,h,b,v,j,x)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var I="undefined"!==typeof x?x:n&&n.locale,L=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(h,I,n&&n.locales,n&&n.domainLocales);k.href=L||(0,s.addBasePath)((0,s.addLocale)(h,I,n&&n.defaultLocale))}return a.default.cloneElement(m,k)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[h,f]};var c=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["hIud",0,2,1]]]);