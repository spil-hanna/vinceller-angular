'use strict';

/* Controllers */

var wineControllers = angular.module('wineControllers', []);

wineControllers.controller('WineListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/api/wine_list').success(function(data) {
      $scope.wines = data;
    });

    $scope.orderProp = '-id';
  }]);

wineControllers.controller('WineDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('/api/wine_detail/' + $routeParams.wineId).success(function(data) {
      $scope.wine = data;
    });

    $scope.edit = false;

    $scope.startEdit = function(){
      console.log("Enable editing");
      $scope.edit = true;
    }

    $scope.saveEdit = function(){
      console.log("Saving editing");
      $scope.edit = false;
      console.log($scope.wine);
      // post the data to the server
      $.ajax({
        url: "/api/wine_update",
        data: $scope.wine,
        type: "POST",
        dataType: "JSON",
        success: function(json){
          console.log("Post succeeded");
        }
        /*
        error: function(xhr, status, errorThrown){
          console.log("Post error");
        }
        */
      });
    }

    $scope.cancelEdit = function(){
      console.log("Cancelling editing");
      $scope.edit = false;
    }

  }]);
