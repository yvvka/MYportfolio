"use strict";
let slider1 = new Swiper(".slider1", {
  // オプション設定
  loop: true,
  autoplay: {
    // スライドの自動再生
    delay: 1000, // スライド間の遷移の遅延を設定 (ミリ秒設定） 1000ミリ秒=1秒
  },
  centeredSlides: true,
  slidesPerView: 1.5,
  breakpoints: {
    // ブレイクポイント
    541: {
      // 画面幅992px以上で適用
      slidesPerView: 2.5,
    },
    768: {
      // 画面幅992px以上で適用
      slidesPerView: 3.5,
    },
  },
});

let slider2 = new Swiper(".slider2", {
  // オプション設定
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // ブレイクポイント
    505: {
      // 画面幅992px以上で適用
      slidesPerView: 1.5,
    },
    867: {
      // 画面幅992px以上で適用
      slidesPerView: 2.5,
    },
    1200: {
      // 画面幅992px以上で適用
      slidesPerView: 3.5,
    },
  },
});
