var myApp = angular.module('myModule', [])
myApp.controller("myController", function ($scope) {
    $scope.message = "hi this hero ";

    $scope.todos = [{
        msg: "hello there",done:false
    },
    { msg: "no one is there",done:false }]
    $scope.todolength = $scope.todos.length;

    $scope.todoAdd = function(){
        console.log($scope.todomsg)
        $scope.todos.push({msg:$scope.todomsg,done:false})
        $scope.todolength = $scope.todos.length;
    }

})