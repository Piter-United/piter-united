webpackJsonp([5],{109:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=r(a),i=t(99),c=t(308),u=r(c),l=t(489),s=r(l);n.default=(0,i.withRouteData)(function(e){var n=e.speakers;return o.default.createElement(u.default,null,o.default.createElement("div",{className:"container pt-20"},o.default.createElement(s.default,{speakers:n})))})},303:function(e,n,t){"use strict";function r(e,n,t,o,i,c){var u=t;if(!u&&n&&n.length>0){var l=n[0];u=l&&l.loc&&l.loc.source}var s=o;!s&&n&&(s=n.filter(function(e){return Boolean(e.loc)}).map(function(e){return e.loc.start})),s&&0===s.length&&(s=void 0);var d=void 0,f=u;f&&s&&(d=s.map(function(e){return(0,a.getLocation)(f,e)})),Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:d||void 0,enumerable:!0},path:{value:i||void 0,enumerable:!0},nodes:{value:n||void 0},source:{value:u||void 0},positions:{value:s||void 0},originalError:{value:c}}),c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}Object.defineProperty(n,"__esModule",{value:!0}),n.GraphQLError=r;var a=t(312);r.prototype=Object.create(Error.prototype,{constructor:{value:r},name:{value:"GraphQLError"}})},308:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=r(a),i=t(99),c=t(309),u=r(c),l=function(e){var n=e.to,t=e.text;return o.default.createElement(i.Link,{to:n,className:"btn btn-light",style:{marginRight:"10px"},role:"button"},t)},s=function(e){var n=e.buttons,t=e.children;return o.default.createElement("div",{className:"background"},o.default.createElement("div",{className:"malina-left"},o.default.createElement("img",{alt:"",src:u.default,style:{width:"400px"}})),o.default.createElement("div",{className:"container"},n&&n,!n&&o.default.createElement("div",{className:"back"},o.default.createElement(l,{to:"/",text:"Home"}),o.default.createElement(l,{to:"/event",text:"Events"}),o.default.createElement(l,{to:"/speaker",text:"Speakers"}),o.default.createElement(l,{to:"/company",text:"Companies"}),o.default.createElement(l,{to:"/about",text:"About"}))),t)};n.default=s},309:function(e,n,t){e.exports=t.p+"static/img.e1954899.png"},310:function(e,n,t){"use strict";function r(e,n){if(!e)throw new Error(n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},311:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(303);Object.defineProperty(n,"GraphQLError",{enumerable:!0,get:function(){return r.GraphQLError}});var a=t(361);Object.defineProperty(n,"syntaxError",{enumerable:!0,get:function(){return a.syntaxError}});var o=t(362);Object.defineProperty(n,"locatedError",{enumerable:!0,get:function(){return o.locatedError}});var i=t(363);Object.defineProperty(n,"formatError",{enumerable:!0,get:function(){return i.formatError}})},312:function(e,n,t){"use strict";function r(e,n){for(var t=/\r\n|[\n\r]/g,r=1,a=n+1,o=void 0;(o=t.exec(e.body))&&o.index<n;)r+=1,a=n+1-(o.index+o[0].length);return{line:r,column:a}}Object.defineProperty(n,"__esModule",{value:!0}),n.getLocation=r},323:function(e,n,t){function r(e){return e.replace(/[\s,]+/g," ").trim()}function a(e){return r(e.source.body.substring(e.start,e.end))}function o(){v={},E={}}function i(e){for(var n={},t=[],r=0;r<e.definitions.length;r++){var o=e.definitions[r];if("FragmentDefinition"===o.kind){var i=o.name.value,c=a(o.loc);E.hasOwnProperty(i)&&!E[i][c]?(p&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),E[i][c]=!0):E.hasOwnProperty(i)||(E[i]={},E[i][c]=!0),n[c]||(n[c]=!0,t.push(o))}else t.push(o)}return e.definitions=t,e}function c(){p=!1}function u(e,n){var t=Object.prototype.toString.call(e);if("[object Array]"===t)return e.map(function(e){return u(e,n)});if("[object Object]"!==t)throw new Error("Unexpected input.");n&&e.loc&&delete e.loc,e.loc&&(delete e.loc.startToken,delete e.loc.endToken);var r,a,o,i=Object.keys(e);for(r in i)i.hasOwnProperty(r)&&(a=e[i[r]],"[object Object]"!==(o=Object.prototype.toString.call(a))&&"[object Array]"!==o||(e[i[r]]=u(a,!0)));return e}function l(e){var n=r(e);if(v[n])return v[n];var t=f(e);if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=i(t),t=u(t,!1),v[n]=t,t}function s(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t="string"==typeof n?n:n[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=n[r];return l(t)}var d=t(359),f=d.parse,v={},E={},p=!0;s.default=s,s.resetCaches=o,s.disableFragmentWarnings=c,e.exports=s},359:function(e,n,t){"use strict";function r(e,n){var t="string"==typeof e?new oe.Source(e):e;if(!(t instanceof oe.Source))throw new TypeError("Must provide Source. Received: "+String(t));return c((0,ce.createLexer)(t,n||{}))}function a(e,n){var t="string"==typeof e?new oe.Source(e):e,r=(0,ce.createLexer)(t,n||{});ee(r,ce.TokenKind.SOF);var a=O(r,!1);return ee(r,ce.TokenKind.EOF),a}function o(e,n){var t="string"==typeof e?new oe.Source(e):e,r=(0,ce.createLexer)(t,n||{});ee(r,ce.TokenKind.SOF);var a=w(r);return ee(r,ce.TokenKind.EOF),a}function i(e){var n=ee(e,ce.TokenKind.NAME);return{kind:ue.NAME,value:n.value,loc:z(e,n)}}function c(e){var n=e.token;ee(e,ce.TokenKind.SOF);var t=[];do{t.push(u(e))}while(!Z(e,ce.TokenKind.EOF));return{kind:ue.DOCUMENT,definitions:t,loc:z(e,n)}}function u(e){if($(e,ce.TokenKind.BRACE_L))return l(e);if($(e,ce.TokenKind.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return l(e);case"fragment":return N(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"extend":case"directive":return S(e)}throw te(e)}function l(e){var n=e.token;if($(e,ce.TokenKind.BRACE_L))return{kind:ue.OPERATION_DEFINITION,operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:E(e),loc:z(e,n)};var t=s(e),r=void 0;return $(e,ce.TokenKind.NAME)&&(r=i(e)),{kind:ue.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:d(e),directives:L(e),selectionSet:E(e),loc:z(e,n)}}function s(e){var n=ee(e,ce.TokenKind.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw te(e,n)}function d(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,f,ce.TokenKind.PAREN_R):[]}function f(e){var n=e.token;return{kind:ue.VARIABLE_DEFINITION,variable:v(e),type:(ee(e,ce.TokenKind.COLON),w(e)),defaultValue:Z(e,ce.TokenKind.EQUALS)?O(e,!0):null,loc:z(e,n)}}function v(e){var n=e.token;return ee(e,ce.TokenKind.DOLLAR),{kind:ue.VARIABLE,name:i(e),loc:z(e,n)}}function E(e){var n=e.token;return{kind:ue.SELECTION_SET,selections:ae(e,ce.TokenKind.BRACE_L,p,ce.TokenKind.BRACE_R),loc:z(e,n)}}function p(e){return $(e,ce.TokenKind.SPREAD)?h(e):k(e)}function k(e){var n=e.token,t=i(e),r=void 0,a=void 0;return Z(e,ce.TokenKind.COLON)?(r=t,a=i(e)):(r=null,a=t),{kind:ue.FIELD,alias:r,name:a,arguments:T(e),directives:L(e),selectionSet:$(e,ce.TokenKind.BRACE_L)?E(e):null,loc:z(e,n)}}function T(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,m,ce.TokenKind.PAREN_R):[]}function m(e){var n=e.token;return{kind:ue.ARGUMENT,name:i(e),value:(ee(e,ce.TokenKind.COLON),O(e,!1)),loc:z(e,n)}}function h(e){var n=e.token;if(ee(e,ce.TokenKind.SPREAD),$(e,ce.TokenKind.NAME)&&"on"!==e.token.value)return{kind:ue.FRAGMENT_SPREAD,name:y(e),directives:L(e),loc:z(e,n)};var t=null;return"on"===e.token.value&&(e.advance(),t=P(e)),{kind:ue.INLINE_FRAGMENT,typeCondition:t,directives:L(e),selectionSet:E(e),loc:z(e,n)}}function N(e){var n=e.token;return ne(e,"fragment"),{kind:ue.FRAGMENT_DEFINITION,name:y(e),typeCondition:(ne(e,"on"),P(e)),directives:L(e),selectionSet:E(e),loc:z(e,n)}}function y(e){if("on"===e.token.value)throw te(e);return i(e)}function O(e,n){var t=e.token;switch(t.kind){case ce.TokenKind.BRACKET_L:return b(e,n);case ce.TokenKind.BRACE_L:return g(e,n);case ce.TokenKind.INT:return e.advance(),{kind:ue.INT,value:t.value,loc:z(e,t)};case ce.TokenKind.FLOAT:return e.advance(),{kind:ue.FLOAT,value:t.value,loc:z(e,t)};case ce.TokenKind.STRING:return e.advance(),{kind:ue.STRING,value:t.value,loc:z(e,t)};case ce.TokenKind.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:ue.BOOLEAN,value:"true"===t.value,loc:z(e,t)}):"null"===t.value?(e.advance(),{kind:ue.NULL,loc:z(e,t)}):(e.advance(),{kind:ue.ENUM,value:t.value,loc:z(e,t)});case ce.TokenKind.DOLLAR:if(!n)return v(e)}throw te(e)}function _(e){return O(e,!0)}function I(e){return O(e,!1)}function b(e,n){var t=e.token,r=n?_:I;return{kind:ue.LIST,values:re(e,ce.TokenKind.BRACKET_L,r,ce.TokenKind.BRACKET_R),loc:z(e,t)}}function g(e,n){var t=e.token;ee(e,ce.TokenKind.BRACE_L);for(var r=[];!Z(e,ce.TokenKind.BRACE_R);)r.push(A(e,n));return{kind:ue.OBJECT,fields:r,loc:z(e,t)}}function A(e,n){var t=e.token;return{kind:ue.OBJECT_FIELD,name:i(e),value:(ee(e,ce.TokenKind.COLON),O(e,n)),loc:z(e,t)}}function L(e){for(var n=[];$(e,ce.TokenKind.AT);)n.push(R(e));return n}function R(e){var n=e.token;return ee(e,ce.TokenKind.AT),{kind:ue.DIRECTIVE,name:i(e),arguments:T(e),loc:z(e,n)}}function w(e){var n=e.token,t=void 0;return Z(e,ce.TokenKind.BRACKET_L)?(t=w(e),ee(e,ce.TokenKind.BRACKET_R),t={kind:ue.LIST_TYPE,type:t,loc:z(e,n)}):t=P(e),Z(e,ce.TokenKind.BANG)?{kind:ue.NON_NULL_TYPE,type:t,loc:z(e,n)}:t}function P(e){var n=e.token;return{kind:ue.NAMED_TYPE,name:i(e),loc:z(e,n)}}function S(e){if($(e,ce.TokenKind.NAME))switch(e.token.value){case"schema":return D(e);case"scalar":return K(e);case"type":return F(e);case"interface":return U(e);case"union":return V(e);case"enum":return Y(e);case"input":return J(e);case"extend":return Q(e);case"directive":return H(e)}throw te(e)}function D(e){var n=e.token;ne(e,"schema");var t=L(e),r=ae(e,ce.TokenKind.BRACE_L,C,ce.TokenKind.BRACE_R);return{kind:ue.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:z(e,n)}}function C(e){var n=e.token,t=s(e);ee(e,ce.TokenKind.COLON);var r=P(e);return{kind:ue.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:z(e,n)}}function K(e){var n=e.token;ne(e,"scalar");var t=i(e),r=L(e);return{kind:ue.SCALAR_TYPE_DEFINITION,name:t,directives:r,loc:z(e,n)}}function F(e){var n=e.token;ne(e,"type");var t=i(e),r=x(e),a=L(e),o=re(e,ce.TokenKind.BRACE_L,M,ce.TokenKind.BRACE_R);return{kind:ue.OBJECT_TYPE_DEFINITION,name:t,interfaces:r,directives:a,fields:o,loc:z(e,n)}}function x(e){var n=[];if("implements"===e.token.value){e.advance();do{n.push(P(e))}while($(e,ce.TokenKind.NAME))}return n}function M(e){var n=e.token,t=i(e),r=j(e);ee(e,ce.TokenKind.COLON);var a=w(e),o=L(e);return{kind:ue.FIELD_DEFINITION,name:t,arguments:r,type:a,directives:o,loc:z(e,n)}}function j(e){return $(e,ce.TokenKind.PAREN_L)?ae(e,ce.TokenKind.PAREN_L,B,ce.TokenKind.PAREN_R):[]}function B(e){var n=e.token,t=i(e);ee(e,ce.TokenKind.COLON);var r=w(e),a=null;Z(e,ce.TokenKind.EQUALS)&&(a=_(e));var o=L(e);return{kind:ue.INPUT_VALUE_DEFINITION,name:t,type:r,defaultValue:a,directives:o,loc:z(e,n)}}function U(e){var n=e.token;ne(e,"interface");var t=i(e),r=L(e),a=re(e,ce.TokenKind.BRACE_L,M,ce.TokenKind.BRACE_R);return{kind:ue.INTERFACE_TYPE_DEFINITION,name:t,directives:r,fields:a,loc:z(e,n)}}function V(e){var n=e.token;ne(e,"union");var t=i(e),r=L(e);ee(e,ce.TokenKind.EQUALS);var a=G(e);return{kind:ue.UNION_TYPE_DEFINITION,name:t,directives:r,types:a,loc:z(e,n)}}function G(e){Z(e,ce.TokenKind.PIPE);var n=[];do{n.push(P(e))}while(Z(e,ce.TokenKind.PIPE));return n}function Y(e){var n=e.token;ne(e,"enum");var t=i(e),r=L(e),a=ae(e,ce.TokenKind.BRACE_L,q,ce.TokenKind.BRACE_R);return{kind:ue.ENUM_TYPE_DEFINITION,name:t,directives:r,values:a,loc:z(e,n)}}function q(e){var n=e.token,t=i(e),r=L(e);return{kind:ue.ENUM_VALUE_DEFINITION,name:t,directives:r,loc:z(e,n)}}function J(e){var n=e.token;ne(e,"input");var t=i(e),r=L(e),a=re(e,ce.TokenKind.BRACE_L,B,ce.TokenKind.BRACE_R);return{kind:ue.INPUT_OBJECT_TYPE_DEFINITION,name:t,directives:r,fields:a,loc:z(e,n)}}function Q(e){var n=e.token;ne(e,"extend");var t=F(e);return{kind:ue.TYPE_EXTENSION_DEFINITION,definition:t,loc:z(e,n)}}function H(e){var n=e.token;ne(e,"directive"),ee(e,ce.TokenKind.AT);var t=i(e),r=j(e);ne(e,"on");var a=W(e);return{kind:ue.DIRECTIVE_DEFINITION,name:t,arguments:r,locations:a,loc:z(e,n)}}function W(e){Z(e,ce.TokenKind.PIPE);var n=[];do{n.push(i(e))}while(Z(e,ce.TokenKind.PIPE));return n}function z(e,n){if(!e.options.noLocation)return new X(n,e.lastToken,e.source)}function X(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function $(e,n){return e.token.kind===n}function Z(e,n){var t=e.token.kind===n;return t&&e.advance(),t}function ee(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw(0,ie.syntaxError)(e.source,t.start,"Expected "+n+", found "+(0,ce.getTokenDesc)(t))}function ne(e,n){var t=e.token;if(t.kind===ce.TokenKind.NAME&&t.value===n)return e.advance(),t;throw(0,ie.syntaxError)(e.source,t.start,'Expected "'+n+'", found '+(0,ce.getTokenDesc)(t))}function te(e,n){var t=n||e.token;return(0,ie.syntaxError)(e.source,t.start,"Unexpected "+(0,ce.getTokenDesc)(t))}function re(e,n,t,r){ee(e,n);for(var a=[];!Z(e,r);)a.push(t(e));return a}function ae(e,n,t,r){ee(e,n);for(var a=[t(e)];!Z(e,r);)a.push(t(e));return a}Object.defineProperty(n,"__esModule",{value:!0}),n.parse=r,n.parseValue=a,n.parseType=o,n.parseConstValue=_,n.parseTypeReference=w,n.parseNamedType=P;var oe=t(360),ie=t(311),ce=t(364),ue=t(365);X.prototype.toJSON=X.prototype.inspect=function(){return{start:this.start,end:this.end}}},360:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Source=void 0;var a=t(310),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.Source=function e(n,t,a){r(this,e),this.body=n,this.name=t||"GraphQL request",this.locationOffset=a||{line:1,column:1},this.locationOffset.line>0||(0,o.default)(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||(0,o.default)(0,"column in locationOffset is 1-indexed and must be positive")}},361:function(e,n,t){"use strict";function r(e,n,t){var r=(0,u.getLocation)(e,n),i=r.line+e.locationOffset.line-1,c=o(e,r),s=r.column+c;return new l.GraphQLError("Syntax Error "+e.name+" ("+i+":"+s+") "+t+"\n\n"+a(e,r),void 0,e,[n])}function a(e,n){var t=n.line,r=e.locationOffset.line-1,a=o(e,n),u=t+r,l=(u-1).toString(),s=u.toString(),d=(u+1).toString(),f=d.length,v=e.body.split(/\r\n|[\n\r]/g);return v[0]=i(e.locationOffset.column-1)+v[0],(t>=2?c(f,l)+": "+v[t-2]+"\n":"")+c(f,s)+": "+v[t-1]+"\n"+i(2+f+n.column-1+a)+"^\n"+(t<v.length?c(f,d)+": "+v[t]+"\n":"")}function o(e,n){return 1===n.line?e.locationOffset.column-1:0}function i(e){return Array(e+1).join(" ")}function c(e,n){return i(e-n.length)+n}Object.defineProperty(n,"__esModule",{value:!0}),n.syntaxError=r;var u=t(312),l=t(303)},362:function(e,n,t){"use strict";function r(e,n,t){if(e&&e.path)return e;var r=e?e.message||String(e):"An unknown error occurred.";return new a.GraphQLError(r,e&&e.nodes||n,e&&e.source,e&&e.positions,t,e)}Object.defineProperty(n,"__esModule",{value:!0}),n.locatedError=r;var a=t(303)},363:function(e,n,t){"use strict";function r(e){return e||(0,o.default)(0,"Received null or undefined error."),{message:e.message,locations:e.locations,path:e.path}}Object.defineProperty(n,"__esModule",{value:!0}),n.formatError=r;var a=t(310),o=function(e){return e&&e.__esModule?e:{default:e}}(a)},364:function(e,n,t){"use strict";function r(e,n){var t=new i(h,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:a}}function a(){var e=this.lastToken=this.token;if(e.kind!==N){do{e=e.next=u(this,e)}while(e.kind===M);this.token=e}return e}function o(e){var n=e.value;return n?e.kind+' "'+n+'"':e.kind}function i(e,n,t,r,a,o,i){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=i,this.prev=o,this.next=null}function c(e){return isNaN(e)?N:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'+("00"+e.toString(16).toUpperCase()).slice(-4)+'"'}function u(e,n){var t=e.source,r=t.body,a=r.length,o=s(r,n.end,e),u=e.line,v=1+o-e.lineStart;if(o>=a)return new i(N,a,a,u,v,n);var p=j.call(r,o);if(p<32&&9!==p&&10!==p&&13!==p)throw(0,m.syntaxError)(t,o,"Cannot contain the invalid character "+c(p)+".");switch(p){case 33:return new i(y,o,o+1,u,v,n);case 35:return d(t,o,u,v,n);case 36:return new i(O,o,o+1,u,v,n);case 40:return new i(_,o,o+1,u,v,n);case 41:return new i(I,o,o+1,u,v,n);case 46:if(46===j.call(r,o+1)&&46===j.call(r,o+2))return new i(b,o,o+3,u,v,n);break;case 58:return new i(g,o,o+1,u,v,n);case 61:return new i(A,o,o+1,u,v,n);case 64:return new i(L,o,o+1,u,v,n);case 91:return new i(R,o,o+1,u,v,n);case 93:return new i(w,o,o+1,u,v,n);case 123:return new i(P,o,o+1,u,v,n);case 124:return new i(S,o,o+1,u,v,n);case 125:return new i(D,o,o+1,u,v,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return T(t,o,u,v,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return f(t,o,p,u,v,n);case 34:return E(t,o,u,v,n)}throw(0,m.syntaxError)(t,o,l(p))}function l(e){return 39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character "+c(e)+"."}function s(e,n,t){for(var r=e.length,a=n;a<r;){var o=j.call(e,a);if(9===o||32===o||44===o||65279===o)++a;else if(10===o)++a,++t.line,t.lineStart=a;else{if(13!==o)break;10===j.call(e,a+1)?a+=2:++a,++t.line,t.lineStart=a}}return a}function d(e,n,t,r,a){var o=e.body,c=void 0,u=n;do{c=j.call(o,++u)}while(null!==c&&(c>31||9===c));return new i(M,n,u,t,r,a,B.call(o,n+1,u))}function f(e,n,t,r,a,o){var u=e.body,l=t,s=n,d=!1;if(45===l&&(l=j.call(u,++s)),48===l){if((l=j.call(u,++s))>=48&&l<=57)throw(0,m.syntaxError)(e,s,"Invalid number, unexpected digit after 0: "+c(l)+".")}else s=v(e,s,l),l=j.call(u,s);return 46===l&&(d=!0,l=j.call(u,++s),s=v(e,s,l),l=j.call(u,s)),69!==l&&101!==l||(d=!0,l=j.call(u,++s),43!==l&&45!==l||(l=j.call(u,++s)),s=v(e,s,l)),new i(d?F:K,n,s,r,a,o,B.call(u,n,s))}function v(e,n,t){var r=e.body,a=n,o=t;if(o>=48&&o<=57){do{o=j.call(r,++a)}while(o>=48&&o<=57);return a}throw(0,m.syntaxError)(e,a,"Invalid number, expected digit but got: "+c(o)+".")}function E(e,n,t,r,a){for(var o=e.body,u=n+1,l=u,s=0,d="";u<o.length&&null!==(s=j.call(o,u))&&10!==s&&13!==s&&34!==s;){if(s<32&&9!==s)throw(0,m.syntaxError)(e,u,"Invalid character within String: "+c(s)+".");if(++u,92===s){switch(d+=B.call(o,l,u-1),s=j.call(o,u)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var f=p(j.call(o,u+1),j.call(o,u+2),j.call(o,u+3),j.call(o,u+4));if(f<0)throw(0,m.syntaxError)(e,u,"Invalid character escape sequence: \\u"+o.slice(u+1,u+5)+".");d+=String.fromCharCode(f),u+=4;break;default:throw(0,m.syntaxError)(e,u,"Invalid character escape sequence: \\"+String.fromCharCode(s)+".")}++u,l=u}}if(34!==s)throw(0,m.syntaxError)(e,u,"Unterminated string.");return d+=B.call(o,l,u),new i(x,n,u+1,t,r,a,d)}function p(e,n,t,r){return k(e)<<12|k(n)<<8|k(t)<<4|k(r)}function k(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function T(e,n,t,r,a){for(var o=e.body,c=o.length,u=n+1,l=0;u!==c&&null!==(l=j.call(o,u))&&(95===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122);)++u;return new i(C,n,u,t,r,a,B.call(o,n,u))}Object.defineProperty(n,"__esModule",{value:!0}),n.TokenKind=void 0,n.createLexer=r,n.getTokenDesc=o;var m=t(311),h="<SOF>",N="<EOF>",y="!",O="$",_="(",I=")",b="...",g=":",A="=",L="@",R="[",w="]",P="{",S="|",D="}",C="Name",K="Int",F="Float",x="String",M="Comment",j=(n.TokenKind={SOF:h,EOF:N,BANG:y,DOLLAR:O,PAREN_L:_,PAREN_R:I,SPREAD:b,COLON:g,EQUALS:A,AT:L,BRACKET_L:R,BRACKET_R:w,BRACE_L:P,PIPE:S,BRACE_R:D,NAME:C,INT:K,FLOAT:F,STRING:x,COMMENT:M},String.prototype.charCodeAt),B=String.prototype.slice;i.prototype.toJSON=i.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},365:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.VARIABLE="Variable",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.TYPE_EXTENSION_DEFINITION="TypeExtensionDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition"},472:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(0),u=function(e){return e&&e.__esModule?e:{default:e}}(c),l=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={opened:[]},t}return o(n,e),i(n,[{key:"toggle",value:function(e){var n=this.state.opened;if(n.includes(e)){var t=n.indexOf(e);n.splice(t,1),this.setState({opened:n})}else n.push(e),this.setState({opened:n})}},{key:"hasOpened",value:function(e){return this.state.opened.includes(e)}},{key:"item",value:function(e,n){var t=this,r=["collapse"];return this.hasOpened(e)&&r.push("show"),u.default.createElement("div",{className:"card",key:e},u.default.createElement("div",{className:"card-header"},u.default.createElement("h5",{className:"mb-0"},u.default.createElement("button",{onClick:function(){return t.toggle(e)},className:"btn programm-item","data-toggle":"collapse","aria-expanded":"true","aria-controls":"collapseOne"},this.hasOpened(e)?u.default.createElement("span",{className:"oi oi-chevron-bottom"}):u.default.createElement("span",{className:"oi oi-chevron-right"}),u.default.createElement("span",{className:"programm-item-title"},n.title)))),u.default.createElement("div",{className:r.join(" "),"aria-labelledby":"headingOne"},n.data))}},{key:"render",value:function(){var e=this;return this.props.items.map(function(n,t){return e.item(t,n)})}}]),n}(u.default.Component);n.default=l},489:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\nquery {\n  allSpeakers {\n    id\n    name\n    company {\n      id\n      name\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}"],["\nquery {\n  allSpeakers {\n    id\n    name\n    company {\n      id\n      name\n    }\n    community {\n      id\n      name\n      site\n    }\n  }\n}"]),l=t(0),s=r(l),d=t(99),f=t(323),v=r(f),E=t(100),p=r(E),k=t(472),T=r(k),m=(0,v.default)(u),h=function(e){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={list:{},loading:!0},t}return i(n,e),c(n,[{key:"componentWillMount",value:function(){var e=this;this.groupByCommunity(this.props.speakers),p.default.query({query:m}).then(function(n){var t=n.data.allSpeakers;e.setState({loading:!1}),e.groupByCommunity(t)}).catch(function(n){e.setState({loading:!1}),console.log(n)})}},{key:"groupByCommunity",value:function(e){var n={};e.forEach(function(e){e.community.forEach(function(t){t.id in n?n[t.id].speakers.push(e):n[t.id]=Object.assign({},t,{speakers:[e]})})}),this.setState({list:n})}},{key:"company",value:function(e){var n=e.id,t=e.name;return s.default.createElement(d.Link,{key:n,to:"/company/"+n},t)}},{key:"speaker",value:function(e){var n=this,t=e.id,r=e.name,a=e.company;return s.default.createElement("div",{key:t,style:{marginLeft:"20px",marginBottom:"10px"}},s.default.createElement("h5",null,s.default.createElement(d.Link,{to:"/speaker/"+t},r)," ",a.map(function(e,t){return s.default.createElement("span",{key:e.id},0===t&&"(",n.company(e),t===a.length-1?")":", ")})))}},{key:"community",value:function(e){var n=this,t=this.state.list,r=t[e],a=r.name,o=r.speakers;return{title:a,data:s.default.createElement("div",{className:"card-body"},o.map(function(e){return n.speaker(e)}))}}},{key:"itemsList",value:function(){var e=this,n=this.state.list;return Object.keys(n).map(function(n){return e.community(n)})}},{key:"render",value:function(){var e=this.state.loading;return s.default.createElement("div",null,s.default.createElement("h1",null,"Speaker list"),s.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.default.createElement(T.default,{items:this.itemsList()})),e&&s.default.createElement("span",null,"loading..."))}}]),n}(s.default.Component);n.default=h}});