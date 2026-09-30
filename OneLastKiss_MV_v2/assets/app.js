(()=>{var ip=Object.defineProperty;var sp=(i,e)=>{for(var t in e)ip(i,t,{get:e[t],enumerable:!0})};var Xh="169";var rp=0,Qu=1,op=2;var sf=1,ap=2,yi=3,si=0,yt=1,Qe=2,Hi=0,Dn=1,De=2,ed=3,td=4,lp=5,ds=100,cp=101,hp=102,up=103,dp=104,fp=200,pp=201,mp=202,gp=203,_c=204,Mc=205,vp=206,xp=207,yp=208,_p=209,Mp=210,Ep=211,bp=212,Sp=213,wp=214,Ec=0,bc=1,Sc=2,sr=3,wc=4,Tc=5,Ac=6,Rc=7,rf=0,Tp=1,Ap=2,ii=0,Rp=1,Cp=2,Pp=3,Ip=4,Up=5,Lp=6,Dp=7;var of=300,rr=301,or=302,Cc=303,Pc=304,La=306,ps=1e3,Mi=1001,Ic=1002,En=1003,Np=1004;var So=1005;var Zt=1006,Ol=1007;var Ei=1008;var Si=1009,af=1010,lf=1011,Zr=1012,qh=1013,ms=1014,ni=1015,ys=1016,Yh=1017,$h=1018,ar=1020,cf=35902,hf=1021,uf=1022,gn=1023,df=1024,ff=1025,tr=1026,lr=1027,Kh=1028,Zh=1029,pf=1030,Jh=1031;var jh=1033,Qo=33776,ea=33777,ta=33778,na=33779,Uc=35840,Lc=35841,Dc=35842,Nc=35843,Fc=36196,Oc=37492,kc=37496,Bc=37808,Hc=37809,zc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,$c=37817,Kc=37818,Zc=37819,Jc=37820,jc=37821,ia=36492,Qc=36494,eh=36495,mf=36283,th=36284,nh=36285,ih=36286;var ra=2300,sh=2301,kl=2302,nd=2400,id=2401,sd=2402;var Fp=3200,Op=3201;var gf=0,kp=1,mn="",an="srgb",ai="srgb-linear",Qh="display-p3",Da="display-p3-linear",oa="linear",bt="srgb",aa="rec709",la="p3";var Ns=7680;var rd=519,Bp=512,Hp=513,zp=514,vf=515,Vp=516,Gp=517,Wp=518,Xp=519,rh=35044,xf=35048;var od="300 es",bi=2e3,ca=2001,Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bl=Math.PI/180,ha=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function qp(i,e){return(i%e+e)%e}function Hl(i,e,t){return(1-t)*i+t*e}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],_=s[1],y=s[4],M=s[7],S=s[2],R=s[5],w=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*m+a*y+l*R,r[6]=o*f+a*M+l*w,r[1]=c*x+h*_+u*S,r[4]=c*m+h*y+u*R,r[7]=c*f+h*M+u*w,r[2]=d*x+p*_+g*S,r[5]=d*m+p*y+g*R,r[8]=d*f+p*M+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Je;function yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yp(){let i=ua("canvas");return i.style.display="block",i}var ad={};function sa(i){i in ad||(ad[i]=!0,console.warn(i))}function $p(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Kp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ld=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cd=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[ai]:{transfer:oa,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[an]:{transfer:bt,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Da]:{transfer:oa,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(cd),fromReference:i=>i.applyMatrix3(ld)},[Qh]:{transfer:bt,primaries:la,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(cd),fromReference:i=>i.applyMatrix3(ld).convertLinearToSRGB()}},Jp=new Set([ai,Da]),ft={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Nr[e].toReference,s=Nr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Nr[i].primaries},getTransfer:function(i){return i===mn?oa:Nr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Nr[e].luminanceCoefficients)}};function nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,oh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=ua("canvas")),Fs.width=e.width,Fs.height=e.height;let n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=nr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nr(t[n]/255)*255):t[n]=nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jp=0,da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qp=0,ln=class i extends Vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=Zt,o=Ei,a=gn,l=Si,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=zi(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=of;ln.DEFAULT_ANISOTROPY=1;var je=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(p+1)/2,S=(f+1)/2,R=(h+d)/4,w=(u+x)/4,P=(g+m)/4;return y>M&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=w/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=P/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ah=class extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lh=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*x,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let S=Math.sqrt(y),R=Math.atan2(S,f*_);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}let M=a*_;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+x*M,m===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new T,hd=new It,wi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),To.subVectors(this.max,Fr),Os.subVectors(e.a,Fr),ks.subVectors(e.b,Fr),Bs.subVectors(e.c,Fr),Li.subVectors(ks,Os),Di.subVectors(Bs,ks),rs.subVectors(Os,Bs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-rs.z,rs.y,Li.z,0,-Li.x,Di.z,0,-Di.x,rs.z,0,-rs.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-rs.y,rs.x,0];return!Xl(t,Os,ks,Bs,To)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Os,ks,Bs,To))?!1:(Ao.crossVectors(Li,Di),t=[Ao.x,Ao.y,Ao.z],Xl(t,Os,ks,Bs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new T,new T,new T,new T,new T,new T,new T,new T],Vn=new T,wo=new wi,Os=new T,ks=new T,Bs=new T,Li=new T,Di=new T,rs=new T,Fr=new T,To=new T,Ao=new T,os=new T;function Xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var em=new wi,Or=new T,ql=new T,Gi=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):em.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(ql)),this.expandByPoint(Or.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new T,Yl=new T,Ro=new T,Ni=new T,$l=new T,Co=new T,Kl=new T,pa=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yl.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Ni.dot(this.direction),l=-Ni.dot(Ro),c=Ni.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yl).addScaledVector(Ro,d),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){$l.subVectors(t,e),Co.subVectors(n,e),Kl.crossVectors($l,Co);let o=this.direction.dot(Kl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(Ni,Co));if(l<0)return null;let c=a*this.direction.dot($l.cross(Ni));if(c<0||l+c>o)return null;let h=-a*Ni.dot(Kl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Fi.crossVectors(n,Pn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Fi.crossVectors(n,Pn)),Fi.normalize(),Po.crossVectors(Pn,Fi),s[0]=Fi.x,s[4]=Po.x,s[8]=Pn.x,s[1]=Fi.y,s[5]=Po.y,s[9]=Pn.y,s[2]=Fi.z,s[6]=Po.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],y=n[7],M=n[11],S=n[15],R=s[0],w=s[4],P=s[8],D=s[12],v=s[1],b=s[5],U=s[9],O=s[13],H=s[2],Z=s[6],V=s[10],ne=s[14],W=s[3],ge=s[7],ce=s[11],Se=s[15];return r[0]=o*R+a*v+l*H+c*W,r[4]=o*w+a*b+l*Z+c*ge,r[8]=o*P+a*U+l*V+c*ce,r[12]=o*D+a*O+l*ne+c*Se,r[1]=h*R+u*v+d*H+p*W,r[5]=h*w+u*b+d*Z+p*ge,r[9]=h*P+u*U+d*V+p*ce,r[13]=h*D+u*O+d*ne+p*Se,r[2]=g*R+x*v+m*H+f*W,r[6]=g*w+x*b+m*Z+f*ge,r[10]=g*P+x*U+m*V+f*ce,r[14]=g*D+x*O+m*ne+f*Se,r[3]=_*R+y*v+M*H+S*W,r[7]=_*w+y*b+M*Z+S*ge,r[11]=_*P+y*U+M*V+S*ce,r[15]=_*D+y*O+M*ne+S*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,S=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,R=t*_+n*y+s*M+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=_*w,e[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*w,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*w,e[4]=y*w,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*w,e[8]=M*w,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*f-t*u*f)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*w,e[12]=S*w,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,_=l*c,y=l*h,M=l*u,S=n.x,R=n.y,w=n.z;return s[0]=(1-(x+f))*S,s[1]=(p+M)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(d+f))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(g+y)*w,s[9]=(m-_)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,h=1/o,u=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=bi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,g;if(a===bi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,p=(n+s)*h,g,x;if(a===bi)g=(o+r)*u,x=-2*u;else if(a===ca)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new T,Gn=new $e,tm=new T(0,0,0),nm=new T(1,1,1),Fi=new T,Po=new T,Pn=new T,ud=new $e,dd=new It,Jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},im=0,fd=new T,zs=new It,gi=new $e,Io=new T,kr=new T,sm=new T,rm=new It,pd=new T(1,0,0),md=new T(0,1,0),gd=new T(0,0,1),vd={type:"added"},om={type:"removed"},Vs={type:"childadded",child:null},Zl={type:"childremoved",child:null},Gt=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Jt,n=new It,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(kr,Io,this.up):gi.lookAt(Io,kr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(gi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new T(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new T,vi=new T,Jl=new T,xi=new T,Gs=new T,Ws=new T,xd=new T,jl=new T,Ql=new T,ec=new T,tc=new je,nc=new je,ic=new je,Bi=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),vi.subVectors(n,t),Jl.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(vi),l=Wn.dot(Jl),c=vi.dot(vi),h=vi.dot(Jl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return tc.setScalar(0),nc.setScalar(0),ic.setScalar(0),tc.fromBufferAttribute(e,t),nc.fromBufferAttribute(e,n),ic.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(tc,r.x),o.addScaledVector(nc,r.y),o.addScaledVector(ic,r.z),o}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),vi.subVectors(e,t),Wn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Ws.subVectors(r,n),jl.subVectors(e,n);let l=Gs.dot(jl),c=Ws.dot(jl);if(l<=0&&c<=0)return t.copy(n);Ql.subVectors(e,s);let h=Gs.dot(Ql),u=Ws.dot(Ql);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Gs,o);ec.subVectors(e,r);let p=Gs.dot(ec),g=Ws.dot(ec);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ws,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(xd,a);let f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=qp(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Vl(e.r),this.g=Vl(e.g),this.b=Vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return ft.fromWorkingColorSpace(on.copy(this),e),Math.round(sn(on.r*255,0,255))*65536+Math.round(sn(on.g*255,0,255))*256+Math.round(sn(on.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=an){ft.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Uo);let n=Hl(Oi.h,Uo.h,t),s=Hl(Oi.s,Uo.s,t),r=Hl(Oi.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new xe;xe.NAMES=_f;var am=0,Ti=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Dn,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=Mc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dn&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_t=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new T,Lo=new ee,Ye=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}};var ga=class extends Ye{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var va=class extends Ye{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends Ye{constructor(e,t,n){super(new Float32Array(e),t,n)}},lm=0,Ln=new $e,rc=new Gt,Xs=new T,In=new wi,Br=new wi,Kt=new T,Ve=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?va:ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(In.min,Br.min),In.expandByPoint(Kt),Kt.addVectors(In.max,Br.max),In.expandByPoint(Kt)):(In.expandByPoint(Br.min),In.expandByPoint(Br.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Kt.add(Xs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new T,l[P]=new T;let c=new T,h=new T,u=new T,d=new ee,p=new ee,g=new ee,x=new T,m=new T;function f(P,D,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),a[P].add(x),a[D].add(x),a[v].add(x),l[P].add(m),l[D].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,D=_.length;P<D;++P){let v=_[P],b=v.start,U=v.count;for(let O=b,H=b+U;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new T,M=new T,S=new T,R=new T;function w(P){S.fromBufferAttribute(s,P),R.copy(S);let D=a[P];y.copy(D),y.sub(S.multiplyScalar(S.dot(D))).normalize(),M.crossVectors(R,D);let b=M.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,b)}for(let P=0,D=_.length;P<D;++P){let v=_[P],b=v.start,U=v.count;for(let O=b,H=b+U;O<H;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yd=new $e,as=new pa,Do=new Gi,_d=new T,No=new T,Fo=new T,Oo=new T,oc=new T,ko=new T,Md=new T,Bo=new T,G=class extends Gt{constructor(e=new Ve,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(oc.fromBufferAttribute(u,e),o?ko.addScaledVector(oc,h):ko.addScaledVector(oc.sub(t),h))}t.add(ko)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Do.containsPoint(as.origin)===!1&&(as.intersectSphere(Do,_d)===null||as.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(yd.copy(r).invert(),as.copy(e.ray).applyMatrix4(yd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,S=y;M<S;M+=3){let R=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);s=Ho(this,f,e,n,c,h,u,R,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Ho(this,o,e,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,S=y;M<S;M+=3){let R=M,w=M+1,P=M+2;s=Ho(this,f,e,n,c,h,u,R,w,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=m,y=m+1,M=m+2;s=Ho(this,o,e,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function cm(i,e,t,n,s,r,o,a){let l;if(e.side===yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:i}}function Ho(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Fo),i.getVertexPosition(c,Oo);let h=cm(i,e,t,n,No,Fo,Oo,Md);if(h){let u=new T;Bi.getBarycoord(Md,No,Fo,Oo,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,u,new ee)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new T,materialIndex:0};Bi.getNormal(No,Fo,Oo,d.normal),h.face=d,h.barycoord=u}return h}var Tt=class i extends Ve{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(x,m,f,_,y,M,S,R,w,P,D){let v=M/w,b=S/P,U=M/2,O=S/2,H=R/2,Z=w+1,V=P+1,ne=0,W=0,ge=new T;for(let ce=0;ce<V;ce++){let Se=ce*b-O;for(let nt=0;nt<Z;nt++){let at=nt*v-U;ge[x]=at*_,ge[m]=Se*y,ge[f]=H,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[f]=R>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(nt/w),u.push(1-ce/P),ne+=1}}for(let ce=0;ce<P;ce++)for(let Se=0;Se<w;Se++){let nt=d+Se+Z*ce,at=d+Se+Z*(ce+1),q=d+(Se+1)+Z*(ce+1),te=d+(Se+1)+Z*ce;l.push(nt,at,te),l.push(at,q,te),W+=6}a.addGroup(p,W,D),p+=W,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function hm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var um={clone:cr,merge:pn},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new T,Ed=new ee,bd=new ee,Vt=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,bd),t.subVectors(bd,Ed)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,ch=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new Vt(qs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new Vt(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Vt(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new Vt(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Vt(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hh=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Hi});r.uniforms.tEquirect.value=t;let o=new G(s,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Zt),new ch(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ac=new T,pm=new T,mm=new Je,_i=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mm.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Gi,zo=new T,Jr=class{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],_=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+_).normalize(),n[3].setComponents(l-o,d-h,m-g,M-_).normalize(),n[4].setComponents(l-a,d-u,m-x,M-y).normalize(),t===bi)n[5].setComponents(l+a,d+u,m+x,M+y).normalize();else if(t===ca)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ve=class i extends Ve{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let _=f*d-o;for(let y=0;y<c;y++){let M=y*u-r;g.push(M,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let y=_+c*f,M=_+c*(f+1),S=_+1+c*(f+1),R=_+1+c*f;p.push(y,M,R),p.push(M,S,R)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hm=`#define PI 3.141592653589793
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
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`
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
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`struct PhysicalMaterial {
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
}`,gg=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tv=`float getShadowMask() {
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
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,Sv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
}`,Fv=`#define NORMAL
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
}`,Ov=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,Hv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,Gv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:_m,alphatest_fragment:Mm,alphatest_pars_fragment:Em,aomap_fragment:bm,aomap_pars_fragment:Sm,batching_pars_vertex:wm,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Nm,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:km,color_vertex:Bm,common:Hm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:$m,envmap_fragment:Km,envmap_common_pars_fragment:Zm,envmap_pars_fragment:Jm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:cg,envmap_vertex:Qm,fog_vertex:eg,fog_pars_vertex:tg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Eg,map_fragment:bg,map_pars_fragment:Sg,map_particle_fragment:wg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Ug,morphtarget_vertex:Lg,normal_fragment_begin:Dg,normal_fragment_maps:Ng,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:kg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Gg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:$g,dithering_pars_fragment:Kg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:ov,specularmap_pars_fragment:av,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:hv,transmission_pars_fragment:uv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:_v,cube_frag:Mv,depth_vert:Ev,depth_frag:bv,distanceRGBA_vert:Sv,distanceRGBA_frag:wv,equirect_vert:Tv,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Iv,meshlambert_vert:Uv,meshlambert_frag:Lv,meshmatcap_vert:Dv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:kv,meshphong_frag:Bv,meshphysical_vert:Hv,meshphysical_frag:zv,meshtoon_vert:Vv,meshtoon_frag:Gv,points_vert:Wv,points_frag:Xv,shadow_vert:qv,shadow_frag:Yv,sprite_vert:$v,sprite_frag:Kv},le={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ei={basic:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:pn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:pn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:pn([le.points,le.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:pn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:pn([le.common,le.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:pn([le.sprite,le.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:pn([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:pn([le.lights,le.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ei.physical={uniforms:pn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Vo={r:0,b:0,g:0},cs=new Jt,Zv=new $e;function Jv(i,e,t,n,s,r,o){let a=new xe(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,M=g(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===La)?(h===void 0&&(h=new G(new Tt(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:cr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(cs)),h.material.toneMapped=ft.getTransfer(M.colorSpace)!==bt,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new G(new ve(2,2),new ae({name:"BackgroundMaterial",uniforms:cr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(Vo,Mf(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function jv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,b,U,O,H){let Z=!1,V=u(O,U,b);r!==V&&(r=V,c(r.object)),Z=p(v,O,U,H),Z&&g(v,O,U,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(v,b,U,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,b,U){let O=U.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let Z=H[b.id];Z===void 0&&(Z={},H[b.id]=Z);let V=Z[O];return V===void 0&&(V=d(l()),Z[O]=V),V}function d(v){let b=[],U=[],O=[];for(let H=0;H<t;H++)b[H]=0,U[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,b,U,O){let H=r.attributes,Z=b.attributes,V=0,ne=U.getAttributes();for(let W in ne)if(ne[W].location>=0){let ce=H[W],Se=Z[W];if(Se===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(v,b,U,O){let H={},Z=b.attributes,V=0,ne=U.getAttributes();for(let W in ne)if(ne[W].location>=0){let ce=Z[W];ce===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor));let Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),H[W]=Se,V++}r.attributes=H,r.attributesNum=V,r.index=O}function x(){let v=r.newAttributes;for(let b=0,U=v.length;b<U;b++)v[b]=0}function m(v){f(v,0)}function f(v,b){let U=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;U[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),H[v]!==b&&(i.vertexAttribDivisor(v,b),H[v]=b)}function _(){let v=r.newAttributes,b=r.enabledAttributes;for(let U=0,O=b.length;U<O;U++)b[U]!==v[U]&&(i.disableVertexAttribArray(U),b[U]=0)}function y(v,b,U,O,H,Z,V){V===!0?i.vertexAttribIPointer(v,b,U,H,Z):i.vertexAttribPointer(v,b,U,O,H,Z)}function M(v,b,U,O){x();let H=O.attributes,Z=U.getAttributes(),V=b.defaultAttributeValues;for(let ne in Z){let W=Z[ne];if(W.location>=0){let ge=H[ne];if(ge===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),ge!==void 0){let ce=ge.normalized,Se=ge.itemSize,nt=e.get(ge);if(nt===void 0)continue;let at=nt.buffer,q=nt.type,te=nt.bytesPerElement,Me=q===i.INT||q===i.UNSIGNED_INT||ge.gpuType===qh;if(ge.isInterleavedBufferAttribute){let j=ge.data,oe=j.stride,ue=ge.offset;if(j.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)f(W.location+Ce,j.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Ce=0;Ce<W.locationSize;Ce++)y(W.location+Ce,Se/W.locationSize,q,ce,oe*te,(ue+Se/W.locationSize*Ce)*te,Me)}else{if(ge.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)f(W.location+j,ge.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,at);for(let j=0;j<W.locationSize;j++)y(W.location+j,Se/W.locationSize,q,ce,Se*te,Se/W.locationSize*j*te,Me)}}else if(V!==void 0){let ce=V[ne];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}_()}function S(){P();for(let v in n){let b=n[v];for(let U in b){let O=b[U];for(let H in O)h(O[H].object),delete O[H];delete b[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let U in b){let O=b[U];for(let H in O)h(O[H].object),delete O[H];delete b[U]}delete n[v.id]}function w(v){for(let b in n){let U=n[b];if(U[v.id]===void 0)continue;let O=U[v.id];for(let H in O)h(O[H].object),delete O[H];delete U[v.id]}}function P(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Qv(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ex(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Si&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:R}}function tx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _i,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,M=f.clippingState||null;l.value=M,M=h(g,d,y,p);for(let S=0;S!==y;++S)M[S]=t[S];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nx(i){let e=new WeakMap;function t(o,a){return a===Cc?o.mapping=rr:a===Pc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cc||a===Pc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new hh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wi=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,Sd=[.125,.215,.35,.446,.526,.582],fs=20,lc=new Wi,wd=new xe,cc=null,hc=0,uc=0,dc=!1,us=(1+Math.sqrt(5))/2,$s=1/us,Td=[new T(-us,$s,0),new T(us,$s,0),new T(-$s,0,us),new T($s,0,us),new T(0,us,-$s),new T(0,us,$s),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ri=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ys,format:gn,colorSpace:ai,depthBuffer:!1},s=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,e,t)}return s}_compileMaterial(e){let t=new G(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wd),h.toneMapping=ii,h.autoClear=!1;let p=new _t({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new G(new Tt,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(wd),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;Go(s,_*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Td[(s-r-1)%Td.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new G(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let f=[],_=0;for(let w=0;w<fs;++w){let P=w/x,D=Math.exp(-P*P/2);f.push(D),w===0?_+=D:w<m&&(_+=2*D)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let M=this._sizeLods[s],S=3*M*(s>y-er?s-y+er:0),R=4*(this._cubeSize-M);Go(t,S,R,3*M,2*M),l.setRenderTarget(t),l.render(u,lc)}};function ix(i){let e=[],t=[],n=[],s=i,r=i-er+1+Sd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-er?l=Sd[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,P=R>2?0:-1,D=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(D,x*g*R),y.set(d,m*g*R);let v=[R,R,R,R,R,R];M.set(v,f*g*R)}let S=new Ve;S.setAttribute("position",new Ye(_,x)),S.setAttribute("uv",new Ye(y,m)),S.setAttribute("faceIndex",new Ye(M,f)),e.push(S),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(i,e,t){let n=new Xn(i,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sx(i,e,t){let n=new Float32Array(fs),s=new T(0,1,0);return new ae({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Rd(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cd(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function rx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cc||l===Pc,h=l===rr||l===or;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ri(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ri(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ax(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let y=0,M=_.length;y<M;y+=3){let S=_[y+0],R=_[y+1],w=_[y+2];d.push(S,R,R,w,w,S)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,M=_.length/3-1;y<M;y+=3){let S=y+0,R=y+1,w=y+2;d.push(S,R,R,w,w,S)}}else return;let m=new(yf(d)?va:ga)(d,1);m.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_];for(let _=0;_<x.length;_++)t.update(f,n,x[_])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){let n=new WeakMap,s=new je;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let D=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let R=new Float32Array(M*S*4*u),w=new fa(R,M,S,u);w.type=ni,w.needsUpdate=!0;let P=y*4;for(let v=0;v<u;v++){let b=m[v],U=f[v],O=_[v],H=M*S*4*v;for(let Z=0;Z<b.count;Z++){let V=Z*P;p===!0&&(s.fromBufferAttribute(b,Z),R[H+V+0]=s.x,R[H+V+1]=s.y,R[H+V+2]=s.z,R[H+V+3]=0),g===!0&&(s.fromBufferAttribute(U,Z),R[H+V+4]=s.x,R[H+V+5]=s.y,R[H+V+6]=s.z,R[H+V+7]=0),x===!0&&(s.fromBufferAttribute(O,Z),R[H+V+8]=s.x,R[H+V+9]=s.y,R[H+V+10]=s.z,R[H+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ee(M,S)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ux(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var _a=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h=tr){if(h!==tr&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=ms),n===void 0&&h===lr&&(n=ar),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bf=new ln,Pd=new _a(1,1),Sf=new fa,wf=new lh,Tf=new ya,Id=[],Ud=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Nd=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function gx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Nd.set(n),i.uniformMatrix2fv(this.addr,!1,Nd),Xt(t,n)}}function vx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Xt(t,n)}}function xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Xt(t,n)}}function yx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pd.compareFunction=vf,r=Pd):r=bf,t.setTexture2D(e||r,s)}function Rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function Cx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function Px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sf,s)}function Ix(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return vx;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return _x;case 35668:case 35672:return Mx;case 35669:case 35673:return Ex;case 5125:return bx;case 36294:return Sx;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Ux(i,e){i.uniform1fv(this.addr,e)}function Lx(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Dx(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Nx(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Fx(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ox(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kx(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bx(i,e){i.uniform1iv(this.addr,e)}function Hx(i,e){i.uniform2iv(this.addr,e)}function zx(i,e){i.uniform3iv(this.addr,e)}function Vx(i,e){i.uniform4iv(this.addr,e)}function Gx(i,e){i.uniform1uiv(this.addr,e)}function Wx(i,e){i.uniform2uiv(this.addr,e)}function Xx(i,e){i.uniform3uiv(this.addr,e)}function qx(i,e){i.uniform4uiv(this.addr,e)}function Yx(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||bf,r[o])}function $x(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function Kx(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function Zx(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sf,r[o])}function Jx(i){switch(i){case 5126:return Ux;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Fx;case 35675:return Ox;case 35676:return kx;case 5124:case 35670:return Bx;case 35667:case 35671:return Hx;case 35668:case 35672:return zx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}},dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}},fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Fd(i,e){i.seq.push(e),i.map[e.id]=e}function jx(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),o=fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(t,c===void 0?new uh(a,i,e):new dh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new fh(a),Fd(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qx=37297,e1=0;function t1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function n1(i){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i),n;switch(e===t?n="":e===la&&t===aa?n="LinearDisplayP3ToLinearSRGB":e===aa&&t===la&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case Da:return[n,"LinearTransferOETF"];case an:case Qh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+t1(i.getShaderSource(e),o)}else return s}function i1(i,e){let t=n1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s1(i,e){let t;switch(e){case Rp:t="Linear";break;case Cp:t="Reinhard";break;case Pp:t="Cineon";break;case Ip:t="ACESFilmic";break;case Lp:t="AgX";break;case Dp:t="Neutral";break;case Up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wo=new T;function r1(){ft.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function a1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qr(i){return i!==""}function Bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(c1,u1)}var h1=new Map;function u1(i,e){let t=Ze[e];if(t===void 0){let n=h1.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}var d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(d1,f1)}function f1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function p1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function m1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function v1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rf:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function x1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=p1(t),c=m1(t),h=g1(t),u=v1(t),d=x1(t),p=o1(t),g=a1(r),x=s.createProgram(),m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),f=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?s1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),r1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=ph(o),o=Bd(o,t),o=Hd(o,t),a=ph(a),a=Bd(a,t),a=Hd(a,t),o=zd(o),a=zd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=_+m+o,M=_+f+a,S=Od(s,s.VERTEX_SHADER,y),R=Od(s,s.FRAGMENT_SHADER,M);s.attachShader(x,S),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(b){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(S).trim(),H=s.getShaderInfoLog(R).trim(),Z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,R);else{let ne=kd(s,S,"vertex"),W=kd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+ne+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||H==="")&&(V=!1);V&&(b.diagnostics={runnable:Z,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(S),s.deleteShader(R),P=new ir(s,x),D=l1(s,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let D;this.getAttributes=function(){return D===void 0&&w(this),D};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Qx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=R,this}var _1=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gh(e),t.set(e,n)),n}},gh=class{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}};function M1(i,e,t,n,s,r,o){let a=new ma,l=new mh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,b,U,O,H){let Z=O.fog,V=H.geometry,ne=v.isMeshStandardMaterial?O.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||ne),ge=W&&W.mapping===La?W.image.height:null,ce=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let Se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=Se!==void 0?Se.length:0,at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let q,te,Me,j;if(ce){let Mn=ei[ce];q=Mn.vertexShader,te=Mn.fragmentShader}else q=v.vertexShader,te=v.fragmentShader,l.update(v),Me=l.getVertexShaderID(v),j=l.getFragmentShaderID(v);let oe=i.getRenderTarget(),ue=H.isInstancedMesh===!0,Ce=H.isBatchedMesh===!0,Fe=!!v.map,We=!!v.matcap,I=!!W,tn=!!v.aoMap,Ke=!!v.lightMap,lt=!!v.bumpMap,Be=!!v.normalMap,Mt=!!v.displacementMap,Ge=!!v.emissiveMap,C=!!v.metalnessMap,E=!!v.roughnessMap,k=v.anisotropy>0,K=v.clearcoat>0,Q=v.dispersion>0,Y=v.iridescence>0,Pe=v.sheen>0,he=v.transmission>0,ye=k&&!!v.anisotropyMap,ct=K&&!!v.clearcoatMap,ie=K&&!!v.clearcoatNormalMap,Ee=K&&!!v.clearcoatRoughnessMap,He=Y&&!!v.iridescenceMap,ze=Y&&!!v.iridescenceThicknessMap,be=Pe&&!!v.sheenColorMap,it=Pe&&!!v.sheenRoughnessMap,qe=!!v.specularMap,xt=!!v.specularColorMap,L=!!v.specularIntensityMap,pe=he&&!!v.transmissionMap,X=he&&!!v.thicknessMap,J=!!v.gradientMap,de=!!v.alphaMap,me=v.alphaTest>0,rt=!!v.alphaHash,Bt=!!v.extensions,_n=ii;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_n=i.toneMapping);let ht={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:te,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&H._colorsTexture!==null,instancing:ue,instancingColor:ue&&H.instanceColor!==null,instancingMorph:ue&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ai,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:We,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:ge,aoMap:tn,lightMap:Ke,bumpMap:lt,normalMap:Be,displacementMap:p&&Mt,emissiveMap:Ge,normalMapObjectSpace:Be&&v.normalMapType===kp,normalMapTangentSpace:Be&&v.normalMapType===gf,metalnessMap:C,roughnessMap:E,anisotropy:k,anisotropyMap:ye,clearcoat:K,clearcoatMap:ct,clearcoatNormalMap:ie,clearcoatRoughnessMap:Ee,dispersion:Q,iridescence:Y,iridescenceMap:He,iridescenceThicknessMap:ze,sheen:Pe,sheenColorMap:be,sheenRoughnessMap:it,specularMap:qe,specularColorMap:xt,specularIntensityMap:L,transmission:he,transmissionMap:pe,thicknessMap:X,gradientMap:J,opaque:v.transparent===!1&&v.blending===Dn&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:me,alphaHash:rt,combine:v.combine,mapUv:Fe&&m(v.map.channel),aoMapUv:tn&&m(v.aoMap.channel),lightMapUv:Ke&&m(v.lightMap.channel),bumpMapUv:lt&&m(v.bumpMap.channel),normalMapUv:Be&&m(v.normalMap.channel),displacementMapUv:Mt&&m(v.displacementMap.channel),emissiveMapUv:Ge&&m(v.emissiveMap.channel),metalnessMapUv:C&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:ye&&m(v.anisotropyMap.channel),clearcoatMapUv:ct&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&m(v.sheenRoughnessMap.channel),specularMapUv:qe&&m(v.specularMap.channel),specularColorMapUv:xt&&m(v.specularColorMap.channel),specularIntensityMapUv:L&&m(v.specularIntensityMap.channel),transmissionMapUv:pe&&m(v.transmissionMap.channel),thicknessMapUv:X&&m(v.thicknessMap.channel),alphaMapUv:de&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Be||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(Fe||de),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:_n,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Bt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&v.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function _(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function S(v){let b=x[v.type],U;if(b){let O=ei[b];U=um.clone(O.uniforms)}else U=v.uniforms;return U}function R(v,b){let U;for(let O=0,H=h.length;O<H;O++){let Z=h[O];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new y1(i,b,v,r),h.push(U)),U}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:D}}function E1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function b1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||b1),n.length>1&&n.sort(d||Gd),s.length>1&&s.sort(d||Gd)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function S1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Wd,i.set(n,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function w1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new xe};break;case"SpotLight":t={position:new T,direction:new T,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function T1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var A1=0;function R1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C1(i){let e=new w1,t=T1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new $e,o=new $e;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,y=0,M=0,S=0,R=0,w=0;c.sort(R1);for(let D=0,v=c.length;D<v;D++){let b=c[D],U=b.color,O=b.intensity,H=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],O);w++}else if(b.isDirectionalLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let ne=b.shadow,W=t.get(b);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=b.shadow.matrix,_++}n.directional[p]=V,p++}else if(b.isSpotLight){let V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(U).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[x]=V;let ne=b.shadow;if(b.map&&(n.spotLightMap[S]=b.map,S++,ne.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[x]=ne.matrix,b.castShadow){let W=t.get(b);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Z,M++}x++}else if(b.isRectAreaLight){let V=e.get(b);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=V,m++}else if(b.isPointLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){let ne=b.shadow,W=t.get(b);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=V,g++}else if(b.isHemisphereLight){let V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(O),V.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==S||P.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=S,P.numLightProbes=w,n.version=A1++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let y=c[f];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Xd(i){let e=new C1(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function P1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xd(i),e.set(s,[a])):r>=o.length?(a=new Xd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vh=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xh=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
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
}`;function L1(i,e,t){let n=new Jr,s=new ee,r=new ee,o=new je,a=new vh({depthPacking:Op}),l=new xh,c={},h=t.maxTextureSize,u={[si]:yt,[yt]:si,[Qe]:Qe},d=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:I1,fragmentShader:U1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new G(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sf;let f=this.type;this.render=function(R,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let D=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Hi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=f!==yi&&this.type===yi,H=f===yi&&this.type!==yi;for(let Z=0,V=R.length;Z<V;Z++){let ne=R[Z],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ge=W.getFrameExtents();if(s.multiply(ge),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,W.mapSize.y=r.y)),W.map===null||O===!0||H===!0){let Se=this.type!==yi?{minFilter:En,magFilter:En}:{};W.map!==null&&W.map.dispose(),W.map=new Xn(s.x,s.y,Se),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ce=W.getViewportCount();for(let Se=0;Se<ce;Se++){let nt=W.getViewport(Se);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),U.viewport(o),W.updateMatrices(ne,Se),n=W.getFrustum(),M(w,P,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===yi&&_(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(D,v,b)};function _(R,w){let P=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,P,p,x,null)}function y(R,w,P,D){let v=null,b=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)v=b;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=v.uuid,O=w.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let Z=H[O];Z===void 0&&(Z=v.clone(),H[O]=Z,w.addEventListener("dispose",S)),v=Z}if(v.visible=w.visible,v.wireframe=w.wireframe,D===yi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=P}return v}function M(R,w,P,D,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===yi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let O=e.update(R),H=R.material;if(Array.isArray(H)){let Z=O.groups;for(let V=0,ne=Z.length;V<ne;V++){let W=Z[V],ge=H[W.materialIndex];if(ge&&ge.visible){let ce=y(R,ge,D,v);R.onBeforeShadow(i,R,w,P,O,ce,W),i.renderBufferDirect(P,null,O,ce,R,W),R.onAfterShadow(i,R,w,P,O,ce,W)}}}else if(H.visible){let Z=y(R,H,D,v);R.onBeforeShadow(i,R,w,P,O,Z,null),i.renderBufferDirect(P,null,O,Z,R,null),R.onAfterShadow(i,R,w,P,O,Z,null)}}let U=R.children;for(let O=0,H=U.length;O<H;O++)M(U[O],w,P,D,v)}function S(R){R.target.removeEventListener("dispose",S);for(let P in c){let D=c[P],v=R.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}var D1={[Ec]:bc,[Sc]:Ac,[wc]:Rc,[sr]:Tc,[bc]:Ec,[Ac]:Sc,[Rc]:wc,[Tc]:sr};function N1(i){function e(){let L=!1,pe=new je,X=null,J=new je(0,0,0,0);return{setMask:function(de){X!==de&&!L&&(i.colorMask(de,de,de,de),X=de)},setLocked:function(de){L=de},setClear:function(de,me,rt,Bt,_n){_n===!0&&(de*=Bt,me*=Bt,rt*=Bt),pe.set(de,me,rt,Bt),J.equals(pe)===!1&&(i.clearColor(de,me,rt,Bt),J.copy(pe))},reset:function(){L=!1,X=null,J.set(-1,0,0,0)}}}function t(){let L=!1,pe=!1,X=null,J=null,de=null;return{setReversed:function(me){pe=me},setTest:function(me){me?Me(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(me){X!==me&&!L&&(i.depthMask(me),X=me)},setFunc:function(me){if(pe&&(me=D1[me]),J!==me){switch(me){case Ec:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=me}},setLocked:function(me){L=me},setClear:function(me){de!==me&&(i.clearDepth(me),de=me)},reset:function(){L=!1,X=null,J=null,de=null}}}function n(){let L=!1,pe=null,X=null,J=null,de=null,me=null,rt=null,Bt=null,_n=null;return{setTest:function(ht){L||(ht?Me(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ht){pe!==ht&&!L&&(i.stencilMask(ht),pe=ht)},setFunc:function(ht,Mn,fi){(X!==ht||J!==Mn||de!==fi)&&(i.stencilFunc(ht,Mn,fi),X=ht,J=Mn,de=fi)},setOp:function(ht,Mn,fi){(me!==ht||rt!==Mn||Bt!==fi)&&(i.stencilOp(ht,Mn,fi),me=ht,rt=Mn,Bt=fi)},setLocked:function(ht){L=ht},setClear:function(ht){_n!==ht&&(i.clearStencil(ht),_n=ht)},reset:function(){L=!1,pe=null,X=null,J=null,de=null,me=null,rt=null,Bt=null,_n=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,_=null,y=null,M=null,S=null,R=new xe(0,0,0),w=0,P=!1,D=null,v=null,b=null,U=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,V=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=V>=2);let W=null,ge={},ce=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),nt=new je().fromArray(ce),at=new je().fromArray(Se);function q(L,pe,X,J){let de=new Uint8Array(4),me=i.createTexture();i.bindTexture(L,me),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<X;rt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(pe+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return me}let te={};te[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(sr),Ke(!1),lt(Qu),Me(i.CULL_FACE),I(Hi);function Me(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function j(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function oe(L,pe){return h[L]!==pe?(i.bindFramebuffer(L,pe),h[L]=pe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ue(L,pe){let X=d,J=!1;if(L){X=u.get(pe),X===void 0&&(X=[],u.set(pe,X));let de=L.textures;if(X.length!==de.length||X[0]!==i.COLOR_ATTACHMENT0){for(let me=0,rt=de.length;me<rt;me++)X[me]=i.COLOR_ATTACHMENT0+me;X.length=de.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function Ce(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let Fe={[ds]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};Fe[up]=i.MIN,Fe[dp]=i.MAX;let We={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[yp]:i.DST_COLOR,[vp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[_p]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Ep]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[wp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,pe,X,J,de,me,rt,Bt,_n,ht){if(L===Hi){g===!0&&(j(i.BLEND),g=!1);return}if(g===!1&&(Me(i.BLEND),g=!0),L!==lp){if(L!==x||ht!==P){if((m!==ds||y!==ds)&&(i.blendEquation(i.FUNC_ADD),m=ds,y=ds),ht)switch(L){case Dn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case De:i.blendFunc(i.ONE,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case De:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,_=null,M=null,S=null,R.set(0,0,0),w=0,x=L,P=ht}return}de=de||pe,me=me||X,rt=rt||J,(pe!==m||de!==y)&&(i.blendEquationSeparate(Fe[pe],Fe[de]),m=pe,y=de),(X!==f||J!==_||me!==M||rt!==S)&&(i.blendFuncSeparate(We[X],We[J],We[me],We[rt]),f=X,_=J,M=me,S=rt),(Bt.equals(R)===!1||_n!==w)&&(i.blendColor(Bt.r,Bt.g,Bt.b,_n),R.copy(Bt),w=_n),x=L,P=!1}function tn(L,pe){L.side===Qe?j(i.CULL_FACE):Me(i.CULL_FACE);let X=L.side===yt;pe&&(X=!X),Ke(X),L.blending===Dn&&L.transparent===!1?I(Hi):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function lt(L){L!==rp?(Me(i.CULL_FACE),L!==v&&(L===Qu?i.cullFace(i.BACK):L===op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),v=L}function Be(L){L!==b&&(Z&&i.lineWidth(L),b=L)}function Mt(L,pe,X){L?(Me(i.POLYGON_OFFSET_FILL),(U!==pe||O!==X)&&(i.polygonOffset(pe,X),U=pe,O=X)):j(i.POLYGON_OFFSET_FILL)}function Ge(L){L?Me(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function C(L){L===void 0&&(L=i.TEXTURE0+H-1),W!==L&&(i.activeTexture(L),W=L)}function E(L,pe,X){X===void 0&&(W===null?X=i.TEXTURE0+H-1:X=W);let J=ge[X];J===void 0&&(J={type:void 0,texture:void 0},ge[X]=J),(J.type!==L||J.texture!==pe)&&(W!==X&&(i.activeTexture(X),W=X),i.bindTexture(L,pe||te[L]),J.type=L,J.texture=pe)}function k(){let L=ge[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(L){nt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function be(L){at.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function it(L,pe){let X=l.get(pe);X===void 0&&(X=new WeakMap,l.set(pe,X));let J=X.get(L);J===void 0&&(J=i.getUniformBlockIndex(pe,L.name),X.set(L,J))}function qe(L,pe){let J=l.get(pe).get(L);a.get(pe)!==J&&(i.uniformBlockBinding(pe,J,L.__bindingPointIndex),a.set(pe,J))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ge={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,_=null,y=null,M=null,S=null,R=new xe(0,0,0),w=0,P=!1,D=null,v=null,b=null,U=null,O=null,nt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Me,disable:j,bindFramebuffer:oe,drawBuffers:ue,useProgram:Ce,setBlending:I,setMaterial:tn,setFlipSided:Ke,setCullFace:lt,setLineWidth:Be,setPolygonOffset:Mt,setScissorTest:Ge,activeTexture:C,bindTexture:E,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:Ee,texImage3D:He,updateUBOMapping:it,uniformBlockBinding:qe,texStorage2D:ct,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Pe,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:ze,viewport:be,reset:xt}}function qd(i,e,t,n){let s=F1(n);switch(t){case hf:return i*e;case df:return i*e;case ff:return i*e*2;case Kh:return i*e/s.components*s.byteLength;case Zh:return i*e/s.components*s.byteLength;case pf:return i*e*2/s.components*s.byteLength;case Jh:return i*e*2/s.components*s.byteLength;case uf:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case jh:return i*e*4/s.components*s.byteLength;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Nc:return Math.max(i,16)*Math.max(e,8)/4;case Uc:case Dc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ia:case Qc:case eh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mf:case th:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F1(i){switch(i){case Si:case af:return{byteLength:1,components:1};case Zr:case lf:case ys:return{byteLength:2,components:1};case Yh:case $h:return{byteLength:2,components:4};case ms:case qh:case ni:return{byteLength:4,components:1};case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function O1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):ua("canvas")}function x(C,E,k){let K=1,Q=Ge(C);if((Q.width>k||Q.height>k)&&(K=k/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(K*Q.width),Pe=Math.floor(K*Q.height);u===void 0&&(u=g(Y,Pe));let he=E?g(Y,Pe):u;return he.width=Y,he.height=Pe,he.getContext("2d").drawImage(C,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Pe+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==En&&C.minFilter!==Zt}function f(C){i.generateMipmap(C)}function _(C,E,k,K,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=E;if(E===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),E===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),E===i.RGBA){let Pe=Q?oa:ft.getTransfer(K);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Pe===bt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(C,E){let k;return C?E===null||E===ms||E===ar?k=i.DEPTH24_STENCIL8:E===ni?k=i.DEPTH32F_STENCIL8:E===Zr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ms||E===ar?k=i.DEPTH_COMPONENT24:E===ni?k=i.DEPTH_COMPONENT32F:E===Zr&&(k=i.DEPTH_COMPONENT16),k}function M(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){let E=C.target;E.removeEventListener("dispose",S),w(E),E.isVideoTexture&&h.delete(E)}function R(C){let E=C.target;E.removeEventListener("dispose",R),D(E)}function w(C){let E=n.get(C);if(E.__webglInit===void 0)return;let k=C.source,K=d.get(k);if(K){let Q=K[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(K).length===0&&d.delete(k)}n.remove(C)}function P(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let k=C.source,K=d.get(k);delete K[E.__cacheKey],o.memory.textures--}function D(C){let E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Q=0;Q<E.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=C.textures;for(let K=0,Q=k.length;K<Q;K++){let Y=n.get(k[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(C)}let v=0;function b(){v=0}function U(){let C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function O(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){let k=n.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,C,E);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function Z(C,E){let k=n.get(C);if(C.version>0&&k.__version!==C.version){at(k,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function V(C,E){let k=n.get(C);if(C.version>0&&k.__version!==C.version){at(k,C,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function ne(C,E){let k=n.get(C);if(C.version>0&&k.__version!==C.version){q(k,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let W={[ps]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ic]:i.MIRRORED_REPEAT},ge={[En]:i.NEAREST,[Np]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ce={[Bp]:i.NEVER,[Xp]:i.ALWAYS,[Hp]:i.LESS,[vf]:i.LEQUAL,[zp]:i.EQUAL,[Wp]:i.GEQUAL,[Vp]:i.GREATER,[Gp]:i.NOTEQUAL};function Se(C,E){if(E.type===ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===Ol||E.magFilter===So||E.magFilter===Ei||E.minFilter===Zt||E.minFilter===Ol||E.minFilter===So||E.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ge[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==So&&E.minFilter!==Ei||E.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function nt(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));let K=E.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let Y=O(E);if(Y!==C.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Y].usedTimes++;let Pe=Q[C.__cacheKey];Pe!==void 0&&(Q[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(E)),C.__cacheKey=Y,C.__webglTexture=Q[Y].texture}return k}function at(C,E,k){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let Q=nt(C,E),Y=E.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+k);let Pe=n.get(Y);if(Y.version!==Pe.__version||Q===!0){t.activeTexture(i.TEXTURE0+k);let he=ft.getPrimaries(ft.workingColorSpace),ye=E.colorSpace===mn?null:ft.getPrimaries(E.colorSpace),ct=E.colorSpace===mn||he===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ie=x(E.image,!1,s.maxTextureSize);ie=Mt(E,ie);let Ee=r.convert(E.format,E.colorSpace),He=r.convert(E.type),ze=_(E.internalFormat,Ee,He,E.colorSpace,E.isVideoTexture);Se(K,E);let be,it=E.mipmaps,qe=E.isVideoTexture!==!0,xt=Pe.__version===void 0||Q===!0,L=Y.dataReady,pe=M(E,ie);if(E.isDepthTexture)ze=y(E.format===lr,E.type),xt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ze,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ze,ie.width,ie.height,0,Ee,He,null));else if(E.isDataTexture)if(it.length>0){qe&&xt&&t.texStorage2D(i.TEXTURE_2D,pe,ze,it[0].width,it[0].height);for(let X=0,J=it.length;X<J;X++)be=it[X],qe?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,Ee,He,be.data):t.texImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,Ee,He,be.data);E.generateMipmaps=!1}else qe?(xt&&t.texStorage2D(i.TEXTURE_2D,pe,ze,ie.width,ie.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Ee,He,ie.data)):t.texImage2D(i.TEXTURE_2D,0,ze,ie.width,ie.height,0,Ee,He,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ze,it[0].width,it[0].height,ie.depth);for(let X=0,J=it.length;X<J;X++)if(be=it[X],E.format!==gn)if(Ee!==null)if(qe){if(L)if(E.layerUpdates.size>0){let de=qd(be.width,be.height,E.format,E.type);for(let me of E.layerUpdates){let rt=be.data.subarray(me*de/be.data.BYTES_PER_ELEMENT,(me+1)*de/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,me,be.width,be.height,1,Ee,rt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,ie.depth,Ee,be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,be.width,be.height,ie.depth,Ee,He,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ze,be.width,be.height,ie.depth,0,Ee,He,be.data)}else{qe&&xt&&t.texStorage2D(i.TEXTURE_2D,pe,ze,it[0].width,it[0].height);for(let X=0,J=it.length;X<J;X++)be=it[X],E.format!==gn?Ee!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,be.width,be.height,Ee,He,be.data):t.texImage2D(i.TEXTURE_2D,X,ze,be.width,be.height,0,Ee,He,be.data)}else if(E.isDataArrayTexture)if(qe){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ze,ie.width,ie.height,ie.depth),L)if(E.layerUpdates.size>0){let X=qd(ie.width,ie.height,E.format,E.type);for(let J of E.layerUpdates){let de=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,Ee,He,de)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,He,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ie.width,ie.height,ie.depth,0,Ee,He,ie.data);else if(E.isData3DTexture)qe?(xt&&t.texStorage3D(i.TEXTURE_3D,pe,ze,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,He,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ie.width,ie.height,ie.depth,0,Ee,He,ie.data);else if(E.isFramebufferTexture){if(xt)if(qe)t.texStorage2D(i.TEXTURE_2D,pe,ze,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let de=0;de<pe;de++)t.texImage2D(i.TEXTURE_2D,de,ze,X,J,0,Ee,He,null),X>>=1,J>>=1}}else if(it.length>0){if(qe&&xt){let X=Ge(it[0]);t.texStorage2D(i.TEXTURE_2D,pe,ze,X.width,X.height)}for(let X=0,J=it.length;X<J;X++)be=it[X],qe?L&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ee,He,be):t.texImage2D(i.TEXTURE_2D,X,ze,Ee,He,be);E.generateMipmaps=!1}else if(qe){if(xt){let X=Ge(ie);t.texStorage2D(i.TEXTURE_2D,pe,ze,X.width,X.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,He,ie)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,He,ie);m(E)&&f(K),Pe.__version=Y.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function q(C,E,k){if(E.image.length!==6)return;let K=nt(C,E),Q=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let Y=n.get(Q);if(Q.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let Pe=ft.getPrimaries(ft.workingColorSpace),he=E.colorSpace===mn?null:ft.getPrimaries(E.colorSpace),ye=E.colorSpace===mn||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ct=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let J=0;J<6;J++)!ct&&!ie?Ee[J]=x(E.image[J],!0,s.maxCubemapSize):Ee[J]=ie?E.image[J].image:E.image[J],Ee[J]=Mt(E,Ee[J]);let He=Ee[0],ze=r.convert(E.format,E.colorSpace),be=r.convert(E.type),it=_(E.internalFormat,ze,be,E.colorSpace),qe=E.isVideoTexture!==!0,xt=Y.__version===void 0||K===!0,L=Q.dataReady,pe=M(E,He);Se(i.TEXTURE_CUBE_MAP,E);let X;if(ct){qe&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,it,He.width,He.height);for(let J=0;J<6;J++){X=Ee[J].mipmaps;for(let de=0;de<X.length;de++){let me=X[de];E.format!==gn?ze!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,it,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,me.width,me.height,ze,be,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,it,me.width,me.height,0,ze,be,me.data)}}}else{if(X=E.mipmaps,qe&&xt){X.length>0&&pe++;let J=Ge(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,it,J.width,J.height)}for(let J=0;J<6;J++)if(ie){qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee[J].width,Ee[J].height,ze,be,Ee[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,it,Ee[J].width,Ee[J].height,0,ze,be,Ee[J].data);for(let de=0;de<X.length;de++){let rt=X[de].image[J].image;qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,rt.width,rt.height,ze,be,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,it,rt.width,rt.height,0,ze,be,rt.data)}}else{qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ze,be,Ee[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,it,ze,be,Ee[J]);for(let de=0;de<X.length;de++){let me=X[de];qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,ze,be,me.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,it,ze,be,me.image[J])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function te(C,E,k,K,Q,Y){let Pe=r.convert(k.format,k.colorSpace),he=r.convert(k.type),ye=_(k.internalFormat,Pe,he,k.colorSpace);if(!n.get(E).__hasExternalTextures){let ie=Math.max(1,E.width>>Y),Ee=Math.max(1,E.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,ye,ie,Ee,E.depth,0,Pe,he,null):t.texImage2D(Q,Y,ye,ie,Ee,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,n.get(k).__webglTexture,0,Ke(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,n.get(k).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(C,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){let K=E.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Y=y(E.stencilBuffer,Q),Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ke(E);lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{let K=E.textures;for(let Q=0;Q<K.length;Q++){let Y=K[Q],Pe=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),ye=_(Y.internalFormat,Pe,he,Y.colorSpace),ct=Ke(E);k&&lt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ye,E.width,E.height):lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let K=n.get(E.depthTexture).__webglTexture,Q=Ke(E);if(E.depthTexture.format===tr)lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(E.depthTexture.format===lr)lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function oe(C){let E=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");j(E.__webglFramebuffer,C)}else if(k){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),Me(E.__webglDepthbuffer[K],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Me(E.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,E,k){let K=n.get(C);E!==void 0&&te(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&oe(C)}function Ce(C){let E=C.texture,k=n.get(C),K=n.get(E);C.addEventListener("dispose",R);let Q=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Pe=Q.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let ye=0;ye<E.mipmaps.length;ye++)k.__webglFramebuffer[he][ye]=i.createFramebuffer()}else k.__webglFramebuffer[he]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)k.__webglFramebuffer[he]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,ye=Q.length;he<ye;he++){let ct=n.get(Q[he]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&lt(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let ye=Q[he];k.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[he]);let ct=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),Ee=_(ye.internalFormat,ct,ie,ye.colorSpace,C.isXRRenderTarget===!0),He=Ke(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,k.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Se(i.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(k.__webglFramebuffer[he][ye],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else te(k.__webglFramebuffer[he],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,ye=Q.length;he<ye;he++){let ct=Q[he],ie=n.get(ct);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Se(i.TEXTURE_2D,ct),te(k.__webglFramebuffer,C,ct,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(ct)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),Se(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(k.__webglFramebuffer[ye],C,E,i.COLOR_ATTACHMENT0,he,ye);else te(k.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,he,0);m(E)&&f(he),t.unbindTexture()}C.depthBuffer&&oe(C)}function Fe(C){let E=C.textures;for(let k=0,K=E.length;k<K;k++){let Q=E[k];if(m(Q)){let Y=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(Q).__webglTexture;t.bindTexture(Y,Pe),f(Y),t.unbindTexture()}}}let We=[],I=[];function tn(C){if(C.samples>0){if(lt(C)===!1){let E=C.textures,k=C.width,K=C.height,Q=i.COLOR_BUFFER_BIT,Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),he=E.length>1;if(he)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);let ct=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,Q,i.NEAREST),l===!0&&(We.length=0,I.length=0,We.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);let ct=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ke(C){return Math.min(s.maxSamples,C.samples)}function lt(C){let E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Mt(C,E){let k=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ai&&k!==mn&&(ft.getTransfer(k)===bt?(K!==gn||Q!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=ue,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=lt}function k1(i,e){function t(n,s=mn){let r,o=ft.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Yh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$h)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.BYTE;if(n===lf)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===qh)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===uf)return i.RGB;if(n===gn)return i.RGBA;if(n===df)return i.LUMINANCE;if(n===ff)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Kh)return i.RED;if(n===Zh)return i.RED_INTEGER;if(n===pf)return i.RG;if(n===Jh)return i.RG_INTEGER;if(n===jh)return i.RGBA_INTEGER;if(n===Qo||n===ea||n===ta||n===na)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Lc||n===Dc||n===Nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Oc||n===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fc||n===Oc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bc||n===Hc||n===zc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Kc||n===Zc||n===Jc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===Qc||n===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===th||n===nh||n===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var yh=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},B1={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ae({vertexShader:H1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=new _h,m=t.getContextAttributes(),f=null,_=null,y=[],M=[],S=new ee,R=null,w=new Vt;w.layers.enable(1),w.viewport=new je;let P=new Vt;P.layers.enable(2),P.viewport=new je;let D=[w,P],v=new yh;v.layers.enable(1),v.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=y[q];return te===void 0&&(te=new Yr,y[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=y[q];return te===void 0&&(te=new Yr,y[q]=te),te.getGripSpace()},this.getHand=function(q){let te=y[q];return te===void 0&&(te=new Yr,y[q]=te),te.getHandSpace()};function O(q){let te=M.indexOf(q.inputSource);if(te===-1)return;let Me=y[te];Me!==void 0&&(Me.update(q.inputSource,q.frame,c||o),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){let te=M[q];te!==null&&(M[q]=null,y[q].disconnect(te))}b=null,U=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,_=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Xn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Me=null,j=null;m.depth&&(j=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?lr:tr,Me=m.stencil?ar:ms);let oe={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Xn(d.textureWidth,d.textureHeight,{format:gn,type:Si,depthTexture:new _a(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(q){for(let te=0;te<q.removed.length;te++){let Me=q.removed[te],j=M.indexOf(Me);j>=0&&(M[j]=null,y[j].disconnect(Me))}for(let te=0;te<q.added.length;te++){let Me=q.added[te],j=M.indexOf(Me);if(j===-1){for(let ue=0;ue<y.length;ue++)if(ue>=M.length){M.push(Me),j=ue;break}else if(M[ue]===null){M[ue]=Me,j=ue;break}if(j===-1)break}let oe=y[j];oe&&oe.connect(Me)}}let V=new T,ne=new T;function W(q,te,Me){V.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(Me.matrixWorld);let j=V.distanceTo(ne),oe=te.projectionMatrix.elements,ue=Me.projectionMatrix.elements,Ce=oe[14]/(oe[10]-1),Fe=oe[14]/(oe[10]+1),We=(oe[9]+1)/oe[5],I=(oe[9]-1)/oe[5],tn=(oe[8]-1)/oe[0],Ke=(ue[8]+1)/ue[0],lt=Ce*tn,Be=Ce*Ke,Mt=j/(-tn+Ke),Ge=Mt*-tn;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ge),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),oe[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let C=Ce+Mt,E=Fe+Mt,k=lt-Ge,K=Be+(j-Ge),Q=We*Fe/E*C,Y=I*Fe/E*C;q.projectionMatrix.makePerspective(k,K,Q,Y,C,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ge(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,Me=q.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),v.near=P.near=w.near=te,v.far=P.far=w.far=Me,(b!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,U=v.far);let j=q.parent,oe=v.cameras;ge(v,j);for(let ue=0;ue<oe.length;ue++)ge(oe[ue],j);oe.length===2?W(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),ce(q,v,j)};function ce(q,te,Me){Me===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ha*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Se=null;function nt(q,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let j=!1;Me.length!==v.cameras.length&&(v.cameras.length=0,j=!0);for(let ue=0;ue<Me.length;ue++){let Ce=Me[ue],Fe=null;if(p!==null)Fe=p.getViewport(Ce);else{let I=u.getViewSubImage(d,Ce);Fe=I.viewport,ue===0&&(e.setRenderTargetTextures(_,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(_))}let We=D[ue];We===void 0&&(We=new Vt,We.layers.enable(ue),We.viewport=new je,D[ue]=We),We.matrix.fromArray(Ce.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ce.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ue===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),j===!0&&v.cameras.push(We)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){let ue=u.getDepthInformation(Me[0]);ue&&ue.isValid&&ue.texture&&x.init(e,ue,s.renderState)}}for(let Me=0;Me<y.length;Me++){let j=M[Me],oe=y[Me];j!==null&&oe!==void 0&&oe.update(j,te,c||o)}Se&&Se(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let at=new Ef;at.setAnimationLoop(nt),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}},hs=new Jt,V1=new $e;function G1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Mf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,hs.copy(M),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(hs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let M=y.program;n.uniformBlockBinding(_,M)}function c(_,y){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(_,S);let R=e.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){let y=u();_.__bindingPointIndex=y;let M=i.createBuffer(),S=_.__size,R=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],M=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,w=M.length;R<w;R++){let P=Array.isArray(M[R])?M[R]:[M[R]];for(let D=0,v=P.length;D<v;D++){let b=P[D];if(p(b,R,D,S)===!0){let U=b.__offset,O=Array.isArray(b.value)?b.value:[b.value],H=0;for(let Z=0;Z<O.length;Z++){let V=O[Z],ne=x(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+H,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,M,S){let R=_.value,w=y+"_"+M;if(S[w]===void 0)return typeof R=="number"||typeof R=="boolean"?S[w]=R:S[w]=R.clone(),!0;{let P=S[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return S[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(_){let y=_.uniforms,M=0,S=16;for(let w=0,P=y.length;w<P;w++){let D=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,b=D.length;v<b;v++){let U=D[v],O=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Z=O.length;H<Z;H++){let V=O[H],ne=x(V),W=M%S,ge=W%ne.boundary,ce=W+ge;M+=ge,ce!==0&&S-ce<ne.storage&&(M+=S-ce),U.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=ne.storage}}}let R=M%S;return R>0&&(M+=S-R),_.__size=M,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ma=class{constructor(e={}){let{canvas:t=Yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=ii,this.toneMappingExposure=1;let y=this,M=!1,S=0,R=0,w=null,P=-1,D=null,v=new je,b=new je,U=null,O=new xe(0),H=0,Z=t.width,V=t.height,ne=1,W=null,ge=null,ce=new je(0,0,Z,V),Se=new je(0,0,Z,V),nt=!1,at=new Jr,q=!1,te=!1,Me=new $e,j=new $e,oe=new T,ue=new je,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function We(){return w===null?ne:1}let I=n;function tn(A,N){return t.getContext(A,N)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){let N="webgl2";if(I=tn(N,A),I===null)throw tn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ke,lt,Be,Mt,Ge,C,E,k,K,Q,Y,Pe,he,ye,ct,ie,Ee,He,ze,be,it,qe,xt,L;function pe(){Ke=new ox(I),Ke.init(),qe=new k1(I,Ke),lt=new ex(I,Ke,e,qe),Be=new N1(I),lt.reverseDepthBuffer&&Be.buffers.depth.setReversed(!0),Mt=new cx(I),Ge=new E1,C=new O1(I,Ke,Be,Ge,lt,qe,Mt),E=new nx(y),k=new rx(y),K=new gm(I),xt=new jv(I,K),Q=new ax(I,K,Mt,xt),Y=new ux(I,Q,K,Mt),ze=new hx(I,lt,C),ie=new tx(Ge),Pe=new M1(y,E,k,Ke,lt,xt,ie),he=new G1(y,Ge),ye=new S1,ct=new P1(Ke),He=new Jv(y,E,k,Be,Y,d,l),Ee=new L1(y,Y,lt),L=new W1(I,Mt,lt,Be),be=new Qv(I,Ke,Mt),it=new lx(I,Ke,Mt),Mt.programs=Pe.programs,y.capabilities=lt,y.extensions=Ke,y.properties=Ge,y.renderLists=ye,y.shadowMap=Ee,y.state=Be,y.info=Mt}pe();let X=new Mh(y,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(Z,V,!1))},this.getSize=function(A){return A.set(Z,V)},this.setSize=function(A,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,V=N,t.width=Math.floor(A*ne),t.height=Math.floor(N*ne),B===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(Z*ne,V*ne).floor()},this.setDrawingBufferSize=function(A,N,B){Z=A,V=N,ne=B,t.width=Math.floor(A*B),t.height=Math.floor(N*B),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,N,B,z){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,N,B,z),Be.viewport(v.copy(ce).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,N,B,z){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,N,B,z),Be.scissor(b.copy(Se).multiplyScalar(ne).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){Be.setScissorTest(nt=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(A=!0,N=!0,B=!0){let z=0;if(A){let F=!1;if(w!==null){let se=w.texture.format;F=se===jh||se===Jh||se===Zh}if(F){let se=w.texture.type,fe=se===Si||se===ms||se===Zr||se===ar||se===Yh||se===$h,we=He.getClearColor(),Ae=He.getClearAlpha(),Oe=we.r,ke=we.g,Ie=we.b;fe?(p[0]=Oe,p[1]=ke,p[2]=Ie,p[3]=Ae,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Oe,g[1]=ke,g[2]=Ie,g[3]=Ae,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}N&&(z|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),ct.dispose(),Ge.dispose(),E.dispose(),k.dispose(),Y.dispose(),xt.dispose(),L.dispose(),Pe.dispose(),X.dispose(),X.removeEventListener("sessionstart",Xu),X.removeEventListener("sessionend",qu),ss.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Mt.autoReset,N=Ee.enabled,B=Ee.autoUpdate,z=Ee.needsUpdate,F=Ee.type;pe(),Mt.autoReset=A,Ee.enabled=N,Ee.autoUpdate=B,Ee.needsUpdate=z,Ee.type=F}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){let N=A.target;N.removeEventListener("dispose",rt),Bt(N)}function Bt(A){_n(A),Ge.remove(A)}function _n(A){let N=Ge.get(A).programs;N!==void 0&&(N.forEach(function(B){Pe.releaseProgram(B)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,B,z,F,se){N===null&&(N=Ce);let fe=F.isMesh&&F.matrixWorld.determinant()<0,we=Q0(A,N,B,z,F);Be.setMaterial(z,fe);let Ae=B.index,Oe=1;if(z.wireframe===!0){if(Ae=Q.getWireframeAttribute(B),Ae===void 0)return;Oe=2}let ke=B.drawRange,Ie=B.attributes.position,gt=ke.start*Oe,Et=(ke.start+ke.count)*Oe;se!==null&&(gt=Math.max(gt,se.start*Oe),Et=Math.min(Et,(se.start+se.count)*Oe)),Ae!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Ae.count)):Ie!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,Ie.count));let Pt=Et-gt;if(Pt<0||Pt===1/0)return;xt.setup(F,z,we,B,Ae);let Rn,ut=be;if(Ae!==null&&(Rn=K.get(Ae),ut=it,ut.setIndex(Rn)),F.isMesh)z.wireframe===!0?(Be.setLineWidth(z.wireframeLinewidth*We()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(F.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),Be.setLineWidth(Ue*We()),F.isLineSegments?ut.setMode(I.LINES):F.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else F.isPoints?ut.setMode(I.POINTS):F.isSprite&&ut.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ue=F._multiDrawStarts,nn=F._multiDrawCounts,dt=F._multiDrawCount,zn=Ae?K.get(Ae).bytesPerElement:1,Ds=Ge.get(z).currentProgram.getUniforms();for(let Cn=0;Cn<dt;Cn++)Ds.setValue(I,"_gl_DrawID",Cn),ut.render(Ue[Cn]/zn,nn[Cn])}else if(F.isInstancedMesh)ut.renderInstances(gt,Pt,F.count);else if(B.isInstancedBufferGeometry){let Ue=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,nn=Math.min(B.instanceCount,Ue);ut.renderInstances(gt,Pt,nn)}else ut.render(gt,Pt)};function ht(A,N,B){A.transparent===!0&&A.side===Qe&&A.forceSinglePass===!1?(A.side=yt,A.needsUpdate=!0,bo(A,N,B),A.side=si,A.needsUpdate=!0,bo(A,N,B),A.side=Qe):bo(A,N,B)}this.compile=function(A,N,B=null){B===null&&(B=A),m=ct.get(B),m.init(N),_.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==B&&A.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let z=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let se=F.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let we=se[fe];ht(we,B,F),z.add(we)}else ht(se,B,F),z.add(se)}),_.pop(),m=null,z},this.compileAsync=function(A,N,B=null){let z=this.compile(A,N,B);return new Promise(F=>{function se(){if(z.forEach(function(fe){Ge.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){F(A);return}setTimeout(se,10)}Ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Mn=null;function fi(A){Mn&&Mn(A)}function Xu(){ss.stop()}function qu(){ss.start()}let ss=new Ef;ss.setAnimationLoop(fi),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(A){Mn=A,X.setAnimationLoop(A),A===null?ss.stop():ss.start()},X.addEventListener("sessionstart",Xu),X.addEventListener("sessionend",qu),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,N,w),m=ct.get(A,_.length),m.init(N),_.push(m),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),at.setFromProjectionMatrix(j),te=this.localClippingEnabled,q=ie.init(this.clippingPlanes,te),x=ye.get(A,f.length),x.init(),f.push(x),X.enabled===!0&&X.isPresenting===!0){let se=y.xr.getDepthSensingMesh();se!==null&&Ll(se,N,-1/0,y.sortObjects)}Ll(A,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(W,ge),Fe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Fe&&He.addToRenderList(x,A),this.info.render.frame++,q===!0&&ie.beginShadows();let B=m.state.shadowsArray;Ee.render(B,A,N),q===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=x.opaque,F=x.transmissive;if(m.setupLights(),N.isArrayCamera){let se=N.cameras;if(F.length>0)for(let fe=0,we=se.length;fe<we;fe++){let Ae=se[fe];$u(z,F,A,Ae)}Fe&&He.render(A);for(let fe=0,we=se.length;fe<we;fe++){let Ae=se[fe];Yu(x,A,Ae,Ae.viewport)}}else F.length>0&&$u(z,F,A,N),Fe&&He.render(A),Yu(x,A,N);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(y,A,N),xt.resetDefaultState(),P=-1,D=null,_.pop(),_.length>0?(m=_[_.length-1],q===!0&&ie.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Ll(A,N,B,z){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){z&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);let fe=Y.update(A),we=A.material;we.visible&&x.push(A,fe,we,B,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){let fe=Y.update(A),we=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ue.copy(fe.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(we)){let Ae=fe.groups;for(let Oe=0,ke=Ae.length;Oe<ke;Oe++){let Ie=Ae[Oe],gt=we[Ie.materialIndex];gt&&gt.visible&&x.push(A,fe,gt,B,ue.z,Ie)}}else we.visible&&x.push(A,fe,we,B,ue.z,null)}}let se=A.children;for(let fe=0,we=se.length;fe<we;fe++)Ll(se[fe],N,B,z)}function Yu(A,N,B,z){let F=A.opaque,se=A.transmissive,fe=A.transparent;m.setupLightsView(B),q===!0&&ie.setGlobalState(y.clippingPlanes,B),z&&Be.viewport(v.copy(z)),F.length>0&&Eo(F,N,B),se.length>0&&Eo(se,N,B),fe.length>0&&Eo(fe,N,B),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function $u(A,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Xn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?ys:Si,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let se=m.state.transmissionRenderTarget[z.id],fe=z.viewport||v;se.setSize(fe.z,fe.w);let we=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(O),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&He.render(B);let Ae=y.toneMapping;y.toneMapping=ii;let Oe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),q===!0&&ie.setGlobalState(y.clippingPlanes,z),Eo(A,B,z),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,gt=N.length;Ie<gt;Ie++){let Et=N[Ie],Pt=Et.object,Rn=Et.geometry,ut=Et.material,Ue=Et.group;if(ut.side===Qe&&Pt.layers.test(z.layers)){let nn=ut.side;ut.side=yt,ut.needsUpdate=!0,Ku(Pt,B,z,Rn,ut,Ue),ut.side=nn,ut.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}y.setRenderTarget(we),y.setClearColor(O,H),Oe!==void 0&&(z.viewport=Oe),y.toneMapping=Ae}function Eo(A,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=A.length;F<se;F++){let fe=A[F],we=fe.object,Ae=fe.geometry,Oe=z===null?fe.material:z,ke=fe.group;we.layers.test(B.layers)&&Ku(we,N,B,Ae,Oe,ke)}}function Ku(A,N,B,z,F,se){A.onBeforeRender(y,N,B,z,F,se),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(y,N,B,z,A,se),F.transparent===!0&&F.side===Qe&&F.forceSinglePass===!1?(F.side=yt,F.needsUpdate=!0,y.renderBufferDirect(B,N,z,F,A,se),F.side=si,F.needsUpdate=!0,y.renderBufferDirect(B,N,z,F,A,se),F.side=Qe):y.renderBufferDirect(B,N,z,F,A,se),A.onAfterRender(y,N,B,z,F,se)}function bo(A,N,B){N.isScene!==!0&&(N=Ce);let z=Ge.get(A),F=m.state.lights,se=m.state.shadowsArray,fe=F.state.version,we=Pe.getParameters(A,F.state,se,N,B),Ae=Pe.getProgramCacheKey(we),Oe=z.programs;z.environment=A.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(A.isMeshStandardMaterial?k:E).get(A.envMap||z.environment),z.envMapRotation=z.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",rt),Oe=new Map,z.programs=Oe);let ke=Oe.get(Ae);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===fe)return Ju(A,we),ke}else we.uniforms=Pe.getUniforms(A),A.onBeforeCompile(we,y),ke=Pe.acquireProgram(we,Ae),Oe.set(Ae,ke),z.uniforms=we.uniforms;let Ie=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ie.uniform),Ju(A,we),z.needsLights=tp(A),z.lightsStateVersion=fe,z.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=ke,z.uniformsList=null,ke}function Zu(A){if(A.uniformsList===null){let N=A.currentProgram.getUniforms();A.uniformsList=ir.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Ju(A,N){let B=Ge.get(A);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Q0(A,N,B,z,F){N.isScene!==!0&&(N=Ce),C.resetTextureUnits();let se=N.fog,fe=z.isMeshStandardMaterial?N.environment:null,we=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ai,Ae=(z.isMeshStandardMaterial?k:E).get(z.envMap||fe),Oe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!B.morphAttributes.position,gt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color,Pt=ii;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=y.toneMapping);let Rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ut=Rn!==void 0?Rn.length:0,Ue=Ge.get(z),nn=m.state.lights;if(q===!0&&(te===!0||A!==D)){let Un=A===D&&z.id===P;ie.setState(z,A,Un)}let dt=!1;z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==nn.state.version||Ue.outputColorSpace!==we||F.isBatchedMesh&&Ue.batching===!1||!F.isBatchedMesh&&Ue.batching===!0||F.isBatchedMesh&&Ue.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ue.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ue.instancing===!1||!F.isInstancedMesh&&Ue.instancing===!0||F.isSkinnedMesh&&Ue.skinning===!1||!F.isSkinnedMesh&&Ue.skinning===!0||F.isInstancedMesh&&Ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ue.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ue.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ue.instancingMorph===!1&&F.morphTexture!==null||Ue.envMap!==Ae||z.fog===!0&&Ue.fog!==se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ie.numPlanes||Ue.numIntersection!==ie.numIntersection)||Ue.vertexAlphas!==Oe||Ue.vertexTangents!==ke||Ue.morphTargets!==Ie||Ue.morphNormals!==gt||Ue.morphColors!==Et||Ue.toneMapping!==Pt||Ue.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Ue.__version=z.version);let zn=Ue.currentProgram;dt===!0&&(zn=bo(z,N,F));let Ds=!1,Cn=!1,Dl=!1,Nt=zn.getUniforms(),Ui=Ue.uniforms;if(Be.useProgram(zn.program)&&(Ds=!0,Cn=!0,Dl=!0),z.id!==P&&(P=z.id,Cn=!0),Ds||D!==A){lt.reverseDepthBuffer?(Me.copy(A.projectionMatrix),Kp(Me),Zp(Me),Nt.setValue(I,"projectionMatrix",Me)):Nt.setValue(I,"projectionMatrix",A.projectionMatrix),Nt.setValue(I,"viewMatrix",A.matrixWorldInverse);let Un=Nt.map.cameraPosition;Un!==void 0&&Un.setValue(I,oe.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Cn=!0,Dl=!0)}if(F.isSkinnedMesh){Nt.setOptional(I,F,"bindMatrix"),Nt.setOptional(I,F,"bindMatrixInverse");let Un=F.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Nt.setValue(I,"boneTexture",Un.boneTexture,C))}F.isBatchedMesh&&(Nt.setOptional(I,F,"batchingTexture"),Nt.setValue(I,"batchingTexture",F._matricesTexture,C),Nt.setOptional(I,F,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",F._indirectTexture,C),Nt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",F._colorsTexture,C));let Nl=B.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0)&&ze.update(F,B,zn),(Cn||Ue.receiveShadow!==F.receiveShadow)&&(Ue.receiveShadow=F.receiveShadow,Nt.setValue(I,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ui.envMap.value=Ae,Ui.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Ui.envMapIntensity.value=N.environmentIntensity),Cn&&(Nt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&ep(Ui,Dl),se&&z.fog===!0&&he.refreshFogUniforms(Ui,se),he.refreshMaterialUniforms(Ui,z,ne,V,m.state.transmissionRenderTarget[A.id]),ir.upload(I,Zu(Ue),Ui,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ir.upload(I,Zu(Ue),Ui,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Nt.setValue(I,"center",F.center),Nt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Nt.setValue(I,"normalMatrix",F.normalMatrix),Nt.setValue(I,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Un=z.uniformsGroups;for(let Fl=0,np=Un.length;Fl<np;Fl++){let ju=Un[Fl];L.update(ju,zn),L.bind(ju,zn)}}return zn}function ep(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function tp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,N,B){Ge.get(A.texture).__webglTexture=N,Ge.get(A.depthTexture).__webglTexture=B;let z=Ge.get(A);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){let B=Ge.get(A);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,B=0){w=A,S=N,R=B;let z=!0,F=null,se=!1,fe=!1;if(A){let Ae=Ge.get(A);if(Ae.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ae.__hasExternalTextures)C.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ie=A.depthTexture;if(Ae.__boundDepthTexture!==Ie){if(Ie!==null&&Ge.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);let ke=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?F=ke[N][B]:F=ke[N],se=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?F=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[B]:F=ke,v.copy(A.viewport),b.copy(A.scissor),U=A.scissorTest}else v.copy(ce).multiplyScalar(ne).floor(),b.copy(Se).multiplyScalar(ne).floor(),U=nt;if(Be.bindFramebuffer(I.FRAMEBUFFER,F)&&z&&Be.drawBuffers(A,F),Be.viewport(v),Be.scissor(b),Be.setScissorTest(U),se){let Ae=Ge.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,B)}else if(fe){let Ae=Ge.get(A.texture),Oe=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Oe)}P=-1},this.readRenderTargetPixels=function(A,N,B,z,F,se,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we){Be.bindFramebuffer(I.FRAMEBUFFER,we);try{let Ae=A.texture,Oe=Ae.format,ke=Ae.type;if(!lt.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-z&&B>=0&&B<=A.height-F&&I.readPixels(N,B,z,F,qe.convert(Oe),qe.convert(ke),se)}finally{let Ae=w!==null?Ge.get(w).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,N,B,z,F,se,fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(we=we[fe]),we){let Ae=A.texture,Oe=Ae.format,ke=Ae.type;if(!lt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-z&&B>=0&&B<=A.height-F){Be.bindFramebuffer(I.FRAMEBUFFER,we);let Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(N,B,z,F,qe.convert(Oe),qe.convert(ke),0);let gt=w!==null?Ge.get(w).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,gt);let Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $p(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Ie),I.deleteSync(Et),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,B=0){A.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);let z=Math.pow(2,-B),F=Math.floor(A.image.width*z),se=Math.floor(A.image.height*z),fe=N!==null?N.x:0,we=N!==null?N.y:0;C.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,fe,we,F,se),Be.unbindTexture()},this.copyTextureToTexture=function(A,N,B=null,z=null,F=0){A.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let se,fe,we,Ae,Oe,ke;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,we=B.min.x,Ae=B.min.y):(se=A.image.width,fe=A.image.height,we=0,Ae=0),z!==null?(Oe=z.x,ke=z.y):(Oe=0,ke=0);let Ie=qe.convert(N.format),gt=qe.convert(N.type);C.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Et=I.getParameter(I.UNPACK_ROW_LENGTH),Pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=I.getParameter(I.UNPACK_SKIP_PIXELS),ut=I.getParameter(I.UNPACK_SKIP_ROWS),Ue=I.getParameter(I.UNPACK_SKIP_IMAGES),nn=A.isCompressedTexture?A.mipmaps[F]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Oe,ke,se,fe,Ie,gt,nn.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Oe,ke,nn.width,nn.height,Ie,nn.data):I.texSubImage2D(I.TEXTURE_2D,F,Oe,ke,se,fe,Ie,gt,nn),I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ut),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),F===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(A,N,B=null,z=null,F=0){A.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,A=arguments[2],N=arguments[3],F=arguments[4]||0);let se,fe,we,Ae,Oe,ke,Ie,gt,Et,Pt=A.isCompressedTexture?A.mipmaps[F]:A.image;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,we=B.max.z-B.min.z,Ae=B.min.x,Oe=B.min.y,ke=B.min.z):(se=Pt.width,fe=Pt.height,we=Pt.depth,Ae=0,Oe=0,ke=0),z!==null?(Ie=z.x,gt=z.y,Et=z.z):(Ie=0,gt=0,Et=0);let Rn=qe.convert(N.format),ut=qe.convert(N.type),Ue;if(N.isData3DTexture)C.setTexture3D(N,0),Ue=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Ue=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let nn=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ds=I.getParameter(I.UNPACK_SKIP_ROWS),Cn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ue,F,Ie,gt,Et,se,fe,we,Rn,ut,Pt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ue,F,Ie,gt,Et,se,fe,we,Rn,Pt.data):I.texSubImage3D(Ue,F,Ie,gt,Et,se,fe,we,Rn,ut,Pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,nn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ds),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Cn),F===0&&N.generateMipmaps&&I.generateMipmap(Ue),Be.unbindTexture()},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){S=0,R=0,w=null,Be.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Qh?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Da?"display-p3":"srgb"}},Ea=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Xi=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oi=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Eh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new T,ba=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vn=class extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ks,Hr=new T,Zs=new T,Js=new T,js=new ee,zr=new ee,Af=new $e,Xo=new T,Vr=new T,qo=new T,Yd=new ee,pc=new ee,$d=new ee,Sn=class extends Gt{constructor(e=new vn){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Ve;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eh(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new ba(n,3,0,!1)),Ks.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yo(Xo.set(-.5,-.5,0),Js,o,Zs,s,r),Yo(Vr.set(.5,-.5,0),Js,o,Zs,s,r),Yo(qo.set(.5,.5,0),Js,o,Zs,s,r),Yd.set(0,0),pc.set(1,0),$d.set(1,1);let a=e.ray.intersectTriangle(Xo,Vr,qo,!1,Hr);if(a===null&&(Yo(Vr.set(-.5,.5,0),Js,o,Zs,s,r),pc.set(0,1),a=e.ray.intersectTriangle(Xo,qo,Vr,!1,Hr),a===null))return;let l=e.ray.origin.distanceTo(Hr);l<e.near||l>e.far||t.push({distance:l,point:Hr.clone(),uv:Bi.getInterpolation(Hr,Xo,Vr,qo,Yd,pc,$d,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(i,e,t,n,s,r){js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*js.x-s*js.y,zr.y=s*js.x+r*js.y):zr.copy(js),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(Af)}var jr=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class extends Ye{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new $e,Kd=new $e,$o=[],Zd=new wi,X1=new $e,Gr=new G,Wr=new Gi,jt=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new At(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,X1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Zd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Wr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Kd.multiplyMatrices(n,Qs),Gr.matrixWorld=Kd,Gr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new At(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,Kh,ni));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xn=class extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new $e,bh=new pa,Ko=new Gi,Zo=new T,St=class extends Gt{constructor(e=new Ve,t=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Jd.copy(s).invert(),bh.copy(e.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);Zo.fromBufferAttribute(u,m),jd(Zo,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)Zo.fromBufferAttribute(u,g),jd(Zo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jd(i,e,t,n,s,r,o){let a=bh.distanceSqToPoint(i);if(a<t){let l=new T;bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qi=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ee:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,s=[],r=[],o=[],a=new T,l=new $e;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(sn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sh=class extends Sa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Jo=new T,mc=new tu,gc=new tu,vc=new tu,Yn=class extends qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jo.subVectors(s[0],s[1]).add(s[0]),c=Jo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),mc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),gc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),vc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(mc.calc(l),gc.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function q1(i,e){let t=1-i;return t*t*e}function Y1(i,e){return 2*(1-i)*i*e}function $1(i,e){return i*i*e}function $r(i,e,t,n){return q1(i,e)+Y1(i,t)+$1(i,n)}function K1(i,e){let t=1-i;return t*t*t*e}function Z1(i,e){let t=1-i;return 3*t*t*i*e}function J1(i,e){return 3*(1-i)*i*i*e}function j1(i,e){return i*i*i*e}function Kr(i,e,t,n,s){return K1(i,e)+Z1(i,t)+J1(i,n)+j1(i,s)}var wh=class extends qn{constructor(e=new ee,t=new ee,n=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(e,s.x,r.x,o.x,a.x),Kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Th=class extends qn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(e,s.x,r.x,o.x,a.x),Kr(e,s.y,r.y,o.y,a.y),Kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ah=class extends qn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rh=class extends qn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ch=class extends qn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends qn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y),$r(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ph=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Qd(a,l.x,c.x,h.x,u.x),Qd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},Q1=Object.freeze({__proto__:null,ArcCurve:Sh,CatmullRomCurve3:Yn,CubicBezierCurve:wh,CubicBezierCurve3:Th,EllipseCurve:Sa,LineCurve:Ah,LineCurve3:Rh,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:wa,SplineCurve:Ph});var Ta=class i extends Ve{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new T,d=new ee,p=new T,g=new T,x=new T,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=t;_++){let y=n+_*h*s,M=Math.sin(y),S=Math.cos(y);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*S,o.push(u.x,u.y,u.z),d.x=_/t,d.y=R/(e.length-1),a.push(d.x,d.y);let w=l[3*R+0]*M,P=l[3*R+1],D=l[3*R+0]*S;c.push(w,P,D)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let M=y+_*e.length,S=M,R=M+e.length,w=M+e.length+1,P=M+1;r.push(S,R,P),r.push(w,P,R)}this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(a,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Aa=class i extends Ve{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new T,h=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class i extends Ve{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function _(){let M=new T,S=new T,R=0,w=(t-e)/n;for(let P=0;P<=r;P++){let D=[],v=P/r,b=v*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,H=O*l+a,Z=Math.sin(H),V=Math.cos(H);S.x=b*Z,S.y=-v*n+m,S.z=b*V,u.push(S.x,S.y,S.z),M.set(Z,w,V).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-v),D.push(g++)}x.push(D)}for(let P=0;P<s;P++)for(let D=0;D<r;D++){let v=x[D][P],b=x[D+1][P],U=x[D+1][P+1],O=x[D][P+1];e>0&&(h.push(v,b,O),R+=3),t>0&&(h.push(b,U,O),R+=3)}c.addGroup(f,R,0),f+=R}function y(M){let S=g,R=new ee,w=new T,P=0,D=M===!0?e:t,v=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;let b=g;for(let U=0;U<=s;U++){let H=U/s*l+a,Z=Math.cos(H),V=Math.sin(H);w.x=D*V,w.y=m*v,w.z=D*Z,u.push(w.x,w.y,w.z),d.push(0,v,0),R.x=Z*.5+.5,R.y=V*.5*v+.5,p.push(R.x,R.y),g++}for(let U=0;U<s;U++){let O=S+U,H=b+U;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(f,P,M===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ra=class i extends Qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ih=class i extends Ve{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new T,M=new T,S=new T;for(let R=0;R<t.length;R+=3)p(t[R+0],y),p(t[R+1],M),p(t[R+2],S),l(y,M,S,_)}function l(_,y,M,S){let R=S+1,w=[];for(let P=0;P<=R;P++){w[P]=[];let D=_.clone().lerp(M,P/R),v=y.clone().lerp(M,P/R),b=R-P;for(let U=0;U<=b;U++)U===0&&P===R?w[P][U]=D:w[P][U]=D.clone().lerp(v,U/b)}for(let P=0;P<R;P++)for(let D=0;D<2*(R-P)-1;D++){let v=Math.floor(D/2);D%2===0?(d(w[P][v+1]),d(w[P+1][v]),d(w[P][v])):(d(w[P][v+1]),d(w[P+1][v+1]),d(w[P+1][v]))}}function c(_){let y=new T;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let _=new T;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let M=m(_)/2/Math.PI+.5,S=f(_)/Math.PI+.5;o.push(M,1-S)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],M=o[_+2],S=o[_+4],R=Math.max(y,M,S),w=Math.min(y,M,S);R>.9&&w<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let M=_*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let _=new T,y=new T,M=new T,S=new T,R=new ee,w=new ee,P=new ee;for(let D=0,v=0;D<r.length;D+=9,v+=6){_.set(r[D+0],r[D+1],r[D+2]),y.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),R.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),S.copy(_).add(y).add(M).divideScalar(3);let b=m(S);x(R,v+0,_,b),x(w,v+2,y,b),x(P,v+4,M,b)}}function x(_,y,M,S){S<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ca=class i extends Ih{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hr=class i extends Ve{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,p=new T,g=new ee;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let _=f+m,y=_,M=_+n+1,S=_+n+2,R=_+1;a.push(y,M,R),a.push(M,S,R)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $n=class i extends Ve{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let _=[],y=f/n,M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){let R=S/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+M,1-y),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let y=h[f][_+1],M=h[f][_],S=h[f+1][_],R=h[f+1][_+1];(f!==0||o>0)&&p.push(y,M,R),(f!==n-1||l<Math.PI)&&p.push(M,S,R)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(x,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yi=class i extends Ve{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(x,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ai=class i extends Ve{constructor(e=new wa(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,l=new T,c=new ee,h=new T,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),_(),f()}function m(y){h=e.getPointAt(y/t,h);let M=o.normals[y],S=o.binormals[y];for(let R=0;R<=s;R++){let w=R/s*Math.PI*2,P=Math.sin(w),D=-Math.cos(w);l.x=D*M.x+P*S.x,l.y=D*M.y+P*S.y,l.z=D*M.z+P*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let S=(s+1)*(y-1)+(M-1),R=(s+1)*y+(M-1),w=(s+1)*y+M,P=(s+1)*(y-1)+M;g.push(S,R,P),g.push(R,w,P)}}function _(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)c.x=y/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Q1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var tt=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function jo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ey(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ur=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uh=class extends ur{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=e,a=2*t-n;break;case sd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=e,l=2*n-t;break;case sd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let S=0;S!==a;++S)r[S]=f*o[h+S]+_*o[c+S]+y*o[l+S]+M*o[u+S];return r}},Lh=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Dh=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(t,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case sh:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return sh;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ey(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=sh;var gs=class extends Kn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ra;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends Kn{};Nh.prototype.ValueTypeName="color";var Fh=class extends Kn{};Fh.prototype.ValueTypeName="number";var Oh=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)It.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pa=class extends Kn{InterpolantFactoryMethodLinear(e){return new Oh(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Kn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ra;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var kh=class extends Kn{};kh.prototype.ValueTypeName="vector";var Bh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ty=new Bh,Hh=class{constructor(e){this.manager=e!==void 0?e:ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Hh.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ia=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new $e,ef=new T,tf=new T,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zh=class extends Qr{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ha*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$i=class extends xs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nf=new $e,Xr=new T,yc=new T,Vh=class extends Qr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xr),yc.copy(n.position),yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yc),n.updateMatrixWorld(),s.makeTranslation(-Xr.x,-Xr.y,-Xr.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}},yn=class extends xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gh=class extends Qr{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ua=class extends xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zn=class extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var nu="\\[\\]\\.:\\/",ny=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",iy="[^"+nu.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",iu),ry=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),ly=new RegExp("^"+sy+ry+oy+ay+"$"),cy=["material","materials","bones","map"],Wh=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){let t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Wh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);var Fa=class{constructor(e){this.el=e,this.t=0,this.last=performance.now(),this.frozen=null,this.fallback=!1,this.running=!1}freeze(e){this.frozen=e,this.t=e}get playing(){return this.frozen!==null?!1:this.fallback?this.running:!this.el.paused&&!this.el.ended}tick(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.1);if(this.last=e,this.frozen!==null)return this.t=this.frozen,1/60;if(this.fallback)return this.running&&(this.t+=t),t;let n=this.el;if(!n.paused&&!n.ended){let s=this.t+t*n.playbackRate,r=n.currentTime-s;this.t=Math.abs(r)>.08?n.currentTime:s+r*.1}else this.t=n.currentTime;return t}};var Ut=window.OLK_AUDIO||null;function Rf(i){let e=atob(i),t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)/255;return t}var su=Ut?Ut.fps:60,Nn=Ut?Ut.period:60/111.995,ru=Ut?Ut.beat0:.095,Cf=Ut?Ut.bar0:ru+2*Nn,Pf=Nn*4,to=Ut?Ut.duration:252.03,Uf={},Lf={},ka=null;if(Ut){for(let i in Ut.ch){let e=Rf(Ut.ch[i]),t=new Float32Array(e.length+1);for(let n=0;n<e.length;n++)t[n+1]=t[n]+e[n]/su;Uf[i]=e,Lf[i]=t}ka=Rf(Ut.spec)}var eo=Ut&&Ut.ev||{},Oa=Ut&&Ut.evA||{};function If(i,e,t){if(!i)return 0;let n=e*t,s=Math.floor(n);if(s<0)return i[0];if(s>=i.length-1)return i[i.length-1];let r=n-s;return i[s]+(i[s+1]-i[s])*r}var re={ok:!!Ut,get(i,e){return If(Uf[i],e,su)},integral(i,e){return If(Lf[i],e,su)},spectrum(i,e){if(!ka)return 0;let t=Ut.specBands,n=e*Ut.specFps,s=Math.floor(n),r=n-s;return s=Math.max(0,Math.min(Ut.specN-2,s)),ka[s*t+i]*(1-r)+ka[(s+1)*t+i]*r},specRow(i,e){for(let t=0;t<32;t++)e[t]=this.spectrum(t,i);return e},beat(i){return(i-ru)/Nn},bar(i){return(i-Cf)/Pf},beatPulse(i,e=6){let t=this.beat(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},barPulse(i,e=4){let t=this.bar(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},beatTime(i){return ru+i*Nn},barTime(i){return Cf+i*Pf},events(i){return eo[i]||[]},last(i,e){let t=eo[i];if(!t||!t.length||t[0]>e)return-1;let n=0,s=t.length-1;for(;n<s;){let r=n+s+1>>1;t[r]<=e?n=r:s=r-1}return n},since(i,e){let t=this.last(i,e);return t<0?1/0:e-eo[i][t]},amp(i,e){let t=this.last(i,e);return t<0?0:Oa[i]?Oa[i][t]:1},hitPulse(i,e,t=8){let n=this.last(i,e);return n<0?0:(Oa[i]?Oa[i][n]:1)*Math.exp(-(e-eo[i][n])*t)},count(i,e,t){return Math.max(0,this.last(i,t)-this.last(i,e))},next(i,e){let t=eo[i],n=this.last(i,e)+1;return t&&n<t.length?t[n]:1/0}};var Ne=`
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
`,pr=`
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 pencil(float x){
  x = clamp(x, 0.0, 1.0) * 5.0;
  vec3 c0 = vec3(0.96,0.56,0.32), c1 = vec3(0.93,0.42,0.40), c2 = vec3(0.86,0.36,0.58),
       c3 = vec3(0.62,0.40,0.80), c4 = vec3(0.36,0.52,0.88), c5 = vec3(0.40,0.78,0.86);
  vec3 c = x < 1.0 ? mix(c0,c1,x) : x < 2.0 ? mix(c1,c2,x-1.0) : x < 3.0 ? mix(c2,c3,x-2.0) : x < 4.0 ? mix(c3,c4,x-3.0) : mix(c4,c5,x-4.0);
  return srgb2lin(c);
}
`,Df=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,mr=`
varying vec3 vCol; varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5; float r = dot(d, d) * 4.0;
  float a = exp(-r * 4.0) + 0.35 * exp(-r * 16.0);
  if (a * vA < 0.002) discard;
  gl_FragColor = vec4(vCol * a * vA, 1.0);
}
`;var Ki=(i,e,t=!0)=>new Xn(i,e,{type:ys,format:gn,depthBuffer:t,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),gr=(i,e,t={})=>new ae({vertexShader:Df,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1,...t}),ou=class{constructor(e){this.r=e,this.cam=new Wi(-1,1,1,-1,0,1),this.scene=new oi,this.mesh=new G(new ve(2,2)),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}run(e,t,n=!0){this.mesh.material=e,this.r.setRenderTarget(t),n&&this.r.clear(),this.r.render(this.scene,this.cam)}},au="vec3 tap4(sampler2D t, vec2 uv, vec2 o){ return (texture2D(t, uv+o*vec2(-1.,-1.)).rgb + texture2D(t, uv+o*vec2(1.,-1.)).rgb + texture2D(t, uv+o*vec2(-1.,1.)).rgb + texture2D(t, uv+o*vec2(1.,1.)).rgb) * 0.25; }",hy=`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr, uKnee; varying vec2 vUv; ${au}
void main(){ vec3 c = tap4(tSrc, vUv, uTexel); float br = max(c.r, max(c.g, c.b));
  float s = clamp(br - uThr + uKnee, 0.0, 2.0 * uKnee); s = s * s / (4.0 * uKnee + 1e-4);
  gl_FragColor = vec4(min(c * max(s, br - uThr) / max(br, 1e-4), vec3(60.0)), 1.0); }`,uy=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv; ${au}
void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * 0.5 + tap4(tSrc, vUv, uTexel) * 0.5, 1.0); }`,dy=`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv; ${au}
void main(){ vec2 o = uTexel; vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += (texture2D(tSrc, vUv + vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv + vec2(0., o.y)).rgb + texture2D(tSrc, vUv - vec2(0., o.y)).rgb) * 2.0;
  c += tap4(tSrc, vUv, o) * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0); }`,fy=`uniform sampler2D tScene, tBloom; uniform vec2 uRes; uniform float uTime;
uniform float uExposure, uBloom, uSat, uContrast, uVig, uGrain, uCA, uLetter, uFlicker, uFadeB, uFadeW, uLeak, uScratch, uWeave, uTone, uShake, uPunch, uGlitch, uInvert, uScan, uRgb;
uniform vec3 uTint, uLift; varying vec2 vUv; ${Ne}
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main(){
  float fr = floor(uTime * 24.0);
  vec2 uv = vUv + uWeave * (vec2(hash12(vec2(fr, 1.3)), hash12(vec2(fr, 7.1))) - 0.5) * 0.004;
  // beat punch-in + camera shake (per 60fps frame noise)
  float f6 = floor(uTime * 60.0);
  uv = 0.5 + (uv - 0.5) / (1.0 + uPunch * 0.06) + uShake * 0.012 * (vec2(hash12(vec2(f6, 2.1)), hash12(vec2(f6, 8.3))) - 0.5);
  // glitch: horizontal slices jump sideways
  if (uGlitch > 0.001) {
    float sl = floor(uv.y * 38.0 + hash12(vec2(f6, 4.0)) * 5.0);
    float on = step(1.0 - uGlitch * 0.45, hash12(vec2(sl, f6)));
    uv.x += on * (hash12(vec2(sl, f6 + 1.0)) - 0.5) * 0.12 * uGlitch;
  }
  vec2 d = uv - 0.5; float r2 = dot(d, d);
  vec2 off = d * r2 * uCA * 0.05 + vec2(uRgb * 0.006, 0.0);
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
  col = mix(col, 1.0 - col, uInvert);
  if (uScan > 0.001) col *= 1.0 - uScan * 0.22 * (0.5 + 0.5 * sin(vUv.y * uRes.y * 1.57));
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
}`,lu={exposure:1,bloom:.9,bloomThr:.8,sat:1,contrast:1.02,vig:.55,grain:.06,ca:.6,letter:0,flicker:0,fadeB:0,fadeW:0,leak:0,scratch:0,weave:0,tone:0,tint:[1,1,1],lift:[0,0,0],dust:.3,dustCol:[1,.85,.65],shake:0,punch:0,glitch:0,invert:0,scan:0,rgb:0},Ba=class{constructor(e){this.r=e,this.fs=new ou(e),this.levels=6;let t=()=>({tSrc:{value:null},uTexel:{value:new ee}});this.pre=gr(hy,{...t(),uThr:{value:.8},uKnee:{value:.5}}),this.down=gr(uy,t()),this.up=gr(dy,{...t(),tAdd:{value:null}});let n={tScene:{value:null},tBloom:{value:null},uRes:{value:new ee},uTime:{value:0}};for(let s of["Exposure","Bloom","Sat","Contrast","Vig","Grain","CA","Letter","Flicker","FadeB","FadeW","Leak","Scratch","Weave","Tone","Shake","Punch","Glitch","Invert","Scan","Rgb"])n["u"+s]={value:0};n.uTint={value:new T(1,1,1)},n.uLift={value:new T},this.final=gr(fy,n),this.A=null}resize(e,t){[this.A,this.B,this.M,...this.dn||[],...this.upT||[]].forEach(r=>r&&r.dispose()),this.w=e,this.h=t,this.A=Ki(e,t),this.B=Ki(e,t),this.M=Ki(e,t),this.dn=[],this.upT=[];let n=e>>1,s=t>>1;for(let r=0;r<this.levels;r++)this.dn.push(Ki(Math.max(n,2),Math.max(s,2),!1)),this.upT.push(Ki(Math.max(n,2),Math.max(s,2),!1)),n>>=1,s>>=1}bloom(e,t){let{pre:n,down:s,up:r,dn:o,upT:a,fs:l}=this;n.uniforms.tSrc.value=e.texture,n.uniforms.uThr.value=t,n.uniforms.uTexel.value.set(1/e.width,1/e.height),l.run(n,o[0]);for(let h=1;h<o.length;h++)s.uniforms.tSrc.value=o[h-1].texture,s.uniforms.uTexel.value.set(1/o[h-1].width,1/o[h-1].height),l.run(s,o[h]);let c=o[o.length-1];for(let h=o.length-2;h>=0;h--)r.uniforms.tSrc.value=c.texture,r.uniforms.tAdd.value=o[h].texture,r.uniforms.uTexel.value.set(1/c.width,1/c.height),l.run(r,a[h]),c=a[h];return c}composite(e,t,n,s,r){let o=this.bloom(e,t.bloomThr),a=this.final.uniforms;a.tScene.value=e.texture,a.tBloom.value=o.texture,a.uRes.value.set(s,r),a.uTime.value=n;let l={Exposure:"exposure",Bloom:"bloom",Sat:"sat",Contrast:"contrast",Vig:"vig",Grain:"grain",CA:"ca",Letter:"letter",Flicker:"flicker",FadeB:"fadeB",FadeW:"fadeW",Leak:"leak",Scratch:"scratch",Weave:"weave",Tone:"tone",Shake:"shake",Punch:"punch",Glitch:"glitch",Invert:"invert",Scan:"scan",Rgb:"rgb"};for(let c in l)a["u"+c].value=t[l[c]];a.uLetter.value=t.letter*Math.max(0,1-s/r/2.39),a.uTint.value.fromArray(t.tint),a.uLift.value.fromArray(t.lift),this.fs.run(this.final,null)}};var py={fade:0,flash:1,dip:2,zoom:3,burn:4,shatter:5,iris:6,pencil:7,glitch:8,light:9},my=`uniform sampler2D tA, tB; uniform float uP, uMode, uAspect, uTime, uAmt; uniform vec2 uC; varying vec2 vUv; ${Ne}
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
    col = mix(A(uv), B(uv), k) + vec3(0.6) * smoothstep(0.5, 0.0, abs(k - 0.5)) * step(0.001, p) * step(p, 0.999);
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
}`,Ha=class{constructor(){this.mat=gr(my,{tA:{value:null},tB:{value:null},uP:{value:0},uMode:{value:0},uAspect:{value:1},uTime:{value:0},uAmt:{value:1},uC:{value:new ee(.5,.5)}})}set(e,t,n,s,r,o,a=[.5,.5],l=1){let c=this.mat.uniforms;return c.tA.value=e.texture,c.tB.value=t.texture,c.uP.value=n,c.uMode.value=typeof s=="number"?s:py[s]??0,c.uAspect.value=r,c.uTime.value=o,c.uC.value.set(a[0],a[1]),c.uAmt.value=l,this.mat}};var Te=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),ot=(i,e,t)=>i+(e-i)*t,et=(i,e,t)=>Te((i-e)/(t-e)),$=(i,e,t)=>{let n=et(t,i,e);return n*n*(3-2*n)};var _e={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outExpo:i=>i>=1?1:1-Math.pow(2,-10*i),inExpo:i=>i<=0?0:Math.pow(2,10*i-10),sine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function pt(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}var vr=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function za(i,e,t=_e.sine){if(i<=e[0][0])return e[0].slice(1);for(let n=0;n<e.length-1;n++){let s=e[n],r=e[n+1];if(i<=r[0]){let o=t((i-s[0])/(r[0]-s[0])),a=[];for(let l=1;l<s.length;l++)a.push(s[l]+(r[l]-s[l])*o);return a}}return e[e.length-1].slice(1)}var Va=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];var H2=[[.96,.56,.32],[.93,.42,.4],[.86,.36,.58],[.62,.4,.8],[.36,.52,.88],[.4,.78,.86]].map(i=>i.map(e=>Math.pow(e,2.2)));var gy=`attribute vec3 aSeed; uniform float uT, uAmt, uAspect, uH; uniform vec3 uCol, uWind;
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
}`,Ga=class{constructor(e=1400){let t=pt(99),n=new Float32Array(e*3);for(let o=0;o<n.length;o++)n[o]=t();let s=new Ve;s.setAttribute("position",new Ye(new Float32Array(e*3),3)),s.setAttribute("aSeed",new Ye(n,3)),this.u={uT:{value:0},uAmt:{value:0},uAspect:{value:1.78},uH:{value:1080},uCol:{value:new T(1,.85,.65)},uWind:{value:new T(.004,.009,0)}};let r=new ae({vertexShader:gy,fragmentShader:mr,uniforms:this.u,transparent:!0,depthTest:!1,depthWrite:!1,blending:De});this.pts=new St(s,r),this.pts.frustumCulled=!1,this.scene=new oi,this.scene.add(this.pts),this.cam=new Vt(50,1.78,.1,50)}render(e,t,n,s,r,o,a){if(s<.005)return;let l=this.u;l.uT.value=n,l.uAmt.value=s,l.uAspect.value=r/o,l.uH.value=o,a&&l.uCol.value.fromArray(a),e.setRenderTarget(t),e.render(this.scene,this.cam)}};var vy=new Set(["flash","dip","glitch","iris"]),Wa=class i{constructor(e){this.shots=e.slice().sort((n,s)=>n.start-s.start);let t=this.shots;for(let n=0;n<t.length;n++)t[n].end=n+1<t.length?t[n+1].start:1/0}index(e){let t=this.shots,n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;return n}static win(e){let t=e.tr.dur||0,n=e.tr.align??.5;return[e.start-t*n,e.start+t*(1-n)]}at(e){let t=this.shots,n=this.index(e);for(let s of[n+1,n]){let r=t[s];if(!r||s===0||!r.tr||r.tr.type==="cut")continue;let[o,a]=i.win(r);if(e>=o&&e<a)return{a:t[s-1],b:r,p:(e-o)/(a-o),tr:r.tr}}return{a:t[n],b:null,p:0,tr:null}}around(e,t=3){return this.shots.filter(n=>n.end>e-t&&n.start<e+t)}},cu=i=>({...lu,...i});function Nf(i,e,t,n){let s=vy.has(n)?t<.5?0:1:t*t*(3-2*t),r={};for(let o in lu){let a=i[o],l=e[o];r[o]=Array.isArray(a)?a.map((c,h)=>c+(l[h]-c)*s):a+(l-a)*s}return r}var Zi="Oh oh oh oh oh",xr="I love you more than you\u2019ll ever know",no="\u6211\u7231\u4F60\uFF0C\u8FDC\u6BD4\u4F60\u6240\u77E5\u9053\u7684\u66F4\u591A",io="\u3042\u306A\u305F\u304C\u601D\u3046\u3088\u308A\u305A\u3063\u3068\u3000\u3042\u306A\u305F\u3092\u611B\u3057\u3066\u308B",so="#ffe2b8",xy="#dce6ff",li="#ffcf8a",hu="#fff1ea",yr=[[12.2,16.6,"Words & Music \u2014 Hikaru Utada","\u8BCD\u66F2\u3000\u5B87\u591A\u7530\u5149","credit",{y:.7},"\u4F5C\u8A5E\u30FB\u4F5C\u66F2\u3000\u5B87\u591A\u7530\u30D2\u30AB\u30EB"],[20.69,25,"\u521D\u3081\u3066\u306E\u30EB\u30FC\u30D6\u30EB\u306F","\u7B2C\u4E00\u6B21\u53BB\u5362\u6D6E\u5BAB","v",{x:.86},"My first time at the Louvre"],[23.01,25,"\u306A\u3093\u3066\u3053\u3068\u306F\u306A\u304B\u3063\u305F\u308F","\u4E5F\u4E0D\u8FC7\u5982\u6B64\u800C\u5DF2","v",{x:.79},"was nothing special at all"],[25.1,29.1,"\u79C1\u3060\u3051\u306E\u30E2\u30CA\u30EA\u30B6","\u53EA\u5C5E\u4E8E\u6211\u7684\u8499\u5A1C\u4E3D\u838E","v",{x:.22,c:so},"My very own Mona Lisa \u2014"],[26.94,29.1,"\u3082\u3046\u3068\u3063\u304F\u306B\u51FA\u4F1A\u3063\u3066\u305F\u304B\u3089","\u6211\u65E9\u5C31\u5DF2\u7ECF\u9047\u89C1\u4E86","v",{x:.15,c:so},"I had met her long before"],[29.37,33.55,"\u521D\u3081\u3066\u3042\u306A\u305F\u3092\u898B\u305F","\u7B2C\u4E00\u6B21\u89C1\u5230\u4F60\u7684","h",{x:.08,y:.7,c:so,in:"type"},"The day I first saw you,"],[31.16,33.55,"\u3042\u306E\u65E5\u52D5\u304D\u51FA\u3057\u305F\u6B6F\u8ECA","\u90A3\u4E00\u5929\uFF0C\u9F7F\u8F6E\u5F00\u59CB\u8F6C\u52A8","h",{x:.08,y:.83,c:so,in:"type"},"the gears began to turn"],[33.67,37.55,"\u6B62\u3081\u3089\u308C\u306A\u3044\u55AA\u5931\u306E\u4E88\u611F","\u65E0\u6CD5\u963B\u6B62\u7684\u3001\u5931\u53BB\u7684\u9884\u611F","center",{y:.78,c:xy,out:"shatter"},"a foreboding of loss I cannot stop"],[38.02,47.6,"\u3082\u3046\u3044\u3063\u3071\u3044\u3042\u308B\u3051\u3069","\u867D\u7136\u5DF2\u7ECF\u6709\u5F88\u591A\u4E86","v",{x:.85},"We already have so many,"],[43.79,47.6,"\u3082\u3046\u4E00\u3064\u5897\u3084\u3057\u307E\u3057\u3087\u3046","\u90A3\u5C31\u518D\u6DFB\u4E00\u4E2A\u5427","v",{x:.78,c:so},"so let\u2019s make one more"],[47.75,52.2,"(Can you give me one last kiss?)","\uFF08\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F\uFF09","whisper",{},"\uFF08\u6700\u5F8C\u306E\u30AD\u30B9\u3092\u3000\u304F\u308C\u308B\uFF1F\uFF09"],[52.39,55.1,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[55.22,60.9,Zi,"","oh",{}],[61.07,63.65,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[63.79,69.45,Zi,"","oh",{}],[69.63,79.6,xr,no,"en",{rd:4.4,out:"dust",y:.66},io],[80.84,82.72,"\u300C\u5199\u771F\u306F\u82E6\u624B\u306A\u3093\u3060\u300D","\u201C\u6211\u4E0D\u592A\u559C\u6B22\u62CD\u7167\u201D","center",{y:.75,in:"type",out:"blur",mono:1},"\u201CI\u2019m not good with photos\u201D"],[82.78,84.85,"\u3067\u3082\u305D\u3093\u306A\u3082\u306E\u306F\u3044\u3089\u306A\u3044\u308F","\u53EF\u6211\u5E76\u4E0D\u9700\u8981\u90A3\u79CD\u4E1C\u897F","h",{x:.08,y:.8},"But I don\u2019t need things like that"],[84.92,89.15,"\u3042\u306A\u305F\u304C\u713C\u304D\u3064\u3044\u305F\u307E\u307E","\u4F60\u59CB\u7EC8\u70D9\u5370\u5728","v",{x:.85,in:"burn",c:li},"You stay burned into"],[86.9,89.15,"\u79C1\u306E\u5FC3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u30FC","\u6211\u5FC3\u4E2D\u7684\u653E\u6620\u673A\u91CC","v",{x:.78,in:"burn",c:li},"the projector of my heart"],[89.26,91.25,"\u5BC2\u3057\u304F\u306A\u3044\u3075\u308A\u3057\u3066\u305F","\u6211\u4E00\u76F4\u5047\u88C5\u5E76\u4E0D\u5BC2\u5BDE","cine",{},"I kept pretending I wasn\u2019t lonely"],[91.35,93.45,"\u307E\u3042 \u305D\u3093\u306A\u306E\u304A\u4E92\u3044\u69D8\u304B","\u561B\uFF0C\u8FD9\u70B9\u6211\u4EEC\u5F7C\u6B64\u5F7C\u6B64\u5427","cine",{},"Well, I guess we both did"],[93.57,95.5,"\u8AB0\u304B\u3092\u6C42\u3081\u308B\u3053\u3068\u306F","\u6E34\u6C42\u7740\u67D0\u4E2A\u4EBA","cine",{},"To long for someone"],[95.57,97.55,"\u5373\u3061\u50B7\u3064\u304F\u3053\u3068\u3060\u3063\u305F","\u5C31\u610F\u5473\u7740\u4F1A\u53D7\u4F24","cine",{out:"shatter"},"was to be hurt, all along"],[98.19,103.4,"Oh can you give me one last kiss?","\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F","en",{rd:3.2,in:"burn",c:li},"\u306D\u3048\u3000\u6700\u5F8C\u306B\u30AD\u30B9\u3092\u304F\u308C\u308B\uFF1F"],[103.72,107.9,"\u71C3\u3048\u308B\u3088\u3046\u306A\u30AD\u30B9\u3092\u3057\u3088\u3046","\u6765\u4E00\u4E2A\u71C3\u70E7\u822C\u7684\u543B\u5427","v",{x:.13,in:"burn",c:li,out:"rise"},"Let\u2019s share a kiss that burns"],[108.05,112.3,"\u5FD8\u308C\u305F\u304F\u3066\u3082","\u5373\u4F7F\u60F3\u8981\u5FD8\u8BB0","v",{x:.13,c:li,out:"dust"},"so that even if I tried to forget"],[112.44,115,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u307B\u3069","\u4E5F\u65E0\u6CD5\u5FD8\u8BB0","v",{x:.16,c:li,out:"dust"},"I never could"],[115.19,120.85,Zi,"","oh",{c:li}],[121,123.65,xr,no,"en",{rd:2.4,c:li,y:.66},io],[123.76,129.5,Zi,"","oh",{c:li}],[129.61,135.6,xr,no,"en",{rd:4.2,c:li,out:"dust",y:.66},io],[149.52,154.9,"\u3082\u3046\u5206\u304B\u3063\u3066\u3044\u308B\u3088","\u5176\u5B9E\u6211\u65E9\u5C31\u660E\u767D\u4E86","center",{y:.86,c:hu},"I already know"],[155.05,159.45,"\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u3082","\u5373\u4F7F\u8FD9\u4E16\u754C\u8D70\u5230\u5C3D\u5934","center",{y:.86,c:hu},"even at the end of the world"],[159.63,165.9,"\u5E74\u3092\u3068\u3063\u3066\u3082","\u5373\u4F7F\u6211\u4EEC\u90FD\u5DF2\u8001\u53BB","center",{y:.86,c:hu,out:"dust"},"even when we grow old"],[166.14,168.6,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[168.71,170.6,Zi,"","oh",{}],[170.67,175.35,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[175.47,181.1,Zi,"","oh",{}],[181.25,184.75,xr,no,"en",{rd:2.8},io],[184.86,189.6,Zi,"","oh",{}],[189.7,192.45,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[192.56,198.15,Zi,"","oh",{}],[198.3,207.5,xr,no,"en",{rd:4.6,rainbow:1,out:"dust"},io],[226.2,231.2,"\u5439\u3044\u3066\u3044\u3063\u305F\u98A8\u306E\u5F8C\u3092","\u8FFD\u968F\u7740\u90A3\u9635\u5439\u8FC7\u7684\u98CE","pencil",{x:.1,y:.2},"Chasing after the wind that blew by"],[230.57,237.8,"\u8FFD\u3044\u304B\u3051\u305F\u3000\u7729\u3057\u3044\u5348\u5F8C","\u8FFD\u9010\u7740\u7684\u3000\u90A3\u4E2A\u8000\u773C\u7684\u5348\u540E","pencil",{x:.1,y:.33},"that dazzling afternoon"]],Ff=2*Nn,Of=yr.filter(i=>i[4]==="oh").flatMap(i=>[0,1,2,3,4].map(e=>i[0]+e*Ff)),uu=yr.filter(i=>i[2]===xr).map(i=>i[0]),kf=()=>Ff;var Bf=`
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
`;var yy={fade:.8,dust:1.5,shatter:.6,blur:.45,rise:1.2},Hf=[15239002,14643064,13000599,9201860,6062032,6207176].map(Va),_y=Va(4011311),zf=[1,.45,.12],Vf=[1,.8,.45],Gf=[1,1,1],Wf=i=>Va(parseInt(i.slice(1),16)),_r=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Ji=(i,e)=>e===void 0?`rgb(${i.map(t=>Math.round(Te(t)*255)).join(",")})`:`rgba(${i.map(t=>Math.round(Te(t)*255)).join(",")},${e.toFixed(3)})`,Xa=class{constructor(e){let t=document.createElement("style");t.textContent=Bf,document.head.appendChild(t),this.el=document.createElement("div"),this.el.id="lyr",e.appendChild(this.el),this.u=1,this.cineY=.93,this.enabled=!0,this.blend="",this.alpha="",this.ohCount=0,this.lines=yr.map(n=>this.make(n)),this.resize()}make([e,t,n,s,r,o,a]){let l=document.createElement("div");l.className="ln l-"+r;let c=document.createElement("div");c.className="jp",l.appendChild(c);let h=["oh","en","whisper","credit"].includes(r),u=h?n.split(" "):Array.from(n).map(v=>v===" "?"\xA0":v),d=u.map((v,b)=>{let U=document.createElement("span");return U.textContent=v,c.appendChild(U),h&&r!=="oh"&&b<u.length-1&&c.appendChild(document.createTextNode(" ")),U}),p=[];if(r==="oh"){let v=this.ohCount++%2===1;d.forEach((b,U)=>{let O=Math.sin(U/4*Math.PI),H=.18+U*.16,Z=v?.33-.06*O:.64+.06*O;p[U]=`left:${(H*100).toFixed(1)}%;top:${(Z*100).toFixed(1)}%;`})}let g=null,x=null,m=null,f=null,_=(v,b)=>{let U=document.createElement("div");return U.className=v,b&&(U.textContent=b),U};if(s||a){g=_("tr"),g.style.opacity="1",x=_("rule"),g.appendChild(x);let v=r==="pencil"?null:_r(o.c?Wf(o.c):[.957,.937,.902],[.93,.9,.86],.45);s&&(m=_("zh",s),g.appendChild(m),v&&(m.style.color=Ji(v))),a&&(f=_("x "+(["en","whisper","credit"].includes(r)?"ja":"en"),a),g.appendChild(f),v&&(f.style.color=Ji(v,r==="en"?.92:.78))),l.appendChild(g)}let y=l.style,M=o.x??.5,S=o.y??.5;r==="v"?(y.left=M*100+"%",y.top="15%"):r==="h"||r==="pencil"?(y.left=M*100+"%",y.top=S*100+"%"):r==="center"||r==="credit"?(y.left="50%",y.top=S*100+"%"):r==="en"?(y.left="50%",y.top=(o.y??.47)*100+"%"):r==="whisper"?(y.left="50%",y.top="82%"):r==="cine"&&(y.left="50%"),this.el.appendChild(l);let R=d.length,w=t-e,P=r==="oh"?kf()*4:o.rd??(r==="credit"?.6:r==="whisper"?3:r==="pencil"?Math.min(w*.6,3.2):Te(w*.5,.5,2.4)),D=o.out||"fade";return{t0:e,t1:t,el:l,spans:d,Z:g,R:x,ZH:m,X:f,style:r,o,bases:p,vis:!1,cache:[],lcache:"",zc:"",ut:d.map((v,b)=>e+(R>1?P*b/(R-1):0)),c:o.c?Wf(o.c):[.957,.937,.902],in:o.in||(r==="pencil"?"ink":r==="cine"?"type":"glow"),out:D,exitDur:yy[D],fd:r==="pencil"?1:.7}}resize(){let e=innerWidth,t=innerHeight;this.u=Math.min(e/1920,t/1080),this.el.style.setProperty("--u",this.u+"px");let n=Math.max(0,1-e/t/2.39);this.cineY=n*t*.5>90*this.u?1-n/4:.9,this.lines.forEach(s=>{s.cache=[],s.lcache=""})}toggle(){this.enabled=!this.enabled}update(e,t=1){let n=e>224?"multiply":"screen";n!==this.blend&&(this.el.style.mixBlendMode=n,this.blend=n);let s=Te(t).toFixed(3);s!==this.alpha&&(this.el.style.opacity=s,this.alpha=s);for(let r of this.lines){let o=this.enabled&&e>=r.t0-.05&&e<r.t1+r.exitDur;o!==r.vis&&(r.el.style.display=o?"block":"none",r.vis=o,r.cache=[],r.lcache=""),o&&this.frame(r,e)}}frame(e,t){let n=this.u,s=t-e.t0,r=t-e.t1,o=r>0?Te(r/e.exitDur):0,a=re.get("loud",t),l="",c=1,h=0;switch(e.style){case"v":l=`translate(-50%,${(s*3*n).toFixed(1)}px)`;break;case"h":l=`translate(${(s*3*n).toFixed(1)}px,-50%)`;break;case"center":case"credit":case"whisper":l=`translate(-50%,-50%) scale(${(1+s*.006).toFixed(4)})`;break;case"en":l=`translate(-50%,-50%) scale(${(.97+s*.005).toFixed(4)})`;break;case"cine":l="translate(-50%,-50%)";break;case"pencil":l="translate(0,-50%)";break}e.out==="fade"?c=1-_e.inOut(o):e.out==="blur"?(c=1-o,h=o*12*n,l+=` scale(${(1+o*.08).toFixed(3)})`):e.out==="rise"&&(c=1-_e.in(o),h=o*4*n,l+=` translateY(${(-o*50*n).toFixed(1)}px)`);let u=l+c.toFixed(3)+h.toFixed(1)+this.cineY;if(u!==e.lcache){e.lcache=u;let d=e.el.style;d.transform=l,d.opacity=c.toFixed(3),d.filter=h>.1?`blur(${h.toFixed(1)}px)`:"",e.style==="cine"&&(d.top=(this.cineY*100).toFixed(2)+"%")}if(e.Z){let d=1-Te(r/.6),p=e.style==="pencil"?1:.9,g=_e.out($(e.t0+.15,e.t0+1,t))*d,x=_e.out($(e.t0+.5,e.t0+1.5,t))*d,m=g.toFixed(3)+x.toFixed(3);if(m!==e.zc){e.zc=m;let f=e.style==="v",_=f?"X":"Y",y=M=>`translate${_}(${((f?-1:1)*(1-M)*8*n).toFixed(1)}px)`;e.R.style.transform=`scale${f?"Y":"X"}(${g.toFixed(3)})`,e.R.style.opacity=(g*.9).toFixed(3),e.ZH&&(e.ZH.style.opacity=(g*p).toFixed(3),e.ZH.style.transform=y(g)),e.X&&(e.X.style.opacity=x.toFixed(3),e.X.style.transform=y(x))}}for(let d=0;d<e.spans.length;d++){let p=e.style==="oh"?this.ohUnit(e,d,t,n):this.unit(e,d,t,n,a,r);p!==e.cache[d]&&(e.cache[d]=p,e.spans[d].style.cssText=p)}}unit(e,t,n,s,r,o){let a=n-e.ut[t],l=e.spans.length;if(a<0)return"opacity:0";let c=Te(a/e.fd),h=1,u=0,d=0,p=1,g=0,x=0,m=e.c,f=e.c,_=.55,y=14;switch(e.o.rainbow&&(f=Hf[t%6],m=_r(f,Gf,.5)),e.in){case"type":{let S=Math.exp(-a*10);u=(vr(t*13+Math.floor(n*40))-.5)*3*s*S,_=.4+S,y=6+16*S;break}case"burn":{let S=Te(a/1.1);h=_e.out(Te(a/.3)),m=S<.5?_r(zf,Vf,S*2):_r(Vf,e.c,S*2-1),f=zf,_=1-.55*S,y=10+26*(1-S),d=(1-c)*8*s;break}case"ink":{let S=_e.out(Te(a/1.2));h=S,x=(1-S)*3*s,p=1.08-.08*S,m=_r(Hf[t%6],_y,$(.2,1.8,a)*.6),_=0;break}default:{let S=_e.out(c);h=S,x=(1-S)*9*s,d=(1-S)*12*s,_=.45+.6*(1-S),y=12+24*(1-S)}}if(e.in!=="ink"&&(_=_*(.8+.5*r)+Math.exp(-a*2.5)*.35),o>0&&e.out==="dust"){let S=Te((o-t/l*e.exitDur*.45)/(e.exitDur*.55));h*=1-S,d-=(S*36+S*S*20)*s,u+=(vr(t*7.3+e.t0)-.5)*50*s*S,x+=S*7*s,p*=1+S*.25}else if(o>0&&e.out==="shatter"){let S=Te(o/e.exitDur),R=vr(t*3.1+e.t0),w=vr(t*5.7+1),P=vr(t*9.2+2);u+=(R-.5)*240*s*S,d+=(-60*w+320*S)*S*s,g=(P-.5)*220*S,h*=1-S*S,p*=1-.3*S}let M=`opacity:${h.toFixed(3)};color:${Ji(m)}`;if((u||d||p!==1||g)&&(M+=`;transform:translate(${u.toFixed(1)}px,${d.toFixed(1)}px) rotate(${g.toFixed(1)}deg) scale(${p.toFixed(3)})`),x>.15&&(M+=`;filter:blur(${x.toFixed(1)}px)`),_>.01){let S=Math.min(_,1);M+=`;text-shadow:0 0 ${(y*s).toFixed(1)}px ${Ji(f,S)},0 0 ${(y*3*s).toFixed(1)}px ${Ji(f,S*.35)}`}return M}ohUnit(e,t,n,s){let r=n-e.ut[t],o=e.bases[t];if(r<0)return o+"opacity:0";let a=_e.out(Te(r/.5)),l=Math.exp(-r*4),c=e.c,h=$(0,.06,r)*(1-.5*$(.5,2.5,r))*(1-Te((n-e.t1)/e.exitDur));return o+`opacity:${h.toFixed(3)};color:${Ji(_r(c,Gf,l*.5))};transform:translate(-50%,-50%) translateY(${(-r*5*s).toFixed(1)}px) scale(${(1.45-.45*a).toFixed(3)});text-shadow:0 0 ${((10+40*l)*s).toFixed(1)}px ${Ji(c,.6+.4*l)},0 0 ${(80*l*s+1).toFixed(1)}px ${Ji([1,.7,.5],.5*l)}`}};var My=`
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
body.olk-idle{cursor:none}`,Xf=i=>(i=Math.max(0,i),`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`),ro=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t&&(n.innerHTML=t),n},qa=class{constructor(e,t,n){this.cb=t,this.dur=n,this.clean=!1,this.hidden=!1;let s=ro("style");s.textContent=My,document.head.appendChild(s);let r='<div class="olk-title">One Last Kiss</div><div class="olk-sub">Hikaru Utada</div>';this.load=ro("div","olk-ov",r+'<div class="olk-prog"><i></i></div><div class="olk-pct">0%</div>'),this.gate=ro("div","olk-ov hide",r+'<button class="olk-btn" aria-label="Play">\u25B6 \u70B9\u51FB\u64AD\u653E</button><div class="olk-hint">\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5E26\u58F0\u97F3\u7684\u81EA\u52A8\u64AD\u653E<br>\u53CC\u51FB\u6587\u4EF6\u5939\u91CC\u7684\u300CPlay-OneLastKiss.bat\u300D\u5373\u53EF\u5168\u5C4F\u81EA\u52A8\u64AD\u653E</div>'),this.bar=ro("div","idle"),this.bar.id="olk-bar",this.bar.innerHTML='<button data-k="play" aria-label="Play or pause">\u275A\u275A</button><span class="tm">0:00</span><div id="olk-track" role="slider" aria-label="Seek" tabindex="0"><i></i></div><span class="du"></span><button data-k="lyr" aria-label="Toggle lyrics">\u8BCD</button><button data-k="fs" aria-label="Fullscreen">\u26F6</button>',this.endEl=ro("div","hide",'<button class="olk-btn" aria-label="Replay">\u21BB \u91CD\u64AD</button>'),this.endEl.id="olk-end",[this.load,this.gate,this.bar,this.endEl].forEach(l=>e.appendChild(l)),this.bar.querySelector(".du").textContent=Xf(n),this.track=this.bar.querySelector("#olk-track"),this.fill=this.track.firstChild,this.playBtn=this.bar.querySelector("[data-k=play]"),this.tm=this.bar.querySelector(".tm"),this.bar.addEventListener("click",l=>{let c=l.target.dataset&&l.target.dataset.k;c==="play"?t.toggle():c==="lyr"?t.lyrics():c==="fs"&&this.fullscreen()}),this.track.addEventListener("click",l=>{let c=this.track.getBoundingClientRect();t.seek((l.clientX-c.left)/c.width*n)}),this.endEl.querySelector("button").addEventListener("click",()=>t.restart());let o=0,a=()=>{this.clean||this.hidden||(this.bar.classList.remove("idle"),document.body.classList.remove("olk-idle"),clearTimeout(o),o=setTimeout(()=>{this.bar.classList.add("idle"),document.body.classList.add("olk-idle")},2600))};addEventListener("mousemove",a),addEventListener("touchstart",a),addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(c===" "||c==="k")l.preventDefault(),t.toggle();else if(c==="arrowright")t.seekBy(5);else if(c==="arrowleft")t.seekBy(-5);else if(c==="f")this.fullscreen();else if(c==="l")t.lyrics();else if(c==="r")t.restart();else if(c==="h")this.hidden=!this.hidden,this.bar.classList.add("idle");else if(c!=="c"&&c!=="v")return;a()})}fullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}loading(e,t){this.load.querySelector("i").style.width=(e*100).toFixed(1)+"%",this.load.querySelector(".olk-pct").textContent=t||Math.round(e*100)+"%"}ready(e=!1){e&&(this.load.style.transition="none"),this.load.classList.add("hide")}showGate(e){this.gate.classList.remove("hide");let t=this.gate.querySelector("button");t.focus();let n=()=>{this.gate.classList.add("hide"),e()};t.addEventListener("click",n,{once:!0})}update(e,t,n){this.fill.style.width=(e/this.dur*100).toFixed(2)+"%",this.tm.textContent=Xf(e),this.playBtn.textContent=t?"\u275A\u275A":"\u25B6",this.endEl.classList.toggle("hide",!n||this.clean)}};var Mr=[{id:"zh",label:"\u4E2D\u6587",langs:["zh"]},{id:"ja",label:"\u65E5\u672C\u8A9E",langs:["ja"]},{id:"en",label:"English",langs:["en"]},{id:"zh-ja",label:"\u4E2D\u6587 + \u65E5\u672C\u8A9E",langs:["zh","ja"]},{id:"ja-en",label:"\u65E5\u672C\u8A9E + English",langs:["ja","en"]},{id:"zh-en",label:"\u4E2D\u6587 + English",langs:["zh","en"]}],Ey=`
#cc{position:fixed;left:50%;bottom:6.5%;transform:translateX(-50%);z-index:14;display:flex;flex-direction:column;align-items:center;gap:2px;pointer-events:none;transition:bottom .35s ease;max-width:86vw}
#cc.up{bottom:calc(6.5% + 46px)}
#cc span{display:inline-block;background:rgba(8,8,8,.75);color:#fff;padding:.08em .45em .12em;border-radius:3px;line-height:1.35;
  font:500 clamp(15px,2.35vw,34px)/1.35 "Microsoft YaHei","PingFang SC","Yu Gothic UI","Hiragino Sans","Noto Sans CJK SC","OLK SC",system-ui,sans-serif;
  text-align:center;white-space:pre-wrap;letter-spacing:.02em}
#cc span.s2{font-size:clamp(12px,1.75vw,25px);color:#e8e8e8}
#cc.off{display:none}
.cc-btn{position:relative;font:700 11px/1 "OLK Mono",monospace!important;border:1.5px solid #eee!important;border-radius:3px;height:18px!important;min-width:26px!important;padding:0 4px;margin:0 2px}
.cc-btn.on{box-shadow:inset 0 -3px 0 #e53935}
#cc-menu{position:fixed;right:18px;bottom:58px;z-index:16;background:rgba(20,20,20,.92);border-radius:8px;padding:6px 0;min-width:190px;font:13px "Microsoft YaHei","Yu Gothic UI","OLK SC",sans-serif;color:#eee;box-shadow:0 6px 30px rgba(0,0,0,.5)}
#cc-menu.hide{display:none}
#cc-menu .hd{padding:8px 16px 6px;opacity:.6;font-size:12px;letter-spacing:.1em}
#cc-menu button{display:flex;align-items:center;gap:10px;width:100%;background:none;border:0;color:#eee;padding:9px 16px;cursor:pointer;font:inherit;text-align:left}
#cc-menu button:hover,#cc-menu button:focus-visible{background:rgba(255,255,255,.1);outline:none}
#cc-menu button i{width:14px;font-style:normal;color:#e7c58f}`,by=/^[\x20-\x7e’‘“”—…]+$/;function Sy(){let i=yr.filter(t=>t[4]!=="credit").slice().sort((t,n)=>t[0]-n[0]),e=[];for(let t=0;t<i.length;t++){let[n,s,r,o,a,,l]=i[t];if(e.length&&Math.abs(e[e.length-1].t0-n)<.01)continue;let c=by.test(r),h=a==="oh";e.push({t0:n,t1:Math.min(s,t+1<i.length?i[t+1][0]-.02:s),ja:h?r:c&&l||r,en:h||c?r:l||"",zh:h?"\u54E6\u2014\u2014":o||r})}return e}var Ya=class{constructor(e,t){let n=document.createElement("style");n.textContent=Ey,document.head.appendChild(n),this.cues=Sy(),this.on=!1,this.track=Mr[3],this.cur=null,this.el=document.createElement("div"),this.el.id="cc",this.el.className="off",this.el.setAttribute("aria-live","polite"),e.appendChild(this.el),this.btn=document.createElement("button"),this.btn.className="cc-btn",this.btn.textContent="CC",this.btn.setAttribute("aria-label","\u5B57\u5E55 Subtitles"),this.btn.setAttribute("aria-pressed","false"),this.lang=document.createElement("button"),this.lang.textContent="\u2699",this.lang.setAttribute("aria-label","\u5B57\u5E55\u8BED\u8A00 Subtitle language");let s=t.querySelector("[data-k=fs]");t.insertBefore(this.btn,s),t.insertBefore(this.lang,s),this.menu=document.createElement("div"),this.menu.id="cc-menu",this.menu.className="hide",this.menu.setAttribute("role","menu"),this.menu.innerHTML='<div class="hd">\u5B57\u5E55 \xB7 \u5B57\u5E55 \xB7 Subtitles</div><button data-t="off" role="menuitemradio"><i></i>\u5173\u95ED / \u30AA\u30D5 / Off</button>'+Mr.map(r=>`<button data-t="${r.id}" role="menuitemradio"><i></i>${r.label}</button>`).join(""),e.appendChild(this.menu),this.btn.addEventListener("click",r=>{r.stopPropagation(),this.toggle()}),this.lang.addEventListener("click",r=>{r.stopPropagation(),this.menu.classList.toggle("hide"),this.paintMenu()}),this.menu.addEventListener("click",r=>{let o=r.target.closest("button");if(!o)return;let a=o.dataset.t;a==="off"?this.set(!1):(this.track=Mr.find(l=>l.id===a),this.set(!0)),this.menu.classList.add("hide")}),addEventListener("click",r=>{this.menu.contains(r.target)||this.menu.classList.add("hide")}),addEventListener("keydown",r=>{let o=r.key.toLowerCase();o==="c"?this.toggle():o==="v"&&(this.track=Mr[(Mr.indexOf(this.track)+1)%Mr.length],this.set(!0))})}toggle(){this.set(!this.on)}set(e){this.on=e,this.cur=null,this.el.classList.toggle("off",!e),this.btn.classList.toggle("on",e),this.btn.setAttribute("aria-pressed",String(e)),this.paintMenu()}paintMenu(){this.menu.querySelectorAll("button").forEach(e=>{let t=this.on?e.dataset.t===this.track.id:e.dataset.t==="off";e.querySelector("i").textContent=t?"\u2713":"",e.setAttribute("aria-checked",String(t))})}update(e,t){if(this.el.classList.toggle("up",!!t),!this.on)return;let n=this.cues.find(r=>e>=r.t0&&e<r.t1)||null,s=n?n.t0+this.track.id:"";s!==this.cur&&(this.cur=s,this.el.textContent="",n&&this.track.langs.forEach((r,o)=>{if(!n[r])return;let a=document.createElement("span");a.textContent=n[r],o>0&&(a.className="s2"),this.el.appendChild(a)}))}};var wy=`
#hud{position:fixed;inset:0;z-index:12;pointer-events:none;overflow:hidden;font-family:"OLK Mono",monospace;color:#ff8a1e}
#hud .h{position:absolute;opacity:0;will-change:opacity,transform}
#hud .alert{left:50%;top:50%;transform:translate(-50%,-50%);padding:.35em 1.1em .45em;border:3px solid currentColor;background:rgba(40,0,0,.35);text-align:center;
  box-shadow:0 0 22px rgba(255,60,20,.45), inset 0 0 18px rgba(255,60,20,.3)}
#hud .alert:before,#hud .alert:after{content:"";position:absolute;left:-3px;right:-3px;height:12px;background:repeating-linear-gradient(-45deg,currentColor 0 10px,transparent 10px 20px)}
#hud .alert:before{top:-18px} #hud .alert:after{bottom:-18px}
#hud .alert b{display:block;font:900 clamp(26px,5.6vw,86px)/1.05 "OLK Mincho",serif;letter-spacing:.08em;transform:scaleY(1.15)}
#hud .alert i{display:block;font:500 clamp(10px,1.1vw,16px)/1.4 "OLK Mono",monospace;letter-spacing:.45em;font-style:normal;margin-top:.3em}
#hud .sync{right:4%;top:9%;text-align:right}
#hud .sync small{display:block;font-size:clamp(9px,.9vw,13px);letter-spacing:.35em;opacity:.8}
#hud .sync b{font:700 clamp(28px,4.4vw,66px)/1 "OLK Mono",monospace;letter-spacing:.02em;text-shadow:0 0 14px rgba(255,120,30,.6)}
#hud .sync .bar{height:4px;margin-top:6px;background:rgba(255,138,30,.25);position:relative}
#hud .sync .bar i{position:absolute;left:0;top:0;bottom:0;background:currentColor;box-shadow:0 0 8px currentColor}
#hud .magi{left:50%;bottom:16%;transform:translateX(-50%);display:flex;gap:1.4vw}
#hud .magi div{border:2px solid currentColor;padding:.35em .8em;min-width:8.5vw;text-align:center;font-size:clamp(9px,.95vw,14px);letter-spacing:.2em;background:rgba(0,0,0,.35)}
#hud .magi div b{display:block;font:700 clamp(13px,1.5vw,22px) "OLK Mincho",serif;letter-spacing:.3em;margin-top:.2em}
#hud .magi div.no{color:#ff3a2a} #hud .magi div.ok{color:#5de0ff}
#hud .cap{left:4.5%;top:8%;border-left:3px solid #f4efe6;padding:.1em 0 .15em .7em;color:#f4efe6;text-shadow:0 0 8px rgba(0,0,0,.6)}
#hud .cap b{display:block;font:600 clamp(14px,1.7vw,26px)/1.3 "OLK Mincho",serif;letter-spacing:.25em}
#hud .cap i{display:block;font:400 clamp(9px,.85vw,12px)/1.6 "OLK Mono",monospace;letter-spacing:.4em;font-style:normal;opacity:.75}
#hud .code{left:3%;bottom:6%;font-size:clamp(10px,1vw,14px);letter-spacing:.3em;color:#9ff0c8;text-shadow:0 0 6px rgba(120,255,180,.6)}
#hud .frame{inset:5%;border:0}
#hud .frame:before,#hud .frame:after{content:"";position:absolute;width:3.5vw;height:3.5vw;border:2px solid currentColor}
#hud .frame:before{left:0;top:0;border-right:0;border-bottom:0} #hud .frame:after{right:0;bottom:0;border-left:0;border-top:0}
#hud .frame s{position:absolute;left:50%;top:50%;width:2.4vw;height:2.4vw;margin:-1.2vw 0 0 -1.2vw;border:1px solid currentColor;border-radius:50%;text-decoration:none}
#hud .frame u{position:absolute;right:0;top:0;font-size:clamp(9px,.8vw,12px);letter-spacing:.3em;text-decoration:none}
#hud .count{right:6%;bottom:12%;font:700 clamp(40px,8vw,130px)/1 "OLK Mono",monospace;color:#ff3a2a;text-shadow:0 0 18px rgba(255,40,20,.7)}
#hud.off{display:none}`,$a=(i,e=2)=>String(Math.floor(i)).padStart(e,"0"),Ka=class{constructor(e,t){let n=document.createElement("style");n.textContent=wy,document.head.appendChild(n),this.el=document.createElement("div"),this.el.id="hud",e.appendChild(this.el),this.items=t.map(s=>({...s,el:this.make(s)}))}make(e){let t=document.createElement("div");return t.className="h "+e.kind,e.color&&(t.style.color=e.color),e.kind==="alert"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="sync"?t.innerHTML=`<small>${e.label||"SYNCHRO RATIO"}</small><b>0.0%</b><div class="bar"><i></i></div>`:e.kind==="magi"?t.innerHTML=["MELCHIOR\xB71","BALTHASAR\xB72","CASPER\xB73"].map(n=>`<div>${n}<b>\u5BE9\u8B70\u4E2D</b></div>`).join(""):e.kind==="cap"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="frame"?t.innerHTML=`<s></s><u>${e.text||""}</u>`:t.textContent="",e.style&&Object.assign(t.style,e.style),this.el.appendChild(t),t}toggle(e){this.el.classList.toggle("off",!e)}update(e,t=1){for(let n of this.items){let{el:s,t0:r,t1:o,kind:a}=n;if(e<r-.05||e>o+.6){s._v!==0&&(s.style.opacity=0,s._v=0);continue}let l=n.fin??.12,c=n.fout??.35,h=$(r,r+l,e)*(1-$(o,o+c,e)),u=Te((e-r)/(o-r));if(a==="alert"){let d=re.beat(e)*(n.rate||2);h*=d-Math.floor(d)<.72?1:.15,s.style.transform=`translate(-50%,-50%) scale(${1+.05*re.hitPulse("kick",e,10)})`}else if(a==="sync"){let d=(n.from??0)+((n.to??100)-(n.from??0))*Math.pow(u,n.pow||1.6)+Math.sin(e*37)*.35;s.querySelector("b").textContent=d.toFixed(1)+"%",s.querySelector(".bar i").style.width=Te(d/(n.max||100))*100+"%",s.style.color=d>(n.warn??1e9)?"#ff3a2a":""}else if(a==="magi"){let d=s.children,p=re.count("kick",r,e);for(let g=0;g<3;g++){let x=u>.7,m=x?(n.result||[1,1,1])[g]:(p+g)%3!==0;d[g].className=m?"ok":"no",d[g].querySelector("b").textContent=x?m?"\u53EF\u6C7A":"\u5426\u6C7A":(p+g)%2?"\u5BE9\u8B70\u4E2D":m?"\u627F\u8A8D":"\u5426\u6C7A"}}else if(a==="code"){let d=Math.max(0,n.rev?(n.base??0)-(e-r)*n.rev:e-(n.base??0));s.textContent=`${n.text||"S-DAT"}  ${n.track?"TR "+n.track:""}  ${$a(d/60)}:${$a(d%60)}:${$a(d*100%100)}`}else a==="count"?s.textContent=$a(Math.max(0,n.from-re.count("kick",r,e))):a==="cap"&&(s.style.transform=`translateX(${(1-$(r,r+.5,e))*-12}px)`);e-r<.25&&(h*=Math.floor(e*60)%3===0?.2:1),h*=t,Math.abs(h-(s._v??-1))>.004&&(s.style.opacity=h.toFixed(3),s._v=h)}}};var st=class{constructor(e,t={}){this.ctx=e,this.scene=new oi,this.camera=t.ortho?new Wi(-e.aspect,e.aspect,1,-1,.1,100):new Vt(t.fov||45,e.aspect,t.near||.1,t.far||2e3),t.ortho&&(this.camera.position.z=10),this.ortho=!!t.ortho,this.clear=new xe(0,0,0)}build(){}update(e,t){}post(e){return{}}resize(e,t){let n=e/t;this.ortho?(this.camera.left=-n,this.camera.right=n):this.camera.aspect=n,this.camera.updateProjectionMatrix()}render(e,t){e.setRenderTarget(t),e.setClearColor(this.clear,1),e.clear(),e.render(this.scene,this.camera)}},Ty="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function ci(i,e,t={}){let n=new ae({vertexShader:Ty,fragmentShader:i,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Dn}),s=new G(new ve(2,2),n);return s.frustumCulled=!1,s.renderOrder=t.order??-100,s}function qf(i,e,t,n={}){return new ae({vertexShader:i,fragmentShader:e,uniforms:t,transparent:!0,depthWrite:!1,blending:De,...n})}async function Yf(){let i=window.OLK_IMG||{},e={};return await Promise.all(Object.entries(i).map(async([t,n])=>{let s=new Image;s.src=n.src;try{await s.decode()}catch{console.warn("image decode failed",t);return}let r=new ln(s),o=t.endsWith("_d");r.colorSpace=o?mn:an,r.anisotropy=4,r.wrapS=r.wrapT=Mi,r.needsUpdate=!0,e[t]={tex:r,img:s,w:n.w,h:n.h}})),e}function $f(i,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});return s.drawImage(i.img,0,0,e,t),s.getImageData(0,0,e,t).data}var Ay="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function Za(i,e,t={}){let n={uImg:{value:i.tex},uDep:{value:e?e.tex:null},uHasDep:{value:e?1:0},uAspect:{value:1.7777777777777777},uImgAspect:{value:i.w/i.h},uCam:{value:new T(0,0,1)},uPar:{value:new ee(0,0)},uDolly:{value:0},uFocus:{value:.5},uBlur:{value:0},uT:{value:0},uGain:{value:1},uTint:{value:new T(1,1,1)},uAlpha:{value:1},...t.uniforms||{}},s=`
uniform sampler2D uImg, uDep; uniform float uHasDep, uAspect, uImgAspect, uDolly, uFocus, uBlur, uT, uGain, uAlpha;
uniform vec3 uCam, uTint; uniform vec2 uPar; varying vec2 vUv;
${Ne}
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
}`;return new ae({vertexShader:Ay,fragmentShader:s,uniforms:n,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Dn})}function Ja(i,e=-100){let t=new G(new ve(2,2),i);return t.frustumCulled=!1,t.renderOrder=e,t}function ji(i,e={}){let t={uTex:{value:i.tex},uT:{value:0},uWind:{value:e.wind??1},uAlpha:{value:1},uRim:{value:new je(1,.8,.55,e.rim??.6)},uTint:{value:new T(1,1,1)},uDis:{value:0},uTexel:{value:new ee(1/i.w,1/i.h)},uSeed:{value:e.seed??0},uClip:{value:new je(-1,0,1,0)}},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",s=`
uniform sampler2D uTex; uniform float uT, uWind, uAlpha, uDis, uSeed; uniform vec4 uRim; uniform vec3 uTint; uniform vec2 uTexel; uniform vec4 uClip;
varying vec2 vUv; ${Ne}
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
}`;return new ae({vertexShader:n,fragmentShader:s,uniforms:t,transparent:!0,depthWrite:!1})}function Qi(i,e=1){let t=new ve(e*i.w/i.h,e);return t.translate(0,e/2,0),t}var ja={kick:{hook:"col *= 1.0 + uK * 0.35 * smoothstep(0.35, 1.0, dot(col, vec3(0.33)));"},sweep:{hook:"{ float b = suv.x * 0.8 + suv.y * 0.35 - (uU * 1.8 - 0.45); col += uFxCol * exp(-b * b * 60.0) * (0.25 + 0.75 * d) * uFx.x; }"},rays:{hook:`{ vec2 L = uLight.xy; vec3 acc = vec3(0.0); vec2 p = uv; vec2 st = (vec2(L.x, L.y) - suv) * 0.035;
      for (int i = 0; i < 14; i++) { p += st * vec2(1.0 / uCam.z); vec3 s = texture2D(uImg, p).rgb; acc += max(s - 0.62, 0.0); }
      col += acc * uLight.z * uFxCol * 0.22; }`},sparkfn:{head:`vec3 sparks(vec2 p, float t, float up, vec3 c1, float dens){ vec3 acc = vec3(0.0);
      for (int L = 0; L < 3; L++) { float fl = float(L); float s = 7.0 + fl * 6.0; vec2 q = p * vec2(s * uAspect, s);
        q.y -= t * up * (0.7 + fl * 0.45); q.x += sin(q.y * 0.6 + fl * 3.0 + t * 0.7) * 0.35;
        vec2 id = floor(q), f = fract(q) - 0.5; float h = hash12(id + fl * 17.0);
        if (h > 1.0 - dens) { vec2 o = (hash22(id) - 0.5) * 0.6; float r = length(f - o);
          acc += c1 * smoothstep(0.1 - fl * 0.02, 0.0, r) * (0.55 + 0.45 * sin(t * 5.0 + h * 50.0)) * (1.2 - fl * 0.3); } }
      return acc; }`},embers:{hook:"col += sparks(suv, uL, 1.0, vec3(1.6, 0.55, 0.14), 0.22) * uFx.y;",needs:"sparkfn"},fireflies:{hook:"col += sparks(suv + vec2(sin(uL * 0.3) * 0.02, 0.0), uL * 0.35, 0.6, vec3(1.0, 0.9, 0.45), 0.12) * uFx.y;",needs:"sparkfn"},fall:{hook:"col += sparks(vec2(suv.x, 1.0 - suv.y), uL, 1.8, vec3(1.8, 1.1, 0.5), 0.1) * uFx.y;",needs:"sparkfn"},lcl:{head:`vec3 drops(vec2 p, float t){ vec3 acc = vec3(0.0);
      for (int L = 0; L < 2; L++) { float fl = float(L); float s = 3.0 + fl * 3.0; vec2 q = p * vec2(s * uAspect, s);
        q.y -= t * (0.25 + fl * 0.2); vec2 id = floor(q), f = fract(q) - 0.5; float h = hash12(id + 3.0 + fl * 7.0);
        if (h > 0.45) { vec2 o = (hash22(id + 1.0) - 0.5) * 0.5; float r = length(f - o); float R = 0.1 + 0.12 * h;
          acc += vec3(1.5, 0.52, 0.12) * (smoothstep(R, R * 0.7, r) * 0.35 + smoothstep(R, R * 0.92, r) * smoothstep(R * 0.8, R * 0.92, r) * 0.6) * (1.0 - fl * 0.4); } }
      return acc; }`,hook:"col += drops(suv, uL) * uFx.z;"},heat:{warp:"uv.x += (vnoise(uv * vec2(9.0, 26.0) - vec2(0.0, uT * 2.4)) - 0.5) * 0.005 * (1.2 - d); uv.y += (vnoise(uv * 14.0 + uT) - 0.5) * 0.002;"},drift:{warp:"uv.x -= uL * 0.0035 * smoothstep(0.35, 0.05, d);"},water:{warp:"if (uWater > 0.0 && uv.y < uWater) { float k = (uWater - uv.y); uv += vec2(sin(uv.y * 380.0 / (k + 0.05) + uT * 2.0), cos(uv.x * 90.0 + uT * 1.4)) * 0.0012 * smoothstep(0.0, 0.02, k); }"},glint:{hook:`{ vec2 g = floor(suv * vec2(190.0, 107.0)); float h = hash12(g + floor(uL * 0.5)); float l = dot(col, vec3(0.33));
      col += vec3(1.3, 1.1, 0.9) * step(0.993, h) * pow(0.5 + 0.5 * sin(uT * 4.0 + h * 90.0), 10.0) * smoothstep(0.35, 0.9, l) * 2.5 * uFx.x; }`},wave:{hook:`{ vec2 q = (suv - uWave.xy) * vec2(uAspect, 1.0); float r = length(q) + (fbm(suv * 6.0 + 3.0) - 0.5) * 0.18;
      float ins = smoothstep(uWave.z, uWave.z - 0.08, r); float edge = exp(-pow((r - uWave.z) * 45.0, 2.0));
      float l = dot(col, vec3(0.3, 0.55, 0.15));
      vec3 red = vec3(l * 1.5 + 0.05, l * 0.12, l * 0.1) + vec3(0.25, 0.0, 0.02) * (1.0 - d);
      vec3 blue = col * vec3(0.85, 1.0, 1.1) + vec3(0.0, 0.05, 0.1);
      vec3 tgt = uWave.w > 0.0 ? red : blue;
      if (uWave.w > 0.0) col = mix(col, tgt, ins); else col = mix(tgt * 0.35 + vec3(l * 1.3, l * 0.1, l * 0.1) * 0.65, col, ins);
      col += (uWave.w > 0.0 ? vec3(2.2, 0.4, 0.2) : vec3(0.15, 0.3, 0.55)) * edge * step(0.001, uWave.z) * step(uWave.z, 2.1) * (0.5 + 0.5 * vnoise(suv * 40.0 + uT)); }`},lineart:{hook:`if (uFx.w > 0.001) { vec2 px = vec2(1.0 / 1600.0, 1.0 / 900.0) * 1.3;
      float gx = 0.0, gy = 0.0;
      for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { float l = dot(texture2D(uImg, uv + vec2(float(i), float(j)) * px).rgb, vec3(0.3, 0.59, 0.11));
        gx += l * float(i) * (j == 0 ? 2.0 : 1.0); gy += l * float(j) * (i == 0 ? 2.0 : 1.0); }
      float e = smoothstep(0.1, 0.45, length(vec2(gx, gy)));
      vec3 paper = vec3(0.93, 0.9, 0.82) * (0.94 + 0.06 * vnoise(suv * 300.0));
      float wob = vnoise(suv * vec2(12.0, 7.0) + 4.0);
      float reveal = smoothstep(uFx.w * 1.3 - 0.3, uFx.w * 1.3, 1.0 - wob * 0.6 - suv.x * 0.4);
      vec3 ink = mix(paper, vec3(0.2, 0.18, 0.2), e);
      ink = mix(ink, vec3(0.85, 0.2, 0.18), e * step(0.8, vnoise(uv * 5.0)) * 0.7);
      col = mix(col, ink, 1.0 - reveal); }`},bands:{hook:`{ float s = fract(suv.x * 2.6 + suv.y * 0.35 - uL * 0.9); float w = smoothstep(0.0, 0.08, s) * smoothstep(0.55, 0.42, s);
      col *= mix(0.55, 1.35, w); col += vec3(1.0, 0.5, 0.2) * w * 0.12 * (1.0 - d * 0.5); }`},lightrain:{hook:`{ vec2 q = suv * vec2(70.0 * uAspect, 3.0); q.y += uL * 1.6 + hash12(vec2(floor(q.x), 0.0)) * 10.0; float h = hash12(vec2(floor(q.x), floor(q.y)));
      col += uFxCol * step(0.86, h) * smoothstep(0.5, 0.0, abs(fract(q.x) - 0.5)) * pow(fract(q.y), 6.0) * 0.8 * uFx.z; }`},crt:{hook:"col = mix(col, vec3(dot(col, vec3(0.2, 0.7, 0.1))) * vec3(0.5, 1.3, 0.6), uFx.w); col *= 0.8 + 0.2 * sin(suv.y * 900.0);"},train:{hook:`if (uA.w > 0.001) { float x = (suv.x - 0.5) * uAspect * 2.0; float yy = (suv.y - 0.06) / 0.8;
      if (x < uA.x && x > uA.y && yy > 0.0 && yy < 1.0) {
        float lx = uA.x - x; float car = mod(lx, 2.6); float gap = step(2.5, car) + step(car, 0.02);
        float nose = smoothstep(0.0, 0.12, lx);
        vec3 body = vec3(0.5, 0.47, 0.4) * (0.75 + 0.25 * smoothstep(0.0, 0.2, yy)) * (1.0 - 0.35 * smoothstep(0.9, 1.0, yy));
        body = mix(body, vec3(0.1, 0.32, 0.6), step(0.26, yy) * step(yy, 0.31));
        float wx = mod(car, 0.42); float win = step(0.5, yy) * step(yy, 0.8) * step(0.06, wx) * step(wx, 0.36) * step(0.2, car) * step(car, 2.3);
        vec3 glass = mix(vec3(0.62, 0.5, 0.36), vec3(0.3, 0.42, 0.55), yy) * 0.9;
        glass = mix(glass, texture2D(uImg, vec2(fract(suv.x * 0.3 + uA.x * 0.2), suv.y)).rgb * 0.9, 0.35);
        vec3 tr = mix(body, glass, win);
        tr *= 0.85 + 0.3 * vnoise(vec2(x * 1.5 - uT * 9.0, yy * 90.0));
        col = mix(col, tr, (1.0 - clamp(gap, 0.0, 1.0)) * nose * uA.w);
      } }`},hex:{head:`float hexd(vec2 p){ p = abs(p); return max(dot(p, vec2(0.866, 0.5)), p.y); }
      float hexgrid(vec2 p){ vec2 r = vec2(1.0, 1.732); vec2 h = r * 0.5; vec2 a = mod(p, r) - h, b = mod(p - h, r) - h; vec2 g = dot(a, a) < dot(b, b) ? a : b; return 0.5 - hexd(g); }`,hook:`if (uLight.w > 0.001) { vec2 q = (suv - uLight.xy) * vec2(uAspect, 1.0); float r = length(q);
      float ring = exp(-pow((r - uLight.w) * 14.0, 2.0)); float g = smoothstep(0.06, 0.0, hexgrid(q * 16.0));
      col += vec3(1.6, 0.7, 0.2) * (g * 0.8 + 0.3) * ring * (1.0 - smoothstep(0.6, 1.2, uLight.w)); }`}},Ry=[[0,0,0,1.04,0,0,0],[1,0,0,1.12,.012,0,.05]],oo=class extends st{constructor(e,t,n=0,s=1){super(e,{ortho:!0}),this.o=t,this.t0=n,this.t1=s;let r=e.img[t.img];if(!r)throw new Error("missing image "+t.img);let o=t.dep===!1?null:e.img[t.dep||t.img+"_d"]||null,a=new Set;(t.fx||[]).forEach(u=>{ja[u]&&ja[u].needs&&a.add(ja[u].needs),a.add(u)});let l=[...a].map(u=>ja[u]).filter(Boolean),c={uU:{value:0},uL:{value:0},uK:{value:0},uS:{value:0},uH:{value:0},uE:{value:0},uFx:{value:new je(...t.fxAmt||[1,1,1,0])},uFxCol:{value:new T(...t.fxCol||[1,.75,.5])},uLight:{value:new je(...t.light||[.5,.8,0,0])},uWave:{value:new je(.5,.5,0,1)},uWater:{value:t.water||0},uA:{value:new je},uB:{value:new je}},h=`uniform float uU, uL, uK, uS, uH, uE, uWater; uniform vec4 uFx, uLight, uWave, uA, uB; uniform vec3 uFxCol;
`+l.map(u=>u.head||"").join(`
`)+(t.head||"");this.M=Za(r,o,{uniforms:c,head:h,warp:l.map(u=>u.warp||"").join(`
`)+(t.warp||"")+`
return uv;`,hook:l.map(u=>u.hook||"").join(`
`)+(t.hook||"")+`
return col;`}),this.U=this.M.uniforms,t.gain&&(this.U.uGain.value=t.gain),t.tint&&this.U.uTint.value.set(...t.tint),this.U.uBlur.value=t.blur??0,this.U.uFocus.value=t.focus??.7,this.scene.add(Ja(this.M)),this.cuts=(t.cuts||[]).map((u,d)=>{let p=e.img[u.img];if(!p)throw new Error("missing cut "+u.img);let g=ji(p,{wind:u.wind??.5,rim:u.rim??.6,seed:d*3.1});u.rimCol&&g.uniforms.uRim.value.set(...u.rimCol,u.rim??.6),u.blend&&(g.blending=De);let x=new G(Qi(p,u.h||1),g);return x.renderOrder=10+d,x.frustumCulled=!1,this.scene.add(x),{c:u,m:g,mesh:x}}),t.build&&t.build(this,e)}u(e){return Te((e-this.t0)/Math.max(.001,this.t1-this.t0))}update(e,t){let n=this.o,s=this.U,r=this.u(e),o=za(r,n.cam||Ry,n.e||_e.sine),a=(n.punch??.6)*re.hitPulse("kick",e,9);s.uCam.value.set(o[0]||0,o[1]||0,(o[2]||1)*(1+a*.018)),s.uPar.value.set(o[3]||0,o[4]||0),s.uDolly.value=o[5]||0,s.uAspect.value=this.ctx.aspect,s.uT.value=e,s.uU.value=r,s.uL.value=e-this.t0,s.uK.value=re.hitPulse("kick",e,7),s.uS.value=re.hitPulse("snare",e,8),s.uH.value=re.hitPulse("hit",e,5),s.uE.value=re.get("energy",e),n.wave&&s.uWave.value.set(...n.wave(e,r)),n.lightFn&&s.uLight.value.set(...n.lightFn(e,r)),n.fxFn&&s.uFx.value.set(...n.fxFn(e,r)),n.trainFn&&s.uA.value.set(...n.trainFn(e,r));for(let{c:l,m:c,mesh:h}of this.cuts){let u=l.fn(e,r,this);h.visible=(u.a??1)>.002,h.position.set(u.x??0,u.y??-1,1);let d=u.s??1;h.scale.set(d*(u.flip?-1:1),d,1),h.rotation.z=u.r||0,c.uniforms.uT.value=e,c.uniforms.uAlpha.value=u.a??1,c.uniforms.uDis.value=u.dis||0,u.tint&&c.uniforms.uTint.value.set(...u.tint)}n.tick&&n.tick(e,r,this)}post(e){let t=this.o,n=this.u(e),s={bloom:.75,bloomThr:.72,grain:.07,vig:.5,ca:.7,dust:.15,punch:(t.punch??.6)*re.hitPulse("kick",e,10)*.6},r=typeof t.post=="function"?t.post(e,n,this):t.post||{};return{...s,...r}}},mt=i=>(e,t,n)=>new oo(e,i,t,n);var Ct={mincho:'"OLK Mincho", "Yu Mincho", serif',serif:'"OLK Serif", "Times New Roman", serif',script:'"OLK Script", cursive',sc:'"OLK SC", "Songti SC", serif',mono:'"OLK Mono", monospace'};function Lt(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function qt(i,e={}){let t=new qi(i);return t.colorSpace=e.linear?mn:an,t.anisotropy=4,e.repeat&&(t.wrapS=t.wrapT=ps),e.mip===!1&&(t.generateMipmaps=!1,t.minFilter=Zt),t.needsUpdate=!0,t}function Kf(i,e={}){let t=e.size||96,n=e.pad??Math.ceil(t*.35),s=`${e.style||""} ${e.weight||400} ${t}px ${e.font||Ct.serif}`,r=Lt(8,8).getContext("2d");r.font=s;let o=e.spacing||0,a=Math.ceil(r.measureText(i).width+o*i.length+n*2),l=Math.ceil(t*1.4+n*2),c=Lt(a,l),h=c.getContext("2d");return h.font=s,h.textBaseline="middle",h.fillStyle=e.color||"#fff","letterSpacing"in h&&(h.letterSpacing=o+"px"),e.glow&&(h.shadowColor=e.glowColor||e.color||"#fff",h.shadowBlur=e.glow),h.fillText(i,n,l/2),e.glow&&(h.shadowBlur=0,h.fillText(i,n,l/2)),{c,w:a,h:l}}function Qa(i=128,e=1){let t=Lt(i,i),n=t.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.12*e,"rgba(255,255,255,0.55)"),r.addColorStop(.4,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,i),qt(t,{linear:!0})}var Cy=`
uniform sampler2D uTex, uPrev; uniform float uT, uAge, uAspect, uFlash, uRed, uInv; varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 uv = vUv - 0.5; uv.x *= uAspect / (16.0 / 9.0);
  float z = 1.0 + uAge * 0.025; uv /= z; uv += 0.5;
  float fr = floor(uT * 30.0);
  uv.x += (h(vec2(floor(uv.y * 90.0), fr)) - 0.5) * 0.004 * step(0.85, h(vec2(fr, 3.0))) ;
  vec3 c = vec3(0.0);
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) c = texture2D(uTex, uv).rgb;
  float on = smoothstep(0.0, 0.05, uAge);
  c *= on * (0.94 + 0.06 * h(vec2(fr, 1.0)));
  c = mix(c, vec3(c.r, c.r * 0.12, c.r * 0.08) * 1.3, uRed);
  c = mix(c, 1.0 - c, uInv);
  c += uFlash;
  c *= 1.0 + 0.6 * smoothstep(0.35, 0.0, uAge);
  gl_FragColor = vec4(c * 1.15, 1.0);
}`,ao=class extends st{constructor(e,t){super(e,{ortho:!0}),this.pages=t.map(r=>({...r,tex:this.draw(r)})),this.U={uTex:{value:this.pages[0].tex},uPrev:{value:null},uT:{value:0},uAge:{value:0},uAspect:{value:16/9},uFlash:{value:0},uRed:{value:0},uInv:{value:0}};let n=new ae({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Cy,uniforms:this.U,depthTest:!1}),s=new G(new ve(2,2),n);s.frustumCulled=!1,this.scene.add(s)}draw(e){let t=Lt(1920,1080),n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,1920,1080);for(let s of e.lines){if(n.save(),n.font=`${s.weight||800} ${s.size}px ${Ct[s.font||"mincho"]}`,n.fillStyle=s.color||"#f4f1ea",n.textBaseline="alphabetic",n.translate(s.x*1920,s.y*1080),n.scale(s.sx||1,s.sy||1),n.textAlign=s.align||"left",s.track){let r=0,o=Array.from(s.s),a=o.reduce((l,c)=>l+n.measureText(c).width+s.track,-s.track);s.align==="center"?r=-a/2:s.align==="right"&&(r=-a),n.textAlign="left";for(let l of o)n.fillText(l,r,0),r+=n.measureText(l).width+s.track}else n.fillText(s.s,0,0);s.rule&&n.fillRect(s.rule[0],s.rule[1],s.rule[2],s.rule[3]),n.restore()}return qt(t,{mip:!1})}update(e){let t=0;for(;t+1<this.pages.length&&this.pages[t+1].t<=e;)t++;let n=this.pages[t];this.U.uTex.value=n.tex,this.U.uT.value=e,this.U.uAge.value=Math.max(0,e-n.t),this.U.uAspect.value=this.ctx.aspect,this.U.uRed.value=n.red||0,this.U.uInv.value=n.inv||0,this.U.uFlash.value=Te(.5-(e-n.t)*4)*(n.flash??.6)}post(e){return{bloom:.6,bloomThr:.6,grain:.1,vig:.35,ca:1.2,dust:0,tone:1,contrast:1.05,punch:re.hitPulse("kick",e,12)*.5}}};var Py=`
uniform sampler2D uA, uB; uniform float uAspect, uAA, uBA, uAge, uT, uK, uRed, uInv, uWhip;
uniform vec4 uCamA, uCamB; uniform vec2 uDir; uniform vec3 uTint; varying vec2 vUv;
${Ne}
vec2 cover(vec2 s, float ia, vec4 cam){ float ra = uAspect / ia; vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  return 0.5 + s * sc / cam.z + cam.xy; }
vec3 samp(sampler2D t, vec2 uv){ uv = clamp(uv, 0.001, 0.999); return texture2D(t, uv).rgb; }
void main(){
  vec2 s = vUv - 0.5;
  vec2 ua = cover(s, uAA, uCamA), ub = cover(s, uBA, uCamB);
  // whip: smear along uDir, strongest at the cut, the new card sliding in over the old
  float w = uWhip; vec3 a = vec3(0.0), b = vec3(0.0);
  for (int i = 0; i < 12; i++) { float f = (float(i) / 11.0 - 0.5) * w * 0.18;
    a += samp(uA, ua + uDir * (f + w * 0.25)); b += samp(uB, ub + uDir * f); }
  a /= 12.0; b /= 12.0;
  float m = smoothstep(0.0, 1.0, clamp(uAge / 0.06, 0.0, 1.0));
  float slide = dot(vUv - 0.5, -uDir) + 0.5;
  m = max(m, step(slide, uAge / 0.06));
  vec3 col = mix(b, a, 1.0 - m);
  // RGB split + flash on the cut
  col += vec3(1.0, 0.95, 0.9) * smoothstep(0.1, 0.0, uAge) * 0.55;
  col *= uTint * (1.0 + uK * 0.12);
  float l = dot(col, vec3(0.3, 0.55, 0.15));
  col = mix(col, vec3(l * 1.4, l * 0.12, l * 0.1), uRed);
  col = mix(col, 1.0 - col, uInv);
  gl_FragColor = vec4(col, 1.0);
}`,_s=class extends st{constructor(e,t,n={}){super(e,{ortho:!0}),this.cards=t.slice().sort((a,l)=>a.t-l.t),this.o=n;let s=a=>({value:a});this.U={uA:s(null),uB:s(null),uAspect:s(e.aspect),uAA:s(1.78),uBA:s(1.78),uAge:s(1),uT:s(0),uK:s(0),uRed:s(0),uInv:s(0),uWhip:s(0),uCamA:s(new je(0,0,1,0)),uCamB:s(new je(0,0,1,0)),uDir:s(new ee(1,0)),uTint:s(new T(1,1,1))};let r=new ae({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Py,uniforms:this.U,depthTest:!1,depthWrite:!1}),o=new G(new ve(2,2),r);o.frustumCulled=!1,this.scene.add(o);for(let a of this.cards){let l=e.img[a.img];if(!l)throw new Error("montage: missing "+a.img);a.e=l}}idx(e){let t=0;for(;t+1<this.cards.length&&this.cards[t+1].t<=e;)t++;return t}cam(e,t){let n=this.cards[this.cards.indexOf(e)+1],s=n?n.t-e.t:2.5,r=Te((t-e.t)/s),[o,a]=e.z||[1.14,1.05],l=e.dir||[1,0],c=_e.outExpo(Te((t-e.t)/.45)),h=o+(a-o)*(.7*c+.3*r),u=(e.pan??.035)*(r-.5)*(e.rev?-1:1);return[l[0]*u+(e.x||0),l[1]*u+(e.y||0),h]}update(e){let t=this.U,n=this.idx(e),s=this.cards[n],r=this.cards[Math.max(0,n-1)],o=e-s.t;t.uA.value=r.e.tex,t.uAA.value=r.e.w/r.e.h,t.uB.value=s.e.tex,t.uBA.value=s.e.w/s.e.h,t.uCamA.value.set(...this.cam(r,e),0),t.uCamB.value.set(...this.cam(s,e),0),t.uAge.value=n===0&&o<0?1:o,t.uWhip.value=n===0?0:Math.max(0,1-o/.12)*(s.whip??1);let a=s.dir||[1,0];t.uDir.value.set(a[0],a[1]).normalize(),t.uAspect.value=this.ctx.aspect,t.uT.value=e,t.uK.value=re.hitPulse("kick",e,8),t.uRed.value=s.red||0,t.uInv.value=s.inv&&o<.12?1:0,t.uTint.value.set(...s.tint||[1,1,1])}post(e){let t=this.cards[this.idx(e)],n=e-t.t;return{bloom:.7,bloomThr:.7,grain:.08,vig:.45,ca:.8+Math.max(0,1-n/.2)*2,dust:.1,shake:Math.max(0,1-n/.25)*.5,punch:re.hitPulse("kick",e,10)*.4,...this.o.post||{}}}};var wl={};sp(wl,{Canyon:()=>ll,Clothes:()=>al,Earth:()=>sl,Flipbook:()=>_l,Gallery:()=>ol,Helix2:()=>El,RedSea2:()=>dl,SDAT:()=>il,Sketch2:()=>Sl,Sky:()=>rl,Studio:()=>cl,Train:()=>ul});var lo=new T;function Fn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;lo.copy(e),lo[n]=0,lo.normalize();let c=.5*o/(o+a),h=1-lo.angleTo(i)/l;return Math.sign(lo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var co=class extends Tt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new T,x=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Fn(g,l,"z","y",r,n),d[f+1]=1-Fn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Fn(g,l,"z","y",r,n),d[f+1]=1-Fn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Fn(g,l,"x","z",r,e),d[f+1]=Fn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Fn(g,l,"x","z",r,e),d[f+1]=1-Fn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Fn(g,l,"x","y",r,e),d[f+1]=1-Fn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Fn(g,l,"x","y",r,e),d[f+1]=1-Fn(g,l,"y","x",r,t);break}}};var es=class extends oi{constructor(){super();let e=new Tt;e.deleteAttribute("uv");let t=new tt({side:yt}),n=new tt,s=new yn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new G(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new G(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new G(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new G(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new G(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new G(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new G(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new G(e,Er(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new G(e,Er(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new G(e,Er(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new G(e,Er(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new G(e,Er(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new G(e,Er(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Er(i){let e=new _t;return e.color.setScalar(i),e}var du=8.92,wn=9.2,el=-.05,tl=.03,nl=-.03,Iy=[[0,.03,.14,.11,el,tl,nl,30],[2.1,0,.11,.075,el,tl,nl,30],[2.15,-.9,.12,-.3,.3,-.05,.3,38],[4.25,-.2,.18,-.6,0,-.02,0,38],[4.3,.8,.9,.9,0,0,0,34],[6.4,-.6,.8,1,0,0,0,34],[6.45,.09,.13,.17,0,.034,.055,28],[8.9,.07,.11,.15,0,.034,.055,28],[9.25,.01,.15,.12,el,tl,nl,30],[10.6,.8,3,1.5,0,0,0,50]],Uy=[[222.6,.02,.13,.1,el,tl,nl,30],[226.3,.12,.9,.45,0,0,0,34]],Ly=`uniform float uT, uLift; varying vec2 vUv; ${Ne}
void main(){ vec2 q = vUv - vec2(0.5, 0.75); float g = exp(-dot(q, q) * 3.0);
  vec3 c = mix(vec3(0.005, 0.006, 0.01), vec3(0.06, 0.05, 0.045), g) + vec3(0.9, 0.85, 0.75) * uLift * g;
  c += (hash12(vUv * 600.0 + uT) - 0.5) * 0.01; gl_FragColor = vec4(c, 1.0); }`;function Dy(i,e,t){i.fillStyle="#0d1a10",i.fillRect(0,0,512,192),i.fillStyle="rgba(120,255,170,0.06)";for(let r=0;r<192;r+=4)i.fillRect(0,r,512,1);i.fillStyle="#8dffbf",i.shadowColor="#5dff9a",i.shadowBlur=14,i.font=`700 30px ${Ct.mono}`,i.fillText(t.mode,22,46),i.font=`700 22px ${Ct.mono}`,i.fillText("TR",22,128),i.font=`700 104px ${Ct.mono}`,i.fillText(e,70,160),i.font=`700 40px ${Ct.mono}`,i.fillText(t.time,260,160),i.font=`500 20px ${Ct.mono}`,i.fillText(t.sub,262,96),i.strokeStyle="#8dffbf",i.lineWidth=3,i.strokeRect(430,22,56,24),i.fillRect(434,26,20+28*t.bat,16)}var il=class extends st{constructor(e){super(e,{fov:30,near:.01,far:60});let t=this.scene,n=new ri(e.renderer);t.environment=n.fromScene(new es,.04).texture,t.environmentIntensity=.35,this.BU={uT:{value:0},uLift:{value:0}},t.add(ci(Ly,this.BU));let s=this.dev=new bn;t.add(s);let r=new tt({color:10133672,metalness:.9,roughness:.32}),o=new tt({color:1711136,metalness:.5,roughness:.5}),a=new G(new co(.32,.06,.2,5,.018),r);s.add(a);let l=Lt(512,320),c=l.getContext("2d");c.fillStyle="#888",c.fillRect(0,0,512,320);let h=pt(4);for(let U=0;U<900;U++)c.fillStyle=`rgba(${h()>.5?255:0},${h()>.5?255:0},255,${.03+h()*.05})`,c.fillRect(0,h()*320,512,1);c.font=`700 26px ${Ct.mono}`,c.fillStyle="#2a2c30",c.fillText("S-DAT",380,296),c.font=`500 13px ${Ct.mono}`,c.fillText("DIGITAL AUDIO TAPE  WM-D3",22,300),c.strokeStyle="#555",c.lineWidth=2,c.strokeRect(14,14,484,292);let u=new G(new ve(.3,.185),new tt({map:qt(l),metalness:.85,roughness:.38}));u.rotation.x=-Math.PI/2,u.position.y=.0301,s.add(u),this.lc=Lt(512,192),this.lg=this.lc.getContext("2d"),this.lt=qt(this.lc);let d=new _t({map:this.lt,toneMapped:!1}),p=new G(new ve(.128,.048),d);p.rotation.x=-Math.PI/2,p.position.set(-.05,.0305,-.03),s.add(p);let g=new G(new ve(.14,.058),o);g.rotation.x=-Math.PI/2,g.position.set(-.05,.03025,-.03),s.add(g),this.lcdLight=new yn(6160282,.02,.4),this.lcdLight.position.set(-.05,.06,-.03),s.add(this.lcdLight),this.btn=[];for(let U=0;U<5;U++){let O=new G(new co(.03,.012,.018,3,.004),U===0?r:o);O.position.set(-.07+U*.036,.034,.055),s.add(O),this.btn.push(O)}let x=new G(new Aa(.004,3),new _t({color:2883464}));x.rotation.x=-Math.PI/2,x.position.set(-.07,.0405,.055),s.add(x),this.tri=x;let m=new G(new Qt(.005,.005,.02,12),r);m.rotation.z=Math.PI/2,m.position.set(.17,.01,-.06),s.add(m);let f=[new T(.18,.01,-.06),new T(.26,-.02,-.08),new T(.34,-.029,.02),new T(.22,-.029,.16),new T(-.05,-.029,.22),new T(-.3,-.029,.12),new T(-.42,-.029,-.1),new T(-.3,-.029,-.28),new T(-.1,-.029,-.32)],_=new Yn(f),y=new tt({color:1381914,metalness:.3,roughness:.35});t.add(new G(new Ai(_,200,.0022,8),y));let M=new Yn([f[8],new T(.02,-.029,-.36),new T(.1,-.024,-.3)]),S=new Yn([f[8],new T(-.02,-.029,-.42),new T(.04,-.024,-.48)]);for(let U of[M,S]){t.add(new G(new Ai(U,40,.0018,8),y));let O=new G(new $n(.014,24,16),r);O.scale.set(1,.6,1),O.position.copy(U.getPoint(1)),t.add(O);let H=new G(new Qt(.013,.013,.006,24),new tt({color:789516,roughness:.9}));H.position.copy(U.getPoint(1)).add(new T(0,.006,0)),t.add(H)}let R=s.clone();R.scale.y=-1,R.position.y=-.06,t.add(R),this.mir=R;let w=new G(new ve(8,8),new tt({color:328966,metalness:.2,roughness:.25,transparent:!0,opacity:.86}));w.rotation.x=-Math.PI/2,w.position.y=-.03,t.add(w),this.key=new $i(16767400,0,6,.5,.6,1.2),this.key.position.set(.6,1.4,.5),t.add(this.key),t.add(this.key.target),this.rim=new dr(9417983,0),this.rim.position.set(-1,.4,-1),t.add(this.rim);let P=400,D=new Ve,v=new Float32Array(P*3),b=pt(9);for(let U=0;U<P;U++)v[U*3]=(b()-.5)*1.4,v[U*3+1]=b()*.8,v[U*3+2]=(b()-.5)*1.4;D.setAttribute("position",new Ye(v,3)),this.dust=new St(D,new xn({color:16771272,size:.004,transparent:!0,opacity:.5,blending:De,depthWrite:!1})),t.add(this.dust),this._s=""}draw(e){let t="26",n="\u25B6 PLAY",s="REPEAT 1",r,o=e>200;if(o){let l=e>224.4;t="27",n=l?"\u25A0 STOP":"\u25C0\u25C0 REW",s=l?"END":"REW";let c=l?0:Math.max(0,(224.4-e)*40);r=`${String(Math.floor(c/60)).padStart(2,"0")}:${String(Math.floor(c%60)).padStart(2,"0")}`}else{t=e<wn?Math.floor(e/1.07)%4===3?"25":"26":"27",e<du?n=Math.floor(e*2)%2?"\u25B6 PLAY":"\u25B6":e<wn&&(n="\u25B6\u25B6|"),s=e<wn?"REPEAT 1":"NEXT";let l=e<wn?e%4.3+3*60+41:e-wn;r=`${String(Math.floor(l/60)).padStart(2,"0")}:${String(Math.floor(l%60)).padStart(2,"0")}`}let a=t+n+r+s;a!==this._s&&(this._s=a,this.lg.clearRect(0,0,512,192),Dy(this.lg,t,{mode:n,time:r,sub:s,bat:o?.2:1}),this.lt.needsUpdate=!0)}update(e){let t=e>200,n=t?Uy:Iy,s=e,r=0;for(;r+1<n.length&&n[r+1][0]<=s;)r++;let o=n[r],a=n[Math.min(n.length-1,r+1)],c=a[0]-o[0]<.1||a===o?0:_e.inOut(Te((s-o[0])/(a[0]-o[0]))),h=m=>ot(o[m],a[m],c),u=re.hitPulse("kick",e,8),d=!t&&e>wn?.002*u:0;this.camera.position.set(h(1)+d,h(2),h(3)),this.camera.lookAt(h(4),h(5),h(6)),this.camera.fov=h(7),this.camera.updateProjectionMatrix(),this.draw(e);let p=t?1-$(224.6,226.2,e):$(.3,3,e),g=t?0:$(wn-.05,wn+.2,e);this.key.intensity=(.3+1*p+1.6*g)*(1+.25*u),this.key.target.position.set(0,0,0),this.rim.intensity=.15+.7*p,this.lcdLight.intensity=.004+.002*Math.sin(e*40),this.BU.uT.value=e,this.BU.uLift.value=t?.02:.03+g*.12+$(9.6,10.6,e)*.8;let x=t?$(224.2,224.4,e):$(du-.08,du,e)*(1-$(wn+.05,wn+.3,e));this.btn[2].position.y=.034-x*.005,this.mir.children[this.dev.children.indexOf(this.btn[2])].position.y=this.btn[2].position.y,this.tri.material.color.setHex(Math.floor(e*2)%2||e>wn?2883464:670238),this.dust.rotation.y=e*.03,this.dust.position.y=-(e*.01%.2)}post(e){let t=e>200;return{exposure:1.05,bloom:.55+(t?0:$(wn-.05,wn+.3,e))*.5,bloomThr:.78,grain:.09,vig:.65,ca:.6,dust:.25,letter:.12,fadeB:t?$(225.2,226.2,e)*.6:1-$(0,1.2,e),fadeW:t?0:$(9.9,10.6,e)*.6,glitch:t&&e<224.4?.25:0,scan:t?.2:0,punch:re.hitPulse("kick",e,10)*.3*(e>wn?1:.3)}}};var fu="vec3 rotY(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }",pu=`varying vec3 vN, vW;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`,Zf=`
uniform float uT, uRot, uRed, uFront, uEdge, uCloud, uLights, uK;
uniform vec3 uSun, uAxis;
varying vec3 vN, vW;
${Ne} ${fu}
void main(){
  vec3 n = normalize(vN), p = rotY(n, -uRot);
  float h = fbm3(p * 1.7 + 3.0) + 0.45 * fbm3(p * 4.3 + 11.0) - 0.66;
  float isLand = smoothstep(0.0, 0.025, h);
  float ice = smoothstep(0.8, 0.88, abs(p.y));
  vec3 V = normalize(cameraPosition - vW);
  float ns = dot(n, uSun), dif = max(ns, 0.0), term = smoothstep(-0.12, 0.2, ns);
  vec3 Hh = normalize(uSun + V);
  // --- blue earth
  vec3 ocean = mix(vec3(0.008, 0.035, 0.11), vec3(0.03, 0.17, 0.4), smoothstep(-0.35, 0.0, h));
  vec3 ground = mix(vec3(0.1, 0.2, 0.07), vec3(0.45, 0.38, 0.24), smoothstep(0.05, 0.32, h));
  vec3 blue = mix(mix(ocean, ground, isLand), vec3(0.72, 0.78, 0.85), ice);
  float cl = smoothstep(0.5, 0.74, fbm3(p * 3.2 + vec3(uT * 0.012, 0.0, 0.0))) * uCloud;
  blue = mix(blue, vec3(0.85), cl * 0.7);
  float spec = pow(max(dot(n, Hh), 0.0), 70.0) * (1.0 - isLand) * (1.0 - cl);
  vec3 cb = blue * (0.02 + 0.9 * dif) + vec3(1.0, 0.9, 0.72) * spec * 0.9;
  float city = pow(smoothstep(0.55, 0.95, vnoise3(p * 190.0)), 2.0) * smoothstep(0.45, 0.75, vnoise3(p * 9.0)) * (0.5 + vnoise3(p * 40.0));
  cb += vec3(1.0, 0.68, 0.32) * city * isLand * (1.0 - ice) * (1.0 - term) * uLights * 0.7;
  // --- red earth (LCL sea glowing from within, scorched land)
  float rs = fbm3(p * 6.0 + vec3(0.0, uT * 0.06, 0.0));
  vec3 rOcean = mix(vec3(0.16, 0.0, 0.015), vec3(0.85, 0.1, 0.04), rs * rs * 1.4);
  vec3 rLand = mix(vec3(0.015, 0.005, 0.005), vec3(0.12, 0.03, 0.02), smoothstep(0.0, 0.3, h));
  vec3 red = mix(mix(rOcean, rLand, isLand), vec3(0.3, 0.06, 0.05), ice * 0.7);
  vec3 cr = red * (0.12 + 0.8 * dif) + vec3(1.0, 0.45, 0.25) * pow(max(dot(n, Hh), 0.0), 60.0) * (1.0 - isLand) * 0.2
          + rOcean * (1.0 - isLand) * 0.22 * (0.7 + 0.6 * uK);
  // --- restoration front
  float ang = acos(clamp(dot(n, uAxis), -1.0, 1.0));
  float wob = (fbm3(p * 5.0 + 7.0) - 0.5) * 0.18;
  float r = uRed * (1.0 - smoothstep(uFront + 0.03, uFront - 0.03, ang + wob));
  vec3 c = mix(cb, cr, r);
  float edge = exp(-pow((ang + wob - uFront) * 16.0, 2.0)) * uEdge;
  c += vec3(0.75, 0.9, 1.0) * edge * (0.5 + 0.9 * fbm3(p * 12.0 + uT * 0.7)) * (1.0 + uK);
  // --- rim atmosphere
  float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  c += mix(vec3(0.3, 0.55, 1.0) * (0.15 + term), vec3(1.0, 0.18, 0.08) * (0.4 + 0.6 * term), r) * fr * 0.9;
  gl_FragColor = vec4(c, 1.0);
}`,Jf=`
uniform vec3 uSun, uCol; uniform float uA; varying vec3 vN, vW;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float d = dot(n, V);
  float g = pow(smoothstep(0.0, -0.4, d), 2.2);
  float s = 0.2 + 0.8 * pow(max(dot(n, uSun), 0.0), 0.7);
  gl_FragColor = vec4(uCol * g * s * uA, 1.0); }`,jf=`
uniform float uT, uRot, uFront, uCross; uniform vec3 uAxis;
attribute vec4 aP; attribute vec2 aT;
varying vec2 vUv; varying float vA;
${fu}
void main(){
  vec3 d = rotY(normalize(aP.xyz), uRot);
  float age = uT - aT.x, g = smoothstep(0.0, 0.5, age);
  float ang = acos(clamp(dot(d, uAxis), -1.0, 1.0));
  vA = g * smoothstep(uFront - 0.02, uFront + 0.3, ang) * uCross * (1.0 + 0.6 * exp(-max(age, 0.0) * 5.0) * step(0.0, age));
  float H = aT.y * (0.2 + 0.8 * g);
  vec3 side = normalize(cross(d, normalize(cameraPosition - d)));
  vec3 pos = d * 0.99 + side * (position.x * H * 0.62) + d * ((position.y + 0.5) * H);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
}`,Qf=`
uniform float uK; varying vec2 vUv; varying float vA;
void main(){
  float dv = abs(vUv.x - 0.5), dh = abs(vUv.y - 0.72);
  float fy = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
  float vert = (exp(-dv * dv * 1600.0) + 0.3 * exp(-dv * dv * 70.0)) * fy;
  float hor = (exp(-dh * dh * 2600.0) + 0.3 * exp(-dh * dh * 120.0)) * smoothstep(0.5, 0.3, dv);
  float a = max(vert, hor);
  vec3 col = mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.95, 0.86), clamp(a * 1.4 - 0.35, 0.0, 1.0));
  gl_FragColor = vec4(col * a * vA * (1.0 + 0.5 * uK), 1.0);
}`,e0=`
uniform float uT, uRot, uSoul, uDir, uPx; uniform vec3 uQ, uCol;
attribute vec4 aP, aR;
varying float vA; varying vec3 vC;
${Ne} ${fu}
void main(){
  vec3 b = rotY(normalize(aP.xyz), uRot) * 1.005;
  float s = fract(aR.x + uDir * uT * (0.05 + 0.07 * aR.y));
  float e = s * s * (3.0 - 2.0 * s);
  vec3 p = mix(b, uQ, e * aP.w) + b * sin(s * 3.1416) * (0.35 + 0.6 * aR.z);
  p += curl3(b * 3.0 + uT * 0.1 + aR.w * 10.0) * 0.1 * sin(s * 3.1416);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.25, 0.9, -mv.z) * smoothstep(0.0, 0.06, s) * smoothstep(1.0, 0.8, s) * uSoul * (0.6 + 0.4 * sin(uT * 6.0 + aR.w * 40.0));
  vC = mix(uCol, vec3(1.0), aR.y * 0.5);
  gl_PointSize = clamp(uPx * (0.6 + aR.z) / max(-mv.z, 0.15), 1.0, 12.0);
}`,t0=`
uniform float uK; varying float vA; varying vec3 vC;
void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 18.0) * vA;
  gl_FragColor = vec4(vC * a * (1.0 + 0.6 * uK), 1.0); }`,n0="varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",i0=`
uniform float uT, uA, uK; varying vec2 vP; ${Ne}
void main(){ float r = length(vP), a = atan(vP.y, vP.x);
  float line = exp(-pow((r - 1.55) * 90.0, 2.0)) + 0.6 * exp(-pow((r - 1.64) * 140.0, 2.0));
  float band = exp(-pow((r - 1.55) * 7.0, 2.0)) * (0.25 + 0.75 * vnoise(vec2(a * 24.0, uT * 0.6)));
  float rev = smoothstep(0.0, 0.05, uA * 6.2832 - (a + 3.1416));
  gl_FragColor = vec4(vec3(1.0, 0.24, 0.1) * (line * 1.3 + band * 0.3) * rev * (1.0 + 0.6 * uK), 1.0); }`,s0=`
uniform sampler2D tMap; uniform float uT, uA, uRev; varying vec2 vUv; ${Ne}
void main(){ vec4 m = texture2D(tMap, vUv);
  float rev = smoothstep(1.0 - uRev * 1.1, 1.0 - uRev * 1.1 + 0.08, vUv.y); // draws top (Keter) -> bottom
  float fl = 0.8 + 0.2 * vnoise(vec2(uT * 12.0, 0.0));
  gl_FragColor = vec4(m.rgb * rev * uA * fl, 1.0); }`,r0=`
uniform float uT, uRed, uA; varying vec2 vUv; ${Ne}
void main(){ vec2 p = vUv * vec2(3.0, 1.7);
  float n = fbm(p * 1.3 + vec2(uT * 0.01, 0.0)), m = fbm(p * 3.0 - 4.0);
  vec3 c = mix(vec3(0.02, 0.04, 0.12) * n + vec3(0.05, 0.03, 0.1) * m * m, vec3(0.09, 0.005, 0.01) * n + vec3(0.05, 0.01, 0.0) * m * m, uRed);
  gl_FragColor = vec4(c * uA * smoothstep(0.3, 0.9, n + 0.2), 1.0); }`;function Fy(i,e,t=_e.inOut){let n=0;for(;n+1<i.length&&i[n+1][0]<=e;)n++;let s=i[n],r=i[Math.min(i.length-1,n+1)],o=r===s||r[0]-s[0]<.1?0:t(Te((e-s[0])/(r[0]-s[0]))),a=(l,c=0)=>ot(s[l]??c,r[l]??c,o);return{p:[a(1),a(2),a(3)],q:[a(4),a(5),a(6)],fov:a(7),roll:a(8),i:n,u:o}}function en(i,e,t,n=0,s){let r=Fy(e,t,s);return i.position.set(r.p[0]+n*Math.sin(t*91),r.p[1]+n*Math.sin(t*77+1),r.p[2]),i.up.set(Math.sin(r.roll),Math.cos(r.roll),0),i.lookAt(r.q[0],r.q[1],r.q[2]),i.fov!==r.fov&&(i.fov=r.fov,i.updateProjectionMatrix()),r}var Oy={A:[[10.4,0,.35,1.62,0,1.05,0,40,-.12],[12.67,.12,.42,1.45,0,1.1,0,40,-.05],[12.72,0,.3,4.3,0,.2,0,38],[14.81,.6,.5,3.9,0,.25,0,38],[14.86,.3,2.7,.8,0,0,0,46],[17,.2,2.25,.55,0,0,0,46]],B:[[136.1,.2,.3,3.5,0,0,0,38],[137.24,.28,.32,3.25,0,0,0,38],[137.29,1.35,.5,-1.45,0,.2,0,42,.1],[139.38,1.15,.7,-1.75,0,.25,0,42,.05],[139.43,-1.2,.4,-3.1,0,0,0,38],[141.3,-1.45,.55,-3.35,0,0,0,38]],C:[[207.4,0,.3,2.3,0,.95,0,36],[211.95,.06,.34,2.12,0,.97,0,36],[212,2.2,1,2,0,0,0,38],[216.24,1.9,1.1,2.5,0,0,0,38],[216.29,1.2,.5,2.6,0,0,0,36],[218.5,3.6,1.6,8.8,0,0,0,36]]},o0=i=>i<100?"A":i<180?"B":"C",ky=new T(.3,.2,1).normalize();function By(){let i=Lt(512,1024),e=i.getContext("2d"),t=[[0,0],[1,1],[-1,1],[1,2.6],[-1,2.6],[0,3.3],[1,4.2],[-1,4.2],[0,5],[0,6]].map(([s,r])=>[256+s*150,90+r*140]),n=[[0,1],[0,2],[0,5],[1,2],[1,3],[1,5],[2,4],[2,5],[3,4],[3,5],[3,6],[4,5],[4,7],[5,6],[5,7],[5,8],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9]];e.shadowColor="#ff4020",e.shadowBlur=18,e.strokeStyle="#ff6a3a",e.lineWidth=5;for(let[s,r]of n)e.beginPath(),e.moveTo(...t[s]),e.lineTo(...t[r]),e.stroke();for(let s of t)e.fillStyle="#1a0000",e.beginPath(),e.arc(s[0],s[1],44,0,7),e.fill(),e.lineWidth=6,e.strokeStyle="#ffb080",e.stroke(),e.lineWidth=2,e.beginPath(),e.arc(s[0],s[1],32,0,7),e.stroke();return qt(i)}var sl=class extends st{constructor(e){super(e,{fov:40,near:.02,far:200});let t=this.scene,n=pt(27);this.U={uT:{value:0},uRot:{value:0},uRed:{value:1},uFront:{value:-1},uEdge:{value:0},uCloud:{value:1},uLights:{value:0},uK:{value:0},uSun:{value:new T(1,.3,0).normalize()},uAxis:{value:ky},uCross:{value:0},uSoul:{value:0},uDir:{value:1},uPx:{value:6},uQ:{value:new T(0,2.6,0)},uCol:{value:new xe(1,.45,.2)},uA:{value:0},uRev:{value:0}};let s=this.U;this.NU={uT:s.uT,uRed:{value:1},uA:{value:1}},t.add(ci(r0,this.NU));let r=3e3,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let M=0;M<r;M++){let S=new T(n()*2-1,n()*2-1,n()*2-1).normalize().multiplyScalar(60);o.set([S.x,S.y,S.z],M*3);let R=.25+n()**3*1.4,w=n();a.set([R,R*(.85+.15*w),R*(.8+.3*w)],M*3)}let l=new Ve;l.setAttribute("position",new Ye(o,3)),l.setAttribute("color",new Ye(a,3)),t.add(new St(l,new xn({size:.14,vertexColors:!0,transparent:!0,blending:De,depthWrite:!1}))),t.add(new G(new $n(1,160,100),new ae({vertexShader:pu,fragmentShader:Zf,uniforms:s}))),this.AU={uSun:s.uSun,uCol:{value:new xe},uA:{value:1}},t.add(new G(new $n(1.07,96,64),new ae({vertexShader:pu,fragmentShader:Jf,uniforms:this.AU,side:yt,transparent:!0,blending:De,depthWrite:!1})));let c=64,h=new Zn;h.copy(new ve(1,1)),h.instanceCount=c;let u=new Float32Array(c*4),d=new Float32Array(c*2);for(let M=0;M<c;M++){let S=M<14?new T(n()*.8-.4,.55+n()*.3,.8+n()*.2-.1).normalize():new T(n()*2-1,n()*1.6-.5,n()*2-1).normalize();u.set([S.x,S.y,S.z,0],M*4),d.set([M<14?10.6+M*.13:11.9+(M-14)/c*4.2+n()*.3,n()<.12?.35+n()*.2:.05+n()*.16],M*2)}h.setAttribute("aP",new At(u,4)),h.setAttribute("aT",new At(d,2));let p=new G(h,new ae({vertexShader:jf,fragmentShader:Qf,uniforms:s,transparent:!0,blending:De,depthWrite:!1,side:Qe}));p.frustumCulled=!1,t.add(p);let g=9e3,x=new Ve,m=new Float32Array(g*4),f=new Float32Array(g*4);for(let M=0;M<g;M++){let S=new T(n()*2-1,n()*2-1,n()*2-1).normalize();m.set([S.x,S.y,S.z,.55+n()*.45],M*4),f.set([n(),n(),n(),n()],M*4)}x.setAttribute("position",new Ye(new Float32Array(g*3),3)),x.setAttribute("aP",new Ye(m,4)),x.setAttribute("aR",new Ye(f,4));let _=new St(x,new ae({vertexShader:e0,fragmentShader:t0,uniforms:s,transparent:!0,blending:De,depthWrite:!1}));_.frustumCulled=!1,t.add(_),this.RU={uT:s.uT,uA:{value:0},uK:s.uK},this.ring=new G(new hr(1.4,1.8,256,1),new ae({vertexShader:n0,fragmentShader:i0,uniforms:this.RU,transparent:!0,blending:De,depthWrite:!1,side:Qe})),this.ring.rotation.set(1.22,.25,0),t.add(this.ring),this.SU={tMap:{value:By()},uT:s.uT,uA:{value:0},uRev:{value:0}},this.seph=new G(new ve(2.3,4.6),new ae({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:s0,uniforms:this.SU,transparent:!0,blending:De,depthWrite:!1})),this.seph.position.set(0,.45,-2.8),t.add(this.seph);let y=e.shared.glow;this.sun=new Sn(new vn({map:y,color:16773592,blending:De,depthWrite:!1,transparent:!0})),this.streak=new Sn(new vn({map:y,color:10470655,blending:De,depthWrite:!1,transparent:!0})),t.add(this.sun,this.streak),this._v=new T,this._d=new T,this._u=new T}update(e){let t=this.U,n=o0(e),s=re.hitPulse("kick",e,7),r=en(this.camera,Oy[n],e),o=this.camera.position;t.uT.value=e,t.uK.value=s,t.uPx.value=this.ctx.h*.012,t.uRot.value=e*.02+(n==="C"?1.4:n==="B"?.6:0);let a=0,l=t.uSun.value;if(this.RU.uA.value=0,this.SU.uA.value=0,n==="A")t.uRed.value=1,t.uFront.value=-1,t.uEdge.value=0,t.uCloud.value=.3,t.uLights.value=0,t.uCross.value=1,t.uSoul.value=$(10.9,12.5,e),t.uDir.value=1,t.uCol.value.setRGB(1,.45,.2),t.uQ.value.set(0,e<12.7?2.4:e<14.83?2.6:5,e<12.7?-.6:e<14.83?0:1.6),l.set(.8,.5,.6).normalize(),this.RU.uA.value=$(12.8,14.6,e),this.SU.uA.value=$(12.72,13.3,e)*(1-$(14.8,14.86,e))*(.8+.4*s),this.SU.uRev.value=$(12.8,14.6,e),this.AU.uCol.value.setRGB(1,.25,.1);else if(n==="B"){let c=_e.inOut(Te((e-136.3)/4.3));t.uRed.value=1,t.uFront.value=ot(-.05,3.4,c),t.uEdge.value=1-$(140.3,141,e),t.uCloud.value=1,t.uLights.value=.3,t.uCross.value=1,t.uSoul.value=1-$(139.2,141,e),t.uDir.value=-1,t.uQ.value.set(0,2.6,0),t.uCol.value.setRGB(1,.6,.35),this._d.copy(o).normalize().add(this._u.set(.6,.5,0)).normalize(),l.copy(this._d),this.AU.uCol.value.setRGB(1,.25,.1).lerp(new xe(.35,.6,1),c)}else if(t.uRed.value=0,t.uFront.value=4,t.uEdge.value=0,t.uCloud.value=1,t.uLights.value=1,t.uCross.value=0,t.uSoul.value=.45*$(208,210,e)*(1-$(216,216.3,e)),t.uDir.value=-1,t.uQ.value.set(0,3,1.5),t.uCol.value.setRGB(.6,.8,1),this.AU.uCol.value.setRGB(.35,.6,1),e<211.97){let c=o.length(),h=Math.asin(1/c);this._d.copy(o).negate().normalize(),this._u.crossVectors(this._d,this.camera.up).normalize();let u=ot(-.07,.1,_e.inOut(Te((e-208.2)/3.4)));l.copy(this._d).applyAxisAngle(this._u,h+u),a=1}else l.set(e<216.27?.3:-.45,e<216.27?.45:.3,e<216.27?.85:.6).normalize();this.sun.position.copy(o).addScaledVector(l,40),this.streak.position.copy(this.sun.position),this.sun.scale.setScalar(a*(7+2*s)),this.streak.scale.set(a*30,a*.5,1),this.seph.visible=this.SU.uA.value>0,this.ring.visible=this.RU.uA.value>0,this.ring.rotation.z=e*.05,this.NU.uA.value=n==="C"?.6:.9,this.NU.uRed.value=n==="A"?1:n==="B"?1-$(137.5,140.8,e):0}post(e){let t=o0(e),n=re.hitPulse("kick",e,9),s={bloom:1,bloomThr:.7,grain:.07,vig:.6,ca:.8,dust:.15,punch:n*.25};return t==="A"?{...s,tint:[1.06,.9,.86],dustCol:[1,.4,.3],shake:.002*n,flicker:.04}:t==="B"?{...s,bloom:1.1+.6*re.hitPulse("hit",e,5),sat:1.05}:{...s,bloom:1.15,bloomThr:.62,lift:[0,.004,.012],exposure:1.02,fadeB:$(217.6,218.4,e)*.4}}};var br=40,mu=10,Hy=1.12,zy=`
uniform sampler2D uDepT; uniform float uDep; varying vec2 vUv; varying float vD;
void main(){ vUv = uv; float d = texture2D(uDepT, uv).r; vD = d;
  vec3 p = position * (1.0 - uDep * d);                       // slide toward the rest camera (origin)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,Vy=`
uniform sampler2D uMap; uniform float uK, uT; varying vec2 vUv; varying float vD; ${Ne}
void main(){ vec3 c = texture2D(uMap, vUv).rgb;
  float l = dot(c, vec3(0.3, 0.55, 0.15)), hot = smoothstep(0.62, 0.9, l) * smoothstep(0.0, 0.25, c.r - c.b);
  c += c * hot * (0.35 + 0.9 * uK);                              // engines / sun glints pulse on the kick
  c *= 0.92 + 0.08 * vnoise(vUv * 6.0 + uT * 0.4);
  gl_FragColor = vec4(c, 1.0); }`,Gy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Wy=`
uniform float uSeed, uA, uT; uniform vec2 uSun; uniform vec3 uLit, uShade; varying vec2 vUv; ${Ne}
void main(){ vec2 q = vUv - 0.5;
  float f = fbm(vUv * 3.2 + uSeed * 7.0 + vec2(uT * 0.05, 0.0));
  float sh = 1.0 - smoothstep(0.1, 0.5, length(q * vec2(1.0, 1.6)));
  float a = smoothstep(0.35, 0.75, f * 0.9 + sh * 0.55) * sh;
  float lit = clamp(0.5 + dot(normalize(q + 1e-4), uSun) * 0.6 + (f - 0.5) * 1.2, 0.0, 1.0);
  vec3 c = mix(uShade, uLit, lit);
  gl_FragColor = vec4(c, a * uA); }`,Xy=`
uniform float uT, uA; uniform vec3 uVel; attribute vec4 aR; varying float vA; varying vec2 vUv;
void main(){ vUv = uv;
  vec3 base = vec3((aR.x - 0.5) * 16.0, (aR.y - 0.5) * 9.0, -1.0 - aR.z * 11.0);
  float s = fract(aR.w + uT * (0.6 + aR.z * 0.5));
  vec3 p = base + uVel * (s - 0.5) * 18.0;
  vec3 dir = normalize(uVel);
  vec3 side = normalize(cross(dir, vec3(0.0, 0.0, 1.0) + vec3(0.001)));
  p += dir * position.x * (1.2 + aR.z * 2.0) + side * position.y * 0.012;
  vA = sin(s * 3.1416) * uA * (0.4 + 0.6 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,qy=`varying float vA; varying vec2 vUv; void main(){ float a = (1.0 - abs(vUv.y - 0.5) * 2.0) * smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.6, vUv.x);
  gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * a * vA, 1.0); }`,Yy={wunder:{t0:52.34,t1:55.3,cam:[[52.3,.12,-.08,.2,.06,-.04,-10,br,.03],[55.3,-.15,.08,-1.3,-.06,.03,-10,br,-.02]],vel:[.15,-.02,1],sun:[.8,.1]},fleet:{t0:61.07,t1:63.85,cam:[[61,.35,.02,.1,.2,.02,-10,br,-.015],[63.85,-.35,.12,-.6,-.2,.05,-10,br,.02]],vel:[1,.05,.25],sun:[.9,0]}},rl=class extends st{constructor(e){super(e,{fov:br,near:.05,far:100});let t=this.scene,n=pt(52);this.U={uK:{value:0},uT:{value:0}};let s=2*mu*Math.tan(br/2*Math.PI/180)*Hy;this.planes={};for(let c of["wunder","fleet"]){let h=e.img[c],u=e.img[c+"_d"],d=new ae({vertexShader:zy,fragmentShader:Vy,uniforms:{uMap:{value:h.tex},uDepT:{value:u?u.tex:h.tex},uDep:{value:u?.38:0},...this.U}}),p=new ve(s*h.w/h.h,s,256,144),g=new G(p,d);g.position.z=-mu,g.renderOrder=-50,p.translate(0,0,-mu),g.position.z=0,t.add(g),this.planes[c]=g}this.cl=[];for(let c=0;c<30;c++){let h={uSeed:{value:n()*10},uA:{value:0},uT:this.U.uT,uSun:{value:new ee(.8,.1)},uLit:{value:new xe(1,.62,.4)},uShade:{value:new xe(.12,.06,.13)}},u=new G(new ve(1,1),new ae({vertexShader:Gy,fragmentShader:Wy,uniforms:h,transparent:!0,depthWrite:!1}));u.userData={u:h,r:[n(),n(),n(),n(),n()]},t.add(u),this.cl.push(u)}let r=160,o=new Zn;o.copy(new ve(1,1)),o.instanceCount=r;let a=new Float32Array(r*4);for(let c=0;c<r*4;c++)a[c]=n();o.setAttribute("aR",new At(a,4)),this.SU={uT:this.U.uT,uA:{value:0},uVel:{value:new T}};let l=new G(o,new ae({vertexShader:Xy,fragmentShader:qy,uniforms:this.SU,transparent:!0,blending:De,depthWrite:!1,side:Qe}));l.frustumCulled=!1,t.add(l)}update(e){let t=e<58?"wunder":"fleet",n=Yy[t],s=re.hitPulse("kick",e,8);this.U.uK.value=s,this.U.uT.value=e;for(let o in this.planes)this.planes[o].visible=o===t;en(this.camera,n.cam,e,.004*s);let r=new T(...n.vel).normalize();this.SU.uVel.value.copy(r),this.SU.uA.value=.5+.5*s,this.cl.forEach((o,a)=>{let[l,c,h,u,d]=o.userData.r,p=(l+(e-n.t0)*(.22+.25*d))%1,g=-1.2-h*8.5,x=(p-.5)*14;t==="wunder"?o.position.set((c-.5)*12-r.x*x*.3,u<.6?-2.4-u*1.5:2.2+u,g+x*.7):o.position.set(-x*1.2,(u<.65?-2.2-u*2.2:2.2+u*1.2)+(c-.5),g);let m=2.2+d*3.5;o.scale.set(m*1.6,m,1),o.lookAt(this.camera.position);let f=-o.position.z;o.userData.u.uA.value=.6*Math.sin(p*Math.PI)*$(.6,2.2,f)*(t==="wunder"?1:.9),o.userData.u.uSun.value.set(...n.sun)})}post(e){let t=re.hitPulse("kick",e,9),n=e>58;return{bloom:1.05,bloomThr:.7,sat:1.08,grain:.06,vig:.55,ca:.9+t,punch:t*.4,shake:.003*t,contrast:1.1,tint:[1.03,.97,.95],dust:.2,fadeW:n?0:(1-$(52.34,52.6,e))*.4}}};var hn=36,cn=3,On=5,Ri=-34,$y=[[25,0,1.55,3,0,1.9,-20,52,0],[26.6,.2,1.6,-9,0,1.95,-34,50,-.02],[26.64,1.3,1.75,-5.6,-3,1.95,-8.3,40],[27.14,1.3,1.75,-19.5,-3,1.95,-22.2,40],[27.18,-.5,2.05,-28.2,-.5,2.05,Ri,34],[29.4,-.42,2.05,-30.9,-.42,2.08,Ri,34]],a0=[28.25,28.76];function Ky(){let i=Lt(256,256),e=i.getContext("2d");e.fillStyle="#6a1418",e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,190,140,0.10)",e.lineWidth=3;for(let[n,s]of[[64,64],[192,192],[192,64],[64,192]])e.beginPath(),e.ellipse(n,s,30,52,0,0,7),e.stroke(),e.beginPath(),e.ellipse(n,s,12,26,0,0,7),e.stroke();e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,250,256,6);let t=qt(i,{repeat:!0});return t.repeat.set((hn+6)/1.2,On/1.2),t}function Zy(){let i=Lt(512,512),e=i.getContext("2d"),t=pt(3);for(let s=0;s<16;s++)for(let r=0;r<4;r++){let o=60+t()*30;e.fillStyle=`rgb(${o+40},${o+10},${o-20})`,e.fillRect(r*128+s%2*64,s*32,128,32),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(r*128+s%2*64,s*32,2,32),e.fillRect(0,s*32,512,1)}let n=qt(i,{repeat:!0});return n.repeat.set(3,hn/2),n}var ol=class extends st{constructor(e){super(e,{fov:50,near:.05,far:80});let t=this.scene,n=pt(25);t.environment=new ri(e.renderer).fromScene(new es,.04).texture,t.environmentIntensity=.12,t.fog=new Xi(1180678,12,42),this.clear.set(1180678);let s=new tt({map:Ky(),color:16777215,roughness:.8}),r=new tt({color:12101002,roughness:.7}),o=new G(new ve(2*cn,hn+6),new tt({map:Zy(),roughness:.28,metalness:.1}));o.rotation.x=-Math.PI/2,o.position.z=-hn/2+3,t.add(o);for(let _ of[-1,1]){let y=new G(new ve(hn+6,On),s);y.position.set(_*cn,On/2,-hn/2+3),y.rotation.y=-_*Math.PI/2,t.add(y);for(let M of[.15,On-.1]){let S=new G(new Tt(.16,M<1?.3:.25,hn+6),r);S.position.set(_*(cn-.05),M,-hn/2+3),t.add(S)}}let a=new G(new Qt(cn,cn,hn+6,48,1,!0,-Math.PI/2,Math.PI),new tt({color:13482910,roughness:.8,side:yt}));a.rotation.x=-Math.PI/2,a.position.set(0,On,-hn/2+3),t.add(a);let l=new G(new ve(1.2,hn+6),new _t({color:16751226,fog:!1}));l.rotation.x=Math.PI/2,l.position.set(0,On+cn-.02,-hn/2+3),t.add(l);for(let _=0;_>-hn;_-=4.5){let y=new G(new Yi(cn-.02,.09,8,48,Math.PI),r);y.position.set(0,On,_),t.add(y)}let c=new G(new ve(2*cn,On+cn),s);c.position.set(0,(On+cn)/2,Ri-.01),t.add(c);let h=e.img.gallery,u=e.img.yui_lisa,d=(_,y,M,S,R,w,P=.35)=>{let D=_.tex.clone();D.needsUpdate=!0,y&&(D.repeat.set(y[2],y[3]),D.offset.set(y[0],y[1]));let v=new G(new ve(M,S),new tt({map:D,emissiveMap:D,emissive:16777215,emissiveIntensity:P,roughness:.55}));return v.position.set(...R),v.rotation.y=w,t.add(v),v};if(h){let _=[[.03,.51,.47,.47],[.5,.51,.47,.47],[.03,.03,.47,.47],[.5,.03,.47,.47]];[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]].forEach(([y,M],S)=>d(h,_[S],1.5,1.9,[y*(cn-.02),2.05,M],-y*Math.PI/2))}this.lisa=u?d(u,null,1.6,2.4,[0,2.1,Ri+.02],0,.18):null;for(let[_,y]of[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]]){let M=new yn(16765088,2.2,4,1.5);M.position.set(_*(cn-1.1),3.6,y),t.add(M)}this.lamps=[];for(let _=-2;_>-hn;_-=7){let y=new yn(16761482,3.5,11,1.6);y.position.set(0,On+.6,_),t.add(y),this.lamps.push(y)}this.spot=new $i(16773340,9,9,.4,.6,1.4),this.spot.position.set(0,4.8,Ri+4),this.spot.target.position.set(0,2.1,Ri),t.add(this.spot,this.spot.target),this.blue=new yn(5941503,0,7,1.4),t.add(this.blue),this.flash=new yn(16777215,0,12,1.2),this.flash.position.set(.3,1.7,-29.5),t.add(this.flash);let p=360,g=new Ca(1,0);g.scale(.12,.6,.12),g.translate(0,.35,0),this.cm=new tt({color:16718388,emissive:6946832,emissiveIntensity:1,metalness:.25,roughness:.12,flatShading:!0}),this.cry=new jt(g,this.cm,p),t.add(this.cry),this.cd=[];for(let _=0;_<p;_++){let y=n()<.5?-1:1,M=n()<.35,S=_<70,R=S?Ri+.2+n()*2.6:-n()*(hn-2)+1,w=S&&n()<.6?(n()-.5)*2.4:y*(cn-.05-n()*(M?.05:.7)),P=M?.2+n()*n()*(S?3.4:2.4):0,D=new Jt(M?0:(n()-.5)*.9,n()*6.28,M?y*(.45+n()*.5):(n()-.5)*.9);S&&P>.5&&D.set(Math.PI/2+(n()-.5)*.8,0,(n()-.5)*.8),this.cd.push({p:new T(w,P,S&&P>.5?Ri+.05:R),q:new It().setFromEuler(D),s:(S?.7:.4)+n()*1.4})}this.FU={uA:{value:0}},this.front=new G(new ve(2*cn,On+cn),new ae({uniforms:this.FU,transparent:!0,blending:De,depthWrite:!1,side:Qe,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x); gl_FragColor = vec4(vec3(0.25, 0.55, 1.0) * uA * e * e * 0.14, 1.0); }"})),this.front.position.y=(On+cn)/2,t.add(this.front);let x=700,m=new Float32Array(x*3);for(let _=0;_<x;_++)m.set([(n()-.5)*5.6,n()*5,-n()*hn],_*3);let f=new Ve;f.setAttribute("position",new Ye(m,3)),this.dust=new St(f,new xn({map:e.shared.glow,color:16767152,size:.03,transparent:!0,opacity:.55,blending:De,depthWrite:!1})),t.add(this.dust),this._m=new $e,this._s=new T}update(e){let t=re.hitPulse("kick",e,7);en(this.camera,$y,e,.003*t);let n=Ri+.1+14*$(27.3,29.4,e),s=$(27.2,27.5,e);this.front.position.z=n,this.FU.uA.value=s*(1-$(29,29.4,e)),this.blue.position.set(0,2.2,n+.3),this.blue.intensity=s*3,this.cd.forEach((o,a)=>{let l=s*$(n-.2,n-1.4,o.p.z),c=$(25,25.8,e+a%7*.05),h=o.s*c*(1-l)*(1+.08*t);this._m.compose(o.p,o.q,this._s.set(h,h,h)),this.cry.setMatrixAt(a,this._m)}),this.cry.instanceMatrix.needsUpdate=!0,this.cm.emissiveIntensity=.8+1.6*t;let r=0;for(let o of a0)r=Math.max(r,e>=o?Math.exp(-(e-o)*14):0);this.flash.intensity=r*40,this.lamps.forEach((o,a)=>{o.intensity=3.2+.4*Math.sin(e*3+a)}),this.dust.position.y=-(e*.02%.3)}post(e){let t=re.hitPulse("kick",e,9),n=re.hitPulse("hit",e,10),s=0;for(let r of a0)s=Math.max(s,e>=r?Math.exp(-(e-r)*18):0);return{bloom:.9,bloomThr:.72,grain:.07,vig:.62,ca:.7+n,dust:.25,punch:t*.25,contrast:1.06,fadeW:s*.35,tint:[1.02,.97,.95]}}};var vu=2.3,l0=.3,Es=6,gu=i=>vu-l0*(1-(i/Es)**2),Ms=44.35,Jy=[[41.3,-1.3,1.78,1.25,-.95,1.74,0,32],[42.62,-.2,1.82,1.4,.2,1.76,0,32],[42.67,.5,.55,2.3,.3,2.4,0,48,.08],[44.3,-.4,.65,2.4,.6,2.3,0,48,.03],[44.35,1.05,1.8,1.05,1.05,1.76,0,30],[46.9,1.05,1.79,.78,1.05,1.78,0,30],[46.95,3.6,1.4,5.2,.4,1.8,0,42],[47.9,4.6,1.6,6.6,.4,2,0,42]],jy=`
uniform float uT, uWind, uAmp, uSeed, uH, uDrop; varying vec2 vUv; varying vec3 vW; ${Ne}
void main(){ vUv = uv; vec3 p = position; float a = clamp(-p.y / uH, 0.0, 1.0), a2 = pow(a, 1.3);
  float w = uWind * (0.6 + 0.4 * vnoise(vec2(uT * 0.7 + uSeed, p.x)));
  p.z += a2 * uAmp * (sin(p.x * 3.0 + uT * 4.2 + uSeed) * 0.16 + sin(p.y * 5.0 - uT * 5.3 + uSeed * 2.0) * 0.1 + sin(p.x * 7.0 + p.y * 4.0 + uT * 7.0) * 0.035 + w * 0.55);
  p.y += a2 * uAmp * w * 0.08; p.x += a * uAmp * sin(uT * 2.3 + p.y * 2.0 + uSeed) * 0.03;
  p.y += uDrop;
  vec4 wp = modelMatrix * vec4(p, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Qy=`
uniform sampler2D uMap; uniform float uHas, uDev, uPhotoA; uniform vec3 uCol, uSun; varying vec2 vUv; varying vec3 vW; ${Ne}
void main(){ vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); vec3 V = normalize(cameraPosition - vW);
  if (dot(n, V) < 0.0) n = -n;
  vec3 base = uCol;
  if (uHas > 0.5) { // instant photo: white frame, wider bottom margin, image develops from milky white
    vec2 q = (vUv - vec2(0.07, 0.2)) / vec2(0.86, 0.73);
    bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0;
    vec3 img = texture2D(uMap, clamp(q, 0.0, 1.0)).rgb;
    vec3 dev = mix(vec3(0.82, 0.83, 0.78), mix(img * vec3(0.6, 0.5, 0.7), img, smoothstep(0.5, 1.0, uDev)), smoothstep(0.0, 0.6, uDev));
    base = inside ? dev : vec3(0.93, 0.91, 0.86);
  }
  base *= 0.93 + 0.07 * vnoise(vUv * 80.0);
  float dif = max(dot(n, uSun), 0.0), back = max(dot(-V, uSun), 0.0);
  vec3 c = base * (0.3 + 0.75 * dif) + base * vec3(1.0, 0.65, 0.4) * pow(back, 3.0) * 0.55 * (1.0 - uHas * 0.6);
  gl_FragColor = vec4(c * vec3(1.08, 0.95, 0.85), 1.0); }`,e_=`uniform sampler2D uMap; uniform float uT; varying vec2 vUv; ${Ne}
void main(){ vec2 uv = vUv + vec2(vnoise(vUv * 40.0 + uT) - 0.5, 0.0) * 0.002;
  vec3 c = texture2D(uMap, uv, 2.2).rgb; gl_FragColor = vec4(c * 0.95, smoothstep(1.0, 0.8, vUv.y) * smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x)); }`,t_=`varying vec2 vUv; uniform float uT; ${Ne}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.95, 0.52, 0.32), vec3(0.12, 0.1, 0.26), smoothstep(0.05, 0.75, y));
  float cl = smoothstep(0.5, 0.8, fbm(vUv * vec2(3.0, 6.0) + vec2(uT * 0.02, 0.0)));
  c = mix(c, vec3(0.9, 0.5, 0.42), cl * 0.45); gl_FragColor = vec4(c, 1.0); }`,al=class extends st{constructor(e){super(e,{fov:34,near:.05,far:80});let t=this.scene,n=pt(41);t.fog=new Xi(10115648,12,40),this.T={uT:{value:0},uWind:{value:.5}},t.add(ci(t_,{uT:this.T.uT})),this.sun=new T(-.5,.35,-.8).normalize();let s=e.img.village;if(s){let g=new G(new ve(50,50*s.h/s.w),new ae({uniforms:{uMap:{value:s.tex},uT:this.T.uT},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:e_,depthWrite:!1,transparent:!0}));g.position.set(1,5.2,-30),g.scale.setScalar(1.9),g.renderOrder=-10,t.add(g)}let r=new G(new ve(24,9),new ae({transparent:!0,depthWrite:!1,uniforms:{uSun:{value:this.sun}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; ${Ne} void main(){ float n = fbm(vP * 1.5), g = vnoise(vP * 30.0);
        vec3 c = mix(vec3(0.05, 0.06, 0.02), vec3(0.22, 0.18, 0.07), n * 0.8 + g * 0.3);
        gl_FragColor = vec4(c, smoothstep(1.0, 0.45, length(vP / vec2(12.0, 4.5)))); }`}));r.rotation.x=-Math.PI/2,r.position.z=1,r.renderOrder=-5,t.add(r),t.add(new Ia(16762010,2764824,1.2));let o=new dr(16756848,2.2);o.position.copy(this.sun).multiplyScalar(10),t.add(o);let a=new tt({color:5913638,roughness:.9});for(let g of[-Es,Es]){let x=new G(new Qt(.06,.07,vu+.3,10),a);x.position.set(g,(vu+.3)/2,0),t.add(x)}let l=[];for(let g=0;g<=40;g++){let x=-Es+g/40*2*Es;l.push(new T(x,gu(x),0))}t.add(new G(new Ai(new Yn(l),120,.008,6),new tt({color:14538184})));let c=new tt({color:13214330,roughness:.7}),h=[{x:-4.2,w:1.6,h:1.45,col:15920870,amp:1},{x:-2.6,w:.42,h:.5,img:"snap2",amp:.35},{x:-1.9,w:.72,h:.82,col:9413560,amp:.9},{x:-.95,w:.42,h:.5,img:"snap1",amp:.35},{x:-.4,w:.42,h:.5,img:"snap3",amp:.35},{x:.3,w:.5,h:.9,col:15784080,amp:.9},{x:1.05,w:.42,h:.5,img:"snap4",amp:.35,isNew:!0},{x:1.85,w:.62,h:1,col:16448250,amp:.9},{x:3.3,w:1.5,h:1.35,col:12571878,amp:1}];this.cloth=[],h.forEach((g,x)=>{let m=g.img?e.img[g.img]:null,f={...this.T,uAmp:{value:g.amp},uSeed:{value:n()*10},uH:{value:g.h},uDrop:{value:0},uMap:{value:m?m.tex:null},uHas:{value:m?1:0},uDev:{value:1},uPhotoA:{value:1},uCol:{value:new xe(g.col??16777215)},uSun:{value:this.sun}},_=new ve(g.w,g.h,g.img?8:24,g.img?10:30);_.translate(0,-g.h/2,0);let y=new G(_,new ae({vertexShader:jy,fragmentShader:Qy,uniforms:f,side:Qe}));y.position.set(g.x,gu(g.x)+.01,0),y.rotation.z=-Math.atan(2*l0*g.x/(Es*Es))*.7,t.add(y);let M=[];for(let S of g.w>.5?[-.42,.42]:[0]){let R=new G(new Tt(.03,.09,.03),c);R.position.set(g.x+S*g.w,gu(g.x+S*g.w)-.02,.012),t.add(R),M.push(R)}this.cloth.push({it:g,U:f,m:y,pins:M})});let u=500,d=new Float32Array(u*3);for(let g=0;g<u;g++)d.set([(n()-.5)*16,n()*4,(n()-.5)*8],g*3);let p=new Ve;p.setAttribute("position",new Ye(d,3)),this.pol=new St(p,new xn({map:e.shared.glow,color:16769200,size:.035,transparent:!0,opacity:.8,blending:De,depthWrite:!1})),t.add(this.pol)}update(e){let t=re.hitPulse("kick",e,6);en(this.camera,Jy,e,.002*t),this.T.uT.value=e,this.T.uWind.value=.45+.35*Math.sin(e*.9)+.4*t+.5*re.hitPulse("hit",e,3);for(let n of this.cloth){if(!n.it.isNew)continue;let s=e>=Ms,r=Te((e-Ms)/.28),o=s?(1-r)*.6-Math.sin(r*Math.PI)*0+(r>=1?Math.exp(-(e-Ms-.28)*9)*Math.sin((e-Ms-.28)*40)*.015:0):5;n.U.uDrop.value=o,n.m.visible=s,n.pins.forEach(a=>{a.visible=e>=Ms+.26}),n.U.uDev.value=$(Ms+.35,Ms+2.3,e)}this.pol.position.set(e*.6%4-2,Math.sin(e*.5)*.1,0)}post(e){let t=re.hitPulse("kick",e,9),n=re.hitPulse("hit",e,10);return{bloom:.95,bloomThr:.72,grain:.05,vig:.6,contrast:1.08,ca:.6+n,dust:.35,punch:t*.2,leak:.15,tint:[1.05,.97,.9],fadeW:n*.25+$(47.3,47.8,e)*0}}};var n_=14,hi=i=>-(i-69.4)*n_,i_=`uniform float uT, uK; varying vec3 vW; ${Ne}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 4.0);
  float n = 0.6 * fbm(vW.xz * 0.18 + vec2(0.0, uT * 0.3)) + 0.4 * vnoise(vec2(vW.x * 1.2, vW.z * 4.0) - uT);
  vec3 deep = vec3(0.05, 0.0, 0.006), sky = vec3(0.75, 0.16, 0.1);
  vec3 c = mix(deep, sky, fr * 0.6) * (0.7 + 0.5 * n) + vec3(1.0, 0.5, 0.35) * pow(n, 7.0) * 0.5 * (0.15 + 0.85 * fr) * (1.0 + uK);
  gl_FragColor = vec4(c, 0.78 + 0.2 * (1.0 - fr)); }`,s_=`uniform float uT; varying vec2 vUv; ${Ne}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.85, 0.28, 0.16), vec3(0.1, 0.0, 0.03), smoothstep(0.3, 0.9, y));
  float sp = fbm(vec2(atan(vUv.x - 0.5, y - 0.1) * 3.0, length(vUv - vec2(0.5, 0.1)) * 4.0 - uT * 0.1));
  c += vec3(0.4, 0.05, 0.02) * sp * smoothstep(0.35, 0.8, y); gl_FragColor = vec4(c, 1.0); }`,r_=[[69.4,0,1.1,hi(69.4),.4,1.4,hi(69.4)-20,58,.12],[70.79,.8,1.3,hi(70.79),1.2,1.5,hi(70.79)-20,58,-.1],[70.84,0,16,hi(70.84)+6,0,0,hi(70.84)-14,50,0],[72.94,0,11,hi(72.94)-4,0,0,hi(72.94)-22,50,.25],[72.98,0,2,hi(72.98)-8,0,6,-170,50,0],[74.2,0,6.5,hi(74.2)-12,0,8,-170,46,0]],ll=class extends st{constructor(e){super(e,{fov:58,near:.1,far:400});let t=this.scene,n=pt(69);t.environment=new ri(e.renderer).fromScene(new es,.04).texture,t.environmentIntensity=.28,t.fog=new Xi(3803658,25,150),this.U={uT:{value:0},uK:{value:0}},t.add(ci(s_,this.U));let s=e.img.m_swarm;if(s){let S=new G(new ve(260,260*s.h/s.w),new _t({map:s.tex,fog:!1,transparent:!0,opacity:.4,depthWrite:!1,blending:De}));S.position.set(0,60,-250),S.renderOrder=-50,t.add(S),this.swarm=S}let r=[new ee(0,0),new ee(1,0),new ee(1,.78),new ee(0,1)],o=new Ta(r,6);o.computeVertexNormals();let a=new tt({color:13111338,emissive:7340044,emissiveIntensity:1,metalness:.3,roughness:.14,flatShading:!0}),l=420;this.cry=new jt(o,a,l),this.cry.instanceColor=new At(new Float32Array(l*3),3);let c=new $e,h=new It,u=new Jt,d=new T,p=new T;this.cz=[];for(let S=0;S<l;S++){let R=n()<.5?-1:1,w=n()<.3,P=R*(w?2.6+n()*3.5:7+n()*28),D=10-n()*150,v=w?.8+n()*2.4:5+n()*n()*26,b=Math.min(v*(.05+n()*.05),1.4);u.set((n()-.5)*.5,n()*6.28,-R*(n()*.3)),h.setFromEuler(u),c.compose(p.set(P,-.5,D),h,d.set(b,v,b)),this.cry.setMatrixAt(S,c),this.cz.push(D)}t.add(this.cry);let g=new jt(o,a.clone(),l);g.instanceMatrix=this.cry.instanceMatrix,g.instanceColor=this.cry.instanceColor,g.material.side=Qe,g.scale.y=-1,g.position.y=-1,t.add(g),this.mir=g;let x=new G(new ve(600,600),new ae({uniforms:this.U,transparent:!0,depthWrite:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:i_}));x.rotation.x=-Math.PI/2,x.position.y=-.5,t.add(x),this.RU={uA:{value:0},uK:this.U.uK};let m=new G(new Yi(40,.8,16,160),new ae({uniforms:this.RU,transparent:!0,blending:De,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vN; void main(){ vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA, uK; varying vec3 vN; void main(){ gl_FragColor = vec4(vec3(1.0, 0.9, 0.8) * uA * (1.4 + uK), 1.0); }"}));m.position.set(0,26,-200),t.add(m);let f=new Sn(new vn({map:e.shared.glow,color:16756864,blending:De,depthWrite:!1,fog:!1}));f.position.copy(m.position),f.scale.setScalar(120),t.add(f),this.halo=f;let _=600,y=new Float32Array(_*3);for(let S=0;S<_;S++)y.set([(n()-.5)*240,10+n()*70,-60-n()*140],S*3);let M=new Ve;M.setAttribute("position",new Ye(y,3)),this.ang=new St(M,new xn({map:e.shared.glow,color:16774382,size:1.4,transparent:!0,blending:De,depthWrite:!1,fog:!1})),t.add(this.ang),this.col=new xe}update(e){let t=re.hitPulse("kick",e,6),n=re.hitPulse("hit",e,4);en(this.camera,r_,e,.02*t),this.U.uT.value=e,this.U.uK.value=t;let s=this.camera.position.z,r=re.since("kick",e);for(let a=0;a<this.cz.length;a++){let l=s-this.cz[a],h=.55+2.2*(Math.exp(-Math.pow((l-r*60)/6,2))*Math.exp(-r*1.5))+.6*n;this.cry.instanceColor.setXYZ(a,h,h*.9,h*.9)}this.cry.instanceColor.needsUpdate=!0;let o=$(72.96,73.6,e);this.RU.uA.value=.3+o*1.2,this.halo.material.opacity=.25+o*.5,this.ang.position.y=-(e-69.4)*1.6,this.swarm&&(this.swarm.position.y=60-(e-69.4)*1.2)}post(e){let t=re.hitPulse("kick",e,9),n=re.hitPulse("hit",e,8);return{bloom:.8,bloomThr:.8,contrast:1.12,grain:.07,vig:.6,ca:.9+1.5*n,punch:t*.35,shake:.004*t+.006*n,tint:[1.04,.92,.9],dust:.25,dustCol:[1,.5,.4],fadeW:$(73.4,74.03,e)*.5}}};var o_=86.89,c0=88.64,Ft={w:9.6,h:5.4,y:3.2,z:-10},h0=new T(0,2.6,7.5),a_=`uniform sampler2D uTex; uniform float uT, uFl, uBurn, uHeat; varying vec2 vUv; ${Ne}
void main(){ vec2 uv = vUv + vec2(0.0, (vnoise(vec2(uT * 9.0, 0.0)) - 0.5) * 0.004);
  vec3 c = texture2D(uTex, uv).rgb;
  c *= 1.15 - 0.55 * length(vUv - 0.5) ; c *= uFl;
  float sx = hash12(vec2(floor(uT * 24.0), 3.0)); c *= 1.0 - 0.5 * smoothstep(0.003, 0.0, abs(vUv.x - sx)) * step(0.6, hash12(vec2(floor(uT * 24.0), 7.0)));
  // burn: the frame melts from a hot spot (film stuck in the gate)
  float d = length((vUv - vec2(0.56, 0.52)) * vec2(1.6, 1.0)) + 0.18 * fbm(vUv * 7.0 + uT * 0.6);
  float th = uBurn * 1.3, edge = smoothstep(th + 0.12, th, d);
  c = mix(c, c * vec3(1.4, 0.7, 0.3), uHeat * 0.6 + edge * 0.8);
  c += vec3(2.2, 0.9, 0.3) * smoothstep(0.08, 0.0, abs(d - th)) * step(0.001, uBurn);
  c = mix(c, vec3(1.25, 1.15, 1.0) * uFl, smoothstep(th - 0.03, th - 0.06, d) * step(0.001, uBurn));
  gl_FragColor = vec4(c, 1.0); }`,u0="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",l_=`uniform float uT, uA; uniform vec3 uO, uE, uCol; uniform vec2 uH; varying vec3 vW; ${Ne}
void main(){ vec3 ax = uE - uO; float L = length(ax); ax /= L; vec3 r = vW - uO; float s = max(dot(r, ax), 0.001);
  vec3 lat = r - ax * s; vec2 q = vec2(lat.x, lat.y) / (uH * s / L);                     // -1..1 across the frame
  float edge = smoothstep(1.0, 0.55, abs(q.x)) * smoothstep(1.0, 0.5, abs(q.y));
  float rays = 0.55 + 0.45 * vnoise(q * 7.0 + 3.0) + 0.25 * vnoise(q * 23.0);
  float n = 0.6 + 0.4 * fbm3(vW * 0.7 + vec3(0.0, uT * 0.15, uT * 0.1));
  float a = uA * n * rays * edge * (0.08 + 0.92 * exp(-s * 0.14)) * 0.14; gl_FragColor = vec4(uCol * a, 1.0); }`,c_=`uniform float uA; uniform vec3 uO; varying vec3 vW;
void main(){ float d = length(vW - uO); gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * uA * exp(-d * 0.35) * 0.22, 1.0); }`,h_=[[84.9,-1.7,.45,2.6,-.6,1.4,-10,42,.03],[86.87,-.9,.75,-.6,.4,2.2,-10,42,-.02],[86.9,-1.3,2.3,9.9,.9,2.9,1,46,.05],[87.9,-1,2.5,9.3,.7,2.9,1,42,.02],[87.93,-1.75,2.95,8.15,-.05,2.8,7.2,34,-.05],[88.62,-1.55,2.9,8.05,-.05,2.75,7.25,30,-.05],[88.65,2.6,5.4,12.5,0,2.9,-10,46,0],[89.4,2.2,5,11.5,0,3,-10,44,0]];function u_(){let i=Lt(256,512),e=i.getContext("2d"),t=pt(8);e.fillStyle="#4a4a52",e.fillRect(0,0,256,512);for(let n=8;n<504;n+=22)for(let s=10;s<246;s+=26){let r=t()<.35;e.fillStyle=r?`rgb(255,${190+t()*50|0},${120+t()*60|0})`:`rgb(${30+t()*25|0},${34+t()*25|0},${44+t()*25|0})`,e.fillRect(s,n,16,12)}return qt(i)}function d_(){let i=Lt(256,256),e=i.getContext("2d");e.fillStyle="#2a2a2e",e.beginPath(),e.arc(128,128,126,0,7),e.fill(),e.fillStyle="#141416",e.beginPath(),e.arc(128,128,100,0,7),e.fill(),e.fillStyle="#8c8c92",e.beginPath(),e.arc(128,128,60,0,7),e.fill(),e.fillStyle="#0a0a0a";for(let t=0;t<5;t++){let n=t*1.2566;e.beginPath(),e.arc(128+Math.cos(n)*38,128+Math.sin(n)*38,15,0,7),e.fill()}return e.beginPath(),e.arc(128,128,7,0,7),e.fill(),qt(i)}function f_(i){let e=Lt(256,1024),t=e.getContext("2d");t.fillStyle="#120c08",t.fillRect(0,0,256,1024);for(let s=0;s<6;s++){let r=s*170+8;if(i){let o=i.width*.55,a=i.width*(.1+.06*s);t.drawImage(i,a,i.height*.2,o,o*.62,36,r,184,150)}t.fillStyle="rgba(255,170,80,0.25)",t.fillRect(36,r,184,150)}t.fillStyle="#e8d8b8";for(let s=4;s<1024;s+=28)t.fillRect(8,s,16,14),t.fillRect(232,s,16,14);let n=qt(e);return n.wrapT=ps,n}var cl=class extends st{constructor(e){super(e,{fov:42,near:.05,far:200});let t=this.scene,n=pt(85),s=e.img,r=s.set_fight;t.fog=new Ea(460042,.035),this.clear.set(262918),t.add(new Ua(3813440,.5)),this.U={uTex:{value:r?.tex},uT:{value:0},uFl:{value:1},uBurn:{value:0},uHeat:{value:0}};let o=new G(new ve(Ft.w,Ft.h),new ae({uniforms:this.U,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:a_,fog:!1}));o.position.set(0,Ft.y,Ft.z),t.add(o);let a=new G(new Tt(Ft.w+.6,Ft.h+.6,.1),new tt({color:328965,roughness:.9}));a.position.set(0,Ft.y,Ft.z-.08),t.add(a),this.screenLight=new yn(16751216,8,0,1.2),this.screenLight.position.set(0,3,Ft.z+2.5),t.add(this.screenLight);let l=new G(new ve(60,60),new tt({color:1709592,roughness:.35,metalness:.2}));l.rotation.x=-Math.PI/2,t.add(l);let c=u_(),h=new tt({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.35,roughness:.6,color:10131104}),u=new Tt(1,1,1);u.translate(0,.5,0);let d=90,p=new jt(u,h,d),g=new $e,x=new It,m=new Jt,f=0;for(let j=0;j<d*3&&f<d;j++){let oe=(n()-.5)*11,ue=-9+n()*5.8;if(Math.abs(oe)<.7)continue;let Ce=.4+n()*n()*2.6,Fe=.25+n()*.35;m.set(0,(n()-.5)*.2,f===7?.5:0),x.setFromEuler(m),g.compose(new T(oe,0,ue),x,new T(Fe,Ce,Fe*(.8+n()*.5))),p.setMatrixAt(f++,g)}p.count=f,t.add(p),this.evas=[],[["cut_e01",-1.6,-7.2,3.1,.2],["cut_e13",1.9,-7.6,3.3,-.25]].forEach(([j,oe,ue,Ce,Fe],We)=>{let I=s[j];if(!I)return;let tn=ji(I,{wind:0,rim:1.2,seed:We*2.3});tn.uniforms.uTint.value.set(.42,.34,.4),tn.uniforms.uRim.value.set(1,.72,.5,.5);let Ke=new G(Qi(I,Ce),tn);Ke.position.set(oe,0,ue),Ke.rotation.y=Fe,Ke.renderOrder=5,t.add(Ke),this.evas.push(Ke)});let _=new tt({color:6974064,metalness:.8,roughness:.4}),y=new Qt(.035,.035,1,6),M=[],S=(j,oe)=>M.push([j,oe]);for(let j of[-1,1])for(let oe=-10;oe<=4;oe+=2){let ue=j*6.2,Ce=j*7.4;S([ue,0,oe],[ue,8,oe]),S([Ce,0,oe],[Ce,8,oe]);for(let Fe=1.5;Fe<=7.5;Fe+=2)S([ue,Fe,oe],[Ce,Fe,oe]),oe<4&&(S([ue,Fe,oe],[ue,Fe,oe+2]),S([Ce,Fe,oe],[Ce,Fe+2>8?Fe:Fe+2,oe+2]))}for(let j=-6;j<=6;j+=2)S([j,8,-4],[j,8,2]);S([-6.2,8,-4],[6.2,8,-4]),S([-6.2,8,2],[6.2,8,2]);let R=new jt(y,_,M.length),w=new T(0,1,0);M.forEach(([j,oe],ue)=>{let Ce=new T(...j),Fe=new T(...oe),We=Fe.clone().sub(Ce);g.compose(Ce.clone().add(Fe).multiplyScalar(.5),x.setFromUnitVectors(w,We.clone().normalize()),new T(1,We.length(),1)),R.setMatrixAt(ue,g)}),t.add(R),this.lamps=[];let P=new Ra(2.2,8,24,1,!0);P.translate(0,-4,0);for(let j=0;j<6;j++){let oe=-5+j*2,ue=new T(oe,7.9,-1+j%2*1.5),Ce=new G(new Qt(.22,.3,.5,12),new tt({color:1381653,metalness:.6,roughness:.5}));Ce.position.copy(ue),t.add(Ce);let Fe={uA:{value:0},uO:{value:ue}},We=new G(P,new ae({uniforms:Fe,vertexShader:u0,fragmentShader:c_,transparent:!0,blending:De,depthWrite:!1,side:Qe}));We.position.copy(ue),We.lookAt(oe*.3,0,-5),We.rotateX(-Math.PI/2),t.add(We);let I=new Sn(new vn({map:e.shared.glow,color:16769200,blending:De,depthWrite:!1,transparent:!0,opacity:0}));I.position.copy(ue).add(new T(0,-.3,0)),I.scale.setScalar(1.6),t.add(I),this.lamps.push({u:Fe,sp:I,on:o_+.1+j*.25})}this.stage=new $i(16769728,0,0,.7,.6,0),this.stage.position.set(0,8,-1),this.stage.target.position.set(0,0,-6),t.add(this.stage,this.stage.target);let D=new bn;D.position.copy(h0),t.add(D),this.pj=D;let v=new yn(16756848,1.5,4,1);v.position.set(.8,1.4,1.2),D.add(v);let b=new yn(8425727,.8,4,1);b.position.set(-1,.3,.8),D.add(b);let U=new tt({color:2828846,metalness:.7,roughness:.35}),O=new G(new Tt(.5,.6,.9),U);D.add(O);let H=new G(new Qt(.1,.12,.3,24),U);H.rotation.x=Math.PI/2,H.position.set(0,.05,-.58),D.add(H);let Z=new Sn(new vn({map:e.shared.glow,color:16773336,blending:De,depthWrite:!1}));Z.position.set(0,.05,-.75),Z.scale.setScalar(.9),D.add(Z),this.glass=Z;let V=d_(),ne=[new tt({color:3816e3,metalness:.8,roughness:.3}),new tt({map:V,metalness:.5,roughness:.4}),new tt({map:V,metalness:.5,roughness:.4})];this.reels=[[-.35,.62,.42],[.3,.6,.38]].map(([j,oe,ue])=>{let Ce=new G(new Qt(ue,ue,.06,40),ne);return Ce.rotation.z=Math.PI/2,Ce.position.set(0,oe+.3,j),D.add(Ce),Ce}),this.strip=f_(r?.img),this.strip.repeat.set(1,.5);let W=new G(new ve(.1,.4),new _t({map:this.strip,color:16767144}));W.position.set(-.252,.02,-.1),W.rotation.y=-Math.PI/2,D.add(W);let ge=new G(new Ai(new Yn([new T(0,.95,-.7),new T(0,.5,-.5),new T(0,.25,-.2),new T(0,.3,.2),new T(0,.6,.62)]),40,.012,4),new tt({color:3810328,roughness:.3}));D.add(ge);let ce=h0.clone().add(new T(0,.05,-.75)),Se=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([j,oe])=>[j*Ft.w/2,Ft.y+oe*Ft.h/2,Ft.z+.02]),nt=[];for(let j=0;j<4;j++){let oe=Se[j],ue=Se[(j+1)%4];nt.push(ce.x,ce.y,ce.z,...oe,...ue)}let at=new Ve;at.setAttribute("position",new Xe(nt,3)),this.BU={uT:this.U.uT,uA:{value:1},uO:{value:ce},uE:{value:new T(0,Ft.y,Ft.z)},uH:{value:new ee(Ft.w/2,Ft.h/2)},uCol:{value:new xe(1,.86,.7)}},t.add(new G(at,new ae({uniforms:this.BU,vertexShader:u0,fragmentShader:l_,transparent:!0,blending:De,depthWrite:!1,side:Qe,fog:!1})));let q=1400,te=new Float32Array(q*3);for(let j=0;j<q;j++){let oe=n(),ue=(n()-.5)*.9,Ce=(n()-.5)*.9;te.set([ce.x+ue*Ft.w*oe,ce.y+(Ft.y+Ce*Ft.h-ce.y)*oe,ce.z+(Ft.z-ce.z)*oe],j*3)}let Me=new Ve;Me.setAttribute("position",new Ye(te,3)),this.dust=new St(Me,new xn({map:e.shared.glow,color:16768180,size:.05,transparent:!0,opacity:.7,blending:De,depthWrite:!1})),t.add(this.dust)}update(e){let t=re.hitPulse("kick",e,8),n=re.hitPulse("hit",e,5);en(this.camera,h_,e,.01*n);let s=.9+.1*Math.sin(e*150.8)*Math.sin(e*47)+.15*t,r=$(c0-.05,89.3,e),o=$(87.8,c0,e);this.U.uT.value=e,this.U.uFl.value=s,this.U.uBurn.value=r,this.U.uHeat.value=o,this.BU.uA.value=s*(1+n*.8+r*2),this.screenLight.intensity=(7+5*t+12*r)*s;let a=0;for(let l of this.lamps){let c=$(l.on,l.on+.06,e);a+=c,l.u.uA.value=c*(1+.4*t),l.sp.material.opacity=c}this.stage.intensity=a*1.6,this.reels.forEach((l,c)=>{l.rotation.x=-e*(c?5.2:4.1)}),this.strip.offset.y=Math.floor(e*24)*(170/1024),this.glass.scale.setScalar(.8+.3*s+.8*r);for(let l of this.evas)l.material.uniforms.uT.value=e,l.material.uniforms.uRim.value.w=.45+.6*t;this.dust.position.y=Math.sin(e*.3)*.05}post(e){let t=re.hitPulse("kick",e,10),n=re.hitPulse("hit",e,7);return{bloom:.9,bloomThr:.74,grain:.1,vig:.7,ca:.8+n,flicker:.12,scratch:.25,weave:.3,punch:.3*t,shake:.004*n,tint:[1.05,.95,.86],dust:.35,dustCol:[1,.8,.6],fadeW:$(88.9,89.3,e)*.7}}};var Eu=18,xu=Eu*Nn,Tn=1.4,zt={y0:1.05,y1:1.95},yu=12,hl=1,Ci=1.6,p_=new T(1,-.8,-.35).normalize(),ts=97.09,_u=97.61,ho=5,bu=`
uniform vec3 uSun; uniform float uS, uPitch, uBreak;
float sunAt(vec3 p){                                   // 0..1 sun reaching p through the left windows
  float k = (p.x + ${Tn.toFixed(2)}) / uSun.x; vec3 w = p - uSun * k;           // hit on the left wall plane (x = -HW)
  if (k < 0.0) return 0.0;
  float z = w.z - ${hl.toFixed(2)} + ${(Ci/2).toFixed(2)}, cell = fract(z / ${Ci.toFixed(2)} + 0.5);
  float win = smoothstep(0.08, 0.14, cell) * smoothstep(0.92, 0.86, cell) * smoothstep(${zt.y0.toFixed(2)}, ${(zt.y0+.05).toFixed(2)}, w.y) * smoothstep(${zt.y1.toFixed(2)}, ${(zt.y1-.05).toFixed(2)}, w.y);
  win *= step(-18.0, w.z) * step(w.z, 1.9);
  float oz = w.z + uS + p.x * 0.0;                                             // scenery coordinate along the track
  float pole = smoothstep(0.02, 0.14, abs(fract(oz / uPitch) - 0.5) * uPitch * 0.5 - 0.05);
  float tree = mix(1.0, smoothstep(0.35, 0.7, vnoise(vec2(oz * 0.35, w.y * 1.5))), step(0.55, vnoise(vec2(oz * 0.05, 3.0))));
  return win * mix(pole * tree, 1.0, uBreak * 0.4);
}`,Mu="varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",m_=`uniform vec3 uCol; uniform float uSpec, uGrain, uAmb; varying vec3 vW, vN; ${Ne} ${bu}
void main(){ vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float s = sunAt(vW) * max(dot(N, -uSun), 0.0);
  vec3 amb = mix(vec3(0.07, 0.045, 0.07), vec3(0.17, 0.09, 0.08), N.y * 0.5 + 0.5) * uAmb;
  amb += vec3(0.25, 0.12, 0.2) * smoothstep(0.5, -1.0, N.x) * 0.3;             // dusk glow from the right windows
  vec3 c = uCol * (amb + vec3(2.4, 1.2, 0.5) * s);
  c += vec3(1.6, 0.9, 0.5) * uSpec * pow(max(dot(reflect(uSun, N), V), 0.0), 30.0) * sunAt(vW + N * 0.02);
  c *= 1.0 + uGrain * (vnoise(vW.xz * 90.0 + vW.y * 40.0) - 0.5);
  gl_FragColor = vec4(c, 1.0); }`,g_=`uniform float uT; varying vec3 vW, vN; ${Ne} ${bu}
void main(){ vec3 ro = cameraPosition, rd = normalize(vW - ro); float L = min(length(vW - ro), 14.0);
  float j = hash12(gl_FragCoord.xy + uT), acc = 0.0;
  for (int i = 0; i < 28; i++) { vec3 p = ro + rd * L * (float(i) + j) / 28.0; if (p.y < 0.0 || p.y > 2.3 || abs(p.x) > ${Tn.toFixed(2)}) continue;
    acc += sunAt(p) * (0.6 + 0.4 * vnoise3(p * 3.0 + vec3(0.0, uT * 0.2, uT * 0.4))); }
  acc *= L / 28.0; gl_FragColor = vec4(vec3(1.0, 0.62, 0.32) * acc * 0.05, 1.0); }`,v_=`uniform float uS, uSide, uPitch; varying vec3 vW, vN; ${Ne}
void main(){ float z = vW.z, y = vW.y; vec3 c;
  if (uSide < 0.0) { c = mix(vec3(1.0, 0.62, 0.3), vec3(0.55, 0.2, 0.25), smoothstep(0.8, 3.2, y));
    c += vec3(1.6, 0.9, 0.5) * exp(-length(vec2(z - 2.0, y - 1.7) * vec2(0.18, 0.5)) * 2.0) * 1.3;           // low sun
  } else c = mix(vec3(0.5, 0.24, 0.3), vec3(0.08, 0.06, 0.16), smoothstep(0.9, 2.6, y));
  float fz = (z + uS * 0.05) * 0.4, far = 0.9 + 0.35 * fbm(vec2(fz, 1.0));                                        // far hills
  c = mix(c, uSide < 0.0 ? vec3(0.42, 0.16, 0.14) : vec3(0.1, 0.06, 0.1), step(y, far) * 0.85);
  float mz = (z + uS * 0.4) * 0.9, bld = 0.75 + 0.4 * step(0.5, vnoise(vec2(floor(mz), 2.0))) * vnoise(vec2(floor(mz * 2.0), 5.0));
  c = mix(c, uSide < 0.0 ? vec3(0.18, 0.06, 0.07) : vec3(0.05, 0.03, 0.06), step(y, bld));
  float pz = z + uS, pole = step(abs(fract(pz / uPitch) - 0.5) * uPitch, 0.07) * step(y, 3.0);
  float d = fract(pz / uPitch) - 0.5, wire = step(abs(y - (2.45 - 0.12 * (1.0 - 4.0 * d * d))), 0.012);
  c = mix(c, vec3(0.03, 0.01, 0.02), max(pole, wire));
  gl_FragColor = vec4(c, 1.0); }`,x_=`uniform float uCrack, uSide, uT; varying vec3 vW, vN; varying vec2 vUv; ${Ne}
void main(){ vec2 q = (vUv - vec2(0.45, 0.4)) * vec2(1.4, 1.0); float r = length(q), a = atan(q.y, q.x);
  float rad = smoothstep(0.03, 0.0, abs(fract(a * 2.2 + vnoise(vec2(r * 6.0, a)) * 0.6) - 0.5) * r * 3.0);
  float ring = smoothstep(0.02, 0.0, abs(fract(r * 7.0 + vnoise(vec2(a * 3.0, 1.0)) * 0.5) - 0.5) * 0.3) * step(r, 0.45);
  float crack = (rad + ring * 0.6) * step(r, uCrack * 0.9);
  float streak = 0.03 * smoothstep(0.3, 0.9, vnoise(vec2(vUv.x * 3.0 + vUv.y * 2.0, uT * 0.5)));
  vec3 c = vec3(1.0, 0.85, 0.7) * (crack * 1.2 + streak); gl_FragColor = vec4(c, 0.04 + crack * 0.6 + streak); }`,y_=`attribute vec4 aS; attribute vec3 aV, aR; uniform float uT; varying vec3 vN, vW; varying float vA;
mat3 rot(vec3 a){ vec3 c = cos(a), s = sin(a); return mat3(c.y*c.z, c.y*s.z, -s.y, s.x*s.y*c.z - c.x*s.z, s.x*s.y*s.z + c.x*c.z, s.x*c.y, c.x*s.y*c.z + s.x*s.z, c.x*s.y*s.z - s.x*c.z, c.x*c.y); }
void main(){ float u = uT - aS.w; vA = step(0.0, u); u = max(u, 0.0); float sl = u < 0.25 ? u : 0.25 + (u - 0.25) * 0.22;  // bullet-time after the burst
  mat3 R = rot(aR * sl * 3.0); vec3 p = aS.xyz + aV * sl + vec3(0.0, -1.2, 0.0) * sl * sl; vN = R * normal;
  vec4 w = vec4(p + R * position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w * vA; }`,__=`varying vec3 vN, vW; varying float vA; ${Ne} ${bu}
void main(){ if (vA < 0.5) discard; vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float g = pow(abs(dot(reflect(uSun, N), V)), 12.0), f = pow(1.0 - abs(dot(N, V)), 3.0), s = 0.25 + sunAt(vW);
  gl_FragColor = vec4(vec3(1.6, 1.0, 0.6) * (g * 2.5 + f * 0.5 + 0.08) * s, 1.0); }`,M_=[[91.2,.35,1.45,1.95,-.1,1.05,-6,38,0],[92.08,.3,1.4,1.2,-.1,1.05,-6,38,.01],[92.11,-.55,1.1,-3.2,.9,.95,-4.3,30,-.02],[93.6,-.5,1.12,-3.35,.9,.97,-4.3,28,-.02],[95.5,.8,1.6,1.95,-.3,1,-8,40,.03],[96.9,.7,1.5,.9,-.3,1,-8,38,.03],[96.92,.55,1.4,-5.3,-1.4,1.45,-7,34,-.04],[97.58,.45,1.38,-5.45,-1.4,1.45,-7,32,-.04],[97.61,1.1,2.15,1.9,-.6,.9,-9,50,.06],[98.3,1,2.05,1.2,-.6,.9,-9,48,.06]],ul=class extends st{constructor(e){super(e,{fov:38,near:.03,far:80});let t=this.scene,n=pt(91),s=e.img;this.clear.set(1050120),this.SU={uSun:{value:p_},uS:{value:0},uPitch:{value:xu},uBreak:{value:0}};let r=(w,P={})=>new ae({uniforms:{...this.SU,uCol:{value:new xe(w)},uSpec:{value:P.spec??0},uGrain:{value:P.grain??.08},uAmb:{value:P.amb??1}},vertexShader:Mu,fragmentShader:m_,side:P.side??si}),o=(w,P,D,v,b,U,O)=>{let H=new G(new Tt(w,P,D),O);return H.position.set(v,b,U),t.add(H),H},a=22,l=-8,c=r(13615784),h=r(7166794),u=r(4160094,{grain:.5}),d=r(10132130,{spec:1.4}),p=r(5916218,{spec:.25,grain:.25});o(2*Tn,.02,a,0,-.01,l,p),o(2*Tn,.02,a,0,2.31,l,r(15261904,{amb:1.3}));for(let w of[-1,1]){let P=w*(Tn+.03);o(.06,zt.y0,a,P,zt.y0/2,l,c),o(.06,2.3-zt.y1,a,P,(2.3+zt.y1)/2,l,c);for(let b=-1;b<=yu;b++)o(.07,zt.y1-zt.y0,Ci*.2,P,(zt.y0+zt.y1)/2,hl-b*Ci+Ci/2,c);o(.5,.1,a-1,w*(Tn-.27),.42,l,u),o(.1,.45,a-1,w*(Tn-.04),.66,l,u),o(.45,.36,a-1,w*(Tn-.3),.18,l,h),o(.35,.02,a-1,w*(Tn-.2),2.02,l,d);let D=new G(new Qt(.015,.015,a,8),d);D.rotation.x=Math.PI/2,D.position.set(w*.62,2.12,l),t.add(D);let v=new G(new ve(60,5),new ae({uniforms:{...this.SU,uSide:{value:w}},vertexShader:Mu,fragmentShader:v_}));v.position.set(w*(Tn+1.2),1.5,l),v.rotation.y=w*-Math.PI/2,t.add(v)}for(let w of[2.2,l-a/2+.3])o(2*Tn,2.3,.08,0,1.15,w,c);for(let w=0;w<6;w++)o(.5,.015,1.4,0,2.29,1-w*3.2,r(16774368,{amb:2.6,grain:0}));for(let w of[-1.5,-9.5,-17.5])for(let P of[-1,1]){let D=new G(new Qt(.02,.02,2.3,8),d);D.position.set(P*.95,1.15,w),t.add(D)}let g=2*22;this.straps=new jt(new Tt(.03,.26,.008).translate(0,-.13,0),h,g),this.rings=new jt(new Yi(.06,.009,6,20),r(15722712),g),this.sp=[];for(let w=0;w<g;w++)this.sp.push([(w%2?1:-1)*.62,1.5-Math.floor(w/2)*.5,n()*6]);t.add(this.straps,this.rings),this.panes=[];for(let w of[-1,1])for(let P=0;P<yu;P++){let D={uCrack:{value:0},uSide:{value:w},uT:{value:0}},v=new G(new ve(Ci*.8,zt.y1-zt.y0),new ae({uniforms:D,transparent:!0,depthWrite:!1,blending:De,vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:x_}));v.position.set(w*Tn,(zt.y0+zt.y1)/2,hl-P*Ci),v.rotation.y=w*-Math.PI/2,t.add(v),w<0&&this.panes.push({u:D,m:v,at:P===ho?ts:_u+Math.abs(P-ho)*.045})}this.RU={...this.SU,uT:{value:0}};let x=new G(new Tt(2*Tn-.02,2.3,a),new ae({uniforms:this.RU,vertexShader:Mu,fragmentShader:g_,side:yt,transparent:!0,depthWrite:!1,depthTest:!1,blending:De}));x.position.set(0,1.15,l),x.renderOrder=20,t.add(x);let m=1500,f=new Zn,_=new Ve;_.setAttribute("position",new Xe([0,.05,0,-.04,-.03,0,.045,-.035,0],3)),_.computeVertexNormals(),f.index=null,f.setAttribute("position",_.getAttribute("position")),f.setAttribute("normal",_.getAttribute("normal"));let y=new Float32Array(m*4),M=new Float32Array(m*3),S=new Float32Array(m*3);for(let w=0;w<m;w++){let P=w<420?ho:Math.floor(n()*yu),D=this.panes[P],v=hl-P*Ci,b=n()-.5,U=n()-.5,O=.4+n()*1.6;y.set([-Tn+.01,(zt.y0+zt.y1)/2+U*(zt.y1-zt.y0),v+b*Ci*.8,D.at+n()*.03],w*4),M.set([(1.2+n()*3.2)*(P===ho?1.3:1),U*1.6+(n()-.3)*1.2,b*2.2+(n()-.5)*1.2+(P===ho?1.2:0)],w*3),S.set([(n()-.5)*6*O,(n()-.5)*6,(n()-.5)*6],w*3)}f.setAttribute("aS",new At(y,4)),f.setAttribute("aV",new At(M,3)),f.setAttribute("aR",new At(S,3)),f.instanceCount=m,this.SHU={...this.SU,uT:{value:0}};let R=new G(f,new ae({uniforms:this.SHU,vertexShader:y_,fragmentShader:__,transparent:!0,depthWrite:!1,blending:De,side:Qe}));R.frustumCulled=!1,R.renderOrder=30,t.add(R),this.ppl=[],[["cut_shinji_seat",.98,-4.3,-1,[1.05,.88,.8]],["cut_gendo_seat",-1,-6.9,1,[.42,.3,.3]]].forEach(([w,P,D,v,b],U)=>{let O=s[w];if(!O)return;let H=ji(O,{wind:0,rim:U?1.1:.5,seed:U*5});H.uniforms.uTint.value.set(...b),H.uniforms.uRim.value.set(1,.62,.3,U?1.1:.5);let Z=new G(Qi(O,1.42),H);Z.position.set(P,-.02,D),Z.renderOrder=10,t.add(Z),this.ppl.push({me:Z,fx:v,tint:b,gendo:U===1})}),this.m4=new $e,this.q=new It,this.e=new Jt,this.v=new T,this.one=new T(1,1,1)}update(e){let t=re.hitPulse("kick",e,9),n=re.hitPulse("hit",e,5),s=Math.sin(e*1.7)*.6+Math.sin(e*4.3)*.2,r=en(this.camera,M_,e,.004*t+.006*n);this.camera.position.y+=Math.sin(e*23)*.002+t*.004,this.SU.uS.value=e*Eu,this.SU.uBreak.value=$(ts,_u+.3,e),this.RU.uT.value=e,this.SHU.uT.value=e;for(let l of this.panes)l.u.uT.value=e,l.u.uCrack.value=l.at===ts?$(96.35,ts,e)*(.4+.6*$(96.9,ts,e))+.15*t*(e>96.3?1:0):$(_u-.25,l.at,e),l.m.visible=e<l.at;for(let l=0;l<this.sp.length;l++){let[c,h,u]=this.sp[l];this.e.set(.12*s+.05*Math.sin(e*3+u),0,.08*Math.sin(e*2.1+u)),this.q.setFromEuler(this.e),this.m4.compose(this.v.set(c,2.12,h),this.q,this.one),this.straps.setMatrixAt(l,this.m4),this.v.set(c,2.12,h).add(new T(0,-.32,0).applyQuaternion(this.q)),this.m4.compose(this.v,this.q,this.one),this.rings.setMatrixAt(l,this.m4)}this.straps.instanceMatrix.needsUpdate=this.rings.instanceMatrix.needsUpdate=!0;let o=-4.3+e*Eu,a=Math.abs((o/xu%1+1)%1-.5)*xu*.5<.12?.55:1;for(let l of this.ppl){let c=this.camera.position,h=Math.atan2(c.x-l.me.position.x,c.z-l.me.position.z);l.me.rotation.y=Te(h,l.fx>0?.25:-1.9,l.fx>0?1.9:-.25),l.me.visible=!(l.gendo&&e>94.5);let u=l.gendo?1:a,d=l.me.material.uniforms;d.uT.value=e,d.uTint.value.set(l.tint[0]*u,l.tint[1]*u,l.tint[2]*u),d.uRim.value.w=(l.gendo?1.1:.5)*(.7+.3*a+t*.4)}}post(e){let t=re.hitPulse("kick",e,10),n=re.hitPulse("hit",e,6),s=$(ts-.02,ts+.05,e)*Math.exp(-Math.max(0,e-ts)*5);return{bloom:.8,bloomThr:.8,contrast:1.1,grain:.08,vig:.62,ca:.7+1.8*n,tint:[1.06,.95,.86],letter:.12,punch:.25*t,shake:.003*n,dust:.3,dustCol:[1,.7,.45],fadeW:s*.6+$(97.95,98.2,e)*.35,exposure:1+.15*n}}};var d0=115.19,E_=123.76,f0=2*Nn,p0=-40,b_=15,uo=.17,m0=[["cut_e00",-26],["cut_e02",-13],["cut_e01",0],["cut_e08",13],["cut_e13",26]],S_=[0,4,1,3,2],w_=[4,3,1,0,2],T_="varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",A_=`uniform float uT, uK, uFlare; varying vec3 vD; ${Ne}
void main(){ vec3 d = normalize(vD); float y = d.y;
  vec3 c = mix(vec3(0.78, 0.2, 0.1), vec3(0.3, 0.02, 0.05), smoothstep(0.0, 0.2, y)); c = mix(c, vec3(0.06, 0.0, 0.03), smoothstep(0.2, 0.7, y));
  c = mix(c, vec3(0.25, 0.02, 0.03), smoothstep(0.0, -0.1, y));
  float cl = fbm(vec2(atan(d.x, -d.z) * 4.0 + uT * 0.01, y * 14.0)); c *= 0.75 + 0.5 * cl * smoothstep(0.35, 0.05, y);
  vec3 M = normalize(vec3(0.0, 0.16, -1.0)); float r = acos(clamp(dot(d, M), -1.0, 1.0));                     // black moon
  c += vec3(1.3, 0.35, 0.2) * exp(-max(r - 0.13, 0.0) * 12.0) * (0.7 + 0.3 * uK + uFlare);
  c = mix(c, vec3(0.01, 0.0, 0.0), smoothstep(0.132, 0.126, r));
  c += vec3(1.4, 0.6, 0.4) * smoothstep(0.004, 0.0, abs(r - 0.2 - 0.004 * sin(uT))) * 0.6;                    // thin halo ring
  gl_FragColor = vec4(c, 1.0); }`,R_=`uniform float uT, uK, uFlare; varying vec3 vW; ${Ne}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 5.0);
  float n = fbm(vW.xz * vec2(0.12, 0.3) + vec2(uT * 0.05, uT * 0.12)) + 0.35 * vnoise(vW.xz * vec2(1.0, 3.0) - uT * 0.6);
  vec3 c = mix(vec3(0.12, 0.0, 0.01), vec3(0.8, 0.2, 0.1), fr * 0.7) * (0.75 + 0.45 * n);
  float mx = exp(-abs(vW.x) * 0.01) * smoothstep(-300.0, -60.0, vW.z) * pow(n * 0.85, 6.0);                        // moon path glitter
  c += vec3(1.4, 0.5, 0.3) * mx * (0.5 + uK + 2.0 * uFlare);
  gl_FragColor = vec4(c, 0.7 + 0.25 * (1.0 - fr)); }`,C_=`attribute vec4 aB; uniform float uT, uPx; varying float vA; varying vec3 vC;
void main(){ float u = uT - aB.x; vec3 p = position;
  float r = u * (1.6 + aB.y * 2.5) + u * u * 0.35; p.y += r; p.x += sin(u * 1.1 + aB.y * 40.0) * u * 0.7; p.z += cos(u * 0.9 + aB.y * 17.0) * u * 0.5 - u * u * 0.3;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = step(0.0, u) * smoothstep(0.0, 0.15, u) * exp(-u * 0.22) * smoothstep(0.4, 1.5, -mv.z);
  vC = mix(vec3(1.0, 0.45, 0.25), vec3(1.0, 0.9, 0.8), aB.z);
  gl_PointSize = min((0.5 + aB.y * 1.2) * (1.0 + aB.z) * uPx / -mv.z, 9.0); }`,P_="varying float vA; varying vec3 vC; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; if (vA * a < 0.003) discard; gl_FragColor = vec4(vC * vA * a * 0.4, 1.0); }",Ot=(i,e,t,n,s=0)=>[i,...e,...t,n,s],I_=[Ot(115.1,[0,2.4,18],[0,7.5,-40],50),Ot(116.23,[1,2.2,12],[0,7.5,-40],48),Ot(116.26,[21,.6,-18],[27,5.5,-40],40,.03),Ot(117.3,[18,.7,-19],[26,6,-40],40,.02),Ot(117.33,[-9,1,-25],[-13,11,-40],44,-.04),Ot(118.37,[-9.6,1.4,-27],[-13,12,-40],42,-.03),Ot(118.4,[8,3.2,-18],[13,9,-40],42,.02),Ot(119.45,[7,3.8,-20],[13,9.5,-40],40,0),Ot(119.48,[0,2.5,-14],[0,11,-40],44),Ot(121.1,[0,12,26],[0,6,-70],46),Ot(123.7,[-3,1.5,12],[0,8,-40],46,.02),Ot(124.8,[-2,1.8,5],[2,8,-40],44,.01),Ot(124.83,[9,5,-24],[13,10.5,-40],40,.03),Ot(125.87,[9.5,5.5,-25.5],[13,11,-40],38,.03),Ot(125.9,[-8,2,-26],[-13,9.5,-40],42,-.03),Ot(126.94,[-8.8,2.4,-27.5],[-13,10,-40],40,-.03),Ot(126.97,[-18,3,-25],[-26,9,-40],42,.02),Ot(128.02,[-18.5,3.5,-26.5],[-26,9.5,-40],40,.02),Ot(128.05,[0,3,-22],[0,10,-40],40),Ot(128.3,[0,3.2,-21],[0,10.5,-40],40),Ot(129.7,[0,7,12],[0,12,-70],48)];function U_(){let i=Lt(256,512),e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,512),e.shadowColor="#fff",e.fillStyle="#fff";for(let[t,n]of[[40,.35],[18,.8],[5,1]])e.shadowBlur=t,e.globalAlpha=n,e.fillRect(118,20,20,492),e.fillRect(40,120,176,18);return qt(i)}var dl=class extends st{constructor(e){super(e,{fov:48,near:.2,far:700});let t=this.scene,n=pt(115),s=e.img;this.U={uT:{value:0},uK:{value:0},uFlare:{value:0}},t.add(new G(new $n(500,48,24),new ae({uniforms:this.U,vertexShader:T_,fragmentShader:A_,side:yt,depthWrite:!1}))),this.cr=[],S_.forEach((d,p)=>this.cr.push({x:m0[d][1]*1.05,z:p0-9,h:58,at:d0+p*f0}));for(let d=0;d<30;d++){let p=-110-n()*240;this.cr.push({x:(n()-.5)*(120+-p*1.4),z:p,h:30+n()*60,at:d0+.3+n()*4.6})}let r=new ve(.5,1).translate(0,.5,0),o=new _t({map:U_(),blending:De,transparent:!0,depthWrite:!1,side:Qe,fog:!1});this.crM=new jt(r,o,this.cr.length),this.crR=new jt(r,o,this.cr.length);for(let d of[this.crM,this.crR])d.instanceColor=new At(new Float32Array(this.cr.length*3),3),d.frustumCulled=!1;this.crR.renderOrder=1,this.crM.renderOrder=4,t.add(this.crM,this.crR);let a=new G(new ve(1400,1400),new ae({uniforms:this.U,transparent:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:R_}));a.rotation.x=-Math.PI/2,a.renderOrder=2,t.add(a),this.evas=[];let l=[],c=[];m0.forEach(([d,p],g)=>{let x=s[d];if(!x)return;let m=Qi(x,1),f=()=>{let v=ji(x,{wind:0,rim:1,seed:g*1.7});return v.uniforms.uTint.value.set(.62,.46,.46),v.uniforms.uRim.value.set(1,.42,.25,1),v},_=new G(m,f()),y=new G(m,f()),M=b_*(g===2?1.08:1);_.position.set(p,-uo*M,p0+Math.abs(p)*.12),_.scale.set(M,M,1),y.position.set(p,uo*M,_.position.z),y.scale.set(M,-M,1),_.material.uniforms.uClip.value.set(uo,.004,1,0),y.material.uniforms.uClip.value.set(uo,.004,.3,1),y.material.uniforms.uTint.value.multiplyScalar(.55),_.rotation.y=y.rotation.y=-p*.012,_.renderOrder=3,y.renderOrder=1,t.add(_,y);let S=E_+w_.indexOf(g)*f0;this.evas.push({m:_,r:y,td:S});let R=40,w=Math.round(R*x.h/x.w),P=$f(x,R,w),D=M*x.w/x.h;for(let v=0;v<1500;v++){let b=n(),U=n();U<uo||P[(Math.floor((1-U)*w)*R+Math.floor(b*R))*4+3]<128||(l.push(p+(b-.5)*D*Math.cos(_.rotation.y),_.position.y+U*M,_.position.z+(b-.5)*D*Math.sin(_.rotation.y)+(n()-.5)*.6),c.push(S+(1-U)*.75+n()*.12,n(),.7+n()*.3,0))}});for(let d=0;d<1500;d++)l.push((n()-.5)*160,0,-8-n()*140),c.push(108+n()*22,n(),n()*.3,0);let h=new Ve;h.setAttribute("position",new Xe(l,3)),h.setAttribute("aB",new Xe(c,4)),this.PU={uT:this.U.uT,uPx:{value:e.h*.9}};let u=new St(h,new ae({uniforms:this.PU,vertexShader:C_,fragmentShader:P_,transparent:!0,depthWrite:!1,blending:De}));u.frustumCulled=!1,u.renderOrder=6,t.add(u),this.m4=new $e,this.q=new It,this.v=new T,this.s=new T,this.Y=new T(0,1,0)}update(e){let t=re.hitPulse("kick",e,7),n=re.hitPulse("hit",e,3);en(this.camera,I_,e,.03*n);let s=Math.exp(-Math.max(0,e-120.11)*1.4)*(e>120.11?1:0)+.6*(e>128.28?Math.exp(-(e-128.28)*1.2):0);this.U.uT.value=e,this.U.uK.value=t,this.U.uFlare.value=s;let r=this.camera.position;this.cr.forEach((o,a)=>{let l=e-o.at,c=l<0?0:1-Math.pow(1-Te(l/.45),3),h=a<5,u=l<0?0:(h?.42:.16)*(1+2.5*Math.exp(-l*4))*(.85+.15*Math.sin(e*9+a)+.25*t)*(1+s*.8)*(1-.35*$(122,130,e));this.q.setFromAxisAngle(this.Y,Math.atan2(r.x-o.x,r.z-o.z)),this.m4.compose(this.v.set(o.x,0,o.z),this.q,this.s.set(o.h*.36,o.h*Math.max(c,.001),1)),this.crM.setMatrixAt(a,this.m4),this.m4.compose(this.v,this.q,this.s.set(o.h*.36,-o.h*Math.max(c,.001)*.8,1)),this.crR.setMatrixAt(a,this.m4),this.crM.instanceColor.setXYZ(a,u,u*.93,u*.88),this.crR.instanceColor.setXYZ(a,u*.3,u*.2,u*.18)});for(let o of[this.crM,this.crR])o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0;for(let o of this.evas)for(let a of[o.m,o.r]){let l=a.material.uniforms;l.uT.value=e,l.uDis.value=Te((e-o.td)/.9),l.uRim.value.w=.45+.4*t+.8*s}}post(e){let t=re.hitPulse("kick",e,9),n=re.hitPulse("hit",e,5);return{bloom:.7,bloomThr:.82,contrast:1.1,grain:.07,vig:.62,ca:.8+1.2*n,punch:.3*t,shake:.004*n,tint:[1.05,.93,.9],dust:.2,dustCol:[1,.5,.35],fadeW:.35*Math.exp(-Math.abs(e-120.11)*6)+$(120.6,121,e)*.35*(e<122?1:0)}}};var ws=142.31,Dt=143.36,bs=144.44,Pi=145.51,g0=146.44,Ts=147.5,An=148.33,wr=149.52,Jn=72,xl=1.9,ui=1.3,Ru=1.6,Cu=.9,yl=-.07,L_=["eva01_eye","shinji_cam","rei_white","kaworu","asuka_beach","misato_last","gendo_train","lilith","fire_fight","set_fight","wunder","ube_pilots","rei_paddy","village","gendo_yui","shinji_red"],D_=15,vl=2048,Pu=1152,fl=vl/4,pl=Pu/4,po=9;var fo=4*po+4,N_=2,F_=1.4;function Su(i,e,t,n){let s=new Float32Array(e*t),r=new Float32Array(e*t),o=2*n+1;for(let a=0;a<t;a++){let l=0,c=a*e;for(let h=-n;h<=n;h++)l+=i[c+Te(h,0,e-1)];for(let h=0;h<e;h++)s[c+h]=l/o,l+=i[c+Math.min(e-1,h+n+1)]-i[c+Math.max(0,h-n)]}for(let a=0;a<e;a++){let l=0;for(let c=-n;c<=n;c++)l+=s[Te(c,0,t-1)*e+a];for(let c=0;c<t;c++)r[c*e+a]=l/o,l+=s[Math.min(t-1,c+n+1)*e+a]-s[Math.max(0,c-n)*e+a]}return r}var v0=(i,e,t,n,s,r)=>{let o=s*e+n,a=i[o]>r;return a!==i[o+1]>r||a!==i[o+e]>r||a!==i[o-1]>r||a!==i[o-e]>r?1:0};function O_(i,e,t){let n=Lt(e,t),s=n.getContext("2d",{willReadFrequently:!0}),r=Math.max(e/i.w,t/i.h),o=i.w*r,a=i.h*r;s.drawImage(i.img,(e-o)/2,(t-a)/2,o,a);let l=s.getImageData(0,0,e,t).data,c=new Float32Array(e*t);for(let g=0;g<e*t;g++)c[g]=(l[g*4]*.3+l[g*4+1]*.55+l[g*4+2]*.15)/255;let h=Su(c,e,t,1),u=Su(h,e,t,2),d=Su(h,e,t,7),p=new Uint8Array(e*t*4);for(let g=1;g<t-1;g++)for(let x=1;x<e-1;x++){let m=g*e+x,f=h[m+1-e]+2*h[m+1]+h[m+1+e]-h[m-1-e]-2*h[m-1]-h[m-1+e],_=h[m+e-1]+2*h[m+e]+h[m+e+1]-h[m-e-1]-2*h[m-e]-h[m-e+1],y=Te((u[m]-h[m]-.012)*14),M=Te((Math.hypot(f,_)-.22)*1.6),S=Te(Math.max(y,M*.7));p[m*4]=S*255,p[m*4+1]=v0(d,e,t,x,g,.3)*255*(1-S*.5),p[m*4+2]=v0(d,e,t,x,g,.72)*255*(1-S*.5),p[m*4+3]=Te(d[m])*255}return p}function k_(i,e){if(e&&e.flipLines)return e.flipLines;let t=new Uint8Array(vl*Pu*4);L_.forEach((s,r)=>{let o=i[s];if(!o)return;let a=O_(o,fl,pl),l=r%4*fl,c=Math.floor(r/4)*pl;for(let h=0;h<pl;h++){let u=((c+pl-1-h)*vl+l)*4;t.set(a.subarray(h*fl*4,(h+1)*fl*4),u)}});let n=new jr(t,vl,Pu,gn);return n.colorSpace=mn,n.generateMipmaps=!0,n.minFilter=Ei,n.magFilter=Zt,n.anisotropy=4,n.needsUpdate=!0,e&&(e.flipLines=n),n}function B_(){let t=Lt(2048,1400),n=t.getContext("2d"),s=pt(27);n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="lighter",n.lineCap="round",n.lineJoin="round";let r=["#ff0000","#00ff00","#0000ff"],o=(l,c,h,u)=>{n.beginPath(),n.moveTo(l+(s()-.5)*2,c+(s()-.5)*2),n.quadraticCurveTo((l+h)/2+(s()-.5)*3,(c+u)/2+(s()-.5)*3,h+(s()-.5)*2,u+(s()-.5)*2),n.stroke()};for(let l=0;l<16;l++){let c=l%4*512,h=Math.floor(l/4)*350,u=c+512*(.5-Ru/xl/2),d=c+512*(.5+Ru/xl/2),p=h+350*(.5-Cu/ui/2-yl/ui),g=h+350*(.5+Cu/ui/2-yl/ui);n.strokeStyle=r[0],n.globalAlpha=.55,n.lineWidth=1.6,o(u,p,d,p),o(d,p,d,g),o(d,g,u,g),o(u,g,u,p),n.globalAlpha=.35,n.lineWidth=1;for(let w=0;w<4;w++){let P=ot(u,d,(w+.5)/4);o(P,p-5,P,p+5),o(P,g-5,P,g+5)}n.globalAlpha=.75,n.lineWidth=1.4;let x=c+290,m=h+8;n.strokeRect(x,m,106,38),o(x+38,m,x+38,m+38),n.font=`22px ${Ct.serif}`,n.fillStyle=r[0],n.fillText("C",x+10,m+28),n.font=`26px ${Ct.script}`,n.fillText(String(101+l*7),x+46,m+29),n.font=`13px ${Ct.serif}`,n.globalAlpha=.6,n.fillText("SCENE",c+112,h+18),n.fillText("CUT",c+112,h+36),n.font=`20px ${Ct.script}`,n.fillText(["A","B","C","D"][l%4]+(l+1),c+166,h+20),n.fillText(String(3+l*5%40),c+166,h+38);let f=c+512-12,_=p+6,y=g-6;n.globalAlpha=.5,n.lineWidth=1.2,o(f,_,f,y);let M=6+l%4*2;for(let w=0;w<=M;w++){let P=ot(_,y,Math.pow(w/M,1+l%3*.4));o(f-6,P,f+1,P)}n.strokeStyle=r[1],n.fillStyle=r[1],n.globalAlpha=.8,n.lineWidth=1.6;for(let w=0;w<3;w++){let P=ot(_,y,w/2);n.beginPath(),n.arc(f-3,P,6,0,7),n.stroke()}if(n.font=`18px ${Ct.script}`,n.fillText(["\u4FEE\u6B63","\u4F5C\u76E3","take2","\u539F\u753B","BG \u6CE8\u610F","\u4E2D\u5272\u308A"][l%6],u+8+s()*60,g+20),l%2===0){let w=u+40+s()*200,P=p+30+s()*120,D=w+50+s()*80,v=P+(s()-.5)*60;o(w,P,D,v),o(D,v,D-9,v-6),o(D,v,D-9,v+6)}n.strokeStyle=r[2],n.fillStyle=r[2],n.globalAlpha=.6,n.font=`16px ${Ct.script}`,n.fillText(l%3===0?"Hi":l%3===1?"BL":"\u5F71",d-40,g+20);let S=u+20+s()*300,R=p+20+s()*150;for(let w=0;w<5;w++)o(S+w*6,R,S+w*6+14,R-14)}n.globalAlpha=1,n.globalCompositeOperation="source-over";let a=new qi(t);return a.colorSpace=mn,a.anisotropy=4,a.needsUpdate=!0,a}var H_=`
attribute vec4 aB;   // lift, curl, flutter, seed
attribute vec4 aC;   // cell, draw, erase, variant
uniform float uT;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
void main(){
  vUv = uv; vC = aC; vSeed = aB.w;
  float a = aB.x, k = aB.y, fl = aB.z;
  float s = (1.0 - uv.y) * ${ui.toFixed(2)};          // arc length from the pivot edge (uv.y = 1)
  float x = (uv.x - 0.5) * ${xl.toFixed(2)};
  float th = a + k * s, ky, kz;
  if (abs(k) < 1e-3) { ky = -s * cos(a); kz = s * sin(a); }
  else { ky = -(sin(th) - sin(a)) / k; kz = (cos(a) - cos(th)) / k; }
  vec3 n = vec3(0.0, sin(th), cos(th));
  float w = fl * sin(x * 3.1 + uT * 7.0 + aB.w * 6.28) * (0.3 + s);
  vec3 p = vec3(x, ${(ui/2).toFixed(2)} + ky, kz) + n * w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,z_=`
uniform sampler2D uLines, uMarks, uHero;
uniform float uT, uInv, uTable, uHeroCol, uInk;
uniform vec3 uFog;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
${Ne}
float hole(vec2 q, vec2 c, float hx, float r){ vec2 d = q - c; d.x = max(abs(d.x) - hx, 0.0); return length(d) / r; }
void main(){
  vec2 q = vec2((vUv.x - 0.5) * ${xl.toFixed(2)}, (vUv.y - 0.5) * ${ui.toFixed(2)});
  float pegY = ${(ui/2-.075).toFixed(3)};
  float hc = min(hole(q, vec2(0.0, pegY), 0.0, 0.028), min(hole(q, vec2(-0.62, pegY), 0.032, 0.018), hole(q, vec2(0.62, pegY), 0.032, 0.018)));
  if (hc < 1.0) discard;
  // paper
  float grain = vnoise(vUv * vec2(900.0, 620.0) + vSeed * 50.0);
  float fib = fbm(vUv * vec2(12.0, 8.0) + vSeed * 9.0);
  vec3 paper = mix(vec3(0.46, 0.41, 0.30), vec3(0.58, 0.53, 0.40), fib) * (0.94 + 0.08 * grain);
  paper *= 1.0 - 0.12 * smoothstep(0.42, 0.5, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));   // aged edges
  paper *= 1.0 - 0.35 * smoothstep(1.35, 1.0, hc);                                          // hole shadow
  // drawing inside the 16:9 frame
  vec2 f = vec2(q.x / ${Ru.toFixed(2)} + 0.5, (q.y - ${yl.toFixed(2)}) / ${Cu.toFixed(2)} + 0.5);
  float cell = vC.x, draw = vC.y, erase = vC.z;
  vec3 ink = vec3(0.0);
  if (f.x > 0.0 && f.x < 1.0 && f.y > 0.0 && f.y < 1.0) {
    vec2 cc = vec2(mod(cell, 4.0), floor(cell / 4.0));
    vec2 fu = mix(vec2(0.004), vec2(0.996), f);
    vec4 L = texture2D(uLines, (cc + fu) / 4.0);
    // lines draw on along a noisy sweep and are erased in rubbed patches
    float sweep = f.x * 0.55 + (1.0 - f.y) * 0.25 + 0.2 * vnoise(f * 9.0 + vSeed);
    float on = smoothstep(sweep - 0.05, sweep + 0.05, draw * 1.1);
    float rub = smoothstep(0.35, 0.65, erase * 1.3 - fbm(f * 6.0 + vSeed * 3.0) * 0.6 + 0.2);
    float k = on * (1.0 - rub) * (0.75 + 0.35 * vnoise(f * vec2(420.0, 240.0)));
    float hat = 0.0;
    float tone = 1.0 - L.a;
    if (tone > 0.55) hat = smoothstep(0.35, 0.8, sin((f.x * 1.6 + f.y) * 520.0)) * smoothstep(0.55, 0.85, tone) * 0.45;
    ink = clamp(L.rgb * vec3(3.2, 1.0, 1.1), 0.0, 1.0) * k; ink.x = max(ink.x, hat * k);
  }
  // margins: cut box, timing ladder, notes (per-sheet variant)
  vec2 mv = vec2(mod(vC.w, 4.0), floor(vC.w / 4.0));
  vec3 M = texture2D(uMarks, vec2((mv.x + vUv.x) / 4.0, 1.0 - (mv.y + 1.0 - vUv.y) / 4.0)).rgb * (1.0 - erase * 0.7);
  vec3 col = paper;
  col = mix(col, vec3(0.05, 0.05, 0.06), clamp(ink.x * 0.95 + M.r * 0.85, 0.0, 1.0));
  col = mix(col, vec3(0.62, 0.03, 0.03) * (1.0 + uInk * 2.5), clamp(ink.y * 0.6 + M.g * 0.8, 0.0, 1.0));
  col = mix(col, vec3(0.03, 0.12, 0.55), clamp(ink.z * 0.5 + M.b * 0.75, 0.0, 1.0));
  // the hero sheet finally takes its colour (continuity into the next shot)
  if (cell > 14.5 && uHeroCol > 0.0 && f.x > 0.0 && f.x < 1.0 && f.y > 0.0 && f.y < 1.0)
    col = mix(col, texture2D(uHero, f).rgb, uHeroCol * smoothstep(0.0, 0.25, uHeroCol * 1.2 - vnoise(f * 5.0) * 0.2));
  // light: key from above-front, light table glow from below, back face = mirrored ghost of the drawing
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float back = dot(N, V) < 0.0 ? 1.0 : 0.0;
  if (back > 0.5) { col = mix(paper * 0.7, col, 0.22); N = -N; }
  float lit = 0.62 + 0.38 * max(dot(N, normalize(vec3(0.3, 0.8, 0.5))), 0.0);
  col *= lit + uTable * 0.2;
  // anti-universe negative
  col = mix(col, vec3(0.9, 0.12, 0.08) * (1.0 - col.r * 1.4) + vec3(0.02), uInv);
  float fd = smoothstep(8.0, 34.0, length(cameraPosition - vW));
  gl_FragColor = vec4(mix(col, uFog, fd), 1.0);
}`,V_=`
uniform float uT, uInv; uniform vec2 uOff; varying vec2 vUv;
${Ne}
void main(){
  vec2 p = vUv + uOff;
  float sc = 0.0;
  for (int i = 0; i < 3; i++) { float fi = float(i);
    float n = vnoise(p * vec2(3.0, 14.0) * (1.0 + fi) + vec2(uT * 0.05 * (fi + 1.0), fi * 7.0));
    sc += smoothstep(0.015, 0.0, abs(n - 0.5)) * (0.5 - fi * 0.12); }
  vec3 c = mix(vec3(0.012, 0.01, 0.018), vec3(0.05, 0.03, 0.035), fbm(p * 2.0 + uT * 0.02));
  c += vec3(0.08, 0.07, 0.07) * sc * (0.5 + 0.5 * fbm(p * 5.0));
  c *= 1.0 - 0.5 * length(vUv - 0.5);
  gl_FragColor = vec4(mix(c, vec3(0.5, 0.05, 0.03) * (0.5 + sc), uInv), 1.0);
}`,G_=`
attribute vec4 aD; uniform float uT; uniform vec3 uC; uniform float uK;
varying vec3 vCol; varying float vA;
${Ne}
void main(){
  vec3 p = position + vec3(sin(uT * 0.7 + aD.x * 6.28), -uT * 0.25 * (0.5 + aD.y), cos(uT * 0.5 + aD.z * 6.28)) * 0.6;
  p = uC + mod(p - uC + 6.0, 12.0) - 6.0;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((1.0 + aD.w * 2.5) * (1.0 + uK) * 90.0 / -mv.z, 0.0, 7.0);
  vCol = mix(vec3(0.55, 0.5, 0.45), vec3(1.0, 0.25, 0.1), step(0.8, aD.w));
  vA = 0.35 * smoothstep(0.2, 1.0, -mv.z);
}`,W_=`
uniform float uA; varying vec2 vUv;
void main(){
  float e = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
  vec3 c = mix(vec3(1.0, 0.88, 0.66) * 0.9 * (1.0 - 0.35 * length(vUv - 0.5)), vec3(0.02, 0.02, 0.025), smoothstep(0.9, 0.93, e));
  gl_FragColor = vec4(c * uA, 1.0);
}`,x0=.004,y0=.22,kt=3,X_=2.05,kn=-30,q_=[Dt,Pi,Ts],_0=new $e,M0=new $e,E0=new It,Y_=new T(1,1,1),wu=new T,b0=new T,ml=new T,Ss=new T,gl=new T,$_=new T(1,0,0),K_=new T(0,0,1),nb=new T(0,1,0);function S0(i,e,t){return ml.copy(i).normalize(),wu.crossVectors(e,ml).normalize(),b0.crossVectors(ml,wu),_0.makeBasis(wu,b0,ml),t.setFromRotationMatrix(_0)}var Tu=()=>({p:new T,q:new It,a:0,k:0,f:0});function Au(i,e,t,n){return i.p.lerpVectors(e.p,t.p,n),i.q.slerpQuaternions(e.q,t.q,n),i.a=ot(e.a,t.a,n),i.k=ot(e.k,t.k,n),i.f=ot(e.f,t.f,n),i}var Z_=new It().setFromAxisAngle($_,-Math.PI/2),w0=(i,e,t)=>{let n=0;for(let s of i){if(s>e)break;n+=_e.out(Te((e-s)/t))}return n},Sr=kt+yl,J_=[[ws,.35,1.9,2.3,0,.1,-.55,38,.04],[142.82,.15,1.7,2,0,.12,-.6,36,0],[142.84,.3,3.1,.9,0,0,-.6,40,0],[Dt-.02,.2,2.8,.7,0,0,-.6,42,-.06],[Pi,0,kt-.4,5.5,0,kt,-10,60,0],[g0-.02,0,kt-.2,-2,.3,kt+.2,-20,64,.5],[g0,1.1,kt+.9,-9.5,-.3,kt-.3,3,50,-.2],[146.97,.8,kt+.6,-6.8,-.3,kt-.2,5,52,-.3],[146.99,0,kt,-4,0,kt,-25,70,0],[Ts-.02,0,kt,-15,0,kt,-30,82,.8],[Ts,0,kt+.3,kn+12.5,0,kt,kn,55,0],[An-.02,0,kt,kn+10.8,0,kt,kn,52,.03],[An,0,Sr,kn+8,0,Sr,kn,46,0],[An+.5,0,Sr,kn+3.2,0,Sr,kn,42,0],[wr-.05,0,Sr,kn+1.2,0,Sr,kn,40,0]],_l=class extends st{constructor(e){super(e,{fov:40,near:.02,far:300});let t=e.img,n=f=>({value:f});this.clear.setRGB(.01,.008,.012),this.camera.rotation.order="YXZ";let s=re.events("kick"),r=re.events("snare");this.kicks=s.filter(f=>f>ws-.05&&f<wr+.2),this.snares=r.filter(f=>f>ws-.05&&f<wr+.2);let o=[...s,...r].filter(f=>f>=ws+.05&&f<Dt-.12).sort((f,_)=>f-_);this.flips=[];for(let f of o)(!this.flips.length||f-this.flips[this.flips.length-1]>.06)&&this.flips.push(f);this.flipAt=new Float32Array(Jn).fill(1e9),this.flips.forEach((f,_)=>{2*_<Jn&&(this.flipAt[2*_]=f),2*_+1<Jn&&(this.flipAt[2*_+1]=f+.055)});let a=pt(91);this.rs=Array.from({length:Jn},(f,_)=>({r:1.4+a()*2.2,h:a(),ph:a()*6.28,sp:.8+a()*.9,d:a()*.25,sd:a(),tw:a()*6.28,dir:new T(a()-.5,a()-.5,-.4-a()).normalize(),ax:new T(a()-.5,a()-.5,a()-.5).normalize(),cell0:_*7%15,var:_*5%16,roll:(a()-.5)*.06}));let l=new ve(1,1,22,16);this.aB=new Float32Array(Jn*4),this.aC=new Float32Array(Jn*4),l.setAttribute("aB",new At(this.aB,4)),l.setAttribute("aC",new At(this.aC,4)),this.U={uT:n(0),uInv:n(0),uTable:n(0),uHeroCol:n(0),uInk:n(0),uFog:n(new xe(.012,.01,.016)),uLines:n(k_(t,e.memo)),uMarks:n(B_()),uHero:n(t.shinji_red?t.shinji_red.tex:null)};let c=new ae({vertexShader:H_,fragmentShader:z_,uniforms:this.U,side:Qe});this.sheets=new jt(l,c,Jn),this.sheets.frustumCulled=!1,this.sheets.instanceMatrix.setUsage(xf),this.scene.add(this.sheets),this.P=Array.from({length:Jn},Tu),this.PA=Tu(),this.PB=Tu(),this.BU={uT:n(0),uInv:n(0),uOff:n(new ee)},this.scene.add(ci(V_,this.BU)),this.TU={uA:n(1)},this.table=new G(new ve(2.5,3.1),new ae({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:W_,uniforms:this.TU})),this.table.rotation.x=-Math.PI/2,this.table.position.set(0,-.012,-.72),this.scene.add(this.table),this.glow=new Sn(new vn({map:e.shared.glow,color:16767136,blending:De,depthWrite:!1,transparent:!0,opacity:.35})),this.glow.scale.set(5,3.5,1),this.glow.position.set(0,.1,-.6),this.scene.add(this.glow),this.peg=new bn;let h=new _t({color:1381653}),u=new G(new Tt(1.7,.02,.07),h);u.position.set(0,.012,-ui+.075),this.peg.add(u),[[-.62,.032],[0,0],[.62,.032]].forEach(([f,_])=>{let y=new G(new Tt(_*2+.03,.34,.034),new _t({color:3814962}));y.position.set(f,.17,-ui+.075),this.peg.add(y)}),this.scene.add(this.peg);let d=new hr(.975,1,8,1);d.rotateZ(Math.PI/8),this.rings=Array.from({length:6},()=>{let f=new G(d,new _t({color:16734750,transparent:!0,opacity:0,blending:De,depthWrite:!1,side:Qe}));return this.scene.add(f),f});let p=900,g=new Float32Array(p*3),x=new Float32Array(p*4);for(let f=0;f<p;f++)g.set([(a()-.5)*12,(a()-.5)*12,(a()-.5)*12],f*3),x.set([a(),a(),a(),a()],f*4);let m=new Ve;m.setAttribute("position",new Ye(g,3)),m.setAttribute("aD",new Ye(x,4)),this.DU={uT:n(0),uC:n(new T),uK:n(0)},this.dust=new St(m,qf(G_,mr,this.DU)),this.dust.frustumCulled=!1,this.scene.add(this.dust)}stackPose(e,t,n){let s=Te((t-this.flipAt[e])/y0),r=_e.inOut(s);if(n.p.set(0,ot((Jn-1-e)*x0,e*x0,r),0),n.q.copy(Z_),n.f=0,s<=0){let o=e-this.nf,a=re.hitPulse("hat",t,10)+.5*re.hitPulse("kick",t,12);n.a=0,n.k=o<3?(.06+.3*a)*(1-o/3):0}else n.a=Math.PI*r,n.k=s<1?-2.2*Math.sin(Math.PI*s):0,n.f=.04*Math.sin(Math.PI*s);return n}vortexPose(e,t,n){let s=this.rs[e],r=Math.max(0,t-Dt),o=_e.out(Te(r/1.8)),a=.3+(.5+s.h*7.5)*(.35+.65*o)+r*.6,l=s.ph+r*s.sp*2.2/(.6+s.h)+this.kAcc*.35,c=s.r*(.6+.4*o)*(1+.25*s.h),h=t<bs?-1:1;n.p.set(Math.cos(l)*c,a,Math.sin(l)*c),Ss.set(h*Math.cos(l),-.35-.3*Math.sin(t*3+s.tw),h*Math.sin(l));let u=.5+.5*Math.sin(t*2.3+s.tw);return gl.set(-Math.sin(l)*u,1-u*.6,Math.cos(l)*u),S0(Ss,gl,n.q),n.a=0,n.k=.6*Math.sin(t*5+s.tw),n.f=.06,n}tunnelPose(e,t,n){let s=Math.floor(e/8),r=e%8,o=s%2?1:-1,a=r*Math.PI/4+s*.2+o*(this.sAcc*Math.PI/8+(t-Pi)*.25),l=X_*(1+.14*this.kP*((r+this.kN)%3===0?1:.25));return n.p.set(Math.cos(a)*l,kt+Math.sin(a)*l,2-s*2.4),Ss.set(-Math.cos(a),-Math.sin(a),0),gl.set(0,0,-1),S0(Ss,gl,n.q),n.a=0,n.k=0,n.f=.02,n}wallPose(e,t,n){let s=this.rs[e],r=e%po,o=Math.floor(e/po);return n.p.set((r-4)*N_,kt+(4-o)*F_,kn+(e===fo?.02:-.04*s.sd)+.12*this.kP*((r+o+this.kN)%2)),n.q.setFromAxisAngle(K_,e===fo?0:s.roll),n.a=0,n.k=0,n.f=e===fo?0:.01,n}scatterPose(e,t,n){this.wallPose(e,t,n);let s=this.rs[e],r=e%po,o=Math.floor(e/po),a=Math.max(0,t-An-Math.hypot(r-4,(o-4)*1.2)*.03),l=Math.min(1,a*3);return Ss.set(r-4,4-o,0).normalize().multiplyScalar(1.2).add(s.dir),n.p.addScaledVector(Ss,a*3+a*a*9),E0.setFromAxisAngle(s.ax,a*(3+s.sd*4)),n.q.premultiply(E0),n.k=.8*Math.sin(t*6+s.tw)*l,n.f=.1*l,n}sheetPose(e,t,n){let s=this.rs[e],r=this.PA,o=this.PB;if(t<Dt)return this.stackPose(e,t,n);if(t<Pi-.5){let a=_e.out(Te((t-Dt-s.d*.5)/.55));return a>=1?this.vortexPose(e,t,n):(this.stackPose(e,Dt-.001,r),this.vortexPose(e,t,o),Au(n,r,o,a),n.k+=1.2*Math.sin(Math.PI*a),n)}if(t<Ts-.12){let a=_e.inOut(Te((t-(Pi-.5)-s.d*.3)/.45));return a>=1?this.tunnelPose(e,t,n):(this.vortexPose(e,t,r),this.tunnelPose(e,t,o),Au(n,r,o,a),n.k+=.8*Math.sin(Math.PI*a),n.f+=.08*Math.sin(Math.PI*a),n)}if(t<An||e===fo){let a=_e.out(Te((t-(Ts-.12)-s.d*.5)/.4));return a>=1?this.wallPose(e,t,n):(this.tunnelPose(e,Ts-.12,r),this.wallPose(e,t,o),Au(n,r,o,a),n.k+=1*Math.sin(Math.PI*a),n.f+=.1*Math.sin(Math.PI*a),n)}return this.scatterPose(e,t,n)}sheetInk(e,t){let n=this.rs[e];if(t<Dt)return[n.cell0,1,0];if(e===fo&&t>=An)return t<An+.36?[this.lastCell(e,An),1,Te((t-An)/.3)]:[D_,Te((t-An-.4)/.55),0];let s=this.lastCell(e,t),r=this.lastDraw;return[s,r,t>An?Te((t-An-.1-n.d*.4)/.5):0]}lastCell(e,t){let n=this.kB,s=0;for(;s<n.length&&n[s]<=t;)s++;let r=s-1;return r>=0&&(e+r)%2&&r--,this.lastDraw=r>=0?Te((t-n[r])/.22):1,(this.rs[e].cell0+7*(r+1))%15}invAt(e){for(let t of q_)if(e>=t&&e<t+.09)return 1;return 0}camAt(e){let t=this.camera;if(e>=Dt&&e<bs){let n=(e-Dt)/(bs-Dt),s=_e.inOut(n);t.position.set(.15*Math.sin(e*2),ot(-1.6,2.6,s),.15*Math.cos(e*2)),t.up.set(0,1,0),t.rotation.set(ot(1.15,1.3,s),.3+n*2.2,0),t.fov!==72&&(t.fov=72,t.updateProjectionMatrix());return}if(e>=bs&&e<Pi){let n=(e-bs)/(Pi-bs),s=_e.inOut(n),r=.6+n*1.4,o=ot(11,8,s);t.position.set(Math.sin(r)*o,ot(2.5,5.5,s),Math.cos(r)*o),t.up.set(0,1,0),t.lookAt(0,ot(3.2,4.2,s),0);let a=ot(52,46,s);t.fov!==a&&(t.fov=a,t.updateProjectionMatrix());return}en(t,J_,e,.004*re.hitPulse("kick",e,12))}update(e,t){for(this.kB||(this.kB=this.kicks.filter(c=>c>=Dt-.01)),this.nf=0;this.nf<Jn&&this.flipAt[this.nf]+y0<=e;)this.nf++;this.kAcc=w0(this.kicks.filter(c=>c>=Dt),e,.25),this.sAcc=w0(this.snares.filter(c=>c>=Pi-.05),e,.18),this.kP=re.hitPulse("kick",e,9),this.kN=re.count("kick",ws,e);for(let c=0;c<Jn;c++){let h=this.sheetPose(c,e,this.P[c]);M0.compose(h.p,h.q,Y_),this.sheets.setMatrixAt(c,M0);let[u,d,p]=this.sheetInk(c,e);this.aB.set([h.a,h.k,h.f,this.rs[c].sd],c*4),this.aC.set([u,d,p,this.rs[c].var],c*4)}this.sheets.instanceMatrix.needsUpdate=!0,this.sheets.geometry.attributes.aB.needsUpdate=this.sheets.geometry.attributes.aC.needsUpdate=!0,this.camAt(e);let n=this.invAt(e),s=re.hitPulse("snare",e,10),r=1-$(Dt-.05,Dt+.3,e);this.U.uT.value=e,this.U.uInv.value=n,this.U.uTable.value=r,this.U.uInk.value=s*(e>Dt?1:.4),this.U.uHeroCol.value=$(An+.8,wr,e)*.5,this.TU.uA.value=r,this.table.visible=e<Dt,this.glow.material.opacity=.12*r*(.85+.3*re.hitPulse("kick",e,8)),this.glow.visible=e<Dt,this.peg.visible=e<Dt;let o=this.snares,a=o.length-1;for(;a>=0&&o[a]>e;)a--;this.rings.forEach((c,h)=>{let u=o[a-h],d=u===void 0?9:e-u;if(d>.8||u>=An){c.visible=!1;return}c.visible=!0;let[p,g]=u<Dt?[[0,.05,-.6],1.2]:u<bs?[[0,9,0],5]:u<Pi?[[0,4,0],6]:u<Ts?[[0,kt,this.camera.position.z-7],2.6]:[[0,kt,kn+.3],5];c.position.set(...p),c.lookAt(this.camera.position),c.scale.setScalar(g*(.5+d*2.2)),c.material.opacity=.4*Math.exp(-d*5)*(u<Dt?.5:1)}),this.BU.uT.value=e,this.BU.uInv.value=n;let l=this.camera.getWorldDirection(Ss);this.BU.uOff.value.set(Math.atan2(l.x,-l.z)*.3,l.y*.3),this.DU.uT.value=e,this.DU.uC.value.copy(this.camera.position),this.DU.uK.value=this.kP}post(e){let t=re.hitPulse("kick",e,11),n=re.hitPulse("snare",e,12),s=1-$(wr-.6,wr,e);return{bloom:.55+.25*n,bloomThr:.78,contrast:1.12,grain:.14,vig:.7,ca:.6+1.2*n,flicker:.08*s,scratch:.18*s,weave:.15*s,punch:.22*t,shake:.002*t*s,tint:[1.04,.98,.9],dust:.25,dustCol:[.9,.8,.7],exposure:1+.12*t+.25*(e<Dt)*(1-$(ws,ws+.15,e))}}};var Iu=`
uniform float uT, uSpin, uGrow, uOpen, uCrown, uRad, uGone;
vec3 helixP(float y, float s){
  float o = uOpen * smoothstep(uCrown - 16.0, uCrown, y);
  float R = uRad * (1.0 + 0.06 * sin(y * 0.7 - uT * 1.3)) * (1.0 + o * o * 5.0);
  float a = y * 0.785 + uSpin + s * 3.14159 + o * 2.0;
  return vec3(cos(a) * R, y + o * o * 5.0, sin(a) * R);
}`,T0="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",A0=`
uniform float uT, uAlt, uRain, uGlow, uBright; varying vec3 vW;
${Ne}
${pr}
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
}`,Uu=`
${Iu}
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
}`,Lu=`
uniform float uT, uGrow, uRain, uBeat; uniform float uPulse[8], uPulseY[8];
varying float vY, vS, vF; varying vec3 vN, vV;
${pr}
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
}`,R0=`
${Iu}
attribute vec2 aR; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float y = aR.x; vec3 a = helixP(y, 0.0), b = helixP(y, 1.0);
  vec3 p = mix(a, b, uv.x), side = normalize(cross(b - a, cameraPosition - p)) * 0.035;
  vUv = uv; vSeed = aR.y;
  vA = smoothstep(uGrow - 0.5, uGrow - 2.5, y) * smoothstep(uGone - 2.0, uGone + 2.0, y) * (1.0 - smoothstep(0.0, 0.6, uOpen * smoothstep(uCrown - 16.0, uCrown, y)));
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * (uv.y * 2.0 - 1.0), 1.0);
}`,C0=`
uniform float uT, uBeat; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float g = exp(-pow(vUv.y * 2.0 - 1.0, 2.0) * 4.0);
  vec3 c = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vUv.x) * (0.25 + 0.3 * uBeat);
  float sp = fract(uT * 0.6 + vSeed); c += vec3(1.0, 0.9, 0.8) * exp(-abs(vUv.x - sp) * 30.0) * 1.2;
  gl_FragColor = vec4(c * g * vA, 1.0);
}`,P0=`
${Iu}
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
}`,I0=`
uniform sampler2D uAtlas; uniform float uT, uBeat, uRain; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
${Ne}
${pr}
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
}`,U0=`
uniform sampler2D uTex; uniform float uA, uT, uDis; varying vec2 vUv;
${Ne}
void main(){
  vec2 pu = (vUv - vec2(0.05, 0.12)) / vec2(0.9, 0.83);
  vec3 col = vec3(0.9, 0.86, 0.8);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col = texture2D(uTex, pu).rgb * 1.05;
  float n = fbm(vUv * 5.0 + 3.0), th = 1.2 - uDis * 1.4;
  if (n < th - 0.0 && uDis < 1.0) discard;
  col += vec3(3.0, 1.6, 0.5) * smoothstep(th + 0.06, th, n) * step(uDis, 0.999);
  col += vec3(1.0, 0.7, 0.4) * 0.15 * (1.0 - smoothstep(0.0, 0.04, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y))));
  gl_FragColor = vec4(col * uA, uA);
}`,Ml="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",L0=`
uniform float uAge, uR; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float r = length(vUv - 0.5) * 2.0, R = uR;
  float g = exp(-pow((r - R) * 40.0, 2.0)) + 0.35 * exp(-abs(r - R) * 12.0) * step(r, R);
  gl_FragColor = vec4(uCol * g * (1.0 - uAge) * (1.0 - uAge), 1.0);
}`,D0=`
uniform float uT, uA; varying vec2 vUv;
${pr}
void main(){
  vec2 q = vUv - 0.5; float r = length(q) * 2.0, a = atan(q.y, q.x) / 6.2832 + 0.5;
  float seg = step(0.12, fract(a * 24.0 + uT * 0.3));
  float band = exp(-pow((r - 0.86) * 30.0, 2.0)) * seg + exp(-pow((r - 0.72) * 90.0, 2.0)) * 0.6 + exp(-pow((r - 0.95) * 120.0, 2.0)) * 0.5;
  band += exp(-abs(r - 0.86) * 8.0) * 0.12;
  gl_FragColor = vec4(pencil(fract(a + uT * 0.05)) * 1.6 * band * uA, 1.0);
}`,N0=`
uniform float uT, uCamY, uPx, uA, uRain, uRise; attribute vec4 aM; varying vec3 vCol; varying float vA;
${pr}
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
}`;var Ar=181.25,Ii=207.5,jn=72,F0=17,Du=1.6,j_=8,As=182.9,Rr=184.75,Yt=198.3,Tr=204.6,Q_=["m_misato","m_asuka","m_mari","rei_white","kaworu","m_toji","m_kensuke","m_sakura","m_ritsuko","gendo_yui","snap1","rei_paddy"],e2=[["vec3 zen = mix(vec3(0.05, 0.012, 0.03), vec3(0.006, 0.008, 0.028), uAlt);","vec3 zen = mix(vec3(0.02, 0.035, 0.09), vec3(0.004, 0.006, 0.03), uAlt);"],["vec3 hor = mix(vec3(0.26, 0.018, 0.022), vec3(0.1, 0.012, 0.035), uAlt);","vec3 hor = mix(vec3(0.32, 0.15, 0.1), vec3(0.06, 0.05, 0.11), uAlt);"],["col += vec3(0.3, 0.02, 0.02) * fbm3","col += vec3(0.25, 0.12, 0.07) * fbm3"],["col = vec3(0.07, 0.004, 0.006) + sky(rd) * vec3(1.0, 0.4, 0.35) * fr;","col = vec3(0.004, 0.022, 0.045) + sky(rd) * vec3(0.65, 0.85, 1.0) * fr;"]].reduce((i,[e,t])=>(i.includes(e)||console.warn("helix2 sky patch miss",e),i.replace(e,t)),A0),Nu=[[Ar-.2,1.4,13,-.3,7],[182.3,7,10.5,.4,6],[As,16.5,7.6,1.3,2.8],[Rr,18.5,6.8,2.1,2.4],[186.2,26,6.6,3,2.5],[188,33,6,3.9,2.5],[189.7,39,5.4,4.6,3],[191.4,44,.4,5.3,14],[192.56,46,.3,5.6,14],[197.6,58,.25,7.6,14],[200.6,70,3.5,8.4,11],[203.4,82,9,9.1,-14],[Ii,90,19,9.8,-24]];function Fu(i,e){let t=0;for(;t<e.length-2&&i>e[t+1][0];)t++;let n=e[Math.max(0,t-1)],s=e[t],r=e[t+1],o=e[Math.min(e.length-1,t+2)],a=Te((i-s[0])/(r[0]-s[0])),l=a*a,c=l*a;return s.slice(1).map((h,u)=>{let d=n[u+1],p=s[u+1],g=r[u+1],x=o[u+1];return .5*(2*p+(-d+g)*a+(2*d-5*p+4*g-x)*l+(-d+3*p-3*g+x)*c)})}var El=class extends st{constructor(e){super(e,{fov:55,near:.05,far:1500});let t=S=>({value:S});this.faces=new qi(e.shared.atlas(e.img,Q_,256,256)),this.faces.colorSpace=an,this.faces.anisotropy=4,this.H={uT:t(0),uSpin:t(0),uGrow:t(0),uOpen:t(0),uCrown:t(jn),uRad:t(Du),uGone:t(-20),uBeat:t(0),uRain:t(0)};let n={transparent:!0,depthWrite:!1,blending:De};this.SK={uT:this.H.uT,uAlt:t(0),uRain:this.H.uRain,uGlow:t(1),uBright:t(1)},this.sky=new G(new $n(600,48,24),new ae({vertexShader:T0,fragmentShader:e2,uniforms:this.SK,side:yt,depthWrite:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1;let s=1100,r=10,o=jn+4,a=[],l=[],c=[];for(let S=0;S<2;S++)for(let R=0;R<=s;R++)for(let w=0;w<r;w++)l.push(R/s*o,w/r*6.2832,S),a.push(0,0,0);for(let S=0;S<2;S++)for(let R=0;R<s;R++)for(let w=0;w<r;w++){let P=S*(s+1)*r,D=P+R*r+w,v=P+R*r+(w+1)%r,b=D+r,U=v+r;c.push(D,b,v,v,b,U)}let h=new Ve;h.setAttribute("position",new Xe(a,3)),h.setAttribute("aP",new Xe(l,3)),h.setIndex(c),this.pulses=new Array(8).fill(-99),this.pulseY=new Array(8).fill(0),this.SU={...this.H,uPulse:t(this.pulses),uPulseY:t(this.pulseY)},this.strands=new G(h,new ae({vertexShader:Uu,fragmentShader:Lu,uniforms:this.SU,...n,side:Qe})),this.strands.frustumCulled=!1,this.strands.renderOrder=2,this.SU2={...this.SU,uRad:t(Du*2.7),uSpin:t(0),uGrow:t(0),uRain:t(1)},this.strands2=new G(h,new ae({vertexShader:Uu,fragmentShader:Lu,uniforms:this.SU2,...n,side:Qe})),this.strands2.frustumCulled=!1,this.strands2.renderOrder=2;let u=pt(166),d=Math.floor((jn-1)/.9),p=new Zn().copy(new ve(1,1).translate(.5,.5,0)),g=new Float32Array(d*2);for(let S=0;S<d;S++)g[S*2]=1+S*.9,g[S*2+1]=u();p.setAttribute("aR",new At(g,2)),p.instanceCount=d,this.rungs=new G(p,new ae({vertexShader:R0,fragmentShader:C0,uniforms:this.H,...n,side:Qe})),this.rungs.frustumCulled=!1,this.rungs.renderOrder=1;let x=[];for(let S=0;S<d;S++)(S%2===0||S*.9>jn-22)&&x.push([1+S*.9,(S>>1)%2?1:-1,Math.floor(u()*12),u()]),S*.9>jn-22&&S%2&&x.push([1+S*.9,(S>>1)%2?-1:1,Math.floor(u()*12),u()]);let m=new Zn().copy(new ve(.9,1.06));m.setAttribute("aC",new At(new Float32Array(x.flat()),4)),m.instanceCount=x.length,this.CU={...this.H,uAtlas:t(this.faces),uPart:t(0),uBurst:t(0),uHeroY:t(F0),uHeroOn:t(0)},this.cards=new G(m,new ae({vertexShader:P0,fragmentShader:I0,uniforms:this.CU,side:Qe})),this.cards.frustumCulled=!1,this.cards.renderOrder=0,this.HU={uTex:t(e.img.ube_pilots?e.img.ube_pilots.tex:null),uA:t(0),uT:this.H.uT,uDis:t(0)},this.hero=new G(new ve(3.8,2.4),new ae({vertexShader:Ml,fragmentShader:U0,uniforms:this.HU,transparent:!0,side:Qe})),this.hero.renderOrder=3;let f=S=>{let R=new Sn(new vn({map:e.shared.glow,color:S,...n}));return R.renderOrder=4,R};this.tips=[f(new xe(1,.7,.3)),f(new xe(1,.2,.2))],this.rings=Array.from({length:j_},()=>{let S=new G(new ve(1,1),new ae({vertexShader:Ml,fragmentShader:L0,uniforms:{uAge:t(1),uR:t(0),uCol:t(new xe(1,.6,.4))},...n,side:Qe}));return S.rotation.x=-Math.PI/2,S.renderOrder=3,S.visible=!1,S}),this.ringTimes=[...Of,...uu].filter(S=>S>Ar-.1&&S<Ii).sort((S,R)=>S-R),this.AU={uT:this.H.uT,uA:t(0)},this.halo=new G(new ve(22,22),new ae({vertexShader:Ml,fragmentShader:D0,uniforms:this.AU,...n,side:Qe})),this.halo.rotation.x=-Math.PI/2,this.halo.position.y=jn+30,this.halo.renderOrder=3;let _=3200,y=new Float32Array(_*4);for(let S=0;S<y.length;S++)y[S]=u();let M=new Ve;M.setAttribute("position",new Ye(new Float32Array(_*3),3)),M.setAttribute("aM",new Ye(y,4)),this.MU={uT:this.H.uT,uCamY:t(0),uPx:t(1),uA:t(1),uRain:this.H.uRain,uRise:t(0)},this.motes=new St(M,new ae({vertexShader:N0,fragmentShader:mr,uniforms:this.MU,...n})),this.motes.frustumCulled=!1,this.motes.renderOrder=5,this.scene.add(this.sky,this.cards,this.rungs,this.strands,this.strands2,this.hero,...this.tips,...this.rings,this.halo,this.motes)}helixP(e,t){let n=this.H,s=n.uOpen.value*$(jn-16,jn,e),r=n.uT.value,o=Du*(1+.06*Math.sin(e*.7-r*1.3))*(1+s*s*5),a=e*.785+n.uSpin.value+t*Math.PI+s*2;return new T(Math.cos(a)*o,e+s*s*5,Math.sin(a)*o)}update(e){let t=this.H,n=re.beatPulse(e,6),s=Te(re.get("kick",e));t.uT.value=e,t.uBeat.value=n*.6+s*.4,t.uSpin.value=(e-Ar)*.42+.35*_e.inOut(et(e,Yt-.4,Yt+2.5)),t.uGrow.value=Math.max(1,Math.min(jn+4.5,Fu(e+1,Nu)[0]+10)*_e.out(et(e,Ar-.2,Ar+3.5))),t.uOpen.value=_e.inOut(et(e,Yt-1.2,Yt+3.5)),t.uGone.value=e<Tr?-20:ot(-8,jn+20,_e.in(et(e,Tr,Ii-.4))),t.uRain.value=$(Yt-.6,Yt+1.4,e)*(1-.5*$(213,Ii,e)),this.CU.uPart.value=$(189.8,192.2,e)*(1-$(196.4,198,e)),this.SU2.uSpin.value=-(e-Yt)*.9+1.2,this.SU2.uGrow.value=(jn+4)*_e.out(et(e,Yt-.3,Yt+1.6)),this.strands2.visible=e>Yt-.3,this.CU.uBurst.value=_e.out(et(e,Yt,Yt+7));let r=$(As-.8,As+.2,e)*(1-$(Rr-.5,Rr+.6,e));this.CU.uHeroOn.value=r,this.HU.uA.value=r>.001?1:0,this.hero.visible=r>.001,this.HU.uDis.value=e<Rr-.5?_e.out(et(e,As-.9,As+.5)):1-_e.in(et(e,Rr-.5,Rr+.5));let[o,a,l,c]=Fu(e,Nu),h=this.camera,u=.08*Math.sin(e*.7);h.position.set(Math.cos(l)*a,o+u,Math.sin(l)*a);let d=new T(Math.cos(l+.5)*a*.02,o+c,Math.sin(l+.5)*a*.02),p=d.clone().sub(h.position).normalize(),g=$(.8,.98,Math.abs(p.y));h.up.set(0,1,0).lerp(new T(Math.cos(l+1.2),0,Math.sin(l+1.2)),g).normalize(),h.lookAt(d);let x=$(190.5,192.3,e)*(1-$(197,199,e));h.fov=55+14*x+4*n*x,h.updateProjectionMatrix(),this.sky.position.copy(h.position),this.SK.uAlt.value=$(0,90,o),this.SK.uGlow.value=1-$(Tr,Ii,e)*.6,this.hero.position.set(0,F0+.4*Math.sin(e*.8)-.6*(1-_e.out(et(e,As-.9,As+.8))),0),this.hero.lookAt(h.position.x,this.hero.position.y,h.position.z);let m=this.ringTimes.filter(f=>f<=e).slice(-8);for(let f=0;f<8;f++)this.pulses[f]=m[f]??-99,this.pulseY[f]=m[f]?this.ringY(m[f])-12:0;this.rings.forEach((f,_)=>{let y=m.length-1-_,M=m[y];if(M===void 0||e-M>2.2){f.visible=!1;return}let S=(e-M)/2.2,R=uu.includes(M);f.visible=!0,f.position.set(0,this.ringY(M),0),f.scale.setScalar(R?60:34);let w=f.material.uniforms;w.uAge.value=S,w.uR.value=_e.out(S),w.uCol.value.setRGB(1,R?.85:.5+.2*(y%2),R?.7:.35)}),this.tips.forEach((f,_)=>{let y=this.helixP(t.uGrow.value,_);f.position.copy(y);let M=e<Yt+1?1:0;f.scale.setScalar((1.4+.8*n)*M),f.visible=M>0}),this.halo.rotation.z=e*.12,this.AU.uA.value=$(Yt,Yt+2,e)*(1-$(214,Ii,e))*(1+.4*n),this.MU.uCamY.value=o,this.MU.uPx.value=this.ctx.h/720,this.MU.uRise.value=(e-Ar)*1.3+12*_e.in(et(e,Tr,Ii)),this.MU.uA.value=.8+.8*$(Tr,Ii,e)}ringY(e){return Fu(e,Nu)[0]-1.5}post(e){let t=re.beatPulse(e,6),n=$(190.5,192.3,e)*(1-$(197,199,e)),s=e>=Yt?Math.exp(-(e-Yt)*2.5):0,r=$(Tr,Ii,e);return{bloomThr:.76,sat:1.12,contrast:1.05,vig:.5,grain:.05,ca:.4+.6*s,exposure:(1+.08*t)*(1-.22*n),bloom:.7-.25*n+.2*t+.3*$(Yt-1,Yt+1,e),fadeW:.55*s+.25*r*r,dust:.1}}};var t2="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",n2=`uniform sampler2D tMap; uniform float uReveal, uAlpha, uSoft, uMode, uHot; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float a = texture2D(tMap, vUv).a;
  float r = smoothstep(uReveal + 0.002, uReveal - uSoft, vUv.x);
  float hot = smoothstep(uSoft * 3.0, 0.0, uReveal - vUv.x) * step(vUv.x, uReveal) * step(uReveal, 0.999);
  if (uMode < 0.5) gl_FragColor = vec4(uCol * (1.0 + hot * uHot) * a * r * uAlpha, 1.0);
  else gl_FragColor = vec4(uCol * (1.0 - hot * 0.25), a * r * uAlpha);
}`,Ou=null,mo=class{constructor(e,t={}){let{c:n,w:s,h:r}=Kf(e,{font:t.font||Ct.script,size:t.size||220,color:"#fff",pad:60});this.aspect=s/r,this.H=t.height||.6,this.W=this.H*this.aspect,this.cy=i2(n,160),this.u={tMap:{value:qt(n)},uReveal:{value:0},uAlpha:{value:1},uSoft:{value:t.soft??.025},uMode:{value:t.paper?1:0},uHot:{value:t.hot??3},uCol:{value:new T(...t.color||[1,.7,.35])}};let o=new ae({vertexShader:t2,fragmentShader:n2,uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,blending:t.paper?Dn:De});this.group=new bn,this.mesh=new G(new ve(this.W,this.H),o),this.group.add(this.mesh),Ou=Ou||Qa(128),this.tipMat=new _t({map:Ou,color:new xe(...t.tipColor||[3,2.2,1.2]),transparent:!0,blending:De,depthWrite:!1,depthTest:!1}),this.tip=new G(new ve(1,1),this.tipMat),this.tip.scale.setScalar(this.H*.5),this.group.add(this.tip)}set(e,t=1,n=1){this.u.uReveal.value=e,this.u.uAlpha.value=t;let s=this.cy.length,r=Math.min(s-1,Math.max(0,e*(s-1))),o=Math.floor(r),a=r-o,l=this.cy[o]*(1-a)+this.cy[Math.min(s-1,o+1)]*a;this.tip.position.set((e-.5)*this.W,(.5-l)*this.H,.01);let c=e>.002&&e<.998?1:0;this.tipMat.opacity=c*t*n*(.75+.25*Math.sin(e*90)),this.tip.visible=this.tipMat.opacity>.01}};function i2(i,e){let t=i.getContext("2d"),{width:n,height:s}=i,r=t.getImageData(0,0,n,s).data,o=new Float32Array(e),a=.5;for(let l=0;l<e;l++){let c=Math.floor(l/e*n),h=Math.max(c+1,Math.floor((l+1)/e*n)),u=0,d=0;for(let p=c;p<h;p++)for(let g=0;g<s;g+=2){let x=r[(g*n+p)*4+3];u+=x*g,d+=x}a=d>0?u/d/s:a,o[l]=a}for(let l=1;l<e-1;l++)o[l]=(o[l-1]+o[l]*2+o[l+1])/4;return o}var B0=226.2,bl=252.03,O0=[.62,.86],Rs=237.72,go=241.96,Cr=232.9,ku=245.2,Pr=245,s2=`uniform float uDraw, uColor, uWindA, uMarks, uBoil, uStreak; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }
float box(vec2 p, vec2 a, vec2 b, float w){ vec2 q = min(p - a, b - p); float i = min(q.x, q.y);
  return (i > -w && i < w) ? 1.0 : 0.0; }`,r2=`
  // clouds drift and breathe, grass and hedges sway in gusts, the sea breathes; streak = speed blur of the close-up
  float sky = smoothstep(0.62, 0.72, uv.y);
  uv.x -= 0.012 * sin((uT - 226.0) * 0.09) * sky + 0.003 * sin(uT * 0.3 + uv.y * 5.0) * sky;
  float g = 0.5 + 0.5 * sin(uv.x * 8.0 - uT * 2.2);
  uv.x += (sin(uv.x * 60.0 + uT * 3.3) * 0.35 + g) * 0.004 * smoothstep(0.45, 0.2, uv.y) * uWindA * (0.5 + d);
  float sea = smoothstep(0.66, 0.6, uv.y) * smoothstep(0.38, 0.45, uv.y) * smoothstep(0.1, 0.35, uv.x) * smoothstep(0.92, 0.8, uv.x);
  uv.y += 0.0015 * sin(uv.x * 90.0 + uT * 2.0) * sea;
  return uv;
`,o2=`
  vec2 q = vec2(uv.x * uImgAspect, uv.y);
  vec3 paper = vec3(0.975, 0.962, 0.935) * (0.965 + 0.05 * vnoise(suv * vec2(1600.0, 900.0)) + 0.02 * vnoise(suv * 60.0));
  // graphite (sobel), jittered per drawing so the lines boil like hand-drawn frames
  vec2 bj = (hash22(vec2(uBoil, 3.1)) - 0.5) * uTexel * 1.3;
  vec2 u2 = uv + bj;
  float gx = lumA(u2 + vec2(uTexel.x, 0.0)) - lumA(u2 - vec2(uTexel.x, 0.0)), gy = lumA(u2 + vec2(0.0, uTexel.y)) - lumA(u2 - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 6.0, 0.0, 1.0);
  float hatch = abs(fract((q.x + q.y) * 150.0 + uBoil * 0.37) - 0.5);
  float shade = (1.0 - lumA(uv)) * smoothstep(0.2, 0.0, hatch) * 0.55;
  vec3 graphite = paper * (1.0 - 0.78 * clamp(edge + shade, 0.0, 1.0)) * vec3(0.98, 0.98, 1.0);
  // reveal fronts follow the wind (left -> right), ragged like strokes
  float n = uv.x * 0.8 + fbm(q * 3.0) * 0.25 + (1.0 - uv.y) * 0.05;
  float drawn = smoothstep(n - 0.04, n, uDraw * 1.15 - 0.05);
  float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
  float nc = (1.0 - uv.y) * 0.45 + uv.x * 0.35 + fbm(q * 4.0 + 7.0) * 0.3 + (h1 + h2) * 0.18;
  float cfr = uColor * 1.35 - 0.12, colored = smoothstep(nc - 0.03, nc + 0.03, cfr);
  vec3 c = mix(paper, graphite, drawn);
  // sea glitter + sun only once coloured
  float sea = smoothstep(0.64, 0.6, uv.y) * smoothstep(0.42, 0.5, uv.y) * smoothstep(0.15, 0.3, uv.x) * smoothstep(0.85, 0.7, uv.x);
  float gl = pow(vnoise(vec2(q.x * 260.0, q.y * 900.0) + vec2(uT * 1.5, 0.0)), 20.0) * 2.0 * sea;
  vec3 cc = col + vec3(1.0, 0.95, 0.8) * gl;
  vec2 sq = (uv - vec2(${O0[0]}, ${O0[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
  float rays = pow(0.5 + 0.5 * sin(sa * 14.0 + uT * 0.3), 6.0) * exp(-sr * 3.5) * smoothstep(0.05, 0.12, sr);
  cc += vec3(1.0, 0.93, 0.7) * (exp(-sr * 8.0) * (0.2 + 0.05 * sin(uT * 2.0)) + rays * 0.1);
  c = mix(c, cc, colored);
  // the live pencil at the colour front: a darker band of fresh strokes
  c *= 1.0 - 0.14 * exp(-pow((cfr - nc) * 14.0, 2.0)) * step(0.01, uColor) * step(uColor, 0.99);
  // gulls: little pencil Vs flapping across the sky
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 gp = vec2(fract(0.15 + fi * 0.21 + (uT - 226.0) * (0.006 + 0.002 * fi)), 0.76 + 0.07 * sin(fi * 2.7) + 0.01 * sin(uT * 0.7 + fi));
    vec2 d2 = (uv - gp) * vec2(uImgAspect, 1.0) / (0.011 + 0.004 * fract(fi * 0.61));
    float fl = 0.55 * sin(uT * (7.0 + fi) + fi * 1.3);
    float wing = abs(abs(d2.x) * (0.45 + fl * 0.5) - (d2.y + 0.1 * d2.x * d2.x));
    c *= 1.0 - 0.55 * smoothstep(0.16, 0.05, wing) * step(abs(d2.x), 1.0) * drawn;
  }
  // wind lines (stronger in the tracking shot)
  for (int i = 0; i < 5; i++) {
    float fi = float(i), y0 = 0.22 + fi * 0.14 + 0.035 * sin(uv.x * 6.0 + fi * 2.1 + uT * 0.6);
    float along = fract(uv.x * 0.7 - uT * (0.16 + 0.03 * fi + 0.5 * uStreak) + fi * 0.37);
    float seg = smoothstep(0.0, 0.08, along) * smoothstep(0.34, 0.2, along);
    float curl = y0 + 0.02 * sin(along * 30.0) * smoothstep(0.22, 0.34, along);
    c *= 1.0 - (0.28 + 0.2 * uStreak) * smoothstep(0.0022, 0.0, abs(uv.y - curl)) * seg * uWindA * drawn;
  }
  // animator marks on the sheet (screen space): blue frame guide, crop ticks, timing ladder, red cut number box
  vec2 s = suv * vec2(uAspect, 1.0);
  float m = box(s, vec2(0.07, 0.07), vec2(uAspect - 0.07, 0.93), 0.0016) * step(0.5, fract(s.x * 60.0 + s.y * 60.0) + 0.3);
  m += box(s, vec2(0.12, 0.12), vec2(uAspect - 0.12, 0.88), 0.0012) * 0.6;
  float lad = step(uAspect - 0.055, s.x) * step(s.x, uAspect - 0.03) * step(0.2, s.y) * step(s.y, 0.8);
  m += lad * smoothstep(0.004, 0.0, abs(fract(s.y * 24.0) - 0.5) * 0.04) * 0.8 + step(abs(s.x - (uAspect - 0.03)), 0.001) * step(0.2, s.y) * step(s.y, 0.8);
  float red = box(s, vec2(uAspect - 0.36, 0.1), vec2(uAspect - 0.2, 0.16), 0.0018);
  c = mix(c, vec3(0.2, 0.38, 0.75), clamp(m, 0.0, 1.0) * 0.55 * uMarks);
  c = mix(c, vec3(0.75, 0.12, 0.1), red * 0.6 * uMarks);
  return c;
`,a2="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",l2=`
uniform sampler2D uTex; uniform float uT, uLine, uColor, uAlpha, uBoil; uniform vec2 uTexel; varying vec2 vUv;
${Ne}
float lum(vec2 p){ vec4 c = texture2D(uTex, p); return mix(1.0, dot(c.rgb, vec3(0.3, 0.55, 0.15)), c.a); }
void main(){
  vec2 uv = vUv;
  // her hair streams and the skirt flutters (left part of the cut-out), his shirt ripples a little
  float hair = smoothstep(0.55, 0.8, uv.y) * smoothstep(0.34, 0.0, uv.x), skirt = smoothstep(0.58, 0.4, uv.y) * smoothstep(0.12, 0.3, uv.y) * smoothstep(0.45, 0.25, uv.x);
  float shirt = smoothstep(0.45, 0.6, uv.x) * smoothstep(0.35, 0.5, uv.y) * smoothstep(0.85, 0.7, uv.y);
  uv.x += sin(uT * 8.0 + uv.y * 14.0 + uv.x * 9.0) * (0.01 * hair * (1.0 - uv.x * 2.0) + 0.005 * skirt + 0.002 * shirt);
  uv.y += sin(uT * 7.0 + uv.x * 16.0) * (0.006 * hair + 0.005 * skirt);
  vec4 tx = texture2D(uTex, uv);
  vec2 bj = (hash22(vec2(uBoil, 1.7)) - 0.5) * uTexel;
  vec2 u2 = uv + bj;
  float gx = lum(u2 + vec2(uTexel.x, 0.0)) - lum(u2 - vec2(uTexel.x, 0.0)), gy = lum(u2 + vec2(0.0, uTexel.y)) - lum(u2 - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 5.0, 0.0, 1.0);
  vec2 q = vUv * vec2(1.8, 1.0);
  float h = abs(fract((q.x + q.y) * 50.0) - 0.5) * 0.3 + fbm(q * 5.0) * 0.6 + vUv.x * 0.2;
  float line = smoothstep(h - 0.05, h + 0.05, uLine * 1.3 - 0.1), colr = smoothstep(h - 0.05, h + 0.05, uColor * 1.3 - 0.1);
  vec3 paper = vec3(0.975, 0.962, 0.935);
  vec3 c = mix(paper * (1.0 - 0.8 * edge), tx.rgb, colr);
  float a = mix(edge * line, tx.a * line, max(colr, 0.35 * line * tx.a)) * uAlpha;
  a = max(a, edge * line * uAlpha);
  if (a < 0.01) discard;
  gl_FragColor = vec4(c, a);
}`,c2=`attribute vec4 aR; uniform float uT, uAsp, uPx, uA, uSp; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12 * uSp);
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.5 ? vec3(0.55, 0.72, 0.35) : k < 0.75 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (10.0 + 16.0 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,h2=`varying vec3 vCol; varying float vA, vRot;
void main(){
  vec2 d = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot); d = mat2(c, s, -s, c) * d;
  d.x *= 0.45 + 0.4 * abs(sin(vRot * 0.7));
  float e = length(d * vec2(1.0, 2.2)); float a = smoothstep(0.24, 0.2, e) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * (0.9 + 0.1 * d.y), a * 0.9);
}`,u2=[[B0,0,.165,1.55,0],[229.4,.01,.15,1.5,0],[233.2,0,.02,1.2,.02],[237.7,.02,-.06,1.22,.04],[Rs,-.12,-.13,2.1,0],[go-.02,.1,-.12,2.1,0],[go,0,-.05,1.22,.04],[243.8,.02,-.03,1.2,.05],[246.6,0,.135,1.4,.02],[bl,-.01,.15,1.46,0]],k0=150,Sl=class extends st{constructor(e){super(e,{ortho:!0});let t=e.img,n=u=>({value:u}),s=t.p_town;this.M=Za(s,t.p_town_d,{head:s2,warp:r2,hook:o2,uniforms:{uDraw:n(0),uColor:n(0),uWindA:n(1),uMarks:n(1),uBoil:n(0),uStreak:n(0),uTexel:n(new ee(1.1/s.w,1.1/s.h))}}),this.scene.add(Ja(this.M));let r=t.p_run,o=r.w/r.h;this.RU={uTex:n(r.tex),uT:n(0),uLine:n(0),uColor:n(0),uAlpha:n(1),uBoil:n(0),uTexel:n(new ee(1.2/r.w,1.2/r.h))};let a=new ve(o,1);a.translate(0,.5,0),this.run=new G(a,new ae({vertexShader:a2,fragmentShader:l2,uniforms:this.RU,transparent:!0,depthTest:!1,depthWrite:!1})),this.run.renderOrder=2,this.run.frustumCulled=!1,this.shadow=new G(new ve(1,1),new _t({map:e.shared.glow,color:new xe(.25,.22,.2),transparent:!0,depthTest:!1,depthWrite:!1})),this.shadow.renderOrder=1;let l=pt(2262),c=new Float32Array(k0*4);for(let u=0;u<c.length;u++)c[u]=l();let h=new Ve;h.setAttribute("position",new Ye(new Float32Array(k0*3),3)),h.setAttribute("aR",new Ye(c,4)),this.PU={uT:n(0),uA:n(0),uPx:n(1),uAsp:n(16/9),uSp:n(1)},this.petals=new St(h,new ae({vertexShader:c2,fragmentShader:h2,uniforms:this.PU,transparent:!0,depthTest:!1,depthWrite:!1})),this.petals.renderOrder=3,this.petals.frustumCulled=!1,this.title=new mo("One Last Kiss",{font:Ct.script,size:220,height:.6,color:[.2,.008,.015],paper:!0,soft:.03}),this.credit=new mo("\u5B87\u591A\u7530\u30D2\u30AB\u30EB  \xB7  Hikaru Utada",{font:Ct.mincho,size:140,height:.12,color:[.03,.03,.035],paper:!0,soft:.05}),this.title.tip.visible=!1,this.credit.tip.visible=!1,this.title.group.renderOrder=4,this.title.mesh.renderOrder=4,this.credit.mesh.renderOrder=4,this.scene.add(this.shadow,this.run,this.petals,this.title.group,this.credit.group)}update(e){let t=this.M.uniforms,n=this.ctx.aspect;t.uT.value=e,t.uAspect.value=n,this.PU.uAsp.value=n,this.PU.uT.value=e,this.PU.uPx.value=this.ctx.h/720;let s=Math.floor(e*8);t.uBoil.value=s%97,this.RU.uBoil.value=s%89,t.uDraw.value=_e.inOut(et(e,B0+.1,230.6)),t.uColor.value=_e.inOut(et(e,229.4,236.4))*(1-.8*_e.inOut(et(e,248.2,251.6))),t.uMarks.value=1-.85*$(231.5,235.5,e)+.5*$(248.4,251,e);let r=e>=Rs&&e<go?1:0;t.uStreak.value=r,this.PU.uSp.value=1+2.5*r,t.uWindA.value=.6+.4*Math.sin(e*.7)**2+.6*r-.3*et(e,244,bl);let[o,a,l,c]=za(e,u2),h=.003*Math.sin(e*.31),u=r?(e-Rs)*.055:0;t.uCam.value.set(o+u,a+h,l),t.uPar.value.set(c+r*.06*Math.sin((e-Rs)*.8),.01);let d=e/Nn*Math.PI,p=Math.abs(Math.sin(d)),g,x,m;if(r)g=ot(-.16,.14,et(e,Rs,go))*n,x=-1.06,m=1.75;else if(e<Rs){let M=et(e,Cr,Rs);g=ot(-1.3,-.12,_e.out(M))*n,x=-.9,m=.95}else{let M=et(e,go,ku);g=ot(.05,1.35,_e.in(M))*n,x=-.9-.25*_e.in(et(e,243.8,ku)),m=.95}this.run.position.set(g,x+(r?.035:.022)*p,0),this.run.scale.set(m,m,1),this.run.rotation.z=-.02+.02*Math.sin(d),this.RU.uT.value=e,this.RU.uLine.value=_e.out(et(e,Cr,Cr+1.6)),this.RU.uColor.value=_e.inOut(et(e,Cr+1.4,Cr+3.6)),this.run.visible=e>Cr&&e<ku+.1,this.shadow.position.set(g,x+.02,0),this.shadow.scale.set(m*1.6*(1-p*.15),.1*m,1),this.shadow.material.opacity=.45*this.RU.uColor.value,this.shadow.visible=this.run.visible,this.PU.uA.value=$(229,232,e)*(1-.6*$(246,250,e));let f=_e.inOut(et(e,Pr,Pr+3.2)),_=_e.inOut(et(e,Pr+2.8,Pr+4.4)),y=1-$(250.6,bl-.1,e);this.title.group.position.set(-.2*n,.4,0),this.title.group.rotation.z=.04,this.credit.group.position.set(-.2*n+.02,.14,0),this.title.set(f,y,0),this.credit.set(_,.85*y,0),this.title.group.visible=e>Pr,this.credit.group.visible=e>Pr+2.8}post(e){let t=$(249.8,bl,e);return{tone:1,bloom:.22,bloomThr:.92,sat:1.04,contrast:1,vig:.22,grain:.035,ca:0,letter:0,exposure:1+.03*(re.hitPulse("kick",e,10)*$(233,236,e)*(1-$(244,247,e))),fadeW:.9*t,dust:0}}};var xo=i=>1.952+2.1429*i,zu=.5357,ns=(i,e=9)=>re.hitPulse("kick",i,e),Ir=(i,e=5)=>re.hitPulse("hit",i,e),Re=(...i)=>i,Bn=(i,e,t={})=>(n,s,r)=>wl[i]?new wl[i](n,s,r,t):new oo(n,{img:e,fx:["kick"]},s,r),Dr=(i,e)=>(t,n,s)=>{var r;return(r=t.memo)[i]||(r[i]=e(t,n,s))},Bu=(i,e,t,n)=>s=>[i,e,_e.inOut(et(s,t,t+n))*2.2,-1],H0=Dr("sdat",Bn("SDAT","m_misato")),Hu=Dr("earth",Bn("Earth","red_crosses")),z0=Dr("sky",Bn("Sky","wunder")),V0=Dr("redsea",Bn("RedSea2","red_crosses")),G0=Dr("train",Bn("Train","gendo_train")),W0=Dr("helix",Bn("Helix2","ube_air")),X0=i=>{let e=et(i,162.8,166.1),t=ot(-2,14,_e.inOut(e)*.3+e*.7);return[t,t-12,0,e>0&&e<1?1:0]},Ur=55.22,Lr=63.79,is=2*zu,d2=[{t:Ur,img:"m_misato",dir:[1,0],z:[1.2,1.06]},{t:Ur+is,img:"m_asuka",dir:[-1,.2],z:[1.25,1.08]},{t:Ur+2*is,img:"m_ritsuko",dir:[0,1],z:[1.18,1.05]},{t:Ur+3*is,img:"m_mari",dir:[1,-.3],z:[1.22,1.06]},{t:Ur+4*is,img:"m_guns",dir:[-1,0],z:[1.1,1.24],pan:.06}],f2=[{t:Lr,img:"m_toji",dir:[1,0],z:[1.18,1.06]},{t:Lr+is,img:"m_kensuke",dir:[-1,0],z:[1.2,1.07]},{t:Lr+2*is,img:"m_sakura",dir:[0,-1],z:[1.25,1.1]},{t:Lr+3*is,img:"m_swarm",dir:[1,.3],z:[1.08,1.2],pan:.07},{t:Lr+4*is,img:"m_u02",dir:[-1,0],z:[1.3,1.05],pan:.08}],p2=[{t:189.7,img:"snap1",dir:[1,0],z:[1.15,1.03]},{t:190.24,img:"snap3",dir:[-1,0],z:[1.15,1.03]},{t:190.77,img:"snap2",dir:[0,1],z:[1.15,1.03]},{t:191.31,img:"snap4",dir:[1,0],z:[1.15,1.03]},{t:191.85,img:"m_toji",dir:[-1,0],z:[1.12,1.04]}],q0=["ube_air","ube_pilots","shinji_blue","shinji_red","genga","gendo_yui","kaworu","rei_white","red_crosses","lance","misato_last","fire_fight","gendo_train","asuka_beach","set_fight","shinji_cam","lilith","fleet","wunder","rei_dusk","snap3","rei_paddy","village","nti","eva01_eye","eva01_cage","yui_lisa","louvre","paris_blue","paris_red"],m2=(()=>{let i=[],e=218.38,t=q0.length;return q0.forEach((n,s)=>{let r=s/(t-1);i.push({t:e,img:n,dir:[-1,0],z:[1.08,1.02],whip:1.4,rev:1,pan:.02}),e+=.075+.2*Math.pow(Math.abs(r-.35)/.65,2.2)}),i})(),g2=[{t:16.95,lines:[{s:"\u6700\u7D42\u8A71",x:.5,y:.47,size:150,sx:.8,sy:1.25,align:"center",track:30},{s:"EPISODE:27",x:.5,y:.62,size:44,font:"mono",weight:500,align:"center",track:18,color:"#d9d4c8"}]},{t:17.49,inv:1,flash:.9,lines:[{s:"\u4E16\u754C\u306E",x:.08,y:.4,size:210,sx:.66,sy:1.3},{s:"\u4E2D\u5FC3\u3067",x:.08,y:.72,size:210,sx:.66,sy:1.3}]},{t:18.02,red:1,lines:[{s:"\u3055\u3088\u306A\u3089\u3001",x:.93,y:.46,size:190,sx:.7,sy:1.25,align:"right"},{s:"\u3059\u3079\u3066\u306E\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3",x:.93,y:.66,size:96,sx:.62,sy:1.25,align:"right",track:4}]},{t:18.56,lines:[{s:"One Last Kiss",x:.5,y:.55,size:150,font:"serif",weight:500,align:"center",track:6},{s:"",x:.3,y:.62,size:10,rule:[0,0,1920*.4,3]}]}],v2=`float gear(vec2 p, float r, float n, float a){ float ang = atan(p.y, p.x) + a; float rr = length(p);
  float tooth = smoothstep(0.2, 0.0, abs(fract(ang * n / 6.2832) - 0.5) - 0.18) * r * 0.12;
  float ring = abs(rr - r - tooth) ; float hub = abs(rr - r * 0.35); float sp = abs(sin(ang * 3.0)) * rr; float ann = step(rr, r * 0.95) * step(r * 0.37, rr);
  return smoothstep(0.004, 0.0, ring - 0.002) + smoothstep(0.003, 0.0, hub - 0.0015) * 0.8 + smoothstep(0.006, 0.0, sp) * 0.5 * ann; }`,x2=`if (uB.x > 0.001) { vec2 q = (suv - 0.5) * vec2(uAspect, 1.0); float s = uB.y;
  float g = gear(q - vec2(-0.55, 0.12), 0.26, 16.0, s) + gear(q - vec2(-0.14, -0.19), 0.17, 10.0, -s * 1.6 + 0.3) + gear(q - vec2(0.62, 0.24), 0.33, 20.0, -s * 0.8)
    + gear(q - vec2(0.27, -0.33), 0.12, 8.0, s * 2.1);
  col += vec3(1.3, 0.45, 0.1) * g * uB.x * (0.35 + 0.4 * uK); }`,y2=`if (uB.x > 0.001) { float n = fbm(uv * vec2(7.0, 11.0) + 2.0) + (uv.y - 0.5) * 0.5; float th = 1.15 - uB.x * 1.1;
  float e = smoothstep(th - 0.06, th, n) * (1.0 - smoothstep(th, th + 0.02, n)); float gone = smoothstep(th, th + 0.02, n) * smoothstep(0.35, 0.9, d);
  col = mix(col, vec3(1.3, 0.55, 0.2) * (0.6 + 0.4 * dot(col, vec3(0.33))), gone * 0.85); col += vec3(2.2, 0.9, 0.3) * e * smoothstep(0.35, 0.8, d); }`,_2=`if (uB.x > 0.001) { vec2 q = suv * vec2(38.0 * uAspect, 2.0); q.y += uT * 3.5 + hash12(vec2(floor(q.x), 1.0)) * 7.0;
  float h = hash12(floor(q)); float st = step(0.7, h) * smoothstep(0.4, 0.0, abs(fract(q.x) - 0.5)) * smoothstep(0.0, 1.0, fract(q.y));
  col = mix(col, col * vec3(0.72, 0.8, 0.9), uB.x * 0.55); col += vec3(0.7, 0.8, 0.9) * st * 0.25 * uB.x; }`,M2=[{t:xo(65)-.02,red:1,lines:[{s:"\u30DE\u30A4\u30CA\u30B9\u5B87\u5B99",x:.5,y:.52,size:200,sx:.62,sy:1.35,align:"center",track:12},{s:"ANTI-UNIVERSE",x:.5,y:.66,size:40,font:"mono",weight:500,align:"center",track:26,color:"#ffb3a0"}]},{t:xo(65)+zu,inv:1,lines:[{s:"\u60F3\u50CF",x:.25,y:.62,size:300,sx:.66,sy:1.3,align:"center"},{s:"\u30A4\u30DE\u30B8\u30CA\u30EA\u30FC",x:.72,y:.58,size:120,sx:.66,sy:1.3,align:"center"}]}],Le=(i,e,t=.5,n={})=>({type:i,dur:e,align:t,...n}),E2=i=>{let e=et(i,23.9,25.2),t=2.2;return{x:ot(-t*1.1,t*1.25,_e.inOut(e)),y:ot(-1.3,.25,Math.sin(e*Math.PI)*.9+e*.1)-.5,s:.8+e*.45,r:ot(.35,-.25,e),a:e>0&&e<1?1:0}},vo=[["sdat",0,H0,null],["earth",10.52,Hu,Le("zoom",1.1,.5,{c:[.5,.5]})],["title",16.95,i=>new ao(i,g2),Le("flash",.3)],["pred",19.09,mt({img:"paris_red",fx:["kick","drift","heat","glint","fireflies"],fxAmt:[.6,.8,0,0],punch:.2,cam:[Re(0,.02,.03,1.12,0,0,0),Re(1,-.02,0,1.03,-.012,0,.06)]}),Le("dip",.5)],["louvre",20.71,mt({img:"louvre",fx:["kick","rays","glint","wave"],light:[.55,.72,.9,0],fxAmt:[1,1,1,0],fxCol:[1.2,.3,.2],wave:Bu(.52,.42,21.3,1.6),cam:[Re(0,0,-.02,1.2,0,0,0),Re(1,0,.02,1.06,.01,-.006,.08)],e:_e.out}),Le("flash",.3)],["pblue",22.61,mt({img:"paris_blue",fx:["kick","drift","glint","wave","sweep"],fxAmt:[.7,0,0,0],fxCol:[.8,.9,1.1],wave:Bu(.2,.55,22.61,2.2),cam:[Re(0,-.04,0,1.08,0,0,0),Re(1,.05,.01,1.18,.02,0,.05)],cuts:[{img:"u08_cut",h:1.1,wind:.2,rimCol:[.9,.9,1.2],fn:E2}]}),Le("light",.5,.3)],["gallery",25.02,Bn("Gallery","yui_lisa"),Le("fade",.5)],["cage",29.3,mt({img:"eva01_cage",fx:["kick","rays","glint"],light:[.5,.95,.6,0],fxCol:[.5,1.4,.4],head:v2,hook:x2,cam:[Re(0,0,-.05,1.25,0,0,0),Re(.5,0,0,1.12,.01,0,.04),Re(1,0,.03,1.02,.02,0,.1)],tick:(i,e,t)=>t.U.uB.value.set($(30.9,31.3,i)*(1-$(32.7,33.05,i)),(i-31.18)*.9+.6*ns(i,6))}),Le("flash",.35)],["eye",33.05,mt({img:"eva01_eye",fx:["kick","glint","rays"],light:[.5,.62,1.4,0],fxCol:[.6,1.6,.3],punch:1.2,cam:[Re(0,0,0,1.08,0,0,0),Re(1,0,.02,1.32,0,0,.12)],e:_e.out,post:i=>({shake:ns(i,10)*.6,bloom:.9})}),Le("flash",.25)],["nti",34.17,mt({img:"nti",fx:["kick","rays","hex","glint","heat"],fxCol:[1.4,.2,.15],lightFn:i=>[.5,.72,.4+Ir(i)*1,(i>36.5?et(i,36.5,37.7):et(i,34.17,35.4))*1.2],cam:[Re(0,0,0,1.02,0,0,0),Re(1,0,.04,1.2,0,-.01,.1)],post:i=>({invert:i>36.5&&i<36.58?1:0,glitch:Ir(i,9)*.5,rgb:Ir(i,7)*.5,shake:Ir(i,8)*.5})}),Le("glitch",.3)],["village",38.38,mt({img:"village",fx:["kick","fireflies","drift","sweep"],fxAmt:[.5,.9,0,0],punch:.3,cam:[Re(0,-.04,-.03,1.15,0,0,0),Re(1,.03,0,1.05,.015,0,.05)]}),Le("dip",.8)],["paddy",40.03,mt({img:"rei_paddy",fx:["kick","water","fireflies","glint"],water:.36,fxAmt:[.5,.5,0,0],punch:.3,cam:[Re(0,.03,0,1.1,0,0,0),Re(1,-.02,.01,1.18,-.012,0,.06)]}),Le("fade",.4)],["clothes",41.34,Bn("Clothes","snap3"),Le("flash",.3)],["dusk",47.75,mt({img:"rei_dusk",fx:["kick","lcl","fireflies"],fxAmt:[0,.4,1,0],punch:.2,hook:y2,cam:[Re(0,0,-.02,1.08,0,0,0),Re(1,0,.02,1.24,0,0,.1)],tick:(i,e,t)=>t.U.uB.value.set(_e.in(et(i,49.3,52.34)),0,0,0),post:i=>({fadeW:$(51.6,52.34,i)*.8,bloom:.8+$(50,52.3,i)})}),Le("fade",.8,.3)],["sky",52.34,z0,Le("flash",.4)],["mont1",Ur,i=>new _s(i,d2),Le("flash",.12)],["sky2",61.07,z0,Le("zoom",.35,.5,{c:[.5,.5]})],["mont2",Lr,i=>new _s(i,f2),Le("flash",.12)],["canyon",69.63,Bn("Canyon","m_swarm"),Le("light",.7,.4)],["lilith",74.03,mt({img:"lilith",fx:["kick","rays","hex","glint","heat"],fxCol:[1.4,.35,.25],lightFn:i=>[.52,.84,1+Ir(i)*2,i>78.31?et(i,78.31,79.8)*1.4:i>76.17?et(i,76.17,77.6):0],cam:[Re(0,0,-.03,1.02,0,0,0),Re(1,0,.05,1.3,0,-.01,.14)],post:i=>({fadeW:$(79.4,80.8,i),shake:Ir(i,7)*.6})}),Le("burn",.8)],["cam1",80.84,mt({img:"shinji_cam",fx:["kick"],punch:.2,cam:[Re(0,0,0,1.16,0,0,0),Re(1,.02,0,1.08,.01,0,.04)],post:i=>({tone:.3,scan:.25})}),Le("glitch",.3)],["cam2",82.78,mt({img:"shinji_cam",fx:["kick"],punch:.2,blur:1.2,focus:.4,cam:[Re(0,.12,.08,1.7,0,0,0),Re(1,.14,.09,1.85,.01,0,.05)]}),Le("iris",.4)],["studio",84.92,Bn("Studio","set_fight"),Le("burn",1)],["beach",89.26,mt({img:"asuka_beach",fx:["kick","glint","rays","water"],light:[.72,.6,.6,0],water:.3,fxCol:[1.3,.6,.3],punch:.3,cam:[Re(0,.05,0,1.12,0,0,0),Re(1,-.03,0,1.2,-.015,0,.05)],post:{letter:.12}}),Le("burn",.9)],["train",91.35,G0,Le("fade",.5)],["gendo",93.57,mt({img:"gendo_train",fx:["kick","bands"],punch:.3,cam:[Re(0,-.04,0,1.12,0,0,0),Re(1,.03,0,1.2,.015,0,.06)],post:{letter:.12}}),Le("cut",0)],["train2",95.57,G0,Le("cut",0)],["fire",98.19,mt({img:"fire_fight",fx:["kick","embers","heat","rays"],light:[.5,.5,.8,0],fxCol:[1.4,.5,.2],punch:1.1,cam:[Re(0,-.05,0,1.2,0,0,0),Re(1,.05,.02,1.1,.02,0,.08)],post:i=>({shake:ns(i,9)*.7,bloom:.95})}),Le("shatter",1.3,.35,{c:[.52,.5]})],["fire2",100.9,mt({img:"fire_fight",fx:["kick","embers","heat"],fxCol:[1.4,.5,.2],punch:1.1,cam:[Re(0,.2,.05,1.8,0,0,0),Re(1,.14,.03,1.55,.01,0,.06)],post:i=>({shake:ns(i,9)*.8,rgb:ns(i,12)*.3})}),Le("zoom",.3,.5,{c:[.6,.5]})],["misato",103.72,mt({img:"misato_last",fx:["kick","embers","heat","rays","sweep"],light:[.5,1,.7,0],fxAmt:[.8,.8,0,0],fxCol:[1.4,.6,.25],cam:[Re(0,0,-.05,1.05,0,0,0),Re(1,0,.04,1.3,0,0,.1)],post:i=>({fadeW:$(107.4,108.05,i)*.7})}),Le("burn",.9)],["lance",108.05,mt({img:"lance",fx:["kick","rays","glint","hex","sweep"],light:[.72,.8,1.2,0],fxCol:[1.4,1,.8],punch:.9,lightFn:i=>[.72,.78,1.2+ns(i)*.6,et(i,110.2,111.6)*1.2],cam:[Re(0,-.12,-.08,1.35,0,0,0),Re(1,.1,.06,1.2,.02,.01,.08)],post:i=>({shake:ns(i,9)*.6})}),Le("flash",.4)],["lance2",112.44,mt({img:"lance",fx:["kick","rays","glint","lightrain"],light:[.9,.9,2,0],fxAmt:[1,0,.8,0],fxCol:[1.4,1,.8],punch:.8,cam:[Re(0,.28,.2,1.9,0,0,0),Re(1,.34,.25,2.4,.01,0,.1)],e:_e.in,post:i=>({fadeW:$(114.4,115.19,i),shake:ns(i,9)*.5})}),Le("zoom",.4,.5,{c:[.7,.7]})],["redsea",115.19,V0,Le("flash",.6)],["reiw",121,mt({img:"rei_white",fx:["kick","rays","lightrain"],light:[.5,1,.6,0],fxAmt:[1,0,.6,0],fxCol:[1.2,1.1,1],punch:.3,cam:[Re(0,0,0,1.06,0,0,0),Re(1,0,.02,1.2,0,0,.1)]}),Le("light",.6)],["redsea2",123.76,V0,Le("flash",.3)],["kaworu",129.61,mt({img:"kaworu",fx:["kick","rays","fireflies","drift"],light:[.3,.95,.6,0],fxAmt:[1,.5,0,0],fxCol:[1.2,1.1,.8],punch:.3,cam:[Re(0,-.04,0,1.12,0,0,0),Re(1,.03,0,1.2,.015,0,.06)]}),Le("light",.6)],["gyui",xo(61),mt({img:"gendo_yui",fx:["kick","lightrain"],light:[.6,.9,0,0],fxAmt:[.6,0,.3,0],fxCol:[1,.95,.85],punch:.3,cam:[Re(0,0,0,1.08,0,0,0),Re(1,0,.02,1.2,0,0,.08)],post:i=>({bloom:.2,bloomThr:.95,exposure:.92,contrast:1.3,sat:1.1,lift:[-.06,-.06,-.05],dust:.05,fadeW:$(135.6,136.17,i)*.55})}),Le("fade",.7)],["earth2",136.17,Hu,Le("flash",.5)],["inter",xo(65)-.02,i=>new ao(i,M2),Le("glitch",.2)],["flip",xo(65)+2*zu,Bn("Flipbook","genga"),Le("cut",0)],["shred",149.52,mt({img:"shinji_red",fx:["kick","lineart","wave","glint","water"],water:.35,punch:.2,fxFn:i=>[.6,0,0,1-_e.inOut(et(i,149.7,153.6))],wave:Bu(.72,.55,152.4,2.6),cam:[Re(0,-.04,0,1.1,0,0,0),Re(1,.03,.01,1.2,.012,0,.06)]}),Le("fade",.8)],["sblue",155.05,mt({img:"shinji_blue",fx:["kick","rays","lightrain","glint","water"],light:[.55,.95,.8,0],water:.3,fxAmt:[.6,0,1,0],fxCol:[1,1.1,1.3],punch:.3,cam:[Re(0,0,.05,1.05,0,0,0),Re(1,0,-.02,1.16,0,.01,.07)],cuts:[{img:"u08_desc",h:.7,wind:.3,rim:.9,rimCol:[1,.9,1.1],fn:i=>{let e=_e.out(et(i,155.05,159.6));return{x:.2,y:ot(1.5,.12,e),s:1+e*.15,a:$(155.05,155.8,i)}}}]}),Le("light",.7)],["bench",159.63,mt({img:"ube_bench",fx:["kick","rays","glint","water","train"],light:[.72,.8,0,0],water:.22,fxCol:[1.3,1.1,.9],punch:.2,head:"",hook:_2,trainFn:X0,lightFn:i=>[.72,.8,$(160.5,162.5,i)*1.2,0],tick:(i,e,t)=>t.U.uB.value.set(1-$(160.2,162.2,i),0,0,0),cam:[Re(0,.03,0,1.08,0,0,0),Re(1,-.02,0,1.18,-.012,0,.05)]}),Le("dip",.8)],["pilots",164.05,mt({img:"ube_pilots",fx:["kick","glint","train","sweep"],trainFn:X0,fxAmt:[.6,0,0,0],punch:.3,cam:[Re(0,0,0,1.12,0,0,0),Re(1,0,.01,1.06,.01,0,.04)]}),Le("cut",0)],["plat",166.14,mt({img:"ube_platform",fx:["kick","glint","sweep","rays"],light:[.6,.9,.5,0],fxAmt:[.7,0,0,0],punch:.4,cam:[Re(0,0,0,1.2,0,0,0),Re(1,0,.02,1.08,.015,0,.06)]}),Le("flash",.3)],["pilots2",170.67,mt({img:"ube_pilots",fx:["kick","glint","sweep"],fxAmt:[.8,0,0,0],punch:.4,cam:[Re(0,-.08,-.04,1.45,0,0,0),Re(1,.06,-.02,1.3,.02,0,.06)]}),Le("zoom",.4,.5,{c:[.5,.5]})],["air",175.47,mt({img:"ube_air",fx:["kick","drift","glint","sweep"],fxAmt:[.8,0,0,0],punch:.4,cam:[Re(0,0,-.08,1.4,0,0,0),Re(1,0,.02,1.04,0,.01,.05)],e:_e.out,post:i=>({fadeW:$(180.7,181.25,i)*.7})}),Le("fade",.8)],["helix",181.25,W0,Le("flash",.5)],["snaps",189.7,i=>new _s(i,p2,{post:{tone:.2}}),Le("flash",.15)],["helix2",192.56,W0,Le("flash",.3)],["earth3",207.5,Hu,Le("light",1)],["rewind",218.38,i=>new _s(i,m2,{post:{scan:.35,glitch:.15,tone:.2}}),Le("glitch",.3)],["sdat2",222.6,H0,Le("glitch",.4)],["sketch",226.2,Bn("Sketch2","p_town"),Le("pencil",2.2,.35)]],Y0=[{t0:1.2,t1:10.2,kind:"code",text:"S-DAT",track:"26 \u25B8 27",base:1.2},{t0:11,t1:16.4,kind:"cap",text:"\u5357\u6975 \u7206\u5FC3\u5730",sub:"ANTARCTICA \xB7 GROUND ZERO"},{t0:12.8,t1:16.6,kind:"alert",text:"\u4EBA\u985E\u88DC\u5B8C",sub:"HUMAN INSTRUMENTALITY  IN PROGRESS",color:"#ff3a2a",rate:1},{t0:21.4,t1:24.2,kind:"cap",text:"\u30D1\u30EA\u65E7\u5E02\u8857",sub:"PARIS \xB7 RESTORATION  PHASE-1"},{t0:29.5,t1:33,kind:"sync",label:"EVA-01  SYNCHRO RATIO",from:0,to:400,pow:2.4,max:400,warn:100},{t0:33.08,t1:34.1,kind:"alert",text:"\u8D77\u52D5",sub:"EVA-01  ACTIVATION",color:"#ff8a1e",rate:2},{t0:34.3,t1:37.9,kind:"alert",text:"\u899A\u9192",sub:"NEAR THIRD IMPACT  WARNING",color:"#ff3a2a",rate:2,style:{top:"30%"}},{t0:38.6,t1:41.2,kind:"cap",text:"\u7B2C3\u6751",sub:"VILLAGE-3"},{t0:52.5,t1:55.1,kind:"alert",text:"\u767A\u9032",sub:"AAA WUNDER  LAUNCH",color:"#ff8a1e",rate:1,style:{top:"24%"}},{t0:61.2,t1:63.7,kind:"magi",result:[1,1,1],style:{top:"9%",bottom:"auto"}},{t0:80.9,t1:84.8,kind:"frame",text:"\u25CF REC",color:"#f4efe6"},{t0:108.2,t1:112.3,kind:"count",from:16},{t0:108.2,t1:112.3,kind:"alert",text:"\u30AC\u30A4\u30A6\u30B9\u306E\u69CD",sub:"LANCE OF GAIUS",color:"#ffd6a0",rate:1,style:{top:"22%"}},{t0:136.3,t1:141,kind:"cap",text:"\u88DC\u5B8C \u7D42\u4E86",sub:"INSTRUMENTALITY  REVERSED \xB7 EARTH RESTORED"},{t0:159.8,t1:162.8,kind:"cap",text:"\u5B87\u90E8\u65B0\u5DDD\u99C5",sub:"UBE-SHINKAWA STATION"},{t0:218.4,t1:222.5,kind:"code",text:"\u25C0\u25C0 REW",track:"27",base:226,rev:12},{t0:222.6,t1:226,kind:"code",text:"S-DAT",track:"27  END",base:222.6}];function b2(i,e,t=256,n=192){let s=document.createElement("canvas");s.width=t*4,s.height=n*3;let r=s.getContext("2d");return e.forEach((o,a)=>{let l=i[o];if(!l)return;let c=a%4*t,h=Math.floor(a/4)*n,u=Math.max(t/l.w,n/l.h),d=l.w*u,p=l.h*u;r.save(),r.beginPath(),r.rect(c,h,t,n),r.clip(),r.drawImage(l.img,c+(t-d)/2,h+(n-p)/2,d,p),r.restore()}),s}async function $0(i,e,t=null){let n=await Yf();i.img=n,i.memo={},i.shared={glow:Qa(128),atlas:b2};let s=[];for(let r=0;r<vo.length;r++){let[o,a,l,c]=vo[r],h=r+1<vo.length?vo[r+1][1]:252.03,d=t===null||h>t-3&&a<t+3?l(i,a,h):new st(i);s.push({id:o,start:a,scene:d,tr:c||{type:"cut"}}),e((r+1)/vo.length),await new Promise(p=>setTimeout(p,0))}return s}var Is=new URLSearchParams(location.search),Us=Is.has("freeze"),Cs=parseFloat(Is.get("t")||"0")||0,S2=Is.has("clean"),Mo=document.getElementById("app"),un=document.getElementById("song"),$t=new Fa(un),Qn=parseFloat(Is.get("q")||"0")||(Us?.6:1),K0=1920*1080,dn=new Ma({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:Us});dn.autoClear=!1;dn.outputColorSpace=ai;dn.toneMapping=ii;dn.domElement.id="gl";Mo.appendChild(dn.domElement);var di={renderer:dn,w:1280,h:720,aspect:16/9,res:new ee(1280,720),quality:Qn},yo=new Ba(dn),w2=new Ha,T2=new Ga,Ps=null,Pl=null,Gu=null,Al=[],Ls=null,Il=null,Ul=null,Rl=!1,Z0=0;function Wu(){let i=Math.min(devicePixelRatio||1,2),e=innerWidth,t=innerHeight,n=i*Qn;e*t*n*n>K0*Qn&&(n=Math.sqrt(K0*Qn/(e*t)));let s=Math.max(320,Math.round(e*n)),r=Math.max(180,Math.round(t*n));dn.setPixelRatio(1),dn.setSize(s,r,!1),dn.domElement.style.width=e+"px",dn.domElement.style.height=t+"px",Object.assign(di,{w:s,h:r,aspect:s/r}),di.res.set(s,r),yo.resize(s,r),[Ps,Pl].forEach(o=>o&&o.dispose()),Ps=Ki(s,r),Pl=Ki(s,r),Al.forEach(o=>o.resize(s,r)),Ls&&Ls.resize()}function j0(i,e){let t=Gu.at(i),n=t.a.scene;n.update(i,e);let s,r=cu(n.post(i));if(t.b){let a=t.b.scene;a.update(i,e),n.render(dn,Ps),a.render(dn,Pl);let l=t.tr;yo.fs.run(w2.set(Ps,Pl,t.p,l.type,di.aspect,i,l.c,l.amt??1),yo.M),s=yo.M,r=Nf(r,cu(a.post(i)),t.p,l.type)}else n.render(dn,Ps),s=Ps;T2.render(dn,s,i,r.dust,di.w,di.h,r.dustCol),yo.composite(s,r,i,di.w,di.h);let o=(1-r.fadeB)*(1-r.fadeW*.85);Ls&&Ls.update(i,o),Ul&&Ul.update(i,o*(1-r.invert*.5)),Il&&Il.update(i,!Hn.bar.classList.contains("idle"))}var Vu=0,Tl=0,J0=0;function A2(i,e){if(Us||Is.has("q")||(Vu+=i,Tl++,e-J0<2500||Tl<45))return;let t=Vu/Tl;Vu=0,Tl=0,J0=e;let n=Qn;t>1/45?Qn=Math.max(.5,Qn*.85):t<1/58&&Qn<1&&(Qn=Math.min(1,Qn*1.08)),Math.abs(n-Qn)>.01&&Wu()}function Cl(){let i=$t.tick(),e=Math.min($t.t,to);if(j0(e,i),Z0++,!Rl&&(un.ended||e>=to-.05)&&(Rl=!0),Hn.update(e,$t.playing,Rl),A2(i,performance.now()),Us&&Z0>3){window.__olk.ready=!0;return}requestAnimationFrame(Cl)}var _o=i=>{i=Math.max(0,Math.min(to-.1,i)),Rl=!1,$t.fallback||(un.currentTime=i),$t.t=i},Hn=new qa(Mo,{toggle:()=>{if($t.fallback){$t.running=!$t.running;return}un.paused||un.ended?(un.ended&&_o(0),un.play().catch(()=>{})):un.pause()},seek:_o,seekBy:i=>_o($t.t+i),lyrics:()=>Ls&&Ls.toggle(),restart:()=>{_o(0),$t.fallback?$t.running=!0:un.play().catch(()=>{})}},to);Hn.clean=S2;window.__olk={ready:!1,seek:_o,clock:$t};async function R2(){let i=['500 40px "OLK Mincho"','400 40px "OLK Mincho"','italic 300 40px "OLK Serif"','italic 500 40px "OLK Serif"','400 40px "OLK Serif"','40px "OLK Script"','40px "OLK SC"','40px "OLK Mono"'];try{await Promise.race([Promise.all(i.map(e=>document.fonts.load(e,"A\u3042\u611B"))),new Promise(e=>setTimeout(e,4e3))])}catch{}}async function C2(){if(Us){$t.freeze(Cs),Hn.ready(!0),Cl();return}if(!await new Promise(e=>{if(un.readyState>=3)return e(!0);un.addEventListener("canplay",()=>e(!0),{once:!0}),un.addEventListener("error",()=>e(!1),{once:!0}),setTimeout(()=>e(un.readyState>=2),8e3)})){$t.fallback=!0,$t.t=Cs,$t.running=!0,Hn.ready(),Cl();return}Cs&&(un.currentTime=Cs),Hn.ready(),Cl();try{await un.play()}catch{Hn.showGate(()=>un.play().catch(()=>{$t.fallback=!0,$t.running=!0}))}}(async function(){try{Hn.loading(.02),await R2(),Wu();let t=await $0(di,s=>Hn.loading(.05+s*.85),Us?Cs:null);Gu=new Wa(t),Al=[...new Set(t.map(s=>s.scene))],Al.forEach(s=>s.resize(di.w,di.h)),Ls=new Xa(Mo),Ul=new Ka(Mo,Y0),Il=new Ya(Mo,Hn.bar),Is.has("cc")&&Il.set(!0),Is.has("nohud")&&Ul.toggle(!1);let n=Us?Gu.around(Cs,2).map(s=>s.scene):Al;for(let s=0;s<n.length;s++){let r=n[s],o=t.find(a=>a.scene===r);r.update(Math.max(0,o.start+.05),1/60),r.render(dn,Ps),Hn.loading(.9+.1*(s+1)/n.length),await new Promise(a=>setTimeout(a,0))}j0(Math.max(0,Cs),1/60),addEventListener("resize",Wu),C2()}catch(e){console.error(e),Hn.loading(1,"ERROR: "+(e&&e.message))}})();})();
