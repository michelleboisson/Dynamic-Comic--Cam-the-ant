//Global Variables
var scene1 = 548; //parachute landing 
var scene2 = 750; //conversation close ups
var hereY; //tracks where we are in the scroll

//images
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
  if(hereY > 10){
    $('#kitchen').css('-webkit-animation-name', 'none');
  }else{
    $('#kitchen').css('-webkit-animation-name', 'sway');
  }
  
  if (hereY < scene1){
      //reset incase user scrolls up
      $('#kitchen').fadeIn();
      $('#antlegs').fadeIn();
      $('#parachute').fadeOut();
      $('#title').text("Scene 1");
      
			
      //change zoom amount
      $('#kitchen').css('zoom', hereY/650 + 0.27076923076923076);
      //change zoom location
      $('#kitchen').css('margin-left', -hereY*1.5-200);
      $('#kitchen').css('margin-top', -hereY*3-340);
  }

  if (hereY > scene1 ){
      $('#kitchen').fadeOut();
      $('#kitchen').addClass('white-transition');
      $('#title').text("Scene 2");
      $("#antlegs").fadeOut();
  }
  
  if (hereY > scene1+10 && hereY < scene2){
    $('#mainimg').attr('src', 'images/parachute.png').fadeIn();
    $('#dialogue').fadeOut();
//    $('#kitchen').remove();
		
  }
  
  if (hereY > scene2 && hereY < scene2 +100){
    $('#mainimg').attr('src',dadcloseup_img);
    $('#mainimg').fadeIn();
    $('#dialogue').fadeIn();
    $('#dialogue').addClass('dadBubbeleScene2');
    $('#dialogue p').text(dad1_speak);
  }
  
  if (hereY > scene2+100){
    $('#mainimg').attr('src',camcloseup_img);
    $('#dialogue').removeClass('dadBubbeleScene2').addClass('camBubbeleScene2');
    $('#dialogue p').text(cam1_speak);
  }
  
});//end on window scroll
