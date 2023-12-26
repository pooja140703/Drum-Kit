
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting button pressed

for(var i=0;i< numberOfDrumButtons ;i++){
    //above is for inding total number of button we have
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        // alert("I got clicked");
        var buttonInnerHtml = this.innerHTML;
        // this.style.color = "white";

    makeSound(buttonInnerHtml);
    
    buttonAnimation(buttonInnerHtml);
     
    });



    //addEventLitener method work only on one element
    //what to do when click is detected
}

//deteccting keyboard press

document.addEventListener("keypress",function(event){
    // console.log(event);
    
    // alternative way
    // if(event.key==='w'){
    //     var tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play(); 
    // }else if(event.key==='a'){
    //     var tom2 = new Audio("sounds/tom-2.mp3");
    //     tom2.play();
    // }else if(event.key==='s'){
    //     var tom3 = new Audio("sounds/tom-3.mp3");
    //     tom3.play();
    // }else if(event.key==='d'){
    //     var tom4 = new Audio("sounds/tom-4.mp3");
    //     tom4.play();
    // }else if(event.key==='j'){
    //     var crash = new Audio("sounds/crash.mp3");
    //     crash.play();
    // }else if(event.key==='k'){
    //     var kick = new Audio("sounds/kick-bass.mp3");
    //     kick.play();
    // }else if(event.key==='l'){
    //     var snare = new Audio("sounds/snare.mp3");
    //     snare.play();
    // }

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        default:
            alert("Please enter valid input..!!");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");  
    
   setTimeout(function(){
    activeButton.classList.remove("pressed"); 
   },100);
      
}





