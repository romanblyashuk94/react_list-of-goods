(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),a=n(5),o=n(6),i=n(9),l=n(7),u=n(8),d=n(1),h=(n(14),n(15),n(2)),b=n.n(h),p=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.handleSort=function(t){e.setState({sortType:t})},e.handleReversed=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleParamsReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isReversed,r=t.sortType,c=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);switch(n){case s.ALPHABET:c.sort((function(e,t){return e.localeCompare(t)}));break;case s.LENGTH:c.sort((function(e,t){return e.length-t.length}))}return r&&c.reverse(),c}(j,{sortType:r,isReversed:n});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button","is-success",{"is-light":r!==s.ALPHABET}),onClick:function(){return e.handleSort(s.ALPHABET)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button","is-success",{"is-light":r!==s.LENGTH}),"data-sort-by":s.LENGTH,onClick:function(){return e.handleSort(s.LENGTH)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button","is-warning",{"is-light":!n}),onClick:this.handleReversed,children:"Reverse"}),r!==s.NONE||n?Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleParamsReset,children:"Reset"}):null]}),Object(p.jsx)("ul",{children:c.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(d.PureComponent);c.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.258050e0.chunk.js.map