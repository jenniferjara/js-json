var plantilla = "<div>"+ 
	"<p><strong>Nombre: </strong>__nombre__</p>"+
	"<p><strong>Apellido: </strong>__apellido__</p>"+
	"<p><strong>Email: </strong>__mail__</p>"+
	"<p><strong>Fecha de nacimiento: </strong>__fechaNac__</p>"+
	"</div>";

var iniciar = function(){
	$.ajax({
		url: "http://localhost:2000/demo.json",
		type: "GET",
		success: function(response){
			$("#datos").html(plantilla
				.replace("__nombre__", response.nombre)
				.replace("__apellido__", response.apellido)
				.replace("__mail__", response.mail)
				.replace("__fechaNac__", response.fechaNac)
				.replace("__hobbies__", response.hobbies)
				);
			var hobbies="<ul>";
			for(var i = 0, l = response.hobbies.length; i<l ;i++){
				hobbies += "<li>"+response.hobbies[i]+"</li>";
			}
			hobbies+= "</ul>"
			$("#hobbies").html(hobbies);
		},
		error: function(error){
			console.log(error);
		}
	});
}
$(document).ready(iniciar);