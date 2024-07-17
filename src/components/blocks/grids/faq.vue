<template>
  <div class="faq primary">
    <v-container>
      <div class="faq__title contrast--text text-center">
        FAQ
      </div>
      <div class="faq__grid mt-10">
        <div class="faq__card secondary pa-7 py-md-5 px-md-10 d-flex flex-column align-center">
          <img src="@/static/svg/education.svg" class="faq__card-icon" />
          <div class="faq__card-title contrast--text text-center mt-2">
            База знаний
          </div>
          <v-divider class="faq__card-divider primary my-2" />
          <div class="d-none d-sm-block">
            <div class="faq__card-content contrast--text">
              Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации
            </div>
            <v-divider class="my-4 primary" />
          </div>
          <div class="d-flex justify-center">
            <router-link to="/faq" class="faq__card-link text-decoration-none contrast--text">
              Подробнее 🡪
            </router-link>
          </div>
        </div>
        <div class="faq__card secondary pa-7 py-md-5 px-md-10 d-flex flex-column align-center">
          <img src="@/static/svg/support.svg" class="faq__card-icon" />
          <div class="faq__card-title contrast--text text-center mt-2">
            Центр поддержки
          </div>
          <v-divider class="faq__card-divider primary my-2" />
          <div class="d-none d-sm-block">
            <div class="faq__card-content contrast--text">
              Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации
            </div>
            <v-divider class="my-4 primary" />
          </div>
          <div class="d-flex justify-center">
            <router-link to="/faq" class="faq_-card-link text-decoration-none contrast--text">
              Подробнее 🡪
            </router-link>
          </div>
        </div>
        <div class="faq__card secondary pa-7 py-md-5 px-md-10 d-flex flex-column align-center">
          <img src="@/static/svg/ask-question.svg" class="faq__card-icon" />
          <div class="faq__card-title contrast--text text-center mt-2">
            Вопрос-Ответ
          </div>
          <v-divider class="faq__card-divider primary my-2" />
          <div class="d-none d-sm-block">
            <div class="faq__card-content contrast--text">
              Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации
            </div>
            <v-divider class="my-4 primary" />
          </div>
          <div class="d-flex justify-center">
            <router-link to="/faq" class="faq_-card-link text-decoration-none contrast--text">
              Подробнее 🡪
            </router-link>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GridFaq'
}
</script>

<style lang="scss" scoped>
.faq {

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    @media (max-width:1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:768px) {
      gap: 20px;
    }

    @media (max-width:480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__card {
    border-radius: 10px;
    box-shadow: 0px 0px 13.1px 0px rgba(80, 79, 76, 0.22);
    max-width: 384px;
    font-size: 22px;
    font-weight: 500;

    @media (max-width:1024px) {
      max-width: unset;
    }

    @media (max-width:768px) {
      font-size: 15px;
      font-weight: 400;
    }

    @media (max-width:480px) {
      width: 100%;
    }

    &-icon {
      width: 36px;
      height: 36px;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;

      @media (max-width:768px) {
        font-size: 18px;
      }
    }

    &-divider {
      width: 100%;
    }

    &-content {
      height: 54px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &-link {
      font-size: 18px;
      font-weight: 600;

      @media (max-width:768px) {
        font-size: 16px;
      }
    }

    &:last-child {
      @media (max-width:1024px) {
        grid-column-start: 1;
        grid-column-end: 3;
        max-width: unset;
      }

      @media (max-width:480px) {
        grid-column-start: unset;
        grid-column-end: unset;
      }
    }
  }
}
</style>