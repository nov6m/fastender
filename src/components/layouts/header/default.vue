<template>
  <header class="header background">
    <v-container class="d-flex justify-space-between align-center py-5">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/static/svg/logo.svg" alt="logo" />
        </router-link>
      </div>
      <nav class="d-flex header__navigation justisfy-space-between">
        <RouterLink v-for="(item, key) in CONFIG.nav" :key="key" :to="item.link" class="header__navigation-link text-decoration-none contrast--text">
          {{ item.text }}
        </RouterLink>
      </nav>
      <div class="header__short-info d-flex align-center">
        <div class="header__phone d-flex align-items">
          <img src="@/static/svg/phone.svg" alt="phone icon" />
          <a href="tel:+74996784591" target="_blank" class="text-decoration-none contrast--text" >
            +7 499 678-45-91
          </a>
        </div>
        <div class="header__right d-flex align-center">
          <v-input-search v-model="search" prepend-inner-icon="mdi-magnify" dense hide-details placeholder="Поиск" class="tertiaryText--text" />
          <RouterLink to="/" class="header__navigation-link text-decoration-none contrast--text">
            Вход
          </RouterLink>
          <RouterLink to="/#fast-start" class="header__navigation-link text-decoration-none contrast--text">
            Начать тендер
          </RouterLink>
          <RouterLink to="/" class="header__navigation-link text-decoration-none contrast--text">
            <v-icon color="contrast" size="24">
              mdi-account-circle-outline
            </v-icon>
          </RouterLink>
        </div>
      </div>
      <div class="header__burger" @click="menuIsActive = !menuIsActive">
        <span
          v-for="n in 3"
          :key="n"
          class="header__burger-item tertiaryText"
          :class="{ 'header__burger-item_active': menuIsActive }"
        />
      </div>
    </v-container>
    <div class="header__mobile background" :class="{ 'header__mobile_active': menuIsActive}">
      <div class="header__mobile-container py-10 px-12 d-flex flex-column">
        <div class="d-flex justify-space-between align-center">
          <div class="header__mobile-top d-flex">
            <div @click="menuIsActive = false">
              <RouterLink to="/" class="header__navigation-link text-decoration-none contrast--text">
                Вход
              </RouterLink>
            </div>
            <div @click="menuIsActive = false">
              <RouterLink to="/#fast-start" class="header__navigation-link text-decoration-none contrast--text">
                Начать тендер
              </RouterLink>
            </div>
          </div>
          <v-icon color="tertiaryText" size="40" @click="menuIsActive = false">
            mdi-close
          </v-icon>
        </div>
        <div>
          <nav class="d-flex flex-column header__mobile-navigation">
            <div v-for="(item, key) in CONFIG.nav" :key="key" @click="menuIsActive = false">
              <RouterLink
                :to="item.link"
                class="header__navigation-link text-decoration-none contrast--text"
              >
                {{ item.text }}
              </RouterLink>
            </div>
          </nav>
        </div>
        <div>
          <v-input-search v-model="search" prepend-inner-icon="mdi-magnify" dense hide-details placeholder="Поиск" class="tertiaryText--text" />
        </div>
        <div>
          <div class="header__phone d-flex align-items">
            <img src="@/static/svg/phone.svg" alt="phone icon" />
            <a href="tel:+74996784591" target="_blank" class="text-decoration-none contrast--text" >
              +7 499 678-45-91
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { VInputSearch } from '@/components/ui';

const CONFIG = Object.freeze({
  nav: [
    {
      text: 'О сервисе',
      link: '/#about'
    },
    {
      text: 'Варианты тендеров',
      link: '/#variants'
    },
    {
      text: 'Наши преимущества',
      link: '/#advantages'
    },
    {
      text: 'Тарифы',
      link: '/#rates'
    },
    {
      text: 'FAQ',
      link: '/#faq'
    }
  ]
})

export default {
  name: 'HeaderDefault',
  components: { VInputSearch },
  data() {
    return {
      CONFIG,
      dialog: false,
      menuIsActive: false,
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 4px 10px 0px rgba(34, 60, 80, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  .header__logo {
    height: 30px;
  }

  &__navigation {
    column-gap: 60px;

    @media (max-width: 1440px) {
      display: none !important;
    }
  }

  &__phone {
    font-size: 14px;
    column-gap: 12px;
    height: 16px;
  }
  
  .header__navigation-link {
    font-size: 14px;
  }

  &__right {
    column-gap: 20px;
  }

  &__short-info {
    column-gap: 40px;

    @media (max-width: 1440px) {
      display: none !important;
    }
  }

  &__burger {
    margin-left: 32px;
    width: 26px;
    height: 18px;
    display: none;
    cursor: pointer;

    @media (max-width: 1440px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-item {
    height: 4px;
    border-radius: 10px;
    width: 100%;
    transition: all 0.4s;

      &_active {
        transition: all 0.4s;

        &:nth-child(1) {
          transform: rotate(45deg) translateY(-3px);
          transform-origin: left;
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translateY(3px);
          transform-origin: left;
        }
      }
    }
  }

  &__mobile {
    position: absolute;
    z-index: 500;
    height: 100vh;
    width: 100%;
    transform: translateX(-100%);
    transition: transform 0.5s;
    top: 0;

    &_active {
      transform: translateX(0%);
    }

    &-container {
      position: relative;
      row-gap: 50px;
    }

    &-top {
      column-gap: 20px;
    }

    &-navigation {
      row-gap: 20px;
    }
  }
}
</style>