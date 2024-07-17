<template>
  <section class="news contrast">
    <div class="container">
      <div class="news__title primaryText--text text-center">
        Новости
      </div>
      <div class="news__container">
        <div class="swiper mt-15 mt-md-10">
          <div class="swiper-wrapper">
            <div v-for="(item, idx) in allNews" :key="idx" class="swiper-slide d-flex flex-column py-4 px-5 py-md-5">
              <div v-if="item.title" class="news__news-title">
                {{ item.title }}
              </div>
              <v-divider class="my-2" />
              <div v-if="item.date" class="news__news-date">
                {{ item.date }}
              </div>
              <div v-if="item.content" class="d-none d-sm-block">
                <div class="news__news-content mt-7">
                  {{ item.content }}
                </div>
                <v-divider class="my-3" />
              </div>
              <div class="d-flex justify-center justify-sm-start py-2 py-sm-0">
                <router-link :to="item.link" class="news__news-link text-decoration-none">
                  <span @click="setCurrentNews(item)">
                    Подробнее 🡪
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="news__navigations">
          <div class="swiper-button-prev">
            <img src="@/static/svg/chevron-left.svg" />
          </div>
          <div class="swiper-button-next">
            <img src="@/static/svg/chevron-right.svg" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-center mt-15 mt-md-10">
        <router-link to="/news" class="text-decoration-none">
          <v-button class="news__button">
            Все новости
          </v-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { VButton } from '@/components/ui';
import Swiper, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'SwiperNews',
  components: { VButton },
  data() {
    return {
      swiper: null,
      
    }
  },
  computed: {
    ...mapGetters([
      'currentNews',
      'allNews'
    ])
  },
  mounted() {
    this.swiper = new Swiper('.news .swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: '.news .swiper-button-next',
        prevEl: '.news .swiper-button-prev',
      }
    });
  },
  methods: {
    ...mapMutations([
      'SET_CURRENT_NEWS'
    ]),
    setCurrentNews(item) {
      this.SET_CURRENT_NEWS(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  &__title {
    font-size: 32px;
    font-weight: 700;

    @media(max-width: 768px) {
      font-size: 28px;
    }
  }

  .swiper {
    padding: 20px;
    margin: -20px;
  }

  .swiper-slide {
    border-radius: 10px;
    box-shadow: 0px 0px 13.1px 0px rgba(80, 79, 76, 0.22);
  }

  &__container {
    position: relative;
  }

  &__news {
    &-title {
      font-size: 20px;
      font-weight: 600;
      height: 60px;
      overflow: hidden;

      @media(max-width: 768px) {
        font-size: 18px;
      }
    }

    &-date {
      font-size: 12px;
    }

    &-content {
      height: 85px;
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &-link {
      font-size: 18px;
      font-weight: 600;

      @media(max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  &__navigations {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media(max-width:768px) {
      display: none;
    }

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
    }
    
    .swiper-button-next {
      right: -50px;

      @media(max-width:1024px) {
        right: -30px;
      }
    }
  }

  &__button {
    width: 400px;

    @media(max-width:768px) {
      width: 280px;
    }
  }
}
</style>