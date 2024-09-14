function form(){
    var name1=document.getElementById("fname").value;
    var name2=document.getElementById("lname").value;
    var mob=document.getElementById("mo").value;
    var email=document.getElementById("email").value;
    var em= /^[A-Za-z._\-0-9]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
    var at_position = email.indexOf("@");
    var dot_position = email.lastIndexOf(".");

    var mobile_no_format=/^\d{10}$/;
if (name1=="" || name2=="")
{
    alert("FIRST & LAST NAME ARE REQUIRED");
    return false;
}
if (mob=="")
{
    alert("PLEASE ! ENTER MOBILE NUMBER ");
    return false;
}
if (isNaN(mob))
{
    alert("MOBILE NUMBER MUST BE NUMBER");
    return false;
}
if (!mob.match(mobile_no_format))
{
    alert("MOBILE NUMBER MUST BE 10 DIGITS");
    return false;
}
if (email=="")
{
    alert("PLEASE ! ENTER E-MAIL IS ALSO REQUIRED ");
    return false;
}
if((at_position<1))
{
    alert("MISSING @ SYMBOL IN E-MAIL");
    return false;
}
if(((dot_position-at_position)<2))
{
    alert("MISSING   ( . )   IN E-MAIL");
    return false;
}
if (!email.match(em))
{
    alert("ENTER VALID EMAIL ADDRESS");
    return false;
}
else{
    alert("! I GOT YOUR DATA. I WILL CONTACT YOU SOON");
}
}


// if((at_position<1)||((dot_position-at_position)<2))
// {
//     alert("PLEASE ENTER CORRECT EMAIL ID");
//     return false;
// }


function myFunction() {
    var x = document.getElementById("fname");
    var y = document.getElementById("lname");
    var z = document.getElementById("que");
    var j = document.getElementById("email");
    x.value = x.value.toUpperCase();
    y.value = y.value.toUpperCase();
    z.value = z.value.toUpperCase();
    j.value = j.value.toUpperCase();
}
   
// function mouseDown() {
//     document.getElementsByClassName("mouse-contain").style.color = "red";
//    }
//    function mouseUp() {
//     document.getElementsByClassName("mouse-contain").style.color = "green";
//    }
   