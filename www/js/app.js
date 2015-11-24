angular.module('newcomer', ['ionic','ionic.service.core', 'newcomer.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html'
      }
    }
  })

  .state('app.guide', {
      url: '/guide',
      views: {
        'menuContent': {
          templateUrl: 'templates/guide.html'
        }
      }
    })

    .state('app.words', {
      url: '/words',
      views: {
        'menuContent': {
          templateUrl: 'templates/words.html'
        }
      }
    })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        }
      }
    })

      .state('app.auth', {
        url: '/auth',
        views: {
          'menuContent': {
            templateUrl: 'templates/auth.html'
          }
        }
      })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});
