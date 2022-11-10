(function(){
'use strict'
angular.module('myFirstApp',[])
.controller('LunchCheckController',LunchCheckController);


function LunchCheckController($scope){
    $scope.items = ""
    $scope.message = function(){
        let arraycheck = $scope.items.split(',')
        arraycheck = arraycheck.filter(function(entry) { return entry.trim() != ''; });
        let numbers=arraycheck.length
        if(numbers==0){
            $scope.any="Please enter data first"
        }
        if(numbers>0 && numbers<=3){
            $scope.any="Enjoy!"
        }
        if(numbers>3){
            $scope.any="Too much"
        }

    }

}
    
})
();