(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(2),l=c(1),o=c.n(l);c(14),c(15);function i(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var d,r=c(9);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(d||(d={}));var j=c(8),b=c.n(j),u=c(0),h={global:d.All,query:""},O={shownTodo:null,setShownTodo:function(){},filter:h,setFilter:function(){}},m=o.a.createContext(O),x=function(e){var t=e.children,c=Object(l.useState)(null),s=Object(n.a)(c,2),a=s[0],o=s[1],i=Object(l.useState)(h),d=Object(n.a)(i,2),r=d[0],j=d[1];return Object(u.jsx)(m.Provider,{value:{shownTodo:a,setShownTodo:o,filter:r,setFilter:j},children:t})},f=function(e){var t=e.todo,c=Object(l.useContext)(m),s=c.shownTodo,a=c.setShownTodo,n=(null===s||void 0===s?void 0:s.id)===t.id;return Object(u.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":n}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:t.id}),Object(u.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far ".concat(n?"fa-eye-slash":"fa-eye")})})})})]})},v=function(e){var t=e.todos;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(f,{todo:e},e.id)}))})]})},p=c(3),N=function(){var e=Object(l.useContext)(m),t=e.filter,c=e.setFilter;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t.global,onChange:function(e){c(Object(p.a)(Object(p.a)({},t),{},{global:e.target.value}))},children:[Object(u.jsx)("option",{value:d.All,children:"All"}),Object(u.jsx)("option",{value:d.Active,children:"Active"}),Object(u.jsx)("option",{value:d.Completed,children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){c(Object(p.a)(Object(p.a)({},t),{},{query:e.target.value}))}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(Object(p.a)(Object(p.a)({},t),{},{query:""}))}})})]})]})},y=(c(17),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),g=function(){var e=Object(l.useContext)(m),t=e.shownTodo,c=e.setShownTodo,s=Object(l.useState)(!1),a=Object(n.a)(s,2),o=a[0],d=a[1],r=Object(l.useState)(null),j=Object(n.a)(r,2),b=j[0],h=j[1];Object(l.useEffect)((function(){var e;t&&(d(!0),(e=t.userId,i("/users/".concat(e))).then(h).finally((function(){return d(!1)})))}),[t]);return Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),o?Object(u.jsx)(y,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:null===b||void 0===b?void 0:b.email,children:null===b||void 0===b?void 0:b.name})]})]})]})]})},w=function(){var e=Object(l.useContext)(m),t=e.shownTodo,c=e.filter,s=Object(l.useState)([]),a=Object(n.a)(s,2),o=a[0],j=a[1],b=Object(l.useState)(!1),h=Object(n.a)(b,2),O=h[0],x=h[1];Object(l.useEffect)((function(){x(!0),i("/todos").then(j).finally((function(){return x(!1)}))}),[]);var f=function(e,t){var c=[];switch(t.global){case d.All:c=Object(r.a)(e);break;case d.Active:c=e.filter((function(e){return!e.completed}));break;case d.Completed:c=e.filter((function(e){return e.completed}));break;default:throw new Error("Unknown filter!")}if(t.query){var s=t.query.toLowerCase();c=c.filter((function(e){return e.title.toLowerCase().includes(s)}))}return c}(o,c);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(N,{})}),Object(u.jsxs)("div",{className:"block",children:[O&&Object(u.jsx)(y,{}),Object(u.jsx)(v,{todos:f})]})]})})}),t&&Object(u.jsx)(g,{})]})};a.a.render(Object(u.jsx)(x,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ec6caf13.chunk.js.map