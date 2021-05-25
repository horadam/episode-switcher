(this["webpackJsonpepisode-switcher"]=this["webpackJsonpepisode-switcher"]||[]).push([[0],{257:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(16),i=n.n(s),a=(n(46),n(6)),o=n(12),d=n(5),u=n(41),l=n(9),j={isLoading:!1,error:"",replacementError:!1,show:{},showImage:"",genres:[],summary:"",seasons:[],episodes:[]};function p(e){return e?e.length>700?e.replace(/(<([^>]+)>)/gi,"").substring(0,700)+"...":e.replace(/(<([^>]+)>)/gi,""):""}function b(e){var t=e.map((function(e){return e.season}));return t.filter((function(e,n){return t.indexOf(e)===n}))}function h(e,t){var n=t.findIndex((function(t){return t.season===e.season&&t.number===e.number}));return t[n]=e,t}var m=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_INITIATED":return Object(l.a)(Object(l.a)({},e),{},{error:"",isLoading:!0});case"GET_SHOW_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{error:"",isLoading:!1,show:t.payload,showImage:t.payload.image?t.payload.image.medium:"",genres:t.payload.genres,summary:p(t.payload.summary),seasons:b(t.payload._embedded.episodes),episodes:t.payload._embedded.episodes});case"GET_SHOW_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});case"GET_REPLACED_EPISODE_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{error:"",isLoading:!1,replacementError:!1,episodes:h(t.payload,e.episodes)});case"GET_REPLACED_EPISODE_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:"",isLoading:!1,replacementError:!0});default:return e}})),f=n(15),O=n.n(f),x="https://api.tvmaze.com";var g=n(4),y=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=Math.floor(55535*Math.random())+1,t="".concat(x,"/shows/").concat(e,"?embed=episodes");m.dispatch({type:"REQUEST_INITIATED"}),O.a.get(t).then((function(e){m.dispatch({type:"GET_SHOW_SUCCESS",payload:e.data})})).catch((function(e){m.dispatch({type:"GET_SHOW_ERROR",payload:e})}))}()}),[]),Object(g.jsxs)(d.BDiv,{w:"100",p:"3",mb:"1",bg:"dark",text:"white",display:"flex",justifyContent:"center",alignItems:"center",children:[Object(g.jsx)("h2",{style:{marginRight:"10em"},children:"Episode Switcher"}),Object(g.jsx)(d.Form,{w:"20",onSubmit:function(e){e.preventDefault(),function(e){var t="".concat(x,"/search/shows?q=").concat(e);m.dispatch({type:"REQUEST_INITIATED"}),O.a.get(t).then((function(e){return e.data[0].show.id})).then((function(e){var t="".concat(x,"/shows/").concat(e,"?embed=episodes");O.a.get(t).then((function(e){m.dispatch({type:"GET_SHOW_SUCCESS",payload:e.data})}))})).catch((function(e){m.dispatch({type:"GET_SHOW_ERROR",payload:e})}))}(n),c("")},children:Object(g.jsxs)(d.InputGroup,{children:[Object(g.jsx)(d.Form.Input,{type:"text",placeholder:"Enter a TV show",onChange:function(e){return c(e.target.value)},value:n}),Object(g.jsx)(d.InputGroup.Append,{children:Object(g.jsx)(d.Button,{type:"submit",secondary:!0,children:"Search"})})]})})]})},E=n(17),v=function(){var e=Object(a.b)((function(e){return e.seasons})),t=Object(a.b)((function(e){return e.episodes})),n=Object(r.useState)(1),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(r.useState)(1),l=Object(o.a)(u,2),j=l[0],p=l[1],b=Object(r.useState)(""),h=Object(o.a)(b,2),f=h[0],y=h[1];function E(e){e.preventDefault(),console.log(f,s,j),function(e,t,n){var r="".concat(x,"/singlesearch/shows?q=").concat(e,"&embed=episodes");m.dispatch({type:"REQUEST_INITIATED"}),O.a.get(r).then((function(e){m.dispatch({type:"GET_REPLACED_EPISODE_SUCCESS",payload:e.data._embedded.episodes.filter((function(e){return e.season===t&&e.number===n}))[0]})})).catch((function(e){m.dispatch({type:"GET_REPLACED_EPISODE_ERROR"})}))}(f,parseInt(s),parseInt(j))}return Object(g.jsxs)(d.BDiv,{w:"80",mt:"5",mb:"4",display:"flex",justifyContent:"between",alignItems:"center",children:["Replace",Object(g.jsxs)(d.Form,{display:"flex",mb:"0",children:[Object(g.jsx)(d.Form.Group,{mr:"4",mb:"0",children:Object(g.jsx)(d.Form.Select,{onChange:function(e){return function(e){console.log(e.target.value),i(parseInt(e.target.value))}(e)},children:e.map((function(e,t){return Object(g.jsxs)("option",{value:t+1,children:["Season ",e]},t)}))})}),Object(g.jsx)(d.Form.Group,{mb:"0",children:Object(g.jsx)(d.Form.Select,{onChange:function(e){return function(e){p(e.target.value)}(e)},children:t.filter((function(e){return e.season===parseInt(s)})).map((function(e,t){return Object(g.jsxs)("option",{value:t+1,children:["Episode ",e.number]},t)}))})})]}),"with",Object(g.jsx)(d.Form,{w:"50",display:"flex",onSubmit:function(e){return E(e)},children:Object(g.jsxs)(d.InputGroup,{children:[Object(g.jsx)(d.Form.Input,{mr:"4",type:"text",onChange:function(e){return y(e.target.value)},value:f}),Object(g.jsx)(d.Button,{px:"5",type:"submit",dark:!0,children:"Replace"})]})})]})},S=function(){var e=Object(a.b)((function(e){return e.replacementError})),t=Object(a.b)((function(e){return e.seasons})),n=Object(a.b)((function(e){return e.episodes}));function r(e){return E(e).format("MMM D, YYYY")}return Object(g.jsxs)(d.BDiv,{children:[e?Object(g.jsx)(d.Alert,{danger:!0,children:"There is no matching record for the episode, season and show provided."}):"",t.map((function(e,t){return Object(g.jsxs)(d.BDiv,{value:t+1,children:[Object(g.jsxs)("h3",{children:["Season ",e]}),Object(g.jsx)(d.BDiv,{display:"flex",pb:"2",style:{borderBottom:"1px solid #dee2e6"},children:Object(g.jsxs)(d.BP,{text:"secondary",display:"flex",mb:"0",children:[n&&n.filter((function(e){return e.season===t+1})).length,Object(g.jsx)(d.BSpan,{mx:"1",children:" Episodes"}),n&&n.filter((function(e){return e.season===t+1}))[0]&&n.filter((function(e){return e.season===t+1}))[0].airdate?" | Aired on ".concat(r(n.filter((function(e){return e.season===t+1}))[0].airdate)):""]})}),n.filter((function(e){return e.season===t+1})).map((function(e,n){return Object(g.jsxs)(d.BDiv,{value:n+1,display:"flex",my:"4",children:[e.image&&e.image.medium?Object(g.jsx)(d.BImg,{src:e.image.medium}):Object(g.jsx)(d.BDiv,{className:"text-white bg-secondary",style:{height:"150px",width:"250px",fontSize:"30px"},display:"flex",justifyContent:"center",alignItems:"center",children:Object(g.jsx)(d.BP,{children:"NA"})}),Object(g.jsxs)(d.BDiv,{ml:"4",children:[Object(g.jsxs)("h5",{children:["Episode ",e.number]}),Object(g.jsx)(d.BDiv,{display:"flex",children:Object(g.jsxs)(d.BP,{text:"secondary",children:["Season ".concat(t+1," | "),"Episode ",e.number,e.airdate?" | ".concat(r(e.airdate)):""]})}),Object(g.jsx)(d.BP,{mb:"0",style:{fontSize:"15px"},children:e.summary?(c=e.summary,c?c.length>270?c.replace(/(<([^>]+)>)/gi,"").substring(0,270)+"...":c.replace(/(<([^>]+)>)/gi,""):""):""})]})]},n);var c}))]},t)}))]})},I=function(){var e,t=Object(a.b)((function(e){return e.isLoading})),n=Object(a.b)((function(e){return e.error})),r=Object(a.b)((function(e){return e.show})),c=Object(a.b)((function(e){return e.showImage})),s=Object(a.b)((function(e){return e.genres})),i=Object(a.b)((function(e){return e.summary}));return Object(g.jsxs)(d.BDiv,{children:[n?Object(g.jsx)(d.Alert,{danger:!0,children:"Error loading show information."}):"",t?"":Object(g.jsxs)(d.BDiv,{className:"MainContainer",w:"50",m:"auto",children:[Object(g.jsxs)(d.BDiv,{display:"flex",justifyContent:"start",style:{marginTop:"50px",height:"300px",overflow:"hidden"},w:"100",children:[c?Object(g.jsx)(d.BImg,{src:c,alt:"na",styles:{maxWidth:"25%"}}):Object(g.jsx)(d.BDiv,{className:"text-white bg-secondary",style:{height:"100%",width:"100%",fontSize:"30px"},display:"flex",justifyContent:"center",alignItems:"center",children:"NA"}),Object(g.jsxs)(d.BDiv,{style:{marginLeft:"20px"},children:[Object(g.jsx)("h2",{children:r.name}),Object(g.jsx)(d.BDiv,{display:"flex",py:"1",children:Object(g.jsxs)(d.BP,{text:"secondary",children:[s.join(", "),s.length&&r.premiered?" | ":"",r.premiered?"Premiered on ".concat((e=r.premiered,E(e).format("MMM D, YYYY"))):""]})}),Object(g.jsx)(d.BDiv,{mt:"3",children:i})]})]}),Object(g.jsx)(v,{}),Object(g.jsx)(S,{})]})]})};var w=function(){return Object(g.jsx)(a.a,{store:m,children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(y,{}),Object(g.jsx)(I,{})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),D()},46:function(e,t,n){}},[[257,1,2]]]);
//# sourceMappingURL=main.19fa4232.chunk.js.map