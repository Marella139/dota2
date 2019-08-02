function anketa(){
	var datum=new Date();
	datum.setMonth(datum.getMonth()+1);
	var prvi=document.getElementById("1");
	var drugi=document.getElementById("2");
	var treci=document.getElementById("3");
	var cetvrti=document.getElementById("4");
	var peti=document.getElementById("5");
	if(prvi.checked) {document.getElementById("greske").innerHTML="Thank you. Your rate is: "+prvi.value;document.cookie="choise="+prvi.value+";expires="+datum.toGMTString();}
	else if(drugi.checked) {	document.getElementById("greske").innerHTML="Thank you. Your rate is: "+drugi.value; document.cookie="choise="+drugi.value+";expires="+datum.toGMTString();}
	else if(treci.checked) {	document.getElementById("greske").innerHTML="Thank you. Your rate is: "+treci.value;document.cookie="choise="+treci.value+";expires="+datum.toGMTString();}
	else if(cetvrti.checked) {	document.getElementById("greske").innerHTML="Thank you. Your rate is: "+cetvrti.value;document.cookie="choise="+cetvrti.value+";expires="+datum.toGMTString();}
	else if(peti.checked){	document.getElementById("greske").innerHTML="Thank you. Your rate is: "+peti.value;document.cookie="choise="+peti.value+";expires="+datum.toGMTString();}
	else {	document.getElementById("greske").innerHTML="Please rate our site."}
}


function sendEmail(){
	
	var ime=document.getElementById('name');
	var prezime=document.getElementById('lastName');
	var email=document.getElementById('email');
	var pol=document.getElementById('gender');
	
	//// Regularni izrazi
	
	var reIme=/^[A-Z]{1}[a-z]{1,19}$/;
	var rePrezime=/^[A-Z]{1}[a-z]{2,29}$/;
	var reEmail=/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})+$/;
	
	
	
	var podaci=new Array();
    var greske=new Array();
	
if(ime.value.match(reIme))
{
	podaci.push(ime.value);
}
else
{
	greske.push("Enter your name!");
}

if(prezime.value.match(rePrezime))
{
	podaci.push( prezime.value);
}
else
{
	greske.push("Enter your last name!");
}

if(email.value.match(reEmail))
{
	podaci.push(email.value);
}
else
{
	greske.push("Enter your e-mail!");
}




if(pol.value!="0")
{
	podaci.push( pol.value);
}
else
{
	greske.push("Choose gender!");
}

if(greske.length>0)
{
	var listaGresaka="";
	for(var i=0;i<greske.length;i++)
	{
		listaGresaka+=greske[i]+"\n";
	}
	alert(listaGresaka);
	

}
else
{
	alert("We've recieved your message. Thank you.");
}

}