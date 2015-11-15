$(function(){
    
    var slideqty = $('#featured .item').length;

    //Automatically generate carousel indicators
    for (var i=0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
        $('#featured ol').append(insertText);
    }
    
    
     $('.carousel').carousel({
        interval: '4000',
        pause: false
    });
    
});