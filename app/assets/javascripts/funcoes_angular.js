var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope) {
	$scope.AppendText = function() {
		var myEl = angular.element( document.querySelector( '#divID' ) );
		myEl.append('Hi<br/>');     
    }
});

myApp.controller('customersCtrl', function($scope, $http) {
	var retorno = "";
	$http.get("http://localhost:3000/usuarios/new")
	.success(function(response) {
		retorno = response;
		$scope.show = function() {
			var width = $(document).width();
			var height = $(window).height();
			$('#sombra').css({
				"width":(width )+"px",
				"height":(height)+"px",
				"top":"-23px",
				"left":"-23px"
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
			window.location.href = "http://localhost:3000/usuarios";
		}
	});
	
});
