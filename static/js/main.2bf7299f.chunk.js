(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(39)},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(2),c=t.n(s),o=t(6),l=t(13),i=t.n(l),p=t(17),u=t(5),m=t(3),h=t(18),v={items:[],sort:"popularity",year:"2019",page:"1",total_pages:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_RESULT":return Object(u.a)({},e,{items:a.result.results,total_pages:a.result.total_pages});case"CHANGE_SORT":return Object(u.a)({},e,{sort:a.valueSort});case"CHANGE_YEAR":return Object(u.a)({},e,{year:a.valueYear});case"CHANGE_PAGE":return Object(u.a)({},e,{page:a.page});default:return e}};var g=Object(m.c)(f,v,Object(m.a)(h.a)),E=t(19),d=t(20),b=t(22),y=t(21),N=t(23),_=t(14),O=function(e){function a(){var e,t;Object(E.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(N.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getMoves(this.props.sort,this.props.year,this.props.page)}},{key:"componentDidUpdate",value:function(e){this.props.sort===e.sort&&this.props.year===e.year&&this.props.page===e.page||this.props.getMoves(this.props.sort,this.props.year,this.props.page)}},{key:"render",value:function(){for(var e=this,a=[],t=(new Date).getFullYear(),r=2009;r<=t;r++)a.push({value:r,label:r});var s=this.props.total_pages,c=[],o=this.props.page;if(o<6){for(var l=1;l<=7;l++)c.push(l);c.push("...",s-1,s)}else if(o<=7){for(var i=1;i<=10;i++)c.push(i);c.push("...",s-1,s)}else if(o>=8&&o<=s-7){c.push(1,2,"...");for(var p=o-3;p<=o+3;p++)c.push(p);c.push("...",s-1,s)}else if(o===s-6){c.push(1,2,"...");for(var u=s-10;u<=s;u++)c.push(u)}else if(o>s-6){c.push(1,2,"...");for(var m=s-6;m<=s;m++)c.push(m)}return n.a.createElement("div",{className:"wrapper"},n.a.createElement("main",{className:"main"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"header-inner"},n.a.createElement("a",{href:"#",className:"header-logo"},"LOGO")))),n.a.createElement("section",{className:"films"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"films-inner"},n.a.createElement("nav",{className:"films-navigation"},n.a.createElement("div",{className:"films-sort"},n.a.createElement("h3",{className:"sort-title"},"Sort by"),n.a.createElement(_.a,{className:"films-sort-select",onChange:function(a){e.props.changeSort(a.value)},options:[{value:"release_date",label:"release date"},{value:"popularity",label:"popularity"},{value:"revenue",label:"revenue"},{value:"vote_average",label:"vote average"}]})),n.a.createElement("div",{className:"films-sort"},n.a.createElement("h3",{className:"sort-title"},"Year"),n.a.createElement(_.a,{onChange:function(a){e.props.changeYear(a.value)},options:a}))),n.a.createElement("ul",{className:"films-list"},this.props.items.map(function(e,a){return n.a.createElement("li",{className:"films-list-item",key:a},n.a.createElement("p",null,e.title),n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:"img"}))})),n.a.createElement("ul",{className:"pagination"},c.map(function(a,t){return n.a.createElement("li",{className:"pagination-item",key:t},n.a.createElement("button",{className:"pagination-number",type:"button",onClick:function(){"..."!==a&&e.props.changePage(a)}},a))})))))),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"footer-inner"},"footer"))))}}]),a}(r.Component),j={getMoves:function(e,a,t){return function(){var r=Object(p.a)(i.a.mark(function r(n){var s,c,o;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s="".concat("https://api.themoviedb.org/3/","discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=").concat(e,".desc&include_adult=false&include_video=false&page=").concat(t,"&year=").concat(a),r.next=4,fetch(s);case 4:return c=r.sent,r.next=7,c.json();case 7:o=r.sent,n({type:"ADD_RESULT",result:o}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log("ERROR!");case 14:case"end":return r.stop()}},r,null,[[0,11]])}));return function(e){return r.apply(this,arguments)}}()},data:f,changeSort:function(e){return{type:"CHANGE_SORT",valueSort:e}},changeYear:function(e){return{type:"CHANGE_YEAR",valueYear:e}},changePage:function(e){return{type:"CHANGE_PAGE",page:e}}},w=Object(o.b)(function(e){return{items:e.items,sort:e.sort,year:e.year,page:e.page,total_pages:e.total_pages}},j)(O);t(36),t(37),t(38);c.a.render(n.a.createElement(o.a,{store:g},n.a.createElement(w,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2bf7299f.chunk.js.map