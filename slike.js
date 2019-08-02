var xmlDoc;
function napraviXMLHttpRequest(){
		if (window.XMLHttpRequest)
			{xmlhttp=new XMLHttpRequest();}
		else
			{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
			
		xmlhttp.open("GET","slike.xml",false);
		
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;

		dohvati_podatke(xmlDoc);
	}
	
	function dohvati_podatke(xmlDoc){
		var sve_slike=xmlDoc.getElementsByTagName("slika");
		text=" ";
			for (i=0;i<sve_slike.length;i++) { 
			var x1= sve_slike[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
			var text=text+ "<div class='pics'><a href='"+x1+"'  class='fancybox' rel='group' ><img src='"+x1+"' width='150' height='150' ></a></div>"; 
			}
	document.getElementById("pic").innerHTML=text;
	}
			