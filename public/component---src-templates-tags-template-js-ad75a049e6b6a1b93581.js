"use strict";(self.webpackChunksaai_sudarsanan_website=self.webpackChunksaai_sudarsanan_website||[]).push([[458],{4558:function(e,t,a){var r=a(7294),o=a(3494),i=a(1082),n=a(5390);t.Z=function(e){var t=e.posts.map((function(e){var t=e.frontmatter,a=e.fields,o=e.excerpt,i=e.timeToRead,n=t.title,d=t.tags,s=t.date,p=t.description,c=a.slug;return r.createElement(l,{key:c,tags:d,title:n,date:s,slug:c,timeToRead:i,description:p,excerpt:o})}));return r.createElement(d,null,t)};var l=function(e){var t=e.title,a=e.date,o=e.timeToRead,l=e.tags,d=e.excerpt,g=e.description,u=e.slug;return r.createElement(s,null,r.createElement(n.Z,{tags:l}),r.createElement(p,null,r.createElement(i.Link,{to:u},t)),r.createElement(c,{dangerouslySetInnerHTML:{__html:g||d}}),r.createElement(m,null,r.createElement("span",null,a),r.createElement("span",null,o," mins")))},d=o.default.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"sc-d7pbmi-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),s=o.default.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"sc-d7pbmi-1"})(["display:flex;padding:1.5rem;border-radius:8px;position:relative;flex-direction:column;transition:all 0.3s ease-out;body.light-mode &{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);}body.light-mode &:hover{background-color:rgba(255,255,255,0.5);}body.dark-mode &{background-color:#3b3b3c;border:1px solid #515151;}body.dark-mode &:hover{background-color:rgba(255,255,255,0.1);}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),p=o.default.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"sc-d7pbmi-2"})(['line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),c=o.default.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"sc-d7pbmi-3"})(["margin-top:auto;font-size:var(--size-400);"]),m=o.default.div.withConfig({displayName:"post-list__PostListMeta",componentId:"sc-d7pbmi-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},9299:function(e,t,a){var r=a(1082),o=(0,a(3494).default)(r.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1tg0nmh-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);t.Z=o},5390:function(e,t,a){var r=a(7294),o=a(3494),i=a(1082);t.Z=function(e){var t=e.tags;return r.createElement("div",null,t&&t.map((function(e){return r.createElement(n,{key:e},r.createElement(i.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var n=o.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-1lbtpdl-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}body.light-mode & a{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.7);}body.light-mode & a:hover{background-color:rgba(255,255,255,1);}body.dark-mode & a{background-color:#212122;border:1px solid #1a1a1b;opacity:0.8;}"])},5450:function(e,t,a){a.r(t);var r=a(7294),o=a(1082),i=a(3454),n=a(4558),l=a(9299),d=a(3494);t.default=function(e){var t=e.pageContext,a=e.data,o=t.tag,l=a.allMarkdownRemark.totalCount,d=a.allMarkdownRemark.nodes,g="Posts tagged "+o;return r.createElement(i.Z,{title:g},r.createElement(s,null,r.createElement(p,null,l,' posts tagged "',o,'"'),r.createElement(c,{to:"/tags"},"view all tags"),r.createElement(n.Z,{posts:d}),r.createElement(m,{to:"/tags"},"View All tags")))};var s=d.default.div.withConfig({displayName:"tags-template__TagsTemplateWrapper",componentId:"sc-1j251lr-0"})(["padding-top:var(--size-900);"]),p=d.default.h1.withConfig({displayName:"tags-template__Title",componentId:"sc-1j251lr-1"})(["font-size:var(--size-700);"]),c=(0,d.default)(o.Link).withConfig({displayName:"tags-template___StyledLink",componentId:"sc-1j251lr-2"})(["margin-top:var(--size-400);display:inline-block;color:inherit;text-transform:uppercase;"]),m=(0,d.default)(l.Z).withConfig({displayName:"tags-template___StyledStyledLink",componentId:"sc-1j251lr-3"})(["margin-top:var(--size-400);display:inline-block;"])}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-ad75a049e6b6a1b93581.js.map