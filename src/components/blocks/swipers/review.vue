<template>
  <section class="review contrast">
    <div class="container">
      <div class="review__title primaryText--text text-center">
        Отзывы клиентов
      </div>
      <div class="review__container">
        <div class="swiper mt-10">
          <div class="swiper-wrapper">
            <div class="swiper-slide d-flex">
              <div class="review__slide-info">
                <div class="review__slide-rating px-2 py-7">
                  <div class="review__slide-rating-container">
                    <div class="review__name secondaryText--text">
                      Андрей Смирнов
                    </div>
                    <div class="my-2 review__emp tertiaryText--text">
                      Директор СК
                    </div>
                    <v-divider></v-divider>
                    <v-rating
                      length="5"
                      size="18"
                      :value="5"
                      color="tertiaryText"
                    ></v-rating>
                  </div>
                </div>
                <div class="review__slide-avatar">
                  <img src="@/static/images/avatar.png" class="review__image" />
                </div>
              </div>
              <div class="review__slide-text">
                Как принято считать, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом —  разоблачены.В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
              </div>
            </div>
            <div class="swiper-slide d-flex">
              <div class="review__slide-info">
                <div class="review__slide-rating px-2 py-7">
                  <div class="review__slide-rating-container">
                    <div class="review__name secondaryText--text">
                      Андрей Смирнов
                    </div>
                    <div class="my-2 review__emp tertiaryText--text">
                      Директор СК
                    </div>
                    <v-divider></v-divider>
                    <v-rating
                      length="5"
                      size="18"
                      :value="5"
                      color="tertiaryText"
                    ></v-rating>
                  </div>
                </div>
                <div class="review__slide-avatar">
                  <img src="@/static/images/avatar.png" class="review__image" />
                </div>
              </div>
              <div class="review__slide-text">
                Как принято считать, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом —  разоблачены.В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
              </div>
            </div>
            <div class="swiper-slide d-flex">
              <div class="review__slide-info">
                <div class="review__slide-rating px-2 py-7">
                  <div class="review__slide-rating-container">
                    <div class="review__name secondaryText--text">
                      Андрей Смирнов
                    </div>
                    <div class="my-2 review__emp tertiaryText--text">
                      Директор СК
                    </div>
                    <v-divider></v-divider>
                    <v-rating
                      length="5"
                      size="18"
                      :value="5"
                      color="tertiaryText"
                    ></v-rating>
                  </div>
                </div>
                <div class="review__slide-avatar">
                  <img src="@/static/images/avatar.png" class="review__image" />
                </div>
              </div>
              <div class="review__slide-text">
                Как принято считать, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом —  разоблачены.В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
              </div>
            </div>
            <div class="swiper-slide d-flex">
              <div class="review__slide-info">
                <div class="review__slide-rating px-2 py-7">
                  <div class="review__slide-rating-container">
                    <div class="review__name secondaryText--text">
                      Андрей Смирнов
                    </div>
                    <div class="my-2 review__emp tertiaryText--text">
                      Директор СК
                    </div>
                    <v-divider></v-divider>
                    <v-rating
                      length="5"
                      size="18"
                      :value="5"
                      color="tertiaryText"
                    ></v-rating>
                  </div>
                </div>
                <div class="review__slide-avatar">
                  <img src="@/static/images/avatar.png" class="review__image" />
                </div>
              </div>
              <div class="review__slide-text">
                Как принято считать, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом —  разоблачены.В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
              </div>
            </div>
          </div>
        </div>
        <div class="review__navigations">
          <div class="swiper-button-prev">
            <img src="@/static/svg/chevron-left.svg" />
          </div>
          <div class="swiper-button-next">
            <img src="@/static/svg/chevron-right.svg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'SwiperReview',
  data() {
    return {
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.review .swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 46,
        }
      },
      navigation: {
        nextEl: '.review .swiper-button-next',
        prevEl: '.review .swiper-button-prev',
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.review {
  &__title {
    font-size: 32px;
    font-weight: 700;

    @media(max-width: 768px) {
      font-size: 28px;
    }
  }

  .swiper-slide {
    gap: 20px;
    padding: 10px;

    @media(max-width: 1440px) {
      flex-direction: column;
      align-items: center;
    }
    
    @media(max-width:768px) {
      padding: 20px;
    }

    @media(max-width:480px) {
      width: 224px;
    }
  }

  &__slide {
    &-text {
      font-size: 18px;

      @media(max-width: 768px) {
        font-size: 15px;
      }
    }

    &-info {
      min-width: 224px;
      position: relative;

      @media(max-width: 1440px) {
        height: 150px;
        min-width: unset;
        width: 224px;
      }
    }

    &-text {
      @media(max-width: 480px) {
        width: 224px;
      }
    }

    &-avatar {
      width: 120px;
      height: 120px;
      position: absolute;
      right: 0;
      top: 30px;
      box-shadow: 0px 0px 16px 0px rgba(28, 39, 76, 0.20);
      border-radius: 10px;
      overflow: hidden;
    }

    &-rating {
      width: 140px;
      height: 140px;
      position: absolute;
      border-radius: 10px;
      border: 1px solid #E3E3E3;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.16);
      top: 0;
      left: 0;
      overflow: hidden;

      &-container {
        width: 90px;
      }

      ::v-deep {
        .v-rating button {
          padding: 0
        }
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%
  }

  &__name {
    font-size: 14px;
    font-weight: 600;
  }

  &__emp {
    font-size: 10px;
  }

  &__container {
    position: relative;
  }

  &__navigations {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        content: unset
      }
    }

    .swiper-button-prev {
      left: -50px;

      @media(max-width:1024px) {
        left: -30px;
      }

      @media(max-width:768px) {
        left: -15px;
      }
    }
    
    .swiper-button-next {
      right: -50px;

      @media(max-width:1024px) {
        right: -30px;
      }

      @media(max-width:768px) {
        right: -15px;
      }
    }
  }
}
</style>