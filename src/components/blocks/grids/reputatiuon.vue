<template>
  <div class="reputation">
    <div class="reputation__background-grid">
      <div class="d-flex justify-center">
        <img src="@/static/images/reputation-bg.png" class="reputation__image" />
      </div>
      <div></div>
    </div>
    <v-container>
      <div class="reputation__grid">
        <div></div>
        <div class="reputation__container d-flex flex-column justify-center">
          <div class="reputation__title contrast--text">
            Компания с проверенной репутацией
          </div>
          <div class="reputation__description mt-6 contrast--text">
            Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы могут быть объявлены нарушающими общечеловеческие нормы этики и морали! Наше дело не так однозначно, как может показаться: перспективное планирование позволяет оценить значение первоочередных требований. Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы могут быть объявлены нарушающими общечеловеческие нормы этики 

            Наше дело не так однозначно, как может показаться: перспективное планирование позволяет оценить значение первоочередных требований. Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы могут быть объявлены нарушающими общечеловеческие нормы этики
          </div>
          <div class="mt-6">
            <v-button class="reputation__button">
              Подробнее
            </v-button>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { VButton } from '@/components/ui';

export default {
  name: 'GridReputation',
  components: { VButton }
}
</script>

<style lang="scss" scoped>
.reputation {
  position: relative;
  height: 1000px;
  overflow: hidden;

  @media (max-width:768px) {
    height: unset;
  }


  &__background-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width:768px) {
      display: none;
    }
  }

  &__image {
    object-fit: cover;
    width: 100%;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 10;

    @media (max-width:768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__container {
    height: 1000px;
    padding-left: 64px;

    @media (max-width:1024px) {
      padding-left: 40px;
    }

    @media (max-width:768px) {
      height: unset;
      padding-left: 0px;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__description {
    font-size: 18px;

    @media (max-width:768px) {
      font-size: 15px;
    }
  }

  &__button {
    width: 254px;
    font-size: 18px;

    @media (max-width:768px) {
      font-size: 16px;
      width: 100%;
    }
  }
}
</style>