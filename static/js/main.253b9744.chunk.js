(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),c=(n(14),n(4)),s=n(5),d=n(7),l=n(6),u=n(1),h=n(8);n(15);var k=function(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:e.task.done,onChange:function(){return e.handleChange(e.task.id)}}),o.a.createElement("p",{style:e.task.done?{fontStyle:"italic",color:"lightslategrey",textDecoration:"line-through"}:null},e.task.taskTitle))},m=[{id:1,done:!0,taskTitle:"Code furiously"},{id:2,done:!1,taskTitle:"Do user study"},{id:3,done:!0,taskTitle:"Write paper"},{id:4,done:!1,taskTitle:"Have a life!!"}],p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(l.a)(t).call(this))).state={todos:m},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e&&(t.done=!t.done),t})}})}},{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t){return o.a.createElement(k,{key:t.id,task:t,handleChange:e.handleChange})});return o.a.createElement("div",{className:"todo-list"},t)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.253b9744.chunk.js.map