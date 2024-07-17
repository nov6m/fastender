<template>
  <div class="tenders backgroundSecondary">
    <v-container>
      <div class="tenders__title primaryText--text text-center">
        Варианты тендеров
      </div>
      <div class="swiper mt-7 mt-md-10">
        <div class="swiper-wrapper">
          <div class="swiper-slide d-flex justify-center">
            <div class="tenders__card contrast py-7 px-10 d-flex flex-column align-center justify-space-between">
              <div class="d-flex flex-column align-center">
                <img src="@/static/svg/dms.svg" class="tenders__card-image" />
                <div class="tenders__card-title mt-5 primaryText--text text-center">
                  ДМС
                </div>
                <div class="tenders__card-description mt-10 primaryText--text">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения дальнейших направлений развития. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, разоблачены. Как принято считать
                </div>
              </div>
              <v-button class="tenders__button mt-10">
                Начать тендер
              </v-button>
            </div>
          </div>
          <div class="swiper-slide d-flex justify-center">
            <div class="tenders__card contrast py-7 px-10 d-flex flex-column align-center justify-space-between">
              <div class="d-flex flex-column align-center">
                <img src="@/static/svg/dms.svg" class="tenders__card-image" />
                <div class="tenders__card-title mt-5 primaryText--text text-center">
                  Страхование НС
                </div>
                <div class="tenders__card-description mt-10 primaryText--text">
                  Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, разоблачены. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения дальнейших направлений развития. Как принят
                </div>
              </div>
              <v-button class="tenders__button mt-10">
                Начать тендер
              </v-button>
            </div>
          </div>
          <div class="swiper-slide d-flex justify-center">
            <div class="tenders__card contrast py-7 px-10 d-flex flex-column align-center justify-space-between">
              <div class="d-flex flex-column align-center">
                <img src="@/static/svg/dms.svg" class="tenders__card-image" />
                <div class="tenders__card-title mt-5 primaryText--text text-center">
                  Страхование ОНКО
                </div>
                <div class="tenders__card-description mt-10 primaryText--text">
                  Как принято считать, непосредственные участники технического прогресса формируют глобальную экономическую сеть и при этом —  разоблачены.В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения дальнейших направлений развития
                </div>
              </div>
              <v-button class="tenders__button mt-10">
                Начать тендер
              </v-button>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { VButton } from '@/components/ui';

export default {
  name: 'SwiperTenders',
  components: { VButton },
  data() {
    return {
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.tenders .swiper', {
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        // 768: {
        //   slidesPerView: 2
        // },
        1024: {
          spaceBetween: 50,
          slidesPerView: 2
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 70
        }
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.tenders {

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  .swiper {
    padding: 20px;
    margin: -20px;

    @media (max-width:1024px) {
      padding: 10px;
      margin: -10px;
    }

    .swiper-slide {
      height: auto;
    }
  }

  &__card {
    border-radius: 20px;
    border: 1px solid #F0EFED;
    box-shadow: 0px 0px 13.1px 0px rgba(80, 79, 76, 0.22);

    &-image {
      width: 85px;
      height: 85px;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;

      @media (max-width:768px) {
        font-size: 18px;
      }
    }

    &-description {
      font-size: 18px;

      @media (max-width:768px) {
        font-size: 15px;
      }
    }
  }

  &__button {
    width: 285px;

    @media (max-width:768px) {
      width: 235px;
    }
  }
}
</style>