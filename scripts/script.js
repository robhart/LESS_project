//JavaScript docunment

$(document).ready(function(){

$.get("content/home.txt", function(data){
$('#content').html(data);
});

var headerTag = $('header h1').get();

TweenLite.to(headerTag, 3,{left: 400, onComplete: addText});

function addText(){
$('header h1').append(" moved");
//$('#container').css("background-color", "#000000");
}

$("nav a").click(function(e){
//alert($(this).html().toLowerCase());
var txtName = $(this).html().toLowerCase();


$.get("content/" + txtName + ".txt", function(data){
$('#content').html(data);
});
});
});

