(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=`attached`,r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=1021,T=1022,E=1023,D=1024,ee=1025,O=1026,te=1027,k=1028,ne=1029,re=1030,A=1031,j=1033,ie=33776,ae=33777,oe=33778,se=33779,ce=35840,le=35841,ue=35842,de=35843,fe=36196,pe=37492,me=37496,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,M=37813,be=37814,xe=37815,Se=37816,N=37817,Ce=37818,P=37819,F=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,Ne=2301,Pe=2302,Fe=2400,Ie=2401,Le=2402,Re=2500,ze=3200,Be=3201,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3,Je=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Ye=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Xe=1234567,Ze=Math.PI/180,Qe=180/Math.PI;function $e(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ye[e&255]+Ye[e>>8&255]+Ye[e>>16&255]+Ye[e>>24&255]+`-`+Ye[t&255]+Ye[t>>8&255]+`-`+Ye[t>>16&15|64]+Ye[t>>24&255]+`-`+Ye[n&63|128]+Ye[n>>8&255]+`-`+Ye[n>>16&255]+Ye[n>>24&255]+Ye[r&255]+Ye[r>>8&255]+Ye[r>>16&255]+Ye[r>>24&255]).toLowerCase()}function et(e,t,n){return Math.max(t,Math.min(n,e))}function tt(e,t){return(e%t+t)%t}function nt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function rt(e,t,n){return e===t?0:(n-e)/(t-e)}function it(e,t,n){return(1-n)*e+n*t}function at(e,t,n,r){return it(e,t,1-Math.exp(-n*r))}function ot(e,t=1){return t-Math.abs(tt(e,t*2)-t)}function st(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function lt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ut(e,t){return e+Math.random()*(t-e)}function dt(e){return e*(.5-Math.random())}function ft(e){e!==void 0&&(Xe=e);let t=Xe+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pt(e){return e*Ze}function mt(e){return e*Qe}function ht(e){return!(e&e-1)&&e!==0}function gt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function _t(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function vt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var I={DEG2RAD:Ze,RAD2DEG:Qe,generateUUID:$e,clamp:et,euclideanModulo:tt,mapLinear:nt,inverseLerp:rt,lerp:it,damp:at,pingpong:ot,smoothstep:st,smootherstep:ct,randInt:lt,randFloat:ut,randFloatSpread:dt,seededRandom:ft,degToRad:pt,radToDeg:mt,isPowerOfTwo:ht,ceilPowerOfTwo:gt,floorPowerOfTwo:_t,setQuaternionFromProperEuler:vt,normalize:bt,denormalize:yt},L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},R=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xt.makeScale(e,t)),this}rotate(e){return this.premultiply(xt.makeRotation(-e)),this}translate(e,t){return this.premultiply(xt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xt=new R;function St(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ct(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function wt(){let e=Ct(`canvas`);return e.style.display=`block`,e}var Tt={};function Et(e){e in Tt||(Tt[e]=!0,console.warn(e))}function Dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Ot(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var z={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=At(e.r),e.g=At(e.g),e.b=At(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function At(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt=[.64,.33,.3,.6,.15,.06],Nt=[.2126,.7152,.0722],Pt=[.3127,.329],Ft=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);z.define({[He]:{primaries:Mt,whitePoint:Pt,transfer:Ue,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:Nt,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Mt,whitePoint:Pt,transfer:We,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:Nt,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var Lt,Rt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Lt===void 0&&(Lt=Ct(`canvas`)),Lt.width=e.width,Lt.height=e.height;let n=Lt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Lt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ct(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=At(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(At(t[e]/255)*255):t[e]=At(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=$e(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=class e extends Je{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=E,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=$e(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends Je{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xt.copy(this).projectOnVector(e),this.sub(Xt)}reflect(e){return this.sub(Xt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xt=new B,Zt=new Yt,Qt=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,en):en.fromBufferAttribute(r,t),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tn.copy(e.boundingBox)),tn.applyMatrix4(e.matrixWorld),this.union(tn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ln),un.subVectors(this.max,ln),nn.subVectors(e.a,ln),rn.subVectors(e.b,ln),an.subVectors(e.c,ln),on.subVectors(rn,nn),sn.subVectors(an,rn),cn.subVectors(nn,an);let t=[0,-on.z,on.y,0,-sn.z,sn.y,0,-cn.z,cn.y,on.z,0,-on.x,sn.z,0,-sn.x,cn.z,0,-cn.x,-on.y,on.x,0,-sn.y,sn.x,0,-cn.y,cn.x,0];return!pn(t,nn,rn,an,un)||(t=[1,0,0,0,1,0,0,0,1],!pn(t,nn,rn,an,un))?!1:(dn.crossVectors(on,sn),t=[dn.x,dn.y,dn.z],pn(t,nn,rn,an,un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$t=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,tn=new Qt,nn=new B,rn=new B,an=new B,on=new B,sn=new B,cn=new B,ln=new B,un=new B,dn=new B,fn=new B;function pn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){fn.fromArray(e,a);let o=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),s=t.dot(fn),c=n.dot(fn),l=r.dot(fn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var mn=new Qt,hn=new B,gn=new B,_n=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?mn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hn.subVectors(e,this.center);let t=hn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(hn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hn.copy(e.center).add(gn)),this.expandByPoint(hn.copy(e.center).sub(gn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new B,yn=new B,bn=new B,xn=new B,Sn=new B,Cn=new B,wn=new B,Tn=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yn.copy(e).add(t).multiplyScalar(.5),bn.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(yn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(bn),o=xn.dot(this.direction),s=-xn.dot(bn),c=xn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yn).addScaledVector(bn,d),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),r=vn.dot(vn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,i){Sn.subVectors(t,e),Cn.subVectors(n,e),wn.crossVectors(Sn,Cn);let a=this.direction.dot(wn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);let s=o*this.direction.dot(Cn.crossVectors(xn,Cn));if(s<0)return null;let c=o*this.direction.dot(Sn.cross(xn));if(c<0||s+c>a)return null;let l=-o*xn.dot(wn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},V=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/En.setFromMatrixColumn(e,0).length(),i=1/En.setFromMatrixColumn(e,1).length(),a=1/En.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(On,e,kn)}lookAt(e,t,n){let r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),An.crossVectors(n,Mn),An.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),An.crossVectors(n,Mn)),An.normalize(),jn.crossVectors(Mn,An),r[0]=An.x,r[4]=jn.x,r[8]=Mn.x,r[1]=An.y,r[5]=jn.y,r[9]=Mn.y,r[2]=An.z,r[6]=jn.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],te=r[6],k=r[10],ne=r[14],re=r[3],A=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*O+c*re,i[4]=a*S+o*E+s*te+c*A,i[8]=a*C+o*D+s*k+c*j,i[12]=a*w+o*ee+s*ne+c*ie,i[1]=l*x+u*T+d*O+f*re,i[5]=l*S+u*E+d*te+f*A,i[9]=l*C+u*D+d*k+f*j,i[13]=l*w+u*ee+d*ne+f*ie,i[2]=p*x+m*T+h*O+g*re,i[6]=p*S+m*E+h*te+g*A,i[10]=p*C+m*D+h*k+g*j,i[14]=p*w+m*ee+h*ne+g*ie,i[3]=_*x+v*T+y*O+b*re,i[7]=_*S+v*E+y*te+b*A,i[11]=_*C+v*D+y*k+b*j,i[15]=_*w+v*ee+y*ne+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=En.set(r[0],r[1],r[2]).length(),a=En.set(r[4],r[5],r[6]).length(),o=En.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);let s=1/i,c=1/a,l=1/o;return Dn.elements[0]*=s,Dn.elements[1]*=s,Dn.elements[2]*=s,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=l,Dn.elements[9]*=l,Dn.elements[10]*=l,t.setFromRotationMatrix(Dn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=qe){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},En=new B,Dn=new V,On=new B(0,0,0),kn=new B(1,1,1),An=new B,jn=new B,Mn=new B,Nn=new V,Pn=new Yt,Fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pn.setFromEuler(this),this.setFromQuaternion(Pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER=`XYZ`;var In=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ln=0,Rn=new B,zn=new Yt,Bn=new V,Vn=new B,Hn=new B,Un=new B,Wn=new Yt,Gn=new B(1,0,0),Kn=new B(0,1,0),qn=new B(0,0,1),Jn={type:`added`},Yn={type:`removed`},Xn={type:`childadded`,child:null},Zn={type:`childremoved`,child:null},Qn=class e extends Je{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ln++}),this.uuid=$e(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Fn,r=new Yt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new R}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new In,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Gn,e)}rotateY(e){return this.rotateOnAxis(Kn,e)}rotateZ(e){return this.rotateOnAxis(qn,e)}translateOnAxis(e,t){return Rn.copy(e).applyQuaternion(this.quaternion),this.position.add(Rn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gn,e)}translateY(e){return this.translateOnAxis(Kn,e)}translateZ(e){return this.translateOnAxis(qn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vn.copy(e):Vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Hn,Vn,this.up):Bn.lookAt(Vn,Hn,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),zn.setFromRotationMatrix(Bn),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jn),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yn),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jn),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,e,Un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,Wn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Qn.DEFAULT_UP=new B(0,1,0),Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new Wt,ur=new Wt,dr=new Wt,fr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$n.subVectors(e,t),r.cross($n);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){$n.subVectors(r,t),er.subVectors(n,t),tr.subVectors(e,t);let a=$n.dot($n),o=$n.dot(er),s=$n.dot(tr),c=er.dot(er),l=er.dot(tr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,nr)!==null&&nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,nr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,nr.x),s.addScaledVector(a,nr.y),s.addScaledVector(o,nr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return lr.setScalar(0),ur.setScalar(0),dr.setScalar(0),lr.fromBufferAttribute(e,t),ur.fromBufferAttribute(e,n),dr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lr,i.x),a.addScaledVector(ur,i.y),a.addScaledVector(dr,i.z),a}static isFrontFacing(e,t,n,r){return $n.subVectors(n,t),er.subVectors(e,t),$n.cross(er).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),er.subVectors(this.a,this.b),$n.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;rr.subVectors(r,n),ir.subVectors(i,n),or.subVectors(e,n);let s=rr.dot(or),c=ir.dot(or);if(s<=0&&c<=0)return t.copy(n);sr.subVectors(e,r);let l=rr.dot(sr),u=ir.dot(sr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(rr,a);cr.subVectors(e,i);let f=rr.dot(cr),p=ir.dot(cr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ir,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ar.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ar,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(rr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},hr={h:0,s:0,l:0};function gr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,z.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=z.workingColorSpace){return this.r=e,this.g=t,this.b=n,z.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=z.workingColorSpace){if(e=tt(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=gr(i,r,e+1/3),this.g=gr(i,r,e),this.b=gr(i,r,e-1/3)}return z.toWorkingColorSpace(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=pr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return z.fromWorkingColorSpace(_r.copy(this),e),Math.round(et(_r.r*255,0,255))*65536+Math.round(et(_r.g*255,0,255))*256+Math.round(et(_r.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=z.workingColorSpace){z.fromWorkingColorSpace(_r.copy(this),t);let n=_r.r,r=_r.g,i=_r.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=z.workingColorSpace){return z.fromWorkingColorSpace(_r.copy(this),t),e.r=_r.r,e.g=_r.g,e.b=_r.b,e}getStyle(e=Ve){z.fromWorkingColorSpace(_r.copy(this),e);let t=_r.r,n=_r.g,r=_r.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(hr);let n=it(mr.h,hr.h,t),r=it(mr.s,hr.s,t),i=it(mr.l,hr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_r=new H;H.NAMES=pr;var vr=0,yr=class extends Je{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=$e(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},br=class extends yr{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xr=new B,Sr=new L,Cr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yt(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yt(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yt(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=0,Or=new V,kr=new Qn,Ar=new B,jr=new Qt,Mr=new Qt,Nr=new B,Pr=class e extends Je{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=$e(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(St(e)?Tr:wr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Cr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new L,f=new L,p=new L,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=new V,Ir=new Tn,Lr=new _n,Rr=new B,zr=new B,Br=new B,Vr=new B,Hr=new B,Ur=new B,Wr=new B,Gr=new B,U=class extends Qn{constructor(e=new Pr,t=new br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ur.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Hr.fromBufferAttribute(s,e),a?Ur.addScaledVector(Hr,r):Ur.addScaledVector(Hr.sub(t),r))}t.add(Ur)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Ir.copy(e.ray).recast(e.near),!(Lr.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Lr,Rr)===null||Ir.origin.distanceToSquared(Rr)>(e.far-e.near)**2))&&(Fr.copy(i).invert(),Ir.copy(e.ray).applyMatrix4(Fr),(n.boundingBox===null||Ir.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Kr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Gr.copy(s),Gr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Gr);return l<n.near||l>n.far?null:{distance:l,point:Gr.clone(),object:e}}function qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,zr),e.getVertexPosition(c,Br),e.getVertexPosition(l,Vr);let u=Kr(e,t,n,r,zr,Br,Vr,Wr);if(u){let e=new B;fr.getBarycoord(Wr,zr,Br,Vr,e),i&&(u.uv=fr.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=fr.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=fr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};fr.getNormal(zr,Br,Vr,t.normal),u.face=t,u.barycoord=e}return u}var Jr=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Xr(e){let t={};for(let n=0;n<e.length;n++){let r=Yr(e[n]);for(let e in r)t[e]=r[e]}return t}function Zr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:z.workingColorSpace}var $r={clone:Yr,merge:Xr},ei=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ti=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends yr{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ei,this.fragmentShader=ti,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Zr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ri=class extends Qn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new B,ai=new L,oi=new L,si=class extends ri{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ze*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qe*2*Math.atan(Math.tan(Ze*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,ai,oi),t.subVectors(oi,ai)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ze*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ci=-90,li=1,ui=class extends Qn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new si(ci,li,e,t);r.layers=this.layers,this.add(r);let i=new si(ci,li,e,t);i.layers=this.layers,this.add(i);let a=new si(ci,li,e,t);a.layers=this.layers,this.add(a);let o=new si(ci,li,e,t);o.layers=this.layers,this.add(o);let s=new si(ci,li,e,t);s.layers=this.layers,this.add(s);let c=new si(ci,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},di=class extends Ut{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new di(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?l:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),i=new ni({name:`CubemapFromEquirect`,uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new ui(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},pi=new B,mi=new B,hi=new R,gi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=pi.subVectors(n,t).cross(mi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hi.getNormalMatrix(e),r=this.coplanarPoint(pi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new _n,vi=new B,yi=class{constructor(e=new gi,t=new gi,n=new gi,r=new gi,i=new gi,a=new gi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vi.x=r.normal.x>0?e.max.x:e.min.x,vi.y=r.normal.y>0?e.max.y:e.min.y,vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xi(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Si=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},Ci={basic:{uniforms:Xr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Xr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Xr([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Xr([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Xr([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Xr([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Xr([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Xr([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Xr([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Xr([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Xr([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distanceRGBA:{uniforms:Xr([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distanceRGBA_vert,fragmentShader:W.distanceRGBA_frag},shadow:{uniforms:Xr([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};Ci.physical={uniforms:Xr([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var wi={r:0,b:0,g:0},Ti=new Fn,Ei=new V;function Di(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new U(new Jr(1,1,1),new ni({name:`BackgroundCubeMaterial`,uniforms:Yr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(n.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ei.makeRotationFromEuler(Ti)),u.material.toneMapped=z.getTransfer(r.colorSpace)!==We,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new U(new Si(2,2),new ni({name:`BackgroundMaterial`,uniforms:Yr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=z.getTransfer(r.colorSpace)!==We,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(wi,Qr(e)),r.buffers.color.setClear(wi.r,wi.g,wi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Oi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ki(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ai(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function ji(e){let t=this,n=null,r=0,i=!1,a=!1,o=new gi,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Mi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new fi(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ni=class extends ri{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pi=4,Fi=[.125,.215,.35,.446,.526,.582],Ii=20,Li=new Ni,Ri=new H,zi=null,Bi=0,Vi=0,Hi=!1,Ui=(1+Math.sqrt(5))/2,Wi=1/Ui,Gi=[new B(-Ui,Wi,0),new B(Ui,Wi,0),new B(-Wi,0,Ui),new B(Wi,0,Ui),new B(0,Ui,-Wi),new B(0,Ui,Wi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Ki=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zi=this._renderer.getRenderTarget(),Bi=this._renderer.getActiveCubeFace(),Vi=this._renderer.getActiveMipmapLevel(),Hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zi,Bi,Vi),this._renderer.xr.enabled=Hi,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zi=this._renderer.getRenderTarget(),Bi=this._renderer.getActiveCubeFace(),Vi=this._renderer.getActiveMipmapLevel(),Hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:l,minFilter:l,generateMipmaps:!1,type:y,format:E,colorSpace:He,depthBuffer:!1},r=Ji(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ji(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qi(r)),this._blurMaterial=Xi(r,e,t)}return r}_compileMaterial(e){let t=new U(this._lodPlanes[0],e);this._renderer.compile(t,Li)}_sceneToCubeUV(e,t,n,r){let i=new si(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ri),s.toneMapping=0,s.autoClear=!1;let u=new br({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new U(new Jr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ri),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Yi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new U(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Li)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Gi[(r-t-1)%Gi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new U(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ii;m>Ii&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let h=[],g=0;for(let e=0;e<Ii;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Yi(t,3*v*(r>_-Pi?r-_+Pi:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Li)}};function qi(e){let t=[],n=[],r=[],i=e,a=e-Pi+1+Fi.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Pi?s=Fi[o-e+Pi-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Pr;h.setAttribute(`position`,new Cr(f,3)),h.setAttribute(`uv`,new Cr(p,2)),h.setAttribute(`faceIndex`,new Cr(m,1)),t.push(h),i>Pi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ji(e,t,n){let r=new Kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xi(e,t,n){let r=new Float32Array(Ii),i=new B(0,1,0);return new ni({name:`SphericalGaussianBlur`,defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$i(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zi(){return new ni({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$i(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qi(){return new ni({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$i(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $i(){return`

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
	`}function ea(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ki(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ki(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ta(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Et(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function na(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(St(n)?Tr:wr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ra(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ia(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function aa(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new qt(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new L(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function oa(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var sa=class extends Ut{constructor(e,t,n,r,i,a,s,c,l,u=O){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=_),n===void 0&&u===1027&&(n=S),super(null,r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?o:s,this.minFilter=c===void 0?o:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ca=new Ut,la=new sa(1,1),ua=new qt,da=new Jt,fa=new di,pa=[],ma=[],ha=new Float32Array(16),ga=new Float32Array(9),_a=new Float32Array(4);function va(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=pa[i];if(a===void 0&&(a=new Float32Array(i),pa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ya(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ba(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function xa(e,t){let n=ma[t];n===void 0&&(n=new Int32Array(t),ma[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Sa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ca(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ya(n,t))return;e.uniform2fv(this.addr,t),ba(n,t)}}function wa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ya(n,t))return;e.uniform3fv(this.addr,t),ba(n,t)}}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ya(n,t))return;e.uniform4fv(this.addr,t),ba(n,t)}}function Ea(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ya(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ba(n,t)}else{if(ya(n,r))return;_a.set(r),e.uniformMatrix2fv(this.addr,!1,_a),ba(n,r)}}function Da(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ya(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ba(n,t)}else{if(ya(n,r))return;ga.set(r),e.uniformMatrix3fv(this.addr,!1,ga),ba(n,r)}}function Oa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ya(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ba(n,t)}else{if(ya(n,r))return;ha.set(r),e.uniformMatrix4fv(this.addr,!1,ha),ba(n,r)}}function ka(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ya(n,t))return;e.uniform2iv(this.addr,t),ba(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ya(n,t))return;e.uniform3iv(this.addr,t),ba(n,t)}}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ya(n,t))return;e.uniform4iv(this.addr,t),ba(n,t)}}function Na(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Pa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ya(n,t))return;e.uniform2uiv(this.addr,t),ba(n,t)}}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ya(n,t))return;e.uniform3uiv(this.addr,t),ba(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ya(n,t))return;e.uniform4uiv(this.addr,t),ba(n,t)}}function La(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(la.compareFunction=515,a=la):a=ca,n.setTexture2D(t||a,i)}function Ra(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||da,i)}function za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||fa,i)}function Ba(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ua,i)}function Va(e){switch(e){case 5126:return Sa;case 35664:return Ca;case 35665:return wa;case 35666:return Ta;case 35674:return Ea;case 35675:return Da;case 35676:return Oa;case 5124:case 35670:return ka;case 35667:case 35671:return Aa;case 35668:case 35672:return ja;case 35669:case 35673:return Ma;case 5125:return Na;case 36294:return Pa;case 36295:return Fa;case 36296:return Ia;case 35678:case 36198:case 36298:case 36306:case 35682:return La;case 35679:case 36299:case 36307:return Ra;case 35680:case 36300:case 36308:case 36293:return za;case 36289:case 36303:case 36311:case 36292:return Ba}}function Ha(e,t){e.uniform1fv(this.addr,t)}function Ua(e,t){let n=va(t,this.size,2);e.uniform2fv(this.addr,n)}function Wa(e,t){let n=va(t,this.size,3);e.uniform3fv(this.addr,n)}function Ga(e,t){let n=va(t,this.size,4);e.uniform4fv(this.addr,n)}function Ka(e,t){let n=va(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function qa(e,t){let n=va(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ja(e,t){let n=va(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ya(e,t){e.uniform1iv(this.addr,t)}function Xa(e,t){e.uniform2iv(this.addr,t)}function Za(e,t){e.uniform3iv(this.addr,t)}function Qa(e,t){e.uniform4iv(this.addr,t)}function $a(e,t){e.uniform1uiv(this.addr,t)}function eo(e,t){e.uniform2uiv(this.addr,t)}function to(e,t){e.uniform3uiv(this.addr,t)}function no(e,t){e.uniform4uiv(this.addr,t)}function ro(e,t,n){let r=this.cache,i=t.length,a=xa(n,i);ya(r,a)||(e.uniform1iv(this.addr,a),ba(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ca,a[e])}function io(e,t,n){let r=this.cache,i=t.length,a=xa(n,i);ya(r,a)||(e.uniform1iv(this.addr,a),ba(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||da,a[e])}function ao(e,t,n){let r=this.cache,i=t.length,a=xa(n,i);ya(r,a)||(e.uniform1iv(this.addr,a),ba(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||fa,a[e])}function oo(e,t,n){let r=this.cache,i=t.length,a=xa(n,i);ya(r,a)||(e.uniform1iv(this.addr,a),ba(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ua,a[e])}function so(e){switch(e){case 5126:return Ha;case 35664:return Ua;case 35665:return Wa;case 35666:return Ga;case 35674:return Ka;case 35675:return qa;case 35676:return Ja;case 5124:case 35670:return Ya;case 35667:case 35671:return Xa;case 35668:case 35672:return Za;case 35669:case 35673:return Qa;case 5125:return $a;case 36294:return eo;case 36295:return to;case 36296:return no;case 35678:case 36198:case 36298:case 36306:case 35682:return ro;case 35679:case 36299:case 36307:return io;case 35680:case 36300:case 36308:case 36293:return ao;case 36289:case 36303:case 36311:case 36292:return oo}}var co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Va(t.type)}},lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=so(t.type)}},uo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fo=/(\w+)(\])?(\[|\.)?/g;function po(e,t){e.seq.push(t),e.map[t.id]=t}function mo(e,t,n){let r=e.name,i=r.length;for(fo.lastIndex=0;;){let a=fo.exec(r),o=fo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){po(n,l===void 0?new co(s,e,t):new lo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new uo(s),po(n,e)),n=e}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function go(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _o=37297,vo=0;function yo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bo=new R;function xo(e){z._getMatrix(bo,z.workingColorSpace,e);let t=`mat3( ${bo.elements.map(e=>e.toFixed(4))} )`;switch(z.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function So(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yo(e.getShaderSource(t),r)}return i}function Co(e,t){let n=xo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function wo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var To=new B;function Eo(){return z.getLuminanceCoefficients(To),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${To.x.toFixed(4)}, ${To.y.toFixed(4)}, ${To.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Do(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ao).join(`
`)}function Oo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ko(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ao(e){return e!==``}function jo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var No=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(e){return e.replace(No,Io)}var Fo=new Map;function Io(e,t){let n=W[t];if(n===void 0){let e=Fo.get(t);if(e!==void 0)n=W[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Po(n)}var Lo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(e){return e.replace(Lo,zo)}function zo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Bo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Vo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ho(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Uo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Wo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Go(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ko(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Vo(n),l=Ho(n),u=Uo(n),d=Wo(n),f=Go(n),p=Do(n),m=Oo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(g=[Bo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ao).join(`
`),_=[Bo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:wo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,Co(`linearToOutputTexel`,n.outputColorSpace),Eo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ao).join(`
`)),o=Po(o),o=jo(o,n),o=Mo(o,n),s=Po(s),s=jo(s,n),s=Mo(s,n),o=Ro(o),s=Ro(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=go(i,i.VERTEX_SHADER,y),S=go(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=So(i,x,`vertex`),r=So(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ho(i,h),T=ko(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,_o)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var qo=0,Jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yo(e),t.set(e,n)),n}},Yo=class{constructor(e){this.id=qo++,this.code=e,this.usedTimes=0}};function Xo(e,t,n,r,i,a,o){let s=new In,c=new Jo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,ee,O,te;if(C){let e=Ci[C];D=e.vertexShader,ee=e.fragmentShader}else D=a.vertexShader,ee=a.fragmentShader,c.update(a),O=c.getVertexShaderID(a),te=c.getFragmentShaderID(a);let k=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=_.isInstancedMesh===!0,A=_.isBatchedMesh===!0,j=!!a.map,ie=!!a.matcap,ae=!!x,oe=!!a.aoMap,se=!!a.lightMap,ce=!!a.bumpMap,le=!!a.normalMap,ue=!!a.displacementMap,de=!!a.emissiveMap,fe=!!a.metalnessMap,pe=!!a.roughnessMap,me=a.anisotropy>0,he=a.clearcoat>0,ge=a.dispersion>0,_e=a.iridescence>0,ve=a.sheen>0,ye=a.transmission>0,M=me&&!!a.anisotropyMap,be=he&&!!a.clearcoatMap,xe=he&&!!a.clearcoatNormalMap,Se=he&&!!a.clearcoatRoughnessMap,N=_e&&!!a.iridescenceMap,Ce=_e&&!!a.iridescenceThicknessMap,P=ve&&!!a.sheenColorMap,F=ve&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=ye&&!!a.transmissionMap,Oe=ye&&!!a.thicknessMap,ke=!!a.gradientMap,Ae=!!a.alphaMap,je=a.alphaTest>0,Me=!!a.alphaHash,Ne=!!a.extensions,Pe=0;a.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:ee,defines:a.defines,customVertexShaderID:O,customFragmentShaderID:te,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:A,batchingColor:A&&_._colorsTexture!==null,instancing:re,instancingColor:re&&_.instanceColor!==null,instancingMorph:re&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:He,alphaToCoverage:!!a.alphaToCoverage,map:j,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:f&&ue,emissiveMap:de,normalMapObjectSpace:le&&a.normalMapType===1,normalMapTangentSpace:le&&a.normalMapType===0,metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:M,clearcoat:he,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:ge,iridescence:_e,iridescenceMap:N,iridescenceThicknessMap:Ce,sheen:ve,sheenColorMap:P,sheenRoughnessMap:F,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:ye,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:a.combine,mapUv:j&&h(a.map.channel),aoMapUv:oe&&h(a.aoMap.channel),lightMapUv:se&&h(a.lightMap.channel),bumpMapUv:ce&&h(a.bumpMap.channel),normalMapUv:le&&h(a.normalMap.channel),displacementMapUv:ue&&h(a.displacementMap.channel),emissiveMapUv:de&&h(a.emissiveMap.channel),metalnessMapUv:fe&&h(a.metalnessMap.channel),roughnessMapUv:pe&&h(a.roughnessMap.channel),anisotropyMapUv:M&&h(a.anisotropyMap.channel),clearcoatMapUv:be&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:xe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:P&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:F&&h(a.sheenRoughnessMap.channel),specularMapUv:we&&h(a.specularMap.channel),specularColorMapUv:Te&&h(a.specularColorMap.channel),specularIntensityMapUv:Ee&&h(a.specularIntensityMap.channel),transmissionMapUv:De&&h(a.transmissionMap.channel),thicknessMapUv:Oe&&h(a.thicknessMap.channel),alphaMapUv:Ae&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(le||me),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(j||Ae),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ne,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:j&&a.map.isVideoTexture===!0&&z.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&a.emissiveMap.isVideoTexture===!0&&z.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ne&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&a.extensions.multiDraw===!0||A)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ci[t];n=$r.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ko(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Zo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Qo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $o(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function es(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Qo),r.length>1&&r.sort(t||$o),i.length>1&&i.sort(t||$o)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function ts(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new es,e.set(t,[i])):n>=r.length?(i=new es,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ns(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function rs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var is=0;function as(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function os(e){let t=new ns,n=rs(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(as);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=is++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ss(e){let t=new os(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function cs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ss(e),t.set(n,[a])):r>=i.length?(a=new ss(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ls=class extends yr{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},us=class extends yr{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ds=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fs=`uniform sampler2D shadow_pass;
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
}`;function ps(e,t,n){let r=new yi,i=new L,a=new L,s=new Wt,c=new ls({depthPacking:Be}),l=new us,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:ds,fragmentShader:fs}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Pr;h.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new U(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,f.mapSize.y=a.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:o,magFilter:o};f.map!==null&&f.map.dispose(),f.map=new Kt(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Kt(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var ms={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function hs(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ms[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,ee=null,O=null,te=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(A)[1]),ne=re>=1);let j=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Wt().fromArray(ae),ce=new Wt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),M(!1),be(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return m!==t&&(e.useProgram(t),m=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(fe(e.BLEND),h=!1);else if(h===!1&&(de(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(ge[n],ge[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),M(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function M(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function be(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function xe(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function Se(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(O!==n||te!==r)&&(e.polygonOffset(n,r),O=n,te=r)):fe(e.POLYGON_OFFSET_FILL)}function N(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function P(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function F(){let t=ie[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},j=null,ie={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,ee=null,O=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:M,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:N,activeTexture:Ce,bindTexture:P,unbindTexture:F,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:Me,texImage3D:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Pe,viewport:Fe,reset:Re}}function gs(e,t,n,r){let i=_s(r);switch(n){case w:return e*t;case D:return e*t;case ee:return e*t*2;case k:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:case de:return Math.max(e,16)*Math.max(t,8)/4;case ce:case ue:return Math.max(e,8)*Math.max(t,8)/2;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case M:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case N:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case P:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _s(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function vs(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):Ct(`canvas`)}function w(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Ue:z.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),A(t),t.isVideoTexture&&y.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t)}function A(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function ie(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){let e=ae;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,r){let i=f.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(i,t,r);return}}n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function ue(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?ve(i,t,r):n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r)}function de(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?ve(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function fe(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?ye(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let pe={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},me={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ve(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=_e(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+i);let t=z.getPrimaries(z.workingColorSpace),l=r.colorSpace===``?null:z.getPrimaries(r.colorSpace),u=r.colorSpace===``||t===l?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=w(r.image,!1,p.maxTextureSize);d=ke(r,d);let f=m.convert(r.format,r.colorSpace),h=m.convert(r.type),g=ee(r.internalFormat,f,h,r.colorSpace,r.isVideoTexture);ge(a,r);let _,v=r.mipmaps,y=r.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=k(r,d);if(r.isDepthTexture)g=O(r.format===te,r.type),b&&(y?n.texStorage2D(e.TEXTURE_2D,1,g,d.width,d.height):n.texImage2D(e.TEXTURE_2D,0,g,d.width,d.height,0,f,h,null));else if(r.isDataTexture){if(v.length>0){y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);r.generateMipmaps=!1}else y?(b&&n.texStorage2D(e.TEXTURE_2D,S,g,d.width,d.height),x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,d.width,d.height,f,h,d.data)):n.texImage2D(e.TEXTURE_2D,0,g,d.width,d.height,0,f,h,d.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){y&&b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,d.depth);for(let t=0,i=v.length;t<i;t++)if(_=v[t],r.format!==1023){if(f!==null){if(y){if(x){if(r.layerUpdates.size>0){let i=gs(_.width,_.height,r.format,r.type);for(let a of r.layerUpdates){let r=_.data.subarray(a*i/_.data.BYTES_PER_ELEMENT,(a+1)*i/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,a,_.width,_.height,1,f,r)}r.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,d.depth,f,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,d.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,d.depth,f,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,d.depth,0,f,h,_.data)}else{y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,i=v.length;t<i;t++)_=v[t],r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(r.isDataArrayTexture){if(y){if(b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,d.width,d.height,d.depth),x){if(r.layerUpdates.size>0){let t=gs(d.width,d.height,r.format,r.type);for(let i of r.layerUpdates){let r=d.data.subarray(i*t/d.data.BYTES_PER_ELEMENT,(i+1)*t/d.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,d.width,d.height,1,f,h,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,d.width,d.height,d.depth,f,h,d.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,d.width,d.height,d.depth,0,f,h,d.data)}else if(r.isData3DTexture)y?(b&&n.texStorage3D(e.TEXTURE_3D,S,g,d.width,d.height,d.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,d.width,d.height,d.depth,f,h,d.data)):n.texImage3D(e.TEXTURE_3D,0,g,d.width,d.height,d.depth,0,f,h,d.data);else if(r.isFramebufferTexture){if(b){if(y)n.texStorage2D(e.TEXTURE_2D,S,g,d.width,d.height);else{let t=d.width,r=d.height;for(let i=0;i<S;i++)n.texImage2D(e.TEXTURE_2D,i,g,t,r,0,f,h,null),t>>=1,r>>=1}}}else if(v.length>0){if(y&&b){let t=Ae(v[0]);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):n.texImage2D(e.TEXTURE_2D,t,g,f,h,_);r.generateMipmaps=!1}else if(y){if(b){let t=Ae(d);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,d)}else n.texImage2D(e.TEXTURE_2D,0,g,f,h,d);T(r)&&E(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function ye(t,r,i){if(r.image.length!==6)return;let a=_e(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=z.getPrimaries(z.workingColorSpace),c=r.colorSpace===``?null:z.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=w(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=ke(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=ee(r.internalFormat,g,_,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=k(r,h);ge(e.TEXTURE_CUBE_MAP,r);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Ae(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}T(r)&&E(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function M(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=ee(i.internalFormat,c,l,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Ee(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Ee(n);De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=ee(a.internalFormat,o,s,a.colorSpace),l=Ee(n);r&&De(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,r){if(r&&r.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let i=f.get(r.depthTexture);i.__renderTarget=r,(!i.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),le(r.depthTexture,0);let a=i.__webglTexture,o=Ee(r);if(r.depthTexture.format===1026)De(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(r.depthTexture.format===1027)De(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function Se(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)throw Error(`target.depthTexture not supported in Cube render targets`);xe(r.__webglFramebuffer,t)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),be(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),be(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function N(t,n,r){let i=f.get(t);n!==void 0&&M(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Se(t)}function Ce(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,re);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&De(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=ee(r.internalFormat,a,s,r.colorSpace,t.isXRRenderTarget===!0),l=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),be(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ge(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)M(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else M(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);T(r)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),ge(e.TEXTURE_2D,a),M(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,e.TEXTURE_2D,0),T(a)&&E(e.TEXTURE_2D)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),ge(o,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)M(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else M(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);T(r)&&E(o),n.unbindTexture()}t.depthBuffer&&Se(t)}function P(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(T(i)){let t=D(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),E(t),n.unbindTexture()}}}let F=[],we=[];function Te(t){if(t.samples>0){if(De(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(F.length=0,we.length=0,F.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(F.push(s),we.push(s),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(p.maxSamples,e.samples)}function De(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Oe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(z.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=N,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=M,this.useMultisampledRTT=De}function ys(e,t){function n(n,r=``){let i,a=z.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bs=class extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xs=class extends Qn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ss={type:`move`},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ss)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ws=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ts=`
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

}`,Es=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ut,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:ws,fragmentShader:Ts,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ds=class extends Je{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=new Es,g=t.getContextAttributes(),v=null,y=null,b=[],x=[],C=new L,w=null,T=new si;T.viewport=new Wt;let D=new si;D.viewport=new Wt;let ee=[T,D],k=new bs,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Cs,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Cs,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Cs,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ne=null,re=null,h.reset(),e.setRenderTarget(v),p=null,d=null,u=null,r=null,y=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,ie),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let n={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Kt(p.framebufferWidth,p.framebufferHeight,{format:E,type:f,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let n=null,a=null,o=null;g.depth&&(o=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=g.stencil?te:O,a=g.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Kt(d.textureWidth,d.textureHeight,{format:E,type:f,depthTexture:new sa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ae=new B,oe=new B;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=D.near=T.near=t,k.far=D.far=T.far=n,(ne!==k.near||re!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ne=k.near,re=k.far),T.layers.mask=e.layers.mask|2,D.layers.mask=e.layers.mask|4,k.layers.mask=T.layers.mask|D.layers.mask;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(k,T,D):k.projectionMatrix.copy(T.projectionMatrix),le(e,k,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let n=!1;t.length!==k.cameras.length&&(k.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(y,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(y))}let o=ee[r];o===void 0&&(o=new si,o.layers.enable(r),o.viewport=new Wt,ee[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),n===!0&&k.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&h.init(e,n,r.renderState)}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new bi;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Os=new Fn,ks=new V;function As(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Qr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Os.copy(o),Os.x*=-1,Os.y*=-1,Os.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),e.envMapRotation.value.setFromMatrix4(ks.makeRotationFromEuler(Os)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function js(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ms=class{constructor(e={}){let{canvas:t=wt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,ee=null,O=new Wt,te=new Wt,k=null,ne=new H(0),re=0,A=t.width,j=t.height,ie=1,ae=null,oe=null,se=new Wt(0,0,A,j),ce=new Wt(0,0,A,j),le=!1,ue=new yi,de=!1,fe=!1,pe=new V,me=new V,he=new B,ge=new Wt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return E===null?ie:1}let M=n;function be(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),M===null){let t=`webgl2`;if(M=be(t,e),M===null)throw be(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let xe,Se,N,Ce,P,F,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ue;function We(){xe=new ta(M),xe.init(),ze=new ys(M,xe),Se=new Ai(M,xe,e,ze),N=new hs(M,xe),Se.reverseDepthBuffer&&p&&N.buffers.depth.setReversed(!0),Ce=new ia(M),P=new Zo,F=new vs(M,xe,N,P,Se,ze,Ce),we=new Mi(S),Te=new ea(S),Ee=new xi(M),Be=new Oi(M,Ee),De=new na(M,Ee,Ce,Be),Oe=new oa(M,De,Ee,Ce),Ie=new aa(M,Se,F),Ne=new ji(P),ke=new Xo(S,we,Te,xe,Se,Be,Ne),Ae=new As(S,P),je=new ts,Me=new cs(xe),Fe=new Di(S,we,Te,N,Oe,m,s),Pe=new ps(S,Oe,Se),Ue=new js(M,Ce,Se,N),Le=new ki(M,xe,Ce),Re=new ra(M,xe,Ce),Ce.programs=ke.programs,S.capabilities=Se,S.extensions=xe,S.properties=P,S.renderLists=je,S.shadowMap=Pe,S.state=N,S.info=Ce}We();let Ge=new Ds(S,M);this.xr=Ge,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(e){e!==void 0&&(ie=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){Ge.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(A=e,j=n,t.width=Math.floor(e*ie),t.height=Math.floor(n*ie),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(A*ie,j*ie).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,ie=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(se)},this.setViewport=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),N.viewport(O.copy(se).multiplyScalar(ie).round())},this.getScissor=function(e){return e.copy(ce)},this.setScissor=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),N.scissor(te.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(e){N.setScissorTest(le=e)},this.setOpaqueSort=function(e){ae=e},this.setTransparentSort=function(e){oe=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,M.clearBufferuiv(M.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,M.clearBufferiv(M.COLOR,0,g))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),je.dispose(),Me.dispose(),P.dispose(),we.dispose(),Te.dispose(),Oe.dispose(),Be.dispose(),Ue.dispose(),ke.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),rt.stop()};function Ke(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function qe(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Ce.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;We(),Ce.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Je(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),P.remove(e)}function Ze(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ft(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*ye()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,lt(e,t,n),e.side=0,e.needsUpdate=!0,lt(e,t,n),e.side=2):lt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Me.get(n),v.init(t),x.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Qe(a,n,e),r.add(a)}else Qe(t,n,e),r.add(t)}}),x.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new bi;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),v=Me.get(e,x.length),v.init(t),x.push(v),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ue.setFromProjectionMatrix(me),fe=this.localClippingEnabled,de=Ne.init(this.clippingPlanes,fe),_=je.get(e,b.length),_.init(),b.push(_),Ge.enabled===!0&&Ge.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,S.sortObjects)}it(e,t,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ae,oe),ve=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ve&&Fe.addToRenderList(_,e),this.info.render.frame++,de===!0&&Ne.beginShadows();let n=v.state.shadowsArray;Pe.render(n,e,t),de===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=_.opaque,i=_.transmissive;if(v.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];ot(r,i,e,a)}ve&&Fe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];at(_,e,r,r.viewport)}}else i.length>0&&ot(r,i,e,t),ve&&Fe.render(e),at(_,e,t);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Be.resetDefaultState(),D=-1,ee=null,x.pop(),x.length>0?(v=x[x.length-1],de===!0&&Ne.setGlobalState(S.clippingPlanes,v.state.camera)):v=null,b.pop(),_=b.length>0?b[b.length-1]:null};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ue.intersectsSprite(e)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let t=Oe.update(e),i=e.material;i.visible&&_.push(e,t,i,n,ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ue.intersectsObject(e))){let t=Oe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,ge.z,o)}}else i.visible&&_.push(e,t,i,n,ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),de===!0&&Ne.setGlobalState(S.clippingPlanes,n),r&&N.viewport(O.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[r.id]===void 0&&(v.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`)?y:f,minFilter:d,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:z.workingColorSpace}));let a=v.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ne),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),ve&&Fe.render(n);let c=S.toneMapping;S.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),v.setupLightsView(r),de===!0&&Ne.setGlobalState(S.clippingPlanes,r),st(e,n,r),F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,ct(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ne,re),l!==void 0&&(r.viewport=l),S.toneMapping=c}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&ct(o,t,n,s,c,l)}}function ct(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function lt(e,t,n){t.isScene!==!0&&(t=_e);let r=P.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Te:we).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return dt(e,s),u}else s.uniforms=ke.getUniforms(e),e.onBeforeCompile(s,S),u=ke.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ne.uniform),dt(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ut(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ho.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function dt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ft(e,t,n,r,i){t.isScene!==!0&&(t=_e),F.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:He,c=(r.isMeshStandardMaterial?Te:we).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=P.get(r),y=v.state.lights;if(de===!0&&(fe===!0||e!==ee)){let t=e===ee&&r.id===D;Ne.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ne.numPlanes||_.numIntersection!==Ne.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=lt(r,t,i));let C=!1,w=!1,T=!1,O=x.getUniforms(),te=_.uniforms;if(N.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||ee!==e){N.buffers.depth.getReversed()?(pe.copy(e.projectionMatrix),Ot(pe),kt(pe),O.setValue(M,`projectionMatrix`,pe)):O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),ee!==e&&(ee=e,w=!0,T=!0)}if(i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,F))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,F),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,F),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,F));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ie.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(te.envMap.value=c,te.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(te.envMapIntensity.value=t.environmentIntensity),w&&(O.setValue(M,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&pt(te,T),a&&r.fog===!0&&Ae.refreshFogUniforms(te,a),Ae.refreshMaterialUniforms(te,r,ie,j,v.state.transmissionRenderTarget[e.id]),ho.upload(M,ut(_),te,F)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ho.upload(M,ut(_),te,F),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,x),Ue.bind(n,x)}}return x}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=n;let r=P.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||xe.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=P.get(e);if(s.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(M.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)F.setupRenderTarget(e);else if(s.__hasExternalTextures)F.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);F.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&F.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),te.copy(e.scissor),k=e.scissorTest}else O.copy(se).multiplyScalar(ie).floor(),te.copy(ce).multiplyScalar(ie).floor(),k=le;if(N.bindFramebuffer(M.FRAMEBUFFER,i)&&r&&N.drawBuffers(e,i),N.viewport(O),N.scissor(te),N.setScissorTest(k),a){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=P.get(e.texture),i=t||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){N.bindFramebuffer(M.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!Se.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Se.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,ze.convert(s),ze.convert(c),a)}finally{let e=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!Se.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Se.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,s);let e=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),0);let o=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,o);let u=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Dt(M,u,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(e),M.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Et(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;F.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Et(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=ze.convert(t.format),g=ze.convert(t.type),_;t.isData3DTexture?(F.setTexture3D(t,0),_=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(F.setTexture2DArray(t,0),_=M.TEXTURE_2D_ARRAY):(F.setTexture2D(t,0),_=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let v=M.getParameter(M.UNPACK_ROW_LENGTH),y=M.getParameter(M.UNPACK_IMAGE_HEIGHT),b=M.getParameter(M.UNPACK_SKIP_PIXELS),x=M.getParameter(M.UNPACK_SKIP_ROWS),S=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,m.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,m.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,c),M.pixelStorei(M.UNPACK_SKIP_ROWS,l),M.pixelStorei(M.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=P.get(e),r=P.get(t),m=P.get(n.__renderTarget),h=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,m.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,i,p+n),M.blitFramebuffer(c,l,a,o,d,f,a,o,M.DEPTH_BUFFER_BIT,M.NEAREST)):w?M.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):M.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):M.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):M.texSubImage2D(M.TEXTURE_2D,i,d,f,a,o,h,g,m);M.pixelStorei(M.UNPACK_ROW_LENGTH,v),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,y),M.pixelStorei(M.UNPACK_SKIP_PIXELS,b),M.pixelStorei(M.UNPACK_SKIP_ROWS,x),M.pixelStorei(M.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&M.generateMipmap(_),N.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(Et(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),Et(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&F.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?F.setTextureCube(e,0):e.isData3DTexture?F.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?F.setTexture2DArray(e,0):F.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,N.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=z._getDrawingBufferColorSpace(e),t.unpackColorSpace=z._getUnpackColorSpace()}},Ns=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new H(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Ps=class extends Qn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=$e()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Is=new B,Ls=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix4(e),this.setXYZ(t,Is.x,Is.y,Is.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyNormalMatrix(e),this.setXYZ(t,Is.x,Is.y,Is.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.transformDirection(e),this.setXYZ(t,Is.x,Is.y,Is.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rs=new B,zs=new Wt,Bs=new Wt,Vs=new B,Hs=new V,Us=new B,Ws=new _n,Gs=new V,Ks=new Tn,qs=class extends U{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=n,this.bindMatrix=new V,this.bindMatrixInverse=new V,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Us),this.boundingBox.expandByPoint(Us)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Us),this.boundingSphere.expandByPoint(Us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(r),e.ray.intersectsSphere(Ws)!==!1&&(Gs.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Gs),(this.boundingBox===null||Ks.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ks)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;zs.fromBufferAttribute(r.attributes.skinIndex,e),Bs.fromBufferAttribute(r.attributes.skinWeight,e),Rs.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=Bs.getComponent(e);if(r!==0){let i=zs.getComponent(e);Hs.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Vs.copy(Rs).applyMatrix4(Hs),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},Js=class extends Qn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ys=class extends Ut{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xs=new V,Zs=new V,Qs=class e{constructor(e=[],t=[]){this.uuid=$e(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new V)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new V;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Zs;Xs.multiplyMatrices(i,t[r]),Xs.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ys(t,e,e,E,v);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new Js),this.bones.push(i),this.boneInverses.push(new V().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},$s=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ec=new V,tc=new V,nc=[],rc=new Qt,ic=new V,ac=new U,oc=new _n,sc=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ic)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ec),rc.copy(e.boundingBox).applyMatrix4(ec),this.boundingBox.union(rc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ec),oc.copy(e.boundingSphere).applyMatrix4(ec),this.boundingSphere.union(oc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ac.geometry=this.geometry,ac.material=this.material,ac.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oc.copy(this.boundingSphere),oc.applyMatrix4(n),e.ray.intersectsSphere(oc)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ec),tc.multiplyMatrices(n,ec),ac.matrixWorld=tc,ac.raycast(e,nc);for(let e=0,n=nc.length;e<n;e++){let n=nc[e];n.instanceId=i,n.object=this,t.push(n)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(r*this.count),r,this.count,k,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},cc=class extends yr{static get type(){return`LineBasicMaterial`}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lc=new B,uc=new B,dc=new V,fc=new Tn,pc=new _n,mc=new B,hc=new B,gc=class extends Qn{constructor(e=new Pr,t=new cc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)lc.fromBufferAttribute(t,e-1),uc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=lc.distanceTo(uc);e.setAttribute(`lineDistance`,new Er(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(r),pc.radius+=i,e.ray.intersectsSphere(pc)===!1)return;dc.copy(r).invert(),fc.copy(e.ray).applyMatrix4(dc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=_c(this,e,fc,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=_c(this,e,fc,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=_c(this,e,fc,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=_c(this,e,fc,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _c(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(lc.fromBufferAttribute(o,i),uc.fromBufferAttribute(o,a),n.distanceSqToSegment(lc,uc,mc,hc)>r)return;mc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(mc);if(!(s<t.near||s>t.far))return{distance:s,point:hc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var vc=new B,yc=new B,bc=class extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)vc.fromBufferAttribute(t,e),yc.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+vc.distanceTo(yc);e.setAttribute(`lineDistance`,new Er(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},xc=class extends gc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Sc=class extends yr{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cc=new V,wc=new Tn,Tc=new _n,Ec=new B,Dc=class extends Qn{constructor(e=new Pr,t=new Sc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Tc.radius+=i,e.ray.intersectsSphere(Tc)===!1)return;Cc.copy(r).invert(),wc.copy(e.ray).applyMatrix4(Cc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ec.fromBufferAttribute(l,n),Oc(Ec,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ec.fromBufferAttribute(l,a),Oc(Ec,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oc(e,t,n,r,i,a,o){let s=wc.distanceSqToPoint(e);if(s<n){let n=new B;wc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var kc=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ac=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,r=[],i=[],a=[],o=new B,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(et(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(et(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jc=class extends Ac{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends jc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Nc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Pc=new B,Fc=new Nc,Ic=new Nc,Lc=new Nc,Rc=class extends Ac{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Pc.subVectors(r[0],r[1]).add(r[0]),c=Pc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Pc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Pc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Fc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ic.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Lc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Fc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ic.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Lc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Fc.calc(s),Ic.calc(s),Lc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Bc(e,t){let n=1-e;return n*n*t}function Vc(e,t){return 2*(1-e)*e*t}function Hc(e,t){return e*e*t}function Uc(e,t,n,r){return Bc(e,t)+Vc(e,n)+Hc(e,r)}function Wc(e,t){let n=1-e;return n*n*n*t}function Gc(e,t){let n=1-e;return 3*n*n*e*t}function Kc(e,t){return 3*(1-e)*e*e*t}function qc(e,t){return e*e*e*t}function Jc(e,t,n,r,i){return Wc(e,t)+Gc(e,n)+Kc(e,r)+qc(e,i)}var Yc=class extends Ac{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jc(e,r.x,i.x,a.x,o.x),Jc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xc=class extends Ac{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Jc(e,r.x,i.x,a.x,o.x),Jc(e,r.y,i.y,a.y,o.y),Jc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zc=class extends Ac{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Ac{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Ac{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Uc(e,r.x,i.x,a.x),Uc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends Ac{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Uc(e,r.x,i.x,a.x),Uc(e,r.y,i.y,a.y),Uc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Ac{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(zc(o,s.x,c.x,l.x,u.x),zc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Rc,CubicBezierCurve:Yc,CubicBezierCurve3:Xc,EllipseCurve:jc,LineCurve:Zc,LineCurve3:Qc,QuadraticBezierCurve:$c,QuadraticBezierCurve3:el,SplineCurve:tl}),rl=class extends Ac{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new nl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new nl[n.type]().fromJSON(n))}return this}},il=class extends rl{constructor(e){super(),this.type=`Path`,this.currentPoint=new L,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zc(this.currentPoint.clone(),new L(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new $c(this.currentPoint.clone(),new L(e,t),new L(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Yc(this.currentPoint.clone(),new L(e,t),new L(n,r),new L(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new tl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new jc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},al=class e extends Pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ol=class extends il{constructor(e){super(e),this.uuid=$e(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new il().fromJSON(n))}return this}},sl={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=cl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=hl(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return ul(a,o,n,s,c,p,0),o}};function cl(e,t,n,r,i){let a,o;if(i===Rl(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Fl(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Fl(a,e[a],e[a+1],o);return o&&Dl(o,o.next)&&(Il(o),o=o.next),o}function ll(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Dl(n,n.next)||El(n.prev,n,n.next)===0)){if(Il(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ul(e,t,n,r,i,a,o){if(!e)return;!o&&a&&bl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?fl(e,r,i,a):dl(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Il(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=pl(ll(e),t,n),ul(e,t,n,r,i,a,2)):o===2&&ml(e,t,n,r,i,a):ul(ll(e),t,n,r,i,a,1);break}}function dl(e){let t=e.prev,n=e,r=e.next;if(El(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&wl(i,s,a,c,o,l,m.x,m.y)&&El(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function fl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(El(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Sl(p,m,t,n,r),v=Sl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wl(s,u,c,d,l,f,y.x,y.y)&&El(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wl(s,u,c,d,l,f,b.x,b.y)&&El(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&wl(s,u,c,d,l,f,y.x,y.y)&&El(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&wl(s,u,c,d,l,f,b.x,b.y)&&El(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function pl(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Dl(i,a)&&Ol(i,r,r.next,a)&&Ml(i,a)&&Ml(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Il(r),Il(r.next),r=e=a),r=r.next}while(r!==e);return ll(r)}function ml(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Tl(o,e)){let s=Pl(o,e);o=ll(o,o.next),s=ll(s,s.next),ul(o,t,n,r,i,a,0),ul(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function hl(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=cl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Cl(l));for(i.sort(gl),a=0;a<i.length;a++)n=_l(i[a],n);return n}function gl(e,t){return e.x-t.x}function _l(e,t){let n=vl(e,t);if(!n)return t;let r=Pl(n,e);return ll(r,r.next),ll(n,n.next)}function vl(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&wl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Ml(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&yl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function yl(e,t){return El(e.prev,e,t.prev)<0&&El(t.next,e,e.next)<0}function bl(e,t,n,r){let i=e;do i.z===0&&(i.z=Sl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,xl(i)}function xl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Sl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Cl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function wl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Tl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!jl(e,t)&&(Ml(e,t)&&Ml(t,e)&&Nl(e,t)&&(El(e.prev,e,t.prev)||El(e,t.prev,t))||Dl(e,t)&&El(e.prev,e,e.next)>0&&El(t.prev,t,t.next)>0)}function El(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Dl(e,t){return e.x===t.x&&e.y===t.y}function Ol(e,t,n,r){let i=Al(El(e,t,n)),a=Al(El(e,t,r)),o=Al(El(n,r,e)),s=Al(El(n,r,t));return!!(i!==a&&o!==s||i===0&&kl(e,n,t)||a===0&&kl(e,r,t)||o===0&&kl(n,e,r)||s===0&&kl(n,t,r))}function kl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Al(e){return e>0?1:e<0?-1:0}function jl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ol(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ml(e,t){return El(e.prev,e,e.next)<0?El(e,t,e.next)>=0&&El(e,e.prev,t)>=0:El(e,t,e.prev)<0||El(e,e.next,t)<0}function Nl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Pl(e,t){let n=new Ll(e.i,e.x,e.y),r=new Ll(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Fl(e,t,n,r){let i=new Ll(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Il(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ll(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rl(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var zl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Bl(e),Vl(n,e);let a=e.length;t.forEach(Bl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Vl(n,t[e]);let o=sl.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Bl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Vl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Hl=class e extends Pr{constructor(e=new ol([new L(0,.5),new L(-.5,-.5),new L(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Er(r,3)),this.setAttribute(`normal`,new Er(i,3)),this.setAttribute(`uv`,new Er(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;zl.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];zl.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=zl.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ul(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ul(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Wl=class e extends Pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gl=class extends ni{static get type(){return`RawShaderMaterial`}constructor(e){super(e),this.isRawShaderMaterial=!0}},Kl=class extends yr{static get type(){return`MeshStandardMaterial`}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ql=class extends Kl{static get type(){return`MeshPhysicalMaterial`}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Jl=class extends cc{static get type(){return`LineDashedMaterial`}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Yl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zl(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ql(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function $l(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var eu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},tu=class extends eu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},nu=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ru=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},iu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Yl(t,this.TimeBufferType),this.values=Yl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yl(e.times,Array),values:Yl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};iu.prototype.TimeBufferType=Float32Array,iu.prototype.ValueBufferType=Float32Array,iu.prototype.DefaultInterpolation=Ne;var au=class extends iu{constructor(e,t,n){super(e,t,n)}};au.prototype.ValueTypeName=`bool`,au.prototype.ValueBufferType=Array,au.prototype.DefaultInterpolation=Me,au.prototype.InterpolantFactoryMethodLinear=void 0,au.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends iu{};ou.prototype.ValueTypeName=`color`;var su=class extends iu{};su.prototype.ValueTypeName=`number`;var cu=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Yt.slerpFlat(i,0,a,c-o,a,c,s);return i}},lu=class extends iu{InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};lu.prototype.ValueTypeName=`quaternion`,lu.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends iu{constructor(e,t,n){super(e,t,n)}};uu.prototype.ValueTypeName=`string`,uu.prototype.ValueBufferType=Array,uu.prototype.DefaultInterpolation=Me,uu.prototype.InterpolantFactoryMethodLinear=void 0,uu.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends iu{};du.prototype.ValueTypeName=`vector`;var fu=class{constructor(e=``,t=-1,n=[],r=Re){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=$e(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(mu(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(iu.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Zl(o);o=Ql(o,1,c),s=Ql(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new su(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];$l(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new su(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(du,a+`.position`,i,`pos`,r),n(lu,a+`.quaternion`,i,`rot`,r),n(du,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function pu(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return su;case`vector`:case`vector2`:case`vector3`:case`vector4`:return du;case`color`:return ou;case`quaternion`:return lu;case`bool`:case`boolean`:return au;case`string`:return uu}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function mu(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=pu(e.type);if(e.times===void 0){let t=[],n=[];$l(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var hu={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},gu=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},_u=class{constructor(e){this.manager=e===void 0?gu:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_u.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var vu={},yu=class extends Error{constructor(e,t){super(e),this.response=t}},bu=class extends _u{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=hu.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(vu[e]!==void 0){vu[e].push({onLoad:t,onProgress:n,onError:r});return}vu[e]=[],vu[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=vu[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new yu(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{hu.add(e,t);let n=vu[e];delete vu[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=vu[e];if(n===void 0)throw this.manager.itemError(e),t;delete vu[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},xu=class extends _u{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=hu.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=Ct(`img`);function s(){l(),hu.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Su=class extends _u{constructor(e){super(e)}load(e,t,n,r){let i=new Ut,a=new xu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Cu=class extends Qn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wu=class extends Cu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tu=new V,Eu=new B,Du=new B,Ou=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ku=class extends Ou{constructor(){super(new si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Qe*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Au=class extends Cu{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Qn.DEFAULT_UP),this.updateMatrix(),this.target=new Qn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ju=new V,Mu=new B,Nu=new B,Pu=class extends Ou{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new L(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Mu.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mu),Nu.copy(n.position),Nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nu),n.updateMatrixWorld(),r.makeTranslation(-Mu.x,-Mu.y,-Mu.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}},Fu=class extends Cu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Iu=class extends Ou{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lu=class extends Cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Qn.DEFAULT_UP),this.updateMatrix(),this.target=new Qn,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ru=class extends Cu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},zu=class{static decodeText(e){if(console.warn(`THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.`),typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Bu=class extends _u{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=hu.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return hu.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),hu.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});hu.add(e,s),i.manager.itemStart(e)}},Vu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hu(){return performance.now()}var Uu=`\\[\\]\\.:\\/`,Wu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Gu=`[^\\[\\]\\.:\\/]`,Ku=`[^`+Uu.replace(`\\.`,``)+`]`,qu=`((?:WC+[\\/:])*)`.replace(`WC`,Gu),Ju=`(WCOD+)?`.replace(`WCOD`,Ku),Yu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Gu),Xu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Gu),Zu=RegExp(`^`+qu+Ju+Yu+Xu+`$`),Qu=[`material`,`materials`,`bones`,`map`],$u=class{constructor(e,t,n){let r=n||ed.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ed=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Wu,``)}static parseTrackName(e){let t=Zu.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Qu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ed.Composite=$u,ed.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ed.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ed.prototype.GetterByBindingType=[ed.prototype._getValue_direct,ed.prototype._getValue_array,ed.prototype._getValue_arrayElement,ed.prototype._getValue_toArray],ed.prototype.SetterByBindingTypeAndVersioning=[[ed.prototype._setValue_direct,ed.prototype._setValue_direct_setNeedsUpdate,ed.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ed.prototype._setValue_array,ed.prototype._setValue_array_setNeedsUpdate,ed.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ed.prototype._setValue_arrayElement,ed.prototype._setValue_arrayElement_setNeedsUpdate,ed.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ed.prototype._setValue_fromArray,ed.prototype._setValue_fromArray_setNeedsUpdate,ed.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var td=new V,nd=class{constructor(e,t,n=0,r=1/0){this.ray=new Tn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new In,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(e,t=!0,n=[]){return id(e,this,n,t),n.sort(rd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)id(e[r],this,n,t);return n.sort(rd),n}};function rd(e,t){return e.distance-t.distance}function id(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)id(r[e],t,n,!0)}}var ad=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},od=class extends Je{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var sd={type:`change`},cd={type:`start`},ld={type:`end`},ud=new Tn,dd=new gi,fd=Math.cos(70*I.DEG2RAD),pd=new B,md=2*Math.PI,hd={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gd=1e-6,_d=class extends od{constructor(n,r=null){super(n,r),this.state=hd.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Yt,this._lastTargetPosition=new B,this._quat=new Yt().setFromUnitVectors(n.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ad,this._sphericalDelta=new ad,this._scale=1,this._panOffset=new B,this._rotateStart=new L,this._rotateEnd=new L,this._rotateDelta=new L,this._panStart=new L,this._panEnd=new L,this._panDelta=new L,this._dollyStart=new L,this._dollyEnd=new L,this._dollyDelta=new L,this._dollyDirection=new B,this._mouse=new L,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yd.bind(this),this._onPointerDown=vd.bind(this),this._onPointerUp=bd.bind(this),this._onContextMenu=Dd.bind(this),this._onMouseWheel=Cd.bind(this),this._onKeyDown=wd.bind(this),this._onTouchStart=Td.bind(this),this._onTouchMove=Ed.bind(this),this._onMouseDown=xd.bind(this),this._onMouseMove=Sd.bind(this),this._interceptControlDown=Od.bind(this),this._interceptControlUp=kd.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sd),this.update(),this.state=hd.NONE}update(e=null){let t=this.object.position;pd.copy(t).sub(this.target),pd.applyQuaternion(this._quat),this._spherical.setFromVector3(pd),this.autoRotate&&this.state===hd.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=md:n>Math.PI&&(n-=md),r<-Math.PI?r+=md:r>Math.PI&&(r-=md),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(pd.setFromSpherical(this._spherical),pd.applyQuaternion(this._quatInverse),t.copy(this.target).add(pd),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=pd.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new B(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new B(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=pd.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ud.origin.copy(this.object.position),ud.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ud.direction))<fd?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ud.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gd||this._lastTargetPosition.distanceToSquared(this.target)>gd?(this.dispatchEvent(sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?md/60/60*this.autoRotateSpeed:md/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pd.setFromMatrixColumn(t,0),pd.multiplyScalar(-e),this._panOffset.add(pd)}_panUp(e,t){this.screenSpacePanning===!0?pd.setFromMatrixColumn(t,1):(pd.setFromMatrixColumn(t,0),pd.crossVectors(this.object.up,pd)),pd.multiplyScalar(e),this._panOffset.add(pd)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;pd.copy(r).sub(this.target);let i=pd.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(md*this._rotateDelta.x/t.clientHeight),this._rotateUp(md*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(md*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-md*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(md*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-md*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(md*this._rotateDelta.x/t.clientHeight),this._rotateUp(md*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new L,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function vd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function yd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function bd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(ld),this.state=hd.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function xd(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=hd.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=hd.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=hd.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=hd.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=hd.PAN}break;default:this.state=hd.NONE}this.state!==hd.NONE&&this.dispatchEvent(cd)}function Sd(e){switch(this.state){case hd.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case hd.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case hd.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Cd(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===hd.NONE&&(e.preventDefault(),this.dispatchEvent(cd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ld))}function wd(e){this.enabled!==!1&&this.enablePan!==!1&&this._handleKeyDown(e)}function Td(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=hd.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=hd.TOUCH_PAN;break;default:this.state=hd.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=hd.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=hd.TOUCH_DOLLY_ROTATE;break;default:this.state=hd.NONE}break;default:this.state=hd.NONE}this.state!==hd.NONE&&this.dispatchEvent(cd)}function Ed(e){switch(this._trackPointer(e),this.state){case hd.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case hd.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case hd.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case hd.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=hd.NONE}}function Dd(e){this.enabled!==!1&&e.preventDefault()}function Od(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function kd(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Ad(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var jd=class extends _u{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Id(e)}),this.register(function(e){return new Ld(e)}),this.register(function(e){return new Kd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new Jd(e)}),this.register(function(e){return new zd(e)}),this.register(function(e){return new Bd(e)}),this.register(function(e){return new Vd(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new Fd(e)}),this.register(function(e){return new Ud(e)}),this.register(function(e){return new Rd(e)}),this.register(function(e){return new Gd(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new Nd(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Xd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=zu.extractUrlBase(e);a=zu.resolveURL(t,this.path)}else a=zu.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new bu(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Zd){try{a[K.KHR_BINARY_GLTF]=new ef(e)}catch(e){r&&r(e);return}i=JSON.parse(a[K.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Df(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case K.KHR_MATERIALS_UNLIT:a[t]=new Pd;break;case K.KHR_DRACO_MESH_COMPRESSION:a[t]=new tf(i,this.dracoLoader);break;case K.KHR_TEXTURE_TRANSFORM:a[t]=new nf;break;case K.KHR_MESH_QUANTIZATION:a[t]=new rf;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Md(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var K={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Nd=class{constructor(e){this.parser=e,this.name=K.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new H(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],He);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Lu(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Fu(s),o.distance=c;break;case`spot`:o=new Au(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,yf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Pd=class{constructor(){this.name=K.KHR_MATERIALS_UNLIT}getMaterialType(){return br}extendParams(e,t,n){let r=[];e.color=new H(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],He),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Ve))}return Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Id=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new L(e,e)}return Promise.all(i)}},Ld=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.dispersion=r.dispersion===void 0?0:r.dispersion,Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},zd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new H(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],He)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,Ve)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},Bd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},Vd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new H().setRGB(o[0],o[1],o[2],He),Promise.all(i)}},Hd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new H().setRGB(o[0],o[1],o[2],He),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,Ve)),Promise.all(i)}},Wd=class{constructor(e){this.parser=e,this.name=K.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},Gd=class{constructor(e){this.parser=e,this.name=K.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ql}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Kd=class{constructor(e){this.parser=e,this.name=K.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},qd=class{constructor(e){this.parser=e,this.name=K.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Jd=class{constructor(e){this.parser=e,this.name=K.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Yd=class{constructor(e){this.name=K.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Xd=class{constructor(e){this.name=K.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==cf.TRIANGLES&&e.mode!==cf.TRIANGLE_STRIP&&e.mode!==cf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new V,n=new B,a=new Yt,s=new B(1,1,1),c=new sc(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new $s(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Qn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Zd=`glTF`,Qd=12,$d={JSON:1313821514,BIN:5130562},ef=class{constructor(e){this.name=K.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qd),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zd)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Qd,i=new DataView(e,Qd),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===$d.JSON){let r=new Uint8Array(e,Qd+a,t);this.content=n.decode(r)}else if(r===$d.BIN){let n=Qd+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},tf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=K.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=pf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=pf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=lf[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,He,n)})})}},nf=class{constructor(){this.name=K.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},rf=class{constructor(){this.name=K.KHR_MESH_QUANTIZATION}},af=class extends eu{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},of=new Yt,sf=class extends af{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return of.fromArray(i).normalize().toArray(i),i}},cf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lf={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uf={9728:o,9729:l,9984:s,9985:u,9986:c,9987:d},df={33071:i,33648:a,10497:r},ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},mf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},hf={CUBICSPLINE:void 0,LINEAR:Ne,STEP:Me},gf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function _f(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Kl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function vf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function yf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function bf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function xf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Sf(e){let t,n=e.extensions&&e.extensions[K.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Cf(n.attributes):e.indices+`:`+Cf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Cf(e.targets[n]);return t}function Cf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function wf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Tf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Ef=new V,Df=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Md,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Su(this.options.manager):new Bu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bu(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return vf(i,a,r),yf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[K.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(zu.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=ff[r.type],t=lf[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Cr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=ff[r.type],o=lf[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Fs(f,u/s),t.cache.add(n,c)),p=new Ls(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Cr(f,a,d);if(r.sparse!==void 0){let t=ff.SCALAR,n=lf[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Cr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=uf[n.magFilter]||1006,t.minFilter=uf[n.minFilter]||1008,t.wrapS=df[n.wrapS]||1e3,t.wrapT=df[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Ut(e);t.needsUpdate=!0,n(t)}),t.load(zu.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),yf(e,a),e.userData.mimeType=a.mimeType||Tf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[K.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[K.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[K.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Sc,yr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new cc,yr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Kl}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[K.KHR_MATERIALS_UNLIT]){let e=r[K.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new H(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],He),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Ve)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||gf.OPAQUE;if(l===gf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===gf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==br&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new L(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==br&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==br){let e=i.emissiveFactor;o.emissive=new H().setRGB(e[0],e[1],e[2],He)}return i.emissiveTexture!==void 0&&a!==br&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Ve)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),yf(n,i),t.associations.set(n,{materials:e}),i.extensions&&vf(r,n,i),n})}createUniqueName(e){let t=ed.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[K.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return kf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Sf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[K.KHR_DRACO_MESH_COMPRESSION]?i(o):kf(new Pr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?_f(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===cf.TRIANGLES||u.mode===cf.TRIANGLE_STRIP||u.mode===cf.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new qs(l,f):new U(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===cf.TRIANGLE_STRIP?d.geometry=Ad(d.geometry,1):u.mode===cf.TRIANGLE_FAN&&(d.geometry=Ad(d.geometry,2));else if(u.mode===cf.LINES)d=new bc(l,f);else if(u.mode===cf.LINE_STRIP)d=new gc(l,f);else if(u.mode===cf.LINE_LOOP)d=new xc(l,f);else if(u.mode===cf.POINTS)d=new Dc(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&xf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),yf(d,i),u.extensions&&vf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&vf(r,c[0],i),c[0];let l=new xs;i.extensions&&vf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new si(I.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Ni(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new V;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Qs(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new fu(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Ef)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Js:t.length>1?new xs:t.length===1?t[0]:new Qn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),yf(o,i),i.extensions&&vf(n,o,i),i.matrix!==void 0){let e=new V;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new xs;n.name&&(i.name=r.createUniqueName(n.name)),yf(i,n),n.extensions&&vf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof yr||e instanceof Ut)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];mf[i.path]===mf.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(mf[i.path]){case mf.weights:c=su;break;case mf.rotation:c=lu;break;case mf.position:case mf.scale:c=du;break;default:switch(n.itemSize){case 1:c=su;break;default:c=du}}let l=r.interpolation===void 0?Ne:hf[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+mf[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=wf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof lu?sf:af)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Of(e,t,n){let r=t.attributes,i=new Qt;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new B(t[0],t[1],t[2]),new B(a[0],a[1],a[2])),e.normalized){let t=wf(lf[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new B,t=new B;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=wf(lf[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function kf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=pf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return z.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${z.workingColorSpace}" not supported.`),yf(e,t),Of(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:bf(e,t.targets,n)})}var Af=class e extends U{constructor(){let t=e.SkyShader,n=new ni({name:t.name,uniforms:$r.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new Jr(1,1,1),n),this.isSky=!0}};Af.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new B},up:{value:new B(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var jf=class extends Qn{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new L(.5,.5),this.addEventListener(`removed`,function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},Mf=new B,Nf=new V,Pf=new V,Ff=new B,If=new B,Lf=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Nf.copy(t.matrixWorldInverse),Pf.multiplyMatrices(t.projectionMatrix,Nf),l(e,e,t),f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){Mf.setFromMatrixPosition(e.matrixWorld),Mf.applyMatrix4(Pf);let c=Mf.z>=-1&&Mf.z<=1&&e.layers.test(r.layers)===!0,l=e.element;l.style.display=c===!0?``:`none`,c===!0&&(e.onBeforeRender(t,n,r),l.style.transform=`translate(`+-100*e.center.x+`%,`+-100*e.center.y+`%)translate(`+(Mf.x*i+i)+`px,`+(-Mf.y*a+a)+`px)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r));let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Ff.setFromMatrixPosition(e.matrixWorld),If.setFromMatrixPosition(t.matrixWorld),Ff.distanceToSquared(If)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},Rf={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},zf=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Bf=new Ni(-1,1,1,-1,0,1),Vf=new class extends Pr{constructor(){super(),this.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Er([0,2,0,0,2,0],2))}},Hf=class{constructor(e){this._mesh=new U(Vf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Uf=class extends zf{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof ni?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$r.clone(e.uniforms),this.material=new ni({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Wf=class extends zf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Gf=class extends zf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Kf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:y}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uf(Rf),this.copyPass.material.blending=0,this.clock=new Vu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Wf!==void 0&&(r instanceof Wf?n=!0:r instanceof Gf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},qf=class extends zf{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Jf={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Yf=class e extends zf{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new H(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(i,a,{type:y}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Kt(i,a,{type:y});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Kt(i,a,{type:y});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Jf;this.highPassUniforms=$r.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ni({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Rf;this.copyUniforms=$r.clone(l.uniforms),this.blendMaterial=new ni({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new H,this.oldClearAlpha=1,this.basic=new br,this.fsQuad=new Hf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ni({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ni({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Yf.BlurDirectionX=new L(1,0),Yf.BlurDirectionY=new L(0,1);var Xf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Zf=class extends zf{constructor(){super();let e=Xf;this.uniforms=$r.clone(e.uniforms),this.material=new Gl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},z.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7&&(this.material.defines.NEUTRAL_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Qf=`chaco_canyon_lang`,$f={ko:{brandTitle:`차코 캐니언`,brandSub:`푸에블로 보니토 • 서기 850–1150년`,modeOrbit:`와이드 조감도`,modeGuided:`가이드 투어`,modeWalk:`자유 보행`,btnRooms:`방 탐색`,btnFloorplan:`2D 평면도`,btnArchive:`기록 보관소`,btnRecord:`녹화`,btnRecording:`녹화 중지`,btnCleanView:`UI 숨기기 (단축키: H)`,btnLangToggle:`한국어`,langToggleTitle:`언어 전환 / Switch to English`,aspectAuto:`자동 맞춤`,aspect16_9:`16:9 가로`,aspect9_16:`9:16 세로`,aspectTitleAuto:`임베드 창 크기 자동 맞춤 (16:9 / 9:16)`,aspectTitle16_9:`16:9 가로형 블로그 프레임 고정`,aspectTitle9_16:`9:16 세로형 모바일 블로그 프레임 고정`,heroEyebrow:`0.5m LiDAR 및 고고학 실측 측량 • 북위 36.0605°, 서경 107.9616°`,heroStats:{roomsVal:`~800개`,roomsLbl:`전체 방 (433개 GIS 폴리곤)`,southWallVal:`~175m`,southWallLbl:`남측 성벽 (162–175m)`,stopsVal:`12개 방`,stopsLbl:`핵심 큐레이션 탐방로`,dendroVal:`서기 850–1130`,dendroLbl:`연륜 연대 측정 범위`},btnStartWalkthrough:`가이드 룸 투어 시작`,btnEnterFreeWalk:`광장 내부 걷기 (WASD)`,elevPlaza:`광장 1.8m`,elevTerrace:`테라스 5.5m`,elevRoof:`지붕 9.5m`,btnCycleElev:`↕ 높이: `,btnAutoOrbit:`↻ 자동 회전`,btnWideShot:`↺ 넓은 시야`,btnFullscreen:`⛶ 전체 화면`,dossierCategoryVerified:`검증된 발굴 기록`,dossierCategoryFootprint:`지리참조 폴리곤 (구역 편년)`,dossierStopPrefix:`탐방 지점`,dossierOf:`/`,lblMasonry:`석조 양식`,lblDendro:`연륜 연대 / 편년`,lblDimensions:`복원 상태`,lblArea:`측량 기록`,lblSummaryVerified:`공식 고고학 발굴 기록`,lblSummaryGeneric:`지리참조 건축 기록`,lblArtifactsVerified:`출토 유물 및 학술 증거`,lblArtifactsGeneric:`보관 및 발굴 현황`,tabDiagram:`📐 개략 도면`,tabPhoto:`📷 LiDAR / HABS / NPS`,btnStepInside:`🚶 방 내부 보기`,btnOrbitRoom:`🦅 방 주위 회전`,btnNextRoom:`다음 방 →`,btnPrevRoom:`← 이전 방`,roomSideUnfocusTitle:`닫기 및 전체 전경 복귀 (Esc)`,dossierCloseTitle:`방 상세 패널 닫기`,reopenDossierTitle:`‹ 방 상세 정보 열기`,btnGuidedWalkStart:`자동 가이드 투어`,btnGuidedWalkPause:`자동 투어 일시정지`,walkHint:`<b>WASD / 방향키</b> 보행 • <b>드래그</b> 360° 시선 • <b>바닥 클릭</b> 이동 • <b>방 핀 클릭</b> 탐색`,exploreHud:`<b>드래그</b> 360° 회전 • <b>우클릭 드래그</b> 시점 이동 • <b>스크롤</b> 줌 • <b>방/핀 클릭</b> 탐색`,walkPadTurnLeft:`↶ 좌회전`,walkPadLeft:`◀ 좌측`,walkPadForward:`▲ 전진`,walkPadBack:`▼ 후진`,walkPadRight:`▶ 우측`,walkPadTurnRight:`↷ 우회전`,seasonEquinox:`춘분/추분`,seasonSummer:`하지`,seasonWinter:`동지`,compassTitleEquinox:`춘분 및 추분 (90° E ↔ 270° W): 클릭 시 일출(90°), 정오(180°), 일몰(270°) 순환`,compassTitleSummer:`하지 (60° ENE ↔ 300° WNW): 클릭 시 하지 일출(60°), 정오, 일몰(300°) 순환`,compassTitleWinter:`동지 (120° ESE ↔ 240° WSW): 클릭 시 동지 일출(120°), 정오, 일몰(240°) 순환`,compassInfoBtnTitle:`동서·남북 방위 및 하지/동지 정렬 (NASA EO-5678, Sofaer 1997)`,compassInfoHeading:`방위 및 지점 정렬 축 (북위 36.06°)`,compassInfoDesc:`푸에블로 보니토에서 정밀 실측된 건축 및 천문 방위각 정렬 (Sofaer 1997; Farmer 2003; NASA EO-5678):`,compassInfoWall:`동–서 남측 성벽 (90°↔270°): 동서 축선으로 완벽히 정렬되어 춘분과 추분의 일출(90° E) 및 일몰(270° W)과 일치합니다.`,compassInfoMeridian:`남–북 중앙 분할벽 (0°↔180°): 중앙 광장을 진북-진남 자오선(정오 태양 그림자 축)을 따라 정확히 양분합니다.`,compassInfoSolstice:`지점 지평선 이동각 (60°–120°): 일출 각도가 하지의 약 60.5°(북동동)에서 동지의 약 119.5°(남동동)까지 왕복합니다 (228호실 코너 창문 정렬).`,solarLightingHeader:`태양광 조명 (북위 36.06°)`,sunTimeLabel:`태양 시간`,presetGoldenHour:`🌅 골든 아워 부조광`,presetRakingSunset:`🔥 석양 사광`,presetEquinoxSunrise:`🌄 춘분 일출`,presetWinterSolstice:`❄️ 동지 일출`,presetHighNoon:`☀️ 정오 태양`,presetNightKiva:`🌌 밤의 키바 화톳불`,phasesHeader:`건축 편년 단계 (서기 850–1115년)`,phaseAll:`전체 시기`,phaseStage1:`1단계: 850년`,phaseStage2:`2단계: 1040년`,phaseStage3:`3단계: 1060년`,phaseStage4:`4단계: 1085년+`,chkLabels:`3D 방 핀`,chkAlignments:`태양 광선 축`,chkRoofs:`소나무 비가 서까래 (복원)`,chkRockfall:`1941년 암벽 붕괴`,mapDrawerTitle:`지리참조 평면도 (433개 폴리곤: 403개 지상/반지하 + 30개 지하 층)`,mapDrawerSub:`임의의 방, 키바, 또는 발광 탐색 점을 클릭하면 해당 위치로 즉시 이동합니다`,mapSearchPlaceholder:`33호실, 28호실, 대형 키바 A, 249호실 검색...`,mapSearchBtn:`이동`,legOldBonito:`올드 보니토 (850년)`,legSpine:`4층 북측 척추부`,legWings:`측익부 (1–3층)`,legKivas:`키바 (35개+)`,legGuided:`가이드 추천 방`,legCamera:`현재 시점`,atlasModalTitle:`차코 캐니언 0.5m LiDAR, HABS No. NM-30 및 NPS 고고학 아틀라스`,atlasModalSub:`OpenTopography 0.5m 항공 LiDAR(OT.042019.6342.1), 미국 의회도서관 HABS No. NM-30 실측 도면 및 미국 국립공원관리청(NPS) 공식 조사에 기초함`,atlasTab1:`1. 0.5m LiDAR 분석, 3D 렌더 및 HABS/NPS 아카이브`,atlasTab2:`2. 파하다 뷰트 선 대거(Sun Dagger) 시뮬레이터`,atlasTab3:`3. 차코 석조 건축 양식 분류 (Type I–IV)`,atlasTab4:`4. 1차 연구 및 실측 데이터 출처 (10개 출처)`,sunDaggerHeading:`파하다 뷰트(Fajada Butte) 3개 암석판 선 대거(29SJ297) 및 천문 방위각 우주관`,sunDaggerDesc1:`차코 캐니언 남동쪽 입구에 135m 높이로 솟은 파하다 뷰트(Tsé Diyilí) 꼭대기에는 1977년 안나 소파이어(Anna Sofaer)가 기록한 세 암석판 유적(Three-Slab Site, 29SJ297)이 위치합니다. 2~3m 높이의 거대한 사암 석판 세 개가 좁은 태양 광선 슬릿("빛의 칼날")을 뒤편 암벽의 나선형 암각화 위에 투영합니다:`,sunDaggerPoint1:`하지 정오 (6월 21일경): 단 하나의 수직 빛줄기가 9.5바퀴 대형 나선 암각화의 정중앙을 수직으로 관통합니다.`,sunDaggerPoint2:`동지 정오 (12월 21일경): 두 개의 평행한 빛줄기가 대형 나선의 바깥쪽 좌우 접선을 감싸며 중앙은 어둠으로 남깁니다.`,sunDaggerPoint3:`춘분 및 추분 정오: 하나의 빛줄기가 대형 나선 중앙과 우측 사이를 지나고, 두 번째 빛줄기가 좌상단 2.5바퀴 소형 나선의 중심을 정확히 꿰뚫습니다.`,sunDaggerPoint4:`18.6년 달의 극대/극소 주기: 월출 시 그림자 모서리가 9.5바퀴 나선의 중심(극소 정지)과 좌측 끝(극대 정지)에 정렬되며, 19개의 대각 홈이 18.6년 백도 교점 주기와 일치합니다.`,sunDaggerDesc2:`캐니언 바닥의 푸에블로 보니토, 케트로 케틀, 카사 린코나다는 이러한 천문학적 축을 거대한 건축 규모로 구현했습니다. 푸에블로 보니토의 중앙 분할벽은 진북-진남 자오선을 따르고, 남측 성벽은 춘추분 일출/일몰과 완벽히 일치하며, 남동쪽 228호실 코너 창문은 동지 일출 각도(~120° ESE)에 정렬되어 있습니다.`,sdBtnSummer:`하지 (여름)`,sdBtnEquinox:`춘분 / 추분`,sdBtnWinter:`동지 (겨울)`,sdBtnLunar:`달의 18.6년 주기`},en:{brandTitle:`CHACO CANYON`,brandSub:`Pueblo Bonito • AD 850–1150`,modeOrbit:`Wide Orbit`,modeGuided:`Guided Walkthrough`,modeWalk:`Free Walk`,btnRooms:`Rooms`,btnFloorplan:`Floorplan`,btnArchive:`Archive`,btnRecord:`Record`,btnRecording:`Stop Record`,btnCleanView:`Toggle Clean HUD (Shortcut: H)`,btnLangToggle:`English`,langToggleTitle:`언어 전환 / Switch to Korean`,aspectAuto:`Auto`,aspect16_9:`16:9`,aspect9_16:`9:16`,aspectTitleAuto:`Auto-fit enclosing iframe (16:9 or 9:16)`,aspectTitle16_9:`Lock 16:9 Landscape Blog Embed Frame`,aspectTitle9_16:`Lock 9:16 Vertical Blog Embed Frame`,heroEyebrow:`0.5m LIDAR & ARCHAEOLOGICAL SURVEY • 36.0605°N, 107.9616°W`,heroStats:{roomsVal:`~800`,roomsLbl:`Total Rooms (433 GIS Polygons)`,southWallVal:`~175m`,southWallLbl:`South Wall (162–175m)`,stopsVal:`12 Rooms`,stopsLbl:`Curated Stops`,dendroVal:`AD 850–1130`,dendroLbl:`Tree-Ring Span`},btnStartWalkthrough:`Start Guided Room Walkthrough`,btnEnterFreeWalk:`Walk Inside Plaza (WASD)`,elevPlaza:`Plaza 1.8m`,elevTerrace:`Terrace 5.5m`,elevRoof:`Roof 9.5m`,btnCycleElev:`↕ Level: `,btnAutoOrbit:`↻ Auto-Orbit`,btnWideShot:`↺ Wide Shot`,btnFullscreen:`⛶ Fullscreen`,dossierCategoryVerified:`VERIFIED EXCAVATION RECORD`,dossierCategoryFootprint:`GEOREFERENCED FOOTPRINT (SECTOR PHASE)`,dossierStopPrefix:`STOP`,dossierOf:`OF`,lblMasonry:`MASONRY`,lblDendro:`TREE-RING / DATING`,lblDimensions:`RECONSTRUCTION STATUS`,lblArea:`SURVEY RECORD`,lblSummaryVerified:`PUBLISHED ARCHAEOLOGICAL RECORD`,lblSummaryGeneric:`GEOREFERENCED ARCHITECTURAL RECORD`,lblArtifactsVerified:`EXCAVATED ARTIFACTS & EVIDENCE`,lblArtifactsGeneric:`ARCHIVAL & EXCAVATION STATUS`,tabDiagram:`📐 Schematic Diagram`,tabPhoto:`📷 LiDAR / HABS / NPS`,btnStepInside:`🚶 Step Inside View`,btnOrbitRoom:`🦅 Orbit Room`,btnNextRoom:`Next Room →`,btnPrevRoom:`← Prev`,roomSideUnfocusTitle:`Close & return to full ruin (Esc)`,dossierCloseTitle:`Collapse Room Dossier`,reopenDossierTitle:`‹ Room Dossier`,btnGuidedWalkStart:`Auto-Guide Tour`,btnGuidedWalkPause:`Pause Auto-Guide`,walkHint:`<b>WASD / Arrows</b> Walk • <b>Drag</b> Look 360° • <b>Click Ground</b> Walk To • <b>Click Room Pin</b> Inspect`,exploreHud:`<b>Drag</b> Orbit 360° • <b>Right-Drag</b> Pan • <b>Scroll</b> Zoom • <b>Click Any Room or Pin</b> Explore`,walkPadTurnLeft:`↶ Turn Left`,walkPadLeft:`◀ Left`,walkPadForward:`▲ Walk`,walkPadBack:`▼ Back`,walkPadRight:`▶ Right`,walkPadTurnRight:`↷ Turn Right`,seasonEquinox:`Equinox`,seasonSummer:`Summer`,seasonWinter:`Winter`,compassTitleEquinox:`Spring & Autumn Equinox (90° E ↔ 270° W): Click to cycle Sunrise (90° E), Noon (180° S), and Sunset (270° W)`,compassTitleSummer:`Summer Solstice (60° ENE ↔ 300° WNW): Click to cycle Sunrise (60° ENE), Noon (180° S), and Sunset (300° WNW)`,compassTitleWinter:`Winter Solstice (120° ESE ↔ 240° WSW): Click to cycle Sunrise (120° ESE), Noon (180° S), and Sunset (240° WSW)`,compassInfoBtnTitle:`Cardinal & Solstice Alignments (Sofaer 1997; NASA EO-5678)`,compassInfoHeading:`CARDINAL & SOLSTICE AXES (36.06°N)`,compassInfoDesc:`Measured architectural and solar azimuth alignments documented at Pueblo Bonito (Sofaer 1997; Farmer 2003; NASA EO-5678):`,compassInfoWall:`E–W Southern Wall (90°↔270°): Oriented East–West; aligns with Equinox sunrise (90° E) and sunset (270° W).`,compassInfoMeridian:`N–S Dividing Wall (0°↔180°): Bisects the central court along the True North–South meridian (Solar Noon shadow axis).`,compassInfoSolstice:`Solstice Horizon Swing (60°–120°): Sunrise shifts from ~60.5° ENE (Summer Solstice) to ~119.5° ESE (Winter Solstice; Room 228 corner window, Reyman 1976).`,solarLightingHeader:`SOLAR LIGHTING (36.06°N)`,sunTimeLabel:`Sun Time`,presetGoldenHour:`🌅 Golden Hour Relief`,presetRakingSunset:`🔥 Deep Raking Sunset`,presetEquinoxSunrise:`🌄 Equinox Sunrise`,presetWinterSolstice:`❄️ Winter Solstice`,presetHighNoon:`☀️ High Noon`,presetNightKiva:`🌌 Night Kiva Fires`,phasesHeader:`CONSTRUCTION PHASES (AD 850–1115)`,phaseAll:`All Phases`,phaseStage1:`I: AD 850`,phaseStage2:`II: AD 1040`,phaseStage3:`III: AD 1060`,phaseStage4:`IV: AD 1085+`,chkLabels:`3D Room Pins`,chkAlignments:`Solar Sightlines`,chkRoofs:`Pine Vigas (Reconstructed)`,chkRockfall:`1941 Rockfall`,mapDrawerTitle:`GEOREFERENCED FLOORPLAN (433 POLYGONS: 403 ACTIVE + 30 SUB-COURT)`,mapDrawerSub:`Click any room, kiva, or glowing cyan discovery dot to walk/fly there`,mapSearchPlaceholder:`Search Room 33, Room 28, Kiva A, Room 249…`,mapSearchBtn:`Go`,legOldBonito:`Old Bonito (AD 850)`,legSpine:`4-Story Spine`,legWings:`Wings (1–3S)`,legKivas:`Kivas (35+)`,legGuided:`Guided Room`,legCamera:`Camera`,atlasModalTitle:`CHACO CANYON 0.5m LIDAR, HABS NO. NM-30 (LOC nm0107) & NPS ARCHAEOLOGICAL ATLAS`,atlasModalSub:`Grounded in OpenTopography 0.5m Airborne LiDAR (OT.042019.6342.1), Historic American Buildings Survey HABS No. NM-30 (LOC nm0107), and NPS Surveys`,atlasTab1:`1. 0.5m LiDAR Breakdowns, 3D Renders & HABS/NPS Archive`,atlasTab2:`2. Fajada Butte Sun Dagger Simulator`,atlasTab3:`3. Chacoan Masonry Typology (Types I–IV)`,atlasTab4:`4. Primary Data Archive Links (10 Sources)`,sunDaggerHeading:`Fajada Butte Three-Slab Sun Dagger (29SJ297) & Cardinal Cosmology`,sunDaggerDesc1:`Rising 135 meters above the southeastern entrance of Chaco Canyon, Fajada Butte (Tsé Diyilí) houses the Three-Slab Site (29SJ297) documented by Anna Sofaer in 1977. Three leaning slabs of Cliff House Sandstone (~2–3 m tall) channel narrow slivers of sunlight onto two pecked spiral petroglyphs on the cliff face behind them:`,sunDaggerPoint1:`Summer Solstice Noon (June 21): A single vertical light dagger pierces the exact center of the large 9.5-turn spiral petroglyph.`,sunDaggerPoint2:`Winter Solstice Noon (Dec 21): Two parallel light daggers bracket the exact outer left and right tangents of the large spiral, leaving its center dark.`,sunDaggerPoint3:`Spring & Autumnal Equinoxes: One dagger falls midway between the center and right edge of the large spiral, while a second dagger pierces the exact center of the smaller 2.5-turn spiral to the upper left.`,sunDaggerPoint4:`18.6-Year Lunar Major & Minor Standstills: Moonrise shadow edges align with the center (minor standstill) and left tangent (major standstill) of the 9.5-turn spiral, with 19 diagonal grooves matching the 18.6-year lunar nodal cycle.`,sunDaggerDesc2:`Across the canyon floor below, Pueblo Bonito, Chetro Ketl, and Casa Rinconada encode these same astronomical axes at monumental scale: Pueblo Bonito's central dividing wall follows the true North–South cardinal meridian, while its southern closing wall aligns to the East–West equinox sunrise/sunset, and Room 228 features exterior corner windows aligned to the Winter Solstice sunrise (~120° ESE).`,sdBtnSummer:`Summer Solstice`,sdBtnEquinox:`Equinox`,sdBtnWinter:`Winter Solstice`,sdBtnLunar:`Lunar Standstill`}},ep={overview:{ko:{shortTitle:`와이드 조감도`,fullTitle:`1구역 • 3D 건축 복원 (0.5m LiDAR 및 고고학 실측 측량)`,heroTitle:`푸에블로 보니토 대형 주택 및 차크라 메사 절벽`,heroDesc:`남측 성벽 <strong>~175m(162–175m) × 98m</strong> 규모에 <strong>433개의 지리참조 폴리곤</strong>(403개 지상/반지하 건축물 + 30개 지하 층; 복원 시 최대 4층/~14.0m에 이르는 800여 개 방)과 동서 광장을 둘러싼 <strong>35개 이상의 의식용 키바</strong>를 갖춘 고대 아메리카 최대의 대형 주택(Great House)입니다. OpenTopography 0.5m 항공 LiDAR(OT.042019.6342.1)와 미국 국립공원관리청(NPS), 의회도서관 HABS No. NM-30 실측 조사 자료를 정밀하게 통합하여 복원했습니다.`},en:{shortTitle:`Wide Overview`,fullTitle:`SECTION I • 3D ARCHITECTURAL RECONSTRUCTION (0.5m LIDAR & ARCHAEOLOGICAL SURVEY)`,heroTitle:`Pueblo Bonito Great House & Chacra Mesa Escarpment`,heroDesc:`Spanning <strong>~175 m (162–175 m) × 98 m</strong> with <strong>433 georeferenced polygons</strong> (403 active ground/recessed features + 30 buried sub-court features; ~800 total multi-story rooms rising up to a reconstructed 4 stories / ~9.8–14.0 m) and <strong>35+ ceremonial kivas</strong> flanking open East and West Courts, this 3D interpretive reconstruction extrudes the 0.5m airborne LiDAR (OpenTopography OT.042019.6342.1), HABS No. NM-30 (LOC Item nm0107), and NPS measured surveys.`}},old_bonito:{ko:{shortTitle:`올드 보니토 핵심부`,fullTitle:`2구역 • 올드 보니토 기원 핵 (1단계: 서기 850–935+)`,heroTitle:`9세기 초승달형 건축핵, 모계 묘실 및 제의 저장소`,heroDesc:`1형 판상 사암 석조(서기 850–935년경)로 축조된 북서쪽 올드 보니토 원호형 구역입니다. 33호실(서기 800–1130년의 14구 유골, 미토콘드리아 DNA B2y1 하플로타입을 100% 공유하는 모계 혈통 확인, 56,000점 이상의 터키석 출토; Kennett et al. 2017), 28호실(약 174점의 토기 완형 및 원통형 카카오 잔 111–112점, 카카오 테오브로민 성분 검출), 32호실(375점 이상의 의식용 지팡이), 38호실(14마리의 금강앵무 유골 및 두꺼운 조류 배설물 퇴적층, 흑옥 개구리 상)이 밀집되어 있습니다.`},en:{shortTitle:`Old Bonito Core`,fullTitle:`SECTION II • OLD BONITO NUCLEUS (STAGE I: AD 850–935+)`,heroTitle:`The 9th-Century Crescent, Mortuary Crypt & Ritual Repositories`,heroDesc:`Built of Type I tabular sandstone slabs (c. AD 850–935), the northwestern Old Bonito arc contains Room 33 (14 burials dated AD 800–1130, 9/9 sequenced sharing mtDNA haplotype B2y1, >56,000 turquoise items; Kennett et al. 2017), Room 28 (~174 whole ceramic vessels including ~111–112 Chacoan cylinder jars plus absorbed Theobroma cacao residue; Crown & Hurst 2009), Room 32 (375+ ceremonial staffs), and Room 38 (14 scarlet macaw skeletons; Watson et al. 2015).`}},kivas:{ko:{shortTitle:`대형 키바 & 광장`,fullTitle:`3구역 • 대형 키바 A 및 동서 이중 광장 (서기 1075–1115년경)`,heroTitle:`반지하 성소, 바닥 공명실 및 자오선 광장`,heroDesc:`남북 중앙 분할벽에 의해 동쪽 광장과 서쪽 광장으로 양분된 공간입니다. 동쪽 광장의 대형 키바 A는 북쪽 전용 계단으로 진입하며, 4개의 거대한 방형 석조 기둥이 지탱하는 소나무 목재 지붕(약 2.9m 높이), 원형 석조 벤치, 34개의 벽면 벽감, 중앙 화덕 및 바닥 매립형 석조 공명실(Vaults)을 갖추고 있습니다.`},en:{shortTitle:`Great Kivas & Plaza`,fullTitle:`SECTION III • GREAT KIVA A & OPEN DUAL COURTS (APPROX. AD 1075–1115)`,heroTitle:`Recessed Sanctuaries, Subfloor Vaults & Cardinal Plaza`,heroDesc:`Divided by a North–South wall into open East and West Courts, Pueblo Bonito’s plazas include Great Kiva A (built approx. AD 1075–1115)—entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 wall niches, with a reconstructed timber roof supported by four large square rubble-filled masonry columns, a raised central firebox, and paired subfloor masonry vaults.`}},east_wing:{ko:{shortTitle:`동익부 & 하지/동지 관측소`,fullTitle:`4구역 • 전성기 동익부, 공방 구역 및 천문 관측소 (서기 1050–1110년)`,heroTitle:`249호실 금강앵무 사육실, 168호실 터키석 공방 및 228호실 동지 일출 창문`,heroDesc:`심재-외벽(Core-and-Veneer) 사암 석조로 건축된 동쪽 및 남동쪽 윙입니다. 249호실(금강앵무 유골 3구와 횃대, 조류 분변 바닥), HABS No. NM-30 5번에 실측된 T자형 문(226호실) 및 코너 출입구(225호실), 168호실(남동부 터키석 세공 및 공예 공방), 225/228호실(방위각 약 120° 남동동 동지 일출 광선이 반대편 벽면을 비추는 외부 코너 창문)이 위치합니다.`},en:{shortTitle:`East Wing & Solstice`,fullTitle:`SECTION IV • CLASSIC EAST WING, CRAFT SECTOR & SOLAR OBSERVATORIES (AD 1050–1110)`,heroTitle:`Room 249 Macaw Aviary, Room 168 Lapidary & Craft Area & Solstice Windows`,heroDesc:`Built in core-and-veneer sandstone masonry, the East and Southeast Wings include Room 249 (3 Scarlet Macaw skeletons, perches, adobe bowls & guano floor; Judd 1954), nearby Section No. 1 rooms (Rooms 174–177, 225–226) documented in HABS No. NM-30, Room 168 (lapidary and craft activity area), and Rooms 225 & 228 (~120° ESE Winter Solstice sunrise corner windows; Reyman 1976).`}},west_spine:{ko:{shortTitle:`서측 묘역 & 1941 암벽 붕괴`,fullTitle:`5구역 • 서측 묘실 클러스터 및 1941년 위협하는 바위(Threatening Rock) 붕괴`,heroTitle:`326호실 서측 묘실 및 1941년 사암 거석 붕괴 너덜지대`,heroDesc:`푸에블로 보니토에서 가장 초기에 축조된 서측 블록(서기 860–935년경)에 속하는 326호실은 서측 묘실 클러스터(320, 326, 329, 330호실)의 일부로, 재평가 결과 12명의 유골(성인 11명[여성 10, 남성 1] 및 영아 1명)이 확인되었습니다. 북동쪽 절벽 뒤편에서는 약 3만 톤 무게의 '위협하는 바위(Tsé Bíyah Aniiʼáhí)' 사암 거석이 1941년 1월 22일 붕괴하여 북측 외벽과 65개 방을 덮친 역사적 현장입니다.`},en:{shortTitle:`Western Burials & Rockfall`,fullTitle:`SECTION V • WESTERN BURIAL CLUSTER & 1941 THREATENING ROCK COLLAPSE`,heroTitle:`Room 326 Western Burial Cluster Chamber & 1941 Threatening Rock Talus`,heroDesc:`In one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935 construction), Room 326 formed part of the Western Burial Cluster (Rooms 320, 326, 329, 330); osteological reassessment identified 12 individuals (11 adults [10 females, 1 male] and 1 infant). Along the northeastern cliff, the ~30,000-ton Threatening Rock monolith collapsed on January 22, 1941.`}},greater_chaco:{ko:{shortTitle:`서측 광장 & 키바 Q`,fullTitle:`6구역 • 서측 광장, 대형 키바 Q 및 4층 북측 척추부`,heroTitle:`대형 키바 Q, 개방형 서측 광장 및 복원된 4층 높이 북측 외벽`,heroDesc:`남북 분할벽 서편의 개방된 서측 광장 중심에는 대형 키바 Q(11세기 중엽 추정, 대형 키바 A보다 선행)가 위치합니다. 원형 석조 소켓에 안치된 4개의 거대한 원목 지붕 기둥(대형 키바 A의 사각 석조 기둥과 구조적 대조)과 바닥 공명실, 남쪽 진입 계단을 갖추고 있으며, 북쪽으로는 4층 높이(~14m)로 우뚝 솟은 북측 척추부(14/85호실)로 이어집니다.`},en:{shortTitle:`West Court & Kiva Q`,fullTitle:`SECTION VI • WEST COURT PLAZA, GREAT KIVA Q & 4-STORY SPINE`,heroTitle:`Great Kiva Q, The Open West Court & Reconstructed Four-Story Northern Spine`,heroDesc:`West of the North–South dividing wall, the open West Court plaza centers on Great Kiva Q (Classic Bonito Phase, probably mid-11th century and predating Great Kiva A), equipped with four large wooden roof-support posts seated in circular masonry settings, paired rectangular subfloor vaults, and southern entry stairway, rising northward to the reconstructed 4-story Northern Spine (Room 14/85).`}}},tp={pueblo_bonito_380:{ko:{chipLabel:`01 • 33호 묘실`,shortPin:`33호실 • 엘리트 묘실`,beaconLabel:`33호실: 모계 혈통 묘실 (14구 매장 • 9/9 전원 B2y1 mtDNA)`,tinyEra:`1단계 올드 보니토 기원 핵 • 서기 850–935년 (매장 서기 800–1130년)`,tinyTitle:`33호실 — 모계 엘리트 묘실 (ROOM 33 CRYPT)`,tinyDesc:`상층 58호실 아래 위치한 지상층 묘실. 14구의 매장(서기 800–1130년), 56,000점 이상의 터키석 유물, 유전자 분석된 9명 모두가 동일한 모계 미토콘드리아 DNA(B2y1)를 공유하는 지배 가문의 묘역입니다.`,keyPoints:[`건축 및 복원: 상층 58호실 아래 위치한 1형 판상 사암 묘실입니다. 상층 구조와 소나무 서까래, 손으로 깎은 소나무 널빤지 바닥 분할은 1896년 페퍼(Pepper)의 발굴 기록에 기초한 해석적 복원입니다.`,`층위 및 부장품 (Pepper 1909, 1920): 소나무 널판 바닥 아래층에서 14호(서기 800–850년; 터키석 11,200점 이상, 조개 패물 3,300점 이상, 전복, 소라고둥 나팔) 및 13호(터키석 5,800점 이상) 유골이 발굴되었으며, 바닥 위층에서 12구의 매장(터키석 총 56,000점 이상, 목제 플루트, 모자이크 바구니)이 출토되었습니다.`,`고유전체학 분석 (Kennett et al. 2017 Nature Communications): 9구의 전장 미토콘드리아 게놈이 100% 동일(B2y1 하플로타입)하여, 약 330년간(서기 800–1130년) 어머니-딸, 할머니-손자 관계로 이어지는 모계 혈통 엘리트 가문임이 입증되었습니다.`],artCaption:`페퍼(Pepper 1909, 1920) 및 케넷(Kennett et al. 2017): 33호실 (14구 매장, 56,000점 이상 터키석, 9/9 B2y1 mtDNA)`,photoCap:`퍼블릭 도메인 (Pepper 1920, AMNH Vol. 27): 33호실에서 출토된 조각 목제 플루트 악기`},en:{chipLabel:`01 • Rm 33 Crypt`,shortPin:`Rm 33 • Elite Crypt`,beaconLabel:`Room 33: Matrilineal Crypt (14 Burials • 9/9 B2y1 mtDNA)`,tinyEra:`STAGE I OLD BONITO CORE • AD 850–935 (BURIALS AD 800–1130)`,tinyTitle:`ROOM 33 — MATRILINEAL MORTUARY CRYPT`,tinyDesc:`Ground-story chamber beneath reconstructed Upper Room 58. Held 14 burials (AD 800–1130), >56,000 turquoise items, and 9/9 sequenced individuals sharing identical mtDNA haplotype B2y1.`,keyPoints:[`Architecture & Reconstruction: Ground-story Type I tabular sandstone chamber beneath Upper Room 58. The upper story, ceiling vigas, and hand-hewn pine plank floor divide shown in the 3D model are interpretive reconstructions based on Pepper’s 1896 excavation records (Pepper 1909, 1920).`,`Stratigraphy & Offerings (Pepper 1909, 1920): Below the pine plank floor lay Burial 14 (AD 800–850; >11,200 turquoise & >3,300 shell ornaments, abalone, conch trumpet) and Burial 13 (>5,800 turquoise pieces); above the floor lay 12 burials (>56,000 total turquoise items, wooden flutes, mosaic basket).`,`Archaeogenomics (Kennett et al. 2017, Nat. Commun. 8:14115): Complete mtDNA genomes from 9 individuals were 100% identical (haplotype B2y1); nuclear SNPs from 6 individuals confirmed mother–daughter and grandmother–grandson kin across ~330 years (AD 800–1130).`],artCaption:`Pepper (1909, 1920 AMNH) & Kennett et al. (2017): Room 33 (14 Burials, >56,000 Turquoise Items, 9/9 B2y1 mtDNA)`,photoCap:`Public Domain (Pepper 1920, AMNH Vol. 27): Carved Wooden Flutes Excavated from Room 33`}},pueblo_bonito_240:{ko:{chipLabel:`02 • 28호 카카오`,shortPin:`28호실 • 카카오 잔`,beaconLabel:`28호실: 토기 완형 ~174점 (원통형 잔 ~111–112점) 및 카카오 잔류물`,tinyEra:`올드 보니토 시기 축조 • 11세기 말~12세기 초 퇴적 봉헌`,tinyTitle:`28호실 — 원통형 잔 캐시 및 카카오 흡착 성분`,tinyDesc:`올드 보니토 북측 호형부에 속하며 차후 개축 및 세분화되었습니다. 발굴 시 약 174점의 토기 완형(원통형 잔 111–112점 포함, 약 99점이 높은 수납 선반에 밀집)이 출토되었으며, 잔류물 분석 결과 카카오(Theobroma cacao) 성분인 테오브로민이 검출되었습니다.`,keyPoints:[`건축 구조: 초기 올드 보니토 북측 호형부의 일부로 축조된 후 세분화 및 개축되었습니다. 3D 모델에서는 두 구획을 일관된 복합 공간으로 표현합니다.`,`도기 캐시 발굴: 28호실에서 약 174점의 완형 토기가 출토되었으며, 이 중 차코 특유의 원통형 잔이 111–112점에 달했습니다(약 99점이 높은 수납 선반에 밀집). 서기 1100년경 제의적 종결 화재로 인해 심하게 그을린 상태로 발견되었습니다.`,`카카오(Theobroma cacao) 성분 검출: 출토된 원통형 잔 파편 5점을 질량 분석한 결과 3점에서 테오브로민(카카오의 고유 바이오마커)이 검출되어, 메소아메리카 무역로를 통해 유입된 카카오 음료 의례가 거행되었음을 증명했습니다 (Crown & Hurst 2009 PNAS).`],artCaption:`페퍼(Pepper 1920) 및 크라운 & 허스트(2009 PNAS): 28호실 원통형 잔 111~112점 및 흡착된 카카오 테오브로민 성분`,photoCap:`1877년 미국 지질조사국(USGS, W.H. Jackson): 원형 그대로 보존된 차코 주거실 내부 및 소나무 서까래`},en:{chipLabel:`02 • Rm 28 Cacao`,shortPin:`Rm 28 • Cacao Jars`,beaconLabel:`Room 28: ~174 Ceramic Vessels (~111–112 Cylinder Jars) & Cacao Residue`,tinyEra:`OLD BONITO CONSTRUCTION • LATE 11TH–EARLY 12TH CENTURY CACHE DEPOSIT`,tinyTitle:`ROOM 28 — CYLINDER JAR CACHE & CACAO RESIDUE`,tinyDesc:`Originally part of the early Old Bonito northern arc and later remodeled. Excavations recovered ~174 whole ceramic vessels, including ~111–112 Chacoan cylinder jars with absorbed Theobroma cacao residue.`,keyPoints:[`Architecture: Originally part of the early Old Bonito northern arc and later remodeled and subdivided, with an added upper story.`,`Ceramic Cache: Excavations recovered approximately 174 whole ceramic vessels from Room 28, including ~111–112 Chacoan cylinder jars, heavily burned during a termination event around AD 1100.`,`Cacao Evidence: Chemical residue analysis detected theobromine—the biomarker for Theobroma cacao—in three cylinder jar sherds, demonstrating Mesoamerican exchange rituals (Crown & Hurst 2009 PNAS).`],artCaption:`Pepper (1920) & Crown & Hurst (2009 PNAS): ~174 Ceramic Vessels (~111–112 Cylinder Jars) & Absorbed Theobromine Residue`,photoCap:`1877 U.S. Geological Survey (W.H. Jackson): Intact Chacoan Room Interior & Vigas`}},pueblo_bonito_8:{ko:{chipLabel:`03 • 32호 지팡이`,shortPin:`32호실 • 375+ 의식 지팡이`,beaconLabel:`32호실: 전실 • 375점 이상의 조각 목제 의식 지팡이 및 모자이크 바구니`,tinyEra:`1단계 올드 보니토 핵심부 • 연륜 연대 서기 862–919년`,tinyTitle:`32호실 — 의식용 지팡이(PAHO) 안치 전실`,tinyDesc:`33호 묘실 바로 남쪽에 인접하여 33호실로 진입하는 유일한 내부 문을 갖춘 전실입니다. 375점 이상의 조각된 의식용 지팡이(Paho), 81발의 갈대 화살, 터키석 모자이크 원통 바구니가 출토되었습니다.`,keyPoints:[`진입 구조: 33호 묘실의 남쪽에 직접 연결되어 있으며, 33호실 내부로 통하는 유일한 출입구(너비 약 0.52m)를 지닌 엄숙한 전실입니다.`,`연륜 연대 및 건축: 진흙 모르타르와 1형 판상 사암으로 축조되었으며, 계단식 석조 벽선반이 있습니다. 천장 원목의 연륜 연대는 서기 862~919년으로 측정되었습니다 (Windes & Ford 1996).`,`출토 유물군 (Pepper 1920): 북서쪽 구석에 정갈하게 쌓인 375점 이상의 조각 목제 의식 지팡이, 화살통에 담긴 81발의 갈대 화살, 터키석 및 가시굴 조개 모자이크 원통형 바구니, 25점 이상의 레드 메사 흑백 토기가 발견되었습니다.`],artCaption:`페퍼(Pepper 1920 AMNH Vol. 27): 32호실 — 375점 이상의 목제 지팡이, 81발 화살 및 터키석 모자이크 바구니`,photoCap:`NPS 퍼블릭 도메인: 소나무 상인방 문틀 및 층상 사암 벽체`},en:{chipLabel:`03 • Rm 32 Staffs`,shortPin:`Rm 32 • 375+ Staffs`,beaconLabel:`Room 32: Antechamber • 375+ Wooden Staffs & Mosaic Basket`,tinyEra:`STAGE I OLD BONITO CORE • TREE-RING DATED AD 862–919`,tinyTitle:`ROOM 32 — CEREMONIAL STAFFS ANTECHAMBER`,tinyDesc:`Antechamber immediately south of Room 33 providing the sole interior doorway into the Room 33 crypt; yielded 375+ carved wooden staffs, 81 reed arrows, and a turquoise-mosaic cylinder basket.`,keyPoints:[`Access & Context: Positioned immediately south of Room 33, providing the sole interior doorway into the Room 33 mortuary crypt.`,`Dendrochronology: Built of Type I uncoursed tabular sandstone slabs; ceiling poles yielded tree-ring dates of AD 862–919 (Windes & Ford 1996).`,`Excavated Assemblage (Pepper 1920): Contained 375+ carved wooden ceremonial staffs (pahos) stacked in the NW corner, a quiver of 81 reed arrows, and turquoise-and-Spondylus mosaic baskets.`],artCaption:`Pepper (1920 AMNH Vol. 27): Room 32 — 375+ Wooden Staffs, 81 Reed Arrows & Mosaic Basket`,photoCap:`NPS Public Domain: Pine Lintel Doorways & Coursed Sandstone Masonry`}},pueblo_bonito_352:{ko:{chipLabel:`04 • 38호 앵무새`,shortPin:`38호실 • 14 금강앵무`,beaconLabel:`38호실: 금강앵무 사육실 및 제의 퇴적 (14마리 주홍금강앵무 • Haplo6)`,tinyEra:`올드 보니토 핵심부 • 앵무새 반입 서기 900–1040년경`,tinyTitle:`38호실 — 금강앵무 사육실 및 제의 유적`,tinyDesc:`14마리의 주홍금강앵무 유골(12마리는 두꺼운 조류 배설물 층에 매몰, 2마리는 바닥 구덩이에 의례 매장)과 터키석 상감 흑옥 개구리상이 출토된 초기 올드 보니토 방입니다.`,keyPoints:[`건축 양식: 북측 룸블록 내 초기 올드 보니토 방입니다. 3D 모델의 환기창, 횃대, 상층부 구조는 발굴 보고서에 입각한 해석적 복원입니다.`,`금강앵무 유존체: 14마리의 주홍금강앵무(Ara macao) 유골이 출토되었습니다. 12마리가 두껍게 다져진 조류 배설물(구아노) 층에서 발견되어 실내에서 살아있는 앵무새를 직접 사육했음을 명확히 입증하며, 2마리는 바닥 구덩이에 제의적으로 안치되었습니다.`,`연대 및 유전체 분석: 방사성 탄소 및 고대 DNA 분석에 따르면 앵무새 반입은 서기 900~1040년에 집중되었으며, 시퀀싱된 개체들 모두 동일한 모계 계통(Haplo6 클레이드)의 극히 가까운 유전형을 보여 멕시코 열대 우림의 특정 번식 집단에서 교역되었음을 시사합니다 (Watson et al. 2015; George et al. 2018).`],artCaption:`페퍼(1920), 왓슨(2015) & 조지(2018): 14마리 주홍금강앵무 및 터키석 상감 흑옥 개구리상`,photoCap:`NPS 1930년대 공공누리: 사암 절벽 아래 북측 룸블록 보존 현장`},en:{chipLabel:`04 • Rm 38 Macaws`,shortPin:`Rm 38 • 14 Macaws`,beaconLabel:`Room 38: Macaw-Keeping Room & Ritual Deposit (14 Scarlet Macaws • Haplo6 Clade)`,tinyEra:`OLD BONITO CORE • MACAW USE CA. AD 900–1040`,tinyTitle:`ROOM 38 — MACAW-KEEPING ROOM & RITUAL DEPOSIT`,tinyDesc:`Early Old Bonito room where excavations recovered 14 scarlet macaw skeletons—12 embedded in a thick bird guano deposit and 2 in subfloor pits—plus a turquoise-inlaid black jet frog.`,keyPoints:[`Architecture: Early Old Bonito room within the northern roomblock. Reconstructed vents, doors, and perches shown in 3D are interpretive.`,`Macaw Remains: 14 scarlet macaw skeletons—12 embedded in a thick deposit of compacted bird guano (evidence of live captive birds) and 2 in subfloor pits—plus a jet frog.`,`Chronology & Genetics: Radiocarbon and ancient-DNA studies show macaw acquisition mostly between AD 900 and 1040, within the restricted Haplo6 mitochondrial clade (Watson et al. 2015; George et al. 2018).`],artCaption:`Pepper (1920), Watson et al. (2015) & George et al. (2018): 14 Scarlet Macaws & Jet Frog`,photoCap:`NPS 1930s Public Domain: Northern Roomblocks Below Cliff House Sandstone Cliff`}},pueblo_bonito_159:{ko:{chipLabel:`05 • 대형 키바 A`,shortPin:`대형 키바 A`,beaconLabel:`대형 키바 A: 동측 광장 거대 키바 (4개 방형 석조 기둥 및 34개 벽감)`,tinyEra:`11세기 말~12세기 초 • 서기 1075–1115년경 축조`,tinyTitle:`대형 키바 A (GREAT KIVA A) — 동측 광장 성소`,tinyDesc:`북쪽 공식 석조 계단으로 진입하며, 동심원형 석조 벤치와 34개의 벽면 벽감, 중앙 화덕, 그리고 4개의 거대한 방형 석조 기둥이 지탱하는 웅장한 소나무 목재 지붕을 갖춘 광장 중심 성소입니다.`,keyPoints:[`건축 및 편년: 푸에블로 보니토의 전성기 확장기(서기 1075–1115년경)에 동쪽 광장에 반지하로 축조되었습니다. 북쪽 전용 계단 진입로와 34개의 개방형 벽감이 둘러싸고 있습니다.`,`지붕 구조 및 바닥 시설: 4개의 거대한 방형 석조 기둥이 지붕 하중을 지탱하며, 중앙에 솟은 석조 화덕과 양옆으로 대칭 배치된 바닥 석조 공명실(Foot Drums/Vaults)이 배치되어 있습니다.`,`봉헌 제의 맥락: 발굴 당시 34개 벽감은 개방되어 있었으나, 푸에블로 보니토의 주요 키바 건축층에서는 기둥 초석 및 벽체 봉헌용 터키석 비즈와 조개 장신구가 다수 확인되었습니다.`],artCaption:`저드(Judd 1954 NMNH) 및 NPS (1980): 대형 키바 A (4개 방형 석조 기둥, 34개 벽감 및 바닥 공명실)`,photoCap:`NPS 퍼블릭 도메인: 대형 키바 A 바닥 석조 공명실, 중앙 화덕 및 원형 벤치 벽감`},en:{chipLabel:`05 • Great Kiva A`,shortPin:`Great Kiva A`,beaconLabel:`Great Kiva A: East Court Great Kiva (4 Square Masonry Columns & 34 Niches)`,tinyEra:`LATE 11TH–EARLY 12TH CENTURY • APPROX. AD 1075–1115`,tinyTitle:`GREAT KIVA A — EAST COURT GREAT KIVA`,tinyDesc:`Recessed East Court Great Kiva entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 open wall niches; four large square rubble-filled masonry columns supported the timber roof.`,keyPoints:[`Architecture & Chronology: Built during the late 11th to early 12th century expansion (approx. AD 1075–1115). Entered by a formal northern stairway and surrounded by 34 wall niches.`,`Roof Support & Floor Features: Four large square rubble-filled masonry columns supported the reconstructed timber roof (~9 ft 7 in ceiling height), flanking a raised central firebox and paired subfloor vaults.`,`Ceremonial Offerings: While niches were found open upon excavation, dedicatory turquoise and shell deposits are extensively documented across Chacoan great kivas.`],artCaption:`Judd (1954, 1964 NMNH) & NPS: Great Kiva A (Approx. AD 1075–1115 • 4 Square Masonry Columns & 34 Wall Niches)`,photoCap:`NPS Public Domain: Great Kiva A Subfloor Masonry Vaults, Central Firebox & 34 Wall Niches`}},pueblo_bonito_257:{ko:{chipLabel:`06 • 249호 앵무 사육실`,shortPin:`249호실 • 3 앵무새`,beaconLabel:`249호실: 3마리 금강앵무 유골, 목제 횃대 및 조류 배설물 바닥`,tinyEra:`3단계 전성기 보니토기 • 서기 1050–1085년경`,tinyTitle:`249호실 — 금강앵무 사육실 및 동익부 회랑`,tinyDesc:`닐 저드(Neil Judd, 1954)가 발굴한 방으로, 3마리의 주홍금강앵무 유골, 벽면에 박힌 목제 횃대, 점토 모이그릇, 두꺼운 배설물 바닥이 확인되었으며, HABS NM-30 실측 T자형 문과 인접해 있습니다.`,keyPoints:[`사육 증거 (Judd 1954): 3마리의 주홍금강앵무 유골과 함께 사암 벽체에 삽입된 목제 횃대, 점토 먹이그릇, 두껍게 다져진 조류 배설물 바닥이 출토되어 실내 사육장으로 규명되었습니다.`,`유전 계통 및 산지: 최근 재조사에서 푸에블로 보니토는 총 35마리 이상의 금강앵무를 산출했으며, 모두 멕시코 열대 유래의 단일 미토콘드리아 계통군(Haplo6)에 속합니다 (George et al. 2018 PNAS).`,`T자형 문 및 HABS No. NM-30: 3형 줄무늬 심재-외벽 석조로 지어졌으며, 인접한 226호실 서측 벽면의 실측 T자형 출입구 및 225호실 코너 문과 함께 차코 특유의 축선형(Enfilade) 통로를 형성합니다.`],artCaption:`저드(Judd 1954) & HABS No. NM-30 Sheet 5: 249호 앵무 사육실 및 동익부 T자형 문`,photoCap:`NPS 퍼블릭 도메인: 동익부 축선형 일렬 문(Enfilade Doorways) 및 3형 줄무늬 석조`},en:{chipLabel:`06 • Rm 249 Aviary`,shortPin:`Rm 249 • 3 Macaws`,beaconLabel:`Room 249: 3 Scarlet Macaw Skeletons, Perches & Guano Floor`,tinyEra:`STAGE III CLASSIC BONITO • APPROX. AD 1050–1085`,tinyTitle:`ROOM 249 — MACAW AVIARY & EAST WING CHAMBER`,tinyDesc:`Excavated by Judd (1954): yielded 3 Scarlet Macaw skeletons, wooden wall perches, adobe bowls & thick guano floor; near HABS NM-30 Section 1 T-doorways.`,keyPoints:[`Aviary Evidence (Judd 1954): Yielded 3 Scarlet Macaw skeletons, thick guano floor, adobe bowls, and wooden perches set into masonry walls.`,`Collections & Genetics: Pueblo Bonito has produced ~35 macaws; sequenced individuals fall into the same broader mitochondrial clade (Haplo6; George et al. 2018 PNAS).`,`East Wing Doors: Built in Type III banded core-and-veneer masonry; nearby HABS No. NM-30 Sheet 5 documents measured T-Doorways on Room 226.`],artCaption:`Judd (1954 NMNH) & HABS No. NM-30 Sheet 5: Room 249 Aviary (3 Macaws) & East Wing T-Doorway`,photoCap:`NPS Public Domain: East Wing Aligned Enfilade Doorways & Type III Banded Masonry`}},pueblo_bonito_231:{ko:{chipLabel:`07 • 168호 공방`,shortPin:`168호실 • 터키석 공방`,beaconLabel:`168호실: 남동부 터키석 세공 및 공예 활동 구역`,tinyEra:`3~4단계 • 서기 1050–1105년경`,tinyTitle:`168호실 — 석기 세공 및 터키석 가공 구역`,tinyDesc:`남동쪽 룸블록 확장부에 속하며 168, 170, 173호실 일대에서 연마 석기, 박편 석기 공구, 광물 안료 및 터키석 가공 잔해물이 다량 출토된 장인 공방 구역입니다.`,keyPoints:[`건축: 심재-외벽 사암 석조로 건축된 남동측 룸블록 확장부입니다. 단층 공간으로 복원되었습니다.`,`출토 유물 및 생산 활동: 168, 170, 173호실 주변에서 마제석기, 미세 박편 석기, 광물 원석, 터키석 파편 및 세공 잔유물이 다수 발견되어 전문 공예 공방으로 기능했음을 나타냅니다.`,`학술적 주의: 과거 일부 대중서에서 구리 방울이나 나팔 저장소로 와전된 바 있으나 정밀 발굴 기록상 터키석 및 광물 가공 공방으로 확인됩니다.`],artCaption:`남동 구역 (168, 170, 173호실): 연마 석기 도구 및 터키석 세공 공방 흔적`,photoCap:`NPS 1930년대 공공누리: 절벽 위에서 내려다본 남동쪽 룸블록 및 키바군`},en:{chipLabel:`07 • Rm 168 Craft`,shortPin:`Rm 168 • Lapidary & Craft`,beaconLabel:`Room 168: Southeastern Lapidary & Craft Activity Area`,tinyEra:`STAGE III–IV • APPROX. AD 1050–1105`,tinyTitle:`ROOM 168 — LAPIDARY & CRAFT ACTIVITY`,tinyDesc:`Southeastern sector room associated with lapidary and craft activity. Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise evidence.`,keyPoints:[`Architecture: Part of the later southeastern roomblock expansion, constructed with core-and-veneer sandstone masonry.`,`Artifacts: Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise-related lapidary debitage.`,`Archaeological Record: Carefully distinguished as a lapidary and mineral production area based on excavation inventories.`],artCaption:`Southeastern Sector (Rooms 168, 170 & 173): Ground- and Flaked-Stone Tools & Lapidary Activity`,photoCap:`NPS 1930s Public Domain: Southeastern Roomblocks & Kivas from Cliff Overlook`}},pueblo_bonito_9:{ko:{chipLabel:`08 • 228호 동지창`,shortPin:`228호실 • 동지 일출창`,beaconLabel:`228호실 (인접 225호실): 방위각 ~120° ESE 동지 일출 코너 관측 창문`,tinyEra:`3~4단계 • 서기 1065–1110년경`,tinyTitle:`228호실 — 동지 일출 코너 관측 창문`,tinyDesc:`남동부 외곽 모서리에 위치한 228호실과 225호실은 방위각 약 120°(남동동) 방향으로 대각선 코너 창문이 뚫려 있어, 1년 중 낮이 가장 짧은 동지(12월 21일경) 일출 햇살이 실내 반대편 모서리를 정확히 비춥니다 (Reyman 1976).`,keyPoints:[`고고천문학적 정렬 (Reyman 1976 Science 193:1037–1038): 남동쪽 225호실과 228호실의 외부 코너 창문은 방위각 약 120° ESE를 향해 있으며, 실제 현장 관측 결과 동지 일출 직후 가느다란 햇빛 줄기가 실내 반대편 서측 모서리를 정확하게 조명함이 입증되었습니다.`,`건축 및 복원: 3/4형 심재-외벽 사암 석조로 축조되었으며 상부 벽체와 지붕 구조는 해석적 복원입니다.`,`의회도서관 HABS No. NM-30 실측: HABS NM-30 1구역 도면(Sheet 1~5, 1940)에 225호실 북동 모서리의 대각선 출입구와 226호실 T자형 문이 정밀하게 도면화되어 있습니다.`],artCaption:`레이먼(Reyman 1976 Science): 225 및 228호실 방위각 ~120° 동지 일출 코너 창문`,photoCap:`NPS 1929년 공공누리: 남동부 룸블록의 대각선 코너 개구부 실측 사진`},en:{chipLabel:`08 • Rm 228 Solstice`,shortPin:`Rm 228 • Solstice Window`,beaconLabel:`Room 228 (with Room 225): ~120° ESE Winter Solstice Sunrise Corner Windows`,tinyEra:`STAGE III–IV • APPROX. AD 1065–1110`,tinyTitle:`ROOM 228 — WINTER SOLSTICE CORNER WINDOW`,tinyDesc:`Rooms 228 & 225 in the southeastern sector feature exterior corner windows oriented at ~120° ESE toward the Winter Solstice sunrise (Reyman 1976).`,keyPoints:[`Solar Alignment (Reyman 1976, Science 193:1037–1038): Both Rooms 225 and 228 have exterior corner windows oriented at azimuth ~120° ESE; at Winter Solstice sunrise, sunlight enters and illuminates the opposite interior wall/corner.`,`Architecture: Constructed in Type III/IV core-and-veneer sandstone masonry; upper wall elevations shown in 3D are interpretive.`,`HABS No. NM-30 Documentation: HABS No. NM-30 records measured plans of Rooms 174–177 and 225–226, including the Corner Doorway on Sheet 5.`],artCaption:`Reyman (1976 Science 193:1037–1038): Rooms 225 & 228 ~120° ESE Winter Solstice Sunrise Corner Windows`,photoCap:`NPS 1929 Public Domain: Diagonal Corner Aperture in Southeastern Rooms`}},pueblo_bonito_406:{ko:{chipLabel:`09 • 326호 묘역`,shortPin:`326호실 • 서측 묘역`,beaconLabel:`326호실: 서측 묘실 클러스터 (초기 블록 서기 860–935년 • 12인 유골)`,tinyEra:`올드 보니토 초기 건축 블록 • 서기 860–935년경`,tinyTitle:`326호실 — 서측 묘실군 (WESTERN BURIAL CLUSTER)`,tinyDesc:`푸에블로 보니토의 가장 이른 서측 블록에 속하는 묘실로, 320, 326, 329, 330호실로 구성된 서측 묘실군의 핵심입니다. 인골 재평가 결과 12인(성인 여성 10, 남성 1, 영아 1)의 매장이 확인되었습니다.`,keyPoints:[`건축사: 서기 860~935년경 올드 보니토 초기 서측 윙으로 축조된 후 후기 점유 기간 동안 개축 및 통로 폐쇄가 이루어졌습니다.`,`묘역 기능: 인골 재평가 결과 326호실에는 총 12구(성인 11명[여성 10, 남성 1] 및 영아 1명)가 안치되었음이 규명되었습니다.`,`묘역 클러스터: 326호실은 인접한 320, 329, 330호실과 함께 서측 공동 묘역 복합체를 이루었습니다.`],artCaption:`저드(Judd 1954) 및 에이킨스(Akins 1986): 326호실 (초기 블록 서기 860–935년; 12인 매장)`,photoCap:`NPS 1930년대 공공누리: 푸에블로 보니토의 서측 룸블록 및 키바 전경`},en:{chipLabel:`09 • Rm 326 Burials`,shortPin:`Rm 326 • Western Burials`,beaconLabel:`Room 326: Western Burial Cluster Chamber (Early Block AD 860–935 • 12 Individuals)`,tinyEra:`OLD BONITO ARCHITECTURAL BLOCK • APPROX. AD 860–935 CONSTRUCTION`,tinyTitle:`ROOM 326 — WESTERN BURIAL CLUSTER CHAMBER`,tinyDesc:`Belongs to one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935). Reassessment identified 12 individuals (11 adults [10 females, 1 male] and 1 infant).`,keyPoints:[`Architecture: Early western architectural block (approx. AD 860–935) modified during later occupation with sealed openings.`,`Mortuary Use: Later reassessment identified 12 individuals: 11 adults (10 females, 1 male) and one infant.`,`Western Cluster: Formed part of the larger western burial cluster including Rooms 320, 329, and 330.`],artCaption:`Judd (1954), Akins (1986) & Reassessment: Room 326 (12 Individuals [10♀, 1♂, 1 Infant])`,photoCap:`NPS 1930s Public Domain: Western Roomblocks & Kivas of Pueblo Bonito`}},landmark_threatening_rock:{ko:{chipLabel:`10 • 1941 암벽붕괴`,shortPin:`1941 암벽붕괴`,beaconLabel:`1941년 위협하는 바위(Threatening Rock) 붕괴 (~30,000톤 사암 거석)`,tinyEra:`11세기 차코 토목 옹벽 • 1941년 1월 22일 붕괴`,tinyTitle:`위협하는 바위 (TSÉ BÍYAH ANIIʼÁHÍ)`,tinyDesc:`푸에블로 보니토 북동쪽 절벽 바로 뒤에 서 있던 약 30,000톤 무게의 거대한 사암 거석으로, 11세기 차코인들이 흙과 통나무 옹벽을 쌓아 지탱했으나 1941년 1월 22일 붕괴하여 북측 외벽과 65개 방을 파괴했습니다.`,keyPoints:[`지질학적 배경: 상부 백악기 클리프 하우스 사암(Cliff House Sandstone) 층에서 분리된 거대한 독립 암괴(나바호어: Tsé Bíyah Aniiʼáhí, "아래를 받쳐놓은 바위")로 높이 약 30m에 달했습니다.`,`고대 선사 토목 공학 (Judd 1959): 11세기 차코 건축가들은 바위 기저부의 메네피 혈암 침식을 막기 위해 소나무 원목과 사암 석조를 이용해 정교한 지지 옹벽 테라스를 축조했습니다.`,`1941년 대붕괴 (USGS Prof. Paper 454-H): 1941년 1월 22일 오후 3시 10분, 겨울철 동결-융해 쐐기 작용으로 거석이 앞으로 전도되어 북측 외벽을 강타하고 약 65개 방을 완파했습니다. 현재의 3D 모델에는 잔해 너덜지대(Talus)가 정밀 반영되어 있습니다.`],artCaption:`저드(Judd 1959) 및 슘 & 촐리(1964 USGS): 위협하는 바위 거석 및 1941년 1월 22일 붕괴 현장`,photoCap:`NPS 1929년 공공누리: 1941년 붕괴 전 푸에블로 보니토 바로 뒤편에 우뚝 솟아 있던 위협하는 바위`},en:{chipLabel:`10 • 1941 Rockfall`,shortPin:`1941 Rockfall`,beaconLabel:`1941 Threatening Rock Collapse (~30,000 Tons)`,tinyEra:`11TH-CENTURY RETAINING TERRACE • COLLAPSED JAN 22, 1941`,tinyTitle:`THREATENING ROCK (TSÉ BÍYAH ANIIʼÁHÍ)`,tinyDesc:`Detached ~30,000-ton sandstone monolith braced by an 11th-century Chacoan terrace; collapsed Jan 22, 1941 across the northeastern outer wall.`,keyPoints:[`Geological Setting: Detached Upper Cretaceous Cliff House Sandstone monolith that stood immediately behind the northeastern arc of Pueblo Bonito.`,`Prehistoric Engineering (Judd 1959): In the 11th century, Chacoan builders constructed an earth-and-masonry retaining terrace reinforced with upright pine logs.`,`1941 Collapse (USGS Prof. Paper 454-H): On January 22, 1941 at 3:10 PM, the monolith toppled, destroying part of the outer northern wall and crushing ~65 rooms.`],artCaption:`Judd (1959) & Schumm & Chorley (1964 USGS): Threatening Rock Monolith & Jan 22, 1941 Collapse`,photoCap:`NPS 1929 Public Domain: Threatening Rock Towering Behind Pueblo Bonito (Pre-1941)`}},pueblo_bonito_170:{ko:{chipLabel:`11 • 대형 키바 Q`,shortPin:`대형 키바 Q`,beaconLabel:`대형 키바 Q: 서측 광장 거대 키바 (원형 석조 소켓의 4개 목제 기둥)`,tinyEra:`전성기 보니토기 • 11세기 중엽 추정 (키바 A보다 선행)`,tinyTitle:`대형 키바 Q (GREAT KIVA Q) — 서측 광장 성소`,tinyDesc:`서측 광장에 반지하로 축조된 거대 원형 키바로, 동측 키바 A의 사각 석조 기둥과 달리 원형 석조 소켓에 안치된 4개의 거대한 목제 원목 기둥이 지붕을 받치고 바닥 공명실과 둘레 벤치를 구비했습니다.`,keyPoints:[`편년 및 구조: 대형 키바 Q는 동측의 대형 키바 A보다 앞서 11세기 중엽에 축조된 것으로 추정됩니다. 둘레 벤치, 중앙 화덕, 한 쌍의 바닥 직사각형 공명실 및 남쪽 진입 계단을 갖추고 있습니다.`,`목제 지붕 기둥: 키바 A의 사각 석조 기둥과 대조적으로, 거대한 통나무 기둥 4개를 원형 석조 소켓 바닥에 직립시켜 지붕을 지탱한 독특한 공법이 특징입니다.`,`복원 상태: 완전한 목제 지붕 가구 구조 및 상부 벽체 높이는 고고학적 비교 연구에 입각한 해석적 복원입니다.`],artCaption:`저드(Judd 1964 NMNH) & NPS: 대형 키바 Q (11세기 중엽 • 원형 석조 소켓 4개 목제 기둥 및 바닥 공명실)`,photoCap:`푸에블로 보니토 3D 복원 및 0.5m LiDAR 조사: 개방형 서측 광장과 대형 키바 Q`},en:{chipLabel:`11 • Great Kiva Q`,shortPin:`Great Kiva Q`,beaconLabel:`Great Kiva Q: West Court Great Kiva (4 Large Wooden Roof Posts in Circular Masonry Settings)`,tinyEra:`CLASSIC BONITO PHASE • PROBABLY MID-11TH CENTURY`,tinyTitle:`GREAT KIVA Q — WEST COURT GREAT KIVA`,tinyDesc:`Recessed circular Great Kiva in the West Court with an encircling masonry bench, central firebox, paired rectangular subfloor vaults, and 4 large wooden roof posts in circular masonry settings.`,keyPoints:[`Chronology & Architecture: Predates Great Kiva A, probably mid-11th century. Equipped with an encircling bench, firebox, paired vaults, and southern entry stairway.`,`Roof Support: Used four large wooden roof posts seated in circular masonry settings—distinct from the square masonry columns of Great Kiva A.`,`Reconstruction: Full roof timbering and upper walls shown in the model are interpretive reconstructions.`],artCaption:`Judd (1964 NMNH) & NPS Survey: Great Kiva Q (Mid-11th Century • 4 Wooden Roof Posts in Circular Masonry Settings)`,photoCap:`Pueblo Bonito 3D Reconstruction & 0.5m LiDAR Survey: Open West Court & Great Kiva Q`}},pueblo_bonito_22:{ko:{chipLabel:`12 • 4층 북측 척추부`,shortPin:`14/85호실 • 4층 척추부`,beaconLabel:`14/85호실: 북측 외곽 원호 4층 높이 기념비적 척추부 (~14m)`,tinyEra:`2단계 전성기 보니토 확장 • 서기 1040–1060년경`,tinyTitle:`14/85호실 — 복원된 4층 높이 북측 외벽 척추부`,tinyDesc:`푸에블로 보니토의 북쪽 배면을 둘러싸는 거대한 4층 높이(~14.0m)의 방형 척추부로, 정교한 2형 및 3형 심재-외벽 석조와 수천 그루의 폰데로사 소나무 원목 서까래(비가)로 지어졌습니다.`,keyPoints:[`4층 기념비적 척추부 (Lekson 1984): 초기 1단계 올드 보니토 원호 바로 뒤편에 서기 1040~1060년경 덧붙여진 4층 높이의 웅장한 외벽입니다. 광장 쪽을 향해 3층, 2층, 1층으로 계단식 테라스를 이루며 낮아집니다.`,`석조 공학: 두께 90cm에 달하는 2형 코어-앤-베니어(Core-and-Veneer) 석조로, 두꺼운 사암 판석 사이에 얇은 사암 조각(Spalls)을 정밀하게 끼워 넣어 고지대 사막의 풍화와 비바람을 견디도록 축조되었습니다.`,`원목 서까래 조달 (Guiterman et al. 2016 PNAS): 수만 개의 소나무 비가(Vigas)는 75km 이상 떨어진 추스카(Chuska) 산맥과 주니(Zuni) 산맥에서 바퀴 없이 손과 어깨로 운반되었습니다.`],artCaption:`렉슨(Lekson 1984) 및 의회도서관 HABS No. NM-30: 14/85호실 4층 높이 북측 외벽 복원`,photoCap:`블렌더 렌더: 북측 4층 척추부의 정밀 석조 및 폰데로사 소나무 서까래(비가) 복원`},en:{chipLabel:`12 • 4-Story Spine`,shortPin:`Rm 14/85 • 4-Story Spine`,beaconLabel:`Room 14/85: Northern Outer Arc 4-Story Monumental Spine (~14.0m Elevation)`,tinyEra:`STAGE II CLASSIC BONITO EXPANSION • APPROX. AD 1040–1060`,tinyTitle:`ROOM 14/85 — RECONSTRUCTED FOUR-STORY NORTHERN SPINE`,tinyDesc:`Monumental 4-story spine (~14.0m) enclosing the northern rear of Pueblo Bonito, built with Type II core-and-veneer masonry and Ponderosa pine vigas.`,keyPoints:[`Four-Story Spine (Lekson 1984): Monumental multi-story wall arc built ca. AD 1040–1060 immediately wrapping the Old Bonito core, stepping down terraced plazas.`,`Masonry Engineering: Thick Type II core-and-veneer walls (~0.9m thick) with ashlar veneer and tabular spall chinking.`,`Timber Logistics (Guiterman et al. 2016 PNAS): Tens of thousands of Ponderosa pine vigas were transported manually from the Chuska and Zuni Mountains over 75 km away.`],artCaption:`Lekson (1984) & HABS No. NM-30: Reconstructed 4-Story Northern Spine (Rooms 14 & 85)`,photoCap:`3D Render: Reconstructed 4-Story Northern Spine Masonry & Pine Vigas`}}},np=`ko`;function rp(){return np}function ip(){try{let e=localStorage.getItem(Qf);np=e===`en`||e===`ko`?e:`ko`}catch{np=`ko`}return document.documentElement.lang=np,np}function ap(e){if(e===`ko`||e===`en`){np=e;try{localStorage.setItem(Qf,e)}catch{}document.documentElement.lang=e}}function q(e,t=np){let n=$f[t]||$f.ko;return n[e]===void 0?$f.en[e]||e:n[e]}function op(e,t=np){let n=ep[e];return n?n[t]||n.ko||n.en:null}function sp(e,t=np){let n=tp[e];return n?n[t]||n.ko||n.en:null}var cp=I.degToRad(36.0605),lp={summer:23.44,equinox:0,winter:-23.44,lunar:-28.6,night:-12},up={stage1:[`Stage_I_Old_Bonito_AD850_935`],stage2:[`Stage_I_Old_Bonito_AD850_935`,`Stage_II_North_4Story_Spine_AD1040_1060`],stage3:[`Stage_I_Old_Bonito_AD850_935`,`Stage_II_North_4Story_Spine_AD1040_1060`,`Stage_III_Wings_And_Kivas_AD1060_1085`],stage4:[`Stage_I_Old_Bonito_AD850_935`,`Stage_II_North_4Story_Spine_AD1040_1060`,`Stage_III_Wings_And_Kivas_AD1060_1085`,`Stage_IV_South_Arc_And_Plaza_AD1085_1115`]},dp={pueblo_bonito:`Pueblo Bonito`,chetro_ketl:`Chetro Ketl`,pueblo_del_arroyo:`Pueblo del Arroyo`,casa_rinconada:`Casa Rinconada`,fajada_butte:`Fajada Butte`},fp=[{id:`overview`,num:`I`,shortTitle:`Wide Overview`,fullTitle:`SECTION I • 3D ARCHITECTURAL RECONSTRUCTION (0.5m LIDAR & ARCHAEOLOGICAL SURVEY)`,heroTitle:`Pueblo Bonito Great House & Chacra Mesa Escarpment`,heroDesc:`Spanning <strong>~175 m (162–175 m) × 98 m</strong> with <strong>433 georeferenced polygons</strong> (403 active ground/recessed features + 30 buried sub-court features; ~800 total multi-story rooms rising up to a reconstructed 4 stories / ~9.8–14.0 m) and <strong>35+ ceremonial kivas</strong> flanking open East and West Courts, this 3D interpretive reconstruction extrudes the 0.5m airborne LiDAR (OpenTopography OT.042019.6342.1), HABS No. NM-30 (LOC Item nm0107), and NPS measured surveys.`,camPos:[-24,62,106],target:[0,3.5,-8],season:`equinox`,hour:16.85,phase:`all`,roomIds:[]},{id:`old_bonito`,num:`II`,shortTitle:`Old Bonito Core`,fullTitle:`SECTION II • OLD BONITO NUCLEUS (STAGE I: AD 850–935+)`,heroTitle:`The 9th-Century Crescent, Mortuary Crypt & Ritual Repositories`,heroDesc:`Built of Type I tabular sandstone slabs (c. AD 850–935), the northwestern Old Bonito arc contains Room 33 (14 burials dated AD 800–1130, 9/9 sequenced sharing mtDNA haplotype B2y1, >56,000 turquoise items; Kennett et al. 2017), Room 28 (~174 whole ceramic vessels including ~111–112 Chacoan cylinder jars—roughly 99 concentrated on a raised storage shelf—plus bowls and pitchers burned during an AD ~1100 termination event; absorbed Theobroma cacao theobromine residue; Pepper 1920; Crown & Hurst 2009), Room 32 (375+ ceremonial staffs), and Room 38 (14 scarlet macaw skeletons—12 associated with and embedded in a thick deposit of bird guano and 2 in subfloor hollows—plus a turquoise-inlaid black jet frog; macaw use ca. AD 900–1040, closely related haplotypes within the Haplo6 clade; Watson et al. 2015; George et al. 2018).`,camPos:[-16,22,-2],target:[-28,4,-33],season:`equinox`,hour:16.85,phase:`all`,roomIds:[`pueblo_bonito_380`,`pueblo_bonito_240`,`pueblo_bonito_377`,`pueblo_bonito_8`,`pueblo_bonito_352`]},{id:`kivas`,num:`III`,shortTitle:`Great Kivas & Plaza`,fullTitle:`SECTION III • GREAT KIVA A & OPEN DUAL COURTS (APPROX. AD 1075–1115)`,heroTitle:`Recessed Sanctuaries, Subfloor Vaults & Cardinal Plaza`,heroDesc:`Divided by a North–South wall into open East and West Courts, Pueblo Bonito’s plazas include Great Kiva A (built approx. AD 1075–1115)—entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 wall niches (found open and empty when excavated), with a reconstructed timber roof (~9 ft 7 in ceiling height) supported by four large square rubble-filled masonry columns, a raised central firebox, and paired subfloor masonry vaults. Turquoise and shell dedicatory deposits are documented from ceremonial and architectural contexts at Pueblo Bonito.`,camPos:[-8.3,18.5,40],target:[-8.3,1.2,21.4],season:`equinox`,hour:16.6,phase:`all`,roomIds:[`pueblo_bonito_159`]},{id:`east_wing`,num:`IV`,shortTitle:`East Wing & Solstice`,fullTitle:`SECTION IV • CLASSIC EAST WING, CRAFT SECTOR & SOLAR OBSERVATORIES (AD 1050–1110)`,heroTitle:`Room 249 Macaw Aviary, Room 168 Lapidary & Craft Area & Solstice Windows`,heroDesc:`Built in core-and-veneer sandstone masonry, the East and Southeast Wings include Room 249 (3 Scarlet Macaw skeletons, perches, adobe bowls & guano floor; Judd 1954), nearby Section No. 1 rooms (Rooms 174–177, 225–226) documented in HABS No. NM-30 (LOC Item nm0107, Sheet 5 T-door on Room 226 & corner doorway in Room 225), Room 168 (part of the southeastern lapidary and craft activity area alongside Rooms 170 and 173), and Rooms 225 & 228 (~120° ESE Winter Solstice sunrise corner windows; Reyman 1976).`,camPos:[28,17.5,25],target:[50.99,1.85,10.36],season:`equinox`,hour:16.8,phase:`all`,roomIds:[`pueblo_bonito_257`,`pueblo_bonito_231`,`pueblo_bonito_9`]},{id:`west_spine`,num:`V`,shortTitle:`Western Burials & Rockfall`,fullTitle:`SECTION V • WESTERN BURIAL CLUSTER & 1941 THREATENING ROCK COLLAPSE`,heroTitle:`Room 326 Western Burial Cluster Chamber & 1941 Threatening Rock Talus`,heroDesc:`In one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935 construction, modified during later occupation), Room 326 formed part of the Western Burial Cluster (Rooms 320, 326, 329, 330); later osteological reassessment identified 12 individuals (11 adults—10 females, 1 male—and 1 infant; older inventories reported 11). Along the northeastern cliff, the ~30,000-ton Threatening Rock monolith collapsed on January 22, 1941.`,camPos:[-30,22,18],target:[-58.9,3.5,.5],season:`summer`,hour:17.1,phase:`all`,roomIds:[`pueblo_bonito_406`,`landmark_threatening_rock`]},{id:`greater_chaco`,num:`VI`,shortTitle:`West Court & Kiva Q`,fullTitle:`SECTION VI • WEST COURT PLAZA, GREAT KIVA Q & 4-STORY SPINE`,heroTitle:`Great Kiva Q, The Open West Court & Reconstructed Four-Story Northern Spine`,heroDesc:`West of the North–South dividing wall, the open West Court plaza centers on Great Kiva Q (Classic Bonito Phase, probably mid-11th century and predating Great Kiva A), equipped with four large wooden roof-support posts seated in circular masonry settings (visually and structurally distinct from the four square masonry columns of Great Kiva A), paired rectangular subfloor vaults, and a reconstructed southern entry stairway/antechamber, rising northward to the reconstructed 4-story Northern Spine (Room 14/85).`,camPos:[-23.15,18,8],target:[-23.15,-1.5,-11.68],season:`equinox`,hour:16.7,phase:`all`,roomIds:[`pueblo_bonito_170`,`pueblo_bonito_22`]}],pp=[{id:`pueblo_bonito_380`,index:1,sectionId:`old_bonito`,chipLabel:`01 • Rm 33 Crypt`,shortPin:`Rm 33 • Elite Crypt`,beaconLabel:`Room 33: Matrilineal Crypt (14 Burials • 9/9 B2y1 mtDNA)`,beaconPos:[-32.77,7.6,-32.43],walkPos:[-32.45,11.6,-28.6],walkTarget:[-32.77,4.35,-32.43],camPos:[-32.45,11.6,-28.6],target:[-32.77,4.35,-32.43],closeCamPos:[-32.68,7.85,-31.05],closeTarget:[-32.77,4.32,-32.5],tinyEra:`STAGE I OLD BONITO CORE • AD 850–935 (BURIALS AD 800–1130)`,tinyTitle:`ROOM 33 — MATRILINEAL MORTUARY CRYPT`,tinyDesc:`Ground-story chamber beneath reconstructed Upper Room 58. Held 14 burials (AD 800–1130), >56,000 turquoise items, and 9/9 sequenced individuals sharing identical mtDNA haplotype B2y1.`,keyPoints:[`Architecture & Reconstruction: Ground-story Type I tabular sandstone chamber beneath Upper Room 58. The upper story, ceiling vigas, and hand-hewn pine plank floor divide shown in the 3D model are interpretive reconstructions based on Pepper’s 1896 excavation records (Pepper 1909, 1920).`,`Stratigraphy & Offerings (Pepper 1909, 1920): Below the pine plank floor lay Burial 14 (AD 800–850; >11,200 turquoise & >3,300 shell ornaments, abalone, conch trumpet) and Burial 13 (>5,800 turquoise pieces); above the floor lay 12 burials (>56,000 total turquoise items, wooden flutes, mosaic basket).`,`Archaeogenomics (Kennett et al. 2017, Nat. Commun. 8:14115): Complete mtDNA genomes from 9 individuals were 100% identical (haplotype B2y1); nuclear SNPs from 6 individuals confirmed mother–daughter and grandmother–grandson kin across ~330 years (AD 800–1130).`],artType:`crypt_33`,artCaption:`Pepper (1909, 1920 AMNH) & Kennett et al. (2017): Room 33 (14 Burials, >56,000 Turquoise Items, 9/9 B2y1 mtDNA)`,photo:`./renders/archival/pd_room33_flutes.jpg`,photoCap:`Public Domain (Pepper 1920, AMNH Vol. 27): Carved Wooden Flutes Excavated from Room 33`,structures3D:[`Reconstructed hand-hewn Ponderosa pine plank floor divide (Pepper 1909)`,`Reconstructed 4 corner vertical pine roof-support posts & ceiling vigas (Pepper 1909)`,`Narrow south interior doorway connecting to Room 32 (reconstructed frame)`],archivalMedia:[{tab:`Room 33 Flutes (1920)`,src:`./renders/archival/pd_room33_flutes.jpg`,badge:`PUBLIC DOMAIN (PEPPER 1920)`,caption:`Carved wooden flutes • Room 33 (Pepper 1920, AMNH Vol. 27)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan of Pueblo Bonito (Lekson 1984)`},{tab:`HABS NM-30 Key Plan`,src:`./renders/archival/pd_habs_sheet0_master_key.jpg`,badge:`HABS NM-30 (LOC nm0107)`,caption:`HABS No. NM-30 Title Sheet: Master Key Plan (LOC Item nm0107, 1940)`},{tab:`0.5m LiDAR Breakdown`,src:`./renders/lidar_data_and_foliage_breakdown.jpg`,badge:`0.5m AIRBORNE LIDAR`,caption:`0.5m OpenTopography LiDAR DEM & DSM (OT.042019.6342.1)`}]},{id:`pueblo_bonito_240`,index:2,sectionId:`old_bonito`,chipLabel:`02 • Rm 28 Cacao`,shortPin:`Rm 28 • Cacao Jars`,beaconLabel:`Room 28: ~174 Ceramic Vessels (~111–112 Cylinder Jars) & Cacao Residue`,beaconPos:[-24.41,7.6,-30.66],walkPos:[-24.41,12.6,-26.2],walkTarget:[-24.41,4.05,-30.66],camPos:[-24.41,12.6,-26.2],target:[-24.41,4.05,-30.66],closeCamPos:[-24.15,8.25,-28.55],closeTarget:[-24.41,4.05,-30.8],tinyEra:`OLD BONITO CONSTRUCTION • LATE 11TH–EARLY 12TH CENTURY CACHE DEPOSIT`,tinyTitle:`ROOM 28 — CYLINDER JAR CACHE & CACAO RESIDUE`,tinyDesc:`Originally part of the early Old Bonito northern arc and later remodeled and subdivided. Excavations recovered ~174 whole ceramic vessels, including ~111–112 Chacoan cylinder jars (roughly 99 concentrated on a raised storage shelf) alongside bowls and pitchers; chemical residue analysis detected Theobroma cacao theobromine.`,keyPoints:[`Architecture: Originally part of the early Old Bonito northern arc and later remodeled and subdivided, with an added upper story. The 3D highlight treats the remodeled Room 28 complex consistently across both compartments.`,`Ceramic Cache: Excavations recovered approximately 174 whole ceramic vessels from Room 28, including ~111–112 Chacoan cylinder jars (with roughly 99 concentrated together on a raised storage shelf/area), alongside ceramic bowls and pitchers, all heavily burned during a termination event around AD 1100.`,`Cacao Evidence: Chemical residue analysis tested five cylinder jar sherds from Pueblo Bonito and detected theobromine—the biomarker for Theobroma cacao—in three of them, demonstrating preparation or consumption of cacao beverages reached via Mesoamerican exchange.`],artType:`cacao_28`,artCaption:`Pepper (1920) & Crown & Hurst (2009 PNAS): ~174 Ceramic Vessels (~111–112 Cylinder Jars, ~99 on Storage Shelf) & Absorbed Theobromine Residue`,photo:`./renders/archival/pd_usgs_1877_room_interior.jpg`,photoCap:`1877 U.S. Geological Survey (W.H. Jackson): Intact Chacoan Room Interior & Vigas`,structures3D:[`Later subdivision partition wall within the longer original Old Bonito room (interpretive reconstruction)`,`Enfilade interior doorway with tabular sandstone lintel (reconstructed)`,`Reconstructed raised storage shelf & charred 2nd-story floor vigas`],archivalMedia:[{tab:`1877 USGS Room Plate`,src:`./renders/archival/pd_usgs_1877_room_interior.jpg`,badge:`PD-USGOV-USGS (1877)`,caption:`1877 USGS room interior & vigas (W.H. Jackson, 10th Annual Report)`},{tab:`NPS Banded Masonry`,src:`./renders/archival/pd_nps_banded_masonry_doorway.jpg`,badge:`PD-USGOV-NPS (1929)`,caption:`Northern arc core-and-veneer masonry & viga sockets (NPS, 1929)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan showing Old Bonito northern arc (Lekson 1984)`},{tab:`LiDAR DSM Scan`,src:`./renders/hud_stage2_lidar_dsm_full.jpg`,badge:`0.5m LIDAR DSM`,caption:`0.5m airborne LiDAR Digital Surface Model (OTSDEM.042019.6342.1)`}]},{id:`pueblo_bonito_8`,index:3,sectionId:`old_bonito`,chipLabel:`03 • Rm 32 Staffs`,shortPin:`Rm 32 • 375+ Staffs`,beaconLabel:`Room 32: Antechamber • 375+ Wooden Staffs & Mosaic Basket`,beaconPos:[-30.77,7.6,-33.03],walkPos:[-30.65,11.6,-29.2],walkTarget:[-30.77,4.45,-33.03],camPos:[-30.65,11.6,-29.2],target:[-30.77,4.45,-33.03],closeCamPos:[-30.72,7.95,-31.45],closeTarget:[-30.77,4.42,-33.1],tinyEra:`STAGE I OLD BONITO CORE • TREE-RING DATED AD 862–919`,tinyTitle:`ROOM 32 — CEREMONIAL STAFFS ANTECHAMBER`,tinyDesc:`Antechamber immediately south of Room 33 providing the sole interior doorway into the Room 33 crypt; yielded 375+ carved wooden staffs (pahos), 81 reed arrows, and a turquoise-mosaic cylinder basket.`,keyPoints:[`Access & Context: Positioned immediately south of Room 33, providing the sole interior doorway into the Room 33 mortuary crypt.`,`Dendrochronology & Architecture: Built of Type I uncoursed tabular sandstone slabs with a stepped interior masonry ledge; ceiling poles yielded tree-ring dates of AD 862–919 (Windes & Ford 1996). Upper story and roof viga arrangement are interpretive reconstructions.`,`Excavated Assemblage (Pepper 1896 / 1920, pp. 127–162): Contained 375+ carved wooden ceremonial staffs (pahos) stacked in the NW corner, a quiver of 81 reed arrows, turquoise-and-Spondylus mosaic baskets, and 25+ Red Mesa Black-on-white vessels.`],artType:`staffs_32`,artCaption:`Pepper (1920 AMNH Vol. 27): Room 32 — 375+ Wooden Staffs, 81 Reed Arrows & Mosaic Basket`,photo:`./renders/archival/pd_nps_sandstone_walls.jpg`,photoCap:`NPS Public Domain: Pine Lintel Doorways & Coursed Sandstone Masonry`,structures3D:[`North interior doorway sill & lintel leading into Room 33 Crypt (reconstructed)`,`Stepped Type I masonry wall bench/ledge (interpretive reconstruction after Pepper 1920, HEE Photo 120)`,`Reconstructed Ponderosa pine ceiling poles (tree-ring dated AD 862–919; Windes & Ford 1996)`],archivalMedia:[{tab:`NPS Doorway & Lintel`,src:`./renders/archival/pd_nps_sandstone_walls.jpg`,badge:`PD-USGOV-NPS`,caption:`Pine doorway lintels & sandstone masonry (NPS)`},{tab:`1877 USGS Room Plate`,src:`./renders/archival/pd_usgs_1877_room_interior.jpg`,badge:`PD-USGOV-USGS (1877)`,caption:`1877 USGS intact Old Bonito room interior & ceiling timbers (W.H. Jackson)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan (Lekson 1984)`},{tab:`LiDAR Stage I–II Scan`,src:`./renders/hud_stage4_phase1_2_masonry.jpg`,badge:`0.5m LIDAR + 3D STAGE I–II`,caption:`Stage I–II masonry on 0.5m LiDAR DEM`}]},{id:`pueblo_bonito_352`,index:4,sectionId:`old_bonito`,chipLabel:`04 • Rm 38 Macaws`,shortPin:`Rm 38 • 14 Macaws`,beaconLabel:`Room 38: Macaw-Keeping Room & Ritual Deposit (14 Scarlet Macaws • Haplo6 Clade)`,beaconPos:[-12.33,7.6,-39.94],walkPos:[-12.33,12.8,-32.8],walkTarget:[-12.33,3.6,-39.94],camPos:[-12.33,12.8,-32.8],target:[-12.33,3.6,-39.94],closeCamPos:[-12.33,7.85,-36.85],closeTarget:[-12.33,3.55,-40.1],tinyEra:`OLD BONITO CORE • MACAW USE CA. AD 900–1040`,tinyTitle:`ROOM 38 — MACAW-KEEPING ROOM & RITUAL DEPOSIT`,tinyDesc:`Early Old Bonito room where excavations recovered 14 scarlet macaw skeletons—12 associated with and embedded in a thick deposit of bird guano and 2 in subfloor hollows—plus a turquoise-inlaid black jet frog (macaw acquisition mostly AD 900–1040; closely related haplotypes within the Haplo6 clade).`,keyPoints:[`Architecture: Early Old Bonito room within the northern roomblock. Reconstructed vents, doors, perches, and upper-story details shown in the 3D model are interpretive.`,`Macaw Remains: Excavations recovered 14 scarlet macaw skeletons—12 associated with and embedded in a thick deposit of compacted bird guano (strong evidence that living macaws were kept in the room) and 2 intentionally placed in subfloor pits/hollows—along with a turquoise-inlaid black jet frog.`,`Chronology & Genetics: Radiocarbon and ancient-DNA studies show that macaw acquisition at Pueblo Bonito occurred mostly between AD 900 and 1040, and sequenced Chaco macaws fall within the same broader mitochondrial clade (Haplo6) with low diversity across closely related haplotypes, consistent with a restricted founder/breeding population.`],artType:`macaw_38`,artCaption:`Pepper (1920), Watson et al. (2015) & George et al. (2018): 14 Scarlet Macaws (12 in Thick Guano Deposit, 2 in Subfloor Pits; AD 900–1040; Haplo6 Clade) & Turquoise-Inlaid Black Jet Frog`,photo:`./renders/archival/pd_nps_masonry_preservation.jpg`,photoCap:`NPS 1930s Public Domain: Northern Roomblocks Below Cliff House Sandstone Cliff`,structures3D:[`North masonry wall & reconstructed vents/perches (interpretive reconstruction)`,`Reconstructed east wall doorway & plastered floor ledge (interpretive reconstruction)`,`Two subfloor pits (2 macaws) & thick bird-guano floor deposit (12 macaws)`],archivalMedia:[{tab:`Northern Roomblock (NPS)`,src:`./renders/archival/pd_nps_masonry_preservation.jpg`,badge:`PD-USGOV-NPS (1930s)`,caption:`Northern roomblocks below Cliff House Sandstone cliff (NPS, 1930s)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan of Pueblo Bonito (Lekson 1984)`},{tab:`1877 USGS Ground Plan`,src:`./renders/pd_usgs_1877_bonito_plan.jpg`,badge:`PD-USGOV-USGS (1877)`,caption:`1877 USGS ground plan of Pueblo Bonito (W.H. Jackson)`},{tab:`LiDAR Stage I–II Scan`,src:`./renders/hud_stage4_phase1_2_masonry.jpg`,badge:`0.5m LIDAR + STAGE I–II`,caption:`Stage I–II Old Bonito northern crescent on 0.5m LiDAR DEM`}]},{id:`pueblo_bonito_159`,index:5,sectionId:`kivas`,chipLabel:`05 • Great Kiva A`,shortPin:`Great Kiva A`,beaconLabel:`Great Kiva A: East Court Great Kiva (4 Square Rubble-Filled Masonry Columns & 34 Niches)`,beaconPos:[-8.33,2.5,21.39],walkPos:[-8.33,8.8,34.2],walkTarget:[-8.33,-1.6,21.39],camPos:[-8.33,8.8,34.2],target:[-8.33,-1.5,21.39],closeCamPos:[-8.33,4.4,28.2],closeTarget:[-8.33,-1.7,21.39],tinyEra:`LATE 11TH–EARLY 12TH CENTURY • APPROX. AD 1075–1115`,tinyTitle:`GREAT KIVA A — EAST COURT GREAT KIVA`,tinyDesc:`Recessed East Court Great Kiva (built approx. AD 1075–1115) entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 open wall niches; four large square rubble-filled masonry columns supported the reconstructed timber roof (~9 ft 7 in).`,keyPoints:[`Architecture & Chronology: Built during Pueblo Bonito’s late 11th to early 12th century expansion (approx. AD 1075–1115, with use and remodeling continuing into the later 12th century). Entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 wall niches (which were reported open and empty when excavated).`,`Roof Support & Floor Features: Four large square rubble-filled masonry columns supported the reconstructed timber roof (~9 ft 7 in ceiling height), flanking a raised central firebox and paired subfloor masonry vaults (sometimes interpreted as foot drums, though their exact function remains uncertain).`,`Ceremonial Offerings Context: While Great Kiva A’s 34 wall niches were found open and empty upon excavation, turquoise, shell, and mineral offerings are documented from dedicatory architectural and ceremonial contexts at Pueblo Bonito.`],artType:`kiva_a`,artCaption:`Judd (1954, 1964 NMNH) & NPS (1980, p. 11): Great Kiva A (Approx. AD 1075–1115 • 4 Square Rubble-Filled Masonry Columns, 34 Open Wall Niches & Paired Subfloor Vaults)`,photo:`./renders/archival/pd_nps_great_kiva.jpg`,photoCap:`NPS Public Domain: Great Kiva A Subfloor Masonry Vaults, Central Firebox & 34 Wall Niches`,structures3D:[`4 large square rubble-filled masonry columns supporting reconstructed timber roof (~9 ft 7 in reconstructed ceiling height)`,`Raised central firebox & paired subfloor masonry vaults`,`Concentric masonry bench, 34 open wall niches & formal northern stairway`],archivalMedia:[{tab:`NPS Great Kiva Photo`,src:`./renders/archival/pd_nps_great_kiva.jpg`,badge:`PD-USGOV-NPS`,caption:`Great Kiva A subfloor masonry vaults, firebox & bench niches (NPS)`},{tab:`3D Kiva & LiDAR Scan`,src:`./renders/render_kiva_a.jpg`,badge:`3D DIGITAL TWIN`,caption:`3D Great Kiva A interpretive architectural reconstruction`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan showing Great Kiva A in the East Court (Lekson 1984)`},{tab:`0.5m LiDAR Hillshade`,src:`./renders/hud_stage3_lidar_clay_hillshade.jpg`,badge:`0.5m AIRBORNE LIDAR`,caption:`0.5m LiDAR bare-earth kiva depressions (OTSDEM.042019.6342.1)`}]},{id:`pueblo_bonito_257`,index:6,sectionId:`east_wing`,chipLabel:`06 • Rm 249 Aviary`,shortPin:`Rm 249 • 3 Macaws`,beaconLabel:`Room 249: 3 Scarlet Macaw Skeletons, Perches & Guano Floor`,beaconPos:[50.98,4.1,10.43],walkPos:[46.8,5.2,12.6],walkTarget:[50.98,1.85,10.43],camPos:[46.8,5.8,12.6],target:[50.98,1.85,10.43],closeCamPos:[48.2,4.2,11.8],closeTarget:[50.98,1.8,10.43],tinyEra:`STAGE III CLASSIC BONITO • APPROX. AD 1050–1085`,tinyTitle:`ROOM 249 — MACAW AVIARY & EAST WING CHAMBER`,tinyDesc:`Excavated by Judd (1954): yielded 3 Scarlet Macaw skeletons, wooden wall perches, adobe bowls & thick guano floor; near HABS NM-30 Section 1 T-doorways.`,keyPoints:[`Aviary Evidence (Judd 1954): Yielded 3 Scarlet Macaw (Ara macao) skeletons, a thick floor layer of compacted avian guano, adobe food/water bowls, and wooden perches set into the masonry walls. Reconstructed multi-story wall height and roof vigas are interpretive.`,`Collections & Genetics (Watson et al. 2015; George et al. 2018, PNAS): Pueblo Bonito has produced approximately 35 macaws plus 2 thick-billed parrots in recent reassessments. Sequenced Chaco macaws fall within the same broader mitochondrial clade (Haplo6) with low diversity across closely related haplotypes, consistent with a restricted founder/breeding population.`,`East Wing Doors & HABS No. NM-30 (LOC Item nm0107): Built in Type III banded core-and-veneer masonry (approx. AD 1050–1085). Nearby in East Wing Section No. 1 (Rooms 174–177, 225–226), HABS No. NM-30 Sheet 5 documents the measured T-Door on the West Wall of Room 226.`],artType:`tdoor_249`,artCaption:`Judd (1954 NMNH) & HABS No. NM-30 Sheet 5 (LOC nm0107): Room 249 Aviary (3 Macaws) & East Wing T-Doorway`,photo:`./renders/bonito_doorways.jpg`,photoCap:`NPS Public Domain: East Wing Aligned Enfilade Doorways & Type III Banded Masonry`,structures3D:[`East Wing T-shaped doorway profile (reconstructed after HABS No. NM-30 Sheet 5, Room 226 West Wall)`,`Reconstructed multi-pole Ponderosa pine doorway lintel & sandstone sill`,`Reconstructed wooden wall perches & ceiling vigas in Room 249 (Judd 1954)`],archivalMedia:[{tab:`Aligned Doorways (NPS)`,src:`./renders/bonito_doorways.jpg`,badge:`PD-USGOV-NPS`,caption:`East Wing aligned enfilade doorways (NPS)`},{tab:`HABS NM-30 Sheet 5`,src:`./renders/archival/pd_habs_sheet5_elevations.jpg`,badge:`HABS NM-30 (LOC nm0107)`,caption:`HABS No. NM-30 Sheet 5: Rm 226 T-Door, Rm 225 Corner Door & Rm 177 Window (LOC nm0107)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan (Lekson 1984)`},{tab:`3D Enfilade & LiDAR`,src:`./renders/render_doorways.jpg`,badge:`3D DIGITAL TWIN`,caption:`3D East Wing T-shaped & enfilade doorways`}]},{id:`pueblo_bonito_231`,index:7,sectionId:`east_wing`,chipLabel:`07 • Rm 168 Craft`,shortPin:`Rm 168 • Lapidary & Craft`,beaconLabel:`Room 168: Southeastern Lapidary & Craft Activity Area`,beaconPos:[30.86,4.2,39.87],walkPos:[30.86,6.8,45.2],walkTarget:[30.86,.35,39.87],camPos:[30.86,6.8,45.2],target:[30.86,.35,39.87],closeCamPos:[30.86,4.8,42.4],closeTarget:[30.86,.25,39.87],tinyEra:`STAGE III–IV • APPROX. AD 1050–1105`,tinyTitle:`ROOM 168 — LAPIDARY & CRAFT ACTIVITY`,tinyDesc:`Southeastern sector room associated with lapidary and craft activity. Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise-related evidence.`,keyPoints:[`Architecture: Part of the later southeastern roomblock expansion, constructed with core-and-veneer sandstone masonry. The room is reconstructed as a single-story space; exact original roof height and interior arrangement are uncertain.`,`Artifacts & Activity: Room 168 belongs to an area that included evidence for lapidary and craft activity. Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise-related evidence.`,`Archaeological Record: No secure evidence currently supports identifying Room 168 specifically as a copper-bell or shell-trumpet repository.`],artType:`lapidary_168`,artCaption:`Southeastern Sector (Rooms 168, 170 & 173): Ground- and Flaked-Stone Tools, Mineral Materials & Turquoise-Related Lapidary Activity`,photo:`./renders/archival/pd_nps_southeast_kivas_cliff.jpg`,photoCap:`NPS 1930s Public Domain: Southeastern Roomblocks & Kivas from Cliff Overlook`,structures3D:[`Southeastern roomblock core-and-veneer sandstone walls (reconstructed single-story space; exact original roof height uncertain)`,`Aligned interior doorway frame with sandstone sill & pine lintel (interpretive reconstruction)`,`Reconstructed interior work surface & ceiling vigas (interpretive reconstruction)`],archivalMedia:[{tab:`NPS Southeast Wing`,src:`./renders/archival/pd_nps_southeast_kivas_cliff.jpg`,badge:`PD-USGOV-NPS (1930s)`,caption:`Southeast kivas & roomblocks from cliff overlook (NPS, 1930s)`},{tab:`HABS NM-30 Sheet 6`,src:`./renders/archival/pd_habs_sheet6_kiva_details.jpg`,badge:`HABS NM-30 (LOC nm0107)`,caption:`HABS No. NM-30 Sheet 6: Section 2 1st-Floor Plan Rms 178–179, 235–242 & Kiva D (LOC nm0107)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan (Lekson 1984)`},{tab:`LiDAR Stage III–IV Scan`,src:`./renders/hud_stage5_phase3_4_wings_kivas.jpg`,badge:`0.5m LIDAR + STAGE III–IV`,caption:`Stage III–IV wings on 0.5m LiDAR DEM`}]},{id:`pueblo_bonito_9`,index:8,sectionId:`east_wing`,chipLabel:`08 • Rm 228 Solstice`,shortPin:`Rm 228 • Solstice Window`,beaconLabel:`Room 228 (with Room 225): ~120° ESE Winter Solstice Sunrise Corner Windows`,beaconPos:[52.53,4.5,33.72],walkPos:[56.2,9.4,37.8],walkTarget:[52.53,4.15,33.72],camPos:[56.2,9.4,37.8],target:[52.53,4.15,33.72],closeCamPos:[54.6,7.6,36.1],closeTarget:[52.53,4.1,33.72],tinyEra:`STAGE III–IV • APPROX. AD 1065–1110`,tinyTitle:`ROOM 228 — WINTER SOLSTICE CORNER WINDOW`,tinyDesc:`Rooms 228 & 225 in the southeastern sector feature exterior corner windows oriented at ~120° ESE toward the Winter Solstice sunrise (Reyman 1976).`,keyPoints:[`Solar Alignment (Reyman 1976, Science 193(4257):1037–1038): Both Rooms 225 and 228 in the southeastern sector have exterior corner windows oriented at azimuth ~120° ESE; field observations confirmed that at Winter Solstice sunrise (Dec 21), a narrow beam of sunlight enters and illuminates the opposite interior wall/corner.`,`Architecture & Reconstruction: Constructed in Type III/IV core-and-veneer sandstone masonry; upper wall elevations, ceiling height, and roof timbers shown in the 3D model are interpretive reconstructions.`,`HABS No. NM-30 Documentation (LOC Item nm0107): HABS No. NM-30 Section No. 1 (Sheets 1–5, 1940) records measured plans of Rooms 174–177 and 225–226, including the Corner Doorway in the NE Corner of Room 225 on Sheet 5.`],artType:`solstice_228`,artCaption:`Reyman (1976 Science 193:1037–1038): Rooms 225 & 228 ~120° ESE Winter Solstice Sunrise Corner Windows`,photo:`./renders/archival/pd_nps_corner_doorway.jpg`,photoCap:`NPS 1929 Public Domain: Diagonal Corner Aperture in Southeastern Rooms`,structures3D:[`~120° ESE exterior corner window aperture with stone sill & pine lintel (Reyman 1976)`,`Opposite interior west wall target surface illuminated at Winter Solstice sunrise (reconstructed)`,`Type III/IV core-and-veneer walls (reconstructed 2-story elevation)`],archivalMedia:[{tab:`NPS Corner Aperture`,src:`./renders/archival/pd_nps_corner_doorway.jpg`,badge:`PD-USGOV-NPS (1929)`,caption:`Southeastern corner aperture (NPS, 1929)`},{tab:`HABS NM-30 Sheet 5`,src:`./renders/archival/pd_habs_sheet5_elevations.jpg`,badge:`HABS NM-30 (LOC nm0107)`,caption:`HABS No. NM-30 Sheet 5: Corner Doorway in NE Corner of Room 225 & Rm 226 T-Door (LOC nm0107)`},{tab:`HABS NM-30 Sheet 2`,src:`./renders/archival/pd_habs_sheet2_plan.jpg`,badge:`HABS NM-30 (LOC nm0107)`,caption:`HABS No. NM-30 Sheet 2: Section 1 Plan Rms 174–177, 225–226 (LOC nm0107)`},{tab:`0.5m LiDAR Sweep`,src:`./renders/hud_stage1_lidar_sweep.jpg`,badge:`0.5m LIDAR POINT CLOUD`,caption:`0.5m airborne LiDAR elevation sweep`}]},{id:`pueblo_bonito_406`,index:9,sectionId:`west_spine`,chipLabel:`09 • Rm 326 Burials`,shortPin:`Rm 326 • Western Burials`,beaconLabel:`Room 326: Western Burial Cluster Chamber (Early Block AD 860–935 • 12 Individuals)`,beaconPos:[-58.8,6.4,.52],walkPos:[-53.8,9.6,3.4],walkTarget:[-58.8,3.6,.52],camPos:[-53.8,9.6,3.4],target:[-58.8,3.6,.52],closeCamPos:[-55.6,7.8,2.2],closeTarget:[-58.8,3.55,.52],tinyEra:`OLD BONITO ARCHITECTURAL BLOCK • APPROX. AD 860–935 CONSTRUCTION`,tinyTitle:`ROOM 326 — WESTERN BURIAL CLUSTER CHAMBER`,tinyDesc:`Belongs to one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935) and modified during later occupation. Reassessment identified 12 individuals (11 adults [10 females, 1 male] and 1 infant; older inventories reported 11).`,keyPoints:[`Architecture: Belongs to one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935 construction) and was modified during later occupation. Early Pueblo Bonito masonry with later alterations, including sealed openings and changes connecting Room 326 with neighboring rooms (reconstructed wall height and roof are interpretive).`,`Mortuary Use: Later reassessment of the human remains associated with Room 326 identified 12 individuals: 11 adults and one infant. The adults include 10 females and one male.`,`Excavation Inventories & Cluster: Older excavation inventories reported 11 individuals, which accounts for differences in published burial counts. Room 326 formed part of the larger western burial cluster that also included Rooms 320, 329, and 330.`],artType:`burial_326`,artCaption:`Judd (1954 NMNH), Akins (1986) & Reassessment: Room 326 (Early Block AD 860–935; Later Mortuary Use: 12 Individuals [10♀, 1♂, 1 Infant])`,photo:`./renders/archival/pd_nps_large_kiva_archival.jpg`,photoCap:`NPS 1930s Public Domain: Western Roomblocks & Kivas of Pueblo Bonito`,structures3D:[`Early Old Bonito western architectural block masonry with later alterations (reconstructed 2-story height)`,`Later sealed openings & reused metate step connecting Room 326 with neighboring Room 320 (interpretive reconstruction)`,`Western Burial Cluster context (Rooms 320, 326, 329, 330; later mortuary use)`],archivalMedia:[{tab:`Western Wing (NPS)`,src:`./renders/archival/pd_nps_large_kiva_archival.jpg`,badge:`PD-USGOV-NPS (1930s)`,caption:`Western roomblocks & kivas (NPS, 1930s)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan showing Western Burial Cluster Rooms 320, 326, 329, 330 (Lekson 1984)`},{tab:`1877 USGS Ground Plan`,src:`./renders/pd_usgs_1877_bonito_plan.jpg`,badge:`PD-USGOV-USGS (1877)`,caption:`1877 USGS ground plan of Pueblo Bonito western & northern arc (W.H. Jackson)`},{tab:`0.5m LiDAR Breakdown`,src:`./renders/lidar_data_and_foliage_breakdown.jpg`,badge:`0.5m AIRBORNE LIDAR`,caption:`0.5m LiDAR DEM & DSM breakdown`}]},{id:`landmark_threatening_rock`,index:10,sectionId:`west_spine`,chipLabel:`10 • 1941 Rockfall`,shortPin:`1941 Rockfall`,beaconLabel:`1941 Threatening Rock Collapse (~30,000 Tons)`,beaconPos:[38,15,-42],walkPos:[60,14,-18],walkTarget:[35,7.5,-42],camPos:[66,22,-12],target:[28,8.5,-42],closeCamPos:[48,13.5,-26],closeTarget:[34,7.5,-42],tinyEra:`11TH-CENTURY RETAINING TERRACE • COLLAPSED JAN 22, 1941`,tinyTitle:`THREATENING ROCK (TSÉ BÍYAH ANIIʼÁHÍ)`,tinyDesc:`Detached ~30,000-ton sandstone monolith braced by an 11th-century Chacoan terrace; collapsed Jan 22, 1941 across the northeastern outer wall.`,keyPoints:[`Geological Setting: Detached Upper Cretaceous Cliff House Sandstone monolith (Tsé Bíyah Aniiʼáhí, "Rock Braced Underneath") that stood immediately behind the northeastern arc of Pueblo Bonito.`,`Prehistoric Engineering (Judd 1959, Antiquity 33:135–137): In the 11th century, Chacoan builders constructed an earth-and-masonry retaining terrace reinforced with upright ponderosa pine logs beneath the undercut base of the cliff (modeled terrace and adjacent 4-story wall height are reconstructed).`,`1941 Collapse (Schumm & Chorley 1964, USGS Prof. Paper 454-H): On January 22, 1941 at 3:10 PM, after winter frost-wedging and erosion of its Menefee Formation shale pedestal, the monolith toppled, destroying part of the outer northern wall and crushing ~65 rooms.`],artType:`rockfall_1941`,artCaption:`Judd (1959) & Schumm & Chorley (1964 USGS): Threatening Rock Monolith & Jan 22, 1941 Collapse`,photo:`./renders/archival/pd_nps_north_canyon_overview.jpg`,photoCap:`NPS 1929 Public Domain: Threatening Rock Towering Behind Pueblo Bonito (Pre-1941)`,structures3D:[`Reconstructed Chacoan masonry-and-pine retaining terrace under cliff base (Frans Blom 1924 Plan; Judd 1959)`,`Jan 22, 1941 sandstone boulder talus cone (modeled from LiDAR & NPS survey)`,`Adjacent reconstructed 4-story Type II/III core-and-veneer Northern Spine`],archivalMedia:[{tab:`1929 NPS Pre-Collapse View`,src:`./renders/archival/pd_nps_north_canyon_overview.jpg`,badge:`PD-USGOV-NPS (1929)`,caption:`Threatening Rock towering behind Pueblo Bonito before 1941 collapse (NPS, 1929)`},{tab:`3D Cliff & Talus Scan`,src:`./renders/render_cliff.jpg`,badge:`0.5m LIDAR + 3D TALUS`,caption:`3D cliff & Jan 22, 1941 rockfall talus model`},{tab:`1877 USGS Restoration`,src:`./renders/archival/pd_usgs_1877_restoration.jpg`,badge:`PD-USGOV-USGS (1877)`,caption:`1877 USGS architectural restoration of Pueblo Bonito (W.H. Jackson)`},{tab:`0.5m LiDAR DSM Relief`,src:`./renders/hud_stage2_lidar_dsm_full.jpg`,badge:`0.5m LIDAR DSM`,caption:`0.5m LiDAR DSM rockfall relief (OTSDEM.042019.6342.1)`}]},{id:`pueblo_bonito_170`,index:11,sectionId:`greater_chaco`,chipLabel:`11 • Great Kiva Q`,shortPin:`Great Kiva Q`,beaconLabel:`Great Kiva Q: West Court Great Kiva (4 Large Wooden Roof Posts in Circular Masonry Settings)`,beaconPos:[-23.15,3.8,-11.68],walkPos:[-23.15,9.8,3.5],walkTarget:[-23.15,-1.8,-11.68],camPos:[-23.15,11.5,5.5],target:[-23.15,-1.6,-11.68],closeCamPos:[-23.15,5.8,-2.5],closeTarget:[-23.15,-2.1,-11.68],tinyEra:`CLASSIC BONITO PHASE • PROBABLY MID-11TH CENTURY`,tinyTitle:`GREAT KIVA Q — WEST COURT GREAT KIVA`,tinyDesc:`Recessed circular Great Kiva in the West Court (probably mid-11th century, predating Great Kiva A) with an encircling masonry bench, central firebox, paired rectangular subfloor vaults, and 4 large wooden roof-support posts seated in circular masonry settings.`,keyPoints:[`Chronology & Architecture: Great Kiva Q appears to predate Great Kiva A and probably belongs to an earlier major Pueblo Bonito construction phase around the mid-11th century (precise construction date uncertain). Recessed into the West Court with an encircling masonry bench, central firebox, paired rectangular subfloor vaults, and a reconstructed southern entry stairway/antechamber.`,`Roof Support: Great Kiva Q used four large wooden roof-support posts seated in circular masonry settings—visually and structurally distinct from the four square masonry columns of Great Kiva A.`,`Reconstruction Note: The full roof timbering, upper wall height, and southern stairway appearance shown in the model are interpretive reconstructions.`],artType:`chetro_kiva`,artCaption:`Judd (1964 NMNH) & NPS Survey: Great Kiva Q (Mid-11th Century • 4 Wooden Roof Posts in Circular Masonry Settings & Paired Subfloor Vaults)`,photo:`./renders/render_aerial.jpg`,photoCap:`Pueblo Bonito 3D Reconstruction & 0.5m LiDAR Survey: Open West Court & Great Kiva Q`,structures3D:[`4 large wooden roof-support posts seated in circular masonry settings (reconstructed; distinct from Great Kiva A square masonry columns)`,`Paired rectangular subfloor vaults, central firebox & encircling masonry bench`,`Reconstructed southern entry stairway/antechamber (full roof timbering & upper wall height are interpretive reconstructions)`],archivalMedia:[{tab:`West Court & Kiva Q`,src:`./renders/render_aerial.jpg`,badge:`0.5m LIDAR DIGITAL TWIN`,caption:`Open West Court & Great Kiva Q (3D / 0.5m LiDAR)`},{tab:`Western Kivas (NPS)`,src:`./renders/archival/pd_nps_large_kiva_archival.jpg`,badge:`PD-USGOV-NPS (1930s)`,caption:`Western roomblocks & West Court kivas (NPS, 1930s)`},{tab:`NPS Master Plan`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,badge:`PD-USGOV-NPS (1984)`,caption:`NPS measured site plan showing Great Kiva Q in West Court (Lekson 1984)`},{tab:`0.5m LiDAR Excavation`,src:`./renders/hud_stage3_lidar_clay_hillshade.jpg`,badge:`0.5m AIRBORNE LIDAR`,caption:`0.5m LiDAR bare-earth kiva depressions (OTSDEM.042019.6342.1)`}]},{id:`pueblo_bonito_22`,index:12,sectionId:`greater_chaco`,chipLabel:`12 • Rm 14 Spine`,shortPin:`Rm 14 • 4-Story Spine`,beaconLabel:`Room 14 / 85: Reconstructed Four-Story Northern Spine`,beaconPos:[6.53,9.6,-36.46],walkPos:[6.53,15.5,-21],walkTarget:[6.53,4.8,-36.46],camPos:[6.53,17.5,-19],target:[6.53,4.8,-36.46],closeCamPos:[6.53,11.2,-28.5],closeTarget:[6.53,4.5,-36.46],tinyEra:`STAGE I–III • APPROX. AD 860–1085`,tinyTitle:`ROOM 14 / 85 — RECONSTRUCTED 4-STORY NORTHERN SPINE`,tinyDesc:`Rising to a reconstructed 4 stories along the northern arc beneath the Cliff House Sandstone cliff, stepping down in amphitheater tiers toward the plazas.`,keyPoints:[`Multi-Stage Masonry (Lekson 1984; Windes & Ford 1996): Stage I lower courses (approx. AD 860–935) overlain by thick Type II/III core-and-veneer walls (approx. AD 1040–1085) along the outer northern spine.`,`Interpretive Reconstruction: The full four-story elevation, upper-floor arrangements, and roof height shown in the 3D model are interpretive reconstructions based on basal wall thickness and surviving beam-seat evidence.`,`Timber Provenance (Douglass 1929; Guiterman et al. 2016, PNAS 113(5):1186–1190): Spanned by Ponderosa pine and Spruce/Fir ceiling vigas harvested in the Chuska and San Mateo mountains and transported via long-distance overland timber procurement.`],artType:`sundagger_297`,artCaption:`Douglass (1929), Lekson (1984) & Guiterman et al. (2016): Room 14/85 Reconstructed Four-Story Northern Spine`,photo:`./renders/render_cliff.jpg`,photoCap:`Four-Story Northern Arc & Cliff House Sandstone Escarpment (0.5m LiDAR & NPS Survey)`,structures3D:[`Reconstructed 4-story (approx. 9.8 m) core-and-veneer outer northern wall`,`Reconstructed terraced amphitheater roomblocks stepping down toward the plaza`,`Reconstructed Ponderosa pine primary ceiling vigas and secondary latilla roof decks`],archivalMedia:[{tab:`4-Story Northern Arc`,src:`./renders/render_cliff.jpg`,badge:`3D ARCHITECTURAL MODEL`,caption:`Reconstructed 4-story northern spine & Cliff House Sandstone cliff (3D model)`},{tab:`Northern Roomblock (NPS)`,src:`./renders/archival/pd_nps_masonry_preservation.jpg`,badge:`PD-USGOV-NPS (1930s)`,caption:`Northern roomblocks below Cliff House Sandstone cliff (NPS, 1930s)`},{tab:`NPS Banded Masonry`,src:`./renders/archival/pd_nps_banded_masonry_doorway.jpg`,badge:`PD-USGOV-NPS (1929)`,caption:`Multi-story core-and-veneer masonry & viga sockets in northern arc (NPS, 1929)`},{tab:`0.5m LiDAR Sweep`,src:`./renders/hud_stage1_lidar_sweep.jpg`,badge:`0.5m LIDAR SURVEY`,caption:`0.5m airborne LiDAR elevation sweep (OT.042019.6342.1)`}]}],mp=[{index:1,era:`AD 850–1150 • Tsé Bił Ndzisgaii`,title:`3D Architectural Reconstruction of Pueblo Bonito`,body:`Set beneath a 30-meter Upper Cretaceous Cliff House Sandstone escarpment in northwestern New Mexico, Pueblo Bonito was the largest Great House in Chaco Canyon. This 3D interpretive reconstruction extrudes the 433 georeferenced room, kiva, and landmark polygons from HABS No. NM-30 (LOC Item nm0107) and NPS surveys atop the 0.5m airborne LiDAR terrain.`,factTitle:`ARCHIVAL PRECISION & INTERPRETIVE RECONSTRUCTION`,factText:`Aligned with the North–South meridian and East–West southern wall, Pueblo Bonito spans ~175 m (162–175 m) × 98 m with 433 georeferenced polygons (403 active + 30 buried sub-court features; ~800 total multi-story rooms rising up to a reconstructed 4 stories) and 35+ kivas.`,camPos:[-22,64,108],target:[0,3.5,-8],season:`equinox`,hour:16.85,phase:`all`,discoveryId:null},{index:2,era:`CHAPTER 2 • Stage I: AD 850–935 (Burials AD 800–1130)`,title:`Room 33: Matrilineal Mortuary Crypt`,body:`Construction began c. AD 850 with a crescent of Type I tabular sandstone slabs. In 1896, George H. Pepper excavated Room 33—uncovering 14 individuals buried above and below a pine plank floor across ~330 years (AD 800–1130).`,factTitle:`ANCIENT GENOMICS (9/9 SEQUENCED: B2y1) & >56,000 TURQUOISE ITEMS`,factText:`Burial 14 (>11,200 turquoise & >3,300 shell ornaments, AD 800–850) and Burial 13 (>5,800 turquoise pieces) lay below the plank floor (>56,000 turquoise items in Room 33 total). Complete mtDNA genomes from 9 individuals were 100% identical (haplotype B2y1; Kennett et al. 2017).`,camPos:[-32.4,11.2,-26.2],target:[-32.39,2.7,-32.6],season:`equinox`,hour:16.85,phase:`stage1`,discoveryId:`pueblo_bonito_380`},{index:3,era:`CHAPTER 3 • Old Bonito Construction & Late 11th–Early 12th Century Cache Deposit`,title:`Rooms 28 & 32: Cylinder Jar Cache & Cacao Residue`,body:`Originally part of the early Old Bonito northern arc and later remodeled and subdivided with an added upper story, excavations in Room 28 recovered approximately 174 whole ceramic vessels, including ~111–112 Chacoan cylinder jars (with roughly 99 concentrated together on a raised storage shelf/area) alongside bowls and pitchers, burned during a termination event around AD 1100.`,factTitle:`CHEMICAL THEOBROMINE ANALYSIS (CROWN & HURST 2009, PNAS)`,factText:`Chemical residue analysis tested five cylinder jar sherds from Pueblo Bonito and detected theobromine—the biomarker for Theobroma cacao—in three of them, demonstrating preparation or consumption of cacao beverages reached via Mesoamerican exchange.`,camPos:[-24.4,11.4,-23.8],target:[-24.43,2.7,-30.7],season:`equinox`,hour:16.75,phase:`all`,discoveryId:`pueblo_bonito_240`},{index:4,era:`CHAPTER 4 • Old Bonito Core (Macaw Use ca. AD 900–1040)`,title:`Room 38: Macaw-Keeping Room & Ritual Deposit`,body:`In Room 38, excavations recovered 14 scarlet macaw skeletons—12 associated with and embedded in a thick deposit of compacted bird guano (indicating live birds were kept in the room) and 2 intentionally placed in subfloor hollows—along with a turquoise-inlaid black jet frog.`,factTitle:`CHRONOLOGY & GENETICS (WATSON ET AL. 2015; GEORGE ET AL. 2018)`,factText:`Radiocarbon and ancient-DNA studies show that macaw acquisition at Pueblo Bonito occurred mostly between AD 900 and 1040, and sequenced Chaco macaws fall within the same broader mitochondrial clade (Haplo6) with low diversity across closely related haplotypes, consistent with a restricted founder/breeding population.`,camPos:[-12.8,12.2,-31.5],target:[-13.6,2.7,-39.9],season:`summer`,hour:16.9,phase:`all`,discoveryId:`pueblo_bonito_352`},{index:5,era:`CHAPTER 5 • Stage II–III & January 22, 1941 Collapse`,title:`The Reconstructed 4-Story Northern Spine & 1941 Threatening Rock`,body:`Between AD 1040 and 1085, Chacoan builders raised the Northern Spine (interpretively reconstructed to 4 stories) using core-and-veneer masonry and timber beams carried >75 km from the Chuska and San Mateo mountains (Guiterman et al. 2016).`,factTitle:`THREATENING ROCK (TSÉ BÍYAH ANIIʼÁHÍ) — JAN 22, 1941`,factText:`Chacoan builders braced a detached ~30,000-ton sandstone monolith behind the NE wall with a stone-and-pine terrace. On Jan 22, 1941, it collapsed across the northeastern outer wall, crushing ~65 rooms.`,camPos:[72,28,-8],target:[20,8.5,-42],season:`summer`,hour:17,phase:`stage2`,discoveryId:`landmark_threatening_rock`},{index:6,era:`CHAPTER 6 • Stage III–IV: Approx. AD 1050–1110`,title:`Room 249 Aviary, Room 168 Lapidary Area & Solstice Windows`,body:`During Classic Bonito expansion, builders constructed the East Wing in Type III banded veneer. Room 249 yielded 3 Scarlet Macaw skeletons, wooden wall perches, adobe bowls, and a thick guano floor (Judd 1954).`,factTitle:`HABS NO. NM-30 (LOC ITEM NM0107), ROOM 168 CRAFT ACTIVITY & SOLSTICE WINDOWS`,factText:`Nearby in East Wing Section No. 1, HABS No. NM-30 Sheet 5 documents the Room 226 T-door and Room 225 corner doorway; Rooms 168, 170, and 173 in the southeastern sector produced ground- and flaked-stone tools, mineral materials, and turquoise-related craft evidence, and Rooms 225 & 228 feature ~120° ESE Winter Solstice sunrise corner windows (Reyman 1976).`,camPos:[46.8,5.8,12.6],target:[50.98,1.85,10.43],season:`winter`,hour:7.8,phase:`stage3`,discoveryId:`pueblo_bonito_257`},{index:7,era:`CHAPTER 7 • Late 11th–Early 12th Century (Approx. AD 1075–1115)`,title:`Great Kiva A: East Court Great Kiva`,body:`Recessed into the East Court and entered by a formal northern stairway, Great Kiva A (built approx. AD 1075–1115) was surrounded by a concentric masonry bench and 34 wall niches (reported open and empty when excavated). Four large square rubble-filled masonry columns supported the reconstructed timber roof (~9 ft 7 in ceiling height), flanking a raised central firebox and paired subfloor masonry vaults.`,factTitle:`CEREMONIAL ARCHITECTURE & DEDICATORY DEPOSITS`,factText:`While Great Kiva A’s 34 wall niches were found open and empty upon excavation, turquoise, shell, and mineral offerings are documented from dedicatory architectural and ceremonial contexts at Pueblo Bonito.`,camPos:[-8.33,8.8,34.2],target:[-8.33,-1.6,21.39],season:`equinox`,hour:16.7,phase:`all`,discoveryId:`pueblo_bonito_159`},{index:8,era:`CHAPTER 8 • Classic Bonito Phase (Probably Mid-11th Century)`,title:`Great Kiva Q: West Court Great Kiva`,body:`Appearing to predate Great Kiva A (probably mid-11th century), Great Kiva Q is recessed into the West Court with an encircling masonry bench, central firebox, paired rectangular subfloor vaults, and a reconstructed southern entry stairway/antechamber, using four large wooden roof-support posts seated in circular masonry settings—visually and structurally distinct from the four square masonry columns of Great Kiva A.`,factTitle:`INTERPRETIVE RECONSTRUCTION NOTE`,factText:`The full roof timbering, upper wall height, and southern stairway appearance shown in the model for Great Kiva Q are interpretive reconstructions.`,camPos:[-23.15,11.5,7.5],target:[-23.15,-1.6,-11.68],season:`equinox`,hour:16.8,phase:`all`,discoveryId:`pueblo_bonito_170`},{index:9,era:`CHAPTER 9 • Cardinal & Solar Geometry`,title:`Room 14 / 85: Reconstructed Four-Story Northern Spine`,body:`Along the northern arc directly beneath the Cliff House Sandstone cliff, Room 14/85 anchored the northern spine (interpretively reconstructed to 4 stories / ~9.8 m), stepping down in amphitheater tiers toward the North–South dividing wall and East–West southern wall.`,factTitle:`CARDINAL MERIDIAN & EQUINOX ARCHITECTURE`,factText:`Pueblo Bonito combines a North–South bisecting plaza wall with a straight East–West southern closing wall, organizing the D-shaped Great House into dual courts.`,camPos:[6.53,17.5,-19],target:[6.53,4.8,-36.46],season:`summer`,hour:16.9,phase:`all`,discoveryId:`pueblo_bonito_22`},{index:10,era:`CHAPTER 10 • Interactive Exploration`,title:`Dark Sky Kiva Fires & Free 3D Exploration`,body:`As night falls over the high desert (1,885 m elevation), ceremonial fires glow within the kivas and plazas. Hover over any room in Pueblo Bonito to inspect its archaeological record or scroll to walk through the chambers.`,factTitle:`RECORD YOUR OWN WALKTHROUGH VIDEO`,factText:`Click 🎥 Record in the top bar at any time to capture and download an HD WebM video tour of Chaco Canyon directly from your browser.`,camPos:[0,52,86],target:[-4,2,-12],season:`night`,hour:21.5,phase:`all`,discoveryId:null}],hp=null,gp=new Map,_p=new Map,vp=new Map(pp.map(e=>[e.id,e]));vp.has(`pueblo_bonito_240`)&&vp.set(`pueblo_bonito_377`,vp.get(`pueblo_bonito_240`));var yp=new Map(fp.map(e=>[e.id,e])),bp=new Set([`pueblo_bonito_380`,`pueblo_bonito_159`]),J,Y,X,xp,Z,Sp,Cp,wp,Tp,Q,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip=null,Lp=null,Rp=null,zp=-105,Bp=-85,Vp=210,Hp=170,Up=null,Wp=null,Gp=null,Kp=null,qp=null,Jp={uRoomDataMap:{value:null},uFocusMaskMap:{value:null},uDimAmount:{value:0},uActiveCenterRadius:{value:new Wt(0,0,0,0)},uHoverCenterRadius:{value:new Wt(0,0,0,0)}},Yp=0,Xp=0,Zp=null,Qp=[],$p=new Map,em=[],tm=null,nm=[],rm=new Map,im=`orbit`,am=`overview`,om=null,sm=null,cm={w:!1,a:!1,s:!1,d:!1,turnLeft:!1,turnRight:!1,shift:!1},lm=.08,um=-.06,dm=1.8,fm=4.2,pm=!1,mm={x:0,y:0},hm=performance.now(),gm=!1,_m=0,vm=0,ym=0,bm=0,xm=!1,Sm=null,Cm=[{s:0,pos:[-6,58,118],look:[0,4,-8],roomId:null},{s:.08,pos:[1.5,22,64],look:[-3,4.2,-16],roomId:null},{s:.16,pos:[2,10.5,38],look:[-8.3,-1,21.4],roomId:null},{s:.25,pos:[-8.33,8.8,34.2],look:[-8.33,-1.6,21.39],roomId:`pueblo_bonito_159`},{s:.34,pos:[30.86,7.6,46.5],look:[30.86,.35,39.87],roomId:`pueblo_bonito_231`},{s:.43,pos:[46.8,5.8,12.6],look:[50.98,1.85,10.43],roomId:`pueblo_bonito_257`},{s:.52,pos:[56.8,12.2,38.5],look:[52.53,4.15,33.72],roomId:`pueblo_bonito_9`},{s:.62,pos:[-12.33,12.2,-34],look:[-12.33,3.6,-39.94],roomId:`pueblo_bonito_352`},{s:.71,pos:[-24.41,12.6,-26.8],look:[-24.41,4.05,-30.66],roomId:`pueblo_bonito_240`},{s:.81,pos:[-30.65,11.5,-30.2],look:[-30.77,4.45,-33.03],roomId:`pueblo_bonito_8`},{s:.9,pos:[-32.45,11.4,-29.6],look:[-32.77,4.35,-32.43],roomId:`pueblo_bonito_380`},{s:1,pos:[-53.2,12.2,3.8],look:[-58.8,3.6,.52],roomId:`pueblo_bonito_406`}],wm=new nd,Tm=new B,Em=new B(0,-1,0),Dm=`equinox`,Om=16.35,km=new B(-.75,.4,.52),Am=252,jm=!1,Mm=!1,Nm=null,Pm=null,Fm=null,Im=null,Lm=null,Rm=null,zm=null,Bm=[],Vm=new Map,Hm=`pueblo_bonito`,$=null,Um=null,Wm=!1,Gm=0,Km={uniforms:{tDiffuse:{value:null},uSunScreenPos:{value:new L(.2,.8)},uSunVisible:{value:1},uIsNight:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uSunScreenPos;
    uniform float uSunVisible;
    uniform float uIsNight;
    varying vec2 vUv;

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec3 col = texel.rgb;

      // Subtle atmospheric golden sun-scatter glow when sun is in/near view
      float sunDist = distance(vUv, uSunScreenPos);
      float sunGlow = exp(-sunDist * 3.0) * 0.08 * uSunVisible * (1.0 - uIsNight);
      col += vec3(1.0, 0.84, 0.58) * sunGlow;

      // Balanced AgX-inspired warm highlight & cool-slate shadow split-toning
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      vec3 shadowTone = mix(vec3(0.95, 0.97, 1.03), vec3(0.88, 0.93, 1.08), uIsNight);
      vec3 highlightTone = mix(vec3(1.03, 0.99, 0.93), vec3(1.02, 0.96, 0.88), uIsNight);
      col *= mix(shadowTone, highlightTone, smoothstep(0.15, 0.82, luma));

      // Gentle filmic contrast without crushing darks
      vec3 sCurve = smoothstep(0.0, 1.0, col);
      col = mix(col, sCurve, 0.14);

      // Subtle optical vignette at screen edges
      vec2 centered = vUv - 0.5;
      float vig = 1.0 - dot(centered, centered) * 0.24;
      col *= clamp(vig, 0.82, 1.0);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), texel.a);
    }
  `};async function qm(){let e=document.getElementById(`loading-status-text`),t=document.getElementById(`loading-progress-bar`),n=window.location.search.includes(`record_tour=1`)||window.location.search.includes(`view=`);n&&fetch(`/__hold_vt__`).catch(()=>{});try{t&&(t.style.width=`22%`),hp=await(await fetch(`./chaco_data.json?v=20261005factchecked`)).json(),Ym(hp),t&&(t.style.width=`42%`),nh(),_h(),yh(),bh(),wg(),Tg(),Eg(`summer`),Qm(),t&&(t.style.width=`68%`);for(let e of pp)if(Array.isArray(e.archivalMedia)&&e.archivalMedia[0]&&e.archivalMedia[0].src){let t=new Image;t.src=e.archivalMedia[0].src}let r=setInterval(()=>{},40);if(await ch(t,e),clearInterval(r),hh(),ph(),jp.visible=!0,mh(),gh(),Ng(),jg(),ip(),vg(rp()),Th(Dm,Om),bg(`orbit`,!1),vh(`overview`,!1),ym=0,bm=0,xm=!1,Y.position.set(-6,58,118),Z.target.set(0,4,-8),Z.autoRotate=!1,Z.enableZoom=!0,Z.update(),Vh(),jh(0),$h(),yg(),Jm(),window.location.search.includes(`view=`)||window.location.search.includes(`align=`)){Xp=Yp,Jp.uDimAmount.value=Xp;let e=document.getElementById(`room-side-note`),t=document.getElementById(`guided-stops-bar`);e&&(e.style.transition=`none`),t&&(t.style.transition=`none`)}t&&(t.style.width=`100%`);let i=document.getElementById(`loading-overlay`);if(i&&(i.classList.add(`fade-out`),n||window.location.search.includes(`view=`)||window.location.search.includes(`align=`)?i.style.display=`none`:setTimeout(()=>{i.style.display=`none`},450)),kg(),Fg(performance.now(),.016),kh(),Og(),ih(),window.location.search.includes(`record_tour=1`)){await ug();return}hm=performance.now(),requestAnimationFrame(Ig),window.location.search.includes(`view=`)||window.location.search.includes(`align=`)?(await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Fg(performance.now(),.016),kh(),Og(),ih(),fetch(`/__done__`,{method:`POST`,body:`ok`}).catch(()=>{})):setTimeout(()=>{for(let e of pp)if(Array.isArray(e.archivalMedia)){for(let t of e.archivalMedia)if(t&&t.src){let e=new Image;e.src=t.src}}},1200)}catch(t){console.error(`Initialization error:`,t),e&&(e.textContent=`Error loading experience: ${t.message}`),n&&fetch(`/__done__`,{method:`POST`,body:`error:${t.message}`}).catch(()=>{})}}function Jm(){let e=new URLSearchParams(window.location.search),t=e.get(`align`);if(t){Pg(t),sm&&=(Y.position.copy(sm.endPos),Z.target.copy(sm.endTarget),Z.update(),null),Xp=Yp,Jp.uDimAmount.value=Xp;return}let n=e.get(`view`);if(!n)return;Z.autoRotate=!1;let r=document.getElementById(`btn-toggle-autorotate`);r&&r.classList.remove(`active`);let i=e.get(`zoom`)===`close`||e.get(`zoom`)===`inside`,a=(e,t=.75)=>{ym=t,bm=t,jh(t),xm=!1,Z.enabled=!0;let n=vp.get(e),r=gp.get(e);if(r){if(bp.add(e),Xh(r),Zh(r,!1),Bh(r),i&&n&&n.closeCamPos&&n.closeTarget)Y.position.set(...n.closeCamPos),Z.target.set(...n.closeTarget),Z.update();else if(n&&n.walkPos&&n.walkTarget)Y.position.set(...n.walkPos),Z.target.set(...n.walkTarget),Z.update();else if(i&&(r.category===`kiva`||r.category===`great_kiva`)){let e=r.cx||0,t=-(r.cy||0);Y.position.set(e+.8,1.35,t+2.8),Z.target.set(e-.6,-1.1,t-1.6),Z.update()}else{let e=r.cx||0,t=-(r.cy||0);Y.position.set(e,11.2,t+6.5),Z.target.set(e,2.2,t),Z.update()}Jh=Y.position.distanceTo(Z.target),Xp=Yp,Jp.uDimAmount.value=Xp}},o=t=>{bg(`orbit`,!1),ym=t===0?0:.25,bm=ym,jh(bm);let n=document.getElementById(`scroll-progress-fill`);n&&(n.style.width=`${(t/Math.max(1,mp.length-1)*100).toFixed(1)}%`);let r=mp[t];if(r){if(Y.position.set(...r.camPos),Z.target.set(...r.target),Z.update(),Th(r.season,r.hour),Ah(r.phase),r.discoveryId&&e.get(`dossier`)!==`0`){bp.add(r.discoveryId);let e=gp.get(r.discoveryId);e&&(Xh(e),Zh(e,!0),Bh(e))}else Vh()}};if(n.startsWith(`chapter`)){let e=parseInt(n.replace(`chapter`,``),10);o(I.clamp((e||1)-1,0,mp.length-1))}else if(n.startsWith(`section_`)){let e=n.replace(`section_`,``),t=yp.get(e);t&&(ym=e===`overview`?0:.25,bm=ym,jh(bm),bg(e===`overview`?`orbit`:`guided`,!1),vh(e,!1),t.roomIds.length>0?a(t.roomIds[0],.55):(Y.position.set(-6,58,118),Z.target.set(0,4,-8),Z.update(),Vh()))}else if(n===`map`)document.getElementById(`map-drawer`).classList.remove(`hidden`),document.getElementById(`btn-open-map`).classList.add(`active`),$h();else if(n===`explore`||n===`orbit`)ym=0,bm=0,jh(0),Vh(),Y.position.set(-6,58,118),Z.target.set(0,4,-8),Z.update();else if(n===`wide`)ym=.18,bm=.18,jh(.18),Vh(),Yp=0,Xp=0,Jp.uDimAmount.value=0,xm=!1,Z.enabled=!0,Y.position.set(12,62,108),Z.target.set(-6,2,-14),Z.update();else if(n===`walkin`)ym=.16,bm=.16,jh(.16),Vh(),Y.position.set(2,10.5,38),Z.target.set(-8.3,-1,21.4),Z.update();else if(n===`guided`||n===`room_33`)a(`pueblo_bonito_380`,.9);else if(n===`room_28`)a(`pueblo_bonito_240`,.71);else if(n===`room_32`)a(`pueblo_bonito_8`,.81);else if(n===`room_38`)a(`pueblo_bonito_352`,.62);else if(n===`walk`||n===`kiva_a`)a(`pueblo_bonito_159`,.25);else if(n===`room_249`)a(`pueblo_bonito_257`,.43);else if(n===`room_168`)a(`pueblo_bonito_231`,.34);else if(n===`room_228`)a(`pueblo_bonito_9`,.52);else if(n===`room_326`)a(`pueblo_bonito_406`,1);else if(n===`hover_demo`){ym=.18,bm=.18,jh(.18),Vh(),xm=!1,Z.enabled=!0,Y.position.set(-22,25,-4),Z.target.set(-24.41,3.8,-30.66),Z.update();let e=gp.get(`pueblo_bonito_240`);e&&Fh(e,window.innerWidth*.49,window.innerHeight*.45)}else n===`night`?o(9):n===`atlas`?document.getElementById(`atlas-modal`).classList.remove(`hidden`):gp.has(n)&&a(n,.5)}function Ym(e){if(e&&Array.isArray(e.features))for(let t of e.features){gp.set(t.id,t);let e=(t.name||``).trim().toLowerCase();e&&!_p.has(e)&&_p.set(e,t)}}function Xm(e,t,n=1024){let r=(e-zp)/Vp,i=(t-Bp)/Hp;return[r*n,i*n]}function Zm(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)%1e3/1e3}function Qm(){let e=1024;Up=document.createElement(`canvas`),Up.width=e,Up.height=e;let t=Up.getContext(`2d`);if(t.fillStyle=`rgb(0, 0, 0)`,t.fillRect(0,0,e,e),hp&&Array.isArray(hp.features)){for(let n of hp.features){if(n.site!==`pueblo_bonito`||n.subcourt||!Array.isArray(n.polygon)||n.polygon.length<3)continue;let r=Math.round(45+Zm(n.id||n.name||`rm`)*190),i=170,a=n.phase||``;n.category===`kiva`||n.category===`great_kiva`?i=245:a.includes(`Stage I `)||a.startsWith(`Stage I:`)?i=60:a.includes(`Stage II`)?i=115:a.includes(`Stage IV`)&&(i=215),t.beginPath(),n.polygon.forEach(([n,r],i)=>{let[a,o]=Xm(n,-r,e);i===0?t.moveTo(a,o):t.lineTo(a,o)}),t.closePath(),t.lineJoin=`round`,t.lineWidth=6,t.strokeStyle=`rgb(${r}, ${i}, 40)`,t.stroke(),t.fillStyle=`rgb(${r}, ${i}, 220)`,t.fill()}for(let n of hp.features){if(n.site!==`pueblo_bonito`||n.subcourt||!Array.isArray(n.polygon)||n.polygon.length<3)continue;let r=Math.round(45+Zm(n.id||n.name||`rm`)*190),i=170,a=n.phase||``;n.category===`kiva`||n.category===`great_kiva`?i=245:a.includes(`Stage I `)||a.startsWith(`Stage I:`)?i=60:a.includes(`Stage II`)?i=115:a.includes(`Stage IV`)&&(i=215),t.beginPath(),n.polygon.forEach(([n,r],i)=>{let[a,o]=Xm(n,-r,e);i===0?t.moveTo(a,o):t.lineTo(a,o)}),t.closePath(),t.lineWidth=2.2,t.strokeStyle=`rgb(${r}, ${i}, 15)`,t.stroke()}}Wp=new kc(Up),Wp.flipY=!1,Wp.wrapS=i,Wp.wrapT=i,Wp.minFilter=l,Wp.magFilter=l,Wp.needsUpdate=!0,Gp=document.createElement(`canvas`),Gp.width=e,Gp.height=e,Kp=Gp.getContext(`2d`),Kp.fillStyle=`rgb(0, 0, 0)`,Kp.fillRect(0,0,e,e),qp=new kc(Gp),qp.flipY=!1,qp.wrapS=i,qp.wrapT=i,qp.minFilter=l,qp.magFilter=l,qp.needsUpdate=!0,Jp.uRoomDataMap.value=Wp,Jp.uFocusMaskMap.value=qp}function $m(){if(!Kp||!qp)return;let e=Gp.width,t=Kp;t.filter=`none`,t.globalCompositeOperation=`source-over`,t.fillStyle=`rgb(0, 0, 0)`,t.fillRect(0,0,e,e),t.globalCompositeOperation=`lighter`,t.filter=`blur(3px)`;let n=(n,r,i,a,o)=>{if(n){if(Array.isArray(n.polygon)&&n.polygon.length>=3)t.beginPath(),n.polygon.forEach(([n,r],i)=>{let[a,o]=Xm(n,-r,e);i===0?t.moveTo(a,o):t.lineTo(a,o)}),t.closePath(),t.lineJoin=`round`,t.lineCap=`round`,t.lineWidth=6,t.strokeStyle=`rgb(${r}, ${i}, 0)`,t.stroke(),t.fillStyle=`rgb(${a}, ${o}, 0)`,t.fill();else if(n.cx!==void 0&&n.cy!==void 0){let[r,i]=Xm(n.cx,-n.cy,e),s=(n.radius_m||6)/Vp*e;t.beginPath(),t.arc(r,i,s+4,0,Math.PI*2),t.fillStyle=`rgb(${a}, ${o}, 0)`,t.fill()}}},r=(e,t,r,i,a)=>{e&&(n(e,t,r,i,a),e.id===`pueblo_bonito_240`?n(gp.get(`pueblo_bonito_377`),t,r,i,a):e.id===`pueblo_bonito_377`?n(gp.get(`pueblo_bonito_240`),t,r,i,a):e.id===`pueblo_bonito_132`&&n(gp.get(`pueblo_bonito_131`),t,r,i,a))};if($){r($,240,0,255,0);let e=$.id===`pueblo_bonito_240`||$.id===`pueblo_bonito_377`,t=e?-25.8:$.cx||0,n=e?-31:-($.cy||0),i=e?5.4:$.radius_m?$.radius_m+1.4:Math.max(3,Math.hypot($.width_m||4,$.depth_m||4)*.55),a=Math.abs(t)>85||n<-65||n>65?2:1;Jp.uActiveCenterRadius.value.set(t,n,i,a)}else Jp.uActiveCenterRadius.value.set(0,0,0,0);if(Zp){r(Zp,0,240,0,255);let e=Zp.id===`pueblo_bonito_240`||Zp.id===`pueblo_bonito_377`,t=e?-25.8:Zp.cx||0,n=e?-31:-(Zp.cy||0),i=e?5.6:Zp.radius_m?Zp.radius_m+1.6:Math.max(3.2,Math.hypot(Zp.width_m||4.2,Zp.depth_m||4.2)*.58),a=Math.abs(t)>85||n<-65||n>65?2:1;Jp.uHoverCenterRadius.value.set(t,n,i,a)}else Jp.uHoverCenterRadius.value.set(0,0,0,0);t.filter=`none`,t.globalCompositeOperation=`source-over`,qp.needsUpdate=!0}function eh(){let e=document.getElementById(`viewport-stage`),t=e&&e.clientWidth>0?e.clientWidth:window.innerWidth,n=e&&e.clientHeight>0?e.clientHeight:window.innerHeight,r=Math.max(240,t),i=Math.max(240,n);return document.body.dataset.aspectLayout=r/i<.98?`portrait`:`landscape`,{width:r,height:i}}function th(e){if(e>=1.25)return 44;let t=I.degToRad(22),n=I.clamp(1.28/Math.max(.45,e),1,1.85),r=I.radToDeg(2*Math.atan(Math.tan(t)*n));return I.clamp(r,44,68)}function nh(){let e=document.getElementById(`canvas-container`),{width:t,height:n}=eh(),r=t/n;J=new Ps,J.background=new H(5800628),J.fog=new Ns(13938828,42e-5),Y=new si(th(r),r,.65,3600),Y.position.set(-6,58,118),X=new Ms({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!0}),X.setSize(t,n),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.shadowMap.enabled=!0,X.shadowMap.type=2,X.toneMapping=4,X.toneMappingExposure=1.02,X.outputColorSpace=Ve,e.appendChild(X.domElement),Um=new Ki(X),Um.compileEquirectangularShader(),xp=new Lf,xp.setSize(t,n),xp.domElement.style.position=`absolute`,xp.domElement.style.top=`0`,xp.domElement.style.left=`0`,xp.domElement.style.pointerEvents=`none`,xp.domElement.style.zIndex=`15`,xp.domElement.style.overflow=`hidden`,e.appendChild(xp.domElement),Z=new _d(Y,X.domElement),Z.target.set(0,4,-8),Z.enableDamping=!0,Z.dampingFactor=.065,Z.maxPolarAngle=Math.PI*.494,Z.minDistance=.75,Z.maxDistance=950,Z.enableZoom=!0,Z.zoomSpeed=1.15,`zoomToCursor`in Z&&(Z.zoomToCursor=!0),Z.enableRotate=!0,Z.rotateSpeed=.85,Z.enablePan=!0,Z.screenSpacePanning=!0,Z.autoRotate=!1,Z.autoRotateSpeed=.36,Z.addEventListener(`start`,()=>{if(sm=null,Z.autoRotate){Z.autoRotate=!1;let e=document.getElementById(`btn-toggle-autorotate`);e&&e.classList.remove(`active`)}gm&&pg(),im===`story`&&!Wm&&clearTimeout(om)}),Tp=new Af,Tp.scale.setScalar(2600),J.add(Tp);let i=Tp.material.uniforms;i.turbidity.value=2.8,i.rayleigh.value=1.45,i.mieCoefficient.value=.0042,i.mieDirectionalG.value=.8,Q=new Lu(16769202,3.6),Q.castShadow=!0,Q.shadow.mapSize.width=4096,Q.shadow.mapSize.height=4096,Q.shadow.camera.near=10,Q.shadow.camera.far=750,Q.shadow.camera.left=-112,Q.shadow.camera.right=112,Q.shadow.camera.top=112,Q.shadow.camera.bottom=-112,Q.shadow.bias=-45e-5,Q.shadow.normalBias=.045,J.add(Q),J.add(Q.target),Ep=new wu(8302818,10252872,.78),J.add(Ep),Op=new Lu(15049836,.45),Op.position.set(0,55,-135),Op.castShadow=!1,J.add(Op),Dp=new Ru(4864812,.38),J.add(Dp),kp=new Fu(16764822,0,24,1.35),kp.position.set(-32.4,4.5,-32.6),J.add(kp),Ap=new Au(16770754,0,48,Math.PI*.26,.55,1.2),Ap.position.set(-32.4,20,-32.6),Ap.castShadow=!1,J.add(Ap),J.add(Ap.target),jp=new xs,J.add(jp),Mp=new xs,J.add(Mp),Np=new xs,J.add(Np),Pp=new xs,J.add(Pp),Fp=new xs,J.add(Fp),Sp=new Kf(X),Sp.setPixelRatio(Math.min(window.devicePixelRatio,2)),Sp.setSize(t,n);let a=new qf(J,Y);Sp.addPass(a),Cp=new Yf(new L(t,n),.08,.35,.92),Sp.addPass(Cp);let o=new Zf;Sp.addPass(o),wp=new Uf(Km),Sp.addPass(wp),window.addEventListener(`resize`,kg)}var rh=new B;function ih(){if(X&&J&&Y){if(wp&&Q){rh.copy(Y.position).addScaledVector(km,500),rh.project(Y);let e=+(rh.z>=-1&&rh.z<=1);wp.uniforms.uSunScreenPos.value.set(rh.x*.5+.5,rh.y*.5+.5),wp.uniforms.uSunVisible.value=e}Sp?Sp.render():X.render(J,Y),xp&&xp.render(J,Y)}}function ah(e=``,t=``){let n=e,r=n.toLowerCase(),i=t.toLowerCase();return i.includes(`canyon_floor`)||r.includes(`terrain`)&&!i.includes(`cliff`)?1:n===`Chacra_Mesa_Cliff_And_Fajada_Butte`||i.includes(`cliff`)?2:n.includes(`Threatening_Rock`)?3:n.includes(`Phase1_OldBonito`)?4:n.includes(`Phase2_NorthArc`)?5:n.includes(`Phase3_EastWing`)||n.includes(`Phase3_WestWing`)?6:n.includes(`Phase4_`)||n.includes(`Chetro_Ketl`)||n.includes(`Pueblo_Del_Arroyo`)?7:n.includes(`PB_Kiva_Masonry`)||n.includes(`Casa_Rinconada`)?8:n.includes(`PB_Kiva_Benches`)?9:n.includes(`PB_Room_Floors`)?10:n.includes(`PB_Timber_`)||i.includes(`timber`)?11:6}function oh(e,t,n){if(e.userData.desertShaderInjected)return;e.userData.desertShaderInjected=!0;let r=ah(t,n);e.userData.nodeTypeId=r,e.side=0,e.shadowSide=0,e.polygonOffset=!0,r===1?(e.color.setRGB(.95,.91,.84),e.roughness=.96,e.metalness=.01,e.polygonOffsetFactor=2,e.polygonOffsetUnits=4):r===2?(e.color.setRGB(1.02,.9,.76),e.roughness=.89,e.metalness=.02,e.polygonOffsetFactor=1.5,e.polygonOffsetUnits=3):r===3?(e.color.setRGB(.86,.72,.58),e.roughness=.92,e.metalness=.02,e.polygonOffsetFactor=-.3,e.polygonOffsetUnits=-1):r===4?(e.color.setRGB(.76,.56,.42),e.roughness=.93,e.metalness=.02,e.polygonOffsetFactor=-.2,e.polygonOffsetUnits=-.5):r===5?(e.color.setRGB(.9,.69,.52),e.roughness=.88,e.metalness=.02,e.polygonOffsetFactor=-.4,e.polygonOffsetUnits=-1):r===6?(e.color.setRGB(1,.82,.66),e.roughness=.85,e.metalness=.02,e.polygonOffsetFactor=t.includes(`WestWing`)?-.5:-.6,e.polygonOffsetUnits=t.includes(`WestWing`)?-1.2:-1.5):r===7?(e.color.setRGB(1.04,.88,.72),e.roughness=.86,e.metalness=.02,e.polygonOffsetFactor=-.8,e.polygonOffsetUnits=-2):r===8?(e.color.setRGB(.84,.57,.4),e.roughness=.9,e.metalness=.02,e.polygonOffsetFactor=.3,e.polygonOffsetUnits=.8):r===9?(e.color.setRGB(.74,.58,.44),e.roughness=.91,e.metalness=.01,e.polygonOffsetFactor=-.7,e.polygonOffsetUnits=-1.8):r===10?(e.color.setRGB(.56,.44,.34),e.roughness=.96,e.metalness=.01,e.polygonOffsetFactor=.6,e.polygonOffsetUnits=1.5):r===11&&(e.color.setRGB(.46,.32,.21),e.roughness=.88,e.metalness=.02,e.polygonOffsetFactor=-1.2,e.polygonOffsetUnits=-3),e.onBeforeCompile=e=>{e.uniforms.uNodeTypeId={value:r},e.uniforms.uRoomDataMap=Jp.uRoomDataMap,e.uniforms.uFocusMaskMap=Jp.uFocusMaskMap,e.uniforms.uDimAmount=Jp.uDimAmount,e.uniforms.uActiveCenterRadius=Jp.uActiveCenterRadius,e.uniforms.uHoverCenterRadius=Jp.uHoverCenterRadius,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         varying vec3 vDesertWorldPos;
         varying vec3 vDesertWorldNormal;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
         vDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
         vDesertWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
         uniform float uNodeTypeId;
         uniform sampler2D uRoomDataMap;
         uniform sampler2D uFocusMaskMap;
         uniform float uDimAmount;
         uniform vec4 uActiveCenterRadius;
         uniform vec4 uHoverCenterRadius;
         varying vec3 vDesertWorldPos;
         varying vec3 vDesertWorldNormal;

         float desertHash(vec3 p) {
           p = fract(p * 0.3183099 + 0.1);
           p *= 17.0;
           return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
         }
         float desertNoise2D(vec2 p) {
           vec2 i = floor(p);
           vec2 f = fract(p);
           f = f * f * (3.0 - 2.0 * f);
           float a = desertHash(vec3(i, 0.0));
           float b = desertHash(vec3(i + vec2(1.0, 0.0), 0.0));
           float c = desertHash(vec3(i + vec2(0.0, 1.0), 0.0));
           float d = desertHash(vec3(i + vec2(1.0, 1.0), 0.0));
           return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
         }`).replace(`#include <dithering_fragment>`,`
         // Sample georeferenced Pueblo Bonito room data & blurred 3D room focus mask in world space
         vec2 pbUv = vec2(
           (vDesertWorldPos.x - (${zp.toFixed(1)})) / ${Vp.toFixed(1)},
           (vDesertWorldPos.z - (${Bp.toFixed(1)})) / ${Hp.toFixed(1)}
         );
         bool inPbBounds = pbUv.x >= 0.0 && pbUv.x <= 1.0 && pbUv.y >= 0.0 && pbUv.y <= 1.0;
         vec4 roomData = inPbBounds ? texture2D(uRoomDataMap, pbUv) : vec4(0.0);
         vec4 focusSample = inPbBounds ? texture2D(uFocusMaskMap, pbUv) : vec4(0.0);

         // Radial fallback ONLY for outlying Downtown Chaco / Fajada Butte landmarks outside Pueblo Bonito UV bounds
         float radialActive = 0.0;
         if (uActiveCenterRadius.w > 1.5) {
           float dAct = length(vDesertWorldPos.xz - uActiveCenterRadius.xy);
           radialActive = 1.0 - smoothstep(uActiveCenterRadius.z * 0.72, uActiveCenterRadius.z + 2.2, dAct);
         }
         float radialHover = 0.0;
         if (uHoverCenterRadius.w > 1.5) {
           float dHov = length(vDesertWorldPos.xz - uHoverCenterRadius.xy);
           radialHover = 1.0 - smoothstep(uHoverCenterRadius.z * 0.72, uHoverCenterRadius.z + 2.0, dHov);
         }

         float activeMask = inPbBounds ? smoothstep(0.28, 0.85, focusSample.r) : radialActive;
         float hoverMask = inPbBounds ? smoothstep(0.28, 0.85, focusSample.g) : radialHover;

         // Prevent high cliff escarpment (>16m) from claiming room floor masks
         if (vDesertWorldPos.y > 16.5 && uActiveCenterRadius.z < 18.0) {
           activeMask = 0.0;
           hoverMask = 0.0;
         }

         // ------------------------------------------------------------------
         // A. GEOLOGICAL & ECOLOGICAL DIFFERENTIATION (TERRAIN vs CLIFF vs PLAZA)
         // ------------------------------------------------------------------
         if (uNodeTypeId > 0.5 && uNodeTypeId < 2.5) {
           bool isEscarpment = (uNodeTypeId > 1.5) || (vDesertWorldPos.y > 2.45);
           if (isEscarpment) {
             // 35m Chacra Mesa Cliff House Sandstone Escarpment & Fajada Butte
             float bed1 = sin(vDesertWorldPos.y * 1.85 + desertNoise2D(vDesertWorldPos.xz * 0.04) * 2.2);
             float bed2 = sin(vDesertWorldPos.y * 6.4 + vDesertWorldPos.x * 0.08);
             vec3 cliffGold = vec3(0.92, 0.71, 0.49);
             vec3 cliffOchre = vec3(0.76, 0.53, 0.35);
             vec3 cliffRecess = vec3(0.42, 0.29, 0.20);
             vec3 cliffTone = mix(cliffOchre, cliffGold, smoothstep(-0.6, 0.7, bed1));
             cliffTone = mix(cliffTone, cliffRecess, smoothstep(0.65, 0.98, -bed2) * 0.45);

             // Dark manganese-iron desert varnish streaks dripping down vertical cliff faces
             float varnishStreak = desertNoise2D(vec2(vDesertWorldPos.x * 0.38, vDesertWorldPos.y * 0.06));
             float verticalFace = 1.0 - abs(vDesertWorldNormal.y);
             float varnishMask = smoothstep(0.54, 0.82, varnishStreak) * verticalFace * smoothstep(4.5, 22.0, vDesertWorldPos.y);
             cliffTone = mix(cliffTone, vec3(0.24, 0.18, 0.15), varnishMask * 0.62);

             gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * cliffTone * 1.22, 0.82);
           } else {
             // High-Desert Canyon Floor: Plaza Courts vs Sagebrush Scrub & Chaco Wash
             float distToPlaza = length((vDesertWorldPos.xz - vec2(-2.0, 12.0)) * vec2(0.82, 1.18));
             float inPlazaCourt = (1.0 - smoothstep(46.0, 68.0, distToPlaza)) * step(-36.0, vDesertWorldPos.z) * step(vDesertWorldPos.z, 48.0);

             float scrubPatch = desertNoise2D(vDesertWorldPos.xz * 0.16);
             float fineScrub = desertNoise2D(vDesertWorldPos.xz * 0.95);
             float washChannel = exp(-pow((vDesertWorldPos.z - 125.0 + sin(vDesertWorldPos.x * 0.018) * 18.0) * 0.045, 2.0));

             // Gray-olive big sagebrush (Artemisia tridentata) & rabbitbrush vs alkali desert silt
             vec3 alkaliEarth = vec3(0.76, 0.65, 0.52);
             vec3 sagebrushOlive = vec3(0.45, 0.48, 0.36);
             vec3 dryGrassGold = vec3(0.66, 0.58, 0.43);
             vec3 exteriorFloor = mix(alkaliEarth, dryGrassGold, smoothstep(0.3, 0.7, scrubPatch));
             float shrubClump = smoothstep(0.46, 0.76, scrubPatch * 0.65 + fineScrub * 0.35);
             exteriorFloor = mix(exteriorFloor, sagebrushOlive, shrubClump * 0.72);
             exteriorFloor = mix(exteriorFloor, vec3(0.62, 0.53, 0.43), washChannel * 0.55);

             // Sun-baked compacted caliche & swept sand inside East & West Courts
             vec3 plazaCaliche = mix(vec3(0.84, 0.71, 0.56), vec3(0.74, 0.61, 0.47), fineScrub * 0.45);
             vec3 floorTarget = mix(exteriorFloor, plazaCaliche, inPlazaCourt);

             // Smoothly darken packed earth inside room footprints on the terrain mesh
             floorTarget *= mix(1.0, 0.64, smoothstep(0.35, 0.65, roomData.b));
             gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * floorTarget * 1.24, 0.85);
           }
         }

         // ------------------------------------------------------------------
         // B. ARCHITECTURAL MASONRY & ROOM-BY-ROOM VARIATION (NO MONOCHROME, ZERO ALIASING!)
         // ------------------------------------------------------------------
         float yFw = fwidth(vDesertWorldPos.y);
         float courseAtten = 1.0 - smoothstep(0.018, 0.075, yFw);

         if (uNodeTypeId >= 3.5 && uNodeTypeId <= 10.5) {
           // Per-room stone quarry & weathering variation from baked CRA polygon map (smoothly blended)
           float roomHash = roomData.r;
           float roomHashBlend = smoothstep(0.02, 0.16, roomHash);
           vec3 warmQuarry = vec3(1.07, 0.97, 0.88);
           vec3 coolUmberQuarry = vec3(0.89, 0.94, 1.02);
           vec3 roomTint = mix(coolUmberQuarry, warmQuarry, roomHash);
           float brightnessVar = 0.88 + roomHash * 0.24;
           gl_FragColor.rgb *= mix(vec3(1.0), roomTint * brightnessVar, roomHashBlend);

           // Partition wall-line mortar shadow on horizontal wall caps & floors (never on vertical wall faces!)
           float horizMask = smoothstep(0.45, 0.85, abs(vDesertWorldNormal.y));
           float mortarBand = smoothstep(0.015, 0.045, roomData.b) * (1.0 - smoothstep(0.085, 0.14, roomData.b));
           gl_FragColor.rgb *= mix(1.0, 0.85, mortarBand * horizMask);

           // Type III Banded Ashlar & Chink Spall coursing on Classic Bonito wings (fwidth anti-aliased)
           if (uNodeTypeId > 5.5 && uNodeTypeId < 6.5) {
             float spallBand = sin(vDesertWorldPos.y * 26.0 + vDesertWorldPos.x * 0.25);
             float spallDark = smoothstep(0.55, 0.92, spallBand);
             gl_FragColor.rgb *= mix(1.0, mix(1.04, 0.78, spallDark * 0.55), courseAtten);
           }

           // Old Bonito Type I tabular slab mortar joints & lichen patina (fwidth anti-aliased)
           if (uNodeTypeId > 3.5 && uNodeTypeId < 4.5) {
             float slabCourse = sin(vDesertWorldPos.y * 19.0 + desertNoise2D(vDesertWorldPos.xz * 1.8) * 1.5);
             gl_FragColor.rgb *= mix(1.0, mix(0.84, 1.05, smoothstep(-0.5, 0.6, slabCourse)), courseAtten);
           }

           // Subterranean Kiva hearth soot & plaster warmth near floor
           if (uNodeTypeId > 7.5 && uNodeTypeId < 9.5) {
             float kivaDepth = smoothstep(-2.4, 1.2, vDesertWorldPos.y);
             gl_FragColor.rgb *= mix(vec3(0.76, 0.64, 0.55), vec3(1.04, 0.96, 0.88), kivaDepth);
           }

           // Dark packed-earth interior room floors (PB_Room_Floors_And_Roofs)
           if (uNodeTypeId > 9.5 && uNodeTypeId < 10.5) {
             float earthernGrain = desertNoise2D(vDesertWorldPos.xz * 2.4);
             gl_FragColor.rgb *= mix(0.72, 0.94, earthernGrain);
           }
         }

         // ------------------------------------------------------------------
         // C. GROUND / CAVITY AMBIENT OCCLUSION & FILTERED SANDSTONE GRAIN
         // ------------------------------------------------------------------
         float hAboveGround = vDesertWorldPos.y;
         float groundContactAO = smoothstep(-2.2, 2.6, hAboveGround);
         float cavityFactor = mix(0.76, 1.0, groundContactAO);
         float strataWave = sin(vDesertWorldPos.y * 2.4 + vDesertWorldPos.x * 0.04) * 0.028;
         float grainFw = length(fwidth(vDesertWorldPos.xz));
         float grainAtten = 1.0 - smoothstep(0.03, 0.14, grainFw);
         float smoothGrain = (desertNoise2D(vDesertWorldPos.xz * 7.5 + vec2(vDesertWorldPos.y * 5.3, -vDesertWorldPos.y * 3.7)) - 0.5) * 0.032 * grainAtten;
         gl_FragColor.rgb *= clamp(cavityFactor + strataWave + smoothGrain, 0.66, 1.10);

         // ------------------------------------------------------------------
         // D. DRAMATIC ROOM FOCUS SPOTLIGHT & HOVER HIGHLIGHT
         //    Clicking a room darkens the surrounding ruin and illuminates the
         //    selected room; zooming out smoothly restores full daylight (uDimAmount -> 0).
         // ------------------------------------------------------------------
         if (uDimAmount > 0.001) {
           float outsideDim = mix(1.0, 0.16, uDimAmount);
           vec3 dimmedBg = gl_FragColor.rgb * outsideDim;

           // Focused room is brightly illuminated while preserving sandstone mortar detail
           vec3 litActiveRoom = gl_FragColor.rgb * (1.0 + 0.52 * uDimAmount) * vec3(1.10, 1.03, 0.93);
           gl_FragColor.rgb = mix(dimmedBg, litActiveRoom, clamp(activeMask, 0.0, 1.0));
         }

         // Hovering any room highlights its 3D walls and floor with warm sandstone light
         if (hoverMask > 0.01) {
           gl_FragColor.rgb *= (1.0 + hoverMask * 0.45) * mix(vec3(1.0), vec3(1.10, 1.03, 0.92), hoverMask);
         }

         #include <dithering_fragment>
        `)}}var sh=`https://www.gstatic.com/aistudio/starter-apps/chaco-canyon/chaco_canyon.glb`;function ch(e,t,n=1){return new Promise((r,i)=>{let a=new jd,o=n===2?sh:`./chaco_canyon.glb`;a.load(o,e=>{Ip=e.scene;let t=X.capabilities.getMaxAnisotropy();Ip.traverse(e=>{if(e.isMesh){e.castShadow=!0,e.receiveShadow=!0,Qp.push(e);let n=e.name||``,r=n.toLowerCase();Array.isArray(e.material)?e.material=e.material.map(e=>e&&e.clone()):e.material&&=e.material.clone();let i=Array.isArray(e.material)?e.material:[e.material];for(let e of i)if(e){for(let n of[`map`,`normalMap`,`roughnessMap`,`metalnessMap`])e[n]&&(e[n].anisotropy=t,e[n].needsUpdate=!0);if(e.normalMap&&e.normalScale){let t=(e.name||``).toLowerCase(),n=t.includes(`cliff`)?2.45:t.includes(`masonry`)?2.35:1.75;e.normalScale.set(n,n)}e.envMapIntensity=.12,oh(e,n,e.name||``),e.needsUpdate=!0}let a=(i[0]&&i[0].name||``).toLowerCase();if(n===`Chaco_Canyon_Terrain`||a.includes(`canyon_floor`)||r.includes(`terrain`)&&!a.includes(`cliff`)?Lp=e:(n===`Chacra_Mesa_Cliff_And_Fajada_Butte`||r.includes(`terrain`)&&a.includes(`cliff`))&&(Rp=e),(n.includes(`Roof`)||n.includes(`Viga`)||n.includes(`Timber`))&&em.push(e),n.includes(`Threatening_Rock`)&&(tm=e),!(r.includes(`terrain`)||r.includes(`cliff`)||r.includes(`butte`)||r.includes(`threatening_rock`))){let t=`Stage_III_Wings_And_Kivas_AD1060_1085`;n.includes(`Phase1_OldBonito`)?t=`Stage_I_Old_Bonito_AD850_935`:n.includes(`Phase2_NorthArc`)?t=`Stage_II_North_4Story_Spine_AD1040_1060`:n.includes(`Phase3_`)||n.includes(`PB_Kiva_`)||n.includes(`PB_Room_Floors`)||n.includes(`PB_Timber_`)?t=`Stage_III_Wings_And_Kivas_AD1060_1085`:(n.includes(`Phase4_`)||n.includes(`Chetro_Ketl`)||n.includes(`Pueblo_Del_Arroyo`)||n.includes(`Casa_Rinconada`))&&(t=`Stage_IV_South_Arc_And_Plaza_AD1085_1115`),$p.has(t)||$p.set(t,[]),$p.get(t).push(e)}}}),J.add(Ip),r()},t=>{if(t.total>0){let n=Math.min(96,Math.round(68+t.loaded/t.total*28));e&&(e.style.width=`${n}%`)}},a=>{n<3?setTimeout(()=>{ch(e,t,n+1).then(r,i)},300):i(a)})})}function lh(e,t,n){if(!n||n.length<3)return!1;let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i][0],s=n[i][1],c=n[a][0],l=n[a][1];s>t!=l>t&&e<(c-o)*(t-s)/(l-s+1e-9)+o&&(r=!r)}return r}function uh(e,t,n=``){if(n.includes(`Threatening_Rock`))return gp.get(`landmark_threatening_rock`);if(n.includes(`Casa_Rinconada`))return gp.get(`landmark_casa_rinconada`);if(n.includes(`Fajada_Butte`)&&t>110&&e>180)return gp.get(`landmark_fajada_butte`);let r=e,i=-t;if(!hp||!hp.features)return null;for(let e of hp.features)if(!e.subcourt&&(e.polygon&&lh(r,i,e.polygon)||(e.category===`kiva`||e.category===`great_kiva`)&&e.radius_m&&Math.hypot((e.cx||0)-r,(e.cy||0)-i)<=e.radius_m+.6))return e;let a=null,o=3.2;for(let e of pp){let t=gp.get(e.id);if(!t)continue;let n=Math.hypot((t.cx||0)-r,(t.cy||0)-i);n<o&&(o=n,a=t)}if(a)return a;if(n!==`Chaco_Canyon_Terrain`&&!n.toLowerCase().includes(`terrain`)){let e=null,t=5.5;for(let n of hp.features){if(n.subcourt)continue;let a=Math.hypot((n.cx||0)-r,(n.cy||0)-i);a<t&&(t=a,e=n)}return e}return null}function dh(e,t){let n=[];if(Lp&&n.push(Lp),Rp&&(t<-38||e>180&&t>110)&&n.push(Rp),n.length===0)return 0;Tm.set(e,140,t),wm.set(Tm,Em);let r=wm.intersectObjects(n,!1);return r.length>0?r[0].point.y:0}function fh(e,t){let n=dh(e,t),r=n+dm;if(hp&&hp.features&&dm<8){let i=e,a=-t;for(let e of hp.features)if(e.category===`room`&&e.polygon){let t=(e.cx||0)-i,o=(e.cy||0)-a;if(t*t+o*o<144&&lh(i,a,e.polygon)){let t=Math.min(8.5,(e.height_m||4.2)+1.35);r=Math.max(r,n+t);break}}}return r}function ph(){jp.clear(),Bm.length=0,Vm.clear();let e=[{key:`meridian_noon`,pts:[new B(-11.5,1.8,-82),new B(-11.5,1.8,78)],color:16770155},{key:`equinox_wall`,pts:[new B(88,2,38),new B(-88,2,38)],color:16306240}];for(let t of e){let e=new gc(new Pr().setFromPoints(t.pts),new Jl({color:t.color,dashSize:3.2,gapSize:1.8,transparent:!0,opacity:.42,depthWrite:!1}));e.computeLineDistances(),e.userData.alignKey=t.key,jp.add(e),Vm.set(t.key,e)}Nm=new xs,Nm.visible=!1,J.add(Nm)}function mh(){Mp.clear();for(let e of[{name:`Great Kiva A`,x:-8.33,emberY:-2.2,lightY:-.85,z:22.02,r:.56},{name:`Great Kiva Q`,x:-23.15,emberY:-2.2,lightY:-.85,z:-12.69,r:.52},{name:`Kiva L`,x:24.79,emberY:-1.55,lightY:-.55,z:-4.29,r:.36},{name:`Kiva G`,x:39.39,emberY:-1.55,lightY:-.55,z:-3.15,r:.36},{name:`Kiva D`,x:61.07,emberY:-1.55,lightY:-.55,z:25.86,r:.38},{name:`Kiva R`,x:-34.35,emberY:-1.8,lightY:-.65,z:-18.43,r:.38},{name:`Kiva B`,x:-6.83,emberY:-1.8,lightY:-.65,z:39.47,r:.36},{name:`Kiva 16`,x:-17.21,emberY:-1.8,lightY:-.65,z:-24.81,r:.38}]){let t=new Fu(16742184,0,42,1.45);t.position.set(e.x,e.lightY,e.z),t.userData.baseY=e.lightY,t.userData.phase=Math.random()*Math.PI*2,Mp.add(t);let n=new U(new al(e.r,e.r*1.15,.24,16),new br({color:16747051}));n.position.set(e.x,e.emberY,e.z),Mp.add(n);let r=new U(new Wl(e.r*.65,12,10),new br({color:16765301}));r.scale.set(1,.55,1),r.position.set(e.x,e.emberY+.12,e.z),Mp.add(r)}Mp.visible=!1}function hh(){if(!Fp)return;Fp.clear();let e=document.createElement(`canvas`);e.width=256,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#9c714a`,t.fillRect(0,0,256,256);for(let e=0;e<256;e+=16){let n=e/16%3==1?8:14,r=e/16%2*28;for(let i=-32;i<256;i+=56){let a=.88+(i*17+e*31&15)/15*.22;t.fillStyle=`rgb(${Math.round(186*a)},${Math.round(138*a)},${Math.round(94*a)})`,t.fillRect(i+r+1,e+1,53,n)}}let n=new kc(e);n.wrapS=r,n.wrapT=r,n.repeat.set(2,2),n.colorSpace=Ve;let i=document.createElement(`canvas`);i.width=128,i.height=128;let a=i.getContext(`2d`);a.fillStyle=`#6e492b`,a.fillRect(0,0,128,128);for(let e=0;e<64;e++)a.fillStyle=e%2==0?`rgba(42, 24, 12, 0.22)`:`rgba(138, 96, 58, 0.16)`,a.fillRect(0,e*2,128,1);let o=new kc(i);o.wrapS=r,o.wrapT=r,o.colorSpace=Ve;let s=new Kl({color:6835510,roughness:.96,metalness:.01,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),c=new Kl({map:o,color:13145702,roughness:.86,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-3}),l=new Kl({map:o,color:10383946,roughness:.9,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-3}),u=new Kl({map:o,color:3878437,roughness:.94,metalness:.01,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-3}),d=new Kl({map:n,color:14201998,roughness:.88,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-1.4,polygonOffsetUnits:-2.8}),f=new Kl({map:n,color:11569507,roughness:.92,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-1.6,polygonOffsetUnits:-3.2}),p=new Kl({color:1182985,roughness:.98,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),m=new Kl({color:3879468,roughness:.96,metalness:.01,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),h=(e,t)=>{let n=gp.get(e);if(!n||!Array.isArray(n.polygon)||n.polygon.length<3)return;let r=n.cx||0,i=n.cy||0,a=new ol;n.polygon.forEach(([e,t],n)=>{let o=r+(e-r)*.94,s=i+(t-i)*.94;n===0?a.moveTo(o,s):a.lineTo(o,s)}),a.closePath();let o=new Hl(a);o.rotateX(-Math.PI/2);let c=new U(o,s);c.position.y=t,c.receiveShadow=!0,Fp.add(c)},g=(e=.56,t=.95,n=.36,r=!1)=>{let i=new xs;if(r){let r=t*.46,a=t*.54,o=e*.62,s=e,l=new U(new Jr(o,r,n*.7),p);l.position.set(0,r*.5,0),i.add(l);let u=new U(new Jr(s,a,n*.7),p);u.position.set(0,r+a*.5,0),i.add(u);for(let e of[-1,1]){let t=new U(new Jr((s-o)*.5+.14,r,n),d);t.position.set(e*(o*.5+((s-o)*.25+.07)),r*.5,0),t.castShadow=!0,i.add(t);let c=new U(new Jr(.14,a,n),d);c.position.set(e*(s*.5+.07),r+a*.5,0),c.castShadow=!0,i.add(c)}let m=new U(new Jr(o+.36,.08,n+.08),f);m.position.set(0,.04,0),i.add(m);for(let e=-1;e<=1;e++){let n=new U(new al(.045,.045,s+.48,10),c);n.rotation.z=Math.PI*.5,n.position.set(0,t+.05,e*.09),n.castShadow=!0,i.add(n)}}else{let r=new U(new Jr(e,t,n*.7),p);r.position.set(0,t*.5,0),i.add(r);for(let r of[-1,1]){let a=new U(new Jr(.14,t,n),d);a.position.set(r*(e*.5+.07),t*.5,0),a.castShadow=!0,i.add(a)}let a=new U(new Jr(e+.32,.08,n+.08),f);a.position.set(0,.04,0),i.add(a);let o=new U(new Jr(e+.42,.11,n+.06),c);o.position.set(0,t+.055,0),o.castShadow=!0,i.add(o)}return i};{h(`pueblo_bonito_380`,4.28);let e=new xs;e.position.set(-32.77,4.3,-32.43),e.rotation.y=-.38;for(let t=-2;t<=2;t++){let n=new U(new Jr(.24,.05,1.38),c);n.position.set(t*.25,.03,0),n.receiveShadow=!0,n.castShadow=!0,e.add(n)}for(let[t,n]of[[-.68,-.62],[.68,-.62],[-.68,.62],[.68,.62]]){let r=new U(new al(.07,.075,1.65,10),l);r.position.set(t,.82,n),r.castShadow=!0,e.add(r)}let t=g(.5,.82,.3,!1);t.position.set(0,0,.78),e.add(t);for(let t of[-.45,0,.45]){let n=new U(new al(.065,.065,1.68,10),c);n.rotation.z=Math.PI*.5,n.position.set(0,1.58,t),n.castShadow=!0,e.add(n)}Fp.add(e)}{h(`pueblo_bonito_240`,3.93),h(`pueblo_bonito_377`,3.93);let e=new xs;e.position.set(-24.41,3.95,-30.66),e.rotation.y=-.36;let t=new U(new Jr(.34,1.65,2.15),d);t.position.set(-1.35,.82,0),t.castShadow=!0,t.receiveShadow=!0,e.add(t);let n=g(.58,1.05,.34,!1);n.position.set(.65,0,-.88),e.add(n);let r=new U(new Jr(2.4,.32,.42),f);r.position.set(.25,.16,-.72),r.receiveShadow=!0,e.add(r);for(let t of[-.85,-.15,.55,1.25]){let n=new U(new al(.08,.08,2.15,10),u);n.rotation.x=Math.PI*.5,n.position.set(t,1.48,0),n.castShadow=!0,e.add(n)}Fp.add(e)}{h(`pueblo_bonito_8`,4.38);let e=new xs;e.position.set(-30.77,4.4,-33.03),e.rotation.y=-.36;let t=new U(new Jr(.42,.38,1.65),d);t.position.set(-.68,.19,0),t.castShadow=!0,t.receiveShadow=!0,e.add(t);let n=g(.52,.88,.32,!1);n.position.set(-.22,0,-.78),e.add(n);for(let t of[-.42,.28]){let n=new U(new al(.07,.07,1.75,10),l);n.rotation.z=Math.PI*.5,n.position.set(0,1.45,t),n.castShadow=!0,e.add(n)}Fp.add(e)}{h(`pueblo_bonito_352`,3.43);let e=new xs;e.position.set(-12.33,3.45,-39.94);let t=new U(new Jr(2.35,.36,.44),f);t.position.set(0,.18,-.76),t.receiveShadow=!0,e.add(t);for(let[t,n]of[[-.58,.46],[.58,.64]]){let r=g(n,.58,.28,!1);r.position.set(t,1.05,-.88),e.add(r)}let n=g(.64,.92,.3,!1);n.rotation.y=Math.PI*.5,n.position.set(1.18,0,0),e.add(n);for(let t of[-.48,.48]){let n=new U(new Jr(.58,.12,.58),d);n.position.set(t,.06,.22),e.add(n);let r=new U(new Jr(.4,.14,.4),m);r.position.set(t,.065,.22),e.add(r)}Fp.add(e)}{h(`pueblo_bonito_257`,1.63);let e=new xs;e.position.set(50.98,1.65,10.43);let t=g(.92,1.48,.38,!0);t.rotation.y=Math.PI*.5,t.position.set(-.92,0,0),e.add(t);for(let t of[-.48,.38]){let n=new U(new al(.06,.06,1.95,10),c);n.rotation.z=Math.PI*.5,n.position.set(0,1.32,t),n.castShadow=!0,e.add(n)}Fp.add(e)}{h(`pueblo_bonito_231`,.26);let e=new xs;e.position.set(30.86,.26,39.87);let t=g(.62,1.12,.36,!1);t.position.set(0,0,-.85),e.add(t);let n=new U(new Jr(1.65,.34,.44),f);n.position.set(0,.17,.55),n.receiveShadow=!0,e.add(n),Fp.add(e)}{h(`pueblo_bonito_9`,3.92);let e=new xs;e.position.set(52.53,3.92,33.72);let t=g(.46,.58,.42,!1);t.rotation.y=-Math.PI*.33,t.position.set(.78,.68,.68),e.add(t);let n=new U(new Jr(.12,.85,.85),d);n.position.set(-.85,.55,-.35),e.add(n),Pm=new xs;let r=new B(.68,.7,.58),i=new B(-.78,.55,-.35),a=new B().subVectors(i,r),o=a.length(),s=new B().addVectors(r,i).multiplyScalar(.5),c=new Yt().setFromUnitVectors(new B(0,1,0),a.clone().normalize());Fm=new U(new al(.14,.08,o,16,1,!0),new br({color:16764744,transparent:!0,opacity:.24,side:2,blending:2,depthWrite:!1})),Fm.position.copy(s),Fm.quaternion.copy(c),Pm.add(Fm),Im=new U(new al(.065,.038,o,16,1,!0),new br({color:16774064,transparent:!0,opacity:.46,side:2,blending:2,depthWrite:!1})),Im.position.copy(s),Im.quaternion.copy(c),Pm.add(Im),Lm=new U(new Si(.24,.34),new br({color:16771205,transparent:!0,opacity:.82,side:2,blending:2,depthWrite:!1})),Lm.position.set(-.77,.55,-.35),Lm.rotation.y=Math.PI/2,Pm.add(Lm),Rm=new U(new Si(.22,1.35),new br({color:16763717,transparent:!0,opacity:.22,side:2,blending:2,depthWrite:!1})),Rm.rotation.x=-Math.PI/2,Rm.rotation.z=-Math.PI*.33,Rm.position.set(-.05,.03,.12),Pm.add(Rm),zm=new Fu(16764757,2.4,5.5,1.4),zm.position.set(-.35,.65,-.1),Pm.add(zm),e.add(Pm),Fp.add(e)}{h(`pueblo_bonito_406`,3.48);let e=new xs;e.position.set(-58.8,3.5,.52);let t=g(.58,.96,.36,!1);t.position.set(0,0,-.82),e.add(t);let n=new U(new Jr(.54,.16,.36),d);n.position.set(0,.08,-.45),n.castShadow=!0,e.add(n);for(let[t,n,r,i,a]of[[-.42,-.15,.55,.42,.12],[.38,-.08,.52,.46,-.08],[-.25,.42,.64,.48,.05],[.42,.48,.58,.44,-.14]]){let o=new U(new Jr(r,.05,i),f);o.rotation.y=a,o.position.set(t,.025,n),o.receiveShadow=!0,e.add(o)}Fp.add(e)}{let e=new xs;for(let[t,n]of[[-25.11,-13.64],[-25.11,-9.72],[-21.19,-13.64],[-21.19,-9.72]]){let r=new U(new al(.38,.43,2.95,24),l);r.position.set(t,-1.28,n),r.castShadow=!0,r.receiveShadow=!0,e.add(r);let i=new U(new al(.55,.58,.12,24),f);i.position.set(t,-2.3,n),i.receiveShadow=!0,e.add(i)}Fp.add(e)}{let e=new xs,t=new U(new al(4.46,4.35,1.38,36),s);t.position.set(13.86,-.9,-7),t.receiveShadow=!0,e.add(t);let n=new U(new al(3.35,4.25,.26,32),s);n.position.set(13.86,-.14,-7),n.receiveShadow=!0,e.add(n),Fp.add(e)}}function gh(){Pp.clear();for(let e of[{text:`PUEBLO BONITO (~800 ROOMS)`,pos:[0,22,-44],featId:`pueblo_bonito_159`}]){let t=document.createElement(`div`);t.className=`label-3d label-site`,t.textContent=e.text,t.addEventListener(`click`,t=>{t.stopPropagation(),Yh(e.featId,!0)});let n=new jf(t);n.position.set(...e.pos),n.userData.isSiteHeader=!0,J.add(n),nm.push(n)}for(let e of pp){let t=gp.get(e.id),n=document.createElement(`div`);n.className=`label-3d discovery-beacon`,bp.has(e.id)&&n.classList.add(`visited`),n.textContent=e.shortPin,n.title=e.beaconLabel,n.addEventListener(`pointerenter`,e=>{t&&Fh(t,e.clientX,e.clientY)}),n.addEventListener(`pointerleave`,()=>{Fh(null)}),n.addEventListener(`click`,t=>{t.stopPropagation(),gm&&pg(),Yh(e.id,!0)});let r=new jf(n);r.position.set(...e.beaconPos),r.userData.discoveryId=e.id,J.add(r),nm.push(r),rm.set(e.id,n)}{let e=document.createElement(`div`);e.className=`label-3d label-interpretive-kiva`,e.textContent=`KIVA O • INTERPRETIVE INTERIOR RECONSTRUCTION`,e.title=`Kiva O remains largely unexcavated; modeled interior features are interpretive.`,e.addEventListener(`click`,e=>{e.stopPropagation(),Yh(`pueblo_bonito_131`,!0)});let t=new jf(e);t.position.set(13.86,1.35,-7),t.userData.isInterpretiveKivaLabel=!0,J.add(t),nm.push(t)}for(let e of[{roomId:`pueblo_bonito_380`,text:`Reconstructed Pine Plank Floor (Pepper 1909)`,pos:[-32.77,4.45,-32.43]},{roomId:`pueblo_bonito_380`,text:`South Entry Doorway from Room 32 (Reconstructed)`,pos:[-32.48,5.15,-31.7]},{roomId:`pueblo_bonito_380`,text:`Upper Room 58 (Reconstructed 2nd-Story Chamber)`,pos:[-33.35,6.15,-32.95]},{roomId:`pueblo_bonito_240`,text:`Remodeled Room 28 Partition Wall (Interpretive Reconstruction)`,pos:[-25.65,5.45,-30.18]},{roomId:`pueblo_bonito_240`,text:`Enfilade Doorway Lintel (HEE Photo 108)`,pos:[-23.52,5.15,-31.25]},{roomId:`pueblo_bonito_240`,text:`Reconstructed Charred 2nd-Story Viga Beams (Pepper 1920)`,pos:[-24.1,5.55,-30.5]},{roomId:`pueblo_bonito_8`,text:`Stepped Masonry Wall Ledge (HEE Photo 120)`,pos:[-31.42,4.85,-32.8]},{roomId:`pueblo_bonito_8`,text:`North Doorway Threshold to Room 33 (Reconstructed)`,pos:[-30.68,5.3,-33.75]},{roomId:`pueblo_bonito_352`,text:`North Wall & Upper Vents (Interpretive Reconstruction)`,pos:[-12.33,5.15,-40.82]},{roomId:`pueblo_bonito_352`,text:`Subfloor Macaw Pits (2 of 14 Macaws; Interpretive Reconstruction)`,pos:[-12.33,3.65,-39.72]},{roomId:`pueblo_bonito_159`,text:`4 Square Rubble-Filled Masonry Columns (NPS #4)`,pos:[-5.88,-.45,18.94]},{roomId:`pueblo_bonito_159`,text:`Subfloor Masonry Vaults (NPS #3)`,pos:[-10.58,-1.65,21.54]},{roomId:`pueblo_bonito_159`,text:`Raised Central Firebox & Deflector (NPS #7–8)`,pos:[-8.33,-1.45,22.15]},{roomId:`pueblo_bonito_159`,text:`North Antechamber Stairway (NPS #1)`,pos:[-8.33,-.55,15.6]},{roomId:`pueblo_bonito_159`,text:`34 Wall Niches & Concentric Bench (NPS #2, #6)`,pos:[-14.15,-1.15,21.04]},{roomId:`pueblo_bonito_257`,text:`East Wing Doorway (Interpretive Reconstruction)`,pos:[50.06,2.85,10.43]},{roomId:`pueblo_bonito_257`,text:`Reconstructed Wooden Wall Perches & Vigas (Judd 1954)`,pos:[50.98,3.15,10.43]},{roomId:`pueblo_bonito_231`,text:`Reconstructed Interior Doorway (Interpretive)`,pos:[30.86,1.35,39.02]},{roomId:`pueblo_bonito_231`,text:`Southeastern Craft / Lapidary Sector Floor (Reconstructed)`,pos:[30.86,.45,40.42]},{roomId:`pueblo_bonito_9`,text:`~120° ESE Corner Solstice Window (Reyman 1976)`,pos:[53.31,4.85,34.4]},{roomId:`pueblo_bonito_9`,text:`Winter Solstice Sunrise Beam Target Wall (Reconstructed)`,pos:[51.68,4.55,33.37]},{roomId:`pueblo_bonito_406`,text:`Stone Floor Slabs & Metate Step (NAA 1924)`,pos:[-58.8,3.72,.25]},{roomId:`pueblo_bonito_406`,text:`Room 320 / 326 Doorway (Interpretive Reconstruction)`,pos:[-58.8,4.55,-.3]},{roomId:`pueblo_bonito_170`,text:`4 Large Wooden Roof-Support Posts in Circular Collars (Reconstructed)`,pos:[-21.16,-1.25,-9.72]},{roomId:`pueblo_bonito_170`,text:`Subfloor Masonry Vaults (Possible Foot Drums)`,pos:[-25.04,-2.05,-11.93]},{roomId:`pueblo_bonito_170`,text:`Southern Entry Stairway (Reconstructed)`,pos:[-23.15,-.55,-6.85]},{roomId:`pueblo_bonito_22`,text:`Reconstructed 4-Story Northern Wall (Approximate)`,pos:[6.53,8.8,-36.46]},{roomId:`pueblo_bonito_22`,text:`Reconstructed Ponderosa Pine Ceiling Vigas`,pos:[6.53,5.2,-35.5]}]){let t=document.createElement(`div`);t.className=`label-3d label-structure-detail`,t.textContent=e.text;let n=new jf(t);n.position.set(...e.pos),n.userData.isStructureDetail=!0,n.userData.parentRoomId=e.roomId,J.add(n),nm.push(n)}}function _h(){let e=document.getElementById(`sections-pills-container`);if(!e)return;e.innerHTML=``;let t=rp();for(let n of fp){let r=op(n.id,t)||n,i=document.createElement(`button`);i.className=`section-tab-btn ${n.id===am?`active`:``}`,i.dataset.sectionId=n.id,i.title=r.fullTitle,i.innerHTML=`<span class="sec-num">${n.num}.</span><span>${r.shortTitle}</span>`,i.addEventListener(`click`,()=>{gm&&pg(),vh(n.id,!0)}),e.appendChild(i)}}function vh(e,t=!0){let n=yp.get(e);if(!n)return;am=e,document.body.dataset.section=e;let r=op(e,rp())||n;document.querySelectorAll(`.section-tab-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.sectionId===e)});let i=document.getElementById(`active-section-badge`);i&&(i.textContent=r.fullTitle);let a=new Set(n.roomIds);document.querySelectorAll(`[data-disc-chip-id]`).forEach(e=>{e.classList.toggle(`in-active-section`,a.has(e.dataset.discChipId))});let o=document.getElementById(`overview-hero-card`),s=document.getElementById(`inspector-drawer`),c=document.getElementById(`btn-reopen-dossier`);if(e===`overview`){if(o&&(document.getElementById(`hero-section-title`).textContent=r.heroTitle,document.getElementById(`hero-section-desc`).innerHTML=r.heroDesc,o.classList.remove(`minimized`)),s&&s.classList.add(`collapsed-in-overview`),c&&c.classList.remove(`hidden`),t){bg(`orbit`,!1),Vh(),Z.autoRotate=!1;let e=document.getElementById(`btn-toggle-autorotate`);e&&e.classList.remove(`active`),Cg(n.camPos,n.target,1100,!1)}}else if(o&&o.classList.add(`minimized`),s&&s.classList.remove(`collapsed-in-overview`),c&&c.classList.add(`hidden`),t){Z.autoRotate=!1;let e=document.getElementById(`btn-toggle-autorotate`);e&&e.classList.remove(`active`),im===`orbit`&&bg(`guided`,!1),n.roomIds.length>0?Yh(n.roomIds[0],!0):Cg(n.camPos,n.target,1e3,!1)}}function yh(){let e=document.getElementById(`story-chapters-container`),t=document.getElementById(`chapter-dots`);e&&t&&(e.innerHTML=``,t.innerHTML=``,mp.forEach((t,n)=>{let r=document.createElement(`section`);r.className=`story-chapter ${n===0?`active`:``}`,r.dataset.chapterIndex=n,r.id=`story-chapter-${t.index}`,r.innerHTML=`
      <article class="story-card">
        <h2>${t.title}</h2>
        <p>${t.body}</p>
      </article>
    `,e.appendChild(r)}))}function bh(){let e=rp(),t=document.getElementById(`discovery-chips-grid`);if(t){t.innerHTML=``;for(let n of pp){let r=sp(n.id,e),i=r&&r.chipLabel||n.chipLabel,a=r&&r.beaconLabel||n.beaconLabel,o=document.createElement(`button`);o.className=`disc-chip`,o.dataset.discChipId=n.id,o.dataset.sectionId=n.sectionId,bp.has(n.id)&&o.classList.add(`visited`),o.title=`${a} — ${e===`ko`?`클릭 시 해당 방으로 카메라 이동`:`Click to fly camera to this room`}`,o.innerHTML=`
        <span class="disc-chip-label">${i}</span>
        <span class="disc-chip-dot"></span>
      `,o.addEventListener(`click`,()=>{gm&&pg(),Yh(n.id,!0)}),t.appendChild(o)}}let n=document.getElementById(`guided-stops-chips`);if(n){n.innerHTML=``;for(let t of pp){let r=sp(t.id,e),i=document.createElement(`button`);i.className=`gs-stop-chip`,i.dataset.discChipId=t.id,i.title=`${r&&r.beaconLabel||t.beaconLabel} — ${e===`ko`?`방 정보 및 발굴 기록 보기`:`Click to inspect room & archival records`}`,i.textContent=r&&r.shortPin||t.shortPin||t.chipLabel,i.addEventListener(`click`,()=>{gm&&pg(),Yh(t.id,!0)}),n.appendChild(i)}}xh()}function xh(){let e=document.getElementById(`discovery-counter-badge`);e&&(e.textContent=`${bp.size} / ${pp.length}`),document.querySelectorAll(`[data-disc-chip-id]`).forEach(e=>{let t=e.dataset.discChipId;e.classList.toggle(`visited`,bp.has(t)),e.classList.toggle(`active`,!!($&&$.id===t))});for(let[e,t]of rm.entries()){let n=vp.get(e),r=$&&$.id===e;t.classList.toggle(`visited`,bp.has(e)),t.classList.toggle(`active-beacon`,!!r),n&&(t.textContent=r?n.beaconLabel:n.shortPin)}}var Sh={equinox:{sunriseHour:6,noonHour:12,sunsetHour:18,riseAz:90,setAz:270,riseNode:[93,60],setNode:[27,60]},summer:{sunriseHour:4.8,noonHour:12,sunsetHour:19.2,riseAz:60.5,setAz:299.5,riseNode:[88.73,43.75],setNode:[31.27,43.75]},winter:{sunriseHour:7.2,noonHour:12,sunsetHour:16.8,riseAz:119.5,setAz:240.5,riseNode:[88.73,76.25],setNode:[31.27,76.25]}};function Ch(e,t){let n=e===`lunar`,r=lp[e]??0,i=I.degToRad(r),a=n&&t>=18.5?t-14.2:t,o=I.degToRad((a-12)*15),s=Math.sin(cp)*Math.sin(i)+Math.cos(cp)*Math.cos(i)*Math.cos(o),c=Math.asin(I.clamp(s,-1,1)),l=I.radToDeg(c),u=(Math.sin(i)-Math.sin(c)*Math.sin(cp))/Math.max(1e-4,Math.cos(c)*Math.cos(cp)),d=Math.acos(I.clamp(u,-1,1));return o>0&&(d=2*Math.PI-d),{azDeg:I.radToDeg(d),azRad:d,altDeg:l,altRad:c}}function wh(e,t){let n=Sh[e]||Sh.equinox,r=(t-180+540)%360-180,i=n.riseAz-180,a=n.setAz-180,o=I.clamp(r,i,a);if(o<=i+5)return n.sunriseHour;if(o>=a-5)return n.sunsetHour;if(Math.abs(o)<=5)return n.noonHour;let s=180+o,c=n.sunriseHour,l=n.sunsetHour;for(let t=0;t<12;t++){let t=.5*(c+l),{azDeg:n}=Ch(e,t);n<s?c=t:l=t}return .5*(c+l)}function Th(e,t){Dm=e,Om=parseFloat(t);let n=document.getElementById(`time-slider`);n&&(n.value=Om);let r=e===`lunar`,{azDeg:i,azRad:a,altDeg:o,altRad:s}=Ch(e,Om),c=r||e===`night`||o<-.6;Am=i;let l=Math.floor(Om),u=Math.round((Om-l)*60),d=`${String(l).padStart(2,`0`)}:${String(u).padStart(2,`0`)}`,f=rp(),p=``;p=f===`ko`?e===`summer`?`하지`:e===`winter`?`동지`:e===`lunar`?`달의 대정지 주기`:e===`night`?`별빛 밤하늘`:Om>=16&&Om<17.8?`골든 아워`:`춘분/추분`:e===`summer`?`Summer Solstice`:e===`winter`?`Winter Solstice`:e===`lunar`?`Major Lunar Standstill`:e===`night`?`Dark Sky Night`:Om>=16&&Om<17.8?`Golden Hour`:`Equinox`;let m=document.getElementById(`solar-mini-readout`);m&&(m.textContent=`${d} • ${p}`);let h=document.getElementById(`solar-readout`);h&&(h.textContent=f===`ko`?c?`${d} • ${r?`달의 대정지 방위각 ${Math.round(i)}°`:`국제 밤하늘 보호구역`}`:`${d} • 고도 ${Math.max(0,Math.round(o))}° 방위각 ${Math.round(i)}°`:c?`${d} • ${r?`Lunar Standstill Az ${Math.round(i)}°`:`Dark Sky Sanctuary`}`:`${d} • Alt ${Math.max(0,Math.round(o))}° Az ${Math.round(i)}°`),wp&&(wp.uniforms.uIsNight.value=+!!c);let g=Math.max(.088,c?Math.max(.22,Math.abs(s)):s);km.set(Math.cos(g)*Math.sin(a),Math.sin(g),-Math.cos(g)*Math.cos(a)).normalize();let _=Q&&Q.target?Q.target.position.x:0,v=Q&&Q.target?Q.target.position.z:0;if(Q&&Q.position.set(_+km.x*340,km.y*340,v+km.z*340),c){Q.intensity=r?1.45:.35,Q.color.setHex(r?9094399:7049172),Ep.intensity=r?.44:.34,Ep.color.setHex(r?3892656:2969230),Ep.groundColor.setHex(2496527),Op.intensity=r?.22:.14,Dp.intensity=r?.22:.15,J.fog.color.setHex(593178),J.background.setHex(461332),J.environment=null,X&&(X.toneMappingExposure=r?1.08:1.02),Cp&&(Cp.strength=.24),Tp.visible=!1,Mp.visible=!0;for(let e of Mp.children)e.isPointLight&&(e.intensity=16)}else{Tp.visible=!0,X&&(X.toneMappingExposure=1.08),Cp&&(Cp.strength=.08),Tp.material.uniforms.sunPosition.value.copy(km).multiplyScalar(340),Um&&(J.environment=Um.fromScene(Tp).texture);let e=I.clamp((o-6)/36,0,1),t=new H().lerpColors(new H(16764802),new H(16774628),e);Q.color.copy(t),Q.intensity=I.lerp(3.8,4.1,e),Ep.color.setHex(9485542),Ep.groundColor.setHex(11238482),Ep.intensity=I.lerp(.74,.88,e),Op.intensity=I.lerp(.48,.36,e),Dp.intensity=.34;let n=new H().lerpColors(new H(14198904),new H(14994608),e);J.fog.color.copy(n),J.background.copy(n),Mp.visible=!1}Eh(e,Om,i,o,c,r),Oh(i,c,r),Dh(i,c,r)}function Eh(e,t,n,r,i,a){if(!Pm)return;let o=(n-120+540)%360-180,s=Math.abs(o),c=!!($&&$.id===`pueblo_bonito_9`),l=I.clamp(1-s/48,0,1),u=I.clamp(1.15-Math.max(0,r-5)/48,.25,1),d=Math.max(c?.45:.15,l*u*(e===`winter`?1.18:.95));Pm.visible=!0;let f=new B(.68,.7,.58),p=I.clamp(o*.016,-.32,.32),m=new B(-.77,.52+I.clamp((18-Math.max(4,r))*.014,-.2,.2),-.35+p),h=new B().subVectors(m,f),g=h.length(),_=new B().addVectors(f,m).multiplyScalar(.5),v=new Yt().setFromUnitVectors(new B(0,1,0),h.clone().normalize()),y=a||i?8440063:16764744,b=a||i?13955327:16774328;Fm&&(Fm.position.copy(_),Fm.quaternion.copy(v),Fm.scale.set(1,g/1.75,1),Fm.material.color.setHex(y),Fm.material.opacity=.28*d),Im&&(Im.position.copy(_),Im.quaternion.copy(v),Im.scale.set(1,g/1.75,1),Im.material.color.setHex(b),Im.material.opacity=.52*d),Lm&&(Lm.position.copy(m),Lm.material.color.setHex(b),Lm.material.opacity=.85*d),Rm&&(Rm.material.color.setHex(y),Rm.material.opacity=.22*d,Rm.rotation.z=-Math.PI*.33-I.degToRad(o*.45)),zm&&(zm.position.set(m.x+.35,m.y+.08,m.z+.2),zm.color.setHex(y),zm.intensity=2.8*d)}function Dh(){Nm&&(Nm.visible=!1)}function Oh(e,t,n){let r=document.getElementById(`celestial-compass`);if(!r)return;r.classList.toggle(`lunar-mode`,!!(t||n)),r.classList.toggle(`sweep-active`,!!jm);let i=Dm===`summer`||Dm===`winter`?Dm:`equinox`;r.dataset.activeSeason=i;let a=Sh[i]||Sh.equinox,o=I.degToRad(e),s=60+33*Math.sin(o),c=60-33*Math.cos(o),l=document.getElementById(`compass-sun-orb`);l&&l.setAttribute(`transform`,`translate(${s.toFixed(2)}, ${c.toFixed(2)})`);let u=document.getElementById(`compass-celestial-ray`);u&&(u.setAttribute(`x2`,s.toFixed(2)),u.setAttribute(`y2`,c.toFixed(2))),r.querySelectorAll(`.compass-season-btn`).forEach(e=>{e.classList.toggle(`active`,e.dataset.season===i)}),r.querySelectorAll(`.compass-season-arc`).forEach(e=>{e.classList.toggle(`active`,e.dataset.seasonArc===i)});let d=document.getElementById(`compass-node-sunrise`),f=document.getElementById(`compass-node-noon`),p=document.getElementById(`compass-node-sunset`);d&&(d.setAttribute(`cx`,a.riseNode[0].toFixed(2)),d.setAttribute(`cy`,a.riseNode[1].toFixed(2))),p&&(p.setAttribute(`cx`,a.setNode[0].toFixed(2)),p.setAttribute(`cy`,a.setNode[1].toFixed(2)));let m=Math.abs(e-a.riseAz)<=8,h=Math.abs(e-180)<=8,g=Math.abs(e-a.setAz)<=8;d&&d.classList.toggle(`active`,m),f&&f.classList.toggle(`active`,h),p&&p.classList.toggle(`active`,g);let _=Math.abs(e-180)<=9,v=Math.abs(e-90)<=9||Math.abs(e-270)<=9,y=document.getElementById(`compass-ns-axis`);y&&y.classList.toggle(`active`,_);let b=document.getElementById(`compass-ew-axis`);b&&b.classList.toggle(`active`,v);let x=document.getElementById(`compass-sun-readout`);if(x){let t=rp(),n=Math.round(e),r=``;if(t===`ko`){if(_)r=`180° S · 남북 분할벽 정오`;else if(Math.abs(e-90)<=9)r=`90° E · 동서 성벽 춘추분 일출`;else if(Math.abs(e-270)<=9)r=`270° W · 동서 성벽 춘추분 일몰`;else if(i===`winter`&&m)r=`120° ESE · 동지 일출 (228호실 창문)`;else if(i===`winter`&&g)r=`240° WSW · 동지 일몰`;else if(i===`summer`&&m)r=`60° ENE · 하지 일출`;else if(i===`summer`&&g)r=`300° WNW · 하지 일몰`;else{let e=Math.floor(Om),t=Math.round((Om-e)*60);r=`${`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`} · 방위각 ${n}°`}}else if(_)r=`180° S · N–S Wall Noon`;else if(Math.abs(e-90)<=9)r=`90° E · E–W Wall Sunrise`;else if(Math.abs(e-270)<=9)r=`270° W · E–W Wall Sunset`;else if(i===`winter`&&m)r=`120° ESE · Winter Sunrise`;else if(i===`winter`&&g)r=`240° WSW · Winter Sunset`;else if(i===`summer`&&m)r=`60° ENE · Summer Sunrise`;else if(i===`summer`&&g)r=`300° WNW · Summer Sunset`;else{let e=Math.floor(Om),t=Math.round((Om-e)*60);r=`${`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`} · Az ${n}°`}x.textContent=r}for(let[e,t]of Vm.entries()){let n=e===`meridian_noon`&&_||e===`equinox_wall`&&v;t.material.opacity=n?.85:.32}}function kh(){if(!Q||!Q.target)return;let e=I.clamp(Z.target.x,-290,290),t=I.clamp(Z.target.z,-120,220);Q.target.position.set(e,0,t),Q.target.updateMatrixWorld(),Q.position.set(e+km.x*340,km.y*340,t+km.z*340);let n=Y.position.distanceTo(Z.target),r=n<45?68:n<140?108:165;Math.abs(Q.shadow.camera.right-r)>5&&(Q.shadow.camera.left=-r,Q.shadow.camera.right=r,Q.shadow.camera.top=r,Q.shadow.camera.bottom=-r,Q.shadow.camera.updateProjectionMatrix())}function Ah(e){if(document.querySelectorAll(`.phase-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.phase===e)}),e===`all`||!up[e]){for(let[,e]of $p.entries())for(let t of e)t.visible=!0;return}let t=new Set(up[e]);for(let[e,n]of $p.entries()){let r=t.has(e);for(let e of n)e.visible=r}}function jh(e){let t=document.getElementById(`center-title-overlay`);if(t){let n=I.clamp(e/.14,0,1),r=-n*260,i=I.clamp(1-n*1.45,0,1);t.style.transform=`translate3d(0, ${r.toFixed(1)}px, 0)`,t.style.opacity=i.toFixed(3),t.style.visibility=i<=.005?`hidden`:`visible`}let n=document.getElementById(`guided-stops-bar`);n&&(n.classList.remove(`hidden`),n.classList.add(`visible`))}function Mh(e){let t=(e.category||``).toLowerCase(),n=-(e.cy||0),r=e.cx||0;return t===`kiva`||t===`great_kiva`?[{tab:`NPS Kiva Photo`,badge:`PD-USGOV-NPS`,src:`./renders/archival/pd_nps_great_kiva.jpg`,caption:`Recessed kiva masonry & bench (NPS)`},{tab:`NPS Master Plan`,badge:`PD-USGOV-NPS (1984)`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,caption:`NPS measured site plan of Pueblo Bonito (Lekson 1984)`},{tab:`0.5m LiDAR Breakdown`,badge:`0.5m AIRBORNE LIDAR`,src:`./renders/lidar_data_and_foliage_breakdown.jpg`,caption:`0.5m OpenTopography LiDAR DEM & DSM`}]:n<-18?[{tab:`Northern Roomblock (NPS)`,badge:`PD-USGOV-NPS (1930s)`,src:`./renders/archival/pd_nps_masonry_preservation.jpg`,caption:`Northern roomblocks below Cliff House Sandstone cliff (NPS, 1930s)`},{tab:`NPS Banded Masonry`,badge:`PD-USGOV-NPS (1929)`,src:`./renders/archival/pd_nps_banded_masonry_doorway.jpg`,caption:`Northern arc core-and-veneer masonry & vigas (NPS, 1929)`},{tab:`NPS Master Plan`,badge:`PD-USGOV-NPS (1984)`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,caption:`NPS measured site plan of Pueblo Bonito (Lekson 1984)`}]:r<-15?[{tab:`NPS Western Wing`,badge:`PD-USGOV-NPS (1930s)`,src:`./renders/archival/pd_nps_large_kiva_archival.jpg`,caption:`Western roomblocks & kivas (NPS, 1930s)`},{tab:`NPS Master Plan`,badge:`PD-USGOV-NPS (1984)`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,caption:`NPS measured site plan of Pueblo Bonito (Lekson 1984)`},{tab:`0.5m LiDAR Breakdown`,badge:`0.5m AIRBORNE LIDAR`,src:`./renders/lidar_data_and_foliage_breakdown.jpg`,caption:`0.5m OpenTopography LiDAR DEM & DSM`}]:[{tab:`NPS Sandstone Masonry`,badge:`PD-USGOV-NPS`,src:`./renders/archival/pd_nps_sandstone_walls.jpg`,caption:`Sandstone walls & pine lintels (NPS)`},{tab:`NPS Master Plan`,badge:`PD-USGOV-NPS (1984)`,src:`./renders/pd_nps_pueblo_bonito_plan.jpg`,caption:`NPS measured site plan (Lekson 1984)`},{tab:`0.5m LiDAR Sweep`,badge:`0.5m LIDAR POINT CLOUD`,src:`./renders/hud_stage1_lidar_sweep.jpg`,caption:`0.5m airborne LiDAR elevation sweep`}]}function Nh(e,t){let n=rp(),r=t&&t.id||e&&e.id,i=r?sp(r,n):null,a=i&&i.tinyEra||t&&t.tinyEra||e.tinyEra||(n===`ko`?`푸에블로 보니토 • 서기 850–1130년경`:`PUEBLO BONITO • APPROX. AD 850–1130`),o=i&&i.tinyTitle||t&&t.tinyTitle||e.tinyTitle||e.title||e.name||e.id||(n===`ko`?`차코 주거실`:`CHACOAN CHAMBER`);return{eyebrow:a,title:String(o).toUpperCase()}}function Ph(e,t){let n=rp(),r=t&&t.id||e&&e.id,i=r?sp(r,n):null;if(i&&Array.isArray(i.keyPoints)&&i.keyPoints.length>0)return i.keyPoints;if(t&&Array.isArray(t.keyPoints)&&t.keyPoints.length>0)return t.keyPoints;if(Array.isArray(e.keyPoints)&&e.keyPoints.length>0)return e.keyPoints;let a=e.name||e.id||(n===`ko`?`건축 구조물`:`Structure`),o=(e.category||`room`).toLowerCase(),s=e.phase||(n===`ko`?`전성기 보니토기`:`Classic Bonito Phase`),c=e.masonryType||e.masonry||(n===`ko`?`심재-외벽 사암 석조`:`Core-and-Veneer Sandstone`),l=e.dendroDates||(n===`ko`?`구역 편년 추정치 (Windes & Ford 1996)`:`Sector phase estimate (Windes & Ford 1996)`),u=e.stories||1,d=!!e.subcourt,f=``;f=n===`ko`?d?`${a}은(는) 광장 평탄화 과정에서 철거 및 매립된 지하 ${o.includes(`kiva`)?`키바`:`방`} 기저부 폴리곤입니다 (Judd 1964; Lekson 1984).`:`${a}은(는) NPS(Lekson 1984) 및 HABS No. NM-30(LOC nm0107) 실측 조사에서 디지털화된 지리참조 ${o.includes(`kiva`)?`키바`:`주거실`} 평면입니다.`:d?`${a} is a sealed sub-court ${o.replace(`_`,` `)} foundation polygon demolished and paved over during later courtyard leveling (Judd 1964; Lekson 1984).`:`${a} is a georeferenced ${o.replace(`_`,` `)} footprint digitized from the NPS (Lekson 1984) and HABS No. NM-30 (LOC Control No. nm0107) architectural surveys.`;let p=``;p=n===`ko`?`${s} 시기, ${c} 양식으로 분류됩니다 (${l}). 추정 ${u}층으로 모델링되었습니다 (해석적 복원: 원래 지붕 높이와 상층부 배치는 직접 보존된 것이 아닌 학술 근사치입니다; Lekson 1984).`:`Classified in ${s} with ${c}; ${l}. Modeled to an estimated ${u} ${u===1?`story`:`stories`} (INTERPRETIVE RECONSTRUCTION: exact original roof height, upper-story elevation, and interior arrangement are approximate rather than directly preserved; Lekson 1984).`;let m=typeof e.artifacts==`string`&&e.artifacts.trim().length>0&&!e.artifacts.startsWith(`Room-specific artifact inventory`)&&!e.artifacts.startsWith(`Kiva-specific artifact inventory`)?e.artifacts.trim():Array.isArray(e.artifacts)&&e.artifacts.length>0?e.artifacts.join(` `):null,h=``;return h=n===`ko`?m||(o===`kiva`||o===`kiva_enclosure`?`미발굴 또는 부분 조사된 키바의 내부 벤치와 화덕 시설은 차코 표준 양식을 준용한 해석적 복원입니다 (Judd 1964; Lekson 1984).`:`개별 유물 목록은 미국자연사박물관(Pepper 1920), 스미스소니언(Judd 1954), 차코 연구소(CRA) 기록을 참조하십시오.`):m||(o===`kiva`||o===`kiva_enclosure`?`Where specific kiva interiors remain unexcavated or only partially documented, modeled interior benches, pilasters, and floor features represent an interpretive reconstruction (Judd 1964; Lekson 1984).`:`Room-level artifact inventory not individually itemized in this dataset; see AMNH Hyde Expedition (Pepper 1920), Smithsonian NMNH (Judd 1954), and Chaco Research Archive (CRA) room records.`),[f,p,h]}function Fh(e,t=0,n=0){let r=Zp?Zp.id:null,i=e?e.id:null;Zp=e||null,r!==i&&($m(),X&&X.domElement&&(X.domElement.style.cursor=e?`pointer`:``));let a=document.getElementById(`room-hover-tag`);if(!a)return;if(!e){a.classList.add(`hidden`);return}let{eyebrow:o,title:s}=Nh(e,vp.get(e.id)),c=document.getElementById(`hover-tag-eyebrow`),l=document.getElementById(`hover-tag-title`);c&&(c.textContent=o),l&&(l.textContent=s);let u=document.getElementById(`viewport-stage`),d=u?u.getBoundingClientRect():{left:0,top:0,width:window.innerWidth,height:window.innerHeight},f=t-d.left,p=n-d.top,m=Math.max(16,d.width-285),h=Math.max(16,d.height-86),g=Math.min(m,Math.max(12,f+16)),_=Math.min(h,Math.max(12,p-18));a.style.transform=`translate3d(${g}px, ${_}px, 0)`,a.classList.remove(`hidden`)}var Ih=[],Lh=0;function Rh(){if(!Ih.length)return;let e=Ih[Lh]||Ih[0],t=document.getElementById(`rs-archival-img`),n=document.getElementById(`rs-archival-caption`),r=document.getElementById(`rs-media-counter`),i=document.getElementById(`btn-media-prev`),a=document.getElementById(`btn-media-next`);t&&e&&(t.src=e.src,t.alt=e.caption||e.tab||`Archival & LiDAR Record`),n&&e&&(n.textContent=e.caption||e.tab||``),r&&(r.textContent=`${Lh+1} / ${Ih.length}`);let o=Ih.length>1;i&&(i.style.display=o?`flex`:`none`),a&&(a.style.display=o?`flex`:`none`)}function zh(e){Ih.length<=1||(Lh=(Lh+e+Ih.length)%Ih.length,Rh())}function Bh(e){let t=document.getElementById(`room-side-note`);if(!t||!e)return;t.classList.remove(`hidden`);let n=vp.get(e.id),{eyebrow:r,title:i}=Nh(e,n),a=document.getElementById(`room-side-eyebrow`),o=document.getElementById(`room-side-title`),s=document.getElementById(`room-side-keypoints`),c=document.getElementById(`rs-stop-indicator`);if(a&&(a.textContent=r),o&&(o.textContent=i),s){let t=Ph(e,n);s.innerHTML=``;for(let e of t){let t=document.createElement(`li`);t.textContent=e,s.appendChild(t)}}c&&(c.textContent=n?`${n.index} / ${pp.length}`:`${e.name||e.id}`),Ih=n&&Array.isArray(n.archivalMedia)&&n.archivalMedia.length>0?n.archivalMedia:Mh(e),Lh=0,Rh(),Sm=e.id,Yp=1,$m(),xh(),t.classList.remove(`hidden`);let l=document.getElementById(`celestial-compass`);e.id===`pueblo_bonito_9`?(l&&l.classList.add(`room-aligned`),Th(`winter`,7.35)):e.id===`pueblo_bonito_159`||e.id===`pueblo_bonito_170`?(l&&l.classList.add(`room-aligned`),Th(Dm===`night`?`lunar`:Dm,Om)):e.id===`pueblo_bonito_22`?(l&&l.classList.add(`room-aligned`),Th(`summer`,6.25)):(l&&l.classList.remove(`room-aligned`),Dh(Am,Dm===`night`||Dm===`lunar`,Dm===`lunar`))}function Vh(){let e=document.getElementById(`room-side-note`);e&&e.classList.add(`hidden`),Sm=null,$=null,Yp=0,$m(),Np&&Np.clear(),kp&&(kp.intensity=0),Ap&&(Ap.intensity=0),Nm&&(Nm.visible=!1);let t=document.getElementById(`celestial-compass`);t&&t.classList.remove(`room-aligned`),xh()}function Hh(){let e=$||gp.get(Sm)||gp.get(`pueblo_bonito_380`);if(!e)return;gm&&pg(),xm=!1,im===`walk`&&bg(`guided`,!1),Z.enabled=!0,ym<.16&&(ym=.22,bm=.22,jh(.22));let t=vp.get(e.id);if(Xh(e),Yp=1,t&&t.closeCamPos&&t.closeTarget){Cg(t.closeCamPos,t.closeTarget,750,!1);return}let n=e.cx||0,r=-(e.cy||0),i=r<-18,a=e.category===`kiva`||e.category===`great_kiva`?-1.4:i?4.1:.6,o=-n,s=14-r,c=Math.max(.01,Math.hypot(o,s)),l=e.radius_m?Math.max(2.5,e.radius_m*.65):2.6,u=n+o/c*l,d=r+s/c*l;Cg([u,a+(e.radius_m?4.2:3.4),d],[n,a+.35,r],750,!1)}function Uh(){gm&&pg(),xm=!1,im===`walk`&&bg(`orbit`,!1),Z.enabled=!0,ym<.16&&(ym=.18,bm=.18,jh(.18)),Yp=0,kp&&(kp.intensity=0),Ap&&(Ap.intensity=0),Cg([12,62,108],[-6,2,-14],900,!1)}function Wh(e){if(!Y||!Z)return;gm&&pg(),xm=!1,im===`walk`&&bg(`orbit`,!1),Z.enabled=!0,ym<.16&&(ym=.18,bm=.18,jh(.18));let t=Y.position.clone().sub(Z.target),n=Math.max(.8,t.length()),r=I.clamp(n*e,1.1,450);t.normalize().multiplyScalar(r);let i=Z.target.clone().add(t);i.y=Math.max(1.2,i.y),r>26&&(Yp=0),Cg([i.x,i.y,i.z],[Z.target.x,Z.target.y,Z.target.z],380,!1)}function Gh(e){jh(e);let t=Cm,n=0;for(let r=0;r<t.length-1;r++)if(e>=t[r].s&&e<=t[r+1].s){n=r;break}e>=t[t.length-1].s&&(n=t.length-2);let r=t[n],i=t[n+1],a=Math.max(1e-4,i.s-r.s),o=I.clamp((e-r.s)/a,0,1),s=o*o*(3-2*o),c=I.lerp(r.pos[0],i.pos[0],s),l=I.lerp(r.pos[1],i.pos[1],s),u=I.lerp(r.pos[2],i.pos[2],s),d=I.lerp(r.look[0],i.look[0],s),f=I.lerp(r.look[1],i.look[1],s),p=I.lerp(r.look[2],i.look[2],s);Y.position.set(c,l,u),Z.target.set(d,f,p),Y.lookAt(Z.target);let m=d-c,h=f-l,g=p-u,_=Math.max(.001,Math.hypot(m,g));lm=Math.atan2(-m,-g),um=I.clamp(Math.atan2(h,_),-1,1),fm=l}function Kh(e,t){Y.position.set(e[0],e[1],e[2]),fm=e[1];let n=dh(e[0],e[2]);dm=Math.max(1.8,e[1]-n);let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=Math.max(.001,Math.hypot(r,a));lm=Math.atan2(-r,-a),um=I.clamp(Math.atan2(i,o),-1,1),xg(),qh()}function qh(){let e=document.getElementById(`walk-elev-label`);if(!e)return;let t=Y?Y.position.y:dm;e.textContent=t>25?`Mesa Rim ${t.toFixed(1)}m`:t>10?`Overlook ${t.toFixed(1)}m`:t>4.6?`Terrace ${t.toFixed(1)}m`:`Plaza ${t.toFixed(1)}m`}var Jh=12;function Yh(e,t=!0,n=null){let r=gp.get(e);if(!r)return;Z.autoRotate=!1;let i=document.getElementById(`btn-toggle-autorotate`);i&&i.classList.remove(`active`);let a=vp.get(e);if(a&&bp.add(e),ym<.16&&(ym=.22,bm=.22),jh(ym),Xh(r),Zh(r,!1),Bh(r),t){let e=n===`walk`;xm=e,Z.enabled=!e;let t=a&&(a.walkPos||a.closeCamPos)||null,i=a&&(a.walkTarget||a.closeTarget)||null;if(t&&i)Jh=Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2]),Cg(t,i,820,e);else{let t=r.cx||0,n=-(r.cy||0),i=n<-18,a=r.category===`kiva`||r.category===`great_kiva`?-1.6:i?3.5:.4,o=Math.max(a+3.2,(r.height_m||4)+(i?2.5:.2))+5.2,s=-t,c=14-n,l=Math.max(.01,Math.hypot(s,c)),u=r.radius_m?r.radius_m+5.5:5.8,d=t+s/l*u,f=n+c/l*u;Jh=Math.hypot(d-t,o-(a+.3),f-n),Cg([d,o,f],[t,a+.3,n],820,e)}}}function Xh(e){$=e,Np.clear();let t=e.cx||0,n=-(e.cy||0),r=n<-18,i=e.category===`kiva`||e.category===`great_kiva`?-1.4:r?4.1:.6;kp&&(kp.position.set(t,i+1.8,n),kp.distance=e.radius_m?e.radius_m+2.5:5.5,kp.intensity=1.4),Ap&&Ap.target&&(Ap.position.set(t,i+10,n+.5),Ap.target.position.set(t,i,n),Ap.target.updateMatrixWorld(),Ap.intensity=0),Yp=1,$m(),$h()}function Zh(e,t=!0){$=e;let n=rp(),r=vp.get(e.id),i=r?sp(r.id,n):null,a=r?yp.get(r.sectionId):null,o=a?op(a.id,n):null,s=!!(e.isDiscovery||r),c=document.getElementById(`info-category-badge`);if(c){if(r){let e=o?o.shortTitle.toUpperCase():a?a.shortTitle.toUpperCase():n===`ko`?`검증된 발굴 기록`:`VERIFIED RECORD`;c.textContent=n===`ko`?`탐방 지점 ${r.index} / ${pp.length} • ${e}`:`STOP ${r.index} OF ${pp.length} • ${e}`}else c.textContent=s?n===`ko`?`검증된 공식 발굴 기록`:`${(e.category||`STRUCTURE`).toUpperCase()} • VERIFIED EXCAVATION RECORD`:n===`ko`?`지리참조 폴리곤 (구역 편년)`:`${(e.category||`ROOM`).toUpperCase()} • GEOREFERENCED FOOTPRINT (SECTOR PHASE)`}let l=document.getElementById(`info-coords-badge`);l&&(l.textContent=n===`ko`?e.category===`kiva`||e.category===`great_kiva`?`키바 (의식실)`:`주거실 / 저장실`:(e.category||`ROOM`).toUpperCase().replace(`_`,` `));let u=i&&i.tinyTitle||e.title||e.name||e.id;document.getElementById(`info-title`).textContent=u;let d=dp[e.site]||e.site||`Pueblo Bonito`;document.getElementById(`info-subtitle`).textContent=n===`ko`?`푸에블로 보니토 • ${e.phase||`전성기 보니토기 (서기 850–1130년)`}`:`${d} • ${e.phase||`Classic Bonito Phase (AD 1040–1100)`}`,document.getElementById(`info-excavator`).textContent=s?e.excavator||(n===`ko`?`공식 학술 고고학 발굴 보고서에 수록됨`:`Documented in Published Archaeological Excavation Record`):n===`ko`?`2D 평면: NPS (Lekson 1984) 및 HABS No. NM-30 (LOC nm0107) • 편년 및 입면: 학술적 구역 해석 복원`:`2D Footprint: NPS (Lekson 1984) & HABS No. NM-30 (LOC nm0107) • Phase & Elevation: Interpretive Sector Reconstruction (Lekson 1984; Windes & Ford 1996)`;let f=document.getElementById(`lbl-masonry`),p=document.getElementById(`lbl-dendro`),m=document.getElementById(`lbl-dimensions`),h=document.getElementById(`lbl-area`),g=document.getElementById(`lbl-summary-heading`),_=document.getElementById(`lbl-artifacts-heading`);if(f&&(f.textContent=n===`ko`?s?`석조 양식`:`구역 석조 양식`:s?`MASONRY`:`SECTOR MASONRY`),p&&(p.textContent=n===`ko`?s?`연륜 연대 / 편년`:`구역 편년`:s?`TREE-RING / DATING`:`SECTOR DATING`),m&&(m.textContent=n===`ko`?`복원 상태`:`RECONSTRUCTION STATUS`),h&&(h.textContent=n===`ko`?`측량 기록`:`SURVEY RECORD`),g&&(g.textContent=n===`ko`?s?`공식 고고학 발굴 기록`:`지리참조 건축 기록`:s?`PUBLISHED ARCHAEOLOGICAL RECORD`:`GEOREFERENCED ARCHITECTURAL RECORD`),_&&(_.textContent=n===`ko`?s?`출토 유물 및 학술 증거`:`보관 및 발굴 현황`:s?`EXCAVATED ARTIFACTS & EVIDENCE`:`ARCHIVAL & EXCAVATION STATUS`),document.getElementById(`info-masonry`).textContent=e.masonry||(n===`ko`?`심재-외벽 사암 석조`:`Core-and-Veneer Sandstone`),document.getElementById(`info-dendro`).textContent=e.dendroDates||(n===`ko`?`구역 편년 추정치 (Windes & Ford 1996)`:`Sector phase estimate (Windes & Ford 1996)`),document.getElementById(`info-dimensions`).textContent=n===`ko`?`추정 ${e.stories||1}층 (해석적 복원 / 학술 근사치)`:`Est. ${e.stories||1} ${(e.stories||1)===1?`Story`:`Stories`} (Interpretive Reconstruction / Approximate)`,document.getElementById(`info-area`).textContent=`NPS (Lekson 1984) & HABS No. NM-30`,i&&i.tinyDesc?document.getElementById(`info-summary`).textContent=i.tinyDesc:document.getElementById(`info-summary`).textContent=e.summary||(n===`ko`?`미국 국립공원관리청(NPS, Lekson 1984) 및 의회도서관 HABS No. NM-30(LOC nm0107) 실측 도면에 기초한 지리참조 석조 방/키바 평면입니다.`:`Georeferenced masonry room or kiva footprint recorded in the NPS (Lekson 1984) and HABS No. NM-30 (LOC Control No. nm0107) architectural surveys.`),i&&Array.isArray(i.keyPoints))document.getElementById(`info-artifacts`).textContent=i.keyPoints.join(` • `);else{let t=Array.isArray(e.artifacts)?e.artifacts.join(` • `):e.artifacts||(n===`ko`?`개별 유물 목록은 미국자연사박물관(Pepper 1920), 스미스소니언(Judd 1954), 차코 연구소(CRA) 발굴 기록을 참조하십시오.`:`Room-level artifact inventory not individually itemized in this dataset; see AMNH (Pepper 1920), NMNH (Judd 1954), and Chaco Research Archive (CRA) records.`);document.getElementById(`info-artifacts`).textContent=t}let v=document.getElementById(`artifact-preview-canvas`),y=document.getElementById(`artifact-canvas-caption`),b=document.getElementById(`info-photo-img`),x=document.getElementById(`info-photo-cap`);if(r){Qh(v,r.artType);let e=i&&i.artCaption||r.artCaption;y&&(y.textContent=n===`ko`?`개략 도면 — ${e}`:`Schematic Diagram — ${e}`),b&&(b.src=r.photo),x&&(x.textContent=i&&i.photoCap||r.photoCap)}else Qh(v,e.category===`kiva`?`kiva_a`:`tdoor_249`),y&&(y.textContent=n===`ko`?e.category===`kiva`?`개략 도면 — 차코 원형 키바 건축 양식`:`개략 도면 — 심재-외벽 사암 석조 및 소나무 비가 서까래`:e.category===`kiva`?`Schematic Diagram — Chacoan Recessed Kiva Architecture`:`Schematic Diagram — Core-and-Veneer Sandstone Masonry & Pine Vigas`),b&&(b.src=`./renders/pd_nps_pueblo_bonito_plan.jpg`),x&&(x.textContent=n===`ko`?`NPS (Lekson 1984) 및 HABS No. NM-30 실측 조사 ↗`:`NPS (Lekson 1984) & HABS No. NM-30 (LOC nm0107) Survey ↗`);let S=document.getElementById(`btn-walk-here`);S&&(S.textContent=n===`ko`?`🚶 방 내부 보기`:`🚶 Step Inside View`);let C=document.getElementById(`btn-focus-selected`);C&&(C.textContent=n===`ko`?`🦅 방 주위 회전`:`🦅 Orbit Room`);let w=document.getElementById(`btn-next-discovery`);w&&(w.textContent=n===`ko`?`다음 방 →`:`Next Room →`),xh();let T=document.getElementById(`inspector-drawer`),E=document.getElementById(`btn-reopen-dossier`);t&&T&&(T.classList.remove(`hidden`,`collapsed-in-overview`),E&&E.classList.add(`hidden`))}function Qh(e,t){if(!e)return;let n=e.getContext(`2d`),r=e.width,i=e.height;n.clearRect(0,0,r,i),n.fillStyle=`#120e0a`,n.fillRect(0,0,r,i),n.strokeStyle=`rgba(229, 169, 101, 0.08)`,n.lineWidth=1;for(let e=0;e<r;e+=20)n.beginPath(),n.moveTo(e,0),n.lineTo(e,i),n.stroke();for(let e=0;e<i;e+=20)n.beginPath(),n.moveTo(0,e),n.lineTo(r,e),n.stroke();if(n.save(),t===`crypt_33`){let e=r*.5,t=i*.44;for(let r=0;r<4;r++){let i=42+r*11,a=26+r*8,o=26+r*6;for(let r=0;r<o;r++){let s=Math.PI*.12+r/(o-1)*(Math.PI*.76),c=e+Math.cos(s)*i,l=t+Math.sin(s)*a;n.fillStyle=r%3==0?`#27b9a8`:`#4ce6d4`,n.beginPath(),n.arc(c,l,3,0,Math.PI*2),n.fill()}}for(let t of[e-48,e+48,e-18,e+18])n.fillStyle=`#38d6c4`,n.fillRect(t-6,i-34,12,16),n.fillStyle=`#0d0a07`,n.beginPath(),n.arc(t,i-30,1.8,0,Math.PI*2),n.fill();n.fillStyle=`#ffd399`,n.font=`600 9.5px "JetBrains Mono", monospace`,n.fillText(`>56,000 TURQUOISE PIECES (9/14 B2y1 mtDNA)`,10,17)}else if(t===`kiva_a`){n.strokeStyle=`#d99b66`,n.fillStyle=`rgba(185, 133, 84, 0.16)`,n.lineWidth=2,n.beginPath(),n.arc(82,74,40,0,Math.PI*2),n.fill(),n.stroke();for(let[e,t]of[[-15,-15],[15,-15],[-15,15],[15,15]])n.fillStyle=`#c89464`,n.strokeStyle=`#fff3e0`,n.lineWidth=1.3,n.fillRect(82+e-6,74+t-6,12,12),n.strokeRect(82+e-6,74+t-6,12,12);n.fillStyle=`#ff7733`,n.fillRect(77,78,10,8),n.fillStyle=`#d7c7b6`,n.font=`500 8.5px "JetBrains Mono", monospace`,n.fillText(`4 MASONRY COLUMNS`,34,124);for(let e=0;e<4;e++){let t=22+e*7.5,r=16+e*6.5,i=18+e*4;for(let e=0;e<i;e++){let a=Math.PI*.1+e/(i-1)*(Math.PI*.8),o=218+Math.cos(a)*t,s=60+Math.sin(a)*r;n.fillStyle=e%2==0?`#27b9a8`:`#4ce6d4`,n.beginPath(),n.arc(o,s,2.4,0,Math.PI*2),n.fill()}}n.fillStyle=`#d7c7b6`,n.fillText(`DEDICATORY OFFERINGS`,160,124),n.fillStyle=`#ffd399`,n.font=`600 9.5px "JetBrains Mono", monospace`,n.fillText(`4 SQUARE COLUMNS, VAULTS & 34 OPEN NICHES`,12,17)}else if(t===`cacao_28`){for(let e of[{x:68,y:32,w:34,h:86},{x:130,y:25,w:38,h:93},{x:196,y:35,w:34,h:83}]){n.fillStyle=`#dfd6c7`,n.strokeStyle=`#2a221b`,n.lineWidth=1.5,n.fillRect(e.x,e.y,e.w,e.h),n.strokeRect(e.x,e.y,e.w,e.h),n.strokeStyle=`#231d18`,n.lineWidth=1.2,n.strokeRect(e.x+4,e.y+10,e.w-8,e.h-24);for(let t=0;t<e.h-30;t+=10)n.beginPath(),n.moveTo(e.x+4,e.y+12+t),n.lineTo(e.x+e.w-4,e.y+22+t),n.stroke()}n.fillStyle=`#ffd399`,n.font=`600 9.0px "JetBrains Mono", monospace`,n.fillText(`~174 VESSELS (~111–112 CYLINDER JARS) • CACAO+`,10,17)}else if(t===`macaw_38`){n.fillStyle=`#ffd399`,n.font=`600 9.2px "JetBrains Mono", monospace`,n.fillText(`ROOM 38 MACAW CONTEXT (INTERPRETIVE RECONSTRUCTION)`,10,16),n.fillStyle=`rgba(229, 169, 101, 0.14)`,n.strokeStyle=`#e5a965`,n.lineWidth=3,n.beginPath(),n.moveTo(28,34),n.lineTo(206,34),n.lineTo(212,108),n.lineTo(36,112),n.closePath(),n.fill(),n.stroke(),n.fillStyle=`rgba(229, 169, 101, 0.24)`,n.fillRect(31,37,172,10),n.strokeStyle=`rgba(255, 211, 153, 0.55)`,n.lineWidth=1,n.strokeRect(31,37,172,10),n.fillStyle=`#38d6c4`,n.fillRect(68,31,20,6),n.fillRect(136,31,24,6),n.fillStyle=`#a8f5ec`,n.font=`600 7.2px "JetBrains Mono", monospace`,n.fillText(`NORTH VENTS (RECONSTRUCTED)`,58,28),n.fillStyle=`#120e0a`,n.fillRect(206,62,8,22),n.strokeStyle=`#38d6c4`,n.lineWidth=1.5,n.strokeRect(206,62,6,22),n.fillStyle=`#ffd399`,n.font=`600 7.2px "JetBrains Mono", monospace`,n.fillText(`EAST DOOR`,216,72),n.fillText(`(RECONSTR.)`,216,82);for(let[e,t,r]of[[72,74,`SUBFLOOR PIT 1`],[126,76,`SUBFLOOR PIT 2`]])n.fillStyle=`rgba(229, 57, 45, 0.28)`,n.strokeStyle=`#ff6b5b`,n.lineWidth=1.5,n.beginPath(),n.arc(e,t,11,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=`#ffffff`,n.font=`700 7.5px "JetBrains Mono", monospace`,n.fillText(`MACAW`,e-13,t+2.5),n.fillStyle=`#ffb3a7`,n.font=`500 7px "Inter", sans-serif`,n.fillText(r,e-24,t+20);n.fillStyle=`rgba(56, 214, 196, 0.26)`,n.strokeStyle=`#38d6c4`,n.lineWidth=1.5,n.fillRect(162,56,34,24),n.strokeRect(162,56,34,24),n.fillStyle=`#a8f5ec`,n.font=`700 7.5px "JetBrains Mono", monospace`,n.fillText(`JET FROG`,165,67),n.fillText(`+ 12 IN GUANO`,160,76),n.fillStyle=`#d7c7b6`,n.font=`500 7.8px "JetBrains Mono", monospace`,n.fillText(`14 ARA MACAO (12 IN GUANO, 2 SUBFLOOR) • HAPLO6 CLADE`,8,128)}else if(t===`burial_326`){for(let e of[{code:`RM 320`,sub:`Women/Subadults`,x:26,y:34,w:60,h:36,active:!1},{code:`RM 326`,sub:`12 Burials: 11 Adults (10♀, 1♂) + 1 Infant`,x:96,y:30,w:196,h:44,active:!0},{code:`RM 329`,sub:`Cluster Burial`,x:26,y:78,w:60,h:34,active:!1},{code:`RM 330`,sub:`Pepper / Judd`,x:96,y:80,w:196,h:32,active:!1}])n.fillStyle=e.active?`rgba(56, 214, 196, 0.22)`:`rgba(229, 169, 101, 0.12)`,n.strokeStyle=e.active?`#38d6c4`:`rgba(229, 169, 101, 0.5)`,n.lineWidth=e.active?1.8:1,n.fillRect(e.x,e.y,e.w,e.h),n.strokeRect(e.x,e.y,e.w,e.h),n.fillStyle=e.active?`#ffffff`:`#ffd399`,n.font=`700 9.5px "JetBrains Mono", monospace`,n.fillText(e.code,e.x+6,e.y+14),n.fillStyle=e.active?`#a8f5ec`:`#c8b8a6`,n.font=`500 8.5px "Inter", sans-serif`,n.fillText(e.sub,e.x+6,e.y+28);n.fillStyle=`#ffd399`,n.font=`600 9.0px "JetBrains Mono", monospace`,n.fillText(`RM 326: 12 INDIVIDUALS (10♀, 1♂, 1 INFANT • OLDER: 11)`,10,17)}else if(t===`lapidary_168`){n.fillStyle=`#ffd399`,n.font=`600 9.2px "JetBrains Mono", monospace`,n.fillText(`SOUTHEASTERN LAPIDARY & CRAFT ACTIVITY SECTOR`,12,17),n.fillStyle=`#b98554`,n.strokeStyle=`#e5a965`,n.lineWidth=2,n.fillRect(36,38,114,68),n.strokeRect(36,38,114,68),n.fillStyle=`#ffd399`,n.font=`600 8px "JetBrains Mono", monospace`,n.fillText(`SANDSTONE ABRADING SLAB`,42,118);for(let[e,t]of[[182,52],[206,52],[230,52],[194,78],[218,78],[242,78]])n.fillStyle=`#38d6c4`,n.beginPath(),n.arc(e,t,7,0,Math.PI*2),n.fill(),n.fillStyle=`#120e0a`,n.beginPath(),n.arc(e,t,2,0,Math.PI*2),n.fill();n.fillStyle=`#a8f5ec`,n.fillText(`LAPIDARY BEAD BLANKS`,168,118)}else if(t===`tdoor_249`){let e=Math.round((r-176)*.5);n.fillStyle=`#b98554`,n.fillRect(e,26,176,108),n.fillStyle=`#5c3f28`;for(let t=34;t<130;t+=18)n.fillRect(e,t,176,5);n.fillStyle=`#090705`,n.fillRect(e+50,42,76,46),n.fillRect(e+66,88,44,46),n.fillStyle=`#6e4726`,n.fillRect(e+42,36,92,6),n.fillStyle=`#ffd399`,n.font=`600 9.2px "JetBrains Mono", monospace`,n.fillText(`CHACOAN MASONRY & DOORWAY (INTERPRETIVE RECONSTR.)`,10,18)}else if(t===`solstice_228`||t===`sundagger_297`){let e=r*.5,a=i*.56;n.strokeStyle=`#c8a97e`,n.lineWidth=2,n.beginPath();for(let t=0;t<Math.PI*11;t+=.15){let r=t*1.35,i=e+Math.cos(t)*r,o=a+Math.sin(t)*r;t===0?n.moveTo(i,o):n.lineTo(i,o)}n.stroke(),n.fillStyle=`rgba(255, 214, 102, 0.85)`,n.beginPath(),n.moveTo(e-5,24),n.lineTo(e+5,24),n.lineTo(e+2,a+44),n.lineTo(e-2,a+44),n.closePath(),n.fill(),n.fillStyle=`#ffd399`,n.font=`600 10px "JetBrains Mono", monospace`,n.fillText(t===`solstice_228`?`120° ESE SOLSTICE CORNER BEAM`:`FAJADA BUTTE SUN DAGGER`,14,18)}else n.strokeStyle=`#e5a965`,n.fillStyle=`rgba(229, 169, 101, 0.22)`,n.lineWidth=2,n.beginPath(),n.arc(r*.5,i*.54,32,0,Math.PI*2),n.fill(),n.stroke(),n.strokeStyle=`#38d6c4`,n.beginPath(),n.arc(r*.5,i*.54,18,0,Math.PI*2),n.stroke(),n.fillStyle=`#ffd399`,n.font=`600 10px "JetBrains Mono", monospace`,n.fillText(`EXCAVATED ARCHAEOLOGICAL ASSEMBLAGE`,14,18);n.restore()}function $h(){let e=document.getElementById(`minimap-canvas`);if(!e||!hp)return;let t=e.getContext(`2d`),n=e.width,r=e.height;t.fillStyle=`#0c0907`,t.fillRect(0,0,n,r);let i=hp.features.filter(e=>e.site===Hm&&!e.subcourt&&!String(e.id||``).startsWith(`landmark_`)&&e.category!==`landmark`&&e.category!==`mound`&&Array.isArray(e.polygon)&&e.polygon.length>0);if(i.length===0)return;let a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)for(let[t,n]of e.polygon)t<a&&(a=t),t>o&&(o=t),n<s&&(s=n),n>c&&(c=n);let l=Math.max(1,o-a),u=Math.max(1,c-s),d=Math.min((n-32)/l,(r-32)/u),f=(n-l*d)*.5,p=(r-u*d)*.5,m=(e,t)=>[f+(e-a)*d,r-(p+(t-s)*d)];e.dataset.minX=a,e.dataset.minY=s,e.dataset.scale=d,e.dataset.offX=f,e.dataset.offY=p;for(let e of i)t.beginPath(),e.polygon.forEach(([e,n],r)=>{let[i,a]=m(e,n);r===0?t.moveTo(i,a):t.lineTo(i,a)}),t.closePath(),$&&($.id===e.id||$.id===`pueblo_bonito_240`&&e.id===`pueblo_bonito_377`||$.id===`pueblo_bonito_377`&&e.id===`pueblo_bonito_240`)?(t.fillStyle=`#38d6c4`,t.strokeStyle=`#ffffff`,t.lineWidth=1.8):e.category===`kiva`||e.category===`great_kiva`?(t.fillStyle=`rgba(224, 90, 54, 0.62)`,t.strokeStyle=`#ff8b66`,t.lineWidth=1):(e.phase||``).includes(`Stage I`)?(t.fillStyle=`rgba(148, 84, 52, 0.72)`,t.strokeStyle=`rgba(229, 169, 101, 0.5)`,t.lineWidth=.7):(e.stories||1)>=4?(t.fillStyle=`rgba(218, 144, 78, 0.76)`,t.strokeStyle=`rgba(255, 215, 160, 0.6)`,t.lineWidth=.8):(t.fillStyle=`rgba(184, 148, 104, 0.45)`,t.strokeStyle=`rgba(229, 169, 101, 0.35)`,t.lineWidth=.6),t.fill(),t.stroke();for(let e of pp){let n=gp.get(e.id);if(!n||n.site!==Hm||n.category===`landmark`)continue;let[r,i]=m(n.cx,n.cy);t.fillStyle=`#38d6c4`,t.beginPath(),t.arc(r,i,4.2,0,Math.PI*2),t.fill(),t.strokeStyle=`#090705`,t.lineWidth=1.2,t.stroke()}if(Y){let e=Y.position.x,n=-Y.position.z;if(e>=a-25&&e<=o+25&&n>=s-25&&n<=c+25){let[r,i]=m(e,n),a=-lm-Math.PI*.5;t.save(),t.fillStyle=`rgba(255, 235, 59, 0.28)`,t.beginPath(),t.moveTo(r,i),t.arc(r,i,18,a-.45,a+.45),t.closePath(),t.fill(),t.fillStyle=`#ffeb3b`,t.beginPath(),t.arc(r,i,4.5,0,Math.PI*2),t.fill(),t.strokeStyle=`#000`,t.lineWidth=1.2,t.stroke(),t.restore()}}}var eg=null,tg=null,ng=null;function rg(){return eg||(eg=document.createElement(`canvas`),eg.width=1280,eg.height=720,tg=eg.getContext(`2d`)),eg}function ig(e){let t=Math.floor(e),n=Math.round((e-t)*60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}function ag(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+i-a),e.quadraticCurveTo(t+r,n+i,t+r-a,n+i),e.lineTo(t+a,n+i),e.quadraticCurveTo(t,n+i,t,n+i-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath()}function og(e,t,n,r,i,a,o=4){let s=(t||``).split(/\s+/),c=``,l=0;for(let t=0;t<s.length;t++){let u=c+s[t]+` `;if(e.measureText(u).width>i&&t>0){if(e.fillText(c.trim(),n,r),c=s[t]+` `,r+=a,l++,l>=o-1){let i=s.slice(t).join(` `);return e.fillText(i.slice(0,58)+(i.length>58?`…`:``),n,r),r+a}}else c=u}return c.trim()&&(e.fillText(c.trim(),n,r),r+=a),r}function sg(e=null){rg();let t=tg,n=eg.width,r=eg.height;t.clearRect(0,0,n,r),t.drawImage(X.domElement,0,0,n,r),Y.updateMatrixWorld(),t.save();for(let e of nm){if(!e.visible||!Pp.visible||e.element.style.display===`none`||(Dg.copy(e.position),Y.position.distanceTo(Dg)>430)||(Dg.project(Y),Dg.z<-1||Dg.z>1)||Math.abs(Dg.x)>.94||Dg.y<-.88||Dg.y>.8)continue;let i=(Dg.x*.5+.5)*n,a=(-Dg.y*.5+.5)*r,o=(e.element.textContent||``).trim();if(!o)continue;let s=e.element.classList.contains(`discovery-beacon`),c=e.element.classList.contains(`active-beacon`);t.font=s?`600 11px "Inter", sans-serif`:`600 10px "Cinzel", serif`;let l=t.measureText(o).width+18,u=s?22:20,d=i-l*.5;ag(t,d,a-u*.5,l,u,u*.5),t.fillStyle=c?`rgba(18, 48, 46, 0.92)`:s?`rgba(14, 11, 9, 0.86)`:`rgba(20, 15, 11, 0.80)`,t.fill(),t.lineWidth=c?1.8:1.1,t.strokeStyle=c?`#38d6c4`:s?`rgba(56, 214, 196, 0.65)`:`rgba(229, 169, 101, 0.55)`,t.stroke(),t.fillStyle=c?`#ffffff`:s?`#e8f9f7`:`#f3dfc1`,t.textBaseline=`middle`,t.fillText(o,d+9,a)}t.restore(),t.save(),ag(t,16,12,n-32,44,12),t.fillStyle=`rgba(16, 12, 10, 0.86)`,t.fill(),t.strokeStyle=`rgba(229, 169, 101, 0.32)`,t.lineWidth=1,t.stroke(),t.fillStyle=`#f5d9b0`,t.font=`700 14px "Cinzel", serif`,t.fillText(`CHACO CANYON`,32,31),t.fillStyle=`#38d6c4`,t.font=`600 10px "JetBrains Mono", monospace`,t.fillText(`AD 850–1150 • 3D ARCHITECTURAL RECONSTRUCTION & WALKTHROUGH`,32,46);let i=e||ng,a=i?i.partBadge:`MODE: ${im.toUpperCase()}`;t.font=`600 11px "JetBrains Mono", monospace`;let o=t.measureText(a).width+24;ag(t,n*.5-o*.5,20,o,28,14),t.fillStyle=`rgba(56, 214, 196, 0.16)`,t.fill(),t.strokeStyle=`#38d6c4`,t.stroke(),t.fillStyle=`#e8f9f7`,t.fillText(a,n*.5-o*.5+12,38);let s=Dm===`night`?`🌙 DARK SKY NIGHT 21:30`:`☀️ ${Dm.toUpperCase()} ${ig(Om)}`;if(t.fillStyle=`#ffd399`,t.font=`600 11px "JetBrains Mono", monospace`,t.fillText(s,n-t.measureText(s).width-32,38),t.restore(),i&&i.showDossier&&$){t.save();let e=n-356;ag(t,e,72,336,370,14),t.fillStyle=`rgba(15, 12, 10, 0.90)`,t.fill(),t.strokeStyle=`rgba(56, 214, 196, 0.48)`,t.lineWidth=1.3,t.stroke(),t.fillStyle=`#38d6c4`,t.font=`600 10px "JetBrains Mono", monospace`;let r=`${dp[$.site]||`Chaco Canyon`} • ${$.phase||`Classic Bonito`}`;t.fillText(r.slice(0,48),e+16,96),t.fillStyle=`#fff4e4`,t.font=`700 14px "Cinzel", serif`,og(t,$.title||$.name||$.id,e+16,116,292,17,2);let i=document.getElementById(`artifact-preview-canvas`);i&&(t.drawImage(i,e+16,140,304,128),t.strokeStyle=`rgba(229, 169, 101, 0.35)`,t.strokeRect(e+16,140,304,128));let a=`Area: ${($.area_m2||18).toFixed(1)} m²  |  Height: ${($.height_m||4.2).toFixed(1)} m  |  Stories: ${$.stories||1}`;t.fillStyle=`#ffd399`,t.font=`600 10.5px "JetBrains Mono", monospace`,t.fillText(a,e+16,286),t.fillStyle=`#d7c7b6`,t.font=`400 11.5px "Inter", sans-serif`,og(t,$.summary||(Array.isArray($.artifacts)?$.artifacts.join(` • `):``),e+16,306,296,15.5,6),t.fillStyle=`#38d6c4`,t.font=`600 9.5px "JetBrains Mono", monospace`,t.fillText(`SOURCE: NPS / HABS NO. NM-30 (LOC nm0107) / 0.5m LIDAR / AMNH / NMNH`,e+16,428),t.restore()}if(i&&i.showMinimap){$h();let e=document.getElementById(`minimap-canvas`);if(e){t.save();let n=r-322;ag(t,20,n,336,242,14),t.fillStyle=`rgba(14, 11, 9, 0.92)`,t.fill(),t.strokeStyle=`rgba(229, 169, 101, 0.48)`,t.lineWidth=1.3,t.stroke(),t.fillStyle=`#ffd399`,t.font=`700 10px "JetBrains Mono", monospace`,t.fillText(`2D GEOREFERENCED FLOORPLAN (OPEN EAST & WEST COURTS)`,34,n+20),t.drawImage(e,32,n+28,312,204),t.strokeStyle=`rgba(229, 169, 101, 0.28)`,t.strokeRect(32,n+28,312,204),t.restore()}}if(i){t.save();let e=r-66,a=n-40;if(ag(t,20,e,a,52,12),t.fillStyle=`rgba(12, 9, 7, 0.90)`,t.fill(),t.strokeStyle=i.accentColor||`#38d6c4`,t.lineWidth=1.5,t.stroke(),t.fillStyle=i.accentColor||`#38d6c4`,t.font=`700 11px "JetBrains Mono", monospace`,t.fillText(i.title,38,e+21),t.fillStyle=`#f3e7d8`,t.font=`400 12px "Inter", sans-serif`,t.fillText(i.subtitle,38,e+40),i.telemetry){t.fillStyle=`#ffd399`,t.font=`600 11px "JetBrains Mono", monospace`;let n=t.measureText(i.telemetry).width;t.fillText(i.telemetry,20+a-n-18,e+31)}t.restore()}}function cg(e){let t=(e,t,n)=>{let r=I.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},n=(e,t,n)=>[I.lerp(e[0],t[0],n),I.lerp(e[1],t[1],n),I.lerp(e[2],t[2],n)];if(Pp.visible=!0,jp.visible=!0,e<.11){let r=t(0,.11,e);Ah(`all`),Th(`equinox`,I.lerp(16.6,17,r));let i=n([-24,64,108],[-18,28,14],r),a=n([0,3.5,-8],[-28,4,-28],r);Y.position.set(...i),Z.target.set(...a),ng={partBadge:`3D ARCHITECTURAL RECONSTRUCTION (0.5m LIDAR & ARCHAEOLOGICAL SURVEY)`,title:`01 / PUEBLO BONITO 3D ARCHITECTURAL RECONSTRUCTION (0.5m LIDAR & SURVEY)`,subtitle:`Georeferenced D-shaped Great House with open East & West Courts, 35+ kivas & 12 guided rooms`,telemetry:`NPS (Lekson 1984) • ~800 Rooms`,accentColor:`#38d6c4`,showDossier:!1}}else if(e<.22){let r=t(.11,.22,e);Ah(`stage1`),Th(`equinox`,I.lerp(16.7,17,r)),(!$||$.id!==`pueblo_bonito_380`)&&Zh(gp.get(`pueblo_bonito_380`),!0);let i=n([-18,28,14],[-14,20,-2],r),a=n([-28,4,-28],[-32.4,3.8,-32.6],r);Y.position.set(...i),Z.target.set(...a),ng={partBadge:`SECTION II • OLD BONITO SACRED CORE`,title:`02 / ROOM 33 (WITH UPPER ROOM 58) HIGH-STATUS MATRILINEAL CRYPT`,subtitle:`At least 14 burials (9 with usable mtDNA all sharing haplotype B2y1), >56,000 turquoise pieces & wooden flutes`,telemetry:`AMNH Hyde Expedition • Stage I (AD 850–935)`,accentColor:`#38d6c4`,showDossier:!0}}else if(e<.33){let r=t(.22,.33,e),i=r>=.5;Ah(`all`),Th(`equinox`,I.lerp(16.8,16.5,r));let a=i?`pueblo_bonito_352`:`pueblo_bonito_240`;(!$||$.id!==a)&&Zh(gp.get(a),!0);let o=n([-14,20,-2],[-3,21,-8],r),s=n([-24.4,3.8,-30.7],[-14.6,4,-39.9],r);Y.position.set(...o),Z.target.set(...s),ng={partBadge:`SECTION II • MESOAMERICAN TRADE CACHES`,title:i?`03B / ROOM 38 — MACAW-KEEPING ROOM & RITUAL DEPOSIT`:`03A / ROOM 28 — CYLINDER JAR CACHE & CACAO RESIDUE`,subtitle:i?`14 scarlet macaw skeletons (12 in thick guano deposit, 2 in subfloor hollows) & turquoise-inlaid jet frog (Pepper 1920)`:`~174 ceramic vessels (~111–112 cylinder jars, ~99 on storage shelf; Pepper 1920) & absorbed theobromine residue (Crown & Hurst 2009)`,telemetry:i?`Room 38 • 14 Ara macao`:`Room 28 • Multi-Phase Remodeled Chamber`,accentColor:`#e5a965`,showDossier:!0}}else if(e<.44){let r=t(.33,.44,e),i=r>=.48;Ah(`all`),Th(`summer`,I.lerp(16.6,17.1,r));let a=i?`pueblo_bonito_159`:`pueblo_bonito_257`;(!$||$.id!==a)&&Zh(gp.get(a),!0);let o=i?n([16,20,36],[-8.3,17.5,40],(r-.48)/.52):n([-3,21,-8],[28,16.5,24],r/.48),s=i?n([20,2.5,16],[-8.3,1,21.4],(r-.48)/.52):n([24,3.8,4],[51,1.85,10.4],r/.48);Y.position.set(...o),Z.target.set(...s),ng={partBadge:i?`SECTION III • GREAT KIVAS`:`SECTION IV • EAST WING`,title:i?`04B / GREAT KIVA A — EAST COURT SANCTUARY (4 SQUARE MASONRY COLUMNS)`:`04A / ROOM 249 — MACAW-KEEPING ROOM`,subtitle:i?`Recessed East Court sanctuary with 4 square rubble-filled masonry columns, subfloor vaults & 34 wall niches`:`3 Ara macao skeletons on packed avian droppings floor with perches & 2 adobe food bowls (Judd 1954)`,telemetry:i?`Smithsonian NMNH • 4 Square Masonry Columns`:`Smithsonian NMNH (Judd 1954) • Room 249`,accentColor:`#38d6c4`,showDossier:!0}}else if(e<.55){let r=t(.44,.55,e),i=r<.5;if(Th(`equinox`,16.85),i){(!$||$.id!==`pueblo_bonito_406`)&&Zh(gp.get(`pueblo_bonito_406`),!0);let e=r/.5,t=n([-32,22,12],[-36,18,4],e),i=n([-56.9,3.5,-16.2],[-56.9,3.2,-16.2],e);Y.position.set(...t),Z.target.set(...i),ng={partBadge:`SECTION V • OLD BONITO ARCHITECTURAL BLOCK & 2D FLOORPLAN`,title:`05A / ROOM 326 — WESTERN BURIAL CLUSTER CHAMBER`,subtitle:`Old Bonito room (~AD 860–935) reused for 12 burials in reassessment (10♀, 1♂, 1 infant; older inventories: 11)`,telemetry:`Room 326 • 12 Individuals (Older Inventories: 11)`,accentColor:`#38d6c4`,showDossier:!0,showMinimap:!0}}else{let e=(r-.5)/.5,t=n([16,3.2,24],[-18,5.4,-14],e),i=n([-8,4,-18],[-28,4.2,-32],e);Y.position.set(...t),Z.target.set(...i),ng={partBadge:`FIRST-PERSON PLAZA & ROOM WALKTHROUGH`,title:`05B / EYE-LEVEL WALKTHROUGH ACROSS PUEBLO BONITO PLAZA & TERRACES`,subtitle:`Walk freely with WASD / Arrows across the open East & West Courts or use the Guided Walkthrough`,telemetry:`WASD + Mouse Look • 6 Guided Sections`,accentColor:`#e5a965`,showDossier:!1,showMinimap:!1}}}else if(e<.74){let n=t(.55,.74,e);Th(`equinox`,16.85);let r=`stage1`,i=`STAGE I (AD 850–935): OLD BONITO NORTHERN CRESCENT — TYPE I TABULAR MASONRY`,a=`Dendrochronology (Windes & Ford 1996): 1-story crude sandstone slab arc (~100 rooms, Rooms 1–65)`,o=`Stage 1/4 • AD 850–935 • Type I Masonry`;n>=.75?(r=`all`,i=`STAGE IV (AD 1085–1115): SOUTH ARC ENCLOSURE, DIVIDED PLAZA & 35+ KIVAS`,a=`Complete D-shaped monumental Great House (~175m [162–175m] × 98m) with Type IV tabular ashlar & meridian wall`,o=`Stage 4/4 • AD 1085–1115 • ~800 Rooms`):n>=.5?(r=`stage3`,i=`STAGE III (AD 1060–1085): EAST & WEST WINGS + RECESSED GREAT KIVAS`,a=`Monumental expansion with Type III banded sandstone veneer and recessed plaza Great Kivas`,o=`Stage 3/4 • AD 1060–1085 • Type III Banded Veneer`):n>=.25&&(r=`stage2`,i=`STAGE II (AD 1040–1060): RECONSTRUCTED 4-STORY NORTHERN SPINE (~14.0M)`,a=`Massive multi-story terraced spine erected along the cliff face using Type II core-and-veneer`,o=`Stage 2/4 • AD 1040–1060 • Est. 4 Stories (~14.0m)`),Ah(r);let s=I.lerp(-.65,.65,n),c=I.lerp(108,94,n);Y.position.set(Math.sin(s)*c,I.lerp(62,48,n),Math.cos(s)*c),Z.target.set(0,3.5,-8),ng={partBadge:`3D ARCHITECTURAL MODEL CHRONOLOGY`,title:`06 / ${i}`,subtitle:a,telemetry:o,accentColor:`#38d6c4`,showDossier:!1}}else if(e<.88){let r=t(.74,.88,e);Ah(`all`);let i=I.lerp(6.25,17.45,r);Th(`summer`,i);let a=n([68,32,44],[72,26,-10],r),o=n([12,5,-6],[22,8.5,-40],r);Y.position.set(...a),Z.target.set(...o),ng={partBadge:`ARCHAEOASTRONOMY & CLIFF GEOMORPHOLOGY`,title:`07 / SOLAR SHADOW SWEEP (06:15 → 17:25) & 1941 THREATENING ROCK COLLAPSE`,subtitle:`True 36.06°N solar azimuth shadow casting across reconstructed 4-story masonry & 30,000-ton Jan 22, 1941 rockfall`,telemetry:`Lat 36.06°N • Solar Time ${ig(i)}`,accentColor:`#e5a965`,showDossier:!1}}else{let r=t(.88,1,e);Ah(`all`),Th(`night`,21.5);let i=n([42,52,92],[-4,46,80],r),a=n([8,3,-4],[-4,2,-12],r);Y.position.set(...i),Z.target.set(...a),ng={partBadge:`DARK SKY NIGHT & KIVA HEARTH FIRES`,title:`08 / CEREMONIAL KIVA HEARTH FIRES UNDER THE CHACO DARK SKY (1,885M)`,subtitle:`Recessed firebox embers & point lights anchored inside 8 kiva floors across Pueblo Bonito`,telemetry:`8 Recessed Kiva Hearths • 21:30 Night Sky`,accentColor:`#ff8b66`,showDossier:!1}}Z.update()}function lg(e){let t=(e-Gm)/1e3;t>=15?(Wm=!1,ng=null):cg(I.clamp(t/15,0,1))}async function ug(){let e=new URLSearchParams(window.location.search),t=parseInt(e.get(`frames`)||`360`,10),n=document.getElementById(`loading-overlay`);n&&(n.style.display=`none`),rg();for(let e=0;e<t;e++){let n=e/Math.max(1,t-1),r=1e3/24*e;cg(n),kh();for(let e of Pp.children)e.isMesh&&e.userData.baseY!==void 0&&(e.rotation.y=r*.0022,e.position.y=e.userData.baseY+Math.sin(r*.004+e.position.x)*.35);if(Mp.visible)for(let e of Mp.children)e.isPointLight&&(e.intensity=16+Math.sin(r*.015+e.userData.phase)*3);Og(),ih(),sg(ng);let i=eg.toDataURL(`image/jpeg`,.92);try{await fetch(`/__frame__?index=${e}`,{method:`POST`,body:i})}catch(e){console.error(`Frame POST error:`,e)}}try{await fetch(`/__done__`,{method:`POST`,body:`ok`})}catch{}}function dg(){gm?pg():fg()}function fg(){Z.autoRotate=!1;let e=document.getElementById(`btn-toggle-autorotate`);e&&e.classList.remove(`active`),im===`orbit`&&bg(`guided`,!1),gm=!0;let t=document.getElementById(`btn-guided-walk`),n=document.getElementById(`guided-walk-icon`),r=document.getElementById(`guided-walk-label`);t&&t.classList.add(`active`),n&&(n.textContent=`⏸`),r&&(r.textContent=`Pause Guide`);let i=pp.findIndex(e=>$&&e.id===$.id);_m=i>=0?i:0,mg()}function pg(){gm=!1;let e=document.getElementById(`btn-guided-walk`),t=document.getElementById(`guided-walk-icon`),n=document.getElementById(`guided-walk-label`);e&&e.classList.remove(`active`),t&&(t.textContent=`▶`),n&&(n.textContent=`Auto-Guide Tour`)}function mg(){if(!gm)return;let e=pp[_m%pp.length];e&&(Yh(e.id,!1),im===`walk`?Cg(e.walkPos,e.walkTarget,2400,!0):Cg(e.camPos,e.target,2400,!1),vm=performance.now()+5200)}function hg(){if(sm||gm)return;let e=Y.position.x,t=Y.position.z,n=null,r=16.5;for(let i of pp){let a=gp.get(i.id),o=a&&a.cx||i.beaconPos[0],s=a?-(a.cy||-i.beaconPos[2]):i.beaconPos[2],c=Math.hypot(e-o,t-s),l=i.walkPos?Math.hypot(e-i.walkPos[0],t-i.walkPos[2]):999,u=Math.min(c,l);u<r&&(r=u,n=i)}if(n){if(Sm!==n.id){n.id,bp.add(n.id);let e=gp.get(n.id);e&&(Xh(e),Zh(e,!1),Bh(e))}}else if($){let n=$.cx||0,r=-($.cy||0);Math.hypot(e-n,t-r)>19.5&&Vh()}}function gg(e){gm&&pg(),im===`orbit`&&bg(`guided`,!1);let t=pp[(pp.findIndex(e=>$&&e.id===$.id)+e+pp.length)%pp.length];Yh(t.id,!0)}function _g(e=1){let t=[{y:1.8,label:`Plaza 1.8m`},{y:5.8,label:`Terrace 5.8m`},{y:14.5,label:`Overlook 14.5m`},{y:36.8,label:`Mesa Rim 36.8m`}],n=t.findIndex(e=>Math.abs(e.y-dm)<1.5);n<0&&(n=0),n=(n+e+t.length)%t.length,dm=t[n].y,im===`walk`&&(fm=dh(Y.position.x,Y.position.z)+dm,Y.position.y=fm,xg());let r=document.getElementById(`walk-elev-label`);r&&(r.textContent=t[n].label)}function vg(e=rp()){document.documentElement.lang=e,e===`ko`?document.title=`차코 캐니언 3D 디지털 트윈 & 고고천문학 탐험기`:document.title=`Chaco Canyon 3D Digital Twin & Archaeoastronomy Explorer`;let t=document.querySelector(`#btn-brand-home .brand-title`);t&&(t.textContent=q(`brandTitle`,e));let n=document.querySelector(`#btn-brand-home .brand-sub`);n&&(n.textContent=q(`brandSub`,e));let r=document.getElementById(`current-lang-label`);r&&(r.textContent=e===`ko`?`한국어`:`English`);let i=document.getElementById(`btn-toggle-lang`);i&&(i.title=q(`langToggleTitle`,e));let a=document.querySelector(`#center-title-overlay .center-hero-title`);a&&(a.textContent=q(`brandTitle`,e));let o=document.getElementById(`btn-mode-orbit`);o&&(o.innerHTML=`<span>🦅</span> ${q(`modeOrbit`,e)}`);let s=document.getElementById(`btn-mode-guided`);s&&(s.innerHTML=`<span>🧭</span> ${q(`modeGuided`,e)}`);let c=document.getElementById(`btn-mode-walk`);c&&(c.innerHTML=`<span>🚶</span> ${q(`modeWalk`,e)}`);let l=document.getElementById(`btn-rooms-label`);l&&(l.textContent=q(`btnRooms`,e));let u=document.getElementById(`btn-open-map`);u&&(u.title=q(`btnFloorplan`,e),u.innerHTML=`🗺️ ${q(`btnFloorplan`,e)}`);let d=document.getElementById(`btn-open-atlas`);d&&(d.title=q(`btnArchive`,e),d.innerHTML=`🏛️ ${q(`btnArchive`,e)}`);let f=document.getElementById(`record-btn-label`);f&&(f.textContent=q(`btnRecord`,e));let p=document.getElementById(`btn-toggle-hud`);p&&(p.title=q(`btnCleanView`,e));let m=document.querySelector(`.aspect-btn[data-aspect="auto"]`);m&&(m.textContent=q(`aspectAuto`,e),m.title=q(`aspectTitleAuto`,e));let h=document.querySelector(`.aspect-btn[data-aspect="16:9"]`);h&&(h.title=q(`aspectTitle16_9`,e));let g=document.querySelector(`.aspect-btn[data-aspect="9:16"]`);g&&(g.title=q(`aspectTitle9_16`,e));let _=document.querySelector(`#overview-hero-card .hero-eyebrow span:last-child`);_&&(_.textContent=q(`heroEyebrow`,e));let v=op(am,e);if(v){let e=document.getElementById(`hero-section-title`);e&&(e.textContent=v.heroTitle);let t=document.getElementById(`hero-section-desc`);t&&(t.innerHTML=v.heroDesc)}let y=q(`heroStats`,e),b=document.querySelectorAll(`#overview-hero-card .hero-stat`);if(b.length>=4){let e=b[0].querySelector(`.stat-val`),t=b[0].querySelector(`.stat-lbl`);e&&(e.textContent=y.roomsVal),t&&(t.textContent=y.roomsLbl);let n=b[1].querySelector(`.stat-val`),r=b[1].querySelector(`.stat-lbl`);n&&(n.textContent=y.southWallVal),r&&(r.textContent=y.southWallLbl);let i=b[2].querySelector(`.stat-val`),a=b[2].querySelector(`.stat-lbl`);i&&(i.textContent=y.stopsVal),a&&(a.textContent=y.stopsLbl);let o=b[3].querySelector(`.stat-val`),s=b[3].querySelector(`.stat-lbl`);o&&(o.textContent=y.dendroVal),s&&(s.textContent=y.dendroLbl)}let x=document.getElementById(`btn-start-walkthrough`);x&&(x.innerHTML=`<span>🧭</span> ${q(`btnStartWalkthrough`,e)}`);let S=document.getElementById(`btn-enter-freewalk`);S&&(S.innerHTML=`<span>🚶</span> ${q(`btnEnterFreeWalk`,e)}`),_h(),bh();let C=document.getElementById(`active-section-badge`);C&&v&&(C.textContent=v.fullTitle);let w=document.getElementById(`btn-toggle-autorotate`);w&&(w.title=q(`btnAutoOrbit`,e));let T=document.getElementById(`btn-reset-view`);T&&(T.title=q(`btnWideShot`,e));let E=document.getElementById(`btn-fullscreen-stage`);E&&(E.title=q(`btnFullscreen`,e));let D=document.getElementById(`btn-prev-area`);D&&(D.textContent=q(`btnPrevRoom`,e));let ee=document.getElementById(`btn-next-area-strip`);ee&&(ee.textContent=q(`btnNextRoom`,e));let O=document.getElementById(`guided-walk-label`);O&&(O.textContent=q(gm?`btnGuidedWalkPause`:`btnGuidedWalkStart`,e));let te=document.getElementById(`walk-hint-text`);te&&(te.innerHTML=q(`walkHint`,e));let k=document.getElementById(`explore-hud`);k&&(k.innerHTML=q(`exploreHud`,e)),document.querySelectorAll(`#onscreen-walk-pad .pad-btn`).forEach(t=>{let n=t.dataset.move;n===`turnLeft`?t.title=q(`walkPadTurnLeft`,e):n===`left`?t.title=q(`walkPadLeft`,e):n===`forward`?(t.title=q(`walkPadForward`,e),t.textContent=e===`ko`?`▲ 전진`:`▲ Walk`):n===`backward`?t.title=q(`walkPadBack`,e):n===`right`?t.title=q(`walkPadRight`,e):n===`turnRight`&&(t.title=q(`walkPadTurnRight`,e))});let ne=document.querySelector(`.compass-season-btn[data-season="equinox"]`);ne&&(ne.textContent=q(`seasonEquinox`,e),ne.title=q(`compassTitleEquinox`,e));let re=document.querySelector(`.compass-season-btn[data-season="summer"]`);re&&(re.textContent=q(`seasonSummer`,e),re.title=q(`compassTitleSummer`,e));let A=document.querySelector(`.compass-season-btn[data-season="winter"]`);A&&(A.textContent=q(`seasonWinter`,e),A.title=q(`compassTitleWinter`,e));let j=document.getElementById(`compass-info-btn`);j&&(j.title=q(`compassInfoBtnTitle`,e));let ie=document.querySelector(`#compass-info-popover .compass-info-title`);ie&&(ie.textContent=q(`compassInfoHeading`,e));let ae=document.querySelector(`#compass-info-popover .compass-info-text`);ae&&(ae.textContent=q(`compassInfoDesc`,e));let oe=document.querySelector(`#compass-info-popover .compass-info-list`);oe&&(oe.innerHTML=`
      <li>${q(`compassInfoWall`,e)}</li>
      <li>${q(`compassInfoMeridian`,e)}</li>
      <li>${q(`compassInfoSolstice`,e)}</li>
    `);let se=document.querySelectorAll(`#env-popover .pop-header span:first-child`);se.length>=2&&(se[0].textContent=q(`solarLightingHeader`,e),se[1].textContent=q(`phasesHeader`,e));let ce=document.querySelector(`#env-popover .slider-row label`);ce&&(ce.textContent=q(`sunTimeLabel`,e));let le=document.querySelectorAll(`#env-popover .solar-preset-btn`);le.length>=6&&(le[0].textContent=q(`presetGoldenHour`,e),le[1].textContent=q(`presetRakingSunset`,e),le[2].textContent=q(`presetEquinoxSunrise`,e),le[3].textContent=q(`presetWinterSolstice`,e),le[4].textContent=q(`presetHighNoon`,e),le[5].textContent=q(`presetNightKiva`,e));let ue=document.querySelectorAll(`#env-popover .phase-btn`);ue.length>=5&&(ue[0].textContent=q(`phaseAll`,e),ue[1].textContent=q(`phaseStage1`,e),ue[2].textContent=q(`phaseStage2`,e),ue[3].textContent=q(`phaseStage3`,e),ue[4].textContent=q(`phaseStage4`,e));let de=document.querySelectorAll(`#env-popover .toggle-chip`);de.length>=4&&(de[0].childNodes[1].nodeValue=` `+q(`chkLabels`,e),de[1].childNodes[1].nodeValue=` `+q(`chkAlignments`,e),de[2].childNodes[1].nodeValue=` `+q(`chkRoofs`,e),de[3].childNodes[1].nodeValue=` `+q(`chkRockfall`,e));let fe=document.querySelector(`#map-drawer .map-drawer-title`);fe&&(fe.textContent=q(`mapDrawerTitle`,e));let pe=document.querySelector(`#map-drawer .map-drawer-sub`);pe&&(pe.textContent=q(`mapDrawerSub`,e));let me=document.getElementById(`room-search-input`);me&&(me.placeholder=q(`mapSearchPlaceholder`,e));let he=document.getElementById(`btn-room-search`);he&&(he.textContent=q(`mapSearchBtn`,e));let ge=document.querySelectorAll(`.minimap-legend span`);ge.length>=6&&(ge[0].innerHTML=`<i class="leg-box leg-old"></i>${q(`legOldBonito`,e)}`,ge[1].innerHTML=`<i class="leg-box leg-4s"></i>${q(`legSpine`,e)}`,ge[2].innerHTML=`<i class="leg-box leg-wing"></i>${q(`legWings`,e)}`,ge[3].innerHTML=`<i class="leg-box leg-kiva"></i>${q(`legKivas`,e)}`,ge[4].innerHTML=`<i class="leg-box leg-disc"></i>${q(`legGuided`,e)}`,ge[5].innerHTML=`<i class="leg-box leg-you"></i>${q(`legCamera`,e)}`);let _e=document.getElementById(`atlas-modal-title`);_e&&(_e.textContent=q(`atlasModalTitle`,e));let ve=document.querySelector(`#atlas-modal .modal-header p`);ve&&(ve.textContent=q(`atlasModalSub`,e));let ye=document.querySelectorAll(`#atlas-modal .atlas-tab-btn`);ye.length>=4&&(ye[0].textContent=q(`atlasTab1`,e),ye[1].textContent=q(`atlasTab2`,e),ye[2].textContent=q(`atlasTab3`,e),ye[3].textContent=q(`atlasTab4`,e));let M=document.querySelector(`.sundagger-text h3`);M&&(M.textContent=q(`sunDaggerHeading`,e));let be=document.querySelector(`.sundagger-text p:first-of-type`);be&&(be.textContent=q(`sunDaggerDesc1`,e));let xe=document.querySelector(`.sundagger-text ul`);xe&&(xe.innerHTML=`
      <li><strong>${e===`ko`?`하지 정오:`:`Summer Solstice Noon:`}</strong> ${q(`sunDaggerPoint1`,e)}</li>
      <li><strong>${e===`ko`?`동지 정오:`:`Winter Solstice Noon:`}</strong> ${q(`sunDaggerPoint2`,e)}</li>
      <li><strong>${e===`ko`?`춘분/추분 정오:`:`Equinoxes Noon:`}</strong> ${q(`sunDaggerPoint3`,e)}</li>
      <li><strong>${e===`ko`?`달의 18.6년 대정지 주기:`:`18.6-Year Lunar Standstill:`}</strong> ${q(`sunDaggerPoint4`,e)}</li>
    `);let Se=document.querySelector(`.sundagger-text p:last-of-type`);Se&&(Se.textContent=q(`sunDaggerDesc2`,e));let N=document.querySelectorAll(`.sd-btn`);N.length>=4&&(N[0].textContent=q(`sdBtnSummer`,e),N[1].textContent=q(`sdBtnEquinox`,e),N[2].textContent=q(`sdBtnWinter`,e),N[3].textContent=q(`sdBtnLunar`,e));for(let[t,n]of rm.entries()){let r=vp.get(t),i=sp(t,e),a=$&&$.id===t;if(r){let e=i&&i.beaconLabel||r.beaconLabel,t=i&&i.shortPin||r.shortPin;n.textContent=a?e:t,n.title=e}}if(Sm){let e=gp.get(Sm);e&&Bh(e)}$&&Zh($,!1),Th(Dm,Om)}function yg(){let e=document.getElementById(`btn-toggle-lang`);e&&e.addEventListener(`click`,()=>{let e=rp()===`ko`?`en`:`ko`;ap(e),vg(e)}),document.querySelectorAll(`.mode-btn[data-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{gm&&pg(),bg(e.dataset.mode,!0)})});let t=document.getElementById(`btn-brand-home`);t&&t.addEventListener(`click`,()=>{gm&&pg(),vh(`overview`,!0)});let n=document.getElementById(`btn-start-walkthrough`);n&&n.addEventListener(`click`,()=>{bg(`guided`,!1),vh(`old_bonito`,!0),fg()});let r=document.getElementById(`btn-enter-freewalk`);r&&r.addEventListener(`click`,()=>{gm&&pg();let e=document.getElementById(`overview-hero-card`);e&&e.classList.add(`minimized`),bg(`walk`,!0)});let i=document.getElementById(`btn-guided-walk`);i&&i.addEventListener(`click`,()=>{dg()});let a=document.getElementById(`btn-cycle-elev`);a&&a.addEventListener(`click`,()=>{_g(1)});let o=document.getElementById(`btn-toggle-autorotate`);o&&o.addEventListener(`click`,()=>{im===`walk`&&bg(`orbit`,!1),Z.autoRotate=!Z.autoRotate,o.classList.toggle(`active`,Z.autoRotate)});let s=document.getElementById(`btn-reset-view`);s&&s.addEventListener(`click`,()=>{gm&&pg(),vh(`overview`,!0)});let c=document.getElementById(`btn-fullscreen-stage`);c&&c.addEventListener(`click`,()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})});let l=document.getElementById(`btn-toggle-hud`);l&&l.addEventListener(`click`,()=>{document.body.classList.toggle(`hud-hidden`),l.classList.toggle(`active`,document.body.classList.contains(`hud-hidden`))});let u=document.getElementById(`btn-close-inspector`),d=document.getElementById(`btn-reopen-dossier`),f=document.getElementById(`inspector-drawer`);u&&f&&u.addEventListener(`click`,()=>{f.classList.add(`collapsed-in-overview`),d&&d.classList.remove(`hidden`)}),d&&f&&d.addEventListener(`click`,()=>{f.classList.remove(`collapsed-in-overview`),d.classList.add(`hidden`)}),document.querySelectorAll(`#onscreen-walk-pad .pad-btn`).forEach(e=>{let t=e.dataset.move,n=e=>{if(e&&gm&&pg(),e&&im!==`walk`){let e=document.getElementById(`overview-hero-card`);e&&e.classList.add(`minimized`),bg(`walk`,!1)}t===`forward`?cm.w=e:t===`backward`?cm.s=e:t===`left`?cm.a=e:t===`right`?cm.d=e:t===`turnLeft`?cm.turnLeft=e:t===`turnRight`&&(cm.turnRight=e)};e.addEventListener(`pointerdown`,e=>{e.preventDefault(),n(!0)}),e.addEventListener(`pointerup`,()=>n(!1)),e.addEventListener(`pointerleave`,()=>n(!1)),e.addEventListener(`pointercancel`,()=>n(!1))}),document.querySelectorAll(`.vis-tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.vis-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.vis===`photo`,n=document.getElementById(`vis-pane-diagram`),r=document.getElementById(`vis-pane-photo`);n&&n.classList.toggle(`hidden`,t),r&&r.classList.toggle(`hidden`,!t)})}),document.getElementById(`btn-discoveries-drawer`).addEventListener(`click`,()=>{f&&f.classList.contains(`collapsed-in-overview`)?(f.classList.remove(`collapsed-in-overview`),d&&d.classList.add(`hidden`)):gg(1)}),document.getElementById(`btn-next-discovery`).addEventListener(`click`,()=>{gg(1)});let p=document.getElementById(`btn-prev-area`);p&&p.addEventListener(`click`,()=>gg(-1));let m=document.getElementById(`btn-next-area-strip`);m&&m.addEventListener(`click`,()=>gg(1)),document.getElementById(`btn-focus-selected`).addEventListener(`click`,()=>{$&&(gm&&pg(),bg(`guided`,!1),Yh($.id,!0,`guided`))}),document.getElementById(`btn-walk-here`).addEventListener(`click`,()=>{$&&(gm&&pg(),bg(`walk`,!1),Yh($.id,!0,`walk`))});let h=document.getElementById(`btn-env-popover`),g=document.getElementById(`env-popover`);h.addEventListener(`click`,e=>{e.stopPropagation(),g.classList.toggle(`hidden`),h.classList.toggle(`active`,!g.classList.contains(`hidden`))}),document.addEventListener(`click`,e=>{!g.classList.contains(`hidden`)&&!e.target.closest(`.popover-wrapper`)&&(g.classList.add(`hidden`),h.classList.remove(`active`))}),document.getElementById(`time-slider`).addEventListener(`input`,e=>{Dm===`night`&&(Dm=`equinox`),Th(Dm,parseFloat(e.target.value))}),document.querySelectorAll(`.solar-preset-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.solar-preset-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),Th(e.dataset.season,parseFloat(e.dataset.hour))})}),document.querySelectorAll(`.phase-btn`).forEach(e=>{e.addEventListener(`click`,()=>{Ah(e.dataset.phase)})}),document.getElementById(`chk-show-labels`).addEventListener(`change`,e=>{let t=e.target.checked;Pp.visible=t;for(let e of nm)e.userData.userEnabled=t,e.visible=t}),document.getElementById(`chk-show-alignments`).addEventListener(`change`,e=>{jp.visible=e.target.checked}),document.getElementById(`chk-show-roofs`).addEventListener(`change`,e=>{for(let t of em)t.visible=e.target.checked}),document.getElementById(`chk-show-rockfall`).addEventListener(`change`,e=>{tm&&(tm.visible=e.target.checked)});let _=document.getElementById(`map-drawer`),v=document.getElementById(`btn-open-map`);v.addEventListener(`click`,()=>{_.classList.toggle(`hidden`),v.classList.toggle(`active`,!_.classList.contains(`hidden`)),_.classList.contains(`hidden`)||$h()}),document.getElementById(`btn-close-map`).addEventListener(`click`,()=>{_.classList.add(`hidden`),v.classList.remove(`active`)}),document.querySelectorAll(`.mini-tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.mini-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),Hm=e.dataset.site,$h()})}),document.getElementById(`minimap-canvas`).addEventListener(`click`,e=>{let t=e.currentTarget,n=t.getBoundingClientRect(),r=(e.clientX-n.left)*(t.width/n.width),i=(e.clientY-n.top)*(t.height/n.height),a=parseFloat(t.dataset.minX||`0`),o=parseFloat(t.dataset.minY||`0`),s=parseFloat(t.dataset.scale||`1`),c=parseFloat(t.dataset.offX||`0`),l=parseFloat(t.dataset.offY||`0`),u=(r-c)/s+a,d=(t.height-i-l)/s+o,f=null,p=1/0;for(let e of hp.features){if(e.site!==Hm||e.subcourt)continue;let t=Math.hypot((e.cx||0)-u,(e.cy||0)-d);t<p&&(p=t,f=e)}f&&(gm&&pg(),Yh(f.id,!0))});let y=()=>{let e=document.getElementById(`room-search-input`).value.trim().toLowerCase();if(!e)return;let t=gp.get(e)||_p.get(e);!t&&hp&&(t=hp.features.find(t=>t.name&&t.name.toLowerCase().includes(e)||t.title&&t.title.toLowerCase().includes(e)||t.id&&t.id.toLowerCase().includes(e))),t&&(gm&&pg(),Yh(t.id,!0))};document.getElementById(`btn-room-search`).addEventListener(`click`,y),document.getElementById(`room-search-input`).addEventListener(`keydown`,e=>{e.key===`Enter`&&y()});let b=document.getElementById(`atlas-modal`);document.getElementById(`btn-open-atlas`).addEventListener(`click`,()=>{b.classList.remove(`hidden`)});let x=document.getElementById(`vis-pane-photo`);x&&x.addEventListener(`click`,()=>{b.classList.remove(`hidden`)}),document.getElementById(`btn-close-atlas`).addEventListener(`click`,()=>{b.classList.add(`hidden`)}),document.querySelectorAll(`.atlas-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.atlas-tab-btn`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.atlas-tab-content`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=document.getElementById(e.dataset.tab);t&&t.classList.add(`active`),e.dataset.tab===`tab-sundagger`&&Eg(`summer`)})});let S=document.getElementById(`btn-media-prev`);S&&S.addEventListener(`click`,e=>{e.stopPropagation(),zh(-1)});let C=document.getElementById(`btn-media-next`);C&&C.addEventListener(`click`,e=>{e.stopPropagation(),zh(1)});let w=document.getElementById(`btn-side-unfocus`);w&&w.addEventListener(`click`,()=>{Vh()});let T=document.getElementById(`btn-side-prev`);T&&T.addEventListener(`click`,()=>{gg(-1)});let E=document.getElementById(`btn-side-next`);E&&E.addEventListener(`click`,()=>{gg(1)});let D=document.getElementById(`btn-side-zoom-in`);D&&D.addEventListener(`click`,()=>{Hh()});let ee=document.getElementById(`btn-side-wide-view`);ee&&ee.addEventListener(`click`,()=>{Uh()});let O=document.getElementById(`btn-gs-wide`);O&&O.addEventListener(`click`,()=>{Uh()});let te=document.getElementById(`btn-gs-zoom-in`);te&&te.addEventListener(`click`,()=>{Wh(.62)});let k=document.getElementById(`btn-gs-zoom-out`);k&&k.addEventListener(`click`,()=>{Wh(1.55)});let ne=document.getElementById(`btn-gs-prev`);ne&&ne.addEventListener(`click`,()=>{gg(-1)});let re=document.getElementById(`btn-gs-next`);re&&re.addEventListener(`click`,()=>{gg(1)});let A={x:0,y:0},j=0,ie=new nd,ae=new L;X.domElement.addEventListener(`pointerdown`,e=>{A={x:e.clientX,y:e.clientY},gm&&pg(),sm&&=null,ym<.16&&(ym=.18),xm||im===`walk`?(Z.enabled=!1,pm=!0,mm={x:e.clientX,y:e.clientY}):(Z.enabled=!0,pm=!1)}),window.addEventListener(`pointermove`,e=>{if(pm&&(xm||im===`walk`)){let t=e.clientX-mm.x,n=e.clientY-mm.y;mm={x:e.clientX,y:e.clientY},lm-=t*.0042,um=I.clamp(um-n*.0038,-1.05,1.05),xg();return}let t=performance.now();if(t-j<28)return;if(j=t,e.target!==X.domElement||Qp.length===0){Zp&&Fh(null);return}let n=X.domElement.getBoundingClientRect();if(n.width<=0||n.height<=0)return;ae.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),ie.setFromCamera(ae,Y);let r=ie.intersectObjects(Qp,!1);if(r.length===0){Zp&&Fh(null),X.domElement.style.cursor=`grab`;return}for(let t of r)if(t.object.userData&&t.object.userData.discoveryId){let n=gp.get(t.object.userData.discoveryId);if(n){Fh(n,e.clientX,e.clientY),X.domElement.style.cursor=`pointer`;return}}let i=r[0],a=i.object.name||``,o=i.point,s=uh(o.x,o.z,a);s?(Fh(s,e.clientX,e.clientY),X.domElement.style.cursor=`pointer`):(Zp&&Fh(null),X.domElement.style.cursor=`grab`)}),window.addEventListener(`pointerup`,e=>{pm=!1,!xm&&im!==`walk`&&(Z.enabled=!0),Math.hypot(e.clientX-A.x,e.clientY-A.y)<6&&e.target===X.domElement&&Sg(e)}),window.addEventListener(`wheel`,e=>{if(!(e.target&&e.target.closest&&e.target.closest(`#room-side-note, #guided-stops-bar, #atlas-modal`))){if(gm&&pg(),ym<.14){e.preventDefault(),sm=null;let t=I.clamp(Math.abs(e.deltaY)*45e-5,.018,.065);ym=Math.min(.16,ym+t)}else(xm||im===`walk`)&&(xm=!1,im===`walk`&&bg(`orbit`,!1),Z.enabled=!0)}},{capture:!0,passive:!1});let oe=0;window.addEventListener(`touchstart`,e=>{e.touches&&e.touches.length===1&&(oe=e.touches[0].clientY)},{passive:!0}),window.addEventListener(`touchmove`,e=>{if(ym<.14&&e.touches&&e.touches.length===1){let t=e.touches[0].clientY,n=oe-t;oe=t,n>2&&(sm=null,ym=Math.min(.16,ym+.04))}},{passive:!0}),window.addEventListener(`keydown`,e=>{if(e.target&&(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`))return;if(e.key===`Escape`){Vh();return}let t=e.key.toLowerCase();if(e.key===`[`){gg(-1);return}if(e.key===`]`){gg(1);return}if(e.key===`+`||e.key===`=`){Wh(.68);return}if(e.key===`-`||e.key===`_`){Wh(1.45);return}(e.key===`ArrowUp`||e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`)&&e.preventDefault();let n=()=>{gm&&pg(),sm=null,ym<.16&&(ym=.18,bm=.18,jh(.18));let e=Z.target.x-Y.position.x,t=Z.target.y-Y.position.y,n=Z.target.z-Y.position.z,r=Math.max(.001,Math.hypot(e,n));lm=Math.atan2(-e,-n),um=I.clamp(Math.atan2(t,r),-1,1),fm=Y.position.y,xm=!0,Z.enabled=!1};(t===`w`||e.key===`ArrowUp`)&&(n(),cm.w=!0),(t===`s`||e.key===`ArrowDown`)&&(n(),cm.s=!0),t===`a`&&(n(),cm.a=!0),t===`d`&&(n(),cm.d=!0),e.key===`ArrowLeft`&&(n(),cm.turnLeft=!0),e.key===`ArrowRight`&&(n(),cm.turnRight=!0),e.key===`Shift`&&(cm.shift=!0)}),window.addEventListener(`keyup`,e=>{let t=e.key.toLowerCase();(t===`w`||e.key===`ArrowUp`)&&(cm.w=!1),(t===`s`||e.key===`ArrowDown`)&&(cm.s=!1),t===`a`&&(cm.a=!1),t===`d`&&(cm.d=!1),e.key===`ArrowLeft`&&(cm.turnLeft=!1),e.key===`ArrowRight`&&(cm.turnRight=!1),e.key===`Shift`&&(cm.shift=!1)})}function bg(e,t=!0){im=e,document.body.dataset.mode=e,t&&e===`walk`?xm=!0:e!==`walk`&&(xm=!1,Z&&(Z.enabled=!0))}function xg(){let e=new B(-Math.sin(lm)*Math.cos(um),Math.sin(um),-Math.cos(lm)*Math.cos(um));Z.target.copy(Y.position).add(e.multiplyScalar(12)),Y.lookAt(Z.target)}function Sg(e){let t=X.domElement.getBoundingClientRect();if(t.width<=0||t.height<=0)return;let n=new L((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new nd;r.setFromCamera(n,Y);let i=r.intersectObjects(Qp,!1);if(i.length===0)return;for(let e of i)if(e.object.userData&&e.object.userData.discoveryId){gm&&pg(),Yh(e.object.userData.discoveryId,!0);return}let a=i[0],o=a.object.name||``,s=a.point,c=uh(s.x,s.z,o);c?(gm&&pg(),Yh(c.id,!0)):$&&Vh()}function Cg(e,t,n=900,r=!1){sm={startPos:Y.position.clone(),endPos:new B(...e),startTarget:Z.target.clone(),endTarget:new B(...t),startTime:performance.now(),duration:n,isWalkTween:!!r}}function wg(){let e=document.getElementById(`room-datalist`);if(e&&hp){e.innerHTML=``;for(let t of pp){let n=gp.get(t.id);if(!n)continue;let r=document.createElement(`option`);r.value=n.id,r.label=`${t.chipLabel} — ${n.title||n.name}`,e.appendChild(r)}for(let t of hp.features.slice(0,180)){let n=document.createElement(`option`);n.value=t.name,n.label=`${dp[t.site]||t.site} (${t.phase||`Classic Bonito`})`,e.appendChild(n)}}}function Tg(){let e=document.getElementById(`sources-container`);if(!e||!hp)return;let t=hp.sources||hp.metadata&&(hp.metadata.dataSources||hp.metadata.sources)||[];e.innerHTML=``;for(let n of t){let t=document.createElement(`div`);t.className=`source-item`,t.innerHTML=`
      <div>
        <strong>${n.title||n.name||`NPS (Lekson 1984) / HABS No. NM-30 (LOC nm0107) & 0.5m LiDAR Survey`}</strong>
        <span>${n.details||n.focus||n.description||`Primary Archaeological & Geospatial Dataset`}</span>
      </div>
      <a href="${n.url||`https://www.loc.gov/pictures/item/nm0107/`}" target="_blank" rel="noopener noreferrer">Open Archive ↗</a>
    `,e.appendChild(t)}}function Eg(e){let t=document.getElementById(`sundagger-canvas`);if(!t)return;let n=t.getContext(`2d`),r=t.width,i=t.height;n.fillStyle=`#241a13`,n.fillRect(0,0,r,i);let a=r*.56,o=i*.54;n.strokeStyle=`#d8b78e`,n.lineWidth=2.2,n.beginPath();for(let e=0;e<Math.PI*19;e+=.14){let t=e*1.12,r=a+Math.cos(e)*t,i=o+Math.sin(e)*t;e===0?n.moveTo(r,i):n.lineTo(r,i)}n.stroke();let s=r*.24,c=i*.36;n.beginPath();for(let e=0;e<Math.PI*6;e+=.16){let t=e*1.15,r=s+Math.cos(e)*t,i=c+Math.sin(e)*t;e===0?n.moveTo(r,i):n.lineTo(r,i)}n.stroke(),n.fillStyle=`rgba(255, 222, 120, 0.88)`;let l=(e,t,r)=>{n.beginPath(),n.moveTo(e,t),n.lineTo(e+7,(t+r)*.5),n.lineTo(e,r),n.lineTo(e-7,(t+r)*.5),n.closePath(),n.fill()};e===`summer`?l(a,o-76,o+76):e===`winter`?(l(a-66,o-68,o+68),l(a+66,o-68,o+68)):e===`equinox`?(l(s,c-34,c+34),l(a+33,o-64,o+64)):e===`lunar`&&(n.fillStyle=`rgba(90, 185, 255, 0.32)`,n.fillRect(a-66,15,132,i-30),n.strokeStyle=`#68d8ff`,n.lineWidth=2.5,n.beginPath(),n.moveTo(a-66,15),n.lineTo(a-66,i-15),n.moveTo(a,15),n.lineTo(a,i-15),n.stroke())}var Dg=new B;function Og(){for(let e of nm)if(e.userData&&e.userData.isInterpretiveKivaLabel&&Y){let t=$&&($.id===`pueblo_bonito_131`||$.id===`pueblo_bonito_132`)||Zp&&(Zp.id===`pueblo_bonito_131`||Zp.id===`pueblo_bonito_132`),n=Y.position.distanceTo(e.position);Dg.copy(e.position).project(Y),e.visible=Dg.z>0&&Dg.z<1&&Math.abs(Dg.x)<.92&&Math.abs(Dg.y)<.92&&(t||n<48)}else e.visible=!1}function kg(){if(!Y||!X||!xp)return;let{width:e,height:t}=eh(),n=e/t;Y.aspect=n,Y.fov=th(n),Y.updateProjectionMatrix(),X.setSize(e,t),xp.setSize(e,t),Sp&&Sp.setSize(e,t)}function Ag(e){let t=e===`16:9`||e===`16x9`?`16:9`:e===`9:16`||e===`9x16`?`9:16`:`auto`;document.body.dataset.aspectMode=t;let n=document.querySelectorAll(`#aspect-ratio-bar .aspect-btn`);for(let e of n)e.classList.toggle(`active`,e.dataset.aspect===t);kg(),setTimeout(kg,60),setTimeout(kg,260)}function jg(){let e=new URLSearchParams(window.location.search);(e.get(`embed`)===`1`||e.get(`embed`)===`true`)&&(document.body.dataset.embedClean=`true`),Ag(e.get(`aspect`)||e.get(`ratio`)||`auto`);let t=document.querySelectorAll(`#aspect-ratio-bar .aspect-btn`);for(let e of t)e.addEventListener(`click`,t=>{t.stopPropagation(),Ag(e.dataset.aspect||`auto`)});let n=document.getElementById(`viewport-stage`);n&&typeof ResizeObserver<`u`&&new ResizeObserver(()=>{kg()}).observe(n)}var Mg=new B;function Ng(){let e=document.getElementById(`celestial-compass`),t=document.getElementById(`celestial-compass-svg`),n=document.getElementById(`compass-ticks`);if(!e||!t||!n)return;n.innerHTML=``;for(let e=0;e<360;e+=10){if(e%90==0)continue;let t=I.degToRad(e),r=e%30==0,i=52.8,a=r?48.6:50.4,o=Math.sin(t),s=-Math.cos(t),c=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);c.setAttribute(`x1`,(60+o*a).toFixed(2)),c.setAttribute(`y1`,(60+s*a).toFixed(2)),c.setAttribute(`x2`,(60+o*i).toFixed(2)),c.setAttribute(`y2`,(60+s*i).toFixed(2)),c.setAttribute(`class`,r?`compass-tick-major`:`compass-tick-minor`),n.appendChild(c)}let r=document.getElementById(`compass-info-btn`),i=document.getElementById(`compass-info-popover`),a=document.getElementById(`compass-info-close`),o=e=>{r&&i&&(i.classList.toggle(`hidden`,!e),r.setAttribute(`aria-expanded`,e?`true`:`false`))};r&&i&&(r.addEventListener(`pointerdown`,e=>e.stopPropagation()),r.addEventListener(`click`,e=>{e.stopPropagation();let t=i.classList.contains(`hidden`);o(t)}),i.addEventListener(`pointerdown`,e=>e.stopPropagation())),a&&a.addEventListener(`click`,e=>{e.stopPropagation(),o(!1)}),document.addEventListener(`pointerdown`,e=>{i&&!i.classList.contains(`hidden`)&&!e.target.closest(`#compass-info-popover`)&&!e.target.closest(`#compass-info-btn`)&&o(!1)}),e.querySelectorAll(`.compass-season-btn`).forEach(t=>{t.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.addEventListener(`click`,n=>{n.stopPropagation(),jm=!1,e.classList.remove(`sweep-active`);let r=t.dataset.season||`equinox`,i=Sh[r]||Sh.equinox;jp.visible=!0;let a=i.sunriseHour;Dm===r&&(a=Math.abs(Om-i.sunriseHour)<=.35?i.noonHour:Math.abs(Om-i.noonHour)<=.35?i.sunsetHour:i.sunriseHour),Math.abs(a-12),Th(r,a)})}),e.querySelectorAll(`.compass-moment-btn`).forEach(t=>{t.addEventListener(`pointerdown`,e=>e.stopPropagation()),t.addEventListener(`click`,n=>{n.stopPropagation(),jm=!1,e.classList.remove(`sweep-active`);let r=Dm===`summer`||Dm===`winter`?Dm:`equinox`,i=Sh[r]||Sh.equinox,a=t.dataset.moment||`sunrise`,o=a===`noon`?i.noonHour:a===`sunset`?i.sunsetHour:i.sunriseHour;jp.visible=!0,Th(r,o)})});let s=document.getElementById(`compass-center-btn`);s&&(s.addEventListener(`pointerdown`,e=>{e.stopPropagation()}),s.addEventListener(`click`,t=>{t.stopPropagation(),jm=!jm,e.classList.toggle(`sweep-active`,jm)}));let c=e=>{let n=t.getBoundingClientRect(),r=n.left+n.width*.5,i=n.top+n.height*.5,a=e.clientX-r,o=e.clientY-i,s=I.radToDeg(Math.atan2(a,-o));s<0&&(s+=360);let c=0;Y&&(Y.getWorldDirection(Mg),c=I.radToDeg(Math.atan2(Mg.x,-Mg.z)),c<0&&(c+=360));let l=(s+c)%360,u=Dm===`summer`||Dm===`winter`?Dm:`equinox`,d=wh(u,l);jp.visible=!0,Th(u,d)};t.addEventListener(`pointerdown`,t=>{t.target.closest(`#compass-center-btn`)||(t.stopPropagation(),t.preventDefault(),Mm=!0,jm=!1,e.classList.add(`scrubbing`),e.classList.remove(`sweep-active`),c(t))}),window.addEventListener(`pointermove`,e=>{Mm&&c(e)}),window.addEventListener(`pointerup`,()=>{Mm&&(Mm=!1,e.classList.remove(`scrubbing`))})}function Pg(e){gm&&pg(),jp.visible=!0,e===`winter_window`?Th(`winter`,Sh.winter.sunriseHour):e===`equinox_wall`?Th(`equinox`,Sh.equinox.sunriseHour):e===`meridian_noon`?Th(`equinox`,12):e===`summer_spine`&&Th(`summer`,Sh.summer.sunriseHour)}function Fg(e,t){let n=document.getElementById(`compass-world-ring`);if(n&&Y){Y.getWorldDirection(Mg);let e=I.radToDeg(Math.atan2(Mg.x,-Mg.z));n.setAttribute(`transform`,`rotate(${(-e).toFixed(2)} 60 60)`),n.querySelectorAll(`.compass-cardinal-text`).forEach(t=>{t.setAttribute(`transform`,`rotate(${e.toFixed(2)})`)})}if(jm&&!Mm){let e=Dm===`summer`||Dm===`winter`?Dm:`equinox`,n=Sh[e]||Sh.equinox,r=Om+t*1.15;(r>n.sunsetHour||r<n.sunriseHour)&&(r=n.sunriseHour),Th(e,r)}}function Ig(e){requestAnimationFrame(Ig);let t=Math.min(.05,Math.max(.001,(e-hm)/1e3));if(hm=e,Fg(e,t),$&&!sm){let e=$.cx||0,t=-($.cy||0),n=Math.hypot(Z.target.x-e,Z.target.z-t),r=Y.position.distanceTo(Z.target),i=Math.max(18,Jh*1.32),a=Math.max(15.5,Jh*1.15);r>i||n>18?Yp=0:r<=a&&n<=14&&(Yp=1)}if(Xp=I.lerp(Xp,Yp,Math.min(1,t*6.5)),Jp.uDimAmount.value=Xp,Wm)lg(e);else if(sm){let t=(e-sm.startTime)/sm.duration;if(t>=1)Y.position.copy(sm.endPos),Z.target.copy(sm.endTarget),sm.isWalkTween?(Kh([sm.endPos.x,sm.endPos.y,sm.endPos.z],[sm.endTarget.x,sm.endTarget.y,sm.endTarget.z]),hg()):(Z.enabled=!0,Z.update()),sm=null,$h();else{let e=1-(1-t)**3;Y.position.lerpVectors(sm.startPos,sm.endPos,e),Z.target.lerpVectors(sm.startTarget,sm.endTarget,e),sm.isWalkTween?(Y.lookAt(Z.target),qh()):Z.update()}}else if(gm)e>=vm&&(_m=(_m+1)%pp.length,mg()),im!==`walk`&&Z.update();else if(xm||im===`walk`){let e=!1,n=1.65*t;cm.turnLeft&&(lm+=n,e=!0),cm.turnRight&&(lm-=n,e=!0);let r=(cm.shift?30:15.5)*t,i=new B(-Math.sin(lm),0,-Math.cos(lm)),a=new B(Math.cos(lm),0,-Math.sin(lm));if(cm.w&&(Y.position.addScaledVector(i,r),e=!0),cm.s&&(Y.position.addScaledVector(i,-r),e=!0),cm.d&&(Y.position.addScaledVector(a,r),e=!0),cm.a&&(Y.position.addScaledVector(a,-r),e=!0),e){let e=fh(Y.position.x,Y.position.z);fm=I.lerp(fm,e,Math.min(1,t*8.5)),Y.position.y=fm,xg(),qh(),hg(),$h()}else xg()}else if(ym<.14||bm<.135){let e=ym-bm;Math.abs(e)>15e-5||bm>.002?(bm=I.lerp(bm,ym,Math.min(1,t*6.8)),bm<.135?Gh(bm):(bm=ym,jh(bm),Z.enabled=!0,Z.update())):(jh(bm),Z.enabled=!0,Z.update())}else jh(bm),Z.enabled=!0,Z.update();if(kh(),kp&&kp.intensity>0&&(kp.intensity=(2.2+Math.sin(e*.0025)*.2)*Xp),Ap&&Ap.intensity>0&&(Ap.intensity=2.8*Xp),Mp.visible)for(let t of Mp.children)t.isPointLight&&(t.intensity=16+Math.sin(e*.012+t.userData.phase)*3);Og(),ih()}qm();