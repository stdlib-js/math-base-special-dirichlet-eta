// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return e!=e}var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(e){return e===r||e===n}function i(e){return Math.abs(e)}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol:void 0,s="function"==typeof c?c.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return u.call(e);n=e[s],a=s,r=null!=(i=e)&&f.call(i,a);try{e[s]=void 0}catch(r){return u.call(e)}return t=u.call(e),r?e[s]=n:delete e[s],t}:function(e){return u.call(e)},p="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var e,r,n;if("function"!=typeof v)return!1;try{r=new v(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(p&&n instanceof Uint32Array||"[object Uint32Array]"===l(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")};var y,d=a,h="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;y=function(){var e,r,n;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,NaN]),n=r,e=(h&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?b:function(){throw new Error("not implemented")};var m,N=y,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var e,r,n;if("function"!=typeof _)return!1;try{r=new _(r=[1,3.14,-3.14,256,257]),n=r,e=(A&&n instanceof Uint8Array||"[object Uint8Array]"===l(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?E:function(){throw new Error("not implemented")};var x,U=m,S="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var e,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,65536,65537]),n=r,e=(S&&n instanceof Uint16Array||"[object Uint16Array]"===l(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?I:function(){throw new Error("not implemented")};var F,j={uint16:x,uint8:U};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new N(1),$=new d(V.buffer);function G(e){return V[0]=e,$[O]}var H,W,C=!0===T?1:0,L=new N(1),P=new d(L.buffer);function M(e,r){return L[0]=e,P[C]=r>>>0,L[0]}!0===T?(H=1,W=0):(H=0,W=1);var R={HIGH:H,LOW:W},Z=new N(1),X=new d(Z.buffer),Y=R.HIGH,q=R.LOW;function z(e,r){return X[Y]=e,X[q]=r,Z[0]}var B=1023,D=.34657359027997264,J=709.782712893384,K=.6931471803691238,Q=1.9082149292705877e-10,ee=1.4426950408889634,re=38.816242111356935,ne=1.0397207708399179,te=.6931471803691238,ie=1.9082149292705877e-10,ae=0x40000000000000,oe=.3333333333333333,ue=1048575,fe=2146435072,ce=1048576,se=1072693248;function le(r){var t,i,a,o,u,f,c,s,l,p,v,g;return 0===r?n:e(r)||r<0?NaN:(u=0,(i=G(r))<ce&&(u-=54,i=G(r*=ae)),i>=fe?r+r:(u+=(i>>20)-B|0,u+=(s=614244+(i&=ue)&1048576|0)>>20|0,c=(r=M(r,i|s^se))-1,(ue&2+i)<3?0===c?0===u?0:u*te+u*ie:(f=c*c*(.5-oe*c),0===u?c-f:u*te-(f-u*ie-c)):(s=i-398458|0,l=440401-i|0,o=(v=(g=(p=c/(2+c))*p)*g)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(v),a=g*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(v),f=a+o,(s|=l)>0?(t=.5*c*c,0===u?c-(t-p*(t+f)):u*te-(t-(p*(t+f)+u*ie)-c)):0===u?c-p*(c-f):u*te-(p*(c-f)-u*ie-c))))}var pe=Math.floor;function ve(e){return pe(e)===e}function ge(e){return ve(e/2)}function ye(e){return ge(e>0?e-1:e+1)}var de=Math.sqrt,he="function"==typeof Object.defineProperty?Object.defineProperty:null,we=Object.defineProperty;function be(e){return"number"==typeof e}function me(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function Ne(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+me(i):me(i)+e,t&&(e="-"+e)),e}var Ae=String.prototype.toLowerCase,_e=String.prototype.toUpperCase;function Ee(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!be(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=Ne(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=Ne(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===_e.call(e.specifier)?_e.call(n):Ae.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var xe=Math.abs,Ue=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,ke=String.prototype.replace,Ie=/e\+(\d)$/,Fe=/e-(\d)$/,je=/^(\d+)$/,Te=/^(\d+)e/,Oe=/\.0$/,Ve=/\.0*e/,$e=/(\..*[^0])0*e/;function Ge(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!be(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":xe(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=ke.call(n,$e,"$1e"),n=ke.call(n,Ve,"e"),n=ke.call(n,Oe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=ke.call(n,Ie,"e+0$1"),n=ke.call(n,Fe,"e-0$1"),e.alternate&&(n=ke.call(n,je,"$1."),n=ke.call(n,Te,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Se.call(e.specifier)?Se.call(n):Ue.call(n)}function He(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var We=String.fromCharCode,Ce=Array.isArray;function Le(e){return e!=e}function Pe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Me(e){var r,n,t,i,a,o,u,f,c,s,l,p,v;if(!Ce(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,f=0;f<e.length;f++)if("string"==typeof(t=e[f]))o+=t;else{if(r=void 0!==t.precision,!(t=Pe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Le(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Le(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Ee(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Le(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Le(a)?String(t.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ge(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ne(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+He(v):He(v)+s)),o+=t.arg||"",u+=1}return o}var Re=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Xe(e){var r,n,t,i;for(n=[],i=0,t=Re.exec(e);t;)(r=e.slice(i,Re.lastIndex-t[0].length)).length&&n.push(r),n.push(Ze(t)),i=Re.lastIndex,t=Re.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function Ye(e){var r,n;if("string"!=typeof e)throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Xe(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return Me.apply(null,r)}var qe,ze,Be=Object.prototype,De=Be.toString,Je=Be.__defineGetter__,Ke=Be.__defineSetter__,Qe=Be.__lookupGetter__,er=Be.__lookupSetter__,rr=function(){try{return he({},"x",{}),!0}catch(e){return!1}}()?we:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===De.call(e))throw new TypeError(Ye("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===De.call(n))throw new TypeError(Ye("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Qe.call(e,r)||er.call(e,r)?(t=e.__proto__,e.__proto__=Be,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Je&&Je.call(e,r,n.get),o&&Ke&&Ke.call(e,r,n.set),e};function nr(e,r,n){rr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(qe=1,ze=0):(qe=0,ze=1);var tr={HIGH:qe,LOW:ze},ir=new N(1),ar=new d(ir.buffer),or=tr.HIGH,ur=tr.LOW;function fr(e,r,n,t){return ir[0]=e,r[t]=ar[or],r[t+n]=ar[ur],r}function cr(e){return fr(e,[0,0],1,0)}nr(cr,"assign",fr);var sr=!0===T?0:1,lr=new N(1),pr=new d(lr.buffer);function vr(e,r){return lr[0]=e,pr[sr]=r>>>0,lr[0]}function gr(e){return 0|e}var yr=2147483647,dr=2147483648,hr=[0,0];function wr(e,r){var n,t;return cr.assign(e,hr,1,0),n=hr[0],n&=yr,t=G(r),z(n|=t&=dr,hr[1])}var br=1072693247,mr=1e300,Nr=1e-300,Ar=1048575,_r=1048576,Er=1072693248,xr=536870912,Ur=524288,Sr=20,kr=9007199254740992,Ir=.9617966939259756,Fr=.9617967009544373,jr=-7.028461650952758e-9,Tr=[1,1.5],Or=[0,.5849624872207642],Vr=[0,1.350039202129749e-8],$r=1.4426950408889634,Gr=1.4426950216293335,Hr=1.9259629911266175e-8,Wr=1023,Cr=-1023,Lr=-1074,Pr=22250738585072014e-324,Mr=4503599627370496;function Rr(r,n,a,o){return e(r)||t(r)?(n[o]=r,n[o+a]=0,n):0!==r&&i(r)<Pr?(n[o]=r*Mr,n[o+a]=-52,n):(n[o]=r,n[o+a]=0,n)}nr((function(e){return Rr(e,[0,0],1,0)}),"assign",Rr);var Zr=2146435072,Xr=2220446049250313e-31,Yr=2148532223,qr=[0,0],zr=[0,0];function Br(i,a){var o,u;return 0===a||0===i||e(i)||t(i)?i:(Rr(i,qr,1,0),i=qr[0],a+=qr[1],a+=function(e){var r=G(e);return(r=(r&Zr)>>>20)-B|0}(i),a<Lr?wr(0,i):a>Wr?i<0?n:r:(a<=Cr?(a+=52,u=Xr):u=1,cr.assign(i,zr,1,0),o=zr[0],o&=Yr,u*z(o|=a+B<<20,zr[1])))}var Dr=.6931471805599453,Jr=1048575,Kr=1048576,Qr=1071644672,en=20,rn=.6931471824645996,nn=-1.904654299957768e-9,tn=1072693247,an=1105199104,on=1139802112,un=1083179008,fn=1072693248,cn=1083231232,sn=3230714880,ln=31,pn=1e300,vn=1e-300,gn=8008566259537294e-32,yn=[0,0],dn=[0,0];function hn(a,o){var u,f,c,s,l,p,v,g,y,d,h,w,b,m;if(e(a)||e(o))return NaN;if(cr.assign(o,yn,1,0),l=yn[0],0===yn[1]){if(0===o)return 1;if(1===o)return a;if(-1===o)return 1/a;if(.5===o)return de(a);if(-.5===o)return 1/de(a);if(2===o)return a*a;if(3===o)return a*a*a;if(4===o)return(a*=a)*a;if(t(o))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:i(e)<1==(n===r)?0:r}(a,o)}if(cr.assign(a,yn,1,0),s=yn[0],0===yn[1]){if(0===s)return function(e,t){return t===n?r:t===r?0:t>0?ye(t)?e:0:ye(t)?wr(r,e):r}(a,o);if(1===a)return 1;if(-1===a&&ye(o))return-1;if(t(a))return a===n?hn(-0,-o):o<0?0:r}if(a<0&&!1===ve(o))return(a-a)/(a-a);if(c=i(a),u=s&yr|0,f=l&yr|0,v=l>>>ln|0,p=(p=s>>>ln|0)&&ye(o)?-1:1,f>an){if(f>on)return function(e,r){return(G(e)&yr)<=br?r<0?mr*mr:Nr*Nr:r>0?mr*mr:Nr*Nr}(a,o);if(u<tn)return 1===v?p*pn*pn:p*vn*vn;if(u>fn)return 0===v?p*pn*pn:p*vn*vn;h=function(e,r){var n,t,i,a,o,u,f;return a=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Hr-a*$r)-((t=vr(t=(o=Gr*i)+u,0))-o),e[0]=t,e[1]=n,e}(dn,c)}else h=function(e,r,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<_r&&(m-=53,n=G(r*=kr)),m+=(n>>Sr)-B|0,n=(N=n&Ar|0)|Er|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=_r),o=vr(i=(w=(r=M(r,n))-(c=Tr[A]))*(b=1/(r+c)),0),t=(n>>1|xr)+Ur,f=M(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=vr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(r-(f-c))))*(o+i)),0),l=vr(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Fr*l,y=(v=jr*l+(b-(l-w))*Ir+Vr[A])-((g=vr(g=p+v+(s=Or[A])+(d=m),0))-d-s-p),e[0]=g,e[1]=y,e}(dn,c,u);if(w=(d=(o-(g=vr(o,0)))*h[0]+o*h[1])+(y=g*h[0]),cr.assign(w,yn,1,0),b=gr(yn[0]),m=gr(yn[1]),b>=un){if(0!=(b-un|m))return p*pn*pn;if(d+gn>w-y)return p*pn*pn}else if((b&yr)>=cn){if(0!=(b-sn|m))return p*vn*vn;if(d<=w-y)return p*vn*vn}return w=function(e,r,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=e&yr|0)>>en)-B|0,c=0,s>Qr&&(i=M(0,((c=e+(Kr>>l+1)>>>0)&~(Jr>>(l=((c&yr)>>en)-B|0)))>>>0),c=(c&Jr|Kr)>>en-l>>>0,e<0&&(c=-c),r-=i),e=gr(e=G(f=1-((f=(a=(i=vr(i=n+r,0))*rn)+(o=(n-(i-r))*Dr+i*nn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(e+=c<<en>>>0)>>en<=0?Br(f,c):M(f,e)}(b,y,d),p*w}var wn=Math.ceil;function bn(e){return e<0?wn(e):pe(e)}function mn(a,o){var u,f;if(e(a)||e(o))return NaN;if(0===o)return 0;if(0===a)return-1;if(a<0&&o%2==0&&(a=-a),a>0){if((i(o*(a-1))<.5||i(o)<.2)&&(f=le(a)*o)<.5)return function(t){var i,a,o,u,f,c,s,l,p,v,g,y,d;if(t===r||e(t))return t;if(t===n)return-1;if(0===t)return t;if(t<0?(o=!0,l=-t):(o=!1,l=t),l>=re){if(o)return-1;if(l>=J)return r}if(c=0|G(l),l>D)l<ne?o?(u=t+K,f=-Q,d=-1):(u=t-K,f=Q,d=1):(d=o?ee*t-.5:ee*t+.5,u=t-(g=d|=0)*K,f=g*Q),v=u-(t=u-f)-f;else{if(c<1016070144)return t;d=0}return s=1+(p=t*(i=.5*t))*function(e){return 0===e?-.03333333333333313:e*(.0015873015872548146+e*(e*(4008217827329362e-21+-2.0109921818362437e-7*e)-793650757867488e-19))-.03333333333333313}(p),y=p*((s-(g=3-s*i))/(6-t*g)),0===d?t-(t*y-p):(a=z(B+d<<20,0),y=t*(y-v)-v,y-=p,-1===d?.5*(t-y)-.5:1===d?t<-.25?-2*(y-(t+.5)):1+2*(t-y):d<=-2||d>56?(l=1-(y-t),1024===d?l=M(l,u=G(l)+(d<<20)|0):l*=a,l-1):(g=1,d<20?l=(g=M(g,u=1072693248-(2097152>>d)|0))-(y-t):(l=t-(y+(g=M(g,u=B-d<<20|0))),l+=1),l*=a))}(f)}else if(bn(o)!==o)return NaN;return t(u=hn(a,o)-1)||e(u)?NaN:u}var Nn=.6931471803691238,An=1.9082149292705877e-10,_n=1.4426950408889634,En=709.782712893384,xn=-745.1332191019411,Un=1/(1<<28),Sn=-Un;function kn(t){var i;return e(t)||t===r?t:t===n?0:t>En?r:t<xn?0:t>Sn&&t<Un?1+t:function(e,r,n){var t,i,a,o;return Br(1-(r-(t=e-r)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(t-(i=bn(t<0?_n*t-.5:_n*t+.5))*Nn,i*An,i)}function In(e,r){var n,t,i,a;return i=(a=e*e)*a,t=a*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(a),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-e*r))}var Fn=-.16666666666666632,jn=.00833333333332249,Tn=-.0001984126982985795,On=27557313707070068e-22,Vn=-2.5050760253406863e-8,$n=1.58969099521155e-10;function Gn(e,r){var n,t,i;return n=jn+(i=e*e)*(Tn+i*On)+i*(i*i)*(Vn+i*$n),t=i*e,0===r?e+t*(Fn+i*n):e-(i*(.5*r-t*n)-r-t*Fn)}var Hn=!0===T?0:1,Wn=new N(1),Cn=new d(Wn.buffer);function Ln(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Pn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Rn=16777216,Zn=5.960464477539063e-8,Xn=Ln(20),Yn=Ln(20),qn=Ln(20),zn=Ln(20);function Bn(e,r,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Zn*h|0,zn[v]=h-Rn*s|0,h=t[d-1]+s,d-=1;if(h=Br(h,i),h-=8*pe(.125*h),h-=y=0|h,l=0,i>0?(y+=v=zn[n-1]>>24-i,zn[n-1]-=v<<24-i,l=zn[n-1]>>23-i):0===i?l=zn[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=zn[v],0===c?0!==d&&(c=1,zn[v]=16777216-d):zn[v]=16777215-d;if(i>0)switch(i){case 1:zn[n-1]&=8388607;break;case 2:zn[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Br(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=zn[v];if(0===d){for(g=1;0===zn[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=Pn[o+v],s=0,d=0;d<=u;d++)s+=e[d]*f[u+(v-d)];t[v]=s}return Bn(e,r,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===zn[n];)n-=1,i-=24;else(h=Br(h,-i))>=Rn?(s=Zn*h|0,zn[n]=h-Rn*s|0,i+=24,zn[n+=1]=s):zn[n]=0|h;for(s=Br(1,i),v=n;v>=0;v--)t[v]=s*zn[v],s*=Zn;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=Mn[g]*t[v+g];qn[n-v]=s}for(s=0,v=n;v>=0;v--)s+=qn[v];for(r[0]=0===l?s:-s,s=qn[0]-s,v=1;v<=n;v++)s+=qn[v];return r[1]=0===l?s:-s,7&y}function Dn(e,r,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Xn[f]=c<0?0:Pn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=e[c]*Xn[o+(f-c)];Yn[f]=i}return Bn(e,r,4,Yn,u,4,a,o,Xn)}var Jn=Math.round,Kn=.6366197723675814,Qn=1.5707963267341256,et=6077100506506192e-26,rt=6077100506303966e-26,nt=20222662487959506e-37,tt=20222662487111665e-37,it=84784276603689e-45,at=2047;function ot(e,r,n){var t,i,a,o,u;return a=e-(t=Jn(e*Kn))*Qn,o=t*et,u=r>>20|0,n[0]=a-o,u-(G(n[0])>>20&at)>16&&(o=t*nt-((i=a)-(a=i-(o=t*rt))-o),n[0]=a-o,u-(G(n[0])>>20&at)>49&&(o=t*it-((i=a)-(a=i-(o=t*tt))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ut=0,ft=16777216,ct=1.5707963267341256,st=6077100506506192e-26,lt=2*st,pt=3*st,vt=4*st,gt=598523,yt=1072243195,dt=1073928572,ht=1074752122,wt=1074977148,bt=1075183036,mt=1075388923,Nt=1075594811,At=1094263291,_t=[0,0,0],Et=[0,0];function xt(e,r){var n,t,i,a,o,u,f;if((i=G(e)&yr|0)<=yt)return r[0]=e,r[1]=0,0;if(i<=ht)return(i&Jr)===gt?ot(e,i,r):i<=dt?e>0?(f=e-ct,r[0]=f-st,r[1]=f-r[0]-st,1):(f=e+ct,r[0]=f+st,r[1]=f-r[0]+st,-1):e>0?(f=e-2*ct,r[0]=f-lt,r[1]=f-r[0]-lt,2):(f=e+2*ct,r[0]=f+lt,r[1]=f-r[0]+lt,-2);if(i<=Nt)return i<=bt?i===wt?ot(e,i,r):e>0?(f=e-3*ct,r[0]=f-pt,r[1]=f-r[0]-pt,3):(f=e+3*ct,r[0]=f+pt,r[1]=f-r[0]+pt,-3):i===mt?ot(e,i,r):e>0?(f=e-4*ct,r[0]=f-vt,r[1]=f-r[0]-vt,4):(f=e+4*ct,r[0]=f+vt,r[1]=f-r[0]+vt,-4);if(i<At)return ot(e,i,r);if(i>=Zr)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Wn[0]=e,Cn[Hn]}(e),f=z(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)_t[o]=0|f,f=(f-_t[o])*ft;for(_t[2]=f,a=3;_t[a-1]===ut;)a-=1;return u=Dn(_t,Et,t,a),e<0?(r[0]=-Et[0],r[1]=-Et[1],-u):(r[0]=Et[0],r[1]=Et[1],u)}var Ut=1072243195,St=1045430272,kt=[0,0];function It(e){var r;if(r=G(e),(r&=yr)<=Ut)return r<St?e:Gn(e,0);if(r>=Zr)return NaN;switch(3&xt(e,kt)){case 0:return Gn(kt[0],kt[1]);case 1:return In(kt[0],kt[1]);case 2:return-Gn(kt[0],kt[1]);default:return-In(kt[0],kt[1])}}var Ft=3.141592653589793,jt=2.5066282746310007,Tt=143.01608;function Ot(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=kn(e),n=e>Tt?(t=hn(e,.5*e-.25))*(t/n):hn(e,e-.5)/n,jt*n*r}var Vt=.5772156649015329;function $t(e,r){return r/((1+Vt*e)*e)}function Gt(t){var a,o,u,f;if(ve(t)&&t<0||t===n||e(t))return NaN;if(0===t)return function(e){return 0===e&&1/e===n}(t)?n:r;if(t>171.61447887182297)return r;if(t<-170.5674972726612)return 0;if((o=i(t))>33)return t>=0?Ot(t):(a=0==(1&(u=pe(o)))?-1:1,(f=o-u)>.5&&(f=o-(u+=1)),f=o*It(Ft*f),a*Ft/(i(f)*Ot(o)));for(f=1;t>=3;)f*=t-=1;for(;t<0;){if(t>-1e-9)return $t(t,f);f/=t,t+=1}for(;t<2;){if(t<1e-9)return $t(t,f);f/=t,t+=1}return 2===t?f:f*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(t-=2)}var Ht=[0,0],Wt=2147483647,Ct=1072243195,Lt=1044381696,Pt=2146435072;function Mt(e){var r;if(r=G(e),(r&=Wt)<=Ct)return r<Lt?1:In(e,0);if(r>=Pt)return NaN;switch(3&xt(e,Ht)){case 0:return In(Ht[0],Ht[1]);case 1:return-Gn(Ht[0],Ht[1]);case 2:return-In(Ht[0],Ht[1]);default:return Gn(Ht[0],Ht[1])}}var Rt=.07721566490153287,Zt=.3224670334241136,Xt=1,Yt=-.07721566490153287,qt=.48383612272381005,zt=-.1475877229945939,Bt=.06462494023913339,Dt=-.07721566490153287,Jt=1,Kt=.4189385332046727,Qt=1.4616321449683622,ei=4503599627370496,ri=0x400000000000000,ni=8470329472543003e-37,ti=1.4616321449683622,ii=-.12148629053584961,ai=-3638676997039505e-33;function oi(n){var a,o,u,f,c,s,l,p,v,g,y,d,h;if(e(n)||t(n))return n;if(0===n)return r;if(n<0?(a=!0,n=-n):a=!1,n<ni)return-le(n);if(a){if(n>=ei)return r;if(v=function(r){var n,a;return e(r)||t(r)?NaN:0===(n=i(a=r%2))||1===n?wr(0,a):n<.25?It(Ft*a):n<.75?wr(Mt(Ft*(n=.5-n)),a):n<1.25?(a=wr(1,a)-a,It(Ft*a)):n<1.75?-wr(Mt(Ft*(n-=1.5)),a):(a-=wr(2,a),It(Ft*a))}(n),0===v)return r;o=le(Ft/i(v*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(h=-le(n),n>=Qt-1+.27?(y=1-n,u=0):n>=Qt-1-.27?(y=n-(ti-1),u=1):(y=n,u=2)):(h=0,n>=Qt+.27?(y=2-n,u=0):n>=Qt-.27?(y=n-ti,u=1):(y=n-1,u=2)),u){case 0:s=Rt+(d=y*y)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(d),c=d*(Zt+d*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(d)),h+=(l=y*s+c)-.5*y;break;case 1:s=qt+(g=(d=y*y)*y)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(g),c=zt+g*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(g),f=Bt+g*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(g),h+=ii+(l=d*s-(ai-g*(c+y*f)));break;case 2:s=y*(Dt+y*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(y)),c=Jt+y*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(y),h+=-.5*y+s/c}else if(n<8)switch(l=(y=n-(u=bn(n)))*(Yt+y*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(y)),p=Xt+y*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(y),h=.5*y+l/p,d=1,u){case 7:d*=y+6;case 6:d*=y+5;case 5:d*=y+4;case 4:d*=y+3;case 3:h+=le(d*=y+2)}else n<ri?(v=le(n),g=Kt+(d=1/n)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(y=d*d),h=(n-.5)*(v-1)+g):h=n*(le(n)-1);return a&&(h=o-h),h}function ui(r){var n,a;return e(r)||t(r)?NaN:0===(n=i(a=r%2))||1===n?wr(0,a):n<.25?It(Ft*a):n<.75?wr(Mt(Ft*(n=.5-n)),a):n<1.25?(a=wr(1,a)-a,It(Ft*a)):n<1.75?-wr(Mt(Ft*(n-=1.5)),a):(a-=wr(2,a),It(Ft*a))}var fi=6.283185307179586,ci=1.4901161193847656e-8,si=.9189385332046728,li=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],pi=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],vi=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],gi=129,yi=170,di=709,hi=1.2433929443359375,wi=.6986598968505859;function bi(t){var a,o,u,f,c,s,l,p,v;if(e(t))return NaN;if(1===t)return NaN;if(t>=56)return 1;if(ve(t)&&(f=0|t)===t){if(!(f<0))return 0==(1&f)?pi[f/2]:li[(f-3)/2];if(0==(1&(u=0|-f)))return 0;if((s=(u+1)/2|0)<=gi)return-vi[s]/(u+1)}return i(t)<ci?-.5-si*t:(o=1-t,t<0?pe(t/2)===t/2?0:(a=t,t=o,o=a,t>yi?(a=2*ui(.5*o)*bi(t),c=oi(t),(c-=t*le(fi))>di?a<0?n:r:a*kn(c)):2*ui(.5*o)*hn(fi,-t)*Gt(t)*bi(t)):t<1?(a=0===(l=o)?.2433929443359375:((l<0?-l:l)<=1?(p=.2433929443359375+l*(l*(.055761621477604675+l*(l*(.0004515345286457964+-9332412703570615e-21*l)-.003209124988790859))-.4909247051635357),v=1+l*(l*(.04196762233099861+l*(l*(.00024978985622317937+-10185578841856403e-21*l)-.00413421406552171))-.27996033431034445)):(p=(l=1/l)*(.0004515345286457964+l*(l*(.055761621477604675+l*(.2433929443359375*l-.4909247051635357))-.003209124988790859))-9332412703570615e-21,v=l*(.00024978985622317937+l*(l*(.04196762233099861+l*(1*l-.27996033431034445))-.00413421406552171))-10185578841856403e-21),p/v),a-=hi,a+=o,a/=o):t<=2?(a=1/(o=-o))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(o):t<=4?(a=wi+1/-o)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(t-2):t<=7?(a=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(t-4),1+kn(a)):t<15?(a=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(t-7),1+kn(a)):t<36?(a=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(t-15),1+kn(a)):1+hn(2,-t))}return function(r){return e(r)?NaN:1===r?Dr:-mn(2,1-r)*bi(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).eta=r();
//# sourceMappingURL=index.js.map
