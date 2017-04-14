
var app = angular.module('basicConsumerApp', ['angularUtils.directives.dirPagination']);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller('usersCtrl', function($scope, $http) {

    $scope.getAll = function(){

        $http.get("https://s3-sa-east-1.amazonaws.com/pontotel-docs/data.json")
        .then(function(response){
            console.log(response.data);
            $scope.users = response.data.data;
            Materialize.toast('Users loaded successfully!', 4000);
        }, function(response) {
            Materialize.toast('Something went wrong! :X', 4000);
        });
    };

});
