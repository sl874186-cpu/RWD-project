/*burger menu for phone size*/
$(document).ready(function () {
    $(".button").click(function(e){
        e.preventDefault();
        $("body").toggleClass("active");
    });
});