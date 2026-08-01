"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=a(function(p,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-powm1/dist'),v=require('@stdlib/math-base-special-riemann-zeta/dist'),o=require('@stdlib/constants-float64-ln-two/dist');function s(r){return n(r)?NaN:r===1?o:-q(2,1-r)*v(r)}i.exports=s
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
