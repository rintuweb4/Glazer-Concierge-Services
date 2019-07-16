

//navbar-toggle x icon....

$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
		
		
		

/*slider*/

$('.carousel').carousel({
	interval :7000,
	pause: 'none'
	
	})
	
	



//button up

	$(document).ready(function(){
 var btnUp = $('<div/>', {'class':'btntoTop'});
    btnUp.appendTo('body');
    $(document)
        .on('click', '.btntoTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

    $(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });
        });







	 //tooltip
   
 $(function(){
	 
	 $('[data-toggle="tooltip"]').tooltip();
	 
	 })
	 




//accordion

  $('.accordion-toggle').on('click', function(){
    $(this).closest('.panel-group').children().each(function(){
    $(this).find('>.panel-heading').removeClass('active');
     });

    $(this).closest('.panel-heading').toggleClass('active');
  });


$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
});



 //wow


(function ($) {
  $(document).ready(function(){
	new WOW().init();
});
}(jQuery));

