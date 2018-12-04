/// <reference path="angular.min.js"/>



///////////////////// First way to register the controller with module

// var myApp = angular.module("myModule",[]);  //module

// var myController = function ($scope){         //controller
// 	$scope.message = "AngularJS Tutorial";
// }

// myApp.controller("myController", myController);  //registration





///////////////// Second way to register the controller with module

var myApp = angular.module("myModule",[]);   //module


myApp.controller("myController",function($scope){   //controlller create and registration
	$scope.message = "AngularJS Tutorial";
});



/////////  for controllers.html page - Controller to create a complex object

var myApp = angular
	.module("myModule1",[])
	.controller("myController1", function($scope){
		var employee = {
			firstname : "Anand",
			lastname : "Soni",
			gender : "Male"
		};
			$scope.employee = employee;	
		});


/////////  for ng-src attribute 


var myApp = angular
	.module("srcmodule",[])
	.controller("srccontroller", function($scope) {
		var country = {
			name : "India",
			capital : "New Delhi",
			flag : "images/indian-flag.png"
		};
		$scope.country = country;
	});


//////////   two way data bing expression


var myApp = angular
	.module("twowaydata",[])
	.controller("twowaydatabinding", function ($scope) {
		var employee = {
			firstname : "Anand",
			lastname : "Soni",
			gender : "Male"

		};
		$scope.employee = employee;
});



/////////   use of ng-repeat and nesting ng-repeat


var app = angular
	.module("repeatmodule",[])
	.controller("repeatcontroller", function ($scope){
		var employees = [
			{ firstname:"Anand", lastname:"Soni", gender:"Male", salary:"10000"},
			{ firstname:"Pallavi", lastname:"Mishra", gender:"Female", salary:"12000"},
			{ firstname:"Dheeraj", lastname:"Verma", gender:"Male", salary:"14000"},
			{ firstname:"Ruchi", lastname:"Chaurasiya", gender:"Female", salary:"16000"},
			{ firstname:"Vikas", lastname:"Saini", gender:"Male", salary:"18000"}
		];


		//////    nesting ng-repear

		var countries = [
		{
			name: "India",
			cities: [
				{ name: "Delhi"},
				{ name: "Mumbai"},
				{ name: "Kolkata"},
			]
		},
		{
			name: "UK",
			cities: [
				{ name: "London"},
				{ name: "Manchester"},
				{ name: "Birmingham"},
			]
		},
		{
			name: "USA",
			cities: [
				{ name: "New York"},
				{ name: "Chicago"},
				{ name: "Los Angeles"},
			]
		},
	];

		$scope.employees = employees;
		$scope.countries = countries;
	});


