//>>built
define([],function(){if(/Trident/.test(window.navigator.userAgent)){for(var c=["log","info","debug","warn","error"],a=0;a<c.length;a++){var b=c[a];if(console[b]&&!console[b]._fake){var d="_"+c[a];console[d]=console[b];console[b]=function(){var a=d;return function(){console[a](Array.prototype.join.call(arguments," "))}}()}}try{console.clear()}catch(e){}}});