var app = angular.module("randomQuoteMachine", []);

app.controller("randomQuoteController", ['$scope', function($scope){

    $scope.randomQuoteGenerator = new RandomQuoteGenerator();

    $scope.randomQuoteGenerator.generateRandomQuote($scope);

}]);
