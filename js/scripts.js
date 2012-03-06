//Global Variables
var scene1 = 548; //parachute landing 
var scene2 = 750; //conversation close ups
var hereY; //tracks where we are in the scroll

//audio
var a = new Audio();
var windy_sound = 'sounds/ParachutingWind.mp3';
var thump_sound = 'sounds/thump.mp3';

var soundPlayed = false;

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

function playSoundClip(){
  a.setAttribute('src', windy_sound);
  a.setAttribute('loop', 'loop');
  a.load();
  a.play();
}

$(document).ready(function() {
  console.log("ready!");
  playSoundClip();
  setContainer();
  $('#kitchen').css('zoom', '0.27076923076923076');
  $('#parachute').hide();
  $('#dialogue').hide();
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
      $('#parachute').hide();
      $('#dialogue').hide();
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
    console.log("--------------SCENE 2-----------------------");
    $('#mainimg').attr('src', 'images/parachute.png').fadeIn();
    $('#dialogue').fadeOut();
    
    
//    $('#kitchen').remove();
		
  }
  
  
  if ((hereY > scene1) && !soundPlayed){
    a.pause();
    a.load(thump_sound);
    a.setAttribute('src', thump_sound);
    a.setAttribute('loop', 'none');  
    a.play();
    soundPlayed = true;
  }
  
  if (hereY > scene2 && hereY < scene2 +100){
    a.pause();
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
