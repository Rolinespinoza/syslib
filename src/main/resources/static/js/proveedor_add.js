$(document).ready(function(){
	$("#tipo").focus();
});

function guardar_p(){
	var tipo = $("#tipo").val();
	var razonso= $("#razonso").val();
	var ruc = $("#ruc").val();
	var direc = $("#direc").val();
	var telefono = $("#telefono").val();
	var est = $("#est").val();
	
		$.post('/guardar_proveedor_nuevo',{
			tipo:tipo,
			razonso:razonso,
			ruc:ruc,
			direc:direc,
			telefono:telefono,
			est:est
			},function(data){
				alert(data);
				$("#tipo").val("");
				$("#razonso").val("");
				$("#ruc").val("");
				$("#direc").val("");
				$("#telefono").val("");
				$("#est").val("");
				

				$("#tipo").focus();
				
		});
	
}