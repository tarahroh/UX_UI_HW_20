//test
console.log("Your Index.js is loaded correctly")

//loader
$(window).on("load", function () {
    $(".wholepage").hide();
    function fade() {
        $(".loader").fadeOut("slow");
    }
    setTimeout(fade, 90000);
    $(".wholepage").show();
});

//modalopen
$(".modal_background").hide();
if ($("#resumeButton").on("click", function () {
    $(".modal_background").show();
}));

$(".close").on("click", function () {
    $(".modal_background").toggle()
});

//modalclose
//$(".modal").clickOutsideThisElement(function () {
//});
//skills examples open
$("#A").on("click", function () { $(".XD").slideToggle(); });
$("#B").on("click", function () { $(".figma").slideToggle(); });
$("#C").on("click", function () { $(".iL").slideToggle(); });
$("#D").on("click", function () { $(".Ps").slideToggle(); });
$("#E").on("click", function () { $(".Pr").slideToggle(); });
$("#F").on("click", function () { $(".Ae").slideToggle(); });
$("#G").on("click", function () { $(".SolidWorks").slideToggle(); });
$("#H").on("click", function () { $(".fusion").slideToggle(); });