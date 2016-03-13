'use strict'
app.controller('GuideCtrl', function ($scope, ionicMaterialInk) {
  /*var request =  new XMLHttpRequest();
  request.open("GET", "../templates/guides.json", false);
  request.send(null);
  $scope.guides = JSON.parse(request.responseText);*/

  $scope.guides = [
    {
      id: 0,
      title: 'Öffentliches Leben',
      cards: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.',
      cards: 'Wenn man etwas angeboten bekommt, ist „Nein, danke“ eine höfliche Ablehnung. „Ja, bitte“ oder „Gerne“ bedeuten, dass man das Angebot annehmen möchte.'
    },
    {
      id: 1,
      title: 'Persönliche Freiheiten',
      cards: 'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',
      cards: 'Um Ruhe und Privatsphäre zu haben, halten Leute ihre Türen häufig geschlossen, zum Beispiel im Büro oder zu Hause. Es ist höflich zu klopfen, wenn man eintreten möchte. Meistens wird man nach dem Klopfen höflich hereingebeten.'
    },
    {
      id: 2,
      title: 'Gesellschaftliches Zusammenleben'
    },
    {
      id: 3,
      title: 'Gleichberechtigung'
    },
    {
      id: 4,
      title: 'Umweltfreundlichkeit'
    },
    {
      id: 5,
      title: 'Essen, Trinken & Rauchen'
    },
    {
      id: 6,
      title: 'Formalitäten'
    },
    {
      id: 7,
      title: 'Notfälle'
    }
  ];

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
})
