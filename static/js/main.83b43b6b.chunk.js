(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(7),o=a(8),l=a(11),u=a(9),i=a(12),s=a(245),_=a(38),d=function(e,t){var a=performance.now();return{result:e(t),performance:performance.now()-a}},p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,result:"-",performance:"-"},a._handleOnCLick=function(){var e=a.state.data,t=d(a.props.code,e),n=t.result,r=t.performance;a.setState({result:n,performance:r})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.dataPath).then(function(e){return e.text()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.performance;return r.a.createElement("div",null,r.a.createElement("p",null,"Exercise ",this.props.name),r.a.createElement("p",null,"Code:"),r.a.createElement(s.a,{language:"javascript",style:_.coy},this.props.code.toString()),r.a.createElement("br",null),r.a.createElement("button",{onClick:this._handleOnCLick},"run"),r.a.createElement("p",null,"Results: ",t),r.a.createElement("p",null,"Performance: ",a," milliseconds"))}}]),t}(n.Component),m=function(e,t){return r.a.createElement(p,Object.assign({key:"".concat(t)},e))};t.a=function(e){var t=e.day,a=e.exercises;return r.a.createElement("div",null,r.a.createElement("p",null,"Day ",t),a.map(m))}},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=a(7),u=a(8),i=a(11),s=a(9),_=a(12),d=a(244),p=a(246),m=a(247),f=a(34),E=a(40),v=a(13),h={day:"02",exercises:[{name:"01",dataPath:"./data/data02.txt",code:function(e){var t=e.split("\n").map(function(e){for(var t={},a=0;a<e.length;a++){var n=e[a];void 0===t[n]?t[n]=1:t[n]+=1}return Object(E.a)(new Set(Object.values(t)))}),a={},n=t.reduce(function(e,t){var n=e;return t.forEach(function(e){var t="test".concat(e);void 0===n[t]?n[t]=1:n[t]+=1}),a},a);return delete n.test1,Object.values(n).reduce(function(e,t){return e*t},1)}},{name:"02",dataPath:"./data/data02.txt",code:function(e){for(var t=function(e,t){for(var a=e.split(""),n=t.split(""),r=0,c=0;c<a.length;c++)if(a[c]!==n[c]&&(r+=1)>2)return{count:2};return{count:r,e1:a,e2:n}},a=function(e,t){for(var a=[],n=0;n<e.length;n++)e[n]===t[n]&&a.push(e[n]);return a},n=e.split("\n"),r=n.length,c=0;c<r-1;c++)for(var o=n[c],l=c+1;l<r;l++){var u=t(o,n[l]),i=u.count,s=u.e1,_=u.e2;if(i<2)return a(s,_).join("")}return null}}]},b=function(){return r.a.createElement(v.a,h)},O=function(){return r.a.createElement("div",null,"Select day and check/run my solutions")},y=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/adventofcode-2018/"},r.a.createElement("button",null,"Home")),r.a.createElement(d.a,{to:"/adventofcode-2018/01"},r.a.createElement("button",null,"Day 01")),r.a.createElement(d.a,{to:"/adventofcode-2018/02"},r.a.createElement("button",null,"Day 02")))},w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Welcome to Advent of code 2018"),r.a.createElement("h2",null,"solutions by pawelrutkowski"),r.a.createElement(y,null)),r.a.createElement("div",null,r.a.createElement(m.a,{exact:!0,path:"/adventofcode-2018/",component:O}),r.a.createElement(m.a,{exact:!0,path:"/adventofcode-2018/01",component:f.a}),r.a.createElement(m.a,{exact:!0,path:"/adventofcode-2018/02",component:b}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Day__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),part01=function part01(input){var startValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",regex=/(\r\n\t|\n|\r\t)/gm,emptyValue="";return eval(startValue+input.replace(regex,emptyValue))},part02=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.split("\n"),n=[0],r=t,c=!0,o=null;c;)for(var l=0;l<a.length;l++){var u=a[l];if(u){if(r+=Number(u),n.includes(r)){c=!1,o=r;break}n.push(r)}}return o},props={day:"01",exercises:[{name:"01",dataPath:"./data/data01.txt",code:part01},{name:"02",dataPath:"./data/data01.txt",code:part02}]},Day01=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Day__WEBPACK_IMPORTED_MODULE_1__.a,props)};__webpack_exports__.a=Day01},41:function(e,t,a){e.exports=a(241)}},[[41,2,1]]]);
//# sourceMappingURL=main.83b43b6b.chunk.js.map