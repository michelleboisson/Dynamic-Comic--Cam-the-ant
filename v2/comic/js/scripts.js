//Global Variables
var panel0=0;
var panel1=1500;//parachute landing
var panel2=2400; // dad says
var panel3=2800; //
var panel4=3200;
var panel5=3600;
var panel6=4000;
var panel7=4400;
var panel8=4800;
var panel9=5200;
var panel10=5600;
var panel11=6000;
var panel12=6500;
var hereY; //tracks where we are in the scroll

//images
var parachute = 'images/parachute.png';
var dadcloseup_img = 'images/panel1.png';
var camcloseup_img = 'images/panel2.png';


//dialogue
var dad1_speak = "Quit causing a scene";
var cam1_speak = "I keep telling you i'm not scene, I'm emo ok!";


//returns the scroll location
function getScrollXY() {
  console.log("I'm triggered!");
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  //return [ scrOfX, scrOfY ];
  return scrOfY;
}


//set the container to be centered since it's position is fixed
function setContainer (){
  var windowWidth = $(window).width();
  var setLeftContainer = (windowWidth - $('#panel').width()) / 2;
  $('#panel').css('left', setLeftContainer);
}


$(document).ready(function() {
  console.log("ready!");
  setContainer();
  $('#kitchen').css('zoom', '0.27076923076923076');
});

$(window).resize(function() {
  setContainer();
});
	



//main scrolling functions happen here
$(window).scroll(function () {
	
  //when we start scrolling, remove the jumping scroll indicator
  $('#scrollimg').addClass('remove');

  hereY = getScrollXY();
  console.log(hereY);

  //and stop swaying the animation
  
  if(hereY>=200){
  $('#panel0').css("-webkit-animation-name", "none");
  }else{
  $('#panel0').css("-webkit-animation-name", "sway");
  }
  

  if (hereY >= panel0 && hereY < panel1){
  $('#panel0').css("visibility", "visible"); 
  
        $('#soundbyte')[0].play();
  $('#panel1').css("visibility", "hidden");
  $('#panel2').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  
  
  $('.startpanel').css("background-size", 100+hereY+"%"); 
  }
  if(hereY<panel2 && hereY>panel2-15){
  
  
        $('#soundbyte')[0].stop();

  }
  if (hereY > panel1 && hereY < panel2){
  $('#panel1').css("visibility", "visible");        
        $('#soundbyte')[1].play();
  $('#panel0').css("visibility", "hidden");
  $('#panel2').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
  
   if (hereY > panel2 && hereY < panel3){
  $('#panel2').css("visibility", "visible"); 
        $('#soundbyte')[1].stop();  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  
  }
  
  if (hereY > panel3 && hereY < panel4){
  $('#panel3').css("visibility", "visible"); 
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel2').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
   if (hereY > panel4 && hereY < panel5){
  $('#panel4').css("visibility", "visible");   
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel2').css("visibility", "hidden"); 
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
  
  if (hereY > panel5 && hereY < panel6){
  $('#panel5').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
   if (hereY > panel6 && hereY < panel7){
  $('#panel6').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
   if (hereY > panel7 && hereY < panel8){
  $('#panel7').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
   if (hereY > panel8 && hereY < panel9){
  $('#panel8').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
  
   if (hereY > panel9 && hereY < panel10){
  $('#panel9').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
  if (hereY > panel10 && hereY < panel11){
  $('#panel10').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel11').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
if (hereY > panel11 && hereY < panel12){
  $('#panel11').css("visibility", "visible"); 
  
  $('#panel0').css("visibility", "hidden");
  $('#panel1').css("visibility", "hidden");
  $('#panel3').css("visibility", "hidden");
  $('#panel4').css("visibility", "hidden"); 
  $('#panel2').css("visibility", "hidden");
  $('#panel5').css("visibility", "hidden");
  $('#panel6').css("visibility", "hidden");
  $('#panel7').css("visibility", "hidden");
  $('#panel8').css("visibility", "hidden");
  $('#panel10').css("visibility", "hidden");
  $('#panel9').css("visibility", "hidden");
  $('#panel12').css("visibility", "hidden");
  $('#end').css("visibility", "hidden"); 
  }
if(hereY>=6315){
  $('#end').css("visibility", "visible"); 

}

});//end on window scroll
