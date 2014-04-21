'use strict';

var mainModule = angular.module('mainModule');


// See https://github.com/zohararad/audio5js
mainModule.factory('AudioService', function () {
  var params = {
    swf_path:'../../swf/audio5js.swf',
    throw_errors:true,
    format_time:true
  };

  var audio5js = new Audio5js(params);

  return audio5js;
});
