//dropdown menu
var timeout	= 0;
var closetimer	= 0;
var ddmenuitem	= 0;


function mopen(id)
{	
	
	mcancelclosetime();

	
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';
}

function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}


function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}


document.onclick = mclose; 


//slajder
 $(document).ready(function() {

    
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
}
function pauseSlider() {
        clearInterval(interval);
}

$slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);
startSlider();


});