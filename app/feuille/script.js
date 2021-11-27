var TH = 0;
moment().format("hh:mm"); 

function listboxresult() {
    "use strict";
    
    var convention = document.getElementById("convention").options[document.getElementById("convention").selectedIndex].value;
    
    var date = document.getElementById("date").value;
    
    console.log(date);
    
    var startTime = moment([document.getElementById("start-time").value], "HH:mm");
    
    var endTime = moment([document.getElementById("end-time").value], "HH:mm");
    
    var repasTime = moment([document.getElementById("repas-time").value], "HH:mm");
    
    var totalTime = ((endTime.diff(startTime, 'minutes'))-60)/60;
    
    var Continue = repasTime.diff(startTime, 'minutes');
    
    if (Continue > 360){
        Continue = (Continue - 360)/60;
        console.log("continue = ", Continue);
    }
    else {
        Continue = 0;
    };
    
    if (totalTime > 8){
        if (totalTime-8 <= 3){
            var maj25 = (totalTime-8);
            console.log("maj 25", maj25);
        }
        else {
            var maj25 = 3;
            var maj50 = (totalTime-11);
            console.log("maj 25", maj25);
            console.log("maj 50", maj50);
        };
    };
    
    
    console.log("heures totales", totalTime);
    
    document.getElementById("th").innerHTML = totalTime;
    
    document.getElementById("25").innerHTML = maj25;
    
    document.getElementById("50").innerHTML = maj50;
    
    document.getElementById("continue").innerHTML = Continue;
    
    

   
    }
