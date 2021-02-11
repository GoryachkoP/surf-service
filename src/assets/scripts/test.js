import * as $ from "jquery";
import WOW from "wow.js";

$(function () {
  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 961,
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
  });

  // holder sum

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    const spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  // holder sum
  $(".quantity-button").on("click", () => {
    setSum();
  });

  function setSum() {
    const inputNights = $(".nights");
    const inputGuests = $(".guests");
    const inputSum = $(".sum");
    const sum =
      inputNights.val() * inputSum.data("nights") +
      (inputGuests.val() - 1) * inputSum.data("guests");

    inputSum.html("$" + sum);
  }

  setSum();
  // holder sum end

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  window.wow = new WOW().init({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  $("#header-arrows").on("click", function () {
    const selectedEl = $("#header-arrows").attr("href");
    $("html, body").animate(
      {
        scrollTop: $(selectedEl).offset().top,
      },
      1000
    );
  });


  // menu links
  const items = document.querySelectorAll('.menu .menu__list a');
  items.forEach(menuItem => {
    $(menuItem).on("click", function () {
      let idElement = menuItem.getAttribute('href');
      $("html, body").animate(
        {
          scrollTop: $(idElement).offset().top,
        },
        1000
      );
    });
  });
});
