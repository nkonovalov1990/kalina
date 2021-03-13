$(document).ready(function(){
    var $draggables = $(".draggable").draggabilly({
    });
    $("#map1").click(function(){
        $(".draggable").css("background-image", "kalina-1-min.jpg");
    });
    $("#map2").click(function(){
        $(".draggable").css("background-image", "kalina-2-min.jpg");
    });
    $("#map3").click(function(){
        $(".draggable").css("background-image", "kalina-3-min.jpg");
    });
    $("#zoomIn").click(function(){
        var scale = $(".draggable").css("background-size");
        var scaleResult = parseInt(scale) + 10 + "%";
        $( ".draggable" ).css("background-size", scaleResult);

        var moveTopPercent = 20;
        var moveLeftPercent = 20;

        var top = $(".draggable").css("top");
        var topResult= parseInt(top) + (parseInt(top)/100*moveTopPercent);
        $( ".draggable" ).css("top", topResult);

        var left = $(".draggable").css("left");
        var leftResult= parseInt(left) + (parseInt(left)/100*moveLeftPercent);
        $( ".draggable" ).css("left", leftResult);
    });
    $("#zoomOut").click(function(){
        var scale = $(".draggable").css("background-size");
        var scaleResult = parseInt(scale) - 10 + "%";
        $( ".draggable" ).css("background-size", scaleResult);

        var moveTopPercent = 20;
        var moveLeftPercent = 20;
        
        var top = $(".draggable").css("top");
        var topResult= parseInt(top) - (parseInt(top)/100*moveTopPercent);
        $( ".draggable" ).css("top", topResult);
        
        var left = $(".draggable").css("left");
        var leftResult= parseInt(left) - (parseInt(left)/100*moveLeftPercent);
        $( ".draggable" ).css("left", leftResult);
    });
});