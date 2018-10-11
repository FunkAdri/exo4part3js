button.addEventListener("Click", function() {
  if(button.value==confirmPassword.value){
    password.style.border="2px solid green";
    confirmPassword.style.border="2px solid green";
  }else{
    password.style.border="2px solid red";
    confirmPassword.style.border="2px solid red";
  }
})
