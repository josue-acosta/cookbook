(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{175:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),o=c(25),i=c.n(o),s=(c(83),c(16)),l=c(4),h=c(18),j=c.p+"static/media/logo.103b5fa1.svg";c(49);var u=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("strong",{children:"PUBLIC"}),Object(n.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(n.jsx)("p",{children:"Welcome to the Home page"}),Object(n.jsx)(s.Link,{style:{color:"white"},to:"/home",children:"Home Page"}),Object(n.jsx)(s.Link,{style:{color:"white"},to:"/protected",children:"Protected Page"})]})})},d=c(15),p=c.n(d),b=c(27),O=c(71),f=c(28),m=c(73),x=c(72),g=c(197),v=function(e){Object(m.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={authenticated:null},e.checkAuthentication=Object(b.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.authState.isAuthenticated;case 2:(c=t.sent)!==e.state.authenticated&&e.setState({authenticated:c});case 4:case"end":return t.stop()}}),t)}))),e.componentDidMount=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.checkAuthentication();case 1:case"end":return t.stop()}}),t)}))),e.login=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.authService.login("/home");case 1:case"end":return t.stop()}}),t)}))),e}return Object(f.a)(c,[{key:"render",value:function(){return this.state.authenticated?Object(n.jsx)(l.c,{to:"/home"}):Object(n.jsx)("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(n.jsx)(g.a,{variant:"contained",color:"primary",onClick:this.login,children:"Login with Okta"})})}}]),c}(a.Component),k=Object(h.withOktaAuth)(v),w=c(42),y=c(194),A=c(198),C=c(195),L=c(196),P=Object(y.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));var S=function(){var e=P(),t=Object(a.useState)(0),c=Object(w.a)(t,2),r=c[0],o=c[1],i=Object(h.useOktaAuth)(),l=i.authService,u=(i.authState,function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.logout("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){fetch("/api/time").then((function(e){return e.json()})).then((function(e){o(e.time)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(A.a,{position:"static",children:Object(n.jsxs)(C.a,{children:[Object(n.jsx)(L.a,{variant:"h6",className:e.title,children:"News"}),Object(n.jsx)(g.a,{color:"inherit",onClick:u,children:"Logout"})]})})}),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("strong",{children:"PROTECTED"}),Object(n.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(n.jsxs)("p",{children:["It's' ",r,"."]}),Object(n.jsx)(s.Link,{style:{color:"white"},to:"/home",children:"Home Page"}),Object(n.jsx)(s.Link,{style:{color:"white"},to:"/protected",children:"Protected Page"})]})})]})};var N=function(){return Object(n.jsx)(s.BrowserRouter,{children:Object(n.jsx)(h.Security,{issuer:"https://dev-8580715.okta.com/oauth2/default",client_id:"0oaet93haDsYEzWIm5d5",redirect_uri:"http://localhost:8080/implicit/callback",scope:["openid","profile","email"],children:Object(n.jsxs)(l.g,{children:[Object(n.jsx)(l.d,{exact:!0,path:"/",component:k}),Object(n.jsx)(l.d,{path:"/implicit/callback",component:h.LoginCallback}),Object(n.jsx)(l.d,{path:"/home",component:u}),Object(n.jsx)(h.SecureRoute,{path:"/protected",component:S})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,200)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),I()},49:function(e,t,c){},83:function(e,t,c){}},[[175,1,2]]]);
//# sourceMappingURL=main.fac5ee55.chunk.js.map