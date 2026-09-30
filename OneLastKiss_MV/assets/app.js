(()=>{var Lc="169";var kf=0,Fh=1,Hf=2;var Ou=1,Vf=2,Kn=3,_i=0,Ht=1,Ze=2,xi=0,nn=1,it=2,Oh=3,Bh=4,Dc=5,Bi=100,Gf=101,Wf=102,Xf=103,qf=104,Yf=200,Nc=201,$f=202,Zf=203,vl=204,lr=205,Kf=206,Jf=207,Qf=208,jf=209,ep=210,tp=211,np=212,ip=213,sp=214,xl=0,_l=1,yl=2,Es=3,Ml=4,bl=5,Sl=6,Tl=7,Bu=0,rp=1,op=2,Dn=0,ap=1,lp=2,cp=3,hp=4,up=5,dp=6,fp=7;var zu=300,As=301,Rs=302,wl=303,El=304,Ho=306,cr=1e3,Qn=1001,Al=1002,tn=1003,pp=1004;var Or=1005;var kt=1006,Ha=1007;var ki=1008;var ti=1009,ku=1010,Hu=1011,hr=1012,Fc=1013,Hi=1014,Ln=1015,qi=1016,Oc=1017,Bc=1018,Cs=1020,Vu=35902,Gu=1021,Wu=1022,hn=1023,Xu=1024,qu=1025,Ss=1026,Ps=1027,zc=1028,kc=1029,Yu=1030,Hc=1031;var Vc=1033,uo=33776,fo=33777,po=33778,mo=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Ul=36196,Ll=37492,Dl=37496,Nl=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,kl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,go=36492,Zl=36494,Kl=36495,$u=36283,Jl=36284,Ql=36285,jl=36286;var xo=2300,ec=2301,Va=2302,zh=2400,kh=2401,Hh=2402;var mp=3200,gp=3201;var vp=0,xp=1,en="",jt="srgb",Fn="srgb-linear",Gc="display-p3",Vo="display-p3-linear",_o="linear",mt="srgb",yo="rec709",Mo="p3";var is=7680;var Vh=519,_p=512,yp=513,Mp=514,Zu=515,bp=516,Sp=517,Tp=518,wp=519,tc=35044;var Gh="300 es",jn=2e3,bo=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,rr=Math.PI/180,ur=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function Ep(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ap(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(Wc(i,e*2)-e)}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lp(i,e){return i+Math.random()*(e-i)}function Dp(i){return i*(.5-Math.random())}function Np(i){i!==void 0&&(Wh=i);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fp(i){return i*rr}function Op(i){return i*ur}function Bp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ku={DEG2RAD:rr,RAD2DEG:ur,generateUUID:ei,clamp:Yt,euclideanModulo:Wc,mapLinear:Ep,inverseLerp:Ap,lerp:or,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Ip,randInt:Up,randFloat:Lp,randFloatSpread:Dp,seededRandom:Np,degToRad:Fp,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:zp,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Hp,normalize:ct,denormalize:An},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],x=s[0],f=s[3],p=s[6],T=s[1],M=s[4],S=s[7],w=s[2],A=s[5],R=s[8];return r[0]=o*x+a*T+l*w,r[3]=o*f+a*M+l*A,r[6]=o*p+a*S+l*R,r[1]=c*x+h*T+d*w,r[4]=c*f+h*M+d*A,r[7]=c*p+h*S+d*R,r[2]=u*x+m*T+g*w,r[5]=u*f+m*M+g*A,r[8]=u*p+m*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=t*d+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ga=new Be;function Ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vp(){let i=So("canvas");return i.style.display="block",i}var Xh={};function vo(i){i in Xh||(Xh[i]=!0,console.warn(i))}function Gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var qh=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[Fn]:{transfer:_o,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[jt]:{transfer:mt,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:_o,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Yh),fromReference:i=>i.applyMatrix3(qh)},[Gc]:{transfer:mt,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yh),fromReference:i=>i.applyMatrix3(qh).convertLinearToSRGB()}},qp=new Set([Fn,Vo]),ot={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=$s[e].toReference,s=$s[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $s[i].primaries},getTransfer:function(i){return i===en?_o:$s[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray($s[e].luminanceCoefficients)}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,nc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=So("canvas")),ss.width=e.width,ss.height=e.height;let n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yp=0,To=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $p=0,Vt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=kt,o=ki,a=hn,l=ti,c=i.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ei(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=zu;Vt.DEFAULT_ANISOTROPY=1;var Ke=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],x=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,S=(m+1)/2,w=(p+1)/2,A=(h+u)/4,R=(d+x)/4,C=(g+f)/4;return M>S&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=C/r),this.set(n,s,r,t),this}let T=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(d-x)/T,this.z=(u-h)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wo=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==m||h!==g){let f=1-a,p=l*u+c*m+h*g+d*x,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let w=Math.sqrt(M),A=Math.atan2(w,p*T);f=Math.sin(f*A)/w,a=Math.sin(a*A)/w}let S=a*T;if(l=l*f+u*S,c=c*f+m*S,h=h*f+g*S,d=d*f+x*S,f===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-a*m,e[t+2]=c*g+h*m+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new I,$h=new Mi,ni=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),zr.subVectors(this.max,Zs),rs.subVectors(e.a,Zs),os.subVectors(e.b,Zs),as.subVectors(e.c,Zs),ui.subVectors(os,rs),di.subVectors(as,os),Ii.subVectors(rs,as);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!Ya(t,rs,os,as,zr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,rs,os,as,zr))?!1:(kr.crossVectors(ui,di),t=[kr.x,kr.y,kr.z],Ya(t,rs,os,as,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Br=new ni,rs=new I,os=new I,as=new I,ui=new I,di=new I,Ii=new I,Zs=new I,zr=new I,kr=new I,Ui=new I;function Ya(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);let a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zp=new ni,Ks=new I,$a=new I,bi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add($a)),this.expandByPoint(Ks.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new I,Za=new I,Hr=new I,fi=new I,Ka=new I,Vr=new I,Ja=new I,Eo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Za);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=fi.dot(this.direction),l=-fi.dot(Hr),c=fi.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Za).addScaledVector(Hr,u),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){Ka.subVectors(t,e),Vr.subVectors(n,e),Ja.crossVectors(Ka,Vr);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(fi,Vr));if(l<0)return null;let c=a*this.direction.dot(Ka.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(Ja);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,u,m,g,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,m,g,x,f)}set(e,t,n,s,r,o,a,l,c,h,d,u,m,g,x,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,m=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,g=c*h,x=c*d;t[0]=u+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,g=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,Jp)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),Gr.crossVectors(ln,pi),s[0]=pi.x,s[4]=Gr.x,s[8]=ln.x,s[1]=pi.y,s[5]=Gr.y,s[9]=ln.y,s[2]=pi.z,s[6]=Gr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],x=n[6],f=n[10],p=n[14],T=n[3],M=n[7],S=n[11],w=n[15],A=s[0],R=s[4],C=s[8],k=s[12],v=s[1],_=s[5],D=s[9],F=s[13],H=s[2],q=s[6],V=s[10],j=s[14],W=s[3],ue=s[7],fe=s[11],Se=s[15];return r[0]=o*A+a*v+l*H+c*W,r[4]=o*R+a*_+l*q+c*ue,r[8]=o*C+a*D+l*V+c*fe,r[12]=o*k+a*F+l*j+c*Se,r[1]=h*A+d*v+u*H+m*W,r[5]=h*R+d*_+u*q+m*ue,r[9]=h*C+d*D+u*V+m*fe,r[13]=h*k+d*F+u*j+m*Se,r[2]=g*A+x*v+f*H+p*W,r[6]=g*R+x*_+f*q+p*ue,r[10]=g*C+x*D+f*V+p*fe,r[14]=g*k+x*F+f*j+p*Se,r[3]=T*A+M*v+S*H+w*W,r[7]=T*R+M*_+S*q+w*ue,r[11]=T*C+M*D+S*V+w*fe,r[15]=T*k+M*F+S*j+w*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],x=e[7],f=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*m-n*l*m)+x*(+t*l*m-t*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+f*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],x=e[13],f=e[14],p=e[15],T=d*f*c-x*u*c+x*l*m-a*f*m-d*l*p+a*u*p,M=g*u*c-h*f*c-g*l*m+o*f*m+h*l*p-o*u*p,S=h*x*c-g*d*c+g*a*m-o*x*m-h*a*p+o*d*p,w=g*d*l-h*x*l-g*a*u+o*x*u+h*a*f-o*d*f,A=t*T+n*M+s*S+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=T*R,e[1]=(x*u*r-d*f*r-x*s*m+n*f*m+d*s*p-n*u*p)*R,e[2]=(a*f*r-x*l*r+x*s*c-n*f*c-a*s*p+n*l*p)*R,e[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*m-n*l*m)*R,e[4]=M*R,e[5]=(h*f*r-g*u*r+g*s*m-t*f*m-h*s*p+t*u*p)*R,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*p-t*l*p)*R,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*m+t*l*m)*R,e[8]=S*R,e[9]=(g*d*r-h*x*r-g*n*m+t*x*m+h*n*p-t*d*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*R,e[12]=w*R,e[13]=(h*x*s-g*d*s+g*n*u-t*x*u-h*n*f+t*d*f)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*f-t*a*f)*R,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*u+t*a*u)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,g=r*d,x=o*h,f=o*d,p=a*d,T=l*c,M=l*h,S=l*d,w=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*w,s[1]=(m+S)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(u+p))*A,s[6]=(f+T)*A,s[7]=0,s[8]=(g+M)*R,s[9]=(f-T)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);let c=1/r,h=1/o,d=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),m,g;if(a===jn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*c,m=(n+s)*h,g,x;if(a===jn)g=(o+r)*d,x=-2*d;else if(a===bo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ls=new I,wn=new vt,Kp=new I(0,0,0),Jp=new I(1,1,1),pi=new I,Gr=new I,ln=new I,Zh=new vt,Kh=new Mi,ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qp=0,Jh=new I,cs=new Mi,Yn=new vt,Wr=new I,Js=new I,jp=new I,e0=new Mi,Qh=new I(1,0,0),jh=new I(0,1,0),eu=new I(0,0,1),tu={type:"added"},t0={type:"removed"},hs={type:"childadded",child:null},Qa={type:"childremoved",child:null},$t=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new ii,n=new Mi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Js,Wr,this.up):Yn.lookAt(Wr,Js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Yn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};$t.DEFAULT_UP=new I(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new I,$n=new I,ja=new I,Zn=new I,us=new I,ds=new I,nu=new I,el=new I,tl=new I,nl=new I,il=new Ke,sl=new Ke,rl=new Ke,vi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),$n.subVectors(n,t),ja.subVectors(e,t);let o=En.dot(En),a=En.dot($n),l=En.dot(ja),c=$n.dot($n),h=$n.dot(ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),ds.subVectors(r,n),el.subVectors(e,n);let l=us.dot(el),c=ds.dot(el);if(l<=0&&c<=0)return t.copy(n);tl.subVectors(e,s);let h=us.dot(tl),d=ds.dot(tl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(us,o);nl.subVectors(e,r);let m=us.dot(nl),g=ds.dot(nl);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ds,a);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return nu.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(nu,a);let p=1/(f+x+u);return o=x*p,a=u*p,t.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Wc(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=jt){ot.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Xr);let n=or(mi.h,Xr.h,t),s=or(mi.s,Xr.s,t),r=or(mi.l,Xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Me;Me.NAMES=Qu;var n0=0,Si=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=nn,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=lr,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nn&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yt=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new I,qr=new ge,Ce=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Ro=class extends Ce{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Co=class extends Ce{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends Ce{constructor(e,t,n){super(new Float32Array(e),t,n)}},i0=0,pn=new vt,al=new $t,fs=new I,cn=new ni,Qs=new ni,Pt=new I,Je=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?Co:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,Qs.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,Qs.max),cn.expandByPoint(Pt)):(cn.expandByPoint(Qs.min),cn.expandByPoint(Qs.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Pt.add(fs)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,d=new I,u=new ge,m=new ge,g=new ge,x=new I,f=new I;function p(C,k,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),m.sub(u),g.sub(u);let _=1/(m.x*g.y-g.x*m.y);isFinite(_)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(_),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(_),a[C].add(x),a[k].add(x),a[v].add(x),l[C].add(f),l[k].add(f),l[v].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,k=T.length;C<k;++C){let v=T[C],_=v.start,D=v.count;for(let F=_,H=_+D;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new I,S=new I,w=new I,A=new I;function R(C){w.fromBufferAttribute(s,C),A.copy(w);let k=a[C];M.copy(k),M.sub(w.multiplyScalar(w.dot(k))).normalize(),S.crossVectors(A,k);let _=S.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,_)}for(let C=0,k=T.length;C<k;++C){let v=T[C],_=v.start,D=v.count;for(let F=_,H=_+D;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[m++]}return new Ce(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new vt,Li=new Eo,Yr=new bi,su=new I,$r=new I,Zr=new I,Kr=new I,ll=new I,Jr=new I,ru=new I,Qr=new I,de=class extends $t{constructor(e=new Je,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ll.fromBufferAttribute(d,e),o?Jr.addScaledVector(ll,h):Jr.addScaledVector(ll.sub(t),h))}t.add(Jr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Yr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Yr,su)===null||Li.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),Li.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let f=u[g],p=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=T,w=M;S<w;S+=3){let A=a.getX(S),R=a.getX(S+1),C=a.getX(S+2);s=jr(this,p,e,n,c,h,d,A,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let T=a.getX(f),M=a.getX(f+1),S=a.getX(f+2);s=jr(this,o,e,n,c,h,d,T,M,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let f=u[g],p=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=T,w=M;S<w;S+=3){let A=S,R=S+1,C=S+2;s=jr(this,p,e,n,c,h,d,A,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let T=f,M=f+1,S=f+2;s=jr(this,o,e,n,c,h,d,T,M,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function s0(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:i}}function jr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,$r),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Kr);let h=s0(i,e,t,n,$r,Zr,Kr,ru);if(h){let d=new I;vi.getBarycoord(ru,$r,Zr,Kr,d),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,d,new ge)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,d,new ge)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};vi.getNormal($r,Zr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var dr=class i extends Je{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(x,f,p,T,M,S,w,A,R,C,k){let v=S/R,_=w/C,D=S/2,F=w/2,H=A/2,q=R+1,V=C+1,j=0,W=0,ue=new I;for(let fe=0;fe<V;fe++){let Se=fe*_-F;for(let tt=0;tt<q;tt++){let at=tt*v-D;ue[x]=at*T,ue[f]=Se*M,ue[p]=H,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[f]=0,ue[p]=A>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(tt/R),d.push(1-fe/C),j+=1}}for(let fe=0;fe<C;fe++)for(let Se=0;Se<R;Se++){let tt=u+Se+q*fe,at=u+Se+q*(fe+1),X=u+(Se+1)+q*(fe+1),te=u+(Se+1)+q*fe;l.push(tt,at,te),l.push(at,X,te),W+=6}a.addGroup(m,W,k),m+=W,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function r0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var o0={clone:Is,merge:qt},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Po=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new I,ou=new ge,au=new ge,Ft=class extends Po{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ps=-90,ms=1,rc=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(ps,ms,e,t);s.layers=this.layers,this.add(s);let r=new Ft(ps,ms,e,t);r.layers=this.layers,this.add(r);let o=new Ft(ps,ms,e,t);o.layers=this.layers,this.add(o);let a=new Ft(ps,ms,e,t);a.layers=this.layers,this.add(a);let l=new Ft(ps,ms,e,t);l.layers=this.layers,this.add(l);let c=new Ft(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Io=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dr(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:xi});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=kt),new rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},cl=new I,c0=new I,h0=new Be,Jn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cl.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h0.getNormalMatrix(e),s=this.coplanarPoint(cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new bi,eo=new I,Uo=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],g=s[9],x=s[10],f=s[11],p=s[12],T=s[13],M=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,f-m,S-p).normalize(),n[1].setComponents(l+r,u+c,f+m,S+p).normalize(),n[2].setComponents(l+o,u+h,f+g,S+T).normalize(),n[3].setComponents(l-o,u-h,f-g,S-T).normalize(),n[4].setComponents(l-a,u-d,f-x,S-M).normalize(),t===jn)n[5].setComponents(l+a,u+d,f+x,S+M).normalize();else if(t===bo)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function u0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let x=d[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ze=class i extends Je{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,m=[],g=[],x=[],f=[];for(let p=0;p<h;p++){let T=p*u-o;for(let M=0;M<c;M++){let S=M*d-r;g.push(S,-T,0),x.push(0,0,1),f.push(M/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let M=T+c*p,S=T+c*(p+1),w=T+1+c*(p+1),A=T+1+c*p;m.push(M,S,A),m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:_0,batching_pars_vertex:y0,batching_vertex:M0,begin_vertex:b0,beginnormal_vertex:S0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:E0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:I0,color_pars_fragment:U0,color_pars_vertex:L0,color_vertex:D0,common:N0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:sm,envmap_vertex:$0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:dm,lights_fragment_end:fm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:vm,map_fragment:xm,map_pars_fragment:_m,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:Tm,morphcolor_vertex:wm,morphnormal_vertex:Em,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Um,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:Zm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:jm,skinnormal_vertex:eg,specularmap_fragment:tg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:hg,background_vert:ug,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:vg,depth_frag:xg,distanceRGBA_vert:_g,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:bg,linedashed_vert:Sg,linedashed_frag:Tg,meshbasic_vert:wg,meshbasic_frag:Eg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Ug,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:zg,points_frag:kg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Un={basic:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:qt([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:qt([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:qt([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:qt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:qt([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var to={r:0,b:0,g:0},Ni=new ii,Xg=new vt;function qg(i,e,t,n,s,r,o){let a=new Me(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function x(T){let M=!1,S=g(T);S===null?p(a,l):S&&S.isColor&&(p(S,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,M){let S=g(M);S&&(S.isCubeTexture||S.mapping===Ho)?(h===void 0&&(h=new de(new dr(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Is(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(M.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Ni)),h.material.toneMapped=ot.getTransfer(S.colorSpace)!==mt,(d!==S||u!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new de(new ze(2,2),new Ee({name:"BackgroundMaterial",uniforms:Is(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(to,ju(i)),n.buffers.color.setClear(to.r,to.g,to.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:f}}function Yg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(v,_,D,F,H){let q=!1,V=d(F,D,_);r!==V&&(r=V,c(r.object)),q=m(v,F,D,H),q&&g(v,F,D,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(v,_,D,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,_,D){let F=D.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let q=H[_.id];q===void 0&&(q={},H[_.id]=q);let V=q[F];return V===void 0&&(V=u(l()),q[F]=V),V}function u(v){let _=[],D=[],F=[];for(let H=0;H<t;H++)_[H]=0,D[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:D,attributeDivisors:F,object:v,attributes:{},index:null}}function m(v,_,D,F){let H=r.attributes,q=_.attributes,V=0,j=D.getAttributes();for(let W in j)if(j[W].location>=0){let fe=H[W],Se=q[W];if(Se===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(v,_,D,F){let H={},q=_.attributes,V=0,j=D.getAttributes();for(let W in j)if(j[W].location>=0){let fe=q[W];fe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),H[W]=Se,V++}r.attributes=H,r.attributesNum=V,r.index=F}function x(){let v=r.newAttributes;for(let _=0,D=v.length;_<D;_++)v[_]=0}function f(v){p(v,0)}function p(v,_){let D=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;D[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),H[v]!==_&&(i.vertexAttribDivisor(v,_),H[v]=_)}function T(){let v=r.newAttributes,_=r.enabledAttributes;for(let D=0,F=_.length;D<F;D++)_[D]!==v[D]&&(i.disableVertexAttribArray(D),_[D]=0)}function M(v,_,D,F,H,q,V){V===!0?i.vertexAttribIPointer(v,_,D,H,q):i.vertexAttribPointer(v,_,D,F,H,q)}function S(v,_,D,F){x();let H=F.attributes,q=D.getAttributes(),V=_.defaultAttributeValues;for(let j in q){let W=q[j];if(W.location>=0){let ue=H[j];if(ue===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){let fe=ue.normalized,Se=ue.itemSize,tt=e.get(ue);if(tt===void 0)continue;let at=tt.buffer,X=tt.type,te=tt.bytesPerElement,ye=X===i.INT||X===i.UNSIGNED_INT||ue.gpuType===Fc;if(ue.isInterleavedBufferAttribute){let pe=ue.data,Fe=pe.stride,Pe=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)p(W.location+qe,pe.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let qe=0;qe<W.locationSize;qe++)f(W.location+qe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let qe=0;qe<W.locationSize;qe++)M(W.location+qe,Se/W.locationSize,X,fe,Fe*te,(Pe+Se/W.locationSize*qe)*te,ye)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)p(W.location+pe,ue.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<W.locationSize;pe++)f(W.location+pe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let pe=0;pe<W.locationSize;pe++)M(W.location+pe,Se/W.locationSize,X,fe,Se*te,Se/W.locationSize*pe*te,ye)}}else if(V!==void 0){let fe=V[j];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(W.location,fe);break;case 3:i.vertexAttrib3fv(W.location,fe);break;case 4:i.vertexAttrib4fv(W.location,fe);break;default:i.vertexAttrib1fv(W.location,fe)}}}}T()}function w(){C();for(let v in n){let _=n[v];for(let D in _){let F=_[D];for(let H in F)h(F[H].object),delete F[H];delete _[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let _=n[v.id];for(let D in _){let F=_[D];for(let H in F)h(F[H].object),delete F[H];delete _[D]}delete n[v.id]}function R(v){for(let _ in n){let D=n[_];if(D[v.id]===void 0)continue;let F=D[v.id];for(let H in F)h(F[H].object),delete F[H];delete D[v.id]}}function C(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:f,disableUnusedAttributes:T}}function $g(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,n,1)}function l(c,h,d,u){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)t.update(g,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:w,maxSamples:A}}function Kg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Jn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let T=r?0:n,M=T*4,S=p.clippingState||null;l.value=S,S=h(g,u,M,m);for(let w=0;w!==M;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){let x=d!==null?d.length:0,f=null;if(x!==0){if(f=l.value,g!==!0||f===null){let p=m+x*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,S=m;M!==x;++M,S+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Jg(i){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=As:a===El&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===El)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vi=class extends Po{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bs=4,lu=[.125,.215,.35,.446,.526,.582],zi=20,hl=new Vi,cu=new Me,ul=null,dl=0,fl=0,pl=!1,Oi=(1+Math.sqrt(5))/2,gs=1/Oi,hu=[new I(-Oi,gs,0),new I(Oi,gs,0),new I(-gs,0,Oi),new I(gs,0,Oi),new I(0,Oi,-gs),new I(0,Oi,gs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:qi,format:hn,colorSpace:Fn,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=jg(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,s){let a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(cu),h.toneMapping=Dn,h.autoClear=!1;let m=new yt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new de(new dr,m),x=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(cu),x=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;no(s,T*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new de(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):zi;f>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zi}`);let p=[],T=0;for(let R=0;R<zi;++R){let C=R/x,k=Math.exp(-C*C/2);p.push(k),R===0?T+=k:R<f&&(T+=2*k)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;let S=this._sizeLods[s],w=3*S*(s>M-bs?s-M+bs:0),A=4*(this._cubeSize-S);no(t,w,A,3*S,2*S),l.setRenderTarget(t),l.render(d,hl)}};function Qg(i){let e=[],t=[],n=[],s=i,r=i-bs+1+lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-bs?l=lu[o-i+bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,f=2,p=1,T=new Float32Array(x*g*m),M=new Float32Array(f*g*m),S=new Float32Array(p*g*m);for(let A=0;A<m;A++){let R=A%3*2/3-1,C=A>2?0:-1,k=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];T.set(k,x*g*A),M.set(u,f*g*A);let v=[A,A,A,A,A,A];S.set(v,p*g*A)}let w=new Je;w.setAttribute("position",new Ce(T,x)),w.setAttribute("uv",new Ce(M,f)),w.setAttribute("faceIndex",new Ce(S,p)),e.push(w),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jg(i,e,t){let n=new Float32Array(zi),s=new I(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function du(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function fu(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wl||l===El,h=l===As||l===Rs;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Lo(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Lo(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nv(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let x=m[g];for(let f=0,p=x.length;f<p;f++)e.update(x[f],i.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,g=d.attributes.position,x=0;if(m!==null){let T=m.array;x=m.version;for(let M=0,S=T.length;M<S;M+=3){let w=T[M+0],A=T[M+1],R=T[M+2];u.push(w,A,A,R,R,w)}}else if(g!==void 0){let T=g.array;x=g.version;for(let M=0,S=T.length/3-1;M<S;M+=3){let w=M+0,A=M+1,R=M+2;u.push(w,A,A,R,R,w)}}else return;let f=new(Ju(u)?Co:Ro)(u,1);f.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,f)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function iv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*o),t.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*o,g),t.update(m,n,g))}function h(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];t.update(f,n,1)}function d(u,m,g,x){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)c(u[p]/o,m[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=m[T];for(let T=0;T<x.length;T++)t.update(p,n,x[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rv(i,e,t){let n=new WeakMap,s=new Ke;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let k=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let S=a.attributes.position.count*M,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*w*4*d),R=new wo(A,S,w,d);R.type=Ln,R.needsUpdate=!0;let C=M*4;for(let v=0;v<d;v++){let _=f[v],D=p[v],F=T[v],H=S*w*4*v;for(let q=0;q<_.count;q++){let V=q*C;m===!0&&(s.fromBufferAttribute(_,q),A[H+V+0]=s.x,A[H+V+1]=s.y,A[H+V+2]=s.z,A[H+V+3]=0),g===!0&&(s.fromBufferAttribute(D,q),A[H+V+4]=s.x,A[H+V+5]=s.y,A[H+V+6]=s.z,A[H+V+7]=0),x===!0&&(s.fromBufferAttribute(F,q),A[H+V+8]=s.x,A[H+V+9]=s.y,A[H+V+10]=s.z,A[H+V+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ge(S,w)},n.set(a,u),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ov(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Do=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h=Ss){if(h!==Ss&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Hi),n===void 0&&h===Ps&&(n=Cs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new Vt,pu=new Do(1,1),nd=new wo,id=new sc,sd=new Io,mu=[],gu=[],vu=new Float32Array(16),xu=new Float32Array(9),_u=new Float32Array(4);function Ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),At(t,n)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),At(t,n)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),At(t,n)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=Zu,r=pu):r=td,t.setTexture2D(e||r,s)}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||id,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sd,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nd,s)}function Ev(i){switch(i){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return _v;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return wv}}function Av(i,e){i.uniform1fv(this.addr,e)}function Rv(i,e){let t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Cv(i,e){let t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Pv(i,e){let t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Iv(i,e){let t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lv(i,e){let t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dv(i,e){i.uniform1iv(this.addr,e)}function Nv(i,e){i.uniform2iv(this.addr,e)}function Fv(i,e){i.uniform3iv(this.addr,e)}function Ov(i,e){i.uniform4iv(this.addr,e)}function Bv(i,e){i.uniform1uiv(this.addr,e)}function zv(i,e){i.uniform2uiv(this.addr,e)}function kv(i,e){i.uniform3uiv(this.addr,e)}function Hv(i,e){i.uniform4uiv(this.addr,e)}function Vv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||td,r[o])}function Gv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function Wv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function Xv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function qv(i){switch(i){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Uv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return kv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qv(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function yu(i,e){i.seq.push(e),i.map[e.id]=e}function Yv(i,e,t){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),o=ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yu(t,c===void 0?new ac(a,i,e):new lc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new cc(a),yu(t,d)),t=d}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $v=37297,Zv=0;function Kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Jv(i){let e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i),n;switch(e===t?n="":e===Mo&&t===yo?n="LinearDisplayP3ToLinearSRGB":e===yo&&t===Mo&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Vo:return[n,"LinearTransferOETF"];case jt:case Gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Kv(i.getShaderSource(e),o)}else return s}function Qv(i,e){let t=Jv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jv(i,e){let t;switch(e){case ap:t="Linear";break;case lp:t="Reinhard";break;case cp:t="Cineon";break;case hp:t="ACESFilmic";break;case dp:t="AgX";break;case fp:t="Neutral";break;case up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var io=new I;function ex(){ot.getLuminanceCoefficients(io);let i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function nx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function Su(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(sx,ox)}var rx=new Map;function ox(i,e){let t=ke[e];if(t===void 0){let n=rx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}var ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(ax,lx)}function lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case rp:e="ENVMAP_BLENDING_MIX";break;case op:e="ENVMAP_BLENDING_ADD";break}return e}function fx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function px(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cx(t),c=hx(t),h=ux(t),d=dx(t),u=fx(t),m=tx(t),g=nx(r),x=s.createProgram(),f,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(f=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Dn?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=hc(o),o=Su(o,t),o=Tu(o,t),a=hc(a),a=Su(a,t),a=Tu(a,t),o=wu(o),a=wu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=T+f+o,S=T+p+a,w=Mu(s,s.VERTEX_SHADER,M),A=Mu(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(_){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(A).trim(),q=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{let j=bu(s,w,"vertex"),W=bu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+D+`
`+j+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||H==="")&&(V=!1);V&&(_.diagnostics={runnable:q,programLog:D,vertexShader:{log:F,prefix:f},fragmentShader:{log:H,prefix:p}})}s.deleteShader(w),s.deleteShader(A),C=new ws(s,x),k=ix(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let k;this.getAttributes=function(){return k===void 0&&R(this),k};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,$v)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}var mx=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dc(e),t.set(e,n)),n}},dc=class{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}};function gx(i,e,t,n,s,r,o){let a=new Ao,l=new uc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,_,D,F,H){let q=F.fog,V=H.geometry,j=v.isMeshStandardMaterial?F.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),ue=W&&W.mapping===Ho?W.image.height:null,fe=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let Se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=Se!==void 0?Se.length:0,at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let X,te,ye,pe;if(fe){let Qt=Un[fe];X=Qt.vertexShader,te=Qt.fragmentShader}else X=v.vertexShader,te=v.fragmentShader,l.update(v),ye=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);let Fe=i.getRenderTarget(),Pe=H.isInstancedMesh===!0,qe=H.isBatchedMesh===!0,ut=!!v.map,Ye=!!v.matcap,P=!!W,rn=!!v.aoMap,Ge=!!v.lightMap,je=!!v.bumpMap,Ue=!!v.normalMap,ft=!!v.displacementMap,Ne=!!v.emissiveMap,E=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,$=v.clearcoat>0,ee=v.dispersion>0,Y=v.iridescence>0,Te=v.sheen>0,re=v.transmission>0,me=O&&!!v.anisotropyMap,et=$&&!!v.clearcoatMap,ne=$&&!!v.clearcoatNormalMap,ve=$&&!!v.clearcoatRoughnessMap,Le=Y&&!!v.iridescenceMap,De=Y&&!!v.iridescenceThicknessMap,xe=Te&&!!v.sheenColorMap,We=Te&&!!v.sheenRoughnessMap,Oe=!!v.specularMap,dt=!!v.specularColorMap,U=!!v.specularIntensityMap,ce=re&&!!v.transmissionMap,G=re&&!!v.thicknessMap,K=!!v.gradientMap,ae=!!v.alphaMap,he=v.alphaTest>0,$e=!!v.alphaHash,Tt=!!v.extensions,Jt=Dn;v.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let nt={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:te,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:qe,batchingColor:qe&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Fn,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:Ye,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:ue,aoMap:rn,lightMap:Ge,bumpMap:je,normalMap:Ue,displacementMap:m&&ft,emissiveMap:Ne,normalMapObjectSpace:Ue&&v.normalMapType===xp,normalMapTangentSpace:Ue&&v.normalMapType===vp,metalnessMap:E,roughnessMap:y,anisotropy:O,anisotropyMap:me,clearcoat:$,clearcoatMap:et,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:Y,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:Te,sheenColorMap:xe,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:dt,specularIntensityMap:U,transmission:re,transmissionMap:ce,thicknessMap:G,gradientMap:K,opaque:v.transparent===!1&&v.blending===nn&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:$e,combine:v.combine,mapUv:ut&&f(v.map.channel),aoMapUv:rn&&f(v.aoMap.channel),lightMapUv:Ge&&f(v.lightMap.channel),bumpMapUv:je&&f(v.bumpMap.channel),normalMapUv:Ue&&f(v.normalMap.channel),displacementMapUv:ft&&f(v.displacementMap.channel),emissiveMapUv:Ne&&f(v.emissiveMap.channel),metalnessMapUv:E&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:me&&f(v.anisotropyMap.channel),clearcoatMapUv:et&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&f(v.sheenRoughnessMap.channel),specularMapUv:Oe&&f(v.specularMap.channel),specularColorMapUv:dt&&f(v.specularColorMap.channel),specularIntensityMapUv:U&&f(v.specularIntensityMap.channel),transmissionMapUv:ce&&f(v.transmissionMap.channel),thicknessMapUv:G&&f(v.thicknessMap.channel),alphaMapUv:ae&&f(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ue||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(ut||ae),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:at,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ze,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Tt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&v.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function T(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)_.push(D),_.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(_,v),S(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function M(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function S(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),v.push(a.mask)}function w(v){let _=x[v.type],D;if(_){let F=Un[_];D=o0.clone(F.uniforms)}else D=v.uniforms;return D}function A(v,_){let D;for(let F=0,H=h.length;F<H;F++){let q=h[F];if(q.cacheKey===_){D=q,++D.usedTimes;break}}return D===void 0&&(D=new px(i,_,v,r),h.push(D)),D}function R(v){if(--v.usedTimes===0){let _=h.indexOf(v);h[_]=h[h.length-1],h.pop(),v.destroy()}}function C(v){l.remove(v)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:w,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:k}}function vx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,m,g,x,f){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=f),e++,p}function a(d,u,m,g,x,f){let p=o(d,u,m,g,x,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function l(d,u,m,g,x,f){let p=o(d,u,m,g,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||xx),n.length>1&&n.sort(u||Au),s.length>1&&s.sort(u||Au)}function h(){for(let d=e,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function _x(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Me};break;case"SpotLight":t={position:new I,direction:new I,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Mx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tx(i){let e=new yx,t=Mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new vt,o=new vt;function a(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,x=0,f=0,p=0,T=0,M=0,S=0,w=0,A=0,R=0;c.sort(Sx);for(let k=0,v=c.length;k<v;k++){let _=c[k],D=_.color,F=_.intensity,H=_.distance,q=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=D.r*F,d+=D.g*F,u+=D.b*F;else if(_.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(_.sh.coefficients[V],F);R++}else if(_.isDirectionalLight){let V=e.get(_);if(V.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let j=_.shadow,W=t.get(_);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=_.shadow.matrix,T++}n.directional[m]=V,m++}else if(_.isSpotLight){let V=e.get(_);V.position.setFromMatrixPosition(_.matrixWorld),V.color.copy(D).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(_.angle),V.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),V.decay=_.decay,n.spot[x]=V;let j=_.shadow;if(_.map&&(n.spotLightMap[w]=_.map,w++,j.updateMatrices(_),_.castShadow&&A++),n.spotLightMatrix[x]=j.matrix,_.castShadow){let W=t.get(_);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=q,S++}x++}else if(_.isRectAreaLight){let V=e.get(_);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(_.width*.5,0,0),V.halfHeight.set(0,_.height*.5,0),n.rectArea[f]=V,f++}else if(_.isPointLight){let V=e.get(_);if(V.color.copy(_.color).multiplyScalar(_.intensity),V.distance=_.distance,V.decay=_.decay,_.castShadow){let j=_.shadow,W=t.get(_);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=_.shadow.matrix,M++}n.point[g]=V,g++}else if(_.isHemisphereLight){let V=e.get(_);V.skyColor.copy(_.color).multiplyScalar(F),V.groundColor.copy(_.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==f||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==M||C.numSpotShadows!==S||C.numSpotMaps!==w||C.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=m,C.pointLength=g,C.spotLength=x,C.rectAreaLength=f,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=M,C.numSpotShadows=S,C.numSpotMaps=w,C.numLightProbes=R,n.version=bx++)}function l(c,h){let d=0,u=0,m=0,g=0,x=0,f=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let M=c[p];if(M.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),d++}else if(M.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(M.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function Cu(i){let e=new Tx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cu(i),e.set(s,[a])):r>=o.length?(a=new Cu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var fc=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(i,e,t){let n=new Uo,s=new ge,r=new ge,o=new Ke,a=new fc({depthPacking:gp}),l=new pc,c={},h=t.maxTextureSize,d={[_i]:Ht,[Ht]:_i,[Ze]:Ze},u=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(A,R,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let k=i.getRenderTarget(),v=i.getActiveCubeFace(),_=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==Kn&&this.type===Kn,H=p===Kn&&this.type!==Kn;for(let q=0,V=A.length;q<V;q++){let j=A[q],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();if(s.multiply(ue),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||F===!0||H===!0){let Se=this.type!==Kn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(s.x,s.y,Se),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let fe=W.getViewportCount();for(let Se=0;Se<fe;Se++){let tt=W.getViewport(Se);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),D.viewport(o),W.updateMatrices(j,Se),n=W.getFrustum(),S(R,C,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&T(W,C),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(k,v,_)};function T(A,R){let C=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,u,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,m,x,null)}function M(A,R,C,k){let v=null,_=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(_!==void 0)v=_;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=v.uuid,F=R.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let q=H[F];q===void 0&&(q=v.clone(),H[F]=q,R.addEventListener("dispose",w)),v=q}if(v.visible=R.visible,v.wireframe=R.wireframe,k===Kn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=i.properties.get(v);D.light=C}return v}function S(A,R,C,k,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let F=e.update(A),H=A.material;if(Array.isArray(H)){let q=F.groups;for(let V=0,j=q.length;V<j;V++){let W=q[V],ue=H[W.materialIndex];if(ue&&ue.visible){let fe=M(A,ue,k,v);A.onBeforeShadow(i,A,R,C,F,fe,W),i.renderBufferDirect(C,null,F,fe,A,W),A.onAfterShadow(i,A,R,C,F,fe,W)}}}else if(H.visible){let q=M(A,H,k,v);A.onBeforeShadow(i,A,R,C,F,q,null),i.renderBufferDirect(C,null,F,q,A,null),A.onAfterShadow(i,A,R,C,F,q,null)}}let D=A.children;for(let F=0,H=D.length;F<H;F++)S(D[F],R,C,k,v)}function w(A){A.target.removeEventListener("dispose",w);for(let C in c){let k=c[C],v=A.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}var Cx={[xl]:_l,[yl]:Sl,[Ml]:Tl,[Es]:bl,[_l]:xl,[Sl]:yl,[Tl]:Ml,[bl]:Es};function Px(i){function e(){let U=!1,ce=new Ke,G=null,K=new Ke(0,0,0,0);return{setMask:function(ae){G!==ae&&!U&&(i.colorMask(ae,ae,ae,ae),G=ae)},setLocked:function(ae){U=ae},setClear:function(ae,he,$e,Tt,Jt){Jt===!0&&(ae*=Tt,he*=Tt,$e*=Tt),ce.set(ae,he,$e,Tt),K.equals(ce)===!1&&(i.clearColor(ae,he,$e,Tt),K.copy(ce))},reset:function(){U=!1,G=null,K.set(-1,0,0,0)}}}function t(){let U=!1,ce=!1,G=null,K=null,ae=null;return{setReversed:function(he){ce=he},setTest:function(he){he?ye(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(he){G!==he&&!U&&(i.depthMask(he),G=he)},setFunc:function(he){if(ce&&(he=Cx[he]),K!==he){switch(he){case xl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=he}},setLocked:function(he){U=he},setClear:function(he){ae!==he&&(i.clearDepth(he),ae=he)},reset:function(){U=!1,G=null,K=null,ae=null}}}function n(){let U=!1,ce=null,G=null,K=null,ae=null,he=null,$e=null,Tt=null,Jt=null;return{setTest:function(nt){U||(nt?ye(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,Qt,Wn){(G!==nt||K!==Qt||ae!==Wn)&&(i.stencilFunc(nt,Qt,Wn),G=nt,K=Qt,ae=Wn)},setOp:function(nt,Qt,Wn){(he!==nt||$e!==Qt||Tt!==Wn)&&(i.stencilOp(nt,Qt,Wn),he=nt,$e=Qt,Tt=Wn)},setLocked:function(nt){U=nt},setClear:function(nt){Jt!==nt&&(i.clearStencil(nt),Jt=nt)},reset:function(){U=!1,ce=null,G=null,K=null,ae=null,he=null,$e=null,Tt=null,Jt=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],m=null,g=!1,x=null,f=null,p=null,T=null,M=null,S=null,w=null,A=new Me(0,0,0),R=0,C=!1,k=null,v=null,_=null,D=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,V=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=V>=2);let W=null,ue={},fe=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),tt=new Ke().fromArray(fe),at=new Ke().fromArray(Se);function X(U,ce,G,K){let ae=new Uint8Array(4),he=i.createTexture();i.bindTexture(U,he),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<G;$e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return he}let te={};te[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),r.setFunc(Es),Ge(!1),je(Fh),ye(i.CULL_FACE),P(xi);function ye(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function pe(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Fe(U,ce){return h[U]!==ce?(i.bindFramebuffer(U,ce),h[U]=ce,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(U,ce){let G=u,K=!1;if(U){G=d.get(ce),G===void 0&&(G=[],d.set(ce,G));let ae=U.textures;if(G.length!==ae.length||G[0]!==i.COLOR_ATTACHMENT0){for(let he=0,$e=ae.length;he<$e;he++)G[he]=i.COLOR_ATTACHMENT0+he;G.length=ae.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function qe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let ut={[Bi]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};ut[Xf]=i.MIN,ut[qf]=i.MAX;let Ye={[Yf]:i.ZERO,[Nc]:i.ONE,[$f]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Kf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[lr]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,ce,G,K,ae,he,$e,Tt,Jt,nt){if(U===xi){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),U!==Dc){if(U!==x||nt!==C){if((f!==Bi||M!==Bi)&&(i.blendEquation(i.FUNC_ADD),f=Bi,M=Bi),nt)switch(U){case nn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case it:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case it:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,T=null,S=null,w=null,A.set(0,0,0),R=0,x=U,C=nt}return}ae=ae||ce,he=he||G,$e=$e||K,(ce!==f||ae!==M)&&(i.blendEquationSeparate(ut[ce],ut[ae]),f=ce,M=ae),(G!==p||K!==T||he!==S||$e!==w)&&(i.blendFuncSeparate(Ye[G],Ye[K],Ye[he],Ye[$e]),p=G,T=K,S=he,w=$e),(Tt.equals(A)===!1||Jt!==R)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Jt),A.copy(Tt),R=Jt),x=U,C=!1}function rn(U,ce){U.side===Ze?pe(i.CULL_FACE):ye(i.CULL_FACE);let G=U.side===Ht;ce&&(G=!G),Ge(G),U.blending===nn&&U.transparent===!1?P(xi):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){k!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),k=U)}function je(U){U!==kf?(ye(i.CULL_FACE),U!==v&&(U===Fh?i.cullFace(i.BACK):U===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),v=U}function Ue(U){U!==_&&(q&&i.lineWidth(U),_=U)}function ft(U,ce,G){U?(ye(i.POLYGON_OFFSET_FILL),(D!==ce||F!==G)&&(i.polygonOffset(ce,G),D=ce,F=G)):pe(i.POLYGON_OFFSET_FILL)}function Ne(U){U?ye(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+H-1),W!==U&&(i.activeTexture(U),W=U)}function y(U,ce,G){G===void 0&&(W===null?G=i.TEXTURE0+H-1:G=W);let K=ue[G];K===void 0&&(K={type:void 0,texture:void 0},ue[G]=K),(K.type!==U||K.texture!==ce)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(U,ce||te[U]),K.type=U,K.texture=ce)}function O(){let U=ue[W];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function xe(U){at.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function We(U,ce){let G=l.get(ce);G===void 0&&(G=new WeakMap,l.set(ce,G));let K=G.get(U);K===void 0&&(K=i.getUniformBlockIndex(ce,U.name),G.set(U,K))}function Oe(U,ce){let K=l.get(ce).get(U);a.get(ce)!==K&&(i.uniformBlockBinding(ce,K,U.__bindingPointIndex),a.set(ce,K))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ue={},h={},d=new WeakMap,u=[],m=null,g=!1,x=null,f=null,p=null,T=null,M=null,S=null,w=null,A=new Me(0,0,0),R=0,C=!1,k=null,v=null,_=null,D=null,F=null,tt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ye,disable:pe,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:qe,setBlending:P,setMaterial:rn,setFlipSided:Ge,setCullFace:je,setLineWidth:Ue,setPolygonOffset:ft,setScissorTest:Ne,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:et,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:re,compressedTexSubImage3D:me,scissor:De,viewport:xe,reset:dt}}function Pu(i,e,t,n){let s=Ix(n);switch(t){case Gu:return i*e;case Xu:return i*e;case qu:return i*e*2;case zc:return i*e/s.components*s.byteLength;case kc:return i*e/s.components*s.byteLength;case Yu:return i*e*2/s.components*s.byteLength;case Hc:return i*e*2/s.components*s.byteLength;case Wu:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Vc:return i*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Ul:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case go:case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $u:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ql:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(i){switch(i){case ti:case ku:return{byteLength:1,components:1};case hr:case Hu:case qi:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Hi:case Fc:case Ln:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ux(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return m?new OffscreenCanvas(E,y):So("canvas")}function x(E,y,O){let $=1,ee=Ne(E);if((ee.width>O||ee.height>O)&&($=O/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor($*ee.width),Te=Math.floor($*ee.height);d===void 0&&(d=g(Y,Te));let re=y?g(Y,Te):d;return re.width=Y,re.height=Te,re.getContext("2d").drawImage(E,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Te+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function f(E){return E.generateMipmaps&&E.minFilter!==tn&&E.minFilter!==kt}function p(E){i.generateMipmap(E)}function T(E,y,O,$,ee=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){let Te=ee?_o:ot.getTransfer($);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Te===mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,y){let O;return E?y===null||y===Hi||y===Cs?O=i.DEPTH24_STENCIL8:y===Ln?O=i.DEPTH32F_STENCIL8:y===hr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===Cs?O=i.DEPTH_COMPONENT24:y===Ln?O=i.DEPTH_COMPONENT32F:y===hr&&(O=i.DEPTH_COMPONENT16),O}function S(E,y){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==kt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){let y=E.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&h.delete(y)}function A(E){let y=E.target;y.removeEventListener("dispose",A),k(y)}function R(E){let y=n.get(E);if(y.__webglInit===void 0)return;let O=E.source,$=u.get(O);if($){let ee=$[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(E),Object.keys($).length===0&&u.delete(O)}n.remove(E)}function C(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let O=E.source,$=u.get(O);delete $[y.__cacheKey],o.memory.textures--}function k(E){let y=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let ee=0;ee<y.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=E.textures;for(let $=0,ee=O.length;$<ee;$++){let Y=n.get(O[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(E)}let v=0;function _(){v=0}function D(){let E=v;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),v+=1,E}function F(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function H(E,y){let O=n.get(E);if(E.isVideoTexture&&Ue(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(O,E,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function q(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){at(O,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function V(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){at(O,E,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function j(E,y){let O=n.get(E);if(E.version>0&&O.__version!==E.version){X(O,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let W={[cr]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},ue={[tn]:i.NEAREST,[pp]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},fe={[_p]:i.NEVER,[wp]:i.ALWAYS,[yp]:i.LESS,[Zu]:i.LEQUAL,[Mp]:i.EQUAL,[Tp]:i.GEQUAL,[bp]:i.GREATER,[Sp]:i.NOTEQUAL};function Se(E,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kt||y.magFilter===Ha||y.magFilter===Or||y.magFilter===ki||y.minFilter===kt||y.minFilter===Ha||y.minFilter===Or||y.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,W[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,W[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,W[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Or&&y.minFilter!==ki||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",w));let $=y.source,ee=u.get($);ee===void 0&&(ee={},u.set($,ee));let Y=F(y);if(Y!==E.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[Y].usedTimes++;let Te=ee[E.__cacheKey];Te!==void 0&&(ee[E.__cacheKey].usedTimes--,Te.usedTimes===0&&C(y)),E.__cacheKey=Y,E.__webglTexture=ee[Y].texture}return O}function at(E,y,O){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);let ee=tt(E,y),Y=y.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+O);let Te=n.get(Y);if(Y.version!==Te.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);let re=ot.getPrimaries(ot.workingColorSpace),me=y.colorSpace===en?null:ot.getPrimaries(y.colorSpace),et=y.colorSpace===en||re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ne=x(y.image,!1,s.maxTextureSize);ne=ft(y,ne);let ve=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),De=T(y.internalFormat,ve,Le,y.colorSpace,y.isVideoTexture);Se($,y);let xe,We=y.mipmaps,Oe=y.isVideoTexture!==!0,dt=Te.__version===void 0||ee===!0,U=Y.dataReady,ce=S(y,ne);if(y.isDepthTexture)De=M(y.format===Ps,y.type),dt&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,ve,Le,null));else if(y.isDataTexture)if(We.length>0){Oe&&dt&&t.texStorage2D(i.TEXTURE_2D,ce,De,We[0].width,We[0].height);for(let G=0,K=We.length;G<K;G++)xe=We[G],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,Le,xe.data):t.texImage2D(i.TEXTURE_2D,G,De,xe.width,xe.height,0,ve,Le,xe.data);y.generateMipmaps=!1}else Oe?(dt&&t.texStorage2D(i.TEXTURE_2D,ce,De,ne.width,ne.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Le,ne.data)):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,ve,Le,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,De,We[0].width,We[0].height,ne.depth);for(let G=0,K=We.length;G<K;G++)if(xe=We[G],y.format!==hn)if(ve!==null)if(Oe){if(U)if(y.layerUpdates.size>0){let ae=Pu(xe.width,xe.height,y.format,y.type);for(let he of y.layerUpdates){let $e=xe.data.subarray(he*ae/xe.data.BYTES_PER_ELEMENT,(he+1)*ae/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,he,xe.width,xe.height,1,ve,$e,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,ne.depth,ve,xe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,De,xe.width,xe.height,ne.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,xe.width,xe.height,ne.depth,ve,Le,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,De,xe.width,xe.height,ne.depth,0,ve,Le,xe.data)}else{Oe&&dt&&t.texStorage2D(i.TEXTURE_2D,ce,De,We[0].width,We[0].height);for(let G=0,K=We.length;G<K;G++)xe=We[G],y.format!==hn?ve!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,xe.width,xe.height,ve,Le,xe.data):t.texImage2D(i.TEXTURE_2D,G,De,xe.width,xe.height,0,ve,Le,xe.data)}else if(y.isDataArrayTexture)if(Oe){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,De,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){let G=Pu(ne.width,ne.height,y.format,y.type);for(let K of y.layerUpdates){let ae=ne.data.subarray(K*G/ne.data.BYTES_PER_ELEMENT,(K+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,ve,Le,ae)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Le,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,ve,Le,ne.data);else if(y.isData3DTexture)Oe?(dt&&t.texStorage3D(i.TEXTURE_3D,ce,De,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Le,ne.data)):t.texImage3D(i.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,ve,Le,ne.data);else if(y.isFramebufferTexture){if(dt)if(Oe)t.texStorage2D(i.TEXTURE_2D,ce,De,ne.width,ne.height);else{let G=ne.width,K=ne.height;for(let ae=0;ae<ce;ae++)t.texImage2D(i.TEXTURE_2D,ae,De,G,K,0,ve,Le,null),G>>=1,K>>=1}}else if(We.length>0){if(Oe&&dt){let G=Ne(We[0]);t.texStorage2D(i.TEXTURE_2D,ce,De,G.width,G.height)}for(let G=0,K=We.length;G<K;G++)xe=We[G],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ve,Le,xe):t.texImage2D(i.TEXTURE_2D,G,De,ve,Le,xe);y.generateMipmaps=!1}else if(Oe){if(dt){let G=Ne(ne);t.texStorage2D(i.TEXTURE_2D,ce,De,G.width,G.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Le,ne)}else t.texImage2D(i.TEXTURE_2D,0,De,ve,Le,ne);f(y)&&p($),Te.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function X(E,y,O){if(y.image.length!==6)return;let $=tt(E,y),ee=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let Y=n.get(ee);if(ee.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+O);let Te=ot.getPrimaries(ot.workingColorSpace),re=y.colorSpace===en?null:ot.getPrimaries(y.colorSpace),me=y.colorSpace===en||Te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let et=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let K=0;K<6;K++)!et&&!ne?ve[K]=x(y.image[K],!0,s.maxCubemapSize):ve[K]=ne?y.image[K].image:y.image[K],ve[K]=ft(y,ve[K]);let Le=ve[0],De=r.convert(y.format,y.colorSpace),xe=r.convert(y.type),We=T(y.internalFormat,De,xe,y.colorSpace),Oe=y.isVideoTexture!==!0,dt=Y.__version===void 0||$===!0,U=ee.dataReady,ce=S(y,Le);Se(i.TEXTURE_CUBE_MAP,y);let G;if(et){Oe&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,We,Le.width,Le.height);for(let K=0;K<6;K++){G=ve[K].mipmaps;for(let ae=0;ae<G.length;ae++){let he=G[ae];y.format!==hn?De!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,he.width,he.height,De,xe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,We,he.width,he.height,0,De,xe,he.data)}}}else{if(G=y.mipmaps,Oe&&dt){G.length>0&&ce++;let K=Ne(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,We,K.width,K.height)}for(let K=0;K<6;K++)if(ne){Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve[K].width,ve[K].height,De,xe,ve[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ve[K].width,ve[K].height,0,De,xe,ve[K].data);for(let ae=0;ae<G.length;ae++){let $e=G[ae].image[K].image;Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,$e.width,$e.height,De,xe,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,We,$e.width,$e.height,0,De,xe,$e.data)}}else{Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,xe,ve[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,De,xe,ve[K]);for(let ae=0;ae<G.length;ae++){let he=G[ae];Oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,De,xe,he.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,We,De,xe,he.image[K])}}}f(y)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function te(E,y,O,$,ee,Y){let Te=r.convert(O.format,O.colorSpace),re=r.convert(O.type),me=T(O.internalFormat,Te,re,O.colorSpace);if(!n.get(y).__hasExternalTextures){let ne=Math.max(1,y.width>>Y),ve=Math.max(1,y.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,me,ne,ve,y.depth,0,Te,re,null):t.texImage2D(ee,Y,me,ne,ve,0,Te,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),je(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,n.get(O).__webglTexture,0,Ge(y)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,n.get(O).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let $=y.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Y=M(y.stencilBuffer,ee),Te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Ge(y);je(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Y,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,E)}else{let $=y.textures;for(let ee=0;ee<$.length;ee++){let Y=$[ee],Te=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),me=T(Y.internalFormat,Te,re,Y.colorSpace),et=Ge(y);O&&je(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,me,y.width,y.height):je(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,me,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let $=n.get(y.depthTexture).__webglTexture,ee=Ge(y);if(y.depthTexture.format===Ss)je(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===Ps)je(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Fe(E){let y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=$}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pe(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),ye(y.__webglDepthbuffer[$],E,!1);else{let ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ye(y.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,y,O){let $=n.get(E);y!==void 0&&te($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Fe(E)}function qe(E){let y=E.texture,O=n.get(E),$=n.get(y);E.addEventListener("dispose",A);let ee=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let me=0;me<y.mipmaps.length;me++)O.__webglFramebuffer[re][me]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Te)for(let re=0,me=ee.length;re<me;re++){let et=n.get(ee[re]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&je(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){let me=ee[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);let et=r.convert(me.format,me.colorSpace),ne=r.convert(me.type),ve=T(me.internalFormat,et,ne,me.colorSpace,E.isXRRenderTarget===!0),Le=Ge(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Se(i.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(O.__webglFramebuffer[re][me],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,me);else te(O.__webglFramebuffer[re],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,me=ee.length;re<me;re++){let et=ee[re],ne=n.get(et);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Se(i.TEXTURE_2D,et),te(O.__webglFramebuffer,E,et,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),f(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),Se(re,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(O.__webglFramebuffer[me],E,y,i.COLOR_ATTACHMENT0,re,me);else te(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,re,0);f(y)&&p(re),t.unbindTexture()}E.depthBuffer&&Fe(E)}function ut(E){let y=E.textures;for(let O=0,$=y.length;O<$;O++){let ee=y[O];if(f(ee)){let Y=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Te=n.get(ee).__webglTexture;t.bindTexture(Y,Te),p(Y),t.unbindTexture()}}}let Ye=[],P=[];function rn(E){if(E.samples>0){if(je(E)===!1){let y=E.textures,O=E.width,$=E.height,ee=i.COLOR_BUFFER_BIT,Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(E),re=y.length>1;if(re)for(let me=0;me<y.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<y.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);let et=n.get(y[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,ee,i.NEAREST),l===!0&&(Ye.length=0,P.length=0,Ye.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ye.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let me=0;me<y.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);let et=n.get(y[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ge(E){return Math.min(s.maxSamples,E.samples)}function je(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ue(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ft(E,y){let O=E.colorSpace,$=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Fn&&O!==en&&(ot.getTransfer(O)===mt?($!==hn||ee!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ne(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=_,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Pe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=je}function Lx(i,e){function t(n,s=en){let r,o=ot.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.BYTE;if(n===Hu)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===hn)return i.RGBA;if(n===Xu)return i.LUMINANCE;if(n===qu)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===Yu)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ul||n===Ll)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===Zl||n===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===Jl||n===Ql||n===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ee({vertexShader:Nx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,x=new gc,f=t.getContextAttributes(),p=null,T=null,M=[],S=[],w=new ge,A=null,R=new Ft;R.layers.enable(1),R.viewport=new Ke;let C=new Ft;C.layers.enable(2),C.viewport=new Ke;let k=[R,C],v=new mc;v.layers.enable(1),v.layers.enable(2);let _=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=M[X];return te===void 0&&(te=new ar,M[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=M[X];return te===void 0&&(te=new ar,M[X]=te),te.getGripSpace()},this.getHand=function(X){let te=M[X];return te===void 0&&(te=new ar,M[X]=te),te.getHandSpace()};function F(X){let te=S.indexOf(X.inputSource);if(te===-1)return;let ye=M[te];ye!==void 0&&(ye.update(X.inputSource,X.frame,c||o),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){let te=S[X];te!==null&&(S[X]=null,M[X].disconnect(te))}_=null,D=null,x.reset(),e.setRenderTarget(p),m=null,u=null,d=null,s=null,T=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Rn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,ye=null,pe=null;f.depth&&(pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?Ps:Ss,ye=f.stencil?Cs:Hi);let Fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Rn(u.textureWidth,u.textureHeight,{format:hn,type:ti,depthTexture:new Do(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(X){for(let te=0;te<X.removed.length;te++){let ye=X.removed[te],pe=S.indexOf(ye);pe>=0&&(S[pe]=null,M[pe].disconnect(ye))}for(let te=0;te<X.added.length;te++){let ye=X.added[te],pe=S.indexOf(ye);if(pe===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=S.length){S.push(ye),pe=Pe;break}else if(S[Pe]===null){S[Pe]=ye,pe=Pe;break}if(pe===-1)break}let Fe=M[pe];Fe&&Fe.connect(ye)}}let V=new I,j=new I;function W(X,te,ye){V.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);let pe=V.distanceTo(j),Fe=te.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,qe=Fe[14]/(Fe[10]-1),ut=Fe[14]/(Fe[10]+1),Ye=(Fe[9]+1)/Fe[5],P=(Fe[9]-1)/Fe[5],rn=(Fe[8]-1)/Fe[0],Ge=(Pe[8]+1)/Pe[0],je=qe*rn,Ue=qe*Ge,ft=pe/(-rn+Ge),Ne=ft*-rn;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Fe[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let E=qe+ft,y=ut+ft,O=je-Ne,$=Ue+(pe-Ne),ee=Ye*ut/y*E,Y=P*ut/y*E;X.projectionMatrix.makePerspective(O,$,ee,Y,E,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ue(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let te=X.near,ye=X.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),v.near=C.near=R.near=te,v.far=C.far=R.far=ye,(_!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),_=v.near,D=v.far);let pe=X.parent,Fe=v.cameras;ue(v,pe);for(let Pe=0;Pe<Fe.length;Pe++)ue(Fe[Pe],pe);Fe.length===2?W(v,R,C):v.projectionMatrix.copy(R.projectionMatrix),fe(X,v,pe)};function fe(X,te,ye){ye===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ur*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Se=null;function tt(X,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let pe=!1;ye.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Pe=0;Pe<ye.length;Pe++){let qe=ye[Pe],ut=null;if(m!==null)ut=m.getViewport(qe);else{let P=d.getViewSubImage(u,qe);ut=P.viewport,Pe===0&&(e.setRenderTargetTextures(T,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(T))}let Ye=k[Pe];Ye===void 0&&(Ye=new Ft,Ye.layers.enable(Pe),Ye.viewport=new Ke,k[Pe]=Ye),Ye.matrix.fromArray(qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(v.matrix.copy(Ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(Ye)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Pe=d.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(e,Pe,s.renderState)}}for(let ye=0;ye<M.length;ye++){let pe=S[ye],Fe=M[ye];pe!==null&&Fe!==void 0&&Fe.update(pe,te,c||o)}Se&&Se(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let at=new ed;at.setAnimationLoop(tt),this.setAnimationLoop=function(X){Se=X},this.dispose=function(){}}},Fi=new ii,Ox=new vt;function Bx(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,ju(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,T,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,T,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ht&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ht&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let T=e.get(p),M=T.envMap,S=T.envMapRotation;M&&(f.envMap.value=M,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),f.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Fi)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,T,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*T,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,T){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let T=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){let S=M.program;n.uniformBlockBinding(T,S)}function c(T,M){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",f));let w=M.program;n.updateUBOMapping(T,w);let A=e.render.frame;r[T.id]!==A&&(u(T),r[T.id]=A)}function h(T){let M=d();T.__bindingPointIndex=M;let S=i.createBuffer(),w=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){let M=s[T.id],S=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=S.length;A<R;A++){let C=Array.isArray(S[A])?S[A]:[S[A]];for(let k=0,v=C.length;k<v;k++){let _=C[k];if(m(_,A,k,w)===!0){let D=_.__offset,F=Array.isArray(_.value)?_.value:[_.value],H=0;for(let q=0;q<F.length;q++){let V=F[q],j=x(V);typeof V=="number"||typeof V=="boolean"?(_.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+H,_.__data)):V.isMatrix3?(_.__data[0]=V.elements[0],_.__data[1]=V.elements[1],_.__data[2]=V.elements[2],_.__data[3]=0,_.__data[4]=V.elements[3],_.__data[5]=V.elements[4],_.__data[6]=V.elements[5],_.__data[7]=0,_.__data[8]=V.elements[6],_.__data[9]=V.elements[7],_.__data[10]=V.elements[8],_.__data[11]=0):(V.toArray(_.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,_.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,S,w){let A=T.value,R=M+"_"+S;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{let C=w[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(T){let M=T.uniforms,S=0,w=16;for(let R=0,C=M.length;R<C;R++){let k=Array.isArray(M[R])?M[R]:[M[R]];for(let v=0,_=k.length;v<_;v++){let D=k[v],F=Array.isArray(D.value)?D.value:[D.value];for(let H=0,q=F.length;H<q;H++){let V=F[H],j=x(V),W=S%w,ue=W%j.boundary,fe=W+ue;S+=ue,fe!==0&&w-fe<j.storage&&(S+=w-fe),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=j.storage}}}let A=S%w;return A>0&&(S+=w-A),T.__size=S,T.__cache={},this}function x(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function f(T){let M=T.target;M.removeEventListener("dispose",f);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var No=class{constructor(e={}){let{canvas:t=Vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Dn,this.toneMappingExposure=1;let M=this,S=!1,w=0,A=0,R=null,C=-1,k=null,v=new Ke,_=new Ke,D=null,F=new Me(0),H=0,q=t.width,V=t.height,j=1,W=null,ue=null,fe=new Ke(0,0,q,V),Se=new Ke(0,0,q,V),tt=!1,at=new Uo,X=!1,te=!1,ye=new vt,pe=new vt,Fe=new I,Pe=new Ke,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function Ye(){return R===null?j:1}let P=n;function rn(b,L){return t.getContext(b,L)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),P===null){let L="webgl2";if(P=rn(L,b),P===null)throw rn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,je,Ue,ft,Ne,E,y,O,$,ee,Y,Te,re,me,et,ne,ve,Le,De,xe,We,Oe,dt,U;function ce(){Ge=new tv(P),Ge.init(),Oe=new Lx(P,Ge),je=new Zg(P,Ge,e,Oe),Ue=new Px(P),je.reverseDepthBuffer&&Ue.buffers.depth.setReversed(!0),ft=new sv(P),Ne=new vx,E=new Ux(P,Ge,Ue,Ne,je,Oe,ft),y=new Jg(M),O=new ev(M),$=new u0(P),dt=new Yg(P,$),ee=new nv(P,$,ft,dt),Y=new ov(P,ee,$,ft),De=new rv(P,je,E),ne=new Kg(Ne),Te=new gx(M,y,O,Ge,je,dt,ne),re=new Bx(M,Ne),me=new _x,et=new wx(Ge),Le=new qg(M,y,O,Ue,Y,u,l),ve=new Rx(M,Y,je),U=new zx(P,ft,je,Ue),xe=new $g(P,Ge,ft),We=new iv(P,Ge,ft),ft.programs=Te.programs,M.capabilities=je,M.extensions=Ge,M.properties=Ne,M.renderLists=me,M.shadowMap=ve,M.state=Ue,M.info=ft}ce();let G=new vc(M,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(q,V,!1))},this.getSize=function(b){return b.set(q,V)},this.setSize=function(b,L,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,V=L,t.width=Math.floor(b*j),t.height=Math.floor(L*j),B===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(q*j,V*j).floor()},this.setDrawingBufferSize=function(b,L,B){q=b,V=L,j=B,t.width=Math.floor(b*B),t.height=Math.floor(L*B),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,L,B,z){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,L,B,z),Ue.viewport(v.copy(fe).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,L,B,z){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,L,B,z),Ue.scissor(_.copy(Se).multiplyScalar(j).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){Ue.setScissorTest(tt=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(b=!0,L=!0,B=!0){let z=0;if(b){let N=!1;if(R!==null){let ie=R.texture.format;N=ie===Vc||ie===Hc||ie===kc}if(N){let ie=R.texture.type,le=ie===ti||ie===Hi||ie===hr||ie===Cs||ie===Oc||ie===Bc,_e=Le.getClearColor(),be=Le.getClearAlpha(),Re=_e.r,Ie=_e.g,we=_e.b;le?(m[0]=Re,m[1]=Ie,m[2]=we,m[3]=be,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Re,g[1]=Ie,g[2]=we,g[3]=be,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}L&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),et.dispose(),Ne.dispose(),y.dispose(),O.dispose(),Y.dispose(),dt.dispose(),U.dispose(),Te.dispose(),G.dispose(),G.removeEventListener("sessionstart",Rh),G.removeEventListener("sessionend",Ch),Pi.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=ft.autoReset,L=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,N=ve.type;ce(),ft.autoReset=b,ve.enabled=L,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=N}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){let L=b.target;L.removeEventListener("dispose",$e),Tt(L)}function Tt(b){Jt(b),Ne.remove(b)}function Jt(b){let L=Ne.get(b).programs;L!==void 0&&(L.forEach(function(B){Te.releaseProgram(B)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,B,z,N,ie){L===null&&(L=qe);let le=N.isMesh&&N.matrixWorld.determinant()<0,_e=Ff(b,L,B,z,N);Ue.setMaterial(z,le);let be=B.index,Re=1;if(z.wireframe===!0){if(be=ee.getWireframeAttribute(B),be===void 0)return;Re=2}let Ie=B.drawRange,we=B.attributes.position,lt=Ie.start*Re,pt=(Ie.start+Ie.count)*Re;ie!==null&&(lt=Math.max(lt,ie.start*Re),pt=Math.min(pt,(ie.start+ie.count)*Re)),be!==null?(lt=Math.max(lt,0),pt=Math.min(pt,be.count)):we!=null&&(lt=Math.max(lt,0),pt=Math.min(pt,we.count));let bt=pt-lt;if(bt<0||bt===1/0)return;dt.setup(N,z,_e,B,be);let on,st=xe;if(be!==null&&(on=$.get(be),st=We,st.setIndex(on)),N.isMesh)z.wireframe===!0?(Ue.setLineWidth(z.wireframeLinewidth*Ye()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(N.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),Ue.setLineWidth(Ae*Ye()),N.isLineSegments?st.setMode(P.LINES):N.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else N.isPoints?st.setMode(P.POINTS):N.isSprite&&st.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ae=N._multiDrawStarts,Nt=N._multiDrawCounts,rt=N._multiDrawCount,Sn=be?$.get(be).bytesPerElement:1,ns=Ne.get(z).currentProgram.getUniforms();for(let an=0;an<rt;an++)ns.setValue(P,"_gl_DrawID",an),st.render(Ae[an]/Sn,Nt[an])}else if(N.isInstancedMesh)st.renderInstances(lt,bt,N.count);else if(B.isInstancedBufferGeometry){let Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Nt=Math.min(B.instanceCount,Ae);st.renderInstances(lt,bt,Nt)}else st.render(lt,bt)};function nt(b,L,B){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,Fr(b,L,B),b.side=_i,b.needsUpdate=!0,Fr(b,L,B),b.side=Ze):Fr(b,L,B)}this.compile=function(b,L,B=null){B===null&&(B=b),f=et.get(B),f.init(L),T.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let z=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ie=N.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){let _e=ie[le];nt(_e,B,N),z.add(_e)}else nt(ie,B,N),z.add(ie)}),T.pop(),f=null,z},this.compileAsync=function(b,L,B=null){let z=this.compile(b,L,B);return new Promise(N=>{function ie(){if(z.forEach(function(le){Ne.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){N(b);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Qt=null;function Wn(b){Qt&&Qt(b)}function Rh(){Pi.stop()}function Ch(){Pi.start()}let Pi=new ed;Pi.setAnimationLoop(Wn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(b){Qt=b,G.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},G.addEventListener("sessionstart",Rh),G.addEventListener("sessionend",Ch),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,L,R),f=et.get(b,T.length),f.init(L),T.push(f),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),at.setFromProjectionMatrix(pe),te=this.localClippingEnabled,X=ne.init(this.clippingPlanes,te),x=me.get(b,p.length),x.init(),p.push(x),G.enabled===!0&&G.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&Oa(ie,L,-1/0,M.sortObjects)}Oa(b,L,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(W,ue),ut=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ut&&Le.addToRenderList(x,b),this.info.render.frame++,X===!0&&ne.beginShadows();let B=f.state.shadowsArray;ve.render(B,b,L),X===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=x.opaque,N=x.transmissive;if(f.setupLights(),L.isArrayCamera){let ie=L.cameras;if(N.length>0)for(let le=0,_e=ie.length;le<_e;le++){let be=ie[le];Ih(z,N,b,be)}ut&&Le.render(b);for(let le=0,_e=ie.length;le<_e;le++){let be=ie[le];Ph(x,b,be,be.viewport)}}else N.length>0&&Ih(z,N,b,L),ut&&Le.render(b),Ph(x,b,L);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,L),dt.resetDefaultState(),C=-1,k=null,T.pop(),T.length>0?(f=T[T.length-1],X===!0&&ne.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Oa(b,L,B,z){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){z&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);let le=Y.update(b),_e=b.material;_e.visible&&x.push(b,le,_e,B,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){let le=Y.update(b),_e=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Pe.copy(le.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(_e)){let be=le.groups;for(let Re=0,Ie=be.length;Re<Ie;Re++){let we=be[Re],lt=_e[we.materialIndex];lt&&lt.visible&&x.push(b,le,lt,B,Pe.z,we)}}else _e.visible&&x.push(b,le,_e,B,Pe.z,null)}}let ie=b.children;for(let le=0,_e=ie.length;le<_e;le++)Oa(ie[le],L,B,z)}function Ph(b,L,B,z){let N=b.opaque,ie=b.transmissive,le=b.transparent;f.setupLightsView(B),X===!0&&ne.setGlobalState(M.clippingPlanes,B),z&&Ue.viewport(v.copy(z)),N.length>0&&Nr(N,L,B),ie.length>0&&Nr(ie,L,B),le.length>0&&Nr(le,L,B),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ih(b,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Rn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?qi:ti,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ie=f.state.transmissionRenderTarget[z.id],le=z.viewport||v;ie.setSize(le.z,le.w);let _e=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(F),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),ut&&Le.render(B);let be=M.toneMapping;M.toneMapping=Dn;let Re=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),X===!0&&ne.setGlobalState(M.clippingPlanes,z),Nr(b,B,z),E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let we=0,lt=L.length;we<lt;we++){let pt=L[we],bt=pt.object,on=pt.geometry,st=pt.material,Ae=pt.group;if(st.side===Ze&&bt.layers.test(z.layers)){let Nt=st.side;st.side=Ht,st.needsUpdate=!0,Uh(bt,B,z,on,st,Ae),st.side=Nt,st.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie))}M.setRenderTarget(_e),M.setClearColor(F,H),Re!==void 0&&(z.viewport=Re),M.toneMapping=be}function Nr(b,L,B){let z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ie=b.length;N<ie;N++){let le=b[N],_e=le.object,be=le.geometry,Re=z===null?le.material:z,Ie=le.group;_e.layers.test(B.layers)&&Uh(_e,L,B,be,Re,Ie)}}function Uh(b,L,B,z,N,ie){b.onBeforeRender(M,L,B,z,N,ie),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(M,L,B,z,b,ie),N.transparent===!0&&N.side===Ze&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,M.renderBufferDirect(B,L,z,N,b,ie),N.side=_i,N.needsUpdate=!0,M.renderBufferDirect(B,L,z,N,b,ie),N.side=Ze):M.renderBufferDirect(B,L,z,N,b,ie),b.onAfterRender(M,L,B,z,N,ie)}function Fr(b,L,B){L.isScene!==!0&&(L=qe);let z=Ne.get(b),N=f.state.lights,ie=f.state.shadowsArray,le=N.state.version,_e=Te.getParameters(b,N.state,ie,L,B),be=Te.getProgramCacheKey(_e),Re=z.programs;z.environment=b.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",$e),Re=new Map,z.programs=Re);let Ie=Re.get(be);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===le)return Dh(b,_e),Ie}else _e.uniforms=Te.getUniforms(b),b.onBeforeCompile(_e,M),Ie=Te.acquireProgram(_e,be),Re.set(be,Ie),z.uniforms=_e.uniforms;let we=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ne.uniform),Dh(b,_e),z.needsLights=Bf(b),z.lightsStateVersion=le,z.needsLights&&(we.ambientLightColor.value=N.state.ambient,we.lightProbe.value=N.state.probe,we.directionalLights.value=N.state.directional,we.directionalLightShadows.value=N.state.directionalShadow,we.spotLights.value=N.state.spot,we.spotLightShadows.value=N.state.spotShadow,we.rectAreaLights.value=N.state.rectArea,we.ltc_1.value=N.state.rectAreaLTC1,we.ltc_2.value=N.state.rectAreaLTC2,we.pointLights.value=N.state.point,we.pointLightShadows.value=N.state.pointShadow,we.hemisphereLights.value=N.state.hemi,we.directionalShadowMap.value=N.state.directionalShadowMap,we.directionalShadowMatrix.value=N.state.directionalShadowMatrix,we.spotShadowMap.value=N.state.spotShadowMap,we.spotLightMatrix.value=N.state.spotLightMatrix,we.spotLightMap.value=N.state.spotLightMap,we.pointShadowMap.value=N.state.pointShadowMap,we.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Lh(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=ws.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Dh(b,L){let B=Ne.get(b);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Ff(b,L,B,z,N){L.isScene!==!0&&(L=qe),E.resetTextureUnits();let ie=L.fog,le=z.isMeshStandardMaterial?L.environment:null,_e=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fn,be=(z.isMeshStandardMaterial?O:y).get(z.envMap||le),Re=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!B.morphAttributes.position,lt=!!B.morphAttributes.normal,pt=!!B.morphAttributes.color,bt=Dn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=M.toneMapping);let on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=on!==void 0?on.length:0,Ae=Ne.get(z),Nt=f.state.lights;if(X===!0&&(te===!0||b!==k)){let fn=b===k&&z.id===C;ne.setState(z,b,fn)}let rt=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Nt.state.version||Ae.outputColorSpace!==_e||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==be||z.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Ie||Ae.morphTargets!==we||Ae.morphNormals!==lt||Ae.morphColors!==pt||Ae.toneMapping!==bt||Ae.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ae.__version=z.version);let Sn=Ae.currentProgram;rt===!0&&(Sn=Fr(z,L,N));let ns=!1,an=!1,Ba=!1,St=Sn.getUniforms(),hi=Ae.uniforms;if(Ue.useProgram(Sn.program)&&(ns=!0,an=!0,Ba=!0),z.id!==C&&(C=z.id,an=!0),ns||k!==b){je.reverseDepthBuffer?(ye.copy(b.projectionMatrix),Wp(ye),Xp(ye),St.setValue(P,"projectionMatrix",ye)):St.setValue(P,"projectionMatrix",b.projectionMatrix),St.setValue(P,"viewMatrix",b.matrixWorldInverse);let fn=St.map.cameraPosition;fn!==void 0&&fn.setValue(P,Fe.setFromMatrixPosition(b.matrixWorld)),je.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,an=!0,Ba=!0)}if(N.isSkinnedMesh){St.setOptional(P,N,"bindMatrix"),St.setOptional(P,N,"bindMatrixInverse");let fn=N.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),St.setValue(P,"boneTexture",fn.boneTexture,E))}N.isBatchedMesh&&(St.setOptional(P,N,"batchingTexture"),St.setValue(P,"batchingTexture",N._matricesTexture,E),St.setOptional(P,N,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",N._indirectTexture,E),St.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",N._colorsTexture,E));let za=B.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0)&&De.update(N,B,Sn),(an||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,St.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=be,hi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(hi.envMapIntensity.value=L.environmentIntensity),an&&(St.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&Of(hi,Ba),ie&&z.fog===!0&&re.refreshFogUniforms(hi,ie),re.refreshMaterialUniforms(hi,z,j,V,f.state.transmissionRenderTarget[b.id]),ws.upload(P,Lh(Ae),hi,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ws.upload(P,Lh(Ae),hi,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(P,"center",N.center),St.setValue(P,"modelViewMatrix",N.modelViewMatrix),St.setValue(P,"normalMatrix",N.normalMatrix),St.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let fn=z.uniformsGroups;for(let ka=0,zf=fn.length;ka<zf;ka++){let Nh=fn[ka];U.update(Nh,Sn),U.bind(Nh,Sn)}}return Sn}function Of(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Bf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,L,B){Ne.get(b.texture).__webglTexture=L,Ne.get(b.depthTexture).__webglTexture=B;let z=Ne.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){let B=Ne.get(b);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,B=0){R=b,w=L,A=B;let z=!0,N=null,ie=!1,le=!1;if(b){let be=Ne.get(b);if(be.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(be.__hasExternalTextures)E.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let we=b.depthTexture;if(be.__boundDepthTexture!==we){if(we!==null&&Ne.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);let Ie=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?N=Ie[L][B]:N=Ie[L],ie=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?N=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[B]:N=Ie,v.copy(b.viewport),_.copy(b.scissor),D=b.scissorTest}else v.copy(fe).multiplyScalar(j).floor(),_.copy(Se).multiplyScalar(j).floor(),D=tt;if(Ue.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&Ue.drawBuffers(b,N),Ue.viewport(v),Ue.scissor(_),Ue.setScissorTest(D),ie){let be=Ne.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,B)}else if(le){let be=Ne.get(b.texture),Re=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Re)}C=-1},this.readRenderTargetPixels=function(b,L,B,z,N,ie,le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){Ue.bindFramebuffer(P.FRAMEBUFFER,_e);try{let be=b.texture,Re=be.format,Ie=be.type;if(!je.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-z&&B>=0&&B<=b.height-N&&P.readPixels(L,B,z,N,Oe.convert(Re),Oe.convert(Ie),ie)}finally{let be=R!==null?Ne.get(R).__webglFramebuffer:null;Ue.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,L,B,z,N,ie,le){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){let be=b.texture,Re=be.format,Ie=be.type;if(!je.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-z&&B>=0&&B<=b.height-N){Ue.bindFramebuffer(P.FRAMEBUFFER,_e);let we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(L,B,z,N,Oe.convert(Re),Oe.convert(Ie),0);let lt=R!==null?Ne.get(R).__webglFramebuffer:null;Ue.bindFramebuffer(P.FRAMEBUFFER,lt);let pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Gp(P,pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(we),P.deleteSync(pt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,B=0){b.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);let z=Math.pow(2,-B),N=Math.floor(b.image.width*z),ie=Math.floor(b.image.height*z),le=L!==null?L.x:0,_e=L!==null?L.y:0;E.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,le,_e,N,ie),Ue.unbindTexture()},this.copyTextureToTexture=function(b,L,B=null,z=null,N=0){b.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],L=arguments[2],N=arguments[3]||0,B=null);let ie,le,_e,be,Re,Ie;B!==null?(ie=B.max.x-B.min.x,le=B.max.y-B.min.y,_e=B.min.x,be=B.min.y):(ie=b.image.width,le=b.image.height,_e=0,be=0),z!==null?(Re=z.x,Ie=z.y):(Re=0,Ie=0);let we=Oe.convert(L.format),lt=Oe.convert(L.type);E.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let pt=P.getParameter(P.UNPACK_ROW_LENGTH),bt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),st=P.getParameter(P.UNPACK_SKIP_ROWS),Ae=P.getParameter(P.UNPACK_SKIP_IMAGES),Nt=b.isCompressedTexture?b.mipmaps[N]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Re,Ie,ie,le,we,lt,Nt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Re,Ie,Nt.width,Nt.height,we,Nt.data):P.texSubImage2D(P.TEXTURE_2D,N,Re,Ie,ie,le,we,lt,Nt),P.pixelStorei(P.UNPACK_ROW_LENGTH,pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,st),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),N===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(b,L,B=null,z=null,N=0){b.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],L=arguments[3],N=arguments[4]||0);let ie,le,_e,be,Re,Ie,we,lt,pt,bt=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(ie=B.max.x-B.min.x,le=B.max.y-B.min.y,_e=B.max.z-B.min.z,be=B.min.x,Re=B.min.y,Ie=B.min.z):(ie=bt.width,le=bt.height,_e=bt.depth,be=0,Re=0,Ie=0),z!==null?(we=z.x,lt=z.y,pt=z.z):(we=0,lt=0,pt=0);let on=Oe.convert(L.format),st=Oe.convert(L.type),Ae;if(L.isData3DTexture)E.setTexture3D(L,0),Ae=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)E.setTexture2DArray(L,0),Ae=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let Nt=P.getParameter(P.UNPACK_ROW_LENGTH),rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(P.UNPACK_SKIP_PIXELS),ns=P.getParameter(P.UNPACK_SKIP_ROWS),an=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ae,N,we,lt,pt,ie,le,_e,on,st,bt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ae,N,we,lt,pt,ie,le,_e,on,bt.data):P.texSubImage3D(Ae,N,we,lt,pt,ie,le,_e,on,st,bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ns),P.pixelStorei(P.UNPACK_SKIP_IMAGES,an),N===0&&L.generateMipmaps&&P.generateMipmap(Ae),Ue.unbindTexture()},this.initRenderTarget=function(b){Ne.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Ue.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Ue.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Vo?"display-p3":"srgb"}};var Nn=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new I,Fo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ce(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gi=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vs,js=new I,xs=new I,_s=new I,ys=new ge,er=new ge,rd=new vt,so=new I,tr=new I,ro=new I,Iu=new ge,gl=new ge,Uu=new ge,Us=class extends $t{constructor(e=new Gi){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Fo(n,3,0,!1)),vs.setAttribute("uv",new Fo(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;oo(so.set(-.5,-.5,0),_s,o,xs,s,r),oo(tr.set(.5,-.5,0),_s,o,xs,s,r),oo(ro.set(.5,.5,0),_s,o,xs,s,r),Iu.set(0,0),gl.set(1,0),Uu.set(1,1);let a=e.ray.intersectTriangle(so,tr,ro,!1,js);if(a===null&&(oo(tr.set(-.5,.5,0),_s,o,xs,s,r),gl.set(0,1),a=e.ray.intersectTriangle(so,ro,tr,!1,js),a===null))return;let l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:vi.getInterpolation(js,so,tr,ro,Iu,gl,Uu,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function oo(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*ys.x-s*ys.y,er.y=s*ys.x+r*ys.y):er.copy(ys),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(rd)}var _c=class extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=tn,h=tn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class extends Ce{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new vt,Lu=new vt,ao=[],Du=new ni,kx=new vt,nr=new de,ir=new bi,Oo=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Du.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),ir.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Lu.multiplyMatrices(n,Ms),nr.matrixWorld=Lu,nr.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){let l=ao[o];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(s*this.count),s,this.count,zc,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yc=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nu=new vt,Mc=new Eo,lo=new bi,co=new I,It=class extends $t{constructor(e=new Je,t=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Nu.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=u,x=m;g<x;g++){let f=c.getX(g);co.fromBufferAttribute(d,f),Fu(co,f,l,s,e,t,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,x=m;g<x;g++)co.fromBufferAttribute(d,g),Fu(co,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fu(i,e,t,n,s,r,o){let a=Mc.distanceSqToPoint(i);if(a<t){let l=new I;Mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ls=class extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bc=class i extends Je{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,x=[],f=n/2,p=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(m,2));function T(){let S=new I,w=new I,A=0,R=(t-e)/n;for(let C=0;C<=r;C++){let k=[],v=C/r,_=v*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,H=F*l+a,q=Math.sin(H),V=Math.cos(H);w.x=_*q,w.y=-v*n+f,w.z=_*V,d.push(w.x,w.y,w.z),S.set(q,R,V).normalize(),u.push(S.x,S.y,S.z),m.push(F,1-v),k.push(g++)}x.push(k)}for(let C=0;C<s;C++)for(let k=0;k<r;k++){let v=x[k][C],_=x[k+1][C],D=x[k+1][C+1],F=x[k][C+1];e>0&&(h.push(v,_,F),A+=3),t>0&&(h.push(_,D,F),A+=3)}c.addGroup(p,A,0),p+=A}function M(S){let w=g,A=new ge,R=new I,C=0,k=S===!0?e:t,v=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,f*v,0),u.push(0,v,0),m.push(.5,.5),g++;let _=g;for(let D=0;D<=s;D++){let H=D/s*l+a,q=Math.cos(H),V=Math.sin(H);R.x=k*V,R.y=f*v,R.z=k*q,d.push(R.x,R.y,R.z),u.push(0,v,0),A.x=q*.5+.5,A.y=V*.5*v+.5,m.push(A.x,A.y),g++}for(let D=0;D<s;D++){let F=w+D,H=_+D;S===!0?h.push(H,H+1,F):h.push(H+1,H,F),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bo=class i extends bc{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zo=class i extends Je{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,m=[],g=[],x=[],f=[];for(let p=0;p<=n;p++){let T=[],M=p/n,S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){let A=w/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(A+S,1-M),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let M=h[p][T+1],S=h[p][T],w=h[p+1][T],A=h[p+1][T+1];(p!==0||o>0)&&m.push(M,S,A),(p!==n-1||l<Math.PI)&&m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ho(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends Ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=e,a=2*t-n;break;case Hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:o=e,l=2*n-t;break;case Hh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,f=x*g,p=-u*f+2*u*x-u*g,T=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*g+1,M=(-1-m)*f+(1.5+m)*x+.5*g,S=m*f-m*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+T*o[c+w]+M*o[l+w]+S*o[d+w];return r}},Tc=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},wc=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case ec:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Hx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ec;var Wi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=xo;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Cn{};Ec.prototype.ValueTypeName="color";var Ac=class extends Cn{};Ac.prototype.ValueTypeName="number";var Rc=class extends Ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ko=class extends Cn{InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=xo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends Cn{};Cc.prototype.ValueTypeName="vector";var Pc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Vx=new Pc,Ic=class{constructor(e){this.manager=e!==void 0?e:Vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var si=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var qc="\\[\\]\\.:\\/",Gx=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",Wx="[^"+qc.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",Yc),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),$x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Zx=new RegExp("^"+Xx+qx+Yx+$x+"$"),Kx=["material","materials","bones","map"],Uc=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(e){let t=Zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Uc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var Wo=class{constructor(e){this.el=e,this.t=0,this.last=performance.now(),this.frozen=null,this.fallback=!1,this.running=!1}freeze(e){this.frozen=e,this.t=e}get playing(){return this.frozen!==null?!1:this.fallback?this.running:!this.el.paused&&!this.el.ended}tick(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.1);if(this.last=e,this.frozen!==null)return this.t=this.frozen,1/60;if(this.fallback)return this.running&&(this.t+=t),t;let n=this.el;if(!n.paused&&!n.ended){let s=this.t+t*n.playbackRate,r=n.currentTime-s;this.t=Math.abs(r)>.08?n.currentTime:s+r*.1}else this.t=n.currentTime;return t}};var Ut=window.OLK_AUDIO||null;function od(i){let e=atob(i),t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)/255;return t}var $c=Ut?Ut.fps:60,gn=Ut?Ut.period:60/111.995,Zc=Ut?Ut.beat0:.095,ad=Ut?Ut.bar0:Zc+2*gn,ld=gn*4,fr=Ut?Ut.duration:252.03,hd={},ud={},Xo=null;if(Ut){for(let i in Ut.ch){let e=od(Ut.ch[i]),t=new Float32Array(e.length+1);for(let n=0;n<e.length;n++)t[n+1]=t[n]+e[n]/$c;hd[i]=e,ud[i]=t}Xo=od(Ut.spec)}function cd(i,e,t){if(!i)return 0;let n=e*t,s=Math.floor(n);if(s<0)return i[0];if(s>=i.length-1)return i[i.length-1];let r=n-s;return i[s]+(i[s+1]-i[s])*r}var Ve={ok:!!Ut,get(i,e){return cd(hd[i],e,$c)},integral(i,e){return cd(ud[i],e,$c)},spectrum(i,e){if(!Xo)return 0;let t=Ut.specBands,n=e*Ut.specFps,s=Math.floor(n),r=n-s;return s=Math.max(0,Math.min(Ut.specN-2,s)),Xo[s*t+i]*(1-r)+Xo[(s+1)*t+i]*r},specRow(i,e){for(let t=0;t<32;t++)e[t]=this.spectrum(t,i);return e},beat(i){return(i-Zc)/gn},bar(i){return(i-ad)/ld},beatPulse(i,e=6){let t=this.beat(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},barPulse(i,e=4){let t=this.bar(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},beatTime(i){return Zc+i*gn},barTime(i){return ad+i*ld}};var He=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y); }
float vnoise3(vec3 p){ vec3 i = floor(p), f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  float a = mix(mix(hash13(i), hash13(i+vec3(1,0,0)), u.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y);
  float b = mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y);
  return mix(a, b, u.z); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for(int i=0;i<5;i++){ s += a*vnoise(p); p = m*p; a *= 0.5; } return s; }
float fbm3(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<4;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 curl3(vec3 p){ return vec3(vnoise3(p+vec3(0.,13.,7.)), vnoise3(p+vec3(31.,5.,19.)), vnoise3(p+vec3(3.,41.,23.)))*2.0-1.0; }
`,Ti=`
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 pencil(float x){
  x = clamp(x, 0.0, 1.0) * 5.0;
  vec3 c0 = vec3(0.96,0.56,0.32), c1 = vec3(0.93,0.42,0.40), c2 = vec3(0.86,0.36,0.58),
       c3 = vec3(0.62,0.40,0.80), c4 = vec3(0.36,0.52,0.88), c5 = vec3(0.40,0.78,0.86);
  vec3 c = x < 1.0 ? mix(c0,c1,x) : x < 2.0 ? mix(c1,c2,x-1.0) : x < 3.0 ? mix(c2,c3,x-2.0) : x < 4.0 ? mix(c3,c4,x-3.0) : mix(c4,c5,x-4.0);
  return srgb2lin(c);
}
`,dd=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,On=`
varying vec3 vCol; varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5; float r = dot(d, d) * 4.0;
  float a = exp(-r * 4.0) + 0.35 * exp(-r * 16.0);
  if (a * vA < 0.002) discard;
  gl_FragColor = vec4(vCol * a * vA, 1.0);
}
`;var wi=(i,e,t=!0)=>new Rn(i,e,{type:qi,format:hn,depthBuffer:t,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Fs=(i,e,t={})=>new Ee({vertexShader:dd,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1,...t}),Kc=class{constructor(e){this.r=e,this.cam=new Vi(-1,1,1,-1,0,1),this.scene=new Nn,this.mesh=new de(new ze(2,2)),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}run(e,t,n=!0){this.mesh.material=e,this.r.setRenderTarget(t),n&&this.r.clear(),this.r.render(this.scene,this.cam)}},Jc="vec3 tap4(sampler2D t, vec2 uv, vec2 o){ return (texture2D(t, uv+o*vec2(-1.,-1.)).rgb + texture2D(t, uv+o*vec2(1.,-1.)).rgb + texture2D(t, uv+o*vec2(-1.,1.)).rgb + texture2D(t, uv+o*vec2(1.,1.)).rgb) * 0.25; }",Jx=`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr, uKnee; varying vec2 vUv; ${Jc}
void main(){ vec3 c = tap4(tSrc, vUv, uTexel); float br = max(c.r, max(c.g, c.b));
  float s = clamp(br - uThr + uKnee, 0.0, 2.0 * uKnee); s = s * s / (4.0 * uKnee + 1e-4);
  gl_FragColor = vec4(min(c * max(s, br - uThr) / max(br, 1e-4), vec3(60.0)), 1.0); }`,Qx=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv; ${Jc}
void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * 0.5 + tap4(tSrc, vUv, uTexel) * 0.5, 1.0); }`,jx=`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv; ${Jc}
void main(){ vec2 o = uTexel; vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += (texture2D(tSrc, vUv + vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv + vec2(0., o.y)).rgb + texture2D(tSrc, vUv - vec2(0., o.y)).rgb) * 2.0;
  c += tap4(tSrc, vUv, o) * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0); }`,e1=`uniform sampler2D tScene, tBloom; uniform vec2 uRes; uniform float uTime;
uniform float uExposure, uBloom, uSat, uContrast, uVig, uGrain, uCA, uLetter, uFlicker, uFadeB, uFadeW, uLeak, uScratch, uWeave, uTone;
uniform vec3 uTint, uLift; varying vec2 vUv; ${He}
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main(){
  float fr = floor(uTime * 24.0);
  vec2 uv = vUv + uWeave * (vec2(hash12(vec2(fr, 1.3)), hash12(vec2(fr, 7.1))) - 0.5) * 0.004;
  vec2 d = uv - 0.5; float r2 = dot(d, d);
  vec2 off = d * r2 * uCA * 0.05;
  vec3 col = vec3(texture2D(tScene, uv + off).r, texture2D(tScene, uv).g, texture2D(tScene, uv - off).b);
  col += texture2D(tBloom, uv).rgb * uBloom;
  if (uLeak > 0.001) {
    float lk = fbm(vec2(uv.x * 1.3 + uTime * 0.07, uv.y * 0.7 - uTime * 0.04));
    col += vec3(1.0, 0.42, 0.14) * smoothstep(0.5, 0.95, lk) * (0.35 + 0.65 * smoothstep(0.7, 0.0, uv.x)) * uLeak;
    col += vec3(0.9, 0.3, 0.5) * smoothstep(0.6, 1.0, fbm(uv * 1.1 - uTime * 0.05 + 9.0)) * smoothstep(0.3, 1.0, uv.x) * uLeak * 0.6;
  }
  col *= uExposure * (1.0 - uFlicker * 0.35 * hash12(vec2(fr, 3.0))) * uTint;
  col = mix(aces(col), clamp(col, 0.0, 1.0), uTone);
  col = pow(col, vec3(1.0 / 2.2));
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, uSat);
  col = clamp((col - 0.5) * uContrast + 0.5, 0.0, 1.0);
  col += uLift * (1.0 - col);
  if (uScratch > 0.001) {
    float sx = hash12(vec2(fr, 11.0));
    col = mix(col, vec3(0.92, 0.86, 0.74), smoothstep(0.0016, 0.0, abs(uv.x - sx)) * step(0.55, hash12(vec2(fr, 5.0))) * uScratch * 0.45);
    float dn = hash12(floor(uv * vec2(uRes.x / uRes.y, 1.0) * 160.0) + fr * 1.7);
    col *= 1.0 - step(0.9986, dn) * uScratch * 0.85;
  }
  col *= mix(1.0, smoothstep(1.1, 0.2, length(d * vec2(1.0, 0.8)) * 1.3), uVig);
  float g = hash12(floor(uv * uRes / 1.5) + fract(uTime * 7.13) * 91.0) - 0.5;
  col += g * uGrain * (0.3 + 0.7 * (1.0 - abs(l - 0.5) * 2.0));
  col = mix(col, vec3(0.0), uFadeB);
  col = mix(col, vec3(1.0), uFadeW);
  float lb = uLetter * 0.5;
  col *= smoothstep(lb - 0.001, lb + 0.001, vUv.y) * smoothstep(1.0 - lb + 0.001, 1.0 - lb - 0.001, vUv.y);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,Qc={exposure:1,bloom:.9,bloomThr:.8,sat:1,contrast:1.02,vig:.55,grain:.06,ca:.6,letter:0,flicker:0,fadeB:0,fadeW:0,leak:0,scratch:0,weave:0,tone:0,tint:[1,1,1],lift:[0,0,0],dust:.3,dustCol:[1,.85,.65]},qo=class{constructor(e){this.r=e,this.fs=new Kc(e),this.levels=6;let t=()=>({tSrc:{value:null},uTexel:{value:new ge}});this.pre=Fs(Jx,{...t(),uThr:{value:.8},uKnee:{value:.5}}),this.down=Fs(Qx,t()),this.up=Fs(jx,{...t(),tAdd:{value:null}});let n={tScene:{value:null},tBloom:{value:null},uRes:{value:new ge},uTime:{value:0}};for(let s of["Exposure","Bloom","Sat","Contrast","Vig","Grain","CA","Letter","Flicker","FadeB","FadeW","Leak","Scratch","Weave","Tone"])n["u"+s]={value:0};n.uTint={value:new I(1,1,1)},n.uLift={value:new I},this.final=Fs(e1,n),this.A=null}resize(e,t){[this.A,this.B,this.M,...this.dn||[],...this.upT||[]].forEach(r=>r&&r.dispose()),this.w=e,this.h=t,this.A=wi(e,t),this.B=wi(e,t),this.M=wi(e,t),this.dn=[],this.upT=[];let n=e>>1,s=t>>1;for(let r=0;r<this.levels;r++)this.dn.push(wi(Math.max(n,2),Math.max(s,2),!1)),this.upT.push(wi(Math.max(n,2),Math.max(s,2),!1)),n>>=1,s>>=1}bloom(e,t){let{pre:n,down:s,up:r,dn:o,upT:a,fs:l}=this;n.uniforms.tSrc.value=e.texture,n.uniforms.uThr.value=t,n.uniforms.uTexel.value.set(1/e.width,1/e.height),l.run(n,o[0]);for(let h=1;h<o.length;h++)s.uniforms.tSrc.value=o[h-1].texture,s.uniforms.uTexel.value.set(1/o[h-1].width,1/o[h-1].height),l.run(s,o[h]);let c=o[o.length-1];for(let h=o.length-2;h>=0;h--)r.uniforms.tSrc.value=c.texture,r.uniforms.tAdd.value=o[h].texture,r.uniforms.uTexel.value.set(1/c.width,1/c.height),l.run(r,a[h]),c=a[h];return c}composite(e,t,n,s,r){let o=this.bloom(e,t.bloomThr),a=this.final.uniforms;a.tScene.value=e.texture,a.tBloom.value=o.texture,a.uRes.value.set(s,r),a.uTime.value=n;let l={Exposure:"exposure",Bloom:"bloom",Sat:"sat",Contrast:"contrast",Vig:"vig",Grain:"grain",CA:"ca",Letter:"letter",Flicker:"flicker",FadeB:"fadeB",FadeW:"fadeW",Leak:"leak",Scratch:"scratch",Weave:"weave",Tone:"tone"};for(let c in l)a["u"+c].value=t[l[c]];a.uLetter.value=t.letter*Math.max(0,1-s/r/2.39),a.uTint.value.fromArray(t.tint),a.uLift.value.fromArray(t.lift),this.fs.run(this.final,null)}};var t1={fade:0,flash:1,dip:2,zoom:3,burn:4,shatter:5,iris:6,pencil:7,glitch:8,light:9},n1=`uniform sampler2D tA, tB; uniform float uP, uMode, uAspect, uTime, uAmt; uniform vec2 uC; varying vec2 vUv; ${He}
vec3 A(vec2 uv){ return texture2D(tA, uv).rgb; }
vec3 B(vec2 uv){ return texture2D(tB, uv).rgb; }
vec3 zoomA(vec2 uv, float k){ vec3 s = vec3(0.0); for (int i = 0; i < 12; i++){ float f = float(i) / 11.0; s += A(uC + (uv - uC) / (1.0 + k * f)); } return s / 12.0; }
float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// voronoi on aspect-corrected coords; returns owner cell id and edge distance
vec3 vor(vec2 q){ vec2 i = floor(q), f = fract(q); float d1 = 9.0, d2 = 9.0; vec2 id = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++){ vec2 g = vec2(float(x), float(y)); vec2 o = hash22(i + g) * 0.8 + 0.1;
    float d = length(g + o - f); if (d < d1){ d2 = d1; d1 = d; id = i + g; } else if (d < d2) d2 = d; }
  return vec3(id, d2 - d1); }
void main(){
  vec2 uv = vUv; float p = clamp(uP, 0.0, 1.0); int m = int(uMode + 0.5); vec3 col;
  if (m == 1){ // flash: white bloom spike, cut at peak
    float k = 1.0 - abs(p - 0.5) * 2.0; col = (p < 0.5 ? A(uv) : B(uv)) + vec3(1.0, 0.96, 0.9) * pow(k, 1.6) * 6.0 * uAmt;
  } else if (m == 2){ // dip to black
    col = p < 0.5 ? A(uv) * smoothstep(0.5, 0.0, p) : B(uv) * smoothstep(0.5, 1.0, p);
  } else if (m == 3){ // radial zoom-through
    float k = smoothstep(0.0, 1.0, p); vec3 za = zoomA(uv, k * 2.5);
    vec2 ub = uC + (uv - uC) * (1.0 + (1.0 - k) * 0.35);
    col = mix(za * (1.0 + k * 2.0), B(ub), smoothstep(0.35, 0.9, p));
  } else if (m == 4){ // film burn from uC
    vec2 q = (uv - uC) * vec2(uAspect, 1.0);
    float f = fbm(q * 3.0 + 4.0) * 0.55 + length(q) * 0.9;
    float th = p * 1.9 - 0.25; float e = f - th;
    vec3 a = A(uv) * smoothstep(-0.02, 0.12, e);
    col = mix(B(uv), a, smoothstep(-0.015, 0.0, e));
    col += vec3(1.0, 0.45, 0.12) * smoothstep(0.06, 0.0, abs(e)) * 5.0 + vec3(1.0, 0.85, 0.5) * smoothstep(0.012, 0.0, abs(e)) * 8.0;
  } else if (m == 5){ // shatter: cracks, then shards shrink/spin/fall revealing B
    float S = 7.0; vec2 q = vec2(uv.x * uAspect, uv.y) * S; vec2 cq = vec2(uC.x * uAspect, uC.y) * S;
    float crack = smoothstep(0.0, 0.28, p);
    vec3 v0 = vor(q); float rd = length(v0.xy + 0.5 - cq) / S;
    col = B(uv); bool hit = false;
    for (int y = -1; y <= 2; y++) for (int x = -1; x <= 1; x++){
      if (hit) continue;
      vec2 id = floor(q) + vec2(float(x), float(y)); vec2 ctr = id + hash22(id) * 0.8 + 0.1;
      float h = hash12(id + 3.7); float dd = length(ctr - cq) / S;
      float fall = clamp((p - 0.28 - dd * 0.45 - h * 0.18) / 0.4, 0.0, 1.0); fall *= fall;
      float sc = 1.0 - fall * 0.85; float an = (h - 0.5) * 3.0 * fall;
      vec2 off = vec2((h - 0.5) * 0.8, -2.2 * fall) * fall;
      vec2 lq = q - ctr - off; lq = mat2(cos(an), -sin(an), sin(an), cos(an)) * lq / sc; vec2 src = ctr + lq;
      vec3 vv = vor(src);
      if (vv.x == id.x && vv.y == id.y && fall < 0.999){
        vec2 suv = vec2(src.x / uAspect, src.y) / S + (hash22(id * 1.3) - 0.5) * 0.006 * crack;
        vec3 a = A(suv) * (1.0 - fall * 0.6);
        a += vec3(0.9, 0.95, 1.0) * smoothstep(0.035, 0.0, vv.z) * crack * step(rd, crack * 1.2 + 0.05) * 2.5;
        col = a; hit = true;
      }
    }
  } else if (m == 6){ // hexagonal aperture close then open
    vec2 q = (uv - uC) * vec2(uAspect, 1.0); float an = atan(q.y, q.x) + p * 1.2;
    float hx = length(q) * cos(3.14159 / 6.0) / cos(mod(an, 1.0472) - 0.5236);
    float r = abs(p - 0.5) * 2.0 * 1.25;
    vec3 src = p < 0.5 ? A(uv) : B(uv);
    col = src * smoothstep(r, r - 0.01, hx) + vec3(0.8, 0.7, 0.5) * smoothstep(0.012, 0.0, abs(hx - r)) * step(0.02, r) * 1.5;
  } else if (m == 7){ // pencil hatching reveal
    vec2 q = vec2(uv.x * uAspect, uv.y);
    float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
    float n = fbm(q * 4.0) * 0.6 + hash12(floor(q * 60.0)) * 0.1 + (h1 + h2) * 0.25;
    float k = smoothstep(n - 0.05, n + 0.05, p * 1.3 - 0.1);
    col = mix(A(uv), B(uv), k);
  } else if (m == 8){ // glitch cut with rgb split and slice jitter
    float k = 1.0 - abs(p - 0.5) * 2.0; float sl = floor(uv.y * 24.0);
    float j = (hash12(vec2(sl, floor(uTime * 30.0))) - 0.5) * 0.12 * k * step(0.55, hash12(vec2(sl * 1.7, floor(uTime * 20.0))));
    vec2 u2 = uv + vec2(j, 0.0); float ca = 0.012 * k;
    vec3 a = vec3(A(u2 + vec2(ca, 0.)).r, A(u2).g, A(u2 - vec2(ca, 0.)).b);
    vec3 b = vec3(B(u2 + vec2(ca, 0.)).r, B(u2).g, B(u2 - vec2(ca, 0.)).b);
    col = p < 0.5 ? a : b;
  } else if (m == 9){ // light-led: brightest parts of B arrive first
    vec3 b = B(uv); float k = smoothstep(0.0, 1.0, p * 1.6 - (1.0 - clamp(lum(b), 0.0, 1.0)) * 0.6);
    col = mix(A(uv), b, k) + b * sin(p * 3.14159) * 0.6;
  } else col = mix(A(uv), B(uv), smoothstep(0.0, 1.0, p));
  gl_FragColor = vec4(col, 1.0);
}`,Yo=class{constructor(){this.mat=Fs(n1,{tA:{value:null},tB:{value:null},uP:{value:0},uMode:{value:0},uAspect:{value:1},uTime:{value:0},uAmt:{value:1},uC:{value:new ge(.5,.5)}})}set(e,t,n,s,r,o,a=[.5,.5],l=1){let c=this.mat.uniforms;return c.tA.value=e.texture,c.tB.value=t.texture,c.uP.value=n,c.uMode.value=typeof s=="number"?s:t1[s]??0,c.uAspect.value=r,c.uTime.value=o,c.uC.value.set(a[0],a[1]),c.uAmt.value=l,this.mat}};var Qe=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),oe=(i,e,t)=>i+(e-i)*t,Q=(i,e,t)=>Qe((i-e)/(t-e)),Z=(i,e,t)=>{let n=Q(t,i,e);return n*n*(3-2*n)};var J={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outExpo:i=>i>=1?1:1-Math.pow(2,-10*i),inExpo:i=>i<=0?0:Math.pow(2,10*i-10),sine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function ht(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}var ri=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function vn(i,e,t=J.sine){if(i<=e[0][0])return e[0].slice(1);for(let n=0;n<e.length-1;n++){let s=e[n],r=e[n+1];if(i<=r[0]){let o=t((i-s[0])/(r[0]-s[0])),a=[];for(let l=1;l<s.length;l++)a.push(s[l]+(r[l]-s[l])*o);return a}}return e[e.length-1].slice(1)}var $o=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];var fd=[[.96,.56,.32],[.93,.42,.4],[.86,.36,.58],[.62,.4,.8],[.36,.52,.88],[.4,.78,.86]].map(i=>i.map(e=>Math.pow(e,2.2)));function pd(i,e=1){i=Qe(i)*5;let t=Math.min(4,Math.floor(i)),n=i-t;return fd[t].map((s,r)=>(s+(fd[t+1][r]-s)*n)*e)}var i1=`attribute vec3 aSeed; uniform float uT, uAmt, uAspect, uH; uniform vec3 uCol, uWind;
varying vec3 vCol; varying float vA;
void main(){
  vec3 s = aSeed;
  vec3 p = fract(s + uWind * uT * (0.4 + s.z) + vec3(sin(uT * 0.31 + s.x * 20.0), sin(uT * 0.23 + s.y * 17.0), 0.0) * 0.012);
  float depth = 0.6 + p.z * 6.0, k = 0.47 * 1.1;
  vec3 pos = vec3((p.x - 0.5) * 2.0 * uAspect * k * depth, (p.y - 0.5) * 2.0 * k * depth, -depth);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float focus = abs(depth - 2.2);
  gl_PointSize = (3.0 + focus * 9.0) / depth * uH / 1080.0 * (0.6 + s.x);
  float tw = 0.5 + 0.5 * sin(uT * (0.8 + s.x * 2.5) + s.y * 40.0);
  vA = uAmt * (0.2 + 0.8 * tw) / (1.0 + focus * focus * 1.5) * smoothstep(0.0, 0.05, p.y) * smoothstep(1.0, 0.95, p.y);
  vCol = uCol * (0.6 + 0.4 * s.y);
}`,Zo=class{constructor(e=1400){let t=ht(99),n=new Float32Array(e*3);for(let o=0;o<n.length;o++)n[o]=t();let s=new Je;s.setAttribute("position",new Ce(new Float32Array(e*3),3)),s.setAttribute("aSeed",new Ce(n,3)),this.u={uT:{value:0},uAmt:{value:0},uAspect:{value:1.78},uH:{value:1080},uCol:{value:new I(1,.85,.65)},uWind:{value:new I(.004,.009,0)}};let r=new Ee({vertexShader:i1,fragmentShader:On,uniforms:this.u,transparent:!0,depthTest:!1,depthWrite:!1,blending:it});this.pts=new It(s,r),this.pts.frustumCulled=!1,this.scene=new Nn,this.scene.add(this.pts),this.cam=new Ft(50,1.78,.1,50)}render(e,t,n,s,r,o,a){if(s<.005)return;let l=this.u;l.uT.value=n,l.uAmt.value=s,l.uAspect.value=r/o,l.uH.value=o,a&&l.uCol.value.fromArray(a),e.setRenderTarget(t),e.render(this.scene,this.cam)}};var s1=new Set(["flash","dip","glitch","iris"]),Ko=class i{constructor(e){this.shots=e.slice().sort((n,s)=>n.start-s.start);let t=this.shots;for(let n=0;n<t.length;n++)t[n].end=n+1<t.length?t[n+1].start:1/0}index(e){let t=this.shots,n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;return n}static win(e){let t=e.tr.dur||0,n=e.tr.align??.5;return[e.start-t*n,e.start+t*(1-n)]}at(e){let t=this.shots,n=this.index(e);for(let s of[n+1,n]){let r=t[s];if(!r||s===0||!r.tr||r.tr.type==="cut")continue;let[o,a]=i.win(r);if(e>=o&&e<a)return{a:t[s-1],b:r,p:(e-o)/(a-o),tr:r.tr}}return{a:t[n],b:null,p:0,tr:null}}around(e,t=3){return this.shots.filter(n=>n.end>e-t&&n.start<e+t)}},jc=i=>({...Qc,...i});function md(i,e,t,n){let s=s1.has(n)?t<.5?0:1:t*t*(3-2*t),r={};for(let o in Qc){let a=i[o],l=e[o];r[o]=Array.isArray(a)?a.map((c,h)=>c+(l[h]-c)*s):a+(l-a)*s}return r}var Ei="Oh oh oh oh oh",Os="I love you more than you\u2019ll ever know",pr="\u6211\u7231\u4F60\uFF0C\u8FDC\u6BD4\u4F60\u6240\u77E5\u9053\u7684\u66F4\u591A",mr="\u3042\u306A\u305F\u304C\u601D\u3046\u3088\u308A\u305A\u3063\u3068\u3000\u3042\u306A\u305F\u3092\u611B\u3057\u3066\u308B",gr="#ffe2b8",r1="#dce6ff",Bn="#ffcf8a",eh="#fff1ea",Jo=[[14.6,18.2,"Words & Music \u2014 Hikaru Utada","\u8BCD\u66F2\u3000\u5B87\u591A\u7530\u5149","credit",{y:.7},"\u4F5C\u8A5E\u30FB\u4F5C\u66F2\u3000\u5B87\u591A\u7530\u30D2\u30AB\u30EB"],[20.69,25,"\u521D\u3081\u3066\u306E\u30EB\u30FC\u30D6\u30EB\u306F","\u7B2C\u4E00\u6B21\u53BB\u5362\u6D6E\u5BAB","v",{x:.86},"My first time at the Louvre"],[23.01,25,"\u306A\u3093\u3066\u3053\u3068\u306F\u306A\u304B\u3063\u305F\u308F","\u4E5F\u4E0D\u8FC7\u5982\u6B64\u800C\u5DF2","v",{x:.79},"was nothing special at all"],[25.1,29.1,"\u79C1\u3060\u3051\u306E\u30E2\u30CA\u30EA\u30B6","\u53EA\u5C5E\u4E8E\u6211\u7684\u8499\u5A1C\u4E3D\u838E","v",{x:.22,c:gr},"My very own Mona Lisa \u2014"],[26.94,29.1,"\u3082\u3046\u3068\u3063\u304F\u306B\u51FA\u4F1A\u3063\u3066\u305F\u304B\u3089","\u6211\u65E9\u5C31\u5DF2\u7ECF\u9047\u89C1\u4E86","v",{x:.15,c:gr},"I had met her long before"],[29.37,33.55,"\u521D\u3081\u3066\u3042\u306A\u305F\u3092\u898B\u305F","\u7B2C\u4E00\u6B21\u89C1\u5230\u4F60\u7684","h",{x:.08,y:.7,c:gr,in:"type"},"The day I first saw you,"],[31.16,33.55,"\u3042\u306E\u65E5\u52D5\u304D\u51FA\u3057\u305F\u6B6F\u8ECA","\u90A3\u4E00\u5929\uFF0C\u9F7F\u8F6E\u5F00\u59CB\u8F6C\u52A8","h",{x:.08,y:.83,c:gr,in:"type"},"the gears began to turn"],[33.67,37.55,"\u6B62\u3081\u3089\u308C\u306A\u3044\u55AA\u5931\u306E\u4E88\u611F","\u65E0\u6CD5\u963B\u6B62\u7684\u3001\u5931\u53BB\u7684\u9884\u611F","center",{y:.78,c:r1,out:"shatter"},"a foreboding of loss I cannot stop"],[38.02,47.6,"\u3082\u3046\u3044\u3063\u3071\u3044\u3042\u308B\u3051\u3069","\u867D\u7136\u5DF2\u7ECF\u6709\u5F88\u591A\u4E86","v",{x:.85},"We already have so many,"],[43.79,47.6,"\u3082\u3046\u4E00\u3064\u5897\u3084\u3057\u307E\u3057\u3087\u3046","\u90A3\u5C31\u518D\u6DFB\u4E00\u4E2A\u5427","v",{x:.78,c:gr},"so let\u2019s make one more"],[47.75,52.2,"(Can you give me one last kiss?)","\uFF08\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F\uFF09","whisper",{},"\uFF08\u6700\u5F8C\u306E\u30AD\u30B9\u3092\u3000\u304F\u308C\u308B\uFF1F\uFF09"],[52.39,55.1,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[55.22,60.9,Ei,"","oh",{}],[61.07,63.65,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[63.79,69.45,Ei,"","oh",{}],[69.63,79.6,Os,pr,"en",{rd:4.4,out:"dust",y:.66},mr],[80.84,82.72,"\u300C\u5199\u771F\u306F\u82E6\u624B\u306A\u3093\u3060\u300D","\u201C\u6211\u4E0D\u592A\u559C\u6B22\u62CD\u7167\u201D","center",{y:.75,in:"type",out:"blur",mono:1},"\u201CI\u2019m not good with photos\u201D"],[82.78,84.85,"\u3067\u3082\u305D\u3093\u306A\u3082\u306E\u306F\u3044\u3089\u306A\u3044\u308F","\u53EF\u6211\u5E76\u4E0D\u9700\u8981\u90A3\u79CD\u4E1C\u897F","h",{x:.08,y:.8},"But I don\u2019t need things like that"],[84.92,89.15,"\u3042\u306A\u305F\u304C\u713C\u304D\u3064\u3044\u305F\u307E\u307E","\u4F60\u59CB\u7EC8\u70D9\u5370\u5728","v",{x:.85,in:"burn",c:Bn},"You stay burned into"],[86.9,89.15,"\u79C1\u306E\u5FC3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u30FC","\u6211\u5FC3\u4E2D\u7684\u653E\u6620\u673A\u91CC","v",{x:.78,in:"burn",c:Bn},"the projector of my heart"],[89.26,91.25,"\u5BC2\u3057\u304F\u306A\u3044\u3075\u308A\u3057\u3066\u305F","\u6211\u4E00\u76F4\u5047\u88C5\u5E76\u4E0D\u5BC2\u5BDE","cine",{},"I kept pretending I wasn\u2019t lonely"],[91.35,93.45,"\u307E\u3042 \u305D\u3093\u306A\u306E\u304A\u4E92\u3044\u69D8\u304B","\u561B\uFF0C\u8FD9\u70B9\u6211\u4EEC\u5F7C\u6B64\u5F7C\u6B64\u5427","cine",{},"Well, I guess we both did"],[93.57,95.5,"\u8AB0\u304B\u3092\u6C42\u3081\u308B\u3053\u3068\u306F","\u6E34\u6C42\u7740\u67D0\u4E2A\u4EBA","cine",{},"To long for someone"],[95.57,97.55,"\u5373\u3061\u50B7\u3064\u304F\u3053\u3068\u3060\u3063\u305F","\u5C31\u610F\u5473\u7740\u4F1A\u53D7\u4F24","cine",{out:"shatter"},"was to be hurt, all along"],[98.19,103.4,"Oh can you give me one last kiss?","\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F","en",{rd:3.2,in:"burn",c:Bn},"\u306D\u3048\u3000\u6700\u5F8C\u306B\u30AD\u30B9\u3092\u304F\u308C\u308B\uFF1F"],[103.72,107.9,"\u71C3\u3048\u308B\u3088\u3046\u306A\u30AD\u30B9\u3092\u3057\u3088\u3046","\u6765\u4E00\u4E2A\u71C3\u70E7\u822C\u7684\u543B\u5427","v",{x:.13,in:"burn",c:Bn,out:"rise"},"Let\u2019s share a kiss that burns"],[108.05,112.3,"\u5FD8\u308C\u305F\u304F\u3066\u3082","\u5373\u4F7F\u60F3\u8981\u5FD8\u8BB0","v",{x:.13,c:Bn,out:"dust"},"so that even if I tried to forget"],[112.44,115,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u307B\u3069","\u4E5F\u65E0\u6CD5\u5FD8\u8BB0","v",{x:.16,c:Bn,out:"dust"},"I never could"],[115.19,120.85,Ei,"","oh",{c:Bn}],[121,123.65,Os,pr,"en",{rd:2.4,c:Bn,y:.66},mr],[123.76,129.5,Ei,"","oh",{c:Bn}],[129.61,135.6,Os,pr,"en",{rd:4.2,c:Bn,out:"dust",y:.66},mr],[149.52,154.9,"\u3082\u3046\u5206\u304B\u3063\u3066\u3044\u308B\u3088","\u5176\u5B9E\u6211\u65E9\u5C31\u660E\u767D\u4E86","center",{y:.86,c:eh},"I already know"],[155.05,159.45,"\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u3082","\u5373\u4F7F\u8FD9\u4E16\u754C\u8D70\u5230\u5C3D\u5934","center",{y:.86,c:eh},"even at the end of the world"],[159.63,165.9,"\u5E74\u3092\u3068\u3063\u3066\u3082","\u5373\u4F7F\u6211\u4EEC\u90FD\u5DF2\u8001\u53BB","center",{y:.86,c:eh,out:"dust"},"even when we grow old"],[166.14,168.6,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[168.71,170.6,Ei,"","oh",{}],[170.67,175.35,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[175.47,181.1,Ei,"","oh",{}],[181.25,184.75,Os,pr,"en",{rd:2.8},mr],[184.86,189.6,Ei,"","oh",{}],[189.7,192.45,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[192.56,198.15,Ei,"","oh",{}],[198.3,207.5,Os,pr,"en",{rd:4.6,rainbow:1,out:"dust"},mr],[226.2,231.2,"\u5439\u3044\u3066\u3044\u3063\u305F\u98A8\u306E\u5F8C\u3092","\u8FFD\u968F\u7740\u90A3\u9635\u5439\u8FC7\u7684\u98CE","pencil",{x:.1,y:.2},"Chasing after the wind that blew by"],[230.57,237.8,"\u8FFD\u3044\u304B\u3051\u305F\u3000\u7729\u3057\u3044\u5348\u5F8C","\u8FFD\u9010\u7740\u7684\u3000\u90A3\u4E2A\u8000\u773C\u7684\u5348\u540E","pencil",{x:.1,y:.33},"that dazzling afternoon"]],gd=2*gn,Qo=Jo.filter(i=>i[4]==="oh").flatMap(i=>[0,1,2,3,4].map(e=>i[0]+e*gd)),th=Jo.filter(i=>i[2]===Os).map(i=>i[0]),vd=()=>gd;var xd=`
#lyr{position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden;--u:1px}
#lyr .ln{position:absolute;display:none;white-space:nowrap;color:#f4efe6;will-change:transform}
#lyr .ln span{display:inline-block}
#lyr .jp{font-family:"OLK Mincho",serif;font-weight:500}
#lyr .tr{opacity:0}
#lyr .tr>div{display:block}
#lyr .rule{display:block;font-style:normal;inline-size:calc(var(--u)*64);block-size:1px;margin-inline:auto;
  background:linear-gradient(90deg,transparent,rgba(255,244,228,.75),transparent);transform-origin:50% 50%}
#lyr .zh{font-family:"OLK SC",serif;font-weight:400;letter-spacing:.32em;color:#efe6da}
#lyr .x{color:rgba(232,224,214,.78)}
#lyr .x.en{font-family:"OLK Serif",serif;font-style:italic;font-weight:500;letter-spacing:.045em}
#lyr .x.ja{font-family:"OLK Mincho",serif;font-weight:400;letter-spacing:.24em}

/* vertical columns (right-to-left): original | hairline | \u4E2D\u6587 | English set sideways */
#lyr .l-v{writing-mode:vertical-rl;text-orientation:mixed}
#lyr .l-v .jp{font-size:calc(var(--u)*46);letter-spacing:.26em}
#lyr .l-v .tr{margin-top:calc(var(--u)*70)}
#lyr .l-v .rule{inline-size:calc(var(--u)*54);margin:0 calc(var(--u)*14) 0 calc(var(--u)*10);
  background:linear-gradient(180deg,rgba(255,244,228,.8),transparent);transform-origin:50% 0}
#lyr .l-v .zh{font-size:calc(var(--u)*17);margin-left:calc(var(--u)*6)}
#lyr .l-v .x.en{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*18);letter-spacing:.08em}

/* horizontal, left aligned */
#lyr .l-h .jp{font-size:calc(var(--u)*40);letter-spacing:.14em}
#lyr .l-h .rule{margin:calc(var(--u)*12) 0 calc(var(--u)*9);background:linear-gradient(90deg,rgba(255,244,228,.8),transparent);transform-origin:0 50%}
#lyr .l-h .zh{font-size:calc(var(--u)*16)}
#lyr .l-h .x{font-size:calc(var(--u)*16);margin-top:calc(var(--u)*5)}

#lyr .l-center,#lyr .l-en,#lyr .l-whisper,#lyr .l-cine,#lyr .l-credit{text-align:center}
#lyr .l-center .jp{font-size:calc(var(--u)*46);letter-spacing:.22em}
#lyr .l-center .rule{margin-top:calc(var(--u)*14);margin-bottom:calc(var(--u)*11)}
#lyr .l-center .zh{font-size:calc(var(--u)*17);padding-left:.32em}
#lyr .l-center .x{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*6)}

/* big English: English serif hero, then Japanese in wide Mincho, then \u4E2D\u6587 */
#lyr .l-en .jp,#lyr .l-oh span,#lyr .l-whisper .jp,#lyr .l-credit .jp{font-family:"OLK Serif",serif;font-style:italic}
#lyr .l-en .jp{font-weight:300;font-size:calc(var(--u)*82);letter-spacing:.01em}
#lyr .l-en .tr{display:flex;flex-direction:column;align-items:center}
#lyr .l-en .rule{order:0;inline-size:calc(var(--u)*120);margin:calc(var(--u)*16) auto calc(var(--u)*12)}
#lyr .l-en .x{order:1;font-size:calc(var(--u)*21);color:rgba(246,238,228,.9)}
#lyr .l-en .zh{order:2;font-size:calc(var(--u)*17);margin-top:calc(var(--u)*9);opacity:.85;padding-left:.32em}

#lyr .l-oh{inset:0}
#lyr .l-oh span{position:absolute;font-weight:500;font-size:calc(var(--u)*72);transform-origin:50% 60%}
#lyr .l-whisper .jp{font-weight:300;font-size:calc(var(--u)*34);letter-spacing:.08em}
#lyr .l-whisper .rule{margin-top:calc(var(--u)*12);margin-bottom:calc(var(--u)*9);inline-size:calc(var(--u)*40)}
#lyr .l-whisper .zh{font-size:calc(var(--u)*15)}
#lyr .l-whisper .x{font-size:calc(var(--u)*15);margin-top:calc(var(--u)*5)}

/* letterbox subtitle: original on top, \u4E2D\u6587 | English share one quiet line */
#lyr .l-cine .jp{font-size:calc(var(--u)*30);letter-spacing:.16em}
#lyr .l-cine .rule{display:none}
#lyr .l-cine .tr{display:flex;justify-content:center;align-items:baseline;margin-top:calc(var(--u)*8)}
#lyr .l-cine .zh{font-size:calc(var(--u)*14);letter-spacing:.24em}
#lyr .l-cine .x{font-size:calc(var(--u)*15)}
#lyr .l-cine .x::before{content:'';display:inline-block;width:1px;height:.9em;background:currentColor;opacity:.55;margin:0 1.1em 0 .9em;vertical-align:-.12em}

/* pencil epilogue on paper (multiply) */
#lyr .l-pencil{color:#3d352f}
#lyr .l-pencil .jp{font-size:calc(var(--u)*42);letter-spacing:.18em;font-weight:400}
#lyr .l-pencil .rule{margin:calc(var(--u)*12) 0 calc(var(--u)*9);background:linear-gradient(90deg,rgba(90,76,64,.7),transparent);transform-origin:0 50%}
#lyr .l-pencil .zh{font-size:calc(var(--u)*16);color:#6f6256}
#lyr .l-pencil .x{font-size:calc(var(--u)*17);margin-top:calc(var(--u)*5);color:#8a7b6d}

#lyr .l-credit .jp{font-style:normal;font-weight:400;font-size:calc(var(--u)*19);letter-spacing:.5em;text-transform:uppercase}
#lyr .l-credit .rule{margin-top:calc(var(--u)*14);margin-bottom:calc(var(--u)*11);inline-size:calc(var(--u)*36)}
#lyr .l-credit .zh{font-size:calc(var(--u)*14);letter-spacing:.7em}
#lyr .l-credit .x{font-size:calc(var(--u)*13);margin-top:calc(var(--u)*7);letter-spacing:.5em}
`;var o1={fade:.8,dust:1.5,shatter:.6,blur:.45,rise:1.2},_d=[15239002,14643064,13000599,9201860,6062032,6207176].map($o),a1=$o(4011311),yd=[1,.45,.12],Md=[1,.8,.45],bd=[1,1,1],Sd=i=>$o(parseInt(i.slice(1),16)),Bs=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Ai=(i,e)=>e===void 0?`rgb(${i.map(t=>Math.round(Qe(t)*255)).join(",")})`:`rgba(${i.map(t=>Math.round(Qe(t)*255)).join(",")},${e.toFixed(3)})`,jo=class{constructor(e){let t=document.createElement("style");t.textContent=xd,document.head.appendChild(t),this.el=document.createElement("div"),this.el.id="lyr",e.appendChild(this.el),this.u=1,this.cineY=.93,this.enabled=!0,this.blend="",this.alpha="",this.ohCount=0,this.lines=Jo.map(n=>this.make(n)),this.resize()}make([e,t,n,s,r,o,a]){let l=document.createElement("div");l.className="ln l-"+r;let c=document.createElement("div");c.className="jp",l.appendChild(c);let h=["oh","en","whisper","credit"].includes(r),d=h?n.split(" "):Array.from(n).map(v=>v===" "?"\xA0":v),u=d.map((v,_)=>{let D=document.createElement("span");return D.textContent=v,c.appendChild(D),h&&r!=="oh"&&_<d.length-1&&c.appendChild(document.createTextNode(" ")),D}),m=[];if(r==="oh"){let v=this.ohCount++%2===1;u.forEach((_,D)=>{let F=Math.sin(D/4*Math.PI),H=.18+D*.16,q=v?.33-.06*F:.64+.06*F;m[D]=`left:${(H*100).toFixed(1)}%;top:${(q*100).toFixed(1)}%;`})}let g=null,x=null,f=null,p=null,T=(v,_)=>{let D=document.createElement("div");return D.className=v,_&&(D.textContent=_),D};if(s||a){g=T("tr"),g.style.opacity="1",x=T("rule"),g.appendChild(x);let v=r==="pencil"?null:Bs(o.c?Sd(o.c):[.957,.937,.902],[.93,.9,.86],.45);s&&(f=T("zh",s),g.appendChild(f),v&&(f.style.color=Ai(v))),a&&(p=T("x "+(["en","whisper","credit"].includes(r)?"ja":"en"),a),g.appendChild(p),v&&(p.style.color=Ai(v,r==="en"?.92:.78))),l.appendChild(g)}let M=l.style,S=o.x??.5,w=o.y??.5;r==="v"?(M.left=S*100+"%",M.top="15%"):r==="h"||r==="pencil"?(M.left=S*100+"%",M.top=w*100+"%"):r==="center"||r==="credit"?(M.left="50%",M.top=w*100+"%"):r==="en"?(M.left="50%",M.top=(o.y??.47)*100+"%"):r==="whisper"?(M.left="50%",M.top="82%"):r==="cine"&&(M.left="50%"),this.el.appendChild(l);let A=u.length,R=t-e,C=r==="oh"?vd()*4:o.rd??(r==="credit"?.6:r==="whisper"?3:r==="pencil"?Math.min(R*.6,3.2):Qe(R*.5,.5,2.4)),k=o.out||"fade";return{t0:e,t1:t,el:l,spans:u,Z:g,R:x,ZH:f,X:p,style:r,o,bases:m,vis:!1,cache:[],lcache:"",zc:"",ut:u.map((v,_)=>e+(A>1?C*_/(A-1):0)),c:o.c?Sd(o.c):[.957,.937,.902],in:o.in||(r==="pencil"?"ink":r==="cine"?"type":"glow"),out:k,exitDur:o1[k],fd:r==="pencil"?1:.7}}resize(){let e=innerWidth,t=innerHeight;this.u=Math.min(e/1920,t/1080),this.el.style.setProperty("--u",this.u+"px");let n=Math.max(0,1-e/t/2.39);this.cineY=n*t*.5>90*this.u?1-n/4:.9,this.lines.forEach(s=>{s.cache=[],s.lcache=""})}toggle(){this.enabled=!this.enabled}update(e,t=1){let n=e>224?"multiply":"screen";n!==this.blend&&(this.el.style.mixBlendMode=n,this.blend=n);let s=Qe(t).toFixed(3);s!==this.alpha&&(this.el.style.opacity=s,this.alpha=s);for(let r of this.lines){let o=this.enabled&&e>=r.t0-.05&&e<r.t1+r.exitDur;o!==r.vis&&(r.el.style.display=o?"block":"none",r.vis=o,r.cache=[],r.lcache=""),o&&this.frame(r,e)}}frame(e,t){let n=this.u,s=t-e.t0,r=t-e.t1,o=r>0?Qe(r/e.exitDur):0,a=Ve.get("loud",t),l="",c=1,h=0;switch(e.style){case"v":l=`translate(-50%,${(s*3*n).toFixed(1)}px)`;break;case"h":l=`translate(${(s*3*n).toFixed(1)}px,-50%)`;break;case"center":case"credit":case"whisper":l=`translate(-50%,-50%) scale(${(1+s*.006).toFixed(4)})`;break;case"en":l=`translate(-50%,-50%) scale(${(.97+s*.005).toFixed(4)})`;break;case"cine":l="translate(-50%,-50%)";break;case"pencil":l="translate(0,-50%)";break}e.out==="fade"?c=1-J.inOut(o):e.out==="blur"?(c=1-o,h=o*12*n,l+=` scale(${(1+o*.08).toFixed(3)})`):e.out==="rise"&&(c=1-J.in(o),h=o*4*n,l+=` translateY(${(-o*50*n).toFixed(1)}px)`);let d=l+c.toFixed(3)+h.toFixed(1)+this.cineY;if(d!==e.lcache){e.lcache=d;let u=e.el.style;u.transform=l,u.opacity=c.toFixed(3),u.filter=h>.1?`blur(${h.toFixed(1)}px)`:"",e.style==="cine"&&(u.top=(this.cineY*100).toFixed(2)+"%")}if(e.Z){let u=1-Qe(r/.6),m=e.style==="pencil"?1:.9,g=J.out(Z(e.t0+.15,e.t0+1,t))*u,x=J.out(Z(e.t0+.5,e.t0+1.5,t))*u,f=g.toFixed(3)+x.toFixed(3);if(f!==e.zc){e.zc=f;let p=e.style==="v",T=p?"X":"Y",M=S=>`translate${T}(${((p?-1:1)*(1-S)*8*n).toFixed(1)}px)`;e.R.style.transform=`scale${p?"Y":"X"}(${g.toFixed(3)})`,e.R.style.opacity=(g*.9).toFixed(3),e.ZH&&(e.ZH.style.opacity=(g*m).toFixed(3),e.ZH.style.transform=M(g)),e.X&&(e.X.style.opacity=x.toFixed(3),e.X.style.transform=M(x))}}for(let u=0;u<e.spans.length;u++){let m=e.style==="oh"?this.ohUnit(e,u,t,n):this.unit(e,u,t,n,a,r);m!==e.cache[u]&&(e.cache[u]=m,e.spans[u].style.cssText=m)}}unit(e,t,n,s,r,o){let a=n-e.ut[t],l=e.spans.length;if(a<0)return"opacity:0";let c=Qe(a/e.fd),h=1,d=0,u=0,m=1,g=0,x=0,f=e.c,p=e.c,T=.55,M=14;switch(e.o.rainbow&&(p=_d[t%6],f=Bs(p,bd,.5)),e.in){case"type":{let w=Math.exp(-a*10);d=(ri(t*13+Math.floor(n*40))-.5)*3*s*w,T=.4+w,M=6+16*w;break}case"burn":{let w=Qe(a/1.1);h=J.out(Qe(a/.3)),f=w<.5?Bs(yd,Md,w*2):Bs(Md,e.c,w*2-1),p=yd,T=1-.55*w,M=10+26*(1-w),u=(1-c)*8*s;break}case"ink":{let w=J.out(Qe(a/1.2));h=w,x=(1-w)*3*s,m=1.08-.08*w,f=Bs(_d[t%6],a1,Z(.2,1.8,a)*.6),T=0;break}default:{let w=J.out(c);h=w,x=(1-w)*9*s,u=(1-w)*12*s,T=.45+.6*(1-w),M=12+24*(1-w)}}if(e.in!=="ink"&&(T=T*(.8+.5*r)+Math.exp(-a*2.5)*.35),o>0&&e.out==="dust"){let w=Qe((o-t/l*e.exitDur*.45)/(e.exitDur*.55));h*=1-w,u-=(w*36+w*w*20)*s,d+=(ri(t*7.3+e.t0)-.5)*50*s*w,x+=w*7*s,m*=1+w*.25}else if(o>0&&e.out==="shatter"){let w=Qe(o/e.exitDur),A=ri(t*3.1+e.t0),R=ri(t*5.7+1),C=ri(t*9.2+2);d+=(A-.5)*240*s*w,u+=(-60*R+320*w)*w*s,g=(C-.5)*220*w,h*=1-w*w,m*=1-.3*w}let S=`opacity:${h.toFixed(3)};color:${Ai(f)}`;if((d||u||m!==1||g)&&(S+=`;transform:translate(${d.toFixed(1)}px,${u.toFixed(1)}px) rotate(${g.toFixed(1)}deg) scale(${m.toFixed(3)})`),x>.15&&(S+=`;filter:blur(${x.toFixed(1)}px)`),T>.01){let w=Math.min(T,1);S+=`;text-shadow:0 0 ${(M*s).toFixed(1)}px ${Ai(p,w)},0 0 ${(M*3*s).toFixed(1)}px ${Ai(p,w*.35)}`}return S}ohUnit(e,t,n,s){let r=n-e.ut[t],o=e.bases[t];if(r<0)return o+"opacity:0";let a=J.out(Qe(r/.5)),l=Math.exp(-r*4),c=e.c,h=Z(0,.06,r)*(1-.5*Z(.5,2.5,r))*(1-Qe((n-e.t1)/e.exitDur));return o+`opacity:${h.toFixed(3)};color:${Ai(Bs(c,bd,l*.5))};transform:translate(-50%,-50%) translateY(${(-r*5*s).toFixed(1)}px) scale(${(1.45-.45*a).toFixed(3)});text-shadow:0 0 ${((10+40*l)*s).toFixed(1)}px ${Ai(c,.6+.4*l)},0 0 ${(80*l*s+1).toFixed(1)}px ${Ai([1,.7,.5],.5*l)}`}};var l1=`
.olk-ov{position:fixed;inset:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#050507;color:#e9dcc6;transition:opacity 1.4s ease}
.olk-ov.hide{opacity:0;pointer-events:none}
.olk-title{font-family:"OLK Script",cursive;font-size:min(13vw,160px);color:#e7c58f;text-shadow:0 0 34px rgba(231,197,143,.35);line-height:1.25;padding:0 .3em}
.olk-sub{font-family:"OLK Serif",serif;letter-spacing:.6em;font-size:13px;text-transform:uppercase;opacity:.7;margin-top:6px;padding-left:.6em}
.olk-prog{width:min(360px,60vw);height:1px;background:rgba(255,255,255,.12);margin-top:44px;position:relative;overflow:hidden}
.olk-prog i{position:absolute;left:0;top:0;bottom:0;width:0;background:#e7c58f;box-shadow:0 0 8px #e7c58f;transition:width .25s}
.olk-pct{font-family:"OLK Mono",monospace;font-size:11px;opacity:.5;margin-top:12px;letter-spacing:.25em}
.olk-btn{margin-top:46px;font-family:"OLK SC",serif;font-size:15px;letter-spacing:.4em;color:#f3e6cf;background:transparent;border:1px solid rgba(231,197,143,.6);padding:14px 30px 14px 36px;cursor:pointer;border-radius:40px;transition:all .3s}
.olk-btn:hover,.olk-btn:focus-visible{background:rgba(231,197,143,.14);box-shadow:0 0 26px rgba(231,197,143,.3);outline:none}
.olk-hint{font-family:"OLK SC",serif;font-size:12px;opacity:.45;margin-top:22px;letter-spacing:.12em;text-align:center;line-height:2}
#olk-bar{position:fixed;left:0;right:0;bottom:0;z-index:15;display:flex;align-items:center;gap:12px;padding:16px 22px;background:linear-gradient(transparent,rgba(0,0,0,.55));color:#eee;font:12px "OLK Mono",monospace;transition:opacity .6s}
#olk-bar.idle{opacity:0;pointer-events:none}
#olk-bar button{background:none;border:0;color:#eee;cursor:pointer;font:15px "OLK SC",serif;min-width:28px;height:28px;opacity:.8}
#olk-bar button:hover,#olk-bar button:focus-visible{opacity:1;outline:none;text-shadow:0 0 8px #e7c58f}
#olk-track{flex:1;height:18px;cursor:pointer;position:relative}
#olk-track:before{content:"";position:absolute;left:0;right:0;top:8px;height:2px;background:rgba(255,255,255,.2)}
#olk-track i{position:absolute;left:0;top:8px;height:2px;background:#e7c58f}
#olk-end{position:fixed;left:50%;bottom:9%;transform:translateX(-50%);z-index:16;transition:opacity 1.5s}
#olk-end.hide{opacity:0;pointer-events:none}
#olk-end .olk-btn{color:#5a4a3c;border-color:rgba(90,74,60,.5);margin:0}
body.olk-idle{cursor:none}`,Td=i=>(i=Math.max(0,i),`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`),vr=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t&&(n.innerHTML=t),n},ea=class{constructor(e,t,n){this.cb=t,this.dur=n,this.clean=!1,this.hidden=!1;let s=vr("style");s.textContent=l1,document.head.appendChild(s);let r='<div class="olk-title">One Last Kiss</div><div class="olk-sub">Hikaru Utada</div>';this.load=vr("div","olk-ov",r+'<div class="olk-prog"><i></i></div><div class="olk-pct">0%</div>'),this.gate=vr("div","olk-ov hide",r+'<button class="olk-btn" aria-label="Play">\u25B6 \u70B9\u51FB\u64AD\u653E</button><div class="olk-hint">\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5E26\u58F0\u97F3\u7684\u81EA\u52A8\u64AD\u653E<br>\u53CC\u51FB\u6587\u4EF6\u5939\u91CC\u7684\u300CPlay-OneLastKiss.bat\u300D\u5373\u53EF\u5168\u5C4F\u81EA\u52A8\u64AD\u653E</div>'),this.bar=vr("div","idle"),this.bar.id="olk-bar",this.bar.innerHTML='<button data-k="play" aria-label="Play or pause">\u275A\u275A</button><span class="tm">0:00</span><div id="olk-track" role="slider" aria-label="Seek" tabindex="0"><i></i></div><span class="du"></span><button data-k="lyr" aria-label="Toggle lyrics">\u8BCD</button><button data-k="fs" aria-label="Fullscreen">\u26F6</button>',this.endEl=vr("div","hide",'<button class="olk-btn" aria-label="Replay">\u21BB \u91CD\u64AD</button>'),this.endEl.id="olk-end",[this.load,this.gate,this.bar,this.endEl].forEach(l=>e.appendChild(l)),this.bar.querySelector(".du").textContent=Td(n),this.track=this.bar.querySelector("#olk-track"),this.fill=this.track.firstChild,this.playBtn=this.bar.querySelector("[data-k=play]"),this.tm=this.bar.querySelector(".tm"),this.bar.addEventListener("click",l=>{let c=l.target.dataset&&l.target.dataset.k;c==="play"?t.toggle():c==="lyr"?t.lyrics():c==="fs"&&this.fullscreen()}),this.track.addEventListener("click",l=>{let c=this.track.getBoundingClientRect();t.seek((l.clientX-c.left)/c.width*n)}),this.endEl.querySelector("button").addEventListener("click",()=>t.restart());let o=0,a=()=>{this.clean||this.hidden||(this.bar.classList.remove("idle"),document.body.classList.remove("olk-idle"),clearTimeout(o),o=setTimeout(()=>{this.bar.classList.add("idle"),document.body.classList.add("olk-idle")},2600))};addEventListener("mousemove",a),addEventListener("touchstart",a),addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(c===" "||c==="k")l.preventDefault(),t.toggle();else if(c==="arrowright")t.seekBy(5);else if(c==="arrowleft")t.seekBy(-5);else if(c==="f")this.fullscreen();else if(c==="l")t.lyrics();else if(c==="r")t.restart();else if(c==="h")this.hidden=!this.hidden,this.bar.classList.add("idle");else return;a()})}fullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}loading(e,t){this.load.querySelector("i").style.width=(e*100).toFixed(1)+"%",this.load.querySelector(".olk-pct").textContent=t||Math.round(e*100)+"%"}ready(e=!1){e&&(this.load.style.transition="none"),this.load.classList.add("hide")}showGate(e){this.gate.classList.remove("hide");let t=this.gate.querySelector("button");t.focus();let n=()=>{this.gate.classList.add("hide"),e()};t.addEventListener("click",n,{once:!0})}update(e,t,n){this.fill.style.width=(e/this.dur*100).toFixed(2)+"%",this.tm.textContent=Td(e),this.playBtn.textContent=t?"\u275A\u275A":"\u25B6",this.endEl.classList.toggle("hide",!n||this.clean)}};var Xe=class{constructor(e,t={}){this.ctx=e,this.scene=new Nn,this.camera=t.ortho?new Vi(-e.aspect,e.aspect,1,-1,.1,100):new Ft(t.fov||45,e.aspect,t.near||.1,t.far||2e3),t.ortho&&(this.camera.position.z=10),this.ortho=!!t.ortho,this.clear=new Me(0,0,0)}build(){}update(e,t){}post(e){return{}}resize(e,t){let n=e/t;this.ortho?(this.camera.left=-n,this.camera.right=n):this.camera.aspect=n,this.camera.updateProjectionMatrix()}render(e,t){e.setRenderTarget(t),e.setClearColor(this.clear,1),e.clear(),e.render(this.scene,this.camera)}},c1="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function sn(i,e,t={}){let n=new Ee({vertexShader:c1,fragmentShader:i,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||nn}),s=new de(new ze(2,2),n);return s.frustumCulled=!1,s.renderOrder=t.order??-100,s}function ta(i,e,t,n={}){return new Ee({vertexShader:i,fragmentShader:e,uniforms:t,transparent:!0,depthWrite:!1,blending:it,...n})}var wd=(i,e=1,t={})=>new yt({color:i,transparent:!0,opacity:e,blending:it,depthWrite:!1,side:Ze,...t});var un={mincho:'"OLK Mincho", "Yu Mincho", serif',serif:'"OLK Serif", "Times New Roman", serif',script:'"OLK Script", cursive',sc:'"OLK SC", "Songti SC", serif',mono:'"OLK Mono", monospace'};function xn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Pn(i,e={}){let t=new Ls(i);return t.colorSpace=e.linear?en:jt,t.anisotropy=4,e.repeat&&(t.wrapS=t.wrapT=cr),e.mip===!1&&(t.generateMipmaps=!1,t.minFilter=kt),t.needsUpdate=!0,t}function Ed(i,e={}){let t=e.size||96,n=e.pad??Math.ceil(t*.35),s=`${e.style||""} ${e.weight||400} ${t}px ${e.font||un.serif}`,r=xn(8,8).getContext("2d");r.font=s;let o=e.spacing||0,a=Math.ceil(r.measureText(i).width+o*i.length+n*2),l=Math.ceil(t*1.4+n*2),c=xn(a,l),h=c.getContext("2d");return h.font=s,h.textBaseline="middle",h.fillStyle=e.color||"#fff","letterSpacing"in h&&(h.letterSpacing=o+"px"),e.glow&&(h.shadowColor=e.glowColor||e.color||"#fff",h.shadowBlur=e.glow),h.fillText(i,n,l/2),e.glow&&(h.shadowBlur=0,h.fillText(i,n,l/2)),{c,w:a,h:l}}function na(i=128,e=1){let t=xn(i,i),n=t.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.12*e,"rgba(255,255,255,0.55)"),r.addColorStop(.4,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,i),Pn(t,{linear:!0})}function Ad(){let t=xn(1600,200),n=t.getContext("2d");n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`500 170px ${un.serif}`;for(let s=0;s<10;s++)n.fillText(String(s),160*s+160/2,200/2+8);return Pn(t,{linear:!0})}function Rd(i=300,e=400){let t=xn(i,e),n=t.getContext("2d");n.filter="blur(3px)";let s=(r,o,a,l,c,h=0)=>{n.fillStyle=c,n.beginPath(),n.ellipse(r*i,o*e,a*i,l*e,h,0,Math.PI*2),n.fill()};return n.fillStyle="rgba(120,120,120,1)",n.beginPath(),n.moveTo(.34*i,.44*e),n.bezierCurveTo(.2*i,.47*e,.1*i,.56*e,.06*i,1*e),n.lineTo(.94*i,e),n.bezierCurveTo(.9*i,.56*e,.8*i,.47*e,.66*i,.44*e),n.closePath(),n.fill(),s(.5,.3,.17,.2,"rgba(90,90,90,1)"),s(.37,.45,.06,.12,"rgba(80,80,80,1)",.2),s(.63,.45,.06,.12,"rgba(80,80,80,1)",-.2),n.fillStyle="rgba(215,215,215,1)",n.beginPath(),n.moveTo(.4*i,.44*e),n.quadraticCurveTo(.5*i,.6*e,.6*i,.44*e),n.closePath(),n.fill(),s(.5,.415,.05,.05,"rgba(225,225,225,1)"),s(.5,.29,.105,.14,"rgba(255,255,255,1)"),s(.47,.27,.012,.006,"rgba(150,150,150,1)"),s(.54,.27,.012,.006,"rgba(150,150,150,1)"),s(.43,.84,.1,.045,"rgba(250,250,250,1)",-.2),s(.58,.83,.1,.04,"rgba(240,240,240,1)",.25),n.filter="none",t}var h1=`attribute vec3 aPrev, aNext; attribute float aSide, aS, aW, aSeed; attribute vec2 aTime; attribute vec3 aCol;
uniform vec2 uRes; uniform float uT, uWidth, uBoil, uBoilT, uTaper;
varying float vS, vSide, vLocal, vThin; varying vec3 vCol; ${He}
void main(){
  vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec4 pp = projectionMatrix * modelViewMatrix * vec4(aPrev, 1.0);
  vec4 nn = projectionMatrix * modelViewMatrix * vec4(aNext, 1.0);
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 sc = c.xy / c.w * asp, sp = pp.xy / pp.w * asp, sn = nn.xy / nn.w * asp;
  vec2 d1 = normalize(sc - sp + 1e-7), d2 = normalize(sn - sc + 1e-7);
  vec2 dir = normalize(d1 + d2 + 1e-7); vec2 nrm = vec2(-dir.y, dir.x);
  float miter = 1.0 / max(dot(nrm, vec2(-d1.y, d1.x)), 0.35);
  float local = clamp((uT - aTime.x) / max(aTime.y, 1e-4), 0.0, 1.0); local = local * local * (3.0 - 2.0 * local);
  float taper = mix(1.0, smoothstep(0.0, 0.06, aS) * smoothstep(1.0, 0.9, aS) * 0.8 + 0.2, uTaper);
  float w = aW * uWidth * taper / 1080.0;
  float minW = 1.1 / uRes.y;           // keep >= ~1.1px half-width, trade width for alpha
  vThin = clamp(w / minW, 0.0, 1.0); w = max(w, minW);
  vec2 off = nrm * w * aSide * miter;
  float fr = floor(uBoilT * 10.0);
  off += (vec2(vnoise(vec2(aS * 5.0 + aSeed * 17.0, fr)), vnoise(vec2(aS * 5.0 + aSeed * 29.0, fr + 50.0))) - 0.5) * uBoil / 540.0;
  c.xy += off / asp * c.w;
  gl_Position = c;
  vS = aS; vSide = aSide; vLocal = local; vCol = aCol;
}`,u1=`uniform float uAlpha, uTip, uMode, uGlow; varying float vS, vSide, vLocal, vThin; varying vec3 vCol; ${He}
void main(){
  if (vS > vLocal || vLocal <= 0.0) discard;
  float edge = 1.0 - abs(vSide);
  float head = smoothstep(0.04, 0.0, vLocal - vS) * step(vLocal, 0.995);
  if (uMode < 0.5) { // glowing ink on dark (additive)
    float a = smoothstep(0.0, 0.5, edge) + pow(edge, 3.0) * uGlow;
    gl_FragColor = vec4(vCol * (a * uAlpha * vThin) * (1.0 + head * uTip), 1.0);
  } else { // pencil on paper (normal blend)
    float tooth = vnoise(gl_FragCoord.xy * 0.55) * 0.6 + vnoise(gl_FragCoord.xy * 1.7) * 0.4;
    float a = smoothstep(0.05, 0.6, edge) * smoothstep(0.18, 0.62, tooth + edge * 0.35);
    gl_FragColor = vec4(vCol, a * uAlpha * 0.92 * vThin);
  }
}`,Ri=class{constructor(e={}){this.mode=e.mode||"glow",this.P=[],this.PR=[],this.NX=[],this.SD=[],this.S=[],this.W=[],this.SE=[],this.TM=[],this.CO=[],this.I=[],this.v=0,this.count=0}add(e,t={}){let n=e.map(h=>[h[0],h[1],h[2]||0]);if(n.length<2)return this;t.closed&&n.push(n[0]);let s=n.length,r=[0];for(let h=1;h<s;h++)r.push(r[h-1]+Math.hypot(n[h][0]-n[h-1][0],n[h][1]-n[h-1][1],n[h][2]-n[h-1][2]));let o=r[s-1]||1,a=t.seed??this.count*.618,l=(h,d)=>[2*h[0]-d[0],2*h[1]-d[1],2*h[2]-d[2]];for(let h=0;h<s;h++){let d=h>0?n[h-1]:t.closed?n[s-2]:l(n[0],n[1]),u=h<s-1?n[h+1]:t.closed?n[1]:l(n[s-1],n[s-2]),m=r[h]/o,g=typeof t.color=="function"?t.color(m):t.color||[1,.8,.5],x=(t.width||2)*(t.pressure?t.pressure(m):1);for(let f of[-1,1])this.P.push(...n[h]),this.PR.push(...d),this.NX.push(...u),this.SD.push(f),this.S.push(m),this.W.push(x),this.SE.push(a),this.TM.push(t.start||0,t.dur||1),this.CO.push(...g)}let c=this.v;for(let h=0;h<s-1;h++){let d=c+h*2;this.I.push(d,d+1,d+2,d+1,d+3,d+2)}return this.v+=s*2,this.count++,this}build(e={}){let t=new Je,n=(o,a)=>new _t(o,a);t.setAttribute("position",n(this.P,3)),t.setAttribute("aPrev",n(this.PR,3)),t.setAttribute("aNext",n(this.NX,3)),t.setAttribute("aSide",n(this.SD,1)),t.setAttribute("aS",n(this.S,1)),t.setAttribute("aW",n(this.W,1)),t.setAttribute("aSeed",n(this.SE,1)),t.setAttribute("aTime",n(this.TM,2)),t.setAttribute("aCol",n(this.CO,3)),t.setIndex(this.I);let s=this.mode==="paper";this.uniforms={uRes:{value:new ge(1920,1080)},uT:{value:0},uWidth:{value:1},uBoil:{value:0},uBoilT:{value:0},uTaper:{value:1},uAlpha:{value:1},uTip:{value:3},uMode:{value:s?1:0},uGlow:{value:.6},...e};let r=new Ee({vertexShader:h1,fragmentShader:u1,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,side:Ze,blending:s?nn:it});return this.mesh=new de(t,r),this.mesh.frustumCulled=!1,this.mesh}set(e,t){this.uniforms.uT.value=e,t&&this.uniforms.uRes.value.copy(t)}},nh=(i,e,t,n=64,s=0,r=Math.PI*2,o=0)=>Array.from({length:n+1},(a,l)=>{let c=s+(r-s)*(l/n);return[i+Math.cos(c)*t,e+Math.sin(c)*t,o]});var d1="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",f1=`uniform sampler2D tMap; uniform float uReveal, uAlpha, uSoft, uMode, uHot; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float a = texture2D(tMap, vUv).a;
  float r = smoothstep(uReveal + 0.002, uReveal - uSoft, vUv.x);
  float hot = smoothstep(uSoft * 3.0, 0.0, uReveal - vUv.x) * step(vUv.x, uReveal) * step(uReveal, 0.999);
  if (uMode < 0.5) gl_FragColor = vec4(uCol * (1.0 + hot * uHot) * a * r * uAlpha, 1.0);
  else gl_FragColor = vec4(uCol * (1.0 - hot * 0.25), a * r * uAlpha);
}`,ih=null,Yi=class{constructor(e,t={}){let{c:n,w:s,h:r}=Ed(e,{font:t.font||un.script,size:t.size||220,color:"#fff",pad:60});this.aspect=s/r,this.H=t.height||.6,this.W=this.H*this.aspect,this.cy=p1(n,160),this.u={tMap:{value:Pn(n)},uReveal:{value:0},uAlpha:{value:1},uSoft:{value:t.soft??.025},uMode:{value:t.paper?1:0},uHot:{value:t.hot??3},uCol:{value:new I(...t.color||[1,.7,.35])}};let o=new Ee({vertexShader:d1,fragmentShader:f1,uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,blending:t.paper?nn:it});this.group=new mn,this.mesh=new de(new ze(this.W,this.H),o),this.group.add(this.mesh),ih=ih||na(128),this.tipMat=new yt({map:ih,color:new Me(...t.tipColor||[3,2.2,1.2]),transparent:!0,blending:it,depthWrite:!1,depthTest:!1}),this.tip=new de(new ze(1,1),this.tipMat),this.tip.scale.setScalar(this.H*.5),this.group.add(this.tip)}set(e,t=1,n=1){this.u.uReveal.value=e,this.u.uAlpha.value=t;let s=this.cy.length,r=Math.min(s-1,Math.max(0,e*(s-1))),o=Math.floor(r),a=r-o,l=this.cy[o]*(1-a)+this.cy[Math.min(s-1,o+1)]*a;this.tip.position.set((e-.5)*this.W,(.5-l)*this.H,.01);let c=e>.002&&e<.998?1:0;this.tipMat.opacity=c*t*n*(.75+.25*Math.sin(e*90)),this.tip.visible=this.tipMat.opacity>.01}};function p1(i,e){let t=i.getContext("2d"),{width:n,height:s}=i,r=t.getImageData(0,0,n,s).data,o=new Float32Array(e),a=.5;for(let l=0;l<e;l++){let c=Math.floor(l/e*n),h=Math.max(c+1,Math.floor((l+1)/e*n)),d=0,u=0;for(let m=c;m<h;m++)for(let g=0;g<s;g+=2){let x=r[(g*n+m)*4+3];d+=x*g,u+=x}a=u>0?d/u/s:a,o[l]=a}for(let l=1;l<e-1;l++)o[l]=(o[l-1]+o[l]*2+o[l+1])/4;return o}var m1=`uniform float uT, uAspect, uDigit, uPhase, uOn, uPop, uBeat; uniform sampler2D tDigits; varying vec2 vUv; ${He}
void main(){
  vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0; float r = length(q);
  float hot = exp(-r * r * 0.6);
  vec3 col = vec3(0.16, 0.12, 0.085) * hot + vec3(0.02, 0.015, 0.01);
  float a01 = fract(atan(q.x, q.y) / 6.28318 + 1.0);
  col += vec3(0.13, 0.095, 0.06) * step(a01, uPhase) * step(r, 0.62) * hot;
  float line = smoothstep(0.006, 0.0, abs(r - 0.62)) + smoothstep(0.006, 0.0, abs(r - 0.72)) * 0.8;
  line += (smoothstep(0.004, 0.0, abs(q.x)) + smoothstep(0.004, 0.0, abs(q.y))) * 0.6 * step(r, 0.95);
  float hand = smoothstep(0.012, 0.0, abs(fract(a01 - uPhase + 0.5) - 0.5) * 6.2832 * r) * step(r, 0.62);
  vec3 cream = vec3(1.0, 0.86, 0.62);
  col += cream * (line * (0.5 + 0.4 * uBeat) + hand * 1.4);
  vec2 d = q / vec2(0.62, 0.78) + 0.5;
  if (uDigit >= 0.0 && d.x > 0.0 && d.x < 1.0 && d.y > 0.0 && d.y < 1.0)
    col = mix(col, cream * 1.7, texture2D(tDigits, vec2((uDigit + d.x) / 10.0, d.y)).a);
  col *= uOn * (0.92 + 0.08 * hash12(vec2(floor(uT * 24.0), 3.0)));
  col += vec3(1.0, 0.95, 0.85) * uPop * 3.0;
  gl_FragColor = vec4(col, 1.0);
}`,rh=1.17,oh=2*gn,ia=rh+7*oh,sh=9.74,Pd=14.02,Cd=18.31;function g1(){let i=ht(21),e=1.9,t=new Ri;for(let n=0;n<130;n++){let s=i(),r=-e+s*2*e,o=-1.05+i()*2.1,a=.38+(i()-.5)*.55,l=.25+i()*.95,c=(i()-.5)*.4,h=[];for(let d=0;d<=20;d++){let u=d/20,m=Math.sin(u*Math.PI)*c*l;h.push([r+Math.cos(a)*l*u-Math.sin(a)*m,o+Math.sin(a)*l*u+Math.cos(a)*m])}t.add(h,{start:Pd+s*2.4+i()*.5,dur:.35+i()*.5,width:1.2+i()*2.4,color:pd(Qe(s+(i()-.5)*.15),.8+i()*.6)})}return t}var sa=class extends Xe{constructor(e){super(e,{ortho:!0}),this.U={uT:{value:0},uAspect:{value:e.aspect},uDigit:{value:-1},uPhase:{value:0},uOn:{value:0},uPop:{value:0},uBeat:{value:0},tDigits:{value:Ad()}},this.leader=sn(m1,this.U),this.scene.add(this.leader),this.grp=new mn,this.scene.add(this.grp),this.title=new Yi("One Last Kiss",{size:220,height:.6,color:[1.35,.82,.4]}),this.title.group.position.y=.1,this.grp.add(this.title.group),this.hatch=g1(),this.hatchMesh=this.hatch.build({uTip:{value:2.5}}),this.grp.add(this.hatchMesh),this.spark=new de(new ze(1,1),new yt({map:e.shared.glow,color:new Me(5,3.6,2.4),transparent:!0,blending:it,depthWrite:!1,depthTest:!1})),this.scene.add(this.spark)}update(e){let t=this.U,n=Math.floor((e-rh)/oh);t.uT.value=e,t.uAspect.value=this.ctx.aspect,t.uDigit.value=n>=0&&n<=6?8-n:-1,t.uPhase.value=n>=0?(e-rh)/oh%1:0,t.uOn.value=Z(.15,1,e)*(e<ia?1:0),t.uPop.value=e>=ia&&e<ia+.05?1:0,t.uBeat.value=Ve.beatPulse(e,5),this.leader.visible=e<ia+.1;let s=vn(e,[[sh,0],[10.85,.31],[11.1,.345],[12.15,.63],[12.4,.665],[13.6,1]],J.inOut)[0],r=Math.min(1,this.ctx.aspect*2*.86/this.title.W);this.title.group.scale.setScalar(r),this.title.set(e<sh?0:s,1-.35*Z(14.4,16.2,e),1),this.title.mesh.visible=this.title.group.visible=e>=sh,this.hatch.set(e,this.ctx.res),this.hatchMesh.visible=e>=Pd,this.hatchMesh.scale.x=Math.max(1,this.ctx.aspect/1.78),this.hatchMesh.position.x=Math.sin(e*.3)*.02;let o=J.inExpo(Q(e,Cd,20.25));this.grp.scale.setScalar(1-.985*o),this.grp.rotation.z=o*.7;let a=Z(18.5,20.45,e);this.spark.visible=e>Cd,this.spark.scale.setScalar(.04+1.3*J.in(a)+.05*Ve.beatPulse(e)),this.spark.material.opacity=Qe(a*3)}post(e){let t=Z(8.8,9.8,e);return{grain:oe(.15,.07,t),flicker:oe(.55,.12,t),scratch:oe(1,.2,t),weave:oe(1,.25,t),vig:oe(.95,.7,t),sat:oe(.5,1,t),tint:[oe(1.08,1,t),oe(.96,1,t),oe(.8,1,t)],ca:.8,bloom:oe(.5,1.1,t),bloomThr:oe(.9,.55,t),dust:oe(.2,.45,t),fadeB:1-Z(0,1.2,e),exposure:1+.4*Z(18.8,20.4,e)}}};var v1=`uniform float uT, uAspect, uHz; varying vec2 vUv; ${He}
void main(){
  vec2 q = vUv; float hz = uHz;
  vec3 top = vec3(0.001, 0.002, 0.012), mid = vec3(0.007, 0.009, 0.036), low = vec3(0.07, 0.05, 0.14);
  vec3 col = q.y > hz ? mix(mid, top, smoothstep(hz, 1.0, q.y)) : mix(vec3(0.004, 0.005, 0.018), low * 0.3, smoothstep(0.0, hz, q.y));
  col += low * exp(-abs(q.y - hz) * 22.0) * 0.55;
  vec2 g = q * vec2(uAspect, 1.0) * 150.0; vec2 id = floor(g); float h = hash12(id);
  float st = step(0.986, h) * smoothstep(0.4, 0.0, length(fract(g) - 0.5)) * (0.55 + 0.45 * sin(uT * (1.0 + h * 3.0) + h * 50.0));
  col += vec3(0.75, 0.82, 1.0) * st * smoothstep(hz + 0.04, hz + 0.3, q.y) * 1.3;
  if (q.y < hz) {
    float rip = fbm(vec2(q.x * 2.5 * uAspect, (hz - q.y) * 60.0 / (0.2 + hz - q.y) - uT * 0.6));
    col += vec3(0.025, 0.028, 0.07) * rip * smoothstep(0.0, hz, q.y) * 1.4;
  }
  gl_FragColor = vec4(col, 1.0);
}`,Ci=20.3;function x1(i){let s=[0,1.24,0],r=[[-1,0,-1],[1,0,-1],[1,0,1],[-1,0,1]],o=[.9,.95,1.25];for(let h=0;h<4;h++)i.add([r[h],r[(h+1)%4]],{start:Ci+h*.12,dur:.6,width:2.4,color:o}),i.add([r[h],s],{start:Ci+.3+h*.12,dur:.8,width:2.4,color:o});let a=[.35,.7,1,.7];for(let h=0;h<4;h++){let d=r[h],u=r[(h+1)%4],m=a[h],g=(f,p)=>[0,1,2].map(T=>d[T]*(1-f-p)+u[T]*f+s[T]*p),x=[.6*m,.7*m,1.15*m];for(let f=1;f<9;f++){let p=f/9,T=Ci+.8+p*.9+h*.06;i.add([g(p,0),g(p,1-p)],{start:T,dur:.55,width:1.4,color:x}),i.add([g(1-p,0),g(0,1-p)],{start:T+.04,dur:.55,width:1.4,color:x})}}let l=ht(4),c=[.2,.23,.42];for(let h of[-1,1]){let d=h*2.2,u=h*7.5,m=-4.5,g=.95;i.add([[d,0,m],[d,g,m],[u,g,m]],{start:Ci+.6,dur:1.2,width:1.3,color:c}),i.add([[d,g+.28,m-.2],[u,g+.28,m-.2]],{start:Ci+.9,dur:1.2,width:1,color:c});for(let x=0;x<16;x++){let f=oe(d,u,(x+.5)/16),p=l()<.3;i.add([[f,.3,m],[f,.66,m]],{start:Ci+1+x*.05,dur:.4,width:p?2.6:1,color:p?[1.2,.8,.45]:c})}}}var ra=class extends Xe{constructor(e){super(e,{fov:38}),this.U={uT:{value:0},uAspect:{value:e.aspect},uHz:{value:.42}},this.scene.add(sn(v1,this.U)),this.S=new Ri,x1(this.S);let t=this.S.build({uTip:{value:4}});this.pyr=new mn,this.pyr.position.x=-.45,this.scene.add(this.pyr),this.pyr.add(t),this.mirror=new de(t.geometry,t.material.clone()),this.mirror.scale.y=-1,this.mirror.frustumCulled=!1,this.pyr.add(this.mirror);let n=this.mirror.material.uniforms;n.uAlpha.value=.28,n.uBoil.value=2.2,n.uTip.value=1;let s=new de(new Bo(Math.SQRT2,1.24,4,1,!0),wd(new Me(.006,.009,.022),1));s.rotation.y=Math.PI/4,s.position.y=.62,this.glass=s,this.pyr.add(s);let r=new yt({map:e.shared.glow,color:new Me(.45,.55,1.1),transparent:!0,blending:it,depthWrite:!1,depthTest:!1});this.inner=new de(new ze(1,1),r),this.inner.position.set(0,.35,.2),this.inner.scale.setScalar(3.2),this.pyr.add(this.inner),this.innerM=new de(this.inner.geometry,r),this.innerM.position.set(0,-.35,.2),this.innerM.scale.set(3.2,1.6,1),this.pyr.add(this.innerM),this.v=new I}update(e){let t=Q(e,20,25.8),n=this.camera;n.position.set(oe(1.3,.25,J.sine(t)),oe(.3,.42,t),oe(7.6,5.3,J.out(t))),n.lookAt(-.12,.66,0),n.updateMatrixWorld(),this.v.set(n.position.x,0,n.position.z-1e4).project(n),this.U.uHz.value=this.v.y*.5+.5,this.U.uT.value=e,this.U.uAspect.value=this.ctx.aspect,this.S.set(e,this.ctx.res);let s=this.mirror.material.uniforms;s.uT.value=e,s.uBoilT.value=e,s.uRes.value.copy(this.ctx.res);let r=J.out(Q(e,Ci+.5,Ci+2.2));this.glass.material.opacity=r,this.inner.material.opacity=r*(.07+.03*Ve.get("mid",e)),this.pyr.rotation.y=-.18+t*.12}post(){return{tint:[.86,.94,1.2],sat:.85,bloom:.95,bloomThr:.7,vig:.8,grain:.05,dust:.3,dustCol:[.6,.72,1],ca:.5}}};var Id={stand:{lean:0,arm:[.08,.05,-.08,-.05],leg:[.035,0,-.035,0]},reach:{lean:.03,arm:[1.15,1.35,-.1,-.05],leg:[.05,0,-.03,0]},wait:{lean:-.02,arm:[.25,1.6,-.25,-1.6],leg:[.02,0,-.04,0]},look:{lean:.05,arm:[.12,.2,-.05,.1],leg:[.12,.02,-.06,0]}};var _1=i=>typeof i=="object"?i:Id[i]||Id.stand;function y1(i){let e=_1(i),t=e.lean,n=(l,c)=>[l*Math.cos(t)+c*Math.sin(t),-l*Math.sin(t)+c*Math.cos(t)],s=[0,.52],r={},o=(l,c)=>{let h=n(l,c-s[1]);return[s[0]+h[0],s[1]+h[1]]};r.head=o(.01,.925),r.neck=o(0,.855),r.sh=o(0,.815),r.hip=s;let a=(l,c,h)=>[l[0]+Math.sin(c)*h,l[1]-Math.cos(c)*h];return r.arms=[0,2].map((l,c)=>{let h=o(c?-.012:.012,.815),d=a(h,e.arm[l]+t,.165);return[h,d,a(d,e.arm[l+1]+t,.15)]}),r.legs=[0,2].map((l,c)=>{let h=[s[0]+(c?-.02:.02),s[1]],d=a(h,e.leg[l],.255);return[h,d,a(d,e.leg[l+1],.25)]}),r}function $i(i,e,t,n,s={}){let r=y1(s.pose||"stand"),o=s.flip?-1:1,a=u=>e+u[0]*n*o,l=u=>t-u[1]*n;i.save(),i.fillStyle=i.strokeStyle=s.color||"#000",i.lineCap="round",i.lineJoin="round";let c=(u,m)=>{i.lineWidth=m*n,i.beginPath(),i.moveTo(a(u[0]),l(u[0])),u.slice(1).forEach(g=>i.lineTo(a(g),l(g))),i.stroke()};r.legs.forEach(u=>c(u,.052)),r.arms.forEach(u=>c(u,.036));let h=r.sh,d=r.hip;i.beginPath(),i.moveTo(a([h[0]-.1,h[1]]),l(h)),i.lineTo(a([h[0]+.1,h[1]]),l(h)),i.quadraticCurveTo(a([h[0]+.1,.66]),l([0,.66]),a([d[0]+.075,d[1]]),l(d)),i.lineTo(a([d[0]-.075,d[1]]),l(d)),i.quadraticCurveTo(a([h[0]-.1,.66]),l([0,.66]),a([h[0]-.1,h[1]]),l(h)),i.fill(),s.coat&&(i.beginPath(),i.moveTo(a([h[0]-.09,h[1]-.02]),l([0,h[1]-.02])),i.lineTo(a([h[0]+.09,h[1]-.02]),l([0,h[1]-.02])),i.lineTo(a([d[0]+.13,.3]),l([0,.3])),i.lineTo(a([d[0]-.12,.3]),l([0,.3])),i.closePath(),i.fill()),c([r.neck,r.sh],.045),i.beginPath(),i.ellipse(a(r.head),l(r.head),.05*n,.064*n,0,0,Math.PI*2),i.fill(),s.hair==="long"&&(i.beginPath(),i.ellipse(a([r.head[0]-.012,r.head[1]-.04]),l([0,r.head[1]-.04]),.062*n,.1*n,0,0,Math.PI*2),i.fill()),i.restore()}function Ud(i,e,t=7){let n=i.getContext("2d"),{width:s,height:r}=i,o=n.getImageData(0,0,s,r).data,a=ht(t),l=new Float32Array(e*2),c=s/r,h=0,d=0;for(;h<e&&d++<e*400;){let u=Math.floor(a()*s),m=Math.floor(a()*r),g=(m*s+u)*4,x=o[g]/255*(o[g+3]/255);a()<x&&(l[h*2]=((u+a())/s*2-1)*c,l[h*2+1]=1-(m+a())/r*2,h++)}return l}var dn=.42,_n=.02,M1=`uniform float uT, uAspect, uWarm; uniform vec2 uC; varying vec2 vUv; ${He}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0, d = p - uC;
  float spot = exp(-dot(d * vec2(0.8, 0.55), d * vec2(0.8, 0.55)) * 1.4);
  float cone = smoothstep(0.7, 0.0, abs(d.x) - (1.2 - p.y) * 0.3) * smoothstep(-1.4, 1.0, p.y) * 0.6;
  float n = fbm(p * 2.5 + 3.0), dam = 0.5 + 0.5 * sin(p.x * 34.0 + sin(p.y * 17.0) * 2.0) * sin(p.y * 34.0);
  vec3 col = vec3(0.01, 0.006, 0.004) + vec3(0.075, 0.042, 0.022) * (spot * (0.75 + 0.35 * n) + cone) * (0.85 + 0.15 * dam) * uWarm;
  gl_FragColor = vec4(col, 1.0);
}`,b1=`attribute vec2 aTgt; attribute vec4 aR; uniform float uT, uPulse, uRot, uAlpha; uniform vec2 uC, uRes;
varying vec3 vCol; varying float vA; ${He}
void main(){
  float k = clamp((uT - 24.7 - aR.z * 1.8) / 1.7, 0.0, 1.0), e = k * k * (3.0 - 2.0 * k);
  float ang = aR.x + (1.0 - e) * (3.2 + uT * 0.25);
  vec2 p = mix(uC + vec2(cos(ang), sin(ang)) * aR.y * (1.0 - e), uC + aTgt, e);
  p += (vec2(vnoise(aTgt * 11.0 + uT * 0.5), vnoise(aTgt * 11.0 - uT * 0.5 + 20.0)) - 0.5) * 0.01;
  vec2 r = p - uC; float c = cos(uRot), s = sin(uRot); p = uC + vec2(c * r.x - s * r.y, s * r.x + c * r.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
  float tw = 0.6 + 0.4 * sin(uT * (1.5 + aR.w * 3.0) + aR.w * 40.0);
  gl_PointSize = (1.8 + aR.w * 2.4) * (1.0 + uPulse * 0.3 + (1.0 - e) * 1.2) * uRes.y / 1080.0;
  vec3 gold = vec3(1.0, 0.6, 0.26), rose = vec3(1.0, 0.34, 0.28), cream = vec3(1.0, 0.85, 0.62);
  vCol = aR.w < 0.5 ? mix(gold, cream, aR.w * 2.0) : mix(gold, rose, aR.w * 2.0 - 1.0);
  vA = (0.3 + 0.25 * tw) * (0.35 + 0.65 * e) * uAlpha;
}`;function S1(i){let e=[1.35,.85,.4],t=[.8,.46,.2],n=24.75,s=(r,o,a,l)=>{for(let c of[-1,1])i.add([[dn,_n+o],[dn+c*(r-a),_n+o],[dn+c*r,_n+o-a],[dn+c*r,_n-o+a],[dn+c*(r-a),_n-o],[dn,_n-o]],l)};s(.61,.78,.05,{start:n,dur:1.3,width:3.2,color:e}),s(.55,.71,.03,{start:n+.2,dur:1.3,width:1.3,color:t}),s(.49,.645,.001,{start:n+.4,dur:1.2,width:2,color:e});for(let r of[-1,1])for(let o of[-1,1]){let a=dn+r*.61,l=_n+o*.78,c=[];for(let h=0;h<=40;h++){let d=h/40,u=d*Math.PI*2.4,m=.075*(1-.8*d);c.push([a+r*m*Math.cos(u),l+o*(.02+m*Math.sin(u))])}i.add(c,{start:n+1.1,dur:.7,width:1.8,color:e})}i.add(nh(dn,_n+.78,.11,30,0,Math.PI),{start:n+1.2,dur:.6,width:2.2,color:e}),i.add(nh(dn,_n+.78,.06,20,0,Math.PI),{start:n+1.35,dur:.5,width:1.4,color:t})}var oa=class extends Xe{constructor(e){super(e,{ortho:!0}),this.U={uT:{value:0},uAspect:{value:e.aspect},uWarm:{value:1},uC:{value:new ge(dn,_n)}},this.scene.add(sn(M1,this.U));let t=h=>new yt({map:e.shared.glow,color:new Me(...h),transparent:!0,blending:it,depthWrite:!1,depthTest:!1}),n=new ze(1,1);this.halo=new de(n,t([.5,.3,.14])),this.halo.position.set(dn,_n,0),this.halo.scale.set(2.2,2.6,1),this.scene.add(this.halo);let s=Math.round(42e3*Math.max(.6,e.quality||1)),r=Ud(Rd(300,400),s,11),o=ht(5),a=new Float32Array(s*2),l=new Float32Array(s*4);for(let h=0;h<s;h++)a[h*2]=r[h*2]*.62,a[h*2+1]=r[h*2+1]*.62,l[h*4]=o()*Math.PI*2,l[h*4+1]=.7+o()*2.4,l[h*4+2]=o(),l[h*4+3]=o();let c=new Je;c.setAttribute("position",new Ce(new Float32Array(s*3),3)),c.setAttribute("aTgt",new Ce(a,2)),c.setAttribute("aR",new Ce(l,4)),this.PU={uT:{value:0},uPulse:{value:0},uRot:{value:0},uAlpha:{value:1},uC:this.U.uC,uRes:{value:new ge}},this.pts=new It(c,ta(b1,On,this.PU,{depthTest:!1})),this.pts.frustumCulled=!1,this.scene.add(this.pts),this.S=new Ri,S1(this.S),this.scene.add(this.S.build({uBoil:{value:.5},uTip:{value:4}})),this.me=new de(n,t([1.5,.75,.3])),this.you=new de(n,t([.4,.7,1.6])),this.scene.add(this.me,this.you)}update(e){let t=this.PU;t.uT.value=e,t.uPulse.value=Ve.beatPulse(e,8),t.uRes.value.copy(this.ctx.res),t.uRot.value=-J.inOut(Q(e,28,29.6))*1.1,this.U.uT.value=e,this.U.uAspect.value=this.ctx.aspect,this.U.uWarm.value=.6+.4*J.out(Q(e,24.8,26.5))+.25*J.out(Q(e,26.9,27.6)),this.S.set(e,this.ctx.res),this.halo.material.opacity=.35*J.out(Q(e,25.3,26.8))+.3*J.out(Q(e,26.9,27.6));let n=J.out(Q(e,26.9,27.7)),s=e*1.9,r=oe(.35,.07,J.inOut(Q(e,26.9,28.2))),o=dn-.02,a=_n-.3;this.me.position.set(o+Math.cos(s)*r,a+Math.sin(s)*r*.6,0),this.you.position.set(o-Math.cos(s)*r,a-Math.sin(s)*r*.6,0);for(let h of[this.me,this.you])h.material.opacity=n,h.scale.setScalar(.16+.04*t.uPulse.value);let l=this.camera,c=1+.06*J.sine(Q(e,24.6,29.4));l.zoom!==c&&(l.zoom=c,l.position.x=(c-1)*dn*2,l.updateProjectionMatrix())}post(){return{tint:[1.12,.97,.8],sat:1.05,bloom:1,bloomThr:.55,vig:.85,grain:.05,dust:.45,dustCol:[1,.8,.55],ca:.35}}};var Zi=8,Ld=.03,yn=Math.PI,T1=[[24,-1,0,6,1,28.85,1.2],[24,0,12,6,1,29.37,1.1],[40,1,-20,8,.8,29.8,1.5],[16,0,145,4,.75,30.1,1],[12,3,200,0,.6,30.45,.9],[20,2,-110,5,.65,30.6,1.1],[10,1,-100,0,.8,30.3,.8],[72,-1,0,10,.2,28.8,2.6]],w1=[1,2,5,6],E1=31.6,Ki=33.67,Lt=35.45,Dd=yn/6,A1=.14,ca=[];for(let i=Math.ceil(Ve.beat(E1)-.05);Ve.beatTime(i)<Ki-.1;i++)ca.push(Ve.beatTime(i));var Nd=2*(2*yn-.45-Dd*ca.length)/(Lt-Ki)**2,R1=4,aa=(i,e,t,n)=>i+yn+(e*(i-t)-yn)/n;function ah(i){let e=0;for(let t of ca)e+=Dd*J.outBack(Q(i,t,t+A1));return i>Ki&&(e+=.5*Nd*(i-Ki)**2),i>Lt&&(e+=.5*R1*(i-Lt)**2),-e}var C1=`#define NG ${Zi}
uniform float uT, uAspect, uPx, uM, uGrid; uniform vec3 uCam;
uniform vec4 uG[NG], uP[NG], uQ[NG], uL[2], uS[4], uTooth, uCrack;
varying vec2 vUv; ${He}
vec2 rot(vec2 p, float a){ float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
float sdTrap(vec2 p, float r1, float r2, float he){
  vec2 k1 = vec2(r2, he), k2 = vec2(r2 - r1, 2.0 * he); p.x = abs(p.x);
  vec2 ca = vec2(p.x - min(p.x, (p.y < 0.0) ? r1 : r2), abs(p.y) - he);
  vec2 cb = p - k1 + k2 * clamp(dot(k1 - p, k2) / dot(k2, k2), 0.0, 1.0);
  float s = (cb.x < 0.0 && ca.y < 0.0) ? -1.0 : 1.0;
  return s * sqrt(min(dot(ca, ca), dot(cb, cb)));
}
float tooth(vec2 tq){ float m = uM; return sdTrap(vec2(tq.x, tq.y + 0.15 * m), 0.95 * m, 0.5 * m, 1.275 * m); }
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0 / uCam.z + uCam.xy;
  float px = uPx / uCam.z;
  vec3 col = mix(vec3(0.004, 0.006, 0.016), vec3(0.014, 0.017, 0.036), vUv.y);
  vec2 g1 = (0.5 - abs(fract(p * 5.0) - 0.5)) / 5.0, g2 = 0.5 - abs(fract(p) - 0.5);
  col += vec3(0.04, 0.06, 0.12) * ((1.0 - smoothstep(0.0, px * 1.2, min(g1.x, g1.y))) * 0.3 + (1.0 - smoothstep(0.0, px * 1.6, min(g2.x, g2.y))) * 0.5) * uGrid;
  vec3 acc = vec3(0.0);
  for (int i = 0; i < NG; i++) {
    vec4 G = uG[i], P = uP[i], Q = uQ[i];
    vec2 d0 = p - G.xy; float R = G.w;
    if (P.y <= 0.0 || length(d0) > R + uM * 2.0 + 0.2) continue;
    vec2 q = rot(d0, -G.z); float r = length(q), ang = atan(q.y, q.x);
    float seg = 6.2831853 / P.x, idr = floor(ang / seg + 0.5), a = ang - idr * seg, id = mod(idr, P.x);
    float m = uM, Rr = R - 1.25 * m, Ro = R + m;
    float th = tooth(vec2(r * sin(a), r * cos(a) - (Rr + Ro) * 0.5));
    if (abs(id - Q.z) < 0.5) th = 1e3;
    float o = mix(abs(min(r - Rr, th)), min(abs(r - Ro), abs(r - Rr)), Q.y);
    float rim = Rr - max(0.035, R * 0.12), hub = R * 0.24, axl = R * 0.09;
    float dt = min(abs(r - rim), min(abs(r - hub), abs(r - axl)));
    if (Q.w > 0.5) {
      float sa = 6.2831853 / Q.w, b = ang - sa * floor(ang / sa + 0.5);
      if (r > hub && r < rim) dt = min(dt, abs(abs(r * sin(b)) - R * 0.06));
    }
    float ra = fract((atan(d0.y, d0.x) - P.z) / 6.2831853), rv = P.y, rv2 = clamp(P.y * 1.3 - 0.3, 0.0, 1.0);
    float mk = rv >= 1.0 ? 1.0 : 1.0 - smoothstep(rv - 0.015, rv, ra);
    float mk2 = rv2 >= 1.0 ? 1.0 : 1.0 - smoothstep(rv2 - 0.015, rv2, ra);
    float tip = rv < 1.0 ? exp(-abs(ra - rv) * 90.0) * smoothstep(0.03, 0.0, abs(r - Ro)) : 0.0;
    float w = px * 0.8 + R * 0.004;
    float lo = 1.0 - smoothstep(w, w + px * 1.5, o), ld = 1.0 - smoothstep(w * 0.7, w * 0.7 + px * 1.5, dt);
    vec3 c = mix(vec3(1.2, 0.72, 0.32), vec3(0.5, 0.66, 1.15), Q.x);
    float dash = step(0.5, fract(ang / 6.2831853 * P.x * 2.0));
    acc += c * P.w * ((lo + exp(-o / 0.01) * 0.22) * mk + tip * 6.0 + ld * mk2 * 0.55
      + 0.16 * (1.0 - smoothstep(px * 0.6, px * 2.0, abs(r - R))) * dash * mk2);
  }
  col += acc;
  if (uCrack.w > 0.0) {
    vec4 G = uG[1]; vec2 q = rot(p - G.xy, -G.z);
    if (length(q) < G.w + uM) {
      vec2 cp = q * 6.5, ci = floor(cp), cf = fract(cp); float f1 = 8.0, f2 = 8.0;
      for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
        vec2 o = vec2(float(x), float(y)); float dd = length(o + hash22(ci + o) - cf);
        if (dd < f1) { f2 = f1; f1 = dd; } else if (dd < f2) f2 = dd;
      }
      float front = 1.0 - smoothstep(uCrack.z - 0.06, uCrack.z, length(q - uCrack.xy));
      col += vec3(0.8, 0.92, 1.35) * (1.0 - smoothstep(px, px * 3.0, (f2 - f1) / 18.0)) * front * uCrack.w * 1.8;
    }
  }
  if (uTooth.w > 0.0) {
    vec2 q = rot(p - uTooth.xy, -uTooth.z);
    float dd = abs(tooth(vec2(q.y, q.x)));
    col += vec3(0.75, 0.85, 1.25) * ((1.0 - smoothstep(px, px * 2.5, dd)) * 1.4 + exp(-dd / 0.008) * 0.4) * uTooth.w;
  }
  for (int i = 0; i < 2; i++) {
    vec4 L = uL[i]; if (L.z <= 0.0) continue;
    float d2 = dot(p - L.xy, p - L.xy);
    vec3 lc = i == 0 ? vec3(1.9, 0.75, 0.25) : vec3(0.3, 0.6, 2.0);
    col += L.z * (mix(lc, vec3(1.6), exp(-d2 / (0.00025 * L.w))) * exp(-d2 / (0.0014 * L.w)) * 3.2 + lc * 0.012 * L.w / (d2 + 0.012 * L.w) * 0.3);
  }
  for (int i = 0; i < 4; i++) {
    vec4 S = uS[i]; if (S.z <= 0.0) continue;
    vec2 d = p - S.xy; float dl = length(d);
    col += vec3(1.3, 1.1, 0.9) * S.z * (exp(-dl * dl / 0.0002) * 2.0 + (exp(-abs(d.x) * 500.0) + exp(-abs(d.y) * 500.0)) * exp(-dl * 14.0));
  }
  gl_FragColor = vec4(col, 1.0);
}`,xr=i=>Array.from({length:i},()=>new Ke),_r=i=>[Math.cos(i),Math.sin(i)],la=class extends Xe{constructor(e){super(e,{ortho:!0}),this.U={uT:{value:0},uAspect:{value:e.aspect},uPx:{value:.002},uM:{value:Ld},uGrid:{value:0},uCam:{value:new I(0,0,1)},uG:{value:xr(Zi)},uP:{value:xr(Zi)},uQ:{value:xr(Zi)},uL:{value:xr(2)},uS:{value:xr(4)},uTooth:{value:new Ke},uCrack:{value:new Ke}},this.scene.add(sn(C1,this.U)),this.g=T1.map(([o,a,l,c,h,d,u])=>({N:o,par:a,phi:l*yn/180,sp:c,k:h,s:d,d:u,R:o*Ld/2,c:[0,0]}));let t=this.g;t[0].c=[-.52,.22],t[7].c=[.2,-1.47];for(let o of t)if(o.par>=0){let a=t[o.par],[l,c]=_r(o.phi);o.c=[a.c[0]+(a.R+o.R)*l,a.c[1]+(a.R+o.R)*c]}for(let o of t)o.start=o.par>=0?o.phi+yn:o===t[0]?t[1].phi:yn/2;this.th0B=aa(t[1].phi,24,0,24);let n=aa(t[1].phi,24,ah(Lt),24),s=2*yn/24,r=t[1].phi+yn-n;this.miss=(Math.round(r/s)%24+24)%24,this.crackO=_r(this.miss*s).map(o=>o*(t[1].R-.03))}calc(e){let t=this.g,n=new Array(Zi).fill(0),s=[0,0];if(n[0]=ah(e),n[7]=e*.05,e>Lt){let r=e-Lt,o=Nd*(Lt-Ki);n[1]=aa(t[1].phi,24,ah(Lt),24)+o*.45*(1-Math.exp(-r/.45))+.25*J.out(Q(r,0,.15));let[a,l]=_r(t[1].phi),c=.075*J.outBack(Q(r,0,.35));s[0]=a*c,s[1]=l*c-.035*J.inOut(Q(r,0,2))}for(let r=1;r<Zi-1;r++){if(r===1&&e>Lt)continue;let o=t[r],a=t[o.par];n[r]=aa(o.phi,a.N,n[o.par],o.N)}return{th:n,off:s}}update(e){let t=this.U,n=this.g,{th:s,off:r}=this.calc(e),o=this.calc(e-.01).th;t.uT.value=e,t.uAspect.value=this.ctx.aspect,t.uPx.value=2/this.ctx.res.y,t.uGrid.value=J.out(Q(e,28.8,30.2))*(1-.5*Z(33.6,36,e));let a=e>Lt,l=(e-33.67)*1.2,c=C=>w1.includes(C)?[n[C].c[0]+r[0],n[C].c[1]+r[1]]:n[C].c;for(let C=0;C<Zi;C++){let k=n[C],v=c(C),_=Math.abs(s[C]-o[C])/.01,D=Qe(l-Math.hypot(v[0]-n[1].c[0],v[1]-n[1].c[1])*.6);C===0&&(D=Math.min(D,.55)),C===1&&(D=Math.max(D,.85)),t.uG.value[C].set(v[0],v[1],s[C],k.R),t.uP.value[C].set(k.N,J.inOut(Q(e,k.s,k.s+k.d)),k.start,k.k*(C===1&&a?1-.5*Z(Lt+.5,37.4,e):1)),t.uQ.value[C].set(D,Qe((_-7)/7),C===1&&a?this.miss:-1,k.sp)}let h=c(0),d=c(1),u=n[1].phi+s[0],m=n[1].phi+yn+s[1]-this.th0B,g=Ve.beatPulse(e,7),x=a?(1-J.in(Q(e,Lt+.3,Lt+1.9)))*(.55+.45*ri(Math.floor(e*24))):1;t.uL.value[0].set(h[0]+(n[0].R-.035)*Math.cos(u),h[1]+(n[0].R-.035)*Math.sin(u),J.out(Q(e,28.95,29.5))*(1+.3*g),1+.4*g),t.uL.value[1].set(d[0]+(n[1].R-.035)*Math.cos(m),d[1]+(n[1].R-.035)*Math.sin(m),J.out(Q(e,29.37,29.8))*x,1+.4*g);let f=ca.reduce((C,k)=>C+(e>k?Math.exp(-(e-k)*12):0),0),p=e>Ki&&!a?Ve.get("onset",e)*.9:0,T=(C,k)=>{let v=c(C),[_,D]=_r(n[k].phi);return[v[0]+n[C].R*_,v[1]+n[C].R*D]};if([[T(0,1),(e>29.6?2*Math.exp(-(e-29.6)*2.5):0)+f*1.2+p+(a?5*Math.exp(-(e-Lt)*4):0)],[T(1,2),a?0:f*.7+p*.6],[T(0,3),f*.7+p*.6+(a?.4*Ve.get("onset",e):0)],[T(2,5),a?0:f*.6]].forEach(([C,k],v)=>t.uS.value[v].set(C[0],C[1],k,0)),a){let C=e-Lt,[k,v]=_r(n[1].phi+yn),_=[n[1].c[0]+n[1].R*k,n[1].c[1]+n[1].R*v];t.uTooth.value.set(_[0]+.3*C,_[1]+.9*C-1.3*C*C,n[1].phi+yn+C*9,1-Q(C,1.2,1.8)),t.uCrack.value.set(this.crackO[0],this.crackO[1],.9*J.out(Q(C,0,1.4)),(.6+.4*ri(Math.floor(e*18)+3))*(1-.6*Q(C,1.2,2.2)))}else t.uTooth.value.w=0,t.uCrack.value.w=0;let[S,w,A]=vn(e,[[28.8,1,-.05,.15],[31.2,1.07,-.12,.24],[33.6,1,0,.1],[35.45,1.16,-.14,.27],[35.75,.97,-.05,.18],[37.6,1.03,0,.1]],J.inOut),R=(a?.03*Math.exp(-(e-Lt)*2.5):0)+(e>Ki?.004:0);t.uCam.value.set(w+R*Math.sin(e*73.1)*Math.sin(e*17.3),A+R*Math.sin(e*61.7+1),S)}post(e){let t=Z(33.6,35.6,e),n=e>Lt?Math.exp(-(e-Lt)*3):0;return{tint:[oe(1.08,.86,t),oe(.97,.95,t),oe(.86,1.14,t)],sat:oe(1,.82,t),bloom:1+n,bloomThr:.6,vig:.8,grain:.05,ca:.4+1.5*n,dust:.25,dustCol:t>.5?[.7,.8,1]:[1,.85,.6],exposure:1+.5*Z(37.1,37.6,e)}}};var Mn=(i,e,t,n,s,r)=>{let o=i.createLinearGradient(e,t,n,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o},Dt=(i,e,t,n,s,r)=>{i.fillStyle=e,i.fillRect(t,n,s,r)};function zn(i,e,t,n,s){let r=i.createRadialGradient(e,t,0,e,t,n);r.addColorStop(0,s),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(e-n,t-n,n*2,n*2)}var kn=(i,e)=>{i.globalCompositeOperation="lighter",e(),i.globalCompositeOperation="source-over"},Fd={lean:0,arm:[.35,.35,-.08,-.05],leg:[.035,0,-.035,0]},lh=[function(e,t){Dt(e,Mn(e,0,0,0,t,["#35224d","#b85478","#f4a468","#ffe2ae","#ffe2ae"]),0,0,t,t),kn(e,()=>{zn(e,t*.5,t*.74,t*.55,"rgba(255,190,130,0.85)"),zn(e,t*.5,t*.74,t*.13,"rgba(255,250,235,1)")}),e.fillStyle="#1d1022",e.beginPath(),e.moveTo(0,t*.82),e.quadraticCurveTo(t*.5,t*.775,t,t*.84),e.lineTo(t,t),e.lineTo(0,t),e.fill(),$i(e,t*.457,t*.8,t*.36,{pose:Fd,color:"#170b1a"}),$i(e,t*.543,t*.8,t*.335,{pose:Fd,flip:!0,hair:"long",color:"#170b1a"})},function(e,t,n){Dt(e,Mn(e,0,0,0,t*.55,["#8fb8d6","#f3d9c4"]),0,0,t,t*.55),Dt(e,Mn(e,0,t*.55,0,t,["#4b7a96","#1b3448"]),0,t*.55,t,t*.45),kn(e,()=>{zn(e,t*.62,t*.5,t*.3,"rgba(255,220,180,0.7)");for(let s=0;s<70;s++){let r=t*(.56+n()*.42);e.fillStyle=`rgba(255,240,220,${.25+n()*.4})`,e.fillRect(t*.62+(n()-.5)*t*.3*(r/t),r,(4+n()*18)*(r/t),1.5)}}),e.strokeStyle="rgba(40,40,50,0.7)",e.lineWidth=1.5;for(let s=0;s<3;s++){let r=t*(.2+s*.08),o=t*(.18+n()*.1);e.beginPath(),e.moveTo(r-6,o-3),e.quadraticCurveTo(r-3,o-5,r,o),e.quadraticCurveTo(r+3,o-5,r+6,o-3),e.stroke()}},function(e,t){Dt(e,"#2b211f",0,0,t,t),kn(e,()=>{e.fillStyle="rgba(255,215,160,0.2)",e.beginPath(),e.moveTo(t*.3,t*.54),e.lineTo(t*.62,t*.54),e.lineTo(t*.98,t),e.lineTo(t*.18,t),e.fill()}),Dt(e,"#fff4dc",t*.3,t*.12,t*.32,t*.42),e.strokeStyle="#2b211f",e.lineWidth=t*.018,e.beginPath(),e.moveTo(t*.46,t*.12),e.lineTo(t*.46,t*.54),e.moveTo(t*.3,t*.33),e.lineTo(t*.62,t*.33),e.stroke(),e.fillStyle="rgba(245,235,225,0.4)",e.beginPath(),e.moveTo(t*.6,t*.08),e.bezierCurveTo(t*.7,t*.3,t*.58,t*.5,t*.72,t*.64),e.lineTo(t*.8,t*.64),e.lineTo(t*.8,t*.08),e.fill(),kn(e,()=>zn(e,t*.46,t*.33,t*.4,"rgba(255,230,190,0.35)"))},function(e,t){Dt(e,Mn(e,0,0,0,t*.62,["#1b2140","#5d4f86","#e39a78"]),0,0,t,t*.62),Dt(e,Mn(e,0,t*.62,0,t,["#3a2f55","#0f1022"]),0,t*.62,t,t*.38);let n=(s,r)=>{e.globalAlpha=r,e.fillStyle="#141428",e.beginPath(),e.moveTo(t*.2,t*.62),e.lineTo(t*.5,t*.62-s*t*.32),e.lineTo(t*.8,t*.62),e.fill(),e.strokeStyle="rgba(255,210,150,0.6)",e.lineWidth=1;for(let o=1;o<8;o++){let a=o/8,l=t*.62-s*t*.32*a;e.beginPath(),e.moveTo(t*(.2+.3*a),l),e.lineTo(t*(.8-.3*a),l),e.moveTo(t*(.2+.075*o),t*.62),e.lineTo(t*.5,t*.62-s*t*.32),e.stroke()}e.globalAlpha=1};n(1,1),n(-1,.3)},function(e,t,n){Dt(e,Mn(e,0,0,0,t,["#5d97cf","#bcdcf1","#eef6fb"]),0,0,t,t);for(let s=0;s<16;s++)zn(e,t*(.05+n()*.9),t*(.55+n()*.4),t*(.08+n()*.12),"rgba(255,255,255,0.85)");e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=2,e.beginPath(),e.moveTo(t*.08,t*.34),e.quadraticCurveTo(t*.4,t*.22,t*.72,t*.14),e.stroke()},function(e,t){Dt(e,Mn(e,0,0,0,t*.6,["#3c2b5c","#a35a86","#f0a574"]),0,0,t,t*.6),Dt(e,"#1c1426",0,t*.6,t,t*.4),e.fillStyle="#30263a",e.beginPath(),e.moveTo(t*.47,t*.6),e.lineTo(t*.53,t*.6),e.lineTo(t*.95,t),e.lineTo(t*.05,t),e.fill(),e.strokeStyle="#0e0a14",e.lineWidth=2;let n=null,s=null;for(let r=0;r<7;r++){let o=Math.pow(.68,r),a=t*(.52+.44*o),l=t*.6-t*.5*o;e.beginPath(),e.moveTo(a,t*.6+t*.03*o),e.lineTo(a,l),e.moveTo(a-t*.04*o,l+t*.02*o),e.lineTo(a+t*.04*o,l+t*.02*o),e.stroke(),n!==null&&(e.beginPath(),e.moveTo(n,s),e.quadraticCurveTo((n+a)/2,Math.max(s,l)+t*.03*o,a,l+t*.02*o),e.stroke()),n=a,s=l+t*.02*o}},function(e,t,n){Dt(e,"#0a0d1f",0,0,t,t);let s=["255,170,90","255,110,150","120,200,255","255,220,160"];kn(e,()=>{for(let r=0;r<44;r++)e.fillStyle=`rgba(${s[r%4]},${.12+n()*.25})`,e.beginPath(),e.arc(n()*t,t*(.15+n()*.75),t*(.02+n()*.07),0,7),e.fill()})},function(e,t,n){Dt(e,Mn(e,0,0,0,t*.55,["#cfe3f2","#fbf1dc"]),0,0,t,t*.55),Dt(e,Mn(e,0,t*.55,0,t,["#b7cf86","#5f8a4a"]),0,t*.55,t,t*.45),kn(e,()=>zn(e,t*.22,t*.2,t*.25,"rgba(255,245,210,0.9)"));let s=["#f08a5d","#e2677a","#c46aa6","#8a73c9","#5b86d6","#63c3d4"];for(let r=0;r<170;r++){let o=t*(.57+Math.pow(n(),.7)*.43);e.fillStyle=s[r%6],e.beginPath(),e.arc(n()*t,o,.8+(o/t-.55)*7*n(),0,7),e.fill()}},function(e,t,n){Dt(e,"#07070d",0,0,t,t),kn(e,()=>{for(let s=0;s<44;s++){let r=t*(.12+n()*.7),o=t*(.2+n()*.6),a=n()*t,l=n()<.6?"255,180,100":"120,200,255",c=e.createLinearGradient(a,0,a+o,0);c.addColorStop(0,`rgba(${l},0)`),c.addColorStop(1,`rgba(${l},${.3+n()*.5})`),e.fillStyle=c,e.fillRect(a,r,o,1+n()*2.5)}}),e.globalAlpha=.16,$i(e,t*.3,t*1.3,t*.95,{color:"#9ab",hair:"long"}),e.globalAlpha=1,e.strokeStyle="#15151c",e.lineWidth=t*.07,e.strokeRect(0,0,t,t)},function(e,t,n){Dt(e,Mn(e,0,0,0,t*.6,["#050818","#1a2448"]),0,0,t,t*.6),Dt(e,Mn(e,0,t*.6,0,t,["#141c38","#04050c"]),0,t*.6,t,t*.4);for(let s=0;s<70;s++)e.fillStyle=`rgba(255,255,255,${n()*.8})`,e.fillRect(n()*t,n()*t*.56,1,1);kn(e,()=>{zn(e,t*.66,t*.26,t*.22,"rgba(200,220,255,0.35)");for(let s=0;s<50;s++)e.fillStyle=`rgba(240,235,210,${.2+n()*.4})`,e.fillRect(t*.66+(n()-.5)*t*.14,t*(.61+n()*.38),3+n()*10,1)}),e.fillStyle="#f4efd8",e.beginPath(),e.arc(t*.66,t*.26,t*.06,0,7),e.fill()},function(e,t){Dt(e,Mn(e,0,0,0,t,["#0c0f1c","#1d1a2a"]),0,0,t,t),kn(e,()=>{e.fillStyle="rgba(255,200,120,0.16)",e.beginPath(),e.moveTo(t*.62,t*.21),e.lineTo(t*.36,t*.92),e.lineTo(t*.9,t*.92),e.fill(),zn(e,t*.62,t*.21,t*.14,"rgba(255,220,160,1)"),zn(e,t*.62,t*.92,t*.32,"rgba(255,190,120,0.25)")}),e.strokeStyle="#05060b",e.lineWidth=t*.02,e.beginPath(),e.moveTo(t*.72,t*.97),e.lineTo(t*.72,t*.19),e.lineTo(t*.62,t*.19),e.stroke(),$i(e,t*.52,t*.93,t*.3,{color:"#05060b",coat:!0,pose:"wait"})},function(e,t){Dt(e,"#fbf7ef",0,0,t,t),e.globalAlpha=.08,$i(e,t*.44,t*.86,t*.5,{color:"#a08070"}),$i(e,t*.58,t*.86,t*.47,{color:"#a08070",flip:!0,hair:"long"}),e.globalAlpha=1}];function Od(i,e,t){i.globalCompositeOperation="soft-light",i.fillStyle=`rgba(255,165,90,${t})`,i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";let n=i.createRadialGradient(e/2,e/2,e*.28,e/2,e/2,e*.78);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(25,12,5,0.5)"),i.fillStyle=n,i.fillRect(0,0,e,e),i.fillStyle="rgba(70,45,60,0.1)",i.fillRect(0,0,e,e)}function Bd(i,e,t,n,s){let r=i.getImageData(0,0,e,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=(n()-.5)*s;o[a]+=l,o[a+1]+=l,o[a+2]+=l}i.putImageData(r,0,0)}var Xy=lh.length,ha={two:0,sea:1,room:2,pyramid:3,sky:4,road:5,bokeh:6,field:7,train:8,moon:9,lamp:10,white:11},zd=i=>[i%4/4,1-(Math.floor(i/4)+1)/3,1/4,1/3];function kd(i=256){let e=xn(i*4,i*3),t=e.getContext("2d"),n=ht(11);return lh.forEach((s,r)=>{t.save(),t.translate(r%4*i,Math.floor(r/4)*i),t.beginPath(),t.rect(0,0,i,i),t.clip(),s(t,i,n),Od(t,i,r===ha.white?.05:.22),t.restore()}),Bd(t,e.width,e.height,n,18),Pn(e)}function Hd(i=512){let e=xn(i,i),t=e.getContext("2d"),n=ht(5);return lh[0](t,i,n),kn(t,()=>{for(let s=0;s<9;s++){let r=-Math.PI/2+(s-4)*.28+(n()-.5)*.1;t.strokeStyle=`rgba(255,220,170,${.05+n()*.06})`,t.lineWidth=i*(.01+n()*.03),t.beginPath(),t.moveTo(i*.5,i*.74),t.lineTo(i*.5+Math.cos(r)*i,i*.74+Math.sin(r)*i),t.stroke()}[.3,.55,.8].forEach((s,r)=>zn(t,i*(.5-s*.35),i*(.74-s*.5),i*(.03+r*.02),"rgba(160,200,255,0.25)"))}),Od(t,i,.25),Bd(t,i,i,n,14),Pn(e)}var hh=.88,uh=1.07,yr=84,zs=-.25,ch=0,ua=1.5,ks=43.79,Vd=47.75,P1=`uniform float uT, uAspect; varying vec2 vUv; ${He}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  vec3 col = mix(vec3(0.01, 0.006, 0.005), vec3(0.032, 0.02, 0.015), smoothstep(-0.6, 0.6, p.y + 0.15));
  for (int i = 0; i < 14; i++) {
    float fi = float(i);
    vec2 c = (vec2(hash12(vec2(fi, 1.0)), hash12(vec2(fi, 2.0))) - 0.5) * vec2(uAspect, 1.0) * 1.1;
    c += vec2(sin(uT * 0.1 + fi), cos(uT * 0.13 + fi * 2.0)) * 0.05;
    float r = 0.04 + 0.08 * hash12(vec2(fi, 3.0)), d = length(p - c);
    col += mix(vec3(1.0, 0.5, 0.22), vec3(1.0, 0.78, 0.5), hash12(vec2(fi, 4.0))) * (1.0 - smoothstep(r * 0.82, r, d)) * (0.6 + 0.4 * smoothstep(r * 0.5, r, d)) * 0.03;
  }
  gl_FragColor = vec4(col, 1.0);
}`,Gd=`attribute vec4 aUV, aR; uniform vec3 uLight; uniform float uLitK;
varying vec2 vUv; varying vec4 vUVr, vR; varying float vLit, vFog;
void main(){
  vUv = uv; vUVr = aUV; vR = aR;
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
  m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0), mv = viewMatrix * w;
  float d = length(w.xyz - uLight);
  vLit = (0.13 + 0.85 / (1.0 + d * d * 0.1)) * uLitK;
  vFog = exp(-max(-mv.z - 4.0, 0.0) * 0.06);
  gl_Position = projectionMatrix * mv;
}`,Wd=(i,e)=>`${i} uniform float uT, uFlash; varying vec2 vUv; varying vec4 vUVr, vR; varying float vLit, vFog; ${He}
void main(){
  vec2 c = vUv * vec2(${hh}, ${uh}), im = (c - vec2(0.045, 0.235)) / 0.79;
  vec3 col = vec3(0.84, 0.82, 0.78) * (0.92 + 0.08 * vnoise(c * 70.0 + vR.x * 9.0));
  if (!gl_FrontFacing) col *= vec3(0.42, 0.42, 0.45);
  else if (im.x > 0.0 && im.x < 1.0 && im.y > 0.0 && im.y < 1.0) {
    ${e}
    vec2 e = min(im, 1.0 - im); col *= 0.7 + 0.3 * smoothstep(0.0, 0.04, min(e.x, e.y));
  } else if (vR.x > 0.35 && c.y < 0.2) {
    float y = 0.11 + 0.012 * sin(c.x * 47.0 + vR.y * 20.0) + 0.006 * sin(c.x * 131.0 + vR.z * 9.0);
    float ink = (1.0 - smoothstep(0.002, 0.006, abs(c.y - y))) * step(0.1, c.x) * step(c.x, 0.3 + vR.z * 0.45) * (0.5 + 0.5 * vnoise(c * vec2(40.0, 200.0)));
    col = mix(col, vec3(0.08, 0.1, 0.22), ink * 0.85);
  }
  float sh = pow(max(0.0, sin((c.x * 0.8 + c.y) * 2.6 - uT * 0.6 + vR.w * 6.28)), 30.0) * 0.28;
  gl_FragColor = vec4((col + sh) * (vLit + uFlash) * vFog, 1.0);
}`,I1=Wd("uniform sampler2D uAtlas;","col = texture2D(uAtlas, vUVr.xy + im * vUVr.zw).rgb;"),U1=Wd("uniform sampler2D uBig; uniform float uDev;",`
    vec3 ph = texture2D(uBig, im).rgb; float l = dot(ph, vec3(0.3, 0.5, 0.2));
    vec3 und = vec3(0.05, 0.065, 0.07) + vec3(0.02, 0.03, 0.02) * vnoise(im * 9.0);
    float k = smoothstep(0.0, 1.0, uDev * 1.7 - (1.0 - l) * 0.7);
    col = mix(und, ph, k); col.b = mix(und.b, ph.b, smoothstep(0.0, 1.0, uDev * 1.5 - (1.0 - l) * 0.7 - 0.12));`),L1=[[37.6,.4,.3,17,0],[43.5,.1,.05,7.8,.02],[45.2,-.1,0,4.3,0],[47.7,-.12,0,3.9,0],[50.5,-.2,-.4,7.2,.4],[53.3,-.25,-.45,11.5,1.2]],da=class extends Xe{constructor(e){super(e,{fov:40,near:.05,far:200}),this.U={uT:{value:0},uAspect:{value:e.aspect}},this.scene.add(sn(P1,this.U));let t={value:new I},n={value:0},s=this.U.uT,r=ht(21),o=new ze(hh,uh),a=new Float32Array(yr*4),l=new Float32Array(yr*4);this.cards=Array.from({length:yr},(d,u)=>{a.set(zd(u%11),u*4);for(let g=0;g<4;g++)l[u*4+g]=r();let m=r();return{r:1.25+r()*3,a:r()*6.283,w:(r()-.5)*.04,z:oe(-24,13,(u+r())/yr),ph:r()*6.28,rx:(r()-.5)*.7,ry:(r()-.5)*.9,rz:(r()-.5)*.6,oa:r()*6.283,or:1+m*2.6+r()*.4,oz:ua-.4-m*7.5,os:1.5-m*.7}}),o.setAttribute("aUV",new Zt(a,4)),o.setAttribute("aR",new Zt(l,4));let c=new Ee({vertexShader:Gd,fragmentShader:I1,side:Ze,uniforms:{uAtlas:{value:e.shared.photos},uLight:t,uLitK:{value:1},uT:s,uFlash:n}});this.inst=new Oo(o,c,yr),this.inst.frustumCulled=!1,this.scene.add(this.inst);let h=new ze(hh,uh);h.setAttribute("aUV",new _t(new Array(16).fill(0),4)),h.setAttribute("aR",new _t([.9,.3,.5,.2,.9,.3,.5,.2,.9,.3,.5,.2,.9,.3,.5,.2],4)),this.HU={uBig:{value:e.shared.big},uDev:{value:0},uLight:t,uLitK:{value:1.15},uT:s,uFlash:n},this.hero=new de(h,new Ee({vertexShader:Gd,fragmentShader:U1,uniforms:this.HU,side:Ze})),this.hero.frustumCulled=!1,this.scene.add(this.hero),this.halo=new de(new ze(1,1),new yt({map:e.shared.glow,color:new Me(1,.62,.3),transparent:!0,blending:it,depthWrite:!1})),this.scene.add(this.halo),this.light=t,this.flash=n,this.D=new $t}update(e){let t=this.camera,[n,s,r,o]=vn(e,L1,J.inOut),a=this.D;t.position.set(n,s,r),t.lookAt(n*.5+zs*.5,0,r-10),t.rotateZ(o),t.updateMatrixWorld(),this.U.uT.value=e,this.U.uAspect.value=this.ctx.aspect,this.light.value.set(oe(n+.6,zs+.3,Z(43.5,45,e)),oe(1.2,.8,Z(43.5,45,e)),oe(r-5,ua+1.2,Z(43.5,45,e))),this.flash.value=e>ks?1.4*Math.exp(-(e-ks)*5):0;let l=J.inOut(Q(e,Vd,50.4)),c=Math.max(0,e-Vd),h=.3*c+.28*c*c;this.cards.forEach((x,f)=>{let p=x.a+e*x.w,T=zs+x.r*Math.cos(p),M=ch+x.r*Math.sin(p)*.72,S=x.z+Math.sin(e*.3+x.ph)*.25,w=x.rx+Math.sin(e*.21+x.ph)*.15,A=x.ry+Math.cos(e*.17+x.ph)*.2,R=x.rz;if(l>0){let C=x.oa+h*x.os;T=oe(T,zs+x.or*Math.cos(C),l),M=oe(M,ch+x.or*Math.sin(C),l),S=oe(S,x.oz,l),w=oe(w,.2*Math.sin(C),l),A=oe(A,.2*Math.cos(C),l),R=oe(R,C+Math.PI/2,l)}a.position.set(T,M,S),a.rotation.set(w,A,R),a.updateMatrix(),this.inst.setMatrixAt(f,a.matrix)}),this.inst.instanceMatrix.needsUpdate=!0;let d=Q(e,ks,44.75),u=J.out(d),m=e<ks-.05;this.hero.position.set(zs,m?60:ch+(1-u)*1.8+.02*Math.sin(e*.8),ua),this.hero.rotation.set((1-u)*.5,.04*Math.sin(e*.5),(1-u)*.35+.02*Math.sin(e*.37)),this.HU.uDev.value=J.inOut(Q(e,44.4,47.4));let g=Z(49,52.8,e);this.halo.visible=!m,this.halo.position.set(zs,this.hero.position.y,ua-.08),this.halo.scale.setScalar(oe(2.6,6.5,g)),this.halo.material.opacity=.12+.3*this.HU.uDev.value+.45*g}post(e){let t=e>ks?Math.exp(-(e-ks)*9):0;return{tint:[1.1,.98,.86],sat:.95,bloom:.85,bloomThr:.7,vig:.85,grain:.07,dust:.5,dustCol:[1,.82,.6],ca:.4,fadeW:.6*t,exposure:1+.25*Z(50.5,52.8,e)}}};var Xd=`
uniform float uT, uUnf, uSep, uPhase, uFire, uLove, uLoveA, uKiss, uPx, uPhotoPx, uDim;
uniform vec4 uRings[4];            // age, x, z, amp
uniform vec4 uPhoto;               // assemble, burst, atlas cell, -
uniform vec3 uPC, uPR, uPU;        // star-photo centre, half right, half up (world)
uniform sampler2D uAtlas;
attribute vec4 aA;                 // kind, r/u, angle/offset, height
attribute vec4 aB;                 // seeds
attribute vec2 aC;                 // star-photo grid uv (-1 = none)
varying vec3 vCol; varying float vA;
${He}
${Ti}
const float K = 3.65, R0 = 0.55, PI = 3.14159265;
vec3 bez(vec3 a, vec3 b, vec3 c, float u){ return mix(mix(a, b, u), mix(b, c, u), u); }
void main(){
  float kind = aA.x, r = aA.y;
  vec3 W = vec3(cos(uPhase), 0.0, sin(uPhase)) * uSep;
  vec3 WARM = vec3(1.0, 0.6, 0.3), COLD = vec3(0.42, 0.64, 1.0);
  vec3 pos, col; float br = 1.0, sz = 0.55 + 1.9 * pow(aB.w, 3.0);
  bool disk = true; float rn = 0.0;
  if (kind < 0.5) {                                   // spiral arms rooted at the two cores
    float arm = step(0.5, aB.x); rn = (r - R0) / 3.45;
    float th = uPhase + arm * PI + K * log(r / R0) - 0.015 * uT * r + (1.0 - uUnf) * 5.0 * (1.0 - rn);
    float R = mix(0.12 + r * 0.07, r - (R0 - uSep) * exp(-(r - R0) * 2.0), uUnf);
    vec2 dir = vec2(cos(th), sin(th)), perp = vec2(-dir.y, dir.x);
    vec2 p2 = dir * R + perp * aA.z * (0.3 + 0.7 * uUnf) * (1.0 + 2.2 * rn);
    pos = vec3(p2.x, aA.w * mix(0.3, 1.0, uUnf), p2.y);
    col = arm < 0.5 ? pencil(0.02 + 0.5 * rn) : pencil(0.98 - 0.5 * rn);
    br = (0.25 + 0.9 * exp(-(r - R0) * 0.9)) * (0.5 + 0.8 * aB.z) * (0.5 + 0.8 * exp(-abs(aA.z) * 9.0));
    if (aB.y > 0.94) { col = mix(col, vec3(1.0), 0.6); br *= 2.0; }
  } else if (kind < 1.5) {
    if (aB.x < 0.55) {                                // faint halo disc
      float th = aA.z + uPhase * 0.6; float R = mix(r * 0.15, r, uUnf); rn = r / 5.5;
      pos = vec3(cos(th) * R, aA.w, sin(th) * R);
      col = mix(vec3(0.5, 0.58, 0.95), vec3(1.0, 0.8, 0.7), aB.y); br = 0.22;
    } else {                                          // sky sphere
      disk = false; float ph = aA.w;
      pos = vec3(cos(aA.z) * cos(ph), sin(ph), sin(aA.z) * cos(ph)) * r;
      col = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.9, 0.8), aB.y);
      br = (0.35 + 0.5 * aB.z) * (0.7 + 0.3 * sin(uT * (1.0 + 3.0 * aB.y) + aB.z * 60.0)); sz *= 1.6;
    }
  } else if (kind < 2.5) {                            // bulges swirling around each light
    float c = step(0.5, aB.x); vec3 core = c < 0.5 ? W : -W;
    float ang = aA.z + uT * (0.55 / (r + 0.12)) * (c < 0.5 ? 1.0 : -1.0);
    pos = core + vec3(cos(ang) * r, aA.w * (1.0 - r * 1.5), sin(ang) * r) * mix(0.4, 1.0, uUnf);
    col = mix(c < 0.5 ? WARM : COLD, vec3(1.0), exp(-r * 10.0) * 0.7);
    br = 0.35 + 1.3 * exp(-r * 7.0); rn = 0.1;
  } else if (kind < 3.5) {                            // twin strands of the kiss bridge
    disk = false; float s = step(0.5, aB.x), u = r;
    float vis = s < 0.5 ? step(u, uLove) : step(1.0 - uLove, u);
    vec3 A = vec3(0.0, 1.35, 0.0), P = bez(W, A, -W, u), T = normalize(mix(A - W, -W - A, u) + 1e-4);
    vec3 side = normalize(cross(T, vec3(0.0, 1.0, 0.0)) + vec3(1e-4)), N = cross(side, T);
    float rr = 0.025 + 0.06 * sin(PI * u), an = u * 10.0 + uT * 1.2 + s * PI;
    pos = P + (cos(an) * side + sin(an) * N) * rr + (aB.yzw - 0.5) * 0.035;
    float lead = s < 0.5 ? uLove - u : u - (1.0 - uLove);
    col = mix(s < 0.5 ? WARM : COLD, vec3(1.0), 0.6 * exp(-abs(u - 0.5) * 7.0) * step(0.5, uLove));
    br = (0.9 + 5.0 * exp(-lead * 22.0)) * vis * uLoveA; sz *= 1.3;
  } else {                                            // dust (normal) / rising embers (fire)
    disk = false;
    if (uFire > 0.5) {
      float life = fract(aB.y + uT * 0.07 * (0.5 + aB.z));
      float th = aA.z + life * 2.2 + uT * 0.12, R = r * 0.7 + life * 1.4;
      pos = vec3(cos(th) * R, -0.6 + life * 4.2, sin(th) * R) + curl3(vec3(aA.z, life * 3.0, uT * 0.2)) * 0.35;
      col = mix(vec3(1.0, 0.78, 0.42), vec3(1.0, 0.22, 0.04), life);
      br = 1.1 * (1.0 - life) * smoothstep(0.0, 0.08, life); sz *= 1.2;
    } else {
      float th = aA.z + uT * 0.02;
      pos = vec3(cos(th) * r, aA.w, sin(th) * r);
      col = vec3(0.6, 0.7, 1.0); br = 0.14 * (0.6 + 0.4 * sin(uT * 2.0 + aB.z * 50.0));
    }
  }
  if (uFire > 0.5 && disk) {                          // the galaxy catches fire
    pos += curl3(pos * 1.3 + vec3(0.0, uT * 0.45, 0.0)) * 0.09 * (0.3 + rn);
    bool cold = kind > 1.5 && kind < 2.5 && aB.x >= 0.5;
    float heat = clamp(1.15 - rn * 1.1 + (vnoise3(pos * 2.0 + uT * 0.7) - 0.5) * 0.8, 0.0, 1.0);
    if (!cold) col = mix(vec3(1.0, 0.16, 0.03), vec3(1.0, 0.74, 0.38), heat);
    br *= 0.25 + 0.75 * vnoise3(pos * 4.0 - vec3(0.0, uT * 3.0, 0.0));
  }
  if (disk) {                                         // shockwaves from the sung "oh"
    for (int i = 0; i < 4; i++) {
      vec4 Rg = uRings[i];
      if (Rg.x >= 0.0) {
        float d = length(pos.xz - Rg.yz), rad = Rg.x * 2.4;
        float b = exp(-pow((d - rad) / (0.12 + Rg.x * 0.12), 2.0)) * exp(-Rg.x * 1.1) * Rg.w;
        br += b * 2.5; pos.y += b * 0.12; col = mix(col, vec3(1.0), b * 0.3);
      }
    }
  }
  br *= 1.0 + uKiss * (kind > 2.5 && kind < 3.5 ? 1.2 : 0.35);
  float ph = 0.0;
  if (aC.x >= 0.0) {                                  // star-photo: arm stars gather into a remembered picture
    ph = clamp((uPhoto.x - aB.y * 0.35) / 0.65, 0.0, 1.0); ph = ph * ph * (3.0 - 2.0 * ph);
    vec3 off = (aC.x * 2.0 - 1.0) * uPR + (aC.y * 2.0 - 1.0) * uPU, tgt = uPC + off;
    tgt += normalize(off + (aB.xyz - 0.5) * length(uPR)) * uPhoto.y * length(uPR) * 1.8;
    pos = mix(pos, tgt, ph);
    vec2 cu = vec2(mod(uPhoto.z, 4.0) / 4.0, 1.0 - (floor(uPhoto.z / 4.0) + 1.0) / 3.0) + aC * vec2(0.25, 1.0 / 3.0);
    vec3 pc = texture2D(uAtlas, cu).rgb;
    col = mix(col, pc + 0.015, ph);
    br = mix(br, 0.5 * (0.85 + 0.3 * sin(uT * 5.0 + aB.z * 40.0)) * (1.0 + 2.0 * step(0.985, aB.y)), ph);
  } else if (kind < 2.5) br *= 1.0 - 0.8 * uPhoto.x;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = sz * 0.02 * uPx / max(-mv.z, 0.05);
  float a = br * clamp(px * px / 2.25, 0.04, 1.0);
  px = mix(px, uPhotoPx * (0.85 + 0.3 * aB.w), ph);
  gl_PointSize = clamp(px, 1.0, 48.0);
  vCol = col; vA = mv.z < -0.05 ? a * uDim : 0.0;
}`,qd=`
uniform float uT, uFire, uDim, uKiss; uniform mat3 uRot; uniform vec2 uTan; varying vec2 vUv;
${He}
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  vec3 d = normalize(uRot * vec3(p.x * uTan.x, p.y * uTan.y, -1.0));
  float sp = mix(0.01, 0.05, uFire);
  float n = fbm3(d * 2.2 + vec3(0.0, uT * sp, uT * sp * 0.5)), n2 = fbm3(d * 5.0 - uT * sp * 1.5 + n * 1.5);
  float band = exp(-d.y * d.y * 9.0);
  vec3 neb = mix(vec3(0.05, 0.02, 0.12), vec3(0.02, 0.09, 0.14), smoothstep(0.3, 0.7, n2));
  neb += vec3(0.12, 0.04, 0.1) * pow(smoothstep(0.45, 0.85, n), 2.0);
  vec3 c = vec3(0.004, 0.006, 0.018) + neb * (0.3 + 0.9 * band) * smoothstep(0.25, 0.75, n);
  vec3 f = vec3(0.012, 0.003, 0.002) + vec3(0.2, 0.035, 0.01) * smoothstep(0.3, 0.8, n) * (0.4 + band)
         + vec3(0.3, 0.1, 0.02) * pow(smoothstep(0.5, 0.9, n2), 2.0) * band;
  c = mix(c, f, uFire) * (1.0 + uKiss * 0.6);
  vec3 q = d * 260.0, id = floor(q); float h = hash13(id);
  float st = step(0.9965, h) * smoothstep(0.35, 0.0, length(fract(q) - 0.5)) * (0.6 + 0.4 * sin(uT * 3.0 + h * 100.0));
  c += st * mix(vec3(0.8, 0.85, 1.0), vec3(1.0, 0.6, 0.35), uFire) * 0.9;
  gl_FragColor = vec4(c * uDim, 1.0);
}`,Yd=`
uniform float uT, uUnf, uPhase, uBurn; uniform vec3 uCR, uCU;
attribute vec4 aI; attribute vec4 aS;   // r, angle, height, cell | seeds (w = burn order)
varying vec2 vUv; varying float vCell, vB; varying vec4 vS;
void main(){
  float R = mix(0.3, aI.x, uUnf), ang = aI.y + uPhase * 0.5 + uT * 0.04 / (aI.x * 0.3 + 0.2);
  vec3 c = vec3(cos(ang) * R, aI.z + 0.06 * sin(uT * 0.7 + aS.x * 6.0), sin(ang) * R);
  float s = 0.34 * (0.8 + 0.4 * aS.y), rot = (aS.z - 0.5) * 0.6 + 0.15 * sin(uT * 0.5 + aS.w * 6.0);
  vec2 q = vec2(position.x * cos(rot) - position.y * sin(rot), position.x * sin(rot) + position.y * cos(rot));
  vUv = uv; vCell = aI.w; vS = aS; vB = clamp((uBurn - aS.w) * 2.5, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (q.x * uCR + q.y * uCU) * s, 1.0);
}`,$d=`
uniform sampler2D uAtlas; uniform float uCardA, uFire; varying vec2 vUv; varying float vCell, vB; varying vec4 vS;
${He}
void main(){
  vec2 pu = (vUv - vec2(0.068, 0.18)) / vec2(0.864, 0.76);
  vec3 col = vec3(0.86, 0.83, 0.78);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0)
    col = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + pu * vec2(0.25, 1.0 / 3.0)).rgb;
  col *= mix(vec3(0.62, 0.66, 0.8), vec3(1.0, 0.72, 0.5), uFire);
  float n = fbm(vUv * vec2(3.5, 4.0) + vS.xy * 20.0) + (1.0 - vUv.y) * 0.25, th = vB * 1.35 - 0.1, on = step(0.001, vB);
  if (n < th) discard;
  col = mix(col, vec3(0.04, 0.02, 0.01), smoothstep(th + 0.12, th + 0.02, n) * on);
  col += vec3(3.0, 1.2, 0.3) * smoothstep(th + 0.035, th, n) * on;
  gl_FragColor = vec4(col, uCardA);
}`;var Zd=.55,D1=4,N1=1.35,F1=new I(0,N1/2,0),Kd={normal:{t0:52.6,t1:80.46,unf:[52.6,57.5],love:[[69.63,75.2,79.4]],cam:[[52.6,3.2,1.5,0,0],[55.2,5.8,1.12,.35,0],[60.5,8.2,.62,.9,0],[64.5,7,.42,1.5,-.1],[69.4,8.6,.3,2,-1.45],[75.5,7.8,.24,2.3,-1.45],[79.6,9.5,.34,2.6,-1.1],[80.5,13,.5,2.75,-.3]],photos:[[52.45,54.6,55.22,ha.two],[61.07,63.2,63.79,ha.sea]],cards:[[56,58.5],[67.5,70]]},fire:{t0:112.6,t1:136.17,unf:[0,.1],love:[[121,122.9,123.7],[129.61,133.2,135.9]],cam:[[112.6,10.5,.55,3.4,0],[116,8,.4,3.9,0],[121,8.6,.28,4.4,-1.45],[124,7.2,.5,4.8,-.2],[129.4,8.6,.28,5.2,-1.45],[134.5,7.8,.22,5.5,-1.45],[136.2,10.5,.3,5.7,-.5]],photos:[],cards:[[112,112.6],[135,136]],burn:[113.5,130]}},O1=(i,e)=>e>=i[0]-.5&&e<=i[2]+.6,Mr=class extends Xe{constructor(e,{fire:t=!1}={}){super(e,{fov:50,near:.05,far:200}),this.fire=t,this.C=t?Kd.fire:Kd.normal;let n=Math.max(.6,e.quality||1),s=ht(t?77:52),r=()=>Math.sqrt(-2*Math.log(s()+1e-9))*Math.cos(6.2832*s()),o=128,a=Math.max(o*o+6e3,Math.round(62e3*n)),l=Math.round(16e3*n),c=Math.round(9e3*n),h=Math.round(7e3*n),d=Math.round(t?5e3*n:2500*n),u=a+l+c+h+d;this.G=o;let m=new Float32Array(u*4),g=new Float32Array(u*4),x=new Float32Array(u*2).fill(-1),f=new Float32Array(u*3),p=0,T=(_,D,F,H)=>{m.set([_,D,F,H],p*4),g.set([s(),s(),s(),s()],p*4),p++};for(let _=0;_<a;_++){let D=Math.pow(s(),1.35),F=Zd+(D1-Zd)*D;T(0,F,r()*(.05+.2*D),r()*.04*(1+D)),_<o*o&&(x[(p-1)*2]=(_%o+.5)/o,x[(p-1)*2+1]=(Math.floor(_/o)+.5)/o)}for(let _=0;_<l;_++)_<l*.55?T(1,Math.sqrt(s())*5.5,s()*6.2832,r()*.12):T(1,40+s()*40,s()*6.2832,Math.asin(s()*2-1)),g[(p-1)*4]=_<l*.55?.2:.8;for(let _=0;_<c;_++)T(2,Math.pow(s(),1.8)*.5,s()*6.2832,r()*.06);for(let _=0;_<h;_++)T(3,s(),0,0);for(let _=0;_<d;_++)T(4,t?Math.sqrt(s())*3.5:3+s()*14,s()*6.2832,r()*(t?.2:2.5));let M=new Je;M.setAttribute("position",new Ce(f,3)),M.setAttribute("aA",new Ce(m,4)),M.setAttribute("aB",new Ce(g,4)),M.setAttribute("aC",new Ce(x,2));let S=_=>({value:_});this.U={uT:S(0),uUnf:S(0),uSep:S(1),uPhase:S(0),uFire:S(t?1:0),uLove:S(0),uLoveA:S(0),uKiss:S(0),uPx:S(720),uPhotoPx:S(4),uDim:S(1),uRings:S([0,1,2,3].map(()=>new Ke(-1,0,0,0))),uPhoto:S(new Ke(0,0,0,0)),uPC:S(new I),uPR:S(new I),uPU:S(new I),uAtlas:S(e.shared.photos)},this.points=new It(M,ta(Xd,On,this.U)),this.points.frustumCulled=!1,this.scene.add(this.points),this.NU={uT:this.U.uT,uFire:this.U.uFire,uDim:this.U.uDim,uKiss:this.U.uKiss,uRot:S(new Be),uTan:S(new ge(1,1))},this.scene.add(sn(qd,this.NU));let w=22,A=new si().copy(new ze(.8,1)),R=new Float32Array(w*4),C=new Float32Array(w*4),k=[0,1,2,3,4,5,6,7,8,9,10];for(let _=0;_<w;_++)R.set([1.5+s()*2.6,_/w*6.2832+s()*.3,(s()-.5)*.5,k[_%k.length]],_*4),C.set([s(),s(),s(),t?_/w:0],_*4);A.setAttribute("aI",new Zt(R,4)),A.setAttribute("aS",new Zt(C,4)),A.instanceCount=w,this.CU={uT:this.U.uT,uUnf:this.U.uUnf,uPhase:this.U.uPhase,uBurn:S(0),uCR:S(new I),uCU:S(new I),uAtlas:this.U.uAtlas,uCardA:S(1),uFire:this.U.uFire},this.cards=new de(A,new Ee({vertexShader:Yd,fragmentShader:$d,uniforms:this.CU,side:Ze,transparent:!0,depthWrite:!0})),this.cards.frustumCulled=!1,this.cards.renderOrder=-10,this.scene.add(this.cards);let v=_=>{let D=new Us(new Gi({map:e.shared.glow,color:new Me(..._),blending:it,depthTest:!1,depthWrite:!1,transparent:!0}));return D.renderOrder=10,this.scene.add(D),D};this.warm=v(t?[1.6,.75,.3]:[1.5,.8,.45]),this.cold=v([.55,.8,1.6]),this.flash=v([1.4,1.2,1.1]),this.halo=v(t?[.9,.25,.06]:[.3,.32,.7]),this.RING=this.ringEvents(),this.tmp=new I,this.fwd=new I}phase(e){return(this.fire?2.1:0)+.32*(e-this.C.t0)}love(e){let t=this.C.love.find(c=>O1(c,e));if(!t)return{grow:0,a:0,kiss:0};let[n,s,r]=t,o=e<s?.5*J.inOut(Q(e,n,s)):.5+.5*J.out(Q(e,s,s+2.2)),a=Z(n-.3,n+.6,e)*(1-Z(r-.9,r+.4,e)),l=(e>=s?Math.exp(-(e-s)*2):Math.exp(-(s-e)*8)*.25)*a;return{grow:o,a,kiss:l}}sep(e){let t=this.love(e);return 1-.3*t.a*Z(.2,.5,t.grow)}ringEvents(){let{t0:e,t1:t,love:n}=this.C,s=[];return Qo.filter(r=>r>e&&r<t).forEach((r,o)=>{let a=o%2?-1:1,l=this.phase(r),c=this.sep(r);s.push([r,a*Math.cos(l)*c,a*Math.sin(l)*c,1])}),n.forEach(r=>s.push([r[1],0,0,1.8])),s.sort((r,o)=>r[0]-o[0])}update(e){let t=this.U,n=this.C,s=this.camera,r=this.ctx;t.uT.value=e;let o=this.fire?1:J.inOut(Q(e,n.unf[0],n.unf[1])),a=this.phase(e),l=this.sep(e),c=this.love(e);t.uUnf.value=o,t.uPhase.value=a,t.uSep.value=l,t.uLove.value=c.grow,t.uLoveA.value=c.a,t.uKiss.value=c.kiss;let[h,d,u,m]=vn(e,n.cam,J.inOut),g=.04*Math.sin(e*.37),x=.02*Math.sin(e*.29+1);s.position.set(Math.cos(d+x)*Math.sin(u+g),Math.sin(d+x),Math.cos(d+x)*Math.cos(u+g)).multiplyScalar(h),s.position.y+=m,s.lookAt(0,m,0),s.rotateZ(.03*Math.sin(e*.21)),s.updateMatrixWorld();let f=Math.tan(Ku.degToRad(s.fov/2));t.uPx.value=r.h/(2*f),this.NU.uRot.value.setFromMatrix4(s.matrixWorld),this.NU.uTan.value.set(f*s.aspect,f);let p=s.matrixWorld.elements,T=new I(p[0],p[1],p[2]),M=new I(p[4],p[5],p[6]),S=this.fwd.set(-p[8],-p[9],-p[10]),w=t.uPhoto.value;w.set(0,0,0,0);for(let[q,V,j,W]of n.photos){if(e<q-.1||e>j+2.6)continue;let ue=e<j+.3?Q(e,q,V):1-J.inOut(Q(e,j+.3,j+2.5));w.set(ue,J.out(Q(e,j,j+1.4))*(1-.6*Q(e,j+1.2,j+2.5)),W,0)}let A=3,R=A*f*.5;t.uPC.value.copy(s.position).addScaledVector(S,A).addScaledVector(M,A*f*.12),t.uPR.value.copy(T).multiplyScalar(R),t.uPU.value.copy(M).multiplyScalar(R),t.uPhotoPx.value=2.5*(R/(A*f))*r.h/this.G;let C=this.RING.filter(q=>q[0]<=e&&e-q[0]<3.5).slice(-4);t.uRings.value.forEach((q,V)=>{let j=C[V];j?q.set(e-j[0],j[1],j[2],j[3]):q.set(-1,0,0,0)});let k=0;this.fire?(k=Z(n.cards[0][0],n.cards[0][1],e)*(1-Z(n.cards[1][0],n.cards[1][1],e)),this.CU.uBurn.value=1.45*Q(e,n.burn[0],n.burn[1])):k=Z(n.cards[0][0],n.cards[0][1],e)*(1-Z(n.cards[1][0],n.cards[1][1],e)),this.CU.uCardA.value=k,this.cards.visible=k>.01,this.CU.uCR.value.copy(T),this.CU.uCU.value.copy(M);let v=Ve.get("loud",e),_=Ve.beatPulse?Ve.beatPulse(e,6):0,D=this.tmp.set(Math.cos(a)*l,0,Math.sin(a)*l),F=(.35+.35*o)*(1+.4*c.kiss)*(1-.7*w.x);this.warm.position.copy(D),this.cold.position.copy(D).multiplyScalar(-1),this.warm.scale.setScalar((.9+.35*v+.15*_)*F),this.cold.scale.setScalar((.9+.35*v+.15*_)*F),this.flash.position.copy(F1),this.flash.scale.setScalar(.3+2.2*c.kiss+1*c.a*Z(.45,.6,c.grow)),this.flash.material.opacity=Qe(c.a*Z(.4,.5,c.grow)*.5+.55*c.kiss),this.halo.scale.setScalar(oe(2,10,o)),this.halo.material.opacity=(this.fire?.1:.16)+.06*v;let H=this.fire?Z(112.4,113.2,e)*(1-.55*Z(135.4,136.17,e)):1-.75*Z(79.5,80.46,e);t.uDim.value=H,[this.warm,this.cold,this.halo].forEach(q=>q.material.opacity=q===this.halo?q.material.opacity*H:H)}post(e){let t=this.love(e),n=t.kiss;return this.fire?{tint:[1.12,.9,.78],sat:1.12,contrast:1.06,bloom:.8+.5*n,bloomThr:.7,vig:1,grain:.07,dust:.9,dustCol:[1,.55,.25],ca:.5+.8*n,leak:.25+.2*n,flicker:.04,exposure:.9+.15*n,fadeW:.12*n}:{tint:[.92,.97,1.1],sat:1.05,bloom:.85+.4*n,bloomThr:.7,vig:.95,grain:.06,dust:.35,dustCol:[.7,.8,1],ca:.35+.7*n,exposure:1+.12*n,fadeW:.1*n}}};async function Jd(){let i=window.OLK_IMG||{},e={};return await Promise.all(Object.entries(i).map(async([t,n])=>{let s=new Image;s.src=n.src;try{await s.decode()}catch{console.warn("image decode failed",t);return}let r=new Vt(s),o=t.endsWith("_d");r.colorSpace=o?en:jt,r.anisotropy=4,r.wrapS=r.wrapT=Qn,r.needsUpdate=!0,e[t]={tex:r,img:s,w:n.w,h:n.h}})),e}var B1="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function bn(i,e,t={}){let n={uImg:{value:i.tex},uDep:{value:e?e.tex:null},uHasDep:{value:e?1:0},uAspect:{value:1.7777777777777777},uImgAspect:{value:i.w/i.h},uCam:{value:new I(0,0,1)},uPar:{value:new ge(0,0)},uDolly:{value:0},uFocus:{value:.5},uBlur:{value:0},uT:{value:0},uGain:{value:1},uTint:{value:new I(1,1,1)},uAlpha:{value:1},...t.uniforms||{}},s=`
uniform sampler2D uImg, uDep; uniform float uHasDep, uAspect, uImgAspect, uDolly, uFocus, uBlur, uT, uGain, uAlpha;
uniform vec3 uCam, uTint; uniform vec2 uPar; varying vec2 vUv;
${He}
${t.head||""}
vec2 warp(vec2 uv, float d){ ${t.warp||"return uv;"} }
vec3 hook(vec3 col, vec2 uv, float d, vec2 suv){ ${t.hook||"return col;"} }
float dep(vec2 uv){ return uHasDep > 0.5 ? texture2D(uDep, uv).r : 0.5; }
void main(){
  // cover-fit screen -> image uv, then camera pan/zoom
  vec2 s = vUv - 0.5;
  float ra = uAspect / uImgAspect;
  vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  vec2 base = 0.5 + s * sc / uCam.z + uCam.xy;
  // fixed-point parallax: near pixels (d->1) shift against the camera move, and grow with dolly
  vec2 uv = base; float d = 0.5;
  for (int i = 0; i < 6; i++) {
    d = dep(uv);
    uv = base - uPar * (d - 0.5);
    uv = 0.5 + uCam.xy + (uv - 0.5 - uCam.xy) / (1.0 + uDolly * d);
  }
  uv = warp(uv, d);
  // depth of field through mip bias + 6 tap rotated disc
  float coc = uBlur * abs(d - uFocus);
  vec3 col;
  if (coc < 0.02) col = texture2D(uImg, uv).rgb;
  else {
    float lod = log2(1.0 + coc * 7.0); vec2 r = vec2(coc * 0.006, coc * 0.006 * uImgAspect);
    col = texture2D(uImg, uv, lod).rgb * 0.25;
    for (int k = 0; k < 6; k++) { float a = float(k) * 1.0472 + hash12(vUv * 91.0) * 1.0; col += texture2D(uImg, uv + vec2(cos(a), sin(a)) * r, lod).rgb * 0.125; }
  }
  col = hook(col * uGain * uTint, uv, d, vUv);
  gl_FragColor = vec4(col, uAlpha);
}`;return new Ee({vertexShader:B1,fragmentShader:s,uniforms:n,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||nn})}function dh(i,e,t,n,s){let r=i.uniforms,o=r.uCam.value,a=r.uPar.value,l=r.uDolly.value,c=e/r.uImgAspect.value,h=c>1?1:c,d=c>1?1/c:1,u=1+l*s,m=.5+o.x+(t-.5-o.x)*u+a.x*(s-.5),g=.5+o.y+(n-.5-o.y)*u+a.y*(s-.5);return[(m-.5-o.x)*o.z/h*2*e,(g-.5-o.y)*o.z/d*2,u*o.z/d*2]}function Ot(i,e=-100){let t=new de(new ze(2,2),i);return t.frustumCulled=!1,t.renderOrder=e,t}function br(i,e={}){let t={uTex:{value:i.tex},uT:{value:0},uWind:{value:e.wind??1},uAlpha:{value:1},uRim:{value:new Ke(1,.8,.55,e.rim??.6)},uTint:{value:new I(1,1,1)},uDis:{value:0},uTexel:{value:new ge(1/i.w,1/i.h)},uSeed:{value:e.seed??0},uClip:{value:new Ke(-1,0,1,0)}},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",s=`
uniform sampler2D uTex; uniform float uT, uWind, uAlpha, uDis, uSeed; uniform vec4 uRim; uniform vec3 uTint; uniform vec2 uTexel; uniform vec4 uClip;
varying vec2 vUv; ${He}
void main(){
  vec2 uv = vUv;
  float wl = uClip.x + uClip.y * (sin(uv.x * 40.0 + uT * 2.1 + uSeed) * 0.6 + sin(uv.x * 83.0 - uT * 3.3) * 0.4);
  if (uClip.w > 0.5) uv.x += (vnoise(vec2(uv.y * 60.0 - uT * 2.0, uT * 0.5 + uSeed)) - 0.5) * 0.03 * smoothstep(wl, wl + 0.05, uv.y);
  float hair = smoothstep(0.62, 0.9, uv.y), hem = smoothstep(0.52, 0.28, uv.y) * smoothstep(0.08, 0.3, uv.y);
  float w = sin(uT * 2.3 + uv.y * 9.0 + uSeed) * 0.6 + sin(uT * 3.7 + uv.y * 17.0 + uSeed * 2.0) * 0.4;
  uv.x += uWind * w * (hair * 0.012 + hem * 0.008) * (0.6 + 0.4 * vnoise(vec2(uT * 0.7, uv.y * 3.0)));
  vec4 c = texture2D(uTex, uv);
  // rim: alpha gradient toward the light side
  float aL = texture2D(uTex, uv + vec2(-6.0, 3.0) * uTexel).a, aR = texture2D(uTex, uv + vec2(6.0, 3.0) * uTexel).a;
  float edge = clamp(c.a - min(aL, aR), 0.0, 1.0);
  vec3 col = c.rgb * uTint + uRim.rgb * edge * uRim.a * 2.0;
  float a = c.a;
  if (uDis > 0.0) {
    float n = fbm(uv * vec2(9.0, 14.0) + uSeed) * 0.8 + (1.0 - uv.y) * 0.3;
    float th = uDis * 1.25;
    col += vec3(1.6, 0.9, 0.5) * smoothstep(th + 0.1, th, n) * step(th, n) * 3.0 * step(0.001, uDis);
    a *= smoothstep(th - 0.02, th + 0.02, n);
  }
  if (uClip.x > -0.5) a *= uClip.w > 0.5 ? smoothstep(wl, wl + 0.01, uv.y) * exp(-(uv.y - wl) / uClip.z) : smoothstep(wl - 0.004, wl + 0.004, uv.y);
  a *= uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(col, a);
}`;return new Ee({vertexShader:n,fragmentShader:s,uniforms:t,transparent:!0,depthWrite:!1})}function Sr(i,e=1){let t=new ze(e*i.w/i.h,e);return t.translate(0,e/2,0),t}var Tr=80.46,Qd=82.78,jd=.32,ef=["1/250   F2.0   ISO 400   [ AF ]   +0.3","1/125   F2.8   ISO 400   [ AF ]   +0.0","1/125   F2.8   ISO 400   [ -- ]   NO FOCUS","1/60    F4.0   ISO 800   [ -- ]   NO FOCUS"];function z1(){let t=xn(1024,64*ef.length),n=t.getContext("2d");return n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.font=`34px ${un.mono}`,n.textBaseline="middle",n.textAlign="center",n.fillStyle="#fff",ef.forEach((s,r)=>n.fillText(s,1024/2,64*r+64/2)),Pn(t,{linear:!0})}var k1=`
uniform float uMis, uAF, uBlade, uBladeRot, uFlare, uRow; uniform sampler2D uHud; uniform vec2 uSway;
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float hexA(vec2 p, float r, float rot){ float a = atan(p.y, p.x) + rot, s = 1.0471976; a = mod(a, s) - s * 0.5; return length(p) * cos(a) - r; }
`,H1=`
  vec2 p = suv - 0.5, q = vec2(p.x * uAspect, p.y);
  float rq = length(q);
  // split-prism: the two halves disagree until focus is right
  if (rq < 0.085) {
    float sh = uMis * 0.03 * (q.y > 0.0 ? 1.0 : -1.0);
    col = texture2D(uImg, uv + vec2(sh, 0.0)).rgb * uGain * uTint;
    col *= 1.0 - 0.5 * exp(-abs(q.y) * 900.0) * step(0.02, abs(uMis));
  } else if (rq < 0.13) {                            // microprism collar shimmers when out of focus
    vec2 cell = floor(q * 260.0), o = (hash22(cell) - 0.5) * uMis * 0.03;
    col = mix(col, texture2D(uImg, uv + o, 2.0 * abs(uMis)).rgb * uGain * uTint, 0.85) * 0.93;
  }
  col *= 1.0 - 0.35 * smoothstep(0.004, 0.0, abs(rq - 0.085)) - 0.25 * smoothstep(0.003, 0.0, abs(rq - 0.13));
  // ground-glass texture
  col *= 0.97 + 0.06 * hash12(floor(suv * vec2(900.0, 506.0)));
  // window sun: glare, anamorphic streak and ghosts that swing with the handheld camera
  vec2 sun = vec2(0.67, 0.93) - uSway * 2.0, sp = vec2((suv.x - sun.x) * uAspect, suv.y - sun.y);
  float gl = exp(-length(sp) * 9.0) * 0.55 + exp(-abs(sp.y) * 160.0) * exp(-abs(sp.x) * 2.2) * 0.25;
  for (int i = 1; i < 4; i++) { vec2 gp = mix(sun, vec2(0.5), 1.0 + float(i) * 0.45); gp = vec2((suv.x - gp.x) * uAspect, suv.y - gp.y);
    gl += smoothstep(0.05 + 0.03 * float(i), 0.0, length(gp)) * 0.06; }
  col += vec3(1.0, 0.78, 0.5) * gl * uFlare;
  // dust in the window light
  vec2 dq = suv * vec2(uAspect, 1.0) * 14.0 + vec2(uT * 0.08, -uT * 0.05); vec2 di = floor(dq);
  float dh = hash12(di); vec2 dc = hash22(di + 3.1);
  col += vec3(1.0, 0.85, 0.6) * step(0.86, dh) * smoothstep(0.08, 0.0, length(fract(dq) - dc)) * 0.5 * smoothstep(0.2, 0.9, suv.x) * uFlare;
  // AF brackets (centre + two sides), red blink while hunting, green on the brief lock
  vec3 afc = mix(vec3(1.0, 0.25, 0.15), vec3(0.4, 1.0, 0.5), uAF);
  for (int i = -1; i <= 1; i++) {
    vec2 bp = q - vec2(float(i) * 0.28, 0.0); float b = abs(sdBox(bp, vec2(0.035, 0.025)));
    float cornerMask = step(0.018, abs(bp.x)) * step(0.012, abs(bp.y)) + step(0.03, abs(bp.x)) + step(0.02, abs(bp.y));
    float on = (i == 0 ? 1.0 : 0.45) * (0.4 + 0.6 * step(0.5, fract(uT * 6.0)) * (1.0 - uAF) + uAF);
    col = mix(col, afc, smoothstep(0.0022, 0.0, b) * clamp(cornerMask, 0.0, 1.0) * on * 0.9);
  }
  // viewfinder frame + LCD strip
  float fr = sdBox(p * vec2(uAspect, 1.0), vec2(0.5 * uAspect - 0.05, 0.43)) - 0.02;
  col *= smoothstep(0.01, -0.02, fr) * (1.0 - 0.35 * smoothstep(-0.18, 0.0, fr));
  if (suv.y < 0.06) {
    vec2 hu = vec2((suv.x - 0.14) / 0.72, (uRow + 1.0 - clamp(suv.y / 0.06, 0.0, 1.0)) / 4.0);
    float h = (hu.x > 0.0 && hu.x < 1.0) ? texture2D(uHud, vec2(hu.x, 1.0 - hu.y)).r : 0.0;
    col += vec3(0.45, 1.0, 0.55) * h * 0.9;
  }
  // aperture blades stop down
  float ha = hexA(q, uBlade, uBladeRot);
  vec3 blade = vec3(0.02, 0.022, 0.025) + vec3(0.05) * smoothstep(0.06, 0.0, abs(ha - 0.03)) * (0.5 + 0.5 * sin(atan(q.y, q.x) * 6.0 + uBladeRot * 3.0));
  col = mix(col, blade, smoothstep(-0.004, 0.004, ha));
  return col;
`,fa=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=s=>({value:s});this.M=bn(t.viewfinder,t.viewfinder_d,{head:k1,hook:H1,uniforms:{uMis:n(0),uAF:n(0),uBlade:n(2),uBladeRot:n(0),uFlare:n(1),uRow:n(0),uHud:n(z1()),uSway:n(new ge)}}),this.scene.add(Ot(this.M))}update(e){let t=this.M.uniforms,n=e-Tr;t.uT.value=e,t.uAspect.value=this.ctx.aspect;let s=.008*Math.sin(e*1.7)+.004*Math.sin(e*4.3+1),r=.006*Math.sin(e*1.3+2)+.003*Math.sin(e*5.1);t.uSway.value.set(s,r),t.uCam.value.set(s,r,1.05+.08*J.inOut(Q(e,Tr,Qd))),t.uPar.value.set(-s*1.6,-r*1.2),t.uDolly.value=.04+.05*Q(e,Tr,Qd);let o=Z(81.35,81.55,e)*(1-Z(81.85,82.05,e)),a=.62+.3*Math.sin(n*4.2-1.2)*Math.exp(-n*.3),l=a+(jd-a)*o*.99;t.uFocus.value=l,t.uBlur.value=5,t.uMis.value=(l-jd)*1.6,t.uAF.value=o,t.uRow.value=e<81.2?Math.floor(e*5)%2:e<81.95?1:Math.floor(e*4)%2?2:3,t.uFlare.value=.8+.2*Math.sin(e*2.1),t.uGain.value=.9*Z(Tr-.05,Tr+.25,e)*(1-.35*Z(82.2,82.78,e)),t.uBlade.value=1.4*(1-J.in(Q(e,82.1,82.8))),t.uBladeRot.value=.4*Q(e,82.05,82.78)}post(e){return{tint:[1.08,1,.9],sat:.95,contrast:1.08,bloom:.55,bloomThr:.75,vig:.4,grain:.06,ca:.6,dust:.3,dustCol:[1,.85,.65]}}};var wr=82.78,Hs=84.92,tf=12,V1=`
uniform sampler2D uAtlas, uHero, uHeroD; uniform float uT, uAspect, uZoom, uCell, uPrev, uRoll, uWeave, uBurn, uGold, uBeat, uReel, uLamp, uHeat, uFade;
uniform vec2 uPar; varying vec2 vUv;
${He}
const vec2 C = vec2(0.51, 0.505), SH = vec2(0.23, 0.305);           // screen centre / half size (screen uv)
vec2 cellUV(float c, vec2 u){ return vec2(mod(c, 4.0) / 4.0, 1.0 - (floor(c / 4.0) + 1.0) / 3.0) + clamp(u, 0.002, 0.998) * vec2(0.25, 1.0 / 3.0); }
vec3 frame(float c, vec2 g, float lod){
  vec2 cu = vec2(g.x, 0.5 + (g.y - 0.5) * 0.75 - (c > 11.5 ? 0.06 : 0.0));
  if (c < 11.5) return texture2D(uAtlas, cellUV(c, cu), lod).rgb;
  float d = texture2D(uHeroD, cu).r; return texture2D(uHero, cu + uPar * (d - 0.5), lod).rgb;
}
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
void main(){
  vec2 s = C + (vUv - C) / uZoom, p = vec2(s.x * uAspect, s.y);
  vec2 f = (s - C) / SH * 0.5 + 0.5;                                   // 0..1 inside the screen
  float inS = step(0.0, f.x) * step(f.x, 1.0) * step(0.0, f.y) * step(f.y, 1.0);
  vec3 avg = uCell < 11.5 ? texture2D(uAtlas, cellUV(uCell, vec2(0.5)), 9.0).rgb : texture2D(uHero, vec2(0.5), 10.0).rgb;
  avg = mix(avg, vec3(1.0, 0.85, 0.6), 0.35) * uLamp;
  // room: dark wall lit by the screen, seat silhouettes
  float ds = sdBox(s - C, SH);
  vec3 col = vec3(0.008, 0.007, 0.01) + avg * 0.12 * exp(-max(ds, 0.0) * 11.0) * (1.0 - inS);
  // screen content
  if (inS > 0.5) {
    float pulse = 1.0 + 0.012 * uBeat; vec2 g = (f - 0.5) / pulse + 0.5;
    g.x += uWeave * (vnoise(vec2(uT * 9.0, 1.0)) - 0.5) * 0.02;
    float y2 = g.y + uRoll; float cc = y2 > 1.0 ? uPrev : uCell; g.y = fract(y2);
    // heat blisters on the jammed frame
    vec2 bc = vec2(0.52, 0.55); float hb = uHeat * smoothstep(0.35, 0.0, length((g - bc) * vec2(1.33, 1.0)));
    g += (vec2(vnoise(g * 14.0 + uT), vnoise(g * 14.0 - uT)) - 0.5) * 0.02 * hb;
    vec3 img = frame(cc, g, 0.0) * smoothstep(0.0, 0.012, g.y) * smoothstep(1.0, 0.988, g.y);
    img *= (0.92 + 0.08 * step(0.5, fract(uT * 24.0))) * uLamp;
    img += vec3(0.25, 0.1, 0.02) * hb;
    // burn-through
    float n = 0.8 * fbm(f * vec2(5.0, 3.8) + 3.0) + length((f - bc) * vec2(1.33, 1.0)) * 1.3;
    float th = uBurn > 0.0 ? 0.2 + 1.75 * uBurn : -1.0;
    vec3 hot = vec3(1.05, 0.92, 0.72);
    float hole = smoothstep(th, th - 0.025, n), edge = smoothstep(th + 0.09, th, n) * (1.0 - hole), chr = smoothstep(th + 0.3, th + 0.04, n) * (1.0 - hole);
    vec3 filmC = img * (1.0 - 0.85 * chr) + vec3(2.6, 0.7, 0.1) * edge * (0.7 + 0.5 * vnoise(f * 40.0 + uT * 6.0)) * step(0.001, uBurn);
    // the burned-in afterimage: the frame again, in gold light
    vec3 hi = frame(float(${tf}), (f - 0.5) / (1.0 + 0.02 * uBeat) + 0.5, 0.0);
    float lum = dot(hi, vec3(0.3, 0.55, 0.15));
    vec3 gold = vec3(1.2, 0.66, 0.26) * pow(lum, 1.7) * 1.7 + vec3(0.07, 0.015, 0.0) * (1.0 - lum);
    gold *= 1.0 - 0.45 * smoothstep(0.25, 0.75, length((f - 0.5) * vec2(1.2, 1.0)));
    gold *= 1.0 + 0.35 * uBeat;
    vec3 inside = mix(hot, gold, uGold);
    col = mix(filmC, inside, hole);
  }
  // the projector beam (lens -> screen), dust in the light
  vec2 L = vec2(0.36, 0.415), S = vec2(C.x * uAspect, C.y), ax = S - L; float len = length(ax); ax /= len;
  vec2 rp = p - L; float sa = dot(rp, ax) / len, h = abs(rp.x * ax.y - rp.y * ax.x);
  float w = mix(0.01, SH.y * 1.05, clamp(sa, 0.0, 1.0));
  float cone = smoothstep(w, w * 0.55, h) * smoothstep(0.0, 0.05, sa) * smoothstep(1.02, 0.85, sa);
  float smoke = 0.35 + 0.9 * fbm(p * 6.0 + vec2(-uT * 0.25, uT * 0.08));
  vec2 dq = p * 40.0 + vec2(uT * 0.6, sin(uT * 0.4) * 2.0); vec2 di = floor(dq);
  float mote = step(0.93, hash12(di)) * smoothstep(0.12, 0.0, length(fract(dq) - hash22(di)));
  col += avg * cone * (0.22 * smoke * smoke + 1.2 * mote) * (1.0 - 0.5 * uGold) * (0.9 + 0.1 * step(0.5, fract(uT * 24.0)));
  col += avg * exp(-length(p - L) * 30.0) * 1.6;                     // lens glow
  // projector + reels silhouette (rim-lit by the beam)
  float body = sdBox(p - vec2(0.2, 0.37), vec2(0.15, 0.06)) - 0.015;
  body = min(body, sdBox(p - vec2(0.34, 0.41), vec2(0.03, 0.022)));
  float sil = 1.0 - step(0.0, body);
  for (int i = 0; i < 2; i++) {
    vec2 rc = i == 0 ? vec2(0.11, 0.56) : vec2(0.29, 0.555); vec2 d = p - rc; float r = length(d);
    float a = atan(d.y, d.x) + uReel * (i == 0 ? 1.0 : 1.3);
    float spokes = step(0.55, abs(sin(a * 1.5))) * step(r, 0.062) * step(0.022, r);
    float reel = step(r, 0.085) * (1.0 - spokes) * (1.0 - step(r, 0.012) * 0.0);
    sil = max(sil, reel);
    col += vec3(1.0, 0.8, 0.55) * smoothstep(0.004, 0.0, abs(r - 0.085)) * 0.05 * uLamp;
  }
  col = mix(col, vec3(0.006, 0.005, 0.006) + avg * 0.02, sil);
  float seats = step(p.y, 0.07 + 0.025 * abs(sin(p.x * 11.0)) + 0.01 * sin(p.x * 37.0));
  col *= 1.0 - 0.9 * seats;
  gl_FragColor = vec4(col * uFade, 1.0);
}`,pa=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=l=>({value:l});this.U={uAtlas:n(e.shared.photos),uHero:n(t.hero?t.hero.tex:e.shared.big),uHeroD:n(t.hero_d?t.hero_d.tex:e.shared.big),uT:n(0),uAspect:n(16/9),uZoom:n(1),uCell:n(0),uPrev:n(0),uRoll:n(0),uWeave:n(1),uBurn:n(0),uGold:n(0),uBeat:n(0),uReel:n(0),uLamp:n(1),uHeat:n(0),uFade:n(1),uPar:n(new ge)},this.scene.add(Ot(new Ee({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:V1,uniforms:this.U,depthTest:!1,depthWrite:!1})));let s=ht(83);this.sw=[];let r=wr,o=gn/2,a=-1;for(;r<Hs-.08;){let l;do l=Math.floor(s()*11);while(l===a||l===0);a=l,this.sw.push([r,l]),r>84&&(o*=1.4),r+=o}this.sw.push([Hs,tf])}update(e){let t=this.U;t.uT.value=e,t.uAspect.value=this.ctx.aspect;let n=0;for(;n<this.sw.length-1&&this.sw[n+1][0]<=e;)n++;let[s,r]=this.sw[n];t.uCell.value=r,t.uPrev.value=n>0?this.sw[n-1][1]:r,t.uRoll.value=e>=s?1-J.out(Qe((e-s)/(e>84?.2:.1))):0,t.uWeave.value=1+2*Z(84,84.9,e)-2.5*Z(84.95,85.3,e);let o=e-wr,a=6.5,l=Math.max(0,Math.min(e,Hs)-84.3);t.uReel.value=a*(Math.min(e,Hs)-wr)-a/(2*(Hs-84.3))*l*l,t.uHeat.value=Z(Hs,85.2,e)*(1-Z(85.6,86,e)),t.uBurn.value=J.in(Q(e,85.05,86.35)),t.uGold.value=J.inOut(Q(e,86,87.1));let c=Ve.beatPulse(e,5),h=Ve.beatPulse(e-.16,7)*.6;t.uBeat.value=Z(86.6,87.2,e)*Math.max(c,h),t.uLamp.value=1+.25*Z(85,86.3,e)*(1-Z(86.4,87.2,e)),t.uZoom.value=oe(1,2.3,J.inOut(Q(e,84.5,89.3))),t.uPar.value.set(.012*Math.sin(o*.9),.006*Math.sin(o*.7+1)),t.uFade.value=Z(wr-.05,wr+.2,e)}post(e){let t=Z(85,86.3,e)*(1-Z(86.5,87.5,e)),n=Z(86.2,87.4,e);return{tint:[1.1,.96,.82],sat:1,bloom:.8+.25*t+.2*n,bloomThr:.65,vig:1,grain:.1,scratch:.6*(1-n),weave:.4*(1-n),flicker:.06*(1-n),leak:.15*n,dust:.4,dustCol:[1,.8,.55],ca:.4,exposure:1+.05*t}}};var ma=89.26,nf=97.6,Vs=91.15,fh=93.5,ga=93.57,Rt=95.57,G1=5.4,sf=.42,ph={u:.37,v:.415,d:.31,h:.13},W1={u:.86,v:-.3,d:.97,h:1.02},X1="uniform float uLamp;",q1=`
  // stars appear in the deepening sky
  if (d < 0.06 && uv.y > 0.7) {
    vec2 g = uv * vec2(uImgAspect, 1.0) * 150.0, gi = floor(g); float h = hash12(gi);
    if (h > 0.982) col += vec3(0.8, 0.85, 1.0) * smoothstep(0.22, 0.0, length(fract(g) - hash22(gi))) *
      (0.4 + 0.6 * sin(uT * (2.0 + h * 5.0) + h * 40.0)) * smoothstep(0.7, 0.95, uv.y) * 0.9;
  }
  // shelter fluorescent: the pool of light breathes with the tube
  float lm = exp(-length((uv - vec2(0.33, 0.55)) * vec2(1.4, 2.4)) * 4.0) * step(0.15, d);
  col *= mix(1.0, 0.35 + 0.65 * uLamp, lm);
  col += vec3(0.85, 1.0, 0.95) * exp(-length((uv - vec2(0.365, 0.618)) * vec2(3.0, 18.0)) * 6.0) * 0.5 * uLamp;
  // vending machine hum, street lamp
  col += vec3(0.35, 0.55, 0.9) * exp(-length((uv - vec2(0.5, 0.49)) * vec2(3.0, 1.6)) * 14.0) * (0.12 + 0.05 * sin(uT * 3.0));
  col += vec3(1.0, 0.8, 0.5) * exp(-length((uv - vec2(0.9, 0.73)) * vec2(1.0, 1.0)) * 40.0) * 0.4;
  return col;
`,Y1=`
uniform vec3 uCam; uniform vec2 uPar; uniform float uDolly, uAspect, uImgAspect, uHead, uT; varying vec2 vUv;
${He}
const float L = ${G1.toFixed(2)}, CAR = 1.8;
// train colour/alpha at image uv (v down). premultiplied rgb in .rgb, coverage in .a; w = window light only
vec4 train(vec2 iu, out float wl){
  wl = 0.0;
  float x = uHead - iu.x, y = (iu.y - 0.39) / 0.365;
  if (x < 0.0 || x > L || y < 0.0 || y > 1.0) return vec4(0.0);
  if (x < 0.07 && y < 0.14 * (1.0 - x / 0.07)) return vec4(0.0);             // slanted nose
  float cx = mod(x, CAR), ci = floor(x / CAR);
  if (cx > CAR - 0.06) return (y > 0.14 && y < 0.84 && abs(cx - CAR + 0.03) < 0.015) ? vec4(vec3(0.02), 1.0) : vec4(0.0);
  // stainless body reflecting dusk: violet above, orange low; ribs; orange line; dark skirt
  vec3 body = mix(vec3(0.3, 0.26, 0.45), vec3(0.42, 0.3, 0.28), y) * (0.92 + 0.08 * sin(y * 90.0));
  body = mix(body, vec3(0.9, 0.42, 0.08), step(0.64, y) * step(y, 0.69));
  body = mix(body, vec3(0.03, 0.03, 0.04), step(0.86, y));
  if (y > 0.88) { float wx = mod(cx, 0.9) - 0.3; body += vec3(1.0, 0.6, 0.3) * step(0.985, hash12(vec2(floor(uT * 30.0), ci))) * exp(-abs(wx) * 40.0); }
  float roof = step(y, 0.06); body = mix(body, vec3(0.08, 0.08, 0.1), roof);
  // doors and windows
  float dx = mod(cx + 0.3, 0.45) - 0.225;                                     // 4 doors per car
  float door = step(abs(dx), 0.07), win;
  if (door > 0.5) { body *= 0.8; win = step(abs(dx), 0.04) * step(0.26, y) * step(y, 0.5); body *= 1.0 - 0.6 * step(abs(abs(dx) - 0.07), 0.004); }
  else { float wx = mod(dx + 0.225, 0.075); win = step(0.26, y) * step(y, 0.52) * step(0.01, wx); }
  if (x < 0.07) { win = step(0.22, y) * step(y, 0.46) * step(0.012, x); body = mix(body, vec3(0.05), 0.5); }
  vec3 lit = vec3(1.0, 0.93, 0.78) * (0.95 + 0.2 * hash12(vec2(ci, 3.0)));
  // interior: straps, seat backs, a few passengers
  float strap = step(length(vec2(mod(x, 0.05) - 0.025, (y - 0.3) * 0.5)), 0.006);
  float seat = step(0.44, y);
  float ph = hash12(floor(vec2(x / 0.075, ci)));
  float pas = step(0.8, ph) * step(length(vec2((mod(x, 0.075) - 0.037) * 1.2, y - 0.4)), 0.022 + 0.02 * step(0.43, y));
  float solid = max(strap, max(seat * 0.85, pas));
  vec3 wcol = lit * (1.0 - solid) + vec3(0.04, 0.035, 0.03) * solid;
  float wa = mix(0.42, 1.0, solid);
  wl = win * (1.0 - solid);
  vec3 headl = x < 0.02 && y > 0.74 && y < 0.8 ? vec3(6.0, 5.5, 4.5) : vec3(0.0);
  return win > 0.5 ? vec4(wcol * wa, wa) : vec4(body + headl, 1.0);
}
void main(){
  vec2 s = vUv - 0.5; float ra = uAspect / uImgAspect; vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  vec2 base = 0.5 + s * sc / uCam.z + uCam.xy;
  vec2 uv = base - uPar * (${sf} - 0.5); uv = 0.5 + uCam.xy + (uv - 0.5 - uCam.xy) / (1.0 + uDolly * ${sf});
  vec2 iu = vec2(uv.x, 1.0 - uv.y);
  vec4 acc = vec4(0.0); float wl = 0.0, w;
  for (int i = 0; i < 7; i++) { acc += train(iu + vec2((float(i) / 6.0 - 0.5) * 0.06, 0.0), w); }
  acc /= 7.0;
  vec3 add = vec3(0.0);
  // headlight: glow ahead of the nose + light racing along the rails
  vec2 hp = vec2(uHead - 0.01, 0.68); vec2 dh = (iu - hp) * vec2(uImgAspect, 1.0);
  add += vec3(1.0, 0.92, 0.75) * (exp(-length(dh) * 16.0) * 0.8 + exp(-length(dh * vec2(0.5, 8.0)) * 5.0) * 0.3) * step(-0.2, uHead) * step(uHead, L + 1.5);
  float rail = step(0.71, iu.y) * step(iu.y, 0.79) * smoothstep(0.8, 0.0, iu.x - uHead) * step(uHead, iu.x);
  add += vec3(1.0, 0.85, 0.6) * rail * 0.25 * step(0.0, uHead);
  // wet near platform mirrors the lit windows
  if (iu.y > 0.82) {
    float my = 0.745 - (iu.y - 0.82) * 1.6; float rw = 0.0;
    for (int i = 0; i < 4; i++) { train(vec2(iu.x + (float(i) / 3.0 - 0.5) * 0.06 + (vnoise(iu * vec2(8.0, 60.0)) - 0.5) * 0.02, my), w); rw += w; }
    add += vec3(1.0, 0.9, 0.7) * rw * 0.25 * 0.35 * smoothstep(1.0, 0.84, iu.y);
  }
  gl_FragColor = vec4(acc.rgb + add, acc.a);
}`,$1="attribute float aV, aS; varying float vV, vS; void main(){ vV = aV; vS = aS; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Z1=`uniform float uGrow, uA, uT, uTaut, uPulse; varying float vV, vS;
void main(){
  if (vS > uGrow) discard;
  float core = exp(-vV * vV * 60.0), glow = exp(-vV * vV * 6.0) * 0.35;
  float wave = 0.5 + 0.5 * sin(vS * 18.0 - uT * 7.0);
  vec3 c = vec3(1.0, 0.06, 0.08) * (glow + core * (1.2 + 0.4 * wave * uPulse)) + vec3(1.0, 0.6, 0.6) * core * (0.25 + 0.8 * uTaut);
  c += vec3(1.0, 0.7, 0.6) * exp(-(uGrow - vS) * 60.0) * core * 3.0 * step(uGrow, 0.999);
  gl_FragColor = vec4(c * uA, 1.0);
}`,K1="attribute float aL; uniform float uPx; varying float vL; void main(){ vL = aL; gl_PointSize = uPx * (0.4 + aL); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",J1="varying float vL; void main(){ float r = length(gl_PointCoord - 0.5); gl_FragColor = vec4(vec3(1.0, 0.45, 0.3) * smoothstep(0.5, 0.0, r) * vL * 2.0, 1.0); }",oi=90,mh=70;function rf(i,e){let t=new Je,n=(oi+1)*2,s=new Float32Array(n),r=new Float32Array(n),o=[];for(let a=0;a<=oi;a++)s[a*2]=-1,s[a*2+1]=1,r[a*2]=r[a*2+1]=oe(i,e,a/oi);for(let a=0;a<oi;a++){let l=a*2;o.push(l,l+1,l+2,l+1,l+3,l+2)}return t.setAttribute("position",new Ce(new Float32Array(n*3),3)),t.setAttribute("aV",new Ce(s,1)),t.setAttribute("aS",new Ce(r,1)),t.setIndex(o),t}var va=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=l=>({value:l});this.M=bn(t.platform,t.platform_d,{head:X1,hook:q1,uniforms:{uLamp:n(1)}}),this.scene.add(Ot(this.M)),this.her=new de(Sr(t.cut_her,1),br(t.cut_her,{rim:.45,seed:1})),this.him=new de(Sr(t.cut_him,1),br(t.cut_him,{rim:.9,seed:4,wind:.4})),this.her.renderOrder=0,this.him.renderOrder=2,this.her.material.uniforms.uRim.value.set(1,.62,.42,.45),this.him.material.uniforms.uRim.value.set(1,.55,.35,.9),this.TU={uCam:this.M.uniforms.uCam,uPar:this.M.uniforms.uPar,uDolly:this.M.uniforms.uDolly,uAspect:n(16/9),uImgAspect:n(t.platform.w/t.platform.h),uHead:n(-9),uT:n(0)};let s=new Ee({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Y1,uniforms:this.TU,transparent:!0,depthTest:!1,depthWrite:!1,blending:Dc,blendSrc:Nc,blendDst:lr});this.train=Ot(s,1),this.HU={uGrow:n(0),uA:n(0),uT:n(0),uTaut:n(0),uPulse:n(0)};let r=new Ee({vertexShader:$1,fragmentShader:Z1,uniforms:this.HU,transparent:!0,depthTest:!1,depthWrite:!1,blending:it,side:Ze});this.th=[new de(rf(0,.5),r),new de(rf(.5,1),r)],this.th.forEach(l=>{l.renderOrder=3,l.frustumCulled=!1});let o=new Je;o.setAttribute("position",new Ce(new Float32Array(mh*3),3)),o.setAttribute("aL",new Ce(new Float32Array(mh),1)),this.SU={uPx:n(6)},this.sparks=new It(o,new Ee({vertexShader:K1,fragmentShader:J1,uniforms:this.SU,transparent:!0,depthTest:!1,depthWrite:!1,blending:it})),this.sparks.renderOrder=4,this.sparks.frustumCulled=!1;let a=ht(95);this.sp=Array.from({length:mh},()=>[(a()-.5)*2.2,a()*1.4-.2,.4+a()*.8]),this.scene.add(this.her,this.train,this.him,...this.th,this.sparks)}toWorld(e,t,n){let s=this.M.uniforms,r=s.uCam.value,o=s.uPar.value,a=s.uDolly.value,l=this.ctx.aspect,c=l/s.uImgAspect.value,h=c>1?1:c,d=c>1?1/c:1,u=1+a*n,m=.5+r.x+(e-.5-r.x)*u+o.x*(n-.5),g=.5+r.y+(t-.5-r.y)*u+o.y*(n-.5);return[(m-.5-r.x)*r.z/h*2*l,(g-.5-r.y)*r.z/d*2,u*r.z/d*2]}place(e,t,n){let[s,r,o]=this.toWorld(t.u,t.v,t.d),a=t.h*o;return e.position.set(s,r,0),e.scale.set(a,a,1),(l,c)=>new ge(s+l*a*n.w/n.h,r+c*a)}update(e){let t=this.M.uniforms,n=this.ctx.aspect,s=e>=Rt;t.uT.value=e,t.uAspect.value=n,this.TU.uAspect.value=n,this.TU.uT.value=e;let r=Z(Vs+.15,Vs+.6,e)*(1-Z(fh-.2,fh+1.4,e)),o=oe(-.03,.025,J.inOut(Q(e,ma,Rt)))-.03*J.inOut(Q(e,Rt,nf)),a=.0025*r*Math.sin(e*57),l=1.05+.05*Q(e,ma,Rt)+.1*J.in(Q(e,Rt,nf));t.uCam.value.set(o,.015+a,l),t.uPar.value.set(-1.3*o,0),t.uDolly.value=.03;let c=(f,p)=>e>f&&e<f+p?.25+.3*Math.sin(e*90)**2:1,h=c(90.35,.18)*c(94.1,.1)*c(94.35,.06);s&&(h=e<Rt+.5?Math.sin(e*70)>.3?.9:.15:.12),t.uLamp.value=h,t.uGain.value=Z(ma-.1,ma+.3,e),this.TU.uHead.value=e<Vs?-.25-(Vs-e)*2.8:oe(-.25,6.2,(e-Vs)/(fh-Vs));let d=this.her.material.uniforms,u=this.him.material.uniforms;d.uT.value=e,u.uT.value=e,d.uWind.value=.6+3.2*r,u.uWind.value=.3+1.2*r;let m=.55+.35*h;d.uTint.value.set(.82*m,.86*m,1*m),u.uTint.value.set(.07,.065,.1),d.uAlpha.value=u.uAlpha.value=t.uGain.value;let g=this.place(this.her,{u:ph.u,v:ph.v,d:.27,h:ph.h},this.ctx.img.cut_her),x=this.place(this.him,W1,this.ctx.img.cut_him);this.thread(e,x(-.3,.545),g(-.17,.53))}thread(e,t,n){let s=this.HU,r=J.out(Q(e,Rt,Rt+.9));s.uT.value=e,s.uGrow.value=J.inOut(Q(e,ga,ga+1.2)),s.uA.value=Z(ga-.05,ga+.2,e)*(1-Z(Rt+.3,Rt+1.5,e));let o=J.in(Q(e,94.5,Rt));s.uTaut.value=o+(e>=Rt?1.5*Math.exp(-(e-Rt)*6):0),s.uPulse.value=1-o;let a=oe(.3,.02,o),l=.035*(1+o*.3),c=f=>{let p=4*f*(1-f);return[oe(t.x,n.x,f)+.05*Math.sin(Math.PI*f)*Math.sin(e*1.3+f*3)*(1-o),oe(t.y,n.y,f)-a*p+o*o*.012*Math.sin(f*40+e*95)*p]};this.th.forEach((f,p)=>{let T=f.geometry.attributes.position.array,M=[];for(let S=0;S<=oi;S++){let w=p===0?S/oi:1-S/oi,[A,R]=c(p===0?w*.5*(1-.85*r):1-w*.5*(1-.85*r));e>=Rt&&(R-=.4*r*w*w,A+=(p?1:-1)*.12*r*Math.sin(w*7)*w),M.push([A,R])}for(let S=0;S<=oi;S++){let w=M[Math.max(0,S-1)],A=M[Math.min(oi,S+1)],R=A[0]-w[0],C=A[1]-w[1],k=Math.hypot(R,C)||1;R/=k,C/=k;let[v,_]=M[S];T.set([v-C*l,_+R*l,0,v+C*l,_-R*l,0],S*6)}f.geometry.attributes.position.needsUpdate=!0});let h=this.sparks.geometry,d=h.attributes.position.array,u=h.attributes.aL.array,m=e-Rt,[g,x]=c(.5);this.SU.uPx.value=5*this.ctx.h/720,this.sp.forEach(([f,p,T],M)=>{let S=m>0?m:-1;d.set([g+f*S*.9,x+p*S*.9-1.2*S*S,0],M*3),u[M]=S>0?Math.max(0,1-S/T):0}),h.attributes.position.needsUpdate=!0,h.attributes.aL.needsUpdate=!0}post(e){let t=Z(Rt,Rt+1,e);return{letter:1,tint:[.92,.93,1.08],sat:.95-.35*t,contrast:1.05,bloom:.75,bloomThr:.7,vig:.55,grain:.06,ca:.4+.8*t,fadeW:e>=Rt?.35*Math.exp(-(e-Rt)*7):0,dust:.2,dustCol:[.8,.85,1]}}};var xa=97.6,of=112.6,Mt=103.72,gh=98.2,vh=[.8,.515],ai=110,af=2600,Q1="uniform float uFire, uFireR, uKiss, uBeat; uniform vec2 uKP;",j1=`
  // heat shimmer over burning cloud tops
  float hs = uFire * smoothstep(uFireR, uFireR - 0.3, length((uv - uKP) * vec2(uImgAspect, 1.0))) * 0.004;
  return uv + vec2(vnoise(uv * 30.0 + vec2(0.0, uT * 2.0)) - 0.5, vnoise(uv * 30.0 - vec2(uT * 2.0, 0.0)) - 0.5) * hs;`,e_=`
  vec2 q = (uv - uKP) * vec2(uImgAspect, 1.0); float r = length(q);
  // sun: breathes with the beat, brightens toward the kiss
  col += vec3(1.0, 0.7, 0.4) * exp(-r * 9.0) * (0.2 + 0.25 * uBeat + 0.35 * uKiss);
  // fire front: noisy radius spreading from the kiss point, flames boil on the lit side of each cloud
  float n = fbm3(vec3(uv * vec2(uImgAspect, 1.0) * 5.0, uT * 0.35)), front = uFireR + (n - 0.5) * 0.35;
  float burn = smoothstep(front, front - 0.12, r) * uFire;
  float rim = smoothstep(0.05, 0.0, abs(r - front)) * uFire * step(0.02, uFireR);
  float lum = dot(col, vec3(0.3, 0.55, 0.15));
  vec3 fire = mix(vec3(0.16, 0.012, 0.02), vec3(1.25, 0.42, 0.08), smoothstep(0.1, 0.65, lum));
  fire += vec3(1.3, 0.55, 0.12) * pow(fbm3(vec3(uv * 14.0, uT * 1.2) - vec3(0.0, uT * 0.6, 0.0)), 3.0) * 2.2 * smoothstep(0.05, 0.3, d);
  fire *= 0.85 + 0.3 * uBeat;
  col = mix(col, fire, burn);
  col += vec3(1.1, 0.35, 0.05) * rim * (0.3 + n) * 0.6;
  // the sky above the fire turns to smoke-red
  col = mix(col, col * vec3(0.7, 0.25, 0.22) + vec3(0.06, 0.0, 0.01), burn * smoothstep(0.1, 0.0, d) * 0.6);
  // shock ring
  float ring = uKiss * exp(-pow((r - (1.0 - uKiss) * 1.4) * 30.0, 2.0));
  col += vec3(1.2, 0.7, 0.45) * ring * 0.45;
  return col;`,t_="attribute float aV, aS; varying float vV, vS; void main(){ vV = aV; vS = aS; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",n_=`uniform vec3 uCol; uniform float uA; varying float vV, vS;
void main(){
  float f = pow(1.0 - vS, 1.6);
  float core = exp(-vV * vV * 18.0), glow = exp(-vV * vV * 3.0) * 0.5;
  gl_FragColor = vec4((uCol * (glow + core) + vec3(1.0) * core * core * 0.25 * f) * f * uA, 1.0);
}`,i_=`
attribute vec4 aR; uniform float uT, uAspect, uPx, uDen, uSpd, uFire;
varying float vB, vH;
float h1(float n){ return fract(sin(n * 91.3) * 43758.5); }
void main(){
  float z = mix(0.35, 1.6, aR.z), up = uSpd * (0.25 + 0.3 * aR.w) * z;
  float y = mod(aR.y * 2.6 + uT * up, 2.6) - 1.3;
  float x = (aR.x * 2.0 - 1.0) * (uAspect + 0.3) + 0.06 * sin(uT * (0.8 + aR.w) + aR.x * 40.0) * z + uT * 0.02 * z;
  x = mod(x + uAspect + 0.3, 2.0 * (uAspect + 0.3)) - uAspect - 0.3;
  float flick = 0.55 + 0.45 * sin(uT * (6.0 + 9.0 * aR.w) + aR.x * 70.0);
  vB = step(aR.w, uDen) * flick * mix(0.5, 1.0, aR.z); vH = aR.z;
  gl_PointSize = uPx * z * z * (0.7 + 0.6 * h1(aR.x * 13.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, 0.0, 1.0);
}`,s_=`uniform float uFire; varying float vB, vH;
void main(){ float r = length(gl_PointCoord - 0.5); if (vB < 0.01) discard;
  vec3 c = mix(vec3(1.0, 0.75, 0.4), mix(vec3(1.0, 0.3, 0.05), vec3(1.0, 0.65, 0.25), vH), uFire);
  gl_FragColor = vec4(c * smoothstep(0.5, 0.05, r) * vB * (0.6 + 0.8 * smoothstep(0.2, 0.0, r)), 1.0); }`;function r_(){let i=new Je,e=(ai+1)*2,t=new Float32Array(e),n=new Float32Array(e),s=[];for(let r=0;r<=ai;r++)t[r*2]=-1,t[r*2+1]=1,n[r*2]=n[r*2+1]=r/ai;for(let r=0;r<ai;r++){let o=r*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}return i.setAttribute("position",new Ce(new Float32Array(e*3),3)),i.setAttribute("aV",new Ce(t,1)),i.setAttribute("aS",new Ce(n,1)),i.setIndex(s),i}var _a=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=l=>({value:l});this.M=bn(t.clouds,t.clouds_d,{head:Q1,hook:e_,warp:j1,uniforms:{uFire:n(0),uFireR:n(0),uKiss:n(0),uBeat:n(0),uKP:n(new ge(...vh))}}),this.scene.add(Ot(this.M));let s={transparent:!0,depthTest:!1,depthWrite:!1,blending:it};this.cols=[new Me(1,.62,.16),new Me(1,.08,.12)],this.tr=this.cols.map(l=>{let c=new de(r_(),new Ee({vertexShader:t_,fragmentShader:n_,uniforms:{uCol:n(new I(l.r,l.g,l.b)),uA:n(0)},side:Ze,...s}));return c.frustumCulled=!1,c.renderOrder=2,c});let r=l=>{let c=new de(new ze(1,1),new yt({map:e.shared.glow,color:l,...s}));return c.renderOrder=3,c};this.heads=this.cols.map(l=>r(l)),this.flash=r(new Me(1,.8,.6));let o=new Float32Array(af*4);for(let l=0;l<o.length;l++)o[l]=Math.random();let a=new Je;a.setAttribute("position",new Ce(new Float32Array(af*3),3)),a.setAttribute("aR",new Ce(o,4)),this.EU={uT:n(0),uAspect:n(16/9),uPx:n(6),uDen:n(0),uSpd:n(.1),uFire:n(0)},this.emb=new It(a,new Ee({vertexShader:i_,fragmentShader:s_,uniforms:this.EU,...s})),this.emb.frustumCulled=!1,this.emb.renderOrder=4,this.scene.add(...this.tr,...this.heads,this.flash,this.emb)}toWorld(e,t,n){let s=this.M.uniforms,r=s.uCam.value,o=s.uPar.value,a=s.uDolly.value,l=this.ctx.aspect,c=l/s.uImgAspect.value,h=c>1?1:c,d=c>1?1/c:1,u=1+a*n,m=.5+r.x+(e-.5-r.x)*u+o.x*(n-.5),g=.5+r.y+(t-.5-r.y)*u+o.y*(n-.5);return[(m-.5-r.x)*r.z/h*2*l,(g-.5-r.y)*r.z/d*2]}head(e,t,n){let s=Q(t,gh-.4,Mt),r=[-.25,.05],o=oe(r[0],n[0],J.inOut(s)),a=oe(r[1],n[1],J.inOut(s)),l=1.25*Math.pow(1-s,.9),c=2*Math.PI*(.15+3.4*Math.pow(s,1.25))*(e?1.08:1)+e*2.2,h=l*Math.cos(c)*1.25,d=l*Math.sin(c)*.42,u=e?-.42:.3,m=Math.cos(u),g=Math.sin(u);return[o+h*m-d*g,a+h*g+d*m,1+.35*Math.sin(c)]}update(e){let t=this.M.uniforms,n=this.ctx.aspect,s=e>=Mt;t.uT.value=e,t.uAspect.value=n;let r=J.inOut(Q(e,Mt-.3,of));t.uCam.value.set(oe(0,.1,r)+.006*Math.sin(e*.5),oe(.02,.01,r),oe(1,1.1,Q(e,xa,Mt))+.3*r),t.uPar.value.set(.02*Math.sin(e*.37),.012*Math.sin(e*.29+1)),t.uDolly.value=.03+.12*Q(e,xa,of),t.uGain.value=Z(xa-.1,xa+.4,e);let o=Ve.beatPulse(e,4);t.uBeat.value=o,t.uKiss.value=s?1-J.out(Q(e,Mt,Mt+1.6)):0,t.uFire.value=Z(Mt,Mt+.3,e),t.uFireR.value=s?1.9*J.out(Q(e,Mt,Mt+5)):0;let a=this.toWorld(vh[0],vh[1],.05),l=this.ctx.h/720,c=Z(gh-.4,gh+.5,e),h=1-Z(Mt,Mt+1,e);this.tr.forEach((m,g)=>{m.material.uniforms.uA.value=c*h;let x=m.geometry.attributes.position.array,f=[];for(let w=0;w<=ai;w++)f.push(this.head(g,e-w/ai*1.3,a));for(let w=0;w<=ai;w++){let A=f[Math.max(0,w-1)],R=f[Math.min(ai,w+1)],C=R[0]-A[0],k=R[1]-A[1],v=Math.hypot(C,k)||1;C/=v,k/=v;let[_,D,F]=f[w],H=.045*F*(1-.8*w/ai);x.set([_-k*H,D+C*H,0,_+k*H,D-C*H,0],w*6)}m.geometry.attributes.position.needsUpdate=!0;let[p,T,M]=f[0],S=(.22+.06*o)*M;this.heads[g].position.set(p,T,0),this.heads[g].scale.set(S,S,1),this.heads[g].material.opacity=c*h});let d=s?Math.exp(-(e-Mt)*2.2):Z(Mt-.8,Mt,e)*.4;this.flash.position.set(a[0],a[1],0),this.flash.scale.setScalar(.2+.9*d+.2*t.uFire.value),this.flash.material.opacity=.12*t.uFire.value+.45*d;let u=this.EU;u.uT.value=e,u.uAspect.value=n,u.uPx.value=6*l,u.uFire.value=t.uFire.value,u.uDen.value=.06+.55*Z(Mt,Mt+2.5,e)+.35*Z(107.5,110.5,e),u.uSpd.value=.1+.25*Z(Mt,Mt+1.5,e)+.25*Z(108,112,e)}post(e){let t=Z(Mt,Mt+1.2,e),n=e>=Mt?Math.exp(-(e-Mt)*4):0;return{tint:[oe(1,1.1,t),oe(.96,.9,t),oe(1.05,.8,t)],sat:1+.1*t,contrast:1.05,bloom:.7+.35*t+.3*n,bloomThr:oe(.75,.6,t),vig:.5+.2*t,leak:.2*t,grain:.06,fadeW:.2*n,dust:.25,dustCol:[1,.7,.45],ca:.4+.6*n}}};var ya=136.17,li=141.17,Gs=139.4,lf=149.03,Ma=72,ba=36,Ws=[[144.74,.42,"\u5FD8\u308C\u3089\u308C\u306A\u3044","THE ONE I CAN\u2019T FORGET"],[146.88,.42,"\u6700\u5F8C\u306E\u30AD\u30B9","ONE LAST KISS"]],o_="uniform float uTun, uLampS, uLampP, uKick;",a_=`
  vec2 iu = vec2(uv.x, 1.0 - uv.y);
  float glass = smoothstep(0.25, 0.28, iu.x) * smoothstep(0.03, 0.06, iu.y) * smoothstep(0.93, 0.9, iu.y);
  // city lights streaking past (scenery moves left)
  vec3 st = vec3(0.0);
  for (int k = 0; k < 3; k++) {
    float rows = 70.0 + float(k) * 40.0, row = floor(iu.y * rows), h = hash12(vec2(row, float(k)));
    float spd = 1.2 + 2.5 * h, x = iu.x + uT * spd + h * 13.0, cell = floor(x * 2.0);
    float hc = hash12(vec2(cell, row + float(k) * 91.0)); if (hc < 0.7) continue;
    float fx = fract(x * 2.0), len = 0.15 + 0.5 * hash12(vec2(cell, row + 7.0));
    float s = smoothstep(0.0, 0.03, fx) * smoothstep(len, len * 0.4, fx) * exp(-pow((fract(iu.y * rows) - 0.5) * 3.2, 2.0));
    vec3 c = hc > 0.9 ? vec3(0.5, 0.9, 1.0) : hc > 0.78 ? vec3(1.0, 0.95, 0.85) : vec3(1.0, 0.55, 0.2);
    st += c * s * (0.5 + 0.5 * hash12(vec2(row, 3.0))) * smoothstep(0.35, 0.6, iu.y) * smoothstep(0.95, 0.75, iu.y);
  }
  col = mix(col, col * vec3(0.25, 0.2, 0.2), glass * uTun);                            // tunnel: city goes dark
  col += st * glass * (1.0 - uTun) * 0.8;
  // sodium lamps sweep the carriage right -> left
  float lx = fract(iu.x * 1.4 + uLampP), lamp = exp(-pow((lx - 0.5) * 18.0, 2.0)) * uTun;
  col += vec3(1.0, 0.48, 0.12) * lamp * (0.25 + 0.55 * glass) * 0.7 + vec3(1.0, 0.6, 0.3) * col * lamp * 1.2;
  col *= 1.0 + 0.18 * uKick;
  return col;`,l_=`
uniform float uZ, uRoll, uKick, uExit, uAspect, uFov, uT; varying vec2 vUv;
${He}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0 * tan(uFov * 0.5);
  float cr = cos(uRoll), sr = sin(uRoll); p = mat2(cr, sr, -sr, cr) * p;
  float r = length(p), z = 1.0 / max(r, 1e-3), a = atan(p.y, p.x), wz = z + uZ;
  float fog = exp(-z * 0.09);
  vec3 col = vec3(0.012, 0.014, 0.03) * (0.4 + 0.6 * fog);
  float strip = pow(abs(cos(a * 6.0)), 400.0) * fog * (0.6 + 0.4 * sin(wz * 0.8));
  col += vec3(0.55, 0.75, 1.0) * strip * 0.35;
  float ring = exp(-pow((fract(wz / 4.0) - 0.5) * 30.0, 2.0)) * fog;
  col += vec3(1.0, 0.62, 0.28) * ring * (0.25 + 1.3 * uKick);
  vec2 hx = vec2(a * 3.0, wz * 0.9); float hc = hash12(floor(hx));
  col += vec3(0.4, 0.5, 0.9) * step(0.93, hc) * fog * 0.12 * (0.5 + 0.5 * sin(uT * 3.0 + hc * 40.0));
  col += vec3(1.0, 0.95, 0.9) * (exp(-r * 18.0) * 0.4 + uExit * exp(-r * mix(10.0, 1.2, uExit)) * 3.0);
  gl_FragColor = vec4(col, 1.0);
}`,c_=`
attribute vec4 aC; uniform float uZ, uRoll, uT; varying vec2 vUv; varying float vF, vCell, vRing;
void main(){
  float dz = mod(aC.y - uZ, ${ba}.0), z = -dz;
  float ang = aC.x + aC.w * 0.3 * sin(uT * 0.3 + aC.w * 6.0);
  vec3 N = -vec3(cos(ang), sin(ang), 0.0), T = vec3(-sin(ang), cos(ang), 0.0);
  vec3 B = normalize(N * 0.94 + vec3(0.0, 0.0, 1.0) * 0.35);
  float rot = (aC.w - 0.5) * 0.5; vec2 q = position.xy * vec2(0.34, 0.41);
  q = mat2(cos(rot), sin(rot), -sin(rot), cos(rot)) * q;
  vec3 wp = -N * 0.9 + vec3(0.0, 0.0, z) + T * q.x + B * (q.y + 0.2);
  float cr = cos(uRoll), sr = sin(uRoll); wp.xy = mat2(cr, -sr, sr, cr) * wp.xy;
  vUv = uv; vCell = aC.z; vF = smoothstep(${ba}.0, ${ba-12}.0, dz) * smoothstep(0.2, 1.5, dz);
  vRing = exp(-pow((fract((dz + uZ) / 4.0) - 0.5) * 6.0, 2.0));
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,h_=`
uniform sampler2D uAtlas; uniform float uKick; varying vec2 vUv; varying float vF, vCell, vRing;
void main(){
  vec2 ph = (vUv - vec2(0.06, 0.2)) / vec2(0.88, 0.74);
  vec3 c = vec3(0.93, 0.9, 0.84);
  if (ph.x > 0.0 && ph.x < 1.0 && ph.y > 0.0 && ph.y < 1.0)
    c = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + ph * vec2(0.25, 1.0 / 3.0)).rgb;
  c *= 0.55 + 0.35 * vRing + 0.5 * uKick;
  gl_FragColor = vec4(c * vF, 1.0);
}`,u_=`uniform sampler2D uA, uB; uniform float uI, uAl, uInv, uAspect, uJit; varying vec2 vUv;
void main(){
  vec2 uv = 0.5 + (vUv - 0.5) * vec2(uAspect / (16.0 / 9.0), 1.0) / (1.0 + uJit);
  float m = (uI < 0.5 ? texture2D(uA, uv) : texture2D(uB, uv)).r * step(0.0, uv.x) * step(uv.x, 1.0);
  vec3 c = mix(vec3(m) * vec3(1.0, 0.97, 0.94), vec3(1.0 - m) * vec3(0.9, 0.05, 0.08) + vec3(m * 0.02), uInv);
  gl_FragColor = vec4(c, uAl);
}`;function cf(i,e){let s=xn(1920,1080),r=s.getContext("2d");return r.fillStyle="#000",r.fillRect(0,0,1920,1080),r.fillStyle="#fff",r.save(),r.translate(250,520),r.scale(.84,1),r.font=`500 250px ${un.mincho}`,r.textBaseline="alphabetic",r.fillText(i,0,0),r.restore(),r.fillRect(256,590,1080,3),r.font=`500 58px ${un.serif}`,"letterSpacing"in r&&(r.letterSpacing="14px"),r.fillText(e,256,680),r.font=`400 30px ${un.serif}`,"letterSpacing"in r&&(r.letterSpacing="8px"),r.fillText("ONE LAST KISS",1440,960),Pn(s,{linear:!0})}var Sa=class extends Xe{constructor(e){super(e,{fov:72,near:.05,far:60});let t=e.img,n=d=>({value:d});this.sA=new Nn,this.W=bn(t.trainwin,null,{head:o_,hook:a_,uniforms:{uTun:n(0),uLampS:n(0),uLampP:n(0),uKick:n(0)}}),this.sA.add(Ot(this.W)),this.TU={uZ:n(0),uRoll:n(0),uKick:n(0),uExit:n(0),uAspect:n(16/9),uFov:n(72*Math.PI/180),uT:n(0)};let s="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";this.scene.add(Ot(new Ee({vertexShader:s,fragmentShader:l_,uniforms:this.TU,depthTest:!1,depthWrite:!1})));let r=new ze(1,1),o=new si;o.index=r.index,o.setAttribute("position",r.attributes.position),o.setAttribute("uv",r.attributes.uv);let a=ht(141),l=new Float32Array(Ma*4);for(let d=0;d<Ma;d++)l.set([d%6/6*Math.PI*2+(a()-.5)*.5+Math.floor(d/6)*.5,d/Ma*ba+a()*.3,Math.floor(a()*11),a()],d*4);o.setAttribute("aC",new Zt(l,4)),o.instanceCount=Ma,this.CU={uZ:this.TU.uZ,uRoll:this.TU.uRoll,uT:this.TU.uT,uKick:this.TU.uKick,uAtlas:n(e.shared.photos)};let c=new de(o,new Ee({vertexShader:c_,fragmentShader:h_,uniforms:this.CU,side:Ze}));c.frustumCulled=!1,this.scene.add(c),this.TT={uA:n(cf(Ws[0][2],Ws[0][3])),uB:n(cf(Ws[1][2],Ws[1][3])),uI:n(0),uAl:n(0),uInv:n(0),uAspect:n(16/9),uJit:n(0)};let h=Ot(new Ee({vertexShader:s,fragmentShader:u_,uniforms:this.TT,transparent:!0,depthTest:!1,depthWrite:!1}),50);this.scene.add(h),this.t=ya}update(e){this.t=e;let t=this.ctx.aspect,n=Qe(Math.max(Ve.get("kick",e)*1.2,Ve.beatPulse(e,7)*.5));if(e<li){let a=this.W.uniforms;a.uT.value=e,a.uAspect.value=t,a.uCam.value.set(.004*Math.sin(e*1.1),.003*Math.sin(e*8.5)*(1+Z(Gs,li,e)),1.04+.06*Q(e,ya,li)),a.uTun.value=Z(Gs-.08,Gs+.12,e);let l=Math.max(0,e-Gs);a.uLampP.value=1.6*l+.6*l*l,a.uKick.value=n,a.uGain.value=Z(ya-.1,ya+.3,e);return}let s=e-li,r=this.TU;r.uT.value=e,r.uAspect.value=t,r.uKick.value=n,r.uZ.value=4*s+.35*s*s+10*Math.pow(Q(e,147.4,lf),2),r.uRoll.value=.12*s+.08*Math.sin(s*.7),r.uExit.value=J.in(Q(e,147.2,lf));let o=this.TT;o.uAspect.value=t,o.uAl.value=0,Ws.forEach(([a,l],c)=>{e>=a&&e<a+l&&(o.uAl.value=1,o.uI.value=c,o.uInv.value=e>a+l-.1?1:0,o.uJit.value=e<a+.05?.06:.01*(e-a))})}render(e,t){e.setRenderTarget(t),e.setClearColor(this.clear,1),e.clear(),e.render(this.t<li?this.sA:this.scene,this.camera)}post(e){if(e<li){let s=e>=Gs?.5*Math.exp(-(e-Gs)*6):0;return{tint:[.95,.97,1.08],sat:1.05,bloom:.75,bloomThr:.7,vig:.5,grain:.07,ca:.5,fadeW:s+.9*Z(li-.18,li,e),dust:.15}}let t=Qe(Ve.get("kick",e)),n=Ws.some(([s,r])=>e>=s&&e<s+r);return{tint:[1,.98,1.03],sat:1.05,bloom:n?.3:.85+.4*t,bloomThr:.65,vig:n?0:.6,grain:n?.12:.07,ca:n?.2:.5+.9*t,fadeW:.8*Math.exp(-(e-li)*5),dust:n?0:.2,dustCol:[.8,.9,1]}}};var Er=149.03,Ar=166.17,Rr=159.6,d_=163.9,xh=163.7,hf=164.7,f_=.565,Ta=[.51,.73],p_=.21,Cr=.37,uf=.37,m_={h:.118,clip:.24},g_={h:.134,clip:.27},v_=`uniform vec4 uFeet; uniform vec3 uHand; uniform float uTrail, uRot;
const float HOR = ${f_}; const vec2 PC = vec2(${Ta[0]}, ${Ta[1]}); const float PR = ${p_};
float ring(vec2 uv, vec2 f){ float e = length((uv - f) * vec2(uImgAspect, 5.5)); return e; }`,x_=`
  float b = HOR - uv.y;
  if (b <= 0.0) return uv;
  // sea plane coordinates: ripples shrink toward the horizon
  vec2 P = vec2((uv.x - 0.5) * uImgAspect / b, 1.0 / b) * 0.15;
  float n1 = vnoise(P * vec2(2.5, 5.0) + vec2(uT * 0.12, uT * 0.35));
  float n2 = vnoise(P * vec2(6.0, 12.0) - vec2(uT * 0.2, -uT * 0.55));
  vec2 w = vec2(n1 - 0.5, (n2 - 0.5) * 0.6) * 0.01 * smoothstep(0.0, 0.04, b) * (0.35 + b * 2.2);
  for (int i = 0; i < 2; i++) {
    vec2 f = i == 0 ? uFeet.xy : uFeet.zw; float e = ring(uv, f);
    w += normalize((uv - f) * vec2(uImgAspect, 5.5) + 1e-5) * sin(e * 120.0 - uT * 4.0 + float(i) * 2.0) * exp(-e * 14.0) * 0.0016;
  }
  return uv + w;
`,__=`
  vec2 pq = (uv - PC) * vec2(uImgAspect, 1.0) / PR; float pr = length(pq);
  float lum = dot(col, vec3(0.3, 0.55, 0.15));
  if (uv.y > HOR) {
    if (pr < 1.0) {
      // weather drifts across the disc (sphere-mapped fbm shadows) + a breathing limb
      float z = sqrt(1.0 - pr * pr); vec2 sp = pq / (z + 0.35);
      float cs = fbm(sp * 2.2 + vec2(uT * 0.05, uT * 0.01));
      col *= mix(1.0, 0.72 + 0.56 * cs, 0.5 * smoothstep(1.0, 0.75, pr)) * 0.82;
      col *= 1.0 + 0.25 * smoothstep(0.8, 1.0, pr) * (0.5 + 0.5 * sin(uT * 0.9));
    } else if (d < 0.03) {
      // painted stars twinkle; long-exposure trails grow around a pole
      col *= mix(1.0, 0.5 + vnoise(uv * vec2(uImgAspect, 1.0) * 420.0 + uT * 1.7) * 1.1, smoothstep(0.12, 0.4, lum));
      vec2 pp = (uv - vec2(0.2, 1.15)) * vec2(uImgAspect, 1.0); float rr = length(pp) * 90.0, an = atan(pp.y, pp.x);
      float ri = floor(rr), hh = hash12(vec2(ri, 7.0));
      if (hh > 0.55 && pr > 1.06) {
        float len = uTrail * (0.08 + 0.3 * hash12(vec2(ri, 5.0)));
        float da = mod(uRot + hash12(vec2(ri, 3.0)) * 6.2832 - an, 6.2832);
        float line = smoothstep(0.16, 0.0, abs(fract(rr) - 0.5)) * step(da, len);
        col += vec3(0.75, 0.82, 1.0) * line * mix(1.0, 0.25, da / max(len, 1e-3)) * (0.1 + 0.3 * (hh - 0.55) / 0.45);
      }
    }
    // atmosphere halo
    float halo = exp(-max(pr - 1.0, 0.0) * 10.0) * smoothstep(0.94, 1.0, pr);
    col += mix(vec3(0.45, 0.65, 1.0), vec3(1.0, 0.3, 0.3), smoothstep(-0.3, -0.9, pq.y)) * halo * (0.28 + 0.12 * sin(uT * 0.9));
  } else {
    float b = HOR - uv.y;
    // glitter on the moon path
    float path = exp(-pow((uv.x - PC.x) / (0.03 + b * 0.35), 2.0));
    vec2 gg = vec2(uv.x * uImgAspect * 260.0, uv.y * 900.0 / (0.2 + b * 4.0));
    float sp = step(0.95, hash12(floor(gg) + floor(uT * 9.0) * 17.0)) * smoothstep(0.3, 0.75, lum);
    col += vec3(1.0, 0.92, 0.88) * sp * path * 1.2;
    // bright ripple crests round their feet
    for (int i = 0; i < 2; i++) {
      vec2 f = i == 0 ? uFeet.xy : uFeet.zw; float e = ring(uv, f);
      col += vec3(1.0, 0.75, 0.72) * pow(max(sin(e * 120.0 - uT * 4.0 + float(i) * 2.0), 0.0), 10.0) * exp(-e * 11.0) * 0.35 * smoothstep(0.0, 0.01, e);
    }
    // the born light's reflection streak
    col += vec3(1.0, 0.75, 0.5) * exp(-length((uv - uHand.xy) * vec2(uImgAspect * 40.0, 7.0))) * uHand.z;
    // horizon glow line
    col += vec3(1.0, 0.25, 0.2) * exp(-b * 90.0) * 0.12;
  }
  return col;
`,y_=`attribute vec4 aR; uniform float uT, uA, uPx, uAsp; varying vec3 vCol; varying float vA;
void main(){
  float y = fract(aR.y + uT * (0.006 + 0.014 * aR.z));
  vec3 p = vec3((aR.x * 2.0 - 1.0) * uAsp * 1.05 + 0.04 * sin(uT * 0.3 + aR.w * 6.0), y * 2.4 - 1.2, 0.0);
  vA = uA * smoothstep(0.0, 0.2, y) * smoothstep(1.0, 0.65, y) * (0.3 + 0.7 * aR.w) * 0.3 / (1.0 + aR.z * 2.5);
  vCol = mix(vec3(1.0, 0.12, 0.08), vec3(1.0, 0.55, 0.42), aR.w * aR.w);
  gl_PointSize = uPx * (3.0 + 26.0 * aR.z * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,df=170,wa=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=c=>({value:c});this.M=bn(t.redsea,t.redsea_d,{head:v_,warp:x_,hook:__,uniforms:{uFeet:n(new Ke),uHand:n(new I),uTrail:n(0),uRot:n(0)}}),this.scene.add(Ot(this.M));let s=(c,h,d)=>{let u=new de(Sr(c,1),br(c,{rim:.9,seed:h,wind:.5}));return u.material.side=Ze,u.renderOrder=d?0:1,u.frustumCulled=!1,u};this.her=s(t.cut_her_back,2,0),this.him=s(t.cut_him,5,0),this.herR=s(t.cut_her_back,2,1),this.himR=s(t.cut_him,5,1);let r={transparent:!0,depthTest:!1,depthWrite:!1,blending:it};this.spark=new de(new ze(1,1),new yt({map:e.shared.glow,color:new Me(1,.8,.55),...r})),this.halo=new de(new ze(1,1),new yt({map:e.shared.glow,color:new Me(1,.35,.25),...r})),this.spark.renderOrder=3,this.halo.renderOrder=3;let o=ht(149),a=new Float32Array(df*4);for(let c=0;c<a.length;c++)a[c]=o();let l=new Je;l.setAttribute("position",new Ce(new Float32Array(df*3),3)),l.setAttribute("aR",new Ce(a,4)),this.BU={uT:n(0),uA:n(0),uPx:n(1),uAsp:n(16/9)},this.bokeh=new It(l,new Ee({vertexShader:y_,fragmentShader:On,uniforms:this.BU,...r})),this.bokeh.renderOrder=4,this.bokeh.frustumCulled=!1,this.scene.add(this.herR,this.himR,this.her,this.him,this.halo,this.spark,this.bokeh)}stand(e,t,n,s){let[r,o,a]=dh(this.M,this.ctx.aspect,s,Cr,uf),l=n.h*a;e.position.set(r,o-n.clip*l,0),e.scale.set(l,l,1),t.position.set(r,o+n.clip*l,0),t.scale.set(l,-l,1),e.material.uniforms.uClip.value.set(n.clip,.006,1,0),t.material.uniforms.uClip.value.set(n.clip,.006,.28,1)}update(e){let t=this.M.uniforms,n=this.ctx.aspect;t.uT.value=e,t.uAspect.value=n,this.BU.uAsp.value=n,this.BU.uT.value=e;let[s,r,o]=vn(e,[[Er,.01,.24,2.3],[153.6,0,-.03,1.15],[Rr,0,-.04,1.25],[xh,0,-.06,1.45],[Ar,0,-.02,1.62]]),a=.006*Math.sin(e*.25);t.uCam.value.set(s+a,r,o),t.uPar.value.set(-.8*a,0),t.uDolly.value=.04*Q(e,Rr,Ar),t.uTrail.value=.15+.1*Q(e,Er,Rr)+1.3*J.inOut(Q(e,Rr,Ar)),t.uRot.value=(e-Er)*.03;let l=J.inOut(Q(e,Rr,d_)),c=oe(.452,.479,l),h=oe(.552,.523,l);this.stand(this.her,this.herR,m_,c),this.stand(this.him,this.himR,g_,h),t.uFeet.value.set(c,Cr-.002,h,Cr-.002),[this.her,this.him,this.herR,this.himR].forEach((R,C)=>{let k=R.material.uniforms;k.uT.value=e,k.uWind.value=.35+.25*Math.sin(e*.4+C),C<2?(k.uTint.value.set(.13,.1,.13),k.uRim.value.set(.95,.88,1,.85+.1*Math.sin(e*.9))):(k.uTint.value.set(.09,.02,.03),k.uRim.value.set(.9,.35,.35,.3),k.uAlpha.value=.7)});let d=Z(xh-.3,xh+.6,e),u=J.in(Q(e,hf,Ar+.05)),m=(c+h)/2,g=Cr+.021,x=.85+.15*Math.sin(e*23)*Math.sin(e*7.3),f=oe(m,Ta[0],u*.85),p=oe(g,Ta[1]-.05,u),T=oe(uf,0,u),[M,S,w]=dh(this.M,n,f,p,T);this.spark.position.set(M,S,0),this.halo.position.set(M,S,0);let A=d*x;this.spark.scale.setScalar(w*(.035+.03*A+.35*u*u)),this.halo.scale.setScalar(w*(.16+.1*A+1.2*u*u)),this.spark.material.opacity=A*(1.4+u),this.halo.material.opacity=.55*A*(1+u),this.spark.visible=this.halo.visible=d>.001,t.uGain.value=1-.35*u*(1-u*.6),t.uHand.value.set(m,Cr-.03,.35*A*(1-u)),this.BU.uA.value=Z(Er,Er+3,e)*(1+.6*u),this.BU.uPx.value=this.ctx.h/720}post(e){let t=Q(e,hf,Ar);return{sat:1.05,contrast:1.06,bloom:.5+.6*t*t,bloomThr:.82,exposure:1+.25*t*t,vig:.6,grain:.06,ca:.35,tint:[1.02,.98,1],dust:.15,dustCol:[1,.5,.45]}}};var _h=`
uniform float uT, uSpin, uGrow, uOpen, uCrown, uRad, uGone;
vec3 helixP(float y, float s){
  float o = uOpen * smoothstep(uCrown - 16.0, uCrown, y);
  float R = uRad * (1.0 + 0.06 * sin(y * 0.7 - uT * 1.3)) * (1.0 + o * o * 5.0);
  float a = y * 0.785 + uSpin + s * 3.14159 + o * 2.0;
  return vec3(cos(a) * R, y + o * o * 5.0, sin(a) * R);
}`,ff="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",pf=`
uniform float uT, uAlt, uRain, uGlow, uBright; varying vec3 vW;
${He}
${Ti}
vec3 sky(vec3 d){
  float hz = d.y;
  vec3 zen = mix(vec3(0.05, 0.012, 0.03), vec3(0.006, 0.008, 0.028), uAlt);
  vec3 hor = mix(vec3(0.26, 0.018, 0.022), vec3(0.1, 0.012, 0.035), uAlt);
  vec3 col = mix(hor, zen, smoothstep(-0.02, 0.55, hz));
  col += vec3(0.3, 0.02, 0.02) * fbm3(d * vec3(3.0, 14.0, 3.0) + uT * 0.02) * exp(-abs(hz) * 9.0) * 0.6;
  // stars
  vec3 g = d * 170.0, gi = floor(g); float h = hash13(gi);
  col += vec3(0.8, 0.85, 1.0) * step(0.982, h) * smoothstep(0.4, 0.0, length(fract(g) - 0.5)) * (0.55 + 0.45 * sin(uT * 3.0 + h * 50.0))
    * smoothstep(0.0, 0.3, hz) * (0.4 + uAlt);
  // milky band
  float band = exp(-pow(dot(d, normalize(vec3(0.6, 0.7, 0.35))) * 5.0, 2.0));
  col += vec3(0.25, 0.18, 0.4) * band * fbm(d.xy * 6.0 + d.z * 3.0) * smoothstep(0.05, 0.4, hz) * (0.3 + 0.7 * uAlt);
  // the pale planet from the red sea
  vec3 P = normalize(vec3(0.0, 0.3, -1.0)), e1 = normalize(cross(P, vec3(0.0, 1.0, 0.0))), e2 = cross(e1, P);
  vec2 q = vec2(dot(d, e1), dot(d, e2)) / 0.13; float r = length(q);
  if (dot(d, P) > 0.0) {
    if (r < 1.0) {
      float z = sqrt(1.0 - r * r), s = fbm(q / (z + 0.3) * 1.8 + vec2(uT * 0.02, 0.0));
      col = mix(vec3(0.2, 0.3, 0.5), vec3(0.95, 0.93, 0.9), smoothstep(0.35, 0.65, s)) * (0.35 + 0.65 * z) * (0.8 - 0.4 * uAlt);
    }
    col += vec3(0.5, 0.65, 1.0) * exp(-max(r - 1.0, 0.0) * 9.0) * smoothstep(0.92, 1.0, r) * 0.35;
  }
  // rainbow aurora curtains (finale)
  if (uRain > 0.0) {
    float cur = pow(fbm3(vec3(d.x * 3.0, d.y * 1.5 - uT * 0.15, d.z * 3.0)), 2.0) * 1.6 * smoothstep(0.05, 0.5, hz) * smoothstep(1.0, 0.6, hz);
    col += pencil(0.5 + 0.5 * sin(d.x * 2.0 + d.z * 1.3 + hz * 3.0 + uT * 0.25)) * cur * uRain * 1.4;
  }
  return col;
}
void main(){
  vec3 d = normalize(vW - cameraPosition), col;
  if (d.y >= 0.0) col = sky(d);
  else {
    // analytic LCL sea: ripples + rings from the helix root, reflects the sky
    float k = -cameraPosition.y / d.y; vec3 p = cameraPosition + d * k; float rr = length(p.xz);
    vec2 n = (vec2(vnoise(p.xz * 0.7 + uT * 0.3), vnoise(p.zx * 0.7 - uT * 0.25)) - 0.5) * 0.18;
    n += normalize(p.xz + 1e-4) * sin(rr * 2.4 - uT * 3.0) * exp(-rr * 0.07) * 0.1;
    vec3 rd = reflect(d, normalize(vec3(n.x, 1.0, n.y))); rd.y = abs(rd.y);
    float fr = 0.25 + 0.75 * pow(1.0 - abs(d.y), 4.0);
    col = vec3(0.07, 0.004, 0.006) + sky(rd) * vec3(1.0, 0.4, 0.35) * fr;
    col += mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 0.1, 0.12), 0.5 + 0.5 * sin(rr * 0.3)) * exp(-rr * 0.22) * 0.35 * uGlow;
    col *= mix(1.0, 0.3, uAlt);
    col = mix(col, sky(normalize(vec3(d.x, 0.0, d.z))), 1.0 - exp(-k * 0.004));
  }
  gl_FragColor = vec4(col * uBright, 1.0);
}`,mf=`
${_h}
attribute vec3 aP; varying float vY, vS, vF; varying vec3 vN, vV;
void main(){
  float y = aP.x, s = aP.z;
  vec3 c = helixP(y, s), T = normalize(helixP(y + 0.05, s) - c), N = normalize(cross(T, vec3(0.0, 1.0, 0.0)) + 1e-4), B = cross(T, N);
  float th = 0.085 * (1.0 + 0.8 * exp(-pow((uGrow - y) * 1.5, 2.0)));
  vN = cos(aP.y) * N + sin(aP.y) * B;
  vec3 w = c + vN * th;
  vY = y; vS = s; vV = normalize(cameraPosition - w);
  vF = smoothstep(0.4, 2.2, distance(w, cameraPosition)) * smoothstep(uGrow, uGrow - 0.6, y) * smoothstep(uGone - 3.0, uGone + 3.0, y);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,gf=`
uniform float uT, uGrow, uRain, uBeat; uniform float uPulse[8], uPulseY[8];
varying float vY, vS, vF; varying vec3 vN, vV;
${Ti}
void main(){
  if (vF < 0.002) discard;
  float f = abs(dot(normalize(vN), vV));
  vec3 base = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vS);
  base = mix(base, pencil(fract(vY * 0.035 + vS * 0.5 - uT * 0.12)) * 1.5, uRain);
  float pul = 0.0;
  for (int i = 0; i < 8; i++) { float a = uT - uPulse[i]; if (a > 0.0 && a < 3.0) pul += exp(-pow(vY - uPulseY[i] - a * 22.0, 2.0) * 0.08) * (1.0 - a / 3.0); }
  float dash = 0.5 + 0.5 * sin(vY * 6.0 - uT * 9.0 + vS * 3.0);
  float tip = exp(-(uGrow - vY) * 2.0) * 2.0;
  vec3 col = base * (0.22 + 0.6 * pow(f, 3.0) + 0.25 * dash * pow(f, 2.0) + 0.2 * uBeat) + vec3(1.0, 0.9, 0.8) * (pul * 1.8 + tip * 0.7) * pow(f, 2.0);
  gl_FragColor = vec4(col * vF, 1.0);
}`,vf=`
${_h}
attribute vec2 aR; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float y = aR.x; vec3 a = helixP(y, 0.0), b = helixP(y, 1.0);
  vec3 p = mix(a, b, uv.x), side = normalize(cross(b - a, cameraPosition - p)) * 0.035;
  vUv = uv; vSeed = aR.y;
  vA = smoothstep(uGrow - 0.5, uGrow - 2.5, y) * smoothstep(uGone - 2.0, uGone + 2.0, y) * (1.0 - smoothstep(0.0, 0.6, uOpen * smoothstep(uCrown - 16.0, uCrown, y)));
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * (uv.y * 2.0 - 1.0), 1.0);
}`,xf=`
uniform float uT, uBeat; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float g = exp(-pow(vUv.y * 2.0 - 1.0, 2.0) * 4.0);
  vec3 c = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vUv.x) * (0.25 + 0.3 * uBeat);
  float sp = fract(uT * 0.6 + vSeed); c += vec3(1.0, 0.9, 0.8) * exp(-abs(vUv.x - sp) * 30.0) * 1.2;
  gl_FragColor = vec4(c * g * vA, 1.0);
}`,_f=`
${_h}
uniform float uPart, uBurst, uHeroY, uHeroOn;
attribute vec4 aC; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
void main(){
  float y = aC.x, sd = aC.y, sd01 = sd * 0.5 + 0.5;
  vec3 a = helixP(y, 0.0), b = helixP(y, 1.0), X = normalize(b - a);
  vec3 c = mix(a, b, 0.5 + sd * (0.2 + 0.2 * uPart));
  float sc = smoothstep(uGrow - 1.0, uGrow - 3.0, y) * mix(1.0, smoothstep(1.8, 4.5, abs(y - uHeroY)), uHeroOn);
  vec3 Y = vec3(0.0, 1.0, 0.0), Z = cross(X, Y);
  // finale: the crown's cards burst outward, tumbling
  float bk = uBurst * smoothstep(uCrown - 26.0, uCrown - 8.0, y) * (0.6 + 0.8 * aC.w);
  vec3 rad = normalize(vec3(c.x, 0.0, c.z) + 1e-3);
  c += rad * bk * (4.0 + 8.0 * aC.w) + vec3(0.0, bk * (2.0 + 4.0 * fract(aC.w * 7.0)) - bk * bk * 0.8, 0.0);
  float r1 = bk * (2.0 + 5.0 * aC.w) + 0.12 * sin(uT * 0.8 + aC.w * 30.0), r2 = bk * 3.0 * fract(aC.w * 13.0);
  vec3 X2 = X * cos(r1) + Z * sin(r1), Z2 = cross(X2, Y); vec3 Y2 = Y * cos(r2) + Z2 * sin(r2);
  vec3 w = c + (position.x * X2 + position.y * Y2) * sc;
  vUv = uv; vCell = aC.z; vSeed = aC.w;
  vA = sc; vB = clamp((uGone + 6.0 - y) / 6.0, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,yf=`
uniform sampler2D uAtlas; uniform float uT, uBeat, uRain; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
${He}
${Ti}
void main(){
  if (vA < 0.01) discard;
  vec2 pu = (vUv - vec2(0.068, 0.18)) / vec2(0.864, 0.76);
  vec3 col = vec3(0.86, 0.83, 0.78);
  if (!gl_FrontFacing) { col = vec3(0.5, 0.44, 0.38) * (0.8 + 0.2 * fbm(vUv * 9.0));
    if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col += 0.3 * texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + vec2(1.0 - pu.x, pu.y) * vec2(0.25, 1.0 / 3.0)).rgb; }
  else if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0)
    col = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + pu * vec2(0.25, 1.0 / 3.0)).rgb;
  col *= mix(vec3(1.0, 0.8, 0.7), pencil(fract(vSeed * 3.0 + uT * 0.1)) * 1.3, uRain * 0.5) * (0.75 + 0.2 * uBeat);
  // burn away from below
  float n = fbm(vUv * vec2(3.5, 4.0) + vSeed * 20.0) + (1.0 - vUv.y) * 0.25, th = vB * 1.35 - 0.1, on = step(0.001, vB);
  if (n < th) discard;
  col += vec3(3.0, 1.4, 0.4) * smoothstep(th + 0.05, th, n) * on;
  gl_FragColor = vec4(col, 1.0);
}`,Mf=`
uniform sampler2D uTex; uniform float uA, uT, uDis; varying vec2 vUv;
${He}
void main(){
  vec2 pu = (vUv - vec2(0.05, 0.12)) / vec2(0.9, 0.83);
  vec3 col = vec3(0.9, 0.86, 0.8);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col = texture2D(uTex, pu).rgb * 1.05;
  float n = fbm(vUv * 5.0 + 3.0), th = 1.2 - uDis * 1.4;
  if (n < th - 0.0 && uDis < 1.0) discard;
  col += vec3(3.0, 1.6, 0.5) * smoothstep(th + 0.06, th, n) * step(uDis, 0.999);
  col += vec3(1.0, 0.7, 0.4) * 0.15 * (1.0 - smoothstep(0.0, 0.04, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y))));
  gl_FragColor = vec4(col * uA, uA);
}`,Ea="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",bf=`
uniform float uAge, uR; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float r = length(vUv - 0.5) * 2.0, R = uR;
  float g = exp(-pow((r - R) * 40.0, 2.0)) + 0.35 * exp(-abs(r - R) * 12.0) * step(r, R);
  gl_FragColor = vec4(uCol * g * (1.0 - uAge) * (1.0 - uAge), 1.0);
}`,Sf=`
uniform float uT, uA; varying vec2 vUv;
${Ti}
void main(){
  vec2 q = vUv - 0.5; float r = length(q) * 2.0, a = atan(q.y, q.x) / 6.2832 + 0.5;
  float seg = step(0.12, fract(a * 24.0 + uT * 0.3));
  float band = exp(-pow((r - 0.86) * 30.0, 2.0)) * seg + exp(-pow((r - 0.72) * 90.0, 2.0)) * 0.6 + exp(-pow((r - 0.95) * 120.0, 2.0)) * 0.5;
  band += exp(-abs(r - 0.86) * 8.0) * 0.12;
  gl_FragColor = vec4(pencil(fract(a + uT * 0.05)) * 1.6 * band * uA, 1.0);
}`,Tf=`
uniform float uT, uCamY, uPx, uA, uRain, uRise; attribute vec4 aM; varying vec3 vCol; varying float vA;
${Ti}
void main(){
  float span = 60.0, yy = mod(aM.y * span + uRise * (0.6 + 1.4 * aM.w) - uCamY + 30.0, span);
  float y = uCamY - 30.0 + yy, ang = aM.x * 6.2832 + uT * 0.15 * (1.0 + aM.w) + y * 0.08, R = 1.2 + aM.z * aM.z * 16.0;
  vec3 p = vec3(cos(ang) * R, y, sin(ang) * R);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  vA = uA * smoothstep(0.0, 6.0, yy) * smoothstep(span, span - 6.0, yy) * (0.4 + 0.6 * fract(aM.w * 17.0 + uT * 0.5)) * step(0.0, y);
  vCol = mix(mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 0.12, 0.12), step(0.5, fract(aM.w * 5.0))), vec3(1.0, 0.9, 0.85), step(0.85, aM.w));
  vCol = mix(vCol, pencil(fract(aM.x + uT * 0.1)) * 1.4, uRain);
  gl_PointSize = uPx * (1.5 + 3.5 * aM.w) * 12.0 / max(-mv.z, 0.5);
  gl_Position = projectionMatrix * mv;
}`;var qs=166.17,ci=217.6,Hn=72,wf=46,Ef=1.6,M_=8,Ji=181.25,Pr=184.75,Kt=198.3,Xs=207.5,yh=[[qs,1.2,9.5,0,3.5],[168.7,5,8.5,.6,4],[170.67,12,7.8,1.3,4.5],[175.47,26,6.8,2.4,3.5],[179.8,41,6.4,3.1,2],[Ji,44.8,6,3.45,1.2],[184.3,47,5.2,4.15,1],[186.2,50.5,.35,4.9,14],[192.5,62,.25,6.9,14],[197.6,70,.25,8.4,14],[200.6,79,3.5,9,11],[205,91,9,9.8,-16],[211.5,97,20,10.4,-26],[ci,101,32,10.9,-34]];function Mh(i,e){let t=0;for(;t<e.length-2&&i>e[t+1][0];)t++;let n=e[Math.max(0,t-1)],s=e[t],r=e[t+1],o=e[Math.min(e.length-1,t+2)],a=Qe((i-s[0])/(r[0]-s[0])),l=a*a,c=l*a;return s.slice(1).map((h,d)=>{let u=n[d+1],m=s[d+1],g=r[d+1],x=o[d+1];return .5*(2*m+(-u+g)*a+(2*u-5*m+4*g-x)*l+(-u+3*m-3*g+x)*c)})}var Aa=class extends Xe{constructor(e){super(e,{fov:55,near:.05,far:1500});let t=w=>({value:w});this.H={uT:t(0),uSpin:t(0),uGrow:t(0),uOpen:t(0),uCrown:t(Hn),uRad:t(Ef),uGone:t(-20),uBeat:t(0),uRain:t(0)};let n={transparent:!0,depthWrite:!1,blending:it};this.SK={uT:this.H.uT,uAlt:t(0),uRain:this.H.uRain,uGlow:t(1),uBright:t(1)},this.sky=new de(new zo(600,48,24),new Ee({vertexShader:ff,fragmentShader:pf,uniforms:this.SK,side:Ht,depthWrite:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1;let s=1100,r=10,o=Hn+4,a=[],l=[],c=[];for(let w=0;w<2;w++)for(let A=0;A<=s;A++)for(let R=0;R<r;R++)l.push(A/s*o,R/r*6.2832,w),a.push(0,0,0);for(let w=0;w<2;w++)for(let A=0;A<s;A++)for(let R=0;R<r;R++){let C=w*(s+1)*r,k=C+A*r+R,v=C+A*r+(R+1)%r,_=k+r,D=v+r;c.push(k,_,v,v,_,D)}let h=new Je;h.setAttribute("position",new _t(a,3)),h.setAttribute("aP",new _t(l,3)),h.setIndex(c),this.pulses=new Array(8).fill(-99),this.pulseY=new Array(8).fill(0),this.SU={...this.H,uPulse:t(this.pulses),uPulseY:t(this.pulseY)},this.strands=new de(h,new Ee({vertexShader:mf,fragmentShader:gf,uniforms:this.SU,...n,side:Ze})),this.strands.frustumCulled=!1,this.strands.renderOrder=2;let d=ht(166),u=Math.floor((Hn-1)/.9),m=new si().copy(new ze(1,1).translate(.5,.5,0)),g=new Float32Array(u*2);for(let w=0;w<u;w++)g[w*2]=1+w*.9,g[w*2+1]=d();m.setAttribute("aR",new Zt(g,2)),m.instanceCount=u,this.rungs=new de(m,new Ee({vertexShader:vf,fragmentShader:xf,uniforms:this.H,...n,side:Ze})),this.rungs.frustumCulled=!1,this.rungs.renderOrder=1;let x=[];for(let w=0;w<u;w++)(w%2===0||w*.9>Hn-22)&&x.push([1+w*.9,(w>>1)%2?1:-1,Math.floor(d()*11),d()]),w*.9>Hn-22&&w%2&&x.push([1+w*.9,(w>>1)%2?-1:1,Math.floor(d()*11),d()]);let f=new si().copy(new ze(.9,1.06));f.setAttribute("aC",new Zt(new Float32Array(x.flat()),4)),f.instanceCount=x.length,this.CU={...this.H,uAtlas:t(e.shared.photos),uPart:t(0),uBurst:t(0),uHeroY:t(wf),uHeroOn:t(0)},this.cards=new de(f,new Ee({vertexShader:_f,fragmentShader:yf,uniforms:this.CU,side:Ze})),this.cards.frustumCulled=!1,this.cards.renderOrder=0,this.HU={uTex:t(e.shared.big),uA:t(0),uT:this.H.uT,uDis:t(0)},this.hero=new de(new ze(2.5,2.8),new Ee({vertexShader:Ea,fragmentShader:Mf,uniforms:this.HU,transparent:!0,side:Ze})),this.hero.renderOrder=3;let p=w=>{let A=new Us(new Gi({map:e.shared.glow,color:w,...n}));return A.renderOrder=4,A};this.tips=[p(new Me(1,.7,.3)),p(new Me(1,.2,.2))],this.rings=Array.from({length:M_},()=>{let w=new de(new ze(1,1),new Ee({vertexShader:Ea,fragmentShader:bf,uniforms:{uAge:t(1),uR:t(0),uCol:t(new Me(1,.6,.4))},...n,side:Ze}));return w.rotation.x=-Math.PI/2,w.renderOrder=3,w.visible=!1,w}),this.ringTimes=[...Qo,...th].filter(w=>w>qs-.1&&w<ci).sort((w,A)=>w-A),this.AU={uT:this.H.uT,uA:t(0)},this.halo=new de(new ze(22,22),new Ee({vertexShader:Ea,fragmentShader:Sf,uniforms:this.AU,...n,side:Ze})),this.halo.rotation.x=-Math.PI/2,this.halo.position.y=Hn+30,this.halo.renderOrder=3;let T=3200,M=new Float32Array(T*4);for(let w=0;w<M.length;w++)M[w]=d();let S=new Je;S.setAttribute("position",new Ce(new Float32Array(T*3),3)),S.setAttribute("aM",new Ce(M,4)),this.MU={uT:this.H.uT,uCamY:t(0),uPx:t(1),uA:t(1),uRain:this.H.uRain,uRise:t(0)},this.motes=new It(S,new Ee({vertexShader:Tf,fragmentShader:On,uniforms:this.MU,...n})),this.motes.frustumCulled=!1,this.motes.renderOrder=5,this.scene.add(this.sky,this.cards,this.rungs,this.strands,this.hero,...this.tips,...this.rings,this.halo,this.motes)}helixP(e,t){let n=this.H,s=n.uOpen.value*Z(Hn-16,Hn,e),r=n.uT.value,o=Ef*(1+.06*Math.sin(e*.7-r*1.3))*(1+s*s*5),a=e*.785+n.uSpin.value+t*Math.PI+s*2;return new I(Math.cos(a)*o,e+s*s*5,Math.sin(a)*o)}update(e){let t=this.H,n=Ve.beatPulse(e,6),s=Qe(Ve.get("kick",e));t.uT.value=e,t.uBeat.value=n*.6+s*.4,t.uSpin.value=(e-qs)*.42+.35*J.inOut(Q(e,Kt-.4,Kt+2.5)),t.uGrow.value=Math.max(1,Math.min(Hn+4.5,Mh(e+1,yh)[0]+10)*J.out(Q(e,qs-.2,qs+3.5))),t.uOpen.value=J.inOut(Q(e,Kt-1.2,Kt+3.5)),t.uGone.value=e<Xs?-20:oe(-8,Hn+20,J.in(Q(e,Xs,ci-.4))),t.uRain.value=Z(Kt-.6,Kt+1.4,e)*(1-.5*Z(213,ci,e)),this.CU.uPart.value=Z(184.6,186.4,e)*(1-Z(196.2,198,e)),this.CU.uBurst.value=J.out(Q(e,Kt,Kt+7));let r=Z(Ji-.8,Ji+.2,e)*(1-Z(Pr-.5,Pr+.6,e));this.CU.uHeroOn.value=r,this.HU.uA.value=r>.001?1:0,this.hero.visible=r>.001,this.HU.uDis.value=e<Pr-.5?J.out(Q(e,Ji-.9,Ji+.5)):1-J.in(Q(e,Pr-.5,Pr+.5));let[o,a,l,c]=Mh(e,yh),h=this.camera,d=.08*Math.sin(e*.7);h.position.set(Math.cos(l)*a,o+d,Math.sin(l)*a);let u=new I(Math.cos(l+.5)*a*.02,o+c,Math.sin(l+.5)*a*.02),m=u.clone().sub(h.position).normalize(),g=Z(.8,.98,Math.abs(m.y));h.up.set(0,1,0).lerp(new I(Math.cos(l+1.2),0,Math.sin(l+1.2)),g).normalize(),h.lookAt(u),h.fov=55+14*Z(186,187.5,e)*(1-Z(197,199,e))+4*n*Z(186,187.5,e)*(1-Z(197,199,e)),h.updateProjectionMatrix(),this.sky.position.copy(h.position),this.SK.uAlt.value=Z(0,90,o),this.SK.uGlow.value=1-Z(Xs,ci,e)*.6,this.hero.position.set(0,wf+.4*Math.sin(e*.8)-.6*(1-J.out(Q(e,Ji-.9,Ji+.8))),0),this.hero.lookAt(h.position.x,this.hero.position.y,h.position.z);let x=this.ringTimes.filter(f=>f<=e).slice(-8);for(let f=0;f<8;f++)this.pulses[f]=x[f]??-99,this.pulseY[f]=x[f]?this.ringY(x[f])-12:0;this.rings.forEach((f,p)=>{let T=x.length-1-p,M=x[T];if(M===void 0||e-M>2.2){f.visible=!1;return}let S=(e-M)/2.2,w=th.includes(M);f.visible=!0,f.position.set(0,this.ringY(M),0),f.scale.setScalar(w?60:34);let A=f.material.uniforms;A.uAge.value=S,A.uR.value=J.out(S),A.uCol.value.setRGB(1,w?.85:.5+.2*(T%2),w?.7:.35)}),this.tips.forEach((f,p)=>{let T=this.helixP(t.uGrow.value,p);f.position.copy(T);let M=e<Kt+1?1:0;f.scale.setScalar((1.4+.8*n)*M),f.visible=M>0}),this.halo.rotation.z=e*.12,this.AU.uA.value=Z(Kt,Kt+2,e)*(1-Z(214,ci,e))*(1+.4*n),this.MU.uCamY.value=o,this.MU.uPx.value=this.ctx.h/720,this.MU.uRise.value=(e-qs)*1.3+12*J.in(Q(e,Xs,ci)),this.MU.uA.value=.8+.8*Z(Xs,ci,e)}ringY(e){return Mh(e,yh)[0]-1.5}post(e){let t=Ve.beatPulse(e,6),n=e>=Kt?Math.exp(-(e-Kt)*2.5):0,s=Z(Xs,ci,e);return{bloom:.7+.2*t+.3*Z(Kt-1,Kt+1,e),bloomThr:.68,sat:1.12,contrast:1.05,vig:.5,grain:.05,ca:.4+.6*n,exposure:1+.08*t,fadeW:.55*n+.25*s*s,dust:.1}}};var bh=217.6,Sh=226.18,b_=`
uniform float uT, uAspect, uSlide, uZoom, uRot, uLoupe, uBeat; uniform vec2 uLp; uniform sampler2D uAtlas; varying vec2 vUv;
${He}
const float P = 0.96, NF = 9.0;          // frame pitch, photo frames before the clear leader
vec3 cell(float c, vec2 u){ return texture2D(uAtlas, vec2(mod(c, 4.0) / 4.0, 1.0 - (floor(c / 4.0) + 1.0) / 3.0) + clamp(u, 0.002, 0.998) * vec2(0.25, 1.0 / 3.0)).rgb; }
// transmission of the strip at strip coords (x along, y across); a = coverage
vec3 strip(vec2 p, out float a){
  a = 0.0; float x = p.x + uSlide;
  if (abs(p.y) > 0.37 || x < -0.2 || x > (NF + 1.3) * P) return vec3(1.0);
  a = 1.0;
  float fi = floor(x / P), fx = mod(x, P);
  vec3 base = vec3(0.035, 0.025, 0.02);                           // black rebate
  float leader = step(NF, fi);
  base = mix(base, vec3(0.9, 0.72, 0.45), leader);                // clear amber leader
  // sprocket holes both edges
  float hx = mod(x, P / 4.0) - P / 8.0, hy = abs(p.y) - 0.325;
  vec2 hq = abs(vec2(hx, hy)) - vec2(0.05, 0.022);
  if (length(max(hq, 0.0)) - 0.008 < 0.0) { a = 0.0; return vec3(1.0); }
  // photo frame
  vec2 lu = vec2((fx - 0.07) / 0.82, (p.y + 0.27) / 0.54);
  if (leader < 0.5 && lu.x > 0.0 && lu.x < 1.0 && lu.y > 0.0 && lu.y < 1.0) {
    float c = mod(fi * 5.0 + 2.0, 11.0);
    vec3 im = cell(c, vec2(0.5 + (lu.x - 0.5) * 0.9, lu.y));
    im = mix(im, im * vec3(1.08, 0.95, 0.8), 0.4);
    float rr = length((lu - 0.5) * vec2(1.4, 1.0)); im *= 1.0 - 0.35 * rr * rr;
    return im * 1.1;
  }
  // edge dots and tiny frame numbers
  base += vec3(0.9, 0.55, 0.2) * step(length(vec2(fx - 0.48, abs(p.y) - 0.295)), 0.007) * (1.0 - leader) * 0.6;
  return base;
}
void main(){
  vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0);
  float cr = cos(uRot), sr = sin(uRot); vec2 p = mat2(cr, sr, -sr, cr) * q / uZoom;
  // lightbox: warm diffuse white with the milky diffuser grain
  vec3 box = vec3(1.0, 0.965, 0.9) * (0.9 + 0.1 * exp(-dot(q, q) * 1.5)) * (0.97 + 0.03 * vnoise(q * 300.0));
  // loupe magnifies around uLp
  vec2 lq = p - uLp; float lr = length(lq), R = 0.3;
  float inL = uLoupe * smoothstep(R, R - 0.004, lr);
  vec2 sp = mix(p, uLp + lq * (0.58 + 0.12 * lr / R), inL);
  float a; vec3 fs = strip(sp, a);
  // soft contact shadow of the strip lifted a hair off the glass
  float sh0; strip(sp + vec2(0.012, -0.016), sh0);
  vec3 col = box * (1.0 - 0.12 * sh0 * (1.0 - a));
  col = mix(col, fs * box, a);
  // red thread lying loose across the glass (with its shadow)
  float ty = 0.12 * sin(p.x * 2.3 + 0.8) + 0.05 * sin(p.x * 5.1 - 0.4) - 0.1 + 0.004 * sin(uT * 0.7 + p.x * 3.0);
  float td = abs(p.y - ty);
  col *= 1.0 - 0.18 * exp(-pow((p.y - ty + 0.014) / 0.01, 2.0));
  col = mix(col, vec3(0.62, 0.03, 0.05) * (0.8 + 0.4 * smoothstep(0.004, 0.0, abs(p.y - ty - 0.0015))), smoothstep(0.0045, 0.0015, td));
  // loupe body: glass rim, caustic, cool/warm fringes, slight darkening outside
  float rim = smoothstep(0.012, 0.0, abs(lr - R)) * uLoupe;
  col *= 1.0 - 0.25 * uLoupe * smoothstep(R + 0.03, R, lr) * smoothstep(R - 0.02, R, lr);
  col += vec3(1.0, 0.95, 0.85) * rim * 0.5 + vec3(0.3, 0.5, 1.0) * smoothstep(0.02, 0.0, abs(lr - R + 0.02)) * 0.12 * uLoupe;
  col += vec3(1.0) * exp(-length(lq - vec2(-0.12, 0.12)) * 30.0) * 0.25 * uLoupe * inL;
  // floating dust in the backlight
  vec2 dg = q * 22.0 + vec2(uT * 0.08, uT * 0.05), di = floor(dg);
  float h = hash12(di); col *= 1.0 - 0.35 * step(0.93, h) * smoothstep(0.08, 0.0, length(fract(dg) - hash22(di)));
  gl_FragColor = vec4(col * (1.0 + 0.03 * uBeat), 1.0);
}`,Ra=class extends Xe{constructor(e){super(e,{ortho:!0});let t=n=>({value:n});this.U={uT:t(0),uAspect:t(16/9),uSlide:t(0),uZoom:t(1),uRot:t(0),uLoupe:t(1),uBeat:t(0),uLp:t(new ge),uAtlas:t(e.shared.photos)},this.scene.add(sn(b_,this.U))}update(e){let t=this.U,n=Q(e,bh,Sh);t.uT.value=e,t.uAspect.value=this.ctx.aspect,t.uBeat.value=Ve.beatPulse(e,5),t.uSlide.value=.6+5.6*J.out(Q(e,bh,223.2))+7.5*J.in(Q(e,222.4,225.2)),t.uZoom.value=oe(1.25,1.02,J.out(n))+.5*J.in(Q(e,224.6,Sh)),t.uRot.value=-.16+.05*n,t.uLp.value.set(oe(.45,-.05,J.inOut(Q(e,bh,223))),oe(-.02,.03,n)),t.uLoupe.value=1-Z(222.8,224.4,e)}post(e){let t=Z(224.6,Sh,e);return{bloom:.35,bloomThr:.9,sat:.95,contrast:1.02,vig:.35*(1-t),grain:.05,tone:.5+.5*t,dust:.25,dustCol:[.6,.45,.3],fadeW:.15*t}}};var Af=226.18,Ca=252.03,Rf=[.8,.833],S_=`uniform float uDraw, uColor, uWindA; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }`,T_=`
  // grass sways in travelling gusts; clouds breathe
  float g = 0.5 + 0.5 * sin(uv.x * 7.0 - uT * 2.0);
  uv.x += (sin(uv.x * 55.0 + uT * 3.1) * 0.35 + g) * 0.006 * d * smoothstep(0.55, 0.2, uv.y) * uWindA;
  uv.x += 0.004 * sin(uT * 0.25 + uv.y * 4.0) * smoothstep(0.55, 0.8, uv.y);
  return uv;
`,w_=`
  vec2 q = vec2(uv.x * uImgAspect, uv.y);
  vec3 paper = vec3(0.975, 0.962, 0.935) * (0.965 + 0.05 * vnoise(q * 420.0) + 0.02 * vnoise(q * 30.0));
  // graphite line drawing of the plate (sobel on luminance)
  float gx = lumA(uv + vec2(uTexel.x, 0.0)) - lumA(uv - vec2(uTexel.x, 0.0)), gy = lumA(uv + vec2(0.0, uTexel.y)) - lumA(uv - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 5.5, 0.0, 1.0);
  float hatch = abs(fract((q.x + q.y) * 140.0) - 0.5);
  float shade = (1.0 - lumA(uv)) * smoothstep(0.2, 0.0, hatch) * 0.5;
  vec3 graphite = paper * (1.0 - 0.75 * clamp(edge + shade, 0.0, 1.0)) * vec3(0.98, 0.98, 1.0);
  // reveal fronts follow the wind (left -> right), ragged like strokes
  float n = uv.x * 0.8 + fbm(q * 3.0) * 0.25 + (1.0 - uv.y) * 0.05;
  float drawn = smoothstep(n - 0.04, n, uDraw * 1.15 - 0.05);
  float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
  float nc = uv.x * 0.7 + fbm(q * 4.0 + 7.0) * 0.35 + (h1 + h2) * 0.18;
  float cfr = uColor * 1.3 - 0.12, colored = smoothstep(nc - 0.03, nc + 0.03, cfr);
  vec3 c = mix(paper, graphite, drawn);
  c = mix(c, col, colored);
  // the live pencil at the colour front: a darker band of fresh strokes
  c *= 1.0 - 0.12 * exp(-pow((cfr - nc) * 14.0, 2.0)) * step(0.01, uColor) * step(uColor, 0.99);
  // dazzling sun: pulsing bloom and pencil rays
  vec2 sq = (uv - vec2(${Rf[0]}, ${Rf[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
  float rays = pow(0.5 + 0.5 * sin(sa * 14.0 + uT * 0.3), 6.0) * exp(-sr * 4.0) * smoothstep(0.06, 0.12, sr);
  c += vec3(1.0, 0.92, 0.65) * (exp(-sr * 9.0) * (0.25 + 0.06 * sin(uT * 2.0)) + rays * 0.12) * colored;
  // pencil wind lines sweeping through in gusts
  for (int i = 0; i < 5; i++) {
    float fi = float(i), y0 = 0.28 + fi * 0.13 + 0.035 * sin(uv.x * 6.0 + fi * 2.1 + uT * 0.6);
    float along = fract(uv.x * 0.7 - uT * (0.16 + 0.03 * fi) + fi * 0.37);
    float seg = smoothstep(0.0, 0.08, along) * smoothstep(0.34, 0.2, along);
    float curl = y0 + 0.02 * sin(along * 30.0) * smoothstep(0.22, 0.34, along);
    c *= 1.0 - 0.3 * smoothstep(0.0022, 0.0, abs(uv.y - curl)) * seg * uWindA * drawn;
  }
  return c;
`,E_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",A_=`
uniform sampler2D uTex, uMask; uniform float uT, uReveal, uAlpha; varying vec2 vUv;
${He}
void main(){
  vec2 uv = vUv;
  float hair = smoothstep(0.72, 0.95, uv.y) * smoothstep(0.62, 0.25, uv.x), dress = smoothstep(0.7, 0.5, uv.y) * smoothstep(0.35, 0.55, uv.y);
  uv.x += sin(uT * 7.0 + uv.y * 12.0 + uv.x * 5.0) * (0.008 * hair + 0.004 * dress);
  uv.y += sin(uT * 6.0 + uv.x * 14.0) * 0.004 * dress;
  vec3 c = texture2D(uTex, uv).rgb; float a = texture2D(uMask, uv).r;
  vec2 q = vUv * vec2(0.7, 1.0);
  float h = abs(fract((q.x + q.y) * 50.0) - 0.5) * 0.3 + fbm(q * 5.0) * 0.6 + vUv.x * 0.2;
  a *= smoothstep(h - 0.05, h + 0.05, uReveal * 1.3 - 0.1) * uAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(c, a);
}`,R_=`attribute vec4 aR; uniform float uT, uAsp, uPx, uA; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12) ;
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.55 ? vec3(0.98, 0.72, 0.45) : k < 0.8 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (12.0 + 18.0 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,C_=`varying vec3 vCol; varying float vA, vRot;
void main(){
  vec2 d = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot); d = mat2(c, s, -s, c) * d;
  d.x *= 0.45 + 0.4 * abs(sin(vRot * 0.7));
  float e = length(d * vec2(1.0, 2.2)); float a = smoothstep(0.24, 0.2, e) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * (0.9 + 0.1 * d.y), a * 0.9);
}`;function P_(i){let e=Math.round(i.w/2),t=Math.round(i.h/2),n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});s.drawImage(i.img,0,0,e,t);let r=s.getImageData(0,0,e,t),o=r.data,a=new Uint8Array(e*t),l=[],c=m=>{let g=o[m*4],x=o[m*4+1],f=o[m*4+2];return Math.min(g,x,f)>222&&Math.max(g,x,f)-Math.min(g,x,f)<26};for(let m=0;m<e;m++)l.push(m,(t-1)*e+m);for(let m=0;m<t;m++)l.push(m*e,m*e+e-1);for(;l.length;){let m=l.pop();if(a[m]||!c(m))continue;a[m]=1;let g=m%e;g>0&&l.push(m-1),g<e-1&&l.push(m+1),m>=e&&l.push(m-e),m<e*(t-1)&&l.push(m+e)}for(let m=0;m<e*t;m++){let g=a[m]?0:255;o[m*4]=o[m*4+1]=o[m*4+2]=g,o[m*4+3]=255}s.putImageData(r,0,0);let h=document.createElement("canvas");h.width=e,h.height=t;let d=h.getContext("2d");d.filter="blur(1px)",d.drawImage(n,0,0);let u=new Ls(h);return u.colorSpace=en,u}var Cf=140,Pa=233.2,Pf=244.8,Ys=243.6,Ia=class extends Xe{constructor(e){super(e,{ortho:!0});let t=e.img,n=h=>({value:h});this.M=bn(t.meadow,t.meadow_d,{head:S_,warp:T_,hook:w_,uniforms:{uDraw:n(0),uColor:n(0),uWindA:n(1),uTexel:n(new ge(1.2/t.meadow.w,1.2/t.meadow.h))}}),this.scene.add(Ot(this.M));let s=t.run_her,r=s.w/s.h;this.HU={uTex:n(s.tex),uMask:n(P_(s)),uT:n(0),uReveal:n(0),uAlpha:n(1)};let o=new ze(r,1);o.translate(0,.5,0),this.her=new de(o,new Ee({vertexShader:E_,fragmentShader:A_,uniforms:this.HU,transparent:!0,depthTest:!1,depthWrite:!1})),this.her.renderOrder=2,this.her.frustumCulled=!1,this.shadow=new de(new ze(1,1),new yt({map:e.shared.glow,color:new Me(.2,.25,.12),transparent:!0,depthTest:!1,depthWrite:!1})),this.shadow.renderOrder=1;let a=ht(226),l=new Float32Array(Cf*4);for(let h=0;h<l.length;h++)l[h]=a();let c=new Je;c.setAttribute("position",new Ce(new Float32Array(Cf*3),3)),c.setAttribute("aR",new Ce(l,4)),this.PU={uT:n(0),uA:n(0),uPx:n(1),uAsp:n(16/9)},this.petals=new It(c,new Ee({vertexShader:R_,fragmentShader:C_,uniforms:this.PU,transparent:!0,depthTest:!1,depthWrite:!1})),this.petals.renderOrder=3,this.petals.frustumCulled=!1,this.title=new Yi("One Last Kiss",{font:un.script,size:220,height:.62,color:[.2,.008,.015],paper:!0,soft:.03}),this.credit=new Yi("\u5B87\u591A\u7530\u30D2\u30AB\u30EB  \xB7  Hikaru Utada",{font:un.mincho,size:140,height:.13,color:[.03,.03,.035],paper:!0,soft:.05}),this.title.tip.visible=!1,this.credit.tip.visible=!1,this.title.group.renderOrder=4,this.title.mesh.renderOrder=4,this.credit.mesh.renderOrder=4,this.scene.add(this.shadow,this.her,this.petals,this.title.group,this.credit.group)}update(e){let t=this.M.uniforms,n=this.ctx.aspect;t.uT.value=e,t.uAspect.value=n,this.PU.uAsp.value=n,this.PU.uT.value=e,this.PU.uPx.value=this.ctx.h/720,t.uDraw.value=J.inOut(Q(e,Af+.2,231.4)),t.uColor.value=J.inOut(Q(e,229.4,236.2))*(1-.85*J.inOut(Q(e,247.2,251.2))),t.uWindA.value=.55+.45*Math.sin(e*.7)**2-.3*Q(e,240,Ca);let[s,r,o]=vn(e,[[Af,-.1,-.12,1.4],[233,-.08,-.08,1.25],[239.5,.01,-.03,1.12],[244.5,.05,.06,1.2],[Ca,.04,.085,1.26]]),a=.004*Math.sin(e*.31);t.uCam.value.set(s,r+a,o),t.uPar.value.set(.05*(s+.1),.02*r);let l=Q(e,Pa,Pf),c=oe(-1.25,1.3,.5*l+.5*J.inOut(l)+.12*Math.sin(l*Math.PI)*0),h=1.24,d=e/(gn*1)*Math.PI,u=.022*Math.abs(Math.sin(d)),m=-.98-.08*(1-Math.cos(l*Math.PI))*0+.03*J.inOut(l);this.her.position.set(c*n,m+u,0),this.her.scale.set(h,h,1),this.her.rotation.z=-.03+.025*Math.sin(d),this.HU.uT.value=e,this.HU.uReveal.value=J.out(Q(e,Pa,Pa+2.6)),this.her.visible=e>Pa&&e<Pf+.2,this.shadow.position.set(c*n+.05,m+.02,0),this.shadow.scale.set(.8*(1-u*5),.09,1),this.shadow.material.opacity=.5*this.HU.uReveal.value,this.shadow.visible=this.her.visible,this.PU.uA.value=Z(228.5,232,e)*(1-.6*Z(244,250,e));let g=J.inOut(Q(e,Ys,Ys+3.4)),x=J.inOut(Q(e,Ys+3,Ys+4.6)),f=1-Z(250.4,Ca-.1,e);this.title.group.position.set(-.22*n,.42,0),this.title.group.rotation.z=.04,this.credit.group.position.set(-.22*n+.02,.15,0),this.title.set(g,f,0),this.credit.set(x,.85*f,0),this.title.group.visible=e>Ys,this.credit.group.visible=e>Ys+3}post(e){return{tone:1,bloom:.22,bloomThr:.92,sat:1.02,contrast:1,vig:.22,grain:.035,ca:0,letter:0,exposure:1,fadeW:.9*Z(249.6,Ca,e),dust:0}}};var Ir=[["prelude",0,i=>new sa(i),null],["louvre",20.45,i=>new ra(i),{type:"light",dur:1.3,align:.6}],["portrait",25.1,i=>new oa(i),{type:"fade",dur:1.2,align:.5}],["gears",29.02,i=>new la(i),{type:"iris",dur:.7,align:.5}],["polaroids",37.6,i=>new da(i),{type:"flash",dur:.5,align:.5,amt:1.2}],["galaxy",52.6,i=>new Mr(i),{type:"zoom",dur:1.6,align:.6,c:[.5,.5]}],["viewfinder",80.46,i=>new fa(i),{type:"glitch",dur:.35,align:.5}],["projector",82.78,i=>new pa(i),{type:"iris",dur:.5,align:.5}],["platform",89.26,i=>new va(i),{type:"burn",dur:1.1,align:.5,c:[.5,.52]}],["embers",97.6,i=>new _a(i),{type:"shatter",dur:1.9,align:.3,c:[.52,.5]}],["galaxyFire",112.6,i=>new Mr(i,{fire:!0}),{type:"burn",dur:1.4,align:.5,c:[.5,.5]}],["tunnel",136.17,i=>new Sa(i),{type:"flash",dur:.6,align:.5,amt:1.4}],["redsea",149.03,i=>new wa(i),{type:"light",dur:1.4,align:.3}],["helix",166.17,i=>new Aa(i),{type:"flash",dur:.7,align:.45,amt:1.6}],["runout",217.6,i=>new Ra(i),{type:"fade",dur:1.6,align:.3}],["sketch",226.18,i=>new Ia(i),{type:"pencil",dur:2.4,align:.35}]];async function If(i,e,t=null){let n=await Jd();i.img=n,i.shared={photos:n.atlas?n.atlas.tex:kd(),big:n.hero?n.hero.tex:Hd(),glow:na(128)};let s=[];for(let r=0;r<Ir.length;r++){let[o,a,l,c]=Ir[r],h=r+1<Ir.length?Ir[r+1][1]:1e9,u=t===null||h>t-3&&a<t+3?l(i):new Xe(i);s.push({id:o,start:a,scene:u,tr:c||{type:"cut"}}),e((r+1)/Ir.length),await new Promise(m=>setTimeout(m,0))}return s}var Dr=new URLSearchParams(location.search),es=Dr.has("freeze"),Qi=parseFloat(Dr.get("t")||"0")||0,I_=Dr.has("clean"),Ah=document.getElementById("app"),Gt=document.getElementById("song"),Ct=new Wo(Gt),In=parseFloat(Dr.get("q")||"0")||(es?.6:1),Uf=1920*1080,Wt=new No({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:es});Wt.autoClear=!1;Wt.outputColorSpace=Fn;Wt.toneMapping=Dn;Wt.domElement.id="gl";Ah.appendChild(Wt.domElement);var Vn={renderer:Wt,w:1280,h:720,aspect:16/9,res:new ge(1280,720),quality:In},Ur=new qo(Wt),U_=new Yo,L_=new Zo,ji=null,Fa=null,wh=null,La=[],ts=null,Da=!1,Lf=0;function Eh(){let i=Math.min(devicePixelRatio||1,2),e=innerWidth,t=innerHeight,n=i*In;e*t*n*n>Uf*In&&(n=Math.sqrt(Uf*In/(e*t)));let s=Math.max(320,Math.round(e*n)),r=Math.max(180,Math.round(t*n));Wt.setPixelRatio(1),Wt.setSize(s,r,!1),Wt.domElement.style.width=e+"px",Wt.domElement.style.height=t+"px",Object.assign(Vn,{w:s,h:r,aspect:s/r}),Vn.res.set(s,r),Ur.resize(s,r),[ji,Fa].forEach(o=>o&&o.dispose()),ji=wi(s,r),Fa=wi(s,r),La.forEach(o=>o.resize(s,r)),ts&&ts.resize()}function Nf(i,e){let t=wh.at(i),n=t.a.scene;n.update(i,e);let s,r=jc(n.post(i));if(t.b){let o=t.b.scene;o.update(i,e),n.render(Wt,ji),o.render(Wt,Fa);let a=t.tr;Ur.fs.run(U_.set(ji,Fa,t.p,a.type,Vn.aspect,i,a.c,a.amt??1),Ur.M),s=Ur.M,r=md(r,jc(o.post(i)),t.p,a.type)}else n.render(Wt,ji),s=ji;L_.render(Wt,s,i,r.dust,Vn.w,Vn.h,r.dustCol),Ur.composite(s,r,i,Vn.w,Vn.h),ts&&ts.update(i,(1-r.fadeB)*(1-r.fadeW*.85))}var Th=0,Ua=0,Df=0;function D_(i,e){if(es||Dr.has("q")||(Th+=i,Ua++,e-Df<2500||Ua<45))return;let t=Th/Ua;Th=0,Ua=0,Df=e;let n=In;t>1/45?In=Math.max(.5,In*.85):t<1/58&&In<1&&(In=Math.min(1,In*1.08)),Math.abs(n-In)>.01&&Eh()}function Na(){let i=Ct.tick(),e=Math.min(Ct.t,fr);if(Nf(e,i),Lf++,!Da&&(Gt.ended||e>=fr-.05)&&(Da=!0),Gn.update(e,Ct.playing,Da),D_(i,performance.now()),es&&Lf>3){window.__olk.ready=!0;return}requestAnimationFrame(Na)}var Lr=i=>{i=Math.max(0,Math.min(fr-.1,i)),Da=!1,Ct.fallback||(Gt.currentTime=i),Ct.t=i},Gn=new ea(Ah,{toggle:()=>{if(Ct.fallback){Ct.running=!Ct.running;return}Gt.paused||Gt.ended?(Gt.ended&&Lr(0),Gt.play().catch(()=>{})):Gt.pause()},seek:Lr,seekBy:i=>Lr(Ct.t+i),lyrics:()=>ts&&ts.toggle(),restart:()=>{Lr(0),Ct.fallback?Ct.running=!0:Gt.play().catch(()=>{})}},fr);Gn.clean=I_;window.__olk={ready:!1,seek:Lr,clock:Ct};async function N_(){let i=['500 40px "OLK Mincho"','400 40px "OLK Mincho"','italic 300 40px "OLK Serif"','italic 500 40px "OLK Serif"','400 40px "OLK Serif"','40px "OLK Script"','40px "OLK SC"','40px "OLK Mono"'];try{await Promise.race([Promise.all(i.map(e=>document.fonts.load(e,"A\u3042\u611B"))),new Promise(e=>setTimeout(e,4e3))])}catch{}}async function F_(){if(es){Ct.freeze(Qi),Gn.ready(!0),Na();return}if(!await new Promise(e=>{if(Gt.readyState>=3)return e(!0);Gt.addEventListener("canplay",()=>e(!0),{once:!0}),Gt.addEventListener("error",()=>e(!1),{once:!0}),setTimeout(()=>e(Gt.readyState>=2),8e3)})){Ct.fallback=!0,Ct.t=Qi,Ct.running=!0,Gn.ready(),Na();return}Qi&&(Gt.currentTime=Qi),Gn.ready(),Na();try{await Gt.play()}catch{Gn.showGate(()=>Gt.play().catch(()=>{Ct.fallback=!0,Ct.running=!0}))}}(async function(){try{Gn.loading(.02),await N_(),Eh();let t=await If(Vn,s=>Gn.loading(.05+s*.85),es?Qi:null);wh=new Ko(t),La=[...new Set(t.map(s=>s.scene))],La.forEach(s=>s.resize(Vn.w,Vn.h)),ts=new jo(Ah);let n=es?wh.around(Qi,2).map(s=>s.scene):La;for(let s=0;s<n.length;s++){let r=n[s],o=t.find(a=>a.scene===r);r.update(Math.max(0,o.start+.05),1/60),r.render(Wt,ji),Gn.loading(.9+.1*(s+1)/n.length),await new Promise(a=>setTimeout(a,0))}Nf(Math.max(0,Qi),1/60),addEventListener("resize",Eh),F_()}catch(e){console.error(e),Gn.loading(1,"ERROR: "+(e&&e.message))}})();})();
