(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(39)},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(2),o=t.n(s),c=t(6),l=t(13),i=t.n(l),p=t(17),u=t(5),m=t(3),g=t(18),h={items:[],sort:"popularity",year:"2019",page:1,totalPages:"",active:!0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_RESULT":return Object(u.a)({},e,{items:a.result.results,totalPages:a.result.total_pages});case"CHANGE_SORT":return Object(u.a)({},e,{sort:a.valueSort});case"CHANGE_YEAR":return Object(u.a)({},e,{year:a.valueYear});case"CHANGE_PAGE":return Object(u.a)({},e,{page:a.page});default:return e}};var f=Object(m.c)(v,h,Object(m.a)(g.a)),E=t(19),d=t(20),b=t(22),y=t(21),N=t(23),O=t(14),_=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(b.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(N.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getMoves(this.props.sort,this.props.year,this.props.page)}},{key:"componentDidUpdate",value:function(e){this.props.sort===e.sort&&this.props.year===e.year||this.props.getMoves(this.props.sort,this.props.year,this.props.changePage(1)),this.props.page!==e.page&&this.props.getMoves(this.props.sort,this.props.year,this.props.page),window.scrollTo(0,0)}},{key:"render",value:function(){for(var e=this,a=[],t=(new Date).getFullYear(),n=2009;n<=t;n++)a.push({value:n,label:n});var s=this.props.totalPages,o=[],c=this.props.page,l=c+1,i=c-1;if(c<6){for(var p=1;p<=7;p++)o.push(p);o.push("...",s-1,s)}else if(c<=7){for(var u=1;u<=10;u++)o.push(u);o.push("...",s-1,s)}else if(c>=8&&c<=s-7){o.push(1,2,"...");for(var m=c-3;m<=c+3;m++)o.push(m);o.push("...",s-1,s)}else if(c===s-6){o.push(1,2,"...");for(var g=s-10;g<=s;g++)o.push(g)}else if(c>s-6){o.push(1,2,"...");for(var h=s-6;h<=s;h++)o.push(h)}return r.a.createElement("div",{className:"wrapper"},r.a.createElement("main",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header-inner"},r.a.createElement("a",{href:"/",className:"header-logo"},"LOGO")))),r.a.createElement("section",{className:"films"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"films-inner"},r.a.createElement("nav",{className:"films-navigation"},r.a.createElement("div",{className:"films-sort"},r.a.createElement("h3",{className:"sort-title"},"Sort by"),r.a.createElement(O.a,{className:"films-sort-select",onChange:function(a){e.props.changeSort(a.value)},options:[{value:"release_date",label:"release date"},{value:"popularity",label:"popularity"},{value:"revenue",label:"revenue"},{value:"vote_average",label:"vote average"}]})),r.a.createElement("div",{className:"films-sort"},r.a.createElement("h3",{className:"sort-title"},"Year"),r.a.createElement(O.a,{onChange:function(a){e.props.changeYear(a.value)},options:a}))),r.a.createElement("ul",{className:"films-list"},this.props.items.map(function(e,a){return r.a.createElement("li",{className:"films-list-item",key:a},r.a.createElement("p",null,e.title),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:"img"}))})),r.a.createElement("ul",{className:"pagination"},c>1?r.a.createElement("li",{className:"pagination-item"},r.a.createElement("button",{className:"pagination-number",type:"button",title:i,onClick:function(){e.props.changePage(i)}},"\u21d0")):null,o.map(function(a,t){return"..."!==a?r.a.createElement("li",{className:"pagination-item",key:t},r.a.createElement("button",{className:e.props.page===a?"pagination-number pagination-number-active":"pagination-number",type:"button",onClick:function(){e.props.changePage(a)}},a)):r.a.createElement("span",null,a)}),c>=1&&c<s-1?r.a.createElement("li",{className:"pagination-item"},r.a.createElement("button",{className:"pagination-number",type:"button",title:l,onClick:function(){e.props.changePage(l)}},"\u21d2")):null))))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer-inner"},"footer"))))}}]),a}(n.Component),w={getMoves:function(e,a,t){return function(){var n=Object(p.a)(i.a.mark(function n(r){var s,o,c;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s="".concat("https://api.themoviedb.org/3/","discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=").concat(e,".desc&include_adult=false&include_video=false&page=").concat(t,"&year=").concat(a),n.next=4,fetch(s);case 4:return o=n.sent,n.next=7,o.json();case 7:c=n.sent,r({type:"ADD_RESULT",result:c}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("ERROR!");case 14:case"end":return n.stop()}},n,null,[[0,11]])}));return function(e){return n.apply(this,arguments)}}()},data:v,changeSort:function(e){return{type:"CHANGE_SORT",valueSort:e}},changeYear:function(e){return{type:"CHANGE_YEAR",valueYear:e}},changePage:function(e){return{type:"CHANGE_PAGE",page:e}}},j=Object(c.b)(function(e){return{items:e.items,sort:e.sort,year:e.year,page:e.page,totalPages:e.totalPages}},w)(_);t(36),t(37),t(38);o.a.render(r.a.createElement(c.a,{store:f},r.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c6f35036.chunk.js.map