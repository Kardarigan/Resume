(function ($) {
  "use strict";

  $.fn.LineProgressbar = function (options) {
    options = $.extend(
      {
        percentage: 100,
        ShowProgressCount: false,
        duration: 1000,
        unit: "%",
        animation: true,

        // Styling Options
        fillBackgroundColor: "#000",
        backgroundColor: "#f3ffff",
        radius: "20px",
        height: "15px",
        width: "100%",
      },
      options
    );

    $.options = options;
    return this.each(function (index, el) {
      // Markup
      $(el).html(
        '<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>'
      );

      var progressFill = $(el).find(".proggress");
      var progressBar = $(el).find(".progressbar");

      progressFill.css({
        backgroundColor: options.fillBackgroundColor,
        height: options.height,
        borderRadius: options.radius,
      });
      progressBar.css({
        width: options.width,
        backgroundColor: options.backgroundColor,
        borderRadius: options.radius,
      });

      /**
       * Progress with animation
       */
      if (options.animation) {
        // Progressing
        progressFill.animate(
          {
            width: options.percentage + "%",
          },
          {
            step: function (x) {
              if (options.ShowProgressCount) {
                $(el)
                  .find(".percentCount")
                  .text(Math.round(x) + options.unit);
              }
            },
            duration: options.duration,
          }
        );
      } else {
        // Without animation
        progressFill.css("width", options.percentage + "%");
        $(el)
          .find(".percentCount")
          .text(Math.round(options.percentage) + "%");
      }
    });
  };
})(jQuery);

$("[line-progressbar]").each(function () {
  var $this = $(this);
  function LineProgressing() {
    $this.LineProgressbar({
      percentage: $this.data("percentage"),
      unit: $this.data("unit"),
      animation: $this.data("animation"),
      ShowProgressCount: $this.data("showcount"),
      duration: $this.data("duration"),
      fillBackgroundColor: $this.data("progress-color"),
      backgroundColor: $this.data("bg-color"),
      radius: $this.data("radius"),
      height: $this.data("height"),
      width: $this.data("width"),
    });
  }
  var loadOnce = 0;
  $this.waypoint(
    function () {
      loadOnce += 1;
      if (loadOnce < 2) {
        LineProgressing();
      }
    },
    { offset: "100%", triggerOnce: true }
  );
});
$("#htmlcss").LineProgressbar({
  percentage: 100,
});
$("#sass").LineProgressbar({
  percentage: 100,
});
$("#bootstrap").LineProgressbar({
  percentage: 100,
});
$("#javascript").LineProgressbar({
  percentage: 90,
});
$("#jquery").LineProgressbar({
  percentage: 50,
});
$("#reactjs").LineProgressbar({
  percentage: 1,
});
$("#python").LineProgressbar({
  percentage: 80,
});
$("#django").LineProgressbar({
  percentage: 20,
});
$("#mysql").LineProgressbar({
  percentage: 1,
});
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

///////////////////////
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);