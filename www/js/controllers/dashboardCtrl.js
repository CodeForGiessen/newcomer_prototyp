'use-strict'
app.controller('dashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk) {

  $scope.events = [
    { title: 'Ausflug zum Schiffenberg', date: '23.11.2015', location: 'Haupteingang Camp', id: 1 },
    { title: 'Spendenverteilung', date: '06.10.2015', location: 'Camp Zentrale',  id: 2 },
    { title: 'Essensausgabe', date: '29.09.2015', location: 'Camp Zentrale',  id: 3 },
    { title: 'Filmeabend', date: '14.09.2015', location: 'Gemeinschaftsraum',  id: 4 },
    { title: 'Spieleabend', date: '30.08.2015', location: 'Gemeinschaftsraum',  id: 5 },
    { title: 'Stadt Gießen kennen lernen', date: '10.07.2015', location: 'Haupteingang Camp',  id: 6 }
  ];
  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});
