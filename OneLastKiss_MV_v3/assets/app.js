(()=>{var cm=Object.defineProperty;var hm=(i,e)=>{for(var t in e)cm(i,t,{get:e[t],enumerable:!0})};var bu="169";var um=0,U0=1,fm=2;var Hf=1,dm=2,Ai=3,pi=0,_t=1,it=2,qi=0,Vn=1,Fe=2,L0=3,D0=4,xo=5,ys=100,pm=101,mm=102,vm=103,gm=104,xm=200,yo=201,ym=202,_m=203,Qc=204,Es=205,Em=206,Mm=207,bm=208,Sm=209,wm=210,Tm=211,Am=212,Rm=213,Cm=214,eh=0,th=1,nh=2,ur=3,ih=4,sh=5,rh=6,oh=7,kf=0,Pm=1,Im=2,di=0,Um=1,Lm=2,Dm=3,Nm=4,Fm=5,Hm=6,km=7;var Of=300,fr=301,dr=302,ah=303,lh=304,rl=306,Pi=1e3,ti=1001,ch=1002,Rn=1003,Om=1004;var Jo=1005;var It=1006,vc=1007;var ni=1008;var ii=1009,zf=1010,Bf=1011,po=1012,Su=1013,Ms=1014,fi=1015,Ts=1016,wu=1017,Tu=1018,pr=1020,Vf=35902,Gf=1021,Wf=1022,En=1023,Xf=1024,qf=1025,lr=1026,mr=1027,Au=1028,Ru=1029,Yf=1030,Cu=1031;var Pu=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,hh=35840,uh=35841,fh=35842,dh=35843,ph=36196,mh=37492,vh=37496,gh=37808,xh=37809,yh=37810,_h=37811,Eh=37812,Mh=37813,bh=37814,Sh=37815,wh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Pa=36492,Ih=36494,Uh=36495,$f=36283,Lh=36284,Dh=36285,Nh=36286;var Ua=2300,Fh=2301,gc=2302,N0=2400,F0=2401,H0=2402;var zm=3200,Bm=3201;var Kf=0,Vm=1,qt="",un="srgb",vi="srgb-linear",Iu="display-p3",ol="display-p3-linear",La="linear",Rt="srgb",Da="rec709",Na="p3";var Vs=7680;var k0=519,Gm=512,Wm=513,Xm=514,Zf=515,qm=516,Ym=517,$m=518,Km=519,Hh=35044,Jf=35048;var O0="300 es",Ci=2e3,Fa=2001,$i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xc=Math.PI/180,Ha=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Zm(i,e){return(i%e+e)%e}function yc(i,e,t){return(1-t)*i+t*e}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],y=s[0],m=s[3],p=s[6],_=s[1],g=s[4],E=s[7],b=s[2],T=s[5],S=s[8];return r[0]=a*y+o*_+l*b,r[3]=a*m+o*g+l*T,r[6]=a*p+o*E+l*S,r[1]=c*y+h*_+u*b,r[4]=c*m+h*g+u*T,r[7]=c*p+h*E+u*S,r[2]=f*y+d*_+v*b,r[5]=f*m+d*g+v*T,r[8]=f*p+d*E+v*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,v=t*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_c=new tt;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jm(){let i=ka("canvas");return i.style.display="block",i}var z0={};function Ia(i){i in z0||(z0[i]=!0,console.warn(i))}function jm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Qm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ev(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var B0=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),V0=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[vi]:{transfer:La,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[un]:{transfer:Rt,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ol]:{transfer:La,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(V0),fromReference:i=>i.applyMatrix3(B0)},[Iu]:{transfer:Rt,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(V0),fromReference:i=>i.applyMatrix3(B0).convertLinearToSRGB()}},tv=new Set([vi,ol]),vt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=jr[e].toReference,s=jr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return jr[i].primaries},getTransfer:function(i){return i===qt?La:jr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(jr[e].luminanceCoefficients)}};function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ec(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,kh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=ka("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nv=0,Oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iv=0,fn=class i extends $i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=It,a=ni,o=En,l=ii,c=i.DEFAULT_ANISOTROPY,h=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Yi(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Of;fn.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,E=(d+1)/2,b=(p+1)/2,T=(h+f)/4,S=(u+y)/4,C=(v+m)/4;return g>E&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=S/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oh=class extends $i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zh=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],v=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=y;return}if(u!==y||l!==f||c!==d||h!==v){let m=1-o,p=l*f+c*d+h*v+u*y,_=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){let b=Math.sqrt(g),T=Math.atan2(b,p*_);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}let E=o*_;if(l=l*m+f*E,c=c*m+d*E,h=h*m+v*E,u=u*m+y*E,m===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*d-c*f,e[t+1]=l*v+h*f+c*u-o*d,e[t+2]=c*v+h*d+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(G0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new A,G0=new Dt,Ii=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Qo.subVectors(this.max,Qr),Ws.subVectors(e.a,Qr),Xs.subVectors(e.b,Qr),qs.subVectors(e.c,Qr),Oi.subVectors(Xs,Ws),zi.subVectors(qs,Xs),fs.subVectors(Ws,qs);let t=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-fs.z,fs.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,fs.z,0,-fs.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-fs.y,fs.x,0];return!Sc(t,Ws,Xs,qs,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,Ws,Xs,qs,Qo))?!1:(ea.crossVectors(Oi,zi),t=[ea.x,ea.y,ea.z],Sc(t,Ws,Xs,qs,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new A,new A,new A,new A,new A,new A,new A,new A],jn=new A,jo=new Ii,Ws=new A,Xs=new A,qs=new A,Oi=new A,zi=new A,fs=new A,Qr=new A,Qo=new A,ea=new A,ds=new A;function Sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ds.fromArray(i,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sv=new Ii,eo=new A,wc=new A,Ki=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(wc)),this.expandByPoint(eo.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new A,Tc=new A,ta=new A,Bi=new A,Ac=new A,na=new A,Rc=new A,Ba=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=Bi.dot(this.direction),l=-Bi.dot(ta),c=Bi.lengthSq(),h=Math.abs(1-a*a),u,f,d,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(ta,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){Ac.subVectors(t,e),na.subVectors(n,e),Rc.crossVectors(Ac,na);let a=this.direction.dot(Rc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);let l=o*this.direction.dot(na.crossVectors(Bi,na));if(l<0)return null;let c=o*this.direction.dot(Ac.cross(Bi));if(c<0||l+c>a)return null;let h=-o*Bi.dot(Rc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,v,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,v,y,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,v,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),a=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,v=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,v=c*h,y=c*u;t[0]=f+y*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,v=c*h,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,v=o*h,y=o*u;t[0]=l*h,t[4]=v*c-d,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*h,t[4]=y-f*u,t[8]=v*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+v,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=a*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=o*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,ov)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Vi.crossVectors(n,Ln),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Vi.crossVectors(n,Ln)),Vi.normalize(),ia.crossVectors(Ln,Vi),s[0]=Vi.x,s[4]=ia.x,s[8]=Ln.x,s[1]=Vi.y,s[5]=ia.y,s[9]=Ln.y,s[2]=Vi.z,s[6]=ia.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],y=n[6],m=n[10],p=n[14],_=n[3],g=n[7],E=n[11],b=n[15],T=s[0],S=s[4],C=s[8],U=s[12],x=s[1],M=s[5],L=s[9],F=s[13],k=s[2],K=s[6],O=s[10],ne=s[14],Y=s[3],pe=s[7],he=s[11],ve=s[15];return r[0]=a*T+o*x+l*k+c*Y,r[4]=a*S+o*M+l*K+c*pe,r[8]=a*C+o*L+l*O+c*he,r[12]=a*U+o*F+l*ne+c*ve,r[1]=h*T+u*x+f*k+d*Y,r[5]=h*S+u*M+f*K+d*pe,r[9]=h*C+u*L+f*O+d*he,r[13]=h*U+u*F+f*ne+d*ve,r[2]=v*T+y*x+m*k+p*Y,r[6]=v*S+y*M+m*K+p*pe,r[10]=v*C+y*L+m*O+p*he,r[14]=v*U+y*F+m*ne+p*ve,r[3]=_*T+g*x+E*k+b*Y,r[7]=_*S+g*M+E*K+b*pe,r[11]=_*C+g*L+E*O+b*he,r[15]=_*U+g*F+E*ne+b*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],v=e[3],y=e[7],m=e[11],p=e[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+y*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],v=e[12],y=e[13],m=e[14],p=e[15],_=u*m*c-y*f*c+y*l*d-o*m*d-u*l*p+o*f*p,g=v*f*c-h*m*c-v*l*d+a*m*d+h*l*p-a*f*p,E=h*y*c-v*u*c+v*o*d-a*y*d-h*o*p+a*u*p,b=v*u*l-h*y*l-v*o*f+a*y*f+h*o*m-a*u*m,T=t*_+n*g+s*E+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return e[0]=_*S,e[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*S,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*S,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*S,e[4]=g*S,e[5]=(h*m*r-v*f*r+v*s*d-t*m*d-h*s*p+t*f*p)*S,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*S,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*S,e[8]=E*S,e[9]=(v*u*r-h*y*r-v*n*d+t*y*d+h*n*p-t*u*p)*S,e[10]=(a*y*r-v*o*r+v*n*c-t*y*c-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*S,e[12]=b*S,e[13]=(h*y*s-v*u*s+v*n*f-t*y*f-h*n*m+t*u*m)*S,e[14]=(v*o*s-a*y*s-v*n*l+t*y*l+a*n*m-t*o*m)*S,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,v=r*u,y=a*h,m=a*u,p=o*u,_=l*c,g=l*h,E=l*u,b=n.x,T=n.y,S=n.z;return s[0]=(1-(y+p))*b,s[1]=(d+E)*b,s[2]=(v-g)*b,s[3]=0,s[4]=(d-E)*T,s[5]=(1-(f+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(v+g)*S,s[9]=(m-_)*S,s[10]=(1-(f+y))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),o=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/a,u=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ci){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,v;if(o===Ci)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Fa)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ci){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,d=(n+s)*h,v,y;if(o===Ci)v=(a+r)*u,y=-2*u;else if(o===Fa)v=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ys=new A,Qn=new je,rv=new A(0,0,0),ov=new A(1,1,1),Vi=new A,ia=new A,Ln=new A,W0=new je,X0=new Dt,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return X0.setFromEuler(this),this.setFromQuaternion(X0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},av=0,q0=new A,$s=new Dt,Si=new je,sa=new A,to=new A,lv=new A,cv=new Dt,Y0=new A(1,0,0),$0=new A(0,1,0),K0=new A(0,0,1),Z0={type:"added"},hv={type:"removed"},Ks={type:"childadded",child:null},Cc={type:"childremoved",child:null},Yt=class i extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new Qt,n=new Dt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new tt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Y0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(K0,e)}translateOnAxis(e,t){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Y0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(K0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(to,sa,this.up):Si.lookAt(sa,to,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Si),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z0),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hv),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z0),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new A(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new A,wi=new A,Pc=new A,Ti=new A,Zs=new A,Js=new A,J0=new A,Ic=new A,Uc=new A,Lc=new A,Dc=new nt,Nc=new nt,Fc=new nt,Xi=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),wi.subVectors(n,t),Pc.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(wi),l=ei.dot(Pc),c=wi.dot(wi),h=wi.dot(Pc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Fc.setScalar(0),Dc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),wi.subVectors(e,t),ei.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ei.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Zs.subVectors(s,n),Js.subVectors(r,n),Ic.subVectors(e,n);let l=Zs.dot(Ic),c=Js.dot(Ic);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,s);let h=Zs.dot(Uc),u=Js.dot(Uc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zs,a);Lc.subVectors(e,r);let d=Zs.dot(Lc),v=Js.dot(Lc);if(v>=0&&d<=v)return t.copy(r);let y=d*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Js,o);let m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return J0.subVectors(r,s),o=(u-h)/(u-h+(d-v)),t.copy(s).addScaledVector(J0,o);let p=1/(m+y+f);return a=y*p,o=f*p,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Zm(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hc(a,r,e+1/3),this.g=Hc(a,r,e),this.b=Hc(a,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=Qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Ec(e.r),this.g=Ec(e.g),this.b=Ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return vt.fromWorkingColorSpace(hn.copy(this),e),Math.round(on(hn.r*255,0,255))*65536+Math.round(on(hn.g*255,0,255))*256+Math.round(on(hn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=un){vt.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ra);let n=yc(Gi.h,ra.h,t),s=yc(Gi.s,ra.s,t),r=yc(Gi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new we;we.NAMES=Qf;var uv=0,Ui=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Vn,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Es,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==Es&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tt=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new A,oa=new se,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}};var Ga=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ve=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},fv=0,Bn=new je,kc=new Yt,js=new A,Dn=new Ii,no=new Ii,jt=new A,Ge=class i extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?Wa:Ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];no.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Dn.min,no.min),Dn.expandByPoint(jt),jt.addVectors(Dn.max,no.max),Dn.expandByPoint(jt)):(Dn.expandByPoint(no.min),Dn.expandByPoint(no.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(js.fromBufferAttribute(e,c),jt.add(js)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new A,l[C]=new A;let c=new A,h=new A,u=new A,f=new se,d=new se,v=new se,y=new A,m=new A;function p(C,U,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,U),v.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),v.sub(f);let M=1/(d.x*v.y-v.x*d.y);isFinite(M)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(M),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(M),o[C].add(y),o[U].add(y),o[x].add(y),l[C].add(m),l[U].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,U=_.length;C<U;++C){let x=_[C],M=x.start,L=x.count;for(let F=M,k=M+L;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let g=new A,E=new A,b=new A,T=new A;function S(C){b.fromBufferAttribute(s,C),T.copy(b);let U=o[C];g.copy(U),g.sub(b.multiplyScalar(b.dot(U))).normalize(),E.crossVectors(T,U);let M=E.dot(l[C])<0?-1:1;a.setXYZW(C,g.x,g.y,g.z,M)}for(let C=0,U=_.length;C<U;++C){let x=_[C],M=x.start,L=x.count;for(let F=M,k=M+L;F<k;F+=3)S(e.getX(F+0)),S(e.getX(F+1)),S(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)f[v++]=c[d++]}return new qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},j0=new je,ps=new Ba,aa=new Ki,Q0=new A,la=new A,ca=new A,ha=new A,Oc=new A,ua=new A,ef=new A,fa=new A,V=class extends Yt{constructor(e=new Ge,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Oc.fromBufferAttribute(u,e),a?ua.addScaledVector(Oc,h):ua.addScaledVector(Oc.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(aa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(aa,Q0)===null||ps.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(j0.copy(r).invert(),ps.copy(e.ray).applyMatrix4(j0),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),g=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=_,b=g;E<b;E+=3){let T=o.getX(E),S=o.getX(E+1),C=o.getX(E+2);s=da(this,p,e,n,c,h,u,T,S,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=v,p=y;m<p;m+=3){let _=o.getX(m),g=o.getX(m+1),E=o.getX(m+2);s=da(this,a,e,n,c,h,u,_,g,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){let m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),g=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=_,b=g;E<b;E+=3){let T=E,S=E+1,C=E+2;s=da(this,p,e,n,c,h,u,T,S,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=v,p=y;m<p;m+=3){let _=m,g=m+1,E=m+2;s=da(this,a,e,n,c,h,u,_,g,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dv(i,e,t,n,s,r,a,o){let l;if(e.side===_t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:i}}function da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);let h=dv(i,e,t,n,la,ca,ha,ef);if(h){let u=new A;Xi.getBarycoord(ef,la,ca,ha,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=Xi.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new A,materialIndex:0};Xi.getNormal(la,ca,ha,f.normal),h.face=f,h.barycoord=u}return h}var Mt=class i extends Ge{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function v(y,m,p,_,g,E,b,T,S,C,U){let x=E/S,M=b/C,L=E/2,F=b/2,k=T/2,K=S+1,O=C+1,ne=0,Y=0,pe=new A;for(let he=0;he<O;he++){let ve=he*M-F;for(let Ze=0;Ze<K;Ze++){let xe=Ze*x-L;pe[y]=xe*_,pe[m]=ve*g,pe[p]=k,c.push(pe.x,pe.y,pe.z),pe[y]=0,pe[m]=0,pe[p]=T>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Ze/S),u.push(1-he/C),ne+=1}}for(let he=0;he<C;he++)for(let ve=0;ve<S;ve++){let Ze=f+ve+K*he,xe=f+ve+K*(he+1),X=f+(ve+1)+K*(he+1),j=f+(ve+1)+K*he;l.push(Ze,xe,j),l.push(xe,X,j),Y+=6}o.addGroup(d,Y,U),d+=Y,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=vr(i[t]);for(let s in n)e[s]=n[s]}return e}function pv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var mv={clone:vr,merge:_n},vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xa=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new A,tf=new se,nf=new se,Xt=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,er=1,Bh=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Qs,er,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Qs,er,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Qs,er,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Qs,er,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Qs,er,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},qa=class extends fn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vh=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:qi});r.uniforms.tEquirect.value=t;let a=new V(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=It),new Bh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},zc=new A,xv=new A,yv=new tt,Ri=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zc.subVectors(n,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yv.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new Ki,pa=new A,mo=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],v=s[9],y=s[10],m=s[11],p=s[12],_=s[13],g=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-d,E-p).normalize(),n[1].setComponents(l+r,f+c,m+d,E+p).normalize(),n[2].setComponents(l+a,f+h,m+v,E+_).normalize(),n[3].setComponents(l-a,f-h,m-v,E-_).normalize(),n[4].setComponents(l-o,f-u,m-y,E-g).normalize(),t===Ci)n[5].setComponents(l+o,f+u,m+y,E+g).normalize();else if(t===Fa)n[5].setComponents(o,u,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function td(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _v(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){let v=u[f],y=u[d];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){let y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _e=class i extends Ge{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],v=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*f-a;for(let g=0;g<c;g++){let E=g*u-r;v.push(E,-_,0),y.push(0,0,1),m.push(g/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let g=_+c*p,E=_+c*(p+1),b=_+1+c*(p+1),T=_+1+c*p;d.push(g,E,T),d.push(E,b,T)}this.setIndex(d),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(y,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
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
#endif`,Pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wv=`#define PI 3.141592653589793
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
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qv=`vec3 transformedNormal = objectNormal;
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
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`
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
}`,Qv=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,C1=`#define DISTANCE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`uniform float scale;
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
}`,L1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,W1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,J1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ev,alphahash_pars_fragment:Mv,alphamap_fragment:bv,alphamap_pars_fragment:Sv,alphatest_fragment:wv,alphatest_pars_fragment:Tv,aomap_fragment:Av,aomap_pars_fragment:Rv,batching_pars_vertex:Cv,batching_vertex:Pv,begin_vertex:Iv,beginnormal_vertex:Uv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Ov,color_fragment:zv,color_pars_fragment:Bv,color_pars_vertex:Vv,color_vertex:Gv,common:Wv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:$v,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:jv,envmap_fragment:Qv,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:dg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:ug,lights_pars_begin:fg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:vg,lights_phong_pars_fragment:gg,lights_physical_fragment:xg,lights_physical_pars_fragment:yg,lights_fragment_begin:_g,lights_fragment_maps:Eg,lights_fragment_end:Mg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Tg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Lg,morphcolor_vertex:Dg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Fg,morphtarget_vertex:Hg,normal_fragment_begin:kg,normal_fragment_maps:Og,normal_pars_fragment:zg,normal_pars_vertex:Bg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Yg,opaque_fragment:$g,packing:Kg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:s1,shadowmask_pars_fragment:r1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:h1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:d1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:v1,uv_pars_vertex:g1,uv_vertex:x1,worldpos_vertex:y1,background_vert:_1,background_frag:E1,backgroundCube_vert:M1,backgroundCube_frag:b1,cube_vert:S1,cube_frag:w1,depth_vert:T1,depth_frag:A1,distanceRGBA_vert:R1,distanceRGBA_frag:C1,equirect_vert:P1,equirect_frag:I1,linedashed_vert:U1,linedashed_frag:L1,meshbasic_vert:D1,meshbasic_frag:N1,meshlambert_vert:F1,meshlambert_frag:H1,meshmatcap_vert:k1,meshmatcap_frag:O1,meshnormal_vert:z1,meshnormal_frag:B1,meshphong_vert:V1,meshphong_frag:G1,meshphysical_vert:W1,meshphysical_frag:X1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:$1,points_frag:K1,shadow_vert:Z1,shadow_frag:J1,sprite_vert:j1,sprite_frag:Q1},me={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},hi={basic:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:_n([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:_n([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new we(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:_n([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:_n([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:_n([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:_n([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:_n([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:_n([me.lights,me.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};hi.physical={uniforms:_n([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var ma={r:0,b:0,g:0},vs=new Qt,ex=new je;function tx(i,e,t,n,s,r,a){let o=new we(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?t:e).get(g)),g}function y(_){let g=!1,E=v(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,g){let E=v(g);E&&(E.isCubeTexture||E.mapping===rl)?(h===void 0&&(h=new V(new Mt(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:vr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(g.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(vs)),h.material.toneMapped=vt.getTransfer(E.colorSpace)!==Rt,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new V(new _e(2,2),new oe({name:"BackgroundMaterial",uniforms:vr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=vt.getTransfer(E.colorSpace)!==Rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,g){_.getRGB(ma,ed(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:y,addToRenderList:m}}function nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,M,L,F,k){let K=!1,O=u(F,L,M);r!==O&&(r=O,c(r.object)),K=d(x,F,L,k),K&&v(x,F,L,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(x,M,L,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,M,L){let F=L.wireframe===!0,k=n[x.id];k===void 0&&(k={},n[x.id]=k);let K=k[M.id];K===void 0&&(K={},k[M.id]=K);let O=K[F];return O===void 0&&(O=f(l()),K[F]=O),O}function f(x){let M=[],L=[],F=[];for(let k=0;k<t;k++)M[k]=0,L[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,M,L,F){let k=r.attributes,K=M.attributes,O=0,ne=L.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let he=k[Y],ve=K[Y];if(ve===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function v(x,M,L,F){let k={},K=M.attributes,O=0,ne=L.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let he=K[Y];he===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));let ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),k[Y]=ve,O++}r.attributes=k,r.attributesNum=O,r.index=F}function y(){let x=r.newAttributes;for(let M=0,L=x.length;M<L;M++)x[M]=0}function m(x){p(x,0)}function p(x,M){let L=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;L[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),k[x]!==M&&(i.vertexAttribDivisor(x,M),k[x]=M)}function _(){let x=r.newAttributes,M=r.enabledAttributes;for(let L=0,F=M.length;L<F;L++)M[L]!==x[L]&&(i.disableVertexAttribArray(L),M[L]=0)}function g(x,M,L,F,k,K,O){O===!0?i.vertexAttribIPointer(x,M,L,k,K):i.vertexAttribPointer(x,M,L,F,k,K)}function E(x,M,L,F){y();let k=F.attributes,K=L.getAttributes(),O=M.defaultAttributeValues;for(let ne in K){let Y=K[ne];if(Y.location>=0){let pe=k[ne];if(pe===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){let he=pe.normalized,ve=pe.itemSize,Ze=e.get(pe);if(Ze===void 0)continue;let xe=Ze.buffer,X=Ze.type,j=Ze.bytesPerElement,de=X===i.INT||X===i.UNSIGNED_INT||pe.gpuType===Su;if(pe.isInterleavedBufferAttribute){let Z=pe.data,q=Z.stride,ee=pe.offset;if(Z.isInstancedInterleavedBuffer){for(let ue=0;ue<Y.locationSize;ue++)p(Y.location+ue,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<Y.locationSize;ue++)m(Y.location+ue);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ue=0;ue<Y.locationSize;ue++)g(Y.location+ue,ve/Y.locationSize,X,he,q*j,(ee+ve/Y.locationSize*ue)*j,de)}else{if(pe.isInstancedBufferAttribute){for(let Z=0;Z<Y.locationSize;Z++)p(Y.location+Z,pe.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Z=0;Z<Y.locationSize;Z++)m(Y.location+Z);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Z=0;Z<Y.locationSize;Z++)g(Y.location+Z,ve/Y.locationSize,X,he,ve*j,ve/Y.locationSize*Z*j,de)}}else if(O!==void 0){let he=O[ne];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}_()}function b(){C();for(let x in n){let M=n[x];for(let L in M){let F=M[L];for(let k in F)h(F[k].object),delete F[k];delete M[L]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let M=n[x.id];for(let L in M){let F=M[L];for(let k in F)h(F[k].object),delete F[k];delete M[L]}delete n[x.id]}function S(x){for(let M in n){let L=n[M];if(L[x.id]===void 0)continue;let F=L[x.id];for(let k in F)h(F[k].object),delete F[k];delete L[x.id]}}function C(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function ix(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let y=0;y<u;y++)v+=h[y];for(let y=0;y<f.length;y++)t.update(v,n,f[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==En&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ii&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==fi&&!C)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:b,maxSamples:T}}function rx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ri,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let v=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,g=_*4,E=p.clippingState||null;l.value=E,E=h(v,f,g,d);for(let b=0;b!==g;++b)E[b]=t[b];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,v){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,v!==!0||m===null){let p=d+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,E=d;g!==y;++g,E+=4)a.copy(u[g]).applyMatrix4(_,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ox(i){let e=new WeakMap;function t(a,o){return o===ah?a.mapping=fr:o===lh&&(a.mapping=dr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ah||o===lh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Vh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zi=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ar=4,sf=[.125,.215,.35,.446,.526,.582],_s=20,Bc=new Zi,rf=new we,Vc=null,Gc=0,Wc=0,Xc=!1,xs=(1+Math.sqrt(5))/2,tr=1/xs,of=[new A(-xs,tr,0),new A(xs,tr,0),new A(-tr,0,xs),new A(tr,0,xs),new A(0,xs,-tr),new A(0,xs,tr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ts,format:En,colorSpace:vi,depthBuffer:!1},s=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(r)),this._blurMaterial=lx(r,e,t)}return s}_compileMaterial(e){let t=new V(this._lodPlanes[0],e);this._renderer.compile(t,Bc)}_sceneToCubeUV(e,t,n,s){let o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(rf),h.toneMapping=di,h.autoClear=!1;let d=new Tt({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),v=new V(new Mt,d),y=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,y=!0):(d.color.copy(rf),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let g=this._cubeSize;va(s,_*g,p>2?g:0,g,g),h.setRenderTarget(s),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new V(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=of[(s-r-1)%of.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new V(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_s-1),y=r/v,m=isFinite(r)?1+Math.floor(h*y):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],_=0;for(let S=0;S<_s;++S){let C=S/y,U=Math.exp(-C*C/2);p.push(U),S===0?_+=U:S<m&&(_+=2*U)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-n;let E=this._sizeLods[s],b=3*E*(s>g-ar?s-g+ar:0),T=4*(this._cubeSize-E);va(t,b,T,3*E,2*E),l.setRenderTarget(t),l.render(u,Bc)}};function ax(i){let e=[],t=[],n=[],s=i,r=i-ar+1+sf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ar?l=sf[a-i+ar-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,y=3,m=2,p=1,_=new Float32Array(y*v*d),g=new Float32Array(m*v*d),E=new Float32Array(p*v*d);for(let T=0;T<d;T++){let S=T%3*2/3-1,C=T>2?0:-1,U=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];_.set(U,y*v*T),g.set(f,m*v*T);let x=[T,T,T,T,T,T];E.set(x,p*v*T)}let b=new Ge;b.setAttribute("position",new qe(_,y)),b.setAttribute("uv",new qe(g,m)),b.setAttribute("faceIndex",new qe(E,p)),e.push(b),s>ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(i,e,t){let n=new Nn(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lx(i,e,t){let n=new Float32Array(_s),s=new A(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function lf(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function cf(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}function cx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ah||l===lh,h=l===fr||l===dr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new mi(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new mi(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ia("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ux(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let y=f.morphAttributes[v];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let v in f)e.update(f[v],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let v in d){let y=d[v];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,v=u.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let g=0,E=_.length;g<E;g+=3){let b=_[g+0],T=_[g+1],S=_[g+2];f.push(b,T,T,S,S,b)}}else if(v!==void 0){let _=v.array;y=v.version;for(let g=0,E=_.length/3-1;g<E;g+=3){let b=g+0,T=g+1,S=g+2;f.push(b,T,T,S,S,b)}}else return;let m=new(jf(f)?Wa:Ga)(f,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fx(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*a,v),t.update(d,n,v))}function h(f,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];t.update(m,n,1)}function u(f,d,v,y){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,v);let p=0;for(let _=0;_<v;_++)p+=d[_];for(let _=0;_<y.length;_++)t.update(p,n,y[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function px(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let U=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],g=0;d===!0&&(g=1),v===!0&&(g=2),y===!0&&(g=3);let E=o.attributes.position.count*g,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let T=new Float32Array(E*b*4*u),S=new za(T,E,b,u);S.type=fi,S.needsUpdate=!0;let C=g*4;for(let x=0;x<u;x++){let M=m[x],L=p[x],F=_[x],k=E*b*4*x;for(let K=0;K<M.count;K++){let O=K*C;d===!0&&(s.fromBufferAttribute(M,K),T[k+O+0]=s.x,T[k+O+1]=s.y,T[k+O+2]=s.z,T[k+O+3]=0),v===!0&&(s.fromBufferAttribute(L,K),T[k+O+4]=s.x,T[k+O+5]=s.y,T[k+O+6]=s.z,T[k+O+7]=0),y===!0&&(s.fromBufferAttribute(F,K),T[k+O+8]=s.x,T[k+O+9]=s.y,T[k+O+10]=s.z,T[k+O+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new se(E,b)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function mx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ya=class extends fn{constructor(e,t,n,s,r,a,o,l,c,h=lr){if(h!==lr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lr&&(n=Ms),n===void 0&&h===mr&&(n=pr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nd=new fn,hf=new Ya(1,1),id=new za,sd=new zh,rd=new qa,uf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function al(i,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function _x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),Kt(t,n)}}function Ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),Kt(t,n)}}function Mx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Kt(t,n)}}function bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=Zf,r=hf):r=nd,t.setTexture2D(e||r,s)}function Ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sd,s)}function Lx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rd,s)}function Dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||id,s)}function Nx(i){switch(i){case 5126:return vx;case 35664:return gx;case 35665:return xx;case 35666:return yx;case 35674:return _x;case 35675:return Ex;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return wx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Fx(i,e){i.uniform1fv(this.addr,e)}function Hx(i,e){let t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function kx(i,e){let t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function Ox(i,e){let t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function zx(i,e){let t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bx(i,e){let t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vx(i,e){let t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gx(i,e){i.uniform1iv(this.addr,e)}function Wx(i,e){i.uniform2iv(this.addr,e)}function Xx(i,e){i.uniform3iv(this.addr,e)}function qx(i,e){i.uniform4iv(this.addr,e)}function Yx(i,e){i.uniform1uiv(this.addr,e)}function $x(i,e){i.uniform2uiv(this.addr,e)}function Kx(i,e){i.uniform3uiv(this.addr,e)}function Zx(i,e){i.uniform4uiv(this.addr,e)}function Jx(i,e,t){let n=this.cache,s=e.length,r=al(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nd,r[a])}function jx(i,e,t){let n=this.cache,s=e.length,r=al(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sd,r[a])}function Qx(i,e,t){let n=this.cache,s=e.length,r=al(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rd,r[a])}function ey(i,e,t){let n=this.cache,s=e.length,r=al(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||id,r[a])}function ty(i){switch(i){case 5126:return Fx;case 35664:return Hx;case 35665:return kx;case 35666:return Ox;case 35674:return zx;case 35675:return Bx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return $x;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return ey}}var Gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}},Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},Xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function vf(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){let n=i.name,s=n.length;for(qc.lastIndex=0;;){let r=qc.exec(n),a=qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vf(t,c===void 0?new Gh(o,i,e):new Wh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Xh(o),vf(t,u)),t=u}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ny(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iy=37297,sy=0;function ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function oy(i){let e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i),n;switch(e===t?n="":e===Na&&t===Da?n="LinearDisplayP3ToLinearSRGB":e===Da&&t===Na&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case ol:return[n,"LinearTransferOETF"];case un:case Iu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ry(i.getShaderSource(e),a)}else return s}function ay(i,e){let t=oy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ly(i,e){let t;switch(e){case Um:t="Linear";break;case Lm:t="Reinhard";break;case Dm:t="Cineon";break;case Nm:t="ACESFilmic";break;case Hm:t="AgX";break;case km:t="Neutral";break;case Fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ga=new A;function cy(){vt.getLuminanceCoefficients(ga);let i=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function co(i){return i!==""}function yf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(dy,my)}var py=new Map;function my(i,e){let t=et[e];if(t===void 0){let n=py.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(vy,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function xy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function yy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case Pm:e="ENVMAP_BLENDING_MIX";break;case Im:e="ENVMAP_BLENDING_ADD";break}return e}function My(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function by(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=xy(t),c=yy(t),h=_y(t),u=Ey(t),f=My(t),d=hy(t),v=uy(r),y=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?et.tonemapping_pars_fragment:"",t.toneMapping!==di?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),a=qh(a),a=yf(a,t),a=_f(a,t),o=qh(o),o=yf(o,t),o=_f(o,t),a=Ef(a),o=Ef(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===O0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===O0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=_+m+a,E=_+p+o,b=gf(s,s.VERTEX_SHADER,g),T=gf(s,s.FRAGMENT_SHADER,E);s.attachShader(y,b),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function S(M){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(b).trim(),k=s.getShaderInfoLog(T).trim(),K=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,T);else{let ne=xf(s,b,"vertex"),Y=xf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+ne+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||k==="")&&(O=!1);O&&(M.diagnostics={runnable:K,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(b),s.deleteShader(T),C=new hr(s,y),U=fy(s,y)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let U;this.getAttributes=function(){return U===void 0&&S(this),U};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,iy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}var Sy=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $h(e),t.set(e,n)),n}},$h=class{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}};function wy(i,e,t,n,s,r,a){let o=new Va,l=new Yh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,v=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,L,F,k){let K=F.fog,O=k.geometry,ne=x.isMeshStandardMaterial?F.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||ne),pe=Y&&Y.mapping===rl?Y.image.height:null,he=y[x.type];x.precision!==null&&(v=s.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));let ve=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ze=ve!==void 0?ve.length:0,xe=0;O.morphAttributes.position!==void 0&&(xe=1),O.morphAttributes.normal!==void 0&&(xe=2),O.morphAttributes.color!==void 0&&(xe=3);let X,j,de,Z;if(he){let An=hi[he];X=An.vertexShader,j=An.fragmentShader}else X=x.vertexShader,j=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let q=i.getRenderTarget(),ee=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,ye=!!x.map,He=!!x.matcap,I=!!Y,dt=!!x.aoMap,ke=!!x.lightMap,Qe=!!x.bumpMap,ze=!!x.normalMap,ct=!!x.displacementMap,Be=!!x.emissiveMap,P=!!x.metalnessMap,w=!!x.roughnessMap,z=x.anisotropy>0,Q=x.clearcoat>0,ie=x.dispersion>0,J=x.iridescence>0,Ue=x.sheen>0,ge=x.transmission>0,Te=z&&!!x.anisotropyMap,ht=Q&&!!x.clearcoatMap,le=Q&&!!x.clearcoatNormalMap,Ae=Q&&!!x.clearcoatRoughnessMap,$e=J&&!!x.iridescenceMap,Ke=J&&!!x.iridescenceThicknessMap,Re=Ue&&!!x.sheenColorMap,ot=Ue&&!!x.sheenRoughnessMap,Je=!!x.specularMap,wt=!!x.specularColorMap,D=!!x.specularIntensityMap,be=ge&&!!x.transmissionMap,$=ge&&!!x.thicknessMap,te=!!x.gradientMap,Ee=!!x.alphaMap,Se=x.alphaTest>0,lt=!!x.alphaHash,Bt=!!x.extensions,Tn=di;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tn=i.toneMapping);let ft={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:j,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:ue,batchingColor:ue&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:vi,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:He,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:pe,aoMap:dt,lightMap:ke,bumpMap:Qe,normalMap:ze,displacementMap:d&&ct,emissiveMap:Be,normalMapObjectSpace:ze&&x.normalMapType===Vm,normalMapTangentSpace:ze&&x.normalMapType===Kf,metalnessMap:P,roughnessMap:w,anisotropy:z,anisotropyMap:Te,clearcoat:Q,clearcoatMap:ht,clearcoatNormalMap:le,clearcoatRoughnessMap:Ae,dispersion:ie,iridescence:J,iridescenceMap:$e,iridescenceThicknessMap:Ke,sheen:Ue,sheenColorMap:Re,sheenRoughnessMap:ot,specularMap:Je,specularColorMap:wt,specularIntensityMap:D,transmission:ge,transmissionMap:be,thicknessMap:$,gradientMap:te,opaque:x.transparent===!1&&x.blending===Vn&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Se,alphaHash:lt,combine:x.combine,mapUv:ye&&m(x.map.channel),aoMapUv:dt&&m(x.aoMap.channel),lightMapUv:ke&&m(x.lightMap.channel),bumpMapUv:Qe&&m(x.bumpMap.channel),normalMapUv:ze&&m(x.normalMap.channel),displacementMapUv:ct&&m(x.displacementMap.channel),emissiveMapUv:Be&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:Te&&m(x.anisotropyMap.channel),clearcoatMapUv:ht&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ot&&m(x.sheenRoughnessMap.channel),specularMapUv:Je&&m(x.specularMap.channel),specularColorMapUv:wt&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:be&&m(x.transmissionMap.channel),thicknessMapUv:$&&m(x.thicknessMap.channel),alphaMapUv:Ee&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ze||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(ye||Ee),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tn,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===it,flipSided:x.side===_t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Bt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&x.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(M,x),E(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),x.push(o.mask)}function b(x){let M=y[x.type],L;if(M){let F=hi[M];L=mv.clone(F.uniforms)}else L=x.uniforms;return L}function T(x,M){let L;for(let F=0,k=h.length;F<k;F++){let K=h[F];if(K.cacheKey===M){L=K,++L.usedTimes;break}}return L===void 0&&(L=new by(i,M,x,r),h.push(L)),L}function S(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function C(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:b,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:U}}function Ty(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ay(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,v,y,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:y,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function o(u,f,d,v,y,m){let p=a(u,f,d,v,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,v,y,m){let p=a(u,f,d,v,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Ay),n.length>1&&n.sort(f||bf),s.length>1&&s.sort(f||bf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ry(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Sf,i.set(n,[a])):s>=r.length?(a=new Sf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new we};break;case"SpotLight":t={position:new A,direction:new A,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Iy=0;function Uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ly(i){let e=new Cy,t=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new je,a=new je;function o(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,v=0,y=0,m=0,p=0,_=0,g=0,E=0,b=0,T=0,S=0;c.sort(Uy);for(let U=0,x=c.length;U<x;U++){let M=c[U],L=M.color,F=M.intensity,k=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=L.r*F,u+=L.g*F,f+=L.b*F;else if(M.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(M.sh.coefficients[O],F);S++}else if(M.isDirectionalLight){let O=e.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let ne=M.shadow,Y=t.get(M);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=M.shadow.matrix,_++}n.directional[d]=O,d++}else if(M.isSpotLight){let O=e.get(M);O.position.setFromMatrixPosition(M.matrixWorld),O.color.copy(L).multiplyScalar(F),O.distance=k,O.coneCos=Math.cos(M.angle),O.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),O.decay=M.decay,n.spot[y]=O;let ne=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,ne.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[y]=ne.matrix,M.castShadow){let Y=t.get(M);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=K,E++}y++}else if(M.isRectAreaLight){let O=e.get(M);O.color.copy(L).multiplyScalar(F),O.halfWidth.set(M.width*.5,0,0),O.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=O,m++}else if(M.isPointLight){let O=e.get(M);if(O.color.copy(M.color).multiplyScalar(M.intensity),O.distance=M.distance,O.decay=M.decay,M.castShadow){let ne=M.shadow,Y=t.get(M);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,Y.shadowCameraNear=ne.camera.near,Y.shadowCameraFar=ne.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=M.shadow.matrix,g++}n.point[v]=O,v++}else if(M.isHemisphereLight){let O=e.get(M);O.skyColor.copy(M.color).multiplyScalar(F),O.groundColor.copy(M.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==v||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==g||C.numSpotShadows!==E||C.numSpotMaps!==b||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=E+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,C.directionalLength=d,C.pointLength=v,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=g,C.numSpotShadows=E,C.numSpotMaps=b,C.numLightProbes=S,n.version=Iy++)}function l(c,h){let u=0,f=0,d=0,v=0,y=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let g=c[p];if(g.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(g.isSpotLight){let E=n.spot[d];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(g.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(g.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(g.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){let E=n.hemi[y];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function wf(i){let e=new Ly(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wf(i),e.set(s,[o])):r>=a.length?(o=new wf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kh=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zh=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new mo,s=new se,r=new se,a=new nt,o=new Kh({depthPacking:Bm}),l=new Zh,c={},h=t.maxTextureSize,u={[pi]:_t,[_t]:pi,[it]:it},f=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new V(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let p=this.type;this.render=function(T,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let U=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(qi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==Ai&&this.type===Ai,k=p===Ai&&this.type!==Ai;for(let K=0,O=T.length;K<O;K++){let ne=T[K],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let pe=Y.getFrameExtents();if(s.multiply(pe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||k===!0){let ve=this.type!==Ai?{minFilter:Rn,magFilter:Rn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nn(s.x,s.y,ve),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let he=Y.getViewportCount();for(let ve=0;ve<he;ve++){let Ze=Y.getViewport(ve);a.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),L.viewport(a),Y.updateMatrices(ne,ve),n=Y.getFrustum(),E(S,C,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Ai&&_(Y,C),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,x,M)};function _(T,S){let C=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,C,f,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,C,d,y,null)}function g(T,S,C,U){let x=null,M=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)x=M;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=x.uuid,F=S.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let K=k[F];K===void 0&&(K=x.clone(),k[F]=K,S.addEventListener("dispose",b)),x=K}if(x.visible=S.visible,x.wireframe=S.wireframe,U===Ai?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let L=i.properties.get(x);L.light=C}return x}function E(T,S,C,U,x){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let F=e.update(T),k=T.material;if(Array.isArray(k)){let K=F.groups;for(let O=0,ne=K.length;O<ne;O++){let Y=K[O],pe=k[Y.materialIndex];if(pe&&pe.visible){let he=g(T,pe,U,x);T.onBeforeShadow(i,T,S,C,F,he,Y),i.renderBufferDirect(C,null,F,he,T,Y),T.onAfterShadow(i,T,S,C,F,he,Y)}}}else if(k.visible){let K=g(T,k,U,x);T.onBeforeShadow(i,T,S,C,F,K,null),i.renderBufferDirect(C,null,F,K,T,null),T.onAfterShadow(i,T,S,C,F,K,null)}}let L=T.children;for(let F=0,k=L.length;F<k;F++)E(L[F],S,C,U,x)}function b(T){T.target.removeEventListener("dispose",b);for(let C in c){let U=c[C],x=T.target.uuid;x in U&&(U[x].dispose(),delete U[x])}}}var ky={[eh]:th,[nh]:rh,[ih]:oh,[ur]:sh,[th]:eh,[rh]:nh,[oh]:ih,[sh]:ur};function Oy(i){function e(){let D=!1,be=new nt,$=null,te=new nt(0,0,0,0);return{setMask:function(Ee){$!==Ee&&!D&&(i.colorMask(Ee,Ee,Ee,Ee),$=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,Se,lt,Bt,Tn){Tn===!0&&(Ee*=Bt,Se*=Bt,lt*=Bt),be.set(Ee,Se,lt,Bt),te.equals(be)===!1&&(i.clearColor(Ee,Se,lt,Bt),te.copy(be))},reset:function(){D=!1,$=null,te.set(-1,0,0,0)}}}function t(){let D=!1,be=!1,$=null,te=null,Ee=null;return{setReversed:function(Se){be=Se},setTest:function(Se){Se?de(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Se){$!==Se&&!D&&(i.depthMask(Se),$=Se)},setFunc:function(Se){if(be&&(Se=ky[Se]),te!==Se){switch(Se){case eh:i.depthFunc(i.NEVER);break;case th:i.depthFunc(i.ALWAYS);break;case nh:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case ih:i.depthFunc(i.EQUAL);break;case sh:i.depthFunc(i.GEQUAL);break;case rh:i.depthFunc(i.GREATER);break;case oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Se}},setLocked:function(Se){D=Se},setClear:function(Se){Ee!==Se&&(i.clearDepth(Se),Ee=Se)},reset:function(){D=!1,$=null,te=null,Ee=null}}}function n(){let D=!1,be=null,$=null,te=null,Ee=null,Se=null,lt=null,Bt=null,Tn=null;return{setTest:function(ft){D||(ft?de(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(ft){be!==ft&&!D&&(i.stencilMask(ft),be=ft)},setFunc:function(ft,An,Ei){($!==ft||te!==An||Ee!==Ei)&&(i.stencilFunc(ft,An,Ei),$=ft,te=An,Ee=Ei)},setOp:function(ft,An,Ei){(Se!==ft||lt!==An||Bt!==Ei)&&(i.stencilOp(ft,An,Ei),Se=ft,lt=An,Bt=Ei)},setLocked:function(ft){D=ft},setClear:function(ft){Tn!==ft&&(i.clearStencil(ft),Tn=ft)},reset:function(){D=!1,be=null,$=null,te=null,Ee=null,Se=null,lt=null,Bt=null,Tn=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,v=!1,y=null,m=null,p=null,_=null,g=null,E=null,b=null,T=new we(0,0,0),S=0,C=!1,U=null,x=null,M=null,L=null,F=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,O=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ne)[1]),K=O>=1):ne.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),K=O>=2);let Y=null,pe={},he=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ze=new nt().fromArray(he),xe=new nt().fromArray(ve);function X(D,be,$,te){let Ee=new Uint8Array(4),Se=i.createTexture();i.bindTexture(D,Se),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<$;lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(be+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Se}let j={};j[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(i.DEPTH_TEST),r.setFunc(ur),ke(!1),Qe(U0),de(i.CULL_FACE),I(qi);function de(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function Z(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function q(D,be){return h[D]!==be?(i.bindFramebuffer(D,be),h[D]=be,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ee(D,be){let $=f,te=!1;if(D){$=u.get(be),$===void 0&&($=[],u.set(be,$));let Ee=D.textures;if($.length!==Ee.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,lt=Ee.length;Se<lt;Se++)$[Se]=i.COLOR_ATTACHMENT0+Se;$.length=Ee.length,te=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,te=!0);te&&i.drawBuffers($)}function ue(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let ye={[ys]:i.FUNC_ADD,[pm]:i.FUNC_SUBTRACT,[mm]:i.FUNC_REVERSE_SUBTRACT};ye[vm]=i.MIN,ye[gm]=i.MAX;let He={[xm]:i.ZERO,[yo]:i.ONE,[ym]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[wm]:i.SRC_ALPHA_SATURATE,[bm]:i.DST_COLOR,[Em]:i.DST_ALPHA,[_m]:i.ONE_MINUS_SRC_COLOR,[Es]:i.ONE_MINUS_SRC_ALPHA,[Sm]:i.ONE_MINUS_DST_COLOR,[Mm]:i.ONE_MINUS_DST_ALPHA,[Tm]:i.CONSTANT_COLOR,[Am]:i.ONE_MINUS_CONSTANT_COLOR,[Rm]:i.CONSTANT_ALPHA,[Cm]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,be,$,te,Ee,Se,lt,Bt,Tn,ft){if(D===qi){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),D!==xo){if(D!==y||ft!==C){if((m!==ys||g!==ys)&&(i.blendEquation(i.FUNC_ADD),m=ys,g=ys),ft)switch(D){case Vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case L0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case D0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case L0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case D0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,_=null,E=null,b=null,T.set(0,0,0),S=0,y=D,C=ft}return}Ee=Ee||be,Se=Se||$,lt=lt||te,(be!==m||Ee!==g)&&(i.blendEquationSeparate(ye[be],ye[Ee]),m=be,g=Ee),($!==p||te!==_||Se!==E||lt!==b)&&(i.blendFuncSeparate(He[$],He[te],He[Se],He[lt]),p=$,_=te,E=Se,b=lt),(Bt.equals(T)===!1||Tn!==S)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Tn),T.copy(Bt),S=Tn),y=D,C=!1}function dt(D,be){D.side===it?Z(i.CULL_FACE):de(i.CULL_FACE);let $=D.side===_t;be&&($=!$),ke($),D.blending===Vn&&D.transparent===!1?I(qi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function Qe(D){D!==um?(de(i.CULL_FACE),D!==x&&(D===U0?i.cullFace(i.BACK):D===fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),x=D}function ze(D){D!==M&&(K&&i.lineWidth(D),M=D)}function ct(D,be,$){D?(de(i.POLYGON_OFFSET_FILL),(L!==be||F!==$)&&(i.polygonOffset(be,$),L=be,F=$)):Z(i.POLYGON_OFFSET_FILL)}function Be(D){D?de(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function P(D){D===void 0&&(D=i.TEXTURE0+k-1),Y!==D&&(i.activeTexture(D),Y=D)}function w(D,be,$){$===void 0&&(Y===null?$=i.TEXTURE0+k-1:$=Y);let te=pe[$];te===void 0&&(te={type:void 0,texture:void 0},pe[$]=te),(te.type!==D||te.texture!==be)&&(Y!==$&&(i.activeTexture($),Y=$),i.bindTexture(D,be||j[D]),te.type=D,te.texture=be)}function z(){let D=pe[Y];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(D){Ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Re(D){xe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function ot(D,be){let $=l.get(be);$===void 0&&($=new WeakMap,l.set(be,$));let te=$.get(D);te===void 0&&(te=i.getUniformBlockIndex(be,D.name),$.set(D,te))}function Je(D,be){let te=l.get(be).get(D);o.get(be)!==te&&(i.uniformBlockBinding(be,te,D.__bindingPointIndex),o.set(be,te))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,pe={},h={},u=new WeakMap,f=[],d=null,v=!1,y=null,m=null,p=null,_=null,g=null,E=null,b=null,T=new we(0,0,0),S=0,C=!1,U=null,x=null,M=null,L=null,F=null,Ze.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:de,disable:Z,bindFramebuffer:q,drawBuffers:ee,useProgram:ue,setBlending:I,setMaterial:dt,setFlipSided:ke,setCullFace:Qe,setLineWidth:ze,setPolygonOffset:ct,setScissorTest:Be,activeTexture:P,bindTexture:w,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:Ae,texImage3D:$e,updateUBOMapping:ot,uniformBlockBinding:Je,texStorage2D:ht,texStorage3D:le,texSubImage2D:J,texSubImage3D:Ue,compressedTexSubImage2D:ge,compressedTexSubImage3D:Te,scissor:Ke,viewport:Re,reset:wt}}function Tf(i,e,t,n){let s=zy(n);switch(t){case Gf:return i*e;case Xf:return i*e;case qf:return i*e*2;case Au:return i*e/s.components*s.byteLength;case Ru:return i*e/s.components*s.byteLength;case Yf:return i*e*2/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case Wf:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case Pu:return i*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uh:case dh:return Math.max(i,16)*Math.max(e,8)/4;case hh:case fh:return Math.max(i,8)*Math.max(e,8)/2;case ph:case mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case Ih:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $f:case Lh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dh:case Nh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(i){switch(i){case ii:case zf:return{byteLength:1,components:1};case po:case Bf:case Ts:return{byteLength:2,components:1};case wu:case Tu:return{byteLength:2,components:4};case Ms:case Su:case fi:return{byteLength:4,components:1};case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function By(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return d?new OffscreenCanvas(P,w):ka("canvas")}function y(P,w,z){let Q=1,ie=Be(P);if((ie.width>z||ie.height>z)&&(Q=z/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(Q*ie.width),Ue=Math.floor(Q*ie.height);u===void 0&&(u=v(J,Ue));let ge=w?v(J,Ue):u;return ge.width=J,ge.height=Ue,ge.getContext("2d").drawImage(P,0,0,J,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ue+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Rn&&P.minFilter!==It}function p(P){i.generateMipmap(P)}function _(P,w,z,Q,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),w===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),w===i.RGBA){let Ue=ie?La:vt.getTransfer(Q);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Ue===Rt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(P,w){let z;return P?w===null||w===Ms||w===pr?z=i.DEPTH24_STENCIL8:w===fi?z=i.DEPTH32F_STENCIL8:w===po&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===pr?z=i.DEPTH_COMPONENT24:w===fi?z=i.DEPTH_COMPONENT32F:w===po&&(z=i.DEPTH_COMPONENT16),z}function E(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==It?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function b(P){let w=P.target;w.removeEventListener("dispose",b),S(w),w.isVideoTexture&&h.delete(w)}function T(P){let w=P.target;w.removeEventListener("dispose",T),U(w)}function S(P){let w=n.get(P);if(w.__webglInit===void 0)return;let z=P.source,Q=f.get(z);if(Q){let ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(P),Object.keys(Q).length===0&&f.delete(z)}n.remove(P)}function C(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let z=P.source,Q=f.get(z);delete Q[w.__cacheKey],a.memory.textures--}function U(P){let w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ie=0;ie<w.__webglFramebuffer[Q].length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[Q][ie]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=P.textures;for(let Q=0,ie=z.length;Q<ie;Q++){let J=n.get(z[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Q])}n.remove(P)}let x=0;function M(){x=0}function L(){let P=x;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),x+=1,P}function F(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function k(P,w){let z=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,P,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function K(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){xe(z,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function O(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){xe(z,P,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function ne(P,w){let z=n.get(P);if(P.version>0&&z.__version!==P.version){X(z,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}let Y={[Pi]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ch]:i.MIRRORED_REPEAT},pe={[Rn]:i.NEAREST,[Om]:i.NEAREST_MIPMAP_NEAREST,[Jo]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[vc]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},he={[Gm]:i.NEVER,[Km]:i.ALWAYS,[Wm]:i.LESS,[Zf]:i.LEQUAL,[Xm]:i.EQUAL,[$m]:i.GEQUAL,[qm]:i.GREATER,[Ym]:i.NOTEQUAL};function ve(P,w){if(w.type===fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===It||w.magFilter===vc||w.magFilter===Jo||w.magFilter===ni||w.minFilter===It||w.minFilter===vc||w.minFilter===Jo||w.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Jo&&w.minFilter!==ni||w.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ze(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",b));let Q=w.source,ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));let J=F(w);if(J!==P.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[J].usedTimes++;let Ue=ie[P.__cacheKey];Ue!==void 0&&(ie[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&C(w)),P.__cacheKey=J,P.__webglTexture=ie[J].texture}return z}function xe(P,w,z){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);let ie=Ze(P,w),J=w.source;t.bindTexture(Q,P.__webglTexture,i.TEXTURE0+z);let Ue=n.get(J);if(J.version!==Ue.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);let ge=vt.getPrimaries(vt.workingColorSpace),Te=w.colorSpace===qt?null:vt.getPrimaries(w.colorSpace),ht=w.colorSpace===qt||ge===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let le=y(w.image,!1,s.maxTextureSize);le=ct(w,le);let Ae=r.convert(w.format,w.colorSpace),$e=r.convert(w.type),Ke=_(w.internalFormat,Ae,$e,w.colorSpace,w.isVideoTexture);ve(Q,w);let Re,ot=w.mipmaps,Je=w.isVideoTexture!==!0,wt=Ue.__version===void 0||ie===!0,D=J.dataReady,be=E(w,le);if(w.isDepthTexture)Ke=g(w.format===mr,w.type),wt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ke,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ke,le.width,le.height,0,Ae,$e,null));else if(w.isDataTexture)if(ot.length>0){Je&&wt&&t.texStorage2D(i.TEXTURE_2D,be,Ke,ot[0].width,ot[0].height);for(let $=0,te=ot.length;$<te;$++)Re=ot[$],Je?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,Ae,$e,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ke,Re.width,Re.height,0,Ae,$e,Re.data);w.generateMipmaps=!1}else Je?(wt&&t.texStorage2D(i.TEXTURE_2D,be,Ke,le.width,le.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Ae,$e,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,le.width,le.height,0,Ae,$e,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ke,ot[0].width,ot[0].height,le.depth);for(let $=0,te=ot.length;$<te;$++)if(Re=ot[$],w.format!==En)if(Ae!==null)if(Je){if(D)if(w.layerUpdates.size>0){let Ee=Tf(Re.width,Re.height,w.format,w.type);for(let Se of w.layerUpdates){let lt=Re.data.subarray(Se*Ee/Re.data.BYTES_PER_ELEMENT,(Se+1)*Ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Se,Re.width,Re.height,1,Ae,lt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,Ae,Re.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ke,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,le.depth,Ae,$e,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ke,Re.width,Re.height,le.depth,0,Ae,$e,Re.data)}else{Je&&wt&&t.texStorage2D(i.TEXTURE_2D,be,Ke,ot[0].width,ot[0].height);for(let $=0,te=ot.length;$<te;$++)Re=ot[$],w.format!==En?Ae!==null?Je?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re.width,Re.height,Ae,$e,Re.data):t.texImage2D(i.TEXTURE_2D,$,Ke,Re.width,Re.height,0,Ae,$e,Re.data)}else if(w.isDataArrayTexture)if(Je){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ke,le.width,le.height,le.depth),D)if(w.layerUpdates.size>0){let $=Tf(le.width,le.height,w.format,w.type);for(let te of w.layerUpdates){let Ee=le.data.subarray(te*$/le.data.BYTES_PER_ELEMENT,(te+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,Ae,$e,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,$e,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,le.width,le.height,le.depth,0,Ae,$e,le.data);else if(w.isData3DTexture)Je?(wt&&t.texStorage3D(i.TEXTURE_3D,be,Ke,le.width,le.height,le.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,$e,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,le.width,le.height,le.depth,0,Ae,$e,le.data);else if(w.isFramebufferTexture){if(wt)if(Je)t.texStorage2D(i.TEXTURE_2D,be,Ke,le.width,le.height);else{let $=le.width,te=le.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ke,$,te,0,Ae,$e,null),$>>=1,te>>=1}}else if(ot.length>0){if(Je&&wt){let $=Be(ot[0]);t.texStorage2D(i.TEXTURE_2D,be,Ke,$.width,$.height)}for(let $=0,te=ot.length;$<te;$++)Re=ot[$],Je?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ae,$e,Re):t.texImage2D(i.TEXTURE_2D,$,Ke,Ae,$e,Re);w.generateMipmaps=!1}else if(Je){if(wt){let $=Be(le);t.texStorage2D(i.TEXTURE_2D,be,Ke,$.width,$.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,$e,le)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Ae,$e,le);m(w)&&p(Q),Ue.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function X(P,w,z){if(w.image.length!==6)return;let Q=Ze(P,w),ie=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let J=n.get(ie);if(ie.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);let Ue=vt.getPrimaries(vt.workingColorSpace),ge=w.colorSpace===qt?null:vt.getPrimaries(w.colorSpace),Te=w.colorSpace===qt||Ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ht=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let te=0;te<6;te++)!ht&&!le?Ae[te]=y(w.image[te],!0,s.maxCubemapSize):Ae[te]=le?w.image[te].image:w.image[te],Ae[te]=ct(w,Ae[te]);let $e=Ae[0],Ke=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),ot=_(w.internalFormat,Ke,Re,w.colorSpace),Je=w.isVideoTexture!==!0,wt=J.__version===void 0||Q===!0,D=ie.dataReady,be=E(w,$e);ve(i.TEXTURE_CUBE_MAP,w);let $;if(ht){Je&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,ot,$e.width,$e.height);for(let te=0;te<6;te++){$=Ae[te].mipmaps;for(let Ee=0;Ee<$.length;Ee++){let Se=$[Ee];w.format!==En?Ke!==null?Je?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Ke,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,ot,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Ke,Re,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,ot,Se.width,Se.height,0,Ke,Re,Se.data)}}}else{if($=w.mipmaps,Je&&wt){$.length>0&&be++;let te=Be(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,ot,te.width,te.height)}for(let te=0;te<6;te++)if(le){Je?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae[te].width,Ae[te].height,Ke,Re,Ae[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ot,Ae[te].width,Ae[te].height,0,Ke,Re,Ae[te].data);for(let Ee=0;Ee<$.length;Ee++){let lt=$[Ee].image[te].image;Je?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,lt.width,lt.height,Ke,Re,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,ot,lt.width,lt.height,0,Ke,Re,lt.data)}}else{Je?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ke,Re,Ae[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ot,Ke,Re,Ae[te]);for(let Ee=0;Ee<$.length;Ee++){let Se=$[Ee];Je?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ke,Re,Se.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,ot,Ke,Re,Se.image[te])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),J.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function j(P,w,z,Q,ie,J){let Ue=r.convert(z.format,z.colorSpace),ge=r.convert(z.type),Te=_(z.internalFormat,Ue,ge,z.colorSpace);if(!n.get(w).__hasExternalTextures){let le=Math.max(1,w.width>>J),Ae=Math.max(1,w.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Te,le,Ae,w.depth,0,Ue,ge,null):t.texImage2D(ie,J,Te,le,Ae,0,Ue,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ie,n.get(z).__webglTexture,0,ke(w)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ie,n.get(z).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let Q=w.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=g(w.stencilBuffer,ie),Ue=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=ke(w);Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,J,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,P)}else{let Q=w.textures;for(let ie=0;ie<Q.length;ie++){let J=Q[ie],Ue=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),Te=_(J.internalFormat,Ue,ge,J.colorSpace),ht=ke(w);z&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Te,w.width,w.height):Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Te,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);let Q=n.get(w.depthTexture).__webglTexture,ie=ke(w);if(w.depthTexture.format===lr)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(w.depthTexture.format===mr)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function q(P){let w=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){let ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=Q}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,P)}else if(z){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),de(w.__webglDepthbuffer[Q],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),de(w.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(P,w,z){let Q=n.get(P);w!==void 0&&j(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&q(P)}function ue(P){let w=P.texture,z=n.get(P),Q=n.get(w);P.addEventListener("dispose",T);let ie=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ue=ie.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let Te=0;Te<w.mipmaps.length;Te++)z.__webglFramebuffer[ge][Te]=i.createFramebuffer()}else z.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)z.__webglFramebuffer[ge]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ge=0,Te=ie.length;ge<Te;ge++){let ht=n.get(ie[ge]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Qe(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){let Te=ie[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);let ht=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),Ae=_(Te.internalFormat,ht,le,Te.colorSpace,P.isXRRenderTarget===!0),$e=ke(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),de(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)j(z.__webglFramebuffer[ge][Te],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Te);else j(z.__webglFramebuffer[ge],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,Te=ie.length;ge<Te;ge++){let ht=ie[ge],le=n.get(ht);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ve(i.TEXTURE_2D,ht),j(z.__webglFramebuffer,P,ht,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(ht)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Q.__webglTexture),ve(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)j(z.__webglFramebuffer[Te],P,w,i.COLOR_ATTACHMENT0,ge,Te);else j(z.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ge,0);m(w)&&p(ge),t.unbindTexture()}P.depthBuffer&&q(P)}function ye(P){let w=P.textures;for(let z=0,Q=w.length;z<Q;z++){let ie=w[z];if(m(ie)){let J=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(ie).__webglTexture;t.bindTexture(J,Ue),p(J),t.unbindTexture()}}}let He=[],I=[];function dt(P){if(P.samples>0){if(Qe(P)===!1){let w=P.textures,z=P.width,Q=P.height,ie=i.COLOR_BUFFER_BIT,J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(P),ge=w.length>1;if(ge)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);let ht=n.get(w[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,ie,i.NEAREST),l===!0&&(He.length=0,I.length=0,He.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(J),I.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);let ht=n.get(w[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ke(P){return Math.min(s.maxSamples,P.samples)}function Qe(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function ct(P,w){let z=P.colorSpace,Q=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==vi&&z!==qt&&(vt.getTransfer(z)===Rt?(Q!==En||ie!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=O,this.setTextureCube=ne,this.rebindTextures=ee,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Qe}function Vy(i,e){function t(n,s=qt){let r,a=vt.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===wu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return i.BYTE;if(n===Bf)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===Su)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Gf)return i.ALPHA;if(n===Wf)return i.RGB;if(n===En)return i.RGBA;if(n===Xf)return i.LUMINANCE;if(n===qf)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===Ru)return i.RED_INTEGER;if(n===Yf)return i.RG;if(n===Cu)return i.RG_INTEGER;if(n===Pu)return i.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ra||n===Ca)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hh||n===uh||n===fh||n===dh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ph||n===mh||n===vh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ph||n===mh)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gh||n===xh||n===yh||n===_h||n===Eh||n===Mh||n===bh||n===Sh||n===wh||n===Th||n===Ah||n===Rh||n===Ch||n===Ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_h)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Th)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ah)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rh)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ch)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ph)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===Ih||n===Uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$f||n===Lh||n===Dh||n===Nh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jh=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},an=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gy={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`,jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oe({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new _e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qh=class extends $i{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null,y=new jh,m=t.getContextAttributes(),p=null,_=null,g=[],E=[],b=new se,T=null,S=new Xt;S.layers.enable(1),S.viewport=new nt;let C=new Xt;C.layers.enable(2),C.viewport=new nt;let U=[S,C],x=new Jh;x.layers.enable(1),x.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=g[X];return j===void 0&&(j=new ho,g[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=g[X];return j===void 0&&(j=new ho,g[X]=j),j.getGripSpace()},this.getHand=function(X){let j=g[X];return j===void 0&&(j=new ho,g[X]=j),j.getHandSpace()};function F(X){let j=E.indexOf(X.inputSource);if(j===-1)return;let de=g[j];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let X=0;X<g.length;X++){let j=E[X];j!==null&&(E[X]=null,g[X].disconnect(j))}M=null,L=null,y.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,_=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Nn(d.framebufferWidth,d.framebufferHeight,{format:En,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,de=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?mr:lr,de=m.stencil?pr:Ms);let q={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Nn(f.textureWidth,f.textureHeight,{format:En,type:ii,depthTexture:new Ya(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(X){for(let j=0;j<X.removed.length;j++){let de=X.removed[j],Z=E.indexOf(de);Z>=0&&(E[Z]=null,g[Z].disconnect(de))}for(let j=0;j<X.added.length;j++){let de=X.added[j],Z=E.indexOf(de);if(Z===-1){for(let ee=0;ee<g.length;ee++)if(ee>=E.length){E.push(de),Z=ee;break}else if(E[ee]===null){E[ee]=de,Z=ee;break}if(Z===-1)break}let q=g[Z];q&&q.connect(de)}}let O=new A,ne=new A;function Y(X,j,de){O.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);let Z=O.distanceTo(ne),q=j.projectionMatrix.elements,ee=de.projectionMatrix.elements,ue=q[14]/(q[10]-1),ye=q[14]/(q[10]+1),He=(q[9]+1)/q[5],I=(q[9]-1)/q[5],dt=(q[8]-1)/q[0],ke=(ee[8]+1)/ee[0],Qe=ue*dt,ze=ue*ke,ct=Z/(-dt+ke),Be=ct*-dt;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),q[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let P=ue+ct,w=ye+ct,z=Qe-Be,Q=ze+(Z-Be),ie=He*ye/w*P,J=I*ye/w*P;X.projectionMatrix.makePerspective(z,Q,ie,J,P,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pe(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,de=X.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(de=y.depthFar)),x.near=C.near=S.near=j,x.far=C.far=S.far=de,(M!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,L=x.far);let Z=X.parent,q=x.cameras;pe(x,Z);for(let ee=0;ee<q.length;ee++)pe(q[ee],Z);q.length===2?Y(x,S,C):x.projectionMatrix.copy(S.projectionMatrix),he(X,x,Z)};function he(X,j,de){de===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ha*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ve=null;function Ze(X,j){if(h=j.getViewerPose(c||a),v=j,h!==null){let de=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Z=!1;de.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let ee=0;ee<de.length;ee++){let ue=de[ee],ye=null;if(d!==null)ye=d.getViewport(ue);else{let I=u.getViewSubImage(f,ue);ye=I.viewport,ee===0&&(e.setRenderTargetTextures(_,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(_))}let He=U[ee];He===void 0&&(He=new Xt,He.layers.enable(ee),He.viewport=new nt,U[ee]=He),He.matrix.fromArray(ue.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ue.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ye.x,ye.y,ye.width,ye.height),ee===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(He)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")){let ee=u.getDepthInformation(de[0]);ee&&ee.isValid&&ee.texture&&y.init(e,ee,s.renderState)}}for(let de=0;de<g.length;de++){let Z=E[de],q=g[de];Z!==null&&q!==void 0&&q.update(Z,j,c||a)}ve&&ve(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}let xe=new td;xe.setAnimationLoop(Ze),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}},gs=new Qt,qy=new je;function Yy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ed(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,g,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,g):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),g=_.envMap,E=_.envMapRotation;g&&(m.envMap.value=g,gs.copy(E),gs.x*=-1,gs.y*=-1,gs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(gs)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=g*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $y(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){let E=g.program;n.uniformBlockBinding(_,E)}function c(_,g){let E=s[_.id];E===void 0&&(v(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",m));let b=g.program;n.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){let g=u();_.__bindingPointIndex=g;let E=i.createBuffer(),b=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let g=s[_.id],E=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let T=0,S=E.length;T<S;T++){let C=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,x=C.length;U<x;U++){let M=C[U];if(d(M,T,U,b)===!0){let L=M.__offset,F=Array.isArray(M.value)?M.value:[M.value],k=0;for(let K=0;K<F.length;K++){let O=F[K],ne=y(O);typeof O=="number"||typeof O=="boolean"?(M.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,L+k,M.__data)):O.isMatrix3?(M.__data[0]=O.elements[0],M.__data[1]=O.elements[1],M.__data[2]=O.elements[2],M.__data[3]=0,M.__data[4]=O.elements[3],M.__data[5]=O.elements[4],M.__data[6]=O.elements[5],M.__data[7]=0,M.__data[8]=O.elements[6],M.__data[9]=O.elements[7],M.__data[10]=O.elements[8],M.__data[11]=0):(O.toArray(M.__data,k),k+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,g,E,b){let T=_.value,S=g+"_"+E;if(b[S]===void 0)return typeof T=="number"||typeof T=="boolean"?b[S]=T:b[S]=T.clone(),!0;{let C=b[S];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[S]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function v(_){let g=_.uniforms,E=0,b=16;for(let S=0,C=g.length;S<C;S++){let U=Array.isArray(g[S])?g[S]:[g[S]];for(let x=0,M=U.length;x<M;x++){let L=U[x],F=Array.isArray(L.value)?L.value:[L.value];for(let k=0,K=F.length;k<K;k++){let O=F[k],ne=y(O),Y=E%b,pe=Y%ne.boundary,he=Y+pe;E+=pe,he!==0&&b-he<ne.storage&&(E+=b-he),L.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=ne.storage}}}let T=E%b;return T>0&&(E+=b-T),_.__size=E,_.__cache={},this}function y(_){let g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){let g=_.target;g.removeEventListener("dispose",m);let E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var $a=class{constructor(e={}){let{canvas:t=Jm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),v=new Int32Array(4),y=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=di,this.toneMappingExposure=1;let g=this,E=!1,b=0,T=0,S=null,C=-1,U=null,x=new nt,M=new nt,L=null,F=new we(0),k=0,K=t.width,O=t.height,ne=1,Y=null,pe=null,he=new nt(0,0,K,O),ve=new nt(0,0,K,O),Ze=!1,xe=new mo,X=!1,j=!1,de=new je,Z=new je,q=new A,ee=new nt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function He(){return S===null?ne:1}let I=n;function dt(R,N){return t.getContext(R,N)}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),I===null){let N="webgl2";if(I=dt(N,R),I===null)throw dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ke,Qe,ze,ct,Be,P,w,z,Q,ie,J,Ue,ge,Te,ht,le,Ae,$e,Ke,Re,ot,Je,wt,D;function be(){ke=new hx(I),ke.init(),Je=new Vy(I,ke),Qe=new sx(I,ke,e,Je),ze=new Oy(I),Qe.reverseDepthBuffer&&ze.buffers.depth.setReversed(!0),ct=new dx(I),Be=new Ty,P=new By(I,ke,ze,Be,Qe,Je,ct),w=new ox(g),z=new cx(g),Q=new _v(I),wt=new nx(I,Q),ie=new ux(I,Q,ct,wt),J=new mx(I,ie,Q,ct),Ke=new px(I,Qe,P),le=new rx(Be),Ue=new wy(g,w,z,ke,Qe,wt,le),ge=new Yy(g,Be),Te=new Ry,ht=new Dy(ke),$e=new tx(g,w,z,ze,J,f,l),Ae=new Hy(g,J,Qe),D=new $y(I,ct,Qe,ze),Re=new ix(I,ke,ct),ot=new fx(I,ke,ct),ct.programs=Ue.programs,g.capabilities=Qe,g.extensions=ke,g.properties=Be,g.renderLists=Te,g.shadowMap=Ae,g.state=ze,g.info=ct}be();let $=new Qh(g,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let R=ke.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ke.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(K,O,!1))},this.getSize=function(R){return R.set(K,O)},this.setSize=function(R,N,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,O=N,t.width=Math.floor(R*ne),t.height=Math.floor(N*ne),G===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(K*ne,O*ne).floor()},this.setDrawingBufferSize=function(R,N,G){K=R,O=N,ne=G,t.width=Math.floor(R*G),t.height=Math.floor(N*G),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,N,G,W){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,N,G,W),ze.viewport(x.copy(he).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,N,G,W){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,N,G,W),ze.scissor(M.copy(ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(R){ze.setScissorTest(Ze=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,N=!0,G=!0){let W=0;if(R){let H=!1;if(S!==null){let ce=S.texture.format;H=ce===Pu||ce===Cu||ce===Ru}if(H){let ce=S.texture.type,Me=ce===ii||ce===Ms||ce===po||ce===pr||ce===wu||ce===Tu,Ce=$e.getClearColor(),Ie=$e.getClearAlpha(),Xe=Ce.r,Ye=Ce.g,Le=Ce.b;Me?(d[0]=Xe,d[1]=Ye,d[2]=Le,d[3]=Ie,I.clearBufferuiv(I.COLOR,0,d)):(v[0]=Xe,v[1]=Ye,v[2]=Le,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Te.dispose(),ht.dispose(),Be.dispose(),w.dispose(),z.dispose(),J.dispose(),wt.dispose(),D.dispose(),Ue.dispose(),$.dispose(),$.removeEventListener("sessionstart",S0),$.removeEventListener("sessionend",w0),us.stop()};function te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let R=ct.autoReset,N=Ae.enabled,G=Ae.autoUpdate,W=Ae.needsUpdate,H=Ae.type;be(),ct.autoReset=R,Ae.enabled=N,Ae.autoUpdate=G,Ae.needsUpdate=W,Ae.type=H}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){let N=R.target;N.removeEventListener("dispose",lt),Bt(N)}function Bt(R){Tn(R),Be.remove(R)}function Tn(R){let N=Be.get(R).programs;N!==void 0&&(N.forEach(function(G){Ue.releaseProgram(G)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,G,W,H,ce){N===null&&(N=ue);let Me=H.isMesh&&H.matrixWorld.determinant()<0,Ce=rm(R,N,G,W,H);ze.setMaterial(W,Me);let Ie=G.index,Xe=1;if(W.wireframe===!0){if(Ie=ie.getWireframeAttribute(G),Ie===void 0)return;Xe=2}let Ye=G.drawRange,Le=G.attributes.position,yt=Ye.start*Xe,At=(Ye.start+Ye.count)*Xe;ce!==null&&(yt=Math.max(yt,ce.start*Xe),At=Math.min(At,(ce.start+ce.count)*Xe)),Ie!==null?(yt=Math.max(yt,0),At=Math.min(At,Ie.count)):Le!=null&&(yt=Math.max(yt,0),At=Math.min(At,Le.count));let Lt=At-yt;if(Lt<0||Lt===1/0)return;wt.setup(H,W,Ce,G,Ie);let In,pt=Re;if(Ie!==null&&(In=Q.get(Ie),pt=ot,pt.setIndex(In)),H.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*He()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(H.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),ze.setLineWidth(Ne*He()),H.isLineSegments?pt.setMode(I.LINES):H.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else H.isPoints?pt.setMode(I.POINTS):H.isSprite&&pt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ne=H._multiDrawStarts,rn=H._multiDrawCounts,mt=H._multiDrawCount,Jn=Ie?Q.get(Ie).bytesPerElement:1,Bs=Be.get(W).currentProgram.getUniforms();for(let Un=0;Un<mt;Un++)Bs.setValue(I,"_gl_DrawID",Un),pt.render(Ne[Un]/Jn,rn[Un])}else if(H.isInstancedMesh)pt.renderInstances(yt,Lt,H.count);else if(G.isInstancedBufferGeometry){let Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rn=Math.min(G.instanceCount,Ne);pt.renderInstances(yt,Lt,rn)}else pt.render(yt,Lt)};function ft(R,N,G){R.transparent===!0&&R.side===it&&R.forceSinglePass===!1?(R.side=_t,R.needsUpdate=!0,Zo(R,N,G),R.side=pi,R.needsUpdate=!0,Zo(R,N,G),R.side=it):Zo(R,N,G)}this.compile=function(R,N,G=null){G===null&&(G=R),m=ht.get(G),m.init(N),_.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==G&&R.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let W=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ce=H.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){let Ce=ce[Me];ft(Ce,G,H),W.add(Ce)}else ft(ce,G,H),W.add(ce)}),_.pop(),m=null,W},this.compileAsync=function(R,N,G=null){let W=this.compile(R,N,G);return new Promise(H=>{function ce(){if(W.forEach(function(Me){Be.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){H(R);return}setTimeout(ce,10)}ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let An=null;function Ei(R){An&&An(R)}function S0(){us.stop()}function w0(){us.start()}let us=new td;us.setAnimationLoop(Ei),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(R){An=R,$.setAnimationLoop(R),R===null?us.stop():us.start()},$.addEventListener("sessionstart",S0),$.addEventListener("sessionend",w0),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,N,S),m=ht.get(R,_.length),m.init(N),_.push(m),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),xe.setFromProjectionMatrix(Z),j=this.localClippingEnabled,X=le.init(this.clippingPlanes,j),y=Te.get(R,p.length),y.init(),p.push(y),$.enabled===!0&&$.isPresenting===!0){let ce=g.xr.getDepthSensingMesh();ce!==null&&fc(ce,N,-1/0,g.sortObjects)}fc(R,N,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(Y,pe),ye=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ye&&$e.addToRenderList(y,R),this.info.render.frame++,X===!0&&le.beginShadows();let G=m.state.shadowsArray;Ae.render(G,R,N),X===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=y.opaque,H=y.transmissive;if(m.setupLights(),N.isArrayCamera){let ce=N.cameras;if(H.length>0)for(let Me=0,Ce=ce.length;Me<Ce;Me++){let Ie=ce[Me];A0(W,H,R,Ie)}ye&&$e.render(R);for(let Me=0,Ce=ce.length;Me<Ce;Me++){let Ie=ce[Me];T0(y,R,Ie,Ie.viewport)}}else H.length>0&&A0(W,H,R,N),ye&&$e.render(R),T0(y,R,N);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(g,R,N),wt.resetDefaultState(),C=-1,U=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&le.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function fc(R,N,G,W){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xe.intersectsSprite(R)){W&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);let Me=J.update(R),Ce=R.material;Ce.visible&&y.push(R,Me,Ce,G,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xe.intersectsObject(R))){let Me=J.update(R),Ce=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ee.copy(Me.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Ce)){let Ie=Me.groups;for(let Xe=0,Ye=Ie.length;Xe<Ye;Xe++){let Le=Ie[Xe],yt=Ce[Le.materialIndex];yt&&yt.visible&&y.push(R,Me,yt,G,ee.z,Le)}}else Ce.visible&&y.push(R,Me,Ce,G,ee.z,null)}}let ce=R.children;for(let Me=0,Ce=ce.length;Me<Ce;Me++)fc(ce[Me],N,G,W)}function T0(R,N,G,W){let H=R.opaque,ce=R.transmissive,Me=R.transparent;m.setupLightsView(G),X===!0&&le.setGlobalState(g.clippingPlanes,G),W&&ze.viewport(x.copy(W)),H.length>0&&Ko(H,N,G),ce.length>0&&Ko(ce,N,G),Me.length>0&&Ko(Me,N,G),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function A0(R,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Nn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ts:ii,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let ce=m.state.transmissionRenderTarget[W.id],Me=W.viewport||x;ce.setSize(Me.z,Me.w);let Ce=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(F),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),ye&&$e.render(G);let Ie=g.toneMapping;g.toneMapping=di;let Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),X===!0&&le.setGlobalState(g.clippingPlanes,W),Ko(R,G,W),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Le=0,yt=N.length;Le<yt;Le++){let At=N[Le],Lt=At.object,In=At.geometry,pt=At.material,Ne=At.group;if(pt.side===it&&Lt.layers.test(W.layers)){let rn=pt.side;pt.side=_t,pt.needsUpdate=!0,R0(Lt,G,W,In,pt,Ne),pt.side=rn,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}g.setRenderTarget(Ce),g.setClearColor(F,k),Xe!==void 0&&(W.viewport=Xe),g.toneMapping=Ie}function Ko(R,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ce=R.length;H<ce;H++){let Me=R[H],Ce=Me.object,Ie=Me.geometry,Xe=W===null?Me.material:W,Ye=Me.group;Ce.layers.test(G.layers)&&R0(Ce,N,G,Ie,Xe,Ye)}}function R0(R,N,G,W,H,ce){R.onBeforeRender(g,N,G,W,H,ce),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(g,N,G,W,R,ce),H.transparent===!0&&H.side===it&&H.forceSinglePass===!1?(H.side=_t,H.needsUpdate=!0,g.renderBufferDirect(G,N,W,H,R,ce),H.side=pi,H.needsUpdate=!0,g.renderBufferDirect(G,N,W,H,R,ce),H.side=it):g.renderBufferDirect(G,N,W,H,R,ce),R.onAfterRender(g,N,G,W,H,ce)}function Zo(R,N,G){N.isScene!==!0&&(N=ue);let W=Be.get(R),H=m.state.lights,ce=m.state.shadowsArray,Me=H.state.version,Ce=Ue.getParameters(R,H.state,ce,N,G),Ie=Ue.getProgramCacheKey(Ce),Xe=W.programs;W.environment=R.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(R.isMeshStandardMaterial?z:w).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",lt),Xe=new Map,W.programs=Xe);let Ye=Xe.get(Ie);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Me)return P0(R,Ce),Ye}else Ce.uniforms=Ue.getUniforms(R),R.onBeforeCompile(Ce,g),Ye=Ue.acquireProgram(Ce,Ie),Xe.set(Ie,Ye),W.uniforms=Ce.uniforms;let Le=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=le.uniform),P0(R,Ce),W.needsLights=am(R),W.lightsStateVersion=Me,W.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function C0(R){if(R.uniformsList===null){let N=R.currentProgram.getUniforms();R.uniformsList=hr.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function P0(R,N){let G=Be.get(R);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function rm(R,N,G,W,H){N.isScene!==!0&&(N=ue),P.resetTextureUnits();let ce=N.fog,Me=W.isMeshStandardMaterial?N.environment:null,Ce=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vi,Ie=(W.isMeshStandardMaterial?z:w).get(W.envMap||Me),Xe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ye=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!G.morphAttributes.position,yt=!!G.morphAttributes.normal,At=!!G.morphAttributes.color,Lt=di;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=g.toneMapping);let In=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=In!==void 0?In.length:0,Ne=Be.get(W),rn=m.state.lights;if(X===!0&&(j===!0||R!==U)){let zn=R===U&&W.id===C;le.setState(W,R,zn)}let mt=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==rn.state.version||Ne.outputColorSpace!==Ce||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==Ie||W.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==le.numPlanes||Ne.numIntersection!==le.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==Ye||Ne.morphTargets!==Le||Ne.morphNormals!==yt||Ne.morphColors!==At||Ne.toneMapping!==Lt||Ne.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Ne.__version=W.version);let Jn=Ne.currentProgram;mt===!0&&(Jn=Zo(W,N,H));let Bs=!1,Un=!1,dc=!1,Ht=Jn.getUniforms(),ki=Ne.uniforms;if(ze.useProgram(Jn.program)&&(Bs=!0,Un=!0,dc=!0),W.id!==C&&(C=W.id,Un=!0),Bs||U!==R){Qe.reverseDepthBuffer?(de.copy(R.projectionMatrix),Qm(de),ev(de),Ht.setValue(I,"projectionMatrix",de)):Ht.setValue(I,"projectionMatrix",R.projectionMatrix),Ht.setValue(I,"viewMatrix",R.matrixWorldInverse);let zn=Ht.map.cameraPosition;zn!==void 0&&zn.setValue(I,q.setFromMatrixPosition(R.matrixWorld)),Qe.logarithmicDepthBuffer&&Ht.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,Un=!0,dc=!0)}if(H.isSkinnedMesh){Ht.setOptional(I,H,"bindMatrix"),Ht.setOptional(I,H,"bindMatrixInverse");let zn=H.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ht.setValue(I,"boneTexture",zn.boneTexture,P))}H.isBatchedMesh&&(Ht.setOptional(I,H,"batchingTexture"),Ht.setValue(I,"batchingTexture",H._matricesTexture,P),Ht.setOptional(I,H,"batchingIdTexture"),Ht.setValue(I,"batchingIdTexture",H._indirectTexture,P),Ht.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Ht.setValue(I,"batchingColorTexture",H._colorsTexture,P));let pc=G.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0)&&Ke.update(H,G,Jn),(Un||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,Ht.setValue(I,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ki.envMap.value=Ie,ki.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(ki.envMapIntensity.value=N.environmentIntensity),Un&&(Ht.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&om(ki,dc),ce&&W.fog===!0&&ge.refreshFogUniforms(ki,ce),ge.refreshMaterialUniforms(ki,W,ne,O,m.state.transmissionRenderTarget[R.id]),hr.upload(I,C0(Ne),ki,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(hr.upload(I,C0(Ne),ki,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(I,"center",H.center),Ht.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(I,"normalMatrix",H.normalMatrix),Ht.setValue(I,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let zn=W.uniformsGroups;for(let mc=0,lm=zn.length;mc<lm;mc++){let I0=zn[mc];D.update(I0,Jn),D.bind(I0,Jn)}}return Jn}function om(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function am(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,N,G){Be.get(R.texture).__webglTexture=N,Be.get(R.depthTexture).__webglTexture=G;let W=Be.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){let G=Be.get(R);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,G=0){S=R,b=N,T=G;let W=!0,H=null,ce=!1,Me=!1;if(R){let Ie=Be.get(R);if(Ie.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ie.__hasExternalTextures)P.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Le=R.depthTexture;if(Ie.__boundDepthTexture!==Le){if(Le!==null&&Be.has(Le)&&(R.width!==Le.image.width||R.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);let Ye=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?H=Ye[N][G]:H=Ye[N],ce=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?H=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?H=Ye[G]:H=Ye,x.copy(R.viewport),M.copy(R.scissor),L=R.scissorTest}else x.copy(he).multiplyScalar(ne).floor(),M.copy(ve).multiplyScalar(ne).floor(),L=Ze;if(ze.bindFramebuffer(I.FRAMEBUFFER,H)&&W&&ze.drawBuffers(R,H),ze.viewport(x),ze.scissor(M),ze.setScissorTest(L),ce){let Ie=Be.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,G)}else if(Me){let Ie=Be.get(R.texture),Xe=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,G||0,Xe)}C=-1},this.readRenderTargetPixels=function(R,N,G,W,H,ce,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ze.bindFramebuffer(I.FRAMEBUFFER,Ce);try{let Ie=R.texture,Xe=Ie.format,Ye=Ie.type;if(!Qe.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-W&&G>=0&&G<=R.height-H&&I.readPixels(N,G,W,H,Je.convert(Xe),Je.convert(Ye),ce)}finally{let Ie=S!==null?Be.get(S).__webglFramebuffer:null;ze.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,N,G,W,H,ce,Me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){let Ie=R.texture,Xe=Ie.format,Ye=Ie.type;if(!Qe.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-W&&G>=0&&G<=R.height-H){ze.bindFramebuffer(I.FRAMEBUFFER,Ce);let Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(N,G,W,H,Je.convert(Xe),Je.convert(Ye),0);let yt=S!==null?Be.get(S).__webglFramebuffer:null;ze.bindFramebuffer(I.FRAMEBUFFER,yt);let At=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await jm(I,At,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Le),I.deleteSync(At),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,N=null,G=0){R.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);let W=Math.pow(2,-G),H=Math.floor(R.image.width*W),ce=Math.floor(R.image.height*W),Me=N!==null?N.x:0,Ce=N!==null?N.y:0;P.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Me,Ce,H,ce),ze.unbindTexture()},this.copyTextureToTexture=function(R,N,G=null,W=null,H=0){R.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],N=arguments[2],H=arguments[3]||0,G=null);let ce,Me,Ce,Ie,Xe,Ye;G!==null?(ce=G.max.x-G.min.x,Me=G.max.y-G.min.y,Ce=G.min.x,Ie=G.min.y):(ce=R.image.width,Me=R.image.height,Ce=0,Ie=0),W!==null?(Xe=W.x,Ye=W.y):(Xe=0,Ye=0);let Le=Je.convert(N.format),yt=Je.convert(N.type);P.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let At=I.getParameter(I.UNPACK_ROW_LENGTH),Lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),In=I.getParameter(I.UNPACK_SKIP_PIXELS),pt=I.getParameter(I.UNPACK_SKIP_ROWS),Ne=I.getParameter(I.UNPACK_SKIP_IMAGES),rn=R.isCompressedTexture?R.mipmaps[H]:R.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,rn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Xe,Ye,ce,Me,Le,yt,rn.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Xe,Ye,rn.width,rn.height,Le,rn.data):I.texSubImage2D(I.TEXTURE_2D,H,Xe,Ye,ce,Me,Le,yt,rn),I.pixelStorei(I.UNPACK_ROW_LENGTH,At),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,In),I.pixelStorei(I.UNPACK_SKIP_ROWS,pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),H===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(R,N,G=null,W=null,H=0){R.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,R=arguments[2],N=arguments[3],H=arguments[4]||0);let ce,Me,Ce,Ie,Xe,Ye,Le,yt,At,Lt=R.isCompressedTexture?R.mipmaps[H]:R.image;G!==null?(ce=G.max.x-G.min.x,Me=G.max.y-G.min.y,Ce=G.max.z-G.min.z,Ie=G.min.x,Xe=G.min.y,Ye=G.min.z):(ce=Lt.width,Me=Lt.height,Ce=Lt.depth,Ie=0,Xe=0,Ye=0),W!==null?(Le=W.x,yt=W.y,At=W.z):(Le=0,yt=0,At=0);let In=Je.convert(N.format),pt=Je.convert(N.type),Ne;if(N.isData3DTexture)P.setTexture3D(N,0),Ne=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)P.setTexture2DArray(N,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let rn=I.getParameter(I.UNPACK_ROW_LENGTH),mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),Bs=I.getParameter(I.UNPACK_SKIP_ROWS),Un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye),R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ne,H,Le,yt,At,ce,Me,Ce,In,pt,Lt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,H,Le,yt,At,ce,Me,Ce,In,Lt.data):I.texSubImage3D(Ne,H,Le,yt,At,ce,Me,Ce,In,pt,Lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,rn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Un),H===0&&N.generateMipmaps&&I.generateMipmap(Ne),ze.unbindTexture()},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ze.unbindTexture()},this.resetState=function(){b=0,T=0,S=null,ze.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Iu?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===ol?"display-p3":"srgb"}},Ka=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ji=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gn=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},eu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new A,Za=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ln=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nr,io=new A,ir=new A,sr=new A,rr=new se,so=new se,od=new je,xa=new A,ro=new A,ya=new A,Af=new se,Yc=new se,Rf=new se,dn=class extends Yt{constructor(e=new ln){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eu(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Za(n,3,0,!1)),nr.setAttribute("uv",new Za(n,2,3,!1))}this.geometry=nr,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_a(xa.set(-.5,-.5,0),sr,a,ir,s,r),_a(ro.set(.5,-.5,0),sr,a,ir,s,r),_a(ya.set(.5,.5,0),sr,a,ir,s,r),Af.set(0,0),Yc.set(1,0),Rf.set(1,1);let o=e.ray.intersectTriangle(xa,ro,ya,!1,io);if(o===null&&(_a(ro.set(-.5,.5,0),sr,a,ir,s,r),Yc.set(0,1),o=e.ray.intersectTriangle(xa,ya,ro,!1,io),o===null))return;let l=e.ray.origin.distanceTo(io);l<e.near||l>e.far||t.push({distance:l,point:io.clone(),uv:Xi.getInterpolation(io,xa,ro,ya,Af,Yc,Rf,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _a(i,e,t,n,s,r){rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(so.x=r*rr.x-s*rr.y,so.y=s*rr.x+r*rr.y):so.copy(rr),i.copy(e),i.x+=so.x,i.y+=so.y,i.applyMatrix4(od)}var vo=class extends fn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rn,h=Rn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gt=class extends qe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new je,Cf=new je,Ea=[],Pf=new Ii,Ky=new je,oo=new V,ao=new Ki,en=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ky)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Pf.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),ao.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Cf.multiplyMatrices(n,or),oo.matrixWorld=Cf,oo.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vo(new Float32Array(s*this.count),s,this.count,Au,fi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mn=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new je,tu=new Ba,Ma=new Ki,ba=new A,bt=class extends Yt{constructor(e=new Ge,t=new Mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;If.copy(s).invert(),tu.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,y=d;v<y;v++){let m=c.getX(v);ba.fromBufferAttribute(u,m),Uf(ba,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,y=d;v<y;v++)ba.fromBufferAttribute(u,v),Uf(ba,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uf(i,e,t,n,s,r,a){let o=tu.distanceSqToPoint(i);if(o<t){let l=new A;tu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wn=class extends fn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],a=[],o=new A,l=new je;for(let d=0;d<=e;d++){let v=d/e;s[d]=this.getTangentAt(v,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(on(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(on(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ja=class extends si{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nu=class extends Ja{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sa=new A,$c=new Lu,Kc=new Lu,Zc=new Lu,Fn=class extends si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),c=Sa);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),$c.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,y,m),Kc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,y,m),Zc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,y,m)}else this.curveType==="catmullrom"&&($c.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Kc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Zc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set($c.calc(l),Kc.calc(l),Zc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Zy(i,e){let t=1-i;return t*t*e}function Jy(i,e){return 2*(1-i)*i*e}function jy(i,e){return i*i*e}function uo(i,e,t,n){return Zy(i,e)+Jy(i,t)+jy(i,n)}function Qy(i,e){let t=1-i;return t*t*t*e}function e2(i,e){let t=1-i;return 3*t*t*i*e}function t2(i,e){return 3*(1-i)*i*i*e}function n2(i,e){return i*i*i*e}function fo(i,e,t,n,s){return Qy(i,e)+e2(i,t)+t2(i,n)+n2(i,s)}var iu=class extends si{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fo(e,s.x,r.x,a.x,o.x),fo(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},su=class extends si{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fo(e,s.x,r.x,a.x,o.x),fo(e,s.y,r.y,a.y,o.y),fo(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ru=class extends si{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ou=class extends si{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends si{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(uo(e,s.x,r.x,a.x),uo(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends si{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(uo(e,s.x,r.x,a.x),uo(e,s.y,r.y,a.y),uo(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lu=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Lf(o,l.x,c.x,h.x,u.x),Lf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},i2=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:Fn,CubicBezierCurve:iu,CubicBezierCurve3:su,EllipseCurve:Ja,LineCurve:ru,LineCurve3:ou,QuadraticBezierCurve:au,QuadraticBezierCurve3:ja,SplineCurve:lu});var Qa=class i extends Ge{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=on(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,f=new se,d=new A,v=new A,y=new A,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(v)}for(let _=0;_<=t;_++){let g=n+_*h*s,E=Math.sin(g),b=Math.cos(g);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*E,u.y=e[T].y,u.z=e[T].x*b,a.push(u.x,u.y,u.z),f.x=_/t,f.y=T/(e.length-1),o.push(f.x,f.y);let S=l[3*T+0]*E,C=l[3*T+1],U=l[3*T+0]*b;c.push(S,C,U)}}for(let _=0;_<t;_++)for(let g=0;g<e.length-1;g++){let E=g+_*e.length,b=E,T=E+e.length,S=E+e.length+1,C=E+1;r.push(b,T,C),r.push(S,C,T)}this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var el=class i extends Ge{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new A,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends Ge{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],v=0,y=[],m=n/2,p=0;_(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2));function _(){let E=new A,b=new A,T=0,S=(t-e)/n;for(let C=0;C<=r;C++){let U=[],x=C/r,M=x*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,k=F*l+o,K=Math.sin(k),O=Math.cos(k);b.x=M*K,b.y=-x*n+m,b.z=M*O,u.push(b.x,b.y,b.z),E.set(K,S,O).normalize(),f.push(E.x,E.y,E.z),d.push(F,1-x),U.push(v++)}y.push(U)}for(let C=0;C<s;C++)for(let U=0;U<r;U++){let x=y[U][C],M=y[U+1][C],L=y[U+1][C+1],F=y[U][C+1];e>0&&(h.push(x,M,F),T+=3),t>0&&(h.push(M,L,F),T+=3)}c.addGroup(p,T,0),p+=T}function g(E){let b=v,T=new se,S=new A,C=0,U=E===!0?e:t,x=E===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),v++;let M=v;for(let L=0;L<=s;L++){let k=L/s*l+o,K=Math.cos(k),O=Math.sin(k);S.x=U*O,S.y=m*x,S.z=U*K,u.push(S.x,S.y,S.z),f.push(0,x,0),T.x=K*.5+.5,T.y=O*.5*x+.5,d.push(T.x,T.y),v++}for(let L=0;L<s;L++){let F=b+L,k=M+L;E===!0?h.push(k,k+1,F):h.push(k+1,k,F),C+=3}c.addGroup(p,C,E===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tl=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cu=class i extends Ge{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let g=new A,E=new A,b=new A;for(let T=0;T<t.length;T+=3)d(t[T+0],g),d(t[T+1],E),d(t[T+2],b),l(g,E,b,_)}function l(_,g,E,b){let T=b+1,S=[];for(let C=0;C<=T;C++){S[C]=[];let U=_.clone().lerp(E,C/T),x=g.clone().lerp(E,C/T),M=T-C;for(let L=0;L<=M;L++)L===0&&C===T?S[C][L]=U:S[C][L]=U.clone().lerp(x,L/M)}for(let C=0;C<T;C++)for(let U=0;U<2*(T-C)-1;U++){let x=Math.floor(U/2);U%2===0?(f(S[C][x+1]),f(S[C+1][x]),f(S[C][x])):(f(S[C][x+1]),f(S[C+1][x+1]),f(S[C+1][x]))}}function c(_){let g=new A;for(let E=0;E<r.length;E+=3)g.x=r[E+0],g.y=r[E+1],g.z=r[E+2],g.normalize().multiplyScalar(_),r[E+0]=g.x,r[E+1]=g.y,r[E+2]=g.z}function h(){let _=new A;for(let g=0;g<r.length;g+=3){_.x=r[g+0],_.y=r[g+1],_.z=r[g+2];let E=m(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;a.push(E,1-b)}v(),u()}function u(){for(let _=0;_<a.length;_+=6){let g=a[_+0],E=a[_+2],b=a[_+4],T=Math.max(g,E,b),S=Math.min(g,E,b);T>.9&&S<.1&&(g<.2&&(a[_+0]+=1),E<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,g){let E=_*3;g.x=e[E+0],g.y=e[E+1],g.z=e[E+2]}function v(){let _=new A,g=new A,E=new A,b=new A,T=new se,S=new se,C=new se;for(let U=0,x=0;U<r.length;U+=9,x+=6){_.set(r[U+0],r[U+1],r[U+2]),g.set(r[U+3],r[U+4],r[U+5]),E.set(r[U+6],r[U+7],r[U+8]),T.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),b.copy(_).add(g).add(E).divideScalar(3);let M=m(b);y(T,x+0,_,M),y(S,x+2,g,M),y(C,x+4,E,M)}}function y(_,g,E,b){b<0&&_.x===1&&(a[g]=_.x-1),E.x===0&&E.z===0&&(a[g]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var nl=class i extends cu{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gr=class i extends Ge{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new A,v=new se;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let _=p+m,g=_,E=_+n+1,b=_+n+2,T=_+1;o.push(g,E,T),o.push(E,b,T)}}this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var bn=class i extends Ge{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,f=new A,d=[],v=[],y=[],m=[];for(let p=0;p<=n;p++){let _=[],g=p/n,E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let T=b/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+g*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(T+E,1-g),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let g=h[p][_+1],E=h[p][_],b=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&d.push(g,E,T),(p!==n-1||l<Math.PI)&&d.push(E,b,T)}this.setIndex(d),this.setAttribute("position",new Ve(v,3)),this.setAttribute("normal",new Ve(y,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class i extends Ge{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){let y=v/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){let y=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,_=(s+1)*d+v;a.push(y,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ri=class i extends Ge{constructor(e=new ja(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new se,h=new A,u=[],f=[],d=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2));function y(){for(let g=0;g<t;g++)m(g);m(r===!1?t:0),_(),p()}function m(g){h=e.getPointAt(g/t,h);let E=a.normals[g],b=a.binormals[g];for(let T=0;T<=s;T++){let S=T/s*Math.PI*2,C=Math.sin(S),U=-Math.cos(S);l.x=U*E.x+C*b.x,l.y=U*E.y+C*b.y,l.z=U*E.z+C*b.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let g=1;g<=t;g++)for(let E=1;E<=s;E++){let b=(s+1)*(g-1)+(E-1),T=(s+1)*g+(E-1),S=(s+1)*g+E,C=(s+1)*(g-1)+E;v.push(b,T,C),v.push(T,S,C)}}function _(){for(let g=0;g<=t;g++)for(let E=0;E<=s;E++)c.x=g/t,c.y=E/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new i2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var st=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function wa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function s2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hu=class extends xr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:N0,endingEnd:N0}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case F0:r=e,o=2*t-n;break;case H0:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case F0:a=e,l=2*n-t;break;case H0:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(s-t),y=v*v,m=y*v,p=-f*m+2*f*y-f*v,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*v+1,g=(-1-d)*m+(1.5+d)*y+.5*v,E=d*m-d*y;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+_*a[c+b]+g*a[l+b]+E*a[u+b];return r}},uu=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},fu=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Fh:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Fh;case this.InterpolantFactoryMethodSmooth:return gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&s2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let v=0;v!==n;++v){let y=t[u+v];if(y!==t[f+v]||y!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Fh;var bs=class extends oi{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Ua;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends oi{};du.prototype.ValueTypeName="color";var pu=class extends oi{};pu.prototype.ValueTypeName="number";var mu=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dt.slerpFlat(r,0,a,c-o,a,c,l);return r}},il=class extends oi{InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};il.prototype.ValueTypeName="quaternion";il.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends oi{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Ua;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var vu=class extends oi{};vu.prototype.ValueTypeName="vector";var gu=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],v=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null}}},r2=new gu,xu=class{constructor(e){this.manager=e!==void 0?e:r2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sl=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jc=new je,Df=new A,Nf=new A,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yu=class extends go{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ha*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qi=class extends ws{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ff=new je,lo=new A,jc=new A,_u=class extends go{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),jc.copy(n.position),jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jc),n.updateMatrixWorld(),s.makeTranslation(-lo.x,-lo.y,-lo.z),Ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}},Sn=class extends ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Eu=class extends go{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_r=class extends ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var wn=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Du="\\[\\]\\.:\\/",o2=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",a2="[^"+Du.replace("\\.","")+"]",l2=/((?:WC+[\/:])*)/.source.replace("WC",Nu),c2=/(WCOD+)?/.source.replace("WCOD",a2),h2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),u2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),f2=new RegExp("^"+l2+c2+h2+u2+"$"),d2=["material","materials","bones","map"],Mu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o2,"")}static parseTrackName(e){let t=f2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Mu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);var ll=class{constructor(e){this.el=e,this.t=0,this.last=performance.now(),this.frozen=null,this.fallback=!1,this.running=!1}freeze(e){this.frozen=e,this.t=e}get playing(){return this.frozen!==null?!1:this.fallback?this.running:!this.el.paused&&!this.el.ended}tick(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.1);if(this.last=e,this.frozen!==null)return this.t=this.frozen,1/60;if(this.fallback)return this.running&&(this.t+=t),t;let n=this.el;if(!n.paused&&!n.ended){let s=this.t+t*n.playbackRate,r=n.currentTime-s;this.t=Math.abs(r)>.08?n.currentTime:s+r*.1}else this.t=n.currentTime;return t}};var Nt=window.OLK_AUDIO||null;function ad(i){let e=atob(i),t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)/255;return t}var Fu=Nt?Nt.fps:60,Xn=Nt?Nt.period:60/111.995,Hu=Nt?Nt.beat0:.095,ld=Nt?Nt.bar0:Hu+2*Xn,cd=Xn*4,Eo=Nt?Nt.duration:252.03,ud={},fd={},hl=null;if(Nt){for(let i in Nt.ch){let e=ad(Nt.ch[i]),t=new Float32Array(e.length+1);for(let n=0;n<e.length;n++)t[n+1]=t[n]+e[n]/Fu;ud[i]=e,fd[i]=t}hl=ad(Nt.spec)}var _o=Nt&&Nt.ev||{},cl=Nt&&Nt.evA||{};function hd(i,e,t){if(!i)return 0;let n=e*t,s=Math.floor(n);if(s<0)return i[0];if(s>=i.length-1)return i[i.length-1];let r=n-s;return i[s]+(i[s+1]-i[s])*r}var ae={ok:!!Nt,get(i,e){return hd(ud[i],e,Fu)},integral(i,e){return hd(fd[i],e,Fu)},spectrum(i,e){if(!hl)return 0;let t=Nt.specBands,n=e*Nt.specFps,s=Math.floor(n),r=n-s;return s=Math.max(0,Math.min(Nt.specN-2,s)),hl[s*t+i]*(1-r)+hl[(s+1)*t+i]*r},specRow(i,e){for(let t=0;t<32;t++)e[t]=this.spectrum(t,i);return e},beat(i){return(i-Hu)/Xn},bar(i){return(i-ld)/cd},beatPulse(i,e=6){let t=this.beat(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},barPulse(i,e=4){let t=this.bar(i);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},beatTime(i){return Hu+i*Xn},barTime(i){return ld+i*cd},events(i){return _o[i]||[]},last(i,e){let t=_o[i];if(!t||!t.length||t[0]>e)return-1;let n=0,s=t.length-1;for(;n<s;){let r=n+s+1>>1;t[r]<=e?n=r:s=r-1}return n},since(i,e){let t=this.last(i,e);return t<0?1/0:e-_o[i][t]},amp(i,e){let t=this.last(i,e);return t<0?0:cl[i]?cl[i][t]:1},hitPulse(i,e,t=8){let n=this.last(i,e);return n<0?0:(cl[i]?cl[i][n]:1)*Math.exp(-(e-_o[i][n])*t)},count(i,e,t){return Math.max(0,this.last(i,t)-this.last(i,e))},next(i,e){let t=_o[i],n=this.last(i,e)+1;return t&&n<t.length?t[n]:1/0}};var Pe=`
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
`,Mr=`
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
`,br=`
varying vec3 vCol; varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5; float r = dot(d, d) * 4.0;
  float a = exp(-r * 4.0) + 0.35 * exp(-r * 16.0);
  if (a * vA < 0.002) discard;
  gl_FragColor = vec4(vCol * a * vA, 1.0);
}
`;var es=(i,e,t=!0)=>new Nn(i,e,{type:Ts,format:En,depthBuffer:t,minFilter:It,magFilter:It,generateMipmaps:!1}),Hn=(i,e,t={})=>new oe({vertexShader:dd,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1,...t}),Mo=class{constructor(e){this.r=e,this.cam=new Zi(-1,1,1,-1,0,1),this.scene=new Gn,this.mesh=new V(new _e(2,2)),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}run(e,t,n=!0){this.mesh.material=e,this.r.setRenderTarget(t),n&&this.r.clear(),this.r.render(this.scene,this.cam)}},ku="vec3 tap4(sampler2D t, vec2 uv, vec2 o){ return (texture2D(t, uv+o*vec2(-1.,-1.)).rgb + texture2D(t, uv+o*vec2(1.,-1.)).rgb + texture2D(t, uv+o*vec2(-1.,1.)).rgb + texture2D(t, uv+o*vec2(1.,1.)).rgb) * 0.25; }",p2=`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr, uKnee; varying vec2 vUv; ${ku}
void main(){ vec3 c = tap4(tSrc, vUv, uTexel); float br = max(c.r, max(c.g, c.b));
  float s = clamp(br - uThr + uKnee, 0.0, 2.0 * uKnee); s = s * s / (4.0 * uKnee + 1e-4);
  gl_FragColor = vec4(min(c * max(s, br - uThr) / max(br, 1e-4), vec3(60.0)), 1.0); }`,m2=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv; ${ku}
void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * 0.5 + tap4(tSrc, vUv, uTexel) * 0.5, 1.0); }`,v2=`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv; ${ku}
void main(){ vec2 o = uTexel; vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += (texture2D(tSrc, vUv + vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv + vec2(0., o.y)).rgb + texture2D(tSrc, vUv - vec2(0., o.y)).rgb) * 2.0;
  c += tap4(tSrc, vUv, o) * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0); }`,g2=`uniform sampler2D tScene, tBloom; uniform vec2 uRes; uniform float uTime;
uniform float uExposure, uBloom, uSat, uContrast, uVig, uGrain, uCA, uLetter, uFlicker, uFadeB, uFadeW, uLeak, uScratch, uWeave, uTone, uShake, uPunch, uGlitch, uInvert, uScan, uRgb;
uniform vec3 uTint, uLift; varying vec2 vUv; ${Pe}
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
}`,Ou={exposure:1,bloom:.9,bloomThr:.8,sat:1,contrast:1.02,vig:.55,grain:.06,ca:.6,letter:0,flicker:0,fadeB:0,fadeW:0,leak:0,scratch:0,weave:0,tone:0,tint:[1,1,1],lift:[0,0,0],dust:.3,dustCol:[1,.85,.65],shake:0,punch:0,glitch:0,invert:0,scan:0,rgb:0},ul=class{constructor(e){this.r=e,this.fs=new Mo(e),this.levels=6;let t=()=>({tSrc:{value:null},uTexel:{value:new se}});this.pre=Hn(p2,{...t(),uThr:{value:.8},uKnee:{value:.5}}),this.down=Hn(m2,t()),this.up=Hn(v2,{...t(),tAdd:{value:null}});let n={tScene:{value:null},tBloom:{value:null},uRes:{value:new se},uTime:{value:0}};for(let s of["Exposure","Bloom","Sat","Contrast","Vig","Grain","CA","Letter","Flicker","FadeB","FadeW","Leak","Scratch","Weave","Tone","Shake","Punch","Glitch","Invert","Scan","Rgb"])n["u"+s]={value:0};n.uTint={value:new A(1,1,1)},n.uLift={value:new A},this.final=Hn(g2,n),this.A=null}resize(e,t){[this.A,this.B,this.M,...this.dn||[],...this.upT||[]].forEach(r=>r&&r.dispose()),this.w=e,this.h=t,this.A=es(e,t),this.B=es(e,t),this.M=es(e,t),this.dn=[],this.upT=[];let n=e>>1,s=t>>1;for(let r=0;r<this.levels;r++)this.dn.push(es(Math.max(n,2),Math.max(s,2),!1)),this.upT.push(es(Math.max(n,2),Math.max(s,2),!1)),n>>=1,s>>=1}bloom(e,t){let{pre:n,down:s,up:r,dn:a,upT:o,fs:l}=this;n.uniforms.tSrc.value=e.texture,n.uniforms.uThr.value=t,n.uniforms.uTexel.value.set(1/e.width,1/e.height),l.run(n,a[0]);for(let h=1;h<a.length;h++)s.uniforms.tSrc.value=a[h-1].texture,s.uniforms.uTexel.value.set(1/a[h-1].width,1/a[h-1].height),l.run(s,a[h]);let c=a[a.length-1];for(let h=a.length-2;h>=0;h--)r.uniforms.tSrc.value=c.texture,r.uniforms.tAdd.value=a[h].texture,r.uniforms.uTexel.value.set(1/c.width,1/c.height),l.run(r,o[h]),c=o[h];return c}composite(e,t,n,s,r){let a=this.bloom(e,t.bloomThr),o=this.final.uniforms;o.tScene.value=e.texture,o.tBloom.value=a.texture,o.uRes.value.set(s,r),o.uTime.value=n;let l={Exposure:"exposure",Bloom:"bloom",Sat:"sat",Contrast:"contrast",Vig:"vig",Grain:"grain",CA:"ca",Letter:"letter",Flicker:"flicker",FadeB:"fadeB",FadeW:"fadeW",Leak:"leak",Scratch:"scratch",Weave:"weave",Tone:"tone",Shake:"shake",Punch:"punch",Glitch:"glitch",Invert:"invert",Scan:"scan",Rgb:"rgb"};for(let c in l)o["u"+c].value=t[l[c]];o.uLetter.value=t.letter*Math.max(0,1-s/r/2.39),o.uTint.value.fromArray(t.tint),o.uLift.value.fromArray(t.lift),this.fs.run(this.final,null)}};var x2={fade:0,flash:1,dip:2,zoom:3,burn:4,shatter:5,iris:6,pencil:7,glitch:8,light:9,hex:10},y2=`uniform sampler2D tA, tB; uniform float uP, uMode, uAspect, uTime, uAmt; uniform vec2 uC; varying vec2 vUv; ${Pe}
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
  } else if (m == 10){ // AT-field hex wipe: hexagonal cells flip outward from uC, each edge flaring orange as it turns
    vec2 q = (uv - uC) * vec2(uAspect, 1.0) * 9.0; const vec2 s = vec2(1.0, 1.7320508);
    vec4 c = floor(vec4(q, q - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
    vec4 h = vec4(q - c.xy * s, q - (c.zw + 0.5) * s);
    vec4 hc = dot(h.xy, h.xy) < dot(h.zw, h.zw) ? vec4(h.xy, c.xy * s) : vec4(h.zw, (c.zw + 0.5) * s);
    vec2 a2 = abs(hc.xy); float e = 0.5 - max(dot(a2, vec2(0.5, 0.8660254)), a2.x);
    float d = length(hc.zw) / (9.0 * max(uAspect, 1.0)) + hash12(hc.zw) * 0.12;
    float k = clamp((p * 1.35 - d) / 0.18, 0.0, 1.0);          // this cell's flip progress
    float sc = abs(1.0 - 2.0 * k);                                // cell squashes to a line and back
    bool inside = e > (1.0 - sc) * 0.5;
    col = (k < 0.5 ? A(uv) : B(uv)) * (inside ? 1.0 : 0.0);
    float rim = smoothstep(0.06, 0.0, abs(e - (1.0 - sc) * 0.5)) * step(0.001, k) * step(k, 0.999);
    col += vec3(1.0, 0.42, 0.1) * rim * 3.0 + vec3(1.0, 0.7, 0.4) * exp(-pow(k - 0.5, 2.0) * 40.0) * 0.6 * step(0.001, k) * step(k, 0.999);
  } else col = mix(A(uv), B(uv), smoothstep(0.0, 1.0, p));
  gl_FragColor = vec4(col, 1.0);
}`,fl=class{constructor(){this.mat=Hn(y2,{tA:{value:null},tB:{value:null},uP:{value:0},uMode:{value:0},uAspect:{value:1},uTime:{value:0},uAmt:{value:1},uC:{value:new se(.5,.5)}})}set(e,t,n,s,r,a,o=[.5,.5],l=1){let c=this.mat.uniforms;return c.tA.value=e.texture,c.tB.value=t.texture,c.uP.value=n,c.uMode.value=typeof s=="number"?s:x2[s]??0,c.uAspect.value=r,c.uTime.value=a,c.uC.value.set(o[0],o[1]),c.uAmt.value=l,this.mat}};var fe=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),We=(i,e,t)=>i+(e-i)*t,rt=(i,e,t)=>fe((i-e)/(t-e)),B=(i,e,t)=>{let n=rt(t,i,e);return n*n*(3-2*n)};var re={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outExpo:i=>i>=1?1:1-Math.pow(2,-10*i),inExpo:i=>i<=0?0:Math.pow(2,10*i-10),sine:i=>-(Math.cos(Math.PI*i)-1)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function ut(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}var Sr=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function dl(i,e,t=re.sine){if(i<=e[0][0])return e[0].slice(1);for(let n=0;n<e.length-1;n++){let s=e[n],r=e[n+1];if(i<=r[0]){let a=t((i-s[0])/(r[0]-s[0])),o=[];for(let l=1;l<s.length;l++)o.push(s[l]+(r[l]-s[l])*a);return o}}return e[e.length-1].slice(1)}var pl=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];var oM=[[.96,.56,.32],[.93,.42,.4],[.86,.36,.58],[.62,.4,.8],[.36,.52,.88],[.4,.78,.86]].map(i=>i.map(e=>Math.pow(e,2.2)));var _2=`attribute vec3 aSeed; uniform float uT, uAmt, uAspect, uH; uniform vec3 uCol, uWind;
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
}`,ml=class{constructor(e=1400){let t=ut(99),n=new Float32Array(e*3);for(let a=0;a<n.length;a++)n[a]=t();let s=new Ge;s.setAttribute("position",new qe(new Float32Array(e*3),3)),s.setAttribute("aSeed",new qe(n,3)),this.u={uT:{value:0},uAmt:{value:0},uAspect:{value:1.78},uH:{value:1080},uCol:{value:new A(1,.85,.65)},uWind:{value:new A(.004,.009,0)}};let r=new oe({vertexShader:_2,fragmentShader:br,uniforms:this.u,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fe});this.pts=new bt(s,r),this.pts.frustumCulled=!1,this.scene=new Gn,this.scene.add(this.pts),this.cam=new Xt(50,1.78,.1,50)}render(e,t,n,s,r,a,o){if(s<.005)return;let l=this.u;l.uT.value=n,l.uAmt.value=s,l.uAspect.value=r/a,l.uH.value=a,o&&l.uCol.value.fromArray(o),e.setRenderTarget(t),e.render(this.scene,this.cam)}};var E2=new Set(["flash","dip","glitch","iris"]),vl=class i{constructor(e){this.shots=e.slice().sort((n,s)=>n.start-s.start);let t=this.shots;for(let n=0;n<t.length;n++)t[n].end=n+1<t.length?t[n+1].start:1/0}index(e){let t=this.shots,n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;return n}static win(e){let t=e.tr.dur||0,n=e.tr.align??.5;return[e.start-t*n,e.start+t*(1-n)]}at(e){let t=this.shots,n=this.index(e);for(let s of[n+1,n]){let r=t[s];if(!r||s===0||!r.tr||r.tr.type==="cut")continue;let[a,o]=i.win(r);if(e>=a&&e<o)return{a:t[s-1],b:r,p:(e-a)/(o-a),tr:r.tr}}return{a:t[n],b:null,p:0,tr:null}}around(e,t=3){return this.shots.filter(n=>n.end>e-t&&n.start<e+t)}},zu=i=>({...Ou,...i});function pd(i,e,t,n){let s=E2.has(n)?t<.5?0:1:t*t*(3-2*t),r={};for(let a in Ou){let o=i[a],l=e[a];r[a]=Array.isArray(o)?o.map((c,h)=>c+(l[h]-c)*s):o+(l-o)*s}return r}var ts="Oh oh oh oh oh",wr="I love you more than you\u2019ll ever know",bo="\u6211\u7231\u4F60\uFF0C\u8FDC\u6BD4\u4F60\u6240\u77E5\u9053\u7684\u66F4\u591A",So="\u3042\u306A\u305F\u304C\u601D\u3046\u3088\u308A\u305A\u3063\u3068\u3000\u3042\u306A\u305F\u3092\u611B\u3057\u3066\u308B",wo="#ffe2b8",M2="#dce6ff",gi="#ffcf8a",Bu="#fff1ea",Tr=[[12.2,16.6,"Words & Music \u2014 Hikaru Utada","\u8BCD\u66F2\u3000\u5B87\u591A\u7530\u5149","credit",{y:.7},"\u4F5C\u8A5E\u30FB\u4F5C\u66F2\u3000\u5B87\u591A\u7530\u30D2\u30AB\u30EB"],[20.69,25,"\u521D\u3081\u3066\u306E\u30EB\u30FC\u30D6\u30EB\u306F","\u7B2C\u4E00\u6B21\u53BB\u5362\u6D6E\u5BAB","v",{x:.86},"My first time at the Louvre"],[23.01,25,"\u306A\u3093\u3066\u3053\u3068\u306F\u306A\u304B\u3063\u305F\u308F","\u4E5F\u4E0D\u8FC7\u5982\u6B64\u800C\u5DF2","v",{x:.79},"was nothing special at all"],[25.1,29.1,"\u79C1\u3060\u3051\u306E\u30E2\u30CA\u30EA\u30B6","\u53EA\u5C5E\u4E8E\u6211\u7684\u8499\u5A1C\u4E3D\u838E","v",{x:.22,c:wo},"My very own Mona Lisa \u2014"],[26.94,29.1,"\u3082\u3046\u3068\u3063\u304F\u306B\u51FA\u4F1A\u3063\u3066\u305F\u304B\u3089","\u6211\u65E9\u5C31\u5DF2\u7ECF\u9047\u89C1\u4E86","v",{x:.15,c:wo},"I had met her long before"],[29.37,33.55,"\u521D\u3081\u3066\u3042\u306A\u305F\u3092\u898B\u305F","\u7B2C\u4E00\u6B21\u89C1\u5230\u4F60\u7684","h",{x:.08,y:.7,c:wo,in:"type"},"The day I first saw you,"],[31.16,33.55,"\u3042\u306E\u65E5\u52D5\u304D\u51FA\u3057\u305F\u6B6F\u8ECA","\u90A3\u4E00\u5929\uFF0C\u9F7F\u8F6E\u5F00\u59CB\u8F6C\u52A8","h",{x:.08,y:.83,c:wo,in:"type"},"the gears began to turn"],[33.67,37.55,"\u6B62\u3081\u3089\u308C\u306A\u3044\u55AA\u5931\u306E\u4E88\u611F","\u65E0\u6CD5\u963B\u6B62\u7684\u3001\u5931\u53BB\u7684\u9884\u611F","center",{y:.78,c:M2,out:"shatter"},"a foreboding of loss I cannot stop"],[38.02,47.6,"\u3082\u3046\u3044\u3063\u3071\u3044\u3042\u308B\u3051\u3069","\u867D\u7136\u5DF2\u7ECF\u6709\u5F88\u591A\u4E86","v",{x:.85},"We already have so many,"],[43.79,47.6,"\u3082\u3046\u4E00\u3064\u5897\u3084\u3057\u307E\u3057\u3087\u3046","\u90A3\u5C31\u518D\u6DFB\u4E00\u4E2A\u5427","v",{x:.78,c:wo},"so let\u2019s make one more"],[47.75,52.2,"(Can you give me one last kiss?)","\uFF08\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F\uFF09","whisper",{},"\uFF08\u6700\u5F8C\u306E\u30AD\u30B9\u3092\u3000\u304F\u308C\u308B\uFF1F\uFF09"],[52.39,55.1,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[55.22,60.9,ts,"","oh",{}],[61.07,63.65,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[63.79,69.45,ts,"","oh",{}],[69.63,79.6,wr,bo,"en",{rd:4.4,out:"dust",y:.66},So],[80.84,82.72,"\u300C\u5199\u771F\u306F\u82E6\u624B\u306A\u3093\u3060\u300D","\u201C\u6211\u4E0D\u592A\u559C\u6B22\u62CD\u7167\u201D","center",{y:.75,in:"type",out:"blur",mono:1},"\u201CI\u2019m not good with photos\u201D"],[82.78,84.85,"\u3067\u3082\u305D\u3093\u306A\u3082\u306E\u306F\u3044\u3089\u306A\u3044\u308F","\u53EF\u6211\u5E76\u4E0D\u9700\u8981\u90A3\u79CD\u4E1C\u897F","h",{x:.08,y:.8},"But I don\u2019t need things like that"],[84.92,89.15,"\u3042\u306A\u305F\u304C\u713C\u304D\u3064\u3044\u305F\u307E\u307E","\u4F60\u59CB\u7EC8\u70D9\u5370\u5728","v",{x:.85,in:"burn",c:gi},"You stay burned into"],[86.9,89.15,"\u79C1\u306E\u5FC3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u30FC","\u6211\u5FC3\u4E2D\u7684\u653E\u6620\u673A\u91CC","v",{x:.78,in:"burn",c:gi},"the projector of my heart"],[89.26,91.25,"\u5BC2\u3057\u304F\u306A\u3044\u3075\u308A\u3057\u3066\u305F","\u6211\u4E00\u76F4\u5047\u88C5\u5E76\u4E0D\u5BC2\u5BDE","cine",{},"I kept pretending I wasn\u2019t lonely"],[91.35,93.45,"\u307E\u3042 \u305D\u3093\u306A\u306E\u304A\u4E92\u3044\u69D8\u304B","\u561B\uFF0C\u8FD9\u70B9\u6211\u4EEC\u5F7C\u6B64\u5F7C\u6B64\u5427","cine",{},"Well, I guess we both did"],[93.57,95.5,"\u8AB0\u304B\u3092\u6C42\u3081\u308B\u3053\u3068\u306F","\u6E34\u6C42\u7740\u67D0\u4E2A\u4EBA","cine",{},"To long for someone"],[95.57,97.55,"\u5373\u3061\u50B7\u3064\u304F\u3053\u3068\u3060\u3063\u305F","\u5C31\u610F\u5473\u7740\u4F1A\u53D7\u4F24","cine",{out:"shatter"},"was to be hurt, all along"],[98.19,103.4,"Oh can you give me one last kiss?","\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F","en",{rd:3.2,in:"burn",c:gi},"\u306D\u3048\u3000\u6700\u5F8C\u306B\u30AD\u30B9\u3092\u304F\u308C\u308B\uFF1F"],[103.72,107.9,"\u71C3\u3048\u308B\u3088\u3046\u306A\u30AD\u30B9\u3092\u3057\u3088\u3046","\u6765\u4E00\u4E2A\u71C3\u70E7\u822C\u7684\u543B\u5427","v",{x:.13,in:"burn",c:gi,out:"rise"},"Let\u2019s share a kiss that burns"],[108.05,112.3,"\u5FD8\u308C\u305F\u304F\u3066\u3082","\u5373\u4F7F\u60F3\u8981\u5FD8\u8BB0","v",{x:.13,c:gi,out:"dust"},"so that even if I tried to forget"],[112.44,115,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u307B\u3069","\u4E5F\u65E0\u6CD5\u5FD8\u8BB0","v",{x:.16,c:gi,out:"dust"},"I never could"],[115.19,120.85,ts,"","oh",{c:gi}],[121,123.65,wr,bo,"en",{rd:2.4,c:gi,y:.66},So],[123.76,129.5,ts,"","oh",{c:gi}],[129.61,135.6,wr,bo,"en",{rd:4.2,c:gi,out:"dust",y:.66},So],[149.52,154.9,"\u3082\u3046\u5206\u304B\u3063\u3066\u3044\u308B\u3088","\u5176\u5B9E\u6211\u65E9\u5C31\u660E\u767D\u4E86","center",{y:.86,c:Bu},"I already know"],[155.05,159.45,"\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u3082","\u5373\u4F7F\u8FD9\u4E16\u754C\u8D70\u5230\u5C3D\u5934","center",{y:.86,c:Bu},"even at the end of the world"],[159.63,165.9,"\u5E74\u3092\u3068\u3063\u3066\u3082","\u5373\u4F7F\u6211\u4EEC\u90FD\u5DF2\u8001\u53BB","center",{y:.86,c:Bu,out:"dust"},"even when we grow old"],[166.14,168.6,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[168.71,170.6,ts,"","oh",{}],[170.67,175.35,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[175.47,181.1,ts,"","oh",{}],[181.25,184.75,wr,bo,"en",{rd:2.8},So],[184.86,189.6,ts,"","oh",{}],[189.7,192.45,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[192.56,198.15,ts,"","oh",{}],[198.3,207.5,wr,bo,"en",{rd:4.6,rainbow:1,out:"dust"},So],[226.2,231.2,"\u5439\u3044\u3066\u3044\u3063\u305F\u98A8\u306E\u5F8C\u3092","\u8FFD\u968F\u7740\u90A3\u9635\u5439\u8FC7\u7684\u98CE","pencil",{x:.1,y:.2},"Chasing after the wind that blew by"],[230.57,237.8,"\u8FFD\u3044\u304B\u3051\u305F\u3000\u7729\u3057\u3044\u5348\u5F8C","\u8FFD\u9010\u7740\u7684\u3000\u90A3\u4E2A\u8000\u773C\u7684\u5348\u540E","pencil",{x:.1,y:.33},"that dazzling afternoon"]],md=2*Xn,vd=Tr.filter(i=>i[4]==="oh").flatMap(i=>[0,1,2,3,4].map(e=>i[0]+e*md)),Vu=Tr.filter(i=>i[2]===wr).map(i=>i[0]),gd=()=>md;var xd=`
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
`;var b2={fade:.8,dust:1.5,shatter:.6,blur:.45,rise:1.2},yd=[15239002,14643064,13000599,9201860,6062032,6207176].map(pl),S2=pl(4011311),_d=[1,.45,.12],Ed=[1,.8,.45],Md=[1,1,1],bd=i=>pl(parseInt(i.slice(1),16)),Ar=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),ns=(i,e)=>e===void 0?`rgb(${i.map(t=>Math.round(fe(t)*255)).join(",")})`:`rgba(${i.map(t=>Math.round(fe(t)*255)).join(",")},${e.toFixed(3)})`,gl=class{constructor(e){let t=document.createElement("style");t.textContent=xd,document.head.appendChild(t),this.el=document.createElement("div"),this.el.id="lyr",e.appendChild(this.el),this.u=1,this.cineY=.93,this.enabled=!0,this.blend="",this.alpha="",this.ohCount=0,this.lines=Tr.map(n=>this.make(n)),this.resize()}make([e,t,n,s,r,a,o]){let l=document.createElement("div");l.className="ln l-"+r;let c=document.createElement("div");c.className="jp",l.appendChild(c);let h=["oh","en","whisper","credit"].includes(r),u=h?n.split(" "):Array.from(n).map(x=>x===" "?"\xA0":x),f=u.map((x,M)=>{let L=document.createElement("span");return L.textContent=x,c.appendChild(L),h&&r!=="oh"&&M<u.length-1&&c.appendChild(document.createTextNode(" ")),L}),d=[];if(r==="oh"){let x=this.ohCount++%2===1;f.forEach((M,L)=>{let F=Math.sin(L/4*Math.PI),k=.18+L*.16,K=x?.33-.06*F:.64+.06*F;d[L]=`left:${(k*100).toFixed(1)}%;top:${(K*100).toFixed(1)}%;`})}let v=null,y=null,m=null,p=null,_=(x,M)=>{let L=document.createElement("div");return L.className=x,M&&(L.textContent=M),L};if(s||o){v=_("tr"),v.style.opacity="1",y=_("rule"),v.appendChild(y);let x=r==="pencil"?null:Ar(a.c?bd(a.c):[.957,.937,.902],[.93,.9,.86],.45);s&&(m=_("zh",s),v.appendChild(m),x&&(m.style.color=ns(x))),o&&(p=_("x "+(["en","whisper","credit"].includes(r)?"ja":"en"),o),v.appendChild(p),x&&(p.style.color=ns(x,r==="en"?.92:.78))),l.appendChild(v)}let g=l.style,E=a.x??.5,b=a.y??.5;r==="v"?(g.left=E*100+"%",g.top="15%"):r==="h"||r==="pencil"?(g.left=E*100+"%",g.top=b*100+"%"):r==="center"||r==="credit"?(g.left="50%",g.top=b*100+"%"):r==="en"?(g.left="50%",g.top=(a.y??.47)*100+"%"):r==="whisper"?(g.left="50%",g.top="82%"):r==="cine"&&(g.left="50%"),this.el.appendChild(l);let T=f.length,S=t-e,C=r==="oh"?gd()*4:a.rd??(r==="credit"?.6:r==="whisper"?3:r==="pencil"?Math.min(S*.6,3.2):fe(S*.5,.5,2.4)),U=a.out||"fade";return{t0:e,t1:t,el:l,spans:f,Z:v,R:y,ZH:m,X:p,style:r,o:a,bases:d,vis:!1,cache:[],lcache:"",zc:"",ut:f.map((x,M)=>e+(T>1?C*M/(T-1):0)),c:a.c?bd(a.c):[.957,.937,.902],in:a.in||(r==="pencil"?"ink":r==="cine"?"type":"glow"),out:U,exitDur:b2[U],fd:r==="pencil"?1:.7}}resize(){let e=innerWidth,t=innerHeight;this.u=Math.min(e/1920,t/1080),this.el.style.setProperty("--u",this.u+"px");let n=Math.max(0,1-e/t/2.39);this.cineY=n*t*.5>90*this.u?1-n/4:.9,this.lines.forEach(s=>{s.cache=[],s.lcache=""})}toggle(){this.enabled=!this.enabled}update(e,t=1){let n=e>224?"multiply":"screen";n!==this.blend&&(this.el.style.mixBlendMode=n,this.blend=n);let s=fe(t).toFixed(3);s!==this.alpha&&(this.el.style.opacity=s,this.alpha=s);for(let r of this.lines){let a=this.enabled&&e>=r.t0-.05&&e<r.t1+r.exitDur;a!==r.vis&&(r.el.style.display=a?"block":"none",r.vis=a,r.cache=[],r.lcache=""),a&&this.frame(r,e)}}frame(e,t){let n=this.u,s=t-e.t0,r=t-e.t1,a=r>0?fe(r/e.exitDur):0,o=ae.get("loud",t),l="",c=1,h=0;switch(e.style){case"v":l=`translate(-50%,${(s*3*n).toFixed(1)}px)`;break;case"h":l=`translate(${(s*3*n).toFixed(1)}px,-50%)`;break;case"center":case"credit":case"whisper":l=`translate(-50%,-50%) scale(${(1+s*.006).toFixed(4)})`;break;case"en":l=`translate(-50%,-50%) scale(${(.97+s*.005).toFixed(4)})`;break;case"cine":l="translate(-50%,-50%)";break;case"pencil":l="translate(0,-50%)";break}e.out==="fade"?c=1-re.inOut(a):e.out==="blur"?(c=1-a,h=a*12*n,l+=` scale(${(1+a*.08).toFixed(3)})`):e.out==="rise"&&(c=1-re.in(a),h=a*4*n,l+=` translateY(${(-a*50*n).toFixed(1)}px)`);let u=l+c.toFixed(3)+h.toFixed(1)+this.cineY;if(u!==e.lcache){e.lcache=u;let f=e.el.style;f.transform=l,f.opacity=c.toFixed(3),f.filter=h>.1?`blur(${h.toFixed(1)}px)`:"",e.style==="cine"&&(f.top=(this.cineY*100).toFixed(2)+"%")}if(e.Z){let f=1-fe(r/.6),d=e.style==="pencil"?1:.9,v=re.out(B(e.t0+.15,e.t0+1,t))*f,y=re.out(B(e.t0+.5,e.t0+1.5,t))*f,m=v.toFixed(3)+y.toFixed(3);if(m!==e.zc){e.zc=m;let p=e.style==="v",_=p?"X":"Y",g=E=>`translate${_}(${((p?-1:1)*(1-E)*8*n).toFixed(1)}px)`;e.R.style.transform=`scale${p?"Y":"X"}(${v.toFixed(3)})`,e.R.style.opacity=(v*.9).toFixed(3),e.ZH&&(e.ZH.style.opacity=(v*d).toFixed(3),e.ZH.style.transform=g(v)),e.X&&(e.X.style.opacity=y.toFixed(3),e.X.style.transform=g(y))}}for(let f=0;f<e.spans.length;f++){let d=e.style==="oh"?this.ohUnit(e,f,t,n):this.unit(e,f,t,n,o,r);d!==e.cache[f]&&(e.cache[f]=d,e.spans[f].style.cssText=d)}}unit(e,t,n,s,r,a){let o=n-e.ut[t],l=e.spans.length;if(o<0)return"opacity:0";let c=fe(o/e.fd),h=1,u=0,f=0,d=1,v=0,y=0,m=e.c,p=e.c,_=.55,g=14;switch(e.o.rainbow&&(p=yd[t%6],m=Ar(p,Md,.5)),e.in){case"type":{let b=Math.exp(-o*10);u=(Sr(t*13+Math.floor(n*40))-.5)*3*s*b,_=.4+b,g=6+16*b;break}case"burn":{let b=fe(o/1.1);h=re.out(fe(o/.3)),m=b<.5?Ar(_d,Ed,b*2):Ar(Ed,e.c,b*2-1),p=_d,_=1-.55*b,g=10+26*(1-b),f=(1-c)*8*s;break}case"ink":{let b=re.out(fe(o/1.2));h=b,y=(1-b)*3*s,d=1.08-.08*b,m=Ar(yd[t%6],S2,B(.2,1.8,o)*.6),_=0;break}default:{let b=re.out(c);h=b,y=(1-b)*9*s,f=(1-b)*12*s,_=.45+.6*(1-b),g=12+24*(1-b)}}if(e.in!=="ink"&&(_=_*(.8+.5*r)+Math.exp(-o*2.5)*.35),a>0&&e.out==="dust"){let b=fe((a-t/l*e.exitDur*.45)/(e.exitDur*.55));h*=1-b,f-=(b*36+b*b*20)*s,u+=(Sr(t*7.3+e.t0)-.5)*50*s*b,y+=b*7*s,d*=1+b*.25}else if(a>0&&e.out==="shatter"){let b=fe(a/e.exitDur),T=Sr(t*3.1+e.t0),S=Sr(t*5.7+1),C=Sr(t*9.2+2);u+=(T-.5)*240*s*b,f+=(-60*S+320*b)*b*s,v=(C-.5)*220*b,h*=1-b*b,d*=1-.3*b}let E=`opacity:${h.toFixed(3)};color:${ns(m)}`;if((u||f||d!==1||v)&&(E+=`;transform:translate(${u.toFixed(1)}px,${f.toFixed(1)}px) rotate(${v.toFixed(1)}deg) scale(${d.toFixed(3)})`),y>.15&&(E+=`;filter:blur(${y.toFixed(1)}px)`),_>.01){let b=Math.min(_,1);E+=`;text-shadow:0 0 ${(g*s).toFixed(1)}px ${ns(p,b)},0 0 ${(g*3*s).toFixed(1)}px ${ns(p,b*.35)}`}return E}ohUnit(e,t,n,s){let r=n-e.ut[t],a=e.bases[t];if(r<0)return a+"opacity:0";let o=re.out(fe(r/.5)),l=Math.exp(-r*4),c=e.c,h=B(0,.06,r)*(1-.5*B(.5,2.5,r))*(1-fe((n-e.t1)/e.exitDur));return a+`opacity:${h.toFixed(3)};color:${ns(Ar(c,Md,l*.5))};transform:translate(-50%,-50%) translateY(${(-r*5*s).toFixed(1)}px) scale(${(1.45-.45*o).toFixed(3)});text-shadow:0 0 ${((10+40*l)*s).toFixed(1)}px ${ns(c,.6+.4*l)},0 0 ${(80*l*s+1).toFixed(1)}px ${ns([1,.7,.5],.5*l)}`}};var w2=`
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
body.olk-idle{cursor:none}`,Sd=i=>(i=Math.max(0,i),`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`),To=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t&&(n.innerHTML=t),n},xl=class{constructor(e,t,n){this.cb=t,this.dur=n,this.clean=!1,this.hidden=!1;let s=To("style");s.textContent=w2,document.head.appendChild(s);let r='<div class="olk-title">One Last Kiss</div><div class="olk-sub">Hikaru Utada</div>';this.load=To("div","olk-ov",r+'<div class="olk-prog"><i></i></div><div class="olk-pct">0%</div>'),this.gate=To("div","olk-ov hide",r+'<button class="olk-btn" aria-label="Play">\u25B6 \u70B9\u51FB\u64AD\u653E</button><div class="olk-hint">\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5E26\u58F0\u97F3\u7684\u81EA\u52A8\u64AD\u653E<br>\u53CC\u51FB\u6587\u4EF6\u5939\u91CC\u7684\u300CPlay-OneLastKiss.bat\u300D\u5373\u53EF\u5168\u5C4F\u81EA\u52A8\u64AD\u653E</div>'),this.bar=To("div","idle"),this.bar.id="olk-bar",this.bar.innerHTML='<button data-k="play" aria-label="Play or pause">\u275A\u275A</button><span class="tm">0:00</span><div id="olk-track" role="slider" aria-label="Seek" tabindex="0"><i></i></div><span class="du"></span><button data-k="lyr" aria-label="Toggle lyrics">\u8BCD</button><button data-k="fs" aria-label="Fullscreen">\u26F6</button>',this.endEl=To("div","hide",'<button class="olk-btn" aria-label="Replay">\u21BB \u91CD\u64AD</button>'),this.endEl.id="olk-end",[this.load,this.gate,this.bar,this.endEl].forEach(l=>e.appendChild(l)),this.bar.querySelector(".du").textContent=Sd(n),this.track=this.bar.querySelector("#olk-track"),this.fill=this.track.firstChild,this.playBtn=this.bar.querySelector("[data-k=play]"),this.tm=this.bar.querySelector(".tm"),this.bar.addEventListener("click",l=>{let c=l.target.dataset&&l.target.dataset.k;c==="play"?t.toggle():c==="lyr"?t.lyrics():c==="fs"&&this.fullscreen()}),this.track.addEventListener("click",l=>{let c=this.track.getBoundingClientRect();t.seek((l.clientX-c.left)/c.width*n)}),this.endEl.querySelector("button").addEventListener("click",()=>t.restart());let a=0,o=()=>{this.clean||this.hidden||(this.bar.classList.remove("idle"),document.body.classList.remove("olk-idle"),clearTimeout(a),a=setTimeout(()=>{this.bar.classList.add("idle"),document.body.classList.add("olk-idle")},2600))};addEventListener("mousemove",o),addEventListener("touchstart",o),addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(c===" "||c==="k")l.preventDefault(),t.toggle();else if(c==="arrowright")t.seekBy(5);else if(c==="arrowleft")t.seekBy(-5);else if(c==="f")this.fullscreen();else if(c==="l")t.lyrics();else if(c==="r")t.restart();else if(c==="h")this.hidden=!this.hidden,this.bar.classList.add("idle");else if(c!=="c"&&c!=="v")return;o()})}fullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}loading(e,t){this.load.querySelector("i").style.width=(e*100).toFixed(1)+"%",this.load.querySelector(".olk-pct").textContent=t||Math.round(e*100)+"%"}ready(e=!1){e&&(this.load.style.transition="none"),this.load.classList.add("hide")}showGate(e){this.gate.classList.remove("hide");let t=this.gate.querySelector("button");t.focus();let n=()=>{this.gate.classList.add("hide"),e()};t.addEventListener("click",n,{once:!0})}update(e,t,n){this.fill.style.width=(e/this.dur*100).toFixed(2)+"%",this.tm.textContent=Sd(e),this.playBtn.textContent=t?"\u275A\u275A":"\u25B6",this.endEl.classList.toggle("hide",!n||this.clean)}};var Rr=[{id:"zh",label:"\u4E2D\u6587",langs:["zh"]},{id:"ja",label:"\u65E5\u672C\u8A9E",langs:["ja"]},{id:"en",label:"English",langs:["en"]},{id:"zh-ja",label:"\u4E2D\u6587 + \u65E5\u672C\u8A9E",langs:["zh","ja"]},{id:"ja-en",label:"\u65E5\u672C\u8A9E + English",langs:["ja","en"]},{id:"zh-en",label:"\u4E2D\u6587 + English",langs:["zh","en"]}],T2=`
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
#cc-menu button i{width:14px;font-style:normal;color:#e7c58f}`,A2=/^[\x20-\x7e’‘“”—…]+$/;function R2(){let i=Tr.filter(t=>t[4]!=="credit").slice().sort((t,n)=>t[0]-n[0]),e=[];for(let t=0;t<i.length;t++){let[n,s,r,a,o,,l]=i[t];if(e.length&&Math.abs(e[e.length-1].t0-n)<.01)continue;let c=A2.test(r),h=o==="oh";e.push({t0:n,t1:Math.min(s,t+1<i.length?i[t+1][0]-.02:s),ja:h?r:c&&l||r,en:h||c?r:l||"",zh:h?"\u54E6\u2014\u2014":a||r})}return e}var yl=class{constructor(e,t){let n=document.createElement("style");n.textContent=T2,document.head.appendChild(n),this.cues=R2(),this.on=!1,this.track=Rr[3],this.cur=null,this.el=document.createElement("div"),this.el.id="cc",this.el.className="off",this.el.setAttribute("aria-live","polite"),e.appendChild(this.el),this.btn=document.createElement("button"),this.btn.className="cc-btn",this.btn.textContent="CC",this.btn.setAttribute("aria-label","\u5B57\u5E55 Subtitles"),this.btn.setAttribute("aria-pressed","false"),this.lang=document.createElement("button"),this.lang.textContent="\u2699",this.lang.setAttribute("aria-label","\u5B57\u5E55\u8BED\u8A00 Subtitle language");let s=t.querySelector("[data-k=fs]");t.insertBefore(this.btn,s),t.insertBefore(this.lang,s),this.menu=document.createElement("div"),this.menu.id="cc-menu",this.menu.className="hide",this.menu.setAttribute("role","menu"),this.menu.innerHTML='<div class="hd">\u5B57\u5E55 \xB7 \u5B57\u5E55 \xB7 Subtitles</div><button data-t="off" role="menuitemradio"><i></i>\u5173\u95ED / \u30AA\u30D5 / Off</button>'+Rr.map(r=>`<button data-t="${r.id}" role="menuitemradio"><i></i>${r.label}</button>`).join(""),e.appendChild(this.menu),this.btn.addEventListener("click",r=>{r.stopPropagation(),this.toggle()}),this.lang.addEventListener("click",r=>{r.stopPropagation(),this.menu.classList.toggle("hide"),this.paintMenu()}),this.menu.addEventListener("click",r=>{let a=r.target.closest("button");if(!a)return;let o=a.dataset.t;o==="off"?this.set(!1):(this.track=Rr.find(l=>l.id===o),this.set(!0)),this.menu.classList.add("hide")}),addEventListener("click",r=>{this.menu.contains(r.target)||this.menu.classList.add("hide")}),addEventListener("keydown",r=>{let a=r.key.toLowerCase();a==="c"?this.toggle():a==="v"&&(this.track=Rr[(Rr.indexOf(this.track)+1)%Rr.length],this.set(!0))})}toggle(){this.set(!this.on)}set(e){this.on=e,this.cur=null,this.el.classList.toggle("off",!e),this.btn.classList.toggle("on",e),this.btn.setAttribute("aria-pressed",String(e)),this.paintMenu()}paintMenu(){this.menu.querySelectorAll("button").forEach(e=>{let t=this.on?e.dataset.t===this.track.id:e.dataset.t==="off";e.querySelector("i").textContent=t?"\u2713":"",e.setAttribute("aria-checked",String(t))})}update(e,t){if(this.el.classList.toggle("up",!!t),!this.on)return;let n=this.cues.find(r=>e>=r.t0&&e<r.t1)||null,s=n?n.t0+this.track.id:"";s!==this.cur&&(this.cur=s,this.el.textContent="",n&&this.track.langs.forEach((r,a)=>{if(!n[r])return;let o=document.createElement("span");o.textContent=n[r],a>0&&(o.className="s2"),this.el.appendChild(o)}))}};var C2=`
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
#hud.off{display:none}`,_l=(i,e=2)=>String(Math.floor(i)).padStart(e,"0"),El=class{constructor(e,t){let n=document.createElement("style");n.textContent=C2,document.head.appendChild(n),this.el=document.createElement("div"),this.el.id="hud",e.appendChild(this.el),this.items=t.map(s=>({...s,el:this.make(s)}))}make(e){let t=document.createElement("div");return t.className="h "+e.kind,e.color&&(t.style.color=e.color),e.kind==="alert"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="sync"?t.innerHTML=`<small>${e.label||"SYNCHRO RATIO"}</small><b>0.0%</b><div class="bar"><i></i></div>`:e.kind==="magi"?t.innerHTML=["MELCHIOR\xB71","BALTHASAR\xB72","CASPER\xB73"].map(n=>`<div>${n}<b>\u5BE9\u8B70\u4E2D</b></div>`).join(""):e.kind==="cap"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="frame"?t.innerHTML=`<s></s><u>${e.text||""}</u>`:t.textContent="",e.style&&Object.assign(t.style,e.style),this.el.appendChild(t),t}toggle(e){this.el.classList.toggle("off",!e)}update(e,t=1){for(let n of this.items){let{el:s,t0:r,t1:a,kind:o}=n;if(e<r-.05||e>a+.6){s._v!==0&&(s.style.opacity=0,s._v=0);continue}let l=n.fin??.12,c=n.fout??.35,h=B(r,r+l,e)*(1-B(a,a+c,e)),u=fe((e-r)/(a-r));if(o==="alert"){let f=ae.beat(e)*(n.rate||2);h*=f-Math.floor(f)<.72?1:.15,s.style.transform=`translate(-50%,-50%) scale(${1+.05*ae.hitPulse("kick",e,10)})`}else if(o==="sync"){let f=(n.from??0)+((n.to??100)-(n.from??0))*Math.pow(u,n.pow||1.6)+Math.sin(e*37)*.35;s.querySelector("b").textContent=f.toFixed(1)+"%",s.querySelector(".bar i").style.width=fe(f/(n.max||100))*100+"%",s.style.color=f>(n.warn??1e9)?"#ff3a2a":""}else if(o==="magi"){let f=s.children,d=ae.count("kick",r,e);for(let v=0;v<3;v++){let y=u>.7,m=y?(n.result||[1,1,1])[v]:(d+v)%3!==0;f[v].className=m?"ok":"no",f[v].querySelector("b").textContent=y?m?"\u53EF\u6C7A":"\u5426\u6C7A":(d+v)%2?"\u5BE9\u8B70\u4E2D":m?"\u627F\u8A8D":"\u5426\u6C7A"}}else if(o==="code"){let f=Math.max(0,n.rev?(n.base??0)-(e-r)*n.rev:e-(n.base??0));s.textContent=`${n.text||"S-DAT"}  ${n.track?"TR "+n.track:""}  ${_l(f/60)}:${_l(f%60)}:${_l(f*100%100)}`}else o==="count"?s.textContent=_l(Math.max(0,n.from-ae.count("kick",r,e))):o==="cap"&&(s.style.transform=`translateX(${(1-B(r,r+.5,e))*-12}px)`);e-r<.25&&(h*=Math.floor(e*60)%3===0?.2:1),h*=t,Math.abs(h-(s._v??-1))>.004&&(s.style.opacity=h.toFixed(3),s._v=h)}}};var at=class{constructor(e,t={}){this.ctx=e,this.scene=new Gn,this.camera=t.ortho?new Zi(-e.aspect,e.aspect,1,-1,.1,100):new Xt(t.fov||45,e.aspect,t.near||.1,t.far||2e3),t.ortho&&(this.camera.position.z=10),this.ortho=!!t.ortho,this.clear=new we(0,0,0)}build(){}update(e,t){}post(e){return{}}resize(e,t){let n=e/t;this.ortho?(this.camera.left=-n,this.camera.right=n):this.camera.aspect=n,this.camera.updateProjectionMatrix()}render(e,t){e.setRenderTarget(t),e.setClearColor(this.clear,1),e.clear(),e.render(this.scene,this.camera)}},P2="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function is(i,e,t={}){let n=new oe({vertexShader:P2,fragmentShader:i,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Vn}),s=new V(new _e(2,2),n);return s.frustumCulled=!1,s.renderOrder=t.order??-100,s}function wd(i,e,t,n={}){return new oe({vertexShader:i,fragmentShader:e,uniforms:t,transparent:!0,depthWrite:!1,blending:Fe,...n})}async function Td(){let i=window.OLK_IMG||{},e={};return await Promise.all(Object.entries(i).map(async([t,n])=>{let s=new Image;s.src=n.src;try{await s.decode()}catch{console.warn("image decode failed",t);return}let r=new fn(s),a=t.endsWith("_d");r.colorSpace=a?qt:un,r.anisotropy=4,r.wrapS=r.wrapT=ti,r.needsUpdate=!0,e[t]={tex:r,img:s,w:n.w,h:n.h}})),e}function Ad(i,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});return s.drawImage(i.img,0,0,e,t),s.getImageData(0,0,e,t).data}var I2="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function Ml(i,e,t={}){let n={uImg:{value:i.tex},uDep:{value:e?e.tex:null},uHasDep:{value:e?1:0},uAspect:{value:1.7777777777777777},uImgAspect:{value:i.w/i.h},uCam:{value:new A(0,0,1)},uPar:{value:new se(0,0)},uDolly:{value:0},uFocus:{value:.5},uBlur:{value:0},uT:{value:0},uGain:{value:1},uTint:{value:new A(1,1,1)},uAlpha:{value:1},...t.uniforms||{}},s=`
uniform sampler2D uImg, uDep; uniform float uHasDep, uAspect, uImgAspect, uDolly, uFocus, uBlur, uT, uGain, uAlpha;
uniform vec3 uCam, uTint; uniform vec2 uPar; varying vec2 vUv;
${Pe}
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
}`;return new oe({vertexShader:I2,fragmentShader:s,uniforms:n,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Vn})}function bl(i,e=-100){let t=new V(new _e(2,2),i);return t.frustumCulled=!1,t.renderOrder=e,t}function ss(i,e={}){let t={uTex:{value:i.tex},uT:{value:0},uWind:{value:e.wind??1},uAlpha:{value:1},uRim:{value:new nt(1,.8,.55,e.rim??.6)},uTint:{value:new A(1,1,1)},uDis:{value:0},uTexel:{value:new se(1/i.w,1/i.h)},uSeed:{value:e.seed??0},uClip:{value:new nt(-1,0,1,0)}},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",s=`
uniform sampler2D uTex; uniform float uT, uWind, uAlpha, uDis, uSeed; uniform vec4 uRim; uniform vec3 uTint; uniform vec2 uTexel; uniform vec4 uClip;
varying vec2 vUv; ${Pe}
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
}`;return new oe({vertexShader:n,fragmentShader:s,uniforms:t,transparent:!0,depthWrite:!1})}function rs(i,e=1){let t=new _e(e*i.w/i.h,e);return t.translate(0,e/2,0),t}var Sl={kick:{hook:"col *= 1.0 + uK * 0.35 * smoothstep(0.35, 1.0, dot(col, vec3(0.33)));"},sweep:{hook:"{ float b = suv.x * 0.8 + suv.y * 0.35 - (uU * 1.8 - 0.45); col += uFxCol * exp(-b * b * 60.0) * (0.25 + 0.75 * d) * uFx.x; }"},rays:{hook:`{ vec2 L = uLight.xy; vec3 acc = vec3(0.0); vec2 p = uv; vec2 st = (vec2(L.x, L.y) - suv) * 0.035;
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
      col += vec3(1.6, 0.7, 0.2) * (g * 0.8 + 0.3) * ring * (1.0 - smoothstep(0.6, 1.2, uLight.w)); }`}},U2=[[0,0,0,1.04,0,0,0],[1,0,0,1.12,.012,0,.05]],Ao=class extends at{constructor(e,t,n=0,s=1){super(e,{ortho:!0}),this.o=t,this.t0=n,this.t1=s;let r=e.img[t.img];if(!r)throw new Error("missing image "+t.img);let a=t.dep===!1?null:e.img[t.dep||t.img+"_d"]||null,o=new Set;(t.fx||[]).forEach(u=>{Sl[u]&&Sl[u].needs&&o.add(Sl[u].needs),o.add(u)});let l=[...o].map(u=>Sl[u]).filter(Boolean),c={uU:{value:0},uL:{value:0},uK:{value:0},uS:{value:0},uH:{value:0},uE:{value:0},uFx:{value:new nt(...t.fxAmt||[1,1,1,0])},uFxCol:{value:new A(...t.fxCol||[1,.75,.5])},uLight:{value:new nt(...t.light||[.5,.8,0,0])},uWave:{value:new nt(.5,.5,0,1)},uWater:{value:t.water||0},uA:{value:new nt},uB:{value:new nt}},h=`uniform float uU, uL, uK, uS, uH, uE, uWater; uniform vec4 uFx, uLight, uWave, uA, uB; uniform vec3 uFxCol;
`+l.map(u=>u.head||"").join(`
`)+(t.head||"");this.M=Ml(r,a,{uniforms:c,head:h,warp:l.map(u=>u.warp||"").join(`
`)+(t.warp||"")+`
return uv;`,hook:l.map(u=>u.hook||"").join(`
`)+(t.hook||"")+`
return col;`}),this.U=this.M.uniforms,t.gain&&(this.U.uGain.value=t.gain),t.tint&&this.U.uTint.value.set(...t.tint),this.U.uBlur.value=t.blur??0,this.U.uFocus.value=t.focus??.7,this.scene.add(bl(this.M)),this.cuts=(t.cuts||[]).map((u,f)=>{let d=e.img[u.img];if(!d)throw new Error("missing cut "+u.img);let v=ss(d,{wind:u.wind??.5,rim:u.rim??.6,seed:f*3.1});u.rimCol&&v.uniforms.uRim.value.set(...u.rimCol,u.rim??.6),u.blend&&(v.blending=Fe);let y=new V(rs(d,u.h||1),v);return y.renderOrder=10+f,y.frustumCulled=!1,this.scene.add(y),{c:u,m:v,mesh:y}}),t.build&&t.build(this,e)}u(e){return fe((e-this.t0)/Math.max(.001,this.t1-this.t0))}update(e,t){let n=this.o,s=this.U,r=this.u(e),a=dl(r,n.cam||U2,n.e||re.sine),o=(n.punch??.6)*ae.hitPulse("kick",e,9);s.uCam.value.set(a[0]||0,a[1]||0,(a[2]||1)*(1+o*.018)),s.uPar.value.set(a[3]||0,a[4]||0),s.uDolly.value=a[5]||0,s.uAspect.value=this.ctx.aspect,s.uT.value=e,s.uU.value=r,s.uL.value=e-this.t0,s.uK.value=ae.hitPulse("kick",e,7),s.uS.value=ae.hitPulse("snare",e,8),s.uH.value=ae.hitPulse("hit",e,5),s.uE.value=ae.get("energy",e),n.wave&&s.uWave.value.set(...n.wave(e,r)),n.lightFn&&s.uLight.value.set(...n.lightFn(e,r)),n.fxFn&&s.uFx.value.set(...n.fxFn(e,r)),n.trainFn&&s.uA.value.set(...n.trainFn(e,r));for(let{c:l,m:c,mesh:h}of this.cuts){let u=l.fn(e,r,this);h.visible=(u.a??1)>.002,h.position.set(u.x??0,u.y??-1,1);let f=u.s??1;h.scale.set(f*(u.flip?-1:1),f,1),h.rotation.z=u.r||0,c.uniforms.uT.value=e,c.uniforms.uAlpha.value=u.a??1,c.uniforms.uDis.value=u.dis||0,u.tint&&c.uniforms.uTint.value.set(...u.tint)}n.tick&&n.tick(e,r,this)}post(e){let t=this.o,n=this.u(e),s={bloom:.75,bloomThr:.72,grain:.07,vig:.5,ca:.7,dust:.15,punch:(t.punch??.6)*ae.hitPulse("kick",e,10)*.6},r=typeof t.post=="function"?t.post(e,n,this):t.post||{};return{...s,...r}}},St=i=>(e,t,n)=>new Ao(e,i,t,n);var xt={mincho:'"OLK Mincho", "Yu Mincho", serif',serif:'"OLK Serif", "Times New Roman", serif',script:'"OLK Script", cursive',sc:'"OLK SC", "Songti SC", serif',mono:'"OLK Mono", monospace'};function Ut(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function tn(i,e={}){let t=new Wn(i);return t.colorSpace=e.linear?qt:un,t.anisotropy=4,e.repeat&&(t.wrapS=t.wrapT=Pi),e.mip===!1&&(t.generateMipmaps=!1,t.minFilter=It),t.needsUpdate=!0,t}function Rd(i,e={}){let t=e.size||96,n=e.pad??Math.ceil(t*.35),s=`${e.style||""} ${e.weight||400} ${t}px ${e.font||xt.serif}`,r=Ut(8,8).getContext("2d");r.font=s;let a=e.spacing||0,o=Math.ceil(r.measureText(i).width+a*i.length+n*2),l=Math.ceil(t*1.4+n*2),c=Ut(o,l),h=c.getContext("2d");return h.font=s,h.textBaseline="middle",h.fillStyle=e.color||"#fff","letterSpacing"in h&&(h.letterSpacing=a+"px"),e.glow&&(h.shadowColor=e.glowColor||e.color||"#fff",h.shadowBlur=e.glow),h.fillText(i,n,l/2),e.glow&&(h.shadowBlur=0,h.fillText(i,n,l/2)),{c,w:o,h:l}}function wl(i=128,e=1){let t=Ut(i,i),n=t.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.12*e,"rgba(255,255,255,0.55)"),r.addColorStop(.4,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,i),tn(t,{linear:!0})}var L2=`
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
}`,Ro=class extends at{constructor(e,t){super(e,{ortho:!0}),this.pages=t.map(r=>({...r,tex:this.draw(r)})),this.U={uTex:{value:this.pages[0].tex},uPrev:{value:null},uT:{value:0},uAge:{value:0},uAspect:{value:16/9},uFlash:{value:0},uRed:{value:0},uInv:{value:0}};let n=new oe({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:L2,uniforms:this.U,depthTest:!1}),s=new V(new _e(2,2),n);s.frustumCulled=!1,this.scene.add(s)}draw(e){let t=Ut(1920,1080),n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,1920,1080);for(let s of e.lines){if(n.save(),n.font=`${s.weight||800} ${s.size}px ${xt[s.font||"mincho"]}`,n.fillStyle=s.color||"#f4f1ea",n.textBaseline="alphabetic",n.translate(s.x*1920,s.y*1080),n.scale(s.sx||1,s.sy||1),n.textAlign=s.align||"left",s.track){let r=0,a=Array.from(s.s),o=a.reduce((l,c)=>l+n.measureText(c).width+s.track,-s.track);s.align==="center"?r=-o/2:s.align==="right"&&(r=-o),n.textAlign="left";for(let l of a)n.fillText(l,r,0),r+=n.measureText(l).width+s.track}else n.fillText(s.s,0,0);s.rule&&n.fillRect(s.rule[0],s.rule[1],s.rule[2],s.rule[3]),n.restore()}return tn(t,{mip:!1})}update(e){let t=0;for(;t+1<this.pages.length&&this.pages[t+1].t<=e;)t++;let n=this.pages[t];this.U.uTex.value=n.tex,this.U.uT.value=e,this.U.uAge.value=Math.max(0,e-n.t),this.U.uAspect.value=this.ctx.aspect,this.U.uRed.value=n.red||0,this.U.uInv.value=n.inv||0,this.U.uFlash.value=fe(.5-(e-n.t)*4)*(n.flash??.6)}post(e){return{bloom:.6,bloomThr:.6,grain:.1,vig:.35,ca:1.2,dust:0,tone:1,contrast:1.05,punch:ae.hitPulse("kick",e,12)*.5}}};var D2=`
uniform sampler2D uA, uB; uniform float uAspect, uAA, uBA, uAge, uT, uK, uRed, uInv, uWhip;
uniform vec4 uCamA, uCamB; uniform vec2 uDir; uniform vec3 uTint; varying vec2 vUv;
${Pe}
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
}`,As=class extends at{constructor(e,t,n={}){super(e,{ortho:!0}),this.cards=t.slice().sort((o,l)=>o.t-l.t),this.o=n;let s=o=>({value:o});this.U={uA:s(null),uB:s(null),uAspect:s(e.aspect),uAA:s(1.78),uBA:s(1.78),uAge:s(1),uT:s(0),uK:s(0),uRed:s(0),uInv:s(0),uWhip:s(0),uCamA:s(new nt(0,0,1,0)),uCamB:s(new nt(0,0,1,0)),uDir:s(new se(1,0)),uTint:s(new A(1,1,1))};let r=new oe({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:D2,uniforms:this.U,depthTest:!1,depthWrite:!1}),a=new V(new _e(2,2),r);a.frustumCulled=!1,this.scene.add(a);for(let o of this.cards){let l=e.img[o.img];if(!l)throw new Error("montage: missing "+o.img);o.e=l}}idx(e){let t=0;for(;t+1<this.cards.length&&this.cards[t+1].t<=e;)t++;return t}cam(e,t){let n=this.cards[this.cards.indexOf(e)+1],s=n?n.t-e.t:2.5,r=fe((t-e.t)/s),[a,o]=e.z||[1.14,1.05],l=e.dir||[1,0],c=re.outExpo(fe((t-e.t)/.45)),h=a+(o-a)*(.7*c+.3*r),u=(e.pan??.035)*(r-.5)*(e.rev?-1:1);return[l[0]*u+(e.x||0),l[1]*u+(e.y||0),h]}update(e){let t=this.U,n=this.idx(e),s=this.cards[n],r=this.cards[Math.max(0,n-1)],a=e-s.t;t.uA.value=r.e.tex,t.uAA.value=r.e.w/r.e.h,t.uB.value=s.e.tex,t.uBA.value=s.e.w/s.e.h,t.uCamA.value.set(...this.cam(r,e),0),t.uCamB.value.set(...this.cam(s,e),0),t.uAge.value=n===0&&a<0?1:a,t.uWhip.value=n===0?0:Math.max(0,1-a/.12)*(s.whip??1);let o=s.dir||[1,0];t.uDir.value.set(o[0],o[1]).normalize(),t.uAspect.value=this.ctx.aspect,t.uT.value=e,t.uK.value=ae.hitPulse("kick",e,8),t.uRed.value=s.red||0,t.uInv.value=s.inv&&a<.12?1:0,t.uTint.value.set(...s.tint||[1,1,1])}post(e){let t=this.cards[this.idx(e)],n=e-t.t;return{bloom:.7,bloomThr:.7,grain:.08,vig:.45,ca:.8+Math.max(0,1-n/.2)*2,dust:.1,shake:Math.max(0,1-n/.25)*.5,punch:ae.hitPulse("kick",e,10)*.4,...this.o.post||{}}}};var Zl={};hm(Zl,{Canyon:()=>Ll,Clothes:()=>Ul,Earth:()=>Cl,Flipbook:()=>Xl,Gallery:()=>Il,Helix2:()=>Yl,RedSea2:()=>Hl,SDAT:()=>Tl,Sketch2:()=>Kl,Sky:()=>Pl,Studio:()=>Dl,Train:()=>Fl});var Co=new A;function qn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Co.copy(e),Co[n]=0,Co.normalize();let c=.5*a/(a+o),h=1-Co.angleTo(i)/l;return Math.sign(Co[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Cr=class extends Mt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new A,l=new A,c=new A(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,v=new A,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:v.set(1,0,0),f[p+0]=qn(v,l,"z","y",r,n),f[p+1]=1-qn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[p+0]=1-qn(v,l,"z","y",r,n),f[p+1]=1-qn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[p+0]=1-qn(v,l,"x","z",r,e),f[p+1]=qn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[p+0]=1-qn(v,l,"x","z",r,e),f[p+1]=1-qn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[p+0]=1-qn(v,l,"x","y",r,e),f[p+1]=1-qn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[p+0]=qn(v,l,"x","y",r,e),f[p+1]=1-qn(v,l,"y","x",r,t);break}}};var Gu=8.92,nn=9.2,os=9.72,Uo=-.05,Wu=.03,Lo=-.03,Io=.0305,kn=-.08,On=-.024,Po=.085,N2=.034,Pr=-.03,Do=6.238,Ir=7.31,Ur=8.381,F2=[Do,Ir,Ur],H2=[[-1,Do,[[0,kn+.005,.0505,On+.013,kn,Io,On,34],[1.95,kn+.003,.048,On+.011,kn-.001,Io,On,34],[3.4,kn-.001,.056,On+.014,kn,Io,On,32],[4.5,Uo-.004,.097,Lo+.05,Uo,Io,Lo,32],[5.5,-.045,.15,.27,-.01,.02,-.02,34],[6.3,-.02,.1,.36,0,.03,-.03,33]]],[Do,Ir,[[Do,.6,.075,.66,.04,.035,-.06,30],[Ir,.5,.068,.55,.04,.03,-.06,29]]],[Ir,Ur,[[Ir,-.78,.05,.58,.05,.12,-.1,32],[Ur,-.68,.047,.5,.05,.115,-.1,31]]],[Ur,100,[[Ur,.62,.06,.58,-.05,.06,-.1,30],[8.6,.42,.07,.4,-.02,.05,-.02,30],[8.85,.045,.1,.17,0,.034,.05,28],[9.45,-.035,.15,.06,kn,Wu,On,30],[10,kn,.13,On+.022,kn,Wu,On,32],[10.6,kn,.085,On+.012,kn,Wu,On,40]]],[200,999,[[222.6,.155,.07,.075,.07,N2,Pr,28],[224.4,.02,.11,.12,-.04,.03,-.03,30],[226.3,.12,.9,.45,0,0,0,34]]]],k2=i=>i>200?2:i<Do?1:i<Ir?2:i<Ur?3:4,Cd={1:{kp:[-.8,.9,-.7],kc:11059455,ki:1.5,rp:[.7,.25,-.6],rc:4259728,ri:.3,ei:.6,amb:.05},2:{kp:[1.3,.35,-.5],kc:16752720,ki:3.2,rp:[-1,.4,.6],rc:6324479,ri:.25,ei:.7,amb:.08},3:{kp:[-.9,.3,.9],kc:16777215,ki:5,rp:[1,.2,-.8],rc:4223231,ri:.15,ei:.35,amb:.012},4:{kp:[-.9,.16,-.7],kc:16732208,ki:3.5,rp:[.8,.3,.6],rc:16736320,ri:.6,ei:.8,amb:.12}},O2=(i,e,t)=>{let n=((i*1.2+e*.6-t*1.1)/.8%1+1)%1;return B(.05,.1,n)*(1-B(.55,.6,n))};function z2(i,e){let t=e.length;if(i<=e[0][0])return e[0].slice(1);if(i>=e[t-1][0])return e[t-1].slice(1);let n=0;for(;e[n+1][0]<i;)n++;let s=e[n][0],r=e[n+1][0],a=r-s,o=(i-s)/a,l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,f=-2*c+3*l,d=c-l,v=(m,p)=>m<=0||m>=t-1?0:(e[m+1][p]-e[m-1][p])/(e[m+1][0]-e[m-1][0]),y=[];for(let m=1;m<e[0].length;m++)y.push(h*e[n][m]+u*a*v(n,m)+f*e[n+1][m]+d*a*v(n+1,m));return y}function B2(i){if(i>200)return i<224.4?-(i-222.6)*38-(i-222.6)**2*6:-(224.4-222.6)*38-1.8**2*6;if(i<nn){let e=i%1.07;return e<.9?e*3:2.7*(1-(e-.9)/.17)}return nn%1.07*3+(i-nn)*5+(i-nn)**2*3}var V2=`attribute vec3 aR; attribute float aE; uniform float uT, uS; varying float vA; varying vec3 vC;
void main(){ float u = uT - aR.x * 0.38 - aR.y * 0.22 - aE * 0.035; vA = step(0.0, u) * step(u, 2.4);
  u = max(u, 0.0); vec3 p = position; vec2 dir = normalize(p.xz - vec2(${kn}, ${On}) + 1e-4);
  float sw = sin(u * 6.0 + aR.z * 20.0) * 0.006 * u;
  p.xz += dir * (0.02 * u + 0.06 * u * u) * (0.4 + aR.z) + vec2(sw, -sw);
  p.y += 0.012 * u + (0.35 + aR.z * 0.5) * u * u;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uS * (0.5 + aR.z) / -mv.z, 1.0, 9.0);
  vC = mix(vec3(0.35, 1.8, 0.75), vec3(1.6, 1.8, 1.5), smoothstep(0.1, 0.9, u)) * (1.0 - smoothstep(1.4, 2.4, u)) * (aE > 0.5 ? 0.25 : 0.8); }`,G2=`varying float vA; varying vec3 vC; void main(){ vec2 q = gl_PointCoord - 0.5; float d = dot(q, q);
  if (vA < 0.5 || d > 0.25) discard; gl_FragColor = vec4(vC * exp(-d * 14.0), 1.0); }`,Id=`
uniform float uEnv, uT, uK; uniform vec3 uSun;
float bandm(float x, float a, float b, float s){ return smoothstep(a - s, a, x) * (1.0 - smoothstep(b, b + s, x)); }
vec3 skyHosp(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = vec3(0.012, 0.016, 0.022) * (0.6 + 0.4 * d.y);
  // window with blinds (behind the table), night-blue light through the slats
  float win = bandm(az, 2.35, 3.6, 0.02) * bandm(el, 0.08, 0.75, 0.02);
  float sl = smoothstep(0.35, 0.5, fract(el * 34.0)) * (0.75 + 0.25 * vnoise(vec2(az * 30.0, el * 34.0)));
  c = mix(c, vec3(0.12, 0.17, 0.26) * sl + vec3(0.01, 0.015, 0.03), win);
  c *= 1.0 - bandm(az, 2.93, 2.97, 0.004) * bandm(el, 0.08, 0.75, 0.01) * 0.9;           // window mullion
  // IV pole + bag silhouetted in the window
  float iv = bandm(az, 2.62, 2.635, 0.003) * bandm(el, -0.1, 0.62, 0.01) + bandm(az, 2.57, 2.69, 0.01) * bandm(el, 0.5, 0.62, 0.01) * 0.9;
  c = mix(c, vec3(0.004), clamp(iv, 0.0, 1.0));
  // the bed: pale sheet mass on the left
  float bed = bandm(az, -2.9, -1.2, 0.08) * bandm(el, -0.2, 0.1 + 0.05 * sin(az * 3.0), 0.03);
  c = mix(c, vec3(0.05, 0.06, 0.075) * (0.6 + 0.4 * vnoise(vec2(az * 6.0, el * 20.0))), bed);
  // ECG monitor on the right: dark screen, green trace
  float mon = bandm(az, 1.5, 2.0, 0.01) * bandm(el, 0.2, 0.45, 0.01);
  float x = (az - 1.5) / 0.5, ph = fract(x * 1.5 - uT * 0.55);
  float ecg = 0.5 + 0.35 * exp(-pow((ph - 0.5) * 40.0, 2.0)) - 0.12 * exp(-pow((ph - 0.54) * 40.0, 2.0)) + 0.05 * exp(-pow((ph - 0.7) * 12.0, 2.0));
  float ey = (el - 0.2) / 0.25, tr = exp(-pow((ey - ecg) * 60.0, 2.0)) * smoothstep(0.0, 0.15, fract(uT * 0.55 - x * 1.5 + 0.9));
  c = mix(c, vec3(0.005, 0.012, 0.008) + vec3(0.1, 1.2, 0.4) * tr, mon);
  return c;
}
vec3 skyTrain(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 wall = vec3(0.035, 0.05, 0.05), c = wall * (0.7 + 0.3 * d.y);
  c += vec3(0.25, 0.24, 0.2) * bandm(el, 1.05, 1.12, 0.01);                               // ceiling light strip
  float win = bandm(el, -0.02, 0.5, 0.012);
  vec3 sun = mix(vec3(0.75, 0.2, 0.05), vec3(0.08, 0.025, 0.07), smoothstep(0.0, 0.35, el)) + vec3(2.2, 0.8, 0.25) * exp(-pow(length(vec2(az + 1.2, el - 0.06) * vec2(1.0, 2.2)) * 6.0, 2.0));
  float fx = az * 22.0 + uT * 0.35, fh = 0.015 + 0.05 * hash12(vec2(floor(fx), 2.0));              // far skyline, slow, hazy
  sun = mix(sun, sun * 0.35 + vec3(0.03, 0.008, 0.015), step(el, fh));
  float bx = az * 9.0 + uT * 1.4, bh = (0.03 + 0.11 * hash12(vec2(floor(bx), 1.0))) * step(0.35, hash12(vec2(floor(bx), 3.0)));
  sun = mix(sun, vec3(0.018, 0.008, 0.012) + vec3(0.25, 0.08, 0.02) * step(0.93, fract(bx)), step(el, bh));   // near buildings, fast
  float pole = bandm(fract(az * 2.0 + uT * 3.0), 0.0, 0.012, 0.003) * step(el, 0.42); sun = mix(sun, vec3(0.01), pole);
  sun += vec3(0.3, 0.12, 0.03) * bandm(el, 0.33, 0.335, 0.002);                                     // overhead wire
  c = mix(c, sun, win);
  c *= 1.0 - bandm(fract(az * 1.2), 0.0, 0.025, 0.004) * win;                                // window posts
  float strap = bandm(fract(az * 4.0), 0.49, 0.51, 0.004) * bandm(el, 0.55, 0.95, 0.01);
  float ring = bandm(abs(length(vec2((fract(az * 4.0) - 0.5) * 3.0, el - 0.52) * vec2(1.0, 1.0)) - 0.035), 0.0, 0.008, 0.004);
  c = mix(c, vec3(0.01), clamp(strap + ring * bandm(el, 0.45, 0.6, 0.0), 0.0, 1.0));
  c = mix(c, vec3(0.02, 0.07, 0.07) + vec3(0.9, 0.4, 0.12) * 0.25 * step(0.6, fract(az * 1.2 - uT * 0.5)), bandm(el, -0.4, -0.02, 0.01));  // seat backs across the aisle
  return c;
}
vec3 skyMoon(vec3 d){
  float el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = vec3(0.0005) + vec3(1.0) * step(0.9975, hash13(floor(d * 420.0))) * 0.6 * smoothstep(0.0, 0.1, el);
  vec3 E = normalize(vec3(0.55, 0.26, -0.8)); float r = acos(clamp(dot(d, E), -1.0, 1.0)), R = 0.07;
  if (r < R) { vec3 T = normalize(cross(E, vec3(0, 1, 0))), B = cross(T, E); vec2 q = vec2(dot(d - E, T), dot(d - E, B)) / R;
    vec3 n = normalize(vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))))); vec3 w = n.x * T + n.y * B + n.z * (-E);
    float l = max(dot(w, normalize(uSun)), 0.0) * 0.8 + 0.2 * max(-n.x, 0.0);
    float land = smoothstep(0.52, 0.56, fbm3(w * 3.0 + 2.0)), cl = smoothstep(0.55, 0.7, fbm3(w * 5.0 + 9.0));
    vec3 e = mix(mix(vec3(0.02, 0.07, 0.25), vec3(0.18, 0.2, 0.08), land), vec3(1.0), cl) * l * 1.6;
    c = mix(e, vec3(0.3, 0.55, 1.0) * 0.6, pow(dot(q, q), 3.0)); }
  c += vec3(0.2, 0.4, 1.0) * 0.2 * exp(-max(r - R, 0.0) * 120.0) * step(R, r);
  float hz = 0.012 * vnoise(vec2(atan(d.x, d.z) * 14.0, 0.0)) + 0.006 * vnoise(vec2(atan(d.x, d.z) * 60.0, 3.0));
  c = mix(c, vec3(0.1, 0.1, 0.105) * (0.6 + 0.4 * vnoise(vec2(atan(d.x, d.z) * 30.0, el * 80.0))), step(el, hz));
  return c;
}
vec3 skyRed(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = mix(vec3(0.45, 0.04, 0.03), vec3(0.03, 0.0, 0.005), smoothstep(0.0, 0.8, el));
  c += vec3(1.0, 0.85, 0.8) * 0.5 * exp(-pow((acos(clamp(dot(d, normalize(vec3(-0.55, 0.62, -0.56))), -1.0, 1.0)) - 0.32) * 60.0, 2.0)); // the halo ring
  vec3 S = normalize(uSun); float sd = acos(clamp(dot(d, S), -1.0, 1.0));
  c += vec3(2.4, 0.4, 0.2) * exp(-sd * sd * 900.0) + vec3(0.6, 0.06, 0.03) * exp(-sd * 5.0);
  for (int i = 0; i < 5; i++) { float fa = -2.6 + float(i) * 0.33 + 0.1 * sin(float(i) * 7.0), s = 1.0 - 0.15 * float(i % 3);
    float cr = bandm(az, fa - 0.004 * s, fa + 0.004 * s, 0.002) * bandm(el, 0.0, 0.14 * s, 0.003) + bandm(az, fa - 0.03 * s, fa + 0.03 * s, 0.003) * bandm(el, 0.095 * s, 0.108 * s, 0.003);
    c += vec3(1.6, 1.1, 1.0) * clamp(cr, 0.0, 1.0) * (0.8 + 0.4 * uK); }
  float sea = step(el, 0.0), wv = vnoise(vec2(az * 14.0, el * 1600.0 + uT * 3.0));
  vec3 sc = vec3(0.12, 0.005, 0.01) * (0.6 + 0.4 * wv) + vec3(1.5, 0.3, 0.15) * pow(wv, 6.0) * exp(-abs(az - atan(S.x, S.z)) * 6.0) * 0.5;
  return mix(c, sc, sea);
}
vec3 sky(vec3 d){ int e = int(uEnv + 0.5); return e == 1 ? skyHosp(d) : e == 2 ? skyTrain(d) : e == 3 ? skyMoon(d) : e == 4 ? skyRed(d) : vec3(0.0); }`,Pd="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",W2=`uniform float uRev; varying vec3 vW; ${Pe} ${Id}
void main(){ vec3 d = normalize(vW - cameraPosition); gl_FragColor = vec4(sky(d) * uRev, 1.0); }`,X2=`uniform float uRev, uAmb, uKi, uMir; uniform vec3 uKc, uKp; varying vec3 vW; ${Pe} ${Id}
float boxS(vec3 p){ vec3 q = abs(p - vec3(0.0, 0.0, 0.0)) - vec3(0.16, 0.03, 0.1); return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0); }
float shadow(vec3 p, vec3 L, float k){ float r = 1.0, s = 0.004; for (int i = 0; i < 28; i++){ float h = boxS(p + L * s); r = min(r, k * h / s); s += clamp(h, 0.004, 0.06); if (r < 0.01 || s > 1.2) break; } return clamp(r, 0.0, 1.0); }
void main(){
  int e = int(uEnv + 0.5); vec2 P = vW.xz; vec3 L = normalize(uKp - vW); float dist = length(vW - cameraPosition);
  vec3 alb; float mask = 1.0, a = 1.0, k = 18.0, rough = 1.0;
  if (e == 1) {            // hospital bedside table: pale laminate, blind stripes across it
    alb = vec3(0.42, 0.44, 0.46) * (0.9 + 0.1 * vnoise(P * vec2(8.0, 90.0)));
    mask = 0.25 + 0.75 * smoothstep(0.35, 0.5, fract((P.x * 0.6 - P.y * 0.8) * 18.0));
    a = (1.0 - smoothstep(0.45, 0.47, P.y)) * (1.0 - smoothstep(0.6, 0.62, abs(P.x))) * (1.0 - smoothstep(-0.5, -0.52, P.y)); k = 10.0; rough = 0.5;
  } else if (e == 2) {     // train seat: teal velvet, the sunset windows sliding over it
    float fab = vnoise(P * 700.0) * 0.5 + vnoise(P * vec2(60.0, 300.0)) * 0.5;
    alb = vec3(0.03, 0.11, 0.11) * (0.75 + 0.5 * fab);
    float f = fract((P.x * 1.2 + P.y * 0.6 - uT * 1.1) / 0.8); mask = 0.1 + 0.9 * smoothstep(0.05, 0.1, f) * (1.0 - smoothstep(0.55, 0.6, f));
    a = (1.0 - smoothstep(0.5, 0.52, P.y)) * (1.0 - smoothstep(-0.55, -0.57, P.y)); k = 6.0;
  } else if (e == 3) {     // lunar regolith, hard black shadow
    float cr = 0.0; vec2 g = P * 6.0; vec2 id = floor(g), fg = fract(g) - 0.5; float cd = length(fg - (hash22(id) - 0.5) * 0.5);
    cr = smoothstep(0.28, 0.2, cd) * step(0.6, hash12(id)) * (smoothstep(0.1, 0.24, cd) - 0.5);
    alb = vec3(0.34, 0.33, 0.32) * (0.7 + 0.35 * fbm(P * 20.0) + 0.15 * vnoise(P * 400.0) + cr * 0.6);
    k = 60.0;
  } else {                 // red shore: wet sand with ripples, then the LCL sea
    float rip = sin(P.x * 90.0 + vnoise(P * 12.0) * 6.0) * 0.5 + 0.5;
    alb = mix(vec3(0.18, 0.1, 0.09), vec3(0.3, 0.2, 0.18), rip) * (0.8 + 0.3 * vnoise(P * 300.0));
    alb = mix(alb, vec3(0.08, 0.0, 0.005), smoothstep(-0.7, -0.9, P.y)); rough = 0.35; k = 12.0;
  }
  float sh = shadow(vW + vec3(0.0, 0.001, 0.0), L, k);
  float nl = max(L.y, 0.0), fall = uKi * 0.35 / (1.0 + dot(uKp - vW, uKp - vW) * 0.4);
  vec3 c = alb * (uAmb * vec3(0.8, 0.9, 1.0) + uKc * nl * fall * mask * sh * 1.4);
  if (e == 4) c += vec3(0.6, 0.03, 0.02) * 0.06 * smoothstep(-0.6, -0.9, P.y);
  // specular sheen toward the light
  vec3 V = normalize(cameraPosition - vW), H = normalize(L + V);
  c += uKc * pow(max(H.y, 0.0), mix(12.0, 60.0, 1.0 - rough)) * fall * mask * sh * (1.0 - rough) * 0.3;
  // far ground fades into the horizon colour of the dome
  vec3 d = normalize(vW - cameraPosition); vec3 hz = sky(normalize(vec3(d.x, -0.004, d.z)));
  c = mix(c, hz, smoothstep(0.5, 3.0, dist) * (e == 3 || e == 4 ? 1.0 : 0.0));
  float alpha = a * (1.0 - uMir * (1.0 - smoothstep(0.1, 0.35, dist)) * 0.35);
  gl_FragColor = vec4(c * uRev, alpha); }`,q2=`attribute vec3 aCell; attribute vec4 aR; uniform float uT, uCell, uAlt; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
void main(){
  float r1 = aR.x, r2 = aR.y, sparse = aR.z, fd = aR.w;
  float spawn = sparse > 0.5 ? 0.25 + r1 * 1.6 : 2.0 + fd * 1.4 + r1 * 0.9;
  float arrive = spawn + (sparse > 0.5 ? 1.6 + r2 * 0.8 : 0.6 + r2 * 0.5);
  float u = smoothstep(spawn + 0.1, arrive, uT); u = u * u * (3.0 - 2.0 * u);
  vec3 off = vec3((r1 - 0.5) * 0.06, 0.001 + r2 * 0.005, (fract(r1 * 7.3) - 0.5) * 0.05) * (sparse > 0.5 ? 0.35 : 1.0);
  off.xz += vec2(sin(uT * 1.3 + r1 * 30.0), cos(uT * 1.1 + r2 * 30.0)) * 0.002 * (1.0 - u);
  vFly = 1.0 - smoothstep(0.88, 1.0, u); vA = smoothstep(spawn, spawn + 0.35, uT);
  vOn = uAlt > 0.5 ? step(1.5, aCell.z) : mod(aCell.z, 2.0); vH = r1; vSp = r2;
  float s = mix(uCell * 0.92, uCell * 1.8, vFly);
  vec3 p = vec3(aCell.x, ${Io+3e-4}, aCell.y) + off * (1.0 - u) + vec3(position.x, 0.0, -position.y) * s;
  vQ = position.xy + 0.5; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,Y2=`uniform float uT, uMode, uFade; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
vec3 hue(float h){ return clamp(abs(fract(h + vec3(0.0, 0.667, 0.333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0); }
void main(){
  vec2 q = vQ - 0.5; float d = dot(q, q);
  vec3 spk = hue(vH + uT * 0.05) * 0.6 + 0.4; spk *= exp(-d * 18.0) * 0.9;
  float sx = fract(vQ.x * 3.0); int ch = int(vQ.x * 3.0);
  vec3 sub = vec3(ch == 0 ? 1.0 : 0.0, ch == 1 ? 1.0 : 0.0, ch == 2 ? 1.0 : 0.0) * smoothstep(0.0, 0.15, sx) * smoothstep(1.0, 0.85, sx) * smoothstep(0.0, 0.08, vQ.y) * smoothstep(1.0, 0.92, vQ.y);
  float fl = 0.5 + 0.5 * sin(uT * (6.0 + vSp * 9.0) + vH * 40.0);
  vec3 rainbow = hue(vH * 0.7 + uT * 0.12 + vQ.y * 0.1) * (0.35 + 0.9 * fl) + vec3(0.3) * vOn * smoothstep(3.3, 4.0, uT);
  vec3 lcdc = vOn > 0.5 ? vec3(0.9, 2.6, 1.6) : vec3(0.02, 0.06, 0.035);
  vec3 cellc = mix(rainbow * 0.55, lcdc * 0.8, uMode) * sub * 1.6;
  vec3 c = mix(cellc, spk, vFly) * vA * uFade;
  if (dot(c, c) < 1e-6) discard; gl_FragColor = vec4(c, 1.0); }`;function Xu(i,e,t){i.fillStyle="#0d1a10",i.fillRect(0,0,512,192),i.fillStyle="rgba(120,255,170,0.06)";for(let r=0;r<192;r+=4)i.fillRect(0,r,512,1);i.fillStyle="#8dffbf",i.shadowColor="#5dff9a",i.shadowBlur=14,i.font=`700 30px ${xt.mono}`,i.fillText(t.mode,22,46),i.font=`700 22px ${xt.mono}`,i.fillText("TR",22,128),i.font=`700 104px ${xt.mono}`,i.fillText(e,70,160),i.font=`700 40px ${xt.mono}`,i.fillText(t.time,260,160),i.font=`500 20px ${xt.mono}`,i.fillText(t.sub,262,96),i.strokeStyle="#8dffbf",i.lineWidth=3,i.strokeRect(430,22,56,24),i.fillRect(434,26,20+28*t.bat,16)}var Tl=class extends at{constructor(e){super(e,{fov:30,near:.004,far:60});let t=this.scene,n=e.renderer;this.U={uEnv:{value:1},uT:{value:0},uK:{value:0},uSun:{value:new A(0,1,0)},uRev:{value:1}};let s=new oe({vertexShader:Pd,fragmentShader:W2,uniforms:this.U,side:_t,depthWrite:!1});this.dome=new V(new bn(20,64,32),s),this.dome.renderOrder=-100,this.dome.frustumCulled=!1,t.add(this.dome);let r=new mi(n),a=new Gn;a.add(new V(this.dome.geometry,s)),this.envs={};for(let xe of[1,2,3,4])this.U.uEnv.value=xe,this.U.uSun.value.set(...Cd[xe].kp).normalize(),this.U.uT.value=3,this.envs[xe]=r.fromScene(a,.02,.1,40).texture;r.dispose();let o=this.dev=new an;t.add(o);let l=new st({color:10133672,metalness:.9,roughness:.32}),c=new st({color:1711136,metalness:.5,roughness:.5}),h=new V(new Cr(.32,.06,.2,5,.018),l);o.add(h);let u=Ut(512,320),f=u.getContext("2d");f.fillStyle="#888",f.fillRect(0,0,512,320);let d=ut(4);for(let xe=0;xe<900;xe++)f.fillStyle=`rgba(${d()>.5?255:0},${d()>.5?255:0},255,${.03+d()*.05})`,f.fillRect(0,d()*320,512,1);f.font=`700 26px ${xt.mono}`,f.fillStyle="#2a2c30",f.fillText("S-DAT",380,296),f.font=`500 13px ${xt.mono}`,f.fillText("DIGITAL AUDIO TAPE  WM-D3",22,300),f.strokeStyle="#555",f.lineWidth=2,f.strokeRect(14,14,484,292);let v=new V(new _e(.3,.185),new st({map:tn(u),metalness:.85,roughness:.38}));v.rotation.x=-Math.PI/2,v.position.y=.0301,o.add(v),this.lc=Ut(512,192),this.lg=this.lc.getContext("2d"),this.lt=tn(this.lc);let y=new Tt({map:this.lt,toneMapped:!1}),m=new V(new _e(.128,.048),y);m.rotation.x=-Math.PI/2,m.position.set(-.05,.0305,-.03),o.add(m);let p=new V(new _e(.14,.058),c);p.rotation.x=-Math.PI/2,p.position.set(-.05,.03025,-.03),o.add(p),this.lcdLight=new Sn(6160282,.02,.4),this.lcdLight.position.set(-.05,.06,-.03),o.add(this.lcdLight),this.btn=[];for(let xe=0;xe<5;xe++){let X=new V(new Cr(.03,.012,.018,3,.004),xe===0?l:c);X.position.set(-.07+xe*.036,.034,.055),o.add(X),this.btn.push(X)}let _=new V(new el(.004,3),new Tt({color:2883464}));_.rotation.x=-Math.PI/2,_.position.set(-.07,.0405,.055),o.add(_),this.tri=_;let g=new V(new Gt(.005,.005,.02,12),l);g.rotation.z=Math.PI/2,g.position.set(.17,.01,-.06),o.add(g);let E=[new A(.18,.01,-.06),new A(.26,-.02,-.08),new A(.34,-.029,.02),new A(.22,-.029,.16),new A(-.05,-.029,.22),new A(-.3,-.029,.12),new A(-.42,-.029,-.1),new A(-.3,-.029,-.28),new A(-.1,-.029,-.32)],b=new Fn(E),T=new st({color:1381914,metalness:.3,roughness:.35});t.add(new V(new ri(b,200,.0022,8),T));let S=new Fn([E[8],new A(.02,-.029,-.36),new A(.1,-.024,-.3)]),C=new Fn([E[8],new A(-.02,-.029,-.42),new A(.04,-.024,-.48)]);for(let xe of[S,C]){t.add(new V(new ri(xe,40,.0018,8),T));let X=new V(new bn(.014,24,16),l);X.scale.set(1,.6,1),X.position.copy(xe.getPoint(1)),t.add(X);let j=new V(new Gt(.013,.013,.006,24),new st({color:789516,roughness:.9}));j.position.copy(xe.getPoint(1)).add(new A(0,.006,0)),t.add(j)}let U=Ut(256,160),x=U.getContext("2d");x.fillStyle="#16171a",x.fillRect(0,0,256,160),x.fillStyle="#d9d2c2",x.fillRect(18,112,220,30),x.fillStyle="#16171a",x.font=`700 16px ${xt.mono}`,x.fillText("DAT  120",30,133),x.fillStyle="#b8b0a0",x.font=`500 11px ${xt.mono}`,x.fillText("SIDE A",176,133);let M=new V(new _e(.1,.062),new st({map:tn(U),metalness:.2,roughness:.6}));M.rotation.x=-Math.PI/2,M.position.set(Po,.0303,Pr),o.add(M);let L=new V(new Cr(.108,.006,.07,2,.002),c);L.position.set(Po,.0315,Pr),L.scale.set(1,1,1),o.add(L);let F=new st({color:15262938,metalness:.05,roughness:.5}),k=new st({color:2759186,metalness:.55,roughness:.28});this.reels=[],[-.024,.024].forEach((xe,X)=>{let j=new an;j.position.set(Po+xe,.0352,Pr-.004),j.add(new V(new Gt(X?.0125:.0175,X?.0125:.0175,.0022,40),k)),j.add(new V(new Gt(.0072,.0072,.0034,24),F));for(let Z=0;Z<6;Z++){let q=new V(new Mt(.0022,.0038,.0014),c),ee=Z/6*Math.PI*2;q.position.set(Math.cos(ee)*.0046,0,Math.sin(ee)*.0046),q.rotation.y=-ee,j.add(q)}let de=new V(new Mt(.0115,.0036,.0016),F);j.add(de),o.add(j),this.reels.push(j)});let K=new V(new Mt(.05,.002,6e-4),k);K.position.set(Po,.0352,Pr+.018),o.add(K),this.reelIdx=this.reels.map(xe=>o.children.indexOf(xe));let O=new V(new _e(.104,.066),new st({color:2240576,metalness:.4,roughness:.22,transparent:!0,opacity:.18,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.set(Po,.0372,Pr),o.add(O);let ne=o.clone();ne.scale.y=-1,ne.position.y=-.06,t.add(ne),this.mir=ne,this.FU={...this.U,uAmb:{value:.05},uKi:{value:1},uMir:{value:1},uKc:{value:new we},uKp:{value:new A}};let Y=new V(new _e(30,30),new oe({vertexShader:Pd,fragmentShader:X2,uniforms:this.FU,transparent:!0,depthWrite:!1}));Y.rotation.x=-Math.PI/2,Y.position.y=-.03,t.add(Y),this.key=new Qi(16777215,0,8,.6,.5,1),t.add(this.key),t.add(this.key.target),this.rim=new yr(16777215,0),t.add(this.rim),this.amb=new _r(16777215,0),t.add(this.amb);let pe=400,he=new Ge,ve=new Float32Array(pe*3),Ze=ut(9);for(let xe=0;xe<pe;xe++)ve[xe*3]=(Ze()-.5)*1.4,ve[xe*3+1]=Ze()*.8,ve[xe*3+2]=(Ze()-.5)*1.4;he.setAttribute("position",new qe(ve,3)),this.dust=new bt(he,new Mn({color:16771272,size:.004,transparent:!0,opacity:.5,blending:Fe,depthWrite:!1})),t.add(this.dust);{let de=dt=>{let ke=Ut(512,192),Qe=ke.getContext("2d");return Xu(Qe,dt,{mode:"\u25B6 PLAY",time:"03:43",sub:"REPEAT 1",bat:1}),Qe.getImageData(0,0,512,192).data},Z=de("26"),q=de("25"),ee=[],ue=[],ye=ut(33),He=(dt,ke,Qe)=>{let ze=0;for(let ct=0;ct<4;ct++)for(let Be=0;Be<4;Be++)ze=Math.max(ze,dt[((Qe*4+ct)*512+ke*4+Be)*4+1]);return ze>150?1:0};for(let dt=0;dt<48;dt++)for(let ke=0;ke<128;ke++){let Qe=Uo+((ke+.5)/128-.5)*.128,ze=Lo+((dt+.5)/48-.5)*.048,ct=Math.min(1,Math.hypot(Qe-kn,ze-On)/.07),Be=ye()<.04*(1-ct)+.004?1:0;ee.push(Qe,ze,He(Z,ke,dt)+2*He(q,ke,dt)),ue.push(ye(),ye(),Be,ct)}let I=new wn;I.index=new qe(new Uint16Array([0,1,2,0,2,3]),1),I.setAttribute("position",new Ve([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),I.setAttribute("aCell",new gt(new Float32Array(ee),3)),I.setAttribute("aR",new gt(new Float32Array(ue),4)),I.instanceCount=128*48,this.PU={uT:{value:0},uCell:{value:.001},uAlt:{value:0},uMode:{value:0},uFade:{value:1}},this.pix=new V(I,new oe({vertexShader:q2,fragmentShader:Y2,uniforms:this.PU,transparent:!0,depthWrite:!1,blending:Fe})),this.pix.frustumCulled=!1,this.pix.renderOrder=5,t.add(this.pix)}{let xe=Ut(512,192),X=xe.getContext("2d");Xu(X,"27",{mode:"\u25B6\u25B6|",time:"00:00",sub:"NEXT",bat:1});let j=X.getImageData(0,0,512,192).data,de=[],Z=[],q=[],ee=ut(21);for(let ye=60;ye<176;ye+=2)for(let He=60;He<250;He+=2)j[(ye*512+He)*4+1]>200&&(de.push(Uo+(He/512-.5)*.128,.0312,Lo+(ye/192-.5)*.048),Z.push(He/512,ee(),ee()),q.push(0));for(let ye=0;ye<500;ye++)de.push(Uo+(ee()-.5)*.13,.0312,Lo+(ee()-.5)*.05),Z.push(ee()*.5,ee(),ee()*.6),q.push(1);let ue=new Ge;ue.setAttribute("position",new Ve(de,3)),ue.setAttribute("aR",new Ve(Z,3)),ue.setAttribute("aE",new Ve(q,1)),this.SU={uT:{value:-1},uS:{value:1}},this.sparks=new bt(ue,new oe({vertexShader:V2,fragmentShader:G2,uniforms:this.SU,transparent:!0,depthWrite:!1,blending:Fe})),this.sparks.frustumCulled=!1,t.add(this.sparks)}this.lcdM=y,this.metal=l,this._s=""}draw(e){let t="26",n="\u25B6 PLAY",s="REPEAT 1",r,a=e>200;if(a){let l=e>224.4;t="27",n=l?"\u25A0 STOP":"\u25C0\u25C0 REW",s=l?"END":"REW";let c=l?0:Math.max(0,(224.4-e)*40);r=`${String(Math.floor(c/60)).padStart(2,"0")}:${String(Math.floor(c%60)).padStart(2,"0")}`}else{t=e<nn?Math.floor(e/1.07)%4===3?"25":"26":"27",e<Gu?n=Math.floor(e*2)%2?"\u25B6 PLAY":"\u25B6":e<nn&&(n="\u25B6\u25B6|"),s=e<nn?"REPEAT 1":"NEXT";let l=e<nn?e%4.3+3*60+41:e-nn;r=`${String(Math.floor(l/60)).padStart(2,"0")}:${String(Math.floor(l%60)).padStart(2,"0")}`}let o=t+n+r+s;o!==this._s&&(this._s=o,this.lg.clearRect(0,0,512,192),Xu(this.lg,t,{mode:n,time:r,sub:s,bat:a?.2:1}),this.lt.needsUpdate=!0)}update(e){let t=e>200,n=H2.find(g=>e>=g[0]&&e<g[1]),s=z2(e,n[2]),r=ae.hitPulse("kick",e,8),a=!t&&e>nn?.0015*r:0,o=.0012*Math.sin(e*.9)+8e-4*Math.sin(e*1.7+1),l=!t&&e<4.6?1-B(3.4,4.6,e):0;this.camera.position.set(s[0]+a+o*(1-l),s[1]+o*.6*(1-l),s[2]),this.camera.up.set(0,1,0),Math.abs(s[0]-s[3])<.001&&Math.abs(s[2]-s[5])<.03&&this.camera.up.set(0,0,-1),this.camera.lookAt(s[3],s[4],s[5]),this.camera.fov=s[6],this.camera.updateProjectionMatrix(),this.dome.position.copy(this.camera.position);let c=k2(e),h=Cd[c],u=t?1-B(225.4,226.3,e)*.7:c===1?B(4.7,6,e):1;this.U.uEnv.value=c,this.U.uT.value=e,this.U.uK.value=r,this.U.uRev.value=u,this.FU.uMir.value=c===3?0:1,this.key.position.set(...h.kp),this.key.target.position.set(0,0,0),this.key.color.setHex(h.kc);let f=h.ki*u*(1+.2*r);c===2&&(f*=.25+.75*O2(0,0,e)),c===1&&(f*=.8+.2*Math.sin(e*1.3)),c===4&&!t&&(f*=1+1.2*B(nn-.05,nn+.2,e)),this.key.intensity=f,this.rim.position.set(...h.rp),this.rim.color.setHex(h.rc),this.rim.intensity=h.ri*u,this.amb.intensity=h.amb*3*u,this.scene.environment=this.envs[c],this.scene.environmentIntensity=h.ei*u,this.U.uSun.value.set(...h.kp).normalize(),this.FU.uKi.value=f,this.FU.uKc.value.setHex(h.kc),this.FU.uKp.value.set(...h.kp),this.FU.uAmb.value=h.amb,this.dust.visible=c<=2,this.dust.rotation.y=e*.03,this.dust.position.y=-(e*.01%.2);let d=!t&&e<6.3;this.pix.visible=d,this.PU.uT.value=e,this.PU.uMode.value=B(3.6,4.6,e),this.PU.uFade.value=1-B(5,5.9,e),this.PU.uAlt.value=Math.floor(e/1.07)%4===3?1:0;let v=B2(e);this.reels.forEach((g,E)=>{g.rotation.y=-v*(E?1.4:1),this.mir.children[this.reelIdx[E]].rotation.y=g.rotation.y});let y=t?-1:e-os;this.SU.uT.value=y,this.SU.uS.value=this.ctx.h*.012,this.sparks.visible=y>-.05;let m=t?0:B(os,os+.5,e),p=t?1:B(4.9,5.9,e);this.lcdM.color.setScalar(p*(1-m*.9)),this.draw(e),this.lcdLight.intensity=(.004+.002*Math.sin(e*40))*p+(t?0:.05*B(os-.1,os+.2,e)*(1-B(os+.3,10.5,e)));let _=t?B(224.2,224.4,e):B(Gu-.08,Gu,e)*(1-B(nn+.05,nn+.3,e));this.btn[2].position.y=.034-_*.005,this.mir.children[this.dev.children.indexOf(this.btn[2])].position.y=this.btn[2].position.y,this.tri.material.color.setHex(Math.floor(e*2)%2||e>nn?2883464:670238)}post(e){let t=e>200,n=t?0:B(nn-.05,nn+.3,e),s=0;if(!t)for(let a of F2)e>=a&&(s=Math.max(s,Math.exp(-(e-a)*14)));let r=t?0:1-B(4.4,5.6,e);return{exposure:1.05,bloom:.55+r*.1+n*.3+(t?0:B(os,os+.6,e)*.5),bloomThr:.78+r*.1,grain:.09,vig:.65,ca:.6+r*.8+s*2,dust:.25,letter:.12,fadeB:t?B(225.2,226.2,e)*.6:0,fadeW:0,glitch:(t&&e<224.4?.25:0)+s*.6,scan:t?.2:s*.5,punch:ae.hitPulse("kick",e,10)*.3*(e>nn?1:.3)}}};var qu="vec3 rotY(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }",No=`varying vec3 vN, vW;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`,Ud=`vec3 dirOf(vec2 uv){ float lon = (uv.x - 0.5) * 6.2831853, lat = (uv.y - 0.5) * 3.1415926; return vec3(cos(lat) * sin(lon), sin(lat), cos(lat) * cos(lon)); }
float fbm6(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<6;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
float fbm9(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<9;i++){ s += a*vnoise3(p); p = p*2.01 + 7.3; a *= 0.5; } return s; }
float ridge(vec3 p){ float s = 0.0, a = 0.5, w = 1.0; for(int i=0;i<7;i++){ float n = 1.0 - abs(vnoise3(p) * 2.0 - 1.0); n *= n * w; w = clamp(n * 1.6, 0.0, 1.0); s += a * n; p = p * 2.07 + 11.3; a *= 0.5; } return s; }`,Ld=`varying vec2 vUv; ${Pe} ${Ud}
void main(){
  vec3 p = dirOf(vUv);
  vec3 w = vec3(fbm6(p * 1.2 + 1.0), fbm6(p * 1.2 + 5.2), fbm6(p * 1.2 + 9.7)) - 0.5;
  vec3 q = p * 1.5 + w * 1.1;
  float c = fbm9(q + 3.0) - 0.53;
  float coast = smoothstep(-0.02, 0.12, c);
  float h = c + ridge(q * 2.6 + 4.0) * 0.32 * coast * smoothstep(0.35, 0.7, fbm6(p * 2.0 + 30.0)) + (fbm9(p * 22.0) - 0.5) * 0.05;
  h -= (1.0 - smoothstep(-0.25, 0.0, c)) * 0.15 * fbm6(p * 3.0 + 2.0);   // ocean basins
  float lat = abs(p.y);
  float moist = fbm6(p * 2.4 + 20.0) + 0.35 * (fbm6(q * 7.0 + 50.0) - 0.5) + 0.12 * (ridge(p * 9.0 + 3.0) - 0.4) + 0.25 * cos(lat * 9.0) - 0.1 * smoothstep(0.0, 0.1, h) + 0.15 * (1.0 - coast);
  float city = smoothstep(0.62, 0.92, vnoise3(p * 420.0)) * smoothstep(0.5, 0.8, fbm6(p * 6.0 + 40.0))
             * smoothstep(0.0, 0.02, h) * (0.4 + 0.6 * smoothstep(0.12, 0.0, h)) * (1.0 - smoothstep(0.65, 0.8, lat));
  city = max(city, 0.6 * step(0.985, vnoise3(p * 900.0)) * smoothstep(0.0, 0.02, h) * smoothstep(0.55, 0.7, fbm6(p * 6.0 + 40.0)));
  float hh = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0);
  gl_FragColor = vec4(floor(hh / 256.0) / 255.0, mod(hh, 256.0) / 255.0, clamp(moist, 0.0, 1.0), clamp(city, 0.0, 1.0)); }`,Dd=`varying vec2 vUv; ${Pe} ${Ud}
void main(){
  vec3 p = dirOf(vUv); float lat = p.y;
  vec3 w = vec3(fbm6(p * 2.0 + 3.0), fbm6(p * 2.0 + 8.0), fbm6(p * 2.0 + 13.0)) - 0.5;
  vec3 q = p * vec3(2.2, 4.5, 2.2) + w * 1.6 + vec3(0.0, 0.0, sin(lat * 12.0) * 0.4);   // latitude-banded, swirled
  float d = fbm9(q * 1.3) + 0.25 * (fbm6(p * 9.0 + w * 3.0) - 0.5);
  d += 0.12 * cos(lat * 7.5) - 0.06;
  float e = fbm9(p * 30.0 + w * 4.0); d -= (1.0 - e) * 0.18;                   // eroded, wispy edges
  gl_FragColor = vec4(smoothstep(0.36, 0.7, d), e, 0.0, 1.0); }`,Nd=`
uniform float uT, uRot, uRed, uFront, uEdge, uCloud, uLights, uK, uBump;
uniform vec3 uSun, uAxis; uniform sampler2D tH, tC; uniform vec2 uTexel;
varying vec3 vN, vW;
${Pe} ${qu}
vec2 uvOf(vec3 p){ return vec2(atan(p.x, p.z) / 6.2831853 + 0.5, asin(clamp(p.y, -1.0, 1.0)) / 3.1415926 + 0.5); }
vec2 GX, GY;
void grads(vec2 uv){ vec2 u2 = vec2(fract(uv.x + 0.5), uv.y); vec2 a = dFdx(uv), b = dFdy(uv), c = dFdx(u2), d = dFdy(u2);
  if (dot(c, c) + dot(d, d) < dot(a, a) + dot(b, b)) { a = c; b = d; } GX = a; GY = b; }   // seam-safe mip selection
vec4 S(sampler2D t, vec2 uv){ return textureGrad(t, uv, GX, GY); }
float hOf(vec4 s){ return (s.r * 255.0 * 256.0 + s.g * 255.0) / 65535.0 * 2.0 - 1.0; }
void main(){
  vec3 n = normalize(vN), p = rotY(n, -uRot);
  vec2 uv = uvOf(p); grads(uv);
  vec4 m = S(tH, uv);
  float h = hOf(m), moist = m.b;
  // bump normal from the baked height (tangent frame on the rotated sphere, back to world)
  vec3 E = normalize(vec3(p.z, 0.0, -p.x) + 1e-5), Nn = cross(p, E);
  float cl = max(cos(asin(clamp(p.y, -1.0, 1.0))), 0.05), st = 1.5;
  float hx = hOf(S(tH, uv + vec2(uTexel.x * st, 0.0))), hy = hOf(S(tH, uv + vec2(0.0, uTexel.y * st)));
  float land = smoothstep(0.0, 0.004, h);
  float amp = uBump * mix(0.25, 1.0, land);
  vec3 g = (hx - h) / (uTexel.x * st * 6.2831853 * cl) * E + (hy - h) / (uTexel.y * st * 3.1415926) * Nn;
  vec3 pn = normalize(p - g * amp);
  vec3 nn = rotY(pn, uRot);
  // micro detail when close
  float micro = vnoise3(p * 900.0) - 0.5;
  vec3 V = normalize(cameraPosition - vW);
  float ns = dot(nn, uSun), ns0 = dot(n, uSun), dif = max(ns, 0.0), term = smoothstep(-0.12, 0.2, ns0);
  vec3 Hh = normalize(uSun + V);
  float lat = abs(p.y), ice = smoothstep(0.92, 0.94, lat + (m.b - 0.5) * 0.12 + micro * 0.01) + smoothstep(0.45, 0.6, h) * 0.9;
  ice = clamp(ice, 0.0, 1.0);
  // --- blue earth
  vec3 ocean = mix(vec3(0.002, 0.01, 0.04), vec3(0.006, 0.04, 0.11), smoothstep(-0.3, -0.03, h));
  ocean = mix(ocean, vec3(0.015, 0.12, 0.16), smoothstep(-0.015, 0.0, h) * 0.6);                 // shelves
  vec3 desert = vec3(0.3, 0.2, 0.1), grass = vec3(0.07, 0.1, 0.035), forest = vec3(0.02, 0.05, 0.02), rock = vec3(0.11, 0.09, 0.07);
  vec3 ground = mix(desert, grass, smoothstep(0.28, 0.42, moist)); ground = mix(ground, forest, smoothstep(0.45, 0.6, moist));
  float gd = S(tC, uv * vec2(3.0, 3.0)).g; ground *= 0.55 + 0.9 * gd;               // baked fine noise, tiled: terrain texture
  ground = mix(ground, rock, smoothstep(0.12, 0.3, h)) * (1.0 + micro * 0.25);
  vec3 blue = mix(mix(ocean, ground, land), vec3(0.75, 0.8, 0.86), ice);
  // clouds (drift in longitude; shadow offset toward the sun)
  vec2 cuv = uv + vec2(uT * 0.0025, 0.0);
  vec4 cs = S(tC, cuv); float cdn = smoothstep(0.05, 0.85, cs.r * (0.6 + 0.8 * cs.g)) * uCloud;
  vec3 sT = vec3(dot(uSun, rotY(E, uRot)), dot(uSun, rotY(Nn, uRot)), 0.0);
  float csh = S(tC, cuv - sT.xy * vec2(0.0016, 0.003)).r * uCloud;
  float wet = (1.0 - land) * (1.0 - ice);
  float spec = pow(max(dot(nn, Hh), 0.0), 180.0) * 2.2 + pow(max(dot(n, Hh), 0.0), 18.0) * 0.08;
  float fres = 0.02 + 0.5 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 cb = blue * (0.012 + 0.95 * dif) * (1.0 - csh * 0.55);
  cb += (vec3(1.0, 0.88, 0.7) * spec + vec3(0.25, 0.45, 0.8) * fres * 0.35) * wet * term * (1.0 - cdn);
  cb *= mix(vec3(1.0, 0.55, 0.32), vec3(1.0), smoothstep(0.0, 0.3, ns0));                     // warm terminator
  vec3 cloudCol = vec3(0.85) * (0.03 + 1.0 * max(dot(n, uSun) * 0.8 + 0.2, 0.0)) * mix(vec3(1.0, 0.6, 0.4), vec3(1.0), smoothstep(0.0, 0.25, ns0));
  cb = mix(cb, cloudCol, cdn * 0.92);
  float city = m.a * (0.6 + 0.4 * vnoise3(p * 1500.0));
  cb += vec3(1.0, 0.62, 0.28) * city * (1.0 - smoothstep(-0.1, 0.12, ns0)) * uLights * 2.2 * (1.0 - cdn * 0.8);
  // --- red earth (LCL sea glowing from within, scorched land with lit ridges)
  float rs = fbm3(p * 6.0 + vec3(0.0, uT * 0.06, 0.0)) + 0.35 * (vnoise3(p * 40.0 + uT * 0.2) - 0.5);
  vec3 rOcean = mix(vec3(0.16, 0.0, 0.015), vec3(0.85, 0.1, 0.04), rs * rs * 1.4);
  rOcean += vec3(1.0, 0.25, 0.08) * smoothstep(-0.03, 0.0, h) * (1.0 - land) * 0.6;           // glowing shore line
  vec3 rLand = mix(vec3(0.02, 0.006, 0.005), vec3(0.14, 0.035, 0.025), smoothstep(0.0, 0.3, h)) * (1.0 + micro * 0.3);
  vec3 red = mix(mix(rOcean, rLand, land), vec3(0.3, 0.06, 0.05), ice * 0.7);
  vec3 cr = red * (0.12 + 0.8 * dif) + vec3(1.0, 0.45, 0.25) * pow(max(dot(nn, Hh), 0.0), 90.0) * wet * 0.35
          + rOcean * wet * 0.22 * (0.7 + 0.6 * uK);
  cr = mix(cr, vec3(0.35, 0.06, 0.04) * (0.1 + 0.7 * dif), cdn * 0.45);
  // --- restoration front
  float ang = acos(clamp(dot(n, uAxis), -1.0, 1.0));
  float wob = (fbm3(p * 5.0 + 7.0) - 0.5) * 0.18;
  float r = uRed * (1.0 - smoothstep(uFront + 0.03, uFront - 0.03, ang + wob));
  vec3 c = mix(cb, cr, r);
  float edge = exp(-pow((ang + wob - uFront) * 16.0, 2.0)) * uEdge;
  c += vec3(0.75, 0.9, 1.0) * edge * (0.5 + 0.9 * fbm3(p * 12.0 + uT * 0.7)) * (1.0 + uK);
  // --- rim atmosphere
  float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  c += mix(vec3(0.3, 0.55, 1.0) * (0.15 + term), vec3(1.0, 0.18, 0.08) * (0.4 + 0.6 * term), r) * fr * 0.55;
  gl_FragColor = vec4(c, 1.0);
}`,Fd=`
uniform vec3 uSun, uCol; uniform float uA; varying vec3 vN, vW;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float d = dot(n, V);
  float g = pow(smoothstep(0.0, -0.4, d), 2.2);
  float s = 0.2 + 0.8 * pow(max(dot(n, uSun), 0.0), 0.7);
  gl_FragColor = vec4(uCol * g * s * uA, 1.0); }`,Hd=`
uniform float uT, uRot, uFront, uCross; uniform vec3 uAxis;
attribute vec4 aP; attribute vec2 aT;
varying vec2 vUv; varying float vA;
${qu}
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
}`,kd=`
uniform float uK; varying vec2 vUv; varying float vA;
void main(){
  float dv = abs(vUv.x - 0.5), dh = abs(vUv.y - 0.72);
  float fy = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
  float vert = (exp(-dv * dv * 1600.0) + 0.3 * exp(-dv * dv * 70.0)) * fy;
  float hor = (exp(-dh * dh * 2600.0) + 0.3 * exp(-dh * dh * 120.0)) * smoothstep(0.5, 0.3, dv);
  float a = max(vert, hor);
  vec3 col = mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.95, 0.86), clamp(a * 1.4 - 0.35, 0.0, 1.0));
  gl_FragColor = vec4(col * a * vA * (1.0 + 0.5 * uK), 1.0);
}`,Od=`
uniform float uT, uRot, uSoul, uDir, uPx; uniform vec3 uQ, uCol;
attribute vec4 aP, aR;
varying float vA; varying vec3 vC;
${Pe} ${qu}
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
}`,Al=`
uniform float uK; varying float vA; varying vec3 vC;
void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 18.0) * vA;
  gl_FragColor = vec4(vC * a * (1.0 + 0.6 * uK), 1.0); }`,zd="varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Bd=`
uniform float uT, uA, uK; varying vec2 vP; ${Pe}
void main(){ float r = length(vP), a = atan(vP.y, vP.x);
  float line = exp(-pow((r - 1.55) * 90.0, 2.0)) + 0.6 * exp(-pow((r - 1.64) * 140.0, 2.0));
  float band = exp(-pow((r - 1.55) * 7.0, 2.0)) * (0.25 + 0.75 * vnoise(vec2(a * 24.0, uT * 0.6)));
  float rev = smoothstep(0.0, 0.05, uA * 6.2832 - (a + 3.1416));
  gl_FragColor = vec4(vec3(1.0, 0.24, 0.1) * (line * 1.3 + band * 0.3) * rev * (1.0 + 0.6 * uK), 1.0); }`,ab=`
uniform sampler2D tMap; uniform float uT, uA, uRev; varying vec2 vUv; ${Pe}
void main(){ vec4 m = texture2D(tMap, vUv);
  float rev = smoothstep(1.0 - uRev * 1.1, 1.0 - uRev * 1.1 + 0.08, vUv.y); // draws top (Keter) -> bottom
  float fl = 0.8 + 0.2 * vnoise(vec2(uT * 12.0, 0.0));
  gl_FragColor = vec4(m.rgb * rev * uA * fl, 1.0); }`,Vd=`
uniform float uT, uRed, uA; varying vec2 vUv; ${Pe}
void main(){ vec2 p = vUv * vec2(3.0, 1.7);
  float n = fbm(p * 1.3 + vec2(uT * 0.01, 0.0)), m = fbm(p * 3.0 - 4.0);
  vec3 c = mix(vec3(0.02, 0.04, 0.12) * n + vec3(0.05, 0.03, 0.1) * m * m, vec3(0.09, 0.005, 0.01) * n + vec3(0.05, 0.01, 0.0) * m * m, uRed);
  gl_FragColor = vec4(c * uA * smoothstep(0.3, 0.9, n + 0.2), 1.0); }`,Gd=`
uniform float uT, uHex, uSpread, uK, uFront; uniform vec3 uAxis; varying vec3 vN, vW; ${Pe}
vec4 hx(vec2 p){ const vec2 s = vec2(1.0, 1.7320508); vec4 c = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
  vec4 h = vec4(p - c.xy * s, p - (c.zw + 0.5) * s); return dot(h.xy, h.xy) < dot(h.zw, h.zw) ? vec4(h.xy, c.xy) : vec4(h.zw, c.zw + 0.5); }
vec2 cell(vec2 uv, out float id){ vec4 h = hx(uv); vec2 a = abs(h.xy); float d = max(dot(a, vec2(0.5, 0.8660254)), a.x);
  id = hash12(h.zw); return vec2(0.5 - d, 0.0); }
void main(){ vec3 n = normalize(vW), V = normalize(cameraPosition - vW);
  vec3 w = pow(abs(n), vec3(6.0)); w /= dot(w, vec3(1.0));
  float i1, i2, i3; float e1 = cell(n.yz * 24.0, i1).x, e2 = cell(n.zx * 24.0, i2).x, e3 = cell(n.xy * 24.0, i3).x;
  float e = e1 * w.x + e2 * w.y + e3 * w.z, id = i1 * w.x + i2 * w.y + i3 * w.z;
  float ang = acos(clamp(-n.y, -1.0, 1.0));                   // 0 at the south pole
  float fr = uSpread * 3.3 - ang + (id - 0.5) * 0.35;         // wave of ignition
  float on = smoothstep(0.0, 0.05, fr), flash = exp(-max(fr, 0.0) * 9.0) * on;
  float fw = fwidth(e) * 1.5 + 0.002; float edge = (1.0 - smoothstep(0.0, fw, e)) + 0.35 * exp(-e * e * 700.0);
  float fill = 0.015 + 0.2 * step(0.95, fract(id * 7.0 + floor(uT * 5.0) * 0.37));
  float fres = pow(1.0 - abs(dot(n, V)), 2.0);
  float ra = acos(clamp(dot(n, uAxis), -1.0, 1.0)), red = smoothstep(uFront - 0.02, uFront + 0.3, ra);
  float a = (edge * (0.12 + 0.7 * fres) + fill * fres + flash * 0.9) * on * uHex * red * (1.0 + 0.8 * uK);
  vec3 col = mix(vec3(1.0, 0.28, 0.06), vec3(1.0, 0.8, 0.5), clamp(flash * 1.5 + edge * 0.3, 0.0, 1.0));
  gl_FragColor = vec4(col * a, 1.0); }`,Wd=`
uniform float uT, uVort, uPx; uniform vec3 uQ; attribute vec4 aR; varying float vA; varying vec3 vC; ${Pe}
void main(){
  float s = fract(aR.x + uT * (0.06 + 0.08 * aR.y)), e = s * s;
  float r = mix(0.35 + 0.9 * aR.z, 0.02, pow(s, 0.7));
  float th = aR.w * 6.2832 + s * (9.0 + 5.0 * aR.y) + uT * 0.8;
  vec3 base = vec3(0.0, 0.95, 0.0), p = mix(base, uQ, e);
  p.x += cos(th) * r; p.z += sin(th) * r; p += curl3(p * 4.0 + uT * 0.2) * 0.03 * (1.0 - s);
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.0, 0.1, s) * smoothstep(1.0, 0.9, s) * uVort * (0.5 + 0.5 * sin(uT * 7.0 + aR.w * 50.0));
  vC = mix(vec3(1.0, 0.3, 0.12), vec3(1.0, 0.92, 0.85), s * s);
  gl_PointSize = clamp(uPx * (0.5 + aR.z) / max(-mv.z, 0.15), 1.0, 10.0); }`,Xd=`
uniform float uT, uCrack, uK; varying vec3 vN, vW; ${Pe}
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  float r = abs(fbm3(n * 3.0 + 7.0) - 0.5), r2 = abs(fbm3(n * 7.0 - 3.0) - 0.5);
  float cr = exp(-r * r * 4000.0) * smoothstep(0.3, 0.9, uCrack + fbm3(n * 2.0) - 0.4) + exp(-r2 * r2 * 9000.0) * 0.35 * uCrack;
  vec3 c = vec3(0.004, 0.0, 0.002) + vec3(1.0, 0.18, 0.05) * fres * 1.4 + vec3(1.0, 0.4, 0.15) * cr * (0.7 + 0.5 * uK);
  gl_FragColor = vec4(c, 1.0); }`,qd=`
uniform float uRev, uSz; attribute vec4 aN; varying vec2 vUv; varying float vA;
void main(){ vUv = uv; vA = smoothstep(aN.w, aN.w + 0.06, uRev);
  vec4 mv = viewMatrix * vec4(aN.xyz, 1.0); mv.xy += position.xy * uSz * (0.6 + 0.4 * vA);
  gl_Position = projectionMatrix * mv; }`,Yd=`
uniform float uA, uK, uT; varying vec2 vUv; varying float vA;
void main(){ float r = length(vUv - 0.5) * 2.0;
  float ring = exp(-pow((r - 0.62) * 22.0, 2.0)) + 0.5 * exp(-pow((r - 0.45) * 40.0, 2.0));
  float core = exp(-r * r * 30.0) * 1.6 + exp(-r * r * 4.0) * 0.25;
  vec3 col = vec3(1.0, 0.35, 0.12) * ring * 1.3 + vec3(1.0, 0.8, 0.6) * core;
  gl_FragColor = vec4(col * vA * uA * (1.0 + 0.7 * uK), 1.0); }`,$d=`
uniform float uRev, uW; attribute vec3 aA, aB; attribute float aR; varying float vX, vA;
void main(){ float u = position.y + 0.5; vX = position.x * 2.0;
  vec3 p = mix(aA, aB, u), dir = normalize(aB - aA), side = normalize(cross(dir, normalize(cameraPosition - p)));
  float grow = clamp((uRev - aR) / 0.12, 0.0, 1.0); vA = step(u, grow) * step(0.001, grow);
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * position.x * uW, 1.0); }`,Kd=`
uniform float uA, uK; varying float vX, vA;
void main(){ float a = exp(-vX * vX * 30.0) + 0.25 * exp(-vX * vX * 4.0);
  gl_FragColor = vec4(mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.85, 0.7), exp(-vX * vX * 60.0)) * a * vA * uA * (0.9 + 0.5 * uK), 1.0); }`,Zd=`varying vec3 vN, vW; varying float vZ; uniform float uLen;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vZ = position.z / uLen + 0.5;
  gl_Position = projectionMatrix * viewMatrix * w; }`,Jd=`
uniform float uT, uK, uGlow; varying vec3 vN, vW; varying float vZ;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - abs(dot(n, V)), 2.5), spec = pow(max(dot(reflect(-V, n), normalize(vec3(0.5, 0.8, 0.3))), 0.0), 40.0);
  float pulse = pow(0.5 + 0.5 * sin(vZ * 40.0 - uT * 18.0), 6.0) * smoothstep(0.1, 0.9, vZ);
  vec3 c = vec3(0.09, 0.005, 0.004) + vec3(1.0, 0.25, 0.08) * fres * 1.6 + vec3(1.0, 0.85, 0.7) * spec * 1.5
    + vec3(1.0, 0.45, 0.15) * pulse * uGlow * (0.6 + 0.6 * uK) + vec3(1.0, 0.7, 0.5) * smoothstep(0.93, 1.0, vZ) * uGlow * 0.6;
  gl_FragColor = vec4(c, 1.0); }`,jd=`
uniform float uT, uPx, uWake; uniform vec3 uP, uD; attribute vec4 aR; varying float vA; varying vec3 vC; ${Pe}
void main(){ float age = aR.x * 1.6; vec3 side = normalize(cross(uD, vec3(0.0, 1.0, 0.0))), up = cross(side, uD);
  float an = aR.y * 6.2832 + age * 6.0, rad = (0.01 + age * 0.09) * (0.3 + aR.z);
  vec3 p = uP - uD * (0.26 + age * 1.1) + (side * cos(an) + up * sin(an)) * rad + curl3(vec3(aR.w * 20.0, age, uT * 0.3)) * age * 0.04;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = (1.0 - aR.x) * uWake * (0.5 + 0.5 * sin(uT * 9.0 + aR.w * 60.0)); vC = mix(vec3(1.0, 0.85, 0.7), vec3(1.0, 0.25, 0.08), aR.x);
  gl_PointSize = clamp(uPx * (0.4 + aR.z) / max(-mv.z, 0.1), 1.0, 9.0); }`,Qd=`
float wv(vec2 p, float t){ float h = 0.0;
  h += 0.035 * sin(dot(p, vec2(0.9, 0.45)) * 2.2 - t * 1.1);
  h += 0.022 * sin(dot(p, vec2(-0.5, 0.85)) * 3.7 - t * 1.6);
  h += 0.012 * sin(dot(p, vec2(0.2, -1.0)) * 7.1 - t * 2.3);
  h += 0.006 * sin(dot(p, vec2(-0.95, -0.3)) * 13.0 - t * 3.1);
  float r = length(p); h += 0.018 * sin(r * 11.0 - t * 2.6) * exp(-max(r - 0.9, 0.0) * 1.3) * smoothstep(0.75, 1.0, r);  // swell rings off the globe
  return h * smoothstep(0.7, 0.95, r); }`,ep=`uniform float uT, uLvl; varying vec3 vW; varying float vH; ${Qd}
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); float h = wv(w.xz, uT); w.y = uLvl + h; vW = w.xyz; vH = h;
  gl_Position = projectionMatrix * viewMatrix * w; }`,tp=`
vec3 sky(vec3 d, vec3 S, float t){ float y = d.y;
  vec3 c = mix(vec3(1.1, 0.34, 0.12), vec3(0.42, 0.04, 0.05), smoothstep(-0.02, 0.22, y));
  c = mix(c, vec3(0.07, 0.0, 0.02), smoothstep(0.2, 0.75, y));
  float cl = fbm(vec2(atan(d.x, d.z) * 5.0 + t * 0.01, y * 18.0)); c *= 0.8 + 0.45 * cl * smoothstep(0.4, 0.04, y);
  float s = max(dot(d, S), 0.0); c += vec3(1.6, 0.7, 0.35) * pow(s, 300.0) * 3.0 + vec3(1.0, 0.35, 0.15) * pow(s, 8.0) * 0.5;
  return c; }`,np=`uniform float uT; uniform vec3 uSun; varying vec3 vD; ${Pe} ${tp}
void main(){ gl_FragColor = vec4(sky(normalize(vD), uSun, uT), 1.0); }`,ip=`uniform float uT, uLvl, uK; uniform vec3 uSun; varying vec3 vW; varying float vH; ${Pe} ${Qd} ${tp}
void main(){ vec2 e = vec2(0.004, 0.0);
  vec3 n = normalize(vec3(wv(vW.xz - e.xy, uT) - wv(vW.xz + e.xy, uT), 2.0 * e.x, wv(vW.xz - e.yx, uT) - wv(vW.xz + e.yx, uT)));
  n = normalize(n + 0.06 * vec3(vnoise(vW.xz * 40.0 + uT) - 0.5, 0.0, vnoise(vW.xz * 40.0 - uT + 7.0) - 0.5));
  vec3 V = normalize(cameraPosition - vW), Rf = reflect(-V, n); Rf.y = abs(Rf.y);
  float fr = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 refl = sky(Rf, uSun, uT);
  // reflected globe (ray / unit-sphere hit)
  float b = dot(vW, Rf), c0 = dot(vW, vW) - 1.0, D = b * b - c0;
  if (D > 0.0 && -b - sqrt(D) > 0.0) { vec3 q = vW + Rf * (-b - sqrt(D));
    float lit = 0.35 + 0.65 * max(dot(q, uSun), 0.0), cl = smoothstep(0.55, 0.8, fbm(q.xz * 3.0 + q.y * 2.0));
    refl = (mix(vec3(0.05, 0.2, 0.45), vec3(0.8, 0.8, 0.85), cl) * lit + vec3(0.2, 0.45, 1.0) * pow(1.0 - abs(dot(normalize(q), Rf)), 3.0)) * 0.5; }
  vec3 body = vec3(0.16, 0.005, 0.01) * (0.6 + 0.4 * max(dot(n, uSun), 0.0));
  vec3 sss = vec3(0.9, 0.12, 0.04) * smoothstep(0.0, 0.05, vH) * pow(max(dot(-V, uSun) * 0.5 + 0.5, 0.0), 3.0) * 0.6;  // light through crests
  vec3 col = mix(body + sss, refl * vec3(0.8, 0.5, 0.46), fr * 0.85);
  col += vec3(1.6, 0.8, 0.5) * pow(max(dot(Rf, uSun), 0.0), 400.0) * 6.0;
  // foam hugging the globe + on crests
  float r = length(vW.xz), rim = sqrt(max(1.0 - uLvl * uLvl, 0.0));
  float foam = smoothstep(0.06, 0.0, r - rim - 0.01 * sin(atan(vW.z, vW.x) * 17.0 + uT * 3.0)) * (0.6 + 0.4 * fbm(vW.xz * 30.0 + uT));
  foam += smoothstep(0.035, 0.055, vH) * smoothstep(0.4, 0.8, fbm(vW.xz * 18.0 - uT * 0.6)) * 0.4;
  col += vec3(1.0, 0.55, 0.45) * foam * 0.5;
  float dist = length(vW - cameraPosition); col = mix(col, sky(normalize(vec3(-V.x, 0.01, -V.z)), uSun, uT), smoothstep(3.5, 8.5, dist));
  gl_FragColor = vec4(col * (1.0 + 0.15 * uK), 1.0); }`,sp="varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }";function K2(i,e,t=re.inOut){let n=0;for(;n+1<i.length&&i[n+1][0]<=e;)n++;let s=i[n],r=i[Math.min(i.length-1,n+1)],a=r===s||r[0]-s[0]<.1?0:t(fe((e-s[0])/(r[0]-s[0]))),o=(l,c=0)=>We(s[l]??c,r[l]??c,a);return{p:[o(1),o(2),o(3)],q:[o(4),o(5),o(6)],fov:o(7),roll:o(8),i:n,u:a}}function sn(i,e,t,n=0,s){let r=K2(e,t,s);return i.position.set(r.p[0]+n*Math.sin(t*91),r.p[1]+n*Math.sin(t*77+1),r.p[2]),i.up.set(Math.sin(r.roll),Math.cos(r.roll),0),i.lookAt(r.q[0],r.q[1],r.q[2]),i.fov!==r.fov&&(i.fov=r.fov,i.updateProjectionMatrix()),r}var Z2={A:[[10.4,0,.35,1.62,0,1.05,0,40,-.12],[12.67,.12,.42,1.45,0,1.1,0,40,-.05],[12.72,.3,-.85,3.9,0,.6,-.6,44,.05],[17,.05,1.85,1.7,0,2.35,-.6,50,-.02]],B:[[136.1,.2,.3,3.5,0,0,0,38],[137.24,.28,.32,3.25,0,0,0,38],[137.29,1.35,.5,-1.45,0,.2,0,42,.1],[139.38,1.15,.7,-1.75,0,.25,0,42,.05],[139.43,-1.2,.4,-3.1,0,0,0,38],[141.3,-1.45,.55,-3.35,0,0,0,38]],G:[[113.2,1.3,-.08,4.6,-.1,.1,0,30,.04],[115.3,.9,-.07,3.7,-.1,.12,0,30,0]],C:[[207.4,0,.3,2.3,0,.95,0,36],[211.95,.06,.34,2.12,0,.97,0,36],[212,2.2,1,2,0,0,0,38],[216.24,1.9,1.1,2.5,0,0,0,38],[216.29,1.2,.5,2.6,0,0,0,36],[218.5,3.6,1.6,8.8,0,0,0,36]]},$u=113.3;var J2=-.22,rp=i=>i<100?"A":i<$u-.05?"L":i<130?"G":i<180?"B":"C",Rl=108.05,j2=112.44,op=new A(1.9,1.1,4.8),ap=new A(.25,.35,1).normalize().multiplyScalar(1.3),Q2=new A(.3,.2,1).normalize(),Fo=new A(0,2.4,-.6),Lr=[[0,0],[1,1],[-1,1],[1,2.6],[-1,2.6],[0,3.3],[1,4.2],[-1,4.2],[0,5],[0,6]],Ho=[[0,1],[0,2],[0,5],[1,2],[1,3],[1,5],[2,4],[2,5],[3,4],[3,5],[3,6],[4,5],[4,7],[5,6],[5,7],[5,8],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9]],Yu=([i,e])=>new A(i*.85,4.3-e*.72,-3.6-Math.abs(i)*.25),Cl=class extends at{constructor(e){super(e,{fov:40,near:.02,far:200});let t=this.scene,n=ut(27);this.U={uT:{value:0},uRot:{value:0},uRed:{value:1},uFront:{value:-1},uEdge:{value:0},uCloud:{value:1},uLights:{value:0},uK:{value:0},uSun:{value:new A(1,.3,0).normalize()},uAxis:{value:Q2},uCross:{value:0},uSoul:{value:0},uDir:{value:1},uPx:{value:6},uQ:{value:new A(0,2.6,0)},uCol:{value:new we(1,.45,.2)},uA:{value:0},uRev:{value:0}};let s=this.U,r=4096,a=2048,o=new Mo(e.renderer),l=()=>{let q=new Nn(r,a,{type:ii,depthBuffer:!1,generateMipmaps:!0,minFilter:ni,magFilter:It,wrapS:Pi,wrapT:ti});return q.texture.anisotropy=Math.min(8,e.renderer.capabilities.getMaxAnisotropy()),q};this.rtH=l(),this.rtC=l(),o.run(Hn(Ld,{}),this.rtH),o.run(Hn(Dd,{}),this.rtC),e.renderer.setRenderTarget(null),Object.assign(s,{tH:{value:this.rtH.texture},tC:{value:this.rtC.texture},uTexel:{value:new se(1/r,1/a)},uBump:{value:.022}}),this.NU={uT:s.uT,uRed:{value:1},uA:{value:1}},this.neb=is(Vd,this.NU),t.add(this.neb);let c=3e3,h=new Float32Array(c*3),u=new Float32Array(c*3);for(let q=0;q<c;q++){let ee=new A(n()*2-1,n()*2-1,n()*2-1).normalize().multiplyScalar(60);h.set([ee.x,ee.y,ee.z],q*3);let ue=.25+n()**3*1.4,ye=n();u.set([ue,ue*(.85+.15*ye),ue*(.8+.3*ye)],q*3)}let f=new Ge;f.setAttribute("position",new qe(h,3)),f.setAttribute("color",new qe(u,3)),this.stars=new bt(f,new Mn({size:.14,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1})),t.add(this.stars);let d=new V(new bn(1,256,160),new oe({vertexShader:No,fragmentShader:Nd,uniforms:s}));this.AU={uSun:s.uSun,uCol:{value:new we},uA:{value:1}};let v=new V(new bn(1.07,96,64),new oe({vertexShader:No,fragmentShader:Fd,uniforms:this.AU,side:_t,transparent:!0,blending:Fe,depthWrite:!1}));t.add(d,v),this.globeParts=[d,v];let y=170,m=new wn;m.copy(new _e(1,1)),m.instanceCount=y;let p=new Float32Array(y*4),_=new Float32Array(y*2);for(let q=0;q<y;q++){let ee=q<14?new A(n()*.8-.4,.55+n()*.3,.8+n()*.2-.1).normalize():new A(n()*2-1,n()*1.6-.5,n()*2-1).normalize();p.set([ee.x,ee.y,ee.z,0],q*4),_.set([q<14?10.6+q*.13:11.6+(q-14)/y*4.6+n()*.3,n()<.05?.3+n()*.15:.04+n()*.13],q*2)}m.setAttribute("aP",new gt(p,4)),m.setAttribute("aT",new gt(_,2));let g=new V(m,new oe({vertexShader:Hd,fragmentShader:kd,uniforms:s,transparent:!0,blending:Fe,depthWrite:!1,side:it}));g.frustumCulled=!1,t.add(g);let E=12e3,b=new Ge,T=new Float32Array(E*4),S=new Float32Array(E*4);for(let q=0;q<E;q++){let ee=new A(n()*2-1,n()*2-1,n()*2-1).normalize();T.set([ee.x,ee.y,ee.z,.55+n()*.45],q*4),S.set([n(),n(),n(),n()],q*4)}b.setAttribute("position",new qe(new Float32Array(E*3),3)),b.setAttribute("aP",new qe(T,4)),b.setAttribute("aR",new qe(S,4));let C=new bt(b,new oe({vertexShader:Od,fragmentShader:Al,uniforms:s,transparent:!0,blending:Fe,depthWrite:!1}));C.frustumCulled=!1,t.add(C),this.cm=g,this.RU={uT:s.uT,uA:{value:0},uK:s.uK},this.ring=new V(new gr(1.4,1.8,256,1),new oe({vertexShader:zd,fragmentShader:Bd,uniforms:this.RU,transparent:!0,blending:Fe,depthWrite:!1,side:it})),this.ring.rotation.set(1.22,.25,0),t.add(this.ring);let U=q=>(q.frustumCulled=!1,t.add(q),q),x={transparent:!0,blending:Fe,depthWrite:!1};this.HU={uT:s.uT,uK:s.uK,uFront:s.uFront,uAxis:s.uAxis,uHex:{value:0},uSpread:{value:0}},this.hex=U(new V(new bn(1.035,160,100),new oe({vertexShader:No,fragmentShader:Gd,uniforms:this.HU,...x}))),this.MU={uT:s.uT,uK:s.uK,uCrack:{value:0}},this.moon=U(new V(new bn(.3,96,64),new oe({vertexShader:No,fragmentShader:Xd,uniforms:this.MU}))),this.moon.position.copy(Fo),this.halo=U(new dn(new ln({map:e.shared.glow,color:16726548,...x}))),this.halo.position.copy(Fo).add(new A(0,0,-.15));let M=7e3,L=new Ge,F=new Float32Array(M*4);for(let q=0;q<M;q++)F.set([n(),n(),n()**1.5,n()],q*4);L.setAttribute("position",new qe(new Float32Array(M*3),3)),L.setAttribute("aR",new qe(F,4)),this.VU={uT:s.uT,uPx:s.uPx,uQ:{value:Fo},uVort:{value:0}},this.vort=U(new bt(L,new oe({vertexShader:Wd,fragmentShader:Al,uniforms:{...this.VU,uK:s.uK},...x}))),this.TU={uRev:{value:0},uA:{value:0},uK:s.uK,uT:s.uT,uSz:{value:.34},uW:{value:.025}};let k=new wn;k.copy(new _e(1,1)),k.instanceCount=Lr.length;let K=new Float32Array(Lr.length*4);Lr.forEach((q,ee)=>{let ue=Yu(q);K.set([ue.x,ue.y,ue.z,q[1]/6.4],ee*4)}),k.setAttribute("aN",new gt(K,4));let O=new wn;O.copy(new _e(1,1,1,24)),O.instanceCount=Ho.length;let ne=new Float32Array(Ho.length*3),Y=new Float32Array(Ho.length*3),pe=new Float32Array(Ho.length);Ho.forEach(([q,ee],ue)=>{ne.set(Yu(Lr[q]).toArray(),ue*3),Y.set(Yu(Lr[ee]).toArray(),ue*3),pe[ue]=Lr[q][1]/6.4+.02}),O.setAttribute("aA",new gt(ne,3)),O.setAttribute("aB",new gt(Y,3)),O.setAttribute("aR",new gt(pe,1)),this.beams=U(new V(O,new oe({vertexShader:$d,fragmentShader:Kd,uniforms:this.TU,...x,side:it}))),this.nodes=U(new V(k,new oe({vertexShader:qd,fragmentShader:Yd,uniforms:this.TU,...x})));let he=.5,ve=q=>{let ee=[];for(let ue=0;ue<=160;ue++){let ye=ue/160,He=(ye-.5)*he,I=Math.max(0,(ye-.8)/.2),dt=.011*(1-.4*ye)+I*I*.03,ke=ye*26*(1-I*.8)+q;ee.push(new A(Math.cos(ke)*dt,Math.sin(ke)*dt,He))}return new Fn(ee)};this.LU={uT:s.uT,uK:s.uK,uGlow:{value:1},uLen:{value:he}};let Ze=new oe({vertexShader:Zd,fragmentShader:Jd,uniforms:this.LU});this.lance=new an;for(let q of[0,Math.PI])this.lance.add(new V(new ri(ve(q),400,.0055,10),Ze));this.lanceTip=new dn(new ln({map:e.shared.glow,color:16756848,blending:Fe,depthWrite:!1,transparent:!0})),t.add(this.lance,this.lanceTip);let xe=4e3,X=new Ge,j=new Float32Array(xe*4);for(let q=0;q<xe;q++)j.set([n(),n(),n(),n()],q*4);X.setAttribute("position",new qe(new Float32Array(xe*3),3)),X.setAttribute("aR",new qe(j,4)),this.WU={uT:s.uT,uPx:s.uPx,uK:s.uK,uWake:{value:0},uP:{value:new A},uD:{value:new A}},this.wake=U(new bt(X,new oe({vertexShader:jd,fragmentShader:Al,uniforms:this.WU,...x}))),this._s=new A,this._up=new A,this.GU={uT:s.uT,uK:s.uK,uSun:s.uSun,uLvl:{value:J2}},this.gsky=U(new V(new bn(80,48,24),new oe({vertexShader:sp,fragmentShader:np,uniforms:this.GU,side:_t,depthWrite:!1}))),this.gsky.renderOrder=-10;let de=new _e(18,18,640,640).rotateX(-Math.PI/2);this.gsea=U(new V(de,new oe({vertexShader:ep,fragmentShader:ip,uniforms:this.GU})));let Z=e.shared.glow;this.sun=new dn(new ln({map:Z,color:16773592,blending:Fe,depthWrite:!1,transparent:!0})),this.streak=new dn(new ln({map:Z,color:10470655,blending:Fe,depthWrite:!1,transparent:!0})),t.add(this.sun,this.streak),this._v=new A,this._d=new A,this._u=new A}update(e){let t=this.U,n=rp(e),s=ae.hitPulse("kick",e,7);n!=="L"&&sn(this.camera,Z2[n],e);let r=n==="G";if(this.gsky.visible=this.gsea.visible=r,this.stars.visible=this.neb.visible=!r,r){let u=Math.sin(e*1.7),f=Math.sin(e*1.1+1);this.camera.position.y+=.025*u,this.camera.rotateZ(.02*f),this.camera.rotateX(.01*u)}this.lance.visible=this.lanceTip.visible=this.wake.visible=n==="L";let a=this.camera.position;t.uT.value=e,t.uK.value=s,t.uPx.value=this.ctx.h*.012,t.uRot.value=e*.02+(n==="C"?1.4:n==="B"?.6:0);let o=0,l=t.uSun.value;this.RU.uA.value=0,this.TU.uA.value=0,this.HU.uHex.value=0,this.VU.uVort.value=0;let c=0,h=0;if(n==="A")t.uRed.value=1,t.uFront.value=-1,t.uEdge.value=0,t.uCloud.value=.3,t.uLights.value=0,t.uCross.value=.7,t.uSoul.value=B(10.9,12.5,e),t.uDir.value=1,t.uCol.value.setRGB(1,.45,.2),e<12.7?t.uQ.value.set(0,2.4,-.6):t.uQ.value.copy(Fo),l.set(.8,.5,.6).normalize(),this.RU.uA.value=B(13.4,15.2,e),this.HU.uHex.value=B(11.2,11.8,e),this.HU.uSpread.value=re.inOut(fe((e-11.3)/4.4)),this.VU.uVort.value=B(12.6,13.6,e),this.TU.uA.value=B(12.9,13.4,e),this.TU.uRev.value=re.out(fe((e-13)/3.2)),c=B(12.72,13.8,e),h=B(14,16.8,e),this.AU.uCol.value.setRGB(1,.25,.1);else if(n==="L"){let u=fe((e-Rl)/(j2-Rl)),f=this._d.copy(ap).sub(op).normalize(),d=this._v.copy(op).lerp(ap,.08+.72*re.in(u)*.6+.4*u*u*u);this.lance.position.copy(d),this.lance.lookAt(d.x+f.x,d.y+f.y,d.z+f.z),this.lance.rotateZ(e*1.5),this.lanceTip.position.copy(d).addScaledVector(f,.3),this.lanceTip.scale.setScalar(.045+.02*s+.1*B(111.6,112.4,e));let v=this._s.crossVectors(f,this._u.set(0,1,0)).normalize(),y=this._up.crossVectors(v,f),m=We(2.3,.2,re.inOut(u)),p=We(.34,.3,u);this.camera.position.copy(d).addScaledVector(f,-Math.cos(m)*p).addScaledVector(v,Math.sin(m)*p).addScaledVector(y,.05+.03*Math.sin(u*3.1)),this.camera.up.copy(y).applyAxisAngle(f,.25*Math.sin(u*2.4)),this.camera.lookAt(this._u.copy(d).addScaledVector(f,We(-.02,.6,re.inOut(u)))),this.camera.fov!==42&&(this.camera.fov=42,this.camera.updateProjectionMatrix()),this.WU.uWake.value=B(Rl,Rl+.4,e),this.WU.uP.value.copy(d),this.WU.uD.value.copy(f),t.uRed.value=1,t.uFront.value=-1,t.uEdge.value=0,t.uCloud.value=.3,t.uLights.value=0,t.uCross.value=.6,t.uSoul.value=.4,t.uDir.value=1,t.uQ.value.copy(Fo),t.uCol.value.setRGB(1,.45,.2),this.HU.uHex.value=.3+1.2*B(111.4,112.4,e),this.HU.uSpread.value=1,l.set(.8,.5,.6).normalize(),this.AU.uCol.value.setRGB(1,.25,.1)}else if(n==="G")t.uRed.value=0,t.uFront.value=4,t.uEdge.value=0,t.uCloud.value=1,t.uLights.value=0,t.uCross.value=0,t.uSoul.value=0,t.uCol.value.setRGB(.6,.8,1),t.uRot.value=.9+e*.03,l.set(-.85,.28,.3).normalize(),this.AU.uCol.value.setRGB(.35,.6,1);else if(n==="B"){let u=re.inOut(fe((e-136.3)/4.3));t.uRed.value=1,t.uFront.value=We(-.05,3.4,u),t.uEdge.value=1-B(140.3,141,e),t.uCloud.value=1,t.uLights.value=.3,t.uCross.value=1,t.uSoul.value=1-B(139.2,141,e),t.uDir.value=-1,this.HU.uHex.value=.22*(1-B(139,141,e)),this.HU.uSpread.value=1,t.uQ.value.set(0,2.6,0),t.uCol.value.setRGB(1,.6,.35),this._d.copy(a).normalize().add(this._u.set(.6,.5,0)).normalize(),l.copy(this._d),this.AU.uCol.value.setRGB(1,.25,.1).lerp(new we(.35,.6,1),u)}else if(t.uRed.value=0,t.uFront.value=4,t.uEdge.value=0,t.uCloud.value=1,t.uLights.value=1,t.uCross.value=0,t.uSoul.value=.45*B(208,210,e)*(1-B(216,216.3,e)),t.uDir.value=-1,t.uQ.value.set(0,3,1.5),t.uCol.value.setRGB(.6,.8,1),this.AU.uCol.value.setRGB(.35,.6,1),e<211.97){let u=a.length(),f=Math.asin(1/u);this._d.copy(a).negate().normalize(),this._u.crossVectors(this._d,this.camera.up).normalize();let d=We(-.07,.1,re.inOut(fe((e-208.2)/3.4)));l.copy(this._d).applyAxisAngle(this._u,f+d),o=1}else l.set(e<216.27?.3:-.45,e<216.27?.45:.3,e<216.27?.85:.6).normalize();this.sun.position.copy(a).addScaledVector(l,40),this.streak.position.copy(this.sun.position),this.sun.scale.setScalar(o*(7+2*s)),this.streak.scale.set(o*30,o*.5,1),this.MU.uCrack.value=h,this.moon.visible=c>.001,this.moon.scale.setScalar(c),this.halo.visible=this.moon.visible,this.halo.scale.setScalar(c*(1.6+.6*h+.3*s)),this.hex.visible=this.HU.uHex.value>0,this.vort.visible=this.VU.uVort.value>0,this.nodes.visible=this.beams.visible=this.TU.uA.value>0,this.ring.visible=this.RU.uA.value>0,this.ring.rotation.z=e*.05,this.NU.uA.value=n==="C"?.6:.9,this.globeBob(r?e:null),this.NU.uRed.value=n==="A"||n==="L"?1:n==="B"?1-B(137.5,140.8,e):0}globeBob(e){for(let t of this.globeParts){if(e===null){t.position.set(0,0,0),t.rotation.set(0,0,0);continue}t.position.set(0,.03*Math.sin(e*1.3+.4),0),t.rotation.set(.06*Math.sin(e*.9),0,.05*Math.sin(e*1.2+1))}}post(e){let t=rp(e),n=ae.hitPulse("kick",e,9),s={bloom:1,bloomThr:.7,grain:.07,vig:.6,ca:.8,dust:.15,punch:n*.25};return t==="L"?{...s,bloom:.9,tint:[1.05,.92,.88],dustCol:[1,.5,.3],shake:.003*n+.004*B(111.5,112.4,e),ca:.8+B(111.5,112.4,e)}:t==="G"?{...s,bloom:.85,bloomThr:.75,grain:.11,vig:.75,ca:1.1,flicker:.06,scratch:.35,weave:.4,leak:0,sat:1,contrast:1.08,tint:[1.02,.97,.95],dust:.3,dustCol:[1,.6,.45],fadeW:B(114.75,115.19,e)*.9+(1-B($u,$u+.2,e))*.5}:t==="A"?{...s,tint:[1.06,.9,.86],dustCol:[1,.4,.3],shake:.002*n,flicker:.04}:t==="B"?{...s,bloom:.8+.6*ae.hitPulse("hit",e,5),bloomThr:.8,sat:1.05,grain:.05}:{...s,bloom:.6,bloomThr:.85,grain:.045,ca:.5,sat:1.1,lift:[0,.004,.012],exposure:1.02,fadeB:B(217.6,218.4,e)*.4}}};var Dr=40,Ku=10,e_=1.12,t_=`
uniform sampler2D uDepT; uniform float uDep; varying vec2 vUv; varying float vD;
void main(){ vUv = uv; float d = texture2D(uDepT, uv).r; vD = d;
  vec3 p = position * (1.0 - uDep * d);                       // slide toward the rest camera (origin)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,n_=`
uniform sampler2D uMap; uniform float uK, uT; varying vec2 vUv; varying float vD; ${Pe}
void main(){ vec3 c = texture2D(uMap, vUv).rgb;
  float l = dot(c, vec3(0.3, 0.55, 0.15)), hot = smoothstep(0.62, 0.9, l) * smoothstep(0.0, 0.25, c.r - c.b);
  c += c * hot * (0.35 + 0.9 * uK);                              // engines / sun glints pulse on the kick
  c *= 0.92 + 0.08 * vnoise(vUv * 6.0 + uT * 0.4);
  gl_FragColor = vec4(c, 1.0); }`,i_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",s_=`
uniform float uSeed, uA, uT; uniform vec2 uSun; uniform vec3 uLit, uShade; varying vec2 vUv; ${Pe}
void main(){ vec2 q = vUv - 0.5;
  float f = fbm(vUv * 3.2 + uSeed * 7.0 + vec2(uT * 0.05, 0.0));
  float sh = 1.0 - smoothstep(0.1, 0.5, length(q * vec2(1.0, 1.6)));
  float a = smoothstep(0.35, 0.75, f * 0.9 + sh * 0.55) * sh;
  float lit = clamp(0.5 + dot(normalize(q + 1e-4), uSun) * 0.6 + (f - 0.5) * 1.2, 0.0, 1.0);
  vec3 c = mix(uShade, uLit, lit);
  gl_FragColor = vec4(c, a * uA); }`,r_=`
uniform float uT, uA; uniform vec3 uVel; attribute vec4 aR; varying float vA; varying vec2 vUv;
void main(){ vUv = uv;
  vec3 base = vec3((aR.x - 0.5) * 16.0, (aR.y - 0.5) * 9.0, -1.0 - aR.z * 11.0);
  float s = fract(aR.w + uT * (0.6 + aR.z * 0.5));
  vec3 p = base + uVel * (s - 0.5) * 18.0;
  vec3 dir = normalize(uVel);
  vec3 side = normalize(cross(dir, vec3(0.0, 0.0, 1.0) + vec3(0.001)));
  p += dir * position.x * (1.2 + aR.z * 2.0) + side * position.y * 0.012;
  vA = sin(s * 3.1416) * uA * (0.4 + 0.6 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,o_=`varying float vA; varying vec2 vUv; void main(){ float a = (1.0 - abs(vUv.y - 0.5) * 2.0) * smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.6, vUv.x);
  gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * a * vA, 1.0); }`,a_={wunder:{t0:52.34,t1:55.3,cam:[[52.3,.12,-.08,.2,.06,-.04,-10,Dr,.03],[55.3,-.15,.08,-1.3,-.06,.03,-10,Dr,-.02]],vel:[.15,-.02,1],sun:[.8,.1]},fleet:{t0:61.07,t1:63.85,cam:[[61,.35,.02,.1,.2,.02,-10,Dr,-.015],[63.85,-.35,.12,-.6,-.2,.05,-10,Dr,.02]],vel:[1,.05,.25],sun:[.9,0]}},Pl=class extends at{constructor(e){super(e,{fov:Dr,near:.05,far:100});let t=this.scene,n=ut(52);this.U={uK:{value:0},uT:{value:0}};let s=2*Ku*Math.tan(Dr/2*Math.PI/180)*e_;this.planes={};for(let c of["wunder","fleet"]){let h=e.img[c],u=e.img[c+"_d"],f=new oe({vertexShader:t_,fragmentShader:n_,uniforms:{uMap:{value:h.tex},uDepT:{value:u?u.tex:h.tex},uDep:{value:u?.38:0},...this.U}}),d=new _e(s*h.w/h.h,s,256,144),v=new V(d,f);v.position.z=-Ku,v.renderOrder=-50,d.translate(0,0,-Ku),v.position.z=0,t.add(v),this.planes[c]=v}this.cl=[];for(let c=0;c<30;c++){let h={uSeed:{value:n()*10},uA:{value:0},uT:this.U.uT,uSun:{value:new se(.8,.1)},uLit:{value:new we(1,.62,.4)},uShade:{value:new we(.12,.06,.13)}},u=new V(new _e(1,1),new oe({vertexShader:i_,fragmentShader:s_,uniforms:h,transparent:!0,depthWrite:!1}));u.userData={u:h,r:[n(),n(),n(),n(),n()]},t.add(u),this.cl.push(u)}let r=160,a=new wn;a.copy(new _e(1,1)),a.instanceCount=r;let o=new Float32Array(r*4);for(let c=0;c<r*4;c++)o[c]=n();a.setAttribute("aR",new gt(o,4)),this.SU={uT:this.U.uT,uA:{value:0},uVel:{value:new A}};let l=new V(a,new oe({vertexShader:r_,fragmentShader:o_,uniforms:this.SU,transparent:!0,blending:Fe,depthWrite:!1,side:it}));l.frustumCulled=!1,t.add(l)}update(e){let t=e<58?"wunder":"fleet",n=a_[t],s=ae.hitPulse("kick",e,8);this.U.uK.value=s,this.U.uT.value=e;for(let a in this.planes)this.planes[a].visible=a===t;sn(this.camera,n.cam,e,.004*s);let r=new A(...n.vel).normalize();this.SU.uVel.value.copy(r),this.SU.uA.value=.5+.5*s,this.cl.forEach((a,o)=>{let[l,c,h,u,f]=a.userData.r,d=(l+(e-n.t0)*(.22+.25*f))%1,v=-1.2-h*8.5,y=(d-.5)*14;t==="wunder"?a.position.set((c-.5)*12-r.x*y*.3,u<.6?-2.4-u*1.5:2.2+u,v+y*.7):a.position.set(-y*1.2,(u<.65?-2.2-u*2.2:2.2+u*1.2)+(c-.5),v);let m=2.2+f*3.5;a.scale.set(m*1.6,m,1),a.lookAt(this.camera.position);let p=-a.position.z;a.userData.u.uA.value=.6*Math.sin(d*Math.PI)*B(.6,2.2,p)*(t==="wunder"?1:.9),a.userData.u.uSun.value.set(...n.sun)})}post(e){let t=ae.hitPulse("kick",e,9),n=e>58;return{bloom:1.05,bloomThr:.7,sat:1.08,grain:.06,vig:.55,ca:.9+t,punch:t*.4,shake:.003*t,contrast:1.1,tint:[1.03,.97,.95],dust:.2,fadeW:n?0:(1-B(52.34,52.6,e))*.4}}};var Fr=class extends Gn{constructor(){super();let e=new Mt;e.deleteAttribute("uv");let t=new st({side:_t}),n=new st,s=new Sn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new V(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new V(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new V(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new V(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new V(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new V(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new V(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new V(e,Nr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new V(e,Nr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let v=new V(e,Nr(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let y=new V(e,Nr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new V(e,Nr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new V(e,Nr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Nr(i){let e=new Tt;return e.color.setScalar(i),e}var mn=36,pn=3,Yn=5,Li=-34,l_=[[25,0,1.55,3,0,1.9,-20,52,0],[26.6,.2,1.6,-9,0,1.95,-34,50,-.02],[26.64,1.3,1.75,-5.6,-3,1.95,-8.3,40],[27.14,1.3,1.75,-19.5,-3,1.95,-22.2,40],[27.18,-.5,2.05,-28.2,-.5,2.05,Li,34],[29.4,-.42,2.05,-30.9,-.42,2.08,Li,34]],lp=[28.25,28.76];function c_(){let i=Ut(256,256),e=i.getContext("2d");e.fillStyle="#6a1418",e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,190,140,0.10)",e.lineWidth=3;for(let[n,s]of[[64,64],[192,192],[192,64],[64,192]])e.beginPath(),e.ellipse(n,s,30,52,0,0,7),e.stroke(),e.beginPath(),e.ellipse(n,s,12,26,0,0,7),e.stroke();e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,250,256,6);let t=tn(i,{repeat:!0});return t.repeat.set((mn+6)/1.2,Yn/1.2),t}function h_(){let i=Ut(512,512),e=i.getContext("2d"),t=ut(3);for(let s=0;s<16;s++)for(let r=0;r<4;r++){let a=60+t()*30;e.fillStyle=`rgb(${a+40},${a+10},${a-20})`,e.fillRect(r*128+s%2*64,s*32,128,32),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(r*128+s%2*64,s*32,2,32),e.fillRect(0,s*32,512,1)}let n=tn(i,{repeat:!0});return n.repeat.set(3,mn/2),n}var Il=class extends at{constructor(e){super(e,{fov:50,near:.05,far:80});let t=this.scene,n=ut(25);t.environment=new mi(e.renderer).fromScene(new Fr,.04).texture,t.environmentIntensity=.12,t.fog=new Ji(1180678,12,42),this.clear.set(1180678);let s=new st({map:c_(),color:16777215,roughness:.8}),r=new st({color:12101002,roughness:.7}),a=new V(new _e(2*pn,mn+6),new st({map:h_(),roughness:.28,metalness:.1}));a.rotation.x=-Math.PI/2,a.position.z=-mn/2+3,t.add(a);for(let _ of[-1,1]){let g=new V(new _e(mn+6,Yn),s);g.position.set(_*pn,Yn/2,-mn/2+3),g.rotation.y=-_*Math.PI/2,t.add(g);for(let E of[.15,Yn-.1]){let b=new V(new Mt(.16,E<1?.3:.25,mn+6),r);b.position.set(_*(pn-.05),E,-mn/2+3),t.add(b)}}let o=new V(new Gt(pn,pn,mn+6,48,1,!0,-Math.PI/2,Math.PI),new st({color:13482910,roughness:.8,side:_t}));o.rotation.x=-Math.PI/2,o.position.set(0,Yn,-mn/2+3),t.add(o);let l=new V(new _e(1.2,mn+6),new Tt({color:16751226,fog:!1}));l.rotation.x=Math.PI/2,l.position.set(0,Yn+pn-.02,-mn/2+3),t.add(l);for(let _=0;_>-mn;_-=4.5){let g=new V(new ji(pn-.02,.09,8,48,Math.PI),r);g.position.set(0,Yn,_),t.add(g)}let c=new V(new _e(2*pn,Yn+pn),s);c.position.set(0,(Yn+pn)/2,Li-.01),t.add(c);let h=e.img.gallery,u=e.img.yui_lisa,f=(_,g,E,b,T,S,C=.35)=>{let U=_.tex.clone();U.needsUpdate=!0,g&&(U.repeat.set(g[2],g[3]),U.offset.set(g[0],g[1]));let x=new V(new _e(E,b),new st({map:U,emissiveMap:U,emissive:16777215,emissiveIntensity:C,roughness:.55}));return x.position.set(...T),x.rotation.y=S,t.add(x),x};if(h){let _=[[.03,.51,.47,.47],[.5,.51,.47,.47],[.03,.03,.47,.47],[.5,.03,.47,.47]];[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]].forEach(([g,E],b)=>f(h,_[b],1.5,1.9,[g*(pn-.02),2.05,E],-g*Math.PI/2))}this.lisa=u?f(u,null,1.6,2.4,[0,2.1,Li+.02],0,.18):null;for(let[_,g]of[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]]){let E=new Sn(16765088,2.2,4,1.5);E.position.set(_*(pn-1.1),3.6,g),t.add(E)}this.lamps=[];for(let _=-2;_>-mn;_-=7){let g=new Sn(16761482,3.5,11,1.6);g.position.set(0,Yn+.6,_),t.add(g),this.lamps.push(g)}this.spot=new Qi(16773340,9,9,.4,.6,1.4),this.spot.position.set(0,4.8,Li+4),this.spot.target.position.set(0,2.1,Li),t.add(this.spot,this.spot.target),this.blue=new Sn(5941503,0,7,1.4),t.add(this.blue),this.flash=new Sn(16777215,0,12,1.2),this.flash.position.set(.3,1.7,-29.5),t.add(this.flash);let d=360,v=new nl(1,0);v.scale(.12,.6,.12),v.translate(0,.35,0),this.cm=new st({color:16718388,emissive:6946832,emissiveIntensity:1,metalness:.25,roughness:.12,flatShading:!0}),this.cry=new en(v,this.cm,d),t.add(this.cry),this.cd=[];for(let _=0;_<d;_++){let g=n()<.5?-1:1,E=n()<.35,b=_<70,T=b?Li+.2+n()*2.6:-n()*(mn-2)+1,S=b&&n()<.6?(n()-.5)*2.4:g*(pn-.05-n()*(E?.05:.7)),C=E?.2+n()*n()*(b?3.4:2.4):0,U=new Qt(E?0:(n()-.5)*.9,n()*6.28,E?g*(.45+n()*.5):(n()-.5)*.9);b&&C>.5&&U.set(Math.PI/2+(n()-.5)*.8,0,(n()-.5)*.8),this.cd.push({p:new A(S,C,b&&C>.5?Li+.05:T),q:new Dt().setFromEuler(U),s:(b?.7:.4)+n()*1.4})}this.FU={uA:{value:0}},this.front=new V(new _e(2*pn,Yn+pn),new oe({uniforms:this.FU,transparent:!0,blending:Fe,depthWrite:!1,side:it,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x); gl_FragColor = vec4(vec3(0.25, 0.55, 1.0) * uA * e * e * 0.14, 1.0); }"})),this.front.position.y=(Yn+pn)/2,t.add(this.front);let y=700,m=new Float32Array(y*3);for(let _=0;_<y;_++)m.set([(n()-.5)*5.6,n()*5,-n()*mn],_*3);let p=new Ge;p.setAttribute("position",new qe(m,3)),this.dust=new bt(p,new Mn({map:e.shared.glow,color:16767152,size:.03,transparent:!0,opacity:.55,blending:Fe,depthWrite:!1})),t.add(this.dust),this._m=new je,this._s=new A}update(e){let t=ae.hitPulse("kick",e,7);sn(this.camera,l_,e,.003*t);let n=Li+.1+14*B(27.3,29.4,e),s=B(27.2,27.5,e);this.front.position.z=n,this.FU.uA.value=s*(1-B(29,29.4,e)),this.blue.position.set(0,2.2,n+.3),this.blue.intensity=s*3,this.cd.forEach((a,o)=>{let l=s*B(n-.2,n-1.4,a.p.z),c=B(25,25.8,e+o%7*.05),h=a.s*c*(1-l)*(1+.08*t);this._m.compose(a.p,a.q,this._s.set(h,h,h)),this.cry.setMatrixAt(o,this._m)}),this.cry.instanceMatrix.needsUpdate=!0,this.cm.emissiveIntensity=.8+1.6*t;let r=0;for(let a of lp)r=Math.max(r,e>=a?Math.exp(-(e-a)*14):0);this.flash.intensity=r*40,this.lamps.forEach((a,o)=>{a.intensity=3.2+.4*Math.sin(e*3+o)}),this.dust.position.y=-(e*.02%.3)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,10),s=0;for(let r of lp)s=Math.max(s,e>=r?Math.exp(-(e-r)*18):0);return{bloom:.9,bloomThr:.72,grain:.07,vig:.62,ca:.7+n,dust:.25,punch:t*.25,contrast:1.06,fadeW:s*.35,tint:[1.02,.97,.95]}}};var Ju=2.3,cp=.3,Cs=6,Zu=i=>Ju-cp*(1-(i/Cs)**2),Rs=44.35,u_=[[41.3,-1.3,1.78,1.25,-.95,1.74,0,32],[42.62,-.2,1.82,1.4,.2,1.76,0,32],[42.67,.5,.55,2.3,.3,2.4,0,48,.08],[44.3,-.4,.65,2.4,.6,2.3,0,48,.03],[44.35,1.05,1.8,1.05,1.05,1.76,0,30],[46.9,1.05,1.79,.78,1.05,1.78,0,30],[46.95,3.6,1.4,5.2,.4,1.8,0,42],[47.9,4.6,1.6,6.6,.4,2,0,42]],f_=`
uniform float uT, uWind, uAmp, uSeed, uH, uDrop; varying vec2 vUv; varying vec3 vW; ${Pe}
void main(){ vUv = uv; vec3 p = position; float a = clamp(-p.y / uH, 0.0, 1.0), a2 = pow(a, 1.3);
  float w = uWind * (0.6 + 0.4 * vnoise(vec2(uT * 0.7 + uSeed, p.x)));
  p.z += a2 * uAmp * (sin(p.x * 3.0 + uT * 4.2 + uSeed) * 0.16 + sin(p.y * 5.0 - uT * 5.3 + uSeed * 2.0) * 0.1 + sin(p.x * 7.0 + p.y * 4.0 + uT * 7.0) * 0.035 + w * 0.55);
  p.y += a2 * uAmp * w * 0.08; p.x += a * uAmp * sin(uT * 2.3 + p.y * 2.0 + uSeed) * 0.03;
  p.y += uDrop;
  vec4 wp = modelMatrix * vec4(p, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,d_=`
uniform sampler2D uMap; uniform float uHas, uDev, uPhotoA; uniform vec3 uCol, uSun; varying vec2 vUv; varying vec3 vW; ${Pe}
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
  gl_FragColor = vec4(c * vec3(1.08, 0.95, 0.85), 1.0); }`,p_=`uniform sampler2D uMap; uniform float uT; varying vec2 vUv; ${Pe}
void main(){ vec2 uv = vUv + vec2(vnoise(vUv * 40.0 + uT) - 0.5, 0.0) * 0.002;
  vec3 c = texture2D(uMap, uv, 2.2).rgb; gl_FragColor = vec4(c * 0.95, smoothstep(1.0, 0.8, vUv.y) * smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x)); }`,m_=`varying vec2 vUv; uniform float uT; ${Pe}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.95, 0.52, 0.32), vec3(0.12, 0.1, 0.26), smoothstep(0.05, 0.75, y));
  float cl = smoothstep(0.5, 0.8, fbm(vUv * vec2(3.0, 6.0) + vec2(uT * 0.02, 0.0)));
  c = mix(c, vec3(0.9, 0.5, 0.42), cl * 0.45); gl_FragColor = vec4(c, 1.0); }`,Ul=class extends at{constructor(e){super(e,{fov:34,near:.05,far:80});let t=this.scene,n=ut(41);t.fog=new Ji(10115648,12,40),this.T={uT:{value:0},uWind:{value:.5}},t.add(is(m_,{uT:this.T.uT})),this.sun=new A(-.5,.35,-.8).normalize();let s=e.img.village;if(s){let v=new V(new _e(50,50*s.h/s.w),new oe({uniforms:{uMap:{value:s.tex},uT:this.T.uT},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:p_,depthWrite:!1,transparent:!0}));v.position.set(1,5.2,-30),v.scale.setScalar(1.9),v.renderOrder=-10,t.add(v)}let r=new V(new _e(24,9),new oe({transparent:!0,depthWrite:!1,uniforms:{uSun:{value:this.sun}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; ${Pe} void main(){ float n = fbm(vP * 1.5), g = vnoise(vP * 30.0);
        vec3 c = mix(vec3(0.05, 0.06, 0.02), vec3(0.22, 0.18, 0.07), n * 0.8 + g * 0.3);
        gl_FragColor = vec4(c, smoothstep(1.0, 0.45, length(vP / vec2(12.0, 4.5)))); }`}));r.rotation.x=-Math.PI/2,r.position.z=1,r.renderOrder=-5,t.add(r),t.add(new sl(16762010,2764824,1.2));let a=new yr(16756848,2.2);a.position.copy(this.sun).multiplyScalar(10),t.add(a);let o=new st({color:5913638,roughness:.9});for(let v of[-Cs,Cs]){let y=new V(new Gt(.06,.07,Ju+.3,10),o);y.position.set(v,(Ju+.3)/2,0),t.add(y)}let l=[];for(let v=0;v<=40;v++){let y=-Cs+v/40*2*Cs;l.push(new A(y,Zu(y),0))}t.add(new V(new ri(new Fn(l),120,.008,6),new st({color:14538184})));let c=new st({color:13214330,roughness:.7}),h=[{x:-4.2,w:1.6,h:1.45,col:15920870,amp:1},{x:-2.6,w:.42,h:.5,img:"snap2",amp:.35},{x:-1.9,w:.72,h:.82,col:9413560,amp:.9},{x:-.95,w:.42,h:.5,img:"snap1",amp:.35},{x:-.4,w:.42,h:.5,img:"snap3",amp:.35},{x:.3,w:.5,h:.9,col:15784080,amp:.9},{x:1.05,w:.42,h:.5,img:"snap4",amp:.35,isNew:!0},{x:1.85,w:.62,h:1,col:16448250,amp:.9},{x:3.3,w:1.5,h:1.35,col:12571878,amp:1}];this.cloth=[],h.forEach((v,y)=>{let m=v.img?e.img[v.img]:null,p={...this.T,uAmp:{value:v.amp},uSeed:{value:n()*10},uH:{value:v.h},uDrop:{value:0},uMap:{value:m?m.tex:null},uHas:{value:m?1:0},uDev:{value:1},uPhotoA:{value:1},uCol:{value:new we(v.col??16777215)},uSun:{value:this.sun}},_=new _e(v.w,v.h,v.img?8:24,v.img?10:30);_.translate(0,-v.h/2,0);let g=new V(_,new oe({vertexShader:f_,fragmentShader:d_,uniforms:p,side:it}));g.position.set(v.x,Zu(v.x)+.01,0),g.rotation.z=-Math.atan(2*cp*v.x/(Cs*Cs))*.7,t.add(g);let E=[];for(let b of v.w>.5?[-.42,.42]:[0]){let T=new V(new Mt(.03,.09,.03),c);T.position.set(v.x+b*v.w,Zu(v.x+b*v.w)-.02,.012),t.add(T),E.push(T)}this.cloth.push({it:v,U:p,m:g,pins:E})});let u=500,f=new Float32Array(u*3);for(let v=0;v<u;v++)f.set([(n()-.5)*16,n()*4,(n()-.5)*8],v*3);let d=new Ge;d.setAttribute("position",new qe(f,3)),this.pol=new bt(d,new Mn({map:e.shared.glow,color:16769200,size:.035,transparent:!0,opacity:.8,blending:Fe,depthWrite:!1})),t.add(this.pol)}update(e){let t=ae.hitPulse("kick",e,6);sn(this.camera,u_,e,.002*t),this.T.uT.value=e,this.T.uWind.value=.45+.35*Math.sin(e*.9)+.4*t+.5*ae.hitPulse("hit",e,3);for(let n of this.cloth){if(!n.it.isNew)continue;let s=e>=Rs,r=fe((e-Rs)/.28),a=s?(1-r)*.6-Math.sin(r*Math.PI)*0+(r>=1?Math.exp(-(e-Rs-.28)*9)*Math.sin((e-Rs-.28)*40)*.015:0):5;n.U.uDrop.value=a,n.m.visible=s,n.pins.forEach(o=>{o.visible=e>=Rs+.26}),n.U.uDev.value=B(Rs+.35,Rs+2.3,e)}this.pol.position.set(e*.6%4-2,Math.sin(e*.5)*.1,0)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,10);return{bloom:.95,bloomThr:.72,grain:.05,vig:.6,contrast:1.08,ca:.6+n,dust:.35,punch:t*.2,leak:.15,tint:[1.05,.97,.9],fadeW:n*.25+B(47.3,47.8,e)*0}}};var v_=14,xi=i=>-(i-69.4)*v_,g_=`uniform float uT, uK; varying vec3 vW; ${Pe}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 4.0);
  float n = 0.6 * fbm(vW.xz * 0.18 + vec2(0.0, uT * 0.3)) + 0.4 * vnoise(vec2(vW.x * 1.2, vW.z * 4.0) - uT);
  vec3 deep = vec3(0.05, 0.0, 0.006), sky = vec3(0.75, 0.16, 0.1);
  vec3 c = mix(deep, sky, fr * 0.6) * (0.7 + 0.5 * n) + vec3(1.0, 0.5, 0.35) * pow(n, 7.0) * 0.5 * (0.15 + 0.85 * fr) * (1.0 + uK);
  gl_FragColor = vec4(c, 0.78 + 0.2 * (1.0 - fr)); }`,x_=`uniform float uT; varying vec2 vUv; ${Pe}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.85, 0.28, 0.16), vec3(0.1, 0.0, 0.03), smoothstep(0.3, 0.9, y));
  float sp = fbm(vec2(atan(vUv.x - 0.5, y - 0.1) * 3.0, length(vUv - vec2(0.5, 0.1)) * 4.0 - uT * 0.1));
  c += vec3(0.4, 0.05, 0.02) * sp * smoothstep(0.35, 0.8, y); gl_FragColor = vec4(c, 1.0); }`,y_=[[69.4,0,1.1,xi(69.4),.4,1.4,xi(69.4)-20,58,.12],[70.79,.8,1.3,xi(70.79),1.2,1.5,xi(70.79)-20,58,-.1],[70.84,0,16,xi(70.84)+6,0,0,xi(70.84)-14,50,0],[72.94,0,11,xi(72.94)-4,0,0,xi(72.94)-22,50,.25],[72.98,0,2,xi(72.98)-8,0,6,-170,50,0],[74.2,0,6.5,xi(74.2)-12,0,8,-170,46,0]],Ll=class extends at{constructor(e){super(e,{fov:58,near:.1,far:400});let t=this.scene,n=ut(69);t.environment=new mi(e.renderer).fromScene(new Fr,.04).texture,t.environmentIntensity=.28,t.fog=new Ji(3803658,25,150),this.U={uT:{value:0},uK:{value:0}},t.add(is(x_,this.U));let s=e.img.m_swarm;if(s){let b=new V(new _e(260,260*s.h/s.w),new Tt({map:s.tex,fog:!1,transparent:!0,opacity:.4,depthWrite:!1,blending:Fe}));b.position.set(0,60,-250),b.renderOrder=-50,t.add(b),this.swarm=b}let r=[new se(0,0),new se(1,0),new se(1,.78),new se(0,1)],a=new Qa(r,6);a.computeVertexNormals();let o=new st({color:13111338,emissive:7340044,emissiveIntensity:1,metalness:.3,roughness:.14,flatShading:!0}),l=420;this.cry=new en(a,o,l),this.cry.instanceColor=new gt(new Float32Array(l*3),3);let c=new je,h=new Dt,u=new Qt,f=new A,d=new A;this.cz=[];for(let b=0;b<l;b++){let T=n()<.5?-1:1,S=n()<.3,C=T*(S?2.6+n()*3.5:7+n()*28),U=10-n()*150,x=S?.8+n()*2.4:5+n()*n()*26,M=Math.min(x*(.05+n()*.05),1.4);u.set((n()-.5)*.5,n()*6.28,-T*(n()*.3)),h.setFromEuler(u),c.compose(d.set(C,-.5,U),h,f.set(M,x,M)),this.cry.setMatrixAt(b,c),this.cz.push(U)}t.add(this.cry);let v=new en(a,o.clone(),l);v.instanceMatrix=this.cry.instanceMatrix,v.instanceColor=this.cry.instanceColor,v.material.side=it,v.scale.y=-1,v.position.y=-1,t.add(v),this.mir=v;let y=new V(new _e(600,600),new oe({uniforms:this.U,transparent:!0,depthWrite:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:g_}));y.rotation.x=-Math.PI/2,y.position.y=-.5,t.add(y),this.RU={uA:{value:0},uK:this.U.uK};let m=new V(new ji(40,.8,16,160),new oe({uniforms:this.RU,transparent:!0,blending:Fe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vN; void main(){ vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA, uK; varying vec3 vN; void main(){ gl_FragColor = vec4(vec3(1.0, 0.9, 0.8) * uA * (1.4 + uK), 1.0); }"}));m.position.set(0,26,-200),t.add(m);let p=new dn(new ln({map:e.shared.glow,color:16756864,blending:Fe,depthWrite:!1,fog:!1}));p.position.copy(m.position),p.scale.setScalar(120),t.add(p),this.halo=p;let _=600,g=new Float32Array(_*3);for(let b=0;b<_;b++)g.set([(n()-.5)*240,10+n()*70,-60-n()*140],b*3);let E=new Ge;E.setAttribute("position",new qe(g,3)),this.ang=new bt(E,new Mn({map:e.shared.glow,color:16774382,size:1.4,transparent:!0,blending:Fe,depthWrite:!1,fog:!1})),t.add(this.ang),this.col=new we}update(e){let t=ae.hitPulse("kick",e,6),n=ae.hitPulse("hit",e,4);sn(this.camera,y_,e,.02*t),this.U.uT.value=e,this.U.uK.value=t;let s=this.camera.position.z,r=ae.since("kick",e);for(let o=0;o<this.cz.length;o++){let l=s-this.cz[o],h=.55+2.2*(Math.exp(-Math.pow((l-r*60)/6,2))*Math.exp(-r*1.5))+.6*n;this.cry.instanceColor.setXYZ(o,h,h*.9,h*.9)}this.cry.instanceColor.needsUpdate=!0;let a=B(72.96,73.6,e);this.RU.uA.value=.3+a*1.2,this.halo.material.opacity=.25+a*.5,this.ang.position.y=-(e-69.4)*1.6,this.swarm&&(this.swarm.position.y=60-(e-69.4)*1.2)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,8);return{bloom:.8,bloomThr:.8,contrast:1.12,grain:.07,vig:.6,ca:.9+1.5*n,punch:t*.35,shake:.004*t+.006*n,tint:[1.04,.92,.9],dust:.25,dustCol:[1,.5,.4],fadeW:B(73.4,74.03,e)*.5}}};var __=86.89,hp=88.64,kt={w:9.6,h:5.4,y:3.2,z:-10},up=new A(0,2.6,7.5),E_=`uniform sampler2D uTex; uniform float uT, uFl, uBurn, uHeat; varying vec2 vUv; ${Pe}
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
  gl_FragColor = vec4(c, 1.0); }`,fp="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",M_=`uniform float uT, uA; uniform vec3 uO, uE, uCol; uniform vec2 uH; varying vec3 vW; ${Pe}
void main(){ vec3 ax = uE - uO; float L = length(ax); ax /= L; vec3 r = vW - uO; float s = max(dot(r, ax), 0.001);
  vec3 lat = r - ax * s; vec2 q = vec2(lat.x, lat.y) / (uH * s / L);                     // -1..1 across the frame
  float edge = smoothstep(1.0, 0.55, abs(q.x)) * smoothstep(1.0, 0.5, abs(q.y));
  float rays = 0.55 + 0.45 * vnoise(q * 7.0 + 3.0) + 0.25 * vnoise(q * 23.0);
  float n = 0.6 + 0.4 * fbm3(vW * 0.7 + vec3(0.0, uT * 0.15, uT * 0.1));
  float a = uA * n * rays * edge * (0.08 + 0.92 * exp(-s * 0.14)) * 0.14; gl_FragColor = vec4(uCol * a, 1.0); }`,b_=`uniform float uA; uniform vec3 uO; varying vec3 vW;
void main(){ float d = length(vW - uO); gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * uA * exp(-d * 0.35) * 0.22, 1.0); }`,S_=[[84.9,-1.7,.45,2.6,-.6,1.4,-10,42,.03],[86.87,-.9,.75,-.6,.4,2.2,-10,42,-.02],[86.9,-1.3,2.3,9.9,.9,2.9,1,46,.05],[87.9,-1,2.5,9.3,.7,2.9,1,42,.02],[87.93,-1.75,2.95,8.15,-.05,2.8,7.2,34,-.05],[88.62,-1.55,2.9,8.05,-.05,2.75,7.25,30,-.05],[88.65,2.6,5.4,12.5,0,2.9,-10,46,0],[89.4,2.2,5,11.5,0,3,-10,44,0]];function w_(){let i=Ut(256,512),e=i.getContext("2d"),t=ut(8);e.fillStyle="#4a4a52",e.fillRect(0,0,256,512);for(let n=8;n<504;n+=22)for(let s=10;s<246;s+=26){let r=t()<.35;e.fillStyle=r?`rgb(255,${190+t()*50|0},${120+t()*60|0})`:`rgb(${30+t()*25|0},${34+t()*25|0},${44+t()*25|0})`,e.fillRect(s,n,16,12)}return tn(i)}function T_(){let i=Ut(256,256),e=i.getContext("2d");e.fillStyle="#2a2a2e",e.beginPath(),e.arc(128,128,126,0,7),e.fill(),e.fillStyle="#141416",e.beginPath(),e.arc(128,128,100,0,7),e.fill(),e.fillStyle="#8c8c92",e.beginPath(),e.arc(128,128,60,0,7),e.fill(),e.fillStyle="#0a0a0a";for(let t=0;t<5;t++){let n=t*1.2566;e.beginPath(),e.arc(128+Math.cos(n)*38,128+Math.sin(n)*38,15,0,7),e.fill()}return e.beginPath(),e.arc(128,128,7,0,7),e.fill(),tn(i)}function A_(i){let e=Ut(256,1024),t=e.getContext("2d");t.fillStyle="#120c08",t.fillRect(0,0,256,1024);for(let s=0;s<6;s++){let r=s*170+8;if(i){let a=i.width*.55,o=i.width*(.1+.06*s);t.drawImage(i,o,i.height*.2,a,a*.62,36,r,184,150)}t.fillStyle="rgba(255,170,80,0.25)",t.fillRect(36,r,184,150)}t.fillStyle="#e8d8b8";for(let s=4;s<1024;s+=28)t.fillRect(8,s,16,14),t.fillRect(232,s,16,14);let n=tn(e);return n.wrapT=Pi,n}var Dl=class extends at{constructor(e){super(e,{fov:42,near:.05,far:200});let t=this.scene,n=ut(85),s=e.img,r=s.set_fight;t.fog=new Ka(460042,.035),this.clear.set(262918),t.add(new _r(3813440,.5)),this.U={uTex:{value:r?.tex},uT:{value:0},uFl:{value:1},uBurn:{value:0},uHeat:{value:0}};let a=new V(new _e(kt.w,kt.h),new oe({uniforms:this.U,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:E_,fog:!1}));a.position.set(0,kt.y,kt.z),t.add(a);let o=new V(new Mt(kt.w+.6,kt.h+.6,.1),new st({color:328965,roughness:.9}));o.position.set(0,kt.y,kt.z-.08),t.add(o),this.screenLight=new Sn(16751216,8,0,1.2),this.screenLight.position.set(0,3,kt.z+2.5),t.add(this.screenLight);let l=new V(new _e(60,60),new st({color:1709592,roughness:.35,metalness:.2}));l.rotation.x=-Math.PI/2,t.add(l);let c=w_(),h=new st({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.35,roughness:.6,color:10131104}),u=new Mt(1,1,1);u.translate(0,.5,0);let f=90,d=new en(u,h,f),v=new je,y=new Dt,m=new Qt,p=0;for(let Z=0;Z<f*3&&p<f;Z++){let q=(n()-.5)*11,ee=-9+n()*5.8;if(Math.abs(q)<.7)continue;let ue=.4+n()*n()*2.6,ye=.25+n()*.35;m.set(0,(n()-.5)*.2,p===7?.5:0),y.setFromEuler(m),v.compose(new A(q,0,ee),y,new A(ye,ue,ye*(.8+n()*.5))),d.setMatrixAt(p++,v)}d.count=p,t.add(d),this.evas=[],[["cut_e01",-1.6,-7.2,3.1,.2],["cut_e13",1.9,-7.6,3.3,-.25]].forEach(([Z,q,ee,ue,ye],He)=>{let I=s[Z];if(!I)return;let dt=ss(I,{wind:0,rim:1.2,seed:He*2.3});dt.uniforms.uTint.value.set(.42,.34,.4),dt.uniforms.uRim.value.set(1,.72,.5,.5);let ke=new V(rs(I,ue),dt);ke.position.set(q,0,ee),ke.rotation.y=ye,ke.renderOrder=5,t.add(ke),this.evas.push(ke)});let _=new st({color:6974064,metalness:.8,roughness:.4}),g=new Gt(.035,.035,1,6),E=[],b=(Z,q)=>E.push([Z,q]);for(let Z of[-1,1])for(let q=-10;q<=4;q+=2){let ee=Z*6.2,ue=Z*7.4;b([ee,0,q],[ee,8,q]),b([ue,0,q],[ue,8,q]);for(let ye=1.5;ye<=7.5;ye+=2)b([ee,ye,q],[ue,ye,q]),q<4&&(b([ee,ye,q],[ee,ye,q+2]),b([ue,ye,q],[ue,ye+2>8?ye:ye+2,q+2]))}for(let Z=-6;Z<=6;Z+=2)b([Z,8,-4],[Z,8,2]);b([-6.2,8,-4],[6.2,8,-4]),b([-6.2,8,2],[6.2,8,2]);let T=new en(g,_,E.length),S=new A(0,1,0);E.forEach(([Z,q],ee)=>{let ue=new A(...Z),ye=new A(...q),He=ye.clone().sub(ue);v.compose(ue.clone().add(ye).multiplyScalar(.5),y.setFromUnitVectors(S,He.clone().normalize()),new A(1,He.length(),1)),T.setMatrixAt(ee,v)}),t.add(T),this.lamps=[];let C=new tl(2.2,8,24,1,!0);C.translate(0,-4,0);for(let Z=0;Z<6;Z++){let q=-5+Z*2,ee=new A(q,7.9,-1+Z%2*1.5),ue=new V(new Gt(.22,.3,.5,12),new st({color:1381653,metalness:.6,roughness:.5}));ue.position.copy(ee),t.add(ue);let ye={uA:{value:0},uO:{value:ee}},He=new V(C,new oe({uniforms:ye,vertexShader:fp,fragmentShader:b_,transparent:!0,blending:Fe,depthWrite:!1,side:it}));He.position.copy(ee),He.lookAt(q*.3,0,-5),He.rotateX(-Math.PI/2),t.add(He);let I=new dn(new ln({map:e.shared.glow,color:16769200,blending:Fe,depthWrite:!1,transparent:!0,opacity:0}));I.position.copy(ee).add(new A(0,-.3,0)),I.scale.setScalar(1.6),t.add(I),this.lamps.push({u:ye,sp:I,on:__+.1+Z*.25})}this.stage=new Qi(16769728,0,0,.7,.6,0),this.stage.position.set(0,8,-1),this.stage.target.position.set(0,0,-6),t.add(this.stage,this.stage.target);let U=new an;U.position.copy(up),t.add(U),this.pj=U;let x=new Sn(16756848,1.5,4,1);x.position.set(.8,1.4,1.2),U.add(x);let M=new Sn(8425727,.8,4,1);M.position.set(-1,.3,.8),U.add(M);let L=new st({color:2828846,metalness:.7,roughness:.35}),F=new V(new Mt(.5,.6,.9),L);U.add(F);let k=new V(new Gt(.1,.12,.3,24),L);k.rotation.x=Math.PI/2,k.position.set(0,.05,-.58),U.add(k);let K=new dn(new ln({map:e.shared.glow,color:16773336,blending:Fe,depthWrite:!1}));K.position.set(0,.05,-.75),K.scale.setScalar(.9),U.add(K),this.glass=K;let O=T_(),ne=[new st({color:3816e3,metalness:.8,roughness:.3}),new st({map:O,metalness:.5,roughness:.4}),new st({map:O,metalness:.5,roughness:.4})];this.reels=[[-.35,.62,.42],[.3,.6,.38]].map(([Z,q,ee])=>{let ue=new V(new Gt(ee,ee,.06,40),ne);return ue.rotation.z=Math.PI/2,ue.position.set(0,q+.3,Z),U.add(ue),ue}),this.strip=A_(r?.img),this.strip.repeat.set(1,.5);let Y=new V(new _e(.1,.4),new Tt({map:this.strip,color:16767144}));Y.position.set(-.252,.02,-.1),Y.rotation.y=-Math.PI/2,U.add(Y);let pe=new V(new ri(new Fn([new A(0,.95,-.7),new A(0,.5,-.5),new A(0,.25,-.2),new A(0,.3,.2),new A(0,.6,.62)]),40,.012,4),new st({color:3810328,roughness:.3}));U.add(pe);let he=up.clone().add(new A(0,.05,-.75)),ve=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Z,q])=>[Z*kt.w/2,kt.y+q*kt.h/2,kt.z+.02]),Ze=[];for(let Z=0;Z<4;Z++){let q=ve[Z],ee=ve[(Z+1)%4];Ze.push(he.x,he.y,he.z,...q,...ee)}let xe=new Ge;xe.setAttribute("position",new Ve(Ze,3)),this.BU={uT:this.U.uT,uA:{value:1},uO:{value:he},uE:{value:new A(0,kt.y,kt.z)},uH:{value:new se(kt.w/2,kt.h/2)},uCol:{value:new we(1,.86,.7)}},t.add(new V(xe,new oe({uniforms:this.BU,vertexShader:fp,fragmentShader:M_,transparent:!0,blending:Fe,depthWrite:!1,side:it,fog:!1})));let X=1400,j=new Float32Array(X*3);for(let Z=0;Z<X;Z++){let q=n(),ee=(n()-.5)*.9,ue=(n()-.5)*.9;j.set([he.x+ee*kt.w*q,he.y+(kt.y+ue*kt.h-he.y)*q,he.z+(kt.z-he.z)*q],Z*3)}let de=new Ge;de.setAttribute("position",new qe(j,3)),this.dust=new bt(de,new Mn({map:e.shared.glow,color:16768180,size:.05,transparent:!0,opacity:.7,blending:Fe,depthWrite:!1})),t.add(this.dust)}update(e){let t=ae.hitPulse("kick",e,8),n=ae.hitPulse("hit",e,5);sn(this.camera,S_,e,.01*n);let s=.9+.1*Math.sin(e*150.8)*Math.sin(e*47)+.15*t,r=B(hp-.05,89.3,e),a=B(87.8,hp,e);this.U.uT.value=e,this.U.uFl.value=s,this.U.uBurn.value=r,this.U.uHeat.value=a,this.BU.uA.value=s*(1+n*.8+r*2),this.screenLight.intensity=(7+5*t+12*r)*s;let o=0;for(let l of this.lamps){let c=B(l.on,l.on+.06,e);o+=c,l.u.uA.value=c*(1+.4*t),l.sp.material.opacity=c}this.stage.intensity=o*1.6,this.reels.forEach((l,c)=>{l.rotation.x=-e*(c?5.2:4.1)}),this.strip.offset.y=Math.floor(e*24)*(170/1024),this.glass.scale.setScalar(.8+.3*s+.8*r);for(let l of this.evas)l.material.uniforms.uT.value=e,l.material.uniforms.uRim.value.w=.45+.6*t;this.dust.position.y=Math.sin(e*.3)*.05}post(e){let t=ae.hitPulse("kick",e,10),n=ae.hitPulse("hit",e,7);return{bloom:.9,bloomThr:.74,grain:.1,vig:.7,ca:.8+n,flicker:.12,scratch:.25,weave:.3,punch:.3*t,shake:.004*n,tint:[1.05,.95,.86],dust:.35,dustCol:[1,.8,.6],fadeW:B(88.9,89.3,e)*.7}}};var n0=18,ju=n0*Xn,Cn=1.4,Wt={y0:1.05,y1:1.95},Qu=12,Nl=1,Di=1.6,R_=new A(1,-.8,-.35).normalize(),as=97.09,e0=97.61,ko=5,i0=`
uniform vec3 uSun; uniform float uS, uPitch, uBreak;
float sunAt(vec3 p){                                   // 0..1 sun reaching p through the left windows
  float k = (p.x + ${Cn.toFixed(2)}) / uSun.x; vec3 w = p - uSun * k;           // hit on the left wall plane (x = -HW)
  if (k < 0.0) return 0.0;
  float z = w.z - ${Nl.toFixed(2)} + ${(Di/2).toFixed(2)}, cell = fract(z / ${Di.toFixed(2)} + 0.5);
  float win = smoothstep(0.08, 0.14, cell) * smoothstep(0.92, 0.86, cell) * smoothstep(${Wt.y0.toFixed(2)}, ${(Wt.y0+.05).toFixed(2)}, w.y) * smoothstep(${Wt.y1.toFixed(2)}, ${(Wt.y1-.05).toFixed(2)}, w.y);
  win *= step(-18.0, w.z) * step(w.z, 1.9);
  float oz = w.z + uS + p.x * 0.0;                                             // scenery coordinate along the track
  float pole = smoothstep(0.02, 0.14, abs(fract(oz / uPitch) - 0.5) * uPitch * 0.5 - 0.05);
  float tree = mix(1.0, smoothstep(0.35, 0.7, vnoise(vec2(oz * 0.35, w.y * 1.5))), step(0.55, vnoise(vec2(oz * 0.05, 3.0))));
  return win * mix(pole * tree, 1.0, uBreak * 0.4);
}`,t0="varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",C_=`uniform vec3 uCol; uniform float uSpec, uGrain, uAmb; varying vec3 vW, vN; ${Pe} ${i0}
void main(){ vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float s = sunAt(vW) * max(dot(N, -uSun), 0.0);
  vec3 amb = mix(vec3(0.07, 0.045, 0.07), vec3(0.17, 0.09, 0.08), N.y * 0.5 + 0.5) * uAmb;
  amb += vec3(0.25, 0.12, 0.2) * smoothstep(0.5, -1.0, N.x) * 0.3;             // dusk glow from the right windows
  vec3 c = uCol * (amb + vec3(2.4, 1.2, 0.5) * s);
  c += vec3(1.6, 0.9, 0.5) * uSpec * pow(max(dot(reflect(uSun, N), V), 0.0), 30.0) * sunAt(vW + N * 0.02);
  c *= 1.0 + uGrain * (vnoise(vW.xz * 90.0 + vW.y * 40.0) - 0.5);
  gl_FragColor = vec4(c, 1.0); }`,P_=`uniform float uT; varying vec3 vW, vN; ${Pe} ${i0}
void main(){ vec3 ro = cameraPosition, rd = normalize(vW - ro); float L = min(length(vW - ro), 14.0);
  float j = hash12(gl_FragCoord.xy + uT), acc = 0.0;
  for (int i = 0; i < 28; i++) { vec3 p = ro + rd * L * (float(i) + j) / 28.0; if (p.y < 0.0 || p.y > 2.3 || abs(p.x) > ${Cn.toFixed(2)}) continue;
    acc += sunAt(p) * (0.6 + 0.4 * vnoise3(p * 3.0 + vec3(0.0, uT * 0.2, uT * 0.4))); }
  acc *= L / 28.0; gl_FragColor = vec4(vec3(1.0, 0.62, 0.32) * acc * 0.05, 1.0); }`,I_=`uniform float uS, uSide, uPitch; varying vec3 vW, vN; ${Pe}
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
  gl_FragColor = vec4(c, 1.0); }`,U_=`uniform float uCrack, uSide, uT; varying vec3 vW, vN; varying vec2 vUv; ${Pe}
void main(){ vec2 q = (vUv - vec2(0.45, 0.4)) * vec2(1.4, 1.0); float r = length(q), a = atan(q.y, q.x);
  float rad = smoothstep(0.03, 0.0, abs(fract(a * 2.2 + vnoise(vec2(r * 6.0, a)) * 0.6) - 0.5) * r * 3.0);
  float ring = smoothstep(0.02, 0.0, abs(fract(r * 7.0 + vnoise(vec2(a * 3.0, 1.0)) * 0.5) - 0.5) * 0.3) * step(r, 0.45);
  float crack = (rad + ring * 0.6) * step(r, uCrack * 0.9);
  float streak = 0.03 * smoothstep(0.3, 0.9, vnoise(vec2(vUv.x * 3.0 + vUv.y * 2.0, uT * 0.5)));
  vec3 c = vec3(1.0, 0.85, 0.7) * (crack * 1.2 + streak); gl_FragColor = vec4(c, 0.04 + crack * 0.6 + streak); }`,L_=`attribute vec4 aS; attribute vec3 aV, aR; uniform float uT; varying vec3 vN, vW; varying float vA;
mat3 rot(vec3 a){ vec3 c = cos(a), s = sin(a); return mat3(c.y*c.z, c.y*s.z, -s.y, s.x*s.y*c.z - c.x*s.z, s.x*s.y*s.z + c.x*c.z, s.x*c.y, c.x*s.y*c.z + s.x*s.z, c.x*s.y*s.z - s.x*c.z, c.x*c.y); }
void main(){ float u = uT - aS.w; vA = step(0.0, u); u = max(u, 0.0); float sl = u < 0.25 ? u : 0.25 + (u - 0.25) * 0.22;  // bullet-time after the burst
  mat3 R = rot(aR * sl * 3.0); vec3 p = aS.xyz + aV * sl + vec3(0.0, -1.2, 0.0) * sl * sl; vN = R * normal;
  vec4 w = vec4(p + R * position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w * vA; }`,D_=`varying vec3 vN, vW; varying float vA; ${Pe} ${i0}
void main(){ if (vA < 0.5) discard; vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float g = pow(abs(dot(reflect(uSun, N), V)), 12.0), f = pow(1.0 - abs(dot(N, V)), 3.0), s = 0.25 + sunAt(vW);
  gl_FragColor = vec4(vec3(1.6, 1.0, 0.6) * (g * 2.5 + f * 0.5 + 0.08) * s, 1.0); }`,N_=[[91.2,.35,1.45,1.95,-.1,1.05,-6,38,0],[92.08,.3,1.4,1.2,-.1,1.05,-6,38,.01],[92.11,-.55,1.1,-3.2,.9,.95,-4.3,30,-.02],[93.6,-.5,1.12,-3.35,.9,.97,-4.3,28,-.02],[95.5,.8,1.6,1.95,-.3,1,-8,40,.03],[96.9,.7,1.5,.9,-.3,1,-8,38,.03],[96.92,.55,1.4,-5.3,-1.4,1.45,-7,34,-.04],[97.58,.45,1.38,-5.45,-1.4,1.45,-7,32,-.04],[97.61,1.1,2.15,1.9,-.6,.9,-9,50,.06],[98.3,1,2.05,1.2,-.6,.9,-9,48,.06]],Fl=class extends at{constructor(e){super(e,{fov:38,near:.03,far:80});let t=this.scene,n=ut(91),s=e.img;this.clear.set(1050120),this.SU={uSun:{value:R_},uS:{value:0},uPitch:{value:ju},uBreak:{value:0}};let r=(S,C={})=>new oe({uniforms:{...this.SU,uCol:{value:new we(S)},uSpec:{value:C.spec??0},uGrain:{value:C.grain??.08},uAmb:{value:C.amb??1}},vertexShader:t0,fragmentShader:C_,side:C.side??pi}),a=(S,C,U,x,M,L,F)=>{let k=new V(new Mt(S,C,U),F);return k.position.set(x,M,L),t.add(k),k},o=22,l=-8,c=r(13615784),h=r(7166794),u=r(4160094,{grain:.5}),f=r(10132130,{spec:1.4}),d=r(5916218,{spec:.25,grain:.25});a(2*Cn,.02,o,0,-.01,l,d),a(2*Cn,.02,o,0,2.31,l,r(15261904,{amb:1.3}));for(let S of[-1,1]){let C=S*(Cn+.03);a(.06,Wt.y0,o,C,Wt.y0/2,l,c),a(.06,2.3-Wt.y1,o,C,(2.3+Wt.y1)/2,l,c);for(let M=-1;M<=Qu;M++)a(.07,Wt.y1-Wt.y0,Di*.2,C,(Wt.y0+Wt.y1)/2,Nl-M*Di+Di/2,c);a(.5,.1,o-1,S*(Cn-.27),.42,l,u),a(.1,.45,o-1,S*(Cn-.04),.66,l,u),a(.45,.36,o-1,S*(Cn-.3),.18,l,h),a(.35,.02,o-1,S*(Cn-.2),2.02,l,f);let U=new V(new Gt(.015,.015,o,8),f);U.rotation.x=Math.PI/2,U.position.set(S*.62,2.12,l),t.add(U);let x=new V(new _e(60,5),new oe({uniforms:{...this.SU,uSide:{value:S}},vertexShader:t0,fragmentShader:I_}));x.position.set(S*(Cn+1.2),1.5,l),x.rotation.y=S*-Math.PI/2,t.add(x)}for(let S of[2.2,l-o/2+.3])a(2*Cn,2.3,.08,0,1.15,S,c);for(let S=0;S<6;S++)a(.5,.015,1.4,0,2.29,1-S*3.2,r(16774368,{amb:2.6,grain:0}));for(let S of[-1.5,-9.5,-17.5])for(let C of[-1,1]){let U=new V(new Gt(.02,.02,2.3,8),f);U.position.set(C*.95,1.15,S),t.add(U)}let v=2*22;this.straps=new en(new Mt(.03,.26,.008).translate(0,-.13,0),h,v),this.rings=new en(new ji(.06,.009,6,20),r(15722712),v),this.sp=[];for(let S=0;S<v;S++)this.sp.push([(S%2?1:-1)*.62,1.5-Math.floor(S/2)*.5,n()*6]);t.add(this.straps,this.rings),this.panes=[];for(let S of[-1,1])for(let C=0;C<Qu;C++){let U={uCrack:{value:0},uSide:{value:S},uT:{value:0}},x=new V(new _e(Di*.8,Wt.y1-Wt.y0),new oe({uniforms:U,transparent:!0,depthWrite:!1,blending:Fe,vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:U_}));x.position.set(S*Cn,(Wt.y0+Wt.y1)/2,Nl-C*Di),x.rotation.y=S*-Math.PI/2,t.add(x),S<0&&this.panes.push({u:U,m:x,at:C===ko?as:e0+Math.abs(C-ko)*.045})}this.RU={...this.SU,uT:{value:0}};let y=new V(new Mt(2*Cn-.02,2.3,o),new oe({uniforms:this.RU,vertexShader:t0,fragmentShader:P_,side:_t,transparent:!0,depthWrite:!1,depthTest:!1,blending:Fe}));y.position.set(0,1.15,l),y.renderOrder=20,t.add(y);let m=1500,p=new wn,_=new Ge;_.setAttribute("position",new Ve([0,.05,0,-.04,-.03,0,.045,-.035,0],3)),_.computeVertexNormals(),p.index=null,p.setAttribute("position",_.getAttribute("position")),p.setAttribute("normal",_.getAttribute("normal"));let g=new Float32Array(m*4),E=new Float32Array(m*3),b=new Float32Array(m*3);for(let S=0;S<m;S++){let C=S<420?ko:Math.floor(n()*Qu),U=this.panes[C],x=Nl-C*Di,M=n()-.5,L=n()-.5,F=.4+n()*1.6;g.set([-Cn+.01,(Wt.y0+Wt.y1)/2+L*(Wt.y1-Wt.y0),x+M*Di*.8,U.at+n()*.03],S*4),E.set([(1.2+n()*3.2)*(C===ko?1.3:1),L*1.6+(n()-.3)*1.2,M*2.2+(n()-.5)*1.2+(C===ko?1.2:0)],S*3),b.set([(n()-.5)*6*F,(n()-.5)*6,(n()-.5)*6],S*3)}p.setAttribute("aS",new gt(g,4)),p.setAttribute("aV",new gt(E,3)),p.setAttribute("aR",new gt(b,3)),p.instanceCount=m,this.SHU={...this.SU,uT:{value:0}};let T=new V(p,new oe({uniforms:this.SHU,vertexShader:L_,fragmentShader:D_,transparent:!0,depthWrite:!1,blending:Fe,side:it}));T.frustumCulled=!1,T.renderOrder=30,t.add(T),this.ppl=[],[["cut_shinji_seat",.98,-4.3,-1,[1.05,.88,.8]],["cut_gendo_seat",-1,-6.9,1,[.42,.3,.3]]].forEach(([S,C,U,x,M],L)=>{let F=s[S];if(!F)return;let k=ss(F,{wind:0,rim:L?1.1:.5,seed:L*5});k.uniforms.uTint.value.set(...M),k.uniforms.uRim.value.set(1,.62,.3,L?1.1:.5);let K=new V(rs(F,1.42),k);K.position.set(C,-.02,U),K.renderOrder=10,t.add(K),this.ppl.push({me:K,fx:x,tint:M,gendo:L===1})}),this.m4=new je,this.q=new Dt,this.e=new Qt,this.v=new A,this.one=new A(1,1,1)}update(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,5),s=Math.sin(e*1.7)*.6+Math.sin(e*4.3)*.2,r=sn(this.camera,N_,e,.004*t+.006*n);this.camera.position.y+=Math.sin(e*23)*.002+t*.004,this.SU.uS.value=e*n0,this.SU.uBreak.value=B(as,e0+.3,e),this.RU.uT.value=e,this.SHU.uT.value=e;for(let l of this.panes)l.u.uT.value=e,l.u.uCrack.value=l.at===as?B(96.35,as,e)*(.4+.6*B(96.9,as,e))+.15*t*(e>96.3?1:0):B(e0-.25,l.at,e),l.m.visible=e<l.at;for(let l=0;l<this.sp.length;l++){let[c,h,u]=this.sp[l];this.e.set(.12*s+.05*Math.sin(e*3+u),0,.08*Math.sin(e*2.1+u)),this.q.setFromEuler(this.e),this.m4.compose(this.v.set(c,2.12,h),this.q,this.one),this.straps.setMatrixAt(l,this.m4),this.v.set(c,2.12,h).add(new A(0,-.32,0).applyQuaternion(this.q)),this.m4.compose(this.v,this.q,this.one),this.rings.setMatrixAt(l,this.m4)}this.straps.instanceMatrix.needsUpdate=this.rings.instanceMatrix.needsUpdate=!0;let a=-4.3+e*n0,o=Math.abs((a/ju%1+1)%1-.5)*ju*.5<.12?.55:1;for(let l of this.ppl){let c=this.camera.position,h=Math.atan2(c.x-l.me.position.x,c.z-l.me.position.z);l.me.rotation.y=fe(h,l.fx>0?.25:-1.9,l.fx>0?1.9:-.25),l.me.visible=!(l.gendo&&e>94.5);let u=l.gendo?1:o,f=l.me.material.uniforms;f.uT.value=e,f.uTint.value.set(l.tint[0]*u,l.tint[1]*u,l.tint[2]*u),f.uRim.value.w=(l.gendo?1.1:.5)*(.7+.3*o+t*.4)}}post(e){let t=ae.hitPulse("kick",e,10),n=ae.hitPulse("hit",e,6),s=B(as-.02,as+.05,e)*Math.exp(-Math.max(0,e-as)*5);return{bloom:.8,bloomThr:.8,contrast:1.1,grain:.08,vig:.62,ca:.7+1.8*n,tint:[1.06,.95,.86],letter:.12,punch:.25*t,shake:.003*n,dust:.3,dustCol:[1,.7,.45],fadeW:s*.6+B(97.95,98.2,e)*.35,exposure:1+.15*n}}};var dp=115.19,F_=123.76,pp=2*Xn,mp=-40,H_=15,Oo=.17,vp=[["cut_e00",-26],["cut_e02",-13],["cut_e01",0],["cut_e08",13],["cut_e13",26]],k_=[0,4,1,3,2],O_=[4,3,1,0,2],z_="varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",B_=`uniform float uT, uK, uFlare; varying vec3 vD; ${Pe}
void main(){ vec3 d = normalize(vD); float y = d.y;
  vec3 c = mix(vec3(0.78, 0.2, 0.1), vec3(0.3, 0.02, 0.05), smoothstep(0.0, 0.2, y)); c = mix(c, vec3(0.06, 0.0, 0.03), smoothstep(0.2, 0.7, y));
  c = mix(c, vec3(0.25, 0.02, 0.03), smoothstep(0.0, -0.1, y));
  float cl = fbm(vec2(atan(d.x, -d.z) * 4.0 + uT * 0.01, y * 14.0)); c *= 0.75 + 0.5 * cl * smoothstep(0.35, 0.05, y);
  vec3 M = normalize(vec3(0.0, 0.16, -1.0)); float r = acos(clamp(dot(d, M), -1.0, 1.0));                     // black moon
  c += vec3(1.3, 0.35, 0.2) * exp(-max(r - 0.13, 0.0) * 12.0) * (0.7 + 0.3 * uK + uFlare);
  c = mix(c, vec3(0.01, 0.0, 0.0), smoothstep(0.132, 0.126, r));
  c += vec3(1.4, 0.6, 0.4) * smoothstep(0.004, 0.0, abs(r - 0.2 - 0.004 * sin(uT))) * 0.6;                    // thin halo ring
  gl_FragColor = vec4(c, 1.0); }`,V_=`uniform float uT, uK, uFlare; varying vec3 vW; ${Pe}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 5.0);
  float n = fbm(vW.xz * vec2(0.12, 0.3) + vec2(uT * 0.05, uT * 0.12)) + 0.35 * vnoise(vW.xz * vec2(1.0, 3.0) - uT * 0.6);
  vec3 c = mix(vec3(0.12, 0.0, 0.01), vec3(0.8, 0.2, 0.1), fr * 0.7) * (0.75 + 0.45 * n);
  float mx = exp(-abs(vW.x) * 0.01) * smoothstep(-300.0, -60.0, vW.z) * pow(n * 0.85, 6.0);                        // moon path glitter
  c += vec3(1.4, 0.5, 0.3) * mx * (0.5 + uK + 2.0 * uFlare);
  gl_FragColor = vec4(c, 0.7 + 0.25 * (1.0 - fr)); }`,G_=`attribute vec4 aB; uniform float uT, uPx; varying float vA; varying vec3 vC;
void main(){ float u = uT - aB.x; vec3 p = position;
  float r = u * (1.6 + aB.y * 2.5) + u * u * 0.35; p.y += r; p.x += sin(u * 1.1 + aB.y * 40.0) * u * 0.7; p.z += cos(u * 0.9 + aB.y * 17.0) * u * 0.5 - u * u * 0.3;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = step(0.0, u) * smoothstep(0.0, 0.15, u) * exp(-u * 0.22) * smoothstep(0.4, 1.5, -mv.z);
  vC = mix(vec3(1.0, 0.45, 0.25), vec3(1.0, 0.9, 0.8), aB.z);
  gl_PointSize = min((0.5 + aB.y * 1.2) * (1.0 + aB.z) * uPx / -mv.z, 9.0); }`,W_="varying float vA; varying vec3 vC; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; if (vA * a < 0.003) discard; gl_FragColor = vec4(vC * vA * a * 0.4, 1.0); }",Ot=(i,e,t,n,s=0)=>[i,...e,...t,n,s],X_=[Ot(115.1,[0,2.4,18],[0,7.5,-40],50),Ot(116.23,[1,2.2,12],[0,7.5,-40],48),Ot(116.26,[21,.6,-18],[27,5.5,-40],40,.03),Ot(117.3,[18,.7,-19],[26,6,-40],40,.02),Ot(117.33,[-9,1,-25],[-13,11,-40],44,-.04),Ot(118.37,[-9.6,1.4,-27],[-13,12,-40],42,-.03),Ot(118.4,[8,3.2,-18],[13,9,-40],42,.02),Ot(119.45,[7,3.8,-20],[13,9.5,-40],40,0),Ot(119.48,[0,2.5,-14],[0,11,-40],44),Ot(121.1,[0,12,26],[0,6,-70],46),Ot(123.7,[-3,1.5,12],[0,8,-40],46,.02),Ot(124.8,[-2,1.8,5],[2,8,-40],44,.01),Ot(124.83,[9,5,-24],[13,10.5,-40],40,.03),Ot(125.87,[9.5,5.5,-25.5],[13,11,-40],38,.03),Ot(125.9,[-8,2,-26],[-13,9.5,-40],42,-.03),Ot(126.94,[-8.8,2.4,-27.5],[-13,10,-40],40,-.03),Ot(126.97,[-18,3,-25],[-26,9,-40],42,.02),Ot(128.02,[-18.5,3.5,-26.5],[-26,9.5,-40],40,.02),Ot(128.05,[0,3,-22],[0,10,-40],40),Ot(128.3,[0,3.2,-21],[0,10.5,-40],40),Ot(129.7,[0,7,12],[0,12,-70],48)];function q_(){let i=Ut(256,512),e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,512),e.shadowColor="#fff",e.fillStyle="#fff";for(let[t,n]of[[40,.35],[18,.8],[5,1]])e.shadowBlur=t,e.globalAlpha=n,e.fillRect(118,20,20,492),e.fillRect(40,120,176,18);return tn(i)}var Hl=class extends at{constructor(e){super(e,{fov:48,near:.2,far:700});let t=this.scene,n=ut(115),s=e.img;this.U={uT:{value:0},uK:{value:0},uFlare:{value:0}},t.add(new V(new bn(500,48,24),new oe({uniforms:this.U,vertexShader:z_,fragmentShader:B_,side:_t,depthWrite:!1}))),this.cr=[],k_.forEach((f,d)=>this.cr.push({x:vp[f][1]*1.05,z:mp-9,h:58,at:dp+d*pp}));for(let f=0;f<30;f++){let d=-110-n()*240;this.cr.push({x:(n()-.5)*(120+-d*1.4),z:d,h:30+n()*60,at:dp+.3+n()*4.6})}let r=new _e(.5,1).translate(0,.5,0),a=new Tt({map:q_(),blending:Fe,transparent:!0,depthWrite:!1,side:it,fog:!1});this.crM=new en(r,a,this.cr.length),this.crR=new en(r,a,this.cr.length);for(let f of[this.crM,this.crR])f.instanceColor=new gt(new Float32Array(this.cr.length*3),3),f.frustumCulled=!1;this.crR.renderOrder=1,this.crM.renderOrder=4,t.add(this.crM,this.crR);let o=new V(new _e(1400,1400),new oe({uniforms:this.U,transparent:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:V_}));o.rotation.x=-Math.PI/2,o.renderOrder=2,t.add(o),this.evas=[];let l=[],c=[];vp.forEach(([f,d],v)=>{let y=s[f];if(!y)return;let m=rs(y,1),p=()=>{let x=ss(y,{wind:0,rim:1,seed:v*1.7});return x.uniforms.uTint.value.set(.62,.46,.46),x.uniforms.uRim.value.set(1,.42,.25,1),x},_=new V(m,p()),g=new V(m,p()),E=H_*(v===2?1.08:1);_.position.set(d,-Oo*E,mp+Math.abs(d)*.12),_.scale.set(E,E,1),g.position.set(d,Oo*E,_.position.z),g.scale.set(E,-E,1),_.material.uniforms.uClip.value.set(Oo,.004,1,0),g.material.uniforms.uClip.value.set(Oo,.004,.3,1),g.material.uniforms.uTint.value.multiplyScalar(.55),_.rotation.y=g.rotation.y=-d*.012,_.renderOrder=3,g.renderOrder=1,t.add(_,g);let b=F_+O_.indexOf(v)*pp;this.evas.push({m:_,r:g,td:b});let T=40,S=Math.round(T*y.h/y.w),C=Ad(y,T,S),U=E*y.w/y.h;for(let x=0;x<1500;x++){let M=n(),L=n();L<Oo||C[(Math.floor((1-L)*S)*T+Math.floor(M*T))*4+3]<128||(l.push(d+(M-.5)*U*Math.cos(_.rotation.y),_.position.y+L*E,_.position.z+(M-.5)*U*Math.sin(_.rotation.y)+(n()-.5)*.6),c.push(b+(1-L)*.75+n()*.12,n(),.7+n()*.3,0))}});for(let f=0;f<1500;f++)l.push((n()-.5)*160,0,-8-n()*140),c.push(108+n()*22,n(),n()*.3,0);let h=new Ge;h.setAttribute("position",new Ve(l,3)),h.setAttribute("aB",new Ve(c,4)),this.PU={uT:this.U.uT,uPx:{value:e.h*.9}};let u=new bt(h,new oe({uniforms:this.PU,vertexShader:G_,fragmentShader:W_,transparent:!0,depthWrite:!1,blending:Fe}));u.frustumCulled=!1,u.renderOrder=6,t.add(u),this.m4=new je,this.q=new Dt,this.v=new A,this.s=new A,this.Y=new A(0,1,0)}update(e){let t=ae.hitPulse("kick",e,7),n=ae.hitPulse("hit",e,3);sn(this.camera,X_,e,.03*n);let s=Math.exp(-Math.max(0,e-120.11)*1.4)*(e>120.11?1:0)+.6*(e>128.28?Math.exp(-(e-128.28)*1.2):0);this.U.uT.value=e,this.U.uK.value=t,this.U.uFlare.value=s;let r=this.camera.position;this.cr.forEach((a,o)=>{let l=e-a.at,c=l<0?0:1-Math.pow(1-fe(l/.45),3),h=o<5,u=l<0?0:(h?.42:.16)*(1+2.5*Math.exp(-l*4))*(.85+.15*Math.sin(e*9+o)+.25*t)*(1+s*.8)*(1-.35*B(122,130,e));this.q.setFromAxisAngle(this.Y,Math.atan2(r.x-a.x,r.z-a.z)),this.m4.compose(this.v.set(a.x,0,a.z),this.q,this.s.set(a.h*.36,a.h*Math.max(c,.001),1)),this.crM.setMatrixAt(o,this.m4),this.m4.compose(this.v,this.q,this.s.set(a.h*.36,-a.h*Math.max(c,.001)*.8,1)),this.crR.setMatrixAt(o,this.m4),this.crM.instanceColor.setXYZ(o,u,u*.93,u*.88),this.crR.instanceColor.setXYZ(o,u*.3,u*.2,u*.18)});for(let a of[this.crM,this.crR])a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0;for(let a of this.evas)for(let o of[a.m,a.r]){let l=o.material.uniforms;l.uT.value=e,l.uDis.value=fe((e-a.td)/.9),l.uRim.value.w=.45+.4*t+.8*s}}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,5);return{bloom:.7,bloomThr:.82,contrast:1.1,grain:.07,vig:.62,ca:.8+1.2*n,punch:.3*t,shake:.004*n,tint:[1.05,.93,.9],dust:.2,dustCol:[1,.5,.35],fadeW:.35*Math.exp(-Math.abs(e-120.11)*6)+B(120.6,121,e)*.35*(e<122?1:0)}}};var Us=142.31,Ft=143.36,Ps=144.44,Ni=145.51,gp=146.44,Ls=147.5,Pn=148.33,kr=149.52,ai=72,Gl=1.9,yi=1.3,l0=1.6,c0=.9,Wl=-.07,Y_=["eva01_eye","shinji_cam","rei_white","kaworu","asuka_beach","misato_last","gendo_train","lilith","fire_fight","set_fight","wunder","ube_pilots","rei_paddy","village","gendo_yui","shinji_red"],$_=15,Vl=2048,h0=1152,kl=Vl/4,Ol=h0/4,Bo=9;var zo=4*Bo+4,K_=2,Z_=1.4;function s0(i,e,t,n){let s=new Float32Array(e*t),r=new Float32Array(e*t),a=2*n+1;for(let o=0;o<t;o++){let l=0,c=o*e;for(let h=-n;h<=n;h++)l+=i[c+fe(h,0,e-1)];for(let h=0;h<e;h++)s[c+h]=l/a,l+=i[c+Math.min(e-1,h+n+1)]-i[c+Math.max(0,h-n)]}for(let o=0;o<e;o++){let l=0;for(let c=-n;c<=n;c++)l+=s[fe(c,0,t-1)*e+o];for(let c=0;c<t;c++)r[c*e+o]=l/a,l+=s[Math.min(t-1,c+n+1)*e+o]-s[Math.max(0,c-n)*e+o]}return r}var xp=(i,e,t,n,s,r)=>{let a=s*e+n,o=i[a]>r;return o!==i[a+1]>r||o!==i[a+e]>r||o!==i[a-1]>r||o!==i[a-e]>r?1:0};function J_(i,e,t){let n=Ut(e,t),s=n.getContext("2d",{willReadFrequently:!0}),r=Math.max(e/i.w,t/i.h),a=i.w*r,o=i.h*r;s.drawImage(i.img,(e-a)/2,(t-o)/2,a,o);let l=s.getImageData(0,0,e,t).data,c=new Float32Array(e*t);for(let v=0;v<e*t;v++)c[v]=(l[v*4]*.3+l[v*4+1]*.55+l[v*4+2]*.15)/255;let h=s0(c,e,t,1),u=s0(h,e,t,2),f=s0(h,e,t,7),d=new Uint8Array(e*t*4);for(let v=1;v<t-1;v++)for(let y=1;y<e-1;y++){let m=v*e+y,p=h[m+1-e]+2*h[m+1]+h[m+1+e]-h[m-1-e]-2*h[m-1]-h[m-1+e],_=h[m+e-1]+2*h[m+e]+h[m+e+1]-h[m-e-1]-2*h[m-e]-h[m-e+1],g=fe((u[m]-h[m]-.012)*14),E=fe((Math.hypot(p,_)-.22)*1.6),b=fe(Math.max(g,E*.7));d[m*4]=b*255,d[m*4+1]=xp(f,e,t,y,v,.3)*255*(1-b*.5),d[m*4+2]=xp(f,e,t,y,v,.72)*255*(1-b*.5),d[m*4+3]=fe(f[m])*255}return d}function j_(i,e){if(e&&e.flipLines)return e.flipLines;let t=new Uint8Array(Vl*h0*4);Y_.forEach((s,r)=>{let a=i[s];if(!a)return;let o=J_(a,kl,Ol),l=r%4*kl,c=Math.floor(r/4)*Ol;for(let h=0;h<Ol;h++){let u=((c+Ol-1-h)*Vl+l)*4;t.set(o.subarray(h*kl*4,(h+1)*kl*4),u)}});let n=new vo(t,Vl,h0,En);return n.colorSpace=qt,n.generateMipmaps=!0,n.minFilter=ni,n.magFilter=It,n.anisotropy=4,n.needsUpdate=!0,e&&(e.flipLines=n),n}function Q_(){let t=Ut(2048,1400),n=t.getContext("2d"),s=ut(27);n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="lighter",n.lineCap="round",n.lineJoin="round";let r=["#ff0000","#00ff00","#0000ff"],a=(l,c,h,u)=>{n.beginPath(),n.moveTo(l+(s()-.5)*2,c+(s()-.5)*2),n.quadraticCurveTo((l+h)/2+(s()-.5)*3,(c+u)/2+(s()-.5)*3,h+(s()-.5)*2,u+(s()-.5)*2),n.stroke()};for(let l=0;l<16;l++){let c=l%4*512,h=Math.floor(l/4)*350,u=c+512*(.5-l0/Gl/2),f=c+512*(.5+l0/Gl/2),d=h+350*(.5-c0/yi/2-Wl/yi),v=h+350*(.5+c0/yi/2-Wl/yi);n.strokeStyle=r[0],n.globalAlpha=.55,n.lineWidth=1.6,a(u,d,f,d),a(f,d,f,v),a(f,v,u,v),a(u,v,u,d),n.globalAlpha=.35,n.lineWidth=1;for(let S=0;S<4;S++){let C=We(u,f,(S+.5)/4);a(C,d-5,C,d+5),a(C,v-5,C,v+5)}n.globalAlpha=.75,n.lineWidth=1.4;let y=c+290,m=h+8;n.strokeRect(y,m,106,38),a(y+38,m,y+38,m+38),n.font=`22px ${xt.serif}`,n.fillStyle=r[0],n.fillText("C",y+10,m+28),n.font=`26px ${xt.script}`,n.fillText(String(101+l*7),y+46,m+29),n.font=`13px ${xt.serif}`,n.globalAlpha=.6,n.fillText("SCENE",c+112,h+18),n.fillText("CUT",c+112,h+36),n.font=`20px ${xt.script}`,n.fillText(["A","B","C","D"][l%4]+(l+1),c+166,h+20),n.fillText(String(3+l*5%40),c+166,h+38);let p=c+512-12,_=d+6,g=v-6;n.globalAlpha=.5,n.lineWidth=1.2,a(p,_,p,g);let E=6+l%4*2;for(let S=0;S<=E;S++){let C=We(_,g,Math.pow(S/E,1+l%3*.4));a(p-6,C,p+1,C)}n.strokeStyle=r[1],n.fillStyle=r[1],n.globalAlpha=.8,n.lineWidth=1.6;for(let S=0;S<3;S++){let C=We(_,g,S/2);n.beginPath(),n.arc(p-3,C,6,0,7),n.stroke()}if(n.font=`18px ${xt.script}`,n.fillText(["\u4FEE\u6B63","\u4F5C\u76E3","take2","\u539F\u753B","BG \u6CE8\u610F","\u4E2D\u5272\u308A"][l%6],u+8+s()*60,v+20),l%2===0){let S=u+40+s()*200,C=d+30+s()*120,U=S+50+s()*80,x=C+(s()-.5)*60;a(S,C,U,x),a(U,x,U-9,x-6),a(U,x,U-9,x+6)}n.strokeStyle=r[2],n.fillStyle=r[2],n.globalAlpha=.6,n.font=`16px ${xt.script}`,n.fillText(l%3===0?"Hi":l%3===1?"BL":"\u5F71",f-40,v+20);let b=u+20+s()*300,T=d+20+s()*150;for(let S=0;S<5;S++)a(b+S*6,T,b+S*6+14,T-14)}n.globalAlpha=1,n.globalCompositeOperation="source-over";let o=new Wn(t);return o.colorSpace=qt,o.anisotropy=4,o.needsUpdate=!0,o}var eE=`
attribute vec4 aB;   // lift, curl, flutter, seed
attribute vec4 aC;   // cell, draw, erase, variant
uniform float uT;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
void main(){
  vUv = uv; vC = aC; vSeed = aB.w;
  float a = aB.x, k = aB.y, fl = aB.z;
  float s = (1.0 - uv.y) * ${yi.toFixed(2)};          // arc length from the pivot edge (uv.y = 1)
  float x = (uv.x - 0.5) * ${Gl.toFixed(2)};
  float th = a + k * s, ky, kz;
  if (abs(k) < 1e-3) { ky = -s * cos(a); kz = s * sin(a); }
  else { ky = -(sin(th) - sin(a)) / k; kz = (cos(a) - cos(th)) / k; }
  vec3 n = vec3(0.0, sin(th), cos(th));
  float w = fl * sin(x * 3.1 + uT * 7.0 + aB.w * 6.28) * (0.3 + s);
  vec3 p = vec3(x, ${(yi/2).toFixed(2)} + ky, kz) + n * w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,tE=`
uniform sampler2D uLines, uMarks, uHero;
uniform float uT, uInv, uTable, uHeroCol, uInk;
uniform vec3 uFog;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
${Pe}
float hole(vec2 q, vec2 c, float hx, float r){ vec2 d = q - c; d.x = max(abs(d.x) - hx, 0.0); return length(d) / r; }
void main(){
  vec2 q = vec2((vUv.x - 0.5) * ${Gl.toFixed(2)}, (vUv.y - 0.5) * ${yi.toFixed(2)});
  float pegY = ${(yi/2-.075).toFixed(3)};
  float hc = min(hole(q, vec2(0.0, pegY), 0.0, 0.028), min(hole(q, vec2(-0.62, pegY), 0.032, 0.018), hole(q, vec2(0.62, pegY), 0.032, 0.018)));
  if (hc < 1.0) discard;
  // paper
  float grain = vnoise(vUv * vec2(900.0, 620.0) + vSeed * 50.0);
  float fib = fbm(vUv * vec2(12.0, 8.0) + vSeed * 9.0);
  vec3 paper = mix(vec3(0.46, 0.41, 0.30), vec3(0.58, 0.53, 0.40), fib) * (0.94 + 0.08 * grain);
  paper *= 1.0 - 0.12 * smoothstep(0.42, 0.5, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));   // aged edges
  paper *= 1.0 - 0.35 * smoothstep(1.35, 1.0, hc);                                          // hole shadow
  // drawing inside the 16:9 frame
  vec2 f = vec2(q.x / ${l0.toFixed(2)} + 0.5, (q.y - ${Wl.toFixed(2)}) / ${c0.toFixed(2)} + 0.5);
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
}`,nE=`
uniform float uT, uInv; uniform vec2 uOff; varying vec2 vUv;
${Pe}
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
}`,iE=`
attribute vec4 aD; uniform float uT; uniform vec3 uC; uniform float uK;
varying vec3 vCol; varying float vA;
${Pe}
void main(){
  vec3 p = position + vec3(sin(uT * 0.7 + aD.x * 6.28), -uT * 0.25 * (0.5 + aD.y), cos(uT * 0.5 + aD.z * 6.28)) * 0.6;
  p = uC + mod(p - uC + 6.0, 12.0) - 6.0;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((1.0 + aD.w * 2.5) * (1.0 + uK) * 90.0 / -mv.z, 0.0, 7.0);
  vCol = mix(vec3(0.55, 0.5, 0.45), vec3(1.0, 0.25, 0.1), step(0.8, aD.w));
  vA = 0.35 * smoothstep(0.2, 1.0, -mv.z);
}`,sE=`
uniform float uA; varying vec2 vUv;
void main(){
  float e = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
  vec3 c = mix(vec3(1.0, 0.88, 0.66) * 0.9 * (1.0 - 0.35 * length(vUv - 0.5)), vec3(0.02, 0.02, 0.025), smoothstep(0.9, 0.93, e));
  gl_FragColor = vec4(c * uA, 1.0);
}`,yp=.004,_p=.22,zt=3,rE=2.05,$n=-30,oE=[Ft,Ni,Ls],Ep=new je,Mp=new je,bp=new Dt,aE=new A(1,1,1),r0=new A,Sp=new A,zl=new A,Is=new A,Bl=new A,lE=new A(1,0,0),cE=new A(0,0,1),wS=new A(0,1,0);function wp(i,e,t){return zl.copy(i).normalize(),r0.crossVectors(e,zl).normalize(),Sp.crossVectors(zl,r0),Ep.makeBasis(r0,Sp,zl),t.setFromRotationMatrix(Ep)}var o0=()=>({p:new A,q:new Dt,a:0,k:0,f:0});function a0(i,e,t,n){return i.p.lerpVectors(e.p,t.p,n),i.q.slerpQuaternions(e.q,t.q,n),i.a=We(e.a,t.a,n),i.k=We(e.k,t.k,n),i.f=We(e.f,t.f,n),i}var hE=new Dt().setFromAxisAngle(lE,-Math.PI/2),Tp=(i,e,t)=>{let n=0;for(let s of i){if(s>e)break;n+=re.out(fe((e-s)/t))}return n},Hr=zt+Wl,uE=[[Us,.35,1.9,2.3,0,.1,-.55,38,.04],[142.82,.15,1.7,2,0,.12,-.6,36,0],[142.84,.3,3.1,.9,0,0,-.6,40,0],[Ft-.02,.2,2.8,.7,0,0,-.6,42,-.06],[Ni,0,zt-.4,5.5,0,zt,-10,60,0],[gp-.02,0,zt-.2,-2,.3,zt+.2,-20,64,.5],[gp,1.1,zt+.9,-9.5,-.3,zt-.3,3,50,-.2],[146.97,.8,zt+.6,-6.8,-.3,zt-.2,5,52,-.3],[146.99,0,zt,-4,0,zt,-25,70,0],[Ls-.02,0,zt,-15,0,zt,-30,82,.8],[Ls,0,zt+.3,$n+12.5,0,zt,$n,55,0],[Pn-.02,0,zt,$n+10.8,0,zt,$n,52,.03],[Pn,0,Hr,$n+8,0,Hr,$n,46,0],[Pn+.5,0,Hr,$n+3.2,0,Hr,$n,42,0],[kr-.05,0,Hr,$n+1.2,0,Hr,$n,40,0]],Xl=class extends at{constructor(e){super(e,{fov:40,near:.02,far:300});let t=e.img,n=p=>({value:p});this.clear.setRGB(.01,.008,.012),this.camera.rotation.order="YXZ";let s=ae.events("kick"),r=ae.events("snare");this.kicks=s.filter(p=>p>Us-.05&&p<kr+.2),this.snares=r.filter(p=>p>Us-.05&&p<kr+.2);let a=[...s,...r].filter(p=>p>=Us+.05&&p<Ft-.12).sort((p,_)=>p-_);this.flips=[];for(let p of a)(!this.flips.length||p-this.flips[this.flips.length-1]>.06)&&this.flips.push(p);this.flipAt=new Float32Array(ai).fill(1e9),this.flips.forEach((p,_)=>{2*_<ai&&(this.flipAt[2*_]=p),2*_+1<ai&&(this.flipAt[2*_+1]=p+.055)});let o=ut(91);this.rs=Array.from({length:ai},(p,_)=>({r:1.4+o()*2.2,h:o(),ph:o()*6.28,sp:.8+o()*.9,d:o()*.25,sd:o(),tw:o()*6.28,dir:new A(o()-.5,o()-.5,-.4-o()).normalize(),ax:new A(o()-.5,o()-.5,o()-.5).normalize(),cell0:_*7%15,var:_*5%16,roll:(o()-.5)*.06}));let l=new _e(1,1,22,16);this.aB=new Float32Array(ai*4),this.aC=new Float32Array(ai*4),l.setAttribute("aB",new gt(this.aB,4)),l.setAttribute("aC",new gt(this.aC,4)),this.U={uT:n(0),uInv:n(0),uTable:n(0),uHeroCol:n(0),uInk:n(0),uFog:n(new we(.012,.01,.016)),uLines:n(j_(t,e.memo)),uMarks:n(Q_()),uHero:n(t.shinji_red?t.shinji_red.tex:null)};let c=new oe({vertexShader:eE,fragmentShader:tE,uniforms:this.U,side:it});this.sheets=new en(l,c,ai),this.sheets.frustumCulled=!1,this.sheets.instanceMatrix.setUsage(Jf),this.scene.add(this.sheets),this.P=Array.from({length:ai},o0),this.PA=o0(),this.PB=o0(),this.BU={uT:n(0),uInv:n(0),uOff:n(new se)},this.scene.add(is(nE,this.BU)),this.TU={uA:n(1)},this.table=new V(new _e(2.5,3.1),new oe({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:sE,uniforms:this.TU})),this.table.rotation.x=-Math.PI/2,this.table.position.set(0,-.012,-.72),this.scene.add(this.table),this.glow=new dn(new ln({map:e.shared.glow,color:16767136,blending:Fe,depthWrite:!1,transparent:!0,opacity:.35})),this.glow.scale.set(5,3.5,1),this.glow.position.set(0,.1,-.6),this.scene.add(this.glow),this.peg=new an;let h=new Tt({color:1381653}),u=new V(new Mt(1.7,.02,.07),h);u.position.set(0,.012,-yi+.075),this.peg.add(u),[[-.62,.032],[0,0],[.62,.032]].forEach(([p,_])=>{let g=new V(new Mt(_*2+.03,.34,.034),new Tt({color:3814962}));g.position.set(p,.17,-yi+.075),this.peg.add(g)}),this.scene.add(this.peg);let f=new gr(.975,1,8,1);f.rotateZ(Math.PI/8),this.rings=Array.from({length:6},()=>{let p=new V(f,new Tt({color:16734750,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:it}));return this.scene.add(p),p});let d=900,v=new Float32Array(d*3),y=new Float32Array(d*4);for(let p=0;p<d;p++)v.set([(o()-.5)*12,(o()-.5)*12,(o()-.5)*12],p*3),y.set([o(),o(),o(),o()],p*4);let m=new Ge;m.setAttribute("position",new qe(v,3)),m.setAttribute("aD",new qe(y,4)),this.DU={uT:n(0),uC:n(new A),uK:n(0)},this.dust=new bt(m,wd(iE,br,this.DU)),this.dust.frustumCulled=!1,this.scene.add(this.dust)}stackPose(e,t,n){let s=fe((t-this.flipAt[e])/_p),r=re.inOut(s);if(n.p.set(0,We((ai-1-e)*yp,e*yp,r),0),n.q.copy(hE),n.f=0,s<=0){let a=e-this.nf,o=ae.hitPulse("hat",t,10)+.5*ae.hitPulse("kick",t,12);n.a=0,n.k=a<3?(.06+.3*o)*(1-a/3):0}else n.a=Math.PI*r,n.k=s<1?-2.2*Math.sin(Math.PI*s):0,n.f=.04*Math.sin(Math.PI*s);return n}vortexPose(e,t,n){let s=this.rs[e],r=Math.max(0,t-Ft),a=re.out(fe(r/1.8)),o=.3+(.5+s.h*7.5)*(.35+.65*a)+r*.6,l=s.ph+r*s.sp*2.2/(.6+s.h)+this.kAcc*.35,c=s.r*(.6+.4*a)*(1+.25*s.h),h=t<Ps?-1:1;n.p.set(Math.cos(l)*c,o,Math.sin(l)*c),Is.set(h*Math.cos(l),-.35-.3*Math.sin(t*3+s.tw),h*Math.sin(l));let u=.5+.5*Math.sin(t*2.3+s.tw);return Bl.set(-Math.sin(l)*u,1-u*.6,Math.cos(l)*u),wp(Is,Bl,n.q),n.a=0,n.k=.6*Math.sin(t*5+s.tw),n.f=.06,n}tunnelPose(e,t,n){let s=Math.floor(e/8),r=e%8,a=s%2?1:-1,o=r*Math.PI/4+s*.2+a*(this.sAcc*Math.PI/8+(t-Ni)*.25),l=rE*(1+.14*this.kP*((r+this.kN)%3===0?1:.25));return n.p.set(Math.cos(o)*l,zt+Math.sin(o)*l,2-s*2.4),Is.set(-Math.cos(o),-Math.sin(o),0),Bl.set(0,0,-1),wp(Is,Bl,n.q),n.a=0,n.k=0,n.f=.02,n}wallPose(e,t,n){let s=this.rs[e],r=e%Bo,a=Math.floor(e/Bo);return n.p.set((r-4)*K_,zt+(4-a)*Z_,$n+(e===zo?.02:-.04*s.sd)+.12*this.kP*((r+a+this.kN)%2)),n.q.setFromAxisAngle(cE,e===zo?0:s.roll),n.a=0,n.k=0,n.f=e===zo?0:.01,n}scatterPose(e,t,n){this.wallPose(e,t,n);let s=this.rs[e],r=e%Bo,a=Math.floor(e/Bo),o=Math.max(0,t-Pn-Math.hypot(r-4,(a-4)*1.2)*.03),l=Math.min(1,o*3);return Is.set(r-4,4-a,0).normalize().multiplyScalar(1.2).add(s.dir),n.p.addScaledVector(Is,o*3+o*o*9),bp.setFromAxisAngle(s.ax,o*(3+s.sd*4)),n.q.premultiply(bp),n.k=.8*Math.sin(t*6+s.tw)*l,n.f=.1*l,n}sheetPose(e,t,n){let s=this.rs[e],r=this.PA,a=this.PB;if(t<Ft)return this.stackPose(e,t,n);if(t<Ni-.5){let o=re.out(fe((t-Ft-s.d*.5)/.55));return o>=1?this.vortexPose(e,t,n):(this.stackPose(e,Ft-.001,r),this.vortexPose(e,t,a),a0(n,r,a,o),n.k+=1.2*Math.sin(Math.PI*o),n)}if(t<Ls-.12){let o=re.inOut(fe((t-(Ni-.5)-s.d*.3)/.45));return o>=1?this.tunnelPose(e,t,n):(this.vortexPose(e,t,r),this.tunnelPose(e,t,a),a0(n,r,a,o),n.k+=.8*Math.sin(Math.PI*o),n.f+=.08*Math.sin(Math.PI*o),n)}if(t<Pn||e===zo){let o=re.out(fe((t-(Ls-.12)-s.d*.5)/.4));return o>=1?this.wallPose(e,t,n):(this.tunnelPose(e,Ls-.12,r),this.wallPose(e,t,a),a0(n,r,a,o),n.k+=1*Math.sin(Math.PI*o),n.f+=.1*Math.sin(Math.PI*o),n)}return this.scatterPose(e,t,n)}sheetInk(e,t){let n=this.rs[e];if(t<Ft)return[n.cell0,1,0];if(e===zo&&t>=Pn)return t<Pn+.36?[this.lastCell(e,Pn),1,fe((t-Pn)/.3)]:[$_,fe((t-Pn-.4)/.55),0];let s=this.lastCell(e,t),r=this.lastDraw;return[s,r,t>Pn?fe((t-Pn-.1-n.d*.4)/.5):0]}lastCell(e,t){let n=this.kB,s=0;for(;s<n.length&&n[s]<=t;)s++;let r=s-1;return r>=0&&(e+r)%2&&r--,this.lastDraw=r>=0?fe((t-n[r])/.22):1,(this.rs[e].cell0+7*(r+1))%15}invAt(e){for(let t of oE)if(e>=t&&e<t+.09)return 1;return 0}camAt(e){let t=this.camera;if(e>=Ft&&e<Ps){let n=(e-Ft)/(Ps-Ft),s=re.inOut(n);t.position.set(.15*Math.sin(e*2),We(-1.6,2.6,s),.15*Math.cos(e*2)),t.up.set(0,1,0),t.rotation.set(We(1.15,1.3,s),.3+n*2.2,0),t.fov!==72&&(t.fov=72,t.updateProjectionMatrix());return}if(e>=Ps&&e<Ni){let n=(e-Ps)/(Ni-Ps),s=re.inOut(n),r=.6+n*1.4,a=We(11,8,s);t.position.set(Math.sin(r)*a,We(2.5,5.5,s),Math.cos(r)*a),t.up.set(0,1,0),t.lookAt(0,We(3.2,4.2,s),0);let o=We(52,46,s);t.fov!==o&&(t.fov=o,t.updateProjectionMatrix());return}sn(t,uE,e,.004*ae.hitPulse("kick",e,12))}update(e,t){for(this.kB||(this.kB=this.kicks.filter(c=>c>=Ft-.01)),this.nf=0;this.nf<ai&&this.flipAt[this.nf]+_p<=e;)this.nf++;this.kAcc=Tp(this.kicks.filter(c=>c>=Ft),e,.25),this.sAcc=Tp(this.snares.filter(c=>c>=Ni-.05),e,.18),this.kP=ae.hitPulse("kick",e,9),this.kN=ae.count("kick",Us,e);for(let c=0;c<ai;c++){let h=this.sheetPose(c,e,this.P[c]);Mp.compose(h.p,h.q,aE),this.sheets.setMatrixAt(c,Mp);let[u,f,d]=this.sheetInk(c,e);this.aB.set([h.a,h.k,h.f,this.rs[c].sd],c*4),this.aC.set([u,f,d,this.rs[c].var],c*4)}this.sheets.instanceMatrix.needsUpdate=!0,this.sheets.geometry.attributes.aB.needsUpdate=this.sheets.geometry.attributes.aC.needsUpdate=!0,this.camAt(e);let n=this.invAt(e),s=ae.hitPulse("snare",e,10),r=1-B(Ft-.05,Ft+.3,e);this.U.uT.value=e,this.U.uInv.value=n,this.U.uTable.value=r,this.U.uInk.value=s*(e>Ft?1:.4),this.U.uHeroCol.value=B(Pn+.8,kr,e)*.5,this.TU.uA.value=r,this.table.visible=e<Ft,this.glow.material.opacity=.12*r*(.85+.3*ae.hitPulse("kick",e,8)),this.glow.visible=e<Ft,this.peg.visible=e<Ft;let a=this.snares,o=a.length-1;for(;o>=0&&a[o]>e;)o--;this.rings.forEach((c,h)=>{let u=a[o-h],f=u===void 0?9:e-u;if(f>.8||u>=Pn){c.visible=!1;return}c.visible=!0;let[d,v]=u<Ft?[[0,.05,-.6],1.2]:u<Ps?[[0,9,0],5]:u<Ni?[[0,4,0],6]:u<Ls?[[0,zt,this.camera.position.z-7],2.6]:[[0,zt,$n+.3],5];c.position.set(...d),c.lookAt(this.camera.position),c.scale.setScalar(v*(.5+f*2.2)),c.material.opacity=.4*Math.exp(-f*5)*(u<Ft?.5:1)}),this.BU.uT.value=e,this.BU.uInv.value=n;let l=this.camera.getWorldDirection(Is);this.BU.uOff.value.set(Math.atan2(l.x,-l.z)*.3,l.y*.3),this.DU.uT.value=e,this.DU.uC.value.copy(this.camera.position),this.DU.uK.value=this.kP}post(e){let t=ae.hitPulse("kick",e,11),n=ae.hitPulse("snare",e,12),s=1-B(kr-.6,kr,e);return{bloom:.55+.25*n,bloomThr:.78,contrast:1.12,grain:.14,vig:.7,ca:.6+1.2*n,flicker:.08*s,scratch:.18*s,weave:.15*s,punch:.22*t,shake:.002*t*s,tint:[1.04,.98,.9],dust:.25,dustCol:[.9,.8,.7],exposure:1+.12*t+.25*(e<Ft)*(1-B(Us,Us+.15,e))}}};var u0=`
uniform float uT, uSpin, uGrow, uOpen, uCrown, uRad, uGone;
vec3 helixP(float y, float s){
  float o = uOpen * smoothstep(uCrown - 16.0, uCrown, y);
  float R = uRad * (1.0 + 0.06 * sin(y * 0.7 - uT * 1.3)) * (1.0 + o * o * 5.0);
  float a = y * 0.785 + uSpin + s * 3.14159 + o * 2.0;
  return vec3(cos(a) * R, y + o * o * 5.0, sin(a) * R);
}`,Ap="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Rp=`
uniform float uT, uAlt, uRain, uGlow, uBright; varying vec3 vW;
${Pe}
${Mr}
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
}`,f0=`
${u0}
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
}`,d0=`
uniform float uT, uGrow, uRain, uBeat; uniform float uPulse[8], uPulseY[8];
varying float vY, vS, vF; varying vec3 vN, vV;
${Mr}
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
}`,Cp=`
${u0}
attribute vec2 aR; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float y = aR.x; vec3 a = helixP(y, 0.0), b = helixP(y, 1.0);
  vec3 p = mix(a, b, uv.x), side = normalize(cross(b - a, cameraPosition - p)) * 0.035;
  vUv = uv; vSeed = aR.y;
  vA = smoothstep(uGrow - 0.5, uGrow - 2.5, y) * smoothstep(uGone - 2.0, uGone + 2.0, y) * (1.0 - smoothstep(0.0, 0.6, uOpen * smoothstep(uCrown - 16.0, uCrown, y)));
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * (uv.y * 2.0 - 1.0), 1.0);
}`,Pp=`
uniform float uT, uBeat; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float g = exp(-pow(vUv.y * 2.0 - 1.0, 2.0) * 4.0);
  vec3 c = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vUv.x) * (0.25 + 0.3 * uBeat);
  float sp = fract(uT * 0.6 + vSeed); c += vec3(1.0, 0.9, 0.8) * exp(-abs(vUv.x - sp) * 30.0) * 1.2;
  gl_FragColor = vec4(c * g * vA, 1.0);
}`,Ip=`
${u0}
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
}`,Up=`
uniform sampler2D uAtlas; uniform float uT, uBeat, uRain; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
${Pe}
${Mr}
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
}`,Lp=`
uniform sampler2D uTex; uniform float uA, uT, uDis; varying vec2 vUv;
${Pe}
void main(){
  vec2 pu = (vUv - vec2(0.05, 0.12)) / vec2(0.9, 0.83);
  vec3 col = vec3(0.9, 0.86, 0.8);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col = texture2D(uTex, pu).rgb * 1.05;
  float n = fbm(vUv * 5.0 + 3.0), th = 1.2 - uDis * 1.4;
  if (n < th - 0.0 && uDis < 1.0) discard;
  col += vec3(3.0, 1.6, 0.5) * smoothstep(th + 0.06, th, n) * step(uDis, 0.999);
  col += vec3(1.0, 0.7, 0.4) * 0.15 * (1.0 - smoothstep(0.0, 0.04, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y))));
  gl_FragColor = vec4(col * uA, uA);
}`,ql="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Dp=`
uniform float uAge, uR; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float r = length(vUv - 0.5) * 2.0, R = uR;
  float g = exp(-pow((r - R) * 40.0, 2.0)) + 0.35 * exp(-abs(r - R) * 12.0) * step(r, R);
  gl_FragColor = vec4(uCol * g * (1.0 - uAge) * (1.0 - uAge), 1.0);
}`,Np=`
uniform float uT, uA; varying vec2 vUv;
${Mr}
void main(){
  vec2 q = vUv - 0.5; float r = length(q) * 2.0, a = atan(q.y, q.x) / 6.2832 + 0.5;
  float seg = step(0.12, fract(a * 24.0 + uT * 0.3));
  float band = exp(-pow((r - 0.86) * 30.0, 2.0)) * seg + exp(-pow((r - 0.72) * 90.0, 2.0)) * 0.6 + exp(-pow((r - 0.95) * 120.0, 2.0)) * 0.5;
  band += exp(-abs(r - 0.86) * 8.0) * 0.12;
  gl_FragColor = vec4(pencil(fract(a + uT * 0.05)) * 1.6 * band * uA, 1.0);
}`,Fp=`
uniform float uT, uCamY, uPx, uA, uRain, uRise; attribute vec4 aM; varying vec3 vCol; varying float vA;
${Mr}
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
}`;var zr=181.25,Fi=207.5,li=72,Hp=17,p0=1.6,fE=8,Ds=182.9,Br=184.75,Zt=198.3,Or=204.6,dE=["m_misato","m_asuka","m_mari","rei_white","kaworu","m_toji","m_kensuke","m_sakura","m_ritsuko","gendo_yui","snap1","rei_paddy"],pE=[["vec3 zen = mix(vec3(0.05, 0.012, 0.03), vec3(0.006, 0.008, 0.028), uAlt);","vec3 zen = mix(vec3(0.02, 0.035, 0.09), vec3(0.004, 0.006, 0.03), uAlt);"],["vec3 hor = mix(vec3(0.26, 0.018, 0.022), vec3(0.1, 0.012, 0.035), uAlt);","vec3 hor = mix(vec3(0.32, 0.15, 0.1), vec3(0.06, 0.05, 0.11), uAlt);"],["col += vec3(0.3, 0.02, 0.02) * fbm3","col += vec3(0.25, 0.12, 0.07) * fbm3"],["col = vec3(0.07, 0.004, 0.006) + sky(rd) * vec3(1.0, 0.4, 0.35) * fr;","col = vec3(0.004, 0.022, 0.045) + sky(rd) * vec3(0.65, 0.85, 1.0) * fr;"]].reduce((i,[e,t])=>(i.includes(e)||console.warn("helix2 sky patch miss",e),i.replace(e,t)),Rp),m0=[[zr-.2,1.4,13,-.3,7],[182.3,7,10.5,.4,6],[Ds,16.5,7.6,1.3,2.8],[Br,18.5,6.8,2.1,2.4],[186.2,26,6.6,3,2.5],[188,33,6,3.9,2.5],[189.7,39,5.4,4.6,3],[191.4,44,.4,5.3,14],[192.56,46,.3,5.6,14],[197.6,58,.25,7.6,14],[200.6,70,3.5,8.4,11],[203.4,82,9,9.1,-14],[Fi,90,19,9.8,-24]];function v0(i,e){let t=0;for(;t<e.length-2&&i>e[t+1][0];)t++;let n=e[Math.max(0,t-1)],s=e[t],r=e[t+1],a=e[Math.min(e.length-1,t+2)],o=fe((i-s[0])/(r[0]-s[0])),l=o*o,c=l*o;return s.slice(1).map((h,u)=>{let f=n[u+1],d=s[u+1],v=r[u+1],y=a[u+1];return .5*(2*d+(-f+v)*o+(2*f-5*d+4*v-y)*l+(-f+3*d-3*v+y)*c)})}var Yl=class extends at{constructor(e){super(e,{fov:55,near:.05,far:1500});let t=b=>({value:b});this.faces=new Wn(e.shared.atlas(e.img,dE,256,256)),this.faces.colorSpace=un,this.faces.anisotropy=4,this.H={uT:t(0),uSpin:t(0),uGrow:t(0),uOpen:t(0),uCrown:t(li),uRad:t(p0),uGone:t(-20),uBeat:t(0),uRain:t(0)};let n={transparent:!0,depthWrite:!1,blending:Fe};this.SK={uT:this.H.uT,uAlt:t(0),uRain:this.H.uRain,uGlow:t(1),uBright:t(1)},this.sky=new V(new bn(600,48,24),new oe({vertexShader:Ap,fragmentShader:pE,uniforms:this.SK,side:_t,depthWrite:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1;let s=1100,r=10,a=li+4,o=[],l=[],c=[];for(let b=0;b<2;b++)for(let T=0;T<=s;T++)for(let S=0;S<r;S++)l.push(T/s*a,S/r*6.2832,b),o.push(0,0,0);for(let b=0;b<2;b++)for(let T=0;T<s;T++)for(let S=0;S<r;S++){let C=b*(s+1)*r,U=C+T*r+S,x=C+T*r+(S+1)%r,M=U+r,L=x+r;c.push(U,M,x,x,M,L)}let h=new Ge;h.setAttribute("position",new Ve(o,3)),h.setAttribute("aP",new Ve(l,3)),h.setIndex(c),this.pulses=new Array(8).fill(-99),this.pulseY=new Array(8).fill(0),this.SU={...this.H,uPulse:t(this.pulses),uPulseY:t(this.pulseY)},this.strands=new V(h,new oe({vertexShader:f0,fragmentShader:d0,uniforms:this.SU,...n,side:it})),this.strands.frustumCulled=!1,this.strands.renderOrder=2,this.SU2={...this.SU,uRad:t(p0*2.7),uSpin:t(0),uGrow:t(0),uRain:t(1)},this.strands2=new V(h,new oe({vertexShader:f0,fragmentShader:d0,uniforms:this.SU2,...n,side:it})),this.strands2.frustumCulled=!1,this.strands2.renderOrder=2;let u=ut(166),f=Math.floor((li-1)/.9),d=new wn().copy(new _e(1,1).translate(.5,.5,0)),v=new Float32Array(f*2);for(let b=0;b<f;b++)v[b*2]=1+b*.9,v[b*2+1]=u();d.setAttribute("aR",new gt(v,2)),d.instanceCount=f,this.rungs=new V(d,new oe({vertexShader:Cp,fragmentShader:Pp,uniforms:this.H,...n,side:it})),this.rungs.frustumCulled=!1,this.rungs.renderOrder=1;let y=[];for(let b=0;b<f;b++)(b%2===0||b*.9>li-22)&&y.push([1+b*.9,(b>>1)%2?1:-1,Math.floor(u()*12),u()]),b*.9>li-22&&b%2&&y.push([1+b*.9,(b>>1)%2?-1:1,Math.floor(u()*12),u()]);let m=new wn().copy(new _e(.9,1.06));m.setAttribute("aC",new gt(new Float32Array(y.flat()),4)),m.instanceCount=y.length,this.CU={...this.H,uAtlas:t(this.faces),uPart:t(0),uBurst:t(0),uHeroY:t(Hp),uHeroOn:t(0)},this.cards=new V(m,new oe({vertexShader:Ip,fragmentShader:Up,uniforms:this.CU,side:it})),this.cards.frustumCulled=!1,this.cards.renderOrder=0,this.HU={uTex:t(e.img.ube_pilots?e.img.ube_pilots.tex:null),uA:t(0),uT:this.H.uT,uDis:t(0)},this.hero=new V(new _e(3.8,2.4),new oe({vertexShader:ql,fragmentShader:Lp,uniforms:this.HU,transparent:!0,side:it})),this.hero.renderOrder=3;let p=b=>{let T=new dn(new ln({map:e.shared.glow,color:b,...n}));return T.renderOrder=4,T};this.tips=[p(new we(1,.7,.3)),p(new we(1,.2,.2))],this.rings=Array.from({length:fE},()=>{let b=new V(new _e(1,1),new oe({vertexShader:ql,fragmentShader:Dp,uniforms:{uAge:t(1),uR:t(0),uCol:t(new we(1,.6,.4))},...n,side:it}));return b.rotation.x=-Math.PI/2,b.renderOrder=3,b.visible=!1,b}),this.ringTimes=[...vd,...Vu].filter(b=>b>zr-.1&&b<Fi).sort((b,T)=>b-T),this.AU={uT:this.H.uT,uA:t(0)},this.halo=new V(new _e(22,22),new oe({vertexShader:ql,fragmentShader:Np,uniforms:this.AU,...n,side:it})),this.halo.rotation.x=-Math.PI/2,this.halo.position.y=li+30,this.halo.renderOrder=3;let _=3200,g=new Float32Array(_*4);for(let b=0;b<g.length;b++)g[b]=u();let E=new Ge;E.setAttribute("position",new qe(new Float32Array(_*3),3)),E.setAttribute("aM",new qe(g,4)),this.MU={uT:this.H.uT,uCamY:t(0),uPx:t(1),uA:t(1),uRain:this.H.uRain,uRise:t(0)},this.motes=new bt(E,new oe({vertexShader:Fp,fragmentShader:br,uniforms:this.MU,...n})),this.motes.frustumCulled=!1,this.motes.renderOrder=5,this.scene.add(this.sky,this.cards,this.rungs,this.strands,this.strands2,this.hero,...this.tips,...this.rings,this.halo,this.motes)}helixP(e,t){let n=this.H,s=n.uOpen.value*B(li-16,li,e),r=n.uT.value,a=p0*(1+.06*Math.sin(e*.7-r*1.3))*(1+s*s*5),o=e*.785+n.uSpin.value+t*Math.PI+s*2;return new A(Math.cos(o)*a,e+s*s*5,Math.sin(o)*a)}update(e){let t=this.H,n=ae.beatPulse(e,6),s=fe(ae.get("kick",e));t.uT.value=e,t.uBeat.value=n*.6+s*.4,t.uSpin.value=(e-zr)*.42+.35*re.inOut(rt(e,Zt-.4,Zt+2.5)),t.uGrow.value=Math.max(1,Math.min(li+4.5,v0(e+1,m0)[0]+10)*re.out(rt(e,zr-.2,zr+3.5))),t.uOpen.value=re.inOut(rt(e,Zt-1.2,Zt+3.5)),t.uGone.value=e<Or?-20:We(-8,li+20,re.in(rt(e,Or,Fi-.4))),t.uRain.value=B(Zt-.6,Zt+1.4,e)*(1-.5*B(213,Fi,e)),this.CU.uPart.value=B(189.8,192.2,e)*(1-B(196.4,198,e)),this.SU2.uSpin.value=-(e-Zt)*.9+1.2,this.SU2.uGrow.value=(li+4)*re.out(rt(e,Zt-.3,Zt+1.6)),this.strands2.visible=e>Zt-.3,this.CU.uBurst.value=re.out(rt(e,Zt,Zt+7));let r=B(Ds-.8,Ds+.2,e)*(1-B(Br-.5,Br+.6,e));this.CU.uHeroOn.value=r,this.HU.uA.value=r>.001?1:0,this.hero.visible=r>.001,this.HU.uDis.value=e<Br-.5?re.out(rt(e,Ds-.9,Ds+.5)):1-re.in(rt(e,Br-.5,Br+.5));let[a,o,l,c]=v0(e,m0),h=this.camera,u=.08*Math.sin(e*.7);h.position.set(Math.cos(l)*o,a+u,Math.sin(l)*o);let f=new A(Math.cos(l+.5)*o*.02,a+c,Math.sin(l+.5)*o*.02),d=f.clone().sub(h.position).normalize(),v=B(.8,.98,Math.abs(d.y));h.up.set(0,1,0).lerp(new A(Math.cos(l+1.2),0,Math.sin(l+1.2)),v).normalize(),h.lookAt(f);let y=B(190.5,192.3,e)*(1-B(197,199,e));h.fov=55+14*y+4*n*y,h.updateProjectionMatrix(),this.sky.position.copy(h.position),this.SK.uAlt.value=B(0,90,a),this.SK.uGlow.value=1-B(Or,Fi,e)*.6,this.hero.position.set(0,Hp+.4*Math.sin(e*.8)-.6*(1-re.out(rt(e,Ds-.9,Ds+.8))),0),this.hero.lookAt(h.position.x,this.hero.position.y,h.position.z);let m=this.ringTimes.filter(p=>p<=e).slice(-8);for(let p=0;p<8;p++)this.pulses[p]=m[p]??-99,this.pulseY[p]=m[p]?this.ringY(m[p])-12:0;this.rings.forEach((p,_)=>{let g=m.length-1-_,E=m[g];if(E===void 0||e-E>2.2){p.visible=!1;return}let b=(e-E)/2.2,T=Vu.includes(E);p.visible=!0,p.position.set(0,this.ringY(E),0),p.scale.setScalar(T?60:34);let S=p.material.uniforms;S.uAge.value=b,S.uR.value=re.out(b),S.uCol.value.setRGB(1,T?.85:.5+.2*(g%2),T?.7:.35)}),this.tips.forEach((p,_)=>{let g=this.helixP(t.uGrow.value,_);p.position.copy(g);let E=e<Zt+1?1:0;p.scale.setScalar((1.4+.8*n)*E),p.visible=E>0}),this.halo.rotation.z=e*.12,this.AU.uA.value=B(Zt,Zt+2,e)*(1-B(214,Fi,e))*(1+.4*n),this.MU.uCamY.value=a,this.MU.uPx.value=this.ctx.h/720,this.MU.uRise.value=(e-zr)*1.3+12*re.in(rt(e,Or,Fi)),this.MU.uA.value=.8+.8*B(Or,Fi,e)}ringY(e){return v0(e,m0)[0]-1.5}post(e){let t=ae.beatPulse(e,6),n=B(190.5,192.3,e)*(1-B(197,199,e)),s=e>=Zt?Math.exp(-(e-Zt)*2.5):0,r=B(Or,Fi,e);return{bloomThr:.76,sat:1.12,contrast:1.05,vig:.5,grain:.05,ca:.4+.6*s,exposure:(1+.08*t)*(1-.22*n),bloom:.7-.25*n+.2*t+.3*B(Zt-1,Zt+1,e),fadeW:.55*s+.25*r*r,dust:.1}}};var mE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",vE=`uniform sampler2D tMap; uniform float uReveal, uAlpha, uSoft, uMode, uHot; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float a = texture2D(tMap, vUv).a;
  float r = smoothstep(uReveal + 0.002, uReveal - uSoft, vUv.x);
  float hot = smoothstep(uSoft * 3.0, 0.0, uReveal - vUv.x) * step(vUv.x, uReveal) * step(uReveal, 0.999);
  if (uMode < 0.5) gl_FragColor = vec4(uCol * (1.0 + hot * uHot) * a * r * uAlpha, 1.0);
  else gl_FragColor = vec4(uCol * (1.0 - hot * 0.25), a * r * uAlpha);
}`,g0=null,Vo=class{constructor(e,t={}){let{c:n,w:s,h:r}=Rd(e,{font:t.font||xt.script,size:t.size||220,color:"#fff",pad:60});this.aspect=s/r,this.H=t.height||.6,this.W=this.H*this.aspect,this.cy=gE(n,160),this.u={tMap:{value:tn(n)},uReveal:{value:0},uAlpha:{value:1},uSoft:{value:t.soft??.025},uMode:{value:t.paper?1:0},uHot:{value:t.hot??3},uCol:{value:new A(...t.color||[1,.7,.35])}};let a=new oe({vertexShader:mE,fragmentShader:vE,uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,blending:t.paper?Vn:Fe});this.group=new an,this.mesh=new V(new _e(this.W,this.H),a),this.group.add(this.mesh),g0=g0||wl(128),this.tipMat=new Tt({map:g0,color:new we(...t.tipColor||[3,2.2,1.2]),transparent:!0,blending:Fe,depthWrite:!1,depthTest:!1}),this.tip=new V(new _e(1,1),this.tipMat),this.tip.scale.setScalar(this.H*.5),this.group.add(this.tip)}set(e,t=1,n=1){this.u.uReveal.value=e,this.u.uAlpha.value=t;let s=this.cy.length,r=Math.min(s-1,Math.max(0,e*(s-1))),a=Math.floor(r),o=r-a,l=this.cy[a]*(1-o)+this.cy[Math.min(s-1,a+1)]*o;this.tip.position.set((e-.5)*this.W,(.5-l)*this.H,.01);let c=e>.002&&e<.998?1:0;this.tipMat.opacity=c*t*n*(.75+.25*Math.sin(e*90)),this.tip.visible=this.tipMat.opacity>.01}};function gE(i,e){let t=i.getContext("2d"),{width:n,height:s}=i,r=t.getImageData(0,0,n,s).data,a=new Float32Array(e),o=.5;for(let l=0;l<e;l++){let c=Math.floor(l/e*n),h=Math.max(c+1,Math.floor((l+1)/e*n)),u=0,f=0;for(let d=c;d<h;d++)for(let v=0;v<s;v+=2){let y=r[(v*n+d)*4+3];u+=y*v,f+=y}o=f>0?u/f/s:o,a[l]=o}for(let l=1;l<e-1;l++)a[l]=(a[l-1]+a[l]*2+a[l+1])/4;return a}var zp=226.2,$l=252.03,kp=[.62,.86],Ns=237.72,Go=241.96,Vr=232.9,x0=245.2,Gr=245,xE=`uniform float uDraw, uColor, uWindA, uMarks, uBoil, uStreak; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }
float box(vec2 p, vec2 a, vec2 b, float w){ vec2 q = min(p - a, b - p); float i = min(q.x, q.y);
  return (i > -w && i < w) ? 1.0 : 0.0; }`,yE=`
  // clouds drift and breathe, grass and hedges sway in gusts, the sea breathes; streak = speed blur of the close-up
  float sky = smoothstep(0.62, 0.72, uv.y);
  uv.x -= 0.012 * sin((uT - 226.0) * 0.09) * sky + 0.003 * sin(uT * 0.3 + uv.y * 5.0) * sky;
  float g = 0.5 + 0.5 * sin(uv.x * 8.0 - uT * 2.2);
  uv.x += (sin(uv.x * 60.0 + uT * 3.3) * 0.35 + g) * 0.004 * smoothstep(0.45, 0.2, uv.y) * uWindA * (0.5 + d);
  float sea = smoothstep(0.66, 0.6, uv.y) * smoothstep(0.38, 0.45, uv.y) * smoothstep(0.1, 0.35, uv.x) * smoothstep(0.92, 0.8, uv.x);
  uv.y += 0.0015 * sin(uv.x * 90.0 + uT * 2.0) * sea;
  return uv;
`,_E=`
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
  vec2 sq = (uv - vec2(${kp[0]}, ${kp[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
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
`,EE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",ME=`
uniform sampler2D uTex; uniform float uT, uLine, uColor, uAlpha, uBoil; uniform vec2 uTexel; varying vec2 vUv;
${Pe}
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
}`,bE=`attribute vec4 aR; uniform float uT, uAsp, uPx, uA, uSp; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12 * uSp);
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.5 ? vec3(0.55, 0.72, 0.35) : k < 0.75 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (10.0 + 16.0 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,SE=`varying vec3 vCol; varying float vA, vRot;
void main(){
  vec2 d = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot); d = mat2(c, s, -s, c) * d;
  d.x *= 0.45 + 0.4 * abs(sin(vRot * 0.7));
  float e = length(d * vec2(1.0, 2.2)); float a = smoothstep(0.24, 0.2, e) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * (0.9 + 0.1 * d.y), a * 0.9);
}`,wE=[[zp,0,.165,1.55,0],[229.4,.01,.15,1.5,0],[233.2,0,.02,1.2,.02],[237.7,.02,-.06,1.22,.04],[Ns,-.12,-.13,2.1,0],[Go-.02,.1,-.12,2.1,0],[Go,0,-.05,1.22,.04],[243.8,.02,-.03,1.2,.05],[246.6,0,.135,1.4,.02],[$l,-.01,.15,1.46,0]],Op=150,Kl=class extends at{constructor(e){super(e,{ortho:!0});let t=e.img,n=u=>({value:u}),s=t.p_town;this.M=Ml(s,t.p_town_d,{head:xE,warp:yE,hook:_E,uniforms:{uDraw:n(0),uColor:n(0),uWindA:n(1),uMarks:n(1),uBoil:n(0),uStreak:n(0),uTexel:n(new se(1.1/s.w,1.1/s.h))}}),this.scene.add(bl(this.M));let r=t.p_run,a=r.w/r.h;this.RU={uTex:n(r.tex),uT:n(0),uLine:n(0),uColor:n(0),uAlpha:n(1),uBoil:n(0),uTexel:n(new se(1.2/r.w,1.2/r.h))};let o=new _e(a,1);o.translate(0,.5,0),this.run=new V(o,new oe({vertexShader:EE,fragmentShader:ME,uniforms:this.RU,transparent:!0,depthTest:!1,depthWrite:!1})),this.run.renderOrder=2,this.run.frustumCulled=!1,this.shadow=new V(new _e(1,1),new Tt({map:e.shared.glow,color:new we(.25,.22,.2),transparent:!0,depthTest:!1,depthWrite:!1})),this.shadow.renderOrder=1;let l=ut(2262),c=new Float32Array(Op*4);for(let u=0;u<c.length;u++)c[u]=l();let h=new Ge;h.setAttribute("position",new qe(new Float32Array(Op*3),3)),h.setAttribute("aR",new qe(c,4)),this.PU={uT:n(0),uA:n(0),uPx:n(1),uAsp:n(16/9),uSp:n(1)},this.petals=new bt(h,new oe({vertexShader:bE,fragmentShader:SE,uniforms:this.PU,transparent:!0,depthTest:!1,depthWrite:!1})),this.petals.renderOrder=3,this.petals.frustumCulled=!1,this.title=new Vo("One Last Kiss",{font:xt.script,size:220,height:.6,color:[.2,.008,.015],paper:!0,soft:.03}),this.credit=new Vo("\u5B87\u591A\u7530\u30D2\u30AB\u30EB  \xB7  Hikaru Utada",{font:xt.mincho,size:140,height:.12,color:[.03,.03,.035],paper:!0,soft:.05}),this.title.tip.visible=!1,this.credit.tip.visible=!1,this.title.group.renderOrder=4,this.title.mesh.renderOrder=4,this.credit.mesh.renderOrder=4,this.scene.add(this.shadow,this.run,this.petals,this.title.group,this.credit.group)}update(e){let t=this.M.uniforms,n=this.ctx.aspect;t.uT.value=e,t.uAspect.value=n,this.PU.uAsp.value=n,this.PU.uT.value=e,this.PU.uPx.value=this.ctx.h/720;let s=Math.floor(e*8);t.uBoil.value=s%97,this.RU.uBoil.value=s%89,t.uDraw.value=re.inOut(rt(e,zp+.1,230.6)),t.uColor.value=re.inOut(rt(e,229.4,236.4))*(1-.8*re.inOut(rt(e,248.2,251.6))),t.uMarks.value=1-.85*B(231.5,235.5,e)+.5*B(248.4,251,e);let r=e>=Ns&&e<Go?1:0;t.uStreak.value=r,this.PU.uSp.value=1+2.5*r,t.uWindA.value=.6+.4*Math.sin(e*.7)**2+.6*r-.3*rt(e,244,$l);let[a,o,l,c]=dl(e,wE),h=.003*Math.sin(e*.31),u=r?(e-Ns)*.055:0;t.uCam.value.set(a+u,o+h,l),t.uPar.value.set(c+r*.06*Math.sin((e-Ns)*.8),.01);let f=e/Xn*Math.PI,d=Math.abs(Math.sin(f)),v,y,m;if(r)v=We(-.16,.14,rt(e,Ns,Go))*n,y=-1.06,m=1.75;else if(e<Ns){let E=rt(e,Vr,Ns);v=We(-1.3,-.12,re.out(E))*n,y=-.9,m=.95}else{let E=rt(e,Go,x0);v=We(.05,1.35,re.in(E))*n,y=-.9-.25*re.in(rt(e,243.8,x0)),m=.95}this.run.position.set(v,y+(r?.035:.022)*d,0),this.run.scale.set(m,m,1),this.run.rotation.z=-.02+.02*Math.sin(f),this.RU.uT.value=e,this.RU.uLine.value=re.out(rt(e,Vr,Vr+1.6)),this.RU.uColor.value=re.inOut(rt(e,Vr+1.4,Vr+3.6)),this.run.visible=e>Vr&&e<x0+.1,this.shadow.position.set(v,y+.02,0),this.shadow.scale.set(m*1.6*(1-d*.15),.1*m,1),this.shadow.material.opacity=.45*this.RU.uColor.value,this.shadow.visible=this.run.visible,this.PU.uA.value=B(229,232,e)*(1-.6*B(246,250,e));let p=re.inOut(rt(e,Gr,Gr+3.2)),_=re.inOut(rt(e,Gr+2.8,Gr+4.4)),g=1-B(250.6,$l-.1,e);this.title.group.position.set(-.2*n,.4,0),this.title.group.rotation.z=.04,this.credit.group.position.set(-.2*n+.02,.14,0),this.title.set(p,g,0),this.credit.set(_,.85*g,0),this.title.group.visible=e>Gr,this.credit.group.visible=e>Gr+2.8}post(e){let t=B(249.8,$l,e);return{tone:1,bloom:.22,bloomThr:.92,sat:1.04,contrast:1,vig:.22,grain:.035,ca:0,letter:0,exposure:1+.03*(ae.hitPulse("kick",e,10)*B(233,236,e)*(1-B(244,247,e))),fadeW:.9*t,dust:0}}};var qo=i=>1.952+2.1429*i,_0=.5357,Wr=(i,e=9)=>ae.hitPulse("kick",i,e),Xr=(i,e=5)=>ae.hitPulse("hit",i,e),De=(...i)=>i,Kn=(i,e,t={})=>(n,s,r)=>Zl[i]?new Zl[i](n,s,r,t):new Ao(n,{img:e,fx:["kick"]},s,r),$r=(i,e)=>(t,n,s)=>{var r;return(r=t.memo)[i]||(r[i]=e(t,n,s))},y0=(i,e,t,n)=>s=>[i,e,re.inOut(rt(s,t,t+n))*2.2,-1],Bp=$r("sdat",Kn("SDAT","m_misato")),Wo=$r("earth",Kn("Earth","red_crosses")),Vp=$r("sky",Kn("Sky","wunder")),Gp=$r("redsea",Kn("RedSea2","red_crosses")),Wp=$r("train",Kn("Train","gendo_train")),Xp=$r("helix",Kn("Helix2","ube_air")),qp=i=>{let e=rt(i,162.8,166.1),t=We(-2,14,re.inOut(e)*.3+e*.7);return[t,t-12,0,e>0&&e<1?1:0]},qr=55.22,Yr=63.79,ls=2*_0,TE=[{t:qr,img:"m_misato",dir:[1,0],z:[1.2,1.06]},{t:qr+ls,img:"m_asuka",dir:[-1,.2],z:[1.25,1.08]},{t:qr+2*ls,img:"m_ritsuko",dir:[0,1],z:[1.18,1.05]},{t:qr+3*ls,img:"m_mari",dir:[1,-.3],z:[1.22,1.06]},{t:qr+4*ls,img:"m_guns",dir:[-1,0],z:[1.1,1.24],pan:.06}],AE=[{t:Yr,img:"m_toji",dir:[1,0],z:[1.18,1.06]},{t:Yr+ls,img:"m_kensuke",dir:[-1,0],z:[1.2,1.07]},{t:Yr+2*ls,img:"m_sakura",dir:[0,-1],z:[1.25,1.1]},{t:Yr+3*ls,img:"m_swarm",dir:[1,.3],z:[1.08,1.2],pan:.07},{t:Yr+4*ls,img:"m_u02",dir:[-1,0],z:[1.3,1.05],pan:.08}],RE=[{t:189.7,img:"snap1",dir:[1,0],z:[1.15,1.03]},{t:190.24,img:"snap3",dir:[-1,0],z:[1.15,1.03]},{t:190.77,img:"snap2",dir:[0,1],z:[1.15,1.03]},{t:191.31,img:"snap4",dir:[1,0],z:[1.15,1.03]},{t:191.85,img:"m_toji",dir:[-1,0],z:[1.12,1.04]}],Yp=["ube_air","ube_pilots","shinji_blue","shinji_red","genga","gendo_yui","kaworu","rei_white","red_crosses","lance","misato_last","fire_fight","gendo_train","asuka_beach","set_fight","shinji_cam","lilith","fleet","wunder","rei_dusk","snap3","rei_paddy","village","nti","eva01_eye","eva01_cage","yui_lisa","louvre","paris_blue","paris_red"],CE=(()=>{let i=[],e=218.38,t=Yp.length;return Yp.forEach((n,s)=>{let r=s/(t-1);i.push({t:e,img:n,dir:[-1,0],z:[1.08,1.02],whip:1.4,rev:1,pan:.02}),e+=.075+.2*Math.pow(Math.abs(r-.35)/.65,2.2)}),i})(),PE=[{t:16.95,lines:[{s:"\u6700\u7D42\u8A71",x:.5,y:.47,size:150,sx:.8,sy:1.25,align:"center",track:30},{s:"EPISODE:27",x:.5,y:.62,size:44,font:"mono",weight:500,align:"center",track:18,color:"#d9d4c8"}]},{t:17.49,inv:1,flash:.9,lines:[{s:"\u4E16\u754C\u306E",x:.08,y:.4,size:210,sx:.66,sy:1.3},{s:"\u4E2D\u5FC3\u3067",x:.08,y:.72,size:210,sx:.66,sy:1.3}]},{t:18.02,red:1,lines:[{s:"\u3055\u3088\u306A\u3089\u3001",x:.93,y:.46,size:190,sx:.7,sy:1.25,align:"right"},{s:"\u3059\u3079\u3066\u306E\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3",x:.93,y:.66,size:96,sx:.62,sy:1.25,align:"right",track:4}]},{t:18.56,lines:[{s:"One Last Kiss",x:.5,y:.55,size:150,font:"serif",weight:500,align:"center",track:6},{s:"",x:.3,y:.62,size:10,rule:[0,0,1920*.4,3]}]}],IE=`float gear(vec2 p, float r, float n, float a){ float ang = atan(p.y, p.x) + a; float rr = length(p);
  float tooth = smoothstep(0.2, 0.0, abs(fract(ang * n / 6.2832) - 0.5) - 0.18) * r * 0.12;
  float ring = abs(rr - r - tooth) ; float hub = abs(rr - r * 0.35); float sp = abs(sin(ang * 3.0)) * rr; float ann = step(rr, r * 0.95) * step(r * 0.37, rr);
  return smoothstep(0.004, 0.0, ring - 0.002) + smoothstep(0.003, 0.0, hub - 0.0015) * 0.8 + smoothstep(0.006, 0.0, sp) * 0.5 * ann; }`,UE=`if (uB.x > 0.001) { vec2 q = (suv - 0.5) * vec2(uAspect, 1.0); float s = uB.y;
  float g = gear(q - vec2(-0.55, 0.12), 0.26, 16.0, s) + gear(q - vec2(-0.14, -0.19), 0.17, 10.0, -s * 1.6 + 0.3) + gear(q - vec2(0.62, 0.24), 0.33, 20.0, -s * 0.8)
    + gear(q - vec2(0.27, -0.33), 0.12, 8.0, s * 2.1);
  col += vec3(1.3, 0.45, 0.1) * g * uB.x * (0.35 + 0.4 * uK); }`,LE=`if (uB.x > 0.001) { float n = fbm(uv * vec2(7.0, 11.0) + 2.0) + (uv.y - 0.5) * 0.5; float th = 1.15 - uB.x * 1.1;
  float e = smoothstep(th - 0.06, th, n) * (1.0 - smoothstep(th, th + 0.02, n)); float gone = smoothstep(th, th + 0.02, n) * smoothstep(0.35, 0.9, d);
  col = mix(col, vec3(1.3, 0.55, 0.2) * (0.6 + 0.4 * dot(col, vec3(0.33))), gone * 0.85); col += vec3(2.2, 0.9, 0.3) * e * smoothstep(0.35, 0.8, d); }`,DE=`if (uB.x > 0.001) { vec2 q = suv * vec2(38.0 * uAspect, 2.0); q.y += uT * 3.5 + hash12(vec2(floor(q.x), 1.0)) * 7.0;
  float h = hash12(floor(q)); float st = step(0.7, h) * smoothstep(0.4, 0.0, abs(fract(q.x) - 0.5)) * smoothstep(0.0, 1.0, fract(q.y));
  col = mix(col, col * vec3(0.72, 0.8, 0.9), uB.x * 0.55); col += vec3(0.7, 0.8, 0.9) * st * 0.25 * uB.x; }`,NE=[{t:qo(65)-.02,red:1,lines:[{s:"\u30DE\u30A4\u30CA\u30B9\u5B87\u5B99",x:.5,y:.52,size:200,sx:.62,sy:1.35,align:"center",track:12},{s:"ANTI-UNIVERSE",x:.5,y:.66,size:40,font:"mono",weight:500,align:"center",track:26,color:"#ffb3a0"}]},{t:qo(65)+_0,inv:1,lines:[{s:"\u60F3\u50CF",x:.25,y:.62,size:300,sx:.66,sy:1.3,align:"center"},{s:"\u30A4\u30DE\u30B8\u30CA\u30EA\u30FC",x:.72,y:.58,size:120,sx:.66,sy:1.3,align:"center"}]}],Oe=(i,e,t=.5,n={})=>({type:i,dur:e,align:t,...n}),FE=i=>{let e=rt(i,23.9,25.2),t=2.2;return{x:We(-t*1.1,t*1.25,re.inOut(e)),y:We(-1.3,.25,Math.sin(e*Math.PI)*.9+e*.1)-.5,s:.8+e*.45,r:We(.35,-.25,e),a:e>0&&e<1?1:0}},Xo=[["sdat",0,Bp,null],["earth",10.52,Wo,Oe("zoom",1.1,.5,{c:[.5,.5]})],["title",16.95,i=>new Ro(i,PE),Oe("flash",.3)],["pred",19.09,St({img:"paris_red",fx:["kick","drift","heat","glint","fireflies"],fxAmt:[.6,.8,0,0],punch:.2,cam:[De(0,.02,.03,1.12,0,0,0),De(1,-.02,0,1.03,-.012,0,.06)]}),Oe("dip",.5)],["louvre",20.71,St({img:"louvre",fx:["kick","rays","glint","wave"],light:[.55,.72,.9,0],fxAmt:[1,1,1,0],fxCol:[1.2,.3,.2],wave:y0(.52,.42,21.3,1.6),cam:[De(0,0,-.02,1.2,0,0,0),De(1,0,.02,1.06,.01,-.006,.08)],e:re.out}),Oe("flash",.3)],["pblue",22.61,St({img:"paris_blue",fx:["kick","drift","glint","wave","sweep"],fxAmt:[.7,0,0,0],fxCol:[.8,.9,1.1],wave:y0(.2,.55,22.61,2.2),cam:[De(0,-.04,0,1.08,0,0,0),De(1,.05,.01,1.18,.02,0,.05)],cuts:[{img:"u08_cut",h:1.1,wind:.2,rimCol:[.9,.9,1.2],fn:FE}]}),Oe("light",.5,.3)],["gallery",25.02,Kn("Gallery","yui_lisa"),Oe("fade",.5)],["cage",29.3,St({img:"eva01_cage",fx:["kick","rays","glint"],light:[.5,.95,.6,0],fxCol:[.5,1.4,.4],head:IE,hook:UE,cam:[De(0,0,-.05,1.25,0,0,0),De(.5,0,0,1.12,.01,0,.04),De(1,0,.03,1.02,.02,0,.1)],tick:(i,e,t)=>t.U.uB.value.set(B(30.9,31.3,i)*(1-B(32.7,33.05,i)),(i-31.18)*.9+.6*Wr(i,6))}),Oe("flash",.35)],["eye",33.05,St({img:"eva01_eye",fx:["kick","glint","rays"],light:[.5,.62,1.4,0],fxCol:[.6,1.6,.3],punch:1.2,cam:[De(0,0,0,1.08,0,0,0),De(1,0,.02,1.32,0,0,.12)],e:re.out,post:i=>({shake:Wr(i,10)*.6,bloom:.9})}),Oe("flash",.25)],["nti",34.17,St({img:"nti",fx:["kick","rays","hex","glint","heat"],fxCol:[1.4,.2,.15],lightFn:i=>[.5,.72,.4+Xr(i)*1,(i>36.5?rt(i,36.5,37.7):rt(i,34.17,35.4))*1.2],cam:[De(0,0,0,1.02,0,0,0),De(1,0,.04,1.2,0,-.01,.1)],post:i=>({invert:i>36.5&&i<36.58?1:0,glitch:Xr(i,9)*.5,rgb:Xr(i,7)*.5,shake:Xr(i,8)*.5})}),Oe("glitch",.3)],["village",38.38,St({img:"village",fx:["kick","fireflies","drift","sweep"],fxAmt:[.5,.9,0,0],punch:.3,cam:[De(0,-.04,-.03,1.15,0,0,0),De(1,.03,0,1.05,.015,0,.05)]}),Oe("cut",0)],["paddy",40.03,St({img:"rei_paddy",fx:["kick","water","fireflies","glint"],water:.36,fxAmt:[.5,.5,0,0],punch:.3,cam:[De(0,.03,0,1.1,0,0,0),De(1,-.02,.01,1.18,-.012,0,.06)]}),Oe("fade",.4)],["clothes",41.34,Kn("Clothes","snap3"),Oe("flash",.3)],["dusk",47.75,St({img:"rei_dusk",fx:["kick","lcl","fireflies"],fxAmt:[0,.4,1,0],punch:.2,hook:LE,cam:[De(0,0,-.02,1.08,0,0,0),De(1,0,.02,1.24,0,0,.1)],tick:(i,e,t)=>t.U.uB.value.set(re.in(rt(i,49.3,52.34)),0,0,0),post:i=>({fadeW:B(51.6,52.34,i)*.8,bloom:.8+B(50,52.3,i)})}),Oe("fade",.8,.3)],["sky",52.34,Vp,Oe("flash",.4)],["mont1",qr,i=>new As(i,TE),Oe("flash",.12)],["sky2",61.07,Vp,Oe("zoom",.35,.5,{c:[.5,.5]})],["mont2",Yr,i=>new As(i,AE),Oe("flash",.12)],["canyon",69.63,Kn("Canyon","m_swarm"),Oe("light",.7,.4)],["lilith",74.03,St({img:"lilith",fx:["kick","rays","hex","glint","heat"],fxCol:[1.4,.35,.25],lightFn:i=>[.52,.84,1+Xr(i)*2,i>78.31?rt(i,78.31,79.8)*1.4:i>76.17?rt(i,76.17,77.6):0],cam:[De(0,0,-.03,1.02,0,0,0),De(1,0,.05,1.3,0,-.01,.14)],post:i=>({fadeW:B(79.4,80.8,i),shake:Xr(i,7)*.6})}),Oe("burn",.8)],["cam1",80.84,St({img:"shinji_cam",fx:["kick"],punch:.2,cam:[De(0,0,0,1.16,0,0,0),De(.45,.04,.02,1.3,.005,0,.02),De(1,.13,.085,1.8,.01,0,.05)],post:i=>({tone:.3*(1-B(82.3,83.2,i)),scan:.25*(1-B(82.3,83.2,i))})}),Oe("glitch",.3)],["studio",84.92,Kn("Studio","set_fight"),Oe("burn",1)],["beach",89.26,St({img:"asuka_beach",fx:["kick","glint","rays","water"],light:[.72,.6,.6,0],water:.3,fxCol:[1.3,.6,.3],punch:.3,cam:[De(0,.05,0,1.12,0,0,0),De(1,-.03,0,1.2,-.015,0,.05)],post:{letter:.12}}),Oe("burn",.9)],["train",91.35,Wp,Oe("fade",.5)],["gendo",93.57,St({img:"gendo_train",fx:["kick","bands"],punch:.3,cam:[De(0,-.04,0,1.12,0,0,0),De(1,.03,0,1.2,.015,0,.06)],post:{letter:.12}}),Oe("cut",0)],["train2",95.57,Wp,Oe("cut",0)],["fire",98.19,St({img:"fire_fight",fx:["kick","embers","heat","rays"],light:[.5,.5,.8,0],fxCol:[1.4,.5,.2],punch:1.1,cam:[De(0,-.05,0,1.2,0,0,0),De(1,.05,.02,1.1,.02,0,.08)],post:i=>({shake:Wr(i,9)*.7,bloom:.95})}),Oe("shatter",1.3,.35,{c:[.52,.5]})],["fire2",100.9,St({img:"fire_fight",fx:["kick","embers","heat"],fxCol:[1.4,.5,.2],punch:1.1,cam:[De(0,.2,.05,1.8,0,0,0),De(1,.14,.03,1.55,.01,0,.06)],post:i=>({shake:Wr(i,9)*.8,rgb:Wr(i,12)*.3})}),Oe("zoom",.3,.5,{c:[.6,.5]})],["misato",103.72,St({img:"misato_last",fx:["kick","embers","heat","rays","sweep"],light:[.5,1,.7,0],fxAmt:[.8,.8,0,0],fxCol:[1.4,.6,.25],cam:[De(0,0,-.05,1.05,0,0,0),De(1,0,.04,1.3,0,0,.1)],post:i=>({fadeW:B(107.4,108.05,i)*.7})}),Oe("burn",.9)],["lance",108.05,Wo,Oe("burn",.9)],["lance2",112.44,St({img:"lance",fx:["kick","rays","glint","lightrain"],light:[.9,.9,2,0],fxAmt:[1,0,.8,0],fxCol:[1.4,1,.8],punch:.8,cam:[De(0,.28,.2,1.9,0,0,0),De(1,.33,.24,2.3,.01,0,.08)],e:re.out,post:i=>({fadeW:B(113.05,113.3,i)*.6,shake:Wr(i,9)*.5})}),Oe("zoom",.4,.5,{c:[.7,.7]})],["globe",113.3,Wo,Oe("flash",.25)],["redsea",115.19,Gp,Oe("cut",0)],["reiw",121,St({img:"rei_white",fx:["kick","rays","lightrain"],light:[.5,1,.6,0],fxAmt:[1,0,.6,0],fxCol:[1.2,1.1,1],punch:.3,cam:[De(0,0,0,1.06,0,0,0),De(1,0,.02,1.2,0,0,.1)]}),Oe("light",.6)],["redsea2",123.76,Gp,Oe("flash",.3)],["kaworu",129.61,St({img:"kaworu",fx:["kick","rays","fireflies","drift"],light:[.3,.95,.6,0],fxAmt:[1,.5,0,0],fxCol:[1.2,1.1,.8],punch:.3,cam:[De(0,-.04,0,1.12,0,0,0),De(1,.03,0,1.2,.015,0,.06)]}),Oe("light",.6)],["gyui",qo(61),St({img:"gendo_yui",fx:["kick","lightrain"],light:[.6,.9,0,0],fxAmt:[.6,0,.3,0],fxCol:[1,.95,.85],punch:.3,cam:[De(0,0,0,1.08,0,0,0),De(1,0,.02,1.2,0,0,.08)],post:i=>({bloom:.2,bloomThr:.95,exposure:.92,contrast:1.3,sat:1.1,lift:[-.06,-.06,-.05],dust:.05,fadeW:B(135.6,136.17,i)*.55})}),Oe("fade",.7)],["earth2",136.17,Wo,Oe("hex",1,.5,{c:[.5,.5]})],["inter",qo(65)-.02,i=>new Ro(i,NE),Oe("glitch",.2)],["flip",qo(65)+2*_0,Kn("Flipbook","genga"),Oe("cut",0)],["shred",149.52,St({img:"shinji_red",fx:["kick","lineart","wave","glint","water"],water:.35,punch:.2,fxFn:i=>[.6,0,0,1-re.inOut(rt(i,149.7,153.6))],wave:y0(.72,.55,152.4,2.6),cam:[De(0,-.04,0,1.1,0,0,0),De(1,.03,.01,1.2,.012,0,.06)]}),Oe("fade",.8)],["sblue",155.05,St({img:"shinji_blue",fx:["kick","rays","lightrain","glint","water"],light:[.55,.95,.8,0],water:.3,fxAmt:[.6,0,1,0],fxCol:[1,1.1,1.3],punch:.3,cam:[De(0,0,.05,1.05,0,0,0),De(1,0,-.02,1.16,0,.01,.07)],cuts:[{img:"u08_desc",h:.7,wind:.3,rim:.9,rimCol:[1,.9,1.1],fn:i=>{let e=re.out(rt(i,155.05,159.6));return{x:.2,y:We(1.5,.12,e),s:1+e*.15,a:B(155.05,155.8,i)}}}]}),Oe("light",.7)],["bench",159.63,St({img:"ube_bench",fx:["kick","rays","glint","water","train"],light:[.72,.8,0,0],water:.22,fxCol:[1.3,1.1,.9],punch:.2,head:"",hook:DE,trainFn:qp,lightFn:i=>[.72,.8,B(160.5,162.5,i)*1.2,0],tick:(i,e,t)=>t.U.uB.value.set(1-B(160.2,162.2,i),0,0,0),cam:[De(0,.03,0,1.08,0,0,0),De(1,-.02,0,1.18,-.012,0,.05)]}),Oe("dip",.8)],["pilots",164.05,St({img:"ube_pilots",fx:["kick","glint","train","sweep"],trainFn:qp,fxAmt:[.6,0,0,0],punch:.3,cam:[De(0,0,0,1.12,0,0,0),De(1,0,.01,1.06,.01,0,.04)]}),Oe("cut",0)],["plat",166.14,St({img:"ube_platform",fx:["kick","glint","sweep","rays"],light:[.6,.9,.5,0],fxAmt:[.7,0,0,0],punch:.4,cam:[De(0,0,0,1.2,0,0,0),De(1,0,.02,1.08,.015,0,.06)]}),Oe("flash",.3)],["pilots2",170.67,St({img:"ube_pilots",fx:["kick","glint","sweep"],fxAmt:[.8,0,0,0],punch:.4,cam:[De(0,-.08,-.04,1.45,0,0,0),De(1,.06,-.02,1.3,.02,0,.06)]}),Oe("zoom",.4,.5,{c:[.5,.5]})],["air",175.47,St({img:"ube_air",fx:["kick","drift","glint","sweep"],fxAmt:[.8,0,0,0],punch:.4,cam:[De(0,0,-.08,1.4,0,0,0),De(1,0,.02,1.04,0,.01,.05)],e:re.out,post:i=>({fadeW:B(180.7,181.25,i)*.7})}),Oe("fade",.8)],["helix",181.25,Xp,Oe("flash",.5)],["snaps",189.7,i=>new As(i,RE,{post:{tone:.2}}),Oe("flash",.15)],["helix2",192.56,Xp,Oe("flash",.3)],["earth3",207.5,Wo,Oe("light",1)],["rewind",218.38,i=>new As(i,CE,{post:{scan:.35,glitch:.15,tone:.2}}),Oe("glitch",.3)],["sdat2",222.6,Bp,Oe("glitch",.4)],["sketch",226.2,Kn("Sketch2","p_town"),Oe("pencil",2.2,.35)]],$p=[{t0:1.2,t1:10.2,kind:"code",text:"S-DAT",track:"26 \u25B8 27",base:1.2},{t0:11,t1:13.2,kind:"cap",text:"\u5357\u6975 \u7206\u5FC3\u5730",sub:"ANTARCTICA \xB7 GROUND ZERO"},{t0:21.4,t1:24.2,kind:"cap",text:"\u30D1\u30EA\u65E7\u5E02\u8857",sub:"PARIS \xB7 RESTORATION  PHASE-1"},{t0:29.5,t1:33,kind:"sync",label:"EVA-01  SYNCHRO RATIO",from:0,to:400,pow:2.4,max:400,warn:100},{t0:33.08,t1:34.1,kind:"alert",text:"\u8D77\u52D5",sub:"EVA-01  ACTIVATION",color:"#ff8a1e",rate:2},{t0:38.6,t1:41.2,kind:"cap",text:"\u7B2C3\u6751",sub:"VILLAGE-3"},{t0:61.2,t1:63.7,kind:"magi",result:[1,1,1],style:{top:"9%",bottom:"auto"}},{t0:80.9,t1:84.8,kind:"frame",text:"\u25CF REC",color:"#f4efe6"},{t0:108.2,t1:111.3,kind:"count",from:16},{t0:108.2,t1:111.3,kind:"alert",text:"\u30AC\u30A4\u30A6\u30B9\u306E\u69CD",sub:"LANCE OF GAIUS",color:"#ffd6a0",rate:1,style:{top:"22%"}},{t0:136.3,t1:141,kind:"cap",text:"\u88DC\u5B8C \u7D42\u4E86",sub:"INSTRUMENTALITY  REVERSED \xB7 EARTH RESTORED"},{t0:159.8,t1:162.8,kind:"cap",text:"\u5B87\u90E8\u65B0\u5DDD\u99C5",sub:"UBE-SHINKAWA STATION"},{t0:218.4,t1:222.5,kind:"code",text:"\u25C0\u25C0 REW",track:"27",base:226,rev:12},{t0:222.6,t1:226,kind:"code",text:"S-DAT",track:"27  END",base:222.6}],Kp=[{t0:15,t1:16.95,o:[.5,.5],head:"\u4EBA\u985E\u88DC\u5B8C",sub:"HUMAN INSTRUMENTALITY",band:"\u4EBA\u985E\u88DC\u5B8C\u8A08\u753B",tag:"\u8B66\u5831",level:5,ticker:"HUMAN INSTRUMENTALITY PROJECT  //  ANTI-AT FIELD EXPANDING  //  ALL LIFE-FORMS RETURNING TO LCL  //  ",code:["ANTI-AT FIELD","LCL CONV.","SEELE 01","GAUGE +","LILITH"],code2:"CODE : 000",line2:"SEELE  PROTOCOL",strobe:.8},{t0:35.3,t1:38.38,out:.9,o:[.5,.42],head:"\u899A\u9192",sub:"EVA-01  AWAKENING",band:"\u521D\u53F7\u6A5F\u899A\u9192",tag:"\u7DCA\u6025",level:4,ticker:"EVA-01 SYNCHRO RATIO 400%  //  PATTERN BLUE  //  NEAR THIRD IMPACT WARNING  //  ",code:["SYNC 400%","PLUG DEPTH","S2 ENGINE","BERSERK","PATTERN BLUE"],code2:"SYNC : 400%",line2:"EVA-01  UNCONTROLLED",strobe:.8},{t0:52.34,t1:55,out:.35,lite:1,hue:"orange",head:"\u767A\u9032",sub:"AAA WUNDER  LAUNCH",tag:"\u767A\u9032",level:1,ticker:"AAA WUNDER  //  MAIN ENGINE IGNITION  //  ALL HANDS TO BATTLE STATIONS  //  "},{t0:111.3,t1:112.95,out:.35,o:[.62,.62],head:"\u7DCA\u6025\u4E8B\u614B",sub:"THIRD IMPACT",band:"\u7B2C\u4E09\u885D\u6483",tag:"\u8B66\u5831",level:5,ticker:"ANTI-AT FIELD CRITICAL  //  LANCE OF GAIUS IN CONTACT  //  ALL LIFE RETURNING TO LCL  //  ",code:["IMPACT","ANTI-AT","LCL 99%","GAIUS","W-CROSS"],code2:"CODE : 999",line2:"AAA WUNDER  BRIDGE",strobe:.5}];function HE(i,e,t=256,n=192){let s=document.createElement("canvas");s.width=t*4,s.height=n*3;let r=s.getContext("2d");return e.forEach((a,o)=>{let l=i[a];if(!l)return;let c=o%4*t,h=Math.floor(o/4)*n,u=Math.max(t/l.w,n/l.h),f=l.w*u,d=l.h*u;r.save(),r.beginPath(),r.rect(c,h,t,n),r.clip(),r.drawImage(l.img,c+(t-f)/2,h+(n-d)/2,f,d),r.restore()}),s}async function Zp(i,e,t=null){let n=await Td();i.img=n,i.memo={},i.shared={glow:wl(128),atlas:HE};let s=[];for(let r=0;r<Xo.length;r++){let[a,o,l,c]=Xo[r],h=r+1<Xo.length?Xo[r+1][1]:252.03,f=t===null||h>t-3&&o<t+3?l(i,o,h):new at(i);s.push({id:a,start:o,scene:f,tr:c||{type:"cut"}}),e((r+1)/Xo.length),await new Promise(d=>setTimeout(d,0))}return s}var kE='"Arial Black", "Helvetica Neue", Impact, Arial, "DejaVu Sans", sans-serif',OE={red:{a:"#e8261c",b:"#ff8a1e",dk:"#140203",hi:"#fff1e6",s:"#b8140c"},orange:{a:"#ff7a12",b:"#ffc21a",dk:"#120601",hi:"#fff4e0",s:"#d05a08"}},zE=`uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`,jl=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},Jl=i=>Math.floor(jl(i,3.3)*65535).toString(16).toUpperCase().padStart(4,"0"),BE=[{y:.075,h:56,k:"ticker",dir:1,sp:240,at:.16},{y:.205,h:30,k:"hazard",dir:-1,sp:110,at:.26},{y:.655,h:82,k:"red",dir:-1,sp:-320,at:.34},{y:.75,h:28,k:"hazard",dir:1,sp:-110,at:.42}],VE=[{y:.05,h:50,k:"ticker",dir:1,sp:260,at:0},{y:.145,h:26,k:"hazard",dir:-1,sp:120,at:.08}],Ql=class{constructor(e){this.W=e.slice().sort((t,n)=>t.t0-n.t0),this.cv=document.createElement("canvas"),this.g=this.cv.getContext("2d"),this.mat=Hn(zE,{tOv:{value:null},uGain:{value:1.05}},{transparent:!0,blending:xo,blendSrc:yo,blendDst:Es}),this.on=!1,this.cover=0,this.enabled=!0,this.resize(1280,720)}resize(e,t){let n=Math.min(1600,e);this.cv.width=n,this.cv.height=Math.round(n*t/e),this.aspect=e/t,this.tex&&this.tex.dispose(),this.tex=new Wn(this.cv),Object.assign(this.tex,{colorSpace:qt,generateMipmaps:!1,minFilter:It}),this.mat.uniforms.tOv.value=this.tex}win(e){return this.W.find(t=>e>=t.t0&&e<t.t1+(t.out||0))}update(e){let t=this.enabled&&this.win(e);this.on=!!t,this.cover=0,t&&(this.draw(e,t),this.tex.needsUpdate=!0)}render(e,t){this.on&&e.run(this.mat,t,!1)}jp(e,t,n,s,r,a={}){let o=this.g;o.save(),o.translate(t,n),o.scale(a.sx||.82,a.sy||1.22),o.font=`500 ${s}px ${xt.mincho}`,o.textAlign=a.align||"center",o.textBaseline="middle",o.fillStyle=r,o.strokeStyle=r,o.lineWidth=s*.045,o.lineJoin="round",o.strokeText(e,0,0),o.fillText(e,0,0),o.restore()}en(e,t,n,s,r,a={}){let o=this.g;o.save(),o.font=`900 ${s}px ${kE}`,o.textAlign=a.align||"center",o.textBaseline="middle","letterSpacing"in o&&(o.letterSpacing=(a.ls||0)+"px"),o.fillStyle=r,o.translate(t,n),o.scale(a.sx||.9,1),o.fillText(e,0,0,a.max),o.restore()}mono(e,t,n,s,r,a="left"){let o=this.g;o.font=`500 ${s}px ${xt.mono}`,o.textAlign=a,o.textBaseline="middle",o.fillStyle=r,o.fillText(e,t,n)}hazard(e,t,n,s,r,a,o){let l=this.g;l.fillStyle=o,l.fillRect(e,t,n,s),l.save(),l.beginPath(),l.rect(e,t,n,s),l.clip(),l.fillStyle=a;let c=s*2;for(let h=-2;h<n/c+2;h++){let u=e+h*c+r%c;l.beginPath(),l.moveTo(u,t+s),l.lineTo(u+s,t),l.lineTo(u+s*2,t),l.lineTo(u+s,t+s),l.fill()}l.restore()}draw(e,t){let n=this.g,s=1080,r=this.cv.height/s,a=s*this.aspect,o=OE[t.hue||"red"],l=t.t1-t.t0,c=t.out||0,h=fe((e-t.t0)/l,0,1),u=!!t.lite,f=Math.floor(ae.beat(e)),d=(g,E,b=.18)=>{let T=fe((e-(t.t0+g*l))/b,0,1);return T<=0?0:e<t.t1?T:c<=0?0:T*(1-fe((e-(t.t1+E*c))/.12,0,1))};n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.cv.width,this.cv.height),n.setTransform(r,0,0,r,0,0);let v=u?0:.9*re.inOut(rt(h,.02,.55))*d(0,.35,.01);if(v>0&&(n.fillStyle=`rgba(0,0,0,${v})`,n.fillRect(0,0,a,s)),this.cover=v,!u){let b=60*Math.sqrt(3),T=(t.o?t.o[0]:.5)*a,S=(t.o?t.o[1]:.45)*s,C=Math.ceil(a/90)+2,U=Math.ceil(s/b)+2,x=Math.hypot(Math.max(T,a-T),Math.max(S,s-S)),M=t.fill||.6,L=t.cells||["EMERGENCY","\u7DCA\u6025"];for(let F=-1;F<C;F++)for(let k=-1;k<U;k++){let K=F*90,O=k*b+(F&1?b/2:0),ne=jl(F,k),Y=jl(k+7,F),pe=jl(F+13,k*3);if(Y<.07)continue;let he=Math.hypot(K-T,O-S)/x,ve=t.t0+l*(.04+M*(.8*he+.2*ne));if(e<ve)continue;let Ze=fe((e-ve)/.12,0,1),xe=1;if(e>=t.t1){if(c<=0)continue;let q=t.t1+c*.85*(.8*he+.2*ne);if(xe=1-fe((e-q)/.07,0,1),xe<=0)continue}let X=60*.9*(.55+.45*re.out(Ze))*(.5+.5*xe),j=O>s*.8;n.beginPath();for(let q=0;q<6;q++){let ee=q*Math.PI/3;n.lineTo(K+X*Math.cos(ee),O+X*Math.sin(ee))}if(n.closePath(),n.globalAlpha=xe*(j?.45:1),e-ve<.06){n.fillStyle=o.hi,n.fill(),n.globalAlpha=1;continue}let de=ne<.22&&f+F+k&1,Z=pe<.42?0:pe<.74?1:pe<.84?2:3;j&&(Z=3),Z===0&&!de?(n.fillStyle=o.a,n.fill(),this.en(L[0],K,O-4,19,o.dk,{max:X*1.45,sx:.86}),n.fillStyle=o.dk,n.fillRect(K-X*.55,O+12,X*1.1,2),this.mono(Jl(F*31+k),K,O+24,11,o.dk,"center")):Z<=1?(n.fillStyle=o.dk,n.fill(),n.strokeStyle=o.a,n.lineWidth=3,n.stroke(),Z===0?this.en(L[0],K,O,19,o.a,{max:X*1.45,sx:.86}):this.jp(L[1],K,O+2,40,o.a)):Z===2?(n.fillStyle=de?o.dk:o.b,n.fill(),this.jp("\u8B66\u544A",K,O+2,38,de?o.b:o.dk)):(n.fillStyle="rgba(6,0,0,0.85)",n.fill(),n.strokeStyle=o.a,n.lineWidth=2,n.stroke(),this.mono(Jl(F+k*17),K,O,12,o.a,"center")),n.globalAlpha=1}}if(!u){let g=d(.3,.2);if(g>0){let E=s*.29,b=s*.33*re.out(g),T=290,S=t.code||["PATTERN BLUE","AT FIELD","SYNC ERR","LCL","MAGI"];[[42,0],[a-42-T,1]].forEach(([C,U])=>{if(n.fillStyle="rgba(8,0,0,0.9)",n.fillRect(C,E,T,b),n.strokeStyle=o.a,n.lineWidth=3,n.strokeRect(C,E,T,b),n.fillStyle=o.a,n.fillRect(C,E,T,34),this.en(U?"TIME TO IMPACT":"MAGI SYSTEM",C+T/2,E+18,20,o.dk,{ls:4}),n.save(),n.beginPath(),n.rect(C,E+36,T,b-38),n.clip(),U){let x=Math.max(0,t.t1-e);this.mono(`${String(Math.floor(x)).padStart(2,"0")}.${String(Math.floor(x%1*100)).padStart(2,"0")}`,C+T/2,E+100,68,o.a,"center");for(let M=0;M<14;M++){let L=20+70*Math.abs(Math.sin(e*(3+M*.7)+M*1.9));n.fillStyle=M%4===0?o.b:o.a,n.fillRect(C+18+M*18.5,E+b-14-L*(b/(s*.33)),12,L*(b/(s*.33)))}}else{let x=Math.floor((e-t.t0)*16);for(let M=0;M<13;M++){let L=x+M;this.mono(`${Jl(L)} ${Jl(L+91)} ${S[L%S.length]}`,C+14,E+56+M*22,15,M===12?o.hi:o.b)}}n.restore()})}}(u?VE:BE).forEach((g,E)=>{let b=d(g.at*(u?1:.9),.1+E*.12,.28);if(b<=0)return;let T=fe((e-(t.t0+g.at*l))/.28,0,1),S=g.dir,C=(1-re.out(T))*a*S+(e>=t.t1&&c>0?-S*a*re.in(1-b):0),U=g.y*s-g.h/2,x=(e-t.t0)*g.sp;if(n.save(),n.translate(C,0),g.k==="hazard"){this.hazard(0,U,a,g.h,x,o.b,o.dk);for(let M=x*.5%640-640;M<a;M+=640)n.fillStyle=o.dk,n.fillRect(M+250,U-2,170,g.h+4),this.en("DANGER",M+335,U+g.h/2+1,g.h*.72,o.b,{ls:6})}else if(g.k==="ticker"){n.fillStyle="rgba(10,0,0,0.92)",n.fillRect(0,U,a,g.h),n.fillStyle=o.a,n.fillRect(0,U,a,4),n.fillRect(0,U+g.h-4,a,4);let M=t.ticker||"EMERGENCY  //  ALL PERSONNEL TO LEVEL-1 BATTLE STATIONS  //  PATTERN BLUE CONFIRMED  //  ",L=1500;for(let F=x%L-L;F<a;F+=L)this.en(M,F,U+g.h/2+1,g.h*.5,o.a,{align:"left",ls:5})}else{n.fillStyle=o.a,n.fillRect(0,U,a,g.h),n.fillStyle=o.dk,n.fillRect(0,U+6,a,3),n.fillRect(0,U+g.h-9,a,3);let M=820,L=t.band||"\u7DCA\u6025\u4E8B\u614B\u767A\u751F";for(let F=x%M-M;F<a;F+=M)this.jp(L,F+190,U+g.h/2+2,g.h*.66,o.dk),this.en("EMERGENCY",F+560,U+g.h/2+1,g.h*.5,o.dk,{ls:4})}n.restore()});let y=d(u?.05:.2,.05);if(y>0){let g=u?s*.2:s*.125;if(n.globalAlpha=y,n.fillStyle="rgba(10,0,0,0.9)",n.fillRect(42,g,330,64),n.strokeStyle=o.a,n.lineWidth=2,n.strokeRect(42,g,330,64),n.fillStyle=o.a,n.fillRect(42,g,16,64),this.jp(t.tag||"\u8B66\u5831",118,g+33,40,o.a),this.en(`LEVEL ${t.level||5}`,270,g+24,26,o.b,{ls:3}),this.mono(`T+${(e-t.t0).toFixed(2).padStart(6,"0")}`,205,g+49,15,o.b),!u){let E=a-372;n.fillStyle="rgba(10,0,0,0.9)",n.fillRect(E,g,330,64),n.strokeRect(E,g,330,64),this.en(t.code2||"CODE : 777",E+165,g+24,24,o.a,{ls:6}),this.mono(t.line2||"NERV HQ  CENTRAL DOGMA",E+165,g+49,14,o.b,"center")}n.globalAlpha=1}let m=u?0:t.strobe??1,p=e>=t.t1-m&&e<t.t1,_=d(t.headAt??(u?.12:.42),0,.14);if(_>0&&!p&&t.head){let g=fe((e-(t.t0+(t.headAt??(u?.12:.42))*l))/.16,0,1),E=1+.35*(1-re.out(g)),b=u?620:860,T=u?190:300,S=a/2,C=u?s*.34:s*.44,U=!u&&h>.7&&f&1;n.save(),n.globalAlpha=_,n.translate(S,C),n.scale(E,E),n.fillStyle=U?o.a:"rgba(8,0,0,0.94)",n.fillRect(-b/2,-T/2,b,T),n.strokeStyle=o.a,n.lineWidth=5,n.strokeRect(-b/2,-T/2,b,T),n.lineWidth=2,n.strokeRect(-b/2+12,-T/2+12,b-24,T-24),this.hazard(-b/2,-T/2-30,b,18,(e-t.t0)*80,o.a,o.dk),this.hazard(-b/2,T/2+12,b,18,-(e-t.t0)*80,o.a,o.dk);let x=U?o.dk:o.a;n.shadowColor=U?"transparent":o.a,n.shadowBlur=24,this.jp(t.head,0,-T*.08,u?96:146,x,{sx:.8,sy:1.22}),n.shadowBlur=0,this.en(t.sub||"EMERGENCY",0,T*.3,u?30:42,U?o.dk:o.hi,{ls:u?10:16}),n.restore(),n.globalAlpha=1}if(p){let g=Math.floor((e-(t.t1-m))/m*3),E=g!==1;n.fillStyle=E?o.s:o.dk,n.fillRect(0,0,a,s),this.jp(t.head||"\u7DCA\u6025\u4E8B\u614B",a/2,s*.44,330,E?o.dk:o.a,{sx:.72,sy:1.3}),this.en(t.sub||"EMERGENCY",a/2,s*.72,64,E?o.dk:o.a,{ls:22}),this.cover=1}!u&&e-t.t0<.14&&(n.fillStyle=`rgba(232,38,28,${.45*(1-(e-t.t0)/.14)})`,n.fillRect(0,0,a,s))}};var GE=`uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`,Zr=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},Kr=(i,e)=>{let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return We(Zr(t,e),Zr(t+1,e),s)*2-1},ec=class{constructor(e){this.I=e.slice().sort((t,n)=>t.t0-n.t0),this.cv=document.createElement("canvas"),this.g=this.cv.getContext("2d"),this.mat=Hn(GE,{tOv:{value:null},uGain:{value:.92}},{transparent:!0,blending:xo,blendSrc:yo,blendDst:Es}),this.on=!1,this.enabled=!0,this.hash=Zr,this.resize(1280,720)}resize(e,t){let n=Math.min(1280,e);this.cv.width=n,this.cv.height=Math.round(n*t/e),this.aspect=e/t,this.tex&&this.tex.dispose(),this.tex=new Wn(this.cv),Object.assign(this.tex,{colorSpace:qt,generateMipmaps:!1,minFilter:It}),this.mat.uniforms.tOv.value=this.tex}update(e){if(this.on=!1,!this.enabled)return;let t=this.I.filter(r=>e>=r.t0&&e<r.t1);if(!t.length)return;let n=this.g,s=this.cv.height/1080;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.cv.width,this.cv.height),n.setTransform(s,0,0,s,0,0),this.VW=1080*this.aspect,this.H=1080,this.t=e,this.fb=Math.floor(e*8);for(let r of t)n.save(),r.fn(this,e,(e-r.t0)/(r.t1-r.t0),r),n.restore(),n.globalAlpha=1;this.on=!0,this.tex.needsUpdate=!0}render(e,t){this.on&&e.run(this.mat,t,!1)}path(e,t=64,n=3,s=0){let r=e.map(([l,c])=>[l*this.VW,c*this.H]),a=r.length-1,o=[];for(let l=0;l<=t;l++){let c=l/t*a,h=Math.min(a-1,Math.floor(c)),u=c-h,f=r[Math.max(0,h-1)],d=r[h],v=r[h+1],y=r[Math.min(a,h+2)],m=_=>.5*(2*d[_]+(-f[_]+v[_])*u+(2*f[_]-5*d[_]+4*v[_]-y[_])*u*u+(-f[_]+3*d[_]-3*v[_]+y[_])*u*u*u),p=l/t*6+s*13;o.push([m(0)+Kr(p,this.fb*7+s)*n,m(1)+Kr(p+50,this.fb*7+s)*n])}return o}ring(e,t,n,s={}){let r=s.turns??1.1,a=Math.ceil((s.n??90)*r),o=[],l=s.rot??-1.9,c=s.seed??0,h=s.boil??3;for(let u=0;u<=a;u++){let f=u/a,d=l+f*r*6.2832,v=n*this.H*(1+(s.grow??.07)*(f-.5)+.02*Math.sin(d*2+c))*(s.rf?s.rf(d):1)+Kr(f*8+c*5,this.fb*3+c)*h;o.push([e*this.VW+Math.cos(d)*v*(s.sx??1),t*this.H+Math.sin(d)*v])}return o}stroke(e,t=1,n={}){let s=this.g,r=[0],a=0;for(let d=1;d<e.length;d++)a+=Math.hypot(e[d][0]-e[d-1][0],e[d][1]-e[d-1][1]),r.push(a);let o=fe(n.from??0)*a,l=fe(t)*a;if(l<=o+.5)return;let c=n.w??4,h=n.taper??.8,u=n.a??1,f=(d,v,y,m)=>{s.strokeStyle=d,s.lineCap="round",s.lineJoin="round",s.globalAlpha=y;for(let p=1;p<e.length;p++){if(r[p]<o)continue;if(r[p-1]>l)break;if(n.dash&&Math.floor(r[p]/n.dash)%2)continue;let _=r[p]/a,g=c*v*(1-h+h*Math.pow(Math.sin(Math.PI*fe(_*.98+.01)),.5)),E=e[p-1],b=e[p];if(r[p]>l){let T=(l-r[p-1])/(r[p]-r[p-1]);b=[We(E[0],b[0],T),We(E[1],b[1],T)]}if(r[p-1]<o){let T=(o-r[p-1])/(r[p]-r[p-1]);E=[We(E[0],e[p][0],T),We(E[1],e[p][1],T)]}s.lineWidth=Math.max(.7,g),s.beginPath(),s.moveTo(E[0]+m,E[1]-m),s.lineTo(b[0]+m,b[1]-m),s.stroke()}};if(n.glow&&f(n.glow,3.2,.16*u,0),f(n.col??"#fff",1,u,0),n.dbl&&f(n.col??"#fff",.35,.5*u,2.2+Kr(this.fb,9)*1.2),n.tip&&t<1){let d=r.findIndex(v=>v>=l);d<0&&(d=e.length-1),this.dot(e[d][0]/this.VW,e[d][1]/this.H,c*1.6,n.col??"#fff",u,n.glow)}s.globalAlpha=1}dot(e,t,n,s,r=1,a){let o=this.g,l=e*this.VW,c=t*this.H;a&&(o.globalAlpha=r*.25,o.fillStyle=a,o.beginPath(),o.arc(l,c,n*3,0,7),o.fill()),o.globalAlpha=r,o.fillStyle=s,o.beginPath(),o.arc(l,c,n,0,7),o.fill(),o.globalAlpha=1}spark(e,t,n,s,r=1,a=0){let o=this.g;if(n<=.2)return;o.save(),o.translate(e*this.VW,t*this.H),o.rotate(a);let l=c=>{o.beginPath();for(let h=0;h<8;h++){let u=(h&1?.16:1)*n*c,f=h/8*6.2832;o[h?"lineTo":"moveTo"](Math.cos(f)*u,Math.sin(f)*u)}o.closePath(),o.fill()};o.fillStyle=s,o.globalAlpha=r*.25,l(1.8),o.globalAlpha=r,l(1),o.restore(),o.globalAlpha=1}cross(e,t,n,s,r={}){let a=n/1080,o=a/this.aspect,l=[[e-o,t-a],[e+o*1.1,t+a*.9]],c=[[e+o,t-a*1.05],[e-o*.9,t+a]],h=r.seed??0;this.stroke(this.path(l,12,2,h),fe(s*2),r),this.stroke(this.path(c,12,2,h+1),fe(s*2-1),r)}speed(e,t,n,s,r,a){if(r<=.01)return;let o=this.g,l=e*this.VW,c=t*this.H,h=Math.hypot(this.VW,this.H);o.fillStyle=a,o.globalAlpha=r;for(let u=0;u<s;u++){let f=Zr(u,this.fb)*6.2832,d=(n+Zr(u+7,this.fb)*.25)*this.H,v=.004+Zr(u+3,this.fb)*.012;o.beginPath(),o.moveTo(l+Math.cos(f)*d,c+Math.sin(f)*d),o.lineTo(l+Math.cos(f-v)*h,c+Math.sin(f-v)*h),o.lineTo(l+Math.cos(f+v)*h,c+Math.sin(f+v)*h),o.fill()}o.globalAlpha=1}wipe(e,t={}){let n=this.g,s=this.VW,r=this.H,a=Math.hypot(s,r),o=(t.bw??.36)*r,l=We(-a*.5-o-60,a*.5+o+60,e),c=22;n.save(),n.translate(s/2,r/2),n.rotate(t.ang??-.38);let h=(d,v)=>{let y=[];for(let m=0;m<=c;m++)y.push([d+Kr(m*.9+v,this.fb)*16,-a/2+m/c*a]);return y},u=h(l-o,1),f=h(l+o,5).reverse();if(n.fillStyle=t.col??"#fff1e2",n.beginPath(),[...u,...f].forEach(([d,v],y)=>n[y?"lineTo":"moveTo"](d,v)),n.closePath(),n.fill(),t.line){n.strokeStyle=t.line,n.lineWidth=5;for(let d of[1,2.2]){let v=l+o+26*d;n.beginPath(),h(v,9+d).forEach(([y,m],p)=>n[p?"lineTo":"moveTo"](y,m)),n.stroke(),n.lineWidth=2.5}}n.restore()}note(e,t,n,s,r,a=1,o=-.08){let l=this.g;l.save(),l.globalAlpha=a,l.translate(t*this.VW,n*this.H),l.rotate(o+Kr(this.fb,4)*.015),l.font=`400 ${s}px ${xt.script}`,l.fillStyle=r,l.textBaseline="middle",l.fillText(e,0,0),l.restore(),l.globalAlpha=1}};var cs="#fff4e6",tc="#ff4a2a",Jp="#ffb46a",jp="#a8ccff",Qp="#07030a",nc="#ffe0a0",vn=(i,e,t)=>fe((i-e)/(t-e)),Jr=(i,e=8)=>ae.hitPulse("kick",i,e),ic=(i,e,t=.25)=>i<e?0:re.out(fe((i-e)/t)),em=[{t0:19.3,t1:23.4,fn:(i,e)=>{let t=B(22.9,23.4,e),n=B(22.4,22.75,e),s=n>.5?jp:tc,r=n>.5?"#4a8cff":"#ff2a10";if(e<20.71){let a=i.path([[-.05,.38],[.18,.3],[.36,.42],[.52,.34],[.6,.47]],90,3,1);i.stroke(a,re.inOut(vn(e,19.3,20.6)),{w:4,col:s,glow:r,tip:1,from:B(20.2,20.7,e)*.8,dbl:1})}else{let a=re.out(vn(e,20.71,21.5)),o=.16+.02*Jr(e)+B(22.61,23.3,e)*.5;if(i.stroke(i.ring(.5,.47,o,{turns:1.15,seed:2,sx:1.25}),a,{w:4.5*(1-t),col:s,glow:r,tip:1,dbl:1,a:1-t}),e>21.3)for(let l=0;l<5;l++){let c=-2.2+l*1.25,h=16*ic(e,21.3+l*.27)*(1-t)*(.7+.5*Jr(e+l));i.spark(.5+Math.cos(c)*o*1.25/i.aspect,.47+Math.sin(c)*o,h,n>.5?"#eaf3ff":cs,.9,e*.5)}}}},{t0:29.6,t1:34.3,fn:(i,e)=>{let t=re.inOut(vn(e,32.6,33.15)),n=B(33.9,34.3,e),s=We(.8,.5,t),r=We(.3,.5,t),a=We(.12,.36,t)*(1-n*.6),o=ae.count?ae.count("kick",29.3,e)*.26:e*.9,l=u=>1+.09*fe(Math.sin((u-o)*12)*3,-1,1)*(1-t),c=e<33.05?nc:"#b8ff9a",h=e<33.05?"#ff9a30":"#40ff60";i.stroke(i.ring(s,r,a,{turns:1.03,n:240,rf:l,seed:5,grow:.02,rot:o}),re.out(vn(e,29.6,30.8)),{w:3.5,col:c,glow:h,taper:.3,a:1-n,dbl:1}),i.stroke(i.ring(s,r,a*.42,{turns:1.1,seed:6,rot:-o}),re.out(vn(e,30.2,31.2)),{w:2.5,col:c,glow:h,a:1-n}),e>33.05&&i.speed(.5,.5,.33,70,.55*(1-B(33.7,34.15,e))+.3*Jr(e,10),Qp)}},{t0:34.25,t1:35.35,fn:(i,e)=>{[[34.3,.18,.3,95],[34.62,.83,.24,70],[34.95,.74,.6,80]].forEach(([t,n,s,r],a)=>{if(e<t)return;let o=re.out(vn(e,t,t+.12)),l=1+.5*(1-o);i.cross(n,s,r*l,o,{w:14,col:"#ff6a4a",glow:"#ff1a00",seed:a*3,a:1-B(35.1,35.35,e)})})}},{t0:38.6,t1:41.3,fn:(i,e)=>{let t=1-B(41,41.3,e),n=i.path([[.04,.2],[.2,.12],[.34,.24],[.5,.15],[.63,.22]],110,1.5,3);i.stroke(n,re.inOut(vn(e,38.6,40.4)),{w:3,col:cs,dash:14,a:.85*t,taper:0,tip:1}),e>40.3&&(i.stroke(i.ring(.63,.22,.035,{turns:1.25,seed:8}),re.out(vn(e,40.3,40.65)),{w:3,col:Jp,a:t}),i.note("home",.655,.155,44,cs,ic(e,40.55,.3)*t))}},{t0:89.5,t1:98.05,fn:(i,e)=>{let t=.85*B(89.5,90,e)*(1-B(97.6,98.05,e)),n=.085,s=[.18,.38,.6,.82],r=[89.26,91.35,93.57,95.57];i.stroke(i.path([[.12,n],[.88,n]],60,1.2,11),re.inOut(vn(e,89.5,90.6)),{w:2.5,col:cs,a:t,taper:.2}),s.forEach((l,c)=>{let h=e>=r[c]+.1,u=ic(e,r[c]+.1,.3);i.stroke(i.ring(l,n,.012,{turns:1.1,seed:20+c,boil:1}),1,{w:2.2,col:cs,a:t,taper:0}),h&&i.dot(l,n,7*u,c===2?tc:Jp,t)});let a=0;for(;a<3&&e>r[a+1];)a++;let o=We(s[a],s[Math.min(3,a+1)],re.inOut(vn(e,r[a]+.3,(r[a+1]??98.19)-.1)));i.spark(o,n,14+6*Jr(e),"#fff",t,e)}},{t0:98.35,t1:101.9,fn:(i,e)=>{let t=re.out(vn(e,98.35,99.6)),n=re.in(vn(e,100.6,101.1)),s=1-B(100.95,101.2,e),r=.7,a=.34,o=We(.22,.09,t)*(1+n*5)*(1+.08*Jr(e));if(s>0){i.stroke(i.ring(r,a,o,{turns:1.08,seed:30}),re.out(vn(e,98.35,98.9)),{w:4,col:cs,glow:"#ff6a20",a:s,dbl:1});let l=o*1.5,c=l/i.aspect;[[[r-c*1.3,a],[r-c*.55,a]],[[r+c*.55,a],[r+c*1.3,a]],[[r,a-l*1.3],[r,a-l*.55]],[[r,a+l*.55],[r,a+l*1.3]]].forEach((h,u)=>i.stroke(i.path(h,8,1.5,31+u),re.out(vn(e,98.6+u*.08,98.9+u*.08)),{w:3,col:cs,a:s,taper:.3}))}i.speed(.5,.5,.28,90,B(100.8,100.95,e)*(1-B(101.3,101.9,e))*.7,Qp)}},{t0:130.2,t1:135.4,fn:(i,e,t)=>{for(let n=0;n<7;n++){let s=i.hash(n,1),r=fe((e-130.2-n*.6)/3.2);r<=0||r>=1||i.spark(.1+s*.8,.62-r*.4-i.hash(n,2)*.1,12*Math.sin(r*3.1416),nc,.8,e*.4+n)}}},{t0:151.6,t1:157.2,fn:(i,e)=>{let t=re.inOut(vn(e,154.4,155.4)),n=B(153,154.6,e),s=1-B(156.6,157.2,e),r=[];for(let a=0;a<=12;a++){let o=a/12;r.push([o*1.06-.03,We(.5,.44,t)+Math.sin(o*14-e*3.5)*.03*(1-t)])}if(i.stroke(i.path(r,140,2,50),re.inOut(vn(e,151.6,153)),{w:3.5,col:n>.5?jp:tc,glow:n>.5?"#4a8cff":"#ff2a10",a:s,tip:1,dbl:1}),e>155.1)for(let a=0;a<6;a++)i.spark(.12+a*.15+i.hash(a,5)*.05,.44-i.hash(a,6)*.02,11*ic(e,155.1+a*.15)*s,"#eaf3ff",.9,e)}},{t0:163.87,t1:164.23,fn:(i,e,t)=>i.wipe(t,{col:"#fff1e2",line:tc,ang:-.38})},{t0:165.96,t1:166.32,fn:(i,e,t)=>i.wipe(t,{col:"#e8261c",line:"#fff1e2",ang:.3,bw:.3})},{t0:170.49,t1:170.85,fn:(i,e,t)=>i.wipe(t,{col:"#bcd6ff",line:"#fff1e2",ang:-.5})},{t0:175.7,t1:181.1,fn:(i,e)=>{let t=1-B(180.6,181.1,e);for(let n=0;n<12;n++){let s=((e-175.7)*(.25+i.hash(n,3)*.2)+i.hash(n,4))%1;i.spark(.05+i.hash(n,7)*.9,.95-s*.7,24*Math.sin(s*3.1416)*(1+.4*Jr(e)),n%3?cs:nc,.85*t,e*.3+n),i.dot(.05+i.hash(n,7)*.9,.95-s*.7,4*Math.sin(s*3.1416),"#fff",t,nc)}}}];var Hi=new URLSearchParams(location.search),Os=Hi.has("freeze"),Hs=parseFloat(Hi.get("t")||"0")||0,WE=Hi.has("clean"),$o=document.getElementById("app"),gn=document.getElementById("song"),Jt=new ll(gn),ci=parseFloat(Hi.get("q")||"0")||(Os?.6:1),tm=1920*1080,xn=new $a({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:Os});xn.autoClear=!1;xn.outputColorSpace=vi;xn.toneMapping=di;xn.domElement.id="gl";$o.appendChild(xn.domElement);var _i={renderer:xn,w:1280,h:720,aspect:16/9,res:new se(1280,720),quality:ci},Fs=new ul(xn),XE=new fl,qE=new ml,hs=new Ql(Kp);Hi.has("noem")&&(hs.enabled=!1);var lc=new ec(em);Hi.has("noteg")&&(lc.enabled=!1);var ks=null,cc=null,M0=null,rc=[],zs=null,hc=null,uc=null,oc=!1,nm=0;function b0(){let i=Math.min(devicePixelRatio||1,2),e=innerWidth,t=innerHeight,n=i*ci;e*t*n*n>tm*ci&&(n=Math.sqrt(tm*ci/(e*t)));let s=Math.max(320,Math.round(e*n)),r=Math.max(180,Math.round(t*n));xn.setPixelRatio(1),xn.setSize(s,r,!1),xn.domElement.style.width=e+"px",xn.domElement.style.height=t+"px",Object.assign(_i,{w:s,h:r,aspect:s/r}),_i.res.set(s,r),Fs.resize(s,r),hs.resize(s,r),lc.resize(s,r),[ks,cc].forEach(a=>a&&a.dispose()),ks=es(s,r),cc=es(s,r),rc.forEach(a=>a.resize(s,r)),zs&&zs.resize()}function sm(i,e){let t=M0.at(i),n=t.a.scene;n.update(i,e);let s,r=zu(n.post(i));if(t.b){let o=t.b.scene;o.update(i,e),n.render(xn,ks),o.render(xn,cc);let l=t.tr;Fs.fs.run(XE.set(ks,cc,t.p,l.type,_i.aspect,i,l.c,l.amt??1),Fs.M),s=Fs.M,r=pd(r,zu(o.post(i)),t.p,l.type)}else n.render(xn,ks),s=ks;lc.update(i),lc.render(Fs.fs,s),hs.update(i),hs.render(Fs.fs,s),hs.cover&&(r.bloom*=1-.65*hs.cover,r.leak*=1-hs.cover,r.dust*=1-hs.cover),qE.render(xn,s,i,r.dust,_i.w,_i.h,r.dustCol),Fs.composite(s,r,i,_i.w,_i.h);let a=(1-r.fadeB)*(1-r.fadeW*.85);zs&&zs.update(i,a),uc&&uc.update(i,a*(1-r.invert*.5)),hc&&hc.update(i,!Zn.bar.classList.contains("idle"))}var E0=0,sc=0,im=0;function YE(i,e){if(Os||Hi.has("q")||(E0+=i,sc++,e-im<2500||sc<45))return;let t=E0/sc;E0=0,sc=0,im=e;let n=ci;t>1/45?ci=Math.max(.5,ci*.85):t<1/58&&ci<1&&(ci=Math.min(1,ci*1.08)),Math.abs(n-ci)>.01&&b0()}function ac(){let i=Jt.tick(),e=Math.min(Jt.t,Eo);if(sm(e,i),nm++,!oc&&(gn.ended||e>=Eo-.05)&&(oc=!0),Zn.update(e,Jt.playing,oc),YE(i,performance.now()),Os&&nm>3){window.__olk.ready=!0;return}requestAnimationFrame(ac)}var Yo=i=>{i=Math.max(0,Math.min(Eo-.1,i)),oc=!1,Jt.fallback||(gn.currentTime=i),Jt.t=i},Zn=new xl($o,{toggle:()=>{if(Jt.fallback){Jt.running=!Jt.running;return}gn.paused||gn.ended?(gn.ended&&Yo(0),gn.play().catch(()=>{})):gn.pause()},seek:Yo,seekBy:i=>Yo(Jt.t+i),lyrics:()=>zs&&zs.toggle(),restart:()=>{Yo(0),Jt.fallback?Jt.running=!0:gn.play().catch(()=>{})}},Eo);Zn.clean=WE;window.__olk={ready:!1,seek:Yo,clock:Jt};async function $E(){let i=['500 40px "OLK Mincho"','400 40px "OLK Mincho"','italic 300 40px "OLK Serif"','italic 500 40px "OLK Serif"','400 40px "OLK Serif"','40px "OLK Script"','40px "OLK SC"','40px "OLK Mono"'];try{await Promise.race([Promise.all(i.map(e=>document.fonts.load(e,"A\u3042\u611B"))),new Promise(e=>setTimeout(e,4e3))])}catch{}}async function KE(){if(Os){Jt.freeze(Hs),Zn.ready(!0),ac();return}if(!await new Promise(e=>{if(gn.readyState>=3)return e(!0);gn.addEventListener("canplay",()=>e(!0),{once:!0}),gn.addEventListener("error",()=>e(!1),{once:!0}),setTimeout(()=>e(gn.readyState>=2),8e3)})){Jt.fallback=!0,Jt.t=Hs,Jt.running=!0,Zn.ready(),ac();return}Hs&&(gn.currentTime=Hs),Zn.ready(),ac();try{await gn.play()}catch{Zn.showGate(()=>gn.play().catch(()=>{Jt.fallback=!0,Jt.running=!0}))}}(async function(){try{Zn.loading(.02),await $E(),b0();let t=await Zp(_i,s=>Zn.loading(.05+s*.85),Os?Hs:null);M0=new vl(t),rc=[...new Set(t.map(s=>s.scene))],rc.forEach(s=>s.resize(_i.w,_i.h)),zs=new gl($o),uc=new El($o,$p),hc=new yl($o,Zn.bar),Hi.has("cc")&&hc.set(!0),Hi.has("nohud")&&uc.toggle(!1);let n=Os?M0.around(Hs,2).map(s=>s.scene):rc;for(let s=0;s<n.length;s++){let r=n[s],a=t.find(o=>o.scene===r);r.update(Math.max(0,a.start+.05),1/60),r.render(xn,ks),Zn.loading(.9+.1*(s+1)/n.length),await new Promise(o=>setTimeout(o,0))}sm(Math.max(0,Hs),1/60),addEventListener("resize",b0),KE()}catch(e){console.error(e),Zn.loading(1,"ERROR: "+(e&&e.message))}})();})();
