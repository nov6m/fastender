<template>
  <main class="news-page">
    <div class="container">
      <div class="news-page__title contrast--text">
        Новости
      </div>
      <v-divider class="contrast"></v-divider>
    </div>
    <GridNews class="grid-news" />
    <SwiperNews class="swiper-news" />
  </main>
</template>

<script>
import {
  GridNews,
  SwiperNews
} from '@/components/blocks';
export default {
  name: 'MainNews',
  components: { GridNews, SwiperNews }
}
</script>

<style lang="scss" scoped>
.swiper-news,
.grid-news {
  padding: 60px 0;

  @media (max-width:768px) {
    padding: 40px 0;
  }
}

.news-page {
  &__title {
    padding-top: 120px;
    font-size: 64px;
    font-weight: 600;

    @media (max-width:768px) {
      padding-top: 40px;
      font-size: 40px;
      padding-bottom: 20px;
    }
  }
}
</style>