(this.webpackJsonpdelivary_person_aaha_pwa=this.webpackJsonpdelivary_person_aaha_pwa||[]).push([[0],{103:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),o=a.n(r),c=a(11),i=a.n(c),l=(a(103),a(67)),s=a(68),d=a(81),j=a(80),u=a(61),b=a.n(u),h=a(69),p=a(18),m=a(177),O=a(162),x=a(160),g=a(174),f=a(157),v=a(175),y=a(73),S=a.n(y),k=a(26),w=a(158),C=a(159),B=a(12),I=a(41),_=I.apiBaseUrl;function T(){return Object(n.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(f.a,{color:"inherit",href:"",children:"Aaha Pizza"})," ",(new Date).getFullYear(),"."]})}var N=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function A(){var e=N(),t=Object(r.useState)(),a=Object(p.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(),l=Object(p.a)(i,2),s=l[0],d=l[1],j=Object(B.f)(),u=function(){var e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"},f=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("device_token")||null,a=u()||null,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:o,password:s,device_token:t,device_type:a})},e.next=5,fetch(_+"valet/login",n);case 5:return r=e.sent,e.next=8,r.json();case 8:200===(c=e.sent).code&&0===c.error&&(localStorage.setItem("authToken",c.data.token),localStorage.setItem("phone",c.data.phone),localStorage.setItem("name",c.data.name),localStorage.setItem("updated_at",c.data.updated_at),localStorage.setItem("isAuth",!0),j.push("/"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(x.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(m.a,{className:e.avatar,children:Object(n.jsx)(S.a,{})}),Object(n.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"mobile",label:"Mobile Number",name:"mobile",autoComplete:"number",type:"number",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return d(e.target.value)},autoComplete:"current-password"}),Object(n.jsx)(O.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:f,children:"Sign In"})]})]}),Object(n.jsx)(v.a,{mt:8,children:Object(n.jsx)(T,{})})]})}var M=a(169),z=a(172),D=a(167),F=a(173),P=a(77),E=a.n(P),W=a(78),J=a.n(W),L=a(79),U=a(171),H=a(50),K=a(82),q=a(176),G=a(170),R=a(163),V=a(164),Y=a(165),Q=a(166),X=a(74),Z=a.n(X),$=a(76),ee=a.n($),te=a(75),ae=a.n(te),ne=I.apiBaseUrl,re="Bearer "+localStorage.getItem("authToken"),oe=Object(w.a)((function(e){return{root:{maxWidth:345,marginBottom:"1em"}}}));function ce(){var e=oe(),t=(Object(B.f)(),Object(r.useReducer)((function(e){return e+1}),0)),a=Object(p.a)(t,2),o=(a[0],a[1],Object(r.useState)([])),c=Object(p.a)(o,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){fetch(ne+"valet/to-be-delivered",{method:"get",headers:new Headers({Authorization:re})}).then((function(e){return e.json()})).then((function(e){200===e.code&&0===e.error?l(e.data):alert("Turn Mobile data on and try again!")}))}),[]),console.log(i),i.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsxs)(R.a,{className:e.root,children:[Object(n.jsx)(V.a,{title:t.order_id,subheader:"Distance:- "+t.distance_in_km+"KM"}),Object(n.jsxs)(Y.a,{children:[Object(n.jsxs)(k.a,{variant:"body",color:"textPrimary",component:"h4",children:["Name:- ",t.user.first_name+" "+t.user.last_name]}),Object(n.jsxs)(k.a,{variant:"body",color:"textSecondary",component:"h4",children:["Address:- ",t.address]})]}),Object(n.jsxs)(Q.a,{disableSpacing:!0,children:[Object(n.jsx)("a",{href:"https://maps.google.com?saddr=Current+Location&daddr="+t.lat+","+t.lng,children:Object(n.jsx)(D.a,{"aria-label":"directions on map",children:Object(n.jsx)(Z.a,{})})}),Object(n.jsx)("a",{href:"tel:"+t.user.phone,children:Object(n.jsx)(D.a,{"aria-label":"call client",children:Object(n.jsx)(ae.a,{})})}),Object(n.jsx)(D.a,{onClick:function(){return e=t._id,void(window.confirm("Kya aap ne order deliver kar diya hai?")&&fetch(ne+"valet/order-complete/"+e,{method:"post",headers:new Headers({Authorization:re})}).then((function(e){return e.json()})).then((function(e){200===e.code&&0===e.error?(alert(e.message),window.location.reload()):alert("Something went wrong! Ask Bill Desk to mark order as deliverd")})));var e},children:Object(n.jsx)(ee.a,{})})]})]})})}))}var ie=a(114),le=a(168),se=a(161),de=I.apiBaseUrl,je="Bearer "+localStorage.getItem("authToken");function ue(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)([]),i=Object(p.a)(c,2),l=i[0],s=i[1];Object(r.useEffect)((function(){fetch(de+"valet/delivered",{method:"get",headers:new Headers({Authorization:je})}).then((function(e){return e.json()})).then((function(e){200===e.code&&0===e.error?(o(e.data),s(e.total)):alert("Turn Mobile data on and try again!")}))}),[]);var d=a.map((function(e){return Object(n.jsx)(ie.a,{children:Object(n.jsx)(le.a,{primary:e.order_id})})}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)(k.a,{component:"h2",children:["Total ",l]}),Object(n.jsx)(se.a,{children:d})]})}function be(e){var t=e.children,a=e.value,r=e.index,o=Object(K.a)(e,["children","value","index"]),c=Object(B.f)();return localStorage.getItem(!1)&&c.push("login"),Object(n.jsx)("div",Object(H.a)(Object(H.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o),{},{children:a===r&&Object(n.jsx)(v.a,{p:3,children:Object(n.jsx)(k.a,{children:t})})}))}function he(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var pe=Object(w.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function me(){var e=pe(),t=o.a.useState(0),a=Object(p.a)(t,2),r=a[0],c=a[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(M.a,{position:"static",children:Object(n.jsxs)(q.a,{value:r,onChange:function(e,t){c(t)},"aria-label":"simple tabs example",children:[Object(n.jsx)(G.a,Object(H.a)({label:"To Deliver"},he(0))),Object(n.jsx)(G.a,Object(H.a)({label:"Delivered"},he(1)))]})}),Object(n.jsx)(be,{value:r,index:0,children:Object(n.jsx)(ce,{})}),Object(n.jsx)(be,{value:r,index:1,children:Object(n.jsx)(ue,{})})]})}var Oe=Object(w.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function xe(){var e=Oe(),t=o.a.useState(null),a=Object(p.a)(t,2),r=a[0],c=a[1],i=Object(B.f)();return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(x.a,{}),Object(n.jsx)(me,{}),Object(n.jsx)(L.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:function(){c(null)},children:Object(n.jsx)(U.a,{onClick:function(){localStorage.setItem("name",""),localStorage.setItem("phone",""),localStorage.setItem("authToken",""),localStorage.setItem("isAuth",!1),i.push("login")},children:"Logout"})}),Object(n.jsx)(M.a,{position:"fixed",color:"primary",className:e.appBar,children:Object(n.jsxs)(z.a,{children:[Object(n.jsx)(F.a,{onClick:function(){return window.location.reload()},color:"secondary","aria-label":"add",className:e.fabButton,children:Object(n.jsx)(E.a,{})}),Object(n.jsx)("div",{className:e.grow}),Object(n.jsx)(D.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},edge:"end",color:"inherit",children:Object(n.jsx)(J.a,{})})]})})]})}var ge=a(39),fe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(n.jsx)(ge.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(B.c,{children:[Object(n.jsx)(B.a,{exact:!0,path:"/",children:Object(n.jsx)(xe,{})}),Object(n.jsx)(B.a,{path:"/login",children:Object(n.jsx)(A,{})})]})})})}}]),a}(r.Component),ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(fe,{})}),document.getElementById("root")),ve()},41:function(e){e.exports=JSON.parse('{"apiBaseUrl":"http://ec2-15-206-254-253.ap-south-1.compute.amazonaws.com:8000/api/"}')}},[[111,1,2]]]);
//# sourceMappingURL=main.79d87fcc.chunk.js.map