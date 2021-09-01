(function(w){
  function getChildrenHeights(elementName) {
    var newHeight = 0;
    $(elementName).children().each(function(index, element){
        newHeight = newHeight + element.offsetHeight;
    })
    return newHeight;
  }

  function hideSpotify(){
    $('.overlay').css('zIndex', '0');
    $('.spotify iframe').css('zIndex', '0');
  }

  $(document).ready(function () {
    $("#nav-trigger span").click(function () {

      if ($("nav#nav-mobile ul").hasClass("expanded")) {

        $("nav#nav-mobile ul").removeClass("expanded");
        $("nav#nav-mobile ul").css('height', '0px');
      } else {
        $("nav#nav-mobile ul").addClass("expanded")
        $("nav#nav-mobile ul").css('height', getChildrenHeights('nav#nav-mobile ul') + 'px');
      }
    });

    $('.overlay').on('click', hideSpotify);
    $('#overlayBtn').on('click', hideSpotify);

    $('#spotifyBtn').on('click', function (e){
      e.preventDefault();
      $('.overlay').css('zIndex', '2');
      $('.spotify iframe').css('zIndex', '3')
    })


    $('.overlay').css('height', window.innerHeight);
  });
}(window))
