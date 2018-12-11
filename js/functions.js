window.onload = function() {
  (function($){

    // jQuery.get("https://gist.githubusercontent.com/laurentiudanu/39454443421d5fc8a342c99bca016de5/raw/4d765bdd073d35cd44dd78be5156eab1e646beaa/test.md", function(data) {
    //   $("#gistdb").append(data);
    // });
    $("#touchsurface2").swipe({
      swipe:function(event, direction, distance, duration, fingerCount){
        //$("h1").text("You swiped " + direction + " for " + distance + "px" );
        if(direction == "left" && distance > 100) {
          $("h1").text("activated");
        }
      },
      threshold:100
    });

  })(jQuery);
}
