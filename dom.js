let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("code=",event.code);
    if(event.code=="KeyU"){
        console.log("character moves up");
    }else if(event.code=="KeyD"){
        console.log("charcter moves Down");
    }else if(event.code=="KeyL"){
        console.log("charcter moves left");
    }else if(event.code=="KeyR"){
        console.log("charcter moves right");
    }
    
});
