!function(){"use strict";angular.module("tp.facebook",[]).factory("FacebookService",function(){return{init:function(){openFB.init({appId:"618655191580620"})},login:function(){openFB.login(function(response){alert("connected"===response.status?"Facebook login succeeded, got access token: "+response.authResponse.token:"Facebook login failed: "+response.error)},{scope:"public_profile,email,publish_actions"})},getInfo:function(){},shareMessage:function(){},revokePermissions:function(){},logout:function(){},errorHandler:function(error){console.log(error.message)}}})}();