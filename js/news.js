// JavaScript File News


$(document).ready(function(){
    $("#firstNews").click(function(){
        $.ajax({url: "js/ajax/news1.txt", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#secondNews").click(function(){
        $.ajax({url: "js/ajax/news2.txt", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#thirdNews").click(function(){
        $.ajax({url: "js/ajax/news3.txt", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#forthNews").click(function(){
        $.ajax({url: "js/ajax/news4.txt", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#fifthNews").click(function(){
        $.ajax({url: "js/ajax/news5.txt", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});
