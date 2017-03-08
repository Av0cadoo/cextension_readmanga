var tb = jQuery.noConflict();
function changemode(){
  if(tb("#allpage span").attr('class') == 'ore-icon ore-icon-allpage allpage'){
    tb('#allpage span').attr('class', 'ore-icon ore-icon-onepage allpage');
    tb('#allpage span').text('  One Page');
    tb("ul#alphabet_detail li:hidden").fadeIn().show();
    tb("ul#alphabet_detail li#frt_pg").fadeIn().show();
    tb(".alphabet_menu").fadeOut().hide();
    if(tb("#manga_alphabet").hasClass("manga-classification").toString() == 'true'){
      tb("#manga_alphabet").attr('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-padding manga-classification');
      tb("#manga_alphabet").attr('id', '');
    }else{
      tb("#manga_alphabet").attr('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12 reset-padding');
    }
    tb("#manga_alphabet").attr('style', 'text-align:center');
    tb("#manga_alphabet img").attr('onClick', '');
    tb("#manga_alphabet img").css('width', '920px');
    tb("#manga_alphabet img").css('height', 'auto');
    tb("#manga_alphabet img").css('max-width', '100%');
  }else{
    tb('#allpage span').attr('class', 'ore-icon ore-icon-allpage allpage');
    tb('#allpage span').text('  All Page');
    tb("ul#alphabet_detail li:visible").hide();
    tb("ul#alphabet_detail li#frt_pg").show();
    tb(".alphabet_menu").fadeIn().show();
    if(tb(".ore-manga-reader div").hasClass("manga-classification").toString() == 'true'){
      tb(".manga-classification").attr('id', 'manga_alphabet');
      tb("#manga_alphabet").attr('class', 'col-xs-12 col-sm-10 col-md-10 col-lg-10 reset-padding manga-classification');
    }else{
      tb("#manga_alphabet").attr('class', 'col-xs-12 col-sm-10 col-md-10 col-lg-10 reset-padding');
    }
    tb("#manga_alphabet").attr('style', '');
    tb("#manga_alphabet img").attr('onClick', 'javascript:next()');
    tb("#manga_alphabet img").css('width', '');
    tb("#manga_alphabet img").css('height', '');
    tb("#manga_alphabet img").css('max-width', '');
  }
}
var url = window.location.href;

if(url.includes("oremanga")){
  changemode();
} else if(url.includes("niceoppai")){
  if(!url.includes("?all")){
    window.location.href = url + "/?all"
  }
  window.onkeydown = function(e){
    e = e || window.event;

    if (e.keyCode == '188') {
        // <(,)
        var splitedUrl = url.split("/");
        splitedUrl[4] = splitedUrl[4]++ - 1;
        var newUrl = splitedUrl.join("/")
        window.location.href = newUrl
    }
    else if (e.keyCode == '190') {
        // >(.)
        var splitedUrl = url.split("/");
        splitedUrl[4] = splitedUrl[4]++ + 1;
        var newUrl = splitedUrl.join("/")
        window.location.href = newUrl
    }
  }
  window.onclick = function(e){
    e = e || window.event;
    if(e.screenX < window.screen.width / 3){
      var splitedUrl = url.split("/");
      splitedUrl[4] = splitedUrl[4]++ - 1;
      var newUrl = splitedUrl.join("/")
      window.location.href = newUrl
    } else if(e.screenX > window.screen.width / 3){
      var splitedUrl = url.split("/");
      splitedUrl[4] = splitedUrl[4]++ + 1;
      var newUrl = splitedUrl.join("/")
      window.location.href = newUrl
    }
  }

}
