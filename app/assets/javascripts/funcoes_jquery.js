$(function(){
	$('.actions input').attr('class','btn btn-success');
    $(document).mousemove(function(event) {
        TweenLite.to($("body"), 
        .5, {
            css: {
                backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px",
            	"background-position": parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / 12) + "px, " + parseInt(event.pageX / 15) + "px " + parseInt(event.pageY / 15) + "px, " + parseInt(event.pageX / 30) + "px " + parseInt(event.pageY / 30) + "px"
            }
        })
    })
});

$( window ).scroll(function() {
  $( "#desce" ).fadeIn("slow");
});

function anexarLinha(obj){
	var tr = "<tr><td>"+obj.nome+"</td>";
		tr += "<td>"+obj.email+"</td>";
		tr += "<td>";
		if(obj.sexo == "f"){
			tr += "feminino";
		}
		if(obj.sexo == "m"){
			tr += "masculino";
		}
		tr += "</td>";
		tr += "<td>"+obj.nascimento.split('-').reverse().join('/')+"</td>";
		tr += "<td class='text-center'>";
		tr += "<div class='dropdown'>";
		tr += "<button class='btn btn-default dropdown-toggle' type='button' id='menu1' data-toggle='dropdown'>";
		tr += "Selecione";
		tr += "<span class='caret'></span></button>";
		tr += "<ul class='dropdown-menu' role='menu' aria-labelledby='menu1'>";
		tr += "<li role='presentation'>";
		tr += "<a role='menuitem' tabindex='-1' href='/usuarios/"+obj.id+"'>Apresentar</a>";
		tr += "</li>";
		tr += "<li role='presentation'>";
		tr += "<a role='menuitem' tabindex='-1' href='/usuarios/"+obj.id+"/edit'>Editar</a>";
		tr += "</li>";
		tr += "<li role='presentation'>";
		tr += "<a data-confirm='Deseja realmente deletar?' role='menuitem' tabindex='-1' rel='nofollow' data-method='delete' href='/usuarios/"+obj.id+"'>Deletar</a>";
		tr += "</li>";
		tr += "</ul>";
		tr += "</div>";
		tr += "</td></tr>";
		$("#mainTable").append(tr).fadeIn("slow");
		$("html, body").animate({ scrollTop: document.body.scrollHeight }, 800);
		//$(document).scrollTop(document.body.scrollHeight)
}