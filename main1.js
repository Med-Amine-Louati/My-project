
  
//   function validate(){



function check() {

      window.location.assign("index.html")
   }

function validate (){
  var name = document.getElementById("name").value;
  var fir_name = document.getElementById("namee").value;
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("password").value;


  if(mail.indexOf("@") == -1 || mail.length < 6 || mail.indexOf(".") == -1 ){
    alert ("Please Enter valid mail");
    
    return false;
  }
 if(pass.length < 5){
    alert ("Please Enter valid pass");
    
    return false;
  }

 
 

  alert("Form Submitted Successfully!");
  window.location.assign("index2.html")
  return true;
}
$("btn").click(function(){
    if(clicked){
        $(this).css('background-color', 'red');
        clicked  = false;
    } else {
        $(this).css('background-color', 'blue');
        clicked  = true;
    }   
});