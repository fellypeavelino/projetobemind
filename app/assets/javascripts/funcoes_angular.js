var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope) {

});

myApp.controller('customersCtrl', function($scope, $http) {
	var retorno = "";
	$http.get("/usuarios/new")
	.success(function(response) {
		retorno = response;
		$scope.show = function() {
			var width = $(window).width();
			var height = $(window).height();
			$('#sombra').css({
				"width":(width )+"px",
				"height":(height)+"px",
				"top":"-10px",
				"left":"-25px"
			});
			$('#sombra').fadeIn("slow");
			//console.log((width / 2) - 212);
			$('#novo').css({
				"right":((width / 2) - 212)+"px"
			}).html(retorno).fadeIn("slow");
			
			$("#close").show();
		};
		$scope.close = function(){
			$('#novo').fadeOut(function(){
				$('#sombra').fadeOut("slow");
			});
			
			$("#close").hide();
			window.location.href = "/usuarios";
		}
	});
	
});
