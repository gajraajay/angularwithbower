app.run(['$rootScope','$state',function($rootScope,$state) {
  // console.log($state);
  console.log($state);
}]).config(['$stateProvider','$urlRouterProvider', '$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){

  $urlRouterProvider.otherwise('/app');

  $stateProvider.state('app', {
    url: '/app',
    template: 'app.html'
  });


}]);
