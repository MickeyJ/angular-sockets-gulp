
function AppConfig($stateProvider, $urlRouterProvider, $locationProvider){
  
  $stateProvider
    .state('app', {
      url: '/',
      template: '@@import _app.html',
      controllerAs: '$ctrl',
      controller: 'AppCtrl'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  AppConfig
]