$(document).ready(function(){
    hideAllDescriptions();
    showImgText('#java','.java-text');
    showImgText('#js','.js-text');
    showImgText('#csharp','.csharp-text');

})

function hideAllDescriptions(){
    $('.java-text').hide();
    $('.js-text').hide();
    $('.csharp-text').hide();

    
    /*Enalaktika kano auto pou ine pio scalable
     let imgText = $('div[class*="text"]');
    imgText.each(function(){
        $(this).hide();
    }) */
}

function showImgText (imgId, textDiv){
    $(textDiv).prepend('<h1></h1>');
    $(textDiv + '> h1').addClass('mb-20');
    $(textDiv + '> h1').text(imgId);

    $(imgId).hover(function() {
        $(this).css({'box-shadow': '0 0 15px grey'});
        $(textDiv).show();
    }, function(){
        $(this).css({'box-shadow':'none'});
        $(textDiv).hide();
    })
}