function ShowTime() {
    var date= new Date();
    var hours= date.getHours();
    var min = date.getMinutes();
    var sec= date.getSeconds();
    var session = "AM";
    if(h==0){
        h=12;
    }
    if(h>12){  
        h=h-12
        session = "PM";
        
    }
    h = (h<10)?"0"+hours:hours;
    min = (min<10)?"0"+min:min;
    sec = (s<10)?"0"+sec:sec; 

    document.getElementById("DigitalClock").innerHTML = hours + ":" + min + ":" + sec + ":" + session;
    setTimeout("ShowTime,1000")
    }
    ShowTime()
