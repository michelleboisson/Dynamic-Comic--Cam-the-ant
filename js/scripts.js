//Global Variables
var scene1 = 548;
var hereY; //tracks where we are in the scroll


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
		
  if (hereY < scene1){
      $('#kitchen').fadeIn();
      $('#container').removeClass('blue-transition');
      $('#container').addClass('grey-transition');
      $('#title').text("Scene 1");
			
      //change zoom amount
      $('#kitchen').css('zoom', hereY/650 + 0.27076923076923076);
      //change zoom location
      $('#kitchen').css('margin-left', -hereY*1.5-200);
      $('#kitchen').css('margin-top', -hereY*3-340);
  }

  if (hereY > scene1){
      $('#kitchen').fadeOut();
      $('#kitchen').addClass('white-transition');
      $('#title').text("Scene 2");
      $("#antlegs").remove();
      
  }
		
});//end on window scroll
