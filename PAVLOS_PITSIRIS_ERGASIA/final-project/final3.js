$(document).ready(function(){
    hideAllDescriptions();
    showImgText('#Tennis-Court','.tennis-text');
    showImgText('#Diving-Center','.Dive-text');
    showImgText('#Play-Ground','.Play-text');
    showImgText('#Spa-Center','.Spa-text');

})

function hideAllDescriptions(){
    $('.tennis-text').hide();
    $('.Dive-text').hide();
    $('.Play-text').hide();
    $('.Spa-text').hide();

    
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