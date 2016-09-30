angular.module("listApp").factory("dataApi", function($http, config){

  var _getData = function(){
    return $http.get(config.baseUrl + "/todos");
  };
  var _putData = function(data){
    return $http.put(config.baseUrl + "/Data", data);
  };
  return{
    getData:_getData,
    putData:_putData,
  };
});
