
$( document ).ready(function(){
$('.list-hide').hide();
$('#hide-div').hide();
if($(window).width()<=680)
{
    $('.list').hide();
    $('#Buttons-nav').hide();
    $('#hide-div').show();
    $('#menu_butt').click(function(){
        $('.list-hide').slideToggle(500)
    })
}
})



