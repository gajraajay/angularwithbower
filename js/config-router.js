app.run(['$rootScope','$state',function($rootScope,$state) {
  // console.log($state);
  console.log($state);
}]).config(['$stateProvider','$urlRouterProvider', '$httpProvider' ,'JQ_CONFIG',function($stateProvider,$urlRouterProvider,$httpProvider,JQ_CONFIG){

  $urlRouterProvider.otherwise('/app');

  $stateProvider.state('app', {
    url: '/app',
    template: 'app.html'
  });


  function load(res,callBack){

  }


}]);
