<template>
  <footer class="footer backgroundTertiary">
    <v-container class="footer__container d-flex flex-column">
      <div class="footer__top d-flex justify-space-between">
        <div v-for="(navItem, key) in menu" :key="key" class="footer__menu d-flex flex-column">
          <div v-if="navItem.title" class="footer__menu-title contrast--text">
            {{ navItem.title }}
          </div>
          <div v-for="(item, idx) in navItem.nav" :key="idx" class="footer__menu-link">
            <router-link :to="item.link" class="footer__menu-link_item contrast--text">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <div class="footer__contacts">
          <div class="d-flex">
            <div class="footer__contacts-title contrast--text mr-3">
              КОНТАКТЫ
            </div>
            <img src="@/static/svg/logo.svg" class="footer__contacts-image" alt="logo" />
          </div>
          <div class="footer__contacts-content contrast--text mt-2" v-html="contactInfo">
          </div>
          <div class="footer__contacts-agree contrast--text mt-6">
            Согласие на обработку персональных данных. Политика в отношении обработки персональных данных ООО «Лаборатория автоматизации бизнеса»
          </div>
          <div class="footer__contacts-links d-flex flex-column mt-5">
            <div class="footer__phone d-flex align-items">
              <img src="@/static/svg/phone.svg" alt="phone icon" />
              <a href="tel:+74996784591" target="_blank" class="text-decoration-none contrast--text" >
                +7 499 678-45-91
              </a>
            </div>
            <div class="footer__email d-flex align-items">
              <div class="footer__email-prefix contrast--text">
                @
              </div>
              <a href="mailto:clients@fast-easy.net" target="_blank" class="text-decoration-none contrast--text" >
                clients@fast-easy.net
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="footer__disclaimer contrast--text text-center">
          12+ На этом сайте используются рекомендательные технологии
        </div>
        <div class="footer__policy d-flex mt-3 align-center">
          <img src="@/static/svg/logo-sec.svg" alt="logo secondary" class="mr-3 d-none d-md-block" />
          <div class="footer__policy-text text-md-center contrast--text">
            Электронное переодическое издание «Электронная торговая площадка FASTENDER.RU  www.fastender.ru» (12+) зарегистрировано в Роскомнадзоре 17.07.2009 г. Номер свидетельства о регистрации СМИ ЭЛ № ФС77-36874.  Учредитель – ООО «МХ 1», главный редактор – Гуров А.А.2019
          </div>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
  data() {
    return {
      menu: [
        {
          title: 'КЛИЕНТУ',
          nav: [
            {
              name: 'СЕРВИСЫ',
              link: '/'
            },
            {
              name: 'БАНКОВСКИЕ РЕКВИЗИТЫ',
              link: '/'
            },
            {
              name: 'ДОКУМЕНТЫ',
              link: '/'
            },
            {
              name: 'IT-РЕШЕНИЯ',
              link: '/'
            },
            {
              name: 'ОТЗЫВЫ',
              link: '/'
            }
          ]
        },
        {
          title: 'НАПРАВЛЕНИЯ',
          nav: [
            {
              name: 'ДМС',
              link: '/'
            },
            {
              name: 'Страхование имущества',
              link: '/'
            },
            {
              name: 'Страхование грузов',
              link: '/'
            }
          ]
        },
        {
          title: 'ПОЛЬЗОВАТЕЛЮ',
          nav: [
            {
              name: 'О КОМПАНИИ',
              link: '/'
            },
            {
              name: 'ОБУЧЕНИЕ',
              link: '/'
            },
            {
              name: 'ВАКАНСИИ',
              link: '/'
            },
            {
              name: 'ПОМОЩЬ',
              link: '/'
            },
            {
              name: 'СТОИМОСТЬ',
              link: '/'
            }
          ]
        },
      ],
      contactInfo: 'Общество с ограниченной ответственностью<br/>«Лаборатория автоматизации бизнеса»<br/>ИНН 7730250197<br/>ОГРН 1197746205084<br/>КПП 773001001'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 46px 0;
  margin-bottom: 136px;

  @media (max-width:768px) {
    margin-bottom: 230px;
  }

  &__container {
    row-gap: 50px;

    @media (max-width:768px) {
      row-gap: 25px;
    }
  }

  &__top {
    column-gap: 20px;
  }

  &__disclaimer {
    font-size: 12px;
  }

  &__policy {
    &-text {
      font-size: 12px;
    }
  }

  &__menu {
    row-gap: 22px;

    @media (max-width:768px) {
      display: none !important;
    }

    &-title {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }

    &-link {
      font-size: 14px;

      &_item {
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__contacts {
    max-width: 377px;

    @media (max-width:768px) {
      max-width: unset;
    }

    &-title {
      font-size: 14px;
      text-transform: uppercase;

      @media (max-width:768px) {
        display: none;
      }
    }

    &-image {
      height: 30px;
    }

    &-content {
      font-size: 14px;
    }

    &-agree {
      font-size: 14px;
      font-weight: 500;
    }

    &-links {
      row-gap: 16px;;
    }
  }

  &__phone,
  &__email {
    column-gap: 12px;
  }

  &__email {
    &-prefix {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>