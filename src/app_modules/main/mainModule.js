(function () {
    'use strict';

    angular.module('tp.main', ['tp.locale'])

    .controller('MainCtrl', function ($scope, LanguageService) {

        $scope.loading = true;

        // check language
        LanguageService.findLanguage().then(function (language) {
            // receiving language (ex: pt or en)
            
            if(language == 'pt'){
                LanguageService.setLanguage('PT');
                LanguageService.getLanguageJSON().success(function(response){
                    LanguageService.setLanguageJSON(response);

                    //NOW CHECK IF USER IS ALREADY LOGGED IN
                        // If is logged in, then:
                        // Load user data ang go to home page

                        // If is not logged in, then:
                        $scope.loading = false;
                });
            }

            if(language == 'en'){
                LanguageService.setLanguage('EN');
                LanguageService.requestLanguageJSON('EN').success(function(response){
                    LanguageService.setLanguageJSON(response);
                
                    //NOW CHECK IF USER IS ALREADY LOGGED IN
                        // If is logged in, then:
                        // Load user data ang go to home page

                        // If is not logged in, then:
                        $scope.loading = false;

                });      
            }
        }, function () {
            console.log('Error getting language, possibly because there is no cordova plugin.');
            console.log('Using pt as default language for tests');
            LanguageService.setLanguage('PT');
            LanguageService.requestLanguageJSON(LanguageService.getLanguage()).success(function(response){
                LanguageService.setLanguageJSON(response);
                $scope.loading = false;
            })
        });

        $scope.onLogin = function(){
            window.location.href = "#/login";
        }

        $scope.onRegister = function(){
            window.location.href = "#/register";
        }

        // check if user is logged

    })
    
    .controller('RegisterLoginCtrl', function () {
        
    });

}());