angular.module('newcomer.controllers', [])

//.controller('AppCtrl', function() { });

 .controller('EventCtrl', function($scope) {
   $scope.events = [
     { title: 'Ausflug zum Schiffenberg', date: '23.11.2015', location: 'Haupteingang Camp', id: 1 },
     { title: 'Spendenverteilung', date: '06.10.2015', location: 'Camp Zentrale',  id: 2 },
     { title: 'Essensausgabe', date: '29.09.2015', location: 'Camp Zentrale',  id: 3 },
     { title: 'Filmeabend', date: '14.09.2015', location: 'Gemeinschaftsraum',  id: 4 },
     { title: 'Spieleabend', date: '30.08.2015', location: 'Gemeinschaftsraum',  id: 5 },
     { title: 'Stadt Gießen kennen lernen', date: '10.07.2015', location: 'Haupteingang Camp',  id: 6 }
   ];
 })

 .controller ('MapCtrl', function($scope){
   google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(50.592205, 8.732367);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
 })
 });

