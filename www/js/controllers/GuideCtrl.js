'use strict'
app.controller('GuideCtrl', function ($scope) {
  var request =  new XMLHttpRequest();
  request.open("GET", "../templates/guides.json", false);
  request.send(null);
  $scope.guides = JSON.parse(request.responseText);
})
