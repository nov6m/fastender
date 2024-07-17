<template>
  <main class="main-page">
    <BannerDefault class="banner" />
    <GridAboutUs id="about" class="about-us" />
    <SwiperPartners class="partners" />
    <SwiperTenders id="variants" class="tenders" />
    <GridAdvantages id="advantages" class="advantages" />
    <StepperDefault class="stepper" />
    <GridReputation class="reputation" />
    <SwiperTrust class="trust" />
    <SwiperReview class="review" />
    <FormDefault id="fast-start" class="form" />
    <SwiperNews class="news" />
    <GridFaq id="faq" class="faq" />
  </main>
</template>

<script>
import {
  BannerDefault,
  GridAboutUs,
  SwiperPartners,
  SwiperTenders,
  GridAdvantages,
  StepperDefault,
  GridReputation,
  SwiperTrust,
  SwiperReview,
  FormDefault,
  SwiperNews,
  GridFaq
} from '@/components/blocks';

export default {
  name: 'MainDefault',
  components: {
    BannerDefault,
    GridAboutUs,
    SwiperPartners,
    SwiperTenders,
    GridAdvantages,
    StepperDefault,
    GridReputation,
    SwiperTrust,
    SwiperReview,
    FormDefault,
    SwiperNews,
    GridFaq
  }
}
</script>

<style lang="scss" scoped>
.about-us,
.tenders,
.advantages,
.stepper,
.review,
.form,
.news,
.faq {
  padding: 60px 0;

  @media (max-width:768px) {
    padding: 40px 0;
  }
}
.partners,
.trust {
  padding: 50px 0;

  @media (max-width:768px) {
    padding: 40px 0;
  }
}
.reputation {
  padding: 0;

  @media (max-width:768px) {
    padding: 40px 0;
  }
}
</style>