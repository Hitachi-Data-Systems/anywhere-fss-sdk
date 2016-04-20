window.onhashchange = function() {
  choose(window.location.href.toString());
}

function choose(url) {
  var f = url.split("/").slice(-1)[0].split("?")[0];
  if(f.match(/#/g) && f.match(/#/g).length > 0) {
    f = f.split("#")[0];
  }
  $('div.non-sidebar').empty();
  $('div.non-sidebar').load("operations/" + f + ".html", function() {
    goToAnchor();
    // rebind the models
    $(".model a").on("click", function(e) {
      e.preventDefault();
      var model = $(this).parent().attr("data-model")
      var parentOffset = $(this).parent().offset();
      var encodedWord = encodeURI(model);

      var modelBody = $('div.model-body-content', $(this).parent());

      if (modelBody.attr('modelLoaded') !== 'true') {
          modelBody.hide();
          modelBody.load("models/" + encodedWord + ".html")
          modelBody.attr('modelLoaded', 'true');
      }

      $('span.model-body-indicator', $(this).parent()).fadeToggle();
      modelBody.fadeToggle();
    })
  });
}

function goToAnchor() {
  var doARead = $($('a')[0]).offset();
  var anchorArr = window.location.href.toString().split("#");
  if(anchorArr.length > 2) {
    var anchor = anchorArr[anchorArr.length-1];
    window.scrollTo(0,$('a[name='+anchor+']').offset().top - 80);
  }
}
function resize()
{
    $(".sidebar").css('height', $(window).height() -60);
    $("#content-window").css('height', $(window).height() -60);

}
$(function(){
    window.onresize = resize;
    resize();
    $(window).bind('hashchange', function() {
        choose(window.location.href.toString());
    });
});
