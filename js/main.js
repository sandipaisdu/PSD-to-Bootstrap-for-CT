$(document).ready(function(){
	$('#nav').slicknav();
	$('.from_clients_all').owlCarousel({
		items:1,
		navigation:true,
		autoPlay:true,
		singleItem:true,
		theme:"chickny-angle-face-to-face",
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
});





$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".single_creative_img_hvr").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".single_creative_img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".single_creative_img_hvr").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(single_creative_img).hasClass("hover")) {
                $(this).closest(single_creative_img).removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".single_creative_img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});








