
$( document ).ready(function(){
    /*При загрузке страницы прячем 
    выплывающее меню*/
    $('.list-hide').hide();
    
    /*Так же привязываем иконке
    меню событие*/
    $('#menu_butt').click(function(){        
        $('.list-hide').slideToggle(500)
    })    
    
});





