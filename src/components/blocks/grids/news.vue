<template>
  <section class="news">
    <div class="container">
      <div class="news__grid">
        <div>
          <img src="@/static/images/news.png" alt="news image" class="news__image news__image-desktop"  />
        </div>
        <div>
          <div v-if="currentNews.title" class="news__currentNews. contrast--text">
            {{ currentNews.title }}
          </div>
          <v-divider class="contrast my-2"></v-divider>
          <div v-if="currentNews.date" class="news__date contrast--text">
            {{ currentNews.date }}
          </div>
          <img src="@/static/images/news.png" alt="news image" class="news__image news__image-mobile mt-6"/>
          <div v-if="currentNews.content" class="news__content contrast--text mt-6" v-html="currentNews.content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'GridNews',
  computed: {
    ...mapGetters([
      'currentNews',
      'allNews'
    ])
  },
  mounted() {
    if (!Object.keys(this.currentNews).length) {
      this.SET_CURRENT_NEWS(this.allNews?.[0] ?? {})
    }
  },
  methods: {
    ...mapMutations([
      'SET_CURRENT_NEWS'
    ])
  }
}
</script>

<style lang="scss" scoped>
.news {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;

    @media (max-width:768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__date {
    font-size: 16px;
  }

  &__content {
    font-size: 18px;
  }

  &__image {
    width: 100%;

    &-desktop {
      @media (max-width:768px) {
        display: none;
      }
    }

    &-mobile {
      display: none;

      @media (max-width:768px) {
        display: block;
      }
    }
  }
}
</style>