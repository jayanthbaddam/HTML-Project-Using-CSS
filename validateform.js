
$(document).ready(function() {
	$(":text").after("<span class='req'>*</span>");
	
	
$("#submitform").click(function() {

var checkdate=$("#gendate").val();
var nights=$("#gennights").val();
var fname = $("#fname").val();
    var lname = $("#lname").val();
var addr =$("#contactemail").val();
var num=$("#contactphone").val();
    var terms=$("#terms").is(':checked');


    if(!terms)
    {

        $("#terms").next().text("Please accept terms");
    }

 var goodDate = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    if (checkdate.match(goodDate))
    {
         $("#gendate").next().text(""); 
    } 
    else {
        $("#gendate").next().text("Enter date in dd/mm/yyyy format"); 
    }

 
 if(checkdate=="")
 {
 	
 $("#gendate").next().text("This Field is required"); 	
 }
 if(nights=="")
 {
 	
 	$("#gennights").next().text("This Field is required"); 
 }
 else
 {
 	
 	$("#gennights").next().text(""); 
 }
 var letters =/^[A-Za-z]+$/;
    if(fname.match(letters))
   $("#fname").next().text("");
   else
   $("#fname").next().text("Please enter a string");

if (lname=="") {
	
$("#lname").next().text("This Field is required");
}

    if(lname.match(letters))
        $("#lname").next().text("");
    else
        $("#lname").next().text("Please enter a string");
    if (lname=="") {

        $("#lname").next().text("This Field is required");
    }

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(addr.match(mailformat))  
{  
  $("#contactemail").next().text(""); 
}
else
{
	
$("#contactemail").next().text("Must be a valid email address"); 	
}

if(addr=="")
{
	
$("#contactemail").next().text("This Field is required"); 	
}
var phoneValid= num.replace(/[^0-9]/g, '');
     if(phoneValid && phoneValid.length == 10) { 
        $("#contactphone").next().text(""); 
   } else {
       $("#contactphone").next().text("Invalid format, Enter 10 digits"); 
   }

    
   if(num=="")
   {
   	
   	$("#contactphone").next().text("This Field is required"); 
   }
});
$("#fname").focus();
});