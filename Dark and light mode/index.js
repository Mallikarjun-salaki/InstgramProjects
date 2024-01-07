let but =document.getElementById("but")
let body =document.querySelector("body")

function change(){
        body.classList.toggle("dark")
        let bool = body.classList.contains("dark")
        if(bool){
            but.style.cssText = "background-color:white;color:black"
            but.innerText="Light Mode"
            
            
        }
        else{
            but.style.cssText = "background-color:black;color:white"
            but.innerText="Dark Mode"
        }
    
}