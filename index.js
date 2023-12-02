// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return e!=e}function r(e){return Math.abs(e)}var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,o,f;if(null==e)return i.call(e);n=e[u],f=u,r=null!=(o=e)&&a.call(o,f);try{e[u]=void 0}catch(r){return i.call(e)}return t=i.call(e),r?e[u]=n:delete e[u],t}:function(e){return i.call(e)},c="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var e,r,n;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(c&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?l:function(){throw new Error("not implemented")};var p,v=n,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;p=function(){var e,r,n;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,NaN]),n=r,e=(y&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?d:function(){throw new Error("not implemented")};var h,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var e,r,n;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,256,257]),n=r,e=(b&&n instanceof Uint8Array||"[object Uint8Array]"===f(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?A:function(){throw new Error("not implemented")};var N,_=h,E="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var e,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,65536,65537]),n=r,e=(E&&n instanceof Uint16Array||"[object Uint16Array]"===f(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")};var k,I={uint16:N,uint8:_};(k=new I.uint16(1))[0]=4660;var S=52===new I.uint8(k.buffer)[0],F=!0===S?1:0,j=new w(1),T=new v(j.buffer);function O(e){return j[0]=e,T[F]}var V,$,G=!0===S?1:0,H=new w(1),W=new v(H.buffer);function C(e,r){return H[0]=e,W[G]=r>>>0,H[0]}!0===S?(V=1,$=0):(V=0,$=1);var L={HIGH:V,LOW:$},P=new w(1),M=new v(P.buffer),R=L.HIGH,Z=L.LOW;function X(e,r){return M[R]=e,M[Z]=r,P[0]}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,z=1023,B=.6931471803691238,D=1.9082149292705877e-10,J=1.4426950408889634,K=.6931471803691238,Q=1.9082149292705877e-10,ee=1048575;function re(r){var n,t,i,a,o,u,f,c,s,l,p,v;return 0===r?q:e(r)||r<0?NaN:(o=0,(t=O(r))<1048576&&(o-=54,t=O(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-z|0,o+=(c=614244+(t&=ee)&1048576|0)>>20|0,f=(r=C(r,t|1072693248^c))-1,(ee&2+t)<3?0===f?0===o?0:o*K+o*Q:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*K-(u-o*Q-f)):(c=t-398458|0,s=440401-t|0,a=(p=(v=(l=f/(2+f))*l)*v)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(p),i=v*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*K-(n-(l*(n+u)+o*Q)-f)):0===o?f-l*(f-u):o*K-(l*(f-u)-o*Q-f))))}var ne=Math.floor;function te(e){return ne(e)===e}function ie(e){return te(e/2)}function ae(e){return ie(e>0?e-1:e+1)}function oe(e){return e===Y||e===q}var ue=Math.sqrt,fe="function"==typeof Object.defineProperty?Object.defineProperty:null,ce=Object.defineProperty;function se(e){return"number"==typeof e}function le(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function pe(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+le(i):le(i)+e,t&&(e="-"+e)),e}var ve=String.prototype.toLowerCase,ye=String.prototype.toUpperCase;function ge(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!se(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=pe(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=pe(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===ye.call(e.specifier)?ye.call(n):ve.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function de(e){return"string"==typeof e}var he=Math.abs,we=String.prototype.toLowerCase,be=String.prototype.toUpperCase,me=String.prototype.replace,Ae=/e\+(\d)$/,Ne=/e-(\d)$/,_e=/^(\d+)$/,Ee=/^(\d+)e/,xe=/\.0$/,Ue=/\.0*e/,ke=/(\..*[^0])0*e/;function Ie(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!se(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":he(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=me.call(n,ke,"$1e"),n=me.call(n,Ue,"e"),n=me.call(n,xe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=me.call(n,Ae,"e+0$1"),n=me.call(n,Ne,"e-0$1"),e.alternate&&(n=me.call(n,_e,"$1."),n=me.call(n,Ee,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===be.call(e.specifier)?be.call(n):we.call(n)}function Se(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function Fe(e,r,n){var t=r-e.length;return t<0?e:e=n?e+Se(t):Se(t)+e}var je=String.fromCharCode,Te=isNaN,Oe=Array.isArray;function Ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,n,t,i,a,o,u,f,c;if(!Oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,f=0;f<e.length;f++)if(de(t=e[f]))o+=t;else{if(r=void 0!==t.precision,!(t=Ve(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Te(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Te(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ge(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Te(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Te(a)?String(t.arg):je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ie(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=pe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Fe(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function He(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function We(e){var r,n,t,i;for(n=[],i=0,t=Ge.exec(e);t;)(r=e.slice(i,Ge.lastIndex-t[0].length)).length&&n.push(r),n.push(He(t)),i=Ge.lastIndex,t=Ge.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function Ce(e){return"string"==typeof e}function Le(e){var r,n,t;if(!Ce(e))throw new TypeError(Le("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=We(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return $e.apply(null,n)}var Pe,Me,Re=Object.prototype,Ze=Re.toString,Xe=Re.__defineGetter__,Ye=Re.__defineSetter__,qe=Re.__lookupGetter__,ze=Re.__lookupSetter__,Be=function(){try{return fe({},"x",{}),!0}catch(e){return!1}}()?ce:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ze.call(e))throw new TypeError(Le("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===Ze.call(n))throw new TypeError(Le("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(qe.call(e,r)||ze.call(e,r)?(t=e.__proto__,e.__proto__=Re,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xe&&Xe.call(e,r,n.get),o&&Ye&&Ye.call(e,r,n.set),e};function De(e,r,n){Be(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===S?(Pe=1,Me=0):(Pe=0,Me=1);var Je={HIGH:Pe,LOW:Me},Ke=new w(1),Qe=new v(Ke.buffer),er=Je.HIGH,rr=Je.LOW;function nr(e,r,n,t){return Ke[0]=e,r[t]=Qe[er],r[t+n]=Qe[rr],r}function tr(e){return nr(e,[0,0],1,0)}De(tr,"assign",nr);var ir=!0===S?0:1,ar=new w(1),or=new v(ar.buffer);function ur(e,r){return ar[0]=e,or[ir]=r>>>0,ar[0]}function fr(e){return 0|e}var cr=2147483647,sr=[0,0];function lr(e,r){var n,t;return tr.assign(e,sr,1,0),n=sr[0],n&=cr,t=O(r),X(n|=t&=2147483648,sr[1])}var pr=1048576,vr=[1,1.5],yr=[0,.5849624872207642],gr=[0,1.350039202129749e-8];function dr(n,t,i,a){return e(n)||oe(n)?(t[a]=n,t[a+i]=0,t):0!==n&&r(n)<22250738585072014e-324?(t[a]=4503599627370496*n,t[a+i]=-52,t):(t[a]=n,t[a+i]=0,t)}De((function(e){return dr(e,[0,0],1,0)}),"assign",dr);var hr=2146435072,wr=[0,0],br=[0,0];function mr(r,n){var t,i;return 0===n||0===r||e(r)||oe(r)?r:(dr(r,wr,1,0),n+=wr[1],n+=function(e){var r=O(e);return(r=(r&hr)>>>20)-z|0}(r=wr[0]),n<-1074?lr(0,r):n>1023?r<0?q:Y:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,tr.assign(r,br,1,0),t=br[0],t&=2148532223,i*X(t|=n+z<<20,br[1])))}var Ar=.6931471805599453,Nr=1048575,_r=1048576,Er=1083179008,xr=1e300,Ur=1e-300,kr=[0,0],Ir=[0,0];function Sr(n,t){var i,a,o,u,f,c,s,l,p,v,y,g,d,h;if(e(n)||e(t))return NaN;if(tr.assign(t,kr,1,0),f=kr[0],0===kr[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return ue(n);if(-.5===t)return 1/ue(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(oe(t))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:r(e)<1==(n===Y)?0:Y}(n,t)}if(tr.assign(n,kr,1,0),u=kr[0],0===kr[1]){if(0===u)return function(e,r){return r===q?Y:r===Y?0:r>0?ae(r)?e:0:ae(r)?lr(Y,e):Y}(n,t);if(1===n)return 1;if(-1===n&&ae(t))return-1;if(oe(n))return n===q?Sr(-0,-t):t<0?0:Y}if(n<0&&!1===te(t))return(n-n)/(n-n);if(o=r(n),i=u&cr|0,a=f&cr|0,s=f>>>31|0,c=(c=u>>>31|0)&&ae(t)?-1:1,a>1105199104){if(a>1139802112)return function(e,r){return(O(e)&cr)<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,t);if(i<1072693247)return 1===s?c*xr*xr:c*Ur*Ur;if(i>1072693248)return 0===s?c*xr*xr:c*Ur*Ur;y=function(e,r){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=r-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ur(t=(a=1.4426950216293335*i)+o,0))-a),e[0]=t,e[1]=n,e}(Ir,o)}else y=function(e,r,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,A,N,_;return m=0,n<pr&&(m-=53,n=O(r*=9007199254740992)),m+=(n>>20)-z|0,n=1072693248|(A=1048575&n|0),A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=pr),o=ur(i=(w=(r=C(r,n))-(c=vr[N]))*(b=1/(r+c)),0),t=524288+(n>>1|536870912),f=C(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ur(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(r-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(l=ur(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+gr[N])-((y=ur(y=(p=.9617967009544373*l)+v+(s=yr[N])+(d=m),0))-d-s-p),e[0]=y,e[1]=g,e}(Ir,o,i);if(g=(v=(t-(l=ur(t,0)))*y[0]+t*y[1])+(p=l*y[0]),tr.assign(g,kr,1,0),d=fr(kr[0]),h=fr(kr[1]),d>=Er){if(0!=(d-Er|h))return c*xr*xr;if(v+8008566259537294e-32>g-p)return c*xr*xr}else if((d&cr)>=1083231232){if(0!=(d-3230714880|h))return c*Ur*Ur;if(v<=g-p)return c*Ur*Ur}return g=function(e,r,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=e&cr|0)>>20)-z|0,c=0,s>1071644672&&(i=C(0,((c=e+(_r>>l+1)>>>0)&~(Nr>>(l=((c&cr)>>20)-z|0)))>>>0),c=(c&Nr|_r)>>20-l>>>0,e<0&&(c=-c),r-=i),e=fr(e=O(f=1-((f=(a=.6931471824645996*(i=ur(i=n+r,0)))+(o=(n-(i-r))*Ar+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(e+=c<<20>>>0)>>20<=0?mr(f,c):C(f,e)}(d,p,v),c*g}var Fr=Math.ceil;function jr(e){return e<0?Fr(e):ne(e)}function Tr(n,t){var i;if(e(n)||e(t))return NaN;if(0===t)return 0;if(0===n)return-1;if(n<0&&t%2==0&&(n=-n),n>0){if((r(t*(n-1))<.5||r(t)<.2)&&(i=re(n)*t)<.5)return function(r){var n,t,i,a,o,u,f,c,s,l,p,v,y;if(r===Y||e(r))return r;if(r===q)return-1;if(0===r)return r;if(r<0?(i=!0,c=-r):(i=!1,c=r),c>=38.816242111356935){if(i)return-1;if(c>=709.782712893384)return Y}if(u=0|O(c),c>.34657359027997264)c<1.0397207708399179?i?(a=r+B,o=-D,y=-1):(a=r-B,o=D,y=1):(y=i?J*r-.5:J*r+.5,a=r-(p=y|=0)*B,o=p*D),l=a-(r=a-o)-o;else{if(u<1016070144)return r;y=0}return f=1+(s=r*(n=.5*r))*function(e){return 0===e?-.03333333333333313:e*(.0015873015872548146+e*(e*(4008217827329362e-21+-2.0109921818362437e-7*e)-793650757867488e-19))-.03333333333333313}(s),v=s*((f-(p=3-f*n))/(6-r*p)),0===y?r-(r*v-s):(t=X(z+y<<20,0),v=r*(v-l)-l,v-=s,-1===y?.5*(r-v)-.5:1===y?r<-.25?-2*(v-(r+.5)):1+2*(r-v):y<=-2||y>56?(c=1-(v-r),1024===y?c=C(c,a=O(c)+(y<<20)|0):c*=t,c-1):(p=1,y<20?c=(p=C(p,a=1072693248-(2097152>>y)|0))-(v-r):(c=r-(v+(p=C(p,a=z-y<<20|0))),c+=1),c*=t))}(i)}else if(jr(t)!==t)return NaN;return Sr(n,t)-1}var Or=1.4426950408889634,Vr=1/(1<<28);function $r(r){var n;return e(r)||r===Y?r:r===q?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Vr?1+r:function(e,r,n){var t,i,a,o;return mr(1-(r-(t=e-r)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(r-.6931471803691238*(n=jr(r<0?Or*r-.5:Or*r+.5)),1.9082149292705877e-10*n,n)}function Gr(e,r){var n,t,i,a;return i=(a=e*e)*a,t=a*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(a),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-e*r))}var Hr=-.16666666666666632;function Wr(e,r){var n,t,i;return n=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*e,0===r?e+t*(Hr+i*n):e-(i*(.5*r-t*n)-r-t*Hr)}var Cr=!0===S?0:1,Lr=new w(1),Pr=new v(Lr.buffer);function Mr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Rr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Zr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xr=16777216,Yr=5.960464477539063e-8,qr=Mr(20),zr=Mr(20),Br=Mr(20),Dr=Mr(20);function Jr(e,r,n,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Yr*h|0,Dr[v]=h-Xr*s|0,h=t[d-1]+s,d-=1;if(h=mr(h,i),h-=8*ne(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Dr[n-1]>>24-i,Dr[n-1]-=v<<24-i,l=Dr[n-1]>>23-i):0===i?l=Dr[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=Dr[v],0===c?0!==d&&(c=1,Dr[v]=16777216-d):Dr[v]=16777215-d;if(i>0)switch(i){case 1:Dr[n-1]&=8388607;break;case 2:Dr[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=mr(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Dr[v];if(0===d){for(y=1;0===Dr[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=Rr[o+v],s=0,d=0;d<=u;d++)s+=e[d]*f[u+(v-d)];t[v]=s}return Jr(e,r,n+=y,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===Dr[n];)n-=1,i-=24;else(h=mr(h,-i))>=Xr?(s=Yr*h|0,Dr[n]=h-Xr*s|0,i+=24,Dr[n+=1]=s):Dr[n]=0|h;for(s=mr(1,i),v=n;v>=0;v--)t[v]=s*Dr[v],s*=Yr;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Zr[y]*t[v+y];Br[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Br[v];for(r[0]=0===l?s:-s,s=Br[0]-s,v=1;v<=n;v++)s+=Br[v];return r[1]=0===l?s:-s,7&g}function Kr(e,r,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)qr[f]=c<0?0:Rr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=e[c]*qr[o+(f-c)];zr[f]=i}return Jr(e,r,4,zr,u,4,a,o,qr)}var Qr=Math.round;function en(e,r,n){var t,i,a,o,u;return a=e-1.5707963267341256*(t=Qr(.6366197723675814*e)),o=6077100506506192e-26*t,u=r>>20|0,n[0]=a-o,u-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var rn=1.5707963267341256,nn=6077100506506192e-26,tn=2*nn,an=3*nn,on=4*nn,un=[0,0,0],fn=[0,0];function cn(e,r){var n,t,i,a,o,u,f;if((i=O(e)&cr|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(i&Nr)?en(e,i,r):i<=1073928572?e>0?(f=e-rn,r[0]=f-nn,r[1]=f-r[0]-nn,1):(f=e+rn,r[0]=f+nn,r[1]=f-r[0]+nn,-1):e>0?(f=e-2*rn,r[0]=f-tn,r[1]=f-r[0]-tn,2):(f=e+2*rn,r[0]=f+tn,r[1]=f-r[0]+tn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?en(e,i,r):e>0?(f=e-3*rn,r[0]=f-an,r[1]=f-r[0]-an,3):(f=e+3*rn,r[0]=f+an,r[1]=f-r[0]+an,-3):1075388923===i?en(e,i,r):e>0?(f=e-4*rn,r[0]=f-on,r[1]=f-r[0]-on,4):(f=e+4*rn,r[0]=f+on,r[1]=f-r[0]+on,-4);if(i<1094263291)return en(e,i,r);if(i>=hr)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Lr[0]=e,Pr[Cr]}(e),f=X(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)un[o]=0|f,f=16777216*(f-un[o]);for(un[2]=f,a=3;0===un[a-1];)a-=1;return u=Kr(un,fn,t,a),e<0?(r[0]=-fn[0],r[1]=-fn[1],-u):(r[0]=fn[0],r[1]=fn[1],u)}var sn=[0,0];function ln(e){var r;if(r=O(e),(r&=cr)<=1072243195)return r<1045430272?e:Wr(e,0);if(r>=hr)return NaN;switch(3&cn(e,sn)){case 0:return Wr(sn[0],sn[1]);case 1:return Gr(sn[0],sn[1]);case 2:return-Wr(sn[0],sn[1]);default:return-Gr(sn[0],sn[1])}}var pn=3.141592653589793;function vn(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=$r(e),2.5066282746310007*(n=e>143.01608?(t=Sr(e,.5*e-.25))*(t/n):Sr(e,e-.5)/n)*r}function yn(e,r){return r/((1+.5772156649015329*e)*e)}function gn(n){var t,i,a,o;if(te(n)&&n<0||n===q||e(n))return NaN;if(0===n)return function(e){return 0===e&&1/e===q}(n)?q:Y;if(n>171.61447887182297)return Y;if(n<-170.5674972726612)return 0;if((i=r(n))>33)return n>=0?vn(n):(t=0==(1&(a=ne(i)))?-1:1,(o=i-a)>.5&&(o=i-(a+=1)),o=i*ln(pn*o),t*pn/(r(o)*vn(i)));for(o=1;n>=3;)o*=n-=1;for(;n<0;){if(n>-1e-9)return yn(n,o);o/=n,n+=1}for(;n<2;){if(n<1e-9)return yn(n,o);o/=n,n+=1}return 2===n?o:o*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(n-=2)}var dn=[0,0];function hn(e){var r;if(r=O(e),(r&=2147483647)<=1072243195)return r<1044381696?1:Gr(e,0);if(r>=2146435072)return NaN;switch(3&cn(e,dn)){case 0:return Gr(dn[0],dn[1]);case 1:return-Wr(dn[0],dn[1]);case 2:return-Gr(dn[0],dn[1]);default:return Wr(dn[0],dn[1])}}function wn(n){var t,i;return e(n)||oe(n)?NaN:0===(t=r(i=n%2))||1===t?lr(0,i):t<.25?ln(pn*i):t<.75?lr(hn(pn*(t=.5-t)),i):t<1.25?(i=lr(1,i)-i,ln(pn*i)):t<1.75?-lr(hn(pn*(t-=1.5)),i):(i-=lr(2,i),ln(pn*i))}var bn=1.4616321449683622,mn=1.4616321449683622,An=6.283185307179586,Nn=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],_n=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],En=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];function xn(n){var t,i,a,o,u,f,c,s,l;if(e(n))return NaN;if(1===n)return NaN;if(n>=56)return 1;if(te(n)&&(o=0|n)===n){if(!(o<0))return 0==(1&o)?_n[o/2]:Nn[(o-3)/2];if(0==(1&(a=0|-o)))return 0;if((f=(a+1)/2|0)<=129)return-En[f]/(a+1)}return r(n)<1.4901161193847656e-8?-.5-.9189385332046728*n:(i=1-n,n<0?ne(n/2)===n/2?0:(t=n,n=i,i=t,n>170?(t=2*wn(.5*i)*xn(n),u=function(n){var t,i,a,o,u,f,c,s,l,p,v,y,g;if(e(n)||oe(n))return n;if(0===n)return Y;if(n<0?(t=!0,n=-n):t=!1,n<8470329472543003e-37)return-re(n);if(t){if(n>=4503599627370496)return Y;if(0===(l=wn(n)))return Y;i=re(pn/r(l*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(g=-re(n),n>=bn-1+.27?(v=1-n,a=0):n>=bn-1-.27?(v=n-(mn-1),a=1):(v=n,a=2)):(g=0,n>=bn+.27?(v=2-n,a=0):n>=bn-.27?(v=n-mn,a=1):(v=n-1,a=2)),a){case 0:f=.07721566490153287+(y=v*v)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(y),u=y*(.3224670334241136+y*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(y)),g+=(c=v*f+u)-.5*v;break;case 1:f=.48383612272381005+(p=(y=v*v)*v)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(p),u=p*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(p)-.1475877229945939,o=.06462494023913339+p*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(p),g+=(c=y*f-(-3638676997039505e-33-p*(u+v*o)))-.12148629053584961;break;case 2:f=v*(v*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(v)-.07721566490153287),u=1+v*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(v),g+=-.5*v+f/u}else if(n<8)switch(c=(v=n-(a=jr(n)))*(v*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(v)-.07721566490153287),s=1+v*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(v),g=.5*v+c/s,y=1,a){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:g+=re(y*=v+2)}else n<0x400000000000000?(l=re(n),p=.4189385332046727+(y=1/n)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(v=y*y),g=(n-.5)*(l-1)+p):g=n*(re(n)-1);return t&&(g=i-g),g}(n),(u-=n*re(An))>709?t<0?q:Y:t*$r(u)):2*wn(.5*i)*Sr(An,-n)*gn(n)*xn(n)):n<1?(t=0===(c=i)?.2433929443359375:((c<0?-c:c)<=1?(s=.2433929443359375+c*(c*(.055761621477604675+c*(c*(.0004515345286457964+-9332412703570615e-21*c)-.003209124988790859))-.4909247051635357),l=1+c*(c*(.04196762233099861+c*(c*(.00024978985622317937+-10185578841856403e-21*c)-.00413421406552171))-.27996033431034445)):(s=(c=1/c)*(.0004515345286457964+c*(c*(.055761621477604675+c*(.2433929443359375*c-.4909247051635357))-.003209124988790859))-9332412703570615e-21,l=c*(.00024978985622317937+c*(c*(.04196762233099861+c*(1*c-.27996033431034445))-.00413421406552171))-10185578841856403e-21),s/l),t-=1.2433929443359375,t+=i,t/=i):n<=2?(t=1/(i=-i))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(i):n<=4?(t=.6986598968505859+1/-i)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(n-2):n<=7?(t=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(n-4),1+$r(t)):n<15?(t=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(n-7),1+$r(t)):n<36?(t=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(n-15),1+$r(t)):1+Sr(2,-n))}return function(r){return e(r)?NaN:1===r?Ar:-Tr(2,1-r)*xn(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).eta=r();
//# sourceMappingURL=index.js.map
