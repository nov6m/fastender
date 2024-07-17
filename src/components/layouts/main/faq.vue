<template>
  <main class="faq-page">
    <div class="container">
      <div class="faq-page__title contrast--text">
        FAQ
      </div>
      <v-divider class="contrast"></v-divider>
    </div>
    <ExpansionDefault class="faq" />
  </main>
</template>

<script>
import { ExpansionDefault } from '@/components/blocks';

export default {
  name: 'MainFaq',
  components: { ExpansionDefault }
}
</script>

<style lang="scss" scoped>
.faq {
  padding: 70px 0;

  @media (max-width:768px) {
    padding: 20px 0;
  }
}

.faq-page {
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