function printName(){
    var uname = document.getElementById("uname").value
    console.log(uname)
    if(uname === "" || uname === null){
        var inputfield =document.getElementById("uname")
        inputfield.style.border = "1px solid Gray"
        var errorMessage=document.getElementById("errorMessage")
        errorMessage.innerHTML="invalid_Input"
        errorMessage.style.color="red"
        
    }
    var pwd = document.getElementById("pwd").value
    if(pwd === "" || pwd === null){

        var inputfield1 =document.getElementById("pwd")
        inputfield1.style.border = "1px solid Gray"
        inputfield1.style.borderRadius ="1px"
        var errorMessage1=document.getElementById("errorMessage1")
        errorMessage1.innerHTML="Please Enter the password....!"
        errorMessage1.style.color="red"
       
    }
event.preventDefault()
}