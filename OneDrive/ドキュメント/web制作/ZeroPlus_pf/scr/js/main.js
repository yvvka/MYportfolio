"use strict";
// work
let mySwiper = new Swiper(".swiper", {
  // オプション設定
  loop: true,
  autoplay: {
    // スライドの自動再生
    delay: 3000, // スライド間の遷移の遅延を設定 (ミリ秒設定） 1000ミリ秒=1秒
  },
  pagination: {
    el: ".swiper-pagination", //ページネーション要素
    type: "bullets", //ページネーション種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示設定
  navigation: {
    nextEl: ".swiper-button-next", //「次へボタン」要素指定
    prevEl: ".swiper-button-prev", //「前へボタン」要素指定
  },
  slidesPerView: 1,
  breakpoints: {
    // ブレイクポイント
    768: {
      // 画面幅992px以上で適用
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1080: {
      // 画面幅992px以上で適用
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// hamburger
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

// gasp
gsap.from(".intro_section", {
  autoAlpha: 0,
  x: 200,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".intro_section",
    start: "top center",
  },
});
gsap.from(".skill_item", {
  autoAlpha: 0,
  y: 120,
  duration: 1,
  ease: "sPower4.inOut",
  scrollTrigger: {
    trigger: ".skill_inner",
    start: "top center",
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});
gsap.from(".flow_item", {
  autoAlpha: 0,
  y: 120,
  duration: 1,
  ease: "sPower4.inOut",
  scrollTrigger: {
    trigger: ".flow_inner",
    start: "top center",
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});
