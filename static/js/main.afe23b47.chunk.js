(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return changeNumberReducer})),__webpack_require__.d(__webpack_exports__,"b",(function(){return resultReducer}));var initialState="",includingResult=!1,changeNumberReducer=function changeNumberReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;if("CHANGE_NUMBER"===action.type){if("="===action.payload.number)return includingResult=!0,state+"="+eval(state);if(action.payload.number){if(!0===includingResult){var re=/=\d+/;return includingResult=!1,state.match(re).toString().substr(1)+action.payload.number.toString()}return state+action.payload.number.toString()}return""}return state},includingSign=!1,resultReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,n=arguments.length>1?arguments[1]:void 0;if("CHANGE_NUMBER"===n.type){if(!n.payload.number)return"";if(!1===isNaN(n.payload.number)){if(!1===includingSign)return e+n.payload.number;if(!0===includingSign)return includingSign=!1,(e="")+n.payload.number}return"="===n.payload.number?(includingSign=!0,e):(n.payload.number,includingSign=!0,n.payload.number)}return e}},20:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),a=t(8),u=t.n(a),o=t(2),s=t(3),l=t(6),b=t(5),d=(t(20),t(4)),p=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[this.props.currentNumber,Object(r.jsx)("br",{}),this.props.finalResult]})}}]),t}(i.a.Component),j=Object(d.b)((function(e){return console.log(e),{currentNumber:e.currentNumber,finalResult:e.finalResult}}))(p),m=function(e){return{type:"CHANGE_NUMBER",payload:{number:e}}},g=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=n.call.apply(n,[this].concat(i))).getNumberButtonList=function(){for(var n=[],t=function(t){n.push(Object(r.jsx)("div",{className:"number-color",onClick:function(){e.props.changeNumber(t)},children:t},t))},c=9;c>=0;c--)t(c);return n},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return Object(r.jsxs)(c.Fragment,{children:[this.getNumberButtonList(),Object(r.jsx)("div",{className:"number-color",onClick:function(){e.props.changeNumber(".")},children:"."})]})}}]),t}(i.a.Component),h=Object(d.b)(null,{changeNumber:m})(g),f=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("")},children:"AC"}),Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("+")},children:"+"}),Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("-")},children:"-"}),Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("*")},children:"X"}),Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("/")},children:"/"}),Object(r.jsx)("div",{className:"sign-color",onClick:function(){e.props.changeNumber("=")},children:"="})]})}}]),t}(i.a.Component),O=Object(d.b)(null,{changeNumber:m})(f),N=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)(O,{}),Object(r.jsx)(h,{})]})}}]),t}(i.a.Component),v=t(7),_=t(12),y=Object(v.b)({currentNumber:_.a,finalResult:_.b}),x=Object(v.c)(y);u.a.render(Object(r.jsx)(d.a,{store:x,children:Object(r.jsx)(N,{})}),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.afe23b47.chunk.js.map