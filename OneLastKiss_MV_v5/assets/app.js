(()=>{var Fm=Object.defineProperty;var Hm=(s,e)=>{for(var t in e)Fm(s,t,{get:e[t],enumerable:!0})};var Hu="169";var Om=0,nf=1,km=2;var ad=1,zm=2,Hi=3,Ei=0,mt=1,je=2,es=0,Kn=1,Pe=2,sf=3,rf=4,To=5,As=100,Bm=101,Vm=102,Gm=103,Wm=104,qm=200,Ao=201,Xm=202,Ym=203,ph=204,Cs=205,$m=206,Km=207,Zm=208,Jm=209,jm=210,Qm=211,ev=212,tv=213,nv=214,mh=0,vh=1,gh=2,_r=3,xh=4,yh=5,_h=6,Eh=7,ld=0,iv=1,sv=2,_i=0,rv=1,ov=2,av=3,lv=4,cv=5,hv=6,uv=7;var cd=300,Er=301,Mr=302,Mh=303,bh=304,yl=306,zi=1e3,ai=1001,wh=1002,Ln=1003,fv=1004;var ca=1005;var Dt=1006,Ic=1007;var li=1008;var ci=1009,hd=1010,ud=1011,Mo=1012,Ou=1013,Ps=1014,yi=1015,Ds=1016,ku=1017,zu=1018,br=1020,fd=35902,dd=1021,pd=1022,Rn=1023,md=1024,vd=1025,gr=1026,wr=1027,Bu=1028,Vu=1029,gd=1030,Gu=1031;var Wu=1033,Oa=33776,ka=33777,za=33778,Ba=33779,Sh=35840,Th=35841,Ah=35842,Rh=35843,Ch=36196,Ph=37492,Ih=37496,Uh=37808,Lh=37809,Dh=37810,Nh=37811,Fh=37812,Hh=37813,Oh=37814,kh=37815,zh=37816,Bh=37817,Vh=37818,Gh=37819,Wh=37820,qh=37821,Va=36492,Xh=36494,Yh=36495,xd=36283,$h=36284,Kh=36285,Zh=36286;var Wa=2300,Jh=2301,Uc=2302,of=2400,af=2401,lf=2402;var dv=3200,pv=3201;var yd=0,mv=1,jt="",yn="srgb",bi="srgb-linear",qu="display-p3",_l="display-p3-linear",qa="linear",Ut="srgb",Xa="rec709",Ya="p3";var Js=7680;var cf=519,vv=512,gv=513,xv=514,_d=515,yv=516,_v=517,Ev=518,Mv=519,jh=35044,Ed=35048;var hf="300 es",ki=2e3,$a=2001,ns=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lc=Math.PI/180,Ka=180/Math.PI;function ts(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function bv(s,e){return(s%e+e)%e}function Dc(s,e,t){return(1-t)*s+t*e}function xi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var se=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],x=i[0],p=i[3],m=i[6],_=i[1],g=i[4],E=i[7],b=i[2],T=i[5],R=i[8];return r[0]=a*x+o*_+l*b,r[3]=a*p+o*g+l*T,r[6]=a*m+o*E+l*R,r[1]=c*x+h*_+u*b,r[4]=c*p+h*g+u*T,r[7]=c*m+h*E+u*R,r[2]=f*x+d*_+v*b,r[5]=f*p+d*g+v*T,r[8]=f*m+d*E+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,v=t*u+n*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new st;function Md(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Za(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wv(){let s=Za("canvas");return s.style.display="block",s}var uf={};function Ga(s){s in uf||(uf[s]=!0,console.warn(s))}function Sv(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Tv(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Av(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ff=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),df=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[bi]:{transfer:qa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[yn]:{transfer:Ut,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_l]:{transfer:qa,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(df),fromReference:s=>s.applyMatrix3(ff)},[qu]:{transfer:Ut,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(df),fromReference:s=>s.applyMatrix3(ff).convertLinearToSRGB()}},Rv=new Set([bi,_l]),Mt={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=oo[e].toReference,i=oo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return oo[s].primaries},getTransfer:function(s){return s===jt?qa:oo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(oo[e].luminanceCoefficients)}};function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var js,Qh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=Za("canvas")),js.width=e.width,js.height=e.height;let n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cv=0,Ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Hc(i[a].image)):r.push(Hc(i[a]))}else r=Hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pv=0,_n=class s extends ns{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ai,i=ai,r=Dt,a=li,o=Rn,l=ci,c=s.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ts(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=cd;_n.DEFAULT_ANISOTROPY=1;var rt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,E=(d+1)/2,b=(m+1)/2,T=(h+f)/4,R=(u+x)/4,I=(v+p)/4;return g>E&&g>b?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=T/n,r=R/n):E>b?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=T/i,r=I/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=I/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-v)*(p-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eu=class extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ja=class extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ot=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],v=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==v){let p=1-o,m=l*f+c*d+h*v+u*x,_=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){let b=Math.sqrt(g),T=Math.atan2(b,m*_);p=Math.sin(p*T)/b,o=Math.sin(o*T)/b}let E=o*_;if(l=l*p+f*E,c=c*p+d*E,h=h*p+v*E,u=u*p+x*E,p===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*d-c*f,e[t+1]=l*v+h*f+c*u-o*d,e[t+2]=c*v+h*d+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new S,pf=new Ot,Bi=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),ua.subVectors(this.max,ao),Qs.subVectors(e.a,ao),er.subVectors(e.b,ao),tr.subVectors(e.c,ao),Yi.subVectors(er,Qs),$i.subVectors(tr,er),_s.subVectors(Qs,tr);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-_s.z,_s.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,_s.z,0,-_s.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-_s.y,_s.x,0];return!kc(t,Qs,er,tr,ua)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,Qs,er,tr,ua))?!1:(fa.crossVectors(Yi,$i),t=[fa.x,fa.y,fa.z],kc(t,Qs,er,tr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ui=[new S,new S,new S,new S,new S,new S,new S,new S],si=new S,ha=new Bi,Qs=new S,er=new S,tr=new S,Yi=new S,$i=new S,_s=new S,ao=new S,ua=new S,fa=new S,Es=new S;function kc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Es.fromArray(s,r);let o=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Iv=new Bi,lo=new S,zc=new S,is=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Iv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(zc)),this.expandByPoint(lo.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new S,Bc=new S,da=new S,Ki=new S,Vc=new S,pa=new S,Gc=new S,Qa=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=Ki.dot(this.direction),l=-Ki.dot(da),c=Ki.lengthSq(),h=Math.abs(1-a*a),u,f,d,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bc).addScaledVector(da,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){Vc.subVectors(t,e),pa.subVectors(n,e),Gc.crossVectors(Vc,pa);let a=this.direction.dot(Gc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);let l=o*this.direction.dot(pa.crossVectors(Ki,pa));if(l<0)return null;let c=o*this.direction.dot(Vc.cross(Ki));if(c<0||l+c>a)return null;let h=-o*Ki.dot(Gc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,v,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,v,x,p)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,v,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=v,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,v=c*h,x=c*u;t[0]=f+x*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,v=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=v*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+v,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uv,e,Lv)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Zi.crossVectors(n,kn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Zi.crossVectors(n,kn)),Zi.normalize(),ma.crossVectors(kn,Zi),i[0]=Zi.x,i[4]=ma.x,i[8]=kn.x,i[1]=Zi.y,i[5]=ma.y,i[9]=kn.y,i[2]=Zi.z,i[6]=ma.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],x=n[6],p=n[10],m=n[14],_=n[3],g=n[7],E=n[11],b=n[15],T=i[0],R=i[4],I=i[8],U=i[12],y=i[1],M=i[5],D=i[9],P=i[13],L=i[2],B=i[6],F=i[10],J=i[14],G=i[3],ce=i[7],re=i[11],he=i[15];return r[0]=a*T+o*y+l*L+c*G,r[4]=a*R+o*M+l*B+c*ce,r[8]=a*I+o*D+l*F+c*re,r[12]=a*U+o*P+l*J+c*he,r[1]=h*T+u*y+f*L+d*G,r[5]=h*R+u*M+f*B+d*ce,r[9]=h*I+u*D+f*F+d*re,r[13]=h*U+u*P+f*J+d*he,r[2]=v*T+x*y+p*L+m*G,r[6]=v*R+x*M+p*B+m*ce,r[10]=v*I+x*D+p*F+m*re,r[14]=v*U+x*P+p*J+m*he,r[3]=_*T+g*y+E*L+b*G,r[7]=_*R+g*M+E*B+b*ce,r[11]=_*I+g*D+E*F+b*re,r[15]=_*U+g*P+E*J+b*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],v=e[3],x=e[7],p=e[11],m=e[15];return v*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+x*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+p*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],v=e[12],x=e[13],p=e[14],m=e[15],_=u*p*c-x*f*c+x*l*d-o*p*d-u*l*m+o*f*m,g=v*f*c-h*p*c-v*l*d+a*p*d+h*l*m-a*f*m,E=h*x*c-v*u*c+v*o*d-a*x*d-h*o*m+a*u*m,b=v*u*l-h*x*l-v*o*f+a*x*f+h*o*p-a*u*p,T=t*_+n*g+i*E+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=_*R,e[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*m-n*f*m)*R,e[2]=(o*p*r-x*l*r+x*i*c-n*p*c-o*i*m+n*l*m)*R,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*R,e[4]=g*R,e[5]=(h*p*r-v*f*r+v*i*d-t*p*d-h*i*m+t*f*m)*R,e[6]=(v*l*r-a*p*r-v*i*c+t*p*c+a*i*m-t*l*m)*R,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*R,e[8]=E*R,e[9]=(v*u*r-h*x*r-v*n*d+t*x*d+h*n*m-t*u*m)*R,e[10]=(a*x*r-v*o*r+v*n*c-t*x*c-a*n*m+t*o*m)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*R,e[12]=b*R,e[13]=(h*x*i-v*u*i+v*n*f-t*x*f-h*n*p+t*u*p)*R,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*p-t*o*p)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,v=r*u,x=a*h,p=a*u,m=o*u,_=l*c,g=l*h,E=l*u,b=n.x,T=n.y,R=n.z;return i[0]=(1-(x+m))*b,i[1]=(d+E)*b,i[2]=(v-g)*b,i[3]=0,i[4]=(d-E)*T,i[5]=(1-(f+m))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(v+g)*R,i[9]=(p-_)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=nr.set(i[0],i[1],i[2]).length(),a=nr.set(i[4],i[5],i[6]).length(),o=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ri.copy(this);let c=1/r,h=1/a,u=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ki){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,v;if(o===ki)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$a)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ki){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h,v,x;if(o===ki)v=(a+r)*u,x=-2*u;else if(o===$a)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new S,ri=new tt,Uv=new S(0,0,0),Lv=new S(1,1,1),Zi=new S,ma=new S,kn=new S,mf=new tt,vf=new Ot,cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var el=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dv=0,gf=new S,ir=new Ot,Di=new tt,va=new S,co=new S,Nv=new S,Fv=new Ot,xf=new S(1,0,0),yf=new S(0,1,0),_f=new S(0,0,1),Ef={type:"added"},Hv={type:"removed"},sr={type:"childadded",child:null},Wc={type:"childremoved",child:null},Gt=class s extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new S,t=new cn,n=new Ot,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new st}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(_f,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(_f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(co,va,this.up):Di.lookAt(va,co,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(Di),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Gt.DEFAULT_UP=new S(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new S,Ni=new S,qc=new S,Fi=new S,rr=new S,or=new S,Mf=new S,Xc=new S,Yc=new S,$c=new S,Kc=new rt,Zc=new rt,Jc=new rt,Qi=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Ni.subVectors(n,t),qc.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Ni),l=oi.dot(qc),c=Ni.dot(Ni),h=Ni.dot(qc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Kc.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),Kc.fromBufferAttribute(e,t),Zc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Kc,r.x),a.addScaledVector(Zc,r.y),a.addScaledVector(Jc,r.z),a}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ni.subVectors(e,t),oi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;rr.subVectors(i,n),or.subVectors(r,n),Xc.subVectors(e,n);let l=rr.dot(Xc),c=or.dot(Xc);if(l<=0&&c<=0)return t.copy(n);Yc.subVectors(e,i);let h=rr.dot(Yc),u=or.dot(Yc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(rr,a);$c.subVectors(e,r);let d=rr.dot($c),v=or.dot($c);if(v>=0&&d<=v)return t.copy(r);let x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(or,o);let p=h*v-d*u;if(p<=0&&u-h>=0&&d-v>=0)return Mf.subVectors(r,i),o=(u-h)/(u-h+(d-v)),t.copy(i).addScaledVector(Mf,o);let m=1/(p+x+f);return a=x*m,o=f*m,t.copy(n).addScaledVector(rr,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ga={h:0,s:0,l:0};function jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=bv(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jc(a,r,e+1/3),this.g=jc(a,r,e),this.b=jc(a,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(dn(xn.r*255,0,255))*65536+Math.round(dn(xn.g*255,0,255))*256+Math.round(dn(xn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,r=xn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=yn){Mt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ga);let n=Dc(Ji.h,ga.h,t),i=Dc(Ji.s,ga.s,t),r=Dc(Ji.l,ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new _e;_e.NAMES=bd;var Ov=0,Vi=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Kn,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=Cs,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Cs&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new S,xa=new se,We=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}};var tl=class extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nl=class extends We{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends We{constructor(e,t,n){super(new Float32Array(e),t,n)}},kv=0,$n=new tt,Qc=new Gt,ar=new S,zn=new Bi,ho=new Bi,ln=new S,qe=class s extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?nl:tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(zn.min,ho.min),zn.expandByPoint(ln),ln.addVectors(zn.max,ho.max),zn.expandByPoint(ln)):(zn.expandByPoint(ho.min),zn.expandByPoint(ho.max))}zn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),ln.add(ar)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new S,l[I]=new S;let c=new S,h=new S,u=new S,f=new se,d=new se,v=new se,x=new S,p=new S;function m(I,U,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,U),v.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),v.sub(f);let M=1/(d.x*v.y-v.x*d.y);isFinite(M)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(M),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(M),o[I].add(x),o[U].add(x),o[y].add(x),l[I].add(p),l[U].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,U=_.length;I<U;++I){let y=_[I],M=y.start,D=y.count;for(let P=M,L=M+D;P<L;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let g=new S,E=new S,b=new S,T=new S;function R(I){b.fromBufferAttribute(i,I),T.copy(b);let U=o[I];g.copy(U),g.sub(b.multiplyScalar(b.dot(U))).normalize(),E.crossVectors(T,U);let M=E.dot(l[I])<0?-1:1;a.setXYZW(I,g.x,g.y,g.z,M)}for(let I=0,U=_.length;I<U;++I){let y=_[I],M=y.start,D=y.count;for(let P=M,L=M+D;P<L;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new S,r=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let v=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,v=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)f[v++]=c[d++]}return new We(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bf=new tt,Ms=new Qa,ya=new is,wf=new S,_a=new S,Ea=new S,Ma=new S,eh=new S,ba=new S,Sf=new S,wa=new S,z=class extends Gt{constructor(e=new qe,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(eh.fromBufferAttribute(u,e),a?ba.addScaledVector(eh,h):ba.addScaledVector(eh.sub(t),h))}t.add(ba)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(ya.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ya,wf)===null||Ms.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){let p=f[v],m=a[p.materialIndex],_=Math.max(p.start,d.start),g=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let E=_,b=g;E<b;E+=3){let T=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);i=Sa(this,m,e,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let v=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=v,m=x;p<m;p+=3){let _=o.getX(p),g=o.getX(p+1),E=o.getX(p+2);i=Sa(this,a,e,n,c,h,u,_,g,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){let p=f[v],m=a[p.materialIndex],_=Math.max(p.start,d.start),g=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=_,b=g;E<b;E+=3){let T=E,R=E+1,I=E+2;i=Sa(this,m,e,n,c,h,u,T,R,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=v,m=x;p<m;p+=3){let _=p,g=p+1,E=p+2;i=Sa(this,a,e,n,c,h,u,_,g,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function zv(s,e,t,n,i,r,a,o){let l;if(e.side===mt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ei,o),l===null)return null;wa.copy(o),wa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:s}}function Sa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,_a),s.getVertexPosition(l,Ea),s.getVertexPosition(c,Ma);let h=zv(s,e,t,n,_a,Ea,Ma,Sf);if(h){let u=new S;Qi.getBarycoord(Sf,_a,Ea,Ma,u),i&&(h.uv=Qi.getInterpolatedAttribute(i,o,l,c,u,new se)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=Qi.getInterpolatedAttribute(a,o,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new S,materialIndex:0};Qi.getNormal(_a,Ea,Ma,f.normal),h.face=f,h.barycoord=u}return h}var ot=class s extends qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function v(x,p,m,_,g,E,b,T,R,I,U){let y=E/R,M=b/I,D=E/2,P=b/2,L=T/2,B=R+1,F=I+1,J=0,G=0,ce=new S;for(let re=0;re<F;re++){let he=re*M-P;for(let ze=0;ze<B;ze++){let xe=ze*y-D;ce[x]=xe*_,ce[p]=he*g,ce[m]=L,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[m]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ze/R),u.push(1-re/I),J+=1}}for(let re=0;re<I;re++)for(let he=0;he<R;he++){let ze=f+he+B*re,xe=f+he+B*(re+1),X=f+(he+1)+B*(re+1),j=f+(he+1)+B*re;l.push(ze,xe,j),l.push(xe,X,j),G+=6}o.addGroup(d,G,U),d+=G,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){let e={};for(let t=0;t<s.length;t++){let n=Sr(s[t]);for(let i in n)e[i]=n[i]}return e}function Bv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var Vv={clone:Sr,merge:An},Gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},il=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new S,Tf=new se,Af=new se,Jt=class extends il{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Tf,Af),t.subVectors(Af,Tf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,nu=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Jt(lr,cr,e,t);i.layers=this.layers,this.add(i);let r=new Jt(lr,cr,e,t);r.layers=this.layers,this.add(r);let a=new Jt(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new Jt(lr,cr,e,t);o.layers=this.layers,this.add(o);let l=new Jt(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},sl=class extends _n{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},iu=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),r=new ne({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:es});r.uniforms.tEquirect.value=t;let a=new z(i,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=Dt),new nu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},th=new S,qv=new S,Xv=new st,Oi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=th.subVectors(n,t).cross(qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(th),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xv.getNormalMatrix(e),i=this.coplanarPoint(th).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new is,Ta=new S,bo=class{constructor(e=new Oi,t=new Oi,n=new Oi,i=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],v=i[9],x=i[10],p=i[11],m=i[12],_=i[13],g=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,p-d,E-m).normalize(),n[1].setComponents(l+r,f+c,p+d,E+m).normalize(),n[2].setComponents(l+a,f+h,p+v,E+_).normalize(),n[3].setComponents(l-a,f-h,p-v,E-_).normalize(),n[4].setComponents(l-o,f-u,p-x,E-g).normalize(),t===ki)n[5].setComponents(l+o,f+u,p+x,E+g).normalize();else if(t===$a)n[5].setComponents(o,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ta.x=i.normal.x>0?e.max.x:e.min.x,Ta.y=i.normal.y>0?e.max.y:e.min.y,Ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){let v=u[f],x=u[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var pe=class s extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],v=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*f-a;for(let g=0;g<c;g++){let E=g*u-r;v.push(E,-_,0),x.push(0,0,1),p.push(g/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let g=_+c*m,E=_+c*(m+1),b=_+1+c*(m+1),T=_+1+c*m;d.push(g,E,T),d.push(E,b,T)}this.setIndex(d),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},$v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
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
#endif`,Zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
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
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`
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
}`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Xg=`struct PhysicalMaterial {
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
}`,Yg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
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
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U1=`float getShadowMask() {
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
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,_x=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,wx=`uniform vec3 color;
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
}`,Sx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:$v,alphahash_pars_fragment:Kv,alphamap_fragment:Zv,alphamap_pars_fragment:Jv,alphatest_fragment:jv,alphatest_pars_fragment:Qv,aomap_fragment:eg,aomap_pars_fragment:tg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:og,iridescence_fragment:ag,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:fg,color_fragment:dg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:vg,common:gg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:yg,displacementmap_pars_vertex:_g,displacementmap_vertex:Eg,emissivemap_fragment:Mg,emissivemap_pars_fragment:bg,colorspace_fragment:wg,colorspace_pars_fragment:Sg,envmap_fragment:Tg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Rg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:zg,envmap_vertex:Pg,fog_vertex:Ig,fog_pars_vertex:Ug,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Fg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Og,lights_pars_begin:kg,lights_toon_fragment:Bg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Wg,lights_physical_fragment:qg,lights_physical_pars_fragment:Xg,lights_fragment_begin:Yg,lights_fragment_maps:$g,lights_fragment_end:Kg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Qg,map_fragment:e1,map_pars_fragment:t1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:r1,morphinstance_vertex:o1,morphcolor_vertex:a1,morphnormal_vertex:l1,morphtarget_pars_vertex:c1,morphtarget_vertex:h1,normal_fragment_begin:u1,normal_fragment_maps:f1,normal_pars_fragment:d1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:_1,opaque_fragment:E1,packing:M1,premultiplied_alpha_fragment:b1,project_vertex:w1,dithering_fragment:S1,dithering_pars_fragment:T1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:P1,shadowmap_vertex:I1,shadowmask_pars_fragment:U1,skinbase_vertex:L1,skinning_pars_vertex:D1,skinning_vertex:N1,skinnormal_vertex:F1,specularmap_fragment:H1,specularmap_pars_fragment:O1,tonemapping_fragment:k1,tonemapping_pars_fragment:z1,transmission_fragment:B1,transmission_pars_fragment:V1,uv_pars_fragment:G1,uv_pars_vertex:W1,uv_vertex:q1,worldpos_vertex:X1,background_vert:Y1,background_frag:$1,backgroundCube_vert:K1,backgroundCube_frag:Z1,cube_vert:J1,cube_frag:j1,depth_vert:Q1,depth_frag:ex,distanceRGBA_vert:tx,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:vx,meshphysical_vert:gx,meshphysical_frag:xx,meshtoon_vert:yx,meshtoon_frag:_x,points_vert:Ex,points_frag:Mx,shadow_vert:bx,shadow_frag:wx,sprite_vert:Sx,sprite_frag:Tx},ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gi={basic:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:An([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:An([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:An([ge.points,ge.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:An([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:An([ge.common,ge.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:An([ge.sprite,ge.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:An([ge.common,ge.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:An([ge.lights,ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};gi.physical={uniforms:An([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Aa={r:0,b:0,g:0},ws=new cn,Ax=new tt;function Rx(s,e,t,n,i,r,a){let o=new _e(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?t:e).get(g)),g}function x(_){let g=!1,E=v(_);E===null?m(o,l):E&&E.isColor&&(m(E,1),g=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(_,g){let E=v(g);E&&(E.isCubeTexture||E.mapping===yl)?(h===void 0&&(h=new z(new ot(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:Sr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ws.copy(g.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(ws)),h.material.toneMapped=Mt.getTransfer(E.colorSpace)!==Ut,(u!==E||f!==E.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new z(new pe(2,2),new ne({name:"BackgroundMaterial",uniforms:Sr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(E.colorSpace)!==Ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,g){_.getRGB(Aa,wd(s)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:x,addToRenderList:p}}function Cx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,M,D,P,L){let B=!1,F=u(P,D,M);r!==F&&(r=F,c(r.object)),B=d(y,P,D,L),B&&v(y,P,D,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,E(y,M,D,P),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,M,D){let P=D.wireframe===!0,L=n[y.id];L===void 0&&(L={},n[y.id]=L);let B=L[M.id];B===void 0&&(B={},L[M.id]=B);let F=B[P];return F===void 0&&(F=f(l()),B[P]=F),F}function f(y){let M=[],D=[],P=[];for(let L=0;L<t;L++)M[L]=0,D[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:P,object:y,attributes:{},index:null}}function d(y,M,D,P){let L=r.attributes,B=M.attributes,F=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let re=L[G],he=B[G];if(he===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),re===void 0||re.attribute!==he||he&&re.data!==he.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function v(y,M,D,P){let L={},B=M.attributes,F=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let re=B[G];re===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));let he={};he.attribute=re,re&&re.data&&(he.data=re.data),L[G]=he,F++}r.attributes=L,r.attributesNum=F,r.index=P}function x(){let y=r.newAttributes;for(let M=0,D=y.length;M<D;M++)y[M]=0}function p(y){m(y,0)}function m(y,M){let D=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;D[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),L[y]!==M&&(s.vertexAttribDivisor(y,M),L[y]=M)}function _(){let y=r.newAttributes,M=r.enabledAttributes;for(let D=0,P=M.length;D<P;D++)M[D]!==y[D]&&(s.disableVertexAttribArray(D),M[D]=0)}function g(y,M,D,P,L,B,F){F===!0?s.vertexAttribIPointer(y,M,D,L,B):s.vertexAttribPointer(y,M,D,P,L,B)}function E(y,M,D,P){x();let L=P.attributes,B=D.getAttributes(),F=M.defaultAttributeValues;for(let J in B){let G=B[J];if(G.location>=0){let ce=L[J];if(ce===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){let re=ce.normalized,he=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;let xe=ze.buffer,X=ze.type,j=ze.bytesPerElement,de=X===s.INT||X===s.UNSIGNED_INT||ce.gpuType===Ou;if(ce.isInterleavedBufferAttribute){let Z=ce.data,$=Z.stride,te=ce.offset;if(Z.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)m(G.location+me,Z.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<G.locationSize;me++)p(G.location+me);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let me=0;me<G.locationSize;me++)g(G.location+me,he/G.locationSize,X,re,$*j,(te+he/G.locationSize*me)*j,de)}else{if(ce.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z,ce.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Z=0;Z<G.locationSize;Z++)g(G.location+Z,he/G.locationSize,X,re,he*j,he/G.locationSize*Z*j,de)}}else if(F!==void 0){let re=F[J];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(G.location,re);break;case 3:s.vertexAttrib3fv(G.location,re);break;case 4:s.vertexAttrib4fv(G.location,re);break;default:s.vertexAttrib1fv(G.location,re)}}}}_()}function b(){I();for(let y in n){let M=n[y];for(let D in M){let P=M[D];for(let L in P)h(P[L].object),delete P[L];delete M[D]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let M=n[y.id];for(let D in M){let P=M[D];for(let L in P)h(P[L].object),delete P[L];delete M[D]}delete n[y.id]}function R(y){for(let M in n){let D=n[M];if(D[y.id]===void 0)continue;let P=D[y.id];for(let L in P)h(P[L].object),delete P[L];delete D[y.id]}}function I(){U(),a=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Px(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x];for(let x=0;x<f.length;x++)t.update(v,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ix(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Rn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ci&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yi&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:b,maxSamples:T}}function Ux(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Oi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let v=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||v===null||v.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,g=_*4,E=m.clippingState||null;l.value=E,E=h(v,f,g,d);for(let b=0;b!==g;++b)E[b]=t[b];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,v){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,v!==!0||p===null){let m=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let g=0,E=d;g!==x;++g,E+=4)a.copy(u[g]).applyMatrix4(_,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Lx(s){let e=new WeakMap;function t(a,o){return o===Mh?a.mapping=Er:o===bh&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mh||o===bh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new iu(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ss=class extends il{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vr=4,Rf=[.125,.215,.35,.446,.526,.582],Rs=20,nh=new ss,Cf=new _e,ih=null,sh=0,rh=0,oh=!1,Ts=(1+Math.sqrt(5))/2,hr=1/Ts,Pf=[new S(-Ts,hr,0),new S(Ts,hr,0),new S(-hr,0,Ts),new S(hr,0,Ts),new S(0,Ts,-hr),new S(0,Ts,hr),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ds,format:Rn,colorSpace:bi,depthBuffer:!1},i=If(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dx(r)),this._blurMaterial=Nx(r,e,t)}return i}_compileMaterial(e){let t=new z(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,n,i){let o=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cf),h.toneMapping=_i,h.autoClear=!1;let d=new Ct({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),v=new z(new ot,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(Cf),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let g=this._cubeSize;Ra(i,_*g,m>2?g:0,g,g),h.setRenderTarget(i),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Er||e.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new z(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pf[(i-r-1)%Pf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new z(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),x=r/v,p=isFinite(r)?1+Math.floor(h*x):Rs;p>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rs}`);let m=[],_=0;for(let R=0;R<Rs;++R){let I=R/x,U=Math.exp(-I*I/2);m.push(U),R===0?_+=U:R<p&&(_+=2*U)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-n;let E=this._sizeLods[i],b=3*E*(i>g-vr?i-g+vr:0),T=4*(this._cubeSize-E);Ra(t,b,T,3*E,2*E),l.setRenderTarget(t),l.render(u,nh)}};function Dx(s){let e=[],t=[],n=[],i=s,r=s-vr+1+Rf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-vr?l=Rf[a-s+vr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,x=3,p=2,m=1,_=new Float32Array(x*v*d),g=new Float32Array(p*v*d),E=new Float32Array(m*v*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,I=T>2?0:-1,U=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];_.set(U,x*v*T),g.set(f,p*v*T);let y=[T,T,T,T,T,T];E.set(y,m*v*T)}let b=new qe;b.setAttribute("position",new We(_,x)),b.setAttribute("uv",new We(g,p)),b.setAttribute("faceIndex",new We(E,m)),e.push(b),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function If(s,e,t){let n=new Bn(s,e,t);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nx(s,e,t){let n=new Float32Array(Rs),i=new S(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Uf(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Lf(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}function Fx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Mh||l===bh,h=l===Er||l===Mr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Mi(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Mi(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ga("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ox(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let x=f.morphAttributes[v];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let v in f)e.update(f[v],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let v in d){let x=d[v];for(let p=0,m=x.length;p<m;p++)e.update(x[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,v=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let g=0,E=_.length;g<E;g+=3){let b=_[g+0],T=_[g+1],R=_[g+2];f.push(b,T,T,R,R,b)}}else if(v!==void 0){let _=v.array;x=v.version;for(let g=0,E=_.length/3-1;g<E;g+=3){let b=g+0,T=g+1,R=g+2;f.push(b,T,T,R,R,b)}}else return;let p=new(Md(f)?nl:tl)(f,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,v){v!==0&&(s.drawElementsInstanced(n,d,r,f*a,v),t.update(d,n,v))}function h(f,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let p=0;for(let m=0;m<v;m++)p+=d[m];t.update(p,n,1)}function u(f,d,v,x){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let m=0;for(let _=0;_<v;_++)m+=d[_];for(let _=0;_<x.length;_++)t.update(m,n,x[_])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bx(s,e,t){let n=new WeakMap,i=new rt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let U=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],g=0;d===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let E=o.attributes.position.count*g,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let T=new Float32Array(E*b*4*u),R=new ja(T,E,b,u);R.type=yi,R.needsUpdate=!0;let I=g*4;for(let y=0;y<u;y++){let M=p[y],D=m[y],P=_[y],L=E*b*4*y;for(let B=0;B<M.count;B++){let F=B*I;d===!0&&(i.fromBufferAttribute(M,B),T[L+F+0]=i.x,T[L+F+1]=i.y,T[L+F+2]=i.z,T[L+F+3]=0),v===!0&&(i.fromBufferAttribute(D,B),T[L+F+4]=i.x,T[L+F+5]=i.y,T[L+F+6]=i.z,T[L+F+7]=0),x===!0&&(i.fromBufferAttribute(P,B),T[L+F+8]=i.x,T[L+F+9]=i.y,T[L+F+10]=i.z,T[L+F+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new se(E,b)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Vx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var rl=class extends _n{constructor(e,t,n,i,r,a,o,l,c,h=gr){if(h!==gr&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Ps),n===void 0&&h===wr&&(n=br),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Td=new _n,Df=new rl(1,1),Ad=new ja,Rd=new tu,Cd=new sl,Nf=[],Ff=[],Hf=new Float32Array(16),Of=new Float32Array(9),kf=new Float32Array(4);function Pr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Nf[i];if(r===void 0&&(r=new Float32Array(i),Nf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function El(s,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function Yx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;kf.set(n),s.uniformMatrix2fv(this.addr,!1,kf),tn(t,n)}}function $x(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Of.set(n),s.uniformMatrix3fv(this.addr,!1,Of),tn(t,n)}}function Kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Hf.set(n),s.uniformMatrix4fv(this.addr,!1,Hf),tn(t,n)}}function Zx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function e2(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function t2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function n2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function i2(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function s2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=_d,r=Df):r=Td,t.setTexture2D(e||r,i)}function r2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rd,i)}function o2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cd,i)}function a2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function l2(s){switch(s){case 5126:return Gx;case 35664:return Wx;case 35665:return qx;case 35666:return Xx;case 35674:return Yx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}function c2(s,e){s.uniform1fv(this.addr,e)}function h2(s,e){let t=Pr(e,this.size,2);s.uniform2fv(this.addr,t)}function u2(s,e){let t=Pr(e,this.size,3);s.uniform3fv(this.addr,t)}function f2(s,e){let t=Pr(e,this.size,4);s.uniform4fv(this.addr,t)}function d2(s,e){let t=Pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function p2(s,e){let t=Pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function m2(s,e){let t=Pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function v2(s,e){s.uniform1iv(this.addr,e)}function g2(s,e){s.uniform2iv(this.addr,e)}function x2(s,e){s.uniform3iv(this.addr,e)}function y2(s,e){s.uniform4iv(this.addr,e)}function _2(s,e){s.uniform1uiv(this.addr,e)}function E2(s,e){s.uniform2uiv(this.addr,e)}function M2(s,e){s.uniform3uiv(this.addr,e)}function b2(s,e){s.uniform4uiv(this.addr,e)}function w2(s,e,t){let n=this.cache,i=e.length,r=El(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Td,r[a])}function S2(s,e,t){let n=this.cache,i=e.length,r=El(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rd,r[a])}function T2(s,e,t){let n=this.cache,i=e.length,r=El(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cd,r[a])}function A2(s,e,t){let n=this.cache,i=e.length,r=El(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ad,r[a])}function R2(s){switch(s){case 5126:return c2;case 35664:return h2;case 35665:return u2;case 35666:return f2;case 35674:return d2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return v2;case 35667:case 35671:return g2;case 35668:case 35672:return x2;case 35669:case 35673:return y2;case 5125:return _2;case 36294:return E2;case 36295:return M2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}var su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l2(t.type)}},ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R2(t.type)}},ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function zf(s,e){s.seq.push(e),s.map[e.id]=e}function C2(s,e,t){let n=s.name,i=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),a=ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zf(t,c===void 0?new su(o,s,e):new ru(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new ou(o),zf(t,u)),t=u}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);C2(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Bf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var P2=37297,I2=0;function U2(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function L2(s){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(s),n;switch(e===t?n="":e===Ya&&t===Xa?n="LinearDisplayP3ToLinearSRGB":e===Xa&&t===Ya&&(n="LinearSRGBToLinearDisplayP3"),s){case bi:case _l:return[n,"LinearTransferOETF"];case yn:case qu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Vf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U2(s.getShaderSource(e),a)}else return i}function D2(s,e){let t=L2(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function N2(s,e){let t;switch(e){case rv:t="Linear";break;case ov:t="Reinhard";break;case av:t="Cineon";break;case lv:t="ACESFilmic";break;case hv:t="AgX";break;case uv:t="Neutral";break;case cv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new S;function F2(){Mt.getLuminanceCoefficients(Ca);let s=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function O2(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k2(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xo(s){return s!==""}function Gf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(s){return s.replace(z2,V2)}var B2=new Map;function V2(s,e){let t=it[e];if(t===void 0){let n=B2.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}var G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(s){return s.replace(G2,W2)}function W2(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Er:case Mr:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function $2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case iv:e="ENVMAP_BLENDING_MIX";break;case sv:e="ENVMAP_BLENDING_ADD";break}return e}function K2(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Z2(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=q2(t),c=X2(t),h=Y2(t),u=$2(t),f=K2(t),d=H2(t),v=O2(r),x=i.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?it.tonemapping_pars_fragment:"",t.toneMapping!==_i?N2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,D2("linearToOutputTexel",t.outputColorSpace),F2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),a=au(a),a=Gf(a,t),a=Wf(a,t),o=au(o),o=Gf(o,t),o=Wf(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=_+p+a,E=_+m+o,b=Bf(i,i.VERTEX_SHADER,g),T=Bf(i,i.FRAGMENT_SHADER,E);i.attachShader(x,b),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(M){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(T).trim(),B=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,T);else{let J=Vf(i,b,"vertex"),G=Vf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+J+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(P===""||L==="")&&(F=!1);F&&(M.diagnostics={runnable:B,programLog:D,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:m}})}i.deleteShader(b),i.deleteShader(T),I=new yr(i,x),U=k2(i,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let U;this.getAttributes=function(){return U===void 0&&R(this),U};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,P2)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var J2=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cu(e),t.set(e,n)),n}},cu=class{constructor(e){this.id=J2++,this.code=e,this.usedTimes=0}};function j2(s,e,t,n,i,r,a){let o=new el,l=new lu,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures,v=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,P,L){let B=P.fog,F=L.geometry,J=y.isMeshStandardMaterial?P.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),ce=G&&G.mapping===yl?G.image.height:null,re=x[y.type];y.precision!==null&&(v=i.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));let he=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ze=he!==void 0?he.length:0,xe=0;F.morphAttributes.position!==void 0&&(xe=1),F.morphAttributes.normal!==void 0&&(xe=2),F.morphAttributes.color!==void 0&&(xe=3);let X,j,de,Z;if(re){let Un=gi[re];X=Un.vertexShader,j=Un.fragmentShader}else X=y.vertexShader,j=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),Z=l.getFragmentShaderID(y);let $=s.getRenderTarget(),te=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,Me=!!y.map,Oe=!!y.matcap,N=!!G,yt=!!y.aoMap,Be=!!y.lightMap,nt=!!y.bumpMap,Ve=!!y.normalMap,vt=!!y.displacementMap,Ge=!!y.emissiveMap,C=!!y.metalnessMap,w=!!y.roughnessMap,W=y.anisotropy>0,ee=y.clearcoat>0,oe=y.dispersion>0,Q=y.iridescence>0,Ne=y.sheen>0,ye=y.transmission>0,Ae=W&&!!y.anisotropyMap,gt=ee&&!!y.clearcoatMap,ue=ee&&!!y.clearcoatNormalMap,Re=ee&&!!y.clearcoatRoughnessMap,Ze=Q&&!!y.iridescenceMap,Je=Q&&!!y.iridescenceThicknessMap,Ce=Ne&&!!y.sheenColorMap,dt=Ne&&!!y.sheenRoughnessMap,Qe=!!y.specularMap,Rt=!!y.specularColorMap,H=!!y.specularIntensityMap,Se=ye&&!!y.transmissionMap,K=ye&&!!y.thicknessMap,ie=!!y.gradientMap,be=!!y.alphaMap,Te=y.alphaTest>0,pt=!!y.alphaHash,$t=!!y.extensions,In=_i;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(In=s.toneMapping);let xt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:j,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:te,instancingColor:te&&L.instanceColor!==null,instancingMorph:te&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:bi,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:Oe,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:ce,aoMap:yt,lightMap:Be,bumpMap:nt,normalMap:Ve,displacementMap:d&&vt,emissiveMap:Ge,normalMapObjectSpace:Ve&&y.normalMapType===mv,normalMapTangentSpace:Ve&&y.normalMapType===yd,metalnessMap:C,roughnessMap:w,anisotropy:W,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:gt,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:oe,iridescence:Q,iridescenceMap:Ze,iridescenceThicknessMap:Je,sheen:Ne,sheenColorMap:Ce,sheenRoughnessMap:dt,specularMap:Qe,specularColorMap:Rt,specularIntensityMap:H,transmission:ye,transmissionMap:Se,thicknessMap:K,gradientMap:ie,opaque:y.transparent===!1&&y.blending===Kn&&y.alphaToCoverage===!1,alphaMap:be,alphaTest:Te,alphaHash:pt,combine:y.combine,mapUv:Me&&p(y.map.channel),aoMapUv:yt&&p(y.aoMap.channel),lightMapUv:Be&&p(y.lightMap.channel),bumpMapUv:nt&&p(y.bumpMap.channel),normalMapUv:Ve&&p(y.normalMap.channel),displacementMapUv:vt&&p(y.displacementMap.channel),emissiveMapUv:Ge&&p(y.emissiveMap.channel),metalnessMapUv:C&&p(y.metalnessMap.channel),roughnessMapUv:w&&p(y.roughnessMap.channel),anisotropyMapUv:Ae&&p(y.anisotropyMap.channel),clearcoatMapUv:gt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&p(y.sheenRoughnessMap.channel),specularMapUv:Qe&&p(y.specularMap.channel),specularColorMapUv:Rt&&p(y.specularColorMap.channel),specularIntensityMapUv:H&&p(y.specularIntensityMap.channel),transmissionMapUv:Se&&p(y.transmissionMap.channel),thicknessMapUv:K&&p(y.thicknessMap.channel),alphaMapUv:be&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ve||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Me||be),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:In,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===mt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function _(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(M,y),E(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function g(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function b(y){let M=x[y.type],D;if(M){let P=gi[M];D=Vv.clone(P.uniforms)}else D=y.uniforms;return D}function T(y,M){let D;for(let P=0,L=h.length;P<L;P++){let B=h[P];if(B.cacheKey===M){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Z2(s,M,y,r),h.push(D)),D}function R(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:b,acquireProgram:T,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:U}}function Q2(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ey(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $f(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,v,x,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:x,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function o(u,f,d,v,x,p){let m=a(u,f,d,v,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,v,x,p){let m=a(u,f,d,v,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||ey),n.length>1&&n.sort(f||Yf),i.length>1&&i.sort(f||Yf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ty(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new $f,s.set(n,[a])):i>=r.length?(a=new $f,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new _e};break;case"SpotLight":t={position:new S,direction:new S,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function iy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var sy=0;function ry(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oy(s){let e=new ny,t=iy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);let i=new S,r=new tt,a=new tt;function o(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,v=0,x=0,p=0,m=0,_=0,g=0,E=0,b=0,T=0,R=0;c.sort(ry);for(let U=0,y=c.length;U<y;U++){let M=c[U],D=M.color,P=M.intensity,L=M.distance,B=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=D.r*P,u+=D.g*P,f+=D.b*P;else if(M.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(M.sh.coefficients[F],P);R++}else if(M.isDirectionalLight){let F=e.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let J=M.shadow,G=t.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=M.shadow.matrix,_++}n.directional[d]=F,d++}else if(M.isSpotLight){let F=e.get(M);F.position.setFromMatrixPosition(M.matrixWorld),F.color.copy(D).multiplyScalar(P),F.distance=L,F.coneCos=Math.cos(M.angle),F.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),F.decay=M.decay,n.spot[x]=F;let J=M.shadow;if(M.map&&(n.spotLightMap[b]=M.map,b++,J.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[x]=J.matrix,M.castShadow){let G=t.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=B,E++}x++}else if(M.isRectAreaLight){let F=e.get(M);F.color.copy(D).multiplyScalar(P),F.halfWidth.set(M.width*.5,0,0),F.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=F,p++}else if(M.isPointLight){let F=e.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),F.distance=M.distance,F.decay=M.decay,M.castShadow){let J=M.shadow,G=t.get(M);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=M.shadow.matrix,g++}n.point[v]=F,v++}else if(M.isHemisphereLight){let F=e.get(M);F.skyColor.copy(M.color).multiplyScalar(P),F.groundColor.copy(M.groundColor).multiplyScalar(P),n.hemi[m]=F,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==g||I.numSpotShadows!==E||I.numSpotMaps!==b||I.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=E+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=d,I.pointLength=v,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=g,I.numSpotShadows=E,I.numSpotMaps=b,I.numLightProbes=R,n.version=sy++)}function l(c,h){let u=0,f=0,d=0,v=0,x=0,p=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let g=c[m];if(g.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(g.isSpotLight){let E=n.spot[d];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),d++}else if(g.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(g.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(g.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Kf(s){let e=new oy(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ay(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Kf(s),e.set(i,[o])):r>=a.length?(o=new Kf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var hu=class extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uu=class extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function hy(s,e,t){let n=new bo,i=new se,r=new se,a=new rt,o=new hu({depthPacking:pv}),l=new uu,c={},h=t.maxTextureSize,u={[Ei]:mt,[mt]:Ei,[je]:je},f=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let v=new qe;v.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new z(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let m=this.type;this.render=function(T,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let U=s.getRenderTarget(),y=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),D=s.state;D.setBlending(es),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let P=m!==Hi&&this.type===Hi,L=m===Hi&&this.type!==Hi;for(let B=0,F=T.length;B<F;B++){let J=T[B],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ce=G.getFrameExtents();if(i.multiply(ce),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,G.mapSize.y=r.y)),G.map===null||P===!0||L===!0){let he=this.type!==Hi?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new Bn(i.x,i.y,he),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let re=G.getViewportCount();for(let he=0;he<re;he++){let ze=G.getViewport(he);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),D.viewport(a),G.updateMatrices(J,he),n=G.getFrustum(),E(R,I,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Hi&&_(G,I),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(U,y,M)};function _(T,R){let I=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,I,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,I,d,x,null)}function g(T,R,I,U){let y=null,M=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)y=M;else if(y=I.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=y.uuid,P=R.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let B=L[P];B===void 0&&(B=y.clone(),L[P]=B,R.addEventListener("dispose",b)),y=B}if(y.visible=R.visible,y.wireframe=R.wireframe,U===Hi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=s.properties.get(y);D.light=I}return y}function E(T,R,I,U,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let P=e.update(T),L=T.material;if(Array.isArray(L)){let B=P.groups;for(let F=0,J=B.length;F<J;F++){let G=B[F],ce=L[G.materialIndex];if(ce&&ce.visible){let re=g(T,ce,U,y);T.onBeforeShadow(s,T,R,I,P,re,G),s.renderBufferDirect(I,null,P,re,T,G),T.onAfterShadow(s,T,R,I,P,re,G)}}}else if(L.visible){let B=g(T,L,U,y);T.onBeforeShadow(s,T,R,I,P,B,null),s.renderBufferDirect(I,null,P,B,T,null),T.onAfterShadow(s,T,R,I,P,B,null)}}let D=T.children;for(let P=0,L=D.length;P<L;P++)E(D[P],R,I,U,y)}function b(T){T.target.removeEventListener("dispose",b);for(let I in c){let U=c[I],y=T.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var uy={[mh]:vh,[gh]:_h,[xh]:Eh,[_r]:yh,[vh]:mh,[_h]:gh,[Eh]:xh,[yh]:_r};function fy(s){function e(){let H=!1,Se=new rt,K=null,ie=new rt(0,0,0,0);return{setMask:function(be){K!==be&&!H&&(s.colorMask(be,be,be,be),K=be)},setLocked:function(be){H=be},setClear:function(be,Te,pt,$t,In){In===!0&&(be*=$t,Te*=$t,pt*=$t),Se.set(be,Te,pt,$t),ie.equals(Se)===!1&&(s.clearColor(be,Te,pt,$t),ie.copy(Se))},reset:function(){H=!1,K=null,ie.set(-1,0,0,0)}}}function t(){let H=!1,Se=!1,K=null,ie=null,be=null;return{setReversed:function(Te){Se=Te},setTest:function(Te){Te?de(s.DEPTH_TEST):Z(s.DEPTH_TEST)},setMask:function(Te){K!==Te&&!H&&(s.depthMask(Te),K=Te)},setFunc:function(Te){if(Se&&(Te=uy[Te]),ie!==Te){switch(Te){case mh:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case gh:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case xh:s.depthFunc(s.EQUAL);break;case yh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case Eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=Te}},setLocked:function(Te){H=Te},setClear:function(Te){be!==Te&&(s.clearDepth(Te),be=Te)},reset:function(){H=!1,K=null,ie=null,be=null}}}function n(){let H=!1,Se=null,K=null,ie=null,be=null,Te=null,pt=null,$t=null,In=null;return{setTest:function(xt){H||(xt?de(s.STENCIL_TEST):Z(s.STENCIL_TEST))},setMask:function(xt){Se!==xt&&!H&&(s.stencilMask(xt),Se=xt)},setFunc:function(xt,Un,Ii){(K!==xt||ie!==Un||be!==Ii)&&(s.stencilFunc(xt,Un,Ii),K=xt,ie=Un,be=Ii)},setOp:function(xt,Un,Ii){(Te!==xt||pt!==Un||$t!==Ii)&&(s.stencilOp(xt,Un,Ii),Te=xt,pt=Un,$t=Ii)},setLocked:function(xt){H=xt},setClear:function(xt){In!==xt&&(s.clearStencil(xt),In=xt)},reset:function(){H=!1,Se=null,K=null,ie=null,be=null,Te=null,pt=null,$t=null,In=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,v=!1,x=null,p=null,m=null,_=null,g=null,E=null,b=null,T=new _e(0,0,0),R=0,I=!1,U=null,y=null,M=null,D=null,P=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,F=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=F>=1):J.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=F>=2);let G=null,ce={},re=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),ze=new rt().fromArray(re),xe=new rt().fromArray(he);function X(H,Se,K,ie){let be=new Uint8Array(4),Te=s.createTexture();s.bindTexture(H,Te),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<K;pt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,ie,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Se+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Te}let j={};j[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),de(s.DEPTH_TEST),r.setFunc(_r),Be(!1),nt(nf),de(s.CULL_FACE),N(es);function de(H){c[H]!==!0&&(s.enable(H),c[H]=!0)}function Z(H){c[H]!==!1&&(s.disable(H),c[H]=!1)}function $(H,Se){return h[H]!==Se?(s.bindFramebuffer(H,Se),h[H]=Se,H===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Se),H===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function te(H,Se){let K=f,ie=!1;if(H){K=u.get(Se),K===void 0&&(K=[],u.set(Se,K));let be=H.textures;if(K.length!==be.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,pt=be.length;Te<pt;Te++)K[Te]=s.COLOR_ATTACHMENT0+Te;K.length=be.length,ie=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ie=!0);ie&&s.drawBuffers(K)}function me(H){return d!==H?(s.useProgram(H),d=H,!0):!1}let Me={[As]:s.FUNC_ADD,[Bm]:s.FUNC_SUBTRACT,[Vm]:s.FUNC_REVERSE_SUBTRACT};Me[Gm]=s.MIN,Me[Wm]=s.MAX;let Oe={[qm]:s.ZERO,[Ao]:s.ONE,[Xm]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[jm]:s.SRC_ALPHA_SATURATE,[Zm]:s.DST_COLOR,[$m]:s.DST_ALPHA,[Ym]:s.ONE_MINUS_SRC_COLOR,[Cs]:s.ONE_MINUS_SRC_ALPHA,[Jm]:s.ONE_MINUS_DST_COLOR,[Km]:s.ONE_MINUS_DST_ALPHA,[Qm]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[tv]:s.CONSTANT_ALPHA,[nv]:s.ONE_MINUS_CONSTANT_ALPHA};function N(H,Se,K,ie,be,Te,pt,$t,In,xt){if(H===es){v===!0&&(Z(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),H!==To){if(H!==x||xt!==I){if((p!==As||g!==As)&&(s.blendEquation(s.FUNC_ADD),p=As,g=As),xt)switch(H){case Kn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pe:s.blendFunc(s.ONE,s.ONE);break;case sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,_=null,E=null,b=null,T.set(0,0,0),R=0,x=H,I=xt}return}be=be||Se,Te=Te||K,pt=pt||ie,(Se!==p||be!==g)&&(s.blendEquationSeparate(Me[Se],Me[be]),p=Se,g=be),(K!==m||ie!==_||Te!==E||pt!==b)&&(s.blendFuncSeparate(Oe[K],Oe[ie],Oe[Te],Oe[pt]),m=K,_=ie,E=Te,b=pt),($t.equals(T)===!1||In!==R)&&(s.blendColor($t.r,$t.g,$t.b,In),T.copy($t),R=In),x=H,I=!1}function yt(H,Se){H.side===je?Z(s.CULL_FACE):de(s.CULL_FACE);let K=H.side===mt;Se&&(K=!K),Be(K),H.blending===Kn&&H.transparent===!1?N(es):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);let ie=H.stencilWrite;a.setTest(ie),ie&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Z(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(H){U!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),U=H)}function nt(H){H!==Om?(de(s.CULL_FACE),H!==y&&(H===nf?s.cullFace(s.BACK):H===km?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Z(s.CULL_FACE),y=H}function Ve(H){H!==M&&(B&&s.lineWidth(H),M=H)}function vt(H,Se,K){H?(de(s.POLYGON_OFFSET_FILL),(D!==Se||P!==K)&&(s.polygonOffset(Se,K),D=Se,P=K)):Z(s.POLYGON_OFFSET_FILL)}function Ge(H){H?de(s.SCISSOR_TEST):Z(s.SCISSOR_TEST)}function C(H){H===void 0&&(H=s.TEXTURE0+L-1),G!==H&&(s.activeTexture(H),G=H)}function w(H,Se,K){K===void 0&&(G===null?K=s.TEXTURE0+L-1:K=G);let ie=ce[K];ie===void 0&&(ie={type:void 0,texture:void 0},ce[K]=ie),(ie.type!==H||ie.texture!==Se)&&(G!==K&&(s.activeTexture(K),G=K),s.bindTexture(H,Se||j[H]),ie.type=H,ie.texture=Se)}function W(){let H=ce[G];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){ze.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ze.copy(H))}function Ce(H){xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),xe.copy(H))}function dt(H,Se){let K=l.get(Se);K===void 0&&(K=new WeakMap,l.set(Se,K));let ie=K.get(H);ie===void 0&&(ie=s.getUniformBlockIndex(Se,H.name),K.set(H,ie))}function Qe(H,Se){let ie=l.get(Se).get(H);o.get(Se)!==ie&&(s.uniformBlockBinding(Se,ie,H.__bindingPointIndex),o.set(Se,ie))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,ce={},h={},u=new WeakMap,f=[],d=null,v=!1,x=null,p=null,m=null,_=null,g=null,E=null,b=null,T=new _e(0,0,0),R=0,I=!1,U=null,y=null,M=null,D=null,P=null,ze.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:de,disable:Z,bindFramebuffer:$,drawBuffers:te,useProgram:me,setBlending:N,setMaterial:yt,setFlipSided:Be,setCullFace:nt,setLineWidth:Ve,setPolygonOffset:vt,setScissorTest:Ge,activeTexture:C,bindTexture:w,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:oe,texImage2D:Re,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:Qe,texStorage2D:gt,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:Ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ae,scissor:Je,viewport:Ce,reset:Rt}}function Zf(s,e,t,n){let i=dy(n);switch(t){case dd:return s*e;case md:return s*e;case vd:return s*e*2;case Bu:return s*e/i.components*i.byteLength;case Vu:return s*e/i.components*i.byteLength;case gd:return s*e*2/i.components*i.byteLength;case Gu:return s*e*2/i.components*i.byteLength;case pd:return s*e*3/i.components*i.byteLength;case Rn:return s*e*4/i.components*i.byteLength;case Wu:return s*e*4/i.components*i.byteLength;case Oa:case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case za:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:case Rh:return Math.max(s,16)*Math.max(e,8)/4;case Sh:case Ah:return Math.max(s,8)*Math.max(e,8)/2;case Ch:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Va:case Xh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xd:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kh:case Zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(s){switch(s){case ci:case hd:return{byteLength:1,components:1};case Mo:case ud:case Ds:return{byteLength:2,components:1};case ku:case zu:return{byteLength:2,components:4};case Ps:case Ou:case yi:return{byteLength:4,components:1};case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function py(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return d?new OffscreenCanvas(C,w):Za("canvas")}function x(C,w,W){let ee=1,oe=Ge(C);if((oe.width>W||oe.height>W)&&(ee=W/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(ee*oe.width),Ne=Math.floor(ee*oe.height);u===void 0&&(u=v(Q,Ne));let ye=w?v(Q,Ne):u;return ye.width=Q,ye.height=Ne,ye.getContext("2d").drawImage(C,0,0,Q,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Ne+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Ln&&C.minFilter!==Dt}function m(C){s.generateMipmap(C)}function _(C,w,W,ee,oe=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=w;if(w===s.RED&&(W===s.FLOAT&&(Q=s.R32F),W===s.HALF_FLOAT&&(Q=s.R16F),W===s.UNSIGNED_BYTE&&(Q=s.R8)),w===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.R8UI),W===s.UNSIGNED_SHORT&&(Q=s.R16UI),W===s.UNSIGNED_INT&&(Q=s.R32UI),W===s.BYTE&&(Q=s.R8I),W===s.SHORT&&(Q=s.R16I),W===s.INT&&(Q=s.R32I)),w===s.RG&&(W===s.FLOAT&&(Q=s.RG32F),W===s.HALF_FLOAT&&(Q=s.RG16F),W===s.UNSIGNED_BYTE&&(Q=s.RG8)),w===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RG8UI),W===s.UNSIGNED_SHORT&&(Q=s.RG16UI),W===s.UNSIGNED_INT&&(Q=s.RG32UI),W===s.BYTE&&(Q=s.RG8I),W===s.SHORT&&(Q=s.RG16I),W===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),W===s.UNSIGNED_INT&&(Q=s.RGB32UI),W===s.BYTE&&(Q=s.RGB8I),W===s.SHORT&&(Q=s.RGB16I),W===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),W===s.UNSIGNED_INT&&(Q=s.RGBA32UI),W===s.BYTE&&(Q=s.RGBA8I),W===s.SHORT&&(Q=s.RGBA16I),W===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),w===s.RGBA){let Ne=oe?qa:Mt.getTransfer(ee);W===s.FLOAT&&(Q=s.RGBA32F),W===s.HALF_FLOAT&&(Q=s.RGBA16F),W===s.UNSIGNED_BYTE&&(Q=Ne===Ut?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(C,w){let W;return C?w===null||w===Ps||w===br?W=s.DEPTH24_STENCIL8:w===yi?W=s.DEPTH32F_STENCIL8:w===Mo&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ps||w===br?W=s.DEPTH_COMPONENT24:w===yi?W=s.DEPTH_COMPONENT32F:w===Mo&&(W=s.DEPTH_COMPONENT16),W}function E(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ln&&C.minFilter!==Dt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){let w=C.target;w.removeEventListener("dispose",b),R(w),w.isVideoTexture&&h.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),U(w)}function R(C){let w=n.get(C);if(w.__webglInit===void 0)return;let W=C.source,ee=f.get(W);if(ee){let oe=ee[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(C),Object.keys(ee).length===0&&f.delete(W)}n.remove(C)}function I(C){let w=n.get(C);s.deleteTexture(w.__webglTexture);let W=C.source,ee=f.get(W);delete ee[w.__cacheKey],a.memory.textures--}function U(C){let w=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let oe=0;oe<w.__webglFramebuffer[ee].length;oe++)s.deleteFramebuffer(w.__webglFramebuffer[ee][oe]);else s.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)s.deleteFramebuffer(w.__webglFramebuffer[ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let W=C.textures;for(let ee=0,oe=W.length;ee<oe;ee++){let Q=n.get(W[ee]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(W[ee])}n.remove(C)}let y=0;function M(){y=0}function D(){let C=y;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),y+=1,C}function P(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function L(C,w){let W=n.get(C);if(C.isVideoTexture&&Ve(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(W,C,w);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+w)}function B(C,w){let W=n.get(C);if(C.version>0&&W.__version!==C.version){xe(W,C,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+w)}function F(C,w){let W=n.get(C);if(C.version>0&&W.__version!==C.version){xe(W,C,w);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+w)}function J(C,w){let W=n.get(C);if(C.version>0&&W.__version!==C.version){X(W,C,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+w)}let G={[zi]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[wh]:s.MIRRORED_REPEAT},ce={[Ln]:s.NEAREST,[fv]:s.NEAREST_MIPMAP_NEAREST,[ca]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},re={[vv]:s.NEVER,[Mv]:s.ALWAYS,[gv]:s.LESS,[_d]:s.LEQUAL,[xv]:s.EQUAL,[Ev]:s.GEQUAL,[yv]:s.GREATER,[_v]:s.NOTEQUAL};function he(C,w){if(w.type===yi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Dt||w.magFilter===Ic||w.magFilter===ca||w.magFilter===li||w.minFilter===Dt||w.minFilter===Ic||w.minFilter===ca||w.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,G[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,G[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,G[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ce[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==ca&&w.minFilter!==li||w.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ze(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",b));let ee=w.source,oe=f.get(ee);oe===void 0&&(oe={},f.set(ee,oe));let Q=P(w);if(Q!==C.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),oe[Q].usedTimes++;let Ne=oe[C.__cacheKey];Ne!==void 0&&(oe[C.__cacheKey].usedTimes--,Ne.usedTimes===0&&I(w)),C.__cacheKey=Q,C.__webglTexture=oe[Q].texture}return W}function xe(C,w,W){let ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=s.TEXTURE_3D);let oe=ze(C,w),Q=w.source;t.bindTexture(ee,C.__webglTexture,s.TEXTURE0+W);let Ne=n.get(Q);if(Q.version!==Ne.__version||oe===!0){t.activeTexture(s.TEXTURE0+W);let ye=Mt.getPrimaries(Mt.workingColorSpace),Ae=w.colorSpace===jt?null:Mt.getPrimaries(w.colorSpace),gt=w.colorSpace===jt||ye===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let ue=x(w.image,!1,i.maxTextureSize);ue=vt(w,ue);let Re=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type),Je=_(w.internalFormat,Re,Ze,w.colorSpace,w.isVideoTexture);he(ee,w);let Ce,dt=w.mipmaps,Qe=w.isVideoTexture!==!0,Rt=Ne.__version===void 0||oe===!0,H=Q.dataReady,Se=E(w,ue);if(w.isDepthTexture)Je=g(w.format===wr,w.type),Rt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,Je,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Je,ue.width,ue.height,0,Re,Ze,null));else if(w.isDataTexture)if(dt.length>0){Qe&&Rt&&t.texStorage2D(s.TEXTURE_2D,Se,Je,dt[0].width,dt[0].height);for(let K=0,ie=dt.length;K<ie;K++)Ce=dt[K],Qe?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Ze,Ce.data):t.texImage2D(s.TEXTURE_2D,K,Je,Ce.width,Ce.height,0,Re,Ze,Ce.data);w.generateMipmaps=!1}else Qe?(Rt&&t.texStorage2D(s.TEXTURE_2D,Se,Je,ue.width,ue.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,Ze,ue.data)):t.texImage2D(s.TEXTURE_2D,0,Je,ue.width,ue.height,0,Re,Ze,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qe&&Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Je,dt[0].width,dt[0].height,ue.depth);for(let K=0,ie=dt.length;K<ie;K++)if(Ce=dt[K],w.format!==Rn)if(Re!==null)if(Qe){if(H)if(w.layerUpdates.size>0){let be=Zf(Ce.width,Ce.height,w.format,w.type);for(let Te of w.layerUpdates){let pt=Ce.data.subarray(Te*be/Ce.data.BYTES_PER_ELEMENT,(Te+1)*be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Te,Ce.width,Ce.height,1,Re,pt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,ue.depth,Re,Ce.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Je,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,ue.depth,Re,Ze,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Je,Ce.width,Ce.height,ue.depth,0,Re,Ze,Ce.data)}else{Qe&&Rt&&t.texStorage2D(s.TEXTURE_2D,Se,Je,dt[0].width,dt[0].height);for(let K=0,ie=dt.length;K<ie;K++)Ce=dt[K],w.format!==Rn?Re!==null?Qe?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Ze,Ce.data):t.texImage2D(s.TEXTURE_2D,K,Je,Ce.width,Ce.height,0,Re,Ze,Ce.data)}else if(w.isDataArrayTexture)if(Qe){if(Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Je,ue.width,ue.height,ue.depth),H)if(w.layerUpdates.size>0){let K=Zf(ue.width,ue.height,w.format,w.type);for(let ie of w.layerUpdates){let be=ue.data.subarray(ie*K/ue.data.BYTES_PER_ELEMENT,(ie+1)*K/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Re,Ze,be)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ze,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ue.width,ue.height,ue.depth,0,Re,Ze,ue.data);else if(w.isData3DTexture)Qe?(Rt&&t.texStorage3D(s.TEXTURE_3D,Se,Je,ue.width,ue.height,ue.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ze,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Je,ue.width,ue.height,ue.depth,0,Re,Ze,ue.data);else if(w.isFramebufferTexture){if(Rt)if(Qe)t.texStorage2D(s.TEXTURE_2D,Se,Je,ue.width,ue.height);else{let K=ue.width,ie=ue.height;for(let be=0;be<Se;be++)t.texImage2D(s.TEXTURE_2D,be,Je,K,ie,0,Re,Ze,null),K>>=1,ie>>=1}}else if(dt.length>0){if(Qe&&Rt){let K=Ge(dt[0]);t.texStorage2D(s.TEXTURE_2D,Se,Je,K.width,K.height)}for(let K=0,ie=dt.length;K<ie;K++)Ce=dt[K],Qe?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Re,Ze,Ce):t.texImage2D(s.TEXTURE_2D,K,Je,Re,Ze,Ce);w.generateMipmaps=!1}else if(Qe){if(Rt){let K=Ge(ue);t.texStorage2D(s.TEXTURE_2D,Se,Je,K.width,K.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ze,ue)}else t.texImage2D(s.TEXTURE_2D,0,Je,Re,Ze,ue);p(w)&&m(ee),Ne.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function X(C,w,W){if(w.image.length!==6)return;let ee=ze(C,w),oe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);let Q=n.get(oe);if(oe.version!==Q.__version||ee===!0){t.activeTexture(s.TEXTURE0+W);let Ne=Mt.getPrimaries(Mt.workingColorSpace),ye=w.colorSpace===jt?null:Mt.getPrimaries(w.colorSpace),Ae=w.colorSpace===jt||Ne===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let gt=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let ie=0;ie<6;ie++)!gt&&!ue?Re[ie]=x(w.image[ie],!0,i.maxCubemapSize):Re[ie]=ue?w.image[ie].image:w.image[ie],Re[ie]=vt(w,Re[ie]);let Ze=Re[0],Je=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),dt=_(w.internalFormat,Je,Ce,w.colorSpace),Qe=w.isVideoTexture!==!0,Rt=Q.__version===void 0||ee===!0,H=oe.dataReady,Se=E(w,Ze);he(s.TEXTURE_CUBE_MAP,w);let K;if(gt){Qe&&Rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,dt,Ze.width,Ze.height);for(let ie=0;ie<6;ie++){K=Re[ie].mipmaps;for(let be=0;be<K.length;be++){let Te=K[be];w.format!==Rn?Je!==null?Qe?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Te.width,Te.height,Je,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,dt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Te.width,Te.height,Je,Ce,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,dt,Te.width,Te.height,0,Je,Ce,Te.data)}}}else{if(K=w.mipmaps,Qe&&Rt){K.length>0&&Se++;let ie=Ge(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,dt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){Qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re[ie].width,Re[ie].height,Je,Ce,Re[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,dt,Re[ie].width,Re[ie].height,0,Je,Ce,Re[ie].data);for(let be=0;be<K.length;be++){let pt=K[be].image[ie].image;Qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,pt.width,pt.height,Je,Ce,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,dt,pt.width,pt.height,0,Je,Ce,pt.data)}}else{Qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Je,Ce,Re[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,dt,Je,Ce,Re[ie]);for(let be=0;be<K.length;be++){let Te=K[be];Qe?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Je,Ce,Te.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,dt,Je,Ce,Te.image[ie])}}}p(w)&&m(s.TEXTURE_CUBE_MAP),Q.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function j(C,w,W,ee,oe,Q){let Ne=r.convert(W.format,W.colorSpace),ye=r.convert(W.type),Ae=_(W.internalFormat,Ne,ye,W.colorSpace);if(!n.get(w).__hasExternalTextures){let ue=Math.max(1,w.width>>Q),Re=Math.max(1,w.height>>Q);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,Ae,ue,Re,w.depth,0,Ne,ye,null):t.texImage2D(oe,Q,Ae,ue,Re,0,Ne,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),nt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,oe,n.get(W).__webglTexture,0,Be(w)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,oe,n.get(W).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(C,w,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){let ee=w.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,Q=g(w.stencilBuffer,oe),Ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=Be(w);nt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,Q,w.width,w.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,C)}else{let ee=w.textures;for(let oe=0;oe<ee.length;oe++){let Q=ee[oe],Ne=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),Ae=_(Q.internalFormat,Ne,ye,Q.colorSpace),gt=Be(w);W&&nt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Ae,w.width,w.height):nt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Ae,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Z(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);let ee=n.get(w.depthTexture).__webglTexture,oe=Be(w);if(w.depthTexture.format===gr)nt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(w.depthTexture.format===wr)nt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function $(C){let w=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ee=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=ee}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=s.createRenderbuffer(),de(w.__webglDepthbuffer[ee],C,!1);else{let oe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),de(w.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(C,w,W){let ee=n.get(C);w!==void 0&&j(ee.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&$(C)}function me(C){let w=C.texture,W=n.get(C),ee=n.get(w);C.addEventListener("dispose",T);let oe=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ne=oe.length>1;if(Ne||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=w.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ye]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)W.__webglFramebuffer[ye][Ae]=s.createFramebuffer()}else W.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)W.__webglFramebuffer[ye]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let ye=0,Ae=oe.length;ye<Ae;ye++){let gt=n.get(oe[ye]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&nt(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ye=0;ye<oe.length;ye++){let Ae=oe[ye];W.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ye]);let gt=r.convert(Ae.format,Ae.colorSpace),ue=r.convert(Ae.type),Re=_(Ae.internalFormat,gt,ue,Ae.colorSpace,C.isXRRenderTarget===!0),Ze=Be(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Re,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,W.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),de(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),he(s.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)j(W.__webglFramebuffer[ye][Ae],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae);else j(W.__webglFramebuffer[ye],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(w)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,Ae=oe.length;ye<Ae;ye++){let gt=oe[ye],ue=n.get(gt);t.bindTexture(s.TEXTURE_2D,ue.__webglTexture),he(s.TEXTURE_2D,gt),j(W.__webglFramebuffer,C,gt,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),p(gt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ee.__webglTexture),he(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)j(W.__webglFramebuffer[Ae],C,w,s.COLOR_ATTACHMENT0,ye,Ae);else j(W.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,ye,0);p(w)&&m(ye),t.unbindTexture()}C.depthBuffer&&$(C)}function Me(C){let w=C.textures;for(let W=0,ee=w.length;W<ee;W++){let oe=w[W];if(p(oe)){let Q=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=n.get(oe).__webglTexture;t.bindTexture(Q,Ne),m(Q),t.unbindTexture()}}}let Oe=[],N=[];function yt(C){if(C.samples>0){if(nt(C)===!1){let w=C.textures,W=C.width,ee=C.height,oe=s.COLOR_BUFFER_BIT,Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(C),ye=w.length>1;if(ye)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);let gt=n.get(w[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,W,ee,0,0,W,ee,oe,s.NEAREST),l===!0&&(Oe.length=0,N.length=0,Oe.push(s.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push(Q),N.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ae]);let gt=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,gt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Be(C){return Math.min(i.maxSamples,C.samples)}function nt(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ve(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function vt(C,w){let W=C.colorSpace,ee=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==bi&&W!==jt&&(Mt.getTransfer(W)===Ut?(ee!==Rn||oe!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=J,this.rebindTextures=te,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=j,this.useMultisampledRTT=nt}function my(s,e){function t(n,i=jt){let r,a=Mt.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===ku)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return s.BYTE;if(n===ud)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===Ou)return s.INT;if(n===Ps)return s.UNSIGNED_INT;if(n===yi)return s.FLOAT;if(n===Ds)return s.HALF_FLOAT;if(n===dd)return s.ALPHA;if(n===pd)return s.RGB;if(n===Rn)return s.RGBA;if(n===md)return s.LUMINANCE;if(n===vd)return s.LUMINANCE_ALPHA;if(n===gr)return s.DEPTH_COMPONENT;if(n===wr)return s.DEPTH_STENCIL;if(n===Bu)return s.RED;if(n===Vu)return s.RED_INTEGER;if(n===gd)return s.RG;if(n===Gu)return s.RG_INTEGER;if(n===Wu)return s.RGBA_INTEGER;if(n===Oa||n===ka||n===za||n===Ba)if(a===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sh||n===Th||n===Ah||n===Rh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Ph||n===Ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Ph)return a===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uh||n===Lh||n===Dh||n===Nh||n===Fh||n===Hh||n===Oh||n===kh||n===zh||n===Bh||n===Vh||n===Gh||n===Wh||n===qh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Xh||n===Yh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xd||n===$h||n===Kh||n===Zh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var fu=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vy={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new _n,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ne({vertexShader:gy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends ns{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null,x=new du,p=t.getContextAttributes(),m=null,_=null,g=[],E=[],b=new se,T=null,R=new Jt;R.layers.enable(1),R.viewport=new rt;let I=new Jt;I.layers.enable(2),I.viewport=new rt;let U=[R,I],y=new fu;y.layers.enable(1),y.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=g[X];return j===void 0&&(j=new yo,g[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=g[X];return j===void 0&&(j=new yo,g[X]=j),j.getGripSpace()},this.getHand=function(X){let j=g[X];return j===void 0&&(j=new yo,g[X]=j),j.getHandSpace()};function P(X){let j=E.indexOf(X.inputSource);if(j===-1)return;let de=g[j];de!==void 0&&(de.update(X.inputSource,X.frame,c||a),de.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",B);for(let X=0;X<g.length;X++){let j=E[X];j!==null&&(E[X]=null,g[X].disconnect(j))}M=null,D=null,x.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,_=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",L),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){let j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,de=null,Z=null;p.depth&&(Z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=p.stencil?wr:gr,de=p.stencil?br:Ps);let $={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer($),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Bn(f.textureWidth,f.textureHeight,{format:Rn,type:ci,depthTexture:new rl(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(X){for(let j=0;j<X.removed.length;j++){let de=X.removed[j],Z=E.indexOf(de);Z>=0&&(E[Z]=null,g[Z].disconnect(de))}for(let j=0;j<X.added.length;j++){let de=X.added[j],Z=E.indexOf(de);if(Z===-1){for(let te=0;te<g.length;te++)if(te>=E.length){E.push(de),Z=te;break}else if(E[te]===null){E[te]=de,Z=te;break}if(Z===-1)break}let $=g[Z];$&&$.connect(de)}}let F=new S,J=new S;function G(X,j,de){F.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);let Z=F.distanceTo(J),$=j.projectionMatrix.elements,te=de.projectionMatrix.elements,me=$[14]/($[10]-1),Me=$[14]/($[10]+1),Oe=($[9]+1)/$[5],N=($[9]-1)/$[5],yt=($[8]-1)/$[0],Be=(te[8]+1)/te[0],nt=me*yt,Ve=me*Be,vt=Z/(-yt+Be),Ge=vt*-yt;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ge),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),$[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let C=me+vt,w=Me+vt,W=nt-Ge,ee=Ve+(Z-Ge),oe=Oe*Me/w*C,Q=N*Me/w*C;X.projectionMatrix.makePerspective(W,ee,oe,Q,C,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ce(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let j=X.near,de=X.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(de=x.depthFar)),y.near=I.near=R.near=j,y.far=I.far=R.far=de,(M!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,D=y.far);let Z=X.parent,$=y.cameras;ce(y,Z);for(let te=0;te<$.length;te++)ce($[te],Z);$.length===2?G(y,R,I):y.projectionMatrix.copy(R.projectionMatrix),re(X,y,Z)};function re(X,j,de){de===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ka*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let he=null;function ze(X,j){if(h=j.getViewerPose(c||a),v=j,h!==null){let de=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Z=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let te=0;te<de.length;te++){let me=de[te],Me=null;if(d!==null)Me=d.getViewport(me);else{let N=u.getViewSubImage(f,me);Me=N.viewport,te===0&&(e.setRenderTargetTextures(_,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(_))}let Oe=U[te];Oe===void 0&&(Oe=new Jt,Oe.layers.enable(te),Oe.viewport=new rt,U[te]=Oe),Oe.matrix.fromArray(me.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(me.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Me.x,Me.y,Me.width,Me.height),te===0&&(y.matrix.copy(Oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(Oe)}let $=i.enabledFeatures;if($&&$.includes("depth-sensing")){let te=u.getDepthInformation(de[0]);te&&te.isValid&&te.texture&&x.init(e,te,i.renderState)}}for(let de=0;de<g.length;de++){let Z=E[de],$=g[de];Z!==null&&$!==void 0&&$.update(Z,j,c||a)}he&&he(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}let xe=new Sd;xe.setAnimationLoop(ze),this.setAnimationLoop=function(X){he=X},this.dispose=function(){}}},Ss=new cn,yy=new tt;function _y(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,g,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,g):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),g=_.envMap,E=_.envMapRotation;g&&(p.envMap.value=g,Ss.copy(E),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(Ss)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,g){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=g*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ey(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){let E=g.program;n.uniformBlockBinding(_,E)}function c(_,g){let E=i[_.id];E===void 0&&(v(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",p));let b=g.program;n.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){let g=u();_.__bindingPointIndex=g;let E=s.createBuffer(),b=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let g=i[_.id],E=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let T=0,R=E.length;T<R;T++){let I=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,y=I.length;U<y;U++){let M=I[U];if(d(M,T,U,b)===!0){let D=M.__offset,P=Array.isArray(M.value)?M.value:[M.value],L=0;for(let B=0;B<P.length;B++){let F=P[B],J=x(F);typeof F=="number"||typeof F=="boolean"?(M.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,D+L,M.__data)):F.isMatrix3?(M.__data[0]=F.elements[0],M.__data[1]=F.elements[1],M.__data[2]=F.elements[2],M.__data[3]=0,M.__data[4]=F.elements[3],M.__data[5]=F.elements[4],M.__data[6]=F.elements[5],M.__data[7]=0,M.__data[8]=F.elements[6],M.__data[9]=F.elements[7],M.__data[10]=F.elements[8],M.__data[11]=0):(F.toArray(M.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,g,E,b){let T=_.value,R=g+"_"+E;if(b[R]===void 0)return typeof T=="number"||typeof T=="boolean"?b[R]=T:b[R]=T.clone(),!0;{let I=b[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return b[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function v(_){let g=_.uniforms,E=0,b=16;for(let R=0,I=g.length;R<I;R++){let U=Array.isArray(g[R])?g[R]:[g[R]];for(let y=0,M=U.length;y<M;y++){let D=U[y],P=Array.isArray(D.value)?D.value:[D.value];for(let L=0,B=P.length;L<B;L++){let F=P[L],J=x(F),G=E%b,ce=G%J.boundary,re=G+ce;E+=ce,re!==0&&b-re<J.storage&&(E+=b-re),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=J.storage}}}let T=E%b;return T>0&&(E+=b-T),_.__size=E,_.__cache={},this}function x(_){let g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){let g=_.target;g.removeEventListener("dispose",p);let E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var ol=class{constructor(e={}){let{canvas:t=wv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),v=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=_i,this.toneMappingExposure=1;let g=this,E=!1,b=0,T=0,R=null,I=-1,U=null,y=new rt,M=new rt,D=null,P=new _e(0),L=0,B=t.width,F=t.height,J=1,G=null,ce=null,re=new rt(0,0,B,F),he=new rt(0,0,B,F),ze=!1,xe=new bo,X=!1,j=!1,de=new tt,Z=new tt,$=new S,te=new rt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Oe(){return R===null?J:1}let N=n;function yt(A,O){return t.getContext(A,O)}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),N===null){let O="webgl2";if(N=yt(O,A),N===null)throw yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,nt,Ve,vt,Ge,C,w,W,ee,oe,Q,Ne,ye,Ae,gt,ue,Re,Ze,Je,Ce,dt,Qe,Rt,H;function Se(){Be=new Hx(N),Be.init(),Qe=new my(N,Be),nt=new Ix(N,Be,e,Qe),Ve=new fy(N),nt.reverseDepthBuffer&&Ve.buffers.depth.setReversed(!0),vt=new zx(N),Ge=new Q2,C=new py(N,Be,Ve,Ge,nt,Qe,vt),w=new Lx(g),W=new Fx(g),ee=new Yv(N),Rt=new Cx(N,ee),oe=new Ox(N,ee,vt,Rt),Q=new Vx(N,oe,ee,vt),Je=new Bx(N,nt,C),ue=new Ux(Ge),Ne=new j2(g,w,W,Be,nt,Rt,ue),ye=new _y(g,Ge),Ae=new ty,gt=new ay(Be),Ze=new Rx(g,w,W,Ve,Q,f,l),Re=new hy(g,Q,nt),H=new Ey(N,vt,nt,Ve),Ce=new Px(N,Be,vt),dt=new kx(N,Be,vt),vt.programs=Ne.programs,g.capabilities=nt,g.extensions=Be,g.properties=Ge,g.renderLists=Ae,g.shadowMap=Re,g.state=Ve,g.info=vt}Se();let K=new pu(g,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(B,F,!1))},this.getSize=function(A){return A.set(B,F)},this.setSize=function(A,O,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,F=O,t.width=Math.floor(A*J),t.height=Math.floor(O*J),q===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*J,F*J).floor()},this.setDrawingBufferSize=function(A,O,q){B=A,F=O,J=q,t.width=Math.floor(A*q),t.height=Math.floor(O*q),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,O,q,Y){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,q,Y),Ve.viewport(y.copy(re).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,O,q,Y){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,O,q,Y),Ve.scissor(M.copy(he).multiplyScalar(J).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){Ve.setScissorTest(ze=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,O=!0,q=!0){let Y=0;if(A){let k=!1;if(R!==null){let fe=R.texture.format;k=fe===Wu||fe===Gu||fe===Vu}if(k){let fe=R.texture.type,we=fe===ci||fe===Ps||fe===Mo||fe===br||fe===ku||fe===zu,Ie=Ze.getClearColor(),Ue=Ze.getClearAlpha(),$e=Ie.r,Ke=Ie.g,Fe=Ie.b;we?(d[0]=$e,d[1]=Ke,d[2]=Fe,d[3]=Ue,N.clearBufferuiv(N.COLOR,0,d)):(v[0]=$e,v[1]=Ke,v[2]=Fe,v[3]=Ue,N.clearBufferiv(N.COLOR,0,v))}else Y|=N.COLOR_BUFFER_BIT}O&&(Y|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ae.dispose(),gt.dispose(),Ge.dispose(),w.dispose(),W.dispose(),Q.dispose(),Rt.dispose(),H.dispose(),Ne.dispose(),K.dispose(),K.removeEventListener("sessionstart",$0),K.removeEventListener("sessionend",K0),ys.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=vt.autoReset,O=Re.enabled,q=Re.autoUpdate,Y=Re.needsUpdate,k=Re.type;Se(),vt.autoReset=A,Re.enabled=O,Re.autoUpdate=q,Re.needsUpdate=Y,Re.type=k}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){let O=A.target;O.removeEventListener("dispose",pt),$t(O)}function $t(A){In(A),Ge.remove(A)}function In(A){let O=Ge.get(A).programs;O!==void 0&&(O.forEach(function(q){Ne.releaseProgram(q)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,q,Y,k,fe){O===null&&(O=me);let we=k.isMesh&&k.matrixWorld.determinant()<0,Ie=Um(A,O,q,Y,k);Ve.setMaterial(Y,we);let Ue=q.index,$e=1;if(Y.wireframe===!0){if(Ue=oe.getWireframeAttribute(q),Ue===void 0)return;$e=2}let Ke=q.drawRange,Fe=q.attributes.position,St=Ke.start*$e,It=(Ke.start+Ke.count)*$e;fe!==null&&(St=Math.max(St,fe.start*$e),It=Math.min(It,(fe.start+fe.count)*$e)),Ue!==null?(St=Math.max(St,0),It=Math.min(It,Ue.count)):Fe!=null&&(St=Math.max(St,0),It=Math.min(It,Fe.count));let Ht=It-St;if(Ht<0||Ht===1/0)return;Rt.setup(k,Y,Ie,q,Ue);let Hn,_t=Ce;if(Ue!==null&&(Hn=ee.get(Ue),_t=dt,_t.setIndex(Hn)),k.isMesh)Y.wireframe===!0?(Ve.setLineWidth(Y.wireframeLinewidth*Oe()),_t.setMode(N.LINES)):_t.setMode(N.TRIANGLES);else if(k.isLine){let He=Y.linewidth;He===void 0&&(He=1),Ve.setLineWidth(He*Oe()),k.isLineSegments?_t.setMode(N.LINES):k.isLineLoop?_t.setMode(N.LINE_LOOP):_t.setMode(N.LINE_STRIP)}else k.isPoints?_t.setMode(N.POINTS):k.isSprite&&_t.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)_t.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let He=k._multiDrawStarts,fn=k._multiDrawCounts,Et=k._multiDrawCount,ii=Ue?ee.get(Ue).bytesPerElement:1,Zs=Ge.get(Y).currentProgram.getUniforms();for(let On=0;On<Et;On++)Zs.setValue(N,"_gl_DrawID",On),_t.render(He[On]/ii,fn[On])}else if(k.isInstancedMesh)_t.renderInstances(St,Ht,k.count);else if(q.isInstancedBufferGeometry){let He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,fn=Math.min(q.instanceCount,He);_t.renderInstances(St,Ht,fn)}else _t.render(St,Ht)};function xt(A,O,q){A.transparent===!0&&A.side===je&&A.forceSinglePass===!1?(A.side=mt,A.needsUpdate=!0,la(A,O,q),A.side=Ei,A.needsUpdate=!0,la(A,O,q),A.side=je):la(A,O,q)}this.compile=function(A,O,q=null){q===null&&(q=A),p=gt.get(q),p.init(O),_.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==q&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Y=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Ie=fe[we];xt(Ie,q,k),Y.add(Ie)}else xt(fe,q,k),Y.add(fe)}),_.pop(),p=null,Y},this.compileAsync=function(A,O,q=null){let Y=this.compile(A,O,q);return new Promise(k=>{function fe(){if(Y.forEach(function(we){Ge.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){k(A);return}setTimeout(fe,10)}Be.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Un=null;function Ii(A){Un&&Un(A)}function $0(){ys.stop()}function K0(){ys.start()}let ys=new Sd;ys.setAnimationLoop(Ii),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(A){Un=A,K.setAnimationLoop(A),A===null?ys.stop():ys.start()},K.addEventListener("sessionstart",$0),K.addEventListener("sessionend",K0),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,O,R),p=gt.get(A,_.length),p.init(O),_.push(p),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),xe.setFromProjectionMatrix(Z),j=this.localClippingEnabled,X=ue.init(this.clippingPlanes,j),x=Ae.get(A,m.length),x.init(),m.push(x),K.enabled===!0&&K.isPresenting===!0){let fe=g.xr.getDepthSensingMesh();fe!==null&&Ac(fe,O,-1/0,g.sortObjects)}Ac(A,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(G,ce),Me=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Me&&Ze.addToRenderList(x,A),this.info.render.frame++,X===!0&&ue.beginShadows();let q=p.state.shadowsArray;Re.render(q,A,O),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=x.opaque,k=x.transmissive;if(p.setupLights(),O.isArrayCamera){let fe=O.cameras;if(k.length>0)for(let we=0,Ie=fe.length;we<Ie;we++){let Ue=fe[we];J0(Y,k,A,Ue)}Me&&Ze.render(A);for(let we=0,Ie=fe.length;we<Ie;we++){let Ue=fe[we];Z0(x,A,Ue,Ue.viewport)}}else k.length>0&&J0(Y,k,A,O),Me&&Ze.render(A),Z0(x,A,O);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(g,A,O),Rt.resetDefaultState(),I=-1,U=null,_.pop(),_.length>0?(p=_[_.length-1],X===!0&&ue.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ac(A,O,q,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){Y&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);let we=Q.update(A),Ie=A.material;Ie.visible&&x.push(A,we,Ie,q,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){let we=Q.update(A),Ie=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),te.copy(we.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Ie)){let Ue=we.groups;for(let $e=0,Ke=Ue.length;$e<Ke;$e++){let Fe=Ue[$e],St=Ie[Fe.materialIndex];St&&St.visible&&x.push(A,we,St,q,te.z,Fe)}}else Ie.visible&&x.push(A,we,Ie,q,te.z,null)}}let fe=A.children;for(let we=0,Ie=fe.length;we<Ie;we++)Ac(fe[we],O,q,Y)}function Z0(A,O,q,Y){let k=A.opaque,fe=A.transmissive,we=A.transparent;p.setupLightsView(q),X===!0&&ue.setGlobalState(g.clippingPlanes,q),Y&&Ve.viewport(y.copy(Y)),k.length>0&&aa(k,O,q),fe.length>0&&aa(fe,O,q),we.length>0&&aa(we,O,q),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function J0(A,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ds:ci,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));let fe=p.state.transmissionRenderTarget[Y.id],we=Y.viewport||y;fe.setSize(we.z,we.w);let Ie=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(P),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear(),Me&&Ze.render(q);let Ue=g.toneMapping;g.toneMapping=_i;let $e=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),X===!0&&ue.setGlobalState(g.clippingPlanes,Y),aa(A,q,Y),C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Fe=0,St=O.length;Fe<St;Fe++){let It=O[Fe],Ht=It.object,Hn=It.geometry,_t=It.material,He=It.group;if(_t.side===je&&Ht.layers.test(Y.layers)){let fn=_t.side;_t.side=mt,_t.needsUpdate=!0,j0(Ht,q,Y,Hn,_t,He),_t.side=fn,_t.needsUpdate=!0,Ke=!0}}Ke===!0&&(C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe))}g.setRenderTarget(Ie),g.setClearColor(P,L),$e!==void 0&&(Y.viewport=$e),g.toneMapping=Ue}function aa(A,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,fe=A.length;k<fe;k++){let we=A[k],Ie=we.object,Ue=we.geometry,$e=Y===null?we.material:Y,Ke=we.group;Ie.layers.test(q.layers)&&j0(Ie,O,q,Ue,$e,Ke)}}function j0(A,O,q,Y,k,fe){A.onBeforeRender(g,O,q,Y,k,fe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(g,O,q,Y,A,fe),k.transparent===!0&&k.side===je&&k.forceSinglePass===!1?(k.side=mt,k.needsUpdate=!0,g.renderBufferDirect(q,O,Y,k,A,fe),k.side=Ei,k.needsUpdate=!0,g.renderBufferDirect(q,O,Y,k,A,fe),k.side=je):g.renderBufferDirect(q,O,Y,k,A,fe),A.onAfterRender(g,O,q,Y,k,fe)}function la(A,O,q){O.isScene!==!0&&(O=me);let Y=Ge.get(A),k=p.state.lights,fe=p.state.shadowsArray,we=k.state.version,Ie=Ne.getParameters(A,k.state,fe,O,q),Ue=Ne.getProgramCacheKey(Ie),$e=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?W:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",pt),$e=new Map,Y.programs=$e);let Ke=$e.get(Ue);if(Ke!==void 0){if(Y.currentProgram===Ke&&Y.lightsStateVersion===we)return ef(A,Ie),Ke}else Ie.uniforms=Ne.getUniforms(A),A.onBeforeCompile(Ie,g),Ke=Ne.acquireProgram(Ie,Ue),$e.set(Ue,Ke),Y.uniforms=Ie.uniforms;let Fe=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),ef(A,Ie),Y.needsLights=Dm(A),Y.lightsStateVersion=we,Y.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ke,Y.uniformsList=null,Ke}function Q0(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=yr.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ef(A,O){let q=Ge.get(A);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Um(A,O,q,Y,k){O.isScene!==!0&&(O=me),C.resetTextureUnits();let fe=O.fog,we=Y.isMeshStandardMaterial?O.environment:null,Ie=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bi,Ue=(Y.isMeshStandardMaterial?W:w).get(Y.envMap||we),$e=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!q.morphAttributes.position,St=!!q.morphAttributes.normal,It=!!q.morphAttributes.color,Ht=_i;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=g.toneMapping);let Hn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=Hn!==void 0?Hn.length:0,He=Ge.get(Y),fn=p.state.lights;if(X===!0&&(j===!0||A!==U)){let Yn=A===U&&Y.id===I;ue.setState(Y,A,Yn)}let Et=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==fn.state.version||He.outputColorSpace!==Ie||k.isBatchedMesh&&He.batching===!1||!k.isBatchedMesh&&He.batching===!0||k.isBatchedMesh&&He.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&He.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&He.instancing===!1||!k.isInstancedMesh&&He.instancing===!0||k.isSkinnedMesh&&He.skinning===!1||!k.isSkinnedMesh&&He.skinning===!0||k.isInstancedMesh&&He.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&He.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&He.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&He.instancingMorph===!1&&k.morphTexture!==null||He.envMap!==Ue||Y.fog===!0&&He.fog!==fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ue.numPlanes||He.numIntersection!==ue.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==Ke||He.morphTargets!==Fe||He.morphNormals!==St||He.morphColors!==It||He.toneMapping!==Ht||He.morphTargetsCount!==_t)&&(Et=!0):(Et=!0,He.__version=Y.version);let ii=He.currentProgram;Et===!0&&(ii=la(Y,O,k));let Zs=!1,On=!1,Rc=!1,Vt=ii.getUniforms(),Xi=He.uniforms;if(Ve.useProgram(ii.program)&&(Zs=!0,On=!0,Rc=!0),Y.id!==I&&(I=Y.id,On=!0),Zs||U!==A){nt.reverseDepthBuffer?(de.copy(A.projectionMatrix),Tv(de),Av(de),Vt.setValue(N,"projectionMatrix",de)):Vt.setValue(N,"projectionMatrix",A.projectionMatrix),Vt.setValue(N,"viewMatrix",A.matrixWorldInverse);let Yn=Vt.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,$.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Vt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Vt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,On=!0,Rc=!0)}if(k.isSkinnedMesh){Vt.setOptional(N,k,"bindMatrix"),Vt.setOptional(N,k,"bindMatrixInverse");let Yn=k.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Vt.setValue(N,"boneTexture",Yn.boneTexture,C))}k.isBatchedMesh&&(Vt.setOptional(N,k,"batchingTexture"),Vt.setValue(N,"batchingTexture",k._matricesTexture,C),Vt.setOptional(N,k,"batchingIdTexture"),Vt.setValue(N,"batchingIdTexture",k._indirectTexture,C),Vt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&Vt.setValue(N,"batchingColorTexture",k._colorsTexture,C));let Cc=q.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0)&&Je.update(k,q,ii),(On||He.receiveShadow!==k.receiveShadow)&&(He.receiveShadow=k.receiveShadow,Vt.setValue(N,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xi.envMap.value=Ue,Xi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Xi.envMapIntensity.value=O.environmentIntensity),On&&(Vt.setValue(N,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&Lm(Xi,Rc),fe&&Y.fog===!0&&ye.refreshFogUniforms(Xi,fe),ye.refreshMaterialUniforms(Xi,Y,J,F,p.state.transmissionRenderTarget[A.id]),yr.upload(N,Q0(He),Xi,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(yr.upload(N,Q0(He),Xi,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Vt.setValue(N,"center",k.center),Vt.setValue(N,"modelViewMatrix",k.modelViewMatrix),Vt.setValue(N,"normalMatrix",k.normalMatrix),Vt.setValue(N,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Yn=Y.uniformsGroups;for(let Pc=0,Nm=Yn.length;Pc<Nm;Pc++){let tf=Yn[Pc];H.update(tf,ii),H.bind(tf,ii)}}return ii}function Lm(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Dm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,O,q){Ge.get(A.texture).__webglTexture=O,Ge.get(A.depthTexture).__webglTexture=q;let Y=Ge.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let q=Ge.get(A);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,q=0){R=A,b=O,T=q;let Y=!0,k=null,fe=!1,we=!1;if(A){let Ue=Ge.get(A);if(Ue.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Ue.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ue.__hasExternalTextures)C.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Fe=A.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&Ge.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);let Ke=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[O])?k=Ke[O][q]:k=Ke[O],fe=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?k=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[q]:k=Ke,y.copy(A.viewport),M.copy(A.scissor),D=A.scissorTest}else y.copy(re).multiplyScalar(J).floor(),M.copy(he).multiplyScalar(J).floor(),D=ze;if(Ve.bindFramebuffer(N.FRAMEBUFFER,k)&&Y&&Ve.drawBuffers(A,k),Ve.viewport(y),Ve.scissor(M),Ve.setScissorTest(D),fe){let Ue=Ge.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,q)}else if(we){let Ue=Ge.get(A.texture),$e=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,$e)}I=-1},this.readRenderTargetPixels=function(A,O,q,Y,k,fe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){Ve.bindFramebuffer(N.FRAMEBUFFER,Ie);try{let Ue=A.texture,$e=Ue.format,Ke=Ue.type;if(!nt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&q>=0&&q<=A.height-k&&N.readPixels(O,q,Y,k,Qe.convert($e),Qe.convert(Ke),fe)}finally{let Ue=R!==null?Ge.get(R).__webglFramebuffer:null;Ve.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,O,q,Y,k,fe,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){let Ue=A.texture,$e=Ue.format,Ke=Ue.type;if(!nt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-Y&&q>=0&&q<=A.height-k){Ve.bindFramebuffer(N.FRAMEBUFFER,Ie);let Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(O,q,Y,k,Qe.convert($e),Qe.convert(Ke),0);let St=R!==null?Ge.get(R).__webglFramebuffer:null;Ve.bindFramebuffer(N.FRAMEBUFFER,St);let It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sv(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(Fe),N.deleteSync(It),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,q=0){A.isTexture!==!0&&(Ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-q),k=Math.floor(A.image.width*Y),fe=Math.floor(A.image.height*Y),we=O!==null?O.x:0,Ie=O!==null?O.y:0;C.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,we,Ie,k,fe),Ve.unbindTexture()},this.copyTextureToTexture=function(A,O,q=null,Y=null,k=0){A.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,q=null);let fe,we,Ie,Ue,$e,Ke;q!==null?(fe=q.max.x-q.min.x,we=q.max.y-q.min.y,Ie=q.min.x,Ue=q.min.y):(fe=A.image.width,we=A.image.height,Ie=0,Ue=0),Y!==null?($e=Y.x,Ke=Y.y):($e=0,Ke=0);let Fe=Qe.convert(O.format),St=Qe.convert(O.type);C.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let It=N.getParameter(N.UNPACK_ROW_LENGTH),Ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Hn=N.getParameter(N.UNPACK_SKIP_PIXELS),_t=N.getParameter(N.UNPACK_SKIP_ROWS),He=N.getParameter(N.UNPACK_SKIP_IMAGES),fn=A.isCompressedTexture?A.mipmaps[k]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,fn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,$e,Ke,fe,we,Fe,St,fn.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,$e,Ke,fn.width,fn.height,Fe,fn.data):N.texSubImage2D(N.TEXTURE_2D,k,$e,Ke,fe,we,Fe,St,fn),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,_t),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He),k===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(A,O,q=null,Y=null,k=0){A.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0);let fe,we,Ie,Ue,$e,Ke,Fe,St,It,Ht=A.isCompressedTexture?A.mipmaps[k]:A.image;q!==null?(fe=q.max.x-q.min.x,we=q.max.y-q.min.y,Ie=q.max.z-q.min.z,Ue=q.min.x,$e=q.min.y,Ke=q.min.z):(fe=Ht.width,we=Ht.height,Ie=Ht.depth,Ue=0,$e=0,Ke=0),Y!==null?(Fe=Y.x,St=Y.y,It=Y.z):(Fe=0,St=0,It=0);let Hn=Qe.convert(O.format),_t=Qe.convert(O.type),He;if(O.isData3DTexture)C.setTexture3D(O,0),He=N.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)C.setTexture2DArray(O,0),He=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let fn=N.getParameter(N.UNPACK_ROW_LENGTH),Et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=N.getParameter(N.UNPACK_SKIP_PIXELS),Zs=N.getParameter(N.UNPACK_SKIP_ROWS),On=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(He,k,Fe,St,It,fe,we,Ie,Hn,_t,Ht.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(He,k,Fe,St,It,fe,we,Ie,Hn,Ht.data):N.texSubImage3D(He,k,Fe,St,It,fe,we,Ie,Hn,_t,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,fn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,On),k===0&&O.generateMipmaps&&N.generateMipmap(He),Ve.unbindTexture()},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ve.unbindTexture()},this.resetState=function(){b=0,T=0,R=null,Ve.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===qu?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===_l?"display-p3":"srgb"}},al=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},rs=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zn=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new S,ll=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new We(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,uo=new S,fr=new S,dr=new S,pr=new se,fo=new se,Pd=new tt,Pa=new S,po=new S,Ia=new S,Jf=new se,lh=new se,jf=new se,En=class extends Gt{constructor(e=new pn){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mu(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new ll(n,3,0,!1)),ur.setAttribute("uv",new ll(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-dr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ua(Pa.set(-.5,-.5,0),dr,a,fr,i,r),Ua(po.set(.5,-.5,0),dr,a,fr,i,r),Ua(Ia.set(.5,.5,0),dr,a,fr,i,r),Jf.set(0,0),lh.set(1,0),jf.set(1,1);let o=e.ray.intersectTriangle(Pa,po,Ia,!1,uo);if(o===null&&(Ua(po.set(-.5,.5,0),dr,a,fr,i,r),lh.set(0,1),o=e.ray.intersectTriangle(Pa,Ia,po,!1,uo),o===null))return;let l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||t.push({distance:l,point:uo.clone(),uv:Qi.getInterpolation(uo,Pa,po,Ia,Jf,lh,jf,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ua(s,e,t,n,i,r){pr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(fo.x=r*pr.x-i*pr.y,fo.y=i*pr.x+r*pr.y):fo.copy(pr),s.copy(e),s.x+=fo.x,s.y+=fo.y,s.applyMatrix4(Pd)}var wo=class extends _n{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ln,h=Ln,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ut=class extends We{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new tt,Qf=new tt,La=[],ed=new Bi,My=new tt,mo=new z,vo=new is,Wt=class extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ut(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,My)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ed.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),vo.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mr),Qf.multiplyMatrices(n,mr),mo.matrixWorld=Qf,mo.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ut(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(i*this.count),i,this.count,Bu,yi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cn=class extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new tt,vu=new Qa,Da=new is,Na=new S,bt=class extends Gt{constructor(e=new qe,t=new Cn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;td.copy(i).invert(),vu.copy(e.ray).applyMatrix4(td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,x=d;v<x;v++){let p=c.getX(v);Na.fromBufferAttribute(u,p),nd(Na,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,x=d;v<x;v++)Na.fromBufferAttribute(u,v),nd(Na,v,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nd(s,e,t,n,i,r,a){let o=vu.distanceSqToPoint(s);if(o<t){let l=new S;vu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jn=class extends _n{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new se:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],a=[],o=new S,l=new tt;for(let d=0;d<=e;d++){let v=d/e;i[d]=this.getTangentAt(v,new S)}r[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(dn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(dn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],d*v)),a[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cl=class extends hi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gu=class extends cl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Fa=new S,ch=new Yu,hh=new Yu,uh=new Yu,Vn=class extends hi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Fa.subVectors(i[0],i[1]).add(i[0]),c=Fa);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),v<1e-4&&(v=x),p<1e-4&&(p=x),ch.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,p),hh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,p),uh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,p)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),uh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ch.calc(l),hh.calc(l),uh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function by(s,e){let t=1-s;return t*t*e}function wy(s,e){return 2*(1-s)*s*e}function Sy(s,e){return s*s*e}function _o(s,e,t,n){return by(s,e)+wy(s,t)+Sy(s,n)}function Ty(s,e){let t=1-s;return t*t*t*e}function Ay(s,e){let t=1-s;return 3*t*t*s*e}function Ry(s,e){return 3*(1-s)*s*s*e}function Cy(s,e){return s*s*s*e}function Eo(s,e,t,n,i){return Ty(s,e)+Ay(s,t)+Ry(s,n)+Cy(s,i)}var xu=class extends hi{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,r.x,a.x,o.x),Eo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yu=class extends hi{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Eo(e,i.x,r.x,a.x,o.x),Eo(e,i.y,r.y,a.y,o.y),Eo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_u=class extends hi{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends hi{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mu=class extends hi{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_o(e,i.x,r.x,a.x),_o(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends hi{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_o(e,i.x,r.x,a.x),_o(e,i.y,r.y,a.y),_o(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bu=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(id(o,l.x,c.x,h.x,u.x),id(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Py=Object.freeze({__proto__:null,ArcCurve:gu,CatmullRomCurve3:Vn,CubicBezierCurve:xu,CubicBezierCurve3:yu,EllipseCurve:cl,LineCurve:_u,LineCurve3:Eu,QuadraticBezierCurve:Mu,QuadraticBezierCurve3:hl,SplineCurve:bu});var ul=class s extends qe{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=dn(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,f=new se,d=new S,v=new S,x=new S,p=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(v)}for(let _=0;_<=t;_++){let g=n+_*h*i,E=Math.sin(g),b=Math.cos(g);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*E,u.y=e[T].y,u.z=e[T].x*b,a.push(u.x,u.y,u.z),f.x=_/t,f.y=T/(e.length-1),o.push(f.x,f.y);let R=l[3*T+0]*E,I=l[3*T+1],U=l[3*T+0]*b;c.push(R,I,U)}}for(let _=0;_<t;_++)for(let g=0;g<e.length-1;g++){let E=g+_*e.length,b=E,T=E+e.length,R=E+e.length+1,I=E+1;r.push(b,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var fl=class s extends qe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new S,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class s extends qe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],v=0,x=[],p=n/2,m=0;_(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function _(){let E=new S,b=new S,T=0,R=(t-e)/n;for(let I=0;I<=r;I++){let U=[],y=I/r,M=y*(t-e)+e;for(let D=0;D<=i;D++){let P=D/i,L=P*l+o,B=Math.sin(L),F=Math.cos(L);b.x=M*B,b.y=-y*n+p,b.z=M*F,u.push(b.x,b.y,b.z),E.set(B,R,F).normalize(),f.push(E.x,E.y,E.z),d.push(P,1-y),U.push(v++)}x.push(U)}for(let I=0;I<i;I++)for(let U=0;U<r;U++){let y=x[U][I],M=x[U+1][I],D=x[U+1][I+1],P=x[U][I+1];e>0&&(h.push(y,M,P),T+=3),t>0&&(h.push(M,D,P),T+=3)}c.addGroup(m,T,0),m+=T}function g(E){let b=v,T=new se,R=new S,I=0,U=E===!0?e:t,y=E===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),v++;let M=v;for(let D=0;D<=i;D++){let L=D/i*l+o,B=Math.cos(L),F=Math.sin(L);R.x=U*F,R.y=p*y,R.z=U*B,u.push(R.x,R.y,R.z),f.push(0,y,0),T.x=B*.5+.5,T.y=F*.5*y+.5,d.push(T.x,T.y),v++}for(let D=0;D<i;D++){let P=b+D,L=M+D;E===!0?h.push(L,L+1,P):h.push(L+1,L,P),I+=3}c.addGroup(m,I,E===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dl=class s extends Zt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pl=class s extends qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let g=new S,E=new S,b=new S;for(let T=0;T<t.length;T+=3)d(t[T+0],g),d(t[T+1],E),d(t[T+2],b),l(g,E,b,_)}function l(_,g,E,b){let T=b+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let U=_.clone().lerp(E,I/T),y=g.clone().lerp(E,I/T),M=T-I;for(let D=0;D<=M;D++)D===0&&I===T?R[I][D]=U:R[I][D]=U.clone().lerp(y,D/M)}for(let I=0;I<T;I++)for(let U=0;U<2*(T-I)-1;U++){let y=Math.floor(U/2);U%2===0?(f(R[I][y+1]),f(R[I+1][y]),f(R[I][y])):(f(R[I][y+1]),f(R[I+1][y+1]),f(R[I+1][y]))}}function c(_){let g=new S;for(let E=0;E<r.length;E+=3)g.x=r[E+0],g.y=r[E+1],g.z=r[E+2],g.normalize().multiplyScalar(_),r[E+0]=g.x,r[E+1]=g.y,r[E+2]=g.z}function h(){let _=new S;for(let g=0;g<r.length;g+=3){_.x=r[g+0],_.y=r[g+1],_.z=r[g+2];let E=p(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;a.push(E,1-b)}v(),u()}function u(){for(let _=0;_<a.length;_+=6){let g=a[_+0],E=a[_+2],b=a[_+4],T=Math.max(g,E,b),R=Math.min(g,E,b);T>.9&&R<.1&&(g<.2&&(a[_+0]+=1),E<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,g){let E=_*3;g.x=e[E+0],g.y=e[E+1],g.z=e[E+2]}function v(){let _=new S,g=new S,E=new S,b=new S,T=new se,R=new se,I=new se;for(let U=0,y=0;U<r.length;U+=9,y+=6){_.set(r[U+0],r[U+1],r[U+2]),g.set(r[U+3],r[U+4],r[U+5]),E.set(r[U+6],r[U+7],r[U+8]),T.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),b.copy(_).add(g).add(E).divideScalar(3);let M=p(b);x(T,y+0,_,M),x(R,y+2,g,M),x(I,y+4,E,M)}}function x(_,g,E,b){b<0&&_.x===1&&(a[g]=_.x-1),E.x===0&&E.z===0&&(a[g]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var ml=class s extends pl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},vl=class s extends pl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Tr=class s extends qe{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new S,v=new se;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<i;x++){let p=x*(n+1);for(let m=0;m<n;m++){let _=m+p,g=_,E=_+n+1,b=_+n+2,T=_+1;o.push(g,E,T),o.push(E,b,T)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var nn=class s extends qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,f=new S,d=[],v=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],g=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let T=b/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+g*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(T+E,1-g),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let g=h[m][_+1],E=h[m][_],b=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&d.push(g,E,T),(m!==n-1||l<Math.PI)&&d.push(E,b,T)}this.setIndex(d),this.setAttribute("position",new Ye(v,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var os=class s extends qe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=n;d++)for(let v=0;v<=i;v++){let x=v/i*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=i;v++){let x=(i+1)*d+v-1,p=(i+1)*(d-1)+v-1,m=(i+1)*(d-1)+v,_=(i+1)*d+v;a.push(x,p,_),a.push(p,m,_)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ui=class s extends qe{constructor(e=new hl(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new se,h=new S,u=[],f=[],d=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function x(){for(let g=0;g<t;g++)p(g);p(r===!1?t:0),_(),m()}function p(g){h=e.getPointAt(g/t,h);let E=a.normals[g],b=a.binormals[g];for(let T=0;T<=i;T++){let R=T/i*Math.PI*2,I=Math.sin(R),U=-Math.cos(R);l.x=U*E.x+I*b.x,l.y=U*E.y+I*b.y,l.z=U*E.z+I*b.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let g=1;g<=t;g++)for(let E=1;E<=i;E++){let b=(i+1)*(g-1)+(E-1),T=(i+1)*g+(E-1),R=(i+1)*g+E,I=(i+1)*(g-1)+E;v.push(b,T,I),v.push(T,R,I)}}function _(){for(let g=0;g<=t;g++)for(let E=0;E<=i;E++)c.x=g/t,c.y=E/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Py[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var lt=class extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ha(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Iy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ar=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wu=class extends Ar{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:of,endingEnd:of}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case af:r=e,o=2*t-n;break;case lf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case af:a=e,l=2*n-t;break;case lf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),x=v*v,p=x*v,m=-f*p+2*f*x-f*v,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*v+1,g=(-1-d)*p+(1.5+d)*x+.5*v,E=d*p-d*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+_*a[c+b]+g*a[l+b]+E*a[u+b];return r}},Su=class extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Tu=class extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Jh:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Jh;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Iy(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let v=0;v!==n;++v){let x=t[u+v];if(x!==t[f+v]||x!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Jh;var Is=class extends fi{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Wa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Au=class extends fi{};Au.prototype.ValueTypeName="color";var Ru=class extends fi{};Ru.prototype.ValueTypeName="number";var Cu=class extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},gl=class extends fi{InterpolantFactoryMethodLinear(e){return new Cu(this.times,this.values,this.getValueSize(),e)}};gl.prototype.ValueTypeName="quaternion";gl.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends fi{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Wa;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Pu=class extends fi{};Pu.prototype.ValueTypeName="vector";var Iu=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],v=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null}}},Uy=new Iu,Uu=class{constructor(e){this.manager=e!==void 0?e:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xl=class extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fh=new tt,sd=new S,rd=new S,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rd),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lu=class extends So{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ka*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},as=class extends Ls{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},od=new tt,go=new S,dh=new S,Du=class extends So{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),n.position.copy(go),dh.copy(n.position),dh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dh),n.updateMatrixWorld(),i.makeTranslation(-go.x,-go.y,-go.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}},Pn=class extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nu=class extends So{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Nu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cr=class extends Ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sn=class extends qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var $u="\\[\\]\\.:\\/",Ly=new RegExp("["+$u+"]","g"),Ku="[^"+$u+"]",Dy="[^"+$u.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Ku),Fy=/(WCOD+)?/.source.replace("WCOD",Dy),Hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),ky=new RegExp("^"+Ny+Fy+Hy+Oy+"$"),zy=["material","materials","bones","map"],Fu=class{constructor(e,t,n){let i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){let t=ky.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Fu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);var Ml=class{constructor(e){this.el=e,this.t=0,this.last=performance.now(),this.frozen=null,this.fallback=!1,this.running=!1}freeze(e){this.frozen=e,this.t=e}get playing(){return this.frozen!==null?!1:this.fallback?this.running:!this.el.paused&&!this.el.ended}tick(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.1);if(this.last=e,this.frozen!==null)return this.t=this.frozen,1/60;if(this.fallback)return this.running&&(this.t+=t),t;let n=this.el;if(!n.paused&&!n.ended){let i=this.t+t*n.playbackRate,r=n.currentTime-i;this.t=Math.abs(r)>.08?n.currentTime:i+r*.1}else this.t=n.currentTime;return t}};var kt=window.OLK_AUDIO||null;function Id(s){let e=atob(s),t=new Float32Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)/255;return t}var Zu=kt?kt.fps:60,mn=kt?kt.period:60/111.995,Ju=kt?kt.beat0:.095,Ud=kt?kt.bar0:Ju+2*mn,Ld=mn*4,Co=kt?kt.duration:252.03,Nd={},Fd={},wl=null;if(kt){for(let s in kt.ch){let e=Id(kt.ch[s]),t=new Float32Array(e.length+1);for(let n=0;n<e.length;n++)t[n+1]=t[n]+e[n]/Zu;Nd[s]=e,Fd[s]=t}wl=Id(kt.spec)}var Ro=kt&&kt.ev||{},bl=kt&&kt.evA||{};function Dd(s,e,t){if(!s)return 0;let n=e*t,i=Math.floor(n);if(i<0)return s[0];if(i>=s.length-1)return s[s.length-1];let r=n-i;return s[i]+(s[i+1]-s[i])*r}var ae={ok:!!kt,get(s,e){return Dd(Nd[s],e,Zu)},integral(s,e){return Dd(Fd[s],e,Zu)},spectrum(s,e){if(!wl)return 0;let t=kt.specBands,n=e*kt.specFps,i=Math.floor(n),r=n-i;return i=Math.max(0,Math.min(kt.specN-2,i)),wl[i*t+s]*(1-r)+wl[(i+1)*t+s]*r},specRow(s,e){for(let t=0;t<32;t++)e[t]=this.spectrum(t,s);return e},beat(s){return(s-Ju)/mn},bar(s){return(s-Ud)/Ld},beatPulse(s,e=6){let t=this.beat(s);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},barPulse(s,e=4){let t=this.bar(s);return t<0?0:Math.exp(-(t-Math.floor(t))*e)},beatTime(s){return Ju+s*mn},barTime(s){return Ud+s*Ld},events(s){return Ro[s]||[]},last(s,e){let t=Ro[s];if(!t||!t.length||t[0]>e)return-1;let n=0,i=t.length-1;for(;n<i;){let r=n+i+1>>1;t[r]<=e?n=r:i=r-1}return n},since(s,e){let t=this.last(s,e);return t<0?1/0:e-Ro[s][t]},amp(s,e){let t=this.last(s,e);return t<0?0:bl[s]?bl[s][t]:1},hitPulse(s,e,t=8){let n=this.last(s,e);return n<0?0:(bl[s]?bl[s][n]:1)*Math.exp(-(e-Ro[s][n])*t)},count(s,e,t){return Math.max(0,this.last(s,t)-this.last(s,e))},next(s,e){let t=Ro[s],n=this.last(s,e)+1;return t&&n<t.length?t[n]:1/0}};var Ee=`
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
`,Ir=`
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 pencil(float x){
  x = clamp(x, 0.0, 1.0) * 5.0;
  vec3 c0 = vec3(0.96,0.56,0.32), c1 = vec3(0.93,0.42,0.40), c2 = vec3(0.86,0.36,0.58),
       c3 = vec3(0.62,0.40,0.80), c4 = vec3(0.36,0.52,0.88), c5 = vec3(0.40,0.78,0.86);
  vec3 c = x < 1.0 ? mix(c0,c1,x) : x < 2.0 ? mix(c1,c2,x-1.0) : x < 3.0 ? mix(c2,c3,x-2.0) : x < 4.0 ? mix(c3,c4,x-3.0) : mix(c4,c5,x-4.0);
  return srgb2lin(c);
}
`,Hd=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ur=`
varying vec3 vCol; varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5; float r = dot(d, d) * 4.0;
  float a = exp(-r * 4.0) + 0.35 * exp(-r * 16.0);
  if (a * vA < 0.002) discard;
  gl_FragColor = vec4(vCol * a * vA, 1.0);
}
`;var ls=(s,e,t=!0)=>new Bn(s,e,{type:Ds,format:Rn,depthBuffer:t,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),Gn=(s,e,t={})=>new ne({vertexShader:Hd,fragmentShader:s,uniforms:e,depthTest:!1,depthWrite:!1,...t}),Po=class{constructor(e){this.r=e,this.cam=new ss(-1,1,1,-1,0,1),this.scene=new Zn,this.mesh=new z(new pe(2,2)),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}run(e,t,n=!0){this.mesh.material=e,this.r.setRenderTarget(t),n&&this.r.clear(),this.r.render(this.scene,this.cam)}},ju="vec3 tap4(sampler2D t, vec2 uv, vec2 o){ return (texture2D(t, uv+o*vec2(-1.,-1.)).rgb + texture2D(t, uv+o*vec2(1.,-1.)).rgb + texture2D(t, uv+o*vec2(-1.,1.)).rgb + texture2D(t, uv+o*vec2(1.,1.)).rgb) * 0.25; }",By=`uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr, uKnee; varying vec2 vUv; ${ju}
void main(){ vec3 c = tap4(tSrc, vUv, uTexel); float br = max(c.r, max(c.g, c.b));
  float s = clamp(br - uThr + uKnee, 0.0, 2.0 * uKnee); s = s * s / (4.0 * uKnee + 1e-4);
  gl_FragColor = vec4(min(c * max(s, br - uThr) / max(br, 1e-4), vec3(60.0)), 1.0); }`,Vy=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv; ${ju}
void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * 0.5 + tap4(tSrc, vUv, uTexel) * 0.5, 1.0); }`,Gy=`uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv; ${ju}
void main(){ vec2 o = uTexel; vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += (texture2D(tSrc, vUv + vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv + vec2(0., o.y)).rgb + texture2D(tSrc, vUv - vec2(0., o.y)).rgb) * 2.0;
  c += tap4(tSrc, vUv, o) * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0); }`,Wy=`uniform sampler2D tScene, tBloom; uniform vec2 uRes; uniform float uTime;
uniform float uExposure, uBloom, uSat, uContrast, uVig, uGrain, uCA, uLetter, uFlicker, uFadeB, uFadeW, uLeak, uScratch, uWeave, uTone, uShake, uPunch, uGlitch, uInvert, uScan, uRgb;
uniform vec3 uTint, uLift; varying vec2 vUv; ${Ee}
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
}`,Qu={exposure:1,bloom:.9,bloomThr:.8,sat:1,contrast:1.02,vig:.55,grain:.06,ca:.6,letter:0,flicker:0,fadeB:0,fadeW:0,leak:0,scratch:0,weave:0,tone:0,tint:[1,1,1],lift:[0,0,0],dust:.3,dustCol:[1,.85,.65],shake:0,punch:0,glitch:0,invert:0,scan:0,rgb:0},Sl=class{constructor(e){this.r=e,this.fs=new Po(e),this.levels=6;let t=()=>({tSrc:{value:null},uTexel:{value:new se}});this.pre=Gn(By,{...t(),uThr:{value:.8},uKnee:{value:.5}}),this.down=Gn(Vy,t()),this.up=Gn(Gy,{...t(),tAdd:{value:null}});let n={tScene:{value:null},tBloom:{value:null},uRes:{value:new se},uTime:{value:0}};for(let i of["Exposure","Bloom","Sat","Contrast","Vig","Grain","CA","Letter","Flicker","FadeB","FadeW","Leak","Scratch","Weave","Tone","Shake","Punch","Glitch","Invert","Scan","Rgb"])n["u"+i]={value:0};n.uTint={value:new S(1,1,1)},n.uLift={value:new S},this.final=Gn(Wy,n),this.A=null}resize(e,t){[this.A,this.B,this.M,...this.dn||[],...this.upT||[]].forEach(r=>r&&r.dispose()),this.w=e,this.h=t,this.A=ls(e,t),this.B=ls(e,t),this.M=ls(e,t),this.dn=[],this.upT=[];let n=e>>1,i=t>>1;for(let r=0;r<this.levels;r++)this.dn.push(ls(Math.max(n,2),Math.max(i,2),!1)),this.upT.push(ls(Math.max(n,2),Math.max(i,2),!1)),n>>=1,i>>=1}bloom(e,t){let{pre:n,down:i,up:r,dn:a,upT:o,fs:l}=this;n.uniforms.tSrc.value=e.texture,n.uniforms.uThr.value=t,n.uniforms.uTexel.value.set(1/e.width,1/e.height),l.run(n,a[0]);for(let h=1;h<a.length;h++)i.uniforms.tSrc.value=a[h-1].texture,i.uniforms.uTexel.value.set(1/a[h-1].width,1/a[h-1].height),l.run(i,a[h]);let c=a[a.length-1];for(let h=a.length-2;h>=0;h--)r.uniforms.tSrc.value=c.texture,r.uniforms.tAdd.value=a[h].texture,r.uniforms.uTexel.value.set(1/c.width,1/c.height),l.run(r,o[h]),c=o[h];return c}composite(e,t,n,i,r){let a=this.bloom(e,t.bloomThr),o=this.final.uniforms;o.tScene.value=e.texture,o.tBloom.value=a.texture,o.uRes.value.set(i,r),o.uTime.value=n;let l={Exposure:"exposure",Bloom:"bloom",Sat:"sat",Contrast:"contrast",Vig:"vig",Grain:"grain",CA:"ca",Letter:"letter",Flicker:"flicker",FadeB:"fadeB",FadeW:"fadeW",Leak:"leak",Scratch:"scratch",Weave:"weave",Tone:"tone",Shake:"shake",Punch:"punch",Glitch:"glitch",Invert:"invert",Scan:"scan",Rgb:"rgb"};for(let c in l)o["u"+c].value=t[l[c]];o.uLetter.value=t.letter*Math.max(0,1-i/r/2.39),o.uTint.value.fromArray(t.tint),o.uLift.value.fromArray(t.lift),this.fs.run(this.final,null)}};var qy={fade:0,flash:1,dip:2,zoom:3,burn:4,shatter:5,iris:6,pencil:7,glitch:8,light:9,hex:10},Xy=`uniform sampler2D tA, tB; uniform float uP, uMode, uAspect, uTime, uAmt; uniform vec2 uC; varying vec2 vUv; ${Ee}
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
}`,Tl=class{constructor(){this.mat=Gn(Xy,{tA:{value:null},tB:{value:null},uP:{value:0},uMode:{value:0},uAspect:{value:1},uTime:{value:0},uAmt:{value:1},uC:{value:new se(.5,.5)}})}set(e,t,n,i,r,a,o=[.5,.5],l=1){let c=this.mat.uniforms;return c.tA.value=e.texture,c.tB.value=t.texture,c.uP.value=n,c.uMode.value=typeof i=="number"?i:qy[i]??0,c.uAspect.value=r,c.uTime.value=a,c.uC.value.set(o[0],o[1]),c.uAmt.value=l,this.mat}};var le=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),De=(s,e,t)=>s+(e-s)*t,ct=(s,e,t)=>le((s-e)/(t-e)),V=(s,e,t)=>{let n=ct(t,s,e);return n*n*(3-2*n)};var ve={inOut:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,out:s=>1-Math.pow(1-s,3),in:s=>s*s*s,outExpo:s=>s>=1?1:1-Math.pow(2,-10*s),inExpo:s=>s<=0?0:Math.pow(2,10*s-10),sine:s=>-(Math.cos(Math.PI*s)-1)/2,outBack:s=>1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2)};function ft(s){let e=s>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}var Lr=s=>{let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function Al(s,e,t=ve.sine){if(s<=e[0][0])return e[0].slice(1);for(let n=0;n<e.length-1;n++){let i=e[n],r=e[n+1];if(s<=r[0]){let a=t((s-i[0])/(r[0]-i[0])),o=[];for(let l=1;l<i.length;l++)o.push(i[l]+(r[l]-i[l])*a);return o}}return e[e.length-1].slice(1)}var Rl=s=>[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255];var l3=[[.96,.56,.32],[.93,.42,.4],[.86,.36,.58],[.62,.4,.8],[.36,.52,.88],[.4,.78,.86]].map(s=>s.map(e=>Math.pow(e,2.2)));var Yy=`attribute vec3 aSeed; uniform float uT, uAmt, uAspect, uH; uniform vec3 uCol, uWind;
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
}`,Cl=class{constructor(e=1400){let t=ft(99),n=new Float32Array(e*3);for(let a=0;a<n.length;a++)n[a]=t();let i=new qe;i.setAttribute("position",new We(new Float32Array(e*3),3)),i.setAttribute("aSeed",new We(n,3)),this.u={uT:{value:0},uAmt:{value:0},uAspect:{value:1.78},uH:{value:1080},uCol:{value:new S(1,.85,.65)},uWind:{value:new S(.004,.009,0)}};let r=new ne({vertexShader:Yy,fragmentShader:Ur,uniforms:this.u,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pe});this.pts=new bt(i,r),this.pts.frustumCulled=!1,this.scene=new Zn,this.scene.add(this.pts),this.cam=new Jt(50,1.78,.1,50)}render(e,t,n,i,r,a,o){if(i<.005)return;let l=this.u;l.uT.value=n,l.uAmt.value=i,l.uAspect.value=r/a,l.uH.value=a,o&&l.uCol.value.fromArray(o),e.setRenderTarget(t),e.render(this.scene,this.cam)}};var $y=new Set(["flash","dip","glitch","iris"]),Pl=class s{constructor(e){this.shots=e.slice().sort((n,i)=>n.start-i.start);let t=this.shots;for(let n=0;n<t.length;n++)t[n].end=n+1<t.length?t[n+1].start:1/0}index(e){let t=this.shots,n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;return n}static win(e){let t=e.tr.dur||0,n=e.tr.align??.5;return[e.start-t*n,e.start+t*(1-n)]}at(e){let t=this.shots,n=this.index(e);for(let i of[n+1,n]){let r=t[i];if(!r||i===0||!r.tr||r.tr.type==="cut")continue;let[a,o]=s.win(r);if(e>=a&&e<o)return{a:t[i-1],b:r,p:(e-a)/(o-a),tr:r.tr}}return{a:t[n],b:null,p:0,tr:null}}around(e,t=3){return this.shots.filter(n=>n.end>e-t&&n.start<e+t)}},e0=s=>({...Qu,...s});function Od(s,e,t,n){let i=$y.has(n)?t<.5?0:1:t*t*(3-2*t),r={};for(let a in Qu){let o=s[a],l=e[a];r[a]=Array.isArray(o)?o.map((c,h)=>c+(l[h]-c)*i):o+(l-o)*i}return r}var cs="Oh oh oh oh oh",Dr="I love you more than you\u2019ll ever know",Io="\u6211\u7231\u4F60\uFF0C\u8FDC\u6BD4\u4F60\u6240\u77E5\u9053\u7684\u66F4\u591A",Uo="\u3042\u306A\u305F\u304C\u601D\u3046\u3088\u308A\u305A\u3063\u3068\u3000\u3042\u306A\u305F\u3092\u611B\u3057\u3066\u308B",Lo="#ffe2b8",Ky="#dce6ff",wi="#ffcf8a",t0="#fff1ea",Nr=[[12.2,16.6,"Words & Music \u2014 Hikaru Utada","\u8BCD\u66F2\u3000\u5B87\u591A\u7530\u5149","credit",{y:.7},"\u4F5C\u8A5E\u30FB\u4F5C\u66F2\u3000\u5B87\u591A\u7530\u30D2\u30AB\u30EB"],[20.69,25,"\u521D\u3081\u3066\u306E\u30EB\u30FC\u30D6\u30EB\u306F","\u7B2C\u4E00\u6B21\u53BB\u5362\u6D6E\u5BAB","v",{x:.86},"My first time at the Louvre"],[23.01,25,"\u306A\u3093\u3066\u3053\u3068\u306F\u306A\u304B\u3063\u305F\u308F","\u4E5F\u4E0D\u8FC7\u5982\u6B64\u800C\u5DF2","v",{x:.79},"was nothing special at all"],[25.1,29.1,"\u79C1\u3060\u3051\u306E\u30E2\u30CA\u30EA\u30B6","\u53EA\u5C5E\u4E8E\u6211\u7684\u8499\u5A1C\u4E3D\u838E","v",{x:.22,c:Lo},"My very own Mona Lisa \u2014"],[26.94,29.1,"\u3082\u3046\u3068\u3063\u304F\u306B\u51FA\u4F1A\u3063\u3066\u305F\u304B\u3089","\u6211\u65E9\u5C31\u5DF2\u7ECF\u9047\u89C1\u4E86","v",{x:.15,c:Lo},"I had met her long before"],[29.37,33.55,"\u521D\u3081\u3066\u3042\u306A\u305F\u3092\u898B\u305F","\u7B2C\u4E00\u6B21\u89C1\u5230\u4F60\u7684","h",{x:.08,y:.7,c:Lo,in:"type"},"The day I first saw you,"],[31.16,33.55,"\u3042\u306E\u65E5\u52D5\u304D\u51FA\u3057\u305F\u6B6F\u8ECA","\u90A3\u4E00\u5929\uFF0C\u9F7F\u8F6E\u5F00\u59CB\u8F6C\u52A8","h",{x:.08,y:.83,c:Lo,in:"type"},"the gears began to turn"],[33.67,37.55,"\u6B62\u3081\u3089\u308C\u306A\u3044\u55AA\u5931\u306E\u4E88\u611F","\u65E0\u6CD5\u963B\u6B62\u7684\u3001\u5931\u53BB\u7684\u9884\u611F","center",{y:.78,c:Ky,out:"shatter"},"a foreboding of loss I cannot stop"],[38.02,47.6,"\u3082\u3046\u3044\u3063\u3071\u3044\u3042\u308B\u3051\u3069","\u867D\u7136\u5DF2\u7ECF\u6709\u5F88\u591A\u4E86","v",{x:.85},"We already have so many,"],[43.79,47.6,"\u3082\u3046\u4E00\u3064\u5897\u3084\u3057\u307E\u3057\u3087\u3046","\u90A3\u5C31\u518D\u6DFB\u4E00\u4E2A\u5427","v",{x:.78,c:Lo},"so let\u2019s make one more"],[47.75,52.2,"(Can you give me one last kiss?)","\uFF08\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F\uFF09","whisper",{},"\uFF08\u6700\u5F8C\u306E\u30AD\u30B9\u3092\u3000\u304F\u308C\u308B\uFF1F\uFF09"],[52.39,55.1,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[55.22,60.9,cs,"","oh",{}],[61.07,63.65,"\u5FD8\u308C\u305F\u304F\u306A\u3044\u3053\u3068","\u4E0D\u60F3\u5FD8\u8BB0\u7684\u4E8B","center",{y:.8},"Things I never want to forget"],[63.79,69.45,cs,"","oh",{}],[69.63,79.6,Dr,Io,"en",{rd:4.4,out:"dust",y:.66},Uo],[80.84,82.72,"\u300C\u5199\u771F\u306F\u82E6\u624B\u306A\u3093\u3060\u300D","\u201C\u6211\u4E0D\u592A\u559C\u6B22\u62CD\u7167\u201D","center",{y:.75,in:"type",out:"blur",mono:1},"\u201CI\u2019m not good with photos\u201D"],[82.78,84.85,"\u3067\u3082\u305D\u3093\u306A\u3082\u306E\u306F\u3044\u3089\u306A\u3044\u308F","\u53EF\u6211\u5E76\u4E0D\u9700\u8981\u90A3\u79CD\u4E1C\u897F","h",{x:.08,y:.8},"But I don\u2019t need things like that"],[84.92,89.15,"\u3042\u306A\u305F\u304C\u713C\u304D\u3064\u3044\u305F\u307E\u307E","\u4F60\u59CB\u7EC8\u70D9\u5370\u5728","v",{x:.85,in:"burn",c:wi},"You stay burned into"],[86.9,89.15,"\u79C1\u306E\u5FC3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u30FC","\u6211\u5FC3\u4E2D\u7684\u653E\u6620\u673A\u91CC","v",{x:.78,in:"burn",c:wi},"the projector of my heart"],[89.26,91.25,"\u5BC2\u3057\u304F\u306A\u3044\u3075\u308A\u3057\u3066\u305F","\u6211\u4E00\u76F4\u5047\u88C5\u5E76\u4E0D\u5BC2\u5BDE","cine",{},"I kept pretending I wasn\u2019t lonely"],[91.35,93.45,"\u307E\u3042 \u305D\u3093\u306A\u306E\u304A\u4E92\u3044\u69D8\u304B","\u561B\uFF0C\u8FD9\u70B9\u6211\u4EEC\u5F7C\u6B64\u5F7C\u6B64\u5427","cine",{},"Well, I guess we both did"],[93.57,95.5,"\u8AB0\u304B\u3092\u6C42\u3081\u308B\u3053\u3068\u306F","\u6E34\u6C42\u7740\u67D0\u4E2A\u4EBA","cine",{},"To long for someone"],[95.57,97.55,"\u5373\u3061\u50B7\u3064\u304F\u3053\u3068\u3060\u3063\u305F","\u5C31\u610F\u5473\u7740\u4F1A\u53D7\u4F24","cine",{out:"shatter"},"was to be hurt, all along"],[98.19,103.4,"Oh can you give me one last kiss?","\u80FD\u7ED9\u6211\u6700\u540E\u4E00\u4E2A\u543B\u5417\uFF1F","en",{rd:3.2,in:"burn",c:wi},"\u306D\u3048\u3000\u6700\u5F8C\u306B\u30AD\u30B9\u3092\u304F\u308C\u308B\uFF1F"],[103.72,107.9,"\u71C3\u3048\u308B\u3088\u3046\u306A\u30AD\u30B9\u3092\u3057\u3088\u3046","\u6765\u4E00\u4E2A\u71C3\u70E7\u822C\u7684\u543B\u5427","v",{x:.13,in:"burn",c:wi,out:"rise"},"Let\u2019s share a kiss that burns"],[108.05,112.3,"\u5FD8\u308C\u305F\u304F\u3066\u3082","\u5373\u4F7F\u60F3\u8981\u5FD8\u8BB0","v",{x:.13,c:wi,out:"dust"},"so that even if I tried to forget"],[112.44,115,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u307B\u3069","\u4E5F\u65E0\u6CD5\u5FD8\u8BB0","v",{x:.16,c:wi,out:"dust"},"I never could"],[115.19,120.85,cs,"","oh",{c:wi}],[121,123.65,Dr,Io,"en",{rd:2.4,c:wi,y:.66},Uo],[123.76,129.5,cs,"","oh",{c:wi}],[129.61,135.6,Dr,Io,"en",{rd:4.2,c:wi,out:"dust",y:.66},Uo],[149.52,154.9,"\u3082\u3046\u5206\u304B\u3063\u3066\u3044\u308B\u3088","\u5176\u5B9E\u6211\u65E9\u5C31\u660E\u767D\u4E86","center",{y:.86,c:t0},"I already know"],[155.05,159.45,"\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u3082","\u5373\u4F7F\u8FD9\u4E16\u754C\u8D70\u5230\u5C3D\u5934","center",{y:.86,c:t0},"even at the end of the world"],[159.63,165.9,"\u5E74\u3092\u3068\u3063\u3066\u3082","\u5373\u4F7F\u6211\u4EEC\u90FD\u5DF2\u8001\u53BB","center",{y:.86,c:t0,out:"dust"},"even when we grow old"],[166.14,168.6,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[168.71,170.6,cs,"","oh",{}],[170.67,175.35,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[175.47,181.1,cs,"","oh",{}],[181.25,184.75,Dr,Io,"en",{rd:2.8},Uo],[184.86,189.6,cs,"","oh",{}],[189.7,192.45,"\u5FD8\u308C\u3089\u308C\u306A\u3044\u4EBA","\u65E0\u6CD5\u5FD8\u8BB0\u7684\u4EBA","center",{y:.8},"The one I can\u2019t forget"],[192.56,198.15,cs,"","oh",{}],[198.3,207.5,Dr,Io,"en",{rd:4.6,rainbow:1,out:"dust"},Uo],[226.2,231.2,"\u5439\u3044\u3066\u3044\u3063\u305F\u98A8\u306E\u5F8C\u3092","\u8FFD\u968F\u7740\u90A3\u9635\u5439\u8FC7\u7684\u98CE","pencil",{x:.1,y:.2},"Chasing after the wind that blew by"],[230.57,237.8,"\u8FFD\u3044\u304B\u3051\u305F\u3000\u7729\u3057\u3044\u5348\u5F8C","\u8FFD\u9010\u7740\u7684\u3000\u90A3\u4E2A\u8000\u773C\u7684\u5348\u540E","pencil",{x:.1,y:.33},"that dazzling afternoon"]],kd=2*mn,zd=Nr.filter(s=>s[4]==="oh").flatMap(s=>[0,1,2,3,4].map(e=>s[0]+e*kd)),n0=Nr.filter(s=>s[2]===Dr).map(s=>s[0]),Bd=()=>kd;var Vd=`
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
`;var Zy={fade:.8,dust:1.5,shatter:.6,blur:.45,rise:1.2},Gd=[15239002,14643064,13000599,9201860,6062032,6207176].map(Rl),Jy=Rl(4011311),Wd=[1,.45,.12],qd=[1,.8,.45],Xd=[1,1,1],Yd=s=>Rl(parseInt(s.slice(1),16)),Fr=(s,e,t)=>s.map((n,i)=>n+(e[i]-n)*t),hs=(s,e)=>e===void 0?`rgb(${s.map(t=>Math.round(le(t)*255)).join(",")})`:`rgba(${s.map(t=>Math.round(le(t)*255)).join(",")},${e.toFixed(3)})`,Il=class{constructor(e){let t=document.createElement("style");t.textContent=Vd,document.head.appendChild(t),this.el=document.createElement("div"),this.el.id="lyr",e.appendChild(this.el),this.u=1,this.cineY=.93,this.enabled=!0,this.blend="",this.alpha="",this.ohCount=0,this.lines=Nr.map(n=>this.make(n)),this.resize()}make([e,t,n,i,r,a,o]){let l=document.createElement("div");l.className="ln l-"+r;let c=document.createElement("div");c.className="jp",l.appendChild(c);let h=["oh","en","whisper","credit"].includes(r),u=h?n.split(" "):Array.from(n).map(y=>y===" "?"\xA0":y),f=u.map((y,M)=>{let D=document.createElement("span");return D.textContent=y,c.appendChild(D),h&&r!=="oh"&&M<u.length-1&&c.appendChild(document.createTextNode(" ")),D}),d=[];if(r==="oh"){let y=this.ohCount++%2===1;f.forEach((M,D)=>{let P=Math.sin(D/4*Math.PI),L=.18+D*.16,B=y?.33-.06*P:.64+.06*P;d[D]=`left:${(L*100).toFixed(1)}%;top:${(B*100).toFixed(1)}%;`})}let v=null,x=null,p=null,m=null,_=(y,M)=>{let D=document.createElement("div");return D.className=y,M&&(D.textContent=M),D};if(i||o){v=_("tr"),v.style.opacity="1",x=_("rule"),v.appendChild(x);let y=r==="pencil"?null:Fr(a.c?Yd(a.c):[.957,.937,.902],[.93,.9,.86],.45);i&&(p=_("zh",i),v.appendChild(p),y&&(p.style.color=hs(y))),o&&(m=_("x "+(["en","whisper","credit"].includes(r)?"ja":"en"),o),v.appendChild(m),y&&(m.style.color=hs(y,r==="en"?.92:.78))),l.appendChild(v)}let g=l.style,E=a.x??.5,b=a.y??.5;r==="v"?(g.left=E*100+"%",g.top="15%"):r==="h"||r==="pencil"?(g.left=E*100+"%",g.top=b*100+"%"):r==="center"||r==="credit"?(g.left="50%",g.top=b*100+"%"):r==="en"?(g.left="50%",g.top=(a.y??.47)*100+"%"):r==="whisper"?(g.left="50%",g.top="82%"):r==="cine"&&(g.left="50%"),this.el.appendChild(l);let T=f.length,R=t-e,I=r==="oh"?Bd()*4:a.rd??(r==="credit"?.6:r==="whisper"?3:r==="pencil"?Math.min(R*.6,3.2):le(R*.5,.5,2.4)),U=a.out||"fade";return{t0:e,t1:t,el:l,spans:f,Z:v,R:x,ZH:p,X:m,style:r,o:a,bases:d,vis:!1,cache:[],lcache:"",zc:"",ut:f.map((y,M)=>e+(T>1?I*M/(T-1):0)),c:a.c?Yd(a.c):[.957,.937,.902],in:a.in||(r==="pencil"?"ink":r==="cine"?"type":"glow"),out:U,exitDur:Zy[U],fd:r==="pencil"?1:.7}}resize(){let e=innerWidth,t=innerHeight;this.u=Math.min(e/1920,t/1080),this.el.style.setProperty("--u",this.u+"px");let n=Math.max(0,1-e/t/2.39);this.cineY=n*t*.5>90*this.u?1-n/4:.9,this.lines.forEach(i=>{i.cache=[],i.lcache=""})}toggle(){this.enabled=!this.enabled}update(e,t=1){let n=e>224?"multiply":"screen";n!==this.blend&&(this.el.style.mixBlendMode=n,this.blend=n);let i=le(t).toFixed(3);i!==this.alpha&&(this.el.style.opacity=i,this.alpha=i);for(let r of this.lines){let a=this.enabled&&e>=r.t0-.05&&e<r.t1+r.exitDur;a!==r.vis&&(r.el.style.display=a?"block":"none",r.vis=a,r.cache=[],r.lcache=""),a&&this.frame(r,e)}}frame(e,t){let n=this.u,i=t-e.t0,r=t-e.t1,a=r>0?le(r/e.exitDur):0,o=ae.get("loud",t),l="",c=1,h=0;switch(e.style){case"v":l=`translate(-50%,${(i*3*n).toFixed(1)}px)`;break;case"h":l=`translate(${(i*3*n).toFixed(1)}px,-50%)`;break;case"center":case"credit":case"whisper":l=`translate(-50%,-50%) scale(${(1+i*.006).toFixed(4)})`;break;case"en":l=`translate(-50%,-50%) scale(${(.97+i*.005).toFixed(4)})`;break;case"cine":l="translate(-50%,-50%)";break;case"pencil":l="translate(0,-50%)";break}e.out==="fade"?c=1-ve.inOut(a):e.out==="blur"?(c=1-a,h=a*12*n,l+=` scale(${(1+a*.08).toFixed(3)})`):e.out==="rise"&&(c=1-ve.in(a),h=a*4*n,l+=` translateY(${(-a*50*n).toFixed(1)}px)`);let u=l+c.toFixed(3)+h.toFixed(1)+this.cineY;if(u!==e.lcache){e.lcache=u;let f=e.el.style;f.transform=l,f.opacity=c.toFixed(3),f.filter=h>.1?`blur(${h.toFixed(1)}px)`:"",e.style==="cine"&&(f.top=(this.cineY*100).toFixed(2)+"%")}if(e.Z){let f=1-le(r/.6),d=e.style==="pencil"?1:.9,v=ve.out(V(e.t0+.15,e.t0+1,t))*f,x=ve.out(V(e.t0+.5,e.t0+1.5,t))*f,p=v.toFixed(3)+x.toFixed(3);if(p!==e.zc){e.zc=p;let m=e.style==="v",_=m?"X":"Y",g=E=>`translate${_}(${((m?-1:1)*(1-E)*8*n).toFixed(1)}px)`;e.R.style.transform=`scale${m?"Y":"X"}(${v.toFixed(3)})`,e.R.style.opacity=(v*.9).toFixed(3),e.ZH&&(e.ZH.style.opacity=(v*d).toFixed(3),e.ZH.style.transform=g(v)),e.X&&(e.X.style.opacity=x.toFixed(3),e.X.style.transform=g(x))}}for(let f=0;f<e.spans.length;f++){let d=e.style==="oh"?this.ohUnit(e,f,t,n):this.unit(e,f,t,n,o,r);d!==e.cache[f]&&(e.cache[f]=d,e.spans[f].style.cssText=d)}}unit(e,t,n,i,r,a){let o=n-e.ut[t],l=e.spans.length;if(o<0)return"opacity:0";let c=le(o/e.fd),h=1,u=0,f=0,d=1,v=0,x=0,p=e.c,m=e.c,_=.55,g=14;switch(e.o.rainbow&&(m=Gd[t%6],p=Fr(m,Xd,.5)),e.in){case"type":{let b=Math.exp(-o*10);u=(Lr(t*13+Math.floor(n*40))-.5)*3*i*b,_=.4+b,g=6+16*b;break}case"burn":{let b=le(o/1.1);h=ve.out(le(o/.3)),p=b<.5?Fr(Wd,qd,b*2):Fr(qd,e.c,b*2-1),m=Wd,_=1-.55*b,g=10+26*(1-b),f=(1-c)*8*i;break}case"ink":{let b=ve.out(le(o/1.2));h=b,x=(1-b)*3*i,d=1.08-.08*b,p=Fr(Gd[t%6],Jy,V(.2,1.8,o)*.6),_=0;break}default:{let b=ve.out(c);h=b,x=(1-b)*9*i,f=(1-b)*12*i,_=.45+.6*(1-b),g=12+24*(1-b)}}if(e.in!=="ink"&&(_=_*(.8+.5*r)+Math.exp(-o*2.5)*.35),a>0&&e.out==="dust"){let b=le((a-t/l*e.exitDur*.45)/(e.exitDur*.55));h*=1-b,f-=(b*36+b*b*20)*i,u+=(Lr(t*7.3+e.t0)-.5)*50*i*b,x+=b*7*i,d*=1+b*.25}else if(a>0&&e.out==="shatter"){let b=le(a/e.exitDur),T=Lr(t*3.1+e.t0),R=Lr(t*5.7+1),I=Lr(t*9.2+2);u+=(T-.5)*240*i*b,f+=(-60*R+320*b)*b*i,v=(I-.5)*220*b,h*=1-b*b,d*=1-.3*b}let E=`opacity:${h.toFixed(3)};color:${hs(p)}`;if((u||f||d!==1||v)&&(E+=`;transform:translate(${u.toFixed(1)}px,${f.toFixed(1)}px) rotate(${v.toFixed(1)}deg) scale(${d.toFixed(3)})`),x>.15&&(E+=`;filter:blur(${x.toFixed(1)}px)`),_>.01){let b=Math.min(_,1);E+=`;text-shadow:0 0 ${(g*i).toFixed(1)}px ${hs(m,b)},0 0 ${(g*3*i).toFixed(1)}px ${hs(m,b*.35)}`}return E}ohUnit(e,t,n,i){let r=n-e.ut[t],a=e.bases[t];if(r<0)return a+"opacity:0";let o=ve.out(le(r/.5)),l=Math.exp(-r*4),c=e.c,h=V(0,.06,r)*(1-.5*V(.5,2.5,r))*(1-le((n-e.t1)/e.exitDur));return a+`opacity:${h.toFixed(3)};color:${hs(Fr(c,Xd,l*.5))};transform:translate(-50%,-50%) translateY(${(-r*5*i).toFixed(1)}px) scale(${(1.45-.45*o).toFixed(3)});text-shadow:0 0 ${((10+40*l)*i).toFixed(1)}px ${hs(c,.6+.4*l)},0 0 ${(80*l*i+1).toFixed(1)}px ${hs([1,.7,.5],.5*l)}`}};var jy=`
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
body.olk-idle{cursor:none}`,$d=s=>(s=Math.max(0,s),`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`),Do=(s,e,t)=>{let n=document.createElement(s);return e&&(n.className=e),t&&(n.innerHTML=t),n},Ul=class{constructor(e,t,n){this.cb=t,this.dur=n,this.clean=!1,this.hidden=!1;let i=Do("style");i.textContent=jy,document.head.appendChild(i);let r='<div class="olk-title">One Last Kiss</div><div class="olk-sub">Hikaru Utada</div>';this.load=Do("div","olk-ov",r+'<div class="olk-prog"><i></i></div><div class="olk-pct">0%</div>'),this.gate=Do("div","olk-ov hide",r+'<button class="olk-btn" aria-label="Play">\u25B6 \u70B9\u51FB\u64AD\u653E</button><div class="olk-hint">\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u5E26\u58F0\u97F3\u7684\u81EA\u52A8\u64AD\u653E<br>\u53CC\u51FB\u6587\u4EF6\u5939\u91CC\u7684\u300CPlay-OneLastKiss.bat\u300D\u5373\u53EF\u5168\u5C4F\u81EA\u52A8\u64AD\u653E</div>'),this.bar=Do("div","idle"),this.bar.id="olk-bar",this.bar.innerHTML='<button data-k="play" aria-label="Play or pause">\u275A\u275A</button><span class="tm">0:00</span><div id="olk-track" role="slider" aria-label="Seek" tabindex="0"><i></i></div><span class="du"></span><button data-k="lyr" aria-label="Toggle lyrics">\u8BCD</button><button data-k="fs" aria-label="Fullscreen">\u26F6</button>',this.endEl=Do("div","hide",'<button class="olk-btn" aria-label="Replay">\u21BB \u91CD\u64AD</button>'),this.endEl.id="olk-end",[this.load,this.gate,this.bar,this.endEl].forEach(l=>e.appendChild(l)),this.bar.querySelector(".du").textContent=$d(n),this.track=this.bar.querySelector("#olk-track"),this.fill=this.track.firstChild,this.playBtn=this.bar.querySelector("[data-k=play]"),this.tm=this.bar.querySelector(".tm"),this.bar.addEventListener("click",l=>{let c=l.target.dataset&&l.target.dataset.k;c==="play"?t.toggle():c==="lyr"?t.lyrics():c==="fs"&&this.fullscreen()}),this.track.addEventListener("click",l=>{let c=this.track.getBoundingClientRect();t.seek((l.clientX-c.left)/c.width*n)}),this.endEl.querySelector("button").addEventListener("click",()=>t.restart());let a=0,o=()=>{this.clean||this.hidden||(this.bar.classList.remove("idle"),document.body.classList.remove("olk-idle"),clearTimeout(a),a=setTimeout(()=>{this.bar.classList.add("idle"),document.body.classList.add("olk-idle")},2600))};addEventListener("mousemove",o),addEventListener("touchstart",o),addEventListener("keydown",l=>{let c=l.key.toLowerCase();if(c===" "||c==="k")l.preventDefault(),t.toggle();else if(c==="arrowright")t.seekBy(5);else if(c==="arrowleft")t.seekBy(-5);else if(c==="f")this.fullscreen();else if(c==="l")t.lyrics();else if(c==="r")t.restart();else if(c==="h")this.hidden=!this.hidden,this.bar.classList.add("idle");else if(c!=="c"&&c!=="v")return;o()})}fullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}loading(e,t){this.load.querySelector("i").style.width=(e*100).toFixed(1)+"%",this.load.querySelector(".olk-pct").textContent=t||Math.round(e*100)+"%"}ready(e=!1){e&&(this.load.style.transition="none"),this.load.classList.add("hide")}showGate(e){this.gate.classList.remove("hide");let t=this.gate.querySelector("button");t.focus();let n=()=>{this.gate.classList.add("hide"),e()};t.addEventListener("click",n,{once:!0})}update(e,t,n){this.fill.style.width=(e/this.dur*100).toFixed(2)+"%",this.tm.textContent=$d(e),this.playBtn.textContent=t?"\u275A\u275A":"\u25B6",this.endEl.classList.toggle("hide",!n||this.clean)}};var Hr=[{id:"zh",label:"\u4E2D\u6587",langs:["zh"]},{id:"ja",label:"\u65E5\u672C\u8A9E",langs:["ja"]},{id:"en",label:"English",langs:["en"]},{id:"zh-ja",label:"\u4E2D\u6587 + \u65E5\u672C\u8A9E",langs:["zh","ja"]},{id:"ja-en",label:"\u65E5\u672C\u8A9E + English",langs:["ja","en"]},{id:"zh-en",label:"\u4E2D\u6587 + English",langs:["zh","en"]}],Qy=`
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
#cc-menu button i{width:14px;font-style:normal;color:#e7c58f}`,e_=/^[\x20-\x7e’‘“”—…]+$/;function t_(){let s=Nr.filter(t=>t[4]!=="credit").slice().sort((t,n)=>t[0]-n[0]),e=[];for(let t=0;t<s.length;t++){let[n,i,r,a,o,,l]=s[t];if(e.length&&Math.abs(e[e.length-1].t0-n)<.01)continue;let c=e_.test(r),h=o==="oh";e.push({t0:n,t1:Math.min(i,t+1<s.length?s[t+1][0]-.02:i),ja:h?r:c&&l||r,en:h||c?r:l||"",zh:h?"\u54E6\u2014\u2014":a||r})}return e}var Ll=class{constructor(e,t){let n=document.createElement("style");n.textContent=Qy,document.head.appendChild(n),this.cues=t_(),this.on=!1,this.track=Hr[3],this.cur=null,this.el=document.createElement("div"),this.el.id="cc",this.el.className="off",this.el.setAttribute("aria-live","polite"),e.appendChild(this.el),this.btn=document.createElement("button"),this.btn.className="cc-btn",this.btn.textContent="CC",this.btn.setAttribute("aria-label","\u5B57\u5E55 Subtitles"),this.btn.setAttribute("aria-pressed","false"),this.lang=document.createElement("button"),this.lang.textContent="\u2699",this.lang.setAttribute("aria-label","\u5B57\u5E55\u8BED\u8A00 Subtitle language");let i=t.querySelector("[data-k=fs]");t.insertBefore(this.btn,i),t.insertBefore(this.lang,i),this.menu=document.createElement("div"),this.menu.id="cc-menu",this.menu.className="hide",this.menu.setAttribute("role","menu"),this.menu.innerHTML='<div class="hd">\u5B57\u5E55 \xB7 \u5B57\u5E55 \xB7 Subtitles</div><button data-t="off" role="menuitemradio"><i></i>\u5173\u95ED / \u30AA\u30D5 / Off</button>'+Hr.map(r=>`<button data-t="${r.id}" role="menuitemradio"><i></i>${r.label}</button>`).join(""),e.appendChild(this.menu),this.btn.addEventListener("click",r=>{r.stopPropagation(),this.toggle()}),this.lang.addEventListener("click",r=>{r.stopPropagation(),this.menu.classList.toggle("hide"),this.paintMenu()}),this.menu.addEventListener("click",r=>{let a=r.target.closest("button");if(!a)return;let o=a.dataset.t;o==="off"?this.set(!1):(this.track=Hr.find(l=>l.id===o),this.set(!0)),this.menu.classList.add("hide")}),addEventListener("click",r=>{this.menu.contains(r.target)||this.menu.classList.add("hide")}),addEventListener("keydown",r=>{let a=r.key.toLowerCase();a==="c"?this.toggle():a==="v"&&(this.track=Hr[(Hr.indexOf(this.track)+1)%Hr.length],this.set(!0))})}toggle(){this.set(!this.on)}set(e){this.on=e,this.cur=null,this.el.classList.toggle("off",!e),this.btn.classList.toggle("on",e),this.btn.setAttribute("aria-pressed",String(e)),this.paintMenu()}paintMenu(){this.menu.querySelectorAll("button").forEach(e=>{let t=this.on?e.dataset.t===this.track.id:e.dataset.t==="off";e.querySelector("i").textContent=t?"\u2713":"",e.setAttribute("aria-checked",String(t))})}update(e,t){if(this.el.classList.toggle("up",!!t),!this.on)return;let n=this.cues.find(r=>e>=r.t0&&e<r.t1)||null,i=n?n.t0+this.track.id:"";i!==this.cur&&(this.cur=i,this.el.textContent="",n&&this.track.langs.forEach((r,a)=>{if(!n[r])return;let o=document.createElement("span");o.textContent=n[r],a>0&&(o.className="s2"),this.el.appendChild(o)}))}};var n_=`
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
#hud.off{display:none}`,Dl=(s,e=2)=>String(Math.floor(s)).padStart(e,"0"),Nl=class{constructor(e,t){let n=document.createElement("style");n.textContent=n_,document.head.appendChild(n),this.el=document.createElement("div"),this.el.id="hud",e.appendChild(this.el),this.items=t.map(i=>({...i,el:this.make(i)}))}make(e){let t=document.createElement("div");return t.className="h "+e.kind,e.color&&(t.style.color=e.color),e.kind==="alert"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="sync"?t.innerHTML=`<small>${e.label||"SYNCHRO RATIO"}</small><b>0.0%</b><div class="bar"><i></i></div>`:e.kind==="magi"?t.innerHTML=["MELCHIOR\xB71","BALTHASAR\xB72","CASPER\xB73"].map(n=>`<div>${n}<b>\u5BE9\u8B70\u4E2D</b></div>`).join(""):e.kind==="cap"?t.innerHTML=`<b>${e.text}</b><i>${e.sub||""}</i>`:e.kind==="frame"?t.innerHTML=`<s></s><u>${e.text||""}</u>`:t.textContent="",e.style&&Object.assign(t.style,e.style),this.el.appendChild(t),t}toggle(e){this.el.classList.toggle("off",!e)}update(e,t=1){for(let n of this.items){let{el:i,t0:r,t1:a,kind:o}=n;if(e<r-.05||e>a+.6){i._v!==0&&(i.style.opacity=0,i._v=0);continue}let l=n.fin??.12,c=n.fout??.35,h=V(r,r+l,e)*(1-V(a,a+c,e)),u=le((e-r)/(a-r));if(o==="alert"){let f=ae.beat(e)*(n.rate||2);h*=f-Math.floor(f)<.72?1:.15,i.style.transform=`translate(-50%,-50%) scale(${1+.05*ae.hitPulse("kick",e,10)})`}else if(o==="sync"){let f=(n.from??0)+((n.to??100)-(n.from??0))*Math.pow(u,n.pow||1.6)+Math.sin(e*37)*.35;i.querySelector("b").textContent=f.toFixed(1)+"%",i.querySelector(".bar i").style.width=le(f/(n.max||100))*100+"%",i.style.color=f>(n.warn??1e9)?"#ff3a2a":""}else if(o==="magi"){let f=i.children,d=ae.count("kick",r,e);for(let v=0;v<3;v++){let x=u>.7,p=x?(n.result||[1,1,1])[v]:(d+v)%3!==0;f[v].className=p?"ok":"no",f[v].querySelector("b").textContent=x?p?"\u53EF\u6C7A":"\u5426\u6C7A":(d+v)%2?"\u5BE9\u8B70\u4E2D":p?"\u627F\u8A8D":"\u5426\u6C7A"}}else if(o==="code"){let f=Math.max(0,n.rev?(n.base??0)-(e-r)*n.rev:e-(n.base??0));i.textContent=`${n.text||"S-DAT"}  ${n.track?"TR "+n.track:""}  ${Dl(f/60)}:${Dl(f%60)}:${Dl(f*100%100)}`}else o==="count"?i.textContent=Dl(Math.max(0,n.from-ae.count("kick",r,e))):o==="cap"&&(i.style.transform=`translateX(${(1-V(r,r+.5,e))*-12}px)`);e-r<.25&&(h*=Math.floor(e*60)%3===0?.2:1),h*=t,Math.abs(h-(i._v??-1))>.004&&(i.style.opacity=h.toFixed(3),i._v=h)}}};var ht=class{constructor(e,t={}){this.ctx=e,this.scene=new Zn,this.camera=t.ortho?new ss(-e.aspect,e.aspect,1,-1,.1,100):new Jt(t.fov||45,e.aspect,t.near||.1,t.far||2e3),t.ortho&&(this.camera.position.z=10),this.ortho=!!t.ortho,this.clear=new _e(0,0,0)}build(){}update(e,t){}post(e){return{}}resize(e,t){let n=e/t;this.ortho?(this.camera.left=-n,this.camera.right=n):this.camera.aspect=n,this.camera.updateProjectionMatrix()}render(e,t){e.setRenderTarget(t),e.setClearColor(this.clear,1),e.clear(),e.render(this.scene,this.camera)}},i_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function us(s,e,t={}){let n=new ne({vertexShader:i_,fragmentShader:s,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Kn}),i=new z(new pe(2,2),n);return i.frustumCulled=!1,i.renderOrder=t.order??-100,i}function Kd(s,e,t,n={}){return new ne({vertexShader:s,fragmentShader:e,uniforms:t,transparent:!0,depthWrite:!1,blending:Pe,...n})}async function Zd(){let s=window.OLK_IMG||{},e={};return await Promise.all(Object.entries(s).map(async([t,n])=>{let i=new Image;i.src=n.src;try{await i.decode()}catch{console.warn("image decode failed",t);return}let r=new _n(i),a=t.endsWith("_d");r.colorSpace=a?jt:yn,r.anisotropy=4,r.wrapS=r.wrapT=ai,r.needsUpdate=!0,e[t]={tex:r,img:i,w:n.w,h:n.h}})),e}function Fl(s,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d",{willReadFrequently:!0});return i.drawImage(s.img,0,0,e,t),i.getImageData(0,0,e,t).data}var s_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }";function Hl(s,e,t={}){let n={uImg:{value:s.tex},uDep:{value:e?e.tex:null},uHasDep:{value:e?1:0},uAspect:{value:1.7777777777777777},uImgAspect:{value:s.w/s.h},uCam:{value:new S(0,0,1)},uPar:{value:new se(0,0)},uDolly:{value:0},uFocus:{value:.5},uBlur:{value:0},uT:{value:0},uGain:{value:1},uTint:{value:new S(1,1,1)},uAlpha:{value:1},...t.uniforms||{}},i=`
uniform sampler2D uImg, uDep; uniform float uHasDep, uAspect, uImgAspect, uDolly, uFocus, uBlur, uT, uGain, uAlpha;
uniform vec3 uCam, uTint; uniform vec2 uPar; varying vec2 vUv;
${Ee}
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
}`;return new ne({vertexShader:s_,fragmentShader:i,uniforms:n,depthWrite:!1,depthTest:!1,transparent:!!t.blend,blending:t.blend||Kn})}function Ol(s,e=-100){let t=new z(new pe(2,2),s);return t.frustumCulled=!1,t.renderOrder=e,t}function Si(s,e={}){let t={uTex:{value:s.tex},uT:{value:0},uWind:{value:e.wind??1},uAlpha:{value:1},uRim:{value:new rt(1,.8,.55,e.rim??.6)},uTint:{value:new S(1,1,1)},uDis:{value:0},uTexel:{value:new se(1/s.w,1/s.h)},uSeed:{value:e.seed??0},uClip:{value:new rt(-1,0,1,0)}},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",i=`
uniform sampler2D uTex; uniform float uT, uWind, uAlpha, uDis, uSeed; uniform vec4 uRim; uniform vec3 uTint; uniform vec2 uTexel; uniform vec4 uClip;
varying vec2 vUv; ${Ee}
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
}`;return new ne({vertexShader:n,fragmentShader:i,uniforms:t,transparent:!0,depthWrite:!1})}function Ti(s,e=1){let t=new pe(e*s.w/s.h,e);return t.translate(0,e/2,0),t}var kl={kick:{hook:"col *= 1.0 + uK * 0.35 * smoothstep(0.35, 1.0, dot(col, vec3(0.33)));"},sweep:{hook:"{ float b = suv.x * 0.8 + suv.y * 0.35 - (uU * 1.8 - 0.45); float l = dot(col, vec3(0.33)); col += uFxCol * exp(-b * b * 90.0) * (0.35 + 0.25 * d) * uFx.x * uRay.y * 0.5 * (1.0 - 0.8 * smoothstep(0.3, 0.9, l)); }"},rays:{hook:`{ vec2 L = uLight.xy; vec3 acc = vec3(0.0); vec2 p = uv; vec2 st = (vec2(L.x, L.y) - suv) * 0.035;
      for (int i = 0; i < 14; i++) { p += st * vec2(1.0 / uCam.z); vec3 s = texture2D(uImg, p).rgb; acc += max(s - uRay.x, 0.0); }
      col += acc * uLight.z * uFxCol * 0.22 * uRay.y; }`},sparkfn:{head:`vec3 sparks(vec2 p, float t, float up, vec3 c1, float dens){ vec3 acc = vec3(0.0);
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
        float lx = uA.x - x; float car = mod(lx, 2.6); float gap = step(2.52, car) + step(car, 0.03);
        float nose = smoothstep(0.0, 0.12, lx);
        // cream body with a curved-side shading, darker roof and skirt, blue stripe, panel seams, doors
        float curve = 0.62 + 0.38 * sin(clamp(yy, 0.0, 1.0) * 3.1416 * 0.9 + 0.2);
        vec3 body = vec3(0.2, 0.19, 0.17) * curve * (0.85 + 0.3 * smoothstep(0.35, 0.75, yy));
        body = mix(body, vec3(0.1, 0.1, 0.11), smoothstep(0.9, 0.93, yy));                       // roof
        body = mix(body, vec3(0.05, 0.05, 0.06), smoothstep(0.1, 0.07, yy));                      // skirt / bogies
        body = mix(body, vec3(0.05, 0.2, 0.42), step(0.27, yy) * step(yy, 0.32));                 // stripe
        body = mix(body, vec3(0.12, 0.35, 0.62), step(0.335, yy) * step(yy, 0.345));
        float seam = smoothstep(0.012, 0.0, abs(mod(car, 0.65) - 0.325)) * 0.35; body *= 1.0 - seam;
        float door = step(0.38, car) * step(car, 0.62) + step(1.98, car) * step(car, 2.22);
        body = mix(body, body * 0.8, door); body *= 1.0 - 0.6 * smoothstep(0.008, 0.0, abs(mod(car, 1.6) - 0.62)) * step(0.12, yy);
        float wx = mod(car, 0.42); float win = step(0.5, yy) * step(yy, 0.82) * step(0.06, wx) * step(wx, 0.36) * step(0.2, car) * step(car, 2.3);
        // windows: dark cabin, reflected sky gradient, scrolling reflection of the plate, passing interior lights
        vec3 glass = mix(vec3(0.05, 0.06, 0.08), vec3(0.2, 0.3, 0.42), smoothstep(0.5, 0.82, yy));
        glass = mix(glass, texture2D(uImg, uv + vec2(0.0, 0.02)).rgb * 0.8, 0.45);                       // see-through to the far side
        glass *= 1.0 - 0.8 * smoothstep(0.62, 0.58, yy) * step(0.5, fract(wx * 5.0));             // seat backs
        glass += vec3(0.5, 0.45, 0.35) * smoothstep(0.78, 0.8, yy) * 0.4;
        float refl = smoothstep(0.1, 0.0, abs(fract((car + yy * 0.4) * 1.3 - uT * 0.0) - 0.5) - 0.35);
        glass += vec3(0.3) * refl * 0.25;
        vec3 tr = mix(body, glass, win);
        tr += vec3(0.8, 0.75, 0.65) * exp(-pow((yy - 0.86) * 30.0, 2.0)) * 0.25;                 // roof-edge specular
        tr *= 0.9 + 0.2 * vnoise(vec2(x * 1.5 - uT * 9.0, yy * 90.0));
        col = mix(col, tr, (1.0 - clamp(gap, 0.0, 1.0)) * nose * uA.w);
      } }`},hex:{head:`float hexd(vec2 p){ p = abs(p); return max(dot(p, vec2(0.866, 0.5)), p.y); }
      float hexgrid(vec2 p){ vec2 r = vec2(1.0, 1.732); vec2 h = r * 0.5; vec2 a = mod(p, r) - h, b = mod(p - h, r) - h; vec2 g = dot(a, a) < dot(b, b) ? a : b; return 0.5 - hexd(g); }`,hook:`if (uLight.w > 0.001) { vec2 q = (suv - uLight.xy) * vec2(uAspect, 1.0); float r = length(q);
      float ring = exp(-pow((r - uLight.w) * 14.0, 2.0)); float g = smoothstep(0.06, 0.0, hexgrid(q * 16.0));
      col += vec3(1.6, 0.7, 0.2) * (g * 0.8 + 0.3) * ring * (1.0 - smoothstep(0.6, 1.2, uLight.w)); }`}},r_=[[0,0,0,1.04,0,0,0],[1,0,0,1.12,.012,0,.05]],No=class extends ht{constructor(e,t,n=0,i=1){super(e,{ortho:!0}),this.o=t,this.t0=n,this.t1=i;let r=e.img[t.img];if(!r)throw new Error("missing image "+t.img);let a=t.dep===!1?null:e.img[t.dep||t.img+"_d"]||null,o=new Set;(t.fx||[]).forEach(u=>{kl[u]&&kl[u].needs&&o.add(kl[u].needs),o.add(u)});let l=[...o].map(u=>kl[u]).filter(Boolean),c={uU:{value:0},uL:{value:0},uK:{value:0},uS:{value:0},uH:{value:0},uE:{value:0},uFx:{value:new rt(...t.fxAmt||[1,1,1,0])},uFxCol:{value:new S(...t.fxCol||[1,.75,.5])},uLight:{value:new rt(...t.light||[.5,.8,0,0])},uWave:{value:new rt(.5,.5,0,1)},uRay:{value:new se(.62,1)},uWater:{value:t.water||0},uA:{value:new rt},uB:{value:new rt}};{let u=Fl(r,32,18),f=0;for(let v=0;v<u.length;v+=4)f+=(u[v]*.3+u[v+1]*.59+u[v+2]*.11)/255;let d=0;for(let v=0;v<u.length;v+=4)d+=u[v]*.3+u[v+1]*.59+u[v+2]*.11>191?1:0;f/=u.length/4,d/=u.length/4,this.bright=le((f-.4)/.35+d*1.5)}c.uRay.value.set(.62+.26*this.bright,1-.6*this.bright);let h=`uniform float uU, uL, uK, uS, uH, uE, uWater; uniform vec4 uFx, uLight, uWave, uA, uB; uniform vec3 uFxCol; uniform vec2 uRay;
`+l.map(u=>u.head||"").join(`
`)+(t.head||"");this.M=Hl(r,a,{uniforms:c,head:h,warp:l.map(u=>u.warp||"").join(`
`)+(t.warp||"")+`
return uv;`,hook:l.map(u=>u.hook||"").join(`
`)+(t.hook||"")+`
return col;`}),this.U=this.M.uniforms,t.gain&&(this.U.uGain.value=t.gain),t.tint&&this.U.uTint.value.set(...t.tint),this.U.uBlur.value=t.blur??0,this.U.uFocus.value=t.focus??.7,this.scene.add(Ol(this.M)),this.cuts=(t.cuts||[]).map((u,f)=>{let d=e.img[u.img];if(!d)throw new Error("missing cut "+u.img);let v=Si(d,{wind:u.wind??.5,rim:u.rim??.6,seed:f*3.1});u.rimCol&&v.uniforms.uRim.value.set(...u.rimCol,u.rim??.6),u.blend&&(v.blending=Pe);let x=new z(Ti(d,u.h||1),v);return x.renderOrder=10+f,x.frustumCulled=!1,this.scene.add(x),{c:u,m:v,mesh:x}}),t.build&&t.build(this,e)}u(e){return le((e-this.t0)/Math.max(.001,this.t1-this.t0))}update(e,t){let n=this.o,i=this.U,r=this.u(e),a=Al(r,n.cam||r_,n.e||ve.sine),o=(n.punch??.6)*ae.hitPulse("kick",e,9);i.uCam.value.set(a[0]||0,a[1]||0,(a[2]||1)*(1+o*.018)),i.uPar.value.set(a[3]||0,a[4]||0),i.uDolly.value=a[5]||0,i.uAspect.value=this.ctx.aspect,i.uT.value=e,i.uU.value=r,i.uL.value=e-this.t0,i.uK.value=ae.hitPulse("kick",e,7),i.uS.value=ae.hitPulse("snare",e,8),i.uH.value=ae.hitPulse("hit",e,5),i.uE.value=ae.get("energy",e),n.wave&&i.uWave.value.set(...n.wave(e,r)),n.lightFn&&i.uLight.value.set(...n.lightFn(e,r)),n.fxFn&&i.uFx.value.set(...n.fxFn(e,r)),n.trainFn&&i.uA.value.set(...n.trainFn(e,r));for(let{c:l,m:c,mesh:h}of this.cuts){let u=l.fn(e,r,this);h.visible=(u.a??1)>.002,h.position.set(u.x??0,u.y??-1,1);let f=u.s??1;h.scale.set(f*(u.flip?-1:1),f,1),h.rotation.z=u.r||0,c.uniforms.uT.value=e,c.uniforms.uAlpha.value=u.a??1,c.uniforms.uDis.value=u.dis||0,u.tint&&c.uniforms.uTint.value.set(...u.tint)}n.tick&&n.tick(e,r,this)}post(e){let t=this.o,n=this.u(e),i=this.bright,r={bloom:.75*(1-.55*i),bloomThr:.72+.2*i,contrast:1+.12*i,sat:1+.08*i,exposure:1-.08*i,tone:.35*i,lift:[-.02*i,-.02*i,-.016*i],grain:.07*(1-.3*i),vig:.5+.1*i,ca:.7,dust:.15,punch:(t.punch??.6)*ae.hitPulse("kick",e,10)*.6},a=typeof t.post=="function"?t.post(e,n,this):t.post||{};return{...r,...a}}},Nt=s=>(e,t,n)=>new No(e,s,t,n);var wt={mincho:'"OLK Mincho", "Yu Mincho", serif',serif:'"OLK Serif", "Times New Roman", serif',script:'"OLK Script", cursive',sc:'"OLK SC", "Songti SC", serif',mono:'"OLK Mono", monospace'};function Ft(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function hn(s,e={}){let t=new Jn(s);return t.colorSpace=e.linear?jt:yn,t.anisotropy=4,e.repeat&&(t.wrapS=t.wrapT=zi),e.mip===!1&&(t.generateMipmaps=!1,t.minFilter=Dt),t.needsUpdate=!0,t}function Jd(s,e={}){let t=e.size||96,n=e.pad??Math.ceil(t*.35),i=`${e.style||""} ${e.weight||400} ${t}px ${e.font||wt.serif}`,r=Ft(8,8).getContext("2d");r.font=i;let a=e.spacing||0,o=Math.ceil(r.measureText(s).width+a*s.length+n*2),l=Math.ceil(t*1.4+n*2),c=Ft(o,l),h=c.getContext("2d");return h.font=i,h.textBaseline="middle",h.fillStyle=e.color||"#fff","letterSpacing"in h&&(h.letterSpacing=a+"px"),e.glow&&(h.shadowColor=e.glowColor||e.color||"#fff",h.shadowBlur=e.glow),h.fillText(s,n,l/2),e.glow&&(h.shadowBlur=0,h.fillText(s,n,l/2)),{c,w:o,h:l}}function zl(s=128,e=1){let t=Ft(s,s),n=t.getContext("2d"),i=s/2,r=n.createRadialGradient(i,i,0,i,i,i);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.12*e,"rgba(255,255,255,0.55)"),r.addColorStop(.4,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,s,s),hn(t,{linear:!0})}var o_=`
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
}`,Fo=class extends ht{constructor(e,t){super(e,{ortho:!0}),this.pages=t.map(r=>({...r,tex:this.draw(r)})),this.U={uTex:{value:this.pages[0].tex},uPrev:{value:null},uT:{value:0},uAge:{value:0},uAspect:{value:16/9},uFlash:{value:0},uRed:{value:0},uInv:{value:0}};let n=new ne({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:o_,uniforms:this.U,depthTest:!1}),i=new z(new pe(2,2),n);i.frustumCulled=!1,this.scene.add(i)}draw(e){let t=Ft(1920,1080),n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,1920,1080);for(let i of e.lines){if(n.save(),n.font=`${i.weight||800} ${i.size}px ${wt[i.font||"mincho"]}`,n.fillStyle=i.color||"#f4f1ea",n.textBaseline="alphabetic",n.translate(i.x*1920,i.y*1080),n.scale(i.sx||1,i.sy||1),n.textAlign=i.align||"left",i.track){let r=0,a=Array.from(i.s),o=a.reduce((l,c)=>l+n.measureText(c).width+i.track,-i.track);i.align==="center"?r=-o/2:i.align==="right"&&(r=-o),n.textAlign="left";for(let l of a)n.fillText(l,r,0),r+=n.measureText(l).width+i.track}else n.fillText(i.s,0,0);i.rule&&n.fillRect(i.rule[0],i.rule[1],i.rule[2],i.rule[3]),n.restore()}return hn(t,{mip:!1})}update(e){let t=0;for(;t+1<this.pages.length&&this.pages[t+1].t<=e;)t++;let n=this.pages[t];this.U.uTex.value=n.tex,this.U.uT.value=e,this.U.uAge.value=Math.max(0,e-n.t),this.U.uAspect.value=this.ctx.aspect,this.U.uRed.value=n.red||0,this.U.uInv.value=n.inv||0,this.U.uFlash.value=le(.5-(e-n.t)*4)*(n.flash??.6)}post(e){return{bloom:.6,bloomThr:.6,grain:.1,vig:.35,ca:1.2,dust:0,tone:1,contrast:1.05,punch:ae.hitPulse("kick",e,12)*.5}}};var a_=`
uniform sampler2D uA, uB; uniform float uAspect, uAA, uBA, uAge, uT, uK, uRed, uInv, uWhip, uFlash;
uniform vec4 uCamA, uCamB; uniform vec2 uDir; uniform vec3 uTint; varying vec2 vUv;
${Ee}
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
  col += vec3(1.0, 0.95, 0.9) * smoothstep(0.1, 0.0, uAge) * uFlash;
  col *= uTint * (1.0 + uK * 0.12);
  float l = dot(col, vec3(0.3, 0.55, 0.15));
  col = mix(col, vec3(l * 1.4, l * 0.12, l * 0.1), uRed);
  col = mix(col, 1.0 - col, uInv);
  gl_FragColor = vec4(col, 1.0);
}`,Ns=class extends ht{constructor(e,t,n={}){super(e,{ortho:!0}),this.cards=t.slice().sort((o,l)=>o.t-l.t),this.o=n;let i=o=>({value:o});this.U={uA:i(null),uB:i(null),uAspect:i(e.aspect),uAA:i(1.78),uBA:i(1.78),uAge:i(1),uT:i(0),uK:i(0),uRed:i(0),uInv:i(0),uWhip:i(0),uFlash:i(.55),uCamA:i(new rt(0,0,1,0)),uCamB:i(new rt(0,0,1,0)),uDir:i(new se(1,0)),uTint:i(new S(1,1,1))};let r=new ne({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:a_,uniforms:this.U,depthTest:!1,depthWrite:!1}),a=new z(new pe(2,2),r);a.frustumCulled=!1,this.scene.add(a);for(let o of this.cards){let l=e.img[o.img];if(!l)throw new Error("montage: missing "+o.img);o.e=l}}idx(e){let t=0;for(;t+1<this.cards.length&&this.cards[t+1].t<=e;)t++;return t}cam(e,t){let n=this.cards[this.cards.indexOf(e)+1],i=n?n.t-e.t:2.5,r=le((t-e.t)/i),[a,o]=e.z||[1.14,1.05],l=e.dir||[1,0],c=ve.outExpo(le((t-e.t)/.45)),h=a+(o-a)*(.7*c+.3*r),u=(e.pan??.035)*(r-.5)*(e.rev?-1:1);return[l[0]*u+(e.x||0),l[1]*u+(e.y||0),h]}update(e){let t=this.U,n=this.idx(e),i=this.cards[n],r=this.cards[Math.max(0,n-1)],a=e-i.t;t.uA.value=r.e.tex,t.uAA.value=r.e.w/r.e.h,t.uB.value=i.e.tex,t.uBA.value=i.e.w/i.e.h,t.uCamA.value.set(...this.cam(r,e),0),t.uCamB.value.set(...this.cam(i,e),0),t.uAge.value=n===0&&a<0?1:a;let o=this.cards[n+1],l=o?o.t-i.t:1,c=le((l-.06)/.3);t.uWhip.value=n===0?0:Math.max(0,1-a/Math.min(.12,l*.6))*(i.whip??1)*(.45+.55*c),t.uFlash.value=(this.o.flash??.55)*(.25+.75*c);let h=i.dir||[1,0];t.uDir.value.set(h[0],h[1]).normalize(),t.uAspect.value=this.ctx.aspect,t.uT.value=e,t.uK.value=ae.hitPulse("kick",e,8),t.uRed.value=i.red||0,t.uInv.value=i.inv&&a<.12?1:0,t.uTint.value.set(...i.tint||[1,1,1])}post(e){let t=this.cards[this.idx(e)],n=e-t.t;return{bloom:.7,bloomThr:.7,grain:.08,vig:.45,ca:.8+Math.max(0,1-n/.2)*2,dust:.1,shake:Math.max(0,1-n/.25)*.5,punch:ae.hitPulse("kick",e,10)*.4,...this.o.post||{}}}};var dc={};Hm(dc,{Canyon:()=>$l,City:()=>hc,Clothes:()=>Yl,Earth:()=>Wl,Flipbook:()=>rc,Gallery:()=>Xl,Helix2:()=>ac,Rails:()=>uc,RedSea2:()=>Jl,SDAT:()=>Bl,Sketch2:()=>cc,Sky:()=>ql,Studio:()=>Kl,Train:()=>Zl});var Ho=new S;function jn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ho.copy(e),Ho[n]=0,Ho.normalize();let c=.5*a/(a+o),h=1-Ho.angleTo(s)/l;return Math.sign(Ho[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Or=class extends ot{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new S,l=new S,c=new S(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,v=new S,x=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(o.x)+l.x*r,h[p+1]=c.y*Math.sign(o.y)+l.y*r,h[p+2]=c.z*Math.sign(o.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:v.set(1,0,0),f[m+0]=jn(v,l,"z","y",r,n),f[m+1]=1-jn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[m+0]=1-jn(v,l,"z","y",r,n),f[m+1]=1-jn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[m+0]=1-jn(v,l,"x","z",r,e),f[m+1]=jn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[m+0]=1-jn(v,l,"x","z",r,e),f[m+1]=1-jn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[m+0]=1-jn(v,l,"x","y",r,e),f[m+1]=1-jn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[m+0]=jn(v,l,"x","y",r,e),f[m+1]=1-jn(v,l,"y","x",r,t);break}}};var i0=8.92,un=9.2,fs=9.72,zo=-.05,s0=.03,Bo=-.03,ko=.0305,Wn=-.08,qn=-.024,Oo=.085,l_=.034,kr=-.03,Vo=6.238,zr=7.31,Br=8.381,c_=[Vo,zr,Br],h_=[[-1,Vo,[[0,Wn+.005,.0505,qn+.013,Wn,ko,qn,34],[1.95,Wn+.003,.048,qn+.011,Wn-.001,ko,qn,34],[3.4,Wn-.001,.056,qn+.014,Wn,ko,qn,32],[4.5,zo-.004,.097,Bo+.05,zo,ko,Bo,32],[5.5,-.045,.15,.27,-.01,.02,-.02,34],[6.3,-.02,.1,.36,0,.03,-.03,33]]],[Vo,zr,[[Vo,.6,.075,.66,.04,.035,-.06,30],[zr,.5,.068,.55,.04,.03,-.06,29]]],[zr,Br,[[zr,-.78,.05,.58,.05,.12,-.1,32],[Br,-.68,.047,.5,.05,.115,-.1,31]]],[Br,100,[[Br,.62,.06,.58,-.05,.06,-.1,30],[8.6,.42,.07,.4,-.02,.05,-.02,30],[8.85,.045,.1,.17,0,.034,.05,28],[9.45,-.035,.15,.06,Wn,s0,qn,30],[10,Wn,.13,qn+.022,Wn,s0,qn,32],[10.6,Wn,.085,qn+.012,Wn,s0,qn,40]]],[200,999,[[222.6,.155,.07,.075,.07,l_,kr,28],[224.4,.02,.11,.12,-.04,.03,-.03,30],[226.3,.12,.9,.45,0,0,0,34]]]],u_=s=>s>200?2:s<Vo?1:s<zr?2:s<Br?3:4,jd={1:{kp:[-.8,.9,-.7],kc:11059455,ki:1.5,rp:[.7,.25,-.6],rc:4259728,ri:.3,ei:.6,amb:.05},2:{kp:[1.3,.35,-.5],kc:16752720,ki:3.2,rp:[-1,.4,.6],rc:6324479,ri:.25,ei:.7,amb:.08},3:{kp:[-.9,.3,.9],kc:16777215,ki:5,rp:[1,.2,-.8],rc:4223231,ri:.15,ei:.35,amb:.012},4:{kp:[-.9,.16,-.7],kc:16732208,ki:3.5,rp:[.8,.3,.6],rc:16736320,ri:.6,ei:.8,amb:.12}},f_=(s,e,t)=>{let n=((s*1.2+e*.6-t*1.1)/.8%1+1)%1;return V(.05,.1,n)*(1-V(.55,.6,n))};function d_(s,e){let t=e.length;if(s<=e[0][0])return e[0].slice(1);if(s>=e[t-1][0])return e[t-1].slice(1);let n=0;for(;e[n+1][0]<s;)n++;let i=e[n][0],r=e[n+1][0],a=r-i,o=(s-i)/a,l=o*o,c=l*o,h=2*c-3*l+1,u=c-2*l+o,f=-2*c+3*l,d=c-l,v=(p,m)=>p<=0||p>=t-1?0:(e[p+1][m]-e[p-1][m])/(e[p+1][0]-e[p-1][0]),x=[];for(let p=1;p<e[0].length;p++)x.push(h*e[n][p]+u*a*v(n,p)+f*e[n+1][p]+d*a*v(n+1,p));return x}function p_(s){if(s>200)return s<224.4?-(s-222.6)*38-(s-222.6)**2*6:-(224.4-222.6)*38-1.8**2*6;if(s<un){let e=s%1.07;return e<.9?e*3:2.7*(1-(e-.9)/.17)}return un%1.07*3+(s-un)*5+(s-un)**2*3}var m_=`attribute vec3 aR; attribute float aE; uniform float uT, uS; varying float vA; varying vec3 vC;
void main(){ float u = uT - aR.x * 0.38 - aR.y * 0.22 - aE * 0.035; vA = step(0.0, u) * step(u, 2.4);
  u = max(u, 0.0); vec3 p = position; vec2 dir = normalize(p.xz - vec2(${Wn}, ${qn}) + 1e-4);
  float sw = sin(u * 6.0 + aR.z * 20.0) * 0.006 * u;
  p.xz += dir * (0.02 * u + 0.06 * u * u) * (0.4 + aR.z) + vec2(sw, -sw);
  p.y += 0.012 * u + (0.35 + aR.z * 0.5) * u * u;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uS * (0.5 + aR.z) / -mv.z, 1.0, 9.0);
  vC = mix(vec3(0.35, 1.8, 0.75), vec3(1.6, 1.8, 1.5), smoothstep(0.1, 0.9, u)) * (1.0 - smoothstep(1.4, 2.4, u)) * (aE > 0.5 ? 0.25 : 0.8); }`,v_=`varying float vA; varying vec3 vC; void main(){ vec2 q = gl_PointCoord - 0.5; float d = dot(q, q);
  if (vA < 0.5 || d > 0.25) discard; gl_FragColor = vec4(vC * exp(-d * 14.0), 1.0); }`,ep=`
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
vec3 sky(vec3 d){ int e = int(uEnv + 0.5); return e == 1 ? skyHosp(d) : e == 2 ? skyTrain(d) : e == 3 ? skyMoon(d) : e == 4 ? skyRed(d) : vec3(0.0); }`,Qd="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",g_=`uniform float uRev; varying vec3 vW; ${Ee} ${ep}
void main(){ vec3 d = normalize(vW - cameraPosition); gl_FragColor = vec4(sky(d) * uRev, 1.0); }`,x_=`uniform float uRev, uAmb, uKi, uMir; uniform vec3 uKc, uKp; varying vec3 vW; ${Ee} ${ep}
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
  gl_FragColor = vec4(c * uRev, alpha); }`,y_=`attribute vec3 aCell; attribute vec4 aR; uniform float uT, uCell, uAlt; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
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
  vec3 p = vec3(aCell.x, ${ko+3e-4}, aCell.y) + off * (1.0 - u) + vec3(position.x, 0.0, -position.y) * s;
  vQ = position.xy + 0.5; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,__=`uniform float uT, uMode, uFade; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
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
  if (dot(c, c) < 1e-6) discard; gl_FragColor = vec4(c, 1.0); }`;function r0(s,e,t){s.fillStyle="#0d1a10",s.fillRect(0,0,512,192),s.fillStyle="rgba(120,255,170,0.06)";for(let r=0;r<192;r+=4)s.fillRect(0,r,512,1);s.fillStyle="#8dffbf",s.shadowColor="#5dff9a",s.shadowBlur=14,s.font=`700 30px ${wt.mono}`,s.fillText(t.mode,22,46),s.font=`700 22px ${wt.mono}`,s.fillText("TR",22,128),s.font=`700 104px ${wt.mono}`,s.fillText(e,70,160),s.font=`700 40px ${wt.mono}`,s.fillText(t.time,260,160),s.font=`500 20px ${wt.mono}`,s.fillText(t.sub,262,96),s.strokeStyle="#8dffbf",s.lineWidth=3,s.strokeRect(430,22,56,24),s.fillRect(434,26,20+28*t.bat,16)}var Bl=class extends ht{constructor(e){super(e,{fov:30,near:.004,far:60});let t=this.scene,n=e.renderer;this.U={uEnv:{value:1},uT:{value:0},uK:{value:0},uSun:{value:new S(0,1,0)},uRev:{value:1}};let i=new ne({vertexShader:Qd,fragmentShader:g_,uniforms:this.U,side:mt,depthWrite:!1});this.dome=new z(new nn(20,64,32),i),this.dome.renderOrder=-100,this.dome.frustumCulled=!1,t.add(this.dome);let r=new Mi(n),a=new Zn;a.add(new z(this.dome.geometry,i)),this.envs={};for(let xe of[1,2,3,4])this.U.uEnv.value=xe,this.U.uSun.value.set(...jd[xe].kp).normalize(),this.U.uT.value=3,this.envs[xe]=r.fromScene(a,.02,.1,40).texture;r.dispose();let o=this.dev=new Qt;t.add(o);let l=new lt({color:10133672,metalness:.9,roughness:.32}),c=new lt({color:1711136,metalness:.5,roughness:.5}),h=new z(new Or(.32,.06,.2,5,.018),l);o.add(h);let u=Ft(512,320),f=u.getContext("2d");f.fillStyle="#888",f.fillRect(0,0,512,320);let d=ft(4);for(let xe=0;xe<900;xe++)f.fillStyle=`rgba(${d()>.5?255:0},${d()>.5?255:0},255,${.03+d()*.05})`,f.fillRect(0,d()*320,512,1);f.font=`700 26px ${wt.mono}`,f.fillStyle="#2a2c30",f.fillText("S-DAT",380,296),f.font=`500 13px ${wt.mono}`,f.fillText("DIGITAL AUDIO TAPE  WM-D3",22,300),f.strokeStyle="#555",f.lineWidth=2,f.strokeRect(14,14,484,292);let v=new z(new pe(.3,.185),new lt({map:hn(u),metalness:.85,roughness:.38}));v.rotation.x=-Math.PI/2,v.position.y=.0301,o.add(v),this.lc=Ft(512,192),this.lg=this.lc.getContext("2d"),this.lt=hn(this.lc);let x=new Ct({map:this.lt,toneMapped:!1}),p=new z(new pe(.128,.048),x);p.rotation.x=-Math.PI/2,p.position.set(-.05,.0305,-.03),o.add(p);let m=new z(new pe(.14,.058),c);m.rotation.x=-Math.PI/2,m.position.set(-.05,.03025,-.03),o.add(m),this.lcdLight=new Pn(6160282,.02,.4),this.lcdLight.position.set(-.05,.06,-.03),o.add(this.lcdLight),this.btn=[];for(let xe=0;xe<5;xe++){let X=new z(new Or(.03,.012,.018,3,.004),xe===0?l:c);X.position.set(-.07+xe*.036,.034,.055),o.add(X),this.btn.push(X)}let _=new z(new fl(.004,3),new Ct({color:2883464}));_.rotation.x=-Math.PI/2,_.position.set(-.07,.0405,.055),o.add(_),this.tri=_;let g=new z(new Zt(.005,.005,.02,12),l);g.rotation.z=Math.PI/2,g.position.set(.17,.01,-.06),o.add(g);let E=[new S(.18,.01,-.06),new S(.26,-.02,-.08),new S(.34,-.029,.02),new S(.22,-.029,.16),new S(-.05,-.029,.22),new S(-.3,-.029,.12),new S(-.42,-.029,-.1),new S(-.3,-.029,-.28),new S(-.1,-.029,-.32)],b=new Vn(E),T=new lt({color:1381914,metalness:.3,roughness:.35});t.add(new z(new ui(b,200,.0022,8),T));let R=new Vn([E[8],new S(.02,-.029,-.36),new S(.1,-.024,-.3)]),I=new Vn([E[8],new S(-.02,-.029,-.42),new S(.04,-.024,-.48)]);for(let xe of[R,I]){t.add(new z(new ui(xe,40,.0018,8),T));let X=new z(new nn(.014,24,16),l);X.scale.set(1,.6,1),X.position.copy(xe.getPoint(1)),t.add(X);let j=new z(new Zt(.013,.013,.006,24),new lt({color:789516,roughness:.9}));j.position.copy(xe.getPoint(1)).add(new S(0,.006,0)),t.add(j)}let U=Ft(256,160),y=U.getContext("2d");y.fillStyle="#16171a",y.fillRect(0,0,256,160),y.fillStyle="#d9d2c2",y.fillRect(18,112,220,30),y.fillStyle="#16171a",y.font=`700 16px ${wt.mono}`,y.fillText("DAT  120",30,133),y.fillStyle="#b8b0a0",y.font=`500 11px ${wt.mono}`,y.fillText("SIDE A",176,133);let M=new z(new pe(.1,.062),new lt({map:hn(U),metalness:.2,roughness:.6}));M.rotation.x=-Math.PI/2,M.position.set(Oo,.0303,kr),o.add(M);let D=new z(new Or(.108,.006,.07,2,.002),c);D.position.set(Oo,.0315,kr),D.scale.set(1,1,1),o.add(D);let P=new lt({color:15262938,metalness:.05,roughness:.5}),L=new lt({color:2759186,metalness:.55,roughness:.28});this.reels=[],[-.024,.024].forEach((xe,X)=>{let j=new Qt;j.position.set(Oo+xe,.0352,kr-.004),j.add(new z(new Zt(X?.0125:.0175,X?.0125:.0175,.0022,40),L)),j.add(new z(new Zt(.0072,.0072,.0034,24),P));for(let Z=0;Z<6;Z++){let $=new z(new ot(.0022,.0038,.0014),c),te=Z/6*Math.PI*2;$.position.set(Math.cos(te)*.0046,0,Math.sin(te)*.0046),$.rotation.y=-te,j.add($)}let de=new z(new ot(.0115,.0036,.0016),P);j.add(de),o.add(j),this.reels.push(j)});let B=new z(new ot(.05,.002,6e-4),L);B.position.set(Oo,.0352,kr+.018),o.add(B),this.reelIdx=this.reels.map(xe=>o.children.indexOf(xe));let F=new z(new pe(.104,.066),new lt({color:2240576,metalness:.4,roughness:.22,transparent:!0,opacity:.18,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.set(Oo,.0372,kr),o.add(F);let J=o.clone();J.scale.y=-1,J.position.y=-.06,t.add(J),this.mir=J,this.FU={...this.U,uAmb:{value:.05},uKi:{value:1},uMir:{value:1},uKc:{value:new _e},uKp:{value:new S}};let G=new z(new pe(30,30),new ne({vertexShader:Qd,fragmentShader:x_,uniforms:this.FU,transparent:!0,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=-.03,t.add(G),this.key=new as(16777215,0,8,.6,.5,1),t.add(this.key),t.add(this.key.target),this.rim=new Rr(16777215,0),t.add(this.rim),this.amb=new Cr(16777215,0),t.add(this.amb);let ce=400,re=new qe,he=new Float32Array(ce*3),ze=ft(9);for(let xe=0;xe<ce;xe++)he[xe*3]=(ze()-.5)*1.4,he[xe*3+1]=ze()*.8,he[xe*3+2]=(ze()-.5)*1.4;re.setAttribute("position",new We(he,3)),this.dust=new bt(re,new Cn({color:16771272,size:.004,transparent:!0,opacity:.5,blending:Pe,depthWrite:!1})),t.add(this.dust);{let de=yt=>{let Be=Ft(512,192),nt=Be.getContext("2d");return r0(nt,yt,{mode:"\u25B6 PLAY",time:"03:43",sub:"REPEAT 1",bat:1}),nt.getImageData(0,0,512,192).data},Z=de("26"),$=de("25"),te=[],me=[],Me=ft(33),Oe=(yt,Be,nt)=>{let Ve=0;for(let vt=0;vt<4;vt++)for(let Ge=0;Ge<4;Ge++)Ve=Math.max(Ve,yt[((nt*4+vt)*512+Be*4+Ge)*4+1]);return Ve>150?1:0};for(let yt=0;yt<48;yt++)for(let Be=0;Be<128;Be++){let nt=zo+((Be+.5)/128-.5)*.128,Ve=Bo+((yt+.5)/48-.5)*.048,vt=Math.min(1,Math.hypot(nt-Wn,Ve-qn)/.07),Ge=Me()<.04*(1-vt)+.004?1:0;te.push(nt,Ve,Oe(Z,Be,yt)+2*Oe($,Be,yt)),me.push(Me(),Me(),Ge,vt)}let N=new sn;N.index=new We(new Uint16Array([0,1,2,0,2,3]),1),N.setAttribute("position",new Ye([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),N.setAttribute("aCell",new ut(new Float32Array(te),3)),N.setAttribute("aR",new ut(new Float32Array(me),4)),N.instanceCount=128*48,this.PU={uT:{value:0},uCell:{value:.001},uAlt:{value:0},uMode:{value:0},uFade:{value:1}},this.pix=new z(N,new ne({vertexShader:y_,fragmentShader:__,uniforms:this.PU,transparent:!0,depthWrite:!1,blending:Pe})),this.pix.frustumCulled=!1,this.pix.renderOrder=5,t.add(this.pix)}{let xe=Ft(512,192),X=xe.getContext("2d");r0(X,"27",{mode:"\u25B6\u25B6|",time:"00:00",sub:"NEXT",bat:1});let j=X.getImageData(0,0,512,192).data,de=[],Z=[],$=[],te=ft(21);for(let Me=60;Me<176;Me+=2)for(let Oe=60;Oe<250;Oe+=2)j[(Me*512+Oe)*4+1]>200&&(de.push(zo+(Oe/512-.5)*.128,.0312,Bo+(Me/192-.5)*.048),Z.push(Oe/512,te(),te()),$.push(0));for(let Me=0;Me<500;Me++)de.push(zo+(te()-.5)*.13,.0312,Bo+(te()-.5)*.05),Z.push(te()*.5,te(),te()*.6),$.push(1);let me=new qe;me.setAttribute("position",new Ye(de,3)),me.setAttribute("aR",new Ye(Z,3)),me.setAttribute("aE",new Ye($,1)),this.SU={uT:{value:-1},uS:{value:1}},this.sparks=new bt(me,new ne({vertexShader:m_,fragmentShader:v_,uniforms:this.SU,transparent:!0,depthWrite:!1,blending:Pe})),this.sparks.frustumCulled=!1,t.add(this.sparks)}this.lcdM=x,this.metal=l,this._s=""}draw(e){let t="26",n="\u25B6 PLAY",i="REPEAT 1",r,a=e>200;if(a){let l=e>224.4;t="27",n=l?"\u25A0 STOP":"\u25C0\u25C0 REW",i=l?"END":"REW";let c=l?0:Math.max(0,(224.4-e)*40);r=`${String(Math.floor(c/60)).padStart(2,"0")}:${String(Math.floor(c%60)).padStart(2,"0")}`}else{t=e<un?Math.floor(e/1.07)%4===3?"25":"26":"27",e<i0?n=Math.floor(e*2)%2?"\u25B6 PLAY":"\u25B6":e<un&&(n="\u25B6\u25B6|"),i=e<un?"REPEAT 1":"NEXT";let l=e<un?e%4.3+3*60+41:e-un;r=`${String(Math.floor(l/60)).padStart(2,"0")}:${String(Math.floor(l%60)).padStart(2,"0")}`}let o=t+n+r+i;o!==this._s&&(this._s=o,this.lg.clearRect(0,0,512,192),r0(this.lg,t,{mode:n,time:r,sub:i,bat:a?.2:1}),this.lt.needsUpdate=!0)}update(e){let t=e>200,n=h_.find(g=>e>=g[0]&&e<g[1]),i=d_(e,n[2]),r=ae.hitPulse("kick",e,8),a=!t&&e>un?.0015*r:0,o=.0012*Math.sin(e*.9)+8e-4*Math.sin(e*1.7+1),l=!t&&e<4.6?1-V(3.4,4.6,e):0;this.camera.position.set(i[0]+a+o*(1-l),i[1]+o*.6*(1-l),i[2]),this.camera.up.set(0,1,0),Math.abs(i[0]-i[3])<.001&&Math.abs(i[2]-i[5])<.03&&this.camera.up.set(0,0,-1),this.camera.lookAt(i[3],i[4],i[5]),this.camera.fov=i[6],this.camera.updateProjectionMatrix(),this.dome.position.copy(this.camera.position);let c=u_(e),h=jd[c],u=t?1-V(225.4,226.3,e)*.7:c===1?V(4.7,6,e):1;this.U.uEnv.value=c,this.U.uT.value=e,this.U.uK.value=r,this.U.uRev.value=u,this.FU.uMir.value=c===3?0:1,this.key.position.set(...h.kp),this.key.target.position.set(0,0,0),this.key.color.setHex(h.kc);let f=h.ki*u*(1+.2*r);c===2&&(f*=.25+.75*f_(0,0,e)),c===1&&(f*=.8+.2*Math.sin(e*1.3)),c===4&&!t&&(f*=1+1.2*V(un-.05,un+.2,e)),this.key.intensity=f,this.rim.position.set(...h.rp),this.rim.color.setHex(h.rc),this.rim.intensity=h.ri*u,this.amb.intensity=h.amb*3*u,this.scene.environment=this.envs[c],this.scene.environmentIntensity=h.ei*u,this.U.uSun.value.set(...h.kp).normalize(),this.FU.uKi.value=f,this.FU.uKc.value.setHex(h.kc),this.FU.uKp.value.set(...h.kp),this.FU.uAmb.value=h.amb,this.dust.visible=c<=2,this.dust.rotation.y=e*.03,this.dust.position.y=-(e*.01%.2);let d=!t&&e<6.3;this.pix.visible=d,this.PU.uT.value=e,this.PU.uMode.value=V(3.6,4.6,e),this.PU.uFade.value=1-V(5,5.9,e),this.PU.uAlt.value=Math.floor(e/1.07)%4===3?1:0;let v=p_(e);this.reels.forEach((g,E)=>{g.rotation.y=-v*(E?1.4:1),this.mir.children[this.reelIdx[E]].rotation.y=g.rotation.y});let x=t?-1:e-fs;this.SU.uT.value=x,this.SU.uS.value=this.ctx.h*.012,this.sparks.visible=x>-.05;let p=t?0:V(fs,fs+.5,e),m=t?1:V(4.9,5.9,e);this.lcdM.color.setScalar(m*(1-p*.9)),this.draw(e),this.lcdLight.intensity=(.004+.002*Math.sin(e*40))*m+(t?0:.05*V(fs-.1,fs+.2,e)*(1-V(fs+.3,10.5,e)));let _=t?V(224.2,224.4,e):V(i0-.08,i0,e)*(1-V(un+.05,un+.3,e));this.btn[2].position.y=.034-_*.005,this.mir.children[this.dev.children.indexOf(this.btn[2])].position.y=this.btn[2].position.y,this.tri.material.color.setHex(Math.floor(e*2)%2||e>un?2883464:670238)}post(e){let t=e>200,n=t?0:V(un-.05,un+.3,e),i=0;if(!t)for(let a of c_)e>=a&&(i=Math.max(i,Math.exp(-(e-a)*14)));let r=t?0:1-V(4.4,5.6,e);return{exposure:1.05,bloom:.55+r*.1+n*.3+(t?0:V(fs,fs+.6,e)*.5),bloomThr:.78+r*.1,grain:.09,vig:.65,ca:.6+r*.8+i*2,dust:.25,letter:.12,fadeB:t?V(225.2,226.2,e)*.6:0,fadeW:0,glitch:(t&&e<224.4?.25:0)+i*.6,scan:t?.2:i*.5,punch:ae.hitPulse("kick",e,10)*.3*(e>un?1:.3)}}};var o0="vec3 rotY(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }",Go=`varying vec3 vN, vW;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`,tp=`vec3 dirOf(vec2 uv){ float lon = (uv.x - 0.5) * 6.2831853, lat = (uv.y - 0.5) * 3.1415926; return vec3(cos(lat) * sin(lon), sin(lat), cos(lat) * cos(lon)); }
float fbm6(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<6;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
float fbm9(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<9;i++){ s += a*vnoise3(p); p = p*2.01 + 7.3; a *= 0.5; } return s; }
float ridge(vec3 p){ float s = 0.0, a = 0.5, w = 1.0; for(int i=0;i<7;i++){ float n = 1.0 - abs(vnoise3(p) * 2.0 - 1.0); n *= n * w; w = clamp(n * 1.6, 0.0, 1.0); s += a * n; p = p * 2.07 + 11.3; a *= 0.5; } return s; }`,np=`varying vec2 vUv; ${Ee} ${tp}
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
  gl_FragColor = vec4(floor(hh / 256.0) / 255.0, mod(hh, 256.0) / 255.0, clamp(moist, 0.0, 1.0), clamp(city, 0.0, 1.0)); }`,ip=`varying vec2 vUv; ${Ee} ${tp}
void main(){
  vec3 p = dirOf(vUv); float lat = p.y;
  vec3 w = vec3(fbm6(p * 2.0 + 3.0), fbm6(p * 2.0 + 8.0), fbm6(p * 2.0 + 13.0)) - 0.5;
  vec3 q = p * vec3(2.2, 4.5, 2.2) + w * 1.6 + vec3(0.0, 0.0, sin(lat * 12.0) * 0.4);   // latitude-banded, swirled
  float d = fbm9(q * 1.3) + 0.25 * (fbm6(p * 9.0 + w * 3.0) - 0.5);
  d += 0.12 * cos(lat * 7.5) - 0.06;
  float e = fbm9(p * 30.0 + w * 4.0); d -= (1.0 - e) * 0.18;                   // eroded, wispy edges
  gl_FragColor = vec4(smoothstep(0.36, 0.7, d), e, 0.0, 1.0); }`,sp=`
uniform float uT, uRot, uRed, uFront, uEdge, uCloud, uLights, uK, uBump;
uniform vec3 uSun, uAxis; uniform sampler2D tH, tC; uniform vec2 uTexel;
varying vec3 vN, vW;
${Ee} ${o0}
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
}`,rp=`
uniform vec3 uSun, uCol; uniform float uA; varying vec3 vN, vW;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float d = dot(n, V);
  float g = pow(smoothstep(0.0, -0.4, d), 2.2);
  float s = 0.2 + 0.8 * pow(max(dot(n, uSun), 0.0), 0.7);
  gl_FragColor = vec4(uCol * g * s * uA, 1.0); }`,op=`
uniform float uT, uRot, uFront, uCross; uniform vec3 uAxis;
attribute vec4 aP; attribute vec2 aT;
varying vec2 vUv; varying float vA;
${o0}
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
}`,ap=`
uniform float uK; varying vec2 vUv; varying float vA;
void main(){
  float dv = abs(vUv.x - 0.5), dh = abs(vUv.y - 0.72);
  float fy = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
  float vert = (exp(-dv * dv * 1600.0) + 0.3 * exp(-dv * dv * 70.0)) * fy;
  float hor = (exp(-dh * dh * 2600.0) + 0.3 * exp(-dh * dh * 120.0)) * smoothstep(0.5, 0.3, dv);
  float a = max(vert, hor);
  vec3 col = mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.95, 0.86), clamp(a * 1.4 - 0.35, 0.0, 1.0));
  gl_FragColor = vec4(col * a * vA * (1.0 + 0.5 * uK), 1.0);
}`,lp=`
uniform float uT, uRot, uSoul, uDir, uPx; uniform vec3 uQ, uCol;
attribute vec4 aP, aR;
varying float vA; varying vec3 vC;
${Ee} ${o0}
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
}`,Vl=`
uniform float uK; varying float vA; varying vec3 vC;
void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 18.0) * vA;
  gl_FragColor = vec4(vC * a * (1.0 + 0.6 * uK), 1.0); }`,cp="varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",hp=`
uniform float uT, uA, uK; varying vec2 vP; ${Ee}
void main(){ float r = length(vP), a = atan(vP.y, vP.x);
  float line = exp(-pow((r - 1.55) * 90.0, 2.0)) + 0.6 * exp(-pow((r - 1.64) * 140.0, 2.0));
  float band = exp(-pow((r - 1.55) * 7.0, 2.0)) * (0.25 + 0.75 * vnoise(vec2(a * 24.0, uT * 0.6)));
  float rev = smoothstep(0.0, 0.05, uA * 6.2832 - (a + 3.1416));
  gl_FragColor = vec4(vec3(1.0, 0.24, 0.1) * (line * 1.3 + band * 0.3) * rev * (1.0 + 0.6 * uK), 1.0); }`,cb=`
uniform sampler2D tMap; uniform float uT, uA, uRev; varying vec2 vUv; ${Ee}
void main(){ vec4 m = texture2D(tMap, vUv);
  float rev = smoothstep(1.0 - uRev * 1.1, 1.0 - uRev * 1.1 + 0.08, vUv.y); // draws top (Keter) -> bottom
  float fl = 0.8 + 0.2 * vnoise(vec2(uT * 12.0, 0.0));
  gl_FragColor = vec4(m.rgb * rev * uA * fl, 1.0); }`,up=`
uniform float uT, uRed, uA; varying vec2 vUv; ${Ee}
void main(){ vec2 p = vUv * vec2(3.0, 1.7);
  float n = fbm(p * 1.3 + vec2(uT * 0.01, 0.0)), m = fbm(p * 3.0 - 4.0);
  vec3 c = mix(vec3(0.02, 0.04, 0.12) * n + vec3(0.05, 0.03, 0.1) * m * m, vec3(0.09, 0.005, 0.01) * n + vec3(0.05, 0.01, 0.0) * m * m, uRed);
  gl_FragColor = vec4(c * uA * smoothstep(0.3, 0.9, n + 0.2), 1.0); }`,fp=`
uniform float uT, uHex, uSpread, uK, uFront; uniform vec3 uAxis; varying vec3 vN, vW; ${Ee}
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
  gl_FragColor = vec4(col * a, 1.0); }`,dp=`
uniform float uT, uVort, uPx; uniform vec3 uQ; attribute vec4 aR; varying float vA; varying vec3 vC; ${Ee}
void main(){
  float s = fract(aR.x + uT * (0.06 + 0.08 * aR.y)), e = s * s;
  float r = mix(0.35 + 0.9 * aR.z, 0.02, pow(s, 0.7));
  float th = aR.w * 6.2832 + s * (9.0 + 5.0 * aR.y) + uT * 0.8;
  vec3 base = vec3(0.0, 0.95, 0.0), p = mix(base, uQ, e);
  p.x += cos(th) * r; p.z += sin(th) * r; p += curl3(p * 4.0 + uT * 0.2) * 0.03 * (1.0 - s);
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.0, 0.1, s) * smoothstep(1.0, 0.9, s) * uVort * (0.5 + 0.5 * sin(uT * 7.0 + aR.w * 50.0));
  vC = mix(vec3(1.0, 0.3, 0.12), vec3(1.0, 0.92, 0.85), s * s);
  gl_PointSize = clamp(uPx * (0.5 + aR.z) / max(-mv.z, 0.15), 1.0, 10.0); }`,pp=`
uniform float uT, uCrack, uK; varying vec3 vN, vW; ${Ee}
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  float r = abs(fbm3(n * 3.0 + 7.0) - 0.5), r2 = abs(fbm3(n * 7.0 - 3.0) - 0.5);
  float cr = exp(-r * r * 4000.0) * smoothstep(0.3, 0.9, uCrack + fbm3(n * 2.0) - 0.4) + exp(-r2 * r2 * 9000.0) * 0.35 * uCrack;
  vec3 c = vec3(0.004, 0.0, 0.002) + vec3(1.0, 0.18, 0.05) * fres * 1.4 + vec3(1.0, 0.4, 0.15) * cr * (0.7 + 0.5 * uK);
  gl_FragColor = vec4(c, 1.0); }`,mp=`
uniform float uRev, uSz; attribute vec4 aN; varying vec2 vUv; varying float vA;
void main(){ vUv = uv; vA = smoothstep(aN.w, aN.w + 0.06, uRev);
  vec4 mv = viewMatrix * vec4(aN.xyz, 1.0); mv.xy += position.xy * uSz * (0.6 + 0.4 * vA);
  gl_Position = projectionMatrix * mv; }`,vp=`
uniform float uA, uK, uT; varying vec2 vUv; varying float vA;
void main(){ float r = length(vUv - 0.5) * 2.0;
  float ring = exp(-pow((r - 0.62) * 22.0, 2.0)) + 0.5 * exp(-pow((r - 0.45) * 40.0, 2.0));
  float core = exp(-r * r * 30.0) * 1.6 + exp(-r * r * 4.0) * 0.25;
  vec3 col = vec3(1.0, 0.35, 0.12) * ring * 1.3 + vec3(1.0, 0.8, 0.6) * core;
  gl_FragColor = vec4(col * vA * uA * (1.0 + 0.7 * uK), 1.0); }`,gp=`
uniform float uRev, uW; attribute vec3 aA, aB; attribute float aR; varying float vX, vA;
void main(){ float u = position.y + 0.5; vX = position.x * 2.0;
  vec3 p = mix(aA, aB, u), dir = normalize(aB - aA), side = normalize(cross(dir, normalize(cameraPosition - p)));
  float grow = clamp((uRev - aR) / 0.12, 0.0, 1.0); vA = step(u, grow) * step(0.001, grow);
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * position.x * uW, 1.0); }`,xp=`
uniform float uA, uK; varying float vX, vA;
void main(){ float a = exp(-vX * vX * 30.0) + 0.25 * exp(-vX * vX * 4.0);
  gl_FragColor = vec4(mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.85, 0.7), exp(-vX * vX * 60.0)) * a * vA * uA * (0.9 + 0.5 * uK), 1.0); }`,yp=`varying vec3 vN, vW; varying float vZ; uniform float uLen;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vZ = position.z / uLen + 0.5;
  gl_Position = projectionMatrix * viewMatrix * w; }`,_p=`
uniform float uT, uK, uGlow; varying vec3 vN, vW; varying float vZ;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - abs(dot(n, V)), 2.5), spec = pow(max(dot(reflect(-V, n), normalize(vec3(0.5, 0.8, 0.3))), 0.0), 40.0);
  float pulse = pow(0.5 + 0.5 * sin(vZ * 40.0 - uT * 18.0), 6.0) * smoothstep(0.1, 0.9, vZ);
  vec3 c = vec3(0.09, 0.005, 0.004) + vec3(1.0, 0.25, 0.08) * fres * 1.6 + vec3(1.0, 0.85, 0.7) * spec * 1.5
    + vec3(1.0, 0.45, 0.15) * pulse * uGlow * (0.6 + 0.6 * uK) + vec3(1.0, 0.7, 0.5) * smoothstep(0.93, 1.0, vZ) * uGlow * 0.6;
  gl_FragColor = vec4(c, 1.0); }`,Ep=`
uniform float uT, uPx, uWake; uniform vec3 uP, uD; attribute vec4 aR; varying float vA; varying vec3 vC; ${Ee}
void main(){ float age = aR.x * 1.6; vec3 side = normalize(cross(uD, vec3(0.0, 1.0, 0.0))), up = cross(side, uD);
  float an = aR.y * 6.2832 + age * 6.0, rad = (0.01 + age * 0.09) * (0.3 + aR.z);
  vec3 p = uP - uD * (0.26 + age * 1.1) + (side * cos(an) + up * sin(an)) * rad + curl3(vec3(aR.w * 20.0, age, uT * 0.3)) * age * 0.04;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = (1.0 - aR.x) * uWake * (0.5 + 0.5 * sin(uT * 9.0 + aR.w * 60.0)); vC = mix(vec3(1.0, 0.85, 0.7), vec3(1.0, 0.25, 0.08), aR.x);
  gl_PointSize = clamp(uPx * (0.4 + aR.z) / max(-mv.z, 0.1), 1.0, 9.0); }`,Mp=`
float wv(vec2 p, float t){ float h = 0.0;
  h += 0.035 * sin(dot(p, vec2(0.9, 0.45)) * 2.2 - t * 1.1);
  h += 0.022 * sin(dot(p, vec2(-0.5, 0.85)) * 3.7 - t * 1.6);
  h += 0.012 * sin(dot(p, vec2(0.2, -1.0)) * 7.1 - t * 2.3);
  h += 0.006 * sin(dot(p, vec2(-0.95, -0.3)) * 13.0 - t * 3.1);
  float r = length(p); h += 0.018 * sin(r * 11.0 - t * 2.6) * exp(-max(r - 0.9, 0.0) * 1.3) * smoothstep(0.75, 1.0, r);  // swell rings off the globe
  return h * smoothstep(0.7, 0.95, r); }`,bp=`uniform float uT, uLvl; varying vec3 vW; varying float vH; ${Mp}
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); float h = wv(w.xz, uT); w.y = uLvl + h; vW = w.xyz; vH = h;
  gl_Position = projectionMatrix * viewMatrix * w; }`,wp=`
vec3 sky(vec3 d, vec3 S, float t){ float y = d.y;
  vec3 c = mix(vec3(1.1, 0.34, 0.12), vec3(0.42, 0.04, 0.05), smoothstep(-0.02, 0.22, y));
  c = mix(c, vec3(0.07, 0.0, 0.02), smoothstep(0.2, 0.75, y));
  float cl = fbm(vec2(atan(d.x, d.z) * 5.0 + t * 0.01, y * 18.0)); c *= 0.8 + 0.45 * cl * smoothstep(0.4, 0.04, y);
  float s = max(dot(d, S), 0.0); c += vec3(1.6, 0.7, 0.35) * pow(s, 300.0) * 3.0 + vec3(1.0, 0.35, 0.15) * pow(s, 8.0) * 0.5;
  return c; }`,Sp=`uniform float uT; uniform vec3 uSun; varying vec3 vD; ${Ee} ${wp}
void main(){ gl_FragColor = vec4(sky(normalize(vD), uSun, uT), 1.0); }`,Tp=`uniform float uT, uLvl, uK; uniform vec3 uSun; varying vec3 vW; varying float vH; ${Ee} ${Mp} ${wp}
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
  gl_FragColor = vec4(col * (1.0 + 0.15 * uK), 1.0); }`,Ap="varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }";function M_(s,e,t=ve.inOut){let n=0;for(;n+1<s.length&&s[n+1][0]<=e;)n++;let i=s[n],r=s[Math.min(s.length-1,n+1)],a=r===i||r[0]-i[0]<.1?0:t(le((e-i[0])/(r[0]-i[0]))),o=(l,c=0)=>De(i[l]??c,r[l]??c,a);return{p:[o(1),o(2),o(3)],q:[o(4),o(5),o(6)],fov:o(7),roll:o(8),i:n,u:a}}function zt(s,e,t,n=0,i){let r=M_(e,t,i);return s.position.set(r.p[0]+n*Math.sin(t*91),r.p[1]+n*Math.sin(t*77+1),r.p[2]),s.up.set(Math.sin(r.roll),Math.cos(r.roll),0),s.lookAt(r.q[0],r.q[1],r.q[2]),s.fov!==r.fov&&(s.fov=r.fov,s.updateProjectionMatrix()),r}var b_={A:[[10.4,0,.35,1.62,0,1.05,0,40,-.12],[12.67,.12,.42,1.45,0,1.1,0,40,-.05],[12.72,.3,-.85,3.9,0,.6,-.6,44,.05],[17,.05,1.85,1.7,0,2.35,-.6,50,-.02]],B:[[136.1,.2,.3,3.5,0,0,0,38],[137.24,.28,.32,3.25,0,0,0,38],[137.29,1.35,.5,-1.45,0,.2,0,42,.1],[139.38,1.15,.7,-1.75,0,.25,0,42,.05],[139.43,-1.2,.4,-3.1,0,0,0,38],[141.3,-1.45,.55,-3.35,0,0,0,38]],G:[[113.2,1.3,-.08,4.6,-.1,.1,0,30,.04],[115.3,.9,-.07,3.7,-.1,.12,0,30,0]],C:[[207.4,0,.3,2.3,0,.95,0,36],[211.95,.06,.34,2.12,0,.97,0,36],[212,2.2,1,2,0,0,0,38],[216.24,1.9,1.1,2.5,0,0,0,38],[216.29,1.2,.5,2.6,0,0,0,36],[218.5,3.6,1.6,8.8,0,0,0,36]]},l0=113.3;var w_=-.22,Rp=s=>s<100?"A":s<l0-.05?"L":s<130?"G":s<180?"B":"C",Gl=108.05,S_=112.44,Cp=new S(1.9,1.1,4.8),Pp=new S(.25,.35,1).normalize().multiplyScalar(1.3),T_=new S(.3,.2,1).normalize(),Wo=new S(0,2.4,-.6),Vr=[[0,0],[1,1],[-1,1],[1,2.6],[-1,2.6],[0,3.3],[1,4.2],[-1,4.2],[0,5],[0,6]],qo=[[0,1],[0,2],[0,5],[1,2],[1,3],[1,5],[2,4],[2,5],[3,4],[3,5],[3,6],[4,5],[4,7],[5,6],[5,7],[5,8],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9]],a0=([s,e])=>new S(s*.85,4.3-e*.72,-3.6-Math.abs(s)*.25),Wl=class extends ht{constructor(e){super(e,{fov:40,near:.02,far:200});let t=this.scene,n=ft(27);this.U={uT:{value:0},uRot:{value:0},uRed:{value:1},uFront:{value:-1},uEdge:{value:0},uCloud:{value:1},uLights:{value:0},uK:{value:0},uSun:{value:new S(1,.3,0).normalize()},uAxis:{value:T_},uCross:{value:0},uSoul:{value:0},uDir:{value:1},uPx:{value:6},uQ:{value:new S(0,2.6,0)},uCol:{value:new _e(1,.45,.2)},uA:{value:0},uRev:{value:0}};let i=this.U,r=4096,a=2048,o=new Po(e.renderer),l=()=>{let $=new Bn(r,a,{type:ci,depthBuffer:!1,generateMipmaps:!0,minFilter:li,magFilter:Dt,wrapS:zi,wrapT:ai});return $.texture.anisotropy=Math.min(8,e.renderer.capabilities.getMaxAnisotropy()),$};this.rtH=l(),this.rtC=l(),o.run(Gn(np,{}),this.rtH),o.run(Gn(ip,{}),this.rtC),e.renderer.setRenderTarget(null),Object.assign(i,{tH:{value:this.rtH.texture},tC:{value:this.rtC.texture},uTexel:{value:new se(1/r,1/a)},uBump:{value:.022}}),this.NU={uT:i.uT,uRed:{value:1},uA:{value:1}},this.neb=us(up,this.NU),t.add(this.neb);let c=3e3,h=new Float32Array(c*3),u=new Float32Array(c*3);for(let $=0;$<c;$++){let te=new S(n()*2-1,n()*2-1,n()*2-1).normalize().multiplyScalar(60);h.set([te.x,te.y,te.z],$*3);let me=.25+n()**3*1.4,Me=n();u.set([me,me*(.85+.15*Me),me*(.8+.3*Me)],$*3)}let f=new qe;f.setAttribute("position",new We(h,3)),f.setAttribute("color",new We(u,3)),this.stars=new bt(f,new Cn({size:.14,vertexColors:!0,transparent:!0,blending:Pe,depthWrite:!1})),t.add(this.stars);let d=new z(new nn(1,256,160),new ne({vertexShader:Go,fragmentShader:sp,uniforms:i}));this.AU={uSun:i.uSun,uCol:{value:new _e},uA:{value:1}};let v=new z(new nn(1.07,96,64),new ne({vertexShader:Go,fragmentShader:rp,uniforms:this.AU,side:mt,transparent:!0,blending:Pe,depthWrite:!1}));t.add(d,v),this.globeParts=[d,v];let x=170,p=new sn;p.copy(new pe(1,1)),p.instanceCount=x;let m=new Float32Array(x*4),_=new Float32Array(x*2);for(let $=0;$<x;$++){let te=$<14?new S(n()*.8-.4,.55+n()*.3,.8+n()*.2-.1).normalize():new S(n()*2-1,n()*1.6-.5,n()*2-1).normalize();m.set([te.x,te.y,te.z,0],$*4),_.set([$<14?10.6+$*.13:11.6+($-14)/x*4.6+n()*.3,n()<.05?.3+n()*.15:.04+n()*.13],$*2)}p.setAttribute("aP",new ut(m,4)),p.setAttribute("aT",new ut(_,2));let g=new z(p,new ne({vertexShader:op,fragmentShader:ap,uniforms:i,transparent:!0,blending:Pe,depthWrite:!1,side:je}));g.frustumCulled=!1,t.add(g);let E=12e3,b=new qe,T=new Float32Array(E*4),R=new Float32Array(E*4);for(let $=0;$<E;$++){let te=new S(n()*2-1,n()*2-1,n()*2-1).normalize();T.set([te.x,te.y,te.z,.55+n()*.45],$*4),R.set([n(),n(),n(),n()],$*4)}b.setAttribute("position",new We(new Float32Array(E*3),3)),b.setAttribute("aP",new We(T,4)),b.setAttribute("aR",new We(R,4));let I=new bt(b,new ne({vertexShader:lp,fragmentShader:Vl,uniforms:i,transparent:!0,blending:Pe,depthWrite:!1}));I.frustumCulled=!1,t.add(I),this.cm=g,this.RU={uT:i.uT,uA:{value:0},uK:i.uK},this.ring=new z(new Tr(1.4,1.8,256,1),new ne({vertexShader:cp,fragmentShader:hp,uniforms:this.RU,transparent:!0,blending:Pe,depthWrite:!1,side:je})),this.ring.rotation.set(1.22,.25,0),t.add(this.ring);let U=$=>($.frustumCulled=!1,t.add($),$),y={transparent:!0,blending:Pe,depthWrite:!1};this.HU={uT:i.uT,uK:i.uK,uFront:i.uFront,uAxis:i.uAxis,uHex:{value:0},uSpread:{value:0}},this.hex=U(new z(new nn(1.035,160,100),new ne({vertexShader:Go,fragmentShader:fp,uniforms:this.HU,...y}))),this.MU={uT:i.uT,uK:i.uK,uCrack:{value:0}},this.moon=U(new z(new nn(.3,96,64),new ne({vertexShader:Go,fragmentShader:pp,uniforms:this.MU}))),this.moon.position.copy(Wo),this.halo=U(new En(new pn({map:e.shared.glow,color:16726548,...y}))),this.halo.position.copy(Wo).add(new S(0,0,-.15));let M=7e3,D=new qe,P=new Float32Array(M*4);for(let $=0;$<M;$++)P.set([n(),n(),n()**1.5,n()],$*4);D.setAttribute("position",new We(new Float32Array(M*3),3)),D.setAttribute("aR",new We(P,4)),this.VU={uT:i.uT,uPx:i.uPx,uQ:{value:Wo},uVort:{value:0}},this.vort=U(new bt(D,new ne({vertexShader:dp,fragmentShader:Vl,uniforms:{...this.VU,uK:i.uK},...y}))),this.TU={uRev:{value:0},uA:{value:0},uK:i.uK,uT:i.uT,uSz:{value:.34},uW:{value:.025}};let L=new sn;L.copy(new pe(1,1)),L.instanceCount=Vr.length;let B=new Float32Array(Vr.length*4);Vr.forEach(($,te)=>{let me=a0($);B.set([me.x,me.y,me.z,$[1]/6.4],te*4)}),L.setAttribute("aN",new ut(B,4));let F=new sn;F.copy(new pe(1,1,1,24)),F.instanceCount=qo.length;let J=new Float32Array(qo.length*3),G=new Float32Array(qo.length*3),ce=new Float32Array(qo.length);qo.forEach(([$,te],me)=>{J.set(a0(Vr[$]).toArray(),me*3),G.set(a0(Vr[te]).toArray(),me*3),ce[me]=Vr[$][1]/6.4+.02}),F.setAttribute("aA",new ut(J,3)),F.setAttribute("aB",new ut(G,3)),F.setAttribute("aR",new ut(ce,1)),this.beams=U(new z(F,new ne({vertexShader:gp,fragmentShader:xp,uniforms:this.TU,...y,side:je}))),this.nodes=U(new z(L,new ne({vertexShader:mp,fragmentShader:vp,uniforms:this.TU,...y})));let re=.5,he=$=>{let te=[];for(let me=0;me<=160;me++){let Me=me/160,Oe=(Me-.5)*re,N=Math.max(0,(Me-.8)/.2),yt=.011*(1-.4*Me)+N*N*.03,Be=Me*26*(1-N*.8)+$;te.push(new S(Math.cos(Be)*yt,Math.sin(Be)*yt,Oe))}return new Vn(te)};this.LU={uT:i.uT,uK:i.uK,uGlow:{value:1},uLen:{value:re}};let ze=new ne({vertexShader:yp,fragmentShader:_p,uniforms:this.LU});this.lance=new Qt;for(let $ of[0,Math.PI])this.lance.add(new z(new ui(he($),400,.0055,10),ze));this.lanceTip=new En(new pn({map:e.shared.glow,color:16756848,blending:Pe,depthWrite:!1,transparent:!0})),t.add(this.lance,this.lanceTip);let xe=4e3,X=new qe,j=new Float32Array(xe*4);for(let $=0;$<xe;$++)j.set([n(),n(),n(),n()],$*4);X.setAttribute("position",new We(new Float32Array(xe*3),3)),X.setAttribute("aR",new We(j,4)),this.WU={uT:i.uT,uPx:i.uPx,uK:i.uK,uWake:{value:0},uP:{value:new S},uD:{value:new S}},this.wake=U(new bt(X,new ne({vertexShader:Ep,fragmentShader:Vl,uniforms:this.WU,...y}))),this._s=new S,this._up=new S,this.GU={uT:i.uT,uK:i.uK,uSun:i.uSun,uLvl:{value:w_}},this.gsky=U(new z(new nn(80,48,24),new ne({vertexShader:Ap,fragmentShader:Sp,uniforms:this.GU,side:mt,depthWrite:!1}))),this.gsky.renderOrder=-10;let de=new pe(18,18,640,640).rotateX(-Math.PI/2);this.gsea=U(new z(de,new ne({vertexShader:bp,fragmentShader:Tp,uniforms:this.GU})));let Z=e.shared.glow;this.sun=new En(new pn({map:Z,color:16773592,blending:Pe,depthWrite:!1,transparent:!0})),this.streak=new En(new pn({map:Z,color:10470655,blending:Pe,depthWrite:!1,transparent:!0})),t.add(this.sun,this.streak),this._v=new S,this._d=new S,this._u=new S}update(e){let t=this.U,n=Rp(e),i=ae.hitPulse("kick",e,7);n!=="L"&&zt(this.camera,b_[n],e);let r=n==="G";if(this.gsky.visible=this.gsea.visible=r,this.stars.visible=this.neb.visible=!r,r){let u=Math.sin(e*1.7),f=Math.sin(e*1.1+1);this.camera.position.y+=.025*u,this.camera.rotateZ(.02*f),this.camera.rotateX(.01*u)}this.lance.visible=this.lanceTip.visible=this.wake.visible=n==="L";let a=this.camera.position;t.uT.value=e,t.uK.value=i,t.uPx.value=this.ctx.h*.012,t.uRot.value=e*.02+(n==="C"?1.4:n==="B"?.6:0);let o=0,l=t.uSun.value;this.RU.uA.value=0,this.TU.uA.value=0,this.HU.uHex.value=0,this.VU.uVort.value=0;let c=0,h=0;if(n==="A")t.uRed.value=1,t.uFront.value=-1,t.uEdge.value=0,t.uCloud.value=.3,t.uLights.value=0,t.uCross.value=.7,t.uSoul.value=V(10.9,12.5,e),t.uDir.value=1,t.uCol.value.setRGB(1,.45,.2),e<12.7?t.uQ.value.set(0,2.4,-.6):t.uQ.value.copy(Wo),l.set(.8,.5,.6).normalize(),this.RU.uA.value=V(13.4,15.2,e),this.HU.uHex.value=V(11.2,11.8,e),this.HU.uSpread.value=ve.inOut(le((e-11.3)/4.4)),this.VU.uVort.value=V(12.6,13.6,e),this.TU.uA.value=V(12.9,13.4,e),this.TU.uRev.value=ve.out(le((e-13)/3.2)),c=V(12.72,13.8,e),h=V(14,16.8,e),this.AU.uCol.value.setRGB(1,.25,.1);else if(n==="L"){let u=le((e-Gl)/(S_-Gl)),f=this._d.copy(Pp).sub(Cp).normalize(),d=this._v.copy(Cp).lerp(Pp,.08+.72*ve.in(u)*.6+.4*u*u*u);this.lance.position.copy(d),this.lance.lookAt(d.x+f.x,d.y+f.y,d.z+f.z),this.lance.rotateZ(e*1.5),this.lanceTip.position.copy(d).addScaledVector(f,.3),this.lanceTip.scale.setScalar(.045+.02*i+.1*V(111.6,112.4,e));let v=this._s.crossVectors(f,this._u.set(0,1,0)).normalize(),x=this._up.crossVectors(v,f),p=De(2.3,.2,ve.inOut(u)),m=De(.34,.3,u);this.camera.position.copy(d).addScaledVector(f,-Math.cos(p)*m).addScaledVector(v,Math.sin(p)*m).addScaledVector(x,.05+.03*Math.sin(u*3.1)),this.camera.up.copy(x).applyAxisAngle(f,.25*Math.sin(u*2.4)),this.camera.lookAt(this._u.copy(d).addScaledVector(f,De(-.02,.6,ve.inOut(u)))),this.camera.fov!==42&&(this.camera.fov=42,this.camera.updateProjectionMatrix()),this.WU.uWake.value=V(Gl,Gl+.4,e),this.WU.uP.value.copy(d),this.WU.uD.value.copy(f),t.uRed.value=1,t.uFront.value=-1,t.uEdge.value=0,t.uCloud.value=.3,t.uLights.value=0,t.uCross.value=.6,t.uSoul.value=.4,t.uDir.value=1,t.uQ.value.copy(Wo),t.uCol.value.setRGB(1,.45,.2),this.HU.uHex.value=.3+1.2*V(111.4,112.4,e),this.HU.uSpread.value=1,l.set(.8,.5,.6).normalize(),this.AU.uCol.value.setRGB(1,.25,.1)}else if(n==="G")t.uRed.value=0,t.uFront.value=4,t.uEdge.value=0,t.uCloud.value=1,t.uLights.value=0,t.uCross.value=0,t.uSoul.value=0,t.uCol.value.setRGB(.6,.8,1),t.uRot.value=.9+e*.03,l.set(-.85,.28,.3).normalize(),this.AU.uCol.value.setRGB(.35,.6,1);else if(n==="B"){let u=ve.inOut(le((e-136.3)/4.3));t.uRed.value=1,t.uFront.value=De(-.05,3.4,u),t.uEdge.value=1-V(140.3,141,e),t.uCloud.value=1,t.uLights.value=.3,t.uCross.value=1,t.uSoul.value=1-V(139.2,141,e),t.uDir.value=-1,this.HU.uHex.value=.22*(1-V(139,141,e)),this.HU.uSpread.value=1,t.uQ.value.set(0,2.6,0),t.uCol.value.setRGB(1,.6,.35),this._d.copy(a).normalize().add(this._u.set(.6,.5,0)).normalize(),l.copy(this._d),this.AU.uCol.value.setRGB(1,.25,.1).lerp(new _e(.35,.6,1),u)}else if(t.uRed.value=0,t.uFront.value=4,t.uEdge.value=0,t.uCloud.value=1,t.uLights.value=1,t.uCross.value=0,t.uSoul.value=.45*V(208,210,e)*(1-V(216,216.3,e)),t.uDir.value=-1,t.uQ.value.set(0,3,1.5),t.uCol.value.setRGB(.6,.8,1),this.AU.uCol.value.setRGB(.35,.6,1),e<211.97){let u=a.length(),f=Math.asin(1/u);this._d.copy(a).negate().normalize(),this._u.crossVectors(this._d,this.camera.up).normalize();let d=De(-.07,.1,ve.inOut(le((e-208.2)/3.4)));l.copy(this._d).applyAxisAngle(this._u,f+d),o=1}else l.set(e<216.27?.3:-.45,e<216.27?.45:.3,e<216.27?.85:.6).normalize();this.sun.position.copy(a).addScaledVector(l,40),this.streak.position.copy(this.sun.position),this.sun.scale.setScalar(o*(7+2*i)),this.streak.scale.set(o*30,o*.5,1),this.MU.uCrack.value=h,this.moon.visible=c>.001,this.moon.scale.setScalar(c),this.halo.visible=this.moon.visible,this.halo.scale.setScalar(c*(1.6+.6*h+.3*i)),this.hex.visible=this.HU.uHex.value>0,this.vort.visible=this.VU.uVort.value>0,this.nodes.visible=this.beams.visible=this.TU.uA.value>0,this.ring.visible=this.RU.uA.value>0,this.ring.rotation.z=e*.05,this.NU.uA.value=n==="C"?.6:.9,this.globeBob(r?e:null),this.NU.uRed.value=n==="A"||n==="L"?1:n==="B"?1-V(137.5,140.8,e):0}globeBob(e){for(let t of this.globeParts){if(e===null){t.position.set(0,0,0),t.rotation.set(0,0,0);continue}t.position.set(0,.03*Math.sin(e*1.3+.4),0),t.rotation.set(.06*Math.sin(e*.9),0,.05*Math.sin(e*1.2+1))}}post(e){let t=Rp(e),n=ae.hitPulse("kick",e,9),i={bloom:1,bloomThr:.7,grain:.07,vig:.6,ca:.8,dust:.15,punch:n*.25};return t==="L"?{...i,bloom:.9,tint:[1.05,.92,.88],dustCol:[1,.5,.3],shake:.003*n+.004*V(111.5,112.4,e),ca:.8+V(111.5,112.4,e)}:t==="G"?{...i,bloom:.85,bloomThr:.75,grain:.11,vig:.75,ca:1.1,flicker:.06,scratch:.35,weave:.4,leak:0,sat:1,contrast:1.08,tint:[1.02,.97,.95],dust:.3,dustCol:[1,.6,.45],fadeW:V(114.75,115.19,e)*.9+(1-V(l0,l0+.2,e))*.5}:t==="A"?{...i,tint:[1.06,.9,.86],dustCol:[1,.4,.3],shake:.002*n,flicker:.04}:t==="B"?{...i,bloom:.8+.6*ae.hitPulse("hit",e,5),bloomThr:.8,sat:1.05,grain:.05}:{...i,bloom:.6,bloomThr:.85,grain:.045,ca:.5,sat:1.1,lift:[0,.004,.012],exposure:1.02,fadeB:V(217.6,218.4,e)*.4}}};var Gr=40,c0=10,A_=1.12,R_=`
uniform sampler2D uDepT; uniform float uDep; varying vec2 vUv; varying float vD;
void main(){ vUv = uv; float d = texture2D(uDepT, uv).r; vD = d;
  vec3 p = position * (1.0 - uDep * d);                       // slide toward the rest camera (origin)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,C_=`
uniform sampler2D uMap; uniform float uK, uT; varying vec2 vUv; varying float vD; ${Ee}
void main(){ vec3 c = texture2D(uMap, vUv).rgb;
  float l = dot(c, vec3(0.3, 0.55, 0.15)), hot = smoothstep(0.62, 0.9, l) * smoothstep(0.0, 0.25, c.r - c.b);
  c += c * hot * (0.35 + 0.9 * uK);                              // engines / sun glints pulse on the kick
  c *= 0.92 + 0.08 * vnoise(vUv * 6.0 + uT * 0.4);
  gl_FragColor = vec4(c, 1.0); }`,P_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",I_=`
uniform float uSeed, uA, uT; uniform vec2 uSun; uniform vec3 uLit, uShade; varying vec2 vUv; ${Ee}
void main(){ vec2 q = vUv - 0.5;
  float f = fbm(vUv * 3.2 + uSeed * 7.0 + vec2(uT * 0.05, 0.0));
  float sh = 1.0 - smoothstep(0.1, 0.5, length(q * vec2(1.0, 1.6)));
  float a = smoothstep(0.35, 0.75, f * 0.9 + sh * 0.55) * sh;
  float lit = clamp(0.5 + dot(normalize(q + 1e-4), uSun) * 0.6 + (f - 0.5) * 1.2, 0.0, 1.0);
  vec3 c = mix(uShade, uLit, lit);
  gl_FragColor = vec4(c, a * uA); }`,U_=`
uniform float uT, uA; uniform vec3 uVel; attribute vec4 aR; varying float vA; varying vec2 vUv;
void main(){ vUv = uv;
  vec3 base = vec3((aR.x - 0.5) * 16.0, (aR.y - 0.5) * 9.0, -1.0 - aR.z * 11.0);
  float s = fract(aR.w + uT * (0.6 + aR.z * 0.5));
  vec3 p = base + uVel * (s - 0.5) * 18.0;
  vec3 dir = normalize(uVel);
  vec3 side = normalize(cross(dir, vec3(0.0, 0.0, 1.0) + vec3(0.001)));
  p += dir * position.x * (1.2 + aR.z * 2.0) + side * position.y * 0.012;
  vA = sin(s * 3.1416) * uA * (0.4 + 0.6 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,L_=`varying float vA; varying vec2 vUv; void main(){ float a = (1.0 - abs(vUv.y - 0.5) * 2.0) * smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.6, vUv.x);
  gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * a * vA, 1.0); }`,D_={wunder:{t0:52.34,t1:55.3,cam:[[52.3,.12,-.08,.2,.06,-.04,-10,Gr,.03],[55.3,-.15,.08,-1.3,-.06,.03,-10,Gr,-.02]],vel:[.15,-.02,1],sun:[.8,.1]},fleet:{t0:61.07,t1:63.85,cam:[[61,.35,.02,.1,.2,.02,-10,Gr,-.015],[63.85,-.35,.12,-.6,-.2,.05,-10,Gr,.02]],vel:[1,.05,.25],sun:[.9,0]}},ql=class extends ht{constructor(e){super(e,{fov:Gr,near:.05,far:100});let t=this.scene,n=ft(52);this.U={uK:{value:0},uT:{value:0}};let i=2*c0*Math.tan(Gr/2*Math.PI/180)*A_;this.planes={};for(let c of["wunder","fleet"]){let h=e.img[c],u=e.img[c+"_d"],f=new ne({vertexShader:R_,fragmentShader:C_,uniforms:{uMap:{value:h.tex},uDepT:{value:u?u.tex:h.tex},uDep:{value:u?.38:0},...this.U}}),d=new pe(i*h.w/h.h,i,256,144),v=new z(d,f);v.position.z=-c0,v.renderOrder=-50,d.translate(0,0,-c0),v.position.z=0,t.add(v),this.planes[c]=v}this.cl=[];for(let c=0;c<30;c++){let h={uSeed:{value:n()*10},uA:{value:0},uT:this.U.uT,uSun:{value:new se(.8,.1)},uLit:{value:new _e(1,.62,.4)},uShade:{value:new _e(.12,.06,.13)}},u=new z(new pe(1,1),new ne({vertexShader:P_,fragmentShader:I_,uniforms:h,transparent:!0,depthWrite:!1}));u.userData={u:h,r:[n(),n(),n(),n(),n()]},t.add(u),this.cl.push(u)}let r=160,a=new sn;a.copy(new pe(1,1)),a.instanceCount=r;let o=new Float32Array(r*4);for(let c=0;c<r*4;c++)o[c]=n();a.setAttribute("aR",new ut(o,4)),this.SU={uT:this.U.uT,uA:{value:0},uVel:{value:new S}};let l=new z(a,new ne({vertexShader:U_,fragmentShader:L_,uniforms:this.SU,transparent:!0,blending:Pe,depthWrite:!1,side:je}));l.frustumCulled=!1,t.add(l)}update(e){let t=e<58?"wunder":"fleet",n=D_[t],i=ae.hitPulse("kick",e,8);this.U.uK.value=i,this.U.uT.value=e;for(let a in this.planes)this.planes[a].visible=a===t;zt(this.camera,n.cam,e,.004*i);let r=new S(...n.vel).normalize();this.SU.uVel.value.copy(r),this.SU.uA.value=.5+.5*i,this.cl.forEach((a,o)=>{let[l,c,h,u,f]=a.userData.r,d=(l+(e-n.t0)*(.22+.25*f))%1,v=-1.2-h*8.5,x=(d-.5)*14;t==="wunder"?a.position.set((c-.5)*12-r.x*x*.3,u<.6?-2.4-u*1.5:2.2+u,v+x*.7):a.position.set(-x*1.2,(u<.65?-2.2-u*2.2:2.2+u*1.2)+(c-.5),v);let p=2.2+f*3.5;a.scale.set(p*1.6,p,1),a.lookAt(this.camera.position);let m=-a.position.z;a.userData.u.uA.value=.6*Math.sin(d*Math.PI)*V(.6,2.2,m)*(t==="wunder"?1:.9),a.userData.u.uSun.value.set(...n.sun)})}post(e){let t=ae.hitPulse("kick",e,9),n=e>58;return{bloom:1.05,bloomThr:.7,sat:1.08,grain:.06,vig:.55,ca:.9+t,punch:t*.4,shake:.003*t,contrast:1.1,tint:[1.03,.97,.95],dust:.2,fadeW:n?0:(1-V(52.34,52.6,e))*.4}}};var qr=class extends Zn{constructor(){super();let e=new ot;e.deleteAttribute("uv");let t=new lt({side:mt}),n=new lt,i=new Pn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new z(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new z(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new z(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new z(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new z(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new z(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new z(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new z(e,Wr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new z(e,Wr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let v=new z(e,Wr(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let x=new z(e,Wr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new z(e,Wr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new z(e,Wr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wr(s){let e=new Ct;return e.color.setScalar(s),e}var bn=36,Mn=3,Qn=5,Gi=-34,N_=[[25,0,1.55,3,0,1.9,-20,52,0],[26.6,.2,1.6,-9,0,1.95,-34,50,-.02],[26.64,1.3,1.75,-5.6,-3,1.95,-8.3,40],[27.14,1.3,1.75,-19.5,-3,1.95,-22.2,40],[27.18,-.5,2.05,-28.2,-.5,2.05,Gi,34],[29.4,-.42,2.05,-30.9,-.42,2.08,Gi,34]],Ip=[28.25,28.76];function F_(){let s=Ft(256,256),e=s.getContext("2d");e.fillStyle="#6a1418",e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,190,140,0.10)",e.lineWidth=3;for(let[n,i]of[[64,64],[192,192],[192,64],[64,192]])e.beginPath(),e.ellipse(n,i,30,52,0,0,7),e.stroke(),e.beginPath(),e.ellipse(n,i,12,26,0,0,7),e.stroke();e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,250,256,6);let t=hn(s,{repeat:!0});return t.repeat.set((bn+6)/1.2,Qn/1.2),t}function H_(){let s=Ft(512,512),e=s.getContext("2d"),t=ft(3);for(let i=0;i<16;i++)for(let r=0;r<4;r++){let a=60+t()*30;e.fillStyle=`rgb(${a+40},${a+10},${a-20})`,e.fillRect(r*128+i%2*64,i*32,128,32),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(r*128+i%2*64,i*32,2,32),e.fillRect(0,i*32,512,1)}let n=hn(s,{repeat:!0});return n.repeat.set(3,bn/2),n}var Xl=class extends ht{constructor(e){super(e,{fov:50,near:.05,far:80});let t=this.scene,n=ft(25);t.environment=new Mi(e.renderer).fromScene(new qr,.04).texture,t.environmentIntensity=.12,t.fog=new rs(1180678,12,42),this.clear.set(1180678);let i=new lt({map:F_(),color:16777215,roughness:.8}),r=new lt({color:12101002,roughness:.7}),a=new z(new pe(2*Mn,bn+6),new lt({map:H_(),roughness:.28,metalness:.1}));a.rotation.x=-Math.PI/2,a.position.z=-bn/2+3,t.add(a);for(let _ of[-1,1]){let g=new z(new pe(bn+6,Qn),i);g.position.set(_*Mn,Qn/2,-bn/2+3),g.rotation.y=-_*Math.PI/2,t.add(g);for(let E of[.15,Qn-.1]){let b=new z(new ot(.16,E<1?.3:.25,bn+6),r);b.position.set(_*(Mn-.05),E,-bn/2+3),t.add(b)}}let o=new z(new Zt(Mn,Mn,bn+6,48,1,!0,-Math.PI/2,Math.PI),new lt({color:13482910,roughness:.8,side:mt}));o.rotation.x=-Math.PI/2,o.position.set(0,Qn,-bn/2+3),t.add(o);let l=new z(new pe(1.2,bn+6),new Ct({color:16751226,fog:!1}));l.rotation.x=Math.PI/2,l.position.set(0,Qn+Mn-.02,-bn/2+3),t.add(l);for(let _=0;_>-bn;_-=4.5){let g=new z(new os(Mn-.02,.09,8,48,Math.PI),r);g.position.set(0,Qn,_),t.add(g)}let c=new z(new pe(2*Mn,Qn+Mn),i);c.position.set(0,(Qn+Mn)/2,Gi-.01),t.add(c);let h=e.img.gallery,u=e.img.yui_lisa,f=(_,g,E,b,T,R,I=.35)=>{let U=_.tex.clone();U.needsUpdate=!0,g&&(U.repeat.set(g[2],g[3]),U.offset.set(g[0],g[1]));let y=new z(new pe(E,b),new lt({map:U,emissiveMap:U,emissive:16777215,emissiveIntensity:I,roughness:.55}));return y.position.set(...T),y.rotation.y=R,t.add(y),y};if(h){let _=[[.03,.51,.47,.47],[.5,.51,.47,.47],[.03,.03,.47,.47],[.5,.03,.47,.47]];[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]].forEach(([g,E],b)=>f(h,_[b],1.5,1.9,[g*(Mn-.02),2.05,E],-g*Math.PI/2))}this.lisa=u?f(u,null,1.6,2.4,[0,2.1,Gi+.02],0,.18):null;for(let[_,g]of[[-1,-8.3],[1,-13.5],[-1,-21.5],[1,-26.5]]){let E=new Pn(16765088,2.2,4,1.5);E.position.set(_*(Mn-1.1),3.6,g),t.add(E)}this.lamps=[];for(let _=-2;_>-bn;_-=7){let g=new Pn(16761482,3.5,11,1.6);g.position.set(0,Qn+.6,_),t.add(g),this.lamps.push(g)}this.spot=new as(16773340,9,9,.4,.6,1.4),this.spot.position.set(0,4.8,Gi+4),this.spot.target.position.set(0,2.1,Gi),t.add(this.spot,this.spot.target),this.blue=new Pn(5941503,0,7,1.4),t.add(this.blue),this.flash=new Pn(16777215,0,12,1.2),this.flash.position.set(.3,1.7,-29.5),t.add(this.flash);let d=360,v=new vl(1,0);v.scale(.12,.6,.12),v.translate(0,.35,0),this.cm=new lt({color:16718388,emissive:6946832,emissiveIntensity:1,metalness:.25,roughness:.12,flatShading:!0}),this.cry=new Wt(v,this.cm,d),t.add(this.cry),this.cd=[];for(let _=0;_<d;_++){let g=n()<.5?-1:1,E=n()<.35,b=_<70,T=b?Gi+.2+n()*2.6:-n()*(bn-2)+1,R=b&&n()<.6?(n()-.5)*2.4:g*(Mn-.05-n()*(E?.05:.7)),I=E?.2+n()*n()*(b?3.4:2.4):0,U=new cn(E?0:(n()-.5)*.9,n()*6.28,E?g*(.45+n()*.5):(n()-.5)*.9);b&&I>.5&&U.set(Math.PI/2+(n()-.5)*.8,0,(n()-.5)*.8),this.cd.push({p:new S(R,I,b&&I>.5?Gi+.05:T),q:new Ot().setFromEuler(U),s:(b?.7:.4)+n()*1.4})}this.FU={uA:{value:0}},this.front=new z(new pe(2*Mn,Qn+Mn),new ne({uniforms:this.FU,transparent:!0,blending:Pe,depthWrite:!1,side:je,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x); gl_FragColor = vec4(vec3(0.25, 0.55, 1.0) * uA * e * e * 0.14, 1.0); }"})),this.front.position.y=(Qn+Mn)/2,t.add(this.front);let x=700,p=new Float32Array(x*3);for(let _=0;_<x;_++)p.set([(n()-.5)*5.6,n()*5,-n()*bn],_*3);let m=new qe;m.setAttribute("position",new We(p,3)),this.dust=new bt(m,new Cn({map:e.shared.glow,color:16767152,size:.03,transparent:!0,opacity:.55,blending:Pe,depthWrite:!1})),t.add(this.dust),this._m=new tt,this._s=new S}update(e){let t=ae.hitPulse("kick",e,7);zt(this.camera,N_,e,.003*t);let n=Gi+.1+14*V(27.3,29.4,e),i=V(27.2,27.5,e);this.front.position.z=n,this.FU.uA.value=i*(1-V(29,29.4,e)),this.blue.position.set(0,2.2,n+.3),this.blue.intensity=i*3,this.cd.forEach((a,o)=>{let l=i*V(n-.2,n-1.4,a.p.z),c=V(25,25.8,e+o%7*.05),h=a.s*c*(1-l)*(1+.08*t);this._m.compose(a.p,a.q,this._s.set(h,h,h)),this.cry.setMatrixAt(o,this._m)}),this.cry.instanceMatrix.needsUpdate=!0,this.cm.emissiveIntensity=.8+1.6*t;let r=0;for(let a of Ip)r=Math.max(r,e>=a?Math.exp(-(e-a)*14):0);this.flash.intensity=r*40,this.lamps.forEach((a,o)=>{a.intensity=3.2+.4*Math.sin(e*3+o)}),this.dust.position.y=-(e*.02%.3)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,10),i=0;for(let r of Ip)i=Math.max(i,e>=r?Math.exp(-(e-r)*18):0);return{bloom:.9,bloomThr:.72,grain:.07,vig:.62,ca:.7+n,dust:.25,punch:t*.25,contrast:1.06,fadeW:i*.35,tint:[1.02,.97,.95]}}};var u0=2.3,Up=.3,Hs=6,h0=s=>u0-Up*(1-(s/Hs)**2),Fs=44.35,O_=[[41.3,-1.3,1.78,1.25,-.95,1.74,0,32],[42.62,-.2,1.82,1.4,.2,1.76,0,32],[42.67,.5,.55,2.3,.3,2.4,0,48,.08],[44.3,-.4,.65,2.4,.6,2.3,0,48,.03],[44.35,1.05,1.8,1.05,1.05,1.76,0,30],[46.9,1.05,1.79,.78,1.05,1.78,0,30],[46.95,3.6,1.4,5.2,.4,1.8,0,42],[47.9,4.6,1.6,6.6,.4,2,0,42]],k_=`
uniform float uT, uWind, uAmp, uSeed, uH, uDrop; varying vec2 vUv; varying vec3 vW; ${Ee}
void main(){ vUv = uv; vec3 p = position; float a = clamp(-p.y / uH, 0.0, 1.0), a2 = pow(a, 1.3);
  float w = uWind * (0.6 + 0.4 * vnoise(vec2(uT * 0.7 + uSeed, p.x)));
  p.z += a2 * uAmp * (sin(p.x * 3.0 + uT * 4.2 + uSeed) * 0.16 + sin(p.y * 5.0 - uT * 5.3 + uSeed * 2.0) * 0.1 + sin(p.x * 7.0 + p.y * 4.0 + uT * 7.0) * 0.035 + w * 0.55);
  p.y += a2 * uAmp * w * 0.08; p.x += a * uAmp * sin(uT * 2.3 + p.y * 2.0 + uSeed) * 0.03;
  p.y += uDrop;
  vec4 wp = modelMatrix * vec4(p, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,z_=`
uniform sampler2D uMap; uniform float uHas, uDev, uPhotoA; uniform vec3 uCol, uSun; varying vec2 vUv; varying vec3 vW; ${Ee}
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
  gl_FragColor = vec4(c * vec3(1.08, 0.95, 0.85), 1.0); }`,B_=`uniform sampler2D uMap; uniform float uT; varying vec2 vUv; ${Ee}
void main(){ vec2 uv = vUv + vec2(vnoise(vUv * 40.0 + uT) - 0.5, 0.0) * 0.002;
  vec3 c = texture2D(uMap, uv, 2.2).rgb; gl_FragColor = vec4(c * 0.95, smoothstep(1.0, 0.8, vUv.y) * smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x)); }`,V_=`varying vec2 vUv; uniform float uT; ${Ee}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.95, 0.52, 0.32), vec3(0.12, 0.1, 0.26), smoothstep(0.05, 0.75, y));
  float cl = smoothstep(0.5, 0.8, fbm(vUv * vec2(3.0, 6.0) + vec2(uT * 0.02, 0.0)));
  c = mix(c, vec3(0.9, 0.5, 0.42), cl * 0.45); gl_FragColor = vec4(c, 1.0); }`,Yl=class extends ht{constructor(e){super(e,{fov:34,near:.05,far:80});let t=this.scene,n=ft(41);t.fog=new rs(10115648,12,40),this.T={uT:{value:0},uWind:{value:.5}},t.add(us(V_,{uT:this.T.uT})),this.sun=new S(-.5,.35,-.8).normalize();let i=e.img.village;if(i){let v=new z(new pe(50,50*i.h/i.w),new ne({uniforms:{uMap:{value:i.tex},uT:this.T.uT},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:B_,depthWrite:!1,transparent:!0}));v.position.set(1,5.2,-30),v.scale.setScalar(1.9),v.renderOrder=-10,t.add(v)}let r=new z(new pe(24,9),new ne({transparent:!0,depthWrite:!1,uniforms:{uSun:{value:this.sun}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; ${Ee} void main(){ float n = fbm(vP * 1.5), g = vnoise(vP * 30.0);
        vec3 c = mix(vec3(0.05, 0.06, 0.02), vec3(0.22, 0.18, 0.07), n * 0.8 + g * 0.3);
        gl_FragColor = vec4(c, smoothstep(1.0, 0.45, length(vP / vec2(12.0, 4.5)))); }`}));r.rotation.x=-Math.PI/2,r.position.z=1,r.renderOrder=-5,t.add(r),t.add(new xl(16762010,2764824,1.2));let a=new Rr(16756848,2.2);a.position.copy(this.sun).multiplyScalar(10),t.add(a);let o=new lt({color:5913638,roughness:.9});for(let v of[-Hs,Hs]){let x=new z(new Zt(.06,.07,u0+.3,10),o);x.position.set(v,(u0+.3)/2,0),t.add(x)}let l=[];for(let v=0;v<=40;v++){let x=-Hs+v/40*2*Hs;l.push(new S(x,h0(x),0))}t.add(new z(new ui(new Vn(l),120,.008,6),new lt({color:14538184})));let c=new lt({color:13214330,roughness:.7}),h=[{x:-4.2,w:1.6,h:1.45,col:15920870,amp:1},{x:-2.6,w:.42,h:.5,img:"snap2",amp:.35},{x:-1.9,w:.72,h:.82,col:9413560,amp:.9},{x:-.95,w:.42,h:.5,img:"snap1",amp:.35},{x:-.4,w:.42,h:.5,img:"snap3",amp:.35},{x:.3,w:.5,h:.9,col:15784080,amp:.9},{x:1.05,w:.42,h:.5,img:"snap4",amp:.35,isNew:!0},{x:1.85,w:.62,h:1,col:16448250,amp:.9},{x:3.3,w:1.5,h:1.35,col:12571878,amp:1}];this.cloth=[],h.forEach((v,x)=>{let p=v.img?e.img[v.img]:null,m={...this.T,uAmp:{value:v.amp},uSeed:{value:n()*10},uH:{value:v.h},uDrop:{value:0},uMap:{value:p?p.tex:null},uHas:{value:p?1:0},uDev:{value:1},uPhotoA:{value:1},uCol:{value:new _e(v.col??16777215)},uSun:{value:this.sun}},_=new pe(v.w,v.h,v.img?8:24,v.img?10:30);_.translate(0,-v.h/2,0);let g=new z(_,new ne({vertexShader:k_,fragmentShader:z_,uniforms:m,side:je}));g.position.set(v.x,h0(v.x)+.01,0),g.rotation.z=-Math.atan(2*Up*v.x/(Hs*Hs))*.7,t.add(g);let E=[];for(let b of v.w>.5?[-.42,.42]:[0]){let T=new z(new ot(.03,.09,.03),c);T.position.set(v.x+b*v.w,h0(v.x+b*v.w)-.02,.012),t.add(T),E.push(T)}this.cloth.push({it:v,U:m,m:g,pins:E})});let u=500,f=new Float32Array(u*3);for(let v=0;v<u;v++)f.set([(n()-.5)*16,n()*4,(n()-.5)*8],v*3);let d=new qe;d.setAttribute("position",new We(f,3)),this.pol=new bt(d,new Cn({map:e.shared.glow,color:16769200,size:.035,transparent:!0,opacity:.8,blending:Pe,depthWrite:!1})),t.add(this.pol)}update(e){let t=ae.hitPulse("kick",e,6);zt(this.camera,O_,e,.002*t),this.T.uT.value=e,this.T.uWind.value=.45+.35*Math.sin(e*.9)+.4*t+.5*ae.hitPulse("hit",e,3);for(let n of this.cloth){if(!n.it.isNew)continue;let i=e>=Fs,r=le((e-Fs)/.28),a=i?(1-r)*.6-Math.sin(r*Math.PI)*0+(r>=1?Math.exp(-(e-Fs-.28)*9)*Math.sin((e-Fs-.28)*40)*.015:0):5;n.U.uDrop.value=a,n.m.visible=i,n.pins.forEach(o=>{o.visible=e>=Fs+.26}),n.U.uDev.value=V(Fs+.35,Fs+2.3,e)}this.pol.position.set(e*.6%4-2,Math.sin(e*.5)*.1,0)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,10);return{bloom:.95,bloomThr:.72,grain:.05,vig:.6,contrast:1.08,ca:.6+n,dust:.35,punch:t*.2,leak:.15,tint:[1.05,.97,.9],fadeW:n*.25+V(47.3,47.8,e)*0}}};var G_=14,Ai=s=>-(s-69.4)*G_,W_=`uniform float uT, uK; varying vec3 vW; ${Ee}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 4.0);
  float n = 0.6 * fbm(vW.xz * 0.18 + vec2(0.0, uT * 0.3)) + 0.4 * vnoise(vec2(vW.x * 1.2, vW.z * 4.0) - uT);
  vec3 deep = vec3(0.05, 0.0, 0.006), sky = vec3(0.75, 0.16, 0.1);
  vec3 c = mix(deep, sky, fr * 0.6) * (0.7 + 0.5 * n) + vec3(1.0, 0.5, 0.35) * pow(n, 7.0) * 0.5 * (0.15 + 0.85 * fr) * (1.0 + uK);
  gl_FragColor = vec4(c, 0.78 + 0.2 * (1.0 - fr)); }`,q_=`uniform float uT; varying vec2 vUv; ${Ee}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.85, 0.28, 0.16), vec3(0.1, 0.0, 0.03), smoothstep(0.3, 0.9, y));
  float sp = fbm(vec2(atan(vUv.x - 0.5, y - 0.1) * 3.0, length(vUv - vec2(0.5, 0.1)) * 4.0 - uT * 0.1));
  c += vec3(0.4, 0.05, 0.02) * sp * smoothstep(0.35, 0.8, y); gl_FragColor = vec4(c, 1.0); }`,X_=[[69.4,0,1.1,Ai(69.4),.4,1.4,Ai(69.4)-20,58,.12],[70.79,.8,1.3,Ai(70.79),1.2,1.5,Ai(70.79)-20,58,-.1],[70.84,0,16,Ai(70.84)+6,0,0,Ai(70.84)-14,50,0],[72.94,0,11,Ai(72.94)-4,0,0,Ai(72.94)-22,50,.25],[72.98,0,2,Ai(72.98)-8,0,6,-170,50,0],[74.2,0,6.5,Ai(74.2)-12,0,8,-170,46,0]],$l=class extends ht{constructor(e){super(e,{fov:58,near:.1,far:400});let t=this.scene,n=ft(69);t.environment=new Mi(e.renderer).fromScene(new qr,.04).texture,t.environmentIntensity=.28,t.fog=new rs(3803658,25,150),this.U={uT:{value:0},uK:{value:0}},t.add(us(q_,this.U));let i=e.img.m_swarm;if(i){let b=new z(new pe(260,260*i.h/i.w),new Ct({map:i.tex,fog:!1,transparent:!0,opacity:.4,depthWrite:!1,blending:Pe}));b.position.set(0,60,-250),b.renderOrder=-50,t.add(b),this.swarm=b}let r=[new se(0,0),new se(1,0),new se(1,.78),new se(0,1)],a=new ul(r,6);a.computeVertexNormals();let o=new lt({color:13111338,emissive:7340044,emissiveIntensity:1,metalness:.3,roughness:.14,flatShading:!0}),l=420;this.cry=new Wt(a,o,l),this.cry.instanceColor=new ut(new Float32Array(l*3),3);let c=new tt,h=new Ot,u=new cn,f=new S,d=new S;this.cz=[];for(let b=0;b<l;b++){let T=n()<.5?-1:1,R=n()<.3,I=T*(R?2.6+n()*3.5:7+n()*28),U=10-n()*150,y=R?.8+n()*2.4:5+n()*n()*26,M=Math.min(y*(.05+n()*.05),1.4);u.set((n()-.5)*.5,n()*6.28,-T*(n()*.3)),h.setFromEuler(u),c.compose(d.set(I,-.5,U),h,f.set(M,y,M)),this.cry.setMatrixAt(b,c),this.cz.push(U)}t.add(this.cry);let v=new Wt(a,o.clone(),l);v.instanceMatrix=this.cry.instanceMatrix,v.instanceColor=this.cry.instanceColor,v.material.side=je,v.scale.y=-1,v.position.y=-1,t.add(v),this.mir=v;let x=new z(new pe(600,600),new ne({uniforms:this.U,transparent:!0,depthWrite:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:W_}));x.rotation.x=-Math.PI/2,x.position.y=-.5,t.add(x),this.RU={uA:{value:0},uK:this.U.uK};let p=new z(new os(40,.8,16,160),new ne({uniforms:this.RU,transparent:!0,blending:Pe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vN; void main(){ vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA, uK; varying vec3 vN; void main(){ gl_FragColor = vec4(vec3(1.0, 0.9, 0.8) * uA * (1.4 + uK), 1.0); }"}));p.position.set(0,26,-200),t.add(p);let m=new En(new pn({map:e.shared.glow,color:16756864,blending:Pe,depthWrite:!1,fog:!1}));m.position.copy(p.position),m.scale.setScalar(120),t.add(m),this.halo=m;let _=600,g=new Float32Array(_*3);for(let b=0;b<_;b++)g.set([(n()-.5)*240,10+n()*70,-60-n()*140],b*3);let E=new qe;E.setAttribute("position",new We(g,3)),this.ang=new bt(E,new Cn({map:e.shared.glow,color:16774382,size:1.4,transparent:!0,blending:Pe,depthWrite:!1,fog:!1})),t.add(this.ang),this.col=new _e}update(e){let t=ae.hitPulse("kick",e,6),n=ae.hitPulse("hit",e,4);zt(this.camera,X_,e,.02*t),this.U.uT.value=e,this.U.uK.value=t;let i=this.camera.position.z,r=ae.since("kick",e);for(let o=0;o<this.cz.length;o++){let l=i-this.cz[o],h=.55+2.2*(Math.exp(-Math.pow((l-r*60)/6,2))*Math.exp(-r*1.5))+.6*n;this.cry.instanceColor.setXYZ(o,h,h*.9,h*.9)}this.cry.instanceColor.needsUpdate=!0;let a=V(72.96,73.6,e);this.RU.uA.value=.3+a*1.2,this.halo.material.opacity=.25+a*.5,this.ang.position.y=-(e-69.4)*1.6,this.swarm&&(this.swarm.position.y=60-(e-69.4)*1.2)}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,8);return{bloom:.8,bloomThr:.8,contrast:1.12,grain:.07,vig:.6,ca:.9+1.5*n,punch:t*.35,shake:.004*t+.006*n,tint:[1.04,.92,.9],dust:.25,dustCol:[1,.5,.4],fadeW:V(73.4,74.03,e)*.5}}};var Y_=86.89,Lp=88.64,qt={w:9.6,h:5.4,y:3.2,z:-10},Dp=new S(0,2.6,7.5),$_=`uniform sampler2D uTex; uniform float uT, uFl, uBurn, uHeat; varying vec2 vUv; ${Ee}
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
  gl_FragColor = vec4(c, 1.0); }`,Np="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",K_=`uniform float uT, uA; uniform vec3 uO, uE, uCol; uniform vec2 uH; varying vec3 vW; ${Ee}
void main(){ vec3 ax = uE - uO; float L = length(ax); ax /= L; vec3 r = vW - uO; float s = max(dot(r, ax), 0.001);
  vec3 lat = r - ax * s; vec2 q = vec2(lat.x, lat.y) / (uH * s / L);                     // -1..1 across the frame
  float edge = smoothstep(1.0, 0.55, abs(q.x)) * smoothstep(1.0, 0.5, abs(q.y));
  float rays = 0.55 + 0.45 * vnoise(q * 7.0 + 3.0) + 0.25 * vnoise(q * 23.0);
  float n = 0.6 + 0.4 * fbm3(vW * 0.7 + vec3(0.0, uT * 0.15, uT * 0.1));
  float a = uA * n * rays * edge * (0.08 + 0.92 * exp(-s * 0.14)) * 0.14; gl_FragColor = vec4(uCol * a, 1.0); }`,Z_=`uniform float uA; uniform vec3 uO; varying vec3 vW;
void main(){ float d = length(vW - uO); gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * uA * exp(-d * 0.35) * 0.22, 1.0); }`,J_=[[84.9,-1.7,.45,2.6,-.6,1.4,-10,42,.03],[86.87,-.9,.75,-.6,.4,2.2,-10,42,-.02],[86.9,-1.3,2.3,9.9,.9,2.9,1,46,.05],[87.9,-1,2.5,9.3,.7,2.9,1,42,.02],[87.93,-1.75,2.95,8.15,-.05,2.8,7.2,34,-.05],[88.62,-1.55,2.9,8.05,-.05,2.75,7.25,30,-.05],[88.65,2.6,5.4,12.5,0,2.9,-10,46,0],[89.4,2.2,5,11.5,0,3,-10,44,0]];function j_(){let s=Ft(256,512),e=s.getContext("2d"),t=ft(8);e.fillStyle="#4a4a52",e.fillRect(0,0,256,512);for(let n=8;n<504;n+=22)for(let i=10;i<246;i+=26){let r=t()<.35;e.fillStyle=r?`rgb(255,${190+t()*50|0},${120+t()*60|0})`:`rgb(${30+t()*25|0},${34+t()*25|0},${44+t()*25|0})`,e.fillRect(i,n,16,12)}return hn(s)}function Q_(){let s=Ft(256,256),e=s.getContext("2d");e.fillStyle="#2a2a2e",e.beginPath(),e.arc(128,128,126,0,7),e.fill(),e.fillStyle="#141416",e.beginPath(),e.arc(128,128,100,0,7),e.fill(),e.fillStyle="#8c8c92",e.beginPath(),e.arc(128,128,60,0,7),e.fill(),e.fillStyle="#0a0a0a";for(let t=0;t<5;t++){let n=t*1.2566;e.beginPath(),e.arc(128+Math.cos(n)*38,128+Math.sin(n)*38,15,0,7),e.fill()}return e.beginPath(),e.arc(128,128,7,0,7),e.fill(),hn(s)}function eE(s){let e=Ft(256,1024),t=e.getContext("2d");t.fillStyle="#120c08",t.fillRect(0,0,256,1024);for(let i=0;i<6;i++){let r=i*170+8;if(s){let a=s.width*.55,o=s.width*(.1+.06*i);t.drawImage(s,o,s.height*.2,a,a*.62,36,r,184,150)}t.fillStyle="rgba(255,170,80,0.25)",t.fillRect(36,r,184,150)}t.fillStyle="#e8d8b8";for(let i=4;i<1024;i+=28)t.fillRect(8,i,16,14),t.fillRect(232,i,16,14);let n=hn(e);return n.wrapT=zi,n}var Kl=class extends ht{constructor(e){super(e,{fov:42,near:.05,far:200});let t=this.scene,n=ft(85),i=e.img,r=i.set_fight;t.fog=new al(460042,.035),this.clear.set(262918),t.add(new Cr(3813440,.5)),this.U={uTex:{value:r?.tex},uT:{value:0},uFl:{value:1},uBurn:{value:0},uHeat:{value:0}};let a=new z(new pe(qt.w,qt.h),new ne({uniforms:this.U,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:$_,fog:!1}));a.position.set(0,qt.y,qt.z),t.add(a);let o=new z(new ot(qt.w+.6,qt.h+.6,.1),new lt({color:328965,roughness:.9}));o.position.set(0,qt.y,qt.z-.08),t.add(o),this.screenLight=new Pn(16751216,8,0,1.2),this.screenLight.position.set(0,3,qt.z+2.5),t.add(this.screenLight);let l=new z(new pe(60,60),new lt({color:1709592,roughness:.35,metalness:.2}));l.rotation.x=-Math.PI/2,t.add(l);let c=j_(),h=new lt({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.35,roughness:.6,color:10131104}),u=new ot(1,1,1);u.translate(0,.5,0);let f=90,d=new Wt(u,h,f),v=new tt,x=new Ot,p=new cn,m=0;for(let Z=0;Z<f*3&&m<f;Z++){let $=(n()-.5)*11,te=-9+n()*5.8;if(Math.abs($)<.7)continue;let me=.4+n()*n()*2.6,Me=.25+n()*.35;p.set(0,(n()-.5)*.2,m===7?.5:0),x.setFromEuler(p),v.compose(new S($,0,te),x,new S(Me,me,Me*(.8+n()*.5))),d.setMatrixAt(m++,v)}d.count=m,t.add(d),this.evas=[],[["cut_e01",-1.6,-7.2,3.1,.2],["cut_e13",1.9,-7.6,3.3,-.25]].forEach(([Z,$,te,me,Me],Oe)=>{let N=i[Z];if(!N)return;let yt=Si(N,{wind:0,rim:1.2,seed:Oe*2.3});yt.uniforms.uTint.value.set(.42,.34,.4),yt.uniforms.uRim.value.set(1,.72,.5,.5);let Be=new z(Ti(N,me),yt);Be.position.set($,0,te),Be.rotation.y=Me,Be.renderOrder=5,t.add(Be),this.evas.push(Be)});let _=new lt({color:6974064,metalness:.8,roughness:.4}),g=new Zt(.035,.035,1,6),E=[],b=(Z,$)=>E.push([Z,$]);for(let Z of[-1,1])for(let $=-10;$<=4;$+=2){let te=Z*6.2,me=Z*7.4;b([te,0,$],[te,8,$]),b([me,0,$],[me,8,$]);for(let Me=1.5;Me<=7.5;Me+=2)b([te,Me,$],[me,Me,$]),$<4&&(b([te,Me,$],[te,Me,$+2]),b([me,Me,$],[me,Me+2>8?Me:Me+2,$+2]))}for(let Z=-6;Z<=6;Z+=2)b([Z,8,-4],[Z,8,2]);b([-6.2,8,-4],[6.2,8,-4]),b([-6.2,8,2],[6.2,8,2]);let T=new Wt(g,_,E.length),R=new S(0,1,0);E.forEach(([Z,$],te)=>{let me=new S(...Z),Me=new S(...$),Oe=Me.clone().sub(me);v.compose(me.clone().add(Me).multiplyScalar(.5),x.setFromUnitVectors(R,Oe.clone().normalize()),new S(1,Oe.length(),1)),T.setMatrixAt(te,v)}),t.add(T),this.lamps=[];let I=new dl(2.2,8,24,1,!0);I.translate(0,-4,0);for(let Z=0;Z<6;Z++){let $=-5+Z*2,te=new S($,7.9,-1+Z%2*1.5),me=new z(new Zt(.22,.3,.5,12),new lt({color:1381653,metalness:.6,roughness:.5}));me.position.copy(te),t.add(me);let Me={uA:{value:0},uO:{value:te}},Oe=new z(I,new ne({uniforms:Me,vertexShader:Np,fragmentShader:Z_,transparent:!0,blending:Pe,depthWrite:!1,side:je}));Oe.position.copy(te),Oe.lookAt($*.3,0,-5),Oe.rotateX(-Math.PI/2),t.add(Oe);let N=new En(new pn({map:e.shared.glow,color:16769200,blending:Pe,depthWrite:!1,transparent:!0,opacity:0}));N.position.copy(te).add(new S(0,-.3,0)),N.scale.setScalar(1.6),t.add(N),this.lamps.push({u:Me,sp:N,on:Y_+.1+Z*.25})}this.stage=new as(16769728,0,0,.7,.6,0),this.stage.position.set(0,8,-1),this.stage.target.position.set(0,0,-6),t.add(this.stage,this.stage.target);let U=new Qt;U.position.copy(Dp),t.add(U),this.pj=U;let y=new Pn(16756848,1.5,4,1);y.position.set(.8,1.4,1.2),U.add(y);let M=new Pn(8425727,.8,4,1);M.position.set(-1,.3,.8),U.add(M);let D=new lt({color:2828846,metalness:.7,roughness:.35}),P=new z(new ot(.5,.6,.9),D);U.add(P);let L=new z(new Zt(.1,.12,.3,24),D);L.rotation.x=Math.PI/2,L.position.set(0,.05,-.58),U.add(L);let B=new En(new pn({map:e.shared.glow,color:16773336,blending:Pe,depthWrite:!1}));B.position.set(0,.05,-.75),B.scale.setScalar(.9),U.add(B),this.glass=B;let F=Q_(),J=[new lt({color:3816e3,metalness:.8,roughness:.3}),new lt({map:F,metalness:.5,roughness:.4}),new lt({map:F,metalness:.5,roughness:.4})];this.reels=[[-.35,.62,.42],[.3,.6,.38]].map(([Z,$,te])=>{let me=new z(new Zt(te,te,.06,40),J);return me.rotation.z=Math.PI/2,me.position.set(0,$+.3,Z),U.add(me),me}),this.strip=eE(r?.img),this.strip.repeat.set(1,.5);let G=new z(new pe(.1,.4),new Ct({map:this.strip,color:16767144}));G.position.set(-.252,.02,-.1),G.rotation.y=-Math.PI/2,U.add(G);let ce=new z(new ui(new Vn([new S(0,.95,-.7),new S(0,.5,-.5),new S(0,.25,-.2),new S(0,.3,.2),new S(0,.6,.62)]),40,.012,4),new lt({color:3810328,roughness:.3}));U.add(ce);let re=Dp.clone().add(new S(0,.05,-.75)),he=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Z,$])=>[Z*qt.w/2,qt.y+$*qt.h/2,qt.z+.02]),ze=[];for(let Z=0;Z<4;Z++){let $=he[Z],te=he[(Z+1)%4];ze.push(re.x,re.y,re.z,...$,...te)}let xe=new qe;xe.setAttribute("position",new Ye(ze,3)),this.BU={uT:this.U.uT,uA:{value:1},uO:{value:re},uE:{value:new S(0,qt.y,qt.z)},uH:{value:new se(qt.w/2,qt.h/2)},uCol:{value:new _e(1,.86,.7)}},t.add(new z(xe,new ne({uniforms:this.BU,vertexShader:Np,fragmentShader:K_,transparent:!0,blending:Pe,depthWrite:!1,side:je,fog:!1})));let X=1400,j=new Float32Array(X*3);for(let Z=0;Z<X;Z++){let $=n(),te=(n()-.5)*.9,me=(n()-.5)*.9;j.set([re.x+te*qt.w*$,re.y+(qt.y+me*qt.h-re.y)*$,re.z+(qt.z-re.z)*$],Z*3)}let de=new qe;de.setAttribute("position",new We(j,3)),this.dust=new bt(de,new Cn({map:e.shared.glow,color:16768180,size:.05,transparent:!0,opacity:.7,blending:Pe,depthWrite:!1})),t.add(this.dust)}update(e){let t=ae.hitPulse("kick",e,8),n=ae.hitPulse("hit",e,5);zt(this.camera,J_,e,.01*n);let i=.9+.1*Math.sin(e*150.8)*Math.sin(e*47)+.15*t,r=V(Lp-.05,89.3,e),a=V(87.8,Lp,e);this.U.uT.value=e,this.U.uFl.value=i,this.U.uBurn.value=r,this.U.uHeat.value=a,this.BU.uA.value=i*(1+n*.8+r*2),this.screenLight.intensity=(7+5*t+12*r)*i;let o=0;for(let l of this.lamps){let c=V(l.on,l.on+.06,e);o+=c,l.u.uA.value=c*(1+.4*t),l.sp.material.opacity=c}this.stage.intensity=o*1.6,this.reels.forEach((l,c)=>{l.rotation.x=-e*(c?5.2:4.1)}),this.strip.offset.y=Math.floor(e*24)*(170/1024),this.glass.scale.setScalar(.8+.3*i+.8*r);for(let l of this.evas)l.material.uniforms.uT.value=e,l.material.uniforms.uRim.value.w=.45+.6*t;this.dust.position.y=Math.sin(e*.3)*.05}post(e){let t=ae.hitPulse("kick",e,10),n=ae.hitPulse("hit",e,7);return{bloom:.9,bloomThr:.74,grain:.1,vig:.7,ca:.8+n,flicker:.12,scratch:.25,weave:.3,punch:.3*t,shake:.004*n,tint:[1.05,.95,.86],dust:.35,dustCol:[1,.8,.6],fadeW:V(88.9,89.3,e)*.7}}};var m0=18,f0=m0*mn,rn=1.4,Pt={y0:1.05,y1:1.95},Xo=12,Xr=1,ei=1.6,tE=new S(1,-.8,-.35).normalize(),ds=97.09,d0=97.61,Yo=5,v0=`
uniform vec3 uSun; uniform float uS, uPitch, uBreak;
float sunAt(vec3 p){                                   // 0..1 sun reaching p through the left windows
  float k = (p.x + ${rn.toFixed(2)}) / uSun.x; vec3 w = p - uSun * k;           // hit on the left wall plane (x = -HW)
  if (k < 0.0) return 0.0;
  float z = w.z - ${Xr.toFixed(2)} + ${(ei/2).toFixed(2)}, cell = fract(z / ${ei.toFixed(2)} + 0.5);
  float win = smoothstep(0.08, 0.14, cell) * smoothstep(0.92, 0.86, cell) * smoothstep(${Pt.y0.toFixed(2)}, ${(Pt.y0+.05).toFixed(2)}, w.y) * smoothstep(${Pt.y1.toFixed(2)}, ${(Pt.y1-.05).toFixed(2)}, w.y);
  win *= step(-18.0, w.z) * step(w.z, 1.9);
  float oz = w.z + uS + p.x * 0.0;                                             // scenery coordinate along the track
  float pole = smoothstep(0.02, 0.14, abs(fract(oz / uPitch) - 0.5) * uPitch * 0.5 - 0.05);
  float tree = mix(1.0, smoothstep(0.35, 0.7, vnoise(vec2(oz * 0.35, w.y * 1.5))), step(0.55, vnoise(vec2(oz * 0.05, 3.0))));
  return win * mix(pole * tree, 1.0, uBreak * 0.4);
}`,p0="varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",nE=`uniform vec3 uCol; uniform float uSpec, uGrain, uAmb; varying vec3 vW, vN; ${Ee} ${v0}
void main(){ vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float s = sunAt(vW) * max(dot(N, -uSun), 0.0);
  vec3 amb = mix(vec3(0.07, 0.045, 0.07), vec3(0.17, 0.09, 0.08), N.y * 0.5 + 0.5) * uAmb;
  amb += vec3(0.25, 0.12, 0.2) * smoothstep(0.5, -1.0, N.x) * 0.3;             // dusk glow from the right windows
  vec3 c = uCol * (amb + vec3(2.4, 1.2, 0.5) * s);
  float ax = abs(vW.x), ao = 1.0;
  if (N.y > 0.5) ao = mix(0.45, 1.0, smoothstep(${rn.toFixed(2)} - 0.05, ${(rn-.7).toFixed(2)}, ax)) * (1.0 - 0.25 * smoothstep(0.02, 0.0, abs(ax - 0.35)));
  if (N.y < -0.5) ao = mix(0.55, 1.0, smoothstep(${rn.toFixed(2)}, ${(rn-.5).toFixed(2)}, ax));
  if (abs(N.x) > 0.5) { ao = mix(0.6, 1.0, smoothstep(0.0, 0.5, vW.y)) * mix(0.7, 1.0, smoothstep(2.3, 2.1, vW.y));
    ao *= 1.0 - 0.3 * smoothstep(0.012, 0.0, abs(fract(vW.y * 2.5) - 0.5) - 0.48); }
  c *= ao;
  c += vec3(1.6, 0.9, 0.5) * uSpec * pow(max(dot(reflect(uSun, N), V), 0.0), 30.0) * sunAt(vW + N * 0.02);
  c *= 1.0 + uGrain * (vnoise(vW.xz * 90.0 + vW.y * 40.0) - 0.5);
  gl_FragColor = vec4(c, 1.0); }`,iE=`uniform float uT; varying vec3 vW, vN; ${Ee} ${v0}
void main(){ vec3 ro = cameraPosition, rd = normalize(vW - ro); float L = min(length(vW - ro), 14.0);
  float j = hash12(gl_FragCoord.xy + uT), acc = 0.0;
  for (int i = 0; i < 28; i++) { vec3 p = ro + rd * L * (float(i) + j) / 28.0; if (p.y < 0.0 || p.y > 2.3 || abs(p.x) > ${rn.toFixed(2)}) continue;
    acc += sunAt(p) * (0.6 + 0.4 * vnoise3(p * 3.0 + vec3(0.0, uT * 0.2, uT * 0.4))); }
  acc *= L / 28.0; gl_FragColor = vec4(vec3(1.0, 0.62, 0.32) * acc * 0.05, 1.0); }`,sE=`uniform float uS, uSide, uPitch; varying vec3 vW, vN; ${Ee}
void main(){ float z = vW.z, y = vW.y; vec3 c;
  if (uSide < 0.0) { c = mix(vec3(0.95, 0.5, 0.22), vec3(0.42, 0.16, 0.26), smoothstep(0.9, 3.0, y)) * 0.8;
    c += vec3(0.9, 0.45, 0.25) * smoothstep(0.55, 0.8, fbm(vec2(z * 0.08 + uS * 0.004, y * 1.8))) * smoothstep(1.6, 2.6, y) * 0.5;  // lit clouds
    c += vec3(1.6, 0.9, 0.5) * exp(-length(vec2(z - 2.0, y - 1.7) * vec2(0.18, 0.5)) * 2.4) * 0.9;           // low sun
  } else c = mix(vec3(0.5, 0.24, 0.3), vec3(0.08, 0.06, 0.16), smoothstep(0.9, 2.6, y));
  float fz = (z + uS * 0.05) * 0.4, far = 0.9 + 0.35 * fbm(vec2(fz, 1.0));                                        // far hills
  c = mix(c, uSide < 0.0 ? vec3(0.42, 0.16, 0.14) : vec3(0.1, 0.06, 0.1), step(y, far) * 0.85);
  float mz = (z + uS * 0.4) * 0.9, bld = 0.75 + 0.4 * step(0.5, vnoise(vec2(floor(mz), 2.0))) * vnoise(vec2(floor(mz * 2.0), 5.0));
  c = mix(c, uSide < 0.0 ? vec3(0.18, 0.06, 0.07) : vec3(0.05, 0.03, 0.06), step(y, bld));
  float pz = z + uS, pole = step(abs(fract(pz / uPitch) - 0.5) * uPitch, 0.07) * step(y, 3.0);
  float d = fract(pz / uPitch) - 0.5, wire = step(abs(y - (2.45 - 0.12 * (1.0 - 4.0 * d * d))), 0.012);
  c = mix(c, vec3(0.03, 0.01, 0.02), max(pole, wire));
  gl_FragColor = vec4(c, 1.0); }`,rE=`uniform float uCrack, uSide, uT; varying vec3 vW, vN; varying vec2 vUv; ${Ee}
void main(){ vec2 q = (vUv - vec2(0.45, 0.4)) * vec2(1.4, 1.0); float r = length(q), a = atan(q.y, q.x);
  float rad = smoothstep(0.03, 0.0, abs(fract(a * 2.2 + vnoise(vec2(r * 6.0, a)) * 0.6) - 0.5) * r * 3.0);
  float ring = smoothstep(0.02, 0.0, abs(fract(r * 7.0 + vnoise(vec2(a * 3.0, 1.0)) * 0.5) - 0.5) * 0.3) * step(r, 0.45);
  float crack = (rad + ring * 0.6) * step(r, uCrack * 0.9);
  float streak = 0.03 * smoothstep(0.3, 0.9, vnoise(vec2(vUv.x * 3.0 + vUv.y * 2.0, uT * 0.5)));
  vec3 c = vec3(1.0, 0.85, 0.7) * (crack * 1.2 + streak); gl_FragColor = vec4(c, 0.04 + crack * 0.6 + streak); }`,oE=`attribute vec4 aS; attribute vec3 aV, aR; uniform float uT; varying vec3 vN, vW; varying float vA;
mat3 rot(vec3 a){ vec3 c = cos(a), s = sin(a); return mat3(c.y*c.z, c.y*s.z, -s.y, s.x*s.y*c.z - c.x*s.z, s.x*s.y*s.z + c.x*c.z, s.x*c.y, c.x*s.y*c.z + s.x*s.z, c.x*s.y*s.z - s.x*c.z, c.x*c.y); }
void main(){ float u = uT - aS.w; vA = step(0.0, u); u = max(u, 0.0); float sl = u < 0.25 ? u : 0.25 + (u - 0.25) * 0.22;  // bullet-time after the burst
  mat3 R = rot(aR * sl * 3.0); vec3 p = aS.xyz + aV * sl + vec3(0.0, -1.2, 0.0) * sl * sl; vN = R * normal;
  vec4 w = vec4(p + R * position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w * vA; }`,aE=`varying vec3 vN, vW; varying float vA; ${Ee} ${v0}
void main(){ if (vA < 0.5) discard; vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float g = pow(abs(dot(reflect(uSun, N), V)), 12.0), f = pow(1.0 - abs(dot(N, V)), 3.0), s = 0.25 + sunAt(vW);
  gl_FragColor = vec4(vec3(1.6, 1.0, 0.6) * (g * 2.5 + f * 0.5 + 0.08) * s, 1.0); }`,lE=[[91.2,.35,1.45,1.95,-.1,1.05,-6,38,0],[92.08,.3,1.4,1.2,-.1,1.05,-6,38,.01],[92.11,-.55,1.1,-3.2,.9,.95,-4.3,30,-.02],[93.6,-.5,1.12,-3.35,.9,.97,-4.3,28,-.02],[95.5,.8,1.6,1.95,-.3,1,-8,40,.03],[96.9,.7,1.5,.9,-.3,1,-8,38,.03],[96.92,.55,1.4,-5.3,-1.4,1.45,-7,34,-.04],[97.58,.45,1.38,-5.45,-1.4,1.45,-7,32,-.04],[97.61,1.1,2.15,1.9,-.6,.9,-9,50,.06],[98.3,1,2.05,1.2,-.6,.9,-9,48,.06]],Zl=class extends ht{constructor(e){super(e,{fov:38,near:.03,far:80});let t=this.scene,n=ft(91),i=e.img;this.clear.set(1050120),this.SU={uSun:{value:tE},uS:{value:0},uPitch:{value:f0},uBreak:{value:0}};let r=(U,y={})=>new ne({uniforms:{...this.SU,uCol:{value:new _e(U)},uSpec:{value:y.spec??0},uGrain:{value:y.grain??.08},uAmb:{value:y.amb??1}},vertexShader:p0,fragmentShader:nE,side:y.side??Ei}),a=(U,y,M,D,P,L,B)=>{let F=new z(new ot(U,y,M),B);return F.position.set(D,P,L),t.add(F),F},o=22,l=-8,c=r(13615784),h=r(7166794),u=r(4160094,{grain:.5}),f=r(10132130,{spec:1.4}),d=r(5916218,{spec:.25,grain:.25});a(2*rn,.02,o,0,-.01,l,d),a(2*rn,.02,o,0,2.31,l,r(15261904,{amb:1.3}));for(let U of[-1,1]){let y=U*(rn+.03);a(.06,Pt.y0,o,y,Pt.y0/2,l,c),a(.06,2.3-Pt.y1,o,y,(2.3+Pt.y1)/2,l,c);for(let P=-1;P<=Xo;P++)a(.07,Pt.y1-Pt.y0,ei*.2,y,(Pt.y0+Pt.y1)/2,Xr-P*ei+ei/2,c);a(.5,.1,o-1,U*(rn-.27),.42,l,u),a(.1,.45,o-1,U*(rn-.04),.66,l,u),a(.45,.36,o-1,U*(rn-.3),.18,l,h),a(.35,.02,o-1,U*(rn-.2),2.02,l,f);let M=new z(new Zt(.015,.015,o,8),f);M.rotation.x=Math.PI/2,M.position.set(U*.62,2.12,l),t.add(M);let D=new z(new pe(60,5),new ne({uniforms:{...this.SU,uSide:{value:U}},vertexShader:p0,fragmentShader:sE}));D.position.set(U*(rn+1.2),1.5,l),D.rotation.y=U*-Math.PI/2,t.add(D)}let v=r(6052962,{spec:.8}),x=[14264428,8366025,13205375,10273418,14735296,12098249];for(let U of[-1,1]){let y=U*(rn-.01);a(.1,.05,o,y,Pt.y0+.01,l,v),a(.05,.035,o,y,Pt.y1-.01,l,v);for(let M=-1;M<=Xo;M++)a(.05,Pt.y1-Pt.y0,.035,y,(Pt.y0+Pt.y1)/2,Xr-M*ei+ei*.41,v);for(let M=0;M<Xo;M++){if(n()<.3)continue;let D=a(.012,.2,.5,y-U*.02,2.13,Xr-M*ei+(n()-.5)*.4,r(x[Math.floor(n()*x.length)],{amb:1.4,grain:.3}));D.rotation.z=U*.12}}for(let U of[2.2,l-o/2+.3])a(2*rn,2.3,.08,0,1.15,U,c);for(let U=0;U<6;U++)a(.5,.015,1.4,0,2.29,1-U*3.2,r(16774368,{amb:2.6,grain:0}));for(let U of[-1.5,-9.5,-17.5])for(let y of[-1,1]){let M=new z(new Zt(.02,.02,2.3,8),f);M.position.set(y*.95,1.15,U),t.add(M)}let p=2*22;this.straps=new Wt(new ot(.03,.26,.008).translate(0,-.13,0),h,p),this.rings=new Wt(new os(.06,.009,6,20),r(15722712),p),this.sp=[];for(let U=0;U<p;U++)this.sp.push([(U%2?1:-1)*.62,1.5-Math.floor(U/2)*.5,n()*6]);t.add(this.straps,this.rings),this.panes=[];for(let U of[-1,1])for(let y=0;y<Xo;y++){let M={uCrack:{value:0},uSide:{value:U},uT:{value:0}},D=new z(new pe(ei*.8,Pt.y1-Pt.y0),new ne({uniforms:M,transparent:!0,depthWrite:!1,blending:Pe,vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:rE}));D.position.set(U*rn,(Pt.y0+Pt.y1)/2,Xr-y*ei),D.rotation.y=U*-Math.PI/2,t.add(D),U<0&&this.panes.push({u:M,m:D,at:y===Yo?ds:d0+Math.abs(y-Yo)*.045})}this.RU={...this.SU,uT:{value:0}};let m=new z(new ot(2*rn-.02,2.3,o),new ne({uniforms:this.RU,vertexShader:p0,fragmentShader:iE,side:mt,transparent:!0,depthWrite:!1,depthTest:!1,blending:Pe}));m.position.set(0,1.15,l),m.renderOrder=20,t.add(m);let _=1500,g=new sn,E=new qe;E.setAttribute("position",new Ye([0,.05,0,-.04,-.03,0,.045,-.035,0],3)),E.computeVertexNormals(),g.index=null,g.setAttribute("position",E.getAttribute("position")),g.setAttribute("normal",E.getAttribute("normal"));let b=new Float32Array(_*4),T=new Float32Array(_*3),R=new Float32Array(_*3);for(let U=0;U<_;U++){let y=U<420?Yo:Math.floor(n()*Xo),M=this.panes[y],D=Xr-y*ei,P=n()-.5,L=n()-.5,B=.4+n()*1.6;b.set([-rn+.01,(Pt.y0+Pt.y1)/2+L*(Pt.y1-Pt.y0),D+P*ei*.8,M.at+n()*.03],U*4),T.set([(1.2+n()*3.2)*(y===Yo?1.3:1),L*1.6+(n()-.3)*1.2,P*2.2+(n()-.5)*1.2+(y===Yo?1.2:0)],U*3),R.set([(n()-.5)*6*B,(n()-.5)*6,(n()-.5)*6],U*3)}g.setAttribute("aS",new ut(b,4)),g.setAttribute("aV",new ut(T,3)),g.setAttribute("aR",new ut(R,3)),g.instanceCount=_,this.SHU={...this.SU,uT:{value:0}};let I=new z(g,new ne({uniforms:this.SHU,vertexShader:oE,fragmentShader:aE,transparent:!0,depthWrite:!1,blending:Pe,side:je}));I.frustumCulled=!1,I.renderOrder=30,t.add(I),this.ppl=[],[["cut_shinji_seat",.98,-4.3,-1,[1.05,.88,.8]],["cut_gendo_seat",-1,-6.9,1,[.42,.3,.3]]].forEach(([U,y,M,D,P],L)=>{let B=i[U];if(!B)return;let F=Si(B,{wind:0,rim:L?1.1:.5,seed:L*5});F.uniforms.uTint.value.set(...P),F.uniforms.uRim.value.set(1,.62,.3,L?1.1:.5);let J=new z(Ti(B,1.42),F);J.position.set(y,-.02,M),J.renderOrder=10,t.add(J),this.ppl.push({me:J,fx:D,tint:P,gendo:L===1})}),this.m4=new tt,this.q=new Ot,this.e=new cn,this.v=new S,this.one=new S(1,1,1)}update(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,5),i=Math.sin(e*1.7)*.6+Math.sin(e*4.3)*.2,r=zt(this.camera,lE,e,.004*t+.006*n);this.camera.position.y+=Math.sin(e*23)*.002+t*.004,this.SU.uS.value=e*m0,this.SU.uBreak.value=V(ds,d0+.3,e),this.RU.uT.value=e,this.SHU.uT.value=e;for(let l of this.panes)l.u.uT.value=e,l.u.uCrack.value=l.at===ds?V(96.35,ds,e)*(.4+.6*V(96.9,ds,e))+.15*t*(e>96.3?1:0):V(d0-.25,l.at,e),l.m.visible=e<l.at;for(let l=0;l<this.sp.length;l++){let[c,h,u]=this.sp[l];this.e.set(.12*i+.05*Math.sin(e*3+u),0,.08*Math.sin(e*2.1+u)),this.q.setFromEuler(this.e),this.m4.compose(this.v.set(c,2.12,h),this.q,this.one),this.straps.setMatrixAt(l,this.m4),this.v.set(c,2.12,h).add(new S(0,-.32,0).applyQuaternion(this.q)),this.m4.compose(this.v,this.q,this.one),this.rings.setMatrixAt(l,this.m4)}this.straps.instanceMatrix.needsUpdate=this.rings.instanceMatrix.needsUpdate=!0;let a=-4.3+e*m0,o=Math.abs((a/f0%1+1)%1-.5)*f0*.5<.12?.55:1;for(let l of this.ppl){let c=this.camera.position,h=Math.atan2(c.x-l.me.position.x,c.z-l.me.position.z);l.me.rotation.y=le(h,l.fx>0?.25:-1.9,l.fx>0?1.9:-.25),l.me.visible=!(l.gendo&&e>94.5);let u=l.gendo?1:o,f=l.me.material.uniforms;f.uT.value=e,f.uTint.value.set(l.tint[0]*u,l.tint[1]*u,l.tint[2]*u),f.uRim.value.w=(l.gendo?1.1:.5)*(.7+.3*o+t*.4)}}post(e){let t=ae.hitPulse("kick",e,10),n=ae.hitPulse("hit",e,6),i=V(ds-.02,ds+.05,e)*Math.exp(-Math.max(0,e-ds)*5);return{bloom:.7,bloomThr:.85,contrast:1.12,exposure:.94+.15*n,grain:.08,vig:.62,ca:.7+1.8*n,tint:[1.06,.95,.86],letter:.12,punch:.25*t,shake:.003*n,dust:.3,dustCol:[1,.7,.45],fadeW:i*.6+V(97.95,98.2,e)*.35}}};var Fp=115.19,cE=123.76,Hp=2*mn,Op=-40,hE=15,$o=.17,kp=[["cut_e00",-26],["cut_e02",-13],["cut_e01",0],["cut_e08",13],["cut_e13",26]],uE=[0,4,1,3,2],fE=[4,3,1,0,2],dE="varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",pE=`uniform float uT, uK, uFlare; varying vec3 vD; ${Ee}
void main(){ vec3 d = normalize(vD); float y = d.y;
  vec3 c = mix(vec3(0.78, 0.2, 0.1), vec3(0.3, 0.02, 0.05), smoothstep(0.0, 0.2, y)); c = mix(c, vec3(0.06, 0.0, 0.03), smoothstep(0.2, 0.7, y));
  c = mix(c, vec3(0.25, 0.02, 0.03), smoothstep(0.0, -0.1, y));
  float cl = fbm(vec2(atan(d.x, -d.z) * 4.0 + uT * 0.01, y * 14.0)); c *= 0.75 + 0.5 * cl * smoothstep(0.35, 0.05, y);
  vec3 M = normalize(vec3(0.0, 0.16, -1.0)); float r = acos(clamp(dot(d, M), -1.0, 1.0));                     // black moon
  c += vec3(1.3, 0.35, 0.2) * exp(-max(r - 0.13, 0.0) * 12.0) * (0.7 + 0.3 * uK + uFlare);
  c = mix(c, vec3(0.01, 0.0, 0.0), smoothstep(0.132, 0.126, r));
  c += vec3(1.4, 0.6, 0.4) * smoothstep(0.004, 0.0, abs(r - 0.2 - 0.004 * sin(uT))) * 0.6;                    // thin halo ring
  gl_FragColor = vec4(c, 1.0); }`,mE=`uniform float uT, uK, uFlare; varying vec3 vW; ${Ee}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 5.0);
  float n = fbm(vW.xz * vec2(0.12, 0.3) + vec2(uT * 0.05, uT * 0.12)) + 0.35 * vnoise(vW.xz * vec2(1.0, 3.0) - uT * 0.6);
  vec3 c = mix(vec3(0.12, 0.0, 0.01), vec3(0.8, 0.2, 0.1), fr * 0.7) * (0.75 + 0.45 * n);
  float mx = exp(-abs(vW.x) * 0.01) * smoothstep(-300.0, -60.0, vW.z) * pow(n * 0.85, 6.0);                        // moon path glitter
  c += vec3(1.4, 0.5, 0.3) * mx * (0.5 + uK + 2.0 * uFlare);
  gl_FragColor = vec4(c, 0.7 + 0.25 * (1.0 - fr)); }`,vE=`attribute vec4 aB; uniform float uT, uPx; varying float vA; varying vec3 vC;
void main(){ float u = uT - aB.x; vec3 p = position;
  float r = u * (1.6 + aB.y * 2.5) + u * u * 0.35; p.y += r; p.x += sin(u * 1.1 + aB.y * 40.0) * u * 0.7; p.z += cos(u * 0.9 + aB.y * 17.0) * u * 0.5 - u * u * 0.3;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = step(0.0, u) * smoothstep(0.0, 0.15, u) * exp(-u * 0.22) * smoothstep(0.4, 1.5, -mv.z);
  vC = mix(vec3(1.0, 0.45, 0.25), vec3(1.0, 0.9, 0.8), aB.z);
  gl_PointSize = min((0.5 + aB.y * 1.2) * (1.0 + aB.z) * uPx / -mv.z, 9.0); }`,gE="varying float vA; varying vec3 vC; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; if (vA * a < 0.003) discard; gl_FragColor = vec4(vC * vA * a * 0.4, 1.0); }",Xt=(s,e,t,n,i=0)=>[s,...e,...t,n,i],xE=[Xt(115.1,[0,2.4,18],[0,7.5,-40],50),Xt(116.23,[1,2.2,12],[0,7.5,-40],48),Xt(116.26,[21,.6,-18],[27,5.5,-40],40,.03),Xt(117.3,[18,.7,-19],[26,6,-40],40,.02),Xt(117.33,[-9,1,-25],[-13,11,-40],44,-.04),Xt(118.37,[-9.6,1.4,-27],[-13,12,-40],42,-.03),Xt(118.4,[8,3.2,-18],[13,9,-40],42,.02),Xt(119.45,[7,3.8,-20],[13,9.5,-40],40,0),Xt(119.48,[0,2.5,-14],[0,11,-40],44),Xt(121.1,[0,12,26],[0,6,-70],46),Xt(123.7,[-3,1.5,12],[0,8,-40],46,.02),Xt(124.8,[-2,1.8,5],[2,8,-40],44,.01),Xt(124.83,[9,5,-24],[13,10.5,-40],40,.03),Xt(125.87,[9.5,5.5,-25.5],[13,11,-40],38,.03),Xt(125.9,[-8,2,-26],[-13,9.5,-40],42,-.03),Xt(126.94,[-8.8,2.4,-27.5],[-13,10,-40],40,-.03),Xt(126.97,[-18,3,-25],[-26,9,-40],42,.02),Xt(128.02,[-18.5,3.5,-26.5],[-26,9.5,-40],40,.02),Xt(128.05,[0,3,-22],[0,10,-40],40),Xt(128.3,[0,3.2,-21],[0,10.5,-40],40),Xt(129.7,[0,7,12],[0,12,-70],48)];function yE(){let s=Ft(256,512),e=s.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,512),e.shadowColor="#fff",e.fillStyle="#fff";for(let[t,n]of[[40,.35],[18,.8],[5,1]])e.shadowBlur=t,e.globalAlpha=n,e.fillRect(118,20,20,492),e.fillRect(40,120,176,18);return hn(s)}var Jl=class extends ht{constructor(e){super(e,{fov:48,near:.2,far:700});let t=this.scene,n=ft(115),i=e.img;this.U={uT:{value:0},uK:{value:0},uFlare:{value:0}},t.add(new z(new nn(500,48,24),new ne({uniforms:this.U,vertexShader:dE,fragmentShader:pE,side:mt,depthWrite:!1}))),this.cr=[],uE.forEach((f,d)=>this.cr.push({x:kp[f][1]*1.05,z:Op-9,h:58,at:Fp+d*Hp}));for(let f=0;f<30;f++){let d=-110-n()*240;this.cr.push({x:(n()-.5)*(120+-d*1.4),z:d,h:30+n()*60,at:Fp+.3+n()*4.6})}let r=new pe(.5,1).translate(0,.5,0),a=new Ct({map:yE(),blending:Pe,transparent:!0,depthWrite:!1,side:je,fog:!1});this.crM=new Wt(r,a,this.cr.length),this.crR=new Wt(r,a,this.cr.length);for(let f of[this.crM,this.crR])f.instanceColor=new ut(new Float32Array(this.cr.length*3),3),f.frustumCulled=!1;this.crR.renderOrder=1,this.crM.renderOrder=4,t.add(this.crM,this.crR);let o=new z(new pe(1400,1400),new ne({uniforms:this.U,transparent:!0,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:mE}));o.rotation.x=-Math.PI/2,o.renderOrder=2,t.add(o),this.evas=[];let l=[],c=[];kp.forEach(([f,d],v)=>{let x=i[f];if(!x)return;let p=Ti(x,1),m=()=>{let y=Si(x,{wind:0,rim:1,seed:v*1.7});return y.uniforms.uTint.value.set(.62,.46,.46),y.uniforms.uRim.value.set(1,.42,.25,1),y},_=new z(p,m()),g=new z(p,m()),E=hE*(v===2?1.08:1);_.position.set(d,-$o*E,Op+Math.abs(d)*.12),_.scale.set(E,E,1),g.position.set(d,$o*E,_.position.z),g.scale.set(E,-E,1),_.material.uniforms.uClip.value.set($o,.004,1,0),g.material.uniforms.uClip.value.set($o,.004,.3,1),g.material.uniforms.uTint.value.multiplyScalar(.55),_.rotation.y=g.rotation.y=-d*.012,_.renderOrder=3,g.renderOrder=1,t.add(_,g);let b=cE+fE.indexOf(v)*Hp;this.evas.push({m:_,r:g,td:b});let T=40,R=Math.round(T*x.h/x.w),I=Fl(x,T,R),U=E*x.w/x.h;for(let y=0;y<1500;y++){let M=n(),D=n();D<$o||I[(Math.floor((1-D)*R)*T+Math.floor(M*T))*4+3]<128||(l.push(d+(M-.5)*U*Math.cos(_.rotation.y),_.position.y+D*E,_.position.z+(M-.5)*U*Math.sin(_.rotation.y)+(n()-.5)*.6),c.push(b+(1-D)*.75+n()*.12,n(),.7+n()*.3,0))}});for(let f=0;f<1500;f++)l.push((n()-.5)*160,0,-8-n()*140),c.push(108+n()*22,n(),n()*.3,0);let h=new qe;h.setAttribute("position",new Ye(l,3)),h.setAttribute("aB",new Ye(c,4)),this.PU={uT:this.U.uT,uPx:{value:e.h*.9}};let u=new bt(h,new ne({uniforms:this.PU,vertexShader:vE,fragmentShader:gE,transparent:!0,depthWrite:!1,blending:Pe}));u.frustumCulled=!1,u.renderOrder=6,t.add(u),this.m4=new tt,this.q=new Ot,this.v=new S,this.s=new S,this.Y=new S(0,1,0)}update(e){let t=ae.hitPulse("kick",e,7),n=ae.hitPulse("hit",e,3);zt(this.camera,xE,e,.03*n);let i=Math.exp(-Math.max(0,e-120.11)*1.4)*(e>120.11?1:0)+.6*(e>128.28?Math.exp(-(e-128.28)*1.2):0);this.U.uT.value=e,this.U.uK.value=t,this.U.uFlare.value=i;let r=this.camera.position;this.cr.forEach((a,o)=>{let l=e-a.at,c=l<0?0:1-Math.pow(1-le(l/.45),3),h=o<5,u=l<0?0:(h?.42:.16)*(1+2.5*Math.exp(-l*4))*(.85+.15*Math.sin(e*9+o)+.25*t)*(1+i*.8)*(1-.35*V(122,130,e));this.q.setFromAxisAngle(this.Y,Math.atan2(r.x-a.x,r.z-a.z)),this.m4.compose(this.v.set(a.x,0,a.z),this.q,this.s.set(a.h*.36,a.h*Math.max(c,.001),1)),this.crM.setMatrixAt(o,this.m4),this.m4.compose(this.v,this.q,this.s.set(a.h*.36,-a.h*Math.max(c,.001)*.8,1)),this.crR.setMatrixAt(o,this.m4),this.crM.instanceColor.setXYZ(o,u,u*.93,u*.88),this.crR.instanceColor.setXYZ(o,u*.3,u*.2,u*.18)});for(let a of[this.crM,this.crR])a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0;for(let a of this.evas)for(let o of[a.m,a.r]){let l=o.material.uniforms;l.uT.value=e,l.uDis.value=le((e-a.td)/.9),l.uRim.value.w=.45+.4*t+.8*i}}post(e){let t=ae.hitPulse("kick",e,9),n=ae.hitPulse("hit",e,5);return{bloom:.7,bloomThr:.82,contrast:1.1,grain:.07,vig:.62,ca:.8+1.2*n,punch:.3*t,shake:.004*n,tint:[1.05,.93,.9],dust:.2,dustCol:[1,.5,.35],fadeW:.35*Math.exp(-Math.abs(e-120.11)*6)+V(120.6,121,e)*.35*(e<122?1:0)}}};var zs=142.31,Bt=143.36,Os=144.44,Wi=145.51,zp=146.44,Bs=147.5,Dn=148.33,$r=149.52,di=72,ic=1.9,Ri=1.3,E0=1.6,M0=.9,sc=-.07,_E=["eva01_eye","shinji_cam","rei_white","kaworu","asuka_beach","misato_last","gendo_train","lilith","fire_fight","set_fight","wunder","ube_pilots","rei_paddy","village","gendo_yui","shinji_red"],EE=15,nc=2048,b0=1152,jl=nc/4,Ql=b0/4,Zo=9;var Ko=4*Zo+4,ME=2,bE=1.4;function g0(s,e,t,n){let i=new Float32Array(e*t),r=new Float32Array(e*t),a=2*n+1;for(let o=0;o<t;o++){let l=0,c=o*e;for(let h=-n;h<=n;h++)l+=s[c+le(h,0,e-1)];for(let h=0;h<e;h++)i[c+h]=l/a,l+=s[c+Math.min(e-1,h+n+1)]-s[c+Math.max(0,h-n)]}for(let o=0;o<e;o++){let l=0;for(let c=-n;c<=n;c++)l+=i[le(c,0,t-1)*e+o];for(let c=0;c<t;c++)r[c*e+o]=l/a,l+=i[Math.min(t-1,c+n+1)*e+o]-i[Math.max(0,c-n)*e+o]}return r}var Bp=(s,e,t,n,i,r)=>{let a=i*e+n,o=s[a]>r;return o!==s[a+1]>r||o!==s[a+e]>r||o!==s[a-1]>r||o!==s[a-e]>r?1:0};function wE(s,e,t){let n=Ft(e,t),i=n.getContext("2d",{willReadFrequently:!0}),r=Math.max(e/s.w,t/s.h),a=s.w*r,o=s.h*r;i.drawImage(s.img,(e-a)/2,(t-o)/2,a,o);let l=i.getImageData(0,0,e,t).data,c=new Float32Array(e*t);for(let v=0;v<e*t;v++)c[v]=(l[v*4]*.3+l[v*4+1]*.55+l[v*4+2]*.15)/255;let h=g0(c,e,t,1),u=g0(h,e,t,2),f=g0(h,e,t,7),d=new Uint8Array(e*t*4);for(let v=1;v<t-1;v++)for(let x=1;x<e-1;x++){let p=v*e+x,m=h[p+1-e]+2*h[p+1]+h[p+1+e]-h[p-1-e]-2*h[p-1]-h[p-1+e],_=h[p+e-1]+2*h[p+e]+h[p+e+1]-h[p-e-1]-2*h[p-e]-h[p-e+1],g=le((u[p]-h[p]-.012)*14),E=le((Math.hypot(m,_)-.22)*1.6),b=le(Math.max(g,E*.7));d[p*4]=b*255,d[p*4+1]=Bp(f,e,t,x,v,.3)*255*(1-b*.5),d[p*4+2]=Bp(f,e,t,x,v,.72)*255*(1-b*.5),d[p*4+3]=le(f[p])*255}return d}function SE(s,e){if(e&&e.flipLines)return e.flipLines;let t=new Uint8Array(nc*b0*4);_E.forEach((i,r)=>{let a=s[i];if(!a)return;let o=wE(a,jl,Ql),l=r%4*jl,c=Math.floor(r/4)*Ql;for(let h=0;h<Ql;h++){let u=((c+Ql-1-h)*nc+l)*4;t.set(o.subarray(h*jl*4,(h+1)*jl*4),u)}});let n=new wo(t,nc,b0,Rn);return n.colorSpace=jt,n.generateMipmaps=!0,n.minFilter=li,n.magFilter=Dt,n.anisotropy=4,n.needsUpdate=!0,e&&(e.flipLines=n),n}function TE(){let t=Ft(2048,1400),n=t.getContext("2d"),i=ft(27);n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="lighter",n.lineCap="round",n.lineJoin="round";let r=["#ff0000","#00ff00","#0000ff"],a=(l,c,h,u)=>{n.beginPath(),n.moveTo(l+(i()-.5)*2,c+(i()-.5)*2),n.quadraticCurveTo((l+h)/2+(i()-.5)*3,(c+u)/2+(i()-.5)*3,h+(i()-.5)*2,u+(i()-.5)*2),n.stroke()};for(let l=0;l<16;l++){let c=l%4*512,h=Math.floor(l/4)*350,u=c+512*(.5-E0/ic/2),f=c+512*(.5+E0/ic/2),d=h+350*(.5-M0/Ri/2-sc/Ri),v=h+350*(.5+M0/Ri/2-sc/Ri);n.strokeStyle=r[0],n.globalAlpha=.55,n.lineWidth=1.6,a(u,d,f,d),a(f,d,f,v),a(f,v,u,v),a(u,v,u,d),n.globalAlpha=.35,n.lineWidth=1;for(let R=0;R<4;R++){let I=De(u,f,(R+.5)/4);a(I,d-5,I,d+5),a(I,v-5,I,v+5)}n.globalAlpha=.75,n.lineWidth=1.4;let x=c+290,p=h+8;n.strokeRect(x,p,106,38),a(x+38,p,x+38,p+38),n.font=`22px ${wt.serif}`,n.fillStyle=r[0],n.fillText("C",x+10,p+28),n.font=`26px ${wt.script}`,n.fillText(String(101+l*7),x+46,p+29),n.font=`13px ${wt.serif}`,n.globalAlpha=.6,n.fillText("SCENE",c+112,h+18),n.fillText("CUT",c+112,h+36),n.font=`20px ${wt.script}`,n.fillText(["A","B","C","D"][l%4]+(l+1),c+166,h+20),n.fillText(String(3+l*5%40),c+166,h+38);let m=c+512-12,_=d+6,g=v-6;n.globalAlpha=.5,n.lineWidth=1.2,a(m,_,m,g);let E=6+l%4*2;for(let R=0;R<=E;R++){let I=De(_,g,Math.pow(R/E,1+l%3*.4));a(m-6,I,m+1,I)}n.strokeStyle=r[1],n.fillStyle=r[1],n.globalAlpha=.8,n.lineWidth=1.6;for(let R=0;R<3;R++){let I=De(_,g,R/2);n.beginPath(),n.arc(m-3,I,6,0,7),n.stroke()}if(n.font=`18px ${wt.script}`,n.fillText(["\u4FEE\u6B63","\u4F5C\u76E3","take2","\u539F\u753B","BG \u6CE8\u610F","\u4E2D\u5272\u308A"][l%6],u+8+i()*60,v+20),l%2===0){let R=u+40+i()*200,I=d+30+i()*120,U=R+50+i()*80,y=I+(i()-.5)*60;a(R,I,U,y),a(U,y,U-9,y-6),a(U,y,U-9,y+6)}n.strokeStyle=r[2],n.fillStyle=r[2],n.globalAlpha=.6,n.font=`16px ${wt.script}`,n.fillText(l%3===0?"Hi":l%3===1?"BL":"\u5F71",f-40,v+20);let b=u+20+i()*300,T=d+20+i()*150;for(let R=0;R<5;R++)a(b+R*6,T,b+R*6+14,T-14)}n.globalAlpha=1,n.globalCompositeOperation="source-over";let o=new Jn(t);return o.colorSpace=jt,o.anisotropy=4,o.needsUpdate=!0,o}var AE=`
attribute vec4 aB;   // lift, curl, flutter, seed
attribute vec4 aC;   // cell, draw, erase, variant
uniform float uT;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
void main(){
  vUv = uv; vC = aC; vSeed = aB.w;
  float a = aB.x, k = aB.y, fl = aB.z;
  float s = (1.0 - uv.y) * ${Ri.toFixed(2)};          // arc length from the pivot edge (uv.y = 1)
  float x = (uv.x - 0.5) * ${ic.toFixed(2)};
  float th = a + k * s, ky, kz;
  if (abs(k) < 1e-3) { ky = -s * cos(a); kz = s * sin(a); }
  else { ky = -(sin(th) - sin(a)) / k; kz = (cos(a) - cos(th)) / k; }
  vec3 n = vec3(0.0, sin(th), cos(th));
  float w = fl * sin(x * 3.1 + uT * 7.0 + aB.w * 6.28) * (0.3 + s);
  vec3 p = vec3(x, ${(Ri/2).toFixed(2)} + ky, kz) + n * w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,RE=`
uniform sampler2D uLines, uMarks, uHero;
uniform float uT, uInv, uTable, uHeroCol, uInk;
uniform vec3 uFog;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
${Ee}
float hole(vec2 q, vec2 c, float hx, float r){ vec2 d = q - c; d.x = max(abs(d.x) - hx, 0.0); return length(d) / r; }
void main(){
  vec2 q = vec2((vUv.x - 0.5) * ${ic.toFixed(2)}, (vUv.y - 0.5) * ${Ri.toFixed(2)});
  float pegY = ${(Ri/2-.075).toFixed(3)};
  float hc = min(hole(q, vec2(0.0, pegY), 0.0, 0.028), min(hole(q, vec2(-0.62, pegY), 0.032, 0.018), hole(q, vec2(0.62, pegY), 0.032, 0.018)));
  if (hc < 1.0) discard;
  // paper
  float grain = vnoise(vUv * vec2(900.0, 620.0) + vSeed * 50.0);
  float fib = fbm(vUv * vec2(12.0, 8.0) + vSeed * 9.0);
  vec3 paper = mix(vec3(0.46, 0.41, 0.30), vec3(0.58, 0.53, 0.40), fib) * (0.94 + 0.08 * grain);
  paper *= 1.0 - 0.12 * smoothstep(0.42, 0.5, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));   // aged edges
  paper *= 1.0 - 0.35 * smoothstep(1.35, 1.0, hc);                                          // hole shadow
  // drawing inside the 16:9 frame
  vec2 f = vec2(q.x / ${E0.toFixed(2)} + 0.5, (q.y - ${sc.toFixed(2)}) / ${M0.toFixed(2)} + 0.5);
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
}`,CE=`
uniform float uT, uInv; uniform vec2 uOff; varying vec2 vUv;
${Ee}
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
}`,PE=`
attribute vec4 aD; uniform float uT; uniform vec3 uC; uniform float uK;
varying vec3 vCol; varying float vA;
${Ee}
void main(){
  vec3 p = position + vec3(sin(uT * 0.7 + aD.x * 6.28), -uT * 0.25 * (0.5 + aD.y), cos(uT * 0.5 + aD.z * 6.28)) * 0.6;
  p = uC + mod(p - uC + 6.0, 12.0) - 6.0;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((1.0 + aD.w * 2.5) * (1.0 + uK) * 90.0 / -mv.z, 0.0, 7.0);
  vCol = mix(vec3(0.55, 0.5, 0.45), vec3(1.0, 0.25, 0.1), step(0.8, aD.w));
  vA = 0.35 * smoothstep(0.2, 1.0, -mv.z);
}`,IE=`
uniform float uA; varying vec2 vUv;
void main(){
  float e = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
  vec3 c = mix(vec3(1.0, 0.88, 0.66) * 0.9 * (1.0 - 0.35 * length(vUv - 0.5)), vec3(0.02, 0.02, 0.025), smoothstep(0.9, 0.93, e));
  gl_FragColor = vec4(c * uA, 1.0);
}`,Vp=.004,Gp=.22,Yt=3,UE=2.05,ti=-30,LE=[Bt,Wi,Bs],Wp=new tt,qp=new tt,Xp=new Ot,DE=new S(1,1,1),x0=new S,Yp=new S,ec=new S,ks=new S,tc=new S,NE=new S(1,0,0),FE=new S(0,0,1),Aw=new S(0,1,0);function $p(s,e,t){return ec.copy(s).normalize(),x0.crossVectors(e,ec).normalize(),Yp.crossVectors(ec,x0),Wp.makeBasis(x0,Yp,ec),t.setFromRotationMatrix(Wp)}var y0=()=>({p:new S,q:new Ot,a:0,k:0,f:0});function _0(s,e,t,n){return s.p.lerpVectors(e.p,t.p,n),s.q.slerpQuaternions(e.q,t.q,n),s.a=De(e.a,t.a,n),s.k=De(e.k,t.k,n),s.f=De(e.f,t.f,n),s}var HE=new Ot().setFromAxisAngle(NE,-Math.PI/2),Kp=(s,e,t)=>{let n=0;for(let i of s){if(i>e)break;n+=ve.out(le((e-i)/t))}return n},Yr=Yt+sc,OE=[[zs,.35,1.9,2.3,0,.1,-.55,38,.04],[142.82,.15,1.7,2,0,.12,-.6,36,0],[142.84,.3,3.1,.9,0,0,-.6,40,0],[Bt-.02,.2,2.8,.7,0,0,-.6,42,-.06],[Wi,0,Yt-.4,5.5,0,Yt,-10,60,0],[zp-.02,0,Yt-.2,-2,.3,Yt+.2,-20,64,.5],[zp,1.1,Yt+.9,-9.5,-.3,Yt-.3,3,50,-.2],[146.97,.8,Yt+.6,-6.8,-.3,Yt-.2,5,52,-.3],[146.99,0,Yt,-4,0,Yt,-25,70,0],[Bs-.02,0,Yt,-15,0,Yt,-30,82,.8],[Bs,0,Yt+.3,ti+12.5,0,Yt,ti,55,0],[Dn-.02,0,Yt,ti+10.8,0,Yt,ti,52,.03],[Dn,0,Yr,ti+8,0,Yr,ti,46,0],[Dn+.5,0,Yr,ti+3.2,0,Yr,ti,42,0],[$r-.05,0,Yr,ti+1.2,0,Yr,ti,40,0]],rc=class extends ht{constructor(e){super(e,{fov:40,near:.02,far:300});let t=e.img,n=m=>({value:m});this.clear.setRGB(.01,.008,.012),this.camera.rotation.order="YXZ";let i=ae.events("kick"),r=ae.events("snare");this.kicks=i.filter(m=>m>zs-.05&&m<$r+.2),this.snares=r.filter(m=>m>zs-.05&&m<$r+.2);let a=[...i,...r].filter(m=>m>=zs+.05&&m<Bt-.12).sort((m,_)=>m-_);this.flips=[];for(let m of a)(!this.flips.length||m-this.flips[this.flips.length-1]>.06)&&this.flips.push(m);this.flipAt=new Float32Array(di).fill(1e9),this.flips.forEach((m,_)=>{2*_<di&&(this.flipAt[2*_]=m),2*_+1<di&&(this.flipAt[2*_+1]=m+.055)});let o=ft(91);this.rs=Array.from({length:di},(m,_)=>({r:1.4+o()*2.2,h:o(),ph:o()*6.28,sp:.8+o()*.9,d:o()*.25,sd:o(),tw:o()*6.28,dir:new S(o()-.5,o()-.5,-.4-o()).normalize(),ax:new S(o()-.5,o()-.5,o()-.5).normalize(),cell0:_*7%15,var:_*5%16,roll:(o()-.5)*.06}));let l=new pe(1,1,22,16);this.aB=new Float32Array(di*4),this.aC=new Float32Array(di*4),l.setAttribute("aB",new ut(this.aB,4)),l.setAttribute("aC",new ut(this.aC,4)),this.U={uT:n(0),uInv:n(0),uTable:n(0),uHeroCol:n(0),uInk:n(0),uFog:n(new _e(.012,.01,.016)),uLines:n(SE(t,e.memo)),uMarks:n(TE()),uHero:n(t.shinji_red?t.shinji_red.tex:null)};let c=new ne({vertexShader:AE,fragmentShader:RE,uniforms:this.U,side:je});this.sheets=new Wt(l,c,di),this.sheets.frustumCulled=!1,this.sheets.instanceMatrix.setUsage(Ed),this.scene.add(this.sheets),this.P=Array.from({length:di},y0),this.PA=y0(),this.PB=y0(),this.BU={uT:n(0),uInv:n(0),uOff:n(new se)},this.scene.add(us(CE,this.BU)),this.TU={uA:n(1)},this.table=new z(new pe(2.5,3.1),new ne({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:IE,uniforms:this.TU})),this.table.rotation.x=-Math.PI/2,this.table.position.set(0,-.012,-.72),this.scene.add(this.table),this.glow=new En(new pn({map:e.shared.glow,color:16767136,blending:Pe,depthWrite:!1,transparent:!0,opacity:.35})),this.glow.scale.set(5,3.5,1),this.glow.position.set(0,.1,-.6),this.scene.add(this.glow),this.peg=new Qt;let h=new Ct({color:1381653}),u=new z(new ot(1.7,.02,.07),h);u.position.set(0,.012,-Ri+.075),this.peg.add(u),[[-.62,.032],[0,0],[.62,.032]].forEach(([m,_])=>{let g=new z(new ot(_*2+.03,.34,.034),new Ct({color:3814962}));g.position.set(m,.17,-Ri+.075),this.peg.add(g)}),this.scene.add(this.peg);let f=new Tr(.975,1,8,1);f.rotateZ(Math.PI/8),this.rings=Array.from({length:6},()=>{let m=new z(f,new Ct({color:16734750,transparent:!0,opacity:0,blending:Pe,depthWrite:!1,side:je}));return this.scene.add(m),m});let d=900,v=new Float32Array(d*3),x=new Float32Array(d*4);for(let m=0;m<d;m++)v.set([(o()-.5)*12,(o()-.5)*12,(o()-.5)*12],m*3),x.set([o(),o(),o(),o()],m*4);let p=new qe;p.setAttribute("position",new We(v,3)),p.setAttribute("aD",new We(x,4)),this.DU={uT:n(0),uC:n(new S),uK:n(0)},this.dust=new bt(p,Kd(PE,Ur,this.DU)),this.dust.frustumCulled=!1,this.scene.add(this.dust)}stackPose(e,t,n){let i=le((t-this.flipAt[e])/Gp),r=ve.inOut(i);if(n.p.set(0,De((di-1-e)*Vp,e*Vp,r),0),n.q.copy(HE),n.f=0,i<=0){let a=e-this.nf,o=ae.hitPulse("hat",t,10)+.5*ae.hitPulse("kick",t,12);n.a=0,n.k=a<3?(.06+.3*o)*(1-a/3):0}else n.a=Math.PI*r,n.k=i<1?-2.2*Math.sin(Math.PI*i):0,n.f=.04*Math.sin(Math.PI*i);return n}vortexPose(e,t,n){let i=this.rs[e],r=Math.max(0,t-Bt),a=ve.out(le(r/1.8)),o=.3+(.5+i.h*7.5)*(.35+.65*a)+r*.6,l=i.ph+r*i.sp*2.2/(.6+i.h)+this.kAcc*.35,c=i.r*(.6+.4*a)*(1+.25*i.h),h=t<Os?-1:1;n.p.set(Math.cos(l)*c,o,Math.sin(l)*c),ks.set(h*Math.cos(l),-.35-.3*Math.sin(t*3+i.tw),h*Math.sin(l));let u=.5+.5*Math.sin(t*2.3+i.tw);return tc.set(-Math.sin(l)*u,1-u*.6,Math.cos(l)*u),$p(ks,tc,n.q),n.a=0,n.k=.6*Math.sin(t*5+i.tw),n.f=.06,n}tunnelPose(e,t,n){let i=Math.floor(e/8),r=e%8,a=i%2?1:-1,o=r*Math.PI/4+i*.2+a*(this.sAcc*Math.PI/8+(t-Wi)*.25),l=UE*(1+.14*this.kP*((r+this.kN)%3===0?1:.25));return n.p.set(Math.cos(o)*l,Yt+Math.sin(o)*l,2-i*2.4),ks.set(-Math.cos(o),-Math.sin(o),0),tc.set(0,0,-1),$p(ks,tc,n.q),n.a=0,n.k=0,n.f=.02,n}wallPose(e,t,n){let i=this.rs[e],r=e%Zo,a=Math.floor(e/Zo);return n.p.set((r-4)*ME,Yt+(4-a)*bE,ti+(e===Ko?.02:-.04*i.sd)+.12*this.kP*((r+a+this.kN)%2)),n.q.setFromAxisAngle(FE,e===Ko?0:i.roll),n.a=0,n.k=0,n.f=e===Ko?0:.01,n}scatterPose(e,t,n){this.wallPose(e,t,n);let i=this.rs[e],r=e%Zo,a=Math.floor(e/Zo),o=Math.max(0,t-Dn-Math.hypot(r-4,(a-4)*1.2)*.03),l=Math.min(1,o*3);return ks.set(r-4,4-a,0).normalize().multiplyScalar(1.2).add(i.dir),n.p.addScaledVector(ks,o*3+o*o*9),Xp.setFromAxisAngle(i.ax,o*(3+i.sd*4)),n.q.premultiply(Xp),n.k=.8*Math.sin(t*6+i.tw)*l,n.f=.1*l,n}sheetPose(e,t,n){let i=this.rs[e],r=this.PA,a=this.PB;if(t<Bt)return this.stackPose(e,t,n);if(t<Wi-.5){let o=ve.out(le((t-Bt-i.d*.5)/.55));return o>=1?this.vortexPose(e,t,n):(this.stackPose(e,Bt-.001,r),this.vortexPose(e,t,a),_0(n,r,a,o),n.k+=1.2*Math.sin(Math.PI*o),n)}if(t<Bs-.12){let o=ve.inOut(le((t-(Wi-.5)-i.d*.3)/.45));return o>=1?this.tunnelPose(e,t,n):(this.vortexPose(e,t,r),this.tunnelPose(e,t,a),_0(n,r,a,o),n.k+=.8*Math.sin(Math.PI*o),n.f+=.08*Math.sin(Math.PI*o),n)}if(t<Dn||e===Ko){let o=ve.out(le((t-(Bs-.12)-i.d*.5)/.4));return o>=1?this.wallPose(e,t,n):(this.tunnelPose(e,Bs-.12,r),this.wallPose(e,t,a),_0(n,r,a,o),n.k+=1*Math.sin(Math.PI*o),n.f+=.1*Math.sin(Math.PI*o),n)}return this.scatterPose(e,t,n)}sheetInk(e,t){let n=this.rs[e];if(t<Bt)return[n.cell0,1,0];if(e===Ko&&t>=Dn)return t<Dn+.36?[this.lastCell(e,Dn),1,le((t-Dn)/.3)]:[EE,le((t-Dn-.4)/.55),0];let i=this.lastCell(e,t),r=this.lastDraw;return[i,r,t>Dn?le((t-Dn-.1-n.d*.4)/.5):0]}lastCell(e,t){let n=this.kB,i=0;for(;i<n.length&&n[i]<=t;)i++;let r=i-1;return r>=0&&(e+r)%2&&r--,this.lastDraw=r>=0?le((t-n[r])/.22):1,(this.rs[e].cell0+7*(r+1))%15}invAt(e){for(let t of LE)if(e>=t&&e<t+.09)return 1;return 0}camAt(e){let t=this.camera;if(e>=Bt&&e<Os){let n=(e-Bt)/(Os-Bt),i=ve.inOut(n);t.position.set(.15*Math.sin(e*2),De(-1.6,2.6,i),.15*Math.cos(e*2)),t.up.set(0,1,0),t.rotation.set(De(1.15,1.3,i),.3+n*2.2,0),t.fov!==72&&(t.fov=72,t.updateProjectionMatrix());return}if(e>=Os&&e<Wi){let n=(e-Os)/(Wi-Os),i=ve.inOut(n),r=.6+n*1.4,a=De(11,8,i);t.position.set(Math.sin(r)*a,De(2.5,5.5,i),Math.cos(r)*a),t.up.set(0,1,0),t.lookAt(0,De(3.2,4.2,i),0);let o=De(52,46,i);t.fov!==o&&(t.fov=o,t.updateProjectionMatrix());return}zt(t,OE,e,.004*ae.hitPulse("kick",e,12))}update(e,t){for(this.kB||(this.kB=this.kicks.filter(c=>c>=Bt-.01)),this.nf=0;this.nf<di&&this.flipAt[this.nf]+Gp<=e;)this.nf++;this.kAcc=Kp(this.kicks.filter(c=>c>=Bt),e,.25),this.sAcc=Kp(this.snares.filter(c=>c>=Wi-.05),e,.18),this.kP=ae.hitPulse("kick",e,9),this.kN=ae.count("kick",zs,e);for(let c=0;c<di;c++){let h=this.sheetPose(c,e,this.P[c]);qp.compose(h.p,h.q,DE),this.sheets.setMatrixAt(c,qp);let[u,f,d]=this.sheetInk(c,e);this.aB.set([h.a,h.k,h.f,this.rs[c].sd],c*4),this.aC.set([u,f,d,this.rs[c].var],c*4)}this.sheets.instanceMatrix.needsUpdate=!0,this.sheets.geometry.attributes.aB.needsUpdate=this.sheets.geometry.attributes.aC.needsUpdate=!0,this.camAt(e);let n=this.invAt(e),i=ae.hitPulse("snare",e,10),r=1-V(Bt-.05,Bt+.3,e);this.U.uT.value=e,this.U.uInv.value=n,this.U.uTable.value=r,this.U.uInk.value=i*(e>Bt?1:.4),this.U.uHeroCol.value=V(Dn+.8,$r,e)*.5,this.TU.uA.value=r,this.table.visible=e<Bt,this.glow.material.opacity=.12*r*(.85+.3*ae.hitPulse("kick",e,8)),this.glow.visible=e<Bt,this.peg.visible=e<Bt;let a=this.snares,o=a.length-1;for(;o>=0&&a[o]>e;)o--;this.rings.forEach((c,h)=>{let u=a[o-h],f=u===void 0?9:e-u;if(f>.8||u>=Dn){c.visible=!1;return}c.visible=!0;let[d,v]=u<Bt?[[0,.05,-.6],1.2]:u<Os?[[0,9,0],5]:u<Wi?[[0,4,0],6]:u<Bs?[[0,Yt,this.camera.position.z-7],2.6]:[[0,Yt,ti+.3],5];c.position.set(...d),c.lookAt(this.camera.position),c.scale.setScalar(v*(.5+f*2.2)),c.material.opacity=.4*Math.exp(-f*5)*(u<Bt?.5:1)}),this.BU.uT.value=e,this.BU.uInv.value=n;let l=this.camera.getWorldDirection(ks);this.BU.uOff.value.set(Math.atan2(l.x,-l.z)*.3,l.y*.3),this.DU.uT.value=e,this.DU.uC.value.copy(this.camera.position),this.DU.uK.value=this.kP}post(e){let t=ae.hitPulse("kick",e,11),n=ae.hitPulse("snare",e,12),i=1-V($r-.6,$r,e);return{bloom:.55+.25*n,bloomThr:.78,contrast:1.12,grain:.14,vig:.7,ca:.6+1.2*n,flicker:.08*i,scratch:.18*i,weave:.15*i,punch:.22*t,shake:.002*t*i,tint:[1.04,.98,.9],dust:.25,dustCol:[.9,.8,.7],exposure:1+.12*t+.25*(e<Bt)*(1-V(zs,zs+.15,e))}}};var w0=`
uniform float uT, uSpin, uGrow, uOpen, uCrown, uRad, uGone;
vec3 helixP(float y, float s){
  float o = uOpen * smoothstep(uCrown - 16.0, uCrown, y);
  float R = uRad * (1.0 + 0.06 * sin(y * 0.7 - uT * 1.3)) * (1.0 + o * o * 5.0);
  float a = y * 0.785 + uSpin + s * 3.14159 + o * 2.0;
  return vec3(cos(a) * R, y + o * o * 5.0, sin(a) * R);
}`,Zp="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",Jp=`
uniform float uT, uAlt, uRain, uGlow, uBright; varying vec3 vW;
${Ee}
${Ir}
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
}`,S0=`
${w0}
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
}`,T0=`
uniform float uT, uGrow, uRain, uBeat; uniform float uPulse[8], uPulseY[8];
varying float vY, vS, vF; varying vec3 vN, vV;
${Ir}
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
}`,jp=`
${w0}
attribute vec2 aR; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float y = aR.x; vec3 a = helixP(y, 0.0), b = helixP(y, 1.0);
  vec3 p = mix(a, b, uv.x), side = normalize(cross(b - a, cameraPosition - p)) * 0.035;
  vUv = uv; vSeed = aR.y;
  vA = smoothstep(uGrow - 0.5, uGrow - 2.5, y) * smoothstep(uGone - 2.0, uGone + 2.0, y) * (1.0 - smoothstep(0.0, 0.6, uOpen * smoothstep(uCrown - 16.0, uCrown, y)));
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * (uv.y * 2.0 - 1.0), 1.0);
}`,Qp=`
uniform float uT, uBeat; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float g = exp(-pow(vUv.y * 2.0 - 1.0, 2.0) * 4.0);
  vec3 c = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vUv.x) * (0.25 + 0.3 * uBeat);
  float sp = fract(uT * 0.6 + vSeed); c += vec3(1.0, 0.9, 0.8) * exp(-abs(vUv.x - sp) * 30.0) * 1.2;
  gl_FragColor = vec4(c * g * vA, 1.0);
}`,em=`
${w0}
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
}`,tm=`
uniform sampler2D uAtlas; uniform float uT, uBeat, uRain; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
${Ee}
${Ir}
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
}`,nm=`
uniform sampler2D uTex; uniform float uA, uT, uDis; varying vec2 vUv;
${Ee}
void main(){
  vec2 pu = (vUv - vec2(0.05, 0.12)) / vec2(0.9, 0.83);
  vec3 col = vec3(0.9, 0.86, 0.8);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col = texture2D(uTex, pu).rgb * 1.05;
  float n = fbm(vUv * 5.0 + 3.0), th = 1.2 - uDis * 1.4;
  if (n < th - 0.0 && uDis < 1.0) discard;
  col += vec3(3.0, 1.6, 0.5) * smoothstep(th + 0.06, th, n) * step(uDis, 0.999);
  col += vec3(1.0, 0.7, 0.4) * 0.15 * (1.0 - smoothstep(0.0, 0.04, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y))));
  gl_FragColor = vec4(col * uA, uA);
}`,oc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",im=`
uniform float uAge, uR; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float r = length(vUv - 0.5) * 2.0, R = uR;
  float g = exp(-pow((r - R) * 40.0, 2.0)) + 0.35 * exp(-abs(r - R) * 12.0) * step(r, R);
  gl_FragColor = vec4(uCol * g * (1.0 - uAge) * (1.0 - uAge), 1.0);
}`,sm=`
uniform float uT, uA; varying vec2 vUv;
${Ir}
void main(){
  vec2 q = vUv - 0.5; float r = length(q) * 2.0, a = atan(q.y, q.x) / 6.2832 + 0.5;
  float seg = step(0.12, fract(a * 24.0 + uT * 0.3));
  float band = exp(-pow((r - 0.86) * 30.0, 2.0)) * seg + exp(-pow((r - 0.72) * 90.0, 2.0)) * 0.6 + exp(-pow((r - 0.95) * 120.0, 2.0)) * 0.5;
  band += exp(-abs(r - 0.86) * 8.0) * 0.12;
  gl_FragColor = vec4(pencil(fract(a + uT * 0.05)) * 1.6 * band * uA, 1.0);
}`,rm=`
uniform float uT, uCamY, uPx, uA, uRain, uRise; attribute vec4 aM; varying vec3 vCol; varying float vA;
${Ir}
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
}`;var Zr=181.25,qi=207.5,pi=72,om=17,A0=1.6,kE=8,Vs=182.9,Jr=184.75,on=198.3,Kr=204.6,zE=["m_misato","m_asuka","m_mari","rei_white","kaworu","m_toji","m_kensuke","m_sakura","m_ritsuko","gendo_yui","snap1","rei_paddy"],BE=[["vec3 zen = mix(vec3(0.05, 0.012, 0.03), vec3(0.006, 0.008, 0.028), uAlt);","vec3 zen = mix(vec3(0.02, 0.035, 0.09), vec3(0.004, 0.006, 0.03), uAlt);"],["vec3 hor = mix(vec3(0.26, 0.018, 0.022), vec3(0.1, 0.012, 0.035), uAlt);","vec3 hor = mix(vec3(0.32, 0.15, 0.1), vec3(0.06, 0.05, 0.11), uAlt);"],["col += vec3(0.3, 0.02, 0.02) * fbm3","col += vec3(0.25, 0.12, 0.07) * fbm3"],["col = vec3(0.07, 0.004, 0.006) + sky(rd) * vec3(1.0, 0.4, 0.35) * fr;","col = vec3(0.004, 0.022, 0.045) + sky(rd) * vec3(0.65, 0.85, 1.0) * fr;"]].reduce((s,[e,t])=>(s.includes(e)||console.warn("helix2 sky patch miss",e),s.replace(e,t)),Jp),R0=[[Zr-.2,1.4,13,-.3,7],[182.3,7,10.5,.4,6],[Vs,16.5,7.6,1.3,2.8],[Jr,18.5,6.8,2.1,2.4],[186.2,26,6.6,3,2.5],[188,33,6,3.9,2.5],[189.7,39,5.4,4.6,3],[191.4,44,.4,5.3,14],[192.56,46,.3,5.6,14],[197.6,58,.25,7.6,14],[200.6,70,3.5,8.4,11],[203.4,82,9,9.1,-14],[qi,90,19,9.8,-24]];function C0(s,e){let t=0;for(;t<e.length-2&&s>e[t+1][0];)t++;let n=e[Math.max(0,t-1)],i=e[t],r=e[t+1],a=e[Math.min(e.length-1,t+2)],o=le((s-i[0])/(r[0]-i[0])),l=o*o,c=l*o;return i.slice(1).map((h,u)=>{let f=n[u+1],d=i[u+1],v=r[u+1],x=a[u+1];return .5*(2*d+(-f+v)*o+(2*f-5*d+4*v-x)*l+(-f+3*d-3*v+x)*c)})}var ac=class extends ht{constructor(e){super(e,{fov:55,near:.05,far:1500});let t=b=>({value:b});this.faces=new Jn(e.shared.atlas(e.img,zE,256,256)),this.faces.colorSpace=yn,this.faces.anisotropy=4,this.H={uT:t(0),uSpin:t(0),uGrow:t(0),uOpen:t(0),uCrown:t(pi),uRad:t(A0),uGone:t(-20),uBeat:t(0),uRain:t(0)};let n={transparent:!0,depthWrite:!1,blending:Pe};this.SK={uT:this.H.uT,uAlt:t(0),uRain:this.H.uRain,uGlow:t(1),uBright:t(1)},this.sky=new z(new nn(600,48,24),new ne({vertexShader:Zp,fragmentShader:BE,uniforms:this.SK,side:mt,depthWrite:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1;let i=1100,r=10,a=pi+4,o=[],l=[],c=[];for(let b=0;b<2;b++)for(let T=0;T<=i;T++)for(let R=0;R<r;R++)l.push(T/i*a,R/r*6.2832,b),o.push(0,0,0);for(let b=0;b<2;b++)for(let T=0;T<i;T++)for(let R=0;R<r;R++){let I=b*(i+1)*r,U=I+T*r+R,y=I+T*r+(R+1)%r,M=U+r,D=y+r;c.push(U,M,y,y,M,D)}let h=new qe;h.setAttribute("position",new Ye(o,3)),h.setAttribute("aP",new Ye(l,3)),h.setIndex(c),this.pulses=new Array(8).fill(-99),this.pulseY=new Array(8).fill(0),this.SU={...this.H,uPulse:t(this.pulses),uPulseY:t(this.pulseY)},this.strands=new z(h,new ne({vertexShader:S0,fragmentShader:T0,uniforms:this.SU,...n,side:je})),this.strands.frustumCulled=!1,this.strands.renderOrder=2,this.SU2={...this.SU,uRad:t(A0*2.7),uSpin:t(0),uGrow:t(0),uRain:t(1)},this.strands2=new z(h,new ne({vertexShader:S0,fragmentShader:T0,uniforms:this.SU2,...n,side:je})),this.strands2.frustumCulled=!1,this.strands2.renderOrder=2;let u=ft(166),f=Math.floor((pi-1)/.9),d=new sn().copy(new pe(1,1).translate(.5,.5,0)),v=new Float32Array(f*2);for(let b=0;b<f;b++)v[b*2]=1+b*.9,v[b*2+1]=u();d.setAttribute("aR",new ut(v,2)),d.instanceCount=f,this.rungs=new z(d,new ne({vertexShader:jp,fragmentShader:Qp,uniforms:this.H,...n,side:je})),this.rungs.frustumCulled=!1,this.rungs.renderOrder=1;let x=[];for(let b=0;b<f;b++)(b%2===0||b*.9>pi-22)&&x.push([1+b*.9,(b>>1)%2?1:-1,Math.floor(u()*12),u()]),b*.9>pi-22&&b%2&&x.push([1+b*.9,(b>>1)%2?-1:1,Math.floor(u()*12),u()]);let p=new sn().copy(new pe(.9,1.06));p.setAttribute("aC",new ut(new Float32Array(x.flat()),4)),p.instanceCount=x.length,this.CU={...this.H,uAtlas:t(this.faces),uPart:t(0),uBurst:t(0),uHeroY:t(om),uHeroOn:t(0)},this.cards=new z(p,new ne({vertexShader:em,fragmentShader:tm,uniforms:this.CU,side:je})),this.cards.frustumCulled=!1,this.cards.renderOrder=0,this.HU={uTex:t(e.img.ube_pilots?e.img.ube_pilots.tex:null),uA:t(0),uT:this.H.uT,uDis:t(0)},this.hero=new z(new pe(3.8,2.4),new ne({vertexShader:oc,fragmentShader:nm,uniforms:this.HU,transparent:!0,side:je})),this.hero.renderOrder=3;let m=b=>{let T=new En(new pn({map:e.shared.glow,color:b,...n}));return T.renderOrder=4,T};this.tips=[m(new _e(1,.7,.3)),m(new _e(1,.2,.2))],this.rings=Array.from({length:kE},()=>{let b=new z(new pe(1,1),new ne({vertexShader:oc,fragmentShader:im,uniforms:{uAge:t(1),uR:t(0),uCol:t(new _e(1,.6,.4))},...n,side:je}));return b.rotation.x=-Math.PI/2,b.renderOrder=3,b.visible=!1,b}),this.ringTimes=[...zd,...n0].filter(b=>b>Zr-.1&&b<qi).sort((b,T)=>b-T),this.AU={uT:this.H.uT,uA:t(0)},this.halo=new z(new pe(22,22),new ne({vertexShader:oc,fragmentShader:sm,uniforms:this.AU,...n,side:je})),this.halo.rotation.x=-Math.PI/2,this.halo.position.y=pi+30,this.halo.renderOrder=3;let _=3200,g=new Float32Array(_*4);for(let b=0;b<g.length;b++)g[b]=u();let E=new qe;E.setAttribute("position",new We(new Float32Array(_*3),3)),E.setAttribute("aM",new We(g,4)),this.MU={uT:this.H.uT,uCamY:t(0),uPx:t(1),uA:t(1),uRain:this.H.uRain,uRise:t(0)},this.motes=new bt(E,new ne({vertexShader:rm,fragmentShader:Ur,uniforms:this.MU,...n})),this.motes.frustumCulled=!1,this.motes.renderOrder=5,this.scene.add(this.sky,this.cards,this.rungs,this.strands,this.strands2,this.hero,...this.tips,...this.rings,this.halo,this.motes)}helixP(e,t){let n=this.H,i=n.uOpen.value*V(pi-16,pi,e),r=n.uT.value,a=A0*(1+.06*Math.sin(e*.7-r*1.3))*(1+i*i*5),o=e*.785+n.uSpin.value+t*Math.PI+i*2;return new S(Math.cos(o)*a,e+i*i*5,Math.sin(o)*a)}update(e){let t=this.H,n=ae.beatPulse(e,6),i=le(ae.get("kick",e));t.uT.value=e,t.uBeat.value=n*.6+i*.4,t.uSpin.value=(e-Zr)*.42+.35*ve.inOut(ct(e,on-.4,on+2.5)),t.uGrow.value=Math.max(1,Math.min(pi+4.5,C0(e+1,R0)[0]+10)*ve.out(ct(e,Zr-.2,Zr+3.5))),t.uOpen.value=ve.inOut(ct(e,on-1.2,on+3.5)),t.uGone.value=e<Kr?-20:De(-8,pi+20,ve.in(ct(e,Kr,qi-.4))),t.uRain.value=V(on-.6,on+1.4,e)*(1-.5*V(213,qi,e)),this.CU.uPart.value=V(189.8,192.2,e)*(1-V(196.4,198,e)),this.SU2.uSpin.value=-(e-on)*.9+1.2,this.SU2.uGrow.value=(pi+4)*ve.out(ct(e,on-.3,on+1.6)),this.strands2.visible=e>on-.3,this.CU.uBurst.value=ve.out(ct(e,on,on+7));let r=V(Vs-.8,Vs+.2,e)*(1-V(Jr-.5,Jr+.6,e));this.CU.uHeroOn.value=r,this.HU.uA.value=r>.001?1:0,this.hero.visible=r>.001,this.HU.uDis.value=e<Jr-.5?ve.out(ct(e,Vs-.9,Vs+.5)):1-ve.in(ct(e,Jr-.5,Jr+.5));let[a,o,l,c]=C0(e,R0),h=this.camera,u=.08*Math.sin(e*.7);h.position.set(Math.cos(l)*o,a+u,Math.sin(l)*o);let f=new S(Math.cos(l+.5)*o*.02,a+c,Math.sin(l+.5)*o*.02),d=f.clone().sub(h.position).normalize(),v=V(.8,.98,Math.abs(d.y));h.up.set(0,1,0).lerp(new S(Math.cos(l+1.2),0,Math.sin(l+1.2)),v).normalize(),h.lookAt(f);let x=V(190.5,192.3,e)*(1-V(197,199,e));h.fov=55+14*x+4*n*x,h.updateProjectionMatrix(),this.sky.position.copy(h.position),this.SK.uAlt.value=V(0,90,a),this.SK.uGlow.value=1-V(Kr,qi,e)*.6,this.hero.position.set(0,om+.4*Math.sin(e*.8)-.6*(1-ve.out(ct(e,Vs-.9,Vs+.8))),0),this.hero.lookAt(h.position.x,this.hero.position.y,h.position.z);let p=this.ringTimes.filter(m=>m<=e).slice(-8);for(let m=0;m<8;m++)this.pulses[m]=p[m]??-99,this.pulseY[m]=p[m]?this.ringY(p[m])-12:0;this.rings.forEach((m,_)=>{let g=p.length-1-_,E=p[g];if(E===void 0||e-E>2.2){m.visible=!1;return}let b=(e-E)/2.2,T=n0.includes(E);m.visible=!0,m.position.set(0,this.ringY(E),0),m.scale.setScalar(T?60:34);let R=m.material.uniforms;R.uAge.value=b,R.uR.value=ve.out(b),R.uCol.value.setRGB(1,T?.85:.5+.2*(g%2),T?.7:.35)}),this.tips.forEach((m,_)=>{let g=this.helixP(t.uGrow.value,_);m.position.copy(g);let E=e<on+1?1:0;m.scale.setScalar((1.4+.8*n)*E),m.visible=E>0}),this.halo.rotation.z=e*.12,this.AU.uA.value=V(on,on+2,e)*(1-V(214,qi,e))*(1+.4*n),this.MU.uCamY.value=a,this.MU.uPx.value=this.ctx.h/720,this.MU.uRise.value=(e-Zr)*1.3+12*ve.in(ct(e,Kr,qi)),this.MU.uA.value=.8+.8*V(Kr,qi,e)}ringY(e){return C0(e,R0)[0]-1.5}post(e){let t=ae.beatPulse(e,6),n=V(190.5,192.3,e)*(1-V(197,199,e)),i=e>=on?Math.exp(-(e-on)*2.5):0,r=V(Kr,qi,e);return{bloomThr:.76,sat:1.12,contrast:1.05,vig:.5,grain:.05,ca:.4+.6*i,exposure:(1+.08*t)*(1-.22*n),bloom:.7-.25*n+.2*t+.3*V(on-1,on+1,e),fadeW:.55*i+.25*r*r,dust:.1}}};var VE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",GE=`uniform sampler2D tMap; uniform float uReveal, uAlpha, uSoft, uMode, uHot; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float a = texture2D(tMap, vUv).a;
  float r = smoothstep(uReveal + 0.002, uReveal - uSoft, vUv.x);
  float hot = smoothstep(uSoft * 3.0, 0.0, uReveal - vUv.x) * step(vUv.x, uReveal) * step(uReveal, 0.999);
  if (uMode < 0.5) gl_FragColor = vec4(uCol * (1.0 + hot * uHot) * a * r * uAlpha, 1.0);
  else gl_FragColor = vec4(uCol * (1.0 - hot * 0.25), a * r * uAlpha);
}`,P0=null,Jo=class{constructor(e,t={}){let{c:n,w:i,h:r}=Jd(e,{font:t.font||wt.script,size:t.size||220,color:"#fff",pad:60});this.aspect=i/r,this.H=t.height||.6,this.W=this.H*this.aspect,this.cy=WE(n,160),this.u={tMap:{value:hn(n)},uReveal:{value:0},uAlpha:{value:1},uSoft:{value:t.soft??.025},uMode:{value:t.paper?1:0},uHot:{value:t.hot??3},uCol:{value:new S(...t.color||[1,.7,.35])}};let a=new ne({vertexShader:VE,fragmentShader:GE,uniforms:this.u,transparent:!0,depthWrite:!1,depthTest:!1,blending:t.paper?Kn:Pe});this.group=new Qt,this.mesh=new z(new pe(this.W,this.H),a),this.group.add(this.mesh),P0=P0||zl(128),this.tipMat=new Ct({map:P0,color:new _e(...t.tipColor||[3,2.2,1.2]),transparent:!0,blending:Pe,depthWrite:!1,depthTest:!1}),this.tip=new z(new pe(1,1),this.tipMat),this.tip.scale.setScalar(this.H*.5),this.group.add(this.tip)}set(e,t=1,n=1){this.u.uReveal.value=e,this.u.uAlpha.value=t;let i=this.cy.length,r=Math.min(i-1,Math.max(0,e*(i-1))),a=Math.floor(r),o=r-a,l=this.cy[a]*(1-o)+this.cy[Math.min(i-1,a+1)]*o;this.tip.position.set((e-.5)*this.W,(.5-l)*this.H,.01);let c=e>.002&&e<.998?1:0;this.tipMat.opacity=c*t*n*(.75+.25*Math.sin(e*90)),this.tip.visible=this.tipMat.opacity>.01}};function WE(s,e){let t=s.getContext("2d"),{width:n,height:i}=s,r=t.getImageData(0,0,n,i).data,a=new Float32Array(e),o=.5;for(let l=0;l<e;l++){let c=Math.floor(l/e*n),h=Math.max(c+1,Math.floor((l+1)/e*n)),u=0,f=0;for(let d=c;d<h;d++)for(let v=0;v<i;v+=2){let x=r[(v*n+d)*4+3];u+=x*v,f+=x}o=f>0?u/f/i:o,a[l]=o}for(let l=1;l<e-1;l++)a[l]=(a[l-1]+a[l]*2+a[l+1])/4;return a}var cm=226.2,lc=252.03,am=[.62,.86],Gs=237.72,jo=241.96,jr=232.9,I0=245.2,Qr=245,qE=`uniform float uDraw, uColor, uWindA, uMarks, uBoil, uStreak; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }
float box(vec2 p, vec2 a, vec2 b, float w){ vec2 q = min(p - a, b - p); float i = min(q.x, q.y);
  return (i > -w && i < w) ? 1.0 : 0.0; }`,XE=`
  // clouds drift and breathe, grass and hedges sway in gusts, the sea breathes; streak = speed blur of the close-up
  float sky = smoothstep(0.62, 0.72, uv.y);
  uv.x -= 0.012 * sin((uT - 226.0) * 0.09) * sky + 0.003 * sin(uT * 0.3 + uv.y * 5.0) * sky;
  float g = 0.5 + 0.5 * sin(uv.x * 8.0 - uT * 2.2);
  uv.x += (sin(uv.x * 60.0 + uT * 3.3) * 0.35 + g) * 0.004 * smoothstep(0.45, 0.2, uv.y) * uWindA * (0.5 + d);
  float sea = smoothstep(0.66, 0.6, uv.y) * smoothstep(0.38, 0.45, uv.y) * smoothstep(0.1, 0.35, uv.x) * smoothstep(0.92, 0.8, uv.x);
  uv.y += 0.0015 * sin(uv.x * 90.0 + uT * 2.0) * sea;
  return uv;
`,YE=`
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
  vec2 sq = (uv - vec2(${am[0]}, ${am[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
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
`,$E="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",KE=`
uniform sampler2D uTex; uniform float uT, uLine, uColor, uAlpha, uBoil; uniform vec2 uTexel; varying vec2 vUv;
${Ee}
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
}`,ZE=`attribute vec4 aR; uniform float uT, uAsp, uPx, uA, uSp; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12 * uSp);
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.5 ? vec3(0.55, 0.72, 0.35) : k < 0.75 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (10.0 + 16.0 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,JE=`varying vec3 vCol; varying float vA, vRot;
void main(){
  vec2 d = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot); d = mat2(c, s, -s, c) * d;
  d.x *= 0.45 + 0.4 * abs(sin(vRot * 0.7));
  float e = length(d * vec2(1.0, 2.2)); float a = smoothstep(0.24, 0.2, e) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * (0.9 + 0.1 * d.y), a * 0.9);
}`,jE=[[cm,0,.165,1.55,0],[229.4,.01,.15,1.5,0],[233.2,0,.02,1.2,.02],[237.7,.02,-.06,1.22,.04],[Gs,-.12,-.13,2.1,0],[jo-.02,.1,-.12,2.1,0],[jo,0,-.05,1.22,.04],[243.8,.02,-.03,1.2,.05],[246.6,0,.135,1.4,.02],[lc,-.01,.15,1.46,0]],lm=150,cc=class extends ht{constructor(e){super(e,{ortho:!0});let t=e.img,n=u=>({value:u}),i=t.p_town;this.M=Hl(i,t.p_town_d,{head:qE,warp:XE,hook:YE,uniforms:{uDraw:n(0),uColor:n(0),uWindA:n(1),uMarks:n(1),uBoil:n(0),uStreak:n(0),uTexel:n(new se(1.1/i.w,1.1/i.h))}}),this.scene.add(Ol(this.M));let r=t.p_run,a=r.w/r.h;this.RU={uTex:n(r.tex),uT:n(0),uLine:n(0),uColor:n(0),uAlpha:n(1),uBoil:n(0),uTexel:n(new se(1.2/r.w,1.2/r.h))};let o=new pe(a,1);o.translate(0,.5,0),this.run=new z(o,new ne({vertexShader:$E,fragmentShader:KE,uniforms:this.RU,transparent:!0,depthTest:!1,depthWrite:!1})),this.run.renderOrder=2,this.run.frustumCulled=!1,this.shadow=new z(new pe(1,1),new Ct({map:e.shared.glow,color:new _e(.25,.22,.2),transparent:!0,depthTest:!1,depthWrite:!1})),this.shadow.renderOrder=1;let l=ft(2262),c=new Float32Array(lm*4);for(let u=0;u<c.length;u++)c[u]=l();let h=new qe;h.setAttribute("position",new We(new Float32Array(lm*3),3)),h.setAttribute("aR",new We(c,4)),this.PU={uT:n(0),uA:n(0),uPx:n(1),uAsp:n(16/9),uSp:n(1)},this.petals=new bt(h,new ne({vertexShader:ZE,fragmentShader:JE,uniforms:this.PU,transparent:!0,depthTest:!1,depthWrite:!1})),this.petals.renderOrder=3,this.petals.frustumCulled=!1,this.title=new Jo("One Last Kiss",{font:wt.script,size:220,height:.6,color:[.2,.008,.015],paper:!0,soft:.03}),this.credit=new Jo("\u5B87\u591A\u7530\u30D2\u30AB\u30EB  \xB7  Hikaru Utada",{font:wt.mincho,size:140,height:.12,color:[.03,.03,.035],paper:!0,soft:.05}),this.title.tip.visible=!1,this.credit.tip.visible=!1,this.title.group.renderOrder=4,this.title.mesh.renderOrder=4,this.credit.mesh.renderOrder=4,this.scene.add(this.shadow,this.run,this.petals,this.title.group,this.credit.group)}update(e){let t=this.M.uniforms,n=this.ctx.aspect;t.uT.value=e,t.uAspect.value=n,this.PU.uAsp.value=n,this.PU.uT.value=e,this.PU.uPx.value=this.ctx.h/720;let i=Math.floor(e*8);t.uBoil.value=i%97,this.RU.uBoil.value=i%89,t.uDraw.value=ve.inOut(ct(e,cm+.1,230.6)),t.uColor.value=ve.inOut(ct(e,229.4,236.4))*(1-.8*ve.inOut(ct(e,248.2,251.6))),t.uMarks.value=1-.85*V(231.5,235.5,e)+.5*V(248.4,251,e);let r=e>=Gs&&e<jo?1:0;t.uStreak.value=r,this.PU.uSp.value=1+2.5*r,t.uWindA.value=.6+.4*Math.sin(e*.7)**2+.6*r-.3*ct(e,244,lc);let[a,o,l,c]=Al(e,jE),h=.003*Math.sin(e*.31),u=r?(e-Gs)*.055:0;t.uCam.value.set(a+u,o+h,l),t.uPar.value.set(c+r*.06*Math.sin((e-Gs)*.8),.01);let f=e/mn*Math.PI,d=Math.abs(Math.sin(f)),v,x,p;if(r)v=De(-.16,.14,ct(e,Gs,jo))*n,x=-1.06,p=1.75;else if(e<Gs){let E=ct(e,jr,Gs);v=De(-1.3,-.12,ve.out(E))*n,x=-.9,p=.95}else{let E=ct(e,jo,I0);v=De(.05,1.35,ve.in(E))*n,x=-.9-.25*ve.in(ct(e,243.8,I0)),p=.95}this.run.position.set(v,x+(r?.035:.022)*d,0),this.run.scale.set(p,p,1),this.run.rotation.z=-.02+.02*Math.sin(f),this.RU.uT.value=e,this.RU.uLine.value=ve.out(ct(e,jr,jr+1.6)),this.RU.uColor.value=ve.inOut(ct(e,jr+1.4,jr+3.6)),this.run.visible=e>jr&&e<I0+.1,this.shadow.position.set(v,x+.02,0),this.shadow.scale.set(p*1.6*(1-d*.15),.1*p,1),this.shadow.material.opacity=.45*this.RU.uColor.value,this.shadow.visible=this.run.visible,this.PU.uA.value=V(229,232,e)*(1-.6*V(246,250,e));let m=ve.inOut(ct(e,Qr,Qr+3.2)),_=ve.inOut(ct(e,Qr+2.8,Qr+4.4)),g=1-V(250.6,lc-.1,e);this.title.group.position.set(-.2*n,.4,0),this.title.group.rotation.z=.04,this.credit.group.position.set(-.2*n+.02,.14,0),this.title.set(m,g,0),this.credit.set(_,.85*g,0),this.title.group.visible=e>Qr,this.credit.group.visible=e>Qr+2.8}post(e){let t=V(249.8,lc,e);return{tone:1,bloom:.22,bloomThr:.92,sat:1.04,contrast:1,vig:.22,grain:.035,ca:0,letter:0,exposure:1+.03*(ae.hitPulse("kick",e,10)*V(233,236,e)*(1-V(244,247,e))),fadeW:.9*t,dust:0}}};var D0=.5357,vn=s=>1.952+D0*s,U0=[0,-73],hm=60,N0=`
uniform float uMode, uT;
vec3 skyBase(vec3 d){
  float h = d.y;
  vec3 zr = vec3(0.03, 0.0, 0.006), hr = vec3(0.7, 0.05, 0.03);
  vec3 zf = vec3(0.03, 0.018, 0.045), hf = vec3(0.7, 0.2, 0.05);
  vec3 z = mix(zr, zf, uMode), hz = mix(hr, hf, uMode);
  vec3 c = mix(hz, z, smoothstep(-0.04, 0.42, h));
  float back = smoothstep(0.2, -1.0, d.z);                   // glow is behind the city (-z)
  c += mix(vec3(0.8, 0.06, 0.03), vec3(0.9, 0.32, 0.07), uMode) * exp(-abs(h) * 11.0) * (0.3 + 0.7 * back);
  return c;
}`,um="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",QE=`varying vec3 vW; ${Ee} ${N0}
void main(){ vec3 d = normalize(vW - cameraPosition), c = skyBase(d);
  vec2 q = d.xz / (max(d.y, 0.0) + 0.12);
  float cl = fbm(q * vec2(0.9, 2.2) + vec2(uT * 0.03, 0.0)), cl2 = fbm(q * 2.6 - vec2(uT * 0.05, 3.0));
  float band = smoothstep(0.45, 0.8, cl) * smoothstep(0.0, 0.12, d.y) * smoothstep(0.9, 0.2, d.y);
  vec3 cloudC = mix(vec3(0.08, 0.0, 0.01), vec3(0.09, 0.04, 0.05), uMode);
  vec3 lit = mix(vec3(1.1, 0.12, 0.05), vec3(1.4, 0.55, 0.18), uMode) * smoothstep(0.55, 0.9, cl2);
  c = mix(c, cloudC + lit * 0.5, band * 0.85);
  // red moon (RED) / low sun (FIRE)
  vec3 md = normalize(vec3(0.0, 0.34, -1.0)); float a = acos(clamp(dot(d, md), -1.0, 1.0));
  float disc = smoothstep(0.205, 0.198, a) * (1.0 - uMode);
  vec3 moon = vec3(1.25, 0.12, 0.06) * (0.55 + 0.6 * fbm(d.xy * 18.0 + 3.0)) * (0.7 + 0.3 * smoothstep(0.2, 0.0, a));
  c = mix(c, moon, disc); c += vec3(1.0, 0.08, 0.04) * exp(-max(a - 0.2, 0.0) * 9.0) * 0.35 * (1.0 - uMode);
  vec3 sd = normalize(vec3(-0.55, 0.05, -1.0)); float sa = acos(clamp(dot(d, sd), -1.0, 1.0));
  c += vec3(2.2, 1.0, 0.35) * (smoothstep(0.035, 0.03, sa) * 2.0 + exp(-sa * 7.0) * 0.5) * uMode;
  gl_FragColor = vec4(c, 1.0); }`,fm=`
uniform vec3 uWave; uniform vec2 uEva;
vec3 fog(vec3 c, vec3 w){ vec3 v = w - cameraPosition; float d = length(v);
  float f = 1.0 - exp(-d * mix(0.0042, 0.005, uMode)); vec3 fc = skyBase(normalize(v)) * 0.42 + mix(vec3(0.02, 0.0, 0.004), vec3(0.03, 0.012, 0.01), uMode);
  f *= mix(1.0, 0.45, smoothstep(15.0, 70.0, cameraPosition.y)); return mix(c, fc, f * 0.9); }`,eM=`
attribute vec4 aB; attribute vec4 aH; uniform float uMode, uT; uniform vec3 uWave; uniform vec2 uEva;
varying vec3 vW, vN, vL; varying float vSeed;
void main(){
  vec3 p = position; float h = aH.x * mix(1.0, aH.z, uMode);                 // FIRE: broken tops
  float r = length(vec2(aB.x, aB.y) - uEva);
  float drop = (1.0 - uMode) * smoothstep(0.0, 1.0, (uWave.x - r) / 26.0) * h * 1.02;   // RED: retract into the ground
  vec3 w = vec3(aB.x + p.x * aB.z, p.y * h - drop, aB.y + p.z * aB.w);
  vec2 away = normalize(vec2(aB.x, aB.y) - uEva + 1e-3);
  float sh = uWave.z * exp(-pow((r - uWave.y) / 12.0, 2.0));                // shockwave shears the towers outward
  w.xz += away * w.y * sh * 0.22;
  vW = w; vN = normal; vL = vec3(p.x * aB.z, p.y * h, p.z * aB.w) + vec3(0.0, drop, 0.0); vL.y = p.y * h; vSeed = aH.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,tM=`varying vec3 vW, vN, vL; varying float vSeed; ${Ee} ${N0} ${fm}
void main(){ vec3 N = normalize(vN);
  vec3 L = normalize(mix(vec3(0.15, 0.32, -1.0), vec3(-0.45, 0.3, -1.0), uMode));
  vec3 Lc = mix(vec3(1.05, 0.1, 0.05), vec3(1.25, 0.5, 0.16), uMode);
  float nl = dot(N, L), band = smoothstep(0.02, 0.1, nl) * mix(1.0, 0.35, step(0.5, N.y));
  vec3 base = mix(vec3(0.05, 0.03, 0.04), vec3(0.07, 0.05, 0.05), fract(vSeed * 7.3));
  vec3 c = base * (0.18 + 0.1 * N.y) + base * Lc * band * 2.6;
  c += Lc * 0.5 * pow(1.0 - abs(dot(N, normalize(cameraPosition - vW))), 4.0) * step(N.y, 0.5) * 0.35;  // rim
  if (N.y < 0.5) {                                                      // windows
    float u = abs(N.x) > 0.5 ? vL.z : vL.x;
    vec2 g = vec2(u / 0.42, vL.y / 0.55), cell = floor(g), f = fract(g);
    float mask = smoothstep(0.12, 0.2, f.x) * smoothstep(0.88, 0.8, f.x) * smoothstep(0.25, 0.33, f.y) * smoothstep(0.85, 0.77, f.y);
    float hs = hash12(cell + vSeed * 91.0 + N.xz * 7.0);
    float on = step(mix(0.955, 0.925, uMode), hs) * (0.75 + 0.25 * sin(uT * (2.0 + hs * 9.0) + hs * 40.0) * uMode);
    vec3 wc = mix(vec3(1.3, 0.75, 0.4), vec3(0.6, 0.8, 1.2), step(0.6, fract(hs * 13.0))) * mix(0.7, 0.9, uMode);
    float dist = length(vW - cameraPosition), aa = 1.0 - smoothstep(25.0, 80.0, dist);
    c += wc * on * mix(0.1, mask, aa) * 0.9;
    c *= 1.0 - 0.35 * (1.0 - mask) * aa * 0.4;
  }
  float fire = uMode * exp(-max(vW.y, 0.0) / 4.0) * smoothstep(0.58, 0.8, fbm(vW.xz * 0.06 + 4.0)) * (0.7 + 0.3 * sin(uT * 13.0 + vW.x));
  c += vec3(1.5, 0.45, 0.1) * fire * 0.8;
  c *= mix(0.55, 1.0, smoothstep(0.0, 4.0, vW.y));                      // contact AO
  gl_FragColor = vec4(fog(c, vW), 1.0); }`,nM=`varying vec3 vW; ${Ee} ${N0} ${fm}
void main(){ vec3 V = normalize(vW - cameraPosition);
  vec2 q = vW.xz; float road = step(abs(q.x), 5.0) + step(abs(fract(q.y / 18.0) - 0.5) * 18.0, 2.2);
  vec3 c = mix(vec3(0.018, 0.012, 0.014), vec3(0.03, 0.022, 0.024), clamp(road, 0.0, 1.0));
  float lane = step(abs(q.x), 5.0) * step(abs(abs(q.x) - 2.5), 0.06) * step(0.5, fract(q.y / 4.0));
  c += vec3(0.5, 0.45, 0.4) * lane * 0.25;
  vec3 R = reflect(V, vec3(0.0, 1.0, 0.0)); float fr = pow(1.0 - max(-V.y, 0.0), 5.0);
  c += skyBase(R) * (0.05 + 0.35 * fr) * mix(0.5, 0.18, uMode) * (0.7 + 0.3 * vnoise(q * 0.7));
  float r = length(q - uEva);
  c += vec3(2.2, 0.15, 0.06) * exp(-abs(r - uWave.x) * 0.35) * (1.0 - uMode) * step(1.0, uWave.x);   // retract wave front
  c += vec3(2.4, 1.1, 0.45) * exp(-abs(r - uWave.y) * 0.18) * uWave.z * 2.0;                               // shock ring
  float fire = smoothstep(0.68, 0.84, fbm(q * 0.06 + 4.0)) * uMode * (0.75 + 0.25 * sin(uT * 11.0 + q.x * 0.3));
  c += vec3(1.3, 0.35, 0.06) * fire * (0.4 + 0.6 * vnoise(q * 1.5 + uT * 2.0));
  gl_FragColor = vec4(fog(c, vW), 1.0); }`,iM=`
attribute vec4 aC; attribute vec4 aD; uniform float uT; varying vec2 vP; varying float vH, vA, vGrow, vHue;
void main(){ float u = uT - aC.z; vA = step(0.0, u) * smoothstep(3.2, 1.6, u); u = max(u, 0.0);
  vGrow = 1.0 - exp(-u * 5.0); vH = aC.w; vHue = aD.x;
  vec3 c = vec3(aC.x, 0.0, aC.y), to = cameraPosition - c; vec3 right = normalize(vec3(to.z, 0.0, -to.x));
  float W = aC.w * 0.55; vP = vec2(position.x * W, (position.y + 0.5) * aC.w * 1.05);
  vec3 w = c + right * vP.x + vec3(0.0, vP.y, 0.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0) * vA; }`,sM=`varying vec2 vP; varying float vH, vA, vGrow, vHue;
void main(){ if (vA <= 0.0) discard;
  float bw = vH * 0.006 + 0.08, top = vH * vGrow, arm = vH * 0.27 * smoothstep(0.55, 1.0, vGrow);
  float yb = vH * 0.76, x = abs(vP.x), y = vP.y;
  float vert = exp(-x / bw) * step(y, top) * smoothstep(top, top - bw * 6.0, y);
  float hor = exp(-abs(y - yb) / bw) * smoothstep(arm, arm - bw * 4.0, x) * step(yb, top);
  float g = max(vert, hor), core = pow(g, 6.0);
  float glow = exp(-x / (bw * 6.0)) * step(y, top) * 0.1 + exp(-length(vec2(x, y) / (bw * vec2(9.0, 4.0)))) * 0.6;
  vec3 col = mix(vec3(1.6, 0.35, 0.18), vec3(1.7, 0.95, 0.5), vHue);
  vec3 c = col * (g * 0.9 + glow) + vec3(1.6, 1.4, 1.3) * core;
  gl_FragColor = vec4(c * vA, 1.0); }`,rM=`attribute vec4 aR; uniform float uT, uPx, uMode; varying vec3 vCol; varying float vA;
void main(){ vec3 b = vec3((aR.x - 0.5) * 90.0, aR.y * 36.0, 18.0 - aR.z * 150.0);
  float rise = mix(0.8, 2.4, uMode) * (0.5 + aR.w);
  b.y = mod(b.y + uT * rise, 36.0); b.x += sin(uT * 0.7 + aR.w * 30.0) * 1.5; b.z += cos(uT * 0.5 + aR.x * 20.0) * 1.0;
  vec4 mv = viewMatrix * vec4(b, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.08 + 0.1 * aR.w) / max(-mv.z, 0.5);
  vA = (0.5 + 0.5 * sin(uT * (3.0 + aR.w * 7.0) + aR.x * 50.0)) * smoothstep(0.0, 3.0, b.y) * smoothstep(36.0, 30.0, b.y);
  vCol = mix(vec3(1.6, 0.2, 0.08), vec3(2.0, 0.8, 0.25), uMode); }`,oM="varying vec3 vCol; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = exp(-dot(d, d) * 16.0) * vA; if (a < 0.003) discard; gl_FragColor = vec4(vCol * a, 1.0); }",aM=`attribute vec4 aS; uniform float uT; varying vec2 vUv; varying float vS, vY;
void main(){ vUv = uv; vS = aS.w; vec3 c = vec3(aS.x + sin(uT * 0.2 + aS.w * 9.0) * 3.0, aS.y + mod(uT * 1.5 + aS.w * 20.0, 12.0), aS.z);
  float s = 18.0 + aS.w * 26.0; vec4 mv = viewMatrix * vec4(c, 1.0); mv.xy += position.xy * s; vY = c.y;
  gl_Position = projectionMatrix * mv; }`,lM=`uniform float uT, uMode; varying vec2 vUv; varying float vS, vY; ${Ee}
void main(){ vec2 q = vUv - 0.5; float n = fbm(vUv * 3.0 + vS * 11.0 + vec2(0.0, -uT * 0.08));
  float a = smoothstep(0.5, 0.1, length(q)) * smoothstep(0.35, 0.7, n) * 0.75 * uMode;
  if (a < 0.01) discard;
  vec3 c = mix(vec3(0.05, 0.03, 0.03), vec3(0.5, 0.16, 0.05), smoothstep(0.1, -0.4, q.y) * 0.8) * (0.7 + 0.6 * n);
  gl_FragColor = vec4(c, a); }`,cM=`uniform float uT, uA, uPh; varying vec2 vUv; ${Ee}
float hexd(vec2 p){ p = abs(p); return max(p.x * 0.866 + p.y * 0.5, p.y); }
void main(){ vec2 q = (vUv - 0.5) * 2.0; float r = length(q);
  vec2 g = q * 6.0; vec2 a = mod(g, vec2(1.732, 1.0)) - vec2(0.866, 0.5), b = mod(g - vec2(0.866, 0.5), vec2(1.732, 1.0)) - vec2(0.866, 0.5);
  vec2 h = dot(a, a) < dot(b, b) ? a : b; float e = smoothstep(0.47, 0.5, hexd(h));
  float ring = exp(-abs(r - uPh * 1.1) * 14.0) * (1.0 - uPh);
  float fade = smoothstep(1.0, 0.55, r);
  vec3 c = vec3(1.8, 0.75, 0.25) * (e * (0.25 + 1.5 * ring) + ring * 0.6) * fade + vec3(2.0, 1.2, 0.6) * exp(-r * 6.0) * 0.4;
  gl_FragColor = vec4(c * uA, 1.0); }`,L0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",hM=`uniform float uA, uT; varying vec2 vUv;
void main(){ vec2 q = (vUv - 0.5) * vec2(2.0, 2.0 / 0.28); float r = length(q);
  float ring = exp(-abs(r - 0.8) * 26.0) + exp(-abs(r - 0.8) * 5.0) * 0.25;
  gl_FragColor = vec4(vec3(2.2, 1.3, 1.1) * ring * uA * (0.9 + 0.1 * sin(uT * 7.0)), 1.0); }`,uM=`uniform float uA; varying vec2 vUv;
void main(){ float x = abs(vUv.x - 0.5) * 2.0; float g = exp(-x * 9.0) * 0.5 + exp(-x * 40.0) * 1.4;
  gl_FragColor = vec4(vec3(1.6, 0.22, 0.12) * g * uA * smoothstep(0.0, 0.05, vUv.y), 1.0); }`,fM=[[34.1,1.6,1.4,-14,0,15,-73,58,.03],[36.3,1,1.9,-22,0,18,-73,54,0],[38.45,.4,2.6,-30,0,21,-73,50,-.02],[98.1,-1,3.2,22,0,7,-73,60,.04],[99.4,1.2,4.6,-12,-1,9,-73,54,-.05],[100.95,3.4,7.5,-44,-2.5,11,-73,50,-.1],[101,44,78,14,0,10,-73,50,.06],[103.8,34,64,-6,0,14,-73,46,.1]],hc=class extends ht{constructor(e){super(e,{fov:50,near:.3,far:2e3});let t=this.scene,n=ft(303),i=e.img;this.U={uMode:{value:0},uT:{value:0},uWave:{value:new S},uEva:{value:new se(...U0)}};let r=new z(new nn(900,48,24),new ne({uniforms:this.U,vertexShader:um,fragmentShader:QE,side:mt,depthWrite:!1}));r.renderOrder=-10,this.sky=r,t.add(r);let a=new z(new pe(1400,1400).rotateX(-Math.PI/2),new ne({uniforms:this.U,vertexShader:um,fragmentShader:nM}));t.add(a);let o=[],l=[];for(let M=-150;M<=150;M+=6)for(let D=-300;D<=30;D+=6){let P=M+(n()-.5)*1.5,L=D+(n()-.5)*1.5;if(Math.abs(P)<7.5||Math.abs((L%18+18)%18-9)>7||Math.hypot(P-U0[0],L-U0[1])<13)continue;let B=n()<.35?2:1;for(let F=0;F<B;F++){let J=2.2+n()*2.6,G=2.2+n()*2.6,ce=B>1?(F-.5)*2.6:0,re=Math.exp(-Math.abs(P)/40),he=V(-60,-200,L),ze=(3+Math.pow(n(),2.2)*26)*(.8+.8*re)*(1+he*.8)+(Math.abs(P)<20&&n()<.25?12:0);o.push(P+ce,L,J,G),l.push(ze,n(),n()<.3?.35+n()*.4:1,0)}}let c=o.length/4,h=new sn,u=new ot(1,1,1).translate(0,.5,0);h.index=u.index,h.setAttribute("position",u.getAttribute("position")),h.setAttribute("normal",u.getAttribute("normal")),h.setAttribute("aB",new ut(new Float32Array(o),4)),h.setAttribute("aH",new ut(new Float32Array(l),4)),h.instanceCount=c;let f=new z(h,new ne({uniforms:this.U,vertexShader:eM,fragmentShader:tM}));f.frustumCulled=!1,t.add(f),this.nBld=c;let d=[],v=(M,D,P,L,B=0)=>d.push([M,D,P,L,B,n()]);[[-24,-42,34.17,62],[30,-56,vn(61),74],[-44,-98,vn(62),95],[16,-26,vn(63),44],[-12,-60,vn(64),58],[0,-130,36.5,170],[42,-110,vn(66),90],[-30,-150,vn(67),120],[22,-80,vn(68),66]].forEach(M=>v(...M));for(let M=0;M<16;M++)v((n()-.5)*420,-170-n()*160,34.3+n()*1.8,120+n()*110);[[26,-86,vn(Ci(98.38)),48,1],[-20,-30,vn(Ci(98.92)),36,1],[34,-58,vn(Ci(99.45)),55,1],[14,-110,99.99,90,1],[-34,-80,vn(Ci(100.52)),52,1],[18,-12,vn(Ci(100.52))+.1,30,1]].forEach(M=>v(...M)),v(.5,-73,vn(Ci(102.67)),72,1),v(-40,-120,vn(Ci(103.2)),80,1),v(46,-40,vn(Ci(103.2))+.12,60,1);let x=new sn,p=new pe(1,1);x.index=p.index,x.setAttribute("position",p.getAttribute("position")),x.setAttribute("aC",new ut(new Float32Array(d.flatMap(M=>[M[0],M[1],M[2],M[3]])),4)),x.setAttribute("aD",new ut(new Float32Array(d.flatMap(M=>[M[4],M[5],0,0])),4)),x.instanceCount=d.length;let m=new z(x,new ne({uniforms:this.U,vertexShader:iM,fragmentShader:sM,transparent:!0,depthWrite:!1,blending:Pe,side:je}));m.frustumCulled=!1,m.renderOrder=5,t.add(m);let _=2200,g=new qe,E=new Float32Array(_*4);for(let M=0;M<_*4;M++)E[M]=n();g.setAttribute("position",new We(new Float32Array(_*3),3)),g.setAttribute("aR",new We(E,4)),this.EU={...this.U,uPx:{value:720}};let b=new bt(g,new ne({uniforms:this.EU,vertexShader:rM,fragmentShader:oM,transparent:!0,depthWrite:!1,blending:Pe}));b.frustumCulled=!1,b.renderOrder=8,t.add(b);let T=46,R=new sn,I=new pe(1,1),U=[];for(let M=0;M<T;M++)U.push((n()-.5)*160,8+n()*14,-20-n()*160,n());R.index=I.index,R.setAttribute("position",I.getAttribute("position")),R.setAttribute("uv",I.getAttribute("uv")),R.setAttribute("aS",new ut(new Float32Array(U),4)),R.instanceCount=T,this.smoke=new z(R,new ne({uniforms:this.U,vertexShader:aM,fragmentShader:lM,transparent:!0,depthWrite:!1})),this.smoke.frustumCulled=!1,this.smoke.renderOrder=4,t.add(this.smoke),this.PU={uA:{value:1},uT:{value:0},uPh:{value:0}},this.pillar=new z(new pe(9,400).translate(0,200,0),new ne({uniforms:this.PU,vertexShader:L0,fragmentShader:uM,transparent:!0,depthWrite:!1,blending:Pe})),this.pillar.position.set(0,0,-95),this.pillar.renderOrder=3,t.add(this.pillar),this.halo=new z(new pe(14,14*.28),new ne({uniforms:this.PU,vertexShader:L0,fragmentShader:hM,transparent:!0,depthWrite:!1,blending:Pe})),this.halo.renderOrder=7,t.add(this.halo),this.HU={uA:{value:0},uT:{value:0},uPh:{value:0}},this.hex=new z(new pe(18,18),new ne({uniforms:this.HU,vertexShader:L0,fragmentShader:cM,transparent:!0,depthWrite:!1,blending:Pe,side:je})),this.hex.position.set(.5,10,-72),this.hex.renderOrder=6,t.add(this.hex);let y=(M,D,P)=>{let L=i[M];if(!L)return null;let B=Si(L,{wind:0,rim:1});B.uniforms.uRim.value.set(...P,1.4),B.depthWrite=!0;let F=new z(Ti(L,D),B);return F.renderOrder=2,t.add(F),F};this.e01=y("cut_e01",34,[1.2,.2,.1]),this.e01f=y("cut_e01",19,[1.4,.6,.2]),this.e13=y("cut_e13",20,[1.4,.3,.12]),this.e01f&&(this.e01f.position.set(-7.5,0,-72),this.e01f.rotation.y=.5,this.e01f.material.uniforms.uTint.value.set(.6,.42,.36)),this.e13&&(this.e13.position.set(8,0,-74),this.e13.rotation.y=-.5,this.e13.material.uniforms.uTint.value.set(.45,.3,.34)),this.e01&&(this.e01.position.set(0,3,-73),this.e01.material.uniforms.uTint.value.set(.3,.1,.11))}resize(e,t){super.resize(e,t),this.EU.uPx.value=t}update(e){let t=e>hm?1:0,n=this.U,i=ae.hitPulse("kick",e,9),r=ae.hitPulse("hit",e,6);n.uMode.value=t,n.uT.value=e,this.PU.uT.value=e,this.HU.uT.value=e,zt(this.camera,fM,e,t?.08*i+.25*r:.05*r),this.sky.position.copy(this.camera.position);let a=vn(Ci(102.67));n.uWave.value.set(t?0:Math.max(0,e-34.5)*16,t?Math.max(0,e-a)*55:0,t?V(a,a+.15,e)*Math.exp(-Math.max(0,e-a)*.9):0);let o=ve.inOut(ct(e,34.1,38.4));this.e01&&(this.e01.visible=!t,this.e01.position.y=-4+o*8,this.e01.material.uniforms.uT.value=e),this.halo.visible=this.pillar.visible=!t,this.e01&&this.halo.position.set(0,this.e01.position.y+35.5,-73),this.halo.quaternion.copy(this.camera.quaternion),this.PU.uA.value=V(34.1,34.8,e)*(.8+.3*i),[this.e01f,this.e13].forEach(c=>{c&&(c.visible=!!t,c.material.uniforms.uT.value=e)}),this.smoke.visible=!!t,this.hex.visible=!!t&&e<101;let l=(e-98.38)/(2*D0)%1;this.HU.uPh.value=l<0?l+1:l,this.HU.uA.value=.6+.6*i}post(e){let t=ae.hitPulse("kick",e,10),n=ae.hitPulse("hit",e,6);if(e<hm)return{bloom:.75,bloomThr:.8,contrast:1.1,sat:1.1,exposure:.88+.25*n,vig:.65,grain:.07,ca:.4+2*n,shake:.4*n,rgb:.25*n,tint:[1.04,.95,.96],dust:.15,dustCol:[1,.4,.3],fadeW:Math.exp(-Math.max(0,e-34.17)*7)*.4};let i=vn(Ci(102.67)),r=e>i?Math.exp(-(e-i)*5):0;return{bloom:.6,bloomThr:.82,contrast:1.16,sat:1.05,exposure:.86+.1*t,vig:.65,grain:.07,ca:.4+.6*t,lift:[-.02,-.02,-.01],shake:.5*t+.8*r,tint:[1,.95,.94],dust:.12,dustCol:[1,.6,.3],fadeW:r*.35}}};function Ci(s){return Math.round((s-1.952)/D0)}var dM=new S(-.5,.42,-.76).normalize(),k0=22,F0=k0*mn,Nn=-130,Ws=2,eo=20,H0=4,pM=30,to=[166.14,170.67],mM=[175.47,181.25],vM=s=>s<173?-56.8+pM*(s-168.72):Nn+4+32*(s-177),fc=`
uniform vec3 uSun; uniform float uT;
vec3 skyCol(vec3 d){ float h = max(d.y, 0.0);
  vec3 c = mix(vec3(0.42, 0.6, 0.86), vec3(0.025, 0.12, 0.5), pow(h, 0.38));
  float s = max(dot(d, uSun), 0.0);
  return c + vec3(1.0, 0.9, 0.7) * pow(s, 10.0) * 0.3 + vec3(1.0, 0.86, 0.6) * pow(s, 160.0) * 1.2; }
vec3 haze(vec3 c, vec3 w){ vec3 v = w - cameraPosition; float f = 1.0 - exp(-length(v) * 0.0017);
  vec3 d = normalize(v); d.y = max(d.y, 0.0) * 0.3; return mix(c, skyCol(normalize(d)) * 0.9, f * 0.85); }`,O0="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",gM=`varying vec3 vW; ${Ee} ${fc}
void main(){ vec3 d = normalize(vW - cameraPosition); vec3 dh = normalize(vec3(d.x, max(d.y, 0.0), d.z)); vec3 c = skyCol(dh);
  float az = atan(d.x, -d.z);
  // towering cumulus on the horizon, lit on the sun side
  float top = 0.06 + 0.3 * pow(fbm(vec2(az * 2.0, 1.3)), 1.4) + 0.04 * fbm(vec2(az * 9.0, 3.0));
  float edge = (fbm(vec2(az * 16.0, d.y * 16.0)) - 0.5) * 0.05;
  float cu = smoothstep(top, top - 0.015, d.y + edge);
  float sh = fbm(vec2(az * 7.0, d.y * 10.0) + 5.0) + d.y / max(top, 0.01) * 0.35 + dot(d, uSun) * 0.3;
  vec3 cuC = mix(vec3(0.5, 0.58, 0.76), vec3(1.15, 1.12, 1.05), smoothstep(0.45, 0.75, sh));
  c = mix(c, cuC, cu);
  // scattered fair-weather clouds overhead, self-shadowed toward the sun
  vec2 q = d.xz / (d.y + 0.1) + vec2(uT * 0.012, 0.0);
  float n = fbm(q * 0.6), n2 = fbm(q * 0.6 - uSun.xz * 0.2);
  float cl = smoothstep(0.5, 0.6, n) * smoothstep(0.04, 0.16, d.y);
  c = mix(c, mix(vec3(0.5, 0.58, 0.74), vec3(1.12, 1.1, 1.05), clamp((n - n2) * 7.0 + 0.55, 0.0, 1.0)), cl);
  // mountains on the land side (+x), low islands at sea (-x)
  float land = smoothstep(-0.25, 0.3, d.x);
  float mh = (0.015 + 0.07 * fbm(vec2(az * 3.0, 7.0)) + 0.015 * fbm(vec2(az * 14.0, 1.0))) * land + 0.012 * smoothstep(0.55, 0.72, fbm(vec2(az * 7.0, 2.0))) * (1.0 - land);
  float mm = step(d.y, mh);
  vec3 mc = mix(vec3(0.3, 0.45, 0.55), vec3(0.2, 0.34, 0.36), smoothstep(0.0, 0.08, mh - d.y) * land);
  c = mix(c, mc, mm * step(-0.02, d.y));
  c += vec3(3.2, 2.9, 2.4) * smoothstep(0.99935, 0.99965, dot(d, uSun));
  gl_FragColor = vec4(c, 1.0); }`,xM=`varying vec3 vW; ${Ee} ${fc}
void main(){ vec3 V = normalize(vW - cameraPosition); vec2 q = vW.xz * 0.3 + uT * vec2(0.25, 0.12);
  float h0 = vnoise(q) + 0.5 * vnoise(q * 2.7 + 3.0), hx = vnoise(q + vec2(0.2, 0.0)) + 0.5 * vnoise((q + vec2(0.2, 0.0)) * 2.7 + 3.0), hz = vnoise(q + vec2(0.0, 0.2)) + 0.5 * vnoise((q + vec2(0.0, 0.2)) * 2.7 + 3.0);
  float fade = exp(-length(vW - cameraPosition) * 0.004);
  vec3 N = normalize(vec3((h0 - hx) * 1.6 * fade, 1.0, (h0 - hz) * 1.6 * fade));
  vec3 R = reflect(V, N); R.y = abs(R.y);
  float fr = 0.03 + 0.97 * pow(1.0 - max(dot(-V, N), 0.0), 5.0);
  vec3 c = mix(vec3(0.015, 0.12, 0.25), skyCol(R), fr);
  float sp = pow(max(dot(R, uSun), 0.0), 350.0), gl = step(0.6, hash12(floor(vW.xz * 3.0) + floor(uT * 9.0)));
  c += vec3(4.0, 3.5, 2.8) * sp * (0.4 + gl);
  gl_FragColor = vec4(haze(c, vW), 1.0); }`,yM=`varying vec3 vW; uniform float uCZ; ${Ee} ${fc}
void main(){ vec2 q = vW.xz; float x = q.x, fd = smoothstep(8.0, 40.0, length(vW - cameraPosition));
  vec3 grass = mix(vec3(0.08, 0.26, 0.04), vec3(0.22, 0.42, 0.06), vnoise(q * 0.12)) * (0.85 + 0.3 * mix(vnoise(q * 1.7), 0.5, fd));
  vec2 pc = floor(q / vec2(16.0, 11.0)), pf = fract(q / vec2(16.0, 11.0));
  float dyke = max(step(pf.x, 0.035), step(pf.y, 0.05)) * (1.0 - fd * 0.7);
  float wave = sin(q.x * 0.22 - uT * 2.4 + sin(q.y * 0.11) * 2.0) * 0.5 + 0.5;
  vec3 paddy = mix(vec3(0.2, 0.46, 0.07), vec3(0.46, 0.66, 0.16), wave * 0.55 + hash12(pc) * 0.3);
  paddy = mix(paddy, vec3(0.32, 0.3, 0.2), dyke * 0.6);
  vec3 c = mix(grass, paddy, step(15.0, x));
  c = mix(c, vec3(0.16, 0.16, 0.18), step(abs(x - 11.5), 2.4));                         // road beside the line
  vec3 gv = mix(vec3(0.17, 0.16, 0.15), vec3(0.36, 0.33, 0.3), mix(hash12(floor(q * 9.0)), 0.5, fd));
  c = mix(c, gv, smoothstep(4.8, 4.3, abs(x)));                                          // ballast
  float cr = step(abs(q.y - uCZ), 3.6);
  c = mix(c, vec3(0.15, 0.15, 0.17), cr);
  c = mix(c, vec3(0.85, 0.82, 0.72), cr * step(abs(abs(q.y - uCZ) - 3.3), 0.1) * step(4.5, abs(x)));
  c = mix(c, vec3(0.85, 0.72, 0.1), cr * step(abs(abs(q.y - uCZ) - 3.3), 0.1) * step(abs(x), 4.5));
  c *= vec3(1.12, 1.06, 0.96);
  gl_FragColor = vec4(haze(c, vW), 1.0); }`,_M=`varying vec3 vW, vN, vC, vO;
void main(){ vec4 p = vec4(position, 1.0); vec3 n = normal; vC = vec3(1.0); vO = position;
#ifdef USE_INSTANCING
  p = instanceMatrix * p; n = mat3(instanceMatrix) * n;
#endif
#ifdef USE_INSTANCING_COLOR
  vC = instanceColor;
#endif
  vec4 w = modelMatrix * p; vW = w.xyz; vN = normalize(mat3(modelMatrix) * n); gl_Position = projectionMatrix * viewMatrix * w; }`,EM=`varying vec3 vW, vN, vC, vO; uniform vec3 uCol; uniform float uLamp; ${Ee} ${fc}
void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); vec3 base = uCol * vC, em = vec3(0.0); float gloss = 0.0;
#if KIND == 1
  if (N.y > 0.5) base = vec3(0.34, 0.35, 0.37);
  else if (abs(N.z) > 0.5) {
    float win = step(2.55, vO.y) * step(vO.y, 3.75) * step(abs(vO.x), 1.2);
    base = mix(base, vec3(0.03, 0.05, 0.07), win); gloss = win;
    em += vec3(3.2, 2.9, 2.3) * smoothstep(0.26, 0.16, length(vec2(abs(vO.x) - 0.95, vO.y - 1.75))) * uLamp * step(0.0, N.z);
  } else {
    float z = fract(vO.z / 4.85 + 0.5), door = step(abs(z - 0.5), 0.12);
    float win = step(2.4, vO.y) * step(vO.y, 3.5) * (1.0 - door);
    base = mix(base, vec3(0.035, 0.05, 0.07), win); gloss = win;
    base = mix(base, vec3(0.25, 0.22, 0.12), door * step(abs(abs(z - 0.5) - 0.12), 0.012));
    base = mix(base, vec3(0.03, 0.05, 0.07), door * step(2.2, vO.y) * step(vO.y, 3.4) * step(abs(z - 0.5), 0.07));
  }
#elif KIND == 2
  base = mix(vec3(0.95, 0.75, 0.05), vec3(0.03, 0.03, 0.03), step(0.5, fract((vW.y + vW.z + vW.x) * 2.2)));
#elif KIND == 3
  gloss = step(0.5, N.y) * 0.8;
#endif
  float lit = smoothstep(0.0, 0.07, dot(N, uSun));
  vec3 c = base * (vec3(0.28, 0.36, 0.54) * (0.6 + 0.4 * N.y) + vec3(1.3, 1.15, 0.95) * lit * 1.0) + em;
  c += vec3(1.0, 0.95, 0.85) * pow(1.0 - max(dot(N, V), 0.0), 5.0) * 0.12;
  if (gloss > 0.0) { vec3 R = reflect(-V, N); c += skyCol(normalize(vec3(R.x, abs(R.y), R.z))) * gloss * (0.2 + 0.5 * pow(1.0 - max(dot(N, V), 0.0), 3.0)); }
  gl_FragColor = vec4(haze(c, vW), 1.0); }`,MM=`uniform float uOn; varying vec2 vUv;
void main(){ float r = length(vUv - 0.5) * 2.0; float core = smoothstep(0.2, 0.16, r), g = exp(-r * 3.2);
  vec3 c = vec3(3.0, 0.25, 0.1) * (core * (0.15 + 1.3 * uOn) + g * 0.9 * uOn);
  if (max(core, g * uOn) < 0.01) discard; gl_FragColor = vec4(c, 1.0); }`,bM="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",wM=[[to[0],-2,1.7,0,.6,2.5,-40,56,.03],[to[1]+.05,-2,1.9,-k0*(to[1]+.05-to[0]),.9,2.9,-k0*(to[1]-to[0])-40,54,-.01]],SM=[[mM[0],8.2,1.2,Nn+7,1.5,2.4,Nn-40,46,0],[176.9,7.9,1.25,Nn+6.2,1,2.3,Nn-40,44,.01],[179.4,7.4,1.4,Nn+5.6,.6,2.8,Nn-40,42,-.01],[181.3,5.5,11.5,Nn+11,-14,21,Nn-40,62,-.08]],uc=class extends ht{constructor(e){super(e,{fov:50,near:.1,far:3e3});let t=this.scene,n=ft(606);this.U={uSun:{value:dM},uT:{value:0},uCZ:{value:Nn}};let i=(P,L=0,B=0)=>new ne({uniforms:{...this.U,uCol:{value:new _e(...P)},uLamp:{value:B}},vertexShader:_M,fragmentShader:EM,defines:{KIND:L}}),r=new z(new nn(1500,48,24),new ne({uniforms:this.U,vertexShader:O0,fragmentShader:gM,side:mt,depthWrite:!1}));r.renderOrder=-10,this.sky=r,t.add(r);let a=new z(new pe(1400,2400).rotateX(-Math.PI/2),new ne({uniforms:this.U,vertexShader:O0,fragmentShader:xM}));a.position.set(-714,-3.5,-300),t.add(a);let o=new z(new pe(1400,2400).rotateX(-Math.PI/2),new ne({uniforms:this.U,vertexShader:O0,fragmentShader:yM}));o.position.set(686,0,-300),t.add(o);let l=new z(new pe(2400,3.5).rotateY(-Math.PI/2),i([.55,.54,.5]));l.position.set(-14,-1.75,-300),t.add(l);let c=[],h=[],u=new Gt,f=(P,L,B,F,J,G,ce,re=0,he=0)=>{u.position.set(P,L,B),u.rotation.set(re,0,he),u.scale.set(F,J,G),u.updateMatrix(),c.push(u.matrix.clone()),h.push(ce)},d=[.5,.5,.47],v=[.07,.07,.08];for(let P of[-Ws,Ws])for(let L=-700;L<260;L+=.62)f(P,.08,L,2.3,.14,.24,[.36,.33,.3]);let x=(P,L,B,F,J,G,ce=4,re=.04)=>{for(let he=0;he<ce;he++){let ze=he/ce,xe=(he+1)/ce,X=L-J*4*ze*(1-ze),j=L-J*4*xe*(1-xe),de=B+(F-B)*ze,Z=B+(F-B)*xe,$=Math.hypot(Z-de,j-X);f(P,(X+j)/2,(de+Z)/2,re,re,$,G,Math.atan2(-(j-X),Z-de))}};for(let P=-700;P<260;P+=F0){for(let L of[-4.9,4.9])f(L,3.8,P,.32,7.6,.32,d);f(0,7.35,P,10.2,.26,.26,d),f(0,6.6,P,10.2,.1,.1,d);for(let L of[-Ws,Ws])f(L,6.95,P,.08,.7,.08,v),x(L,7.1,P,P+F0,.35,v),x(L,5.9,P,P+F0,.03,v,1,.035)}for(let P=-700;P<260;P+=28){f(14.3,5,P,.3,10,.3,[.5,.48,.44]),f(14.3,9.2,P,2.2,.14,.14,[.4,.38,.35]);for(let L of[-.9,0,.9])x(14.3+L,9.3,P,P+28,.7,v,4,.035)}for(let P=0;P<150;P++){let L=20+Math.pow(n(),1.4)*170,B=-650+n()*850,F=5+n()*5,J=6+n()*5,G=3+n()*3.5,ce=(n()-.5)*.3;if(Math.abs(B-Nn)<8)continue;let re=n()<.7?[.82,.78,.7]:[.55,.5,.45],he=n()<.6?[.18,.22,.3]:[.55,.28,.18];f(L,G/2,B,F,G,J,re),u.rotation.set(0,0,0),u.position.set(L,G,B),u.rotation.set(0,ce,Math.PI/4),u.scale.set(F*.72,F*.72,J*1.05),u.updateMatrix(),c.push(u.matrix.clone()),h.push(he)}for(let P of[-Ws,Ws])for(let L of[-.72,.72])f(P+L,.3,-220,.14,.18,960,[.42,.38,.36]);let p=new Wt(new ot(1,1,1),i([1,1,1]),c.length);c.forEach((P,L)=>{p.setMatrixAt(L,P),p.setColorAt(L,new _e(...h[L]))}),p.frustumCulled=!1,t.add(p);let m=[],_=[],g=(P,L,B,F,J,G,ce)=>{u.position.set(P,L,B),u.rotation.set(0,n()*6,0),u.scale.set(F,J,G),u.updateMatrix(),m.push(u.matrix.clone()),_.push(ce)};for(let P=0;P<260;P++){let L=-700+n()*950,B=n()<.5?6.5+n()*3:16+n()*150;if(Math.abs(L-Nn)<9)continue;let F=1+n()*2.4;g(B,F*.6,L,F,F*1.1,F,[.16+n()*.1,.36+n()*.12,.08])}for(let P=0;P<8;P++)g(180+n()*200,-10,-700+P*120+n()*60,60+n()*60,26+n()*30,60+n()*50,[.14,.3,.1]);let E=new Wt(new ml(1,2),i([1,1,1]),m.length);m.forEach((P,L)=>{E.setMatrixAt(L,P),E.setColorAt(L,new _e(..._[L]))}),E.frustumCulled=!1,t.add(E);let b=i([1,1,1],2),T=i([.1,.1,.1]);this.lamps=[];let R=[{uOn:{value:0}},{uOn:{value:0}}],I=R.map(P=>new ne({uniforms:P,vertexShader:bM,fragmentShader:MM,transparent:!0,depthWrite:!1,blending:Pe}));this.LU=R;for(let[P,L,B]of[[5.6,Nn-4,1],[-5.6,Nn+4,-1]]){let F=new z(new ot(.22,4.2,.22),b);F.position.set(P,2.1,L),t.add(F);for(let re of[.6,-.6]){let he=new z(new ot(.08,.2,1.6),b);he.position.set(P,3.75,L),he.rotation.x=re,t.add(he)}let J=new z(new ot(.1,.5,1.3),T);J.position.set(P,2.9,L),t.add(J),[-.38,.38].forEach((re,he)=>{let ze=new z(new pe(1.5,1.5),I[he]);ze.position.set(P+.07*Math.sign(P),2.9,L+re),ze.renderOrder=5,t.add(ze),this.lamps.push(ze)});let G=new z(new ot(.1,.1,7.4),b);G.position.set(P,1.05,L+B*3.7),t.add(G);let ce=new z(new ot(.5,1,.5),i([.8,.78,.7]));ce.position.set(P+.45*Math.sign(P),.5,L),t.add(ce)}this.train=new Qt;let U=new ot(2.9,3.5,eo-.6).translate(0,2.65,0),y=i([.95,.72,.08],1),M=i([.95,.72,.08],1,1),D=i([.08,.08,.09]);for(let P=0;P<H0;P++){let L=new z(U,P?y:M);L.position.z=-eo/2-P*eo,this.train.add(L);let B=new z(new ot(2.4,.7,eo-3),D);B.position.set(0,.6,L.position.z),this.train.add(B);let F=new z(new ot(1.6,.06,.06),D);F.position.set(0,5.9,L.position.z+5),this.train.add(F)}this.train.position.x=Ws,t.add(this.train)}update(e){this.U.uT.value=e;let t=e<173,n=vM(e);this.train.position.z=n;let i=this.camera;zt(i,t?wM:SM,e,0,t?c=>c:ve.inOut);let r=i.position.z,a=V(-2,2,n-r)*V(-H0*eo-2,-H0*eo+2,r-n);this.near=a,i.position.x+=Math.sin(e*83)*.04*a,i.position.y+=Math.sin(e*97+2)*.05*a,this.sky.position.copy(i.position);let o=Math.floor((e-1.952)/mn)%2,l=!0;this.LU[0].uOn.value=l&&o===0?1:0,this.LU[1].uOn.value=l&&o===1?1:0,this.lamps.forEach(c=>c.quaternion.copy(i.quaternion))}post(e){let t=ae.hitPulse("kick",e,10),n=this.near||0,i=V(179.3,181.2,e);return{exposure:.95+.04*t,bloom:.22+i*.6,bloomThr:.88-i*.08,sat:1.18,contrast:1.14,vig:.5,grain:.05,ca:.4+n*1,lift:[-.015,-.01,0],dust:.06,dustCol:[1,.95,.8],shake:n*.25+t*.1,leak:.08+i*.25,fadeW:V(180.85,181.25,e)*.75}}};var na=s=>1.952+2.1429*s,pc=.5357,Qo=(s,e=9)=>ae.hitPulse("kick",s,e),dm=(s,e=5)=>ae.hitPulse("hit",s,e),Xe=(...s)=>s,Fn=(s,e,t={})=>(n,i,r)=>dc[s]?new dc[s](n,i,r,t):new No(n,{img:e,fx:["kick"]},i,r),ms=(s,e)=>(t,n,i)=>{var r;return(r=t.memo)[s]||(r[s]=e(t,n,i))},z0=(s,e,t,n)=>i=>[s,e,ve.inOut(ct(i,t,t+n))*2.2,-1],pm=ms("sdat",Fn("SDAT","m_misato")),ea=ms("earth",Fn("Earth","red_crosses")),mm=ms("sky",Fn("Sky","wunder")),vm=ms("redsea",Fn("RedSea2","red_crosses")),gm=ms("train",Fn("Train","gendo_train")),xm=ms("helix",Fn("Helix2","ube_air")),B0=ms("city",Fn("City","nti")),ym=ms("rails",Fn("Rails","ube_platform")),_m=s=>{let e=ct(s,162.8,166.1),t=De(-2,14,ve.inOut(e)*.3+e*.7);return[t,t-12,0,e>0&&e<1?1:0]},no=55.22,io=63.79,ps=2*pc,TM=[{t:no,img:"m_misato",dir:[1,0],z:[1.2,1.06]},{t:no+ps,img:"m_asuka",dir:[-1,.2],z:[1.25,1.08]},{t:no+2*ps,img:"m_ritsuko",dir:[0,1],z:[1.18,1.05]},{t:no+3*ps,img:"m_mari",dir:[1,-.3],z:[1.22,1.06]},{t:no+4*ps,img:"m_guns",dir:[-1,0],z:[1.1,1.24],pan:.06}],AM=[{t:io,img:"m_toji",dir:[1,0],z:[1.18,1.06]},{t:io+ps,img:"m_kensuke",dir:[-1,0],z:[1.2,1.07]},{t:io+2*ps,img:"m_sakura",dir:[0,-1],z:[1.25,1.1]},{t:io+3*ps,img:"m_swarm",dir:[1,.3],z:[1.08,1.2],pan:.07},{t:io+4*ps,img:"m_u02",dir:[-1,0],z:[1.3,1.05],pan:.08}],RM=[{t:189.7,img:"snap1",dir:[1,0],z:[1.15,1.03]},{t:190.24,img:"snap3",dir:[-1,0],z:[1.15,1.03]},{t:190.77,img:"snap2",dir:[0,1],z:[1.15,1.03]},{t:191.31,img:"snap4",dir:[1,0],z:[1.15,1.03]},{t:191.85,img:"m_toji",dir:[-1,0],z:[1.12,1.04]}],Em=["ube_air","ube_pilots","shinji_blue","shinji_red","genga","gendo_yui","kaworu","rei_white","red_crosses","lance","misato_last","fire_fight","gendo_train","asuka_beach","set_fight","shinji_cam","lilith","fleet","wunder","rei_dusk","snap3","rei_paddy","village","nti","eva01_eye","eva01_cage","yui_lisa","louvre","paris_blue","paris_red"],CM=(()=>{let s=[],e=218.38,t=Em.length;return Em.forEach((n,i)=>{let r=i/(t-1);s.push({t:e,img:n,dir:[-1,0],z:[1.08,1.02],whip:1.4,rev:1,pan:.02}),e+=.075+.2*Math.pow(Math.abs(r-.35)/.65,2.2)}),s})(),PM=[{t:16.95,lines:[{s:"\u6700\u7D42\u8A71",x:.5,y:.47,size:150,sx:.8,sy:1.25,align:"center",track:30},{s:"EPISODE:27",x:.5,y:.62,size:44,font:"mono",weight:500,align:"center",track:18,color:"#d9d4c8"}]},{t:17.49,inv:1,flash:.9,lines:[{s:"\u4E16\u754C\u306E",x:.08,y:.4,size:210,sx:.66,sy:1.3},{s:"\u4E2D\u5FC3\u3067",x:.08,y:.72,size:210,sx:.66,sy:1.3}]},{t:18.02,red:1,lines:[{s:"\u3055\u3088\u306A\u3089\u3001",x:.93,y:.46,size:190,sx:.7,sy:1.25,align:"right"},{s:"\u3059\u3079\u3066\u306E\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3",x:.93,y:.66,size:96,sx:.62,sy:1.25,align:"right",track:4}]},{t:18.56,lines:[{s:"One Last Kiss",x:.5,y:.55,size:150,font:"serif",weight:500,align:"center",track:6},{s:"",x:.3,y:.62,size:10,rule:[0,0,1920*.4,3]}]}],IM=`float gear(vec2 p, float r, float n, float a){ float ang = atan(p.y, p.x) + a; float rr = length(p);
  float tooth = smoothstep(0.2, 0.0, abs(fract(ang * n / 6.2832) - 0.5) - 0.18) * r * 0.12;
  float ring = abs(rr - r - tooth) ; float hub = abs(rr - r * 0.35); float sp = abs(sin(ang * 3.0)) * rr; float ann = step(rr, r * 0.95) * step(r * 0.37, rr);
  return smoothstep(0.004, 0.0, ring - 0.002) + smoothstep(0.003, 0.0, hub - 0.0015) * 0.8 + smoothstep(0.006, 0.0, sp) * 0.5 * ann; }`,UM=`if (uB.x > 0.001) { vec2 q = (suv - 0.5) * vec2(uAspect, 1.0); float s = uB.y;
  float g = gear(q - vec2(-0.55, 0.12), 0.26, 16.0, s) + gear(q - vec2(-0.14, -0.19), 0.17, 10.0, -s * 1.6 + 0.3) + gear(q - vec2(0.62, 0.24), 0.33, 20.0, -s * 0.8)
    + gear(q - vec2(0.27, -0.33), 0.12, 8.0, s * 2.1);
  col += vec3(1.3, 0.45, 0.1) * g * uB.x * (0.35 + 0.4 * uK); }`,LM=`if (uB.x > 0.001) { float n = fbm(uv * vec2(7.0, 11.0) + 2.0) + (uv.y - 0.5) * 0.5; float th = 1.15 - uB.x * 1.1;
  float e = smoothstep(th - 0.06, th, n) * (1.0 - smoothstep(th, th + 0.02, n)); float gone = smoothstep(th, th + 0.02, n) * smoothstep(0.35, 0.9, d);
  col = mix(col, vec3(1.3, 0.55, 0.2) * (0.6 + 0.4 * dot(col, vec3(0.33))), gone * 0.85); col += vec3(2.2, 0.9, 0.3) * e * smoothstep(0.35, 0.8, d); }`,DM=`if (uB.x > 0.001) { vec2 q = suv * vec2(38.0 * uAspect, 2.0); q.y += uT * 3.5 + hash12(vec2(floor(q.x), 1.0)) * 7.0;
  float h = hash12(floor(q)); float st = step(0.7, h) * smoothstep(0.4, 0.0, abs(fract(q.x) - 0.5)) * smoothstep(0.0, 1.0, fract(q.y));
  col = mix(col, col * vec3(0.72, 0.8, 0.9), uB.x * 0.55); col += vec3(0.7, 0.8, 0.9) * st * 0.25 * uB.x; }`,NM=[{t:na(65)-.02,red:1,lines:[{s:"\u30DE\u30A4\u30CA\u30B9\u5B87\u5B99",x:.5,y:.52,size:200,sx:.62,sy:1.35,align:"center",track:12},{s:"ANTI-UNIVERSE",x:.5,y:.66,size:40,font:"mono",weight:500,align:"center",track:26,color:"#ffb3a0"}]},{t:na(65)+pc,inv:1,lines:[{s:"\u60F3\u50CF",x:.25,y:.62,size:300,sx:.66,sy:1.3,align:"center"},{s:"\u30A4\u30DE\u30B8\u30CA\u30EA\u30FC",x:.72,y:.58,size:120,sx:.66,sy:1.3,align:"center"}]}],ke=(s,e,t=.5,n={})=>({type:s,dur:e,align:t,...n}),FM=s=>{let e=ct(s,23.9,25.2),t=2.2;return{x:De(-t*1.1,t*1.25,ve.inOut(e)),y:De(-1.3,.25,Math.sin(e*Math.PI)*.9+e*.1)-.5,s:.8+e*.45,r:De(.35,-.25,e),a:e>0&&e<1?1:0}},ta=[["sdat",0,pm,null],["earth",10.52,ea,ke("zoom",1.1,.5,{c:[.5,.5]})],["title",16.95,s=>new Fo(s,PM),ke("flash",.3)],["pred",19.09,Nt({img:"paris_red",fx:["kick","drift","heat","glint","fireflies"],fxAmt:[.6,.8,0,0],punch:.2,cam:[Xe(0,.02,.03,1.12,0,0,0),Xe(1,-.02,0,1.03,-.012,0,.06)]}),ke("dip",.5)],["louvre",20.71,Nt({img:"louvre",fx:["kick","rays","glint","wave"],light:[.55,.72,.9,0],fxAmt:[1,1,1,0],fxCol:[1.2,.3,.2],wave:z0(.52,.42,21.3,1.6),cam:[Xe(0,0,-.02,1.2,0,0,0),Xe(1,0,.02,1.06,.01,-.006,.08)],e:ve.out}),ke("flash",.3)],["pblue",22.61,Nt({img:"paris_blue",fx:["kick","drift","glint","wave","sweep"],fxAmt:[.7,0,0,0],fxCol:[.8,.9,1.1],wave:z0(.2,.55,22.61,2.2),cam:[Xe(0,-.04,0,1.08,0,0,0),Xe(1,.05,.01,1.18,.02,0,.05)],cuts:[{img:"u08_cut",h:1.1,wind:.2,rimCol:[.9,.9,1.2],fn:FM}]}),ke("light",.5,.3)],["gallery",25.02,Fn("Gallery","yui_lisa"),ke("fade",.5)],["cage",29.3,Nt({img:"eva01_cage",fx:["kick","rays","glint"],light:[.5,.95,.6,0],fxCol:[.5,1.4,.4],head:IM,hook:UM,cam:[Xe(0,0,-.05,1.25,0,0,0),Xe(.5,0,0,1.12,.01,0,.04),Xe(1,0,.03,1.02,.02,0,.1)],tick:(s,e,t)=>t.U.uB.value.set(V(30.9,31.3,s)*(1-V(32.7,33.05,s)),(s-31.18)*.9+.6*Qo(s,6))}),ke("flash",.35)],["eye",33.05,Nt({img:"eva01_eye",fx:["kick","glint","rays"],light:[.5,.62,1.4,0],fxCol:[.6,1.6,.3],punch:1.2,cam:[Xe(0,0,0,1.08,0,0,0),Xe(1,0,.02,1.32,0,0,.12)],e:ve.out,post:s=>({shake:Qo(s,10)*.6,bloom:.9})}),ke("flash",.25)],["city",34.17,B0,ke("glitch",.3)],["village",38.38,Nt({img:"village",fx:["kick","fireflies","drift","sweep"],fxAmt:[.5,.9,0,0],punch:.3,cam:[Xe(0,-.04,-.03,1.15,0,0,0),Xe(1,.03,0,1.05,.015,0,.05)]}),ke("cut",0)],["paddy",40.03,Nt({img:"rei_paddy",fx:["kick","water","fireflies","glint"],water:.36,fxAmt:[.5,.5,0,0],punch:.3,cam:[Xe(0,.03,0,1.1,0,0,0),Xe(1,-.02,.01,1.18,-.012,0,.06)]}),ke("fade",.4)],["clothes",41.34,Fn("Clothes","snap3"),ke("flash",.3)],["dusk",47.75,Nt({img:"rei_dusk",fx:["kick","lcl","fireflies"],fxAmt:[0,.4,1,0],punch:.2,hook:LM,cam:[Xe(0,0,-.02,1.08,0,0,0),Xe(1,0,.02,1.24,0,0,.1)],tick:(s,e,t)=>t.U.uB.value.set(ve.in(ct(s,49.3,52.34)),0,0,0),post:s=>({fadeW:V(51.6,52.34,s)*.8,bloom:.8+V(50,52.3,s)})}),ke("fade",.8,.3)],["sky",52.34,mm,ke("flash",.4)],["mont1",no,s=>new Ns(s,TM),ke("flash",.12)],["sky2",61.07,mm,ke("zoom",.35,.5,{c:[.5,.5]})],["mont2",io,s=>new Ns(s,AM),ke("flash",.12)],["canyon",69.63,Fn("Canyon","m_swarm"),ke("light",.7,.4)],["lilith",74.03,Nt({img:"lilith",fx:["kick","rays","hex","glint","heat"],fxCol:[1.4,.35,.25],lightFn:s=>[.52,.84,1+dm(s)*2,s>78.31?ct(s,78.31,79.8)*1.4:s>76.17?ct(s,76.17,77.6):0],cam:[Xe(0,0,-.03,1.02,0,0,0),Xe(1,0,.05,1.3,0,-.01,.14)],post:s=>({fadeW:V(79.4,80.8,s),shake:dm(s,7)*.6})}),ke("burn",.8)],["cam1",80.84,Nt({img:"shinji_cam",fx:["kick"],punch:.2,cam:[Xe(0,0,0,1.16,0,0,0),Xe(.45,.04,.02,1.3,.005,0,.02),Xe(1,.13,.085,1.8,.01,0,.05)],post:s=>({tone:.3*(1-V(82.3,83.2,s)),scan:.25*(1-V(82.3,83.2,s))})}),ke("glitch",.3)],["studio",84.92,Fn("Studio","set_fight"),ke("burn",1)],["beach",89.26,Nt({img:"asuka_beach",fx:["kick","glint","rays","water"],light:[.72,.6,.6,0],water:.3,fxCol:[1.3,.6,.3],punch:.3,cam:[Xe(0,.05,0,1.12,0,0,0),Xe(1,-.03,0,1.2,-.015,0,.05)],post:{letter:.12}}),ke("burn",.9)],["train",91.35,gm,ke("fade",.5)],["gendo",93.57,Nt({img:"gendo_train",fx:["kick","bands"],punch:.3,cam:[Xe(0,-.04,0,1.12,0,0,0),Xe(1,.03,0,1.2,.015,0,.06)],post:{letter:.12}}),ke("cut",0)],["train2",95.57,gm,ke("cut",0)],["cityF",98.19,B0,ke("shatter",1.3,.35,{c:[.52,.5]})],["fire2",100.9,Nt({img:"at_clash",fx:["kick","embers","heat","hex"],fxAmt:[1,.7,0,0],fxCol:[1.5,.6,.25],punch:1.2,gain:.82,lightFn:s=>[.48,.62,0,.02+(s-100.9)/(2*pc)%1*1.15],cam:[Xe(0,-.01,.1,1.75,0,0,0),Xe(.35,0,.06,1.3,.01,0,.04),Xe(1,.01,.03,1.12,.02,0,.1)],e:ve.out,post:s=>({shake:Qo(s,9)*.9,rgb:Qo(s,12)*.35,bloom:.45,bloomThr:.9,contrast:1.12,sat:1.1,fadeW:Math.exp(-(s-100.9)*6)*.35})}),ke("zoom",.3,.5,{c:[.6,.5]})],["cityF2",102.4,B0,ke("flash",.2)],["misato",103.72,Nt({img:"misato_last",fx:["kick","embers","heat","rays","sweep"],light:[.5,1,.38,0],fxAmt:[.8,.8,0,0],fxCol:[1.4,.6,.25],cam:[Xe(0,0,-.05,1.05,0,0,0),Xe(1,0,.04,1.3,0,0,.1)],post:s=>({fadeW:V(107.4,108.05,s)*.7})}),ke("burn",.9)],["lance",108.05,ea,ke("burn",.9)],["lance2",112.44,Nt({img:"lance",fx:["kick","rays","glint","lightrain"],light:[.9,.9,2,0],fxAmt:[1,0,.8,0],fxCol:[1.4,1,.8],punch:.8,cam:[Xe(0,.28,.2,1.9,0,0,0),Xe(1,.33,.24,2.3,.01,0,.08)],e:ve.out,post:s=>({fadeW:V(113.05,113.3,s)*.6,shake:Qo(s,9)*.5})}),ke("zoom",.4,.5,{c:[.7,.7]})],["globe",113.3,ea,ke("flash",.25)],["redsea",115.19,vm,ke("cut",0)],["reiw",121,Nt({img:"rei_white",fx:["kick","rays","lightrain"],light:[.5,1,.6,0],fxAmt:[1,0,.35,0],fxCol:[1.2,1.1,1],punch:.3,cam:[Xe(0,0,0,1.06,0,0,0),Xe(1,0,.02,1.2,0,0,.1)],post:{bloom:.3,bloomThr:.95,contrast:1.15,sat:1.15,exposure:.95,tone:.6,lift:[-.04,-.035,-.02],vig:.55}}),ke("light",.6)],["redsea2",123.76,vm,ke("flash",.3)],["kaworu",129.61,Nt({img:"kaworu",fx:["kick","rays","fireflies","drift"],light:[.3,.95,.4,0],post:{contrast:1.14,lift:[-.03,-.03,-.02],bloom:.5},fxAmt:[1,.5,0,0],fxCol:[1.2,1.1,.8],punch:.3,cam:[Xe(0,-.04,0,1.12,0,0,0),Xe(1,.03,0,1.2,.015,0,.06)]}),ke("light",.6)],["gyui",na(61),Nt({img:"gendo_yui",fx:["kick","lightrain"],light:[.6,.9,0,0],fxAmt:[.6,0,.3,0],fxCol:[1,.95,.85],punch:.3,cam:[Xe(0,0,0,1.08,0,0,0),Xe(1,0,.02,1.2,0,0,.08)],post:s=>({bloom:.2,bloomThr:.95,exposure:.92,contrast:1.3,sat:1.1,lift:[-.06,-.06,-.05],dust:.05,fadeW:V(135.6,136.17,s)*.55})}),ke("fade",.7)],["earth2",136.17,ea,ke("hex",1,.5,{c:[.5,.5]})],["inter",na(65)-.02,s=>new Fo(s,NM),ke("glitch",.2)],["flip",na(65)+2*pc,Fn("Flipbook","genga"),ke("cut",0)],["shred",149.52,Nt({img:"shinji_red",fx:["kick","lineart","wave","glint","water"],water:.35,punch:.2,fxFn:s=>[.6,0,0,1-ve.inOut(ct(s,149.7,153.6))],wave:z0(.72,.55,152.4,2.6),cam:[Xe(0,-.04,0,1.1,0,0,0),Xe(1,.03,.01,1.2,.012,0,.06)]}),ke("fade",.8)],["sblue",155.05,Nt({img:"shinji_blue",fx:["kick","rays","lightrain","glint","water"],light:[.55,.95,.8,0],water:.3,fxAmt:[.6,0,1,0],fxCol:[1,1.1,1.3],punch:.3,cam:[Xe(0,0,.05,1.05,0,0,0),Xe(1,0,-.02,1.16,0,.01,.07)],cuts:[{img:"u08_desc",h:.7,wind:.3,rim:.9,rimCol:[1,.9,1.1],fn:s=>{let e=ve.out(ct(s,155.05,159.6));return{x:.2,y:De(1.5,.12,e),s:1+e*.15,a:V(155.05,155.8,s)}}}]}),ke("light",.7)],["bench",159.63,Nt({img:"ube_bench",fx:["kick","rays","glint","water","train"],light:[.72,.8,0,0],water:.22,fxCol:[1.3,1.1,.9],punch:.2,head:"",hook:DM,trainFn:_m,lightFn:s=>[.72,.8,V(160.5,162.5,s)*1.2,0],tick:(s,e,t)=>t.U.uB.value.set(1-V(160.2,162.2,s),0,0,0),cam:[Xe(0,.03,0,1.08,0,0,0),Xe(1,-.02,0,1.18,-.012,0,.05)]}),ke("dip",.8)],["pilots",164.05,Nt({img:"ube_pilots",fx:["kick","glint","train","sweep"],trainFn:_m,fxAmt:[.6,0,0,0],punch:.3,cam:[Xe(0,0,0,1.12,0,0,0),Xe(1,0,.01,1.06,.01,0,.04)]}),ke("cut",0)],["rails",166.14,ym,ke("flash",.3)],["pilots2",170.67,Nt({img:"ube_pilots",fx:["kick","glint","sweep"],fxAmt:[.8,0,0,0],punch:.4,cam:[Xe(0,-.08,-.04,1.45,0,0,0),Xe(1,.06,-.02,1.3,.02,0,.06)]}),ke("zoom",.4,.5,{c:[.5,.5]})],["rails2",175.47,ym,ke("zoom",.35,.5,{c:[.5,.5]})],["helix",181.25,xm,ke("flash",.5)],["snaps",189.7,s=>new Ns(s,RM,{post:{tone:.2}}),ke("flash",.15)],["helix2",192.56,xm,ke("flash",.3)],["earth3",207.5,ea,ke("light",1)],["rewind",218.38,s=>new Ns(s,CM,{flash:.35,post:{scan:.3,glitch:.12,tone:.2,bloom:.45,bloomThr:.85,contrast:1.1}}),ke("glitch",.3)],["sdat2",222.6,pm,ke("glitch",.4)],["sketch",226.2,Fn("Sketch2","p_town"),ke("pencil",2.2,.35)]],Mm=[{t0:1.2,t1:10.2,kind:"code",text:"S-DAT",track:"26 \u25B8 27",base:1.2},{t0:29.5,t1:33,kind:"sync",label:"EVA-01  SYNCHRO RATIO",from:0,to:400,pow:2.4,max:400,warn:100},{t0:33.08,t1:34.1,kind:"alert",text:"\u8D77\u52D5",sub:"EVA-01  ACTIVATION",color:"#ff8a1e",rate:2},{t0:61.2,t1:63.7,kind:"magi",result:[1,1,1],style:{top:"9%",bottom:"auto"}},{t0:80.9,t1:84.8,kind:"frame",text:"\u25CF REC",color:"#f4efe6"},{t0:108.2,t1:111.3,kind:"count",from:16},{t0:108.2,t1:111.3,kind:"alert",text:"\u30AC\u30A4\u30A6\u30B9\u306E\u69CD",sub:"LANCE OF GAIUS",color:"#ffd6a0",rate:1,style:{top:"22%"}},{t0:218.4,t1:222.5,kind:"code",text:"\u25C0\u25C0 REW",track:"27",base:226,rev:12},{t0:222.6,t1:226,kind:"code",text:"S-DAT",track:"27  END",base:222.6}],bm=[{t0:15,t1:16.95,o:[.5,.5],head:"\u4EBA\u985E\u88DC\u5B8C",sub:"HUMAN INSTRUMENTALITY",band:"\u4EBA\u985E\u88DC\u5B8C\u8A08\u753B",tag:"\u8B66\u5831",level:5,ticker:"HUMAN INSTRUMENTALITY PROJECT  //  ANTI-AT FIELD EXPANDING  //  ALL LIFE-FORMS RETURNING TO LCL  //  ",code:["ANTI-AT FIELD","LCL CONV.","SEELE 01","GAUGE +","LILITH"],code2:"CODE : 000",line2:"SEELE  PROTOCOL",strobe:.8},{t0:36.45,t1:38.38,out:.9,o:[.5,.42],head:"\u899A\u9192",sub:"EVA-01  AWAKENING",band:"\u521D\u53F7\u6A5F\u899A\u9192",tag:"\u7DCA\u6025",level:4,ticker:"EVA-01 SYNCHRO RATIO 400%  //  PATTERN BLUE  //  NEAR THIRD IMPACT WARNING  //  ",code:["SYNC 400%","PLUG DEPTH","S2 ENGINE","BERSERK","PATTERN BLUE"],code2:"SYNC : 400%",line2:"EVA-01  UNCONTROLLED",strobe:.8},{t0:52.34,t1:55,out:.35,lite:1,hue:"orange",head:"\u767A\u9032",sub:"AAA WUNDER  LAUNCH",tag:"\u767A\u9032",level:1,ticker:"AAA WUNDER  //  MAIN ENGINE IGNITION  //  ALL HANDS TO BATTLE STATIONS  //  "},{t0:111.3,t1:112.95,out:.35,o:[.62,.62],head:"\u7DCA\u6025\u4E8B\u614B",sub:"THIRD IMPACT",band:"\u7B2C\u4E09\u885D\u6483",tag:"\u8B66\u5831",level:5,ticker:"ANTI-AT FIELD CRITICAL  //  LANCE OF GAIUS IN CONTACT  //  ALL LIFE RETURNING TO LCL  //  ",code:["IMPACT","ANTI-AT","LCL 99%","GAIUS","W-CROSS"],code2:"CODE : 999",line2:"AAA WUNDER  BRIDGE",strobe:.5}];function HM(s,e,t=256,n=192){let i=document.createElement("canvas");i.width=t*4,i.height=n*3;let r=i.getContext("2d");return e.forEach((a,o)=>{let l=s[a];if(!l)return;let c=o%4*t,h=Math.floor(o/4)*n,u=Math.max(t/l.w,n/l.h),f=l.w*u,d=l.h*u;r.save(),r.beginPath(),r.rect(c,h,t,n),r.clip(),r.drawImage(l.img,c+(t-f)/2,h+(n-d)/2,f,d),r.restore()}),i}async function wm(s,e,t=null){let n=await Zd();s.img=n,s.memo={},s.shared={glow:zl(128),atlas:HM};let i=[];for(let r=0;r<ta.length;r++){let[a,o,l,c]=ta[r],h=r+1<ta.length?ta[r+1][1]:252.03,f=t===null||h>t-3&&o<t+3?l(s,o,h):new ht(s);i.push({id:a,start:o,scene:f,tr:c||{type:"cut"}}),e((r+1)/ta.length),await new Promise(d=>setTimeout(d,0))}return i}var OM='"Arial Black", "Helvetica Neue", Impact, Arial, "DejaVu Sans", sans-serif',kM={red:{a:"#e8261c",b:"#ff8a1e",dk:"#140203",hi:"#fff1e6",s:"#b8140c"},orange:{a:"#ff7a12",b:"#ffc21a",dk:"#120601",hi:"#fff4e0",s:"#d05a08"}},zM=`uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`,vc=(s,e)=>{let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},mc=s=>Math.floor(vc(s,3.3)*65535).toString(16).toUpperCase().padStart(4,"0"),BM=[{y:.075,h:56,k:"ticker",dir:1,sp:240,at:.16},{y:.205,h:30,k:"hazard",dir:-1,sp:110,at:.26},{y:.655,h:82,k:"red",dir:-1,sp:-320,at:.34},{y:.75,h:28,k:"hazard",dir:1,sp:-110,at:.42}],VM=[{y:.05,h:50,k:"ticker",dir:1,sp:260,at:0},{y:.145,h:26,k:"hazard",dir:-1,sp:120,at:.08}],gc=class{constructor(e){this.W=e.slice().sort((t,n)=>t.t0-n.t0),this.cv=document.createElement("canvas"),this.g=this.cv.getContext("2d"),this.mat=Gn(zM,{tOv:{value:null},uGain:{value:1.05}},{transparent:!0,blending:To,blendSrc:Ao,blendDst:Cs}),this.on=!1,this.cover=0,this.enabled=!0,this.resize(1280,720)}resize(e,t){let n=Math.min(1600,e);this.cv.width=n,this.cv.height=Math.round(n*t/e),this.aspect=e/t,this.tex&&this.tex.dispose(),this.tex=new Jn(this.cv),Object.assign(this.tex,{colorSpace:jt,generateMipmaps:!1,minFilter:Dt}),this.mat.uniforms.tOv.value=this.tex}win(e){return this.W.find(t=>e>=t.t0&&e<t.t1+(t.out||0))}update(e){let t=this.enabled&&this.win(e);this.on=!!t,this.cover=0,t&&(this.draw(e,t),this.tex.needsUpdate=!0)}render(e,t){this.on&&e.run(this.mat,t,!1)}jp(e,t,n,i,r,a={}){let o=this.g;o.save(),o.translate(t,n),o.scale(a.sx||.82,a.sy||1.22),o.font=`500 ${i}px ${wt.mincho}`,o.textAlign=a.align||"center",o.textBaseline="middle",o.fillStyle=r,o.strokeStyle=r,o.lineWidth=i*.045,o.lineJoin="round",o.strokeText(e,0,0),o.fillText(e,0,0),o.restore()}en(e,t,n,i,r,a={}){let o=this.g;o.save(),o.font=`900 ${i}px ${OM}`,o.textAlign=a.align||"center",o.textBaseline="middle","letterSpacing"in o&&(o.letterSpacing=(a.ls||0)+"px"),o.fillStyle=r,o.translate(t,n),o.scale(a.sx||.9,1),o.fillText(e,0,0,a.max),o.restore()}mono(e,t,n,i,r,a="left"){let o=this.g;o.font=`500 ${i}px ${wt.mono}`,o.textAlign=a,o.textBaseline="middle",o.fillStyle=r,o.fillText(e,t,n)}hazard(e,t,n,i,r,a,o){let l=this.g;l.fillStyle=o,l.fillRect(e,t,n,i),l.save(),l.beginPath(),l.rect(e,t,n,i),l.clip(),l.fillStyle=a;let c=i*2;for(let h=-2;h<n/c+2;h++){let u=e+h*c+r%c;l.beginPath(),l.moveTo(u,t+i),l.lineTo(u+i,t),l.lineTo(u+i*2,t),l.lineTo(u+i,t+i),l.fill()}l.restore()}draw(e,t){let n=this.g,i=1080,r=this.cv.height/i,a=i*this.aspect,o=kM[t.hue||"red"],l=t.t1-t.t0,c=t.out||0,h=le((e-t.t0)/l,0,1),u=!!t.lite,f=Math.floor(ae.beat(e)),d=(g,E,b=.18)=>{let T=le((e-(t.t0+g*l))/b,0,1);return T<=0?0:e<t.t1?T:c<=0?0:T*(1-le((e-(t.t1+E*c))/.12,0,1))};n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.cv.width,this.cv.height),n.setTransform(r,0,0,r,0,0);let v=u?0:.9*ve.inOut(ct(h,.02,.55))*d(0,.35,.01);if(v>0&&(n.fillStyle=`rgba(0,0,0,${v})`,n.fillRect(0,0,a,i)),this.cover=v,!u){let b=60*Math.sqrt(3),T=(t.o?t.o[0]:.5)*a,R=(t.o?t.o[1]:.45)*i,I=Math.ceil(a/90)+2,U=Math.ceil(i/b)+2,y=Math.hypot(Math.max(T,a-T),Math.max(R,i-R)),M=t.fill||.6,D=t.cells||["EMERGENCY","\u7DCA\u6025"];for(let P=-1;P<I;P++)for(let L=-1;L<U;L++){let B=P*90,F=L*b+(P&1?b/2:0),J=vc(P,L),G=vc(L+7,P),ce=vc(P+13,L*3);if(G<.07)continue;let re=Math.hypot(B-T,F-R)/y,he=t.t0+l*(.04+M*(.8*re+.2*J));if(e<he)continue;let ze=le((e-he)/.12,0,1),xe=1;if(e>=t.t1){if(c<=0)continue;let $=t.t1+c*.85*(.8*re+.2*J);if(xe=1-le((e-$)/.07,0,1),xe<=0)continue}let X=60*.9*(.55+.45*ve.out(ze))*(.5+.5*xe),j=F>i*.8;n.beginPath();for(let $=0;$<6;$++){let te=$*Math.PI/3;n.lineTo(B+X*Math.cos(te),F+X*Math.sin(te))}if(n.closePath(),n.globalAlpha=xe*(j?.45:1),e-he<.06){n.fillStyle=o.hi,n.fill(),n.globalAlpha=1;continue}let de=J<.22&&f+P+L&1,Z=ce<.42?0:ce<.74?1:ce<.84?2:3;j&&(Z=3),Z===0&&!de?(n.fillStyle=o.a,n.fill(),this.en(D[0],B,F-4,19,o.dk,{max:X*1.45,sx:.86}),n.fillStyle=o.dk,n.fillRect(B-X*.55,F+12,X*1.1,2),this.mono(mc(P*31+L),B,F+24,11,o.dk,"center")):Z<=1?(n.fillStyle=o.dk,n.fill(),n.strokeStyle=o.a,n.lineWidth=3,n.stroke(),Z===0?this.en(D[0],B,F,19,o.a,{max:X*1.45,sx:.86}):this.jp(D[1],B,F+2,40,o.a)):Z===2?(n.fillStyle=de?o.dk:o.b,n.fill(),this.jp("\u8B66\u544A",B,F+2,38,de?o.b:o.dk)):(n.fillStyle="rgba(6,0,0,0.85)",n.fill(),n.strokeStyle=o.a,n.lineWidth=2,n.stroke(),this.mono(mc(P+L*17),B,F,12,o.a,"center")),n.globalAlpha=1}}if(!u){let g=d(.3,.2);if(g>0){let E=i*.29,b=i*.33*ve.out(g),T=290,R=t.code||["PATTERN BLUE","AT FIELD","SYNC ERR","LCL","MAGI"];[[42,0],[a-42-T,1]].forEach(([I,U])=>{if(n.fillStyle="rgba(8,0,0,0.9)",n.fillRect(I,E,T,b),n.strokeStyle=o.a,n.lineWidth=3,n.strokeRect(I,E,T,b),n.fillStyle=o.a,n.fillRect(I,E,T,34),this.en(U?"TIME TO IMPACT":"MAGI SYSTEM",I+T/2,E+18,20,o.dk,{ls:4}),n.save(),n.beginPath(),n.rect(I,E+36,T,b-38),n.clip(),U){let y=Math.max(0,t.t1-e);this.mono(`${String(Math.floor(y)).padStart(2,"0")}.${String(Math.floor(y%1*100)).padStart(2,"0")}`,I+T/2,E+100,68,o.a,"center");for(let M=0;M<14;M++){let D=20+70*Math.abs(Math.sin(e*(3+M*.7)+M*1.9));n.fillStyle=M%4===0?o.b:o.a,n.fillRect(I+18+M*18.5,E+b-14-D*(b/(i*.33)),12,D*(b/(i*.33)))}}else{let y=Math.floor((e-t.t0)*16);for(let M=0;M<13;M++){let D=y+M;this.mono(`${mc(D)} ${mc(D+91)} ${R[D%R.length]}`,I+14,E+56+M*22,15,M===12?o.hi:o.b)}}n.restore()})}}(u?VM:BM).forEach((g,E)=>{let b=d(g.at*(u?1:.9),.1+E*.12,.28);if(b<=0)return;let T=le((e-(t.t0+g.at*l))/.28,0,1),R=g.dir,I=(1-ve.out(T))*a*R+(e>=t.t1&&c>0?-R*a*ve.in(1-b):0),U=g.y*i-g.h/2,y=(e-t.t0)*g.sp;if(n.save(),n.translate(I,0),g.k==="hazard"){this.hazard(0,U,a,g.h,y,o.b,o.dk);for(let M=y*.5%640-640;M<a;M+=640)n.fillStyle=o.dk,n.fillRect(M+250,U-2,170,g.h+4),this.en("DANGER",M+335,U+g.h/2+1,g.h*.72,o.b,{ls:6})}else if(g.k==="ticker"){n.fillStyle="rgba(10,0,0,0.92)",n.fillRect(0,U,a,g.h),n.fillStyle=o.a,n.fillRect(0,U,a,4),n.fillRect(0,U+g.h-4,a,4);let M=t.ticker||"EMERGENCY  //  ALL PERSONNEL TO LEVEL-1 BATTLE STATIONS  //  PATTERN BLUE CONFIRMED  //  ",D=1500;for(let P=y%D-D;P<a;P+=D)this.en(M,P,U+g.h/2+1,g.h*.5,o.a,{align:"left",ls:5})}else{n.fillStyle=o.a,n.fillRect(0,U,a,g.h),n.fillStyle=o.dk,n.fillRect(0,U+6,a,3),n.fillRect(0,U+g.h-9,a,3);let M=820,D=t.band||"\u7DCA\u6025\u4E8B\u614B\u767A\u751F";for(let P=y%M-M;P<a;P+=M)this.jp(D,P+190,U+g.h/2+2,g.h*.66,o.dk),this.en("EMERGENCY",P+560,U+g.h/2+1,g.h*.5,o.dk,{ls:4})}n.restore()});let x=d(u?.05:.2,.05);if(x>0){let g=u?i*.2:i*.125;if(n.globalAlpha=x,n.fillStyle="rgba(10,0,0,0.9)",n.fillRect(42,g,330,64),n.strokeStyle=o.a,n.lineWidth=2,n.strokeRect(42,g,330,64),n.fillStyle=o.a,n.fillRect(42,g,16,64),this.jp(t.tag||"\u8B66\u5831",118,g+33,40,o.a),this.en(`LEVEL ${t.level||5}`,270,g+24,26,o.b,{ls:3}),this.mono(`T+${(e-t.t0).toFixed(2).padStart(6,"0")}`,205,g+49,15,o.b),!u){let E=a-372;n.fillStyle="rgba(10,0,0,0.9)",n.fillRect(E,g,330,64),n.strokeRect(E,g,330,64),this.en(t.code2||"CODE : 777",E+165,g+24,24,o.a,{ls:6}),this.mono(t.line2||"NERV HQ  CENTRAL DOGMA",E+165,g+49,14,o.b,"center")}n.globalAlpha=1}let p=u?0:t.strobe??1,m=e>=t.t1-p&&e<t.t1,_=d(t.headAt??(u?.12:.42),0,.14);if(_>0&&!m&&t.head){let g=le((e-(t.t0+(t.headAt??(u?.12:.42))*l))/.16,0,1),E=1+.35*(1-ve.out(g)),b=u?620:860,T=u?190:300,R=a/2,I=u?i*.34:i*.44,U=!u&&h>.7&&f&1;n.save(),n.globalAlpha=_,n.translate(R,I),n.scale(E,E),n.fillStyle=U?o.a:"rgba(8,0,0,0.94)",n.fillRect(-b/2,-T/2,b,T),n.strokeStyle=o.a,n.lineWidth=5,n.strokeRect(-b/2,-T/2,b,T),n.lineWidth=2,n.strokeRect(-b/2+12,-T/2+12,b-24,T-24),this.hazard(-b/2,-T/2-30,b,18,(e-t.t0)*80,o.a,o.dk),this.hazard(-b/2,T/2+12,b,18,-(e-t.t0)*80,o.a,o.dk);let y=U?o.dk:o.a;n.shadowColor=U?"transparent":o.a,n.shadowBlur=24,this.jp(t.head,0,-T*.08,u?96:146,y,{sx:.8,sy:1.22}),n.shadowBlur=0,this.en(t.sub||"EMERGENCY",0,T*.3,u?30:42,U?o.dk:o.hi,{ls:u?10:16}),n.restore(),n.globalAlpha=1}if(m){let g=Math.floor((e-(t.t1-p))/p*3),E=g!==1;n.fillStyle=E?o.s:o.dk,n.fillRect(0,0,a,i),this.jp(t.head||"\u7DCA\u6025\u4E8B\u614B",a/2,i*.44,330,E?o.dk:o.a,{sx:.72,sy:1.3}),this.en(t.sub||"EMERGENCY",a/2,i*.72,64,E?o.dk:o.a,{ls:22}),this.cover=1}!u&&e-t.t0<.14&&(n.fillStyle=`rgba(232,38,28,${.45*(1-(e-t.t0)/.14)})`,n.fillRect(0,0,a,i))}};var GM=`uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`,WM=(s,e=0)=>{let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},et={out:s=>1-Math.pow(1-le(s),3),expo:s=>s>=1?1:1-Math.pow(2,-10*le(s)),inOut:s=>(s=le(s),s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2),in:s=>Math.pow(le(s),3)},Le=(s,e,t)=>le((s-e)/t),xc=class{constructor(e){this.I=e.slice().sort((t,n)=>t.t0-n.t0),this.cv=document.createElement("canvas"),this.g=this.cv.getContext("2d"),this.mat=Gn(GM,{tOv:{value:null},uGain:{value:.95}},{transparent:!0,blending:To,blendSrc:Ao,blendDst:Cs}),this.on=!1,this.enabled=!0,this.resize(1280,720)}resize(e,t){let n=Math.min(1600,e);this.cv.width=n,this.cv.height=Math.round(n*t/e),this.aspect=e/t,this.tex&&this.tex.dispose(),this.tex=new Jn(this.cv),Object.assign(this.tex,{colorSpace:jt,generateMipmaps:!1,minFilter:Dt}),this.mat.uniforms.tOv.value=this.tex}update(e){if(this.on=!1,!this.enabled)return;let t=this.I.filter(r=>e>=r.t0&&e<r.t1);if(!t.length)return;let n=this.g,i=this.cv.height/1080;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.cv.width,this.cv.height),n.setTransform(i,0,0,i,0,0),this.VW=1080*this.aspect,this.H=1080,this.t=e;for(let r of t)n.save(),n.shadowColor="rgba(0,0,0,0.45)",n.shadowBlur=r.flat?0:5*i,r.fn(this,e,(e-r.t0)/(r.t1-r.t0),r),n.restore(),n.globalAlpha=1;this.on=!0,this.tex.needsUpdate=!0}render(e,t){this.on&&e.run(this.mat,t,!1)}X(e){return e*this.VW}Y(e){return e*this.H}line(e,t,n,i,r=1,a={}){let o=this.g,l=le(a.from??0),c=le(r);if(c<=l)return;let h=this.X(De(e,n,l)),u=this.Y(De(t,i,l)),f=this.X(De(e,n,c)),d=this.Y(De(t,i,c));o.globalAlpha=a.a??1,o.strokeStyle=a.col??"#fff",o.lineWidth=a.w??1.5,o.setLineDash(a.dash??[]),o.beginPath(),o.moveTo(h,u),o.lineTo(f,d),o.stroke(),o.setLineDash([]),a.dot!==!1&&c<1&&(o.fillStyle=a.dotCol??a.col??"#fff",o.beginPath(),o.arc(f,d,(a.w??1.5)*2.4,0,7),o.fill()),o.globalAlpha=1}poly(e,t=1,n={}){let i=e.map(([f,d])=>[this.X(f),this.Y(d)]),r=[0];for(let f=1;f<i.length;f++)r.push(r[f-1]+Math.hypot(i[f][0]-i[f-1][0],i[f][1]-i[f-1][1]));let a=r[r.length-1],o=le(t)*a,l=le(n.from??0)*a;if(o<=l)return null;let c=this.g;c.globalAlpha=n.a??1,c.strokeStyle=n.col??"#fff",c.lineWidth=n.w??1.5,c.setLineDash(n.dash??[]),c.lineJoin="miter",c.beginPath();let h=!1,u=i[0];for(let f=1;f<i.length;f++){if(r[f]<l)continue;let d=r[f-1]<l?(l-r[f-1])/(r[f]-r[f-1]):0,v=r[f]>o?(o-r[f-1])/(r[f]-r[f-1]):1,x=[De(i[f-1][0],i[f][0],d),De(i[f-1][1],i[f][1],d)],p=[De(i[f-1][0],i[f][0],v),De(i[f-1][1],i[f][1],v)];if(h||(c.moveTo(x[0],x[1]),h=!0),c.lineTo(p[0],p[1]),u=p,r[f]>=o)break}return c.stroke(),c.setLineDash([]),n.dot!==!1&&t<1&&(c.fillStyle=n.col??"#fff",c.beginPath(),c.arc(u[0],u[1],(n.w??1.5)*2.4,0,7),c.fill()),c.globalAlpha=1,[u[0]/this.VW,u[1]/this.H]}ticks(e,t,n,i,r,a=1,o={}){let l=this.g,c=this.X(n)-this.X(e),h=this.Y(i)-this.Y(t),u=Math.hypot(c,h),f=-h/u,d=c/u;l.globalAlpha=o.a??1,l.strokeStyle=o.col??"#fff",l.lineWidth=o.w??1.2,l.beginPath();let v=Math.floor(r*le(a)),x=o.off??0;for(let p=0;p<=v;p++){let m=((p/r+x)%1+1)%1,_=(p%(o.major??5)?1:2.2)*(o.len??7),g=this.X(e)+c*m,E=this.Y(t)+h*m;l.moveTo(g,E),l.lineTo(g+f*_,E+d*_)}l.stroke(),l.globalAlpha=1}ring(e,t,n,i={}){let r=this.g,a=this.X(e),o=this.Y(t),l=n*this.H,c=i.rot??0,h=le(i.prog??1);r.globalAlpha=i.a??1,r.strokeStyle=i.col??"#fff",r.lineWidth=i.w??1.5,r.setLineDash(i.dash??[]);let u=i.seg??[[0,Math.PI*2]];for(let[f,d]of u)r.beginPath(),r.arc(a,o,l,c+f-Math.PI/2,c+f+(d-f)*h-Math.PI/2),r.stroke();if(r.setLineDash([]),i.ticks){let f=i.ticks,d=Math.floor(f*h),v=i.tlen??10;r.lineWidth=i.tw??1.2,r.beginPath();for(let x=0;x<d;x++){let p=c+x/f*Math.PI*2-Math.PI/2,m=x%(i.major??5)?v:v*2.2;r.moveTo(a+Math.cos(p)*l,o+Math.sin(p)*l),r.lineTo(a+Math.cos(p)*(l-m*(i.tin??1)),o+Math.sin(p)*(l-m*(i.tin??1)))}r.stroke()}r.globalAlpha=1}pip(e,t,n,i,r,a,o=1){let l=this.g,c=this.X(e)+Math.cos(i-Math.PI/2)*n*this.H,h=this.Y(t)+Math.sin(i-Math.PI/2)*n*this.H;l.globalAlpha=o,l.fillStyle=a,l.save(),l.translate(c,h),l.rotate(i),l.beginPath(),l.moveTo(0,-r),l.lineTo(r*.7,r*.4),l.lineTo(-r*.7,r*.4),l.closePath(),l.fill(),l.restore(),l.globalAlpha=1}reg(e,t,n,i=1,r={}){let a=n/this.VW,o=n/this.H,l=et.expo(i);this.line(e-a*l,t,e+a*l,t,1,{...r,dot:!1}),this.line(e,t-o*l,e,t+o*l,1,{...r,dot:!1}),r.circle!==!1&&this.ring(e,t,o*.55,{...r,prog:l})}brackets(e,t,n,i,r,a=1,o={}){let l=this.g,c=et.expo(a),h=[this.X(e),this.Y(t)],u=[this.X(n),this.Y(i)],f=r*c;l.globalAlpha=o.a??1,l.strokeStyle=o.col??"#fff",l.lineWidth=o.w??2,l.beginPath();for(let[d,v,x,p]of[[h[0],h[1],1,1],[u[0],h[1],-1,1],[h[0],u[1],1,-1],[u[0],u[1],-1,-1]])l.moveTo(d+x*f,v),l.lineTo(d,v),l.lineTo(d,v+p*f);l.stroke(),l.globalAlpha=1}rect(e,t,n,i,r,a=1){let o=this.g;o.globalAlpha=a,o.fillStyle=r,o.fillRect(this.X(e),this.Y(t),n*this.VW,i*this.H),o.globalAlpha=1}font(e,t="mono",n=400){return`${n} ${e}px ${wt[t]||t}`}text(e,t,n,i,r={}){let a=this.g;a.globalAlpha=r.a??1,a.fillStyle=r.col??"#fff",a.font=this.font(i,r.font??"mono",r.weight??400),a.textBaseline=r.base??"alphabetic",a.textAlign=r.align??"left","letterSpacing"in a&&(a.letterSpacing=`${r.spacing??0}px`),a.fillText(e,this.X(t),this.Y(n)),"letterSpacing"in a&&(a.letterSpacing="0px"),a.globalAlpha=1}reveal(e,t,n,i,r,a={}){let o=this.g,l=[...e],c=this.font(i,a.font??"mono",a.weight??400),h=a.spacing??0;o.font=c,o.textBaseline="alphabetic";let u=l.map(g=>o.measureText(g).width+h),f=u.reduce((g,E)=>g+E,0)-h,d=this.X(t)-(a.align==="center"?f/2:a.align==="right"?f:0),v=this.Y(n),x=a.stagger??.06,p=l.length,m=1+x*(p-1),_=a.out??0;o.save(),o.beginPath(),o.rect(d-4,v-i*1.05,f+8,i*1.35),o.clip(),o.fillStyle=a.col??"#fff",o.globalAlpha=a.a??1;for(let g=0;g<p;g++){let E=et.expo(le(r*m-g*x)),b=et.in(le(_*m-g*x));E>0&&b<1&&o.fillText(l[g],d,v+(1-E)*i*1.2-b*i*1.2),d+=u[g]}return o.restore(),o.globalAlpha=1,f}vreveal(e,t,n,i,r,a={}){let o=this.g,l=[...e],c=l.length,h=a.stagger??.08,u=1+h*(c-1),f=i*(a.lh??1.12);o.font=this.font(i,a.font??"mincho",a.weight??600),o.textAlign="center",o.textBaseline="top",o.fillStyle=a.col??"#fff";let d=this.X(t),v=this.Y(n);o.save(),o.beginPath(),o.rect(d-i,v-4,i*2,f*c+8),o.clip();for(let x=0;x<c;x++){let p=et.expo(le(r*u-x*h)),m=et.in(le((a.out??0)*u-x*h));p<=0||m>=1||(o.globalAlpha=a.a??1,o.fillText(l[x],d,v+x*f-(1-p)*f*.9+m*f))}o.restore(),o.textAlign="left",o.globalAlpha=1}odo(e,t,n,i,r,a={}){let o=this.g;o.font=this.font(r,a.font??"mono",a.weight??500),o.textBaseline="alphabetic",o.fillStyle=a.col??"#fff";let l=o.measureText("0").width*(a.cw??1.02),c=this.X(n),h=this.Y(i);o.save(),o.globalAlpha=a.a??1,o.beginPath(),o.rect(c-2,h-r*.95,l*t+4,r*1.2),o.clip();for(let u=0;u<t;u++){let f=Math.pow(10,t-1-u),d=Math.floor(e/f)%10,v=le((e%f/f-(a.snap??.75))/(1-(a.snap??.75)));for(let x=0;x<2;x++)o.fillText(String((d+x)%10),c,h-v*r*1.1+x*r*1.1);c+=l}return o.restore(),o.globalAlpha=1,l*t}flap(e,t,n,i,r,a={}){let o=a.set??"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",l=[...e],c=a.stagger??.05,h=1+c*(l.length-1),u=l.map((f,d)=>{let v=le(r*h-d*c);return v<=0?" ":v>=1||f===" "?f:o[Math.floor(WM(d,Math.floor(this.t*30))*o.length)]}).join("");this.text(u,t,n,i,a)}panels(e,t,n={}){let i=this.g,r=this.VW,a=this.H,o=t.length,l=n.stagger??.09,c=n.ang??0;i.save(),i.translate(r/2,a/2),i.rotate(c);let h=Math.hypot(r,a)*.5+40,u=.5-(o-1)*l;for(let f=0;f<o;f++){let d=et.inOut(le((e-f*l)/u)),v=et.out(le((e-.5-(o-1-f)*l)/u)),x=De(-h,h,v),p=De(-h,h,d);p<=x||(i.fillStyle=t[f],i.fillRect(x,-h,p-x,2*h),n.edge&&(i.fillStyle=n.edge,i.fillRect(p-3,-h,3,2*h)))}i.restore()}marquee(e,t,n,i,r={}){let a=this.g,o=this.Y(t),l=n*.56;r.bg&&(a.globalAlpha=r.bga??1,a.fillStyle=r.bg,a.fillRect(0,o,this.VW,n)),a.globalAlpha=r.a??1,a.fillStyle=r.col??"#fff",a.font=this.font(l,r.font??"mono",r.weight??500),a.textBaseline="middle";let c=a.measureText(e).width,h=-(this.t*i%c+c)%c;for(i<0&&(h=-c+-this.t*i%c);h<this.VW;h+=c)a.fillText(e,h,o+n/2+1);r.rule&&(a.fillStyle=r.rule,a.fillRect(0,o,this.VW,1.5),a.fillRect(0,o+n-1.5,this.VW,1.5)),a.globalAlpha=1}};var at="#f4efe6",mi="#ff3b24",vs="#ff8a1e",yc="#9cc4ff",ia="#08050c",gs="#ffd21e",qM="#9dff8a",V0=(s,e=8)=>ae.hitPulse("kick",s,e),G0=(s,e)=>ae.count?ae.count("kick",s,e):Math.floor((e-s)/mn),ro=(s,e)=>String(Math.floor(s)).padStart(e,"0"),W0=s=>`${ro(s/60,2)}:${ro(s%60,2)}:${ro(s%1*24,2)}`,Sm=(s,e,t)=>{let n=a=>[1,3,5].map(o=>parseInt(a.slice(o,o+2),16)),i=n(s),r=n(e);return"#"+i.map((a,o)=>Math.round(De(a,r[o],le(t))).toString(16).padStart(2,"0")).join("")},so=(s,e,t,n,i,r=.055,a=.1,o=at,l=mi)=>({t0:s,t1:e,fn:(c,h)=>{let u=h-s,f=et.inOut(Le(h,e-.5,.5)),d=.2,v=et.expo(Le(u,0,.7));c.line(r,a+.028,r+d,a+.028,v,{from:f,w:1.5,col:o,a:.85}),c.rect(r,a-.012,.006,.012*c.aspect,l,(1-f)*V(.1,.25,u)),c.reveal(t,r+.012,a,14,Le(u,.12,.5),{col:o,out:f,spacing:3}),c.reveal(W0(h),r+d,a,12,Le(u,.2,.5),{col:o,out:f,align:"right",a:.7,spacing:1}),c.reveal(n,r,a+.093,58,Le(u,.22,.8),{font:"mincho",weight:600,col:o,out:f,spacing:10,stagger:.1}),c.reveal(i,r,a+.132,13,Le(u,.45,.8),{col:o,out:f,spacing:5,a:.75,stagger:.02});let x=Le(h,s+.4,e-s-.9);c.rect(r,a+.148,d*.35*(1-f),.0022,o,.25),c.rect(r,a+.148,d*.35*x*(1-f),.0022,l,.95)}}),Tm=[so(11,13.4,"01","\u5357\u6975 \u7206\u5FC3\u5730","ANTARCTICA \xB7 GROUND ZERO"),so(21.45,24.3,"02","\u30D1\u30EA\u65E7\u5E02\u8857","PARIS \xB7 RESTORATION PHASE-1",.055,.1,at,mi),so(34.4,36.4,"03","\u7B2C3\u65B0\u6771\u4EAC\u5E02","TOKYO-3 \xB7 NEAR THIRD IMPACT",.055,.1,at,mi),so(38.6,41.3,"04","\u7B2C3\u6751","VILLAGE-3 \xB7 SURVIVORS",.055,.72,at,vs),so(136.4,141,"05","\u88DC\u5B8C \u7D42\u4E86","INSTRUMENTALITY REVERSED \xB7 EARTH RESTORED",.055,.72,at,yc),so(159.8,163,"06","\u5B87\u90E8\u65B0\u5DDD\u99C5","UBE-SHINKAWA STATION \xB7 YAMAGUCHI",.055,.1,at,vs),{t0:19.35,t1:23.5,fn:(s,e)=>{if(e<20.71){let v=De(.18,.47,et.inOut(Le(e,19.35,1.3))),x=1-V(20.5,20.71,e);s.line(0,v,1,v,et.expo(Le(e,19.35,.8)),{w:1.2,col:mi,a:.8*x}),s.ticks(.05,v,.7,v,64,et.expo(Le(e,19.5,1)),{col:mi,a:.5*x,len:5,major:8}),s.reveal("SCAN  48.8566N 2.3522E",.05,v-.012,12,Le(e,19.6,.6),{col:at,a:.8*x,spacing:2,stagger:.02}),s.reveal("RED  "+ro((e-19.35)*777,4),.62,v-.012,12,Le(e,19.8,.5),{col:mi,a:x,spacing:2});return}let t=V(22.5,22.8,e),n=V(23,23.5,e),i=Sm(mi,yc,t),r=.5,a=.47,o=(.17+.012*V0(e))*(1+et.in(Le(e,22.7,.8))*1.8),l=G0(20.71,e)*.18+(e-20.71)*.05,c=et.expo(Le(e,20.71,.9)),h=1-n;s.ring(r,a,o,{prog:c,col:at,w:2,a:.9*h,ticks:120,tlen:8,tw:1.5,major:10,rot:l}),s.ring(r,a,o*1.08,{prog:c,col:i,w:6,a:h,rot:-l*1.4,seg:[[0,.5],[2.1,2.9],[3.9,4.2]]}),s.ring(r,a,o*.86,{prog:c,col:at,w:1,a:.5*h,dash:[3,7],rot:l*.6}),s.pip(r,a,o*1.14,l*2.2,7,i,h);for(let[v,x]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.reg(r+v*o*1.35/s.aspect,a+x*o*1.25,18,Le(e,21,.4),{col:at,w:1,a:.7*h,circle:!1});let u=e<21.3?0:100*et.inOut(Le(e,21.3,1.55)),f=V(21.1,21.4,e)*h;s.reveal("RESTORATION",.5,a+o+.07,12,Le(e,21.1,.4),{col:at,align:"center",spacing:5,a:.8*h});let d=s.odo(u,3,.475,a+o+.125,44,{col:i,a:f});s.text("%",.475+d/s.VW+.004,a+o+.125,22,{col:i,a:f})}},{t0:29.6,t1:34.25,fn:(s,e)=>{let t=et.inOut(Le(e,32.7,.45)),n=V(33.85,34.2,e),i=1-n,r=De(.8,.5,t),a=De(.45,.5,t),o=De(.11,.3,t)*(1+.03*V0(e,10)),l=G0(29.3,e)*(Math.PI/12)+t*.8,c=e<33.05?gs:qM,h=et.expo(Le(e,29.6,1.1));if(s.ring(r,a,o,{prog:h,col:c,w:2,a:i,ticks:48,tlen:10,major:4,rot:l}),s.ring(r,a,o*.8,{prog:et.expo(Le(e,30,1)),col:c,w:5,a:.9*i,rot:-l,seg:[[0,1.1],[1.6,2.7],[3.2,4.3],[4.8,5.9]]}),s.ring(r,a,o*.45,{prog:et.expo(Le(e,30.3,1)),col:at,w:1,a:.6*i,dash:[2,5],rot:l*2}),t<.5){let u=(1-t*2)*V(30.2,30.6,e);s.reveal("S\xB2 ENGINE",r+.02+o/s.aspect*1.1,a-.02,12,Le(e,30.2,.5),{col:at,spacing:3,a:.8*u}),s.text("ROT "+ro(G0(29.3,e)*15%360,3)+"\xB0",r+.02+o/s.aspect*1.1,a+.01,12,{col:c,a:u,spacing:2}),s.line(r+o/s.aspect,a,r+.015+o/s.aspect*1.1,a,1,{col:at,a:.6*u,dot:!1})}if(e>33.05){let u=et.expo(Le(e,33.05,.35)),f=o/s.aspect;for(let d of[-1,1])s.line(r+d*f*1.05,a,r+d*f*1.45,a,u,{col:c,w:1.5,a:i,dot:!1}),s.line(r,a+d*o*1.05,r,a+d*o*1.3,u,{col:c,w:1.5,a:i,dot:!1});s.brackets(r-f*1.5,a-o*1.35,r+f*1.5,a+o*1.35,26,Le(e,33.1,.4),{col:c,a:i}),s.text("TARGET  EVA-01  EYE",r+f*1.5,a-o*1.35-.014,12,{col:c,align:"right",spacing:3,a:i*u})}}},{t0:38.6,t1:41.3,fn:(s,e)=>{let t=1-V(41,41.3,e),n=s.poly([[.04,.2],[.2,.2],[.28,.12],[.46,.12],[.52,.22],[.63,.22]],et.inOut(Le(e,38.6,1.7)),{w:2,col:at,dash:[10,8],a:.85*t});n&&s.text(ro((e-38.6)*412,4)+" m",n[0]+.008,n[1]-.014,11,{col:at,a:.7*t*(1-V(40.2,40.4,e)),spacing:2}),e>40.3&&(s.ring(.63,.22,.022,{prog:et.expo(Le(e,40.3,.4)),col:vs,w:2,a:t}),s.ring(.63,.22,.022+.06*et.out(Le(e,40.3,.9)),{col:vs,w:1,a:t*(1-Le(e,40.3,.9))}),s.reveal("HOME",.65,.2,22,Le(e,40.45,.5),{col:at,spacing:6,a:t}),s.reveal("\u7B2C3\u6751",.65,.235,16,Le(e,40.55,.5),{font:"mincho",col:at,spacing:4,a:.8*t}))}},{t0:89.5,t1:98.05,fn:(s,e)=>{let t=V(89.5,90,e)*(1-V(97.6,98.05,e)),n=.085,i=[.18,.38,.6,.82],r=[89.26,91.35,93.57,95.57],a=["\u6D77","\u8ECA\u7A93","\u7236","\u50B7"],o=["SEA","WINDOW","FATHER","WOUND"];s.line(.1,n,.9,n,et.expo(Le(e,89.5,1.1)),{w:2,col:at,a:t}),s.ticks(.1,n+.004,.9,n+.004,80,et.expo(Le(e,89.7,1.2)),{col:at,a:.35*t,len:4,major:10});let l=0;for(;l<3&&e>r[l+1];)l++;i.forEach((h,u)=>{let f=e>=r[u]+.1,d=et.expo(Le(e,r[u]+.1,.35)),v=u===l;s.ring(h,n,.011,{prog:et.expo(Le(e,89.7+u*.12,.5)),col:at,w:2,a:t}),f&&s.ring(h,n,.006*d,{col:u===2?mi:vs,w:7,a:t}),s.reveal(a[u],h,n-.028,20,Le(e,89.9+u*.12,.5),{font:"mincho",weight:600,col:v?at:"#b9b2a8",align:"center",spacing:2,a:t}),s.reveal(o[u],h,n+.045,10,Le(e,90+u*.12,.5),{col:at,align:"center",spacing:4,a:(v?.9:.45)*t})});let c=De(i[l],i[Math.min(3,l+1)],et.inOut(Le(e,r[l]+.3,(r[l+1]??98.19)-.4-r[l])));s.rect(c-.012/s.aspect*1.2,n-.006,.024/s.aspect*1.2,.012,at,t),s.text(W0(e),.9,n+.045,10,{col:at,align:"right",spacing:2,a:.5*t})}},{t0:98.35,t1:101,fn:(s,e)=>{let t=1-V(100.8,101,e),n=e>99.6,i=n?mi:at,r=.5,a=.42,o=De(.3,.1,et.expo(Le(e,98.4,1.2)))*(1+.1*V0(e)),l=o*s.aspect*.9;s.brackets(r-o,a-l,r+o,a+l,30,Le(e,98.4,.4),{col:i,w:2.5,a:t}),s.reg(r,a,16,Le(e,98.6,.3),{col:i,w:1.2,a:.8*t,circle:!1}),s.text(n?"LOCK":"TRACK",r-o,a-l-.014,14,{col:i,spacing:5,a:t*(n?Math.floor(e*8)%2?1:.4:.9)});let c=Math.max(0,4800*(1-et.out(Le(e,98.4,2.2))));s.text("RANGE",r+o,a+l+.024,11,{col:at,align:"right",spacing:3,a:.7*t}),s.odo(c,4,r+o-.07,a+l+.06,26,{col:i,a:t})}},{t0:100.9,t1:102.36,fn:(s,e,t)=>{let n=et.expo(Le(e,100.9,.25)),i=et.in(Le(e,102.1,.26)),r=34*n*(1-i);s.marquee("\u25B2 WARNING \u25B2  ANTI-AT FIELD  \u25B2  EVA-13  \u25B2  PATTERN BLUE  ",.035,r,260,{bg:vs,col:ia,weight:700}),s.marquee("\u7DCA\u6025\u4E8B\u614B  //  \u7B2C3\u65B0\u6771\u4EAC\u5E02  //  EMERGENCY  //  ",.965-r/1080,r,-200,{bg:ia,col:vs,font:"mincho",weight:600,bga:.85})}},{t0:130,t1:135.4,fn:(s,e)=>{let t=V(130,130.6,e)*(1-V(134.8,135.4,e)),n=.955;s.line(n,.12,n,.88,et.expo(Le(e,130,1.4)),{col:at,w:1,a:.6*t}),s.ticks(n,.12,n,.88,76,et.expo(Le(e,130.2,1.6)),{col:at,a:.4*t,len:5,major:19,off:e*.01%1});let i=s.g;i.save(),i.translate(s.X(n-.012),s.Y(.5)),i.rotate(-Math.PI/2),i.translate(-s.X(n-.012),-s.Y(.5)),s.reveal("FIFTH CHILD  \xB7  NAGISA KAWORU",n-.012,.5,12,Le(e,130.6,1.2),{col:at,align:"center",spacing:5,a:.8*t,stagger:.02}),i.restore();let r=De(.2,.8,Le(e,130,5.4));s.pip(n-.008,r,0,-Math.PI/2,6,vs,t)}},{t0:151.6,t1:157.2,fn:(s,e)=>{let t=et.inOut(Le(e,154.4,1)),n=V(153,154.6,e),i=1-V(156.6,157.2,e),r=Sm(mi,yc,n),a=[];for(let c=0;c<=96;c++){let h=c/96;a.push([h,De(.5,.44,t)+Math.sin(h*22-e*3.5)*.028*(1-t)*Math.sin(h*Math.PI)])}s.poly(a,et.inOut(Le(e,151.6,1.4)),{w:1.8,col:r,a:i}),s.ticks(0,De(.5,.44,t)+.01,1,De(.5,.44,t)+.01,100,t,{col:r,a:.4*i,len:4,major:10}),s.reveal("REWRITE",.055,.1,12,Le(e,151.8,.5),{col:at,spacing:5,a:.8*i});let o=100*et.inOut(Le(e,152.2,3)),l=s.odo(o,3,.055,.155,40,{col:r,a:i});s.text("%",.055+l/s.VW+.004,.155,20,{col:r,a:i}),s.text(n>.5?"BLUE  //  RESTORED":"RED  //  L-FIELD",.055,.185,11,{col:r,spacing:3,a:.8*i})}},{flat:1,t0:163.8,t1:164.3,fn:(s,e,t)=>s.panels(t,[at,mi,ia],{ang:-.12,stagger:.07})},{flat:1,t0:165.88,t1:166.4,fn:(s,e,t)=>s.panels(t,[gs,"#2a6cff",at],{ang:.1,stagger:.07})},{flat:1,t0:170.42,t1:170.92,fn:(s,e,t)=>s.panels(t,[yc,at],{ang:-.1,stagger:.08})},{t0:175.7,t1:181.15,fn:(s,e)=>{let t=1-V(180.75,181.15,e),n=.055,i=.09;s.rect(n-.01,i-.035,.3,.17,ia,.62*t),s.line(n-.01,i-.035,n+.29,i-.035,et.expo(Le(e,175.7,.6)),{col:gs,w:3,a:t}),s.reveal("\u5B87\u90E8\u7DDA",n,i+.012,30,Le(e,175.8,.5),{font:"mincho",weight:600,col:at,spacing:3,a:t}),s.reveal("UBE LINE",n+.1,i+.01,15,Le(e,175.9,.5),{col:gs,spacing:4,a:t}),s.flap("17:48  SHIN-YAMAGUCHI",n,i+.06,19,Le(e,176,1),{col:at,a:t,spacing:1}),s.flap("17:52  UBE-SHINKAWA",n,i+.1,19,Le(e,176.3,1),{col:gs,a:t,spacing:1}),s.text(W0(e),n+.28,i+.01,13,{col:at,align:"right",a:.6*t,spacing:2});let r=et.inOut(Le(e,179.4,1.9)),a=De(1.4,11.5,r),o=V(179.3,179.7,e)*t,l=.95;if(o>0){s.rect(l-.085,.2,.1,.6,ia,.6*o),s.line(l,.22,l,.78,et.expo(Le(e,179.3,.5)),{col:at,w:2,a:.9*o}),s.ticks(l,.22,l,.78,40,1,{col:at,a:.8*o,w:2,len:-9,major:5,off:a*.08%1}),s.pip(l-.012,.5,0,Math.PI/2,6,gs,o),s.text("ALT",l-.02,.47,13,{col:at,align:"right",spacing:3,a:.7*o});let c=s.odo(a,2,l-.07,.515,30,{col:gs,a:o,snap:.5});s.text("m",l-.07+c/s.VW+.003,.51,12,{col:gs,a:o})}}}];var Xn=new URLSearchParams(location.search),Am=Xn.get("pp")?Object.fromEntries(Xn.get("pp").split(",").map(s=>{let[e,t]=s.split(":");return[e,parseFloat(t)]})):null,$s=Xn.has("freeze"),Xs=parseFloat(Xn.get("t")||"0")||0,XM=Xn.has("clean"),ra=document.getElementById("app"),wn=document.getElementById("song"),an=new Ml(wn),vi=parseFloat(Xn.get("q")||"0")||($s?.6:1),Rm=1920*1080,Sn=new ol({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:$s});Sn.autoClear=!1;Sn.outputColorSpace=bi;Sn.toneMapping=_i;Sn.domElement.id="gl";ra.appendChild(Sn.domElement);var Pi={renderer:Sn,w:1280,h:720,aspect:16/9,res:new se(1280,720),quality:vi},qs=new Sl(Sn),YM=new Tl,$M=new Cl,xs=new gc(bm);Xn.has("noem")&&(xs.enabled=!1);var oa=new xc(Tm);(Xn.has("noteg")||Xn.has("nokin"))&&(oa.enabled=!1);Xn.has("dbg")&&(window.__kin=oa);var Ys=null,wc=null,X0=null,Ec=[],Ks=null,Sc=null,Tc=null,Mc=!1,Cm=0;function Y0(){let s=Math.min(devicePixelRatio||1,2),e=innerWidth,t=innerHeight,n=s*vi;e*t*n*n>Rm*vi&&(n=Math.sqrt(Rm*vi/(e*t)));let i=Math.max(320,Math.round(e*n)),r=Math.max(180,Math.round(t*n));Sn.setPixelRatio(1),Sn.setSize(i,r,!1),Sn.domElement.style.width=e+"px",Sn.domElement.style.height=t+"px",Object.assign(Pi,{w:i,h:r,aspect:i/r}),Pi.res.set(i,r),qs.resize(i,r),xs.resize(i,r),oa.resize(i,r),[Ys,wc].forEach(a=>a&&a.dispose()),Ys=ls(i,r),wc=ls(i,r),Ec.forEach(a=>a.resize(i,r)),Ks&&Ks.resize()}function Im(s,e){let t=X0.at(s),n=t.a.scene;n.update(s,e);let i,r=e0(n.post(s));if(t.b){let o=t.b.scene;o.update(s,e),n.render(Sn,Ys),o.render(Sn,wc);let l=t.tr;qs.fs.run(YM.set(Ys,wc,t.p,l.type,Pi.aspect,s,l.c,l.amt??1),qs.M),i=qs.M,r=Od(r,e0(o.post(s)),t.p,l.type)}else n.render(Sn,Ys),i=Ys;Am&&Object.assign(r,Am),oa.update(s),oa.render(qs.fs,i),xs.update(s),xs.render(qs.fs,i),xs.cover&&(r.bloom*=1-.65*xs.cover,r.leak*=1-xs.cover,r.dust*=1-xs.cover),$M.render(Sn,i,s,r.dust,Pi.w,Pi.h,r.dustCol),qs.composite(i,r,s,Pi.w,Pi.h);let a=(1-r.fadeB)*(1-r.fadeW*.85);Ks&&Ks.update(s,a),Tc&&Tc.update(s,a*(1-r.invert*.5)),Sc&&Sc.update(s,!ni.bar.classList.contains("idle"))}var q0=0,_c=0,Pm=0;function KM(s,e){if($s||Xn.has("q")||(q0+=s,_c++,e-Pm<2500||_c<45))return;let t=q0/_c;q0=0,_c=0,Pm=e;let n=vi;t>1/45?vi=Math.max(.5,vi*.85):t<1/58&&vi<1&&(vi=Math.min(1,vi*1.08)),Math.abs(n-vi)>.01&&Y0()}function bc(){let s=an.tick(),e=Math.min(an.t,Co);if(Im(e,s),Cm++,!Mc&&(wn.ended||e>=Co-.05)&&(Mc=!0),ni.update(e,an.playing,Mc),KM(s,performance.now()),$s&&Cm>3){window.__olk.ready=!0;return}requestAnimationFrame(bc)}var sa=s=>{s=Math.max(0,Math.min(Co-.1,s)),Mc=!1,an.fallback||(wn.currentTime=s),an.t=s},ni=new Ul(ra,{toggle:()=>{if(an.fallback){an.running=!an.running;return}wn.paused||wn.ended?(wn.ended&&sa(0),wn.play().catch(()=>{})):wn.pause()},seek:sa,seekBy:s=>sa(an.t+s),lyrics:()=>Ks&&Ks.toggle(),restart:()=>{sa(0),an.fallback?an.running=!0:wn.play().catch(()=>{})}},Co);ni.clean=XM;window.__olk={ready:!1,seek:sa,clock:an};async function ZM(){let s=['500 40px "OLK Mincho"','400 40px "OLK Mincho"','italic 300 40px "OLK Serif"','italic 500 40px "OLK Serif"','400 40px "OLK Serif"','40px "OLK Script"','40px "OLK SC"','40px "OLK Mono"'];try{await Promise.race([Promise.all(s.map(e=>document.fonts.load(e,"A\u3042\u611B"))),new Promise(e=>setTimeout(e,4e3))])}catch{}}async function JM(){if($s){an.freeze(Xs),ni.ready(!0),bc();return}if(!await new Promise(e=>{if(wn.readyState>=3)return e(!0);wn.addEventListener("canplay",()=>e(!0),{once:!0}),wn.addEventListener("error",()=>e(!1),{once:!0}),setTimeout(()=>e(wn.readyState>=2),8e3)})){an.fallback=!0,an.t=Xs,an.running=!0,ni.ready(),bc();return}Xs&&(wn.currentTime=Xs),ni.ready(),bc();try{await wn.play()}catch{ni.showGate(()=>wn.play().catch(()=>{an.fallback=!0,an.running=!0}))}}(async function(){try{ni.loading(.02),await ZM(),Y0();let t=await wm(Pi,i=>ni.loading(.05+i*.85),$s?Xs:null);X0=new Pl(t),Ec=[...new Set(t.map(i=>i.scene))],Ec.forEach(i=>i.resize(Pi.w,Pi.h)),Ks=new Il(ra),Tc=new Nl(ra,Mm),Sc=new Ll(ra,ni.bar),Xn.has("cc")&&Sc.set(!0),Xn.has("nohud")&&Tc.toggle(!1);let n=$s?X0.around(Xs,2).map(i=>i.scene):Ec;for(let i=0;i<n.length;i++){let r=n[i],a=t.find(o=>o.scene===r);r.update(Math.max(0,a.start+.05),1/60),r.render(Sn,Ys),ni.loading(.9+.1*(i+1)/n.length),await new Promise(o=>setTimeout(o,0))}Im(Math.max(0,Xs),1/60),addEventListener("resize",Y0),JM()}catch(e){console.error(e),ni.loading(1,"ERROR: "+(e&&e.message))}})();})();
