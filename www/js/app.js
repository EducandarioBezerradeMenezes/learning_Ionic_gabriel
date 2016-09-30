// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =  angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function($scope){
  $scope.mensagem = 'Akula e Girafa'
  $scope.lista = ['A','B','C'];
  $scope.newMensagem = function(novaMensagem){
    $scope.mensagem = novaMensagem;
  };
});

//app.controller('ApiController',function($scope){
//  $scope.ApiLista = ['a','b','c','d'];

//});

app.controller ('ApiController', function ($scope) {

    // Cria o objeto band
    $scope.lista = ['a','b','c'];
  });


// verificar se esta correto
angular.module("listApp").controller("dataCtrl", function($scope, dataApi, $timeout){

  $scope.info="";

    popularDados = function(){
      dataApi.getData().success(function(data){
        $scope.dados = data;
      });
    }

    popularDados();

    $scope.saveData = function(){

      dataApi.putData($scope.info).success(function(){
        popularDados();
      });

      $scope.info="";
    };



});