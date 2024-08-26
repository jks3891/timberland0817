console.clear();

function searchBox() {
  $(".menu__search-box").click(function () {
    $(".search-wrap").addClass("active");
  });

  $(".search__btn").click(function () {
    $(".search-wrap").removeClass("active");
  });
}

searchBox();

// 팝업 구현 시작
function PopupSwiper() {
  const swiper = new Swiper(".popup-wrap .swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 7000,
    },
  });
}

PopupSwiper();

function PopupClose() {
  $(".popup__close").click(function () {
    $(".popup-wrap").addClass("active");
  });
}

PopupClose();
// 팝업 구현 끝

// 메인 섹션 스와이퍼 구현 시작
function SectionSwiper__init() {
  const swiper1 = new Swiper(".section-swiper-box .swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    pagination: {
      el: ".section-swiper-box .swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: ".section-swiper-box .swiper-button-next",
      prevEl: ".section-swiper-box .swiper-button-prev",
    },
  });
}

SectionSwiper__init();
// 메인 섹션 스와이퍼 구현 끝

// 제품 슬라이드1 구현 시작
function ProductSwiper() {
  const swiper2 = new Swiper(".product-swiper-wrap1 .swiper", {
    // Optional parameters
    loop: false,
    speed: 500,
    slidesPerView: 4,
    slidesPerGroup: 4,

    navigation: {
      nextEl: ".product-swiper-wrap1 .product__swiper-button-next",
      prevEl: ".product-swiper-wrap1 .product__swiper-button-prev",
    },
  });
}

ProductSwiper();
// 제품 슬라이드1 구현 끝

// 제품 슬라이드2 구현 시작

function ProductSWiper2() {
  const swiper3 = new Swiper(".product-swiper-wrap2 .swiper", {
    // Optional parameters
    loop: false,
    speed: 500,
    slidesPerView: 4,
    slidesPerGroup: 4,

    navigation: {
      nextEl: ".product-swiper-wrap2 .swiper-button-next",
      prevEl: ".product-swiper-wrap2 .swiper-button-prev",
    },
  });
}

ProductSWiper2();
// 제품 슬라이드2 구현 끝
