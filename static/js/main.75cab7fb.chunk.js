(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n(7),s=n.n(c),a=(n(22),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))}),i=n(8),u=n(6),l=n(15),d=n(16),h=(n(28),n(2)),b=n(3),j=n(5),p=n(4),O="CHANGE_SEARCH_FIELD",f="REQUEST_ROBOTS_PENDING",g="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",x=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"bg-dark-gray dib br3 pa3 ma2 grow shadow-5",children:[Object(r.jsx)("img",{alt:"Ankit Mishra",width:"200",height:"200",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},y=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(x,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},m=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"Search Robots",onChange:t})})},C=(n(29),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"5000px"},children:e.children})}),R=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),Object(r.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.Component),S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(r.jsx)(R,{color:"red"})]})}}]),n}(o.Component),E=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h1",{children:" Loading "}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(S,{}),Object(r.jsx)(m,{searchChange:n}),Object(r.jsx)(C,{children:Object(r.jsx)(y,{robots:s})})]})}}]),n}(o.Component),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:O,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:f}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:g,payload:t})})).catch((function(t){return e({type:v,payload:t})}))}))}}}))(E),F={searchField:""},w={isPending:!1,robots:[],error:""},P=(n(30),Object(d.createLogger)(),Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case g:return Object.assign({},e,{robots:t.payload,isPending:!1});case v:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),L=Object(u.d)(P,Object(u.a)(l.a));s.a.render(Object(r.jsx)(i.a,{store:L,children:Object(r.jsx)(k,{})}),document.getElementById("root")),a()}},[[31,1,2]]]);
//# sourceMappingURL=main.75cab7fb.chunk.js.map