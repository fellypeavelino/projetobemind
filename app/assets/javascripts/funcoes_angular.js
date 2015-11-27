var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function($scope) {

});

myApp.controller('customersCtrl', function($scope, $http) {
	var retorno = "";
	$http.get("/usuarios/new")
	.success(function(response) {
		retorno = response;
		$scope.show = function() {
			$("body").css("overflow", "hidden");
			$("body").scrollTop(0);
			//$("html, body").animate({ scrollTop: 0 }, 600);
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
	
	var url = "/mais_usuarios/index?id=";
	$scope.execute = function(id){
		url = url+""+id;
		$http.get(url)
		.success(function(response) {
			retorno = response;
			var html = $.parseHTML(retorno);
			for (var prop in html) {
				if(prop == 89){
					var div = $.parseHTML(html[prop].innerHTML)
					for (var json in div) {
						if(json == 1){
							usuarios = JSON.parse(div[json].innerText.trim(''));
							for(var ususario in usuarios){
								//console.log(ususario);
								anexarLinha(usuarios[ususario]);
							}
						}
					}
				}
			}			
		});
	}
	
});

