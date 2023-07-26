// ============[skill bars]==============
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
$("#tailwind").LineProgressbar({
  percentage: 1,
});
$("#javascript").LineProgressbar({
  percentage: 95,
});
$("#jquery").LineProgressbar({
  percentage: 90,
});
$("#ajax").LineProgressbar({
  percentage: 100,
});
$("#reactjs").LineProgressbar({
  percentage: 10,
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
$("#maridb").LineProgressbar({
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

// ============[naccube]==============
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

$(function () {
  $(".exShow-item-1").show();
  $(".exShow-item-2").hide();
  $(".exShow-item-3").hide();
  $(".exShow-item-4").hide();
  $(".exBtn-1").addClass("exSelected");
  $(".exBtn-2").removeClass("exSelected");
  $(".exBtn-3").removeClass("exSelected");
  $(".exBtn-4").removeClass("exSelected");

  $(".groupBox1").show();
  $(".groupBox2").hide();
  $(".groupBox3").hide();
  $(".group1").addClass("exSelected");
  $(".group2").removeClass("exSelected");
  $(".group3").removeClass("exSelected");

  $(".groupNext1").hide();
  $(".groupNext2").hide();
  $(".groupNext3").hide();
  $(".groupPrev1").show();
  $(".groupPrev2").hide();
  $(".groupPrev3").hide();

  $(".exBtn-1").click(function () {
    $(".exShow-item-1").show();
    $(".exShow-item-2").hide();
    $(".exShow-item-3").hide();
    $(".exShow-item-4").hide();
    $(".exBtn-1").addClass("exSelected");
    $(".exBtn-2").removeClass("exSelected");
    $(".exBtn-3").removeClass("exSelected");
    $(".exBtn-4").removeClass("exSelected");
  });
  $(".exBtn-2").click(function () {
    $(".exShow-item-1").hide();
    $(".exShow-item-2").show();
    $(".exShow-item-3").hide();
    $(".exShow-item-4").hide();
    $(".exBtn-1").removeClass("exSelected");
    $(".exBtn-2").addClass("exSelected");
    $(".exBtn-3").removeClass("exSelected");
    $(".exBtn-4").removeClass("exSelected");
  });
  $(".exBtn-3").click(function () {
    $(".exShow-item-1").hide();
    $(".exShow-item-2").hide();
    $(".exShow-item-3").show();
    $(".exShow-item-4").hide();
    $(".exBtn-1").removeClass("exSelected");
    $(".exBtn-2").removeClass("exSelected");
    $(".exBtn-3").addClass("exSelected");
    $(".exBtn-4").removeClass("exSelected");
  });
  $(".exBtn-4").click(function () {
    $(".exShow-item-1").hide();
    $(".exShow-item-2").hide();
    $(".exShow-item-3").hide();
    $(".exShow-item-4").show();
    $(".exBtn-1").removeClass("exSelected");
    $(".exBtn-2").removeClass("exSelected");
    $(".exBtn-3").removeClass("exSelected");
    $(".exBtn-4").addClass("exSelected");
  });
  $(".group1").click(function () {
    $(".groupBox1").show();
    $(".groupBox2").hide();
    $(".groupBox3").hide();
    $(".group1").addClass("exSelected");
    $(".group2").removeClass("exSelected");
    $(".group3").removeClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").hide();
    $(".groupNext3").hide();
    $(".groupPrev1").show();
    $(".groupPrev2").hide();
    $(".groupPrev3").hide();
  });
  $(".group2").click(function () {
    $(".groupBox1").hide();
    $(".groupBox2").show();
    $(".groupBox3").hide();
    $(".group1").removeClass("exSelected");
    $(".group2").addClass("exSelected");
    $(".group3").removeClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").show();
    $(".groupNext3").hide();
    $(".groupPrev1").hide();
    $(".groupPrev2").show();
    $(".groupPrev3").hide();
  });
  $(".group3").click(function () {
    $(".groupBox1").hide();
    $(".groupBox2").hide();
    $(".groupBox3").show();
    $(".group1").removeClass("exSelected");
    $(".group2").removeClass("exSelected");
    $(".group3").addClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").hide();
    $(".groupNext3").show();
    $(".groupPrev1").hide();
    $(".groupPrev2").hide();
    $(".groupPrev3").hide();
  });

  $(".groupPrev1").click(function () {
    $(".groupBox1").hide();
    $(".groupBox2").show();
    $(".groupBox3").hide();
    $(".group1").removeClass("exSelected");
    $(".group2").addClass("exSelected");
    $(".group3").removeClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").show();
    $(".groupNext3").hide();
    $(".groupPrev1").hide();
    $(".groupPrev2").show();
    $(".groupPrev3").hide();
  });
  $(".groupNext2").click(function () {
    $(".groupBox1").show();
    $(".groupBox2").hide();
    $(".groupBox3").hide();
    $(".group1").addClass("exSelected");
    $(".group2").removeClass("exSelected");
    $(".group3").removeClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").hide();
    $(".groupNext3").hide();
    $(".groupPrev1").show();
    $(".groupPrev2").hide();
    $(".groupPrev3").hide();
  });
  $(".groupPrev2").click(function () {
    $(".groupBox1").hide();
    $(".groupBox2").hide();
    $(".groupBox3").show();
    $(".group1").removeClass("exSelected");
    $(".group2").removeClass("exSelected");
    $(".group3").addClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").hide();
    $(".groupNext3").show();
    $(".groupPrev1").hide();
    $(".groupPrev2").hide();
    $(".groupPrev3").hide();
  });
  $(".groupNext3").click(function () {
    $(".groupBox1").hide();
    $(".groupBox2").show();
    $(".groupBox3").hide();
    $(".group1").removeClass("exSelected");
    $(".group2").addClass("exSelected");
    $(".group3").removeClass("exSelected");
    $(".groupNext1").hide();
    $(".groupNext2").show();
    $(".groupNext3").hide();
    $(".groupPrev1").hide();
    $(".groupPrev2").show();
    $(".groupPrev3").hide();
  });
});

// ============[experience]==============
function exLoad(url, id) {
  var xhttp = new XMLHttpRequest();
  var exArena = document.getElementById("exArena");

  xhttp.onreadystatechange = function () {
    if (exArena) {
      exArena.innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();

  let exList = document.querySelector(".exList-ul");

  exList.addEventListener("click", function (e) {
    let target = e.target;
    if (target.classList.contains("exBtn")) {
      let exButtons = document.querySelectorAll(".exBtn");
      for (let i = 0; i < exButtons.length; i++) {
        if (exButtons[i] === target) {
          exButtons[i].classList.add("exBtn-Active");
        } else {
          exButtons[i].classList.remove("exBtn-Active");
        }
      }
    }
  });
}
// =============[faveicon]===============
$(document).ready(function () {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  function favChanger(theme) {
    $('link[rel="shortcut icon"]').attr("href","img/"+ theme + ".png");
  }
  function updateFavIcon() {
    if (isDark.matches) {
      favChanger("light");
    } else {
      favChanger("dark");
    }
  }
  updateFavIcon();
  isDark.addListener(function (event) {
    updateFavIcon();
  });
});