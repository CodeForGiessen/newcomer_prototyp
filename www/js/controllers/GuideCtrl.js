'use strict';
angular.module('refugeeApp').controller('GuideCtrl', function (GuideLineService, $q, $scope, ionicMaterialInk, ionicMaterialMotion, $state, $timeout, $ionicLoading) {

  //$scope.langKey = GuideLineService.getLangKey();
  //$scope.categories = GuideLineService.findAllCategories();

  $scope.catImages = ["../img/catImg/barista.jpeg","../img/catImg/beach.jpeg","../img/catImg/chicago.jpeg", "../img/catImg/cloudsOverMountain.jpeg", "../img/catImg/coast.jpeg"];

  var reload = function(){
    $ionicLoading.show();

    $q.all([
      GuideLineService.getLangKey(),
      GuideLineService.findAllCategories()
    ])
    .then (function (res) {
      var langKey = res[0];
      var categories = res[1];
      $scope.langKey = langKey;
      $scope.categories = categories;
    })
      .finally(function(){
        $ionicLoading.hide();
        //$scope.$broadcast('scroll.refreshComplete');
        });
  };

  $scope.reload = reload();

  $scope.$on('$ionicView.enter', reload);

  /**
   *
   */
  $timeout(function () {
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.blinds();
  },0);
});
