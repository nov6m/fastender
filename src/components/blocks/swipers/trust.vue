<template>
  <section class="trust contrast">
      <div class="trust__title container primaryText--text text-center">
        Нам доверяют крупнейшие компании России
      </div>
      <div class="swiper mt-7 mt-md-10">
        <div class="swiper-wrapper">
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/absolute.svg" alt="partner absolute">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/euroins.svg" alt="partner euroins">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/rosgosstrah.svg" alt="partner rosgosstrah">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/ugoria.svg" alt="partner ugoria">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/alpha.svg" alt="partner alpha">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/ingosstrah.svg" alt="partner ingosstrah">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/allianz.svg" alt="partner allianz">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/absolute.svg" alt="partner absolute">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/euroins.svg" alt="partner euroins">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/rosgosstrah.svg" alt="partner rosgosstrah">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/ugoria.svg" alt="partner ugoria">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/alpha.svg" alt="partner alpha">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/ingosstrah.svg" alt="partner ingosstrah">
          </div>
          <div class="swiper-slide d-flex justify-center">
            <img src="@/static/svg/allianz.svg" alt="partner allianz">
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import Swiper, { Autoplay, FreeMode } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'SwiperTrust',
  data() {
    return {
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.trust .swiper', {
      modules: [Autoplay, FreeMode],
      speed: 5000,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
        1440: {
          slidesPerView: 6
        },
        1600: {
          slidesPerView: 7
        }
      },
      autoplay: {
        delay: 1
      },
      freeMode: true,
      allowTouchMove: false
    });
  }
}
</script>

<style lang="scss" scoped>
.trust {
  &__title {
    font-size: 32px;
    font-weight: 700;

    @media(max-width: 768px) {
      font-size: 28px;
    }
  }

  .swiper-slide {
    & > img {
      width: 168px;
    }
  }
}
</style>