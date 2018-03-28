// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../lib/glMatrix ../../animation/easing ./constraintUtils/common ./constraintUtils/tilt ./constraintUtils/tilt ./constraintUtils/altitude ./constraintUtils/altitude ./constraintUtils/distance ./constraintUtils/distance ./constraintUtils/surfaceCollision ./constraintUtils/surfaceCollision".split(" "),function(z,a,r,t,m,d,e,g,n,p,q,u,v){Object.defineProperty(a,"__esModule",{value:!0});a.applyTilt=e.apply;a.tiltError=e.error;a.applyAltitude=n.apply;a.altitudeError=n.error;a.applyDistance=
q.apply;a.distanceError=q.error;a.applySurfaceCollision=v.apply;a.applyAll=function(f,b,c,a){void 0===c&&(c=w);void 0===a&&(a=b);var h=!1;a!==b&&a.copyFrom(b);a.markViewDirty();a.computeUp(f.state.mode);for(b=0;b<x;b++){for(var d=0,k=0,e=y;k<e.length;k++){var l=e[k];if(m.hasConstraintType(c.selection,l.type)){var g=Math.abs(l.error(f,a,c));l.apply(f,a,c)&&(h=!0,d+=g)}}if(0===d)break}b=m.hasConstraintType(c.selection,8);c=4===c.interactionType?1:0;b&&u.apply(f,a,c)&&(h=!0);h&&a.computeUp(f.state.mode);
return h};a.pixelDistanceToInteractionFactor=function(a,b){a="number"===typeof a?a:r.vec2d.dist(a,b);return t.inOutCubic(Math.min(1,a/150))};var y=[{type:1,error:function(a,b,c){return d.error(a,b,c)*b.distance},apply:d.apply},{type:2,error:g.error,apply:g.apply},{type:4,error:p.error,apply:p.apply}],w={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null},x=5});