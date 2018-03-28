// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/lang ./Geometry ./Extent ./Point ./SpatialReference ./support/webMercatorUtils ./support/zmUtils ./support/coordsUtils".split(" "),function(q,R,N,f,g,A,O,J,h,P,K,L,u){function M(g){return function(b,k){return null==b?k:null==k?b:g(b,k)}}var n=M(Math.min),l=M(Math.max);q=function(q){function b(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a=q.apply(this,
a)||this;a.rings=[];a.type="polygon";return a}N(b,q);k=b;b.createEllipse=function(a){var c=a.center.x,d=a.center.y,F=a.center.z,e=a.center.m,b=a.center.hasZ,g=a.center.hasM,Q=a.longAxis,n=a.shortAxis,l=a.numberOfPoints;a=a.view;for(var r=[],f=2*Math.PI/l,h=b?3:2,v=0;v<l;v++){var p=a.toMap(Q*Math.cos(v*f)+c,n*Math.sin(v*f)+d),p=[p.x,p.y];b&&(p[2]=F);g&&(p[h]=e);r.push(p)}r.push(r[0]);return new k({rings:[r],spatialReference:a.spatialReference})};b.createCircle=function(a){return k.createEllipse({center:a.center,
longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,view:a.view})};b.fromExtent=function(a){var c=a.clone().normalize();a=a.spatialReference;var d=!1,b=!1;c.map(function(a){a.hasZ&&(d=!0);a.hasM&&(b=!0)});c={rings:c.map(function(a){var c=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(d&&a.hasZ)for(var F=(a.zmax-a.zmin)/2,e=0;e<c.length;e++)c[e].push(F);if(b&&a.hasM)for(a=(a.mmax-a.mmin)/2,e=0;e<c.length;e++)c[e].push(a);return c}),spatialReference:a};d&&
(c.hasZ=!0);b&&(c.hasM=!0);return new k(c)};b.prototype.normalizeCtorArgs=function(a,c){var d=null,b,e,m=null;a&&!Array.isArray(a)?(d=a.rings?a.rings:null,c||(a.spatialReference?c=a.spatialReference:a.rings||(c=a)),b=a.hasZ,e=a.hasM):d=a;d=d||[];c=c||P.WGS84;d.length&&d[0]&&null!=d[0][0]&&"number"===typeof d[0][0]&&(d=[d]);if(m=d[0]&&d[0][0])void 0===b&&void 0===e?(b=2<m.length,e=!1):void 0===b?b=!e&&3<m.length:void 0===e&&(e=!b&&3<m.length);return{rings:d,spatialReference:c,hasZ:b,hasM:e}};Object.defineProperty(b.prototype,
"centroid",{get:function(){var a=u.ringsCentroid([],this.rings,this.hasZ);if(isNaN(a[0])||isNaN(a[1])||this.hasZ&&isNaN(a[2]))return null;var c=new h;c.x=a[0];c.y=a[1];c.spatialReference=this.spatialReference;this.hasZ&&(c.z=a[2]);return c},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"extent",{get:function(){var a=this.hasZ,c=this.hasM,d=this.spatialReference,b=this.rings,e=a?3:2;if(!b.length||!b[0].length)return null;for(var m=b[0][0],g=m[0],m=m[1],f=b[0][0],k=f[0],f=f[1],h=
void 0,r=void 0,q=void 0,u=void 0,v=[],p=0;p<b.length;p++){for(var B=b[p],x=B[0],G=x[0],x=x[1],y=B[0],H=y[0],y=y[1],C=void 0,D=void 0,A=void 0,w=void 0,I=0;I<B.length;I++){var z=B[I],t=z[0],E=z[1],g=n(g,t),m=n(m,E),k=l(k,t),f=l(f,E),G=n(G,t),x=n(x,E),H=l(H,t),y=l(y,E);a&&2<z.length&&(t=z[2],h=n(h,t),r=l(r,t),C=n(C,t),D=l(D,t));c&&z.length>e&&(w=z[e],q=n(h,w),u=l(r,w),A=n(C,w),w=l(D,w))}v.push(new J({xmin:G,ymin:x,zmin:C,mmin:A,xmax:H,ymax:y,zmax:D,mmax:w,spatialReference:d}))}b=new J;b.xmin=g;b.ymin=
m;b.xmax=k;b.ymax=f;b.spatialReference=d;a&&(b.zmin=h,b.zmax=r);c&&(b.mmin=q,b.mmax=u);b.cache._partwise=1<v.length?v:null;return b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isSelfIntersecting",{get:function(){return u.isSelfIntersecting(this.rings)},enumerable:!0,configurable:!0});b.prototype.writePaths=function(a,c,b,f){c.rings=A.clone(this.rings)};b.prototype.addRing=function(a){if(a){this.clearCache();var b=this.rings,d=b.length;if(Array.isArray(a[0]))b[d]=a.concat();
else{for(var f=[],e=0,g=a.length;e<g;e++)f[e]=a[e].toArray();b[d]=f}return this}};b.prototype.clone=function(){var a=new k;a.spatialReference=this.spatialReference;a.rings=A.clone(this.rings);a.hasZ=this.hasZ;a.hasM=this.hasM;return a};b.prototype.contains=function(a){if(!a)return!1;K.canProject(a,this.spatialReference)&&(a=K.project(a,this.spatialReference));return u.contains(this.rings,u.geometryToCoordinates(a))};b.prototype.isClockwise=function(a){var b=this;a=Array.isArray(a[0])?a:a.map(function(a){return b.hasZ?
b.hasM?[a.x,a.y,a.z,a.m]:[a.x,a.y,a.z]:[a.x,a.y]});return u.isClockwise(a,this.hasM,this.hasZ)};b.prototype.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.rings[a][b];b=this.hasZ;var c=this.hasM;return b&&!c?new h(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new h(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new h(a[0],a[1],a[2],a[3],this.spatialReference):new h(a[0],a[1],this.spatialReference)};b.prototype.insertPoint=function(a,b,d){if(!this._validateInputs(a,
b,!0))return this;this.clearCache();L.updateSupportFromPoint(this,d);Array.isArray(d)||(d=d.toArray());this.rings[a].splice(b,0,d);return this};b.prototype.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;this.clearCache();return new h(this.rings[a].splice(b,1)[0],this.spatialReference)};b.prototype.removeRing=function(a){if(!this._validateInputs(a,null))return null;this.clearCache();a=this.rings.splice(a,1)[0];var b=this.spatialReference;return a.map(function(a){return new h(a,
b)})};b.prototype.setPoint=function(a,b,d){if(!this._validateInputs(a,b))return this;this.clearCache();L.updateSupportFromPoint(this,d);Array.isArray(d)||(d=d.toArray());this.rings[a][b]=d;return this};b.prototype._validateInputs=function(a,b,d){void 0===d&&(d=!1);if(null==a||null==b||0>a||a>=this.rings.length)return!1;a=this.rings[a];return d&&0>b||b>a.length||0>b||b>=a.length?!1:!0};b.prototype.toJSON=function(a){return this.write(null,a)};f([g.property({dependsOn:["hasM","hasZ","rings"]})],b.prototype,
"cache",void 0);f([g.property({readOnly:!0,dependsOn:["cache"]})],b.prototype,"centroid",null);f([g.property({dependsOn:["cache"],readOnly:!0})],b.prototype,"extent",null);f([g.property({dependsOn:["cache"],readOnly:!0})],b.prototype,"isSelfIntersecting",null);f([g.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"rings",void 0);f([g.writer("rings")],b.prototype,"writePaths",null);return b=k=f([g.subclass("esri.geometry.Polygon")],b);var k}(g.declared(O));q.prototype.toJSON.isDefaultToJSON=
!0;return q});