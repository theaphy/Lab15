var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.groceries = [];
	
	$scope.addItem = function(newItem, newPrice) {
	    $scope.groceries.push({name: newItem, price: newPrice});
	  	
	  	var total = 0;
		$scope.groceries.forEach(function(cost){
	  		total += cost.price;
	  	});
  		
  		$scope.total = total;
  	};

});

