var xmlDoc;
function pretragaXML(){ 
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}
	else{
		request = new ActionXObject("Microsoft.XMLHTTP");
	}
	request.open("GET","xmlsearch.xml", false);
	request.send();
	xmlDoc = request.responseXML;
	
	var tekst=$("#tbSearch").val().toUpperCase();
	if(tekst.length>=1){
		
		var straniceNiz= xmlDoc.getElementsByTagName("stranica");
		var link="";
		var naslov="";
		
	for(var i=0; i<straniceNiz.length; i++){
		var url= straniceNiz[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
		var naziv= straniceNiz[i].getElementsByTagName("naziv")[0].childNodes[0].nodeValue;
		
			if(naziv.toUpperCase().indexOf(tekst)>=0){ 
				 link=url;
				 naslov=naziv;
				 document.getElementById("result").innerHTML="<span>Result:</span><a href='"+link+"'>"+naslov+"</a>"
			}
		
	}
	
		
		
	}
	
	 
}

$(document).ready(function()
{
	$('#charlist li').hover(
	function()
		{
			$(this).animate({marginLeft:'+=20'}, 500);
		},
		function()
		{
			$(this).animate({marginLeft:'-=20'}, 500);
		});
			
			
			
			
			
			
});
