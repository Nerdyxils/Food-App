(this["webpackJsonpreact-one"]=this["webpackJsonpreact-one"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),i=n(3),a=n.n(i);n(10),n.p,n(11),n(12);var j=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{className:"header_name",children:Object(c.jsx)("h1",{children:"React Meals"})}),Object(c.jsxs)("div",{className:"nav_links",children:[Object(c.jsx)("a",{href:"",children:"Order"}),Object(c.jsx)("a",{href:"",children:"Home"}),Object(c.jsx)("a",{href:"",children:"Contact Us"})]})]})})},d=n(4);n(13),n(14);var l=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(s.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian").then((function(e){return e.json()})).then((function(e){r(e.meals)}))}),[]);var i=n.map((function(e){return Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("p",{children:e.strMeal}),Object(c.jsx)("img",{src:e.strMealThumb,alt:"Meal"}),Object(c.jsx)("p",{children:e.idMeal})]})}));return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"row mt-5",children:i})})};n(15);var o=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("p",{children:["Designed and Developed By ",Object(c.jsx)("br",{})," NerdyXils"]})})})};var h=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)(l,{}),Object(c.jsx)(o,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.d3312999.chunk.js.map