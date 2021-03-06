angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('menu', {
      cache: false,
      url: '/auth',
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })

    .state('menu.allDreams', {
      url: '/all-dreams',
      views: {
        'auth': {
          templateUrl: 'templates/all-dreams.html',
          controller: 'allDreamsCtrl'
        }
      }
    })

    .state('menu.editDream', {
      url: '/edit-dream/{id}',
      views: {
        'auth': {
          templateUrl: 'templates/edit-dream.html',
          controller: 'editDreamsCtrl'
        }
      }
    })

    .state('menu.showDream', {
      url: '/show/{id}',
      views: {
        'auth': {
          templateUrl: 'templates/show-dream.html',
          controller: 'showDreamCtrl'
        }
      }
    })

    .state('menu.newForm', {
      url: '/new',
      views: {
        'auth': {
          templateUrl: 'templates/new-form.html',
          controller: 'newFormCtrl'
        }
      }
    })

    .state('menu.user', {
      url: '/user',
      views: {
        'auth': {
          templateUrl: 'templates/user.html',
          controller: 'userCtrl'
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

    .state('menu.calendar', {
      url: '/calendar',
      views: {
        'auth': {
          templateUrl: 'templates/calendar.html',
          controller: 'calendarCtrl'
        }
      }
    })

    .state('menu.symbolism', {
      url: '/symbolism',
      views: {
        'auth': {
          templateUrl: 'templates/symbolism.html',
          controller: 'symbolismCtrl'
        }
      }
    })

    .state('menu.showSymbol', {
      url: '/symbol/show/{id}',
      views: {
        'auth': {
          templateUrl: 'templates/show-symbol.html',
          controller: 'showSymbolCtrl'
        }
      }
    })

  $urlRouterProvider.otherwise('/login')
})
