(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=(n(9),n(10),n(4)),i=(n(11),n(12),n(1)),d=n(0);var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),s=e.date.getFullYear();return Object(d.jsxs)("div",{className:"expense-date",children:[Object(d.jsx)("div",{className:"expense-date__month",children:t}),Object(d.jsx)("div",{className:"expense-date__year",children:s}),Object(d.jsx)("div",{className:"expense-date__day",children:n})]})};n(14);var l=function(e){var t="card "+e.className;return Object(d.jsx)("div",{className:t,children:e.children})};var o=function(e){var t=Object(i.useState)(e.title),n=Object(c.a)(t,2),s=n[0],a=n[1];return Object(d.jsxs)(l,{className:"expense-item",children:[Object(d.jsx)(r,{date:e.date}),Object(d.jsxs)("div",{className:"expense-item__description",children:[Object(d.jsx)("h2",{children:s}),Object(d.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(d.jsx)("button",{onClick:function(){a("updated")},children:"Change Title"})]})};var j=function(e){return Object(d.jsxs)(l,{className:"expenses",children:[Object(d.jsx)(o,{title:e.expenses[0].title,amount:e.expenses[0].amount,date:e.expenses[0].date}),Object(d.jsx)(o,{title:e.expenses[1].title,amount:e.expenses[1].amount,date:e.expenses[1].date}),Object(d.jsx)(o,{title:e.expenses[2].title,amount:e.expenses[2].amount,date:e.expenses[2].date}),Object(d.jsx)(o,{title:e.expenses[3].title,amount:e.expenses[3].amount,date:e.expenses[3].date})]})};var x=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Let's get started!"}),Object(d.jsx)(j,{expenses:e})]})};a.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5bb2e87e.chunk.js.map