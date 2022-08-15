$(document).ready(function(){
    $('body').css({"padding-left": "20px"});
    $('#mainheader').css({"padding-top": "20px", "padding-bottom": "20px"});
    $('.maintext').css({"color": "#0769AA"});
    $('#footer p').css({"font-weight": "bold"})

    $('#mainheader').click(function(){
        $(this).css("border", "10px solid");
        $('.maintext').css({"font-size": "large"});
        $('#footer p').text("Doppelklickk verkleinert wieder!");
    });

    $('#mainheader').dblclick(function(){
        $(this).css("border", "0px none");
        $('.maintext').css("font-size", "medium");
        $('#footer p').text("Klicke auf das Logo");
    })
  });