"use strict";(self.webpackChunksaai_sudarsanan_website=self.webpackChunksaai_sudarsanan_website||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return h},swapPlaceholderImage:function(){return v}});var a,o=n(5861),r=n(4687),i=n.n(r),c=n(3723),s=n(7294),u=n(7762),l=(n(72),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,n,a,o,r){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function u(e){var t=this;this.removeEventListener("load",u);var n=e.currentTarget,a=new Image;a.src=n.currentSrc,a.decode?a.decode().then((function(){b(t,c),null==o||o({wasCached:s})})).catch((function(e){b(t,c),null==r||r(e)})):(b(this,c),null==o||o({wasCached:s}))}return i.addEventListener("load",u),null==a||a({wasCached:s}),Array.from(i.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&u.call(i,{currentTarget:i}),function(){i&&i.removeEventListener("load",u)}}function v(e,t,r,s,u,g,b){if(!(0,c.h)()){var v,h,m,w=(j=function(){v=f(e,t,r,u,g,b)},"IntersectionObserver"in window?(a||(a=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,j),a.observe(e),function(){a&&e&&(l.delete(e),a.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(h=s.objectFit)?h:"cover",e.dataset.objectPosition=""+(null!=(m=s.objectPosition)?m:"50% 50%"),(y=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){v&&v(),p()}}var y,j;return f(e,t,r,u,g,b)}function h(e){var t=e.image,n=e.loading,a=void 0===n?"lazy":n,o=e.isLoading,r=e.isLoaded,i=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,b=e.objectPosition,f=e.backgroundColor,v=e.objectFit,h=void 0===v?"cover":v,m=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,j=t.images,C=t.placeholder,k=t.backgroundColor;return d=(0,c.a)({objectFit:h,objectPosition:b,backgroundColor:f},d),(0,u.uS)(s.createElement(c.L,{layout:y,width:w,height:p},s.createElement(c.P,(0,c.a)({},(0,c.g)(C,r,y,w,p,k,h,b))),s.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:i},(0,c.b)(o,r,j,a,d)))))}}}]);
//# sourceMappingURL=223-e593e9282f8c06f32307.js.map