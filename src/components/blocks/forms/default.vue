<template>
  <section class="form">
    <div class="container">
      <div class="form__title contrast--text text-center">
        Быстрый старт
      </div>
      <div class="form__container mt-md-7 mt-10 d-flex">
        <div class="form__fields-container d-flex align-end">
          <div class="form__fields d-flex flex-column align-center">
            <v-input-custom v-model="form.fio" placeholder="ФИО" :rules="rules.fio" />
            <v-input-custom v-model="form.region" placeholder="Регион" :rules="rules.region" />
            <v-input-custom v-model="form.phone" v-mask="'+7 (###) ### ## ##'" placeholder="+7(___) ___-____" :rules="rules.phone" return-masked-value mask="+7(###) ### ## ##" />
            <v-input-custom v-model="form.email" placeholder="Email" :rules="rules.email" />
            <v-button class="form__button">
              Начать тендер
            </v-button>
            <div class="form__disclaimer contrast--text">
              Как уже неоднократно упомянуто, действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Картельные сговоры не допускают ситуации
            </div>
          </div>
        </div>
        <div>
          <div class="form__subtitle contrast--text">
            Узнайте как легко и безопасно начать работать на площадке FAST. Оставьте заявку и мы перезвоним.
          </div>
          <div class="form__grid mt-4 mt-md-7">
            <div class="form__time-card d-flex">
              <div class="form__time-icon d-flex">
                <img src="@/static/svg/15minutes.svg" />
              </div>
              <div>
                <div class="form__time contrast--text">
                  15 минут
                </div>
                <div class="form__time-description contrast--text mt-2">
                  время на демонстрацию работы нашей площадки
                </div>
              </div>
            </div>
            <div class="form__time-card d-flex">
              <div class="form__time-icon d-flex">
                <img src="@/static/svg/5minutes.svg" />
              </div>
              <div>
                <div class="form__time contrast--text">
                  5 минут
                </div>
                <div class="form__time-description contrast--text mt-2">
                  время на звонок, после поступления заявки
                </div>
              </div>
            </div>
          </div>
          <div class="form__list mt-6 mt-md-10 d-flex flex-column">
            <div class="form__list-item d-flex">
              <div>
                <img src="@/static/svg/po.svg" />
              </div>
              <div class="form__list-item_text contrast--text">
                Не нужно устанавливать никакое ПО, работа в браузере
              </div>
            </div>
            <div class="form__list-item d-flex">
              <div>
                <img src="@/static/svg/demonstration.svg" />
              </div>
              <div class="form__list-item_text contrast--text">
                Выбирайте удобное время для демонстрации
              </div>
            </div>
          </div>
          <div class="d-flex justify-center mt-7 mt-md-10">
            <button class="form__button-custom d-flex align-center justify-center">
              <img src="@/static/svg/drop-star.svg" class="mr-5" />
              <span class="form__button-custom-text contrast--text">
                Без регистрации
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VInputCustom, VButton } from '@/components/ui';

export default {
  name: 'FormDefault',
  components: { VInputCustom, VButton },
  data() {
    return {
      form: {
        fio: '',
        region: '',
        phone: '',
        email: ''
      },
      rules: {
        fio: [
          v => !!v || 'Поле "ФИО" обязательно',
          v => v.split(' ').length >= 2 || 'Поле "ФИО" не может состоять из 1 слова'
        ],
        region: [
          v => !!v || 'Поле "Регион" обязательно'
        ],
        phone: [
          v => !!v || 'Поле "Телефон" обязательно',
          v => /(?:\\+|\d)[\d\-\\(\\) ]{6,11}\d/g.test(v) || 'Поле "Телефон" не верное'
        ],
        email: [
          v => !!v || 'Поле "Email" обязательно',
          v => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(v) || 'Поле "Email" не верное'
        ]
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__title {
    font-size: 32px;
    font-weight: 600;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__container {
    column-gap: 110px;

    @media (max-width:1024px) {
      column-gap: 50px;
    }

    @media (max-width:768px) {
      flex-direction: column-reverse;
      row-gap: 30px;
    }
  }

  &__subtitle {
    font-size: 18px;

    @media (max-width:768px) {
      font-size: 15px;
    }
  }

  &__fields {
    row-gap: 10px;
    width: 100%;

    &-container {
      width: 100%;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }

  &__time {
    font-size: 26px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 20px;
    }

    &-card {
      column-gap: 20px;

      @media (max-width:480px) {
        column-gap: 10px;
      }
    }

    &-icon {
      align-items: center;

      @media (max-width:768px) {
        align-items: start;
      }

      & > img {
        width: 36px;
        height: 36px;
      }
    }

    &-description {
      font-size: 22px;
      font-weight: 500;

      @media (max-width:1024px) {
        font-size: 15px;
      }
    }
  }

  &__list {
    row-gap: 26px;

    &-item {
      column-gap: 20px;

      &_text {
        font-size: 18px;

        @media (max-width:768px) {
          font-size: 15px;
        }
      }
    }
  }

  &__button {
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    @media (max-width:768px) {
      font-size: 16px;
      width: 270px;
    }

    &-custom {
      width: 100%;
      padding: 17px 0 29px 0;
      background: url('@/static/images/custom-button.png');
      background-repeat: no-repeat;
      background-size: contain;
      transition: filter 0.3s;
      background-position-y: center;

      @media (max-width:768px) {
        width: 500px;
        padding: 16px 0;
        background-size: 100% 60px;
      }

      &-text {
        font-size: 20px;
        font-weight: 600;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  &__disclaimer {
    font-size: 10px;
    margin-top: 15px;
  }
}
</style>