(this["webpackJsonpmonster-robot"]=this["webpackJsonpmonster-robot"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(10),n(1)),s=n(4),i=(n(11),function(e){var t=e.id,n=e.name,a=(e.username,e.email);return r.a.createElement("div",{className:"card-container bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t,"?set=set3&size=200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}),u=function(e){var t=e.robots;return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(i,{key:t,id:e.id,name:e.name,username:e.username,email:e.email})})))},m=function(e){var t=e.onSearchChange;return console.log(t),r.a.createElement("div",{className:"p2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},h=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},d=function(e){console.log(e.children);try{return e.children}catch(t){return console.log(t),r.a.createElement("h1",null,"Something has went wrong")}},g=(n(12),function(){var e=Object(a.useState)({robotFriends:[],searchField:""}),t=Object(s.a)(e,2),n=t[0],o=t[1],c=n.robotFriends,i=n.searchField,g=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return o({robotFriends:e,searchField:""})}))};Object(a.useEffect)((function(){g(),console.log("I ran")}),[]);return console.log(c),r.a.createElement("div",{className:"App tc"},r.a.createElement("h1",{className:"f1"},"Robot Friends"),0===c.length?r.a.createElement("h1",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement(m,{onSearchChange:function(e){if(e.preventDefault(),""!==e.target.value){var t=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));o(Object(l.a)(Object(l.a)({},n),{},{robotFriends:t,searchField:e.target.value}))}else g()}}),r.a.createElement(h,null,r.a.createElement(d,null,r.a.createElement(u,{robots:c})))))});n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.ac0ee610.chunk.js.map