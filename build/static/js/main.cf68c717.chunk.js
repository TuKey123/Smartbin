(this.webpackJsonpsmartbin=this.webpackJsonpsmartbin||[]).push([[0],{14:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(7),c=n.n(s),r=(n(14),n(2)),l=n(3),h=n(5),o=n(4),j=n(8),d=n(1),b=function(t){Object(h.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={navItems:["Factory","Recycle","Distribution","Users"]},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar-expand-md navbar-light bg-white ",children:Object(d.jsx)("ul",{className:"navbar-nav justify-content-end",children:this.state.navItems.map((function(t){return Object(d.jsx)("li",{className:"nav-item px-2",children:Object(d.jsx)("a",{className:"nav-link ",href:"#",children:Object(d.jsxs)("div",{className:"col-xs-1 text-center",children:[Object(d.jsx)("img",{src:"/image/"+t+".png",width:"30",height:"30",alt:""}),Object(d.jsx)("p",{children:t})]})})},t.length)}))})})}}]),n}(i.Component),p=function(t){Object(h.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.onClick;return Object(d.jsxs)("button",{id:"bin",onClick:function(){return e(t.props.bin.id)},children:[this.props.bin.name,Object(d.jsx)("img",{src:"./image/bin.png",width:"30px",height:"30px",alt:"",style:{float:"right",position:"relative"}}),Object(d.jsx)("p",{style:{fontSize:"7px"},children:this.props.bin.location})]})}}]),n}(i.Component),u=function(t){Object(h.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={divStyle:{position:"relative",float:"left",textAlign:"center",width:"50%"},imgStyle:{position:"relative",float:"right"}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.trash;return Object(d.jsxs)("button",{className:"trash",children:[Object(d.jsx)("img",{src:"./image/"+t[0]+".png",width:"50px",height:"50px",alt:"",style:this.state.imgStyle}),Object(d.jsx)("div",{style:this.state.divStyle,children:t[1]})]})}}]),n}(i.Component),v=function(t){Object(h.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).clickHandler=function(t){var e=i.state.bins.filter((function(e){return e.id===t}));i.setState({displayBin:e[0]})},i.state={user:[],bins:[],displayBin:{id:-1,name:"",location:"",containers:[{id:0,trash:0,space:0},{id:0,trash:0,space:0},{id:0,trash:0,space:0}],trashes:[["bottle",100],["plasticBag",100],["can",100]]}},i.fetchData(),i}return Object(l.a)(n,[{key:"fetchData",value:function(){var t=this;fetch("/bins").then((function(t){return t.json()})).then((function(e){return t.setState({bins:e})}))}},{key:"render",value:function(){var t=this;return 0!==this.state.bins.length&&-1===this.state.displayBin.id&&(this.state.displayBin=this.state.bins[0]),Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"grid",id:"col1",children:Object(d.jsx)("div",{id:"bins",children:this.state.bins.map((function(e){return Object(d.jsx)(p,{bin:e,onClick:t.clickHandler})}))})}),Object(d.jsx)("div",{className:"grid",id:"col2",children:Object(d.jsxs)("div",{id:"containers",children:[Object(d.jsx)("div",{className:"title",children:"Container"}),Object(d.jsx)("div",{className:"piechart",children:this.state.displayBin.containers.map((function(t){return Object(d.jsx)(j.a,{style:{marginTop:"10px"},width:"310px",height:"300px",chartType:"PieChart",data:[["",""],["Trash",t.trash],["Space",t.space]],options:{title:"Container "+t.id,pieHole:.8,colors:["#F6546A","#20B2AA"]}})}))}),Object(d.jsx)("div",{className:"title",children:"Trash"}),Object(d.jsx)("div",{className:"trashes",children:this.state.displayBin.trashes.map((function(t){return Object(d.jsx)(u,{trash:t})}))})]})})]})]})}}]),n}(i.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};n(19);c.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.cf68c717.chunk.js.map