$(".navLink").hover(function(){
    $(this).css("background-color", "#f1c232");
    $(this).css("color", "#191919");
    $(this).css("font-size","24px" )
},
function(){
    $(this).css("background-color", "#191919", 'color', '#f1c232');
    $(this).css("color", "#f1c232");
    $(this).css("font-size", "16px")
});