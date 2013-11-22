$.fn.collide = function($selector, $callback){
    exists = 'collide' in $;
    if(!exists) $.collide = [];
    $.collide.push({
        s1 : $(this),
        s2 : $($selector),
        callback : $callback
    });
    if(!$.collideStarted){
        $.collideStarted = true;
        setInterval(function(){
            $.each($.collide, function(id, data){
                data.s1.each(function(){
                    $s1 = $(this);
                    data.s2.each(function(){
                        $s2 = $(this);
                        position1 = $s1.position();
                        position2 = $s2.position();
                        size1 = {width : $s1.width(), height : $s1.height()};
                        size2 = {width : $s2.width(), height : $s2.height()};
                        if (((position1.left + size1.width) > position2.left) &&
                        ((position1.top + size1.height) > position2.top) &&
                        ((position2.left + size2.width) > position1.left) &&
                        ((position2.top + size2.height) > position1.top))
                        {
                            data.callback($s1, $s2);
                        }
                    })
                })
            })
        }, 50);
    }
}
$(document).ready(function(){
    $('#wrapper').css('height', $(document).height()+'px').css('width', $(document).width()+'px');
    height = $('#wrapper').height();
    width = $('#wrapper').width();
    $('.beanman').each(function(){
        do {
            nWidth = Math.floor((Math.random()*(width)));
            nHeight = Math.floor((Math.random()*(height)));        
        } while((nHeight < 100 && nWidth < 60) && nWidth > (width - 80) && nHeight > (height - 100));
            $(this).css('left', nWidth+'px').css('top', nHeight+'px');
    });
});
function poengSjekk(antPoeng) {
    easterHTML = '<video width="640" height="640" controls="" poster="media/aeropress.jpg">'+
    '<source src="media/aeropress.mp4" type="video/mp4">'+
    'Video av hvordan man tilbereder en kopp kaffe til Aeropress<iframe width="640" height="640" src="//www.youtube.com/embed/KbJjbA-sbqQ" frameborder="0" allowfullscreen></iframe></video>';
    if(antPoeng >= 20) {

        $('#wrapper').html(easterHTML);

    }
}
$(function(){
counter = 0;
    $("#mrbean1").collide("#kaffekopp", function($left, $right){
        $('#mrbean1').css('display', 'none');
        counter++;
        $('#poeng').html("Poeng "+counter);
        poengSjekk(counter)
    });
    $("#mrbean2").collide("#kaffekopp", function($left, $right){
         $('#mrbean2').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
        poengSjekk(counter)
    });
    $("#mrbean3").collide("#kaffekopp", function($left, $right){
         $('#mrbean3').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean4").collide("#kaffekopp", function($left, $right){
         $('#mrbean4').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean5").collide("#kaffekopp", function($left, $right){
         $('#mrbean5').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean6").collide("#kaffekopp", function($left, $right){
         $('#mrbean6').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean7").collide("#kaffekopp", function($left, $right){
         $('#mrbean7').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean8").collide("#kaffekopp", function($left, $right){
         $('#mrbean8').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean9").collide("#kaffekopp", function($left, $right){
         $('#mrbean9').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean10").collide("#kaffekopp", function($left, $right){
         $('#mrbean10').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean11").collide("#kaffekopp", function($left, $right){
         $('#mrbean11').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean12").collide("#kaffekopp", function($left, $right){
         $('#mrbean12').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean13").collide("#kaffekopp", function($left, $right){
         $('#mrbean13').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean14").collide("#kaffekopp", function($left, $right){
         $('#mrbean14').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean15").collide("#kaffekopp", function($left, $right){
         $('#mrbean15').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean16").collide("#kaffekopp", function($left, $right){
         $('#mrbean16').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean17").collide("#kaffekopp", function($left, $right){
         $('#mrbean17').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean18").collide("#kaffekopp", function($left, $right){
         $('#mrbean18').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean19").collide("#kaffekopp", function($left, $right){
         $('#mrbean19').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
    $("#mrbean20").collide("#kaffekopp", function($left, $right){
         $('#mrbean20').css('display', 'none');
         counter++;
         $('#poeng').html("Poeng "+counter);
         poengSjekk(counter);
    });
})

$(document).keydown(function(e) {
var $div = $('#kaffekopp');
var poeng = 0;
var maxX = 10;
var maxAcc = 1;
var speed = 10;
    switch (e.which) {
    case 37:
        $div.css('left', $div.offset().left - (speed));
        break;
    case 38:
        $div.css('top', $div.offset().top - 10);
        break;
    case 39:
    	speed = speed + maxAcc;    
        $div.css('left', $div.offset().left + (speed));

        break;
    case 40:
        $div.css('top', $div.offset().top + 10);
        break;
    case 32:
		$div.animate(function(){},{'top': $div.offset().top - 40, 'left': $div.offset().left+(speed)}, 500,function(){$div.animate({'top': $div.offset().top + 40, 'left': $div.offset().left+(speed)});})
        break;        
    }
});

/* Bevegelse */
$(document).keyup(function(e) {
   var $div = $('#kaffekopp');
var poeng = 0;
var speed = 10; 
    switch (e.which) {
    case 37:
        speed = 0;
        $div.css('left', $div.offset().left + (speed));
        speed = 0;
        break;
    case 38:
        $div.css('top', $div.offset().top - 10);
        speed = 0;
        break;
    case 39:
    	speed = 0;    
        $div.css('left', $div.offset().left - (speed));
        speed = 0;
        break;
    case 40:
        $div.css('top', $div.offset().top + 10);
        speed = 0;
        break;
    case 32:
		$div.animate({'top': -40, 'left': $div.offset().left+(speed)}, 500,function(){$div.animate({'top': +40, 'left': $div.offset().left+(speed)});})
        speed = 0;
        break;        
    }
});	

    