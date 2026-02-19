(function ($) {
    "use strict";

    $(document).ready(function(){
      $(".large li, .medium ul").mouseover(function() {
        var index;
        index = $(this).attr("data-index");
        $("ul[data-index=" + index + "]", this.submenu).show();
      });

      $(".large li, .medium ul").mouseout(function() {
        var index;
        index = $(this).attr("data-index");
        $("ul[data-index=" + index + "]", this.submenu).hide();
      });

      var container = $("#site-img-wrapper");     
      if(container.length > 0){
        var randomImg = Number(Math.floor(Math.random() * 7) + 1);
        var element = "";
        if(randomImg == 2) {
          element = "<div id='site-img' class='i" +randomImg +"' style='background-image: url(/assets/images/blog/img" + randomImg + ".jpg);'>" +
                      "<div class='promo-text orange'>" +
                        "<div class='row row1'>" +
                          "Shapify your slam dunk," +
                        "</div>" +
                        "<div class='row row1'>" +
                          "your killer serve or" +
                        "</div>" +
                         "<div class='row row1'>" +
                          "just your sexy footballer's legs" +
                        "</div>"
                      "</div>" +
                    "</div>";
        } else if(randomImg == 3) {
            element = "<div id='site-img' class='i" +randomImg +"' style='background-image: url(/assets/images/blog/img" + randomImg + ".jpg);'>" +
                        "<div class='promo-text orange'>"+
                              "<div class='row row1'>"+
                                "3D print yourself"+
                              "</div>"+
                              "<div class='row row1'>"+
                                "dressed up in"+
                              "</div>"+
                              "<div class='row row1'>"+
                                "your favorite party costume"+
                              "</div>"+
                          "</div>"+
                      "</div>";
        } else if(randomImg == 4 || randomImg == 5 || randomImg == 6 || randomImg == 7) {
           element = myElement(randomImg);
        } else {
            element = "<div id='site-img' class='i1' style='background-image: url(/assets/images/blog/img1.jpg);'>"+
                        "<div class='promo-text orange'>"+
                              "<div class='row row1'>"+
                                  "Make a birthday surprise with Shapify"+
                              "</div>"+
                          "</div>"+
                      "</div>";
        }
        container.append(element);
      }
    });

    function myElement(n) {
      return("<div id='site-img' class='i" + n +"' style='background-image: url(/assets/images/blog/img" + n + ".jpg);'></div>");
    };

}(jQuery));
