$(document).ready(function(){
    var $draggables = $(".draggable").draggabilly({
    });
    $("#map1").click(function(){
        $(".draggable").css("background-image", "2020-05-12_10-12-37-min.png)");
    });
    $("#map2").click(function(){
        $(".draggable").css("background-image", "2020-05-12_10-13-00-min.png)");
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